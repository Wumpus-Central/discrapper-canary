n.d(t, { u: () => D }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(442837),
    o = n(433517),
    s = n(481060),
    c = n(339149),
    d = n(327943),
    u = n(864682),
    h = n(540059),
    p = n(899740),
    m = n(849862),
    g = n(155409),
    f = n(944486),
    _ = n(594174),
    v = n(431),
    x = n(774343),
    C = n(417363),
    Z = n(941128),
    I = n(780570),
    b = n(557177),
    S = n(278464),
    N = n(276952),
    j = n(682662),
    E = n(662146),
    y = n(674552),
    P = n(981631),
    T = n(474936),
    A = n(871465),
    w = n(388032),
    R = n(491708);
let L = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};
function M(e) {
    let { selected: t, user: n, badge: p, link: m, showProgressBadge: f } = e,
        _ = (0, a.e7)([d.Z], () => d.Z.isEditorOpen),
        [v, x] = l.useState(!1),
        [C, Z] = l.useState(!1),
        [I, S] = l.useState(null),
        [T, M] = l.useState(0),
        D = (0, r.Ie)('home'),
        G = (0, h.Q3)('DefaultHomeButton'),
        k = () => {
            S(null), M(0), clearTimeout(I);
        };
    if (null == n) return null;
    let B = w.intl.string(w.t.YUU0RE);
    C && (B = o.K.get(P.wli) ? w.intl.string(w.t.nkq1l5) : w.intl.string(w.t.Be8Q5O));
    let O = null;
    !t &&
        f &&
        (O = (0, i.jsx)(c.Z, {
            className: R.downloadProgress,
            determineOwnVisibility: !1
        }));
    let U = t || v || _,
        V = (0, i.jsx)(s.aRk, {
            selected: G || U,
            lowerBadge: p > 0 ? (0, y.Ne)(p) : null,
            upperBadge: O,
            lowerBadgeSize: { width: (0, s.OVM)(p) },
            children: (0, i.jsx)(s.LYs, {
                onMouseEnter: () => x(!0),
                onMouseLeave: () => x(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != I && clearTimeout(I), S(setTimeout(k, 500)), M(T + 1), 15 === T)) {
                        k();
                        let e = !o.K.get(P.wli);
                        o.K.set(P.wli, e),
                            e && o.K.set(A.O5, !0),
                            e ? (0, b.GN)('discodo') : (0, b.GN)('user_leave'),
                            Z(!0),
                            setTimeout(() => {
                                Z(!1);
                            }, 1000);
                    }
                },
                selected: U,
                ariaLabel: w.intl.string(w.t.YUU0RE),
                ...D,
                to: {
                    pathname: m,
                    state: {
                        analyticsSource: {
                            page: P.ZY5.GUILD_CHANNEL,
                            section: P.jXE.NAVIGATION,
                            object: P.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(u.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: R.tutorialContainer,
        children: (0, i.jsx)(g.Z, {
            inlineSpecs: L,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(j.H, {
                children: [
                    (0, i.jsx)(N.Z, {
                        selected: t,
                        hovered: v,
                        className: R.pill
                    }),
                    (0, i.jsx)(E.Z, {
                        color: s.ua7.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: B,
                        selected: t,
                        children: V
                    })
                ]
            })
        })
    });
}
function D() {
    let e = (0, S.n)(),
        t = (0, a.e7)([Z.Z, C.Z], () => {
            let e = (0, c.E)(Z.Z.activeItems, C.Z),
                { total: t, progress: n } = I.lK(e),
                i = I.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, m.If)(),
        l = Object.keys(T.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cj)([v.Z], () => ({
            unviewedTrialCount: v.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: v.Z.getUnacknowledgedDiscountOffers().length
        })),
        s = r + o,
        d = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        u = (0, p.q)(),
        h = n + s + u,
        g = h === s && s > 0 && n + u === 0,
        b = x.Z.getHomeLink();
    return (
        g && (b = P.Z5c.APPLICATION_STORE),
        (0, i.jsx)(M, {
            selected: e,
            user: d,
            selectedChannelId: f.Z.getChannelId(P.ME),
            badge: h,
            link: b,
            showProgressBadge: t
        })
    );
}
