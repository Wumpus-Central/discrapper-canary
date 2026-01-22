n.d(t, { default: () => E }), n(896048);
var l = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(311907),
    d = n(397927),
    o = n(73153),
    c = n(857182),
    u = n(47167),
    h = n(713654),
    g = n(915089),
    m = n(263063),
    p = n(734057),
    f = n(808728),
    x = n(71393),
    b = n(576705),
    A = n(994500),
    j = n(309010),
    C = n(287809),
    y = n(954571),
    O = n(661191),
    v = n(652215),
    w = n(985018),
    N = n(183759);
function S(e, t, n) {
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
class _ extends s.PureComponent {
    componentDidMount() {
        y.default.track(v.HAw.OPEN_MODAL, {
            type: "Follow Channel Modal",
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: "Chat Input Blocker - Follow Channel",
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return "general" === (0, u.m1)(t, C.default, A.A);
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null;
    }
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: n } = this.state,
            { onClose: s } = this.props;
        return (0, l.jsxs)(d.ButtonGroup, {
            direction: "horizontal-reverse",
            children: [
                (0, l.jsx)(d.Button, {
                    variant: "primary",
                    text: w.intl.string(w.t["3aOv+h"]),
                    loading: n,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                }),
                (0, l.jsx)(d.Button, {
                    variant: "secondary",
                    text: w.intl.string(w.t["ETE/oC"]),
                    onClick: s,
                }),
            ],
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: s, errorMessage: r } = this.state,
            a = O.default.keys(e).map((t) => {
                let { guild: n } = e[t];
                return {
                    id: t,
                    value: t,
                    label: n.name,
                    leading:
                        null == n
                            ? null
                            : (0, l.jsx)(m.A, {
                                  guild: n,
                                  size: m.A.Sizes.MINI,
                              }),
                };
            }),
            i = t.map((e) => {
                let { channel: t } = e;
                return {
                    id: t.id,
                    value: t.id,
                    label: (0, u.m1)(t, C.default, A.A),
                    leading: (function (e) {
                        if (null == e) return null;
                        let t = (0, h.gU)(e);
                        return (
                            null != t &&
                            (0, l.jsx)(t, {
                                size: "xs",
                                color: "currentColor",
                                className: N.Kk,
                            })
                        );
                    })(t),
                };
            }),
            o = 0 === a.length,
            c = o ? w.intl.string(w.t["6b6QoF"]) : w.intl.string(w.t.Z0quyN);
        return (0, l.jsxs)(d.BJc, {
            gap: 16,
            children: [
                (0, l.jsx)(d.ZiE, {
                    selectionMode: "single",
                    label: w.intl.string(w.t.xFn72s),
                    value: n,
                    options: a,
                    disabled: o,
                    onSelectionChange: (e) => this.handleGuildSelect(e),
                }),
                (0, l.jsx)(d.ZiE, {
                    selectionMode: "single",
                    label: w.intl.string(w.t.PDn2fR),
                    value: s,
                    options: i,
                    disabled: 0 === i.length,
                    onSelectionChange: (e) => this.handleChannelSelect(e),
                }),
                (0, l.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    color: o || null != r ? "text-feedback-critical" : "text-muted",
                    className: N.ML,
                    children: null != r ? r : c,
                }),
            ],
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e },
        } = this.props;
        return (0, l.jsxs)("div", {
            className: N.rf,
            children: [
                (0, l.jsx)(d.Heading, {
                    variant: "heading-lg/semibold",
                    id: this.state.headerId,
                    children: w.intl.string(w.t.mvPFbA),
                }),
                (0, l.jsx)(d.Text, {
                    color: "text-muted",
                    className: a()(N.O1, { [N.lK]: !e }),
                    variant: "text-sm/normal",
                    children: w.intl.string(w.t.kbpkxJ),
                }),
                e
                    ? (0, l.jsx)(d.Text, {
                          className: a()(N.lK, N.O1),
                          color: "text-feedback-critical",
                          variant: "text-sm/normal",
                          children: w.intl.string(w.t["DrNm/5"]),
                      })
                    : null,
            ],
        });
    }
    renderHeader() {
        var e;
        let { guildToFollow: t, channelNameToFollow: n, channel: s } = this.props,
            r = null != (e = (0, h.gU)(s)) ? e : d.koX;
        return (0, l.jsxs)(d.rQ0, {
            className: N.wx,
            children: [
                (0, l.jsx)(m.A, {
                    guild: t,
                    size: m.A.Sizes.LARGE,
                }),
                (0, l.jsx)("div", {
                    className: N.nU,
                    children: (0, l.jsxs)("div", {
                        className: N.Ix,
                        children: [
                            (0, l.jsx)(r, {
                                size: "custom",
                                color: "currentColor",
                                width: 20,
                                height: 20,
                                className: N.p,
                            }),
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/medium",
                                className: N.HA,
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
        return (0, l.jsxs)(d.EOs, {
            transitionState: e,
            "aria-labelledby": this.state.headerId,
            parentComponent: "FollowModal",
            children: [
                this.renderHeader(),
                (0, l.jsxs)(d.$mQ, {
                    className: N.Qs,
                    children: [this.renderBody(), this.renderForm()],
                }),
                (0, l.jsx)(d.jlY, { children: this.renderFooter() }),
            ],
        });
    }
    constructor(e) {
        super(e),
            S(this, "handleGuildSelect", (e) => {
                let { guilds: t } = this.props,
                    { selectedGuildId: n } = this.state,
                    l = t[e].channels,
                    s = this.getDefaultChannelId(l);
                n !== e &&
                    this.setState({
                        selectedGuildId: e,
                        selectedChannelId: s,
                        channels: l,
                    });
            }),
            S(this, "handleChannelSelect", (e) => {
                this.setState({ selectedChannelId: e });
            }),
            S(this, "handleFollow", () => {
                let { channel: e, onClose: t } = this.props,
                    { selectedChannelId: s, selectedGuildId: r } = this.state;
                null != s &&
                    (this.setState({ submitting: !0 }),
                    c.A.createChannelFollower(s, e.id)
                        .then(() => {
                            o.h.dispatch({
                                type: "CHANNEL_FOLLOWER_CREATED",
                                channelId: s,
                                guildId: r,
                            }),
                                t(),
                                (0, d.mMO)(async () => {
                                    let { default: e } = await n.e("9795").then(n.bind(n, 993390));
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
                                                            S(e, t, n[t]);
                                                        });
                                                }
                                                return e;
                                            })({}, t),
                                        );
                                });
                        })
                        .catch((e) => {
                            e.body.code === v.t02.TOO_MANY_WEBHOOKS
                                ? this.setState({
                                      errorMessage: w.intl.string(w.t["1eZ4aB"]),
                                      submitting: !1,
                                  })
                                : this.setState({
                                      errorMessage: w.intl.string(w.t.LgwhuN),
                                      submitting: !1,
                                  });
                        }));
            });
        const { guilds: t, lastChannelFollowingDestination: s } = e,
            { guildId: r, channelId: a } = s;
        this.state = {
            selectedGuildId: r,
            selectedChannelId: a,
            channels: null != r && null != t[r] ? t[r].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.Ld)("modal"),
        };
    }
}
let E = i.Ay.connectStores(
    [x.A, p.A, f.Ay, b.A, j.A],
    (e) => {
        let { channel: t } = e,
            n = x.A.getGuild(t.guild_id),
            l = x.A.getGuildsArray().reduce((e, t) => {
                let n = f.Ay.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === v.rbe.GUILD_TEXT && b.A.can(v.xBc.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = p.A.getChannel(e.parent_id);
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
            s = j.A.getLastChannelFollowingDestination();
        return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != s ? s : {},
        };
    },
    { forwardRef: !0 },
)(_);
