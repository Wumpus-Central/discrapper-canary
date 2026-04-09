l.d(t, { default: () => E });
var n = l(627968),
    a = l(64700),
    s = l(503698),
    i = l.n(s),
    r = l(311907),
    d = l(397927),
    o = l(73153),
    c = l(857182),
    h = l(47167),
    u = l(713654),
    g = l(915089),
    m = l(263063),
    p = l(734057),
    x = l(808728),
    _ = l(71393),
    A = l(576705),
    C = l(994500),
    b = l(309010),
    j = l(287809),
    f = l(954571),
    y = l(661191),
    N = l(652215),
    S = l(985018),
    v = l(711661);
class w extends a.PureComponent {
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
            headerId: (0, g.Ld)("modal"),
        };
    }
    componentDidMount() {
        f.default.track(N.HAw.OPEN_MODAL, {
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
            c.A.createChannelFollower(a, e.id)
                .then(() => {
                    o.h.dispatch({ type: "CHANNEL_FOLLOWER_CREATED", channelId: a, guildId: s }),
                        t(),
                        (0, d.mMO)(async () => {
                            let { default: e } = await l.e("9795").then(l.bind(l, 993390));
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                })
                .catch((e) => {
                    e.body.code === N.t02.TOO_MANY_WEBHOOKS
                        ? this.setState({ errorMessage: S.intl.string(S.t["1eZ4aB"]), submitting: !1 })
                        : this.setState({ errorMessage: S.intl.string(S.t.LgwhuN), submitting: !1 });
                }));
    };
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: l } = this.state,
            { onClose: a } = this.props;
        return (0, n.jsxs)(d.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, n.jsx)(d.Button, {
                    variant: "primary",
                    text: S.intl.string(S.t["3aOv+h"]),
                    loading: l,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, n.jsx)(d.Button, { variant: "secondary", text: S.intl.string(S.t["ETE/oC"]), onClick: a }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: l, selectedChannelId: a, errorMessage: s } = this.state,
            i = y.default.keys(e).map((t) => {
                let { guild: l } = e[t];
                return {
                    id: t,
                    value: t,
                    label: l.name,
                    leading: null == l ? null : (0, n.jsx)(m.Ay, { guild: l, size: m.Ay.Sizes.MINI }),
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
                        return null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor", className: v.Kk });
                    })(t),
                };
            }),
            o = 0 === i.length,
            c = o ? S.intl.string(S.t["6b6QoF"]) : S.intl.string(S.t.Z0quyN);
        return (0, n.jsxs)(d.BJc, {
            gap: 16,
            children: [
                (0, n.jsx)(d.ZiE, {
                    selectionMode: "single",
                    label: S.intl.string(S.t.xFn72s),
                    value: l,
                    options: i,
                    disabled: o,
                    onSelectionChange: (e) => this.handleGuildSelect(e),
                }),
                (0, n.jsx)(d.ZiE, {
                    selectionMode: "single",
                    label: S.intl.string(S.t.PDn2fR),
                    value: a,
                    options: r,
                    disabled: 0 === r.length,
                    onSelectionChange: (e) => this.handleChannelSelect(e),
                }),
                (0, n.jsx)(d.Text, {
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
        return (0, n.jsxs)("div", {
            className: v.rf,
            children: [
                (0, n.jsx)(d.Heading, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: S.intl.string(S.t.mvPFbA),
                }),
                (0, n.jsx)(d.Text, {
                    color: "text-muted",
                    className: i()(v.O1, { [v.lK]: !e }),
                    variant: "text-sm/normal",
                    children: S.intl.string(S.t.kbpkxJ),
                }),
                e
                    ? (0, n.jsx)(d.Text, {
                          className: i()(v.lK, v.O1),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: S.intl.string(S.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        let { guildToFollow: e, channelNameToFollow: t, channel: l } = this.props,
            a = (0, u.gU)(l) ?? d.koX;
        return (0, n.jsxs)(d.rQ0, {
            className: v.wx,
            children: [
                (0, n.jsx)(m.Ay, { guild: e, size: m.Ay.Sizes.LARGE }),
                (0, n.jsx)("div", {
                    className: v.nU,
                    children: (0, n.jsxs)("div", {
                        className: v.Ix,
                        children: [
                            (0, n.jsx)(a, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: v.p,
                            }),
                            (0, n.jsx)(d.Text, { variant: "text-md/medium", className: v.HA, children: t }),
                        ],
                    }),
                }),
            ],
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, n.jsxs)(d.EOs, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [
                this.renderHeader(),
                (0, n.jsxs)(d.$mQ, { className: v.Qs, children: [this.renderBody(), this.renderForm()] }),
                (0, n.jsx)(d.jlY, { children: this.renderFooter() }),
            ],
        });
    }
}
let E = r.Ay.connectStores(
    [_.A, b.A, j.default, C.A, x.Ay, A.A, p.A],
    (e) => {
        let { channel: t } = e,
            l = _.A.getGuild(t.guild_id),
            n = _.A.getGuildsArray().reduce((e, t) => {
                let l = x.Ay.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === N.rbe.GUILD_TEXT && A.A.can(N.xBc.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = p.A.getChannel(e.parent_id);
                        return { channel: e, category: null != t ? (0, h.m1)(t, j.default, C.A) : null };
                    });
                return l.length > 0 && (e[t.id] = { guild: t, channels: l }), e;
            }, {}),
            a = b.A.getLastChannelFollowingDestination();
        return {
            guildToFollow: l,
            channelNameToFollow: (0, h.m1)(t, j.default, C.A),
            guilds: n,
            lastChannelFollowingDestination: a ?? {},
        };
    },
    { forwardRef: !0 },
)(w);
