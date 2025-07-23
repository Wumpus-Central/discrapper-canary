n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(481060),
    a = n(7284),
    o = n(210975),
    s = n(158776),
    c = n(699516),
    u = n(594174),
    d = n(51144),
    p = n(984370),
    h = n(388032),
    f = n(100658);
function m(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        m = (0, i.e7)([u.default], () => u.default.getUser(t)),
        g = (0, i.e7)([s.Z], () => s.Z.getStatus(t)),
        b = (0, i.e7)([s.Z], () => s.Z.isMobileOnline(t)),
        _ = (0, i.e7)([c.Z], () => c.Z.getNickname(t)),
        y = d.ZP.useUserTag(m),
        C = (0, a.j)({ displayNameStyles: null == m ? void 0 : m.displayNameStyles }),
        x = (0, o.m$)({ channelId: e.channel.id });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.nn4, { children: h.intl.string(h.t.EJRzg4) }),
            null != m &&
                !n &&
                (0, r.jsx)('div', {
                    children: (0, r.jsx)(l.qEK, {
                        status: g,
                        isMobile: b,
                        className: f.avatar,
                        size: l.EFr.SIZE_20,
                        'aria-label': d.ZP.getName(m),
                        src: m.getAvatarURL(void 0, 20)
                    })
                }),
            (0, r.jsx)(p.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? f.cursorPointer : null,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.DY3, {
                            text: y,
                            position: 'bottom',
                            className: C,
                            children: null != _ ? _ : d.ZP.getName(m)
                        }),
                        x &&
                            (0, r.jsx)(l.ua7, {
                                text: h.intl.string(h.t.QyZ4TU),
                                children: (e) => {
                                    var t, n;
                                    return (0, r.jsx)(
                                        l.tQf,
                                        ((t = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        })
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        ((r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0
                                                                  })
                                                                : (e[t] = r));
                                                    }));
                                            }
                                            return e;
                                        })({}, e)),
                                        (n = n =
                                            {
                                                size: 'xs',
                                                'aria-label': h.intl.string(h.t.VHXh8f),
                                                color: l.TVs.colors.INTERACTIVE_NORMAL,
                                                className: f.secureFramesIcon
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
                            })
                    ]
                })
            })
        ]
    });
}
