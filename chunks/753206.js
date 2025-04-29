n.d(t, { Z: () => g });
var r = n(255367),
    s = n(73800),
    i = n(120356),
    o = n.n(i),
    l = n(628238),
    a = n(367814),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    f = n(845080),
    p = n(30804);
let g = s.memo(function (e) {
    var t, n;
    let { message: i, channel: g, compact: b, className: m, isGroupStart: v, hideSimpleEmbedContent: h = !0, disableInteraction: O, previewGuildId: _, preview: j, author: y } = e,
        x = null != (t = null != _ ? _ : i.getGuildId()) ? t : void 0,
        S = (0, a.Z)(y),
        C = (0, l.A)((null != (n = i.editedTimestamp) ? n : i.timestamp).valueOf()),
        { content: E } = (0, u.Z)(i, {
            hideSimpleEmbedContent: h,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        P = s.useMemo(() => {
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
                        channel: g,
                        guildId: x
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
        }, [e, g, x]);
    return (0, r.jsx)(c.Z, {
        compact: b,
        className: o()(m, {
            [p.message]: !0,
            [p.cozyMessage]: !b,
            [p.groupStart]: v
        }),
        childrenHeader: P,
        childrenMessageContent: (0, d.Z)(e, E),
        disableInteraction: O,
        authorHasGradientRole: S,
        guildId: x,
        preview: j
    });
});
