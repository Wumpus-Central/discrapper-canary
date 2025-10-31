n.d(t, { Z: () => v }), n(35282), n(388685);
var r,
    i = n(951288),
    s = n(647438),
    l = n(593473),
    a = n(442837),
    o = n(544891),
    c = n(481060),
    u = n(108427),
    d = n(896797),
    h = n(411198),
    g = n(129293),
    p = n(388905),
    m = n(981631),
    f = n(388032),
    _ = n(197571);
function x(e, t, n) {
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
class E extends (r = s.PureComponent) {
    componentDidMount() {
        let e = (0, g.Z)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
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
                        n = (0, h.dangerouslyConstructGuildRecordFromUntypedObject)(t);
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
            (0, u.e)("disable_server_highlight_notifications");
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
                    className: _.marginBottom8,
                    children: f.intl.string(f.t.Z33eiP),
                }),
                (0, i.jsx)(p.DK, { children: f.intl.format(f.t.NRWtfC, { guildName: n.name }) }),
                (0, i.jsx)("div", {
                    className: _.marginTop40,
                    children: (0, i.jsx)(c.Button, {
                        text: f.intl.string(f.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: _.marginTop8,
                    children: (0, i.jsx)(c.Avr, {
                        text: f.intl.string(f.t["cGmT/J"]),
                        onClick: () => {
                            t(m.Z5c.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(p.ZP, {
            children: [
                (0, i.jsx)(p.Ee, {
                    src: n(105020),
                    className: _.marginBottom20,
                }),
                (0, i.jsx)(p.Dx, {
                    className: _.marginBottom8,
                    children: f.intl.string(f.t.ox9hIS),
                }),
                (0, i.jsx)(p.DK, { children: f.intl.string(f.t["/dcuR5"]) }),
                (0, i.jsx)("div", {
                    className: _.marginTop40,
                    children: (0, i.jsx)(c.Button, {
                        text: f.intl.string(f.t.fIv16B),
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
            x(this, "state", {
                busy: !0,
                success: !1,
                guild: null,
            });
    }
}
x(E, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let v = a.ZP.connectStores([d.Z], () => ({ defaultRoute: d.Z.defaultRoute }))(E);
