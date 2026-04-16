n.d(t, { A: () => J }), n(938796);
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
    x = n(311907),
    g = n(827734),
    h = n(990078),
    p = n(397927),
    A = n(846293),
    b = n(579872),
    f = n(414079),
    _ = n(297413),
    j = n(361739),
    N = n(966327),
    v = n(736653),
    T = n(429913),
    C = n(47167),
    E = n(576470),
    I = n(235986),
    S = n(769015),
    y = n(834409),
    O = n(671576),
    w = n(234355),
    k = n(957103),
    R = n(526132),
    L = n(95701),
    M = n(734057),
    G = n(317525),
    D = n(994500),
    P = n(287809),
    U = n(347951),
    B = n(537855),
    W = n(652215),
    H = n(985018),
    V = n(32019),
    z = n(274446),
    F = n(818050);
function K(e) {
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
        onRevokeInvite: x,
    } = e;
    return (0, i.jsxs)(I.A, {
        className: a()(V._O, z.N, { [V.Gg]: t }),
        children: [
            (0, i.jsxs)(I.A, {
                grow: 4,
                basis: 0,
                align: I.A.Align.CENTER,
                className: V.Qq,
                children: [
                    null != n && (0, i.jsx)(N.A, { user: n, size: p._3J.SIZE_24, className: V.my }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != n && (0, i.jsx)(_.A, { discriminatorClass: V.D2, user: n }),
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
            (0, i.jsx)(I.A, {
                grow: 3,
                shrink: 1,
                basis: 0,
                align: I.A.Align.CENTER,
                className: V.Qq,
                children: (0, i.jsxs)("div", { className: V.AL, children: [r, o] }),
            }),
            (0, i.jsx)(I.A, {
                grow: 1,
                basis: 0,
                align: I.A.Align.CENTER,
                className: V.Qq,
                children: (0, i.jsx)(p.Text, { className: V.r9, variant: "text-sm/normal", children: d }),
            }),
            (0, i.jsx)(I.A, {
                grow: 2,
                basis: 0,
                align: I.A.Align.CENTER,
                className: a()(V.Qq, V.sA),
                children: (0, i.jsx)(p.Text, { className: V.qW, variant: "text-sm/normal", children: c }),
            }),
            null != m &&
                (0, i.jsx)(I.A, {
                    grow: 2,
                    basis: 0,
                    align: I.A.Align.CENTER,
                    className: V.Qq,
                    children: (0, i.jsx)(k.A, { roles: u, guildId: m }),
                }),
            (0, i.jsx)(f.A, { className: V.eb, onClick: x }),
        ],
    });
}
function Y(e) {
    let { invite: t, showChannel: n = !1, inviteDisabled: s = !1, hide: a = !1 } = e,
        r = t.guild?.id,
        o = t.uses;
    t.maxUses > 0 && (o = `${t.uses}/${t.maxUses}`);
    let d = (0, x.bG)(
            [G.A],
            () => (null == r ? [] : t.roles.map((e) => G.A.getRole(r, e.id)).filter((e) => null != e)),
            [r, t.roles],
        ),
        c = l.useMemo(() => (0, L.OY)(t.channel), [t]);
    return (0, i.jsx)(K, {
        isDisabled: s,
        inviter: t.inviter,
        showChannel: n,
        channel: c,
        inviteSource: (0, i.jsx)(p.Text, { className: V.Rg, variant: "text-sm/normal", children: a ? "..." : t.code }),
        inviteSourceTrailingContent:
            !a && (0, m.Lt)(t.flags ?? 0, u.Q.IS_APPLICATION_BYPASS)
                ? (0, i.jsxs)("div", {
                      className: V.XH,
                      children: [
                          (0, i.jsx)(p.Text, {
                              className: V.Qq,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: H.intl.string(H.t["1i1bUl"]),
                          }),
                          (0, i.jsx)(h.m, {
                              text: H.intl.string(H.t["jvd/LF"]),
                              children: (0, i.jsx)(p.mir, { size: "xxs", color: "currentColor", className: V.G }),
                          }),
                      ],
                  })
                : null,
        uses: o,
        expiresAt: (0, i.jsx)(E.A, { deadline: t.getExpiresAt() }),
        roles: d,
        guildId: r,
        onRevokeInvite: () => {
            A.Ay.revokeInvite(t);
        },
    });
}
function q(e) {
    let { applicationId: t, channel: l, showChannel: s = !1, inviteDisabled: a = !1 } = e,
        r = (0, T.h)(t),
        o = (0, x.bG)([P.default], () => P.default.getUser(l.linkedLobby?.linked_by)),
        d = (0, R.e)(l);
    return (0, i.jsx)(K, {
        isDisabled: a,
        inviter: o,
        showChannel: s,
        channel: l,
        inviteSource: (0, i.jsxs)("div", {
            className: V._z,
            children: [
                (0, i.jsx)(S.A, { game: r, size: S.M.XXSMALL }),
                (0, i.jsx)(p.Text, { className: V.PD, variant: "text-sm/normal", children: r?.name }),
            ],
        }),
        uses: H.intl.string(H.t.jHpxwo),
        expiresAt: H.intl.string(H.t.PqEzn8),
        roles: [],
        guildId: l.guild_id,
        onRevokeInvite: () => {
            d && null != r
                ? (0, p.mMO)(async () => {
                      let { default: e } = await n.e("73380").then(n.bind(n, 106895));
                      return (t) => (0, i.jsx)(e, { ...t, channel: l, application: r });
                  })
                : b.A.show({ title: H.intl.string(H.t.JmUENg), body: H.intl.string(H.t.SrvsML) });
        },
    });
}
function J(e) {
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
    let A = (0, v.Ay)(),
        b = (0, U.Fi)(s),
        f = (0, U.Wr)(s),
        _ = l.useMemo(
            () =>
                null == t || h
                    ? []
                    : c()(t)
                          .sortBy((e) => (e.inviter?.username ?? "").toLowerCase())
                          .value(),
            [t, h],
        ),
        N = (0, x.yK)([M.A], () => M.A.getSortedLinkedChannelsForGuild(s.id).filter((e) => null == u || e.id === u.id)),
        T = l.useMemo(
            () =>
                h
                    ? []
                    : [..._.map((e) => ({ type: "invite", data: e })), ...N.map((e) => ({ type: "channel", data: e }))],
            [_, N, h],
        ),
        C = () => {
            (0, p.mMO)(
                async () => (e) => (0, i.jsx)(w.default, { ...e, channel: u, guild: s, source: W.PE1.SETTINGS_INVITE }),
            );
        },
        [E, S] = l.useState(62),
        k = () => {
            let e = { source: y.Eo.GUILD_SETTINGS };
            (0, p.mMO)(async () => (t) => (0, i.jsx)(O.default, { ...t, guildId: s.id, analyticsData: e }));
        };
    return (0, i.jsx)(j.ic, {
        sections: [1, +!d, +!!d, Math.max(1, T.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (3 === t)
                if (0 === T.length && !h)
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
                        I.A,
                        {
                            children: [
                                (0, i.jsx)(I.A.Child, {
                                    grow: 4,
                                    basis: 0,
                                    className: F.Gf,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        children: H.intl.string(H.t.EgHyKy),
                                    }),
                                }),
                                (0, i.jsx)(I.A.Child, {
                                    basis: 0,
                                    grow: 3,
                                    className: F.Gf,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        children: N.length > 0 ? H.intl.string(H.t.l7VISQ) : H.intl.string(H.t.LBlFEN),
                                    }),
                                }),
                                (0, i.jsx)(I.A.Child, {
                                    grow: 1,
                                    basis: 0,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        children: H.intl.string(H.t.erWrmA),
                                    }),
                                }),
                                (0, i.jsx)(I.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(p.Text, {
                                        variant: "text-md/medium",
                                        children: H.intl.string(H.t["1aM27d"]),
                                    }),
                                }),
                                (0, i.jsx)(I.A.Child, {
                                    grow: 2,
                                    basis: 0,
                                    children: (0, i.jsx)(p.Text, {
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
                return (0, i.jsx)(p.Heading, {
                    variant: "heading-lg/semibold",
                    color: "text-strong",
                    className: V.wx,
                    children: H.intl.string(H.t["9F90ic"]),
                });
            if (1 === t)
                return (0, i.jsxs)("div", {
                    className: V.o1,
                    children: [
                        (0, i.jsx)(p.Text, {
                            className: F.SX,
                            variant: "text-sm/normal",
                            color: "text-subtle",
                            children:
                                !0 === r
                                    ? H.intl.format(H.t["97VdNm"], { onCreateInvite: C })
                                    : H.intl.string(H.t.WDw38H),
                        }),
                        (0, i.jsxs)("div", {
                            className: V.N5,
                            children: [
                                (0, i.jsx)(p.Button, {
                                    size: "sm",
                                    variant: f ? "primary" : "critical-primary",
                                    text: f ? H.intl.string(H.t["/dbw3H"]) : H.intl.string(H.t.Uwsjn6),
                                    onClick: k,
                                    disabled: !b,
                                }),
                                f &&
                                    (0, i.jsxs)("div", {
                                        className: V.TJ,
                                        children: [
                                            (0, i.jsx)(p.EpV, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: g.A.unsafe_rawColors.YELLOW_300.css,
                                            }),
                                            (0, i.jsx)(p.Text, {
                                                variant: "text-sm/normal",
                                                children: H.intl.string(H.t["2LLbj9"]),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(p.cGx, { className: V.zN }),
                    ],
                });
            if (2 === t)
                return (0, i.jsx)(
                    B.K,
                    {
                        hasInvites: _.length > 0,
                        setHeight: S,
                        onShowDisableInvites: k,
                        onShowInviteModal: C,
                        hasInviteDisabledPermission: b,
                        invitesDisabled: f,
                        canCreateInvites: r,
                    },
                    "actions-v2",
                );
            if (3 === t) {
                if (0 === T.length && 0 === n && h)
                    return (0, i.jsx)(p.y$y, { className: F.QX, type: p.y$y.Type.SPINNING_CIRCLE }, "spinner");
                let e = T[n];
                switch (e?.type) {
                    case "invite":
                        return (0, i.jsx)(
                            Y,
                            { hide: a, invite: e.data, showChannel: m, inviteDisabled: f },
                            e.data.code,
                        );
                    case "channel":
                        return (0, i.jsx)(
                            q,
                            {
                                applicationId: e.data.linkedLobby?.application_id,
                                channel: e.data,
                                showChannel: m,
                                inviteDisabled: f,
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
                    ? E
                    : 3 === e
                      ? 0 === T.length && 0 === t && h
                          ? 62
                          : 62 * (null != T[t])
                      : 0,
        sectionHeight: (e) => (3 === e ? (0 !== T.length || h ? 28 : 240) : 0),
    });
}
