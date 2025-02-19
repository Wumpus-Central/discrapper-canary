n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(628238),
    a = n(492593),
    u = n(25015),
    d = n(963550),
    c = n(845080),
    h = n(656017);
let f = r.memo(function (e) {
    var t, n, r;
    let { message: l, channel: f, compact: p, className: g, isGroupStart: v, hideSimpleEmbedContent: C = !0, disableInteraction: E } = e,
        m = (0, s.A)((null !== (t = l.editedTimestamp) && void 0 !== t ? t : l.timestamp).valueOf()),
        { content: O } = (0, u.Z)(l, {
            hideSimpleEmbedContent: C,
            allowList: m,
            allowHeading: m,
            allowLinks: !0,
            previewLinkTarget: !0
        });
    return (0, i.jsx)(a.Z, {
        compact: p,
        className: o()(g, {
            [h.message]: !0,
            [h.cozyMessage]: !p,
            [h.groupStart]: v
        }),
        childrenHeader: (0, c.Z)(
            ((n = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({}, e)),
            (r = r =
                {
                    channel: f,
                    guildId: void 0
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, i);
                      }
                      return n;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            n)
        ),
        childrenMessageContent: (0, d.Z)(e, O),
        disableInteraction: E
    });
});
