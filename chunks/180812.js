n.d(t, { default: () => P });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(442433),
    a = n(847767),
    o = n(358367),
    u = n(468389),
    c = n(793574),
    s = n(50268),
    d = n(222311),
    A = n(803664),
    b = n(29293),
    f = n(291247),
    g = n(239211),
    O = n(707378),
    p = n(399476),
    y = n(889460),
    m = n(443439),
    j = n(198229),
    E = n(972432),
    v = n(77544),
    _ = n(652215),
    h = n(985018);
function S(e) {
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
}
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            mediaEngineContext: o,
            onSelect: c,
            onShowProfile: _,
            onWatchStream: S,
            appContext: I,
        } = e,
        D = (0, m.A)({
            onAction: () => {
                null == _ || _();
            },
        }),
        x = (0, O.A)({
            user: t,
            context: I,
        }),
        P = (0, b.A)({
            user: t,
            appContext: I,
        }),
        M = (0, v.A)(t.id, S),
        C = (0, E.A)(t.id),
        w = (0, j.A)(t.id, o),
        T = (0, y.A)({ user: t }),
        N = (0, u.A)(null, t),
        U = (0, A.A)({
            user: t,
            appContext: I,
        }),
        L = (0, g.A)({
            user: t,
            appContext: I,
        }),
        V = (0, p.A)({
            user: t,
            appContext: I,
        }),
        R = (0, s.A)({
            id: t.id,
            label: h.intl.string(h.t["/AXYnE"]),
        }),
        k = (0, d.A)(t),
        G = (0, f.A)(t, n, a),
        B = t.isNonUserBot();
    return (0, r.jsxs)(l.W1t, {
        navId: "user-context",
        onClose: i.Z_,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: c,
        children: [
            !B &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.rXV, { children: k }),
                        (0, r.jsxs)(l.rXV, {
                            children: [D, x, P, M],
                        }),
                        (0, r.jsx)(l.rXV, { children: C }),
                        (0, r.jsx)(l.rXV, { children: N }),
                        (0, r.jsxs)(l.rXV, {
                            children: [w, T, U, V, L],
                        }),
                        (0, r.jsx)(l.rXV, { children: G }),
                    ],
                }),
            (0, r.jsx)(l.rXV, { children: R }),
        ],
    });
}
function x(e) {
    let { user: t, mediaEngineContext: n, onSelect: a, onShowProfile: o, onWatchStream: c, appContext: f } = e,
        _ = (0, m.A)({
            onAction: () => {
                null == o || o();
            },
        }),
        S = (0, O.A)({
            user: t,
            context: f,
        }),
        I = (0, b.A)({
            user: t,
            appContext: f,
        }),
        D = (0, v.A)(t.id, c),
        x = (0, E.A)(t.id),
        P = (0, j.A)(t.id, n),
        M = (0, y.A)({ user: t }),
        C = (0, u.A)(null, t),
        w = (0, A.A)({
            user: t,
            appContext: f,
        }),
        T = (0, g.A)({
            user: t,
            appContext: f,
        }),
        N = (0, p.A)({
            user: t,
            appContext: f,
        }),
        U = (0, s.A)({
            id: t.id,
            label: h.intl.string(h.t["/AXYnE"]),
        }),
        L = (0, d.A)(t),
        V = t.isNonUserBot();
    return (0, r.jsxs)(l.W1t, {
        navId: "user-context",
        onClose: i.Z_,
        "aria-label": h.intl.string(h.t.liqwPJ),
        onSelect: a,
        children: [
            !V &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(l.rXV, { children: L }),
                        (0, r.jsxs)(l.rXV, {
                            children: [_, S, I, D],
                        }),
                        (0, r.jsx)(l.rXV, { children: x }),
                        (0, r.jsx)(l.rXV, { children: C }),
                        (0, r.jsxs)(l.rXV, {
                            children: [P, M, w, N, T],
                        }),
                    ],
                }),
            (0, r.jsx)(l.rXV, { children: U }),
        ],
    });
}
let P = (0, o.A)(
    (0, a.A)(
        function (e) {
            let { guildId: t, channelId: n } = e,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l,
                        i = {};
                    if ("u" > typeof Reflect && Reflect.ownKeys) {
                        for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                            (r = n[l]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (i[r] = e[r]);
                        return i;
                    }
                    if (
                        ((i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                l = {},
                                i = Object.getOwnPropertyNames(e);
                            for (r = 0; r < i.length; r++)
                                (n = i[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (l[n] = e[n]);
                            return l;
                        })(e, t)),
                        Object.getOwnPropertySymbols)
                    )
                        for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                            (r = n[l]),
                                !(t.indexOf(r) >= 0) &&
                                    Object.prototype.propertyIsEnumerable.call(e, r) &&
                                    (i[r] = e[r]);
                    return i;
                })(e, ["guildId", "channelId"]);
            return null != t && null != n
                ? (0, r.jsx)(
                      D,
                      I(S({}, l), {
                          guildId: t,
                          channelId: n,
                      }),
                  )
                : (0, r.jsx)(
                      x,
                      I(S({}, l), {
                          guildId: t,
                          channelId: n,
                      }),
                  );
        },
        { object: _.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.USER_OVERLAY_CONTEXT_MENU],
);
