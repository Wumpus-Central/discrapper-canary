n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(628238),
    a = n(367814),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    f = n(845080),
    p = n(30804);
let g = i.memo(function (e) {
    var t, n;
    let { message: s, channel: g, compact: b, className: m, isGroupStart: h, hideSimpleEmbedContent: v = !0, disableInteraction: _, previewGuildId: O, preview: y, author: j } = e,
        x = null != (t = null != O ? O : s.getGuildId()) ? t : void 0,
        C = (0, a.Z)(j),
        S = (0, l.A)((null != (n = s.editedTimestamp) ? n : s.timestamp).valueOf()),
        { content: P } = (0, u.Z)(s, {
            hideSimpleEmbedContent: v,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        E = i.useMemo(() => {
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
            [p.groupStart]: h
        }),
        childrenHeader: E,
        childrenMessageContent: (0, d.Z)(e, P),
        disableInteraction: _,
        authorHasGradientRole: C,
        guildId: x,
        preview: y
    });
});
