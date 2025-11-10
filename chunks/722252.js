n.d(t, { Z: () => p }), n(415506), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(149765),
    a = n(481060),
    o = n(208884),
    s = n(453628),
    c = n(996987),
    d = n(55667);
class u extends r.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return l.e$(t, e) ? s.y.ALLOW : l.e$(n, e) ? s.y.DENY : s.y.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return l.e$(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(a.aML, {
            "data-migration-pending": !0,
            text: e,
            position: "top",
            color: a.aML.Colors.RED,
            children: (e) => {
                var t, n;
                return (0, i.jsx)(
                    "span",
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            children: (0, i.jsx)(a.t6m, {
                                size: "sm",
                                color: "currentColor",
                                className: d.icon,
                            }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t),
                );
            },
        });
    }
    renderComponent(e, t) {
        let { title: n, description: r, flag: l } = e,
            { permissions: s, locked: d, permissionRender: u, hasBypassSlowmodePermission: p } = this.props,
            m = null == u ? void 0 : u(l),
            b = !!(d || m),
            g = "string" == typeof m && "" !== m ? a.t6m : void 0,
            f =
                null == s
                    ? (0, i.jsx)(
                          c.Z,
                          {
                              label: n,
                              description: (0, o._u)(r),
                              icon: g,
                              disabled: b,
                              value: this.getOverwriteValue(l),
                              onChange: (e) => this.handleChange(l, e),
                          },
                          String(l),
                      )
                    : (0, i.jsx)(
                          a.rsf,
                          {
                              label: n,
                              description: (0, o._u)(r),
                              icon: g,
                              disabled: b,
                              checked: this.getPermissionValue(l, s),
                              onChange: (e) => this.handleChange(l, e),
                          },
                          String(l),
                      ),
            h = (0, o.ih)(l, p);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                t > 0 && (0, i.jsx)(a.izJ, {}),
                (0, i.jsxs)(a.Kqy, {
                    gap: 8,
                    children: [
                        f,
                        null != h &&
                            (0, i.jsx)(a.M14, {
                                type: "warning",
                                children: h,
                            }),
                        "string" == typeof m &&
                            "" !== m &&
                            (0, i.jsx)(a.Text, {
                                variant: "text-xs/medium",
                                color: "text-feedback-critical",
                                children: m,
                            }),
                    ],
                }),
            ],
        });
    }
    render() {
        var e;
        let { spec: t, className: n } = this.props;
        return (0, i.jsx)("div", {
            className: n,
            children: (0, i.jsx)(a.C3N, {
                label: t.title,
                description: null != (e = (0, o._u)(t.description)) ? e : void 0,
                children: t.permissions.map(this.renderComponent, this),
            }),
        });
    }
}
let p = u;
