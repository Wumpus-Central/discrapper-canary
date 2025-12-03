n.d(t, { Z: () => M }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    p = n(239091),
    h = n(99690),
    f = n(493773),
    g = n(616780),
    m = n(665149),
    b = n(884902),
    _ = n(670188),
    y = n(271383),
    O = n(496675),
    x = n(158776),
    j = n(471253),
    v = n(431328),
    C = n(145834),
    I = n(590415),
    S = n(614173),
    E = n(618896),
    Z = n(231338),
    P = n(388032),
    T = n(112848);
function N(e) {
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
function R(e, t) {
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
                icon: u.Dio,
                tooltip: P.intl.string(P.t.cpT0Cq),
                onClick: t,
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: a()(T.headerContainer, { [T.chatOpen]: n }),
            children: [
                (0, r.jsx)(m.ZP.Icon, {
                    icon: u.V9,
                    disabled: !0,
                    "aria-label": P.intl.string(P.t.TYZgzW),
                }),
                (0, r.jsx)(m.ZP.Title, { children: P.intl.string(P.t.TYZgzW) }),
            ],
        });
    }),
    A = i.memo(function (e) {
        var t;
        let { channel: l, participant: a, tempDisableOnInit: s = !1 } = e,
            m = i.useRef(null),
            [O, v] = i.useState(s);
        (0, f.ZP)(() => {
            if (!O) return;
            let e = setTimeout(() => v(!1), 1000);
            return () => clearTimeout(e);
        });
        let S = l.getGuildId();
        o()(null != S, "Channel cannot be guildless");
        let { isMobile: E, status: Z } = (0, c.cj)([x.Z], () => ({
                isMobile: x.Z.isMobileOnline(a.user.id),
                status: x.Z.getStatus(a.user.id, S),
            })),
            w = (0, c.e7)([y.ZP], () => y.ZP.getMember(S, a.user.id)),
            A = (0, b.X7)(
                l.guild_id,
                null == w ? void 0 : w.userId,
                null != (t = null == w ? void 0 : w.colorStrings) ? t : null,
            ),
            D = i.useMemo(() => ({ [S]: [a.user.id] }), [S, a.user.id]);
        (0, g.$)(D, "RequestToSpeakSidebar");
        let L = a.rtsState === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            M = (e) => {
                (0, p.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("79695"),
                        n.e("66165"),
                        n.e("8982"),
                        n.e("7717"),
                        n.e("52021"),
                    ]).then(n.bind(n, 757387));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            R(N({}, t), {
                                user: a.user,
                                guildId: S,
                                channel: l,
                                showMediaItems: !0,
                            }),
                        );
                });
            };
        return (0, r.jsxs)("div", {
            className: T.participantRowContainer,
            children: [
                (0, r.jsx)(_.Z, {
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
                            u.P3F,
                            R(
                                N(
                                    {
                                        innerRef: m,
                                        className: T.participantMemberContainer,
                                        onContextMenu: M,
                                    },
                                    e,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(h.Z, {
                                            size: u.EFr.SIZE_40,
                                            className: T.participantAvatar,
                                            user: a.user,
                                            isMobile: E,
                                            status: Z,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: T.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(u.PUh, {
                                                    name: a.userNick,
                                                    colorString:
                                                        null != (t = null == w ? void 0 : w.colorString) ? t : null,
                                                    colorStrings: A,
                                                    className: T.participantName,
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: (0, C.$)(a),
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
                    className: T.buttonContainer,
                    children: [
                        (0, r.jsx)(d.u, {
                            text: L ? P.intl.string(P.t.h9rsTd) : P.intl.string(P.t.f0T7hI),
                            asContainer: !0,
                            children: (0, r.jsx)(u.hU, {
                                onClick: function () {
                                    (0, j.DT)(l, a.user.id, !1);
                                },
                                disabled: L || O,
                                icon: u.Lrb,
                                variant: "secondary",
                                "aria-label": L ? P.intl.string(P.t.h9rsTd) : P.intl.string(P.t.f0T7hI),
                            }),
                        }),
                        (0, r.jsx)(d.u, {
                            text: P.intl.string(P.t.moABMy),
                            asContainer: !0,
                            children: (0, r.jsx)(u.hU, {
                                "aria-label": P.intl.string(P.t.moABMy),
                                onClick: function () {
                                    (0, j.DT)(l, a.user.id, !0);
                                },
                                icon: u.Dio,
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
            [n, i] = (0, S.h)(t.id);
        return (0, r.jsx)(u.rsf, {
            label: P.intl.string(P.t.GYCh0W),
            checked: n,
            onChange: i,
        });
    }),
    L = i.memo(function () {
        return (0, r.jsxs)("div", {
            className: T.emptyStateContainer,
            children: [
                (0, r.jsx)(E.Z, {}),
                (0, r.jsx)(u.Text, {
                    className: T.emptyStateTitle,
                    variant: "text-lg/semibold",
                    color: "header-primary",
                    children: P.intl.string(P.t["7R24mX"]),
                }),
                (0, r.jsx)(u.Text, {
                    className: T.emptyStateBody,
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: P.intl.string(P.t.Rpr2s0),
                }),
            ],
        });
    });
function M(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, v.Fd)(t.id),
        s = [
            +!!(0, c.e7)([O.Z], () => O.Z.can(Z.Pl.MANAGE_CHANNELS, t) || O.Z.can(Z.Pl.MANAGE_ROLES, t)),
            Math.max(1, l.length),
        ];
    return (0, r.jsxs)("div", {
        className: a()(T.container, { [T.chatOpen]: i }),
        children: [
            (0, r.jsx)(w, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i,
            }),
            (0, r.jsx)(u.aVo, {
                className: T.contentContainer,
                sections: s,
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
                            if (0 === l.length) return (0, r.jsx)(L, {}, "participants-empty");
                            let e = l[i];
                            return (0, r.jsx)(
                                A,
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
                              u.Text,
                              {
                                  className: T.listTitle,
                                  variant: "text-xs/bold",
                                  color: "text-default",
                                  children:
                                      l.length > 0
                                          ? P.intl.formatToPlainString(P.t["5z7q5a"], { numHands: l.length })
                                          : P.intl.string(P.t.TYZgzW),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
