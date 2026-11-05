(n.d(t, { A: () => ec }), n(938796));
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(435558),
    d = n.n(c),
    u = n(821418),
    m = n(665260),
    g = n(855986),
    h = n(646514),
    x = n(778712),
    A = n(834730),
    p = n(866665),
    b = n(885574),
    f = n(192308),
    j = n(534514),
    N = n(821609),
    E = n(695366),
    C = n(404778),
    v = n(289873),
    I = n(574332),
    T = n(579872),
    y = n(414079),
    S = n(297413),
    k = n(361739),
    O = n(966327),
    w = n(429913),
    L = n(47167),
    R = n(576470),
    M = n(235986),
    _ = n(769015),
    P = n(834409),
    W = n(671576),
    D = n(660194),
    G = n(939249),
    U = n(442433),
    B = n(950072),
    H = n(792996),
    V = n(3013);
function z(e) {
    let { roles: t, guildId: s } = e,
        a = t[0] ?? null,
        r = t.length - 1,
        o = l.useMemo(() => new Intl.NumberFormat(H.intl.currentLocale).format(r), [r]),
        c = l.useCallback(
            (e) => {
                (e.stopPropagation(),
                    (0, U.L3)(e, async () => {
                        let { default: e } = await n.e(54526).then(n.bind(n, 551309));
                        return () => (0, i.jsx)(e, { roles: t });
                    }));
            },
            [t],
        );
    return 0 === t.length
        ? null
        : (0, i.jsxs)("div", {
              className: V.yk,
              children: [
                  null != a && (0, i.jsx)(B.A, { className: V.Bc, role: a, guildId: s }),
                  r > 0 &&
                      (0, i.jsx)(G.D, {
                          className: V.yt,
                          onClick: c,
                          children: (0, i.jsx)(p.m, {
                              text: H.intl.string(H.t.DY6n4q),
                              children: (0, i.jsxs)(A.E, {
                                  variant: "body-xs/medium",
                                  color: "text-strong",
                                  children: ["+", o],
                              }),
                          }),
                      }),
              ],
          });
}
var F = n(526132),
    K = n(95701),
    Y = n(734057),
    q = n(317525),
    Q = n(994500),
    Z = n(287809),
    J = n(347951),
    X = n(825484),
    $ = n(770178),
    ee = n(970433);
function et(e) {
    let {
            hasInvites: t,
            setHeight: n,
            onShowDisableInvites: s,
            onShowInviteModal: a,
            hasInviteDisabledPermission: r,
            invitesDisabled: o,
            canCreateInvites: d,
        } = e,
        u = l.useMemo(() => (0, c.debounce)(n, 100), [n]),
        m = l.useCallback(
            (e) => {
                let t = e.contentRect;
                null != t && u(t.height);
            },
            [u],
        ),
        g = (0, $.w)(m);
    return (0, i.jsxs)("div", {
        ref: g,
        className: ee.o,
        children: [
            (0, i.jsx)(j.D, {
                variant: "body-xs/semibold",
                color: "text-muted",
                className: ee.U,
                children: t ? H.intl.string(H.t.DjWsya) : H.intl.string(H.t.AmwmLg),
            }),
            (0, i.jsxs)(X.e, {
                children: [
                    (0, i.jsx)(N.$, {
                        variant: o ? "primary" : "critical-secondary",
                        text: o ? H.intl.string(H.t["/dbw3H"]) : H.intl.string(H.t.Uwsjn6),
                        onClick: s,
                        disabled: !r,
                    }),
                    !0 === d
                        ? (0, i.jsx)(N.$, { variant: "primary", text: H.intl.string(H.t.KmK3q4), onClick: a })
                        : null,
                ],
            }),
        ],
    });
}
var en = n(652215),
    ei = n(833414),
    el = n(252149),
    es = n(221851);
function ea(e) {
    let {
        isDisabled: t,
        inviter: n,
        showChannel: l,
        channel: s,
        inviteSource: r,
        inviteSourceTrailingContent: o,
        uses: c,
        expiresAt: d,
        roles: u,
        guildId: m,
        onRevokeInvite: g,
    } = e;
    return (0, i.jsxs)(M.A, {
        className: a()(ei._O, el.N, { [ei.Gg]: t }),
        children: [
            (0, i.jsxs)(M.A, {
                grow: 4,
                basis: 0,
                align: M.A.Align.CENTER,
                className: ei.Qq,
                children: [
                    null != n && (0, i.jsx)(O.A, { user: n, size: x._3.SIZE_24, className: ei.my }),
                    (0, i.jsxs)("div", {
                        children: [
                            null != n && (0, i.jsx)(S.A, { discriminatorClass: ei.D2, user: n }),
                            l &&
                                null != s &&
                                (0, i.jsx)(A.E, {
                                    variant: "body-xs/normal",
                                    color: "text-default",
                                    children: (0, L.m1)(s, Z.default, Q.A, !0),
                                }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(M.A, {
                grow: 3,
                shrink: 1,
                basis: 0,
                align: M.A.Align.CENTER,
                className: ei.Qq,
                children: (0, i.jsxs)("div", { className: ei.AL, children: [r, o] }),
            }),
            (0, i.jsx)(M.A, {
                grow: 1,
                basis: 0,
                align: M.A.Align.CENTER,
                className: ei.Qq,
                children: (0, i.jsx)(A.E, { className: ei.r9, variant: "body-sm/normal", children: c }),
            }),
            (0, i.jsx)(M.A, {
                grow: 2,
                basis: 0,
                align: M.A.Align.CENTER,
                className: a()(ei.Qq, ei.sA),
                children: (0, i.jsx)(A.E, { className: ei.qW, variant: "body-sm/normal", children: d }),
            }),
            null != m &&
                (0, i.jsx)(M.A, {
                    grow: 2,
                    basis: 0,
                    align: M.A.Align.CENTER,
                    className: ei.Qq,
                    children: (0, i.jsx)(z, { roles: u, guildId: m }),
                }),
            (0, i.jsx)(y.A, { className: ei.eb, onClick: g }),
        ],
    });
}
function er(e) {
    let { invite: t, showChannel: n = !1, inviteDisabled: s = !1, hide: a = !1 } = e,
        r = t.guild?.id,
        o = t.uses;
    t.maxUses > 0 && (o = `${t.uses}/${t.maxUses}`);
    let c = (0, g.yK)(
            [q.A],
            () => (null == r ? [] : t.roles.map((e) => q.A.getRole(r, e.id)).filter((e) => null != e)),
            [r, t.roles],
        ),
        d = l.useMemo(() => (0, K.OY)(t.channel), [t]);
    return (0, i.jsx)(ea, {
        isDisabled: s,
        inviter: t.inviter,
        showChannel: n,
        channel: d,
        inviteSource: (0, i.jsx)(A.E, { className: ei.Rg, variant: "body-sm/normal", children: a ? "..." : t.code }),
        inviteSourceTrailingContent:
            !a && (0, m.Lt)(t.flags ?? 0, u.Q.IS_APPLICATION_BYPASS)
                ? (0, i.jsxs)("div", {
                      className: ei.XH,
                      children: [
                          (0, i.jsx)(A.E, {
                              className: ei.Qq,
                              variant: "body-xs/normal",
                              color: "text-muted",
                              children: H.intl.string(H.t["1i1bUl"]),
                          }),
                          (0, i.jsx)(p.m, {
                              text: H.intl.string(H.t["jvd/LF"]),
                              children: (0, i.jsx)(b.CircleInformationIcon, {
                                  size: "xxs",
                                  color: "currentColor",
                                  className: ei.G,
                              }),
                          }),
                      ],
                  })
                : null,
        uses: o,
        expiresAt: (0, i.jsx)(R.A, { deadline: t.getExpiresAt() }),
        roles: c,
        guildId: r,
        onRevokeInvite: function () {
            I.Ay.revokeInvite(t);
        },
    });
}
function eo(e) {
    let { applicationId: t, channel: l, showChannel: s = !1, inviteDisabled: a = !1 } = e,
        r = (0, w.h)(t),
        o = (0, g.bG)([Z.default], () => Z.default.getUser(l.linkedLobby?.linked_by)),
        c = (0, F.e)(l);
    return (0, i.jsx)(ea, {
        isDisabled: a,
        inviter: o,
        showChannel: s,
        channel: l,
        inviteSource: (0, i.jsxs)("div", {
            className: ei._z,
            children: [
                (0, i.jsx)(_.A, { game: r, size: _.M.XXSMALL }),
                (0, i.jsx)(A.E, { className: ei.PD, variant: "body-sm/normal", children: r?.name }),
            ],
        }),
        uses: H.intl.string(H.t.jHpxwo),
        expiresAt: H.intl.string(H.t.PqEzn8),
        roles: [],
        guildId: l.guild_id,
        onRevokeInvite: function () {
            c && null != r
                ? (0, f.mM)(async () => {
                      let { default: e } = await Promise.all([n.e(243486), n.e(673380)]).then(n.bind(n, 106895));
                      return (t) => (0, i.jsx)(e, { ...t, channel: l, application: r });
                  })
                : T.A.show({ title: H.intl.string(H.t.JmUENg), body: H.intl.string(H.t.SrvsML) });
        },
    });
}
function ec(e) {
    let {
        invites: t,
        guild: n,
        hide: s,
        canCreateInvites: a,
        withV2Actions: r,
        channel: c = null,
        showChannel: u = !1,
        loading: m = !1,
    } = e;
    o()(null != n, "guild is required");
    let x = (0, J.Fi)(n),
        p = (0, J.Wr)(n),
        b = l.useMemo(
            () =>
                null == t || m
                    ? []
                    : d()(t)
                          .sortBy((e) => (e.inviter?.username ?? "").toLowerCase())
                          .value(),
            [t, m],
        ),
        I = (0, g.yK)([Y.A], () => Y.A.getSortedLinkedChannelsForGuild(n.id).filter((e) => null == c || e.id === c.id)),
        T = l.useMemo(
            () =>
                m
                    ? []
                    : [...b.map((e) => ({ type: "invite", data: e })), ...I.map((e) => ({ type: "channel", data: e }))],
            [b, I, m],
        ),
        y = () => {
            (0, f.mM)(
                async () => (e) =>
                    (0, i.jsx)(D.default, { ...e, channel: c, guild: n, source: en.PE1.SETTINGS_INVITE }),
            );
        },
        [S, O] = l.useState(62),
        w = () => {
            let e = { source: P.Eo.GUILD_SETTINGS };
            (0, f.mM)(async () => (t) => (0, i.jsx)(W.default, { ...t, guildId: n.id, analyticsData: e }));
        };
    return (0, i.jsx)(k.ic, {
        sections: [1, +!r, +!!r, Math.max(1, T.length)],
        renderSection: (e) => {
            let { section: t } = e;
            if (3 === t && (0 !== T.length || m))
                return (0, i.jsxs)(
                    M.A,
                    {
                        children: [
                            (0, i.jsx)(M.A.Child, {
                                grow: 4,
                                basis: 0,
                                className: es.Gf,
                                children: (0, i.jsx)(A.E, {
                                    variant: "body-md/medium",
                                    children: H.intl.string(H.t.EgHyKy),
                                }),
                            }),
                            (0, i.jsx)(M.A.Child, {
                                basis: 0,
                                grow: 3,
                                className: es.Gf,
                                children: (0, i.jsx)(A.E, {
                                    variant: "body-md/medium",
                                    children: I.length > 0 ? H.intl.string(H.t.l7VISQ) : H.intl.string(H.t.LBlFEN),
                                }),
                            }),
                            (0, i.jsx)(M.A.Child, {
                                grow: 1,
                                basis: 0,
                                children: (0, i.jsx)(A.E, {
                                    variant: "body-md/medium",
                                    children: H.intl.string(H.t.erWrmA),
                                }),
                            }),
                            (0, i.jsx)(M.A.Child, {
                                grow: 2,
                                basis: 0,
                                children: (0, i.jsx)(A.E, {
                                    variant: "body-md/medium",
                                    children: H.intl.string(H.t["1aM27d"]),
                                }),
                            }),
                            (0, i.jsx)(M.A.Child, {
                                grow: 2,
                                basis: 0,
                                children: (0, i.jsx)(A.E, {
                                    variant: "body-md/medium",
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
                return (0, i.jsxs)("div", {
                    className: ei.wx,
                    children: [
                        (0, i.jsx)(j.D, {
                            variant: "heading-lg/semibold",
                            color: "text-strong",
                            children: H.intl.string(H.t["9F90ic"]),
                        }),
                        !0 === r
                            ? (0, i.jsx)(A.E, {
                                  variant: "body-md/medium",
                                  color: "text-default",
                                  className: ei.Hu,
                                  children: H.intl.string(H.t.gn3Poi),
                              })
                            : null,
                    ],
                });
            if (1 === t)
                return (0, i.jsxs)("div", {
                    className: ei.o1,
                    children: [
                        (0, i.jsx)(A.E, {
                            className: es.SX,
                            variant: "body-sm/normal",
                            color: "text-subtle",
                            children:
                                !0 === a
                                    ? H.intl.format(H.t["97VdNm"], { onCreateInvite: y })
                                    : H.intl.string(H.t.WDw38H),
                        }),
                        (0, i.jsxs)("div", {
                            className: ei.N5,
                            children: [
                                (0, i.jsx)(N.$, {
                                    size: "sm",
                                    variant: p ? "primary" : "critical-primary",
                                    text: p ? H.intl.string(H.t["/dbw3H"]) : H.intl.string(H.t.Uwsjn6),
                                    onClick: w,
                                    disabled: !x,
                                }),
                                p &&
                                    (0, i.jsxs)("div", {
                                        className: ei.TJ,
                                        children: [
                                            (0, i.jsx)(E.CircleErrorIcon, {
                                                size: "custom",
                                                width: 20,
                                                height: 20,
                                                color: h.A.unsafe_rawColors.YELLOW_300.css,
                                            }),
                                            (0, i.jsx)(A.E, {
                                                variant: "body-sm/normal",
                                                children: H.intl.string(H.t["2LLbj9"]),
                                            }),
                                        ],
                                    }),
                            ],
                        }),
                        (0, i.jsx)(C.c, { className: ei.zN }),
                    ],
                });
            if (2 === t)
                return (0, i.jsx)(
                    et,
                    {
                        hasInvites: b.length > 0,
                        setHeight: O,
                        onShowDisableInvites: w,
                        onShowInviteModal: y,
                        hasInviteDisabledPermission: x,
                        invitesDisabled: p,
                        canCreateInvites: a,
                    },
                    "actions-v2",
                );
            if (3 === t) {
                if (0 === T.length && 0 === n && m)
                    return (0, i.jsx)(v.y, { className: es.QX, type: v.y.Type.SPINNING_CIRCLE }, "spinner");
                let e = T[n];
                switch (e?.type) {
                    case "invite":
                        return (0, i.jsx)(
                            er,
                            { hide: s, invite: e.data, showChannel: u, inviteDisabled: p },
                            e.data.code,
                        );
                    case "channel":
                        return (0, i.jsx)(
                            eo,
                            {
                                applicationId: e.data.linkedLobby?.application_id,
                                channel: e.data,
                                showChannel: u,
                                inviteDisabled: p,
                            },
                            e.data.id,
                        );
                    default:
                        return null;
                }
            }
        },
        rowHeight: function (e, t) {
            return 0 === e
                ? !0 === r
                    ? 92
                    : 64
                : 1 === e
                  ? 109
                  : 2 === e
                    ? S
                    : 3 === e
                      ? 0 === T.length && 0 === t && m
                          ? 62
                          : 62 * (null != T[t])
                      : 0;
        },
        sectionHeight: function (e) {
            return 3 === e ? (0 !== T.length || m ? 28 : 0) : 0;
        },
    });
}
