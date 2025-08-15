n.d(t, {
    K: () => _,
    _: () => b,
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
    p = n(834209),
    f = n(279604),
    h = n(535396),
    g = n(989308),
    m = n(388032);
function b(e, t) {
    let n = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        r = null == n ? void 0 : n.allPowerups[i.A$],
        o = (0, d.ZP)(e, r),
        a = (0, c.q8)(e, t),
        u = null == r ? void 0 : r.storeRemovalDate,
        f = a && null != u && o.type !== h.A3.INACTIVE,
        b = f
            ? {
                  title: m.intl.formatToPlainString(g.default.mgoPkZ, { perkName: null == r ? void 0 : r.title }),
                  description: m.intl.formatToPlainString(g.default.UT9pkJ, { dateString: (0, p.Z)(u) }),
              }
            : null;
    return {
        shouldShow: f,
        notificationConfig: b,
    };
}
function _(e, t) {
    var n, d, h, b;
    let _ = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        O = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
        y = null != (b = (0, u.Z)(e)) && b,
        v = (0, c.q8)(e, t),
        j = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        C = (null == j || null == (n = j.unlockedPowerups) ? void 0 : n[i.A$]) != null,
        E = null == j || null == (d = j.allPowerups) ? void 0 : d[i.A$],
        x = null == E ? void 0 : E.storeRemovalDate,
        S = null == j || null == (h = j.allPowerups) ? void 0 : h[i.XW],
        { onActivate: I } = (0, f._C)(e, S),
        P = !O && y && v && C && null != E && null != x && null != S && null != _,
        N = r.useCallback(
            (e) => {
                I(e);
            },
            [I],
        ),
        w = r.useMemo(() => {
            if (!P) return null;
            let e = (0, p.Z)(x);
            return {
                firstHeader: E.title,
                secondHeader: m.intl.formatToPlainString(g.default["8imxAg"], { dateString: e }),
                firstBody: m.intl.formatToPlainString(g.default["/bW9tb"], { serverName: _.name }),
                secondBody: m.intl.formatToPlainString(g.default.D09fdn, {
                    dateString: e,
                    boostCount: E.cost,
                }),
                thirdBody: m.intl.string(g.default["+zvKPj"]),
                primaryButtonText: m.intl.string(g.default["0uo/LC"]),
                onPrimaryClick: N,
            };
        }, [P, E, x, _, N]);
    return {
        shouldShow: P,
        modalConfig: w,
    };
}
