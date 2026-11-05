var n = l(477900),
    s = l(582128),
    i = l(503698),
    a = l.n(i),
    r = l(855986),
    d = l(935462),
    o = l(192308),
    h = l(825484),
    c = l(821609),
    u = l(331322),
    g = l(890497),
    m = l(834730),
    p = l(534514),
    x = l(778492),
    A = l(73153),
    b = l(857182),
    C = l(47167),
    y = l(713654),
    j = l(915089),
    f = l(682163),
    N = l(95701),
    E = l(734057),
    v = l(808728),
    S = l(71393),
    w = l(576705),
    F = l(994500),
    I = l(309010),
    k = l(287809),
    O = l(129230),
    M = l(811091),
    _ = l(652215),
    D = l(792996),
    L = l(262377);
class B extends s.PureComponent {
    constructor(e) {
        super(e);
        let { guilds: t, lastChannelFollowingDestination: l } = e,
            { guildId: n, channelId: s } = l;
        this.state = {
            selectedGuildId: n,
            selectedChannelId: s,
            channels: null != n && null != t[n] ? t[n].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, j.Ld)("modal"),
        };
    }
    componentDidMount() {
        O.default.track(_.HAw.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, C.m1)(t, k.default, F.A);
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
            { selectedChannelId: s, selectedGuildId: i } = this.state;
        null != s &&
            (this.setState({ submitting: !0 }),
            b.A.createChannelFollower(s, e.id)
                .then(() => {
                    (A.h.dispatch({ type: "CHANNEL_FOLLOWER_CREATED", channelId: s, guildId: i }),
                        t(),
                        (0, o.mM)(async () => {
                            let { default: e } = await Promise.all([l.e(418319), l.e(908004)]).then(l.bind(l, 505859));
                            return (t) => (0, n.jsx)(e, { ...t });
                        }));
                })
                .catch((e) => {
                    e.body.code === _.t02.TOO_MANY_WEBHOOKS
                        ? this.setState({ errorMessage: D.intl.string(D.t["1eZ4aB"]), submitting: !1 })
                        : this.setState({ errorMessage: D.intl.string(D.t.LgwhuN), submitting: !1 });
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
                    text: D.intl.string(D.t["3aOv+h"]),
                    loading: l,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, n.jsx)(c.$, { variant: "secondary", text: D.intl.string(D.t["ETE/oC"]), onClick: s }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: l, selectedChannelId: s, errorMessage: i } = this.state,
            a = M.default.keys(e).map((t) => {
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
                    label: (0, C.m1)(t, k.default, F.A),
                    leading: (function (e) {
                        if (null == e) return null;
                        let t = (0, y.gU)(e);
                        return null != t && (0, n.jsx)(t, { size: "xs", color: "currentColor", className: L.Kk });
                    })(t),
                };
            }),
            d = 0 === a.length,
            o = d ? D.intl.string(D.t["6b6QoF"]) : D.intl.string(D.t.Z0quyN);
        return (0, n.jsxs)(u.B, {
            gap: 16,
            children: [
                (0, n.jsx)(g.Z, {
                    selectionMode: "single",
                    label: D.intl.string(D.t.xFn72s),
                    value: l,
                    options: a,
                    disabled: d,
                    onSelectionChange: (e) => this.handleGuildSelect(e),
                }),
                (0, n.jsx)(g.Z, {
                    selectionMode: "single",
                    label: D.intl.string(D.t.PDn2fR),
                    value: s,
                    options: r,
                    disabled: 0 === r.length,
                    onSelectionChange: (e) => this.handleChannelSelect(e),
                }),
                (0, n.jsx)(m.E, {
                    variant: "body-sm/normal",
                    color: d || null != i ? "text-feedback-critical" : "text-muted",
                    className: L.ML,
                    children: null != i ? i : o,
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
                (0, n.jsx)(p.D, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: D.intl.string(D.t.mvPFbA),
                }),
                (0, n.jsx)(m.E, {
                    color: "text-muted",
                    className: a()(L.O1, { [L.lK]: !e }),
                    variant: "body-sm/normal",
                    children: D.intl.string(D.t.kbpkxJ),
                }),
                e
                    ? (0, n.jsx)(m.E, {
                          className: a()(L.lK, L.O1),
                          color: "text-feedback-critical",
                          variant: "body-sm/normal",
                          children: D.intl.string(D.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        let { guildToFollow: e, channelNameToFollow: t, channel: l } = this.props,
            s = (0, y.gU)(l) ?? x.AnnouncementsIcon;
        return (0, n.jsxs)(d.rQ, {
            className: L.wx,
            children: [
                (0, n.jsx)(f.Ay, { guild: e, size: f.Ay.Sizes.LARGE }),
                (0, n.jsx)("div", {
                    className: L.nU,
                    children: (0, n.jsxs)("div", {
                        className: L.Ix,
                        children: [
                            (0, n.jsx)(s, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: L.p,
                            }),
                            (0, n.jsx)(m.E, { variant: "body-md/medium", className: L.HA, children: t }),
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
                (0, n.jsxs)(d.$m, { className: L.Qs, children: [this.renderBody(), this.renderForm()] }),
                (0, n.jsx)(d.jl, { children: this.renderFooter() }),
            ],
        });
    }
}
let G = r.Ay.connectStores(
    [S.A, I.Ay, k.default, F.A, v.A, w.A, E.A],
    (e) => {
        let { channel: t } = e,
            l = S.A.getGuild(t.guild_id),
            n = S.A.getGuildsArray().reduce((e, t) => {
                let l = v.A.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => N.XD.has(e.type) && w.A.can(_.xBc.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = E.A.getChannel(e.parent_id);
                        return { channel: e, category: null != t ? (0, C.m1)(t, k.default, F.A) : null };
                    });
                return (l.length > 0 && (e[t.id] = { guild: t, channels: l }), e);
            }, {}),
            s = I.Ay.getLastChannelFollowingDestination();
        return {
            guildToFollow: l,
            channelNameToFollow: (0, C.m1)(t, k.default, F.A),
            guilds: n,
            lastChannelFollowingDestination: s ?? {},
        };
    },
    { forwardRef: !0 },
)(B);
l.d(t, {}, { default: G });
