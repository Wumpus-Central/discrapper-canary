n.d(t, {
    K: () => y,
    _: () => _,
});
var r = n(473749),
    i = n(494497),
    l = n(442837),
    o = n(430824),
    a = n(819640),
    s = n(905128),
    c = n(158638),
    u = n(238343),
    d = n(639777),
    f = n(973772),
    h = n(834209),
    p = n(535396),
    g = n(981631),
    m = n(810878),
    b = n(388032);
function _(e, t) {
    var n;
    let r = (0, l.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getGuild(e)) ? void 0 : t.features;
        }),
        a = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        u = null == a ? void 0 : a.allPowerups[i.A$],
        d = (0, f.ZP)(e, u),
        _ = (0, c.q8)(e, t),
        y = null == u ? void 0 : u.storeRemovalDate,
        O = null != (n = null == r ? void 0 : r.has(g.GuildFeatures.PARTNERED)) && n,
        v = _ && null != y && !O && d.type === p.A3.POWERUP_ACTIVATED,
        j = v
            ? {
                  title: b.intl.formatToPlainString(m.default.mgoPkU, { perkName: null == u ? void 0 : u.title }),
                  description: b.intl.formatToPlainString(m.default.UT9pkI, { dateString: (0, h.Z)(y) }),
              }
            : null;
    return {
        shouldShow: v,
        notificationConfig: j,
    };
}
function y(e, t) {
    var n, _, y, O;
    let v = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        j = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
        x = null != (y = (0, d.Z)(e)) && y,
        C = (0, c.q8)(e, t),
        E = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        S = null == E || null == (n = E.allPowerups) ? void 0 : n[i.A$],
        I = (0, f.ZP)(e, S),
        P = null == S ? void 0 : S.storeRemovalDate,
        N = null == E || null == (_ = E.allPowerups) ? void 0 : _[i.XW],
        Z = (0, l.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getGuild(e)) ? void 0 : t.features;
        }),
        w = null != (O = null == Z ? void 0 : Z.has(g.GuildFeatures.PARTNERED)) && O,
        { onActivate: T } = (0, u._C)(e, N),
        A = !j && x && C && null != S && !w && I.type === p.A3.POWERUP_ACTIVATED && null != P && null != N && null != v,
        R = r.useCallback(
            (e) => {
                e.stopPropagation(), T();
            },
            [T],
        ),
        D = r.useMemo(() => {
            if (!A) return null;
            let e = (0, h.Z)(P),
                t = v.premiumTier === g.Eu4.TIER_2 ? b.intl.string(m.default["0uo/LD"]) : void 0;
            return {
                firstHeader: S.title,
                secondHeader: b.intl.formatToPlainString(m.default["8imxAq"], { dateString: e }),
                firstBody: b.intl.formatToPlainString(m.default["/bW9tW"], { serverName: v.name }),
                secondBody: b.intl.formatToPlainString(m.default.D09fdi, {
                    dateString: e,
                    boostCount: S.cost,
                }),
                thirdBody: b.intl.string(m.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? R : void 0,
            };
        }, [A, S, P, v, R]);
    return {
        shouldShow: A,
        modalConfig: D,
    };
}
