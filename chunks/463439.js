n.d(e, { Z: () => O }), n(388685);
var i = n(951288),
    r = n(647438),
    s = n(481060),
    a = n(442837),
    o = n(194359),
    c = n(782568),
    l = n(726521),
    d = n(485664),
    u = n(681678),
    x = n(699516),
    p = n(473092),
    h = n(991981),
    m = n(850165),
    g = n(134612),
    _ = n(388032),
    f = n(394968),
    b = n(149355);
function O(t) {
    let { senderId: e, channelId: n, hasReported: O, onReport: v, trackAnalyticsEvent: j } = t,
        T = (0, a.e7)([x.Z], () => x.Z.isBlocked(e)),
        [E, y] = r.useState(T),
        S = (0, d.o)(),
        A = (0, d.Q)(),
        [N, C] = r.useState(!1),
        k = (0, h.q)(n),
        I = r.useMemo(() => (S ? 0 : A ? 2 : 1), [S, A]),
        M = async () => {
            null != k &&
                (C(!0),
                await (0, l.J7)(
                    k,
                    () => {
                        u.Z.showReportSuccessToast(e, n), v();
                    },
                    () => {
                        u.Z.showFailedToast();
                    },
                ),
                C(!1),
                j(p.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        R = r.useMemo(() => {
            switch (I) {
                case 0:
                    return _.intl.string(_.t.sZf6c3);
                case 2:
                    return _.intl.string(_.t.HQ2nKi);
                default:
                    return _.intl.string(_.t["65XQam"]);
            }
        }, [I]);
    return (0, i.jsx)(m.Z, {
        heroImageSrc: b,
        heroImageAlt: _.intl.string(_.t.RVyYCA),
        header: _.intl.string(_.t["mWO+ys"]),
        description: _.intl.string(_.t.S0XtKC),
        children: (0, i.jsxs)("div", {
            className: f.buttonContainer,
            children: [
                (0, i.jsx)(s.zxk, {
                    text: E ? _.intl.string(_.t.XyHpKC) : _.intl.string(_.t.l4EmaW),
                    variant: "primary",
                    fullWidth: !0,
                    icon: s.k$p,
                    onClick: () => {
                        E
                            ? (y(!1),
                              o.Z.unblockUser(e, { location: g.DL }),
                              j(p.NM.USER_TAKEOVER_MODAL_UNBLOCK),
                              u.Z.showUnblockSuccessToast(e, n))
                            : (y(!0),
                              j(p.NM.USER_TAKEOVER_MODAL_BLOCK),
                              o.Z.blockUser(e, { location: g.DL }).then(() => {
                                  u.Z.showBlockSuccessToast(e, n);
                              }));
                    },
                }),
                (0, i.jsx)(s.zxk, {
                    text: O ? _.intl.string(_.t.QvwOJy) : _.intl.string(_.t["7fHyEx"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.U65,
                    onClick: M,
                    loading: N,
                    disabled: O,
                }),
                (0, i.jsx)(s.zxk, {
                    text: R,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.kBi,
                    onClick: () => {
                        0 === I
                            ? ((0, c.Z)(g.EI), j(p.NM.USER_TAKEOVER_MODAL_CTL))
                            : 2 === I
                              ? ((0, c.Z)(g.$l), j(p.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                              : ((0, c.Z)(g.n4), j(p.NM.USER_TAKEOVER_MODAL_NO_FILTR));
                    },
                }),
            ],
        }),
    });
}
