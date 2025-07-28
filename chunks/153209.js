(n.d(t, { Z: () => S }), n(388685), n(642613));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(524437),
    c = n(481060),
    u = n(140155),
    d = n(497089),
    h = n(178480),
    p = n(11799),
    f = n(616032),
    g = n(216789),
    m = n(695346),
    b = n(626135),
    _ = n(709054),
    O = n(791914),
    y = n(981631),
    C = n(388032),
    v = n(929968),
    j = n(413813);
function E(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(c.M0o, {
        tooltip: C.intl.string(C.t['8k+6QU']),
        color: c.YX$.TERTIARY,
        icon: (0, r.jsx)(c.W6s, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: j.controlButton,
        onClick: t
    });
}
function S(e) {
    let { setTab: t, badgeState: n, closePopout: l } = e,
        { initialized: c, items: C, loading: j, loadMore: S } = (0, p.y6)(),
        x = (0, a.e7)([u.Z], () => u.Z.localItems),
        I = (0, g.Us)({ location: 'ForYou' }),
        P = i.useMemo(() => [...[...C, ...x].sort((e, t) => -1 * _.default.compare(e.id, t.id))], [C, x]),
        N = C.length > 0 ? C[0] : null,
        w = m.d$.useSetting(),
        Z = i.useMemo(() => {
            if (null != N && 0 >= _.default.compare(N.id, w)) return !1;
            for (let e of P) {
                if (0 >= _.default.compare(e.id, w)) break;
                if (!(0, h.r)(e, w)) return !0;
            }
            return !1;
        }, [N, w, P]);
    return (0, r.jsxs)('div', {
        className: o()(v.container, { [v.widerInbox]: I }),
        children: [
            (0, r.jsx)(O.Z, {
                tab: s.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: l,
                children: Z
                    ? (0, r.jsx)(E, {
                          onClick: () => {
                              null != N && (m.d$.updateSetting(N.id), b.default.track(y.rMx.NOTIFICATION_CENTER_ACTION, { action_type: d.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, r.jsx)(f.Z, {
                initialized: c,
                items: P,
                loading: j,
                loadMore: S
            })
        ]
    });
}
