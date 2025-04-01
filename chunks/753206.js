n.d(t, { Z: () => g });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    l = n.n(o),
    a = n(628238),
    s = n(367814),
    u = n(739566),
    c = n(492593),
    d = n(25015),
    p = n(963550),
    f = n(845080),
    v = n(649547);
let g = i.memo(function (e) {
    var t, n, i, o;
    let { message: g, channel: m, compact: b, className: y, isGroupStart: h, hideSimpleEmbedContent: O = !0, disableInteraction: _ } = e,
        j = (0, u.ZP)(g),
        S = null !== (t = g.getGuildId()) && void 0 !== t ? t : void 0,
        E = (0, s.Z)(j),
        w = (0, a.A)((null !== (n = g.editedTimestamp) && void 0 !== n ? n : g.timestamp).valueOf()),
        { content: N } = (0, d.Z)(g, {
            hideSimpleEmbedContent: O,
            allowList: w,
            allowHeading: w,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, r.jsx)(c.Z, {
        compact: b,
        className: l()(y, {
            [v.message]: !0,
            [v.cozyMessage]: !b,
            [v.groupStart]: h
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
            (o = o =
                {
                    channel: m,
                    guildId: void 0
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(o)).forEach(function (e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                  }),
            i)
        ),
        childrenMessageContent: (0, p.Z)(e, N),
        disableInteraction: _,
        authorHasGradientRole: E,
        guildId: S
    });
});
