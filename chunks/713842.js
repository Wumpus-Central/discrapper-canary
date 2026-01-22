n.d(t, {
    A: () => j,
});
var r = n(627968),
    l = n(64700),
    i = n(311907),
    a = n(442433),
    s = n(738876),
    o = n(47167),
    c = n(698718),
    u = n(355622),
    d = n(58736),
    f = n(353428),
    p = n(976860),
    h = n(823471),
    b = n(734057),
    g = n(31717),
    m = n(71393),
    A = n(853742),
    y = n(985018),
    O = n(388552);

function j(e) {
    let { channelId: t } = e,
        j = (0, i.bG)([b.A], () => b.A.getChannel(t)),
        v = (0, i.bG)([b.A], () => b.A.getChannel(null == j ? void 0 : j.parent_id)),
        x = (0, i.bG)([m.A], () => m.A.getGuild(null == j ? void 0 : j.getGuildId())),
        E = (0, o.Ay)(j),
        _ = l.useRef(!1);
    if (
        (l.useEffect(() => {
            null == j || _.current || ((_.current = !0), (0, A.rH)(j));
        }, [j]),
        null == j || null == x)
    )
        return null;
    let C = (0, r.jsx)(h.A, {
        channel: j,
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(s.A, {
                channel: j,
                draftType: g.C.ChannelMessage,
            }),
            (0, r.jsx)(d.Ay, {
                toolbar: C,
                "aria-label": y.intl.string(y.t.Pwe8tN),
                children: (0, f.zF)({
                    channel: j,
                    parentChannel: v,
                    channelName: E,
                    guild: x,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, a.L3)(e, async () => {
                            let { default: e } = await n.e("33").then(n.bind(n, 44536));
                            return (t) => {
                                var n, l;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
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
                                    })({}, t)),
                                    (l = l =
                                        {
                                            channel: j,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(l)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                                          }),
                                    n),
                                );
                            };
                        });
                    },
                    handleClick: function () {
                        null != j && (0, p.uh)(j.guild_id, j.id);
                    },
                }),
            }),
            (0, r.jsx)("div", {
                className: O.T,
                children: (0, r.jsx)(
                    c.A,
                    {
                        channel: j,
                        guild: x,
                        chatInputType: u.oU.SIDEBAR,
                    },
                    t,
                ),
            }),
        ],
    });
}
