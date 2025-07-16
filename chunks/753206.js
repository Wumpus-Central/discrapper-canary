n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    s = n(120356),
    l = n.n(s),
    o = n(628238),
    a = n(750030),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    f = n(845080),
    p = n(30804);
let g = i.memo(function (e) {
    var t;
    let { message: n, channel: s, compact: g, className: b, isGroupStart: v, hideSimpleEmbedContent: m = !0, disableInteraction: h, previewGuildId: O, preview: y, author: E } = e,
        j = null != O ? O : (0, a.k)(n),
        S = (0, o.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: x } = (0, u.Z)(n, {
            hideSimpleEmbedContent: m,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        P = i.useMemo(() => {
            var t, n;
            return (0, f.Z)(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
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
        className: l()(b, {
            [p.message]: !0,
            [p.cozyMessage]: !g,
            [p.groupStart]: v
        }),
        childrenHeader: P,
        childrenMessageContent: (0, d.Z)(e, x),
        disableInteraction: h,
        author: E,
        preview: y
    });
});
