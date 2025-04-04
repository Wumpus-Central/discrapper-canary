n.d(t, {
    X: () => p,
    k9: () => _
});
var r = n(602715),
    i = n(544891),
    o = n(570140),
    a = n(881052),
    s = n(439170),
    l = n(258732),
    c = n(626135),
    u = n(630388),
    d = n(860987),
    f = n(981631);
let _ = async () => {
    o.Z.dispatch({ type: 'FETCH_CHAT_WALLPAPERS_START' });
    try {
        let e = await i.tn.get({
            url: f.ANM.CHAT_WALLPAPERS,
            rejectWithError: !0
        });
        o.Z.dispatch({
            type: 'FETCH_CHAT_WALLPAPERS_SUCCESS',
            wallpapers: e.body.chat_wallpapers.map(d.w)
        });
    } catch (t) {
        let e = new a.Hx(t);
        (0, s.G)(e),
            o.Z.dispatch({
                type: 'FETCH_CHAT_WALLPAPERS_FAILURE',
                error: e
            });
    }
};
async function p(e, t, n) {
    let { shouldClear: i } = n;
    o.Z.dispatch({
        type: 'UPDATE_CHAT_WALLPAPER_FLAG_START',
        channelId: e.id
    });
    try {
        var d;
        c.default.track(f.rMx.CHAT_WALLPAPER_USER_SIDE_CLEAR_TOGGLED, {
            is_hidden: i,
            wallpaper_id: t,
            channel_id: e.id
        });
        let n = (0, u.mB)(null != (d = e.recipientFlags) ? d : 0, r.V.DISMISSED_CURRENT_CHAT_WALLPAPER, i);
        await l.Z.updatePrivateChannelRecipientFlags(e.id, n);
    } catch (t) {
        let e = new a.Hx(t);
        (0, s.G)(e);
    } finally {
        o.Z.dispatch({
            type: 'UPDATE_CHAT_WALLPAPER_FLAG_COMPLETE',
            channelId: e.id
        });
    }
}
