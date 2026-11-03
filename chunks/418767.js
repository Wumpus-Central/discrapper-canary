(n.d(l, { ix: () => e1, Ay: () => e2, tO: () => e0 }), n(321073), n(938796));
var i = n(477900),
    t = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(607399),
    o = n(665260),
    c = n(17928),
    d = n(265872),
    u = n(707554),
    h = n(866665),
    m = n(60270),
    g = n(140735),
    x = n(793574),
    A = n(688810),
    j = n(429913),
    p = n(593643),
    v = n(61230),
    N = n(284009),
    f = n.n(N),
    I = n(435558),
    b = n.n(I),
    C = n(661531),
    y = n(462887),
    E = n(862482),
    _ = n(933832),
    M = n(834730),
    R = n(602853),
    S = n(778712),
    T = n(66834),
    w = n(730134),
    O = n(736653),
    k = n(573648),
    G = n(666860),
    P = n(709066),
    D = n(402860),
    L = n(889227),
    V = n(696451),
    U = n(174459),
    $ = n(370480),
    H = n(73153);
let z = new Map();
class B extends c.Ay.Store {
    static displayName = "GuildRoleConnectionEligibilityStore";
    getGuildRoleConnectionEligibility(e) {
        return null != e ? z.get(e) : void 0;
    }
}
let F = new B(H.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { roleId: l, roleConnectionEligibility: n } = e;
        z.set(l, n);
    },
});
var Y = n(702841),
    K = n(734057),
    W = n(317525),
    q = n(63104),
    J = n(355971),
    X = n(293260),
    Z = n(783419),
    Q = n(652215),
    ee = n(518477),
    el = n(105292),
    en = n(156934);
function ei(e) {
    let l,
        { connectionType: n, connectionMetadataField: t, operator: s, value: a, description: r } = e;
    if (null != r)
        switch (s) {
            case Z.so.LESS_THAN:
                l = el.intl.format(el.t["2p7dA3"], { description: r, count: Math.max(0, Number(a) - 1) });
                break;
            case Z.so.GREATER_THAN:
                l = el.intl.format(el.t["2p7dA3"], { description: r, count: Math.max(0, Number(a) + 1) });
                break;
            default:
                l = r;
        }
    else l = (0, $.RP)({ connectionType: n, connectionMetadataField: t, operator: s, value: a });
    return null == l
        ? null
        : (0, i.jsxs)("div", {
              className: en.wL,
              children: [
                  (0, i.jsx)(_.CheckmarkLargeIcon, { size: "md", color: "currentColor", className: en.D$ }),
                  (0, i.jsx)(M.E, { variant: "body-xs/medium", color: "text-strong", children: l }),
              ],
          });
}
function et(e) {
    let { eligibilityStates: l } = e,
        n = (0, O.Ay)(),
        t = (0, R.r)(C.A.unsafe_rawColors.GREEN_330).hex(),
        s = b().groupBy(l, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, i.jsx)(i.Fragment, {
        children: Object.keys(s).map((e) => {
            let l,
                a = s[e],
                r = a.filter((e) => null != e.operator),
                o = a.find((e) => null != e.application),
                c = k.A.get(e),
                d = o?.application,
                u = d?.bot != null ? new L.A(d.bot) : null;
            return (
                $.iC.includes(d?.id ?? "")
                    ? (l = (0, i.jsx)(J.A, { className: en.AO, color: t, size: 16 }))
                    : null != u && (l = (0, i.jsx)(P.A, { className: en.AO, verified: u.isVerifiedBot() })),
                (0, i.jsxs)(
                    "div",
                    {
                        className: en.sV,
                        children: [
                            (0, i.jsxs)("div", {
                                className: en.ei,
                                children: [
                                    null != c
                                        ? (0, i.jsx)("img", {
                                              src: (0, y.M)(n) ? c.icon.darkSVG : c.icon.lightSVG,
                                              alt: "",
                                              className: en.j$,
                                          })
                                        : null,
                                    null != u
                                        ? (0, i.jsx)(w.A, { user: u, size: S._3.SIZE_20, className: en.j$ })
                                        : null,
                                    (0, i.jsx)(M.E, {
                                        variant: "body-sm/medium",
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
                                    operator: t,
                                    value: s,
                                    description: a,
                                } = e;
                                return (
                                    f()(null != n, "connectionMetadataField is null"),
                                    f()(null != t, "operator is null"),
                                    f()(null != s, "value is null"),
                                    (0, i.jsx)(
                                        ei,
                                        {
                                            connectionType: l,
                                            connectionMetadataField: n,
                                            operator: t,
                                            value: s,
                                            description: a,
                                        },
                                        `${l}:${n}:${t}:${s}`,
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
function es(e) {
    let l,
        {
            onGetRolesClicked: n,
            onOpenProfile: s,
            eligibilityStates: a,
            userId: r,
            roleId: o,
            channelId: d,
            guildId: u,
        } = e;
    t.useEffect(() => {
        U.default.track(Q.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: r,
            role_id: o,
            ...(0, G.Ou)(d),
            ...(0, G.H$)(u),
        });
    }, [r, o, d, u]);
    let h = (0, c.bG)([V.Ay], () => V.Ay.getSelfMember(u)?.roles.includes(o) ?? !1, [u, o]);
    return (
        (l =
            1 === a.length && 1 === a[0].length
                ? el.intl.string(el.t.jDym4E)
                : 1 === a.length
                  ? el.intl.format(el.t["0eBj3x"], {})
                  : el.intl.format(el.t.D7uftB, {})),
        (0, i.jsxs)("div", {
            className: en.SW,
            children: [
                (0, i.jsx)("div", {
                    className: en.oT,
                    children: (0, i.jsx)(M.E, {
                        variant: "body-xs/normal",
                        color: "text-default",
                        className: en.Io,
                        children: l,
                    }),
                }),
                (0, i.jsx)("div", { className: en.jf, children: (0, i.jsx)(et, { eligibilityStates: a.flat() }) }),
                (0, i.jsxs)("div", {
                    className: en.UD,
                    children: [
                        h
                            ? null
                            : (0, i.jsx)(E.$n, { className: en.wz, onClick: n, children: el.intl.string(el.t.T1t1WV) }),
                        (0, i.jsx)(E.$n, {
                            className: en.lQ,
                            color: E.$n.Colors.PRIMARY,
                            onClick: s,
                            children: el.intl.string(el.t.hgKDnG),
                        }),
                    ],
                }),
            ],
        })
    );
}
function ea(e) {
    let { userId: l, messageId: n, guild: s, channel: a } = e,
        { analyticsLocations: r } = (0, A.Ay)(),
        o = (function (e, l) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                t = (0, Y.bG)([V.Ay], () => (null != e ? V.Ay.getMember(e.id, l) : null), [e, l]),
                s = (0, Y.bG)([K.A], () => K.A.getChannel(n), [n]),
                a = (0, Y.bG)([K.A], () => K.A.getChannel(s?.parent_id), [s]),
                r = (0, Y.bG)([W.A], () => (null != e ? W.A.getSortedRoles(e.id) : void 0));
            return null == e || null == r || null == t
                ? null
                : (0, $._g)({
                      guild: e,
                      sortedGuildRoles: r,
                      guildMember: t,
                      channel: null != s && s.isThread() && null != a ? a : s,
                      onlyChannelConnectionRoles: i,
                  });
        })(s, l, a.id, !0),
        u = (0, c.bG)([F], () => F.getGuildRoleConnectionEligibility(o?.id)),
        [m, g] = t.useState(null == u),
        x = t.useRef(null);
    if (null == o) return null;
    async function j() {
        (f()(null != o, "visibleConnectionsRole is null"),
            m && null == u && (await T.A.fetchGuildRoleConnectionsEligibility(s.id, o.id), g(!1)));
    }
    return (0, i.jsx)(d.Q, {
        targetElementRef: x,
        onRequestOpen: j,
        renderPopout: function () {
            return Promise.resolve((e) => {
                let { closePopout: t } = e;
                return null == u
                    ? null
                    : (f()(null != o, "visibleConnectionsRole is null"),
                      (0, i.jsx)(es, {
                          eligibilityStates: u,
                          userId: l,
                          roleId: o.id,
                          channelId: a.id,
                          guildId: s.id,
                          onGetRolesClicked: () => {
                              (0, X.c0)(s.id);
                          },
                          onOpenProfile: () => {
                              ((0, D.openUserProfileModal)({
                                  userId: l,
                                  messageId: n,
                                  guildId: s.id,
                                  channelId: a.id,
                                  roleId: o.id,
                                  scrollTarget: ee.bk.CONNECTIONS,
                                  sourceAnalyticsLocations: r,
                              }),
                                  t());
                          },
                      }));
            });
        },
        align: "top",
        nudgeAlignIntoViewport: !0,
        children: (e) =>
            (0, i.jsx)(h.m, {
                text: el.intl.string(el.t.Wpsnar),
                children: (0, i.jsxs)("div", {
                    ref: x,
                    className: en.qS,
                    ...e,
                    children: [
                        (0, i.jsx)(q.A, { className: en.f7, size: 16, color: o.colorString }),
                        (0, i.jsx)(M.E, {
                            variant: "body-xs/semibold",
                            color: "text-strong",
                            className: en.S3,
                            children: o.name,
                        }),
                    ],
                }),
            }),
    });
}
var er = n(870136),
    eo = n(939249),
    ec = n(506803),
    ed = n(351001),
    eu = n(305866),
    eh = n(534514),
    em = n(821609),
    eg = n(964486),
    ex = n(188645),
    eA = n(448290),
    ej = n(309010),
    ep = n(933884);
let ev = function (e) {
    let { guild: l, message: n, onClose: t } = e,
        s = K.A.getChannel(ej.Ay.getChannelId(l.id));
    return ((0, eg.Ay)(() => {
        U.default.track(Q.HAw.OPEN_POPOUT, { type: "New Member Badge Popout", guild_id: l.id, channel_id: s?.id });
    }),
    null == s)
        ? null
        : (0, i.jsx)(eu.l, {
              "aria-label": el.intl.string(el.t["v/OYd2"]),
              children: (0, i.jsx)(ex.Uq, {
                  className: ep.cc,
                  children: (0, i.jsxs)("div", {
                      className: ep.jC,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ep.rb,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: ep.zc,
                                      children: (0, i.jsx)(ec.N, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 40,
                                          height: 40,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(eh.D, {
                                              variant: "heading-sm/semibold",
                                              className: ep.wx,
                                              children: el.intl.string(el.t["v/OYd2"]),
                                          }),
                                          (0, i.jsx)(M.E, {
                                              variant: "body-sm/normal",
                                              children: el.intl.string(el.t.Z85MlD),
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: ep.lI,
                              children: (0, i.jsx)(em.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: el.intl.format(el.t["+xsVS6"], { username: n.author.username }),
                                  fullWidth: !0,
                                  autoFocus: !0,
                                  onClick: function () {
                                      null != s &&
                                          (G.Ay.trackWithMetadata(Q.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                              target_user_id: n.author.id,
                                          }),
                                          t(),
                                          (0, eA.C)(n.author, s.id));
                                  },
                              }),
                          }),
                      ],
                  }),
              }),
          });
};
var eN = n(418949);
function ef(e) {
    let { guild: l, message: n } = e,
        s = t.useRef(null);
    return (0, ed.HU)(l.id, n.author.id)
        ? (0, i.jsx)(d.Y, {
              targetElementRef: s,
              animation: d.Y.Animation.TRANSLATE,
              align: "center",
              autoInvert: !0,
              nudgeAlignIntoViewport: !0,
              position: "right",
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(ev, { guild: l, message: n, onClose: t });
              },
              children: (e) => {
                  let { onClick: l } = e;
                  return (0, i.jsx)(eo.D, {
                      onClick: l,
                      tag: "span",
                      innerRef: s,
                      children: (0, i.jsx)(h.m, {
                          text: el.intl.string(el.t["v/OYd2"]),
                          children: (0, i.jsx)("div", {
                              className: eN.C,
                              children: (0, i.jsx)(ec.N, {
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
var eI = n(32090),
    eb = n(914609),
    eC = n(9842),
    ey = n(657048),
    eE = n(440971),
    e_ = n(342868);
function eM() {
    return (0, i.jsx)(h.m, {
        text: el.intl.string(el.t["RO/KYj"]),
        children: (0, i.jsx)("div", {
            className: e_.q,
            children: (0, i.jsx)(eE.R, { color: "currentColor", size: "custom", width: "1rem", height: "1rem" }),
        }),
    });
}
var eR = n(854627),
    eS = n(342296),
    eT = n(253932),
    ew = n(71393),
    eO = n(576705),
    ek = n(486020),
    eG = n(625494),
    eP = n(763754),
    eD = n(799162),
    eL = n(860227),
    eV = n(606049),
    eU = n(3026),
    e$ = n(104510),
    eH = n(376304),
    ez = n(464120),
    eB = n(98318),
    eF = n(976860),
    eY = n(746080),
    eK = n(829136);
let eW = function (e) {
    let { roleIcon: l, guild: n } = e,
        { name: t } = l;
    (0, eg.Ay)(() => {
        U.default.track(Q.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, G.dI)(K.A.getChannel(ej.Ay.getChannelId(n.id))),
        });
    });
    let s = (0, c.bG)([W.A], () => (null != l.roleId ? W.A.getRole(n.id, l.roleId) : void 0)),
        a = (0, eB.U)(s),
        r = a
            ? el.intl.formatToPlainString(el.t.t0928V, { name: t })
            : el.intl.formatToPlainString(el.t.UDDkGy, { name: t }),
        o = { ...l, src: null == l.src ? l.src : (0, eH.ux)(l.src, 40), size: 40 },
        d = a
            ? function () {
                  (0, eF.pX)(Q.BVt.CHANNEL(n.id, eY.VV.ROLE_SUBSCRIPTIONS));
              }
            : function () {
                  (0, ez.K4)({ guildId: n.id, location: { section: Q.JJy.ROLE_ICON_POPOUT } });
              };
    return (0, i.jsx)(eu.l, {
        children: (0, i.jsx)(ex.Uq, {
            children: (0, i.jsxs)("div", {
                className: eK.jC,
                children: [
                    (0, i.jsxs)("div", {
                        className: eK.rb,
                        children: [
                            (0, i.jsx)("div", {
                                className: eK.Xq,
                                children: (0, i.jsx)(ey.A, {
                                    ...o,
                                    enableTooltip: !1,
                                    className: eK.__invalid_roleIcon,
                                    enableHeight: !1,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: eK.bM,
                                children: [
                                    (0, i.jsx)(eh.D, {
                                        variant: "heading-sm/semibold",
                                        className: eK.S3,
                                        children: (0, i.jsx)(eU.A, { children: t }),
                                    }),
                                    (0, i.jsx)(M.E, { variant: "body-sm/normal", children: r }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(em.$, {
                        size: "sm",
                        variant: "secondary",
                        text: el.intl.string(el.t["H930+H"]),
                        onClick: d,
                        icon: e$._,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
};
var eq = n(812299),
    eJ = n(109054),
    eX = n(318626);
function eZ(e) {
    let {
        avatarSrc: l,
        avatarDecorationSrc: n,
        compact: t,
        onClick: s,
        onContextMenu: r,
        onMouseDown: o,
        onMouseEnter: c,
        onMouseLeave: d,
        onKeyDown: u,
        showCommunicationDisabledStyles: h = !1,
        className: m,
        avatarImgRef: g,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", {
                ref: g,
                onClick: s,
                onContextMenu: r,
                onKeyDown: u,
                onMouseDown: o,
                onMouseEnter: c,
                onMouseLeave: d,
                src: l,
                "aria-hidden": !0,
                className: a()(m, eX.my, { [eX.oE]: t, [eX.vk]: null != s, [eX.uU]: h }),
                alt: " ",
            }),
            null == n || t ? null : (0, i.jsx)("img", { className: eX.M, src: n, alt: " ", "aria-hidden": !0 }),
        ],
    });
}
let eQ = t.memo(function (e) {
    let {
            message: l,
            author: n,
            channel: s,
            guildId: a,
            compact: r = !1,
            roleIconProps: o,
            showUsernamePopout: u,
            renderPopout: h,
            onClickUsername: m,
            onContextMenu: g,
            displayCompactAvatars: x = !1,
            onPopoutRequestClose: A,
            preview: j,
            subscribeToGroupId: N,
            hideGuildTag: f,
            disableGuildTagProfile: I,
            usernameClassName: b,
        } = e,
        C = (0, eP.Ay)(l, n),
        y = t.useMemo(
            () => (0, eq.y)({ message: l, channel: s, user: l?.author, compact: r, isRepliedMessage: !1 }),
            [l, s, r],
        ),
        E = t.useRef(null),
        _ = (0, c.bG)([ew.A], () => ew.A.getGuild(a)),
        M = t.useMemo(() => e6(r, x, o, _), [r, x, o, _]),
        R = t.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === M && null != _
                      ? (0, i.jsx)(
                            d.Y,
                            {
                                targetElementRef: E,
                                animation: d.Y.Animation.TRANSLATE,
                                align: "center",
                                autoInvert: !0,
                                nudgeAlignIntoViewport: !0,
                                position: "right",
                                renderPopout: () => (0, i.jsx)(eW, { roleIcon: o, guild: _ }),
                                clickTrap: !0,
                                children: (e) => {
                                    let { onClick: l } = e;
                                    return (0, i.jsx)(ey.A, { ref: E, ...o, className: eX.UT, onClick: l });
                                },
                            },
                            "role-icon-children",
                        )
                      : 2 === M
                        ? (0, i.jsx)(ey.A, { ...o, className: eX.UT }, "role-icon-children")
                        : null,
            [M, o, _],
        ),
        { enabled: S } = (0, p.D8)({ guildId: _?.id, location: "MessageHeader" }),
        T = (0, eI.gj)(a, l.author.id),
        w = t.useMemo(() => {
            let e = [];
            return (
                null != _ && T
                    ? e.push((0, i.jsx)(eb.A, { guildId: _.id, userId: l.author.id }, "leaderboard-trophy"))
                    : null != R && e.push(R),
                null != _ &&
                    (e.push((0, i.jsx)(ef, { guild: _, message: l }, "new-member")),
                    S && e.push((0, i.jsx)(v.A, { guild: _, message: l }, "voice-channel"))),
                null != s &&
                    null != _ &&
                    e.push(
                        (0, i.jsx)(ea, { guild: _, channel: s, userId: l.author.id, messageId: l.id }, "connections"),
                    ),
                e
            );
        }, [l, s, R, _, T, S]);
    return null == C
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(eD.A, {
                      message: l,
                      channel: s,
                      author: C,
                      compact: r,
                      roleIcon: o,
                      showPopout: u,
                      renderPopout: h,
                      onClick: m,
                      onContextMenu: g,
                      onPopoutRequestClose: A,
                      decorations: { [eD.w.SYSTEM_TAG]: y, [eD.w.BADGES]: w },
                      previewGuildId: a,
                      preview: j,
                      subscribeToGroupId: N,
                      hideGuildTag: f,
                      disableGuildTagProfile: I,
                      className: b,
                  }),
                  r &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [(0, i.jsx)("i", { className: eX.me, children: ":" }), " "],
                      }),
              ],
          });
});
function e0(e, l, n) {
    let {
        message: t,
        channel: s,
        author: a,
        compact: r = !1,
        onContextMenu: o,
        showUsernamePopout: c,
        roleIcon: d,
        onClickUsername: u,
        onPopoutRequestClose: h,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eD.A, {
                message: t,
                channel: s,
                author: a,
                compact: r,
                roleIcon: d,
                showPopout: c,
                renderPopout: l,
                onClick: u,
                onContextMenu: o,
                onPopoutRequestClose: h,
                decorations: n,
                preview: !0,
            }),
            r && (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)("i", { className: eX.me, children: ":" }), " "] }),
        ],
    });
}
function e1(e) {
    let {
            message: l,
            avatar: n,
            username: t,
            usernameSpanId: s,
            usernameClassName: r,
            compact: c,
            showTimestamp: d,
            showTimestampOnHover: h,
            ariaLabelledBy: m,
            ariaDescribedBy: g,
            className: x,
            messageClassname: A,
            badges: p,
        } = e,
        v = (0, o.Lt)(l.flags, Q.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? l.applicationId : null,
        N = (0, j.h)(v);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !c && n,
            (0, i.jsxs)(u.H, {
                className: a()(eX.wx, x),
                "aria-describedby": g,
                "aria-labelledby": m,
                children: [
                    d &&
                        c &&
                        (0, i.jsx)(eV.A, {
                            id: (0, eL.xl)(l),
                            compact: !0,
                            timestamp: l.timestamp,
                            isVisibleOnlyOnHover: h,
                            className: A,
                            isInline: !1,
                            application: N,
                        }),
                    c && n,
                    (0, i.jsx)("span", { id: s, className: r, children: t }),
                    d &&
                        !c &&
                        (0, i.jsx)(eV.A, { id: (0, eL.xl)(l), timestamp: l.timestamp, className: A, application: N }),
                    null != p && p.length > 0 ? (0, i.jsx)("div", { className: eX.cV, children: p }) : null,
                ],
            }),
        ],
    });
}
function e6(e, l, n, i) {
    return (!e || l) && null != n && null != i ? 1 : (!e || l) && null != n ? 2 : 0;
}
let e2 = t.memo(function (e) {
    let {
            message: l,
            repliedMessage: n,
            compact: s = !1,
            renderPopout: d,
            showTimestampOnHover: u,
            roleIcon: j,
            subscribeToGroupId: p,
            hideTimestamp: v,
            hideGuildTag: N,
            className: f,
            channel: I,
            preview: b,
        } = e,
        C = t.useMemo(() => (null != d ? (e) => d(e, l) : void 0), [d, l]),
        [, y] = (0, er.Ay)(l.author.id, e.guildId),
        E = (0, c.bG)(
            [eO.A, ew.A],
            () => {
                let n = ew.A.getGuild(e.guildId);
                return null != l.author && null != n && eO.A.canManageUser(Q.xBc.MODERATE_MEMBERS, l.author, n);
            },
            [l.author, e.guildId],
        ),
        _ = y && E,
        M = (function (e) {
            let {
                    props: l,
                    guildId: n,
                    handleRenderPopout: s,
                    showCommunicationDisabledStyles: a = !1,
                    className: o,
                } = e,
                {
                    message: c,
                    author: d,
                    compact: u = !1,
                    subscribeToGroupId: h,
                    animate: m = !0,
                    onContextMenu: g,
                    onClickAvatar: j,
                    onPopoutRequestClose: p,
                    showAvatarPopout: v,
                } = l,
                N = t.useRef(null),
                [f, I] = t.useState(!1),
                { analyticsLocations: b } = (0, A.Ay)(x.A.AVATAR),
                C = eT.aM.useSetting(),
                y = l.displayCompactAvatars ?? C,
                E = (0, eJ.A)(c),
                _ = u ? 32 : 80,
                {
                    avatarSrc: M,
                    avatarDecorationSrc: R,
                    isAnimating: S,
                    eventHandlers: T,
                } = (0, eR.A)({
                    userId: c.author.id,
                    guildId: n,
                    size: _,
                    animateOnHover: null != h ? !f : !m,
                    avatarDecorationOverride: l.avatarDecorationOverride,
                    avatarOverride: l.avatarOverride,
                }),
                w = c.isInteractionPlaceholder(),
                O = t.useMemo(
                    () =>
                        w && null == c.author.avatar && null == d.guildMemberAvatar && c.application?.icon != null
                            ? (ek.Ay.getApplicationIconURL({
                                  id: c.application.id,
                                  icon: c.application.icon,
                                  size: _,
                                  fallbackAvatar: !1,
                              }) ?? M)
                            : null != c.webhookId && null == d.guildMemberAvatar
                              ? ek.Ay.getUserAvatarURL(
                                    {
                                        avatar: c.author.avatar,
                                        id: c.author.id,
                                        discriminator: c.author.discriminator,
                                        bot: !0,
                                    },
                                    S,
                                    _,
                                )
                              : M,
                    [
                        w,
                        c.author.avatar,
                        c.author.id,
                        c.author.discriminator,
                        c.application?.icon,
                        c.application?.id,
                        c.webhookId,
                        M,
                        _,
                        d.guildMemberAvatar,
                        S,
                    ],
                );
            if (
                (t.useEffect(() => {
                    if (null != h)
                        return (
                            eG._.subscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${h}:${c.author.id}`, I),
                            () => {
                                eG._.unsubscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${h}:${c.author.id}`, I);
                            }
                        );
                }, [c.author.id, h]),
                !u || y)
            )
                return null != s && null != v
                    ? (0, i.jsx)(A.f5, {
                          value: b,
                          children: (0, i.jsx)(eS.A, {
                              targetElementRef: N,
                              user: c.author,
                              guildId: n,
                              channelId: c.channel_id,
                              messageId: c.id,
                              shouldShow: v,
                              shouldPreload: E,
                              renderPopout: s,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: O,
                              onRequestClose: p,
                              clickTrap: v,
                              children: (e) =>
                                  eZ({
                                      ...T,
                                      avatarSrc: O,
                                      avatarDecorationSrc: R,
                                      compact: u,
                                      onClick: j,
                                      onContextMenu: g,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                      showCommunicationDisabledStyles: a,
                                      className: o,
                                      avatarImgRef: N,
                                  }),
                          }),
                      })
                    : (0, i.jsx)(A.f5, {
                          value: b,
                          children: eZ({
                              ...T,
                              avatarSrc: O,
                              avatarDecorationSrc: R,
                              compact: u,
                              onClick: j,
                              onContextMenu: g,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: a,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: C, showCommunicationDisabledStyles: _ }),
        R = eT.aM.useSetting(),
        S = e.displayCompactAvatars ?? R,
        T = t.useMemo(
            () => (0, eq.k)({ message: l, channel: I, user: l?.author, compact: s, isRepliedMessage: !1 }),
            [l, I, s],
        ),
        w = (0, c.bG)([ew.A], () => e6(s, S, j, ew.A.getGuild(e.guildId)), [s, S, j, e.guildId]),
        O = (0, eI.gj)(e.guildId, l.author.id),
        k = t.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(l.flags, Q.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, i.jsx)(eM, {}, "suppress-notifications")),
                e
            );
        }, [l]),
        G = (0, eL.d$)(l, p),
        P = (0, eL.xl)(l),
        D = v ? `${G}` : `${G} ${P}`,
        L = n?.state === eC.a.LOADED ? (0, eL.nS)(l) : void 0;
    return (0, i.jsx)(e1, {
        message: l,
        avatar: M,
        username: (0, i.jsxs)(i.Fragment, {
            children: [
                _ &&
                    (0, i.jsx)(h.m, {
                        text: el.intl.string(el.t["AeYyL+"]),
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(m.g, { size: "xxs", color: "currentColor", className: s ? eX.EI : eX.bu }),
                                (0, i.jsx)(g.A, { children: el.intl.string(el.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, i.jsx)(eQ, {
                    ...e,
                    message: l,
                    channel: I,
                    compact: s,
                    roleIconProps: j,
                    renderPopout: C,
                    preview: b,
                    subscribeToGroupId: p,
                    hideGuildTag: N,
                }),
            ],
        }),
        usernameSpanId: (0, eL.d$)(l, p),
        usernameClassName: a()(eX.TK, { [eX.yF]: 0 !== w || O, [eX.hB]: null != T || k.length > 0 }),
        compact: s,
        showTimestamp: !0 !== v,
        showTimestampOnHover: u,
        ariaLabelledBy: D,
        ariaDescribedBy: L,
        className: f,
        badges: k,
    });
});
