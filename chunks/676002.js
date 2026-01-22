n.d(t, { a: () => C });
var r = n(627968);
n(64700);
var l = n(205369),
    i = n(22174),
    a = n(397927),
    s = n(686956),
    o = n(999903),
    c = n(544169),
    u = n(422258),
    d = n(770376),
    f = n(395504),
    p = n(924985),
    h = n(734057),
    b = n(769765),
    g = n(808728),
    m = n(71393),
    A = n(576705),
    y = n(967198),
    O = n(343360),
    j = n(488926),
    v = n(652215);
function x(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let E = "DRAGGABLE_GUILD_CHANNEL";
function _(e, t) {
    var n, r;
    if (null == e || null == t) return null;
    if (e !== v.YYv) return h.A.getChannel(t);
    let l = g.Ay.getChannels(e),
        i =
            null !=
            (n = null != (r = l[g.I6].find((e) => e.channel.id === t)) ? r : l[g.vM].find((e) => e.channel.id === t))
                ? n
                : l[v.rbe.GUILD_CATEGORY].find((e) => e.channel.id === t);
    return null == i ? void 0 : i.channel;
}
function C(e) {
    return (0, l.T)(
        E,
        {
            drop(e, t) {
                let n,
                    l = y.A.getGuildId(),
                    i = t.getItem(),
                    o = (0, O.QO)(_(l, i.id), i.position, e.channel, e.position, i.channelList);
                if (null == o) return;
                let d = _(l, i.id);
                if (null == d) return;
                let f = b.A.getCategories(l),
                    p = m.A.getGuild(l);
                if (null == p) return;
                let g = (0, O.Zj)(d, _(l, o.referenceId), o.parentId, f);
                if (0 !== g.length) {
                    if (l === v.YYv) return void (0, u.S_)(g);
                    if (
                        ((g = g.filter((e) => {
                            let { id: t } = e,
                                n = h.A.getChannel(t);
                            if (null == n) return !1;
                            let r = h.A.getChannel(n.parent_id);
                            return n.type === v.rbe.GUILD_CATEGORY || null == r
                                ? A.A.can(v.xBc.MANAGE_CHANNELS, p)
                                : A.A.can(v.xBc.MANAGE_CHANNELS, r);
                        })),
                        d.parent_id !== o.parentId &&
                            g.find((e) => {
                                if (e.id !== d.id) return !1;
                                let t = h.A.getChannel(e.parent_id);
                                if (!(null != t && A.A.can(v.xBc.MANAGE_ROLES, d) && A.A.can(v.xBc.MANAGE_ROLES, t)))
                                    return !0;
                                let r = j.r(d, t),
                                    l = j.r(d, h.A.getChannel(d.parent_id));
                                return ((null != d.parent_id || r) && (!l || r)) || (n = e), !0;
                            }),
                        null != n)
                    ) {
                        let e = h.A.getChannel(n.parent_id);
                        null != e &&
                            (0, a.qfG)((t) => {
                                var i, a;
                                return (0, r.jsx)(
                                    c.default,
                                    ((i = x({}, t)),
                                    (a = a =
                                        {
                                            channel: d,
                                            category: e,
                                            onConfirm: () => {
                                                null != n && ((n.lock_permissions = !0), s.A.batchChannelUpdate(l, g));
                                            },
                                            onCancel: () => {
                                                null != n && s.A.batchChannelUpdate(l, g);
                                            },
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
                            });
                    } else s.A.batchChannelUpdate(l, g);
                }
            },
            canDrop(e, t) {
                let n = t.getItem(),
                    r = h.A.getChannel(n.id);
                if (null == r) return !1;
                let l = (0, O.QO)(h.A.getChannel(n.id), n.position, e.channel, e.position, n.channelList);
                if (null == l) return !1;
                if (y.A.getGuildId() === v.YYv) return !0;
                let i = m.A.getGuild(n.guildId);
                if (null == i) return !1;
                let a = h.A.getChannel(l.parentId),
                    s = h.A.getChannel(r.parent_id),
                    o = A.A.can(v.xBc.MANAGE_CHANNELS, i),
                    c = null != s ? A.A.can(v.xBc.MANAGE_CHANNELS, s) : o,
                    u = null != a ? A.A.can(v.xBc.MANAGE_CHANNELS, a) : o;
                return c && u;
            },
        },
        (e, t) => {
            let n = t.getItem();
            return null == n || null == n.isChannelDrag
                ? {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !1,
                      sortingType: null,
                      sortingPosition: null,
                      sortingParent: null,
                  }
                : {
                      connectChannelDropTarget: e.dropTarget(),
                      sorting: !0,
                      sortingType: n.type,
                      sortingPosition: t.isOver() && t.canDrop() ? n.position : null,
                      sortingParent: t.isOver() && t.canDrop() ? n.parentId : null,
                  };
        },
    )(
        (0, i.I)(
            E,
            {
                canDrag(e) {
                    let { channel: t } = e;
                    if (y.A.getGuildId() === v.YYv) return !0;
                    let l = m.A.getGuild(t.getGuildId());
                    if (null == l) return !1;
                    if ((0, f.WW)(l.id) && A.A.can(v.xBc.MANAGE_CHANNELS, l))
                        return (
                            (0, d.A)() &&
                                (0, a.mMO)(async () => {
                                    let { default: e } = await n.e("2467").then(n.bind(n, 354643));
                                    return (t) => (0, r.jsx)(e, x({}, t));
                                }),
                            !1
                        );
                    if (t.type === v.rbe.GUILD_CATEGORY) return A.A.can(v.xBc.MANAGE_CHANNELS, l) && !(0, f.WW)(l.id);
                    let i = h.A.getChannel(t.parent_id);
                    return (
                        (null != i && A.A.can(v.xBc.MANAGE_CHANNELS, i)) ||
                        (null == i && A.A.can(v.xBc.MANAGE_CHANNELS, l))
                    );
                },
                beginDrag(e) {
                    let {
                            channel: { id: t, parent_id: n, guild_id: r, type: l },
                            position: i,
                        } = e,
                        a = y.A.getGuildId(),
                        s = b.A.getCategories(a);
                    return {
                        isChannelDrag: !0,
                        id: t,
                        position: i,
                        parentId: n,
                        type: l,
                        channelList: (0, o.A)(s._categories, s, (e) => {
                            let { channel: t } = e;
                            return t.type === v.rbe.GUILD_CATEGORY && null != s[t.id] && 0 === s[t.id].length
                                ? a === v.YYv || (A.A.can(v.xBc.MANAGE_CHANNELS, t) && A.A.can(v.xBc.VIEW_CHANNEL, t))
                                : !p.A.isCollapsed(t.parent_id);
                        }),
                        guildId: r,
                    };
                },
            },
            (e) => ({
                connectChannelDragSource: e.dragSource(),
                connectDragPreview: e.dragPreview(),
            }),
        )(e),
    );
}
