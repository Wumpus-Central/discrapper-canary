t.r(e), t.d(e, { default: () => O });
var a = t(627968),
    n = t(64700),
    s = t(503698),
    i = t.n(s),
    r = t(17928),
    c = t(43990),
    d = t(834730),
    u = t(47167),
    o = t(726249),
    m = t(742589),
    x = t(71393),
    h = t(683180),
    f = t(866665),
    p = t(408278),
    j = t(811893),
    v = t(795816),
    g = t(47294),
    A = t(16961),
    b = t(113854),
    N = t(91242),
    I = t(957907),
    y = t(818085),
    k = t(375708);
function C(l) {
    let { channel: e } = l,
        t = (0, I.A)(e),
        s = (0, h.B9)(e.topic),
        i = (0, r.bG)([N.A], () => null != s && N.A.getConnectedFrame()?.applicationId === s, [s]),
        c = (0, A.G)(),
        d = n.useCallback(() => {
            null != s &&
                (0, g.A)({
                    onConfirm: async () => {
                        (await b.A.refreshProxyTicket({ applicationId: s })) && (0, v.jp)();
                    },
                });
        }, [s]);
    return null != t && c && i
        ? (0, a.jsx)(f.m, {
              text: k.intl.string(y.default["6g22y7"]),
              ariaHidden: !0,
              children: (0, a.jsx)(p.K, {
                  "aria-label": k.intl.string(y.default["6g22y7"]),
                  icon: j.t,
                  variant: "icon-only",
                  size: "sm",
                  onClick: d,
              }),
          })
        : null;
}
var E = t(998939),
    F = t(297264),
    _ = t(289873),
    w = t(407663);
function G(l) {
    let { src: e } = l;
    return (0, a.jsx)("iframe", {
        src: e,
        title: k.intl.string(y.default["bTjP+Y"]),
        className: w.a,
        allow: "autoplay; encrypted-media; fullscreen",
    });
}
var T = t(616694);
function q(l) {
    let { state: e } = l;
    return "local" === e.status
        ? (0, a.jsx)(G, { src: e.src }, e.src)
        : "no-app" === e.status
          ? (0, a.jsxs)("div", {
                className: T.q,
                children: [
                    (0, a.jsx)(F.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: k.intl.string(y.default["6xTawd"]),
                    }),
                    (0, a.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: T.t,
                        children: k.intl.string(y.default.ovEV9p),
                    }),
                ],
            })
          : "error" === e.status
            ? (0, a.jsxs)("div", {
                  className: T.q,
                  children: [
                      (0, a.jsx)(F.D, {
                          variant: "heading-md/semibold",
                          color: "text-default",
                          children: k.intl.string(y.default.MeLWCr),
                      }),
                      (0, a.jsx)(d.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          className: T.t,
                          children: k.intl.string(y.default["1RCbQT"]),
                      }),
                  ],
              })
            : "blocked" === e.status
              ? (0, a.jsxs)("div", {
                    className: T.q,
                    children: [
                        (0, a.jsx)(F.D, {
                            variant: "heading-md/semibold",
                            color: "text-default",
                            children: k.intl.string(y.default.MHvjVv),
                        }),
                        (0, a.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            className: T.t,
                            children: k.intl.string(y.default.TIbJ5p),
                        }),
                    ],
                })
              : "active" === e.status
                ? null
                : (0, a.jsx)("div", { className: T.q, children: (0, a.jsx)(_.y, {}) });
}
var B = t(656485),
    H = t(321593),
    L = t(627363),
    R = t(207371),
    D = t(208137),
    P = t(972786),
    V = t(291815);
function Y(l) {
    let { projectId: e, appId: t, channelId: s, chatOpen: i } = l,
        c = (function (l, e, t) {
            let { data: a } = (0, L.YY)(l ?? void 0),
                s = (0, r.bG)([P.A], () => {
                    if (null == l || null == (0, D.V)()) return null;
                    let e = P.A.getAllProjects().find((e) => e.application_id === l || e.preview_application_id === l);
                    return null != e ? (0, D.s)(e, l) : null;
                }, [l]),
                i = (0, r.bG)([N.A], () => N.A.getConnectedFrame()?.applicationId ?? null),
                c = (0, r.bG)([N.A], () => null != l && N.A.isLaunchingFrame(l), [l]),
                d = null != l && i === l,
                [u, o] = n.useState(null),
                m = null != l && u === l,
                x = n.useRef(!1),
                h = n.useRef(!1);
            n.useEffect(
                () => () => {
                    h.current = !0;
                },
                [],
            ),
                n.useEffect(() => {
                    if (e && null != l && null != a && null == s && (0, R.x)(a)) {
                        if (d) {
                            null != t &&
                                N.A.getConnectedFrame()?.channelId !== t &&
                                b.A.stopFrame({ applicationId: l });
                            return;
                        }
                        null != i ||
                            c ||
                            x.current ||
                            m ||
                            ((x.current = !0),
                            b.A.launchFrame({ applicationId: l, channelId: t })
                                .then(() => {
                                    h.current && b.A.stopFrame({ applicationId: l });
                                })
                                .catch(() => o(l))
                                .finally(() => {
                                    x.current = !1;
                                }));
                    }
                }, [e, l, a, s, d, i, c, m, t]);
            let f = n.useRef(null);
            return (n.useEffect(() => {
                f.current = d ? l : null;
            }, [d, l]),
            n.useEffect(
                () => () => {
                    let l = f.current;
                    null != l && b.A.stopFrame({ applicationId: l });
                },
                [l],
            ),
            null == l)
                ? { status: "no-app" }
                : null != s
                  ? { status: "local", src: s }
                  : d
                    ? { status: "active" }
                    : m
                      ? { status: "error" }
                      : null != i
                        ? { status: "blocked" }
                        : { status: "launching" };
        })(t, !0, s);
    return (
        n.useEffect(() => {
            null != e && (0, E.Hc)(e);
        }, [e]),
        (0, a.jsxs)("div", {
            className: V.LB,
            children: [
                (0, a.jsx)("div", { className: V.fm, children: (0, a.jsx)(q, { state: c }) }),
                null != e &&
                    i &&
                    (0, a.jsx)("div", {
                        className: V.AF,
                        children: (0, a.jsxs)("div", {
                            className: V.cO,
                            children: [
                                (0, a.jsx)(H.A, { projectId: e }),
                                (0, a.jsx)(B.A, { projectId: e, open: !0 }, e),
                            ],
                        }),
                    }),
            ],
        })
    );
}
var M = t(448922);
function O(l) {
    let { channel: e } = l,
        t = (0, h.B9)(e.topic),
        n = (0, I.A)(e)?.id ?? null,
        s = (0, u.Ay)(e),
        f = (0, r.bG)([x.A], () => x.A.getGuild(e.guild_id), [e.guild_id]);
    return (0, a.jsxs)("div", {
        className: M.kL,
        children: [
            (0, a.jsx)(o.HI, { location: f?.name, subsection: s ?? void 0 }),
            (0, a.jsx)("div", {
                className: M.N1,
                children: (0, a.jsx)(c.N, {
                    children: (l) =>
                        (0, a.jsx)(
                            m.A,
                            {
                                guildId: e.guild_id,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: !0,
                                toolbar: (0, a.jsx)(C, { channel: e }),
                                className: i()(M.wx, l),
                                "aria-label": s ?? void 0,
                                children: (0, a.jsx)(d.E, {
                                    variant: "text-md/semibold",
                                    color: "text-default",
                                    className: M.Bv,
                                    children: s,
                                }),
                            },
                            `header-${e.id}`,
                        ),
                }),
            }),
            (0, a.jsx)("div", {
                className: M.Ix,
                "data-vibegrations-channel": !0,
                children: (0, a.jsx)(Y, { projectId: n, appId: t, channelId: e.id, chatOpen: !1 }),
            }),
        ],
    });
}
