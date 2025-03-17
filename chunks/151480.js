n.d(t, { k: () => c });
var r = n(544891),
    i = n(570140),
    l = n(881052),
    o = n(439170),
    a = n(860987),
    s = n(981631);
let c = async () => {
    i.Z.dispatch({ type: 'FETCH_CHAT_WALLPAPERS_START' });
    try {
        let e = await r.tn.get({
            url: s.ANM.CHAT_WALLPAPERS,
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'FETCH_CHAT_WALLPAPERS_SUCCESS',
            wallpapers: e.body.chat_wallpapers.map(a.w)
        });
    } catch (t) {
        let e = new l.Hx(t);
        (0, o.G)(e),
            i.Z.dispatch({
                type: 'FETCH_CHAT_WALLPAPERS_FAILURE',
                error: e
            });
    }
};
