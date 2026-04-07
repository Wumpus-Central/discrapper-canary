n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(397927),
    a = n(49229),
    r = n(327166),
    o = n(390848),
    c = n(994500),
    d = n(427262),
    u = n(33364),
    h = n(652215),
    m = n(985018),
    A = n(570061);
function g(e) {
    let { userId: t } = e;
    return (0, i.jsx)(s.Button, {
        size: "sm",
        variant: "secondary",
        onClick: () => {
            a.A.blockUser(t, { location: h.liQ.DM_CHANNEL });
        },
        text: m.intl.string(m.t.l4Emac),
    });
}
function p(e) {
    let { userId: t, showingBanner: n } = e,
        l = (0, r.D)(t);
    return n
        ? null
        : (0, i.jsx)(s.Button, {
              variant: "primary",
              onClick: () => {
                  a.A.addRelationship({ userId: t, context: { location: h.liQ.DM_CHANNEL } });
              },
              text: l,
          });
}
function f(e) {
    let { userId: t } = e;
    return (0, i.jsx)(s.Button, {
        variant: "secondary",
        onClick: () => {
            a.A.removeFriend(t, { location: h.liQ.DM_CHANNEL });
        },
        text: m.intl.string(m.t.cvSt1J),
    });
}
function _(e) {
    let { userId: t } = e;
    return (0, i.jsx)(s.Button, {
        variant: "secondary",
        onClick: () => {
            a.A.unblockUser(t, { location: h.liQ.DM_CHANNEL });
        },
        text: m.intl.string(m.t.XyHpKH),
    });
}
function E(e) {
    let { channel: t, user: n, showingBanner: r } = e,
        p = (0, l.bG)([c.A], () => c.A.getOriginApplicationId(n.id), [n.id]),
        { acceptFriendRequest: f } = (0, o.I)({
            userId: n.id,
            applicationId: p,
            isGameRelationship: !1,
            location: h.liQ.DM_CHANNEL,
        });
    return (0, i.jsxs)("div", {
        className: A.K,
        children: [
            (0, i.jsx)(s.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                children: m.intl.format(m.t.uIomXw, { username: d.Ay.getName(n) }),
            }),
            (0, i.jsxs)(s.ButtonGroup, {
                size: "sm",
                children: [
                    (0, i.jsx)(s.Button, { variant: "primary", onClick: f, text: m.intl.string(m.t["+WbSn5"]) }),
                    (0, i.jsx)(s.Button, {
                        variant: "secondary",
                        onClick: () => {
                            a.A.cancelFriendRequest(n.id, { location: h.liQ.DM_CHANNEL });
                        },
                        text: m.intl.string(m.t.rQSndv),
                    }),
                    (0, i.jsx)(g, { userId: n.id }),
                    r ? null : (0, i.jsx)(u.A, { channel: t, user: n }),
                ],
            }),
        ],
    });
}
function x(e) {
    let t,
        { channel: n, user: a, showingBanner: r } = e,
        o = (0, l.bG)([c.A], () => c.A.getRelationshipType(a.id), [a.id]);
    if (o === h.eA$.PENDING_INCOMING) return (0, i.jsx)(E, { channel: n, user: a, showingBanner: r });
    switch (o) {
        case h.eA$.NONE:
            a.bot || (t = (0, i.jsx)(p, { userId: a.id, showingBanner: r }));
            break;
        case h.eA$.FRIEND:
            t = (0, i.jsx)(f, { userId: a.id });
            break;
        case h.eA$.BLOCKED:
            t = (0, i.jsx)(_, { userId: a.id });
            break;
        case h.eA$.PENDING_OUTGOING:
            t = (0, i.jsx)(s.Button, { variant: "primary", disabled: !0, text: m.intl.string(m.t.xMH6vD) });
            break;
        default:
            t = null;
    }
    let d = o !== h.eA$.BLOCKED;
    return (0, i.jsxs)(s.ButtonGroup, {
        size: "sm",
        children: [t, d ? (0, i.jsx)(g, { userId: a.id }) : null, r ? null : (0, i.jsx)(u.A, { channel: n, user: a })],
    });
}
