n.d(e, { Z: () => m }), n(47120);
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
    b = n(981631),
    p = n(388032),
    f = n(878418),
    g = n(149355);
function m(t) {
    let { senderId: e, channelId: n, hasReported: m, onReport: C, trackAnalyticsEvent: I } = t,
        A = (0, i.e7)([N.Z], () => N.Z.isBlocked(e)),
        [T, S] = s.useState(A),
        O = (0, u.o)(),
        j = (0, u.Q)(),
        [R, k] = s.useState(!1),
        M = (0, h.q)(n),
        v = s.useMemo(() => (O ? 0 : j ? 2 : 1), [O, j]),
        y = () => {
            S(!0),
                c.Z.addRelationship({
                    userId: e,
                    context: { location: x.DL },
                    type: b.OGo.BLOCKED
                }),
                I(E.NM.USER_TAKEOVER_MODAL_BLOCK),
                d.Z.showBlockSuccessToast(e, n);
        },
        z = () => {
            S(!1), c.Z.unblockUser(e, { location: x.DL }), I(E.NM.USER_TAKEOVER_MODAL_UNBLOCK), d.Z.showUnblockSuccessToast(e, n);
        },
        L = async () => {
            null != M &&
                (k(!0),
                await (0, l.J7)(
                    M,
                    () => {
                        d.Z.showReportSuccessToast(e, n), C();
                    },
                    () => {
                        d.Z.showFailedToast();
                    }
                ),
                k(!1),
                I(E.NM.USER_TAKEOVER_MODAL_REPORT));
        },
        w = (t) => {
            0 === t ? ((0, a.Z)(x.EI), I(E.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, a.Z)(x.$l), I(E.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, a.Z)(x.n4), I(E.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        P = s.useMemo(() => {
            switch (v) {
                case 0:
                    return p.NW.string(p.t.sZf6c3);
                case 2:
                    return p.NW.string(p.t.HQ2nKi);
                default:
                    return p.NW.string(p.t['65XQam']);
            }
        }, [v]);
    return (0, r.jsx)(_.Z, {
        heroImageSrc: g,
        heroImageAlt: p.NW.string(p.t.RVyYCA),
        header: p.NW.string(p.t['mWO+ys']),
        description: p.NW.string(p.t.S0XtKC),
        children: (0, r.jsxs)('div', {
            className: f.buttonContainer,
            children: [
                (0, r.jsxs)(o.zxk, {
                    color: o.zxk.Colors.BRAND,
                    size: o.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () => {
                        T ? z() : y();
                    },
                    children: [
                        (0, r.jsx)(o.k$p, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        T ? p.NW.string(p.t.XyHpKC) : p.NW.string(p.t.l4EmaW)
                    ]
                }),
                (0, r.jsxs)(o.zxk, {
                    color: o.zxk.Colors.PRIMARY,
                    size: o.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: L,
                    submitting: R,
                    disabled: m,
                    children: [
                        (0, r.jsx)(o.U65, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        m ? p.NW.string(p.t.QvwOJy) : p.NW.string(p.t['7fHyEx'])
                    ]
                }),
                (0, r.jsxs)(o.zxk, {
                    color: o.zxk.Colors.PRIMARY,
                    size: o.zxk.Sizes.LARGE,
                    className: f.button,
                    innerClassName: f.buttonInner,
                    onClick: () => w(v),
                    children: [
                        (0, r.jsx)(o.kBi, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: f.buttonIcon,
                            color: 'currentColor'
                        }),
                        P
                    ]
                })
            ]
        })
    });
}
