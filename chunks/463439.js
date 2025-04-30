n.d(e, { Z: () => g }), n(388685);
var r = n(200651),
    s = n(192379),
    i = n(481060),
    o = n(442837),
    c = n(194359),
    a = n(782568),
    l = n(726521),
    u = n(485664),
    d = n(681678),
    E = n(699516),
    h = n(473092),
    _ = n(991981),
    N = n(850165),
    x = n(134612),
    b = n(388032),
    f = n(948582),
    p = n(149355);
function g(t) {
    let { senderId: e, channelId: n, hasReported: g, onReport: m, trackAnalyticsEvent: C } = t,
        I = (0, o.e7)([E.Z], () => E.Z.isBlocked(e)),
        [A, T] = s.useState(I),
        S = (0, u.o)(),
        O = (0, u.Q)(),
        [j, R] = s.useState(!1),
        k = (0, _.q)(n),
        M = s.useMemo(() => (S ? 0 : O ? 2 : 1), [S, O]),
        v = () => {
            T(!0),
                C(h.NM.USER_TAKEOVER_MODAL_BLOCK),
                c.Z.blockUser(e, { location: x.DL }).then(() => {
                    d.Z.showBlockSuccessToast(e, n);
                });
        },
        y = () => {
            T(!1), c.Z.unblockUser(e, { location: x.DL }), C(h.NM.USER_TAKEOVER_MODAL_UNBLOCK), d.Z.showUnblockSuccessToast(e, n);
        },
        z = async () => {
            null != k &&
                (R(!0),
                await (0, l.J7)(
                    k,
                    () => {
                        d.Z.showReportSuccessToast(e, n), m();
                    },
                    () => {
                        d.Z.showFailedToast();
                    }
                ),
                R(!1),
                C(h.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        L = (t) => {
            0 === t ? ((0, a.Z)(x.EI), C(h.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, a.Z)(x.$l), C(h.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, a.Z)(x.n4), C(h.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        w = s.useMemo(() => {
            switch (M) {
                case 0:
                    return b.intl.string(b.t.sZf6c3);
                case 2:
                    return b.intl.string(b.t.HQ2nKi);
                default:
                    return b.intl.string(b.t['65XQam']);
            }
        }, [M]);
    return (0, r.jsx)(N.Z, {
        heroImageSrc: p,
        heroImageAlt: b.intl.string(b.t.RVyYCA),
        header: b.intl.string(b.t['mWO+ys']),
        description: b.intl.string(b.t.S0XtKC),
        children: (0, r.jsxs)('div', {
            className: f.buttonContainer,
            children: [
                (0, r.jsxs)(i.zxk, {
                    color: i.zxk.Colors.BRAND,
                    size: i.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () => {
                        A ? y() : v();
                    },
                    children: [
                        (0, r.jsx)(i.k$p, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        A ? b.intl.string(b.t.XyHpKC) : b.intl.string(b.t.l4EmaW)
                    ]
                }),
                (0, r.jsxs)(i.zxk, {
                    color: i.zxk.Colors.PRIMARY,
                    size: i.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: z,
                    submitting: j,
                    disabled: g,
                    children: [
                        (0, r.jsx)(i.U65, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        g ? b.intl.string(b.t.QvwOJy) : b.intl.string(b.t['7fHyEx'])
                    ]
                }),
                (0, r.jsxs)(i.zxk, {
                    color: i.zxk.Colors.PRIMARY,
                    size: i.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () => L(M),
                    children: [
                        (0, r.jsx)(i.kBi, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        w
                    ]
                })
            ]
        })
    });
}
