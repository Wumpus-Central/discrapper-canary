n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(628238),
    a = n(750030),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    f = n(845080),
    p = n(30804);
let g = i.memo(function (e) {
    var t;
    let { message: n, channel: l, compact: g, className: m, isGroupStart: b, hideSimpleEmbedContent: h = !0, disableInteraction: v, previewGuildId: O, preview: y, author: E } = e,
        S = null != O ? O : (0, a.k)(n),
        j = (0, o.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: C } = (0, u.Z)(n, {
            hideSimpleEmbedContent: h,
            allowList: j,
            allowHeading: j,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        _ = i.useMemo(() => {
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
                        channel: l,
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
        }, [e, l, S]);
    return (0, r.jsx)(c.Z, {
        compact: g,
        className: s()(m, {
            [p.message]: !0,
            [p.cozyMessage]: !g,
            [p.groupStart]: b
        }),
        childrenHeader: _,
        childrenMessageContent: (0, d.Z)(e, C),
        disableInteraction: v,
        author: E,
        preview: y
    });
});
