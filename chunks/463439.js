n.d(e, { Z: () => O }), n(388685);
var i = n(255367),
    r = n(73800),
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
    g = n(850165),
    m = n(134612),
    f = n(388032),
    _ = n(682721),
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
        L = r.useMemo(() => {
            switch (I) {
                case 0:
                    return f.intl.string(f.t.sZf6c3);
                case 2:
                    return f.intl.string(f.t.HQ2nKi);
                default:
                    return f.intl.string(f.t["65XQam"]);
            }
        }, [I]);
    return (0, i.jsx)(g.Z, {
        heroImageSrc: b,
        heroImageAlt: f.intl.string(f.t.RVyYCA),
        header: f.intl.string(f.t["mWO+ys"]),
        description: f.intl.string(f.t.S0XtKC),
        children: (0, i.jsxs)("div", {
            className: _.buttonContainer,
            children: [
                (0, i.jsx)(s.zxk, {
                    text: E ? f.intl.string(f.t.XyHpKC) : f.intl.string(f.t.l4EmaW),
                    variant: "primary",
                    fullWidth: !0,
                    icon: s.k$p,
                    onClick: () => {
                        E ? R() : M();
                    },
                }),
                (0, i.jsx)(s.zxk, {
                    text: O ? f.intl.string(f.t.QvwOJy) : f.intl.string(f.t["7fHyEx"]),
                    variant: "secondary",
                    fullWidth: !0,
                    icon: s.U65,
                    onClick: Z,
                    loading: N,
                    disabled: O,
                }),
                (0, i.jsx)(s.zxk, {
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
