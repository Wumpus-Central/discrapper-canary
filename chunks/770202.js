n.d(t, { Z: () => I }), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(493683),
    c = n(239091),
    u = n(146773),
    d = n(201895),
    f = n(703656),
    h = n(592125),
    p = n(430824),
    g = n(496675),
    b = n(98597),
    m = n(473403),
    y = n(981631),
    O = n(490897),
    v = n(642915);
function j(e, t, n) {
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                j(e, t, n[t]);
            });
    }
    return e;
}
function x(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    s.Z.preload(n, t.id);
}
class E extends b.ZP {
    render() {
        let {
                channel: e,
                selected: t,
                connectChannelDropTarget: n,
                connectChannelDragSource: i,
                connectDragPreview: l,
                canReorderChannel: o,
            } = this.props,
            s = (0, r.jsx)("li", {
                className: a()(this.getClassName(), { [v.disabled]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: (0, r.jsxs)(m.ZP, {
                    className: v.iconVisibility,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: x,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: o ? l : null,
                    "aria-label": (0, d.ZP)({ channel: e }),
                    resolvedUnreadSetting: O.i.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()],
                }),
            });
        return o ? n(i(s)) : s;
    }
    constructor(...e) {
        super(...e),
            j(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    i = p.Z.getGuild(t.getGuildId());
                null != i &&
                    (0, c.jW)(e, async () => {
                        let { default: e } = await n.e("99905").then(n.bind(n, 649400));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                (function (e, t) {
                                    return (
                                        (t = null != t ? t : {}),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(t)).forEach(function (n) {
                                                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                              }),
                                        e
                                    );
                                })(C({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            }),
            j(this, "handleClick", (e) => {
                !(function (e) {
                    let t = e.getGuildId();
                    if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                    (0, f.uL)(y.Z5c.CHANNEL(t, e.id), {
                        state: {
                            analyticsSource: {
                                page: y.ZY5.GUILD_CHANNEL,
                                section: y.jXE.CHANNEL_LIST,
                                object: y.qAy.CHANNEL,
                            },
                        },
                    });
                })(e);
            });
    }
}
let S = (0, u.B)(E),
    I = i.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, o.cj)([h.Z, g.Z], () => {
                let e = h.Z.getChannel(t.parent_id);
                return {
                    canManageChannel: g.Z.can(y.Plq.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? g.Z.can(y.Plq.MANAGE_CHANNELS, e) : g.Z.can(y.Plq.MANAGE_CHANNELS, n),
                };
            });
        return (0, r.jsx)(S, C({}, l, e));
    });
