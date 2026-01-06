n.d(t, { Z: () => h });
var r = n(473749),
    i = n(494497),
    l = n(442837),
    o = n(430824),
    a = n(819640),
    s = n(905128),
    u = n(158638),
    c = n(639777),
    d = n(973772),
    f = n(834209),
    p = n(994234),
    m = n(192958),
    g = n(535396),
    v = n(981631),
    x = n(556970),
    b = n(388032);
function h(e, t) {
    var n, h, j, Z;
    let _ = (0, l.e7)([o.Z], () => o.Z.getGuild(e)),
        C = (0, l.e7)([a.Z], () => a.Z.hasLayers()),
        w = null != (j = (0, c.Z)(e)) && j,
        E = (0, u.q8)(e, t),
        I = (0, l.e7)([s.Z], () => s.Z.getStateForGuild(e)),
        P = null == I || null == (n = I.allPowerups) ? void 0 : n[i.A$],
        T = (0, d.ZP)(e, P),
        y = null == P ? void 0 : P.storeRemovalDate,
        N = null == I || null == (h = I.allPowerups) ? void 0 : h[i.XW],
        O = (0, l.e7)([o.Z], () => {
            var t;
            return null == (t = o.Z.getGuild(e)) ? void 0 : t.features;
        }),
        A = null != (Z = null == O ? void 0 : O.has(v.GuildFeatures.PARTNERED)) && Z,
        { onActivate: S, error: R } = (0, p.Z)(e, N);
    (0, m.Z)(R);
    let L = !C && w && E && null != P && !A && T.type === g.A3.POWERUP_ACTIVATED && null != y && null != N && null != _,
        k = r.useCallback(
            (e) => {
                e.stopPropagation(), S();
            },
            [S],
        ),
        U = r.useMemo(() => {
            if (!L) return null;
            let e = (0, f.Z)(y),
                t = _.premiumTier === v.Eu4.TIER_2 ? b.intl.string(x.default["0uo/LD"]) : void 0;
            return {
                firstHeader: P.title,
                secondHeader: b.intl.formatToPlainString(x.default["8imxAq"], { dateString: e }),
                firstBody: b.intl.formatToPlainString(x.default["/bW9tW"], { serverName: _.name }),
                secondBody: b.intl.formatToPlainString(x.default.D09fdi, {
                    dateString: e,
                    boostCount: P.cost,
                }),
                thirdBody: b.intl.string(x.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? k : void 0,
            };
        }, [L, P, y, _, k]);
    return {
        shouldShow: L,
        modalConfig: U,
    };
}
