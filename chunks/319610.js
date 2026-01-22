n.d(t, { A: () => b });
var r = n(627968),
    l = n(64700),
    i = n(417597),
    a = n(397927),
    s = n(318937),
    o = n(533117),
    c = n(134753),
    u = n(246356),
    d = n(709562),
    f = n(912276),
    p = n(60504),
    h = n(985018);
function b(e) {
    let { channel: t } = e,
        n = (0, i.bG)([o.A], () => o.A.getDrawMode()),
        b = (null == n ? void 0 : n.type) === c.Z.EMOJI_HOSE,
        g = l.useRef(null),
        m = (e, t) => {
            null != e
                ? (0, s.Ol)({
                      type: c.Z.EMOJI_HOSE,
                      emojiName: e.name,
                      emojiId: e.id,
                  })
                : b && (0, s.Ol)(null),
                null == t || t();
        };
    return (0, r.jsx)(p.A, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: l } = e;
            return (0, r.jsx)(u.A, {
                children: (0, r.jsx)(f.A, {
                    title: h.intl.string(h.t.XYLOyF),
                    channel: t,
                    closePopout: n,
                    onFocus: l,
                    onSelectEmoji: (e) => m(e, n),
                }),
            });
        },
        popoutTargetRef: g,
        children: (e) => {
            var t, n;
            return (0, r.jsx)(
                d.A,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n =
                    {
                        buttonRef: g,
                        iconComponent: a.VRj,
                        isActive: b || e.isActive,
                        onClick: (t) => {
                            m(null), e.onClick(t);
                        },
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
                t),
            );
        },
    });
}
