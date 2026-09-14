l.d(t, { m: () => ek });
var n = l(477900),
    i = l(582128),
    a = l(593673),
    s = l(503698),
    r = l.n(s),
    d = l(140735),
    c = l(661531),
    u = l(663417),
    o = l(834730),
    f = l(369606),
    h = l(80682),
    m = l(927813),
    x = l(61567),
    g = l(375708);
let E = m.A.Seconds.WEEK,
    v = m.A.Seconds.DAY;
var A = l(251812),
    p = l(518782);
l(539888);
var j = l(289873),
    I = l(738188),
    _ = l(448492);
function S() {
    return (0, n.jsx)("div", {
        className: _.w,
        children: (0, n.jsx)(j.y, { type: j.y.Type.SPINNING_CIRCLE, "aria-label": g.intl.string(g.t.ZTNur7) }),
    });
}
function b() {
    return (0, n.jsxs)("div", {
        className: _.w,
        role: "alert",
        children: [
            (0, n.jsx)(I.WarningIcon, { size: "md", color: "text-feedback-critical", "aria-hidden": !0 }),
            (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-muted", children: g.intl.string(g.t.F8FvUy) }),
        ],
    });
}
var y = l(331322),
    C = l(297264),
    N = l(823353);
function T() {
    return (0, n.jsxs)(y.B, {
        className: N.w,
        align: "center",
        justify: "center",
        gap: 6,
        children: [
            (0, n.jsx)(C.D, { variant: "heading-md/semibold", color: "text-default", children: "Not enough data" }),
            (0, n.jsx)(o.E, {
                variant: "text-sm/medium",
                color: "text-subtle",
                children:
                    "There need to be at least 3 server members sharing their gaming activity to have a leaderboard enabled.",
            }),
        ],
    });
}
var D = l(17928),
    w = l(97808),
    G = l(778712),
    k = l(287809),
    L = l(562153),
    U = l(870087);
let R = { 1: U.Xe, 2: U.XQ, 3: U.c9 };
function B(e) {
    return 1 === e || 2 === e || 3 === e;
}
function W(e) {
    let { guildId: t, entry: l } = e,
        i = l.user_id,
        a = (0, D.bG)([k.default], () => k.default.getUser(i), [i]),
        s = (0, D.bG)([k.default], () => k.default.getCurrentUser()?.id),
        d = L.Ay.useName(t, void 0, a),
        c = null != a && "" !== d ? d : l.name,
        u = null != s && s === i,
        f = u ? `${c} (You)` : c;
    return (0, n.jsxs)("tr", {
        className: r()(U.nM, { [U._z]: u }),
        children: [
            (0, n.jsx)("td", {
                className: U.Jt,
                children: (0, n.jsx)(o.E, {
                    variant: "text-sm/semibold",
                    color: B(l.rank) ? "none" : "text-subtle",
                    className: B(l.rank) ? R[l.rank] : void 0,
                    children: l.rank,
                }),
            }),
            (0, n.jsx)("td", {
                className: U.if,
                children: (0, n.jsxs)("div", {
                    className: U.kQ,
                    children: [
                        (0, n.jsx)(w.eu, { size: G._3.SIZE_32, src: a?.getAvatarURL(t, 32), "aria-hidden": !0 }),
                        (0, n.jsx)(o.E, {
                            variant: "text-md/semibold",
                            color: "text-subtle",
                            className: U.UU,
                            children: f,
                        }),
                    ],
                }),
            }),
            (0, n.jsx)("td", {
                className: U.nP,
                children: (0, n.jsx)(o.E, { variant: "text-md/semibold", color: "text-subtle", children: l.value }),
            }),
            (0, n.jsx)("td", {
                className: U.nP,
                children: (0, n.jsx)(o.E, {
                    variant: "text-md/semibold",
                    color: "text-subtle",
                    children: l.application_ids.length,
                }),
            }),
        ],
    });
}
var P = l(764359);
function F(e) {
    let { guildId: t, data: l } = e,
        { entries: i, stat: a } = l,
        s = i.slice(0, 20),
        f = (0, A.K)(a),
        m = (0, A.K)(p.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED).valueLabel;
    return (
        (0, h.Eq)({ [t]: s.map((e) => e.user_id) }, "leaderboard"),
        (0, n.jsxs)("div", {
            className: P.Up,
            children: [
                (0, n.jsx)("div", {
                    className: P.CZ,
                    children: (0, n.jsxs)("table", {
                        className: P.tp,
                        children: [
                            (0, n.jsx)("thead", {
                                children: (0, n.jsxs)("tr", {
                                    className: P.U1,
                                    children: [
                                        (0, n.jsx)("th", {
                                            className: r()(P.e4, P.Jt),
                                            children: (0, n.jsx)(d.A, { children: "Rank" }),
                                        }),
                                        (0, n.jsx)("th", {
                                            className: P.e4,
                                            children: (0, n.jsx)(d.A, { children: "Member" }),
                                        }),
                                        (0, n.jsx)("th", {
                                            className: P.e4,
                                            children: (0, n.jsx)(d.A, { children: f.valueLabel }),
                                        }),
                                        (0, n.jsx)("th", {
                                            className: P.e4,
                                            children: (0, n.jsx)(d.A, { children: m }),
                                        }),
                                    ],
                                }),
                            }),
                            (0, n.jsx)("tbody", {
                                children: s.map((e) => (0, n.jsx)(W, { guildId: t, entry: e }, e.user_id)),
                            }),
                        ],
                    }),
                }),
                (0, n.jsxs)("div", {
                    className: P.qr,
                    children: [
                        (0, n.jsx)(u.RefreshIcon, { size: "xxs", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 }),
                        (0, n.jsx)(o.E, {
                            variant: "text-xs/medium",
                            color: "none",
                            children: g.intl.string(x.default["/nma+a"]),
                        }),
                    ],
                }),
            ],
        })
    );
}
var M = l(452027),
    O = l(103557),
    H = l(825484),
    z = l(821609),
    q = l(95477),
    X = l(866665),
    Y = l(408278),
    K = l(241326),
    V = l(683071),
    $ = l(2553),
    Q = l(405810),
    Z = l(967198),
    J = l(488428),
    ee = l(776231),
    et = l(486020),
    el = l(652215);
function en(e, t, l) {
    let n = et.QB ? "webp" : "jpg",
        { CDN_HOST: i, API_ENDPOINT: a } = window.GLOBAL_ENV,
        s = el.Rsh.GUILD_SPACE_IMAGE_TEXT_WIDGET_IMAGE(e, t, l, n),
        r = null != i ? `https://${i}${s}` : location.protocol + a + s,
        d = { size: (0, ee.kr)(500 * (0, ee.mZ)()) };
    return ("jpg" === n && (d.quality = "lossless"), (r += `?${J.stringify(d)}`));
}
var ei = l(868602),
    ea = l(445187),
    es = l(890497),
    er = l(734057),
    ed = l(317525),
    ec = l(576705),
    eu = l(935208),
    eo = l(44167);
l(321073);
var ef = l(485845),
    eh = l(136722),
    em = l(435183),
    ex = l(155718),
    eg = l(795816),
    eE = l(933958),
    ev = l(574152),
    eA = l(627363),
    ep = l(587895),
    ej = l(712440),
    eI = l(733110),
    e_ = l(488926),
    eS = l(360469);
async function eb(e) {
    null == ep.A.getApplication(eS.NW) && (await (0, eA.TA)(eS.NW));
    let t = eE.Ay.getEmbeddedActivitiesForChannel(e).every((e) => e.applicationId !== eS.NW);
    return await (0, eg.su)({
        channelId: e,
        applicationId: eS.NW,
        isStart: t,
        embeddedActivitiesManager: (0, ev.A)(),
        renderInFramePool: !0,
    });
}
async function ey(e) {
    let { channel: t, selectedRoleIds: l } = e,
        n = [];
    if (l.length > 0)
        for (let e of (n.push({ id: t.guild_id, type: ex.r2.ROLE, allow: e_.x3, deny: el.xBc.USE_EMBEDDED_ACTIVITIES }),
        l))
            n.push({ id: e, type: ex.r2.ROLE, allow: el.xBc.USE_EMBEDDED_ACTIVITIES, deny: e_.x3 });
    let i = await (0, em.RT)(t.id, { permissionOverwrites: n });
    if (!i.ok) throw i;
}
let eC = [];
var eN = l(344351),
    eT = l(256693),
    eD = l(812901),
    ew = l(317608),
    eG = l(953538);
let ek = {
    [a.a.IMAGE_TEXT]: {
        View: function (e) {
            let { widget: t, guildSpaceMode: l, guildId: i } = e,
                { text: a, image_hash: s } = t.config,
                r = "edit" === l ? t.config.image : void 0,
                d = void 0 !== r ? r : null != s ? en(i, t.id, s) : null;
            return (0, n.jsxs)("div", {
                className: ea.k,
                children: [
                    null != d && (0, n.jsx)("img", { className: ea.S, src: d, alt: "" }),
                    null != a && (0, n.jsx)(o.E, { variant: "text-sm/normal", color: "text-default", children: a }),
                ],
            });
        },
        Edit: function (e) {
            let { widget: t, commit: l, cancel: s } = e,
                r = t.config,
                [d, c] = i.useState(r.title ?? ""),
                [u, o] = i.useState(r.text ?? ""),
                [f, h] = i.useState(r.image),
                [m, E] = i.useState(null),
                v = (0, D.bG)([Z.A], () => Z.A.getGuildId()),
                A = void 0 !== f ? f : null != r.image_hash && null != v ? en(v, t.id, r.image_hash) : null;
            return (0, n.jsxs)(y.B, {
                gap: 16,
                children: [
                    (0, n.jsx)(q.k, {
                        label: g.intl.string(g.t.gnwWrx),
                        value: d,
                        onChange: function (e) {
                            (E(null), c(e));
                        },
                        maxLength: 100,
                        showCharacterCount: !0,
                    }),
                    (0, n.jsx)(M.D, {
                        label: g.intl.string(g.t.X4IxWL),
                        children: (0, n.jsxs)(y.B, {
                            gap: 16,
                            direction: "horizontal",
                            align: "center",
                            justify: "space-between",
                            className: ei.B,
                            children: [
                                (0, n.jsxs)(y.B, {
                                    gap: 8,
                                    direction: "horizontal",
                                    children: [
                                        (0, n.jsx)(Q.A, {
                                            variant: "secondary",
                                            text: g.intl.string(g.t["MsUY/S"]),
                                            onChange: function (e) {
                                                (E(null), h(e));
                                            },
                                            maxFileSizeBytes: 0xa00000,
                                            onFileSizeError: () => (0, $.A)(0xa00000),
                                        }),
                                        null != A &&
                                            (0, n.jsx)(X.m, {
                                                text: g.intl.string(g.t.N86XcP),
                                                ariaHidden: !0,
                                                children: (0, n.jsx)(Y.K, {
                                                    variant: "critical-secondary",
                                                    icon: K.TrashIcon,
                                                    onClick: function () {
                                                        (E(null), h(null));
                                                    },
                                                    "aria-label": g.intl.string(g.t.N86XcP),
                                                }),
                                            }),
                                    ],
                                }),
                                null != A && (0, n.jsx)("img", { className: ei.V, src: A, alt: "" }),
                            ],
                        }),
                    }),
                    (0, n.jsx)(O.f, {
                        label: g.intl.string(g.t.COGMNC),
                        value: u,
                        onChange: function (e) {
                            (E(null), o(e));
                        },
                        rows: 3,
                        autosize: !0,
                        maxLength: 500,
                        showCharacterCount: !0,
                    }),
                    null != m &&
                        (0, n.jsx)("div", {
                            role: "alert",
                            children: (0, n.jsx)(V.w, { type: "critical", children: m }),
                        }),
                    (0, n.jsxs)(H.e, {
                        fullWidth: !0,
                        children: [
                            (0, n.jsx)(z.$, { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: s }),
                            (0, n.jsx)(z.$, {
                                variant: "primary",
                                text: g.intl.string(g.t["R3BPH+"]),
                                onClick: function () {
                                    let e;
                                    if (
                                        ((e = void 0 !== f ? null !== f : null != r.image_hash),
                                        0 === u.length && !e && (E(g.intl.string(x.default.zleX9q)), 1))
                                    )
                                        return;
                                    let t = {
                                        type: a.a.IMAGE_TEXT,
                                        image_hash: r.image_hash,
                                        text: u.length > 0 ? u : null,
                                        title: d.length > 0 ? d : null,
                                    };
                                    (void 0 !== f && (t.image = f), l(t));
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
    [a.a.LEADERBOARD]: {
        View: function (e) {
            let { hydration: t, guildId: l } = e;
            return null == t || "idle" === t.status || "loading" === t.status
                ? (0, n.jsx)(S, {})
                : "error" === t.status
                  ? (0, n.jsx)(b, {})
                  : 0 === t.data.entries.length
                    ? (0, n.jsx)(T, {})
                    : (0, n.jsx)(F, { guildId: l, data: t.data });
        },
        useTitle: function (e, t) {
            return t?.status === "success" ? (0, A.K)(t.data.stat).name : (e.default_title ?? "");
        },
        TitleIcon: function () {
            return (0, n.jsx)(f.TrophyIcon, { size: "sm", color: c.A.colors.ICON_SUBTLE, "aria-hidden": !0 });
        },
        HeaderAccessory: function (e) {
            let { hydration: t } = e;
            return t?.status !== "success"
                ? null
                : (0, n.jsx)("div", {
                      className: P.f$,
                      children: (0, n.jsx)(o.E, {
                          variant: "text-xs/semibold",
                          color: "text-brand",
                          children: (function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now(),
                                  l = Math.ceil(Math.max(e + E - t / 1e3, 0) / v);
                              return g.intl.formatToPlainString(x.default.C07UJ2, { days: l });
                          })(t.data.week_start_ts),
                      }),
                  });
        },
    },
    [a.a.WHITEBOARD]: {
        View: function (e) {
            let t,
                l,
                a = (0, eo.n)(),
                s = (0, D.bG)(
                    [er.A, ec.A],
                    () => {
                        let e = null != a ? er.A.getChannel(a) : void 0;
                        return null != e && ec.A.can(el.xBc.USE_EMBEDDED_ACTIVITIES, e);
                    },
                    [a],
                ),
                r = (0, D.bG)(
                    [eE.Ay],
                    () => {
                        let e = eE.Ay.getCurrentEmbeddedActivity();
                        return null == e ||
                            e.applicationId !== eS.NW ||
                            e.location.kind !== eN.T.GUILD_CHANNEL ||
                            e.location.channel_id !== a
                            ? null
                            : e;
                    },
                    [a],
                ),
                d = (0, D.bG)([eE.Ay], () => eE.Ay.isLaunchingActivity(), []),
                { authResolved: c, isAuthorized: u } =
                    ((t = (0, D.bG)(
                        [eI.default],
                        () => eI.default.getFetchStateForApplication(eS.NW) === eI.FetchState.FETCHED,
                        [],
                    )),
                    (l = (0, D.bG)(
                        [eI.default, ep.A],
                        () => {
                            let e = eI.default.getNewestTokenForApplication(eS.NW);
                            if (null == e) return !1;
                            let t = ep.A.getApplication(eS.NW),
                                l = t?.integrationTypesConfig?.[ef.b.USER_INSTALL]?.oauth2InstallParams?.scopes;
                            if (null == l) return !0;
                            let n = new Set(e.scopes);
                            return l.every((e) => n.has(e));
                        },
                        [],
                    )),
                    i.useEffect(() => {
                        (eI.default.getFetchStateForApplication(eS.NW) === eI.FetchState.NOT_FETCHED &&
                            ej.A.fetch([eS.NW]),
                            null == ep.A.getApplication(eS.NW) && (0, eA.TA)(eS.NW));
                    }, []),
                    { authResolved: t, isAuthorized: l }),
                f = i.useRef(!1);
            i.useEffect(() => {
                null == r && null != a && s && c && u && !f.current && ((f.current = !0), eb(a));
            }, [s, a, r, c, u]);
            let h = i.useCallback(() => {
                    null != a && ((f.current = !0), eb(a));
                }, [a]),
                m = null != a && c && !u;
            return s
                ? (0, n.jsxs)("div", {
                      className: eG.kL,
                      children: [
                          null != r &&
                              (0, n.jsx)(ew.A, {
                                  frameId: (0, eT.Ri)(r),
                                  level: eD.A.WithinAppContent,
                                  className: eG.t$,
                              }),
                          null == r &&
                              m &&
                              (0, n.jsx)("div", {
                                  className: eG.P5,
                                  children: (0, n.jsx)(z.$, {
                                      variant: "secondary",
                                      text: g.intl.string(x.default.PSuly6),
                                      loading: d,
                                      onClick: h,
                                  }),
                              }),
                      ],
                  })
                : (0, n.jsx)("div", {
                      className: eG.kL,
                      children: (0, n.jsx)("div", {
                          className: eG.m0,
                          children: (0, n.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: g.intl.string(x.default["nXc/MQ"]),
                          }),
                      }),
                  });
        },
        Edit: function (e) {
            let { cancel: t } = e,
                l = (0, D.bG)([Z.A], () => Z.A.getGuildId()),
                a = eu.default.castGuildIdAsEveryoneGuildRoleId(l),
                s = (0, eo.n)(),
                r = (0, D.bG)([er.A], () => (null != s ? er.A.getChannel(s) : void 0), [s]),
                d = (0, D.bG)([ec.A], () => null != r && ec.A.can(el.xBc.MANAGE_ROLES, r), [r]),
                c = (0, D.bG)([ed.A], () => (null == l ? eC : ed.A.getSortedRoles(l).filter((e) => e.id !== a)), [
                    l,
                    a,
                ]),
                u = i.useMemo(() => {
                    let e;
                    return null != r
                        ? null != (e = r.permissionOverwrites[r.guild_id]) &&
                          eh.zy(e.deny, el.xBc.USE_EMBEDDED_ACTIVITIES)
                            ? c
                                  .filter((e) => {
                                      let t = r.permissionOverwrites[e.id];
                                      return null != t && eh.zy(t.allow, el.xBc.USE_EMBEDDED_ACTIVITIES);
                                  })
                                  .map((e) => e.id)
                            : []
                        : [];
                }, [r, c]),
                [o, f] = i.useState(null),
                [h, m] = i.useState(!1),
                [E, v] = i.useState(!1),
                A = o ?? u,
                p = i.useMemo(() => c.map((e) => ({ id: e.id, label: e.name, value: e.id })), [c]);
            async function j() {
                if (null != r) {
                    (v(!1), m(!0));
                    try {
                        (await ey({ channel: r, selectedRoleIds: A }), t());
                    } catch {
                        (m(!1), v(!0));
                    }
                }
            }
            return null == r
                ? null
                : (0, n.jsxs)(y.B, {
                      gap: 16,
                      children: [
                          (0, n.jsx)(es.Z, {
                              selectionMode: "multiple",
                              label: g.intl.string(x.default.XXLbfv),
                              description: g.intl.string(x.default.XrpYIG),
                              placeholder: g.intl.string(x.default.pp6WeD),
                              options: p,
                              value: A,
                              onSelectionChange: function (e) {
                                  (v(!1), f(e));
                              },
                              disabled: !d || h,
                              fullWidth: !0,
                              wrapTags: !0,
                          }),
                          !d && (0, n.jsx)(V.w, { type: "warning", children: g.intl.string(x.default.UPLtlA) }),
                          E &&
                              (0, n.jsx)("div", {
                                  role: "alert",
                                  children: (0, n.jsx)(V.w, {
                                      type: "critical",
                                      children: g.intl.string(x.default.xyCJYs),
                                  }),
                              }),
                          (0, n.jsxs)(H.e, {
                              fullWidth: !0,
                              children: [
                                  (0, n.jsx)(z.$, {
                                      variant: "secondary",
                                      text: g.intl.string(g.t["ETE/oC"]),
                                      onClick: t,
                                      disabled: h,
                                  }),
                                  (0, n.jsx)(z.$, {
                                      variant: "primary",
                                      text: g.intl.string(g.t["R3BPH+"]),
                                      onClick: j,
                                      disabled: !d,
                                      loading: h,
                                  }),
                              ],
                          }),
                      ],
                  });
        },
        LockedPreview: function (e) {
            let { alt: t, ariaLabel: l, ariaHidden: i, role: a, width: s = 288, height: r = 192 } = e;
            return (0, n.jsx)("img", {
                style: { width: s, height: r },
                src: "https://cdn.discordapp.com/assets/content/b501ac4c5a78c462100d3870ce7ab50a78ea7d9b2af6b8ee7a08b11bab82fb01.svg",
                alt: t,
                "aria-label": l,
                "aria-hidden": i,
                role: a ?? "img",
            });
        },
    },
};
