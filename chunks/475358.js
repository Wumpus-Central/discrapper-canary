"use strict";
n.d(t, { e: () => c });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(574381),
    o = n(460890),
    l = n(562429);
function u(e) {
    let { direction: t = "up" } = e;
    return (0, r.jsx)("svg", {
        width: "10",
        height: "10",
        xmlns: "http://www.w3.org/2000/svg",
        className: s()(l.bindArrow, l[t]),
        children: (0, r.jsx)("g", {
            fill: "#FFFFFF",
            children: (0, r.jsx)("polygon", {
                transform: "translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ",
                points: "4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10",
            }),
        }),
    });
}
function d(e) {
    let { children: t, text: n, macText: i, label: s, macLabel: o } = e,
        u = (0, a.cX)() || (0, a.Sn)(),
        d = u && null != i ? l.systemFont : void 0,
        c = u && null != o ? o : s,
        _ = u && null != i ? i : (t ?? n);
    return (0, r.jsx)("span", {
        className: d,
        role: null != c ? "img" : void 0,
        "aria-label": c ?? void 0,
        children: _,
    });
}
function c(e) {
    let { shortcut: t, dim: n = !1, className: i, keyClassName: a } = e,
        { i18n: c } = (0, o.G9)(),
        _ = {
            ctrl: () => (0, r.jsx)(d, { macText: "⌃", text: "ctrl", label: c.KEY_CTRL_A11Y_LABEL }),
            cmd: () => (0, r.jsx)(d, { macText: "⌘", text: "cmd", label: c.KEY_CMD_A11Y_LABEL }),
            mod: () =>
                (0, r.jsx)(d, {
                    macText: "⌘",
                    text: "ctrl",
                    label: c.KEY_CTRL_A11Y_LABEL,
                    macLabel: c.KEY_CMD_A11Y_LABEL,
                }),
            alt: () =>
                (0, r.jsx)(d, {
                    macText: "⌥",
                    text: "alt",
                    label: c.KEY_ALT_A11Y_LABEL,
                    macLabel: c.KEY_OPTION_A11Y_LABEL,
                }),
            shift: () => (0, r.jsx)(d, { macText: "⇧", text: c.KEY_SHIFT, label: c.KEY_SHIFT_A11Y_LABEL }),
            up: () =>
                (0, r.jsx)(d, {
                    label: c.KEY_UP_A11Y_LABEL,
                    macText: "▲",
                    children: (0, r.jsx)(u, { direction: "up" }),
                }),
            down: () =>
                (0, r.jsx)(d, {
                    label: c.KEY_DOWN_A11Y_LABEL,
                    macText: "▼",
                    children: (0, r.jsx)(u, { direction: "down" }),
                }),
            left: () =>
                (0, r.jsx)(d, {
                    label: c.KEY_LEFT_A11Y_LABEL,
                    macText: "◀",
                    children: (0, r.jsx)(u, { direction: "left" }),
                }),
            right: () =>
                (0, r.jsx)(d, {
                    label: c.KEY_RIGHT_A11Y_LABEL,
                    macText: "▶",
                    children: (0, r.jsx)(u, { direction: "right" }),
                }),
            pageup: () => c.KEY_PAGEUP,
            pagedown: () => c.KEY_PAGEDOWN,
            "any-character": () => c.KEY_ANY,
            plus: () => "+",
            return: () =>
                (0, r.jsx)(d, {
                    macText: "⏎",
                    text: c.KEY_ENTER,
                    label: c.KEY_ENTER_A11Y_LABEL,
                    macLabel: c.KEY_RETURN_A11Y_LABEL,
                }),
            enter: () =>
                (0, r.jsx)(d, {
                    macText: "⏎",
                    text: c.KEY_ENTER,
                    label: c.KEY_ENTER_A11Y_LABEL,
                    macLabel: c.KEY_RETURN_A11Y_LABEL,
                }),
            escape: () => (0, r.jsx)(d, { text: c.KEY_ESCAPE, label: c.KEY_ESCAPE_A11Y_LABEL }),
            esc: () => (0, r.jsx)(d, { text: c.KEY_ESCAPE, label: c.KEY_ESCAPE_A11Y_LABEL }),
            backspace: () =>
                (0, r.jsx)(d, {
                    macText: "⌫",
                    text: c.KEY_BACKSPACE,
                    label: c.KEY_BACKSPACE_A11Y_LABEL,
                    macLabel: c.KEY_DELETE_A11Y_LABEL,
                }),
        },
        f = Array.isArray(t) ? t : t.split("+");
    return (0, r.jsx)("div", {
        className: s()(l.combo, i, { [l.dim]: n }),
        children: f
            .map((e) => (null != _[e] ? _[e]() : e))
            .map((e, t) => (0, r.jsx)("span", { className: s()(l.key, a), children: e }, t)),
    });
}
