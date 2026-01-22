n.d(t, {
    A: () => m,
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(869146),
    o = n(531685),
    l = n(475815),
    c = n(709562),
    u = n(985018);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = _(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function h(e) {
    let { enabled: t } = e,
        n = p(e, ["enabled"]),
        i = t ? u.intl.string(u.t.Z7MyNB) : u.intl.string(u.t.OIDkcp),
        s = t ? a.z7w : a.TM1;
    return (0, r.jsx)(
        c.A,
        f(
            {
                label: i,
                iconComponent: s,
            },
            n,
        ),
    );
}
let m = i.Ay.connectStores([o.A, s.A], (e) => {
    let { node: t, guestWindow: n } = e;
    return {
        enabled: (0, l._U)(t, null == n ? void 0 : n.document),
    };
})(h);
