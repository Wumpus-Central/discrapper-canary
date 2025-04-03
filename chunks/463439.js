n.d(e, { Z: () => g }), n(47120);
var r = n(200651),
    s = n(192379),
    o = n(481060),
    i = n(442837),
    c = n(194359),
    a = n(782568),
    l = n(726521),
    u = n(485664),
    d = n(681678),
    N = n(699516),
    E = n(473092),
    h = n(991981),
    _ = n(850165),
    x = n(134612),
    b = n(388032),
    f = n(948582),
    p = n(149355);
function g(t) {
    let { senderId: e, channelId: n, hasReported: g, onReport: m, trackAnalyticsEvent: C } = t,
        I = (0, i.e7)([N.Z], () => N.Z.isBlocked(e)),
        [A, T] = s.useState(I),
        S = (0, u.o)(),
        O = (0, u.Q)(),
        [j, R] = s.useState(!1),
        k = (0, h.q)(n),
        M = s.useMemo(() => (S ? 0 : O ? 2 : 1), [S, O]),
        v = () => {
            T(!0),
                C(E.NM.USER_TAKEOVER_MODAL_BLOCK),
                c.Z.blockUser(e, { location: x.DL }).then(() => {
                    d.Z.showBlockSuccessToast(e, n);
                });
        },
        y = () => {
            T(!1), c.Z.unblockUser(e, { location: x.DL }), C(E.NM.USER_TAKEOVER_MODAL_UNBLOCK), d.Z.showUnblockSuccessToast(e, n);
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
                C(E.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        L = (t) => {
            0 === t ? ((0, a.Z)(x.EI), C(E.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, a.Z)(x.$l), C(E.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, a.Z)(x.n4), C(E.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        w = s.useMemo(() => {
            switch (M) {
                case 0:
                    return b.NW.string(b.t.sZf6c3);
                case 2:
                    return b.NW.string(b.t.HQ2nKi);
                default:
                    return b.NW.string(b.t['65XQam']);
            }
        }, [M]);
    return (0, r.jsx)(_.Z, {
        heroImageSrc: p,
        heroImageAlt: b.NW.string(b.t.RVyYCA),
        header: b.NW.string(b.t['mWO+ys']),
        description: b.NW.string(b.t.S0XtKC),
        children: (0, r.jsxs)('div', {
            className: f.buttonContainer,
            children: [
                (0, r.jsxs)(o.zxk, {
                    color: o.zxk.Colors.BRAND,
                    size: o.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () => {
                        A ? y() : v();
                    },
                    children: [
                        (0, r.jsx)(o.k$p, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        A ? b.NW.string(b.t.XyHpKC) : b.NW.string(b.t.l4EmaW)
                    ]
                }),
                (0, r.jsxs)(o.zxk, {
                    color: o.zxk.Colors.PRIMARY,
                    size: o.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: z,
                    submitting: j,
                    disabled: g,
                    children: [
                        (0, r.jsx)(o.U65, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        g ? b.NW.string(b.t.QvwOJy) : b.NW.string(b.t['7fHyEx'])
                    ]
                }),
                (0, r.jsxs)(o.zxk, {
                    color: o.zxk.Colors.PRIMARY,
                    size: o.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () => L(M),
                    children: [
                        (0, r.jsx)(o.kBi, {
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
