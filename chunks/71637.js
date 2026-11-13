n(321073);
let l = Object.freeze({ x: 0.5, y: 0.5 });
function r(e) {
    return "" !== e.trim();
}
function i(e) {
    let t = e.name.trim(),
        n = (function (e) {
            switch (e.role) {
                case "button":
                    return "Button";
                case "link":
                    return "Link";
                case "heading":
                    return "Heading";
                case "textbox":
                    return "Input";
                case "checkbox":
                    return "Checkbox";
                case "radio":
                    return "Radio";
                case "combobox":
                    return "Dropdown";
                case "slider":
                    return "Slider";
                case "switch":
                    return "Toggle";
                case "img":
                    return "Image";
                case "list":
                    return "List";
                case "listitem":
                    return "List item";
                case "tab":
                    return "Tab";
                case "menuitem":
                    return "Menu item";
                case "dialog":
                    return "Dialog";
                case "progressbar":
                    return "Progress bar";
                case "separator":
                    return "Divider";
                case "label":
                    return "Label";
            }
            switch (e.tag) {
                case "img":
                case "picture":
                    return "Image";
                case "svg":
                    return "Icon";
                case "video":
                    return "Video";
                case "canvas":
                    return "Canvas";
                case "p":
                case "span":
                case "strong":
                case "em":
                case "small":
                case "blockquote":
                case "code":
                case "li":
                    return "Text";
                case "form":
                    return "Form";
                case "ul":
                case "ol":
                    return "List";
                case "table":
                    return "Table";
                case "header":
                    return "Header";
                case "footer":
                    return "Footer";
                case "nav":
                    return "Navigation";
                case "section":
                case "article":
                case "main":
                case "aside":
                case "figure":
                    return "Section";
                case "div":
                    return "Container";
            }
            return null;
        })(e);
    return null == n
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: n, name: t };
}
function a(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let n = e.name.trim();
    return (
        "" !== n && t.push(`name="${n}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        null != e.marker && t.push(`marker="${e.marker}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let o = "[conjure:selected] ",
    u = " \u2014 ";
n.d(
    t,
    {},
    {
        BL: function (e) {
            let { annotations: t, metaComment: n, context: l } = e,
                i = t.filter((e) => r(e.comment)),
                o = [];
            if (
                (o.push(`My design feedback: ${1 === i.length ? "1 comment" : `${i.length} comments`} on the app.`),
                null != l)
            ) {
                let e = l.title.trim(),
                    t = "" !== e ? `${e} (${l.url})` : l.url;
                (o.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
                    o.push(
                        "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                    ));
            }
            i.forEach((e, t) => {
                let n;
                (o.push(""),
                    o.push(`${t + 1}. ${a(e.target)}`),
                    o.push(`   Feedback: ${(n = e.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`));
            });
            let u = n.trim();
            return ("" !== u && (o.push(""), o.push(`Note for the whole batch: ${u}`)), o.join("\n"));
        },
        Bx: function (e) {
            let { kind: t, name: n } = i(e);
            return [t, n].filter((e) => "" !== e).join(" ");
        },
        CZ: function (e, t, n) {
            let l = null,
                r = 1 / 0;
            for (let i of e) {
                let { x: e, y: a, width: o, height: u } = i.rect;
                if (o < 1 || u < 1 || t < e || n < a || t > e + o || n > a + u) continue;
                let s = o * u;
                s < r && ((l = i), (r = s));
            }
            return l;
        },
        Ch: r,
        Hm: function (e, t, n) {
            let { x: r, y: i, width: a, height: o } = e.rect;
            return a < 1 || o < 1
                ? l
                : { x: Math.min(1, Math.max(0, (t - r) / a)), y: Math.min(1, Math.max(0, (n - i) / o)) };
        },
        Q9: function (e, t) {
            let { kind: n, name: l } = i(e),
                r = [n, l].filter((e) => "" !== e).join(": ");
            return `${o}${r}${u}${a(e)}
${t.trim()}`;
        },
        QU: l,
        Sk: i,
        W1: function (e) {
            if (!e.startsWith(o)) return null;
            let t = e.indexOf("\n"),
                n = -1 === t ? e : e.slice(0, t),
                l = -1 === t ? "" : e.slice(t + 1),
                r = n.slice(o.length),
                i = r.indexOf(u),
                a = (-1 === i ? r : r.slice(0, i)).trim();
            return "" === a ? null : { label: a, body: l };
        },
    },
);
