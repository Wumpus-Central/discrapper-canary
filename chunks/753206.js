n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(628238),
    s = n(367814),
    u = n(492593),
    c = n(25015),
    d = n(963550),
    f = n(845080),
    p = n(30804);
let g = i.memo(function (e) {
    var t, n, i, l;
    let { message: g, channel: v, compact: m, className: b, isGroupStart: h, hideSimpleEmbedContent: O = !0, disableInteraction: y, previewGuildId: j, preview: S, author: E } = e,
        D = null != (t = null != j ? j : g.getGuildId()) ? t : void 0,
        w = (0, s.Z)(E),
        P = (0, a.A)((null != (n = g.editedTimestamp) ? n : g.timestamp).valueOf()),
        { content: _ } = (0, c.Z)(g, {
            hideSimpleEmbedContent: O,
            allowList: P,
            allowHeading: P,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, r.jsx)(u.Z, {
        compact: m,
        className: o()(b, {
            [p.message]: !0,
            [p.cozyMessage]: !m,
            [p.groupStart]: h
        }),
        childrenHeader: (0, f.Z)(
            ((i = (function (e) {
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
            (l = l =
                {
                    channel: v,
                    guildId: D
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            i)
        ),
        childrenMessageContent: (0, d.Z)(e, _),
        disableInteraction: y,
        authorHasGradientRole: w,
        guildId: D,
        preview: S
    });
});
