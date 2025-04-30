n.d(t, { Z: () => b });
var r = n(200651),
    s = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(628238),
    a = n(367814),
    c = n(750030),
    u = n(492593),
    d = n(25015),
    f = n(963550),
    p = n(845080),
    g = n(30804);
let b = s.memo(function (e) {
    var t;
    let { message: n, channel: i, compact: b, className: m, isGroupStart: v, hideSimpleEmbedContent: h = !0, disableInteraction: O, previewGuildId: _, preview: j, author: y } = e,
        x = null != _ ? _ : (0, c.k)(n),
        S = (0, a.Z)(y),
        C = (0, l.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: E } = (0, d.Z)(n, {
            hideSimpleEmbedContent: h,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        P = s.useMemo(() => {
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
                        channel: i,
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
        }, [e, i, x]);
    return (0, r.jsx)(u.Z, {
        compact: b,
        className: o()(m, {
            [g.message]: !0,
            [g.cozyMessage]: !b,
            [g.groupStart]: v
        }),
        childrenHeader: P,
        childrenMessageContent: (0, f.Z)(e, E),
        disableInteraction: O,
        authorHasGradientRole: S,
        guildId: x,
        preview: j
    });
});
