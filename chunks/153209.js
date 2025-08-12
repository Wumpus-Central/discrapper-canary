n.d(t, { Z: () => S }), n(388685), n(642613);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(524437),
    c = n(481060),
    u = n(140155),
    d = n(497089),
    h = n(178480),
    p = n(11799),
    f = n(616032),
    g = n(216789),
    m = n(695346),
    b = n(626135),
    O = n(709054),
    _ = n(791914),
    y = n(981631),
    C = n(388032),
    v = n(556871),
    j = n(808934);
function E(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(c.M0o, {
        tooltip: C.intl.string(C.t["8k+6QU"]),
        color: c.YX$.TERTIARY,
        icon: (0, r.jsx)(c.W6s, {
            size: "xs",
            color: "currentColor",
        }),
        className: j.controlButton,
        onClick: t,
    });
}
function S(e) {
    let { setTab: t, badgeState: n, closePopout: l } = e,
        { initialized: C, items: j, loading: S, loadMore: x } = (0, p.y6)(),
        I = (0, s.e7)([u.Z], () => u.Z.localItems),
        P = (0, g.Us)({ location: "ForYou" }),
        N = i.useMemo(() => [...[...j, ...I].sort((e, t) => -1 * O.default.compare(e.id, t.id))], [j, I]),
        w = j.length > 0 ? j[0] : null,
        Z = m.d$.useSetting(),
        T = i.useMemo(() => {
            if (null != w && 0 >= O.default.compare(w.id, Z)) return !1;
            for (let e of N) {
                if (0 >= O.default.compare(e.id, Z)) break;
                if (!(0, h.r)(e, Z)) return !0;
            }
            return !1;
        }, [w, Z, N]);
    return (0, r.jsx)("div", {
        className: o()(v.container, { [v.widerInbox]: P }),
        children: (0, r.jsx)(c.y5t, {
            component: (0, r.jsx)(_.Z, {
                tab: a.X.FOR_YOU,
                setTab: t,
                badgeState: n,
                closePopout: l,
                children: T
                    ? (0, r.jsx)(E, {
                          onClick: () => {
                              null != w &&
                                  (m.d$.updateSetting(w.id),
                                  b.default.track(y.rMx.NOTIFICATION_CENTER_ACTION, {
                                      action_type: d.ud.MARK_ALL_READ,
                                  }));
                          },
                      })
                    : null,
            }),
            children: (0, r.jsx)(f.Z, {
                initialized: C,
                items: N,
                loading: S,
                loadMore: x,
            }),
        }),
    });
}
