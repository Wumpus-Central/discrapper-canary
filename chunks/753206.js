n.d(t, { Z: () => g });
var i = n(951288),
    r = n(647438),
    s = n(120356),
    l = n.n(s),
    o = n(628238),
    a = n(750030),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    h = n(845080),
    p = n(360514);
let g = r.memo(function (e) {
    var t;
    let {
            message: n,
            channel: s,
            compact: g,
            className: f,
            isGroupStart: m,
            hideSimpleEmbedContent: b = !0,
            disableInteraction: v,
            previewGuildId: C,
            preview: _,
            author: y,
        } = e,
        O = null != C ? C : (0, a.k)(n),
        S = (0, o.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: E } = (0, u.Z)(n, {
            hideSimpleEmbedContent: b,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        w = r.useMemo(() => {
            var t, n;
            return (0, h.Z)(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n =
                    {
                        channel: s,
                        guildId: O,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            );
        }, [e, s, O]);
    return (0, i.jsx)(c.Z, {
        compact: g,
        className: l()(f, {
            [p.message]: !0,
            [p.cozyMessage]: !g,
            [p.groupStart]: m,
        }),
        childrenHeader: w,
        childrenMessageContent: (0, d.Z)(e, E),
        disableInteraction: v,
        author: y,
        preview: _,
    });
});
