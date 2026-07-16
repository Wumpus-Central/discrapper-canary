n.d(l, { ix: () => e7, Ay: () => e6, tO: () => e2 }), n(321073), n(938796);
var t = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(607399),
    o = n(665260),
    c = n(17928),
    d = n(990078),
    u = n(922016),
    m = n(707554),
    h = n(60270),
    g = n(140735),
    x = n(793574),
    A = n(688810),
    v = n(429913),
    p = n(593643),
    j = n(61230),
    N = n(284009),
    f = n.n(N),
    I = n(435558),
    C = n.n(I),
    b = n(661531),
    y = n(462887),
    E = n(862482),
    M = n(933832),
    _ = n(834730),
    R = n(602853),
    S = n(778712),
    T = n(66834),
    w = n(730134),
    O = n(736653),
    G = n(573648),
    k = n(95561),
    P = n(709066),
    D = n(975732),
    L = n(889227),
    V = n(696451),
    U = n(174459),
    H = n(370480),
    $ = n(228366);
let z = new Map();
class B extends c.Ay.Store {
    static displayName = "GuildRoleConnectionEligibilityStore";
    getGuildRoleConnectionEligibility(e) {
        return null != e ? z.get(e) : void 0;
    }
}
let F = new B($.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { roleId: l, roleConnectionEligibility: n } = e;
        z.set(l, n);
    },
});
var Y = n(702841),
    K = n(734057),
    W = n(317525),
    q = n(63104),
    X = n(355971),
    J = n(293260),
    Z = n(783419),
    Q = n(652215),
    ee = n(518477),
    el = n(375708),
    en = n(969565);
function et(e) {
    let l,
        { connectionType: n, connectionMetadataField: i, operator: a, value: s, description: r } = e;
    if (null != r)
        switch (a) {
            case Z.so.LESS_THAN:
                l = el.intl.format(el.t["2p7dA3"], { description: r, count: Math.max(0, Number(s) - 1) });
                break;
            case Z.so.GREATER_THAN:
                l = el.intl.format(el.t["2p7dA3"], { description: r, count: Math.max(0, Number(s) + 1) });
                break;
            default:
                l = r;
        }
    else l = (0, H.RP)({ connectionType: n, connectionMetadataField: i, operator: a, value: s });
    return null == l
        ? null
        : (0, t.jsxs)("div", {
              className: en.wL,
              children: [
                  (0, t.jsx)(M.A, { size: "md", color: "currentColor", className: en.D$ }),
                  (0, t.jsx)(_.E, { variant: "text-xs/medium", color: "text-strong", children: l }),
              ],
          });
}
function ei(e) {
    let { eligibilityStates: l } = e,
        n = (0, O.Ay)(),
        i = (0, R.r)(b.A.unsafe_rawColors.GREEN_330).hex(),
        a = C().groupBy(l, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, t.jsx)(t.Fragment, {
        children: Object.keys(a).map((e) => {
            let l,
                s = a[e],
                r = s.filter((e) => null != e.operator),
                o = s.find((e) => null != e.application),
                c = G.A.get(e),
                d = o?.application,
                u = d?.bot != null ? new L.A(d.bot) : null;
            return (
                H.iC.includes(d?.id ?? "")
                    ? (l = (0, t.jsx)(X.A, { className: en.AO, color: i, size: 16 }))
                    : null != u && (l = (0, t.jsx)(P.A, { className: en.AO, verified: u.isVerifiedBot() })),
                (0, t.jsxs)(
                    "div",
                    {
                        className: en.sV,
                        children: [
                            (0, t.jsxs)("div", {
                                className: en.ei,
                                children: [
                                    null != c
                                        ? (0, t.jsx)("img", {
                                              src: (0, y.M)(n) ? c.icon.darkSVG : c.icon.lightSVG,
                                              alt: "",
                                              className: en.j$,
                                          })
                                        : null,
                                    null != u
                                        ? (0, t.jsx)(w.A, { user: u, size: S._3.SIZE_20, className: en.j$ })
                                        : null,
                                    (0, t.jsx)(_.E, {
                                        variant: "text-sm/medium",
                                        color: "interactive-text-active",
                                        children: c?.name ?? d?.name,
                                    }),
                                    l,
                                ],
                            }),
                            r.map((e) => {
                                let {
                                    connection_type: l,
                                    connection_metadata_field: n,
                                    operator: i,
                                    value: a,
                                    description: s,
                                } = e;
                                return (
                                    f()(null != n, "connectionMetadataField is null"),
                                    f()(null != i, "operator is null"),
                                    f()(null != a, "value is null"),
                                    (0, t.jsx)(
                                        et,
                                        {
                                            connectionType: l,
                                            connectionMetadataField: n,
                                            operator: i,
                                            value: a,
                                            description: s,
                                        },
                                        `${l}:${n}:${i}:${a}`,
                                    )
                                );
                            }),
                        ],
                    },
                    e,
                )
            );
        }),
    });
}
function ea(e) {
    let l,
        {
            onGetRolesClicked: n,
            onOpenProfile: a,
            eligibilityStates: s,
            userId: r,
            roleId: o,
            channelId: d,
            guildId: u,
        } = e;
    i.useEffect(() => {
        U.default.track(Q.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: r,
            role_id: o,
            ...(0, k.Ou)(d),
            ...(0, k.H$)(u),
        });
    }, [r, o, d, u]);
    let m = (0, c.bG)([V.Ay], () => V.Ay.getSelfMember(u)?.roles.includes(o) ?? !1, [u, o]);
    return (
        (l =
            1 === s.length && 1 === s[0].length
                ? el.intl.string(el.t.jDym4E)
                : 1 === s.length
                  ? el.intl.format(el.t["0eBj3x"], {})
                  : el.intl.format(el.t.D7uftB, {})),
        (0, t.jsxs)("div", {
            className: en.SW,
            children: [
                (0, t.jsx)("div", {
                    className: en.oT,
                    children: (0, t.jsx)(_.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: en.Io,
                        children: l,
                    }),
                }),
                (0, t.jsx)("div", { className: en.jf, children: (0, t.jsx)(ei, { eligibilityStates: s.flat() }) }),
                (0, t.jsxs)("div", {
                    className: en.UD,
                    children: [
                        m
                            ? null
                            : (0, t.jsx)(E.$n, { className: en.wz, onClick: n, children: el.intl.string(el.t.T1t1WV) }),
                        (0, t.jsx)(E.$n, {
                            className: en.lQ,
                            color: E.$n.Colors.PRIMARY,
                            onClick: a,
                            children: el.intl.string(el.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}
function es(e) {
    let { userId: l, messageId: n, guild: a, channel: s } = e,
        { analyticsLocations: r } = (0, A.Ay)(),
        o = (function (e, l) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = (0, Y.bG)([V.Ay], () => (null != e ? V.Ay.getMember(e.id, l) : null), [e, l]),
                a = (0, Y.bG)([K.A], () => K.A.getChannel(n), [n]),
                s = (0, Y.bG)([K.A], () => K.A.getChannel(a?.parent_id), [a]),
                r = (0, Y.bG)([W.A], () => (null != e ? W.A.getSortedRoles(e.id) : void 0));
            return null == e || null == r || null == i
                ? null
                : (0, H._g)({
                      guild: e,
                      sortedGuildRoles: r,
                      guildMember: i,
                      channel: null != a && a.isThread() && null != s ? s : a,
                      onlyChannelConnectionRoles: t,
                  });
        })(a, l, s.id, !0),
        m = (0, c.bG)([F], () => F.getGuildRoleConnectionEligibility(o?.id)),
        [h, g] = i.useState(null == m),
        x = i.useRef(null);
    if (null == o) return null;
    async function v() {
        f()(null != o, "visibleConnectionsRole is null"),
            h && null == m && (await T.A.fetchGuildRoleConnectionsEligibility(a.id, o.id), g(!1));
    }
    return (0, t.jsx)(u.Q, {
        targetElementRef: x,
        onRequestOpen: v,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: i } = e;
                return null == m
                    ? (0, t.jsx)(t.Fragment, {})
                    : (f()(null != o, "visibleConnectionsRole is null"),
                      (0, t.jsx)(ea, {
                          eligibilityStates: m,
                          userId: l,
                          roleId: o.id,
                          channelId: s.id,
                          guildId: a.id,
                          onGetRolesClicked: () => {
                              (0, J.c0)(a.id);
                          },
                          onOpenProfile: () => {
                              (0, D.openUserProfileModal)({
                                  userId: l,
                                  messageId: n,
                                  guildId: a.id,
                                  channelId: s.id,
                                  roleId: o.id,
                                  scrollTarget: ee.bk.CONNECTIONS,
                                  sourceAnalyticsLocations: r,
                              }),
                                  i();
                          },
                      }));
            });
        },
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, t.jsx)(d.m, {
                text: el.intl.string(el.t.Wpsnar),
                children: (0, t.jsxs)("div", {
                    ref: x,
                    className: en.qS,
                    ...e,
                    children: [
                        (0, t.jsx)(q.A, { className: en.f7, size: 16, color: o.colorString }),
                        (0, t.jsx)(_.E, {
                            variant: "text-xs/bold",
                            color: "text-strong",
                            className: en.S3,
                            children: o.name,
                        }),
                    ],
                }),
            }),
    });
}
var er = n(828488),
    eo = n(807884),
    ec = n(514116);
function ed(e) {
    let { channelId: l, messageId: n } = e,
        i = (0, eo.A)(l, n)?.messageMetadata.moderationLabel;
    return null == i || "" === i ? null : (0, t.jsx)("span", { className: ec.R, children: i });
}
var eu = n(870136),
    em = n(939249),
    eh = n(506803),
    eg = n(351001),
    ex = n(297264),
    eA = n(821609),
    ev = n(964486),
    ep = n(34337),
    ej = n(448290),
    eN = n(309010),
    ef = n(828567);
let eI = function (e) {
    let { guild: l, message: n, onClose: i } = e,
        a = K.A.getChannel(eN.A.getChannelId(l.id));
    return ((0, ev.Ay)(() => {
        U.default.track(Q.HAw.OPEN_POPOUT, { type: "New Member Badge Popout", guild_id: l.id, channel_id: a?.id });
    }),
    null == a)
        ? null
        : (0, t.jsx)(ep.Uq, {
              className: ef.cc,
              children: (0, t.jsxs)("div", {
                  className: ef.jC,
                  children: [
                      (0, t.jsxs)("div", {
                          className: ef.rb,
                          children: [
                              (0, t.jsx)("div", {
                                  className: ef.zc,
                                  children: (0, t.jsx)(eh.N, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 40,
                                      height: 40,
                                  }),
                              }),
                              (0, t.jsxs)("div", {
                                  children: [
                                      (0, t.jsx)(ex.D, {
                                          variant: "heading-md/semibold",
                                          className: ef.wx,
                                          children: el.intl.string(el.t["v/OYd2"]),
                                      }),
                                      (0, t.jsx)(_.E, {
                                          variant: "text-sm/normal",
                                          children: el.intl.string(el.t.Z85MlD),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, t.jsx)("div", {
                          "data-button-hoisted-classname-wrapper": !0,
                          className: ef.lI,
                          children: (0, t.jsx)(eA.$, {
                              variant: "primary",
                              size: "sm",
                              text: el.intl.format(el.t["+xsVS6"], { username: n.author.username }),
                              fullWidth: !0,
                              onClick: () => {
                                  k.Ay.trackWithMetadata(Q.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                      target_user_id: n.author.id,
                                  }),
                                      i(),
                                      (0, ej.C)(n.author, a.id);
                              },
                          }),
                      }),
                  ],
              }),
          });
};
var eC = n(125534);
function eb(e) {
    let { guild: l, message: n } = e,
        a = i.useRef(null);
    return (0, eg.HU)(l.id, n.author.id)
        ? (0, t.jsx)(u.Y, {
              targetElementRef: a,
              animation: u.Y.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, t.jsx)(eI, { guild: l, message: n, onClose: i });
              },
              children: (e) => {
                  let { onClick: l } = e;
                  return (0, t.jsx)(em.D, {
                      onClick: l,
                      tag: "span",
                      innerRef: a,
                      children: (0, t.jsx)(d.m, {
                          text: el.intl.string(el.t["v/OYd2"]),
                          children: (0, t.jsx)("div", {
                              className: eC.C,
                              children: (0, t.jsx)(eh.N, {
                                  size: "custom",
                                  color: "currentColor",
                                  width: 20,
                                  height: 20,
                              }),
                          }),
                      }),
                  });
              },
          })
        : null;
}
var ey = n(9842),
    eE = n(657048),
    eM = n(440971),
    e_ = n(689255);
function eR() {
    return (0, t.jsx)(d.m, {
        text: el.intl.string(el.t["RO/KYj"]),
        children: (0, t.jsx)("div", {
            className: e_.q,
            children: (0, t.jsx)(eM.R, { color: "currentColor", size: "custom", width: "1rem", height: "1rem" }),
        }),
    });
}
var eS = n(854627),
    eT = n(342296),
    ew = n(742023),
    eO = n(71393),
    eG = n(576705),
    ek = n(486020),
    eP = n(625494),
    eD = n(763754),
    eL = n(635071),
    eV = n(860227),
    eU = n(606049),
    eH = n(3026),
    e$ = n(305866),
    ez = n(104510),
    eB = n(376304),
    eF = n(63152),
    eY = n(98318),
    eK = n(976860),
    eW = n(746080),
    eq = n(433211);
let eX = (e) => {
    let { roleIcon: l, guild: n } = e,
        { name: i } = l;
    (0, ev.Ay)(() => {
        U.default.track(Q.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, k.dI)(K.A.getChannel(eN.A.getChannelId(n.id))),
        });
    });
    let a = (0, c.bG)([W.A], () => (null != l.roleId ? W.A.getRole(n.id, l.roleId) : void 0)),
        s = (0, eY.U)(a),
        r = s
            ? el.intl.formatToPlainString(el.t.t0928V, { name: i })
            : el.intl.formatToPlainString(el.t.UDDkGy, { name: i }),
        o = { ...l, src: null == l.src ? l.src : (0, eB.ux)(l.src, 40), size: 40 },
        d = s
            ? function () {
                  (0, eK.pX)(Q.BVt.CHANNEL(n.id, eW.VV.ROLE_SUBSCRIPTIONS));
              }
            : function () {
                  (0, eF.K4)({ guildId: n.id, location: { section: Q.JJy.ROLE_ICON_POPOUT } });
              };
    return (0, t.jsx)(e$.l, {
        children: (0, t.jsx)(ep.Uq, {
            children: (0, t.jsxs)("div", {
                className: eq.jC,
                children: [
                    (0, t.jsxs)("div", {
                        className: eq.rb,
                        children: [
                            (0, t.jsx)("div", {
                                className: eq.Xq,
                                children: (0, t.jsx)(eE.A, {
                                    ...o,
                                    enableTooltip: !1,
                                    className: eq.__invalid_roleIcon,
                                    enableHeight: !1,
                                }),
                            }),
                            (0, t.jsxs)("div", {
                                className: eq.bM,
                                children: [
                                    (0, t.jsx)(ex.D, {
                                        variant: "heading-md/semibold",
                                        className: eq.S3,
                                        children: (0, t.jsx)(eH.A, { children: i }),
                                    }),
                                    (0, t.jsx)(_.E, { variant: "text-sm/normal", children: r }),
                                ],
                            }),
                        ],
                    }),
                    (0, t.jsx)(eA.$, {
                        size: "sm",
                        variant: "secondary",
                        text: el.intl.string(el.t["H930+H"]),
                        onClick: d,
                        icon: ez._,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
};
var eJ = n(812299),
    eZ = n(109054),
    eQ = n(334211);
function e0(e) {
    let {
        avatarSrc: l,
        avatarDecorationSrc: n,
        compact: i,
        onClick: a,
        onContextMenu: r,
        onMouseDown: o,
        onMouseEnter: c,
        onMouseLeave: d,
        onKeyDown: u,
        showCommunicationDisabledStyles: m = !1,
        className: h,
        avatarImgRef: g,
    } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("img", {
                ref: g,
                onClick: a,
                onContextMenu: r,
                onKeyDown: u,
                onMouseDown: o,
                onMouseEnter: c,
                onMouseLeave: d,
                src: l,
                "aria-hidden": !0,
                className: s()(h, eQ.my, { [eQ.oE]: i, [eQ.vk]: null != a, [eQ.uU]: m }),
                alt: " ",
            }),
            null == n || i ? null : (0, t.jsx)("img", { className: eQ.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let e1 = i.memo(function (e) {
    let {
            message: l,
            author: n,
            channel: a,
            guildId: s,
            compact: r = !1,
            roleIconProps: o,
            showUsernamePopout: d,
            renderPopout: m,
            onClickUsername: h,
            onContextMenu: g,
            displayCompactAvatars: x = !1,
            onPopoutRequestClose: A,
            preview: v,
            subscribeToGroupId: N,
            hideGuildTag: f,
        } = e,
        I = (0, eD.Ay)(l, n),
        C = i.useMemo(
            () => (0, eJ.y)({ message: l, channel: a, user: l?.author, compact: r, isRepliedMessage: !1 }),
            [l, a, r],
        ),
        b = i.useRef(null),
        y = (0, c.bG)([eO.A], () => eO.A.getGuild(s)),
        E = i.useMemo(() => e3(r, x, o, y), [r, x, o, y]),
        M = i.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === E && null != y
                      ? (0, t.jsx)(
                            u.Y,
                            {
                                targetElementRef: b,
                                animation: u.Y.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, t.jsx)(eX, { roleIcon: o, guild: y }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: l } = e;
                                    return (0, t.jsx)(eE.A, { ref: b, ...o, className: eQ.UT, onClick: l });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === E
                        ? (0, t.jsx)(eE.A, { ...o, className: eQ.UT }, "role-icon-children")
                        : null,
            [E, o, y],
        ),
        { enabled: _ } = (0, p.D8)({ guildId: y?.id, location: "MessageHeader" }),
        R = er.LX.useConfig({ location: "message_header" }).enabled,
        S = i.useMemo(() => {
            let e = [];
            return (
                null != M && e.push(M),
                null != y &&
                    (e.push((0, t.jsx)(eb, { guild: y, message: l }, "new-member")),
                    _ && e.push((0, t.jsx)(j.A, { guild: y, message: l }, "voice-channel"))),
                null != a &&
                    null != y &&
                    e.push(
                        (0, t.jsx)(es, { guild: y, channel: a, userId: l.author.id, messageId: l.id }, "connections"),
                    ),
                R && null != a && e.push((0, t.jsx)(ed, { channelId: a.id, messageId: l.id }, "moderation-label")),
                e
            );
        }, [l, a, M, y, _, R]);
    return null == I
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(eL.A, {
                      message: l,
                      channel: a,
                      author: I,
                      compact: r,
                      roleIcon: o,
                      showPopout: d,
                      renderPopout: m,
                      onClick: h,
                      onContextMenu: g,
                      onPopoutRequestClose: A,
                      decorations: { [eL.w.SYSTEM_TAG]: C, [eL.w.BADGES]: S },
                      previewGuildId: s,
                      preview: v,
                      subscribeToGroupId: N,
                      hideGuildTag: f,
                  }),
                  r &&
                      (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)("i", { className: eQ.me, children: ":" }), " "],
                      }),
              ],
          });
});
function e2(e, l, n) {
    let {
        message: i,
        channel: a,
        author: s,
        compact: r = !1,
        onContextMenu: o,
        showUsernamePopout: c,
        roleIcon: d,
        onClickUsername: u,
        onPopoutRequestClose: m,
    } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(eL.A, {
                message: i,
                channel: a,
                author: s,
                compact: r,
                roleIcon: d,
                showPopout: c,
                renderPopout: l,
                onClick: u,
                onContextMenu: o,
                onPopoutRequestClose: m,
                decorations: n,
                preview: !0,
            }),
            r && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("i", { className: eQ.me, children: ":" }), " "] }),
        ],
    });
}
function e7(e) {
    let {
            message: l,
            avatar: n,
            username: i,
            usernameSpanId: a,
            usernameClassName: r,
            compact: c,
            showTimestamp: d,
            showTimestampOnHover: u,
            ariaLabelledBy: h,
            ariaDescribedBy: g,
            className: x,
            messageClassname: A,
            badges: p,
        } = e,
        j = (0, o.Lt)(l.flags, Q.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? l.applicationId : null,
        N = (0, v.h)(j);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            !c && n,
            (0, t.jsxs)(m.H, {
                className: s()(eQ.wx, x),
                "aria-describedby": g,
                "aria-labelledby": h,
                children: [
                    d &&
                        c &&
                        (0, t.jsx)(eU.A, {
                            id: (0, eV.xl)(l),
                            compact: !0,
                            timestamp: l.timestamp,
                            isVisibleOnlyOnHover: u,
                            className: A,
                            isInline: !1,
                            application: N,
                        }),
                    c && n,
                    (0, t.jsx)("span", { id: a, className: r, children: i }),
                    d &&
                        !c &&
                        (0, t.jsx)(eU.A, { id: (0, eV.xl)(l), timestamp: l.timestamp, className: A, application: N }),
                    null != p && p.length > 0 ? (0, t.jsx)("div", { className: eQ.cV, children: p }) : null,
                ],
            }),
        ],
    });
}
function e3(e, l, n, t) {
    return (!e || l) && null != n && null != t ? 1 : (!e || l) && null != n ? 2 : 0;
}
let e6 = i.memo(function (e) {
    let {
            message: l,
            repliedMessage: n,
            compact: a = !1,
            renderPopout: u,
            showTimestampOnHover: m,
            roleIcon: v,
            subscribeToGroupId: p,
            hideTimestamp: j,
            hideGuildTag: N,
            className: f,
            channel: I,
            preview: C,
        } = e,
        b = i.useMemo(() => (null != u ? (e) => u(e, l) : void 0), [u, l]),
        [, y] = (0, eu.Ay)(l.author.id, e.guildId),
        E = (0, c.bG)([eG.A, eO.A], () => {
            let n = eO.A.getGuild(e.guildId);
            return null != l.author && null != n && eG.A.canManageUser(Q.xBc.MODERATE_MEMBERS, l.author, n);
        }, [l.author, e.guildId]),
        M = y && E,
        _ = (function (e) {
            let {
                    props: l,
                    guildId: n,
                    handleRenderPopout: a,
                    showCommunicationDisabledStyles: s = !1,
                    className: o,
                } = e,
                {
                    message: d,
                    author: u,
                    compact: m = !1,
                    subscribeToGroupId: h,
                    animate: g = !0,
                    onContextMenu: v,
                    onClickAvatar: p,
                    onPopoutRequestClose: j,
                    showAvatarPopout: N,
                } = l,
                f = i.useRef(null),
                [I, C] = i.useState(!1),
                { analyticsLocations: b } = (0, A.Ay)(x.A.AVATAR),
                y = (0, c.bG)([ew.Ay], () => l.displayCompactAvatars ?? ew.Ay.displayCompactAvatars),
                E = (0, eZ.A)(d),
                M = m ? 32 : 80,
                {
                    avatarSrc: _,
                    avatarDecorationSrc: R,
                    isAnimating: S,
                    eventHandlers: T,
                } = (0, eS.A)({
                    userId: d.author.id,
                    guildId: n,
                    size: M,
                    animateOnHover: null != h ? !I : !g,
                    avatarDecorationOverride: l.avatarDecorationOverride,
                    avatarOverride: l.avatarOverride,
                }),
                w = d.isInteractionPlaceholder(),
                O = i.useMemo(
                    () =>
                        w && null == d.author.avatar && null == u.guildMemberAvatar && d.application?.icon != null
                            ? (ek.Ay.getApplicationIconURL({
                                  id: d.application.id,
                                  icon: d.application.icon,
                                  size: M,
                                  fallbackAvatar: !1,
                              }) ?? _)
                            : null != d.webhookId && null == u.guildMemberAvatar
                              ? ek.Ay.getUserAvatarURL(
                                    {
                                        avatar: d.author.avatar,
                                        id: d.author.id,
                                        discriminator: d.author.discriminator,
                                        bot: !0,
                                    },
                                    S,
                                    M,
                                )
                              : _,
                    [
                        w,
                        d.author.avatar,
                        d.author.id,
                        d.author.discriminator,
                        d.application?.icon,
                        d.application?.id,
                        d.webhookId,
                        _,
                        M,
                        u.guildMemberAvatar,
                        S,
                    ],
                );
            if (
                (i.useEffect(() => {
                    if (null != h)
                        return (
                            eP._.subscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${h}:${d.author.id}`, C),
                            () => void eP._.unsubscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${h}:${d.author.id}`, C)
                        );
                }, [d.author.id, h]),
                !m || y)
            )
                return null != a && null != N
                    ? (0, t.jsx)(A.f5, {
                          value: b,
                          children: (0, t.jsx)(eT.A, {
                              targetElementRef: f,
                              user: d.author,
                              guildId: n,
                              channelId: d.channel_id,
                              messageId: d.id,
                              shouldShow: N,
                              shouldPreload: E,
                              renderPopout: a,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: O,
                              onRequestClose: j,
                              clickTrap: N,
                              children: (e) =>
                                  e0({
                                      ...T,
                                      avatarSrc: O,
                                      avatarDecorationSrc: R,
                                      compact: m,
                                      onClick: p,
                                      onContextMenu: v,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                      showCommunicationDisabledStyles: s,
                                      className: o,
                                      avatarImgRef: f,
                                  }),
                          }),
                      })
                    : (0, t.jsx)(A.f5, {
                          value: b,
                          children: e0({
                              ...T,
                              avatarSrc: O,
                              avatarDecorationSrc: R,
                              compact: m,
                              onClick: p,
                              onContextMenu: v,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: s,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: b, showCommunicationDisabledStyles: M }),
        R = (0, c.bG)([ew.Ay], () => e.displayCompactAvatars ?? ew.Ay.displayCompactAvatars),
        S = i.useMemo(
            () => (0, eJ.k)({ message: l, channel: I, user: l?.author, compact: a, isRepliedMessage: !1 }),
            [l, I, a],
        ),
        T = (0, c.bG)([eO.A], () => e3(a, R, v, eO.A.getGuild(e.guildId)), [a, R, v, e.guildId]),
        w = i.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(l.flags, Q.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, t.jsx)(eR, {}, "suppress-notifications")),
                e
            );
        }, [l]),
        O = (0, eV.d$)(l, p),
        G = (0, eV.xl)(l),
        k = j ? `${O}` : `${O} ${G}`,
        P = n?.state === ey.a.LOADED ? (0, eV.nS)(l) : void 0;
    return (0, t.jsx)(e7, {
        message: l,
        avatar: _,
        username: (0, t.jsxs)(t.Fragment, {
            children: [
                M &&
                    (0, t.jsx)(d.m, {
                        text: el.intl.string(el.t["AeYyL+"]),
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(h.g, { size: "xxs", color: "currentColor", className: a ? eQ.EI : eQ.bu }),
                                (0, t.jsx)(g.A, { children: el.intl.string(el.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, t.jsx)(e1, {
                    ...e,
                    message: l,
                    channel: I,
                    compact: a,
                    roleIconProps: v,
                    renderPopout: b,
                    preview: C,
                    subscribeToGroupId: p,
                    hideGuildTag: N,
                }),
            ],
        }),
        usernameSpanId: (0, eV.d$)(l, p),
        usernameClassName: s()(eQ.TK, { [eQ.yF]: 0 !== T, [eQ.hB]: null != S || w.length > 0 }),
        compact: a,
        showTimestamp: !0 !== j,
        showTimestampOnHover: m,
        ariaLabelledBy: k,
        ariaDescribedBy: P,
        className: f,
        badges: w,
    });
});
