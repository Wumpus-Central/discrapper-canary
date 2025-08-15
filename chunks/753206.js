n.d(t, { Z: () => g });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    o = n(628238),
    a = n(750030),
    u = n(492593),
    c = n(25015),
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
            isGroupStart: v,
            hideSimpleEmbedContent: m = !0,
            disableInteraction: C,
            previewGuildId: b,
            preview: y,
            author: O,
        } = e,
        S = null != b ? b : (0, a.k)(n),
        E = (0, o.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: _ } = (0, c.Z)(n, {
            hideSimpleEmbedContent: m,
            allowList: E,
            allowHeading: E,
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
                        guildId: S,
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
        }, [e, s, S]);
    return (0, i.jsx)(u.Z, {
        compact: g,
        className: l()(f, {
            [p.message]: !0,
            [p.cozyMessage]: !g,
            [p.groupStart]: v,
        }),
        childrenHeader: w,
        childrenMessageContent: (0, d.Z)(e, _),
        disableInteraction: C,
        author: O,
        preview: y,
    });
});
