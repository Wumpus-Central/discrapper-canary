n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(481060),
    o = n(125268),
    a = n(673125),
    s = n(984063),
    c = n(390322),
    u = n(871499),
    d = n(12168),
    p = n(304388),
    h = n(388032);
function f(e) {
    let { channel: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.getDrawMode()),
        f = (null == n ? void 0 : n.type) === s.W.EMOJI_HOSE,
        m = (e, t) => {
            null != e
                ? (0, o.Bo)({
                      type: s.W.EMOJI_HOSE,
                      emojiName: e.name,
                      emojiId: e.id
                  })
                : f && (0, o.Bo)(null),
                null == t || t();
        };
    return (0, r.jsx)(p.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: i } = e;
            return (0, r.jsx)(c.Z, {
                children: (0, r.jsx)(d.Z, {
                    title: h.NW.string(h.t.XYLOyM),
                    channel: t,
                    closePopout: n,
                    onFocus: i,
                    onSelectEmoji: (e) => m(e, n)
                })
            });
        },
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                u.Z,
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
                        iconComponent: l.j9u,
                        isActive: f || e.isActive,
                        onClick: (t) => {
                            m(null), e.onClick(t);
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
