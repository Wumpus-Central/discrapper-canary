n.d(t, { Z: () => h }), n(47120);
var r = n(200651);
n(192379);
var l = n(120356),
    i = n.n(l),
    s = n(481060),
    o = n(615161),
    a = n(388032),
    c = n(513803);
function d(e) {
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
function u(e, t) {
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
function f(e) {
    let { onClose: t, onSelect: n } = e,
        [{ notifyFriends: l, hidePreview: i }, c] = (0, o.E_)();
    return (0, r.jsxs)(s.v2r, {
        'aria-label': a.NW.string(a.t['+1H47u']),
        navId: 'stream-options',
        onClose: t,
        onSelect: n,
        children: [
            (0, r.jsx)(s.S89, {
                id: 'stream-option-share-preview',
                checked: i,
                label: a.NW.string(a.t.H3Qjqa),
                action: () =>
                    c({
                        type: 'set_hide_preview',
                        hidePreview: !i
                    })
            }),
            (0, r.jsx)(s.S89, {
                id: 'stream-option-notify',
                checked: l,
                label: a.NW.string(a.t.SiHtX1),
                action: () =>
                    c({
                        type: 'set_notify_friends',
                        value: !l
                    })
            })
        ]
    });
}
function h() {
    let [{ muteStreamAudio: e }, t] = (0, o.E_)();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.ua7, {
                text: e ? a.NW.string(a.t.zwBQho) : a.NW.string(a.t['9A91tb']),
                children: (n) =>
                    (0, r.jsx)(
                        s.zxk,
                        u(
                            d(
                                {
                                    size: s.zxk.Sizes.ICON,
                                    color: e ? s.zxk.Colors.CUSTOM : s.zxk.Colors.PRIMARY
                                },
                                n
                            ),
                            {
                                onClick: () =>
                                    t({
                                        type: 'set_mute_audio',
                                        value: !e
                                    }),
                                className: i()(c.streamOptionsButton, { [c.glowButton]: e }),
                                children: e
                                    ? (0, r.jsx)(s.OyP, {
                                          size: 'refresh_sm',
                                          color: 'currentColor'
                                      })
                                    : (0, r.jsx)(s.gj8, {
                                          size: 'refresh_sm',
                                          color: 'currentColor'
                                      })
                            }
                        )
                    )
            }),
            (0, r.jsx)(s.yRy, {
                position: 'top',
                align: 'right',
                renderPopout: (e) =>
                    (0, r.jsx)(f, {
                        onClose: e.closePopout,
                        onSelect: e.closePopout
                    }),
                children: (e) =>
                    (0, r.jsx)(
                        s.zxk,
                        u(
                            d(
                                {
                                    size: s.zxk.Sizes.ICON,
                                    'aria-label': a.NW.string(a.t['+1H47u']),
                                    color: s.zxk.Colors.PRIMARY,
                                    className: c.streamOptionsButton
                                },
                                e
                            ),
                            {
                                children: (0, r.jsx)(s.xhG, {
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
