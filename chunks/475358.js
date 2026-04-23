"use strict";
n.d(t, { e: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(574381),
    o = n(460890),
    l = n(562429);
function d(e) {
    let { direction: t = "up" } = e;
    return (0, i.jsx)("svg", {
        width: "10",
        height: "10",
        xmlns: "http://www.w3.org/2000/svg",
        className: s()(l.bindArrow, l[t]),
        children: (0, i.jsx)("g", {
            fill: "#FFFFFF",
            children: (0, i.jsx)("polygon", {
                transform: "translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ",
                points: "4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10",
            }),
        }),
    });
}
function _(e) {
    let { children: t, text: n, macText: r, label: s, macLabel: o } = e,
        d = (0, a.cX)() || (0, a.Sn)(),
        _ = d && null != r ? l.systemFont : void 0,
        u = d && null != o ? o : s,
        c = d && null != r ? r : (t ?? n);
    return (0, i.jsx)("span", {
        className: _,
        role: null != u ? "img" : void 0,
        "aria-label": u ?? void 0,
        children: c,
    });
}
function u(e) {
    let { shortcut: t, dim: n = !1, className: r, keyClassName: a } = e,
        { i18n: u } = (0, o.G9)(),
        c = {
            ctrl: () => (0, i.jsx)(_, { macText: "⌃", text: "ctrl", label: u.KEY_CTRL_A11Y_LABEL }),
            cmd: () => (0, i.jsx)(_, { macText: "⌘", text: "cmd", label: u.KEY_CMD_A11Y_LABEL }),
            mod: () =>
                (0, i.jsx)(_, {
                    macText: "⌘",
                    text: "ctrl",
                    label: u.KEY_CTRL_A11Y_LABEL,
                    macLabel: u.KEY_CMD_A11Y_LABEL,
                }),
            alt: () =>
                (0, i.jsx)(_, {
                    macText: "⌥",
                    text: "alt",
                    label: u.KEY_ALT_A11Y_LABEL,
                    macLabel: u.KEY_OPTION_A11Y_LABEL,
                }),
            shift: () => (0, i.jsx)(_, { macText: "⇧", text: u.KEY_SHIFT, label: u.KEY_SHIFT_A11Y_LABEL }),
            up: () =>
                (0, i.jsx)(_, {
                    label: u.KEY_UP_A11Y_LABEL,
                    macText: "▲",
                    children: (0, i.jsx)(d, { direction: "up" }),
                }),
            down: () =>
                (0, i.jsx)(_, {
                    label: u.KEY_DOWN_A11Y_LABEL,
                    macText: "▼",
                    children: (0, i.jsx)(d, { direction: "down" }),
                }),
            left: () =>
                (0, i.jsx)(_, {
                    label: u.KEY_LEFT_A11Y_LABEL,
                    macText: "◀",
                    children: (0, i.jsx)(d, { direction: "left" }),
                }),
            right: () =>
                (0, i.jsx)(_, {
                    label: u.KEY_RIGHT_A11Y_LABEL,
                    macText: "▶",
                    children: (0, i.jsx)(d, { direction: "right" }),
                }),
            pageup: () => u.KEY_PAGEUP,
            pagedown: () => u.KEY_PAGEDOWN,
            "any-character": () => u.KEY_ANY,
            plus: () => "+",
            return: () =>
                (0, i.jsx)(_, {
                    macText: "⏎",
                    text: u.KEY_ENTER,
                    label: u.KEY_ENTER_A11Y_LABEL,
                    macLabel: u.KEY_RETURN_A11Y_LABEL,
                }),
            enter: () =>
                (0, i.jsx)(_, {
                    macText: "⏎",
                    text: u.KEY_ENTER,
                    label: u.KEY_ENTER_A11Y_LABEL,
                    macLabel: u.KEY_RETURN_A11Y_LABEL,
                }),
            escape: () => (0, i.jsx)(_, { text: u.KEY_ESCAPE, label: u.KEY_ESCAPE_A11Y_LABEL }),
            esc: () => (0, i.jsx)(_, { text: u.KEY_ESCAPE, label: u.KEY_ESCAPE_A11Y_LABEL }),
            backspace: () =>
                (0, i.jsx)(_, {
                    macText: "⌫",
                    text: u.KEY_BACKSPACE,
                    label: u.KEY_BACKSPACE_A11Y_LABEL,
                    macLabel: u.KEY_DELETE_A11Y_LABEL,
                }),
        },
        E = Array.isArray(t) ? t : t.split("+");
    return (0, i.jsx)("div", {
        className: s()(l.combo, r, { [l.dim]: n }),
        children: E.map((e) => (null != c[e] ? c[e]() : e)).map((e, t) =>
            (0, i.jsx)("span", { className: s()(l.key, a), children: e }, t),
        ),
    });
}
