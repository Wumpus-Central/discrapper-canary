n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(821609),
    s = n(834730),
    r = n(825484),
    o = n(49229),
    c = n(327166),
    d = n(390848),
    u = n(994500),
    h = n(427262),
    m = n(33364),
    A = n(652215),
    g = n(985018),
    p = n(175709);
function _(e) {
    let { userId: t } = e;
    return (0, i.jsx)(a.$, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
            o.A.blockUser(t, { location: A.liQ.DM_CHANNEL });
        },
        text: g.intl.string(g.t.l4Emac),
    });
}
function f(e) {
    let { userId: t, showingBanner: n } = e,
        l = (0, c.D)(t);
    return n
        ? null
        : (0, i.jsx)(a.$, {
              variant: "primary",
              onClick: () => {
                  o.A.addRelationship({ userId: t, context: { location: A.liQ.DM_CHANNEL } });
              },
              text: l,
          });
}
function E(e) {
    let { userId: t } = e;
    return (0, i.jsx)(a.$, {
        variant: "secondary",
        onClick: () => {
            o.A.removeFriend(t, { location: A.liQ.DM_CHANNEL });
        },
        text: g.intl.string(g.t.cvSt1J),
    });
}
function C(e) {
    let { userId: t } = e;
    return (0, i.jsx)(a.$, {
        variant: "secondary",
        onClick: () => {
            o.A.unblockUser(t, { location: A.liQ.DM_CHANNEL });
        },
        text: g.intl.string(g.t.XyHpKH),
    });
}
function x(e) {
    let { channel: t, user: n, showingBanner: c } = e,
        f = (0, l.bG)([u.A], () => u.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: E } = (0, d.I)({
            userId: n.id,
            applicationId: f,
            isGameRelationship: !1,
            location: A.liQ.DM_CHANNEL,
        });
    return (0, i.jsxs)("div", {
        className: p.K,
        children: [
            (0, i.jsx)(s.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: g.intl.format(g.t.uIomXw, { username: h.Ay.getName(n) }),
            }),
            (0, i.jsxs)(r.e, {
                size: "sm",
                children: [
                    (0, i.jsx)(a.$, { variant: "primary", onClick: E, text: g.intl.string(g.t["+WbSn5"]) }),
                    (0, i.jsx)(a.$, {
                        variant: "secondary",
                        onClick: () => {
                            o.A.cancelFriendRequest(n.id, { location: A.liQ.DM_CHANNEL });
                        },
                        text: g.intl.string(g.t.rQSndv),
                    }),
                    (0, i.jsx)(_, { userId: n.id }),
                    c ? null : (0, i.jsx)(m.A, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function S(e) {
    let t,
        { channel: n, user: s, showingBanner: o } = e,
        c = (0, l.bG)([u.A], () => u.A.getRelationshipType(s.id), [s.id]);
    if (c === A.eA$.PENDING_INCOMING) return (0, i.jsx)(x, { channel: n, user: s, showingBanner: o });
    switch (c) {
        case A.eA$.NONE:
            s.bot || (t = (0, i.jsx)(f, { userId: s.id, showingBanner: o }));
            break;
        case A.eA$.FRIEND:
            t = (0, i.jsx)(E, { userId: s.id });
            break;
        case A.eA$.BLOCKED:
            t = (0, i.jsx)(C, { userId: s.id });
            break;
        case A.eA$.PENDING_OUTGOING:
            t = (0, i.jsx)(a.$, { variant: "primary", disabled: !0, text: g.intl.string(g.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = c !== A.eA$.BLOCKED;
    return (0, i.jsxs)(r.e, {
        size: "sm",
        children: [t, d ? (0, i.jsx)(_, { userId: s.id }) : null, o ? null : (0, i.jsx)(m.A, { channel: n, user: s })],
    });
}
