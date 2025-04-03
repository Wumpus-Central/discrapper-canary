n.d(t, { Z: () => v }), n(301563), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(593473),
    l = n(442837),
    s = n(544891),
    c = n(481060),
    u = n(129293),
    d = n(388905),
    p = n(108427),
    g = n(598077),
    h = n(896797),
    f = n(981631),
    m = n(930441),
    _ = n(388032),
    b = n(20493);
function x(e, t, n) {
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
l.ZP.initialize();
class N extends (r = o.PureComponent) {
    componentDidMount() {
        let e = (0, u.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        s.tn
            .post({
                url: f.ANM.DISABLE_EMAIL_NOTIFICATIONS,
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
                        r = new g.Z(n);
                    this.setState({
                        success: !0,
                        busy: !1,
                        user: r,
                        category: t.category
                    });
                },
                () =>
                    this.setState({
                        success: !1,
                        busy: !1
                    })
            ),
            (0, p.e)('disable_email_notifications');
    }
    renderBusy() {
        return (0, i.jsx)(d.ZP, { children: (0, i.jsx)(d.Hh, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: r } = this.props,
            o = _.NW.formatToPlainString(_.t.YDAohI, { category: t });
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Dx, {
                    className: b.marginBottom8,
                    children: _.NW.string(_.t.f6rdLi)
                }),
                (0, i.jsx)(d.DK, { children: o }),
                (0, i.jsx)(d.zx, {
                    className: b.marginTop20,
                    onClick: () => r(n),
                    children: _.NW.string(_.t.fIv16O)
                }),
                (0, i.jsx)(d.zx, {
                    className: b.marginTop8,
                    color: d.zx.Colors.LINK,
                    look: d.zx.Looks.LINK,
                    onClick: () => r(f.Z5c.SETTINGS('notifications', m.vG)),
                    children: _.NW.string(_.t.YYTira)
                })
            ]
        });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { user: n, category: r } = this.state;
        if (null != r) {
            let e = m.Od.find((e) => e.category === r);
            if (null != e) return this.renderCategorySuccess(r, e.label());
        }
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.qE, {
                    src: null == n ? void 0 : n.getAvatarURL(void 0, 100),
                    size: c.EFr.DEPRECATED_SIZE_100,
                    className: b.marginBottom20
                }),
                (0, i.jsx)(d.Dx, {
                    className: b.marginBottom8,
                    children: _.NW.string(_.t['6U6OMT'])
                }),
                (0, i.jsx)(d.DK, { children: _.NW.string(_.t['yaDJ4+']) }),
                (0, i.jsx)(d.zx, {
                    className: b.marginTop40,
                    onClick: () => t(e),
                    children: _.NW.string(_.t.fIv16O)
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Ee, {
                    src: n(105020),
                    className: b.marginBottom20
                }),
                (0, i.jsx)(d.Dx, {
                    className: b.marginBottom8,
                    children: _.NW.string(_.t.ox9hIS)
                }),
                (0, i.jsx)(d.DK, { children: _.NW.string(_.t['/dcuR0']) }),
                (0, i.jsx)(d.zx, {
                    className: b.marginTop40,
                    onClick: () => t(e),
                    children: _.NW.string(_.t.fIv16O)
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
            x(this, 'state', {
                busy: !0,
                success: !1,
                user: null,
                category: null
            });
    }
}
x(N, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let v = l.ZP.connectStores([h.Z], () => ({ defaultRoute: h.Z.defaultRoute }))(N);
