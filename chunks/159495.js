"use strict";
n.d(t, { $: () => Z, A: () => ee }), n(321073);
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
    p = n(308528),
    A = n(702805),
    f = n(442433),
    C = n(508384),
    b = n(155718),
    j = n(736653),
    N = n(775602),
    v = n(861197),
    _ = n(942234),
    y = n(233993),
    T = n(260509),
    E = n(427157),
    S = n(176360),
    I = n(863036),
    M = n(696451),
    R = n(317525),
    L = n(71393),
    w = n(576705),
    O = n(287809),
    G = n(403362),
    k = n(695184),
    D = n(975571),
    B = n(562153),
    P = n(558393),
    U = n(488926),
    V = n(427262),
    H = n(786033),
    F = n(13948),
    Y = n(652215),
    W = n(985018),
    J = n(17586),
    z = n(329296);
let Z = u.Ay.connectStores([S.A, I.A], () => {
    let e = I.A.getChannel();
    return {
        submitting: S.A.formState === Y.XlH.SUBMITTING,
        onReset() {
            (0, A.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = S.A.editedPermissionIds.reduce((e, t) => {
                let n = S.A.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, A.R$)(e.id, t);
        },
    };
})(h.A);
function Q(e) {
    let { overwrite: t } = e,
        n = (0, u.bG)([S.A], () => S.A.channel),
        i = (0, u.bG)([L.A], () => (null != n ? L.A.getGuild(n.getGuildId()) : null)),
        s = (0, u.bG)([R.A], () => (null != i && null != t && t.type === b.r2.ROLE ? R.A.getRole(i.id, t.id) : void 0));
    if (null == n || null == i || null == t) return null;
    let { guild_id: a, id: r } = n,
        o = () => {
            if (null == L.A.getGuild(a)) return "";
            let e = t.type === b.r2.MEMBER ? O.default.getUser(t.id) : void 0,
                n = e?.username ?? "";
            return null != s ? s.name : n;
        },
        c = (e, l) => {
            if ("boolean" == typeof l) throw Error("Unexpected boolean action");
            let { allow: i, deny: s } = t;
            switch (((s = d.TF(s, e)), (i = d.TF(i, e)), l)) {
                case "ALLOW":
                    i = d.WQ(i, e);
                    break;
                case "DENY":
                    s = d.WQ(s, e);
            }
            if (w.A.can(e, n, { [t.id]: { ...t, allow: i, deny: s } })) (0, A.LA)(n, t.id, i, s);
            else {
                let e;
                if (t.type === b.r2.MEMBER) {
                    let n = O.default.getUser(t.id);
                    null != n && (e = V.Ay.getName(n));
                } else if (t.type === b.r2.ROLE) {
                    let l = L.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = R.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                H.t(e);
            }
        },
        h = (e) => {
            let t = w.A.can(Y.xBc.ADMINISTRATOR, i) || w.A.can(Y.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && y.Zq.has(e)
                ? W.intl.string(W.t.bTS5lf)
                : !((!d.aI(e, Y.xBc.MANAGE_ROLES) || t) && (null == e || w.A.can(e, i) || t)) &&
                      W.intl.string(W.t.nOtPMM);
        },
        g = t.id === a,
        f = n.isForumLikeChannel() && d.zy(t.deny, Y.xBc.SEND_MESSAGES),
        C = d.zy(t.deny, Y.xBc.SEND_MESSAGES),
        j = d.zy(t.deny, Y.xBc.READ_MESSAGE_HISTORY),
        N = P.A.generateChannelPermissionSpec(a, n, g, {
            createPostsDisabled: f,
            sendMessagesDisabled: C,
            readMessageHistoryDisabled: j,
        });
    return (0, l.jsxs)(v.Ay.Content, {
        className: J.uA,
        children: [
            N.map((e, n) =>
                (0, l.jsx)(
                    _.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: c, permissionRender: h, className: J.p2 },
                    n,
                ),
            ),
            a === t.id
                ? null
                : (0, l.jsx)(m.Button, {
                      variant: "critical-secondary",
                      text: W.intl.format(W.t.txPV7k, { name: o() }),
                      onClick: () => {
                          let e = o();
                          x.A.show({
                              title: W.intl.string(W.t.GuPYQB),
                              body: W.intl.format(W.t.xERCnZ, { name: e }),
                              cancelText: W.intl.string(W.t["ETE/oC"]),
                              onConfirm: () => p.A.clearPermissionOverwrite(r, t.id),
                          });
                      },
                  }),
        ],
    });
}
function X(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = B.Ay.getNickname(t, n, i),
        o = V.Ay.useUserTag(i),
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
function q(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function $(e) {
    let { guild: t, channel: n, permissionOverwrites: s, onClose: r, onSelect: d } = e,
        h = (0, u.bG)([R.A], () => R.A.getSortedRoles(t.id)),
        g = (0, u.yK)([M.Ay], () => M.Ay.getMemberIds(t.id)),
        x = i.useMemo(
            () => [
                ...h.filter((e) => null == s[e.id]),
                ...o()(g)
                    .map(O.default.getUser)
                    .filter(G.Vq)
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
                null != e && (q(e) ? d(e.id, b.r2.ROLE) : e instanceof E.A && d(e.id, b.r2.MEMBER), r());
            },
            options: x,
            formatOption: (e) => ({ id: e.id, value: e, label: q(e) ? e.name : V.Ay.getUserTag(e) }),
            children: [
                (0, l.jsx)("div", {
                    className: J.ON,
                    children: (0, l.jsx)(m.a32, {
                        label: W.intl.string(W.t.lT5Zth),
                        placeholder: W.intl.string(W.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: (e) => {
                            let n = e.target.value;
                            k.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(m.X2W, {
                    renderListItem: (e) => {
                        let { value: i } = e;
                        if (q(i)) {
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
                                            children: W.intl.string(W.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof E.A) return (0, l.jsx)(X, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function K() {
    let e,
        t = i.useRef(null),
        { channel: s, permissionOverwrites: a, selectedOverwriteId: r } = (0, u.cf)([S.A], () => S.A),
        d = s?.getGuildId(),
        { guild: c, sortedGuildRoles: h } = (0, u.cf)([L.A, R.A], () => {
            let e = null != d ? L.A.getGuild(d) : void 0,
                t = null != e ? R.A.getSortedRoles(e.id) : void 0;
            return { guild: e, sortedGuildRoles: t };
        }, [d]),
        _ = (0, F.A)(d, a),
        y = (0, j.Ay)(),
        E = (0, u.bG)([N.A], () => N.A.roleStyle),
        I = i.useCallback(
            (e, t) => {
                if (null == s) return null;
                (0, f.L3)(e, async () => {
                    let { id: e, role: i, name: a } = t,
                        r = null != c ? (0, T.af)(c) : null,
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
                                          title: W.intl.string(W.t.GuPYQB),
                                          body: W.intl.format(W.t.xERCnZ, { name: a }),
                                          cancelText: W.intl.string(W.t["ETE/oC"]),
                                          onConfirm: () => p.A.clearPermissionOverwrite(s.id, e),
                                      });
                                  },
                        });
                });
            },
            [s, c],
        );
    if (null == c || null == h || null == s || null == a) return null;
    let M = (e, t) => {
        p.A.updatePermissionOverwrite(s.id, { id: e, type: t, allow: U.x3, deny: U.x3 }).then(() => (0, A.G9)(e));
    };
    null != a && null == a[c.id] && (a[c.id] = U.xT(c.id));
    let w = h
            .filter((e) => a[e.id]?.type === b.r2.ROLE)
            .map((e) =>
                (0, l.jsx)(
                    C.A,
                    {
                        theme: y,
                        roleStyle: E,
                        id: e.id,
                        role: e,
                        guild: c,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) => I(t, { id: e.id, name: e.name, role: e }),
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
                    C.A,
                    {
                        id: e.id,
                        guild: c,
                        theme: y,
                        roleStyle: E,
                        "aria-label": V.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => I(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: J.mG,
                            children: [
                                (0, l.jsx)(m.euF, {
                                    size: m._3J.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: J.bE,
                                }),
                                (0, l.jsx)("span", { className: J.Xh, children: V.Ay.getUserTag(e) }),
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
            onItemSelect: A.G9,
            selectedItem: r,
            orientation: "vertical",
            children: [
                ((e = (0, g.Mw)(y) ? n(546716) : n(233497)),
                (0, l.jsx)(m.YNO, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: n } = e;
                        return (0, l.jsx)($, {
                            guild: c,
                            channel: s,
                            permissionOverwrites: a,
                            position: null != t ? t : "bottom",
                            onSelect: M,
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
                                        children: [W.intl.string(W.t["LPJmL/"]), "/", W.intl.string(W.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: J.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                w,
                O,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(m.VQ0.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(m.MzZ, {
                            href: D.A.getArticleURL(Y.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(m.Text, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: W.intl.string(W.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function ee() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, u.cf)([S.A], () => S.A);
    if (
        null == (0, u.bG)([L.A], () => (null != e ? L.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(v.Ay, { className: J.kL, children: [(0, l.jsx)(K, {}), (0, l.jsx)(Q, { overwrite: i })] });
}
