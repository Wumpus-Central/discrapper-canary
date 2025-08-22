n.d(t, {
    K: () => O,
    _: () => b,
});
var r = n(647438),
    i = n(494497),
    l = n(442837),
    o = n(430824),
    a = n(819640),
    s = n(905128),
    c = n(158638),
    u = n(639777),
    d = n(973772),
    p = n(834209),
    h = n(279604),
    f = n(535396),
    g = n(989308),
    m = n(388032);
function b(e, t) {
    let n = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        r = null == n ? void 0 : n.allPowerups[i.A$],
        o = (0, d.ZP)(e, r),
        a = (0, c.q8)(e, t),
        u = null == r ? void 0 : r.storeRemovalDate,
        h = a && null != u && o.type !== f.A3.INACTIVE,
        b = h
            ? {
                  title: m.intl.formatToPlainString(g.default.mgoPkZ, { perkName: null == r ? void 0 : r.title }),
                  description: m.intl.formatToPlainString(g.default.UT9pkJ, { dateString: (0, p.Z)(u) }),
              }
            : null;
    return {
        shouldShow: h,
        notificationConfig: b,
    };
}
function O(e, t) {
    var n, d, f, b;
    let O = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        y = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
        _ = null != (b = (0, u.Z)(e)) && b,
        j = (0, c.q8)(e, t),
        v = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        x = (null == v || null == (n = v.unlockedPowerups) ? void 0 : n[i.A$]) != null,
        C = null == v || null == (d = v.allPowerups) ? void 0 : d[i.A$],
        E = null == C ? void 0 : C.storeRemovalDate,
        S = null == v || null == (f = v.allPowerups) ? void 0 : f[i.XW],
        { onActivate: P } = (0, h._C)(e, S),
        I = !y && _ && j && x && null != C && null != E && null != S && null != O,
        N = r.useCallback(
            (e) => {
                P(e);
            },
            [P],
        ),
        w = r.useMemo(() => {
            if (!I) return null;
            let e = (0, p.Z)(E);
            return {
                firstHeader: C.title,
                secondHeader: m.intl.formatToPlainString(g.default["8imxAg"], { dateString: e }),
                firstBody: m.intl.formatToPlainString(g.default["/bW9tb"], { serverName: O.name }),
                secondBody: m.intl.formatToPlainString(g.default.D09fdn, {
                    dateString: e,
                    boostCount: C.cost,
                }),
                thirdBody: m.intl.string(g.default["+zvKPj"]),
                primaryButtonText: m.intl.string(g.default["0uo/LC"]),
                onPrimaryClick: N,
            };
        }, [I, C, E, O, N]);
    return {
        shouldShow: I,
        modalConfig: w,
    };
}
