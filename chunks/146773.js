n.d(t, { B: () => P });
var r = n(200651);
n(192379);
var i = n(155281),
    l = n(222146),
    o = n(433517),
    a = n(481060),
    s = n(749210),
    c = n(170509),
    u = n(740504),
    d = n(117984),
    p = n(398758),
    h = n(680089),
    f = n(592125),
    g = n(324067),
    m = n(984933),
    b = n(430824),
    y = n(496675),
    _ = n(914010),
    v = n(281029),
    O = n(700785),
    j = n(981631);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let C = 'DRAGGABLE_GUILD_CHANNEL';
function S(e, t) {
    var n, r;
    if (null == e || null == t) return null;
    if (e !== j.I_8) return f.Z.getChannel(t);
    let i = m.ZP.getChannels(e),
        l = null != (r = null != (n = i[m.sH].find((e) => e.channel.id === t)) ? n : i[m.Zb].find((e) => e.channel.id === t)) ? r : i[j.d4z.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return null == l ? void 0 : l.channel;
}
function P(e) {
    return (0, i.G)(
        C,
        {
            drop(e, t) {
                let n,
                    i = _.Z.getGuildId(),
                    l = t.getItem(),
                    o = (0, v.if)(S(i, l.id), l.position, e.channel, e.position, l.channelList);
                if (null == o) return;
                let u = S(i, l.id);
                if (null == u) return;
                let p = g.Z.getCategories(i),
                    h = b.Z.getGuild(i);
                if (null == h) return;
                let m = (0, v.Dn)(u, S(i, o.referenceId), o.parentId, p);
                if (0 !== m.length) {
                    if (i === j.I_8) return void (0, d.s3)(m);
                    if (
                        ((m = m.filter((e) => {
                            let { id: t } = e,
                                n = f.Z.getChannel(t);
                            if (null == n) return !1;
                            let r = f.Z.getChannel(n.parent_id);
                            return n.type === j.d4z.GUILD_CATEGORY || null == r ? y.Z.can(j.Plq.MANAGE_CHANNELS, h) : y.Z.can(j.Plq.MANAGE_CHANNELS, r);
                        })),
                        u.parent_id !== o.parentId &&
                            m.find((e) => {
                                if (e.id !== u.id) return !1;
                                let t = f.Z.getChannel(e.parent_id);
                                if (!(null != t && y.Z.can(j.Plq.MANAGE_ROLES, u) && y.Z.can(j.Plq.MANAGE_ROLES, t))) return !0;
                                let r = O.o4(u, t),
                                    i = O.o4(u, f.Z.getChannel(u.parent_id));
                                return ((null != u.parent_id || r) && (!i || r)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = f.Z.getChannel(n.parent_id);
                        null != e &&
                            (0, a.h7j)((t) => {
                                var l, o;
                                return (0, r.jsx)(
                                    c.default,
                                    ((l = x({}, t)),
                                    (o = o =
                                        {
                                            channel: u,
                                            category: e,
                                            onConfirm: () => {
                                                null != n && ((n.lock_permissions = !0), s.Z.batchChannelUpdate(i, m));
                                            },
                                            onCancel: () => {
                                                null != n && s.Z.batchChannelUpdate(i, m);
                                            }
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
                            });
                    } else s.Z.batchChannelUpdate(i, m);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    r = f.Z.getChannel(n.id);
                if (null == r) return !1;
                let i = (0, v.if)(f.Z.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == i) return !1;
                if (_.Z.getGuildId() === j.I_8) return !0;
                let l = b.Z.getGuild(n.guildId);
                if (null == l) return !1;
                let o = f.Z.getChannel(i.parentId),
                    a = f.Z.getChannel(r.parent_id),
                    s = y.Z.can(j.Plq.MANAGE_CHANNELS, l),
                    c = null != a ? y.Z.can(j.Plq.MANAGE_CHANNELS, a) : s,
                    u = null != o ? y.Z.can(j.Plq.MANAGE_CHANNELS, o) : s;
                return c && u;
            }
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null
                  };
        }
    )(
        (0, l.E)(
            C,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if (_.Z.getGuildId() === j.I_8) return !0;
                    let i = b.Z.getGuild(t.getGuildId());
                    if (null == i) return !1;
                    if ((0, p.r1)(i.id) && y.Z.can(j.Plq.MANAGE_CHANNELS, i))
                        return (
                            'true' !== o.K.get('doNotShowReorderModal') &&
                                (0, a.ZDy)(async () => {
                                    let { default: e } = await n.e('82560').then(n.bind(n, 391312));
                                    return (t) => (0, r.jsx)(e, x({}, t));
                                }),
                            !1
                        );
                    if (t.type === j.d4z.GUILD_CATEGORY) return y.Z.can(j.Plq.MANAGE_CHANNELS, i) && !(0, p.r1)(i.id);
                    let l = f.Z.getChannel(t.parent_id);
                    return (null != l && y.Z.can(j.Plq.MANAGE_CHANNELS, l)) || (null == l && y.Z.can(j.Plq.MANAGE_CHANNELS, i));
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: r, type: i },
                            position: l
                        } = e,
                        o = _.Z.getGuildId(),
                        a = g.Z.getCategories(o);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: l,
                        parentId: n,
                        type: i,
                        channelList: (0, u.Z)(a._categories, a, (e) => {
                            let { channel: t } = e;
                            return t.type === j.d4z.GUILD_CATEGORY && null != a[t.id] && 0 === a[t.id].length ? o === j.I_8 || (y.Z.can(j.Plq.MANAGE_CHANNELS, t) && y.Z.can(j.Plq.VIEW_CHANNEL, t)) : !h.Z.isCollapsed(t.parent_id);
                        }),
                        guildId: r
                    };
                }
            },
            (e) => ({
                connectChannelDragSource: e.dragSource(),
                connectDragPreview: e.dragPreview()
            })
        )(e)
    );
}
