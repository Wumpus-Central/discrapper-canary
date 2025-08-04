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
    _ = n(981631),
    f = n(388032);
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
                l.default.track(_.rMx.GAME_STORE_BUTTON_CLICKED, {
                    application_id: e.applicationId,
                    application_name: e.applicationName,
                    platform: e.platform,
                    location: e.location
                }),
                window.open(e.url));
        }
    };
}
function g(e, t) {
    var n;
    let { enabled: l } = d.m.useExperiment({ location: 'useGameStoreLink' }, { autoTrackExposure: !1 }),
        [g, E] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
        c.Z.isProtocolRegistered('steam').then(E);
    }, []);
    let b = (0, o.q)(e),
        y = (0, i.e7)([s.Z], () => (null != b ? s.Z.getGameByName(b.name) : null)),
        O = null != (n = (0, o.q)(null == y ? void 0 : y.id)) ? n : b,
        v = (0, i.e7)([u.Z], () => (null != O ? u.Z.getGame(O.id) : null)),
        I = (0, r.useMemo)(() => {
            var e, t, n;
            if (null == O) return null;
            let r = null != (n = null != (t = null == (e = O.thirdPartySkus.find((e) => e.distributor === _.GQo.STEAM)) ? void 0 : e.id) ? t : null == v ? void 0 : v.steam_id) ? n : null;
            return {
                app: O,
                steamSku: r
            };
        }, [O, v]),
        T = (0, r.useMemo)(() => {
            if (null == I) return null;
            let { app: n, steamSku: r } = I,
                i = p[n.id];
            if (null != i && '' !== i)
                return m({
                    url: i,
                    platform: 'battlenet',
                    icon: a.DvD,
                    labelKey: f.t['ZGax9/'],
                    applicationId: e,
                    applicationName: n.name,
                    location: t
                });
            let o = h[n.id];
            return null != o && '' !== o
                ? m({
                      url: o,
                      platform: 'riot',
                      icon: a.mVV,
                      labelKey: f.t['+KXANz'],
                      applicationId: e,
                      applicationName: n.name,
                      location: t
                  })
                : null != r && '' !== r
                  ? m({
                        url: g ? 'steam://advertise/'.concat(r) : 'https://store.steampowered.com/app/'.concat(r),
                        platform: 'steam',
                        icon: a.xCj,
                        labelKey: f.t.OlubCw,
                        applicationId: e,
                        applicationName: n.name,
                        location: t
                    })
                  : null;
        }, [I, e, g, t]);
    return (
        (0, r.useEffect)(() => {
            null != T && d.m.trackExposure({ location: 'GameStoreLink' });
        }, [T]),
        l ? T : null
    );
}
