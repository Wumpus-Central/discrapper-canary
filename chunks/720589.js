n.d(t, { default: () => w }), n(388685);
var l = n(951288),
    r = n(647438),
    a = n(120356),
    i = n.n(a),
    s = n(442837),
    o = n(481060),
    d = n(570140),
    c = n(528963),
    h = n(933557),
    u = n(471445),
    g = n(313201),
    m = n(565138),
    p = n(592125),
    b = n(984933),
    f = n(430824),
    x = n(496675),
    C = n(699516),
    j = n(944486),
    y = n(594174),
    _ = n(626135),
    M = n(709054),
    v = n(981631),
    Z = n(388032),
    S = n(360242);
function N(e, t, n) {
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
class O extends r.PureComponent {
    componentDidMount() {
        _.default.track(v.rMx.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, h.F6)(t, y.default, C.Z);
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null;
    }
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: n } = this.state,
            { onClose: r } = this.props;
        return (0, l.jsxs)(o.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, l.jsx)(o.Button, {
                    variant: "primary",
                    text: Z.intl.string(Z.t["3aOv+v"]),
                    loading: n,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, l.jsx)(o.Button, {
                    variant: "secondary",
                    text: Z.intl.string(Z.t["ETE/oK"]),
                    onClick: r,
                }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: r, errorMessage: a } = this.state,
            i = M.default.keys(e).map((t) => {
                let { guild: n } = e[t];
                return {
                    value: t,
                    label: n.name,
                    guild: n,
                };
            }),
            s = t.map((e) => {
                let { channel: t, category: n } = e;
                return {
                    value: t.id,
                    label: (0, h.F6)(t, y.default, C.Z),
                    channel: t,
                    category: n,
                };
            }),
            d = 0 === i.length,
            c = d ? Z.intl.string(Z.t["6b6QoK"]) : Z.intl.string(Z.t.Z0quyM);
        return (0, l.jsxs)(o.Kqy, {
            gap: 16,
            children: [
                (0, l.jsx)(o.VcW, {
                    label: Z.intl.string(Z.t.xFn72t),
                    value: n,
                    options: i,
                    isDisabled: d,
                    onChange: this.handleGuildSelect,
                    renderOptionPrefix: (e) =>
                        (function (e) {
                            if (null == e) return null;
                            let { guild: t } = e;
                            return (0, l.jsx)(m.Z, {
                                guild: t,
                                size: m.Z.Sizes.MINI,
                            });
                        })(e),
                }),
                (0, l.jsx)(o.VcW, {
                    label: Z.intl.string(Z.t.PDn2fX),
                    value: r,
                    options: s,
                    isDisabled: 0 === s.length,
                    onChange: this.handleChannelSelect,
                    renderOptionPrefix: (e) =>
                        (function (e) {
                            if (null == e) return null;
                            let { channel: t } = e,
                                n = (0, u.KS)(t);
                            return (
                                null != n &&
                                (0, l.jsx)(n, {
                                    size: "xs",
                                    color: "currentColor",
                                    className: S.icon,
                                })
                            );
                        })(e),
                }),
                (0, l.jsx)(o.Text, {
                    variant: "text-sm/normal",
                    color: d || null != a ? "text-danger" : "text-muted",
                    className: S.bottomMargin,
                    children: null != a ? a : c,
                }),
            ],
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e },
        } = this.props;
        return (0, l.jsxs)("div", {
            className: S.body,
            children: [
                (0, l.jsx)(o.Heading, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: Z.intl.string(Z.t.mvPFbG),
                }),
                (0, l.jsx)(o.Text, {
                    color: "text-muted",
                    className: i()(S.topMargin, { [S.formMargin]: !e }),
                    variant: "text-sm/normal",
                    children: Z.intl.string(Z.t.kbpkxM),
                }),
                e
                    ? (0, l.jsx)(o.Text, {
                          className: i()(S.formMargin, S.topMargin),
                          color: "text-danger",
                          variant: "text-sm/normal",
                          children: Z.intl.string(Z.t["DrNm//"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        var e;
        let { guildToFollow: t, channelNameToFollow: n, channel: r } = this.props,
            a = null != (e = (0, u.KS)(r)) ? e : o.MqZ;
        return (0, l.jsxs)(o.xBx, {
            className: S.header,
            children: [
                (0, l.jsx)(m.Z, {
                    guild: t,
                    size: m.Z.Sizes.LARGE,
                }),
                (0, l.jsx)("div", {
                    className: S.channelContainer,
                    children: (0, l.jsxs)("div", {
                        className: S.channel,
                        children: [
                            (0, l.jsx)(a, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: S.channelIcon,
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                className: S.channelName,
                                children: n,
                            }),
                        ],
                    }),
                }),
            ],
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, l.jsxs)(o.Y0X, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [
                this.renderHeader(),
                (0, l.jsxs)(o.hzk, {
                    className: S.content,
                    children: [this.renderBody(), this.renderForm()],
                }),
                (0, l.jsx)(o.mzw, { children: this.renderFooter() }),
            ],
        });
    }
    constructor(e) {
        super(e),
            N(this, "handleGuildSelect", (e) => {
                let { guilds: t } = this.props,
                    { selectedGuildId: n } = this.state,
                    l = t[e].channels,
                    r = this.getDefaultChannelId(l);
                n !== e &&
                    this.setState({
                        selectedGuildId: e,
                        selectedChannelId: r,
                        channels: l,
                    });
            }),
            N(this, "handleChannelSelect", (e) => {
                this.setState({ selectedChannelId: e });
            }),
            N(this, "handleFollow", () => {
                let { channel: e, onClose: t } = this.props,
                    { selectedChannelId: r, selectedGuildId: a } = this.state;
                null != r &&
                    (this.setState({ submitting: !0 }),
                    c.Z.createChannelFollower(r, e.id)
                        .then(() => {
                            d.Z.dispatch({
                                type: "CHANNEL_FOLLOWER_CREATED",
                                channelId: r,
                                guildId: a,
                            }),
                                t(),
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await n.e("14760").then(n.bind(n, 897140));
                                    return (t) =>
                                        (0, l.jsx)(
                                            e,
                                            (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        l = Object.keys(n);
                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                        (l = l.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            }),
                                                        )),
                                                        l.forEach(function (t) {
                                                            N(e, t, n[t]);
                                                        });
                                                }
                                                return e;
                                            })({}, t),
                                        );
                                });
                        })
                        .catch((e) => {
                            e.body.code === v.evJ.TOO_MANY_WEBHOOKS
                                ? this.setState({
                                      errorMessage: Z.intl.string(Z.t["1eZ4aG"]),
                                      submitting: !1,
                                  })
                                : this.setState({
                                      errorMessage: Z.intl.string(Z.t.LgwhuL),
                                      submitting: !1,
                                  });
                        }));
            });
        let { guilds: t, lastChannelFollowingDestination: r } = e,
            { guildId: a, channelId: i } = r;
        this.state = {
            selectedGuildId: a,
            selectedChannelId: i,
            channels: null != a && null != t[a] ? t[a].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.hQ)("modal"),
        };
    }
}
let w = s.ZP.connectStores(
    [f.Z, p.Z, b.ZP, x.Z, j.Z],
    (e) => {
        let { channel: t } = e,
            n = f.Z.getGuild(t.guild_id),
            l = f.Z.getGuildsArray().reduce((e, t) => {
                let n = b.ZP.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === v.d4z.GUILD_TEXT && x.Z.can(v.Plq.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = p.Z.getChannel(e.parent_id);
                        return {
                            channel: e,
                            category: null != t ? t.name : null,
                        };
                    });
                return (
                    n.length > 0 &&
                        (e[t.id] = {
                            guild: t,
                            channels: n,
                        }),
                    e
                );
            }, {}),
            r = j.Z.getLastChannelFollowingDestination();
        return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != r ? r : {},
        };
    },
    { forwardRef: !0 },
)(O);
