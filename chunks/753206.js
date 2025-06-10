n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    s = n(120356),
    o = n.n(s),
    a = n(628238),
    l = n(367814),
    c = n(750030),
    u = n(492593),
    d = n(25015),
    p = n(963550),
    f = n(845080),
    g = n(30804);
let b = i.memo(function (e) {
    var t;
    let { message: n, channel: s, compact: b, className: m, isGroupStart: _, hideSimpleEmbedContent: v = !0, disableInteraction: h, previewGuildId: O, preview: y, author: j } = e,
        x = null != O ? O : (0, c.k)(n),
        S = (0, l.Z)(j),
        C = (0, a.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: P } = (0, d.Z)(n, {
            hideSimpleEmbedContent: v,
            allowList: C,
            allowHeading: C,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        w = i.useMemo(() => {
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
        }, [e, s, x]);
    return (0, r.jsx)(u.Z, {
        compact: b,
        className: o()(m, {
            [g.message]: !0,
            [g.cozyMessage]: !b,
            [g.groupStart]: _
        }),
        childrenHeader: w,
        childrenMessageContent: (0, p.Z)(e, P),
        disableInteraction: h,
        authorHasGradientRole: S,
        guildId: x,
        preview: y
    });
});
