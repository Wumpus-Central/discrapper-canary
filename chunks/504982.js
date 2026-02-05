n.d(t, { A: () => s });
var i = n(954571),
    r = n(237774),
    a = n(862927),
    l = n(652215);
function s(e) {
    let { tab_opened: t, source: n } = e,
        s = (0, a.A)();
    i.default.track(l.HAw.FRIENDS_LIST_VIEWED, { tab_opened: t, source: n, ...s }),
        (0, r.k)(l.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
            tab_opened: t ?? "tabless",
            num_friends: s.num_friends ?? 0,
            now_playing_visible: s.now_playing_visible ?? !1,
            now_playing_num_cards: s.now_playing_num_cards ?? 0,
        });
}
