(n.r(t), n.d(t, { default: () => nX }));
var l = n(477900),
    i = n(582128),
    a = n(17928),
    s = n(834730),
    r = n(241326),
    o = n(435183),
    d = n(398590),
    c = n(83257),
    u = n(361739),
    h = n(666860),
    g = n(47167),
    m = n(713654),
    p = n(503698),
    x = n.n(p),
    A = n(957485),
    f = n(97808),
    C = n(778712),
    j = n(866665),
    b = n(939249),
    v = n(285796),
    N = n(475825),
    y = n(192308),
    E = n(451394),
    S = n(821609),
    T = n(194261),
    I = n(512950),
    M = n(297264),
    R = n(404778),
    L = n(663417),
    w = n(565787),
    _ = n(157559),
    O = n(308528),
    G = n(702805),
    D = n(155718),
    k = n(443063),
    P = n(615606),
    U = n(587895),
    V = n(709066),
    B = n(63104),
    H = n(60868),
    F = n(894328),
    z = n(468689),
    Z = n(776781),
    W = n(233993),
    Y = n(110618),
    J = n(176360),
    X = n(696451),
    Q = n(317525),
    q = n(71393),
    $ = n(576705),
    K = n(287809);
function ee(e) {
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
var et = n(488926),
    en = n(495273),
    el = n(99018),
    ei = n(160844),
    ea = n(707554),
    es = n(559106),
    er = n(847374);
n(321073);
var eo = n(435558),
    ed = n.n(eo),
    ec = n(136722),
    eu = n(36525),
    eh = n(113325),
    eg = n(462887),
    em = n(683071),
    ep = n(453318),
    ex = n(922016),
    eA = n(761508),
    ef = n(28863),
    eC = n(442433),
    ej = n(365199),
    eb = n(545442),
    ev = n(316710),
    eN = n(821589),
    ey = n(787565);
let eE = { XSMALL: ey.xsmall, SMALL: ey.small, MEDIUM: ey.medium, LARGE: ey.large };
class eS extends i.PureComponent {
    static Sizes = eE;
    static defaultProps = { size: eE.MEDIUM, disabled: !1 };
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
            className: x()((0, eN.t)(ey, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...a,
        });
    }
}
var eT = n(967144),
    eI = n(258776);
function eM(e) {
    let { role: t, guild: a } = e,
        [s, r] = i.useState(!1);
    return (0, ev.x)(a, t)
        ? (0, l.jsx)(b.D, {
              onClick: function (e) {
                  (r(!0),
                      (0, eC.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 316710));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: a });
                          },
                          { onClose: () => r(!1) },
                      ));
              },
              className: x()(eI.X2, { [eI.ho]: s }),
              children: (0, l.jsx)(ej.MoreHorizontalIcon, {
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
        C = (0, eT.X_)(s.id, a, a?.colorStrings);
    return o
        ? (0, l.jsx)("div", { className: eI.rz })
        : (0, l.jsx)(eA.V.Item, {
              className: eI.JC,
              id: i,
              selectedItem: d,
              onItemSelect: c,
              itemType: u,
              "aria-label": null != g ? `${f}, ${g}` : f,
              onContextMenu: A,
              children: (0, l.jsxs)("div", {
                  className: eI.yl,
                  children: [
                      "dot" === x
                          ? (0, l.jsx)(eb.W, {
                                color: t ?? void 0,
                                colors: C,
                                className: eI.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(eb.R, { color: t ?? null, colors: C, className: eI.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, eg.M)(p) ? n(454554) : n(470474);
                          return (0, l.jsx)(j.m, { text: g, children: (0, l.jsx)(eS, { className: eI.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: eI.dD, children: r }),
                      m && null != a ? (0, l.jsx)(eM, { guild: s, role: a }) : null,
                  ],
              }),
          });
}
var eL = n(736653),
    ew = n(775602),
    e_ = n(861197),
    eO = n(438271),
    eG = n(260509),
    eD = n(889227),
    ek = n(863036),
    eP = n(403362),
    eU = n(695184),
    eV = n(975571),
    eB = n(562153),
    eH = n(558393),
    eF = n(427262),
    ez = n(652215),
    eZ = n(660183),
    eW = n(967829),
    eY = n.n(eW),
    eJ = n(66834),
    eX = n(60229),
    eQ = n(594615);
let eq = a.Ay.connectStores([J.A, ek.A], () => {
    let e = ek.A.getChannel();
    return {
        submitting: J.A.formState === ez.XlH.SUBMITTING,
        onReset() {
            (0, G.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = J.A.editedPermissionIds.reduce((e, t) => {
                let n = J.A.getPermissionOverwrite(t);
                return (null != n && e.push(n), e);
            }, []);
            (0, G.R$)(e.id, t);
        },
    };
})(eu.A);
function e$(e) {
    let { overwrite: t } = e,
        n = (0, a.bG)([J.A], () => J.A.channel),
        i = (0, a.bG)([q.A], () => (null != n ? q.A.getGuild(n.getGuildId()) : null)),
        s = (0, a.bG)([Q.A], () => (null != i && null != t && t.type === D.r2.ROLE ? Q.A.getRole(i.id, t.id) : void 0)),
        r = (0, P.q)(n),
        o = (0, k.HV)(n),
        d = null != t && o === t.id ? r : null;
    if (null == n || null == i || null == t) return null;
    let { guild_id: c, id: u } = n;
    function h() {
        if (null == q.A.getGuild(c)) return "";
        let e = t.type === D.r2.MEMBER ? K.default.getUser(t.id) : void 0,
            n = e?.username ?? "";
        return null != s ? s.name : n;
    }
    function g(e, l) {
        if (null == n) return;
        if ("boolean" == typeof l) throw Error("Unexpected boolean action");
        let { allow: i, deny: a } = t;
        switch (((a = ec.TF(a, e)), (i = ec.TF(i, e)), l)) {
            case "ALLOW":
                i = ec.WQ(i, e);
                break;
            case "DENY":
                a = ec.WQ(a, e);
        }
        if ($.A.can(e, n, { [t.id]: { ...t, allow: i, deny: a } })) (0, G.LA)(n, t.id, i, a);
        else {
            var s;
            let e;
            switch (t.type) {
                case D.r2.MEMBER: {
                    let n = K.default.getUser(t.id);
                    null != n && (e = eF.Ay.getName(n));
                    break;
                }
                case D.r2.ROLE: {
                    let l = q.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = Q.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                    break;
                }
                default:
                    t.type;
            }
            ((s = e),
                _.A.show({
                    title: eZ.intl.string(eZ.t.vElC9b),
                    body: eZ.intl.format(eZ.t.yslqFM, { name: s }),
                    cancelText: eZ.intl.string(eZ.t.psXQHP),
                    onCancel() {
                        window.open(eV.A.getArticleURL(ez.MVz.PERMISSIONS_TUTORIAL));
                    },
                    isDismissable: !1,
                }));
        }
    }
    function m(e) {
        if (null == n) return !1;
        let l = $.A.can(ez.xBc.ADMINISTRATOR, i) || $.A.can(ez.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
        return n.isGuildStageVoice() && W.Zq.has(e)
            ? eZ.intl.string(eZ.t.bTS5lf)
            : (0, k.Gs)(o, t.id, e)
              ? eZ.intl.string(eZ.t.yXmgpP)
              : !((!ec.aI(e, ez.xBc.MANAGE_ROLES) || l) && (null == e || $.A.can(e, i) || l)) &&
                eZ.intl.string(eZ.t.nOtPMM);
    }
    let p = t.id === c,
        x = o === t.id,
        A = n.isForumLikeChannel() && ec.zy(t.deny, ez.xBc.SEND_MESSAGES),
        f = ec.zy(t.deny, ez.xBc.SEND_MESSAGES),
        C = ec.zy(t.deny, ez.xBc.READ_MESSAGE_HISTORY),
        j = eH.A.generateChannelPermissionSpec(c, n, p, {
            createPostsDisabled: A,
            sendMessagesDisabled: f,
            readMessageHistoryDisabled: C,
        });
    return (0, l.jsxs)(e_.Ay.Content, {
        className: eX.uA,
        children: [
            null != d
                ? (0, l.jsx)("div", {
                      className: eX.B2,
                      children: (0, l.jsx)(em.w, {
                          type: "info",
                          message: eZ.intl.format(eZ.t["Xq++FA"], { appName: d.name }),
                          role: "static",
                      }),
                  })
                : null,
            j.map((e, n) =>
                (0, l.jsx)(
                    eO.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: g, permissionRender: m, className: eX.p2 },
                    n,
                ),
            ),
            p || x
                ? null
                : (0, l.jsx)("div", {
                      className: eX.O6,
                      children: (0, l.jsx)(S.$, {
                          variant: "critical-secondary",
                          text: eZ.intl.format(eZ.t.txPV7k, { name: h() }),
                          onClick: function () {
                              let e = h();
                              _.A.show({
                                  title: eZ.intl.string(eZ.t.GuPYQB),
                                  body: eZ.intl.format(eZ.t.xERCnZ, { name: e }),
                                  cancelText: eZ.intl.string(eZ.t["ETE/oC"]),
                                  onConfirm: () => O.A.clearPermissionOverwrite(u, t.id),
                              });
                          },
                      }),
                  }),
        ],
    });
}
function eK(e) {
    let { guildId: t, channelId: n, user: i } = e,
        a = i.getAvatarURL(t, 32),
        r = eB.Ay.getNickname(t, n, i),
        o = eF.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: eX.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(f.eu, {
                              className: eX.PX,
                              size: C._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: x()(eQ.uN, eX.mG),
            children: [
                (0, l.jsx)(f.eu, { size: C._3.SIZE_32, src: a, "aria-label": i.username, className: eX.RJ }),
                (0, l.jsxs)("div", {
                    className: eX.F0,
                    children: [(0, l.jsx)(s.E, { className: eX.F0, variant: "text-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function e0(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function e2(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: o, onSelect: d } = e,
        c = (0, a.bG)([Q.A], () => Q.A.getSortedRoles(t.id)),
        u = (0, a.yK)([X.Ay], () => X.Ay.getMemberIds(t.id)),
        h = i.useMemo(
            () => [
                ...c.filter((e) => null == r[e.id]),
                ...ed()(u)
                    .map(K.default.getUser)
                    .filter(eP.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [u, r, c],
        );
    return (0, l.jsx)(eh.lG, {
        className: eX.Nd,
        children: (0, l.jsxs)(ep.iS, {
            selectionMode: "single",
            onSelectionChange: function (e) {
                null != e && (e0(e) ? d(e.id, D.r2.ROLE) : e instanceof eD.A && d(e.id, D.r2.MEMBER), o());
            },
            options: h,
            formatOption: function (e) {
                return { id: e.id, value: e, label: e0(e) ? e.name : eF.Ay.getUserTag(e) };
            },
            children: [
                (0, l.jsx)("div", {
                    className: eX.ON,
                    children: (0, l.jsx)(ep.a3, {
                        label: eZ.intl.string(eZ.t.lT5Zth),
                        placeholder: eZ.intl.string(eZ.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: function (e) {
                            let n = e.target.value;
                            eU.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(ep.X2, {
                    renderListItem: function (e) {
                        let { value: i } = e;
                        if (e0(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: x()(eQ.uN, eX.xf),
                                    children: [
                                        (0, l.jsx)(s.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: eX.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: eZ.intl.string(eZ.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof eD.A) return (0, l.jsx)(eK, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function e5() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, a.cf)([J.A], () => J.A),
        c = r?.getGuildId(),
        { guild: u, sortedGuildRoles: h } = (0, a.cf)(
            [q.A, Q.A],
            () => {
                let e = null != c ? q.A.getGuild(c) : void 0,
                    t = null != e ? Q.A.getSortedRoles(e.id) : void 0;
                return { guild: e, sortedGuildRoles: t };
            },
            [c],
        ),
        g = (function (e, t) {
            let n = (0, a.yK)([X.Ay], () => X.Ay.getMemberIds(e), [e]),
                [l, s] = i.useMemo(
                    () =>
                        eY()(
                            null == t
                                ? []
                                : Object.values(t)
                                      .filter((e) => e.type === D.r2.MEMBER)
                                      .map((e) => e.id),
                            (e) => n.includes(e),
                        ),
                    [t, n],
                );
            return (
                i.useEffect(() => {
                    s.length > 0 && null != e && eJ.A.requestMembersById(e, s, !1);
                }, [s, e]),
                (0, a.yK)([K.default], () => l.map(K.default.getUser).filter(eP.Vq), [l])
            );
        })(c, o),
        m = (0, k.HV)(r),
        p = (0, eL.Ay)(),
        x = (0, a.bG)([ew.Ay], () => ew.Ay.roleStyle),
        A = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, eC.L3)(e, async () => {
                    let { id: e, role: i, name: a } = t,
                        s = null != u ? (0, eG.af)(u) : null,
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
                                          _.A.show({
                                              title: eZ.intl.string(eZ.t.GuPYQB),
                                              body: eZ.intl.format(eZ.t.xERCnZ, { name: a }),
                                              cancelText: eZ.intl.string(eZ.t["ETE/oC"]),
                                              onConfirm: () => O.A.clearPermissionOverwrite(r.id, e),
                                          });
                                      },
                        });
                });
            },
            [r, u, m],
        );
    if (null == u || null == h || null == r || null == o) return null;
    function j(e, t) {
        null != r &&
            O.A.updatePermissionOverwrite(r.id, { id: e, type: t, allow: et.x3, deny: et.x3 }).then(() => (0, G.G9)(e));
    }
    null != o && null == o[u.id] && (o[u.id] = et.xT(u.id));
    let b = h
            .filter((e) => o[e.id]?.type === D.r2.ROLE)
            .map(function (e) {
                return null == u
                    ? null
                    : (0, l.jsx)(
                          eR,
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
        v = ed()(g)
            .sortBy((e) => e.username.toLowerCase())
            .map(function (e) {
                if (null == u) return null;
                let t = e.getAvatarURL(u.id, 24);
                return (0, l.jsx)(
                    eR,
                    {
                        id: e.id,
                        guild: u,
                        theme: p,
                        roleStyle: x,
                        "aria-label": eF.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => A(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: eX.mG,
                            children: [
                                (0, l.jsx)(f.eu, {
                                    size: C._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: eX.bE,
                                }),
                                (0, l.jsx)("span", { className: eX.Xh, children: eF.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(e_.Ay.Sidebar, {
        className: eX.uA,
        scrollable: !0,
        children: (0, l.jsxs)(eA.V, {
            onItemSelect: G.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, eg.M)(p) ? n(546716) : n(233497)),
                (0, l.jsx)(ex.Y, {
                    targetElementRef: t,
                    renderPopout: function (e) {
                        let { position: t, closePopout: n } = e;
                        return null == u || null == r || null == o
                            ? null
                            : (0, l.jsx)(e2, {
                                  guild: u,
                                  channel: r,
                                  permissionOverwrites: o,
                                  position: null != t ? t : "bottom",
                                  onSelect: j,
                                  onClose: n,
                              });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (n) =>
                        (0, l.jsx)(eA.V.Header, {
                            ref: t,
                            ...n,
                            children: (0, l.jsxs)("div", {
                                className: eX.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [eZ.intl.string(eZ.t["LPJmL/"]), "/", eZ.intl.string(eZ.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: eX.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                b,
                v,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(eA.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(ef.Anchor, {
                            href: eV.A.getArticleURL(ez.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(s.E, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: eZ.intl.string(eZ.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function e1() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, a.cf)([J.A], () => J.A);
    if (
        null == (0, a.bG)([q.A], () => (null != e ? q.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(e_.Ay, { className: eX.kL, children: [(0, l.jsx)(e5, {}), (0, l.jsx)(e$, { overwrite: i })] });
}
var e7 = n(310578);
function e3() {
    let e = (0, a.bG)([J.A], () => J.A.advancedMode);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(R.c, { className: e7.BQ }),
            (0, l.jsx)(el.EN, {
                isExpanded: e,
                onExpandedChange: G.E,
                children: (0, l.jsx)(ea.F, {
                    component: (0, l.jsx)(es.vN, {
                        children: (0, l.jsx)(ei.$, {
                            slot: "trigger",
                            className: e7.hZ,
                            children: (0, l.jsxs)(s.E, {
                                variant: "text-lg/semibold",
                                className: e7.Vt,
                                children: [
                                    eZ.intl.string(eZ.t.dYRsrm),
                                    (0, l.jsx)(er.a, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        className: e7.yM,
                                    }),
                                ],
                            }),
                        }),
                    }),
                    children: (0, l.jsx)(el.kS, { className: e7.nd, children: (0, l.jsx)(e1, {}) }),
                }),
            }),
        ],
    });
}
var e4 = n(193249),
    e6 = n(235986),
    e9 = n(653042);
function e8(e) {
    let { description: t, icon: n, id: i, label: a, onChange: r, value: o } = e;
    return (0, l.jsxs)("div", {
        className: e9.U,
        children: [
            (0, l.jsxs)(e6.A, {
                justify: e6.A.Justify.BETWEEN,
                align: e6.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(e6.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(s.E, { variant: "text-md/semibold", children: a }),
                    }),
                    null != r && null != o && (0, l.jsx)(e4.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-default", className: e9.L, children: t }),
        ],
    });
}
var te = n(661531),
    tt = n(993077),
    tn = n(625586);
let tl = function (e) {
    let { className: t, icon: n, noticeText: i, buttonText: a, onClick: r, canSync: o } = e;
    return (0, l.jsx)(tt.Z, {
        className: x()(t, tn.N),
        children: (0, l.jsxs)(e6.A, {
            justify: e6.A.Justify.BETWEEN,
            align: e6.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: te.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: tn.P,
                    children: (0, l.jsx)(s.E, { variant: "text-md/normal", children: i }),
                }),
                o && (0, l.jsx)(S.$, { size: "sm", variant: "secondary", onClick: r, text: a ?? void 0 }),
            ],
        }),
    });
};
var ti = n(719366),
    ta = n(818348),
    ts = n(614406);
function tr(e) {
    let { channel: t, roles: n, members: i, disabledReason: a, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(N.OZ, {
        className: ts.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case ti.oO.ROLES:
                    ((c =
                        (d = n[h]).rowType === ti.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, l.jsx)(B.A, { className: ts.a, color: d.colorString, size: 20 })
                            : (0, l.jsx)(A.i, { size: "custom", className: ts.a, color: d.colorString, height: 20 })),
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
                case ti.oO.MEMBERS:
                    ((d = i[h]),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(f.eu, { src: d.avatarURL, size: C._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(s.E, { variant: "text-sm/normal", children: d.name }),
                                d.bot && (0, l.jsx)(V.A, { verified: d.verifiedBot }),
                                (0, l.jsx)(s.E, {
                                    color: "text-muted",
                                    className: ts.Gq,
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
                    className: ts.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: ts.z7, children: o }),
                        (0, l.jsxs)("div", {
                            className: ts.z7,
                            children: [
                                (0, l.jsx)(s.E, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: en.vV(d.rowType),
                                }),
                                d.rowType !== ti.T6.EMPTY_STATE &&
                                    (0, l.jsx)(j.m, {
                                        asContainer: !0,
                                        text: a ?? r(d.rowType, d.disabled),
                                        children: (0, l.jsx)(b.D, {
                                            onClick: () => {
                                                var e, n, l;
                                                return (
                                                    m &&
                                                    null != d &&
                                                    ((e = d.id),
                                                    (n = d.name),
                                                    (l = d.rowType),
                                                    void _.A.show({
                                                        title: eZ.intl.string(eZ.t.GuPYQB),
                                                        body: eZ.intl.format(eZ.t.xERCnZ, { name: n }),
                                                        cancelText: eZ.intl.string(eZ.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, Z.$b)(
                                                                        e,
                                                                        n === ti.T6.ROLE ? D.r2.ROLE : D.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, Z.pF)(l)
                                                                        ? O.A.clearPermissionOverwrite(t.id, l.id)
                                                                        : (0, G.R$)(t.id, [l]);
                                                                } else O.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, l),
                                                    }))
                                                );
                                            },
                                            className: ts.HI,
                                            "aria-disabled": !m,
                                            "aria-label": eZ.intl.string(eZ.t.N86XcP),
                                            children: (0, l.jsx)(v.a, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: x()(ts.Yz, { [ts._2]: g || a }),
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
                case ti.oO.ROLES:
                    return (0, l.jsx)(tc, { title: eZ.intl.string(eZ.t["LPJmL/"]) }, "roles-title");
                case ti.oO.MEMBERS:
                    return (0, l.jsx)(tc, { title: eZ.intl.string(eZ.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function to(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, a.bG)([Q.A], () => Q.A.getSortedRoles(t.id)),
        d = en.C$(t, o, i, W.QY, r),
        c = (0, a.bG)([X.Ay], () => en.Wi(X.Ay.getMemberIds(t.id), i, t, W.QY, { permissionUpdates: r })),
        u = (0, Z.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: x()(ts.j1, ts.vu),
        children: [
            (0, l.jsx)(e8, {
                label: eZ.intl.string(eZ.t.StpcFU),
                description: eZ.intl.string(eZ.t.f7VbhF),
                icon: (0, l.jsx)(E.q, {
                    size: "custom",
                    color: "currentColor",
                    className: ts.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: ts.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: ts.MJ,
                        children: [
                            (0, l.jsx)(s.E, { variant: "text-md/semibold", children: eZ.intl.string(eZ.t["7BWDRb"]) }),
                            (0, l.jsx)(j.m, {
                                text: eZ.intl.string(eZ.t.arRuES),
                                shouldShow: !u,
                                children: (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eZ.intl.string(eZ.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, y.openModalLazy)(async () => {
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
                    (0, l.jsx)(tr, {
                        channel: i,
                        roles: d,
                        members: c,
                        disabledReason: u ? null : eZ.intl.string(eZ.t.arRuES),
                        getRemoveTooltipHint: Y.Mt,
                    }),
                ],
            }),
        ],
    });
}
function td(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: s, roles: r, members: o } = e,
        d = (0, a.bG)([$.A], () => $.A.can(ta.xB.ADMINISTRATOR, t)),
        c = et.MJ(ta.xB.VIEW_CHANNEL, t),
        u = et.MJ(ta.xB.ADMINISTRATOR, t);
    async function h() {
        let e = i.accessPermissions,
            a = K.default.getCurrentUser();
        s || null == (await (0, F.D)(t.id, i.id))
            ? (en.uB(i, e, s), s || null == a || d || en.tP(i, e))
            : (0, y.openModalLazy)(async () => {
                  let { Modal: e } = await Promise.all([n.e("304823"), n.e("223976")]).then(n.bind(n, 732955));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: eZ.intl.string(eZ.t.ZzdgUm),
                          subtitle: eZ.intl.format(eZ.t.DwY2vN, {
                              onClick: () => {
                                  (z.default.open(t.id, ez.BEX.ONBOARDING), n.onClose());
                              },
                          }),
                          actions: [{ text: eZ.intl.string(eZ.t.BddRzS), onClick: n.onClose }],
                      });
              });
    }
    let g = {
        title: eZ.intl.string(eZ.t.aUI70g),
        subtitle: eZ.intl.string(eZ.t.hfbjIH),
        formLabel: eZ.intl.string(eZ.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((g.title = eZ.intl.string(eZ.t.lEPAZ5)),
              (g.subtitle = eZ.intl.string(eZ.t.RQUk61)),
              (g.formLabel = eZ.intl.string(eZ.t["8VIxJu"])))
            : i.type === ez.rbe.GUILD_VOICE && (g.subtitle = eZ.intl.string(eZ.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: x()(ts.j1, { [ts.vu]: s }),
            children: [
                (0, l.jsx)(e8, {
                    description: g.subtitle,
                    icon: (0, l.jsx)(T.LockIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: ts.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: g.title,
                    onChange: h,
                    value: s,
                }),
                (0, l.jsxs)("div", {
                    className: ts.X4,
                    children: [
                        u &&
                            (0, l.jsx)("div", {
                                className: ts.Ux,
                                children: (0, l.jsx)(I.p, {
                                    messageType: I.Y.WARNING,
                                    children: eZ.intl.string(eZ.t["5f3HIC"]),
                                }),
                            }),
                        !c &&
                            !u &&
                            !s &&
                            (0, l.jsx)("div", {
                                className: ts.Ux,
                                children: (0, l.jsx)(I.p, {
                                    messageType: I.Y.WARNING,
                                    children: eZ.intl.string(eZ.t.ZAk4Q9),
                                }),
                            }),
                        s &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ts.MJ,
                                        children: [
                                            (0, l.jsx)(M.D, {
                                                variant: "heading-sm/semibold",
                                                className: ts.DH,
                                                children: g.formLabel,
                                            }),
                                            (0, l.jsx)(S.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eZ.intl.string(eZ.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, y.openModalLazy)(async () => {
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
                                    (0, l.jsx)(tr, { channel: i, roles: r, members: o, getRemoveTooltipHint: en.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function tc(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(R.c, { className: ts.yF }),
            (0, l.jsx)(M.D, { variant: "heading-sm/semibold", className: x()(ts.DH, ts.Gf), children: t }),
        ],
    });
}
let tu = a.Ay.connectStores([J.A, q.A, X.Ay, $.A, Q.A, U.A], () => {
    let e,
        t = J.A.channel,
        n = J.A.category,
        l = [],
        i = [],
        a = {},
        s = !1;
    if (null != t) {
        e = q.A.getGuild(t.getGuildId());
        let n = X.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = Q.A.getSortedRoles(e.id);
            ((a = J.A.editedPermissionIds.reduce((e, t) => {
                let n = J.A.getPermissionOverwrite(t);
                return (null != n && (e[t] = n), e);
            }, {})),
                (l = en.uX(e, r, t, t.accessPermissions, a)),
                (i = en.Wi(n, t, e, t.accessPermissions, {
                    permissionUpdates: a,
                    appChannelBotUserId: (0, k.yT)(t, U.A.getApplication(t.application_id)),
                })),
                (s = en.Ae(t, a)));
        }
    }
    return {
        canSyncChannel: null != n && $.A.can(ta.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: s,
        locked: J.A.locked,
        permissionUpdates: a,
    };
})(function (e) {
    let {
        canSyncChannel: t,
        category: i,
        channel: a,
        filteredMembers: r,
        filteredRoles: d,
        guild: c,
        isPrivateGuildChannel: u,
        locked: h,
        permissionUpdates: g,
    } = e;
    if (((0, P.q)(a), null == a || null == c)) return null;
    let m = { title: eZ.intl.string(eZ.t.BAZMBn), subtitle: eZ.intl.string(eZ.t.XLrZyp) };
    return (
        a.isCategory() && ((m.title = eZ.intl.string(eZ.t["/uELTj"])), (m.subtitle = eZ.intl.string(eZ.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(M.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(s.E, { variant: "text-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, l.jsx)(tl, {
                              canSync: !1,
                              icon: L.RefreshIcon,
                              noticeText: eZ.intl.format(eZ.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(tl, {
                              buttonText: eZ.intl.string(eZ.t.NVwuHq),
                              canSync: !0,
                              icon: (0, w.k)(ee),
                              noticeText: eZ.intl.format(eZ.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, y.openModalLazy)(async () => {
                                          let { default: e } = await n.e("687634").then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: a,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = et.s9(i, (0, k.GY)(a));
                                                      (await (0, H.n)(a, t[e].deny, t[e].allow)) &&
                                                          (0, o.RT)(a.id, { permissionOverwrites: Object.values(t) });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                a.isGuildStageVoice() ? (0, l.jsx)(to, { guild: c, channel: a, permissionUpdates: g }) : null,
                (0, l.jsx)(td, { channel: a, guild: c, isPrivateGuildChannel: u, roles: d, members: r }),
                (0, l.jsx)(e3, {}),
            ],
        })
    );
});
var th = n(526132),
    tg = n(97469),
    tm = n(406704),
    tp = n(363195),
    tx = n(95701),
    tA = n(291731),
    tf = n(734057),
    tC = n(994500),
    tj = n(625494),
    tb = n(608226),
    tv = n(282956),
    tN = n(733105);
function ty(e) {
    let { refToScroller: t } = e,
        n = (0, a.bG)([ek.A], () => ek.A.getChannel(), []),
        i = (0, a.bG)([q.A], () => (null != n ? q.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: s,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, a.cf)([tA.A], () => tA.A.getProps(), []);
    return null == i || null == n
        ? null
        : (0, l.jsx)(tN.A, {
              guild: i,
              channel: n,
              section: s,
              sectionId: r,
              webhooks: o,
              editedWebhook: d,
              isFetchingWebhooks: c,
              hasChanges: tA.A.hasChanges,
              errors: u,
              refToScroller: t,
          });
}
function tE() {
    let { channel: e, submitting: t } = (0, a.cf)([ek.A], () => ek.A.getProps()),
        n = (0, a.bG)([tA.A], () => tA.A.editedWebhook),
        i = (0, a.bG)([q.A], () => (null != e ? q.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(eu.A, {
        submitting: t,
        onReset: function () {
            tv.A.init();
        },
        onSave: function () {
            null != i && null != n && tv.A.saveWebhook(i.id, n);
        },
    });
}
var tS = n(886235),
    tT = n(351906);
function tI() {
    let e = (0, a.bG)([tT.A], () => tT.A.hideInstantInvites),
        { channel: t, guild: n } = (0, a.cf)(
            [ek.A, q.A],
            () => {
                let { channel: e } = ek.A.getProps(),
                    t = null != e ? q.A.getGuild(e.getGuildId()) : null;
                return { channel: e, guild: t };
            },
            [],
        ),
        i = (0, a.bG)([$.A], () => null != t && $.A.can(ez.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: s, loading: r } = (0, a.cf)([ek.A], () => ek.A.getInvites(), []);
    return (0, l.jsx)(tS.A, { invites: s, loading: r, guild: n, channel: t, canCreateInvites: i, hide: e });
}
(n(938796), n(667532));
var tM = n(371444),
    tR = n(392421),
    tL = n(602137),
    tw = n(665260),
    t_ = n(452027),
    tO = n(103557),
    tG = n(150934),
    tD = n(825484),
    tk = n(123292),
    tP = n(691885),
    tU = n(270003),
    tV = n(331322),
    tB = n(144228),
    tH = n(95477),
    tF = n(299163),
    tz = n(73153),
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
    t1 = n(375499),
    t7 = n(879064),
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
        s = (0, a.bG)([$.A], () => $.A.can(ez.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        d = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            s &&
                !e &&
                (0, y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("143172"), n.e("347326")]).then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, s]),
        u = i.useCallback((e) => t.isGameInvitesChannel() && e.name === nt.Dg, [t]),
        h = i.useCallback(
            (e) => {
                !s ||
                    u(e) ||
                    (0, y.openModalLazy)(async () => {
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
        } = (0, ne.A)(t.availableTags, (e) => {
            (0, o.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: nl._A,
        children: [
            d
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          na,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: s,
                              onTagClick: h,
                              onDragComplete: p,
                              onDragReset: m,
                              onDragStart: g,
                              tooltipText: u(e) ? eZ.intl.string(eZ.t.FiKFKs) : void 0,
                          },
                          e.id,
                      ),
                  )
                : null,
            d
                ? (0, l.jsx)(b.D, {
                      onClick: c,
                      className: x()(nl.JE, { [nl.r9]: !s || r }),
                      children: (0, l.jsx)(t9.j, {
                          size: "custom",
                          "aria-label": eZ.intl.string(eZ.t["/jubeD"]),
                          color: te.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(S.$, {
                      variant: "primary",
                      text: eZ.intl.string(eZ.t["/jubeD"]),
                      disabled: !s,
                      onClick: c,
                  }),
        ],
    });
}
function na(e) {
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
        } = (0, t8.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: s,
            onDragReset: o,
        });
    return (0, l.jsx)("div", {
        className: x()(nl.kL, { [nl.A]: null != h && c < h, [nl.Ze]: null != h && c > h }),
        ref: (e) => {
            u(g(e));
        },
        onMouseEnter: () => m(i),
        onMouseLeave: () => m(!1),
        children: (0, l.jsx)(j.m, {
            text: d,
            asContainer: !0,
            shouldShow: null != d,
            children: (0, l.jsx)(nn.Ay, {
                tag: t,
                disabled: !i,
                ariaLabel: eZ.intl.formatToPlainString(eZ.t.jhSvB9, { name: t.name }),
                onClick: i ? () => a(t) : void 0,
            }),
        }),
    });
}
var ns = n(235640),
    nr = n(268761),
    no = n(474078),
    nd = n(890497),
    nc = n(580679);
let nu = function (e) {
    let { autoArchiveDuration: t, onChange: n, isDisabled: i, helperText: a } = e,
        s = (0, nr.Gk)();
    return (0, l.jsx)("div", {
        className: nc.gy,
        children: (0, l.jsx)(nd.Z, {
            selectionMode: "single",
            label: eZ.intl.string(eZ.t.FGjMZS),
            helperText: a,
            disabled: i,
            options: s,
            value: t,
            onSelectionChange: n,
        }),
    });
};
var nh = n(75721),
    ng = n(627363),
    nm = n(429913),
    np = n(878014),
    nx = n(371169),
    nA = n(42766),
    nf = n(246338),
    nC = n(486020);
function nj(e, t, n) {
    return {
        applicationId: e,
        name: t,
        iconApplication: n ?? { id: e, icon: null },
        iconURL: n?.icon == null ? null : (nC.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 24 }) ?? null),
    };
}
var nb = n(389036);
let nv = "none";
function nN(e) {
    let { channel: t, guildId: n, onChange: i } = e;
    return (0, nh._f)(t) ? (0, l.jsx)(ny, { channel: t, guildId: n, onChange: i }) : null;
}
function ny(e) {
    let { channel: t, guildId: n, onChange: s } = e,
        r = t.application_id ?? null,
        { options: o, listState: d } = (function (e, t) {
            let { options: n, listState: l } = (function (e) {
                    i.useEffect(() => {
                        (0, nx.hF)(e);
                    }, [e]);
                    let t = (0, a.yK)([nA.Ay], () => nA.Ay.getOwnedProjects()),
                        n = (0, a.yK)([nA.Ay], () => nA.Ay.getSharedProjects(e), [e]),
                        l = i.useMemo(
                            () =>
                                (function (e, t, n) {
                                    let l = new Map();
                                    for (let i of [...e, ...t]) (0, nf.Ot)(i, n) && l.set(i.application_id, i);
                                    return [...l.values()].sort((e, t) => e.name.localeCompare(t.name));
                                })(t, n, e),
                            [t, n, e],
                        ),
                        s = i.useMemo(() => l.map((e) => e.application_id), [l]),
                        r = (0, nm.A)(s, !1),
                        o = i.useRef(new Set()),
                        [d, c] = i.useState(new Set()),
                        [u, h] = i.useState(!1),
                        g = i.useMemo(() => l.filter((e, t) => !(0, np.D)(r[t])).map((e) => e.application_id), [l, r]);
                    i.useEffect(() => {
                        let e = g.filter((e) => !o.current.has(e));
                        if (0 !== e.length) {
                            for (let t of e) o.current.add(t);
                            ng.Ay.fetchApplications(e, !0)
                                .catch(() => h(!0))
                                .finally(() => c((t) => new Set([...t, ...e])));
                        }
                    }, [g]);
                    let m = i.useMemo(() => l.filter((e, t) => (0, np.D)(r[t])), [l, r]),
                        p = (0, a.bG)([nA.Ay], () => nA.Ay.getGuildProjectsFetchState(e), [e]),
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
                        C = (0, nm.A)(f);
                    return {
                        options: i.useMemo(() => m.map((e, t) => nj(e.application_id, e.name, C[t])), [m, C]),
                        listState: A,
                    };
                })(e),
                s = null == t || n.some((e) => e.applicationId === t) ? null : t,
                r = (0, nm.h)(s);
            return i.useMemo(
                () =>
                    null == s || null == r
                        ? { options: n, listState: l }
                        : { options: [nj(s, r.name, r), ...n], listState: "rows" },
                [n, l, s, r],
            );
        })(n, r),
        c = i.useMemo(
            () => [
                ...o.map((e) => {
                    let { applicationId: t, name: n, iconURL: l } = e;
                    return { id: t, label: n, value: t, leading: null != l ? { type: "image", src: l } : void 0 };
                }),
                { id: nv, label: eZ.intl.string(nb.default.KEB4Rm), value: nv },
            ],
            [o],
        ),
        u = i.useCallback(
            (e) => {
                s(e === nv ? null : e);
            },
            [s],
        );
    return (0, l.jsx)(tP.l, {
        selectionMode: "single",
        label: eZ.intl.string(nb.default.AdT7SZ),
        description: eZ.intl.string(nb.default["wKSjL/"]),
        options: c,
        value: r ?? nv,
        onSelectionChange: u,
        loading: "loading" === d,
        helperText: "empty" === d ? eZ.intl.string(nb.default["4S6iHa"]) : void 0,
        errorMessage: "failed" === d ? eZ.intl.string(nb.default.X2xOBn) : void 0,
        fullWidth: !0,
    });
}
var nE = n(280450),
    nS = n(717518),
    nT = n(147036),
    nI = n(927813),
    nM = n(879631),
    nR = n(221851);
function nL(e) {
    let { label: t, helperText: n, hideLabel: a, disabled: s, value: r, onChange: o } = e,
        [d, c] = i.useState(null),
        u = i.useMemo(() => {
            let e = [...(d ?? ez.s_7)];
            return (
                e.includes(r) || e.unshift(r), e.map((e) => ({ id: e.toString(), label: (0, nM.$)(e, !1), value: e }))
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
            n <= ez.WA1 && t.push(n);
            let l = n * nI.A.Seconds.MINUTE;
            l <= ez.WA1 && t.push(l);
            let i = n * nI.A.Seconds.HOUR;
            (i <= ez.WA1 && t.push(i), c(t));
        }, []),
        m = i.useCallback(() => {
            c(null);
        }, []);
    return (0, l.jsx)("div", {
        className: nR.QB,
        children: (0, l.jsx)(nd.Z, {
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
            placeholder: eZ.intl.string(eZ.t.dBqQu4),
        }),
    });
}
var nw = n(953727);
function n_(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nw.A)(a),
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
function nO(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...a } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nw.A)(a),
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
var nG = n(746080),
    nD = n(307731),
    nk = n(37411),
    nP = n(35692);
let nU = {
        popoutLocation: {
            page: ez.liQ.CHANNEL_SETTINGS,
            section: ez.JJy.CHANNEL_DEFAULT_REACTION,
            object: ez.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nV = {
        popoutLocation: {
            page: ez.liQ.CHANNEL_SETTINGS,
            section: ez.JJy.CHANNEL_NAME,
            object: ez.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nB = "AUTOMATIC_RTC_REGION",
    nH = a.Ay.connectStores([ek.A], () => {
        let { channel: e, submitting: t } = ek.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, o.Ts)(e.id);
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
                    rateLimitPerUser: d,
                    defaultThreadRateLimitPerUser: c,
                    threadMetadata: u,
                    defaultAutoArchiveDuration: h,
                    template: g,
                    rtcRegion: m,
                    videoQualityMode: p,
                    defaultReactionEmoji: x,
                    availableTags: A,
                    defaultSortOrder: f,
                    defaultForumLayout: C,
                    defaultTagSetting: j,
                    application_id: b,
                } = e;
                e.isThread() && 0 === (t = (0, no.A)(t, !0)).length
                    ? tz.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eZ.intl.string(eZ.t.uXA573) },
                      })
                    : (0, o.RT)(e.id, {
                          name: t,
                          type: n,
                          topic: l,
                          bitrate: i,
                          userLimit: a,
                          nsfw: s,
                          flags: r,
                          rateLimitPerUser: d,
                          defaultThreadRateLimitPerUser: c,
                          autoArchiveDuration: u?.autoArchiveDuration,
                          locked: u?.locked,
                          invitable: u?.invitable,
                          defaultAutoArchiveDuration: h,
                          template: g,
                          rtcRegion: m,
                          videoQualityMode: p,
                          defaultReactionEmoji: x,
                          availableTags: A,
                          defaultSortOrder: f,
                          defaultForumLayout: C,
                          defaultTagSetting: j,
                          applicationId: b,
                      });
            },
        };
    })(eu.A);
function nF(e) {
    let { onEmojiPicked: t, channel: n, guildId: a } = e,
        s = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(t7.A, {
                    channel: n,
                    guildId: a,
                    pickerIntention: nD.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        (null != n && n.type === t3.i.UNICODE && t(n.surrogates), l && i());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: nV,
                });
            },
            [n, a, t],
        );
    return (0, l.jsx)(ex.Y, {
        targetElementRef: s,
        renderPopout: r,
        animation: ex.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(t1.A, { ...e, ref: s, active: n, className: nP.Z8, tabIndex: 0 });
        },
    });
}
class nz extends i.PureComponent {
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
                (this.channelTopicTextAreaChannel = (0, tx.createChannelRecord)({
                    id: "1",
                    type: ez.rbe.DM,
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
            ? eZ.intl.string(eZ.t["a+1pdO"])
            : e?.isThread()
              ? eZ.intl.string(eZ.t.OMmNCv)
              : eZ.intl.string(eZ.t["HEA/DU"]);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, nM.$)(e * nI.A.Seconds.MINUTE, !0);
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
            g = tx.Le.has(e.type),
            m = e.isForumLikeChannel(),
            p = m && e.availableTags?.every((e) => e.moderated),
            A = K.default.getCurrentUser()?.isStaff() === !0,
            f = tx.IY.has(e.type)
                ? (0, l.jsx)(t_.D, {
                      label: m ? eZ.intl.string(eZ.t.yR6HwZ) : eZ.intl.string(eZ.t.X8jMDh),
                      children: (0, l.jsx)(t5.Ay, {
                          className: x()(nP.zm, { [nP.r9]: !a }),
                          innerClassName: x()(nP.At, { [nP.r9]: !a }),
                          characterCountClassName: nP.IQ,
                          maxCharacterCount: m ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eZ.intl.string(eZ.t["71fbmh"]),
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
            C =
                m && A && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tO.f, {
                          label: eZ.intl.string(eZ.t.qk2jdY),
                          placeholder: eZ.intl.string(eZ.t.DDjD1H),
                          value: t4.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !a,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            j = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(R.c, {}),
                          (0, l.jsx)(t_.D, {
                              label: eZ.intl.string(eZ.t["P/y+sj"]),
                              description: eZ.intl.string(eZ.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(ni, { channel: e }),
                          }),
                          (0, l.jsx)(tG.S, {
                              disabled: !a || p,
                              checked: e.hasFlag(nG.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eZ.intl.string(eZ.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            b = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(R.c, {}),
                          (0, l.jsx)(t_.D, {
                              label: eZ.intl.string(eZ.t["8ao1+E"]),
                              description: eZ.intl.string(eZ.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: nP.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: x()(nP.t0, nP._h),
                                          children: (0, l.jsxs)(tD.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(ex.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: ex.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(S.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eZ.intl.string(eZ.t["59QgaD"]),
                                                              disabled: !a,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(tk.Q, {
                                                            text: eZ.intl.string(eZ.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(ns.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            v =
                e.isForumChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(R.c, {}),
                              (0, l.jsxs)("div", {
                                  className: nP.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: x()(nP.t0, nP.WC),
                                          children: (0, l.jsx)(tP.l, {
                                              selectionMode: "single",
                                              label: eZ.intl.string(eZ.t["kQvoC/"]),
                                              description: eZ.intl.string(eZ.t.mOSViT),
                                              options: [
                                                  {
                                                      id: "list",
                                                      label: eZ.intl.string(eZ.t["4HXEZG"]),
                                                      value: tM.C.LIST,
                                                  },
                                                  {
                                                      id: "grid",
                                                      label: eZ.intl.string(eZ.t["8RswJG"]),
                                                      value: tM.C.GRID,
                                                  },
                                              ],
                                              value: e.defaultForumLayout ?? tM.C.LIST,
                                              onSelectionChange: this.handleChangeDefaultForumLayout,
                                          }),
                                      }),
                                      e.defaultForumLayout === tM.C.GRID
                                          ? (0, l.jsx)(n_, { className: nP.Kf })
                                          : (0, l.jsx)(nO, { className: nP.Kf }),
                                  ],
                              }),
                              (0, l.jsx)(R.c, {}),
                          ],
                      })
                    : null,
            N =
                e.isForumLikeChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tP.l, {
                          selectionMode: "single",
                          label: eZ.intl.string(eZ.t.gePre2),
                          description: eZ.intl.string(eZ.t["165cVX"]),
                          options: [
                              { id: "activity", label: eZ.intl.string(eZ.t.ElZtzj), value: tL.T.LATEST_ACTIVITY },
                              { id: "creation", label: eZ.intl.string(eZ.t.w28f3F), value: tL.T.CREATION_DATE },
                          ],
                          value: e.getDefaultSortOrder(),
                          onSelectionChange: this.handleChangeDefaultSortOrder,
                      })
                    : null,
            y = e.isForumLikeChannel()
                ? (0, l.jsx)(tP.l, {
                      selectionMode: "single",
                      label: eZ.intl.string(eZ.t.Paxaug),
                      description: eZ.intl.string(eZ.t.DqOl8J),
                      options: [
                          { id: "some", label: eZ.intl.string(eZ.t.rQ0ctQ), value: tR.n.MATCH_SOME },
                          { id: "all", label: eZ.intl.string(eZ.t.FCXUu0), value: tR.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            E = g ? r : a,
            T = tx.nb.has(e.type)
                ? m
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(R.c, {}),
                              (0, l.jsxs)(tU.n, {
                                  label: eZ.intl.string(eZ.t.tTHx98),
                                  children: [
                                      (0, l.jsx)(nL, {
                                          label: eZ.intl.string(eZ.t.O1c02q),
                                          helperText: this.getSlowmodeHelpText(),
                                          value: e.rateLimitPerUser,
                                          onChange: this.handleChangeSlowmode,
                                          disabled: !E,
                                      }),
                                      (0, l.jsx)(nL, {
                                          label: eZ.intl.string(eZ.t["fkY5+l"]),
                                          helperText: eZ.intl.string(eZ.t.kdZU6H),
                                          value: e.defaultThreadRateLimitPerUser ?? 0,
                                          onChange: this.handleChangeThreadMessageSlowmode,
                                          disabled: !E,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsx)(nL, {
                          label: eZ.intl.string(eZ.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          value: e.rateLimitPerUser,
                          onChange: this.handleChangeSlowmode,
                          disabled: !E,
                      })
                : null,
            M =
                g && null != e.threadMetadata && !h?.isGameInvitesChannel()
                    ? (0, l.jsx)(tW.A, {
                          page: ez.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nu, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? nk.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eZ.intl.string(eZ.t["3aJN9M"]) : eZ.intl.string(eZ.t.YUXr4Z),
                          }),
                      })
                    : null,
            L =
                e.type === ez.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(e4.d, {
                              label: eZ.intl.string(eZ.t.s2rpNf),
                              description: eZ.intl.string(eZ.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            w = (0, tJ.Gc)(e),
            _ = null != d && (0, eG.wh)(d),
            O = "none";
        w ? (O = "nsfw") : e.isSpoilerChannel() && (O = "spoiler");
        let G = [
                { value: "none", name: eZ.intl.string(eZ.t.OtnNJE), desc: eZ.intl.string(eZ.t["a5/7hX"]) },
                { value: "spoiler", name: eZ.intl.string(eZ.t.TvUHTb), desc: eZ.intl.string(eZ.t.ddWXHa) },
                { value: "nsfw", name: eZ.intl.string(eZ.t.Es25Yf), desc: eZ.intl.string(eZ.t["9eUgwR"]) },
            ],
            D = tx.LE.has(e.type)
                ? (0, l.jsxs)(tV.B, {
                      gap: 4,
                      padding: { top: 8, bottom: 8 },
                      children: [
                          (0, l.jsx)(tB.z, {
                              label: eZ.intl.string(eZ.t.yLB4y2),
                              onChange: (e) => this.handleChannelRestrictionChange(e),
                              options: G,
                              value: O,
                              disabled: !a || null != e.linkedLobby || _,
                          }),
                          null != e.linkedLobby
                              ? (0, l.jsx)(I.p, { messageType: I.Y.WARNING, children: eZ.intl.string(eZ.t.EvavKG) })
                              : null,
                      ],
                  })
                : g
                  ? (0, l.jsx)(e4.d, {
                        label: eZ.intl.string(eZ.t.TvUHTb),
                        description: eZ.intl.string(eZ.t.ddWXHa),
                        onChange: this.handleThreadSpoilerChange,
                        checked: e.isSpoilerChannel(),
                        disabled: !a,
                    })
                  : null,
            k =
                tx.xR.has(e.type) &&
                null != d &&
                d.features.has(ez.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, l.jsxs)(tV.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(e4.d, {
                                  label: eZ.intl.string(eZ.t.Au2b7m),
                                  description: eZ.intl.format(eZ.t.tI7KNX, {
                                      documentationLink: eV.A.getArticleURL(ez.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === ez.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !a,
                              }),
                              (0, l.jsx)(I.p, { messageType: I.Y.INFO, children: eZ.intl.string(eZ.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            P =
                tx.wE.has(e.type) && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tW.A, {
                          page: ez.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nu, {
                              isDisabled: !a,
                              autoArchiveDuration: (0, nr.Gl)(e, null),
                              onChange: this.handleChangeDefaultAutoArchiveDuration,
                              helperText: e.isForumLikeChannel()
                                  ? eZ.intl.string(eZ.t.fyXclY)
                                  : eZ.intl.string(eZ.t.W3Noi9),
                          }),
                      })
                    : null,
            U = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(e4.d, {
                      label: eZ.intl.string(eZ.t.id3ozj),
                      description: eZ.intl.format(eZ.t.feJW1z, {
                          helpdeskArticle: eV.A.getArticleURL(ez.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(nG.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(ez.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !a || !d?.features.has(ez.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            V = e.isMediaChannel()
                ? (0, l.jsx)(e4.d, {
                      label: eZ.intl.string(eZ.t.u8LZOt),
                      description: eZ.intl.string(eZ.t.J4wCc7),
                      checked: !e.hasFlag(nG.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !a,
                  })
                : null;
        e.type === ez.rbe.GUILD_CATEGORY
            ? ((i = eZ.intl.string(eZ.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eZ.intl.string(eZ.t.uyVrTN)), (n = "post-title"))
              : g
                ? ((i = eZ.intl.string(eZ.t.j3XWjD)), (n = "thread-name"))
                : ((i = eZ.intl.string(eZ.t.PVbHDl)), (n = "channel-name"));
        let B = $.A.can(tX.G2, e),
            H = B
                ? void 0
                : (function (e) {
                      let t = tX.Qr.filter((t) => !$.A.can(t, e));
                      if (0 === t.length) return;
                      let n = new Intl.ListFormat(tq.default.locale);
                      return eZ.intl.formatToPlainString(eZ.t.na1rJc, {
                          permissions: n.format(t.map(tQ.hx)),
                          count: t.length,
                      });
                  })(e),
            F =
                e.type === ez.rbe.GUILD_APP && null != d
                    ? (0, l.jsx)(t$.A, {
                          guildId: d.id,
                          channelId: e.id,
                          selectedApplicationId: e.application_id,
                          onChange: this.handleChangeApplication,
                          disabled: !B,
                          helperText: H,
                      })
                    : null,
            z = u ? s : a;
        return (0, l.jsxs)(tV.B, {
            gap: 24,
            children: [
                (0, l.jsx)(tH.k, {
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
                    maxLength: ez.Ign,
                    trailing: z
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(nF, {
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
                null != d
                    ? (0, l.jsx)(nN, { channel: e, guildId: d.id, onChange: this.handleChangeApplication })
                    : null,
                T,
                M,
                v,
                N,
                y,
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
        let i = (0, nT.Jz)(t, e),
            a = this.getError("bitrate");
        return (0, l.jsx)(tF.A, {
            label: eZ.intl.string(eZ.t.w2d0vU),
            errorMessage: "" !== a ? a : void 0,
            helperText: i > ez.gp3 ? eZ.intl.format(eZ.t.SbQJk5, { bitrate: ez.gp3 / 1e3 }) : void 0,
            value: Math.min(e.bitrate, i),
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            asValueChanges: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [...new Set([ez.hcd, ez.gp3, i])],
            minValue: ez.hcd,
            maxValue: i,
            keyboardStep: ez.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            tx.k.has(e.type) &&
            (e.isGuildVocal() || tm.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: ez.K3c.AUTO, name: eZ.intl.string(eZ.t.jjKYpu) },
            { value: ez.K3c.FULL, name: eZ.intl.string(eZ.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(tB.z, {
            label: eZ.intl.string(eZ.t.jhJEJs),
            helperText: eZ.intl.format(eZ.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? ez.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eZ.intl.string(eZ.t.XX5ciX)
            : eZ.intl.formatToPlainString(eZ.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? ez.RCc : ez.cSc;
        return (0, l.jsx)(tF.A, {
            label: eZ.intl.string(eZ.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eZ.intl.format(e.isGuildStageVoice() ? eZ.t.OqZI8D : eZ.t["8yb3JT"], {}),
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
                label: eZ.intl.string(eZ.t.JEmsap),
                value: nB,
            });
        let s = e.rtcRegion ?? nB;
        return (0, l.jsx)(tP.l, {
            selectionMode: "single",
            label: eZ.intl.string(eZ.t["Ms8bX+"]),
            description: eZ.intl.string(eZ.t["dbTs+z"]),
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
                e.type === ez.rbe.GUILD_CATEGORY
                    ? (0, eg.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, eg.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(e6.A, {
                justify: e6.A.Justify.CENTER,
                className: nR.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = "channel-settings-overview-heading";
        return (0, l.jsxs)(tU.n, {
            "aria-labelledby": i,
            children: [
                (0, l.jsx)(M.D, { id: i, variant: "text-lg/medium", children: eZ.intl.string(eZ.t["/dp6yY"]) }),
                this.renderChannelInfo(e, t),
                this.showVoiceSettings() ? (0, l.jsx)(R.c, { gap: 24 }) : null,
                this.renderVoiceBitrate(e, n),
                this.renderVideoQualityMode(e),
                this.renderUserLimit(e),
                this.renderRegionOverride(e),
                !e.isGuildVoice() && this.renderJuiceImage(e),
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
                (this.handleChangeDefaultReactionEmoji(n), l && t());
            },
            pickerIntention: nD.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: nU,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tw.lA)(t.flags, nG.lx.REQUIRE_TAG, e);
        (0, o.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        e = (0, tK.A)(e, t.type);
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        ((0, o.fy)({ name: e }),
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
            let e = (0, no.A)(t, !0);
            e !== t && (0, o.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = null != t && document.activeElement === t,
            l = this.props.channelName ?? "",
            i = n ? (t.selectionStart ?? l.length) : this.cursorPosition,
            a = n ? (t.selectionEnd ?? l.length) : this.cursorPosition,
            s = l.substring(0, i) + e + l.substring(a);
        ((0, o.fy)({ name: s }),
            setTimeout(() => {
                let n = i + e.length;
                ((this.cursorPosition = n), t?.focus(), t?.setSelectionRange(n, n));
            }, 0));
    };
    handleChangeTopic = (e) => {
        (0, o.fy)({ topic: t4.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, o.fy)({ template: t4.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeDefaultReactionEmoji = (e) => {
        let t =
            null == e
                ? null
                : e?.id != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence };
        (0, o.fy)({ defaultReactionEmoji: t });
    };
    handleChangeDefaultForumLayout = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        ((0, o.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e));
    };
    handleChangeDefaultSortOrder = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, o.fy)({ defaultSortOrder: e });
    };
    handleChangeDefaultTagSetting = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, o.fy)({ defaultTagSetting: e });
    };
    handleChangeApplication = (e) => {
        (0, o.fy)({ applicationId: e });
    };
    handleChangeBitrate = (e) => {
        let t = 1e3 * Math.round(e / 1e3);
        t !== this.props.channel?.bitrate && (0, o.fy)({ bitrate: t });
    };
    handleUserLimitChange = (e) => {
        let t = Math.round(e);
        t !== this.props.channel?.userLimit && (0, o.fy)({ userLimit: t });
    };
    handleChannelRestrictionChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tw.lA)(t.flags, nG.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, o.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleThreadSpoilerChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tw.lA)(t.flags, nG.lx.IS_SPOILER_CHANNEL, e);
        (0, o.fy)({ flags: n });
    };
    handleNSFWChange = (e) => {
        (0, o.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tw.lA)(t.flags, nG.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, o.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, o.fy)({ type: e ? ez.rbe.GUILD_ANNOUNCEMENT : ez.rbe.GUILD_TEXT });
    };
    handleChangeSlowmode = (e) => {
        (0, o.fy)({ rateLimitPerUser: e });
    };
    handleChangeThreadMessageSlowmode = (e) => {
        (0, o.fy)({ defaultThreadRateLimitPerUser: e });
    };
    handleChangeDefaultAutoArchiveDuration = (e) => {
        (0, o.fy)({ defaultAutoArchiveDuration: e });
    };
    handleRegionChange = (e) => {
        (0, o.fy)({ rtcRegion: e === nB ? null : e });
    };
    handleVideoQualityModeChange = (e) => {
        (0, o.fy)({ videoQualityMode: e });
    };
    handleAutoArchiveDurationChanged = (e) => {
        (0, o.fy)({ autoArchiveDuration: e });
    };
    handleInvitableChanged = (e) => {
        (0, o.fy)({ invitable: e });
    };
    handleChannelSummariesToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tw.lA)(t.flags, nG.lx.SUMMARIES_DISABLED, !e);
        (0, o.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tw.lA)(t.flags, nG.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, o.fy)({ flags: n });
    };
}
function nZ() {
    let { errors: e, channel: t, submitting: n, subsection: s } = (0, a.cf)([ek.A], () => ek.A.getProps()),
        r = (0, a.bG)([tf.A], () => tf.A.getChannel(t?.parent_id ?? null)),
        o = (0, a.bG)([nS.A], () => nS.A.getRegions(t?.getGuildId() ?? null)),
        d = (0, a.bG)([tp.A], () => tp.A.theme),
        c = (0, a.bG)([q.A], () => q.A.getGuild(t?.getGuildId())),
        u = (0, tm.NI)(t),
        h = (0, tm.H_)(t),
        { canManageChannels: m, canSendMessages: p } = (0, a.cf)([$.A], () => ({
            canManageChannels: $.A.can(ez.xBc.MANAGE_CHANNELS, t),
            canSendMessages: $.A.can(ez.xBc.SEND_MESSAGES, t),
        })),
        x = (0, g.Ay)(t),
        A = nE.default.getId(),
        f = (0, t6.p)(),
        C = t?.id,
        j = (0, tY.cI)(t, !1, !0),
        b = i.useCallback(
            (e) => {
                null != C && f.getState().setLayoutType(C, e);
            },
            [C, f],
        );
    return (0, l.jsx)(nz, {
        errors: e,
        channel: t,
        parentChannel: r,
        channelName: x,
        submitting: n,
        regions: o,
        theme: d,
        guild: c,
        canManageChannels: t?.isThread() ? u : m,
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
var nW = n(722865);
function nY(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.Ay.trackWithMetadata(ez.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class nJ extends i.PureComponent {
    componentDidMount() {
        nY(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        (0, o.VN)();
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
        (l !== ez.XlH.CLOSED || l === t) &&
        (a || i !== ez.p_A.PERMISSIONS) &&
        (r || o || i !== ez.p_A.INTEGRATIONS)
            ? i !== n && nY(i, n)
            : (0, d.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: i,
            category: a,
            canManageRoles: h,
            canManageChannels: p,
            canDeleteChannels: x,
            canManageWebhooks: A,
            canUnlinkChannel: f,
        } = this.props;
        return null == i
            ? null
            : (0, l.jsx)(c.A, {
                  theme: e,
                  sidebarTheme: t,
                  section: n ?? ez.p_A.OVERVIEW,
                  onSetSection: o.c4,
                  onClose: d.jH,
                  sections: (function (e) {
                      let {
                              channel: t,
                              category: n,
                              canManageRoles: i,
                              canManageChannels: a,
                              canDeleteChannels: c,
                              canManageWebhooks: h,
                              canUnlinkChannel: p,
                          } = e,
                          x = (0, m.gU)(t),
                          { GUILD_CATEGORY: A } = ez.rbe,
                          f = tx.Le.has(t.type),
                          C =
                              t.type === A
                                  ? eZ.intl.string(eZ.t.ifbXnL)
                                  : f
                                    ? t.isForumPost()
                                        ? eZ.intl.string(eZ.t.nEOg1N)
                                        : eZ.intl.string(eZ.t.H7vTe2)
                                    : eZ.intl.string(eZ.t["8D8Rsb"]);
                      return [
                          {
                              section: u.Fq.HEADER,
                              label:
                                  null != t
                                      ? (0, l.jsxs)(l.Fragment, {
                                            children: [
                                                null != x
                                                    ? (0, l.jsx)(x, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: nW.p,
                                                      })
                                                    : null,
                                                (0, g.m1)(t, K.default, tC.A),
                                                null != n
                                                    ? (0, l.jsx)(s.E, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: nW.L,
                                                          children: (0, g.m1)(n, K.default, tC.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : eZ.intl.string(eZ.t.XPDhcc),
                          },
                          {
                              section: ez.p_A.OVERVIEW,
                              label: eZ.intl.string(eZ.t["/dp6yY"]),
                              ariaLabel: eZ.intl.string(eZ.t["/dp6yY"]),
                              element: nZ,
                              notice: { element: nH, stores: [ek.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: ez.p_A.PERMISSIONS,
                              label: eZ.intl.string(eZ.t.xrmhRX),
                              element: tu,
                              notice: { element: eq, stores: [J.A] },
                              predicate: () => i && !f,
                          },
                          {
                              section: ez.p_A.INSTANT_INVITES,
                              label: eZ.intl.string(eZ.t["9F90ic"]),
                              element: tI,
                              type: u.Py.CUSTOM,
                              predicate: () => t.type !== A && a && !f && !t.isModeratorReportChannel(),
                          },
                          {
                              section: ez.p_A.INTEGRATIONS,
                              label: eZ.intl.string(eZ.t.s69NLF),
                              ariaLabel: eZ.intl.string(eZ.t.s69NLF),
                              element: ty,
                              notice: { stores: [tA.A], element: tE },
                              predicate: () => !((!h && !p) || t.isModeratorReportChannel()) && tx.oH.has(t.type),
                          },
                          { section: u.Fq.DIVIDER },
                          {
                              section: ez.p_A.DELETE,
                              onClick() {
                                  (0, tb.O)(t, function () {
                                      (tj._.subscribeOnce(ez.jej.LAYER_POP_COMPLETE, () => {
                                          (0, o.D3)(t.id);
                                      }),
                                          (0, d.jH)());
                                  });
                              },
                              label: C,
                              ariaLabel: C,
                              icon: (0, l.jsx)(r.TrashIcon, { size: "xs", color: "currentColor" }),
                              variant: "destructive",
                              predicate: () => c && !t.isModeratorReportChannel(),
                          },
                      ];
                  })({
                      channel: i,
                      category: a,
                      canManageRoles: h,
                      canManageChannels: p,
                      canDeleteChannels: x,
                      canManageWebhooks: A,
                      canUnlinkChannel: f,
                  }),
              });
    }
}
function nX() {
    let { channel: e, analyticsLocation: t } = (0, a.cf)([ek.A], () => ek.A.getProps()),
        n = (0, a.bG)([ek.A], () => ek.A.getFormState()),
        i = (0, a.bG)([ek.A], () => ek.A.getSection()),
        s = (0, a.bG)([tp.A], () => tp.A.theme),
        r = (0, tg.NC)(),
        o = (0, tm.NI)(e),
        d = (0, tm.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, a.cf)([$.A], () => ({
            canManageChannels: $.A.can(ez.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && $.A.can(ez.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && $.A.can(ez.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, th.n)(e, $.A),
        })),
        m = (0, a.bG)([tf.A], () => tf.A.getChannel(e?.parent_id));
    return (0, l.jsx)(nJ, {
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
