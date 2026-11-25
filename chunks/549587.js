(n.d(l, { ix: () => e1, Ay: () => e6, tO: () => e0 }), n(321073), n(938796));
var i = n(477900),
    t = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(607399),
    o = n(665260),
    d = n(855986),
    u = n(265872),
    c = n(707554),
    m = n(866665),
    h = n(60270),
    g = n(140735),
    x = n(793574),
    p = n(688810),
    A = n(429913),
    j = n(593643),
    v = n(802341),
    I = n(284009),
    N = n.n(I),
    f = n(435558),
    b = n.n(f),
    C = n(646514),
    y = n(462887),
    E = n(862482),
    _ = n(933832),
    M = n(834730),
    R = n(602853),
    T = n(778712),
    w = n(778858),
    S = n(730134),
    O = n(736653),
    P = n(573648),
    k = n(149468),
    G = n(709066),
    D = n(100663),
    L = n(619019),
    U = n(696451),
    $ = n(129230),
    V = n(370480),
    H = n(73153);
let B = new Map();
class F extends d.Ay.Store {
    static displayName = "GuildRoleConnectionEligibilityStore";
    getGuildRoleConnectionEligibility(e) {
        return null != e ? B.get(e) : void 0;
    }
}
let z = new F(H.h, {
    GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS: function (e) {
        let { roleId: l, roleConnectionEligibility: n } = e;
        B.set(l, n);
    },
});
var Y = n(164636),
    K = n(734057),
    W = n(317525),
    q = n(63104),
    Z = n(355971),
    X = n(293260),
    J = n(783419),
    Q = n(652215),
    ee = n(518477),
    el = n(792996),
    en = n(156934);
function ei(e) {
    let l,
        { connectionType: n, connectionMetadataField: t, operator: a, value: s, description: r } = e;
    if (null != r)
        switch (a) {
            case J.so.LESS_THAN:
                l = el.intl.format(el.t["2p7dA3"], { description: r, count: Math.max(0, Number(s) - 1) });
                break;
            case J.so.GREATER_THAN:
                l = el.intl.format(el.t["2p7dA3"], { description: r, count: Math.max(0, Number(s) + 1) });
                break;
            default:
                l = r;
        }
    else l = (0, V.RP)({ connectionType: n, connectionMetadataField: t, operator: a, value: s });
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
        a = b().groupBy(l, (e) => `${e.connection_type}${null != e.application_id ? `:${e.application_id}` : ""}`);
    return (0, i.jsx)(i.Fragment, {
        children: Object.keys(a).map((e) => {
            let l,
                s = a[e],
                r = s.filter((e) => null != e.operator),
                o = s.find((e) => null != e.application),
                d = P.A.get(e),
                u = o?.application,
                c = u?.bot != null ? new L.A(u.bot) : null;
            return (
                V.iC.includes(u?.id ?? "")
                    ? (l = (0, i.jsx)(Z.A, { className: en.AO, color: t, size: 16 }))
                    : null != c && (l = (0, i.jsx)(G.A, { className: en.AO, verified: c.isVerifiedBot() })),
                (0, i.jsxs)(
                    "div",
                    {
                        className: en.sV,
                        children: [
                            (0, i.jsxs)("div", {
                                className: en.ei,
                                children: [
                                    null != d
                                        ? (0, i.jsx)("img", {
                                              src: (0, y.M)(n) ? d.icon.darkSVG : d.icon.lightSVG,
                                              alt: "",
                                              className: en.j$,
                                          })
                                        : null,
                                    null != c
                                        ? (0, i.jsx)(S.A, { user: c, size: T._3.SIZE_20, className: en.j$ })
                                        : null,
                                    (0, i.jsx)(M.E, {
                                        variant: "body-sm/medium",
                                        color: "interactive-text-active",
                                        children: d?.name ?? u?.name,
                                    }),
                                    l,
                                ],
                            }),
                            r.map((e) => {
                                let {
                                    connection_type: l,
                                    connection_metadata_field: n,
                                    operator: t,
                                    value: a,
                                    description: s,
                                } = e;
                                return (
                                    N()(null != n, "connectionMetadataField is null"),
                                    N()(null != t, "operator is null"),
                                    N()(null != a, "value is null"),
                                    (0, i.jsx)(
                                        ei,
                                        {
                                            connectionType: l,
                                            connectionMetadataField: n,
                                            operator: t,
                                            value: a,
                                            description: s,
                                        },
                                        `${l}:${n}:${t}:${a}`,
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
            channelId: u,
            guildId: c,
        } = e;
    t.useEffect(() => {
        $.default.track(Q.HAw.PASSPORT_ROLE_POPOUT_VIEWED, {
            other_user_id: r,
            role_id: o,
            ...(0, k.Ou)(u),
            ...(0, k.H$)(c),
        });
    }, [r, o, u, c]);
    let m = (0, d.bG)([U.Ay], () => U.Ay.getSelfMember(c)?.roles.includes(o) ?? !1, [c, o]);
    return (
        (l =
            1 === s.length && 1 === s[0].length
                ? el.intl.string(el.t.jDym4E)
                : 1 === s.length
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
                (0, i.jsx)("div", { className: en.jf, children: (0, i.jsx)(et, { eligibilityStates: s.flat() }) }),
                (0, i.jsxs)("div", {
                    className: en.UD,
                    children: [
                        m
                            ? null
                            : (0, i.jsx)(E.$n, { className: en.wz, onClick: n, children: el.intl.string(el.t.T1t1WV) }),
                        (0, i.jsx)(E.$n, {
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
        { analyticsLocations: r } = (0, p.Ay)(),
        o = (function (e, l) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                t = (0, Y.bG)([U.Ay], () => (null != e ? U.Ay.getMember(e.id, l) : null), [e, l]),
                a = (0, Y.bG)([K.A], () => K.A.getChannel(n), [n]),
                s = (0, Y.bG)([K.A], () => K.A.getChannel(a?.parent_id), [a]),
                r = (0, Y.bG)([W.A], () => (null != e ? W.A.getSortedRoles(e.id) : void 0));
            return null == e || null == r || null == t
                ? null
                : (0, V._g)({
                      guild: e,
                      sortedGuildRoles: r,
                      guildMember: t,
                      channel: null != a && a.isThread() && null != s ? s : a,
                      onlyChannelConnectionRoles: i,
                  });
        })(a, l, s.id, !0),
        c = (0, d.bG)([z], () => z.getGuildRoleConnectionEligibility(o?.id)),
        [h, g] = t.useState(null == c),
        x = t.useRef(null);
    return null == o
        ? null
        : (0, i.jsx)(u.Q, {
              targetElementRef: x,
              onRequestOpen: async function () {
                  (N()(null != o, "visibleConnectionsRole is null"),
                      h && null == c && (await w.A.fetchGuildRoleConnectionsEligibility(a.id, o.id), g(!1)));
              },
              renderPopout: function () {
                  return Promise.resolve((e) => {
                      let { closePopout: t } = e;
                      return null == c
                          ? null
                          : (N()(null != o, "visibleConnectionsRole is null"),
                            (0, i.jsx)(ea, {
                                eligibilityStates: c,
                                userId: l,
                                roleId: o.id,
                                channelId: s.id,
                                guildId: a.id,
                                onGetRolesClicked: () => {
                                    (0, X.c0)(a.id);
                                },
                                onOpenProfile: () => {
                                    ((0, D.openUserProfileModal)({
                                        userId: l,
                                        messageId: n,
                                        guildId: a.id,
                                        channelId: s.id,
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
                  (0, i.jsx)(m.m, {
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
    ed = n(506803),
    eu = n(351001),
    ec = n(305866),
    em = n(534514),
    eh = n(821609),
    eg = n(964486),
    ex = n(188645),
    ep = n(448290),
    eA = n(309010),
    ej = n(933884);
let ev = function (e) {
    let { guild: l, message: n, onClose: t } = e,
        a = K.A.getChannel(eA.Ay.getChannelId(l.id));
    return ((0, eg.Ay)(() => {
        $.default.track(Q.HAw.OPEN_POPOUT, { type: "New Member Badge Popout", guild_id: l.id, channel_id: a?.id });
    }),
    null == a)
        ? null
        : (0, i.jsx)(ec.l, {
              "aria-label": el.intl.string(el.t["v/OYd2"]),
              children: (0, i.jsx)(ex.Uq, {
                  className: ej.cc,
                  children: (0, i.jsxs)("div", {
                      className: ej.jC,
                      children: [
                          (0, i.jsxs)("div", {
                              className: ej.rb,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: ej.zc,
                                      children: (0, i.jsx)(ed.NewUserIcon, {
                                          size: "custom",
                                          color: "currentColor",
                                          width: 40,
                                          height: 40,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      children: [
                                          (0, i.jsx)(em.D, {
                                              variant: "heading-sm/semibold",
                                              className: ej.wx,
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
                              className: ej.lI,
                              children: (0, i.jsx)(eh.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: el.intl.format(el.t["+xsVS6"], { username: n.author.username }),
                                  fullWidth: !0,
                                  autoFocus: !0,
                                  onClick: function () {
                                      null != a &&
                                          (k.Ay.trackWithMetadata(Q.HAw.NEW_MEMBER_MENTION_CTA_CLICKED, {
                                              target_user_id: n.author.id,
                                          }),
                                          t(),
                                          (0, ep.C)(n.author, a.id));
                                  },
                              }),
                          }),
                      ],
                  }),
              }),
          });
};
var eI = n(418949);
function eN(e) {
    let { guild: l, message: n } = e,
        a = t.useRef(null);
    return (0, eu.HU)(l.id, n.author.id)
        ? (0, i.jsx)(u.Y, {
              targetElementRef: a,
              animation: u.Y.Animation.TRANSLATE,
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
                      innerRef: a,
                      children: (0, i.jsx)(m.m, {
                          text: el.intl.string(el.t["v/OYd2"]),
                          children: (0, i.jsx)("div", {
                              className: eI.C,
                              children: (0, i.jsx)(ed.NewUserIcon, {
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
var ef = n(32090),
    eb = n(100335),
    eC = n(9842),
    ey = n(657048),
    eE = n(440971),
    e_ = n(342868);
function eM() {
    return (0, i.jsx)(m.m, {
        text: el.intl.string(el.t["RO/KYj"]),
        children: (0, i.jsx)("div", {
            className: e_.q,
            children: (0, i.jsx)(eE.BellZIcon, {
                color: "currentColor",
                size: "custom",
                width: "1rem",
                height: "1rem",
            }),
        }),
    });
}
var eR = n(854627),
    eT = n(342296),
    ew = n(253932),
    eS = n(71393),
    eO = n(576705),
    eP = n(486020),
    ek = n(188567),
    eG = n(763754),
    eD = n(315934),
    eL = n(860227),
    eU = n(776579),
    e$ = n(3026),
    eV = n(104510),
    eH = n(376304),
    eB = n(233824),
    eF = n(98318),
    ez = n(976860),
    eY = n(746080),
    eK = n(829136);
let eW = function (e) {
    let { roleIcon: l, guild: n } = e,
        { name: t } = l;
    (0, eg.Ay)(() => {
        $.default.track(Q.HAw.OPEN_POPOUT, {
            type: "Role Icon Popout",
            guild_id: n.id,
            ...(0, k.dI)(K.A.getChannel(eA.Ay.getChannelId(n.id))),
        });
    });
    let a = (0, d.bG)([W.A], () => (null != l.roleId ? W.A.getRole(n.id, l.roleId) : void 0)),
        s = (0, eF.U)(a),
        r = s
            ? el.intl.formatToPlainString(el.t.t0928V, { name: t })
            : el.intl.formatToPlainString(el.t.UDDkGy, { name: t }),
        o = { ...l, src: null == l.src ? l.src : (0, eH.ux)(l.src, 40), size: 40 },
        u = s
            ? function () {
                  (0, ez.pX)(Q.BVt.CHANNEL(n.id, eY.VV.ROLE_SUBSCRIPTIONS));
              }
            : function () {
                  (0, eB.K4)({ guildId: n.id, location: { section: Q.JJy.ROLE_ICON_POPOUT } });
              };
    return (0, i.jsx)(ec.l, {
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
                                    (0, i.jsx)(em.D, {
                                        variant: "heading-sm/semibold",
                                        className: eK.S3,
                                        children: (0, i.jsx)(e$.A, { children: t }),
                                    }),
                                    (0, i.jsx)(M.E, { variant: "body-sm/normal", children: r }),
                                ],
                            }),
                        ],
                    }),
                    (0, i.jsx)(eh.$, {
                        size: "sm",
                        variant: "secondary",
                        text: el.intl.string(el.t["H930+H"]),
                        onClick: u,
                        icon: eV.BoostGemIcon,
                        fullWidth: !0,
                        autoFocus: !0,
                    }),
                ],
            }),
        }),
    });
};
var eq = n(812299),
    eZ = n(109054),
    eX = n(318626);
function eJ(e) {
    let {
        avatarSrc: l,
        avatarDecorationSrc: n,
        compact: t,
        onClick: a,
        onContextMenu: r,
        onMouseDown: o,
        onMouseEnter: d,
        onMouseLeave: u,
        onKeyDown: c,
        showCommunicationDisabledStyles: m = !1,
        className: h,
        avatarImgRef: g,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("img", {
                ref: g,
                onClick: a,
                onContextMenu: r,
                onKeyDown: c,
                onMouseDown: o,
                onMouseEnter: d,
                onMouseLeave: u,
                src: l,
                "aria-hidden": !0,
                className: s()(h, eX.my, { [eX.oE]: t, [eX.vk]: null != a, [eX.uU]: m }),
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
            channel: a,
            guildId: s,
            compact: r = !1,
            roleIconProps: o,
            showUsernamePopout: c,
            renderPopout: m,
            onClickUsername: h,
            onContextMenu: g,
            displayCompactAvatars: x = !1,
            onPopoutRequestClose: p,
            preview: A,
            subscribeToGroupId: I,
            hideGuildTag: N,
            disableGuildTagProfile: f,
            usernameClassName: b,
        } = e,
        C = (0, eG.Ay)(l, n),
        y = t.useMemo(
            () => (0, eq.y)({ message: l, channel: a, user: l?.author, compact: r, isRepliedMessage: !1 }),
            [l, a, r],
        ),
        E = t.useRef(null),
        _ = (0, d.bG)([eS.A], () => eS.A.getGuild(s)),
        M = t.useMemo(() => e3(r, x, o, _), [r, x, o, _]),
        R = t.useMemo(
            () =>
                null == o
                    ? null
                    : 1 === M && null != _
                      ? (0, i.jsx)(
                            u.Y,
                            {
                                targetElementRef: E,
                                animation: u.Y.Animation.TRANSLATE,
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
        { enabled: T } = (0, j.D8)({ guildId: _?.id, location: "MessageHeader" }),
        w = (0, ef.gj)(s, l.author.id),
        S = t.useMemo(() => {
            let e = [];
            return (
                null != _ && w
                    ? e.push((0, i.jsx)(eb.A, { guildId: _.id, userId: l.author.id }, "leaderboard-trophy"))
                    : null != R && e.push(R),
                null != _ &&
                    (e.push((0, i.jsx)(eN, { guild: _, message: l }, "new-member")),
                    T && e.push((0, i.jsx)(v.A, { guild: _, message: l }, "voice-channel"))),
                null != a &&
                    null != _ &&
                    e.push(
                        (0, i.jsx)(es, { guild: _, channel: a, userId: l.author.id, messageId: l.id }, "connections"),
                    ),
                e
            );
        }, [l, a, R, _, w, T]);
    return null == C
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(eD.A, {
                      message: l,
                      channel: a,
                      author: C,
                      compact: r,
                      roleIcon: o,
                      showPopout: c,
                      renderPopout: m,
                      onClick: h,
                      onContextMenu: g,
                      onPopoutRequestClose: p,
                      decorations: { [eD.w.SYSTEM_TAG]: y, [eD.w.BADGES]: S },
                      previewGuildId: s,
                      preview: A,
                      subscribeToGroupId: I,
                      hideGuildTag: N,
                      disableGuildTagProfile: f,
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
        channel: a,
        author: s,
        compact: r = !1,
        onContextMenu: o,
        showUsernamePopout: d,
        roleIcon: u,
        onClickUsername: c,
        onPopoutRequestClose: m,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(eD.A, {
                message: t,
                channel: a,
                author: s,
                compact: r,
                roleIcon: u,
                showPopout: d,
                renderPopout: l,
                onClick: c,
                onContextMenu: o,
                onPopoutRequestClose: m,
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
            usernameSpanId: a,
            usernameClassName: r,
            compact: d,
            showTimestamp: u,
            showTimestampOnHover: m,
            ariaLabelledBy: h,
            ariaDescribedBy: g,
            className: x,
            messageClassname: p,
            badges: j,
        } = e,
        v = (0, o.Lt)(l.flags, Q.pr7.SENT_BY_SOCIAL_LAYER_INTEGRATION) ? l.applicationId : null,
        I = (0, A.h)(v);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !d && n,
            (0, i.jsxs)(c.H, {
                className: s()(eX.wx, x),
                "aria-describedby": g,
                "aria-labelledby": h,
                children: [
                    u &&
                        d &&
                        (0, i.jsx)(eU.A, {
                            id: (0, eL.xl)(l),
                            compact: !0,
                            timestamp: l.timestamp,
                            isVisibleOnlyOnHover: m,
                            className: p,
                            isInline: !1,
                            application: I,
                        }),
                    d && n,
                    (0, i.jsx)("span", { id: a, className: r, children: t }),
                    u &&
                        !d &&
                        (0, i.jsx)(eU.A, { id: (0, eL.xl)(l), timestamp: l.timestamp, className: p, application: I }),
                    null != j && j.length > 0 ? (0, i.jsx)("div", { className: eX.cV, children: j }) : null,
                ],
            }),
        ],
    });
}
function e3(e, l, n, i) {
    return (!e || l) && null != n && null != i ? 1 : (!e || l) && null != n ? 2 : 0;
}
let e6 = t.memo(function (e) {
    let {
            message: l,
            repliedMessage: n,
            compact: a = !1,
            renderPopout: u,
            showTimestampOnHover: c,
            roleIcon: A,
            subscribeToGroupId: j,
            hideTimestamp: v,
            hideGuildTag: I,
            className: N,
            channel: f,
            preview: b,
        } = e,
        C = t.useMemo(() => (null != u ? (e) => u(e, l) : void 0), [u, l]),
        [, y] = (0, er.Ay)(l.author.id, e.guildId),
        E = (0, d.bG)(
            [eO.A, eS.A],
            () => {
                let n = eS.A.getGuild(e.guildId);
                return null != l.author && null != n && eO.A.canManageUser(Q.xBc.MODERATE_MEMBERS, l.author, n);
            },
            [l.author, e.guildId],
        ),
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
                    compact: c = !1,
                    subscribeToGroupId: m,
                    animate: h = !0,
                    onContextMenu: g,
                    onClickAvatar: A,
                    onPopoutRequestClose: j,
                    showAvatarPopout: v,
                } = l,
                I = t.useRef(null),
                [N, f] = t.useState(!1),
                { analyticsLocations: b } = (0, p.Ay)(x.A.AVATAR),
                C = ew.aM.useSetting(),
                y = l.displayCompactAvatars ?? C,
                E = (0, eZ.A)(d),
                _ = c ? 32 : 80,
                {
                    avatarSrc: M,
                    avatarDecorationSrc: R,
                    isAnimating: T,
                    eventHandlers: w,
                } = (0, eR.A)({
                    userId: d.author.id,
                    guildId: n,
                    size: _,
                    animateOnHover: null != m ? !N : !h,
                    avatarDecorationOverride: l.avatarDecorationOverride,
                    avatarOverride: l.avatarOverride,
                }),
                S = d.isInteractionPlaceholder(),
                O = t.useMemo(
                    () =>
                        S && null == d.author.avatar && null == u.guildMemberAvatar && d.application?.icon != null
                            ? (eP.Ay.getApplicationIconURL({
                                  id: d.application.id,
                                  icon: d.application.icon,
                                  size: _,
                                  fallbackAvatar: !1,
                              }) ?? M)
                            : null != d.webhookId && null == u.guildMemberAvatar
                              ? eP.Ay.getUserAvatarURL(
                                    {
                                        avatar: d.author.avatar,
                                        id: d.author.id,
                                        discriminator: d.author.discriminator,
                                        bot: !0,
                                    },
                                    T,
                                    _,
                                )
                              : M,
                    [
                        S,
                        d.author.avatar,
                        d.author.id,
                        d.author.discriminator,
                        d.application?.icon,
                        d.application?.id,
                        d.webhookId,
                        M,
                        _,
                        u.guildMemberAvatar,
                        T,
                    ],
                );
            if (
                (t.useEffect(() => {
                    if (null != m)
                        return (
                            ek._.subscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${m}:${d.author.id}`, f),
                            () => {
                                ek._.unsubscribeKeyed(Q.zOV.ANIMATE_CHAT_AVATAR, `${m}:${d.author.id}`, f);
                            }
                        );
                }, [d.author.id, m]),
                !c || y)
            )
                return null != a && null != v
                    ? (0, i.jsx)(p.f5, {
                          value: b,
                          children: (0, i.jsx)(eT.A, {
                              targetElementRef: I,
                              user: d.author,
                              guildId: n,
                              channelId: d.channel_id,
                              messageId: d.id,
                              shouldShow: v,
                              shouldPreload: E,
                              renderPopout: a,
                              position: r.Fr ? "window_center" : "right",
                              avatarUrl: O,
                              onRequestClose: j,
                              clickTrap: v,
                              children: (e) =>
                                  eJ({
                                      ...w,
                                      avatarSrc: O,
                                      avatarDecorationSrc: R,
                                      compact: c,
                                      onClick: A,
                                      onContextMenu: g,
                                      onMouseDown: e.onMouseDown,
                                      onKeyDown: e.onKeyDown,
                                      showCommunicationDisabledStyles: s,
                                      className: o,
                                      avatarImgRef: I,
                                  }),
                          }),
                      })
                    : (0, i.jsx)(p.f5, {
                          value: b,
                          children: eJ({
                              ...w,
                              avatarSrc: O,
                              avatarDecorationSrc: R,
                              compact: c,
                              onClick: A,
                              onContextMenu: g,
                              onMouseDown: void 0,
                              onKeyDown: void 0,
                              showCommunicationDisabledStyles: s,
                              className: o,
                          }),
                      });
        })({ props: e, guildId: e.guildId, handleRenderPopout: C, showCommunicationDisabledStyles: _ }),
        R = ew.aM.useSetting(),
        T = e.displayCompactAvatars ?? R,
        w = t.useMemo(
            () => (0, eq.k)({ message: l, channel: f, user: l?.author, compact: a, isRepliedMessage: !1 }),
            [l, f, a],
        ),
        S = (0, d.bG)([eS.A], () => e3(a, T, A, eS.A.getGuild(e.guildId)), [a, T, A, e.guildId]),
        O = (0, ef.gj)(e.guildId, l.author.id),
        P = t.useMemo(() => {
            let e = [];
            return (
                (0, o.Lt)(l.flags, Q.pr7.SUPPRESS_NOTIFICATIONS) &&
                    e.push((0, i.jsx)(eM, {}, "suppress-notifications")),
                e
            );
        }, [l]),
        k = (0, eL.d$)(l, j),
        G = (0, eL.xl)(l),
        D = v ? `${k}` : `${k} ${G}`,
        L = n?.state === eC.a.LOADED ? (0, eL.nS)(l) : void 0;
    return (0, i.jsx)(e1, {
        message: l,
        avatar: M,
        username: (0, i.jsxs)(i.Fragment, {
            children: [
                _ &&
                    (0, i.jsx)(m.m, {
                        text: el.intl.string(el.t["AeYyL+"]),
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(h.ClockWarningIcon, {
                                    size: "xxs",
                                    color: "currentColor",
                                    className: a ? eX.EI : eX.bu,
                                }),
                                (0, i.jsx)(g.A, { children: el.intl.string(el.t.AmHag5) }),
                            ],
                        }),
                    }),
                (0, i.jsx)(eQ, {
                    ...e,
                    message: l,
                    channel: f,
                    compact: a,
                    roleIconProps: A,
                    renderPopout: C,
                    preview: b,
                    subscribeToGroupId: j,
                    hideGuildTag: I,
                }),
            ],
        }),
        usernameSpanId: (0, eL.d$)(l, j),
        usernameClassName: s()(eX.TK, { [eX.yF]: 0 !== S || O, [eX.hB]: null != w || P.length > 0 }),
        compact: a,
        showTimestamp: !0 !== v,
        showTimestampOnHover: c,
        ariaLabelledBy: D,
        ariaDescribedBy: L,
        className: N,
        badges: P,
    });
});
