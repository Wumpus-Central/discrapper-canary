n.d(t, { Z: () => S }), n(415506), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(493683),
    c = n(239091),
    u = n(146773),
    d = n(201895),
    f = n(703656),
    h = n(592125),
    p = n(430824),
    g = n(496675),
    m = n(98597),
    b = n(473403),
    _ = n(981631),
    y = n(490897),
    O = n(55940);
function v(e, t, n) {
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
function j(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    let n = t.getGuildId();
    if (null == n) throw Error("TextChannel, preloadChannel: Channel does not have a guildId");
    s.Z.preload(n, t.id);
}
class x extends m.ZP {
    render() {
        let {
                channel: e,
                selected: t,
                connectChannelDropTarget: n,
                connectChannelDragSource: i,
                connectDragPreview: l,
                canReorderChannel: a,
            } = this.props,
            s = (0, r.jsx)("li", {
                className: o()(this.getClassName(), { [O.disabled]: this.isDisabled() }),
                "data-dnd-name": e.name,
                children: (0, r.jsxs)(b.ZP, {
                    className: O.iconVisibility,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: C,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: a ? l : null,
                    "aria-label": (0, d.ZP)({ channel: e }),
                    resolvedUnreadSetting: y.i.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()],
                }),
            });
        return a ? n(i(s)) : s;
    }
    constructor(...e) {
        super(...e),
            v(this, "handleContextMenu", (e) => {
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
                                })(j({}, n), {
                                    channel: t,
                                    guild: i,
                                }),
                            );
                    });
            }),
            v(this, "handleClick", (e) => {
                !(function (e) {
                    let t = e.getGuildId();
                    if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                    (0, f.uL)(_.Z5c.CHANNEL(t, e.id), {
                        state: {
                            analyticsSource: {
                                page: _.ZY5.GUILD_CHANNEL,
                                section: _.jXE.CHANNEL_LIST,
                                object: _.qAy.CHANNEL,
                            },
                        },
                    });
                })(e);
            });
    }
}
let E = (0, u.B)(x),
    S = i.memo(function (e) {
        let { channel: t, guild: n, disableSorting: i } = e,
            l = (0, a.cj)([h.Z, g.Z], () => {
                let e = h.Z.getChannel(t.parent_id);
                return {
                    canManageChannel: g.Z.can(_.Plq.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== i && null != e ? g.Z.can(_.Plq.MANAGE_CHANNELS, e) : g.Z.can(_.Plq.MANAGE_CHANNELS, n),
                };
            });
        return (0, r.jsx)(E, j({}, l, e));
    });
