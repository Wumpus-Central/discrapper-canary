n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    u = n(628238),
    a = n(750030),
    s = n(492593),
    c = n(25015),
    d = n(963550),
    f = n(845080),
    m = n(360514);
let p = i.memo(function (e) {
    var t;
    let {
            message: n,
            channel: l,
            compact: p,
            className: v,
            isGroupStart: g,
            hideSimpleEmbedContent: b = !0,
            disableInteraction: E,
            previewGuildId: O,
            preview: y,
            author: S,
        } = e,
        j = null != O ? O : (0, a.k)(n),
        _ = (0, u.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: h } = (0, c.Z)(n, {
            hideSimpleEmbedContent: b,
            allowList: _,
            allowHeading: _,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        P = i.useMemo(() => {
            var t, n;
            return (0, f.Z)(
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (n = n =
                    {
                        channel: l,
                        guildId: j,
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
                t),
            );
        }, [e, l, j]);
    return (0, r.jsx)(s.Z, {
        compact: p,
        className: o()(v, {
            [m.message]: !0,
            [m.cozyMessage]: !p,
            [m.groupStart]: g,
        }),
        childrenHeader: P,
        childrenMessageContent: (0, d.Z)(e, h),
        disableInteraction: E,
        author: S,
        preview: y,
    });
});
