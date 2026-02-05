i.d(e, { x: () => T });
var n = i(311907),
    l = i(286237),
    s = i(515183),
    r = i(592598),
    a = i(682763),
    u = i(419954),
    o = i(780964),
    d = i(985018);
let T = (0, u.zD)(o.X.OVERLAY_LIMITED_INTERACTION_OVERRIDE_SETTING, {
    usePredicate: () => {
        let { runningGameApplication: t } = (0, l.A)();
        return t?.id != null;
    },
    useDisabled: () => {
        let { runningGame: t } = (0, l.A)();
        return null != t && (0, s.qJ)(t.pid);
    },
    useValue: () => {
        let { runningGame: t, runningGameApplication: e } = (0, l.A)(),
            i = e?.id,
            a = (0, n.bG)([r.A], () => r.A.isLimitedInteractionOverrideEnabled(i)),
            u = null != t && (0, s.qJ)(t.pid);
        return a || u;
    },
    setValue: (t) => {
        let { runningGameApplication: e } = (0, l.b)();
        null != e && (0, a.x8)(e.id, t);
    },
    useTitle: () => d.intl.string(d.t.wgVQND),
    useSubtitle: () => d.intl.string(d.t["5SsyF5"]),
});
