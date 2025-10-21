n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(628238),
    l = n(750030),
    c = n(492593),
    u = n(25015),
    d = n(963550),
    f = n(845080),
    _ = n(5898);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
            : m(Object(t)).forEach(function (n) {
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
            compact: p,
            className: m,
            isGroupStart: E,
            hideSimpleEmbedContent: b = !0,
            disableInteraction: y,
            previewGuildId: O,
            preview: v,
            author: I,
        } = e,
        T = null != O ? O : (0, l.k)(n),
        S = (0, s.A)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: A } = (0, u.Z)(n, {
            hideSimpleEmbedContent: b,
            allowList: S,
            allowHeading: S,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        C = i.useMemo(
            () =>
                (0, f.Z)(
                    g(h({}, e), {
                        channel: a,
                        guildId: T,
                    }),
                ),
            [e, a, T],
        );
    return (0, r.jsx)(c.Z, {
        compact: p,
        className: o()(m, {
            [_.message]: !0,
            [_.cozyMessage]: !p,
            [_.groupStart]: E,
        }),
        childrenHeader: C,
        childrenMessageContent: (0, d.Z)(e, A),
        disableInteraction: y,
        author: I,
        preview: v,
    });
}
let b = i.memo(E);
