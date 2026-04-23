"use strict";
n.r(t), n.d(t, { default: () => nT });
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
    g = n(58149),
    m = n(47167),
    x = n(713654),
    p = n(503698),
    f = n.n(p),
    b = n(990078),
    A = n(179866),
    _ = n(97808),
    C = n(778712),
    j = n(939249),
    N = n(285796),
    S = n(475825),
    E = n(192308),
    v = n(451394),
    y = n(821609),
    T = n(194261),
    R = n(512950),
    I = n(534514),
    M = n(404778),
    L = n(663417),
    w = n(565787),
    O = n(157559),
    k = n(308528),
    D = n(702805),
    G = n(155718),
    B = n(709066),
    U = n(87e3),
    P = n(60868),
    V = n(894328),
    H = n(997509),
    F = n(776781),
    z = n(233993),
    W = n(110618),
    Z = n(176360),
    Y = n(696451),
    J = n(317525),
    X = n(71393),
    Q = n(576705),
    $ = n(287809);
function q(e) {
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
    et = n(615300),
    en = n(862482),
    el = n(707554);
n(321073);
var ei = n(735438),
    es = n.n(ei),
    ea = n(136722),
    er = n(113325),
    eo = n(36525),
    ed = n(462887),
    ec = n(732771),
    eu = n(922016),
    eh = n(761508),
    eg = n(349288),
    em = n(442433),
    ex = n(365199),
    ep = n(545442),
    ef = n(316710),
    eb = n(821589),
    eA = n(165808);
let e_ = { XSMALL: eA.xsmall, SMALL: eA.small, MEDIUM: eA.medium, LARGE: eA.large };
class eC extends i.PureComponent {
    static Sizes = e_;
    static defaultProps = { size: e_.MEDIUM, disabled: !1 };
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
            className: f()((0, eb.t)(eA, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...s,
        });
    }
}
var ej = n(967144),
    eN = n(660811);
function eS(e) {
    let { role: t, guild: s } = e,
        [a, r] = i.useState(!1);
    return (0, ef.x)(s, t)
        ? (0, l.jsx)(j.D, {
              onClick: (e) => {
                  r(!0),
                      (0, em.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 316710));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: s });
                          },
                          { onClose: () => r(!1) },
                      );
              },
              className: f()(eN.X2, { [eN.ho]: a }),
              children: (0, l.jsx)(ex.j, { size: "custom", color: "currentColor", width: 20, height: 20 }),
          })
        : null;
}
function eE(e) {
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
            onContextMenu: f,
            "aria-label": A,
        } = e,
        _ = (0, ej.X_)(a.id, s, s?.colorStrings);
    return o
        ? (0, l.jsx)("div", { className: eN.rz })
        : (0, l.jsx)(eh.V.Item, {
              className: eN.JC,
              id: i,
              selectedItem: d,
              onItemSelect: c,
              itemType: u,
              "aria-label": null != g ? `${A}, ${g}` : A,
              onContextMenu: f,
              children: (0, l.jsxs)("div", {
                  className: eN.yl,
                  children: [
                      "dot" === p
                          ? (0, l.jsx)(ep.W, {
                                color: t ?? void 0,
                                colors: _,
                                className: eN.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(ep.R, { color: t ?? null, colors: _, className: eN.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, ed.M)(x) ? n(454554) : n(470474);
                          return (0, l.jsx)(b.m, { text: g, children: (0, l.jsx)(eC, { className: eN.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: eN.dD, children: r }),
                      m && null != s ? (0, l.jsx)(eS, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
var ev = n(736653),
    ey = n(775602),
    eT = n(861197),
    eR = n(438271),
    eI = n(260509),
    eM = n(889227),
    eL = n(863036),
    ew = n(403362),
    eO = n(695184),
    ek = n(975571),
    eD = n(562153),
    eG = n(558393),
    eB = n(427262),
    eU = n(652215),
    eP = n(985018),
    eV = n(508573),
    eH = n.n(eV),
    eF = n(686956),
    ez = n(17586),
    eW = n(329296);
let eZ = s.Ay.connectStores([Z.A, eL.A], () => {
    let e = eL.A.getChannel();
    return {
        submitting: Z.A.formState === eU.XlH.SUBMITTING,
        onReset() {
            (0, D.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = Z.A.editedPermissionIds.reduce((e, t) => {
                let n = Z.A.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, D.R$)(e.id, t);
        },
    };
})(eo.A);
function eY(e) {
    let { overwrite: t } = e,
        n = (0, s.bG)([Z.A], () => Z.A.channel),
        i = (0, s.bG)([X.A], () => (null != n ? X.A.getGuild(n.getGuildId()) : null)),
        a = (0, s.bG)([J.A], () => (null != i && null != t && t.type === G.r2.ROLE ? J.A.getRole(i.id, t.id) : void 0));
    if (null == n || null == i || null == t) return null;
    let { guild_id: r, id: o } = n,
        d = () => {
            if (null == X.A.getGuild(r)) return "";
            let e = t.type === G.r2.MEMBER ? $.default.getUser(t.id) : void 0,
                n = e?.username ?? "";
            return null != a ? a.name : n;
        },
        c = (e, l) => {
            if ("boolean" == typeof l) throw Error("Unexpected boolean action");
            let { allow: i, deny: s } = t;
            switch (((s = ea.TF(s, e)), (i = ea.TF(i, e)), l)) {
                case "ALLOW":
                    i = ea.WQ(i, e);
                    break;
                case "DENY":
                    s = ea.WQ(s, e);
            }
            if (Q.A.can(e, n, { [t.id]: { ...t, allow: i, deny: s } })) (0, D.LA)(n, t.id, i, s);
            else {
                var a;
                let e;
                if (t.type === G.r2.MEMBER) {
                    let n = $.default.getUser(t.id);
                    null != n && (e = eB.Ay.getName(n));
                } else if (t.type === G.r2.ROLE) {
                    let l = X.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = J.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                (a = e),
                    O.A.show({
                        title: eP.intl.string(eP.t.vElC9b),
                        body: eP.intl.format(eP.t.yslqFM, { name: a }),
                        cancelText: eP.intl.string(eP.t.psXQHP),
                        onCancel() {
                            window.open(ek.A.getArticleURL(eU.MVz.PERMISSIONS_LOCKOUT));
                        },
                    });
            }
        },
        u = (e) => {
            let t = Q.A.can(eU.xBc.ADMINISTRATOR, i) || Q.A.can(eU.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && z.Zq.has(e)
                ? eP.intl.string(eP.t.bTS5lf)
                : !((!ea.aI(e, eU.xBc.MANAGE_ROLES) || t) && (null == e || Q.A.can(e, i) || t)) &&
                      eP.intl.string(eP.t.nOtPMM);
        },
        h = t.id === r,
        g = n.isForumLikeChannel() && ea.zy(t.deny, eU.xBc.SEND_MESSAGES),
        m = ea.zy(t.deny, eU.xBc.SEND_MESSAGES),
        x = ea.zy(t.deny, eU.xBc.READ_MESSAGE_HISTORY),
        p = eG.A.generateChannelPermissionSpec(r, n, h, {
            createPostsDisabled: g,
            sendMessagesDisabled: m,
            readMessageHistoryDisabled: x,
        });
    return (0, l.jsxs)(eT.Ay.Content, {
        className: ez.uA,
        children: [
            p.map((e, n) =>
                (0, l.jsx)(
                    eR.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: c, permissionRender: u, className: ez.p2 },
                    n,
                ),
            ),
            r === t.id
                ? null
                : (0, l.jsx)(y.$, {
                      variant: "critical-secondary",
                      text: eP.intl.format(eP.t.txPV7k, { name: d() }),
                      onClick: () => {
                          let e = d();
                          O.A.show({
                              title: eP.intl.string(eP.t.GuPYQB),
                              body: eP.intl.format(eP.t.xERCnZ, { name: e }),
                              cancelText: eP.intl.string(eP.t["ETE/oC"]),
                              onConfirm: () => k.A.clearPermissionOverwrite(o, t.id),
                          });
                      },
                  }),
        ],
    });
}
function eJ(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = eD.Ay.getNickname(t, n, i),
        o = eB.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: ez.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(_.eu, {
                              className: ez.PX,
                              size: C._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(a.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: f()(eW.uN, ez.mG),
            children: [
                (0, l.jsx)(_.eu, { size: C._3.SIZE_32, src: s, "aria-label": i.username, className: ez.RJ }),
                (0, l.jsxs)("div", {
                    className: ez.F0,
                    children: [(0, l.jsx)(a.E, { className: ez.F0, variant: "text-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function eX(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function eQ(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: o, onSelect: d } = e,
        c = (0, s.bG)([J.A], () => J.A.getSortedRoles(t.id)),
        u = (0, s.yK)([Y.Ay], () => Y.Ay.getMemberIds(t.id)),
        h = i.useMemo(
            () => [
                ...c.filter((e) => null == r[e.id]),
                ...es()(u)
                    .map($.default.getUser)
                    .filter(ew.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [u, r, c],
        );
    return (0, l.jsx)(er.l, {
        className: ez.Nd,
        children: (0, l.jsxs)(ec.iS, {
            selectionMode: "single",
            onSelectionChange: (e) => {
                null != e && (eX(e) ? d(e.id, G.r2.ROLE) : e instanceof eM.A && d(e.id, G.r2.MEMBER), o());
            },
            options: h,
            formatOption: (e) => ({ id: e.id, value: e, label: eX(e) ? e.name : eB.Ay.getUserTag(e) }),
            children: [
                (0, l.jsx)("div", {
                    className: ez.ON,
                    children: (0, l.jsx)(ec.a3, {
                        label: eP.intl.string(eP.t.lT5Zth),
                        placeholder: eP.intl.string(eP.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: (e) => {
                            let n = e.target.value;
                            eO.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(ec.X2, {
                    renderListItem: (e) => {
                        let { value: i } = e;
                        if (eX(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: f()(eW.uN, ez.xf),
                                    children: [
                                        (0, l.jsx)(a.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: ez.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(a.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: eP.intl.string(eP.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof eM.A) return (0, l.jsx)(eJ, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function e$() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, s.cf)([Z.A], () => Z.A),
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
                        eH()(
                            null == t
                                ? []
                                : Object.values(t)
                                      .filter((e) => e.type === G.r2.MEMBER)
                                      .map((e) => e.id),
                            (e) => n.includes(e),
                        ),
                    [t, n],
                );
            return (
                i.useEffect(() => {
                    a.length > 0 && null != e && eF.A.requestMembersById(e, a, !1);
                }, [a, e]),
                (0, s.yK)([$.default], () => l.map($.default.getUser).filter(ew.Vq), [l])
            );
        })(c, o),
        m = (0, ev.Ay)(),
        x = (0, s.bG)([ey.A], () => ey.A.roleStyle),
        p = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, em.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != u ? (0, eI.af)(u) : null,
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
                                      O.A.show({
                                          title: eP.intl.string(eP.t.GuPYQB),
                                          body: eP.intl.format(eP.t.xERCnZ, { name: s }),
                                          cancelText: eP.intl.string(eP.t["ETE/oC"]),
                                          onConfirm: () => k.A.clearPermissionOverwrite(r.id, e),
                                      });
                                  },
                        });
                });
            },
            [r, u],
        );
    if (null == u || null == h || null == r || null == o) return null;
    let f = (e, t) => {
        k.A.updatePermissionOverwrite(r.id, { id: e, type: t, allow: K.x3, deny: K.x3 }).then(() => (0, D.G9)(e));
    };
    null != o && null == o[u.id] && (o[u.id] = K.xT(u.id));
    let b = h
            .filter((e) => o[e.id]?.type === G.r2.ROLE)
            .map((e) =>
                (0, l.jsx)(
                    eE,
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
        A = es()(g)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(u.id, 24);
                return (0, l.jsx)(
                    eE,
                    {
                        id: e.id,
                        guild: u,
                        theme: m,
                        roleStyle: x,
                        "aria-label": eB.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => p(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: ez.mG,
                            children: [
                                (0, l.jsx)(_.eu, {
                                    size: C._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: ez.bE,
                                }),
                                (0, l.jsx)("span", { className: ez.Xh, children: eB.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(eT.Ay.Sidebar, {
        className: ez.uA,
        scrollable: !0,
        children: (0, l.jsxs)(eh.V, {
            onItemSelect: D.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, ed.M)(m) ? n(546716) : n(233497)),
                (0, l.jsx)(eu.Y, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: n } = e;
                        return (0, l.jsx)(eQ, {
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
                        (0, l.jsx)(eh.V.Header, {
                            ref: t,
                            ...n,
                            children: (0, l.jsxs)("div", {
                                className: ez.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [eP.intl.string(eP.t["LPJmL/"]), "/", eP.intl.string(eP.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: ez.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                b,
                A,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(eh.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(eg.Anchor, {
                            href: ek.A.getArticleURL(eU.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(a.E, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: eP.intl.string(eP.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eq() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, s.cf)([Z.A], () => Z.A);
    if (
        null == (0, s.bG)([X.A], () => (null != e ? X.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(eT.Ay, { className: ez.kL, children: [(0, l.jsx)(e$, {}), (0, l.jsx)(eY, { overwrite: i })] });
}
var eK = n(147925),
    e0 = n(311809);
function e2() {
    let e = (0, s.bG)([Z.A], () => Z.A.advancedMode),
        [t] = i.useState(new et.A.Value(+!!e));
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(M.c, { className: e0.BQ }),
            (0, l.jsx)(el.F, {
                component: (0, l.jsx)(en.$n, {
                    look: en.$n.Looks.BLANK,
                    color: en.$n.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? et.A.timing(t, { toValue: 0, duration: 250 }).start(() => {
                                  (0, D.E)(!1);
                              })
                            : ((0, D.E)(!0), et.A.timing(t, { toValue: 1, duration: 250 }).start());
                    },
                    children: (0, l.jsxs)(a.E, {
                        variant: "text-lg/semibold",
                        className: e0.Vt,
                        children: [
                            eP.intl.string(eP.t.dYRsrm),
                            (0, l.jsx)(eK.A, { expanded: e, className: e0.yM, width: 20, height: 20 }),
                        ],
                    }),
                }),
                children: e && (0, l.jsx)(et.A.div, { style: { opacity: t }, children: (0, l.jsx)(eq, {}) }),
            }),
        ],
    });
}
var e1 = n(243721),
    e5 = n(235986),
    e3 = n(60727);
function e7(e) {
    let { description: t, icon: n, id: i, label: s, onChange: r, value: o } = e;
    return (0, l.jsxs)("div", {
        className: e3.U,
        children: [
            (0, l.jsxs)(e5.A, {
                justify: e5.A.Justify.BETWEEN,
                align: e5.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(e5.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(a.E, { variant: "text-md/semibold", children: s }),
                    }),
                    null != r && null != o && (0, l.jsx)(e1.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, l.jsx)(a.E, { variant: "text-xs/normal", color: "text-default", className: e3.L, children: t }),
        ],
    });
}
var e4 = n(661531),
    e6 = n(359778),
    e9 = n(400725);
let e8 = (e) => {
    let { className: t, icon: n, noticeText: i, buttonText: s, onClick: r, canSync: o } = e;
    return (0, l.jsx)(e6.Z, {
        className: f()(t, e9.N),
        children: (0, l.jsxs)(e5.A, {
            justify: e5.A.Justify.BETWEEN,
            align: e5.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: e4.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: e9.P,
                    children: (0, l.jsx)(a.E, { variant: "text-md/normal", children: i }),
                }),
                o &&
                    (0, l.jsx)(en.$n, {
                        size: en.$n.Sizes.SMALL,
                        color: en.$n.Colors.PRIMARY,
                        onClick: r,
                        children: s,
                    }),
            ],
        }),
    });
};
var te = n(719366),
    tt = n(818348),
    tn = n(497903);
function tl(e) {
    let { channel: t, roles: n, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(S.OZ, {
        className: tn.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case te.oO.ROLES:
                    (c =
                        (d = n[h]).rowType === te.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, l.jsx)(U.A, { className: tn.a, color: d.colorString, size: 20 })
                            : (0, l.jsx)(A.i, { size: "custom", className: tn.a, color: d.colorString, height: 20 })),
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
                case te.oO.MEMBERS:
                    (d = i[h]),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(_.eu, { src: d.avatarURL, size: C._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(a.E, { variant: "text-sm/normal", children: d.name }),
                                d.bot && (0, l.jsx)(B.A, { verified: d.verifiedBot }),
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    className: tn.Gq,
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
                    className: tn.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: tn.z7, children: o }),
                        (0, l.jsxs)("div", {
                            className: tn.z7,
                            children: [
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: ee.vV(d.rowType),
                                }),
                                d.rowType !== te.T6.EMPTY_STATE &&
                                    (0, l.jsx)(b.m, {
                                        asContainer: !0,
                                        text: s ?? r(d.rowType, d.disabled),
                                        children: (0, l.jsx)(j.D, {
                                            onClick: () => {
                                                var e, n, l;
                                                return (
                                                    m &&
                                                    null != d &&
                                                    ((e = d.id),
                                                    (n = d.name),
                                                    (l = d.rowType),
                                                    void O.A.show({
                                                        title: eP.intl.string(eP.t.GuPYQB),
                                                        body: eP.intl.format(eP.t.xERCnZ, { name: n }),
                                                        cancelText: eP.intl.string(eP.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, F.$b)(
                                                                        e,
                                                                        n === te.T6.ROLE ? G.r2.ROLE : G.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, F.pF)(l)
                                                                        ? k.A.clearPermissionOverwrite(t.id, l.id)
                                                                        : (0, D.R$)(t.id, [l]);
                                                                } else k.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, l),
                                                    }))
                                                );
                                            },
                                            className: tn.HI,
                                            "aria-disabled": !m,
                                            "aria-label": eP.intl.string(eP.t.N86XcP),
                                            children: (0, l.jsx)(N.a, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: f()(tn.Yz, { [tn._2]: g || s }),
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
                case te.oO.ROLES:
                    return (0, l.jsx)(ta, { title: eP.intl.string(eP.t["LPJmL/"]) }, "roles-title");
                case te.oO.MEMBERS:
                    return (0, l.jsx)(ta, { title: eP.intl.string(eP.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function ti(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, s.bG)([J.A], () => J.A.getSortedRoles(t.id)),
        d = ee.C$(t, o, i, z.QY, r),
        c = (0, s.bG)([Y.Ay], () => ee.Wi(Y.Ay.getMemberIds(t.id), i, t, z.QY, r)),
        u = (0, F.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: f()(tn.j1, tn.vu),
        children: [
            (0, l.jsx)(e7, {
                label: eP.intl.string(eP.t.StpcFU),
                description: eP.intl.string(eP.t.f7VbhF),
                icon: (0, l.jsx)(v.q, {
                    size: "custom",
                    color: "currentColor",
                    className: tn.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: tn.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: tn.MJ,
                        children: [
                            (0, l.jsx)(a.E, { variant: "text-md/semibold", children: eP.intl.string(eP.t["7BWDRb"]) }),
                            (0, l.jsx)(b.m, {
                                text: eP.intl.string(eP.t.arRuES),
                                shouldShow: !u,
                                children: (0, l.jsx)(y.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eP.intl.string(eP.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, E.openModalLazy)(async () => {
                                            let { default: e } = await n.e("58608").then(n.bind(n, 841811));
                                            return (t) => (0, l.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !u,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(tl, {
                        channel: i,
                        roles: d,
                        members: c,
                        disabledReason: u ? null : eP.intl.string(eP.t.arRuES),
                        getRemoveTooltipHint: W.Mt,
                    }),
                ],
            }),
        ],
    });
}
function ts(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: a, roles: r, members: o } = e,
        d = (0, s.bG)([Q.A], () => Q.A.can(tt.xB.ADMINISTRATOR, t)),
        c = K.MJ(tt.xB.VIEW_CHANNEL, t),
        u = K.MJ(tt.xB.ADMINISTRATOR, t);
    async function h() {
        let e = i.accessPermissions,
            s = $.default.getCurrentUser();
        a || null == (await (0, V.D)(t.id, i.id))
            ? (ee.uB(i, e, a), a || null == s || d || ee.tP(i, e))
            : (0, E.openModalLazy)(async () => {
                  let { Modal: e } = await n.e("4823").then(n.bind(n, 158954));
                  return (n) =>
                      (0, l.jsx)(e, {
                          ...n,
                          title: eP.intl.string(eP.t.ZzdgUm),
                          subtitle: eP.intl.format(eP.t.DwY2vN, {
                              onClick: () => {
                                  H.A.open(t.id, eU.BEX.ONBOARDING), n.onClose();
                              },
                          }),
                          actions: [{ text: eP.intl.string(eP.t.BddRzS), onClick: n.onClose }],
                      });
              });
    }
    let g = {
        title: eP.intl.string(eP.t.aUI70g),
        subtitle: eP.intl.string(eP.t.hfbjIH),
        formLabel: eP.intl.string(eP.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((g.title = eP.intl.string(eP.t.lEPAZ5)),
              (g.subtitle = eP.intl.string(eP.t.RQUk61)),
              (g.formLabel = eP.intl.string(eP.t["8VIxJu"])))
            : i.type === eU.rbe.GUILD_VOICE && (g.subtitle = eP.intl.string(eP.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: f()(tn.j1, { [tn.vu]: a }),
            children: [
                (0, l.jsx)(e7, {
                    description: g.subtitle,
                    icon: (0, l.jsx)(T.X, {
                        size: "custom",
                        color: "currentColor",
                        className: tn.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: g.title,
                    onChange: h,
                    value: a,
                }),
                (0, l.jsxs)("div", {
                    className: tn.X4,
                    children: [
                        u &&
                            (0, l.jsx)("div", {
                                className: tn.Ux,
                                children: (0, l.jsx)(R.p, {
                                    messageType: R.Y.WARNING,
                                    children: eP.intl.string(eP.t["5f3HIC"]),
                                }),
                            }),
                        !c &&
                            !u &&
                            !a &&
                            (0, l.jsx)("div", {
                                className: tn.Ux,
                                children: (0, l.jsx)(R.p, {
                                    messageType: R.Y.WARNING,
                                    children: eP.intl.string(eP.t.ZAk4Q9),
                                }),
                            }),
                        a &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: tn.MJ,
                                        children: [
                                            (0, l.jsx)(I.D, {
                                                variant: "heading-sm/semibold",
                                                className: tn.DH,
                                                children: g.formLabel,
                                            }),
                                            (0, l.jsx)(y.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eP.intl.string(eP.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, E.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.resolve().then(
                                                            n.bind(n, 685374),
                                                        );
                                                        return (t) =>
                                                            (0, l.jsx)(e, { ...t, channelId: i.id, inSettings: !0 });
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(tl, { channel: i, roles: r, members: o, getRemoveTooltipHint: ee.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function ta(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(M.c, { className: tn.yF }),
            (0, l.jsx)(I.D, { variant: "heading-sm/semibold", className: f()(tn.DH, tn.Gf), children: t }),
        ],
    });
}
let tr = s.Ay.connectStores([Z.A, Q.A, Y.Ay, X.A, J.A], () => {
    let e,
        t = Z.A.channel,
        n = Z.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = X.A.getGuild(t.getGuildId());
        let n = Y.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = J.A.getSortedRoles(e.id);
            (s = Z.A.editedPermissionIds.reduce((e, t) => {
                let n = Z.A.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (l = ee.uX(e, r, t, t.accessPermissions, s)),
                (i = ee.Wi(n, t, e, t.accessPermissions, s)),
                (a = ee.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != n && Q.A.can(tt.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: a,
        locked: Z.A.locked,
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
    let m = { title: eP.intl.string(eP.t.BAZMBn), subtitle: eP.intl.string(eP.t.XLrZyp) };
    return (
        s.isCategory() && ((m.title = eP.intl.string(eP.t["/uELTj"])), (m.subtitle = eP.intl.string(eP.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(I.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(a.E, { variant: "text-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, l.jsx)(e8, {
                              canSync: !1,
                              icon: L.f,
                              noticeText: eP.intl.format(eP.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(e8, {
                              buttonText: eP.intl.string(eP.t.NVwuHq),
                              canSync: !0,
                              icon: (0, w.k)(q),
                              noticeText: eP.intl.format(eP.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, E.openModalLazy)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: s,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = { ...i.permissionOverwrites };
                                                      null != e && null == t[e] && (t[e] = K.xT(e)),
                                                          (await (0, P.n)(s, t[e].deny, t[e].allow)) &&
                                                              (0, d.RT)(s.id, {
                                                                  permissionOverwrites: Object.values(t),
                                                              });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice() ? (0, l.jsx)(ti, { guild: c, channel: s, permissionUpdates: g }) : null,
                (0, l.jsx)(ts, { channel: s, guild: c, isPrivateGuildChannel: u, roles: o, members: r }),
                (0, l.jsx)(e2, {}),
            ],
        })
    );
});
var to = n(526132),
    td = n(97469),
    tc = n(406704),
    tu = n(363195),
    th = n(95701),
    tg = n(291731),
    tm = n(734057),
    tx = n(994500),
    tp = n(625494),
    tf = n(608226),
    tb = n(282956),
    tA = n(860603);
function t_(e) {
    let { refToScroller: t } = e,
        n = (0, s.bG)([eL.A], () => eL.A.getChannel(), []),
        i = (0, s.bG)([X.A], () => (null != n ? X.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: a,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, s.cf)([tg.A], () => tg.A.getProps(), []);
    return null == i || null == n
        ? null
        : (0, l.jsx)(tA.A, {
              guild: i,
              channel: n,
              section: a,
              sectionId: r,
              webhooks: o,
              editedWebhook: d,
              isFetchingWebhooks: c,
              hasChanges: tg.A.hasChanges,
              errors: u,
              refToScroller: t,
          });
}
function tC() {
    let { channel: e, submitting: t } = (0, s.cf)([eL.A], () => eL.A.getProps()),
        n = (0, s.bG)([tg.A], () => tg.A.editedWebhook),
        i = (0, s.bG)([X.A], () => (null != e ? X.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(eo.A, {
        submitting: t,
        onReset: () => {
            tb.A.init();
        },
        onSave: () => {
            null != i && null != n && tb.A.saveWebhook(i.id, n);
        },
    });
}
var tj = n(886235),
    tN = n(351906);
function tS() {
    let e = (0, s.bG)([tN.A], () => tN.A.hideInstantInvites),
        { channel: t, guild: n } = (0, s.cf)([eL.A, X.A], () => {
            let { channel: e } = eL.A.getProps(),
                t = null != e ? X.A.getGuild(e.getGuildId()) : null;
            return { channel: e, guild: t };
        }, []),
        i = (0, s.bG)([Q.A], () => null != t && Q.A.can(eU.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: a, loading: r } = (0, s.cf)([eL.A], () => eL.A.getInvites(), []);
    return (0, l.jsx)(tj.A, { invites: a, loading: r, guild: n, channel: t, canCreateInvites: i, hide: e });
}
n(938796), n(667532);
var tE = n(371444),
    tv = n(392421),
    ty = n(602137),
    tT = n(665260),
    tR = n(452027),
    tI = n(260598),
    tM = n(150934),
    tL = n(825484),
    tw = n(123292),
    tO = n(691885),
    tk = n(270003),
    tD = n(106236),
    tG = n(331322),
    tB = n(144228),
    tU = n(292666),
    tP = n(534963),
    tV = n(820284),
    tH = n(432371),
    tF = n(323073),
    tz = n(355622),
    tW = n(408018),
    tZ = n(201349),
    tY = n(375499),
    tJ = n(267889),
    tX = n(770335),
    tQ = n(7584),
    t$ = n(422844),
    tq = n(307301),
    tK = n(599119),
    t0 = n(219504),
    t2 = n(376310);
n(253913);
var t1 = n(231935);
function t5(e) {
    let { channel: t } = e,
        a = (0, s.bG)([Q.A], () => Q.A.can(eU.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        o = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            a &&
                !e &&
                (0, E.openModalLazy)(async () => {
                    let { default: e } = await n.e("47326").then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, a]),
        u = i.useCallback(
            (e) => {
                a &&
                    (0, E.openModalLazy)(async () => {
                        let { default: i } = await n.e("47326").then(n.bind(n, 950989));
                        return (n) => (0, l.jsx)(i, { ...n, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [a, t],
        ),
        {
            handleDragStart: h,
            handleDragReset: g,
            handleDragComplete: m,
        } = (0, t0.A)(t.availableTags, (e) => {
            (0, d.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: t1._A,
        children: [
            o
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          t3,
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
                ? (0, l.jsx)(j.D, {
                      onClick: c,
                      className: f()(t1.JE, { [t1.r9]: !a || r }),
                      children: (0, l.jsx)(tq.j, {
                          size: "custom",
                          "aria-label": eP.intl.string(eP.t["/jubeD"]),
                          color: e4.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(y.$, {
                      variant: "primary",
                      text: eP.intl.string(eP.t["/jubeD"]),
                      disabled: !a,
                      onClick: c,
                  }),
        ],
    });
}
function t3(e) {
    let {
            tag: t,
            availableTags: n,
            canManageChannels: i,
            onTagClick: s,
            onDragComplete: a,
            onDragStart: r,
            onDragReset: o,
        } = e,
        d = n.findIndex((e) => e.id === t.id),
        {
            drag: c,
            dragSourcePosition: u,
            drop: h,
            setIsDraggable: g,
        } = (0, tK.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: d,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: a,
            onDragReset: o,
        });
    return (0, l.jsx)("div", {
        className: f()(t1.kL, { [t1.A]: null != u && d < u, [t1.Ze]: null != u && d > u }),
        ref: (e) => {
            c(h(e));
        },
        onMouseEnter: () => g(i),
        onMouseLeave: () => g(!1),
        children: (0, l.jsx)(t2.A, {
            tag: t,
            disabled: !i,
            ariaLabel: eP.intl.formatToPlainString(eP.t.jhSvB9, { name: t.name }),
            onClick: i ? () => s(t) : void 0,
        }),
    });
}
var t7 = n(235640),
    t4 = n(268761),
    t6 = n(474078),
    t9 = n(783878),
    t8 = n(980296);
let ne = (e) => {
    let { autoArchiveDuration: t, onChange: n, isDisabled: i, helperText: s } = e,
        a = (0, t4.Gk)();
    return (0, l.jsx)("div", {
        className: t8.gy,
        children: (0, l.jsx)(t9.Z, {
            selectionMode: "single",
            label: eP.intl.string(eP.t.FGjMZS),
            helperText: s,
            disabled: i,
            options: a,
            value: t,
            onSelectionChange: n,
        }),
    });
};
var nt = n(495544),
    nn = n(717518),
    nl = n(147036),
    ni = n(927813),
    ns = n(989349),
    na = n.n(ns);
function nr(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eP.intl.string(eP.t.Yl1D84),
        l = na().duration(e, "seconds");
    return l.days() > 0
        ? eP.intl.formatToPlainString(t ? eP.t.GBLpQ8 : eP.t["k2UNz+"], { days: l.days() })
        : l.hours() > 0
          ? eP.intl.formatToPlainString(t ? eP.t.rhY1Rs : eP.t.xCjYxK, { hours: l.hours() })
          : l.minutes() > 0
            ? eP.intl.formatToPlainString(t ? eP.t["XIGt+W"] : eP.t.iXLF9W, { minutes: l.minutes() })
            : e > 0
              ? eP.intl.formatToPlainString(t ? eP.t.pyvjRp : eP.t.geSp4K, { seconds: l.seconds() })
              : t
                ? eP.intl.string(eP.t.Yl1D84)
                : n;
}
let no = (0, n(600975).C)({
    kind: "guild",
    id: "2026-03_spoiler_channel",
    label: "Spoiler Channel",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable spoiler channel setting", config: { enabled: !0 } }],
});
var nd = n(818050);
function nc(e) {
    let { label: t, helperText: n, hideLabel: s, channel: a, onChange: r } = e,
        [o, d] = i.useState(null),
        c = a.rateLimitPerUser,
        u = i.useMemo(() => {
            let e = [...(o ?? eU.s_7)];
            return e.includes(c) || e.unshift(c), e.map((e) => ({ id: e.toString(), label: nr(e, !1), value: e }));
        }, [o, c]),
        h = i.useCallback(
            (e) => {
                r(e), d(null);
            },
            [r],
        ),
        g = i.useCallback((e) => {
            if ("" === e) return void d(null);
            let t = [],
                n = parseInt(e, 10);
            if (Number.isNaN(n)) return void d(null);
            n <= eU.WA1 && t.push(n);
            let l = n * ni.A.Seconds.MINUTE;
            l <= eU.WA1 && t.push(l);
            let i = n * ni.A.Seconds.HOUR;
            i <= eU.WA1 && t.push(i), d(t);
        }, []),
        m = i.useCallback(() => {
            d(null);
        }, []);
    return (0, l.jsx)("div", {
        className: nd.QB,
        children: (0, l.jsx)(t9.Z, {
            selectionMode: "single",
            label: t,
            hideLabel: s,
            helperText: n,
            value: c,
            onSelectionChange: h,
            onQueryChange: (e) => g(e.target.value),
            options: u,
            onBlur: m,
            placeholder: eP.intl.string(eP.t.dBqQu4),
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
    nf = n(263107);
let nb = {
        popoutLocation: {
            page: eU.liQ.CHANNEL_SETTINGS,
            section: eU.JJy.CHANNEL_DEFAULT_REACTION,
            object: eU.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nA = {
        popoutLocation: {
            page: eU.liQ.CHANNEL_SETTINGS,
            section: eU.JJy.CHANNEL_NAME,
            object: eU.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    n_ = "AUTOMATIC_RTC_REGION",
    nC = s.Ay.connectStores([eL.A], () => {
        let { channel: e, submitting: t } = eL.A.getProps();
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
                    defaultReactionEmoji: f,
                    availableTags: b,
                    defaultSortOrder: A,
                    defaultForumLayout: _,
                    defaultTagSetting: C,
                } = e;
                e.isThread() && 0 === (t = (0, t6.A)(t, !0)).length
                    ? o.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eP.intl.string(eP.t.uXA573) },
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
                          defaultReactionEmoji: f,
                          availableTags: b,
                          defaultSortOrder: A,
                          defaultForumLayout: _,
                          defaultTagSetting: C,
                      });
            },
        };
    })(eo.A);
function nj(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(tJ.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: nx.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        null != n && n.type === tX.i.UNICODE && t(n.surrogates), l && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: nA,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(eu.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: eu.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(tY.A, { ...e, ref: a, active: n, className: nf.Z8, tabIndex: 0 });
        },
    });
}
class nN extends i.PureComponent {
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
                (this.channelTopicTextAreaChannel = (0, th.createChannelRecord)({
                    id: "1",
                    type: eU.rbe.DM,
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
        null == this.props.regions && null != this.props.guild && tP.A.fetchRegions(this.props.guild.id);
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
            ? eP.intl.string(eP.t["a+1pdO"])
            : e?.isThread()
              ? eP.intl.string(eP.t.OMmNCv)
              : eP.intl.string(eP.t["HEA/DU"]);
    }
    getCooldownSliderLabel(e) {
        return nr(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return nr(e * ni.A.Seconds.MINUTE, !0);
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
            g = th.Le.has(e.type),
            m = e.isForumLikeChannel(),
            x = m && e.availableTags?.every((e) => e.moderated),
            p = $.default.getCurrentUser()?.isStaff() === !0,
            b = th.IY.has(e.type)
                ? (0, l.jsx)(tR.D, {
                      label: m ? eP.intl.string(eP.t.yR6HwZ) : eP.intl.string(eP.t.X8jMDh),
                      children: (0, l.jsx)(tZ.Ay, {
                          className: f()(nf.zm, { [nf.r9]: !s }),
                          innerClassName: f()(nf.At, { [nf.r9]: !s }),
                          characterCountClassName: nf.IQ,
                          maxCharacterCount: m ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eP.intl.string(eP.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? d?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: m ? tz.oU.FORUM_CHANNEL_GUIDELINES : tz.oU.CHANNEL_TOPIC,
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
            A =
                m && p
                    ? (0, l.jsx)(tI.f, {
                          label: eP.intl.string(eP.t.qk2jdY),
                          placeholder: eP.intl.string(eP.t.DDjD1H),
                          value: tQ.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            _ = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(M.c, {}),
                          (0, l.jsx)(tR.D, {
                              label: eP.intl.string(eP.t["P/y+sj"]),
                              description: eP.intl.string(eP.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(t5, { channel: e }),
                          }),
                          (0, l.jsx)(tM.S, {
                              disabled: !s || x,
                              checked: e.hasFlag(nm.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eP.intl.string(eP.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            C = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(M.c, {}),
                          (0, l.jsx)(tR.D, {
                              label: eP.intl.string(eP.t["8ao1+E"]),
                              description: eP.intl.string(eP.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: nf.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: f()(nf.t0, nf._h),
                                          children: (0, l.jsxs)(tL.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(eu.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: eu.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(y.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eP.intl.string(eP.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(tw.Q, {
                                                            text: eP.intl.string(eP.t.N86XcP),
                                                            onClick: () => this.handleChangeDefaultReactionEmoji(null),
                                                            variant: "critical",
                                                        })
                                                      : null,
                                              ],
                                          }),
                                      }),
                                      (0, l.jsx)(t7.A, { reactionEmoji: e.defaultReactionEmoji }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : null,
            j = e.isForumChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(M.c, {}),
                          (0, l.jsxs)("div", {
                              className: nf.OZ,
                              children: [
                                  (0, l.jsx)("div", {
                                      className: f()(nf.t0, nf.WC),
                                      children: (0, l.jsx)(tO.l, {
                                          selectionMode: "single",
                                          label: eP.intl.string(eP.t["kQvoC/"]),
                                          description: eP.intl.string(eP.t.mOSViT),
                                          options: [
                                              { id: "list", label: eP.intl.string(eP.t["4HXEZG"]), value: tE.C.LIST },
                                              { id: "grid", label: eP.intl.string(eP.t["8RswJG"]), value: tE.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? tE.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === tE.C.GRID
                                      ? (0, l.jsx)(nh, { className: nf.Kf })
                                      : (0, l.jsx)(ng, { className: nf.Kf }),
                              ],
                          }),
                          (0, l.jsx)(M.c, {}),
                      ],
                  })
                : null,
            N = e.isForumLikeChannel()
                ? (0, l.jsx)(tO.l, {
                      selectionMode: "single",
                      label: eP.intl.string(eP.t.gePre2),
                      description: eP.intl.string(eP.t["165cVX"]),
                      options: [
                          { id: "activity", label: eP.intl.string(eP.t.ElZtzj), value: ty.T.LATEST_ACTIVITY },
                          { id: "creation", label: eP.intl.string(eP.t.w28f3F), value: ty.T.CREATION_DATE },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            S = e.isForumLikeChannel()
                ? (0, l.jsx)(tO.l, {
                      selectionMode: "single",
                      label: eP.intl.string(eP.t.Paxaug),
                      description: eP.intl.string(eP.t.DqOl8J),
                      options: [
                          { id: "some", label: eP.intl.string(eP.t.rQ0ctQ), value: tv.n.MATCH_SOME },
                          { id: "all", label: eP.intl.string(eP.t.FCXUu0), value: tv.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            E = g ? r : s,
            v = (0, l.jsx)(nc, {
                label: eP.intl.string(eP.t.tTHx98),
                helperText: this.getSlowmodeHelpText(),
                channel: e,
                onChange: this.handleChangeSlowmode,
            }),
            T = th.nb.has(e.type)
                ? m
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(M.c, {}),
                              (0, l.jsxs)(tk.n, {
                                  label: eP.intl.string(eP.t.O1c02q),
                                  children: [
                                      v,
                                      (0, l.jsx)(tD.A, {
                                          label: eP.intl.string(eP.t["fkY5+l"]),
                                          helperText: eP.intl.string(eP.t.kdZU6H),
                                          initialValue: e.defaultThreadRateLimitPerUser ?? 0,
                                          markers: eU.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderLabel,
                                          getAriaValueText: this.getCooldownSliderLabel,
                                          disabled: !E,
                                          equidistant: !0,
                                      }),
                                  ],
                              }),
                              (0, l.jsx)(M.c, {}),
                          ],
                      })
                    : v
                : null,
            I =
                g && null != e.threadMetadata
                    ? (0, l.jsx)(tV.A, {
                          page: eU.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(ne, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? np.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eP.intl.string(eP.t["3aJN9M"]) : eP.intl.string(eP.t.YUXr4Z),
                          }),
                      })
                    : null,
            L =
                e.type === eU.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(e1.d, {
                              label: eP.intl.string(eP.t.s2rpNf),
                              description: eP.intl.string(eP.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            w = (0, tF.Gc)(e),
            O = null != d && (0, eI.wh)(d),
            k = "none";
        w ? (k = "nsfw") : e.isSpoilerChannel() && (k = "spoiler");
        let D = [
                { value: "none", name: eP.intl.string(eP.t.OtnNJE), desc: eP.intl.string(eP.t["a5/7hX"]) },
                { value: "spoiler", name: eP.intl.string(eP.t.TvUHTb), desc: eP.intl.string(eP.t.ddWXHa) },
                { value: "nsfw", name: eP.intl.string(eP.t.Es25Yf), desc: eP.intl.string(eP.t["9eUgwR"]) },
            ],
            G =
                h && th.LE.has(e.type)
                    ? (0, l.jsxs)(tG.B, {
                          gap: 4,
                          padding: { top: 8, bottom: 8 },
                          children: [
                              (0, l.jsx)(tB.z, {
                                  label: eP.intl.string(eP.t.yLB4y2),
                                  onChange: (e) => this.handleChannelRestrictionChange(e),
                                  options: D,
                                  value: k,
                                  disabled: !s || null != e.linkedLobby || O,
                              }),
                              null != e.linkedLobby
                                  ? (0, l.jsx)(R.p, { messageType: R.Y.WARNING, children: eP.intl.string(eP.t.EvavKG) })
                                  : null,
                          ],
                      })
                    : th.LE.has(e.type)
                      ? (0, l.jsxs)(tG.B, {
                            gap: 4,
                            children: [
                                (0, l.jsx)(e1.d, {
                                    label: eP.intl.string(eP.t.Es25Yf),
                                    description: eP.intl.string(eP.t["9eUgwR"]),
                                    onChange: this.handleNSFWChange,
                                    checked: (0, tF.Gc)(e),
                                    disabled: !s || null != e.linkedLobby || O,
                                }),
                                null != e.linkedLobby
                                    ? (0, l.jsx)(R.p, {
                                          messageType: R.Y.WARNING,
                                          children: eP.intl.string(eP.t.l6uSVa),
                                      })
                                    : null,
                            ],
                        })
                      : null,
            B =
                th.xR.has(e.type) &&
                null != d &&
                d.features.has(eU.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, l.jsxs)(tG.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(e1.d, {
                                  label: eP.intl.string(eP.t.Au2b7m),
                                  description: eP.intl.format(eP.t.tI7KNX, {
                                      documentationLink: ek.A.getArticleURL(eU.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === eU.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(R.p, { messageType: R.Y.INFO, children: eP.intl.string(eP.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            U = th.wE.has(e.type)
                ? (0, l.jsx)(tV.A, {
                      page: eU.liQ.CHANNEL_SETTINGS,
                      children: (0, l.jsx)(ne, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, t4.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? eP.intl.string(eP.t.fyXclY)
                              : eP.intl.string(eP.t.W3Noi9),
                      }),
                  })
                : null,
            P = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(e1.d, {
                      label: eP.intl.string(eP.t.id3ozj),
                      description: eP.intl.format(eP.t.feJW1z, {
                          helpdeskArticle: ek.A.getArticleURL(eU.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(nm.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eU.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !d?.features.has(eU.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            V = e.isMediaChannel()
                ? (0, l.jsx)(e1.d, {
                      label: eP.intl.string(eP.t.u8LZOt),
                      description: eP.intl.string(eP.t.J4wCc7),
                      checked: !e.hasFlag(nm.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === eU.rbe.GUILD_CATEGORY
            ? ((i = eP.intl.string(eP.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eP.intl.string(eP.t.uyVrTN)), (n = "post-title"))
              : g
                ? ((i = eP.intl.string(eP.t.j3XWjD)), (n = "thread-name"))
                : ((i = eP.intl.string(eP.t.PVbHDl)), (n = "channel-name"));
        let H = u ? a : s;
        return (0, l.jsxs)(tG.B, {
            gap: 24,
            children: [
                (0, l.jsx)(tU.k, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: n,
                    autoFocus: !0,
                    disabled: !H,
                    maxLength: eU.Ign,
                    trailing: H
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(nj, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                b,
                A,
                _,
                C,
                T,
                I,
                j,
                N,
                S,
                L,
                G,
                B,
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
        let i = (0, nl.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(tD.A, {
            label: eP.intl.string(eP.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > eU.gp3 ? eP.intl.format(eP.t.SbQJk5, { bitrate: eU.gp3 / 1e3 }) : void 0,
            initialValue: Math.min(e.bitrate, i),
            onValueChange: this.handleChangeBitrate,
            onValueRender: this.renderBitrate,
            onMarkerRender: this.renderBitrate,
            markers: [eU.hcd, eU.gp3, i],
            minValue: eU.hcd,
            maxValue: i,
            keyboardStep: eU.l2F,
            disabled: !n,
        });
    }
    showVoiceSettings() {
        let { channel: e } = this.props;
        return (
            null != e &&
            null != e.guild_id &&
            th.k.has(e.type) &&
            (e.isGuildVocal() || tc.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: eU.K3c.AUTO, name: eP.intl.string(eP.t.jjKYpu) },
            { value: eU.K3c.FULL, name: eP.intl.string(eP.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(tB.z, {
            label: eP.intl.string(eP.t.jhJEJs),
            helperText: eP.intl.format(eP.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? eU.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eP.intl.string(eP.t.XX5ciX)
            : eP.intl.formatToPlainString(eP.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? eU.RCc : eU.cSc;
        return (0, l.jsx)(tD.A, {
            label: eP.intl.string(eP.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eP.intl.format(e.isGuildStageVoice() ? eP.t.OqZI8D : eP.t["8yb3JT"], {}),
            initialValue: Math.min(e.userLimit, i),
            onValueChange: this.handleUserLimitChange,
            onValueRender: this.onRenderUserLimit,
            onMarkerRender: (e) => (0 === Math.round(e) ? "∞" : e),
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
                label: eP.intl.string(eP.t.JEmsap),
                value: n_,
            });
        let a = e.rtcRegion ?? n_;
        return (0, l.jsx)(tO.l, {
            selectionMode: "single",
            label: eP.intl.string(eP.t["Ms8bX+"]),
            description: eP.intl.string(eP.t["dbTs+z"]),
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
                e.type === eU.rbe.GUILD_CATEGORY
                    ? (0, ed.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, ed.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(e5.A, {
                justify: e5.A.Justify.CENTER,
                className: nd.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        return null == e || null == t || null == n
            ? null
            : (0, l.jsxs)(tk.n, {
                  label: eP.intl.string(eP.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, l.jsx)(M.c, { gap: 24 }) : null,
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
        return (0, l.jsx)(tJ.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                this.handleChangeDefaultReactionEmoji(n), l && t();
            },
            pickerIntention: nx.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: nb,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tT.lA)(t.flags, nm.lx.REQUIRE_TAG, e);
        (0, d.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, t6.A)(e, !1)) : eU.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, nl.an)(e));
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        (0, d.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(n, n);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, t6.A)(t, !0);
            e !== t && (0, d.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = t?.selectionStart ?? 0,
            l = t?.selectionEnd ?? 0,
            i = this.props.channelName,
            s = i?.substring(0, n) + e + i?.substring(l);
        (0, d.fy)({ name: s }),
            setTimeout(() => {
                let l = n + e.length;
                t?.focus(), t?.setSelectionRange(l, l);
            }, 0);
    };
    handleChangeTopic = (e) => {
        (0, d.fy)({ topic: tQ.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, d.fy)({ template: tQ.Ay.translateInlineEmojiToSurrogates(e) });
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
        let n = (0, tT.lA)(t.flags, nm.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, d.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleNSFWChange = (e) => {
        (0, d.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tT.lA)(t.flags, nm.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, d.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, d.fy)({ type: e ? eU.rbe.GUILD_ANNOUNCEMENT : eU.rbe.GUILD_TEXT });
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
        (0, d.fy)({ rtcRegion: e === n_ ? null : e });
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
        let n = (0, tT.lA)(t.flags, nm.lx.SUMMARIES_DISABLED, !e);
        (0, d.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tT.lA)(t.flags, nm.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, d.fy)({ flags: n });
    };
}
function nS() {
    let { errors: e, channel: t, submitting: n, subsection: a } = (0, s.cf)([eL.A], () => eL.A.getProps()),
        r = (0, s.bG)([nn.A], () => nn.A.getRegions(t?.getGuildId() ?? null)),
        o = (0, s.bG)([tu.A], () => tu.A.theme),
        d = (0, s.bG)([X.A], () => X.A.getGuild(t?.getGuildId())),
        c = (0, tc.NI)(t),
        u = (0, tc.H_)(t),
        { canManageChannels: h, canSendMessages: g } = (0, s.cf)([Q.A], () => ({
            canManageChannels: Q.A.can(eU.xBc.MANAGE_CHANNELS, t),
            canSendMessages: Q.A.can(eU.xBc.SEND_MESSAGES, t),
        })),
        x = (0, m.Ay)(t),
        p = nt.default.getId(),
        f = (0, t$.p)(),
        b = t?.id,
        A = (0, tH.cI)(t, !1, !0),
        _ = no.useExperiment(
            { guildId: t?.guild_id, location: "ChannelSettingsOverview" },
            { autoTrackExposure: !0 },
        ).enabled,
        C = i.useCallback(
            (e) => {
                null != b && f.getState().setLayoutType(b, e);
            },
            [b, f],
        );
    return (0, l.jsx)(nN, {
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
        handleSetDefaultLayout: C,
        showChannelSummariesSettings: A,
        showSpoilerChannelSetting: _,
    });
}
var nE = n(181420);
function nv(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    g.Ay.trackWithMetadata(eU.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class ny extends i.PureComponent {
    componentDidMount() {
        nv(this.props.section, null, this.props.analyticsLocation);
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
        (l !== eU.XlH.CLOSED || l === t) &&
        (s || i !== eU.p_A.PERMISSIONS) &&
        (r || o || i !== eU.p_A.INTEGRATIONS)
            ? i !== n && nv(i, n)
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
            canManageWebhooks: f,
            canUnlinkChannel: b,
        } = this.props;
        return null == i
            ? null
            : (0, l.jsx)(u.Ay, {
                  theme: e,
                  sidebarTheme: t,
                  section: n ?? eU.p_A.OVERVIEW,
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
                          { GUILD_CATEGORY: f } = eU.rbe,
                          b = th.Le.has(t.type),
                          A =
                              t.type === f
                                  ? eP.intl.string(eP.t.ifbXnL)
                                  : b
                                    ? t.isForumPost()
                                        ? eP.intl.string(eP.t.nEOg1N)
                                        : eP.intl.string(eP.t.H7vTe2)
                                    : eP.intl.string(eP.t["8D8Rsb"]);
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
                                                          className: nE.p,
                                                      })
                                                    : null,
                                                (0, m.m1)(t, $.default, tx.A),
                                                null != n
                                                    ? (0, l.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: nE.L,
                                                          children: (0, m.m1)(n, $.default, tx.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : eP.intl.string(eP.t.XPDhcc),
                          },
                          {
                              section: eU.p_A.OVERVIEW,
                              label: eP.intl.string(eP.t["/dp6yY"]),
                              ariaLabel: eP.intl.string(eP.t["/dp6yY"]),
                              element: nS,
                              notice: { element: nC, stores: [eL.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: eU.p_A.PERMISSIONS,
                              label: eP.intl.string(eP.t.xrmhRX),
                              element: tr,
                              notice: { element: eZ, stores: [Z.A] },
                              predicate: () => i && !b,
                          },
                          {
                              section: eU.p_A.INSTANT_INVITES,
                              label: eP.intl.string(eP.t["9F90ic"]),
                              element: tS,
                              type: h.Py.CUSTOM,
                              predicate: () => t.type !== f && s && !b && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eU.p_A.INTEGRATIONS,
                              label: eP.intl.string(eP.t.s69NLF),
                              ariaLabel: eP.intl.string(eP.t.s69NLF),
                              element: t_,
                              notice: { stores: [tg.A], element: tC },
                              predicate: () => !((!u && !g) || t.isModeratorReportChannel()) && th.oH.has(t.type),
                          },
                          { section: h.Fq.DIVIDER },
                          {
                              section: eU.p_A.DELETE,
                              onClick() {
                                  (0, tf.O)(t, function () {
                                      tp._.subscribeOnce(eU.jej.LAYER_POP_COMPLETE, () => {
                                          (0, d.D3)(t.id);
                                      }),
                                          (0, c.jH)();
                                  });
                              },
                              label: A,
                              ariaLabel: A,
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
                      canManageWebhooks: f,
                      canUnlinkChannel: b,
                  }),
              });
    }
}
function nT() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([eL.A], () => eL.A.getProps()),
        n = (0, s.bG)([eL.A], () => eL.A.getFormState()),
        i = (0, s.bG)([eL.A], () => eL.A.getSection()),
        a = (0, s.bG)([tu.A], () => tu.A.theme),
        r = (0, td.NC)(),
        o = (0, tc.NI)(e),
        d = (0, tc.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, s.cf)([Q.A], () => ({
            canManageChannels: Q.A.can(eU.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && Q.A.can(eU.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && Q.A.can(eU.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, to.n)(e, Q.A),
        })),
        m = (0, s.bG)([tm.A], () => tm.A.getChannel(e?.parent_id));
    return (0, l.jsx)(ny, {
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
