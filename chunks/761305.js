n.d(t, { Z: () => N }), n(301563), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(593473),
    l = n(442837),
    s = n(544891),
    c = n(108427),
    u = n(601964),
    d = n(896797),
    h = n(129293),
    p = n(388905),
    _ = n(981631),
    g = n(388032),
    f = n(455812);
function m(e, t, n) {
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
class b extends (r = o.PureComponent) {
    componentDidMount() {
        let e = (0, h.Z)(this.props.location),
            t = (0, a.parse)(this.props.location.search);
        s.tn
            .post({
                url: _.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
                        n = new u.ZP(t);
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
        return (0, i.jsx)(p.ZP, { children: (0, i.jsx)(p.Hh, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, i.jsxs)(p.ZP, {
            children: [
                (0, i.jsx)(p.Dx, {
                    className: f.marginBottom8,
                    children: g.NW.string(g.t.Z33eiI)
                }),
                (0, i.jsx)(p.DK, { children: g.NW.format(g.t.NRWtfH, { guildName: n.name }) }),
                (0, i.jsx)(p.zx, {
                    className: f.marginTop40,
                    onClick: () => t(e),
                    children: g.NW.string(g.t.fIv16O)
                }),
                (0, i.jsx)(p.zx, {
                    className: f.marginTop8,
                    color: p.zx.Colors.LINK,
                    look: p.zx.Looks.LINK,
                    onClick: () => {
                        t(_.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                    },
                    children: g.NW.string(g.t['cGmT/P'])
                })
            ]
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(p.ZP, {
            children: [
                (0, i.jsx)(p.Ee, {
                    src: n(105020),
                    className: f.marginBottom20
                }),
                (0, i.jsx)(p.Dx, {
                    className: f.marginBottom8,
                    children: g.NW.string(g.t.ox9hIS)
                }),
                (0, i.jsx)(p.DK, { children: g.NW.string(g.t['/dcuR0']) }),
                (0, i.jsx)(p.zx, {
                    className: f.marginTop40,
                    onClick: () => t(e),
                    children: g.NW.string(g.t.fIv16O)
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
            m(this, 'state', {
                busy: !0,
                success: !1,
                guild: null
            });
    }
}
m(b, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let N = l.ZP.connectStores([d.Z], () => ({ defaultRoute: d.Z.defaultRoute }))(b);
