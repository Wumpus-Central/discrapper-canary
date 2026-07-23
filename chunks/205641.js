n.r(t), n.d(t, { default: () => J });
var s = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    i = n(17928),
    c = n(43990),
    o = n(834730),
    d = n(47167),
    u = n(726249),
    m = n(742589),
    p = n(71393),
    h = n(373606),
    f = n(866665),
    x = n(408278),
    g = n(811893),
    j = n(625903),
    v = n(795816),
    _ = n(47294),
    k = n(16961),
    b = n(113854),
    N = n(91242),
    y = n(192308),
    A = n(957907),
    E = n(818085),
    S = n(375708);
function T(e) {
    let { channel: t } = e,
        l = (0, A.A)(t),
        r = (0, h.B9)(t.topic),
        c = (0, i.bG)([N.A], () => null != r && N.A.getConnectedFrame()?.applicationId === r, [r]),
        o = (0, k.G)(),
        d = a.useCallback(() => {
            null != r &&
                (0, _.A)({
                    onConfirm: async () => {
                        (await b.A.refreshProxyTicket({ applicationId: r })) && (0, v.jp)();
                    },
                });
        }, [r]);
    return null == l
        ? null
        : (0, s.jsxs)(s.Fragment, {
              children: [
                  o &&
                      c &&
                      (0, s.jsx)(f.m, {
                          text: S.intl.string(E.default["6g22y7"]),
                          ariaHidden: !0,
                          children: (0, s.jsx)(x.K, {
                              "aria-label": S.intl.string(E.default["6g22y7"]),
                              icon: g.t,
                              variant: "icon-only",
                              size: "sm",
                              onClick: d,
                          }),
                      }),
                  (0, s.jsx)(f.m, {
                      text: S.intl.string(E.default.ikAiBJ),
                      ariaHidden: !0,
                      children: (0, s.jsx)(x.K, {
                          "aria-label": S.intl.string(E.default.ikAiBJ),
                          icon: j.Z,
                          variant: "icon-only",
                          size: "sm",
                          onClick: () =>
                              (function () {
                                  let { projectId: e, openSettings: t } =
                                      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                  (0, y.openModalLazy)(
                                      async () => {
                                          let { default: a } = await Promise.all([
                                              n.e("69884"),
                                              n.e("68259"),
                                              n.e("6389"),
                                              n.e("94614"),
                                              n.e("41907"),
                                              n.e("61959"),
                                              n.e("10943"),
                                              n.e("3710"),
                                              n.e("4374"),
                                              n.e("1962"),
                                              n.e("72627"),
                                              n.e("72921"),
                                          ]).then(n.bind(n, 546816));
                                          return (n) =>
                                              (0, s.jsx)(a, {
                                                  ...n,
                                                  initialProjectId: e ?? null,
                                                  initialSettings: t ?? !1,
                                              });
                                      },
                                      { modalKey: "vibegrations" },
                                  );
                              })({ projectId: l.id, openSettings: !0 }),
                      }),
                  }),
              ],
          });
}
var w = n(998939),
    C = n(297264),
    I = n(289873),
    P = n(407663);
function R(e) {
    let { src: t } = e;
    return (0, s.jsx)("iframe", {
        src: t,
        title: S.intl.string(E.default["bTjP+Y"]),
        className: P.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var G = n(616694);
function O(e) {
    let { state: t } = e;
    return "local" === t.status
        ? (0, s.jsx)(R, { src: t.src }, t.src)
        : "no-app" === t.status
          ? (0, s.jsxs)("div", {
                className: G.q,
                children: [
                    (0, s.jsx)(C.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: S.intl.string(E.default["6xTawd"]),
                    }),
                    (0, s.jsx)(o.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: G.t,
                        children: S.intl.string(E.default.ovEV9p),
                    }),
                ],
            })
          : "error" === t.status
            ? (0, s.jsxs)("div", {
                  className: G.q,
                  children: [
                      (0, s.jsx)(C.D, {
                          variant: "heading-md/semibold",
                          color: "text-default",
                          children: S.intl.string(E.default.MeLWCr),
                      }),
                      (0, s.jsx)(o.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          className: G.t,
                          children: S.intl.string(E.default["1RCbQT"]),
                      }),
                  ],
              })
            : "blocked" === t.status
              ? (0, s.jsxs)("div", {
                    className: G.q,
                    children: [
                        (0, s.jsx)(C.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children: S.intl.string(E.default.MHvjVv),
                        }),
                        (0, s.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: G.t,
                            children: S.intl.string(E.default.TIbJ5p),
                        }),
                    ],
                })
              : "active" === t.status
                ? null
                : (0, s.jsx)("div", { className: G.q, children: (0, s.jsx)(I.y, {}) });
}
var B = n(656485),
    H = n(321593),
    V = n(627363),
    M = n(207371),
    L = n(208137),
    D = n(972786),
    F = n(291815);
function U(e) {
    let { projectId: t, appId: n, channelId: l, chatOpen: r } = e,
        c = (function (e, t, n) {
            let { data: s } = (0, V.YY)(e ?? void 0),
                l = (0, i.bG)([D.A], () => {
                    if (null == e || null == (0, L.V)()) return null;
                    let t = D.A.getAllProjects().find((t) => t.application_id === e || t.preview_application_id === e);
                    return null != t ? (0, L.s)(t, e) : null;
                }, [e]),
                r = (0, i.bG)([N.A], () => N.A.getConnectedFrame()?.applicationId ?? null),
                c = (0, i.bG)([N.A], () => null != e && N.A.isLaunchingFrame(e), [e]),
                o = null != e && r === e,
                [d, u] = a.useState(null),
                m = null != e && d === e,
                p = a.useRef(!1),
                h = a.useRef(!1);
            a.useEffect(
                () => () => {
                    h.current = !0;
                },
                [],
            ),
                a.useEffect(() => {
                    if (t && null != e && null != s && null == l && (0, M.x)(s)) {
                        if (o) {
                            null != n &&
                                N.A.getConnectedFrame()?.channelId !== n &&
                                b.A.stopFrame({ applicationId: e });
                            return;
                        }
                        null != r ||
                            c ||
                            p.current ||
                            m ||
                            ((p.current = !0),
                            b.A.launchFrame({ applicationId: e, channelId: n })
                                .then(() => {
                                    h.current && b.A.stopFrame({ applicationId: e });
                                })
                                .catch(() => u(e))
                                .finally(() => {
                                    p.current = !1;
                                }));
                    }
                }, [t, e, s, l, o, r, c, m, n]);
            let f = a.useRef(null);
            return (a.useEffect(() => {
                f.current = o ? e : null;
            }, [o, e]),
            a.useEffect(
                () => () => {
                    let e = f.current;
                    null != e && b.A.stopFrame({ applicationId: e });
                },
                [e],
            ),
            null == e)
                ? { status: "no-app" }
                : null != l
                  ? { status: "local", src: l }
                  : o
                    ? { status: "active" }
                    : m
                      ? { status: "error" }
                      : null != r
                        ? { status: "blocked" }
                        : { status: "launching" };
        })(n, !0, l);
    return (
        a.useEffect(() => {
            null != t && (0, w.Hc)(t);
        }, [t]),
        (0, s.jsxs)("div", {
            className: F.LB,
            children: [
                (0, s.jsx)("div", { className: F.fm, children: (0, s.jsx)(O, { state: c }) }),
                null != t &&
                    r &&
                    (0, s.jsx)("div", {
                        className: F.AF,
                        children: (0, s.jsxs)("div", {
                            className: F.cO,
                            children: [
                                (0, s.jsx)(H.A, { projectId: t }),
                                (0, s.jsx)(B.A, { projectId: t, open: !0 }, t),
                            ],
                        }),
                    }),
            ],
        })
    );
}
var $ = n(448922);
function J(e) {
    let { channel: t } = e,
        n = (0, h.B9)(t.topic),
        a = (0, A.A)(t)?.id ?? null,
        l = (0, d.Ay)(t),
        f = (0, i.bG)([p.A], () => p.A.getGuild(t.guild_id), [t.guild_id]);
    return (0, s.jsxs)("div", {
        className: $.kL,
        children: [
            (0, s.jsx)(u.HI, { location: f?.name, subsection: l ?? void 0 }),
            (0, s.jsx)("div", {
                className: $.N1,
                children: (0, s.jsx)(c.N, {
                    children: (e) =>
                        (0, s.jsx)(
                            m.A,
                            {
                                guildId: t.guild_id,
                                channelId: t.id,
                                channelType: t.type,
                                hideSearch: !0,
                                toolbar: (0, s.jsx)(T, { channel: t }),
                                className: r()($.wx, e),
                                "aria-label": l ?? void 0,
                                children: (0, s.jsx)(o.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    className: $.Bv,
                                    children: l,
                                }),
                            },
                            `header-${t.id}`,
                        ),
                }),
            }),
            (0, s.jsx)("div", {
                className: $.Ix,
                "data-vibegrations-channel": !0,
                children: (0, s.jsx)(U, { projectId: a, appId: n, channelId: t.id, chatOpen: !1 }),
            }),
        ],
    });
}
