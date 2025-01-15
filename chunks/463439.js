e.d(n, {
    Z: function () {
        return S;
    }
}),
    e(47120);
var r,
    o,
    i = e(200651),
    s = e(192379),
    a = e(481060),
    c = e(442837),
    l = e(194359),
    u = e(782568),
    d = e(726521),
    E = e(485664),
    N = e(681678),
    h = e(699516),
    f = e(863653),
    _ = e(473092),
    I = e(991981),
    C = e(850165),
    T = e(134612),
    A = e(981631),
    p = e(388032),
    g = e(503533),
    m = e(149355);
function S(t) {
    let { senderId: n, channelId: e, hasReported: r, onReport: o, trackAnalyticsEvent: S } = t,
        b = (0, c.e7)([h.Z], () => h.Z.isBlocked(n)),
        [x, R] = s.useState(b),
        M = (0, E.o)(),
        L = (0, f.zF)('ic-take-action-web'),
        [j, v] = s.useState(!1),
        O = (0, I.q)(e),
        B = s.useMemo(() => (M ? 0 : L ? 2 : 1), [M, L]),
        D = () => {
            R(!0),
                l.Z.addRelationship({
                    userId: n,
                    context: { location: T.DL },
                    type: A.OGo.BLOCKED
                }),
                S(_.NM.USER_TAKEOVER_MODAL_BLOCK),
                N.Z.showBlockSuccessToast(n, e);
        },
        Z = () => {
            R(!1), l.Z.unblockUser(n, { location: T.DL }), S(_.NM.USER_TAKEOVER_MODAL_UNBLOCK), N.Z.showUnblockSuccessToast(n, e);
        },
        y = async () => {
            if (null != O)
                v(!0),
                    await (0, d.J7)(
                        O,
                        () => {
                            N.Z.showReportSuccessToast(n, e), o();
                        },
                        () => {
                            N.Z.showFailedToast();
                        }
                    ),
                    v(!1),
                    S(_.NM.USER_TAKEOVER_MODAL_REPORT);
        },
        w = (t) => {
            0 === t ? ((0, u.Z)(T.EI), S(_.NM.USER_TAKEOVER_MODAL_CTL)) : 2 === t ? ((0, u.Z)(T.$l), S(_.NM.USER_TAKEOVER_MODAL_THROUGHLINE)) : ((0, u.Z)(T.n4), S(_.NM.USER_TAKEOVER_MODAL_NO_FILTR));
        },
        k = s.useMemo(() => {
            switch (B) {
                case 0:
                    return p.intl.string(p.t.sZf6c3);
                case 2:
                    return p.intl.string(p.t.HQ2nKi);
                default:
                    return p.intl.string(p.t['65XQam']);
            }
        }, [B]);
    return (0, i.jsx)(C.Z, {
        heroImageSrc: m,
        heroImageAlt: p.intl.string(p.t.RVyYCA),
        header: p.intl.string(p.t['mWO+ys']),
        description: p.intl.string(p.t.S0XtKC),
        children: (0, i.jsxs)('div', {
            className: g.buttonContainer,
            children: [
                (0, i.jsxs)(a.Button, {
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.LARGE,
                    className: g.button,
                    innerClassName: g.buttonInner,
                    onClick: () => {
                        x ? Z() : D();
                    },
                    children: [
                        (0, i.jsx)(a.CircleXIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: g.buttonIcon,
                            color: 'currentColor'
                        }),
                        x ? p.intl.string(p.t.XyHpKC) : p.intl.string(p.t.l4EmaW)
                    ]
                }),
                (0, i.jsxs)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.LARGE,
                    className: g.button,
                    innerClassName: g.buttonInner,
                    onClick: y,
                    submitting: j,
                    disabled: r,
                    children: [
                        (0, i.jsx)(a.FlagIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: g.buttonIcon,
                            color: 'currentColor'
                        }),
                        r ? p.intl.string(p.t.QvwOJy) : p.intl.string(p.t['7fHyEx'])
                    ]
                }),
                (0, i.jsxs)(a.Button, {
                    color: a.Button.Colors.PRIMARY,
                    size: a.Button.Sizes.LARGE,
                    className: g.button,
                    innerClassName: g.buttonInner,
                    onClick: () => w(B),
                    children: [
                        (0, i.jsx)(a.ChatIcon, {
                            size: 'custom',
                            height: 20,
                            width: 20,
                            className: g.buttonIcon,
                            color: 'currentColor'
                        }),
                        k
                    ]
                })
            ]
        })
    });
}
((o = r || (r = {}))[(o.CTL = 0)] = 'CTL'), (o[(o.NO_FILTR = 1)] = 'NO_FILTR'), (o[(o.THROUGHLINE = 2)] = 'THROUGHLINE');
