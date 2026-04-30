n.d(l, { ix: () => e6, Ay: () => e5, tO: () => e8 }), n(321073), n(938796);
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
    p = n(429913),
    j = n(593643),
    v = n(61230),
    N = n(284009),
    f = n.n(N),
    C = n(735438),
    I = n.n(C),
    b = n(661531),
    y = n(462887),
    E = n(862482),
    _ = n(933832),
    M = n(834730),
    R = n(602853),
    w = n(778712),
    S = n(66834),
    T = n(730134),
    G = n(736653),
    O = n(573648),
    P = n(95561),
    k = n(709066),
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
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: (e) => {
        let { roleId: l, roleConnectionEligibility: n } = e;
        z.set(l, n);
    },
});
var Y = n(702841),
    K = n(734057),
    W = n(317525),
    q = n(87e3),
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
                  (0, t.jsx)(_.A, { size: "md", color: "currentColor", className: en.D$ }),
                  (0, t.jsx)(M.E, { variant: "text-xs/medium", color: "text-strong", children: l }),
              ],
          });
}
function ei(e) {
    let { eligibilityStates: l } = e,
        n = (0, G.Ay)(),
        i = (0, R.r)(b.A.unsafe_rawColors.GREEN_330).hex(),
        a = I().groupBy(l, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, t.jsx)(t.Fragment, {
        children: Object.keys(a).map((e) => {
            let l,
                s = a[e],
                r = s.filter((e) => null != e.operator),
                o = s.find((e) => null != e.application),
                c = O.A.get(e),
                d = o?.application,
                u = d?.bot != null ? new L.A(d.bot) : null;
            return (
                H.iC.includes(d?.id ?? "")
                    ? (l = (0, t.jsx)(X.A, { className: en.AO, color: i, size: 16 }))
                    : null != u && (l = (0, t.jsx)(k.A, { className: en.AO, verified: u.isVerifiedBot() })),
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
                                        ? (0, t.jsx)(T.A, { user: u, size: w._3.SIZE_20, className: en.j$ })
                                        : null,
                                    (0, t.jsx)(M.E, {
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
            ...(0, P.Ou)(d),
            ...(0, P.H$)(u),
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
                    children: (0, t.jsx)(M.E, {
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
    async function p() {
        f()(null != o, "visibleConnectionsRole is null"),
            h && null == m && (await S.A.fetchGuildRoleConnectionsEligibility(a.id, o.id), g(!1));
    }
    return (0, t.jsx)(u.Q, {
        targetElementRef: x,
        onRequestOpen: p,
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
                        (0, t.jsx)(M.E, {
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
        i = (0, eo.A)(l, n)?.message.moderationLabel;
    return null == i || "" === i ? null : (0, t.jsx)("span", { className: ec.R, children: i });
}
var eu = n(870136),
    em = n(939249),
    eh = n(506803),
    eg = n(351001),
    ex = n(534514),
    eA = n(821609),
    ep = n(964486),
    ej = n(34337),
    ev = n(448290),
    eN = n(309010),
    ef = n(828567);
let eC = function (e) {
    let { guild: l, message: n, onClose: i } = e,
        a = K.A.getChannel(eN.A.getChannelId(l.id));
    return ((0, ep.Ay)(() => {
        U.default.track(Q.HAw.OPEN_POPOUT, { type: "New Member Badge Popout", guild_id: l.id, channel_id: a?.id });
    }),
    null == a)
        ? null
        : (0, t.jsx)(ej.Uq, {
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
                                      (0, t.jsx)(M.E, {
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
                                  P.Ay.trackWithMetadata(Q.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                      target_user_id: n.author.id,
                                  }),
                                      i(),
                                      (0, ev.C)(n.author, a.id);
                              },
                          }),
                      }),
                  ],
              }),
          });
};
var eI = n(125534);
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
                  return (0, t.jsx)(eC, { guild: l, message: n, onClose: i });
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
var ey = n(919395),
    eE = n(9842),
    e_ = n(657048),
    eM = n(440971),
    eR = n(689255);
function ew() {
    return (0, t.jsx)(d.m, {
        text: el.intl.string(el.t["RO/KYj"]),
        children: (0, t.jsx)("div", {
            className: eR.q,
            children: (0, t.jsx)(eM.R, { color: "currentColor", size: "custom", width: "1rem", height: "1rem" }),
        }),
    });
}
var eS = n(352413),
    eT = n(854627),
    eG = n(342296),
    eO = n(964404),
    eP = n(71393),
    ek = n(576705),
    eD = n(287809),
    eL = n(486020),
    eV = n(625494),
    eU = n(763754),
    eH = n(635071),
    e$ = n(860227),
    ez = n(606049),
    eB = n(780645),
    eF = n(305866),
    eY = n(104510),
    eK = n(376304),
    eW = n(509536),
    eq = n(98318),
    eX = n(976860),
    eJ = n(746080),
    eZ = n(433211);
let eQ = (e) => {
    let { roleIcon: l, guild: n } = e,
        { name: i } = l;
    (0, ep.Ay)(() => {
        U.default.track(Q.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, P.dI)(K.A.getChannel(eN.A.getChannelId(n.id))),
        });
    });
    let a = (0, c.bG)([W.A], () => (null != l.roleId ? W.A.getRole(n.id, l.roleId) : void 0)),
        s = (0, eq.U)(a),
        r = s
            ? el.intl.formatToPlainString(el.t.t0928V, { name: i })
            : el.intl.formatToPlainString(el.t.UDDkGy, { name: i }),
        o = { ...l, src: null == l.src ? l.src : (0, eK.ux)(l.src, 40), size: 40 },
        d = s
            ? () => {
                  (0, eX.pX)(Q.BVt.CHANNEL(n.id, eJ.VV.ROLE_SUBSCRIPTIONS));
              }
            : () => {
                  (0, eW.K4)({ guildId: n.id, location: { section: Q.JJy.ROLE_ICON_POPOUT } });
              };
    return (0, t.jsx)(eF.l, {
        children: (0, t.jsx)(ej.Uq, {
            children: (0, t.jsxs)("div", {
                className: eZ.jC,
                children: [
                    (0, t.jsxs)("div", {
                        className: eZ.rb,
                        children: [
                            (0, t.jsx)("div", {
                                className: eZ.Xq,
                                children: (0, t.jsx)(e_.A, {
                                    ...o,
                                    enableTooltip: !1,
                                    className: eZ.__invalid_roleIcon,
                                    enableHeight: !1,
                                }),
                            }),
                            (0, t.jsxs)("div", {
                                className: eZ.bM,
                                children: [
                                    (0, t.jsx)(ex.D, {
                                        variant: "heading-md/semibold",
                                        className: eZ.S3,
                                        children: (0, t.jsx)(eB.A, { children: i }),
                                    }),
                                    (0, t.jsx)(M.E, { variant: "text-sm/normal", children: r }),
                                ],
                            }),
                        ],
                    }),
                    (0, t.jsx)(eA.$, {
                        size: "sm",
                        variant: "secondary",
                        text: el.intl.string(el.t["H930+H"]),
                        onClick: d,
                        icon: eY._,
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
    e7 = n(334211);
function e2(e) {
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
                className: s()(h, e7.my, { [e7.oE]: i, [e7.vk]: null != a, [e7.uU]: m }),
                alt: " ",
            }),
            null == n || i ? null : (0, t.jsx)("img", { className: e7.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let e3 = i.memo(function (e) {
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
            preview: p,
            subscribeToGroupId: N,
            hideGuildTag: f,
        } = e,
        C = (0, eU.Ay)(l, n),
        I = i.useMemo(
            () => (0, e0.y)({ message: l, channel: a, user: l?.author, compact: r, isRepliedMessage: !1 }),
            [l, a, r],
        ),
        b = i.useRef(null),
        y = (0, c.bG)([eP.A], () => eP.A.getGuild(s)),
        E = i.useMemo(() => e4(r, x, o, y), [r, x, o, y]),
        _ = i.useMemo(
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
                                renderPopout: () => (0, t.jsx)(eQ, { roleIcon: o, guild: y }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: l } = e;
                                    return (0, t.jsx)(e_.A, { ref: b, ...o, className: e7.UT, onClick: l });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === E
                        ? (0, t.jsx)(e_.A, { ...o, className: e7.UT }, "role-icon-children")
                        : null,
            [E, o, y],
        ),
        { enabled: M } = (0, j.D8)({ guildId: y?.id, location: "MessageHeader" }),
        R = er.LX.useConfig({ location: "message_header" }).enabled,
        w = i.useMemo(() => {
            let e = [];
            return (
                null != _ && e.push(_),
                null != y &&
                    (e.push((0, t.jsx)(eb, { guild: y, message: l }, "new-member")),
                    M && e.push((0, t.jsx)(v.A, { guild: y, message: l }, "voice-channel"))),
                null != a &&
                    null != y &&
                    e.push(
                        (0, t.jsx)(es, { guild: y, channel: a, userId: l.author.id, messageId: l.id }, "connections"),
                    ),
                R && null != a && e.push((0, t.jsx)(ed, { channelId: a.id, messageId: l.id }, "moderation-label")),
                e
            );
        }, [l, a, _, y, M, R]);
    return null == C
        ? null
        : (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(eH.A, {
                      message: l,
                      channel: a,
                      author: C,
                      compact: r,
                      roleIcon: o,
                      showPopout: d,
                      renderPopout: m,
                      onClick: h,
                      onContextMenu: g,
                      onPopoutRequestClose: A,
                      decorations: { [eH.w.SYSTEM_TAG]: I, [eH.w.BADGES]: w },
                      previewGuildId: s,
                      preview: p,
                      subscribeToGroupId: N,
                      hideGuildTag: f,
                  }),
                  r &&
                      (0, t.jsxs)(t.Fragment, {
                          children: [(0, t.jsx)("i", { className: e7.me, children: ":" }), " "],
                      }),
              ],
          });
});
function e8(e, l, n) {
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
            (0, t.jsx)(eH.A, {
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
            r && (0, t.jsxs)(t.Fragment, { children: [(0, t.jsx)("i", { className: e7.me, children: ":" }), " "] }),
        ],
    });
}
function e6(e) {
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
            badges: j,
        } = e,
        v = (0, o.Lt)(l.flags, Q.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? l.applicationId : null,
        N = (0, p.h)(v);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            !c && n,
            (0, t.jsxs)(m.H, {
                className: s()(e7.wx, x),
                "aria-describedby": g,
                "aria-labelledby": h,
                children: [
                    d &&
                        c &&
                        (0, t.jsx)(ez.A, {
                            id: (0, e$.xl)(l),
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
                        (0, t.jsx)(ez.A, { id: (0, e$.xl)(l), timestamp: l.timestamp, className: A, application: N }),
                    null != j && j.length > 0 ? (0, t.jsx)("div", { className: e7.cV, children: j }) : null,
                ],
            }),
        ],
    });
}
function e4(e, l, n, t) {
    return (!e || l) && null != n && null != t ? 1 : (!e || l) && null != n ? 2 : 0;
}
let e5 = i.memo(function (e) {
    let {
            message: l,
            repliedMessage: n,
            compact: a = !1,
            renderPopout: u,
            showTimestampOnHover: m,
            roleIcon: p,
            subscribeToGroupId: j,
            hideTimestamp: v,
            hideGuildTag: N,
            className: f,
            channel: C,
            preview: I,
        } = e,
        b = i.useMemo(() => (null != u ? (e) => u(e, l) : void 0), [u, l]),
        [, y] = (0, eu.Ay)(l.author.id, e.guildId),
        E = (0, c.bG)([ek.A, eP.A], () => {
            let n = eP.A.getGuild(e.guildId);
            return null != l.author && null != n && ek.A.canManageUser(Q.xBc.MODERATE_MEMBERS, l.author, n);
        }, [l.author, e.guildId]),
        _ = y && E,
        M = (function (e) {
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
                    onContextMenu: p,
                    onClickAvatar: j,
                    onPopoutRequestClose: v,
                    showAvatarPopout: N,
                } = l,
                f = i.useRef(null),
                [C, I] = i.useState(!1),
                { analyticsLocations: b } = (0, A.Ay)(x.A.AVATAR),
                y = (0, c.bG)([eD.default], () => eD.default.getCurrentUser()),
                E = (0, c.bG)([eO.Ay], () => l.displayCompactAvatars ?? eO.Ay.displayCompactAvatars),
                _ = (0, e1.A)(d),
                M = m ? 32 : 80,
                { pendingAvatarDecoration: R } = (0, eS.A)({ guildId: n }),
                w = (0, ey.lw)({
                    pendingValue: d.author.id === y?.id ? R : void 0,
                    userValue: d.author?.avatarDecoration,
                    guildValue: u?.guildMemberAvatarDecoration,
                    guildId: n,
                }),
                {
                    avatarSrc: S,
                    avatarDecorationSrc: T,
                    isAnimating: G,
                    eventHandlers: O,
                } = (0, eT.A)({
                    userId: d.author.id,
                    guildId: n,
                    size: M,
                    animateOnHover: null != h ? !C : !g,
                    avatarDecorationOverride: w,
                    showPending: !0,
                }),
                P = d.isInteractionPlaceholder(),
                k = i.useMemo(
                    () =>
                        P && null == d.author.avatar && null == u.guildMemberAvatar && d.application?.icon != null
                            ? (eL.Ay.getApplicationIconURL({
                                  id: d.application.id,
                                  icon: d.application.icon,
                                  size: M,
                                  fallbackAvatar: !1,
                              }) ?? S)
                            : null != d.webhookId && null == u.guildMemberAvatar
                              ? eL.Ay.getUserAvatarURL(
                                    {
                                        avatar: d.author.avatar,
                                        id: d.author.id,
                                        discriminator: d.author.discriminator,
                                        bot: !0,
                                    },
                                    G,
                                    M,
                                )
                              : S,
                    [
                        P,
                        d.author.avatar,
                        d.author.id,
                        d.author.discriminator,
                        d.application?.icon,
                        d.application?.id,
                        d.webhookId,
                        S,
                        M,
                        u.guildMemberAvatar,
                        G,
                    ],
                );
            if (
                (i.useEffect(() => {
                    if (null != h)
                        return (
                            eV._.subscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${h}:${d.author.id}`, I),
                            () => void eV._.unsubscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${h}:${d.author.id}`, I)
                        );
                }, [d.author.id, h]),
                !m || E)
            )
                return null != a && null != N
                    ? (0, t.jsx)(A.f5, {
                          value: b,
                          children: (0, t.jsx)(eG.A, {
                              targetElementRef: f,
                              user: d.author,
                              guildId: n,
                              channelId: d.channel_id,
                              messageId: d.id,
                              shouldShow: N,
                              shouldPreload: _,
                              renderPopout: a,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: k,
                              onRequestClose: v,
                              clickTrap: N,
                              children: (e) =>
                                  e2({
                                      ...O,
                                      avatarSrc: k,
                                      avatarDecorationSrc: T,
                                      compact: m,
                                      onClick: j,
                                      onContextMenu: p,
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
                          children: e2({
                              ...O,
                              avatarSrc: k,
                              avatarDecorationSrc: T,
                              compact: m,
                              onClick: j,
                              onContextMenu: p,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: s,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: b, showCommunicationDisabledStyles: _ }),
        R = (0, c.bG)([eO.Ay], () => e.displayCompactAvatars ?? eO.Ay.displayCompactAvatars),
        w = i.useMemo(
            () => (0, e0.k)({ message: l, channel: C, user: l?.author, compact: a, isRepliedMessage: !1 }),
            [l, C, a],
        ),
        S = (0, c.bG)([eP.A], () => e4(a, R, p, eP.A.getGuild(e.guildId)), [a, R, p, e.guildId]),
        T = i.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(l.flags, Q.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, t.jsx)(ew, {}, "suppress-notifications")),
                e
            );
        }, [l]),
        G = (0, e$.d$)(l, j),
        O = (0, e$.xl)(l),
        P = v ? `${G}` : `${G} ${O}`,
        k = n?.state === eE.a.LOADED ? (0, e$.nS)(l) : void 0;
    return (0, t.jsx)(e6, {
        message: l,
        avatar: M,
        username: (0, t.jsxs)(t.Fragment, {
            children: [
                _ &&
                    (0, t.jsx)(d.m, {
                        text: el.intl.string(el.t["AeYyL+"]),
                        children: (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(h.g, { size: "xxs", color: "currentColor", className: a ? e7.EI : e7.bu }),
                                (0, t.jsx)(g.A, { children: el.intl.string(el.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, t.jsx)(e3, {
                    ...e,
                    message: l,
                    channel: C,
                    compact: a,
                    roleIconProps: p,
                    renderPopout: b,
                    preview: I,
                    subscribeToGroupId: j,
                    hideGuildTag: N,
                }),
            ],
        }),
        usernameSpanId: (0, e$.d$)(l, j),
        usernameClassName: s()(e7.TK, { [e7.yF]: 0 !== S, [e7.hB]: null != w || T.length > 0 }),
        compact: a,
        showTimestamp: !0 !== v,
        showTimestampOnHover: m,
        ariaLabelledBy: P,
        ariaDescribedBy: k,
        className: f,
        badges: T,
    });
});
