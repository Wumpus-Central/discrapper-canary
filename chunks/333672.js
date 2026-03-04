l.d(e, { Ay: () => S, ti: () => f });
var n = l(627968),
    i = l(64700),
    s = l(311907),
    r = l(397927),
    a = l(263063),
    o = l(496885),
    d = l(942975),
    c = l(645619),
    u = l(434564),
    m = l(166403),
    x = l(313375),
    h = l(61780),
    g = l(473145),
    C = l(985018),
    j = l(494586);
function v(t) {
    let { tier: e } = t;
    return (0, n.jsxs)("div", {
        className: j._v,
        children: [
            (0, n.jsx)(o.A, {
                className: j.U2,
                children: (0, n.jsx)(x.A, { tier: e, color: "currentColor", className: j.Zw }),
            }),
            (0, g.gb)(e),
        ],
    });
}
function p(t) {
    let { guild: e, subscriptionChange: l } = t,
        i = (0, u.A)(e.id);
    if (0 === l) return null;
    let s = (0, g.P7)(e.id),
        r = (0, g.kN)(i + l),
        a = r - s;
    return 0 === a
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [(0, n.jsx)(h.A, { className: a > 0 ? j.$P : j.q0 }), (0, n.jsx)(v, { tier: r })],
          });
}
function f(t) {
    let { canceledCount: e } = t,
        l = (0, s.bG)([m.A], () => m.A.getPremiumTypeSubscription());
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: j.v,
              children: [
                  (0, n.jsx)(r.EpV, { size: "custom", width: 20, height: 20, color: "currentColor", className: j.kK }),
                  (0, n.jsx)(r.Text, {
                      variant: "text-md/normal",
                      className: j.at,
                      children: C.intl.format(C.t.SFpsCH, { date: l.currentPeriodEnd, canceledCount: e }),
                  }),
              ],
          });
}
function S(t) {
    let { guild: e, subscriptionChange: l, className: r } = t,
        o = (0, s.bG)([c.A], () => null != c.A.getStateForGuild(e.id));
    return (
        i.useEffect(() => {
            o || (0, d.Xd)(e.id);
        }, [o, e.id]),
        (0, n.jsxs)("div", {
            className: null != r ? `${j.gt} ${r}` : j.gt,
            children: [
                (0, n.jsx)(a.Ay, { className: j.$f, guild: e, size: a.Ay.Sizes.LARGE, active: !0 }),
                (0, n.jsxs)("div", {
                    className: j.CR,
                    children: [
                        (0, n.jsx)("div", { className: j.J5, children: e.name }),
                        (0, n.jsxs)("div", {
                            className: j.jp,
                            children: [
                                (0, n.jsx)(v, { tier: e.premiumTier }),
                                (0, n.jsx)(p, { guild: e, subscriptionChange: l }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
