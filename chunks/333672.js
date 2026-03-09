l.d(e, { Ay: () => y, ti: () => A });
var n = l(627968),
    i = l(64700),
    s = l(503698),
    r = l.n(s),
    a = l(311907),
    o = l(397927),
    d = l(263063),
    c = l(496885),
    u = l(942975),
    x = l(645619),
    m = l(434564),
    h = l(166403),
    g = l(313375),
    C = l(61780),
    j = l(473145),
    v = l(985018),
    p = l(253564);
function f(t) {
    let { tier: e } = t;
    return (0, n.jsxs)("div", {
        className: p._v,
        children: [
            (0, n.jsx)(c.A, {
                className: p.U2,
                children: (0, n.jsx)(g.A, { tier: e, color: "currentColor", className: p.Zw }),
            }),
            (0, j.gb)(e),
        ],
    });
}
function S(t) {
    let { guild: e, subscriptionChange: l } = t,
        i = (0, m.A)(e.id);
    if (0 === l) return null;
    let s = (0, j.P7)(e.id),
        r = (0, j.kN)(i + l),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(C.A, { className: a > 0 ? p.$P : p.q0 }), (0, n.jsx)(f, { tier: r })],
          });
}
function A(t) {
    let { canceledCount: e } = t,
        l = (0, a.bG)([h.A], () => h.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: p.v,
              children: [
                  (0, n.jsx)(o.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: p.kK }),
                  (0, n.jsx)(o.Text, {
                      variant: "text-md/normal",
                      className: p.at,
                      children: v.intl.format(v.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
}
function y(t) {
    let { guild: e, subscriptionChange: l, className: s } = t,
        o = (0, a.bG)([x.A], () => null != x.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            o || (0, u.Xd)(e.id);
        }, [o, e.id]),
        (0, n.jsxs)("div", {
            className: r()(p.gt, s),
            children: [
                (0, n.jsx)(d.Ay, { className: p.$f, guild: e, size: d.Ay.Sizes.LARGE, active: !0 }),
                (0, n.jsxs)("div", {
                    className: p.CR,
                    children: [
                        (0, n.jsx)("div", { className: p.J5, children: e.name }),
                        (0, n.jsxs)("div", {
                            className: p.jp,
                            children: [
                                (0, n.jsx)(f, { tier: e.premiumTier }),
                                (0, n.jsx)(S, { guild: e, subscriptionChange: l }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
