n.d(e, { A: () => C });
var a = n(627968),
    i = n(64700),
    r = n(821609),
    s = n(285796),
    l = n(138134),
    o = n(534890),
    c = n(311907),
    d = n(49229),
    E = n(975807),
    u = n(928658),
    A = n(426190),
    _ = n(662502),
    h = n(994500),
    m = n(665909),
    x = n(192311),
    T = n(12105),
    g = n(327337),
    p = n(985018),
    f = n(230780);
function C(t) {
    let { senderId: e, channelId: n, hasReported: C, onReport: N, trackAnalyticsEvent: b } = t,
        S = (0, c.bG)([h.A], () => h.A.isBlocked(e)),
        [v, R] = i.useState(S),
        I = (0, A.N)(),
        j = (0, A.z)(),
        [O, L] = i.useState(!1),
        y = (0, x.W)(n),
        D = i.useMemo(() => (I ? 0 : j ? 2 : 1), [I, j]),
        w = async () => {
            null != y &&
                (L(!0),
                await (0, u.LF)(
                    y,
                    () => {
                        _.A.showReportSuccessToast(e, n), N();
                    },
                    () => {
                        _.A.showFailedToast();
                    },
                ),
                L(!1),
                b(m.Wm.USER_TAKEOVER_MODAL_REPORT));
        },
        M = i.useMemo(() => {
            switch (D) {
                case 0:
                    return p.intl.string(p.t.sZf6cz);
                case 2:
                    return p.intl.string(p.t.HQ2nKl);
                default:
                    return p.intl.string(p.t["65XQar"]);
            }
        }, [D]);
    return (0, a.jsx)(T.A, {
        header: p.intl.string(p.t["mWO+ys"]),
        description: p.intl.string(p.t.S0XtKF),
        children: (0, a.jsxs)("div", {
            className: f.UD,
            children: [
                (0, a.jsx)(r.$, {
                    text: v ? p.intl.string(p.t.XyHpKH) : p.intl.string(p.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: s.a,
                    onClick: () => {
                        v
                            ? (R(!1),
                              d.A.unblockUser(e, { location: g.Ht }),
                              b(m.Wm.USER_TAKEOVER_MODAL_UNBLOCK),
                              _.A.showUnblockSuccessToast(e, n))
                            : (R(!0),
                              b(m.Wm.USER_TAKEOVER_MODAL_BLOCK),
                              d.A.blockUser(e, { location: g.Ht }).then(() => {
                                  _.A.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, a.jsx)(r.$, {
                    text: C ? p.intl.string(p.t.QvwOJ6) : p.intl.string(p.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: l.i,
                    onClick: w,
                    loading: O,
                    disabled: C,
                }),
                (0, a.jsx)(r.$, {
                    text: M,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: o.o,
                    onClick: () => {
                        0 === D
                            ? ((0, E.A)(g.x7), b(m.Wm.USER_TAKEOVER_MODAL_CTL))
                            : 2 === D
                              ? ((0, E.A)(g.CL), b(m.Wm.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, E.A)(g.jR), b(m.Wm.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
