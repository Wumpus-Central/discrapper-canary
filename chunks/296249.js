(n.r(t), n.d(t, { default: () => nQ }));
var l = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(834730),
    r = n(241326),
    o = n(73153),
    d = n(435183),
    c = n(398590),
    u = n(83257),
    h = n(361739),
    g = n(95561),
    m = n(47167),
    p = n(713654),
    x = n(503698),
    A = n.n(x),
    f = n(957485),
    C = n(97808),
    j = n(778712),
    b = n(866665),
    v = n(939249),
    N = n(285796),
    y = n(475825),
    E = n(192308),
    S = n(451394),
    T = n(821609),
    I = n(194261),
    M = n(512950),
    R = n(297264),
    L = n(404778),
    w = n(663417),
    _ = n(565787),
    O = n(157559),
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
    let { width: t = 18, height: n = 18, color: i = "currentColor", foreground: a, background: s, className: r } = e;
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
                    className: s,
                }),
                (0, l.jsx)("path", {
                    d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
                    fill: i,
                    className: a,
                }),
            ],
        }),
    });
}
var en = n(488926),
    el = n(495273),
    ei = n(99018),
    ea = n(160844),
    es = n(707554),
    er = n(559106),
    eo = n(847374);
n(321073);
var ed = n(435558),
    ec = n.n(ed),
    eu = n(136722),
    eh = n(36525),
    eg = n(113325),
    em = n(462887),
    ep = n(683071),
    ex = n(453318),
    eA = n(922016),
    ef = n(761508),
    eC = n(28863),
    ej = n(442433),
    eb = n(365199),
    ev = n(545442),
    eN = n(316710),
    ey = n(821589),
    eE = n(787565);
let eS = { XSMALL: eE.xsmall, SMALL: eE.small, MEDIUM: eE.medium, LARGE: eE.large };
class eT extends i.PureComponent {
    static Sizes = eS;
    static defaultProps = { size: eS.MEDIUM, disabled: !1 };
    state = { hovered: !1 };
    getMode = () => (null != this.props.srcHover ? "static" : "default");
    handleHover = (e) => {
        let { onMouseEnter: t } = this.props;
        (t?.(e), this.state.hovered || this.setState({ hovered: !0 }));
    };
    handleBlur = (e) => {
        let { onMouseLeave: t } = this.props;
        (t?.(e), this.state.hovered && this.setState({ hovered: !1 }));
    };
    render() {
        let { size: e, src: t, srcHover: n, className: i, ...a } = this.props,
            { hovered: s } = this.state,
            r = { backgroundImage: `url('${s && null != n ? n : t}')` },
            o = this.getMode();
        return (0, l.jsx)("button", {
            className: A()((0, ey.t)(eE, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...a,
        });
    }
}
var eI = n(967144),
    eM = n(258776);
function eR(e) {
    let { role: t, guild: a } = e,
        [s, r] = i.useState(!1);
    return (0, eN.x)(a, t)
        ? (0, l.jsx)(v.D, {
              onClick: function (e) {
                  (r(!0),
                      (0, ej.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 316710));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: a });
                          },
                          { onClose: () => r(!1) },
                      ));
              },
              className: A()(eM.X2, { [eM.ho]: s }),
              children: (0, l.jsx)(eb.MoreHorizontalIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
              }),
          })
        : null;
}
function eL(e) {
    let {
            color: t,
            id: i,
            role: a,
            guild: s,
            children: r,
            isDragging: o,
            selectedItem: d,
            onItemSelect: c,
            itemType: u,
            locked: h,
            lockTooltip: g,
            showContextMenu: m,
            theme: p,
            roleStyle: x,
            onContextMenu: A,
            "aria-label": f,
        } = e,
        C = (0, eI.X_)(s.id, a, a?.colorStrings);
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
                      "dot" === x
                          ? (0, l.jsx)(ev.W, {
                                color: t ?? void 0,
                                colors: C,
                                className: eM.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(ev.R, { color: t ?? null, colors: C, className: eM.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, em.M)(p) ? n(454554) : n(470474);
                          return (0, l.jsx)(b.m, { text: g, children: (0, l.jsx)(eT, { className: eM.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: eM.dD, children: r }),
                      m && null != a ? (0, l.jsx)(eR, { guild: s, role: a }) : null,
                  ],
              }),
          });
}
var ew = n(736653),
    e_ = n(775602),
    eO = n(861197),
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
let e$ = a.Ay.connectStores([X.A, eP.A], () => {
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
                return (null != n && e.push(n), e);
            }, []);
            (0, D.R$)(e.id, t);
        },
    };
})(eh.A);
function eK(e) {
    let { overwrite: t } = e,
        n = (0, a.bG)([X.A], () => X.A.channel),
        i = (0, a.bG)([$.A], () => (null != n ? $.A.getGuild(n.getGuildId()) : null)),
        s = (0, a.bG)([q.A], () => (null != i && null != t && t.type === k.r2.ROLE ? q.A.getRole(i.id, t.id) : void 0)),
        r = (0, U.q)(n),
        o = (0, P.HV)(n),
        d = null != t && o === t.id ? r : null;
    if (null == n || null == i || null == t) return null;
    let { guild_id: c, id: u } = n;
    function h() {
        if (null == $.A.getGuild(c)) return "";
        let e = t.type === k.r2.MEMBER ? ee.default.getUser(t.id) : void 0,
            n = e?.username ?? "";
        return null != s ? s.name : n;
    }
    function g(e, l) {
        if (null == n) return;
        if ("boolean" == typeof l) throw Error("Unexpected boolean action");
        let { allow: i, deny: a } = t;
        switch (((a = eu.TF(a, e)), (i = eu.TF(i, e)), l)) {
            case "ALLOW":
                i = eu.WQ(i, e);
                break;
            case "DENY":
                a = eu.WQ(a, e);
        }
        if (K.A.can(e, n, { [t.id]: { ...t, allow: i, deny: a } })) (0, D.LA)(n, t.id, i, a);
        else {
            var s;
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
            ((s = e),
                O.A.show({
                    title: eW.intl.string(eW.t.vElC9b),
                    body: eW.intl.format(eW.t.yslqFM, { name: s }),
                    cancelText: eW.intl.string(eW.t.psXQHP),
                    onCancel() {
                        window.open(eB.A.getArticleURL(eZ.MVz.PERMISSIONS_TUTORIAL));
                    },
                    isDismissable: !1,
                }));
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
    let p = t.id === c,
        x = o === t.id,
        A = n.isForumLikeChannel() && eu.zy(t.deny, eZ.xBc.SEND_MESSAGES),
        f = eu.zy(t.deny, eZ.xBc.SEND_MESSAGES),
        C = eu.zy(t.deny, eZ.xBc.READ_MESSAGE_HISTORY),
        j = eF.A.generateChannelPermissionSpec(c, n, p, {
            createPostsDisabled: A,
            sendMessagesDisabled: f,
            readMessageHistoryDisabled: C,
        });
    return (0, l.jsxs)(eO.Ay.Content, {
        className: eQ.uA,
        children: [
            null != d
                ? (0, l.jsx)("div", {
                      className: eQ.B2,
                      children: (0, l.jsx)(ep.w, {
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
            p || x
                ? null
                : (0, l.jsx)("div", {
                      className: eQ.O6,
                      children: (0, l.jsx)(T.$, {
                          variant: "critical-secondary",
                          text: eW.intl.format(eW.t.txPV7k, { name: h() }),
                          onClick: function () {
                              let e = h();
                              O.A.show({
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
        a = i.getAvatarURL(t, 32),
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
                    (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: A()(eq.uN, eQ.mG),
            children: [
                (0, l.jsx)(C.eu, { size: j._3.SIZE_32, src: a, "aria-label": i.username, className: eQ.RJ }),
                (0, l.jsxs)("div", {
                    className: eQ.F0,
                    children: [(0, l.jsx)(s.E, { className: eQ.F0, variant: "text-md/normal", children: d }), c],
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
        c = (0, a.bG)([q.A], () => q.A.getSortedRoles(t.id)),
        u = (0, a.yK)([Q.Ay], () => Q.Ay.getMemberIds(t.id)),
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
    return (0, l.jsx)(eg.lG, {
        className: eQ.Nd,
        children: (0, l.jsxs)(ex.iS, {
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
                    children: (0, l.jsx)(ex.a3, {
                        label: eW.intl.string(eW.t.lT5Zth),
                        placeholder: eW.intl.string(eW.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: function (e) {
                            let n = e.target.value;
                            eV.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(ex.X2, {
                    renderListItem: function (e) {
                        let { value: i } = e;
                        if (e2(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: A()(eq.uN, eQ.xf),
                                    children: [
                                        (0, l.jsx)(s.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: eQ.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(s.E, {
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
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, a.cf)([X.A], () => X.A),
        c = r?.getGuildId(),
        { guild: u, sortedGuildRoles: h } = (0, a.cf)(
            [$.A, q.A],
            () => {
                let e = null != c ? $.A.getGuild(c) : void 0,
                    t = null != e ? q.A.getSortedRoles(e.id) : void 0;
                return { guild: e, sortedGuildRoles: t };
            },
            [c],
        ),
        g = (function (e, t) {
            let n = (0, a.yK)([Q.Ay], () => Q.Ay.getMemberIds(e), [e]),
                [l, s] = i.useMemo(
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
                    s.length > 0 && null != e && eX.A.requestMembersById(e, s, !1);
                }, [s, e]),
                (0, a.yK)([ee.default], () => l.map(ee.default.getUser).filter(eU.Vq), [l])
            );
        })(c, o),
        m = (0, P.HV)(r),
        p = (0, ew.Ay)(),
        x = (0, a.bG)([e_.Ay], () => e_.Ay.roleStyle),
        A = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, ej.L3)(e, async () => {
                    let { id: e, role: i, name: a } = t,
                        s = null != u ? (0, eD.af)(u) : null,
                        o = null != i && s === i.id,
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
                                          O.A.show({
                                              title: eW.intl.string(eW.t.GuPYQB),
                                              body: eW.intl.format(eW.t.xERCnZ, { name: a }),
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
                          eL,
                          {
                              theme: p,
                              roleStyle: x,
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
        v = ec()(g)
            .sortBy((e) => e.username.toLowerCase())
            .map(function (e) {
                if (null == u) return null;
                let t = e.getAvatarURL(u.id, 24);
                return (0, l.jsx)(
                    eL,
                    {
                        id: e.id,
                        guild: u,
                        theme: p,
                        roleStyle: x,
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
    return (0, l.jsx)(eO.Ay.Sidebar, {
        className: eQ.uA,
        scrollable: !0,
        children: (0, l.jsxs)(ef.V, {
            onItemSelect: D.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, em.M)(p) ? n(546716) : n(233497)),
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
                v,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(ef.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(eC.Anchor, {
                            href: eB.A.getArticleURL(eZ.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(s.E, {
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
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, a.cf)([X.A], () => X.A);
    if (
        null == (0, a.bG)([$.A], () => (null != e ? $.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(eO.Ay, { className: eQ.kL, children: [(0, l.jsx)(e1, {}), (0, l.jsx)(eK, { overwrite: i })] });
}
var e3 = n(310578);
function e4() {
    let e = (0, a.bG)([X.A], () => X.A.advancedMode);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.c, { className: e3.BQ }),
            (0, l.jsx)(ei.EN, {
                isExpanded: e,
                onExpandedChange: D.E,
                children: (0, l.jsx)(es.F, {
                    component: (0, l.jsx)(er.vN, {
                        children: (0, l.jsx)(ea.$, {
                            slot: "trigger",
                            className: e3.hZ,
                            children: (0, l.jsxs)(s.E, {
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
var e6 = n(193249),
    e9 = n(235986),
    e8 = n(653042);
function te(e) {
    let { description: t, icon: n, id: i, label: a, onChange: r, value: o } = e;
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
                        children: (0, l.jsx)(s.E, { variant: "text-md/semibold", children: a }),
                    }),
                    null != r && null != o && (0, l.jsx)(e6.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-default", className: e8.L, children: t }),
        ],
    });
}
var tt = n(661531),
    tn = n(993077),
    tl = n(625586);
let ti = function (e) {
    let { className: t, icon: n, noticeText: i, buttonText: a, onClick: r, canSync: o } = e;
    return (0, l.jsx)(tn.Z, {
        className: A()(t, tl.N),
        children: (0, l.jsxs)(e9.A, {
            justify: e9.A.Justify.BETWEEN,
            align: e9.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: tt.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: tl.P,
                    children: (0, l.jsx)(s.E, { variant: "text-md/normal", children: i }),
                }),
                o && (0, l.jsx)(T.$, { size: "sm", variant: "secondary", onClick: r, text: a ?? void 0 }),
            ],
        }),
    });
};
var ta = n(719366),
    ts = n(818348),
    tr = n(614406);
function to(e) {
    let { channel: t, roles: n, members: i, disabledReason: a, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(y.OZ, {
        className: tr.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case ta.oO.ROLES:
                    ((c =
                        (d = n[h]).rowType === ta.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, l.jsx)(H.A, { className: tr.a, color: d.colorString, size: 20 })
                            : (0, l.jsx)(f.i, { size: "custom", className: tr.a, color: d.colorString, height: 20 })),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                c,
                                (0, l.jsx)(s.E, {
                                    variant: "text-sm/normal",
                                    color: d.disabled ? "text-muted" : "text-default",
                                    children: d.name,
                                }),
                            ],
                        })),
                        (g = d.disabled));
                    break;
                case ta.oO.MEMBERS:
                    ((d = i[h]),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(C.eu, { src: d.avatarURL, size: j._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(s.E, { variant: "text-sm/normal", children: d.name }),
                                d.bot && (0, l.jsx)(B.A, { verified: d.verifiedBot }),
                                (0, l.jsx)(s.E, {
                                    color: "text-muted",
                                    className: tr.Gq,
                                    variant: "text-xs/normal",
                                    children: d.username,
                                }),
                            ],
                        })),
                        (g = d.disabled));
                    break;
                default:
                    d = null;
            }
            if (null == d) return null;
            let m = !g && null == a && null != d.id;
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
                                (0, l.jsx)(s.E, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: el.vV(d.rowType),
                                }),
                                d.rowType !== ta.T6.EMPTY_STATE &&
                                    (0, l.jsx)(b.m, {
                                        asContainer: !0,
                                        text: a ?? r(d.rowType, d.disabled),
                                        children: (0, l.jsx)(v.D, {
                                            onClick: () => {
                                                var e, n, l;
                                                return (
                                                    m &&
                                                    null != d &&
                                                    ((e = d.id),
                                                    (n = d.name),
                                                    (l = d.rowType),
                                                    void O.A.show({
                                                        title: eW.intl.string(eW.t.GuPYQB),
                                                        body: eW.intl.format(eW.t.xERCnZ, { name: n }),
                                                        cancelText: eW.intl.string(eW.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, W.$b)(
                                                                        e,
                                                                        n === ta.T6.ROLE ? k.r2.ROLE : k.r2.MEMBER,
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
                                            children: (0, l.jsx)(N.a, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: A()(tr.Yz, { [tr._2]: g || a }),
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
                case ta.oO.ROLES:
                    return (0, l.jsx)(tu, { title: eW.intl.string(eW.t["LPJmL/"]) }, "roles-title");
                case ta.oO.MEMBERS:
                    return (0, l.jsx)(tu, { title: eW.intl.string(eW.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function td(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, a.bG)([q.A], () => q.A.getSortedRoles(t.id)),
        d = el.C$(t, o, i, Y.QY, r),
        c = (0, a.bG)([Q.Ay], () => el.Wi(Q.Ay.getMemberIds(t.id), i, t, Y.QY, { permissionUpdates: r })),
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
                            (0, l.jsx)(s.E, { variant: "text-md/semibold", children: eW.intl.string(eW.t["7BWDRb"]) }),
                            (0, l.jsx)(b.m, {
                                text: eW.intl.string(eW.t.arRuES),
                                shouldShow: !u,
                                children: (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eW.intl.string(eW.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, E.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("377476"),
                                                n.e("403032"),
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
    let { guild: t, channel: i, isPrivateGuildChannel: s, roles: r, members: o } = e,
        d = (0, a.bG)([K.A], () => K.A.can(ts.xB.ADMINISTRATOR, t)),
        c = en.MJ(ts.xB.VIEW_CHANNEL, t),
        u = en.MJ(ts.xB.ADMINISTRATOR, t);
    async function h() {
        let e = i.accessPermissions,
            a = ee.default.getCurrentUser();
        s || null == (await (0, z.D)(t.id, i.id))
            ? (el.uB(i, e, s), s || null == a || d || el.tP(i, e))
            : (0, E.openModalLazy)(async () => {
                  let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(n.bind(n, 732955));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: eW.intl.string(eW.t.ZzdgUm),
                          subtitle: eW.intl.format(eW.t.DwY2vN, {
                              onClick: () => {
                                  (Z.default.open(t.id, eZ.BEX.ONBOARDING), n.onClose());
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
            className: A()(tr.j1, { [tr.vu]: s }),
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
                    value: s,
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
                            !s &&
                            (0, l.jsx)("div", {
                                className: tr.Ux,
                                children: (0, l.jsx)(M.p, {
                                    messageType: M.Y.WARNING,
                                    children: eW.intl.string(eW.t.ZAk4Q9),
                                }),
                            }),
                        s &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: tr.MJ,
                                        children: [
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-sm/semibold",
                                                className: tr.DH,
                                                children: g.formLabel,
                                            }),
                                            (0, l.jsx)(T.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eW.intl.string(eW.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, E.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e("377476"),
                                                            n.e("403032"),
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
            (0, l.jsx)(L.c, { className: tr.yF }),
            (0, l.jsx)(R.D, { variant: "heading-sm/semibold", className: A()(tr.DH, tr.Gf), children: t }),
        ],
    });
}
let th = a.Ay.connectStores([X.A, $.A, Q.Ay, K.A, q.A, V.A], () => {
    let e,
        t = X.A.channel,
        n = X.A.category,
        l = [],
        i = [],
        a = {},
        s = !1;
    if (null != t) {
        e = $.A.getGuild(t.getGuildId());
        let n = Q.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = q.A.getSortedRoles(e.id);
            ((a = X.A.editedPermissionIds.reduce((e, t) => {
                let n = X.A.getPermissionOverwrite(t);
                return (null != n && (e[t] = n), e);
            }, {})),
                (l = el.uX(e, r, t, t.accessPermissions, a)),
                (i = el.Wi(n, t, e, t.accessPermissions, {
                    permissionUpdates: a,
                    appChannelBotUserId: (0, P.yT)(t, V.A.getApplication(t.application_id)),
                })),
                (s = el.Ae(t, a)));
        }
    }
    return {
        canSyncChannel: null != n && K.A.can(ts.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: s,
        locked: X.A.locked,
        permissionUpdates: a,
    };
})(function (e) {
    let {
        canSyncChannel: t,
        category: i,
        channel: a,
        filteredMembers: r,
        filteredRoles: o,
        guild: c,
        isPrivateGuildChannel: u,
        locked: h,
        permissionUpdates: g,
    } = e;
    if (((0, U.q)(a), null == a || null == c)) return null;
    let m = { title: eW.intl.string(eW.t.BAZMBn), subtitle: eW.intl.string(eW.t.XLrZyp) };
    return (
        a.isCategory() && ((m.title = eW.intl.string(eW.t["/uELTj"])), (m.subtitle = eW.intl.string(eW.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(R.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(s.E, { variant: "text-sm/normal", children: m.subtitle }),
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
                              icon: (0, _.k)(et),
                              noticeText: eW.intl.format(eW.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, E.openModalLazy)(async () => {
                                          let { default: e } = await n.e("687634").then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: a,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = en.s9(i, (0, P.GY)(a));
                                                      (await (0, F.n)(a, t[e].deny, t[e].allow)) &&
                                                          (0, d.RT)(a.id, { permissionOverwrites: Object.values(t) });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                a.isGuildStageVoice() ? (0, l.jsx)(td, { guild: c, channel: a, permissionUpdates: g }) : null,
                (0, l.jsx)(tc, { channel: a, guild: c, isPrivateGuildChannel: u, roles: o, members: r }),
                (0, l.jsx)(e4, {}),
            ],
        })
    );
});
var tg = n(526132),
    tm = n(97469),
    tp = n(406704),
    tx = n(363195),
    tA = n(95701),
    tf = n(291731),
    tC = n(734057),
    tj = n(994500),
    tb = n(625494),
    tv = n(608226),
    tN = n(282956),
    ty = n(860603);
function tE(e) {
    let { refToScroller: t } = e,
        n = (0, a.bG)([eP.A], () => eP.A.getChannel(), []),
        i = (0, a.bG)([$.A], () => (null != n ? $.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: s,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, a.cf)([tf.A], () => tf.A.getProps(), []);
    return null == i || null == n
        ? null
        : (0, l.jsx)(ty.A, {
              guild: i,
              channel: n,
              section: s,
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
    let { channel: e, submitting: t } = (0, a.cf)([eP.A], () => eP.A.getProps()),
        n = (0, a.bG)([tf.A], () => tf.A.editedWebhook),
        i = (0, a.bG)([$.A], () => (null != e ? $.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(eh.A, {
        submitting: t,
        onReset: function () {
            tN.A.init();
        },
        onSave: function () {
            null != i && null != n && tN.A.saveWebhook(i.id, n);
        },
    });
}
var tT = n(886235),
    tI = n(351906);
function tM() {
    let e = (0, a.bG)([tI.A], () => tI.A.hideInstantInvites),
        { channel: t, guild: n } = (0, a.cf)(
            [eP.A, $.A],
            () => {
                let { channel: e } = eP.A.getProps(),
                    t = null != e ? $.A.getGuild(e.getGuildId()) : null;
                return { channel: e, guild: t };
            },
            [],
        ),
        i = (0, a.bG)([K.A], () => null != t && K.A.can(eZ.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: s, loading: r } = (0, a.cf)([eP.A], () => eP.A.getInvites(), []);
    return (0, l.jsx)(tT.A, { invites: s, loading: r, guild: n, channel: t, canCreateInvites: i, hide: e });
}
(n(938796), n(667532));
var tR = n(371444),
    tL = n(392421),
    tw = n(602137),
    t_ = n(665260),
    tO = n(452027),
    tG = n(103557),
    tD = n(150934),
    tk = n(825484),
    tP = n(123292),
    tU = n(691885),
    tV = n(270003),
    tB = n(331322),
    tH = n(144228),
    tF = n(95477),
    tz = n(299163),
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
    t5 = n(479909),
    t1 = n(823809),
    t7 = n(375499),
    t3 = n(267889),
    t4 = n(770335),
    t6 = n(7584),
    t9 = n(422844),
    t8 = n(307301),
    ne = n(599119),
    nt = n(219504),
    nn = n(807632),
    nl = n(376310);
n(253913);
var ni = n(901748);
function na(e) {
    let { channel: t } = e,
        s = (0, a.bG)([K.A], () => K.A.can(eZ.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        o = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            s &&
                !e &&
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("143172"), n.e("347326")]).then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, s]),
        u = i.useCallback((e) => t.isGameInvitesChannel() && e.name === nn.Dg, [t]),
        h = i.useCallback(
            (e) => {
                !s ||
                    u(e) ||
                    (0, E.openModalLazy)(async () => {
                        let { default: i } = await Promise.all([n.e("143172"), n.e("347326")]).then(n.bind(n, 950989));
                        return (n) => (0, l.jsx)(i, { ...n, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [s, u, t],
        ),
        {
            handleDragStart: g,
            handleDragReset: m,
            handleDragComplete: p,
        } = (0, nt.A)(t.availableTags, (e) => {
            (0, d.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: ni._A,
        children: [
            o
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          ns,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: s,
                              onTagClick: h,
                              onDragComplete: p,
                              onDragReset: m,
                              onDragStart: g,
                              tooltipText: u(e) ? eW.intl.string(eW.t.FiKFKs) : void 0,
                          },
                          e.id,
                      ),
                  )
                : null,
            o
                ? (0, l.jsx)(v.D, {
                      onClick: c,
                      className: A()(ni.JE, { [ni.r9]: !s || r }),
                      children: (0, l.jsx)(t8.j, {
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
                      disabled: !s,
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
            onTagClick: a,
            onDragComplete: s,
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
        } = (0, ne.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: s,
            onDragReset: o,
        });
    return (0, l.jsx)("div", {
        className: A()(ni.kL, { [ni.A]: null != h && c < h, [ni.Ze]: null != h && c > h }),
        ref: (e) => {
            u(g(e));
        },
        onMouseEnter: () => m(i),
        onMouseLeave: () => m(!1),
        children: (0, l.jsx)(b.m, {
            text: d,
            asContainer: !0,
            shouldShow: null != d,
            children: (0, l.jsx)(nl.Ay, {
                tag: t,
                disabled: !i,
                ariaLabel: eW.intl.formatToPlainString(eW.t.jhSvB9, { name: t.name }),
                onClick: i ? () => a(t) : void 0,
            }),
        }),
    });
}
var nr = n(235640),
    no = n(268761),
    nd = n(474078),
    nc = n(890497),
    nu = n(580679);
let nh = function (e) {
    let { autoArchiveDuration: t, onChange: n, isDisabled: i, helperText: a } = e,
        s = (0, no.Gk)();
    return (0, l.jsx)("div", {
        className: nu.gy,
        children: (0, l.jsx)(nc.Z, {
            selectionMode: "single",
            label: eW.intl.string(eW.t.FGjMZS),
            helperText: a,
            disabled: i,
            options: s,
            value: t,
            onSelectionChange: n,
        }),
    });
};
var ng = n(75721),
    nm = n(627363),
    np = n(429913),
    nx = n(878014),
    nA = n(371169),
    nf = n(260498),
    nC = n(246338),
    nj = n(486020);
function nb(e, t, n) {
    return {
        applicationId: e,
        name: t,
        iconApplication: n ?? { id: e, icon: null },
        iconURL: n?.icon == null ? null : (nj.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 24 }) ?? null),
    };
}
var nv = n(389036);
let nN = "none";
function ny(e) {
    let { channel: t, guildId: n, onChange: i } = e;
    return (0, ng._f)(t) ? (0, l.jsx)(nE, { channel: t, guildId: n, onChange: i }) : null;
}
function nE(e) {
    let { channel: t, guildId: n, onChange: s } = e,
        r = t.application_id ?? null,
        { options: o, listState: d } = (function (e, t) {
            let { options: n, listState: l } = (function (e) {
                    i.useEffect(() => {
                        (0, nA.hF)(e);
                    }, [e]);
                    let t = (0, a.yK)([nf.Ay], () => nf.Ay.getOwnedProjects()),
                        n = (0, a.yK)([nf.Ay], () => nf.Ay.getSharedProjects(e), [e]),
                        l = i.useMemo(
                            () =>
                                (function (e, t, n) {
                                    let l = new Map();
                                    for (let i of [...e, ...t]) (0, nC.Ot)(i, n) && l.set(i.application_id, i);
                                    return [...l.values()].sort((e, t) => e.name.localeCompare(t.name));
                                })(t, n, e),
                            [t, n, e],
                        ),
                        s = i.useMemo(() => l.map((e) => e.application_id), [l]),
                        r = (0, np.A)(s, !1),
                        o = i.useRef(new Set()),
                        [d, c] = i.useState(new Set()),
                        [u, h] = i.useState(!1),
                        g = i.useMemo(() => l.filter((e, t) => !(0, nx.D)(r[t])).map((e) => e.application_id), [l, r]);
                    i.useEffect(() => {
                        let e = g.filter((e) => !o.current.has(e));
                        if (0 !== e.length) {
                            for (let t of e) o.current.add(t);
                            nm.Ay.fetchApplications(e, !0)
                                .catch(() => h(!0))
                                .finally(() => c((t) => new Set([...t, ...e])));
                        }
                    }, [g]);
                    let m = i.useMemo(() => l.filter((e, t) => (0, nx.D)(r[t])), [l, r]),
                        p = (0, a.bG)([nf.Ay], () => nf.Ay.getGuildProjectsFetchState(e), [e]),
                        x = g.some((e) => !d.has(e)),
                        A = (function (e) {
                            let { hasRows: t, loadFailed: n, fetchPhase: l } = e;
                            return t ? "rows" : n ? "failed" : "settled" !== l ? "loading" : "empty";
                        })({
                            hasRows: m.length > 0,
                            loadFailed: "error" === p || u,
                            fetchPhase:
                                "unattempted" === p ? "unattempted" : "loading" === p || x ? "pending" : "settled",
                        }),
                        f = i.useMemo(() => m.map((e) => e.preview_application_id ?? e.application_id), [m]),
                        C = (0, np.A)(f);
                    return {
                        options: i.useMemo(() => m.map((e, t) => nb(e.application_id, e.name, C[t])), [m, C]),
                        listState: A,
                    };
                })(e),
                s = null == t || n.some((e) => e.applicationId === t) ? null : t,
                r = (0, np.h)(s);
            return i.useMemo(
                () =>
                    null == s || null == r
                        ? { options: n, listState: l }
                        : { options: [nb(s, r.name, r), ...n], listState: "rows" },
                [n, l, s, r],
            );
        })(n, r),
        c = i.useMemo(
            () => [
                ...o.map((e) => {
                    let { applicationId: t, name: n, iconURL: l } = e;
                    return { id: t, label: n, value: t, leading: null != l ? { type: "image", src: l } : void 0 };
                }),
                { id: nN, label: eW.intl.string(nv.default.KEB4Rm), value: nN },
            ],
            [o],
        ),
        u = i.useCallback(
            (e) => {
                s(e === nN ? null : e);
            },
            [s],
        );
    return (0, l.jsx)(tU.l, {
        selectionMode: "single",
        label: eW.intl.string(nv.default.AdT7SZ),
        description: eW.intl.string(nv.default["wKSjL/"]),
        options: c,
        value: r ?? nN,
        onSelectionChange: u,
        loading: "loading" === d,
        helperText: "empty" === d ? eW.intl.string(nv.default["4S6iHa"]) : void 0,
        errorMessage: "failed" === d ? eW.intl.string(nv.default.X2xOBn) : void 0,
        fullWidth: !0,
    });
}
var nS = n(280450),
    nT = n(717518),
    nI = n(147036),
    nM = n(927813),
    nR = n(879631),
    nL = n(221851);
function nw(e) {
    let { label: t, helperText: n, hideLabel: a, disabled: s, value: r, onChange: o } = e,
        [d, c] = i.useState(null),
        u = i.useMemo(() => {
            let e = [...(d ?? eZ.s_7)];
            return (
                e.includes(r) || e.unshift(r), e.map((e) => ({ id: e.toString(), label: (0, nR.$)(e, !1), value: e }))
            );
        }, [d, r]),
        h = i.useCallback(
            (e) => {
                (o(e), c(null));
            },
            [o],
        ),
        g = i.useCallback((e) => {
            if ("" === e) return void c(null);
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) return void c(null);
            n <= eZ.WA1 && t.push(n);
            let l = n * nM.A.Seconds.MINUTE;
            l <= eZ.WA1 && t.push(l);
            let i = n * nM.A.Seconds.HOUR;
            (i <= eZ.WA1 && t.push(i), c(t));
        }, []),
        m = i.useCallback(() => {
            c(null);
        }, []);
    return (0, l.jsx)("div", {
        className: nL.QB,
        children: (0, l.jsx)(nc.Z, {
            selectionMode: "single",
            label: t,
            hideLabel: a,
            helperText: n,
            disabled: s,
            value: r,
            onSelectionChange: h,
            onQueryChange: (e) => g(e.target.value),
            options: u,
            onBlur: m,
            placeholder: eW.intl.string(eW.t.dBqQu4),
        }),
    });
}
var n_ = n(953727);
function nO(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, n_.A)(a),
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
function nG(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, n_.A)(a),
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
var nD = n(746080),
    nk = n(307731),
    nP = n(37411),
    nU = n(35692);
let nV = {
        popoutLocation: {
            page: eZ.liQ.CHANNEL_SETTINGS,
            section: eZ.JJy.CHANNEL_DEFAULT_REACTION,
            object: eZ.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nB = {
        popoutLocation: {
            page: eZ.liQ.CHANNEL_SETTINGS,
            section: eZ.JJy.CHANNEL_NAME,
            object: eZ.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nH = "AUTOMATIC_RTC_REGION",
    nF = a.Ay.connectStores([eP.A], () => {
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
                    userLimit: a,
                    nsfw: s,
                    flags: r,
                    rateLimitPerUser: c,
                    defaultThreadRateLimitPerUser: u,
                    threadMetadata: h,
                    defaultAutoArchiveDuration: g,
                    template: m,
                    rtcRegion: p,
                    videoQualityMode: x,
                    defaultReactionEmoji: A,
                    availableTags: f,
                    defaultSortOrder: C,
                    defaultForumLayout: j,
                    defaultTagSetting: b,
                    application_id: v,
                } = e;
                e.isThread() && 0 === (t = (0, nd.A)(t, !0)).length
                    ? o.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eW.intl.string(eW.t.uXA573) },
                      })
                    : (0, d.RT)(e.id, {
                          name: t,
                          type: n,
                          topic: l,
                          bitrate: i,
                          userLimit: a,
                          nsfw: s,
                          flags: r,
                          rateLimitPerUser: c,
                          defaultThreadRateLimitPerUser: u,
                          autoArchiveDuration: h?.autoArchiveDuration,
                          locked: h?.locked,
                          invitable: h?.invitable,
                          defaultAutoArchiveDuration: g,
                          template: m,
                          rtcRegion: p,
                          videoQualityMode: x,
                          defaultReactionEmoji: A,
                          availableTags: f,
                          defaultSortOrder: C,
                          defaultForumLayout: j,
                          defaultTagSetting: b,
                          applicationId: v,
                      });
            },
        };
    })(eh.A);
function nz(e) {
    let { onEmojiPicked: t, channel: n, guildId: a } = e,
        s = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(t3.A, {
                    channel: n,
                    guildId: a,
                    pickerIntention: nk.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        (null != n && n.type === t4.i.UNICODE && t(n.surrogates), l && i());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: nB,
                });
            },
            [n, a, t],
        );
    return (0, l.jsx)(eA.Y, {
        targetElementRef: s,
        renderPopout: r,
        animation: eA.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(t7.A, { ...e, ref: s, active: n, className: nU.Z8, tabIndex: 0 });
        },
    });
}
class nZ extends i.PureComponent {
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
        return (0, nR.$)(e * nM.A.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        let n,
            i,
            {
                canManageChannels: a,
                canSendMessages: s,
                isThreadModerator: r,
                canManageThread: o,
                guild: d,
                isForumPost: c,
                isOwner: u,
                parentChannel: h,
            } = this.props,
            g = tA.Le.has(e.type),
            m = e.isForumLikeChannel(),
            p = m && e.availableTags?.every((e) => e.moderated),
            x = ee.default.getCurrentUser()?.isStaff() === !0,
            f = (0, t1.sq)(e.type, e.topic_),
            C =
                tA.IY.has(e.type) && !f
                    ? (0, l.jsx)(tO.D, {
                          label: m ? eW.intl.string(eW.t.yR6HwZ) : eW.intl.string(eW.t.X8jMDh),
                          children: (0, l.jsx)(t5.Ay, {
                              className: A()(nU.zm, { [nU.r9]: !a }),
                              innerClassName: A()(nU.At, { [nU.r9]: !a }),
                              characterCountClassName: nU.IQ,
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
                              disabled: !a,
                              showValueWhenDisabled: !0,
                          }),
                      })
                    : null,
            j =
                m && x && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tG.f, {
                          label: eW.intl.string(eW.t.qk2jdY),
                          placeholder: eW.intl.string(eW.t.DDjD1H),
                          value: t6.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !a,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            b = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(L.c, {}),
                          (0, l.jsx)(tO.D, {
                              label: eW.intl.string(eW.t["P/y+sj"]),
                              description: eW.intl.string(eW.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(na, { channel: e }),
                          }),
                          (0, l.jsx)(tD.S, {
                              disabled: !a || p,
                              checked: e.hasFlag(nD.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eW.intl.string(eW.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            v = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(L.c, {}),
                          (0, l.jsx)(tO.D, {
                              label: eW.intl.string(eW.t["8ao1+E"]),
                              description: eW.intl.string(eW.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: nU.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: A()(nU.t0, nU._h),
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
                                                              disabled: !a,
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
                                      (0, l.jsx)(nr.A, { reactionEmoji: e.defaultReactionEmoji }),
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
                              (0, l.jsx)(L.c, {}),
                              (0, l.jsxs)("div", {
                                  className: nU.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: A()(nU.t0, nU.WC),
                                          children: (0, l.jsx)(tU.l, {
                                              selectionMode: "single",
                                              label: eW.intl.string(eW.t["kQvoC/"]),
                                              description: eW.intl.string(eW.t.mOSViT),
                                              options: [
                                                  {
                                                      id: "list",
                                                      label: eW.intl.string(eW.t["4HXEZG"]),
                                                      value: tR.C.LIST,
                                                  },
                                                  {
                                                      id: "grid",
                                                      label: eW.intl.string(eW.t["8RswJG"]),
                                                      value: tR.C.GRID,
                                                  },
                                              ],
                                              value: e.defaultForumLayout ?? tR.C.LIST,
                                              onSelectionChange: this.handleChangeDefaultForumLayout,
                                          }),
                                      }),
                                      e.defaultForumLayout === tR.C.GRID
                                          ? (0, l.jsx)(nO, { className: nU.Kf })
                                          : (0, l.jsx)(nG, { className: nU.Kf }),
                                  ],
                              }),
                              (0, l.jsx)(L.c, {}),
                          ],
                      })
                    : null,
            y =
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
                          { id: "some", label: eW.intl.string(eW.t.rQ0ctQ), value: tL.n.MATCH_SOME },
                          { id: "all", label: eW.intl.string(eW.t.FCXUu0), value: tL.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            S = g ? r : a,
            I = tA.nb.has(e.type)
                ? m
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(L.c, {}),
                              (0, l.jsxs)(tV.n, {
                                  label: eW.intl.string(eW.t.tTHx98),
                                  children: [
                                      (0, l.jsx)(nw, {
                                          label: eW.intl.string(eW.t.O1c02q),
                                          helperText: this.getSlowmodeHelpText(),
                                          value: e.rateLimitPerUser,
                                          onChange: this.handleChangeSlowmode,
                                          disabled: !S,
                                      }),
                                      (0, l.jsx)(nw, {
                                          label: eW.intl.string(eW.t["fkY5+l"]),
                                          helperText: eW.intl.string(eW.t.kdZU6H),
                                          value: e.defaultThreadRateLimitPerUser ?? 0,
                                          onChange: this.handleChangeThreadMessageSlowmode,
                                          disabled: !S,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsx)(nw, {
                          label: eW.intl.string(eW.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          value: e.rateLimitPerUser,
                          onChange: this.handleChangeSlowmode,
                          disabled: !S,
                      })
                : null,
            R =
                g && null != e.threadMetadata && !h?.isGameInvitesChannel()
                    ? (0, l.jsx)(tW.A, {
                          page: eZ.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nh, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? nP.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eW.intl.string(eW.t["3aJN9M"]) : eW.intl.string(eW.t.YUXr4Z),
                          }),
                      })
                    : null,
            w =
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
            _ = (0, tJ.Gc)(e),
            O = null != d && (0, eD.wh)(d),
            G = "none";
        _ ? (G = "nsfw") : e.isSpoilerChannel() && (G = "spoiler");
        let D = [
                { value: "none", name: eW.intl.string(eW.t.OtnNJE), desc: eW.intl.string(eW.t["a5/7hX"]) },
                { value: "spoiler", name: eW.intl.string(eW.t.TvUHTb), desc: eW.intl.string(eW.t.ddWXHa) },
                { value: "nsfw", name: eW.intl.string(eW.t.Es25Yf), desc: eW.intl.string(eW.t["9eUgwR"]) },
            ],
            k = tA.LE.has(e.type)
                ? (0, l.jsxs)(tB.B, {
                      gap: 4,
                      padding: { top: 8, bottom: 8 },
                      children: [
                          (0, l.jsx)(tH.z, {
                              label: eW.intl.string(eW.t.yLB4y2),
                              onChange: (e) => this.handleChannelRestrictionChange(e),
                              options: D,
                              value: G,
                              disabled: !a || null != e.linkedLobby || O,
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
                        disabled: !a,
                    })
                  : null,
            P =
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
                                  disabled: !a,
                              }),
                              (0, l.jsx)(M.p, { messageType: M.Y.INFO, children: eW.intl.string(eW.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            U =
                tA.wE.has(e.type) && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tW.A, {
                          page: eZ.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nh, {
                              isDisabled: !a,
                              autoArchiveDuration: (0, no.Gl)(e, null),
                              onChange: this.handleChangeDefaultAutoArchiveDuration,
                              helperText: e.isForumLikeChannel()
                                  ? eW.intl.string(eW.t.fyXclY)
                                  : eW.intl.string(eW.t.W3Noi9),
                          }),
                      })
                    : null,
            V = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(e6.d, {
                      label: eW.intl.string(eW.t.id3ozj),
                      description: eW.intl.format(eW.t.feJW1z, {
                          helpdeskArticle: eB.A.getArticleURL(eZ.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(nD.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eZ.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !a || !d?.features.has(eZ.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            B = e.isMediaChannel()
                ? (0, l.jsx)(e6.d, {
                      label: eW.intl.string(eW.t.u8LZOt),
                      description: eW.intl.string(eW.t.J4wCc7),
                      checked: !e.hasFlag(nD.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !a,
                  })
                : null;
        e.type === eZ.rbe.GUILD_CATEGORY
            ? ((i = eW.intl.string(eW.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eW.intl.string(eW.t.uyVrTN)), (n = "post-title"))
              : g
                ? ((i = eW.intl.string(eW.t.j3XWjD)), (n = "thread-name"))
                : ((i = eW.intl.string(eW.t.PVbHDl)), (n = "channel-name"));
        let H = K.A.can(tX.G2, e),
            F = H
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
            z =
                e.type !== eZ.rbe.GUILD_APP || null == d || f
                    ? null
                    : (0, l.jsx)(t$.A, {
                          guildId: d.id,
                          channelId: e.id,
                          selectedApplicationId: e.application_id,
                          onChange: this.handleChangeApplication,
                          disabled: !H,
                          helperText: F,
                      }),
            Z = u ? s : a;
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
                    disabled: !Z,
                    maxLength: eZ.Ign,
                    trailing: Z
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(nz, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                z,
                C,
                j,
                b,
                v,
                null != d
                    ? (0, l.jsx)(ny, { channel: e, guildId: d.id, onChange: this.handleChangeApplication })
                    : null,
                I,
                R,
                N,
                y,
                E,
                w,
                k,
                P,
                V,
                U,
                B,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, nI.Jz)(t, e),
            a = this.getError("bitrate");
        return (0, l.jsx)(tz.A, {
            label: eW.intl.string(eW.t.w2d0vU),
            errorMessage: "" !== a ? a : void 0,
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
            (e.isGuildVocal() || tp.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
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
        let a = [];
        null != t &&
            (a = t
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({ id: e.id, label: e.name, value: e.id }))).unshift({
                id: "auto",
                label: eW.intl.string(eW.t.JEmsap),
                value: nH,
            });
        let s = e.rtcRegion ?? nH;
        return (0, l.jsx)(tU.l, {
            selectionMode: "single",
            label: eW.intl.string(eW.t["Ms8bX+"]),
            description: eW.intl.string(eW.t["dbTs+z"]),
            options: a,
            value: s,
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
                className: nL.o9,
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
                (0, l.jsx)(R.D, { id: i, variant: "text-lg/medium", children: eW.intl.string(eW.t["/dp6yY"]) }),
                this.renderChannelInfo(e, t),
                this.showVoiceSettings() ? (0, l.jsx)(L.c, { gap: 24 }) : null,
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
        return (0, l.jsx)(t3.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                (this.handleChangeDefaultReactionEmoji(n), l && t());
            },
            pickerIntention: nk.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: nV,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, t_.lA)(t.flags, nD.lx.REQUIRE_TAG, e);
        (0, d.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        e = (0, tK.A)(e, t.type);
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        ((0, d.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0));
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props,
            n = this.nameInputRef.current,
            l = t?.length ?? 0,
            i = n?.selectionStart === 0 && n?.selectionEnd === l;
        if (((this.cursorPosition = i ? l : (n?.selectionStart ?? l)), e?.isThread() && null != t)) {
            let e = (0, nd.A)(t, !0);
            e !== t && (0, d.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = null != t && document.activeElement === t,
            l = this.props.channelName ?? "",
            i = n ? (t.selectionStart ?? l.length) : this.cursorPosition,
            a = n ? (t.selectionEnd ?? l.length) : this.cursorPosition,
            s = l.substring(0, i) + e + l.substring(a);
        ((0, d.fy)({ name: s }),
            setTimeout(() => {
                let n = i + e.length;
                ((this.cursorPosition = n), t?.focus(), t?.setSelectionRange(n, n));
            }, 0));
    };
    handleChangeTopic = (e) => {
        (0, d.fy)({ topic: t6.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeRichTopic = (e, t, n) => {
        (this.setState({ textTopicValue: t, richTopicValue: n }), this.handleChangeTopic(t));
    };
    handleSubmit() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    handleChangeTemplate = (e) => {
        (0, d.fy)({ template: t6.Ay.translateInlineEmojiToSurrogates(e) });
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
        ((0, d.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e));
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
        let n = (0, t_.lA)(t.flags, nD.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, d.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleThreadSpoilerChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, t_.lA)(t.flags, nD.lx.IS_SPOILER_CHANNEL, e);
        (0, d.fy)({ flags: n });
    };
    handleNSFWChange = (e) => {
        (0, d.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, t_.lA)(t.flags, nD.lx.ACTIVE_CHANNELS_REMOVED, !e);
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
        (0, d.fy)({ rtcRegion: e === nH ? null : e });
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
        let n = (0, t_.lA)(t.flags, nD.lx.SUMMARIES_DISABLED, !e);
        (0, d.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, t_.lA)(t.flags, nD.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, d.fy)({ flags: n });
    };
}
function nW() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, a.cf)([eP.A], () => eP.A.getProps()),
        r = (0, a.bG)([tC.A], () => tC.A.getChannel(t?.parent_id ?? null)),
        o = (0, a.bG)([nT.A], () => nT.A.getRegions(t?.getGuildId() ?? null)),
        d = (0, a.bG)([tx.A], () => tx.A.theme),
        c = (0, a.bG)([$.A], () => $.A.getGuild(t?.getGuildId())),
        u = (0, tp.NI)(t),
        h = (0, tp.H_)(t),
        { canManageChannels: g, canSendMessages: p } = (0, a.cf)([K.A], () => ({
            canManageChannels: K.A.can(eZ.xBc.MANAGE_CHANNELS, t),
            canSendMessages: K.A.can(eZ.xBc.SEND_MESSAGES, t),
        })),
        x = (0, m.Ay)(t),
        A = nS.default.getId(),
        f = (0, t9.p)(),
        C = t?.id,
        j = (0, tY.cI)(t, !1, !0),
        b = i.useCallback(
            (e) => {
                null != C && f.getState().setLayoutType(C, e);
            },
            [C, f],
        );
    return (0, l.jsx)(nZ, {
        errors: e,
        channel: t,
        parentChannel: r,
        channelName: x,
        submitting: n,
        regions: o,
        theme: d,
        guild: c,
        canManageChannels: t?.isThread() ? u : g,
        canSendMessages: p,
        isThreadModerator: h,
        canManageThread: u,
        subsection: s,
        isForumPost: null != t && t.isForumPost(),
        isOwner: t?.isOwner(A),
        handleSetDefaultLayout: b,
        showChannelSummariesSettings: j,
    });
}
var nY = n(722865);
function nJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    g.Ay.trackWithMetadata(eZ.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class nX extends i.PureComponent {
    componentDidMount() {
        nJ(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        o.h.wait(() => (0, d.VN)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            {
                formState: l,
                section: i,
                canManageRoles: a,
                canManageChannels: s,
                canManageWebhooks: r,
                canUnlinkChannel: o,
            } = this.props;
        (s || a || r || o) &&
        (l !== eZ.XlH.CLOSED || l === t) &&
        (a || i !== eZ.p_A.PERMISSIONS) &&
        (r || o || i !== eZ.p_A.INTEGRATIONS)
            ? i !== n && nJ(i, n)
            : (0, c.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: i,
            category: a,
            canManageRoles: o,
            canManageChannels: g,
            canDeleteChannels: x,
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
                              canManageChannels: a,
                              canDeleteChannels: o,
                              canManageWebhooks: u,
                              canUnlinkChannel: g,
                          } = e,
                          x = (0, p.gU)(t),
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
                                                null != x
                                                    ? (0, l.jsx)(x, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: nY.p,
                                                      })
                                                    : null,
                                                (0, m.m1)(t, ee.default, tj.A),
                                                null != n
                                                    ? (0, l.jsx)(s.E, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: nY.L,
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
                              element: nW,
                              notice: { element: nF, stores: [eP.A] },
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
                              predicate: () => t.type !== A && a && !f && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eZ.p_A.INTEGRATIONS,
                              label: eW.intl.string(eW.t.s69NLF),
                              ariaLabel: eW.intl.string(eW.t.s69NLF),
                              element: tE,
                              notice: { stores: [tf.A], element: tS },
                              predicate: () => !((!u && !g) || t.isModeratorReportChannel()) && tA.oH.has(t.type),
                          },
                          { section: h.Fq.DIVIDER },
                          {
                              section: eZ.p_A.DELETE,
                              onClick() {
                                  (0, tv.O)(t, function () {
                                      (tb._.subscribeOnce(eZ.jej.LAYER_POP_COMPLETE, () => {
                                          (0, d.D3)(t.id);
                                      }),
                                          (0, c.jH)());
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
                      category: a,
                      canManageRoles: o,
                      canManageChannels: g,
                      canDeleteChannels: x,
                      canManageWebhooks: A,
                      canUnlinkChannel: f,
                  }),
              });
    }
}
function nQ() {
    let { channel: e, analyticsLocation: t } = (0, a.cf)([eP.A], () => eP.A.getProps()),
        n = (0, a.bG)([eP.A], () => eP.A.getFormState()),
        i = (0, a.bG)([eP.A], () => eP.A.getSection()),
        s = (0, a.bG)([tx.A], () => tx.A.theme),
        r = (0, tm.NC)(),
        o = (0, tp.NI)(e),
        d = (0, tp.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, a.cf)([K.A], () => ({
            canManageChannels: K.A.can(eZ.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && K.A.can(eZ.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && K.A.can(eZ.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, tg.n)(e, K.A),
        })),
        m = (0, a.bG)([tC.A], () => tC.A.getChannel(e?.parent_id));
    return (0, l.jsx)(nX, {
        channel: e,
        category: m,
        canManageChannels: e?.isThread() ? o : c,
        canDeleteChannels: e?.isThread() ? d : c,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: n,
        theme: s,
        sidebarTheme: r,
        section: i,
        analyticsLocation: t,
    });
}
