n.d(t, { A: () => k });
var i,
    l = n(627968),
    s = n(64700),
    a = n(136722),
    r = n(990078),
    o = n(428678),
    d = n(243721),
    c = n(404778),
    u = n(331322),
    m = n(834730),
    g = n(270003),
    h = n(225419),
    x = n(503698),
    p = n.n(x),
    A = n(785007),
    b = n(789645),
    f = n(933832),
    _ = n(88187),
    j = n(939249),
    N = n(985018),
    v = n(384808),
    E = (((i = {}).DENY = "DENY"), (i.PASSTHROUGH = "PASSTHROUGH"), (i.ALLOW = "ALLOW"), i);
let C = Object.keys(E);
function I(e) {
    let { value: t = "PASSTHROUGH", onChange: n, labelledBy: i, disabled: s = !1, id: a } = e,
        { ref: r, ...o } = (0, A._u)({ orientation: "horizontal", isDisabled: s, labelledBy: i });
    return (0, l.jsx)("div", {
        className: p()(v.Os, { [v.r9]: s }),
        ref: r,
        id: a,
        ...o,
        children: C.map((e) =>
            (0, l.jsx)(
                T,
                {
                    type: e,
                    isSelected: t === e,
                    onSelect: (e) => {
                        t === e || s || n(e);
                    },
                },
                e,
            ),
        ),
    });
}
function T(e) {
    let t,
        n,
        i,
        { type: s, onSelect: a, isSelected: r } = e;
    switch (s) {
        case "DENY":
            (i = N.intl.string(N.t["6639O5"])), (t = b.P), (n = v.Xg);
            break;
        case "ALLOW":
            (i = N.intl.string(N.t.RzDfSk)), (t = f.A), (n = v.cw);
            break;
        default:
            (i = N.intl.string(N.t.ujC3ZS)), (t = _.F), (n = v.le);
    }
    let o = (0, A.Gx)({ isSelected: r, label: i });
    return (0, l.jsx)(j.D, {
        className: p()(v.AS, n, { [v.wH]: r }),
        onClick: () => a(s),
        ...o,
        children: (0, l.jsx)(t, { color: "currentColor", size: "xs" }),
    });
}
I.Types = E;
var S = n(452027);
function y(e) {
    let { value: t, onChange: n, disabled: i, ...s } = e;
    return (0, l.jsx)(S.D, {
        ...s,
        disabled: i,
        layout: "horizontal",
        children: (e) => (0, l.jsx)(I, { value: t, onChange: n, disabled: i, id: e.controlId }),
    });
}
I.Types, (y.Types = I.Types);
var w = n(492289);
class O extends s.PureComponent {
    getOverwriteValue(e) {
        let { allow: t, deny: n } = this.props;
        if (null == t || null == n) throw Error("PermissionsForm.getOverwriteValue: Invalid allow or deny props");
        return a.zy(t, e) ? E.ALLOW : a.zy(n, e) ? E.DENY : E.PASSTHROUGH;
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
                children: (0, l.jsx)(o.K, { size: "sm", color: "currentColor", className: w.Kk }),
            }),
        });
    }
    renderComponent(e, t) {
        let { title: n, description: i, flag: s } = e,
            { permissions: a, locked: r, permissionRender: g } = this.props,
            x = g?.(s),
            p = !!(r || x),
            A = "string" == typeof x && "" !== x ? o.K : void 0,
            b =
                null == a
                    ? (0, l.jsx)(
                          y,
                          {
                              label: n,
                              description: (0, h.Nk)(i),
                              icon: A,
                              disabled: p,
                              value: this.getOverwriteValue(s),
                              onChange: (e) => this.handleChange(s, e),
                          },
                          String(s),
                      )
                    : (0, l.jsx)(
                          d.d,
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
                t > 0 && (0, l.jsx)(c.c, {}),
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        b,
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
let k = O;
