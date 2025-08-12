n.d(t, {
    K: () => O,
    _: () => b,
});
var r = n(73800),
    i = n(494497),
    l = n(442837),
    o = n(430824),
    s = n(819640),
    a = n(905128),
    c = n(158638),
    u = n(639777),
    d = n(973772),
    h = n(834209),
    p = n(279604),
    f = n(535396),
    g = n(93841),
    m = n(388032);
function b(e, t) {
    let n = (0, l.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        r = null == n ? void 0 : n.allPowerups[i.A$],
        o = (0, d.ZP)(e, r),
        s = (0, c.q8)(e, t),
        u = null == r ? void 0 : r.storeRemovalDate,
        p = s && null != u && o.type !== f.A3.INACTIVE,
        b = p
            ? {
                  title: m.intl.formatToPlainString(g.default.mgoPkZ, { perkName: null == r ? void 0 : r.title }),
                  description: m.intl.formatToPlainString(g.default.UT9pkJ, { dateString: (0, h.Z)(u) }),
              }
            : null;
    return {
        shouldShow: p,
        notificationConfig: b,
    };
}
function O(e, t) {
    var n, d, f, b;
    let O = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        _ = (0, l.e7)([s.Z], () => s.Z.hasLayers()),
        y = null != (b = (0, u.Z)(e)) && b,
        C = (0, c.q8)(e, t),
        v = (0, l.e7)([a.Z], () => a.Z.getStateForGuild(e)),
        j = (null == v || null == (n = v.unlockedPowerups) ? void 0 : n[i.A$]) != null,
        E = null == v || null == (d = v.allPowerups) ? void 0 : d[i.A$],
        S = null == E ? void 0 : E.storeRemovalDate,
        x = null == v || null == (f = v.allPowerups) ? void 0 : f[i.XW],
        { onActivate: I } = (0, p._C)(e, x),
        P = !_ && y && C && j && null != E && null != S && null != x && null != O,
        N = r.useCallback(
            (e) => {
                I(e);
            },
            [I],
        ),
        w = r.useMemo(() => {
            if (!P) return null;
            let e = (0, h.Z)(S);
            return {
                firstHeader: E.title,
                secondHeader: m.intl.formatToPlainString(g.default["8imxAg"], { dateString: e }),
                firstBody: m.intl.formatToPlainString(g.default["/bW9tb"], { serverName: O.name }),
                secondBody: m.intl.formatToPlainString(g.default.D09fdn, {
                    dateString: e,
                    boostCount: E.cost,
                }),
                thirdBody: m.intl.string(g.default["+zvKPj"]),
                primaryButtonText: m.intl.string(g.default["0uo/LC"]),
                onPrimaryClick: N,
            };
        }, [P, E, S, O, N]);
    return {
        shouldShow: P,
        modalConfig: w,
    };
}
