n.d(t, { Z: () => g }), n(411104), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(149765),
    s = n(481060),
    c = n(208884),
    d = n(453628),
    u = n(996987),
    p = n(326946),
    m = n(20493);
class b extends i.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error('PermissionsForm.getOverwriteValue: Invalid allow or deny props');
        return a.e$(t, e) ? d.y.ALLOW : a.e$(n, e) ? d.y.DENY : d.y.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return a.e$(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, r.jsx)(s.ua7, {
            text: e,
            position: 'top',
            color: s.ua7.Colors.RED,
            children: (e) => {
                var t, n;
                return (0, r.jsx)(
                    'span',
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            children: (0, r.jsx)(s.t6m, {
                                size: 'sm',
                                color: 'currentColor',
                                className: p.icon
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }
        });
    }
    renderComponent(e) {
        let { title: t, description: n, helpdeskArticleId: i, flag: l } = e,
            { permissions: a, locked: d, permissionRender: m } = this.props,
            b = null == m ? void 0 : m(l),
            g = !!(d || b),
            f = 'string' == typeof b ? this.renderDisabledIndicator(b) : null,
            h = o()({ [p.title]: null != f });
        return null == a
            ? (0, r.jsxs)(
                  u.Z,
                  {
                      disabled: g,
                      value: this.getOverwriteValue(l),
                      onChange: (e) => this.handleChange(l, e),
                      note: (0, c._u)(n),
                      helpdeskArticleId: i,
                      children: [
                          f,
                          (0, r.jsx)('span', {
                              className: h,
                              children: t
                          })
                      ]
                  },
                  String(l)
              )
            : (0, r.jsxs)(
                  s.j7V,
                  {
                      disabled: g,
                      value: this.getPermissionValue(l, a),
                      onChange: (e) => this.handleChange(l, e),
                      note: (0, c._u)(n),
                      children: [
                          f,
                          (0, r.jsx)('span', {
                              className: h,
                              children: t
                          })
                      ]
                  },
                  String(l)
              );
    }
    render() {
        let { spec: e, className: t } = this.props;
        return (0, r.jsx)(s.hjN, {
            className: t,
            children: (0, r.jsxs)(s.y5t, {
                component: (0, r.jsx)(s.vwX, {
                    tag: s.RB0.H5,
                    className: null != e.description ? m.marginBottom8 : m.marginBottom20,
                    children: e.title
                }),
                children: [
                    null != e.description &&
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: m.marginBottom20,
                            children: e.description
                        }),
                    e.permissions.map(this.renderComponent, this)
                ]
            })
        });
    }
}
let g = b;
