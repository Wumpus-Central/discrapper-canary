n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    l = n(399606),
    o = n(481060),
    a = n(125268),
    s = n(673125),
    c = n(984063),
    u = n(390322),
    d = n(871499),
    p = n(12168),
    h = n(304388),
    f = n(388032);
function m(e) {
    let { channel: t } = e,
        n = (0, l.e7)([s.Z], () => s.Z.getDrawMode()),
        m = (null == n ? void 0 : n.type) === c.W.EMOJI_HOSE,
        g = i.useRef(null),
        b = (e, t) => {
            null != e
                ? (0, a.Bo)({
                      type: c.W.EMOJI_HOSE,
                      emojiName: e.name,
                      emojiId: e.id
                  })
                : m && (0, a.Bo)(null),
                null == t || t();
        };
    return (0, r.jsx)(h.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: i } = e;
            return (0, r.jsx)(u.Z, {
                children: (0, r.jsx)(p.Z, {
                    title: f.intl.string(f.t.XYLOyM),
                    channel: t,
                    closePopout: n,
                    onFocus: i,
                    onSelectEmoji: (e) => b(e, n)
                })
            });
        },
        popoutTargetRef: g,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                d.Z,
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
                        buttonRef: g,
                        iconComponent: o.j9u,
                        isActive: m || e.isActive,
                        onClick: (t) => {
                            b(null), e.onClick(t);
                        }
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
