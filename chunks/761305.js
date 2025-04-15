n.d(t, { Z: () => x }), n(35282), n(388685);
var r,
    i = n(200651),
    s = n(192379),
    l = n(593473),
    o = n(442837),
    a = n(544891),
    c = n(108427),
    u = n(601964),
    d = n(896797),
    h = n(129293),
    p = n(388905),
    g = n(981631),
    f = n(388032),
    m = n(20493);
function _(e, t, n) {
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
class N extends (r = s.PureComponent) {
    componentDidMount() {
        let e = (0, h.Z)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
        a.tn
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
                    className: m.marginBottom8,
                    children: f.NW.string(f.t.Z33eiI)
                }),
                (0, i.jsx)(p.DK, { children: f.NW.format(f.t.NRWtfH, { guildName: n.name }) }),
                (0, i.jsx)(p.zx, {
                    className: m.marginTop40,
                    onClick: () => t(e),
                    children: f.NW.string(f.t.fIv16O)
                }),
                (0, i.jsx)(p.zx, {
                    className: m.marginTop8,
                    color: p.zx.Colors.LINK,
                    look: p.zx.Looks.LINK,
                    onClick: () => {
                        t(g.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                    },
                    children: f.NW.string(f.t['cGmT/P'])
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
                    className: m.marginBottom20
                }),
                (0, i.jsx)(p.Dx, {
                    className: m.marginBottom8,
                    children: f.NW.string(f.t.ox9hIS)
                }),
                (0, i.jsx)(p.DK, { children: f.NW.string(f.t['/dcuR0']) }),
                (0, i.jsx)(p.zx, {
                    className: m.marginTop40,
                    onClick: () => t(e),
                    children: f.NW.string(f.t.fIv16O)
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
            _(this, 'state', {
                busy: !0,
                success: !1,
                guild: null
            });
    }
}
_(N, 'defaultProps', { transitionTo: (e) => n.g.location.assign(e) });
let x = o.ZP.connectStores([d.Z], () => ({ defaultRoute: d.Z.defaultRoute }))(N);
