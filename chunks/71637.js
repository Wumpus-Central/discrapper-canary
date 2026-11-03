(n.d(t, {
    BL: () => m,
    Bx: () => c,
    CZ: () => o,
    Ch: () => a,
    Hm: () => l,
    N: () => i,
    Q9: () => h,
    QU: () => r,
    Sk: () => u,
    W1: () => p,
}),
    n(321073));
let r = Object.freeze({ x: 0.5, y: 0.5 });
function l(e, t, n) {
    let { x: l, y: i, width: a, height: o } = e.rect;
    return a < 1 || o < 1 ? r : { x: Math.min(1, Math.max(0, (t - l) / a)), y: Math.min(1, Math.max(0, (n - i) / o)) };
}
let i = 1e3;
function a(e) {
    return "" !== e.trim();
}
function o(e, t, n) {
    let r = null,
        l = 1 / 0;
    for (let i of e) {
        let { x: e, y: a, width: o, height: u } = i.rect;
        if (o < 1 || u < 1 || t < e || n < a || t > e + o || n > a + u) continue;
        let c = o * u;
        c < l && ((r = i), (l = c));
    }
    return r;
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
function c(e) {
    let { kind: t, name: n } = u(e);
    return [t, n].filter((e) => "" !== e).join(" ");
}
function s(e) {
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
    let { kind: n, name: r } = u(e),
        l = [n, r].filter((e) => "" !== e).join(": ");
    return `${d}${l}${f}${s(e)}
${t.trim()}`;
}
function p(e) {
    if (!e.startsWith(d)) return null;
    let t = e.indexOf("\n"),
        n = -1 === t ? e : e.slice(0, t),
        r = -1 === t ? "" : e.slice(t + 1),
        l = n.slice(d.length),
        i = l.indexOf(f),
        a = (-1 === i ? l : l.slice(0, i)).trim();
    return "" === a ? null : { label: a, body: r };
}
function m(e) {
    let { annotations: t, metaComment: n, context: r } = e,
        l = t.filter((e) => a(e.comment)),
        o = [];
    if (
        (o.push(`My design feedback: ${1 === l.length ? "1 comment" : `${l.length} comments`} on the app.`), null != r)
    ) {
        let e = r.title.trim(),
            t = "" !== e ? `${e} (${r.url})` : r.url;
        (o.push(`Page: ${t}, viewport ${r.viewport.width}x${r.viewport.height}.`),
            o.push(
                "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
            ));
    }
    l.forEach((e, t) => {
        let n;
        (o.push(""),
            o.push(`${t + 1}. ${s(e.target)}`),
            o.push(`   Feedback: ${(n = e.comment.trim()).length <= i ? n : `${n.slice(0, i)}\u{2026}`}`));
    });
    let u = n.trim();
    return ("" !== u && (o.push(""), o.push(`Note for the whole batch: ${u}`)), o.join("\n"));
}
