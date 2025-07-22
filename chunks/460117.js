n.d(t, { Z: () => u });
var i = n(255367),
    r = n(73800),
    l = n(481060),
    o = n(596454),
    s = n(318766),
    a = n(907040),
    c = n(273039),
    d = n(185923);
function u(e) {
    let { className: t, emojiClassName: n, emoji: u, setEmoji: m, channel: j } = e,
        v = r.useRef(null),
        h = (e) => (t) => {
            var n, i;
            let { emoji: r, willClose: l } = t;
            null != r &&
                (null == r.id
                    ? m({ name: null != (n = r.optionallyDiverseSequence) ? n : '' })
                    : m({
                          id: r.id,
                          name: null != (i = r.originalName) ? i : r.name,
                          animated: r.animated
                      }),
                l && e());
        },
        p =
            null == u || null == u.name
                ? null
                : () => {
                      var e;
                      return (0, i.jsx)(o.Z, {
                          className: n,
                          animated: null != (e = u.animated) && e,
                          emojiId: u.id,
                          emojiName: u.name
                      });
                  };
    return (0, i.jsx)(c.Z, {
        hasSetEmoji: null != u && null != u.name,
        onClick: () => {
            m(null);
        },
        children: (0, i.jsx)(l.yRy, {
            targetElementRef: v,
            position: 'bottom',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(a.Z, {
                    closePopout: t,
                    onSelectEmoji: h(t),
                    pickerIntention: d.Hz.COMMUNITY_CONTENT,
                    channel: j
                });
            },
            children: (e, n) => {
                var r, l;
                let { isShown: o } = n;
                return (0, i.jsx)(
                    s.Z,
                    ((r = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (l = l =
                        {
                            ref: v,
                            tabIndex: 0,
                            active: o,
                            className: t,
                            renderButtonContents: p
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(l)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                          }),
                    r)
                );
            }
        })
    });
}
