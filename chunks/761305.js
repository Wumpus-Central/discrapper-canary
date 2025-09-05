n.d(t, { Z: () => E }), n(35282), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    s = n(593473),
    o = n(442837),
    a = n(544891),
    c = n(108427),
    u = n(896797),
    d = n(411198),
    h = n(129293),
    f = n(388905),
    p = n(981631),
    g = n(388032),
    m = n(197571);
function _(e, t, n) {
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
o.ZP.initialize();
class x extends (r = l.PureComponent) {
    componentDidMount() {
        let e = (0, h.Z)(this.props.location),
            t = (0, s.parse)(this.props.location.search);
        a.tn
            .post({
                url: p.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
                body: {
                    token: e,
                    pixel_uuid: t.hash,
                    guild_id: t.guild_id,
                },
                oldFormErrors: !0,
                rejectWithError: !0,
            })
            .then(
                (e) => {
                    let {
                            body: { guild: t },
                        } = e,
                        n = (0, d.Jh)(t);
                    this.setState({
                        success: !0,
                        busy: !1,
                        guild: n,
                    });
                },
                () =>
                    this.setState({
                        success: !1,
                        busy: !1,
                    }),
            ),
            (0, c.e)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, i.jsx)(f.ZP, { children: (0, i.jsx)(f.Hh, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, i.jsxs)(f.ZP, {
            children: [
                (0, i.jsx)(f.Dx, {
                    className: m.marginBottom8,
                    children: g.intl.string(g.t.Z33eiI),
                }),
                (0, i.jsx)(f.DK, { children: g.intl.format(g.t.NRWtfH, { guildName: n.name }) }),
                (0, i.jsx)(f.zx, {
                    className: m.marginTop40,
                    onClick: () => t(e),
                    children: g.intl.string(g.t.fIv16O),
                }),
                (0, i.jsx)(f.zx, {
                    className: m.marginTop8,
                    color: f.zx.Colors.LINK,
                    look: f.zx.Looks.LINK,
                    onClick: () => {
                        t(p.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                    },
                    children: g.intl.string(g.t["cGmT/P"]),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(f.ZP, {
            children: [
                (0, i.jsx)(f.Ee, {
                    src: n(105020),
                    className: m.marginBottom20,
                }),
                (0, i.jsx)(f.Dx, {
                    className: m.marginBottom8,
                    children: g.intl.string(g.t.ox9hIS),
                }),
                (0, i.jsx)(f.DK, { children: g.intl.string(g.t["/dcuR0"]) }),
                (0, i.jsx)(f.zx, {
                    className: m.marginTop40,
                    onClick: () => t(e),
                    children: g.intl.string(g.t.fIv16O),
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
            _(this, "state", {
                busy: !0,
                success: !1,
                guild: null,
            });
    }
}
_(x, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let E = o.ZP.connectStores([u.Z], () => ({ defaultRoute: u.Z.defaultRoute }))(x);
