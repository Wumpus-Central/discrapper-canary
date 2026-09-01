l.d(t, { m: () => ea });
var i = l(477900),
    n = l(582128),
    a = l(593673),
    s = l(845021),
    r = l(17928),
    d = l(331322),
    c = l(452027),
    u = l(103557),
    o = l(825484),
    f = l(821609),
    h = l(95477),
    m = l(866665),
    g = l(408278),
    E = l(241326),
    x = l(683071),
    A = l(2553),
    _ = l(405810),
    p = l(967198),
    v = l(488428),
    S = l(776231),
    I = l(486020),
    j = l(652215);
function D(e, t, l) {
    let i = I.QB ? "webp" : "jpg",
        { CDN_HOST: n, API_ENDPOINT: a } = window.GLOBAL_ENV,
        s = j.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        r = null != n ? `https://${n}${s}` : location.protocol + a + s,
        d = { size: (0, S.kr)(500 * (0, S.mZ)()) };
    return "jpg" === i && (d.quality = "lossless"), (r += `?${v.stringify(d)}`);
}
var y = l(125075),
    C = l(375708),
    b = l(868602),
    N = l(834730),
    T = l(445187),
    G = l(890497),
    R = l(734057),
    L = l(317525),
    w = l(576705),
    U = l(935208);
l(321073);
var k = l(485845),
    B = l(136722),
    W = l(435183),
    M = l(155718),
    P = l(795816),
    F = l(933958),
    O = l(574152),
    H = l(627363),
    q = l(587895),
    Y = l(712440),
    z = l(733110),
    X = l(488926),
    V = l(716357),
    $ = l(360469);
function K() {
    return (0, r.bG)([p.A, V.A], () => {
        let e = p.A.getGuildId();
        return null != e ? V.A.getSpace(e)?.channel_id : void 0;
    });
}
async function Q(e) {
    null == q.A.getApplication($.NW) && (await (0, H.TA)($.NW));
    let t = F.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== $.NW);
    return await (0, P.su)({
        channelId: e,
        applicationId: $.NW,
        isStart: t,
        embeddedActivitiesManager: (0, O.A)(),
        renderInFramePool: !0,
    });
}
async function Z(e) {
    let { channel: t, selectedRoleIds: l } = e,
        i = [];
    if (l.length > 0)
        for (let e of (i.push({ id: t.guild_id, type: M.r2.ROLE, allow: X.x3, deny: j.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            i.push({ id: e, type: M.r2.ROLE, allow: j.xBc.USE_EMBEDDED_ACTIVITIES, deny: X.x3 });
    let n = await (0, W.RT)(t.id, { permissionOverwrites: i });
    if (!n.ok) throw n;
}
let J = [];
var ee = l(344351),
    et = l(256693),
    el = l(812901),
    ei = l(317608),
    en = l(953538);
let ea = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? D(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: T.k,
                children: [
                    null != d && (0, i.jsx)("img", { className: T.S, src: d, alt: "" }),
                    null != a && (0, i.jsx)(N.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: s } = e,
                v = t.config,
                [S, I] = n.useState(v.title ?? ""),
                [j, N] = n.useState(v.text ?? ""),
                [T, G] = n.useState(v.image),
                [R, L] = n.useState(null),
                w = (0, r.bG)([p.A], () => p.A.getGuildId()),
                U = void 0 !== T ? T : null != v.image_hash && null != w ? D(w, t.id, v.image_hash) : null;
            return (0, i.jsxs)(d.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(h.k, {
                        label: C.intl.string(C.t.gnwWrx),
                        value: S,
                        onChange: function (e) {
                            L(null), I(e);
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(c.D, {
                        label: C.intl.string(C.t.X4IxWL),
                        children: (0, i.jsxs)(d.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: b.B,
                            children: [
                                (0, i.jsxs)(d.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(_.A, {
                                            variant: "secondary",
                                            text: C.intl.string(C.t["MsUY/S"]),
                                            onChange: function (e) {
                                                L(null), G(e);
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, A.A)(0xa00000),
                                        }),
                                        null != U &&
                                            (0, i.jsx)(m.m, {
                                                text: C.intl.string(C.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(g.K, {
                                                    variant: "critical-secondary",
                                                    icon: E.TrashIcon,
                                                    onClick: function () {
                                                        L(null), G(null);
                                                    },
                                                    "aria-label": C.intl.string(C.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != U && (0, i.jsx)("img", { className: b.V, src: U, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(u.f, {
                        label: C.intl.string(C.t.COGMNC),
                        value: j,
                        onChange: function (e) {
                            L(null), N(e);
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != R &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(x.w, { type: "critical", children: R }),
                        }),
                    (0, i.jsxs)(o.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(f.$, { variant: "secondary", text: C.intl.string(C.t["ETE/oC"]), onClick: s }),
                            (0, i.jsx)(f.$, {
                                variant: "primary",
                                text: C.intl.string(C.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== T ? null !== T : null != v.image_hash),
                                        0 === j.length && !e && (L(C.intl.string(y.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: v.image_hash,
                                        text: j.length > 0 ? j : null,
                                        title: S.length > 0 ? S : null,
                                    };
                                    void 0 !== T && (t.image = T), l(t);
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        useTitle: function (e) {
            return e.config.title ?? e.default_title ?? "";
        },
    },
    [a.a.LEADERBOARD]: s.q,
    [a.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                a = K(),
                s = (0, r.bG)([R.A, w.A], () => {
                    let e = null != a ? R.A.getChannel(a) : void 0;
                    return null != e && w.A.can(j.xBc.USE_EMBEDDED_ACTIVITIES, e);
                }, [a]),
                d = (0, r.bG)([F.Ay], () => {
                    let e = F.Ay.getCurrentEmbeddedActivity();
                    return null == e ||
                        e.applicationId !== $.NW ||
                        e.location.kind !== ee.T.GUILD_CHANNEL ||
                        e.location.channel_id !== a
                        ? null
                        : e;
                }, [a]),
                c = (0, r.bG)([F.Ay], () => F.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, r.bG)(
                        [z.default],
                        () => z.default.getFetchStateForApplication($.NW) === z.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, r.bG)([z.default, q.A], () => {
                        let e = z.default.getNewestTokenForApplication($.NW);
                        if (null == e) return !1;
                        let t = q.A.getApplication($.NW),
                            l = t?.integrationTypesConfig?.[k.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                        if (null == l) return !0;
                        let i = new Set(e.scopes);
                        return l.every((e) => i.has(e));
                    }, [])),
                    n.useEffect(() => {
                        z.default.getFetchStateForApplication($.NW) === z.FetchState.NOT_FETCHED && Y.A.fetch([$.NW]),
                            null == q.A.getApplication($.NW) && (0, H.TA)($.NW);
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                h = n.useRef(!1);
            n.useEffect(() => {
                null == d && null != a && s && u && o && !h.current && ((h.current = !0), Q(a));
            }, [s, a, d, u, o]);
            let m = n.useCallback(() => {
                    null != a && ((h.current = !0), Q(a));
                }, [a]),
                g = null != a && u && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: en.kL,
                      children: [
                          null != d &&
                              (0, i.jsx)(ei.A, {
                                  frameId: (0, et.Ri)(d),
                                  level: el.A.WithinAppContent,
                                  className: en.t$,
                              }),
                          null == d &&
                              g &&
                              (0, i.jsx)("div", {
                                  className: en.P5,
                                  children: (0, i.jsx)(f.$, {
                                      variant: "secondary",
                                      text: C.intl.string(y.default.PSuly6),
                                      loading: c,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: en.kL,
                      children: (0, i.jsx)("div", {
                          className: en.m0,
                          children: (0, i.jsx)(N.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: C.intl.string(y.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, r.bG)([p.A], () => p.A.getGuildId()),
                a = U.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = K(),
                c = (0, r.bG)([R.A], () => (null != s ? R.A.getChannel(s) : void 0), [s]),
                u = (0, r.bG)([w.A], () => null != c && w.A.can(j.xBc.MANAGE_ROLES, c), [c]),
                h = (0, r.bG)([L.A], () => (null == l ? J : L.A.getSortedRoles(l).filter((e) => e.id !== a)), [l, a]),
                m = n.useMemo(() => {
                    let e;
                    return null != c
                        ? null != (e = c.permissionOverwrites[c.guild_id]) &&
                          B.zy(e.deny, j.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? h
                                  .filter((e) => {
                                      let t = c.permissionOverwrites[e.id];
                                      return null != t && B.zy(t.allow, j.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [c, h]),
                [g, E] = n.useState(null),
                [A, _] = n.useState(!1),
                [v, S] = n.useState(!1),
                I = g ?? m,
                D = n.useMemo(() => h.map((e) => ({ id: e.id, label: e.name, value: e.id })), [h]);
            async function b() {
                if (null != c) {
                    S(!1), _(!0);
                    try {
                        await Z({ channel: c, selectedRoleIds: I }), t();
                    } catch {
                        _(!1), S(!0);
                    }
                }
            }
            return null == c
                ? null
                : (0, i.jsxs)(d.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(G.Z, {
                              selectionMode: "multiple",
                              label: C.intl.string(y.default.XXLbfv),
                              description: C.intl.string(y.default.XrpYIG),
                              placeholder: C.intl.string(y.default.pp6WeD),
                              options: D,
                              value: I,
                              onSelectionChange: function (e) {
                                  S(!1), E(e);
                              },
                              disabled: !u || A,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !u && (0, i.jsx)(x.w, { type: "warning", children: C.intl.string(y.default.UPLtlA) }),
                          v &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(x.w, {
                                      type: "critical",
                                      children: C.intl.string(y.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(o.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(f.$, {
                                      variant: "secondary",
                                      text: C.intl.string(C.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: A,
                                  }),
                                  (0, i.jsx)(f.$, {
                                      variant: "primary",
                                      text: C.intl.string(C.t["R3BPH+"]),
                                      onClick: b,
                                      disabled: !u,
                                      loading: A,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: n, role: a, width: s = 288, height: r = 192 } = e;
            return (0, i.jsx)("img", {
                style: { width: s, height: r },
                src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
                alt: t,
                "aria-label": l,
                "aria-hidden": n,
                role: a ?? "img",
            });
        },
    },
};
