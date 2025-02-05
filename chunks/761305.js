n.d(t, { Z: () => I }), n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(593473),
    o = n(442837),
    s = n(544891),
    c = n(108427),
    d = n(601964),
    u = n(896797),
    _ = n(129293),
    h = n(388905),
    g = n(981631),
    p = n(388032),
    m = n(232186);
function f(e, t, n) {
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
class E extends (i = l.PureComponent) {
    componentDidMount() {
        let e = (0, _.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        s.tn
            .post({
                url: g.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    guild_id: t.guild_id
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (e) => {
                    let {
                            body: { guild: t }
                        } = e,
                        n = new d.ZP(t);
                    this.setState({
                        success: !0,
                        busy: !1,
                        guild: n
                    });
                },
                () =>
                    this.setState({
                        success: !1,
                        busy: !1
                    })
            ),
            (0, c.e)('disable_server_highlight_notifications');
    }
    renderBusy() {
        return (0, r.jsx)(h.ZP, { children: (0, r.jsx)(h.Hh, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, r.jsxs)(h.ZP, {
            children: [
                (0, r.jsx)(h.Dx, {
                    className: m.marginBottom8,
                    children: p.intl.string(p.t.Z33eiI)
                }),
                (0, r.jsx)(h.DK, { children: p.intl.format(p.t.NRWtfH, { guildName: n.name }) }),
                (0, r.jsx)(h.zx, {
                    className: m.marginTop40,
                    onClick: () => t(e),
                    children: p.intl.string(p.t.fIv16O)
                }),
                (0, r.jsx)(h.zx, {
                    className: m.marginTop8,
                    color: h.zx.Colors.LINK,
                    look: h.zx.Looks.LINK,
                    onClick: () => {
                        t(g.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                    },
                    children: p.intl.string(p.t['cGmT/P'])
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(h.ZP, {
            children: [
                (0, r.jsx)(h.Ee, {
                    src: n(105020),
                    className: m.marginBottom20
                }),
                (0, r.jsx)(h.Dx, {
                    className: m.marginBottom8,
                    children: p.intl.string(p.t.ox9hIS)
                }),
                (0, r.jsx)(h.DK, { children: p.intl.string(p.t['/dcuR0']) }),
                (0, r.jsx)(h.zx, {
                    className: m.marginTop40,
                    onClick: () => t(e),
                    children: p.intl.string(p.t.fIv16O)
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
            f(this, 'state', {
                busy: !0,
                success: !1,
                guild: null
            });
    }
}
f(E, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let I = o.ZP.connectStores([u.Z], () => ({ defaultRoute: u.Z.defaultRoute }))(E);
