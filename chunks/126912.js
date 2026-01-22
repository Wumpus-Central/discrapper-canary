n.d(t, { A: () => b }), n(747238), n(896048);
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
    f = n(427157),
    p = n(650048),
    g = n(652215),
    m = n(431144),
    A = n(985018),
    x = n(473169);
function _(e, t, n) {
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
            url: g.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
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
                    r = new f.A(n);
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
        return (0, i.jsx)(d.Ay, { children: (0, i.jsx)(d.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: r } = this.props,
            s = A.intl.formatToPlainString(A.t.YDAohB, { category: t });
        return (0, i.jsxs)(d.Ay, {
            children: [
                (0, i.jsx)(d.hE, {
                    className: x.QB,
                    children: A.intl.string(A.t.f6rdLg),
                }),
                (0, i.jsx)(d.tK, { children: s }),
                (0, i.jsx)("div", {
                    className: x.QX,
                    children: (0, i.jsx)(c.Button, {
                        text: A.intl.string(A.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => r(n),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: x.Ot,
                    children: (0, i.jsx)(c.QWc, {
                        text: A.intl.string(A.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => r(g.BVt.SETTINGS("notifications", m.oh)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: r } = this.state;
        if (null != r) {
            let e = m.px.find((e) => e.category === r);
            if (null != e) return this.renderCategorySuccess(r, e.label());
        }
        return (0, i.jsxs)(d.Ay, {
            children: [
                (0, i.jsx)(d.eu, {
                    src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                    size: c._3J.DEPRECATED_SIZE_100,
                    className: x.SX,
                }),
                (0, i.jsx)(d.hE, {
                    className: x.QB,
                    children: A.intl.string(A.t["6U6OMQ"]),
                }),
                (0, i.jsx)(d.tK, { children: A.intl.string(A.t["yaDJ4/"]) }),
                (0, i.jsx)("div", {
                    className: x.eT,
                    children: (0, i.jsx)(c.Button, {
                        text: A.intl.string(A.t.fIv16B),
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
                    className: x.SX,
                }),
                (0, i.jsx)(d.hE, {
                    className: x.QB,
                    children: A.intl.string(A.t.ox9hIS),
                }),
                (0, i.jsx)(d.tK, { children: A.intl.string(A.t["/dcuR5"]) }),
                (0, i.jsx)("div", {
                    className: x.eT,
                    children: (0, i.jsx)(c.Button, {
                        text: A.intl.string(A.t.fIv16B),
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
            _(this, "state", {
                busy: !0,
                success: !1,
                user: null,
                category: null,
            });
    }
}
_(E, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let b = a.Ay.connectStores([p.A], () => ({ defaultRoute: p.A.defaultRoute }))(E);
