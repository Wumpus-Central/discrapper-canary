n.d(t, { Z: () => V }), n(997841), n(388685);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(392711),
    d = n.n(c),
    u = n(533800),
    p = n(442837),
    m = n(692547),
    b = n(28664),
    g = n(481060),
    f = n(447543),
    h = n(240872),
    x = n(225433),
    j = n(129861),
    v = n(493544),
    y = n(700582),
    O = n(410030),
    _ = n(835473),
    C = n(933557),
    N = n(346486),
    w = n(600164),
    S = n(925329),
    P = n(666657),
    I = n(664452),
    Z = n(560114),
    E = n(685929),
    T = n(592125),
    k = n(699516),
    A = n(594174),
    D = n(630388),
    R = n(634755),
    L = n(757539),
    M = n(981631),
    U = n(388032),
    B = n(427580),
    W = n(504401),
    H = n(10198);
function G(e) {
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
function z(e, t) {
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
function F(e) {
    let {
        isDisabled: t,
        inviter: n,
        showChannel: r,
        channel: l,
        inviteSource: o,
        inviteSourceTrailingContent: s,
        uses: c,
        expiresAt: d,
        onRevokeInvite: u,
    } = e;
    return (0, i.jsxs)(w.Z, {
        className: a()(B.inviteSettingsInviteRow, W.card, { [B.inviteDisabledRow]: t }),
        children: [
            (0, i.jsxs)(w.Z, {
                grow: 3,
                basis: 0,
                align: w.Z.Align.CENTER,
                className: B.text,
                children: [
                    null != n &&
                        (0, i.jsx)(y.Z, {
                            user: n,
                            size: g.EFr.SIZE_24,
                            className: B.avatar,
                        }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != n &&
                                (0, i.jsx)(j.Z, {
                                    discriminatorClass: B.discriminator,
                                    user: n,
                                }),
                            r &&
                                null != l &&
                                (0, i.jsx)(g.Text, {
                                    variant: "text-xs/normal",
                                    color: "header-secondary",
                                    children: (0, C.F6)(l, A.default, k.Z, !0),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(w.Z, {
                grow: 3,
                shrink: 1,
                basis: 0,
                align: w.Z.Align.CENTER,
                className: B.text,
                children: (0, i.jsxs)("div", {
                    className: B.inviteSourceContainer,
                    children: [o, s],
                }),
            }),
            (0, i.jsx)(w.Z, {
                grow: 1,
                basis: 0,
                align: w.Z.Align.CENTER,
                className: B.text,
                children: (0, i.jsx)(g.Text, {
                    className: B.uses,
                    variant: "text-sm/normal",
                    children: c,
                }),
            }),
            (0, i.jsx)(w.Z, {
                grow: 2,
                basis: 0,
                align: w.Z.Align.CENTER,
                className: a()(B.text, B.countdownColumn),
                children: (0, i.jsx)(g.Text, {
                    className: B.countdown,
                    variant: "text-sm/normal",
                    children: d,
                }),
            }),
            (0, i.jsx)(x.Z, {
                className: B.revokeInvite,
                onClick: u,
            }),
        ],
    });
}
function K(e) {
    var t;
    let { invite: n, showChannel: r = !1, inviteDisabled: l = !1, hide: a = !1 } = e,
        o = n.uses;
    return (
        n.maxUses > 0 && (o = "".concat(n.uses, "/").concat(n.maxUses)),
        (0, i.jsx)(F, {
            isDisabled: l,
            inviter: n.inviter,
            showChannel: r,
            channel: n.channel,
            inviteSource: (0, i.jsx)(g.Text, {
                className: B.inviteCode,
                variant: "text-sm/normal",
                children: a ? "..." : n.code,
            }),
            inviteSourceTrailingContent:
                !a && (0, D.yE)(null != (t = n.flags) ? t : 0, u.$.IS_APPLICATION_BYPASS)
                    ? (0, i.jsxs)("div", {
                          className: B.bypass,
                          children: [
                              (0, i.jsx)(g.Text, {
                                  className: B.text,
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: U.intl.string(U.t["1i1bUl"]),
                              }),
                              (0, i.jsx)(b.u, {
                                  text: U.intl.string(U.t["jvd/LC"]),
                                  children: (0, i.jsx)(g.d3s, {
                                      size: "xxs",
                                      color: "currentColor",
                                      className: B.infoIcon,
                                  }),
                              }),
                          ],
                      })
                    : null,
            uses: o,
            expiresAt: (0, i.jsx)(N.Z, { deadline: n.getExpiresAt() }),
            onRevokeInvite: () => {
                f.ZP.revokeInvite(n);
            },
        })
    );
}
function q(e) {
    let { applicationId: t, channel: r, showChannel: l = !1, inviteDisabled: a = !1 } = e,
        o = (0, _.q)(t),
        s = (0, p.e7)([A.default], () => {
            var e;
            return A.default.getUser(null == (e = r.linkedLobby) ? void 0 : e.linked_by);
        }),
        c = (0, E.Y)(r);
    return (0, i.jsx)(F, {
        isDisabled: a,
        inviter: s,
        showChannel: l,
        channel: r,
        inviteSource: (0, i.jsxs)("div", {
            className: B.linkedChannelJoinSource,
            children: [
                (0, i.jsx)(S.Z, {
                    game: o,
                    size: S.A.XXSMALL,
                }),
                (0, i.jsx)(g.Text, {
                    className: B.linkedChannelJoinSourceText,
                    variant: "text-sm/normal",
                    children: null == o ? void 0 : o.name,
                }),
            ],
        }),
        uses: U.intl.string(U.t.jHpxws),
        expiresAt: U.intl.string(U.t.PqEzn5),
        onRevokeInvite: () => {
            if (!c || null == o)
                return void h.Z.show({
                    title: U.intl.string(U.t.JmUENj),
                    body: U.intl.string(U.t.SrvsMD),
                });
            (0, g.ZDy)(async () => {
                let { default: e } = await n.e("30019").then(n.bind(n, 719498));
                return (t) =>
                    (0, i.jsx)(
                        e,
                        z(G({}, t), {
                            channel: r,
                            application: o,
                        }),
                    );
            });
        },
    });
}
function V(e) {
    let {
        invites: t,
        guild: l,
        hide: a,
        canCreateInvites: o,
        withV2Actions: c,
        channel: u = null,
        showChannel: b = !1,
        loading: f = !1,
    } = e;
    s()(null != l, "guild is required");
    let h = (0, O.ZP)(),
        x = (0, R.MQ)(l),
        j = (0, R.O4)(l),
        y = r.useMemo(
            () =>
                null == t || f
                    ? []
                    : d()(t)
                          .sortBy((e) => {
                              var t, n;
                              return (
                                  null != (n = null == (t = e.inviter) ? void 0 : t.username) ? n : ""
                              ).toLowerCase();
                          })
                          .value(),
            [t, f],
        ),
        _ = (0, p.Wu)([T.Z], () => T.Z.getSortedLinkedChannelsForGuild(l.id).filter((e) => null == u || e.id === u.id)),
        C = r.useMemo(
            () =>
                f
                    ? []
                    : [
                          ...y.map((e) => ({
                              type: "invite",
                              data: e,
                          })),
                          ..._.map((e) => ({
                              type: "channel",
                              data: e,
                          })),
                      ],
            [y, _, f],
        ),
        N = () => {
            (0, g.ZDy)(
                async () => (e) =>
                    (0, i.jsx)(
                        Z.default,
                        z(G({}, e), {
                            channel: u,
                            guild: l,
                            source: M.t4x.SETTINGS_INVITE,
                        }),
                    ),
            );
        },
        [S, E] = r.useState(62),
        k = () => {
            let e = { source: P.Zu.GUILD_SETTINGS };
            (0, g.ZDy)(
                async () => (t) =>
                    (0, i.jsx)(
                        I.default,
                        z(G({}, t), {
                            guildId: l.id,
                            analyticsData: e,
                        }),
                    ),
            );
        };
    return (0, i.jsx)(v.Xi, {
        sections: [1, +!c, +!!c, Math.max(1, C.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (3 === t)
                if (0 === C.length && !f)
                    return (0, i.jsx)(
                        "div",
                        {
                            children: (0, i.jsxs)(g.ubH, {
                                theme: h,
                                children: [
                                    (0, i.jsx)(g.oxh, {
                                        darkSrc: n(914814),
                                        lightSrc: n(370392),
                                        width: 256,
                                        height: 130,
                                    }),
                                    (0, i.jsx)(g.OZU, {
                                        note: U.intl.string(U.t.F53CAQ),
                                        children: U.intl.string(U.t["+nLJkZ"]),
                                    }),
                                ],
                            }),
                        },
                        "empty-state",
                    );
                else
                    return (0, i.jsxs)(
                        w.Z,
                        {
                            children: [
                                (0, i.jsx)(w.Z.Child, {
                                    grow: 3,
                                    basis: 0,
                                    className: H.marginReset,
                                    children: (0, i.jsx)(g.vwX, { children: U.intl.string(U.t.EgHyKy) }),
                                }),
                                (0, i.jsx)(w.Z.Child, {
                                    basis: 0,
                                    grow: 3,
                                    className: H.marginReset,
                                    children: (0, i.jsx)(g.vwX, {
                                        children: _.length > 0 ? U.intl.string(U.t.l7VISU) : U.intl.string(U.t.LBlFEB),
                                    }),
                                }),
                                (0, i.jsx)(w.Z.Child, {
                                    grow: 1,
                                    basis: 0,
                                    children: (0, i.jsx)(g.vwX, { children: U.intl.string(U.t.erWrmJ) }),
                                }),
                                (0, i.jsx)(w.Z.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(g.vwX, { children: U.intl.string(U.t["1aM27e"]) }),
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
                return (0, i.jsx)(g.X6q, {
                    variant: "heading-lg/semibold",
                    color: "header-primary",
                    className: B.header,
                    children: U.intl.string(U.t["9F90iY"]),
                });
            if (1 === t)
                return (0, i.jsxs)(
                    g.hjN,
                    {
                        className: B.actions,
                        children: [
                            (0, i.jsx)(g.R94, {
                                className: H.marginBottom20,
                                type: g.geA.DESCRIPTION,
                                children:
                                    !0 === o
                                        ? U.intl.format(U.t["97VdNj"], { onCreateInvite: N })
                                        : U.intl.string(U.t.WDw38P),
                            }),
                            (0, i.jsxs)("div", {
                                className: B.inviteDisabledContainer,
                                children: [
                                    (0, i.jsx)(g.zxk, {
                                        size: "sm",
                                        variant: j ? "primary" : "critical-primary",
                                        text: j ? U.intl.string(U.t["/dbw3N"]) : U.intl.string(U.t.Uwsjn5),
                                        onClick: k,
                                        disabled: !x,
                                    }),
                                    j &&
                                        (0, i.jsxs)("div", {
                                            className: B.inviteDisabledTip,
                                            children: [
                                                (0, i.jsx)(g.Mgn, {
                                                    size: "custom",
                                                    width: 20,
                                                    height: 20,
                                                    color: m.Z.unsafe_rawColors.YELLOW_300.css,
                                                }),
                                                (0, i.jsx)(g.Text, {
                                                    variant: "text-sm/normal",
                                                    children: U.intl.string(U.t["2LLbj4"]),
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, i.jsx)(g.izJ, { className: B.headerDivider }),
                        ],
                    },
                    "header",
                );
            if (2 === t)
                return (0, i.jsx)(
                    L.Y,
                    {
                        hasInvites: y.length > 0,
                        setHeight: E,
                        onShowDisableInvites: k,
                        onShowInviteModal: N,
                        hasInviteDisabledPermission: x,
                        invitesDisabled: j,
                        canCreateInvites: o,
                    },
                    "actions-v2",
                );
            if (3 === t) {
                if (0 === C.length && 0 === n && f)
                    return (0, i.jsx)(
                        g.$jN,
                        {
                            className: H.marginTop20,
                            type: g.$jN.Type.SPINNING_CIRCLE,
                        },
                        "spinner",
                    );
                let e = C[n];
                switch (null == e ? void 0 : e.type) {
                    case "invite":
                        return (0, i.jsx)(
                            K,
                            {
                                hide: a,
                                invite: e.data,
                                showChannel: b,
                                inviteDisabled: j,
                            },
                            e.data.code,
                        );
                    case "channel":
                        var r;
                        return (0, i.jsx)(
                            q,
                            {
                                applicationId: null == (r = e.data.linkedLobby) ? void 0 : r.application_id,
                                channel: e.data,
                                showChannel: b,
                                inviteDisabled: j,
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
                    ? S
                    : 3 === e
                      ? 0 === C.length && 0 === t && f
                          ? 62
                          : 62 * (null != C[t])
                      : 0,
        sectionHeight: (e) => (3 === e ? (0 !== C.length || f ? 28 : 240) : 0),
    });
}
