n.d(t, {
    K: () => _,
    _: () => b
});
var r = n(73800),
    i = n(494497),
    l = n(442837),
    o = n(430824),
    a = n(819640),
    s = n(905128),
    c = n(158638),
    u = n(639777),
    d = n(973772),
    h = n(834209),
    p = n(279604),
    f = n(535396),
    g = n(93841),
    m = n(388032);
function b(e, t) {
    let n = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        r = null == n ? void 0 : n.allPowerups[i.A$],
        o = (0, d.Z)(e, r),
        a = (0, c.q8)(e, t),
        u = null == r ? void 0 : r.storeRemovalDate,
        p = a && null != u && o.type !== f.A3.INACTIVE,
        b = p
            ? {
                  title: m.intl.formatToPlainString(g.default.mgoPkZ, { perkName: null == r ? void 0 : r.title }),
                  description: m.intl.formatToPlainString(g.default.UT9pkJ, { dateString: (0, h.Z)(u) })
              }
            : null;
    return {
        shouldShow: p,
        notificationConfig: b
    };
}
function _(e, t) {
    var n, d, b, _;
    let O = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        y = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
        C = null != (_ = (0, u.Z)(e)) && _,
        v = (0, c.q8)(e, t),
        j = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        E = (null == j || null == (n = j.unlockedPowerups) ? void 0 : n[i.A$]) != null,
        S = null == j || null == (d = j.allPowerups) ? void 0 : d[i.A$],
        x = null == S ? void 0 : S.storeRemovalDate,
        I = null == j || null == (b = j.allPowerups) ? void 0 : b[f.XW],
        { onActivate: P } = (0, p._C)(e, I),
        N = !y && C && v && E && null != S && null != x && null != I && null != O,
        w = r.useCallback(
            (e) => {
                P(e);
            },
            [P]
        ),
        T = r.useMemo(() => {
            if (!N) return null;
            let e = (0, h.Z)(x);
            return {
                firstHeader: S.title,
                secondHeader: m.intl.formatToPlainString(g.default['8imxAg'], { dateString: e }),
                firstBody: m.intl.formatToPlainString(g.default['/bW9tb'], { serverName: O.name }),
                secondBody: m.intl.formatToPlainString(g.default.D09fdn, {
                    dateString: e,
                    boostCount: S.cost
                }),
                thirdBody: m.intl.string(g.default['+zvKPj']),
                primaryButtonText: m.intl.string(g.default['0uo/LC']),
                onPrimaryClick: w
            };
        }, [N, S, x, O, w]);
    return {
        shouldShow: N,
        modalConfig: T
    };
}
