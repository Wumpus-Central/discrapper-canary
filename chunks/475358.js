n.d(t, {
    e: () => f,
}),
    n(747238);
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(574381),
    o = n(460890),
    l = n(359116);

function c(e) {
    let { direction: t = "up" } = e;
    return (0, r.jsx)("svg", {
        width: "10",
        height: "10",
        xmlns: "http://www.w3.org/2000/svg",
        className: a()(l.bindArrow, l[t]),
        children: (0, r.jsx)("g", {
            fill: "#FFFFFF",
            children: (0, r.jsx)("polygon", {
                transform: "translate(5.025000, 5.000000) scale(1, -1) translate(-5.025000, -5.000000) ",
                points: "4.16666667 10 4.16666672 3.33333333 1.25 6.25 0.05 5 5.00000005 0 9.99999967 5 8.75 6.25 5.83333338 3.33333333 5.83333333 10",
            }),
        }),
    });
}

function u(e) {
    let { children: t, text: n, macText: i, label: a, macLabel: o } = e,
        c = (0, s.cX)() || (0, s.Sn)(),
        u = c && null != i ? l.systemFont : void 0,
        d = c && null != o ? o : a,
        f = c && null != i ? i : null != t ? t : n;
    return (0, r.jsx)("span", {
        className: u,
        role: null != d ? "img" : void 0,
        "aria-label": null != d ? d : void 0,
        children: f,
    });
}

function d(e) {
    return {
        ctrl: () =>
            (0, r.jsx)(u, {
                macText: "⌃",
                text: "ctrl",
                label: e.KEY_CTRL_A11Y_LABEL,
            }),
        cmd: () =>
            (0, r.jsx)(u, {
                macText: "⌘",
                text: "cmd",
                label: e.KEY_CMD_A11Y_LABEL,
            }),
        mod: () =>
            (0, r.jsx)(u, {
                macText: "⌘",
                text: "ctrl",
                label: e.KEY_CTRL_A11Y_LABEL,
                macLabel: e.KEY_CMD_A11Y_LABEL,
            }),
        alt: () =>
            (0, r.jsx)(u, {
                macText: "⌥",
                text: "alt",
                label: e.KEY_ALT_A11Y_LABEL,
                macLabel: e.KEY_OPTION_A11Y_LABEL,
            }),
        shift: () =>
            (0, r.jsx)(u, {
                macText: "⇧",
                text: e.KEY_SHIFT,
                label: e.KEY_SHIFT_A11Y_LABEL,
            }),
        up: () =>
            (0, r.jsx)(u, {
                label: e.KEY_UP_A11Y_LABEL,
                macText: "▲",
                children: (0, r.jsx)(c, {
                    direction: "up",
                }),
            }),
        down: () =>
            (0, r.jsx)(u, {
                label: e.KEY_DOWN_A11Y_LABEL,
                macText: "▼",
                children: (0, r.jsx)(c, {
                    direction: "down",
                }),
            }),
        left: () =>
            (0, r.jsx)(u, {
                label: e.KEY_LEFT_A11Y_LABEL,
                macText: "◀",
                children: (0, r.jsx)(c, {
                    direction: "left",
                }),
            }),
        right: () =>
            (0, r.jsx)(u, {
                label: e.KEY_RIGHT_A11Y_LABEL,
                macText: "▶",
                children: (0, r.jsx)(c, {
                    direction: "right",
                }),
            }),
        pageup: () => e.KEY_PAGEUP,
        pagedown: () => e.KEY_PAGEDOWN,
        "any-character": () => e.KEY_ANY,
        plus: () => "+",
        return: () =>
            (0, r.jsx)(u, {
                macText: "⏎",
                text: e.KEY_ENTER,
                label: e.KEY_ENTER_A11Y_LABEL,
                macLabel: e.KEY_RETURN_A11Y_LABEL,
            }),
        enter: () =>
            (0, r.jsx)(u, {
                macText: "⏎",
                text: e.KEY_ENTER,
                label: e.KEY_ENTER_A11Y_LABEL,
                macLabel: e.KEY_RETURN_A11Y_LABEL,
            }),
        escape: () =>
            (0, r.jsx)(u, {
                text: e.KEY_ESCAPE,
                label: e.KEY_ESCAPE_A11Y_LABEL,
            }),
        esc: () =>
            (0, r.jsx)(u, {
                text: e.KEY_ESCAPE,
                label: e.KEY_ESCAPE_A11Y_LABEL,
            }),
        backspace: () =>
            (0, r.jsx)(u, {
                macText: "⌫",
                text: e.KEY_BACKSPACE,
                label: e.KEY_BACKSPACE_A11Y_LABEL,
                macLabel: e.KEY_DELETE_A11Y_LABEL,
            }),
    };
}

function f(e) {
    let { shortcut: t, dim: n = !1, className: i, keyClassName: s } = e,
        { i18n: c } = (0, o.G9)(),
        u = d(c),
        f = Array.isArray(t) ? t : t.split("+");
    return (0, r.jsx)("div", {
        className: a()(l.combo, i, {
            [l.dim]: n,
        }),
        children: f
            .map((e) => (null != u[e] ? u[e]() : e))
            .map((e, t) =>
                (0, r.jsx)(
                    "span",
                    {
                        className: a()(l.key, s),
                        children: e,
                    },
                    t,
                ),
            ),
    });
}
