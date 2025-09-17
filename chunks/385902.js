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
    var n;
    let r = (0, l.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getGuild(e)) ? void 0 : t.features;
        }),
        a = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        u = null == a ? void 0 : a.allPowerups[i.A$],
        f = (0, d.ZP)(e, u),
        O = (0, c.q8)(e, t),
        y = null == u ? void 0 : u.storeRemovalDate,
        _ = null != (n = null == r ? void 0 : r.has(g.oNc.PARTNERED)) && n,
        v = O && null != y && !_ && f.type === h.A3.POWERUP_ACTIVATED,
        j = v
            ? {
                  title: b.intl.formatToPlainString(m.default.mgoPkZ, { perkName: null == u ? void 0 : u.title }),
                  description: b.intl.formatToPlainString(m.default.UT9pkJ, { dateString: (0, p.Z)(y) }),
              }
            : null;
    return {
        shouldShow: v,
        notificationConfig: j,
    };
}
function y(e, t) {
    var n, O, y, _;
    let v = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        j = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
        x = null != (y = (0, u.Z)(e)) && y,
        C = (0, c.q8)(e, t),
        E = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        S = null == E || null == (n = E.allPowerups) ? void 0 : n[i.A$],
        P = (0, d.ZP)(e, S),
        I = null == S ? void 0 : S.storeRemovalDate,
        N = null == E || null == (O = E.allPowerups) ? void 0 : O[i.XW],
        Z = (0, l.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getGuild(e)) ? void 0 : t.features;
        }),
        w = null != (_ = null == Z ? void 0 : Z.has(g.oNc.PARTNERED)) && _,
        { onActivate: T } = (0, f._C)(e, N),
        A = !j && x && C && null != S && !w && P.type === h.A3.POWERUP_ACTIVATED && null != I && null != N && null != v,
        R = r.useCallback(
            (e) => {
                T(e);
            },
            [T],
        ),
        D = r.useMemo(() => {
            if (!A) return null;
            let e = (0, p.Z)(I),
                t = v.premiumTier === g.Eu4.TIER_2 ? b.intl.string(m.default["0uo/LC"]) : void 0;
            return {
                firstHeader: S.title,
                secondHeader: b.intl.formatToPlainString(m.default["8imxAg"], { dateString: e }),
                firstBody: b.intl.formatToPlainString(m.default["/bW9tb"], { serverName: v.name }),
                secondBody: b.intl.formatToPlainString(m.default.D09fdn, {
                    dateString: e,
                    boostCount: S.cost,
                }),
                thirdBody: b.intl.string(m.default["+zvKPj"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? R : void 0,
            };
        }, [A, S, I, v, R]);
    return {
        shouldShow: A,
        modalConfig: D,
    };
}
