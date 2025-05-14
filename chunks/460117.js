n.d(t, { Z: () => u });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(596454),
    s = n(318766),
    a = n(907040),
    c = n(273039),
    d = n(185923);
function u(e) {
    let { className: t, emojiClassName: n, emoji: u, setEmoji: m, channel: h } = e,
        j = i.useRef(null),
        x = (e) => (t, n) => {
            var r, i;
            null != t &&
                (null == t.id
                    ? m({ name: null != (r = t.optionallyDiverseSequence) ? r : '' })
                    : m({
                          id: t.id,
                          name: null != (i = t.originalName) ? i : t.name,
                          animated: t.animated
                      }),
                n && e());
        },
        v =
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
        children: (0, r.jsx)(l.yRy, {
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
                var i, l;
                let { isShown: o } = n;
                return (0, r.jsx)(
                    s.Z,
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
                    (l = l =
                        {
                            ref: j,
                            tabIndex: 0,
                            active: o,
                            className: t,
                            renderButtonContents: v
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    i)
                );
            }
        })
    });
}
