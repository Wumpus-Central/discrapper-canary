(n.d(t, { default: () => w }), n(388685));
var l = n(255367),
    r = n(73800),
    a = n(120356),
    s = n.n(a),
    i = n(442837),
    o = n(481060),
    d = n(570140),
    c = n(528963),
    h = n(933557),
    u = n(471445),
    g = n(313201),
    m = n(565138),
    p = n(592125),
    f = n(984933),
    x = n(430824),
    b = n(496675),
    j = n(699516),
    C = n(944486),
    y = n(594174),
    M = n(626135),
    v = n(709054),
    _ = n(981631),
    N = n(388032),
    Z = n(455864);
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
        M.default.track(_.rMx.OPEN_MODAL, {
            type: 'Follow Channel Modal',
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: 'Chat Input Blocker - Follow Channel'
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return 'general' === (0, h.F6)(t, y.default, j.Z);
            }),
            n = null != t ? t : e[0];
        return null != n ? n.channel.id : null;
    }
    renderFooter() {
        let { selectedGuildId: e, selectedChannelId: t, submitting: n } = this.state,
            { onClose: r } = this.props;
        return (0, l.jsxs)(o.hE2, {
            direction: 'horizontal-reverse',
            children: [
                (0, l.jsx)(o.zxk, {
                    variant: 'primary',
                    text: N.intl.string(N.t['3aOv+v']),
                    loading: n,
                    onClick: this.handleFollow,
                    disabled: null == e || null == t
                }),
                (0, l.jsx)(o.zxk, {
                    variant: 'secondary',
                    text: N.intl.string(N.t['ETE/oK']),
                    onClick: r
                })
            ]
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: a, errorMessage: s } = this.state,
            i = v.default.keys(e).map((t) => {
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
                    label: (0, h.F6)(t, y.default, j.Z),
                    channel: t,
                    category: n
                };
            }),
            c = 0 === i.length,
            g = c ? N.intl.string(N.t['6b6QoK']) : N.intl.string(N.t.Z0quyM);
        return (0, l.jsxs)(r.Fragment, {
            children: [
                (0, l.jsx)(o.xJW, {
                    className: Z.bottomMargin,
                    title: N.intl.string(N.t.xFn72t),
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
                    className: Z.bottomMargin,
                    title: N.intl.string(N.t.PDn2fX),
                    children: (0, l.jsx)(o.VcW, {
                        value: a,
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
                                        className: Z.icon
                                    })
                                );
                            })(e)
                    })
                }),
                (0, l.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: c || null != s ? 'text-danger' : 'text-muted',
                    className: Z.bottomMargin,
                    children: null != s ? s : g
                })
            ]
        });
    }
    renderBody() {
        let {
            channel: { nsfw: e }
        } = this.props;
        return (0, l.jsxs)('div', {
            className: Z.body,
            children: [
                (0, l.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    id: this.state.headerId,
                    children: N.intl.string(N.t.mvPFbG)
                }),
                (0, l.jsx)(o.Text, {
                    color: 'text-muted',
                    className: s()(Z.topMargin, { [Z.formMargin]: !e }),
                    variant: 'text-sm/normal',
                    children: N.intl.string(N.t.kbpkxM)
                }),
                e
                    ? (0, l.jsx)(o.Text, {
                          className: s()(Z.formMargin, Z.topMargin),
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          children: N.intl.string(N.t['DrNm//'])
                      })
                    : null
            ]
        });
    }
    renderHeader() {
        var e;
        let { guildToFollow: t, channelNameToFollow: n, channel: r } = this.props,
            a = null != (e = (0, u.KS)(r)) ? e : o.MqZ;
        return (0, l.jsxs)(o.xBx, {
            className: Z.header,
            children: [
                (0, l.jsx)(m.Z, {
                    guild: t,
                    size: m.Z.Sizes.LARGE
                }),
                (0, l.jsx)('div', {
                    className: Z.channelContainer,
                    children: (0, l.jsxs)('div', {
                        className: Z.channel,
                        children: [
                            (0, l.jsx)(a, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: Z.channelIcon
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                className: Z.channelName,
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
                    className: Z.content,
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
                    { selectedChannelId: r, selectedGuildId: a } = this.state;
                null != r &&
                    (this.setState({ submitting: !0 }),
                    c.Z.createChannelFollower(r, e.id)
                        .then(() => {
                            (d.Z.dispatch({
                                type: 'CHANNEL_FOLLOWER_CREATED',
                                channelId: r,
                                guildId: a
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
                            e.body.code === _.evJ.TOO_MANY_WEBHOOKS
                                ? this.setState({
                                      errorMessage: N.intl.string(N.t['1eZ4aG']),
                                      submitting: !1
                                  })
                                : this.setState({
                                      errorMessage: N.intl.string(N.t.LgwhuL),
                                      submitting: !1
                                  });
                        }));
            }));
        let { guilds: t, lastChannelFollowingDestination: r } = e,
            { guildId: a, channelId: s } = r;
        this.state = {
            selectedGuildId: a,
            selectedChannelId: s,
            channels: null != a && null != t[a] ? t[a].channels : [],
            errorMessage: null,
            submitting: !1,
            headerId: (0, g.hQ)('modal')
        };
    }
}
let w = i.ZP.connectStores(
    [x.Z, p.Z, f.ZP, b.Z, C.Z],
    (e) => {
        let { channel: t } = e,
            n = x.Z.getGuild(t.guild_id),
            l = x.Z.getGuildsArray().reduce((e, t) => {
                let n = f.ZP.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === _.d4z.GUILD_TEXT && b.Z.can(_.Plq.MANAGE_WEBHOOKS, e))
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
