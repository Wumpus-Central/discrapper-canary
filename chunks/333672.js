l.d(e, { Ay: () => N, ti: () => y });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(311907),
    o = l(695366),
    d = l(834730),
    c = l(263063),
    u = l(496885),
    m = l(942975),
    x = l(645619),
    h = l(434564),
    g = l(166403),
    C = l(313375),
    j = l(61780),
    v = l(473145),
    f = l(985018),
    p = l(204103);
function S(t) {
    let { tier: e } = t;
    return (0, n.jsxs)("div", {
        className: p._v,
        children: [
            (0, n.jsx)(u.A, {
                className: p.U2,
                children: (0, n.jsx)(C.A, { tier: e, color: "currentColor", className: p.Zw }),
            }),
            (0, v.gb)(e),
        ],
    });
}
function A(t) {
    let { guild: e, subscriptionChange: l } = t,
        i = (0, h.A)(e.id);
    if (0 === l) return null;
    let s = (0, v.P7)(e.id),
        r = (0, v.kN)(i + l),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(j.A, { className: a > 0 ? p.$P : p.q0 }), (0, n.jsx)(S, { tier: r })],
          });
}
function y(t) {
    let { canceledCount: e } = t,
        l = (0, a.bG)([g.A], () => g.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: p.v,
              children: [
                  (0, n.jsx)(o.E, { size: "custom", width: 20, height: 20, color: "currentColor", className: p.kK }),
                  (0, n.jsx)(d.E, {
                      variant: "text-md/normal",
                      className: p.at,
                      children: f.intl.format(f.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
}
function N(t) {
    let { guild: e, subscriptionChange: l, className: s } = t,
        o = (0, a.bG)([x.A], () => null != x.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            o || (0, m.Xd)(e.id);
        }, [o, e.id]),
        (0, n.jsxs)("div", {
            className: r()(p.gt, s),
            children: [
                (0, n.jsx)(c.Ay, { className: p.$f, guild: e, size: c.Ay.Sizes.LARGE, active: !0 }),
                (0, n.jsxs)("div", {
                    className: p.CR,
                    children: [
                        (0, n.jsx)("div", { className: p.J5, children: e.name }),
                        (0, n.jsxs)("div", {
                            className: p.jp,
                            children: [
                                (0, n.jsx)(S, { tier: e.premiumTier }),
                                (0, n.jsx)(A, { guild: e, subscriptionChange: l }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
