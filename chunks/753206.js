n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(628238),
    l = n(750030),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    p = n(845080),
    f = n(30804);
let g = i.memo(function (e) {
    var t;
    let { message: n, channel: s, compact: g, className: b, isGroupStart: m, hideSimpleEmbedContent: _ = !0, disableInteraction: v, previewGuildId: h, preview: O, author: y } = e,
        j = null != h ? h : (0, l.k)(n),
        x = (0, a.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: S } = (0, u.Z)(n, {
            hideSimpleEmbedContent: _,
            allowList: x,
            allowHeading: x,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        C = i.useMemo(() => {
            var t, n;
            return (0, p.Z)(
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
                        guildId: j
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
        }, [e, s, j]);
    return (0, r.jsx)(c.Z, {
        compact: g,
        className: o()(b, {
            [f.message]: !0,
            [f.cozyMessage]: !g,
            [f.groupStart]: m
        }),
        childrenHeader: C,
        childrenMessageContent: (0, d.Z)(e, S),
        disableInteraction: v,
        author: y,
        preview: O
    });
});
