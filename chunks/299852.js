n.d(t, { Z: () => v }), n(47120);
var i,
    r = n(200651),
    a = n(192379),
    l = n(593473),
    o = n(442837),
    s = n(544891),
    c = n(481060),
    d = n(129293),
    u = n(388905),
    h = n(108427),
    _ = n(598077),
    m = n(896797),
    g = n(981631),
    p = n(930441),
    f = n(388032),
    x = n(483938);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
o.ZP.initialize();
class I extends (i = a.PureComponent) {
    componentDidMount() {
        let e = (0, d.Z)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
        s.tn
            .post({
                url: g.ANM.DISABLE_EMAIL_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    category: t.category,
                    email_type: t.email_type
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) => {
                    let {
                            body: { user: n }
                        } = e,
                        i = new _.Z(n);
                    this.setState({
                        success: !0,
                        busy: !1,
                        user: i,
                        category: t.category
                    });
                },
                () =>
                    this.setState({
                        success: !1,
                        busy: !1
                    })
            ),
            (0, h.e)('disable_email_notifications');
    }
    renderBusy() {
        return (0, r.jsx)(u.ZP, { children: (0, r.jsx)(u.Hh, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: i } = this.props,
            a = f.intl.formatToPlainString(f.t.YDAohI, { category: t });
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Dx, {
                    className: x.marginBottom8,
                    children: f.intl.string(f.t.f6rdLi)
                }),
                (0, r.jsx)(u.DK, { children: a }),
                (0, r.jsx)(u.zx, {
                    className: x.marginTop20,
                    onClick: () => i(n),
                    children: f.intl.string(f.t.fIv16O)
                }),
                (0, r.jsx)(u.zx, {
                    className: x.marginTop8,
                    color: u.zx.Colors.LINK,
                    look: u.zx.Looks.LINK,
                    onClick: () => i(g.Z5c.SETTINGS('notifications', p.vG)),
                    children: f.intl.string(f.t.YYTira)
                })
            ]
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: i } = this.state;
        if (null != i) {
            let e = p.Od.find((e) => e.category === i);
            if (null != e) return this.renderCategorySuccess(i, e.label());
        }
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.qE, {
                    src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                    size: c.EFr.DEPRECATED_SIZE_100,
                    className: x.marginBottom20
                }),
                (0, r.jsx)(u.Dx, {
                    className: x.marginBottom8,
                    children: f.intl.string(f.t['6U6OMT'])
                }),
                (0, r.jsx)(u.DK, { children: f.intl.string(f.t['yaDJ4+']) }),
                (0, r.jsx)(u.zx, {
                    className: x.marginTop40,
                    onClick: () => t(e),
                    children: f.intl.string(f.t.fIv16O)
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(u.ZP, {
            children: [
                (0, r.jsx)(u.Ee, {
                    src: n(105020),
                    className: x.marginBottom20
                }),
                (0, r.jsx)(u.Dx, {
                    className: x.marginBottom8,
                    children: f.intl.string(f.t.ox9hIS)
                }),
                (0, r.jsx)(u.DK, { children: f.intl.string(f.t['/dcuR0']) }),
                (0, r.jsx)(u.zx, {
                    className: x.marginTop40,
                    onClick: () => t(e),
                    children: f.intl.string(f.t.fIv16O)
                })
            ]
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
    constructor(...e) {
        super(...e),
            E(this, 'state', {
                busy: !0,
                success: !1,
                user: null,
                category: null
            });
    }
}
E(I, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let v = o.ZP.connectStores([m.Z], () => ({ defaultRoute: m.Z.defaultRoute }))(I);
