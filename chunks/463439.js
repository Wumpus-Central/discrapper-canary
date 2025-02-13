n.d(e, { Z: () => m }), n(47120);
var s = n(200651),
    i = n(192379),
    r = n(481060),
    o = n(442837),
    a = n(194359),
    c = n(782568),
    l = n(726521),
    d = n(485664),
    u = n(681678),
    E = n(699516),
    _ = n(473092),
    h = n(991981),
    N = n(850165),
    x = n(134612),
    C = n(981631),
    I = n(388032),
    A = n(26445),
    T = n(149355);
function m(t) {
    let { senderId: e, channelId: n, hasReported: m, onReport: g, trackAnalyticsEvent: b } = t,
        f = (0, o.e7)([E.Z], () => E.Z.isBlocked(e)),
        [p, S] = i.useState(f),
        R = (0, d.o)(),
        M = (0, d.Q)(),
        [k, j] = i.useState(!1),
        z = (0, h.q)(n),
        L = i.useMemo(() => (R ? 0 : M ? 2 : 1), [R, M]),
        v = () => {
            S(!0),
                a.Z.addRelationship({
                    userId: e,
                    context: { location: x.DL },
                    type: C.OGo.BLOCKED
                }),
                b(_.NM.USER_TAKEOVER_MODAL_BLOCK),
                u.Z.showBlockSuccessToast(e, n);
        },
        O = () => {
            S(!1), a.Z.unblockUser(e, { location: x.DL }), b(_.NM.USER_TAKEOVER_MODAL_UNBLOCK), u.Z.showUnblockSuccessToast(e, n);
        },
        D = async () => {
            null != z &&
                (j(!0),
                await (0, l.J7)(
                    z,
                    () => {
                        u.Z.showReportSuccessToast(e, n), g();
                    },
                    () => {
                        u.Z.showFailedToast();
                    }
                ),
                j(!1),
                b(_.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        Z = (t) => {
            0 === t ? ((0, c.Z)(x.EI), b(_.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, c.Z)(x.$l), b(_.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, c.Z)(x.n4), b(_.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        w = i.useMemo(() => {
            switch (L) {
                case 0:
                    return I.intl.string(I.t.sZf6c3);
                case 2:
                    return I.intl.string(I.t.HQ2nKi);
                default:
                    return I.intl.string(I.t['65XQam']);
            }
        }, [L]);
    return (0, s.jsx)(N.Z, {
        heroImageSrc: T,
        heroImageAlt: I.intl.string(I.t.RVyYCA),
        header: I.intl.string(I.t['mWO+ys']),
        description: I.intl.string(I.t.S0XtKC),
        children: (0, s.jsxs)('div', {
            className: A.buttonContainer,
            children: [
                (0, s.jsxs)(r.zxk, {
                    color: r.zxk.Colors.BRAND,
                    size: r.zxk.Sizes.LARGE,
                    className: A.button,
                    innerClassName: A.buttonInner,
                    onClick: () => {
                        p ? O() : v();
                    },
                    children: [
                        (0, s.jsx)(r.k$p, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: A.buttonIcon,
                            color: 'currentColor'
                        }),
                        p ? I.intl.string(I.t.XyHpKC) : I.intl.string(I.t.l4EmaW)
                    ]
                }),
                (0, s.jsxs)(r.zxk, {
                    color: r.zxk.Colors.PRIMARY,
                    size: r.zxk.Sizes.LARGE,
                    className: A.button,
                    innerClassName: A.buttonInner,
                    onClick: D,
                    submitting: k,
                    disabled: m,
                    children: [
                        (0, s.jsx)(r.U65, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: A.buttonIcon,
                            color: 'currentColor'
                        }),
                        m ? I.intl.string(I.t.QvwOJy) : I.intl.string(I.t['7fHyEx'])
                    ]
                }),
                (0, s.jsxs)(r.zxk, {
                    color: r.zxk.Colors.PRIMARY,
                    size: r.zxk.Sizes.LARGE,
                    className: A.button,
                    innerClassName: A.buttonInner,
                    onClick: () => Z(L),
                    children: [
                        (0, s.jsx)(r.kBi, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: A.buttonIcon,
                            color: 'currentColor'
                        }),
                        w
                    ]
                })
            ]
        })
    });
}
