i.d(e, { m: () => tf });
var n = i(477900),
    l = i(582128),
    a = i(593673),
    r = i(297264),
    s = i(834730),
    c = i(95477),
    d = i(821609),
    u = i(289873),
    o = i(738188),
    f = i(375708),
    h = i(448492);
function g() {
    return (0, n.jsx)("div", {
        className: h.w,
        children: (0, n.jsx)(u.y, { type: u.y.Type.SPINNING_CIRCLE, "aria-label": f.intl.string(f.t.ZTNur7) }),
    });
}
function m() {
    return (0, n.jsxs)("div", {
        className: h.w,
        role: "alert",
        children: [
            (0, n.jsx)(o.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-muted", children: f.intl.string(f.t.F8FvUy) }),
        ],
    });
}
var x = i(534603);
function E(t) {
    return { heading: t.heading ?? "" };
}
var v = i(17928),
    p = i(331322),
    A = i(452027),
    S = i(103557),
    I = i(825484),
    j = i(866665),
    _ = i(408278),
    C = i(241326),
    y = i(683071),
    b = i(2553),
    N = i(405810),
    T = i(967198),
    D = i(488428),
    w = i(776231),
    G = i(486020),
    k = i(652215);
function L(t, e, i) {
    let n = G.QB ? "webp" : "jpg",
        { CDN_HOST: l, API_ENDPOINT: a } = window.GLOBAL_ENV,
        r = k.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(t, e, i, n),
        s = null != l ? `https://${l}${r}` : location.protocol + a + r,
        c = { size: (0, w.kr)(500 * (0, w.mZ)()) };
    return "jpg" === n && (c.quality = "lossless"), (s += `?${D.stringify(c)}`);
}
var R = i(125075),
    W = i(868602),
    B = i(445187),
    U = i(890497),
    F = i(734057),
    P = i(317525),
    M = i(576705),
    O = i(935208);
i(321073);
var H = i(485845),
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
    tt = i(488926),
    te = i(716357),
    ti = i(360469);
function tn() {
    return (0, v.bG)([T.A, te.A], () => {
        let t = T.A.getGuildId();
        return null != t ? te.A.getSpace(t)?.channel_id : void 0;
    });
}
async function tl(t) {
    null == Z.A.getApplication(ti.NW) && (await (0, K.TA)(ti.NW));
    let e = $.Ay.getEmbeddedActivitiesForChannel(t).every((t) => t.applicationId !== ti.NW);
    return await (0, V.su)({
        channelId: t,
        applicationId: ti.NW,
        isStart: e,
        embeddedActivitiesManager: (0, Y.A)(),
        renderInFramePool: !0,
    });
}
async function ta(t) {
    let { channel: e, selectedRoleIds: i } = t,
        n = [];
    if (i.length > 0)
        for (let t of (n.push({ id: e.guild_id, type: X.r2.ROLE, allow: tt.x3, deny: k.xBc.USE_EMBEDDED_ACTIVITIES }),
        i))
            n.push({ id: t, type: X.r2.ROLE, allow: k.xBc.USE_EMBEDDED_ACTIVITIES, deny: tt.x3 });
    let l = await (0, z.RT)(e.id, { permissionOverwrites: n });
    if (!l.ok) throw l;
}
let tr = [];
var ts = i(344351),
    tc = i(256693),
    td = i(812901),
    tu = i(317608),
    to = i(953538);
let tf = {
    [a.a.IMAGE_TEXT]: {
        View: function (t) {
            let { widget: e, guildSpaceMode: i } = t,
                { text: l, image_hash: a } = e.config,
                r = (0, v.bG)([T.A], () => T.A.getGuildId()),
                c = "edit" === i ? e.config.image : void 0,
                d = void 0 !== c ? c : null != a && null != r ? L(r, e.id, a) : null;
            return (0, n.jsxs)("div", {
                className: B.k,
                children: [
                    null != d && (0, n.jsx)("img", { className: B.S, src: d, alt: "" }),
                    null != l && (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", children: l }),
                ],
            });
        },
        Edit: function (t) {
            let { widget: e, commit: i, cancel: r } = t,
                s = e.config,
                [u, o] = l.useState(s.title ?? ""),
                [h, g] = l.useState(s.text ?? ""),
                [m, x] = l.useState(s.image),
                [E, D] = l.useState(null),
                w = (0, v.bG)([T.A], () => T.A.getGuildId()),
                G = void 0 !== m ? m : null != s.image_hash && null != w ? L(w, e.id, s.image_hash) : null;
            return (0, n.jsxs)(p.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(c.k, {
                        label: f.intl.string(f.t.gnwWrx),
                        value: u,
                        onChange: function (t) {
                            D(null), o(t);
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, n.jsx)(A.D, {
                        label: f.intl.string(f.t.X4IxWL),
                        children: (0, n.jsxs)(p.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: W.B,
                            children: [
                                (0, n.jsxs)(p.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(N.A, {
                                            variant: "secondary",
                                            text: f.intl.string(f.t["MsUY/S"]),
                                            onChange: function (t) {
                                                D(null), x(t);
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, b.A)(0xa00000),
                                        }),
                                        null != G &&
                                            (0, n.jsx)(j.m, {
                                                text: f.intl.string(f.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, n.jsx)(_.K, {
                                                    variant: "critical-secondary",
                                                    icon: C.TrashIcon,
                                                    onClick: function () {
                                                        D(null), x(null);
                                                    },
                                                    "aria-label": f.intl.string(f.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != G && (0, n.jsx)("img", { className: W.V, src: G, alt: "" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(S.f, {
                        label: f.intl.string(f.t.COGMNC),
                        value: h,
                        onChange: function (t) {
                            D(null), g(t);
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != E &&
                        (0, n.jsx)("div", {
                            role: "alert",
                            children: (0, n.jsx)(y.w, { type: "critical", children: E }),
                        }),
                    (0, n.jsxs)(I.e, {
                        fullWidth: !0,
                        children: [
                            (0, n.jsx)(d.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: r }),
                            (0, n.jsx)(d.$, {
                                variant: "primary",
                                text: f.intl.string(f.t["R3BPH+"]),
                                onClick: function () {
                                    let t;
                                    if (
                                        ((t = void 0 !== m ? null !== m : null != s.image_hash),
                                        0 === h.length && !t && (D(f.intl.string(R.default.zleX9q)), 1))
                                    )
                                        return;
                                    let e = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: s.image_hash,
                                        text: h.length > 0 ? h : null,
                                        title: u.length > 0 ? u : null,
                                    };
                                    void 0 !== m && (e.image = m), i(e);
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        useTitle: function (t) {
            return t.config.title ?? t.default_title ?? "";
        },
    },
    [a.a.LEADERBOARD]: {
        View: function (t) {
            var e;
            let i,
                { widget: l, hydration: a } = t;
            if (null == a || "idle" === a.status || "loading" === a.status) return (0, n.jsx)(g, {});
            if ("error" === a.status) return (0, n.jsx)(m, {});
            let { heading: c } = E(l.config),
                { entries: d } =
                    ((e = a.data),
                    {
                        entries: (Array.isArray((i = e?.entries)) ? i : []).filter(
                            (t) => null != t && Number.isFinite(t.score),
                        ),
                    });
            return (0, n.jsxs)("div", {
                className: x.Up,
                children: [
                    "" !== c && (0, n.jsx)(r.D, { variant: "heading-md/semibold", color: "text-strong", children: c }),
                    (0, n.jsx)("ol", {
                        className: x.p_,
                        children: d.map((t, e) =>
                            (0, n.jsxs)(
                                "li",
                                {
                                    className: x.nM,
                                    children: [
                                        (0, n.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            className: x.Tm,
                                            children: e + 1,
                                        }),
                                        (0, n.jsx)(s.E, {
                                            variant: "text-sm/normal",
                                            color: "text-strong",
                                            className: x.UU,
                                            children: t.name,
                                        }),
                                        (0, n.jsx)(s.E, {
                                            variant: "text-sm/medium",
                                            color: "text-muted",
                                            children: t.score.toLocaleString(),
                                        }),
                                    ],
                                },
                                t.id,
                            ),
                        ),
                    }),
                ],
            });
        },
        Edit: function (t) {
            let { widget: e, commit: i, cancel: a } = t,
                r = e.config,
                [s, u] = l.useState(() => E(r));
            return (0, n.jsxs)("div", {
                className: x.hc,
                children: [
                    (0, n.jsx)(c.k, { label: "Heading", value: s.heading, onChange: (t) => u({ heading: t }) }),
                    (0, n.jsxs)("div", {
                        className: x.KA,
                        children: [
                            (0, n.jsx)(d.$, { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: a }),
                            (0, n.jsx)(d.$, {
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
    [a.a.WHITEBOARD]: {
        View: function (t) {
            let e,
                i,
                a = tn(),
                r = (0, v.bG)([F.A, M.A], () => {
                    let t = null != a ? F.A.getChannel(a) : void 0;
                    return null != t && M.A.can(k.xBc.USE_EMBEDDED_ACTIVITIES, t);
                }, [a]),
                c = (0, v.bG)([$.Ay], () => {
                    let t = $.Ay.getCurrentEmbeddedActivity();
                    return null == t ||
                        t.applicationId !== ti.NW ||
                        t.location.kind !== ts.T.GUILD_CHANNEL ||
                        t.location.channel_id !== a
                        ? null
                        : t;
                }, [a]),
                u = (0, v.bG)([$.Ay], () => $.Ay.isLaunchingActivity(), []),
                { authResolved: o, isAuthorized: h } =
                    ((e = (0, v.bG)(
                        [J.default],
                        () => J.default.getFetchStateForApplication(ti.NW) === J.FetchState.FETCHED,
                        [],
                    )),
                    (i = (0, v.bG)([J.default, Z.A], () => {
                        let t = J.default.getNewestTokenForApplication(ti.NW);
                        if (null == t) return !1;
                        let e = Z.A.getApplication(ti.NW),
                            i = e?.integrationTypesConfig?.[H.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                        if (null == i) return !0;
                        let n = new Set(t.scopes);
                        return i.every((t) => n.has(t));
                    }, [])),
                    l.useEffect(() => {
                        J.default.getFetchStateForApplication(ti.NW) === J.FetchState.NOT_FETCHED && Q.A.fetch([ti.NW]),
                            null == Z.A.getApplication(ti.NW) && (0, K.TA)(ti.NW);
                    }, []),
                    { authResolved: e, isAuthorized: i }),
                g = l.useRef(!1);
            l.useEffect(() => {
                null == c && null != a && r && o && h && !g.current && ((g.current = !0), tl(a));
            }, [r, a, c, o, h]);
            let m = l.useCallback(() => {
                    null != a && ((g.current = !0), tl(a));
                }, [a]),
                x = null != a && o && !h;
            return r
                ? (0, n.jsxs)("div", {
                      className: to.kL,
                      children: [
                          null != c &&
                              (0, n.jsx)(tu.A, {
                                  frameId: (0, tc.Ri)(c),
                                  level: td.A.WithinAppContent,
                                  className: to.t$,
                              }),
                          null == c &&
                              x &&
                              (0, n.jsx)("div", {
                                  className: to.P5,
                                  children: (0, n.jsx)(d.$, {
                                      variant: "secondary",
                                      text: f.intl.string(R.default.PSuly6),
                                      loading: u,
                                      onClick: m,
                                  }),
                              }),
                      ],
                  })
                : (0, n.jsx)("div", {
                      className: to.kL,
                      children: (0, n.jsx)("div", {
                          className: to.m0,
                          children: (0, n.jsx)(s.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: f.intl.string(R.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (t) {
            let { cancel: e } = t,
                i = (0, v.bG)([T.A], () => T.A.getGuildId()),
                a = O.default.castGuildIdAsEveryoneGuildRoleId(i),
                r = tn(),
                s = (0, v.bG)([F.A], () => (null != r ? F.A.getChannel(r) : void 0), [r]),
                c = (0, v.bG)([M.A], () => null != s && M.A.can(k.xBc.MANAGE_ROLES, s), [s]),
                u = (0, v.bG)([P.A], () => (null == i ? tr : P.A.getSortedRoles(i).filter((t) => t.id !== a)), [i, a]),
                o = l.useMemo(() => {
                    let t;
                    return null != s
                        ? null != (t = s.permissionOverwrites[s.guild_id]) &&
                          q.zy(t.deny, k.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? u
                                  .filter((t) => {
                                      let e = s.permissionOverwrites[t.id];
                                      return null != e && q.zy(e.allow, k.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((t) => t.id)
                            : []
                        : [];
                }, [s, u]),
                [h, g] = l.useState(null),
                [m, x] = l.useState(!1),
                [E, A] = l.useState(!1),
                S = h ?? o,
                j = l.useMemo(() => u.map((t) => ({ id: t.id, label: t.name, value: t.id })), [u]);
            async function _() {
                if (null != s) {
                    A(!1), x(!0);
                    try {
                        await ta({ channel: s, selectedRoleIds: S }), e();
                    } catch {
                        x(!1), A(!0);
                    }
                }
            }
            return null == s
                ? null
                : (0, n.jsxs)(p.B, {
                      gap: 16,
                      children: [
                          (0, n.jsx)(U.Z, {
                              selectionMode: "multiple",
                              label: f.intl.string(R.default.XXLbfv),
                              description: f.intl.string(R.default.XrpYIG),
                              placeholder: f.intl.string(R.default.pp6WeD),
                              options: j,
                              value: S,
                              onSelectionChange: function (t) {
                                  A(!1), g(t);
                              },
                              disabled: !c || m,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !c && (0, n.jsx)(y.w, { type: "warning", children: f.intl.string(R.default.UPLtlA) }),
                          E &&
                              (0, n.jsx)("div", {
                                  role: "alert",
                                  children: (0, n.jsx)(y.w, {
                                      type: "critical",
                                      children: f.intl.string(R.default.xyCJYs),
                                  }),
                              }),
                          (0, n.jsxs)(I.e, {
                              fullWidth: !0,
                              children: [
                                  (0, n.jsx)(d.$, {
                                      variant: "secondary",
                                      text: f.intl.string(f.t["ETE/oC"]),
                                      onClick: e,
                                      disabled: m,
                                  }),
                                  (0, n.jsx)(d.$, {
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
        LockedPreview: function (t) {
            let { alt: e, ariaLabel: i, ariaHidden: l, role: a, width: r = 288, height: s = 192 } = t;
            return (0, n.jsx)("img", {
                style: { width: r, height: s },
                src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
                alt: e,
                "aria-label": i,
                "aria-hidden": l,
                role: a ?? "img",
            });
        },
    },
};
