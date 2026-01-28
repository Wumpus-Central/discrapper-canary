n.d(t, {
    A: () => v,
}),
    n(747238),
    n(896048);
var r,
    i = n(627968),
    s = n(64700),
    l = n(492462),
    a = n(311907),
    o = n(562465),
    c = n(397927),
    u = n(396681),
    d = n(854378),
    h = n(210714),
    p = n(427157),
    g = n(650048),
    f = n(652215),
    _ = n(431144),
    m = n(985018),
    A = n(473169);

function x(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
a.Ay.initialize();
class E extends (r = s.PureComponent) {
    componentDidMount() {
        let e = (0, u.A)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
        o.Bo.post({
            url: f.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: {
                token: e,
                pixel_uuid: t.hash,
                category: t.category,
                email_type: t.email_type,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    r = new p.A(n);
                this.setState({
                    success: !0,
                    busy: !1,
                    user: r,
                    category: t.category,
                });
            },
            () =>
                this.setState({
                    success: !1,
                    busy: !1,
                }),
        ),
            (0, h.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, i.jsx)(d.Ay, {
            children: (0, i.jsx)(d.CK, {}),
        });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: r } = this.props,
            s = m.intl.formatToPlainString(m.t.YDAohB, {
                category: t,
            });
        return (0, i.jsxs)(d.Ay, {
            children: [
                (0, i.jsx)(d.hE, {
                    className: A.QB,
                    children: m.intl.string(m.t.f6rdLg),
                }),
                (0, i.jsx)(d.tK, {
                    children: s,
                }),
                (0, i.jsx)("div", {
                    className: A.QX,
                    children: (0, i.jsx)(c.Button, {
                        text: m.intl.string(m.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => r(n),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: A.Ot,
                    children: (0, i.jsx)(c.QWc, {
                        text: m.intl.string(m.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => r(f.BVt.SETTINGS("notifications", "emails")),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: r } = this.state;
        if (null != r) {
            let e = _.px.find((e) => e.category === r);
            if (null != e) return this.renderCategorySuccess(r, e.label());
        }
        return (0, i.jsxs)(d.Ay, {
            children: [
                (0, i.jsx)(d.eu, {
                    src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                    size: c._3J.DEPRECATED_SIZE_100,
                    className: A.SX,
                }),
                (0, i.jsx)(d.hE, {
                    className: A.QB,
                    children: m.intl.string(m.t["6U6OMQ"]),
                }),
                (0, i.jsx)(d.tK, {
                    children: m.intl.string(m.t["yaDJ4/"]),
                }),
                (0, i.jsx)("div", {
                    className: A.eT,
                    children: (0, i.jsx)(c.Button, {
                        text: m.intl.string(m.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(d.Ay, {
            children: [
                (0, i.jsx)(d._V, {
                    src: n(37772),
                    className: A.SX,
                }),
                (0, i.jsx)(d.hE, {
                    className: A.QB,
                    children: m.intl.string(m.t.ox9hIS),
                }),
                (0, i.jsx)(d.tK, {
                    children: m.intl.string(m.t["/dcuR5"]),
                }),
                (0, i.jsx)("div", {
                    className: A.eT,
                    children: (0, i.jsx)(c.Button, {
                        text: m.intl.string(m.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
    constructor(...e) {
        super(...e),
            x(this, "state", {
                busy: !0,
                success: !1,
                user: null,
                category: null,
            });
    }
}
x(E, "defaultProps", {
    transitionTo: (e) => n.g.location.assign(e),
});
let v = a.Ay.connectStores([g.A], () => ({
    defaultRoute: g.A.defaultRoute,
}))(E);
