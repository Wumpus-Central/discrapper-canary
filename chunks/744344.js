n.d(t, { r: () => _ });
var i = n(311907),
    s = n(684013),
    l = n(93465),
    a = n(589051),
    r = n(592598),
    o = n(419954),
    d = n(780964),
    c = n(985018);
let u = [
    {
        title: c.t.eVE4LX,
        description: c.t["72WNqk"],
        disabledSetting: l.M.TEXT_CHAT,
        key: d.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
    },
    {
        title: c.t.oifnSh,
        description: c.t.bgU5r0,
        disabledSetting: l.M.WELCOME_GENERAL,
        key: d.X.OVERLAY_NOTIFICATIONS_WELCOME,
    },
    {
        title: c.t.hqsZJW,
        description: c.t.kHjdqc,
        disabledSetting: l.M.GO_LIVE_NUDGE,
        key: d.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
    },
    {
        title: c.t.sop3rn,
        description: c.t.pjgffc,
        disabledSetting: l.M.GAME_ACTIVITY,
        key: d.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
    },
    {
        title: c.t["2QVhbb"],
        description: c.t.wQ4ilB,
        disabledSetting: l.M.NOW_PLAYING,
        key: d.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
    },
    {
        title: c.t.giM9fA,
        description: c.t.EhAfWj,
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
function m(e) {
    return (0, o.zD)(e.key, {
        useTitle: () => c.intl.string(e.title),
        useSubtitle: () => c.intl.string(e.description),
        useValue: () => !(0, i.bG)([r.A], () => r.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            s.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let _ = (0, o.FW)(d.X.OVERLAY_NOTIFICATIONS_LIST, {
    variant: "compact",
    useTitle: () => c.intl.string(c.t.gnKWdS),
    isTitleHiddenVisually: !0,
    buildLayout: () => u.map(m),
});
