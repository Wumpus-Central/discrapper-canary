n.d(e, { Z: () => b }), n(388685);
var i = n(54381),
    r = n(473749),
    s = n(481060),
    a = n(442837),
    o = n(194359),
    c = n(782568),
    l = n(726521),
    d = n(485664),
    u = n(681678),
    p = n(699516),
    x = n(473092),
    h = n(991981),
    _ = n(850165),
    g = n(134612),
    m = n(388032),
    f = n(394968);
function b(t) {
    let { senderId: e, channelId: n, hasReported: b, onReport: O, trackAnalyticsEvent: j } = t,
        v = (0, a.e7)([p.Z], () => p.Z.isBlocked(e)),
        [T, E] = r.useState(v),
        S = (0, d.o)(),
        N = (0, d.Q)(),
        [y, A] = r.useState(!1),
        C = (0, h.q)(n),
        M = r.useMemo(() => (S ? 0 : N ? 2 : 1), [S, N]),
        R = async () => {
            null != C &&
                (A(!0),
                await (0, l.J7)(
                    C,
                    () => {
                        u.Z.showReportSuccessToast(e, n), O();
                    },
                    () => {
                        u.Z.showFailedToast();
                    },
                ),
                A(!1),
                j(x.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        Z = r.useMemo(() => {
            switch (M) {
                case 0:
                    return m.intl.string(m.t.sZf6cz);
                case 2:
                    return m.intl.string(m.t.HQ2nKl);
                default:
                    return m.intl.string(m.t["65XQar"]);
            }
        }, [M]);
    return (0, i.jsx)(_.Z, {
        header: m.intl.string(m.t["mWO+ys"]),
        description: m.intl.string(m.t.S0XtKF),
        children: (0, i.jsxs)("div", {
            className: f.buttonContainer,
            children: [
                (0, i.jsx)(s.Button, {
                    text: T ? m.intl.string(m.t.XyHpKH) : m.intl.string(m.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: s.k$p,
                    onClick: () => {
                        T
                            ? (E(!1),
                              o.Z.unblockUser(e, { location: g.DL }),
                              j(x.NM.USER_TAKEOVER_MODAL_UNBLOCK),
                              u.Z.showUnblockSuccessToast(e, n))
                            : (E(!0),
                              j(x.NM.USER_TAKEOVER_MODAL_BLOCK),
                              o.Z.blockUser(e, { location: g.DL }).then(() => {
                                  u.Z.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, i.jsx)(s.Button, {
                    text: b ? m.intl.string(m.t.QvwOJ6) : m.intl.string(m.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.U65,
                    onClick: R,
                    loading: y,
                    disabled: b,
                }),
                (0, i.jsx)(s.Button, {
                    text: Z,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.kBi,
                    onClick: () => {
                        0 === M
                            ? ((0, c.Z)(g.EI), j(x.NM.USER_TAKEOVER_MODAL_CTL))
                            : 2 === M
                              ? ((0, c.Z)(g.$l), j(x.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, c.Z)(g.n4), j(x.NM.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
