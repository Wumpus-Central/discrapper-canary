n.d(t, { Z: () => x }), n(47120);
var i,
    r = n(200651),
    l = n(192379),
    a = n(593473),
    o = n(442837),
    s = n(544891),
    c = n(108427),
    d = n(601964),
    u = n(896797),
    h = n(129293),
    _ = n(388905),
    m = n(981631),
    g = n(388032),
    p = n(483938);
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
        let e = (0, h.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        s.tn
            .post({
                url: m.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
        return (0, r.jsx)(_.ZP, { children: (0, r.jsx)(_.Hh, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, r.jsxs)(_.ZP, {
            children: [
                (0, r.jsx)(_.Dx, {
                    className: p.marginBottom8,
                    children: g.intl.string(g.t.Z33eiI)
                }),
                (0, r.jsx)(_.DK, { children: g.intl.format(g.t.NRWtfH, { guildName: n.name }) }),
                (0, r.jsx)(_.zx, {
                    className: p.marginTop40,
                    onClick: () => t(e),
                    children: g.intl.string(g.t.fIv16O)
                }),
                (0, r.jsx)(_.zx, {
                    className: p.marginTop8,
                    color: _.zx.Colors.LINK,
                    look: _.zx.Looks.LINK,
                    onClick: () => {
                        t(m.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                    },
                    children: g.intl.string(g.t['cGmT/P'])
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, r.jsxs)(_.ZP, {
            children: [
                (0, r.jsx)(_.Ee, {
                    src: n(105020),
                    className: p.marginBottom20
                }),
                (0, r.jsx)(_.Dx, {
                    className: p.marginBottom8,
                    children: g.intl.string(g.t.ox9hIS)
                }),
                (0, r.jsx)(_.DK, { children: g.intl.string(g.t['/dcuR0']) }),
                (0, r.jsx)(_.zx, {
                    className: p.marginTop40,
                    onClick: () => t(e),
                    children: g.intl.string(g.t.fIv16O)
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
let x = o.ZP.connectStores([u.Z], () => ({ defaultRoute: u.Z.defaultRoute }))(E);
