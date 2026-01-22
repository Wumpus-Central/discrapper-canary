n.d(t, { A: () => G }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(311907),
    u = n(990078),
    d = n(397927),
    f = n(442433),
    p = n(730134),
    h = n(964486),
    b = n(80682),
    g = n(58736),
    m = n(967144),
    A = n(342296),
    y = n(696451),
    O = n(576705),
    j = n(290863),
    v = n(849736),
    x = n(113783),
    E = n(925931),
    _ = n(105530),
    C = n(699970),
    S = n(345687),
    I = n(818348),
    N = n(985018),
    T = n(684205);
function P(e) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = l.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            l = (0, r.jsx)(g.Ay.Icon, {
                icon: d.PGe,
                tooltip: N.intl.string(N.t.cpT0Cq),
                onClick: t,
            });
        return (0, r.jsxs)(g.Ay, {
            toolbar: l,
            className: a()(T.N1, { [T.X_]: n }),
            children: [
                (0, r.jsx)(g.Ay.Icon, {
                    icon: d.E7M,
                    disabled: !0,
                    "aria-label": N.intl.string(N.t.TYZgzW),
                }),
                (0, r.jsx)(g.Ay.Title, { children: N.intl.string(N.t.TYZgzW) }),
            ],
        });
    }),
    D = l.memo(function (e) {
        var t;
        let { channel: i, participant: a, tempDisableOnInit: s = !1 } = e,
            g = l.useRef(null),
            [O, x] = l.useState(s);
        (0, h.Ay)(() => {
            if (!O) return;
            let e = setTimeout(() => x(!1), 1000);
            return () => clearTimeout(e);
        });
        let C = i.getGuildId();
        o()(null != C, "Channel cannot be guildless");
        let { isMobile: S, status: I } = (0, c.cf)([j.A], () => ({
                isMobile: j.A.isMobileOnline(a.user.id),
                status: j.A.getStatus(a.user.id, C),
            })),
            R = (0, c.bG)([y.Ay], () => y.Ay.getMember(C, a.user.id)),
            D = (0, m.gn)(
                i.guild_id,
                null == R ? void 0 : R.userId,
                null != (t = null == R ? void 0 : R.colorStrings) ? t : null,
            ),
            M = l.useMemo(() => ({ [C]: [a.user.id] }), [C, a.user.id]);
        (0, b.E)(M, "RequestToSpeakSidebar");
        let L = a.rtsState === _.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            G = (e) => {
                (0, f.L3)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("97262"),
                        n.e("29534"),
                        n.e("55296"),
                        n.e("84841"),
                        n.e("91609"),
                    ]).then(n.bind(n, 107632));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            w(P({}, t), {
                                user: a.user,
                                guildId: C,
                                channel: i,
                                showMediaItems: !0,
                            }),
                        );
                });
            };
        return (0, r.jsxs)("div", {
            className: T.fn,
            children: [
                (0, r.jsx)(A.A, {
                    targetElementRef: g,
                    user: a.user,
                    guildId: i.guild_id,
                    channelId: i.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(
                            d.DUT,
                            w(
                                P(
                                    {
                                        innerRef: g,
                                        className: T.$u,
                                        onContextMenu: G,
                                    },
                                    e,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.A, {
                                            size: d._3J.SIZE_40,
                                            className: T.RB,
                                            user: a.user,
                                            isMobile: S,
                                            status: I,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: T.kH,
                                            children: [
                                                (0, r.jsx)(d.gyj, {
                                                    name: a.userNick,
                                                    colorString:
                                                        null != (t = null == R ? void 0 : R.colorString) ? t : null,
                                                    colorStrings: D,
                                                    className: T.F8,
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: (0, E.g)(a),
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                            ),
                        );
                    },
                }),
                (0, r.jsxs)("div", {
                    className: T.UD,
                    children: [
                        (0, r.jsx)(u.m, {
                            text: L ? N.intl.string(N.t.h9rsTd) : N.intl.string(N.t.f0T7hI),
                            asContainer: !0,
                            children: (0, r.jsx)(d.K0, {
                                onClick: function () {
                                    (0, v.lL)(i, a.user.id, !1);
                                },
                                disabled: L || O,
                                icon: d.LvC,
                                variant: "secondary",
                                "aria-label": L ? N.intl.string(N.t.h9rsTd) : N.intl.string(N.t.f0T7hI),
                            }),
                        }),
                        (0, r.jsx)(u.m, {
                            text: N.intl.string(N.t.moABMy),
                            asContainer: !0,
                            children: (0, r.jsx)(d.K0, {
                                "aria-label": N.intl.string(N.t.moABMy),
                                onClick: function () {
                                    (0, v.lL)(i, a.user.id, !0);
                                },
                                icon: d.PGe,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    M = l.memo(function (e) {
        let { channel: t } = e,
            [n, l] = (0, C.X)(t.id);
        return (0, r.jsx)(d.dOG, {
            label: N.intl.string(N.t.GYCh0W),
            checked: n,
            onChange: l,
        });
    }),
    L = l.memo(function () {
        return (0, r.jsxs)("div", {
            className: T.y7,
            children: [
                (0, r.jsx)(S.A, {}),
                (0, r.jsx)(d.Text, {
                    className: T.vo,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: N.intl.string(N.t["7R24mX"]),
                }),
                (0, r.jsx)(d.Text, {
                    className: T.XG,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: N.intl.string(N.t.Rpr2s0),
                }),
            ],
        });
    });
function G(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: l } = e,
        i = (0, x.J2)(t.id),
        s = [
            +!!(0, c.bG)([O.A], () => O.A.can(I.xB.MANAGE_CHANNELS, t) || O.A.can(I.xB.MANAGE_ROLES, t)),
            Math.max(1, i.length),
        ];
    return (0, r.jsxs)("div", {
        className: a()(T.kL, { [T.X_]: l }),
        children: [
            (0, r.jsx)(R, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: l,
            }),
            (0, r.jsx)(d.B8B, {
                className: T.hQ,
                sections: s,
                sectionHeight: function (e) {
                    return 40 * (1 === e);
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === i.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: l } = e;
                    switch (n) {
                        case 0:
                            return (0, r.jsx)(M, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === i.length) return (0, r.jsx)(L, {}, "participants-empty");
                            let e = i[l];
                            return (0, r.jsx)(
                                D,
                                {
                                    channel: t,
                                    participant: e,
                                    tempDisableOnInit: !0,
                                },
                                e.id,
                            );
                        }
                    }
                    return null;
                },
                renderSection: function (e) {
                    let { section: t } = e;
                    return 1 === t
                        ? (0, r.jsx)(
                              d.Text,
                              {
                                  className: T.Vu,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      i.length > 0
                                          ? N.intl.formatToPlainString(N.t["5z7q5a"], { numHands: i.length })
                                          : N.intl.string(N.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
