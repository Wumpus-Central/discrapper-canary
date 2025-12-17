n.d(t, { Z: () => d });
var l = n(54381),
    i = n(473749),
    r = n(481060),
    o = n(596454),
    a = n(318766),
    s = n(907040),
    c = n(273039),
    u = n(185923);
function d(e) {
    let { className: t, emojiClassName: n, emoji: d, setEmoji: m, channel: j } = e,
        g = i.useRef(null),
        p =
            null == d || null == d.name
                ? null
                : () => {
                      var e;
                      return (0, l.jsx)(o.Z, {
                          className: n,
                          animated: null != (e = d.animated) && e,
                          emojiId: d.id,
                          emojiName: d.name,
                      });
                  };
    return (0, l.jsx)(c.Z, {
        hasSetEmoji: null != d && null != d.name,
        onClick: () => {
            m(null);
        },
        children: (0, l.jsx)(r.yRy, {
            targetElementRef: g,
            position: "bottom",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(s.Z, {
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        var n, l;
                        let { emoji: i, willClose: r } = e;
                        null != i &&
                            (null == i.id
                                ? m({ name: null != (n = i.optionallyDiverseSequence) ? n : "" })
                                : m({
                                      id: i.id,
                                      name: null != (l = i.originalName) ? l : i.name,
                                      animated: i.animated,
                                  }),
                            r && t());
                    },
                    pickerIntention: u.Hz.COMMUNITY_CONTENT,
                    channel: j,
                });
            },
            children: (e, n) => {
                var i, r;
                let { isShown: o } = n;
                return (0, l.jsx)(
                    a.Z,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, e)),
                    (r = r =
                        {
                            ref: g,
                            tabIndex: 0,
                            active: o,
                            className: t,
                            renderButtonContents: p,
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
                    i),
                );
            },
        }),
    });
}
