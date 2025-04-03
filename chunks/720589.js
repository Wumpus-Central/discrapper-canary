n.d(t, { default: () => k }), n(47120);
var l = n(200651),
    r = n(192379),
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
    b = n(592125),
    f = n(984933),
    p = n(430824),
    x = n(496675),
    N = n(699516),
    j = n(944486),
    C = n(594174),
    M = n(626135),
    _ = n(709054),
    v = n(981631),
    y = n(388032),
    S = n(455864);
function Z(e, t, n) {
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
        M.default.track(v.rMx.OPEN_MODAL, {
            type: 'Follow Channel Modal',
            num_guild_permissions: Object.keys(this.props.guilds).length,
            location: 'Chat Input Blocker - Follow Channel'
        });
    }
    getDefaultChannelId(e) {
        let t = e.find((e) => {
                let { channel: t } = e;
                return 'general' === (0, h.F6)(t, C.default, N.Z);
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
                    children: y.NW.string(y.t['3aOv+v'])
                }),
                (0, l.jsx)(o.zxk, {
                    look: o.zxk.Looks.LINK,
                    color: o.zxk.Colors.PRIMARY,
                    onClick: s,
                    children: y.NW.string(y.t['ETE/oK'])
                })
            ]
        });
    }
    renderForm() {
        let { guilds: e } = this.props,
            { channels: t, selectedGuildId: n, selectedChannelId: s, errorMessage: a } = this.state,
            i = _.default.keys(e).map((t) => {
                let { guild: n } = e[t];
                return {
                    value: t,
                    label: n.toString(),
                    guild: n
                };
            }),
            d = t.map((e) => {
                let { channel: t, category: n } = e;
                return {
                    value: t.id,
                    label: (0, h.F6)(t, C.default, N.Z),
                    channel: t,
                    category: n
                };
            }),
            c = 0 === i.length,
            g = c ? y.NW.string(y.t['6b6QoK']) : y.NW.string(y.t.Z0quyM);
        return (0, l.jsxs)(r.Fragment, {
            children: [
                (0, l.jsx)(o.xJW, {
                    className: S.bottomMargin,
                    title: y.NW.string(y.t.xFn72t),
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
                    className: S.bottomMargin,
                    title: y.NW.string(y.t.PDn2fX),
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
                                        className: S.icon
                                    })
                                );
                            })(e)
                    })
                }),
                (0, l.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: c || null != a ? 'text-danger' : 'text-muted',
                    className: S.bottomMargin,
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
            className: S.body,
            children: [
                (0, l.jsx)(o.X6q, {
                    variant: 'heading-lg/semibold',
                    id: this.state.headerId,
                    children: y.NW.string(y.t.mvPFbG)
                }),
                (0, l.jsx)(o.Text, {
                    color: 'text-muted',
                    className: a()(S.topMargin, { [S.formMargin]: !e }),
                    variant: 'text-sm/normal',
                    children: y.NW.string(y.t.kbpkxM)
                }),
                e
                    ? (0, l.jsx)(o.Text, {
                          className: a()(S.formMargin, S.topMargin),
                          color: 'text-danger',
                          variant: 'text-sm/normal',
                          children: y.NW.string(y.t['DrNm//'])
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
            className: S.header,
            children: [
                (0, l.jsx)(m.Z, {
                    guild: t,
                    size: m.Z.Sizes.LARGE
                }),
                (0, l.jsx)('div', {
                    className: S.channelContainer,
                    children: (0, l.jsxs)('div', {
                        className: S.channel,
                        children: [
                            (0, l.jsx)(s, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 20,
                                height: 20,
                                className: S.channelIcon
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                className: S.channelName,
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
            children: [
                this.renderHeader(),
                (0, l.jsxs)(o.hzk, {
                    className: S.content,
                    children: [this.renderBody(), this.renderForm()]
                }),
                (0, l.jsx)(o.mzw, { children: this.renderFooter() })
            ]
        });
    }
    constructor(e) {
        super(e),
            Z(this, 'handleGuildSelect', (e) => {
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
            Z(this, 'handleChannelSelect', (e) => {
                this.setState({ selectedChannelId: e });
            }),
            Z(this, 'handleFollow', () => {
                let { channel: e, onClose: t } = this.props,
                    { selectedChannelId: r, selectedGuildId: s } = this.state;
                null != r &&
                    (this.setState({ submitting: !0 }),
                    c.Z.createChannelFollower(r, e.id)
                        .then(() => {
                            d.Z.dispatch({
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
                                                    'function' == typeof Object.getOwnPropertySymbols &&
                                                        (l = l.concat(
                                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                            })
                                                        )),
                                                        l.forEach(function (t) {
                                                            Z(e, t, n[t]);
                                                        });
                                                }
                                                return e;
                                            })({}, t)
                                        );
                                });
                        })
                        .catch((e) => {
                            e.body.code === v.evJ.TOO_MANY_WEBHOOKS
                                ? this.setState({
                                      errorMessage: y.NW.string(y.t['1eZ4aG']),
                                      submitting: !1
                                  })
                                : this.setState({
                                      errorMessage: y.NW.string(y.t.LgwhuL),
                                      submitting: !1
                                  });
                        }));
            });
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
    [p.Z, b.Z, f.ZP, x.Z, j.Z],
    (e) => {
        let { channel: t } = e,
            n = p.Z.getGuild(t.guild_id),
            l = Object.values(p.Z.getGuilds()).reduce((e, t) => {
                let n = f.ZP.getChannels(t.id)
                    .SELECTABLE.map((e) => e.channel)
                    .filter((e) => e.type === v.d4z.GUILD_TEXT && x.Z.can(v.Plq.MANAGE_WEBHOOKS, e))
                    .map((e) => {
                        let t = b.Z.getChannel(e.parent_id);
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
            r = j.Z.getLastChannelFollowingDestination();
        return {
            guildToFollow: n,
            channelNameToFollow: t.name,
            guilds: l,
            lastChannelFollowingDestination: null != r ? r : {}
        };
    },
    { forwardRef: !0 }
)(O);
