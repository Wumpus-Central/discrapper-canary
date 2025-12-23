n.d(e, { L: () => S });
var i = n(442837),
    l = n(137920),
    s = n(829907),
    u = n(624864),
    r = n(932404),
    a = n(509613),
    o = n(313789),
    T = n(388032);
let S = (0, a.qs)(o.n.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
    usePredicate: () => {
        let { runningGameApplication: t } = (0, l.Z)();
        return (null == t ? void 0 : t.id) != null;
    },
    useDisabled: () => {
        let { runningGame: t } = (0, l.Z)();
        return null != t && (0, s.H8)(t.pid);
    },
    useValue: () => {
        let { runningGame: t, runningGameApplication: e } = (0, l.Z)(),
            n = null == e ? void 0 : e.id,
            r = (0, i.e7)([u.Z], () => u.Z.isLimitedInteractionOverrideEnabled(n)),
            a = null != t && (0, s.H8)(t.pid);
        return r || a;
    },
    setValue: (t) => {
        let { runningGameApplication: e } = (0, l.S)();
        null != e && (0, r.rI)(e.id, t);
    },
    useTitle: () => T.intl.string(T.t.wgVQND),
    useSubtitle: () => T.intl.string(T.t["5SsyF5"]),
});
