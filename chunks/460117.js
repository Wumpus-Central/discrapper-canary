n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    l = n(596454),
    s = n(318766),
    a = n(907040),
    c = n(273039),
    d = n(185923);
function u(e) {
    let { className: t, emojiClassName: n, emoji: u, setEmoji: m, channel: h } = e,
        j = i.useRef(null),
        v = (e) => (t, n) => {
            var r, i;
            null != t &&
                (null == t.id
                    ? m({ name: null !== (r = t.optionallyDiverseSequence) && void 0 !== r ? r : '' })
                    : m({
                          id: t.id,
                          name: null !== (i = t.originalName) && void 0 !== i ? i : t.name,
                          animated: t.animated
                      }),
                n && e());
        },
        x =
            null == u || null == u.name
                ? null
                : () => {
                      var e;
                      return (0, r.jsx)(l.Z, {
                          className: n,
                          animated: null !== (e = u.animated) && void 0 !== e && e,
                          emojiId: u.id,
                          emojiName: u.name
                      });
                  };
    return (0, r.jsx)(c.Z, {
        hasSetEmoji: null != u && null != u.name,
        onClick: () => {
            m(null);
        },
        children: (0, r.jsx)(o.yRy, {
            targetElementRef: j,
            position: 'bottom',
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(a.Z, {
                    closePopout: t,
                    onSelectEmoji: v(t),
                    pickerIntention: d.Hz.COMMUNITY_CONTENT,
                    channel: h
                });
            },
            children: (e, n) => {
                var i, o;
                let { isShown: l } = n;
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
                    (o = o =
                        {
                            ref: j,
                            tabIndex: 0,
                            active: l,
                            className: t,
                            renderButtonContents: x
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
