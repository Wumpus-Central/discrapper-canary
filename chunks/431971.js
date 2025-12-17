n.d(t, {
    K: () => O,
    _: () => y,
});
var r = n(473749),
    i = n(494497),
    l = n(442837),
    a = n(430824),
    o = n(819640),
    s = n(905128),
    c = n(158638),
    u = n(834209),
    d = n(238343),
    f = n(639777),
    h = n(973772),
    p = n(535396),
    g = n(981631),
    b = n(556970),
    m = n(388032);
function y(e, t) {
    var n;
    let r = (0, l.e7)([a.Z], () => {
            var t;
            return null == (t = a.Z.getGuild(e)) ? void 0 : t.features;
        }),
        o = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        d = null == o ? void 0 : o.allPowerups[i.A$],
        f = (0, h.ZP)(e, d),
        y = (0, c.q8)(e, t),
        O = null == d ? void 0 : d.storeRemovalDate,
        v = null != (n = null == r ? void 0 : r.has(g.GuildFeatures.PARTNERED)) && n,
        j = y && null != O && !v && f.type === p.A3.POWERUP_ACTIVATED,
        C = j
            ? {
                  title: m.intl.formatToPlainString(b.default.mgoPkU, { perkName: null == d ? void 0 : d.title }),
                  description: m.intl.formatToPlainString(b.default.UT9pkI, { dateString: (0, u.Z)(O) }),
              }
            : null;
    return {
        shouldShow: j,
        notificationConfig: C,
    };
}
function O(e, t) {
    var n, y, O, v;
    let j = (0, l.e7)([a.Z], () => a.Z.getGuild(e)),
        C = (0, l.e7)([o.Z], () => o.Z.hasLayers()),
        x = null != (O = (0, f.Z)(e)) && O,
        E = (0, c.q8)(e, t),
        S = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        I = null == S || null == (n = S.allPowerups) ? void 0 : n[i.A$],
        _ = (0, h.ZP)(e, I),
        P = null == I ? void 0 : I.storeRemovalDate,
        N = null == S || null == (y = S.allPowerups) ? void 0 : y[i.XW],
        Z = (0, l.e7)([a.Z], () => {
            var t;
            return null == (t = a.Z.getGuild(e)) ? void 0 : t.features;
        }),
        w = null != (v = null == Z ? void 0 : Z.has(g.GuildFeatures.PARTNERED)) && v,
        { onActivate: T } = (0, d._C)(e, N),
        A = !C && x && E && null != I && !w && _.type === p.A3.POWERUP_ACTIVATED && null != P && null != N && null != j,
        R = r.useCallback(
            (e) => {
                e.stopPropagation(), T();
            },
            [T],
        ),
        D = r.useMemo(() => {
            if (!A) return null;
            let e = (0, u.Z)(P),
                t = j.premiumTier === g.Eu4.TIER_2 ? m.intl.string(b.default["0uo/LD"]) : void 0;
            return {
                firstHeader: I.title,
                secondHeader: m.intl.formatToPlainString(b.default["8imxAq"], { dateString: e }),
                firstBody: m.intl.formatToPlainString(b.default["/bW9tW"], { serverName: j.name }),
                secondBody: m.intl.formatToPlainString(b.default.D09fdi, {
                    dateString: e,
                    boostCount: I.cost,
                }),
                thirdBody: m.intl.string(b.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? R : void 0,
            };
        }, [A, I, P, j, R]);
    return {
        shouldShow: A,
        modalConfig: D,
    };
}
