n.d(t, {
    X: () => _,
    k9: () => f
});
var r = n(602715),
    i = n(544891),
    o = n(570140),
    a = n(881052),
    s = n(439170),
    l = n(258732),
    c = n(630388),
    u = n(860987),
    d = n(981631);
let f = async () => {
    o.Z.dispatch({ type: 'FETCH_CHAT_WALLPAPERS_START' });
    try {
        let e = await i.tn.get({
            url: d.ANM.CHAT_WALLPAPERS,
            rejectWithError: !0
        });
        o.Z.dispatch({
            type: 'FETCH_CHAT_WALLPAPERS_SUCCESS',
            wallpapers: e.body.chat_wallpapers.map(u.w)
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
async function _(e, t) {
    let { shouldClear: n } = t;
    try {
        var i;
        let t = (0, c.mB)(null !== (i = e.recipientFlags) && void 0 !== i ? i : 0, r.V.DISMISSED_CURRENT_CHAT_WALLPAPER, n);
        await l.Z.updatePrivateChannelRecipientFlags(e.id, t);
    } catch (t) {
        let e = new a.Hx(t);
        (0, s.G)(e);
    }
}
