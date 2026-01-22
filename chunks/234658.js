i.d(e, { x: () => A });
var n = i(311907),
    l = i(286237),
    s = i(515183),
    r = i(592598),
    u = i(682763),
    a = i(419954),
    o = i(780964),
    T = i(985018);
let A = (0, a.zD)(o.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
    usePredicate: () => {
        let { runningGameApplication: t } = (0, l.A)();
        return (null == t ? void 0 : t.id) != null;
    },
    useDisabled: () => {
        let { runningGame: t } = (0, l.A)();
        return null != t && (0, s.qJ)(t.pid);
    },
    useValue: () => {
        let { runningGame: t, runningGameApplication: e } = (0, l.A)(),
            i = null == e ? void 0 : e.id,
            u = (0, n.bG)([r.A], () => r.A.isLimitedInteractionOverrideEnabled(i)),
            a = null != t && (0, s.qJ)(t.pid);
        return u || a;
    },
    setValue: (t) => {
        let { runningGameApplication: e } = (0, l.b)();
        null != e && (0, u.x8)(e.id, t);
    },
    useTitle: () => T.intl.string(T.t.wgVQND),
    useSubtitle: () => T.intl.string(T.t["5SsyF5"]),
});
