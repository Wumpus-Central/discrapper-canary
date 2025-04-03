n.d(t, { Z: () => o });
var r = n(626135),
    i = n(188471),
    l = n(360347),
    a = n(981631);
function o(e) {
    var t, n, o;
    let { tab_opened: s, source: c } = e,
        u = (0, l.Z)();
    r.default.track(
        a.rMx.FRIENDS_LIST_VIEWED,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                tab_opened: s,
                source: c
            },
            u
        )
    ),
        (0, i.a)(a.rMx.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
            tab_opened: null != s ? s : 'tabless',
            num_friends: null != (t = u.num_friends) ? t : 0,
            now_playing_visible: null != (n = u.now_playing_visible) && n,
            now_playing_num_cards: null != (o = u.now_playing_num_cards) ? o : 0
        });
}
