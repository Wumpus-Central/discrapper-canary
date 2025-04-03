n.d(t, { Z: () => u });
var r = n(200651),
    l = n(192379),
    i = n(481060),
    o = n(596454),
    s = n(318766),
    a = n(907040),
    c = n(273039),
    d = n(185923);
function u(e) {
    let { className: t, emojiClassName: n, emoji: u, setEmoji: m, channel: h } = e,
        j = l.useRef(null),
        x = (e) => (t, n) => {
            var r, l;
            null != t &&
                (null == t.id
                    ? m({ name: null != (r = t.optionallyDiverseSequence) ? r : '' })
                    : m({
                          id: t.id,
                          name: null != (l = t.originalName) ? l : t.name,
                          animated: t.animated
                      }),
                n && e());
        },
        p =
            null == u || null == u.name
                ? null
                : () => {
                      var e;
                      return (0, r.jsx)(o.Z, {
                          className: n,
                          animated: null != (e = u.animated) && e,
                          emojiId: u.id,
                          emojiName: u.name
                      });
                  };
    return (0, r.jsx)(c.Z, {
        hasSetEmoji: null != u && null != u.name,
        onClick: () => {
            m(null);
        },
        children: (0, r.jsx)(i.yRy, {
            targetElementRef: j,
            position: 'bottom',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(a.Z, {
                    closePopout: t,
                    onSelectEmoji: x(t),
                    pickerIntention: d.Hz.COMMUNITY_CONTENT,
                    channel: h
                });
            },
            children: (e, n) => {
                var l, i;
                let { isShown: o } = n;
                return (0, r.jsx)(
                    s.Z,
                    ((l = (function (e) {
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
                    (i = i =
                        {
                            ref: j,
                            tabIndex: 0,
                            active: o,
                            className: t,
                            renderButtonContents: p
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    l)
                );
            }
        })
    });
}
