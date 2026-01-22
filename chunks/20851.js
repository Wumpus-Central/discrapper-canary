n.d(t, {
    A: () => b,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(384231),
    l = n(903369),
    c = n(491182),
    u = n(538355),
    d = n(715628),
    f = n(752636),
    p = n(119907);

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
                _(e, t, n[t]);
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
            compact: _,
            className: m,
            isGroupStart: E,
            hideSimpleEmbedContent: b = !0,
            disableInteraction: y,
            previewGuildId: O,
            preview: A,
            author: v,
        } = e,
        S = null != O ? O : (0, l.U)(n),
        I = (0, o.S)((null != (t = n.editedTimestamp) ? t : n.timestamp).valueOf()),
        { content: T } = (0, u.A)(n, {
            hideSimpleEmbedContent: b,
            allowList: I,
            allowHeading: I,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        C = i.useMemo(
            () =>
                (0, f.A)(
                    g(h({}, e), {
                        channel: a,
                        guildId: S,
                    }),
                ),
            [e, a, S],
        );
    return (0, r.jsx)(c.A, {
        compact: _,
        className: s()(m, {
            [p.iU]: !0,
            [p.HJ]: !_,
            [p._A]: E,
        }),
        childrenHeader: C,
        childrenMessageContent: (0, d.A)(e, T),
        disableInteraction: y,
        author: v,
        preview: A,
    });
}
let b = i.memo(E);
