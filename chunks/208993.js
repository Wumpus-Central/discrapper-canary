r.d(t, {
    A: () => u,
});
var n = r(627968);
r(64700);
var l = r(397927),
    c = r(283900),
    s = r(475833),
    a = r(842130),
    i = r(985018),
    o = r(195357);
let d = (e) => {
    var t, r;
    let { children: c, className: s } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                c = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
                return c;
            }
            if (
                ((c = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        c = Object.getOwnPropertyNames(e);
                    for (n = 0; n < c.length; n++)
                        (r = c[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (c[n] = e[n]);
            return c;
        })(e, ["children", "className"]);
    return (0, n.jsx)(
        l.EOs,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                "data-migration-pending": !0,
                className: s,
            },
            a,
        )),
        (r = r =
            {
                parentComponent: "FamilyCenterCommonModal",
                children: c,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
};
(d.ButtonFooter = (e) => {
    let { children: t } = e;
    return (0, n.jsx)("div", {
        className: o.qr,
        children: t,
    });
}),
    (d.Header = (e) => {
        let { icon: t, currentUser: r, otherUser: a, header: i } = e;
        return (0, n.jsxs)("div", {
            className: o.wx,
            children: [
                (0, n.jsx)(c.A, {
                    currentUser: r,
                    otherUser: a,
                    children: t,
                }),
                (0, n.jsxs)("div", {
                    className: o.R_,
                    children: [
                        (0, n.jsx)(l.Heading, {
                            variant: "text-lg/bold",
                            children: i,
                        }),
                        (0, n.jsx)(s.A, {
                            user: a,
                        }),
                    ],
                }),
            ],
        });
    }),
    (d.Content = (e) => {
        let { children: t } = e;
        return (0, n.jsx)("div", {
            className: o.Qs,
            children: t,
        });
    }),
    (d.Notice = (e) => {
        let { notice: t } = e;
        return (0, n.jsxs)("div", {
            className: o.lm,
            children: [
                (0, n.jsx)(l.Text, {
                    variant: "eyebrow",
                    color: "text-strong",
                    children: i.intl.string(a.default.cXgKMD),
                }),
                (0, n.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: t,
                }),
            ],
        });
    });
let u = d;
