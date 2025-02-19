n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(596454),
    l = n(318766),
    s = n(907040),
    a = n(273039),
    c = n(185923);
function d(e) {
    let { className: t, emojiClassName: n, emoji: d, setEmoji: u, channel: m } = e,
        h = (e) => (t, n) => {
            var r, i;
            null != t &&
                (null == t.id
                    ? u({ name: null !== (r = t.optionallyDiverseSequence) && void 0 !== r ? r : '' })
                    : u({
                          id: t.id,
                          name: null !== (i = t.originalName) && void 0 !== i ? i : t.name,
                          animated: t.animated
                      }),
                n && e());
        },
        v =
            null == d || null == d.name
                ? null
                : () => {
                      var e;
                      return (0, r.jsx)(o.Z, {
                          className: n,
                          animated: null !== (e = d.animated) && void 0 !== e && e,
                          emojiId: d.id,
                          emojiName: d.name
                      });
                  };
    return (0, r.jsx)(a.Z, {
        hasSetEmoji: null != d && null != d.name,
        onClick: () => {
            u(null);
        },
        children: (0, r.jsx)(i.yRy, {
            position: 'bottom',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(s.Z, {
                    closePopout: t,
                    onSelectEmoji: h(t),
                    pickerIntention: c.Hz.COMMUNITY_CONTENT,
                    channel: m
                });
            },
            children: (e, n) => {
                var i, o;
                let { isShown: s } = n;
                return (0, r.jsx)(
                    l.Z,
                    ((i = (function (e) {
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
                    (o = o =
                        {
                            tabIndex: 0,
                            active: s,
                            className: t,
                            renderButtonContents: v
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    i)
                );
            }
        })
    });
}
