"use strict";
l.r(t), l.d(t, { default: () => lT });
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
    g = l(58149),
    m = l(47167),
    p = l(713654),
    x = l(503698),
    _ = l.n(x),
    A = l(990078),
    f = l(179866),
    b = l(97808),
    C = l(778712),
    S = l(939249),
    v = l(285796),
    N = l(475825),
    j = l(192308),
    E = l(451394),
    I = l(821609),
    T = l(194261),
    y = l(512950),
    R = l(534514),
    M = l(404778),
    L = l(663417),
    w = l(565787),
    O = l(157559),
    D = l(308528),
    G = l(702805),
    P = l(155718),
    k = l(709066),
    B = l(87e3),
    U = l(60868),
    F = l(894328),
    H = l(997509),
    V = l(776781),
    z = l(233993),
    W = l(110618),
    Z = l(176360),
    J = l(696451),
    Y = l(317525),
    $ = l(71393),
    Q = l(576705),
    X = l(287809);
function q(e) {
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
    et = l(615300),
    el = l(862482),
    en = l(707554);
l(321073);
var ei = l(735438),
    es = l.n(ei),
    ea = l(136722),
    er = l(113325),
    eo = l(36525),
    ed = l(462887),
    ec = l(732771),
    eu = l(922016),
    eh = l(761508),
    eg = l(349288),
    em = l(442433),
    ep = l(365199),
    ex = l(545442),
    e_ = l(316710),
    eA = l(821589),
    ef = l(165808);
let eb = { XSMALL: ef.xsmall, SMALL: ef.small, MEDIUM: ef.medium, LARGE: ef.large };
class eC extends i.PureComponent {
    static Sizes = eb;
    static defaultProps = { size: eb.MEDIUM, disabled: !1 };
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
            className: _()((0, eA.t)(ef, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleHover,
            onFocus: this.handleHover,
            onMouseLeave: this.handleBlur,
            onBlur: this.handleBlur,
            ...s,
        });
    }
}
var eS = l(967144),
    ev = l(660811);
function eN(e) {
    let { role: t, guild: s } = e,
        [a, r] = i.useState(!1);
    return (0, e_.x)(s, t)
        ? (0, n.jsx)(S.D, {
              onClick: (e) => {
                  r(!0),
                      (0, em.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(l.bind(l, 316710));
                              return (l) => (0, n.jsx)(e, { ...l, role: t, guild: s });
                          },
                          { onClose: () => r(!1) },
                      );
              },
              className: _()(ev.X2, { [ev.ho]: a }),
              children: (0, n.jsx)(ep.j, { size: "custom", color: "currentColor", width: 20, height: 20 }),
          })
        : null;
}
function ej(e) {
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
            onContextMenu: _,
            "aria-label": f,
        } = e,
        b = (0, eS.X_)(a.id, s, s?.colorStrings);
    return o
        ? (0, n.jsx)("div", { className: ev.rz })
        : (0, n.jsx)(eh.V.Item, {
              className: ev.JC,
              id: i,
              selectedItem: d,
              onItemSelect: c,
              itemType: u,
              "aria-label": null != g ? `${f}, ${g}` : f,
              onContextMenu: _,
              children: (0, n.jsxs)("div", {
                  className: ev.yl,
                  children: [
                      "dot" === x
                          ? (0, n.jsx)(ex.W, {
                                color: t ?? void 0,
                                colors: b,
                                className: ev.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, n.jsx)(ex.R, { color: t ?? null, colors: b, className: ev.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, ed.M)(p) ? l(454554) : l(470474);
                          return (0, n.jsx)(A.m, { text: g, children: (0, n.jsx)(eC, { className: ev.s2, src: e }) });
                      })(),
                      (0, n.jsx)("div", { className: ev.dD, children: r }),
                      m && null != s ? (0, n.jsx)(eN, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
var eE = l(736653),
    eI = l(775602),
    eT = l(861197),
    ey = l(438271),
    eR = l(260509),
    eM = l(889227),
    eL = l(863036),
    ew = l(403362),
    eO = l(695184),
    eD = l(975571),
    eG = l(562153),
    eP = l(558393),
    ek = l(427262),
    eB = l(652215),
    eU = l(985018),
    eF = l(508573),
    eH = l.n(eF),
    eV = l(686956),
    ez = l(17586),
    eW = l(329296);
let eZ = s.Ay.connectStores([Z.A, eL.A], () => {
    let e = eL.A.getChannel();
    return {
        submitting: Z.A.formState === eB.XlH.SUBMITTING,
        onReset() {
            (0, G.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = Z.A.editedPermissionIds.reduce((e, t) => {
                let l = Z.A.getPermissionOverwrite(t);
                return null != l && e.push(l), e;
            }, []);
            (0, G.R$)(e.id, t);
        },
    };
})(eo.A);
function eJ(e) {
    let { overwrite: t } = e,
        l = (0, s.bG)([Z.A], () => Z.A.channel),
        i = (0, s.bG)([$.A], () => (null != l ? $.A.getGuild(l.getGuildId()) : null)),
        a = (0, s.bG)([Y.A], () => (null != i && null != t && t.type === P.r2.ROLE ? Y.A.getRole(i.id, t.id) : void 0));
    if (null == l || null == i || null == t) return null;
    let { guild_id: r, id: o } = l,
        d = () => {
            if (null == $.A.getGuild(r)) return "";
            let e = t.type === P.r2.MEMBER ? X.default.getUser(t.id) : void 0,
                l = e?.username ?? "";
            return null != a ? a.name : l;
        },
        c = (e, n) => {
            if ("boolean" == typeof n) throw Error("Unexpected boolean action");
            let { allow: i, deny: s } = t;
            switch (((s = ea.TF(s, e)), (i = ea.TF(i, e)), n)) {
                case "ALLOW":
                    i = ea.WQ(i, e);
                    break;
                case "DENY":
                    s = ea.WQ(s, e);
            }
            if (Q.A.can(e, l, { [t.id]: { ...t, allow: i, deny: s } })) (0, G.LA)(l, t.id, i, s);
            else {
                var a;
                let e;
                if (t.type === P.r2.MEMBER) {
                    let l = X.default.getUser(t.id);
                    null != l && (e = ek.Ay.getName(l));
                } else if (t.type === P.r2.ROLE) {
                    let n = $.A.getGuild(l.getGuildId());
                    if (null != n) {
                        let l = Y.A.getRole(n.id, t.id);
                        null != l && (e = l.name);
                    }
                }
                (a = e),
                    O.A.show({
                        title: eU.intl.string(eU.t.vElC9b),
                        body: eU.intl.format(eU.t.yslqFM, { name: a }),
                        cancelText: eU.intl.string(eU.t.psXQHP),
                        onCancel() {
                            window.open(eD.A.getArticleURL(eB.MVz.PERMISSIONS_LOCKOUT));
                        },
                    });
            }
        },
        u = (e) => {
            let t = Q.A.can(eB.xBc.ADMINISTRATOR, i) || Q.A.can(eB.xBc.MANAGE_ROLES, l, void 0, void 0, !0);
            return l.isGuildStageVoice() && z.Zq.has(e)
                ? eU.intl.string(eU.t.bTS5lf)
                : !((!ea.aI(e, eB.xBc.MANAGE_ROLES) || t) && (null == e || Q.A.can(e, i) || t)) &&
                      eU.intl.string(eU.t.nOtPMM);
        },
        h = t.id === r,
        g = l.isForumLikeChannel() && ea.zy(t.deny, eB.xBc.SEND_MESSAGES),
        m = ea.zy(t.deny, eB.xBc.SEND_MESSAGES),
        p = ea.zy(t.deny, eB.xBc.READ_MESSAGE_HISTORY),
        x = eP.A.generateChannelPermissionSpec(r, l, h, {
            createPostsDisabled: g,
            sendMessagesDisabled: m,
            readMessageHistoryDisabled: p,
        });
    return (0, n.jsxs)(eT.Ay.Content, {
        className: ez.uA,
        children: [
            x.map((e, l) =>
                (0, n.jsx)(
                    ey.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: c, permissionRender: u, className: ez.p2 },
                    l,
                ),
            ),
            r === t.id
                ? null
                : (0, n.jsx)(I.$, {
                      variant: "critical-secondary",
                      text: eU.intl.format(eU.t.txPV7k, { name: d() }),
                      onClick: () => {
                          let e = d();
                          O.A.show({
                              title: eU.intl.string(eU.t.GuPYQB),
                              body: eU.intl.format(eU.t.xERCnZ, { name: e }),
                              cancelText: eU.intl.string(eU.t["ETE/oC"]),
                              onConfirm: () => D.A.clearPermissionOverwrite(o, t.id),
                          });
                      },
                  }),
        ],
    });
}
function eY(e) {
    let { guildId: t, channelId: l, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = eG.Ay.getNickname(t, l, i),
        o = ek.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, n.jsxs)("div", {
                className: ez.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, n.jsx)(b.eu, {
                              className: ez.PX,
                              size: C._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, n.jsx)(a.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, n.jsxs)("div", {
            className: _()(eW.uN, ez.mG),
            children: [
                (0, n.jsx)(b.eu, { size: C._3.SIZE_32, src: s, "aria-label": i.username, className: ez.RJ }),
                (0, n.jsxs)("div", {
                    className: ez.F0,
                    children: [(0, n.jsx)(a.E, { className: ez.F0, variant: "text-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function e$(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function eQ(e) {
    let { guild: t, channel: l, permissionOverwrites: r, onClose: o, onSelect: d } = e,
        c = (0, s.bG)([Y.A], () => Y.A.getSortedRoles(t.id)),
        u = (0, s.yK)([J.Ay], () => J.Ay.getMemberIds(t.id)),
        h = i.useMemo(
            () => [
                ...c.filter((e) => null == r[e.id]),
                ...es()(u)
                    .map(X.default.getUser)
                    .filter(ew.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [u, r, c],
        );
    return (0, n.jsx)(er.l, {
        className: ez.Nd,
        children: (0, n.jsxs)(ec.iS, {
            selectionMode: "single",
            onSelectionChange: (e) => {
                null != e && (e$(e) ? d(e.id, P.r2.ROLE) : e instanceof eM.A && d(e.id, P.r2.MEMBER), o());
            },
            options: h,
            formatOption: (e) => ({ id: e.id, value: e, label: e$(e) ? e.name : ek.Ay.getUserTag(e) }),
            children: [
                (0, n.jsx)("div", {
                    className: ez.ON,
                    children: (0, n.jsx)(ec.a3, {
                        label: eU.intl.string(eU.t.lT5Zth),
                        placeholder: eU.intl.string(eU.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: (e) => {
                            let l = e.target.value;
                            eO.A.requestMembers(t.id, l, 20);
                        },
                    }),
                }),
                (0, n.jsx)(ec.X2, {
                    renderListItem: (e) => {
                        let { value: i } = e;
                        if (e$(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, n.jsxs)("div", {
                                    className: _()(eW.uN, ez.xf),
                                    children: [
                                        (0, n.jsx)(a.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: ez.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, n.jsx)(a.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: eU.intl.string(eU.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof eM.A) return (0, n.jsx)(eY, { guildId: t.id, channelId: l.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function eX() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, s.cf)([Z.A], () => Z.A),
        c = r?.getGuildId(),
        { guild: u, sortedGuildRoles: h } = (0, s.cf)([$.A, Y.A], () => {
            let e = null != c ? $.A.getGuild(c) : void 0,
                t = null != e ? Y.A.getSortedRoles(e.id) : void 0;
            return { guild: e, sortedGuildRoles: t };
        }, [c]),
        g = (function (e, t) {
            let l = (0, s.yK)([J.Ay], () => J.Ay.getMemberIds(e), [e]),
                [n, a] = i.useMemo(
                    () =>
                        eH()(
                            null == t
                                ? []
                                : Object.values(t)
                                      .filter((e) => e.type === P.r2.MEMBER)
                                      .map((e) => e.id),
                            (e) => l.includes(e),
                        ),
                    [t, l],
                );
            return (
                i.useEffect(() => {
                    a.length > 0 && null != e && eV.A.requestMembersById(e, a, !1);
                }, [a, e]),
                (0, s.yK)([X.default], () => n.map(X.default.getUser).filter(ew.Vq), [n])
            );
        })(c, o),
        m = (0, eE.Ay)(),
        p = (0, s.bG)([eI.A], () => eI.A.roleStyle),
        x = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, em.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != u ? (0, eR.af)(u) : null,
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
                                      O.A.show({
                                          title: eU.intl.string(eU.t.GuPYQB),
                                          body: eU.intl.format(eU.t.xERCnZ, { name: s }),
                                          cancelText: eU.intl.string(eU.t["ETE/oC"]),
                                          onConfirm: () => D.A.clearPermissionOverwrite(r.id, e),
                                      });
                                  },
                        });
                });
            },
            [r, u],
        );
    if (null == u || null == h || null == r || null == o) return null;
    let _ = (e, t) => {
        D.A.updatePermissionOverwrite(r.id, { id: e, type: t, allow: K.x3, deny: K.x3 }).then(() => (0, G.G9)(e));
    };
    null != o && null == o[u.id] && (o[u.id] = K.xT(u.id));
    let A = h
            .filter((e) => o[e.id]?.type === P.r2.ROLE)
            .map((e) =>
                (0, n.jsx)(
                    ej,
                    {
                        theme: m,
                        roleStyle: p,
                        id: e.id,
                        role: e,
                        guild: u,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) => x(t, { id: e.id, name: e.name, role: e }),
                        children: e.name,
                    },
                    `${d}-${e.id}`,
                ),
            ),
        f = es()(g)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(u.id, 24);
                return (0, n.jsx)(
                    ej,
                    {
                        id: e.id,
                        guild: u,
                        theme: m,
                        roleStyle: p,
                        "aria-label": ek.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => x(t, { id: e.id, name: e.username }),
                        children: (0, n.jsxs)("div", {
                            className: ez.mG,
                            children: [
                                (0, n.jsx)(b.eu, {
                                    size: C._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: ez.bE,
                                }),
                                (0, n.jsx)("span", { className: ez.Xh, children: ek.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, n.jsx)(eT.Ay.Sidebar, {
        className: ez.uA,
        scrollable: !0,
        children: (0, n.jsxs)(eh.V, {
            onItemSelect: G.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, ed.M)(m) ? l(546716) : l(233497)),
                (0, n.jsx)(eu.Y, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: l } = e;
                        return (0, n.jsx)(eQ, {
                            guild: u,
                            channel: r,
                            permissionOverwrites: o,
                            position: null != t ? t : "bottom",
                            onSelect: _,
                            onClose: l,
                        });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (l) =>
                        (0, n.jsx)(eh.V.Header, {
                            ref: t,
                            ...l,
                            children: (0, n.jsxs)("div", {
                                className: ez.$M,
                                children: [
                                    (0, n.jsxs)("span", {
                                        children: [eU.intl.string(eU.t["LPJmL/"]), "/", eU.intl.string(eU.t["9Oq93m"])],
                                    }),
                                    (0, n.jsx)("img", { alt: "", className: ez.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                A,
                f,
                (0, n.jsxs)(i.Fragment, {
                    children: [
                        (0, n.jsx)(eh.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, n.jsx)(eg.Anchor, {
                            href: eD.A.getArticleURL(eB.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, n.jsx)(a.E, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: eU.intl.string(eU.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function eq() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: l } = (0, s.cf)([Z.A], () => Z.A);
    if (
        null == (0, s.bG)([$.A], () => (null != e ? $.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == l
    )
        return null;
    let i = t[l];
    return (0, n.jsxs)(eT.Ay, { className: ez.kL, children: [(0, n.jsx)(eX, {}), (0, n.jsx)(eJ, { overwrite: i })] });
}
var eK = l(147925),
    e0 = l(311809);
function e1() {
    let e = (0, s.bG)([Z.A], () => Z.A.advancedMode),
        [t] = i.useState(new et.A.Value(+!!e));
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(M.c, { className: e0.BQ }),
            (0, n.jsx)(en.F, {
                component: (0, n.jsx)(el.$n, {
                    look: el.$n.Looks.BLANK,
                    color: el.$n.Colors.TRANSPARENT,
                    onClick: function () {
                        e
                            ? et.A.timing(t, { toValue: 0, duration: 250 }).start(() => {
                                  (0, G.E)(!1);
                              })
                            : ((0, G.E)(!0), et.A.timing(t, { toValue: 1, duration: 250 }).start());
                    },
                    children: (0, n.jsxs)(a.E, {
                        variant: "text-lg/semibold",
                        className: e0.Vt,
                        children: [
                            eU.intl.string(eU.t.dYRsrm),
                            (0, n.jsx)(eK.A, { expanded: e, className: e0.yM, width: 20, height: 20 }),
                        ],
                    }),
                }),
                children: e && (0, n.jsx)(et.A.div, { style: { opacity: t }, children: (0, n.jsx)(eq, {}) }),
            }),
        ],
    });
}
var e2 = l(243721),
    e3 = l(235986),
    e5 = l(60727);
function e6(e) {
    let { description: t, icon: l, id: i, label: s, onChange: r, value: o } = e;
    return (0, n.jsxs)("div", {
        className: e5.U,
        children: [
            (0, n.jsxs)(e3.A, {
                justify: e3.A.Justify.BETWEEN,
                align: e3.A.Align.CENTER,
                children: [
                    l,
                    (0, n.jsx)(e3.A.Child, {
                        grow: 1,
                        children: (0, n.jsx)(a.E, { variant: "text-md/semibold", children: s }),
                    }),
                    null != r && null != o && (0, n.jsx)(e2.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, n.jsx)(a.E, { variant: "text-xs/normal", color: "text-default", className: e5.L, children: t }),
        ],
    });
}
var e4 = l(661531),
    e7 = l(359778),
    e8 = l(400725);
let e9 = (e) => {
    let { className: t, icon: l, noticeText: i, buttonText: s, onClick: r, canSync: o } = e;
    return (0, n.jsx)(e7.Z, {
        className: _()(t, e8.N),
        children: (0, n.jsxs)(e3.A, {
            justify: e3.A.Justify.BETWEEN,
            align: e3.A.Align.CENTER,
            children: [
                (0, n.jsx)(l, { width: 20, height: 20, size: "custom", color: e4.A.unsafe_rawColors.YELLOW_300.css }),
                (0, n.jsx)("div", {
                    className: e8.P,
                    children: (0, n.jsx)(a.E, { variant: "text-md/normal", children: i }),
                }),
                o &&
                    (0, n.jsx)(el.$n, {
                        size: el.$n.Sizes.SMALL,
                        color: el.$n.Colors.PRIMARY,
                        onClick: r,
                        children: s,
                    }),
            ],
        }),
    });
};
var te = l(719366),
    tt = l(818348),
    tl = l(497903);
function tn(e) {
    let { channel: t, roles: l, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, n.jsx)(N.OZ, {
        className: tl.xz,
        sections: [l.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case te.oO.ROLES:
                    (c =
                        (d = l[h]).rowType === te.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, n.jsx)(B.A, { className: tl.a, color: d.colorString, size: 20 })
                            : (0, n.jsx)(f.i, { size: "custom", className: tl.a, color: d.colorString, height: 20 })),
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
                case te.oO.MEMBERS:
                    (d = i[h]),
                        (o = (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(b.eu, { src: d.avatarURL, size: C._3.SIZE_20, "aria-hidden": !0 }),
                                (0, n.jsx)(a.E, { variant: "text-sm/normal", children: d.name }),
                                d.bot && (0, n.jsx)(k.A, { verified: d.verifiedBot }),
                                (0, n.jsx)(a.E, {
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
            return (0, n.jsxs)(
                "div",
                {
                    className: tl.TL,
                    role: "listitem",
                    children: [
                        (0, n.jsx)("div", { className: tl.z7, children: o }),
                        (0, n.jsxs)("div", {
                            className: tl.z7,
                            children: [
                                (0, n.jsx)(a.E, {
                                    color: "text-muted",
                                    variant: "text-xs/normal",
                                    children: ee.vV(d.rowType),
                                }),
                                d.rowType !== te.T6.EMPTY_STATE &&
                                    (0, n.jsx)(A.m, {
                                        asContainer: !0,
                                        text: s ?? r(d.rowType, d.disabled),
                                        children: (0, n.jsx)(S.D, {
                                            onClick: () => {
                                                var e, l, n;
                                                return (
                                                    m &&
                                                    null != d &&
                                                    ((e = d.id),
                                                    (l = d.name),
                                                    (n = d.rowType),
                                                    void O.A.show({
                                                        title: eU.intl.string(eU.t.GuPYQB),
                                                        body: eU.intl.format(eU.t.xERCnZ, { name: l }),
                                                        cancelText: eU.intl.string(eU.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, l) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let n = (0, V.$b)(
                                                                        e,
                                                                        l === te.T6.ROLE ? P.r2.ROLE : P.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, V.pF)(n)
                                                                        ? D.A.clearPermissionOverwrite(t.id, n.id)
                                                                        : (0, G.R$)(t.id, [n]);
                                                                } else D.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, n),
                                                    }))
                                                );
                                            },
                                            className: tl.HI,
                                            "aria-disabled": !m,
                                            "aria-label": eU.intl.string(eU.t.N86XcP),
                                            children: (0, n.jsx)(v.a, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: _()(tl.Yz, { [tl._2]: g || s }),
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
                    return (0, n.jsx)(ta, { title: eU.intl.string(eU.t["LPJmL/"]) }, "roles-title");
                case te.oO.MEMBERS:
                    return (0, n.jsx)(ta, { title: eU.intl.string(eU.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function ti(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, s.bG)([Y.A], () => Y.A.getSortedRoles(t.id)),
        d = ee.C$(t, o, i, z.QY, r),
        c = (0, s.bG)([J.Ay], () => ee.Wi(J.Ay.getMemberIds(t.id), i, t, z.QY, r)),
        u = (0, V.qd)(i.id);
    return (0, n.jsxs)("div", {
        className: _()(tl.j1, tl.vu),
        children: [
            (0, n.jsx)(e6, {
                label: eU.intl.string(eU.t.StpcFU),
                description: eU.intl.string(eU.t.f7VbhF),
                icon: (0, n.jsx)(E.q, {
                    size: "custom",
                    color: "currentColor",
                    className: tl.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, n.jsxs)("div", {
                className: tl.X4,
                children: [
                    (0, n.jsxs)("div", {
                        className: tl.MJ,
                        children: [
                            (0, n.jsx)(a.E, { variant: "text-md/semibold", children: eU.intl.string(eU.t["7BWDRb"]) }),
                            (0, n.jsx)(A.m, {
                                text: eU.intl.string(eU.t.arRuES),
                                shouldShow: !u,
                                children: (0, n.jsx)(I.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eU.intl.string(eU.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, j.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([l.e("42282"), l.e("58578")]).then(
                                                l.bind(l, 841811),
                                            );
                                            return (t) => (0, n.jsx)(e, { ...t, channelId: i.id });
                                        });
                                    },
                                    disabled: !u,
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsx)(tn, {
                        channel: i,
                        roles: d,
                        members: c,
                        disabledReason: u ? null : eU.intl.string(eU.t.arRuES),
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
            s = X.default.getCurrentUser();
        a || null == (await (0, F.D)(t.id, i.id))
            ? (ee.uB(i, e, a), a || null == s || d || ee.tP(i, e))
            : (0, j.openModalLazy)(async () => {
                  let { Modal: e } = await l.e("4823").then(l.bind(l, 158954));
                  return (l) =>
                      (0, n.jsx)(e, {
                          ...l,
                          title: eU.intl.string(eU.t.ZzdgUm),
                          subtitle: eU.intl.format(eU.t.DwY2vN, {
                              onClick: () => {
                                  H.A.open(t.id, eB.BEX.ONBOARDING), l.onClose();
                              },
                          }),
                          actions: [{ text: eU.intl.string(eU.t.BddRzS), onClick: l.onClose }],
                      });
              });
    }
    let g = {
        title: eU.intl.string(eU.t.aUI70g),
        subtitle: eU.intl.string(eU.t.hfbjIH),
        formLabel: eU.intl.string(eU.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((g.title = eU.intl.string(eU.t.lEPAZ5)),
              (g.subtitle = eU.intl.string(eU.t.RQUk61)),
              (g.formLabel = eU.intl.string(eU.t["8VIxJu"])))
            : i.type === eB.rbe.GUILD_VOICE && (g.subtitle = eU.intl.string(eU.t.cLjvKg)),
        (0, n.jsxs)("div", {
            className: _()(tl.j1, { [tl.vu]: a }),
            children: [
                (0, n.jsx)(e6, {
                    description: g.subtitle,
                    icon: (0, n.jsx)(T.X, {
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
                (0, n.jsxs)("div", {
                    className: tl.X4,
                    children: [
                        u &&
                            (0, n.jsx)("div", {
                                className: tl.Ux,
                                children: (0, n.jsx)(y.p, {
                                    messageType: y.Y.WARNING,
                                    children: eU.intl.string(eU.t["5f3HIC"]),
                                }),
                            }),
                        !c &&
                            !u &&
                            !a &&
                            (0, n.jsx)("div", {
                                className: tl.Ux,
                                children: (0, n.jsx)(y.p, {
                                    messageType: y.Y.WARNING,
                                    children: eU.intl.string(eU.t.ZAk4Q9),
                                }),
                            }),
                        a &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: tl.MJ,
                                        children: [
                                            (0, n.jsx)(R.D, {
                                                variant: "heading-sm/semibold",
                                                className: tl.DH,
                                                children: g.formLabel,
                                            }),
                                            (0, n.jsx)(I.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eU.intl.string(eU.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, j.openModalLazy)(async () => {
                                                        let { default: e } = await Promise.all([
                                                            l.e("42282"),
                                                            l.e("75159"),
                                                        ]).then(l.bind(l, 685374));
                                                        return (t) =>
                                                            (0, n.jsx)(e, { ...t, channelId: i.id, inSettings: !0 });
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(tn, { channel: i, roles: r, members: o, getRemoveTooltipHint: ee.ro }),
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
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)(M.c, { className: tl.yF }),
            (0, n.jsx)(R.D, { variant: "heading-sm/semibold", className: _()(tl.DH, tl.Gf), children: t }),
        ],
    });
}
let tr = s.Ay.connectStores([Z.A, Q.A, J.Ay, $.A, Y.A], () => {
    let e,
        t = Z.A.channel,
        l = Z.A.category,
        n = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = $.A.getGuild(t.getGuildId());
        let l = J.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = Y.A.getSortedRoles(e.id);
            (s = Z.A.editedPermissionIds.reduce((e, t) => {
                let l = Z.A.getPermissionOverwrite(t);
                return null != l && (e[t] = l), e;
            }, {})),
                (n = ee.uX(e, r, t, t.accessPermissions, s)),
                (i = ee.Wi(l, t, e, t.accessPermissions, s)),
                (a = ee.Ae(t, s));
        }
    }
    return {
        canSyncChannel: null != l && Q.A.can(tt.xB.MANAGE_ROLES, l),
        category: l,
        channel: t,
        filteredMembers: i,
        filteredRoles: n,
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
    let m = { title: eU.intl.string(eU.t.BAZMBn), subtitle: eU.intl.string(eU.t.XLrZyp) };
    return (
        s.isCategory() && ((m.title = eU.intl.string(eU.t["/uELTj"])), (m.subtitle = eU.intl.string(eU.t["8iAg3Q"]))),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(R.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, n.jsx)(a.E, { variant: "text-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, n.jsx)(e9, {
                              canSync: !1,
                              icon: L.f,
                              noticeText: eU.intl.format(eU.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, n.jsx)(e9, {
                              buttonText: eU.intl.string(eU.t.NVwuHq),
                              canSync: !0,
                              icon: (0, w.k)(q),
                              noticeText: eU.intl.format(eU.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, j.openModalLazy)(async () => {
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
                                                          (await (0, U.n)(s, t[e].deny, t[e].allow)) &&
                                                              (0, d.RT)(s.id, {
                                                                  permissionOverwrites: Object.values(t),
                                                              });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice() ? (0, n.jsx)(ti, { guild: c, channel: s, permissionUpdates: g }) : null,
                (0, n.jsx)(ts, { channel: s, guild: c, isPrivateGuildChannel: u, roles: o, members: r }),
                (0, n.jsx)(e1, {}),
            ],
        })
    );
});
var to = l(526132),
    td = l(97469),
    tc = l(406704),
    tu = l(363195),
    th = l(95701),
    tg = l(291731),
    tm = l(734057),
    tp = l(994500),
    tx = l(625494),
    t_ = l(608226),
    tA = l(282956),
    tf = l(860603);
function tb(e) {
    let { refToScroller: t } = e,
        l = (0, s.bG)([eL.A], () => eL.A.getChannel(), []),
        i = (0, s.bG)([$.A], () => (null != l ? $.A.getGuild(l.getGuildId()) : null), [l]),
        {
            section: a,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, s.cf)([tg.A], () => tg.A.getProps(), []);
    return null == i || null == l
        ? null
        : (0, n.jsx)(tf.A, {
              guild: i,
              channel: l,
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
        l = (0, s.bG)([tg.A], () => tg.A.editedWebhook),
        i = (0, s.bG)([$.A], () => (null != e ? $.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, n.jsx)(eo.A, {
        submitting: t,
        onReset: () => {
            tA.A.init();
        },
        onSave: () => {
            null != i && null != l && tA.A.saveWebhook(i.id, l);
        },
    });
}
var tS = l(886235),
    tv = l(351906);
function tN() {
    let e = (0, s.bG)([tv.A], () => tv.A.hideInstantInvites),
        { channel: t, guild: l } = (0, s.cf)([eL.A, $.A], () => {
            let { channel: e } = eL.A.getProps(),
                t = null != e ? $.A.getGuild(e.getGuildId()) : null;
            return { channel: e, guild: t };
        }, []),
        i = (0, s.bG)([Q.A], () => null != t && Q.A.can(eB.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: a, loading: r } = (0, s.cf)([eL.A], () => eL.A.getInvites(), []);
    return (0, n.jsx)(tS.A, { invites: a, loading: r, guild: l, channel: t, canCreateInvites: i, hide: e });
}
l(938796), l(667532);
var tj = l(371444),
    tE = l(392421),
    tI = l(602137),
    tT = l(665260),
    ty = l(452027),
    tR = l(260598),
    tM = l(150934),
    tL = l(825484),
    tw = l(123292),
    tO = l(691885),
    tD = l(270003),
    tG = l(106236),
    tP = l(331322),
    tk = l(144228),
    tB = l(292666),
    tU = l(534963),
    tF = l(820284),
    tH = l(432371),
    tV = l(323073),
    tz = l(355622),
    tW = l(408018),
    tZ = l(201349),
    tJ = l(375499),
    tY = l(267889),
    t$ = l(770335),
    tQ = l(7584),
    tX = l(422844),
    tq = l(307301),
    tK = l(599119),
    t0 = l(219504),
    t1 = l(376310);
l(253913);
var t2 = l(231935);
function t3(e) {
    let { channel: t } = e,
        a = (0, s.bG)([Q.A], () => Q.A.can(eB.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        o = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            a &&
                !e &&
                (0, j.openModalLazy)(async () => {
                    let { default: e } = await l.e("47326").then(l.bind(l, 950989));
                    return (l) => (0, n.jsx)(e, { ...l, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, a]),
        u = i.useCallback(
            (e) => {
                a &&
                    (0, j.openModalLazy)(async () => {
                        let { default: i } = await l.e("47326").then(l.bind(l, 950989));
                        return (l) => (0, n.jsx)(i, { ...l, channelId: t.id, guildId: t.guild_id, tag: e });
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
    return (0, n.jsxs)("div", {
        className: t2._A,
        children: [
            o
                ? t.availableTags.map((e) =>
                      (0, n.jsx)(
                          t5,
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
                ? (0, n.jsx)(S.D, {
                      onClick: c,
                      className: _()(t2.JE, { [t2.r9]: !a || r }),
                      children: (0, n.jsx)(tq.j, {
                          size: "custom",
                          "aria-label": eU.intl.string(eU.t["/jubeD"]),
                          color: e4.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, n.jsx)(I.$, {
                      variant: "primary",
                      text: eU.intl.string(eU.t["/jubeD"]),
                      disabled: !a,
                      onClick: c,
                  }),
        ],
    });
}
function t5(e) {
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
        } = (0, tK.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: d,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: a,
            onDragReset: o,
        });
    return (0, n.jsx)("div", {
        className: _()(t2.kL, { [t2.A]: null != u && d < u, [t2.Ze]: null != u && d > u }),
        ref: (e) => {
            c(h(e));
        },
        onMouseEnter: () => g(i),
        onMouseLeave: () => g(!1),
        children: (0, n.jsx)(t1.A, {
            tag: t,
            disabled: !i,
            ariaLabel: eU.intl.formatToPlainString(eU.t.jhSvB9, { name: t.name }),
            onClick: i ? () => s(t) : void 0,
        }),
    });
}
var t6 = l(235640),
    t4 = l(268761),
    t7 = l(474078),
    t8 = l(783878),
    t9 = l(980296);
let le = (e) => {
    let { autoArchiveDuration: t, onChange: l, isDisabled: i, helperText: s } = e,
        a = (0, t4.Gk)();
    return (0, n.jsx)("div", {
        className: t9.gy,
        children: (0, n.jsx)(t8.Z, {
            selectionMode: "single",
            label: eU.intl.string(eU.t.FGjMZS),
            helperText: s,
            disabled: i,
            options: a,
            value: t,
            onSelectionChange: l,
        }),
    });
};
var lt = l(495544),
    ll = l(717518),
    ln = l(147036),
    li = l(927813),
    ls = l(989349),
    la = l.n(ls);
function lr(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : eU.intl.string(eU.t.Yl1D84),
        n = la().duration(e, "seconds");
    return n.days() > 0
        ? eU.intl.formatToPlainString(t ? eU.t.GBLpQ8 : eU.t["k2UNz+"], { days: n.days() })
        : n.hours() > 0
          ? eU.intl.formatToPlainString(t ? eU.t.rhY1Rs : eU.t.xCjYxK, { hours: n.hours() })
          : n.minutes() > 0
            ? eU.intl.formatToPlainString(t ? eU.t["XIGt+W"] : eU.t.iXLF9W, { minutes: n.minutes() })
            : e > 0
              ? eU.intl.formatToPlainString(t ? eU.t.pyvjRp : eU.t.geSp4K, { seconds: n.seconds() })
              : t
                ? eU.intl.string(eU.t.Yl1D84)
                : l;
}
let lo = (0, l(600975).C)({
    kind: "guild",
    id: "2026-03_spoiler_channel",
    label: "Spoiler Channel",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Enable spoiler channel setting", config: { enabled: !0 } }],
});
var ld = l(818050);
function lc(e) {
    let { label: t, helperText: l, hideLabel: s, channel: a, onChange: r } = e,
        [o, d] = i.useState(null),
        c = a.rateLimitPerUser,
        u = i.useMemo(() => {
            let e = [...(o ?? eB.s_7)];
            return e.includes(c) || e.unshift(c), e.map((e) => ({ id: e.toString(), label: lr(e, !1), value: e }));
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
                l = parseInt(e, 10);
            if (Number.isNaN(l)) return void d(null);
            l <= eB.WA1 && t.push(l);
            let n = l * li.A.Seconds.MINUTE;
            n <= eB.WA1 && t.push(n);
            let i = l * li.A.Seconds.HOUR;
            i <= eB.WA1 && t.push(i), d(t);
        }, []),
        m = i.useCallback(() => {
            d(null);
        }, []);
    return (0, n.jsx)("div", {
        className: ld.QB,
        children: (0, n.jsx)(t8.Z, {
            selectionMode: "single",
            label: t,
            hideLabel: s,
            helperText: l,
            value: c,
            onSelectionChange: h,
            onQueryChange: (e) => g(e.target.value),
            options: u,
            onBlur: m,
            placeholder: eU.intl.string(eU.t.dBqQu4),
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
    lp = l(307731),
    lx = l(37411),
    l_ = l(263107);
let lA = {
        popoutLocation: {
            page: eB.liQ.CHANNEL_SETTINGS,
            section: eB.JJy.CHANNEL_DEFAULT_REACTION,
            object: eB.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    lf = {
        popoutLocation: {
            page: eB.liQ.CHANNEL_SETTINGS,
            section: eB.JJy.CHANNEL_NAME,
            object: eB.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    lb = "AUTOMATIC_RTC_REGION",
    lC = s.Ay.connectStores([eL.A], () => {
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
                    rtcRegion: p,
                    videoQualityMode: x,
                    defaultReactionEmoji: _,
                    availableTags: A,
                    defaultSortOrder: f,
                    defaultForumLayout: b,
                    defaultTagSetting: C,
                } = e;
                e.isThread() && 0 === (t = (0, t7.A)(t, !0)).length
                    ? o.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eU.intl.string(eU.t.uXA573) },
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
                          rtcRegion: p,
                          videoQualityMode: x,
                          defaultReactionEmoji: _,
                          availableTags: A,
                          defaultSortOrder: f,
                          defaultForumLayout: b,
                          defaultTagSetting: C,
                      });
            },
        };
    })(eo.A);
function lS(e) {
    let { onEmojiPicked: t, channel: l, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, n.jsx)(tY.A, {
                    channel: l,
                    guildId: s,
                    pickerIntention: lp.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: l, willClose: n } = e;
                        null != l && l.type === t$.i.UNICODE && t(l.surrogates), n && i();
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: lf,
                });
            },
            [l, s, t],
        );
    return (0, n.jsx)(eu.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: eu.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(tJ.A, { ...e, ref: a, active: l, className: l_.Z8, tabIndex: 0 });
        },
    });
}
class lv extends i.PureComponent {
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
        null == this.props.regions && null != this.props.guild && tU.A.fetchRegions(this.props.guild.id);
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
            ? eU.intl.string(eU.t["a+1pdO"])
            : e?.isThread()
              ? eU.intl.string(eU.t.OMmNCv)
              : eU.intl.string(eU.t["HEA/DU"]);
    }
    getCooldownSliderLabel(e) {
        return lr(e, !0);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return lr(e * li.A.Seconds.MINUTE, !0);
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
            g = th.Le.has(e.type),
            m = e.isForumLikeChannel(),
            p = m && e.availableTags?.every((e) => e.moderated),
            x = X.default.getCurrentUser()?.isStaff() === !0,
            A = th.IY.has(e.type)
                ? (0, n.jsx)(ty.D, {
                      label: m ? eU.intl.string(eU.t.yR6HwZ) : eU.intl.string(eU.t.X8jMDh),
                      children: (0, n.jsx)(tZ.Ay, {
                          className: _()(l_.zm, { [l_.r9]: !s }),
                          innerClassName: _()(l_.At, { [l_.r9]: !s }),
                          characterCountClassName: l_.IQ,
                          maxCharacterCount: m ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eU.intl.string(eU.t["71fbmh"]),
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
            f =
                m && x
                    ? (0, n.jsx)(tR.f, {
                          label: eU.intl.string(eU.t.qk2jdY),
                          placeholder: eU.intl.string(eU.t.DDjD1H),
                          value: tQ.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
                          onChange: this.handleChangeTemplate,
                          error: this.getError("template"),
                          maxLength: 256,
                          disabled: !s,
                          autosize: !0,
                          showCharacterCount: !0,
                      })
                    : null,
            b = e.isForumLikeChannel()
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(M.c, {}),
                          (0, n.jsx)(ty.D, {
                              label: eU.intl.string(eU.t["P/y+sj"]),
                              description: eU.intl.string(eU.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, n.jsx)(t3, { channel: e }),
                          }),
                          (0, n.jsx)(tM.S, {
                              disabled: !s || p,
                              checked: e.hasFlag(lm.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eU.intl.string(eU.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            C = e.isForumLikeChannel()
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(M.c, {}),
                          (0, n.jsx)(ty.D, {
                              label: eU.intl.string(eU.t["8ao1+E"]),
                              description: eU.intl.string(eU.t.SdbF0q),
                              children: (0, n.jsxs)("div", {
                                  className: l_.OZ,
                                  children: [
                                      (0, n.jsx)("div", {
                                          className: _()(l_.t0, l_._h),
                                          children: (0, n.jsxs)(tL.e, {
                                              align: "center",
                                              children: [
                                                  (0, n.jsx)(eu.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: eu.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, n.jsx)(I.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eU.intl.string(eU.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, n.jsx)(tw.Q, {
                                                            text: eU.intl.string(eU.t.N86XcP),
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
            S = e.isForumChannel()
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(M.c, {}),
                          (0, n.jsxs)("div", {
                              className: l_.OZ,
                              children: [
                                  (0, n.jsx)("div", {
                                      className: _()(l_.t0, l_.WC),
                                      children: (0, n.jsx)(tO.l, {
                                          selectionMode: "single",
                                          label: eU.intl.string(eU.t["kQvoC/"]),
                                          description: eU.intl.string(eU.t.mOSViT),
                                          options: [
                                              { id: "list", label: eU.intl.string(eU.t["4HXEZG"]), value: tj.C.LIST },
                                              { id: "grid", label: eU.intl.string(eU.t["8RswJG"]), value: tj.C.GRID },
                                          ],
                                          value: e.defaultForumLayout ?? tj.C.LIST,
                                          onSelectionChange: this.handleChangeDefaultForumLayout,
                                      }),
                                  }),
                                  e.defaultForumLayout === tj.C.GRID
                                      ? (0, n.jsx)(lh, { className: l_.Kf })
                                      : (0, n.jsx)(lg, { className: l_.Kf }),
                              ],
                          }),
                          (0, n.jsx)(M.c, {}),
                      ],
                  })
                : null,
            v = e.isForumLikeChannel()
                ? (0, n.jsx)(tO.l, {
                      selectionMode: "single",
                      label: eU.intl.string(eU.t.gePre2),
                      description: eU.intl.string(eU.t["165cVX"]),
                      options: [
                          { id: "activity", label: eU.intl.string(eU.t.ElZtzj), value: tI.T.LATEST_ACTIVITY },
                          { id: "creation", label: eU.intl.string(eU.t.w28f3F), value: tI.T.CREATION_DATE },
                      ],
                      value: e.getDefaultSortOrder(),
                      onSelectionChange: this.handleChangeDefaultSortOrder,
                  })
                : null,
            N = e.isForumLikeChannel()
                ? (0, n.jsx)(tO.l, {
                      selectionMode: "single",
                      label: eU.intl.string(eU.t.Paxaug),
                      description: eU.intl.string(eU.t.DqOl8J),
                      options: [
                          { id: "some", label: eU.intl.string(eU.t.rQ0ctQ), value: tE.n.MATCH_SOME },
                          { id: "all", label: eU.intl.string(eU.t.FCXUu0), value: tE.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            j = g ? r : s,
            E = (0, n.jsx)(lc, {
                label: eU.intl.string(eU.t.tTHx98),
                helperText: this.getSlowmodeHelpText(),
                channel: e,
                onChange: this.handleChangeSlowmode,
            }),
            T = th.nb.has(e.type)
                ? m
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(M.c, {}),
                              (0, n.jsxs)(tD.n, {
                                  label: eU.intl.string(eU.t.O1c02q),
                                  children: [
                                      E,
                                      (0, n.jsx)(tG.A, {
                                          label: eU.intl.string(eU.t["fkY5+l"]),
                                          helperText: eU.intl.string(eU.t.kdZU6H),
                                          initialValue: e.defaultThreadRateLimitPerUser ?? 0,
                                          markers: eB.s_7,
                                          stickToMarkers: !0,
                                          onValueChange: this.handleChangeThreadMessageSlowmode,
                                          onMarkerRender: this.getCooldownSliderLabel,
                                          getAriaValueText: this.getCooldownSliderLabel,
                                          disabled: !j,
                                          equidistant: !0,
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(M.c, {}),
                          ],
                      })
                    : E
                : null,
            R =
                g && null != e.threadMetadata
                    ? (0, n.jsx)(tF.A, {
                          page: eB.liQ.CHANNEL_SETTINGS,
                          children: (0, n.jsx)(le, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? lx.cM,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eU.intl.string(eU.t["3aJN9M"]) : eU.intl.string(eU.t.YUXr4Z),
                          }),
                      })
                    : null,
            L =
                e.type === eB.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, n.jsx)("div", {
                          children: (0, n.jsx)(e2.d, {
                              label: eU.intl.string(eU.t.s2rpNf),
                              description: eU.intl.string(eU.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            w = (0, tV.Gc)(e),
            O = null != d && (0, eR.wh)(d),
            D = "none";
        w ? (D = "nsfw") : e.isSpoilerChannel() && (D = "spoiler");
        let G = [
                { value: "none", name: eU.intl.string(eU.t.OtnNJE), desc: eU.intl.string(eU.t["a5/7hX"]) },
                { value: "spoiler", name: eU.intl.string(eU.t.TvUHTb), desc: eU.intl.string(eU.t.ddWXHa) },
                { value: "nsfw", name: eU.intl.string(eU.t.Es25Yf), desc: eU.intl.string(eU.t["9eUgwR"]) },
            ],
            P =
                h && th.LE.has(e.type)
                    ? (0, n.jsxs)(tP.B, {
                          gap: 4,
                          padding: { top: 8, bottom: 8 },
                          children: [
                              (0, n.jsx)(tk.z, {
                                  label: eU.intl.string(eU.t.yLB4y2),
                                  onChange: (e) => this.handleChannelRestrictionChange(e),
                                  options: G,
                                  value: D,
                                  disabled: !s || null != e.linkedLobby || O,
                              }),
                              null != e.linkedLobby
                                  ? (0, n.jsx)(y.p, { messageType: y.Y.WARNING, children: eU.intl.string(eU.t.EvavKG) })
                                  : null,
                          ],
                      })
                    : th.LE.has(e.type)
                      ? (0, n.jsxs)(tP.B, {
                            gap: 4,
                            children: [
                                (0, n.jsx)(e2.d, {
                                    label: eU.intl.string(eU.t.Es25Yf),
                                    description: eU.intl.string(eU.t["9eUgwR"]),
                                    onChange: this.handleNSFWChange,
                                    checked: (0, tV.Gc)(e),
                                    disabled: !s || null != e.linkedLobby || O,
                                }),
                                null != e.linkedLobby
                                    ? (0, n.jsx)(y.p, {
                                          messageType: y.Y.WARNING,
                                          children: eU.intl.string(eU.t.l6uSVa),
                                      })
                                    : null,
                            ],
                        })
                      : null,
            k =
                th.xR.has(e.type) &&
                null != d &&
                d.features.has(eB.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, n.jsxs)(tP.B, {
                          gap: 4,
                          children: [
                              (0, n.jsx)(e2.d, {
                                  label: eU.intl.string(eU.t.Au2b7m),
                                  description: eU.intl.format(eU.t.tI7KNX, {
                                      documentationLink: eD.A.getArticleURL(eB.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === eB.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, n.jsx)(y.p, { messageType: y.Y.INFO, children: eU.intl.string(eU.t["2Ab4Id"]) }),
                          ],
                      })
                    : null,
            B = th.wE.has(e.type)
                ? (0, n.jsx)(tF.A, {
                      page: eB.liQ.CHANNEL_SETTINGS,
                      children: (0, n.jsx)(le, {
                          isDisabled: !s,
                          autoArchiveDuration: (0, t4.Gl)(e, null),
                          onChange: this.handleChangeDefaultAutoArchiveDuration,
                          helperText: e.isForumLikeChannel()
                              ? eU.intl.string(eU.t.fyXclY)
                              : eU.intl.string(eU.t.W3Noi9),
                      }),
                  })
                : null,
            U = this.props.showChannelSummariesSettings
                ? (0, n.jsx)(e2.d, {
                      label: eU.intl.string(eU.t.id3ozj),
                      description: eU.intl.format(eU.t.feJW1z, {
                          helpdeskArticle: eD.A.getArticleURL(eB.MVz.CONVERSATION_SUMMARIES),
                      }),
                      badge: "beta",
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(lm.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eB.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !d?.features.has(eB.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            F = e.isMediaChannel()
                ? (0, n.jsx)(e2.d, {
                      label: eU.intl.string(eU.t.u8LZOt),
                      description: eU.intl.string(eU.t.J4wCc7),
                      checked: !e.hasFlag(lm.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === eB.rbe.GUILD_CATEGORY
            ? ((i = eU.intl.string(eU.t.OCAkGP)), (l = "category-name"))
            : e.isForumPost()
              ? ((i = eU.intl.string(eU.t.uyVrTN)), (l = "post-title"))
              : g
                ? ((i = eU.intl.string(eU.t.j3XWjD)), (l = "thread-name"))
                : ((i = eU.intl.string(eU.t.PVbHDl)), (l = "channel-name"));
        let H = u ? a : s;
        return (0, n.jsxs)(tP.B, {
            gap: 24,
            children: [
                (0, n.jsx)(tB.k, {
                    label: i,
                    fullWidth: !0,
                    inputRef: this.nameInputRef,
                    value: t,
                    onChange: this.handleChangeName,
                    onBlur: this.handleBlurName,
                    error: this.getError("name"),
                    name: l,
                    autoFocus: !0,
                    disabled: !H,
                    maxLength: eB.Ign,
                    trailing: H
                        ? {
                              type: "emoji",
                              button: (0, n.jsx)(lS, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                A,
                f,
                b,
                C,
                T,
                R,
                S,
                v,
                N,
                L,
                P,
                k,
                U,
                B,
                F,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: l } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, ln.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, n.jsx)(tG.A, {
            label: eU.intl.string(eU.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > eB.gp3 ? eU.intl.format(eU.t.SbQJk5, { bitrate: eB.gp3 / 1e3 }) : void 0,
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
            th.k.has(e.type) &&
            (e.isGuildVocal() || tc.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = [
            { value: eB.K3c.AUTO, name: eU.intl.string(eU.t.jjKYpu) },
            { value: eB.K3c.FULL, name: eU.intl.string(eU.t["7jOoJE"]) },
        ];
        return (0, n.jsx)(tk.z, {
            label: eU.intl.string(eU.t.jhJEJs),
            helperText: eU.intl.format(eU.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: l,
            value: e.videoQualityMode ?? eB.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eU.intl.string(eU.t.XX5ciX)
            : eU.intl.formatToPlainString(eU.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let l = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? eB.RCc : eB.cSc;
        return (0, n.jsx)(tG.A, {
            label: eU.intl.string(eU.t["/AoSGN"]),
            errorMessage: "" !== l ? l : void 0,
            helperText: eU.intl.format(e.isGuildStageVoice() ? eU.t.OqZI8D : eU.t["8yb3JT"], {}),
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
        let { regions: t, canManageChannels: l, guild: i } = this.props;
        if (null == i || !this.showVoiceSettings() || e.isGuildStageVoice()) return null;
        let s = [];
        null != t &&
            (s = t
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({ id: e.id, label: e.name, value: e.id }))).unshift({
                id: "auto",
                label: eU.intl.string(eU.t.JEmsap),
                value: lb,
            });
        let a = e.rtcRegion ?? lb;
        return (0, n.jsx)(tO.l, {
            selectionMode: "single",
            label: eU.intl.string(eU.t["Ms8bX+"]),
            description: eU.intl.string(eU.t["dbTs+z"]),
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
                    ? (0, ed.M)(i)
                        ? l(477777)
                        : l(517649)
                    : (0, ed.M)(i)
                      ? l(241306)
                      : l(16474)),
            (0, n.jsx)(e3.A, {
                justify: e3.A.Justify.CENTER,
                className: ld.o9,
                children: (0, n.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: l } = this.props;
        return null == e || null == t || null == l
            ? null
            : (0, n.jsxs)(tD.n, {
                  label: eU.intl.string(eU.t["/dp6yY"]),
                  children: [
                      this.renderChannelInfo(e, t),
                      this.showVoiceSettings() ? (0, n.jsx)(M.c, { gap: 24 }) : null,
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
        return (0, n.jsx)(tY.A, {
            guildId: l?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: l, willClose: n } = e;
                this.handleChangeDefaultReactionEmoji(l), n && t();
            },
            pickerIntention: lp.EmojiIntention.COMMUNITY_CONTENT,
            channel: l,
            analyticsOverride: lA,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let l = (0, tT.lA)(t.flags, lm.lx.REQUIRE_TAG, e);
        (0, d.fy)({ flags: l });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        t.isThread() ? (e = (0, t7.A)(e, !1)) : eB.kvI.LIMITED_CHANNEL_NAME.has(t.type) && (e = (0, ln.an)(e));
        let l = this.nameInputRef.current?.selectionStart ?? 0;
        (0, d.fy)({ name: e }),
            setTimeout(() => {
                this.nameInputRef.current?.setSelectionRange(l, l);
            }, 0);
    };
    handleBlurName = () => {
        let { channel: e, channelName: t } = this.props;
        if (e?.isThread() && null != t) {
            let e = (0, t7.A)(t, !0);
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
        (0, d.fy)({ topic: tQ.Ay.translateInlineEmojiToSurrogates(e) });
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
        let l = (0, tT.lA)(t.flags, lm.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, d.fy)({ nsfw: "nsfw" === e, flags: l });
    };
    handleNSFWChange = (e) => {
        (0, d.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let l = (0, tT.lA)(t.flags, lm.lx.ACTIVE_CHANNELS_REMOVED, !e);
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
        (0, d.fy)({ rtcRegion: e === lb ? null : e });
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
        let l = (0, tT.lA)(t.flags, lm.lx.SUMMARIES_DISABLED, !e);
        (0, d.fy)({ flags: l });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let l = (0, tT.lA)(t.flags, lm.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, d.fy)({ flags: l });
    };
}
function lN() {
    let { errors: e, channel: t, submitting: l, subsection: a } = (0, s.cf)([eL.A], () => eL.A.getProps()),
        r = (0, s.bG)([ll.A], () => ll.A.getRegions(t?.getGuildId() ?? null)),
        o = (0, s.bG)([tu.A], () => tu.A.theme),
        d = (0, s.bG)([$.A], () => $.A.getGuild(t?.getGuildId())),
        c = (0, tc.NI)(t),
        u = (0, tc.H_)(t),
        { canManageChannels: h, canSendMessages: g } = (0, s.cf)([Q.A], () => ({
            canManageChannels: Q.A.can(eB.xBc.MANAGE_CHANNELS, t),
            canSendMessages: Q.A.can(eB.xBc.SEND_MESSAGES, t),
        })),
        p = (0, m.Ay)(t),
        x = lt.default.getId(),
        _ = (0, tX.p)(),
        A = t?.id,
        f = (0, tH.cI)(t, !1, !0),
        b = lo.useExperiment(
            { guildId: t?.guild_id, location: "ChannelSettingsOverview" },
            { autoTrackExposure: !0 },
        ).enabled,
        C = i.useCallback(
            (e) => {
                null != A && _.getState().setLayoutType(A, e);
            },
            [A, _],
        );
    return (0, n.jsx)(lv, {
        errors: e,
        channel: t,
        channelName: p,
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
        isOwner: t?.isOwner(x),
        handleSetDefaultLayout: C,
        showChannelSummariesSettings: f,
        showSpoilerChannelSetting: b,
    });
}
var lj = l(181420);
function lE(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        l = arguments.length > 2 ? arguments[2] : void 0;
    g.Ay.trackWithMetadata(eB.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: l,
    });
}
class lI extends i.PureComponent {
    componentDidMount() {
        lE(this.props.section, null, this.props.analyticsLocation);
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
            ? i !== l && lE(i, l)
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
            canDeleteChannels: x,
            canManageWebhooks: _,
            canUnlinkChannel: A,
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
                          x = (0, p.gU)(t),
                          { GUILD_CATEGORY: _ } = eB.rbe,
                          A = th.Le.has(t.type),
                          f =
                              t.type === _
                                  ? eU.intl.string(eU.t.ifbXnL)
                                  : A
                                    ? t.isForumPost()
                                        ? eU.intl.string(eU.t.nEOg1N)
                                        : eU.intl.string(eU.t.H7vTe2)
                                    : eU.intl.string(eU.t["8D8Rsb"]);
                      return [
                          {
                              section: h.Fq.HEADER,
                              label:
                                  null != t
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                null != x
                                                    ? (0, n.jsx)(x, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: lj.p,
                                                      })
                                                    : null,
                                                (0, m.m1)(t, X.default, tp.A),
                                                null != l
                                                    ? (0, n.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "text-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: lj.L,
                                                          children: (0, m.m1)(l, X.default, tp.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : eU.intl.string(eU.t.XPDhcc),
                          },
                          {
                              section: eB.p_A.OVERVIEW,
                              label: eU.intl.string(eU.t["/dp6yY"]),
                              ariaLabel: eU.intl.string(eU.t["/dp6yY"]),
                              element: lN,
                              notice: { element: lC, stores: [eL.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: eB.p_A.PERMISSIONS,
                              label: eU.intl.string(eU.t.xrmhRX),
                              element: tr,
                              notice: { element: eZ, stores: [Z.A] },
                              predicate: () => i && !A,
                          },
                          {
                              section: eB.p_A.INSTANT_INVITES,
                              label: eU.intl.string(eU.t["9F90ic"]),
                              element: tN,
                              type: h.Py.CUSTOM,
                              predicate: () => t.type !== _ && s && !A && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eB.p_A.INTEGRATIONS,
                              label: eU.intl.string(eU.t.s69NLF),
                              ariaLabel: eU.intl.string(eU.t.s69NLF),
                              element: tb,
                              notice: { stores: [tg.A], element: tC },
                              predicate: () => !((!u && !g) || t.isModeratorReportChannel()) && th.oH.has(t.type),
                          },
                          { section: h.Fq.DIVIDER },
                          {
                              section: eB.p_A.DELETE,
                              onClick() {
                                  (0, t_.O)(t, function () {
                                      tx._.subscribeOnce(eB.jej.LAYER_POP_COMPLETE, () => {
                                          (0, d.D3)(t.id);
                                      }),
                                          (0, c.jH)();
                                  });
                              },
                              label: f,
                              ariaLabel: f,
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
                      canDeleteChannels: x,
                      canManageWebhooks: _,
                      canUnlinkChannel: A,
                  }),
              });
    }
}
function lT() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([eL.A], () => eL.A.getProps()),
        l = (0, s.bG)([eL.A], () => eL.A.getFormState()),
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
            canManageChannels: Q.A.can(eB.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && Q.A.can(eB.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && Q.A.can(eB.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, to.n)(e, Q.A),
        })),
        m = (0, s.bG)([tm.A], () => tm.A.getChannel(e?.parent_id));
    return (0, n.jsx)(lI, {
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
