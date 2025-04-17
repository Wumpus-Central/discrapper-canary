n.d(t, { Z: () => j }), n(388685), n(642613);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(524437),
    c = n(481060),
    u = n(140155),
    d = n(497089),
    p = n(178480),
    m = n(11799),
    f = n(616032),
    h = n(216789),
    g = n(695346),
    _ = n(626135),
    b = n(709054),
    x = n(791914),
    y = n(981631),
    E = n(388032),
    v = n(929968),
    N = n(413813);
function O(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(c.M0o, {
        tooltip: E.NW.string(E.t['8k+6QU']),
        color: c.YX$.TERTIARY,
        icon: (0, r.jsx)(c.W6s, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: N.controlButton,
        onClick: t
    });
}
function j(e) {
    let { setTab: t, badgeState: n, closePopout: l } = e,
        { initialized: c, items: E, loading: N, loadMore: j } = (0, m.y6)(),
        C = (0, o.e7)([u.Z], () => u.Z.localItems),
        S = (0, h.Us)({ location: 'ForYou' }),
        I = i.useMemo(() => [...[...E, ...C].sort((e, t) => -1 * b.default.compare(e.id, t.id))], [E, C]),
        T = E.length > 0 ? E[0] : null,
        P = g.d$.useSetting(),
        A = i.useMemo(() => {
            if (null != T && 0 >= b.default.compare(T.id, P)) return !1;
            for (let e of I) {
                if (0 >= b.default.compare(e.id, P)) break;
                if (!(0, p.r)(e, P)) return !0;
            }
            return !1;
        }, [T, P, I]);
    return (0, r.jsxs)('div', {
        className: a()(v.container, { [v.widerInbox]: S }),
        children: [
            (0, r.jsx)(x.Z, {
                tab: s.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: l,
                children: A
                    ? (0, r.jsx)(O, {
                          onClick: () => {
                              null != T && (g.d$.updateSetting(T.id), _.default.track(y.rMx.NOTIFICATION_CENTER_ACTION, { action_type: d.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, r.jsx)(f.Z, {
                initialized: c,
                items: I,
                loading: N,
                loadMore: j
            })
        ]
    });
}
