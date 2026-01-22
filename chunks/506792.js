n.d(t, { A: () => A });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(311907),
    o = n(442433),
    c = n(676002),
    u = n(734057),
    d = n(808728),
    f = n(576705),
    p = n(557534),
    h = n(166444),
    b = n(652215),
    g = n(790782),
    m = n(728444);
let A = (0, c.a)(function (e) {
    let {
            guild: t,
            selectedChannelId: i,
            position: c,
            disableManageChannels: A,
            sorting: y,
            sortingType: O,
            sortingPosition: j,
            connectChannelDragSource: v,
            connectChannelDropTarget: x,
            tabIndex: E,
        } = e,
        _ = (0, s.bG)([u.A, d.Ay], () => {
            let e = d.Ay.getDirectoryChannelIds(t.id);
            return 0 === e.length ? null : u.A.getChannel(e[0]);
        }),
        C = (0, s.bG)([u.A], () => u.A.getChannel(null == _ ? void 0 : _.parent_id)),
        S = i === (null == _ ? void 0 : _.id),
        I = (0, s.bG)([f.A], () =>
            null != C ? f.A.can(b.xBc.MANAGE_CHANNELS, C) : null != t && f.A.can(b.xBc.MANAGE_CHANNELS, t),
        ),
        N = l.useCallback(
            (e) => {
                null != _ &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await n.e("29559").then(n.bind(n, 994058));
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
                                (l = l = { channel: _ }),
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
            [_],
        );
    if (null == _) return null;
    let T = (0, p.O6)(c, j),
        P = (0, p.h$)(_, y, O),
        w = (0, r.jsx)("div", {
            className: a()(T, {
                [m.r9]: P,
                [m.wH]: S,
            }),
            "data-dnd-name": _.name,
            children: (0, r.jsxs)(h.Ay, {
                className: m.Ki,
                channel: _,
                guild: t,
                selected: S,
                onContextMenu: N,
                forceInteractable: !0,
                resolvedUnreadSetting: g.e.ONLY_MENTIONS,
                children: [
                    (0, r.jsx)(p.gQ, {
                        channel: _,
                        tabIndex: E,
                    }),
                    (0, r.jsx)(p.Jd, {
                        channel: _,
                        disableManageChannels: A,
                        tabIndex: E,
                    }),
                ],
            }),
        });
    return I && (w = x(v(w))), w;
});
