n.d(t, { Z: () => Q }), n(997841), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    d = n.n(c),
    u = n(533800),
    p = n(95015),
    m = n(442837),
    b = n(692547),
    g = n(28664),
    f = n(481060),
    h = n(447543),
    x = n(240872),
    j = n(225433),
    v = n(129861),
    O = n(493544),
    y = n(700582),
    _ = n(410030),
    C = n(835473),
    N = n(933557),
    S = n(346486),
    I = n(600164),
    w = n(925329),
    E = n(666657),
    P = n(664452),
    T = n(156953),
    Z = n(560114),
    k = n(741834),
    A = n(685929),
    D = n(592125),
    R = n(485386),
    L = n(699516),
    M = n(594174),
    U = n(634755),
    B = n(757539),
    W = n(981631),
    H = n(388032),
    G = n(809165),
    F = n(620842),
    K = n(197571);
function z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function V(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function q(e) {
    let {
        isDisabled: t,
        inviter: n,
        showChannel: r,
        channel: l,
        inviteSource: o,
        inviteSourceTrailingContent: s,
        uses: c,
        expiresAt: d,
        roles: u,
        guildId: p,
        showRolesColumn: m,
        onRevokeInvite: b,
    } = e;
    return (0, i.jsxs)(I.Z, {
        className: a()(G.inviteSettingsInviteRow, F.card, { [G.inviteDisabledRow]: t }),
        children: [
            (0, i.jsxs)(I.Z, {
                grow: 3,
                basis: 0,
                align: I.Z.Align.CENTER,
                className: G.text,
                children: [
                    null != n &&
                        (0, i.jsx)(y.Z, {
                            user: n,
                            size: f.EFr.SIZE_24,
                            className: G.avatar,
                        }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != n &&
                                (0, i.jsx)(v.Z, {
                                    discriminatorClass: G.discriminator,
                                    user: n,
                                }),
                            r &&
                                null != l &&
                                (0, i.jsx)(f.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: (0, N.F6)(l, M.default, L.Z, !0),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(I.Z, {
                grow: 3,
                shrink: 1,
                basis: 0,
                align: I.Z.Align.CENTER,
                className: G.text,
                children: (0, i.jsxs)("div", {
                    className: G.inviteSourceContainer,
                    children: [o, s],
                }),
            }),
            (0, i.jsx)(I.Z, {
                grow: 1,
                basis: 0,
                align: I.Z.Align.CENTER,
                className: G.text,
                children: (0, i.jsx)(f.Text, {
                    className: G.uses,
                    variant: "text-sm/normal",
                    children: c,
                }),
            }),
            (0, i.jsx)(I.Z, {
                grow: 2,
                basis: 0,
                align: I.Z.Align.CENTER,
                className: a()(G.text, G.countdownColumn),
                children: (0, i.jsx)(f.Text, {
                    className: G.countdown,
                    variant: "text-sm/normal",
                    children: d,
                }),
            }),
            m &&
                null != p &&
                (0, i.jsx)(I.Z, {
                    grow: 2,
                    basis: 0,
                    align: I.Z.Align.CENTER,
                    className: G.text,
                    children: (0, i.jsx)(k.Z, {
                        roles: u,
                        guildId: p,
                    }),
                }),
            (0, i.jsx)(j.Z, {
                className: G.revokeInvite,
                onClick: b,
            }),
        ],
    });
}
function Y(e) {
    var t, n;
    let { invite: r, showChannel: l = !1, inviteDisabled: a = !1, hide: o = !1, showRolesColumn: s } = e,
        c = null == (t = r.guild) ? void 0 : t.id,
        d = r.uses;
    r.maxUses > 0 && (d = "".concat(r.uses, "/").concat(r.maxUses));
    let b = (0, m.e7)(
        [R.Z],
        () => (null == c ? [] : r.roles.map((e) => R.Z.getRole(c, e.id)).filter((e) => null != e)),
        [c, r.roles],
    );
    return (0, i.jsx)(q, {
        isDisabled: a,
        inviter: r.inviter,
        showChannel: l,
        channel: r.channel,
        inviteSource: (0, i.jsx)(f.Text, {
            className: G.inviteCode,
            variant: "text-sm/normal",
            children: o ? "..." : r.code,
        }),
        inviteSourceTrailingContent:
            !o && (0, p.yE)(null != (n = r.flags) ? n : 0, u.$.IS_APPLICATION_BYPASS)
                ? (0, i.jsxs)("div", {
                      className: G.bypass,
                      children: [
                          (0, i.jsx)(f.Text, {
                              className: G.text,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: H.intl.string(H.t["1i1bUl"]),
                          }),
                          (0, i.jsx)(g.u, {
                              text: H.intl.string(H.t["jvd/LF"]),
                              children: (0, i.jsx)(f.d3s, {
                                  size: "xxs",
                                  color: "currentColor",
                                  className: G.infoIcon,
                              }),
                          }),
                      ],
                  })
                : null,
        uses: d,
        expiresAt: (0, i.jsx)(S.Z, { deadline: r.getExpiresAt() }),
        roles: b,
        guildId: c,
        showRolesColumn: s,
        onRevokeInvite: () => {
            h.ZP.revokeInvite(r);
        },
    });
}
function J(e) {
    let { applicationId: t, channel: r, showChannel: l = !1, inviteDisabled: a = !1, showRolesColumn: o } = e,
        s = (0, C.q)(t),
        c = (0, m.e7)([M.default], () => {
            var e;
            return M.default.getUser(null == (e = r.linkedLobby) ? void 0 : e.linked_by);
        }),
        d = (0, A.Y)(r);
    return (0, i.jsx)(q, {
        isDisabled: a,
        inviter: c,
        showChannel: l,
        channel: r,
        inviteSource: (0, i.jsxs)("div", {
            className: G.linkedChannelJoinSource,
            children: [
                (0, i.jsx)(w.Z, {
                    game: s,
                    size: w.A.XXSMALL,
                }),
                (0, i.jsx)(f.Text, {
                    className: G.linkedChannelJoinSourceText,
                    variant: "text-sm/normal",
                    children: null == s ? void 0 : s.name,
                }),
            ],
        }),
        uses: H.intl.string(H.t.jHpxwo),
        expiresAt: H.intl.string(H.t.PqEzn8),
        roles: [],
        guildId: r.guild_id,
        showRolesColumn: o,
        onRevokeInvite: () => {
            if (!d || null == s)
                return void x.Z.show({
                    title: H.intl.string(H.t.JmUENg),
                    body: H.intl.string(H.t.SrvsML),
                });
            (0, f.ZDy)(async () => {
                let { default: e } = await n.e("30019").then(n.bind(n, 719498));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        V(z({}, t), {
                            channel: r,
                            application: s,
                        }),
                    );
            });
        },
    });
}
function Q(e) {
    let {
        invites: t,
        guild: l,
        hide: a,
        canCreateInvites: o,
        withV2Actions: c,
        channel: u = null,
        showChannel: p = !1,
        loading: g = !1,
    } = e;
    s()(null != l, "guild is required");
    let h = (0, _.ZP)(),
        x = (0, U.MQ)(l),
        j = (0, U.O4)(l),
        v = (0, T.J)(l.id, "SettingsInvites").enabled,
        y = r.useMemo(
            () =>
                null == t || g
                    ? []
                    : d()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (
                                  null != (n = null == (t = e.inviter) ? void 0 : t.username) ? n : ""
                              ).toLowerCase();
                          })
                          .value(),
            [t, g],
        ),
        C = (0, m.Wu)([D.Z], () => D.Z.getSortedLinkedChannelsForGuild(l.id).filter((e) => null == u || e.id === u.id)),
        N = r.useMemo(
            () =>
                g
                    ? []
                    : [
                          ...y.map((e) => ({
                              type: "invite",
                              data: e,
                          })),
                          ...C.map((e) => ({
                              type: "channel",
                              data: e,
                          })),
                      ],
            [y, C, g],
        ),
        S = () => {
            (0, f.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(
                        Z.default,
                        V(z({}, e), {
                            channel: u,
                            guild: l,
                            source: W.t4x.SETTINGS_INVITE,
                        }),
                    ),
            );
        },
        [w, k] = r.useState(62),
        A = () => {
            let e = { source: E.Zu.GUILD_SETTINGS };
            (0, f.ZDy)(
                async () => (t) =>
                    (0, i.jsx)(
                        P.default,
                        V(z({}, t), {
                            guildId: l.id,
                            analyticsData: e,
                        }),
                    ),
            );
        };
    return (0, i.jsx)(O.Xi, {
        sections: [1, +!c, +!!c, Math.max(1, N.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (3 === t)
                if (0 === N.length && !g)
                    return (0, i.jsx)(
                        "div",
                        {
                            children: (0, i.jsxs)(f.ubH, {
                                theme: h,
                                children: [
                                    (0, i.jsx)(f.oxh, {
                                        darkSrc: n(914814),
                                        lightSrc: n(370392),
                                        width: 256,
                                        height: 130,
                                    }),
                                    (0, i.jsx)(f.OZU, {
                                        note: H.intl.string(H.t.F53CAc),
                                        children: H.intl.string(H.t["+nLJkZ"]),
                                    }),
                                ],
                            }),
                        },
                        "empty-state",
                    );
                else
                    return (0, i.jsxs)(
                        I.Z,
                        {
                            children: [
                                (0, i.jsx)(I.Z.Child, {
                                    grow: 3,
                                    basis: 0,
                                    className: K.marginReset,
                                    children: (0, i.jsx)(f.Text, {
                                        variant: "text-md/medium",
                                        children: H.intl.string(H.t.EgHyKy),
                                    }),
                                }),
                                (0, i.jsx)(I.Z.Child, {
                                    basis: 0,
                                    grow: 3,
                                    className: K.marginReset,
                                    children: (0, i.jsx)(f.Text, {
                                        variant: "text-md/medium",
                                        children: C.length > 0 ? H.intl.string(H.t.l7VISQ) : H.intl.string(H.t.LBlFEN),
                                    }),
                                }),
                                (0, i.jsx)(I.Z.Child, {
                                    grow: 1,
                                    basis: 0,
                                    children: (0, i.jsx)(f.Text, {
                                        variant: "text-md/medium",
                                        children: H.intl.string(H.t.erWrmA),
                                    }),
                                }),
                                (0, i.jsx)(I.Z.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(f.Text, {
                                        variant: "text-md/medium",
                                        children: H.intl.string(H.t["1aM27d"]),
                                    }),
                                }),
                                v &&
                                    (0, i.jsx)(I.Z.Child, {
                                        grow: 2,
                                        basis: 0,
                                        children: (0, i.jsx)(f.Text, {
                                            variant: "text-md/medium",
                                            children: H.intl.string(H.t["LPJmL/"]),
                                        }),
                                    }),
                            ],
                        },
                        "table-header",
                    );
            return null;
        },
        renderRow: (e) => {
            let { section: t, row: n } = e;
            if (0 === t)
                return (0, i.jsx)(f.Heading, {
                    variant: "heading-lg/semibold",
                    color: "header-primary",
                    className: G.header,
                    children: H.intl.string(H.t["9F90ic"]),
                });
            if (1 === t)
                return (0, i.jsxs)("div", {
                    className: G.actions,
                    children: [
                        (0, i.jsx)(f.Text, {
                            className: K.marginBottom20,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children:
                                !0 === o
                                    ? H.intl.format(H.t["97VdNm"], { onCreateInvite: S })
                                    : H.intl.string(H.t.WDw38H),
                        }),
                        (0, i.jsxs)("div", {
                            className: G.inviteDisabledContainer,
                            children: [
                                (0, i.jsx)(f.Button, {
                                    size: "sm",
                                    variant: j ? "primary" : "critical-primary",
                                    text: j ? H.intl.string(H.t["/dbw3H"]) : H.intl.string(H.t.Uwsjn6),
                                    onClick: A,
                                    disabled: !x,
                                }),
                                j &&
                                    (0, i.jsxs)("div", {
                                        className: G.inviteDisabledTip,
                                        children: [
                                            (0, i.jsx)(f.Mgn, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: b.Z.unsafe_rawColors.YELLOW_300.css,
                                            }),
                                            (0, i.jsx)(f.Text, {
                                                variant: "text-sm/normal",
                                                children: H.intl.string(H.t["2LLbj9"]),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(f.izJ, { className: G.headerDivider }),
                    ],
                });
            if (2 === t)
                return (0, i.jsx)(
                    B.Y,
                    {
                        hasInvites: y.length > 0,
                        setHeight: k,
                        onShowDisableInvites: A,
                        onShowInviteModal: S,
                        hasInviteDisabledPermission: x,
                        invitesDisabled: j,
                        canCreateInvites: o,
                    },
                    "actions-v2",
                );
            if (3 === t) {
                if (0 === N.length && 0 === n && g)
                    return (0, i.jsx)(
                        f.$jN,
                        {
                            className: K.marginTop20,
                            type: f.$jN.Type.SPINNING_CIRCLE,
                        },
                        "spinner",
                    );
                let e = N[n];
                switch (null == e ? void 0 : e.type) {
                    case "invite":
                        return (0, i.jsx)(
                            Y,
                            {
                                hide: a,
                                invite: e.data,
                                showChannel: p,
                                inviteDisabled: j,
                                showRolesColumn: v,
                            },
                            e.data.code,
                        );
                    case "channel":
                        var r;
                        return (0, i.jsx)(
                            J,
                            {
                                applicationId: null == (r = e.data.linkedLobby) ? void 0 : r.application_id,
                                channel: e.data,
                                showChannel: p,
                                inviteDisabled: j,
                                showRolesColumn: v,
                            },
                            e.data.id,
                        );
                    default:
                        return null;
                }
            }
        },
        rowHeight: (e, t) =>
            0 === e
                ? 64
                : 1 === e
                  ? 109
                  : 2 === e
                    ? w
                    : 3 === e
                      ? 0 === N.length && 0 === t && g
                          ? 62
                          : 62 * (null != N[t])
                      : 0,
        sectionHeight: (e) => (3 === e ? (0 !== N.length || g ? 28 : 240) : 0),
    });
}
