"use strict";
n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(492462),
    l = n(311907),
    a = n(562465),
    o = n(821609),
    c = n(123292),
    d = n(210714),
    u = n(650048),
    _ = n(860689),
    h = n(396681),
    m = n(854378),
    g = n(652215),
    p = n(985018),
    A = n(818050);
l.Ay.initialize();
class f extends s.PureComponent {
    static defaultProps = { transitionTo: (e) => n.g.location.assign(e) };
    state = { busy: !0, success: !1, guild: null };
    componentDidMount() {
        let e = (0, h.A)(this.props.location),
            t = (0, r.parse)(this.props.location.search);
        a.Bo.post({
            url: g.Rsh.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS,
            body: { token: e, pixel_uuid: t.hash, guild_id: t.guild_id },
            oldFormErrors: !0,
            rejectWithError: !0,
        }).then(
            (e) => {
                let {
                        body: { guild: t },
                    } = e,
                    n = (0, _.dangerouslyConstructGuildRecordFromUntypedObject)(t);
                this.setState({ success: !0, busy: !1, guild: n });
            },
            () => this.setState({ success: !1, busy: !1 }),
        ),
            (0, d.d)("disable_server_highlight_notifications");
    }
    renderBusy() {
        return (0, i.jsx)(m.Ay, { children: (0, i.jsx)(m.CK, {}) });
    }
    renderSuccess() {
        let { defaultRoute: e, transitionTo: t } = this.props,
            { guild: n } = this.state;
        return (0, i.jsxs)(m.Ay, {
            children: [
                (0, i.jsx)(m.hE, { className: A.QB, children: p.intl.string(p.t.Z33eiP) }),
                (0, i.jsx)(m.tK, { children: p.intl.format(p.t.NRWtfC, { guildName: n.name }) }),
                (0, i.jsx)("div", {
                    className: A.eT,
                    children: (0, i.jsx)(o.$, { text: p.intl.string(p.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
                (0, i.jsx)("div", {
                    className: A.Ot,
                    children: (0, i.jsx)(c.Q, {
                        text: p.intl.string(p.t["cGmT/J"]),
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
        return (0, i.jsxs)(m.Ay, {
            children: [
                (0, i.jsx)(m._V, { src: n(37772), className: A.SX }),
                (0, i.jsx)(m.hE, { className: A.QB, children: p.intl.string(p.t.ox9hIS) }),
                (0, i.jsx)(m.tK, { children: p.intl.string(p.t["/dcuR5"]) }),
                (0, i.jsx)("div", {
                    className: A.eT,
                    children: (0, i.jsx)(o.$, { text: p.intl.string(p.t.fIv16B), fullWidth: !0, onClick: () => t(e) }),
                }),
            ],
        });
    }
    render() {
        let { busy: e, success: t } = this.state;
        return e ? this.renderBusy() : t ? this.renderSuccess() : this.renderError();
    }
}
let E = l.Ay.connectStores([u.A], () => ({ defaultRoute: u.A.defaultRoute }))(f);
