n.d(t, { Z: () => u }), n(47120);
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(615161),
    s = n(388032),
    o = n(513803);
function a(e) {
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
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function d(e) {
    let { onClose: t, onSelect: n } = e,
        [{ notifyFriends: o, hidePreview: a }, c] = (0, i.E_)();
    return (0, r.jsxs)(l.v2r, {
        'aria-label': s.NW.string(s.t['+1H47u']),
        navId: 'stream-options',
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(l.S89, {
                id: 'stream-option-share-preview',
                checked: a,
                label: s.NW.string(s.t.H3Qjqa),
                action: () =>
                    c({
                        type: 'set_hide_preview',
                        hidePreview: !a
                    })
            }),
            (0, r.jsx)(l.S89, {
                id: 'stream-option-notify',
                checked: o,
                label: s.NW.string(s.t.SiHtX1),
                action: () =>
                    c({
                        type: 'set_notify_friends',
                        value: !o
                    })
            })
        ]
    });
}
function u() {
    let [{ muteStreamAudio: e }, t] = (0, i.E_)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.ua7, {
                text: e ? s.NW.string(s.t.zwBQho) : s.NW.string(s.t['9A91tb']),
                children: (n) =>
                    (0, r.jsx)(
                        l.zxk,
                        c(
                            a(
                                {
                                    size: l.zxk.Sizes.ICON,
                                    color: e ? l.zxk.Colors.RED : l.zxk.Colors.PRIMARY
                                },
                                n
                            ),
                            {
                                onClick: () =>
                                    t({
                                        type: 'set_mute_audio',
                                        value: !e
                                    }),
                                className: o.streamOptionsButton,
                                children: e
                                    ? (0, r.jsx)(l.OyP, {
                                          size: 'refresh_sm',
                                          color: 'currentColor'
                                      })
                                    : (0, r.jsx)(l.gj8, {
                                          size: 'refresh_sm',
                                          color: 'currentColor'
                                      })
                            }
                        )
                    )
            }),
            (0, r.jsx)(l.yRy, {
                position: 'top',
                align: 'right',
                renderPopout: (e) =>
                    (0, r.jsx)(d, {
                        onClose: e.closePopout,
                        onSelect: e.closePopout
                    }),
                children: (e) =>
                    (0, r.jsx)(
                        l.zxk,
                        c(
                            a(
                                {
                                    size: l.zxk.Sizes.ICON,
                                    'aria-label': s.NW.string(s.t['+1H47u']),
                                    color: l.zxk.Colors.PRIMARY,
                                    className: o.streamOptionsButton
                                },
                                e
                            ),
                            {
                                children: (0, r.jsx)(l.xhG, {
                                    size: 'refresh_sm',
                                    color: 'currentColor'
                                })
                            }
                        )
                    )
            })
        ]
    });
}
