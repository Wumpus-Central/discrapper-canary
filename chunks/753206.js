n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
    l = n(628238),
    a = n(750030),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    f = n(845080),
    p = n(30804);
let g = i.memo(function (e) {
    var t;
    let { message: n, channel: s, compact: g, className: b, isGroupStart: m, hideSimpleEmbedContent: _ = !0, disableInteraction: h, previewGuildId: v, preview: O, author: y } = e,
        S = null != v ? v : (0, a.k)(n),
        C = (0, l.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: j } = (0, u.Z)(n, {
            hideSimpleEmbedContent: _,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        x = i.useMemo(() => {
            var t, n;
            return (0, f.Z)(
                ((t = (function (e) {
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
                (n = n =
                    {
                        channel: s,
                        guildId: S
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
                t)
            );
        }, [e, s, S]);
    return (0, r.jsx)(c.Z, {
        compact: g,
        className: o()(b, {
            [p.message]: !0,
            [p.cozyMessage]: !g,
            [p.groupStart]: m
        }),
        childrenHeader: x,
        childrenMessageContent: (0, d.Z)(e, j),
        disableInteraction: h,
        author: y,
        preview: O
    });
});
