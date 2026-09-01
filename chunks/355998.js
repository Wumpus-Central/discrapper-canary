n.r(t), n.d(t, { default: () => nD });
var l = n(477900),
    i = n(582128),
    s = n(17928),
    a = n(834730),
    r = n(241326),
    o = n(228366),
    d = n(435183),
    c = n(398590),
    u = n(83257),
    h = n(361739),
    g = n(95561),
    m = n(47167),
    x = n(713654),
    p = n(503698),
    A = n.n(p),
    f = n(957485),
    C = n(97808),
    j = n(778712),
    b = n(866665),
    N = n(939249),
    v = n(285796),
    E = n(475825),
    y = n(192308),
    S = n(451394),
    T = n(821609),
    I = n(194261),
    M = n(512950),
    L = n(297264),
    R = n(404778),
    w = n(663417),
    O = n(565787),
    _ = n(157559),
    G = n(308528),
    D = n(702805),
    k = n(155718),
    P = n(443063),
    U = n(615606),
    V = n(587895),
    B = n(709066),
    H = n(63104),
    F = n(60868),
    z = n(894328),
    Z = n(468689),
    W = n(776781),
    Y = n(233993),
    J = n(110618),
    X = n(176360),
    Q = n(696451),
    q = n(317525),
    $ = n(71393),
    K = n(576705),
    ee = n(287809);
function et(e) {
    let { width: t = 18, height: n = 18, color: i = "currentColor", foreground: s, background: a, className: r } = e;
    return (0, l.jsx)("svg", {
        width: t,
        height: n,
        className: r,
        viewBox: "0 0 18 18",
        children: (0, l.jsxs)("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: [
                (0, l.jsx)("polygon", { points: "0 0 18 0 18 18 0 18" }),
                (0, l.jsx)("path", {
                    d: "M2.25,9 C2.25,10.6575 2.9325,12.15 4.02,13.23 L2.25,15 L6.75,15 L6.75,10.5 L5.07,12.18 C4.26,11.3625 3.75,10.245 3.75,9 C3.75,7.0425 5.0025,5.3775 6.75,4.7625 L6.75,3.195 C4.1625,3.8625 2.25,6.2025 2.25,9 Z M15.75,3 L11.25,3 L11.25,7.5 L12.93,5.82 C13.74,6.6375 14.25,7.755 14.25,9 C14.25,10.9575 12.9975,12.6225 11.25,13.2375 L11.25,14.805 C13.8375,14.1375 15.75,11.7975 15.75,9 C15.75,7.3425 15.0675,5.85 13.98,4.77 L15.75,3 Z",
                    fillOpacity: "0.3",
                    fill: i,
                    fillRule: "nonzero",
                    className: a,
                }),
                (0, l.jsx)("path", {
                    d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
                    fill: i,
                    className: s,
                }),
            ],
        }),
    });
}
var en = n(488926),
    el = n(495273),
    ei = n(99018),
    es = n(160844),
    ea = n(707554),
    er = n(259678),
    eo = n(847374);
n(321073);
var ed = n(435558),
    ec = n.n(ed),
    eu = n(136722),
    eh = n(113325),
    eg = n(36525),
    em = n(462887),
    ex = n(683071),
    ep = n(453318),
    eA = n(922016),
    ef = n(761508),
    eC = n(28863),
    ej = n(442433),
    eb = n(365199),
    eN = n(545442),
    ev = n(316710),
    eE = n(821589),
    ey = n(787565);
let eS = { XSMALL: ey.xsmall, SMALL: ey.small, MEDIUM: ey.medium, LARGE: ey.large };
class eT extends i.PureComponent {
    static Sizes = eS;
    static defaultProps = { size: eS.MEDIUM, disabled: !1 };
    state = { hovered: !1 };
    getMode = () => (null != this.props.srcHover ? "static" : "default");
    handleHover = (e) => {
        let { onMouseEnter: t } = this.props;
        t?.(e), this.state.hovered || this.setState({ hovered: !0 });
    };
    handleBlur = (e) => {
        let { onMouseLeave: t } = this.props;
        t?.(e), this.state.hovered && this.setState({ hovered: !1 });
    };
    render() {
        let { size: e, src: t, srcHover: n, className: i, ...s } = this.props,
            { hovered: a } = this.state,
            r = { backgroundImage: `url('${a && null != n ? n : t}')` },
            o = this.getMode();
        return (0, l.jsx)("button", {
            className: A()((0, eE.t)(ey, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...s,
        });
    }
}
var eI = n(967144),
    eM = n(258776);
function eL(e) {
    let { role: t, guild: s } = e,
        [a, r] = i.useState(!1);
    return (0, ev.x)(s, t)
        ? (0, l.jsx)(N.D, {
              onClick: function (e) {
                  r(!0),
                      (0, ej.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 316710));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: s });
                          },
                          { onClose: () => r(!1) },
                      );
              },
              className: A()(eM.X2, { [eM.ho]: a }),
              children: (0, l.jsx)(eb.MoreHorizontalIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
              }),
          })
        : null;
}
function eR(e) {
    let {
            color: t,
            id: i,
            role: s,
            guild: a,
            children: r,
            isDragging: o,
            selectedItem: d,
            onItemSelect: c,
            itemType: u,
            locked: h,
            lockTooltip: g,
            showContextMenu: m,
            theme: x,
            roleStyle: p,
            onContextMenu: A,
            "aria-label": f,
        } = e,
        C = (0, eI.X_)(a.id, s, s?.colorStrings);
    return o
        ? (0, l.jsx)("div", { className: eM.rz })
        : (0, l.jsx)(ef.V.Item, {
              className: eM.JC,
              id: i,
              selectedItem: d,
              onItemSelect: c,
              itemType: u,
              "aria-label": null != g ? `${f}, ${g}` : f,
              onContextMenu: A,
              children: (0, l.jsxs)("div", {
                  className: eM.yl,
                  children: [
                      "dot" === p
                          ? (0, l.jsx)(eN.W, {
                                color: t ?? void 0,
                                colors: C,
                                className: eM.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(eN.R, { color: t ?? null, colors: C, className: eM.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, em.M)(x) ? n(454554) : n(470474);
                          return (0, l.jsx)(b.m, { text: g, children: (0, l.jsx)(eT, { className: eM.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: eM.dD, children: r }),
                      m && null != s ? (0, l.jsx)(eL, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
var ew = n(736653),
    eO = n(775602),
    e_ = n(861197),
    eG = n(438271),
    eD = n(260509),
    ek = n(889227),
    eP = n(863036),
    eU = n(403362),
    eV = n(695184),
    eB = n(975571),
    eH = n(562153),
    eF = n(558393),
    ez = n(427262),
    eZ = n(652215),
    eW = n(375708),
    eY = n(967829),
    eJ = n.n(eY),
    eX = n(66834),
    eQ = n(60229),
    eq = n(594615);
let e$ = s.Ay.connectStores([X.A, eP.A], () => {
    let e = eP.A.getChannel();
    return {
        submitting: X.A.formState === eZ.XlH.SUBMITTING,
        onReset() {
            (0, D.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = X.A.editedPermissionIds.reduce((e, t) => {
                let n = X.A.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, D.R$)(e.id, t);
        },
    };
})(eg.A);
function eK(e) {
    let { overwrite: t } = e,
        n = (0, s.bG)([X.A], () => X.A.channel),
        i = (0, s.bG)([$.A], () => (null != n ? $.A.getGuild(n.getGuildId()) : null)),
        a = (0, s.bG)([q.A], () => (null != i && null != t && t.type === k.r2.ROLE ? q.A.getRole(i.id, t.id) : void 0)),
        r = (0, U.q)(n),
        o = (0, P.HV)(n),
        d = null != t && o === t.id ? r : null;
    if (null == n || null == i || null == t) return null;
    let { guild_id: c, id: u } = n;
    function h() {
        if (null == $.A.getGuild(c)) return "";
        let e = t.type === k.r2.MEMBER ? ee.default.getUser(t.id) : void 0,
            n = e?.username ?? "";
        return null != a ? a.name : n;
    }
    function g(e, l) {
        if (null == n) return;
        if ("boolean" == typeof l) throw Error("Unexpected boolean action");
        let { allow: i, deny: s } = t;
        switch (((s = eu.TF(s, e)), (i = eu.TF(i, e)), l)) {
            case "ALLOW":
                i = eu.WQ(i, e);
                break;
            case "DENY":
                s = eu.WQ(s, e);
        }
        if (K.A.can(e, n, { [t.id]: { ...t, allow: i, deny: s } })) (0, D.LA)(n, t.id, i, s);
        else {
            var a;
            let e;
            switch (t.type) {
                case k.r2.MEMBER: {
                    let n = ee.default.getUser(t.id);
                    null != n && (e = ez.Ay.getName(n));
                    break;
                }
                case k.r2.ROLE: {
                    let l = $.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = q.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                    break;
                }
                default:
                    t.type;
            }
            (a = e),
                _.A.show({
                    title: eW.intl.string(eW.t.vElC9b),
                    body: eW.intl.format(eW.t.yslqFM, { name: a }),
                    cancelText: eW.intl.string(eW.t.psXQHP),
                    onCancel() {
                        window.open(eB.A.getArticleURL(eZ.MVz.PERMISSIONS_LOCKOUT));
                    },
                });
        }
    }
    function m(e) {
        if (null == n) return !1;
        let l = K.A.can(eZ.xBc.ADMINISTRATOR, i) || K.A.can(eZ.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
        return n.isGuildStageVoice() && Y.Zq.has(e)
            ? eW.intl.string(eW.t.bTS5lf)
            : (0, P.Gs)(o, t.id, e)
              ? eW.intl.string(eW.t.yXmgpP)
              : !((!eu.aI(e, eZ.xBc.MANAGE_ROLES) || l) && (null == e || K.A.can(e, i) || l)) &&
                eW.intl.string(eW.t.nOtPMM);
    }
    let x = t.id === c,
        p = o === t.id,
        A = n.isForumLikeChannel() && eu.zy(t.deny, eZ.xBc.SEND_MESSAGES),
        f = eu.zy(t.deny, eZ.xBc.SEND_MESSAGES),
        C = eu.zy(t.deny, eZ.xBc.READ_MESSAGE_HISTORY),
        j = eF.A.generateChannelPermissionSpec(c, n, x, {
            createPostsDisabled: A,
            sendMessagesDisabled: f,
            readMessageHistoryDisabled: C,
        });
    return (0, l.jsxs)(e_.Ay.Content, {
        className: eQ.uA,
        children: [
            null != d
                ? (0, l.jsx)("div", {
                      className: eQ.B2,
                      children: (0, l.jsx)(ex.w, {
                          type: "info",
                          children: eW.intl.format(eW.t["Xq++FA"], { appName: d.name }),
                      }),
                  })
                : null,
            j.map((e, n) =>
                (0, l.jsx)(
                    eG.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: g, permissionRender: m, className: eQ.p2 },
                    n,
                ),
            ),
            x || p
                ? null
                : (0, l.jsx)("div", {
                      className: eQ.O6,
                      children: (0, l.jsx)(T.$, {
                          variant: "critical-secondary",
                          text: eW.intl.format(eW.t.txPV7k, { name: h() }),
                          onClick: function () {
                              let e = h();
                              _.A.show({
                                  title: eW.intl.string(eW.t.GuPYQB),
                                  body: eW.intl.format(eW.t.xERCnZ, { name: e }),
                                  cancelText: eW.intl.string(eW.t["ETE/oC"]),
                                  onConfirm: () => G.A.clearPermissionOverwrite(u, t.id),
                              });
                          },
                      }),
                  }),
        ],
    });
}
function e0(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = eH.Ay.getNickname(t, n, i),
        o = ez.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: eQ.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(C.eu, {
                              className: eQ.PX,
                              size: j._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(a.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: A()(eq.uN, eQ.mG),
            children: [
                (0, l.jsx)(C.eu, { size: j._3.SIZE_32, src: s, "aria-label": i.username, className: eQ.RJ }),
                (0, l.jsxs)("div", {
                    className: eQ.F0,
                    children: [(0, l.jsx)(a.E, { className: eQ.F0, variant: "text-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function e2(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function e5(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: o, onSelect: d } = e,
        c = (0, s.bG)([q.A], () => q.A.getSortedRoles(t.id)),
        u = (0, s.yK)([Q.Ay], () => Q.Ay.getMemberIds(t.id)),
        h = i.useMemo(
            () => [
                ...c.filter((e) => null == r[e.id]),
                ...ec()(u)
                    .map(ee.default.getUser)
                    .filter(eU.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [u, r, c],
        );
    return (0, l.jsx)(eh.lG, {
        className: eQ.Nd,
        children: (0, l.jsxs)(ep.iS, {
            selectionMode: "single",
            onSelectionChange: function (e) {
                null != e && (e2(e) ? d(e.id, k.r2.ROLE) : e instanceof ek.A && d(e.id, k.r2.MEMBER), o());
            },
            options: h,
            formatOption: function (e) {
                return { id: e.id, value: e, label: e2(e) ? e.name : ez.Ay.getUserTag(e) };
            },
            children: [
                (0, l.jsx)("div", {
                    className: eQ.ON,
                    children: (0, l.jsx)(ep.a3, {
                        label: eW.intl.string(eW.t.lT5Zth),
                        placeholder: eW.intl.string(eW.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: function (e) {
                            let n = e.target.value;
                            eV.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(ep.X2, {
                    renderListItem: function (e) {
                        let { value: i } = e;
                        if (e2(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: A()(eq.uN, eQ.xf),
                                    children: [
                                        (0, l.jsx)(a.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: eQ.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(a.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: eW.intl.string(eW.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof ek.A) return (0, l.jsx)(e0, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function e1() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, s.cf)([X.A], () => X.A),
        c = r?.getGuildId(),
        { guild: u, sortedGuildRoles: h } = (0, s.cf)([$.A, q.A], () => {
            let e = null != c ? $.A.getGuild(c) : void 0,
                t = null != e ? q.A.getSortedRoles(e.id) : void 0;
            return { guild: e, sortedGuildRoles: t };
        }, [c]),
        g = (function (e, t) {
            let n = (0, s.yK)([Q.Ay], () => Q.Ay.getMemberIds(e), [e]),
                [l, a] = i.useMemo(
                    () =>
                        eJ()(
                            null == t
                                ? []
                                : Object.values(t)
                                      .filter((e) => e.type === k.r2.MEMBER)
                                      .map((e) => e.id),
                            (e) => n.includes(e),
                        ),
                    [t, n],
                );
            return (
                i.useEffect(() => {
                    a.length > 0 && null != e && eX.A.requestMembersById(e, a, !1);
                }, [a, e]),
                (0, s.yK)([ee.default], () => l.map(ee.default.getUser).filter(eU.Vq), [l])
            );
        })(c, o),
        m = (0, P.HV)(r),
        x = (0, ew.Ay)(),
        p = (0, s.bG)([eO.Ay], () => eO.Ay.roleStyle),
        A = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, ej.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != u ? (0, eD.af)(u) : null,
                        o = null != i && a === i.id,
                        d = m === e,
                        { default: c } = await n.e("477168").then(n.bind(n, 495603));
                    return (t) =>
                        (0, l.jsx)(c, {
                            ...t,
                            id: e,
                            role: i,
                            handleDeletePermission:
                                o || d
                                    ? void 0
                                    : () => {
                                          _.A.show({
                                              title: eW.intl.string(eW.t.GuPYQB),
                                              body: eW.intl.format(eW.t.xERCnZ, { name: s }),
                                              cancelText: eW.intl.string(eW.t["ETE/oC"]),
                                              onConfirm: () => G.A.clearPermissionOverwrite(r.id, e),
                                          });
                                      },
                        });
                });
            },
            [r, u, m],
        );
    if (null == u || null == h || null == r || null == o) return null;
    function f(e, t) {
        null != r &&
            G.A.updatePermissionOverwrite(r.id, { id: e, type: t, allow: en.x3, deny: en.x3 }).then(() => (0, D.G9)(e));
    }
    null != o && null == o[u.id] && (o[u.id] = en.xT(u.id));
    let b = h
            .filter((e) => o[e.id]?.type === k.r2.ROLE)
            .map(function (e) {
                return null == u
                    ? null
                    : (0, l.jsx)(
                          eR,
                          {
                              theme: x,
                              roleStyle: p,
                              id: e.id,
                              role: e,
                              guild: u,
                              color: e.colorString,
                              "aria-label": e.name,
                              onContextMenu: (t) => A(t, { id: e.id, name: e.name, role: e }),
                              children: e.name,
                          },
                          `${d}-${e.id}`,
                      );
            }),
        N = ec()(g)
            .sortBy((e) => e.username.toLowerCase())
            .map(function (e) {
                if (null == u) return null;
                let t = e.getAvatarURL(u.id, 24);
                return (0, l.jsx)(
                    eR,
                    {
                        id: e.id,
                        guild: u,
                        theme: x,
                        roleStyle: p,
                        "aria-label": ez.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => A(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: eQ.mG,
                            children: [
                                (0, l.jsx)(C.eu, {
                                    size: j._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: eQ.bE,
                                }),
                                (0, l.jsx)("span", { className: eQ.Xh, children: ez.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(e_.Ay.Sidebar, {
        className: eQ.uA,
        scrollable: !0,
        children: (0, l.jsxs)(ef.V, {
            onItemSelect: D.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, em.M)(x) ? n(546716) : n(233497)),
                (0, l.jsx)(eA.Y, {
                    targetElementRef: t,
                    renderPopout: function (e) {
                        let { position: t, closePopout: n } = e;
                        return null == u || null == r || null == o
                            ? null
                            : (0, l.jsx)(e5, {
                                  guild: u,
                                  channel: r,
                                  permissionOverwrites: o,
                                  position: null != t ? t : "bottom",
                                  onSelect: f,
                                  onClose: n,
                              });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (n) =>
                        (0, l.jsx)(ef.V.Header, {
                            ref: t,
                            ...n,
                            children: (0, l.jsxs)("div", {
                                className: eQ.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [eW.intl.string(eW.t["LPJmL/"]), "/", eW.intl.string(eW.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: eQ.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                b,
                N,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(ef.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(eC.Anchor, {
                            href: eB.A.getArticleURL(eZ.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(a.E, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: eW.intl.string(eW.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function e7() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, s.cf)([X.A], () => X.A);
    if (
        null == (0, s.bG)([$.A], () => (null != e ? $.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(e_.Ay, { className: eQ.kL, children: [(0, l.jsx)(e1, {}), (0, l.jsx)(eK, { overwrite: i })] });
}
var e3 = n(310578);
function e4() {
    let e = (0, s.bG)([X.A], () => X.A.advancedMode);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.c, { className: e3.BQ }),
            (0, l.jsx)(ei.EN, {
                isExpanded: e,
                onExpandedChange: D.E,
                children: (0, l.jsx)(ea.F, {
                    component: (0, l.jsx)(er.vN, {
                        children: (0, l.jsx)(es.$, {
                            slot: "trigger",
                            className: e3.hZ,
                            children: (0, l.jsxs)(a.E, {
                                variant: "text-lg/semibold",
                                className: e3.Vt,
                                children: [
                                    eW.intl.string(eW.t.dYRsrm),
                                    (0, l.jsx)(eo.a, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        className: e3.yM,
                                    }),
                                ],
                            }),
                        }),
                    }),
                    children: (0, l.jsx)(ei.kS, { className: e3.nd, children: (0, l.jsx)(e7, {}) }),
                }),
            }),
        ],
    });
}
var e6 = n(243721),
    e9 = n(235986),
    e8 = n(653042);
function te(e) {
    let { description: t, icon: n, id: i, label: s, onChange: r, value: o } = e;
    return (0, l.jsxs)("div", {
        className: e8.U,
        children: [
            (0, l.jsxs)(e9.A, {
                justify: e9.A.Justify.BETWEEN,
                align: e9.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(e9.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(a.E, { variant: "text-md/semibold", children: s }),
                    }),
                    null != r && null != o && (0, l.jsx)(e6.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, l.jsx)(a.E, { variant: "text-xs/normal", color: "text-default", className: e8.L, children: t }),
        ],
    });
}
var tt = n(661531),
    tn = n(993077),
    tl = n(625586);
let ti = function (e) {
    let { className: t, icon: n, noticeText: i, buttonText: s, onClick: r, canSync: o } = e;
    return (0, l.jsx)(tn.Z, {
        className: A()(t, tl.N),
        children: (0, l.jsxs)(e9.A, {
            justify: e9.A.Justify.BETWEEN,
            align: e9.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: tt.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: tl.P,
                    children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: i }),
                }),
                o && (0, l.jsx)(T.$, { size: "sm", variant: "secondary", onClick: r, text: s ?? void 0 }),
            ],
        }),
    });
};
var ts = n(719366),
    ta = n(818348),
    tr = n(614406);
function to(e) {
    let { channel: t, roles: n, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(E.OZ, {
        className: tr.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case ts.oO.ROLES:
                    (c =
                        (d = n[h]).rowType === ts.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, l.jsx)(H.A, { className: tr.a, color: d.colorString, size: 20 })
                            : (0, l.jsx)(f.i, { size: "custom", className: tr.a, color: d.colorString, height: 20 })),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                c,
                                (0, l.jsx)(a.E, {
                                    variant: "text-sm/normal",
                                    color: d.disabled ? "text-muted" : "text-default",
                                    children: d.name,
                                }),
                            ],
                        })),
                        (g = d.disabled);
                    break;
                case ts.oO.MEMBERS:
                    (d = i[h]),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(C.eu, { src: d.avatarURL, size: j._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(a.E, { variant: "text-sm/normal", children: d.name }),
                                d.bot && (0, l.jsx)(B.A, { verified: d.verifiedBot }),
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    className: tr.Gq,
                                    variant: "text-xs/normal",
                                    children: d.username,
                                }),
                            ],
                        })),
                        (g = d.disabled);
                    break;
                default:
                    d = null;
            }
            if (null == d) return null;
            let m = !g && null == s && null != d.id;
            return (0, l.jsxs)(
                "div",
                {
                    className: tr.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: tr.z7, children: o }),
                        (0, l.jsxs)("div", {
                            className: tr.z7,
                            children: [
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: el.vV(d.rowType),
                                }),
                                d.rowType !== ts.T6.EMPTY_STATE &&
                                    (0, l.jsx)(b.m, {
                                        asContainer: !0,
                                        text: s ?? r(d.rowType, d.disabled),
                                        children: (0, l.jsx)(N.D, {
                                            onClick: () => {
                                                var e, n, l;
                                                return (
                                                    m &&
                                                    null != d &&
                                                    ((e = d.id),
                                                    (n = d.name),
                                                    (l = d.rowType),
                                                    void _.A.show({
                                                        title: eW.intl.string(eW.t.GuPYQB),
                                                        body: eW.intl.format(eW.t.xERCnZ, { name: n }),
                                                        cancelText: eW.intl.string(eW.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, W.$b)(
                                                                        e,
                                                                        n === ts.T6.ROLE ? k.r2.ROLE : k.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, W.pF)(l)
                                                                        ? G.A.clearPermissionOverwrite(t.id, l.id)
                                                                        : (0, D.R$)(t.id, [l]);
                                                                } else G.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, l),
                                                    }))
                                                );
                                            },
                                            className: tr.HI,
                                            "aria-disabled": !m,
                                            "aria-label": eW.intl.string(eW.t.N86XcP),
                                            children: (0, l.jsx)(v.a, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: A()(tr.Yz, { [tr._2]: g || s }),
                                            }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                },
                d.id,
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case ts.oO.ROLES:
                    return (0, l.jsx)(tu, { title: eW.intl.string(eW.t["LPJmL/"]) }, "roles-title");
                case ts.oO.MEMBERS:
                    return (0, l.jsx)(tu, { title: eW.intl.string(eW.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function td(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, s.bG)([q.A], () => q.A.getSortedRoles(t.id)),
        d = el.C$(t, o, i, Y.QY, r),
        c = (0, s.bG)([Q.Ay], () => el.Wi(Q.Ay.getMemberIds(t.id), i, t, Y.QY, { permissionUpdates: r })),
        u = (0, W.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: A()(tr.j1, tr.vu),
        children: [
            (0, l.jsx)(te, {
                label: eW.intl.string(eW.t.StpcFU),
                description: eW.intl.string(eW.t.f7VbhF),
                icon: (0, l.jsx)(S.q, {
                    size: "custom",
                    color: "currentColor",
                    className: tr.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: tr.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: tr.MJ,
                        children: [
                            (0, l.jsx)(a.E, { variant: "text-md/semibold", children: eW.intl.string(eW.t["7BWDRb"]) }),
                            (0, l.jsx)(b.m, {
                                text: eW.intl.string(eW.t.arRuES),
                                shouldShow: !u,
                                children: (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eW.intl.string(eW.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, y.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("377476"),
                                                n.e("766811"),
                                                n.e("746309"),
                                                n.e("778799"),
                                                n.e("692513"),
                                                n.e("589916"),
                                                n.e("120379"),
                                                n.e("819193"),
                                                n.e("358608"),
                                            ]).then(n.bind(n, 841811));
                                            return (t) => (0, l.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !u,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(to, {
                        channel: i,
                        roles: d,
                        members: c,
                        disabledReason: u ? null : eW.intl.string(eW.t.arRuES),
                        getRemoveTooltipHint: J.Mt,
                    }),
                ],
            }),
        ],
    });
}
function tc(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: a, roles: r, members: o } = e,
        d = (0, s.bG)([K.A], () => K.A.can(ta.xB.ADMINISTRATOR, t)),
        c = en.MJ(ta.xB.VIEW_CHANNEL, t),
        u = en.MJ(ta.xB.ADMINISTRATOR, t);
    async function h() {
        let e = i.accessPermissions,
            s = ee.default.getCurrentUser();
        a || null == (await (0, z.D)(t.id, i.id))
            ? (el.uB(i, e, a), a || null == s || d || el.tP(i, e))
            : (0, y.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("304823").then(n.bind(n, 158954));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: eW.intl.string(eW.t.ZzdgUm),
                          subtitle: eW.intl.format(eW.t.DwY2vN, {
                              onClick: () => {
                                  Z.A.open(t.id, eZ.BEX.ONBOARDING), n.onClose();
                              },
                          }),
                          actions: [{ text: eW.intl.string(eW.t.BddRzS), onClick: n.onClose }],
                      });
              });
    }
    let g = {
        title: eW.intl.string(eW.t.aUI70g),
        subtitle: eW.intl.string(eW.t.hfbjIH),
        formLabel: eW.intl.string(eW.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((g.title = eW.intl.string(eW.t.lEPAZ5)),
              (g.subtitle = eW.intl.string(eW.t.RQUk61)),
              (g.formLabel = eW.intl.string(eW.t["8VIxJu"])))
            : i.type === eZ.rbe.GUILD_VOICE && (g.subtitle = eW.intl.string(eW.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: A()(tr.j1, { [tr.vu]: a }),
            children: [
                (0, l.jsx)(te, {
                    description: g.subtitle,
                    icon: (0, l.jsx)(I.LockIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: tr.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: g.title,
                    onChange: h,
                    value: a,
                }),
                (0, l.jsxs)("div", {
                    className: tr.X4,
                    children: [
                        u &&
                            (0, l.jsx)("div", {
                                className: tr.Ux,
                                children: (0, l.jsx)(M.p, {
                                    messageType: M.Y.WARNING,
                                    children: eW.intl.string(eW.t["5f3HIC"]),
                                }),
                            }),
                        !c &&
                            !u &&
                            !a &&
                            (0, l.jsx)("div", {
                                className: tr.Ux,
                                children: (0, l.jsx)(M.p, {
                                    messageType: M.Y.WARNING,
                                    children: eW.intl.string(eW.t.ZAk4Q9),
                                }),
                            }),
                        a &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: tr.MJ,
                                        children: [
                                            (0, l.jsx)(L.D, {
                                                variant: "heading-sm/semibold",
                                                className: tr.DH,
                                                children: g.formLabel,
                                            }),
                                            (0, l.jsx)(T.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eW.intl.string(eW.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, y.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e("377476"),
                                                            n.e("766811"),
                                                            n.e("746309"),
                                                            n.e("692513"),
                                                            n.e("589916"),
                                                            n.e("120379"),
                                                            n.e("819193"),
                                                            n.e("468083"),
                                                        ]).then(n.bind(n, 685374));
                                                        return (t) =>
                                                            (0, l.jsx)(e, { ...t, channelId: i.id, inSettings: !0 });
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(to, { channel: i, roles: r, members: o, getRemoveTooltipHint: el.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function tu(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(R.c, { className: tr.yF }),
            (0, l.jsx)(L.D, { variant: "heading-sm/semibold", className: A()(tr.DH, tr.Gf), children: t }),
        ],
    });
}
let th = s.Ay.connectStores([X.A, $.A, Q.Ay, K.A, q.A, V.A], () => {
    let e,
        t = X.A.channel,
        n = X.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = $.A.getGuild(t.getGuildId());
        let n = Q.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = q.A.getSortedRoles(e.id);
            (s = X.A.editedPermissionIds.reduce((e, t) => {
                let n = X.A.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (l = el.uX(e, r, t, t.accessPermissions, s)),
                (i = el.Wi(n, t, e, t.accessPermissions, {
                    permissionUpdates: s,
                    appChannelBotUserId: (0, P.yT)(t, V.A.getApplication(t.application_id)),
                })),
                (a = el.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != n && K.A.can(ta.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: a,
        locked: X.A.locked,
        permissionUpdates: s,
    };
})(function (e) {
    let {
        canSyncChannel: t,
        category: i,
        channel: s,
        filteredMembers: r,
        filteredRoles: o,
        guild: c,
        isPrivateGuildChannel: u,
        locked: h,
        permissionUpdates: g,
    } = e;
    if (((0, U.q)(s), null == s || null == c)) return null;
    let m = { title: eW.intl.string(eW.t.BAZMBn), subtitle: eW.intl.string(eW.t.XLrZyp) };
    return (
        s.isCategory() && ((m.title = eW.intl.string(eW.t["/uELTj"])), (m.subtitle = eW.intl.string(eW.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(L.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(a.E, { variant: "text-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, l.jsx)(ti, {
                              canSync: !1,
                              icon: w.RefreshIcon,
                              noticeText: eW.intl.format(eW.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(ti, {
                              buttonText: eW.intl.string(eW.t.NVwuHq),
                              canSync: !0,
                              icon: (0, O.k)(et),
                              noticeText: eW.intl.format(eW.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, y.openModalLazy)(async () => {
                                          let { default: e } = await n.e("687634").then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: s,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = en.s9(i, (0, P.GY)(s));
                                                      (await (0, F.n)(s, t[e].deny, t[e].allow)) &&
                                                          (0, d.RT)(s.id, { permissionOverwrites: Object.values(t) });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice() ? (0, l.jsx)(td, { guild: c, channel: s, permissionUpdates: g }) : null,
                (0, l.jsx)(tc, { channel: s, guild: c, isPrivateGuildChannel: u, roles: o, members: r }),
                (0, l.jsx)(e4, {}),
            ],
        })
    );
});
var tg = n(526132),
    tm = n(97469),
    tx = n(406704),
    tp = n(363195),
    tA = n(95701),
    tf = n(291731),
    tC = n(734057),
    tj = n(994500),
    tb = n(625494),
    tN = n(608226),
    tv = n(282956),
    tE = n(860603);
function ty(e) {
    let { refToScroller: t } = e,
        n = (0, s.bG)([eP.A], () => eP.A.getChannel(), []),
        i = (0, s.bG)([$.A], () => (null != n ? $.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: a,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, s.cf)([tf.A], () => tf.A.getProps(), []);
    return null == i || null == n
        ? null
        : (0, l.jsx)(tE.A, {
              guild: i,
              channel: n,
              section: a,
              sectionId: r,
              webhooks: o,
              editedWebhook: d,
              isFetchingWebhooks: c,
              hasChanges: tf.A.hasChanges,
              errors: u,
              refToScroller: t,
          });
}
function tS() {
    let { channel: e, submitting: t } = (0, s.cf)([eP.A], () => eP.A.getProps()),
        n = (0, s.bG)([tf.A], () => tf.A.editedWebhook),
        i = (0, s.bG)([$.A], () => (null != e ? $.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(eg.A, {
        submitting: t,
        onReset: function () {
            tv.A.init();
        },
        onSave: function () {
            null != i && null != n && tv.A.saveWebhook(i.id, n);
        },
    });
}
var tT = n(886235),
    tI = n(351906);
function tM() {
    let e = (0, s.bG)([tI.A], () => tI.A.hideInstantInvites),
        { channel: t, guild: n } = (0, s.cf)([eP.A, $.A], () => {
            let { channel: e } = eP.A.getProps(),
                t = null != e ? $.A.getGuild(e.getGuildId()) : null;
            return { channel: e, guild: t };
        }, []),
        i = (0, s.bG)([K.A], () => null != t && K.A.can(eZ.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: a, loading: r } = (0, s.cf)([eP.A], () => eP.A.getInvites(), []);
    return (0, l.jsx)(tT.A, { invites: a, loading: r, guild: n, channel: t, canCreateInvites: i, hide: e });
}
n(938796), n(667532);
var tL = n(371444),
    tR = n(392421),
    tw = n(602137),
    tO = n(665260),
    t_ = n(452027),
    tG = n(103557),
    tD = n(150934),
    tk = n(825484),
    tP = n(123292),
    tU = n(691885),
    tV = n(270003),
    tB = n(331322),
    tH = n(144228),
    tF = n(95477),
    tz = n(106236),
    tZ = n(534963),
    tW = n(820284),
    tY = n(432371),
    tJ = n(323073),
    tX = n(547683),
    tQ = n(376092),
    tq = n(773669),
    t$ = n(627807),
    tK = n(965805),
    t0 = n(355622),
    t2 = n(408018),
    t5 = n(273754),
    t1 = n(375499),
    t7 = n(267889),
    t3 = n(770335),
    t4 = n(7584),
    t6 = n(422844),
    t9 = n(307301),
    t8 = n(599119),
    ne = n(219504),
    nt = n(807632),
    nn = n(376310);
n(253913);
var nl = n(901748);
function ni(e) {
    let { channel: t } = e,
        a = (0, s.bG)([K.A], () => K.A.can(eZ.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        o = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            a &&
                !e &&
                (0, y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("143172"), n.e("347326")]).then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, a]),
        u = i.useCallback((e) => t.isGameInvitesChannel() && e.name === nt.Dg, [t]),
        h = i.useCallback(
            (e) => {
                !a ||
                    u(e) ||
                    (0, y.openModalLazy)(async () => {
                        let { default: i } = await Promise.all([n.e("143172"), n.e("347326")]).then(n.bind(n, 950989));
                        return (n) => (0, l.jsx)(i, { ...n, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [a, u, t],
        ),
        {
            handleDragStart: g,
            handleDragReset: m,
            handleDragComplete: x,
        } = (0, ne.A)(t.availableTags, (e) => {
            (0, d.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: nl._A,
        children: [
            o
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          ns,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: a,
                              onTagClick: h,
                              onDragComplete: x,
                              onDragReset: m,
                              onDragStart: g,
                              tooltipText: u(e) ? eW.intl.string(eW.t.FiKFKs) : void 0,
                          },
                          e.id,
                      ),
                  )
                : null,
            o
                ? (0, l.jsx)(N.D, {
                      onClick: c,
                      className: A()(nl.JE, { [nl.r9]: !a || r }),
                      children: (0, l.jsx)(t9.j, {
                          size: "custom",
                          "aria-label": eW.intl.string(eW.t["/jubeD"]),
                          color: tt.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(T.$, {
                      variant: "primary",
                      text: eW.intl.string(eW.t["/jubeD"]),
                      disabled: !a,
                      onClick: c,
                  }),
        ],
    });
}
function ns(e) {
    let {
            tag: t,
            availableTags: n,
            canManageChannels: i,
            onTagClick: s,
            onDragComplete: a,
            onDragStart: r,
            onDragReset: o,
            tooltipText: d,
        } = e,
        c = n.findIndex((e) => e.id === t.id),
        {
            drag: u,
            dragSourcePosition: h,
            drop: g,
            setIsDraggable: m,
        } = (0, t8.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: a,
            onDragReset: o,
        });
    return (0, l.jsx)("div", {
        className: A()(nl.kL, { [nl.A]: null != h && c < h, [nl.Ze]: null != h && c > h }),
        ref: (e) => {
            u(g(e));
        },
        onMouseEnter: () => m(i),
        onMouseLeave: () => m(!1),
        children: (0, l.jsx)(b.m, {
            text: d,
            asContainer: !0,
            shouldShow: null != d,
            children: (0, l.jsx)(nn.A, {
                tag: t,
                disabled: !i,
                ariaLabel: eW.intl.formatToPlainString(eW.t.jhSvB9, { name: t.name }),
                onClick: i ? () => s(t) : void 0,
            }),
        }),
    });
}
var na = n(235640),
    nr = n(268761),
    no = n(474078),
    nd = n(890497),
    nc = n(580679);
let nu = function (e) {
    let { autoArchiveDuration: t, onChange: n, isDisabled: i, helperText: s } = e,
        a = (0, nr.Gk)();
    return (0, l.jsx)("div", {
        className: nc.gy,
        children: (0, l.jsx)(nd.Z, {
            selectionMode: "single",
            label: eW.intl.string(eW.t.FGjMZS),
            helperText: s,
            disabled: i,
            options: a,
            value: t,
            onSelectionChange: n,
        }),
    });
};
var nh = n(280450),
    ng = n(717518),
    nm = n(147036),
    nx = n(927813),
    np = n(879631),
    nA = n(221851);
function nf(e) {
    let { label: t, helperText: n, hideLabel: s, disabled: a, value: r, onChange: o } = e,
        [d, c] = i.useState(null),
        u = i.useMemo(() => {
            let e = [...(d ?? eZ.s_7)];
            return (
                e.includes(r) || e.unshift(r), e.map((e) => ({ id: e.toString(), label: (0, np.$)(e, !1), value: e }))
            );
        }, [d, r]),
        h = i.useCallback(
            (e) => {
                o(e), c(null);
            },
            [o],
        ),
        g = i.useCallback((e) => {
            if ("" === e) return void c(null);
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) return void c(null);
            n <= eZ.WA1 && t.push(n);
            let l = n * nx.A.Seconds.MINUTE;
            l <= eZ.WA1 && t.push(l);
            let i = n * nx.A.Seconds.HOUR;
            i <= eZ.WA1 && t.push(i), c(t);
        }, []),
        m = i.useCallback(() => {
            c(null);
        }, []);
    return (0, l.jsx)("div", {
        className: nA.QB,
        children: (0, l.jsx)(nd.Z, {
            selectionMode: "single",
            label: t,
            hideLabel: s,
            helperText: n,
            disabled: a,
            value: r,
            onSelectionChange: h,
            onQueryChange: (e) => g(e.target.value),
            options: u,
            onBlur: m,
            placeholder: eW.intl.string(eW.t.dBqQu4),
        }),
    });
}
var nC = n(953727);
function nj(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nC.A)(s),
        width: "272",
        height: "143",
        viewBox: "0 0 272 143",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, l.jsx)("rect", { className: n, width: "130", height: "143", rx: "12", fill: i }),
            (0, l.jsx)("path", {
                className: n,
                opacity: "0.5",
                d: "M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V83H0V12Z",
                fill: t,
            }),
            (0, l.jsx)("path", {
                className: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M57.641 30.3944C54.9317 30.3944 52.7354 32.488 52.7354 35.0705V49.0987C52.7354 51.6812 54.9317 53.7747 57.641 53.7747H72.358C75.0673 53.7747 77.2637 51.6812 77.2637 49.0987V35.0705C77.2637 32.488 75.0673 30.3944 72.358 30.3944H57.641ZM62.5467 37.4085C62.5467 36.117 61.4468 35.0705 60.0938 35.0705C58.7379 35.0705 57.641 36.117 57.641 37.4085C57.641 38.701 58.7379 39.7466 60.0938 39.7466C61.4468 39.7466 62.5467 38.701 62.5467 37.4085ZM61.3203 44.4226L57.641 49.0987H72.358L68.6787 40.9156L63.7731 46.7606L61.3203 44.4226Z",
                fill: "#C4C4C4",
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "12",
                y: "99",
                width: "106",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "12",
                y: "123",
                width: "32",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("circle", {
                className: n,
                opacity: "0.5",
                cx: "54",
                cy: "127",
                r: "2",
                fill: t,
                fillOpacity: "0.48",
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "64",
                y: "123",
                width: "54",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                x: "0.5",
                y: "0.5",
                width: "129",
                height: "142",
                rx: "11.5",
                stroke: t,
                strokeOpacity: "0.3",
            }),
            (0, l.jsx)("rect", { className: n, x: "142", width: "130", height: "143", rx: "12", fill: i }),
            (0, l.jsx)("path", {
                className: n,
                opacity: "0.5",
                d: "M142 12C142 5.37259 147.373 0 154 0H260C266.627 0 272 5.37258 272 12V83H142V12Z",
                fill: t,
            }),
            (0, l.jsx)("path", {
                className: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M199.641 30.3944C196.932 30.3944 194.735 32.488 194.735 35.0705V49.0987C194.735 51.6812 196.932 53.7747 199.641 53.7747H214.358C217.067 53.7747 219.264 51.6812 219.264 49.0987V35.0705C219.264 32.488 217.067 30.3944 214.358 30.3944H199.641ZM204.547 37.4085C204.547 36.117 203.447 35.0705 202.094 35.0705C200.738 35.0705 199.641 36.117 199.641 37.4085C199.641 38.701 200.738 39.7466 202.094 39.7466C203.447 39.7466 204.547 38.701 204.547 37.4085ZM203.32 44.4226L199.641 49.0987H214.358L210.679 40.9156L205.773 46.7606L203.32 44.4226Z",
                fill: "#C4C4C4",
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "154",
                y: "99",
                width: "106",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "154",
                y: "123",
                width: "32",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("circle", {
                className: n,
                opacity: "0.5",
                cx: "196",
                cy: "127",
                r: "2",
                fill: t,
                fillOpacity: "0.48",
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "206",
                y: "123",
                width: "54",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                x: "142.5",
                y: "0.5",
                width: "129",
                height: "142",
                rx: "11.5",
                stroke: t,
                strokeOpacity: "0.3",
            }),
        ],
    });
}
function nb(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nC.A)(s),
        width: "272",
        height: "143",
        viewBox: "0 0 272 143",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, l.jsx)("rect", { className: n, y: "15.5", width: "272", height: "112", rx: "12", fill: i }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "12",
                y: "27.5",
                width: "168",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "12",
                y: "43.5",
                width: "96",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "12",
                y: "67.5",
                width: "168",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "12",
                y: "83.5",
                width: "168",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "196",
                y: "27.5",
                width: "64",
                height: "64",
                rx: "8",
                fill: t,
            }),
            (0, l.jsx)("path", {
                className: n,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
                fill: "#C4C4C4",
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "12",
                y: "107.5",
                width: "32",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("circle", {
                className: n,
                opacity: "0.5",
                cx: "54",
                cy: "111.5",
                r: "2",
                fill: t,
                fillOpacity: "0.48",
            }),
            (0, l.jsx)("rect", {
                className: n,
                opacity: "0.5",
                x: "64",
                y: "107.5",
                width: "32",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, l.jsx)("rect", {
                className: n,
                x: "0.5",
                y: "16",
                width: "271",
                height: "111",
                rx: "11.5",
                stroke: t,
                strokeOpacity: "0.3",
            }),
        ],
    });
}
var nN = n(746080),
    nv = n(307731),
    nE = n(37411),
    ny = n(590930);
let nS = {
        popoutLocation: {
            page: eZ.liQ.CHANNEL_SETTINGS,
            section: eZ.JJy.CHANNEL_DEFAULT_REACTION,
            object: eZ.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nT = {
        popoutLocation: {
            page: eZ.liQ.CHANNEL_SETTINGS,
            section: eZ.JJy.CHANNEL_NAME,
            object: eZ.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nI = "AUTOMATIC_RTC_REGION",
    nM = s.Ay.connectStores([eP.A], () => {
        let { channel: e, submitting: t } = eP.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, d.Ts)(e.id);
            },
            onSave() {
                if (null == e) return;
                let {
                    name: t,
                    type: n,
                    topic: l,
                    bitrate: i,
                    userLimit: s,
                    nsfw: a,
                    flags: r,
                    rateLimitPerUser: c,
                    defaultThreadRateLimitPerUser: u,
                    threadMetadata: h,
                    defaultAutoArchiveDuration: g,
                    template: m,
                    rtcRegion: x,
                    videoQualityMode: p,
                    defaultReactionEmoji: A,
                    availableTags: f,
                    defaultSortOrder: C,
                    defaultForumLayout: j,
                    defaultTagSetting: b,
                    application_id: N,
                } = e;
                e.isThread() && 0 === (t = (0, no.A)(t, !0)).length
                    ? o.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eW.intl.string(eW.t.uXA573) },
                      })
                    : (0, d.RT)(e.id, {
                          name: t,
                          type: n,
                          topic: l,
                          bitrate: i,
                          userLimit: s,
                          nsfw: a,
                          flags: r,
                          rateLimitPerUser: c,
                          defaultThreadRateLimitPerUser: u,
                          autoArchiveDuration: h?.autoArchiveDuration,
                          locked: h?.locked,
                          invitable: h?.invitable,
                          defaultAutoArchiveDuration: g,
                          template: m,
                          rtcRegion: x,
                          videoQualityMode: p,
                          defaultReactionEmoji: A,
                          availableTags: f,
                          defaultSortOrder: C,
                          defaultForumLayout: j,
                          defaultTagSetting: b,
                          applicationId: N,
                      });
            },
        };
    })(eg.A);
function nL(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(t7.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: nv.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === t3.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: nT,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(eA.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: eA.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(t1.A, { ...e, ref: a, active: n, className: ny.Z8, tabIndex: 0 });
        },
    });
}
class nR extends i.PureComponent {
    defaultReactionButtonRef = i.createRef();
    nameInputRef = i.createRef();
    cursorPosition = 0;
    channelTopicTextAreaChannel = null;
    channelTopicTextAreaGuildId = void 0;
    getChannelTopicTextAreaChannel(e) {
        let t = e ?? void 0;
        return (
            (null == this.channelTopicTextAreaChannel || this.channelTopicTextAreaGuildId !== t) &&
                ((this.channelTopicTextAreaGuildId = t),
                (this.channelTopicTextAreaChannel = (0, tA.createChannelRecord)({
                    id: "1",
                    type: eZ.rbe.DM,
                    guild_id: t,
                }))),
            this.channelTopicTextAreaChannel
        );
    }
    constructor(e) {
        super(e);
        const t = this.props.channel?.topic ?? "";
        this.state = {
            textTopicValue: t,
            richTopicValue: (0, t2.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && tZ.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, t2.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText() {
        let { channel: e } = this.props;
        return e?.isForumLikeChannel()
            ? eW.intl.string(eW.t["a+1pdO"])
            : e?.isThread()
              ? eW.intl.string(eW.t.OMmNCv)
              : eW.intl.string(eW.t["HEA/DU"]);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, np.$)(e * nx.A.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        let n,
            i,
            {
                canManageChannels: s,
                canSendMessages: a,
                isThreadModerator: r,
                canManageThread: o,
                guild: d,
                isForumPost: c,
                isOwner: u,
                parentChannel: h,
            } = this.props,
            g = tA.Le.has(e.type),
            m = e.isForumLikeChannel(),
            x = m && e.availableTags?.every((e) => e.moderated),
            p = ee.default.getCurrentUser()?.isStaff() === !0,
            f = tA.IY.has(e.type)
                ? (0, l.jsx)(t_.D, {
                      label: m ? eW.intl.string(eW.t.yR6HwZ) : eW.intl.string(eW.t.X8jMDh),
                      children: (0, l.jsx)(t5.Ay, {
                          className: A()(ny.zm, { [ny.r9]: !s }),
                          innerClassName: A()(ny.At, { [ny.r9]: !s }),
                          characterCountClassName: ny.IQ,
                          maxCharacterCount: m ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eW.intl.string(eW.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? d?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: m ? t0.oU.FORUM_CHANNEL_GUIDELINES : t0.oU.CHANNEL_TOPIC,
                          onFocus: () => {
                              this.setState({ topicFocused: !0 });
                          },
                          onBlur: () => {
                              this.setState({ topicFocused: !1 });
                          },
                          focused: this.state.topicFocused,
                          onSubmit: this.handleSubmit,
                          disableThemedBackground: !0,
                          error: this.getError("topic"),
                          disabled: !s,
                          showValueWhenDisabled: !0,
                      }),
                  })
                : null,
            C =
                m && p && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tG.f, {
                          label: eW.intl.string(eW.t.qk2jdY),
                          placeholder: eW.intl.string(eW.t.DDjD1H),
                          value: t4.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            j = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(R.c, {}),
                          (0, l.jsx)(t_.D, {
                              label: eW.intl.string(eW.t["P/y+sj"]),
                              description: eW.intl.string(eW.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(ni, { channel: e }),
                          }),
                          (0, l.jsx)(tD.S, {
                              disabled: !s || x,
                              checked: e.hasFlag(nN.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eW.intl.string(eW.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            b = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(R.c, {}),
                          (0, l.jsx)(t_.D, {
                              label: eW.intl.string(eW.t["8ao1+E"]),
                              description: eW.intl.string(eW.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: ny.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: A()(ny.t0, ny._h),
                                          children: (0, l.jsxs)(tk.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(eA.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: eA.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(T.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eW.intl.string(eW.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(tP.Q, {
                                                            text: eW.intl.string(eW.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(na.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            N =
                e.isForumChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(R.c, {}),
                              (0, l.jsxs)("div", {
                                  className: ny.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: A()(ny.t0, ny.WC),
                                          children: (0, l.jsx)(tU.l, {
                                              selectionMode: "single",
                                              label: eW.intl.string(eW.t["kQvoC/"]),
                                              description: eW.intl.string(eW.t.mOSViT),
                                              options: [
                                                  {
                                                      id: "list",
                                                      label: eW.intl.string(eW.t["4HXEZG"]),
                                                      value: tL.C.LIST,
                                                  },
                                                  {
                                                      id: "grid",
                                                      label: eW.intl.string(eW.t["8RswJG"]),
                                                      value: tL.C.GRID,
                                                  },
                                              ],
                                              value: e.defaultForumLayout ?? tL.C.LIST,
                                              onSelectionChange: this.handleChangeDefaultForumLayout,
                                          }),
                                      }),
                                      e.defaultForumLayout === tL.C.GRID
                                          ? (0, l.jsx)(nj, { className: ny.Kf })
                                          : (0, l.jsx)(nb, { className: ny.Kf }),
                                  ],
                              }),
                              (0, l.jsx)(R.c, {}),
                          ],
                      })
                    : null,
            v =
                e.isForumLikeChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tU.l, {
                          selectionMode: "single",
                          label: eW.intl.string(eW.t.gePre2),
                          description: eW.intl.string(eW.t["165cVX"]),
                          options: [
                              { id: "activity", label: eW.intl.string(eW.t.ElZtzj), value: tw.T.LATEST_ACTIVITY },
                              { id: "creation", label: eW.intl.string(eW.t.w28f3F), value: tw.T.CREATION_DATE },
                          ],
                          value: e.getDefaultSortOrder(),
                          onSelectionChange: this.handleChangeDefaultSortOrder,
                      })
                    : null,
            E = e.isForumLikeChannel()
                ? (0, l.jsx)(tU.l, {
                      selectionMode: "single",
                      label: eW.intl.string(eW.t.Paxaug),
                      description: eW.intl.string(eW.t.DqOl8J),
                      options: [
                          { id: "some", label: eW.intl.string(eW.t.rQ0ctQ), value: tR.n.MATCH_SOME },
                          { id: "all", label: eW.intl.string(eW.t.FCXUu0), value: tR.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            y = g ? r : s,
            S = tA.nb.has(e.type)
                ? m
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(R.c, {}),
                              (0, l.jsxs)(tV.n, {
                                  label: eW.intl.string(eW.t.tTHx98),
                                  children: [
                                      (0, l.jsx)(nf, {
                                          label: eW.intl.string(eW.t.O1c02q),
                                          helperText: this.getSlowmodeHelpText(),
                                          value: e.rateLimitPerUser,
                                          onChange: this.handleChangeSlowmode,
                                          disabled: !y,
                                      }),
                                      (0, l.jsx)(nf, {
                                          label: eW.intl.string(eW.t["fkY5+l"]),
                                          helperText: eW.intl.string(eW.t.kdZU6H),
                                          value: e.defaultThreadRateLimitPerUser ?? 0,
                                          onChange: this.handleChangeThreadMessageSlowmode,
                                          disabled: !y,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsx)(nf, {
                          label: eW.intl.string(eW.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          value: e.rateLimitPerUser,
                          onChange: this.handleChangeSlowmode,
                          disabled: !y,
                      })
                : null,
            I =
                g && null != e.threadMetadata && !h?.isGameInvitesChannel()
                    ? (0, l.jsx)(tW.A, {
                          page: eZ.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nu, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? nE.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eW.intl.string(eW.t["3aJN9M"]) : eW.intl.string(eW.t.YUXr4Z),
                          }),
                      })
                    : null,
            L =
                e.type === eZ.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(e6.d, {
                              label: eW.intl.string(eW.t.s2rpNf),
                              description: eW.intl.string(eW.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            w = (0, tJ.Gc)(e),
            O = null != d && (0, eD.wh)(d),
            _ = "none";
        w ? (_ = "nsfw") : e.isSpoilerChannel() && (_ = "spoiler");
        let G = [
                { value: "none", name: eW.intl.string(eW.t.OtnNJE), desc: eW.intl.string(eW.t["a5/7hX"]) },
                { value: "spoiler", name: eW.intl.string(eW.t.TvUHTb), desc: eW.intl.string(eW.t.ddWXHa) },
                { value: "nsfw", name: eW.intl.string(eW.t.Es25Yf), desc: eW.intl.string(eW.t["9eUgwR"]) },
            ],
            D = tA.LE.has(e.type)
                ? (0, l.jsxs)(tB.B, {
                      gap: 4,
                      padding: { top: 8, bottom: 8 },
                      children: [
                          (0, l.jsx)(tH.z, {
                              label: eW.intl.string(eW.t.yLB4y2),
                              onChange: (e) => this.handleChannelRestrictionChange(e),
                              options: G,
                              value: _,
                              disabled: !s || null != e.linkedLobby || O,
                          }),
                          null != e.linkedLobby
                              ? (0, l.jsx)(M.p, { messageType: M.Y.WARNING, children: eW.intl.string(eW.t.EvavKG) })
                              : null,
                      ],
                  })
                : g
                  ? (0, l.jsx)(e6.d, {
                        label: eW.intl.string(eW.t.TvUHTb),
                        description: eW.intl.string(eW.t.ddWXHa),
                        onChange: this.handleThreadSpoilerChange,
                        checked: e.isSpoilerChannel(),
                        disabled: !s,
                    })
                  : null,
            k =
                tA.xR.has(e.type) &&
                null != d &&
                d.features.has(eZ.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, l.jsxs)(tB.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(e6.d, {
                                  label: eW.intl.string(eW.t.Au2b7m),
                                  description: eW.intl.format(eW.t.tI7KNX, {
                                      documentationLink: eB.A.getArticleURL(eZ.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === eZ.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(M.p, { messageType: M.Y.INFO, children: eW.intl.string(eW.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            P =
                tA.wE.has(e.type) && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tW.A, {
                          page: eZ.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nu, {
                              isDisabled: !s,
                              autoArchiveDuration: (0, nr.Gl)(e, null),
                              onChange: this.handleChangeDefaultAutoArchiveDuration,
                              helperText: e.isForumLikeChannel()
                                  ? eW.intl.string(eW.t.fyXclY)
                                  : eW.intl.string(eW.t.W3Noi9),
                          }),
                      })
                    : null,
            U = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(e6.d, {
                      label: eW.intl.string(eW.t.id3ozj),
                      description: eW.intl.format(eW.t.feJW1z, {
                          helpdeskArticle: eB.A.getArticleURL(eZ.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(nN.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eZ.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !d?.features.has(eZ.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            V = e.isMediaChannel()
                ? (0, l.jsx)(e6.d, {
                      label: eW.intl.string(eW.t.u8LZOt),
                      description: eW.intl.string(eW.t.J4wCc7),
                      checked: !e.hasFlag(nN.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === eZ.rbe.GUILD_CATEGORY
            ? ((i = eW.intl.string(eW.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eW.intl.string(eW.t.uyVrTN)), (n = "post-title"))
              : g
                ? ((i = eW.intl.string(eW.t.j3XWjD)), (n = "thread-name"))
                : ((i = eW.intl.string(eW.t.PVbHDl)), (n = "channel-name"));
        let B = K.A.can(tX.G2, e),
            H = B
                ? void 0
                : (function (e) {
                      let t = tX.Qr.filter((t) => !K.A.can(t, e));
                      if (0 === t.length) return;
                      let n = new Intl.ListFormat(tq.default.locale);
                      return eW.intl.formatToPlainString(eW.t.na1rJc, {
                          permissions: n.format(t.map(tQ.hx)),
                          count: t.length,
                      });
                  })(e),
            F =
                e.type === eZ.rbe.GUILD_APP && null != d
                    ? (0, l.jsx)(t$.A, {
                          guildId: d.id,
                          channelId: e.id,
                          selectedApplicationId: e.application_id,
                          onChange: this.handleChangeApplication,
                          disabled: !B,
                          helperText: H,
                      })
                    : null,
            z = u ? a : s;
        return (0, l.jsxs)(tB.B, {
            gap: 24,
            children: [
                (0, l.jsx)(tF.k, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: n,
                    autoFocus: !0,
                    disabled: !z,
                    maxLength: eZ.Ign,
                    trailing: z
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(nL, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                F,
                f,
                C,
                j,
                b,
                S,
                I,
                N,
                v,
                E,
                L,
                D,
                k,
                U,
                P,
                V,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, nm.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(tz.A, {
            label: eW.intl.string(eW.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > eZ.gp3 ? eW.intl.format(eW.t.SbQJk5, { bitrate: eZ.gp3 / 1e3 }) : void 0,
            value: Math.min(e.bitrate, i),
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            asValueChanges: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [...new Set([eZ.hcd, eZ.gp3, i])],
            minValue: eZ.hcd,
            maxValue: i,
            keyboardStep: eZ.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            tA.k.has(e.type) &&
            (e.isGuildVocal() || tx.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: eZ.K3c.AUTO, name: eW.intl.string(eW.t.jjKYpu) },
            { value: eZ.K3c.FULL, name: eW.intl.string(eW.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(tH.z, {
            label: eW.intl.string(eW.t.jhJEJs),
            helperText: eW.intl.format(eW.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? eZ.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eW.intl.string(eW.t.XX5ciX)
            : eW.intl.formatToPlainString(eW.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? eZ.RCc : eZ.cSc;
        return (0, l.jsx)(tz.A, {
            label: eW.intl.string(eW.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eW.intl.format(e.isGuildStageVoice() ? eW.t.OqZI8D : eW.t["8yb3JT"], {}),
            value: Math.min(e.userLimit, i),
            initialValue: Math.min(e.userLimit, i),
            onValueChange: this.handleUserLimitChange,
            asValueChanges: this.handleUserLimitChange,
            onValueRender: this.onRenderUserLimit,
            onMarkerRender: (e) => (0 === Math.round(e) ? "\u221E" : e),
            markers: [0, i],
            minValue: 0,
            maxValue: i,
            disabled: !t,
        });
    }
    renderRegionOverride(e) {
        let { regions: t, canManageChannels: n, guild: i } = this.props;
        if (null == i || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != t &&
            (s = t
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({ id: e.id, label: e.name, value: e.id }))).unshift({
                id: "auto",
                label: eW.intl.string(eW.t.JEmsap),
                value: nI,
            });
        let a = e.rtcRegion ?? nI;
        return (0, l.jsx)(tU.l, {
            selectionMode: "single",
            label: eW.intl.string(eW.t["Ms8bX+"]),
            description: eW.intl.string(eW.t["dbTs+z"]),
            options: s,
            value: a,
            onSelectionChange: this.handleRegionChange,
            disabled: !n,
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: i } = this.props;
        return (
            (t =
                e.type === eZ.rbe.GUILD_CATEGORY
                    ? (0, em.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, em.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(e9.A, {
                justify: e9.A.Justify.CENTER,
                className: nA.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = "channel-settings-overview-heading";
        return (0, l.jsxs)(tV.n, {
            "aria-labelledby": i,
            children: [
                (0, l.jsx)(L.D, { id: i, variant: "text-lg/medium", children: eW.intl.string(eW.t["/dp6yY"]) }),
                this.renderChannelInfo(e, t),
                this.showVoiceSettings() ? (0, l.jsx)(R.c, { gap: 24 }) : null,
                this.renderVoiceBitrate(e, n),
                this.renderVideoQualityMode(e),
                this.renderUserLimit(e),
                this.renderRegionOverride(e),
                this.renderJuiceImage(e),
            ],
        });
    }
    renderEmojiPicker = (e) => {
        let { closePopout: t } = e,
            { channel: n } = this.props;
        return (0, l.jsx)(t7.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: nv.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: nS,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nN.lx.REQUIRE_TAG, e);
        (0, d.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        e = (0, tK.A)(e, t.type);
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        (0, d.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props,
            n = this.nameInputRef.current,
            l = t?.length ?? 0,
            i = n?.selectionStart === 0 && n?.selectionEnd === l;
        if (((this.cursorPosition = i ? l : (n?.selectionStart ?? l)), e?.isThread() && null != t)) {
            let e = (0, no.A)(t, !0);
            e !== t && (0, d.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = null != t && document.activeElement === t,
            l = this.props.channelName ?? "",
            i = n ? (t.selectionStart ?? l.length) : this.cursorPosition,
            s = n ? (t.selectionEnd ?? l.length) : this.cursorPosition,
            a = l.substring(0, i) + e + l.substring(s);
        (0, d.fy)({ name: a }),
            setTimeout(() => {
                let n = i + e.length;
                (this.cursorPosition = n), t?.focus(), t?.setSelectionRange(n, n);
            }, 0);
    };
    handleChangeTopic = (e) => {
        (0, d.fy)({ topic: t4.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeRichTopic = (e, t, n) => {
        this.setState({ textTopicValue: t, richTopicValue: n }), this.handleChangeTopic(t);
    };
    handleSubmit() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    handleChangeTemplate = (e) => {
        (0, d.fy)({ template: t4.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeDefaultReactionEmoji = (e) => {
        let t =
            null == e
                ? null
                : e?.id != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence };
        (0, d.fy)({ defaultReactionEmoji: t });
    };
    handleChangeDefaultForumLayout = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, d.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e);
    };
    handleChangeDefaultSortOrder = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, d.fy)({ defaultSortOrder: e });
    };
    handleChangeDefaultTagSetting = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, d.fy)({ defaultTagSetting: e });
    };
    handleChangeApplication = (e) => {
        (0, d.fy)({ applicationId: e });
    };
    handleChangeBitrate = (e) => {
        let t = 1e3 * Math.round(e / 1e3);
        t !== this.props.channel?.bitrate && (0, d.fy)({ bitrate: t });
    };
    handleUserLimitChange = (e) => {
        let t = Math.round(e);
        t !== this.props.channel?.userLimit && (0, d.fy)({ userLimit: t });
    };
    handleChannelRestrictionChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nN.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, d.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleThreadSpoilerChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nN.lx.IS_SPOILER_CHANNEL, e);
        (0, d.fy)({ flags: n });
    };
    handleNSFWChange = (e) => {
        (0, d.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nN.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, d.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, d.fy)({ type: e ? eZ.rbe.GUILD_ANNOUNCEMENT : eZ.rbe.GUILD_TEXT });
    };
    handleChangeSlowmode = (e) => {
        (0, d.fy)({ rateLimitPerUser: e });
    };
    handleChangeThreadMessageSlowmode = (e) => {
        (0, d.fy)({ defaultThreadRateLimitPerUser: e });
    };
    handleChangeDefaultAutoArchiveDuration = (e) => {
        (0, d.fy)({ defaultAutoArchiveDuration: e });
    };
    handleRegionChange = (e) => {
        (0, d.fy)({ rtcRegion: e === nI ? null : e });
    };
    handleVideoQualityModeChange = (e) => {
        (0, d.fy)({ videoQualityMode: e });
    };
    handleAutoArchiveDurationChanged = (e) => {
        (0, d.fy)({ autoArchiveDuration: e });
    };
    handleInvitableChanged = (e) => {
        (0, d.fy)({ invitable: e });
    };
    handleChannelSummariesToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nN.lx.SUMMARIES_DISABLED, !e);
        (0, d.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nN.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, d.fy)({ flags: n });
    };
}
function nw() {
    let { errors: e, channel: t, submitting: n, subsection: a } = (0, s.cf)([eP.A], () => eP.A.getProps()),
        r = (0, s.bG)([tC.A], () => tC.A.getChannel(t?.parent_id ?? null)),
        o = (0, s.bG)([ng.A], () => ng.A.getRegions(t?.getGuildId() ?? null)),
        d = (0, s.bG)([tp.A], () => tp.A.theme),
        c = (0, s.bG)([$.A], () => $.A.getGuild(t?.getGuildId())),
        u = (0, tx.NI)(t),
        h = (0, tx.H_)(t),
        { canManageChannels: g, canSendMessages: x } = (0, s.cf)([K.A], () => ({
            canManageChannels: K.A.can(eZ.xBc.MANAGE_CHANNELS, t),
            canSendMessages: K.A.can(eZ.xBc.SEND_MESSAGES, t),
        })),
        p = (0, m.Ay)(t),
        A = nh.default.getId(),
        f = (0, t6.p)(),
        C = t?.id,
        j = (0, tY.cI)(t, !1, !0),
        b = i.useCallback(
            (e) => {
                null != C && f.getState().setLayoutType(C, e);
            },
            [C, f],
        );
    return (0, l.jsx)(nR, {
        errors: e,
        channel: t,
        parentChannel: r,
        channelName: p,
        submitting: n,
        regions: o,
        theme: d,
        guild: c,
        canManageChannels: t?.isThread() ? u : g,
        canSendMessages: x,
        isThreadModerator: h,
        canManageThread: u,
        subsection: a,
        isForumPost: null != t && t.isForumPost(),
        isOwner: t?.isOwner(A),
        handleSetDefaultLayout: b,
        showChannelSummariesSettings: j,
    });
}
var nO = n(722865);
function n_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    g.Ay.trackWithMetadata(eZ.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class nG extends i.PureComponent {
    componentDidMount() {
        n_(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        o.h.wait(() => (0, d.VN)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            {
                formState: l,
                section: i,
                canManageRoles: s,
                canManageChannels: a,
                canManageWebhooks: r,
                canUnlinkChannel: o,
            } = this.props;
        (a || s || r || o) &&
        (l !== eZ.XlH.CLOSED || l === t) &&
        (s || i !== eZ.p_A.PERMISSIONS) &&
        (r || o || i !== eZ.p_A.INTEGRATIONS)
            ? i !== n && n_(i, n)
            : (0, c.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: i,
            category: s,
            canManageRoles: o,
            canManageChannels: g,
            canDeleteChannels: p,
            canManageWebhooks: A,
            canUnlinkChannel: f,
        } = this.props;
        return null == i
            ? null
            : (0, l.jsx)(u.A, {
                  theme: e,
                  sidebarTheme: t,
                  section: n ?? eZ.p_A.OVERVIEW,
                  onSetSection: d.c4,
                  onClose: c.jH,
                  sections: (function (e) {
                      let {
                              channel: t,
                              category: n,
                              canManageRoles: i,
                              canManageChannels: s,
                              canDeleteChannels: o,
                              canManageWebhooks: u,
                              canUnlinkChannel: g,
                          } = e,
                          p = (0, x.gU)(t),
                          { GUILD_CATEGORY: A } = eZ.rbe,
                          f = tA.Le.has(t.type),
                          C =
                              t.type === A
                                  ? eW.intl.string(eW.t.ifbXnL)
                                  : f
                                    ? t.isForumPost()
                                        ? eW.intl.string(eW.t.nEOg1N)
                                        : eW.intl.string(eW.t.H7vTe2)
                                    : eW.intl.string(eW.t["8D8Rsb"]);
                      return [
                          {
                              section: h.Fq.HEADER,
                              label:
                                  null != t
                                      ? (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                null != p
                                                    ? (0, l.jsx)(p, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: nO.p,
                                                      })
                                                    : null,
                                                (0, m.m1)(t, ee.default, tj.A),
                                                null != n
                                                    ? (0, l.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: nO.L,
                                                          children: (0, m.m1)(n, ee.default, tj.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : eW.intl.string(eW.t.XPDhcc),
                          },
                          {
                              section: eZ.p_A.OVERVIEW,
                              label: eW.intl.string(eW.t["/dp6yY"]),
                              ariaLabel: eW.intl.string(eW.t["/dp6yY"]),
                              element: nw,
                              notice: { element: nM, stores: [eP.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: eZ.p_A.PERMISSIONS,
                              label: eW.intl.string(eW.t.xrmhRX),
                              element: th,
                              notice: { element: e$, stores: [X.A] },
                              predicate: () => i && !f,
                          },
                          {
                              section: eZ.p_A.INSTANT_INVITES,
                              label: eW.intl.string(eW.t["9F90ic"]),
                              element: tM,
                              type: h.Py.CUSTOM,
                              predicate: () => t.type !== A && s && !f && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eZ.p_A.INTEGRATIONS,
                              label: eW.intl.string(eW.t.s69NLF),
                              ariaLabel: eW.intl.string(eW.t.s69NLF),
                              element: ty,
                              notice: { stores: [tf.A], element: tS },
                              predicate: () => !((!u && !g) || t.isModeratorReportChannel()) && tA.oH.has(t.type),
                          },
                          { section: h.Fq.DIVIDER },
                          {
                              section: eZ.p_A.DELETE,
                              onClick() {
                                  (0, tN.O)(t, function () {
                                      tb._.subscribeOnce(eZ.jej.LAYER_POP_COMPLETE, () => {
                                          (0, d.D3)(t.id);
                                      }),
                                          (0, c.jH)();
                                  });
                              },
                              label: C,
                              ariaLabel: C,
                              icon: (0, l.jsx)(r.TrashIcon, { size: "xs", color: "currentColor" }),
                              variant: "destructive",
                              predicate: () => o && !t.isModeratorReportChannel(),
                          },
                      ];
                  })({
                      channel: i,
                      category: s,
                      canManageRoles: o,
                      canManageChannels: g,
                      canDeleteChannels: p,
                      canManageWebhooks: A,
                      canUnlinkChannel: f,
                  }),
              });
    }
}
function nD() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([eP.A], () => eP.A.getProps()),
        n = (0, s.bG)([eP.A], () => eP.A.getFormState()),
        i = (0, s.bG)([eP.A], () => eP.A.getSection()),
        a = (0, s.bG)([tp.A], () => tp.A.theme),
        r = (0, tm.NC)(),
        o = (0, tx.NI)(e),
        d = (0, tx.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, s.cf)([K.A], () => ({
            canManageChannels: K.A.can(eZ.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && K.A.can(eZ.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && K.A.can(eZ.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, tg.n)(e, K.A),
        })),
        m = (0, s.bG)([tC.A], () => tC.A.getChannel(e?.parent_id));
    return (0, l.jsx)(nG, {
        channel: e,
        category: m,
        canManageChannels: e?.isThread() ? o : c,
        canDeleteChannels: e?.isThread() ? d : c,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: n,
        theme: a,
        sidebarTheme: r,
        section: i,
        analyticsLocation: t,
    });
}
