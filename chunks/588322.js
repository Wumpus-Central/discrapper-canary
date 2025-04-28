n.d(t, { Z: () => C });
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(239091),
    a = n(561472),
    s = n(933557),
    c = n(287746),
    u = n(541716),
    d = n(665149),
    p = n(910611),
    h = n(703656),
    f = n(664342),
    m = n(592125),
    g = n(703558),
    b = n(430824),
    _ = n(228392),
    y = n(388032),
    x = n(43200);
function C(e) {
    let { channelId: t } = e,
        C = (0, l.e7)([m.Z], () => m.Z.getChannel(t)),
        v = (0, l.e7)([m.Z], () => m.Z.getChannel(null == C ? void 0 : C.parent_id)),
        j = (0, l.e7)([b.Z], () => b.Z.getGuild(null == C ? void 0 : C.getGuildId())),
        O = (0, s.ZP)(C),
        E = i.useRef(!1);
    if (
        (i.useEffect(() => {
            null == C || E.current || ((E.current = !0), (0, _.lN)(C));
        }, [C]),
        null == C || null == j)
    )
        return null;
    let I = (0, r.jsx)(f.Z, { channel: C });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(a.Z, {
                channel: C,
                draftType: g.d.ChannelMessage
            }),
            (0, r.jsx)(d.ZP, {
                toolbar: I,
                'aria-label': y.intl.string(y.t.Pwe8tL),
                children: (0, p.ud)({
                    channel: C,
                    parentChannel: v,
                    channelName: O,
                    guild: j,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, o.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) => {
                                var n, i;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
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
                                    })({}, t)),
                                    (i = i = { channel: C }),
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
                        null != C && (0, h.XU)(C.guild_id, C.id);
                    }
                })
            }),
            (0, r.jsx)('div', {
                className: x.chat,
                children: (0, r.jsx)(
                    c.Z,
                    {
                        channel: C,
                        guild: j,
                        chatInputType: u.Ie.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
