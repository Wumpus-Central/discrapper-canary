"use strict";
n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(465932),
    c = n(599941),
    u = n(636194),
    m = n(306444),
    g = n(386784),
    x = n(963175),
    h = n(985018),
    _ = n(223587);
function A(e) {
    let { onDeleteEditState: t } = e,
        { editStateId: l, guildId: A, groupListingId: p } = (0, m.O)(),
        f = (0, a.bG)([u.A], () => u.A.getSubscriptionListing(l)),
        j = f?.id,
        N = (0, g.A)(A),
        E = s.useMemo(() => null != N && null != f && (N[f.role_id] ?? 0), [N, f]),
        C = 0 === E,
        T = null == j,
        I = f?.archived ?? !1,
        { error: b, deleteSubscriptionListing: v, submitting: S } = (0, c.et)(),
        { error: y, archiveSubscriptionListing: R, submitting: O } = (0, c.hc)(),
        { allowSelfRemoveMonetization: G } = (0, d.nq)(A);
    return null == f
        ? null
        : (0, i.jsx)(x.A, {
              title: h.intl.string(h.t["7Si8Ul"]),
              children: (0, i.jsxs)(o.BJc, {
                  gap: 16,
                  children: [
                      null !== b &&
                          (0, i.jsx)(o.po8, { messageType: o.YCn.ERROR, children: h.intl.string(h.t["9k8H/9"]) }),
                      null !== y &&
                          (0, i.jsx)(o.po8, { messageType: o.YCn.ERROR, children: h.intl.string(h.t.up8gUr) }),
                      I
                          ? (0, i.jsx)(o.D0$, {
                                disabled: !G,
                                label: h.intl.string(h.t["2D14T0"]),
                                description: h.intl.string(h.t.Y4KjUN),
                                children: (0, i.jsxs)(o.BJc, {
                                    gap: 16,
                                    children: [
                                        !C &&
                                            (0, i.jsx)(o.Text, {
                                                variant: "text-sm/normal",
                                                className: _.$,
                                                children: h.intl.formatToPlainString(h.t.ABeonY, {
                                                    listingMemberCount: E,
                                                }),
                                            }),
                                        (0, i.jsx)(o.Button, {
                                            variant: "critical-primary",
                                            onClick: () => {
                                                let e = async () => {
                                                    (T ||
                                                        (r()(null != p, "group listing doesnt exist"),
                                                        r()(null != j, "subscription listing doesnt exist"),
                                                        await v(A, p, j))) &&
                                                        t?.();
                                                };
                                                (0, o.mMO)(async () => {
                                                    let { Modal: t } = await Promise.resolve().then(n.bind(n, 158954));
                                                    return (n) =>
                                                        (0, i.jsx)(t, {
                                                            title: h.intl.string(h.t["8ZRTsv"]),
                                                            onClose: n.onClose,
                                                            transitionState: n.transitionState,
                                                            actions: [
                                                                {
                                                                    text: h.intl.string(h.t["ETE/oC"]),
                                                                    variant: "secondary",
                                                                    onClick: () => n.onClose(),
                                                                },
                                                                {
                                                                    text: h.intl.string(h.t.GMtG6p),
                                                                    variant: "critical-primary",
                                                                    onClick: async () => {
                                                                        await e(), n.onClose();
                                                                    },
                                                                },
                                                            ],
                                                            children: (0, i.jsx)(o.Text, {
                                                                variant: "text-md/normal",
                                                                children: h.intl.string(h.t.Y4KjUN),
                                                            }),
                                                        });
                                                });
                                            },
                                            loading: S,
                                            disabled: !G || !C,
                                            text: h.intl.string(h.t.GMtG6p),
                                        }),
                                    ],
                                }),
                            })
                          : (0, i.jsx)(o.D0$, {
                                disabled: !G,
                                label: h.intl.string(h.t["MS/4U1"]),
                                description: h.intl.string(h.t["5/Jeg2"]),
                                children: (0, i.jsx)(o.Button, {
                                    variant: "critical-primary",
                                    onClick: () => {
                                        r()(null != p, "group listing doesnt exist"),
                                            r()(null != j, "subscription listing doesnt exist"),
                                            (0, o.mMO)(async () => {
                                                let { Modal: e } = await Promise.resolve().then(n.bind(n, 158954));
                                                return (t) =>
                                                    (0, i.jsx)(e, {
                                                        transitionState: t.transitionState,
                                                        title: h.intl.string(h.t["8ZRTsv"]),
                                                        onClose: t.onClose,
                                                        actions: [
                                                            {
                                                                text: h.intl.string(h.t["ETE/oC"]),
                                                                variant: "secondary",
                                                                onClick: () => t.onClose(),
                                                            },
                                                            {
                                                                text: h.intl.string(h.t.RL0wjm),
                                                                variant: "critical-primary",
                                                                onClick: async () => {
                                                                    await R(A, p, j), t.onClose();
                                                                },
                                                            },
                                                        ],
                                                        children: (0, i.jsx)(o.Text, {
                                                            variant: "text-md/normal",
                                                            children: h.intl.string(h.t["5/Jeg2"]),
                                                        }),
                                                    });
                                            });
                                    },
                                    loading: O,
                                    disabled: !G,
                                    text: h.intl.string(h.t.RL0wjm),
                                }),
                            }),
                  ],
              }),
          });
}
