(n.d(t, { Z: () => h }), n(415506), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(149765),
    s = n(481060),
    c = n(208884),
    d = n(453628),
    u = n(996987),
    p = n(231338),
    m = n(388032),
    b = n(326946),
    g = n(20493);
class f extends i.PureComponent {
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
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (r = r.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                r.forEach(function (t) {
                                    var r;
                                    ((r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = r));
                                }));
                        }
                        return e;
                    })({}, e)),
                    (n = n =
                        {
                            children: (0, r.jsx)(s.t6m, {
                                size: 'sm',
                                color: 'currentColor',
                                className: b.icon
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
    renderTitleAccessory(e, t) {
        return e === p.Pl.MANAGE_MESSAGES && t
            ? (0, r.jsx)(s.DY3, {
                  text: m.intl.string(m.t['2XIdPj']),
                  className: b.accessory,
                  children: (0, r.jsx)(s.aNP, { color: s.TVs.colors.STATUS_WARNING })
              })
            : null;
    }
    renderComponent(e) {
        var t;
        let { title: n, description: i, helpdeskArticleId: l, flag: a } = e,
            { permissions: d, locked: p, permissionRender: m } = this.props,
            g = null != (t = this.props.inPinPermissionExperiment) && t,
            f = null == m ? void 0 : m(a),
            h = !!(p || f),
            x = 'string' == typeof f ? this.renderDisabledIndicator(f) : null,
            j = o()({ [b.title]: null != x });
        return null == d
            ? (0, r.jsxs)(
                  u.Z,
                  {
                      disabled: h,
                      value: this.getOverwriteValue(a),
                      onChange: (e) => this.handleChange(a, e),
                      note: (0, c._u)(i),
                      helpdeskArticleId: l,
                      children: [
                          x,
                          (0, r.jsx)('span', {
                              className: j,
                              children: n
                          }),
                          this.renderTitleAccessory(a, g)
                      ]
                  },
                  String(a)
              )
            : (0, r.jsxs)(
                  s.j7V,
                  {
                      disabled: h,
                      value: this.getPermissionValue(a, d),
                      onChange: (e) => this.handleChange(a, e),
                      note: (0, c._u)(i),
                      children: [
                          x,
                          (0, r.jsx)('span', {
                              className: j,
                              children: n
                          }),
                          this.renderTitleAccessory(a, g)
                      ]
                  },
                  String(a)
              );
    }
    render() {
        let { spec: e, className: t } = this.props;
        return (0, r.jsx)(s.hjN, {
            className: t,
            children: (0, r.jsxs)(s.y5t, {
                component: (0, r.jsx)(s.vwX, {
                    tag: s.RB0.H5,
                    className: null != e.description ? g.marginBottom8 : g.marginBottom20,
                    children: e.title
                }),
                children: [
                    null != e.description &&
                        (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: g.marginBottom20,
                            children: e.description
                        }),
                    e.permissions.map(this.renderComponent, this)
                ]
            })
        });
    }
}
let h = f;
