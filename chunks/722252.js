n.d(t, { Z: () => b }), n(415506), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(149765),
    a = n(681715),
    o = n(481060),
    s = n(208884),
    c = n(453628),
    d = n(996987),
    u = n(156415);
class m extends r.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return l.e$(t, e) ? c.y.ALLOW : l.e$(n, e) ? c.y.DENY : c.y.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return l.e$(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, i.jsx)(a.u, {
            text: e,
            position: "top",
            children: (0, i.jsx)("span", {
                children: (0, i.jsx)(o.t6m, {
                    size: "sm",
                    color: "currentColor",
                    className: u.icon,
                }),
            }),
        });
    }
    renderComponent(e, t) {
        let { title: n, description: r, flag: l } = e,
            { permissions: a, locked: c, permissionRender: u, hasBypassSlowmodePermission: m, guildId: b } = this.props,
            p = null == u ? void 0 : u(l),
            g = !!(c || p),
            f = "string" == typeof p && "" !== p ? o.t6m : void 0,
            h =
                null == a
                    ? (0, i.jsx)(
                          d.Z,
                          {
                              label: n,
                              description: (0, s._u)(r),
                              icon: f,
                              disabled: g,
                              value: this.getOverwriteValue(l),
                              onChange: (e) => this.handleChange(l, e),
                          },
                          String(l),
                      )
                    : (0, i.jsx)(
                          o.rsf,
                          {
                              label: n,
                              description: (0, s._u)(r),
                              icon: f,
                              disabled: g,
                              checked: this.getPermissionValue(l, a),
                              onChange: (e) => this.handleChange(l, e),
                          },
                          String(l),
                      ),
            x = (0, s.ih)(l, m, b);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                t > 0 && (0, i.jsx)(o.izJ, {}),
                (0, i.jsxs)(o.Kqy, {
                    gap: 8,
                    children: [
                        h,
                        null != x &&
                            (0, i.jsx)(o.Wn, {
                                messageType: o.QYI.WARNING,
                                children: x,
                            }),
                        "string" == typeof p &&
                            "" !== p &&
                            (0, i.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "text-feedback-critical",
                                children: p,
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
            children: (0, i.jsx)(o.C3N, {
                label: t.title,
                description: null != (e = (0, s._u)(t.description)) ? e : void 0,
                children: t.permissions.map(this.renderComponent, this),
            }),
        });
    }
}
let b = m;
