r.d(t, { Z: () => p });
var n = r(200651),
    i = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(628238),
    a = r(367814),
    c = r(492593),
    h = r(25015),
    v = r(963550),
    u = r(845080),
    f = r(30804);
let p = i.memo(function (e) {
    var t, r;
    let { message: s, channel: p, compact: d, className: b, isGroupStart: g, hideSimpleEmbedContent: Z = !0, disableInteraction: j, previewGuildId: M, preview: O, author: y } = e,
        m = null != (t = null != M ? M : s.getGuildId()) ? t : void 0,
        H = (0, a.Z)(y),
        x = (0, l.A)((null != (r = s.editedTimestamp) ? r : s.timestamp).valueOf()),
        { content: V } = (0, h.Z)(s, {
            hideSimpleEmbedContent: Z,
            allowList: x,
            allowHeading: x,
            allowLinks: !0,
            previewLinkTarget: !0
        }),
        w = i.useMemo(() => {
            var t, r;
            return (0, u.Z)(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                })
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, e)),
                (r = r =
                    {
                        channel: p,
                        guildId: m
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(r)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                      }),
                t)
            );
        }, [e, p, m]);
    return (0, n.jsx)(c.Z, {
        compact: d,
        className: o()(b, {
            [f.message]: !0,
            [f.cozyMessage]: !d,
            [f.groupStart]: g
        }),
        childrenHeader: w,
        childrenMessageContent: (0, v.Z)(e, V),
        disableInteraction: j,
        authorHasGradientRole: H,
        guildId: m,
        preview: O
    });
});
