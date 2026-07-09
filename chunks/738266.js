n.r(t), n.d(t, { default: () => nI });
var l = n(627968),
    i = n(64700),
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
    f = n(990078),
    C = n(957485),
    j = n(97808),
    b = n(778712),
    N = n(939249),
    E = n(285796),
    v = n(475825),
    y = n(192308),
    S = n(451394),
    T = n(821609),
    I = n(194261),
    M = n(512950),
    R = n(534514),
    L = n(404778),
    w = n(663417),
    O = n(565787),
    _ = n(157559),
    G = n(308528),
    k = n(702805),
    D = n(155718),
    U = n(709066),
    P = n(63104),
    V = n(60868),
    B = n(894328),
    H = n(468689),
    F = n(776781),
    z = n(233993),
    Z = n(110618),
    W = n(176360),
    Y = n(696451),
    J = n(317525),
    X = n(71393),
    Q = n(576705),
    q = n(287809);
function $(e) {
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
var K = n(488926),
    ee = n(495273),
    et = n(353068),
    en = n(650682),
    el = n(707554),
    ei = n(187322),
    es = n(847374);
n(321073);
var ea = n(735438),
    er = n.n(ea),
    eo = n(136722),
    ed = n(113325),
    ec = n(36525),
    eu = n(462887),
    eh = n(732771),
    eg = n(922016),
    em = n(761508),
    ex = n(349288),
    ep = n(442433),
    eA = n(365199),
    ef = n(545442),
    eC = n(316710),
    ej = n(821589),
    eb = n(262384);
let eN = { XSMALL: eb.xsmall, SMALL: eb.small, MEDIUM: eb.medium, LARGE: eb.large };
class eE extends i.PureComponent {
    static Sizes = eN;
    static defaultProps = { size: eN.MEDIUM, disabled: !1 };
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
            className: A()((0, ej.t)(eb, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...s,
        });
    }
}
var ev = n(967144),
    ey = n(320011);
function eS(e) {
    let { role: t, guild: s } = e,
        [a, r] = i.useState(!1);
    return (0, eC.x)(s, t)
        ? (0, l.jsx)(N.D, {
              onClick: function (e) {
                  r(!0),
                      (0, ep.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 316710));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: s });
                          },
                          { onClose: () => r(!1) },
                      );
              },
              className: A()(ey.X2, { [ey.ho]: a }),
              children: (0, l.jsx)(eA.j, { size: "custom", color: "currentColor", width: 20, height: 20 }),
          })
        : null;
}
function eT(e) {
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
            "aria-label": C,
        } = e,
        j = (0, ev.X_)(a.id, s, s?.colorStrings);
    return o
        ? (0, l.jsx)("div", { className: ey.rz })
        : (0, l.jsx)(em.V.Item, {
              className: ey.JC,
              id: i,
              selectedItem: d,
              onItemSelect: c,
              itemType: u,
              "aria-label": null != g ? `${C}, ${g}` : C,
              onContextMenu: A,
              children: (0, l.jsxs)("div", {
                  className: ey.yl,
                  children: [
                      "dot" === p
                          ? (0, l.jsx)(ef.W, {
                                color: t ?? void 0,
                                colors: j,
                                className: ey.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(ef.R, { color: t ?? null, colors: j, className: ey.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, eu.M)(x) ? n(454554) : n(470474);
                          return (0, l.jsx)(f.m, { text: g, children: (0, l.jsx)(eE, { className: ey.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: ey.dD, children: r }),
                      m && null != s ? (0, l.jsx)(eS, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
var eI = n(736653),
    eM = n(775602),
    eR = n(861197),
    eL = n(438271),
    ew = n(260509),
    eO = n(889227),
    e_ = n(863036),
    eG = n(403362),
    ek = n(695184),
    eD = n(975571),
    eU = n(562153),
    eP = n(558393),
    eV = n(427262),
    eB = n(652215),
    eH = n(375708),
    eF = n(508573),
    ez = n.n(eF),
    eZ = n(66834),
    eW = n(204594),
    eY = n(729232);
let eJ = s.Ay.connectStores([W.A, e_.A], () => {
    let e = e_.A.getChannel();
    return {
        submitting: W.A.formState === eB.XlH.SUBMITTING,
        onReset() {
            (0, k.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = W.A.editedPermissionIds.reduce((e, t) => {
                let n = W.A.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, k.R$)(e.id, t);
        },
    };
})(ec.A);
function eX(e) {
    let { overwrite: t } = e,
        n = (0, s.bG)([W.A], () => W.A.channel),
        i = (0, s.bG)([X.A], () => (null != n ? X.A.getGuild(n.getGuildId()) : null)),
        a = (0, s.bG)([J.A], () => (null != i && null != t && t.type === D.r2.ROLE ? J.A.getRole(i.id, t.id) : void 0));
    if (null == n || null == i || null == t) return null;
    let { guild_id: r, id: o } = n,
        d = () => {
            if (null == X.A.getGuild(r)) return "";
            let e = t.type === D.r2.MEMBER ? q.default.getUser(t.id) : void 0,
                n = e?.username ?? "";
            return null != a ? a.name : n;
        },
        c = (e, l) => {
            if ("boolean" == typeof l) throw Error("Unexpected boolean action");
            let { allow: i, deny: s } = t;
            switch (((s = eo.TF(s, e)), (i = eo.TF(i, e)), l)) {
                case "ALLOW":
                    i = eo.WQ(i, e);
                    break;
                case "DENY":
                    s = eo.WQ(s, e);
            }
            if (Q.A.can(e, n, { [t.id]: { ...t, allow: i, deny: s } })) (0, k.LA)(n, t.id, i, s);
            else {
                var a;
                let e;
                switch (t.type) {
                    case D.r2.MEMBER: {
                        let n = q.default.getUser(t.id);
                        null != n && (e = eV.Ay.getName(n));
                        break;
                    }
                    case D.r2.ROLE: {
                        let l = X.A.getGuild(n.getGuildId());
                        if (null != l) {
                            let n = J.A.getRole(l.id, t.id);
                            null != n && (e = n.name);
                        }
                        break;
                    }
                    default:
                        t.type;
                }
                (a = e),
                    _.A.show({
                        title: eH.intl.string(eH.t.vElC9b),
                        body: eH.intl.format(eH.t.yslqFM, { name: a }),
                        cancelText: eH.intl.string(eH.t.psXQHP),
                        onCancel() {
                            window.open(eD.A.getArticleURL(eB.MVz.PERMISSIONS_LOCKOUT));
                        },
                    });
            }
        },
        u = (e) => {
            let t = Q.A.can(eB.xBc.ADMINISTRATOR, i) || Q.A.can(eB.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && z.Zq.has(e)
                ? eH.intl.string(eH.t.bTS5lf)
                : !((!eo.aI(e, eB.xBc.MANAGE_ROLES) || t) && (null == e || Q.A.can(e, i) || t)) &&
                      eH.intl.string(eH.t.nOtPMM);
        },
        h = t.id === r,
        g = n.isForumLikeChannel() && eo.zy(t.deny, eB.xBc.SEND_MESSAGES),
        m = eo.zy(t.deny, eB.xBc.SEND_MESSAGES),
        x = eo.zy(t.deny, eB.xBc.READ_MESSAGE_HISTORY),
        p = eP.A.generateChannelPermissionSpec(r, n, h, {
            createPostsDisabled: g,
            sendMessagesDisabled: m,
            readMessageHistoryDisabled: x,
        });
    return (0, l.jsxs)(eR.Ay.Content, {
        className: eW.uA,
        children: [
            p.map((e, n) =>
                (0, l.jsx)(
                    eL.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: c, permissionRender: u, className: eW.p2 },
                    n,
                ),
            ),
            r === t.id
                ? null
                : (0, l.jsx)(T.$, {
                      variant: "critical-secondary",
                      text: eH.intl.format(eH.t.txPV7k, { name: d() }),
                      onClick: function () {
                          let e = d();
                          _.A.show({
                              title: eH.intl.string(eH.t.GuPYQB),
                              body: eH.intl.format(eH.t.xERCnZ, { name: e }),
                              cancelText: eH.intl.string(eH.t["ETE/oC"]),
                              onConfirm: () => G.A.clearPermissionOverwrite(o, t.id),
                          });
                      },
                  }),
        ],
    });
}
function eQ(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = eU.Ay.getNickname(t, n, i),
        o = eV.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: eW.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(j.eu, {
                              className: eW.PX,
                              size: b._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(a.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: A()(eY.uN, eW.mG),
            children: [
                (0, l.jsx)(j.eu, { size: b._3.SIZE_32, src: s, "aria-label": i.username, className: eW.RJ }),
                (0, l.jsxs)("div", {
                    className: eW.F0,
                    children: [(0, l.jsx)(a.E, { className: eW.F0, variant: "text-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function eq(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function e$(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: o, onSelect: d } = e,
        c = (0, s.bG)([J.A], () => J.A.getSortedRoles(t.id)),
        u = (0, s.yK)([Y.Ay], () => Y.Ay.getMemberIds(t.id)),
        h = i.useMemo(
            () => [
                ...c.filter((e) => null == r[e.id]),
                ...er()(u)
                    .map(q.default.getUser)
                    .filter(eG.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [u, r, c],
        );
    return (0, l.jsx)(ed.lG, {
        className: eW.Nd,
        children: (0, l.jsxs)(eh.iS, {
            selectionMode: "single",
            onSelectionChange: function (e) {
                null != e && (eq(e) ? d(e.id, D.r2.ROLE) : e instanceof eO.A && d(e.id, D.r2.MEMBER), o());
            },
            options: h,
            formatOption: function (e) {
                return { id: e.id, value: e, label: eq(e) ? e.name : eV.Ay.getUserTag(e) };
            },
            children: [
                (0, l.jsx)("div", {
                    className: eW.ON,
                    children: (0, l.jsx)(eh.a3, {
                        label: eH.intl.string(eH.t.lT5Zth),
                        placeholder: eH.intl.string(eH.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: function (e) {
                            let n = e.target.value;
                            ek.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(eh.X2, {
                    renderListItem: function (e) {
                        let { value: i } = e;
                        if (eq(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: A()(eY.uN, eW.xf),
                                    children: [
                                        (0, l.jsx)(a.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: eW.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(a.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: eH.intl.string(eH.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof eO.A) return (0, l.jsx)(eQ, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function eK() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, s.cf)([W.A], () => W.A),
        c = r?.getGuildId(),
        { guild: u, sortedGuildRoles: h } = (0, s.cf)([X.A, J.A], () => {
            let e = null != c ? X.A.getGuild(c) : void 0,
                t = null != e ? J.A.getSortedRoles(e.id) : void 0;
            return { guild: e, sortedGuildRoles: t };
        }, [c]),
        g = (function (e, t) {
            let n = (0, s.yK)([Y.Ay], () => Y.Ay.getMemberIds(e), [e]),
                [l, a] = i.useMemo(
                    () =>
                        ez()(
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
                    a.length > 0 && null != e && eZ.A.requestMembersById(e, a, !1);
                }, [a, e]),
                (0, s.yK)([q.default], () => l.map(q.default.getUser).filter(eG.Vq), [l])
            );
        })(c, o),
        m = (0, eI.Ay)(),
        x = (0, s.bG)([eM.Ay], () => eM.Ay.roleStyle),
        p = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, ep.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != u ? (0, ew.af)(u) : null,
                        o = null != i && a === i.id,
                        { default: d } = await n.e("77168").then(n.bind(n, 495603));
                    return (t) =>
                        (0, l.jsx)(d, {
                            ...t,
                            id: e,
                            role: i,
                            handleDeletePermission: o
                                ? void 0
                                : () => {
                                      _.A.show({
                                          title: eH.intl.string(eH.t.GuPYQB),
                                          body: eH.intl.format(eH.t.xERCnZ, { name: s }),
                                          cancelText: eH.intl.string(eH.t["ETE/oC"]),
                                          onConfirm: () => G.A.clearPermissionOverwrite(r.id, e),
                                      });
                                  },
                        });
                });
            },
            [r, u],
        );
    if (null == u || null == h || null == r || null == o) return null;
    let A = (e, t) => {
        G.A.updatePermissionOverwrite(r.id, { id: e, type: t, allow: K.x3, deny: K.x3 }).then(() => (0, k.G9)(e));
    };
    null != o && null == o[u.id] && (o[u.id] = K.xT(u.id));
    let f = h
            .filter((e) => o[e.id]?.type === D.r2.ROLE)
            .map((e) =>
                (0, l.jsx)(
                    eT,
                    {
                        theme: m,
                        roleStyle: x,
                        id: e.id,
                        role: e,
                        guild: u,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) => p(t, { id: e.id, name: e.name, role: e }),
                        children: e.name,
                    },
                    `${d}-${e.id}`,
                ),
            ),
        C = er()(g)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(u.id, 24);
                return (0, l.jsx)(
                    eT,
                    {
                        id: e.id,
                        guild: u,
                        theme: m,
                        roleStyle: x,
                        "aria-label": eV.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => p(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: eW.mG,
                            children: [
                                (0, l.jsx)(j.eu, {
                                    size: b._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: eW.bE,
                                }),
                                (0, l.jsx)("span", { className: eW.Xh, children: eV.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(eR.Ay.Sidebar, {
        className: eW.uA,
        scrollable: !0,
        children: (0, l.jsxs)(em.V, {
            onItemSelect: k.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, eu.M)(m) ? n(546716) : n(233497)),
                (0, l.jsx)(eg.Y, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: n } = e;
                        return (0, l.jsx)(e$, {
                            guild: u,
                            channel: r,
                            permissionOverwrites: o,
                            position: null != t ? t : "bottom",
                            onSelect: A,
                            onClose: n,
                        });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (n) =>
                        (0, l.jsx)(em.V.Header, {
                            ref: t,
                            ...n,
                            children: (0, l.jsxs)("div", {
                                className: eW.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [eH.intl.string(eH.t["LPJmL/"]), "/", eH.intl.string(eH.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: eW.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                f,
                C,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(em.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(ex.Anchor, {
                            href: eD.A.getArticleURL(eB.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(a.E, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: eH.intl.string(eH.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function e0() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, s.cf)([W.A], () => W.A);
    if (
        null == (0, s.bG)([X.A], () => (null != e ? X.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(eR.Ay, { className: eW.kL, children: [(0, l.jsx)(eK, {}), (0, l.jsx)(eX, { overwrite: i })] });
}
var e2 = n(369281);
function e5() {
    let e = (0, s.bG)([W.A], () => W.A.advancedMode);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.c, { className: e2.BQ }),
            (0, l.jsx)(et.EN, {
                isExpanded: e,
                onExpandedChange: k.E,
                children: (0, l.jsx)(el.F, {
                    component: (0, l.jsx)(ei.vN, {
                        children: (0, l.jsx)(en.$, {
                            slot: "trigger",
                            className: e2.hZ,
                            children: (0, l.jsxs)(a.E, {
                                variant: "text-lg/semibold",
                                className: e2.Vt,
                                children: [
                                    eH.intl.string(eH.t.dYRsrm),
                                    (0, l.jsx)(es.a, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        className: e2.yM,
                                    }),
                                ],
                            }),
                        }),
                    }),
                    children: (0, l.jsx)(et.kS, { className: e2.nd, children: (0, l.jsx)(e0, {}) }),
                }),
            }),
        ],
    });
}
var e1 = n(243721),
    e3 = n(235986),
    e7 = n(804215);
function e4(e) {
    let { description: t, icon: n, id: i, label: s, onChange: r, value: o } = e;
    return (0, l.jsxs)("div", {
        className: e7.U,
        children: [
            (0, l.jsxs)(e3.A, {
                justify: e3.A.Justify.BETWEEN,
                align: e3.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(e3.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(a.E, { variant: "text-md/semibold", children: s }),
                    }),
                    null != r && null != o && (0, l.jsx)(e1.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, l.jsx)(a.E, { variant: "text-xs/normal", color: "text-default", className: e7.L, children: t }),
        ],
    });
}
var e6 = n(661531),
    e8 = n(993077),
    e9 = n(665877);
let te = function (e) {
    let { className: t, icon: n, noticeText: i, buttonText: s, onClick: r, canSync: o } = e;
    return (0, l.jsx)(e8.Z, {
        className: A()(t, e9.N),
        children: (0, l.jsxs)(e3.A, {
            justify: e3.A.Justify.BETWEEN,
            align: e3.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: e6.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: e9.P,
                    children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: i }),
                }),
                o && (0, l.jsx)(T.$, { size: "sm", variant: "secondary", onClick: r, text: s ?? void 0 }),
            ],
        }),
    });
};
var tt = n(719366),
    tn = n(818348),
    tl = n(413807);
function ti(e) {
    let { channel: t, roles: n, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(v.OZ, {
        className: tl.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case tt.oO.ROLES:
                    (c =
                        (d = n[h]).rowType === tt.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, l.jsx)(P.A, { className: tl.a, color: d.colorString, size: 20 })
                            : (0, l.jsx)(C.i, { size: "custom", className: tl.a, color: d.colorString, height: 20 })),
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
                case tt.oO.MEMBERS:
                    (d = i[h]),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(j.eu, { src: d.avatarURL, size: b._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(a.E, { variant: "text-sm/normal", children: d.name }),
                                d.bot && (0, l.jsx)(U.A, { verified: d.verifiedBot }),
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    className: tl.Gq,
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
                    className: tl.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: tl.z7, children: o }),
                        (0, l.jsxs)("div", {
                            className: tl.z7,
                            children: [
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: ee.vV(d.rowType),
                                }),
                                d.rowType !== tt.T6.EMPTY_STATE &&
                                    (0, l.jsx)(f.m, {
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
                                                        title: eH.intl.string(eH.t.GuPYQB),
                                                        body: eH.intl.format(eH.t.xERCnZ, { name: n }),
                                                        cancelText: eH.intl.string(eH.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, F.$b)(
                                                                        e,
                                                                        n === tt.T6.ROLE ? D.r2.ROLE : D.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, F.pF)(l)
                                                                        ? G.A.clearPermissionOverwrite(t.id, l.id)
                                                                        : (0, k.R$)(t.id, [l]);
                                                                } else G.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, l),
                                                    }))
                                                );
                                            },
                                            className: tl.HI,
                                            "aria-disabled": !m,
                                            "aria-label": eH.intl.string(eH.t.N86XcP),
                                            children: (0, l.jsx)(E.a, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: A()(tl.Yz, { [tl._2]: g || s }),
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
                case tt.oO.ROLES:
                    return (0, l.jsx)(tr, { title: eH.intl.string(eH.t["LPJmL/"]) }, "roles-title");
                case tt.oO.MEMBERS:
                    return (0, l.jsx)(tr, { title: eH.intl.string(eH.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function ts(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, s.bG)([J.A], () => J.A.getSortedRoles(t.id)),
        d = ee.C$(t, o, i, z.QY, r),
        c = (0, s.bG)([Y.Ay], () => ee.Wi(Y.Ay.getMemberIds(t.id), i, t, z.QY, r)),
        u = (0, F.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: A()(tl.j1, tl.vu),
        children: [
            (0, l.jsx)(e4, {
                label: eH.intl.string(eH.t.StpcFU),
                description: eH.intl.string(eH.t.f7VbhF),
                icon: (0, l.jsx)(S.q, {
                    size: "custom",
                    color: "currentColor",
                    className: tl.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: tl.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: tl.MJ,
                        children: [
                            (0, l.jsx)(a.E, { variant: "text-md/semibold", children: eH.intl.string(eH.t["7BWDRb"]) }),
                            (0, l.jsx)(f.m, {
                                text: eH.intl.string(eH.t.arRuES),
                                shouldShow: !u,
                                children: (0, l.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eH.intl.string(eH.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, y.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e("13250"),
                                                n.e("48845"),
                                                n.e("4158"),
                                                n.e("66373"),
                                                n.e("92513"),
                                                n.e("89916"),
                                                n.e("20379"),
                                                n.e("19193"),
                                                n.e("13846"),
                                            ]).then(n.bind(n, 841811));
                                            return (t) => (0, l.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !u,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(ti, {
                        channel: i,
                        roles: d,
                        members: c,
                        disabledReason: u ? null : eH.intl.string(eH.t.arRuES),
                        getRemoveTooltipHint: Z.Mt,
                    }),
                ],
            }),
        ],
    });
}
function ta(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: a, roles: r, members: o } = e,
        d = (0, s.bG)([Q.A], () => Q.A.can(tn.xB.ADMINISTRATOR, t)),
        c = K.MJ(tn.xB.VIEW_CHANNEL, t),
        u = K.MJ(tn.xB.ADMINISTRATOR, t);
    async function h() {
        let e = i.accessPermissions,
            s = q.default.getCurrentUser();
        a || null == (await (0, B.D)(t.id, i.id))
            ? (ee.uB(i, e, a), a || null == s || d || ee.tP(i, e))
            : (0, y.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("4823").then(n.bind(n, 158954));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: eH.intl.string(eH.t.ZzdgUm),
                          subtitle: eH.intl.format(eH.t.DwY2vN, {
                              onClick: () => {
                                  H.A.open(t.id, eB.BEX.ONBOARDING), n.onClose();
                              },
                          }),
                          actions: [{ text: eH.intl.string(eH.t.BddRzS), onClick: n.onClose }],
                      });
              });
    }
    let g = {
        title: eH.intl.string(eH.t.aUI70g),
        subtitle: eH.intl.string(eH.t.hfbjIH),
        formLabel: eH.intl.string(eH.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((g.title = eH.intl.string(eH.t.lEPAZ5)),
              (g.subtitle = eH.intl.string(eH.t.RQUk61)),
              (g.formLabel = eH.intl.string(eH.t["8VIxJu"])))
            : i.type === eB.rbe.GUILD_VOICE && (g.subtitle = eH.intl.string(eH.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: A()(tl.j1, { [tl.vu]: a }),
            children: [
                (0, l.jsx)(e4, {
                    description: g.subtitle,
                    icon: (0, l.jsx)(I.X, {
                        size: "custom",
                        color: "currentColor",
                        className: tl.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: g.title,
                    onChange: h,
                    value: a,
                }),
                (0, l.jsxs)("div", {
                    className: tl.X4,
                    children: [
                        u &&
                            (0, l.jsx)("div", {
                                className: tl.Ux,
                                children: (0, l.jsx)(M.p, {
                                    messageType: M.Y.WARNING,
                                    children: eH.intl.string(eH.t["5f3HIC"]),
                                }),
                            }),
                        !c &&
                            !u &&
                            !a &&
                            (0, l.jsx)("div", {
                                className: tl.Ux,
                                children: (0, l.jsx)(M.p, {
                                    messageType: M.Y.WARNING,
                                    children: eH.intl.string(eH.t.ZAk4Q9),
                                }),
                            }),
                        a &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: tl.MJ,
                                        children: [
                                            (0, l.jsx)(R.D, {
                                                variant: "heading-sm/semibold",
                                                className: tl.DH,
                                                children: g.formLabel,
                                            }),
                                            (0, l.jsx)(T.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eH.intl.string(eH.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, y.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            n.e("13250"),
                                                            n.e("48845"),
                                                            n.e("4158"),
                                                            n.e("92513"),
                                                            n.e("89916"),
                                                            n.e("20379"),
                                                            n.e("19193"),
                                                            n.e("68083"),
                                                        ]).then(n.bind(n, 685374));
                                                        return (t) =>
                                                            (0, l.jsx)(e, { ...t, channelId: i.id, inSettings: !0 });
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(ti, { channel: i, roles: r, members: o, getRemoveTooltipHint: ee.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function tr(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(L.c, { className: tl.yF }),
            (0, l.jsx)(R.D, { variant: "heading-sm/semibold", className: A()(tl.DH, tl.Gf), children: t }),
        ],
    });
}
let to = s.Ay.connectStores([W.A, Q.A, Y.Ay, X.A, J.A], () => {
    let e,
        t = W.A.channel,
        n = W.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = X.A.getGuild(t.getGuildId());
        let n = Y.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = J.A.getSortedRoles(e.id);
            (s = W.A.editedPermissionIds.reduce((e, t) => {
                let n = W.A.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (l = ee.uX(e, r, t, t.accessPermissions, s)),
                (i = ee.Wi(n, t, e, t.accessPermissions, s)),
                (a = ee.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != n && Q.A.can(tn.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: a,
        locked: W.A.locked,
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
    if (null == s || null == c) return null;
    let m = { title: eH.intl.string(eH.t.BAZMBn), subtitle: eH.intl.string(eH.t.XLrZyp) };
    return (
        s.isCategory() && ((m.title = eH.intl.string(eH.t["/uELTj"])), (m.subtitle = eH.intl.string(eH.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(R.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(a.E, { variant: "text-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, l.jsx)(te, {
                              canSync: !1,
                              icon: w.f,
                              noticeText: eH.intl.format(eH.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(te, {
                              buttonText: eH.intl.string(eH.t.NVwuHq),
                              canSync: !0,
                              icon: (0, O.k)($),
                              noticeText: eH.intl.format(eH.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, y.openModalLazy)(async () => {
                                          let { default: e } = await n.e("87634").then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: s,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = { ...i.permissionOverwrites };
                                                      null != e && null == t[e] && (t[e] = K.xT(e)),
                                                          (await (0, V.n)(s, t[e].deny, t[e].allow)) &&
                                                              (0, d.RT)(s.id, {
                                                                  permissionOverwrites: Object.values(t),
                                                              });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice() ? (0, l.jsx)(ts, { guild: c, channel: s, permissionUpdates: g }) : null,
                (0, l.jsx)(ta, { channel: s, guild: c, isPrivateGuildChannel: u, roles: o, members: r }),
                (0, l.jsx)(e5, {}),
            ],
        })
    );
});
var td = n(526132),
    tc = n(97469),
    tu = n(406704),
    th = n(363195),
    tg = n(95701),
    tm = n(291731),
    tx = n(734057),
    tp = n(994500),
    tA = n(625494),
    tf = n(608226),
    tC = n(282956),
    tj = n(860603);
function tb(e) {
    let { refToScroller: t } = e,
        n = (0, s.bG)([e_.A], () => e_.A.getChannel(), []),
        i = (0, s.bG)([X.A], () => (null != n ? X.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: a,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, s.cf)([tm.A], () => tm.A.getProps(), []);
    return null == i || null == n
        ? null
        : (0, l.jsx)(tj.A, {
              guild: i,
              channel: n,
              section: a,
              sectionId: r,
              webhooks: o,
              editedWebhook: d,
              isFetchingWebhooks: c,
              hasChanges: tm.A.hasChanges,
              errors: u,
              refToScroller: t,
          });
}
function tN() {
    let { channel: e, submitting: t } = (0, s.cf)([e_.A], () => e_.A.getProps()),
        n = (0, s.bG)([tm.A], () => tm.A.editedWebhook),
        i = (0, s.bG)([X.A], () => (null != e ? X.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(ec.A, {
        submitting: t,
        onReset: function () {
            tC.A.init();
        },
        onSave: () => {
            null != i && null != n && tC.A.saveWebhook(i.id, n);
        },
    });
}
var tE = n(886235),
    tv = n(351906);
function ty() {
    let e = (0, s.bG)([tv.A], () => tv.A.hideInstantInvites),
        { channel: t, guild: n } = (0, s.cf)([e_.A, X.A], () => {
            let { channel: e } = e_.A.getProps(),
                t = null != e ? X.A.getGuild(e.getGuildId()) : null;
            return { channel: e, guild: t };
        }, []),
        i = (0, s.bG)([Q.A], () => null != t && Q.A.can(eB.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: a, loading: r } = (0, s.cf)([e_.A], () => e_.A.getInvites(), []);
    return (0, l.jsx)(tE.A, { invites: a, loading: r, guild: n, channel: t, canCreateInvites: i, hide: e });
}
n(938796), n(667532);
var tS = n(371444),
    tT = n(392421),
    tI = n(602137),
    tM = n(665260),
    tR = n(452027),
    tL = n(260598),
    tw = n(150934),
    tO = n(825484),
    t_ = n(123292),
    tG = n(691885),
    tk = n(270003),
    tD = n(331322),
    tU = n(144228),
    tP = n(292666),
    tV = n(106236),
    tB = n(534963),
    tH = n(820284),
    tF = n(432371),
    tz = n(323073),
    tZ = n(355622),
    tW = n(408018),
    tY = n(138617),
    tJ = n(375499),
    tX = n(334295),
    tQ = n(770335),
    tq = n(7584),
    t$ = n(422844),
    tK = n(307301),
    t0 = n(599119),
    t2 = n(219504),
    t5 = n(807632),
    t1 = n(376310);
n(253913);
var t3 = n(245567);
function t7(e) {
    let { channel: t } = e,
        a = (0, s.bG)([Q.A], () => Q.A.can(eB.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        o = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            a &&
                !e &&
                (0, y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([n.e("50513"), n.e("47326")]).then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, a]),
        u = i.useCallback((e) => t.isGameInvitesChannel() && e.name === t5.Dg, [t]),
        h = i.useCallback(
            (e) => {
                !a ||
                    u(e) ||
                    (0, y.openModalLazy)(async () => {
                        let { default: i } = await Promise.all([n.e("50513"), n.e("47326")]).then(n.bind(n, 950989));
                        return (n) => (0, l.jsx)(i, { ...n, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [a, u, t],
        ),
        {
            handleDragStart: g,
            handleDragReset: m,
            handleDragComplete: x,
        } = (0, t2.A)(t.availableTags, (e) => {
            (0, d.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: t3._A,
        children: [
            o
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          t4,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: a,
                              onTagClick: h,
                              onDragComplete: x,
                              onDragReset: m,
                              onDragStart: g,
                              tooltipText: u(e) ? eH.intl.string(eH.t.FiKFKs) : void 0,
                          },
                          e.id,
                      ),
                  )
                : null,
            o
                ? (0, l.jsx)(N.D, {
                      onClick: c,
                      className: A()(t3.JE, { [t3.r9]: !a || r }),
                      children: (0, l.jsx)(tK.j, {
                          size: "custom",
                          "aria-label": eH.intl.string(eH.t["/jubeD"]),
                          color: e6.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(T.$, {
                      variant: "primary",
                      text: eH.intl.string(eH.t["/jubeD"]),
                      disabled: !a,
                      onClick: c,
                  }),
        ],
    });
}
function t4(e) {
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
        } = (0, t0.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: a,
            onDragReset: o,
        });
    return (0, l.jsx)("div", {
        className: A()(t3.kL, { [t3.A]: null != h && c < h, [t3.Ze]: null != h && c > h }),
        ref: (e) => {
            u(g(e));
        },
        onMouseEnter: () => m(i),
        onMouseLeave: () => m(!1),
        children: (0, l.jsx)(f.m, {
            text: d,
            asContainer: !0,
            shouldShow: null != d,
            children: (0, l.jsx)(t1.A, {
                tag: t,
                disabled: !i,
                ariaLabel: eH.intl.formatToPlainString(eH.t.jhSvB9, { name: t.name }),
                onClick: i ? () => s(t) : void 0,
            }),
        }),
    });
}
var t6 = n(235640),
    t8 = n(268761),
    t9 = n(474078),
    ne = n(783878),
    nt = n(101704);
let nn = function (e) {
    let { autoArchiveDuration: t, onChange: n, isDisabled: i, helperText: s } = e,
        a = (0, t8.Gk)();
    return (0, l.jsx)("div", {
        className: nt.gy,
        children: (0, l.jsx)(ne.Z, {
            selectionMode: "single",
            label: eH.intl.string(eH.t.FGjMZS),
            helperText: s,
            disabled: i,
            options: a,
            value: t,
            onSelectionChange: n,
        }),
    });
};
var nl = n(280450),
    ni = n(717518),
    ns = n(871237),
    na = n(927813),
    nr = n(879631);
let no = (0, n(600975).C)({
    kind: "guild",
    id: "2026-03_spoiler_channel",
    label: "Spoiler Channel",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable spoiler channel setting", config: { enabled: !0 } }],
});
var nd = n(373378);
function nc(e) {
    let { label: t, helperText: n, hideLabel: s, disabled: a, value: r, onChange: o } = e,
        [d, c] = i.useState(null),
        u = i.useMemo(() => {
            let e = [...(d ?? eB.s_7)];
            return (
                e.includes(r) || e.unshift(r), e.map((e) => ({ id: e.toString(), label: (0, nr.$)(e, !1), value: e }))
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
            n <= eB.WA1 && t.push(n);
            let l = n * na.A.Seconds.MINUTE;
            l <= eB.WA1 && t.push(l);
            let i = n * na.A.Seconds.HOUR;
            i <= eB.WA1 && t.push(i), c(t);
        }, []),
        m = i.useCallback(() => {
            c(null);
        }, []);
    return (0, l.jsx)("div", {
        className: nd.QB,
        children: (0, l.jsx)(ne.Z, {
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
            placeholder: eH.intl.string(eH.t.dBqQu4),
        }),
    });
}
var nu = n(953727);
function nh(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nu.A)(s),
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
function ng(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nu.A)(s),
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
var nm = n(746080),
    nx = n(307731),
    np = n(37411),
    nA = n(867395);
let nf = {
        popoutLocation: {
            page: eB.liQ.CHANNEL_SETTINGS,
            section: eB.JJy.CHANNEL_DEFAULT_REACTION,
            object: eB.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nC = {
        popoutLocation: {
            page: eB.liQ.CHANNEL_SETTINGS,
            section: eB.JJy.CHANNEL_NAME,
            object: eB.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nj = "AUTOMATIC_RTC_REGION",
    nb = s.Ay.connectStores([e_.A], () => {
        let { channel: e, submitting: t } = e_.A.getProps();
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
                } = e;
                e.isThread() && 0 === (t = (0, t9.A)(t, !0)).length
                    ? o.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eH.intl.string(eH.t.uXA573) },
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
                      });
            },
        };
    })(ec.A);
function nN(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(tX.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: nx.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === tQ.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: nC,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(eg.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: eg.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(tJ.A, { ...e, ref: a, active: n, className: nA.Z8, tabIndex: 0 });
        },
    });
}
class nE extends i.PureComponent {
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
                (this.channelTopicTextAreaChannel = (0, tg.createChannelRecord)({
                    id: "1",
                    type: eB.rbe.DM,
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
            richTopicValue: (0, tW.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && tB.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, tW.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText() {
        let { channel: e } = this.props;
        return e?.isForumLikeChannel()
            ? eH.intl.string(eH.t["a+1pdO"])
            : e?.isThread()
              ? eH.intl.string(eH.t.OMmNCv)
              : eH.intl.string(eH.t["HEA/DU"]);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, nr.$)(e * na.A.Seconds.MINUTE, !0);
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
                showSpoilerChannelSetting: h,
            } = this.props,
            g = tg.Le.has(e.type),
            m = e.isForumLikeChannel(),
            x = m && e.availableTags?.every((e) => e.moderated),
            p = q.default.getCurrentUser()?.isStaff() === !0,
            f = tg.IY.has(e.type)
                ? (0, l.jsx)(tR.D, {
                      label: m ? eH.intl.string(eH.t.yR6HwZ) : eH.intl.string(eH.t.X8jMDh),
                      children: (0, l.jsx)(tY.Ay, {
                          className: A()(nA.zm, { [nA.r9]: !s }),
                          innerClassName: A()(nA.At, { [nA.r9]: !s }),
                          characterCountClassName: nA.IQ,
                          maxCharacterCount: m ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eH.intl.string(eH.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? d?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: m ? tZ.oU.FORUM_CHANNEL_GUIDELINES : tZ.oU.CHANNEL_TOPIC,
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
                    ? (0, l.jsx)(tL.f, {
                          label: eH.intl.string(eH.t.qk2jdY),
                          placeholder: eH.intl.string(eH.t.DDjD1H),
                          value: tq.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
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
                          (0, l.jsx)(L.c, {}),
                          (0, l.jsx)(tR.D, {
                              label: eH.intl.string(eH.t["P/y+sj"]),
                              description: eH.intl.string(eH.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(t7, { channel: e }),
                          }),
                          (0, l.jsx)(tw.S, {
                              disabled: !s || x,
                              checked: e.hasFlag(nm.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eH.intl.string(eH.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            b = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(L.c, {}),
                          (0, l.jsx)(tR.D, {
                              label: eH.intl.string(eH.t["8ao1+E"]),
                              description: eH.intl.string(eH.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: nA.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: A()(nA.t0, nA._h),
                                          children: (0, l.jsxs)(tO.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(eg.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: eg.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(T.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eH.intl.string(eH.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(t_.Q, {
                                                            text: eH.intl.string(eH.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(t6.A, { reactionEmoji: e.defaultReactionEmoji }),
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
                                  className: nA.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: A()(nA.t0, nA.WC),
                                          children: (0, l.jsx)(tG.l, {
                                              selectionMode: "single",
                                              label: eH.intl.string(eH.t["kQvoC/"]),
                                              description: eH.intl.string(eH.t.mOSViT),
                                              options: [
                                                  {
                                                      id: "list",
                                                      label: eH.intl.string(eH.t["4HXEZG"]),
                                                      value: tS.C.LIST,
                                                  },
                                                  {
                                                      id: "grid",
                                                      label: eH.intl.string(eH.t["8RswJG"]),
                                                      value: tS.C.GRID,
                                                  },
                                              ],
                                              value: e.defaultForumLayout ?? tS.C.LIST,
                                              onSelectionChange: this.handleChangeDefaultForumLayout,
                                          }),
                                      }),
                                      e.defaultForumLayout === tS.C.GRID
                                          ? (0, l.jsx)(nh, { className: nA.Kf })
                                          : (0, l.jsx)(ng, { className: nA.Kf }),
                                  ],
                              }),
                              (0, l.jsx)(L.c, {}),
                          ],
                      })
                    : null,
            E =
                e.isForumLikeChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tG.l, {
                          selectionMode: "single",
                          label: eH.intl.string(eH.t.gePre2),
                          description: eH.intl.string(eH.t["165cVX"]),
                          options: [
                              { id: "activity", label: eH.intl.string(eH.t.ElZtzj), value: tI.T.LATEST_ACTIVITY },
                              { id: "creation", label: eH.intl.string(eH.t.w28f3F), value: tI.T.CREATION_DATE },
                          ],
                          value: e.getDefaultSortOrder(),
                          onSelectionChange: this.handleChangeDefaultSortOrder,
                      })
                    : null,
            v = e.isForumLikeChannel()
                ? (0, l.jsx)(tG.l, {
                      selectionMode: "single",
                      label: eH.intl.string(eH.t.Paxaug),
                      description: eH.intl.string(eH.t.DqOl8J),
                      options: [
                          { id: "some", label: eH.intl.string(eH.t.rQ0ctQ), value: tT.n.MATCH_SOME },
                          { id: "all", label: eH.intl.string(eH.t.FCXUu0), value: tT.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            y = g ? r : s,
            S = tg.nb.has(e.type)
                ? m
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(L.c, {}),
                              (0, l.jsxs)(tk.n, {
                                  label: eH.intl.string(eH.t.tTHx98),
                                  children: [
                                      (0, l.jsx)(nc, {
                                          label: eH.intl.string(eH.t.O1c02q),
                                          helperText: this.getSlowmodeHelpText(),
                                          value: e.rateLimitPerUser,
                                          onChange: this.handleChangeSlowmode,
                                          disabled: !y,
                                      }),
                                      (0, l.jsx)(nc, {
                                          label: eH.intl.string(eH.t["fkY5+l"]),
                                          helperText: eH.intl.string(eH.t.kdZU6H),
                                          value: e.defaultThreadRateLimitPerUser ?? 0,
                                          onChange: this.handleChangeThreadMessageSlowmode,
                                          disabled: !y,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsx)(nc, {
                          label: eH.intl.string(eH.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          value: e.rateLimitPerUser,
                          onChange: this.handleChangeSlowmode,
                          disabled: !y,
                      })
                : null,
            I =
                g && null != e.threadMetadata
                    ? (0, l.jsx)(tH.A, {
                          page: eB.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nn, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? np.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eH.intl.string(eH.t["3aJN9M"]) : eH.intl.string(eH.t.YUXr4Z),
                          }),
                      })
                    : null,
            R =
                e.type === eB.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(e1.d, {
                              label: eH.intl.string(eH.t.s2rpNf),
                              description: eH.intl.string(eH.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            w = (0, tz.Gc)(e),
            O = null != d && (0, ew.wh)(d),
            _ = "none";
        w ? (_ = "nsfw") : e.isSpoilerChannel() && (_ = "spoiler");
        let G = [
                { value: "none", name: eH.intl.string(eH.t.OtnNJE), desc: eH.intl.string(eH.t["a5/7hX"]) },
                { value: "spoiler", name: eH.intl.string(eH.t.TvUHTb), desc: eH.intl.string(eH.t.ddWXHa) },
                { value: "nsfw", name: eH.intl.string(eH.t.Es25Yf), desc: eH.intl.string(eH.t["9eUgwR"]) },
            ],
            k =
                h && tg.LE.has(e.type)
                    ? (0, l.jsxs)(tD.B, {
                          gap: 4,
                          padding: { top: 8, bottom: 8 },
                          children: [
                              (0, l.jsx)(tU.z, {
                                  label: eH.intl.string(eH.t.yLB4y2),
                                  onChange: (e) => this.handleChannelRestrictionChange(e),
                                  options: G,
                                  value: _,
                                  disabled: !s || null != e.linkedLobby || O,
                              }),
                              null != e.linkedLobby
                                  ? (0, l.jsx)(M.p, { messageType: M.Y.WARNING, children: eH.intl.string(eH.t.EvavKG) })
                                  : null,
                          ],
                      })
                    : h && g
                      ? (0, l.jsx)(e1.d, {
                            label: eH.intl.string(eH.t.TvUHTb),
                            description: eH.intl.string(eH.t.ddWXHa),
                            onChange: this.handleThreadSpoilerChange,
                            checked: e.isSpoilerChannel(),
                            disabled: !s,
                        })
                      : tg.LE.has(e.type)
                        ? (0, l.jsxs)(tD.B, {
                              gap: 4,
                              children: [
                                  (0, l.jsx)(e1.d, {
                                      label: eH.intl.string(eH.t.Es25Yf),
                                      description: eH.intl.string(eH.t["9eUgwR"]),
                                      onChange: this.handleNSFWChange,
                                      checked: (0, tz.Gc)(e),
                                      disabled: !s || null != e.linkedLobby || O,
                                  }),
                                  null != e.linkedLobby
                                      ? (0, l.jsx)(M.p, {
                                            messageType: M.Y.WARNING,
                                            children: eH.intl.string(eH.t.l6uSVa),
                                        })
                                      : null,
                              ],
                          })
                        : null,
            D =
                tg.xR.has(e.type) &&
                null != d &&
                d.features.has(eB.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, l.jsxs)(tD.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(e1.d, {
                                  label: eH.intl.string(eH.t.Au2b7m),
                                  description: eH.intl.format(eH.t.tI7KNX, {
                                      documentationLink: eD.A.getArticleURL(eB.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === eB.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(M.p, { messageType: M.Y.INFO, children: eH.intl.string(eH.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            U = tg.wE.has(e.type)
                ? (0, l.jsx)(tH.A, {
                      page: eB.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(nn, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, t8.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? eH.intl.string(eH.t.fyXclY)
                              : eH.intl.string(eH.t.W3Noi9),
                      }),
                  })
                : null,
            P = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(e1.d, {
                      label: eH.intl.string(eH.t.id3ozj),
                      description: eH.intl.format(eH.t.feJW1z, {
                          helpdeskArticle: eD.A.getArticleURL(eB.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(nm.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eB.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !d?.features.has(eB.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            V = e.isMediaChannel()
                ? (0, l.jsx)(e1.d, {
                      label: eH.intl.string(eH.t.u8LZOt),
                      description: eH.intl.string(eH.t.J4wCc7),
                      checked: !e.hasFlag(nm.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === eB.rbe.GUILD_CATEGORY
            ? ((i = eH.intl.string(eH.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eH.intl.string(eH.t.uyVrTN)), (n = "post-title"))
              : g
                ? ((i = eH.intl.string(eH.t.j3XWjD)), (n = "thread-name"))
                : ((i = eH.intl.string(eH.t.PVbHDl)), (n = "channel-name"));
        let B = u ? a : s;
        return (0, l.jsxs)(tD.B, {
            gap: 24,
            children: [
                (0, l.jsx)(tP.k, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: n,
                    autoFocus: !0,
                    disabled: !B,
                    maxLength: eB.Ign,
                    trailing: B
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(nN, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                f,
                C,
                j,
                b,
                S,
                I,
                N,
                E,
                v,
                R,
                k,
                D,
                P,
                U,
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
        let i = (0, ns.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(tV.A, {
            label: eH.intl.string(eH.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > eB.gp3 ? eH.intl.format(eH.t.SbQJk5, { bitrate: eB.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [...new Set([eB.hcd, eB.gp3, i])],
            minValue: eB.hcd,
            maxValue: i,
            keyboardStep: eB.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            tg.k.has(e.type) &&
            (e.isGuildVocal() || tu.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: eB.K3c.AUTO, name: eH.intl.string(eH.t.jjKYpu) },
            { value: eB.K3c.FULL, name: eH.intl.string(eH.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(tU.z, {
            label: eH.intl.string(eH.t.jhJEJs),
            helperText: eH.intl.format(eH.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? eB.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eH.intl.string(eH.t.XX5ciX)
            : eH.intl.formatToPlainString(eH.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? eB.RCc : eB.cSc;
        return (0, l.jsx)(tV.A, {
            label: eH.intl.string(eH.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eH.intl.format(e.isGuildStageVoice() ? eH.t.OqZI8D : eH.t["8yb3JT"], {}),
            initialValue: Math.min(e.userLimit, i),
            onValueChange: this.handleUserLimitChange,
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
                label: eH.intl.string(eH.t.JEmsap),
                value: nj,
            });
        let a = e.rtcRegion ?? nj;
        return (0, l.jsx)(tG.l, {
            selectionMode: "single",
            label: eH.intl.string(eH.t["Ms8bX+"]),
            description: eH.intl.string(eH.t["dbTs+z"]),
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
                e.type === eB.rbe.GUILD_CATEGORY
                    ? (0, eu.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, eu.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(e3.A, {
                justify: e3.A.Justify.CENTER,
                className: nd.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = "channel-settings-overview-heading";
        return (0, l.jsxs)(tk.n, {
            "aria-labelledby": i,
            children: [
                (0, l.jsx)(R.D, { id: i, variant: "text-lg/medium", children: eH.intl.string(eH.t["/dp6yY"]) }),
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
        return (0, l.jsx)(tX.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: nx.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: nf,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tM.lA)(t.flags, nm.lx.REQUIRE_TAG, e);
        (0, d.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, t9.A)(e, !1)) : eB.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, ns.an)(e));
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
            let e = (0, t9.A)(t, !0);
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
        (0, d.fy)({ topic: tq.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, d.fy)({ template: tq.Ay.translateInlineEmojiToSurrogates(e) });
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
    handleChangeBitrate = (e) => {
        (0, d.fy)({ bitrate: 1e3 * Math.round(e / 1e3) });
    };
    handleUserLimitChange = (e) => {
        (0, d.fy)({ userLimit: Math.round(e) });
    };
    handleChannelRestrictionChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tM.lA)(t.flags, nm.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, d.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleThreadSpoilerChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tM.lA)(t.flags, nm.lx.IS_SPOILER_CHANNEL, e);
        (0, d.fy)({ flags: n });
    };
    handleNSFWChange = (e) => {
        (0, d.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tM.lA)(t.flags, nm.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, d.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, d.fy)({ type: e ? eB.rbe.GUILD_ANNOUNCEMENT : eB.rbe.GUILD_TEXT });
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
        (0, d.fy)({ rtcRegion: e === nj ? null : e });
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
        let n = (0, tM.lA)(t.flags, nm.lx.SUMMARIES_DISABLED, !e);
        (0, d.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tM.lA)(t.flags, nm.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, d.fy)({ flags: n });
    };
}
function nv() {
    let { errors: e, channel: t, submitting: n, subsection: a } = (0, s.cf)([e_.A], () => e_.A.getProps()),
        r = (0, s.bG)([ni.A], () => ni.A.getRegions(t?.getGuildId() ?? null)),
        o = (0, s.bG)([th.A], () => th.A.theme),
        d = (0, s.bG)([X.A], () => X.A.getGuild(t?.getGuildId())),
        c = (0, tu.NI)(t),
        u = (0, tu.H_)(t),
        { canManageChannels: h, canSendMessages: g } = (0, s.cf)([Q.A], () => ({
            canManageChannels: Q.A.can(eB.xBc.MANAGE_CHANNELS, t),
            canSendMessages: Q.A.can(eB.xBc.SEND_MESSAGES, t),
        })),
        x = (0, m.Ay)(t),
        p = nl.default.getId(),
        A = (0, t$.p)(),
        f = t?.id,
        C = (0, tF.cI)(t, !1, !0),
        j = no.useExperiment(
            { guildId: t?.guild_id, location: "ChannelSettingsOverview" },
            { autoTrackExposure: !0 },
        ).enabled,
        b = i.useCallback(
            (e) => {
                null != f && A.getState().setLayoutType(f, e);
            },
            [f, A],
        );
    return (0, l.jsx)(nE, {
        errors: e,
        channel: t,
        channelName: x,
        submitting: n,
        regions: r,
        theme: o,
        guild: d,
        canManageChannels: t?.isThread() ? c : h,
        canSendMessages: g,
        isThreadModerator: u,
        canManageThread: c,
        subsection: a,
        isForumPost: null != t && t.isForumPost(),
        isOwner: t?.isOwner(p),
        handleSetDefaultLayout: b,
        showChannelSummariesSettings: C,
        showSpoilerChannelSetting: j,
    });
}
var ny = n(554412);
function nS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    g.Ay.trackWithMetadata(eB.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class nT extends i.PureComponent {
    componentDidMount() {
        nS(this.props.section, null, this.props.analyticsLocation);
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
        (l !== eB.XlH.CLOSED || l === t) &&
        (s || i !== eB.p_A.PERMISSIONS) &&
        (r || o || i !== eB.p_A.INTEGRATIONS)
            ? i !== n && nS(i, n)
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
            : (0, l.jsx)(u.Ay, {
                  theme: e,
                  sidebarTheme: t,
                  section: n ?? eB.p_A.OVERVIEW,
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
                          { GUILD_CATEGORY: A } = eB.rbe,
                          f = tg.Le.has(t.type),
                          C =
                              t.type === A
                                  ? eH.intl.string(eH.t.ifbXnL)
                                  : f
                                    ? t.isForumPost()
                                        ? eH.intl.string(eH.t.nEOg1N)
                                        : eH.intl.string(eH.t.H7vTe2)
                                    : eH.intl.string(eH.t["8D8Rsb"]);
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
                                                          className: ny.p,
                                                      })
                                                    : null,
                                                (0, m.m1)(t, q.default, tp.A),
                                                null != n
                                                    ? (0, l.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: ny.L,
                                                          children: (0, m.m1)(n, q.default, tp.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : eH.intl.string(eH.t.XPDhcc),
                          },
                          {
                              section: eB.p_A.OVERVIEW,
                              label: eH.intl.string(eH.t["/dp6yY"]),
                              ariaLabel: eH.intl.string(eH.t["/dp6yY"]),
                              element: nv,
                              notice: { element: nb, stores: [e_.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: eB.p_A.PERMISSIONS,
                              label: eH.intl.string(eH.t.xrmhRX),
                              element: to,
                              notice: { element: eJ, stores: [W.A] },
                              predicate: () => i && !f,
                          },
                          {
                              section: eB.p_A.INSTANT_INVITES,
                              label: eH.intl.string(eH.t["9F90ic"]),
                              element: ty,
                              type: h.Py.CUSTOM,
                              predicate: () => t.type !== A && s && !f && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eB.p_A.INTEGRATIONS,
                              label: eH.intl.string(eH.t.s69NLF),
                              ariaLabel: eH.intl.string(eH.t.s69NLF),
                              element: tb,
                              notice: { stores: [tm.A], element: tN },
                              predicate: () => !((!u && !g) || t.isModeratorReportChannel()) && tg.oH.has(t.type),
                          },
                          { section: h.Fq.DIVIDER },
                          {
                              section: eB.p_A.DELETE,
                              onClick() {
                                  (0, tf.O)(t, function () {
                                      tA._.subscribeOnce(eB.jej.LAYER_POP_COMPLETE, () => {
                                          (0, d.D3)(t.id);
                                      }),
                                          (0, c.jH)();
                                  });
                              },
                              label: C,
                              ariaLabel: C,
                              icon: (0, l.jsx)(r.u, { size: "xs", color: "currentColor" }),
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
function nI() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([e_.A], () => e_.A.getProps()),
        n = (0, s.bG)([e_.A], () => e_.A.getFormState()),
        i = (0, s.bG)([e_.A], () => e_.A.getSection()),
        a = (0, s.bG)([th.A], () => th.A.theme),
        r = (0, tc.NC)(),
        o = (0, tu.NI)(e),
        d = (0, tu.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, s.cf)([Q.A], () => ({
            canManageChannels: Q.A.can(eB.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && Q.A.can(eB.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && Q.A.can(eB.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, td.n)(e, Q.A),
        })),
        m = (0, s.bG)([tx.A], () => tx.A.getChannel(e?.parent_id));
    return (0, l.jsx)(nT, {
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
