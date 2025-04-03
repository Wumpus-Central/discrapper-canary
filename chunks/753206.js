r.d(t, { Z: () => u });
var n = r(200651),
    h = r(192379),
    v = r(120356),
    i = r.n(v),
    l = r(628238),
    o = r(367814),
    a = r(739566),
    s = r(492593),
    c = r(25015),
    f = r(963550),
    p = r(845080),
    Z = r(30804);
let u = h.memo(function (e) {
    var t, r, h, v;
    let { message: u, channel: M, compact: d, className: b, isGroupStart: H, hideSimpleEmbedContent: y = !0, disableInteraction: V } = e,
        j = (0, a.ZP)(u),
        O = null != (t = u.getGuildId()) ? t : void 0,
        g = (0, o.Z)(j),
        m = (0, l.A)((null != (r = u.editedTimestamp) ? r : u.timestamp).valueOf()),
        { content: x } = (0, c.Z)(u, {
            hideSimpleEmbedContent: y,
            allowList: m,
            allowHeading: m,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, n.jsx)(s.Z, {
        compact: d,
        className: i()(b, {
            [Z.message]: !0,
            [Z.cozyMessage]: !d,
            [Z.groupStart]: H
        }),
        childrenHeader: (0, p.Z)(
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
                    channel: M,
                    guildId: void 0
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
        childrenMessageContent: (0, f.Z)(e, x),
        disableInteraction: V,
        authorHasGradientRole: g,
        guildId: O
    });
});
