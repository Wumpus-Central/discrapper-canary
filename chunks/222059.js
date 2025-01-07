n.d(t, {
    u: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(91192),
    a = n(442837),
    o = n(433517),
    s = n(481060),
    c = n(339149),
    u = n(327943),
    d = n(864682),
    h = n(540059),
    p = n(899740),
    f = n(155409),
    m = n(699516),
    g = n(944486),
    v = n(594174),
    C = n(431),
    x = n(774343),
    I = n(417363),
    _ = n(941128),
    Z = n(780570),
    b = n(557177),
    S = n(278464),
    N = n(276952),
    E = n(682662),
    y = n(662146),
    j = n(674552),
    T = n(981631),
    P = n(474936),
    A = n(871465),
    w = n(388032),
    M = n(491708);
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
function R(e) {
    let { selected: t, user: n, badge: p, link: m, showProgressBadge: g } = e,
        v = (0, a.e7)([u.Z], () => u.Z.isEditorOpen),
        [C, x] = l.useState(!1),
        [I, _] = l.useState(!1),
        [Z, S] = l.useState(null),
        [P, R] = l.useState(0),
        D = (0, r.Ie)('home'),
        G = (0, h.Q3)('DefaultHomeButton'),
        B = () => {
            S(null), R(0), clearTimeout(Z);
        };
    if (null == n) return null;
    let k = w.intl.string(w.t.YUU0RE);
    I && (k = o.K.get(T.wli) ? w.intl.string(w.t.nkq1l5) : w.intl.string(w.t.Be8Q5O));
    let U = null;
    !t &&
        g &&
        (U = (0, i.jsx)(c.Z, {
            className: M.downloadProgress,
            determineOwnVisibility: !1
        }));
    let O = t || C || v,
        V = (0, i.jsx)(s.BlobMask, {
            selected: G || O,
            lowerBadge: p > 0 ? (0, j.Ne)(p) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, s.getBadgeWidthForValue)(p) },
            children: (0, i.jsx)(s.NavItem, {
                onMouseEnter: () => x(!0),
                onMouseLeave: () => x(!1),
                onClick: () => {
                    if (!__OVERLAY__ && (null != Z && clearTimeout(Z), S(setTimeout(B, 500)), R(P + 1), 15 === P)) {
                        B();
                        let e = !o.K.get(T.wli);
                        o.K.set(T.wli, e),
                            e && o.K.set(A.O5, !0),
                            e ? (0, b.GN)('discodo') : (0, b.GN)('user_leave'),
                            _(!0),
                            setTimeout(() => {
                                _(!1);
                            }, 1000);
                    }
                },
                selected: O,
                ariaLabel: w.intl.string(w.t.YUU0RE),
                ...D,
                to: {
                    pathname: m,
                    state: {
                        analyticsSource: {
                            page: T.ZY5.GUILD_CHANNEL,
                            section: T.jXE.NAVIGATION,
                            object: T.qAy.BUTTON_HOME
                        }
                    }
                },
                children: (0, i.jsx)(d.Z, {})
            })
        });
    return (0, i.jsx)('div', {
        className: M.tutorialContainer,
        children: (0, i.jsx)(f.Z, {
            inlineSpecs: L,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, i.jsxs)(E.H, {
                children: [
                    (0, i.jsx)(N.Z, {
                        selected: t,
                        hovered: C,
                        className: M.pill
                    }),
                    (0, i.jsx)(y.Z, {
                        color: s.Tooltip.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: k,
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
        t = (0, a.e7)([_.Z, I.Z], () => {
            let e = (0, c.E)(_.Z.activeItems, I.Z),
                { total: t, progress: n } = Z.lK(e),
                i = Z.xI(n, t);
            return i > 0 && i < 100;
        }),
        n = (0, a.e7)([m.Z], () => m.Z.getPendingCount()),
        l = Object.keys(P.nG),
        { unviewedTrialCount: r, unviewedDiscountCount: o } = (0, a.cj)([C.Z], () => ({
            unviewedTrialCount: C.Z.getUnacknowledgedOffers(l).length,
            unviewedDiscountCount: C.Z.getUnacknowledgedDiscountOffers().length
        })),
        s = r + o,
        u = (0, a.e7)([v.default], () => v.default.getCurrentUser()),
        d = (0, p.q)(),
        h = n + s + d,
        f = h === s && s > 0 && n + d === 0,
        b = x.Z.getHomeLink();
    return (
        f && (b = T.Z5c.APPLICATION_STORE),
        (0, i.jsx)(R, {
            selected: e,
            user: u,
            selectedChannelId: g.Z.getChannelId(T.ME),
            badge: h,
            link: b,
            showProgressBadge: t
        })
    );
}
