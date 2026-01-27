n.d(t, {
    A: () => p,
}),
    n(938796);
var r = n(627968),
    i = n(665260),
    a = n(397927),
    o = n(735991),
    s = n(287809),
    l = n(957565),
    c = n(342384),
    u = n(652215);

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

function p(e) {
    let { application: t, label: n, onSuccess: d, showIconFirst: p } = e;
    if (__OVERLAY__ || !l.p5 || null == t) return null;
    let _ = s.default.getCurrentUser(),
        h = (0, o.EF)(t);

    function m() {
        var e;
        if (null == t) return;
        let n = (0, i.Lt)(null != (e = t.flags) ? e : 0, u.gfo.EMBEDDED)
            ? (0, c.W)({
                  applicationId: t.id,
                  referrerId: null == _ ? void 0 : _.id,
              })
            : (0, c.V)(
                  f(
                      {
                          id: t.id,
                      },
                      h,
                  ),
              );
        null != n && (0, l.C)(n, d);
    }
    let g = "copy-app-link-".concat(t.id);
    return (0, r.jsx)(
        a.Drp,
        {
            id: g,
            label: n,
            action: m,
            icon: p ? void 0 : a.qYV,
            iconLeft: p ? a.qYV : void 0,
            leadingAccessory: {
                type: "icon",
                icon: a.qYV,
            },
        },
        g,
    );
}
