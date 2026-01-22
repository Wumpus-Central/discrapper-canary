n.d(t, {
    A: () => z,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    a = n(311907),
    o = n(990078),
    c = n(421380),
    d = n(397927),
    u = n(157559),
    h = n(308528),
    g = n(435183),
    m = n(702805),
    f = n(155718),
    p = n(709066),
    b = n(63104),
    x = n(235986),
    j = n(60868),
    A = n(894328),
    y = n(997509),
    v = n(776781),
    O = n(233993),
    C = n(110618),
    N = n(176360),
    E = n(696451),
    S = n(317525),
    T = n(71393),
    w = n(576705),
    M = n(287809),
    R = n(396465),
    I = n(488926),
    L = n(495273),
    P = n(270486),
    _ = n(80686),
    D = n(908494),
    k = n(737045),
    G = n(652215),
    B = n(818348),
    U = n(985018),
    V = n(807484);

function H(e) {
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

function F(e, t) {
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

function W(e) {
    let { channel: t, roles: n, members: i, disabledReason: r, getRemoveTooltipHint: a } = e;
    return (0, l.jsx)(d.B8B, {
        className: V.xz,
        sections: [n.length, i.length],
        renderRow: function (e) {
            let c,
                g,
                j,
                { section: A, row: y } = e,
                O = !1;
            switch (A) {
                case k.oO.ROLES:
                    var C;
                    (j =
                        (g = n[y]).rowType === k.T6.ROLE &&
                        (null == (C = g.tags) ? void 0 : C.guild_connections) === null
                            ? (0, l.jsx)(b.A, {
                                  className: V.a,
                                  color: g.colorString,
                                  size: 20,
                              })
                            : (0, l.jsx)(d.iTF, {
                                  size: "custom",
                                  className: V.a,
                                  color: g.colorString,
                                  height: 20,
                              })),
                        (c = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)("div", {
                                    className: V.iw,
                                    children: j,
                                }),
                                (0, l.jsx)(d.Text, {
                                    variant: "text-sm/normal",
                                    className: V.xZ,
                                    color: g.disabled ? "text-muted" : "text-default",
                                    children: g.name,
                                }),
                            ],
                        })),
                        (O = g.disabled);
                    break;
                case k.oO.MEMBERS:
                    (g = i[y]),
                        (c = (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(d.euF, {
                                    src: g.avatarURL,
                                    size: d._3J.SIZE_24,
                                    "aria-hidden": !0,
                                }),
                                (0, l.jsx)(d.Text, {
                                    className: V.xZ,
                                    variant: "text-sm/normal",
                                    children: g.name,
                                }),
                                g.bot &&
                                    (0, l.jsx)(p.A, {
                                        verified: g.verifiedBot,
                                        className: V.oN,
                                    }),
                                null != g.nickname &&
                                    (0, l.jsx)(d.Text, {
                                        color: "text-muted",
                                        className: V.Gq,
                                        variant: "text-sm/normal",
                                        children: g.username,
                                    }),
                            ],
                        })),
                        (O = g.disabled);
                    break;
                default:
                    g = null;
            }
            if (null == g) return null;
            let N = !O && null == r && null != g.id;
            return (0, l.jsxs)(
                x.A,
                {
                    justify: x.A.Justify.BETWEEN,
                    align: x.A.Align.CENTER,
                    className: V.TL,
                    children: [
                        (0, l.jsx)(x.A, {
                            justify: x.A.Justify.START,
                            align: x.A.Align.CENTER,
                            className: V.__invalid_memberRowBody,
                            children: c,
                        }),
                        (0, l.jsx)(d.Text, {
                            color: "text-muted",
                            variant: "text-xs/normal",
                            children: L.vV(g.rowType),
                        }),
                        g.rowType !== k.T6.EMPTY_STATE &&
                            (0, l.jsx)(o.m, {
                                asContainer: !0,
                                text: null != r ? r : a(g.rowType, g.disabled),
                                children: (0, l.jsx)(d.DUT, {
                                    onClick: () => {
                                        var e, n, l;
                                        return (
                                            N &&
                                            null != g &&
                                            ((e = g.id),
                                            (n = g.name),
                                            (l = g.rowType),
                                            void u.A.show({
                                                title: U.intl.string(U.t.GuPYQB),
                                                body: U.intl.format(U.t.xERCnZ, {
                                                    name: n,
                                                }),
                                                cancelText: U.intl.string(U.t["ETE/oC"]),
                                                onConfirm: () =>
                                                    (function (e, n) {
                                                        if (t.isGuildStageVoice()) {
                                                            let l = (0, v.$b)(
                                                                e,
                                                                n === k.T6.ROLE ? f.r2.ROLE : f.r2.MEMBER,
                                                                t,
                                                            );
                                                            (0, v.pF)(l)
                                                                ? h.A.clearPermissionOverwrite(t.id, l.id)
                                                                : (0, m.R$)(t.id, [l]);
                                                        } else h.A.clearPermissionOverwrite(t.id, e);
                                                    })(e, l),
                                            }))
                                        );
                                    },
                                    "aria-disabled": !N,
                                    "aria-label": U.intl.string(U.t.N86XcP),
                                    children: (0, l.jsx)(d.aXh, {
                                        size: "md",
                                        color: "currentColor",
                                        className: s()(V.Yz, {
                                            [V._2]: O || r,
                                        }),
                                    }),
                                }),
                            }),
                    ],
                },
                g.id,
            );
        },
        rowHeight: 40,
        renderSection: function (e) {
            let { section: t } = e;
            switch (t) {
                case k.oO.ROLES:
                    return (0, l.jsx)(
                        J,
                        {
                            title: U.intl.string(U.t["LPJmL/"]),
                        },
                        "roles-title",
                    );
                case k.oO.MEMBERS:
                    return (0, l.jsx)(
                        J,
                        {
                            title: U.intl.string(U.t["9Oq93m"]),
                        },
                        "members-title",
                    );
            }
        },
        sectionHeight: 49,
    });
}

function Z(e) {
    let { guild: t, channel: i, permissionUpdates: r } = e,
        c = (0, a.bG)([S.A], () => S.A.getSortedRoles(t.id)),
        u = L.C$(t, c, i, O.QY, r),
        h = (0, a.bG)([E.Ay], () => L.Wi(E.Ay.getMemberIds(t.id), i, t, O.QY, r)),
        g = (0, v.qd)(i.id);
    return (0, l.jsxs)("div", {
        className: s()(V.j1, V.vu),
        children: [
            (0, l.jsx)(_.A, {
                label: U.intl.string(U.t.StpcFU),
                description: U.intl.string(U.t.f7VbhF),
                icon: (0, l.jsx)(d.qux, {
                    size: "custom",
                    color: "currentColor",
                    className: V.Ie,
                    height: 20,
                    width: 20,
                }),
                id: "StageModeratorSettingCard",
            }),
            (0, l.jsxs)("div", {
                className: V.X4,
                children: [
                    (0, l.jsxs)(x.A, {
                        justify: x.A.Justify.BETWEEN,
                        align: x.A.Align.CENTER,
                        className: V.MJ,
                        children: [
                            (0, l.jsx)(d.Text, {
                                variant: "text-md/semibold",
                                children: U.intl.string(U.t["7BWDRb"]),
                            }),
                            (0, l.jsx)(o.m, {
                                text: U.intl.string(U.t.arRuES),
                                shouldShow: !g,
                                children: (0, l.jsx)(d.Button, {
                                    variant: "primary",
                                    size: "sm",
                                    text: U.intl.string(U.t.dMJ3Y6),
                                    onClick: function () {
                                        (0, d.mMO)(async () => {
                                            let { default: e } = await n.e("58608").then(n.bind(n, 841811));
                                            return (t) =>
                                                (0, l.jsx)(
                                                    e,
                                                    F(H({}, t), {
                                                        channelId: i.id,
                                                    }),
                                                );
                                        });
                                    },
                                    disabled: !g,
                                }),
                            }),
                        ],
                    }),
                    (0, l.jsx)(W, {
                        channel: i,
                        roles: u,
                        members: h,
                        disabledReason: g ? null : U.intl.string(U.t.arRuES),
                        getRemoveTooltipHint: C.Mt,
                    }),
                ],
            }),
        ],
    });
}

function Y(e) {
    let { guild: t, channel: i, isPrivateGuildChannel: r, roles: o, members: u } = e,
        h = (0, a.bG)([w.A], () => w.A.can(B.xB.ADMINISTRATOR, t)),
        g = I.MJ(B.xB.VIEW_CHANNEL, t),
        m = I.MJ(B.xB.ADMINISTRATOR, t);
    async function f() {
        let e = i.accessPermissions,
            s = M.default.getCurrentUser();
        r || null == (await (0, A.D)(t.id, i.id))
            ? (L.uB(i, e, r), r || null == s || h || L.tP(i, e))
            : (0, d.mMO)(async () => {
                  let { VoidConfirmModal: e } = await Promise.resolve().then(n.bind(n, 640238));
                  return (n) =>
                      (0, l.jsx)(
                          e,
                          F(H({}, n), {
                              confirmButtonColor: c.XD.BRAND,
                              header: U.intl.string(U.t.ZzdgUm),
                              confirmText: U.intl.string(U.t.BddRzS),
                              children: (0, l.jsx)(d.Text, {
                                  variant: "text-md/normal",
                                  children: U.intl.format(U.t.DwY2vN, {
                                      onClick: () => {
                                          y.A.open(t.id, G.BEX.ONBOARDING), n.onClose();
                                      },
                                  }),
                              }),
                          }),
                      );
              });
    }
    let p = {
        title: U.intl.string(U.t.aUI70g),
        subtitle: U.intl.string(U.t.hfbjIH),
        formLabel: U.intl.string(U.t.P6eCbP),
    };
    return (
        i.isCategory()
            ? ((p.title = U.intl.string(U.t.lEPAZ5)),
              (p.subtitle = U.intl.string(U.t.RQUk61)),
              (p.formLabel = U.intl.string(U.t["8VIxJu"])))
            : i.type === G.rbe.GUILD_VOICE && (p.subtitle = U.intl.string(U.t.cLjvKg)),
        (0, l.jsxs)("div", {
            className: s()(V.j1, {
                [V.vu]: r,
            }),
            children: [
                (0, l.jsx)(_.A, {
                    description: p.subtitle,
                    icon: (0, l.jsx)(d.XAi, {
                        size: "custom",
                        color: "currentColor",
                        className: V.Ie,
                        height: 20,
                        width: 20,
                    }),
                    id: "PrivateChannelSettingCard",
                    label: p.title,
                    onChange: f,
                    value: r,
                }),
                (0, l.jsxs)("div", {
                    className: V.X4,
                    children: [
                        m &&
                            (0, l.jsx)("div", {
                                className: V.Ux,
                                children: (0, l.jsx)(d.po8, {
                                    messageType: d.YCn.WARNING,
                                    children: U.intl.string(U.t["5f3HIC"]),
                                }),
                            }),
                        !g &&
                            !m &&
                            !r &&
                            (0, l.jsx)("div", {
                                className: V.Ux,
                                children: (0, l.jsx)(d.po8, {
                                    messageType: d.YCn.WARNING,
                                    children: U.intl.string(U.t.ZAk4Q9),
                                }),
                            }),
                        r &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsxs)(x.A, {
                                        justify: x.A.Justify.BETWEEN,
                                        align: x.A.Align.CENTER,
                                        className: V.MJ,
                                        children: [
                                            (0, l.jsx)(d.Heading, {
                                                variant: "heading-sm/semibold",
                                                className: V.DH,
                                                children: p.formLabel,
                                            }),
                                            (0, l.jsx)(d.Button, {
                                                variant: "primary",
                                                size: "sm",
                                                text: U.intl.string(U.t.dMJ3Y6),
                                                onClick: function () {
                                                    (0, d.mMO)(async () => {
                                                        let { default: e } = await Promise.resolve().then(
                                                            n.bind(n, 685374),
                                                        );
                                                        return (t) =>
                                                            (0, l.jsx)(
                                                                e,
                                                                F(H({}, t), {
                                                                    channelId: i.id,
                                                                    inSettings: !0,
                                                                }),
                                                            );
                                                    });
                                                },
                                            }),
                                        ],
                                    }),
                                    (0, l.jsx)(W, {
                                        channel: i,
                                        roles: o,
                                        members: u,
                                        getRemoveTooltipHint: L.ro,
                                    }),
                                ],
                            }),
                    ],
                }),
            ],
        })
    );
}

function J(e) {
    let { title: t } = e;
    return (0, l.jsxs)("div", {
        children: [
            (0, l.jsx)(d.cGx, {
                className: V.yF,
            }),
            (0, l.jsx)(d.Heading, {
                variant: "heading-sm/semibold",
                className: s()(V.DH, V.Gf),
                children: t,
            }),
        ],
    });
}
let z = a.Ay.connectStores([N.A, w.A, E.Ay, T.A, S.A], () => {
    let e,
        t = N.A.channel,
        n = N.A.category,
        l = [],
        i = [],
        r = {},
        s = !1;
    if (null != t) {
        e = T.A.getGuild(t.getGuildId());
        let n = E.Ay.getMemberIds(null == e ? void 0 : e.id);
        if (null != e) {
            let a = S.A.getSortedRoles(e.id);
            (r = N.A.editedPermissionIds.reduce((e, t) => {
                let n = N.A.getPermissionOverwrite(t);
                return null != n && (e[t] = n), e;
            }, {})),
                (l = L.uX(e, a, t, t.accessPermissions, r)),
                (i = L.Wi(n, t, e, t.accessPermissions, r)),
                (s = L.Ae(t, r));
        }
    }
    return {
        canSyncChannel: null != n && w.A.can(B.xB.MANAGE_ROLES, n),
        category: n,
        channel: t,
        filteredMembers: i,
        filteredRoles: l,
        guild: e,
        isPrivateGuildChannel: s,
        locked: N.A.locked,
        permissionUpdates: r,
    };
})(function (e) {
    let {
            canSyncChannel: t,
            category: r,
            channel: s,
            filteredMembers: a,
            filteredRoles: o,
            guild: c,
            isPrivateGuildChannel: u,
            locked: h,
            permissionUpdates: m,
        } = e,
        [f, p] = i.useState(!I.MJ(B.xB.SEND_MESSAGES, s));
    if (null == s || null == c) return null;
    let b = {
        title: U.intl.string(U.t.BAZMBn),
        subtitle: U.intl.string(U.t.XLrZyp),
    };
    return (
        s.isCategory() && ((b.title = U.intl.string(U.t["/uELTj"])), (b.subtitle = U.intl.string(U.t["8iAg3Q"]))),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(d.Heading, {
                    variant: "heading-lg/semibold",
                    children: b.title,
                }),
                (0, l.jsx)(d.Text, {
                    variant: "text-sm/normal",
                    children: b.subtitle,
                }),
                null != r && t
                    ? h
                        ? (0, l.jsx)(D.A, {
                              canSync: !1,
                              icon: d.fNY,
                              noticeText: U.intl.format(U.t.ETJqLl, {
                                  categoryName: r.name,
                              }),
                          })
                        : (0, l.jsx)(D.A, {
                              buttonText: U.intl.string(U.t.NVwuHq),
                              canSync: !0,
                              icon: (0, d.kHD)(R.A),
                              noticeText: U.intl.format(U.t.OIhm0M, {
                                  categoryName: r.name,
                              }),
                              onClick: function () {
                                  null != r &&
                                      (0, d.mMO)(async () => {
                                          let { default: e } = await Promise.resolve().then(n.bind(n, 544169));
                                          return (t) =>
                                              (0, l.jsx)(
                                                  e,
                                                  F(H({}, t), {
                                                      channel: s,
                                                      category: r,
                                                      onConfirm: async () => {
                                                          let { guild_id: e } = r,
                                                              t = H({}, r.permissionOverwrites);
                                                          null != e && null == t[e] && (t[e] = I.xT(e)),
                                                              (await (0, j.n)(s, t[e].deny, t[e].allow)) &&
                                                                  (0, g.RT)(s.id, {
                                                                      permissionOverwrites: Object.values(t),
                                                                  });
                                                      },
                                                  }),
                                              );
                                      });
                              },
                          })
                    : null,
                s.isGuildStageVoice()
                    ? (0, l.jsx)(Z, {
                          guild: c,
                          channel: s,
                          permissionUpdates: m,
                      })
                    : null,
                (0, l.jsx)(Y, {
                    channel: s,
                    guild: c,
                    isPrivateGuildChannel: u,
                    roles: o,
                    members: a,
                }),
                !1,
                (0, l.jsx)(P.A, {}),
            ],
        })
    );
});
