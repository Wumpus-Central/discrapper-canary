n.d(t, { A: () => lH });
var l,
    a = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    o = n(789645),
    u = n(672929),
    d = n(58736),
    c = n(948230),
    m = n(18739),
    h = n(289873),
    f = n(821609),
    g = n(627363),
    p = n(580954),
    x = n(297264),
    v = n(834730),
    j = n(625180),
    b = n(91242),
    y = n(812901),
    A = n(317608),
    k = n(17928),
    w = n(956518),
    N = n(869146),
    C = n(207371),
    S = n(165610),
    I = n(652215),
    E =
        (((l = {}).Loading = "loading"),
        (l.AwaitingLaunch = "awaiting-launch"),
        (l.Launched = "launched"),
        (l.RenderingElsewhere = "rendering-elsewhere"),
        (l.NoApplication = "no-application"),
        (l.DoesNotSupportSurface = "does-not-support-surface"),
        (l.Error = "error"),
        l),
    M = n(742023),
    T = n(697744),
    R = n(295813),
    P = n(375708),
    L = n(296167);
function q(e) {
    let { className: t } = e,
        { Component: n, events: l, getDuration: r } = (0, T.c)();
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function n() {
                    ((e = null), null != r()) ? l.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(n));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [l, r]),
        i.useEffect(() => {
            let e = setInterval(l.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [l]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: l.onMouseEnter,
            onMouseLeave: l.onMouseLeave,
            children: [
                (0, a.jsx)(n, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: L.o,
                    children: P.intl.string(R.default.jTuX7C),
                }),
            ],
        })
    );
}
var F = n(328284);
function D(e) {
    let { title: t, body: n, wide: l = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(F.Bf, l && F.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: F.Ux,
                children: [
                    (0, a.jsx)(x.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: n }),
                ],
            }),
            i,
        ],
    });
}
var _ = n(963691);
function z(e) {
    let { applicationId: t, surface: n } = e,
        { frame: l, state: r } = (function (e) {
            let { applicationId: t, surface: n } = e,
                {
                    surface: l,
                    setFailed: a,
                    lifecycle: r,
                } = (function (e) {
                    let { applicationId: t, surface: n } = e,
                        l = i.useMemo(() => (0, S.VA)(t, n), [t, n]),
                        a = i.useMemo(() => n, [l]),
                        r = (0, k.bG)([b.A], () => b.A.getFrame(l), [l]),
                        s = (0, k.bG)(
                            [N.A, b.A],
                            () => N.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT) && b.A.getMainFrame()?.id === l,
                            [l],
                        ),
                        { data: o, isLoading: u } = (0, g.YY)(t),
                        d = (0, C.x)(o),
                        c = null != (0, w.Ay)(t),
                        [m, h] = i.useState(null),
                        f = m === l;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => h(l), [l]),
                        lifecycle: (0, S.x1)(r)
                            ? s
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: r }
                            : f
                              ? { state: "error" }
                              : r?.state === "loading"
                                ? { state: "loading", frame: r }
                                : u
                                  ? { state: "loading", frame: void 0 }
                                  : null != o && c
                                    ? d
                                        ? { state: "awaiting-launch" }
                                        : { state: "does-not-support-surface" }
                                    : { state: "no-application" },
                    };
                })({ applicationId: t, surface: n }),
                { state: s } = r;
            return (
                i.useEffect(() => {
                    "awaiting-launch" === s && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: l });
                        } catch {
                            a();
                        }
                    }
                }, [s, t, l, a]),
                r
            );
        })({ applicationId: t, surface: n }),
        s = (0, S.VA)(t, n);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || N.A.getWindowOpen(I.MLl.ACTIVITY_POPOUT)) return;
                    let n = b.A.getMainFrame()?.id === e;
                    t.intent === S.sV.MAIN
                        ? (n || j.A.promoteFrame(e), j.A.resetFrameLayoutModes(e))
                        : n && j.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = b.A.getFrame(s)) &&
                        ((0, S.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        M.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === S.sV.INLINE && j.A.promoteFrame(s),
                              j.A.updateFrameLayoutMode({ frameId: s, layoutMode: S.y0.PIP }))
                            : e.intent === S.sV.MAIN && j.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        r)
    ) {
        case E.Launched:
            return (0, a.jsx)(A.A, { frameId: l.id, level: y.A.WithinAppContent, className: _.Z7 });
        case E.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: _.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default["4f6Vkr"]),
                    body: P.intl.string(R.default.LJ2q1H),
                }),
            });
        case E.NoApplication:
            return (0, a.jsx)(q, { className: _.qs });
        case E.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: _.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(R.default.FHOJiH),
                    body: P.intl.string(R.default["1yLQoV"]),
                }),
            });
        case E.Error:
            return (0, a.jsxs)("div", {
                className: _.qs,
                children: [
                    (0, a.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(R.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: _.tj,
                        children: P.intl.string(R.default["1RCbQT"]),
                    }),
                ],
            });
        case E.AwaitingLaunch:
        case E.Loading:
            return (0, a.jsx)("div", { className: _.qs, children: (0, a.jsx)(h.y, {}) });
    }
}
var O = n(323384),
    G = n(308528),
    U = n(334738),
    $ = n(802426),
    B = n(355622),
    H = n(734057),
    W = n(531685),
    V = n(365971),
    Q = n(362417);
function Y(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: Q.f,
        children: [
            (0, a.jsx)(O.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function X() {
    return (0, a.jsx)("div", { className: Q.f, children: (0, a.jsx)(h.y, {}) });
}
function K(e) {
    let t,
        n,
        { previewApplicationId: l } = e,
        { data: r, isLoading: s } = (0, g.YY)(l),
        o = r?.bot?.id ?? null,
        u = (0, k.bG)([H.A], () => {
            if (null == o) return null;
            let e = H.A.getDMFromUserId(o);
            return null != e ? H.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        i.useEffect(() => {
            null != t && G.A.preload(I.ME, t);
        }, [t]),
        (n = (0, k.bG)([W.A], () => W.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !n) return;
            let e = (0, V.Xg)();
            return (
                (0, U.yl)(t, e),
                () => {
                    (0, U.dm)(t, e);
                }
            );
        }, [t, n]);
    let [d, c] = i.useState(null),
        m = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            G.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, a.jsx)(X, {})
        : null == o || m
          ? (0, a.jsx)(Y, { message: P.intl.string(R.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(X, {})
            : (0, a.jsx)("div", {
                  className: Q.g,
                  children: (0, a.jsx)($.A, { channel: u, guild: null, chatInputType: B.oU.SIDEBAR }, u.id),
              });
}
var J = n(148853),
    Z = n(598748),
    ee = n(486610),
    et = n(531913),
    en = n(587895),
    el = n(633075),
    ea = n(946356),
    ei = n(139730),
    er = n(520082),
    es = n(287809),
    eo = n(675210),
    eu = n(71495);
function ed(e) {
    let { applicationId: t } = e,
        n = (0, k.bG)([es.default], () => es.default.getCurrentUser());
    return null == n ? null : (0, a.jsx)(ec, { applicationId: t, user: n });
}
function ec(e) {
    let { applicationId: t, user: n } = e,
        l = (0, k.bG)([en.A], () => en.A.getApplication(t)),
        r = i.useMemo(() => new el.R({ applicationId: t }), [t]),
        s = (0, et.A)(n.id, t),
        o = s.surfaceConfigs,
        u = (0, eo.yZ)({
            widgetTop: null != o[Z.m.WIDGET_TOP],
            widgetBottom: null != o[Z.m.WIDGET_BOTTOM],
            miniProfile: null != o[Z.m.MINI_PROFILE],
        });
    return u.hasAny
        ? (0, a.jsx)("div", {
              className: eu.$C,
              children: (0, a.jsxs)("div", {
                  className: eu.PV,
                  children: [
                      u.hasMainCard
                          ? (0, a.jsx)("div", {
                                className: eu.a9,
                                children: (0, a.jsx)(ea.A.Overlay, {
                                    className: eu.Qb,
                                    children: (0, a.jsx)(er.A, {
                                        user: n,
                                        widget: r,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != l
                          ? (0, a.jsx)("div", {
                                className: eu.ql,
                                children: (0, a.jsx)(ei.A, { application: l, rendererProps: s, renderText: ee.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var em = n(976102);
function eh(e) {
    let {
            applicationId: t,
            previewApplicationId: n,
            surface: l,
            previewReady: r,
            previewGate: s,
            availability: o,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        m = (0, u.A)(t, l),
        { isLoading: x } = (0, g.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            s?.type === "permissions" && null != m && (0, p.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(h.y, {}) });
    if (s?.type === "permissions")
        return (0, a.jsx)("div", {
            className: em.q,
            children: (0, a.jsx)(D, {
                wide: !0,
                title: P.intl.string(R.default.DYwf2n),
                body: P.intl.string(R.default.WWj3pN),
                children: (0, a.jsx)(f.$, {
                    variant: "primary",
                    size: "md",
                    text: P.intl.string(R.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!r) return (0, a.jsx)(q, { className: em.q });
    if (null == t) return null;
    if (x) return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(h.y, {}) });
    let v = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, J.z3)(d), "aria-label": (0, J.kZ)(d) } : {};
    return (0, a.jsxs)("div", {
        className: em.R,
        ...v,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(z, { applicationId: t, surface: l })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: em.q,
                          children: (0, a.jsx)(D, {
                              wide: !0,
                              title: P.intl.string(R.default.SGHO9K),
                              body: P.intl.string(R.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(ed, { applicationId: c })
                : null,
            "bot" === d && null != n ? (0, a.jsx)(K, { previewApplicationId: n }) : null,
        ],
    });
}
var ef = n(534890),
    eg = n(738876),
    ep = n(47167),
    ex = n(31717),
    ev = n(372054);
function ej(e) {
    let { channel: t, guild: n, onClose: l } = e,
        i = (0, ep.Ay)(t),
        r = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l });
    return (0, a.jsxs)("div", {
        className: ev.Wx,
        children: [
            (0, a.jsx)(eg.A, { channel: t, draftType: ex.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: r,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: ef.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ev.GZ,
                children: (0, a.jsx)($.A, { channel: t, guild: n, chatInputType: B.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var eb = n(689175),
    ey = n(903586),
    eA = n(783791),
    ek = n(717447),
    ew = n(29080),
    eN = n(46054);
function eC(e) {
    let { steps: t, content: n, hasProposal: l, hasAttachments: a } = e,
        i = (0, ey.B4)(t),
        r = i.filter((e) => "message" === e.type).at(-1),
        s = (0, ey.Lf)(t),
        o = s && null != r && r.content.trim() === n.trim(),
        u = !l && "" !== n && !o;
    return {
        streamed: i,
        lastStreamedMessage: r,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: n, endsOnStreamedMessage: l } = e;
            return t ? (n ? "closing" : l ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: s }),
    };
}
n(134528), n(947204);
var eS = n(939249),
    eI = n(478016),
    eE = n(34136);
function eM(e) {
    let { title: t, trailing: n, children: l, className: i, headerClassName: r, ...o } = e;
    return (0, a.jsxs)("section", {
        className: s()(eE.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: s()(eE.wx, null != n && eE.o5, r),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    n,
                ],
            }),
            l,
        ],
    });
}
var eT = n(113757);
function eR(e) {
    let { idea: t, selected: n, onPick: l } = e,
        r = i.useId(),
        o = null == l;
    return (0, a.jsxs)(eS.D, {
        className: s()(eT.nM, { [eT.f1]: o, [eT.CZ]: n }),
        onClick: o ? void 0 : () => l(t),
        "aria-label": P.intl.formatToPlainString(R.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": o,
        "aria-pressed": n,
        children: [
            (0, a.jsxs)("div", {
                className: eT.jo,
                children: [
                    n
                        ? (0, a.jsx)(eI.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eT.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eT.G9,
                        children: t.title,
                    }),
                ],
            }),
            "" === t.value
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "div",
                      id: r,
                      variant: "text-sm/normal",
                      color: "text-subtle",
                      children: t.value,
                  }),
        ],
    });
}
function eP(e) {
    let { ideas: t, pickedIdeaIds: n, onPick: l } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                s((t) => new Set(t).add(e.id)), l?.(e);
            },
            [l],
        );
    return (0, a.jsx)(eM, {
        title: P.intl.string(R.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                eR,
                { idea: e, selected: r.has(e.id) || n?.has(e.id) === !0, onPick: null == l ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eL = n(435619),
    eq = n(430392),
    eF = n(632015),
    eD = n(824757);
function e_(e) {
    let { label: t, children: n } = e;
    return (0, a.jsxs)("section", {
        className: eD.uW,
        children: [(0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }), n],
    });
}
function ez(e) {
    let { label: t, names: n } = e;
    return 0 === n.length
        ? null
        : (0, a.jsx)(e_, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: eD.Ip,
                  children: n.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: eD.jw,
                              children: (0, a.jsx)(v.E, {
                                  variant: "text-sm/medium",
                                  color: "text-subtle",
                                  tag: "span",
                                  children: e
                                      .split("_")
                                      .map((e) => (0 === e.length ? e : e[0] + e.slice(1).toLowerCase()))
                                      .join(" "),
                              }),
                          },
                          e,
                      ),
                  ),
              }),
          });
}
function eO(e) {
    let { isActivity: t, hasWidget: n } = e,
        l = t ? O.k : eq.RobotIcon;
    return (0, a.jsxs)("span", {
        className: eD.K2,
        children: [
            n
                ? (0, a.jsxs)("span", {
                      className: eD.L6,
                      children: [
                          (0, a.jsx)(eF.f, {
                              size: "custom",
                              width: 16,
                              height: 16,
                              color: "currentColor",
                              "aria-hidden": !0,
                          }),
                          (0, a.jsx)(v.E, {
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              tag: "span",
                              children: P.intl.string(R.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: eD.L6,
                children: [
                    (0, a.jsx)(l, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: P.intl.string(t ? P.t.IC5Ann : R.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eG(e) {
    let { proposal: t } = e;
    return (0, a.jsx)(eM, {
        title: P.intl.string(R.default["60htw+"]),
        trailing: (0, a.jsx)(eO, { isActivity: !0 === t.is_activity, hasWidget: null != t.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: eD.rf,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: t.summary,
                }),
                t.changes.length > 0
                    ? (0, a.jsx)(e_, {
                          label: P.intl.string(R.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: eD.p_,
                              children: t.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: eD.Aw,
                                          children: (0, a.jsx)(v.E, {
                                              variant: "experimental/body-md/normal",
                                              color: "text-default",
                                              tag: "span",
                                              selectable: !0,
                                              children: e,
                                          }),
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                t.commands.length > 0
                    ? (0, a.jsx)(e_, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: eD.p_,
                              children: t.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eD.uX,
                                          children: [
                                              (0, a.jsxs)(v.E, {
                                                  variant: "experimental/body-md/medium",
                                                  color: "text-default",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: ["launch" === e.kind ? "\u21EA " : "", "/", e.name],
                                              }),
                                              (0, a.jsx)(v.E, {
                                                  variant: "experimental/body-md/normal",
                                                  color: "text-muted",
                                                  tag: "span",
                                                  selectable: !0,
                                                  children: e.description,
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                      })
                    : null,
                (0, a.jsx)(ez, { label: P.intl.string(R.default.ieqTtP), names: t.bot_permissions ?? [] }),
                (0, a.jsx)(ez, { label: P.intl.string(R.default.Cn9qix), names: t.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eU = n(192308),
    e$ = n(479191);
function eB(e) {
    let { projectId: t, request: l } = e,
        r = i.useCallback(() => {
            (0, eU.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e("338013"), n.e("468421")]).then(n.bind(n, 539620));
                return (n) => (0, a.jsx)(e, { ...n, projectId: t, request: l });
            });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: e$.Lo,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default["/e28TK"]),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(R.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: e$.cS,
                children: l.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: e$.$H,
                            children: (0, a.jsx)(v.E, {
                                variant: "text-xs/medium",
                                color: "text-default",
                                tag: "span",
                                children: e.label,
                            }),
                        },
                        e.name,
                    ),
                ),
            }),
            (0, a.jsx)("div", {
                className: e$.sq,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r,
                    text: P.intl.string(R.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eH = n(976814),
    eW = n(973e3);
function eV(e) {
    let { projectId: t, request: n } = e,
        l = (0, k.bG)([m.Ay], () => m.Ay.getSettings(t)),
        r = (n.keys ?? []).map((e) => l?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = i.useCallback(() => {
            (0, eH.A)(t, { scopeKeys: n.keys, note: n.note, notifyAgent: !0 });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: eW.Mk,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(R.default.wgDhiQ),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : P.intl.string(R.default["V+DBhs"]),
            }),
            r.length > 0
                ? (0, a.jsx)("div", {
                      className: eW.R6,
                      children: r.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: eW.K4,
                                  children: (0, a.jsx)(v.E, {
                                      variant: "text-xs/medium",
                                      color: "text-default",
                                      tag: "span",
                                      children: e.label,
                                  }),
                              },
                              e.key,
                          ),
                      ),
                  })
                : null,
            (0, a.jsx)("div", {
                className: eW.p0,
                children: (0, a.jsx)(f.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(R.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eQ = n(196582);
function eY(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function eX(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function eK(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function eJ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function eZ(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e0(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e1(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e2(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e7(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e6(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e3(e) {
    let { alt: t, ariaLabel: n, ariaHidden: l, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": n,
        "aria-hidden": l,
        role: i ?? "img",
    });
}
function e5() {
    return [
        { key: "snail", Illocon: eY, tint: "var(--illo-yellow-40)", name: e4(R.default["2l3AEQ"]) },
        { key: "goat", Illocon: eX, tint: "var(--illo-orange-40)", name: e4(R.default["+FPL+I"]) },
        { key: "frog", Illocon: eK, tint: "var(--illo-green-40)", name: e4(R.default.w4GOfR) },
        { key: "bunny", Illocon: eJ, tint: "var(--illo-pink-40)", name: e4(R.default.XmZT9M) },
        { key: "cat", Illocon: eZ, tint: "var(--illo-pink-40)", name: e4(R.default.NnydwQ) },
        { key: "caterpillar", Illocon: e0, tint: "var(--illo-green-40)", name: e4(R.default["4iXcNT"]) },
        { key: "butterfly", Illocon: e1, tint: "var(--illo-purple-40)", name: e4(R.default.DoTGt5) },
        { key: "dog", Illocon: e2, tint: "var(--illo-yellow-40)", name: e4(R.default["9zxqmP"]) },
        { key: "spider", Illocon: e7, tint: "var(--illo-orange-40)", name: e4(R.default.HF0T3L) },
        { key: "bee", Illocon: e6, tint: "var(--illo-yellow-40)", name: e4(R.default.XTzDga) },
        { key: "bot", Illocon: e3, tint: "var(--illo-purple-40)", name: e4(R.default.abtC2b) },
    ];
}
function e8(e) {
    return e5().find((t) => t.key === e);
}
function e4(e) {
    return P.intl.string(e);
}
function e9(e) {
    let t = e5(),
        n = 0,
        l = e[0] ?? "";
    for (let e = 0; e < l.length; e++) n = (31 * n + l.charCodeAt(e)) % t.length;
    let a = new Map();
    return (
        e.forEach((e, l) => {
            a.set(e, t[(n + l) % t.length]);
        }),
        a
    );
}
var te = n(683063),
    tt = n(705754),
    tn = n(883455),
    tl = n(13699);
function ta(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(R.default.MdXWEK);
}
function ti(e) {
    let { projectId: t, lane: n, Illocon: l, tint: i, name: r, connectsDown: s } = e,
        o = n.task,
        u = "running" === o.status,
        d = (0, ey.SY)(n.steps),
        c = u
            ? null != d
                ? (0, ey.WQ)(d)
                : ta(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, n] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || n !== n.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(ta(e));
                  switch (e.status) {
                      case "failed":
                          return P.intl.formatToPlainString(R.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(R.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return P.intl.formatToPlainString(R.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return P.intl.formatToPlainString(R.default.RsOwXc, { count: t });
                                      let n = Math.round(t / 60);
                                      return n < 60
                                          ? P.intl.formatToPlainString(R.default["z+U4YX"], { count: n })
                                          : P.intl.formatToPlainString(R.default["7Q/vz0"], {
                                                hours: Math.floor(n / 60),
                                                minutes: n % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                      default:
                          return P.intl.formatToPlainString(R.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        h =
            o.detail.length > 0 ||
            n.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          n.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: tl.dO,
                                    children: n.steps.map((e) =>
                                        (0, a.jsx)(
                                            tn.A,
                                            { projectId: t, node: e, presentation: "detail", active: u && e === d },
                                            e.id,
                                        ),
                                    ),
                                })
                              : null,
                          o.detail.map((e, t) =>
                              (0, a.jsx)(
                                  "div",
                                  {
                                      className: tl.iq,
                                      children: (0, a.jsx)(tt.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(eQ.A, {
        glyph: (0, a.jsx)(te.u, {
            asset: (0, a.jsx)(l, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: r,
            body: ta(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: tl.nC,
                children: (0, a.jsx)(l, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: i,
        detail: h,
        connected: !0,
        connectsDown: s,
    });
}
n(321073);
var tr = n(140735),
    ts = n(329456);
let to = [];
function tu(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: ts.xL,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return P.intl.string(R.default.TkPGOH);
                case "in_progress":
                    return P.intl.string(R.default["oK+fmd"]);
                default:
                    return P.intl.string(R.default.d7lieu);
            }
        })(t),
        children: (0, a.jsx)("svg", {
            className: ts.L5,
            viewBox: "0 0 10.1668 10.1668",
            "aria-hidden": !0,
            focusable: "false",
            children: (0, a.jsx)("path", { d: "M1 5.52L3.92 9.17L9.17 1" }),
        }),
    });
}
function td(e) {
    let { agents: t, active: n } = e,
        l = i.useMemo(() => (n ? t : to), [n, t]),
        r = i.useMemo(() => new Set(l.map((e) => e.key)), [l]),
        s = l.map((e) => e.key).join("\0"),
        [o, u] = i.useState(l),
        [d, c] = i.useState(s),
        [m, h] = i.useState(!1);
    d !== s && (c(s), u([...l, ...o.filter((e) => !r.has(e.key))]), 0 === l.length && h(!1));
    let f = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!f) return;
            let e = setTimeout(() => u(l), n ? 200 : 250);
            return () => clearTimeout(e);
        }, [f, l, n]),
        i.useEffect(() => {
            if (!n || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => h(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [n, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        p = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: ts.X6,
        "data-shown": n && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: n, name: l, task: i } = e,
                    { Illocon: s } = n;
                return (0, a.jsx)(
                    te.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: l,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: ts.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: l, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            p > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: ts.qA,
                      children: `+${p}`,
                  })
                : null,
        ],
    });
}
function tc(e) {
    let t,
        { todos: n, provisional: l, agents: r } = e,
        s = (function (e) {
            let t = e.join("\0"),
                [n, l] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), l(new Set(e)), o(0 === n.size ? new Set() : new Set(e.filter((e) => !n.has(e))))),
                i.useEffect(() => {
                    if (0 === s.size) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => o(new Set()));
                        });
                    return () => {
                        cancelAnimationFrame(t), cancelAnimationFrame(e);
                    };
                }, [s]),
                s
            );
        })(i.useMemo(() => n.map((e) => e.id), [n])),
        o =
            ((t = (r ?? to).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? to) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let n = e.get(t.todoId);
                    null != n ? n.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: ts.p_,
        children: [
            n.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: ts.AS,
                        "data-status": e.status,
                        "data-arriving": s.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(tu, { status: e.status }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: ts.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: ts.Qq, children: e.text }),
                            }),
                            (0, a.jsx)(td, { agents: o.get(e.id) ?? to, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != l
                ? (0, a.jsxs)("li", {
                      className: ts.AS,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(tu, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: ts.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: ts.Qq, children: l }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tm(e) {
    let { todos: t, provisional: n, agents: l, announceProgress: i = !0 } = e,
        { completed: r, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, a.jsxs)(eM, {
              title: P.intl.string(R.default.qCRC6c),
              trailing: (0, a.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(R.default.bQvqly, { completed: r, total: s }),
              }),
              className: ts.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  i
                      ? (0, a.jsx)(tr.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(R.default["QG/EiF"], { completed: r, total: s }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: ts.rf,
                      children: (0, a.jsx)(tc, { todos: t, provisional: n, agents: l }),
                  }),
              ],
          });
}
var th = n(229775),
    tf = n(165648);
function tg(e) {
    let t = e9(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let n = null != e.task.helperMark ? e8(e.task.helperMark) : void 0,
            l = n ?? t.get(e.taskId);
        return null == l
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: l,
                      name: null != n && null != e.task.helperName ? e.task.helperName : l.name,
                      task: ta(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function tp(e) {
    let {
            projectId: t,
            steps: n,
            active: l = !1,
            durationMs: r,
            interrupted: s = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: h = !1,
            segmentDurationMs: f,
        } = e,
        g = i.useMemo(() => (0, ey.GO)(n, { turnActive: l }), [n, l]),
        p = i.useMemo(
            () =>
                null == d
                    ? g
                    : {
                          ...g,
                          steps: g.steps.filter((e) => e.segment === d),
                          tasks: g.tasks.filter((e) => e.task.segment === d),
                      },
            [g, d],
        );
    if (s)
        return (0, a.jsx)("ol", {
            className: tl.pj,
            "data-live": !1,
            children: (0, a.jsx)(eQ.A, {
                glyph: (0, a.jsx)(ew.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(R.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let x = l ? void 0 : (f ?? (m ? (g.turn?.durationMs ?? r) : void 0)),
        v = c ? ((0, ey.lt)(n) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === p.steps.length && 0 === p.tasks.length && !j) return null;
    let b = p.tasks,
        y = e9(b.map((e) => e.taskId)),
        A = !h && (l || b.some((e) => "running" === e.task.status)),
        k = tg(b);
    return (0, a.jsx)(eQ.l.Provider, {
        value: b.length,
        children: (0, a.jsxs)("ol", {
            className: tl.pj,
            "data-live": A,
            children: [
                (0, a.jsx)(ek.Ay, {
                    projectId: t,
                    steps: p.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: l,
                    closed: h,
                    durationMs: x,
                    connectsDown: b.length > 0,
                }),
                b.map((e, n) => {
                    let l = null != e.task.helperMark ? e8(e.task.helperMark) : void 0,
                        i = l ?? y.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              ti,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != l && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: n < b.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, a.jsx)("li", {
                          className: tl.YO,
                          children: (0, a.jsx)(tm, { todos: v, provisional: u, agents: k }),
                      })
                    : null,
            ],
        }),
    });
}
function tx(e) {
    let {
            projectId: t,
            steps: n,
            content: l,
            proposal: r,
            ideas: o,
            attachments: u,
            secretRequest: d,
            settingsRequest: c,
            onPickIdea: m,
            pickedIdeaIds: h,
            sideReply: f = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: p,
            lastStreamedMessage: x,
            showsClosingMessage: j,
            attachmentsHost: b,
        } = i.useMemo(
            () => eC({ steps: n, content: l, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [n, l, r, u],
        ),
        y = null == u ? null : (0, a.jsx)(eL.A, { projectId: t, attachments: u }),
        A = null == y ? null : (0, a.jsx)("div", { className: tl.MT, children: y }),
        k = f
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(R.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: tl.ue,
        children: [
            p.length > 0 && !g
                ? (0, a.jsx)("ol", {
                      className: tl.dO,
                      children: p
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: tl.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tf.PT,
                                              children: eN.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === x ? A : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(eG, { proposal: r })
                : j
                  ? (0, a.jsxs)("div", {
                        className: s()(tl.ky, th.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: s()(tf.PT, tl.cW),
                                children: eN.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? A : null,
                            k,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: s()(tl.ky, th.XR),
                      children: (0, a.jsx)(eB, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: s()(tl.ky, th.XR),
                      children: (0, a.jsx)(eV, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === b ? y : null,
            null != o && o.length > 0 ? (0, a.jsx)(eP, { ideas: o, pickedIdeaIds: h, onPick: m }) : null,
            j ? null : k,
        ],
    });
}
n(323874), n(14289), n(35956);
var tv = n(475358),
    tj = n(922016),
    tb = n(980707),
    ty = n(477782),
    tA = n(81369),
    tk = n(717400),
    tw = n(663341),
    tN = n(826745),
    tC = n(866665),
    tS = n(783977),
    tI = n(559647),
    tE = n(285796),
    tM = n(775602),
    tT = n(673724),
    tR = n(435558),
    tP = n.n(tR),
    tL = n(506774),
    tq = n(228366);
let tF = "VibegrationsComposerDrafts";
function tD() {
    return tL.w.get(tF) ?? {};
}
let t_ = new Map(),
    tz = tP().throttle(() => {
        if (0 === t_.size) return;
        let e = tD();
        for (let [t, n] of t_) "" === n ? delete e[t] : (e[t] = n);
        t_.clear(), tL.w.set(tF, e);
    }, 1e3);
class tO extends k.Ay.Store {
    getDraft(e) {
        let t = t_.get(e);
        return null != t ? t : (tD()[e] ?? "");
    }
}
let tG = new tO(tq.h, {
    LOGOUT: function () {
        return t_.clear(), tz.cancel(), tL.w.remove(tF), !1;
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: n } = e;
        return t_.set(t, n), tz(), "" === n && tz.flush(), !1;
    },
});
var tU = n(590380),
    t$ = n(311656),
    tB = n(789438);
let tH = tT.Is;
function tW(e) {
    let { text: t } = e,
        [n, l] = i.useState(""),
        [r, s] = i.useState("enterStart"),
        [o, u] = i.useState("");
    t !== o && (u(t), t !== n && ("" === n ? (l(t), s("enterStart")) : "idle" === r && s("exit"))),
        i.useEffect(() => {
            if ("exit" === r) {
                let e = window.setTimeout(() => {
                    l(t), s("enterStart");
                }, 250);
                return () => window.clearTimeout(e);
            }
            if ("enterStart" === r) {
                let e = 0,
                    t = window.requestAnimationFrame(() => {
                        e = window.requestAnimationFrame(() => s("idle"));
                    });
                return () => {
                    window.cancelAnimationFrame(t), 0 !== e && window.cancelAnimationFrame(e);
                };
            }
        }, [r, t]);
    let d = "exit" === r ? tB.t0 : "enterStart" === r ? tB.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tB.xM} ${tB.nT} ${d}`, children: n }),
            (0, a.jsx)(tv.e, { shortcut: "tab", className: `${tB.xT} ${tB.nT} ${d}`, keyClassName: tB.IS }),
        ],
    });
}
let tV = 0;
function tQ(e) {
    let {
            projectId: t,
            canSend: n,
            stopped: l,
            running: r,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onDeleteFile: m,
            onApprove: h,
            onImport: f,
            suggestion: g,
            questionOpen: p = !1,
            modelSettings: x,
            onModelSettingsChange: v,
        } = e,
        [j, b] = i.useState(() => tG.getDraft(t)),
        y = i.useCallback(
            (e) => {
                (0, c.I$)(t, e), b(e);
            },
            [t],
        ),
        [A, w] = i.useState(t);
    A !== t && (w(t), b(tG.getDraft(t)));
    let N = (0, k.bG)([tM.Ay], () => tM.Ay.isSubmitButtonEnabled),
        [C, S] = i.useState([]),
        [I, E] = i.useState(!1),
        [M, T] = i.useState(!1);
    i.useEffect(() => {
        r || T(!1);
    }, [r]);
    let L = i.useRef(null),
        q = i.useRef([]),
        F = i.useRef(new Set()),
        D = i.useRef(m);
    D.current = m;
    let _ = i.useCallback((e) => {
            (q.current = e), S(e);
        }, []),
        z = i.useCallback((e) => {
            D.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = F.current;
        return () => {
            for (let t of q.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && z(t.ref);
        };
    }, [z]);
    let O = i.useCallback(
            (e, t) => {
                if (F.current.has(e)) return;
                let n = q.current;
                n.some((t) => t.localId === e) && _(n.map((n) => (n.localId === e ? { ...n, ...t } : n)));
            },
            [_],
        ),
        G = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...q.current],
                    n = [];
                for (let l of e) {
                    let e = "" === l.type ? "application/octet-stream" : l.type,
                        a = ++tV,
                        i = { localId: a, name: l.name, size: l.size, contentType: e, status: "uploading" };
                    if (t.length >= tH) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.DlX57a, { count: tH }),
                        });
                        continue;
                    }
                    if (!(0, tT.x5)(l.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(R.default.cI7t94, {
                                size: (0, tT.ZJ)((0, tT.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let r = tT.Wb.has(e) ? URL.createObjectURL(l) : void 0;
                    t.push({ ...i, previewUrl: r }), n.push({ file: l, localId: a });
                }
                for (let { file: e, localId: l } of (_(t), n))
                    d(e).then(
                        (e) => {
                            F.current.has(l) ? z(e) : O(l, { status: "ready", ref: e });
                        },
                        (e) => {
                            F.current.has(l) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                O(l, { status: "error", errorText: P.intl.string(R.default.GwEHvn) }));
                        },
                    );
            },
            [z, d, O, _],
        ),
        U = i.useCallback(
            (e) => {
                let t = q.current,
                    n = t.find((t) => t.localId === e);
                F.current.add(e),
                    n?.previewUrl != null && URL.revokeObjectURL(n.previewUrl),
                    n?.ref != null && z(n.ref),
                    _(t.filter((t) => t.localId !== e));
            },
            [z, _],
        ),
        $ = C.every((e) => "ready" === e.status),
        B = "" !== j.trim() || C.length > 0,
        H = n && B && $,
        W = i.useCallback(() => {
            if (!H) return;
            let e = q.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (o(j, e.length > 0 ? e : void 0), q.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            y(""), _([]);
        }, [H, j, o, _, y]),
        V = i.useCallback(
            (e) => {
                e.preventDefault(), W();
            },
            [W],
        ),
        Q = i.useCallback(() => {
            null == u || M || (T(!0), u());
        }, [u, M]),
        Y = null == g || "" !== j || !n || l || s ? null : g,
        X = i.useCallback(
            (e) => {
                if ("Escape" === e.key && r && null != u && !M) {
                    e.preventDefault(), e.stopPropagation(), Q();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != Y) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), y(Y);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != h && (e.preventDefault(), h());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), W());
            },
            [W, h, r, u, M, Q, Y, y],
        ),
        K = i.useCallback(
            (e) => {
                if (!n) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), G(t));
            },
            [n, G],
        ),
        J = i.useCallback(
            (e) => {
                e.preventDefault(), E(!1), n && G(Array.from(e.dataTransfer.files));
            },
            [n, G],
        ),
        Z = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), E(!0));
        }, []),
        ee = i.useCallback(
            (e) => {
                G(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [G],
        ),
        et = i.useRef(null),
        en = i.useRef(null),
        [el, ea] = i.useState(0),
        [ei, er] = i.useState(!1);
    i.useEffect(() => {
        if (0 === j.length) return void er(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = tK(e);
            null != t && ea(t);
        }
        er(!0);
        let t = setTimeout(() => er(!1), tY);
        return () => clearTimeout(t);
    }, [j]);
    let es = i.useMemo(() => ({ "--custom-glow-x": `${el}px` }), [el]),
        eo = ei ? ` ${tB.EB}` : "",
        eu = null != Y;
    return (0, a.jsxs)("form", {
        onSubmit: V,
        onDrop: J,
        onDragOver: Z,
        onDragLeave: () => E(!1),
        className: I ? `${tB.DA} ${tB.pV}` : tB.DA,
        children: [
            C.length > 0
                ? (0, a.jsx)("div", {
                      className: tB.lN,
                      children: C.map((e) => (0, a.jsx)(tJ, { draft: e, onRemove: U }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${tB.wg} ${tB.LP}${eo}`, style: es, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tB.wg} ${tB.L3}${eo}`, style: es, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tB.VA,
                ref: et,
                children: [
                    (0, a.jsx)("input", {
                        ref: L,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: tB.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tj.Y, {
                        targetElementRef: en,
                        position: "top",
                        align: "left",
                        animation: tj.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tb.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(ty.rX, {
                                    children: [
                                        (0, a.jsx)(ty.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: tA.H,
                                            leadingAccessory: { type: "icon", icon: tA.H },
                                            action: () => L.current?.click(),
                                        }),
                                        null != f
                                            ? (0, a.jsx)(ty.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(R.default.edKajy),
                                                  iconLeft: tk.q,
                                                  leadingAccessory: { type: "icon", icon: tk.q },
                                                  action: f,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, t) => {
                            let { isShown: l } = t;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: en,
                                type: "button",
                                className: `${tB.Y0} ${tB.nu}`,
                                disabled: !n,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": l,
                                children: (0, a.jsx)(tw.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tB.Qu,
                                }),
                            });
                        },
                    }),
                    null == Y
                        ? null
                        : (0, a.jsx)("div", {
                              className: tB.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tW, { text: Y }),
                          }),
                    (0, a.jsx)(tN.y, {
                        value: j,
                        onChange: (e) => y(e.currentTarget.value),
                        onKeyDown: X,
                        onPaste: K,
                        placeholder: s
                            ? P.intl.string(R.default.pGFXZ0)
                            : l
                              ? P.intl.string(R.default.JeM47J)
                              : n
                                ? eu
                                    ? ""
                                    : p
                                      ? P.intl.string(R.default.M3ovXY)
                                      : P.intl.string(r ? R.default["67PpcP"] : R.default.ahRdoJ)
                                : P.intl.string(R.default.nm4w9P),
                        disabled: !n,
                        "aria-label": P.intl.string(R.default.OPr66w),
                        rows: 1,
                        className: tB.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: tB.Sz,
                        children:
                            r && null != u
                                ? (0, a.jsx)(tC.m, {
                                      text: P.intl.string(R.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${tB.Y0} ${tB.$E}`,
                                          disabled: M,
                                          onClick: Q,
                                          "aria-label": P.intl.string(R.default.KdgI4k),
                                          children: (0, a.jsx)(ew.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != x && null != v
                                  ? (0, a.jsx)(t$.A, {
                                        settings: x.settings,
                                        choices: x.choices,
                                        disabled: !n,
                                        onChange: v,
                                        className: `${tB.Y0} ${tB.$E}`,
                                        icon: (0, a.jsx)(tS.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    N
                        ? (0, a.jsxs)("div", {
                              className: tB.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tB.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tB.rt,
                                      disabled: !H,
                                      "aria-label": P.intl.string(R.default["22GHMt"]),
                                      children: (0, a.jsx)(tI.SendMessageIcon, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
}
let tY = 1500,
    tX = [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "letter-spacing",
        "word-spacing",
        "line-height",
        "text-indent",
        "text-transform",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
    ];
function tK(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = tK.mirror;
            if (null != e) return e;
            let t = document.createElement("div");
            return (
                t.setAttribute("aria-hidden", "true"),
                (t.style.position = "absolute"),
                (t.style.top = "0"),
                (t.style.left = "-9999px"),
                (t.style.visibility = "hidden"),
                (t.style.boxSizing = "border-box"),
                (t.style.whiteSpace = "pre-wrap"),
                (t.style.overflowWrap = "break-word"),
                document.body.appendChild(t),
                (tK.mirror = t),
                t
            );
        })(),
        n = window.getComputedStyle(e);
    for (let e of tX) t.style.setProperty(e, n.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let l = document.createElement("span");
    (l.textContent = "\u200B"), t.appendChild(l);
    let a = l.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function tJ(e) {
    let { draft: t, onRemove: n } = e;
    return (0, a.jsxs)(tU.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(h.y, { type: h.t.SPINNING_CIRCLE_SIMPLE, className: tB.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tB.o1,
                onClick: () => n(t.localId),
                "aria-label": P.intl.string(R.default["3HWvgk"]),
                children: (0, a.jsx)(tE.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
tK.mirror = null;
var tZ = n(320095),
    t0 = n(963852),
    t1 = n(521981),
    t2 = n(763754),
    t7 = n(491182),
    t6 = n(438729),
    t3 = n(622868),
    t5 = n(308334),
    t8 = n(837528),
    t4 = n(375199),
    t9 = n(715628),
    ne = n(752636),
    nt = n(9842),
    nn = n(589022),
    nl = n(95701),
    na = n(994500),
    ni = n(967198),
    nr = n(803306);
let ns = new Set(),
    no = new Map();
function nu(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
let nd = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function nc(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function nm(e, t) {
    if (t <= 0) return;
    let n = e.charCodeAt(t - 1);
    if (n >= 56320 && n <= 57343 && t >= 2) {
        let l = e.charCodeAt(t - 2);
        if (l >= 55296 && l <= 56319) return (l - 55296) * 1024 + (n - 56320) + 65536;
    }
    return n;
}
function nh(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let n = e.charCodeAt(t - 1),
        l = e.charCodeAt(t);
    if (n >= 55296 && n <= 56319 && l >= 56320 && l <= 57343) return !0;
    let a = nm(e, t),
        i = e.codePointAt(t);
    if (
        (null != i &&
            (8205 === i ||
                (i >= 65024 && i <= 65039) ||
                (i >= 127995 && i <= 127999) ||
                (i >= 768 && i <= 879) ||
                (i >= 8400 && i <= 8447) ||
                (i >= 65056 && i <= 65071) ||
                (i >= 917536 && i <= 917631))) ||
        8205 === a
    )
        return !0;
    if (nc(a) && nc(i)) {
        let n = 0,
            l = t;
        for (; n < 32 && nc(nm(e, l)); ) n++, (l -= 2);
        return n % 2 == 1;
    }
    return !1;
}
function nf(e, t) {
    let { streaming: n } = t,
        l = (0, k.bG)([tM.Ay], () => tM.Ay.useReducedMotion),
        a = n && !l,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, n) {
                      let l = Math.min(Math.max(n, 0), e.length);
                      if (0 === l) return 0;
                      if (t.length >= l && t.startsWith(e.slice(0, l))) return l;
                      let a = Math.min(l, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i); ) i++;
                      for (; i > 0 && nh(t, i); ) i--;
                      return i;
                  })(o.target, e, o.length)
                : e.length,
        }),
        a || o.length === e.length || (o = { target: e, length: e.length }),
        o !== r && s(o);
    let u = a && o.length < e.length,
        d = i.useRef(o);
    i.useLayoutEffect(() => {
        d.current = o;
    });
    let c = i.useRef(0),
        m = i.useRef(0);
    i.useEffect(() => {
        if (u)
            return (
                (m.current = 0),
                (c.current = requestAnimationFrame(function e(t) {
                    let n = 0 === m.current ? 32 : t - m.current;
                    if (n >= 32) {
                        m.current = t;
                        let e = d.current,
                            l = (function (e) {
                                let { target: t, revealed: n, elapsedMs: l } = e,
                                    a = Math.min(Math.max(n, 0), t.length),
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let r = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(l, 0))),
                                );
                                var s = (function (e, t, n) {
                                    if (n >= e.length) return n;
                                    let l = n;
                                    for (; l > t + 1 && n - l < 12 && nd.has(e.charAt(l - 1)); ) l--;
                                    return nd.has(e.charAt(l - 1)) ? n : l;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && nh(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: n });
                        l !== e.length && s({ target: e.target, length: l });
                    }
                    c.current = requestAnimationFrame(e);
                })),
                () => cancelAnimationFrame(c.current)
            );
    }, [u]),
        i.useEffect(() => {
            if (u)
                return (
                    e(),
                    document.addEventListener("visibilitychange", e),
                    () => document.removeEventListener("visibilitychange", e)
                );
            function e() {
                if ("hidden" !== document.visibilityState) return;
                let { target: e } = d.current;
                s({ target: e, length: e.length });
            }
        }, [u]);
    let h = Math.min(o.length, e.length);
    return { text: h >= e.length ? e : e.slice(0, h), revealing: a && h < e.length };
}
var ng = n(441136);
let np = (0, nl.createChannelRecord)({ id: "vibegrations-builder", type: I.rbe.DM }),
    nx = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function nv(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: s()(ng.Yq, { [ng.x1]: t }), children: e });
}
function nj(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function nb(e, t, n) {
    let { content: l } = (0, t4.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: np, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != n
          ? (0, a.jsx)(t6.Ay, { className: n, message: e, content: l, compact: !1 })
          : (0, t9.A)(r, l);
}
function ny(e) {
    let [t, n] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        l = i.useCallback((e) => n((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => n({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, t8.m)(e, np, t.usernameProfile, l),
        o = (0, t8.Jo)(t.avatarProfile, l),
        u = (0, k.bG)([ni.A], () => ni.A.getGuildId()),
        d = (0, k.bG)([es.default], () => es.default.getCurrentUser()),
        c = i.useCallback(
            (t) => {
                let n = es.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(nn.A, { ...t, user: n, currentUser: d, guildId: u ?? void 0 });
            },
            [d, u, e.author],
        );
    return {
        showAvatarPopout: t.avatarProfile,
        showUsernamePopout: t.usernameProfile,
        onClickAvatar: o,
        onClickUsername: s,
        onPopoutRequestClose: r,
        renderPopout: c,
        guildId: u ?? void 0,
    };
}
function nA(e) {
    let { baseMessage: t, referenced: n, onJumpToReplied: l } = e,
        r = i.useMemo(
            () => ("" !== n.content ? (0, t1.Ay)(n, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [n],
        ),
        { isReplyAuthorBlocked: s, isReplyAuthorIgnored: o } = (0, k.cf)(
            [na.A],
            () => ({
                isReplyAuthorBlocked: na.A.isBlockedForMessage(n),
                isReplyAuthorIgnored: na.A.isIgnoredForMessage(n),
            }),
            [n],
        ),
        u = (0, t2.X4)(n),
        d = (0, t2.X4)(t),
        c = ny(n);
    return (0, a.jsx)(t5.A, {
        repliedAuthor: u,
        baseAuthor: d,
        baseMessage: t,
        channel: np,
        referencedMessage: { state: nt.a.LOADED, message: n },
        content: r,
        compact: !1,
        isReplyAuthorBlocked: s,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != l,
        showReplySpine: !0,
        renderPopout: c.renderPopout,
        showAvatarPopout: c.showAvatarPopout,
        showUsernamePopout: c.showUsernamePopout,
        onClickAvatar: c.onClickAvatar,
        onClickUsername: c.onClickUsername,
        onClickReply: l,
        onPopoutRequestClose: c.onPopoutRequestClose,
    });
}
function nk(e) {
    let { message: t, author: n } = e,
        l = ny(t);
    return (0, a.jsx)(t3.Ay, {
        message: t,
        channel: np,
        author: n,
        guildId: l.guildId,
        subscribeToGroupId: t.id,
        renderPopout: l.renderPopout,
        showAvatarPopout: l.showAvatarPopout,
        showUsernamePopout: l.showUsernamePopout,
        onClickAvatar: l.onClickAvatar,
        onClickUsername: l.onClickUsername,
        onPopoutRequestClose: l.onPopoutRequestClose,
    });
}
function nw(e) {
    let { content: t, createdAt: n, userId: l, accessories: r, groupStart: s } = e;
    i.useEffect(
        () =>
            (function (e) {
                if (null == e || ns.has(e) || null != es.default.getUser(e)) return;
                let t = no.get(e) ?? 0;
                t >= 3 ||
                    (no.set(e, t + 1),
                    ns.add(e),
                    nr
                        .getUser(e)
                        .finally(() => ns.delete(e))
                        .catch(() => {}));
            })(l),
        [l],
    );
    let o = (0, k.bG)(
            [es.default],
            () => nu(l, null != l ? es.default.getUser(l) : null, es.default.getCurrentUser()),
            [l],
        ),
        u = i.useMemo(() => (0, t2.FT)(o, null), [o]),
        d = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, t0.Ay)({ channelId: np.id, content: t, author: o });
            return (0, tZ.rh)({ ...e, timestamp: nj(n, e.timestamp), state: I.cmJ.SENT });
        }, [t, o, n]);
    return null == d ? null : (0, a.jsx)(nN, { message: d, author: u, content: t, accessories: r, groupStart: s });
}
function nN(e) {
    let { message: t, author: n, content: l, accessories: i, groupStart: r = !0 } = e,
        s = nb(t, l);
    return (0, a.jsx)(t7.A, {
        className: ng.yE,
        author: n,
        childrenHeader: r ? (0, a.jsx)(nk, { message: t, author: n }) : void 0,
        childrenMessageContent: s,
        childrenAccessories: nv(i, "" !== l),
        disableInteraction: !0,
    });
}
function nC(e) {
    let {
            content: t,
            createdAt: n,
            accessories: l,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = nf(t, { streaming: u }),
        m = i.useMemo(() => (0, t2.FT)(null, null), []),
        h = i.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        f = r?.userId,
        g = (0, k.bG)(
            [es.default],
            () => nu(f, null != f ? es.default.getUser(f) : null, es.default.getCurrentUser()),
            [f],
        ),
        p = i.useMemo(() => {
            if (null == r || null == g) return null;
            let e = (0, t0.Ay)({ channelId: np.id, content: r.content, author: g });
            return (0, tZ.rh)({ ...e, id: r.id, timestamp: nj(r.createdAt, e.timestamp), state: I.cmJ.SENT });
        }, [r, g]),
        x = i.useMemo(() => (null == r ? void 0 : { channel_id: np.id, message_id: r.id }), [r]),
        v = i.useMemo(() => {
            let e = (0, t0.Ay)({ channelId: np.id, content: d, author: nx });
            return (0, tZ.rh)({
                ...e,
                timestamp: nj(n, e.timestamp),
                state: I.cmJ.SENT,
                ...(null != x ? { type: I.lAJ.REPLY, message_reference: x } : {}),
            });
        }, [d, n, x]),
        j = nb(v, d, ng.OS);
    return (0, a.jsxs)("div", {
        className: ng.$4,
        "data-replying": null != p ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, a.jsx)(t7.A, {
                className: ng.yE,
                author: h,
                childrenRepliedMessage:
                    null == p ? null : (0, a.jsx)(nA, { baseMessage: v, referenced: p, onJumpToReplied: s }),
                childrenHeader: (0, ne.A)({ message: v, channel: np, author: h, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: nv(l, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: ng.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(O.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var nS = n(375068);
function nI(e) {
    let { projectId: t, messages: n, ref: l, onPickIdea: r } = e,
        s = i.useRef(null),
        o = i.useCallback(
            (e) => {
                (s.current = e), "function" == typeof l ? l(e) : null != l && (l.current = e);
            },
            [l],
        ),
        [u, d] = i.useState(null),
        c = i.useRef(0);
    i.useEffect(() => () => window.clearTimeout(c.current), []);
    let m = i.useCallback((e) => {
            let t = s.current?.querySelector(`[data-vibegrations-message="${e}"]`);
            t?.scrollIntoView({ block: "center", behavior: "smooth" }),
                d(e),
                window.clearTimeout(c.current),
                (c.current = window.setTimeout(() => d(null), 1600));
        }, []),
        h = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    function n(e, n) {
                        t.push({ row: e, groupable: { key: e.key, ...n } });
                    }
                    for (let t of e) {
                        if ("user" === t.role) {
                            n(
                                { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                                { actor: "user", authorId: t.user_id, boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, eA.BL)(t),
                            l = eC({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = l.lastStreamedMessage?.key,
                            i = (0, ey.C6)(t.steps, { turnActive: e }),
                            { lastWork: r, open: s } = (0, ey.CT)(i, { turnActive: e }),
                            o = i.at(-1)?.index;
                        for (let u of i) {
                            if (null != u.prose) {
                                let i = `${t.render_id}:${u.key}`;
                                n(
                                    {
                                        kind: "prose",
                                        key: i,
                                        message: t,
                                        groupStart: !1,
                                        content: u.prose.content,
                                        hostsAttachments:
                                            "streamed" === l.attachmentsHost &&
                                            u.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && u.index === o && !u.hasWork,
                                    },
                                    { actor: "assistant", boundary: i },
                                );
                            }
                            (u.hasWork || u.hasTodos) &&
                                n(
                                    {
                                        kind: "activity",
                                        key: `${t.render_id}:work-${u.index}`,
                                        message: t,
                                        groupStart: !1,
                                        segment: u.index,
                                        active: u.index === s,
                                        closed: u.index !== s,
                                        ...(null != u.durationMs ? { segmentDurationMs: u.durationMs } : {}),
                                        reportsDuration: u.index === r,
                                        hostsChecklist: u.hasTodos,
                                    },
                                    { actor: null, boundary: void 0 },
                                );
                        }
                        if (
                            (!0 === t.interrupted
                                ? n(
                                      {
                                          kind: "interrupted",
                                          key: `${t.render_id}:interrupted`,
                                          message: t,
                                          groupStart: !1,
                                      },
                                      { actor: null, boundary: void 0 },
                                  )
                                : i.every((e) => !e.hasTodos) &&
                                  (t.todos?.length ?? 0) > 0 &&
                                  n(
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            l.showsClosingMessage ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === l.attachmentsHost)
                        ) {
                            let a = `${t.render_id}:closing`;
                            n(
                                {
                                    kind: "closing",
                                    key: a,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: l.attachmentsHost,
                                },
                                {
                                    actor: "assistant",
                                    boundary: a,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let l = (function (e) {
                        let t,
                            n,
                            l = [],
                            a = null,
                            i = !1,
                            r = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                l.push(!1), (a = null), (t = void 0), (i = !1), (r = !1), (n = void 0);
                                continue;
                            }
                            let e =
                                !i || a !== s.actor || t !== s.authorId || s.boundary !== n || !0 === s.separate || r;
                            e && ((a = s.actor), (t = s.authorId), (i = !0), (r = !0 === s.separate), (n = s.boundary)),
                                l.push(e);
                        }
                        return l;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: l[t] ?? !0 }));
                })(n),
            [n],
        );
    return 0 === n.length
        ? (0, a.jsx)("ol", {
              ref: l,
              className: nS.x7,
              children: (0, a.jsx)(nE, {
                  role: "assistant",
                  children: (0, a.jsx)(nC, { content: P.intl.string(R.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: o,
              className: nS.x7,
              children: h.map((e) => {
                  let l = e.message;
                  switch (e.kind) {
                      case "user": {
                          let n = null != l.attachments && l.attachments.length > 0 ? l.attachments : null;
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "user",
                                  anchorId: l.id,
                                  highlighted: u === l.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nw, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      userId: l.user_id,
                                      accessories:
                                          null != n ? (0, a.jsx)(eL.A, { projectId: t, attachments: n }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nC, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: l.created_at,
                                      accessories:
                                          e.hostsAttachments && null != l.attachments
                                              ? (0, a.jsx)(eL.A, { projectId: t, attachments: l.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tp, {
                                      projectId: t,
                                      steps: l.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != l.finished_at ? l.finished_at - l.created_at : void 0,
                                      todos: l.todos,
                                      provisionalTodo: l.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tp, { projectId: t, interrupted: !0, steps: l.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(tp, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: l.todos,
                                      provisionalTodo: l.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, a.jsx)(
                              nE,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(nC, {
                                      groupStart: e.groupStart,
                                      content: l.content,
                                      createdAt: l.created_at,
                                      replyTo: (function (e, t) {
                                          if (null == t) return;
                                          let n = e.find((e) => e.id === t && "user" === e.role);
                                          if (null != n)
                                              return {
                                                  id: n.id,
                                                  content: n.content,
                                                  ...(null != n.user_id ? { userId: n.user_id } : {}),
                                                  createdAt: n.created_at,
                                              };
                                      })(n, l.in_reply_to),
                                      onJumpToReplied: null != l.in_reply_to ? () => m(l.in_reply_to) : void 0,
                                      accessories: (0, a.jsx)(tx, {
                                          projectId: t,
                                          steps: l.steps,
                                          announcement: l.announcement,
                                          content: "",
                                          proposal: l.proposal,
                                          interrupted: !0 === l.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: l.ideas,
                                          pickedIdeaIds:
                                              null == l.ideas
                                                  ? void 0
                                                  : (function (e, t, n) {
                                                        let l = new Set();
                                                        for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                            let t = e[a];
                                                            if ("user" === t.role)
                                                                for (let e of n)
                                                                    e.implementation_prompt.trim() ===
                                                                        t.content.trim() && l.add(e.id);
                                                        }
                                                        return l;
                                                    })(n, l, l.ideas),
                                          attachments: l.attachments,
                                          secretRequest: l.secretRequest,
                                          settingsRequest: l.settingsRequest,
                                          onPickIdea: r,
                                      }),
                                  }),
                              },
                              e.key,
                          );
                  }
              }),
          });
}
function nE(e) {
    let { role: t, children: n, anchorId: l, highlighted: i = !1, continuation: r = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": l,
        className: s()(nS.xk, { [nS.Qo]: i, [nS.q3]: r }),
        children: n,
    });
}
var nM = n(625903),
    nT = n(964675);
function nR(e) {
    let { projectId: t } = e,
        n = (0, k.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        l = i.useCallback(() => {
            (0, eH.A)(t);
        }, [t]);
    return n
        ? (0, a.jsx)(eS.D, {
              className: nT.h,
              "aria-label": P.intl.string(R.default.gTMvzD),
              onClick: l,
              children: (0, a.jsx)(nM.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var nP = n(863610),
    nL = n(495557);
function nq(e) {
    let { activity: t, id: n } = e,
        { text: l, revealing: r } = nf(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [l]),
        (0, a.jsx)("div", {
            id: n,
            role: "tooltip",
            className: nL.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(eb.Ch, {
                ref: o,
                className: nL.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: s()(tf.PT, nL.bb),
                    "data-vibegrations-revealing": r ? "true" : void 0,
                    children: eN.A.parse(l, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var nF = n(921461);
function nD(e) {
    let { activity: t, compacting: n = !1, restoring: l = !1, controlling: r = !1 } = e,
        o = i.useRef(null),
        u = i.useId(),
        [d, c] = i.useState(null),
        m = null != t && "end" !== t.phase,
        h = r
            ? R.default.ivvYHP
            : l
              ? R.default.aFffp2
              : n
                ? R.default["0vH/5G"]
                : m
                  ? R.default.Ly7F7x
                  : R.default.QDGuNS,
        f = null != t && "" !== t.text,
        g = t?.session ?? null,
        p = f && null != g && d === g,
        x = i.useCallback(() => {
            f && null != g && c((e) => (e === g ? null : g));
        }, [f, g]),
        j = i.useCallback(() => c(null), []);
    return (0, a.jsx)(tj.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: p,
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(nq, { id: u, activity: t }),
        children: () =>
            (0, a.jsxs)(eS.D, {
                innerRef: o,
                className: s()(nF.hF, f && nF.Xd),
                "aria-label": P.intl.string(l ? R.default.pGFXZ0 : R.default.SzdX35),
                "aria-expanded": p,
                "aria-describedby": p ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: x,
                children: [
                    (0, a.jsx)("span", {
                        className: nF.bl,
                        children: (0, a.jsx)(nP.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!r || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: P.intl.string(h),
                    }),
                ],
            }),
    });
}
var n_ = n(885574),
    nz = n(280894);
function nO(e) {
    return e.toLocaleString();
}
function nG(e) {
    let { label: t, usage: n } = e;
    return (0, a.jsxs)("div", {
        className: nz.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: nz.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [nO((0, tT.aM)(n)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    nO(n.input_tokens),
                    " in \xb7 ",
                    nO(n.output_tokens),
                    " out \xb7 ",
                    nO(n.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    nO(n.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function nU(e) {
    let { project: t } = e,
        n = (0, tT.wU)(t.compaction),
        l = (0, tT.wV)((0, tT.wV)(t.orchestrator, t.codegen), n);
    return (0, a.jsxs)("div", {
        className: nz.si,
        role: "dialog",
        "aria-label": P.intl.string(R.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: nz.Q$,
                children: (0, a.jsxs)("div", {
                    className: nz.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [nO((0, tT.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(nG, { label: P.intl.string(R.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(nG, { label: P.intl.string(R.default.R9aduM), usage: t.codegen }),
            (0, a.jsx)(nG, { label: P.intl.string(R.default.Tj6b30), usage: n }),
            (0, a.jsxs)("div", {
                className: nz.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(R.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tT.sj)(l) ? "\u2014" : `${Math.round(100 * (0, tT.CA)(l))}%`,
                    }),
                ],
            }),
        ],
    });
}
function n$(e) {
    let { project: t } = e,
        n = i.useRef(null);
    return (0, a.jsx)(tj.Y, {
        targetElementRef: n,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(nU, { project: t }),
        children: (e) =>
            (0, a.jsx)(eS.D, {
                innerRef: n,
                className: nz.Y$,
                "aria-label": P.intl.string(R.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(n_.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var nB = n(985451),
    nH = n(258216);
function nW(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(R.default.W7oyuf);
        case "failed":
            return P.intl.string(R.default.eE60xI);
        case "closed":
            return P.intl.string(R.default["yBmS+I"]);
    }
}
function nV(e) {
    let {
            projectId: t,
            thinking: n,
            restoring: l = !1,
            thinkingActivity: i,
            compacting: r,
            projectUsage: s,
            connState: o,
        } = e,
        u = (0, nB.o4)(t);
    return (0, a.jsxs)("div", {
        className: nH.jf,
        children: [
            (0, a.jsx)("div", {
                className: nH.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    n || l || u ? (0, a.jsx)(nD, { activity: i, compacting: r, restoring: l, controlling: u }) : null,
            }),
            (0, a.jsx)(nR, { projectId: t }),
            null == s
                ? null
                : (0, a.jsxs)("span", {
                      className: nH.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(R.default["7SZZvj"], {
                                  runes: (0, tT.a7)(s.cost_usd),
                                  turns: s.turns,
                              }),
                              children: P.intl.formatToPlainString(R.default["4PFO2p"], {
                                  runes: (0, tT.a7)(s.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(n$, { project: s }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(R.default.eDDdhB, { status: nW(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: nH.XF,
                      children: nW(o),
                  }),
        ],
    });
}
var nQ = n(22231),
    nY = n(408278),
    nX = n(900797),
    nK = n(847374),
    nJ = n(477155),
    nZ = n(935286),
    n0 = n(856795),
    n1 = n(424110);
function n2(e) {
    let { option: t, position: n, disabled: l, onPick: r, reachable: o = !0 } = e,
        u = i.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eS.D, {
        className: s()(n1.uK, { [n1.ue]: l }),
        onClick: l ? void 0 : () => r(t),
        "aria-label": P.intl.formatToPlainString(d ? R.default.aL1BKQ : R.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": l,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: n1.Gy, "aria-hidden": !0, children: n }),
            (0, a.jsxs)("span", {
                className: n1.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: n1.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: n1.ed,
                            children: t.label,
                        }),
                    }),
                    c
                        ? (0, a.jsx)(v.E, {
                              tag: "span",
                              id: u,
                              variant: "text-xs/normal",
                              color: "text-muted",
                              children: t.detail,
                          })
                        : null,
                ],
            }),
            d
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/semibold",
                      color: "text-muted",
                      className: n1.rM,
                      children: P.intl.string(R.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function n7(e) {
    let { question: t, draft: n, direction: l, disabled: i } = e,
        r = "" === n.trim() ? null : n;
    return (0, a.jsxs)("div", {
        className: s()(n1.Ge, n1.x1),
        "data-direction": l,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, a.jsx)(n2, { option: e, position: t + 1, disabled: i, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, a.jsxs)("div", {
                className: n1.Xy,
                children: [
                    (0, a.jsx)("span", {
                        className: n1.Gy,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(nQ.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == r ? null : (0, a.jsx)("span", { className: s()(n1.Pu, n1.es), children: r }),
                ],
            }),
        ],
    });
}
function n6(e) {
    let { clarification: t, onSubmit: n, onDismiss: l } = e,
        [r, u] = i.useState({}),
        [d, c] = i.useState({}),
        [m, h] = i.useState(0),
        [f, g] = i.useState(null),
        [p, x] = i.useState(null),
        [j, b] = i.useState(null),
        [y, A] = i.useState(!1),
        k = i.useRef(null),
        [w, N] = i.useState(null),
        C = i.useRef(null),
        S = i.useRef(0),
        I = null == n,
        E = t.questions.length,
        M = Math.min(m, E - 1),
        T = t.questions[M],
        [L, q] = i.useState({ id: T.id, expanded: !1 }),
        F = L.id === T.id && L.expanded,
        [D, _] = i.useState(null),
        z = d[T.id] ?? "",
        { text: O, phase: G } = (0, n0.Q)(T.question),
        U = O === T.question,
        $ = U && D?.id === T.id && D.truncated;
    i.useLayoutEffect(() => {
        if (null == w || F || !U) return;
        function e() {
            if (null == w) return;
            let e = w.scrollHeight > w.clientHeight + 1;
            _((t) => (t?.id === T.id && t.truncated === e ? t : { id: T.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return t.observe(w), () => t.disconnect();
    }, [U, w, T.id, F]);
    let B = P.intl.string(F ? P.t.iTcuma : P.t.dcl9MQ),
        H = i.useCallback(
            (e) => {
                if (null == n) return;
                let l = t.questions
                    .map((t, n) => ({ question: t, index: n, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: n, answer: l } = e;
                        return `${n + 1}. ${t.question} \u{2192} ${l.text.trim()}`;
                    })
                    .join("\n");
                "" !== l && n(l);
            },
            [t, n],
        ),
        W = i.useCallback(
            (e, t) => {
                S.current += 1;
                let n = S.current;
                g({ direction: t, moves: n }), x({ question: T, draft: z, direction: t, moves: n }), A(!0), h(e);
            },
            [z, T],
        ),
        V = i.useCallback(() => {
            let e = k.current,
                t = C.current;
            null != e && null != t && b({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = k.current,
            t = C.current;
        if (null == e || null == t) return;
        V();
        let n = new ResizeObserver(V);
        return n.observe(e), n.observe(t), () => n.disconnect();
    }, [V]);
    let Q = f?.moves;
    i.useEffect(() => {
        if (null == Q) return;
        let e = setTimeout(() => x(null), 400),
            t = setTimeout(() => A(!1), 500);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [Q]);
    let Y = i.useCallback(
            (e) => {
                if (I) return;
                let n = { ...r, [T.id]: e };
                u(n);
                let l = (function (e, t, n) {
                    let { questions: l } = e;
                    for (let e = 1; e <= l.length; e++) {
                        let a = (n + e) % l.length,
                            i = t[l[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, n, M);
                null == l ? H(n) : W(l, l < M ? "back" : "forward");
            },
            [r, t, I, M, T.id, H, W],
        ),
        X = i.useCallback(() => {
            if (I || 0 === M) return;
            let e = t.questions[M - 1];
            u((t) => {
                let n = { ...t };
                return delete n[e.id], n;
            }),
                c((t) => {
                    let n = { ...t };
                    return delete n[e.id], n;
                }),
                W(M - 1, "back");
        }, [t, I, M, W]),
        K = M > 0 && !I,
        J = i.useCallback(() => {
            let e = z.trim();
            "" !== e && Y({ kind: "custom", text: e });
        }, [z, Y]),
        [Z, ee] = i.useState(!1),
        [et, en] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let el = i.useCallback(() => {
            null != l && (en(!0), setTimeout(l, 150));
        }, [l]),
        ea = i.useCallback(() => {
            I || M >= E - 1 || W(M + 1, "forward");
        }, [I, M, E, W]),
        ei = M < E - 1 && !I;
    return (0, a.jsxs)("section", {
        className: s()(n1.$O, { [n1.fI]: Z && !et, [n1.Oh]: et }),
        role: "dialog",
        "aria-label": T.question,
        "data-vibegrations-clarification": t.id,
        "data-state": I ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": M,
        children: [
            (0, a.jsxs)("div", {
                className: n1.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: k,
                        className: n1.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: N,
                                tag: "span",
                                id: `${T.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: s()(n1.TK, n1.R_, { [n1.TB]: "exit" === G, [n1.JU]: "enter" === G }),
                                children: O,
                            }),
                            $ || F
                                ? (0, a.jsx)("div", {
                                      className: n1.Q7,
                                      children: (0, a.jsx)(tC.m, {
                                          text: B,
                                          children: (0, a.jsx)(nY.K, {
                                              icon: F ? nX.t : nK.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => q({ id: T.id, expanded: !F }),
                                              "aria-label": B,
                                              "aria-controls": `${T.id}-label`,
                                              "aria-expanded": F,
                                          }),
                                      }),
                                  })
                                : null,
                            null == l
                                ? null
                                : (0, a.jsx)(eS.D, {
                                      className: s()(n1.gb, n1.Q7),
                                      onClick: el,
                                      "aria-label": P.intl.string(R.default.fMdUNR),
                                      "data-vibegrations-clarification-close": !0,
                                      children: (0, a.jsx)(o.P, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: n1.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, a.jsxs)("div", {
                            className: n1.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: C,
                                    className: n1.Ge,
                                    role: "group",
                                    "aria-labelledby": `${T.id}-label`,
                                    "data-direction": f?.direction,
                                    "data-parity": null == f ? void 0 : f.moves % 2,
                                    children: [
                                        T.options.map((e, t) =>
                                            (0, a.jsx)(
                                                n2,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: I,
                                                    onPick: (e) => Y({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, a.jsxs)("div", {
                                            className: n1.Xy,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: n1.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, a.jsx)(nQ.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, a.jsx)(tN.y, {
                                                    value: z,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [T.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), J());
                                                    },
                                                    placeholder: P.intl.string(R.default.qifsdL),
                                                    "aria-label": P.intl.formatToPlainString(R.default.XHESTL, {
                                                        question: T.question,
                                                    }),
                                                    disabled: I,
                                                    rows: 1,
                                                    className: n1.Pu,
                                                    "data-vibegrations-clarification-other": T.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == p
                                    ? null
                                    : (0, a.jsx)(
                                          n7,
                                          { question: p.question, draft: p.draft, direction: p.direction, disabled: I },
                                          p.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            E > 1
                ? (0, a.jsxs)("div", {
                      className: n1.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(R.default["7bypa+"], { index: M + 1, total: E }),
                          }),
                          (0, a.jsxs)("div", {
                              className: n1.Np,
                              children: [
                                  (0, a.jsx)(eS.D, {
                                      className: s()(n1.gb, { [n1.yI]: !K }),
                                      onClick: K ? X : void 0,
                                      tabIndex: K ? 0 : -1,
                                      "aria-hidden": !K,
                                      "aria-disabled": I,
                                      "aria-label": P.intl.string(R.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": K ? void 0 : "true",
                                      children: (0, a.jsx)(nJ.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eS.D, {
                                      className: s()(n1.gb, { [n1.yI]: !ei }),
                                      onClick: ei ? ea : void 0,
                                      tabIndex: ei ? 0 : -1,
                                      "aria-hidden": !ei,
                                      "aria-disabled": I,
                                      "aria-label": P.intl.string(R.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": ei ? void 0 : "true",
                                      children: (0, a.jsx)(nZ.E, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                              ],
                          }),
                      ],
                  })
                : null,
        ],
    });
}
var n3 = n(643278),
    n5 = n(191521),
    n8 = n(405189);
function n4(e) {
    let { line: t, placement: n, todos: l, provisionalTodo: r, agents: o, onJumpToActivity: u } = e,
        d = null != n,
        [c, m] = i.useState(n ?? "top"),
        [h, f] = i.useState(d),
        [g, p] = i.useState(!1),
        [x, v] = i.useState(!1),
        [j, b] = i.useState(d);
    j !== d && (b(d), null != n ? (m(n), f(!0)) : (p(!1), v(!1))),
        i.useEffect(() => {
            if (d || !h) return;
            let e = setTimeout(() => f(!1), 150);
            return () => clearTimeout(e);
        }, [d, h]),
        i.useEffect(() => {
            if (!h || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => p(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [h, d]);
    let [y, A] = i.useState(!1),
        [k, w] = i.useState(!1),
        [N, C] = i.useState(x);
    N !== x && (C(x), x ? A(!0) : w(!1)),
        i.useEffect(() => {
            if (x || !y) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [x, y]),
        i.useEffect(() => {
            if (!y || !x) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => w(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, x]);
    let S = null != l && l.length > 0,
        I = i.useCallback(() => v((e) => !e), []);
    return h
        ? (0, a.jsxs)("div", {
              className: n8.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: s()(n8.vK, { [n8.ho]: g && d, [n8.ET]: !d }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: s()(n8.Rk, tl.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(eQ.A, {
                                        glyph: (0, a.jsx)(n5.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eS.D, {
                                    className: n8.pZ,
                                    onClick: u,
                                    "aria-label": P.intl.string(R.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: s()(n8.Rk, tl.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(eQ.A, {
                                            glyph: (0, a.jsx)(n5.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          S
                              ? (0, a.jsx)(tC.m, {
                                    text: P.intl.string(R.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eS.D, {
                                        className: n8.BO,
                                        onClick: I,
                                        "aria-expanded": x,
                                        "aria-label": P.intl.string(R.default.qCRC6c),
                                        children: (0, a.jsx)(n3.ClipboardListIcon, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  }),
                  y && S
                      ? (0, a.jsx)("div", {
                            className: s()(n8.vB, { [n8.pg]: x && k, [n8.ui]: !x }),
                            children: (0, a.jsx)(tm, { todos: l, provisional: r, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var n9 = n(366010),
    le = n(825484),
    lt = n(859703),
    ln = n(738822),
    ll = n(291749),
    la = n(971276),
    li = n(590202),
    lr = n(710969),
    ls = n(792620),
    lo = n(201805),
    lu = n(617986),
    ld = n(363195),
    lc = n(749414);
let lm = !1;
function lh(e) {
    let t,
        n,
        l,
        { open: r } = e,
        s =
            ((t = (0, lo.dN)()),
            (n = (0, k.bG)([lt.A], () => lt.A.isQuestAccessSuspended || null != lt.A.questEnrollmentBlockedUntil, [])),
            (l = (0, k.bG)([lt.A], () => null != lt.A.getQuestPreviewOverride(ln.uF.QUEST_BAR_V2), [])),
            null != t && (0, ls.vv)(t)
                ? l
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, la.s)() || n || (0, lr.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = i.useState(() => lm),
        { mounted: d, closing: c } = (function (e) {
            let [t, n] = i.useState(e),
                [l, a] = i.useState(!1),
                r = i.useRef(null);
            return (
                e && (!t || l) ? (n(!0), a(!1)) : e || !t || l || a(!0),
                i.useEffect(() => {
                    if (!e && t)
                        return (
                            (r.current = setTimeout(() => {
                                (r.current = null), a(!1), n(!1);
                            }, 150)),
                            () => {
                                null != r.current && (clearTimeout(r.current), (r.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: l }
            );
        })(r && !o && null != s),
        [m, h] = i.useState(s);
    null != s && s !== m && h(s);
    let g = s ?? m,
        p = (0, k.bG)([ld.A], () => ld.A.getState().theme),
        x = (0, n9.M)(p) ? I.NJ8.DARK : I.NJ8.LIGHT,
        j = null != g ? (0, ll.tW)(g, ll.fY.GAME_TILE, x).url : null,
        b = null != j && "" !== j ? j : null,
        y = i.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: ln.uF.QUEST_BAR_V2,
                sourceQuestContent: ln.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: li.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, lu.d5)({ quest: s, ...e })
                : await (0, lu.e0)(s, { ...e, questContentCTA: li.Cy.ACCEPT_QUEST });
        }, [s]),
        A = i.useCallback(() => {
            (lm = !0), u(!0);
        }, []);
    return d && null != g
        ? (0, a.jsxs)("aside", {
              className: lc.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, a.jsxs)("div", {
                            className: lc.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: lc.Rx, src: b, alt: "" }),
                                (0, a.jsx)("div", { className: lc._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: lc.iB,
                      children: [
                          null != b ? (0, a.jsx)("img", { className: lc.w1, src: b, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: lc.Ug,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: P.intl.string(R.default["09LJ+I"]),
                                  }),
                                  (0, a.jsx)(v.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      lineClamp: 1,
                                      children: P.intl.format(P.t.EQa7os, { questName: g.config.messages.questName }),
                                  }),
                              ],
                          }),
                      ],
                  }),
                  (0, a.jsxs)(le.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: A,
                              text: P.intl.string(R.default.egO5fO),
                          }),
                          (0, a.jsx)(f.$, {
                              variant: "primary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: y,
                              text: P.intl.string(P.t.kUQLMJ),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
var lf = n(651649),
    lg = n(670455);
let lp = "shownVibegrationsFeedbackProjectIds";
var lx = n(348800);
let lv = [P.intl.string(R.default["E+Q26x"]), P.intl.string(R.default["06/jqP"]), P.intl.string(R.default["3gSfUa"])];
function lj(e) {
    let { projectId: t, restoreState: l } = e,
        r = (0, k.bG)([eA.Ay], () => eA.Ay.getMessages(t), [t]),
        s = (0, k.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, k.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, k.bG)([eA.Ay], () => eA.Ay.getProjectUsage(t), [t]),
        d = (0, k.bG)([eA.Ay], () => eA.Ay.getThinkingActivity(t), [t]),
        c = (0, k.bG)([eA.Ay], () => eA.Ay.isCompacting(t), [t]),
        h = (0, k.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        f = i.useRef(null),
        g = i.useRef(null),
        p = i.useRef(null),
        x = i.useRef(!0),
        [v, j] = i.useState(!0);
    i.useEffect(() => {
        x.current && g.current?.scrollToBottom();
    }, [r]);
    let b = i.useCallback(() => {
            let e = f.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                n = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                l = t ?? n[n.length - 1];
            if (null == l) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            l.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        y = i.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            x.current = t < 32;
            let n = t > 1;
            j((e) => (!n === e ? e : !n));
        }, []);
    i.useLayoutEffect(() => {
        let e = f.current,
            t = p.current;
        if (null == e) return;
        let n = g.current?.getScrollerNode(),
            l = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            i = n?.getBoundingClientRect().height,
            r = null;
        function s() {
            x.current &&
                (null != r && cancelAnimationFrame(r), (r = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let r of t)
                if (r.target === e) {
                    let e = r.contentRect.width;
                    if (e === l) continue;
                    (l = e), s();
                } else if (r.target === n) {
                    let e = r.contentRect.height;
                    if (e === i) continue;
                    (i = e), s();
                } else {
                    let e = r.contentRect.height;
                    if (e === a) continue;
                    (a = e), s();
                }
        });
        return (
            o.observe(e),
            null != n && o.observe(n),
            null != t && o.observe(t),
            () => {
                o.disconnect(), null != r && cancelAnimationFrame(r);
            }
        );
    }, []),
        i.useEffect(() => {
            (0, m.Hc)(t);
        }, [t]),
        i.useEffect(
            () => () =>
                (function (e) {
                    let t = eA.Ay.getMessages(e).filter(
                        (e) => "assistant" === e.role && "side_reply" !== e.kind && (0, eA.BL)(e),
                    ).length;
                    !(t < 3) &&
                        ((tL.w.get(lp) ?? []).includes(e) ||
                            lf.A.possiblyShowFeedbackModal(lg.MW.VIBEGRATIONS, () => {
                                let l;
                                (l = tL.w.get(lp) ?? []).includes(e) || tL.w.set(lp, [...l, e]),
                                    (0, eU.openModalLazy)(async () => {
                                        let { default: l } = await Promise.all([
                                            n.e("312513"),
                                            n.e("104143"),
                                            n.e("155925"),
                                            n.e("218413"),
                                            n.e("137381"),
                                            n.e("847004"),
                                            n.e("341676"),
                                        ]).then(n.bind(n, 580711));
                                        return (n) => (0, a.jsx)(l, { ...n, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let A = i.useCallback(
            (e, n) => {
                (0, m.dv)(t, e, n);
            },
            [t],
        ),
        w = i.useCallback(() => (0, m.fu)(t), [t]),
        N = i.useCallback((e) => A(e.implementation_prompt), [A]),
        C = i.useCallback((e) => A(e), [A]),
        S = i.useCallback((e) => (0, m.XZ)(t, e), [t]),
        I = i.useCallback((e) => (0, m.vX)(t, e), [t]),
        E = i.useCallback((e) => (0, m.Vm)(t, e), [t]),
        M = i.useCallback(() => A(P.intl.string(R.default.Jj8Ftb)), [A]),
        T = l?.status === "restoring",
        L = "open" === s && !o && !T,
        q = r[r.length - 1],
        F = null != q && "assistant" === q.role && null != q.proposal,
        [D, _] = i.useState(null),
        z = q?.clarification != null && q.clarification.id !== D ? q.clarification : null,
        O = i.useCallback(() => {
            null != z && _(z.id);
        }, [z]),
        G = (0, k.bG)([eA.Ay], () => eA.Ay.hasLoadedHistory(t), [t]),
        U = i.useMemo(() => {
            let e = 0;
            for (let n = 0; n < t.length; n++) e = (31 * e + t.charCodeAt(n)) % 0x7fffffff;
            return lv[e % lv.length];
        }, [t]),
        $ = F
            ? P.intl.string(R.default.Jj8Ftb)
            : q?.kind === "plan_implemented"
              ? P.intl.string(R.default["3sTTBu"])
              : G && 0 === r.length
                ? U
                : null,
        B = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, eA.BL)(t)) return t;
            }
        }, [r]),
        H = null != B,
        W = F && L ? M : void 0,
        [V, Q] = i.useState(null),
        [Y, X] = i.useState(H);
    Y !== H && (X(H), H || Q(null)),
        i.useEffect(() => {
            if (!H) return;
            let e = g.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let n = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Q(null)
                        : Q(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return n.observe(t), () => n.disconnect();
        }, [H, B?.steps]);
    let K = i.useMemo(() => (null != B ? (0, ek.b9)(B.steps) : ""), [B]),
        J = i.useMemo(() => (null != B ? ((0, ey.lt)(B.steps) ?? B.todos) : void 0), [B]),
        Z = B?.provisionalTodo,
        ee = i.useMemo(() => {
            var e;
            return null != B ? ((e = B.steps), tg((0, ey.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [B]);
    return (0, a.jsxs)("section", {
        ref: f,
        "data-vibegrations-chat": !0,
        className: lx.TE,
        children: [
            (0, a.jsx)(lh, { open: null != B }),
            (0, a.jsx)(n4, {
                onJumpToActivity: b,
                line: K,
                placement: H && "top" === V ? "top" : null,
                todos: J,
                provisionalTodo: Z,
                agents: ee,
            }),
            (0, a.jsxs)("div", {
                className: lx.JX,
                children: [
                    (0, a.jsx)(eb.Ch, {
                        ref: g,
                        onScroll: y,
                        className: v ? lx.N$ : `${lx.N$} ${lx.hB}`,
                        children: (0, a.jsx)(nI, { ref: p, projectId: t, messages: r, onPickIdea: L ? N : void 0 }),
                    }),
                    (0, a.jsx)("div", {
                        className: lx.NJ,
                        children: (0, a.jsx)(nV, {
                            projectId: t,
                            thinking: H,
                            restoring: T,
                            thinkingActivity: d,
                            compacting: c,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == z
                        ? null
                        : (0, a.jsx)("div", {
                              className: lx.B5,
                              children: (0, a.jsx)(
                                  n6,
                                  { clarification: z, onSubmit: L ? C : void 0, onDismiss: O },
                                  z.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: lx.Jx,
                children: [
                    (0, a.jsx)(n4, {
                        onJumpToActivity: b,
                        line: K,
                        placement: H && "bottom" === V ? "bottom" : null,
                        todos: J,
                        provisionalTodo: Z,
                        agents: ee,
                    }),
                    (0, a.jsx)(tQ, {
                        projectId: t,
                        canSend: L,
                        stopped: o,
                        running: H,
                        restoring: T,
                        onSend: A,
                        onInterrupt: L ? w : void 0,
                        onUploadFile: I,
                        onDeleteFile: E,
                        onApprove: W,
                        suggestion: $,
                        questionOpen: null != z,
                        modelSettings: h,
                        onModelSettingsChange: S,
                    }),
                ],
            }),
        ],
    });
}
var lb = n(661531),
    ly = n(602853),
    lA = n(517461),
    lk = n(761929),
    lw = n(927506);
function lN(e) {
    let { open: t, maxWidth: n, onWidthChange: l, children: r } = e,
        s = (0, ly.r)(lb.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, lA.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        h = (0, tR.clamp)(c, 360, n);
    i.useLayoutEffect(() => {
        l(t ? h + s : 0);
    }, [h, t, s, l]);
    let f = (0, lk.A)({
            minDimension: 360,
            maxDimension: n,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: lk.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), f(e));
            },
            [f],
        );
    return (0, a.jsxs)("div", {
        className: lw.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: lw.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: lw.kL, style: { width: h }, children: r }),
        ],
    });
}
var lC = n(11055),
    lS = n(333007),
    lI = n(342667);
function lE(e) {
    let { projectId: t, resolveIframe: n } = e,
        l = (0, nB.o4)(t),
        r = (0, eU.useHasAnyModalOpen)(),
        [s, o] = i.useState(null);
    i.useEffect(() => {
        if (!l) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(n());
            o((t) =>
                (
                    null == t || null == e
                        ? t === e
                        : t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
                )
                    ? t
                    : e,
            );
        }
        e();
        let t = window.setInterval(e, 250);
        return (
            window.addEventListener("resize", e),
            () => {
                window.clearInterval(t), window.removeEventListener("resize", e);
            }
        );
    }, [l, n]);
    let u = l && null != s && !r;
    return (0, lS.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: lI.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: l ? P.intl.string(R.default.dIE9zO) : "",
                }),
                u
                    ? (0, a.jsx)("div", {
                          className: lI.o,
                          style: { left: s.left, top: s.top, width: s.width, height: s.height },
                          "data-testid": "vibegrations-control-block",
                          "aria-hidden": !0,
                      })
                    : null,
            ],
        }),
        document.body,
    );
}
var lM = n(314116),
    lT = n(364522),
    lR = n(406810),
    lP = n(381849),
    lL = n(977628);
function lq(e) {
    let t,
        { projectId: n, onClose: l, onRestore: r } = e,
        [s, u] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, m.ST)(n)
                    .then((t) => {
                        e || u({ status: "loaded", entries: t });
                    })
                    .catch(() => {
                        e || u({ status: "failed" });
                    }),
                () => {
                    e = !0;
                }
            );
        }, [n]),
        (t =
            "loading" === s.status
                ? (0, a.jsx)("div", { className: lL.E8, children: (0, a.jsx)(h.y, {}) })
                : "failed" === s.status
                  ? (0, a.jsx)("div", {
                        className: lL.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(R.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, a.jsx)("div", {
                          className: lL.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(R.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(lT.Ip, {
                          className: lL.p_,
                          children: (0, a.jsx)("div", {
                              className: lL.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      n = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, lP.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: lP._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: lL.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, lM.A)({
                                                  title: P.intl.string(R.default.qOUOPE),
                                                  subtitle: P.intl.string(R.default.k2JBj5),
                                                  confirmText: P.intl.string(R.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      l(), r(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: lL.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != n.relative &&
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: n.absolute ?? void 0,
                                                      children: n.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, a.jsxs)("section", {
            className: lL.nd,
            "aria-label": P.intl.string(R.default.jAWwzi),
            children: [
                (0, a.jsxs)(d.Ay, {
                    "aria-label": P.intl.string(R.default.jAWwzi),
                    toolbar: (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    children: [
                        (0, a.jsx)(d.Ay.ChannelIcon, { icon: lR.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(d.Ay.Title, { children: P.intl.string(R.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: lL.rf, children: t }),
            ],
        })
    );
}
var lF = n(120426),
    lD = n(873727),
    l_ = n(147248),
    lz = n(418842),
    lO = n(885386),
    lG = n(940107),
    lU = n(171936),
    l$ = n(796036);
function lB(e) {
    let { projectId: t, applicationId: n, surface: l, header: r, mainClassName: o, content: d, sidebar: c } = e,
        [m, h] = i.useState(null),
        f = (0, u.A)(n, l),
        g = f?.id ?? null;
    !(function (e, t) {
        let n = (0, k.bG)([ld.A], () => (0, lD.x4)(ld.A.theme)),
            l = (0, k.bG)([l_.A], () => l_.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, k.cf)([tM.Ay], () => ({
                reducedMotion: tM.Ay.useReducedMotion,
                fontScale: (0, lD.U0)(),
                highContrast: tM.Ay.isHighContrastModeEnabled,
                forcedColors: tM.Ay.useForcedColors,
                underlineLinks: tM.Ay.alwaysShowLinkDecorations,
            })),
            d = lO.hH.useSetting(),
            c = (0, lz.C)(),
            m = i.useRef(!1),
            h = i.useRef(!1),
            f = i.useRef(0),
            g = i.useRef(null),
            p = i.useCallback(() => {
                let l = (0, lF.F)(e, t);
                if (null == l) return;
                g.current = l;
                let i = {
                    revision: ++f.current,
                    baseTheme: n,
                    customTheme: (0, lD.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, lG.W)(l, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [n, o, r, t, s, d, e, a, c, u]),
            x = i.useRef(p);
        i.useLayoutEffect(() => {
            x.current = p;
        });
        let v = i.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    (m.current = !1), h.current || x.current();
                }));
        }, []);
        i.useEffect(
            () => (
                (h.current = !1),
                () => {
                    h.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [l, v]),
            i.useLayoutEffect(() => {
                p(), v();
            }, [v, p]),
            i.useLayoutEffect(() => {
                let n = (0, lF.F)(e, t);
                null != n && n !== g.current && v();
            }),
            i.useEffect(() => {
                function n(n) {
                    n.target === (0, lF.F)(e, t) && ((g.current = null), v());
                }
                return document.addEventListener("load", n, !0), () => document.removeEventListener("load", n, !0);
            }, [t, e, v]),
            i.useEffect(() => {
                let e = new MutationObserver(v);
                return (
                    e.observe(document.documentElement, { attributes: !0, attributeFilter: ["class", "style"] }),
                    e.observe(document.head, { childList: !0, subtree: !0, characterData: !0 }),
                    () => e.disconnect()
                );
            }, [v]);
    })(m, g),
        i.useEffect(() => {
            if (null != t) return (0, lU.mn)(t, () => (0, lF.F)(m, g));
        }, [t, m, g]);
    let p = i.useCallback(() => (0, lF.F)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: s()(ev.Mh, o),
                children: [r, (0, a.jsx)("div", { ref: h, className: ev.fm, children: d })],
            }),
            c,
            (0, a.jsx)(lE, { projectId: t ?? null, resolveIframe: p }),
        ],
    });
}
function lH(e) {
    let {
            projectId: t,
            applicationId: n,
            previewApplicationId: l,
            surface: r,
            header: u,
            chatOpen: h,
            onCloseChat: f,
            versionHistoryOpen: g = !1,
            onCloseVersionHistory: p,
            onRestoreVersion: x,
            restoreState: v,
            previewReady: j,
            previewGate: b,
            channelMessages: y,
            availability: A,
            activeMode: k,
            widgetApplicationId: w,
        } = e,
        N = i.useRef(null),
        [C, I] = i.useState(0);
    i.useLayoutEffect(() => {
        if (r.type === S.U4.MAIN) return (0, c.HV)(n), () => (0, c.HV)(null);
    }, [n, r.type]),
        i.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, l$.s)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = N.current;
            if (null == e) return;
            function t() {
                null != e && I(e.getBoundingClientRect().width);
            }
            t();
            let n = new ResizeObserver(t);
            return n.observe(e), () => n.disconnect();
        }, []),
        i.useEffect(() => () => (0, c.Zq)(0), []);
    let E = Math.max(360, C - 320),
        M = null != y ? y.open : h,
        T = h || r.type === S.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: N,
        className: ev.LB,
        children: (0, a.jsx)(lB, {
            projectId: t,
            applicationId: n,
            surface: r,
            header: u,
            mainClassName: null == u ? void 0 : s()(ev.ez, { [ev.zt]: M }),
            content: (0, a.jsx)(eh, {
                applicationId: n,
                previewApplicationId: l,
                surface: r,
                previewReady: j,
                previewGate: b,
                availability: A,
                activeMode: k,
                widgetApplicationId: w,
            }),
            sidebar:
                null != y
                    ? (0, a.jsx)(lN, {
                          open: y.open,
                          maxWidth: E,
                          onWidthChange: c.Zq,
                          children: y.open
                              ? (0, a.jsx)(ej, { channel: y.channel, guild: y.guild, onClose: y.onClose })
                              : null,
                      })
                    : null != t && T
                      ? (0, a.jsx)(lN, {
                            open: h,
                            maxWidth: E,
                            onWidthChange: c.Zq,
                            children: (0, a.jsx)("div", {
                                className: ev.cO,
                                children: g
                                    ? (0, a.jsx)(
                                          lq,
                                          { projectId: t, onClose: p ?? (() => {}), onRestore: x ?? (() => {}) },
                                          t,
                                      )
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(lC.A, { projectId: t }),
                                              (0, a.jsx)(d.Ay, {
                                                  "aria-label": P.intl.string(P.t["/VQax8"]),
                                                  toolbar:
                                                      null == f
                                                          ? null
                                                          : (0, a.jsx)(d.Ay.Icon, {
                                                                icon: o.P,
                                                                tooltip: P.intl.string(R.default.YdgE0j),
                                                                onClick: f,
                                                            }),
                                                  children: (0, a.jsx)(d.Ay.Title, {
                                                      children: P.intl.string(P.t["/VQax8"]),
                                                  }),
                                              }),
                                              (0, a.jsx)("div", {
                                                  className: ev.cb,
                                                  children: (0, a.jsx)(lj, { projectId: t, restoreState: v }, t),
                                              }),
                                          ],
                                      }),
                            }),
                        })
                      : null,
        }),
    });
}
