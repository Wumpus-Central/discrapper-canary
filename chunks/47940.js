n.d(t, { r: () => m });
var i = n(311907),
    s = n(684013),
    l = n(93465),
    a = n(589051),
    r = n(592598),
    o = n(419954),
    d = n(780964),
    u = n(985018);
let c = [
    {
        title: u.t.eVE4LX,
        description: u.t["72WNqk"],
        disabledSetting: l.M.TEXT_CHAT,
        key: d.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: u.t.oifnSh,
        description: u.t.bgU5r0,
        disabledSetting: l.M.WELCOME_GENERAL,
        key: d.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: u.t.hqsZJW,
        description: u.t.kHjdqc,
        disabledSetting: l.M.GO_LIVE_NUDGE,
        key: d.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: u.t.sop3rn,
        description: u.t.pjgffc,
        disabledSetting: l.M.GAME_ACTIVITY,
        key: d.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: u.t["2QVhbb"],
        description: u.t.wQ4ilB,
        disabledSetting: l.M.NOW_PLAYING,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: u.t.giM9fA,
        description: u.t.EhAfWj,
        disabledSetting: l.M.NOW_PLAYING_DIFFERENT_GAMES,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
        usePredicate: () => {
            let { showNowPlayingForDifferentGames: e } = (0, a.M8)(
                    "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                ),
                t = (0, i.bG)([r.A], () => r.A.isNotificationDisabledBySetting(l.M.NOW_PLAYING));
            return !!e && !t;
        },
    },
];
function g(e) {
    return (0, o.zD)(e.key, {
        useTitle: () => u.intl.string(e.title),
        useSubtitle: () => u.intl.string(e.description),
        useValue: () => !(0, i.bG)([r.A], () => r.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            s.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let m = (0, o.FW)(d.X.OVERLAY_NOTIFICATIONS_LIST, {
    variant: "compact",
    useTitle: () => u.intl.string(u.t.gnKWdS),
    isTitleHiddenVisually: !0,
    buildLayout: () => c.map(g),
});
