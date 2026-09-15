(l.d(t, {
    F6: () => n,
    LL: () => h,
    Mx: () => g,
    ec: () => a,
    gq: () => r,
    iw: () => u,
    jo: () => s,
    to: () => i,
    ts: () => o,
    v_: () => f,
}),
    l(321073));
let n = Object.freeze({ x: 0.5, y: 0.5 });
function a(e, t, l) {
    let { x: a, y: r, width: i, height: s } = e.rect;
    return i < 1 || s < 1 ? n : { x: Math.min(1, Math.max(0, (t - a) / i)), y: Math.min(1, Math.max(0, (l - r) / s)) };
}
let r = 1e3;
function i(e) {
    return "" !== e.trim();
}
function s(e, t, l) {
    let n = null,
        a = 1 / 0;
    for (let r of e) {
        let { x: e, y: i, width: s, height: o } = r.rect;
        if (s < 1 || o < 1 || t < e || l < i || t > e + s || l > i + o) continue;
        let u = s * o;
        u < a && ((n = r), (a = u));
    }
    return n;
}
function o(e) {
    let t = e.name.trim(),
        l = (function (e) {
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
    return null == l
        ? "" === t
            ? { kind: "" !== e.role ? e.role : e.tag, name: "" }
            : { kind: "", name: t }
        : { kind: l, name: t };
}
function u(e) {
    let { kind: t, name: l } = o(e);
    return [t, l].filter((e) => "" !== e).join(" ");
}
function d(e) {
    let t = [`<${e.tag}>`];
    "" !== e.role && t.push(`role=${e.role}`);
    let l = e.name.trim();
    return (
        "" !== l && t.push(`name="${l}"`),
        null != e.value && "" !== e.value && t.push(`value="${e.value}"`),
        null != e.path && "" !== e.path && t.push(`path="${e.path}"`),
        t.push(`at x=${e.rect.x} y=${e.rect.y}`),
        t.push(`size ${e.rect.width}x${e.rect.height}`),
        t.push(`ref=${e.ref}`),
        t.join(" ")
    );
}
let c = "[vibegrations:selected] ",
    m = " \u2014 ";
function f(e, t) {
    let { kind: l, name: n } = o(e),
        a = [l, n].filter((e) => "" !== e).join(": ");
    return `${c}${a}${m}${d(e)}
${t.trim()}`;
}
function h(e) {
    if (!e.startsWith(c)) return null;
    let t = e.indexOf("\n"),
        l = -1 === t ? e : e.slice(0, t),
        n = -1 === t ? "" : e.slice(t + 1),
        a = l.slice(c.length),
        r = a.indexOf(m),
        i = (-1 === r ? a : a.slice(0, r)).trim();
    return "" === i ? null : { label: i, body: n };
}
function g(e) {
    let { annotations: t, metaComment: l, context: n } = e,
        a = t.filter((e) => i(e.comment)),
        s = [];
    if (
        (s.push(`My design feedback: ${1 === a.length ? "1 comment" : `${a.length} comments`} on the app.`), null != n)
    ) {
        let e = n.title.trim(),
            t = "" !== e ? `${e} (${n.url})` : n.url;
        (s.push(`Page: ${t}, viewport ${n.viewport.width}x${n.viewport.height}.`),
            s.push(
                "Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.",
            ));
    }
    a.forEach((e, t) => {
        let l;
        (s.push(""),
            s.push(`${t + 1}. ${d(e.target)}`),
            s.push(`   Feedback: ${(l = e.comment.trim()).length <= r ? l : `${l.slice(0, r)}\u{2026}`}`));
    });
    let o = l.trim();
    return ("" !== o && (s.push(""), s.push(`Note for the whole batch: ${o}`)), s.join("\n"));
}
