n.d(l, { ix: () => e8, Ay: () => e9, tO: () => e5 }), n(321073), n(938796);
var t = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    r = n(607399),
    o = n(665260),
    u = n(17928),
    d = n(990078),
    c = n(922016),
    g = n(707554),
    h = n(60270),
    m = n(140735),
    A = n(793574),
    v = n(688810),
    f = n(429913),
    x = n(593643),
    p = n(61230),
    j = n(284009),
    C = n.n(j),
    N = n(735438),
    I = n.n(N),
    _ = n(661531),
    E = n(462887),
    b = n(862482),
    M = n(933832),
    S = n(834730),
    y = n(602853),
    w = n(778712),
    T = n(686956),
    R = n(730134),
    O = n(736653),
    G = n(573648),
    D = n(58149),
    L = n(709066),
    P = n(975732),
    V = n(889227),
    U = n(696451),
    B = n(954571),
    k = n(370480),
    H = n(228366);
let F = new Map();
class $ extends u.Ay.Store {
    static displayName = "GuildRoleConnectionEligibilityStore";
    getGuildRoleConnectionEligibility(e) {
        return null != e ? F.get(e) : void 0;
    }
}
let z = new $(H.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
        let { roleId: l, roleConnectionEligibility: n } = e;
        F.set(l, n);
    },
});
var K = n(702841),
    W = n(734057),
    Y = n(317525),
    Z = n(87e3),
    J = n(355971),
    q = n(293260),
    X = n(783419),
    Q = n(652215),
    ee = n(518477),
    el = n(985018),
    en = n(969565);
function et(e) {
    let l,
        { connectionType: n, connectionMetadataField: a, operator: i, value: s, description: r } = e;
    if (null != r)
        switch (i) {
            case X.so.LESS_THAN:
                l = el.intl.format(el.t["2p7dA3"], { description: r, count: Math.max(0, Number(s) - 1) });
                break;
            case X.so.GREATER_THAN:
                l = el.intl.format(el.t["2p7dA3"], { description: r, count: Math.max(0, Number(s) + 1) });
                break;
            default:
                l = r;
        }
    else l = (0, k.RP)({ connectionType: n, connectionMetadataField: a, operator: i, value: s });
    return null == l
        ? null
        : (0, t.jsxs)("div", {
              className: en.wL,
              children: [
                  (0, t.jsx)(M.A, { size: "md", color: "currentColor", className: en.D$ }),
                  (0, t.jsx)(S.E, { variant: "text-xs/medium", color: "text-strong", children: l }),
              ],
          });
}
function ea(e) {
    let { eligibilityStates: l } = e,
        n = (0, O.Ay)(),
        a = (0, y.r)(_.A.unsafe_rawColors.GREEN_330).hex(),
        i = I().groupBy(l, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, t.jsx)(t.Fragment, {
        children: Object.keys(i).map((e) => {
            let l,
                s = i[e],
                r = s.filter((e) => null != e.operator),
                o = s.find((e) => null != e.application),
                u = G.A.get(e),
                d = o?.application,
                c = d?.bot != null ? new V.A(d.bot) : null;
            return (
                k.iC.includes(d?.id ?? "")
                    ? (l = (0, t.jsx)(J.A, { className: en.AO, color: a, size: 16 }))
                    : null != c && (l = (0, t.jsx)(L.A, { className: en.AO, verified: c.isVerifiedBot() })),
                (0, t.jsxs)(
                    "div",
                    {
                        className: en.sV,
                        children: [
                            (0, t.jsxs)("div", {
                                className: en.ei,
                                children: [
                                    null != u
                                        ? (0, t.jsx)("img", {
                                              src: (0, E.M)(n) ? u.icon.darkSVG : u.icon.lightSVG,
                                              alt: "",
                                              className: en.j$,
                                          })
                                        : null,
                                    null != c
                                        ? (0, t.jsx)(R.A, { user: c, size: w._3.SIZE_20, className: en.j$ })
                                        : null,
                                    (0, t.jsx)(S.E, {
                                        variant: "text-sm/medium",
                                        color: "interactive-text-active",
                                        children: u?.name ?? d?.name,
                                    }),
                                    l,
                                ],
                            }),
                            r.map((e) => {
                                let {
                                    connection_type: l,
                                    connection_metadata_field: n,
                                    operator: a,
                                    value: i,
                                    description: s,
                                } = e;
                                return (
                                    C()(null != n, "connectionMetadataField is null"),
                                    C()(null != a, "operator is null"),
                                    C()(null != i, "value is null"),
                                    (0, t.jsx)(
                                        et,
                                        {
                                            connectionType: l,
                                            connectionMetadataField: n,
                                            operator: a,
                                            value: i,
                                            description: s,
                                        },
                                        `${l}:${n}:${a}:${i}`,
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
function ei(e) {
    let l,
        {
            onGetRolesClicked: n,
            onOpenProfile: i,
            eligibilityStates: s,
            userId: r,
            roleId: o,
            channelId: d,
            guildId: c,
        } = e;
    a.useEffect(() => {
        B.default.track(Q.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: r,
            role_id: o,
            ...(0, D.Ou)(d),
            ...(0, D.H$)(c),
        });
    }, [r, o, d, c]);
    let g = (0, u.bG)([U.Ay], () => U.Ay.getSelfMember(c)?.roles.includes(o) ?? !1, [c, o]);
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
                    children: (0, t.jsx)(S.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: en.Io,
                        children: l,
                    }),
                }),
                (0, t.jsx)("div", { className: en.jf, children: (0, t.jsx)(ea, { eligibilityStates: s.flat() }) }),
                (0, t.jsxs)("div", {
                    className: en.UD,
                    children: [
                        g
                            ? null
                            : (0, t.jsx)(b.$n, { className: en.wz, onClick: n, children: el.intl.string(el.t.T1t1WV) }),
                        (0, t.jsx)(b.$n, {
                            className: en.lQ,
                            color: b.$n.Colors.PRIMARY,
                            onClick: i,
                            children: el.intl.string(el.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}
function es(e) {
    let { userId: l, messageId: n, guild: i, channel: s } = e,
        { analyticsLocations: r } = (0, v.Ay)(),
        o = (function (e, l) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                a = (0, K.bG)([U.Ay], () => (null != e ? U.Ay.getMember(e.id, l) : null), [e, l]),
                i = (0, K.bG)([W.A], () => W.A.getChannel(n), [n]),
                s = (0, K.bG)([W.A], () => W.A.getChannel(i?.parent_id), [i]),
                r = (0, K.bG)([Y.A], () => (null != e ? Y.A.getSortedRoles(e.id) : void 0));
            return null == e || null == r || null == a
                ? null
                : (0, k._g)({
                      guild: e,
                      sortedGuildRoles: r,
                      guildMember: a,
                      channel: null != i && i.isThread() && null != s ? s : i,
                      onlyChannelConnectionRoles: t,
                  });
        })(i, l, s.id, !0),
        g = (0, u.bG)([z], () => z.getGuildRoleConnectionEligibility(o?.id)),
        [h, m] = a.useState(null == g),
        A = a.useRef(null);
    if (null == o) return null;
    async function f() {
        C()(null != o, "visibleConnectionsRole is null"),
            h && null == g && (await T.A.fetchGuildRoleConnectionsEligibility(i.id, o.id), m(!1));
    }
    return (0, t.jsx)(c.Q, {
        targetElementRef: A,
        onRequestOpen: f,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: a } = e;
                return null == g
                    ? (0, t.jsx)(t.Fragment, {})
                    : (C()(null != o, "visibleConnectionsRole is null"),
                      (0, t.jsx)(ei, {
                          eligibilityStates: g,
                          userId: l,
                          roleId: o.id,
                          channelId: s.id,
                          guildId: i.id,
                          onGetRolesClicked: () => {
                              (0, q.c0)(i.id);
                          },
                          onOpenProfile: () => {
                              (0, P.openUserProfileModal)({
                                  userId: l,
                                  messageId: n,
                                  guildId: i.id,
                                  channelId: s.id,
                                  roleId: o.id,
                                  scrollTarget: ee.bk.CONNECTIONS,
                                  sourceAnalyticsLocations: r,
                              }),
                                  a();
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
                    ref: A,
                    className: en.qS,
                    ...e,
                    children: [
                        (0, t.jsx)(Z.A, { className: en.f7, size: 16, color: o.colorString }),
                        (0, t.jsx)(S.E, {
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
var er = n(17447),
    eo = n(807884),
    eu = n(514116);
function ed(e) {
    let { channelId: l, messageId: n } = e,
        a = (0, eo.A)(l, n)?.message.moderationLabel;
    return null == a || "" === a ? null : (0, t.jsx)("span", { className: eu.R, children: a });
}
var ec = n(870136),
    eg = n(939249),
    eh = n(506803),
    em = n(351001),
    eA = n(534514),
    ev = n(821609),
    ef = n(964486),
    ex = n(34337),
    ep = n(448290),
    ej = n(309010),
    eC = n(828567);
let eN = function (e) {
    let { guild: l, message: n, onClose: a } = e,
        i = W.A.getChannel(ej.A.getChannelId(l.id));
    return ((0, ef.Ay)(() => {
        B.default.track(Q.HAw.OPEN_POPOUT, { type: "New Member Badge Popout", guild_id: l.id, channel_id: i?.id });
    }),
    null == i)
        ? null
        : (0, t.jsx)(ex.Uq, {
              className: eC.cc,
              children: (0, t.jsxs)("div", {
                  className: eC.jC,
                  children: [
                      (0, t.jsxs)("div", {
                          className: eC.rb,
                          children: [
                              (0, t.jsx)("div", {
                                  className: eC.zc,
                                  children: (0, t.jsx)(eh.N, {
                                      size: "custom",
                                      color: "currentColor",
                                      width: 40,
                                      height: 40,
                                  }),
                              }),
                              (0, t.jsxs)("div", {
                                  children: [
                                      (0, t.jsx)(eA.D, {
                                          variant: "heading-md/semibold",
                                          className: eC.wx,
                                          children: el.intl.string(el.t["v/OYd2"]),
                                      }),
                                      (0, t.jsx)(S.E, {
                                          variant: "text-sm/normal",
                                          children: el.intl.string(el.t.Z85MlD),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, t.jsx)("div", {
                          "data-button-hoisted-classname-wrapper": !0,
                          className: eC.lI,
                          children: (0, t.jsx)(ev.$, {
                              variant: "primary",
                              size: "sm",
                              text: el.intl.format(el.t["+xsVS6"], { username: n.author.username }),
                              fullWidth: !0,
                              onClick: () => {
                                  D.Ay.trackWithMetadata(Q.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                      target_user_id: n.author.id,
                                  }),
                                      a(),
                                      (0, ep.C)(n.author, i.id);
                              },
                          }),
                      }),
                  ],
              }),
          });
};
var eI = n(125534);
function e_(e) {
    let { guild: l, message: n } = e,
        i = a.useRef(null);
    return (0, em.HU)(l.id, n.author.id)
        ? (0, t.jsx)(c.Y, {
              targetElementRef: i,
              animation: c.Y.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, t.jsx)(eN, { guild: l, message: n, onClose: a });
              },
              children: (e) => {
                  let { onClick: l } = e;
                  return (0, t.jsx)(eg.D, {
                      onClick: l,
                      tag: "span",
                      innerRef: i,
                      children: (0, t.jsx)(d.m, {
                          text: el.intl.string(el.t["v/OYd2"]),
                          children: (0, t.jsx)("div", {
                              className: eI.C,
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
var eE = n(919395),
    eb = n(9842),
    eM = n(657048),
    eS = n(440971),
    ey = n(689255);
function ew() {
    return (0, t.jsx)(d.m, {
        text: el.intl.string(el.t["RO/KYj"]),
        children: (0, t.jsx)("div", {
            className: ey.q,
            children: (0, t.jsx)(eS.R, { color: "currentColor", size: "custom", width: "1rem", height: "1rem" }),
        }),
    });
}
var eT = n(352413),
    eR = n(854627),
    eO = n(342296),
    eG = n(964404),
    eD = n(71393),
    eL = n(576705),
    eP = n(287809),
    eV = n(486020),
    eU = n(625494),
    eB = n(763754),
    ek = n(635071),
    eH = n(860227),
    eF = n(606049),
    e$ = n(3026),
    ez = n(305866),
    eK = n(104510),
    eW = n(376304),
    eY = n(509536),
    eZ = n(98318),
    eJ = n(976860),
    eq = n(746080),
    eX = n(433211);
let eQ = (e) => {
    let { roleIcon: l, guild: n } = e,
        { name: a } = l;
    (0, ef.Ay)(() => {
        B.default.track(Q.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, D.dI)(W.A.getChannel(ej.A.getChannelId(n.id))),
        });
    });
    let i = (0, u.bG)([Y.A], () => (null != l.roleId ? Y.A.getRole(n.id, l.roleId) : void 0)),
        s = (0, eZ.U)(i),
        r = s
            ? el.intl.formatToPlainString(el.t.t0928V, { name: a })
            : el.intl.formatToPlainString(el.t.UDDkGy, { name: a }),
        o = { ...l, src: null == l.src ? l.src : (0, eW.ux)(l.src, 40), size: 40 },
        d = s
            ? () => {
                  (0, eJ.pX)(Q.BVt.CHANNEL(n.id, eq.VV.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, eY.K4)({ guildId: n.id, location: { section: Q.JJy.ROLE_ICON_POPOUT } });
              };
    return (0, t.jsx)(ez.l, {
        children: (0, t.jsx)(ex.Uq, {
            children: (0, t.jsxs)("div", {
                className: eX.jC,
                children: [
                    (0, t.jsxs)("div", {
                        className: eX.rb,
                        children: [
                            (0, t.jsx)("div", {
                                className: eX.Xq,
                                children: (0, t.jsx)(eM.A, {
                                    ...o,
                                    enableTooltip: !1,
                                    className: eX.__invalid_roleIcon,
                                    enableHeight: !1,
                                }),
                            }),
                            (0, t.jsxs)("div", {
                                className: eX.bM,
                                children: [
                                    (0, t.jsx)(eA.D, {
                                        variant: "heading-md/semibold",
                                        className: eX.S3,
                                        children: (0, t.jsx)(e$.A, { children: a }),
                                    }),
                                    (0, t.jsx)(S.E, { variant: "text-sm/normal", children: r }),
                                ],
                            }),
                        ],
                    }),
                    (0, t.jsx)(ev.$, {
                        size: "sm",
                        variant: "secondary",
                        text: el.intl.string(el.t["H930+H"]),
                        onClick: d,
                        icon: eK._,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
};
var e0 = n(812299),
    e1 = n(109054),
    e2 = n(334211);
function e3(e) {
    let {
        avatarSrc: l,
        avatarDecorationSrc: n,
        compact: a,
        onClick: i,
        onContextMenu: r,
        onMouseDown: o,
        onMouseEnter: u,
        onMouseLeave: d,
        onKeyDown: c,
        showCommunicationDisabledStyles: g = !1,
        className: h,
        avatarImgRef: m,
    } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)("img", {
                ref: m,
                onClick: i,
                onContextMenu: r,
                onKeyDown: c,
                onMouseDown: o,
                onMouseEnter: u,
                onMouseLeave: d,
                src: l,
                "aria-hidden": !0,
                className: s()(h, e2.my, { [e2.oE]: a, [e2.vk]: null != i, [e2.uU]: g }),
                alt: " ",
            }),
            null == n || a ? null : (0, t.jsx)("img", { className: e2.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let e6 = a.memo(function (e) {
    let {
            message: l,
            author: n,
            channel: i,
            guildId: s,
            compact: r = !1,
            roleIconProps: o,
            showUsernamePopout: d,
            renderPopout: g,
            onClickUsername: h,
            onContextMenu: m,
            displayCompactAvatars: A = !1,
            onPopoutRequestClose: v,
            preview: f,
            subscribeToGroupId: j,
            hideGuildTag: C,
        } = e,
        N = (0, eB.Ay)(l, n),
        I = a.useMemo(
            () => (0, e0.y)({ message: l, channel: i, user: l?.author, compact: r, isRepliedMessage: !1 }),
            [l, i, r],
        ),
        _ = a.useRef(null),
        E = (0, u.bG)([eD.A], () => eD.A.getGuild(s)),
        b = a.useMemo(() => e7(r, A, o, E), [r, A, o, E]),
        M = a.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === b && null != E
                      ? (0, t.jsx)(
                            c.Y,
                            {
                                targetElementRef: _,
                                animation: c.Y.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, t.jsx)(eQ, { roleIcon: o, guild: E }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: l } = e;
                                    return (0, t.jsx)(eM.A, { ref: _, ...o, className: e2.UT, onClick: l });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === b
                        ? (0, t.jsx)(eM.A, { ...o, className: e2.UT }, "role-icon-children")
                        : null,
            [b, o, E],
        ),
        { enabled: S } = (0, x.D8)({ guildId: E?.id, location: "MessageHeader" }),
        y = er.L.useConfig({ location: "message_header" }).enabled,
        w = a.useMemo(() => {
            let e = [];
            return (
                null != M && e.push(M),
                null != E &&
                    (e.push((0, t.jsx)(e_, { guild: E, message: l }, "new-member")),
                    S && e.push((0, t.jsx)(p.A, { guild: E, message: l }, "voice-channel"))),
                null != i &&
                    null != E &&
                    e.push(
                        (0, t.jsx)(es, { guild: E, channel: i, userId: l.author.id, messageId: l.id }, "connections"),
                    ),
                y && null != i && e.push((0, t.jsx)(ed, { channelId: i.id, messageId: l.id }, "moderation-label")),
                e
            );
        }, [l, i, M, E, S, y]);
    return null == N
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(ek.A, {
                      message: l,
                      channel: i,
                      author: N,
                      compact: r,
                      roleIcon: o,
                      showPopout: d,
                      renderPopout: g,
                      onClick: h,
                      onContextMenu: m,
                      onPopoutRequestClose: v,
                      decorations: { [ek.w.SYSTEM_TAG]: I, [ek.w.BADGES]: w },
                      previewGuildId: s,
                      preview: f,
                      subscribeToGroupId: j,
                      hideGuildTag: C,
                  }),
                  r &&
                      (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)("i", { className: e2.me, children: ":" }), " "],
                      }),
              ],
          });
});
function e5(e, l, n) {
    let {
        message: a,
        channel: i,
        author: s,
        compact: r = !1,
        onContextMenu: o,
        showUsernamePopout: u,
        roleIcon: d,
        onClickUsername: c,
        onPopoutRequestClose: g,
    } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(ek.A, {
                message: a,
                channel: i,
                author: s,
                compact: r,
                roleIcon: d,
                showPopout: u,
                renderPopout: l,
                onClick: c,
                onContextMenu: o,
                onPopoutRequestClose: g,
                decorations: n,
                preview: !0,
            }),
            r && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("i", { className: e2.me, children: ":" }), " "] }),
        ],
    });
}
function e8(e) {
    let {
            message: l,
            avatar: n,
            username: a,
            usernameSpanId: i,
            usernameClassName: r,
            compact: u,
            showTimestamp: d,
            showTimestampOnHover: c,
            ariaLabelledBy: h,
            ariaDescribedBy: m,
            className: A,
            messageClassname: v,
            badges: x,
        } = e,
        p = (0, o.Lt)(l.flags, Q.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? l.applicationId : null,
        j = (0, f.h)(p);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            !u && n,
            (0, t.jsxs)(g.H, {
                className: s()(e2.wx, A),
                "aria-describedby": m,
                "aria-labelledby": h,
                children: [
                    d &&
                        u &&
                        (0, t.jsx)(eF.A, {
                            id: (0, eH.xl)(l),
                            compact: !0,
                            timestamp: l.timestamp,
                            isVisibleOnlyOnHover: c,
                            className: v,
                            isInline: !1,
                            application: j,
                        }),
                    u && n,
                    (0, t.jsx)("span", { id: i, className: r, children: a }),
                    d &&
                        !u &&
                        (0, t.jsx)(eF.A, { id: (0, eH.xl)(l), timestamp: l.timestamp, className: v, application: j }),
                    null != x && x.length > 0 ? (0, t.jsx)("div", { className: e2.cV, children: x }) : null,
                ],
            }),
        ],
    });
}
function e7(e, l, n, t) {
    return (!e || l) && null != n && null != t ? 1 : (!e || l) && null != n ? 2 : 0;
}
let e9 = a.memo(function (e) {
    let {
            message: l,
            repliedMessage: n,
            compact: i = !1,
            renderPopout: c,
            showTimestampOnHover: g,
            roleIcon: f,
            subscribeToGroupId: x,
            hideTimestamp: p,
            hideGuildTag: j,
            className: C,
            channel: N,
            preview: I,
        } = e,
        _ = a.useMemo(() => (null != c ? (e) => c(e, l) : void 0), [c, l]),
        [, E] = (0, ec.Ay)(l.author.id, e.guildId),
        b = (0, u.bG)([eL.A, eD.A], () => {
            let n = eD.A.getGuild(e.guildId);
            return null != l.author && null != n && eL.A.canManageUser(Q.xBc.MODERATE_MEMBERS, l.author, n);
        }, [l.author, e.guildId]),
        M = E && b,
        S = (function (e) {
            let {
                    props: l,
                    guildId: n,
                    handleRenderPopout: i,
                    showCommunicationDisabledStyles: s = !1,
                    className: o,
                } = e,
                {
                    message: d,
                    author: c,
                    compact: g = !1,
                    subscribeToGroupId: h,
                    animate: m = !0,
                    onContextMenu: f,
                    onClickAvatar: x,
                    onPopoutRequestClose: p,
                    showAvatarPopout: j,
                } = l,
                C = a.useRef(null),
                [N, I] = a.useState(!1),
                { analyticsLocations: _ } = (0, v.Ay)(A.A.AVATAR),
                E = (0, u.bG)([eP.default], () => eP.default.getCurrentUser()),
                b = (0, u.bG)([eG.Ay], () => l.displayCompactAvatars ?? eG.Ay.displayCompactAvatars),
                M = (0, e1.A)(d),
                S = g ? 32 : 80,
                { pendingAvatarDecoration: y } = (0, eT.A)({ guildId: n }),
                w = (0, eE.lw)({
                    pendingValue: d.author.id === E?.id ? y : void 0,
                    userValue: d.author?.avatarDecoration,
                    guildValue: c?.guildMemberAvatarDecoration,
                    guildId: n,
                }),
                {
                    avatarSrc: T,
                    avatarDecorationSrc: R,
                    isAnimating: O,
                    eventHandlers: G,
                } = (0, eR.A)({
                    userId: d.author.id,
                    guildId: n,
                    size: S,
                    animateOnHover: null != h ? !N : !m,
                    avatarDecorationOverride: w,
                    showPending: !0,
                }),
                D = d.isInteractionPlaceholder(),
                L = a.useMemo(
                    () =>
                        D && null == d.author.avatar && null == c.guildMemberAvatar && d.application?.icon != null
                            ? (eV.Ay.getApplicationIconURL({
                                  id: d.application.id,
                                  icon: d.application.icon,
                                  size: S,
                                  fallbackAvatar: !1,
                              }) ?? T)
                            : null != d.webhookId && null == c.guildMemberAvatar
                              ? eV.Ay.getUserAvatarURL(
                                    {
                                        avatar: d.author.avatar,
                                        id: d.author.id,
                                        discriminator: d.author.discriminator,
                                        bot: !0,
                                    },
                                    O,
                                    S,
                                )
                              : T,
                    [
                        D,
                        d.author.avatar,
                        d.author.id,
                        d.author.discriminator,
                        d.application?.icon,
                        d.application?.id,
                        d.webhookId,
                        T,
                        S,
                        c.guildMemberAvatar,
                        O,
                    ],
                );
            if (
                (a.useEffect(() => {
                    if (null != h)
                        return (
                            eU._.subscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${h}:${d.author.id}`, I),
                            () => void eU._.unsubscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${h}:${d.author.id}`, I)
                        );
                }, [d.author.id, h]),
                !g || b)
            )
                return null != i && null != j
                    ? (0, t.jsx)(v.f5, {
                          value: _,
                          children: (0, t.jsx)(eO.A, {
                              targetElementRef: C,
                              user: d.author,
                              guildId: n,
                              channelId: d.channel_id,
                              messageId: d.id,
                              shouldShow: j,
                              shouldPreload: M,
                              renderPopout: i,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: L,
                              onRequestClose: p,
                              clickTrap: j,
                              children: (e) =>
                                  e3({
                                      ...G,
                                      avatarSrc: L,
                                      avatarDecorationSrc: R,
                                      compact: g,
                                      onClick: x,
                                      onContextMenu: f,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                      showCommunicationDisabledStyles: s,
                                      className: o,
                                      avatarImgRef: C,
                                  }),
                          }),
                      })
                    : (0, t.jsx)(v.f5, {
                          value: _,
                          children: e3({
                              ...G,
                              avatarSrc: L,
                              avatarDecorationSrc: R,
                              compact: g,
                              onClick: x,
                              onContextMenu: f,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: s,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: _, showCommunicationDisabledStyles: M }),
        y = (0, u.bG)([eG.Ay], () => e.displayCompactAvatars ?? eG.Ay.displayCompactAvatars),
        w = a.useMemo(
            () => (0, e0.k)({ message: l, channel: N, user: l?.author, compact: i, isRepliedMessage: !1 }),
            [l, N, i],
        ),
        T = (0, u.bG)([eD.A], () => e7(i, y, f, eD.A.getGuild(e.guildId)), [i, y, f, e.guildId]),
        R = a.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(l.flags, Q.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, t.jsx)(ew, {}, "suppress-notifications")),
                e
            );
        }, [l]),
        O = (0, eH.d$)(l, x),
        G = (0, eH.xl)(l),
        D = p ? `${O}` : `${O} ${G}`,
        L = n?.state === eb.a.LOADED ? (0, eH.nS)(l) : void 0;
    return (0, t.jsx)(e8, {
        message: l,
        avatar: S,
        username: (0, t.jsxs)(t.Fragment, {
            children: [
                M &&
                    (0, t.jsx)(d.m, {
                        text: el.intl.string(el.t["AeYyL+"]),
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(h.g, { size: "xxs", color: "currentColor", className: i ? e2.EI : e2.bu }),
                                (0, t.jsx)(m.A, { children: el.intl.string(el.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, t.jsx)(e6, {
                    ...e,
                    message: l,
                    channel: N,
                    compact: i,
                    roleIconProps: f,
                    renderPopout: _,
                    preview: I,
                    subscribeToGroupId: x,
                    hideGuildTag: j,
                }),
            ],
        }),
        usernameSpanId: (0, eH.d$)(l, x),
        usernameClassName: s()(e2.TK, { [e2.yF]: 0 !== T, [e2.hB]: null != w || R.length > 0 }),
        compact: i,
        showTimestamp: !0 !== p,
        showTimestampOnHover: g,
        ariaLabelledBy: D,
        ariaDescribedBy: L,
        className: C,
        badges: R,
    });
});
