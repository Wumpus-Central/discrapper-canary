n.d(t, {
    Z: function () {
        return N;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(524437),
    o = n(481060),
    s = n(140155),
    c = n(497089),
    u = n(178480),
    d = n(11799),
    m = n(616032),
    h = n(695346),
    f = n(626135),
    p = n(709054),
    _ = n(791914),
    g = n(981631),
    E = n(388032),
    C = n(906322),
    I = n(76334);
function x(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.CircleIconButton, {
        tooltip: E.intl.string(E.t['8k+6QU']),
        color: o.CircleIconButtonColors.TERTIARY,
        icon: (0, i.jsx)(o.DoubleCheckmarkIcon, {
            size: 'xs',
            color: 'currentColor'
        }),
        className: I.controlButton,
        onClick: t
    });
}
function N(e) {
    let { setTab: t, badgeState: n, closePopout: o } = e,
        { initialized: E, items: I, loading: N, loadMore: v } = (0, d.y6)(),
        T = (0, l.e7)([s.Z], () => s.Z.localItems),
        S = r.useMemo(() => [...[...I, ...T].sort((e, t) => -1 * p.default.compare(e.id, t.id))], [I, T]),
        A = I.length > 0 ? I[0] : null,
        b = h.d$.useSetting(),
        j = r.useMemo(() => {
            if (null != A && 0 >= p.default.compare(A.id, b)) return !1;
            for (let e of S) {
                if (0 >= p.default.compare(e.id, b)) break;
                if (!(0, u.r)(e, b)) return !0;
            }
            return !1;
        }, [A, b, S]);
    return (0, i.jsxs)('div', {
        className: C.container,
        children: [
            (0, i.jsx)(_.Z, {
                tab: a.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: o,
                children: j
                    ? (0, i.jsx)(x, {
                          onClick: () => {
                              null != A && (h.d$.updateSetting(A.id), f.default.track(g.rMx.NOTIFICATION_CENTER_ACTION, { action_type: c.ud.MARK_ALL_READ }));
                          }
                      })
                    : null
            }),
            (0, i.jsx)(m.Z, {
                initialized: E,
                items: S,
                loading: N,
                loadMore: v
            })
        ]
    });
}
