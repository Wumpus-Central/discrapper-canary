l.d(t, { default: () => B });
var n = l(627968),
    a = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(311907),
    d = l(192308),
    o = l(825484),
    c = l(821609),
    h = l(331322),
    u = l(783878),
    g = l(834730),
    m = l(534514),
    p = l(778492),
    x = l(935462),
    _ = l(73153),
    A = l(857182),
    C = l(47167),
    b = l(713654),
    j = l(915089),
    y = l(263063),
    f = l(734057),
    N = l(808728),
    E = l(71393),
    S = l(576705),
    v = l(994500),
    w = l(309010),
    I = l(287809),
    M = l(954571),
    k = l(661191),
    F = l(652215),
    O = l(985018),
    L = l(199214);
class D extends a.PureComponent {
    constructor(e) {
        super(e);
        const { guilds: t, lastChannelFollowingDestination: l } = e,
            { guildId: n, channelId: a } = l;
        this.state = {
            selectedGuildId: n,
            selectedChannelId: a,
            channels: null != n && null != t[n] ? t[n].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, j.Ld)("modal"),
        };
    }
    componentDidMount() {
        M.default.track(F.HAw.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, C.m1)(t, I.default, v.A);
            }),
            l = null != t ? t : e[0];
        return null != l ? l.channel.id : null;
    }
    handleGuildSelect = (e) => {
        let { guilds: t } = this.props,
            { selectedGuildId: l } = this.state,
            n = t[e].channels,
            a = this.getDefaultChannelId(n);
        l !== e && this.setState({ selectedGuildId: e, selectedChannelId: a, channels: n });
    };
    handleChannelSelect = (e) => {
        this.setState({ selectedChannelId: e });
    };
    handleFollow = () => {
        let { channel: e, onClose: t } = this.props,
            { selectedChannelId: a, selectedGuildId: s } = this.state;
        null != a &&
            (this.setState({ submitting: !0 }),
            A.A.createChannelFollower(a, e.id)
                .then(() => {
                    _.h.dispatch({ type: "CHANNEL_FOLLOWER_CREATED", channelId: a, guildId: s }),
                        t(),
                        (0, d.openModalLazy)(async () => {
                            let { default: e } = await l.e("9795").then(l.bind(l, 993390));
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                })
                .catch((e) => {
                    e.body.code === F.t02.TOO_MANY_WEBHOOKS
                        ? this.setState({ errorMessage: O.intl.string(O.t["1eZ4aB"]), submitting: !1 })
                        : this.setState({ errorMessage: O.intl.string(O.t.LgwhuN), submitting: !1 });
                }));
    };
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: l } = this.state,
            { onClose: a } = this.props;
        return (0, n.jsxs)(o.e, {
            direction: "horizontal-reverse",
            children: [
                (0, n.jsx)(c.$, {
                    variant: "primary",
                    text: O.intl.string(O.t["3aOv+h"]),
                    loading: l,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, n.jsx)(c.$, { variant: "secondary", text: O.intl.string(O.t["ETE/oC"]), onClick: a }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: l, selectedChannelId: a, errorMessage: s } = this.state,
            i = k.default.keys(e).map((t) => {
                let { guild: l } = e[t];
                return {
                    id: t,
                    value: t,
                    label: l.name,
                    leading: null == l ? null : (0, n.jsx)(y.Ay, { guild: l, size: y.Ay.Sizes.MINI }),
                };
            }),
            r = t.map((e) => {
                let { channel: t } = e;
                return {
                    id: t.id,
                    value: t.id,
                    label: (0, C.m1)(t, I.default, v.A),
                    leading: (function (e) {
                        if (null == e) return null;
                        let t = (0, b.gU)(e);
                        return null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor", className: L.Kk });
                    })(t),
                };
            }),
            d = 0 === i.length,
            o = d ? O.intl.string(O.t["6b6QoF"]) : O.intl.string(O.t.Z0quyN);
        return (0, n.jsxs)(h.B, {
            gap: 16,
            children: [
                (0, n.jsx)(u.Z, {
                    selectionMode: "single",
                    label: O.intl.string(O.t.xFn72s),
                    value: l,
                    options: i,
                    disabled: d,
                    onSelectionChange: (e) => this.handleGuildSelect(e),
                }),
                (0, n.jsx)(u.Z, {
                    selectionMode: "single",
                    label: O.intl.string(O.t.PDn2fR),
                    value: a,
                    options: r,
                    disabled: 0 === r.length,
                    onSelectionChange: (e) => this.handleChannelSelect(e),
                }),
                (0, n.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: d || null != s ? "text-feedback-critical" : "text-muted",
                    className: L.ML,
                    children: null != s ? s : o,
                }),
            ],
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e },
        } = this.props;
        return (0, n.jsxs)("div", {
            className: L.rf,
            children: [
                (0, n.jsx)(m.D, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: O.intl.string(O.t.mvPFbA),
                }),
                (0, n.jsx)(g.E, {
                    color: "text-muted",
                    className: i()(L.O1, { [L.lK]: !e }),
                    variant: "text-sm/normal",
                    children: O.intl.string(O.t.kbpkxJ),
                }),
                e
                    ? (0, n.jsx)(g.E, {
                          className: i()(L.lK, L.O1),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: O.intl.string(O.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        let { guildToFollow: e, channelNameToFollow: t, channel: l } = this.props,
            a = (0, b.gU)(l) ?? p.k;
        return (0, n.jsxs)(x.rQ, {
            className: L.wx,
            children: [
                (0, n.jsx)(y.Ay, { guild: e, size: y.Ay.Sizes.LARGE }),
                (0, n.jsx)("div", {
                    className: L.nU,
                    children: (0, n.jsxs)("div", {
                        className: L.Ix,
                        children: [
                            (0, n.jsx)(a, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: L.p,
                            }),
                            (0, n.jsx)(g.E, { variant: "text-md/medium", className: L.HA, children: t }),
                        ],
                    }),
                }),
            ],
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, n.jsxs)(x.EO, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [
                this.renderHeader(),
                (0, n.jsxs)(x.$m, { className: L.Qs, children: [this.renderBody(), this.renderForm()] }),
                (0, n.jsx)(x.jl, { children: this.renderFooter() }),
            ],
        });
    }
}
let B = r.Ay.connectStores(
    [E.A, w.A, I.default, v.A, N.Ay, S.A, f.A],
    (e) => {
        let { channel: t } = e,
            l = E.A.getGuild(t.guild_id),
            n = E.A.getGuildsArray().reduce((e, t) => {
                let l = N.Ay.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === F.rbe.GUILD_TEXT && S.A.can(F.xBc.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = f.A.getChannel(e.parent_id);
                        return { channel: e, category: null != t ? (0, C.m1)(t, I.default, v.A) : null };
                    });
                return l.length > 0 && (e[t.id] = { guild: t, channels: l }), e;
            }, {}),
            a = w.A.getLastChannelFollowingDestination();
        return {
            guildToFollow: l,
            channelNameToFollow: (0, C.m1)(t, I.default, v.A),
            guilds: n,
            lastChannelFollowingDestination: a ?? {},
        };
    },
    { forwardRef: !0 },
)(D);
