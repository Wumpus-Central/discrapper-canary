n.d(t, { A: () => w });
var i,
    l = n(477900),
    s = n(582128),
    a = n(136722),
    r = n(866665),
    o = n(428678),
    c = n(243721),
    d = n(404778),
    u = n(331322),
    m = n(834730),
    g = n(270003),
    h = n(225419),
    x = n(503698),
    p = n.n(x),
    A = n(785007),
    f = n(789645),
    b = n(933832),
    j = n(88187),
    N = n(939249),
    E = n(375708),
    C = n(622061),
    v = (((i = {}).DENY = "DENY"), (i.PASSTHROUGH = "PASSTHROUGH"), (i.ALLOW = "ALLOW"), i);
let T = Object.keys(v);
function I(e) {
    let { value: t = "PASSTHROUGH", onChange: n, labelledBy: i, disabled: s = !1, id: a, permissionName: r } = e,
        { ref: o, ...c } = (0, A._u)({ orientation: "horizontal", isDisabled: s, labelledBy: i });
    return (0, l.jsx)("div", {
        className: p()(C.Os, { [C.r9]: s }),
        ref: o,
        id: a,
        ...c,
        children: T.map((e) =>
            (0, l.jsx)(
                S,
                {
                    type: e,
                    isSelected: t === e,
                    permissionName: r,
                    onSelect: (e) => {
                        t === e || s || n(e);
                    },
                },
                e,
            ),
        ),
    });
}
function S(e) {
    let t,
        n,
        i,
        { type: s, onSelect: a, isSelected: r, permissionName: o } = e;
    switch (s) {
        case "DENY":
            (i = E.intl.string(E.t["6639O5"])), (t = f.P), (n = C.Xg);
            break;
        case "ALLOW":
            (i = E.intl.string(E.t.RzDfSk)), (t = b.CheckmarkLargeIcon), (n = C.cw);
            break;
        default:
            (i = E.intl.string(E.t.ujC3ZS)), (t = j.F), (n = C.le);
    }
    let c = null != o ? E.intl.formatToPlainString(E.t.KgPfJx, { permissionName: o, action: i }) : i,
        d = (0, A.Gx)({ isSelected: r, label: c });
    return (0, l.jsx)(N.D, {
        className: p()(C.AS, n, { [C.wH]: r }),
        onClick: () => a(s),
        ...d,
        children: (0, l.jsx)(t, { color: "currentColor", size: "xs" }),
    });
}
I.Types = v;
var y = n(452027);
function k(e) {
    let { value: t, onChange: n, disabled: i, permissionName: s, ...a } = e;
    return (0, l.jsx)(y.D, {
        ...a,
        disabled: i,
        layout: "horizontal",
        children: (e) =>
            (0, l.jsx)(I, {
                value: t,
                onChange: n,
                disabled: i,
                id: e.controlId,
                labelledBy: e.labelId,
                permissionName: s,
            }),
    });
}
I.Types, (k.Types = I.Types);
var O = n(659262);
class L extends s.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return a.zy(t, e) ? v.ALLOW : a.zy(n, e) ? v.DENY : v.PASSTHROUGH;
    }
    getPermissionValue(e, t) {
        return a.zy(t, e);
    }
    handleChange(e, t) {
        let { onChange: n } = this.props;
        n(e, t);
    }
    renderDisabledIndicator(e) {
        return (0, l.jsx)(r.m, {
            text: e,
            position: "top",
            children: (0, l.jsx)("span", {
                children: (0, l.jsx)(o.K, { size: "sm", color: "currentColor", className: O.Kk }),
            }),
        });
    }
    renderComponent(e, t) {
        let { title: n, description: i, flag: s } = e,
            { permissions: a, locked: r, permissionRender: g } = this.props,
            x = g?.(s),
            p = !!(r || x),
            A = "string" == typeof x && "" !== x ? o.K : void 0,
            f =
                null == a
                    ? (0, l.jsx)(
                          k,
                          {
                              label: n,
                              permissionName: n,
                              description: (0, h.Nk)(i),
                              icon: A,
                              disabled: p,
                              value: this.getOverwriteValue(s),
                              onChange: (e) => this.handleChange(s, e),
                          },
                          String(s),
                      )
                    : (0, l.jsx)(
                          c.d,
                          {
                              label: n,
                              description: (0, h.Nk)(i),
                              icon: A,
                              disabled: p,
                              checked: this.getPermissionValue(s, a),
                              onChange: (e) => this.handleChange(s, e),
                          },
                          String(s),
                      );
        return (0, l.jsxs)(l.Fragment, {
            children: [
                t > 0 && (0, l.jsx)(d.c, {}),
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        f,
                        "string" == typeof x &&
                            "" !== x &&
                            (0, l.jsx)(m.E, {
                                variant: "text-xs/medium",
                                color: "text-feedback-critical",
                                children: x,
                            }),
                    ],
                }),
            ],
        });
    }
    render() {
        let { spec: e, className: t } = this.props;
        return (0, l.jsx)("div", {
            className: t,
            children: (0, l.jsx)(g.n, {
                label: e.title,
                description: (0, h.Nk)(e.description) ?? void 0,
                children: e.permissions.map(this.renderComponent, this),
            }),
        });
    }
}
let w = L;
