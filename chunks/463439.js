n.d(e, { Z: () => O }), n(388685);
var i = n(54381),
    r = n(473749),
    a = n(481060),
    s = n(442837),
    o = n(194359),
    c = n(782568),
    l = n(726521),
    d = n(485664),
    u = n(681678),
    p = n(699516),
    f = n(473092),
    x = n(991981),
    h = n(850165),
    b = n(134612),
    m = n(388032),
    g = n(72595);
function O(t) {
    let { senderId: e, channelId: n, hasReported: O, onReport: j, trackAnalyticsEvent: v } = t,
        _ = (0, s.e7)([p.Z], () => p.Z.isBlocked(e)),
        [T, E] = r.useState(_),
        S = (0, d.o)(),
        y = (0, d.Q)(),
        [N, A] = r.useState(!1),
        C = (0, x.q)(n),
        M = r.useMemo(() => (S ? 0 : y ? 2 : 1), [S, y]),
        R = async () => {
            null != C &&
                (A(!0),
                await (0, l.J7)(
                    C,
                    () => {
                        u.Z.showReportSuccessToast(e, n), j();
                    },
                    () => {
                        u.Z.showFailedToast();
                    },
                ),
                A(!1),
                v(f.NM.USER_TAKEOVER_MODAL_REPORT));
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
    return (0, i.jsx)(h.Z, {
        header: m.intl.string(m.t["mWO+ys"]),
        description: m.intl.string(m.t.S0XtKF),
        children: (0, i.jsxs)("div", {
            className: g.buttonContainer,
            children: [
                (0, i.jsx)(a.Button, {
                    text: T ? m.intl.string(m.t.XyHpKH) : m.intl.string(m.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: a.k$p,
                    onClick: () => {
                        T
                            ? (E(!1),
                              o.Z.unblockUser(e, { location: b.DL }),
                              v(f.NM.USER_TAKEOVER_MODAL_UNBLOCK),
                              u.Z.showUnblockSuccessToast(e, n))
                            : (E(!0),
                              v(f.NM.USER_TAKEOVER_MODAL_BLOCK),
                              o.Z.blockUser(e, { location: b.DL }).then(() => {
                                  u.Z.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, i.jsx)(a.Button, {
                    text: O ? m.intl.string(m.t.QvwOJ6) : m.intl.string(m.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: a.U65,
                    onClick: R,
                    loading: N,
                    disabled: O,
                }),
                (0, i.jsx)(a.Button, {
                    text: Z,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: a.kBi,
                    onClick: () => {
                        0 === M
                            ? ((0, c.Z)(b.EI), v(f.NM.USER_TAKEOVER_MODAL_CTL))
                            : 2 === M
                              ? ((0, c.Z)(b.$l), v(f.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, c.Z)(b.n4), v(f.NM.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
