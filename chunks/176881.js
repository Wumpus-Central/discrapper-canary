n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(626135),
    r = n(188471),
    l = n(360347),
    a = n(981631);
function s(e) {
    var t, n, s;
    let { tab_opened: o, source: c } = e,
        d = (0, l.Z)();
    i.default.track(a.rMx.FRIENDS_LIST_VIEWED, {
        tab_opened: o,
        source: c,
        ...d
    }),
        (0, r.a)(a.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
            tab_opened: null != o ? o : 'tabless',
            num_friends: null !== (t = d.num_friends) && void 0 !== t ? t : 0,
            now_playing_visible: null !== (n = d.now_playing_visible) && void 0 !== n && n,
            now_playing_num_cards: null !== (s = d.now_playing_num_cards) && void 0 !== s ? s : 0
        });
}
