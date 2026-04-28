l.d(t, { default: () => B });
var n = l(627968),
    s = l(64700),
    a = l(503698),
    i = l.n(a),
    r = l(17928),
    d = l(192308),
    o = l(825484),
    h = l(821609),
    c = l(331322),
    u = l(783878),
    g = l(834730),
    m = l(534514),
    p = l(778492),
    x = l(935462),
    A = l(228366),
    C = l(857182),
    b = l(47167),
    j = l(713654),
    y = l(915089),
    f = l(548118),
    N = l(734057),
    E = l(808728),
    v = l(71393),
    S = l(576705),
    w = l(994500),
    F = l(309010),
    k = l(287809),
    I = l(954571),
    O = l(935208),
    M = l(652215),
    L = l(985018),
    _ = l(199214);
class D extends s.PureComponent {
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
            headerId: (0, y.Ld)("modal"),
        };
    }
    componentDidMount() {
        I.default.track(M.HAw.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, b.m1)(t, k.default, w.A);
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
                        (0, d.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([l.e("27952"), l.e("28907")]).then(
                                l.bind(l, 209674),
                            );
                            return (t) => (0, n.jsx)(e, { ...t });
                        });
                })
                .catch((e) => {
                    e.body.code === M.t02.TOO_MANY_WEBHOOKS
                        ? this.setState({ errorMessage: L.intl.string(L.t["1eZ4aB"]), submitting: !1 })
                        : this.setState({ errorMessage: L.intl.string(L.t.LgwhuN), submitting: !1 });
                }));
    };
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: l } = this.state,
            { onClose: s } = this.props;
        return (0, n.jsxs)(o.e, {
            direction: "horizontal-reverse",
            children: [
                (0, n.jsx)(h.$, {
                    variant: "primary",
                    text: L.intl.string(L.t["3aOv+h"]),
                    loading: l,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, n.jsx)(h.$, { variant: "secondary", text: L.intl.string(L.t["ETE/oC"]), onClick: s }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: l, selectedChannelId: s, errorMessage: a } = this.state,
            i = O.default.keys(e).map((t) => {
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
                    label: (0, b.m1)(t, k.default, w.A),
                    leading: (function (e) {
                        if (null == e) return null;
                        let t = (0, j.gU)(e);
                        return null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor", className: _.Kk });
                    })(t),
                };
            }),
            d = 0 === i.length,
            o = d ? L.intl.string(L.t["6b6QoF"]) : L.intl.string(L.t.Z0quyN);
        return (0, n.jsxs)(c.B, {
            gap: 16,
            children: [
                (0, n.jsx)(u.Z, {
                    selectionMode: "single",
                    label: L.intl.string(L.t.xFn72s),
                    value: l,
                    options: i,
                    disabled: d,
                    onSelectionChange: (e) => this.handleGuildSelect(e),
                }),
                (0, n.jsx)(u.Z, {
                    selectionMode: "single",
                    label: L.intl.string(L.t.PDn2fR),
                    value: s,
                    options: r,
                    disabled: 0 === r.length,
                    onSelectionChange: (e) => this.handleChannelSelect(e),
                }),
                (0, n.jsx)(g.E, {
                    variant: "text-sm/normal",
                    color: d || null != a ? "text-feedback-critical" : "text-muted",
                    className: _.ML,
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
            className: _.rf,
            children: [
                (0, n.jsx)(m.D, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: L.intl.string(L.t.mvPFbA),
                }),
                (0, n.jsx)(g.E, {
                    color: "text-muted",
                    className: i()(_.O1, { [_.lK]: !e }),
                    variant: "text-sm/normal",
                    children: L.intl.string(L.t.kbpkxJ),
                }),
                e
                    ? (0, n.jsx)(g.E, {
                          className: i()(_.lK, _.O1),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: L.intl.string(L.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        let { guildToFollow: e, channelNameToFollow: t, channel: l } = this.props,
            s = (0, j.gU)(l) ?? p.k;
        return (0, n.jsxs)(x.rQ, {
            className: _.wx,
            children: [
                (0, n.jsx)(f.Ay, { guild: e, size: f.Ay.Sizes.LARGE }),
                (0, n.jsx)("div", {
                    className: _.nU,
                    children: (0, n.jsxs)("div", {
                        className: _.Ix,
                        children: [
                            (0, n.jsx)(s, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: _.p,
                            }),
                            (0, n.jsx)(g.E, { variant: "text-md/medium", className: _.HA, children: t }),
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
                (0, n.jsxs)(x.$m, { className: _.Qs, children: [this.renderBody(), this.renderForm()] }),
                (0, n.jsx)(x.jl, { children: this.renderFooter() }),
            ],
        });
    }
}
let B = r.Ay.connectStores(
    [v.A, F.A, k.default, w.A, E.Ay, S.A, N.A],
    (e) => {
        let { channel: t } = e,
            l = v.A.getGuild(t.guild_id),
            n = v.A.getGuildsArray().reduce((e, t) => {
                let l = E.Ay.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === M.rbe.GUILD_TEXT && S.A.can(M.xBc.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = N.A.getChannel(e.parent_id);
                        return { channel: e, category: null != t ? (0, b.m1)(t, k.default, w.A) : null };
                    });
                return l.length > 0 && (e[t.id] = { guild: t, channels: l }), e;
            }, {}),
            s = F.A.getLastChannelFollowingDestination();
        return {
            guildToFollow: l,
            channelNameToFollow: (0, b.m1)(t, k.default, w.A),
            guilds: n,
            lastChannelFollowingDestination: s ?? {},
        };
    },
    { forwardRef: !0 },
)(D);
