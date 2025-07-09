(n.d(e, { Z: () => g }), n(388685));
var r = n(255367),
    s = n(73800),
    i = n(755721),
    o = n(481060),
    c = n(442837),
    a = n(194359),
    l = n(782568),
    u = n(726521),
    d = n(485664),
    E = n(681678),
    h = n(699516),
    _ = n(473092),
    N = n(991981),
    x = n(850165),
    b = n(134612),
    p = n(388032),
    f = n(948582),
    m = n(149355);
function g(t) {
    let { senderId: e, channelId: n, hasReported: g, onReport: C, trackAnalyticsEvent: I } = t,
        A = (0, c.e7)([h.Z], () => h.Z.isBlocked(e)),
        [T, S] = s.useState(A),
        O = (0, d.o)(),
        j = (0, d.Q)(),
        [R, M] = s.useState(!1),
        v = (0, N.q)(n),
        y = s.useMemo(() => (O ? 0 : j ? 2 : 1), [O, j]),
        z = () => {
            (S(!0),
                I(_.NM.USER_TAKEOVER_MODAL_BLOCK),
                a.Z.blockUser(e, { location: b.DL }).then(() => {
                    E.Z.showBlockSuccessToast(e, n);
                }));
        },
        L = () => {
            (S(!1), a.Z.unblockUser(e, { location: b.DL }), I(_.NM.USER_TAKEOVER_MODAL_UNBLOCK), E.Z.showUnblockSuccessToast(e, n));
        },
        w = async () => {
            null != v &&
                (M(!0),
                await (0, u.J7)(
                    v,
                    () => {
                        (E.Z.showReportSuccessToast(e, n), C());
                    },
                    () => {
                        E.Z.showFailedToast();
                    }
                ),
                M(!1),
                I(_.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        P = (t) => {
            0 === t ? ((0, l.Z)(b.EI), I(_.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, l.Z)(b.$l), I(_.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, l.Z)(b.n4), I(_.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        D = s.useMemo(() => {
            switch (y) {
                case 0:
                    return p.intl.string(p.t.sZf6c3);
                case 2:
                    return p.intl.string(p.t.HQ2nKi);
                default:
                    return p.intl.string(p.t['65XQam']);
            }
        }, [y]);
    return (0, r.jsx)(x.Z, {
        heroImageSrc: m,
        heroImageAlt: p.intl.string(p.t.RVyYCA),
        header: p.intl.string(p.t['mWO+ys']),
        description: p.intl.string(p.t.S0XtKC),
        children: (0, r.jsxs)('div', {
            className: f.buttonContainer,
            children: [
                (0, r.jsxs)(i.zx, {
                    color: i.zx.Colors.BRAND,
                    size: i.zx.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () => {
                        T ? L() : z();
                    },
                    children: [
                        (0, r.jsx)(o.k$p, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        T ? p.intl.string(p.t.XyHpKC) : p.intl.string(p.t.l4EmaW)
                    ]
                }),
                (0, r.jsxs)(i.zx, {
                    color: i.zx.Colors.PRIMARY,
                    size: i.zx.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: w,
                    submitting: R,
                    disabled: g,
                    children: [
                        (0, r.jsx)(o.U65, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        g ? p.intl.string(p.t.QvwOJy) : p.intl.string(p.t['7fHyEx'])
                    ]
                }),
                (0, r.jsxs)(i.zx, {
                    color: i.zx.Colors.PRIMARY,
                    size: i.zx.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () => P(y),
                    children: [
                        (0, r.jsx)(o.kBi, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        D
                    ]
                })
            ]
        })
    });
}
