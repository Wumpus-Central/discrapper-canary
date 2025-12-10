n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(628238),
    l = n(750030),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    f = n(845080),
    p = n(360514);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    var t;
    let {
            message: n,
            channel: a,
            compact: _,
            className: h,
            isGroupStart: E,
            hideSimpleEmbedContent: b = !0,
            disableInteraction: y,
            previewGuildId: O,
            preview: v,
            author: S,
        } = e,
        I = null != O ? O : (0, l.k)(n),
        T = (0, s.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: C } = (0, u.Z)(n, {
            hideSimpleEmbedContent: b,
            allowList: T,
            allowHeading: T,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        A = i.useMemo(
            () =>
                (0, f.Z)(
                    g(m({}, e), {
                        channel: a,
                        guildId: I,
                    }),
                ),
            [e, a, I],
        );
    return (0, r.jsx)(c.Z, {
        compact: _,
        className: o()(h, {
            [p.message]: !0,
            [p.cozyMessage]: !_,
            [p.groupStart]: E,
        }),
        childrenHeader: A,
        childrenMessageContent: (0, d.Z)(e, C),
        disableInteraction: y,
        author: S,
        preview: v,
    });
}
let b = i.memo(E);
