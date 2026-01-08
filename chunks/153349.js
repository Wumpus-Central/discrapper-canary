n.d(t, { Z: () => k }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    p = n(239091),
    f = n(99690),
    h = n(493773),
    g = n(616780),
    m = n(665149),
    b = n(884902),
    y = n(670188),
    v = n(271383),
    O = n(496675),
    j = n(158776),
    x = n(471253),
    C = n(431328),
    E = n(145834),
    S = n(590415),
    _ = n(614173),
    I = n(618896),
    P = n(231338),
    Z = n(388032),
    N = n(200537);
function T(e) {
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
function A(e, t) {
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
let w = i.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, r.jsx)(m.ZP.Icon, {
                icon: d.Dio,
                tooltip: Z.intl.string(Z.t.cpT0Cq),
                onClick: t,
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: a()(N.headerContainer, { [N.chatOpen]: n }),
            children: [
                (0, r.jsx)(m.ZP.Icon, {
                    icon: d.V9,
                    disabled: !0,
                    "aria-label": Z.intl.string(Z.t.TYZgzW),
                }),
                (0, r.jsx)(m.ZP.Title, { children: Z.intl.string(Z.t.TYZgzW) }),
            ],
        });
    }),
    R = i.memo(function (e) {
        var t;
        let { channel: l, participant: a, tempDisableOnInit: o = !1 } = e,
            m = i.useRef(null),
            [O, C] = i.useState(o);
        (0, h.ZP)(() => {
            if (!O) return;
            let e = setTimeout(() => C(!1), 1000);
            return () => clearTimeout(e);
        });
        let _ = l.getGuildId();
        s()(null != _, "Channel cannot be guildless");
        let { isMobile: I, status: P } = (0, c.cj)([j.Z], () => ({
                isMobile: j.Z.isMobileOnline(a.user.id),
                status: j.Z.getStatus(a.user.id, _),
            })),
            w = (0, c.e7)([v.ZP], () => v.ZP.getMember(_, a.user.id)),
            R = (0, b.X7)(
                l.guild_id,
                null == w ? void 0 : w.userId,
                null != (t = null == w ? void 0 : w.colorStrings) ? t : null,
            ),
            D = i.useMemo(() => ({ [_]: [a.user.id] }), [_, a.user.id]);
        (0, g.$)(D, "RequestToSpeakSidebar");
        let M = a.rtsState === S.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            k = (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("79695"),
                        n.e("4040"),
                        n.e("92524"),
                        n.e("7717"),
                        n.e("9393"),
                    ]).then(n.bind(n, 757387));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            A(T({}, t), {
                                user: a.user,
                                guildId: _,
                                channel: l,
                                showMediaItems: !0,
                            }),
                        );
                });
            };
        return (0, r.jsxs)("div", {
            className: N.participantRowContainer,
            children: [
                (0, r.jsx)(y.Z, {
                    targetElementRef: m,
                    user: a.user,
                    guildId: l.guild_id,
                    channelId: l.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(
                            d.P3F,
                            A(
                                T(
                                    {
                                        innerRef: m,
                                        className: N.participantMemberContainer,
                                        onContextMenu: k,
                                    },
                                    e,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(f.Z, {
                                            size: d.EFr.SIZE_40,
                                            className: N.participantAvatar,
                                            user: a.user,
                                            isMobile: I,
                                            status: P,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: N.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(d.PUh, {
                                                    name: a.userNick,
                                                    colorString:
                                                        null != (t = null == w ? void 0 : w.colorString) ? t : null,
                                                    colorStrings: R,
                                                    className: N.participantName,
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: (0, E.$)(a),
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
                    className: N.buttonContainer,
                    children: [
                        (0, r.jsx)(u.u, {
                            text: M ? Z.intl.string(Z.t.h9rsTd) : Z.intl.string(Z.t.f0T7hI),
                            asContainer: !0,
                            children: (0, r.jsx)(d.hU, {
                                onClick: function () {
                                    (0, x.DT)(l, a.user.id, !1);
                                },
                                disabled: M || O,
                                icon: d.Lrb,
                                variant: "secondary",
                                "aria-label": M ? Z.intl.string(Z.t.h9rsTd) : Z.intl.string(Z.t.f0T7hI),
                            }),
                        }),
                        (0, r.jsx)(u.u, {
                            text: Z.intl.string(Z.t.moABMy),
                            asContainer: !0,
                            children: (0, r.jsx)(d.hU, {
                                "aria-label": Z.intl.string(Z.t.moABMy),
                                onClick: function () {
                                    (0, x.DT)(l, a.user.id, !0);
                                },
                                icon: d.Dio,
                                variant: "secondary",
                            }),
                        }),
                    ],
                }),
            ],
        });
    }),
    D = i.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, _.h)(t.id);
        return (0, r.jsx)(d.rsf, {
            label: Z.intl.string(Z.t.GYCh0W),
            checked: n,
            onChange: i,
        });
    }),
    M = i.memo(function () {
        return (0, r.jsxs)("div", {
            className: N.emptyStateContainer,
            children: [
                (0, r.jsx)(I.Z, {}),
                (0, r.jsx)(d.Text, {
                    className: N.emptyStateTitle,
                    variant: "text-lg/semibold",
                    color: "text-strong",
                    children: Z.intl.string(Z.t["7R24mX"]),
                }),
                (0, r.jsx)(d.Text, {
                    className: N.emptyStateBody,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: Z.intl.string(Z.t.Rpr2s0),
                }),
            ],
        });
    });
function k(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, C.Fd)(t.id),
        o = [
            +!!(0, c.e7)([O.Z], () => O.Z.can(P.Pl.MANAGE_CHANNELS, t) || O.Z.can(P.Pl.MANAGE_ROLES, t)),
            Math.max(1, l.length),
        ];
    return (0, r.jsxs)("div", {
        className: a()(N.container, { [N.chatOpen]: i }),
        children: [
            (0, r.jsx)(w, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i,
            }),
            (0, r.jsx)(d.aVo, {
                className: N.contentContainer,
                sections: o,
                sectionHeight: function (e) {
                    return 40 * (1 === e);
                },
                rowHeight: function (e) {
                    switch (e) {
                        case 0:
                            return 66;
                        case 1:
                            if (0 === l.length) return 178;
                            return 48;
                    }
                    return 0;
                },
                renderRow: function (e) {
                    let { section: n, row: i } = e;
                    switch (n) {
                        case 0:
                            return (0, r.jsx)(D, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(M, {}, "participants-empty");
                            let e = l[i];
                            return (0, r.jsx)(
                                R,
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
                                  className: N.listTitle,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      l.length > 0
                                          ? Z.intl.formatToPlainString(Z.t["5z7q5a"], { numHands: l.length })
                                          : Z.intl.string(Z.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
