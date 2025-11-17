n.d(e, { Z: () => O }), n(388685);
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
    g = n(991981),
    h = n(850165),
    m = n(134612),
    _ = n(388032),
    f = n(394968),
    b = n(149355);
function O(t) {
    let { senderId: e, channelId: n, hasReported: O, onReport: v, trackAnalyticsEvent: j } = t,
        T = (0, a.e7)([p.Z], () => p.Z.isBlocked(e)),
        [E, S] = r.useState(T),
        y = (0, d.o)(),
        A = (0, d.Q)(),
        [N, C] = r.useState(!1),
        I = (0, g.q)(n),
        R = r.useMemo(() => (y ? 0 : A ? 2 : 1), [y, A]),
        M = async () => {
            null != I &&
                (C(!0),
                await (0, l.J7)(
                    I,
                    () => {
                        u.Z.showReportSuccessToast(e, n), v();
                    },
                    () => {
                        u.Z.showFailedToast();
                    },
                ),
                C(!1),
                j(x.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        Z = r.useMemo(() => {
            switch (R) {
                case 0:
                    return _.intl.string(_.t.sZf6cz);
                case 2:
                    return _.intl.string(_.t.HQ2nKl);
                default:
                    return _.intl.string(_.t["65XQar"]);
            }
        }, [R]);
    return (0, i.jsx)(h.Z, {
        heroImageSrc: b,
        heroImageAlt: _.intl.string(_.t.RVyYCK),
        header: _.intl.string(_.t["mWO+ys"]),
        description: _.intl.string(_.t.S0XtKF),
        children: (0, i.jsxs)("div", {
            className: f.buttonContainer,
            children: [
                (0, i.jsx)(s.Button, {
                    text: E ? _.intl.string(_.t.XyHpKH) : _.intl.string(_.t.l4Emac),
                    variant: "primary",
                    fullWidth: !0,
                    icon: s.k$p,
                    onClick: () => {
                        E
                            ? (S(!1),
                              o.Z.unblockUser(e, { location: m.DL }),
                              j(x.NM.USER_TAKEOVER_MODAL_UNBLOCK),
                              u.Z.showUnblockSuccessToast(e, n))
                            : (S(!0),
                              j(x.NM.USER_TAKEOVER_MODAL_BLOCK),
                              o.Z.blockUser(e, { location: m.DL }).then(() => {
                                  u.Z.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, i.jsx)(s.Button, {
                    text: O ? _.intl.string(_.t.QvwOJ6) : _.intl.string(_.t["7fHyE6"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.U65,
                    onClick: M,
                    loading: N,
                    disabled: O,
                }),
                (0, i.jsx)(s.Button, {
                    text: Z,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.kBi,
                    onClick: () => {
                        0 === R
                            ? ((0, c.Z)(m.EI), j(x.NM.USER_TAKEOVER_MODAL_CTL))
                            : 2 === R
                              ? ((0, c.Z)(m.$l), j(x.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, c.Z)(m.n4), j(x.NM.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
