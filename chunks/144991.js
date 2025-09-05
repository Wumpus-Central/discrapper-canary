n.d(t, { Z: () => x }), n(415506), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(149765),
    s = n(28664),
    c = n(481060),
    d = n(208884),
    u = n(453628),
    p = n(996987),
    m = n(231338),
    b = n(388032),
    g = n(557806),
    f = n(197571);
class h extends r.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return o.e$(t, e) ? u.y.ALLOW : o.e$(n, e) ? u.y.DENY : u.y.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return o.e$(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(c.ua7, {
            text: e,
            position: "top",
            color: c.ua7.Colors.RED,
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
                            children: (0, i.jsx)(c.t6m, {
                                size: "sm",
                                color: "currentColor",
                                className: g.icon,
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
        return e === m.Pl.MANAGE_MESSAGES && t
            ? (0, i.jsx)("div", {
                  className: g.accessory,
                  children: (0, i.jsx)(s.u, {
                      asContainer: !0,
                      text: b.intl.string(b.t["2XIdPj"]),
                      children: (0, i.jsx)(c.aNP, { color: c.TVs.colors.STATUS_WARNING }),
                  }),
              })
            : null;
    }
    renderComponent(e) {
        var t;
        let { title: n, description: r, helpdeskArticleId: l, flag: o } = e,
            { permissions: s, locked: u, permissionRender: m } = this.props,
            b = null != (t = this.props.inPinPermissionExperiment) && t,
            f = null == m ? void 0 : m(o),
            h = !!(u || f),
            x = "string" == typeof f ? this.renderDisabledIndicator(f) : null,
            j = a()({ [g.title]: null != x });
        return null == s
            ? (0, i.jsxs)(
                  p.Z,
                  {
                      disabled: h,
                      value: this.getOverwriteValue(o),
                      onChange: (e) => this.handleChange(o, e),
                      note: (0, d._u)(r),
                      helpdeskArticleId: l,
                      children: [
                          x,
                          (0, i.jsx)("span", {
                              className: j,
                              children: n,
                          }),
                          this.renderTitleAccessory(o, b),
                      ],
                  },
                  String(o),
              )
            : (0, i.jsxs)(
                  c.j7V,
                  {
                      disabled: h,
                      value: this.getPermissionValue(o, s),
                      onChange: (e) => this.handleChange(o, e),
                      note: (0, d._u)(r),
                      children: [
                          x,
                          (0, i.jsx)("span", {
                              className: j,
                              children: n,
                          }),
                          this.renderTitleAccessory(o, b),
                      ],
                  },
                  String(o),
              );
    }
    render() {
        let { spec: e, className: t } = this.props;
        return (0, i.jsx)(c.hjN, {
            className: t,
            children: (0, i.jsxs)(c.y5t, {
                component: (0, i.jsx)(c.vwX, {
                    tag: c.RB0.H5,
                    className: null != e.description ? f.marginBottom8 : f.marginBottom20,
                    children: e.title,
                }),
                children: [
                    null != e.description &&
                        (0, i.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: f.marginBottom20,
                            children: e.description,
                        }),
                    e.permissions.map(this.renderComponent, this),
                ],
            }),
        });
    }
}
let x = h;
