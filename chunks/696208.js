"use strict";
n.d(t, { H: () => d, e: () => _ }), n(30146);
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(821609),
    o = n(825484),
    l = n(150934),
    u = n(460890),
    c = n(110992);
function d(e) {
    let { leading: t, actions: n = [], actionsFullWidth: i = !1, leadingLayout: l = "default" } = e;
    if (null == t && n.length < 1) return null;
    let u = ["primary", "critical-primary", "expressive"],
        d = n.findLastIndex((e) => null != e.variant && u.includes(e.variant));
    return (0, r.jsxs)("footer", {
        className: s()(c.actionBar, c.section, { [c.actionBarLayoutChatInput]: "chat-input" === l }),
        children: [
            null != t && (0, r.jsx)("div", { className: c.actionBarLeading, children: t }),
            (0, r.jsx)("div", {
                className: s()(c.actionBarTrailing, { [c.actionBarTrailingFullWidth]: i }),
                children: (0, r.jsx)(o.e, {
                    fullWidth: i,
                    children: n?.map((e, t) => (0, r.jsx)(a.$, { autoFocus: e.autoFocus ?? d === t, ...e }, t)),
                }),
            }),
        ],
    });
}
function _(e) {
    let { label: t, ...n } = e,
        { i18n: i } = (0, u.G9)();
    return (0, r.jsx)("div", {
        className: c.actionBarCheckbox,
        children: (0, r.jsx)(l.S, { ...n, label: t ?? i.MODAL_DONT_SHOW_AGAIN, labelType: "secondary" }),
    });
}
