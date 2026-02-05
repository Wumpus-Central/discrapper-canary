"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(311907),
    a = n(562465),
    o = n(397927),
    c = n(396681),
    d = n(854378),
    u = n(210714),
    h = n(427157),
    _ = n(650048),
    p = n(652215),
    g = n(431144),
    m = n(985018),
    f = n(473169);
l.Ay.initialize();
class A extends s.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, c.A)(this.props.location),
            t = (0, r.parse)(this.props.location.search);
        a.Bo.post({
            url: p.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new h.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, u.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, i.jsx)(d.Ay, { children: (0, i.jsx)(d.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: s } = this.props,
            r = m.intl.formatToPlainString(m.t.YDAohB, { category: t });
        return (0, i.jsxs)(d.Ay, {
            children: [
                (0, i.jsx)(d.hE, { className: f.QB, children: m.intl.string(m.t.f6rdLg) }),
                (0, i.jsx)(d.tK, { children: r }),
                (0, i.jsx)("div", {
                    className: f.QX,
                    children: (0, i.jsx)(o.Button, {
                        text: m.intl.string(m.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => s(n),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: f.Ot,
                    children: (0, i.jsx)(o.QWc, {
                        text: m.intl.string(m.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => s(p.BVt.SETTINGS("notifications", "emails")),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: s } = this.state;
        if (null != s) {
            let e = g.px.find((e) => e.category === s);
            if (null != e) return this.renderCategorySuccess(s, e.label());
        }
        return (0, i.jsxs)(d.Ay, {
            children: [
                (0, i.jsx)(d.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: o._3J.DEPRECATED_SIZE_100,
                    className: f.SX,
                }),
                (0, i.jsx)(d.hE, { className: f.QB, children: m.intl.string(m.t["6U6OMQ"]) }),
                (0, i.jsx)(d.tK, { children: m.intl.string(m.t["yaDJ4/"]) }),
                (0, i.jsx)("div", {
                    className: f.eT,
                    children: (0, i.jsx)(o.Button, {
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
                (0, i.jsx)(d._V, { src: n(37772), className: f.SX }),
                (0, i.jsx)(d.hE, { className: f.QB, children: m.intl.string(m.t.ox9hIS) }),
                (0, i.jsx)(d.tK, { children: m.intl.string(m.t["/dcuR5"]) }),
                (0, i.jsx)("div", {
                    className: f.eT,
                    children: (0, i.jsx)(o.Button, {
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
}
let E = l.Ay.connectStores([_.A], () => ({ defaultRoute: _.A.defaultRoute }))(A);
