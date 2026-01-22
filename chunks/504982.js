n.d(t, {
    A: () => s,
});
var r = n(954571),
    i = n(237774),
    l = n(862927),
    a = n(652215);

function s(e) {
    var t, n, s;
    let { tab_opened: o, source: c } = e,
        u = (0, l.A)();
    r.default.track(
        a.HAw.FRIENDS_LIST_VIEWED,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                tab_opened: o,
                source: c,
            },
            u,
        ),
    ),
        (0, i.k)(a.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
            tab_opened: null != o ? o : "tabless",
            num_friends: null != (t = u.num_friends) ? t : 0,
            now_playing_visible: null != (n = u.now_playing_visible) && n,
            now_playing_num_cards: null != (s = u.now_playing_num_cards) ? s : 0,
        });
}
