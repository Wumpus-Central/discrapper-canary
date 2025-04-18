n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(239091),
    c = n(146773),
    u = n(592125),
    d = n(984933),
    h = n(496675),
    p = n(98597),
    f = n(473403),
    g = n(981631),
    m = n(490897),
    b = n(915887);
let y = (0, c.B)(function (e) {
    let { guild: t, selectedChannelId: l, position: c, disableManageChannels: y, sorting: _, sortingType: O, sortingPosition: v, connectChannelDragSource: C, connectChannelDropTarget: j, tabIndex: S } = e,
        x = (0, s.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        E = (0, s.e7)([u.Z], () => u.Z.getChannel(null == x ? void 0 : x.parent_id)),
        I = l === (null == x ? void 0 : x.id),
        N = (0, s.e7)([h.Z], () => (null != E ? h.Z.can(g.Plq.MANAGE_CHANNELS, E) : null != t && h.Z.can(g.Plq.MANAGE_CHANNELS, t))),
        P = i.useCallback(
            (e) => {
                null != x &&
                    (0, a.jW)(e, async () => {
                        let { default: e } = await n.e('70623').then(n.bind(n, 99334));
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
                                (i = i = { channel: x }),
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
            [x]
        );
    if (null == x) return null;
    let w = (0, p.jo)(c, v),
        Z = (0, p.CN)(x, _, O),
        T = (0, r.jsx)('div', {
            className: o()(w, {
                [b.disabled]: Z,
                [b.selected]: I
            }),
            'data-dnd-name': x.name,
            children: (0, r.jsxs)(f.ZP, {
                className: b.iconVisibility,
                channel: x,
                guild: t,
                selected: I,
                onContextMenu: P,
                forceInteractable: !0,
                resolvedUnreadSetting: m.i.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(p.eP, {
                        channel: x,
                        tabIndex: S
                    }),
                    (0, r.jsx)(p.hR, {
                        channel: x,
                        disableManageChannels: y,
                        tabIndex: S
                    })
                ]
            })
        });
    return N && (T = j(C(T))), T;
});
