n.d(t, {
    X: () => p,
    i: () => h,
    k9: () => _
});
var r = n(602715),
    i = n(544891),
    a = n(570140),
    o = n(881052),
    s = n(439170),
    l = n(258732),
    c = n(626135),
    u = n(630388),
    d = n(860987),
    f = n(981631);
let _ = async () => {
    a.Z.dispatch({ type: 'FETCH_CHAT_WALLPAPERS_START' });
    try {
        let e = await i.tn.get({
            url: f.ANM.CHAT_WALLPAPERS,
            rejectWithError: !0
        });
        a.Z.dispatch({
            type: 'FETCH_CHAT_WALLPAPERS_SUCCESS',
            wallpapers: e.body.chat_wallpapers.map(d.w)
        });
    } catch (t) {
        let e = new o.Hx(t);
        (0, s.G)(e),
            a.Z.dispatch({
                type: 'FETCH_CHAT_WALLPAPERS_FAILURE',
                error: e
            });
    }
};
async function p(e, t, n) {
    let { shouldClear: i, onError: d } = n;
    a.Z.dispatch({
        type: 'UPDATE_CHAT_WALLPAPER_FLAG_START',
        channelId: e.id
    });
    try {
        var _;
        c.default.track(f.rMx.CHAT_WALLPAPER_USER_SIDE_CLEAR_TOGGLED, {
            is_hidden: i,
            wallpaper_id: t,
            channel_id: e.id
        });
        let n = (0, u.mB)(null != (_ = e.recipientFlags) ? _ : 0, r.V.DISMISSED_CURRENT_CHAT_WALLPAPER, i);
        (await l.Z.updatePrivateChannelRecipientFlags(e.id, n)).ok || null == d || d();
    } catch (t) {
        let e = new o.Hx(t);
        (0, s.G)(e), null == d || d();
    } finally {
        a.Z.dispatch({
            type: 'UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE',
            channelId: e.id
        });
    }
}
function h(e, t) {
    a.Z.dispatch({
        type: 'UPDATE_CHAT_WALLPAPER_OVERRIDES',
        wallpaperId: e,
        overrides: t
    });
}
