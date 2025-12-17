n.d(t, { Z: () => b }), n(35282), n(388685);
var r,
    i = n(54381),
    s = n(473749),
    a = n(593473),
    l = n(442837),
    o = n(544891),
    c = n(481060),
    u = n(129293),
    d = n(388905),
    h = n(108427),
    f = n(598077),
    g = n(896797),
    m = n(981631),
    p = n(930441),
    x = n(388032),
    _ = n(478411);
function E(e, t, n) {
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
l.ZP.initialize();
class v extends (r = s.PureComponent) {
    componentDidMount() {
        let e = (0, u.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        o.tn
            .post({
                url: m.ANM.DISABLE_EMAIL_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    category: t.category,
                    email_type: t.email_type,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (e) => {
                    let {
                            body: { user: n },
                        } = e,
                        r = new f.Z(n);
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
            (0, h.e)("disable_email_notifications");
    }
    renderBusy() {
        return (0, i.jsx)(d.ZP, { children: (0, i.jsx)(d.Hh, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: r } = this.props,
            s = x.intl.formatToPlainString(x.t.YDAohB, { category: t });
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Dx, {
                    className: _.marginBottom8,
                    children: x.intl.string(x.t.f6rdLg),
                }),
                (0, i.jsx)(d.DK, { children: s }),
                (0, i.jsx)("div", {
                    className: _.marginTop20,
                    children: (0, i.jsx)(c.Button, {
                        text: x.intl.string(x.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => r(n),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: _.marginTop8,
                    children: (0, i.jsx)(c.Avr, {
                        text: x.intl.string(x.t.YYTirT),
                        textVariant: "text-sm/normal",
                        onClick: () => r(m.Z5c.SETTINGS("notifications", p.vG)),
                    }),
                }),
            ],
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: r } = this.state;
        if (null != r) {
            let e = p.Od.find((e) => e.category === r);
            if (null != e) return this.renderCategorySuccess(r, e.label());
        }
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.qE, {
                    src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                    size: c.EFr.DEPRECATED_SIZE_100,
                    className: _.marginBottom20,
                }),
                (0, i.jsx)(d.Dx, {
                    className: _.marginBottom8,
                    children: x.intl.string(x.t["6U6OMQ"]),
                }),
                (0, i.jsx)(d.DK, { children: x.intl.string(x.t["yaDJ4/"]) }),
                (0, i.jsx)("div", {
                    className: _.marginTop40,
                    children: (0, i.jsx)(c.Button, {
                        text: x.intl.string(x.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Ee, {
                    src: n(105020),
                    className: _.marginBottom20,
                }),
                (0, i.jsx)(d.Dx, {
                    className: _.marginBottom8,
                    children: x.intl.string(x.t.ox9hIS),
                }),
                (0, i.jsx)(d.DK, { children: x.intl.string(x.t["/dcuR5"]) }),
                (0, i.jsx)("div", {
                    className: _.marginTop40,
                    children: (0, i.jsx)(c.Button, {
                        text: x.intl.string(x.t.fIv16B),
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
            E(this, "state", {
                busy: !0,
                success: !1,
                user: null,
                category: null,
            });
    }
}
E(v, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let b = l.ZP.connectStores([g.Z], () => ({ defaultRoute: g.Z.defaultRoute }))(v);
