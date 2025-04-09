r.d(t, { Z: () => Z });
var n = r(200651),
    h = r(192379),
    v = r(120356),
    i = r.n(v),
    l = r(628238),
    o = r(367814),
    a = r(492593),
    s = r(25015),
    c = r(963550),
    f = r(845080),
    p = r(30804);
let Z = h.memo(function (e) {
    var t, r, h, v;
    let { message: Z, channel: u, compact: M, className: d, isGroupStart: b, hideSimpleEmbedContent: H = !0, disableInteraction: y, previewGuildId: V, preview: j, author: O } = e,
        g = null != (t = null != V ? V : Z.getGuildId()) ? t : void 0,
        m = (0, o.Z)(O),
        x = (0, l.A)((null != (r = Z.editedTimestamp) ? r : Z.timestamp).valueOf()),
        { content: w } = (0, s.Z)(Z, {
            hideSimpleEmbedContent: H,
            allowList: x,
            allowHeading: x,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, n.jsx)(a.Z, {
        compact: M,
        className: i()(d, {
            [p.message]: !0,
            [p.cozyMessage]: !M,
            [p.groupStart]: b
        }),
        childrenHeader: (0, f.Z)(
            ((h = (function (e) {
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
            (v = v =
                {
                    channel: u,
                    guildId: g
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(v))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(v)).forEach(function (e) {
                      Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(v, e));
                  }),
            h)
        ),
        childrenMessageContent: (0, c.Z)(e, w),
        disableInteraction: y,
        authorHasGradientRole: m,
        guildId: g,
        preview: j
    });
});
