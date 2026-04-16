l.d(t, { A: () => g });
var n = l(627968);
l(64700);
var a = l(687264),
    i = l(417597),
    s = l(397927),
    r = l(780964),
    d = l(858897),
    o = l(532624),
    c = l(350535),
    u = l(652215),
    m = l(16590),
    h = l(985018),
    p = l(311162);
function x(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: p.Nr,
        children: [t, (0, n.jsx)(s.Text, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function f() {
    let e = (0, i.bG)([o.Ay], () => o.Ay.getKeybindForAction(u.hCu.SAVE_CLIP)),
        t = null != e ? c.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: p.kR,
        children: [
            (0, n.jsx)(x, {
                header: (0, n.jsx)(s._xR, { size: "refresh_sm", color: s.LU0.colors.ICON_DEFAULT }),
                description: h.intl.string(m.default["4K56sP"]),
            }),
            (0, n.jsx)(x, {
                header: null != t ? (0, n.jsx)(s.e7I, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  h.intl.format(m.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: p.JH,
                                      children: (0, n.jsx)(s.QWc, {
                                          text: h.intl.string(m.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, d.openUserSettings)(r.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : h.intl.string(m.default.HOUDUm),
            }),
            (0, n.jsx)(x, {
                header: (0, n.jsx)(s.tuI, { size: "refresh_sm", color: s.LU0.colors.ICON_DEFAULT }),
                description: h.intl.string(m.default.DLzdl7),
            }),
        ],
    });
}
function g(e) {
    let { isEmptyBecauseQuery: t } = e;
    return (0, n.jsx)("div", {
        className: p.kL,
        children: (0, n.jsxs)("div", {
            className: p.Qs,
            children: [
                (0, n.jsx)(a.N, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(s.Heading, {
                    className: p.wx,
                    variant: "heading-xl/semibold",
                    children: t ? h.intl.string(m.default["+M2iLf"]) : h.intl.string(m.default.m2GEpP),
                }),
                t
                    ? (0, n.jsx)(s.Text, {
                          className: p.h_,
                          variant: "text-md/medium",
                          children: h.intl.string(m.default.xkY5xS),
                      })
                    : (0, n.jsx)(f, {}),
            ],
        }),
    });
}
