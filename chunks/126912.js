"use strict";
n.d(t, { A: () => I });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(311907),
    a = n(562465),
    o = n(397927),
    d = n(396681),
    c = n(854378),
    u = n(210714),
    h = n(718446),
    _ = n(427157),
    p = n(650048),
    g = n(652215),
    m = n(431144),
    A = n(355097),
    f = n(985018),
    E = n(885106);
l.Ay.initialize();
class x extends s.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, d.A)(this.props.location),
            t = (0, r.parse)(this.props.location.search);
        a.Bo.post({
            url: g.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new _.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, u.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, i.jsx)(c.Ay, { children: (0, i.jsx)(c.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: s } = this.props,
            r = f.intl.formatToPlainString(f.t.YDAohB, { category: t });
        return (0, i.jsxs)(c.Ay, {
            children: [
                (0, i.jsx)(c.hE, { className: E.QB, children: f.intl.string(f.t.f6rdLg) }),
                (0, i.jsx)(c.tK, { children: r }),
                (0, i.jsx)("div", {
                    className: E.QX,
                    children: (0, i.jsx)(o.Button, {
                        text: f.intl.string(f.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => s(n),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: E.Ot,
                    children: (0, i.jsx)(o.QWc, {
                        text: f.intl.string(f.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => s((0, h.settingsPathToRoute)(A.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: s } = this.state;
        if (null != s) {
            let e = m.px.find((e) => e.category === s);
            if (null != e) return this.renderCategorySuccess(s, e.label());
        }
        return (0, i.jsxs)(c.Ay, {
            children: [
                (0, i.jsx)(c.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: o._3J.DEPRECATED_SIZE_100,
                    className: E.SX,
                }),
                (0, i.jsx)(c.hE, { className: E.QB, children: f.intl.string(f.t["6U6OMQ"]) }),
                (0, i.jsx)(c.tK, { children: f.intl.string(f.t["yaDJ4/"]) }),
                (0, i.jsx)("div", {
                    className: E.eT,
                    children: (0, i.jsx)(o.Button, {
                        text: f.intl.string(f.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(c.Ay, {
            children: [
                (0, i.jsx)(c._V, { src: n(37772), className: E.SX }),
                (0, i.jsx)(c.hE, { className: E.QB, children: f.intl.string(f.t.ox9hIS) }),
                (0, i.jsx)(c.tK, { children: f.intl.string(f.t["/dcuR5"]) }),
                (0, i.jsx)("div", {
                    className: E.eT,
                    children: (0, i.jsx)(o.Button, {
                        text: f.intl.string(f.t.fIv16B),
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
let I = l.Ay.connectStores([p.A], () => ({ defaultRoute: p.A.defaultRoute }))(x);
