i.d(t, { m: () => ef });
var n = i(593673),
    l = i(477900),
    a = i(582128),
    r = i(297264),
    s = i(834730),
    c = i(95477),
    d = i(821609),
    u = i(289873),
    o = i(738188),
    f = i(375708),
    g = i(448492);
function h() {
    return (0, l.jsx)("div", {
        className: g.w,
        children: (0, l.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, "aria-label": f.intl.string(f.t.ZTNur7) }),
    });
}
function m() {
    return (0, l.jsxs)("div", {
        className: g.w,
        role: "alert",
        children: [
            (0, l.jsx)(o.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: f.intl.string(f.t.F8FvUy) }),
        ],
    });
}
var E = i(534603);
function x(e) {
    return { heading: e.heading ?? "" };
}
var p = i(17928),
    A = i(331322),
    v = i(452027),
    I = i(103557),
    S = i(825484),
    C = i(866665),
    _ = i(408278),
    y = i(241326),
    j = i(683071),
    b = i(2553),
    D = i(405810),
    N = i(967198),
    T = i(488428),
    w = i(776231),
    R = i(486020),
    k = i(652215);
function G(e, t, i) {
    let n = R.QB ? "webp" : "jpg",
        { CDN_HOST: l, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = k.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, i, n),
        s = null != l ? `https://${l}${r}` : location.protocol + a + r,
        c = { size: (0, w.kr)(500 * (0, w.mZ)()) };
    return "jpg" === n && (c.quality = "lossless"), (s += `?${T.stringify(c)}`);
}
var U = i(125075),
    L = i(868602),
    W = i(445187),
    B = i(783878),
    F = i(734057),
    P = i(317525),
    M = i(576705),
    H = i(935208);
i(321073);
var O = i(485845),
    q = i(136722),
    z = i(435183),
    X = i(155718),
    V = i(795816),
    $ = i(933958),
    Y = i(574152),
    K = i(627363),
    Z = i(587895),
    Q = i(712440),
    J = i(733110),
    ee = i(488926),
    et = i(716357),
    ei = i(360469);
function en() {
    return (0, p.bG)([N.A, et.A], () => {
        let e = N.A.getGuildId();
        return null != e ? et.A.getSpace(e)?.channel_id : void 0;
    });
}
async function el(e) {
    null == Z.A.getApplication(ei.NW) && (await (0, K.TA)(ei.NW));
    let t = $.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== ei.NW);
    return await (0, V.su)({
        channelId: e,
        applicationId: ei.NW,
        isStart: t,
        embeddedActivitiesManager: (0, Y.A)(),
        renderInFramePool: !0,
    });
}
async function ea(e) {
    let { channel: t, selectedRoleIds: i } = e,
        n = [];
    if (i.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: X.r2.ROLE, allow: ee.x3, deny: k.xBc.USE_EMBEDDED_ACTIVITIES }),
        i))
            n.push({ id: e, type: X.r2.ROLE, allow: k.xBc.USE_EMBEDDED_ACTIVITIES, deny: ee.x3 });
    let l = await (0, z.RT)(t.id, { permissionOverwrites: n });
    if (!l.ok) throw l;
}
let er = [];
var es = i(344351),
    ec = i(256693),
    ed = i(812901),
    eu = i(317608),
    eo = i(953538);
let ef = {
    [n.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: i } = e,
                { text: n, image_hash: a } = t.config,
                r = (0, p.bG)([N.A], () => N.A.getGuildId()),
                c = "edit" === i ? t.config.image : void 0,
                d = void 0 !== c ? c : null != a && null != r ? G(r, t.id, a) : null;
            return (0, l.jsxs)("div", {
                className: W.k,
                children: [
                    null != d && (0, l.jsx)("img", { className: W.S, src: d, alt: "" }),
                    null != n && (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", children: n }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: i, cancel: r } = e,
                s = t.config,
                [u, o] = a.useState(s.title ?? ""),
                [g, h] = a.useState(s.text ?? ""),
                [m, E] = a.useState(s.image),
                [x, T] = a.useState(null),
                w = (0, p.bG)([N.A], () => N.A.getGuildId()),
                R = void 0 !== m ? m : null != s.image_hash && null != w ? G(w, t.id, s.image_hash) : null;
            return (0, l.jsxs)(A.B, {
                gap: 16,
                children: [
                    (0, l.jsx)(c.k, {
                        label: f.intl.string(f.t.gnwWrx),
                        value: u,
                        onChange: function (e) {
                            T(null), o(e);
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, l.jsx)(v.D, {
                        label: f.intl.string(f.t.X4IxWL),
                        children: (0, l.jsxs)(A.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: L.B,
                            children: [
                                (0, l.jsxs)(A.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, l.jsx)(D.A, {
                                            variant: "secondary",
                                            text: f.intl.string(f.t["MsUY/S"]),
                                            onChange: function (e) {
                                                T(null), E(e);
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, b.A)(0xa00000),
                                        }),
                                        null != R &&
                                            (0, l.jsx)(C.m, {
                                                text: f.intl.string(f.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, l.jsx)(_.K, {
                                                    variant: "critical-secondary",
                                                    icon: y.TrashIcon,
                                                    onClick: function () {
                                                        T(null), E(null);
                                                    },
                                                    "aria-label": f.intl.string(f.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != R && (0, l.jsx)("img", { className: L.V, src: R, alt: "" }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(I.f, {
                        label: f.intl.string(f.t.COGMNC),
                        value: g,
                        onChange: function (e) {
                            T(null), h(e);
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != x &&
                        (0, l.jsx)("div", {
                            role: "alert",
                            children: (0, l.jsx)(j.w, { type: "critical", children: x }),
                        }),
                    (0, l.jsxs)(S.e, {
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(d.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: r }),
                            (0, l.jsx)(d.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== m ? null !== m : null != s.image_hash),
                                        0 === g.length && !e && (T(f.intl.string(U.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: n.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: g.length > 0 ? g : null,
                                        title: u.length > 0 ? u : null,
                                    };
                                    void 0 !== m && (t.image = m), i(t);
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
    [n.a.LEADERBOARD]: {
        View: function (e) {
            var t;
            let i,
                { widget: n, hydration: a } = e;
            if (null == a || "idle" === a.status || "loading" === a.status) return (0, l.jsx)(h, {});
            if ("error" === a.status) return (0, l.jsx)(m, {});
            let { heading: c } = x(n.config),
                { entries: d } =
                    ((t = a.data),
                    {
                        entries: (Array.isArray((i = t?.entries)) ? i : []).filter(
                            (e) => null != e && Number.isFinite(e.score),
                        ),
                    });
            return (0, l.jsxs)("div", {
                className: E.Up,
                children: [
                    "" !== c && (0, l.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: c }),
                    (0, l.jsx)("ol", {
                        className: E.p_,
                        children: d.map((e, t) =>
                            (0, l.jsxs)(
                                "li",
                                {
                                    className: E.nM,
                                    children: [
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: E.Tm,
                                            children: t + 1,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: E.UU,
                                            children: e.name,
                                        }),
                                        (0, l.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: e.score.toLocaleString(),
                                        }),
                                    ],
                                },
                                e.id,
                            ),
                        ),
                    }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: i, cancel: n } = e,
                r = t.config,
                [s, u] = a.useState(() => x(r));
            return (0, l.jsxs)("div", {
                className: E.hc,
                children: [
                    (0, l.jsx)(c.k, { label: "Heading", value: s.heading, onChange: (e) => u({ heading: e }) }),
                    (0, l.jsxs)("div", {
                        className: E.KA,
                        children: [
                            (0, l.jsx)(d.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: n }),
                            (0, l.jsx)(d.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: () => i(s),
                            }),
                        ],
                    }),
                ],
            });
        },
    },
    [n.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                i,
                n = en(),
                r = (0, p.bG)([F.A, M.A], () => {
                    let e = null != n ? F.A.getChannel(n) : void 0;
                    return null != e && M.A.can(k.xBc.USE_EMBEDDED_ACTIVITIES, e);
                }, [n]),
                c = (0, p.bG)([$.Ay], () => {
                    let e = $.Ay.getCurrentEmbeddedActivity();
                    return null == e ||
                        e.applicationId !== ei.NW ||
                        e.location.kind !== es.T.GUILD_CHANNEL ||
                        e.location.channel_id !== n
                        ? null
                        : e;
                }, [n]),
                u = (0, p.bG)([$.Ay], () => $.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: g } =
                    ((t = (0, p.bG)(
                        [J.default],
                        () => J.default.getFetchStateForApplication(ei.NW) === J.FetchState.FETCHED,
                        [],
                    )),
                    (i = (0, p.bG)([J.default, Z.A], () => {
                        let e = J.default.getNewestTokenForApplication(ei.NW);
                        if (null == e) return !1;
                        let t = Z.A.getApplication(ei.NW),
                            i = t?.integrationTypesConfig?.[O.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                        if (null == i) return !0;
                        let n = new Set(e.scopes);
                        return i.every((e) => n.has(e));
                    }, [])),
                    a.useEffect(() => {
                        J.default.getFetchStateForApplication(ei.NW) === J.FetchState.NOT_FETCHED && Q.A.fetch([ei.NW]),
                            null == Z.A.getApplication(ei.NW) && (0, K.TA)(ei.NW);
                    }, []),
                    { authResolved: t, isAuthorized: i }),
                h = a.useRef(!1);
            a.useEffect(() => {
                null == c && null != n && r && o && g && !h.current && ((h.current = !0), el(n));
            }, [r, n, c, o, g]);
            let m = a.useCallback(() => {
                    null != n && ((h.current = !0), el(n));
                }, [n]),
                E = null != n && o && !g;
            return r
                ? (0, l.jsxs)("div", {
                      className: eo.kL,
                      children: [
                          null != c &&
                              (0, l.jsx)(eu.A, {
                                  frameId: (0, ec.Ri)(c),
                                  level: ed.A.WithinAppContent,
                                  className: eo.t$,
                              }),
                          null == c &&
                              E &&
                              (0, l.jsx)("div", {
                                  className: eo.P5,
                                  children: (0, l.jsx)(d.$, {
                                      variant: "secondary",
                                      text: f.intl.string(U.default.PSuly6),
                                      loading: u,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, l.jsx)("div", {
                      className: eo.kL,
                      children: (0, l.jsx)("div", {
                          className: eo.m0,
                          children: (0, l.jsx)(s.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: f.intl.string(U.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                i = (0, p.bG)([N.A], () => N.A.getGuildId()),
                n = H.default.castGuildIdAsEveryoneGuildRoleId(i),
                r = en(),
                s = (0, p.bG)([F.A], () => (null != r ? F.A.getChannel(r) : void 0), [r]),
                c = (0, p.bG)([M.A], () => null != s && M.A.can(k.xBc.MANAGE_ROLES, s), [s]),
                u = (0, p.bG)([P.A], () => (null == i ? er : P.A.getSortedRoles(i).filter((e) => e.id !== n)), [i, n]),
                o = a.useMemo(() => {
                    let e;
                    return null != s
                        ? null != (e = s.permissionOverwrites[s.guild_id]) &&
                          q.zy(e.deny, k.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? u
                                  .filter((e) => {
                                      let t = s.permissionOverwrites[e.id];
                                      return null != t && q.zy(t.allow, k.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [s, u]),
                [g, h] = a.useState(null),
                [m, E] = a.useState(!1),
                [x, v] = a.useState(!1),
                I = g ?? o,
                C = a.useMemo(() => u.map((e) => ({ id: e.id, label: e.name, value: e.id })), [u]);
            async function _() {
                if (null != s) {
                    v(!1), E(!0);
                    try {
                        await ea({ channel: s, selectedRoleIds: I }), t();
                    } catch {
                        E(!1), v(!0);
                    }
                }
            }
            return null == s
                ? null
                : (0, l.jsxs)(A.B, {
                      gap: 16,
                      children: [
                          (0, l.jsx)(B.Z, {
                              selectionMode: "multiple",
                              label: f.intl.string(U.default.XXLbfv),
                              description: f.intl.string(U.default.XrpYIG),
                              placeholder: f.intl.string(U.default.pp6WeD),
                              options: C,
                              value: I,
                              onSelectionChange: function (e) {
                                  v(!1), h(e);
                              },
                              disabled: !c || m,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !c && (0, l.jsx)(j.w, { type: "warning", children: f.intl.string(U.default.UPLtlA) }),
                          x &&
                              (0, l.jsx)("div", {
                                  role: "alert",
                                  children: (0, l.jsx)(j.w, {
                                      type: "critical",
                                      children: f.intl.string(U.default.xyCJYs),
                                  }),
                              }),
                          (0, l.jsxs)(S.e, {
                              fullWidth: !0,
                              children: [
                                  (0, l.jsx)(d.$, {
                                      variant: "secondary",
                                      text: f.intl.string(f.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: m,
                                  }),
                                  (0, l.jsx)(d.$, {
                                      variant: "primary",
                                      text: f.intl.string(f.t["R3BPH+"]),
                                      onClick: _,
                                      disabled: !c,
                                      loading: m,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
    },
};
