l.d(t, { A: () => A });
var n = l(627968);
l(64700);
var a = l(687264),
    i = l(417597),
    s = l(834730),
    r = l(687966),
    d = l(827734),
    o = l(475358),
    c = l(123292),
    u = l(292801),
    m = l(534514),
    h = l(780964),
    p = l(858897),
    f = l(532624),
    v = l(350535),
    g = l(652215),
    x = l(788077),
    j = l(985018),
    b = l(713466);
function C(e) {
    let { header: t, description: l } = e;
    return (0, n.jsxs)("div", {
        className: b.Nr,
        children: [t, (0, n.jsx)(s.E, { color: "text-default", variant: "text-sm/medium", children: l })],
    });
}
function y() {
    let e = (0, i.bG)([f.Ay], () => f.Ay.getKeybindForAction(g.hCu.SAVE_CLIP)),
        t = null != e ? v.dI(e.shortcut, !0) : null;
    return (0, n.jsxs)("div", {
        className: b.kR,
        children: [
            (0, n.jsx)(C, {
                header: (0, n.jsx)(r._, { size: "refresh_sm", color: d.A.colors.ICON_DEFAULT }),
                description: j.intl.string(x.default["4K56sP"]),
            }),
            (0, n.jsx)(C, {
                header: null != t ? (0, n.jsx)(o.e, { shortcut: t }) : null,
                description:
                    null != t
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  j.intl.format(x.default.BIwQis, { keybind: t }),
                                  (0, n.jsx)("div", {
                                      className: b.JH,
                                      children: (0, n.jsx)(c.Q, {
                                          text: j.intl.string(x.default.GPfOas),
                                          variant: "primary",
                                          textVariant: "text-sm/medium",
                                          onClick: function () {
                                              (0, p.openUserSettings)(h.X.CLIPS_PANEL);
                                          },
                                      }),
                                  }),
                              ],
                          })
                        : j.intl.string(x.default.HOUDUm),
            }),
            (0, n.jsx)(C, {
                header: (0, n.jsx)(u.t, { size: "refresh_sm", color: d.A.colors.ICON_DEFAULT }),
                description: j.intl.string(x.default.DLzdl7),
            }),
        ],
    });
}
function A(e) {
    let { isEmptyBecauseQuery: t } = e;
    return (0, n.jsx)("div", {
        className: b.kL,
        children: (0, n.jsxs)("div", {
            className: b.Qs,
            children: [
                (0, n.jsx)(a.N, { width: 213, height: 135, alt: "" }),
                (0, n.jsx)(m.D, {
                    className: b.wx,
                    variant: "heading-xl/semibold",
                    children: t ? j.intl.string(x.default["+M2iLf"]) : j.intl.string(x.default.m2GEpP),
                }),
                t
                    ? (0, n.jsx)(s.E, {
                          className: b.h_,
                          variant: "text-md/medium",
                          children: j.intl.string(x.default.xkY5xS),
                      })
                    : (0, n.jsx)(y, {}),
            ],
        }),
    });
}
