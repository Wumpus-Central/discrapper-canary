n.d(t, { Z: () => M }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(28664),
    u = n(481060),
    h = n(239091),
    p = n(99690),
    f = n(493773),
    g = n(616780),
    m = n(665149),
    b = n(884902),
    y = n(670188),
    _ = n(271383),
    j = n(496675),
    O = n(158776),
    x = n(471253),
    v = n(431328),
    C = n(145834),
    I = n(590415),
    S = n(614173),
    E = n(618896),
    Z = n(231338),
    T = n(388032),
    P = n(112848);
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
                tooltip: T.intl.string(T.t.cpT0Cg),
                onClick: t,
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: a()(P.headerContainer, { [P.chatOpen]: n }),
            children: [
                (0, r.jsx)(m.ZP.Icon, {
                    icon: u.V9,
                    disabled: !0,
                    "aria-label": T.intl.string(T.t.TYZgzc),
                }),
                (0, r.jsx)(m.ZP.Title, { children: T.intl.string(T.t.TYZgzc) }),
            ],
        });
    }),
    A = i.memo(function (e) {
        var t;
        let { channel: l, participant: a, tempDisableOnInit: s = !1 } = e,
            m = i.useRef(null),
            [j, v] = i.useState(s);
        (0, f.ZP)(() => {
            if (!j) return;
            let e = setTimeout(() => v(!1), 1000);
            return () => clearTimeout(e);
        });
        let S = l.getGuildId();
        o()(null != S, "Channel cannot be guildless");
        let { isMobile: E, status: Z } = (0, c.cj)([O.Z], () => ({
                isMobile: O.Z.isMobileOnline(a.user.id),
                status: O.Z.getStatus(a.user.id, S),
            })),
            w = (0, c.e7)([_.ZP], () => _.ZP.getMember(S, a.user.id)),
            A = (0, b.X7)(
                l.guild_id,
                null == w ? void 0 : w.userId,
                null != (t = null == w ? void 0 : w.colorStrings) ? t : null,
            ),
            D = i.useMemo(() => ({ [S]: [a.user.id] }), [S, a.user.id]);
        (0, g.$)(D, "RequestToSpeakSidebar");
        let L = a.rtsState === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            M = (e) => {
                (0, h.jW)(e, async () => {
                    let { default: e } = await Promise.all([
                        n.e("79695"),
                        n.e("98783"),
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
            className: P.participantRowContainer,
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
                            u.P3F,
                            R(
                                N(
                                    {
                                        innerRef: m,
                                        className: P.participantMemberContainer,
                                        onContextMenu: M,
                                    },
                                    e,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            size: u.EFr.SIZE_40,
                                            className: P.participantAvatar,
                                            user: a.user,
                                            isMobile: E,
                                            status: Z,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: P.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(u.PUh, {
                                                    name: a.userNick,
                                                    colorString:
                                                        null != (t = null == w ? void 0 : w.colorString) ? t : null,
                                                    colorStrings: A,
                                                    className: P.participantName,
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
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
                    className: P.buttonContainer,
                    children: [
                        (0, r.jsx)(d.u, {
                            text: L ? T.intl.string(T.t.h9rsTU) : T.intl.string(T.t.f0T7hI),
                            asContainer: !0,
                            children: (0, r.jsx)(u.hU, {
                                onClick: function () {
                                    (0, x.DT)(l, a.user.id, !1);
                                },
                                disabled: L || j,
                                icon: u.Lrb,
                                variant: "secondary",
                                "aria-label": L ? T.intl.string(T.t.h9rsTU) : T.intl.string(T.t.f0T7hI),
                            }),
                        }),
                        (0, r.jsx)(d.u, {
                            text: T.intl.string(T.t.moABMz),
                            asContainer: !0,
                            children: (0, r.jsx)(u.hU, {
                                "aria-label": T.intl.string(T.t.moABMz),
                                onClick: function () {
                                    (0, x.DT)(l, a.user.id, !0);
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
            label: T.intl.string(T.t.GYCh0d),
            checked: n,
            onChange: i,
        });
    }),
    L = i.memo(function () {
        return (0, r.jsxs)("div", {
            className: P.emptyStateContainer,
            children: [
                (0, r.jsx)(E.Z, {}),
                (0, r.jsx)(u.Text, {
                    className: P.emptyStateTitle,
                    variant: "text-lg/semibold",
                    color: "header-primary",
                    children: T.intl.string(T.t["7R24mZ"]),
                }),
                (0, r.jsx)(u.Text, {
                    className: P.emptyStateBody,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: T.intl.string(T.t.Rpr2s7),
                }),
            ],
        });
    });
function M(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, v.Fd)(t.id),
        s = [
            +!!(0, c.e7)([j.Z], () => j.Z.can(Z.Pl.MANAGE_CHANNELS, t) || j.Z.can(Z.Pl.MANAGE_ROLES, t)),
            Math.max(1, l.length),
        ];
    return (0, r.jsxs)("div", {
        className: a()(P.container, { [P.chatOpen]: i }),
        children: [
            (0, r.jsx)(w, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i,
            }),
            (0, r.jsx)(u.aVo, {
                className: P.contentContainer,
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
                                  className: P.listTitle,
                                  variant: "text-xs/bold",
                                  color: "header-secondary",
                                  children:
                                      l.length > 0
                                          ? T.intl.formatToPlainString(T.t["5z7q5e"], { numHands: l.length })
                                          : T.intl.string(T.t.TYZgzc),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
