l.d(t, {
    A: () => b,
});
var r = l(64700),
    n = l(512750),
    i = l(311907),
    s = l(71393),
    o = l(186111),
    a = l(645619),
    u = l(840120),
    d = l(363487),
    c = l(998418),
    f = l(162362),
    p = l(220628),
    m = l(867060),
    v = l(568065),
    A = l(652215),
    g = l(333354),
    x = l(985018);

function b(e, t) {
    var l, b, h, j;
    let _ = (0, i.bG)([s.A], () => s.A.getGuild(e)),
        E = (0, i.bG)([o.A], () => o.A.hasLayers()),
        y = null != (l = (0, d.A)(e)) && l,
        I = (0, u.j$)(e, t),
        S = (0, i.bG)([a.A], () => a.A.getStateForGuild(e)),
        w = null == S || null == (h = S.allPowerups) ? void 0 : h[n.FB],
        N = (0, c.Ay)(e, w),
        O = null == w ? void 0 : w.storeRemovalDate,
        L = null == S || null == (j = S.allPowerups) ? void 0 : j[n.YG],
        P = (0, i.bG)([s.A], () => {
            var t;
            return null == (t = s.A.getGuild(e)) ? void 0 : t.features;
        }),
        T = null != (b = null == P ? void 0 : P.has(A.GuildFeatures.PARTNERED)) && b,
        { onActivate: k, error: C } = (0, p.A)(e, L);
    (0, m.A)(C);
    let G = !E && y && I && null != w && !T && N.type === v.b_.POWERUP_ACTIVATED && null != O && null != L && null != _,
        R = r.useCallback(
            (e) => {
                e.stopPropagation(), k();
            },
            [k],
        ),
        D = r.useMemo(() => {
            if (!G) return null;
            let e = (0, f.A)(O),
                t = _.premiumTier === A.TVA.TIER_2 ? x.intl.string(g.default["0uo/LD"]) : void 0;
            return {
                firstHeader: w.title,
                secondHeader: x.intl.formatToPlainString(g.default["8imxAq"], {
                    dateString: e,
                }),
                firstBody: x.intl.formatToPlainString(g.default["/bW9tW"], {
                    serverName: _.name,
                }),
                secondBody: x.intl.formatToPlainString(g.default.D09fdi, {
                    dateString: e,
                    boostCount: w.cost,
                }),
                thirdBody: x.intl.string(g.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? R : void 0,
            };
        }, [G, w, O, _, R]);
    return {
        shouldShow: G,
        modalConfig: D,
    };
}
