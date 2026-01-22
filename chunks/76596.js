n.d(t, {
    A: () => d,
});
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(565645),
    s = n(375499),
    o = n(937773),
    c = n(512805),
    u = n(307731);

function d(e) {
    let { className: t, emojiClassName: n, emoji: d, setEmoji: m, channel: p } = e,
        j = r.useRef(null),
        g =
            null == d || null == d.name
                ? null
                : () => {
                      var e;
                      return (0, l.jsx)(a.A, {
                          className: n,
                          animated: null != (e = d.animated) && e,
                          emojiId: d.id,
                          emojiName: d.name,
                      });
                  };
    return (0, l.jsx)(c.A, {
        hasSetEmoji: null != d && null != d.name,
        onClick: () => {
            m(null);
        },
        children: (0, l.jsx)(i.YNO, {
            targetElementRef: j,
            position: "bottom",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, l.jsx)(o.A, {
                    closePopout: t,
                    onSelectEmoji: (e) => {
                        var n, l;
                        let { emoji: r, willClose: i } = e;
                        null != r &&
                            (null == r.id
                                ? m({
                                      name: null != (n = r.optionallyDiverseSequence) ? n : "",
                                  })
                                : m({
                                      id: r.id,
                                      name: null != (l = r.originalName) ? l : r.name,
                                      animated: r.animated,
                                  }),
                            i && t());
                    },
                    pickerIntention: u.b_.COMMUNITY_CONTENT,
                    channel: p,
                });
            },
            children: (e, n) => {
                var r, i;
                let { isShown: a } = n;
                return (0, l.jsx)(
                    s.A,
                    ((r = (function (e) {
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
                    (i = i =
                        {
                            ref: j,
                            tabIndex: 0,
                            active: a,
                            className: t,
                            renderButtonContents: g,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    r),
                );
            },
        }),
    });
}
