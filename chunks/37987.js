i.d(e, {
    q: () => o,
});
var n = i(873298),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    u = i(542877),
    a = i(985018);
let o = (0, l.Qx)(r.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
    useTitle: () => a.intl.string(a.t["ms+Tme"]),
    useSubtitle: () => a.intl.string(a.t["4NN4+/"]),
    useOptions: () => [
        {
            name: a.intl.string(a.t.JIFnN9),
            value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL,
        },
        {
            name: a.intl.string(a.t.rRdsk1),
            value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME,
        },
        {
            name: a.intl.string(a.t.AolKwN),
            value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE,
        },
    ],
    useValue: () => {
        let t = s.TA.useSetting();
        return t === n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : t;
    },
    setValue: (t) => s.TA.updateSetting(t),
    usePredicate: u.K,
});
