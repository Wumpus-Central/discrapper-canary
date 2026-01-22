n.d(t, {
    $: () => $,
    A: () => er,
}),
    n(321073),
    n(65821),
    n(896048);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    c = n(136722),
    d = n(158954),
    u = n(311907),
    h = n(36525),
    g = n(389723),
    m = n(582754),
    f = n(397927),
    p = n(157559),
    b = n(308528),
    x = n(702805),
    j = n(442433),
    A = n(508384),
    y = n(155718),
    v = n(736653),
    O = n(775602),
    C = n(386849),
    N = n(861197),
    E = n(352505),
    S = n(942234),
    T = n(233993),
    w = n(260509),
    M = n(427157),
    R = n(176360),
    I = n(863036),
    L = n(696451),
    P = n(317525),
    _ = n(71393),
    D = n(576705),
    k = n(287809),
    G = n(403362),
    B = n(695184),
    U = n(975571),
    V = n(562153),
    H = n(558393),
    F = n(488926),
    W = n(427262),
    Z = n(786033),
    Y = n(13948),
    J = n(652215),
    z = n(985018),
    Q = n(442875),
    X = n(336389);
function q(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function K(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, l);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let $ = u.Ay.connectStores([R.A, I.A], () => {
    let e = I.A.getChannel();
    return {
        submitting: R.A.formState === J.XlH.SUBMITTING,
        onReset() {
            (0, x.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = R.A.editedPermissionIds.reduce((e, t) => {
                let n = R.A.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, x.R$)(e.id, t);
        },
    };
})(h.A);
function ee(e) {
    let { overwrite: t } = e,
        n = (0, u.bG)([R.A], () => R.A.channel),
        i = (0, u.bG)([_.A], () => (null != n ? _.A.getGuild(n.getGuildId()) : null)),
        r = (0, u.bG)([P.A], () => (null != i && null != t && t.type === y.r2.ROLE ? P.A.getRole(i.id, t.id) : void 0)),
        s = E.M.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: "ChannelSettingsPermissions",
        }).enabled,
        { enabled: a } = C.A.useExperiment({
            location: "ChannelSettingsPermissionsContent",
            guildId: null == n ? void 0 : n.guild_id,
        });
    if (null == n || null == i || null == t) return null;
    let { guild_id: o, id: d } = n,
        h = () => {
            var e;
            if (null == _.A.getGuild(o)) return "";
            let n = t.type === y.r2.MEMBER ? k.default.getUser(t.id) : void 0,
                l = null != (e = null == n ? void 0 : n.username) ? e : "";
            return null != r ? r.name : l;
        },
        g = (e, l) => {
            if ("boolean" == typeof l) throw Error("Unexpected boolean action");
            let { allow: i, deny: r } = t;
            switch (((r = c.TF(r, e)), (i = c.TF(i, e)), l)) {
                case "ALLOW":
                    i = c.WQ(i, e);
                    break;
                case "DENY":
                    r = c.WQ(r, e);
            }
            if (
                D.A.can(e, n, {
                    [t.id]: K(q({}, t), {
                        allow: i,
                        deny: r,
                    }),
                })
            )
                (0, x.LA)(n, t.id, i, r);
            else {
                let e;
                if (t.type === y.r2.MEMBER) {
                    let n = k.default.getUser(t.id);
                    null != n && (e = W.Ay.getName(n));
                } else if (t.type === y.r2.ROLE) {
                    let l = _.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = P.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                Z.t(e);
            }
        },
        m = (e) => {
            let t = D.A.can(J.xBc.ADMINISTRATOR, i) || D.A.can(J.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && T.Zq.has(e)
                ? z.intl.string(z.t.bTS5lf)
                : !((!c.aI(e, J.xBc.MANAGE_ROLES) || t) && (null == e || D.A.can(e, i) || t)) &&
                      z.intl.string(z.t.nOtPMM);
        },
        j = t.id === o,
        A = n.isForumLikeChannel() && c.zy(t.deny, J.xBc.SEND_MESSAGES),
        v = c.zy(t.deny, J.xBc.SEND_MESSAGES),
        O = c.zy(t.deny, J.xBc.READ_MESSAGE_HISTORY),
        w = H.A.generateChannelPermissionSpec(o, n, j, {
            createPostsDisabled: A,
            sendMessagesDisabled: v,
            readMessageHistoryDisabled: O,
            inGameMentionsExperiment: s,
        });
    return (0, l.jsxs)(N.Ay.Content, {
        className: Q.uA,
        children: [
            w.map((e, n) =>
                (0, l.jsx)(
                    S.A,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: g,
                        permissionRender: m,
                        className: Q.p2,
                        hasBypassSlowmodePermission: a,
                        guildId: o,
                    },
                    n,
                ),
            ),
            o === t.id
                ? null
                : (0, l.jsx)(f.Button, {
                      variant: "critical-secondary",
                      text: z.intl.format(z.t.txPV7k, { name: h() }),
                      onClick: () => {
                          let e = h();
                          p.A.show({
                              title: z.intl.string(z.t.GuPYQB),
                              body: z.intl.format(z.t.xERCnZ, { name: e }),
                              cancelText: z.intl.string(z.t["ETE/oC"]),
                              onConfirm: () => b.A.clearPermissionOverwrite(d, t.id),
                          });
                      },
                  }),
        ],
    });
}
function et(e) {
    let { guildId: t, channelId: n, user: i } = e,
        r = i.getAvatarURL(t, 32),
        a = V.Ay.getNickname(t, n, i),
        o = W.Ay.useUserTag(i),
        c = null,
        d = null;
    return (
        (c = null != a ? a : i.hasAvatarForGuild(t) ? i.username : o),
        (null != a || i.hasAvatarForGuild(t)) &&
            (d = (0, l.jsxs)("div", {
                className: Q.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(f.euF, {
                              className: Q.PX,
                              size: f._3J.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(f.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: o,
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: s()(X.uN, Q.mG),
            children: [
                (0, l.jsx)(f.euF, {
                    size: f._3J.SIZE_32,
                    src: r,
                    "aria-label": i.username,
                    className: Q.RJ,
                }),
                (0, l.jsxs)("div", {
                    className: Q.F0,
                    children: [
                        (0, l.jsx)(f.Text, {
                            className: Q.F0,
                            variant: "text-md/normal",
                            children: c,
                        }),
                        d,
                    ],
                }),
            ],
        })
    );
}
function en(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function el(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: a, onSelect: c } = e,
        h = (0, u.bG)([P.A], () => P.A.getSortedRoles(t.id)),
        m = (0, u.yK)([L.Ay], () => L.Ay.getMemberIds(t.id)),
        p = i.useMemo(
            () => [
                ...h.filter((e) => null == r[e.id]),
                ...o()(m)
                    .map(k.default.getUser)
                    .filter(G.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [m, r, h],
        );
    return (0, l.jsx)(d.lGe, {
        className: Q.Nd,
        children: (0, l.jsxs)(g.iS, {
            selectionMode: "single",
            onSelectionChange: (e) => {
                null != e && (en(e) ? c(e.id, y.r2.ROLE) : e instanceof M.A && c(e.id, y.r2.MEMBER), a());
            },
            options: p,
            formatOption: (e) => ({
                id: e.id,
                value: e,
                label: en(e) ? e.name : W.Ay.getUserTag(e),
            }),
            children: [
                (0, l.jsx)("div", {
                    className: Q.ON,
                    children: (0, l.jsx)(g.a3, {
                        label: z.intl.string(z.t.lT5Zth),
                        placeholder: z.intl.string(z.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: (e) => {
                            let n = e.target.value;
                            B.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(g.X2, {
                    renderListItem: (e) => {
                        let { value: i } = e;
                        if (en(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: s()(X.uN, Q.xf),
                                    children: [
                                        (0, l.jsx)(f.Text, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: Q.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(f.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: z.intl.string(z.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof M.A)
                            return (0, l.jsx)(et, {
                                guildId: t.id,
                                channelId: n.id,
                                user: i,
                            });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function ei() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: s, selectedOverwriteId: a } = (0, u.cf)([R.A], () => R.A),
        c = null == r ? void 0 : r.getGuildId(),
        { guild: d, sortedGuildRoles: h } = (0, u.cf)([_.A, P.A], () => {
            let e = null != c ? _.A.getGuild(c) : void 0,
                t = null != e ? P.A.getSortedRoles(e.id) : void 0;
            return {
                guild: e,
                sortedGuildRoles: t,
            };
        }, [c]),
        g = (0, Y.A)(c, s),
        C = (0, v.Ay)(),
        E = (0, u.bG)([O.A], () => O.A.roleStyle),
        S = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, j.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != d ? (0, w.af)(d) : null,
                        o = null != i && a === i.id,
                        { default: c } = await n.e("77168").then(n.bind(n, 495603));
                    return (t) =>
                        (0, l.jsx)(
                            c,
                            K(q({}, t), {
                                id: e,
                                role: i,
                                handleDeletePermission: o
                                    ? void 0
                                    : () => {
                                          p.A.show({
                                              title: z.intl.string(z.t.GuPYQB),
                                              body: z.intl.format(z.t.xERCnZ, { name: s }),
                                              cancelText: z.intl.string(z.t["ETE/oC"]),
                                              onConfirm: () => b.A.clearPermissionOverwrite(r.id, e),
                                          });
                                      },
                            }),
                        );
                });
            },
            [r, d],
        );
    if (null == d || null == h || null == r || null == s) return null;
    let T = (e, t) => {
        b.A.updatePermissionOverwrite(r.id, {
            id: e,
            type: t,
            allow: F.x3,
            deny: F.x3,
        }).then(() => (0, x.G9)(e));
    };
    null != s && null == s[d.id] && (s[d.id] = F.xT(d.id));
    let M = h
            .filter((e) => {
                var t;
                return (null == (t = s[e.id]) ? void 0 : t.type) === y.r2.ROLE;
            })
            .map((e) =>
                (0, l.jsx)(
                    A.A,
                    {
                        theme: C,
                        roleStyle: E,
                        id: e.id,
                        role: e,
                        guild: d,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) =>
                            S(t, {
                                id: e.id,
                                name: e.name,
                                role: e,
                            }),
                        children: e.name,
                    },
                    "".concat(a, "-").concat(e.id),
                ),
            ),
        I = o()(g)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(d.id, 24);
                return (0, l.jsx)(
                    A.A,
                    {
                        id: e.id,
                        guild: d,
                        theme: C,
                        roleStyle: E,
                        "aria-label": W.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) =>
                            S(t, {
                                id: e.id,
                                name: e.username,
                            }),
                        children: (0, l.jsxs)("div", {
                            className: Q.mG,
                            children: [
                                (0, l.jsx)(f.euF, {
                                    size: f._3J.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: Q.bE,
                                }),
                                (0, l.jsx)("span", {
                                    className: Q.Xh,
                                    children: W.Ay.getUserTag(e),
                                }),
                            ],
                        }),
                    },
                    "".concat(a, "-").concat(e.id),
                );
            })
            .value();
    return (0, l.jsx)(N.Ay.Sidebar, {
        className: Q.uA,
        scrollable: !0,
        children: (0, l.jsxs)(f.VQ0, {
            onItemSelect: x.G9,
            selectedItem: a,
            orientation: "vertical",
            children: [
                ((e = (0, m.Mw)(C) ? n(546716) : n(233497)),
                (0, l.jsx)(f.YNO, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: n } = e;
                        return (0, l.jsx)(el, {
                            guild: d,
                            channel: r,
                            permissionOverwrites: s,
                            position: null != t ? t : "bottom",
                            onSelect: T,
                            onClose: n,
                        });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (n) =>
                        (0, l.jsx)(
                            f.VQ0.Header,
                            K(q({ ref: t }, n), {
                                children: (0, l.jsxs)("div", {
                                    className: Q.$M,
                                    children: [
                                        (0, l.jsxs)("span", {
                                            children: [z.intl.string(z.t["LPJmL/"]), "/", z.intl.string(z.t["9Oq93m"])],
                                        }),
                                        (0, l.jsx)("img", {
                                            alt: "",
                                            className: Q.aN,
                                            src: e,
                                        }),
                                    ],
                                }),
                            }),
                        ),
                })),
                M,
                I,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(f.VQ0.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14,
                            },
                        }),
                        (0, l.jsx)(f.MzZ, {
                            href: U.A.getArticleURL(J.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: z.intl.string(z.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function er() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, u.cf)([R.A], () => R.A);
    if (
        null == (0, u.bG)([_.A], () => (null != e ? _.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(N.Ay, {
        className: Q.kL,
        children: [(0, l.jsx)(ei, {}), (0, l.jsx)(ee, { overwrite: i })],
    });
}
