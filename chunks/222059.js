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
    g = n(460181),
    f = n(155409),
    _ = n(944486),
    v = n(594174),
    C = n(431),
    x = n(774343),
    Z = n(417363),
    I = n(941128),
    b = n(780570),
    S = n(278464),
    N = n(276952),
    E = n(682662),
    j = n(662146),
    y = n(674552),
    A = n(981631),
    T = n(474936),
    P = n(871465),
    w = n(388032),
    R = n(337951);
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
    let { selected: t, user: n, badge: p, link: m, showProgressBadge: _ } = e,
        v = (0, a.e7)([d.Z], () => d.Z.isEditorOpen),
        [C, x] = l.useState(!1),
        [Z, I] = l.useState(!1),
        [b, S] = l.useState(null),
        [T, M] = l.useState(0),
        D = (0, r.Ie)('home'),
        G = (0, h.Q3)('DefaultHomeButton'),
        k = () => {
            S(null), M(0), clearTimeout(b);
        };
    if (null == n) return null;
    let B = w.intl.string(w.t.YUU0RE);
    Z && (B = o.K.get(A.wli) ? w.intl.string(w.t.nkq1l5) : w.intl.string(w.t.Be8Q5O));
    let O = null;
    !t &&
        _ &&
        (O = (0, i.jsx)(c.Z, {
            className: R.downloadProgress,
            determineOwnVisibility: !1
        }));
    let U = t || C || v,
        V = (0, i.jsx)(s.aRk, {
            selected: G || U,
            lowerBadge: p > 0 ? (0, y.Ne)(p) : null,
            upperBadge: O,
            lowerBadgeSize: { width: (0, s.OVM)(p) },
            children: (0, i.jsx)(s.LYs, {
                onMouseEnter: () => x(!0),
                onMouseLeave: () => x(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != b && clearTimeout(b), S(setTimeout(k, 500)), M(T + 1), 15 === T)) {
                        k();
                        let e = !o.K.get(A.wli);
                        o.K.set(A.wli, e),
                            e && o.K.set(P.O5, !0),
                            e ? (0, g.GN)('discodo') : (0, g.GN)('user_leave'),
                            I(!0),
                            setTimeout(() => {
                                I(!1);
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
                            page: A.ZY5.GUILD_CHANNEL,
                            section: A.jXE.NAVIGATION,
                            object: A.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(u.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: R.tutorialContainer,
        children: (0, i.jsx)(f.Z, {
            inlineSpecs: L,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(E.H, {
                children: [
                    (0, i.jsx)(N.Z, {
                        selected: t,
                        hovered: C,
                        className: R.pill
                    }),
                    (0, i.jsx)(j.Z, {
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
        t = (0, a.e7)([I.Z, Z.Z], () => {
            let e = (0, c.E)(I.Z.activeItems, Z.Z),
                { total: t, progress: n } = b.lK(e),
                i = b.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, m.If)(),
        l = Object.keys(T.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cj)([C.Z], () => ({
            unviewedTrialCount: C.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: C.Z.getUnacknowledgedDiscountOffers().length
        })),
        s = r + o,
        d = (0, a.e7)([v.default], () => v.default.getCurrentUser()),
        u = (0, p.q)(),
        h = n + s + u,
        g = h === s && s > 0 && n + u === 0,
        f = x.Z.getHomeLink();
    return (
        g && (f = A.Z5c.APPLICATION_STORE),
        (0, i.jsx)(M, {
            selected: e,
            user: d,
            selectedChannelId: _.Z.getChannelId(A.ME),
            badge: h,
            link: f,
            showProgressBadge: t
        })
    );
}
