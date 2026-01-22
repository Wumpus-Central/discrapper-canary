n.d(t, {
    A: () => C,
}),
    n(65821),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(308528),
    c = n(442433),
    u = n(676002),
    d = n(963027),
    f = n(976860),
    p = n(734057),
    h = n(71393),
    b = n(576705),
    g = n(557534),
    m = n(166444),
    A = n(652215),
    y = n(790782),
    O = n(728444);

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

function v(e) {
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
    o.A.preload(n, t.id);
}
class E extends g.Ay {
    render() {
        let {
                channel: e,
                selected: t,
                connectChannelDropTarget: n,
                connectChannelDragSource: l,
                connectDragPreview: i,
                canReorderChannel: s,
            } = this.props,
            o = (0, r.jsx)("li", {
                className: a()(this.getClassName(), {
                    [O.r9]: this.isDisabled(),
                }),
                "data-dnd-name": e.name,
                children: (0, r.jsxs)(m.Ay, {
                    className: O.Ki,
                    channel: e,
                    selected: t,
                    onClick: this.handleClick,
                    onMouseDown: x,
                    onContextMenu: this.handleContextMenu,
                    connectDragPreview: s ? i : null,
                    "aria-label": (0, d.Ay)({
                        channel: e,
                    }),
                    resolvedUnreadSetting: y.e.ONLY_MENTIONS,
                    children: [this.renderInviteButton(), this.renderEditButton()],
                }),
            });
        return s ? n(l(o)) : o;
    }
    constructor(...e) {
        super(...e),
            j(this, "handleContextMenu", (e) => {
                let { channel: t } = this.props,
                    l = h.A.getGuild(t.getGuildId());
                null != l &&
                    (0, c.L3)(e, async () => {
                        let { default: e } = await n.e("15669").then(n.bind(n, 313140));
                        return (n) => {
                            var i, a;
                            return (0, r.jsx)(
                                e,
                                ((i = v({}, n)),
                                (a = a =
                                    {
                                        channel: t,
                                        guild: l,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                i),
                            );
                        };
                    });
            }),
            j(this, "handleClick", (e) => {
                let t = e.getGuildId();
                if (null == t) throw Error("TextChannel, transitionTo: Channel does not have a guildId");
                (0, f.pX)(A.BVt.CHANNEL(t, e.id), {
                    state: {
                        analyticsSource: {
                            page: A.liQ.GUILD_CHANNEL,
                            section: A.JJy.CHANNEL_LIST,
                            object: A.ZSU.CHANNEL,
                        },
                    },
                });
            });
    }
}
let _ = (0, u.a)(E),
    C = l.memo(function (e) {
        let { channel: t, guild: n, disableSorting: l } = e,
            i = (0, s.cf)([p.A, b.A], () => {
                let e = p.A.getChannel(t.parent_id);
                return {
                    canManageChannel: b.A.can(A.xBc.MANAGE_CHANNELS, t),
                    canReorderChannel:
                        !0 !== l && null != e ? b.A.can(A.xBc.MANAGE_CHANNELS, e) : b.A.can(A.xBc.MANAGE_CHANNELS, n),
                };
            });
        return (0, r.jsx)(_, v({}, i, e));
    });
