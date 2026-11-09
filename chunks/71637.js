n(321073);
let r = Object.freeze({ x: 0.5, y: 0.5 });
function l(t) {
    return "" !== t.trim();
}
function i(t) {
    let e = t.name.trim(),
        n = (function (t) {
            switch (t.role) {
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
            switch (t.tag) {
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
        })(t);
    return null == n
        ? "" === e
            ? { kind: "" !== t.role ? t.role : t.tag, name: "" }
            : { kind: "", name: e }
        : { kind: n, name: e };
}
function a(t) {
    let e = [`<${t.tag}>`];
    "" !== t.role && e.push(`role=${t.role}`);
    let n = t.name.trim();
    return (
        "" !== n && e.push(`name="${n}"`),
        null != t.value && "" !== t.value && e.push(`value="${t.value}"`),
        null != t.path && "" !== t.path && e.push(`path="${t.path}"`),
        null != t.marker && e.push(`marker="${t.marker}"`),
        e.push(`at x=${t.rect.x} y=${t.rect.y}`),
        e.push(`size ${t.rect.width}x${t.rect.height}`),
        e.push(`ref=${t.ref}`),
        e.join(" ")
    );
}
let o = "[conjure:selected] ",
    u = " \u2014 ";
n.d(
    e,
    {},
    {
        BL: function (t) {
            let { annotations: e, metaComment: n, context: r } = t,
                i = e.filter((t) => l(t.comment)),
                o = [];
            if (
                (o.push(`My design feedback: ${1 === i.length ? "1 comment" : `${i.length} comments`} on the app.`),
                null != r)
            ) {
                let t = r.title.trim(),
                    e = "" !== t ? `${t} (${r.url})` : r.url;
                (o.push(`Page: ${e}, viewport ${r.viewport.width}x${r.viewport.height}.`),
                    o.push(
                        "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
                    ));
            }
            i.forEach((t, e) => {
                let n;
                (o.push(""),
                    o.push(`${e + 1}. ${a(t.target)}`),
                    o.push(`   Feedback: ${(n = t.comment.trim()).length <= 1e3 ? n : `${n.slice(0, 1e3)}\u{2026}`}`));
            });
            let u = n.trim();
            return ("" !== u && (o.push(""), o.push(`Note for the whole batch: ${u}`)), o.join("\n"));
        },
        Bx: function (t) {
            let { kind: e, name: n } = i(t);
            return [e, n].filter((t) => "" !== t).join(" ");
        },
        CZ: function (t, e, n) {
            let r = null,
                l = 1 / 0;
            for (let i of t) {
                let { x: t, y: a, width: o, height: u } = i.rect;
                if (o < 1 || u < 1 || e < t || n < a || e > t + o || n > a + u) continue;
                let s = o * u;
                s < l && ((r = i), (l = s));
            }
            return r;
        },
        Ch: l,
        Hm: function (t, e, n) {
            let { x: l, y: i, width: a, height: o } = t.rect;
            return a < 1 || o < 1
                ? r
                : { x: Math.min(1, Math.max(0, (e - l) / a)), y: Math.min(1, Math.max(0, (n - i) / o)) };
        },
        Q9: function (t, e) {
            let { kind: n, name: r } = i(t),
                l = [n, r].filter((t) => "" !== t).join(": ");
            return `${o}${l}${u}${a(t)}
${e.trim()}`;
        },
        QU: r,
        Sk: i,
        W1: function (t) {
            if (!t.startsWith(o)) return null;
            let e = t.indexOf("\n"),
                n = -1 === e ? t : t.slice(0, e),
                r = -1 === e ? "" : t.slice(e + 1),
                l = n.slice(o.length),
                i = l.indexOf(u),
                a = (-1 === i ? l : l.slice(0, i)).trim();
            return "" === a ? null : { label: a, body: r };
        },
    },
);
