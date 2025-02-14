n.d(t, { Z: () => s });
var i = n(626135),
    l = n(188471),
    r = n(360347),
    a = n(981631);
function s(e) {
    var t, n, s;
    let { tab_opened: o, source: d } = e,
        c = (0, r.Z)();
    i.default.track(a.rMx.FRIENDS_LIST_VIEWED, {
        tab_opened: o,
        source: d,
        ...c
    }),
        (0, l.a)(a.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
            tab_opened: null != o ? o : 'tabless',
            num_friends: null !== (t = c.num_friends) && void 0 !== t ? t : 0,
            now_playing_visible: null !== (n = c.now_playing_visible) && void 0 !== n && n,
            now_playing_num_cards: null !== (s = c.now_playing_num_cards) && void 0 !== s ? s : 0
        });
}
