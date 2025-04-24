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
    let { guild: t, selectedChannelId: l, position: c, disableManageChannels: y, sorting: _, sortingType: O, sortingPosition: v, connectChannelDragSource: C, connectChannelDropTarget: S, tabIndex: j } = e,
        E = (0, s.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        x = (0, s.e7)([u.Z], () => u.Z.getChannel(null == E ? void 0 : E.parent_id)),
        I = l === (null == E ? void 0 : E.id),
        P = (0, s.e7)([h.Z], () => (null != x ? h.Z.can(g.Plq.MANAGE_CHANNELS, x) : null != t && h.Z.can(g.Plq.MANAGE_CHANNELS, t))),
        w = i.useCallback(
            (e) => {
                null != E &&
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
                                (i = i = { channel: E }),
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
            [E]
        );
    if (null == E) return null;
    let N = (0, p.jo)(c, v),
        Z = (0, p.CN)(E, _, O),
        T = (0, r.jsx)('div', {
            className: o()(N, {
                [b.disabled]: Z,
                [b.selected]: I
            }),
            'data-dnd-name': E.name,
            children: (0, r.jsxs)(f.ZP, {
                className: b.iconVisibility,
                channel: E,
                guild: t,
                selected: I,
                onContextMenu: w,
                forceInteractable: !0,
                resolvedUnreadSetting: m.i.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(p.eP, {
                        channel: E,
                        tabIndex: j
                    }),
                    (0, r.jsx)(p.hR, {
                        channel: E,
                        disableManageChannels: y,
                        tabIndex: j
                    })
                ]
            })
        });
    return P && (T = S(C(T))), T;
});
