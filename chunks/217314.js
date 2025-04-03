n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(481060),
    o = n(210975),
    a = n(158776),
    s = n(699516),
    c = n(594174),
    u = n(51144),
    d = n(984370),
    p = n(388032),
    h = n(100658);
function f(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        f = (0, i.e7)([c.default], () => c.default.getUser(t)),
        m = (0, i.e7)([a.Z], () => a.Z.getStatus(t)),
        g = (0, i.e7)([a.Z], () => a.Z.isMobileOnline(t)),
        b = (0, i.e7)([s.Z], () => s.Z.getNickname(t)),
        _ = u.ZP.useUserTag(f),
        C = (0, o.m$)({ channelId: e.channel.id });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.nn4, { children: p.NW.string(p.t.EJRzg4) }),
            null != f &&
                !n &&
                (0, r.jsx)('div', {
                    children: (0, r.jsx)(l.qEK, {
                        status: m,
                        isMobile: g,
                        className: h.avatar,
                        size: l.EFr.SIZE_24,
                        'aria-label': u.ZP.getName(f),
                        src: f.getAvatarURL(void 0, 24)
                    })
                }),
            (0, r.jsx)(d.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? h.cursorPointer : null,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.DY3, {
                            text: _,
                            position: 'bottom',
                            children: null != b ? b : u.ZP.getName(f)
                        }),
                        C &&
                            (0, r.jsx)(l.ua7, {
                                text: p.NW.string(p.t.QyZ4TU),
                                children: (e) => {
                                    var t, n;
                                    return (0, r.jsx)(
                                        l.tQf,
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
                                        })({}, e)),
                                        (n = n =
                                            {
                                                size: 'xs',
                                                'aria-label': p.NW.string(p.t.VHXh8f),
                                                color: l.TVs.colors.INTERACTIVE_NORMAL,
                                                className: h.secureFramesIcon
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
