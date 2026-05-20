l.r(t), l.d(t, { default: () => lM });
var n = l(627968),
    i = l(64700),
    s = l(17928),
    a = l(834730),
    r = l(241326),
    o = l(228366),
    d = l(435183),
    c = l(398590),
    u = l(83257),
    h = l(361739),
    g = l(95561),
    m = l(47167),
    x = l(713654),
    p = l(503698),
    A = l.n(p),
    f = l(990078),
    C = l(957485),
    j = l(97808),
    b = l(778712),
    N = l(939249),
    E = l(285796),
    v = l(475825),
    y = l(192308),
    S = l(451394),
    T = l(821609),
    M = l(194261),
    I = l(512950),
    R = l(534514),
    L = l(404778),
    w = l(663417),
    O = l(565787),
    _ = l(157559),
    G = l(308528),
    D = l(702805),
    k = l(155718),
    U = l(709066),
    P = l(87e3),
    V = l(60868),
    B = l(894328),
    H = l(468689),
    F = l(776781),
    z = l(233993),
    Z = l(110618),
    W = l(176360),
    Y = l(696451),
    J = l(317525),
    Q = l(71393),
    X = l(576705),
    q = l(287809);
function $(e) {
    let { width: t = 18, height: l = 18, color: i = "currentColor", foreground: s, background: a, className: r } = e;
    return (0, n.jsx)("svg", {
        width: t,
        height: l,
        className: r,
        viewBox: "0 0 18 18",
        children: (0, n.jsxs)("g", {
            stroke: "none",
            strokeWidth: "1",
            fill: "none",
            fillRule: "evenodd",
            children: [
                (0, n.jsx)("polygon", { points: "0 0 18 0 18 18 0 18" }),
                (0, n.jsx)("path", {
                    d: "M2.25,9 C2.25,10.6575 2.9325,12.15 4.02,13.23 L2.25,15 L6.75,15 L6.75,10.5 L5.07,12.18 C4.26,11.3625 3.75,10.245 3.75,9 C3.75,7.0425 5.0025,5.3775 6.75,4.7625 L6.75,3.195 C4.1625,3.8625 2.25,6.2025 2.25,9 Z M15.75,3 L11.25,3 L11.25,7.5 L12.93,5.82 C13.74,6.6375 14.25,7.755 14.25,9 C14.25,10.9575 12.9975,12.6225 11.25,13.2375 L11.25,14.805 C13.8375,14.1375 15.75,11.7975 15.75,9 C15.75,7.3425 15.0675,5.85 13.98,4.77 L15.75,3 Z",
                    fillOpacity: "0.3",
                    fill: i,
                    fillRule: "nonzero",
                    className: a,
                }),
                (0, n.jsx)("path", {
                    d: "M8.25,12.75 L8.25,11.25 L9.75,11.25 L9.75,12.75 L8.25,12.75 Z M8.25,9.75 L8.25,5.25 L9.75,5.25 L9.75,9.75 L8.25,9.75 Z",
                    fill: i,
                    className: s,
                }),
            ],
        }),
    });
}
var K = l(488926),
    ee = l(495273),
    et = l(353068),
    el = l(650682),
    en = l(707554),
    ei = l(187322),
    es = l(847374);
l(321073);
var ea = l(735438),
    er = l.n(ea),
    eo = l(136722),
    ed = l(113325),
    ec = l(36525),
    eu = l(462887),
    eh = l(732771),
    eg = l(922016),
    em = l(761508),
    ex = l(349288),
    ep = l(442433),
    eA = l(365199),
    ef = l(545442),
    eC = l(316710),
    ej = l(821589),
    eb = l(165808);
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
        let { size: e, src: t, srcHover: l, className: i, ...s } = this.props,
            { hovered: a } = this.state,
            r = { backgroundImage: `url('${a && null != l ? l : t}')` },
            o = this.getMode();
        return (0, n.jsx)("button", {
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
var ev = l(967144),
    ey = l(660811);
function eS(e) {
    let { role: t, guild: s } = e,
        [a, r] = i.useState(!1);
    return (0, eC.x)(s, t)
        ? (0, n.jsx)(N.D, {
              onClick: (e) => {
                  r(!0),
                      (0, ep.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(l.bind(l, 316710));
                              return (l) => (0, n.jsx)(e, { ...l, role: t, guild: s });
                          },
                          { onClose: () => r(!1) },
                      );
              },
              className: A()(ey.X2, { [ey.ho]: a }),
              children: (0, n.jsx)(eA.j, { size: "custom", color: "currentColor", width: 20, height: 20 }),
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
        ? (0, n.jsx)("div", { className: ey.rz })
        : (0, n.jsx)(em.V.Item, {
              className: ey.JC,
              id: i,
              selectedItem: d,
              onItemSelect: c,
              itemType: u,
              "aria-label": null != g ? `${C}, ${g}` : C,
              onContextMenu: A,
              children: (0, n.jsxs)("div", {
                  className: ey.yl,
                  children: [
                      "dot" === p
                          ? (0, n.jsx)(ef.W, {
                                color: t ?? void 0,
                                colors: j,
                                className: ey.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, n.jsx)(ef.R, { color: t ?? null, colors: j, className: ey.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, eu.M)(x) ? l(454554) : l(470474);
                          return (0, n.jsx)(f.m, { text: g, children: (0, n.jsx)(eE, { className: ey.s2, src: e }) });
                      })(),
                      (0, n.jsx)("div", { className: ey.dD, children: r }),
                      m && null != s ? (0, n.jsx)(eS, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
var eM = l(736653),
    eI = l(775602),
    eR = l(861197),
    eL = l(438271),
    ew = l(260509),
    eO = l(889227),
    e_ = l(863036),
    eG = l(403362),
    eD = l(695184),
    ek = l(975571),
    eU = l(562153),
    eP = l(558393),
    eV = l(427262),
    eB = l(652215),
    eH = l(375708),
    eF = l(508573),
    ez = l.n(eF),
    eZ = l(66834),
    eW = l(17586),
    eY = l(329296);
let eJ = s.Ay.connectStores([W.A, e_.A], () => {
    let e = e_.A.getChannel();
    return {
        submitting: W.A.formState === eB.XlH.SUBMITTING,
        onReset() {
            (0, D.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = W.A.editedPermissionIds.reduce((e, t) => {
                let l = W.A.getPermissionOverwrite(t);
                return null != l && e.push(l), e;
            }, []);
            (0, D.R$)(e.id, t);
        },
    };
})(ec.A);
function eQ(e) {
    let { overwrite: t } = e,
        l = (0, s.bG)([W.A], () => W.A.channel),
        i = (0, s.bG)([Q.A], () => (null != l ? Q.A.getGuild(l.getGuildId()) : null)),
        a = (0, s.bG)([J.A], () => (null != i && null != t && t.type === k.r2.ROLE ? J.A.getRole(i.id, t.id) : void 0));
    if (null == l || null == i || null == t) return null;
    let { guild_id: r, id: o } = l,
        d = () => {
            if (null == Q.A.getGuild(r)) return "";
            let e = t.type === k.r2.MEMBER ? q.default.getUser(t.id) : void 0,
                l = e?.username ?? "";
            return null != a ? a.name : l;
        },
        c = (e, n) => {
            if ("boolean" == typeof n) throw Error("Unexpected boolean action");
            let { allow: i, deny: s } = t;
            switch (((s = eo.TF(s, e)), (i = eo.TF(i, e)), n)) {
                case "ALLOW":
                    i = eo.WQ(i, e);
                    break;
                case "DENY":
                    s = eo.WQ(s, e);
            }
            if (X.A.can(e, l, { [t.id]: { ...t, allow: i, deny: s } })) (0, D.LA)(l, t.id, i, s);
            else {
                var a;
                let e;
                if (t.type === k.r2.MEMBER) {
                    let l = q.default.getUser(t.id);
                    null != l && (e = eV.Ay.getName(l));
                } else if (t.type === k.r2.ROLE) {
                    let n = Q.A.getGuild(l.getGuildId());
                    if (null != n) {
                        let l = J.A.getRole(n.id, t.id);
                        null != l && (e = l.name);
                    }
                }
                (a = e),
                    _.A.show({
                        title: eH.intl.string(eH.t.vElC9b),
                        body: eH.intl.format(eH.t.yslqFM, { name: a }),
                        cancelText: eH.intl.string(eH.t.psXQHP),
                        onCancel() {
                            window.open(ek.A.getArticleURL(eB.MVz.PERMISSIONS_LOCKOUT));
                        },
                    });
            }
        },
        u = (e) => {
            let t = X.A.can(eB.xBc.ADMINISTRATOR, i) || X.A.can(eB.xBc.MANAGE_ROLES, l, void 0, void 0, !0);
            return l.isGuildStageVoice() && z.Zq.has(e)
                ? eH.intl.string(eH.t.bTS5lf)
                : !((!eo.aI(e, eB.xBc.MANAGE_ROLES) || t) && (null == e || X.A.can(e, i) || t)) &&
                      eH.intl.string(eH.t.nOtPMM);
        },
        h = t.id === r,
        g = l.isForumLikeChannel() && eo.zy(t.deny, eB.xBc.SEND_MESSAGES),
        m = eo.zy(t.deny, eB.xBc.SEND_MESSAGES),
        x = eo.zy(t.deny, eB.xBc.READ_MESSAGE_HISTORY),
        p = eP.A.generateChannelPermissionSpec(r, l, h, {
            createPostsDisabled: g,
            sendMessagesDisabled: m,
            readMessageHistoryDisabled: x,
        });
    return (0, n.jsxs)(eR.Ay.Content, {
        className: eW.uA,
        children: [
            p.map((e, l) =>
                (0, n.jsx)(
                    eL.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: c, permissionRender: u, className: eW.p2 },
                    l,
                ),
            ),
            r === t.id
                ? null
                : (0, n.jsx)(T.$, {
                      variant: "critical-secondary",
                      text: eH.intl.format(eH.t.txPV7k, { name: d() }),
                      onClick: () => {
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
function eX(e) {
    let { guildId: t, channelId: l, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = eU.Ay.getNickname(t, l, i),
        o = eV.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, n.jsxs)("div", {
                className: eW.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, n.jsx)(j.eu, {
                              className: eW.PX,
                              size: b._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, n.jsx)(a.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, n.jsxs)("div", {
            className: A()(eY.uN, eW.mG),
            children: [
                (0, n.jsx)(j.eu, { size: b._3.SIZE_32, src: s, "aria-label": i.username, className: eW.RJ }),
                (0, n.jsxs)("div", {
                    className: eW.F0,
                    children: [(0, n.jsx)(a.E, { className: eW.F0, variant: "text-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function eq(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function e$(e) {
    let { guild: t, channel: l, permissionOverwrites: r, onClose: o, onSelect: d } = e,
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
    return (0, n.jsx)(ed.l, {
        className: eW.Nd,
        children: (0, n.jsxs)(eh.iS, {
            selectionMode: "single",
            onSelectionChange: (e) => {
                null != e && (eq(e) ? d(e.id, k.r2.ROLE) : e instanceof eO.A && d(e.id, k.r2.MEMBER), o());
            },
            options: h,
            formatOption: (e) => ({ id: e.id, value: e, label: eq(e) ? e.name : eV.Ay.getUserTag(e) }),
            children: [
                (0, n.jsx)("div", {
                    className: eW.ON,
                    children: (0, n.jsx)(eh.a3, {
                        label: eH.intl.string(eH.t.lT5Zth),
                        placeholder: eH.intl.string(eH.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: (e) => {
                            let l = e.target.value;
                            eD.A.requestMembers(t.id, l, 20);
                        },
                    }),
                }),
                (0, n.jsx)(eh.X2, {
                    renderListItem: (e) => {
                        let { value: i } = e;
                        if (eq(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, n.jsxs)("div", {
                                    className: A()(eY.uN, eW.xf),
                                    children: [
                                        (0, n.jsx)(a.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: eW.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, n.jsx)(a.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: eH.intl.string(eH.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof eO.A) return (0, n.jsx)(eX, { guildId: t.id, channelId: l.id, user: i });
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
        { guild: u, sortedGuildRoles: h } = (0, s.cf)([Q.A, J.A], () => {
            let e = null != c ? Q.A.getGuild(c) : void 0,
                t = null != e ? J.A.getSortedRoles(e.id) : void 0;
            return { guild: e, sortedGuildRoles: t };
        }, [c]),
        g = (function (e, t) {
            let l = (0, s.yK)([Y.Ay], () => Y.Ay.getMemberIds(e), [e]),
                [n, a] = i.useMemo(
                    () =>
                        ez()(
                            null == t
                                ? []
                                : Object.values(t)
                                      .filter((e) => e.type === k.r2.MEMBER)
                                      .map((e) => e.id),
                            (e) => l.includes(e),
                        ),
                    [t, l],
                );
            return (
                i.useEffect(() => {
                    a.length > 0 && null != e && eZ.A.requestMembersById(e, a, !1);
                }, [a, e]),
                (0, s.yK)([q.default], () => n.map(q.default.getUser).filter(eG.Vq), [n])
            );
        })(c, o),
        m = (0, eM.Ay)(),
        x = (0, s.bG)([eI.A], () => eI.A.roleStyle),
        p = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, ep.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != u ? (0, ew.af)(u) : null,
                        o = null != i && a === i.id,
                        { default: d } = await l.e("77168").then(l.bind(l, 495603));
                    return (t) =>
                        (0, n.jsx)(d, {
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
        G.A.updatePermissionOverwrite(r.id, { id: e, type: t, allow: K.x3, deny: K.x3 }).then(() => (0, D.G9)(e));
    };
    null != o && null == o[u.id] && (o[u.id] = K.xT(u.id));
    let f = h
            .filter((e) => o[e.id]?.type === k.r2.ROLE)
            .map((e) =>
                (0, n.jsx)(
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
                return (0, n.jsx)(
                    eT,
                    {
                        id: e.id,
                        guild: u,
                        theme: m,
                        roleStyle: x,
                        "aria-label": eV.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => p(t, { id: e.id, name: e.username }),
                        children: (0, n.jsxs)("div", {
                            className: eW.mG,
                            children: [
                                (0, n.jsx)(j.eu, {
                                    size: b._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: eW.bE,
                                }),
                                (0, n.jsx)("span", { className: eW.Xh, children: eV.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, n.jsx)(eR.Ay.Sidebar, {
        className: eW.uA,
        scrollable: !0,
        children: (0, n.jsxs)(em.V, {
            onItemSelect: D.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, eu.M)(m) ? l(546716) : l(233497)),
                (0, n.jsx)(eg.Y, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: l } = e;
                        return (0, n.jsx)(e$, {
                            guild: u,
                            channel: r,
                            permissionOverwrites: o,
                            position: null != t ? t : "bottom",
                            onSelect: A,
                            onClose: l,
                        });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (l) =>
                        (0, n.jsx)(em.V.Header, {
                            ref: t,
                            ...l,
                            children: (0, n.jsxs)("div", {
                                className: eW.$M,
                                children: [
                                    (0, n.jsxs)("span", {
                                        children: [eH.intl.string(eH.t["LPJmL/"]), "/", eH.intl.string(eH.t["9Oq93m"])],
                                    }),
                                    (0, n.jsx)("img", { alt: "", className: eW.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                f,
                C,
                (0, n.jsxs)(i.Fragment, {
                    children: [
                        (0, n.jsx)(em.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, n.jsx)(ex.Anchor, {
                            href: ek.A.getArticleURL(eB.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, n.jsx)(a.E, {
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
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: l } = (0, s.cf)([W.A], () => W.A);
    if (
        null == (0, s.bG)([Q.A], () => (null != e ? Q.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == l
    )
        return null;
    let i = t[l];
    return (0, n.jsxs)(eR.Ay, { className: eW.kL, children: [(0, n.jsx)(eK, {}), (0, n.jsx)(eQ, { overwrite: i })] });
}
var e2 = l(311809);
function e5() {
    let e = (0, s.bG)([W.A], () => W.A.advancedMode);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(L.c, { className: e2.BQ }),
            (0, n.jsx)(et.EN, {
                isExpanded: e,
                onExpandedChange: D.E,
                children: (0, n.jsx)(en.F, {
                    component: (0, n.jsx)(ei.vN, {
                        children: (0, n.jsx)(el.$, {
                            slot: "trigger",
                            className: e2.hZ,
                            children: (0, n.jsxs)(a.E, {
                                variant: "text-lg/semibold",
                                className: e2.Vt,
                                children: [
                                    eH.intl.string(eH.t.dYRsrm),
                                    (0, n.jsx)(es.a, {
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
                    children: (0, n.jsx)(et.kS, { className: e2.nd, children: (0, n.jsx)(e0, {}) }),
                }),
            }),
        ],
    });
}
var e1 = l(243721),
    e7 = l(235986),
    e3 = l(60727);
function e4(e) {
    let { description: t, icon: l, id: i, label: s, onChange: r, value: o } = e;
    return (0, n.jsxs)("div", {
        className: e3.U,
        children: [
            (0, n.jsxs)(e7.A, {
                justify: e7.A.Justify.BETWEEN,
                align: e7.A.Align.CENTER,
                children: [
                    l,
                    (0, n.jsx)(e7.A.Child, {
                        grow: 1,
                        children: (0, n.jsx)(a.E, { variant: "text-md/semibold", children: s }),
                    }),
                    null != r && null != o && (0, n.jsx)(e1.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, n.jsx)(a.E, { variant: "text-xs/normal", color: "text-default", className: e3.L, children: t }),
        ],
    });
}
var e6 = l(661531),
    e8 = l(862482),
    e9 = l(359778),
    te = l(400725);
let tt = (e) => {
    let { className: t, icon: l, noticeText: i, buttonText: s, onClick: r, canSync: o } = e;
    return (0, n.jsx)(e9.Z, {
        className: A()(t, te.N),
        children: (0, n.jsxs)(e7.A, {
            justify: e7.A.Justify.BETWEEN,
            align: e7.A.Align.CENTER,
            children: [
                (0, n.jsx)(l, { width: 20, height: 20, size: "custom", color: e6.A.unsafe_rawColors.YELLOW_300.css }),
                (0, n.jsx)("div", {
                    className: te.P,
                    children: (0, n.jsx)(a.E, { variant: "text-md/normal", children: i }),
                }),
                o &&
                    (0, n.jsx)(e8.$n, {
                        size: e8.$n.Sizes.SMALL,
                        color: e8.$n.Colors.PRIMARY,
                        onClick: r,
                        children: s,
                    }),
            ],
        }),
    });
};
var tl = l(719366),
    tn = l(818348),
    ti = l(497903);
function ts(e) {
    let { channel: t, roles: l, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, n.jsx)(v.OZ, {
        className: ti.xz,
        sections: [l.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case tl.oO.ROLES:
                    (c =
                        (d = l[h]).rowType === tl.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, n.jsx)(P.A, { className: ti.a, color: d.colorString, size: 20 })
                            : (0, n.jsx)(C.i, { size: "custom", className: ti.a, color: d.colorString, height: 20 })),
                        (o = (0, n.jsxs)(n.Fragment, {
                            children: [
                                c,
                                (0, n.jsx)(a.E, {
                                    variant: "text-sm/normal",
                                    color: d.disabled ? "text-muted" : "text-default",
                                    children: d.name,
                                }),
                            ],
                        })),
                        (g = d.disabled);
                    break;
                case tl.oO.MEMBERS:
                    (d = i[h]),
                        (o = (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(j.eu, { src: d.avatarURL, size: b._3.SIZE_20, "aria-hidden": !0 }),
                                (0, n.jsx)(a.E, { variant: "text-sm/normal", children: d.name }),
                                d.bot && (0, n.jsx)(U.A, { verified: d.verifiedBot }),
                                (0, n.jsx)(a.E, {
                                    color: "text-muted",
                                    className: ti.Gq,
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
            return (0, n.jsxs)(
                "div",
                {
                    className: ti.TL,
                    role: "listitem",
                    children: [
                        (0, n.jsx)("div", { className: ti.z7, children: o }),
                        (0, n.jsxs)("div", {
                            className: ti.z7,
                            children: [
                                (0, n.jsx)(a.E, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: ee.vV(d.rowType),
                                }),
                                d.rowType !== tl.T6.EMPTY_STATE &&
                                    (0, n.jsx)(f.m, {
                                        asContainer: !0,
                                        text: s ?? r(d.rowType, d.disabled),
                                        children: (0, n.jsx)(N.D, {
                                            onClick: () => {
                                                var e, l, n;
                                                return (
                                                    m &&
                                                    null != d &&
                                                    ((e = d.id),
                                                    (l = d.name),
                                                    (n = d.rowType),
                                                    void _.A.show({
                                                        title: eH.intl.string(eH.t.GuPYQB),
                                                        body: eH.intl.format(eH.t.xERCnZ, { name: l }),
                                                        cancelText: eH.intl.string(eH.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, l) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let n = (0, F.$b)(
                                                                        e,
                                                                        l === tl.T6.ROLE ? k.r2.ROLE : k.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, F.pF)(n)
                                                                        ? G.A.clearPermissionOverwrite(t.id, n.id)
                                                                        : (0, D.R$)(t.id, [n]);
                                                                } else G.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, n),
                                                    }))
                                                );
                                            },
                                            className: ti.HI,
                                            "aria-disabled": !m,
                                            "aria-label": eH.intl.string(eH.t.N86XcP),
                                            children: (0, n.jsx)(E.a, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: A()(ti.Yz, { [ti._2]: g || s }),
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
                    return (0, n.jsx)(to, { title: eH.intl.string(eH.t["LPJmL/"]) }, "roles-title");
                case tl.oO.MEMBERS:
                    return (0, n.jsx)(to, { title: eH.intl.string(eH.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function ta(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, s.bG)([J.A], () => J.A.getSortedRoles(t.id)),
        d = ee.C$(t, o, i, z.QY, r),
        c = (0, s.bG)([Y.Ay], () => ee.Wi(Y.Ay.getMemberIds(t.id), i, t, z.QY, r)),
        u = (0, F.qd)(i.id);
    return (0, n.jsxs)("div", {
        className: A()(ti.j1, ti.vu),
        children: [
            (0, n.jsx)(e4, {
                label: eH.intl.string(eH.t.StpcFU),
                description: eH.intl.string(eH.t.f7VbhF),
                icon: (0, n.jsx)(S.q, {
                    size: "custom",
                    color: "currentColor",
                    className: ti.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, n.jsxs)("div", {
                className: ti.X4,
                children: [
                    (0, n.jsxs)("div", {
                        className: ti.MJ,
                        children: [
                            (0, n.jsx)(a.E, { variant: "text-md/semibold", children: eH.intl.string(eH.t["7BWDRb"]) }),
                            (0, n.jsx)(f.m, {
                                text: eH.intl.string(eH.t.arRuES),
                                shouldShow: !u,
                                children: (0, n.jsx)(T.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eH.intl.string(eH.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, y.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([
                                                l.e("8516"),
                                                l.e("11585"),
                                                l.e("89916"),
                                                l.e("20379"),
                                                l.e("19193"),
                                                l.e("58608"),
                                            ]).then(l.bind(l, 841811));
                                            return (t) => (0, n.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !u,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(ts, {
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
function tr(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: a, roles: r, members: o } = e,
        d = (0, s.bG)([X.A], () => X.A.can(tn.xB.ADMINISTRATOR, t)),
        c = K.MJ(tn.xB.VIEW_CHANNEL, t),
        u = K.MJ(tn.xB.ADMINISTRATOR, t);
    async function h() {
        let e = i.accessPermissions,
            s = q.default.getCurrentUser();
        a || null == (await (0, B.D)(t.id, i.id))
            ? (ee.uB(i, e, a), a || null == s || d || ee.tP(i, e))
            : (0, y.openModalLazy)(async () => {
                  let { Modal: e } = await l.e("4823").then(l.bind(l, 158954));
                  return (l) =>
                      (0, n.jsx)(e, {
                          ...l,
                          title: eH.intl.string(eH.t.ZzdgUm),
                          subtitle: eH.intl.format(eH.t.DwY2vN, {
                              onClick: () => {
                                  H.A.open(t.id, eB.BEX.ONBOARDING), l.onClose();
                              },
                          }),
                          actions: [{ text: eH.intl.string(eH.t.BddRzS), onClick: l.onClose }],
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
        (0, n.jsxs)("div", {
            className: A()(ti.j1, { [ti.vu]: a }),
            children: [
                (0, n.jsx)(e4, {
                    description: g.subtitle,
                    icon: (0, n.jsx)(M.X, {
                        size: "custom",
                        color: "currentColor",
                        className: ti.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: g.title,
                    onChange: h,
                    value: a,
                }),
                (0, n.jsxs)("div", {
                    className: ti.X4,
                    children: [
                        u &&
                            (0, n.jsx)("div", {
                                className: ti.Ux,
                                children: (0, n.jsx)(I.p, {
                                    messageType: I.Y.WARNING,
                                    children: eH.intl.string(eH.t["5f3HIC"]),
                                }),
                            }),
                        !c &&
                            !u &&
                            !a &&
                            (0, n.jsx)("div", {
                                className: ti.Ux,
                                children: (0, n.jsx)(I.p, {
                                    messageType: I.Y.WARNING,
                                    children: eH.intl.string(eH.t.ZAk4Q9),
                                }),
                            }),
                        a &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ti.MJ,
                                        children: [
                                            (0, n.jsx)(R.D, {
                                                variant: "heading-sm/semibold",
                                                className: ti.DH,
                                                children: g.formLabel,
                                            }),
                                            (0, n.jsx)(T.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eH.intl.string(eH.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, y.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            l.e("8516"),
                                                            l.e("89916"),
                                                            l.e("20379"),
                                                            l.e("19193"),
                                                            l.e("68083"),
                                                        ]).then(l.bind(l, 685374));
                                                        return (t) =>
                                                            (0, n.jsx)(e, { ...t, channelId: i.id, inSettings: !0 });
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(ts, { channel: i, roles: r, members: o, getRemoveTooltipHint: ee.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function to(e) {
    let { title: t } = e;
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(L.c, { className: ti.yF }),
            (0, n.jsx)(R.D, { variant: "heading-sm/semibold", className: A()(ti.DH, ti.Gf), children: t }),
        ],
    });
}
let td = s.Ay.connectStores([W.A, X.A, Y.Ay, Q.A, J.A], () => {
    let e,
        t = W.A.channel,
        l = W.A.category,
        n = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = Q.A.getGuild(t.getGuildId());
        let l = Y.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = J.A.getSortedRoles(e.id);
            (s = W.A.editedPermissionIds.reduce((e, t) => {
                let l = W.A.getPermissionOverwrite(t);
                return null != l && (e[t] = l), e;
            }, {})),
                (n = ee.uX(e, r, t, t.accessPermissions, s)),
                (i = ee.Wi(l, t, e, t.accessPermissions, s)),
                (a = ee.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != l && X.A.can(tn.xB.MANAGE_ROLES, l),
        category: l,
        channel: t,
        filteredMembers: i,
        filteredRoles: n,
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
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(R.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, n.jsx)(a.E, { variant: "text-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, n.jsx)(tt, {
                              canSync: !1,
                              icon: w.f,
                              noticeText: eH.intl.format(eH.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, n.jsx)(tt, {
                              buttonText: eH.intl.string(eH.t.NVwuHq),
                              canSync: !0,
                              icon: (0, O.k)($),
                              noticeText: eH.intl.format(eH.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, y.openModalLazy)(async () => {
                                          let { default: e } = await l.e("87634").then(l.bind(l, 544169));
                                          return (t) =>
                                              (0, n.jsx)(e, {
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
                s.isGuildStageVoice() ? (0, n.jsx)(ta, { guild: c, channel: s, permissionUpdates: g }) : null,
                (0, n.jsx)(tr, { channel: s, guild: c, isPrivateGuildChannel: u, roles: o, members: r }),
                (0, n.jsx)(e5, {}),
            ],
        })
    );
});
var tc = l(526132),
    tu = l(97469),
    th = l(406704),
    tg = l(363195),
    tm = l(95701),
    tx = l(291731),
    tp = l(734057),
    tA = l(994500),
    tf = l(625494),
    tC = l(608226),
    tj = l(282956),
    tb = l(860603);
function tN(e) {
    let { refToScroller: t } = e,
        l = (0, s.bG)([e_.A], () => e_.A.getChannel(), []),
        i = (0, s.bG)([Q.A], () => (null != l ? Q.A.getGuild(l.getGuildId()) : null), [l]),
        {
            section: a,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, s.cf)([tx.A], () => tx.A.getProps(), []);
    return null == i || null == l
        ? null
        : (0, n.jsx)(tb.A, {
              guild: i,
              channel: l,
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
    let { channel: e, submitting: t } = (0, s.cf)([e_.A], () => e_.A.getProps()),
        l = (0, s.bG)([tx.A], () => tx.A.editedWebhook),
        i = (0, s.bG)([Q.A], () => (null != e ? Q.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, n.jsx)(ec.A, {
        submitting: t,
        onReset: () => {
            tj.A.init();
        },
        onSave: () => {
            null != i && null != l && tj.A.saveWebhook(i.id, l);
        },
    });
}
var tv = l(886235),
    ty = l(351906);
function tS() {
    let e = (0, s.bG)([ty.A], () => ty.A.hideInstantInvites),
        { channel: t, guild: l } = (0, s.cf)([e_.A, Q.A], () => {
            let { channel: e } = e_.A.getProps(),
                t = null != e ? Q.A.getGuild(e.getGuildId()) : null;
            return { channel: e, guild: t };
        }, []),
        i = (0, s.bG)([X.A], () => null != t && X.A.can(eB.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: a, loading: r } = (0, s.cf)([e_.A], () => e_.A.getInvites(), []);
    return (0, n.jsx)(tv.A, { invites: a, loading: r, guild: l, channel: t, canCreateInvites: i, hide: e });
}
l(938796), l(667532);
var tT = l(371444),
    tM = l(392421),
    tI = l(602137),
    tR = l(665260),
    tL = l(452027),
    tw = l(260598),
    tO = l(150934),
    t_ = l(825484),
    tG = l(123292),
    tD = l(691885),
    tk = l(270003),
    tU = l(331322),
    tP = l(773812),
    tV = l(292666),
    tB = l(106236),
    tH = l(534963),
    tF = l(820284),
    tz = l(432371),
    tZ = l(323073),
    tW = l(355622),
    tY = l(408018),
    tJ = l(201349),
    tQ = l(375499),
    tX = l(267889),
    tq = l(770335),
    t$ = l(7584),
    tK = l(422844),
    t0 = l(307301),
    t2 = l(599119),
    t5 = l(219504),
    t1 = l(376310);
l(253913);
var t7 = l(231935);
function t3(e) {
    let { channel: t } = e,
        a = (0, s.bG)([X.A], () => X.A.can(eB.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        o = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            a &&
                !e &&
                (0, y.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([l.e("2225"), l.e("47326")]).then(l.bind(l, 950989));
                    return (l) => (0, n.jsx)(e, { ...l, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, a]),
        u = i.useCallback(
            (e) => {
                a &&
                    (0, y.openModalLazy)(async () => {
                        let { default: i } = await Promise.all([l.e("2225"), l.e("47326")]).then(l.bind(l, 950989));
                        return (l) => (0, n.jsx)(i, { ...l, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [a, t],
        ),
        {
            handleDragStart: h,
            handleDragReset: g,
            handleDragComplete: m,
        } = (0, t5.A)(t.availableTags, (e) => {
            (0, d.fy)({ availableTags: e });
        });
    return (0, n.jsxs)("div", {
        className: t7._A,
        children: [
            o
                ? t.availableTags.map((e) =>
                      (0, n.jsx)(
                          t4,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: a,
                              onTagClick: u,
                              onDragComplete: m,
                              onDragReset: g,
                              onDragStart: h,
                          },
                          e.id,
                      ),
                  )
                : null,
            o
                ? (0, n.jsx)(N.D, {
                      onClick: c,
                      className: A()(t7.JE, { [t7.r9]: !a || r }),
                      children: (0, n.jsx)(t0.j, {
                          size: "custom",
                          "aria-label": eH.intl.string(eH.t["/jubeD"]),
                          color: e6.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, n.jsx)(T.$, {
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
            availableTags: l,
            canManageChannels: i,
            onTagClick: s,
            onDragComplete: a,
            onDragStart: r,
            onDragReset: o,
        } = e,
        d = l.findIndex((e) => e.id === t.id),
        {
            drag: c,
            dragSourcePosition: u,
            drop: h,
            setIsDraggable: g,
        } = (0, t2.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: d,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: a,
            onDragReset: o,
        });
    return (0, n.jsx)("div", {
        className: A()(t7.kL, { [t7.A]: null != u && d < u, [t7.Ze]: null != u && d > u }),
        ref: (e) => {
            c(h(e));
        },
        onMouseEnter: () => g(i),
        onMouseLeave: () => g(!1),
        children: (0, n.jsx)(t1.A, {
            tag: t,
            disabled: !i,
            ariaLabel: eH.intl.formatToPlainString(eH.t.jhSvB9, { name: t.name }),
            onClick: i ? () => s(t) : void 0,
        }),
    });
}
var t6 = l(235640),
    t8 = l(268761),
    t9 = l(474078),
    le = l(783878),
    lt = l(980296);
let ll = (e) => {
    let { autoArchiveDuration: t, onChange: l, isDisabled: i, helperText: s } = e,
        a = (0, t8.Gk)();
    return (0, n.jsx)("div", {
        className: lt.gy,
        children: (0, n.jsx)(le.Z, {
            selectionMode: "single",
            label: eH.intl.string(eH.t.FGjMZS),
            helperText: s,
            disabled: i,
            options: a,
            value: t,
            onSelectionChange: l,
        }),
    });
};
var ln = l(495544),
    li = l(717518),
    ls = l(871237),
    la = l(927813),
    lr = l(879631);
let lo = (0, l(600975).C)({
    kind: "guild",
    id: "2026-03_spoiler_channel",
    label: "Spoiler Channel",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable spoiler channel setting", config: { enabled: !0 } }],
});
var ld = l(818050);
function lc(e) {
    let { label: t, helperText: l, hideLabel: s, disabled: a, value: r, onChange: o } = e,
        [d, c] = i.useState(null),
        u = i.useMemo(() => {
            let e = [...(d ?? eB.s_7)];
            return (
                e.includes(r) || e.unshift(r), e.map((e) => ({ id: e.toString(), label: (0, lr.$)(e, !1), value: e }))
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
                l = parseInt(e, 10);
            if (Number.isNaN(l)) return void c(null);
            l <= eB.WA1 && t.push(l);
            let n = l * la.A.Seconds.MINUTE;
            n <= eB.WA1 && t.push(n);
            let i = l * la.A.Seconds.HOUR;
            i <= eB.WA1 && t.push(i), c(t);
        }, []),
        m = i.useCallback(() => {
            c(null);
        }, []);
    return (0, n.jsx)("div", {
        className: ld.QB,
        children: (0, n.jsx)(le.Z, {
            selectionMode: "single",
            label: t,
            hideLabel: s,
            helperText: l,
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
var lu = l(953727);
function lh(e) {
    let { color: t = "currentColor", foreground: l, backgroundColor: i = "none", ...s } = e;
    return (0, n.jsxs)("svg", {
        ...(0, lu.A)(s),
        width: "272",
        height: "143",
        viewBox: "0 0 272 143",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, n.jsx)("rect", { className: l, width: "130", height: "143", rx: "12", fill: i }),
            (0, n.jsx)("path", {
                className: l,
                opacity: "0.5",
                d: "M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V83H0V12Z",
                fill: t,
            }),
            (0, n.jsx)("path", {
                className: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M57.641 30.3944C54.9317 30.3944 52.7354 32.488 52.7354 35.0705V49.0987C52.7354 51.6812 54.9317 53.7747 57.641 53.7747H72.358C75.0673 53.7747 77.2637 51.6812 77.2637 49.0987V35.0705C77.2637 32.488 75.0673 30.3944 72.358 30.3944H57.641ZM62.5467 37.4085C62.5467 36.117 61.4468 35.0705 60.0938 35.0705C58.7379 35.0705 57.641 36.117 57.641 37.4085C57.641 38.701 58.7379 39.7466 60.0938 39.7466C61.4468 39.7466 62.5467 38.701 62.5467 37.4085ZM61.3203 44.4226L57.641 49.0987H72.358L68.6787 40.9156L63.7731 46.7606L61.3203 44.4226Z",
                fill: "#C4C4C4",
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "12",
                y: "99",
                width: "106",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "12",
                y: "123",
                width: "32",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("circle", {
                className: l,
                opacity: "0.5",
                cx: "54",
                cy: "127",
                r: "2",
                fill: t,
                fillOpacity: "0.48",
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "64",
                y: "123",
                width: "54",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
                x: "0.5",
                y: "0.5",
                width: "129",
                height: "142",
                rx: "11.5",
                stroke: t,
                strokeOpacity: "0.3",
            }),
            (0, n.jsx)("rect", { className: l, x: "142", width: "130", height: "143", rx: "12", fill: i }),
            (0, n.jsx)("path", {
                className: l,
                opacity: "0.5",
                d: "M142 12C142 5.37259 147.373 0 154 0H260C266.627 0 272 5.37258 272 12V83H142V12Z",
                fill: t,
            }),
            (0, n.jsx)("path", {
                className: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M199.641 30.3944C196.932 30.3944 194.735 32.488 194.735 35.0705V49.0987C194.735 51.6812 196.932 53.7747 199.641 53.7747H214.358C217.067 53.7747 219.264 51.6812 219.264 49.0987V35.0705C219.264 32.488 217.067 30.3944 214.358 30.3944H199.641ZM204.547 37.4085C204.547 36.117 203.447 35.0705 202.094 35.0705C200.738 35.0705 199.641 36.117 199.641 37.4085C199.641 38.701 200.738 39.7466 202.094 39.7466C203.447 39.7466 204.547 38.701 204.547 37.4085ZM203.32 44.4226L199.641 49.0987H214.358L210.679 40.9156L205.773 46.7606L203.32 44.4226Z",
                fill: "#C4C4C4",
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "154",
                y: "99",
                width: "106",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "154",
                y: "123",
                width: "32",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("circle", {
                className: l,
                opacity: "0.5",
                cx: "196",
                cy: "127",
                r: "2",
                fill: t,
                fillOpacity: "0.48",
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "206",
                y: "123",
                width: "54",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
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
function lg(e) {
    let { color: t = "currentColor", foreground: l, backgroundColor: i = "none", ...s } = e;
    return (0, n.jsxs)("svg", {
        ...(0, lu.A)(s),
        width: "272",
        height: "143",
        viewBox: "0 0 272 143",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            (0, n.jsx)("rect", { className: l, y: "15.5", width: "272", height: "112", rx: "12", fill: i }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "12",
                y: "27.5",
                width: "168",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "12",
                y: "43.5",
                width: "96",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "12",
                y: "67.5",
                width: "168",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "12",
                y: "83.5",
                width: "168",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "196",
                y: "27.5",
                width: "64",
                height: "64",
                rx: "8",
                fill: t,
            }),
            (0, n.jsx)("path", {
                className: l,
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M222 49.5C219.791 49.5 218 51.2909 218 53.5V65.5C218 67.7091 219.791 69.5 222 69.5H234C236.209 69.5 238 67.7091 238 65.5V53.5C238 51.2909 236.209 49.5 234 49.5H222ZM226 55.5C226 54.3952 225.103 53.5 224 53.5C222.894 53.5 222 54.3952 222 55.5C222 56.6056 222.894 57.5 224 57.5C225.103 57.5 226 56.6056 226 55.5ZM225 61.5L222 65.5H234L231 58.5L227 63.5L225 61.5Z",
                fill: "#C4C4C4",
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "12",
                y: "107.5",
                width: "32",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("circle", {
                className: l,
                opacity: "0.5",
                cx: "54",
                cy: "111.5",
                r: "2",
                fill: t,
                fillOpacity: "0.48",
            }),
            (0, n.jsx)("rect", {
                className: l,
                opacity: "0.5",
                x: "64",
                y: "107.5",
                width: "32",
                height: "8",
                rx: "4",
                fill: t,
            }),
            (0, n.jsx)("rect", {
                className: l,
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
var lm = l(746080),
    lx = l(307731),
    lp = l(37411),
    lA = l(263107);
let lf = {
        popoutLocation: {
            page: eB.liQ.CHANNEL_SETTINGS,
            section: eB.JJy.CHANNEL_DEFAULT_REACTION,
            object: eB.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    lC = {
        popoutLocation: {
            page: eB.liQ.CHANNEL_SETTINGS,
            section: eB.JJy.CHANNEL_NAME,
            object: eB.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    lj = "AUTOMATIC_RTC_REGION",
    lb = s.Ay.connectStores([e_.A], () => {
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
                    type: l,
                    topic: n,
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
                          type: l,
                          topic: n,
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
function lN(e) {
    let { onEmojiPicked: t, channel: l, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, n.jsx)(tX.A, {
                    channel: l,
                    guildId: s,
                    pickerIntention: lx.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: l, willClose: n } = e;
                        null != l && l.type === tq.i.UNICODE && t(l.surrogates), n && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: lC,
                });
            },
            [l, s, t],
        );
    return (0, n.jsx)(eg.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: eg.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(tQ.A, { ...e, ref: a, active: l, className: lA.Z8, tabIndex: 0 });
        },
    });
}
class lE extends i.PureComponent {
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
                (this.channelTopicTextAreaChannel = (0, tm.createChannelRecord)({
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
            richTopicValue: (0, tY.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && tH.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, tY.x7)(t) });
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
        return (0, lr.$)(e * la.A.Seconds.MINUTE, !0);
    }
    renderChannelInfo(e, t) {
        let l,
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
            g = tm.Le.has(e.type),
            m = e.isForumLikeChannel(),
            x = m && e.availableTags?.every((e) => e.moderated),
            p = q.default.getCurrentUser()?.isStaff() === !0,
            f = tm.IY.has(e.type)
                ? (0, n.jsx)(tL.D, {
                      label: m ? eH.intl.string(eH.t.yR6HwZ) : eH.intl.string(eH.t.X8jMDh),
                      children: (0, n.jsx)(tJ.Ay, {
                          className: A()(lA.zm, { [lA.r9]: !s }),
                          innerClassName: A()(lA.At, { [lA.r9]: !s }),
                          characterCountClassName: lA.IQ,
                          maxCharacterCount: m ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eH.intl.string(eH.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? d?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: m ? tW.oU.FORUM_CHANNEL_GUIDELINES : tW.oU.CHANNEL_TOPIC,
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
                m && p
                    ? (0, n.jsx)(tw.f, {
                          label: eH.intl.string(eH.t.qk2jdY),
                          placeholder: eH.intl.string(eH.t.DDjD1H),
                          value: t$.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            j = e.isForumLikeChannel()
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(L.c, {}),
                          (0, n.jsx)(tL.D, {
                              label: eH.intl.string(eH.t["P/y+sj"]),
                              description: eH.intl.string(eH.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, n.jsx)(t3, { channel: e }),
                          }),
                          (0, n.jsx)(tO.S, {
                              disabled: !s || x,
                              checked: e.hasFlag(lm.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eH.intl.string(eH.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            b = e.isForumLikeChannel()
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(L.c, {}),
                          (0, n.jsx)(tL.D, {
                              label: eH.intl.string(eH.t["8ao1+E"]),
                              description: eH.intl.string(eH.t.SdbF0q),
                              children: (0, n.jsxs)("div", {
                                  className: lA.OZ,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: A()(lA.t0, lA._h),
                                          children: (0, n.jsxs)(t_.e, {
                                              align: "center",
                                              children: [
                                                  (0, n.jsx)(eg.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: eg.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, n.jsx)(T.$, {
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
                                                      ? (0, n.jsx)(tG.Q, {
                                                            text: eH.intl.string(eH.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, n.jsx)(t6.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            N = e.isForumChannel()
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(L.c, {}),
                          (0, n.jsxs)("div", {
                              className: lA.OZ,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: A()(lA.t0, lA.WC),
                                      children: (0, n.jsx)(tD.l, {
                                          selectionMode: "single",
                                          label: eH.intl.string(eH.t["kQvoC/"]),
                                          description: eH.intl.string(eH.t.mOSViT),
                                          options: [
                                              { id: "list", label: eH.intl.string(eH.t["4HXEZG"]), value: tT.C.LIST },
                                              { id: "grid", label: eH.intl.string(eH.t["8RswJG"]), value: tT.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? tT.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === tT.C.GRID
                                      ? (0, n.jsx)(lh, { className: lA.Kf })
                                      : (0, n.jsx)(lg, { className: lA.Kf }),
                              ],
                          }),
                          (0, n.jsx)(L.c, {}),
                      ],
                  })
                : null,
            E = e.isForumLikeChannel()
                ? (0, n.jsx)(tD.l, {
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
                ? (0, n.jsx)(tD.l, {
                      selectionMode: "single",
                      label: eH.intl.string(eH.t.Paxaug),
                      description: eH.intl.string(eH.t.DqOl8J),
                      options: [
                          { id: "some", label: eH.intl.string(eH.t.rQ0ctQ), value: tM.n.MATCH_SOME },
                          { id: "all", label: eH.intl.string(eH.t.FCXUu0), value: tM.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            y = g ? r : s,
            S = tm.nb.has(e.type)
                ? m
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(L.c, {}),
                              (0, n.jsxs)(tk.n, {
                                  label: eH.intl.string(eH.t.tTHx98),
                                  children: [
                                      (0, n.jsx)(lc, {
                                          label: eH.intl.string(eH.t.O1c02q),
                                          helperText: this.getSlowmodeHelpText(),
                                          value: e.rateLimitPerUser,
                                          onChange: this.handleChangeSlowmode,
                                          disabled: !y,
                                      }),
                                      (0, n.jsx)(lc, {
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
                    : (0, n.jsx)(lc, {
                          label: eH.intl.string(eH.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          value: e.rateLimitPerUser,
                          onChange: this.handleChangeSlowmode,
                          disabled: !y,
                      })
                : null,
            M =
                g && null != e.threadMetadata
                    ? (0, n.jsx)(tF.A, {
                          page: eB.liQ.CHANNEL_SETTINGS,
                          children: (0, n.jsx)(ll, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? lp.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eH.intl.string(eH.t["3aJN9M"]) : eH.intl.string(eH.t.YUXr4Z),
                          }),
                      })
                    : null,
            R =
                e.type === eB.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, n.jsx)("div", {
                          children: (0, n.jsx)(e1.d, {
                              label: eH.intl.string(eH.t.s2rpNf),
                              description: eH.intl.string(eH.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            w = (0, tZ.Gc)(e),
            O = null != d && (0, ew.wh)(d),
            _ = "none";
        w ? (_ = "nsfw") : e.isSpoilerChannel() && (_ = "spoiler");
        let G = [
                { value: "none", name: eH.intl.string(eH.t.OtnNJE), desc: eH.intl.string(eH.t["a5/7hX"]) },
                { value: "spoiler", name: eH.intl.string(eH.t.TvUHTb), desc: eH.intl.string(eH.t.ddWXHa) },
                { value: "nsfw", name: eH.intl.string(eH.t.Es25Yf), desc: eH.intl.string(eH.t["9eUgwR"]) },
            ],
            D =
                h && tm.LE.has(e.type)
                    ? (0, n.jsxs)(tU.B, {
                          gap: 4,
                          padding: { top: 8, bottom: 8 },
                          children: [
                              (0, n.jsx)(tP.z, {
                                  label: eH.intl.string(eH.t.yLB4y2),
                                  onChange: (e) => this.handleChannelRestrictionChange(e),
                                  options: G,
                                  value: _,
                                  disabled: !s || null != e.linkedLobby || O,
                              }),
                              null != e.linkedLobby
                                  ? (0, n.jsx)(I.p, { messageType: I.Y.WARNING, children: eH.intl.string(eH.t.EvavKG) })
                                  : null,
                          ],
                      })
                    : tm.LE.has(e.type)
                      ? (0, n.jsxs)(tU.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(e1.d, {
                                    label: eH.intl.string(eH.t.Es25Yf),
                                    description: eH.intl.string(eH.t["9eUgwR"]),
                                    onChange: this.handleNSFWChange,
                                    checked: (0, tZ.Gc)(e),
                                    disabled: !s || null != e.linkedLobby || O,
                                }),
                                null != e.linkedLobby
                                    ? (0, n.jsx)(I.p, {
                                          messageType: I.Y.WARNING,
                                          children: eH.intl.string(eH.t.l6uSVa),
                                      })
                                    : null,
                            ],
                        })
                      : null,
            k =
                tm.xR.has(e.type) &&
                null != d &&
                d.features.has(eB.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, n.jsxs)(tU.B, {
                          gap: 4,
                          children: [
                              (0, n.jsx)(e1.d, {
                                  label: eH.intl.string(eH.t.Au2b7m),
                                  description: eH.intl.format(eH.t.tI7KNX, {
                                      documentationLink: ek.A.getArticleURL(eB.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === eB.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, n.jsx)(I.p, { messageType: I.Y.INFO, children: eH.intl.string(eH.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            U = tm.wE.has(e.type)
                ? (0, n.jsx)(tF.A, {
                      page: eB.liQ.CHANNEL_SETTINGS,
                      children: (0, n.jsx)(ll, {
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
                ? (0, n.jsx)(e1.d, {
                      label: eH.intl.string(eH.t.id3ozj),
                      description: eH.intl.format(eH.t.feJW1z, {
                          helpdeskArticle: ek.A.getArticleURL(eB.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(lm.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eB.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !d?.features.has(eB.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            V = e.isMediaChannel()
                ? (0, n.jsx)(e1.d, {
                      label: eH.intl.string(eH.t.u8LZOt),
                      description: eH.intl.string(eH.t.J4wCc7),
                      checked: !e.hasFlag(lm.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === eB.rbe.GUILD_CATEGORY
            ? ((i = eH.intl.string(eH.t.OCAkGP)), (l = "category-name"))
            : e.isForumPost()
              ? ((i = eH.intl.string(eH.t.uyVrTN)), (l = "post-title"))
              : g
                ? ((i = eH.intl.string(eH.t.j3XWjD)), (l = "thread-name"))
                : ((i = eH.intl.string(eH.t.PVbHDl)), (l = "channel-name"));
        let B = u ? a : s;
        return (0, n.jsxs)(tU.B, {
            gap: 24,
            children: [
                (0, n.jsx)(tV.k, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: l,
                    autoFocus: !0,
                    disabled: !B,
                    maxLength: eB.Ign,
                    trailing: B
                        ? {
                              type: "emoji",
                              button: (0, n.jsx)(lN, {
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
                M,
                N,
                E,
                v,
                R,
                D,
                k,
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
        let { canManageChannels: l } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, ls.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, n.jsx)(tB.A, {
            label: eH.intl.string(eH.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > eB.gp3 ? eH.intl.format(eH.t.SbQJk5, { bitrate: eB.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [eB.hcd, eB.gp3, i],
            minValue: eB.hcd,
            maxValue: i,
            keyboardStep: eB.l2F,
            disabled: !l,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            tm.k.has(e.type) &&
            (e.isGuildVocal() || th.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = [
            { value: eB.K3c.AUTO, name: eH.intl.string(eH.t.jjKYpu) },
            { value: eB.K3c.FULL, name: eH.intl.string(eH.t["7jOoJE"]) },
        ];
        return (0, n.jsx)(tP.z, {
            label: eH.intl.string(eH.t.jhJEJs),
            helperText: eH.intl.format(eH.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: l,
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
        let l = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? eB.RCc : eB.cSc;
        return (0, n.jsx)(tB.A, {
            label: eH.intl.string(eH.t["/AoSGN"]),
            errorMessage: "" !== l ? l : void 0,
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
        let { regions: t, canManageChannels: l, guild: i } = this.props;
        if (null == i || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != t &&
            (s = t
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({ id: e.id, label: e.name, value: e.id }))).unshift({
                id: "auto",
                label: eH.intl.string(eH.t.JEmsap),
                value: lj,
            });
        let a = e.rtcRegion ?? lj;
        return (0, n.jsx)(tD.l, {
            selectionMode: "single",
            label: eH.intl.string(eH.t["Ms8bX+"]),
            description: eH.intl.string(eH.t["dbTs+z"]),
            options: s,
            value: a,
            onSelectionChange: this.handleRegionChange,
            disabled: !l,
        });
    }
    renderJuiceImage(e) {
        let t,
            { theme: i } = this.props;
        return (
            (t =
                e.type === eB.rbe.GUILD_CATEGORY
                    ? (0, eu.M)(i)
                        ? l(477777)
                        : l(517649)
                    : (0, eu.M)(i)
                      ? l(241306)
                      : l(16474)),
            (0, n.jsx)(e7.A, {
                justify: e7.A.Justify.CENTER,
                className: ld.o9,
                children: (0, n.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: l } = this.props;
        if (null == e || null == t || null == l) return null;
        let i = "channel-settings-overview-heading";
        return (0, n.jsxs)(tk.n, {
            "aria-labelledby": i,
            children: [
                (0, n.jsx)(R.D, { id: i, variant: "text-lg/medium", children: eH.intl.string(eH.t["/dp6yY"]) }),
                this.renderChannelInfo(e, t),
                this.showVoiceSettings() ? (0, n.jsx)(L.c, { gap: 24 }) : null,
                this.renderVoiceBitrate(e, l),
                this.renderVideoQualityMode(e),
                this.renderUserLimit(e),
                this.renderRegionOverride(e),
                this.renderJuiceImage(e),
            ],
        });
    }
    renderEmojiPicker = (e) => {
        let { closePopout: t } = e,
            { channel: l } = this.props;
        return (0, n.jsx)(tX.A, {
            guildId: l?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: l, willClose: n } = e;
                this.handleChangeDefaultReactionEmoji(l), n && t();
            },
            pickerIntention: lx.EmojiIntention.COMMUNITY_CONTENT,
            channel: l,
            analyticsOverride: lf,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let l = (0, tR.lA)(t.flags, lm.lx.REQUIRE_TAG, e);
        (0, d.fy)({ flags: l });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, t9.A)(e, !1)) : eB.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, ls.an)(e));
        let l = this.nameInputRef.current?.selectionStart ?? 0;
        (0, d.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(l, l);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, t9.A)(t, !0);
            e !== t && (0, d.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            l = t?.selectionStart ?? 0,
            n = t?.selectionEnd ?? 0,
            i = this.props.channelName,
            s = i?.substring(0, l) + e + i?.substring(n);
        (0, d.fy)({ name: s }),
            setTimeout(() => {
                let n = l + e.length;
                t?.focus(), t?.setSelectionRange(n, n);
            }, 0);
    };
    handleChangeTopic = (e) => {
        (0, d.fy)({ topic: t$.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeRichTopic = (e, t, l) => {
        this.setState({ textTopicValue: t, richTopicValue: l }), this.handleChangeTopic(t);
    };
    handleSubmit() {
        return new Promise((e) => {
            e({ shouldClear: !1, shouldRefocus: !0 });
        });
    }
    handleChangeTemplate = (e) => {
        (0, d.fy)({ template: t$.Ay.translateInlineEmojiToSurrogates(e) });
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
        let l = (0, tR.lA)(t.flags, lm.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, d.fy)({ nsfw: "nsfw" === e, flags: l });
    };
    handleNSFWChange = (e) => {
        (0, d.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let l = (0, tR.lA)(t.flags, lm.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, d.fy)({ flags: l });
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
        (0, d.fy)({ rtcRegion: e === lj ? null : e });
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
        let l = (0, tR.lA)(t.flags, lm.lx.SUMMARIES_DISABLED, !e);
        (0, d.fy)({ flags: l });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let l = (0, tR.lA)(t.flags, lm.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, d.fy)({ flags: l });
    };
}
function lv() {
    let { errors: e, channel: t, submitting: l, subsection: a } = (0, s.cf)([e_.A], () => e_.A.getProps()),
        r = (0, s.bG)([li.A], () => li.A.getRegions(t?.getGuildId() ?? null)),
        o = (0, s.bG)([tg.A], () => tg.A.theme),
        d = (0, s.bG)([Q.A], () => Q.A.getGuild(t?.getGuildId())),
        c = (0, th.NI)(t),
        u = (0, th.H_)(t),
        { canManageChannels: h, canSendMessages: g } = (0, s.cf)([X.A], () => ({
            canManageChannels: X.A.can(eB.xBc.MANAGE_CHANNELS, t),
            canSendMessages: X.A.can(eB.xBc.SEND_MESSAGES, t),
        })),
        x = (0, m.Ay)(t),
        p = ln.default.getId(),
        A = (0, tK.p)(),
        f = t?.id,
        C = (0, tz.cI)(t, !1, !0),
        j = lo.useExperiment(
            { guildId: t?.guild_id, location: "ChannelSettingsOverview" },
            { autoTrackExposure: !0 },
        ).enabled,
        b = i.useCallback(
            (e) => {
                null != f && A.getState().setLayoutType(f, e);
            },
            [f, A],
        );
    return (0, n.jsx)(lE, {
        errors: e,
        channel: t,
        channelName: x,
        submitting: l,
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
var ly = l(181420);
function lS(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        l = arguments.length > 2 ? arguments[2] : void 0;
    g.Ay.trackWithMetadata(eB.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: l,
    });
}
class lT extends i.PureComponent {
    componentDidMount() {
        lS(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        o.h.wait(() => (0, d.VN)());
    }
    componentDidUpdate(e) {
        let { formState: t, section: l } = e,
            {
                formState: n,
                section: i,
                canManageRoles: s,
                canManageChannels: a,
                canManageWebhooks: r,
                canUnlinkChannel: o,
            } = this.props;
        (a || s || r || o) &&
        (n !== eB.XlH.CLOSED || n === t) &&
        (s || i !== eB.p_A.PERMISSIONS) &&
        (r || o || i !== eB.p_A.INTEGRATIONS)
            ? i !== l && lS(i, l)
            : (0, c.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: l,
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
            : (0, n.jsx)(u.Ay, {
                  theme: e,
                  sidebarTheme: t,
                  section: l ?? eB.p_A.OVERVIEW,
                  onSetSection: d.c4,
                  onClose: c.jH,
                  sections: (function (e) {
                      let {
                              channel: t,
                              category: l,
                              canManageRoles: i,
                              canManageChannels: s,
                              canDeleteChannels: o,
                              canManageWebhooks: u,
                              canUnlinkChannel: g,
                          } = e,
                          p = (0, x.gU)(t),
                          { GUILD_CATEGORY: A } = eB.rbe,
                          f = tm.Le.has(t.type),
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
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                null != p
                                                    ? (0, n.jsx)(p, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: ly.p,
                                                      })
                                                    : null,
                                                (0, m.m1)(t, q.default, tA.A),
                                                null != l
                                                    ? (0, n.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: ly.L,
                                                          children: (0, m.m1)(l, q.default, tA.A),
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
                              element: lv,
                              notice: { element: lb, stores: [e_.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: eB.p_A.PERMISSIONS,
                              label: eH.intl.string(eH.t.xrmhRX),
                              element: td,
                              notice: { element: eJ, stores: [W.A] },
                              predicate: () => i && !f,
                          },
                          {
                              section: eB.p_A.INSTANT_INVITES,
                              label: eH.intl.string(eH.t["9F90ic"]),
                              element: tS,
                              type: h.Py.CUSTOM,
                              predicate: () => t.type !== A && s && !f && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eB.p_A.INTEGRATIONS,
                              label: eH.intl.string(eH.t.s69NLF),
                              ariaLabel: eH.intl.string(eH.t.s69NLF),
                              element: tN,
                              notice: { stores: [tx.A], element: tE },
                              predicate: () => !((!u && !g) || t.isModeratorReportChannel()) && tm.oH.has(t.type),
                          },
                          { section: h.Fq.DIVIDER },
                          {
                              section: eB.p_A.DELETE,
                              onClick() {
                                  (0, tC.O)(t, function () {
                                      tf._.subscribeOnce(eB.jej.LAYER_POP_COMPLETE, () => {
                                          (0, d.D3)(t.id);
                                      }),
                                          (0, c.jH)();
                                  });
                              },
                              label: C,
                              ariaLabel: C,
                              icon: (0, n.jsx)(r.u, { size: "xs", color: "currentColor" }),
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
function lM() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([e_.A], () => e_.A.getProps()),
        l = (0, s.bG)([e_.A], () => e_.A.getFormState()),
        i = (0, s.bG)([e_.A], () => e_.A.getSection()),
        a = (0, s.bG)([tg.A], () => tg.A.theme),
        r = (0, tu.NC)(),
        o = (0, th.NI)(e),
        d = (0, th.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, s.cf)([X.A], () => ({
            canManageChannels: X.A.can(eB.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && X.A.can(eB.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && X.A.can(eB.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, tc.n)(e, X.A),
        })),
        m = (0, s.bG)([tp.A], () => tp.A.getChannel(e?.parent_id));
    return (0, n.jsx)(lT, {
        channel: e,
        category: m,
        canManageChannels: e?.isThread() ? o : c,
        canDeleteChannels: e?.isThread() ? d : c,
        canManageRoles: u,
        canManageWebhooks: h,
        canUnlinkChannel: g,
        formState: l,
        theme: a,
        sidebarTheme: r,
        section: i,
        analyticsLocation: t,
    });
}
