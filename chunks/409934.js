n.d(t, { A: () => E }), n(747238), n(896048);
var r,
    i = n(627968),
    s = n(64700),
    l = n(492462),
    a = n(311907),
    o = n(562465),
    c = n(397927),
    u = n(210714),
    d = n(650048),
    h = n(860689),
    f = n(396681),
    p = n(854378),
    g = n(652215),
    m = n(985018),
    A = n(473169);
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
a.Ay.initialize();
class _ extends (r = s.PureComponent) {
    componentDidMount() {
        let e = (0, f.A)(this.props.location),
            t = (0, l.parse)(this.props.location.search);
        o.Bo.post({
            url: g.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: {
                token: e,
                pixel_uuid: t.hash,
                guild_id: t.guild_id,
            },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
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
            (0, u.d)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, i.jsx)(p.Ay, { children: (0, i.jsx)(p.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, i.jsxs)(p.Ay, {
            children: [
                (0, i.jsx)(p.hE, {
                    className: A.QB,
                    children: m.intl.string(m.t.Z33eiP),
                }),
                (0, i.jsx)(p.tK, { children: m.intl.format(m.t.NRWtfC, { guildName: n.name }) }),
                (0, i.jsx)("div", {
                    className: A.eT,
                    children: (0, i.jsx)(c.Button, {
                        text: m.intl.string(m.t.fIv16B),
                        fullWidth: !0,
                        onClick: () => t(e),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: A.Ot,
                    children: (0, i.jsx)(c.QWc, {
                        text: m.intl.string(m.t["cGmT/J"]),
                        onClick: () => {
                            t(g.BVt.USER_GUILD_NOTIFICATION_SETTINGS(n.id));
                        },
                    }),
                }),
            ],
        });
    }
    renderError() {
        let { defaultRoute: e, transitionTo: t } = this.props;
        return (0, i.jsxs)(p.Ay, {
            children: [
                (0, i.jsx)(p._V, {
                    src: n(37772),
                    className: A.SX,
                }),
                (0, i.jsx)(p.hE, {
                    className: A.QB,
                    children: m.intl.string(m.t.ox9hIS),
                }),
                (0, i.jsx)(p.tK, { children: m.intl.string(m.t["/dcuR5"]) }),
                (0, i.jsx)("div", {
                    className: A.eT,
                    children: (0, i.jsx)(c.Button, {
                        text: m.intl.string(m.t.fIv16B),
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
x(_, "defaultProps", { transitionTo: (e) => n.g.location.assign(e) });
let E = a.Ay.connectStores([d.A], () => ({ defaultRoute: d.A.defaultRoute }))(_);
