n.d(t, { Z: () => E }), n(35282), n(388685);
var r,
    i = n(951288),
    l = n(647438),
    s = n(593473),
    a = n(442837),
    o = n(544891),
    c = n(108427),
    u = n(896797),
    d = n(411198),
    h = n(129293),
    g = n(388905),
    m = n(981631),
    p = n(388032),
    f = n(10198);
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
a.ZP.initialize();
class x extends (r = l.PureComponent) {
    componentDidMount() {
        let e = (0, h.Z)(this.props.location),
            t = (0, s.parse)(this.props.location.search);
        o.tn
            .post({
                url: m.ANM.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
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
        return (0, i.jsx)(g.ZP, { children: (0, i.jsx)(g.Hh, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(g.Dx, {
                    className: f.marginBottom8,
                    children: p.intl.string(p.t.Z33eiI),
                }),
                (0, i.jsx)(g.DK, { children: p.intl.format(p.t.NRWtfH, { guildName: n.name }) }),
                (0, i.jsx)(g.zx, {
                    className: f.marginTop40,
                    onClick: () => t(e),
                    children: p.intl.string(p.t.fIv16O),
                }),
                (0, i.jsx)(g.zx, {
                    className: f.marginTop8,
                    color: g.zx.Colors.LINK,
                    look: g.zx.Looks.LINK,
                    onClick: () => {
                        t(m.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                    },
                    children: p.intl.string(p.t["cGmT/P"]),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(g.ZP, {
            children: [
                (0, i.jsx)(g.Ee, {
                    src: n(105020),
                    className: f.marginBottom20,
                }),
                (0, i.jsx)(g.Dx, {
                    className: f.marginBottom8,
                    children: p.intl.string(p.t.ox9hIS),
                }),
                (0, i.jsx)(g.DK, { children: p.intl.string(p.t["/dcuR0"]) }),
                (0, i.jsx)(g.zx, {
                    className: f.marginTop40,
                    onClick: () => t(e),
                    children: p.intl.string(p.t.fIv16O),
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
let E = a.ZP.connectStores([u.Z], () => ({ defaultRoute: u.Z.defaultRoute }))(x);
