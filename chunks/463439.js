n.d(e, { Z: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
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
    f = n(850165),
    m = n(134612),
    g = n(388032),
    _ = n(948582),
    b = n(149355);
function O(t) {
    let { senderId: e, channelId: n, hasReported: O, onReport: v, trackAnalyticsEvent: j } = t,
        T = (0, a.e7)([x.Z], () => x.Z.isBlocked(e)),
        [E, y] = i.useState(T),
        S = (0, d.o)(),
        A = (0, d.Q)(),
        [N, C] = i.useState(!1),
        k = (0, h.q)(n),
        I = i.useMemo(() => (S ? 0 : A ? 2 : 1), [S, A]),
        M = () => {
            y(!0),
                j(p.NM.USER_TAKEOVER_MODAL_BLOCK),
                o.Z.blockUser(e, { location: m.DL }).then(() => {
                    u.Z.showBlockSuccessToast(e, n);
                });
        },
        R = () => {
            y(!1),
                o.Z.unblockUser(e, { location: m.DL }),
                j(p.NM.USER_TAKEOVER_MODAL_UNBLOCK),
                u.Z.showUnblockSuccessToast(e, n);
        },
        Z = async () => {
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
        w = (t) => {
            0 === t
                ? ((0, c.Z)(m.EI), j(p.NM.USER_TAKEOVER_MODAL_CTL))
                : 2 === t
                  ? ((0, c.Z)(m.$l), j(p.NM.USER_TAKEOVER_MODAL_THROUGHLINE))
                  : ((0, c.Z)(m.n4), j(p.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        L = i.useMemo(() => {
            switch (I) {
                case 0:
                    return g.intl.string(g.t.sZf6c3);
                case 2:
                    return g.intl.string(g.t.HQ2nKi);
                default:
                    return g.intl.string(g.t["65XQam"]);
            }
        }, [I]);
    return (0, r.jsx)(f.Z, {
        heroImageSrc: b,
        heroImageAlt: g.intl.string(g.t.RVyYCA),
        header: g.intl.string(g.t["mWO+ys"]),
        description: g.intl.string(g.t.S0XtKC),
        children: (0, r.jsxs)("div", {
            className: _.buttonContainer,
            children: [
                (0, r.jsx)(s.zxk, {
                    text: E ? g.intl.string(g.t.XyHpKC) : g.intl.string(g.t.l4EmaW),
                    variant: "primary",
                    fullWidth: !0,
                    icon: s.k$p,
                    onClick: () => {
                        E ? R() : M();
                    },
                }),
                (0, r.jsx)(s.zxk, {
                    text: O ? g.intl.string(g.t.QvwOJy) : g.intl.string(g.t["7fHyEx"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.U65,
                    onClick: Z,
                    loading: N,
                    disabled: O,
                }),
                (0, r.jsx)(s.zxk, {
                    text: L,
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.kBi,
                    onClick: () => w(I),
                }),
            ],
        }),
    });
}
