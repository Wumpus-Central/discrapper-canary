n.d(t, { Z: () => y }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(481060),
    s = n(413335),
    c = n(434479),
    u = n(713081),
    d = n(441536),
    p = n(933104),
    h = n(332538),
    f = n(535396),
    g = n(367123),
    m = n(388032),
    b = n(796004);
function v(e) {
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
let y = i.memo(function (e) {
    let { guildId: t, selected: n } = e,
        o = (0, h.Z)(t),
        y = i.useCallback(() => {
            (0, u.jd)(t), (0, d.Z)(t);
        }, [t]),
        _ = i.useCallback(() => {
            var e;
            switch (null == o ? void 0 : null === (e = o.popout) || void 0 === e ? void 0 : e.type) {
                case f.Us.LEVEL:
                    return (0, r.jsx)(p.j, v({ guildId: t }, o.popout));
                case f.Us.PERK:
                    return (0, r.jsx)(p.$, v({ guildId: t }, o.popout));
                default:
                    return (0, r.jsx)('div', {});
            }
        }, [t, null == o ? void 0 : o.popout]),
        [O, j] = i.useState(!1);
    return (0, r.jsx)(a.yRy, {
        shouldShow: (null == o ? void 0 : o.popout) != null && !O,
        nudgeAlignIntoViewport: !0,
        animationPosition: 'bottom',
        position: 'right',
        renderPopout: _,
        onRequestOpen: () => j(!1),
        onRequestClose: () => j(!0),
        children: (e) => {
            var i, a;
            return (0, r.jsx)(
                c.m,
                ((i = v({}, e)),
                (a = a =
                    {
                        id: 'skill-trees-'.concat(t),
                        renderIcon: (e) =>
                            (0, r.jsx)(s.Z, {
                                size: 'md',
                                className: e
                            }),
                        text: (0, r.jsx)('span', {
                            className: l()({ [b.textImportant]: (null == o ? void 0 : o.showUnread) === !0 }),
                            children: m.NW.string(g.Z.yv3DJC)
                        }),
                        selected: n,
                        onClick: y,
                        showUnread: (null == o ? void 0 : o.showUnread) === !0,
                        trailing: null == o ? void 0 : o.trailing
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                i)
            );
        }
    });
});
