(n.d(t, { default: () => k }), n(388685));
var l = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    i = n(442837),
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
    j = n(699516),
    C = n(944486),
    M = n(594174),
    _ = n(626135),
    y = n(709054),
    N = n(981631),
    Z = n(388032),
    v = n(455864);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class O extends r.PureComponent {
    componentDidMount() {
        _.default.track(N.rMx.OPEN_MODAL, {
            type: 'Follow Channel Modal',
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: 'Chat Input Blocker - Follow Channel'
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return 'general' === (0, h.F6)(t, M.default, j.Z);
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null;
    }
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: n } = this.state,
            { onClose: s } = this.props;
        return (0, l.jsxs)(r.Fragment, {
            children: [
                (0, l.jsx)(o.zxk, {
                    submitting: n,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t,
                    children: Z.intl.string(Z.t['3aOv+v'])
                }),
                (0, l.jsx)(o.zxk, {
                    look: o.zxk.Looks.LINK,
                    color: o.zxk.Colors.PRIMARY,
                    onClick: s,
                    children: Z.intl.string(Z.t['ETE/oK'])
                })
            ]
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: s, errorMessage: a } = this.state,
            i = y.default.keys(e).map((t) => {
                let { guild: n } = e[t];
                return {
                    value: t,
                    label: n.name,
                    guild: n
                };
            }),
            d = t.map((e) => {
                let { channel: t, category: n } = e;
                return {
                    value: t.id,
                    label: (0, h.F6)(t, M.default, j.Z),
                    channel: t,
                    category: n
                };
            }),
            c = 0 === i.length,
            g = c ? Z.intl.string(Z.t['6b6QoK']) : Z.intl.string(Z.t.Z0quyM);
        return (0, l.jsxs)(r.Fragment, {
            children: [
                (0, l.jsx)(o.xJW, {
                    className: v.bottomMargin,
                    title: Z.intl.string(Z.t.xFn72t),
                    children: (0, l.jsx)(o.VcW, {
                        value: n,
                        options: i,
                        isDisabled: c,
                        onChange: this.handleGuildSelect,
                        renderOptionPrefix: (e) =>
                            (function (e) {
                                if (null == e) return null;
                                let { guild: t } = e;
                                return (0, l.jsx)(m.Z, {
                                    guild: t,
                                    size: m.Z.Sizes.MINI
                                });
                            })(e)
                    })
                }),
                (0, l.jsx)(o.xJW, {
                    className: v.bottomMargin,
                    title: Z.intl.string(Z.t.PDn2fX),
                    children: (0, l.jsx)(o.VcW, {
                        value: s,
                        options: d,
                        isDisabled: 0 === d.length,
                        onChange: this.handleChannelSelect,
                        renderOptionPrefix: (e) =>
                            (function (e) {
                                if (null == e) return null;
                                let { channel: t } = e,
                                    n = (0, u.KS)(t);
                                return (
                                    null != n &&
                                    (0, l.jsx)(n, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: v.icon
                                    })
                                );
                            })(e)
                    })
                }),
                (0, l.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: c || null != a ? 'text-danger' : 'text-muted',
                    className: v.bottomMargin,
                    children: null != a ? a : g
                })
            ]
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e }
        } = this.props;
        return (0, l.jsxs)('div', {
            className: v.body,
            children: [
                (0, l.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    id: this.state.headerId,
                    children: Z.intl.string(Z.t.mvPFbG)
                }),
                (0, l.jsx)(o.Text, {
                    color: 'text-muted',
                    className: a()(v.topMargin, { [v.formMargin]: !e }),
                    variant: 'text-sm/normal',
                    children: Z.intl.string(Z.t.kbpkxM)
                }),
                e
                    ? (0, l.jsx)(o.Text, {
                          className: a()(v.formMargin, v.topMargin),
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          children: Z.intl.string(Z.t['DrNm//'])
                      })
                    : null
            ]
        });
    }
    renderHeader() {
        var e;
        let { guildToFollow: t, channelNameToFollow: n, channel: r } = this.props,
            s = null != (e = (0, u.KS)(r)) ? e : o.MqZ;
        return (0, l.jsxs)(o.xBx, {
            className: v.header,
            children: [
                (0, l.jsx)(m.Z, {
                    guild: t,
                    size: m.Z.Sizes.LARGE
                }),
                (0, l.jsx)('div', {
                    className: v.channelContainer,
                    children: (0, l.jsxs)('div', {
                        className: v.channel,
                        children: [
                            (0, l.jsx)(s, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: v.channelIcon
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                className: v.channelName,
                                children: n
                            })
                        ]
                    })
                })
            ]
        });
    }
    render() {
        let { transitionState: e } = this.props;
        return (0, l.jsxs)(o.Y0X, {
            transitionState: e,
            'aria-labelledby': this.state.headerId,
            parentComponent: 'FollowModal',
            children: [
                this.renderHeader(),
                (0, l.jsxs)(o.hzk, {
                    className: v.content,
                    children: [this.renderBody(), this.renderForm()]
                }),
                (0, l.jsx)(o.mzw, { children: this.renderFooter() })
            ]
        });
    }
    constructor(e) {
        (super(e),
            S(this, 'handleGuildSelect', (e) => {
                let { guilds: t } = this.props,
                    { selectedGuildId: n } = this.state,
                    l = t[e].channels,
                    r = this.getDefaultChannelId(l);
                n !== e &&
                    this.setState({
                        selectedGuildId: e,
                        selectedChannelId: r,
                        channels: l
                    });
            }),
            S(this, 'handleChannelSelect', (e) => {
                this.setState({ selectedChannelId: e });
            }),
            S(this, 'handleFollow', () => {
                let { channel: e, onClose: t } = this.props,
                    { selectedChannelId: r, selectedGuildId: s } = this.state;
                null != r &&
                    (this.setState({ submitting: !0 }),
                    c.Z.createChannelFollower(r, e.id)
                        .then(() => {
                            (d.Z.dispatch({
                                type: 'CHANNEL_FOLLOWER_CREATED',
                                channelId: r,
                                guildId: s
                            }),
                                t(),
                                (0, o.ZDy)(async () => {
                                    let { default: e } = await n.e('14760').then(n.bind(n, 897140));
                                    return (t) =>
                                        (0, l.jsx)(
                                            e,
                                            (function (e) {
                                                for (var t = 1; t < arguments.length; t++) {
                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                        l = Object.keys(n);
                                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                                        (l = l.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            })
                                                        )),
                                                        l.forEach(function (t) {
                                                            S(e, t, n[t]);
                                                        }));
                                                }
                                                return e;
                                            })({}, t)
                                        );
                                }));
                        })
                        .catch((e) => {
                            e.body.code === N.evJ.TOO_MANY_WEBHOOKS
                                ? this.setState({
                                      errorMessage: Z.intl.string(Z.t['1eZ4aG']),
                                      submitting: !1
                                  })
                                : this.setState({
                                      errorMessage: Z.intl.string(Z.t.LgwhuL),
                                      submitting: !1
                                  });
                        }));
            }));
        let { guilds: t, lastChannelFollowingDestination: r } = e,
            { guildId: s, channelId: a } = r;
        this.state = {
            selectedGuildId: s,
            selectedChannelId: a,
            channels: null != s && null != t[s] ? t[s].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.hQ)('modal')
        };
    }
}
let k = i.ZP.connectStores(
    [f.Z, p.Z, b.ZP, x.Z, C.Z],
    (e) => {
        let { channel: t } = e,
            n = f.Z.getGuild(t.guild_id),
            l = f.Z.getGuildsArray().reduce((e, t) => {
                let n = b.ZP.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === N.d4z.GUILD_TEXT && x.Z.can(N.Plq.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = p.Z.getChannel(e.parent_id);
                        return {
                            channel: e,
                            category: null != t ? t.name : null
                        };
                    });
                return (
                    n.length > 0 &&
                        (e[t.id] = {
                            guild: t,
                            channels: n
                        }),
                    e
                );
            }, {}),
            r = C.Z.getLastChannelFollowingDestination();
        return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != r ? r : {}
        };
    },
    { forwardRef: !0 }
)(O);
