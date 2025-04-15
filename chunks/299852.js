n.d(t, { Z: () => E }), n(35282), n(388685);
var r,
    i = n(200651),
    s = n(192379),
    l = n(593473),
    o = n(442837),
    a = n(544891),
    c = n(481060),
    u = n(129293),
    d = n(388905),
    h = n(108427),
    p = n(598077),
    g = n(896797),
    f = n(981631),
    m = n(930441),
    _ = n(388032),
    N = n(20493);
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
o.ZP.initialize();
class b extends (r = s.PureComponent) {
    componentDidMount() {
        let e = (0, u.Z)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
        a.tn
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
                        r = new p.Z(n);
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
            (0, h.e)('disable_email_notifications');
    }
    renderBusy() {
        return (0, i.jsx)(d.ZP, { children: (0, i.jsx)(d.Hh, {}) });
    }
    renderCategorySuccess(e, t) {
        let { defaultRoute: n, transitionTo: r } = this.props,
            s = _.NW.formatToPlainString(_.t.YDAohI, { category: t });
        return (0, i.jsxs)(d.ZP, {
            children: [
                (0, i.jsx)(d.Dx, {
                    className: N.marginBottom8,
                    children: _.NW.string(_.t.f6rdLi)
                }),
                (0, i.jsx)(d.DK, { children: s }),
                (0, i.jsx)(d.zx, {
                    className: N.marginTop20,
                    onClick: () => r(n),
                    children: _.NW.string(_.t.fIv16O)
                }),
                (0, i.jsx)(d.zx, {
                    className: N.marginTop8,
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
                    className: N.marginBottom20
                }),
                (0, i.jsx)(d.Dx, {
                    className: N.marginBottom8,
                    children: _.NW.string(_.t['6U6OMT'])
                }),
                (0, i.jsx)(d.DK, { children: _.NW.string(_.t['yaDJ4+']) }),
                (0, i.jsx)(d.zx, {
                    className: N.marginTop40,
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
                    className: N.marginBottom20
                }),
                (0, i.jsx)(d.Dx, {
                    className: N.marginBottom8,
                    children: _.NW.string(_.t.ox9hIS)
                }),
                (0, i.jsx)(d.DK, { children: _.NW.string(_.t['/dcuR0']) }),
                (0, i.jsx)(d.zx, {
                    className: N.marginTop40,
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
x(b, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let E = o.ZP.connectStores([g.Z], () => ({ defaultRoute: g.Z.defaultRoute }))(b);
