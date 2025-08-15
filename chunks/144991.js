n.d(t, { Z: () => h }), n(415506), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(149765),
    s = n(481060),
    c = n(208884),
    d = n(453628),
    u = n(996987),
    p = n(231338),
    m = n(388032),
    b = n(557806),
    g = n(197571);
class f extends r.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return o.e$(t, e) ? d.y.ALLOW : o.e$(n, e) ? d.y.DENY : d.y.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return o.e$(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(s.ua7, {
            text: e,
            position: "top",
            color: s.ua7.Colors.RED,
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
                            children: (0, i.jsx)(s.t6m, {
                                size: "sm",
                                color: "currentColor",
                                className: b.icon,
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
    renderTitleAccessory(e, t) {
        return e === p.Pl.MANAGE_MESSAGES && t
            ? (0, i.jsx)(s.DY3, {
                  text: m.intl.string(m.t["2XIdPj"]),
                  className: b.accessory,
                  children: (0, i.jsx)(s.aNP, { color: s.TVs.colors.STATUS_WARNING }),
              })
            : null;
    }
    renderComponent(e) {
        var t;
        let { title: n, description: r, helpdeskArticleId: l, flag: o } = e,
            { permissions: d, locked: p, permissionRender: m } = this.props,
            g = null != (t = this.props.inPinPermissionExperiment) && t,
            f = null == m ? void 0 : m(o),
            h = !!(p || f),
            x = "string" == typeof f ? this.renderDisabledIndicator(f) : null,
            j = a()({ [b.title]: null != x });
        return null == d
            ? (0, i.jsxs)(
                  u.Z,
                  {
                      disabled: h,
                      value: this.getOverwriteValue(o),
                      onChange: (e) => this.handleChange(o, e),
                      note: (0, c._u)(r),
                      helpdeskArticleId: l,
                      children: [
                          x,
                          (0, i.jsx)("span", {
                              className: j,
                              children: n,
                          }),
                          this.renderTitleAccessory(o, g),
                      ],
                  },
                  String(o),
              )
            : (0, i.jsxs)(
                  s.j7V,
                  {
                      disabled: h,
                      value: this.getPermissionValue(o, d),
                      onChange: (e) => this.handleChange(o, e),
                      note: (0, c._u)(r),
                      children: [
                          x,
                          (0, i.jsx)("span", {
                              className: j,
                              children: n,
                          }),
                          this.renderTitleAccessory(o, g),
                      ],
                  },
                  String(o),
              );
    }
    render() {
        let { spec: e, className: t } = this.props;
        return (0, i.jsx)(s.hjN, {
            className: t,
            children: (0, i.jsxs)(s.y5t, {
                component: (0, i.jsx)(s.vwX, {
                    tag: s.RB0.H5,
                    className: null != e.description ? g.marginBottom8 : g.marginBottom20,
                    children: e.title,
                }),
                children: [
                    null != e.description &&
                        (0, i.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: g.marginBottom20,
                            children: e.description,
                        }),
                    e.permissions.map(this.renderComponent, this),
                ],
            }),
        });
    }
}
let h = f;
