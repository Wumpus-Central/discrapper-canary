n.d(t, {
    A: () => g,
}),
    n(747238);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(517905),
    o = n(763754),
    l = n(888675),
    c = n(985018);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}

function f(e, t) {
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

function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function _(e, t) {
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
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function m(e) {
    let { children: t, messageReference: n, guildName: o } = e,
        l = i.useRef(null);
    if (null == n)
        return (0, r.jsx)(a.MzZ, {
            children: t,
        });
    let { guild_id: c } = n;
    return null == c
        ? (0, r.jsx)(a.MzZ, {
              children: t,
          })
        : (0, r.jsx)(s.A, {
              guildId: c,
              name: o,
              targetElementRef: l,
              children: (e) => {
                  let { "aria-controls": n, "aria-expanded": i } = e,
                      s = _(e, ["aria-controls", "aria-expanded"]);
                  return (0, r.jsx)(
                      a.MzZ,
                      p(d({}, s), {
                          ref: l,
                          children: t,
                      }),
                  );
              },
          });
}

function g(e) {
    let { usernameHook: t, message: i, compact: a } = e,
        { content: s, timestamp: u, messageReference: d } = i,
        f = (0, o.Ay)(i),
        p = t(f),
        _ = (null != s ? s : "").split(" ").slice(0, -1).join(" "),
        h = c.intl.format(c.t["47CZc2"], {
            username: f.nick,
            usernameHook: p,
            webhookName: s,
            webhookNameHook: (e, t) =>
                (0, r.jsx)(
                    m,
                    {
                        messageReference: d,
                        guildName: _,
                        children: e,
                    },
                    t,
                ),
        });
    return (0, r.jsx)(l.A, {
        icon: n(394803),
        timestamp: u,
        compact: a,
        children: h,
    });
}
