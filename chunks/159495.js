n.d(t, {
    $: () => q,
    A: () => el,
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
    u = n(158954),
    d = n(311907),
    h = n(36525),
    g = n(582754),
    m = n(397927),
    p = n(157559),
    f = n(308528),
    b = n(702805),
    x = n(442433),
    j = n(508384),
    A = n(155718),
    y = n(736653),
    v = n(775602),
    O = n(861197),
    C = n(352505),
    N = n(942234),
    S = n(233993),
    E = n(260509),
    _ = n(427157),
    T = n(176360),
    w = n(863036),
    M = n(696451),
    R = n(317525),
    I = n(71393),
    L = n(576705),
    P = n(287809),
    D = n(403362),
    k = n(695184),
    G = n(975571),
    B = n(562153),
    U = n(558393),
    V = n(488926),
    H = n(427262),
    F = n(786033),
    W = n(13948),
    Y = n(652215),
    Z = n(985018),
    J = n(442875),
    z = n(336389);

function Q(e) {
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

function X(e, t) {
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
let q = d.Ay.connectStores([T.A, w.A], () => {
    let e = w.A.getChannel();
    return {
        submitting: T.A.formState === Y.XlH.SUBMITTING,
        onReset() {
            (0, b.Ts)();
        },
        onSave() {
            if (null == e) return;
            let t = T.A.editedPermissionIds.reduce((e, t) => {
                let n = T.A.getPermissionOverwrite(t);
                return null != n && e.push(n), e;
            }, []);
            (0, b.R$)(e.id, t);
        },
    };
})(h.A);

function K(e) {
    let { overwrite: t } = e,
        n = (0, d.bG)([T.A], () => T.A.channel),
        i = (0, d.bG)([I.A], () => (null != n ? I.A.getGuild(n.getGuildId()) : null)),
        r = (0, d.bG)([R.A], () => (null != i && null != t && t.type === A.r2.ROLE ? R.A.getRole(i.id, t.id) : void 0)),
        s = C.M.useExperiment({
            guildId: null == n ? void 0 : n.guild_id,
            location: "ChannelSettingsPermissions",
        }).enabled;
    if (null == n || null == i || null == t) return null;
    let { guild_id: a, id: o } = n,
        u = () => {
            var e;
            if (null == I.A.getGuild(a)) return "";
            let n = t.type === A.r2.MEMBER ? P.default.getUser(t.id) : void 0,
                l = null != (e = null == n ? void 0 : n.username) ? e : "";
            return null != r ? r.name : l;
        },
        h = (e, l) => {
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
                L.A.can(e, n, {
                    [t.id]: X(Q({}, t), {
                        allow: i,
                        deny: r,
                    }),
                })
            )
                (0, b.LA)(n, t.id, i, r);
            else {
                let e;
                if (t.type === A.r2.MEMBER) {
                    let n = P.default.getUser(t.id);
                    null != n && (e = H.Ay.getName(n));
                } else if (t.type === A.r2.ROLE) {
                    let l = I.A.getGuild(n.getGuildId());
                    if (null != l) {
                        let n = R.A.getRole(l.id, t.id);
                        null != n && (e = n.name);
                    }
                }
                F.t(e);
            }
        },
        g = (e) => {
            let t = L.A.can(Y.xBc.ADMINISTRATOR, i) || L.A.can(Y.xBc.MANAGE_ROLES, n, void 0, void 0, !0);
            return n.isGuildStageVoice() && S.Zq.has(e)
                ? Z.intl.string(Z.t.bTS5lf)
                : !((!c.aI(e, Y.xBc.MANAGE_ROLES) || t) && (null == e || L.A.can(e, i) || t)) &&
                      Z.intl.string(Z.t.nOtPMM);
        },
        x = t.id === a,
        j = n.isForumLikeChannel() && c.zy(t.deny, Y.xBc.SEND_MESSAGES),
        y = c.zy(t.deny, Y.xBc.SEND_MESSAGES),
        v = c.zy(t.deny, Y.xBc.READ_MESSAGE_HISTORY),
        E = U.A.generateChannelPermissionSpec(a, n, x, {
            createPostsDisabled: j,
            sendMessagesDisabled: y,
            readMessageHistoryDisabled: v,
            inGameMentionsExperiment: s,
        });
    return (0, l.jsxs)(O.Ay.Content, {
        className: J.uA,
        children: [
            E.map((e, n) =>
                (0, l.jsx)(
                    N.A,
                    {
                        spec: e,
                        allow: t.allow,
                        deny: t.deny,
                        onChange: h,
                        permissionRender: g,
                        className: J.p2,
                        guildId: a,
                    },
                    n,
                ),
            ),
            a === t.id
                ? null
                : (0, l.jsx)(m.Button, {
                      variant: "critical-secondary",
                      text: Z.intl.format(Z.t.txPV7k, {
                          name: u(),
                      }),
                      onClick: () => {
                          let e = u();
                          p.A.show({
                              title: Z.intl.string(Z.t.GuPYQB),
                              body: Z.intl.format(Z.t.xERCnZ, {
                                  name: e,
                              }),
                              cancelText: Z.intl.string(Z.t["ETE/oC"]),
                              onConfirm: () => f.A.clearPermissionOverwrite(o, t.id),
                          });
                      },
                  }),
        ],
    });
}

function $(e) {
    let { guildId: t, channelId: n, user: i } = e,
        r = i.getAvatarURL(t, 32),
        a = B.Ay.getNickname(t, n, i),
        o = H.Ay.useUserTag(i),
        c = null,
        u = null;
    return (
        (c = null != a ? a : i.hasAvatarForGuild(t) ? i.username : o),
        (null != a || i.hasAvatarForGuild(t)) &&
            (u = (0, l.jsxs)("div", {
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
                    (0, l.jsx)(m.Text, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        children: o,
                    }),
                ],
            })),
        (0, l.jsxs)("div", {
            className: s()(z.uN, J.mG),
            children: [
                (0, l.jsx)(m.euF, {
                    size: m._3J.SIZE_32,
                    src: r,
                    "aria-label": i.username,
                    className: J.RJ,
                }),
                (0, l.jsxs)("div", {
                    className: J.F0,
                    children: [
                        (0, l.jsx)(m.Text, {
                            className: J.F0,
                            variant: "text-md/normal",
                            children: c,
                        }),
                        u,
                    ],
                }),
            ],
        })
    );
}

function ee(e) {
    return "object" == typeof e && null != e && "colorString" in e && "name" in e;
}

function et(e) {
    let { guild: t, channel: n, permissionOverwrites: r, onClose: a, onSelect: c } = e,
        h = (0, d.bG)([R.A], () => R.A.getSortedRoles(t.id)),
        g = (0, d.yK)([M.Ay], () => M.Ay.getMemberIds(t.id)),
        p = i.useMemo(
            () => [
                ...h.filter((e) => null == r[e.id]),
                ...o()(g)
                    .map(P.default.getUser)
                    .filter(D.Vq)
                    .filter((e) => null == r[e.id])
                    .sortBy((e) => e.username.toLowerCase())
                    .value(),
            ],
            [g, r, h],
        );
    return (0, l.jsx)(u.lGe, {
        className: J.Nd,
        children: (0, l.jsxs)(m.iS7, {
            selectionMode: "single",
            onSelectionChange: (e) => {
                null != e && (ee(e) ? c(e.id, A.r2.ROLE) : e instanceof _.A && c(e.id, A.r2.MEMBER), a());
            },
            options: p,
            formatOption: (e) => ({
                id: e.id,
                value: e,
                label: ee(e) ? e.name : H.Ay.getUserTag(e),
            }),
            children: [
                (0, l.jsx)("div", {
                    className: J.ON,
                    children: (0, l.jsx)(m.a32, {
                        label: Z.intl.string(Z.t.lT5Zth),
                        placeholder: Z.intl.string(Z.t.V2pZRh),
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
                        if (ee(i)) {
                            let e;
                            return (
                                null != i.colorString &&
                                    (e = {
                                        color: i.colorString,
                                    }),
                                (0, l.jsxs)("div", {
                                    className: s()(z.uN, J.xf),
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
                        if (i instanceof _.A)
                            return (0, l.jsx)($, {
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

function en() {
    let e,
        t = i.useRef(null),
        { channel: r, permissionOverwrites: s, selectedOverwriteId: a } = (0, d.cf)([T.A], () => T.A),
        c = null == r ? void 0 : r.getGuildId(),
        { guild: u, sortedGuildRoles: h } = (0, d.cf)([I.A, R.A], () => {
            let e = null != c ? I.A.getGuild(c) : void 0,
                t = null != e ? R.A.getSortedRoles(e.id) : void 0;
            return {
                guild: e,
                sortedGuildRoles: t,
            };
        }, [c]),
        C = (0, W.A)(c, s),
        N = (0, y.Ay)(),
        S = (0, d.bG)([v.A], () => v.A.roleStyle),
        _ = i.useCallback(
            (e, t) => {
                if (null == r) return null;
                (0, x.L3)(e, async () => {
                    let { id: e, role: i, name: s } = t,
                        a = null != u ? (0, E.af)(u) : null,
                        o = null != i && a === i.id,
                        { default: c } = await n.e("77168").then(n.bind(n, 495603));
                    return (t) =>
                        (0, l.jsx)(
                            c,
                            X(Q({}, t), {
                                id: e,
                                role: i,
                                handleDeletePermission: o
                                    ? void 0
                                    : () => {
                                          p.A.show({
                                              title: Z.intl.string(Z.t.GuPYQB),
                                              body: Z.intl.format(Z.t.xERCnZ, {
                                                  name: s,
                                              }),
                                              cancelText: Z.intl.string(Z.t["ETE/oC"]),
                                              onConfirm: () => f.A.clearPermissionOverwrite(r.id, e),
                                          });
                                      },
                            }),
                        );
                });
            },
            [r, u],
        );
    if (null == u || null == h || null == r || null == s) return null;
    let w = (e, t) => {
        f.A.updatePermissionOverwrite(r.id, {
            id: e,
            type: t,
            allow: V.x3,
            deny: V.x3,
        }).then(() => (0, b.G9)(e));
    };
    null != s && null == s[u.id] && (s[u.id] = V.xT(u.id));
    let M = h
            .filter((e) => {
                var t;
                return (null == (t = s[e.id]) ? void 0 : t.type) === A.r2.ROLE;
            })
            .map((e) =>
                (0, l.jsx)(
                    j.A,
                    {
                        theme: N,
                        roleStyle: S,
                        id: e.id,
                        role: e,
                        guild: u,
                        color: e.colorString,
                        "aria-label": e.name,
                        onContextMenu: (t) =>
                            _(t, {
                                id: e.id,
                                name: e.name,
                                role: e,
                            }),
                        children: e.name,
                    },
                    "".concat(a, "-").concat(e.id),
                ),
            ),
        L = o()(C)
            .sortBy((e) => e.username.toLowerCase())
            .map((e) => {
                let t = e.getAvatarURL(u.id, 24);
                return (0, l.jsx)(
                    j.A,
                    {
                        id: e.id,
                        guild: u,
                        theme: N,
                        roleStyle: S,
                        "aria-label": H.Ay.getUserTag(e, {
                            decoration: "never",
                        }),
                        onContextMenu: (t) =>
                            _(t, {
                                id: e.id,
                                name: e.username,
                            }),
                        children: (0, l.jsxs)("div", {
                            className: J.mG,
                            children: [
                                (0, l.jsx)(m.euF, {
                                    size: m._3J.SIZE_20,
                                    src: t,
                                    "aria-label": e.username,
                                    className: J.bE,
                                }),
                                (0, l.jsx)("span", {
                                    className: J.Xh,
                                    children: H.Ay.getUserTag(e),
                                }),
                            ],
                        }),
                    },
                    "".concat(a, "-").concat(e.id),
                );
            })
            .value();
    return (0, l.jsx)(O.Ay.Sidebar, {
        className: J.uA,
        scrollable: !0,
        children: (0, l.jsxs)(m.VQ0, {
            onItemSelect: b.G9,
            selectedItem: a,
            orientation: "vertical",
            children: [
                ((e = (0, g.Mw)(N) ? n(546716) : n(233497)),
                (0, l.jsx)(m.YNO, {
                    targetElementRef: t,
                    renderPopout: (e) => {
                        let { position: t, closePopout: n } = e;
                        return (0, l.jsx)(et, {
                            guild: u,
                            channel: r,
                            permissionOverwrites: s,
                            position: null != t ? t : "bottom",
                            onSelect: w,
                            onClose: n,
                        });
                    },
                    position: "bottom",
                    autoInvert: !1,
                    clickTrap: !0,
                    children: (n) =>
                        (0, l.jsx)(
                            m.VQ0.Header,
                            X(
                                Q(
                                    {
                                        ref: t,
                                    },
                                    n,
                                ),
                                {
                                    children: (0, l.jsxs)("div", {
                                        className: J.$M,
                                        children: [
                                            (0, l.jsxs)("span", {
                                                children: [
                                                    Z.intl.string(Z.t["LPJmL/"]),
                                                    "/",
                                                    Z.intl.string(Z.t["9Oq93m"]),
                                                ],
                                            }),
                                            (0, l.jsx)("img", {
                                                alt: "",
                                                className: J.aN,
                                                src: e,
                                            }),
                                        ],
                                    }),
                                },
                            ),
                        ),
                })),
                M,
                L,
                (0, l.jsxs)(i.Fragment, {
                    children: [
                        (0, l.jsx)(m.VQ0.Separator, {
                            style: {
                                marginTop: 20,
                                marginBottom: 14,
                            },
                        }),
                        (0, l.jsx)(m.MzZ, {
                            href: G.A.getArticleURL(Y.MVz.PERMISSIONS_TUTORIAL),
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

function el() {
    let { channel: e, permissionOverwrites: t, selectedOverwriteId: n } = (0, d.cf)([T.A], () => T.A);
    if (
        null == (0, d.bG)([I.A], () => (null != e ? I.A.getGuild(e.getGuildId()) : null)) ||
        null == e ||
        null == t ||
        null == n
    )
        return null;
    let i = t[n];
    return (0, l.jsxs)(O.Ay, {
        className: J.kL,
        children: [
            (0, l.jsx)(en, {}),
            (0, l.jsx)(K, {
                overwrite: i,
            }),
        ],
    });
}
