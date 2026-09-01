l.d(t, { default: () => z });
var n = l(477900),
    s = l(582128),
    a = l(503698),
    i = l.n(a),
    r = l(17928),
    d = l(935462),
    o = l(192308),
    h = l(825484),
    c = l(821609),
    u = l(331322),
    g = l(890497),
    m = l(834730),
    p = l(297264),
    x = l(778492),
    A = l(228366),
    C = l(857182),
    j = l(47167),
    y = l(713654),
    b = l(915089),
    f = l(548118),
    N = l(95701),
    E = l(734057),
    v = l(808728),
    S = l(71393),
    w = l(576705),
    F = l(994500),
    k = l(309010),
    I = l(287809),
    O = l(174459),
    M = l(935208),
    L = l(652215),
    _ = l(375708),
    D = l(262377);
class B extends s.PureComponent {
    constructor(e) {
        super(e);
        const { guilds: t, lastChannelFollowingDestination: l } = e,
            { guildId: n, channelId: s } = l;
        this.state = {
            selectedGuildId: n,
            selectedChannelId: s,
            channels: null != n && null != t[n] ? t[n].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, b.Ld)("modal"),
        };
    }
    componentDidMount() {
        O.default.track(L.HAw.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, j.m1)(t, I.default, F.A);
            }),
            l = null != t ? t : e[0];
        return null != l ? l.channel.id : null;
    }
    handleGuildSelect = (e) => {
        let { guilds: t } = this.props,
            { selectedGuildId: l } = this.state,
            n = t[e].channels,
            s = this.getDefaultChannelId(n);
        l !== e && this.setState({ selectedGuildId: e, selectedChannelId: s, channels: n });
    };
    handleChannelSelect = (e) => {
        this.setState({ selectedChannelId: e });
    };
    handleFollow = () => {
        let { channel: e, onClose: t } = this.props,
            { selectedChannelId: s, selectedGuildId: a } = this.state;
        null != s &&
            (this.setState({ submitting: !0 }),
            C.A.createChannelFollower(s, e.id)
                .then(() => {
                    A.h.dispatch({ type: "CHANNEL_FOLLOWER_CREATED", channelId: s, guildId: a }),
                        t(),
                        (0, o.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([l.e("418319"), l.e("628907")]).then(
                                l.bind(l, 209674),
                            );
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                })
                .catch((e) => {
                    e.body.code === L.t02.TOO_MANY_WEBHOOKS
                        ? this.setState({ errorMessage: _.intl.string(_.t["1eZ4aB"]), submitting: !1 })
                        : this.setState({ errorMessage: _.intl.string(_.t.LgwhuN), submitting: !1 });
                }));
    };
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: l } = this.state,
            { onClose: s } = this.props;
        return (0, n.jsxs)(h.e, {
            direction: "horizontal-reverse",
            children: [
                (0, n.jsx)(c.$, {
                    variant: "primary",
                    text: _.intl.string(_.t["3aOv+h"]),
                    loading: l,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, n.jsx)(c.$, { variant: "secondary", text: _.intl.string(_.t["ETE/oC"]), onClick: s }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: l, selectedChannelId: s, errorMessage: a } = this.state,
            i = M.default.keys(e).map((t) => {
                let { guild: l } = e[t];
                return {
                    id: t,
                    value: t,
                    label: l.name,
                    leading: null == l ? null : (0, n.jsx)(f.Ay, { guild: l, size: f.Ay.Sizes.MINI }),
                };
            }),
            r = t.map((e) => {
                let { channel: t } = e;
                return {
                    id: t.id,
                    value: t.id,
                    label: (0, j.m1)(t, I.default, F.A),
                    leading: (function (e) {
                        if (null == e) return null;
                        let t = (0, y.gU)(e);
                        return null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor", className: D.Kk });
                    })(t),
                };
            }),
            d = 0 === i.length,
            o = d ? _.intl.string(_.t["6b6QoF"]) : _.intl.string(_.t.Z0quyN);
        return (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                (0, n.jsx)(g.Z, {
                    selectionMode: "single",
                    label: _.intl.string(_.t.xFn72s),
                    value: l,
                    options: i,
                    disabled: d,
                    onSelectionChange: (e) => this.handleGuildSelect(e),
                }),
                (0, n.jsx)(g.Z, {
                    selectionMode: "single",
                    label: _.intl.string(_.t.PDn2fR),
                    value: s,
                    options: r,
                    disabled: 0 === r.length,
                    onSelectionChange: (e) => this.handleChannelSelect(e),
                }),
                (0, n.jsx)(m.E, {
                    variant: "text-sm/normal",
                    color: d || null != a ? "text-feedback-critical" : "text-muted",
                    className: D.ML,
                    children: null != a ? a : o,
                }),
            ],
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e },
        } = this.props;
        return (0, n.jsxs)("div", {
            className: D.rf,
            children: [
                (0, n.jsx)(p.D, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: _.intl.string(_.t.mvPFbA),
                }),
                (0, n.jsx)(m.E, {
                    color: "text-muted",
                    className: i()(D.O1, { [D.lK]: !e }),
                    variant: "text-sm/normal",
                    children: _.intl.string(_.t.kbpkxJ),
                }),
                e
                    ? (0, n.jsx)(m.E, {
                          className: i()(D.lK, D.O1),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: _.intl.string(_.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        let { guildToFollow: e, channelNameToFollow: t, channel: l } = this.props,
            s = (0, y.gU)(l) ?? x.k;
        return (0, n.jsxs)(d.rQ, {
            className: D.wx,
            children: [
                (0, n.jsx)(f.Ay, { guild: e, size: f.Ay.Sizes.LARGE }),
                (0, n.jsx)("div", {
                    className: D.nU,
                    children: (0, n.jsxs)("div", {
                        className: D.Ix,
                        children: [
                            (0, n.jsx)(s, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: D.p,
                            }),
                            (0, n.jsx)(m.E, { variant: "text-md/medium", className: D.HA, children: t }),
                        ],
                    }),
                }),
            ],
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, n.jsxs)(d.EO, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [
                this.renderHeader(),
                (0, n.jsxs)(d.$m, { className: D.Qs, children: [this.renderBody(), this.renderForm()] }),
                (0, n.jsx)(d.jl, { children: this.renderFooter() }),
            ],
        });
    }
}
let z = r.Ay.connectStores(
    [S.A, k.Ay, I.default, F.A, v.Ay, w.A, E.A],
    (e) => {
        let { channel: t } = e,
            l = S.A.getGuild(t.guild_id),
            n = S.A.getGuildsArray().reduce((e, t) => {
                let l = v.Ay.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => N.XD.has(e.type) && w.A.can(L.xBc.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = E.A.getChannel(e.parent_id);
                        return { channel: e, category: null != t ? (0, j.m1)(t, I.default, F.A) : null };
                    });
                return l.length > 0 && (e[t.id] = { guild: t, channels: l }), e;
            }, {}),
            s = k.Ay.getLastChannelFollowingDestination();
        return {
            guildToFollow: l,
            channelNameToFollow: (0, j.m1)(t, I.default, F.A),
            guilds: n,
            lastChannelFollowingDestination: s ?? {},
        };
    },
    { forwardRef: !0 },
)(B);
