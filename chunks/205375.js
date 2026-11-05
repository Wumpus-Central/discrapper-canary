t.d(s, { A: () => N });
var l = t(477900),
    i = t(582128),
    n = t(607399),
    r = t(855986),
    a = t(289873),
    c = t(396478),
    d = t(93055),
    h = t(499373),
    u = t(331322),
    o = t(251843),
    p = t(821609),
    x = t(793574),
    j = t(688810),
    A = t(17839),
    m = t(708526),
    k = t(792996),
    f = t(630942),
    g = t(988572);
function y(e) {
    let { theme: s } = e,
        { analyticsLocations: t } = (0, j.Ay)(x.A.FAVORITES_GUILD_HOME),
        n = i.useCallback(() => {
            (0, A.A)({ source: "favorites_empty_state" });
        }, []);
    return (0, l.jsx)(j.f5, {
        value: t,
        children: (0, l.jsx)(c.pp, {
            theme: s,
            children: (0, l.jsxs)(u.B, {
                direction: "vertical",
                align: "center",
                gap: "md",
                children: [
                    (0, l.jsx)(o._, { zoomable: !1, src: g.A, width: 197, height: 107 }),
                    (0, l.jsx)(c.SG, {
                        className: f.Y,
                        noteClassName: f.A,
                        note: k.intl.string(m.default["+SuGKb"]),
                        children: k.intl.string(m.default["wh+Rz1"]),
                    }),
                    (0, l.jsx)(p.$, { text: k.intl.string(m.default["6kk0gM"]), onClick: n, icon: h.PlusMediumIcon }),
                ],
            }),
        }),
    });
}
var _ = t(58736),
    b = t(353202),
    v = t(413599),
    C = t(326879);
function N(e) {
    let s,
        { channelId: t } = e;
    i.useEffect(() => {
        b.A.loadThread(t);
    });
    let h = (0, d.DZ)(),
        u = (0, r.bG)([v.A], () => v.A.theme);
    return h
        ? (0, l.jsxs)("div", {
              className: C.A,
              children: [
                  n.Fr && (0, l.jsx)(_.Ay, { keepToastsBelow: !0, children: null }),
                  (0, l.jsx)(y, { theme: u }),
              ],
          })
        : ((s =
              null != t
                  ? (0, l.jsx)(a.y, { type: a.y.Type.SPINNING_CIRCLE })
                  : (0, l.jsx)(c.SG, { note: k.intl.string(k.t["LTr+x9"]), children: k.intl.string(k.t.ai6Lbr) })),
          (0, l.jsxs)("div", {
              className: C.j,
              children: [
                  n.Fr && (0, l.jsx)(_.Ay, { keepToastsBelow: !0, children: null }),
                  (0, l.jsx)(c.pp, { theme: u, children: s }),
              ],
          }));
}
