n.d(t, { Z: () => g }), n(411104);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(149765),
    o = n(481060),
    d = n(208884),
    c = n(453628),
    u = n(996987),
    m = n(750728),
    h = n(483938);
class x extends l.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error('PermissionsForm.getOverwriteValue: Invalid allow or deny props');
        return s.e$(t, e) ? c.y.ALLOW : s.e$(n, e) ? c.y.DENY : c.y.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return s.e$(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(o.ua7, {
            text: e,
            position: 'top',
            color: o.ua7.Colors.RED,
            children: (e) =>
                (0, i.jsx)('span', {
                    ...e,
                    children: (0, i.jsx)(o.t6m, {
                        size: 'sm',
                        color: 'currentColor',
                        className: m.icon
                    })
                })
        });
    }
    renderComponent(e) {
        let { title: t, description: n, helpdeskArticleId: l, flag: a } = e,
            { permissions: s, locked: c, permissionRender: h } = this.props,
            x = null == h ? void 0 : h(a),
            g = !!(c || x),
            p = 'string' == typeof x ? this.renderDisabledIndicator(x) : null,
            f = r()({ [m.title]: null != p });
        return null == s
            ? (0, i.jsxs)(
                  u.Z,
                  {
                      disabled: g,
                      value: this.getOverwriteValue(a),
                      onChange: (e) => this.handleChange(a, e),
                      note: (0, d._u)(n),
                      helpdeskArticleId: l,
                      children: [
                          p,
                          (0, i.jsx)('span', {
                              className: f,
                              children: t
                          })
                      ]
                  },
                  String(a)
              )
            : (0, i.jsxs)(
                  o.j7V,
                  {
                      disabled: g,
                      value: this.getPermissionValue(a, s),
                      onChange: (e) => this.handleChange(a, e),
                      note: (0, d._u)(n),
                      children: [
                          p,
                          (0, i.jsx)('span', {
                              className: f,
                              children: t
                          })
                      ]
                  },
                  String(a)
              );
    }
    render() {
        let { spec: e, className: t } = this.props;
        return (0, i.jsx)(o.hjN, {
            className: t,
            children: (0, i.jsxs)(o.y5t, {
                component: (0, i.jsx)(o.vwX, {
                    tag: o.RB0.H5,
                    className: null != e.description ? h.marginBottom8 : h.marginBottom20,
                    children: e.title
                }),
                children: [
                    null != e.description &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            className: h.marginBottom20,
                            children: e.description
                        }),
                    e.permissions.map(this.renderComponent, this)
                ]
            })
        });
    }
}
let g = x;
