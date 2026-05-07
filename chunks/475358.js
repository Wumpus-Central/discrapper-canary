"use strict";
n.d(t, { e: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(574381),
    o = n(460890),
    l = n(562429);
function u(e) {
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
function c(e) {
    let { children: t, text: n, macText: r, label: s, macLabel: o } = e,
        u = (0, a.cX)() || (0, a.Sn)(),
        c = u && null != r ? l.systemFont : void 0,
        d = u && null != o ? o : s,
        _ = u && null != r ? r : (t ?? n);
    return (0, i.jsx)("span", {
        className: c,
        role: null != d ? "img" : void 0,
        "aria-label": d ?? void 0,
        children: _,
    });
}
function d(e) {
    let { shortcut: t, dim: n = !1, className: r, keyClassName: a } = e,
        { i18n: d } = (0, o.G9)(),
        _ = {
            ctrl: () => (0, i.jsx)(c, { macText: "\u2303", text: "ctrl", label: d.KEY_CTRL_A11Y_LABEL }),
            cmd: () => (0, i.jsx)(c, { macText: "\u2318", text: "cmd", label: d.KEY_CMD_A11Y_LABEL }),
            mod: () =>
                (0, i.jsx)(c, {
                    macText: "\u2318",
                    text: "ctrl",
                    label: d.KEY_CTRL_A11Y_LABEL,
                    macLabel: d.KEY_CMD_A11Y_LABEL,
                }),
            alt: () =>
                (0, i.jsx)(c, {
                    macText: "\u2325",
                    text: "alt",
                    label: d.KEY_ALT_A11Y_LABEL,
                    macLabel: d.KEY_OPTION_A11Y_LABEL,
                }),
            shift: () => (0, i.jsx)(c, { macText: "\u21E7", text: d.KEY_SHIFT, label: d.KEY_SHIFT_A11Y_LABEL }),
            up: () =>
                (0, i.jsx)(c, {
                    label: d.KEY_UP_A11Y_LABEL,
                    macText: "\u25B2",
                    children: (0, i.jsx)(u, { direction: "up" }),
                }),
            down: () =>
                (0, i.jsx)(c, {
                    label: d.KEY_DOWN_A11Y_LABEL,
                    macText: "\u25BC",
                    children: (0, i.jsx)(u, { direction: "down" }),
                }),
            left: () =>
                (0, i.jsx)(c, {
                    label: d.KEY_LEFT_A11Y_LABEL,
                    macText: "\u25C0",
                    children: (0, i.jsx)(u, { direction: "left" }),
                }),
            right: () =>
                (0, i.jsx)(c, {
                    label: d.KEY_RIGHT_A11Y_LABEL,
                    macText: "\u25B6",
                    children: (0, i.jsx)(u, { direction: "right" }),
                }),
            pageup: () => d.KEY_PAGEUP,
            pagedown: () => d.KEY_PAGEDOWN,
            "any-character": () => d.KEY_ANY,
            plus: () => "+",
            return: () =>
                (0, i.jsx)(c, {
                    macText: "\u23CE",
                    text: d.KEY_ENTER,
                    label: d.KEY_ENTER_A11Y_LABEL,
                    macLabel: d.KEY_RETURN_A11Y_LABEL,
                }),
            enter: () =>
                (0, i.jsx)(c, {
                    macText: "\u23CE",
                    text: d.KEY_ENTER,
                    label: d.KEY_ENTER_A11Y_LABEL,
                    macLabel: d.KEY_RETURN_A11Y_LABEL,
                }),
            escape: () => (0, i.jsx)(c, { text: d.KEY_ESCAPE, label: d.KEY_ESCAPE_A11Y_LABEL }),
            esc: () => (0, i.jsx)(c, { text: d.KEY_ESCAPE, label: d.KEY_ESCAPE_A11Y_LABEL }),
            backspace: () =>
                (0, i.jsx)(c, {
                    macText: "\u232B",
                    text: d.KEY_BACKSPACE,
                    label: d.KEY_BACKSPACE_A11Y_LABEL,
                    macLabel: d.KEY_DELETE_A11Y_LABEL,
                }),
        },
        f = Array.isArray(t) ? t : t.split("+");
    return (0, i.jsx)("div", {
        className: s()(l.combo, r, { [l.dim]: n }),
        children: f
            .map((e) => (null != _[e] ? _[e]() : e))
            .map((e, t) => (0, i.jsx)("span", { className: s()(l.key, a), children: e }, t)),
    });
}
