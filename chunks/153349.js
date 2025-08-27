n.d(t, { Z: () => D }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(442837),
    u = n(481060),
    d = n(239091),
    p = n(99690),
    h = n(493773),
    f = n(616780),
    m = n(665149),
    g = n(884902),
    b = n(670188),
    y = n(271383),
    _ = n(496675),
    C = n(158776),
    v = n(471253),
    x = n(431328),
    O = n(145834),
    j = n(590415),
    E = n(614173),
    S = n(618896),
    I = n(231338),
    P = n(388032),
    Z = n(112848);
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
function N(e, t) {
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
let A = i.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, r.jsx)(m.ZP.Icon, {
                icon: u.Dio,
                tooltip: P.intl.string(P.t.cpT0Cg),
                onClick: t,
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: a()(Z.headerContainer, { [Z.chatOpen]: n }),
            children: [
                (0, r.jsx)(m.ZP.Icon, {
                    icon: u.V9,
                    disabled: !0,
                    "aria-label": P.intl.string(P.t.TYZgzc),
                }),
                (0, r.jsx)(m.ZP.Title, { children: P.intl.string(P.t.TYZgzc) }),
            ],
        });
    }),
    w = i.memo(function (e) {
        var t;
        let { channel: l, participant: a, tempDisableOnInit: o = !1 } = e,
            m = i.useRef(null),
            [_, x] = i.useState(o);
        (0, h.ZP)(() => {
            if (!_) return;
            let e = setTimeout(() => x(!1), 1000);
            return () => clearTimeout(e);
        });
        let E = l.getGuildId();
        s()(null != E, "Channel cannot be guildless");
        let { isMobile: S, status: I } = (0, c.cj)([C.Z], () => ({
                isMobile: C.Z.isMobileOnline(a.user.id),
                status: C.Z.getStatus(a.user.id, E),
            })),
            A = (0, c.e7)([y.ZP], () => y.ZP.getMember(E, a.user.id)),
            w = (0, g.X7)(
                l.guild_id,
                null == A ? void 0 : A.userId,
                null != (t = null == A ? void 0 : A.colorStrings) ? t : null,
            ),
            R = i.useMemo(() => ({ [E]: [a.user.id] }), [E, a.user.id]);
        (0, f.$)(R, "RequestToSpeakSidebar");
        let M = a.rtsState === j.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function D() {
            (0, v.DT)(l, a.user.id, !1);
        }
        function L() {
            (0, v.DT)(l, a.user.id, !0);
        }
        let k = (e) => {
            (0, d.jW)(e, async () => {
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
                        N(T({}, t), {
                            user: a.user,
                            guildId: E,
                            channel: l,
                            showMediaItems: !0,
                        }),
                    );
            });
        };
        return (0, r.jsxs)("div", {
            className: Z.participantRowContainer,
            children: [
                (0, r.jsx)(b.Z, {
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
                            N(
                                T(
                                    {
                                        innerRef: m,
                                        className: Z.participantMemberContainer,
                                        onContextMenu: k,
                                    },
                                    e,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            size: u.EFr.SIZE_40,
                                            className: Z.participantAvatar,
                                            user: a.user,
                                            isMobile: S,
                                            status: I,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: Z.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(u.PUh, {
                                                    name: a.userNick,
                                                    colorString:
                                                        null != (t = null == A ? void 0 : A.colorString) ? t : null,
                                                    colorStrings: w,
                                                    className: Z.participantName,
                                                }),
                                                (0, r.jsx)(u.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: (0, O.$)(a),
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
                    className: Z.buttonContainer,
                    children: [
                        (0, r.jsx)(u.ua7, {
                            text: M ? P.intl.string(P.t.h9rsTU) : P.intl.string(P.t.f0T7hI),
                            children: (e) =>
                                (0, r.jsx)(
                                    "div",
                                    N(T({}, e), {
                                        children: (0, r.jsx)(u.hU, {
                                            onClick: D,
                                            disabled: M || _,
                                            icon: u.Lrb,
                                            variant: "secondary",
                                            "aria-label": M ? P.intl.string(P.t.h9rsTU) : P.intl.string(P.t.f0T7hI),
                                        }),
                                    }),
                                ),
                        }),
                        (0, r.jsx)(u.ua7, {
                            text: P.intl.string(P.t.moABMz),
                            children: (e) =>
                                (0, r.jsx)(
                                    "div",
                                    N(T({}, e), {
                                        children: (0, r.jsx)(u.hU, {
                                            "aria-label": P.intl.string(P.t.moABMz),
                                            onClick: L,
                                            icon: u.Dio,
                                            variant: "secondary",
                                        }),
                                    }),
                                ),
                        }),
                    ],
                }),
            ],
        });
    }),
    R = i.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, E.h)(t.id);
        return (0, r.jsx)(u.j7V, {
            className: Z.toggle,
            onChange: i,
            value: n,
            children: P.intl.string(P.t.GYCh0d),
        });
    }),
    M = i.memo(function () {
        return (0, r.jsxs)("div", {
            className: Z.emptyStateContainer,
            children: [
                (0, r.jsx)(S.Z, {}),
                (0, r.jsx)(u.Text, {
                    className: Z.emptyStateTitle,
                    variant: "text-lg/semibold",
                    color: "header-primary",
                    children: P.intl.string(P.t["7R24mZ"]),
                }),
                (0, r.jsx)(u.Text, {
                    className: Z.emptyStateBody,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: P.intl.string(P.t.Rpr2s7),
                }),
            ],
        });
    });
function D(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, x.Fd)(t.id),
        o = [
            +!!(0, c.e7)([_.Z], () => _.Z.can(I.Pl.MANAGE_CHANNELS, t) || _.Z.can(I.Pl.MANAGE_ROLES, t)),
            Math.max(1, l.length),
        ];
    return (0, r.jsxs)("div", {
        className: a()(Z.container, { [Z.chatOpen]: i }),
        children: [
            (0, r.jsx)(A, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i,
            }),
            (0, r.jsx)(u.aVo, {
                className: Z.contentContainer,
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
                            return (0, r.jsx)(R, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(M, {}, "participants-empty");
                            let e = l[i];
                            return (0, r.jsx)(
                                w,
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
                                  className: Z.listTitle,
                                  variant: "text-xs/bold",
                                  color: "header-secondary",
                                  children:
                                      l.length > 0
                                          ? P.intl.formatToPlainString(P.t["5z7q5e"], { numHands: l.length })
                                          : P.intl.string(P.t.TYZgzc),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
