n.d(t, { Z: () => L }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    d = n(481060),
    u = n(239091),
    p = n(99690),
    h = n(493773),
    f = n(616780),
    g = n(665149),
    m = n(884902),
    b = n(670188),
    y = n(271383),
    _ = n(496675),
    j = n(158776),
    x = n(471253),
    O = n(431328),
    v = n(145834),
    C = n(590415),
    I = n(614173),
    E = n(618896),
    S = n(231338),
    Z = n(388032),
    T = n(112848);
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
let R = i.memo(function (e) {
        let { toggleRequestToSpeakSidebar: t, chatOpen: n } = e,
            i = (0, r.jsx)(g.ZP.Icon, {
                icon: d.Dio,
                tooltip: Z.intl.string(Z.t.cpT0Cg),
                onClick: t,
            });
        return (0, r.jsxs)(g.ZP, {
            toolbar: i,
            className: a()(T.headerContainer, { [T.chatOpen]: n }),
            children: [
                (0, r.jsx)(g.ZP.Icon, {
                    icon: d.V9,
                    disabled: !0,
                    "aria-label": Z.intl.string(Z.t.TYZgzc),
                }),
                (0, r.jsx)(g.ZP.Title, { children: Z.intl.string(Z.t.TYZgzc) }),
            ],
        });
    }),
    w = i.memo(function (e) {
        var t;
        let { channel: l, participant: a, tempDisableOnInit: s = !1 } = e,
            g = i.useRef(null),
            [_, O] = i.useState(s);
        (0, h.ZP)(() => {
            if (!_) return;
            let e = setTimeout(() => O(!1), 1000);
            return () => clearTimeout(e);
        });
        let I = l.getGuildId();
        o()(null != I, "Channel cannot be guildless");
        let { isMobile: E, status: S } = (0, c.cj)([j.Z], () => ({
                isMobile: j.Z.isMobileOnline(a.user.id),
                status: j.Z.getStatus(a.user.id, I),
            })),
            R = (0, c.e7)([y.ZP], () => y.ZP.getMember(I, a.user.id)),
            w = (0, m.X7)(
                l.guild_id,
                null == R ? void 0 : R.userId,
                null != (t = null == R ? void 0 : R.colorStrings) ? t : null,
            ),
            A = i.useMemo(() => ({ [I]: [a.user.id] }), [I, a.user.id]);
        (0, f.$)(A, "RequestToSpeakSidebar");
        let D = a.rtsState === C.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function L() {
            (0, x.DT)(l, a.user.id, !1);
        }
        function M() {
            (0, x.DT)(l, a.user.id, !0);
        }
        let k = (e) => {
            (0, u.jW)(e, async () => {
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
                        N(P({}, t), {
                            user: a.user,
                            guildId: I,
                            channel: l,
                            showMediaItems: !0,
                        }),
                    );
            });
        };
        return (0, r.jsxs)("div", {
            className: T.participantRowContainer,
            children: [
                (0, r.jsx)(b.Z, {
                    targetElementRef: g,
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
                            N(
                                P(
                                    {
                                        innerRef: g,
                                        className: T.participantMemberContainer,
                                        onContextMenu: k,
                                    },
                                    e,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            size: d.EFr.SIZE_40,
                                            className: T.participantAvatar,
                                            user: a.user,
                                            isMobile: E,
                                            status: S,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: T.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(d.PUh, {
                                                    name: a.userNick,
                                                    colorString:
                                                        null != (t = null == R ? void 0 : R.colorString) ? t : null,
                                                    colorStrings: w,
                                                    className: T.participantName,
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: (0, v.$)(a),
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
                        (0, r.jsx)(d.ua7, {
                            "data-migration-pending": !0,
                            text: D ? Z.intl.string(Z.t.h9rsTU) : Z.intl.string(Z.t.f0T7hI),
                            children: (e) =>
                                (0, r.jsx)(
                                    "div",
                                    N(P({}, e), {
                                        children: (0, r.jsx)(d.hU, {
                                            onClick: L,
                                            disabled: D || _,
                                            icon: d.Lrb,
                                            variant: "secondary",
                                            "aria-label": D ? Z.intl.string(Z.t.h9rsTU) : Z.intl.string(Z.t.f0T7hI),
                                        }),
                                    }),
                                ),
                        }),
                        (0, r.jsx)(d.ua7, {
                            "data-migration-pending": !0,
                            text: Z.intl.string(Z.t.moABMz),
                            children: (e) =>
                                (0, r.jsx)(
                                    "div",
                                    N(P({}, e), {
                                        children: (0, r.jsx)(d.hU, {
                                            "aria-label": Z.intl.string(Z.t.moABMz),
                                            onClick: M,
                                            icon: d.Dio,
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
    A = i.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, I.h)(t.id);
        return (0, r.jsx)(d.rsf, {
            label: Z.intl.string(Z.t.GYCh0d),
            checked: n,
            onChange: i,
        });
    }),
    D = i.memo(function () {
        return (0, r.jsxs)("div", {
            className: T.emptyStateContainer,
            children: [
                (0, r.jsx)(E.Z, {}),
                (0, r.jsx)(d.Text, {
                    className: T.emptyStateTitle,
                    variant: "text-lg/semibold",
                    color: "header-primary",
                    children: Z.intl.string(Z.t["7R24mZ"]),
                }),
                (0, r.jsx)(d.Text, {
                    className: T.emptyStateBody,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: Z.intl.string(Z.t.Rpr2s7),
                }),
            ],
        });
    });
function L(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, O.Fd)(t.id),
        s = [
            +!!(0, c.e7)([_.Z], () => _.Z.can(S.Pl.MANAGE_CHANNELS, t) || _.Z.can(S.Pl.MANAGE_ROLES, t)),
            Math.max(1, l.length),
        ];
    return (0, r.jsxs)("div", {
        className: a()(T.container, { [T.chatOpen]: i }),
        children: [
            (0, r.jsx)(R, {
                toggleRequestToSpeakSidebar: n,
                chatOpen: i,
            }),
            (0, r.jsx)(d.aVo, {
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
                            return (0, r.jsx)(A, { channel: t }, "rts-toggle");
                        case 1: {
                            if (0 === l.length) return (0, r.jsx)(D, {}, "participants-empty");
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
                              d.Text,
                              {
                                  className: T.listTitle,
                                  variant: "text-xs/bold",
                                  color: "header-secondary",
                                  children:
                                      l.length > 0
                                          ? Z.intl.formatToPlainString(Z.t["5z7q5e"], { numHands: l.length })
                                          : Z.intl.string(Z.t.TYZgzc),
                              },
                              "participants-section",
                          )
                        : null;
                },
            }),
        ],
    });
}
