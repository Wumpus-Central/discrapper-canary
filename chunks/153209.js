n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(140155),
    u = n(497089),
    m = n(178480),
    _ = n(11799),
    h = n(616032),
    p = n(216789),
    g = n(695346),
    f = n(626135),
    x = n(709054),
    C = n(791914),
    v = n(981631),
    E = n(388032),
    I = n(906322),
    N = n(76334);
function S(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(c.M0o, {
        tooltip: E.intl.string(E.t['8k+6QU']),
        color: c.YX$.TERTIARY,
        icon: (0, i.jsx)(c.W6s, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: N.controlButton,
        onClick: t
    });
}
function T(e) {
    let { setTab: t, badgeState: n, closePopout: a } = e,
        { initialized: c, items: E, loading: N, loadMore: T } = (0, _.y6)(),
        b = (0, s.e7)([d.Z], () => d.Z.localItems),
        A = (0, p.Us)({ location: 'ForYou' }),
        j = l.useMemo(() => [...[...E, ...b].sort((e, t) => -1 * x.default.compare(e.id, t.id))], [E, b]),
        y = E.length > 0 ? E[0] : null,
        Z = g.d$.useSetting(),
        R = l.useMemo(() => {
            if (null != y && 0 >= x.default.compare(y.id, Z)) return !1;
            for (let e of j) {
                if (0 >= x.default.compare(e.id, Z)) break;
                if (!(0, m.r)(e, Z)) return !0;
            }
            return !1;
        }, [y, Z, j]);
    return (0, i.jsxs)('div', {
        className: r()(I.container, { [I.widerInbox]: A }),
        children: [
            (0, i.jsx)(C.Z, {
                tab: o.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: a,
                children: R
                    ? (0, i.jsx)(S, {
                          onClick: () => {
                              null != y && (g.d$.updateSetting(y.id), f.default.track(v.rMx.NOTIFICATION_CENTER_ACTION, { action_type: u.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, i.jsx)(h.Z, {
                initialized: c,
                items: j,
                loading: N,
                loadMore: T
            })
        ]
    });
}
