n.d(t, { default: () => E });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(311907),
    d = n(397927),
    o = n(73153),
    c = n(857182),
    h = n(47167),
    u = n(713654),
    g = n(915089),
    m = n(263063),
    p = n(734057),
    x = n(808728),
    _ = n(71393),
    A = n(576705),
    C = n(994500),
    b = n(309010),
    j = n(287809),
    N = n(954571),
    f = n(661191),
    S = n(652215),
    y = n(985018),
    v = n(183759);
class w extends a.PureComponent {
    constructor(e) {
        super(e);
        const { guilds: t, lastChannelFollowingDestination: n } = e,
            { guildId: l, channelId: a } = n;
        this.state = {
            selectedGuildId: l,
            selectedChannelId: a,
            channels: null != l && null != t[l] ? t[l].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.Ld)("modal"),
        };
    }
    componentDidMount() {
        N.default.track(S.HAw.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, h.m1)(t, j.default, C.A);
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null;
    }
    handleGuildSelect = (e) => {
        let { guilds: t } = this.props,
            { selectedGuildId: n } = this.state,
            l = t[e].channels,
            a = this.getDefaultChannelId(l);
        n !== e && this.setState({ selectedGuildId: e, selectedChannelId: a, channels: l });
    };
    handleChannelSelect = (e) => {
        this.setState({ selectedChannelId: e });
    };
    handleFollow = () => {
        let { channel: e, onClose: t } = this.props,
            { selectedChannelId: a, selectedGuildId: s } = this.state;
        null != a &&
            (this.setState({ submitting: !0 }),
            c.A.createChannelFollower(a, e.id)
                .then(() => {
                    o.h.dispatch({ type: "CHANNEL_FOLLOWER_CREATED", channelId: a, guildId: s }),
                        t(),
                        (0, d.mMO)(async () => {
                            let { default: e } = await n.e("9795").then(n.bind(n, 993390));
                            return (t) => (0, l.jsx)(e, { ...t });
                        });
                })
                .catch((e) => {
                    e.body.code === S.t02.TOO_MANY_WEBHOOKS
                        ? this.setState({ errorMessage: y.intl.string(y.t["1eZ4aB"]), submitting: !1 })
                        : this.setState({ errorMessage: y.intl.string(y.t.LgwhuN), submitting: !1 });
                }));
    };
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: n } = this.state,
            { onClose: a } = this.props;
        return (0, l.jsxs)(d.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, l.jsx)(d.Button, {
                    variant: "primary",
                    text: y.intl.string(y.t["3aOv+h"]),
                    loading: n,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, l.jsx)(d.Button, { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: a }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: a, errorMessage: s } = this.state,
            i = f.default.keys(e).map((t) => {
                let { guild: n } = e[t];
                return {
                    id: t,
                    value: t,
                    label: n.name,
                    leading: null == n ? null : (0, l.jsx)(m.A, { guild: n, size: m.A.Sizes.MINI }),
                };
            }),
            r = t.map((e) => {
                let { channel: t } = e;
                return {
                    id: t.id,
                    value: t.id,
                    label: (0, h.m1)(t, j.default, C.A),
                    leading: (function (e) {
                        if (null == e) return null;
                        let t = (0, u.gU)(e);
                        return null != t && (0, l.jsx)(t, { size: "xs", color: "currentColor", className: v.Kk });
                    })(t),
                };
            }),
            o = 0 === i.length,
            c = o ? y.intl.string(y.t["6b6QoF"]) : y.intl.string(y.t.Z0quyN);
        return (0, l.jsxs)(d.BJc, {
            gap: 16,
            children: [
                (0, l.jsx)(d.ZiE, {
                    selectionMode: "single",
                    label: y.intl.string(y.t.xFn72s),
                    value: n,
                    options: i,
                    disabled: o,
                    onSelectionChange: (e) => this.handleGuildSelect(e),
                }),
                (0, l.jsx)(d.ZiE, {
                    selectionMode: "single",
                    label: y.intl.string(y.t.PDn2fR),
                    value: a,
                    options: r,
                    disabled: 0 === r.length,
                    onSelectionChange: (e) => this.handleChannelSelect(e),
                }),
                (0, l.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: o || null != s ? "text-feedback-critical" : "text-muted",
                    className: v.ML,
                    children: null != s ? s : c,
                }),
            ],
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e },
        } = this.props;
        return (0, l.jsxs)("div", {
            className: v.rf,
            children: [
                (0, l.jsx)(d.Heading, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: y.intl.string(y.t.mvPFbA),
                }),
                (0, l.jsx)(d.Text, {
                    color: "text-muted",
                    className: i()(v.O1, { [v.lK]: !e }),
                    variant: "text-sm/normal",
                    children: y.intl.string(y.t.kbpkxJ),
                }),
                e
                    ? (0, l.jsx)(d.Text, {
                          className: i()(v.lK, v.O1),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: y.intl.string(y.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        let { guildToFollow: e, channelNameToFollow: t, channel: n } = this.props,
            a = (0, u.gU)(n) ?? d.koX;
        return (0, l.jsxs)(d.rQ0, {
            className: v.wx,
            children: [
                (0, l.jsx)(m.A, { guild: e, size: m.A.Sizes.LARGE }),
                (0, l.jsx)("div", {
                    className: v.nU,
                    children: (0, l.jsxs)("div", {
                        className: v.Ix,
                        children: [
                            (0, l.jsx)(a, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: v.p,
                            }),
                            (0, l.jsx)(d.Text, { variant: "text-md/medium", className: v.HA, children: t }),
                        ],
                    }),
                }),
            ],
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, l.jsxs)(d.EOs, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [
                this.renderHeader(),
                (0, l.jsxs)(d.$mQ, { className: v.Qs, children: [this.renderBody(), this.renderForm()] }),
                (0, l.jsx)(d.jlY, { children: this.renderFooter() }),
            ],
        });
    }
}
let E = r.Ay.connectStores(
    [_.A, p.A, x.Ay, A.A, b.A],
    (e) => {
        let { channel: t } = e,
            n = _.A.getGuild(t.guild_id),
            l = _.A.getGuildsArray().reduce((e, t) => {
                let n = x.Ay.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === S.rbe.GUILD_TEXT && A.A.can(S.xBc.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = p.A.getChannel(e.parent_id);
                        return { channel: e, category: null != t ? t.name : null };
                    });
                return n.length > 0 && (e[t.id] = { guild: t, channels: n }), e;
            }, {}),
            a = b.A.getLastChannelFollowingDestination();
        return { guildToFollow: n, channelNameToFollow: t.name, guilds: l, lastChannelFollowingDestination: a ?? {} };
    },
    { forwardRef: !0 },
)(w);
