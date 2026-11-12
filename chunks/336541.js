(n.r(t), n.d(t, { default: () => n0 }));
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
    N = n(192308),
    E = n(451394),
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
    J = n(110618),
    X = n(176360),
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
    em = n(683438),
    ep = n(140735),
    ex = n(873200),
    eA = n(265872),
    ef = n(761508),
    eC = n(28863),
    ej = n(442433),
    eb = n(365199),
    ev = n(545442),
    ey = n(396704),
    eN = n(821589),
    eE = n(787565);
let eS = { XSMALL: eE.xsmall, SMALL: eE.small, MEDIUM: eE.medium, LARGE: eE.large };
class eT extends i.PureComponent {
    static Sizes = eS;
    static defaultProps = { size: eS.MEDIUM, disabled: !1 };
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
            className: x()((0, eN.t)(eE, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleMouseEnter,
            onFocus: this.handleFocus,
            onMouseLeave: this.handleMouseLeave,
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
    return (0, ey.x)(s, t)
        ? (0, l.jsx)(b.D, {
              onClick: function (e) {
                  (r(!0),
                      (0, ej.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 396704));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: s });
                          },
                          { onClose: () => r(!1) },
                      ));
              },
              className: x()(eM.X2, { [eM.ho]: a }),
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
            theme: p,
            roleStyle: x,
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
                          let e = (0, eg.M)(p) ? n(454554) : n(470474);
                          return (0, l.jsx)(j.m, { text: g, children: (0, l.jsx)(eT, { className: eM.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: eM.dD, children: r }),
                      m && null != s ? (0, l.jsx)(eL, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
var ew = n(736653),
    e_ = n(775602),
    eO = n(861197),
    eG = n(163826),
    eD = n(743696),
    ek = n(133551),
    eP = n(260509),
    eU = n(619019),
    eH = n(863036),
    eV = n(403362),
    eB = n(695184),
    eF = n(975571),
    eZ = n(562153),
    ez = n(558393),
    eW = n(427262),
    eJ = n(652215),
    eX = n(792996),
    eQ = n(967829),
    eY = n.n(eQ),
    eq = n(778858),
    e$ = n(60229),
    eK = n(594615);
let e0 = s.Ay.connectStores([X.A, eH.A], () => {
    let e = eH.A.getChannel();
    return {
        submitting: X.A.formState === eJ.XlH.SUBMITTING,
        onReset() {
            (0, G.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = X.A.editedPermissionIds.reduce((e, t) => {
                let n = X.A.getPermissionOverwrite(t);
                return (null != n && e.push(n), e);
            }, []);
            (0, G.R$)(e.id, t);
        },
    };
})(eu.A);
function e2(e) {
    let { overwrite: t } = e,
        [n, a] = i.useState(""),
        r = (0, s.bG)([X.A], () => X.A.channel),
        o = (0, s.bG)([q.A], () => (null != r ? q.A.getGuild(r.getGuildId()) : null)),
        d = (0, s.bG)([Y.A], () => (null != o && null != t && t.type === D.r2.ROLE ? Y.A.getRole(o.id, t.id) : void 0)),
        c = (0, P.q)(r),
        u = (0, k.HV)(r),
        h = null != t && u === t.id ? c : null;
    if (null == r || null == o || null == t) return null;
    let { guild_id: g, id: m } = r;
    function p() {
        if (null == q.A.getGuild(g)) return "";
        let e = t.type === D.r2.MEMBER ? K.default.getUser(t.id) : void 0,
            n = e?.username ?? "";
        return null != d ? d.name : n;
    }
    function x(e, n) {
        if (null == r) return;
        if ("boolean" == typeof n) throw Error("Unexpected boolean action");
        let { allow: l, deny: i } = t;
        switch (((i = ec.TF(i, e)), (l = ec.TF(l, e)), n)) {
            case "ALLOW":
                l = ec.WQ(l, e);
                break;
            case "DENY":
                i = ec.WQ(i, e);
        }
        if ($.A.can(e, r, { [t.id]: { ...t, allow: l, deny: i } })) (0, G.LA)(r, t.id, l, i);
        else {
            var s;
            let e;
            switch (t.type) {
                case D.r2.MEMBER: {
                    let n = K.default.getUser(t.id);
                    null != n && (e = eW.Ay.getName(n));
                    break;
                }
                case D.r2.ROLE: {
                    let n = q.A.getGuild(r.getGuildId());
                    if (null != n) {
                        let l = Y.A.getRole(n.id, t.id);
                        null != l && (e = l.name);
                    }
                    break;
                }
                default:
                    t.type;
            }
            ((s = e),
                _.A.show({
                    title: eX.intl.string(eX.t.vElC9b),
                    body: eX.intl.format(eX.t.yslqFM, { name: s }),
                    cancelText: eX.intl.string(eX.t.psXQHP),
                    onCancel() {
                        window.open(eF.A.getArticleURL(eJ.MVz.PERMISSIONS_TUTORIAL));
                    },
                    isDismissable: !1,
                }));
        }
    }
    function A(e) {
        if (null == r) return !1;
        let n = $.A.can(eJ.xBc.ADMINISTRATOR, o) || $.A.can(eJ.xBc.MANAGE_ROLES, r, void 0, void 0, !0);
        return r.isGuildStageVoice() && W.Zq.has(e)
            ? eX.intl.string(eX.t.bTS5lf)
            : (0, k.Gs)(u, t.id, e)
              ? eX.intl.string(eX.t.yXmgpP)
              : !((!ec.aI(e, eJ.xBc.MANAGE_ROLES) || n) && (null == e || $.A.can(e, o) || n)) &&
                eX.intl.string(eX.t.nOtPMM);
    }
    let f = t.id === g,
        C = u === t.id,
        j = r.isForumLikeChannel() && ec.zy(t.deny, eJ.xBc.SEND_MESSAGES),
        b = ec.zy(t.deny, eJ.xBc.SEND_MESSAGES),
        v = ec.zy(t.deny, eJ.xBc.READ_MESSAGE_HISTORY),
        y = ez.A.generateChannelPermissionSpec(g, r, f, {
            createPostsDisabled: j,
            sendMessagesDisabled: b,
            readMessageHistoryDisabled: v,
        }),
        N = (0, eG.M)(y, n),
        E = N.reduce((e, t) => e + t.permissions.length, 0);
    return (0, l.jsxs)(eO.Ay.Content, {
        className: e$.uA,
        children: [
            null != h
                ? (0, l.jsx)("div", {
                      className: e$.B2,
                      children: (0, l.jsx)(I.w, {
                          type: "info",
                          message: eX.intl.format(eX.t["Xq++FA"], { appName: h.name }),
                          role: "none",
                      }),
                  })
                : null,
            (0, l.jsx)("div", {
                className: e$.Qw,
                children: (0, l.jsx)(em.I, {
                    query: n,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: eX.intl.string(eX.t.OLJAk3),
                    "aria-label": eX.intl.string(eX.t.OLJAk3),
                }),
            }),
            (0, l.jsx)(ep.A, {
                "aria-live": "polite",
                role: "status",
                children: "" !== n.trimStart() ? eX.intl.formatToPlainString(eX.t["I+eHql"], { count: E }) : "",
            }),
            0 === N.length ? (0, l.jsx)(eD.A, {}) : null,
            N.map((e, n) =>
                (0, l.jsx)(
                    ek.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: x, permissionRender: A, className: e$.p2 },
                    n,
                ),
            ),
            f || C
                ? null
                : (0, l.jsx)("div", {
                      className: e$.O6,
                      children: (0, l.jsx)(S.$, {
                          variant: "critical-secondary",
                          text: eX.intl.format(eX.t.txPV7k, { name: p() }),
                          onClick: function () {
                              let e = p();
                              _.A.show({
                                  title: eX.intl.string(eX.t.GuPYQB),
                                  body: eX.intl.format(eX.t.xERCnZ, { name: e }),
                                  cancelText: eX.intl.string(eX.t["ETE/oC"]),
                                  onConfirm: () => O.A.clearPermissionOverwrite(m, t.id),
                              });
                          },
                      }),
                  }),
        ],
    });
}
function e5(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = eZ.Ay.getNickname(t, n, i),
        o = eW.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: e$.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(f.eu, {
                              className: e$.PX,
                              size: C._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(a.E, { variant: "body-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: x()(eK.uN, e$.mG),
            children: [
                (0, l.jsx)(f.eu, { size: C._3.SIZE_32, src: s, "aria-label": i.username, className: e$.RJ }),
                (0, l.jsxs)("div", {
                    className: e$.F0,
                    children: [(0, l.jsx)(a.E, { className: e$.F0, variant: "body-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function e1(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function e7(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: o, onSelect: d } = e,
        c = (0, s.bG)([Y.A], () => Y.A.getSortedRoles(t.id)),
        u = (0, s.yK)([Q.Ay], () => Q.Ay.getMemberIds(t.id)),
        h = i.useMemo(() => {
            let e = c.filter((e) => null == r[e.id]),
                t = ed()(u)
                    .map(K.default.getUser)
                    .filter(eV.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value();
            return [...e, ...t];
        }, [u, r, c]);
    return (0, l.jsx)(eh.lG, {
        className: e$.Nd,
        children: (0, l.jsxs)(ex.iS, {
            selectionMode: "single",
            onSelectionChange: function (e) {
                null != e && (e1(e) ? d(e.id, D.r2.ROLE) : e instanceof eU.A && d(e.id, D.r2.MEMBER), o());
            },
            options: h,
            formatOption: function (e) {
                return { id: e.id, value: e, label: e1(e) ? e.name : eW.Ay.getUserTag(e) };
            },
            children: [
                (0, l.jsx)("div", {
                    className: e$.ON,
                    children: (0, l.jsx)(ex.a3, {
                        label: eX.intl.string(eX.t.lT5Zth),
                        placeholder: eX.intl.string(eX.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: function (e) {
                            let n = e.target.value;
                            eB.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(ex.X2, {
                    renderListItem: function (e) {
                        let { value: i } = e;
                        if (e1(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: x()(eK.uN, e$.xf),
                                    children: [
                                        (0, l.jsx)(a.E, {
                                            variant: "body-md/medium",
                                            color: "text-strong",
                                            className: e$.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(a.E, {
                                            variant: "body-xs/normal",
                                            color: "text-subtle",
                                            children: eX.intl.string(eX.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof eU.A) return (0, l.jsx)(e5, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function e3() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, s.cf)([X.A], () => X.A),
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
                    a.length > 0 && null != e && eq.A.requestMembersById(e, a, !1);
                }, [a, e]),
                (0, s.yK)([K.default], () => l.map(K.default.getUser).filter(eV.Vq), [l])
            );
        })(c, o),
        m = (0, k.HV)(r),
        p = (0, ew.Ay)(),
        x = (0, s.bG)([e_.Ay], () => e_.Ay.roleStyle),
        A = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, ej.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != u ? (0, eP.af)(u) : null,
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
                                              title: eX.intl.string(eX.t.GuPYQB),
                                              body: eX.intl.format(eX.t.xERCnZ, { name: s }),
                                              cancelText: eX.intl.string(eX.t["ETE/oC"]),
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
                        "aria-label": eW.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => A(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: e$.mG,
                            children: [
                                (0, l.jsx)(f.eu, {
                                    size: C._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: e$.bE,
                                }),
                                (0, l.jsx)("span", { className: e$.Xh, children: eW.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(eO.Ay.Sidebar, {
        className: e$.uA,
        scrollable: !0,
        children: (0, l.jsxs)(ef.V, {
            onItemSelect: G.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, eg.M)(p) ? n(546716) : n(233497)),
                (0, l.jsx)(eA.Y, {
                    targetElementRef: t,
                    renderPopout: function (e) {
                        let { position: t, closePopout: n } = e;
                        return null == u || null == r || null == o
                            ? null
                            : (0, l.jsx)(e7, {
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
                        (0, l.jsx)(ef.V.Header, {
                            ref: t,
                            ...n,
                            children: (0, l.jsxs)("div", {
                                className: e$.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [eX.intl.string(eX.t["LPJmL/"]), "/", eX.intl.string(eX.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: e$.aN, src: e }),
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
                            href: eF.A.getArticleURL(eJ.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(a.E, {
                                variant: "body-sm/normal",
                                color: "text-link",
                                children: eX.intl.string(eX.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function e4() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, s.cf)([X.A], () => X.A);
    if (
        null == (0, s.bG)([q.A], () => (null != e ? q.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(eO.Ay, { className: e$.kL, children: [(0, l.jsx)(e3, {}), (0, l.jsx)(e2, { overwrite: i })] });
}
var e6 = n(310578);
function e9() {
    let e = (0, s.bG)([X.A], () => X.A.advancedMode);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(L.c, { className: e6.BQ }),
            (0, l.jsx)(el.EN, {
                isExpanded: e,
                onExpandedChange: G.E,
                children: (0, l.jsx)(es.F, {
                    component: (0, l.jsx)(ea.vN, {
                        children: (0, l.jsx)(ei.$, {
                            slot: "trigger",
                            className: e6.hZ,
                            children: (0, l.jsxs)(a.E, {
                                variant: "body-lg/semibold",
                                className: e6.Vt,
                                children: [
                                    eX.intl.string(eX.t.dYRsrm),
                                    (0, l.jsx)(er.ChevronSmallDownIcon, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        className: e6.yM,
                                    }),
                                ],
                            }),
                        }),
                    }),
                    children: (0, l.jsx)(el.kS, { className: e6.nd, children: (0, l.jsx)(e4, {}) }),
                }),
            }),
        ],
    });
}
var e8 = n(143129),
    te = n(235986),
    tt = n(653042);
function tn(e) {
    let { description: t, icon: n, id: i, label: s, onChange: r, value: o } = e;
    return (0, l.jsxs)("div", {
        className: tt.U,
        children: [
            (0, l.jsxs)(te.A, {
                justify: te.A.Justify.BETWEEN,
                align: te.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(te.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(a.E, { variant: "body-md/semibold", children: s }),
                    }),
                    null != r && null != o && (0, l.jsx)(e8.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, l.jsx)(a.E, { variant: "body-xs/normal", color: "text-default", className: tt.L, children: t }),
        ],
    });
}
var tl = n(646514),
    ti = n(993077),
    ts = n(625586);
let ta = function (e) {
    let { className: t, icon: n, noticeText: i, buttonText: s, onClick: r, canSync: o } = e;
    return (0, l.jsx)(ti.Z, {
        className: x()(t, ts.N),
        children: (0, l.jsxs)(te.A, {
            justify: te.A.Justify.BETWEEN,
            align: te.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: tl.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: ts.P,
                    children: (0, l.jsx)(a.E, { variant: "body-md/normal", children: i }),
                }),
                o && (0, l.jsx)(S.$, { size: "sm", variant: "secondary", onClick: r, text: s ?? void 0 }),
            ],
        }),
    });
};
var tr = n(290261),
    to = n(818348),
    td = n(614406);
function tc(e) {
    let { channel: t, roles: n, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(y.OZ, {
        className: td.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let o,
                d,
                c,
                { section: u, row: h } = e,
                g = !1;
            switch (u) {
                case tr.oO.ROLES:
                    ((c =
                        (d = n[h]).rowType === tr.T6.ROLE && d.tags?.guild_connections === null
                            ? (0, l.jsx)(V.A, { className: td.a, color: d.colorString, size: 20 })
                            : (0, l.jsx)(A.ShieldUserIcon, {
                                  size: "custom",
                                  className: td.a,
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
                case tr.oO.MEMBERS:
                    ((d = i[h]),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(f.eu, { src: d.avatarURL, size: C._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(a.E, { variant: "body-sm/normal", children: d.name }),
                                d.bot && (0, l.jsx)(H.A, { verified: d.verifiedBot }),
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    className: td.Gq,
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
                    className: td.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: td.z7, children: o }),
                        (0, l.jsxs)("div", {
                            className: td.z7,
                            children: [
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    variant: "body-xs/normal",
                                    children: en.vV(d.rowType),
                                }),
                                d.rowType !== tr.T6.EMPTY_STATE &&
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
                                                        title: eX.intl.string(eX.t.GuPYQB),
                                                        body: eX.intl.format(eX.t.xERCnZ, { name: n }),
                                                        cancelText: eX.intl.string(eX.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, z.$b)(
                                                                        e,
                                                                        n === tr.T6.ROLE ? D.r2.ROLE : D.r2.MEMBER,
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
                                            className: td.HI,
                                            "aria-disabled": !m,
                                            "aria-label": eX.intl.string(eX.t.N86XcP),
                                            children: (0, l.jsx)(v.CircleXIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: x()(td.Yz, { [td._2]: g || s }),
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
                case tr.oO.ROLES:
                    return (0, l.jsx)(tg, { title: eX.intl.string(eX.t["LPJmL/"]) }, "roles-title");
                case tr.oO.MEMBERS:
                    return (0, l.jsx)(tg, { title: eX.intl.string(eX.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function tu(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, s.bG)([Y.A], () => Y.A.getSortedRoles(t.id)),
        d = en.C$(t, o, i, W.QY, r),
        c = (0, s.bG)([Q.Ay], () => en.Wi(Q.Ay.getMemberIds(t.id), i, t, W.QY, { permissionUpdates: r })),
        u = (0, z.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: x()(td.j1, td.vu),
        children: [
            (0, l.jsx)(tn, {
                label: eX.intl.string(eX.t.StpcFU),
                description: eX.intl.string(eX.t.f7VbhF),
                icon: (0, l.jsx)(E.StageIcon, {
                    size: "custom",
                    color: "currentColor",
                    className: td.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: td.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: td.MJ,
                        children: [
                            (0, l.jsx)(a.E, { variant: "body-md/semibold", children: eX.intl.string(eX.t["7BWDRb"]) }),
                            (0, l.jsx)(j.m, {
                                text: eX.intl.string(eX.t.arRuES),
                                shouldShow: !u,
                                children: (0, l.jsx)(S.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eX.intl.string(eX.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, N.mM)(async () => {
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
                    (0, l.jsx)(tc, {
                        channel: i,
                        roles: d,
                        members: c,
                        disabledReason: u ? null : eX.intl.string(eX.t.arRuES),
                        getRemoveTooltipHint: J.Mt,
                    }),
                ],
            }),
        ],
    });
}
function th(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: a, roles: r, members: o } = e,
        d = (0, s.bG)([$.A], () => $.A.can(to.xB.ADMINISTRATOR, t)),
        c = et.MJ(to.xB.VIEW_CHANNEL, t),
        u = et.MJ(to.xB.ADMINISTRATOR, t),
        h = {
            title: eX.intl.string(eX.t.aUI70g),
            subtitle: eX.intl.string(eX.t.hfbjIH),
            formLabel: eX.intl.string(eX.t.P6eCbP),
        };
    return (
        i.isCategory()
            ? ((h.title = eX.intl.string(eX.t.lEPAZ5)),
              (h.subtitle = eX.intl.string(eX.t.RQUk61)),
              (h.formLabel = eX.intl.string(eX.t["8VIxJu"])))
            : i.type === eJ.rbe.GUILD_VOICE && (h.subtitle = eX.intl.string(eX.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: x()(td.j1, { [td.vu]: a }),
            children: [
                (0, l.jsx)(tn, {
                    description: h.subtitle,
                    icon: (0, l.jsx)(T.LockIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: td.Ie,
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
                            : (0, N.mM)(async () => {
                                  let { Modal: e } = await Promise.all([n.e(304823), n.e(223976)]).then(
                                      n.bind(n, 732955),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          title: eX.intl.string(eX.t.ZzdgUm),
                                          subtitle: eX.intl.format(eX.t.DwY2vN, {
                                              onClick: () => {
                                                  (Z.A.open(t.id, eJ.BEX.ONBOARDING), n.onClose());
                                              },
                                          }),
                                          actions: [{ text: eX.intl.string(eX.t.BddRzS), onClick: n.onClose }],
                                      });
                              });
                    },
                    value: a,
                }),
                (0, l.jsxs)("div", {
                    className: td.X4,
                    children: [
                        u &&
                            (0, l.jsx)("div", {
                                className: td.Ux,
                                children: (0, l.jsx)(I.w, {
                                    type: "warning",
                                    message: eX.intl.string(eX.t["5f3HIC"]),
                                    role: "status",
                                }),
                            }),
                        !c &&
                            !u &&
                            !a &&
                            (0, l.jsx)("div", {
                                className: td.Ux,
                                children: (0, l.jsx)(I.w, {
                                    type: "warning",
                                    message: eX.intl.string(eX.t.ZAk4Q9),
                                    role: "status",
                                }),
                            }),
                        a &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: td.MJ,
                                        children: [
                                            (0, l.jsx)(M.D, {
                                                variant: "heading-xs/semibold",
                                                className: td.DH,
                                                children: h.formLabel,
                                            }),
                                            (0, l.jsx)(S.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eX.intl.string(eX.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, N.mM)(async () => {
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
                                    (0, l.jsx)(tc, { channel: i, roles: r, members: o, getRemoveTooltipHint: en.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function tg(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(L.c, { className: td.yF }),
            (0, l.jsx)(M.D, { variant: "heading-xs/semibold", className: x()(td.DH, td.Gf), children: t }),
        ],
    });
}
let tm = s.Ay.connectStores([X.A, q.A, Q.Ay, $.A, Y.A, U.A], () => {
    let e,
        t = X.A.channel,
        n = X.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = q.A.getGuild(t.getGuildId());
        let n = Q.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = Y.A.getSortedRoles(e.id);
            ((s = X.A.editedPermissionIds.reduce((e, t) => {
                let n = X.A.getPermissionOverwrite(t);
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
        canSyncChannel: null != n && $.A.can(to.xB.MANAGE_ROLES, n),
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
        filteredRoles: d,
        guild: c,
        isPrivateGuildChannel: u,
        locked: h,
        permissionUpdates: g,
    } = e;
    if (((0, P.q)(s), null == s || null == c)) return null;
    let m = { title: eX.intl.string(eX.t.BAZMBn), subtitle: eX.intl.string(eX.t.XLrZyp) };
    return (
        s.isCategory() && ((m.title = eX.intl.string(eX.t["/uELTj"])), (m.subtitle = eX.intl.string(eX.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(M.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(a.E, { variant: "body-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, l.jsx)(ta, {
                              canSync: !1,
                              icon: R.RefreshIcon,
                              noticeText: eX.intl.format(eX.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(ta, {
                              buttonText: eX.intl.string(eX.t.NVwuHq),
                              canSync: !0,
                              icon: (0, w.k)(ee),
                              noticeText: eX.intl.format(eX.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, N.mM)(async () => {
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
                s.isGuildStageVoice() ? (0, l.jsx)(tu, { guild: c, channel: s, permissionUpdates: g }) : null,
                (0, l.jsx)(th, { channel: s, guild: c, isPrivateGuildChannel: u, roles: d, members: r }),
                (0, l.jsx)(e9, {}),
            ],
        })
    );
});
var tp = n(526132),
    tx = n(97469),
    tA = n(406704),
    tf = n(413599),
    tC = n(95701),
    tj = n(291731),
    tb = n(734057),
    tv = n(994500),
    ty = n(188567),
    tN = n(608226),
    tE = n(282956),
    tS = n(986057);
function tT(e) {
    let { refToScroller: t } = e,
        n = (0, s.bG)([eH.A], () => eH.A.getChannel(), []),
        i = (0, s.bG)([q.A], () => (null != n ? q.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: a,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, s.cf)([tj.A], () => tj.A.getProps(), []);
    return null == i || null == n
        ? null
        : (0, l.jsx)(tS.A, {
              guild: i,
              channel: n,
              section: a,
              sectionId: r,
              webhooks: o,
              editedWebhook: d,
              isFetchingWebhooks: c,
              hasChanges: tj.A.hasChanges,
              errors: u,
              refToScroller: t,
          });
}
function tI() {
    let { channel: e, submitting: t } = (0, s.cf)([eH.A], () => eH.A.getProps()),
        n = (0, s.bG)([tj.A], () => tj.A.editedWebhook),
        i = (0, s.bG)([q.A], () => (null != e ? q.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(eu.A, {
        submitting: t,
        onReset: function () {
            tE.A.init();
        },
        onSave: function () {
            null != i && null != n && tE.A.saveWebhook(i.id, n);
        },
    });
}
var tM = n(422542),
    tL = n(351906);
function tR() {
    let e = (0, s.bG)([tL.A], () => tL.A.hideInstantInvites),
        { channel: t, guild: n } = (0, s.cf)(
            [eH.A, q.A],
            () => {
                let { channel: e } = eH.A.getProps(),
                    t = null != e ? q.A.getGuild(e.getGuildId()) : null;
                return { channel: e, guild: t };
            },
            [],
        ),
        i = (0, s.bG)([$.A], () => null != t && $.A.can(eJ.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: a, loading: r } = (0, s.cf)([eH.A], () => eH.A.getInvites(), []);
    return (0, l.jsx)(tM.A, { invites: a, loading: r, guild: n, channel: t, canCreateInvites: i, hide: e });
}
(n(938796), n(667532));
var tw = n(371444),
    t_ = n(392421),
    tO = n(602137),
    tG = n(665260),
    tD = n(452027),
    tk = n(103557),
    tP = n(150934),
    tU = n(825484),
    tH = n(123292),
    tV = n(691885),
    tB = n(270003),
    tF = n(331322),
    tZ = n(95477),
    tz = n(893007),
    tW = n(771871),
    tJ = n(73153),
    tX = n(534963),
    tQ = n(820284),
    tY = n(432371),
    tq = n(547683),
    t$ = n(376092),
    tK = n(773669),
    t0 = n(458350),
    t2 = n(965805),
    t5 = n(355622),
    t1 = n(408018),
    t7 = n(989161),
    t3 = n(375499),
    t4 = n(863576),
    t6 = n(770335),
    t9 = n(7584),
    t8 = n(422844),
    ne = n(307301),
    nt = n(599119),
    nn = n(219504);
n(807632);
var nl = n(376310);
n(253913);
var ni = n(901748);
function ns(e) {
    let { channel: t } = e,
        a = (0, s.bG)([$.A], () => $.A.can(eJ.xBc.MANAGE_CHANNELS, t), [t]),
        r = t.availableTags.length >= 20,
        d = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            a &&
                !e &&
                (0, N.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(143172), n.e(347326)]).then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, a]),
        u = i.useCallback((e) => t.isGameInvitesChannel() && "No Mic" === e.name, [t]),
        h = i.useCallback(
            (e) => {
                !a ||
                    u(e) ||
                    (0, N.mM)(async () => {
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
        } = (0, nn.A)(t.availableTags, (e) => {
            (0, o.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: ni._A,
        children: [
            d
                ? t.availableTags.map((e) =>
                      (0, l.jsx)(
                          na,
                          {
                              tag: e,
                              availableTags: t.availableTags,
                              canManageChannels: a,
                              onTagClick: h,
                              onDragComplete: p,
                              onDragReset: m,
                              onDragStart: g,
                              tooltipText: u(e) ? eX.intl.string(eX.t.FiKFKs) : void 0,
                          },
                          e.id,
                      ),
                  )
                : null,
            d
                ? (0, l.jsx)(b.D, {
                      onClick: c,
                      className: x()(ni.JE, { [ni.r9]: !a || r }),
                      children: (0, l.jsx)(ne.PlusSmallIcon, {
                          size: "custom",
                          "aria-label": eX.intl.string(eX.t["/jubeD"]),
                          color: tl.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(S.$, {
                      variant: "primary",
                      text: eX.intl.string(eX.t["/jubeD"]),
                      disabled: !a,
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
        } = (0, nt.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: a,
            onDragReset: o,
        });
    return (0, l.jsx)("div", {
        className: x()(ni.kL, { [ni.A]: null != h && c < h, [ni.Ze]: null != h && c > h }),
        ref: (e) => {
            u(g(e));
        },
        onMouseEnter: () => m(i),
        onMouseLeave: () => m(!1),
        children: (0, l.jsx)(j.m, {
            text: d,
            asContainer: !0,
            shouldShow: null != d,
            children: (0, l.jsx)(nl.Ay, {
                tag: t,
                disabled: !i,
                ariaLabel: eX.intl.formatToPlainString(eX.t.jhSvB9, { name: t.name }),
                onClick: i ? () => s(t) : void 0,
            }),
        }),
    });
}
var nr = n(235640),
    no = n(840387),
    nd = n(268761),
    nc = n(474078),
    nu = n(890497),
    nh = n(580679);
let ng = function (e) {
    let { autoArchiveDuration: t, onChange: n, isDisabled: i, helperText: s } = e,
        a = (0, nd.Gk)();
    return (0, l.jsx)("div", {
        className: nh.gy,
        children: (0, l.jsx)(nu.Z, {
            selectionMode: "single",
            label: eX.intl.string(eX.t.FGjMZS),
            helperText: s,
            disabled: i,
            options: a,
            value: t,
            onSelectionChange: n,
        }),
    });
};
var nm = n(75721),
    np = n(991690),
    nx = n(627363),
    nA = n(429913),
    nf = n(878014),
    nC = n(233470),
    nj = n(260498),
    nb = n(246338),
    nv = n(486020);
function ny(e, t, n) {
    return {
        applicationId: e,
        name: t,
        iconApplication: n ?? { id: e, icon: null },
        iconURL: n?.icon == null ? null : (nv.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 24 }) ?? null),
    };
}
function nN(e) {
    return (0, nf.W)(e, np.U.VOICE_CHANNEL);
}
var nE = n(786739);
let nS = "none";
function nT(e) {
    let { channel: t, guildId: n, onChange: i } = e;
    return (0, nm._f)(t) ? (0, l.jsx)(nI, { channel: t, guildId: n, onChange: i }) : null;
}
function nI(e) {
    let { channel: t, guildId: n, onChange: a } = e,
        r = t.application_id ?? null,
        { options: o, listState: d } = (function (e, t) {
            let { options: n, listState: l } = (function (e) {
                    i.useEffect(() => {
                        (0, nC.listProjects)(e);
                    }, [e]);
                    let t = (0, s.yK)([nj.Ay], () => nj.Ay.getOwnedProjects()),
                        n = (0, s.yK)([nj.Ay], () => nj.Ay.getSharedProjects(e), [e]),
                        l = i.useMemo(
                            () =>
                                (function (e, t, n) {
                                    let l = new Map();
                                    for (let i of [...e, ...t]) (0, nb.Ot)(i, n) && l.set(i.application_id, i);
                                    return [...l.values()].sort((e, t) => e.name.localeCompare(t.name));
                                })(t, n, e),
                            [t, n, e],
                        ),
                        a = i.useMemo(() => l.map((e) => e.application_id), [l]),
                        r = (0, nA.A)(a, !1),
                        o = i.useRef(new Set()),
                        [d, c] = i.useState(new Set()),
                        [u, h] = i.useState(!1),
                        g = i.useMemo(() => l.filter((e, t) => !nN(r[t])).map((e) => e.application_id), [l, r]);
                    i.useEffect(() => {
                        let e = g.filter((e) => !o.current.has(e));
                        if (0 !== e.length) {
                            for (let t of e) o.current.add(t);
                            nx.Ay.fetchApplications(e, !0)
                                .catch(() => h(!0))
                                .finally(() => c((t) => new Set([...t, ...e])));
                        }
                    }, [g]);
                    let m = i.useMemo(() => l.filter((e, t) => nN(r[t])), [l, r]),
                        p = (0, s.bG)([nj.Ay], () => nj.Ay.getGuildProjectsFetchState(e), [e]),
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
                        C = (0, nA.A)(f);
                    return {
                        options: i.useMemo(() => m.map((e, t) => ny(e.application_id, e.name, C[t])), [m, C]),
                        listState: A,
                    };
                })(e),
                a = null == t || n.some((e) => e.applicationId === t) ? null : t,
                r = (0, nA.h)(a);
            return i.useMemo(
                () =>
                    null == a || null == r
                        ? { options: n, listState: l }
                        : { options: [ny(a, r.name, r), ...n], listState: "rows" },
                [n, l, a, r],
            );
        })(n, r),
        c = i.useMemo(
            () => [
                ...o.map((e) => {
                    let { applicationId: t, name: n, iconURL: l } = e;
                    return { id: t, label: n, value: t, leading: null != l ? { type: "image", src: l } : void 0 };
                }),
                { id: nS, label: eX.intl.string(nE.default.KEB4Rm), value: nS },
            ],
            [o],
        ),
        u = i.useCallback(
            (e) => {
                a(e === nS ? null : e);
            },
            [a],
        );
    return (0, l.jsx)(tV.l, {
        selectionMode: "single",
        label: eX.intl.string(nE.default.AdT7SZ),
        description: eX.intl.string(nE.default["wKSjL/"]),
        options: c,
        value: r ?? nS,
        onSelectionChange: u,
        loading: "loading" === d,
        helperText: "empty" === d ? eX.intl.string(nE.default["4S6iHa"]) : void 0,
        errorMessage: "failed" === d ? eX.intl.string(nE.default.X2xOBn) : void 0,
        fullWidth: !0,
    });
}
var nM = n(46653),
    nL = n(717518),
    nR = n(147036),
    nw = n(927813),
    n_ = n(879631),
    nO = n(221851);
function nG(e) {
    let { label: t, helperText: n, hideLabel: s, disabled: a, value: r, onChange: o } = e,
        [d, c] = i.useState(null),
        u = i.useMemo(() => {
            let e = [...(d ?? eJ.s_7)];
            return (
                e.includes(r) || e.unshift(r), e.map((e) => ({ id: e.toString(), label: (0, n_.$)(e, !1), value: e }))
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
            n <= eJ.WA1 && t.push(n);
            let l = n * nw.A.Seconds.MINUTE;
            l <= eJ.WA1 && t.push(l);
            let i = n * nw.A.Seconds.HOUR;
            (i <= eJ.WA1 && t.push(i), c(t));
        }, []),
        m = i.useCallback(() => {
            c(null);
        }, []);
    return (0, l.jsx)("div", {
        className: nO.QB,
        children: (0, l.jsx)(nu.Z, {
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
            placeholder: eX.intl.string(eX.t.dBqQu4),
        }),
    });
}
var nD = n(323073);
function nk(e) {
    let { channel: t, guild: n, canManageChannels: i, isTeen: s, onChange: a } = e,
        r = (0, nD.Gc)(t),
        o = null != n && (0, eP.wh)(n),
        d = "none";
    r ? (d = "nsfw") : t.isSpoilerChannel() && (d = "spoiler");
    let c = [
        { value: "none", name: eX.intl.string(eX.t.OtnNJE), desc: eX.intl.string(eX.t["a5/7hX"]) },
        { value: "spoiler", name: eX.intl.string(eX.t.TvUHTb), desc: eX.intl.string(eX.t.ddWXHa) },
    ];
    return (
        (!s || r) && c.push({ value: "nsfw", name: eX.intl.string(eX.t.Es25Yf), desc: eX.intl.string(eX.t["9eUgwR"]) }),
        (0, l.jsxs)(tF.B, {
            gap: 4,
            padding: { top: 8, bottom: 8 },
            children: [
                (0, l.jsx)(tW.z, {
                    label: eX.intl.string(eX.t.yLB4y2),
                    onChange: a,
                    options: c,
                    value: d,
                    disabled: !i || null != t.linkedLobby || o || (s && r),
                }),
                null != t.linkedLobby
                    ? (0, l.jsx)(I.w, { type: "warning", message: eX.intl.string(eX.t.EvavKG), role: "none" })
                    : null,
            ],
        })
    );
}
var nP = n(953727);
function nU(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nP.A)(s),
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
function nH(e) {
    let { color: t = "currentColor", foreground: n, backgroundColor: i = "none", ...s } = e;
    return (0, l.jsxs)("svg", {
        ...(0, nP.A)(s),
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
var nV = n(746080),
    nB = n(307731);
n(37411);
var nF = n(590930);
let nZ = {
        popoutLocation: {
            page: eJ.liQ.CHANNEL_SETTINGS,
            section: eJ.JJy.CHANNEL_DEFAULT_REACTION,
            object: eJ.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nz = {
        popoutLocation: {
            page: eJ.liQ.CHANNEL_SETTINGS,
            section: eJ.JJy.CHANNEL_NAME,
            object: eJ.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nW = "AUTOMATIC_RTC_REGION",
    nJ = s.Ay.connectStores([eH.A], () => {
        let { channel: e, submitting: t } = eH.A.getProps();
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
                e.isThread() && 0 === (t = (0, nc.A)(t, !0)).length
                    ? tJ.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eX.intl.string(eX.t.uXA573) },
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
function nX(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(t4.A, {
                    channel: n,
                    guildId: s,
                    pickerIntention: nB.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        (null != n && n.type === t6.i.UNICODE && t(n.surrogates), l && i());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: nz,
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
            return (0, l.jsx)(t3.A, { ...e, ref: a, active: n, className: nF.Z8, tabIndex: 0 });
        },
    });
}
class nQ extends i.PureComponent {
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
                (this.channelTopicTextAreaChannel = (0, tC.createChannelRecord)({
                    id: "1",
                    type: eJ.rbe.DM,
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
            richTopicValue: (0, t1.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && tX.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, t1.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText() {
        let { channel: e } = this.props;
        return e?.isForumLikeChannel()
            ? eX.intl.string(eX.t["a+1pdO"])
            : e?.isThread()
              ? eX.intl.string(eX.t.OMmNCv)
              : eX.intl.string(eX.t["HEA/DU"]);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, n_.$)(e * nw.A.Seconds.MINUTE, !0);
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
            m = tC.Le.has(e.type),
            p = e.isForumLikeChannel(),
            A = p && e.availableTags?.every((e) => e.moderated),
            f = K.default.getCurrentUser()?.isStaff() === !0,
            C = tC.IY.has(e.type)
                ? (0, l.jsx)(tD.D, {
                      label: p ? eX.intl.string(eX.t.yR6HwZ) : eX.intl.string(eX.t.X8jMDh),
                      children: (0, l.jsx)(t7.Ay, {
                          className: x()(nF.zm, { [nF.r9]: !s }),
                          innerClassName: x()(nF.At, { [nF.r9]: !s }),
                          characterCountClassName: nF.IQ,
                          maxCharacterCount: p ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eX.intl.string(eX.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? d?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: p ? t5.oU.FORUM_CHANNEL_GUIDELINES : t5.oU.CHANNEL_TOPIC,
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
                    ? (0, l.jsx)(tk.f, {
                          label: eX.intl.string(eX.t.qk2jdY),
                          placeholder: eX.intl.string(eX.t.DDjD1H),
                          value: t9.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
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
                          (0, l.jsx)(tD.D, {
                              label: eX.intl.string(eX.t["P/y+sj"]),
                              description: eX.intl.string(eX.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(ns, { channel: e }),
                          }),
                          (0, l.jsx)(tP.S, {
                              disabled: !s || A,
                              checked: e.hasFlag(nV.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eX.intl.string(eX.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            v = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(L.c, {}),
                          (0, l.jsx)(tD.D, {
                              label: eX.intl.string(eX.t["8ao1+E"]),
                              description: eX.intl.string(eX.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: nF.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: x()(nF.t0, nF._h),
                                          children: (0, l.jsxs)(tU.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(eA.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: eA.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(S.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eX.intl.string(eX.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(tH.Q, {
                                                            text: eX.intl.string(eX.t.N86XcP),
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
            y =
                e.isForumChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(L.c, {}),
                              (0, l.jsxs)("div", {
                                  className: nF.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: x()(nF.t0, nF.WC),
                                          children: (0, l.jsx)(tV.l, {
                                              selectionMode: "single",
                                              label: eX.intl.string(eX.t["kQvoC/"]),
                                              description: eX.intl.string(eX.t.mOSViT),
                                              options: [
                                                  {
                                                      id: "list",
                                                      label: eX.intl.string(eX.t["4HXEZG"]),
                                                      value: tw.C.LIST,
                                                  },
                                                  {
                                                      id: "grid",
                                                      label: eX.intl.string(eX.t["8RswJG"]),
                                                      value: tw.C.GRID,
                                                  },
                                              ],
                                              value: e.defaultForumLayout ?? tw.C.LIST,
                                              onSelectionChange: this.handleChangeDefaultForumLayout,
                                          }),
                                      }),
                                      e.defaultForumLayout === tw.C.GRID
                                          ? (0, l.jsx)(nU, { className: nF.Kf })
                                          : (0, l.jsx)(nH, { className: nF.Kf }),
                                  ],
                              }),
                              (0, l.jsx)(L.c, {}),
                          ],
                      })
                    : null,
            N =
                e.isForumLikeChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tV.l, {
                          selectionMode: "single",
                          label: eX.intl.string(eX.t.gePre2),
                          description: eX.intl.string(eX.t["165cVX"]),
                          options: [
                              { id: "activity", label: eX.intl.string(eX.t.ElZtzj), value: tO.T.LATEST_ACTIVITY },
                              { id: "creation", label: eX.intl.string(eX.t.w28f3F), value: tO.T.CREATION_DATE },
                          ],
                          value: e.getDefaultSortOrder(),
                          onSelectionChange: this.handleChangeDefaultSortOrder,
                      })
                    : null,
            E = e.isForumLikeChannel()
                ? (0, l.jsx)(tV.l, {
                      selectionMode: "single",
                      label: eX.intl.string(eX.t.Paxaug),
                      description: eX.intl.string(eX.t.DqOl8J),
                      options: [
                          { id: "some", label: eX.intl.string(eX.t.rQ0ctQ), value: t_.n.MATCH_SOME },
                          { id: "all", label: eX.intl.string(eX.t.FCXUu0), value: t_.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            T = m ? r : s,
            M = tC.nb.has(e.type)
                ? p
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(L.c, {}),
                              (0, l.jsxs)(tB.n, {
                                  label: eX.intl.string(eX.t.tTHx98),
                                  children: [
                                      (0, l.jsx)(nG, {
                                          label: eX.intl.string(eX.t.O1c02q),
                                          helperText: this.getSlowmodeHelpText(),
                                          value: e.rateLimitPerUser,
                                          onChange: this.handleChangeSlowmode,
                                          disabled: !T,
                                      }),
                                      (0, l.jsx)(nG, {
                                          label: eX.intl.string(eX.t["fkY5+l"]),
                                          helperText: eX.intl.string(eX.t.kdZU6H),
                                          value: e.defaultThreadRateLimitPerUser ?? 0,
                                          onChange: this.handleChangeThreadMessageSlowmode,
                                          disabled: !T,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsx)(nG, {
                          label: eX.intl.string(eX.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          value: e.rateLimitPerUser,
                          onChange: this.handleChangeSlowmode,
                          disabled: !T,
                      })
                : null,
            R =
                m && null != e.threadMetadata && !g?.isGameInvitesChannel()
                    ? (0, l.jsx)(tQ.A, {
                          page: eJ.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(ng, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? 4320,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eX.intl.string(eX.t["3aJN9M"]) : eX.intl.string(eX.t.YUXr4Z),
                          }),
                      })
                    : null,
            w =
                e.type === eJ.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(e8.d, {
                              label: eX.intl.string(eX.t.s2rpNf),
                              description: eX.intl.string(eX.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            _ = tC.LE.has(e.type)
                ? (0, l.jsx)(nk, {
                      channel: e,
                      guild: d,
                      canManageChannels: s,
                      isTeen: h,
                      onChange: this.handleChannelRestrictionChange,
                  })
                : m
                  ? (0, l.jsx)(e8.d, {
                        label: eX.intl.string(eX.t.TvUHTb),
                        description: eX.intl.string(eX.t.ddWXHa),
                        onChange: this.handleThreadSpoilerChange,
                        checked: e.isSpoilerChannel(),
                        disabled: !s,
                    })
                  : null,
            O =
                tC.xR.has(e.type) &&
                null != d &&
                d.features.has(eJ.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, l.jsxs)(tF.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(e8.d, {
                                  label: eX.intl.string(eX.t.Au2b7m),
                                  description: eX.intl.format(eX.t.tI7KNX, {
                                      documentationLink: eF.A.getArticleURL(eJ.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === eJ.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(I.w, { type: "info", message: eX.intl.string(eX.t["2Ab4Id"]), role: "none" }),
                          ],
                      })
                    : null,
            G =
                tC.wE.has(e.type) && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tQ.A, {
                          page: eJ.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(ng, {
                              isDisabled: !s,
                              autoArchiveDuration: (0, nd.Gl)(e, null),
                              onChange: this.handleChangeDefaultAutoArchiveDuration,
                              helperText: e.isForumLikeChannel()
                                  ? eX.intl.string(eX.t.fyXclY)
                                  : eX.intl.string(eX.t.W3Noi9),
                          }),
                      })
                    : null,
            D = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(e8.d, {
                      label: eX.intl.string(eX.t.id3ozj),
                      description: eX.intl.format(eX.t.feJW1z, {
                          helpdeskArticle: eF.A.getArticleURL(eJ.MVz.CONVERSATION_SUMMARIES),
                      }),
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(nV.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eJ.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !d?.features.has(eJ.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            k = e.isMediaChannel()
                ? (0, l.jsx)(e8.d, {
                      label: eX.intl.string(eX.t.u8LZOt),
                      description: eX.intl.string(eX.t.J4wCc7),
                      checked: !e.hasFlag(nV.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === eJ.rbe.GUILD_CATEGORY
            ? ((i = eX.intl.string(eX.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eX.intl.string(eX.t.uyVrTN)), (n = "post-title"))
              : m
                ? ((i = eX.intl.string(eX.t.j3XWjD)), (n = "thread-name"))
                : ((i = eX.intl.string(eX.t.PVbHDl)), (n = "channel-name"));
        let P = $.A.can(tq.G2, e),
            U = P
                ? void 0
                : (function (e) {
                      let t = tq.Qr.filter((t) => !$.A.can(t, e));
                      if (0 === t.length) return;
                      let n = new Intl.ListFormat(tK.default.locale);
                      return eX.intl.formatToPlainString(eX.t.na1rJc, {
                          permissions: n.format(t.map(t$.hx)),
                          count: t.length,
                      });
                  })(e),
            H =
                e.type === eJ.rbe.GUILD_APP && null != d
                    ? (0, l.jsx)(t0.A, {
                          guildId: d.id,
                          channelId: e.id,
                          selectedApplicationId: e.application_id,
                          onChange: this.handleChangeApplication,
                          disabled: !P,
                          helperText: U,
                      })
                    : null,
            V = u ? a : s;
        return (0, l.jsxs)(tF.B, {
            gap: 24,
            children: [
                (0, l.jsx)(tZ.k, {
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
                              button: (0, l.jsx)(nX, {
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
                    ? (0, l.jsx)(nT, { channel: e, guildId: d.id, onChange: this.handleChangeApplication })
                    : null,
                M,
                R,
                y,
                N,
                E,
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
        let i = (0, nR.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(tz.A, {
            label: eX.intl.string(eX.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > 64e3 ? eX.intl.format(eX.t.SbQJk5, { bitrate: 64 }) : void 0,
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
            tC.k.has(e.type) &&
            (e.isGuildVocal() || tA.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: eJ.K3c.AUTO, name: eX.intl.string(eX.t.jjKYpu) },
            { value: eJ.K3c.FULL, name: eX.intl.string(eX.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(tW.z, {
            label: eX.intl.string(eX.t.jhJEJs),
            helperText: eX.intl.format(eX.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? eJ.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eX.intl.string(eX.t.XX5ciX)
            : eX.intl.formatToPlainString(eX.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? 1e4 : 99;
        return (0, l.jsx)(tz.A, {
            label: eX.intl.string(eX.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eX.intl.format(e.isGuildStageVoice() ? eX.t.OqZI8D : eX.t["8yb3JT"], {}),
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
                label: eX.intl.string(eX.t.JEmsap),
                value: nW,
            });
        let a = e.rtcRegion ?? nW;
        return (0, l.jsx)(tV.l, {
            selectionMode: "single",
            label: eX.intl.string(eX.t["Ms8bX+"]),
            description: eX.intl.string(eX.t["dbTs+z"]),
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
                e.type === eJ.rbe.GUILD_CATEGORY
                    ? (0, eg.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, eg.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(te.A, {
                justify: te.A.Justify.CENTER,
                className: nO.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = "channel-settings-overview-heading";
        return (0, l.jsxs)(tB.n, {
            "aria-labelledby": i,
            children: [
                (0, l.jsx)(M.D, { id: i, variant: "body-lg/medium", children: eX.intl.string(eX.t["/dp6yY"]) }),
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
        return (0, l.jsx)(t4.A, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                (this.handleChangeDefaultReactionEmoji(n), l && t());
            },
            pickerIntention: nB.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: nZ,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tG.lA)(t.flags, nV.lx.REQUIRE_TAG, e);
        (0, o.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        e = (0, t2.A)(e, t.type);
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
            let e = (0, nc.A)(t, !0);
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
        (0, o.fy)({ topic: t9.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, o.fy)({ template: t9.Ay.translateInlineEmojiToSurrogates(e) });
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
        let n = (0, tG.lA)(t.flags, nV.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, o.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleThreadSpoilerChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tG.lA)(t.flags, nV.lx.IS_SPOILER_CHANNEL, e);
        (0, o.fy)({ flags: n });
    };
    handleNSFWChange = (e) => {
        (0, o.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tG.lA)(t.flags, nV.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, o.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, o.fy)({ type: e ? eJ.rbe.GUILD_ANNOUNCEMENT : eJ.rbe.GUILD_TEXT });
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
        (0, o.fy)({ rtcRegion: e === nW ? null : e });
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
        let n = (0, tG.lA)(t.flags, nV.lx.SUMMARIES_DISABLED, !e);
        (0, o.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tG.lA)(t.flags, nV.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, o.fy)({ flags: n });
    };
}
function nY() {
    let { errors: e, channel: t, submitting: n, subsection: a } = (0, s.cf)([eH.A], () => eH.A.getProps()),
        r = (0, s.bG)([tb.A], () => tb.A.getChannel(t?.parent_id ?? null)),
        o = (0, s.bG)([nL.A], () => nL.A.getRegions(t?.getGuildId() ?? null)),
        d = (0, s.bG)([tf.A], () => tf.A.theme),
        c = (0, s.bG)([q.A], () => q.A.getGuild(t?.getGuildId())),
        u = (0, tA.NI)(t),
        h = (0, tA.H_)(t),
        { canManageChannels: m, canSendMessages: p } = (0, s.cf)([$.A], () => ({
            canManageChannels: $.A.can(eJ.xBc.MANAGE_CHANNELS, t),
            canSendMessages: $.A.can(eJ.xBc.SEND_MESSAGES, t),
        })),
        x = (0, no.Z)(),
        A = (0, g.Ay)(t),
        f = nM.default.getId(),
        C = (0, t8.p)(),
        j = t?.id,
        b = (0, tY.cI)(t, !1, !0),
        v = i.useCallback(
            (e) => {
                null != j && C.getState().setLayoutType(j, e);
            },
            [j, C],
        );
    return (0, l.jsx)(nQ, {
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
var nq = n(722865);
function n$(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    h.Ay.trackWithMetadata(eJ.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class nK extends i.PureComponent {
    componentDidMount() {
        n$(this.props.section, null, this.props.analyticsLocation);
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
        (l !== eJ.XlH.CLOSED || l === t) &&
        (s || i !== eJ.p_A.PERMISSIONS) &&
        (r || o || i !== eJ.p_A.INTEGRATIONS)
            ? i !== n && n$(i, n)
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
                  section: n ?? eJ.p_A.OVERVIEW,
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
                          { GUILD_CATEGORY: A } = eJ.rbe,
                          f = tC.Le.has(t.type),
                          C =
                              t.type === A
                                  ? eX.intl.string(eX.t.ifbXnL)
                                  : f
                                    ? t.isForumPost()
                                        ? eX.intl.string(eX.t.nEOg1N)
                                        : eX.intl.string(eX.t.H7vTe2)
                                    : eX.intl.string(eX.t["8D8Rsb"]);
                      return [
                          {
                              section: u.Fq.HEADER,
                              label:
                                  null != t
                                      ? (0, l.jsxs)("div", {
                                            className: nq.wx,
                                            children: [
                                                null != x
                                                    ? (0, l.jsx)(x, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: nq.p,
                                                      })
                                                    : null,
                                                (0, l.jsx)(a.E, {
                                                    tag: "span",
                                                    variant: "body-sm/medium",
                                                    color: "none",
                                                    lineClamp: 1,
                                                    children: (0, g.m1)(t, K.default, tv.A),
                                                }),
                                                null != n
                                                    ? (0, l.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "body-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: nq.L1,
                                                          children: (0, g.m1)(n, K.default, tv.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : eX.intl.string(eX.t.XPDhcc),
                          },
                          {
                              section: eJ.p_A.OVERVIEW,
                              label: eX.intl.string(eX.t["/dp6yY"]),
                              ariaLabel: eX.intl.string(eX.t["/dp6yY"]),
                              element: nY,
                              notice: { element: nJ, stores: [eH.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: eJ.p_A.PERMISSIONS,
                              label: eX.intl.string(eX.t.xrmhRX),
                              element: tm,
                              notice: { element: e0, stores: [X.A] },
                              predicate: () => i && !f,
                          },
                          {
                              section: eJ.p_A.INSTANT_INVITES,
                              label: eX.intl.string(eX.t["9F90ic"]),
                              element: tR,
                              type: u.Py.CUSTOM,
                              predicate: () => t.type !== A && s && !f && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eJ.p_A.INTEGRATIONS,
                              label: eX.intl.string(eX.t.s69NLF),
                              ariaLabel: eX.intl.string(eX.t.s69NLF),
                              element: tT,
                              notice: { stores: [tj.A], element: tI },
                              predicate: () => !((!h && !p) || t.isModeratorReportChannel()) && tC.oH.has(t.type),
                          },
                          { section: u.Fq.DIVIDER },
                          {
                              section: eJ.p_A.DELETE,
                              onClick() {
                                  (0, tN.O)(t, function () {
                                      (ty._.subscribeOnce(eJ.jej.LAYER_POP_COMPLETE, () => {
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
function n0() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([eH.A], () => eH.A.getProps()),
        n = (0, s.bG)([eH.A], () => eH.A.getFormState()),
        i = (0, s.bG)([eH.A], () => eH.A.getSection()),
        a = (0, s.bG)([tf.A], () => tf.A.theme),
        r = (0, tx.NC)(),
        o = (0, tA.NI)(e),
        d = (0, tA.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, s.cf)([$.A], () => ({
            canManageChannels: $.A.can(eJ.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && $.A.can(eJ.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && $.A.can(eJ.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, tp.n)(e, $.A),
        })),
        m = (0, s.bG)([tb.A], () => tb.A.getChannel(e?.parent_id));
    return (0, l.jsx)(nK, {
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
