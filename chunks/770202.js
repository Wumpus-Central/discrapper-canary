(n.d(t, { Z: () => x }), n(415506), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(493683),
    c = n(239091),
    u = n(146773),
    d = n(201895),
    h = n(703656),
    p = n(592125),
    f = n(430824),
    g = n(496675),
    m = n(98597),
    b = n(473403),
    _ = n(981631),
    O = n(490897),
    y = n(915887);
function C(e, t, n) {
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
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                C(e, t, n[t]);
            }));
    }
    return e;
}
function j(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error('TextChannel, preloadChannel: Channel does not have a guildId');
    s.Z.preload(n, t.id);
}
class E extends m.ZP {
    render() {
        let { channel: e, selected: t, connectChannelDropTarget: n, connectChannelDragSource: i, connectDragPreview: l, canReorderChannel: a } = this.props,
            s = (0, r.jsx)('li', {
                className: o()(this.getClassName(), { [y.disabled]: this.isDisabled() }),
                'data-dnd-name': e.name,
                children: (0, r.jsxs)(b.ZP, {
                    className: y.iconVisibility,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: j,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: a ? l : null,
                    'aria-label': (0, d.ZP)({ channel: e }),
                    resolvedUnreadSetting: O.i.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()]
                })
            });
        return a ? n(i(s)) : s;
    }
    constructor(...e) {
        (super(...e),
            C(this, 'handleContextMenu', (e) => {
                let { channel: t } = this.props,
                    i = f.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e('99905').then(n.bind(n, 649400));
                        return (n) => {
                            var l, o;
                            return (0, r.jsx)(
                                e,
                                ((l = v({}, n)),
                                (o = o =
                                    {
                                        channel: t,
                                        guild: i
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(o)).forEach(function (e) {
                                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                      }),
                                l)
                            );
                        };
                    });
            }),
            C(this, 'handleClick', (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error('TextChannel, transitionTo: Channel does not have a guildId');
                (0, h.uL)(_.Z5c.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: _.ZY5.GUILD_CHANNEL,
                            section: _.jXE.CHANNEL_LIST,
                            object: _.qAy.CHANNEL
                        }
                    }
                });
            }));
    }
}
let S = (0, u.B)(E),
    x = i.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, a.cj)([p.Z, g.Z], () => {
                let e = p.Z.getChannel(t.parent_id);
                return {
                    canManageChannel: g.Z.can(_.Plq.MANAGE_CHANNELS, t),
                    canReorderChannel: !0 !== i && null != e ? g.Z.can(_.Plq.MANAGE_CHANNELS, e) : g.Z.can(_.Plq.MANAGE_CHANNELS, n)
                };
            });
        return (0, r.jsx)(S, v({}, l, e));
    });
