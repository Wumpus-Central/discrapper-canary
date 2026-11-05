(n.r(t), n.d(t, { default: () => nY }));
var l = n(477900),
    i = n(582128),
    s = n(855986),
    a = n(834730),
    r = n(241326),
    o = n(435183),
    d = n(398590),
    c = n(83257),
    u = n(361739),
    h = n(149468),
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
    y = n(475825),
    E = n(192308),
    N = n(451394),
    S = n(821609),
    T = n(194261),
    I = n(683071),
    M = n(534514),
    L = n(404778),
    R = n(663417),
    w = n(565787),
    _ = n(157559),
    O = n(308528),
    G = n(702805),
    D = n(155718),
    k = n(443063),
    P = n(615606),
    U = n(587895),
    H = n(709066),
    V = n(63104),
    B = n(60868),
    F = n(894328),
    Z = n(727419),
    z = n(776781),
    W = n(233993),
    X = n(110618),
    J = n(176360),
    Q = n(696451),
    Y = n(317525),
    q = n(71393),
    $ = n(576705),
    K = n(287809);
function ee(e) {
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
var et = n(488926),
    en = n(495273),
    el = n(101396),
    ei = n(51340),
    es = n(707554),
    ea = n(559106),
    er = n(847374);
n(321073);
var eo = n(435558),
    ed = n.n(eo),
    ec = n(136722),
    eu = n(36525),
    eh = n(113325),
    eg = n(462887),
    em = n(873200),
    ep = n(265872),
    ex = n(761508),
    eA = n(28863),
    ef = n(442433),
    eC = n(365199),
    ej = n(545442),
    eb = n(396704),
    ev = n(821589),
    ey = n(787565);
let eE = { XSMALL: ey.xsmall, SMALL: ey.small, MEDIUM: ey.medium, LARGE: ey.large };
class eN extends i.PureComponent {
    static Sizes = eE;
    static defaultProps = { size: eE.MEDIUM, disabled: !1 };
    state = { hovered: !1 };
    getMode = () => (null != this.props.srcHover ? "static" : "default");
    setHovered(e) {
        this.state.hovered !== e && this.setState({ hovered: e });
    }
    handleMouseEnter = (e) => {
        let { onMouseEnter: t } = this.props;
        (t?.(e), this.setHovered(!0));
    };
    handleMouseLeave = (e) => {
        let { onMouseLeave: t } = this.props;
        (t?.(e), this.setHovered(!1));
    };
    handleFocus = () => {
        this.setHovered(!0);
    };
    handleBlur = () => {
        this.setHovered(!1);
    };
    render() {
        let { size: e, src: t, srcHover: n, className: i, ...s } = this.props,
            { hovered: a } = this.state,
            r = { backgroundImage: `url('${a && null != n ? n : t}')` },
            o = this.getMode();
        return (0, l.jsx)("button", {
            className: x()((0, ev.t)(ey, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleMouseEnter,
            onFocus: this.handleFocus,
            onMouseLeave: this.handleMouseLeave,
            onBlur: this.handleBlur,
            ...s,
        });
    }
}
var eS = n(967144),
    eT = n(258776);
function eI(e) {
    let { role: t, guild: s } = e,
        [a, r] = i.useState(!1);
    return (0, eb.x)(s, t)
        ? (0, l.jsx)(b.D, {
              onClick: function (e) {
                  (r(!0),
                      (0, ef.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 396704));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: s });
                          },
                          { onClose: () => r(!1) },
                      ));
              },
              className: x()(eT.X2, { [eT.ho]: a }),
              children: (0, l.jsx)(eC.MoreHorizontalIcon, {
                  size: "custom",
                  color: "currentColor",
                  width: 20,
                  height: 20,
              }),
          })
        : null;
}
function eM(e) {
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
            theme: p,
            roleStyle: x,
            onContextMenu: A,
            "aria-label": f,
        } = e,
        C = (0, eS.X_)(a.id, s, s?.colorStrings);
    return o
        ? (0, l.jsx)("div", { className: eT.rz })
        : (0, l.jsx)(ex.V.Item, {
              className: eT.JC,
              id: i,
              selectedItem: d,
              onItemSelect: c,
              itemType: u,
              "aria-label": null != g ? `${f}, ${g}` : f,
              onContextMenu: A,
              children: (0, l.jsxs)("div", {
                  className: eT.yl,
                  children: [
                      "dot" === x
                          ? (0, l.jsx)(ej.W, {
                                color: t ?? void 0,
                                colors: C,
                                className: eT.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(ej.R, { color: t ?? null, colors: C, className: eT.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, eg.M)(p) ? n(454554) : n(470474);
                          return (0, l.jsx)(j.m, { text: g, children: (0, l.jsx)(eN, { className: eT.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: eT.dD, children: r }),
                      m && null != s ? (0, l.jsx)(eI, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
var eL = n(736653),
    eR = n(775602),
    ew = n(861197),
    e_ = n(133551),
    eO = n(260509),
    eG = n(619019),
    eD = n(863036),
    ek = n(403362),
    eP = n(695184),
    eU = n(975571),
    eH = n(562153),
    eV = n(558393),
    eB = n(427262),
    eF = n(652215),
    eZ = n(792996),
    ez = n(967829),
    eW = n.n(ez),
    eX = n(778858),
    eJ = n(60229),
    eQ = n(594615);
let eY = s.Ay.connectStores([J.A, eD.A], () => {
    let e = eD.A.getChannel();
    return {
        submitting: J.A.formState === eF.XlH.SUBMITTING,
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
function eq(e) {
    let { overwrite: t } = e,
        n = (0, s.bG)([J.A], () => J.A.channel),
        i = (0, s.bG)([q.A], () => (null != n ? q.A.getGuild(n.getGuildId()) : null)),
        a = (0, s.bG)([Y.A], () => (null != i && null != t && t.type === D.r2.ROLE ? Y.A.getRole(i.id, t.id) : void 0)),
        r = (0, P.q)(n),
        o = (0, k.HV)(n),
        d = null != t && o === t.id ? r : null;
    if (null == n || null == i || null == t) return null;
    let { guild_id: c, id: u } = n;
    function h() {
        if (null == q.A.getGuild(c)) return "";
        let e = t.type === D.r2.MEMBER ? K.default.getUser(t.id) : void 0,
            n = e?.username ?? "";
        return null != a ? a.name : n;
    }
    function g(e, l) {
        if (null == n) return;
        if ("boolean" == typeof l) throw Error("Unexpected boolean action");
        let { allow: i, deny: s } = t;
        switch (((s = ec.TF(s, e)), (i = ec.TF(i, e)), l)) {
            case "ALLOW":
                i = ec.WQ(i, e);
                break;
            case "DENY":
                s = ec.WQ(s, e);
        }
        if ($.A.can(e, n, { [t.id]: { ...t, allow: i, deny: s } })) (0, G.LA)(n, t.id, i, s);
        else {
            var a;
            let e;
            switch (t.type) {
                case D.r2.MEMBER: {
                    let n = K.default.getUser(t.id);
                    null != n && (e = eB.Ay.getName(n));
                    break;
                }
                case D.r2.ROLE: {
                    let l = q.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = Y.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                    break;
                }
                default:
                    t.type;
            }
            ((a = e),
                _.A.show({
                    title: eZ.intl.string(eZ.t.vElC9b),
                    body: eZ.intl.format(eZ.t.yslqFM, { name: a }),
                    cancelText: eZ.intl.string(eZ.t.psXQHP),
                    onCancel() {
                        window.open(eU.A.getArticleURL(eF.MVz.PERMISSIONS_TUTORIAL));
                    },
                    isDismissable: !1,
                }));
        }
    }
    function m(e) {
        if (null == n) return !1;
        let l = $.A.can(eF.xBc.ADMINISTRATOR, i) || $.A.can(eF.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
        return n.isGuildStageVoice() && W.Zq.has(e)
            ? eZ.intl.string(eZ.t.bTS5lf)
            : (0, k.Gs)(o, t.id, e)
              ? eZ.intl.string(eZ.t.yXmgpP)
              : !((!ec.aI(e, eF.xBc.MANAGE_ROLES) || l) && (null == e || $.A.can(e, i) || l)) &&
                eZ.intl.string(eZ.t.nOtPMM);
    }
    let p = t.id === c,
        x = o === t.id,
        A = n.isForumLikeChannel() && ec.zy(t.deny, eF.xBc.SEND_MESSAGES),
        f = ec.zy(t.deny, eF.xBc.SEND_MESSAGES),
        C = ec.zy(t.deny, eF.xBc.READ_MESSAGE_HISTORY),
        j = eV.A.generateChannelPermissionSpec(c, n, p, {
            createPostsDisabled: A,
            sendMessagesDisabled: f,
            readMessageHistoryDisabled: C,
        });
    return (0, l.jsxs)(ew.Ay.Content, {
        className: eJ.uA,
        children: [
            null != d
                ? (0, l.jsx)("div", {
                      className: eJ.B2,
                      children: (0, l.jsx)(I.w, {
                          type: "info",
                          message: eZ.intl.format(eZ.t["Xq++FA"], { appName: d.name }),
                          role: "none",
                      }),
                  })
                : null,
            j.map((e, n) =>
                (0, l.jsx)(
                    e_.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: g, permissionRender: m, className: eJ.p2 },
                    n,
                ),
            ),
            p || x
                ? null
                : (0, l.jsx)("div", {
                      className: eJ.O6,
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
function e$(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = eH.Ay.getNickname(t, n, i),
        o = eB.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: eJ.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(f.eu, {
                              className: eJ.PX,
                              size: C._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(a.E, { variant: "body-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: x()(eQ.uN, eJ.mG),
            children: [
                (0, l.jsx)(f.eu, { size: C._3.SIZE_32, src: s, "aria-label": i.username, className: eJ.RJ }),
                (0, l.jsxs)("div", {
                    className: eJ.F0,
                    children: [(0, l.jsx)(a.E, { className: eJ.F0, variant: "body-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function eK(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function e0(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: o, onSelect: d } = e,
        c = (0, s.bG)([Y.A], () => Y.A.getSortedRoles(t.id)),
        u = (0, s.yK)([Q.Ay], () => Q.Ay.getMemberIds(t.id)),
        h = i.useMemo(() => {
            let e = c.filter((e) => null == r[e.id]),
                t = ed()(u)
                    .map(K.default.getUser)
                    .filter(ek.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value();
            return [...e, ...t];
        }, [u, r, c]);
    return (0, l.jsx)(eh.lG, {
        className: eJ.Nd,
        children: (0, l.jsxs)(em.iS, {
            selectionMode: "single",
            onSelectionChange: function (e) {
                null != e && (eK(e) ? d(e.id, D.r2.ROLE) : e instanceof eG.A && d(e.id, D.r2.MEMBER), o());
            },
            options: h,
            formatOption: function (e) {
                return { id: e.id, value: e, label: eK(e) ? e.name : eB.Ay.getUserTag(e) };
            },
            children: [
                (0, l.jsx)("div", {
                    className: eJ.ON,
                    children: (0, l.jsx)(em.a3, {
                        label: eZ.intl.string(eZ.t.lT5Zth),
                        placeholder: eZ.intl.string(eZ.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: function (e) {
                            let n = e.target.value;
                            eP.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(em.X2, {
                    renderListItem: function (e) {
                        let { value: i } = e;
                        if (eK(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: x()(eQ.uN, eJ.xf),
                                    children: [
                                        (0, l.jsx)(a.E, {
                                            variant: "body-md/medium",
                                            color: "text-strong",
                                            className: eJ.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(a.E, {
                                            variant: "body-xs/normal",
                                            color: "text-subtle",
                                            children: eZ.intl.string(eZ.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof eG.A) return (0, l.jsx)(e$, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function e2() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, s.cf)([J.A], () => J.A),
        c = r?.getGuildId(),
        { guild: u, sortedGuildRoles: h } = (0, s.cf)(
            [q.A, Y.A],
            () => {
                let e = null != c ? q.A.getGuild(c) : void 0,
                    t = null != e ? Y.A.getSortedRoles(e.id) : void 0;
                return { guild: e, sortedGuildRoles: t };
            },
            [c],
        ),
        g = (function (e, t) {
            let n = (0, s.yK)([Q.Ay], () => Q.Ay.getMemberIds(e), [e]),
                [l, a] = i.useMemo(
                    () =>
                        eW()(
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
                    a.length > 0 && null != e && eX.A.requestMembersById(e, a, !1);
                }, [a, e]),
                (0, s.yK)([K.default], () => l.map(K.default.getUser).filter(ek.Vq), [l])
            );
        })(c, o),
        m = (0, k.HV)(r),
        p = (0, eL.Ay)(),
        x = (0, s.bG)([eR.Ay], () => eR.Ay.roleStyle),
        A = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, ef.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != u ? (0, eO.af)(u) : null,
                        o = null != i && a === i.id,
                        d = m === e,
                        { default: c } = await n.e(477168).then(n.bind(n, 495603));
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
                                              body: eZ.intl.format(eZ.t.xERCnZ, { name: s }),
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
                          eM,
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
                    eM,
                    {
                        id: e.id,
                        guild: u,
                        theme: p,
                        roleStyle: x,
                        "aria-label": eB.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => A(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: eJ.mG,
                            children: [
                                (0, l.jsx)(f.eu, {
                                    size: C._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: eJ.bE,
                                }),
                                (0, l.jsx)("span", { className: eJ.Xh, children: eB.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(ew.Ay.Sidebar, {
        className: eJ.uA,
        scrollable: !0,
        children: (0, l.jsxs)(ex.V, {
            onItemSelect: G.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, eg.M)(p) ? n(546716) : n(233497)),
                (0, l.jsx)(ep.Y, {
                    targetElementRef: t,
                    renderPopout: function (e) {
                        let { position: t, closePopout: n } = e;
                        return null == u || null == r || null == o
                            ? null
                            : (0, l.jsx)(e0, {
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
                        (0, l.jsx)(ex.V.Header, {
                            ref: t,
                            ...n,
                            children: (0, l.jsxs)("div", {
                                className: eJ.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [eZ.intl.string(eZ.t["LPJmL/"]), "/", eZ.intl.string(eZ.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: eJ.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                b,
                v,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(ex.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(eA.Anchor, {
                            href: eU.A.getArticleURL(eF.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(a.E, {
                                variant: "body-sm/normal",
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
function e5() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, s.cf)([J.A], () => J.A);
    if (
        null == (0, s.bG)([q.A], () => (null != e ? q.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(ew.Ay, { className: eJ.kL, children: [(0, l.jsx)(e2, {}), (0, l.jsx)(eq, { overwrite: i })] });
}
var e1 = n(310578);
function e7() {
    let e = (0, s.bG)([J.A], () => J.A.advancedMode);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.c, { className: e1.BQ }),
            (0, l.jsx)(el.EN, {
                isExpanded: e,
                onExpandedChange: G.E,
                children: (0, l.jsx)(es.F, {
                    component: (0, l.jsx)(ea.vN, {
                        children: (0, l.jsx)(ei.$, {
                            slot: "trigger",
                            className: e1.hZ,
                            children: (0, l.jsxs)(a.E, {
                                variant: "body-lg/semibold",
                                className: e1.Vt,
                                children: [
                                    eZ.intl.string(eZ.t.dYRsrm),
                                    (0, l.jsx)(er.ChevronSmallDownIcon, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        className: e1.yM,
                                    }),
                                ],
                            }),
                        }),
                    }),
                    children: (0, l.jsx)(el.kS, { className: e1.nd, children: (0, l.jsx)(e5, {}) }),
                }),
            }),
        ],
    });
}
var e3 = n(143129),
    e4 = n(235986),
    e6 = n(653042);
function e9(e) {
    let { description: t, icon: n, id: i, label: s, onChange: r, value: o } = e;
    return (0, l.jsxs)("div", {
        className: e6.U,
        children: [
            (0, l.jsxs)(e4.A, {
                justify: e4.A.Justify.BETWEEN,
                align: e4.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(e4.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(a.E, { variant: "body-md/semibold", children: s }),
                    }),
                    null != r && null != o && (0, l.jsx)(e3.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, l.jsx)(a.E, { variant: "body-xs/normal", color: "text-default", className: e6.L, children: t }),
        ],
    });
}
var e8 = n(646514),
    te = n(993077),
    tt = n(625586);
let tn = function (e) {
    let { className: t, icon: n, noticeText: i, buttonText: s, onClick: r, canSync: o } = e;
    return (0, l.jsx)(te.Z, {
        className: x()(t, tt.N),
        children: (0, l.jsxs)(e4.A, {
            justify: e4.A.Justify.BETWEEN,
            align: e4.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: e8.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: tt.P,
                    children: (0, l.jsx)(a.E, { variant: "body-md/normal", children: i }),
                }),
                o && (0, l.jsx)(S.$, { size: "sm", variant: "secondary", onClick: r, text: s ?? void 0 }),
            ],
        }),
    });
};
var tl = n(290261),
    ti = n(818348),
    ts = n(614406);
function ta(e) {
    let { channel: t, roles: n, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(y.OZ, {
        className: ts.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case tl.oO.ROLES:
                    ((c =
                        (d = n[h]).rowType === tl.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, l.jsx)(V.A, { className: ts.a, color: d.colorString, size: 20 })
                            : (0, l.jsx)(A.ShieldUserIcon, {
                                  size: "custom",
                                  className: ts.a,
                                  color: d.colorString,
                                  height: 20,
                              })),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                c,
                                (0, l.jsx)(a.E, {
                                    variant: "body-sm/normal",
                                    color: d.disabled ? "text-muted" : "text-default",
                                    children: d.name,
                                }),
                            ],
                        })),
                        (g = d.disabled));
                    break;
                case tl.oO.MEMBERS:
                    ((d = i[h]),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(f.eu, { src: d.avatarURL, size: C._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(a.E, { variant: "body-sm/normal", children: d.name }),
                                d.bot && (0, l.jsx)(H.A, { verified: d.verifiedBot }),
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    className: ts.Gq,
                                    variant: "body-xs/normal",
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
            let m = !g && null == s && null != d.id;
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
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    variant: "body-xs/normal",
                                    children: en.vV(d.rowType),
                                }),
                                d.rowType !== tl.T6.EMPTY_STATE &&
                                    (0, l.jsx)(j.m, {
                                        asContainer: !0,
                                        text: s ?? r(d.rowType, d.disabled),
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
                                                                    let l = (0, z.$b)(
                                                                        e,
                                                                        n === tl.T6.ROLE ? D.r2.ROLE : D.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, z.pF)(l)
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
                                            children: (0, l.jsx)(v.CircleXIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: x()(ts.Yz, { [ts._2]: g || s }),
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
                case tl.oO.ROLES:
                    return (0, l.jsx)(td, { title: eZ.intl.string(eZ.t["LPJmL/"]) }, "roles-title");
                case tl.oO.MEMBERS:
                    return (0, l.jsx)(td, { title: eZ.intl.string(eZ.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function tr(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, s.bG)([Y.A], () => Y.A.getSortedRoles(t.id)),
        d = en.C$(t, o, i, W.QY, r),
        c = (0, s.bG)([Q.Ay], () => en.Wi(Q.Ay.getMemberIds(t.id), i, t, W.QY, { permissionUpdates: r })),
        u = (0, z.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: x()(ts.j1, ts.vu),
        children: [
            (0, l.jsx)(e9, {
                label: eZ.intl.string(eZ.t.StpcFU),
                description: eZ.intl.string(eZ.t.f7VbhF),
                icon: (0, l.jsx)(N.StageIcon, {
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
                            (0, l.jsx)(a.E, { variant: "body-md/semibold", children: eZ.intl.string(eZ.t["7BWDRb"]) }),
                            (0, l.jsx)(j.m, {
                                text: eZ.intl.string(eZ.t.arRuES),
                                shouldShow: !u,
                                children: (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eZ.intl.string(eZ.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, E.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(377476),
                                                n.e(597622),
                                                n.e(746309),
                                                n.e(778799),
                                                n.e(844780),
                                                n.e(692513),
                                                n.e(589916),
                                                n.e(298107),
                                                n.e(819193),
                                                n.e(358608),
                                            ]).then(n.bind(n, 841811));
                                            return (t) => (0, l.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !u,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(ta, {
                        channel: i,
                        roles: d,
                        members: c,
                        disabledReason: u ? null : eZ.intl.string(eZ.t.arRuES),
                        getRemoveTooltipHint: X.Mt,
                    }),
                ],
            }),
        ],
    });
}
function to(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: a, roles: r, members: o } = e,
        d = (0, s.bG)([$.A], () => $.A.can(ti.xB.ADMINISTRATOR, t)),
        c = et.MJ(ti.xB.VIEW_CHANNEL, t),
        u = et.MJ(ti.xB.ADMINISTRATOR, t),
        h = {
            title: eZ.intl.string(eZ.t.aUI70g),
            subtitle: eZ.intl.string(eZ.t.hfbjIH),
            formLabel: eZ.intl.string(eZ.t.P6eCbP),
        };
    return (
        i.isCategory()
            ? ((h.title = eZ.intl.string(eZ.t.lEPAZ5)),
              (h.subtitle = eZ.intl.string(eZ.t.RQUk61)),
              (h.formLabel = eZ.intl.string(eZ.t["8VIxJu"])))
            : i.type === eF.rbe.GUILD_VOICE && (h.subtitle = eZ.intl.string(eZ.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: x()(ts.j1, { [ts.vu]: a }),
            children: [
                (0, l.jsx)(e9, {
                    description: h.subtitle,
                    icon: (0, l.jsx)(T.LockIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: ts.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: h.title,
                    onChange: async function () {
                        let e = i.accessPermissions,
                            s = K.default.getCurrentUser();
                        a || null == (await (0, F.D)(t.id, i.id))
                            ? (en.uB(i, e, a), a || null == s || d || en.tP(i, e))
                            : (0, E.mM)(async () => {
                                  let { Modal: e } = await Promise.all([n.e(304823), n.e(223976)]).then(
                                      n.bind(n, 732955),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          title: eZ.intl.string(eZ.t.ZzdgUm),
                                          subtitle: eZ.intl.format(eZ.t.DwY2vN, {
                                              onClick: () => {
                                                  (Z.A.open(t.id, eF.BEX.ONBOARDING), n.onClose());
                                              },
                                          }),
                                          actions: [{ text: eZ.intl.string(eZ.t.BddRzS), onClick: n.onClose }],
                                      });
                              });
                    },
                    value: a,
                }),
                (0, l.jsxs)("div", {
                    className: ts.X4,
                    children: [
                        u &&
                            (0, l.jsx)("div", {
                                className: ts.Ux,
                                children: (0, l.jsx)(I.w, {
                                    type: "warning",
                                    message: eZ.intl.string(eZ.t["5f3HIC"]),
                                    role: "status",
                                }),
                            }),
                        !c &&
                            !u &&
                            !a &&
                            (0, l.jsx)("div", {
                                className: ts.Ux,
                                children: (0, l.jsx)(I.w, {
                                    type: "warning",
                                    message: eZ.intl.string(eZ.t.ZAk4Q9),
                                    role: "status",
                                }),
                            }),
                        a &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: ts.MJ,
                                        children: [
                                            (0, l.jsx)(M.D, {
                                                variant: "heading-xs/semibold",
                                                className: ts.DH,
                                                children: h.formLabel,
                                            }),
                                            (0, l.jsx)(S.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eZ.intl.string(eZ.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, E.mM)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e(377476),
                                                            n.e(597622),
                                                            n.e(746309),
                                                            n.e(844780),
                                                            n.e(692513),
                                                            n.e(589916),
                                                            n.e(298107),
                                                            n.e(819193),
                                                            n.e(468083),
                                                        ]).then(n.bind(n, 685374));
                                                        return (t) =>
                                                            (0, l.jsx)(e, { ...t, channelId: i.id, inSettings: !0 });
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(ta, { channel: i, roles: r, members: o, getRemoveTooltipHint: en.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function td(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(L.c, { className: ts.yF }),
            (0, l.jsx)(M.D, { variant: "heading-xs/semibold", className: x()(ts.DH, ts.Gf), children: t }),
        ],
    });
}
let tc = s.Ay.connectStores([J.A, q.A, Q.Ay, $.A, Y.A, U.A], () => {
    let e,
        t = J.A.channel,
        n = J.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = q.A.getGuild(t.getGuildId());
        let n = Q.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = Y.A.getSortedRoles(e.id);
            ((s = J.A.editedPermissionIds.reduce((e, t) => {
                let n = J.A.getPermissionOverwrite(t);
                return (null != n && (e[t] = n), e);
            }, {})),
                (l = en.uX(e, r, t, t.accessPermissions, s)),
                (i = en.Wi(n, t, e, t.accessPermissions, {
                    permissionUpdates: s,
                    appChannelBotUserId: (0, k.yT)(t, U.A.getApplication(t.application_id)),
                })),
                (a = en.Ae(t, s)));
        }
    }
    return {
        canSyncChannel: null != n && $.A.can(ti.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: a,
        locked: J.A.locked,
        permissionUpdates: s,
    };
})(function (e) {
    let {
        canSyncChannel: t,
        category: i,
        channel: s,
        filteredMembers: r,
        filteredRoles: d,
        guild: c,
        isPrivateGuildChannel: u,
        locked: h,
        permissionUpdates: g,
    } = e;
    if (((0, P.q)(s), null == s || null == c)) return null;
    let m = { title: eZ.intl.string(eZ.t.BAZMBn), subtitle: eZ.intl.string(eZ.t.XLrZyp) };
    return (
        s.isCategory() && ((m.title = eZ.intl.string(eZ.t["/uELTj"])), (m.subtitle = eZ.intl.string(eZ.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(M.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(a.E, { variant: "body-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, l.jsx)(tn, {
                              canSync: !1,
                              icon: R.RefreshIcon,
                              noticeText: eZ.intl.format(eZ.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(tn, {
                              buttonText: eZ.intl.string(eZ.t.NVwuHq),
                              canSync: !0,
                              icon: (0, w.k)(ee),
                              noticeText: eZ.intl.format(eZ.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, E.mM)(async () => {
                                          let { default: e } = await n.e(687634).then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: s,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = et.s9(i, (0, k.GY)(s));
                                                      (await (0, B.n)(s, t[e].deny, t[e].allow)) &&
                                                          (0, o.RT)(s.id, { permissionOverwrites: Object.values(t) });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice() ? (0, l.jsx)(tr, { guild: c, channel: s, permissionUpdates: g }) : null,
                (0, l.jsx)(to, { channel: s, guild: c, isPrivateGuildChannel: u, roles: d, members: r }),
                (0, l.jsx)(e7, {}),
            ],
        })
    );
});
var tu = n(526132),
    th = n(97469),
    tg = n(406704),
    tm = n(413599),
    tp = n(95701),
    tx = n(291731),
    tA = n(734057),
    tf = n(994500),
    tC = n(188567),
    tj = n(608226),
    tb = n(282956),
    tv = n(986057);
function ty(e) {
    let { refToScroller: t } = e,
        n = (0, s.bG)([eD.A], () => eD.A.getChannel(), []),
        i = (0, s.bG)([q.A], () => (null != n ? q.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: a,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, s.cf)([tx.A], () => tx.A.getProps(), []);
    return null == i || null == n
        ? null
        : (0, l.jsx)(tv.A, {
              guild: i,
              channel: n,
              section: a,
              sectionId: r,
              webhooks: o,
              editedWebhook: d,
              isFetchingWebhooks: c,
              hasChanges: tx.A.hasChanges,
              errors: u,
              refToScroller: t,
          });
}
function tE() {
    let { channel: e, submitting: t } = (0, s.cf)([eD.A], () => eD.A.getProps()),
        n = (0, s.bG)([tx.A], () => tx.A.editedWebhook),
        i = (0, s.bG)([q.A], () => (null != e ? q.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(eu.A, {
        submitting: t,
        onReset: function () {
            tb.A.init();
        },
        onSave: function () {
            null != i && null != n && tb.A.saveWebhook(i.id, n);
        },
    });
}
var tN = n(422542),
    tS = n(351906);
function tT() {
    let e = (0, s.bG)([tS.A], () => tS.A.hideInstantInvites),
        { channel: t, guild: n } = (0, s.cf)(
            [eD.A, q.A],
            () => {
                let { channel: e } = eD.A.getProps(),
                    t = null != e ? q.A.getGuild(e.getGuildId()) : null;
                return { channel: e, guild: t };
            },
            [],
        ),
        i = (0, s.bG)([$.A], () => null != t && $.A.can(eF.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: a, loading: r } = (0, s.cf)([eD.A], () => eD.A.getInvites(), []);
    return (0, l.jsx)(tN.A, { invites: a, loading: r, guild: n, channel: t, canCreateInvites: i, hide: e });
}
(n(938796), n(667532));
var tI = n(371444),
    tM = n(392421),
    tL = n(602137),
    tR = n(665260),
    tw = n(452027),
    t_ = n(103557),
    tO = n(150934),
    tG = n(825484),
    tD = n(123292),
    tk = n(691885),
    tP = n(270003),
    tU = n(331322),
    tH = n(95477),
    tV = n(893007),
    tB = n(771871),
    tF = n(73153),
    tZ = n(534963),
    tz = n(820284),
    tW = n(432371),
    tX = n(547683),
    tJ = n(376092),
    tQ = n(773669),
    tY = n(458350),
    tq = n(965805),
    t$ = n(355622),
    tK = n(408018),
    t0 = n(989161),
    t2 = n(375499),
    t5 = n(920134),
    t1 = n(770335),
    t7 = n(7584),
    t3 = n(422844),
    t4 = n(307301),
    t6 = n(599119),
    t9 = n(219504);
n(807632);
var t8 = n(376310);
n(253913);
var ne = n(901748);
function nt(e) {
    let { channel: t } = e,
        a = (0, s.bG)([$.A], () => $.A.can(eF.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        d = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            a &&
                !e &&
                (0, E.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(143172), n.e(347326)]).then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, a]),
        u = i.useCallback((e) => t.isGameInvitesChannel() && "No Mic" === e.name, [t]),
        h = i.useCallback(
            (e) => {
                !a ||
                    u(e) ||
                    (0, E.mM)(async () => {
                        let { default: i } = await Promise.all([n.e(143172), n.e(347326)]).then(n.bind(n, 950989));
                        return (n) => (0, l.jsx)(i, { ...n, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [a, u, t],
        ),
        {
            handleDragStart: g,
            handleDragReset: m,
            handleDragComplete: p,
        } = (0, t9.A)(t.availableTags, (e) => {
            (0, o.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: ne._A,
        children: [
            d
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          nn,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: a,
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
                      className: x()(ne.JE, { [ne.r9]: !a || r }),
                      children: (0, l.jsx)(t4.PlusSmallIcon, {
                          size: "custom",
                          "aria-label": eZ.intl.string(eZ.t["/jubeD"]),
                          color: e8.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(S.$, {
                      variant: "primary",
                      text: eZ.intl.string(eZ.t["/jubeD"]),
                      disabled: !a,
                      onClick: c,
                  }),
        ],
    });
}
function nn(e) {
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
        } = (0, t6.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: a,
            onDragReset: o,
        });
    return (0, l.jsx)("div", {
        className: x()(ne.kL, { [ne.A]: null != h && c < h, [ne.Ze]: null != h && c > h }),
        ref: (e) => {
            u(g(e));
        },
        onMouseEnter: () => m(i),
        onMouseLeave: () => m(!1),
        children: (0, l.jsx)(j.m, {
            text: d,
            asContainer: !0,
            shouldShow: null != d,
            children: (0, l.jsx)(t8.Ay, {
                tag: t,
                disabled: !i,
                ariaLabel: eZ.intl.formatToPlainString(eZ.t.jhSvB9, { name: t.name }),
                onClick: i ? () => s(t) : void 0,
            }),
        }),
    });
}
var nl = n(13259),
    ni = n(840387),
    ns = n(268761),
    na = n(474078),
    nr = n(890497),
    no = n(580679);
let nd = function (e) {
    let { autoArchiveDuration: t, onChange: n, isDisabled: i, helperText: s } = e,
        a = (0, ns.Gk)();
    return (0, l.jsx)("div", {
        className: no.gy,
        children: (0, l.jsx)(nr.Z, {
            selectionMode: "single",
            label: eZ.intl.string(eZ.t.FGjMZS),
            helperText: s,
            disabled: i,
            options: a,
            value: t,
            onSelectionChange: n,
        }),
    });
};
var nc = n(75721),
    nu = n(991690),
    nh = n(627363),
    ng = n(429913),
    nm = n(878014),
    np = n(233470),
    nx = n(260498),
    nA = n(246338),
    nf = n(486020);
function nC(e, t, n) {
    return {
        applicationId: e,
        name: t,
        iconApplication: n ?? { id: e, icon: null },
        iconURL: n?.icon == null ? null : (nf.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 24 }) ?? null),
    };
}
function nj(e) {
    return (0, nm.W)(e, nu.U.VOICE_CHANNEL);
}
var nb = n(786739);
let nv = "none";
function ny(e) {
    let { channel: t, guildId: n, onChange: i } = e;
    return (0, nc._f)(t) ? (0, l.jsx)(nE, { channel: t, guildId: n, onChange: i }) : null;
}
function nE(e) {
    let { channel: t, guildId: n, onChange: a } = e,
        r = t.application_id ?? null,
        { options: o, listState: d } = (function (e, t) {
            let { options: n, listState: l } = (function (e) {
                    i.useEffect(() => {
                        (0, np.listProjects)(e);
                    }, [e]);
                    let t = (0, s.yK)([nx.Ay], () => nx.Ay.getOwnedProjects()),
                        n = (0, s.yK)([nx.Ay], () => nx.Ay.getSharedProjects(e), [e]),
                        l = i.useMemo(
                            () =>
                                (function (e, t, n) {
                                    let l = new Map();
                                    for (let i of [...e, ...t]) (0, nA.Ot)(i, n) && l.set(i.application_id, i);
                                    return [...l.values()].sort((e, t) => e.name.localeCompare(t.name));
                                })(t, n, e),
                            [t, n, e],
                        ),
                        a = i.useMemo(() => l.map((e) => e.application_id), [l]),
                        r = (0, ng.A)(a, !1),
                        o = i.useRef(new Set()),
                        [d, c] = i.useState(new Set()),
                        [u, h] = i.useState(!1),
                        g = i.useMemo(() => l.filter((e, t) => !nj(r[t])).map((e) => e.application_id), [l, r]);
                    i.useEffect(() => {
                        let e = g.filter((e) => !o.current.has(e));
                        if (0 !== e.length) {
                            for (let t of e) o.current.add(t);
                            nh.Ay.fetchApplications(e, !0)
                                .catch(() => h(!0))
                                .finally(() => c((t) => new Set([...t, ...e])));
                        }
                    }, [g]);
                    let m = i.useMemo(() => l.filter((e, t) => nj(r[t])), [l, r]),
                        p = (0, s.bG)([nx.Ay], () => nx.Ay.getGuildProjectsFetchState(e), [e]),
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
                        C = (0, ng.A)(f);
                    return {
                        options: i.useMemo(() => m.map((e, t) => nC(e.application_id, e.name, C[t])), [m, C]),
                        listState: A,
                    };
                })(e),
                a = null == t || n.some((e) => e.applicationId === t) ? null : t,
                r = (0, ng.h)(a);
            return i.useMemo(
                () =>
                    null == a || null == r
                        ? { options: n, listState: l }
                        : { options: [nC(a, r.name, r), ...n], listState: "rows" },
                [n, l, a, r],
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
                a(e === nv ? null : e);
            },
            [a],
        );
    return (0, l.jsx)(tk.l, {
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
var nN = n(46653),
    nS = n(717518),
    nT = n(147036),
    nI = n(927813),
    nM = n(879631),
    nL = n(221851);
function nR(e) {
    let { label: t, helperText: n, hideLabel: s, disabled: a, value: r, onChange: o } = e,
        [d, c] = i.useState(null),
        u = i.useMemo(() => {
            let e = [...(d ?? eF.s_7)];
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
            n <= eF.WA1 && t.push(n);
            let l = n * nI.A.Seconds.MINUTE;
            l <= eF.WA1 && t.push(l);
            let i = n * nI.A.Seconds.HOUR;
            (i <= eF.WA1 && t.push(i), c(t));
        }, []),
        m = i.useCallback(() => {
            c(null);
        }, []);
    return (0, l.jsx)("div", {
        className: nL.QB,
        children: (0, l.jsx)(nr.Z, {
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
            placeholder: eZ.intl.string(eZ.t.dBqQu4),
        }),
    });
}
var nw = n(323073);
function n_(e) {
    let { channel: t, guild: n, canManageChannels: i, isTeen: s, onChange: a } = e,
        r = (0, nw.Gc)(t),
        o = null != n && (0, eO.wh)(n),
        d = "none";
    r ? (d = "nsfw") : t.isSpoilerChannel() && (d = "spoiler");
    let c = [
        { value: "none", name: eZ.intl.string(eZ.t.OtnNJE), desc: eZ.intl.string(eZ.t["a5/7hX"]) },
        { value: "spoiler", name: eZ.intl.string(eZ.t.TvUHTb), desc: eZ.intl.string(eZ.t.ddWXHa) },
    ];
    return (
        (!s || r) && c.push({ value: "nsfw", name: eZ.intl.string(eZ.t.Es25Yf), desc: eZ.intl.string(eZ.t["9eUgwR"]) }),
        (0, l.jsxs)(tU.B, {
            gap: 4,
            padding: { top: 8, bottom: 8 },
            children: [
                (0, l.jsx)(tB.z, {
                    label: eZ.intl.string(eZ.t.yLB4y2),
                    onChange: a,
                    options: c,
                    value: d,
                    disabled: !i || null != t.linkedLobby || o || (s && r),
                }),
                null != t.linkedLobby
                    ? (0, l.jsx)(I.w, { type: "warning", message: eZ.intl.string(eZ.t.EvavKG), role: "none" })
                    : null,
            ],
        })
    );
}
var nO = n(953727);
function nG(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nO.A)(s),
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
function nD(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nO.A)(s),
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
var nk = n(746080),
    nP = n(307731);
n(37411);
var nU = n(590930);
let nH = {
        popoutLocation: {
            page: eF.liQ.CHANNEL_SETTINGS,
            section: eF.JJy.CHANNEL_DEFAULT_REACTION,
            object: eF.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nV = {
        popoutLocation: {
            page: eF.liQ.CHANNEL_SETTINGS,
            section: eF.JJy.CHANNEL_NAME,
            object: eF.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nB = "AUTOMATIC_RTC_REGION",
    nF = s.Ay.connectStores([eD.A], () => {
        let { channel: e, submitting: t } = eD.A.getProps();
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
                    userLimit: s,
                    nsfw: a,
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
                e.isThread() && 0 === (t = (0, na.A)(t, !0)).length
                    ? tF.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eZ.intl.string(eZ.t.uXA573) },
                      })
                    : (0, o.RT)(e.id, {
                          name: t,
                          type: n,
                          topic: l,
                          bitrate: i,
                          userLimit: s,
                          nsfw: a,
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
function nZ(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(t5.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: nP.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        (null != n && n.type === t1.i.UNICODE && t(n.surrogates), l && i());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: nV,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(ep.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: ep.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(t2.A, { ...e, ref: a, active: n, className: nU.Z8, tabIndex: 0 });
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
                (this.channelTopicTextAreaChannel = (0, tp.createChannelRecord)({
                    id: "1",
                    type: eF.rbe.DM,
                    guild_id: t,
                }))),
            this.channelTopicTextAreaChannel
        );
    }
    constructor(e) {
        super(e);
        let t = this.props.channel?.topic ?? "";
        this.state = {
            textTopicValue: t,
            richTopicValue: (0, tK.x7)(t),
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
            this.setState({ textTopicValue: t, richTopicValue: (0, tK.x7)(t) });
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
                canManageChannels: s,
                canSendMessages: a,
                isThreadModerator: r,
                canManageThread: o,
                guild: d,
                isForumPost: c,
                isOwner: u,
                isTeen: h,
                parentChannel: g,
            } = this.props,
            m = tp.Le.has(e.type),
            p = e.isForumLikeChannel(),
            A = p && e.availableTags?.every((e) => e.moderated),
            f = K.default.getCurrentUser()?.isStaff() === !0,
            C = tp.IY.has(e.type)
                ? (0, l.jsx)(tw.D, {
                      label: p ? eZ.intl.string(eZ.t.yR6HwZ) : eZ.intl.string(eZ.t.X8jMDh),
                      children: (0, l.jsx)(t0.Ay, {
                          className: x()(nU.zm, { [nU.r9]: !s }),
                          innerClassName: x()(nU.At, { [nU.r9]: !s }),
                          characterCountClassName: nU.IQ,
                          maxCharacterCount: p ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eZ.intl.string(eZ.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? d?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: p ? t$.oU.FORUM_CHANNEL_GUIDELINES : t$.oU.CHANNEL_TOPIC,
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
            j =
                p && f && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(t_.f, {
                          label: eZ.intl.string(eZ.t.qk2jdY),
                          placeholder: eZ.intl.string(eZ.t.DDjD1H),
                          value: t7.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            b = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(L.c, {}),
                          (0, l.jsx)(tw.D, {
                              label: eZ.intl.string(eZ.t["P/y+sj"]),
                              description: eZ.intl.string(eZ.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(nt, { channel: e }),
                          }),
                          (0, l.jsx)(tO.S, {
                              disabled: !s || A,
                              checked: e.hasFlag(nk.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eZ.intl.string(eZ.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            v = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(L.c, {}),
                          (0, l.jsx)(tw.D, {
                              label: eZ.intl.string(eZ.t["8ao1+E"]),
                              description: eZ.intl.string(eZ.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: nU.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: x()(nU.t0, nU._h),
                                          children: (0, l.jsxs)(tG.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(ep.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: ep.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(S.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eZ.intl.string(eZ.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(tD.Q, {
                                                            text: eZ.intl.string(eZ.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(nl.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            y =
                e.isForumChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(L.c, {}),
                              (0, l.jsxs)("div", {
                                  className: nU.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: x()(nU.t0, nU.WC),
                                          children: (0, l.jsx)(tk.l, {
                                              selectionMode: "single",
                                              label: eZ.intl.string(eZ.t["kQvoC/"]),
                                              description: eZ.intl.string(eZ.t.mOSViT),
                                              options: [
                                                  {
                                                      id: "list",
                                                      label: eZ.intl.string(eZ.t["4HXEZG"]),
                                                      value: tI.C.LIST,
                                                  },
                                                  {
                                                      id: "grid",
                                                      label: eZ.intl.string(eZ.t["8RswJG"]),
                                                      value: tI.C.GRID,
                                                  },
                                              ],
                                              value: e.defaultForumLayout ?? tI.C.LIST,
                                              onSelectionChange: this.handleChangeDefaultForumLayout,
                                          }),
                                      }),
                                      e.defaultForumLayout === tI.C.GRID
                                          ? (0, l.jsx)(nG, { className: nU.Kf })
                                          : (0, l.jsx)(nD, { className: nU.Kf }),
                                  ],
                              }),
                              (0, l.jsx)(L.c, {}),
                          ],
                      })
                    : null,
            E =
                e.isForumLikeChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tk.l, {
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
            N = e.isForumLikeChannel()
                ? (0, l.jsx)(tk.l, {
                      selectionMode: "single",
                      label: eZ.intl.string(eZ.t.Paxaug),
                      description: eZ.intl.string(eZ.t.DqOl8J),
                      options: [
                          { id: "some", label: eZ.intl.string(eZ.t.rQ0ctQ), value: tM.n.MATCH_SOME },
                          { id: "all", label: eZ.intl.string(eZ.t.FCXUu0), value: tM.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            T = m ? r : s,
            M = tp.nb.has(e.type)
                ? p
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(L.c, {}),
                              (0, l.jsxs)(tP.n, {
                                  label: eZ.intl.string(eZ.t.tTHx98),
                                  children: [
                                      (0, l.jsx)(nR, {
                                          label: eZ.intl.string(eZ.t.O1c02q),
                                          helperText: this.getSlowmodeHelpText(),
                                          value: e.rateLimitPerUser,
                                          onChange: this.handleChangeSlowmode,
                                          disabled: !T,
                                      }),
                                      (0, l.jsx)(nR, {
                                          label: eZ.intl.string(eZ.t["fkY5+l"]),
                                          helperText: eZ.intl.string(eZ.t.kdZU6H),
                                          value: e.defaultThreadRateLimitPerUser ?? 0,
                                          onChange: this.handleChangeThreadMessageSlowmode,
                                          disabled: !T,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsx)(nR, {
                          label: eZ.intl.string(eZ.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          value: e.rateLimitPerUser,
                          onChange: this.handleChangeSlowmode,
                          disabled: !T,
                      })
                : null,
            R =
                m && null != e.threadMetadata && !g?.isGameInvitesChannel()
                    ? (0, l.jsx)(tz.A, {
                          page: eF.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nd, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? 4320,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eZ.intl.string(eZ.t["3aJN9M"]) : eZ.intl.string(eZ.t.YUXr4Z),
                          }),
                      })
                    : null,
            w =
                e.type === eF.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(e3.d, {
                              label: eZ.intl.string(eZ.t.s2rpNf),
                              description: eZ.intl.string(eZ.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            _ = tp.LE.has(e.type)
                ? (0, l.jsx)(n_, {
                      channel: e,
                      guild: d,
                      canManageChannels: s,
                      isTeen: h,
                      onChange: this.handleChannelRestrictionChange,
                  })
                : m
                  ? (0, l.jsx)(e3.d, {
                        label: eZ.intl.string(eZ.t.TvUHTb),
                        description: eZ.intl.string(eZ.t.ddWXHa),
                        onChange: this.handleThreadSpoilerChange,
                        checked: e.isSpoilerChannel(),
                        disabled: !s,
                    })
                  : null,
            O =
                tp.xR.has(e.type) &&
                null != d &&
                d.features.has(eF.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, l.jsxs)(tU.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(e3.d, {
                                  label: eZ.intl.string(eZ.t.Au2b7m),
                                  description: eZ.intl.format(eZ.t.tI7KNX, {
                                      documentationLink: eU.A.getArticleURL(eF.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === eF.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(I.w, { type: "info", message: eZ.intl.string(eZ.t["2Ab4Id"]), role: "none" }),
                          ],
                      })
                    : null,
            G =
                tp.wE.has(e.type) && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tz.A, {
                          page: eF.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nd, {
                              isDisabled: !s,
                              autoArchiveDuration: (0, ns.Gl)(e, null),
                              onChange: this.handleChangeDefaultAutoArchiveDuration,
                              helperText: e.isForumLikeChannel()
                                  ? eZ.intl.string(eZ.t.fyXclY)
                                  : eZ.intl.string(eZ.t.W3Noi9),
                          }),
                      })
                    : null,
            D = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(e3.d, {
                      label: eZ.intl.string(eZ.t.id3ozj),
                      description: eZ.intl.format(eZ.t.feJW1z, {
                          helpdeskArticle: eU.A.getArticleURL(eF.MVz.CONVERSATION_SUMMARIES),
                      }),
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(nk.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eF.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !d?.features.has(eF.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            k = e.isMediaChannel()
                ? (0, l.jsx)(e3.d, {
                      label: eZ.intl.string(eZ.t.u8LZOt),
                      description: eZ.intl.string(eZ.t.J4wCc7),
                      checked: !e.hasFlag(nk.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === eF.rbe.GUILD_CATEGORY
            ? ((i = eZ.intl.string(eZ.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eZ.intl.string(eZ.t.uyVrTN)), (n = "post-title"))
              : m
                ? ((i = eZ.intl.string(eZ.t.j3XWjD)), (n = "thread-name"))
                : ((i = eZ.intl.string(eZ.t.PVbHDl)), (n = "channel-name"));
        let P = $.A.can(tX.G2, e),
            U = P
                ? void 0
                : (function (e) {
                      let t = tX.Qr.filter((t) => !$.A.can(t, e));
                      if (0 === t.length) return;
                      let n = new Intl.ListFormat(tQ.default.locale);
                      return eZ.intl.formatToPlainString(eZ.t.na1rJc, {
                          permissions: n.format(t.map(tJ.hx)),
                          count: t.length,
                      });
                  })(e),
            H =
                e.type === eF.rbe.GUILD_APP && null != d
                    ? (0, l.jsx)(tY.A, {
                          guildId: d.id,
                          channelId: e.id,
                          selectedApplicationId: e.application_id,
                          onChange: this.handleChangeApplication,
                          disabled: !P,
                          helperText: U,
                      })
                    : null,
            V = u ? a : s;
        return (0, l.jsxs)(tU.B, {
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
                    disabled: !V,
                    maxLength: 100,
                    trailing: V
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(nZ, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                H,
                C,
                j,
                b,
                v,
                null != d
                    ? (0, l.jsx)(ny, { channel: e, guildId: d.id, onChange: this.handleChangeApplication })
                    : null,
                M,
                R,
                y,
                E,
                N,
                w,
                _,
                O,
                D,
                G,
                k,
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
            s = this.getError("bitrate");
        return (0, l.jsx)(tV.A, {
            label: eZ.intl.string(eZ.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > 64e3 ? eZ.intl.format(eZ.t.SbQJk5, { bitrate: 64 }) : void 0,
            value: Math.min(e.bitrate, i),
            onChange: this.handleChangeBitrate,
            formatValue: this.renderBitrate,
            marks: [...new Set([8e3, 64e3, i])],
            minValue: 8e3,
            maxValue: i,
            step: 1e3,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            tp.k.has(e.type) &&
            (e.isGuildVocal() || tg.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: eF.K3c.AUTO, name: eZ.intl.string(eZ.t.jjKYpu) },
            { value: eF.K3c.FULL, name: eZ.intl.string(eZ.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(tB.z, {
            label: eZ.intl.string(eZ.t.jhJEJs),
            helperText: eZ.intl.format(eZ.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? eF.K3c.AUTO,
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
            i = e.isGuildStageVoice() ? 1e4 : 99;
        return (0, l.jsx)(tV.A, {
            label: eZ.intl.string(eZ.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eZ.intl.format(e.isGuildStageVoice() ? eZ.t.OqZI8D : eZ.t["8yb3JT"], {}),
            value: Math.min(e.userLimit, i),
            onChange: this.handleUserLimitChange,
            formatValue: this.onRenderUserLimit,
            marks: [
                { value: 0, label: "\u221E" },
                { value: i, label: `${i}` },
            ],
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
                label: eZ.intl.string(eZ.t.JEmsap),
                value: nB,
            });
        let a = e.rtcRegion ?? nB;
        return (0, l.jsx)(tk.l, {
            selectionMode: "single",
            label: eZ.intl.string(eZ.t["Ms8bX+"]),
            description: eZ.intl.string(eZ.t["dbTs+z"]),
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
                e.type === eF.rbe.GUILD_CATEGORY
                    ? (0, eg.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, eg.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(e4.A, {
                justify: e4.A.Justify.CENTER,
                className: nL.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = "channel-settings-overview-heading";
        return (0, l.jsxs)(tP.n, {
            "aria-labelledby": i,
            children: [
                (0, l.jsx)(M.D, { id: i, variant: "body-lg/medium", children: eZ.intl.string(eZ.t["/dp6yY"]) }),
                this.renderChannelInfo(e, t),
                this.showVoiceSettings() ? (0, l.jsx)(L.c, { gap: 24 }) : null,
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
        return (0, l.jsx)(t5.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                (this.handleChangeDefaultReactionEmoji(n), l && t());
            },
            pickerIntention: nP.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: nH,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tR.lA)(t.flags, nk.lx.REQUIRE_TAG, e);
        (0, o.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        e = (0, tq.A)(e, t.type);
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
            let e = (0, na.A)(t, !0);
            e !== t && (0, o.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = null != t && document.activeElement === t,
            l = this.props.channelName ?? "",
            i = n ? (t.selectionStart ?? l.length) : this.cursorPosition,
            s = n ? (t.selectionEnd ?? l.length) : this.cursorPosition,
            a = l.substring(0, i) + e + l.substring(s);
        ((0, o.fy)({ name: a }),
            setTimeout(() => {
                let n = i + e.length;
                ((this.cursorPosition = n), t?.focus(), t?.setSelectionRange(n, n));
            }, 0));
    };
    handleChangeTopic = (e) => {
        (0, o.fy)({ topic: t7.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, o.fy)({ template: t7.Ay.translateInlineEmojiToSurrogates(e) });
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
        let n = (0, tR.lA)(t.flags, nk.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, o.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleThreadSpoilerChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tR.lA)(t.flags, nk.lx.IS_SPOILER_CHANNEL, e);
        (0, o.fy)({ flags: n });
    };
    handleNSFWChange = (e) => {
        (0, o.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tR.lA)(t.flags, nk.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, o.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, o.fy)({ type: e ? eF.rbe.GUILD_ANNOUNCEMENT : eF.rbe.GUILD_TEXT });
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
        let n = (0, tR.lA)(t.flags, nk.lx.SUMMARIES_DISABLED, !e);
        (0, o.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tR.lA)(t.flags, nk.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, o.fy)({ flags: n });
    };
}
function nW() {
    let { errors: e, channel: t, submitting: n, subsection: a } = (0, s.cf)([eD.A], () => eD.A.getProps()),
        r = (0, s.bG)([tA.A], () => tA.A.getChannel(t?.parent_id ?? null)),
        o = (0, s.bG)([nS.A], () => nS.A.getRegions(t?.getGuildId() ?? null)),
        d = (0, s.bG)([tm.A], () => tm.A.theme),
        c = (0, s.bG)([q.A], () => q.A.getGuild(t?.getGuildId())),
        u = (0, tg.NI)(t),
        h = (0, tg.H_)(t),
        { canManageChannels: m, canSendMessages: p } = (0, s.cf)([$.A], () => ({
            canManageChannels: $.A.can(eF.xBc.MANAGE_CHANNELS, t),
            canSendMessages: $.A.can(eF.xBc.SEND_MESSAGES, t),
        })),
        x = (0, ni.Z)(),
        A = (0, g.Ay)(t),
        f = nN.default.getId(),
        C = (0, t3.p)(),
        j = t?.id,
        b = (0, tW.cI)(t, !1, !0),
        v = i.useCallback(
            (e) => {
                null != j && C.getState().setLayoutType(j, e);
            },
            [j, C],
        );
    return (0, l.jsx)(nz, {
        errors: e,
        channel: t,
        parentChannel: r,
        channelName: A,
        submitting: n,
        regions: o,
        theme: d,
        guild: c,
        canManageChannels: t?.isThread() ? u : m,
        canSendMessages: p,
        isTeen: x,
        isThreadModerator: h,
        canManageThread: u,
        subsection: a,
        isForumPost: null != t && t.isForumPost(),
        isOwner: t?.isOwner(f),
        handleSetDefaultLayout: v,
        showChannelSummariesSettings: b,
    });
}
var nX = n(722865);
function nJ(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.Ay.trackWithMetadata(eF.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class nQ extends i.PureComponent {
    componentDidMount() {
        nJ(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        (0, o.VN)();
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
        (l !== eF.XlH.CLOSED || l === t) &&
        (s || i !== eF.p_A.PERMISSIONS) &&
        (r || o || i !== eF.p_A.INTEGRATIONS)
            ? i !== n && nJ(i, n)
            : (0, d.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: i,
            category: s,
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
                  section: n ?? eF.p_A.OVERVIEW,
                  onSetSection: o.c4,
                  onClose: d.jH,
                  sections: (function (e) {
                      let {
                              channel: t,
                              category: n,
                              canManageRoles: i,
                              canManageChannels: s,
                              canDeleteChannels: c,
                              canManageWebhooks: h,
                              canUnlinkChannel: p,
                          } = e,
                          x = (0, m.gU)(t),
                          { GUILD_CATEGORY: A } = eF.rbe,
                          f = tp.Le.has(t.type),
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
                                      ? (0, l.jsxs)("div", {
                                            className: nX.wx,
                                            children: [
                                                null != x
                                                    ? (0, l.jsx)(x, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: nX.p,
                                                      })
                                                    : null,
                                                (0, l.jsx)(a.E, {
                                                    tag: "span",
                                                    variant: "body-sm/medium",
                                                    color: "none",
                                                    lineClamp: 1,
                                                    children: (0, g.m1)(t, K.default, tf.A),
                                                }),
                                                null != n
                                                    ? (0, l.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "body-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: nX.L1,
                                                          children: (0, g.m1)(n, K.default, tf.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : eZ.intl.string(eZ.t.XPDhcc),
                          },
                          {
                              section: eF.p_A.OVERVIEW,
                              label: eZ.intl.string(eZ.t["/dp6yY"]),
                              ariaLabel: eZ.intl.string(eZ.t["/dp6yY"]),
                              element: nW,
                              notice: { element: nF, stores: [eD.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: eF.p_A.PERMISSIONS,
                              label: eZ.intl.string(eZ.t.xrmhRX),
                              element: tc,
                              notice: { element: eY, stores: [J.A] },
                              predicate: () => i && !f,
                          },
                          {
                              section: eF.p_A.INSTANT_INVITES,
                              label: eZ.intl.string(eZ.t["9F90ic"]),
                              element: tT,
                              type: u.Py.CUSTOM,
                              predicate: () => t.type !== A && s && !f && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eF.p_A.INTEGRATIONS,
                              label: eZ.intl.string(eZ.t.s69NLF),
                              ariaLabel: eZ.intl.string(eZ.t.s69NLF),
                              element: ty,
                              notice: { stores: [tx.A], element: tE },
                              predicate: () => !((!h && !p) || t.isModeratorReportChannel()) && tp.oH.has(t.type),
                          },
                          { section: u.Fq.DIVIDER },
                          {
                              section: eF.p_A.DELETE,
                              onClick() {
                                  (0, tj.O)(t, function () {
                                      (tC._.subscribeOnce(eF.jej.LAYER_POP_COMPLETE, () => {
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
                      category: s,
                      canManageRoles: h,
                      canManageChannels: p,
                      canDeleteChannels: x,
                      canManageWebhooks: A,
                      canUnlinkChannel: f,
                  }),
              });
    }
}
function nY() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([eD.A], () => eD.A.getProps()),
        n = (0, s.bG)([eD.A], () => eD.A.getFormState()),
        i = (0, s.bG)([eD.A], () => eD.A.getSection()),
        a = (0, s.bG)([tm.A], () => tm.A.theme),
        r = (0, th.NC)(),
        o = (0, tg.NI)(e),
        d = (0, tg.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, s.cf)([$.A], () => ({
            canManageChannels: $.A.can(eF.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && $.A.can(eF.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && $.A.can(eF.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, tu.n)(e, $.A),
        })),
        m = (0, s.bG)([tA.A], () => tA.A.getChannel(e?.parent_id));
    return (0, l.jsx)(nQ, {
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
