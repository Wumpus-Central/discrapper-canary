n.d(e, { h: () => o });
var i = n(524437),
    l = n(509613),
    s = n(695346),
    u = n(313789),
    r = n(817774),
    a = n(388032);
let o = (0, l.J9)(u.n.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
    useTitle: () => a.intl.string(a.t["ms+Tme"]),
    useSubtitle: () => a.intl.string(a.t["4NN4+/"]),
    useOptions: () => [
        {
            name: a.intl.string(a.t.JIFnN9),
            value: i.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
        },
        {
            name: a.intl.string(a.t.rRdsk1),
            value: i.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
        },
        {
            name: a.intl.string(a.t.AolKwN),
            value: i.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
        },
    ],
    useValue: () => {
        let t = s.JG.useSetting();
        return t === i.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? i.O_.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : t;
    },
    setValue: (t) => s.JG.updateSetting(t),
    usePredicate: r.W,
});
