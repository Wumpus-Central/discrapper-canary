n.d(t, {
    K: () => y,
    _: () => O,
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
    f = n(279604),
    h = n(535396),
    g = n(981631),
    m = n(258640),
    b = n(388032);
function O(e, t) {
    let n = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        r = null == n ? void 0 : n.allPowerups[i.A$],
        o = (0, d.ZP)(e, r),
        a = (0, c.q8)(e, t),
        u = null == r ? void 0 : r.storeRemovalDate,
        f = a && null != u && o.type !== h.A3.INACTIVE,
        g = f
            ? {
                  title: b.intl.formatToPlainString(m.default.mgoPkZ, { perkName: null == r ? void 0 : r.title }),
                  description: b.intl.formatToPlainString(m.default.UT9pkJ, { dateString: (0, p.Z)(u) }),
              }
            : null;
    return {
        shouldShow: f,
        notificationConfig: g,
    };
}
function y(e, t) {
    var n, d, h, O;
    let y = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        _ = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
        v = null != (O = (0, u.Z)(e)) && O,
        j = (0, c.q8)(e, t),
        x = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        C = (null == x || null == (n = x.unlockedPowerups) ? void 0 : n[i.A$]) != null,
        E = null == x || null == (d = x.allPowerups) ? void 0 : d[i.A$],
        S = null == E ? void 0 : E.storeRemovalDate,
        P = null == x || null == (h = x.allPowerups) ? void 0 : h[i.XW],
        { onActivate: I } = (0, f._C)(e, P),
        N = !_ && v && j && C && null != E && null != S && null != P && null != y,
        Z = r.useCallback(
            (e) => {
                I(e);
            },
            [I],
        ),
        w = r.useMemo(() => {
            if (!N) return null;
            let e = (0, p.Z)(S),
                t = y.premiumTier === g.Eu4.TIER_2 ? b.intl.string(m.default["0uo/LC"]) : void 0;
            return {
                firstHeader: E.title,
                secondHeader: b.intl.formatToPlainString(m.default["8imxAg"], { dateString: e }),
                firstBody: b.intl.formatToPlainString(m.default["/bW9tb"], { serverName: y.name }),
                secondBody: b.intl.formatToPlainString(m.default.D09fdn, {
                    dateString: e,
                    boostCount: E.cost,
                }),
                thirdBody: b.intl.string(m.default["+zvKPj"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? Z : void 0,
            };
        }, [N, E, S, y, Z]);
    return {
        shouldShow: N,
        modalConfig: w,
    };
}
