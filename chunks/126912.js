"use strict";
n.d(t, { A: () => N });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(311907),
    a = n(562465),
    o = n(821609),
    c = n(123292),
    d = n(778712),
    u = n(396681),
    _ = n(854378),
    h = n(210714),
    m = n(718446),
    g = n(427157),
    p = n(650048),
    A = n(652215),
    f = n(431144),
    E = n(355097),
    x = n(985018),
    I = n(818050);
l.Ay.initialize();
class v extends s.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, user: null, category: null };
    componentDidMount() {
        let e = (0, u.A)(this.props.location),
            t = (0, r.parse)(this.props.location.search);
        a.Bo.post({
            url: A.Rsh.DISABLE_EMAIL_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, category: t.category, email_type: t.email_type },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { user: n },
                    } = e,
                    i = new g.A(n);
                this.setState({ success: !0, busy: !1, user: i, category: t.category });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, h.d)("disable_email_notifications");
    }
    renderBusy() {
        return (0, i.jsx)(_.Ay, { children: (0, i.jsx)(_.CK, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: s } = this.props,
            r = x.intl.formatToPlainString(x.t.YDAohB, { category: t });
        return (0, i.jsxs)(_.Ay, {
            children: [
                (0, i.jsx)(_.hE, { className: I.QB, children: x.intl.string(x.t.f6rdLg) }),
                (0, i.jsx)(_.tK, { children: r }),
                (0, i.jsx)("div", {
                    className: I.QX,
                    children: (0, i.jsx)(o.$, { text: x.intl.string(x.t.fIv16B), fullWidth: !0, onClick: () => s(n) }),
                }),
                (0, i.jsx)("div", {
                    className: I.Ot,
                    children: (0, i.jsx)(c.Q, {
                        text: x.intl.string(x.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => s((0, m.settingsPathToRoute)(E.od.NOTIFICATIONS_EMAILS)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: s } = this.state;
        if (null != s) {
            let e = f.px.find((e) => e.category === s);
            if (null != e) return this.renderCategorySuccess(s, e.label());
        }
        return (0, i.jsxs)(_.Ay, {
            children: [
                (0, i.jsx)(_.eu, {
                    src: n?.getAvatarURL(void 0, 100),
                    size: d._3.DEPRECATED_SIZE_100,
                    className: I.SX,
                }),
                (0, i.jsx)(_.hE, { className: I.QB, children: x.intl.string(x.t["6U6OMQ"]) }),
                (0, i.jsx)(_.tK, { children: x.intl.string(x.t["yaDJ4/"]) }),
                (0, i.jsx)("div", {
                    className: I.eT,
                    children: (0, i.jsx)(o.$, { text: x.intl.string(x.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(_.Ay, {
            children: [
                (0, i.jsx)(_._V, { src: n(37772), className: I.SX }),
                (0, i.jsx)(_.hE, { className: I.QB, children: x.intl.string(x.t.ox9hIS) }),
                (0, i.jsx)(_.tK, { children: x.intl.string(x.t["/dcuR5"]) }),
                (0, i.jsx)("div", {
                    className: I.eT,
                    children: (0, i.jsx)(o.$, { text: x.intl.string(x.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let N = l.Ay.connectStores([p.A], () => ({ defaultRoute: p.A.defaultRoute }))(v);
