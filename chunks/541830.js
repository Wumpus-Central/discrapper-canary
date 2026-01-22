n.d(t, {
    du: () => p,
    qt: () => f,
    zJ: () => h,
}),
    n(747238),
    n(812715),
    n(896048);
var r = n(989349),
    i = n.n(r),
    a = n(960488);
n(723702), n(371794);
var s = n(652215),
    o = n(985018);

function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = {},
    u = {},
    d = Object.freeze(
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        l(e, t, n[t]);
                    });
            }
            return e;
        })(
            {
                ALL: -1,
            },
            s.Kf,
        ),
    );

function f(e) {
    let t = (0, a.B6)(e, {
        path: s.BVt.APPLICATION_STORE_LISTING_SKU(":skuId", ":slug"),
    });
    return null != t ? t.params.skuId : null;
}

function p(e) {
    switch (e) {
        case s.Kf.ACTION:
            return o.intl.string(o.t["1o2/IM"]);
        case s.Kf.ACTION_RPG:
            return o.intl.string(o.t.e9Yo4H);
        case s.Kf.BRAWLER:
            return o.intl.string(o.t.WCkEjT);
        case s.Kf.HACK_AND_SLASH:
            return o.intl.string(o.t.xQ4VmK);
        case s.Kf.PLATFORMER:
            return o.intl.string(o.t.WA3189);
        case s.Kf.STEALTH:
            return o.intl.string(o.t["6UPFdw"]);
        case s.Kf.SURVIVAL:
            return o.intl.string(o.t.SVPCt9);
        case s.Kf.ADVENTURE:
            return o.intl.string(o.t["15p8on"]);
        case s.Kf.ACTION_ADVENTURE:
            return o.intl.string(o.t.AxkUBp);
        case s.Kf.METROIDVANIA:
            return o.intl.string(o.t.Iwr38m);
        case s.Kf.OPEN_WORLD:
            return o.intl.string(o.t["2HRHJO"]);
        case s.Kf.PSYCHOLOGICAL_HORROR:
            return o.intl.string(o.t["/IwK3s"]);
        case s.Kf.SANDBOX:
            return o.intl.string(o.t["2+Vu4Q"]);
        case s.Kf.SURVIVAL_HORROR:
            return o.intl.string(o.t.CCzRiK);
        case s.Kf.VISUAL_NOVEL:
            return o.intl.string(o.t.FE7rnk);
        case s.Kf.DRIVING_RACING:
            return o.intl.string(o.t.Erzgca);
        case s.Kf.VEHICULAR_COMBAT:
            return o.intl.string(o.t.YQHhog);
        case s.Kf.MASSIVELY_MULTIPLAYER:
            return o.intl.string(o.t["5CNg1o"]);
        case s.Kf.MMORPG:
            return o.intl.string(o.t["c4NuO/"]);
        case s.Kf.ROLE_PLAYING:
            return o.intl.string(o.t.yayVgs);
        case s.Kf.DUNGEON_CRAWLER:
            return o.intl.string(o.t.qicemc);
        case s.Kf.ROGUELIKE:
            return o.intl.string(o.t.zWzaCv);
        case s.Kf.SHOOTER:
            return o.intl.string(o.t["+pk6sd"]);
        case s.Kf.LIGHT_GUN:
            return o.intl.string(o.t.TDS96y);
        case s.Kf.SHOOT_EM_UP:
            return o.intl.string(o.t.wltDUE);
        case s.Kf.FPS:
            return o.intl.string(o.t.olTaq4);
        case s.Kf.DUAL_JOYSTICK_SHOOTER:
            return o.intl.string(o.t["SN+NS3"]);
        case s.Kf.SIMULATION:
            return o.intl.string(o.t.sxMPdm);
        case s.Kf.FLIGHT_SIMULATOR:
            return o.intl.string(o.t["Q7msr+"]);
        case s.Kf.TRAIN_SIMULATOR:
            return o.intl.string(o.t.ZtECf3);
        case s.Kf.LIFE_SIMULATOR:
            return o.intl.string(o.t.byt5Fo);
        case s.Kf.FISHING:
            return o.intl.string(o.t.BKwiwY);
        case s.Kf.SPORTS:
            return o.intl.string(o.t.O0B7XM);
        case s.Kf.BASEBALL:
            return o.intl.string(o.t["jPYb/z"]);
        case s.Kf.BASKETBALL:
            return o.intl.string(o.t["o+D1Bm"]);
        case s.Kf.BILLIARDS:
            return o.intl.string(o.t.PJ5o4E);
        case s.Kf.BOWLING:
            return o.intl.string(o.t["82afJw"]);
        case s.Kf.BOXING:
            return o.intl.string(o.t.DQvfei);
        case s.Kf.FOOTBALL:
            return o.intl.string(o.t.slOYkj);
        case s.Kf.GOLF:
            return o.intl.string(o.t.aeQPlG);
        case s.Kf.HOCKEY:
            return o.intl.string(o.t.g7oe5X);
        case s.Kf.SKATEBOARDING_SKATING:
            return o.intl.string(o.t.yBDEP0);
        case s.Kf.SNOWBOARDING_SKIING:
            return o.intl.string(o.t.GVaAci);
        case s.Kf.SOCCER:
            return o.intl.string(o.t.KPznxl);
        case s.Kf.TRACK_FIELD:
            return o.intl.string(o.t["hJ62Q/"]);
        case s.Kf.SURFING_WAKEBOARDING:
            return o.intl.string(o.t.PSh0CV);
        case s.Kf.WRESTLING:
            return o.intl.string(o.t["3y9hAT"]);
        case s.Kf.STRATEGY:
            return o.intl.string(o.t.KovTD8);
        case s.Kf.FOUR_X:
            return o.intl.string(o.t["19h4dX"]);
        case s.Kf.ARTILLERY:
            return o.intl.string(o.t.sBqLsP);
        case s.Kf.RTS:
            return o.intl.string(o.t.yS4ddj);
        case s.Kf.TOWER_DEFENSE:
            return o.intl.string(o.t.SULyIO);
        case s.Kf.TURN_BASED_STRATEGY:
            return o.intl.string(o.t.VDsbru);
        case s.Kf.WARGAME:
            return o.intl.string(o.t.YDCIrO);
        case s.Kf.MOBA:
            return o.intl.string(o.t.i1m1t8);
        case s.Kf.FIGHTING:
            return o.intl.string(o.t.KepcSI);
        case s.Kf.PUZZLE:
            return o.intl.string(o.t.rm7Ggs);
        case s.Kf.CARD_GAME:
            return o.intl.string(o.t.kX85vy);
        case s.Kf.EDUCATION:
            return o.intl.string(o.t.klIi67);
        case s.Kf.FITNESS:
            return o.intl.string(o.t.GOaaFb);
        case s.Kf.GAMBLING:
            return o.intl.string(o.t["X8/Ee9"]);
        case s.Kf.MUSIC_RHYTHM:
            return o.intl.string(o.t.qPgrgw);
        case s.Kf.PARTY_MINI_GAME:
            return o.intl.string(o.t.diBclF);
        case s.Kf.PINBALL:
            return o.intl.string(o.t["1+ottx"]);
        case s.Kf.TRIVIA_BOARD_GAME:
            return o.intl.string(o.t.aLlxjC);
        case s.Kf.TACTICAL:
            return o.intl.string(o.t.LRPgbt);
        case s.Kf.INDIE:
            return o.intl.string(o.t.hz9Xvj);
        case s.Kf.ARCADE:
            return o.intl.string(o.t.Sbxowr);
        case s.Kf.POINT_AND_CLICK:
            return o.intl.string(o.t.vcerEn);
        default:
            return o.intl.string(o.t["9b4eUr"]);
    }
}
Object.keys(d).forEach((e) => {
    let t = e.toLowerCase().replace(/_/g, "-"),
        n = d[e];
    (c[t] = n), (u[n] = t);
});
let _ = [
    ["YYYY-MM-DD", "MMMM DD, Y"],
    ["YYYY-MM", "MMMM Y"],
    ["MM-DD", "MMMM DD"],
    ["MM", "MMMM"],
    ["YYYY", "Y"],
];

function h(e) {
    let { preorderReleaseAt: t, preorderApproximateReleaseDate: n } = e;
    if (null != t) return t.format("MMMM DD");
    if (null == n) return null;
    for (let e = 0; e < _.length; e++) {
        let [t, r] = _[e],
            a = i()(n, t, !0);
        if (a.isValid()) return a.format(r);
    }
    return n;
}
