n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(239091),
    s = n(561472),
    o = n(933557),
    c = n(287746),
    d = n(541716),
    u = n(665149),
    h = n(910611),
    p = n(703656),
    f = n(664342),
    g = n(592125),
    m = n(703558),
    b = n(430824),
    _ = n(228392),
    y = n(388032),
    j = n(43200);
function O(e) {
    let { channelId: t } = e,
        O = (0, l.e7)([g.Z], () => g.Z.getChannel(t)),
        x = (0, l.e7)([g.Z], () => g.Z.getChannel(null == O ? void 0 : O.parent_id)),
        v = (0, l.e7)([b.Z], () => b.Z.getGuild(null == O ? void 0 : O.getGuildId())),
        C = (0, o.ZP)(O),
        E = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == O || E.current || ((E.current = !0), (0, _.lN)(O));
        }, [O]),
        null == O || null == v)
    )
        return null;
    let Z = (0, r.jsx)(f.Z, { channel: O });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.Z, {
                channel: O,
                draftType: m.d.ChannelMessage
            }),
            (0, r.jsx)(u.ZP, {
                toolbar: Z,
                'aria-label': y.intl.string(y.t.Pwe8tL),
                children: (0, h.ud)({
                    channel: O,
                    parentChannel: x,
                    channelName: C,
                    guild: v,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, a.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) => {
                                var n, i;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
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
                                                    var r;
                                                    ((r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r));
                                                }));
                                        }
                                        return e;
                                    })({}, t)),
                                    (i = i = { channel: O }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n)
                                );
                            };
                        });
                    },
                    handleClick: function () {
                        null != O && (0, p.XU)(O.guild_id, O.id);
                    }
                })
            }),
            (0, r.jsx)('div', {
                className: j.chat,
                children: (0, r.jsx)(
                    c.Z,
                    {
                        channel: O,
                        guild: v,
                        chatInputType: d.Ie.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
