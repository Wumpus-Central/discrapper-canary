n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(239091),
    c = n(146773),
    u = n(592125),
    d = n(984933),
    p = n(496675),
    f = n(98597),
    h = n(473403),
    g = n(981631),
    m = n(490897),
    b = n(55940);
let _ = (0, c.B)(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: c,
            disableManageChannels: _,
            sorting: y,
            sortingType: O,
            sortingPosition: v,
            connectChannelDragSource: j,
            connectChannelDropTarget: x,
            tabIndex: C,
        } = e,
        E = (0, a.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        S = (0, a.e7)([u.Z], () => u.Z.getChannel(null == E ? void 0 : E.parent_id)),
        I = l === (null == E ? void 0 : E.id),
        P = (0, a.e7)([p.Z], () =>
            null != S ? p.Z.can(g.Plq.MANAGE_CHANNELS, S) : null != t && p.Z.can(g.Plq.MANAGE_CHANNELS, t),
        ),
        N = i.useCallback(
            (e) => {
                null != E &&
                    (0, s.jW)(e, async () => {
                        let { default: e } = await n.e("70623").then(n.bind(n, 99334));
                        return (t) => {
                            var n, i;
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
                                n),
                            );
                        };
                    });
            },
            [E],
        );
    if (null == E) return null;
    let Z = (0, f.jo)(c, v),
        w = (0, f.CN)(E, y, O),
        T = (0, r.jsx)("div", {
            className: o()(Z, {
                [b.disabled]: w,
                [b.selected]: I,
            }),
            "data-dnd-name": E.name,
            children: (0, r.jsxs)(h.ZP, {
                className: b.iconVisibility,
                channel: E,
                guild: t,
                selected: I,
                onContextMenu: N,
                forceInteractable: !0,
                resolvedUnreadSetting: m.i.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(f.eP, {
                        channel: E,
                        tabIndex: C,
                    }),
                    (0, r.jsx)(f.hR, {
                        channel: E,
                        disableManageChannels: _,
                        tabIndex: C,
                    }),
                ],
            }),
        });
    return P && (T = x(j(T))), T;
});
