n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(628238),
    s = n(750030),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    m = n(845080),
    f = n(433869);
let p = i.memo(function (e) {
    var t;
    let {
            message: n,
            channel: a,
            compact: p,
            className: v,
            isGroupStart: h,
            hideSimpleEmbedContent: P = !0,
            disableInteraction: b,
            previewGuildId: g,
            preview: x,
            author: j,
        } = e,
        O = null != g ? g : (0, s.k)(n),
        _ = (0, o.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: w } = (0, u.Z)(n, {
            hideSimpleEmbedContent: P,
            allowList: _,
            allowHeading: _,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        C = i.useMemo(() => {
            var t, n;
            return (0, m.Z)(
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
                        channel: a,
                        guildId: O,
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
        }, [e, a, O]);
    return (0, r.jsx)(c.Z, {
        compact: p,
        className: l()(v, {
            [f.message]: !0,
            [f.cozyMessage]: !p,
            [f.groupStart]: h,
        }),
        childrenHeader: C,
        childrenMessageContent: (0, d.Z)(e, w),
        disableInteraction: b,
        author: j,
        preview: x,
    });
});
