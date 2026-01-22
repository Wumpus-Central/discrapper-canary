n.d(t, {
    A: () => b,
    e: () => u,
});
var r,
    i = n(311907),
    a = n(73153);

function s(e, t, n) {
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

function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}

function l(e, t) {
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

function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var u = (function (e) {
    return (
        (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        (e[(e.FAILED = 3)] = "FAILED"),
        e
    );
})({});
let d = {},
    f = {};

function p() {
    (d = {}), (f = {});
}

function _(e) {
    let { threadId: t } = e;
    f[t] = 1;
}

function h(e) {
    let { threadId: t, mediaPostEmbed: n } = e;
    (d = c(o({}, d), {
        [t]: n,
    })),
        (f[t] = 2);
}

function m(e) {
    let { threadId: t } = e;
    f[t] = 3;
}

function g(e) {
    e.isSwitchingAccount || ((d = {}), (f = {}));
}
class E extends (r = i.Ay.Store) {
    getMediaPostEmbed(e) {
        if (null != e) return d[e];
    }
    getEmbedFetchState(e) {
        var t;
        return null != (t = f[e]) ? t : 0;
    }
    getMediaPostEmbeds() {
        return d;
    }
}
s(E, "displayName", "MediaPostEmbedStore");
let b = new E(a.h, {
    CONNECTION_OPEN: p,
    MEDIA_POST_EMBED_FETCH: _,
    MEDIA_POST_EMBED_FETCH_SUCCESS: h,
    MEDIA_POST_EMBED_FETCH_FAILURE: m,
    LOGOUT: g,
});
