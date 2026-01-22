n.d(t, {
    A: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(397927),
    o = n(817281),
    l = n(964404),
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
    let { onConfirm: t, onCancel: n } = e,
        l = _(e, ["onConfirm", "onCancel"]),
        [u, f] = i.useState(!1);
    i.useEffect(() => {
        o.Ay.updatedUnsyncedSettings({
            disableEmbeddedActivityPopOutAlert: u,
        });
    }, [u]);
    let h = () => {
            null == n || n(), l.onClose();
        },
        m = () => {
            t(), l.onClose();
        };
    return (0, r.jsx)(
        a.Modal,
        p(d({}, l), {
            size: "md",
            title: c.intl.string(c.t.ye21jI),
            subtitle: c.intl.string(c.t.hbagWD),
            actions: [
                {
                    text: c.intl.string(c.t.B8pz37),
                    onClick: h,
                    variant: "secondary",
                },
                {
                    text: c.intl.string(c.t.makWn9),
                    onClick: m,
                    variant: "primary",
                },
            ],
            actionBarInput: (0, r.jsx)(s.Checkbox, {
                checked: u,
                onChange: (e) => f(e),
                label: c.intl.string(c.t.wGAwOS),
            }),
        }),
    );
}

function g(e) {
    let { onConfirm: t, onCancel: n, usesPopoutContext: i = !1 } = e;
    l.Ay.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, s.qfG)(
              (e) =>
                  (0, r.jsx)(
                      m,
                      p(d({}, e), {
                          onConfirm: t,
                          onCancel: n,
                      }),
                  ),
              {},
              i ? s.KX8 : void 0,
          );
}
