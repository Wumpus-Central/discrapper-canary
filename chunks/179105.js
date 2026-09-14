l.d(t, { m: () => en });
var i = l(477900),
    n = l(582128),
    a = l(593673),
    s = l(845021),
    r = l(17928),
    c = l(331322),
    d = l(452027),
    u = l(103557),
    o = l(825484),
    f = l(821609),
    h = l(95477),
    g = l(866665),
    m = l(408278),
    x = l(241326),
    E = l(683071),
    A = l(2553),
    p = l(405810),
    v = l(967198),
    I = l(488428),
    j = l(776231),
    S = l(486020),
    _ = l(652215);
function C(e, t, l) {
    let i = S.QB ? "webp" : "jpg",
        { CDN_HOST: n, API_ENDPOINT: a } = window.GLOBAL_ENV,
        s = _.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, i),
        r = null != n ? `https://${n}${s}` : location.protocol + a + s,
        c = { size: (0, j.kr)(500 * (0, j.mZ)()) };
    return ("jpg" === i && (c.quality = "lossless"), (r += `?${I.stringify(c)}`));
}
var y = l(61567),
    b = l(375708),
    N = l(868602),
    T = l(834730),
    D = l(445187),
    w = l(890497),
    G = l(734057),
    k = l(317525),
    L = l(576705),
    R = l(935208),
    U = l(44167);
l(321073);
var B = l(485845),
    W = l(136722),
    P = l(435183),
    F = l(155718),
    M = l(795816),
    O = l(933958),
    H = l(574152),
    q = l(627363),
    z = l(587895),
    X = l(712440),
    K = l(733110),
    V = l(488926),
    Y = l(360469);
async function $(e) {
    null == z.A.getApplication(Y.NW) && (await (0, q.TA)(Y.NW));
    let t = O.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== Y.NW);
    return await (0, M.su)({
        channelId: e,
        applicationId: Y.NW,
        isStart: t,
        embeddedActivitiesManager: (0, H.A)(),
        renderInFramePool: !0,
    });
}
async function Q(e) {
    let { channel: t, selectedRoleIds: l } = e,
        i = [];
    if (l.length > 0)
        for (let e of (i.push({ id: t.guild_id, type: F.r2.ROLE, allow: V.x3, deny: _.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            i.push({ id: e, type: F.r2.ROLE, allow: _.xBc.USE_EMBEDDED_ACTIVITIES, deny: V.x3 });
    let n = await (0, P.RT)(t.id, { permissionOverwrites: i });
    if (!n.ok) throw n;
}
let Z = [];
var J = l(344351),
    ee = l(256693),
    et = l(812901),
    el = l(317608),
    ei = l(953538);
let en = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: n } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                c = void 0 !== r ? r : null != s ? C(n, t.id, s) : null;
            return (0, i.jsxs)("div", {
                className: D.k,
                children: [
                    null != c && (0, i.jsx)("img", { className: D.S, src: c, alt: "" }),
                    null != a && (0, i.jsx)(T.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: s } = e,
                I = t.config,
                [j, S] = n.useState(I.title ?? ""),
                [_, T] = n.useState(I.text ?? ""),
                [D, w] = n.useState(I.image),
                [G, k] = n.useState(null),
                L = (0, r.bG)([v.A], () => v.A.getGuildId()),
                R = void 0 !== D ? D : null != I.image_hash && null != L ? C(L, t.id, I.image_hash) : null;
            return (0, i.jsxs)(c.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(h.k, {
                        label: b.intl.string(b.t.gnwWrx),
                        value: j,
                        onChange: function (e) {
                            (k(null), S(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, i.jsx)(d.D, {
                        label: b.intl.string(b.t.X4IxWL),
                        children: (0, i.jsxs)(c.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: N.B,
                            children: [
                                (0, i.jsxs)(c.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, i.jsx)(p.A, {
                                            variant: "secondary",
                                            text: b.intl.string(b.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (k(null), w(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, A.A)(0xa00000),
                                        }),
                                        null != R &&
                                            (0, i.jsx)(g.m, {
                                                text: b.intl.string(b.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, i.jsx)(m.K, {
                                                    variant: "critical-secondary",
                                                    icon: x.TrashIcon,
                                                    onClick: function () {
                                                        (k(null), w(null));
                                                    },
                                                    "aria-label": b.intl.string(b.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != R && (0, i.jsx)("img", { className: N.V, src: R, alt: "" }),
                            ],
                        }),
                    }),
                    (0, i.jsx)(u.f, {
                        label: b.intl.string(b.t.COGMNC),
                        value: _,
                        onChange: function (e) {
                            (k(null), T(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != G &&
                        (0, i.jsx)("div", {
                            role: "alert",
                            children: (0, i.jsx)(E.w, { type: "critical", children: G }),
                        }),
                    (0, i.jsxs)(o.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(f.$, { variant: "secondary", text: b.intl.string(b.t["ETE/oC"]), onClick: s }),
                            (0, i.jsx)(f.$, {
                                variant: "primary",
                                text: b.intl.string(b.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== D ? null !== D : null != I.image_hash),
                                        0 === _.length && !e && (k(b.intl.string(y.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: I.image_hash,
                                        text: _.length > 0 ? _ : null,
                                        title: j.length > 0 ? j : null,
                                    };
                                    (void 0 !== D && (t.image = D), l(t));
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
                a = (0, U.n)(),
                s = (0, r.bG)(
                    [G.A, L.A],
                    () => {
                        let e = null != a ? G.A.getChannel(a) : void 0;
                        return null != e && L.A.can(_.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [a],
                ),
                c = (0, r.bG)(
                    [O.Ay],
                    () => {
                        let e = O.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== Y.NW ||
                            e.location.kind !== J.T.GUILD_CHANNEL ||
                            e.location.channel_id !== a
                            ? null
                            : e;
                    },
                    [a],
                ),
                d = (0, r.bG)([O.Ay], () => O.Ay.isLaunchingActivity(), []),
                { authResolved: u, isAuthorized: o } =
                    ((t = (0, r.bG)(
                        [K.default],
                        () => K.default.getFetchStateForApplication(Y.NW) === K.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, r.bG)(
                        [K.default, z.A],
                        () => {
                            let e = K.default.getNewestTokenForApplication(Y.NW);
                            if (null == e) return !1;
                            let t = z.A.getApplication(Y.NW),
                                l = t?.integrationTypesConfig?.[B.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let i = new Set(e.scopes);
                            return l.every((e) => i.has(e));
                        },
                        [],
                    )),
                    n.useEffect(() => {
                        (K.default.getFetchStateForApplication(Y.NW) === K.FetchState.NOT_FETCHED && X.A.fetch([Y.NW]),
                            null == z.A.getApplication(Y.NW) && (0, q.TA)(Y.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                h = n.useRef(!1);
            n.useEffect(() => {
                null == c && null != a && s && u && o && !h.current && ((h.current = !0), $(a));
            }, [s, a, c, u, o]);
            let g = n.useCallback(() => {
                    null != a && ((h.current = !0), $(a));
                }, [a]),
                m = null != a && u && !o;
            return s
                ? (0, i.jsxs)("div", {
                      className: ei.kL,
                      children: [
                          null != c &&
                              (0, i.jsx)(el.A, {
                                  frameId: (0, ee.Ri)(c),
                                  level: et.A.WithinAppContent,
                                  className: ei.t$,
                              }),
                          null == c &&
                              m &&
                              (0, i.jsx)("div", {
                                  className: ei.P5,
                                  children: (0, i.jsx)(f.$, {
                                      variant: "secondary",
                                      text: b.intl.string(y.default.PSuly6),
                                      loading: d,
                                      onClick: g,
                                  }),
                              }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: ei.kL,
                      children: (0, i.jsx)("div", {
                          className: ei.m0,
                          children: (0, i.jsx)(T.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: b.intl.string(y.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, r.bG)([v.A], () => v.A.getGuildId()),
                a = R.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, U.n)(),
                d = (0, r.bG)([G.A], () => (null != s ? G.A.getChannel(s) : void 0), [s]),
                u = (0, r.bG)([L.A], () => null != d && L.A.can(_.xBc.MANAGE_ROLES, d), [d]),
                h = (0, r.bG)([k.A], () => (null == l ? Z : k.A.getSortedRoles(l).filter((e) => e.id !== a)), [l, a]),
                g = n.useMemo(() => {
                    let e;
                    return null != d
                        ? null != (e = d.permissionOverwrites[d.guild_id]) &&
                          W.zy(e.deny, _.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? h
                                  .filter((e) => {
                                      let t = d.permissionOverwrites[e.id];
                                      return null != t && W.zy(t.allow, _.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [d, h]),
                [m, x] = n.useState(null),
                [A, p] = n.useState(!1),
                [I, j] = n.useState(!1),
                S = m ?? g,
                C = n.useMemo(() => h.map((e) => ({ id: e.id, label: e.name, value: e.id })), [h]);
            async function N() {
                if (null != d) {
                    (j(!1), p(!0));
                    try {
                        (await Q({ channel: d, selectedRoleIds: S }), t());
                    } catch {
                        (p(!1), j(!0));
                    }
                }
            }
            return null == d
                ? null
                : (0, i.jsxs)(c.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(w.Z, {
                              selectionMode: "multiple",
                              label: b.intl.string(y.default.XXLbfv),
                              description: b.intl.string(y.default.XrpYIG),
                              placeholder: b.intl.string(y.default.pp6WeD),
                              options: C,
                              value: S,
                              onSelectionChange: function (e) {
                                  (j(!1), x(e));
                              },
                              disabled: !u || A,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !u && (0, i.jsx)(E.w, { type: "warning", children: b.intl.string(y.default.UPLtlA) }),
                          I &&
                              (0, i.jsx)("div", {
                                  role: "alert",
                                  children: (0, i.jsx)(E.w, {
                                      type: "critical",
                                      children: b.intl.string(y.default.xyCJYs),
                                  }),
                              }),
                          (0, i.jsxs)(o.e, {
                              fullWidth: !0,
                              children: [
                                  (0, i.jsx)(f.$, {
                                      variant: "secondary",
                                      text: b.intl.string(b.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: A,
                                  }),
                                  (0, i.jsx)(f.$, {
                                      variant: "primary",
                                      text: b.intl.string(b.t["R3BPH+"]),
                                      onClick: N,
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
