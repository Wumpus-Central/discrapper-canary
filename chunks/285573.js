n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(239091),
    c = n(146773),
    u = n(592125),
    d = n(984933),
    f = n(496675),
    h = n(98597),
    p = n(473403),
    g = n(981631),
    b = n(490897),
    m = n(642915);
let y = (0, c.B)(function (e) {
    let {
            guild: t,
            selectedChannelId: l,
            position: c,
            disableManageChannels: y,
            sorting: O,
            sortingType: v,
            sortingPosition: j,
            connectChannelDragSource: C,
            connectChannelDropTarget: x,
            tabIndex: E,
        } = e,
        S = (0, o.e7)([u.Z, d.ZP], () => {
            let e = d.ZP.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.Z.getChannel(e[0]);
        }),
        I = (0, o.e7)([u.Z], () => u.Z.getChannel(null == S ? void 0 : S.parent_id)),
        _ = l === (null == S ? void 0 : S.id),
        P = (0, o.e7)([f.Z], () =>
            null != I ? f.Z.can(g.Plq.MANAGE_CHANNELS, I) : null != t && f.Z.can(g.Plq.MANAGE_CHANNELS, t),
        ),
        N = i.useCallback(
            (e) => {
                null != S &&
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
                                (i = i = { channel: S }),
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
            [S],
        );
    if (null == S) return null;
    let Z = (0, h.jo)(c, j),
        w = (0, h.CN)(S, O, v),
        T = (0, r.jsx)("div", {
            className: a()(Z, {
                [m.disabled]: w,
                [m.selected]: _,
            }),
            "data-dnd-name": S.name,
            children: (0, r.jsxs)(p.ZP, {
                className: m.iconVisibility,
                channel: S,
                guild: t,
                selected: _,
                onContextMenu: N,
                forceInteractable: !0,
                resolvedUnreadSetting: b.i.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(h.eP, {
                        channel: S,
                        tabIndex: E,
                    }),
                    (0, r.jsx)(h.hR, {
                        channel: S,
                        disableManageChannels: y,
                        tabIndex: E,
                    }),
                ],
            }),
        });
    return P && (T = x(C(T))), T;
});
