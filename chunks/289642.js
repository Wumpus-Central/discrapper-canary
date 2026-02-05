n.d(t, { A: () => h });
var r = n(64700),
    l = n(512750),
    i = n(311907),
    s = n(71393),
    o = n(186111),
    a = n(645619),
    u = n(840120),
    d = n(363487),
    c = n(998418),
    p = n(162362),
    m = n(220628),
    A = n(867060),
    _ = n(568065),
    g = n(652215),
    f = n(333354),
    x = n(985018);
function h(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getGuild(e)),
        h = (0, i.bG)([o.A], () => o.A.hasLayers()),
        v = (0, d.A)(e) ?? !1,
        j = (0, u.j$)(e, t),
        b = (0, i.bG)([a.A], () => a.A.getStateForGuild(e)),
        E = b?.allPowerups?.[l.FB],
        I = (0, c.Ay)(e, E),
        S = E?.storeRemovalDate,
        w = b?.allPowerups?.[l.YG],
        C = (0, i.bG)([s.A], () => s.A.getGuild(e)?.features),
        N = C?.has(g.GuildFeatures.PARTNERED) ?? !1,
        { onActivate: L, error: y } = (0, m.A)(e, w);
    (0, A.A)(y);
    let T = !h && v && j && null != E && !N && I.type === _.b_.POWERUP_ACTIVATED && null != S && null != w && null != n,
        k = r.useCallback(
            (e) => {
                e.stopPropagation(), L();
            },
            [L],
        ),
        G = r.useMemo(() => {
            if (!T) return null;
            let e = (0, p.A)(S),
                t = n.premiumTier === g.TVA.TIER_2 ? x.intl.string(f.default["0uo/LD"]) : void 0;
            return {
                firstHeader: E.title,
                secondHeader: x.intl.formatToPlainString(f.default["8imxAq"], { dateString: e }),
                firstBody: x.intl.formatToPlainString(f.default["/bW9tW"], { serverName: n.name }),
                secondBody: x.intl.formatToPlainString(f.default.D09fdi, { dateString: e, boostCount: E.cost }),
                thirdBody: x.intl.string(f.default["+zvKPr"]),
                primaryButtonText: t,
                onPrimaryClick: null != t ? k : void 0,
            };
        }, [T, E, S, n, k]);
    return { shouldShow: T, modalConfig: G };
}
