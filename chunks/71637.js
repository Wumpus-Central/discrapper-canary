(n.d(t, {
    BL: () => p,
    Bx: () => o,
    CZ: () => s,
    Ch: () => i,
    Hm: () => r,
    N: () => a,
    Q9: () => h,
    QU: () => l,
    Sk: () => u,
    W1: () => m,
}),
    n(321073));
let l = Object.freeze({ x: 0.5, y: 0.5 });
function r(e, t, n) {
    let { x: r, y: a, width: i, height: s } = e.rect;
    return i < 1 || s < 1 ? l : { x: Math.min(1, Math.max(0, (t - r) / i)), y: Math.min(1, Math.max(0, (n - a) / s)) };
}
let a = 1e3;
function i(e) {
    return "" !== e.trim();
}
function s(e, t, n) {
    let l = null,
        r = 1 / 0;
    for (let a of e) {
        let { x: e, y: i, width: s, height: u } = a.rect;
        if (s < 1 || u < 1 || t < e || n < i || t > e + s || n > i + u) continue;
        let o = s * u;
        o < r && ((l = a), (r = o));
    }
    return l;
}
function u(e) {
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
function o(e) {
    let { kind: t, name: n } = u(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function c(e) {
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
let d = "[conjure:selected] ",
    f = " \u2014 ";
function h(e, t) {
    let { kind: n, name: l } = u(e),
        r = [n, l].filter((e) => "" !== e).join(": ");
    return `${d}${r}${f}${c(e)}
${t.trim()}`;
}
function m(e) {
    if (!e.startsWith(d)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        l = -1 === t ? "" : e.slice(t + 1),
        r = n.slice(d.length),
        a = r.indexOf(f),
        i = (-1 === a ? r : r.slice(0, a)).trim();
    return "" === i ? null : { label: i, body: l };
}
function p(e) {
    let { annotations: t, metaComment: n, context: l } = e,
        r = t.filter((e) => i(e.comment)),
        s = [];
    if (
        (s.push(`My design feedback: ${1 === r.length ? "1 comment" : `${r.length} comments`} on the app.`), null != l)
    ) {
        let e = l.title.trim(),
            t = "" !== e ? `${e} (${l.url})` : l.url;
        (s.push(`Page: ${t}, viewport ${l.viewport.width}x${l.viewport.height}.`),
            s.push(
                "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
            ));
    }
    r.forEach((e, t) => {
        let n;
        (s.push(""),
            s.push(`${t + 1}. ${c(e.target)}`),
            s.push(`   Feedback: ${(n = e.comment.trim()).length <= a ? n : `${n.slice(0, a)}\u{2026}`}`));
    });
    let u = n.trim();
    return ("" !== u && (s.push(""), s.push(`Note for the whole batch: ${u}`)), s.join("\n"));
}
