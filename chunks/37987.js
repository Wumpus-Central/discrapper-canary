i.d(e, { q: () => o });
var n = i(873298),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(542877),
    u = i(985018);
let o = (0, l.Qx)(r.X.CONTENT_AND_SOCIAL_IN_GAME_DMS_SETTING, {
    useTitle: () => u.intl.string(u.t["ms+Tme"]),
    useSubtitle: () => u.intl.string(u.t["4NN4+/"]),
    useOptions: () => [
        { name: u.intl.string(u.t.JIFnN9), value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL },
        { name: u.intl.string(u.t.rRdsk1), value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME },
        { name: u.intl.string(u.t.AolKwN), value: n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE },
    ],
    useValue: () => {
        let t = s.TA.useSetting();
        return t === n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET ? n.fL.SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL : t;
    },
    setValue: (t) => s.TA.updateSetting(t),
    usePredicate: a.K,
});
