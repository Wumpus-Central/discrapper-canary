n.d(t, { Z: () => c }), n(47120);
var r = n(200651);
n(192379);
var l = n(481060),
    s = n(615161),
    i = n(388032),
    a = n(745259);
function o(e) {
    let { onClose: t, onSelect: n } = e,
        [{ muteStreamAudio: a, notifyFriends: o, hidePreview: c }, u] = (0, s.E_)();
    return (0, r.jsxs)(l.v2r, {
        'aria-label': i.NW.string(i.t['+1H47u']),
        navId: 'stream-options',
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(l.S89, {
                id: 'stream-option-share-preview',
                checked: c,
                label: i.NW.string(i.t.H3Qjqa),
                action: () =>
                    u({
                        type: 'set_hide_preview',
                        hidePreview: !c
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-mute',
                checked: a,
                label: i.NW.string(i.t['b0+Ira']),
                action: () =>
                    u({
                        type: 'set_mute_audio',
                        value: !a
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-notify',
                checked: o,
                label: i.NW.string(i.t.SiHtX1),
                action: () =>
                    u({
                        type: 'set_notify_friends',
                        value: !o
                    })
            })
        ]
    });
}
function c() {
    return (0, r.jsx)(l.yRy, {
        position: 'top',
        align: 'right',
        renderPopout: (e) =>
            (0, r.jsx)(o, {
                onClose: e.closePopout,
                onSelect: e.closePopout
            }),
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                l.zxk,
                ((t = (function (e) {
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
                        size: l.zxk.Sizes.ICON,
                        'aria-label': i.NW.string(i.t['+1H47u']),
                        color: l.zxk.Colors.PRIMARY,
                        className: a.streamOptionsButton
                    },
                    e
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(l.ewm, {
                            size: 'refresh_sm',
                            color: 'currentColor'
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
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
