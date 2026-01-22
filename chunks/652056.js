n.d(t, {
    A: () => x,
});
var r = n(627968),
    i = n(64700),
    l = n(284009),
    s = n.n(l),
    a = n(311907),
    c = n(397927),
    o = n(465932),
    d = n(599941),
    u = n(636194),
    f = n(306444),
    g = n(386784),
    b = n(963175),
    m = n(985018),
    p = n(691814);

function x(e) {
    var t;
    let { onDeleteEditState: l } = e,
        { editStateId: x, guildId: h, groupListingId: j } = (0, f.O)(),
        O = (0, a.bG)([u.A], () => u.A.getSubscriptionListing(x)),
        y = null == O ? void 0 : O.id,
        v = (0, g.A)(h),
        A = i.useMemo(() => {
            var e;
            return null != v && null != O && (null != (e = v[O.role_id]) ? e : 0);
        }, [v, O]),
        E = 0 === A,
        N = null == y,
        _ = null != (t = null == O ? void 0 : O.archived) && t,
        { error: S, deleteSubscriptionListing: T, submitting: I } = (0, d.et)(),
        { error: C, archiveSubscriptionListing: P, submitting: w } = (0, d.hc)(),
        { allowSelfRemoveMonetization: R } = (0, o.nq)(h);
    return null == O
        ? null
        : (0, r.jsx)(b.A, {
              title: m.intl.string(m.t["7Si8Ul"]),
              children: (0, r.jsxs)(c.BJc, {
                  gap: 16,
                  children: [
                      null !== S &&
                          (0, r.jsx)(c.po8, {
                              messageType: c.YCn.ERROR,
                              children: m.intl.string(m.t["9k8H/9"]),
                          }),
                      null !== C &&
                          (0, r.jsx)(c.po8, {
                              messageType: c.YCn.ERROR,
                              children: m.intl.string(m.t.up8gUr),
                          }),
                      _
                          ? (0, r.jsx)(c.D0$, {
                                disabled: !R,
                                label: m.intl.string(m.t["2D14T0"]),
                                description: m.intl.string(m.t.Y4KjUN),
                                children: (0, r.jsxs)(c.BJc, {
                                    gap: 16,
                                    children: [
                                        !E &&
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-sm/normal",
                                                className: p.$,
                                                children: m.intl.formatToPlainString(m.t.ABeonY, {
                                                    listingMemberCount: A,
                                                }),
                                            }),
                                        (0, r.jsx)(c.Button, {
                                            variant: "critical-primary",
                                            onClick: () => {
                                                let e = async () => {
                                                    (N ||
                                                        (s()(null != j, "group listing doesnt exist"),
                                                        s()(null != y, "subscription listing doesnt exist"),
                                                        await T(h, j, y))) &&
                                                        (null == l || l());
                                                };
                                                (0, c.mMO)(async () => {
                                                    let { Modal: t } = await Promise.resolve().then(n.bind(n, 158954));
                                                    return (n) =>
                                                        (0, r.jsx)(t, {
                                                            title: m.intl.string(m.t["8ZRTsv"]),
                                                            onClose: n.onClose,
                                                            transitionState: n.transitionState,
                                                            actions: [
                                                                {
                                                                    text: m.intl.string(m.t["ETE/oC"]),
                                                                    variant: "secondary",
                                                                    onClick: () => n.onClose(),
                                                                },
                                                                {
                                                                    text: m.intl.string(m.t.GMtG6p),
                                                                    variant: "critical-primary",
                                                                    onClick: async () => {
                                                                        await e(), n.onClose();
                                                                    },
                                                                },
                                                            ],
                                                            children: (0, r.jsx)(c.Text, {
                                                                variant: "text-md/normal",
                                                                children: m.intl.string(m.t.Y4KjUN),
                                                            }),
                                                        });
                                                });
                                            },
                                            loading: I,
                                            disabled: !R || !E,
                                            text: m.intl.string(m.t.GMtG6p),
                                        }),
                                    ],
                                }),
                            })
                          : (0, r.jsx)(c.D0$, {
                                disabled: !R,
                                label: m.intl.string(m.t["MS/4U1"]),
                                description: m.intl.string(m.t["5/Jeg2"]),
                                children: (0, r.jsx)(c.Button, {
                                    variant: "critical-primary",
                                    onClick: () => {
                                        s()(null != j, "group listing doesnt exist"),
                                            s()(null != y, "subscription listing doesnt exist"),
                                            (0, c.mMO)(async () => {
                                                let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                                                return (t) =>
                                                    (0, r.jsx)(e, {
                                                        transitionState: t.transitionState,
                                                        title: m.intl.string(m.t["8ZRTsv"]),
                                                        onClose: t.onClose,
                                                        actions: [
                                                            {
                                                                text: m.intl.string(m.t["ETE/oC"]),
                                                                variant: "secondary",
                                                                onClick: () => t.onClose(),
                                                            },
                                                            {
                                                                text: m.intl.string(m.t.RL0wjm),
                                                                variant: "critical-primary",
                                                                onClick: async () => {
                                                                    await P(h, j, y), t.onClose();
                                                                },
                                                            },
                                                        ],
                                                        children: (0, r.jsx)(c.Text, {
                                                            variant: "text-md/normal",
                                                            children: m.intl.string(m.t["5/Jeg2"]),
                                                        }),
                                                    });
                                            });
                                    },
                                    loading: w,
                                    disabled: !R,
                                    text: m.intl.string(m.t.RL0wjm),
                                }),
                            }),
                  ],
              }),
          });
}
