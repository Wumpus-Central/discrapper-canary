n.d(t, { Z: () => g }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(82659),
    a = n(481060),
    s = n(153867),
    l = n(740492),
    c = n(388032);
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
function _(e, t) {
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
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = h(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function m(e) {
    var { onConfirm: t, onCancel: n } = e,
        l = p(e, ["onConfirm", "onCancel"]);
    let [u, f] = i.useState(!1);
    i.useEffect(
        () => () => {
            u && s.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 });
        },
        [u],
    );
    let h = () => {
            null == n || n(), l.onClose();
        },
        m = () => {
            t(), l.onClose();
        };
    return (0, r.jsx)(
        o.Modal,
        _(d({}, l), {
            size: "md",
            title: c.intl.string(c.t.ye21jI),
            subtitle: c.intl.string(c.t.hbagWF),
            actions: [
                {
                    text: c.intl.string(c.t.B8pz39),
                    onClick: h,
                    variant: "secondary",
                },
                {
                    text: c.intl.string(c.t.makWn5),
                    onClick: m,
                    variant: "primary",
                },
            ],
            actionBarInput: (0, r.jsx)(a.XZJ, {
                value: u,
                onChange: (e, t) => f(t),
                type: a.XZJ.Types.DEFAULT,
                children: (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-secondary",
                    children: c.intl.string(c.t.wGAwOT),
                }),
            }),
        }),
    );
}
function g(e) {
    let { onConfirm: t, onCancel: n, usesPopoutContext: i = !1 } = e;
    l.ZP.disableEmbeddedActivityPopOutAlert
        ? t()
        : (0, a.h7j)(
              (e) =>
                  (0, r.jsx)(
                      m,
                      _(d({}, e), {
                          onConfirm: t,
                          onCancel: n,
                      }),
                  ),
              {},
              i ? a.u1M : void 0,
          );
}
