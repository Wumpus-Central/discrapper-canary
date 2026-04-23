"use strict";
n.d(t, { $: () => et, A: () => er }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    d = n(136722),
    c = n(113325),
    u = n(311907),
    h = n(36525),
    g = n(462887),
    m = n(821609),
    x = n(97808),
    p = n(778712),
    A = n(834730),
    f = n(389723),
    b = n(265872),
    _ = n(761508),
    C = n(349288),
    j = n(157559),
    v = n(308528),
    N = n(702805),
    S = n(442433),
    E = n(508384),
    y = n(155718),
    T = n(736653),
    R = n(775602),
    I = n(861197),
    M = n(942234),
    L = n(233993),
    w = n(260509),
    O = n(427157),
    k = n(176360),
    D = n(863036),
    G = n(696451),
    B = n(317525),
    U = n(71393),
    P = n(576705),
    V = n(287809),
    H = n(403362),
    F = n(695184),
    z = n(975571),
    W = n(562153),
    Z = n(558393),
    Y = n(488926),
    J = n(427262),
    X = n(786033),
    $ = n(13948),
    Q = n(652215),
    q = n(985018),
    K = n(17586),
    ee = n(329296);
let et = u.Ay.connectStores([k.A, D.A], () => {
    let e = D.A.getChannel();
    return {
        submitting: k.A.formState === Q.XlH.SUBMITTING,
        onReset() {
            (0, N.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = k.A.editedPermissionIds.reduce((e, t) => {
                let n = k.A.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, N.R$)(e.id, t);
        },
    };
})(h.A);
function en(e) {
    let { overwrite: t } = e,
        n = (0, u.bG)([k.A], () => k.A.channel),
        i = (0, u.bG)([U.A], () => (null != n ? U.A.getGuild(n.getGuildId()) : null)),
        s = (0, u.bG)([B.A], () => (null != i && null != t && t.type === y.r2.ROLE ? B.A.getRole(i.id, t.id) : void 0));
    if (null == n || null == i || null == t) return null;
    let { guild_id: a, id: r } = n,
        o = () => {
            if (null == U.A.getGuild(a)) return "";
            let e = t.type === y.r2.MEMBER ? V.default.getUser(t.id) : void 0,
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
            if (P.A.can(e, n, { [t.id]: { ...t, allow: i, deny: s } })) (0, N.LA)(n, t.id, i, s);
            else {
                let e;
                if (t.type === y.r2.MEMBER) {
                    let n = V.default.getUser(t.id);
                    null != n && (e = J.Ay.getName(n));
                } else if (t.type === y.r2.ROLE) {
                    let l = U.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = B.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                X.t(e);
            }
        },
        h = (e) => {
            let t = P.A.can(Q.xBc.ADMINISTRATOR, i) || P.A.can(Q.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && L.Zq.has(e)
                ? q.intl.string(q.t.bTS5lf)
                : !((!d.aI(e, Q.xBc.MANAGE_ROLES) || t) && (null == e || P.A.can(e, i) || t)) &&
                      q.intl.string(q.t.nOtPMM);
        },
        g = t.id === a,
        x = n.isForumLikeChannel() && d.zy(t.deny, Q.xBc.SEND_MESSAGES),
        p = d.zy(t.deny, Q.xBc.SEND_MESSAGES),
        A = d.zy(t.deny, Q.xBc.READ_MESSAGE_HISTORY),
        f = Z.A.generateChannelPermissionSpec(a, n, g, {
            createPostsDisabled: x,
            sendMessagesDisabled: p,
            readMessageHistoryDisabled: A,
        });
    return (0, l.jsxs)(I.Ay.Content, {
        className: K.uA,
        children: [
            f.map((e, n) =>
                (0, l.jsx)(
                    M.A,
                    { spec: e, allow: t.allow, deny: t.deny, onChange: c, permissionRender: h, className: K.p2 },
                    n,
                ),
            ),
            a === t.id
                ? null
                : (0, l.jsx)(m.$, {
                      variant: "critical-secondary",
                      text: q.intl.format(q.t.txPV7k, { name: o() }),
                      onClick: () => {
                          let e = o();
                          j.A.show({
                              title: q.intl.string(q.t.GuPYQB),
                              body: q.intl.format(q.t.xERCnZ, { name: e }),
                              cancelText: q.intl.string(q.t["ETE/oC"]),
                              onConfirm: () => v.A.clearPermissionOverwrite(r, t.id),
                          });
                      },
                  }),
        ],
    });
}
function el(e) {
    let { guildId: t, channelId: n, user: i } = e,
        s = i.getAvatarURL(t, 32),
        r = W.Ay.getNickname(t, n, i),
        o = J.Ay.useUserTag(i),
        d = null,
        c = null;
    return (
        (d = null != r ? r : i.hasAvatarForGuild(t) ? i.username : o),
        (null != r || i.hasAvatarForGuild(t)) &&
            (c = (0, l.jsxs)("div", {
                className: K.BP,
                children: [
                    i.hasAvatarForGuild(t)
                        ? (0, l.jsx)(x.eu, {
                              className: K.PX,
                              size: p._3.SIZE_16,
                              src: i.getAvatarURL(void 0, 16),
                              "aria-label": i.username,
                          })
                        : null,
                    (0, l.jsx)(A.E, { variant: "text-xs/normal", color: "text-muted", children: o }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: a()(ee.uN, K.mG),
            children: [
                (0, l.jsx)(x.eu, { size: p._3.SIZE_32, src: s, "aria-label": i.username, className: K.RJ }),
                (0, l.jsxs)("div", {
                    className: K.F0,
                    children: [(0, l.jsx)(A.E, { className: K.F0, variant: "text-md/normal", children: d }), c],
                }),
            ],
        })
    );
}
function ei(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}
function es(e) {
    let { guild: t, channel: n, permissionOverwrites: s, onClose: r, onSelect: d } = e,
        h = (0, u.bG)([B.A], () => B.A.getSortedRoles(t.id)),
        g = (0, u.yK)([G.Ay], () => G.Ay.getMemberIds(t.id)),
        m = i.useMemo(
            () => [
                ...h.filter((e) => null == s[e.id]),
                ...o()(g)
                    .map(V.default.getUser)
                    .filter(H.Vq)
                    .filter((e) => null == s[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [g, s, h],
        );
    return (0, l.jsx)(c.l, {
        className: K.Nd,
        children: (0, l.jsxs)(f.iS, {
            selectionMode: "single",
            onSelectionChange: (e) => {
                null != e && (ei(e) ? d(e.id, y.r2.ROLE) : e instanceof O.A && d(e.id, y.r2.MEMBER), r());
            },
            options: m,
            formatOption: (e) => ({ id: e.id, value: e, label: ei(e) ? e.name : J.Ay.getUserTag(e) }),
            children: [
                (0, l.jsx)("div", {
                    className: K.ON,
                    children: (0, l.jsx)(f.a3, {
                        label: q.intl.string(q.t.lT5Zth),
                        placeholder: q.intl.string(q.t.V2pZRh),
                        showChevronButton: !1,
                        onQueryChange: (e) => {
                            let n = e.target.value;
                            F.A.requestMembers(t.id, n, 20);
                        },
                    }),
                }),
                (0, l.jsx)(f.X2, {
                    renderListItem: (e) => {
                        let { value: i } = e;
                        if (ei(i)) {
                            let e;
                            return (
                                null != i.colorString && (e = { color: i.colorString }),
                                (0, l.jsxs)("div", {
                                    className: a()(ee.uN, K.xf),
                                    children: [
                                        (0, l.jsx)(A.E, {
                                            variant: "text-md/medium",
                                            color: "text-strong",
                                            className: K.S3,
                                            style: e,
                                            children: i.name,
                                        }),
                                        (0, l.jsx)(A.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: q.intl.string(q.t.IqVT2L),
                                        }),
                                    ],
                                })
                            );
                        }
                        if (i instanceof O.A) return (0, l.jsx)(el, { guildId: t.id, channelId: n.id, user: i });
                    },
                    maxVisibleItems: 7,
                }),
            ],
        }),
    });
}
function ea() {
    let e,
        t = i.useRef(null),
        { channel: s, permissionOverwrites: a, selectedOverwriteId: r } = (0, u.cf)([k.A], () => k.A),
        d = s?.getGuildId(),
        { guild: c, sortedGuildRoles: h } = (0, u.cf)([U.A, B.A], () => {
            let e = null != d ? U.A.getGuild(d) : void 0,
                t = null != e ? B.A.getSortedRoles(e.id) : void 0;
            return { guild: e, sortedGuildRoles: t };
        }, [d]),
        m = (0, $.A)(d, a),
        f = (0, T.Ay)(),
        M = (0, u.bG)([R.A], () => R.A.roleStyle),
        L = i.useCallback(
            (e, t) => {
                if (null == s) return null;
                (0, S.L3)(e, async () => {
                    let { id: e, role: i, name: a } = t,
                        r = null != c ? (0, w.af)(c) : null,
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
                                      j.A.show({
                                          title: q.intl.string(q.t.GuPYQB),
                                          body: q.intl.format(q.t.xERCnZ, { name: a }),
                                          cancelText: q.intl.string(q.t["ETE/oC"]),
                                          onConfirm: () => v.A.clearPermissionOverwrite(s.id, e),
                                      });
                                  },
                        });
                });
            },
            [s, c],
        );
    if (null == c || null == h || null == s || null == a) return null;
    let O = (e, t) => {
        v.A.updatePermissionOverwrite(s.id, { id: e, type: t, allow: Y.x3, deny: Y.x3 }).then(() => (0, N.G9)(e));
    };
    null != a && null == a[c.id] && (a[c.id] = Y.xT(c.id));
    let D = h
            .filter((e) => a[e.id]?.type === y.r2.ROLE)
            .map((e) =>
                (0, l.jsx)(
                    E.A,
                    {
                        theme: f,
                        roleStyle: M,
                        id: e.id,
                        role: e,
                        guild: c,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) => L(t, { id: e.id, name: e.name, role: e }),
                        children: e.name,
                    },
                    `${r}-${e.id}`,
                ),
            ),
        G = o()(m)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(c.id, 24);
                return (0, l.jsx)(
                    E.A,
                    {
                        id: e.id,
                        guild: c,
                        theme: f,
                        roleStyle: M,
                        "aria-label": J.Ay.getUserTag(e, { decoration: "never" }),
                        onContextMenu: (t) => L(t, { id: e.id, name: e.username }),
                        children: (0, l.jsxs)("div", {
                            className: K.mG,
                            children: [
                                (0, l.jsx)(x.eu, {
                                    size: p._3.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: K.bE,
                                }),
                                (0, l.jsx)("span", { className: K.Xh, children: J.Ay.getUserTag(e) }),
                            ],
                        }),
                    },
                    `${r}-${e.id}`,
                );
            })
            .value();
    return (0, l.jsx)(I.Ay.Sidebar, {
        className: K.uA,
        scrollable: !0,
        children: (0, l.jsxs)(_.V, {
            onItemSelect: N.G9,
            selectedItem: r,
            orientation: "vertical",
            children: [
                ((e = (0, g.M)(f) ? n(546716) : n(233497)),
                (0, l.jsx)(b.Y, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: n } = e;
                        return (0, l.jsx)(es, {
                            guild: c,
                            channel: s,
                            permissionOverwrites: a,
                            position: null != t ? t : "bottom",
                            onSelect: O,
                            onClose: n,
                        });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (n) =>
                        (0, l.jsx)(_.V.Header, {
                            ref: t,
                            ...n,
                            children: (0, l.jsxs)("div", {
                                className: K.$M,
                                children: [
                                    (0, l.jsxs)("span", {
                                        children: [q.intl.string(q.t["LPJmL/"]), "/", q.intl.string(q.t["9Oq93m"])],
                                    }),
                                    (0, l.jsx)("img", { alt: "", className: K.aN, src: e }),
                                ],
                            }),
                        }),
                })),
                D,
                G,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(_.V.Separator, { style: { marginTop: 20, marginBottom: 14 } }),
                        (0, l.jsx)(C.Anchor, {
                            href: z.A.getArticleURL(Q.MVz.PERMISSIONS_TUTORIAL),
                            target: "_blank",
                            children: (0, l.jsx)(A.E, {
                                variant: "text-sm/normal",
                                color: "text-link",
                                children: q.intl.string(q.t.pfoA83),
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
function er() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, u.cf)([k.A], () => k.A);
    if (
        null == (0, u.bG)([U.A], () => (null != e ? U.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(I.Ay, { className: K.kL, children: [(0, l.jsx)(ea, {}), (0, l.jsx)(en, { overwrite: i })] });
}
