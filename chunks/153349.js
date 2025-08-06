n.d(t, { Z: () => k }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(442837),
    u = n(755721),
    d = n(481060),
    h = n(239091),
    p = n(99690),
    f = n(493773),
    g = n(616780),
    m = n(665149),
    b = n(884902),
    y = n(670188),
    x = n(271383),
    j = n(496675),
    _ = n(158776),
    O = n(471253),
    v = n(431328),
    C = n(145834),
    E = n(590415),
    S = n(614173),
    Z = n(618896),
    I = n(231338),
    P = n(388032),
    T = n(916396);
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
                icon: d.Dio,
                tooltip: P.intl.string(P.t.cpT0Cg),
                onClick: t,
            });
        return (0, r.jsxs)(m.ZP, {
            toolbar: i,
            className: a()(T.headerContainer, { [T.chatOpen]: n }),
            children: [
                (0, r.jsx)(m.ZP.Icon, {
                    icon: d.V9,
                    disabled: !0,
                    "aria-label": P.intl.string(P.t.TYZgzc),
                }),
                (0, r.jsx)(m.ZP.Title, { children: P.intl.string(P.t.TYZgzc) }),
            ],
        });
    }),
    A = i.memo(function (e) {
        var t;
        let { channel: l, participant: s, tempDisableOnInit: m = !1 } = e,
            j = i.useRef(null),
            [v, S] = i.useState(m);
        (0, f.ZP)(() => {
            if (!v) return;
            let e = setTimeout(() => S(!1), 1000);
            return () => clearTimeout(e);
        });
        let Z = l.getGuildId();
        o()(null != Z, "Channel cannot be guildless");
        let { isMobile: I, status: w } = (0, c.cj)([_.Z], () => ({
                isMobile: _.Z.isMobileOnline(s.user.id),
                status: _.Z.getStatus(s.user.id, Z),
            })),
            A = (0, c.e7)([x.ZP], () => x.ZP.getMember(Z, s.user.id)),
            D = (0, b.X7)(
                l.guild_id,
                null == A ? void 0 : A.userId,
                null != (t = null == A ? void 0 : A.colorStrings) ? t : null,
            ),
            L = i.useMemo(() => ({ [Z]: [s.user.id] }), [Z, s.user.id]);
        (0, g.$)(L);
        let k = s.rtsState === E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        function M() {
            (0, O.DT)(l, s.user.id, !1);
        }
        function U() {
            (0, O.DT)(l, s.user.id, !0);
        }
        let H = (e) => {
            (0, h.jW)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("79695"),
                    n.e("98783"),
                    n.e("8982"),
                    n.e("7717"),
                    n.e("74800"),
                ]).then(n.bind(n, 757387));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        R(N({}, t), {
                            user: s.user,
                            guildId: Z,
                            channel: l,
                            showMediaItems: !0,
                        }),
                    );
            });
        };
        return (0, r.jsxs)("div", {
            className: T.participantRowContainer,
            children: [
                (0, r.jsx)(y.Z, {
                    targetElementRef: j,
                    user: s.user,
                    guildId: l.guild_id,
                    channelId: l.id,
                    position: "left",
                    spacing: 16,
                    clickTrap: !0,
                    children: (e) => {
                        var t;
                        return (0, r.jsxs)(
                            d.P3F,
                            R(
                                N(
                                    {
                                        innerRef: j,
                                        className: T.participantMemberContainer,
                                        onContextMenu: H,
                                    },
                                    e,
                                ),
                                {
                                    children: [
                                        (0, r.jsx)(p.Z, {
                                            size: d.EFr.SIZE_40,
                                            className: T.participantAvatar,
                                            user: s.user,
                                            isMobile: I,
                                            status: w,
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: T.participantTextContainer,
                                            children: [
                                                (0, r.jsx)(d.PUh, {
                                                    name: s.userNick,
                                                    colorString:
                                                        null != (t = null == A ? void 0 : A.colorString) ? t : null,
                                                    colorStrings: D,
                                                    className: T.participantName,
                                                }),
                                                (0, r.jsx)(d.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: (0, C.$)(s),
                                                }),
                                            ],
                                        }),
                                    ],
                                },
                            ),
                        );
                    },
                }),
                (0, r.jsx)(d.ua7, {
                    text: k ? P.intl.string(P.t.h9rsTU) : P.intl.string(P.t.f0T7hI),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zx,
                            R(N({}, e), {
                                innerClassName: T.buttonContainer,
                                look: u.zx.Looks.BLANK,
                                size: u.zx.Sizes.NONE,
                                onClick: M,
                                disabled: k || v,
                                children: (0, r.jsx)(d.Lrb, {
                                    size: "xs",
                                    color: "currentColor",
                                }),
                            }),
                        ),
                }),
                (0, r.jsx)(d.ua7, {
                    text: P.intl.string(P.t.moABMz),
                    children: (e) =>
                        (0, r.jsx)(
                            u.zx,
                            R(N({}, e), {
                                innerClassName: a()(T.buttonContainer, T.buttonMargin),
                                look: u.zx.Looks.BLANK,
                                size: u.zx.Sizes.NONE,
                                onClick: U,
                                children: (0, r.jsx)(d.Dio, {
                                    size: "xs",
                                    color: "currentColor",
                                }),
                            }),
                        ),
                }),
            ],
        });
    }),
    D = i.memo(function (e) {
        let { channel: t } = e,
            [n, i] = (0, S.h)(t.id);
        return (0, r.jsx)(d.j7V, {
            className: T.toggle,
            onChange: i,
            value: n,
            children: P.intl.string(P.t.GYCh0d),
        });
    }),
    L = i.memo(function () {
        return (0, r.jsxs)("div", {
            className: T.emptyStateContainer,
            children: [
                (0, r.jsx)(Z.Z, {}),
                (0, r.jsx)(d.Text, {
                    className: T.emptyStateTitle,
                    variant: "text-lg/semibold",
                    color: "header-primary",
                    children: P.intl.string(P.t["7R24mZ"]),
                }),
                (0, r.jsx)(d.Text, {
                    className: T.emptyStateBody,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: P.intl.string(P.t.Rpr2s7),
                }),
            ],
        });
    });
function k(e) {
    let { channel: t, toggleRequestToSpeakSidebar: n, chatOpen: i } = e,
        l = (0, v.Fd)(t.id),
        s = [
            +!!(0, c.e7)([j.Z], () => j.Z.can(I.Pl.MANAGE_CHANNELS, t) || j.Z.can(I.Pl.MANAGE_ROLES, t)),
            Math.max(1, l.length),
        ];
    return (0, r.jsxs)("div", {
        className: a()(T.container, { [T.chatOpen]: i }),
        children: [
            (0, r.jsx)(w, {
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
                              d.Text,
                              {
                                  className: T.listTitle,
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
