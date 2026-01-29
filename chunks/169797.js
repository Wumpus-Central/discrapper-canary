n.d(t, {
    Jg: () => E,
    cy: () => g,
    oH: () => y,
    s3: () => m,
});
var r = n(627968),
    i = n(64700),
    a = n(158954),
    o = n(500380),
    s = n(518977),
    l = n(683433),
    c = n(996541);

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
    let { gradientColor: t, title: n, headerPillText: l, countryCode: u } = e,
        f = _(e, ["gradientColor", "title", "headerPillText", "countryCode"]),
        h = i.useCallback(
            () =>
                null == u
                    ? null
                    : (0, r.jsx)("img", {
                          alt: "",
                          className: c.bI,
                          src: (0, o.t)(u),
                      }),
            [u],
        ),
        m = i.useMemo(() => {
            if (null != l)
                return {
                    type: {
                        text: l,
                    },
                    variant: "expressive",
                };
        }, [l]);
    return (0, r.jsx)(
        a.rQ0,
        p(d({}, f), {
            badge: m,
            badgePosition: "end",
            gradientColor: t,
            titleTextVariant: "heading-lg/semibold",
            alignCenter: !1,
            title: n,
            subtitle:
                null != u
                    ? {
                          text: (0, s.Gw)((0, s.ni)(u)),
                          leadingIcon: h,
                      }
                    : void 0,
        }),
    );
}

function g(e) {
    let { onBackClick: t, primaryButtonProps: n } = e,
        { onClick: i, text: o, loading: s, disabled: c, icon: u } = n;
    return (0, r.jsx)(a.H7u, {
        leading:
            null != t
                ? (0, r.jsx)(l.A, {
                      onClick: t,
                  })
                : void 0,
        actions: [
            {
                variant: "expressive",
                text: o,
                onClick: i,
                loading: s,
                disabled: c,
                icon: u,
            },
        ],
        actionsFullWidth: !1,
    });
}

function E(e) {
    let { children: t } = e,
        n = _(e, ["children"]);
    return (0, r.jsx)(
        a.dWK,
        p(
            d(
                {
                    size: "md",
                },
                n,
            ),
            {
                children: t,
            },
        ),
    );
}

function y(e) {
    let {
            title: t,
            gradientColor: n = "purple",
            countryCode: i,
            headerPillText: o,
            onBackClick: s,
            primaryButtonProps: l,
            children: c,
        } = e,
        u = _(e, [
            "title",
            "gradientColor",
            "countryCode",
            "headerPillText",
            "onBackClick",
            "primaryButtonProps",
            "children",
        ]);
    return (0, r.jsxs)(
        a.dWK,
        p(d({}, u), {
            children: [
                (0, r.jsx)(m, {
                    gradientColor: n,
                    title: t,
                    countryCode: i,
                    headerPillText: o,
                }),
                (0, r.jsx)(a.cwr, {
                    children: c,
                }),
                (0, r.jsx)(g, {
                    onBackClick: s,
                    primaryButtonProps: l,
                }),
            ],
        }),
    );
}
