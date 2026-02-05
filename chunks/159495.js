"use strict";
n.d(t, { $: () => Q, A: () => et }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(136722),
    c = n(158954),
    u = n(311907),
    h = n(36525),
    g = n(582754),
    m = n(397927),
    x = n(157559),
    A = n(308528),
    f = n(702805),
    p = n(442433),
    b = n(508384),
    C = n(155718),
    j = n(736653),
    N = n(775602),
    v = n(861197),
    _ = n(352505),
    E = n(942234),
    y = n(233993),
    S = n(260509),
    T = n(427157),
    M = n(176360),
    R = n(863036),
    I = n(696451),
    L = n(317525),
    w = n(71393),
    O = n(576705),
    G = n(287809),
    k = n(403362),
    D = n(695184),
    B = n(975571),
    P = n(562153),
    U = n(558393),
    V = n(488926),
    H = n(427262),
    F = n(786033),
    W = n(13948),
    Y = n(652215),
    Z = n(985018),
    J = n(442875),
    z = n(336389);
let Q = u.Ay.connectStores([M.A, R.A], () => {
    let e = R.A.getChannel();
    return {
        submitting: M.A.formState === Y.XlH.SUBMITTING,
        onReset() {
            (0, f.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = M.A.editedPermissionIds.reduce((e, t) => {
                let n = M.A.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, f.R$)(e.id, t);
        },
    };
})(h.A);
function X(e) {
    let { overwrite: t } = e,
        n = (0, u.bG)([M.A], () => M.A.channel),
        i = (0, u.bG)([w.A], () => (null != n ? w.A.getGuild(n.getGuildId()) : null)),
        s = (0, u.bG)([L.A], () => (null != i && null != t && t.type === C.r2.ROLE ? L.A.getRole(i.id, t.id) : void 0)),
        a = _.M.useExperiment({ guildId: n?.guild_id, location: "ChannelSettingsPermissions" }).enabled;
    if (null == n || null == i || null == t) return null;
    let { guild_id: r, id: o } = n,
        c = () => {
            if (null == w.A.getGuild(r)) return "";
            let e = t.type === C.r2.MEMBER ? G.default.getUser(t.id) : void 0,
                n = e?.username ?? "";
            return null != s ? s.name : n;
        },
        h = (e, l) => {
            if ("boolean" == typeof l) throw Error("Unexpected boolean action");
            let { allow: i, deny: s } = t;
            switch (((s = d.TF(s, e)), (i = d.TF(i, e)), l)) {
                case "ALLOW":
                    i = d.WQ(i, e);
                    break;
                case "DENY":
                    s = d.WQ(s, e);
            }
            if (O.A.can(e, n, { [t.id]: { ...t, allow: i, deny: s } })) (0, f.LA)(n, t.id, i, s);
            else {
                let e;
                if (t.type === C.r2.MEMBER) {
                    let n = G.default.getUser(t.id);
                    null != n && (e = H.Ay.getName(n));
                } else if (t.type === C.r2.ROLE) {
                    let l = w.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = L.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                F.t(e);
            }
        },
        g = (e) => {
            let t = O.A.can(Y.xBc.ADMINISTRATOR, i) || O.A.can(Y.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && y.Zq.has(e)
                ? Z.intl.string(Z.t.bTS5lf)
                : !((!d.aI(e, Y.xBc.MANAGE_ROLES) || t) && (null == e || O.A.can(e, i) || t)) &&
                      Z.intl.string(Z.t.nOtPMM);
        },
        p = t.id === r,
        b = n.isForumLikeChannel() && d.zy(t.deny, Y.xBc.SEND_MESSAGES),
        j = d.zy(t.deny, Y.xBc.SEND_MESSAGES),
        N = d.zy(t.deny, Y.xBc.READ_MESSAGE_HISTORY),
        S = U.A.generateChannelPermissionSpec(r, n, p, {
            createPostsDisabled: b,
            sendMessagesDisabled: j,
            readMessageHistoryDisabled: N,
            inGameMentionsExperiment: a,
        });
    return (0, l.jsxs)(v.Ay.Content, {
        className: J.uA,
        children: [
            S.map((e, n) =>
                (0, l.jsx)(
                    E.A,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: h,
                        permissionRender: g,
                        className: J.p2,
                        guildId: r,
                    },
                    n,
                ),
            ),
            r === t.id
                ? null
                : (0, l.jsx)(m.Button, {
                      variant: "critical-secondary",
                      text: Z.intl.format(Z.t.txPV7k, { name: c() }),
                      onClick: () => {
                          let e = c();
                          x.A.show({
                              title: Z.intl.string(Z.t.GuPYQB),
                              body: Z.intl.format(Z.t.xERCnZ, { name: e }),
                              cancelText: Z.intl.string(Z.t["ETE/oC"]),
                              onConfirm: () => A.A.clearPermissionOverwrite(o, t.id),
                          });
                      },
                  }),
        ],
    });
}
function q(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = P.Ay.getNickname(t, n, i),
        o = H.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: J.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(m.euF, {
                              className: J.PX,
                              size: m._3J.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(m.Text, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: a()(z.uN, J.mG),
            children: [
                (0, l.jsx)(m.euF, { size: m._3J.SIZE_32, src: s, "aria-label": i.username, className: J.RJ }),
                (0, l.jsxs)("div", {
                    className: J.F0,
                    children: [(0, l.jsx)(m.Text, { className: J.F0, variant: "text-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function $(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function K(e) {
    let { guild: t, channel: n, permissionOverwrites: s, onClose: r, onSelect: d } = e,
        h = (0, u.bG)([L.A], () => L.A.getSortedRoles(t.id)),
        g = (0, u.yK)([I.Ay], () => I.Ay.getMemberIds(t.id)),
        x = i.useMemo(
            () => [
                ...h.filter((e) => null == s[e.id]),
                ...o()(g)
                    .map(G.default.getUser)
                    .filter(k.Vq)
                    .filter((e) => null == s[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [g, s, h],
        );
    return (0, l.jsx)(c.lGe, {
        className: J.Nd,
        children: (0, l.jsxs)(m.iS7, {
            selectionMode: "single",
            onSelectionChange: (e) => {
                null != e && ($(e) ? d(e.id, C.r2.ROLE) : e instanceof T.A && d(e.id, C.r2.MEMBER), r());
            },
            options: x,
            formatOption: (e) => ({ id: e.id, value: e, label: $(e) ? e.name : H.Ay.getUserTag(e) }),
            children: [
                (0, l.jsx)("div", {
                    className: J.ON,
                    children: (0, l.jsx)(m.a32, {
                        label: Z.intl.string(Z.t.lT5Zth),
                        placeholder: Z.intl.string(Z.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: (e) => {
                            let n = e.target.value;
                            D.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(m.X2W, {
                    renderListItem: (e) => {
                        let { value: i } = e;
                        if ($(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: a()(z.uN, J.xf),
                                    children: [
                                        (0, l.jsx)(m.Text, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: J.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(m.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: Z.intl.string(Z.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof T.A) return (0, l.jsx)(q, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function ee() {
    let e,
        t = i.useRef(null),
        { channel: s, permissionOverwrites: a, selectedOverwriteId: r } = (0, u.cf)([M.A], () => M.A),
        d = s?.getGuildId(),
        { guild: c, sortedGuildRoles: h } = (0, u.cf)([w.A, L.A], () => {
            let e = null != d ? w.A.getGuild(d) : void 0,
                t = null != e ? L.A.getSortedRoles(e.id) : void 0;
            return { guild: e, sortedGuildRoles: t };
        }, [d]),
        _ = (0, W.A)(d, a),
        E = (0, j.Ay)(),
        y = (0, u.bG)([N.A], () => N.A.roleStyle),
        T = i.useCallback(
            (e, t) => {
                if (null == s) return null;
                (0, p.L3)(e, async () => {
                    let { id: e, role: i, name: a } = t,
                        r = null != c ? (0, S.af)(c) : null,
                        o = null != i && r === i.id,
                        { default: d } = await n.e("77168").then(n.bind(n, 495603));
                    return (t) =>
                        (0, l.jsx)(d, {
                            ...t,
                            id: e,
                            role: i,
                            handleDeletePermission: o
                                ? void 0
                                : () => {
                                      x.A.show({
                                          title: Z.intl.string(Z.t.GuPYQB),
                                          body: Z.intl.format(Z.t.xERCnZ, { name: a }),
                                          cancelText: Z.intl.string(Z.t["ETE/oC"]),
                                          onConfirm: () => A.A.clearPermissionOverwrite(s.id, e),
                                      });
                                  },
                        });
                });
            },
            [s, c],
        );
    if (null == c || null == h || null == s || null == a) return null;
    let R = (e, t) => {
        A.A.updatePermissionOverwrite(s.id, { id: e, type: t, allow: V.x3, deny: V.x3 }).then(() => (0, f.G9)(e));
    };
    null != a && null == a[c.id] && (a[c.id] = V.xT(c.id));
    let I = h
            .filter((e) => a[e.id]?.type === C.r2.ROLE)
            .map((e) =>
                (0, l.jsx)(
                    b.A,
                    {
                        theme: E,
                        roleStyle: y,
                        id: e.id,
                        role: e,
                        guild: c,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) => T(t, { id: e.id, name: e.name, role: e }),
                        children: e.name,
                    },
                    `${r}-${e.id}`,
                ),
            ),
        O = o()(_)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(c.id, 24);
                return (0, l.jsx)(
                    b.A,
                    {
                        id: e.id,
                        guild: c,
                        theme: E,
                        roleStyle: y,
                        "aria-label": H.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => T(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: J.mG,
                            children: [
                                (0, l.jsx)(m.euF, {
                                    size: m._3J.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: J.bE,
                                }),
                                (0, l.jsx)("span", { className: J.Xh, children: H.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${r}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(v.Ay.Sidebar, {
        className: J.uA,
        scrollable: !0,
        children: (0, l.jsxs)(m.VQ0, {
            onItemSelect: f.G9,
            selectedItem: r,
            orientation: "vertical",
            children: [
                ((e = (0, g.Mw)(E) ? n(546716) : n(233497)),
                (0, l.jsx)(m.YNO, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: n } = e;
                        return (0, l.jsx)(K, {
                            guild: c,
                            channel: s,
                            permissionOverwrites: a,
                            position: null != t ? t : "bottom",
                            onSelect: R,
                            onClose: n,
                        });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (n) =>
                        (0, l.jsx)(m.VQ0.Header, {
                            ref: t,
                            ...n,
                            children: (0, l.jsxs)("div", {
                                className: J.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [Z.intl.string(Z.t["LPJmL/"]), "/", Z.intl.string(Z.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: J.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                I,
                O,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(m.VQ0.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(m.MzZ, {
                            href: B.A.getArticleURL(Y.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: Z.intl.string(Z.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function et() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, u.cf)([M.A], () => M.A);
    if (
        null == (0, u.bG)([w.A], () => (null != e ? w.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(v.Ay, { className: J.kL, children: [(0, l.jsx)(ee, {}), (0, l.jsx)(X, { overwrite: i })] });
}
