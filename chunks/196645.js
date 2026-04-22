n.d(e, { A: () => b });
var a = n(627968),
    r = n(64700),
    s = n(821609),
    i = n(285796),
    l = n(138134),
    o = n(534890),
    c = n(311907),
    d = n(49229),
    u = n(975807),
    E = n(928658),
    h = n(426190),
    _ = n(662502),
    A = n(994500),
    x = n(665909),
    m = n(192311),
    g = n(12105),
    p = n(327337),
    T = n(985018),
    v = n(230780);
function b(t) {
    let { senderId: e, channelId: n, hasReported: b, onReport: f, trackAnalyticsEvent: N } = t,
        C = (0, c.bG)([A.A], () => A.A.isBlocked(e)),
        [S, I] = r.useState(C),
        j = (0, h.N)(),
        R = (0, h.z)(),
        [w, O] = r.useState(!1),
        y = (0, m.W)(n),
        L = r.useMemo(() => (j ? 0 : R ? 2 : 1), [j, R]),
        D = async () => {
            null != y &&
                (O(!0),
                await (0, E.LF)(
                    y,
                    () => {
                        _.A.showReportSuccessToast(e, n), f();
                    },
                    () => {
                        _.A.showFailedToast();
                    },
                ),
                O(!1),
                N(x.Wm.USER_TAKEOVER_MODAL_REPORT));
        },
        M = r.useMemo(() => {
            switch (L) {
                case 0:
                    return T.intl.string(T.t.sZf6cz);
                case 2:
                    return T.intl.string(T.t.HQ2nKl);
                default:
                    return T.intl.string(T.t["65XQar"]);
            }
        }, [L]);
    return (0, a.jsx)(g.A, {
        header: T.intl.string(T.t["mWO+ys"]),
        description: T.intl.string(T.t.S0XtKF),
        children: (0, a.jsxs)("div", {
            className: v.UD,
            children: [
                (0, a.jsx)(s.$, {
                    text: S ? T.intl.string(T.t.XyHpKH) : T.intl.string(T.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: i.a,
                    onClick: () => {
                        S
                            ? (I(!1),
                              d.A.unblockUser(e, { location: p.Ht }),
                              N(x.Wm.USER_TAKEOVER_MODAL_UNBLOCK),
                              _.A.showUnblockSuccessToast(e, n))
                            : (I(!0),
                              N(x.Wm.USER_TAKEOVER_MODAL_BLOCK),
                              d.A.blockUser(e, { location: p.Ht }).then(() => {
                                  _.A.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, a.jsx)(s.$, {
                    text: b ? T.intl.string(T.t.QvwOJ6) : T.intl.string(T.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: l.i,
                    onClick: D,
                    loading: w,
                    disabled: b,
                }),
                (0, a.jsx)(s.$, {
                    text: M,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: o.o,
                    onClick: () => {
                        0 === L
                            ? ((0, u.A)(p.x7), N(x.Wm.USER_TAKEOVER_MODAL_CTL))
                            : 2 === L
                              ? ((0, u.A)(p.CL), N(x.Wm.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, u.A)(p.jR), N(x.Wm.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
