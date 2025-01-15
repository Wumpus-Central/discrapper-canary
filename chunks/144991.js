n(411104);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(149765),
    s = n(481060),
    d = n(208884),
    c = n(453628),
    u = n(996987),
    m = n(527942),
    h = n(275477);
class p extends l.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error('PermissionsForm.getOverwriteValue: Invalid allow or deny props');
        return o.e$(t, e) ? c.y.ALLOW : o.e$(n, e) ? c.y.DENY : c.y.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return o.e$(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(s.Tooltip, {
            text: e,
            position: 'top',
            color: s.Tooltip.Colors.RED,
            children: (e) =>
                (0, i.jsx)('span', {
                    ...e,
                    children: (0, i.jsx)(s.DenyIcon, {
                        size: 'sm',
                        color: 'currentColor',
                        className: m.icon
                    })
                })
        });
    }
    renderComponent(e) {
        let { title: t, description: n, helpdeskArticleId: l, flag: r } = e,
            { permissions: o, locked: c, permissionRender: h } = this.props,
            p = null == h ? void 0 : h(r),
            g = !!(c || p),
            x = 'string' == typeof p ? this.renderDisabledIndicator(p) : null,
            f = a()({ [m.title]: null != x });
        return null == o
            ? (0, i.jsxs)(
                  u.Z,
                  {
                      disabled: g,
                      value: this.getOverwriteValue(r),
                      onChange: (e) => this.handleChange(r, e),
                      note: (0, d._u)(n),
                      helpdeskArticleId: l,
                      children: [
                          x,
                          (0, i.jsx)('span', {
                              className: f,
                              children: t
                          })
                      ]
                  },
                  String(r)
              )
            : (0, i.jsxs)(
                  s.FormSwitch,
                  {
                      disabled: g,
                      value: this.getPermissionValue(r, o),
                      onChange: (e) => this.handleChange(r, e),
                      note: (0, d._u)(n),
                      children: [
                          x,
                          (0, i.jsx)('span', {
                              className: f,
                              children: t
                          })
                      ]
                  },
                  String(r)
              );
    }
    render() {
        let { spec: e, className: t } = this.props;
        return (0, i.jsx)(s.FormSection, {
            className: t,
            children: (0, i.jsxs)(s.HeadingLevel, {
                component: (0, i.jsx)(s.FormTitle, {
                    tag: s.FormTitleTags.H5,
                    className: null != e.description ? h.marginBottom8 : h.marginBottom20,
                    children: e.title
                }),
                children: [
                    null != e.description &&
                        (0, i.jsx)(s.Text, {
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
t.Z = p;
