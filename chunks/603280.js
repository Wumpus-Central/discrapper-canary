(n.r(t), n.d(t, { default: () => n3 }));
var l = n(477900),
    i = n(582128),
    s = n(855986),
    a = n(834730),
    r = n(435183),
    o = n(398590),
    d = n(83257),
    c = n(361739),
    u = n(149468),
    h = n(47167),
    g = n(713654),
    m = n(503698),
    p = n.n(m),
    x = n(957485),
    A = n(97808),
    f = n(778712),
    C = n(866665),
    j = n(939249),
    b = n(285796),
    v = n(475825),
    y = n(192308),
    E = n(451394),
    N = n(821609),
    S = n(194261),
    T = n(683071),
    I = n(534514),
    M = n(404778),
    L = n(663417),
    R = n(565787),
    w = n(157559),
    _ = n(308528),
    O = n(702805),
    G = n(155718),
    D = n(443063),
    P = n(615606),
    k = n(587895),
    U = n(709066),
    V = n(63104),
    H = n(60868),
    B = n(894328),
    F = n(727419),
    Z = n(776781),
    z = n(233993),
    W = n(110618),
    J = n(176360),
    X = n(696451),
    Q = n(317525),
    Y = n(71393),
    q = n(576705),
    $ = n(287809);
function K(e) {
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
var ee = n(488926),
    et = n(495273),
    en = n(101396),
    el = n(51340),
    ei = n(707554),
    es = n(559106),
    ea = n(847374);
n(321073);
var er = n(435558),
    eo = n.n(er),
    ed = n(136722),
    ec = n(36525),
    eu = n(113325),
    eh = n(462887),
    eg = n(683438),
    em = n(140735),
    ep = n(873200),
    ex = n(265872),
    eA = n(761508),
    ef = n(28863),
    eC = n(442433),
    ej = n(365199),
    eb = n(545442),
    ev = n(396704),
    ey = n(821589),
    eE = n(787565);
let eN = { XSMALL: eE.xsmall, SMALL: eE.small, MEDIUM: eE.medium, LARGE: eE.large };
class eS extends i.PureComponent {
    static Sizes = eN;
    static defaultProps = { size: eN.MEDIUM, disabled: !1 };
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
            className: p()((0, ey.t)(eE, "iconButton", o), i, e),
            style: r,
            onMouseEnter: this.handleMouseEnter,
            onFocus: this.handleFocus,
            onMouseLeave: this.handleMouseLeave,
            onBlur: this.handleBlur,
            ...s,
        });
    }
}
var eT = n(967144),
    eI = n(258776);
function eM(e) {
    let { role: t, guild: s } = e,
        [a, r] = i.useState(!1);
    return (0, ev.x)(s, t)
        ? (0, l.jsx)(j.D, {
              onClick: function (e) {
                  (r(!0),
                      (0, eC.L3)(
                          e,
                          async () => {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 396704));
                              return (n) => (0, l.jsx)(e, { ...n, role: t, guild: s });
                          },
                          { onClose: () => r(!1) },
                      ));
              },
              className: p()(eI.X2, { [eI.ho]: a }),
              children: (0, l.jsx)(ej.MoreHorizontalIcon, {
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
        j = (0, eT.X_)(a.id, s, s?.colorStrings);
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
                                colors: j,
                                className: eI.m4,
                                background: !1,
                                tooltip: !1,
                            })
                          : (0, l.jsx)(eb.R, { color: t ?? null, colors: j, className: eI.Ni }),
                      (function () {
                          if (!h) return null;
                          let e = (0, eh.M)(p) ? n(454554) : n(470474);
                          return (0, l.jsx)(C.m, { text: g, children: (0, l.jsx)(eS, { className: eI.s2, src: e }) });
                      })(),
                      (0, l.jsx)("div", { className: eI.dD, children: r }),
                      m && null != s ? (0, l.jsx)(eM, { guild: a, role: s }) : null,
                  ],
              }),
          });
}
var eR = n(736653),
    ew = n(775602),
    e_ = n(861197),
    eO = n(163826),
    eG = n(743696),
    eD = n(133551),
    eP = n(260509),
    ek = n(619019),
    eU = n(863036),
    eV = n(403362),
    eH = n(695184),
    eB = n(975571),
    eF = n(562153),
    eZ = n(558393),
    ez = n(427262),
    eW = n(652215),
    eJ = n(792996),
    eX = n(967829),
    eQ = n.n(eX),
    eY = n(778858),
    eq = n(60229),
    e$ = n(594615);
let eK = s.Ay.connectStores([J.A, eU.A], () => {
    let e = eU.A.getChannel();
    return {
        submitting: J.A.formState === eW.XlH.SUBMITTING,
        onReset() {
            (0, O.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = J.A.editedPermissionIds.reduce((e, t) => {
                let n = J.A.getPermissionOverwrite(t);
                return (null != n && e.push(n), e);
            }, []);
            (0, O.R$)(e.id, t);
        },
    };
})(ec.A);
function e0(e) {
    let { overwrite: t } = e,
        [n, a] = i.useState(""),
        r = (0, s.bG)([J.A], () => J.A.channel),
        o = (0, s.bG)([Y.A], () => (null != r ? Y.A.getGuild(r.getGuildId()) : null)),
        d = (0, s.bG)([Q.A], () => (null != o && null != t && t.type === G.r2.ROLE ? Q.A.getRole(o.id, t.id) : void 0)),
        c = (0, P.q)(r),
        u = (0, D.HV)(r),
        h = null != t && u === t.id ? c : null;
    if (null == r || null == o || null == t) return null;
    let { guild_id: g, id: m } = r;
    function p() {
        if (null == Y.A.getGuild(g)) return "";
        let e = t.type === G.r2.MEMBER ? $.default.getUser(t.id) : void 0,
            n = e?.username ?? "";
        return null != d ? d.name : n;
    }
    function x(e, n) {
        if (null == r) return;
        if ("boolean" == typeof n) throw Error("Unexpected boolean action");
        let { allow: l, deny: i } = t;
        switch (((i = ed.TF(i, e)), (l = ed.TF(l, e)), n)) {
            case "ALLOW":
                l = ed.WQ(l, e);
                break;
            case "DENY":
                i = ed.WQ(i, e);
        }
        if (q.A.can(e, r, { [t.id]: { ...t, allow: l, deny: i } })) (0, O.LA)(r, t.id, l, i);
        else {
            var s;
            let e;
            switch (t.type) {
                case G.r2.MEMBER: {
                    let n = $.default.getUser(t.id);
                    null != n && (e = ez.Ay.getName(n));
                    break;
                }
                case G.r2.ROLE: {
                    let n = Y.A.getGuild(r.getGuildId());
                    if (null != n) {
                        let l = Q.A.getRole(n.id, t.id);
                        null != l && (e = l.name);
                    }
                    break;
                }
                default:
                    t.type;
            }
            ((s = e),
                w.A.show({
                    title: eJ.intl.string(eJ.t.vElC9b),
                    body: eJ.intl.format(eJ.t.yslqFM, { name: s }),
                    cancelText: eJ.intl.string(eJ.t.psXQHP),
                    onCancel() {
                        window.open(eB.A.getArticleURL(eW.MVz.PERMISSIONS_TUTORIAL));
                    },
                    isDismissable: !1,
                }));
        }
    }
    function A(e) {
        if (null == r) return !1;
        let n = q.A.can(eW.xBc.ADMINISTRATOR, o) || q.A.can(eW.xBc.MANAGE_ROLES, r, void 0, void 0, !0);
        return r.isGuildStageVoice() && z.Zq.has(e)
            ? eJ.intl.string(eJ.t.bTS5lf)
            : (0, D.Gs)(u, t.id, e)
              ? eJ.intl.string(eJ.t.yXmgpP)
              : !((!ed.aI(e, eW.xBc.MANAGE_ROLES) || n) && (null == e || q.A.can(e, o) || n)) &&
                eJ.intl.string(eJ.t.nOtPMM);
    }
    let f = t.id === g,
        C = u === t.id,
        j = r.isForumLikeChannel() && ed.zy(t.deny, eW.xBc.SEND_MESSAGES),
        b = ed.zy(t.deny, eW.xBc.SEND_MESSAGES),
        v = ed.zy(t.deny, eW.xBc.READ_MESSAGE_HISTORY),
        y = eZ.A.generateChannelPermissionSpec(g, r, f, {
            createPostsDisabled: j,
            sendMessagesDisabled: b,
            readMessageHistoryDisabled: v,
        }),
        E = (0, eO.M)(y, n),
        S = E.reduce((e, t) => e + t.permissions.length, 0);
    return (0, l.jsxs)(e_.Ay.Content, {
        className: eq.uA,
        children: [
            null != h
                ? (0, l.jsx)("div", {
                      className: eq.B2,
                      children: (0, l.jsx)(T.w, {
                          type: "info",
                          message: eJ.intl.format(eJ.t["Xq++FA"], { appName: h.name }),
                          role: "none",
                      }),
                  })
                : null,
            (0, l.jsx)("div", {
                className: eq.Qw,
                children: (0, l.jsx)(eg.I, {
                    query: n,
                    onChange: a,
                    onClear: () => a(""),
                    placeholder: eJ.intl.string(eJ.t.OLJAk3),
                    "aria-label": eJ.intl.string(eJ.t.OLJAk3),
                }),
            }),
            (0, l.jsx)(em.A, {
                "aria-live": "polite",
                role: "status",
                children: "" !== n.trimStart() ? eJ.intl.formatToPlainString(eJ.t["I+eHql"], { count: S }) : "",
            }),
            0 === E.length ? (0, l.jsx)(eG.A, {}) : null,
            E.map((e, n) =>
                (0, l.jsx)(
                    eD.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: x, permissionRender: A, className: eq.p2 },
                    n,
                ),
            ),
            f || C
                ? null
                : (0, l.jsx)("div", {
                      className: eq.O6,
                      children: (0, l.jsx)(N.$, {
                          variant: "critical-secondary",
                          text: eJ.intl.format(eJ.t.txPV7k, { name: p() }),
                          onClick: function () {
                              let e = p();
                              w.A.show({
                                  title: eJ.intl.string(eJ.t.GuPYQB),
                                  body: eJ.intl.format(eJ.t.xERCnZ, { name: e }),
                                  cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
                                  onConfirm: () => _.A.clearPermissionOverwrite(m, t.id),
                              });
                          },
                      }),
                  }),
        ],
    });
}
function e2(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = eF.Ay.getNickname(t, n, i),
        o = ez.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: eq.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(A.eu, {
                              className: eq.PX,
                              size: f._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(a.E, { variant: "body-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: p()(e$.uN, eq.mG),
            children: [
                (0, l.jsx)(A.eu, { size: f._3.SIZE_32, src: s, "aria-label": i.username, className: eq.RJ }),
                (0, l.jsxs)("div", {
                    className: eq.F0,
                    children: [(0, l.jsx)(a.E, { className: eq.F0, variant: "body-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function e5(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function e1(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: o, onSelect: d } = e,
        c = (0, s.bG)([Q.A], () => Q.A.getSortedRoles(t.id)),
        u = (0, s.yK)([X.Ay], () => X.Ay.getMemberIds(t.id)),
        h = i.useMemo(() => {
            let e = c.filter((e) => null == r[e.id]),
                t = eo()(u)
                    .map($.default.getUser)
                    .filter(eV.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value();
            return [...e, ...t];
        }, [u, r, c]);
    return (0, l.jsx)(eu.lG, {
        className: eq.Nd,
        children: (0, l.jsxs)(ep.iS, {
            selectionMode: "single",
            onSelectionChange: function (e) {
                null != e && (e5(e) ? d(e.id, G.r2.ROLE) : e instanceof ek.A && d(e.id, G.r2.MEMBER), o());
            },
            options: h,
            formatOption: function (e) {
                return { id: e.id, value: e, label: e5(e) ? e.name : ez.Ay.getUserTag(e) };
            },
            children: [
                (0, l.jsx)("div", {
                    className: eq.ON,
                    children: (0, l.jsx)(ep.a3, {
                        label: eJ.intl.string(eJ.t.lT5Zth),
                        placeholder: eJ.intl.string(eJ.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: function (e) {
                            let n = e.target.value;
                            eH.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(ep.X2, {
                    renderListItem: function (e) {
                        let { value: i } = e;
                        if (e5(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: p()(e$.uN, eq.xf),
                                    children: [
                                        (0, l.jsx)(a.E, {
                                            variant: "body-md/medium",
                                            color: "text-strong",
                                            className: eq.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(a.E, {
                                            variant: "body-xs/normal",
                                            color: "text-subtle",
                                            children: eJ.intl.string(eJ.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof ek.A) return (0, l.jsx)(e2, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function e7() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: o, selectedOverwriteId: d } = (0, s.cf)([J.A], () => J.A),
        c = r?.getGuildId(),
        { guild: u, sortedGuildRoles: h } = (0, s.cf)(
            [Y.A, Q.A],
            () => {
                let e = null != c ? Y.A.getGuild(c) : void 0,
                    t = null != e ? Q.A.getSortedRoles(e.id) : void 0;
                return { guild: e, sortedGuildRoles: t };
            },
            [c],
        ),
        g = (function (e, t) {
            let n = (0, s.yK)([X.Ay], () => X.Ay.getMemberIds(e), [e]),
                [l, a] = i.useMemo(
                    () =>
                        eQ()(
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
                    a.length > 0 && null != e && eY.A.requestMembersById(e, a, !1);
                }, [a, e]),
                (0, s.yK)([$.default], () => l.map($.default.getUser).filter(eV.Vq), [l])
            );
        })(c, o),
        m = (0, D.HV)(r),
        p = (0, eR.Ay)(),
        x = (0, s.bG)([ew.Ay], () => ew.Ay.roleStyle),
        C = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, eC.L3)(e, async () => {
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
                                          w.A.show({
                                              title: eJ.intl.string(eJ.t.GuPYQB),
                                              body: eJ.intl.format(eJ.t.xERCnZ, { name: s }),
                                              cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
                                              onConfirm: () => _.A.clearPermissionOverwrite(r.id, e),
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
            _.A.updatePermissionOverwrite(r.id, { id: e, type: t, allow: ee.x3, deny: ee.x3 }).then(() => (0, O.G9)(e));
    }
    null != o && null == o[u.id] && (o[u.id] = ee.xT(u.id));
    let b = h
            .filter((e) => o[e.id]?.type === G.r2.ROLE)
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
                              onContextMenu: (t) => C(t, { id: e.id, name: e.name, role: e }),
                              children: e.name,
                          },
                          `${d}-${e.id}`,
                      );
            }),
        v = eo()(g)
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
                        onContextMenu: (t) => C(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: eq.mG,
                            children: [
                                (0, l.jsx)(A.eu, {
                                    size: f._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: eq.bE,
                                }),
                                (0, l.jsx)("span", { className: eq.Xh, children: ez.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${d}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(e_.Ay.Sidebar, {
        className: eq.uA,
        scrollable: !0,
        children: (0, l.jsxs)(eA.V, {
            onItemSelect: O.G9,
            selectedItem: d,
            orientation: "vertical",
            children: [
                ((e = (0, eh.M)(p) ? n(546716) : n(233497)),
                (0, l.jsx)(ex.Y, {
                    targetElementRef: t,
                    renderPopout: function (e) {
                        let { position: t, closePopout: n } = e;
                        return null == u || null == r || null == o
                            ? null
                            : (0, l.jsx)(e1, {
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
                                className: eq.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [eJ.intl.string(eJ.t["LPJmL/"]), "/", eJ.intl.string(eJ.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: eq.aN, src: e }),
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
                            href: eB.A.getArticleURL(eW.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(a.E, {
                                variant: "body-sm/normal",
                                color: "text-link",
                                children: eJ.intl.string(eJ.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function e3() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, s.cf)([J.A], () => J.A);
    if (
        null == (0, s.bG)([Y.A], () => (null != e ? Y.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(e_.Ay, { className: eq.kL, children: [(0, l.jsx)(e7, {}), (0, l.jsx)(e0, { overwrite: i })] });
}
var e4 = n(310578);
function e6() {
    let e = (0, s.bG)([J.A], () => J.A.advancedMode);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(M.c, { className: e4.BQ }),
            (0, l.jsx)(en.EN, {
                isExpanded: e,
                onExpandedChange: O.E,
                children: (0, l.jsx)(ei.F, {
                    component: (0, l.jsx)(es.vN, {
                        children: (0, l.jsx)(el.$, {
                            slot: "trigger",
                            className: e4.hZ,
                            children: (0, l.jsxs)(a.E, {
                                variant: "body-lg/semibold",
                                className: e4.Vt,
                                children: [
                                    eJ.intl.string(eJ.t.dYRsrm),
                                    (0, l.jsx)(ea.ChevronSmallDownIcon, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: "currentColor",
                                        className: e4.yM,
                                    }),
                                ],
                            }),
                        }),
                    }),
                    children: (0, l.jsx)(en.kS, { className: e4.nd, children: (0, l.jsx)(e3, {}) }),
                }),
            }),
        ],
    });
}
var e9 = n(143129),
    e8 = n(235986),
    te = n(653042);
function tt(e) {
    let { description: t, icon: n, id: i, label: s, onChange: r, value: o } = e;
    return (0, l.jsxs)("div", {
        className: te.U,
        children: [
            (0, l.jsxs)(e8.A, {
                justify: e8.A.Justify.BETWEEN,
                align: e8.A.Align.CENTER,
                children: [
                    n,
                    (0, l.jsx)(e8.A.Child, {
                        grow: 1,
                        children: (0, l.jsx)(a.E, { variant: "body-md/semibold", children: s }),
                    }),
                    null != r && null != o && (0, l.jsx)(e9.d, { id: i, checked: o, onChange: r }),
                ],
            }),
            (0, l.jsx)(a.E, { variant: "body-xs/normal", color: "text-default", className: te.L, children: t }),
        ],
    });
}
var tn = n(646514),
    tl = n(993077),
    ti = n(625586);
let ts = function (e) {
    let { className: t, icon: n, noticeText: i, buttonText: s, onClick: r, canSync: o } = e;
    return (0, l.jsx)(tl.Z, {
        className: p()(t, ti.N),
        children: (0, l.jsxs)(e8.A, {
            justify: e8.A.Justify.BETWEEN,
            align: e8.A.Align.CENTER,
            children: [
                (0, l.jsx)(n, { width: 20, height: 20, size: "custom", color: tn.A.unsafe_rawColors.YELLOW_300.css }),
                (0, l.jsx)("div", {
                    className: ti.P,
                    children: (0, l.jsx)(a.E, { variant: "body-md/normal", children: i }),
                }),
                o && (0, l.jsx)(N.$, { size: "sm", variant: "secondary", onClick: r, text: s ?? void 0 }),
            ],
        }),
    });
};
var ta = n(290261),
    tr = n(818348),
    to = n(614406);
function td(e) {
    let { channel: t, roles: n, members: i, disabledReason: s, getRemoveTooltipHint: r } = e;
    return (0, l.jsx)(v.OZ, {
        className: to.xz,
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
                            ? (0, l.jsx)(V.A, { className: to.a, color: d.colorString, size: 20 })
                            : (0, l.jsx)(x.ShieldUserIcon, {
                                  size: "custom",
                                  className: to.a,
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
                case ta.oO.MEMBERS:
                    ((d = i[h]),
                        (o = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(A.eu, { src: d.avatarURL, size: f._3.SIZE_20, "aria-hidden": !0 }),
                                (0, l.jsx)(a.E, { variant: "body-sm/normal", children: d.name }),
                                d.bot && (0, l.jsx)(U.A, { verified: d.verifiedBot }),
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    className: to.Gq,
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
                    className: to.TL,
                    role: "listitem",
                    children: [
                        (0, l.jsx)("div", { className: to.z7, children: o }),
                        (0, l.jsxs)("div", {
                            className: to.z7,
                            children: [
                                (0, l.jsx)(a.E, {
                                    color: "text-muted",
                                    variant: "body-xs/normal",
                                    children: et.vV(d.rowType),
                                }),
                                d.rowType !== ta.T6.EMPTY_STATE &&
                                    (0, l.jsx)(C.m, {
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
                                                    void w.A.show({
                                                        title: eJ.intl.string(eJ.t.GuPYQB),
                                                        body: eJ.intl.format(eJ.t.xERCnZ, { name: n }),
                                                        cancelText: eJ.intl.string(eJ.t["ETE/oC"]),
                                                        onConfirm: () =>
                                                            (function (e, n) {
                                                                if (t.isGuildStageVoice()) {
                                                                    let l = (0, Z.$b)(
                                                                        e,
                                                                        n === ta.T6.ROLE ? G.r2.ROLE : G.r2.MEMBER,
                                                                        t,
                                                                    );
                                                                    (0, Z.pF)(l)
                                                                        ? _.A.clearPermissionOverwrite(t.id, l.id)
                                                                        : (0, O.R$)(t.id, [l]);
                                                                } else _.A.clearPermissionOverwrite(t.id, e);
                                                            })(e, l),
                                                    }))
                                                );
                                            },
                                            className: to.HI,
                                            "aria-disabled": !m,
                                            "aria-label": eJ.intl.string(eJ.t.N86XcP),
                                            children: (0, l.jsx)(b.CircleXIcon, {
                                                size: "sm",
                                                color: "currentColor",
                                                className: p()(to.Yz, { [to._2]: g || s }),
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
                    return (0, l.jsx)(th, { title: eJ.intl.string(eJ.t["LPJmL/"]) }, "roles-title");
                case ta.oO.MEMBERS:
                    return (0, l.jsx)(th, { title: eJ.intl.string(eJ.t["9Oq93m"]) }, "members-title");
            }
        },
        sectionHeight: 49,
        role: "list",
    });
}
function tc(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        o = (0, s.bG)([Q.A], () => Q.A.getSortedRoles(t.id)),
        d = et.C$(t, o, i, z.QY, r),
        c = (0, s.bG)([X.Ay], () => et.Wi(X.Ay.getMemberIds(t.id), i, t, z.QY, { permissionUpdates: r })),
        u = (0, Z.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: p()(to.j1, to.vu),
        children: [
            (0, l.jsx)(tt, {
                label: eJ.intl.string(eJ.t.StpcFU),
                description: eJ.intl.string(eJ.t.f7VbhF),
                icon: (0, l.jsx)(E.StageIcon, {
                    size: "custom",
                    color: "currentColor",
                    className: to.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: to.X4,
                children: [
                    (0, l.jsxs)("div", {
                        className: to.MJ,
                        children: [
                            (0, l.jsx)(a.E, { variant: "body-md/semibold", children: eJ.intl.string(eJ.t["7BWDRb"]) }),
                            (0, l.jsx)(C.m, {
                                text: eJ.intl.string(eJ.t.arRuES),
                                shouldShow: !u,
                                children: (0, l.jsx)(N.$, {
                                    variant: "primary",
                                    size: "sm",
                                    text: eJ.intl.string(eJ.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, y.mM)(async () => {
                                            let { default: e } = await Promise.all([
                                                n.e(377476),
                                                n.e(597622),
                                                n.e(746309),
                                                n.e(521332),
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
                    (0, l.jsx)(td, {
                        channel: i,
                        roles: d,
                        members: c,
                        disabledReason: u ? null : eJ.intl.string(eJ.t.arRuES),
                        getRemoveTooltipHint: W.Mt,
                    }),
                ],
            }),
        ],
    });
}
function tu(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: a, roles: r, members: o } = e,
        d = (0, s.bG)([q.A], () => q.A.can(tr.xB.ADMINISTRATOR, t)),
        c = ee.MJ(tr.xB.VIEW_CHANNEL, t),
        u = ee.MJ(tr.xB.ADMINISTRATOR, t),
        h = {
            title: eJ.intl.string(eJ.t.aUI70g),
            subtitle: eJ.intl.string(eJ.t.hfbjIH),
            formLabel: eJ.intl.string(eJ.t.P6eCbP),
        };
    return (
        i.isCategory()
            ? ((h.title = eJ.intl.string(eJ.t.lEPAZ5)),
              (h.subtitle = eJ.intl.string(eJ.t.RQUk61)),
              (h.formLabel = eJ.intl.string(eJ.t["8VIxJu"])))
            : i.type === eW.rbe.GUILD_VOICE && (h.subtitle = eJ.intl.string(eJ.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: p()(to.j1, { [to.vu]: a }),
            children: [
                (0, l.jsx)(tt, {
                    description: h.subtitle,
                    icon: (0, l.jsx)(S.LockIcon, {
                        size: "custom",
                        color: "currentColor",
                        className: to.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: h.title,
                    onChange: async function () {
                        let e = i.accessPermissions,
                            s = $.default.getCurrentUser();
                        a || null == (await (0, B.D)(t.id, i.id))
                            ? (et.uB(i, e, a), a || null == s || d || et.tP(i, e))
                            : (0, y.mM)(async () => {
                                  let { Modal: e } = await Promise.all([n.e(304823), n.e(223976)]).then(
                                      n.bind(n, 732955),
                                  );
                                  return (n) =>
                                      (0, l.jsx)(e, {
                                          ...n,
                                          title: eJ.intl.string(eJ.t.ZzdgUm),
                                          subtitle: eJ.intl.format(eJ.t.DwY2vN, {
                                              onClick: () => {
                                                  (F.A.open(t.id, eW.BEX.ONBOARDING), n.onClose());
                                              },
                                          }),
                                          actions: [{ text: eJ.intl.string(eJ.t.BddRzS), onClick: n.onClose }],
                                      });
                              });
                    },
                    value: a,
                }),
                (0, l.jsxs)("div", {
                    className: to.X4,
                    children: [
                        u &&
                            (0, l.jsx)("div", {
                                className: to.Ux,
                                children: (0, l.jsx)(T.w, {
                                    type: "warning",
                                    message: eJ.intl.string(eJ.t["5f3HIC"]),
                                    role: "status",
                                }),
                            }),
                        !c &&
                            !u &&
                            !a &&
                            (0, l.jsx)("div", {
                                className: to.Ux,
                                children: (0, l.jsx)(T.w, {
                                    type: "warning",
                                    message: eJ.intl.string(eJ.t.ZAk4Q9),
                                    role: "status",
                                }),
                            }),
                        a &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: to.MJ,
                                        children: [
                                            (0, l.jsx)(I.D, {
                                                variant: "heading-xs/semibold",
                                                className: to.DH,
                                                children: h.formLabel,
                                            }),
                                            (0, l.jsx)(N.$, {
                                                variant: "primary",
                                                size: "sm",
                                                text: eJ.intl.string(eJ.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, y.mM)(async () => {
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
                                    (0, l.jsx)(td, { channel: i, roles: r, members: o, getRemoveTooltipHint: et.ro }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}
function th(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(M.c, { className: to.yF }),
            (0, l.jsx)(I.D, { variant: "heading-xs/semibold", className: p()(to.DH, to.Gf), children: t }),
        ],
    });
}
let tg = s.Ay.connectStores([J.A, Y.A, X.Ay, q.A, Q.A, k.A], () => {
    let e,
        t = J.A.channel,
        n = J.A.category,
        l = [],
        i = [],
        s = {},
        a = !1;
    if (null != t) {
        e = Y.A.getGuild(t.getGuildId());
        let n = X.Ay.getMemberIds(e?.id);
        if (null != e) {
            let r = Q.A.getSortedRoles(e.id);
            ((s = J.A.editedPermissionIds.reduce((e, t) => {
                let n = J.A.getPermissionOverwrite(t);
                return (null != n && (e[t] = n), e);
            }, {})),
                (l = et.uX(e, r, t, t.accessPermissions, s)),
                (i = et.Wi(n, t, e, t.accessPermissions, {
                    permissionUpdates: s,
                    appChannelBotUserId: (0, D.yT)(t, k.A.getApplication(t.application_id)),
                })),
                (a = et.Ae(t, s)));
        }
    }
    return {
        canSyncChannel: null != n && q.A.can(tr.xB.MANAGE_ROLES, n),
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
        filteredMembers: o,
        filteredRoles: d,
        guild: c,
        isPrivateGuildChannel: u,
        locked: h,
        permissionUpdates: g,
    } = e;
    if (((0, P.q)(s), null == s || null == c)) return null;
    let m = { title: eJ.intl.string(eJ.t.BAZMBn), subtitle: eJ.intl.string(eJ.t.XLrZyp) };
    return (
        s.isCategory() && ((m.title = eJ.intl.string(eJ.t["/uELTj"])), (m.subtitle = eJ.intl.string(eJ.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(I.D, { variant: "heading-lg/semibold", children: m.title }),
                (0, l.jsx)(a.E, { variant: "body-sm/normal", children: m.subtitle }),
                null != i && t
                    ? h
                        ? (0, l.jsx)(ts, {
                              canSync: !1,
                              icon: L.RefreshIcon,
                              noticeText: eJ.intl.format(eJ.t.ETJqLl, { categoryName: i.name }),
                          })
                        : (0, l.jsx)(ts, {
                              buttonText: eJ.intl.string(eJ.t.NVwuHq),
                              canSync: !0,
                              icon: (0, R.k)(K),
                              noticeText: eJ.intl.format(eJ.t.OIhm0M, { categoryName: i.name }),
                              onClick: function () {
                                  null != i &&
                                      (0, y.mM)(async () => {
                                          let { default: e } = await n.e(687634).then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(e, {
                                                  ...t,
                                                  channel: s,
                                                  category: i,
                                                  onConfirm: async () => {
                                                      let { guild_id: e } = i,
                                                          t = ee.s9(i, (0, D.GY)(s));
                                                      (await (0, H.n)(s, t[e].deny, t[e].allow)) &&
                                                          (0, r.RT)(s.id, { permissionOverwrites: Object.values(t) });
                                                  },
                                              });
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice() ? (0, l.jsx)(tc, { guild: c, channel: s, permissionUpdates: g }) : null,
                (0, l.jsx)(tu, { channel: s, guild: c, isPrivateGuildChannel: u, roles: d, members: o }),
                (0, l.jsx)(e6, {}),
            ],
        })
    );
});
var tm = n(526132),
    tp = n(97469),
    tx = n(406704),
    tA = n(413599),
    tf = n(95701),
    tC = n(291731),
    tj = n(734057),
    tb = n(994500),
    tv = n(188567),
    ty = n(608226),
    tE = n(282956),
    tN = n(140872);
function tS(e) {
    let { refToScroller: t } = e,
        n = (0, s.bG)([eU.A], () => eU.A.getChannel(), []),
        i = (0, s.bG)([Y.A], () => (null != n ? Y.A.getGuild(n.getGuildId()) : null), [n]),
        {
            section: a,
            sectionId: r,
            webhooks: o,
            editedWebhook: d,
            isFetching: c,
            errors: u,
        } = (0, s.cf)([tC.A], () => tC.A.getProps(), []);
    return null == i || null == n
        ? null
        : (0, l.jsx)(tN.A, {
              guild: i,
              channel: n,
              section: a,
              sectionId: r,
              webhooks: o,
              editedWebhook: d,
              isFetchingWebhooks: c,
              hasChanges: tC.A.hasChanges,
              errors: u,
              refToScroller: t,
          });
}
function tT() {
    let { channel: e, submitting: t } = (0, s.cf)([eU.A], () => eU.A.getProps()),
        n = (0, s.bG)([tC.A], () => tC.A.editedWebhook),
        i = (0, s.bG)([Y.A], () => (null != e ? Y.A.getGuild(e.getGuildId()) : null), [e]);
    return (0, l.jsx)(ec.A, {
        submitting: t,
        onReset: function () {
            tE.A.init();
        },
        onSave: function () {
            null != i && null != n && tE.A.saveWebhook(i.id, n);
        },
    });
}
var tI = n(422542),
    tM = n(351906);
function tL() {
    let e = (0, s.bG)([tM.A], () => tM.A.hideInstantInvites),
        { channel: t, guild: n } = (0, s.cf)(
            [eU.A, Y.A],
            () => {
                let { channel: e } = eU.A.getProps(),
                    t = null != e ? Y.A.getGuild(e.getGuildId()) : null;
                return { channel: e, guild: t };
            },
            [],
        ),
        i = (0, s.bG)([q.A], () => null != t && q.A.can(eW.xBc.CREATE_INSTANT_INVITE, t), [t]),
        { invites: a, loading: r } = (0, s.cf)([eU.A], () => eU.A.getInvites(), []);
    return (0, l.jsx)(tI.A, { invites: a, loading: r, guild: n, channel: t, canCreateInvites: i, hide: e });
}
(n(938796), n(667532));
var tR = n(371444),
    tw = n(392421),
    t_ = n(602137),
    tO = n(665260),
    tG = n(452027),
    tD = n(103557),
    tP = n(150934),
    tk = n(825484),
    tU = n(123292),
    tV = n(691885),
    tH = n(270003),
    tB = n(331322),
    tF = n(95477),
    tZ = n(893007),
    tz = n(771871),
    tW = n(73153),
    tJ = n(534963),
    tX = n(820284),
    tQ = n(432371),
    tY = n(547683),
    tq = n(376092),
    t$ = n(773669),
    tK = n(458350),
    t0 = n(965805),
    t2 = n(355622),
    t5 = n(408018),
    t1 = n(989161),
    t7 = n(375499),
    t3 = n(201614),
    t4 = n(770335),
    t6 = n(7584),
    t9 = n(422844),
    t8 = n(307301),
    ne = n(599119),
    nt = n(219504);
n(807632);
var nn = n(376310);
n(253913);
var nl = n(901748);
function ni(e) {
    let { channel: t } = e,
        a = (0, s.bG)([q.A], () => q.A.can(eW.xBc.MANAGE_CHANNELS, t), [t]),
        o = t.availableTags.length >= 20,
        d = t.availableTags.length > 0,
        c = i.useCallback(() => {
            let e = t.availableTags.length >= 20;
            a &&
                !e &&
                (0, y.mM)(async () => {
                    let { default: e } = await Promise.all([n.e(143172), n.e(347326)]).then(n.bind(n, 950989));
                    return (n) => (0, l.jsx)(e, { ...n, channelId: t.id, guildId: t.guild_id });
                });
        }, [t, a]),
        u = i.useCallback((e) => t.isGameInvitesChannel() && "No Mic" === e.name, [t]),
        h = i.useCallback(
            (e) => {
                !a ||
                    u(e) ||
                    (0, y.mM)(async () => {
                        let { default: i } = await Promise.all([n.e(143172), n.e(347326)]).then(n.bind(n, 950989));
                        return (n) => (0, l.jsx)(i, { ...n, channelId: t.id, guildId: t.guild_id, tag: e });
                    });
            },
            [a, u, t],
        ),
        {
            handleDragStart: g,
            handleDragReset: m,
            handleDragComplete: x,
        } = (0, nt.A)(t.availableTags, (e) => {
            (0, r.fy)({ availableTags: e });
        });
    return (0, l.jsxs)("div", {
        className: nl._A,
        children: [
            d
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
                              tooltipText: u(e) ? eJ.intl.string(eJ.t.FiKFKs) : void 0,
                          },
                          e.id,
                      ),
                  )
                : null,
            d
                ? (0, l.jsx)(j.D, {
                      onClick: c,
                      className: p()(nl.JE, { [nl.r9]: !a || o }),
                      children: (0, l.jsx)(t8.PlusSmallIcon, {
                          size: "custom",
                          "aria-label": eJ.intl.string(eJ.t["/jubeD"]),
                          color: tn.A.unsafe_rawColors.WHITE.css,
                          width: 20,
                          height: 20,
                      }),
                  })
                : (0, l.jsx)(N.$, {
                      variant: "primary",
                      text: eJ.intl.string(eJ.t["/jubeD"]),
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
        } = (0, ne.A)({
            type: "CHANNEL_SETTINGS_FORUM_TAGS",
            index: c,
            optionId: t.id,
            onDragStart: r,
            onDragComplete: a,
            onDragReset: o,
        });
    return (0, l.jsx)("div", {
        className: p()(nl.kL, { [nl.A]: null != h && c < h, [nl.Ze]: null != h && c > h }),
        ref: (e) => {
            u(g(e));
        },
        onMouseEnter: () => m(i),
        onMouseLeave: () => m(!1),
        children: (0, l.jsx)(C.m, {
            text: d,
            asContainer: !0,
            shouldShow: null != d,
            children: (0, l.jsx)(nn.Ay, {
                tag: t,
                disabled: !i,
                ariaLabel: eJ.intl.formatToPlainString(eJ.t.jhSvB9, { name: t.name }),
                onClick: i ? () => s(t) : void 0,
            }),
        }),
    });
}
var na = n(235640),
    nr = n(840387),
    no = n(268761),
    nd = n(474078),
    nc = n(890497),
    nu = n(580679);
let nh = function (e) {
    let { autoArchiveDuration: t, onChange: n, isDisabled: i, helperText: s } = e,
        a = (0, no.Gk)();
    return (0, l.jsx)("div", {
        className: nu.gy,
        children: (0, l.jsx)(nc.Z, {
            selectionMode: "single",
            label: eJ.intl.string(eJ.t.FGjMZS),
            helperText: s,
            disabled: i,
            options: a,
            value: t,
            onSelectionChange: n,
        }),
    });
};
var ng = n(75721),
    nm = n(991690),
    np = n(627363),
    nx = n(429913),
    nA = n(878014),
    nf = n(233470),
    nC = n(260498),
    nj = n(246338),
    nb = n(486020);
function nv(e, t, n) {
    return {
        applicationId: e,
        name: t,
        iconApplication: n ?? { id: e, icon: null },
        iconURL: n?.icon == null ? null : (nb.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, size: 24 }) ?? null),
    };
}
function ny(e) {
    return (0, nA.W)(e, nm.U.VOICE_CHANNEL);
}
var nE = n(786739);
let nN = "none";
function nS(e) {
    let { channel: t, guildId: n, onChange: i } = e;
    return (0, ng._f)(t) ? (0, l.jsx)(nT, { channel: t, guildId: n, onChange: i }) : null;
}
function nT(e) {
    let { channel: t, guildId: n, onChange: a } = e,
        r = t.application_id ?? null,
        { options: o, listState: d } = (function (e, t) {
            let { options: n, listState: l } = (function (e) {
                    i.useEffect(() => {
                        (0, nf.listProjects)(e);
                    }, [e]);
                    let t = (0, s.yK)([nC.Ay], () => nC.Ay.getOwnedProjects()),
                        n = (0, s.yK)([nC.Ay], () => nC.Ay.getSharedProjects(e), [e]),
                        l = i.useMemo(
                            () =>
                                (function (e, t, n) {
                                    let l = new Map();
                                    for (let i of [...e, ...t]) (0, nj.Ot)(i, n) && l.set(i.application_id, i);
                                    return [...l.values()].sort((e, t) => e.name.localeCompare(t.name));
                                })(t, n, e),
                            [t, n, e],
                        ),
                        a = i.useMemo(() => l.map((e) => e.application_id), [l]),
                        r = (0, nx.A)(a, !1),
                        o = i.useRef(new Set()),
                        [d, c] = i.useState(new Set()),
                        [u, h] = i.useState(!1),
                        g = i.useMemo(() => l.filter((e, t) => !ny(r[t])).map((e) => e.application_id), [l, r]);
                    i.useEffect(() => {
                        let e = g.filter((e) => !o.current.has(e));
                        if (0 !== e.length) {
                            for (let t of e) o.current.add(t);
                            np.Ay.fetchApplications(e, !0)
                                .catch(() => h(!0))
                                .finally(() => c((t) => new Set([...t, ...e])));
                        }
                    }, [g]);
                    let m = i.useMemo(() => l.filter((e, t) => ny(r[t])), [l, r]),
                        p = (0, s.bG)([nC.Ay], () => nC.Ay.getGuildProjectsFetchState(e), [e]),
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
                        C = (0, nx.A)(f);
                    return {
                        options: i.useMemo(() => m.map((e, t) => nv(e.application_id, e.name, C[t])), [m, C]),
                        listState: A,
                    };
                })(e),
                a = null == t || n.some((e) => e.applicationId === t) ? null : t,
                r = (0, nx.h)(a);
            return i.useMemo(
                () =>
                    null == a || null == r
                        ? { options: n, listState: l }
                        : { options: [nv(a, r.name, r), ...n], listState: "rows" },
                [n, l, a, r],
            );
        })(n, r),
        c = i.useMemo(
            () => [
                ...o.map((e) => {
                    let { applicationId: t, name: n, iconURL: l } = e;
                    return { id: t, label: n, value: t, leading: null != l ? { type: "image", src: l } : void 0 };
                }),
                { id: nN, label: eJ.intl.string(nE.default.KEB4Rm), value: nN },
            ],
            [o],
        ),
        u = i.useCallback(
            (e) => {
                a(e === nN ? null : e);
            },
            [a],
        );
    return (0, l.jsx)(tV.l, {
        selectionMode: "single",
        label: eJ.intl.string(nE.default.AdT7SZ),
        description: eJ.intl.string(nE.default["wKSjL/"]),
        options: c,
        value: r ?? nN,
        onSelectionChange: u,
        loading: "loading" === d,
        helperText: "empty" === d ? eJ.intl.string(nE.default["4S6iHa"]) : void 0,
        errorMessage: "failed" === d ? eJ.intl.string(nE.default.X2xOBn) : void 0,
        fullWidth: !0,
    });
}
var nI = n(46653),
    nM = n(717518),
    nL = n(147036),
    nR = n(927813),
    nw = n(879631),
    n_ = n(221851);
function nO(e) {
    let { label: t, helperText: n, hideLabel: s, disabled: a, value: r, onChange: o } = e,
        [d, c] = i.useState(null),
        u = i.useMemo(() => {
            let e = [...(d ?? eW.s_7)];
            return (
                e.includes(r) || e.unshift(r), e.map((e) => ({ id: e.toString(), label: (0, nw.$)(e, !1), value: e }))
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
            n <= eW.WA1 && t.push(n);
            let l = n * nR.A.Seconds.MINUTE;
            l <= eW.WA1 && t.push(l);
            let i = n * nR.A.Seconds.HOUR;
            (i <= eW.WA1 && t.push(i), c(t));
        }, []),
        m = i.useCallback(() => {
            c(null);
        }, []);
    return (0, l.jsx)("div", {
        className: n_.QB,
        children: (0, l.jsx)(nc.Z, {
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
            placeholder: eJ.intl.string(eJ.t.dBqQu4),
        }),
    });
}
var nG = n(323073);
function nD(e) {
    let { channel: t, guild: n, canManageChannels: i, isTeen: s, onChange: a } = e,
        r = (0, nG.Gc)(t),
        o = null != n && (0, eP.wh)(n),
        d = "none";
    r ? (d = "nsfw") : t.isSpoilerChannel() && (d = "spoiler");
    let c = [
        { value: "none", name: eJ.intl.string(eJ.t.OtnNJE), desc: eJ.intl.string(eJ.t["a5/7hX"]) },
        { value: "spoiler", name: eJ.intl.string(eJ.t.TvUHTb), desc: eJ.intl.string(eJ.t.ddWXHa) },
    ];
    return (
        (!s || r) && c.push({ value: "nsfw", name: eJ.intl.string(eJ.t.Es25Yf), desc: eJ.intl.string(eJ.t["9eUgwR"]) }),
        (0, l.jsxs)(tB.B, {
            gap: 4,
            padding: { top: 8, bottom: 8 },
            children: [
                (0, l.jsx)(tz.z, {
                    label: eJ.intl.string(eJ.t.yLB4y2),
                    onChange: a,
                    options: c,
                    value: d,
                    disabled: !i || null != t.linkedLobby || o || (s && r),
                }),
                null != t.linkedLobby
                    ? (0, l.jsx)(T.w, { type: "warning", message: eJ.intl.string(eJ.t.EvavKG), role: "none" })
                    : null,
            ],
        })
    );
}
var nP = n(953727);
function nk(e) {
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
    nH = n(307731);
n(37411);
var nB = n(590930);
let nF = {
        popoutLocation: {
            page: eW.liQ.CHANNEL_SETTINGS,
            section: eW.JJy.CHANNEL_DEFAULT_REACTION,
            object: eW.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nZ = {
        popoutLocation: {
            page: eW.liQ.CHANNEL_SETTINGS,
            section: eW.JJy.CHANNEL_NAME,
            object: eW.ZSU.EMOJI_PICKER_BUTTON,
        },
    },
    nz = "AUTOMATIC_RTC_REGION",
    nW = s.Ay.connectStores([eU.A], () => {
        let { channel: e, submitting: t } = eU.A.getProps();
        return {
            channel: e,
            submitting: t,
            onReset() {
                null != e && (0, r.Ts)(e.id);
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
                    flags: o,
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
                e.isThread() && 0 === (t = (0, nd.A)(t, !0)).length
                    ? tW.h.dispatch({
                          type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
                          errors: { name: eJ.intl.string(eJ.t.uXA573) },
                      })
                    : (0, r.RT)(e.id, {
                          name: t,
                          type: n,
                          topic: l,
                          bitrate: i,
                          userLimit: s,
                          nsfw: a,
                          flags: o,
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
    })(ec.A);
function nJ(e) {
    let { onEmojiPicked: t, channel: n, guildId: s } = e,
        a = i.useRef(null),
        r = i.useCallback(
            (e) => {
                let { closePopout: i } = e;
                return (0, l.jsx)(t3.default, {
                    channel: n,
                    guildId: s,
                    pickerIntention: nH.EmojiIntention.NO_CUSTOM_EMOJI,
                    closePopout: i,
                    onNavigateAway: i,
                    onSelectEmoji: (e) => {
                        let { emoji: n, willClose: l } = e;
                        (null != n && n.type === t4.i.UNICODE && t(n.surrogates), l && i());
                    },
                    showOnlyUnicode: !0,
                    analyticsOverride: nZ,
                });
            },
            [n, s, t],
        );
    return (0, l.jsx)(ex.Y, {
        targetElementRef: a,
        renderPopout: r,
        animation: ex.Y.Animation.NONE,
        position: "bottom",
        align: "right",
        children: (e, t) => {
            let { isShown: n } = t;
            return (0, l.jsx)(t7.A, { ...e, ref: a, active: n, className: nB.Z8, tabIndex: 0 });
        },
    });
}
class nX extends i.PureComponent {
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
                (this.channelTopicTextAreaChannel = (0, tf.createChannelRecord)({
                    id: "1",
                    type: eW.rbe.DM,
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
            richTopicValue: (0, t5.x7)(t),
            topicFocused: !1,
            updateNameInputCursorPosition: !1,
        };
    }
    componentDidMount() {
        null == this.props.regions && null != this.props.guild && tJ.A.fetchRegions(this.props.guild.id);
    }
    componentDidUpdate(e) {
        let t = this.props.channel?.topic ?? "";
        (e.channel?.topic ?? "") !== t &&
            t !== this.state.textTopicValue &&
            this.setState({ textTopicValue: t, richTopicValue: (0, t5.x7)(t) });
    }
    getError(e) {
        let { errors: t } = this.props;
        return t?.[e];
    }
    getSlowmodeHelpText() {
        let { channel: e } = this.props;
        return e?.isForumLikeChannel()
            ? eJ.intl.string(eJ.t["a+1pdO"])
            : e?.isThread()
              ? eJ.intl.string(eJ.t.OMmNCv)
              : eJ.intl.string(eJ.t["HEA/DU"]);
    }
    getAutoArchiveDurationSliderMarker(e) {
        return (0, nw.$)(e * nR.A.Seconds.MINUTE, !0);
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
            m = tf.Le.has(e.type),
            x = e.isForumLikeChannel(),
            A = x && e.availableTags?.every((e) => e.moderated),
            f = $.default.getCurrentUser()?.isStaff() === !0,
            C = tf.IY.has(e.type)
                ? (0, l.jsx)(tG.D, {
                      label: x ? eJ.intl.string(eJ.t.yR6HwZ) : eJ.intl.string(eJ.t.X8jMDh),
                      children: (0, l.jsx)(t1.Ay, {
                          className: p()(nB.zm, { [nB.r9]: !s }),
                          innerClassName: p()(nB.At, { [nB.r9]: !s }),
                          characterCountClassName: nB.IQ,
                          maxCharacterCount: x ? 4096 : 1024,
                          onChange: this.handleChangeRichTopic,
                          placeholder: eJ.intl.string(eJ.t["71fbmh"]),
                          channel: this.getChannelTopicTextAreaChannel(e.guild_id ?? d?.id),
                          textValue: this.state.textTopicValue,
                          richValue: this.state.richTopicValue,
                          type: x ? t2.oU.FORUM_CHANNEL_GUIDELINES : t2.oU.CHANNEL_TOPIC,
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
                x && f && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tD.f, {
                          label: eJ.intl.string(eJ.t.qk2jdY),
                          placeholder: eJ.intl.string(eJ.t.DDjD1H),
                          value: t6.Ay.translateSurrogatesToInlineEmoji(e.template ?? ""),
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
                          (0, l.jsx)(M.c, {}),
                          (0, l.jsx)(tG.D, {
                              label: eJ.intl.string(eJ.t["P/y+sj"]),
                              description: eJ.intl.string(eJ.t["/oQQ3y"]),
                              errorMessage: this.getError("available_tags"),
                              children: (0, l.jsx)(ni, { channel: e }),
                          }),
                          (0, l.jsx)(tP.S, {
                              disabled: !s || A,
                              checked: e.hasFlag(nV.lx.REQUIRE_TAG),
                              onChange: (e) => this.handleRequireTagChanged(e),
                              label: eJ.intl.string(eJ.t["9g2Zyv"]),
                          }),
                      ],
                  })
                : null,
            v = e.isForumLikeChannel()
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(M.c, {}),
                          (0, l.jsx)(tG.D, {
                              label: eJ.intl.string(eJ.t["8ao1+E"]),
                              description: eJ.intl.string(eJ.t.SdbF0q),
                              children: (0, l.jsxs)("div", {
                                  className: nB.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: p()(nB.t0, nB._h),
                                          children: (0, l.jsxs)(tk.e, {
                                              align: "center",
                                              children: [
                                                  (0, l.jsx)(ex.Y, {
                                                      targetElementRef: this.defaultReactionButtonRef,
                                                      renderPopout: this.renderEmojiPicker,
                                                      position: "right",
                                                      animation: ex.Y.Animation.NONE,
                                                      align: "center",
                                                      children: (e) =>
                                                          (0, l.jsx)(N.$, {
                                                              ...e,
                                                              buttonRef: this.defaultReactionButtonRef,
                                                              text: eJ.intl.string(eJ.t["59QgaD"]),
                                                              disabled: !s,
                                                              onClick: (t) => {
                                                                  e.onClick?.(t);
                                                              },
                                                          }),
                                                  }),
                                                  null != e.defaultReactionEmoji
                                                      ? (0, l.jsx)(tU.Q, {
                                                            text: eJ.intl.string(eJ.t.N86XcP),
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
            y =
                e.isForumChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(M.c, {}),
                              (0, l.jsxs)("div", {
                                  className: nB.OZ,
                                  children: [
                                      (0, l.jsx)("div", {
                                          className: p()(nB.t0, nB.WC),
                                          children: (0, l.jsx)(tV.l, {
                                              selectionMode: "single",
                                              label: eJ.intl.string(eJ.t["kQvoC/"]),
                                              description: eJ.intl.string(eJ.t.mOSViT),
                                              options: [
                                                  {
                                                      id: "list",
                                                      label: eJ.intl.string(eJ.t["4HXEZG"]),
                                                      value: tR.C.LIST,
                                                  },
                                                  {
                                                      id: "grid",
                                                      label: eJ.intl.string(eJ.t["8RswJG"]),
                                                      value: tR.C.GRID,
                                                  },
                                              ],
                                              value: e.defaultForumLayout ?? tR.C.LIST,
                                              onSelectionChange: this.handleChangeDefaultForumLayout,
                                          }),
                                      }),
                                      e.defaultForumLayout === tR.C.GRID
                                          ? (0, l.jsx)(nk, { className: nB.Kf })
                                          : (0, l.jsx)(nU, { className: nB.Kf }),
                                  ],
                              }),
                              (0, l.jsx)(M.c, {}),
                          ],
                      })
                    : null,
            E =
                e.isForumLikeChannel() && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tV.l, {
                          selectionMode: "single",
                          label: eJ.intl.string(eJ.t.gePre2),
                          description: eJ.intl.string(eJ.t["165cVX"]),
                          options: [
                              { id: "activity", label: eJ.intl.string(eJ.t.ElZtzj), value: t_.T.LATEST_ACTIVITY },
                              { id: "creation", label: eJ.intl.string(eJ.t.w28f3F), value: t_.T.CREATION_DATE },
                          ],
                          value: e.getDefaultSortOrder(),
                          onSelectionChange: this.handleChangeDefaultSortOrder,
                      })
                    : null,
            S = e.isForumLikeChannel()
                ? (0, l.jsx)(tV.l, {
                      selectionMode: "single",
                      label: eJ.intl.string(eJ.t.Paxaug),
                      description: eJ.intl.string(eJ.t.DqOl8J),
                      options: [
                          { id: "some", label: eJ.intl.string(eJ.t.rQ0ctQ), value: tw.n.MATCH_SOME },
                          { id: "all", label: eJ.intl.string(eJ.t.FCXUu0), value: tw.n.MATCH_ALL },
                      ],
                      value: e.getDefaultTagSetting(),
                      onSelectionChange: this.handleChangeDefaultTagSetting,
                  })
                : null,
            I = m ? r : s,
            L = tf.nb.has(e.type)
                ? x
                    ? (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(M.c, {}),
                              (0, l.jsxs)(tH.n, {
                                  label: eJ.intl.string(eJ.t.tTHx98),
                                  children: [
                                      (0, l.jsx)(nO, {
                                          label: eJ.intl.string(eJ.t.O1c02q),
                                          helperText: this.getSlowmodeHelpText(),
                                          value: e.rateLimitPerUser,
                                          onChange: this.handleChangeSlowmode,
                                          disabled: !I,
                                      }),
                                      (0, l.jsx)(nO, {
                                          label: eJ.intl.string(eJ.t["fkY5+l"]),
                                          helperText: eJ.intl.string(eJ.t.kdZU6H),
                                          value: e.defaultThreadRateLimitPerUser ?? 0,
                                          onChange: this.handleChangeThreadMessageSlowmode,
                                          disabled: !I,
                                      }),
                                  ],
                              }),
                          ],
                      })
                    : (0, l.jsx)(nO, {
                          label: eJ.intl.string(eJ.t.tTHx98),
                          helperText: this.getSlowmodeHelpText(),
                          value: e.rateLimitPerUser,
                          onChange: this.handleChangeSlowmode,
                          disabled: !I,
                      })
                : null,
            R =
                m && null != e.threadMetadata && !g?.isGameInvitesChannel()
                    ? (0, l.jsx)(tX.A, {
                          page: eW.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nh, {
                              isDisabled: !o,
                              autoArchiveDuration: e.threadMetadata.autoArchiveDuration ?? 4320,
                              onChange: this.handleAutoArchiveDurationChanged,
                              helperText: c ? eJ.intl.string(eJ.t["3aJN9M"]) : eJ.intl.string(eJ.t.YUXr4Z),
                          }),
                      })
                    : null,
            w =
                e.type === eW.rbe.PRIVATE_THREAD && null != e.threadMetadata
                    ? (0, l.jsx)("div", {
                          children: (0, l.jsx)(e9.d, {
                              label: eJ.intl.string(eJ.t.s2rpNf),
                              description: eJ.intl.string(eJ.t.cSyXJk),
                              checked: e.threadMetadata.invitable,
                              onChange: this.handleInvitableChanged,
                              disabled: !o,
                          }),
                      })
                    : null,
            _ = tf.LE.has(e.type)
                ? (0, l.jsx)(nD, {
                      channel: e,
                      guild: d,
                      canManageChannels: s,
                      isTeen: h,
                      onChange: this.handleChannelRestrictionChange,
                  })
                : m
                  ? (0, l.jsx)(e9.d, {
                        label: eJ.intl.string(eJ.t.TvUHTb),
                        description: eJ.intl.string(eJ.t.ddWXHa),
                        onChange: this.handleThreadSpoilerChange,
                        checked: e.isSpoilerChannel(),
                        disabled: !s,
                    })
                  : null,
            O =
                tf.xR.has(e.type) &&
                null != d &&
                d.features.has(eW.GuildFeatures.NEWS) &&
                e.id !== d?.rulesChannelId &&
                e.id !== d?.publicUpdatesChannelId
                    ? (0, l.jsxs)(tB.B, {
                          gap: 4,
                          children: [
                              (0, l.jsx)(e9.d, {
                                  label: eJ.intl.string(eJ.t.Au2b7m),
                                  description: eJ.intl.format(eJ.t.tI7KNX, {
                                      documentationLink: eB.A.getArticleURL(eW.MVz.ANNOUNCEMENT_CHANNELS),
                                  }),
                                  onChange: this.handleNewsChange,
                                  checked: e.type === eW.rbe.GUILD_ANNOUNCEMENT,
                                  disabled: !s,
                              }),
                              (0, l.jsx)(T.w, { type: "info", message: eJ.intl.string(eJ.t["2Ab4Id"]), role: "none" }),
                          ],
                      })
                    : null,
            G =
                tf.wE.has(e.type) && !e.isGameInvitesChannel()
                    ? (0, l.jsx)(tX.A, {
                          page: eW.liQ.CHANNEL_SETTINGS,
                          children: (0, l.jsx)(nh, {
                              isDisabled: !s,
                              autoArchiveDuration: (0, no.Gl)(e, null),
                              onChange: this.handleChangeDefaultAutoArchiveDuration,
                              helperText: e.isForumLikeChannel()
                                  ? eJ.intl.string(eJ.t.fyXclY)
                                  : eJ.intl.string(eJ.t.W3Noi9),
                          }),
                      })
                    : null,
            D = this.props.showChannelSummariesSettings
                ? (0, l.jsx)(e9.d, {
                      label: eJ.intl.string(eJ.t.id3ozj),
                      description: eJ.intl.format(eJ.t.feJW1z, {
                          helpdeskArticle: eB.A.getArticleURL(eW.MVz.CONVERSATION_SUMMARIES),
                      }),
                      onChange: this.handleChannelSummariesToggled,
                      checked:
                          !e.hasFlag(nV.lx.SUMMARIES_DISABLED) &&
                          d?.features.has(eW.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                      disabled: !s || !d?.features.has(eW.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
                  })
                : null,
            P = e.isMediaChannel()
                ? (0, l.jsx)(e9.d, {
                      label: eJ.intl.string(eJ.t.u8LZOt),
                      description: eJ.intl.string(eJ.t.J4wCc7),
                      checked: !e.hasFlag(nV.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS),
                      onChange: this.handleShowMediaOptionsToggled,
                      disabled: !s,
                  })
                : null;
        e.type === eW.rbe.GUILD_CATEGORY
            ? ((i = eJ.intl.string(eJ.t.OCAkGP)), (n = "category-name"))
            : e.isForumPost()
              ? ((i = eJ.intl.string(eJ.t.uyVrTN)), (n = "post-title"))
              : m
                ? ((i = eJ.intl.string(eJ.t.j3XWjD)), (n = "thread-name"))
                : ((i = eJ.intl.string(eJ.t.PVbHDl)), (n = "channel-name"));
        let k = q.A.can(tY.G2, e),
            U = k
                ? void 0
                : (function (e) {
                      let t = tY.Qr.filter((t) => !q.A.can(t, e));
                      if (0 === t.length) return;
                      let n = new Intl.ListFormat(t$.default.locale);
                      return eJ.intl.formatToPlainString(eJ.t.na1rJc, {
                          permissions: n.format(t.map(tq.hx)),
                          count: t.length,
                      });
                  })(e),
            V =
                e.type === eW.rbe.GUILD_APP && null != d
                    ? (0, l.jsx)(tK.A, {
                          guildId: d.id,
                          channelId: e.id,
                          selectedApplicationId: e.application_id,
                          onChange: this.handleChangeApplication,
                          disabled: !k,
                          helperText: U,
                      })
                    : null,
            H = u ? a : s;
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
                    disabled: !H,
                    maxLength: 100,
                    trailing: H
                        ? {
                              type: "emoji",
                              button: (0, l.jsx)(nJ, {
                                  onEmojiPicked: this.insertEmojiAtPosition,
                                  channel: e,
                                  guildId: e?.guild_id,
                              }),
                          }
                        : void 0,
                }),
                V,
                C,
                j,
                b,
                v,
                null != d
                    ? (0, l.jsx)(nS, { channel: e, guildId: d.id, onChange: this.handleChangeApplication })
                    : null,
                L,
                R,
                y,
                E,
                S,
                w,
                _,
                O,
                D,
                G,
                P,
            ],
        });
    }
    renderBitrate(e) {
        return `${Math.round(e / 1e3)}kbps`;
    }
    renderVoiceBitrate(e, t) {
        let { canManageChannels: n } = this.props;
        if (!this.showVoiceSettings()) return null;
        let i = (0, nL.Jz)(t, e),
            s = this.getError("bitrate");
        return (0, l.jsx)(tZ.A, {
            label: eJ.intl.string(eJ.t.w2d0vU),
            errorMessage: "" !== s ? s : void 0,
            helperText: i > 64e3 ? eJ.intl.format(eJ.t.SbQJk5, { bitrate: 64 }) : void 0,
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
            tf.k.has(e.type) &&
            (e.isGuildVocal() || tx.io.getCurrentConfig({ guildId: e.guild_id, location: "9b50bd_1" }).enabled)
        );
    }
    renderVideoQualityMode(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = [
            { value: eW.K3c.AUTO, name: eJ.intl.string(eJ.t.jjKYpu) },
            { value: eW.K3c.FULL, name: eJ.intl.string(eJ.t["7jOoJE"]) },
        ];
        return (0, l.jsx)(tz.z, {
            label: eJ.intl.string(eJ.t.jhJEJs),
            helperText: eJ.intl.format(eJ.t.c5W7Ss, {}),
            onChange: (e) => this.handleVideoQualityModeChange(e),
            options: n,
            value: e.videoQualityMode ?? eW.K3c.AUTO,
            disabled: !t,
        });
    }
    onRenderUserLimit(e) {
        return 0 === (e = Math.round(e))
            ? eJ.intl.string(eJ.t.XX5ciX)
            : eJ.intl.formatToPlainString(eJ.t["3uHFUR"], { num: e });
    }
    renderUserLimit(e) {
        let { canManageChannels: t } = this.props;
        if (!this.showVoiceSettings()) return null;
        let n = this.getError("user_limit"),
            i = e.isGuildStageVoice() ? 1e4 : 99;
        return (0, l.jsx)(tZ.A, {
            label: eJ.intl.string(eJ.t["/AoSGN"]),
            errorMessage: "" !== n ? n : void 0,
            helperText: eJ.intl.format(e.isGuildStageVoice() ? eJ.t.OqZI8D : eJ.t["8yb3JT"], {}),
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
                label: eJ.intl.string(eJ.t.JEmsap),
                value: nz,
            });
        let a = e.rtcRegion ?? nz;
        return (0, l.jsx)(tV.l, {
            selectionMode: "single",
            label: eJ.intl.string(eJ.t["Ms8bX+"]),
            description: eJ.intl.string(eJ.t["dbTs+z"]),
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
                e.type === eW.rbe.GUILD_CATEGORY
                    ? (0, eh.M)(i)
                        ? n(477777)
                        : n(517649)
                    : (0, eh.M)(i)
                      ? n(241306)
                      : n(16474)),
            (0, l.jsx)(e8.A, {
                justify: e8.A.Justify.CENTER,
                className: n_.o9,
                children: (0, l.jsx)("img", { alt: "", width: 280, height: 165, src: t }),
            })
        );
    }
    render() {
        let { channel: e, channelName: t, guild: n } = this.props;
        if (null == e || null == t || null == n) return null;
        let i = "channel-settings-overview-heading";
        return (0, l.jsxs)(tH.n, {
            "aria-labelledby": i,
            children: [
                (0, l.jsx)(I.D, { id: i, variant: "body-lg/medium", children: eJ.intl.string(eJ.t["/dp6yY"]) }),
                this.renderChannelInfo(e, t),
                this.showVoiceSettings() ? (0, l.jsx)(M.c, { gap: 24 }) : null,
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
        return (0, l.jsx)(t3.default, {
            guildId: n?.guild_id,
            closePopout: t,
            onSelectEmoji: (e) => {
                let { emoji: n, willClose: l } = e;
                (this.handleChangeDefaultReactionEmoji(n), l && t());
            },
            pickerIntention: nH.EmojiIntention.COMMUNITY_CONTENT,
            channel: n,
            analyticsOverride: nF,
        });
    };
    handleRequireTagChanged = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nV.lx.REQUIRE_TAG, e);
        (0, r.fy)({ flags: n });
    };
    handleChangeName = (e) => {
        let { channel: t } = this.props;
        if (null == t) return;
        e = (0, t0.A)(e, t.type);
        let n = this.nameInputRef.current?.selectionStart ?? 0;
        ((0, r.fy)({ name: e }),
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
            e !== t && (0, r.fy)({ name: e });
        }
    };
    insertEmojiAtPosition = (e) => {
        let t = this.nameInputRef.current,
            n = null != t && document.activeElement === t,
            l = this.props.channelName ?? "",
            i = n ? (t.selectionStart ?? l.length) : this.cursorPosition,
            s = n ? (t.selectionEnd ?? l.length) : this.cursorPosition,
            a = l.substring(0, i) + e + l.substring(s);
        ((0, r.fy)({ name: a }),
            setTimeout(() => {
                let n = i + e.length;
                ((this.cursorPosition = n), t?.focus(), t?.setSelectionRange(n, n));
            }, 0));
    };
    handleChangeTopic = (e) => {
        (0, r.fy)({ topic: t6.Ay.translateInlineEmojiToSurrogates(e) });
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
        (0, r.fy)({ template: t6.Ay.translateInlineEmojiToSurrogates(e) });
    };
    handleChangeDefaultReactionEmoji = (e) => {
        let t =
            null == e
                ? null
                : e?.id != null
                  ? { emojiId: e.id, emojiName: void 0 }
                  : { emojiId: void 0, emojiName: e.optionallyDiverseSequence };
        (0, r.fy)({ defaultReactionEmoji: t });
    };
    handleChangeDefaultForumLayout = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        ((0, r.fy)({ defaultForumLayout: e }), this.props.handleSetDefaultLayout(e));
    };
    handleChangeDefaultSortOrder = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, r.fy)({ defaultSortOrder: e });
    };
    handleChangeDefaultTagSetting = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        (0, r.fy)({ defaultTagSetting: e });
    };
    handleChangeApplication = (e) => {
        (0, r.fy)({ applicationId: e });
    };
    handleChangeBitrate = (e) => {
        let t = 1e3 * Math.round(e / 1e3);
        t !== this.props.channel?.bitrate && (0, r.fy)({ bitrate: t });
    };
    handleUserLimitChange = (e) => {
        let t = Math.round(e);
        t !== this.props.channel?.userLimit && (0, r.fy)({ userLimit: t });
    };
    handleChannelRestrictionChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nV.lx.IS_SPOILER_CHANNEL, "spoiler" === e);
        (0, r.fy)({ nsfw: "nsfw" === e, flags: n });
    };
    handleThreadSpoilerChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nV.lx.IS_SPOILER_CHANNEL, e);
        (0, r.fy)({ flags: n });
    };
    handleNSFWChange = (e) => {
        (0, r.fy)({ nsfw: e });
    };
    handleActiveChannelsRemovedChange = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nV.lx.ACTIVE_CHANNELS_REMOVED, !e);
        (0, r.fy)({ flags: n });
    };
    handleNewsChange = (e) => {
        (0, r.fy)({ type: e ? eW.rbe.GUILD_ANNOUNCEMENT : eW.rbe.GUILD_TEXT });
    };
    handleChangeSlowmode = (e) => {
        (0, r.fy)({ rateLimitPerUser: e });
    };
    handleChangeThreadMessageSlowmode = (e) => {
        (0, r.fy)({ defaultThreadRateLimitPerUser: e });
    };
    handleChangeDefaultAutoArchiveDuration = (e) => {
        (0, r.fy)({ defaultAutoArchiveDuration: e });
    };
    handleRegionChange = (e) => {
        (0, r.fy)({ rtcRegion: e === nz ? null : e });
    };
    handleVideoQualityModeChange = (e) => {
        (0, r.fy)({ videoQualityMode: e });
    };
    handleAutoArchiveDurationChanged = (e) => {
        (0, r.fy)({ autoArchiveDuration: e });
    };
    handleInvitableChanged = (e) => {
        (0, r.fy)({ invitable: e });
    };
    handleChannelSummariesToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nV.lx.SUMMARIES_DISABLED, !e);
        (0, r.fy)({ flags: n });
    };
    handleShowMediaOptionsToggled = (e) => {
        let { channel: t } = this.props;
        if (null == t) return null;
        let n = (0, tO.lA)(t.flags, nV.lx.HIDE_MEDIA_DOWNLOAD_OPTIONS, !e);
        (0, r.fy)({ flags: n });
    };
}
function nQ() {
    let { errors: e, channel: t, submitting: n, subsection: a } = (0, s.cf)([eU.A], () => eU.A.getProps()),
        r = (0, s.bG)([tj.A], () => tj.A.getChannel(t?.parent_id ?? null)),
        o = (0, s.bG)([nM.A], () => nM.A.getRegions(t?.getGuildId() ?? null)),
        d = (0, s.bG)([tA.A], () => tA.A.theme),
        c = (0, s.bG)([Y.A], () => Y.A.getGuild(t?.getGuildId())),
        u = (0, tx.NI)(t),
        g = (0, tx.H_)(t),
        { canManageChannels: m, canSendMessages: p } = (0, s.cf)([q.A], () => ({
            canManageChannels: q.A.can(eW.xBc.MANAGE_CHANNELS, t),
            canSendMessages: q.A.can(eW.xBc.SEND_MESSAGES, t),
        })),
        x = (0, nr.Z)(),
        A = (0, h.Ay)(t),
        f = nI.default.getId(),
        C = (0, t9.p)(),
        j = t?.id,
        b = (0, tQ.cI)(t, !1, !0),
        v = i.useCallback(
            (e) => {
                null != j && C.getState().setLayoutType(j, e);
            },
            [j, C],
        );
    return (0, l.jsx)(nX, {
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
        isThreadModerator: g,
        canManageThread: u,
        subsection: a,
        isForumPost: null != t && t.isForumPost(),
        isOwner: t?.isOwner(f),
        handleSetDefaultLayout: v,
        showChannelSummariesSettings: b,
    });
}
var nY = n(885574),
    nq = n(770880),
    n$ = n(283973),
    nK = n(686042),
    n0 = n(241326);
let n2 = {
    [eW.p_A.OVERVIEW]: nY.CircleInformationIcon,
    [eW.p_A.PERMISSIONS]: nq.TextLockIcon,
    [eW.p_A.INSTANT_INVITES]: n$.UserPlusIcon,
    [eW.p_A.INTEGRATIONS]: nK.PuzzlePieceIcon,
    [eW.p_A.DELETE]: n0.TrashIcon,
};
var n5 = n(722865);
function n1(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        n = arguments.length > 2 ? arguments[2] : void 0;
    u.Ay.trackWithMetadata(eW.HAw.SETTINGS_PANE_VIEWED, {
        settings_type: "channel",
        origin_pane: t,
        destination_pane: e,
        location: n,
    });
}
class n7 extends i.PureComponent {
    componentDidMount() {
        n1(this.props.section, null, this.props.analyticsLocation);
    }
    componentWillUnmount() {
        (0, r.VN)();
    }
    componentDidUpdate(e) {
        let { formState: t, section: n } = e,
            {
                formState: l,
                section: i,
                canManageRoles: s,
                canManageChannels: a,
                canManageWebhooks: r,
                canUnlinkChannel: d,
            } = this.props;
        (a || s || r || d) &&
        (l !== eW.XlH.CLOSED || l === t) &&
        (s || i !== eW.p_A.PERMISSIONS) &&
        (r || d || i !== eW.p_A.INTEGRATIONS)
            ? i !== n && n1(i, n)
            : (0, o.jH)();
    }
    render() {
        let {
            theme: e,
            sidebarTheme: t,
            section: n,
            channel: i,
            category: s,
            canManageRoles: u,
            canManageChannels: m,
            canDeleteChannels: p,
            canManageWebhooks: x,
            canUnlinkChannel: A,
        } = this.props;
        return null == i
            ? null
            : (0, l.jsx)(d.A, {
                  theme: e,
                  sidebarTheme: t,
                  section: n ?? eW.p_A.OVERVIEW,
                  onSetSection: r.c4,
                  onClose: o.jH,
                  sections: (function (e) {
                      let {
                              channel: t,
                              category: n,
                              canManageRoles: i,
                              canManageChannels: s,
                              canDeleteChannels: d,
                              canManageWebhooks: u,
                              canUnlinkChannel: m,
                          } = e,
                          p = (0, g.gU)(t),
                          { GUILD_CATEGORY: x } = eW.rbe,
                          A = tf.Le.has(t.type),
                          f =
                              t.type === x
                                  ? eJ.intl.string(eJ.t.ifbXnL)
                                  : A
                                    ? t.isForumPost()
                                        ? eJ.intl.string(eJ.t.nEOg1N)
                                        : eJ.intl.string(eJ.t.H7vTe2)
                                    : eJ.intl.string(eJ.t["8D8Rsb"]);
                      return [
                          {
                              section: c.Fq.HEADER,
                              label:
                                  null != t
                                      ? (0, l.jsxs)("div", {
                                            className: n5.wx,
                                            children: [
                                                null != p
                                                    ? (0, l.jsx)(p, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                          className: n5.p,
                                                      })
                                                    : null,
                                                (0, l.jsx)(a.E, {
                                                    tag: "span",
                                                    variant: "body-sm/medium",
                                                    color: "none",
                                                    lineClamp: 1,
                                                    children: (0, h.m1)(t, $.default, tb.A),
                                                }),
                                                null != n
                                                    ? (0, l.jsx)(a.E, {
                                                          tag: "span",
                                                          variant: "body-xs/semibold",
                                                          color: "text-default",
                                                          lineClamp: 1,
                                                          className: n5.L1,
                                                          children: (0, h.m1)(n, $.default, tb.A),
                                                      })
                                                    : null,
                                            ],
                                        })
                                      : eJ.intl.string(eJ.t.XPDhcc),
                          },
                          {
                              section: eW.p_A.OVERVIEW,
                              label: eJ.intl.string(eJ.t["/dp6yY"]),
                              ariaLabel: eJ.intl.string(eJ.t["/dp6yY"]),
                              element: nQ,
                              notice: { element: nW, stores: [eU.A] },
                              predicate: () => !t.isModeratorReportChannel(),
                          },
                          {
                              section: eW.p_A.PERMISSIONS,
                              label: eJ.intl.string(eJ.t.xrmhRX),
                              element: tg,
                              notice: { element: eK, stores: [J.A] },
                              predicate: () => i && !A,
                          },
                          {
                              section: eW.p_A.INSTANT_INVITES,
                              label: eJ.intl.string(eJ.t["9F90ic"]),
                              element: tL,
                              type: c.Py.CUSTOM,
                              predicate: () => t.type !== x && s && !A && !t.isModeratorReportChannel(),
                          },
                          {
                              section: eW.p_A.INTEGRATIONS,
                              label: eJ.intl.string(eJ.t.s69NLF),
                              ariaLabel: eJ.intl.string(eJ.t.s69NLF),
                              element: tS,
                              notice: { stores: [tC.A], element: tT },
                              predicate: () => !((!u && !m) || t.isModeratorReportChannel()) && tf.oH.has(t.type),
                          },
                          { section: c.Fq.DIVIDER },
                          {
                              section: eW.p_A.DELETE,
                              onClick() {
                                  (0, ty.O)(t, function () {
                                      (tv._.subscribeOnce(eW.jej.LAYER_POP_COMPLETE, () => {
                                          (0, r.D3)(t.id);
                                      }),
                                          (0, o.jH)());
                                  });
                              },
                              label: f,
                              ariaLabel: f,
                              variant: "destructive",
                              predicate: () => d && !t.isModeratorReportChannel(),
                          },
                      ].map((e) => {
                          let t = n2[e.section];
                          return null != t && null == e.leadingIcon ? { ...e, leadingIcon: t } : e;
                      });
                  })({
                      channel: i,
                      category: s,
                      canManageRoles: u,
                      canManageChannels: m,
                      canDeleteChannels: p,
                      canManageWebhooks: x,
                      canUnlinkChannel: A,
                  }),
              });
    }
}
function n3() {
    let { channel: e, analyticsLocation: t } = (0, s.cf)([eU.A], () => eU.A.getProps()),
        n = (0, s.bG)([eU.A], () => eU.A.getFormState()),
        i = (0, s.bG)([eU.A], () => eU.A.getSection()),
        a = (0, s.bG)([tA.A], () => tA.A.theme),
        r = (0, tp.NC)(),
        o = (0, tx.NI)(e),
        d = (0, tx.H_)(e),
        {
            canManageChannels: c,
            canManageRoles: u,
            canManageWebhooks: h,
            canUnlinkChannel: g,
        } = (0, s.cf)([q.A], () => ({
            canManageChannels: q.A.can(eW.xBc.MANAGE_CHANNELS, e),
            canManageRoles: null != e && q.A.can(eW.xBc.MANAGE_ROLES, e),
            canManageWebhooks: null != e && q.A.can(eW.xBc.MANAGE_WEBHOOKS, e),
            canUnlinkChannel: (0, tm.n)(e, q.A),
        })),
        m = (0, s.bG)([tj.A], () => tj.A.getChannel(e?.parent_id));
    return (0, l.jsx)(n7, {
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
