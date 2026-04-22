n.d(t, { A: () => el }), n(938796);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    c = n.n(d),
    u = n(821418),
    m = n(665260),
    g = n(311907),
    h = n(827734),
    x = n(990078),
    p = n(778712),
    A = n(834730),
    b = n(885574),
    f = n(192308),
    _ = n(534514),
    j = n(821609),
    N = n(695366),
    v = n(404778),
    E = n(289873),
    C = n(396478),
    I = n(846293),
    T = n(579872),
    S = n(414079),
    y = n(297413),
    w = n(361739),
    O = n(966327),
    k = n(736653),
    L = n(429913),
    R = n(47167),
    M = n(576470),
    D = n(235986),
    P = n(769015),
    G = n(834409),
    U = n(671576),
    W = n(234355),
    B = n(957103),
    H = n(526132),
    z = n(95701),
    V = n(734057),
    F = n(317525),
    K = n(994500),
    Y = n(287809),
    q = n(347951),
    Q = n(537855),
    Z = n(652215),
    J = n(985018),
    $ = n(795731),
    X = n(979854),
    ee = n(373378);
function et(e) {
    let {
        isDisabled: t,
        inviter: n,
        showChannel: l,
        channel: s,
        inviteSource: r,
        inviteSourceTrailingContent: o,
        uses: d,
        expiresAt: c,
        roles: u,
        guildId: m,
        onRevokeInvite: g,
    } = e;
    return (0, i.jsxs)(D.A, {
        className: a()($._O, X.N, { [$.Gg]: t }),
        children: [
            (0, i.jsxs)(D.A, {
                grow: 4,
                basis: 0,
                align: D.A.Align.CENTER,
                className: $.Qq,
                children: [
                    null != n && (0, i.jsx)(O.A, { user: n, size: p._3.SIZE_24, className: $.my }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != n && (0, i.jsx)(y.A, { discriminatorClass: $.D2, user: n }),
                            l &&
                                null != s &&
                                (0, i.jsx)(A.E, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: (0, R.m1)(s, Y.default, K.A, !0),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(D.A, {
                grow: 3,
                shrink: 1,
                basis: 0,
                align: D.A.Align.CENTER,
                className: $.Qq,
                children: (0, i.jsxs)("div", { className: $.AL, children: [r, o] }),
            }),
            (0, i.jsx)(D.A, {
                grow: 1,
                basis: 0,
                align: D.A.Align.CENTER,
                className: $.Qq,
                children: (0, i.jsx)(A.E, { className: $.r9, variant: "text-sm/normal", children: d }),
            }),
            (0, i.jsx)(D.A, {
                grow: 2,
                basis: 0,
                align: D.A.Align.CENTER,
                className: a()($.Qq, $.sA),
                children: (0, i.jsx)(A.E, { className: $.qW, variant: "text-sm/normal", children: c }),
            }),
            null != m &&
                (0, i.jsx)(D.A, {
                    grow: 2,
                    basis: 0,
                    align: D.A.Align.CENTER,
                    className: $.Qq,
                    children: (0, i.jsx)(B.A, { roles: u, guildId: m }),
                }),
            (0, i.jsx)(S.A, { className: $.eb, onClick: g }),
        ],
    });
}
function en(e) {
    let { invite: t, showChannel: n = !1, inviteDisabled: s = !1, hide: a = !1 } = e,
        r = t.guild?.id,
        o = t.uses;
    t.maxUses > 0 && (o = `${t.uses}/${t.maxUses}`);
    let d = (0, g.bG)(
            [F.A],
            () => (null == r ? [] : t.roles.map((e) => F.A.getRole(r, e.id)).filter((e) => null != e)),
            [r, t.roles],
        ),
        c = l.useMemo(() => (0, z.OY)(t.channel), [t]);
    return (0, i.jsx)(et, {
        isDisabled: s,
        inviter: t.inviter,
        showChannel: n,
        channel: c,
        inviteSource: (0, i.jsx)(A.E, { className: $.Rg, variant: "text-sm/normal", children: a ? "..." : t.code }),
        inviteSourceTrailingContent:
            !a && (0, m.Lt)(t.flags ?? 0, u.Q.IS_APPLICATION_BYPASS)
                ? (0, i.jsxs)("div", {
                      className: $.XH,
                      children: [
                          (0, i.jsx)(A.E, {
                              className: $.Qq,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: J.intl.string(J.t["1i1bUl"]),
                          }),
                          (0, i.jsx)(x.m, {
                              text: J.intl.string(J.t["jvd/LF"]),
                              children: (0, i.jsx)(b.m, { size: "xxs", color: "currentColor", className: $.G }),
                          }),
                      ],
                  })
                : null,
        uses: o,
        expiresAt: (0, i.jsx)(M.A, { deadline: t.getExpiresAt() }),
        roles: d,
        guildId: r,
        onRevokeInvite: () => {
            I.Ay.revokeInvite(t);
        },
    });
}
function ei(e) {
    let { applicationId: t, channel: l, showChannel: s = !1, inviteDisabled: a = !1 } = e,
        r = (0, L.h)(t),
        o = (0, g.bG)([Y.default], () => Y.default.getUser(l.linkedLobby?.linked_by)),
        d = (0, H.e)(l);
    return (0, i.jsx)(et, {
        isDisabled: a,
        inviter: o,
        showChannel: s,
        channel: l,
        inviteSource: (0, i.jsxs)("div", {
            className: $._z,
            children: [
                (0, i.jsx)(P.A, { game: r, size: P.M.XXSMALL }),
                (0, i.jsx)(A.E, { className: $.PD, variant: "text-sm/normal", children: r?.name }),
            ],
        }),
        uses: J.intl.string(J.t.jHpxwo),
        expiresAt: J.intl.string(J.t.PqEzn8),
        roles: [],
        guildId: l.guild_id,
        onRevokeInvite: () => {
            d && null != r
                ? (0, f.openModalLazy)(async () => {
                      let { default: e } = await n.e("73380").then(n.bind(n, 106895));
                      return (t) => (0, i.jsx)(e, { ...t, channel: l, application: r });
                  })
                : T.A.show({ title: J.intl.string(J.t.JmUENg), body: J.intl.string(J.t.SrvsML) });
        },
    });
}
function el(e) {
    let {
        invites: t,
        guild: s,
        hide: a,
        canCreateInvites: r,
        withV2Actions: d,
        channel: u = null,
        showChannel: m = !1,
        loading: x = !1,
    } = e;
    o()(null != s, "guild is required");
    let p = (0, k.Ay)(),
        b = (0, q.Fi)(s),
        I = (0, q.Wr)(s),
        T = l.useMemo(
            () =>
                null == t || x
                    ? []
                    : c()(t)
                          .sortBy((e) => (e.inviter?.username ?? "").toLowerCase())
                          .value(),
            [t, x],
        ),
        S = (0, g.yK)([V.A], () => V.A.getSortedLinkedChannelsForGuild(s.id).filter((e) => null == u || e.id === u.id)),
        y = l.useMemo(
            () =>
                x
                    ? []
                    : [...T.map((e) => ({ type: "invite", data: e })), ...S.map((e) => ({ type: "channel", data: e }))],
            [T, S, x],
        ),
        O = () => {
            (0, f.openModalLazy)(
                async () => (e) => (0, i.jsx)(W.default, { ...e, channel: u, guild: s, source: Z.PE1.SETTINGS_INVITE }),
            );
        },
        [L, R] = l.useState(62),
        M = () => {
            let e = { source: G.Eo.GUILD_SETTINGS };
            (0, f.openModalLazy)(async () => (t) => (0, i.jsx)(U.default, { ...t, guildId: s.id, analyticsData: e }));
        };
    return (0, i.jsx)(w.ic, {
        sections: [1, +!d, +!!d, Math.max(1, y.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (3 === t)
                if (0 === y.length && !x)
                    return (0, i.jsx)(
                        "div",
                        {
                            children: (0, i.jsxs)(C.pp, {
                                theme: p,
                                children: [
                                    (0, i.jsx)(C.G8, {
                                        darkSrc: n(774125),
                                        lightSrc: n(151803),
                                        width: 256,
                                        height: 130,
                                    }),
                                    (0, i.jsx)(C.SG, {
                                        note: J.intl.string(J.t.F53CAc),
                                        children: J.intl.string(J.t["+nLJkZ"]),
                                    }),
                                ],
                            }),
                        },
                        "empty-state",
                    );
                else
                    return (0, i.jsxs)(
                        D.A,
                        {
                            children: [
                                (0, i.jsx)(D.A.Child, {
                                    grow: 4,
                                    basis: 0,
                                    className: ee.Gf,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: J.intl.string(J.t.EgHyKy),
                                    }),
                                }),
                                (0, i.jsx)(D.A.Child, {
                                    basis: 0,
                                    grow: 3,
                                    className: ee.Gf,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: S.length > 0 ? J.intl.string(J.t.l7VISQ) : J.intl.string(J.t.LBlFEN),
                                    }),
                                }),
                                (0, i.jsx)(D.A.Child, {
                                    grow: 1,
                                    basis: 0,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: J.intl.string(J.t.erWrmA),
                                    }),
                                }),
                                (0, i.jsx)(D.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: J.intl.string(J.t["1aM27d"]),
                                    }),
                                }),
                                (0, i.jsx)(D.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(A.E, {
                                        variant: "text-md/medium",
                                        children: J.intl.string(J.t["LPJmL/"]),
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
                return (0, i.jsx)(_.D, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: $.wx,
                    children: J.intl.string(J.t["9F90ic"]),
                });
            if (1 === t)
                return (0, i.jsxs)("div", {
                    className: $.o1,
                    children: [
                        (0, i.jsx)(A.E, {
                            className: ee.SX,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children:
                                !0 === r
                                    ? J.intl.format(J.t["97VdNm"], { onCreateInvite: O })
                                    : J.intl.string(J.t.WDw38H),
                        }),
                        (0, i.jsxs)("div", {
                            className: $.N5,
                            children: [
                                (0, i.jsx)(j.$, {
                                    size: "sm",
                                    variant: I ? "primary" : "critical-primary",
                                    text: I ? J.intl.string(J.t["/dbw3H"]) : J.intl.string(J.t.Uwsjn6),
                                    onClick: M,
                                    disabled: !b,
                                }),
                                I &&
                                    (0, i.jsxs)("div", {
                                        className: $.TJ,
                                        children: [
                                            (0, i.jsx)(N.E, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: h.A.unsafe_rawColors.YELLOW_300.css,
                                            }),
                                            (0, i.jsx)(A.E, {
                                                variant: "text-sm/normal",
                                                children: J.intl.string(J.t["2LLbj9"]),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(v.c, { className: $.zN }),
                    ],
                });
            if (2 === t)
                return (0, i.jsx)(
                    Q.K,
                    {
                        hasInvites: T.length > 0,
                        setHeight: R,
                        onShowDisableInvites: M,
                        onShowInviteModal: O,
                        hasInviteDisabledPermission: b,
                        invitesDisabled: I,
                        canCreateInvites: r,
                    },
                    "actions-v2",
                );
            if (3 === t) {
                if (0 === y.length && 0 === n && x)
                    return (0, i.jsx)(E.y, { className: ee.QX, type: E.y.Type.SPINNING_CIRCLE }, "spinner");
                let e = y[n];
                switch (e?.type) {
                    case "invite":
                        return (0, i.jsx)(
                            en,
                            { hide: a, invite: e.data, showChannel: m, inviteDisabled: I },
                            e.data.code,
                        );
                    case "channel":
                        return (0, i.jsx)(
                            ei,
                            {
                                applicationId: e.data.linkedLobby?.application_id,
                                channel: e.data,
                                showChannel: m,
                                inviteDisabled: I,
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
                    ? L
                    : 3 === e
                      ? 0 === y.length && 0 === t && x
                          ? 62
                          : 62 * (null != y[t])
                      : 0,
        sectionHeight: (e) => (3 === e ? (0 !== y.length || x ? 28 : 240) : 0),
    });
}
