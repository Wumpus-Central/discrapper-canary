n.d(e, { A: () => j }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(311907),
    l = n(49229),
    c = n(975807),
    o = n(928658),
    d = n(426190),
    u = n(662502),
    x = n(994500),
    m = n(665909),
    A = n(192311),
    f = n(12105),
    h = n(327337),
    g = n(985018),
    O = n(286965);
function j(t) {
    let { senderId: e, channelId: n, hasReported: j, onReport: _, trackAnalyticsEvent: p } = t,
        v = (0, s.bG)([x.A], () => x.A.isBlocked(e)),
        [b, E] = i.useState(v),
        T = (0, d.N)(),
        S = (0, d.z)(),
        [y, N] = i.useState(!1),
        R = (0, A.W)(n),
        k = i.useMemo(() => (T ? 0 : S ? 2 : 1), [T, S]),
        w = async () => {
            null != R &&
                (N(!0),
                await (0, o.LF)(
                    R,
                    () => {
                        u.A.showReportSuccessToast(e, n), _();
                    },
                    () => {
                        u.A.showFailedToast();
                    },
                ),
                N(!1),
                p(m.Wm.USER_TAKEOVER_MODAL_REPORT));
        },
        C = i.useMemo(() => {
            switch (k) {
                case 0:
                    return g.intl.string(g.t.sZf6cz);
                case 2:
                    return g.intl.string(g.t.HQ2nKl);
                default:
                    return g.intl.string(g.t["65XQar"]);
            }
        }, [k]);
    return (0, r.jsx)(f.A, {
        header: g.intl.string(g.t["mWO+ys"]),
        description: g.intl.string(g.t.S0XtKF),
        children: (0, r.jsxs)("div", {
            className: O.UD,
            children: [
                (0, r.jsx)(a.Button, {
                    text: b ? g.intl.string(g.t.XyHpKH) : g.intl.string(g.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: a.aXh,
                    onClick: () => {
                        b
                            ? (E(!1),
                              l.A.unblockUser(e, { location: h.Ht }),
                              p(m.Wm.USER_TAKEOVER_MODAL_UNBLOCK),
                              u.A.showUnblockSuccessToast(e, n))
                            : (E(!0),
                              p(m.Wm.USER_TAKEOVER_MODAL_BLOCK),
                              l.A.blockUser(e, { location: h.Ht }).then(() => {
                                  u.A.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, r.jsx)(a.Button, {
                    text: j ? g.intl.string(g.t.QvwOJ6) : g.intl.string(g.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: a.iFK,
                    onClick: w,
                    loading: y,
                    disabled: j,
                }),
                (0, r.jsx)(a.Button, {
                    text: C,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: a.oyn,
                    onClick: () => {
                        0 === k
                            ? ((0, c.A)(h.x7), p(m.Wm.USER_TAKEOVER_MODAL_CTL))
                            : 2 === k
                              ? ((0, c.A)(h.CL), p(m.Wm.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, c.A)(h.jR), p(m.Wm.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
