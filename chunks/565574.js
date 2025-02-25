n.d(t, { Z: () => c }), n(47120);
var l = n(200651);
n(192379);
var r = n(481060),
    s = n(615161),
    i = n(388032),
    a = n(745259);
function o(e) {
    let { onClose: t, onSelect: n } = e,
        [{ muteStreamAudio: a, notifyFriends: o }, c] = (0, s.E_)();
    return (0, l.jsxs)(r.v2r, {
        'aria-label': i.NW.string(i.t['+1H47u']),
        navId: 'stream-options',
        onClose: t,
        onSelect: n,
        children: [
            (0, l.jsx)(r.S89, {
                id: 'stream-option-mute',
                checked: a,
                label: i.NW.string(i.t['b0+Ira']),
                action: () =>
                    c({
                        type: 'set_mute_audio',
                        value: !a
                    })
            }),
            (0, l.jsx)(r.S89, {
                id: 'stream-option-notify',
                checked: o,
                label: i.NW.string(i.t.Cef4t7),
                action: () =>
                    c({
                        type: 'set_notify_friends',
                        value: !o
                    })
            })
        ]
    });
}
function c() {
    return (0, l.jsx)(r.yRy, {
        position: 'top',
        align: 'right',
        renderPopout: (e) =>
            (0, l.jsx)(o, {
                onClose: e.closePopout,
                onSelect: e.closePopout
            }),
        children: (e) => {
            var t, n;
            return (0, l.jsx)(
                r.zxk,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })(
                    {
                        size: r.zxk.Sizes.ICON,
                        'aria-label': i.NW.string(i.t['+1H47u']),
                        color: r.zxk.Colors.PRIMARY,
                        className: a.streamOptionsButton
                    },
                    e
                )),
                (n = n =
                    {
                        children: (0, l.jsx)(r.ewm, {
                            size: 'refresh_sm',
                            color: 'currentColor'
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            );
        }
    });
}
