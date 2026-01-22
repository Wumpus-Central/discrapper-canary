r.d(t, { A: () => C });
var n = r(627968);
r(64700);
var i = r(300233),
    o = r(599941),
    l = r(922975),
    s = r(700206),
    c = r(815332),
    a = r(456540),
    d = r(136179),
    u = r(250253),
    p = r(652215),
    f = r(235201);
function b(e) {
    var t;
    let { guildId: r } = e,
        i = (0, o.uk)(r)[0],
        { editStateIds: b } = l.d0(null != (t = null == i ? void 0 : i.id) ? t : null, r),
        { activeSubscription: C } = (0, s.A)(null == i ? void 0 : i.id);
    return (0, n.jsxs)("div", {
        className: f.k,
        children: [
            null != i
                ? (0, n.jsx)(c.A, {
                      groupListingId: i.id,
                      subscription: C,
                  })
                : null,
            (0, n.jsx)(a.A, { subscription: C }),
            (0, n.jsx)(d.A, {
                guildId: r,
                children: b.map((e) => {
                    var t;
                    return (0, n.jsx)(
                        u.A,
                        {
                            guildId: r,
                            groupListingId: null != (t = null == i ? void 0 : i.id) ? t : "",
                            listingId: e,
                            analyticsLocation: p.ThZ.ROLE_SUBSCRIPTIONS_TAB,
                        },
                        e,
                    );
                }),
            }),
        ],
    });
}
function C(e) {
    let { guildId: t } = e;
    return (0, n.jsx)(i.H, {
        guildId: t,
        refetchOnMount: !0,
        children: (0, n.jsx)(b, { guildId: t }),
    });
}
