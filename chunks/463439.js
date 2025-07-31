(n.d(e, { Z: () => m }), n(388685));
var r = n(255367),
    i = n(73800),
    s = n(481060),
    a = n(442837),
    o = n(194359),
    c = n(782568),
    l = n(726521),
    d = n(485664),
    u = n(681678),
    E = n(699516),
    _ = n(473092),
    h = n(991981),
    p = n(850165),
    f = n(134612),
    x = n(388032),
    N = n(948582),
    g = n(149355);
function m(t) {
    let { senderId: e, channelId: n, hasReported: m, onReport: T, trackAnalyticsEvent: b } = t,
        A = (0, a.e7)([E.Z], () => E.Z.isBlocked(e)),
        [C, O] = i.useState(A),
        v = (0, d.o)(),
        I = (0, d.Q)(),
        [S, j] = i.useState(!1),
        y = (0, h.q)(n),
        M = i.useMemo(() => (v ? 0 : I ? 2 : 1), [v, I]),
        R = () => {
            (O(!0),
                b(_.NM.USER_TAKEOVER_MODAL_BLOCK),
                o.Z.blockUser(e, { location: f.DL }).then(() => {
                    u.Z.showBlockSuccessToast(e, n);
                }));
        },
        w = () => {
            (O(!1), o.Z.unblockUser(e, { location: f.DL }), b(_.NM.USER_TAKEOVER_MODAL_UNBLOCK), u.Z.showUnblockSuccessToast(e, n));
        },
        P = async () => {
            null != y &&
                (j(!0),
                await (0, l.J7)(
                    y,
                    () => {
                        (u.Z.showReportSuccessToast(e, n), T());
                    },
                    () => {
                        u.Z.showFailedToast();
                    }
                ),
                j(!1),
                b(_.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        D = (t) => {
            0 === t ? ((0, c.Z)(f.EI), b(_.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, c.Z)(f.$l), b(_.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.Z)(f.n4), b(_.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        L = i.useMemo(() => {
            switch (M) {
                case 0:
                    return x.intl.string(x.t.sZf6c3);
                case 2:
                    return x.intl.string(x.t.HQ2nKi);
                default:
                    return x.intl.string(x.t['65XQam']);
            }
        }, [M]);
    return (0, r.jsx)(p.Z, {
        heroImageSrc: g,
        heroImageAlt: x.intl.string(x.t.RVyYCA),
        header: x.intl.string(x.t['mWO+ys']),
        description: x.intl.string(x.t.S0XtKC),
        children: (0, r.jsxs)('div', {
            className: N.buttonContainer,
            children: [
                (0, r.jsx)(s.zxk, {
                    text: C ? x.intl.string(x.t.XyHpKC) : x.intl.string(x.t.l4EmaW),
                    variant: 'primary',
                    fullWidth: !0,
                    icon: s.k$p,
                    onClick: () => {
                        C ? w() : R();
                    }
                }),
                (0, r.jsx)(s.zxk, {
                    text: m ? x.intl.string(x.t.QvwOJy) : x.intl.string(x.t['7fHyEx']),
                    variant: 'secondary',
                    fullWidth: !0,
                    icon: s.U65,
                    onClick: P,
                    loading: S,
                    disabled: m
                }),
                (0, r.jsx)(s.zxk, {
                    text: L,
                    variant: 'secondary',
                    fullWidth: !0,
                    icon: s.kBi,
                    onClick: () => D(M)
                })
            ]
        })
    });
}
