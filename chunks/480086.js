n.d(t, { u: () => g }), n(388685);
var r = n(647438),
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
        "356875762940379136": "https://worldofwarcraft.blizzard.com",
        "615752773690064908": "https://worldofwarcraft.blizzard.com",
        "424719708785344525": "https://warcraft3.blizzard.com",
        "363409793119158272": "https://starcraft.blizzard.com",
        "358425800766128128": "https://starcraft2.blizzard.com",
        "356875221078245376": "https://overwatch.blizzard.com",
        "496572658255790080": "https://diablo2.blizzard.com",
        "358425751197974528": "https://diablo3.blizzard.com",
        "1113966530531704943": "https://diablo4.blizzard.com",
    },
    h = {
        "1402418696126992445": "https://www.leagueoflegends.com",
        401518684763586560: "https://www.leagueoflegends.com",
        "700136079562375258": "https://playvalorant.com",
        "1402418693958275202": "https://playruneterra.com",
    };
function m(e) {
    return {
        url: e.url,
        labelKey: e.labelKey,
        icon: e.icon,
        openLink: (t) => {
            null == t || t.stopPropagation(),
                l.default.track(f.rMx.GAME_STORE_BUTTON_CLICKED, {
                    application_id: e.applicationId,
                    application_name: e.applicationName,
                    platform: e.platform,
                    location: e.location,
                    source: e.source,
                }),
                window.open(e.url);
        },
    };
}
function g(e, t, n) {
    var l;
    let { enabled: g } = d.m.useExperiment({ location: "useGameStoreLink" }, { autoTrackExposure: !1 }),
        [E, b] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
        c.Z.isProtocolRegistered("steam").then(b);
    }, []);
    let y = (0, o.q)(e),
        O = (0, i.e7)([s.Z], () => (null != y ? s.Z.getGameByApplication(y) : null)),
        v = null != (l = (0, o.q)(null == O ? void 0 : O.id)) ? l : y,
        I = (0, i.e7)([u.Z], () => (null != v ? u.Z.getGame(v.id) : null)),
        T = (0, r.useMemo)(() => {
            var e, t, n;
            if (null == v) return null;
            let r =
                null !=
                (n =
                    null !=
                    (t = null == (e = v.thirdPartySkus.find((e) => e.distributor === f.GQo.STEAM)) ? void 0 : e.id)
                        ? t
                        : null == I
                          ? void 0
                          : I.steam_id)
                    ? n
                    : null;
            return {
                app: v,
                steamSku: r,
            };
        }, [v, I]),
        S = (0, r.useMemo)(() => {
            if (null == T) return null;
            let { app: r, steamSku: i } = T,
                o = p[r.id];
            if (null != o && "" !== o)
                return m({
                    url: o,
                    platform: "battlenet",
                    icon: a.DvD,
                    labelKey: _.t["ZGax9/"],
                    applicationId: e,
                    applicationName: r.name,
                    location: t,
                    source: n,
                });
            let s = h[r.id];
            return null != s && "" !== s
                ? m({
                      url: s,
                      platform: "riot",
                      icon: a.mVV,
                      labelKey: _.t["+KXANz"],
                      applicationId: e,
                      applicationName: r.name,
                      location: t,
                      source: n,
                  })
                : null != i && "" !== i
                  ? m({
                        url: E ? "steam://advertise/".concat(i) : "https://store.steampowered.com/app/".concat(i),
                        platform: "steam",
                        icon: a.xCj,
                        labelKey: _.t.OlubCw,
                        applicationId: e,
                        applicationName: r.name,
                        location: t,
                        source: n,
                    })
                  : null;
        }, [T, e, E, t, n]);
    return (
        (0, r.useEffect)(() => {
            null != S && d.m.trackExposure({ location: "GameStoreLink" });
        }, [S]),
        g ? S : null
    );
}
