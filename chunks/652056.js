n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(284009),
    r = n.n(s),
    a = n(311907),
    o = n(192308),
    d = n(834730),
    c = n(331322),
    u = n(512950),
    m = n(452027),
    g = n(821609),
    h = n(465932),
    x = n(599941),
    _ = n(636194),
    p = n(306444),
    A = n(386784),
    E = n(963175),
    f = n(985018),
    j = n(806963);
function N(e) {
    let { onDeleteEditState: t } = e,
        { editStateId: s, guildId: N, groupListingId: I } = (0, p.O)(),
        C = (0, a.bG)([_.A], () => _.A.getSubscriptionListing(s)),
        b = C?.id,
        v = (0, A.A)(N),
        S = l.useMemo(() => null != v && null != C && (v[C.role_id] ?? 0), [v, C]),
        T = 0 === S,
        y = null == b,
        R = C?.archived ?? !1,
        { error: L, deleteSubscriptionListing: D, submitting: O } = (0, x.et)(),
        { error: G, archiveSubscriptionListing: M, submitting: k } = (0, x.hc)(),
        { allowSelfRemoveMonetization: U } = (0, h.nq)(N);
    return null == C
        ? null
        : (0, i.jsx)(E.A, {
              title: f.intl.string(f.t["7Si8Ul"]),
              children: (0, i.jsxs)(c.B, {
                  gap: 16,
                  children: [
                      null !== L && (0, i.jsx)(u.p, { messageType: u.Y.ERROR, children: f.intl.string(f.t["9k8H/9"]) }),
                      null !== G && (0, i.jsx)(u.p, { messageType: u.Y.ERROR, children: f.intl.string(f.t.up8gUr) }),
                      R
                          ? (0, i.jsx)(m.D, {
                                disabled: !U,
                                label: f.intl.string(f.t["2D14T0"]),
                                description: f.intl.string(f.t.Y4KjUN),
                                children: (0, i.jsxs)(c.B, {
                                    gap: 16,
                                    children: [
                                        !T &&
                                            (0, i.jsx)(d.E, {
                                                variant: "text-sm/normal",
                                                className: j.$,
                                                children: f.intl.formatToPlainString(f.t.ABeonY, {
                                                    listingMemberCount: S,
                                                }),
                                            }),
                                        (0, i.jsx)(g.$, {
                                            variant: "critical-primary",
                                            onClick: () => {
                                                let e = async () => {
                                                    (y ||
                                                        (r()(null != I, "group listing doesnt exist"),
                                                        r()(null != b, "subscription listing doesnt exist"),
                                                        await D(N, I, b))) &&
                                                        t?.();
                                                };
                                                (0, o.openModalLazy)(async () => {
                                                    let { Modal: t } = await n.e("4823").then(n.bind(n, 158954));
                                                    return (n) =>
                                                        (0, i.jsx)(t, {
                                                            title: f.intl.string(f.t["8ZRTsv"]),
                                                            onClose: n.onClose,
                                                            transitionState: n.transitionState,
                                                            actions: [
                                                                {
                                                                    text: f.intl.string(f.t["ETE/oC"]),
                                                                    variant: "secondary",
                                                                    onClick: () => n.onClose(),
                                                                },
                                                                {
                                                                    text: f.intl.string(f.t.GMtG6p),
                                                                    variant: "critical-primary",
                                                                    onClick: async () => {
                                                                        await e(), n.onClose();
                                                                    },
                                                                },
                                                            ],
                                                            children: (0, i.jsx)(d.E, {
                                                                variant: "text-md/normal",
                                                                children: f.intl.string(f.t.Y4KjUN),
                                                            }),
                                                        });
                                                });
                                            },
                                            loading: O,
                                            disabled: !U || !T,
                                            text: f.intl.string(f.t.GMtG6p),
                                        }),
                                    ],
                                }),
                            })
                          : (0, i.jsx)(m.D, {
                                disabled: !U,
                                label: f.intl.string(f.t["MS/4U1"]),
                                description: f.intl.string(f.t["5/Jeg2"]),
                                children: (0, i.jsx)(g.$, {
                                    variant: "critical-primary",
                                    onClick: () => {
                                        r()(null != I, "group listing doesnt exist"),
                                            r()(null != b, "subscription listing doesnt exist"),
                                            (0, o.openModalLazy)(async () => {
                                                let { Modal: e } = await n.e("4823").then(n.bind(n, 158954));
                                                return (t) =>
                                                    (0, i.jsx)(e, {
                                                        transitionState: t.transitionState,
                                                        title: f.intl.string(f.t["8ZRTsv"]),
                                                        onClose: t.onClose,
                                                        actions: [
                                                            {
                                                                text: f.intl.string(f.t["ETE/oC"]),
                                                                variant: "secondary",
                                                                onClick: () => t.onClose(),
                                                            },
                                                            {
                                                                text: f.intl.string(f.t.RL0wjm),
                                                                variant: "critical-primary",
                                                                onClick: async () => {
                                                                    await M(N, I, b), t.onClose();
                                                                },
                                                            },
                                                        ],
                                                        children: (0, i.jsx)(d.E, {
                                                            variant: "text-md/normal",
                                                            children: f.intl.string(f.t["5/Jeg2"]),
                                                        }),
                                                    });
                                            });
                                    },
                                    loading: k,
                                    disabled: !U,
                                    text: f.intl.string(f.t.RL0wjm),
                                }),
                            }),
                  ],
              }),
          });
}
