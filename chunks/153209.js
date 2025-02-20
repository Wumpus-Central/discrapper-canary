n.d(t, { Z: () => N }), n(47120), n(230036);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    s = n(524437),
    c = n(481060),
    d = n(140155),
    u = n(497089),
    p = n(178480),
    m = n(11799),
    f = n(616032),
    h = n(216789),
    g = n(695346),
    _ = n(626135),
    b = n(709054),
    v = n(791914),
    y = n(981631),
    x = n(388032),
    O = n(253248),
    E = n(829540);
function j(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(c.M0o, {
        tooltip: x.NW.string(x.t['8k+6QU']),
        color: c.YX$.TERTIARY,
        icon: (0, r.jsx)(c.W6s, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: E.controlButton,
        onClick: t
    });
}
function N(e) {
    let { setTab: t, badgeState: n, closePopout: a } = e,
        { initialized: c, items: x, loading: E, loadMore: N } = (0, m.y6)(),
        C = (0, l.e7)([d.Z], () => d.Z.localItems),
        I = (0, h.Us)({ location: 'ForYou' }),
        S = i.useMemo(() => [...[...x, ...C].sort((e, t) => -1 * b.default.compare(e.id, t.id))], [x, C]),
        P = x.length > 0 ? x[0] : null,
        T = g.d$.useSetting(),
        A = i.useMemo(() => {
            if (null != P && 0 >= b.default.compare(P.id, T)) return !1;
            for (let e of S) {
                if (0 >= b.default.compare(e.id, T)) break;
                if (!(0, p.r)(e, T)) return !0;
            }
            return !1;
        }, [P, T, S]);
    return (0, r.jsxs)('div', {
        className: o()(O.container, { [O.widerInbox]: I }),
        children: [
            (0, r.jsx)(v.Z, {
                tab: s.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: a,
                children: A
                    ? (0, r.jsx)(j, {
                          onClick: () => {
                              null != P && (g.d$.updateSetting(P.id), _.default.track(y.rMx.NOTIFICATION_CENTER_ACTION, { action_type: u.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, r.jsx)(f.Z, {
                initialized: c,
                items: S,
                loading: E,
                loadMore: N
            })
        ]
    });
}
