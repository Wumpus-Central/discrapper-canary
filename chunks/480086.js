n.d(t, { u: () => m });
var r = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(835473),
    s = n(77498),
    l = n(626135),
    c = n(669764),
    u = n(80387),
    d = n(981631),
    _ = n(388032);
let f = {
        '356875762940379136': 'https://worldofwarcraft.blizzard.com',
        '615752773690064908': 'https://worldofwarcraft.blizzard.com',
        '424719708785344525': 'https://warcraft3.blizzard.com',
        '363409793119158272': 'https://starcraft.blizzard.com',
        '358425800766128128': 'https://starcraft2.blizzard.com',
        '356875221078245376': 'https://overwatch.blizzard.com',
        '496572658255790080': 'https://diablo2.blizzard.com',
        '358425751197974528': 'https://diablo3.blizzard.com',
        '1113966530531704943': 'https://diablo4.blizzard.com'
    },
    p = {
        356869127241072640: 'https://www.leagueoflegends.com',
        401518684763586560: 'https://www.leagueoflegends.com',
        '700136079562375258': 'https://playvalorant.com',
        '633832498614370323': 'https://playruneterra.com'
    };
function h(e) {
    return {
        url: e.url,
        labelKey: e.labelKey,
        icon: e.icon,
        openLink: (t) => {
            (null == t || t.stopPropagation(),
                l.default.track(d.rMx.GAME_STORE_BUTTON_CLICKED, {
                    application_id: e.applicationId,
                    application_name: e.applicationName,
                    platform: e.platform
                }),
                window.open(e.url));
        }
    };
}
function m(e) {
    var t;
    let { enabled: n } = u.m.useExperiment({ location: 'useGameStoreLink' }, { autoTrackExposure: !1 }),
        l = (0, o.q)(e),
        m = (0, i.e7)([s.Z], () => (null != l ? s.Z.getGameByName(l.name) : null)),
        g = null != (t = (0, o.q)(null == m ? void 0 : m.id)) ? t : l,
        E = (0, i.e7)([c.Z], () => (null != g ? c.Z.getGame(g.id) : null)),
        b = (0, r.useMemo)(() => {
            var e, t, n;
            if (null == g) return null;
            let r = null != (n = null != (t = null == (e = g.thirdPartySkus.find((e) => e.distributor === d.GQo.STEAM)) ? void 0 : e.id) ? t : null == E ? void 0 : E.steam_id) ? n : null;
            return {
                app: g,
                steamSku: r
            };
        }, [g, E]),
        y = (0, r.useMemo)(() => {
            if (!n || null == b) return null;
            let { app: t, steamSku: r } = b,
                i = f[t.id];
            if (null != i && '' !== i)
                return h({
                    url: i,
                    platform: 'battlenet',
                    icon: a.DvD,
                    labelKey: _.t['ZGax9/'],
                    applicationId: e,
                    applicationName: t.name
                });
            let o = p[t.id];
            return null != o && '' !== o
                ? h({
                      url: o,
                      platform: 'riot',
                      icon: a.mVV,
                      labelKey: _.t['+KXANz'],
                      applicationId: e,
                      applicationName: t.name
                  })
                : null != r && '' !== r
                  ? h({
                        url: 'https://store.steampowered.com/app/'.concat(r),
                        platform: 'steam',
                        icon: a.xCj,
                        labelKey: _.t.OlubCw,
                        applicationId: e,
                        applicationName: t.name
                    })
                  : null;
        }, [n, b, e]);
    return (
        (0, r.useEffect)(() => {
            null != y && u.m.trackExposure({ location: 'GameStoreLink' });
        }, [y]),
        y
    );
}
