l.d(n, { ix: () => e3, Ay: () => e6, tO: () => e2 }), l(321073), l(938796);
var t = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(607399),
    o = l(665260),
    c = l(17928),
    d = l(922016),
    u = l(707554),
    m = l(866665),
    h = l(60270),
    g = l(140735),
    x = l(793574),
    A = l(688810),
    v = l(429913),
    p = l(593643),
    j = l(61230),
    f = l(284009),
    N = l.n(f),
    I = l(435558),
    C = l.n(I),
    b = l(661531),
    y = l(462887),
    E = l(862482),
    M = l(933832),
    _ = l(834730),
    R = l(602853),
    S = l(778712),
    T = l(66834),
    w = l(730134),
    O = l(736653),
    G = l(573648),
    k = l(95561),
    P = l(709066),
    D = l(975732),
    L = l(889227),
    V = l(696451),
    U = l(174459),
    H = l(370480),
    $ = l(228366);
let z = new Map();
class B extends c.Ay.Store {
    static displayName = "GuildRoleConnectionEligibilityStore";
    getGuildRoleConnectionEligibility(e) {
        return null != e ? z.get(e) : void 0;
    }
}
let F = new B($.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { roleId: n, roleConnectionEligibility: l } = e;
        z.set(n, l);
    },
});
var Y = l(702841),
    K = l(734057),
    W = l(317525),
    q = l(63104),
    X = l(355971),
    J = l(293260),
    Z = l(783419),
    Q = l(652215),
    ee = l(518477),
    en = l(375708),
    el = l(969565);
function et(e) {
    let n,
        { connectionType: l, connectionMetadataField: i, operator: a, value: s, description: r } = e;
    if (null != r)
        switch (a) {
            case Z.so.LESS_THAN:
                n = en.intl.format(en.t["2p7dA3"], { description: r, count: Math.max(0, Number(s) - 1) });
                break;
            case Z.so.GREATER_THAN:
                n = en.intl.format(en.t["2p7dA3"], { description: r, count: Math.max(0, Number(s) + 1) });
                break;
            default:
                n = r;
        }
    else n = (0, H.RP)({ connectionType: l, connectionMetadataField: i, operator: a, value: s });
    return null == n
        ? null
        : (0, t.jsxs)("div", {
              className: el.wL,
              children: [
                  (0, t.jsx)(M.A, { size: "md", color: "currentColor", className: el.D$ }),
                  (0, t.jsx)(_.E, { variant: "text-xs/medium", color: "text-strong", children: n }),
              ],
          });
}
function ei(e) {
    let { eligibilityStates: n } = e,
        l = (0, O.Ay)(),
        i = (0, R.r)(b.A.unsafe_rawColors.GREEN_330).hex(),
        a = C().groupBy(n, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, t.jsx)(t.Fragment, {
        children: Object.keys(a).map((e) => {
            let n,
                s = a[e],
                r = s.filter((e) => null != e.operator),
                o = s.find((e) => null != e.application),
                c = G.A.get(e),
                d = o?.application,
                u = d?.bot != null ? new L.A(d.bot) : null;
            return (
                H.iC.includes(d?.id ?? "")
                    ? (n = (0, t.jsx)(X.A, { className: el.AO, color: i, size: 16 }))
                    : null != u && (n = (0, t.jsx)(P.A, { className: el.AO, verified: u.isVerifiedBot() })),
                (0, t.jsxs)(
                    "div",
                    {
                        className: el.sV,
                        children: [
                            (0, t.jsxs)("div", {
                                className: el.ei,
                                children: [
                                    null != c
                                        ? (0, t.jsx)("img", {
                                              src: (0, y.M)(l) ? c.icon.darkSVG : c.icon.lightSVG,
                                              alt: "",
                                              className: el.j$,
                                          })
                                        : null,
                                    null != u
                                        ? (0, t.jsx)(w.A, { user: u, size: S._3.SIZE_20, className: el.j$ })
                                        : null,
                                    (0, t.jsx)(_.E, {
                                        variant: "text-sm/medium",
                                        color: "interactive-text-active",
                                        children: c?.name ?? d?.name,
                                    }),
                                    n,
                                ],
                            }),
                            r.map((e) => {
                                let {
                                    connection_type: n,
                                    connection_metadata_field: l,
                                    operator: i,
                                    value: a,
                                    description: s,
                                } = e;
                                return (
                                    N()(null != l, "connectionMetadataField is null"),
                                    N()(null != i, "operator is null"),
                                    N()(null != a, "value is null"),
                                    (0, t.jsx)(
                                        et,
                                        {
                                            connectionType: n,
                                            connectionMetadataField: l,
                                            operator: i,
                                            value: a,
                                            description: s,
                                        },
                                        `${n}:${l}:${i}:${a}`,
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
    let n,
        {
            onGetRolesClicked: l,
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
        (n =
            1 === s.length && 1 === s[0].length
                ? en.intl.string(en.t.jDym4E)
                : 1 === s.length
                  ? en.intl.format(en.t["0eBj3x"], {})
                  : en.intl.format(en.t.D7uftB, {})),
        (0, t.jsxs)("div", {
            className: el.SW,
            children: [
                (0, t.jsx)("div", {
                    className: el.oT,
                    children: (0, t.jsx)(_.E, {
                        variant: "text-xs/normal",
                        color: "text-default",
                        className: el.Io,
                        children: n,
                    }),
                }),
                (0, t.jsx)("div", { className: el.jf, children: (0, t.jsx)(ei, { eligibilityStates: s.flat() }) }),
                (0, t.jsxs)("div", {
                    className: el.UD,
                    children: [
                        m
                            ? null
                            : (0, t.jsx)(E.$n, { className: el.wz, onClick: l, children: en.intl.string(en.t.T1t1WV) }),
                        (0, t.jsx)(E.$n, {
                            className: el.lQ,
                            color: E.$n.Colors.PRIMARY,
                            onClick: a,
                            children: en.intl.string(en.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}
function es(e) {
    let { userId: n, messageId: l, guild: a, channel: s } = e,
        { analyticsLocations: r } = (0, A.Ay)(),
        o = (function (e, n) {
            let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                i = (0, Y.bG)([V.Ay], () => (null != e ? V.Ay.getMember(e.id, n) : null), [e, n]),
                a = (0, Y.bG)([K.A], () => K.A.getChannel(l), [l]),
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
        })(a, n, s.id, !0),
        u = (0, c.bG)([F], () => F.getGuildRoleConnectionEligibility(o?.id)),
        [h, g] = i.useState(null == u),
        x = i.useRef(null);
    if (null == o) return null;
    async function v() {
        N()(null != o, "visibleConnectionsRole is null"),
            h && null == u && (await T.A.fetchGuildRoleConnectionsEligibility(a.id, o.id), g(!1));
    }
    return (0, t.jsx)(d.Q, {
        targetElementRef: x,
        onRequestOpen: v,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: i } = e;
                return null == u
                    ? (0, t.jsx)(t.Fragment, {})
                    : (N()(null != o, "visibleConnectionsRole is null"),
                      (0, t.jsx)(ea, {
                          eligibilityStates: u,
                          userId: n,
                          roleId: o.id,
                          channelId: s.id,
                          guildId: a.id,
                          onGetRolesClicked: () => {
                              (0, J.c0)(a.id);
                          },
                          onOpenProfile: () => {
                              (0, D.openUserProfileModal)({
                                  userId: n,
                                  messageId: l,
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
            (0, t.jsx)(m.m, {
                text: en.intl.string(en.t.Wpsnar),
                children: (0, t.jsxs)("div", {
                    ref: x,
                    className: el.qS,
                    ...e,
                    children: [
                        (0, t.jsx)(q.A, { className: el.f7, size: 16, color: o.colorString }),
                        (0, t.jsx)(_.E, {
                            variant: "text-xs/bold",
                            color: "text-strong",
                            className: el.S3,
                            children: o.name,
                        }),
                    ],
                }),
            }),
    });
}
var er = l(828488),
    eo = l(807884),
    ec = l(514116);
function ed(e) {
    let { channelId: n, messageId: l } = e,
        i = (0, eo.A)(n, l)?.messageMetadata.moderationLabel;
    return null == i || "" === i ? null : (0, t.jsx)("span", { className: ec.R, children: i });
}
var eu = l(870136),
    em = l(939249),
    eh = l(506803),
    eg = l(351001),
    ex = l(297264),
    eA = l(821609),
    ev = l(964486),
    ep = l(34337),
    ej = l(448290),
    ef = l(309010),
    eN = l(828567);
let eI = function (e) {
    let { guild: n, message: l, onClose: i } = e,
        a = K.A.getChannel(ef.Ay.getChannelId(n.id));
    return ((0, ev.Ay)(() => {
        U.default.track(Q.HAw.OPEN_POPOUT, { type: "New Member Badge Popout", guild_id: n.id, channel_id: a?.id });
    }),
    null == a)
        ? null
        : (0, t.jsx)(ep.Uq, {
              className: eN.cc,
              children: (0, t.jsxs)("div", {
                  className: eN.jC,
                  children: [
                      (0, t.jsxs)("div", {
                          className: eN.rb,
                          children: [
                              (0, t.jsx)("div", {
                                  className: eN.zc,
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
                                          className: eN.wx,
                                          children: en.intl.string(en.t["v/OYd2"]),
                                      }),
                                      (0, t.jsx)(_.E, {
                                          variant: "text-sm/normal",
                                          children: en.intl.string(en.t.Z85MlD),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                      (0, t.jsx)("div", {
                          "data-button-hoisted-classname-wrapper": !0,
                          className: eN.lI,
                          children: (0, t.jsx)(eA.$, {
                              variant: "primary",
                              size: "sm",
                              text: en.intl.format(en.t["+xsVS6"], { username: l.author.username }),
                              fullWidth: !0,
                              onClick: () => {
                                  k.Ay.trackWithMetadata(Q.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                      target_user_id: l.author.id,
                                  }),
                                      i(),
                                      (0, ej.C)(l.author, a.id);
                              },
                          }),
                      }),
                  ],
              }),
          });
};
var eC = l(125534);
function eb(e) {
    let { guild: n, message: l } = e,
        a = i.useRef(null);
    return (0, eg.HU)(n.id, l.author.id)
        ? (0, t.jsx)(d.Y, {
              targetElementRef: a,
              animation: d.Y.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: i } = e;
                  return (0, t.jsx)(eI, { guild: n, message: l, onClose: i });
              },
              children: (e) => {
                  let { onClick: n } = e;
                  return (0, t.jsx)(em.D, {
                      onClick: n,
                      tag: "span",
                      innerRef: a,
                      children: (0, t.jsx)(m.m, {
                          text: en.intl.string(en.t["v/OYd2"]),
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
var ey = l(9842),
    eE = l(657048),
    eM = l(440971),
    e_ = l(689255);
function eR() {
    return (0, t.jsx)(m.m, {
        text: en.intl.string(en.t["RO/KYj"]),
        children: (0, t.jsx)("div", {
            className: e_.q,
            children: (0, t.jsx)(eM.R, { color: "currentColor", size: "custom", width: "1rem", height: "1rem" }),
        }),
    });
}
var eS = l(854627),
    eT = l(342296),
    ew = l(742023),
    eO = l(71393),
    eG = l(576705),
    ek = l(486020),
    eP = l(625494),
    eD = l(763754),
    eL = l(635071),
    eV = l(860227),
    eU = l(606049),
    eH = l(3026),
    e$ = l(305866),
    ez = l(104510),
    eB = l(376304),
    eF = l(63152),
    eY = l(98318),
    eK = l(976860),
    eW = l(746080),
    eq = l(433211);
let eX = function (e) {
    let { roleIcon: n, guild: l } = e,
        { name: i } = n;
    (0, ev.Ay)(() => {
        U.default.track(Q.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: l.id,
            ...(0, k.dI)(K.A.getChannel(ef.Ay.getChannelId(l.id))),
        });
    });
    let a = (0, c.bG)([W.A], () => (null != n.roleId ? W.A.getRole(l.id, n.roleId) : void 0)),
        s = (0, eY.U)(a),
        r = s
            ? en.intl.formatToPlainString(en.t.t0928V, { name: i })
            : en.intl.formatToPlainString(en.t.UDDkGy, { name: i }),
        o = { ...n, src: null == n.src ? n.src : (0, eB.ux)(n.src, 40), size: 40 },
        d = s
            ? function () {
                  (0, eK.pX)(Q.BVt.CHANNEL(l.id, eW.VV.ROLE_SUBSCRIPTIONS));
              }
            : function () {
                  (0, eF.K4)({ guildId: l.id, location: { section: Q.JJy.ROLE_ICON_POPOUT } });
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
                        text: en.intl.string(en.t["H930+H"]),
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
var eJ = l(812299),
    eZ = l(109054),
    eQ = l(334211);
function e0(e) {
    let {
        avatarSrc: n,
        avatarDecorationSrc: l,
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
                src: n,
                "aria-hidden": !0,
                className: s()(h, eQ.my, { [eQ.oE]: i, [eQ.vk]: null != a, [eQ.uU]: m }),
                alt: " ",
            }),
            null == l || i ? null : (0, t.jsx)("img", { className: eQ.M, src: l, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let e1 = i.memo(function (e) {
    let {
            message: n,
            author: l,
            channel: a,
            guildId: s,
            compact: r = !1,
            roleIconProps: o,
            showUsernamePopout: u,
            renderPopout: m,
            onClickUsername: h,
            onContextMenu: g,
            displayCompactAvatars: x = !1,
            onPopoutRequestClose: A,
            preview: v,
            subscribeToGroupId: f,
            hideGuildTag: N,
        } = e,
        I = (0, eD.Ay)(n, l),
        C = i.useMemo(
            () => (0, eJ.y)({ message: n, channel: a, user: n?.author, compact: r, isRepliedMessage: !1 }),
            [n, a, r],
        ),
        b = i.useRef(null),
        y = (0, c.bG)([eO.A], () => eO.A.getGuild(s)),
        E = i.useMemo(() => e7(r, x, o, y), [r, x, o, y]),
        M = i.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === E && null != y
                      ? (0, t.jsx)(
                            d.Y,
                            {
                                targetElementRef: b,
                                animation: d.Y.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, t.jsx)(eX, { roleIcon: o, guild: y }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: n } = e;
                                    return (0, t.jsx)(eE.A, { ref: b, ...o, className: eQ.UT, onClick: n });
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
                    (e.push((0, t.jsx)(eb, { guild: y, message: n }, "new-member")),
                    _ && e.push((0, t.jsx)(j.A, { guild: y, message: n }, "voice-channel"))),
                null != a &&
                    null != y &&
                    e.push(
                        (0, t.jsx)(es, { guild: y, channel: a, userId: n.author.id, messageId: n.id }, "connections"),
                    ),
                R && null != a && e.push((0, t.jsx)(ed, { channelId: a.id, messageId: n.id }, "moderation-label")),
                e
            );
        }, [n, a, M, y, _, R]);
    return null == I
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(eL.A, {
                      message: n,
                      channel: a,
                      author: I,
                      compact: r,
                      roleIcon: o,
                      showPopout: u,
                      renderPopout: m,
                      onClick: h,
                      onContextMenu: g,
                      onPopoutRequestClose: A,
                      decorations: { [eL.w.SYSTEM_TAG]: C, [eL.w.BADGES]: S },
                      previewGuildId: s,
                      preview: v,
                      subscribeToGroupId: f,
                      hideGuildTag: N,
                  }),
                  r &&
                      (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)("i", { className: eQ.me, children: ":" }), " "],
                      }),
              ],
          });
});
function e2(e, n, l) {
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
                renderPopout: n,
                onClick: u,
                onContextMenu: o,
                onPopoutRequestClose: m,
                decorations: l,
                preview: !0,
            }),
            r && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("i", { className: eQ.me, children: ":" }), " "] }),
        ],
    });
}
function e3(e) {
    let {
            message: n,
            avatar: l,
            username: i,
            usernameSpanId: a,
            usernameClassName: r,
            compact: c,
            showTimestamp: d,
            showTimestampOnHover: m,
            ariaLabelledBy: h,
            ariaDescribedBy: g,
            className: x,
            messageClassname: A,
            badges: p,
        } = e,
        j = (0, o.Lt)(n.flags, Q.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? n.applicationId : null,
        f = (0, v.h)(j);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            !c && l,
            (0, t.jsxs)(u.H, {
                className: s()(eQ.wx, x),
                "aria-describedby": g,
                "aria-labelledby": h,
                children: [
                    d &&
                        c &&
                        (0, t.jsx)(eU.A, {
                            id: (0, eV.xl)(n),
                            compact: !0,
                            timestamp: n.timestamp,
                            isVisibleOnlyOnHover: m,
                            className: A,
                            isInline: !1,
                            application: f,
                        }),
                    c && l,
                    (0, t.jsx)("span", { id: a, className: r, children: i }),
                    d &&
                        !c &&
                        (0, t.jsx)(eU.A, { id: (0, eV.xl)(n), timestamp: n.timestamp, className: A, application: f }),
                    null != p && p.length > 0 ? (0, t.jsx)("div", { className: eQ.cV, children: p }) : null,
                ],
            }),
        ],
    });
}
function e7(e, n, l, t) {
    return (!e || n) && null != l && null != t ? 1 : (!e || n) && null != l ? 2 : 0;
}
let e6 = i.memo(function (e) {
    let {
            message: n,
            repliedMessage: l,
            compact: a = !1,
            renderPopout: d,
            showTimestampOnHover: u,
            roleIcon: v,
            subscribeToGroupId: p,
            hideTimestamp: j,
            hideGuildTag: f,
            className: N,
            channel: I,
            preview: C,
        } = e,
        b = i.useMemo(() => (null != d ? (e) => d(e, n) : void 0), [d, n]),
        [, y] = (0, eu.Ay)(n.author.id, e.guildId),
        E = (0, c.bG)([eG.A, eO.A], () => {
            let l = eO.A.getGuild(e.guildId);
            return null != n.author && null != l && eG.A.canManageUser(Q.xBc.MODERATE_MEMBERS, n.author, l);
        }, [n.author, e.guildId]),
        M = y && E,
        _ = (function (e) {
            let {
                    props: n,
                    guildId: l,
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
                    showAvatarPopout: f,
                } = n,
                N = i.useRef(null),
                [I, C] = i.useState(!1),
                { analyticsLocations: b } = (0, A.Ay)(x.A.AVATAR),
                y = (0, c.bG)([ew.Ay], () => n.displayCompactAvatars ?? ew.Ay.displayCompactAvatars),
                E = (0, eZ.A)(d),
                M = m ? 32 : 80,
                {
                    avatarSrc: _,
                    avatarDecorationSrc: R,
                    isAnimating: S,
                    eventHandlers: T,
                } = (0, eS.A)({
                    userId: d.author.id,
                    guildId: l,
                    size: M,
                    animateOnHover: null != h ? !I : !g,
                    avatarDecorationOverride: n.avatarDecorationOverride,
                    avatarOverride: n.avatarOverride,
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
                return null != a && null != f
                    ? (0, t.jsx)(A.f5, {
                          value: b,
                          children: (0, t.jsx)(eT.A, {
                              targetElementRef: N,
                              user: d.author,
                              guildId: l,
                              channelId: d.channel_id,
                              messageId: d.id,
                              shouldShow: f,
                              shouldPreload: E,
                              renderPopout: a,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: O,
                              onRequestClose: j,
                              clickTrap: f,
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
                                      avatarImgRef: N,
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
            () => (0, eJ.k)({ message: n, channel: I, user: n?.author, compact: a, isRepliedMessage: !1 }),
            [n, I, a],
        ),
        T = (0, c.bG)([eO.A], () => e7(a, R, v, eO.A.getGuild(e.guildId)), [a, R, v, e.guildId]),
        w = i.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(n.flags, Q.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, t.jsx)(eR, {}, "suppress-notifications")),
                e
            );
        }, [n]),
        O = (0, eV.d$)(n, p),
        G = (0, eV.xl)(n),
        k = j ? `${O}` : `${O} ${G}`,
        P = l?.state === ey.a.LOADED ? (0, eV.nS)(n) : void 0;
    return (0, t.jsx)(e3, {
        message: n,
        avatar: _,
        username: (0, t.jsxs)(t.Fragment, {
            children: [
                M &&
                    (0, t.jsx)(m.m, {
                        text: en.intl.string(en.t["AeYyL+"]),
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(h.g, { size: "xxs", color: "currentColor", className: a ? eQ.EI : eQ.bu }),
                                (0, t.jsx)(g.A, { children: en.intl.string(en.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, t.jsx)(e1, {
                    ...e,
                    message: n,
                    channel: I,
                    compact: a,
                    roleIconProps: v,
                    renderPopout: b,
                    preview: C,
                    subscribeToGroupId: p,
                    hideGuildTag: f,
                }),
            ],
        }),
        usernameSpanId: (0, eV.d$)(n, p),
        usernameClassName: s()(eQ.TK, { [eQ.yF]: 0 !== T, [eQ.hB]: null != S || w.length > 0 }),
        compact: a,
        showTimestamp: !0 !== j,
        showTimestampOnHover: u,
        ariaLabelledBy: k,
        ariaDescribedBy: P,
        className: N,
        badges: w,
    });
});
