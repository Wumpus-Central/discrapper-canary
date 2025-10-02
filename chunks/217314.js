n.d(t, { Z: () => g });
var r = n(951288);
n(647438);
var i = n(399606),
    l = n(481060),
    o = n(7284),
    a = n(210975),
    s = n(158776),
    c = n(699516),
    u = n(594174),
    d = n(51144),
    p = n(984370),
    f = n(388032),
    h = n(97009);
function g(e) {
    let t = e.channel.getRecipientId(),
        n = e.channel.isSystemDM(),
        g = (0, i.e7)([u.default], () => u.default.getUser(t)),
        m = (0, i.e7)([s.Z], () => s.Z.getStatus(t)),
        b = (0, i.e7)([s.Z], () => s.Z.isMobileOnline(t)),
        _ = (0, i.e7)([c.Z], () => c.Z.getNickname(t)),
        O = d.ZP.useUserTag(g),
        y = (0, o.j)({ displayNameStyles: null == g ? void 0 : g.displayNameStyles }),
        v = (0, a.m$)({ channelId: e.channel.id });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(l.nn4, { children: f.intl.string(f.t.EJRzg4) }),
            null != g &&
                !n &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(l.qEK, {
                        status: m,
                        isMobile: b,
                        className: h.avatar,
                        size: l.EFr.SIZE_20,
                        "aria-label": d.ZP.getName(g),
                        src: g.getAvatarURL(void 0, 20),
                    }),
                }),
            (0, r.jsx)(p.Z.Title, {
                level: e.level,
                onClick: e.handleClick,
                onContextMenu: e.handleContextMenu,
                className: null != e.handleClick ? h.cursorPointer : null,
                children: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.DY3, {
                            text: O,
                            position: "bottom",
                            className: y,
                            children: null != _ ? _ : d.ZP.getName(g),
                        }),
                        v &&
                            (0, r.jsx)(l.ua7, {
                                text: f.intl.string(f.t.QyZ4TU),
                                children: (e) => {
                                    var t, n;
                                    return (0, r.jsx)(
                                        l.tQf,
                                        ((t = (function (e) {
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
                                        })({}, e)),
                                        (n = n =
                                            {
                                                size: "xs",
                                                "aria-label": f.intl.string(f.t.VHXh8f),
                                                color: l.TVs.colors.INTERACTIVE_NORMAL,
                                                className: h.secureFramesIcon,
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
                                        t),
                                    );
                                },
                            }),
                    ],
                }),
            }),
        ],
    });
}
