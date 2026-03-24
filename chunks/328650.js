n.d(t, { A: () => Q }), n(938796);
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
    x = n(827734),
    h = n(990078),
    p = n(397927),
    A = n(846293),
    b = n(579872),
    f = n(414079),
    _ = n(297413),
    N = n(361739),
    j = n(966327),
    T = n(736653),
    v = n(429913),
    C = n(47167),
    I = n(576470),
    E = n(235986),
    S = n(769015),
    y = n(834409),
    O = n(671576),
    w = n(540683),
    R = n(234355),
    k = n(957103),
    L = n(526132),
    M = n(95701),
    G = n(734057),
    U = n(317525),
    D = n(994500),
    P = n(287809),
    B = n(347951),
    W = n(537855),
    H = n(652215),
    V = n(985018),
    z = n(928128),
    F = n(506823),
    K = n(473169);
function Y(e) {
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
        showRolesColumn: g,
        onRevokeInvite: x,
    } = e;
    return (0, i.jsxs)(E.A, {
        className: a()(z._O, F.N, { [z.Gg]: t }),
        children: [
            (0, i.jsxs)(E.A, {
                grow: 4,
                basis: 0,
                align: E.A.Align.CENTER,
                className: z.Qq,
                children: [
                    null != n && (0, i.jsx)(j.A, { user: n, size: p._3J.SIZE_24, className: z.my }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != n && (0, i.jsx)(_.A, { discriminatorClass: z.D2, user: n }),
                            l &&
                                null != s &&
                                (0, i.jsx)(p.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: (0, C.m1)(s, P.default, D.A, !0),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(E.A, {
                grow: 3,
                shrink: 1,
                basis: 0,
                align: E.A.Align.CENTER,
                className: z.Qq,
                children: (0, i.jsxs)("div", { className: z.AL, children: [r, o] }),
            }),
            (0, i.jsx)(E.A, {
                grow: 1,
                basis: 0,
                align: E.A.Align.CENTER,
                className: z.Qq,
                children: (0, i.jsx)(p.Text, { className: z.r9, variant: "text-sm/normal", children: d }),
            }),
            (0, i.jsx)(E.A, {
                grow: 2,
                basis: 0,
                align: E.A.Align.CENTER,
                className: a()(z.Qq, z.sA),
                children: (0, i.jsx)(p.Text, { className: z.qW, variant: "text-sm/normal", children: c }),
            }),
            g &&
                null != m &&
                (0, i.jsx)(E.A, {
                    grow: 2,
                    basis: 0,
                    align: E.A.Align.CENTER,
                    className: z.Qq,
                    children: (0, i.jsx)(k.A, { roles: u, guildId: m }),
                }),
            (0, i.jsx)(f.A, { className: z.eb, onClick: x }),
        ],
    });
}
function q(e) {
    let { invite: t, showChannel: n = !1, inviteDisabled: s = !1, hide: a = !1, showRolesColumn: r } = e,
        o = t.guild?.id,
        d = t.uses;
    t.maxUses > 0 && (d = `${t.uses}/${t.maxUses}`);
    let c = (0, g.bG)(
            [U.A],
            () => (null == o ? [] : t.roles.map((e) => U.A.getRole(o, e.id)).filter((e) => null != e)),
            [o, t.roles],
        ),
        x = l.useMemo(() => (0, M.OY)(t.channel), [t]);
    return (0, i.jsx)(Y, {
        isDisabled: s,
        inviter: t.inviter,
        showChannel: n,
        channel: x,
        inviteSource: (0, i.jsx)(p.Text, { className: z.Rg, variant: "text-sm/normal", children: a ? "..." : t.code }),
        inviteSourceTrailingContent:
            !a && (0, m.Lt)(t.flags ?? 0, u.Q.IS_APPLICATION_BYPASS)
                ? (0, i.jsxs)("div", {
                      className: z.XH,
                      children: [
                          (0, i.jsx)(p.Text, {
                              className: z.Qq,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: V.intl.string(V.t["1i1bUl"]),
                          }),
                          (0, i.jsx)(h.m, {
                              text: V.intl.string(V.t["jvd/LF"]),
                              children: (0, i.jsx)(p.mir, { size: "xxs", color: "currentColor", className: z.G }),
                          }),
                      ],
                  })
                : null,
        uses: d,
        expiresAt: (0, i.jsx)(I.A, { deadline: t.getExpiresAt() }),
        roles: c,
        guildId: o,
        showRolesColumn: r,
        onRevokeInvite: () => {
            A.Ay.revokeInvite(t);
        },
    });
}
function J(e) {
    let { applicationId: t, channel: l, showChannel: s = !1, inviteDisabled: a = !1, showRolesColumn: r } = e,
        o = (0, v.h)(t),
        d = (0, g.bG)([P.default], () => P.default.getUser(l.linkedLobby?.linked_by)),
        c = (0, L.e)(l);
    return (0, i.jsx)(Y, {
        isDisabled: a,
        inviter: d,
        showChannel: s,
        channel: l,
        inviteSource: (0, i.jsxs)("div", {
            className: z._z,
            children: [
                (0, i.jsx)(S.A, { game: o, size: S.M.XXSMALL }),
                (0, i.jsx)(p.Text, { className: z.PD, variant: "text-sm/normal", children: o?.name }),
            ],
        }),
        uses: V.intl.string(V.t.jHpxwo),
        expiresAt: V.intl.string(V.t.PqEzn8),
        roles: [],
        guildId: l.guild_id,
        showRolesColumn: r,
        onRevokeInvite: () => {
            c && null != o
                ? (0, p.mMO)(async () => {
                      let { default: e } = await n.e("73380").then(n.bind(n, 106895));
                      return (t) => (0, i.jsx)(e, { ...t, channel: l, application: o });
                  })
                : b.A.show({ title: V.intl.string(V.t.JmUENg), body: V.intl.string(V.t.SrvsML) });
        },
    });
}
function Q(e) {
    let {
        invites: t,
        guild: s,
        hide: a,
        canCreateInvites: r,
        withV2Actions: d,
        channel: u = null,
        showChannel: m = !1,
        loading: h = !1,
    } = e;
    o()(null != s, "guild is required");
    let A = (0, T.Ay)(),
        b = (0, B.Fi)(s),
        f = (0, B.Wr)(s),
        _ = (0, w.E)(s.id, "SettingsInvites").enabled,
        j = l.useMemo(
            () =>
                null == t || h
                    ? []
                    : c()(t)
                          .sortBy((e) => (e.inviter?.username ?? "").toLowerCase())
                          .value(),
            [t, h],
        ),
        v = (0, g.yK)([G.A], () => G.A.getSortedLinkedChannelsForGuild(s.id).filter((e) => null == u || e.id === u.id)),
        C = l.useMemo(
            () =>
                h
                    ? []
                    : [...j.map((e) => ({ type: "invite", data: e })), ...v.map((e) => ({ type: "channel", data: e }))],
            [j, v, h],
        ),
        I = () => {
            (0, p.mMO)(
                async () => (e) => (0, i.jsx)(R.default, { ...e, channel: u, guild: s, source: H.PE1.SETTINGS_INVITE }),
            );
        },
        [S, k] = l.useState(62),
        L = () => {
            let e = { source: y.Eo.GUILD_SETTINGS };
            (0, p.mMO)(async () => (t) => (0, i.jsx)(O.default, { ...t, guildId: s.id, analyticsData: e }));
        };
    return (0, i.jsx)(N.ic, {
        sections: [1, +!d, +!!d, Math.max(1, C.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (3 === t)
                if (0 === C.length && !h)
                    return (0, i.jsx)(
                        "div",
                        {
                            children: (0, i.jsxs)(p.ppr, {
                                theme: A,
                                children: [
                                    (0, i.jsx)(p.G8R, {
                                        darkSrc: n(774125),
                                        lightSrc: n(151803),
                                        width: 256,
                                        height: 130,
                                    }),
                                    (0, i.jsx)(p.SGT, {
                                        note: V.intl.string(V.t.F53CAc),
                                        children: V.intl.string(V.t["+nLJkZ"]),
                                    }),
                                ],
                            }),
                        },
                        "empty-state",
                    );
                else
                    return (0, i.jsxs)(
                        E.A,
                        {
                            children: [
                                (0, i.jsx)(E.A.Child, {
                                    grow: 4,
                                    basis: 0,
                                    className: K.Gf,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t.EgHyKy),
                                    }),
                                }),
                                (0, i.jsx)(E.A.Child, {
                                    basis: 0,
                                    grow: 3,
                                    className: K.Gf,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        children: v.length > 0 ? V.intl.string(V.t.l7VISQ) : V.intl.string(V.t.LBlFEN),
                                    }),
                                }),
                                (0, i.jsx)(E.A.Child, {
                                    grow: 1,
                                    basis: 0,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t.erWrmA),
                                    }),
                                }),
                                (0, i.jsx)(E.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        children: V.intl.string(V.t["1aM27d"]),
                                    }),
                                }),
                                _ &&
                                    (0, i.jsx)(E.A.Child, {
                                        grow: 2,
                                        basis: 0,
                                        children: (0, i.jsx)(p.Text, {
                                            variant: "text-md/medium",
                                            children: V.intl.string(V.t["LPJmL/"]),
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
                return (0, i.jsx)(p.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: z.wx,
                    children: V.intl.string(V.t["9F90ic"]),
                });
            if (1 === t)
                return (0, i.jsxs)("div", {
                    className: z.o1,
                    children: [
                        (0, i.jsx)(p.Text, {
                            className: K.SX,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children:
                                !0 === r
                                    ? V.intl.format(V.t["97VdNm"], { onCreateInvite: I })
                                    : V.intl.string(V.t.WDw38H),
                        }),
                        (0, i.jsxs)("div", {
                            className: z.N5,
                            children: [
                                (0, i.jsx)(p.Button, {
                                    size: "sm",
                                    variant: f ? "primary" : "critical-primary",
                                    text: f ? V.intl.string(V.t["/dbw3H"]) : V.intl.string(V.t.Uwsjn6),
                                    onClick: L,
                                    disabled: !b,
                                }),
                                f &&
                                    (0, i.jsxs)("div", {
                                        className: z.TJ,
                                        children: [
                                            (0, i.jsx)(p.EpV, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: x.A.unsafe_rawColors.YELLOW_300.css,
                                            }),
                                            (0, i.jsx)(p.Text, {
                                                variant: "text-sm/normal",
                                                children: V.intl.string(V.t["2LLbj9"]),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(p.cGx, { className: z.zN }),
                    ],
                });
            if (2 === t)
                return (0, i.jsx)(
                    W.K,
                    {
                        hasInvites: j.length > 0,
                        setHeight: k,
                        onShowDisableInvites: L,
                        onShowInviteModal: I,
                        hasInviteDisabledPermission: b,
                        invitesDisabled: f,
                        canCreateInvites: r,
                    },
                    "actions-v2",
                );
            if (3 === t) {
                if (0 === C.length && 0 === n && h)
                    return (0, i.jsx)(p.y$y, { className: K.QX, type: p.y$y.Type.SPINNING_CIRCLE }, "spinner");
                let e = C[n];
                switch (e?.type) {
                    case "invite":
                        return (0, i.jsx)(
                            q,
                            { hide: a, invite: e.data, showChannel: m, inviteDisabled: f, showRolesColumn: _ },
                            e.data.code,
                        );
                    case "channel":
                        return (0, i.jsx)(
                            J,
                            {
                                applicationId: e.data.linkedLobby?.application_id,
                                channel: e.data,
                                showChannel: m,
                                inviteDisabled: f,
                                showRolesColumn: _,
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
                      ? 0 === C.length && 0 === t && h
                          ? 62
                          : 62 * (null != C[t])
                      : 0,
        sectionHeight: (e) => (3 === e ? (0 !== C.length || h ? 28 : 240) : 0),
    });
}
