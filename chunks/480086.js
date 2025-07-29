(n.d(t, { u: () => g }), n(388685));
var r = n(73800),
    i = n(442837),
    a = n(481060),
    o = n(835473),
    s = n(77498),
    l = n(626135),
    c = n(877481),
    u = n(669764),
    d = n(80387),
    f = n(981631),
    _ = n(388032);
let p = {
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
    h = {
        356869127241072640: 'https://www.leagueoflegends.com',
        401518684763586560: 'https://www.leagueoflegends.com',
        '700136079562375258': 'https://playvalorant.com',
        '633832498614370323': 'https://playruneterra.com'
    };
function m(e) {
    return {
        url: e.url,
        labelKey: e.labelKey,
        icon: e.icon,
        openLink: (t) => {
            (null == t || t.stopPropagation(),
                l.default.track(f.rMx.GAME_STORE_BUTTON_CLICKED, {
                    application_id: e.applicationId,
                    application_name: e.applicationName,
                    platform: e.platform
                }),
                window.open(e.url));
        }
    };
}
function g(e) {
    var t;
    let { enabled: n } = d.m.useExperiment({ location: 'useGameStoreLink' }, { autoTrackExposure: !1 }),
        [l, g] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
        c.Z.isProtocolRegistered('steam').then(g);
    }, []);
    let E = (0, o.q)(e),
        b = (0, i.e7)([s.Z], () => (null != E ? s.Z.getGameByName(E.name) : null)),
        y = null != (t = (0, o.q)(null == b ? void 0 : b.id)) ? t : E,
        O = (0, i.e7)([u.Z], () => (null != y ? u.Z.getGame(y.id) : null)),
        v = (0, r.useMemo)(() => {
            var e, t, n;
            if (null == y) return null;
            let r = null != (n = null != (t = null == (e = y.thirdPartySkus.find((e) => e.distributor === f.GQo.STEAM)) ? void 0 : e.id) ? t : null == O ? void 0 : O.steam_id) ? n : null;
            return {
                app: y,
                steamSku: r
            };
        }, [y, O]),
        I = (0, r.useMemo)(() => {
            if (!n || null == v) return null;
            let { app: t, steamSku: r } = v,
                i = p[t.id];
            if (null != i && '' !== i)
                return m({
                    url: i,
                    platform: 'battlenet',
                    icon: a.DvD,
                    labelKey: _.t['ZGax9/'],
                    applicationId: e,
                    applicationName: t.name
                });
            let o = h[t.id];
            return null != o && '' !== o
                ? m({
                      url: o,
                      platform: 'riot',
                      icon: a.mVV,
                      labelKey: _.t['+KXANz'],
                      applicationId: e,
                      applicationName: t.name
                  })
                : null != r && '' !== r
                  ? m({
                        url: l ? 'steam://advertise/'.concat(r) : 'https://store.steampowered.com/app/'.concat(r),
                        platform: 'steam',
                        icon: a.xCj,
                        labelKey: _.t.OlubCw,
                        applicationId: e,
                        applicationName: t.name
                    })
                  : null;
        }, [n, v, e, l]);
    return (
        (0, r.useEffect)(() => {
            null != I && d.m.trackExposure({ location: 'GameStoreLink' });
        }, [I]),
        I
    );
}
