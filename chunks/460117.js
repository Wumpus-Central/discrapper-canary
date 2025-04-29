n.d(t, { Z: () => u });
var l = n(255367),
    i = n(73800),
    r = n(481060),
    o = n(596454),
    s = n(318766),
    a = n(907040),
    c = n(273039),
    d = n(185923);
function u(e) {
    let { className: t, emojiClassName: n, emoji: u, setEmoji: m, channel: h } = e,
        j = i.useRef(null),
        x = (e) => (t, n) => {
            var l, i;
            null != t &&
                (null == t.id
                    ? m({ name: null != (l = t.optionallyDiverseSequence) ? l : '' })
                    : m({
                          id: t.id,
                          name: null != (i = t.originalName) ? i : t.name,
                          animated: t.animated
                      }),
                n && e());
        },
        p =
            null == u || null == u.name
                ? null
                : () => {
                      var e;
                      return (0, l.jsx)(o.Z, {
                          className: n,
                          animated: null != (e = u.animated) && e,
                          emojiId: u.id,
                          emojiName: u.name
                      });
                  };
    return (0, l.jsx)(c.Z, {
        hasSetEmoji: null != u && null != u.name,
        onClick: () => {
            m(null);
        },
        children: (0, l.jsx)(r.yRy, {
            targetElementRef: j,
            position: 'bottom',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(a.Z, {
                    closePopout: t,
                    onSelectEmoji: x(t),
                    pickerIntention: d.Hz.COMMUNITY_CONTENT,
                    channel: h
                });
            },
            children: (e, n) => {
                var i, r;
                let { isShown: o } = n;
                return (0, l.jsx)(
                    s.Z,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, e)),
                    (r = r =
                        {
                            ref: j,
                            tabIndex: 0,
                            active: o,
                            className: t,
                            renderButtonContents: p
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    i)
                );
            }
        })
    });
}
