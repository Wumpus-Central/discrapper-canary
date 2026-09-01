l.d(t, { A: () => aR });
var n,
    a = l(477900),
    i = l(582128),
    r = l(503698),
    s = l.n(r),
    o = l(789645),
    u = l(672929),
    d = l(58736),
    c = l(948230),
    m = l(18739),
    f = l(289873),
    h = l(821609),
    g = l(627363),
    x = l(580954),
    p = l(297264),
    v = l(834730),
    j = l(625180),
    b = l(91242),
    y = l(812901),
    A = l(317608),
    k = l(17928),
    N = l(956518),
    w = l(869146),
    S = l(207371),
    C = l(165610),
    E = l(652215),
    I =
        (((n = {}).Loading = "loading"),
        (n.AwaitingLaunch = "awaiting-launch"),
        (n.Launched = "launched"),
        (n.RenderingElsewhere = "rendering-elsewhere"),
        (n.NoApplication = "no-application"),
        (n.DoesNotSupportSurface = "does-not-support-surface"),
        (n.Error = "error"),
        n),
    T = l(742023),
    M = l(697744),
    _ = l(295813),
    P = l(375708),
    R = l(296167);
function L(e) {
    let { className: t } = e,
        { Component: l, events: n, getDuration: r } = (0, M.c)();
    return (
        i.useEffect(() => {
            let e = null,
                t = 0;
            return (
                (e = requestAnimationFrame(function l() {
                    ((e = null), null != r()) ? n.onMouseEnter() : t++ < 120 && (e = requestAnimationFrame(l));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [n, r]),
        i.useEffect(() => {
            let e = setInterval(n.onMouseEnter, 3e4);
            return () => clearInterval(e);
        }, [n]),
        (0, a.jsxs)("div", {
            className: t,
            onMouseEnter: n.onMouseEnter,
            onMouseLeave: n.onMouseLeave,
            children: [
                (0, a.jsx)(l, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
                (0, a.jsx)(v.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    className: R.o,
                    children: P.intl.string(_.default.jTuX7C),
                }),
            ],
        })
    );
}
var F = l(328284);
function D(e) {
    let { title: t, body: l, wide: n = !1, children: i } = e;
    return (0, a.jsxs)("div", {
        className: s()(F.Bf, n && F.Qx),
        children: [
            (0, a.jsxs)("div", {
                className: F.Ux,
                children: [
                    (0, a.jsx)(p.D, { variant: "heading-md/semibold", color: "text-default", children: t }),
                    (0, a.jsx)(v.E, { variant: "text-md/medium", color: "text-subtle", children: l }),
                ],
            }),
            i,
        ],
    });
}
var q = l(963691);
function O(e) {
    let { applicationId: t, surface: l } = e,
        { frame: n, state: r } = (function (e) {
            let { applicationId: t, surface: l } = e,
                {
                    surface: n,
                    setFailed: a,
                    lifecycle: r,
                } = (function (e) {
                    let { applicationId: t, surface: l } = e,
                        n = i.useMemo(() => (0, C.VA)(t, l), [t, l]),
                        a = i.useMemo(() => l, [n]),
                        r = (0, k.bG)([b.A], () => b.A.getFrame(n), [n]),
                        s = (0, k.bG)(
                            [w.A, b.A],
                            () => w.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT) && b.A.getMainFrame()?.id === n,
                            [n],
                        ),
                        { data: o, isLoading: u } = (0, g.YY)(t),
                        d = (0, S.x)(o),
                        c = null != (0, N.Ay)(t),
                        [m, f] = i.useState(null),
                        h = m === n;
                    return {
                        surface: a,
                        setFailed: i.useCallback(() => f(n), [n]),
                        lifecycle: (0, C.x1)(r)
                            ? s
                                ? { state: "rendering-elsewhere" }
                                : { state: "launched", frame: r }
                            : h
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
                })({ applicationId: t, surface: l }),
                { state: s } = r;
            return (
                i.useEffect(() => {
                    "awaiting-launch" === s && e();
                    async function e() {
                        try {
                            await j.A.launchFrame({ applicationId: t, surface: n });
                        } catch {
                            a();
                        }
                    }
                }, [s, t, n, a]),
                r
            );
        })({ applicationId: t, surface: l }),
        s = (0, C.VA)(t, l);
    switch (
        (i.useEffect(
            () => (
                !(function (e) {
                    let t = b.A.getFrame(e);
                    if (null == t || w.A.getWindowOpen(E.MLl.ACTIVITY_POPOUT)) return;
                    let l = b.A.getMainFrame()?.id === e;
                    t.intent === C.sV.MAIN
                        ? (l || j.A.promoteFrame(e), j.A.resetFrameLayoutModes(e))
                        : l && j.A.clearMainFrameSlot();
                })(s),
                () => {
                    let e;
                    null != (e = b.A.getFrame(s)) &&
                        ((0, C.x1)(e) &&
                        e.data.prefersPictureInPictureOnNavigateAway &&
                        T.Ay.allowVibegrationsPictureInPictureOnNavigateAway
                            ? (e.intent === C.sV.INLINE && j.A.promoteFrame(s),
                              j.A.updateFrameLayoutMode({ frameId: s, layoutMode: C.y0.PIP }))
                            : e.intent === C.sV.MAIN && j.A.demoteMainFrame(s));
                }
            ),
            [s],
        ),
        r)
    ) {
        case I.Launched:
            return (0, a.jsx)(A.A, { frameId: n.id, level: y.A.WithinAppContent, className: q.Z7 });
        case I.RenderingElsewhere:
            return (0, a.jsx)("div", {
                className: q.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(_.default["4f6Vkr"]),
                    body: P.intl.string(_.default.LJ2q1H),
                }),
            });
        case I.NoApplication:
            return (0, a.jsx)(L, { className: q.qs });
        case I.DoesNotSupportSurface:
            return (0, a.jsx)("div", {
                className: q.qs,
                children: (0, a.jsx)(D, {
                    title: P.intl.string(_.default.FHOJiH),
                    body: P.intl.string(_.default["1yLQoV"]),
                }),
            });
        case I.Error:
            return (0, a.jsxs)("div", {
                className: q.qs,
                children: [
                    (0, a.jsx)(p.D, {
                        variant: "heading-md/semibold",
                        color: "text-default",
                        children: P.intl.string(_.default.MeLWCr),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-feedback-critical",
                        className: q.tj,
                        children: P.intl.string(_.default["1RCbQT"]),
                    }),
                ],
            });
        case I.AwaitingLaunch:
        case I.Loading:
            return (0, a.jsx)("div", { className: q.qs, children: (0, a.jsx)(f.y, {}) });
    }
}
var G = l(323384),
    $ = l(308528),
    z = l(334738),
    B = l(802426),
    U = l(355622),
    V = l(734057),
    H = l(531685),
    W = l(365971),
    Y = l(362417);
function Q(e) {
    let { message: t } = e;
    return (0, a.jsxs)("div", {
        className: Y.f,
        children: [
            (0, a.jsx)(G.k, { size: "custom", width: 32, height: 32, color: "var(--icon-muted)" }),
            (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        ],
    });
}
function K() {
    return (0, a.jsx)("div", { className: Y.f, children: (0, a.jsx)(f.y, {}) });
}
function X(e) {
    let t,
        l,
        { previewApplicationId: n } = e,
        { data: r, isLoading: s } = (0, g.YY)(n),
        o = r?.bot?.id ?? null,
        u = (0, k.bG)([V.A], () => {
            if (null == o) return null;
            let e = V.A.getDMFromUserId(o);
            return null != e ? V.A.getChannel(e) : null;
        });
    (t = u?.id ?? null),
        i.useEffect(() => {
            null != t && $.A.preload(E.ME, t);
        }, [t]),
        (l = (0, k.bG)([H.A], () => H.A.isFocused())),
        i.useEffect(() => {
            if (null == t || !l) return;
            let e = (0, W.Xg)();
            return (
                (0, z.yl)(t, e),
                () => {
                    (0, z.dm)(t, e);
                }
            );
        }, [t, l]);
    let [d, c] = i.useState(null),
        m = null != o && d === o;
    return (i.useEffect(() => {
        if (null == o || null != u) return;
        let e = !1;
        return (
            $.A.openPrivateChannel({ recipientIds: o, navigateToChannel: !1 }).catch(() => {
                e || c(o);
            }),
            () => {
                e = !0;
            }
        );
    }, [o, u]),
    s)
        ? (0, a.jsx)(K, {})
        : null == o || m
          ? (0, a.jsx)(Q, { message: P.intl.string(_.default.bl4eBc) })
          : null == u
            ? (0, a.jsx)(K, {})
            : (0, a.jsx)("div", {
                  className: Y.g,
                  children: (0, a.jsx)(B.A, { channel: u, guild: null, chatInputType: U.oU.SIDEBAR }, u.id),
              });
}
var J = l(148853),
    Z = l(598748),
    ee = l(486610),
    et = l(531913),
    el = l(587895),
    en = l(633075),
    ea = l(946356),
    ei = l(139730),
    er = l(520082),
    es = l(287809),
    eo = l(675210),
    eu = l(71495);
function ed(e) {
    let { applicationId: t } = e,
        l = (0, k.bG)([es.default], () => es.default.getCurrentUser());
    return null == l ? null : (0, a.jsx)(ec, { applicationId: t, user: l });
}
function ec(e) {
    let { applicationId: t, user: l } = e,
        n = (0, k.bG)([el.A], () => el.A.getApplication(t)),
        r = i.useMemo(() => new en.R({ applicationId: t }), [t]),
        s = (0, et.A)(l.id, t),
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
                                        user: l,
                                        widget: r,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      u.hasPopoutCard && null != n
                          ? (0, a.jsx)("div", {
                                className: eu.ql,
                                children: (0, a.jsx)(ei.A, { application: n, rendererProps: s, renderText: ee.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
var em = l(976102);
function ef(e) {
    let {
            applicationId: t,
            previewApplicationId: l,
            surface: n,
            previewReady: r,
            previewGate: s,
            availability: o,
            activeMode: d,
            widgetApplicationId: c,
        } = e,
        m = (0, u.A)(t, n),
        { isLoading: p } = (0, g.YY)(t ?? void 0);
    if (
        (i.useEffect(() => {
            s?.type === "permissions" && null != m && (0, x.A)().leaveFrame(m.id);
        }, [m, s?.type]),
        s?.type === "checking")
    )
        return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(f.y, {}) });
    if (s?.type === "permissions")
        return (0, a.jsx)("div", {
            className: em.q,
            children: (0, a.jsx)(D, {
                wide: !0,
                title: P.intl.string(_.default.DYwf2n),
                body: P.intl.string(_.default.WWj3pN),
                children: (0, a.jsx)(h.$, {
                    variant: "primary",
                    size: "md",
                    text: P.intl.string(_.default["CRfE/E"]),
                    onClick: s.onReviewPermissions,
                    loading: s.loading,
                }),
            }),
        });
    if (!r) return (0, a.jsx)(L, { className: em.q });
    if (null == t) return null;
    if (p) return (0, a.jsx)("div", { className: em.q, children: (0, a.jsx)(f.y, {}) });
    let v = o.showModeSwitch && null != d ? { role: "tabpanel", id: (0, J.z3)(d), "aria-label": (0, J.kZ)(d) } : {};
    return (0, a.jsxs)("div", {
        className: em.R,
        ...v,
        children: [
            ("frame" === d && o.modes.includes("frame")) || 0 === o.modes.length
                ? (0, a.jsx)(O, { applicationId: t, surface: n })
                : null,
            "widget" === d && null != c
                ? "unavailable-authorization-revoked" === o.profileState
                    ? (0, a.jsx)("div", {
                          className: em.q,
                          children: (0, a.jsx)(D, {
                              wide: !0,
                              title: P.intl.string(_.default.SGHO9K),
                              body: P.intl.string(_.default["pV/rS2"]),
                          }),
                      })
                    : (0, a.jsx)(ed, { applicationId: c })
                : null,
            "bot" === d && null != l ? (0, a.jsx)(X, { previewApplicationId: l }) : null,
        ],
    });
}
var eh = l(534890),
    eg = l(738876),
    ex = l(47167),
    ep = l(31717),
    ev = l(372054);
function ej(e) {
    let { channel: t, guild: l, onClose: n } = e,
        i = (0, ex.Ay)(t),
        r = (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n });
    return (0, a.jsxs)("div", {
        className: ev.Wx,
        children: [
            (0, a.jsx)(eg.A, { channel: t, draftType: ep.C.ChannelMessage }),
            (0, a.jsxs)(d.Ay, {
                toolbar: r,
                "aria-label": P.intl.string(P.t.BIYAqa),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: eh.ChatIcon, "aria-label": P.intl.string(P.t["/VQax8"]) }),
                    (0, a.jsx)(d.Ay.Title, { children: i }),
                ],
            }),
            (0, a.jsx)("div", {
                className: ev.GZ,
                children: (0, a.jsx)(B.A, { channel: t, guild: l, chatInputType: U.oU.SIDEBAR }, t.id),
            }),
        ],
    });
}
var eb = l(689175),
    ey = l(903586),
    eA = l(783791),
    ek = l(717447),
    eN = l(29080),
    ew = l(46054);
function eS(e) {
    let { steps: t, content: l, hasProposal: n, hasAttachments: a } = e,
        i = (0, ey.B4)(t),
        r = i.filter((e) => "message" === e.type).at(-1),
        s = (0, ey.Lf)(t),
        o = s && null != r && r.content.trim() === l.trim(),
        u = !n && "" !== l && !o;
    return {
        streamed: i,
        lastStreamedMessage: r,
        showsClosingMessage: u,
        attachmentsHost: (function (e) {
            let { hasAttachments: t, showsClosingMessage: l, endsOnStreamedMessage: n } = e;
            return t ? (l ? "closing" : n ? "streamed" : "standalone") : "none";
        })({ hasAttachments: a, showsClosingMessage: u, endsOnStreamedMessage: s }),
    };
}
l(134528), l(947204);
var eC = l(939249),
    eE = l(478016),
    eI = l(34136);
function eT(e) {
    let { title: t, trailing: l, children: n, className: i, headerClassName: r, ...o } = e;
    return (0, a.jsxs)("section", {
        className: s()(eI.Nr, i),
        ...o,
        children: [
            (0, a.jsxs)("header", {
                className: s()(eI.wx, null != l && eI.o5, r),
                children: [
                    (0, a.jsx)(v.E, { tag: "span", variant: "text-sm/medium", color: "text-subtle", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
var eM = l(113757);
function e_(e) {
    let { idea: t, selected: l, onPick: n } = e,
        r = i.useId(),
        o = null == n;
    return (0, a.jsxs)(eC.D, {
        className: s()(eM.nM, { [eM.f1]: o, [eM.CZ]: l }),
        onClick: o ? void 0 : () => n(t),
        "aria-label": P.intl.formatToPlainString(_.default.pztRGi, { title: t.title }),
        "aria-describedby": "" === t.value ? void 0 : r,
        "aria-disabled": o,
        "aria-pressed": l,
        children: [
            (0, a.jsxs)("div", {
                className: eM.jo,
                children: [
                    l
                        ? (0, a.jsx)(eE.U, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: "currentColor",
                              className: eM.zf,
                              "aria-hidden": !0,
                          })
                        : null,
                    (0, a.jsx)(v.E, {
                        tag: "div",
                        variant: "text-md/medium",
                        color: "none",
                        className: eM.G9,
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
    let { ideas: t, pickedIdeaIds: l, onPick: n } = e,
        [r, s] = i.useState(() => new Set()),
        o = i.useCallback(
            (e) => {
                s((t) => new Set(t).add(e.id)), n?.(e);
            },
            [n],
        );
    return (0, a.jsx)(eT, {
        title: P.intl.string(_.default.DAvYsi),
        "data-vibegrations-idea-cards": !0,
        children: t.map((e) =>
            (0, a.jsx)(
                e_,
                { idea: e, selected: r.has(e.id) || l?.has(e.id) === !0, onPick: null == n ? void 0 : o },
                e.id,
            ),
        ),
    });
}
var eR = l(435619),
    eL = l(866665),
    eF = l(885574),
    eD = l(430392),
    eq = l(632015),
    eO = l(256905),
    eG = l(824757);
function e$(e) {
    let { label: t, info: l, children: n } = e;
    return (0, a.jsxs)("section", {
        className: eG.uW,
        children: [
            (0, a.jsxs)("span", {
                className: eG.a9,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-xs/medium", color: "text-muted", tag: "span", children: t }),
                    l,
                ],
            }),
            n,
        ],
    });
}
function ez() {
    return (0, a.jsx)(eL.m, {
        text: P.intl.string(_.default.DXe2dP),
        children: (0, a.jsx)(eC.D, {
            className: eG.bk,
            "aria-label": P.intl.string(_.default.Y6y4nQ),
            children: (0, a.jsx)(eF.CircleInformationIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
        }),
    });
}
function eB(e) {
    let { label: t, names: l } = e;
    return 0 === l.length
        ? null
        : (0, a.jsx)(e$, {
              label: t,
              children: (0, a.jsx)("div", {
                  className: eG.Ip,
                  children: l.map((e) =>
                      (0, a.jsx)(
                          "span",
                          {
                              className: eG.jw,
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
function eU(e) {
    let { isActivity: t, hasWidget: l } = e,
        n = t ? G.k : eD.RobotIcon;
    return (0, a.jsxs)("span", {
        className: eG.K2,
        children: [
            l
                ? (0, a.jsxs)("span", {
                      className: eG.L6,
                      children: [
                          (0, a.jsx)(eq.f, {
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
                              children: P.intl.string(_.default.WE0MKN),
                          }),
                      ],
                  })
                : null,
            (0, a.jsxs)("span", {
                className: eG.L6,
                children: [
                    (0, a.jsx)(n, { size: "custom", width: 16, height: 16, color: "currentColor", "aria-hidden": !0 }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        tag: "span",
                        children: P.intl.string(t ? P.t.IC5Ann : _.default.oNtdYP),
                    }),
                ],
            }),
        ],
    });
}
function eV(e) {
    let { projectId: t, design: l } = e,
        [n, r] = i.useState(null),
        [s, o] = i.useState(!1),
        { id: u } = l,
        [d, c] = i.useState(0);
    i.useEffect(() => {
        let e = !1;
        return (
            (0, m.PK)(t, u).then(
                (t) => {
                    e || r(t);
                },
                () => {},
            ),
            () => {
                e = !0;
            }
        );
    }, [t, u, d]);
    let f = P.intl.string(_.default.FW8UcU),
        h = i.useCallback(() => {
            (0, m.PK)(t, u).then(
                (e) => {
                    (0, eO.R)({
                        items: [{ type: "IMAGE", url: e, alt: f }],
                        startingIndex: 0,
                        shouldHideMediaOptions: !0,
                        location: "VibegrationsChat",
                    });
                },
                () => {},
            );
        }, [t, u, f]),
        g = i.useCallback(() => {
            r(null),
                (0, m.n6)(t, u).then(
                    (e) => {
                        e ? 0 === d && c(1) : o(!0);
                    },
                    () => {},
                );
        }, [t, u, d]);
    return s
        ? null
        : (0, a.jsx)(e$, {
              label: P.intl.string(_.default["9W8SbY"]),
              info: (0, a.jsx)(ez, {}),
              children: (0, a.jsx)(eC.D, {
                  className: eG.xX,
                  onClick: h,
                  "aria-label": P.intl.string(_.default.CBrpNv),
                  children: null != n ? (0, a.jsx)("img", { src: n, alt: f, className: eG.sN, onError: g }) : null,
              }),
          });
}
function eH(e) {
    let { projectId: t, proposal: l } = e;
    return (0, a.jsx)(eT, {
        title: P.intl.string(_.default["60htw+"]),
        trailing: (0, a.jsx)(eU, { isActivity: !0 === l.is_activity, hasWidget: null != l.widget_config }),
        "data-vibegrations-plan-card": !0,
        children: (0, a.jsxs)("div", {
            className: eG.rf,
            children: [
                (0, a.jsx)(v.E, {
                    variant: "experimental/body-md/normal",
                    color: "text-default",
                    selectable: !0,
                    children: l.summary,
                }),
                null != l.design_image ? (0, a.jsx)(eV, { projectId: t, design: l.design_image }) : null,
                l.changes.length > 0
                    ? (0, a.jsx)(e$, {
                          label: P.intl.string(_.default.KLyB8Y),
                          children: (0, a.jsx)("ul", {
                              className: eG.p_,
                              children: l.changes.map((e, t) =>
                                  (0, a.jsx)(
                                      "li",
                                      {
                                          className: eG.Aw,
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
                l.commands.length > 0
                    ? (0, a.jsx)(e$, {
                          label: P.intl.string(P.t["0hKkS+"]),
                          children: (0, a.jsx)("ul", {
                              className: eG.p_,
                              children: l.commands.map((e, t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: eG.uX,
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
                (0, a.jsx)(eB, { label: P.intl.string(_.default.ieqTtP), names: l.bot_permissions ?? [] }),
                (0, a.jsx)(eB, { label: P.intl.string(_.default.Cn9qix), names: l.privileged_intents ?? [] }),
            ],
        }),
    });
}
var eW = l(192308),
    eY = l(479191);
function eQ(e) {
    let { projectId: t, request: n } = e,
        r = i.useCallback(() => {
            (0, eW.openModalLazy)(async () => {
                let { default: e } = await Promise.all([l.e("338013"), l.e("468421")]).then(l.bind(l, 539620));
                return (l) => (0, a.jsx)(e, { ...l, projectId: t, request: n });
            });
        }, [t, n]);
    return (0, a.jsxs)("article", {
        className: eY.Lo,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(_.default["/e28TK"]),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != n.note && "" !== n.note ? n.note : P.intl.string(_.default.jxvtin),
            }),
            (0, a.jsx)("div", {
                className: eY.cS,
                children: n.fields.map((e) =>
                    (0, a.jsx)(
                        "span",
                        {
                            className: eY.$H,
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
                className: eY.sq,
                children: (0, a.jsx)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: r,
                    text: P.intl.string(_.default["gVV+HX"]),
                }),
            }),
        ],
    });
}
var eK = l(976814),
    eX = l(973e3);
function eJ(e) {
    let { projectId: t, request: l } = e,
        n = (0, k.bG)([m.Ay], () => m.Ay.getSettings(t)),
        r = (l.keys ?? []).map((e) => n?.schema.find((t) => t.key === e)).filter((e) => null != e),
        s = i.useCallback(() => {
            (0, eK.A)(t, { scopeKeys: l.keys, note: l.note, notifyAgent: !0 });
        }, [t, l]);
    return (0, a.jsxs)("article", {
        className: eX.Mk,
        children: [
            (0, a.jsx)(v.E, {
                variant: "text-xs/semibold",
                color: "text-muted",
                tag: "span",
                children: P.intl.string(_.default.wgDhiQ),
            }),
            (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: null != l.note && "" !== l.note ? l.note : P.intl.string(_.default["V+DBhs"]),
            }),
            r.length > 0
                ? (0, a.jsx)("div", {
                      className: eX.R6,
                      children: r.map((e) =>
                          (0, a.jsx)(
                              "span",
                              {
                                  className: eX.K4,
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
                className: eX.p0,
                children: (0, a.jsx)(h.$, {
                    variant: "secondary",
                    size: "sm",
                    onClick: s,
                    text: P.intl.string(_.default["KO2xN+"]),
                }),
            }),
        ],
    });
}
var eZ = l(196582);
function e0(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/d7121362a1dd49cc2f76842ee18df47d43222f636c15b2cd79b35c1f2e776de0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e1(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/ae8c7a0e148f25de0104cf4a55b493ae5a152e6e40c2a6174829a36877151ae8.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e2(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/14e7ff4ad407e133db6190c31921bdd7c47e441f41404d7e68e6a28130a1e8c0.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e6(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/215fa0316ecd0d1ebbbf10050248c932937689960558778ed42d756a6ccd0b8c.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e7(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/4867ec3848dee907a806f42ab3a0752903d3fc66e4aecc4491899b4e5861b8dd.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e3(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/3ad22669a09ffc99b77dd722a68aed8df6e7473cf5c6b05d0e1f15e8cc33ba86.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e4(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/27382d4ca9222e82c5a8b7f707415bd4c07e753313ab7157ec812e87dbde5502.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e5(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/a438a5f70741490b2fdc183738cfb25fc87fb5827a73ec3fec0bb012f9e591af.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e8(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/15d54b40e136870c91ae5a6280cf704f9600c19a76d3a749855a5389d0579739.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function e9(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/b535161aa891ee311a1e313a512aa102fbff6d623c25bfcbd9d9239c743d9b74.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function te(e) {
    let { alt: t, ariaLabel: l, ariaHidden: n, role: i, size: r = 64 } = e;
    return (0, a.jsx)("img", {
        style: { width: r, height: r },
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        alt: t,
        "aria-label": l,
        "aria-hidden": n,
        role: i ?? "img",
    });
}
function tt() {
    return [
        { key: "snail", Illocon: e0, tint: "var(--illo-yellow-40)", name: tn(_.default["2l3AEQ"]) },
        { key: "goat", Illocon: e1, tint: "var(--illo-orange-40)", name: tn(_.default["+FPL+I"]) },
        { key: "frog", Illocon: e2, tint: "var(--illo-green-40)", name: tn(_.default.w4GOfR) },
        { key: "bunny", Illocon: e6, tint: "var(--illo-pink-40)", name: tn(_.default.XmZT9M) },
        { key: "cat", Illocon: e7, tint: "var(--illo-pink-40)", name: tn(_.default.NnydwQ) },
        { key: "caterpillar", Illocon: e3, tint: "var(--illo-green-40)", name: tn(_.default["4iXcNT"]) },
        { key: "butterfly", Illocon: e4, tint: "var(--illo-purple-40)", name: tn(_.default.DoTGt5) },
        { key: "dog", Illocon: e5, tint: "var(--illo-yellow-40)", name: tn(_.default["9zxqmP"]) },
        { key: "spider", Illocon: e8, tint: "var(--illo-orange-40)", name: tn(_.default.HF0T3L) },
        { key: "bee", Illocon: e9, tint: "var(--illo-yellow-40)", name: tn(_.default.XTzDga) },
        { key: "bot", Illocon: te, tint: "var(--illo-purple-40)", name: tn(_.default.abtC2b) },
    ];
}
function tl(e) {
    return tt().find((t) => t.key === e);
}
function tn(e) {
    return P.intl.string(e);
}
function ta(e) {
    let t = tt(),
        l = 0,
        n = e[0] ?? "";
    for (let e = 0; e < n.length; e++) l = (31 * l + n.charCodeAt(e)) % t.length;
    let a = new Map();
    return (
        e.forEach((e, n) => {
            a.set(e, t[(l + n) % t.length]);
        }),
        a
    );
}
var ti = l(683063),
    tr = l(705754),
    ts = l(883455),
    to = l(13699);
function tu(e) {
    return null != e.labelText && "" !== e.labelText ? e.labelText : P.intl.string(_.default.MdXWEK);
}
function td(e) {
    let { projectId: t, lane: l, Illocon: n, tint: i, name: r, connectsDown: s } = e,
        o = l.task,
        u = "running" === o.status,
        d = (0, ey.SY)(l.steps),
        c = u
            ? null != d
                ? (0, ey.WQ)(d)
                : tu(o)
            : (function (e) {
                  let t = (function (e) {
                      let [t, l] = [e.charAt(0), e.charAt(1)];
                      return t !== t.toLocaleUpperCase() || l !== l.toLocaleLowerCase()
                          ? e
                          : t.toLocaleLowerCase() + e.slice(1);
                  })(tu(e));
                  switch (e.status) {
                      case "failed":
                          return P.intl.formatToPlainString(_.default["5uv8y0"], { task: t });
                      case "cancelled":
                          return P.intl.formatToPlainString(_.default["oEzDO/"], { task: t });
                      case "done":
                          if (null != e.durationMs)
                              return P.intl.formatToPlainString(_.default.vuv9bT, {
                                  task: t,
                                  duration: (function (e) {
                                      let t = Math.max(1, Math.round(e / 1e3));
                                      if (t < 60) return P.intl.formatToPlainString(_.default.RsOwXc, { count: t });
                                      let l = Math.round(t / 60);
                                      return l < 60
                                          ? P.intl.formatToPlainString(_.default["z+U4YX"], { count: l })
                                          : P.intl.formatToPlainString(_.default["7Q/vz0"], {
                                                hours: Math.floor(l / 60),
                                                minutes: l % 60,
                                            });
                                  })(e.durationMs),
                              });
                          return P.intl.formatToPlainString(_.default.KS49RN, { task: t });
                      default:
                          return P.intl.formatToPlainString(_.default.KS49RN, { task: t });
                  }
              })(o),
        m = u ? d : void 0,
        f =
            o.detail.length > 0 ||
            l.steps.some((e) => {
                var t;
                return e !== m || (t = e).detail.length > 0 || t.screenshots.length > 0 || t.attachments.length > 0;
            })
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          l.steps.length > 0
                              ? (0, a.jsx)("ol", {
                                    className: to.dO,
                                    children: l.steps.map((e) =>
                                        (0, a.jsx)(
                                            ts.A,
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
                                      className: to.iq,
                                      children: (0, a.jsx)(tr.A, { text: e, variant: "text-sm/normal" }),
                                  },
                                  t,
                              ),
                          ),
                      ],
                  })
                : void 0;
    return (0, a.jsx)(eZ.A, {
        glyph: (0, a.jsx)(ti.u, {
            asset: (0, a.jsx)(n, { size: 32, alt: "", ariaHidden: !0 }),
            assetSize: 32,
            title: r,
            body: tu(o),
            position: "left",
            children: (0, a.jsx)("span", {
                className: to.nC,
                children: (0, a.jsx)(n, { size: 24, alt: "", ariaHidden: !0 }),
            }),
        }),
        line: c,
        live: u,
        settled: !u,
        tint: i,
        detail: f,
        connected: !0,
        connectsDown: s,
    });
}
l(321073);
var tc = l(140735),
    tm = l(329456);
let tf = [];
function th(e) {
    let { status: t } = e;
    return (0, a.jsx)("span", {
        className: tm.xL,
        "data-status": t,
        role: "img",
        "aria-label": (function (e) {
            switch (e) {
                case "completed":
                    return P.intl.string(_.default.TkPGOH);
                case "in_progress":
                    return P.intl.string(_.default["oK+fmd"]);
                default:
                    return P.intl.string(_.default.d7lieu);
            }
        })(t),
        children: (0, a.jsx)("svg", {
            className: tm.L5,
            viewBox: "0 0 10.1668 10.1668",
            "aria-hidden": !0,
            focusable: "false",
            children: (0, a.jsx)("path", { d: "M1 5.52L3.92 9.17L9.17 1" }),
        }),
    });
}
function tg(e) {
    let { agents: t, active: l } = e,
        n = i.useMemo(() => (l ? t : tf), [l, t]),
        r = i.useMemo(() => new Set(n.map((e) => e.key)), [n]),
        s = n.map((e) => e.key).join("\0"),
        [o, u] = i.useState(n),
        [d, c] = i.useState(s),
        [m, f] = i.useState(!1);
    d !== s && (c(s), u([...n, ...o.filter((e) => !r.has(e.key))]), 0 === n.length && f(!1));
    let h = o.some((e) => !r.has(e.key));
    if (
        (i.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => u(n), l ? 200 : 250);
            return () => clearTimeout(e);
        }, [h, n, l]),
        i.useEffect(() => {
            if (!l || 0 === o.length) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => f(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [l, o.length]),
        0 === o.length)
    )
        return null;
    let g = o.slice(0, 3),
        x = o.length - g.length;
    return (0, a.jsxs)("span", {
        className: tm.X6,
        "data-shown": l && m ? "true" : void 0,
        "aria-hidden": !0,
        children: [
            g.map((e) => {
                let { key: t, mark: l, name: n, task: i } = e,
                    { Illocon: s } = l;
                return (0, a.jsx)(
                    ti.u,
                    {
                        asset: (0, a.jsx)(s, { size: 32, alt: "", ariaHidden: !0 }),
                        assetSize: 32,
                        title: n,
                        body: i,
                        position: "top",
                        children: (0, a.jsx)("span", {
                            className: tm.MA,
                            "data-leaving": r.has(t) ? void 0 : "true",
                            children: (0, a.jsx)(s, { size: 16, alt: n, ariaHidden: !0 }),
                        }),
                    },
                    t,
                );
            }),
            x > 0
                ? (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: tm.qA,
                      children: `+${x}`,
                  })
                : null,
        ],
    });
}
function tx(e) {
    let t,
        { todos: l, provisional: n, agents: r } = e,
        s = (function (e) {
            let t = e.join("\0"),
                [l, n] = i.useState(() => new Set(e)),
                [a, r] = i.useState(t),
                [s, o] = i.useState(() => new Set());
            return (
                a !== t && (r(t), n(new Set(e)), o(0 === l.size ? new Set() : new Set(e.filter((e) => !l.has(e))))),
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
        })(i.useMemo(() => l.map((e) => e.id), [l])),
        o =
            ((t = (r ?? tf).map((e) => `${e.key}\0${e.todoId ?? ""}\0${e.name}\0${e.task}`).join("\x1f")),
            i.useMemo(() => {
                let e = new Map();
                for (let t of r ?? tf) {
                    if (null == t.todoId || "" === t.todoId) continue;
                    let l = e.get(t.todoId);
                    null != l ? l.push(t) : e.set(t.todoId, [t]);
                }
                return e;
            }, [t]));
    return (0, a.jsxs)("ul", {
        className: tm.p_,
        children: [
            l.map((e) =>
                (0, a.jsxs)(
                    "li",
                    {
                        className: tm.AS,
                        "data-status": e.status,
                        "data-arriving": s.has(e.id) ? "true" : void 0,
                        children: [
                            (0, a.jsx)(th, { status: e.status }),
                            (0, a.jsx)(v.E, {
                                variant: "experimental/body-sm/medium",
                                color: "completed" === e.status ? "text-muted" : "text-default",
                                tag: "span",
                                className: tm.iV,
                                selectable: !0,
                                children: (0, a.jsx)("span", { className: tm.Qq, children: e.text }),
                            }),
                            (0, a.jsx)(tg, { agents: o.get(e.id) ?? tf, active: "in_progress" === e.status }),
                        ],
                    },
                    e.id,
                ),
            ),
            null != n
                ? (0, a.jsxs)("li", {
                      className: tm.AS,
                      "data-status": "pending",
                      "data-provisional": !0,
                      children: [
                          (0, a.jsx)(th, { status: "pending" }),
                          (0, a.jsx)(v.E, {
                              variant: "experimental/body-sm/medium",
                              color: "text-muted",
                              tag: "span",
                              className: tm.iV,
                              selectable: !0,
                              children: (0, a.jsx)("span", { className: tm.Qq, children: n }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function tp(e) {
    let { todos: t, provisional: l, agents: n, announceProgress: i = !0 } = e,
        { completed: r, total: s } = { completed: t.filter((e) => "completed" === e.status).length, total: t.length };
    return 0 === s
        ? null
        : (0, a.jsxs)(eT, {
              title: P.intl.string(_.default.qCRC6c),
              trailing: (0, a.jsx)(v.E, {
                  variant: "text-sm/medium",
                  color: "text-muted",
                  tag: "span",
                  children: P.intl.formatToPlainString(_.default.bQvqly, { completed: r, total: s }),
              }),
              className: tm.Nr,
              "data-vibegrations-todo-card": !0,
              children: [
                  i
                      ? (0, a.jsx)(tc.A, {
                            role: "status",
                            "aria-live": "polite",
                            children: P.intl.formatToPlainString(_.default["QG/EiF"], { completed: r, total: s }),
                        })
                      : null,
                  (0, a.jsx)("div", {
                      className: tm.rf,
                      children: (0, a.jsx)(tx, { todos: t, provisional: l, agents: n }),
                  }),
              ],
          });
}
var tv = l(229775),
    tj = l(165648);
function tb(e) {
    let t = ta(e.map((e) => e.taskId));
    return e.flatMap((e) => {
        if ("running" !== e.task.status) return [];
        let l = null != e.task.helperMark ? tl(e.task.helperMark) : void 0,
            n = l ?? t.get(e.taskId);
        return null == n
            ? []
            : [
                  {
                      key: e.taskId,
                      mark: n,
                      name: null != l && null != e.task.helperName ? e.task.helperName : n.name,
                      task: tu(e.task),
                      todoId: e.task.todoId,
                  },
              ];
    });
}
function ty(e) {
    let {
            projectId: t,
            steps: l,
            active: n = !1,
            durationMs: r,
            interrupted: s = !1,
            todos: o,
            provisionalTodo: u,
            segment: d,
            hostsChecklist: c = !0,
            reportsDuration: m = !0,
            closed: f = !1,
            segmentDurationMs: h,
        } = e,
        g = i.useMemo(() => (0, ey.GO)(l, { turnActive: n }), [l, n]),
        x = i.useMemo(
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
            className: to.pj,
            "data-live": !1,
            children: (0, a.jsx)(eZ.A, {
                glyph: (0, a.jsx)(eN.w, { size: "custom", width: 20, height: 20, color: "currentColor" }),
                line: P.intl.string(_.default["5T7DSm"]),
                live: !1,
                settled: !0,
            }),
        });
    let p = n ? void 0 : (h ?? (m ? (g.turn?.durationMs ?? r) : void 0)),
        v = c ? ((0, ey.lt)(l) ?? o ?? null) : null,
        j = null != v && v.length > 0;
    if (0 === x.steps.length && 0 === x.tasks.length && !j) return null;
    let b = x.tasks,
        y = ta(b.map((e) => e.taskId)),
        A = !f && (n || b.some((e) => "running" === e.task.status)),
        k = tb(b);
    return (0, a.jsx)(eZ.l.Provider, {
        value: b.length,
        children: (0, a.jsxs)("ol", {
            className: to.pj,
            "data-live": A,
            children: [
                (0, a.jsx)(ek.Ay, {
                    projectId: t,
                    steps: x.steps,
                    fallbackLabel: b.find((e) => null != e.task.groupLabel)?.task.groupLabel,
                    live: n,
                    closed: f,
                    durationMs: p,
                    connectsDown: b.length > 0,
                }),
                b.map((e, l) => {
                    let n = null != e.task.helperMark ? tl(e.task.helperMark) : void 0,
                        i = n ?? y.get(e.taskId);
                    return null == i
                        ? null
                        : (0, a.jsx)(
                              td,
                              {
                                  projectId: t,
                                  lane: e,
                                  Illocon: i.Illocon,
                                  tint: i.tint,
                                  name: null != n && null != e.task.helperName ? e.task.helperName : i.name,
                                  connectsDown: l < b.length - 1,
                              },
                              e.taskId,
                          );
                }),
                j
                    ? (0, a.jsx)("li", {
                          className: to.YO,
                          children: (0, a.jsx)(tp, { todos: v, provisional: u, agents: k }),
                      })
                    : null,
            ],
        }),
    });
}
function tA(e) {
    let {
            projectId: t,
            steps: l,
            content: n,
            proposal: r,
            ideas: o,
            attachments: u,
            secretRequest: d,
            settingsRequest: c,
            onPickIdea: m,
            pickedIdeaIds: f,
            sideReply: h = !1,
            hoistedProse: g = !1,
        } = e,
        {
            streamed: x,
            lastStreamedMessage: p,
            showsClosingMessage: j,
            attachmentsHost: b,
        } = i.useMemo(
            () => eS({ steps: l, content: n, hasProposal: null != r, hasAttachments: null != u && u.length > 0 }),
            [l, n, r, u],
        ),
        y = null == u ? null : (0, a.jsx)(eR.A, { projectId: t, attachments: u }),
        A = null == y ? null : (0, a.jsx)("div", { className: to.MT, children: y }),
        k = h
            ? (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(_.default.OAjkIT),
              })
            : null;
    return (0, a.jsxs)("div", {
        className: to.ue,
        children: [
            x.length > 0 && !g
                ? (0, a.jsx)("ol", {
                      className: to.dO,
                      children: x
                          .filter((e) => "todos" !== e.type)
                          .map((e) =>
                              (0, a.jsxs)(
                                  "li",
                                  {
                                      className: to.DV,
                                      children: [
                                          (0, a.jsx)("div", {
                                              className: tj.PT,
                                              children: ew.A.parse(e.content, !0, {
                                                  allowList: !0,
                                                  allowHeading: !0,
                                                  allowLinks: !0,
                                              }),
                                          }),
                                          "streamed" === b && e === p ? A : null,
                                      ],
                                  },
                                  e.key,
                              ),
                          ),
                  })
                : null,
            null != r
                ? (0, a.jsx)(eH, { projectId: t, proposal: r })
                : j
                  ? (0, a.jsxs)("div", {
                        className: s()(to.ky, tv.XR),
                        children: [
                            (0, a.jsx)("div", {
                                className: s()(tj.PT, to.cW),
                                children: ew.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                            }),
                            "closing" === b ? A : null,
                            k,
                        ],
                    })
                  : null,
            null != d
                ? (0, a.jsx)("div", {
                      className: s()(to.ky, tv.XR),
                      children: (0, a.jsx)(eQ, { projectId: t, request: d }),
                  })
                : null,
            null != c
                ? (0, a.jsx)("div", {
                      className: s()(to.ky, tv.XR),
                      children: (0, a.jsx)(eJ, { projectId: t, request: c }),
                  })
                : null,
            "standalone" === b ? y : null,
            null != o && o.length > 0 ? (0, a.jsx)(eP, { ideas: o, pickedIdeaIds: f, onPick: m }) : null,
            j ? null : k,
        ],
    });
}
l(323874), l(14289), l(35956);
var tk = l(475358),
    tN = l(922016),
    tw = l(980707),
    tS = l(477782),
    tC = l(81369),
    tE = l(717400),
    tI = l(663341),
    tT = l(826745),
    tM = l(783977),
    t_ = l(559647),
    tP = l(285796),
    tR = l(775602),
    tL = l(673724),
    tF = l(435558),
    tD = l.n(tF),
    tq = l(506774),
    tO = l(228366);
let tG = "VibegrationsComposerDrafts";
function t$() {
    return tq.w.get(tG) ?? {};
}
let tz = new Map(),
    tB = tD().throttle(() => {
        if (0 === tz.size) return;
        let e = t$();
        for (let [t, l] of tz) "" === l ? delete e[t] : (e[t] = l);
        tz.clear(), tq.w.set(tG, e);
    }, 1e3);
class tU extends k.Ay.Store {
    getDraft(e) {
        let t = tz.get(e);
        return null != t ? t : (t$()[e] ?? "");
    }
}
let tV = new tU(tO.h, {
    LOGOUT: function () {
        return tz.clear(), tB.cancel(), tq.w.remove(tG), !1;
    },
    VIBEGRATIONS_COMPOSER_DRAFT_SET: function (e) {
        let { projectId: t, draft: l } = e;
        return tz.set(t, l), tB(), "" === l && tB.flush(), !1;
    },
});
var tH = l(590380),
    tW = l(311656),
    tY = l(789438);
let tQ = tL.Is;
function tK(e) {
    let { text: t } = e,
        [l, n] = i.useState(""),
        [r, s] = i.useState("enterStart"),
        [o, u] = i.useState("");
    t !== o && (u(t), t !== l && ("" === l ? (n(t), s("enterStart")) : "idle" === r && s("exit"))),
        i.useEffect(() => {
            if ("exit" === r) {
                let e = window.setTimeout(() => {
                    n(t), s("enterStart");
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
    let d = "exit" === r ? tY.t0 : "enterStart" === r ? tY.Rj : "";
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)("span", { className: `${tY.xM} ${tY.nT} ${d}`, children: l }),
            (0, a.jsx)(tk.e, { shortcut: "tab", className: `${tY.xT} ${tY.nT} ${d}`, keyClassName: tY.IS }),
        ],
    });
}
let tX = 0;
function tJ(e) {
    let {
            projectId: t,
            canSend: l,
            stopped: n,
            running: r,
            restoring: s = !1,
            onSend: o,
            onInterrupt: u,
            onUploadFile: d,
            onDeleteFile: m,
            onApprove: f,
            onImport: h,
            suggestion: g,
            questionOpen: x = !1,
            modelSettings: p,
            onModelSettingsChange: v,
        } = e,
        [j, b] = i.useState(() => tV.getDraft(t)),
        y = i.useCallback(
            (e) => {
                (0, c.I$)(t, e), b(e);
            },
            [t],
        ),
        [A, N] = i.useState(t);
    A !== t && (N(t), b(tV.getDraft(t)));
    let w = (0, k.bG)([tR.Ay], () => tR.Ay.isSubmitButtonEnabled),
        [S, C] = i.useState([]),
        [E, I] = i.useState(!1),
        [T, M] = i.useState(!1);
    i.useEffect(() => {
        r || M(!1);
    }, [r]);
    let R = i.useRef(null),
        L = i.useRef([]),
        F = i.useRef(new Set()),
        D = i.useRef(m);
    D.current = m;
    let q = i.useCallback((e) => {
            (L.current = e), C(e);
        }, []),
        O = i.useCallback((e) => {
            D.current(e.id).catch((e) => {
                console.error("[vibegrations] attachment cleanup failed", e);
            });
        }, []);
    i.useEffect(() => {
        let e = F.current;
        return () => {
            for (let t of L.current)
                e.add(t.localId), null != t.previewUrl && URL.revokeObjectURL(t.previewUrl), null != t.ref && O(t.ref);
        };
    }, [O]);
    let G = i.useCallback(
            (e, t) => {
                if (F.current.has(e)) return;
                let l = L.current;
                l.some((t) => t.localId === e) && q(l.map((l) => (l.localId === e ? { ...l, ...t } : l)));
            },
            [q],
        ),
        $ = i.useCallback(
            (e) => {
                if (0 === e.length) return;
                let t = [...L.current],
                    l = [];
                for (let n of e) {
                    let e = "" === n.type ? "application/octet-stream" : n.type,
                        a = ++tX,
                        i = { localId: a, name: n.name, size: n.size, contentType: e, status: "uploading" };
                    if (t.length >= tQ) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(_.default.DlX57a, { count: tQ }),
                        });
                        continue;
                    }
                    if (!(0, tL.x5)(n.size, e)) {
                        t.push({
                            ...i,
                            status: "error",
                            errorText: P.intl.formatToPlainString(_.default.cI7t94, {
                                size: (0, tL.ZJ)((0, tL.yr)(e)),
                            }),
                        });
                        continue;
                    }
                    let r = tL.Wb.has(e) ? URL.createObjectURL(n) : void 0;
                    t.push({ ...i, previewUrl: r }), l.push({ file: n, localId: a });
                }
                for (let { file: e, localId: n } of (q(t), l))
                    d(e).then(
                        (e) => {
                            F.current.has(n) ? O(e) : G(n, { status: "ready", ref: e });
                        },
                        (e) => {
                            F.current.has(n) ||
                                (console.error("[vibegrations] attachment upload failed", e),
                                G(n, { status: "error", errorText: P.intl.string(_.default.GwEHvn) }));
                        },
                    );
            },
            [O, d, G, q],
        ),
        z = i.useCallback(
            (e) => {
                let t = L.current,
                    l = t.find((t) => t.localId === e);
                F.current.add(e),
                    l?.previewUrl != null && URL.revokeObjectURL(l.previewUrl),
                    l?.ref != null && O(l.ref),
                    q(t.filter((t) => t.localId !== e));
            },
            [O, q],
        ),
        B = S.every((e) => "ready" === e.status),
        U = "" !== j.trim() || S.length > 0,
        V = l && U && B,
        H = i.useCallback(() => {
            if (!V) return;
            let e = L.current.filter((e) => null != e.ref).map((e) => e.ref);
            for (let t of (o(j, e.length > 0 ? e : void 0), L.current))
                null != t.previewUrl && URL.revokeObjectURL(t.previewUrl);
            y(""), q([]);
        }, [V, j, o, q, y]),
        W = i.useCallback(
            (e) => {
                e.preventDefault(), H();
            },
            [H],
        ),
        Y = i.useCallback(() => {
            null == u || T || (M(!0), u());
        }, [u, T]),
        Q = null == g || "" !== j || !l || n || s ? null : g,
        K = i.useCallback(
            (e) => {
                if ("Escape" === e.key && r && null != u && !T) {
                    e.preventDefault(), e.stopPropagation(), Y();
                    return;
                }
                if ("Tab" === e.key && !e.shiftKey && null != Q) {
                    e.preventDefault(), e.nativeEvent.stopImmediatePropagation(), y(Q);
                    return;
                }
                if ("Enter" === e.key && (e.metaKey || e.ctrlKey)) {
                    null != f && (e.preventDefault(), f());
                    return;
                }
                "Enter" !== e.key || e.shiftKey || (e.preventDefault(), H());
            },
            [H, f, r, u, T, Y, Q, y],
        ),
        X = i.useCallback(
            (e) => {
                if (!l) return;
                let t = Array.from(e.clipboardData.files);
                0 !== t.length && (e.preventDefault(), $(t));
            },
            [l, $],
        ),
        J = i.useCallback(
            (e) => {
                e.preventDefault(), I(!1), l && $(Array.from(e.dataTransfer.files));
            },
            [l, $],
        ),
        Z = i.useCallback((e) => {
            e.dataTransfer.types.includes("Files") && (e.preventDefault(), I(!0));
        }, []),
        ee = i.useCallback(
            (e) => {
                $(Array.from(e.currentTarget.files ?? [])), (e.currentTarget.value = "");
            },
            [$],
        ),
        et = i.useRef(null),
        el = i.useRef(null),
        [en, ea] = i.useState(0),
        [ei, er] = i.useState(!1);
    i.useEffect(() => {
        if (0 === j.length) return void er(!1);
        let e = et.current?.querySelector("textarea");
        if (null != e) {
            let t = t1(e);
            null != t && ea(t);
        }
        er(!0);
        let t = setTimeout(() => er(!1), tZ);
        return () => clearTimeout(t);
    }, [j]);
    let es = i.useMemo(() => ({ "--custom-glow-x": `${en}px` }), [en]),
        eo = ei ? ` ${tY.EB}` : "",
        eu = null != Q;
    return (0, a.jsxs)("form", {
        onSubmit: W,
        onDrop: J,
        onDragOver: Z,
        onDragLeave: () => I(!1),
        className: E ? `${tY.DA} ${tY.pV}` : tY.DA,
        children: [
            S.length > 0
                ? (0, a.jsx)("div", {
                      className: tY.lN,
                      children: S.map((e) => (0, a.jsx)(t2, { draft: e, onRemove: z }, e.localId)),
                  })
                : null,
            (0, a.jsx)("span", { className: `${tY.wg} ${tY.LP}${eo}`, style: es, "aria-hidden": !0 }),
            (0, a.jsx)("span", { className: `${tY.wg} ${tY.L3}${eo}`, style: es, "aria-hidden": !0 }),
            (0, a.jsxs)("div", {
                className: tY.VA,
                ref: et,
                children: [
                    (0, a.jsx)("input", {
                        ref: R,
                        type: "file",
                        multiple: !0,
                        onChange: ee,
                        className: tY.nY,
                        tabIndex: -1,
                        "aria-hidden": !0,
                    }),
                    (0, a.jsx)(tN.Y, {
                        targetElementRef: el,
                        position: "top",
                        align: "left",
                        animation: tN.Y.Animation.NONE,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, a.jsx)(tw.W, {
                                "data-menu-migrated": !0,
                                navId: "vibegrations-composer-attach",
                                "aria-label": P.intl.string(P.t.d56gCa),
                                onClose: t,
                                onSelect: t,
                                children: (0, a.jsxs)(tS.rX, {
                                    children: [
                                        (0, a.jsx)(tS.Dr, {
                                            id: "upload-file",
                                            label: P.intl.string(P.t["d3+iYs"]),
                                            iconLeft: tC.H,
                                            leadingAccessory: { type: "icon", icon: tC.H },
                                            action: () => R.current?.click(),
                                        }),
                                        null != h
                                            ? (0, a.jsx)(tS.Dr, {
                                                  id: "import-project",
                                                  label: P.intl.string(_.default.edKajy),
                                                  iconLeft: tE.q,
                                                  leadingAccessory: { type: "icon", icon: tE.q },
                                                  action: h,
                                              })
                                            : null,
                                    ],
                                }),
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t;
                            return (0, a.jsx)("button", {
                                ...e,
                                ref: el,
                                type: "button",
                                className: `${tY.Y0} ${tY.nu}`,
                                disabled: !l,
                                "aria-label": P.intl.string(P.t.d56gCa),
                                "aria-haspopup": "menu",
                                "aria-expanded": n,
                                children: (0, a.jsx)(tI.PlusLargeIcon, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: tY.Qu,
                                }),
                            });
                        },
                    }),
                    null == Q
                        ? null
                        : (0, a.jsx)("div", {
                              className: tY.ar,
                              "aria-hidden": "true",
                              children: (0, a.jsx)(tK, { text: Q }),
                          }),
                    (0, a.jsx)(tT.y, {
                        value: j,
                        onChange: (e) => y(e.currentTarget.value),
                        onKeyDown: K,
                        onPaste: X,
                        placeholder: s
                            ? P.intl.string(_.default.pGFXZ0)
                            : n
                              ? P.intl.string(_.default.JeM47J)
                              : l
                                ? eu
                                    ? ""
                                    : x
                                      ? P.intl.string(_.default.M3ovXY)
                                      : P.intl.string(r ? _.default["67PpcP"] : _.default.ahRdoJ)
                                : P.intl.string(_.default.nm4w9P),
                        disabled: !l,
                        "aria-label": P.intl.string(_.default.OPr66w),
                        rows: 1,
                        className: tY.jp,
                    }),
                    (0, a.jsx)("div", {
                        className: tY.Sz,
                        children:
                            r && null != u
                                ? (0, a.jsx)(eL.m, {
                                      text: P.intl.string(_.default.KdgI4k),
                                      ariaHidden: !0,
                                      children: (0, a.jsx)("button", {
                                          type: "button",
                                          className: `${tY.Y0} ${tY.$E}`,
                                          disabled: T,
                                          onClick: Y,
                                          "aria-label": P.intl.string(_.default.KdgI4k),
                                          children: (0, a.jsx)(eN.w, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: "currentColor",
                                          }),
                                      }),
                                  })
                                : null != p && null != v
                                  ? (0, a.jsx)(tW.A, {
                                        settings: p.settings,
                                        choices: p.choices,
                                        disabled: !l,
                                        onChange: v,
                                        className: `${tY.Y0} ${tY.$E}`,
                                        icon: (0, a.jsx)(tM.R, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: "currentColor",
                                        }),
                                    })
                                  : null,
                    }),
                    w
                        ? (0, a.jsxs)("div", {
                              className: tY.fF,
                              children: [
                                  (0, a.jsx)("div", { className: tY.MT }),
                                  (0, a.jsx)("button", {
                                      type: "submit",
                                      className: tY.rt,
                                      disabled: !V,
                                      "aria-label": P.intl.string(_.default["22GHMt"]),
                                      children: (0, a.jsx)(t_.SendMessageIcon, {
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
let tZ = 1500,
    t0 = [
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
function t1(e) {
    if ("u" < typeof document) return null;
    let t = (function () {
            let e = t1.mirror;
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
                (t1.mirror = t),
                t
            );
        })(),
        l = window.getComputedStyle(e);
    for (let e of t0) t.style.setProperty(e, l.getPropertyValue(e));
    (t.style.width = `${e.clientWidth}px`), (t.textContent = e.value.slice(0, e.selectionStart ?? e.value.length));
    let n = document.createElement("span");
    (n.textContent = "\u200B"), t.appendChild(n);
    let a = n.offsetLeft;
    return (t.textContent = ""), e.offsetLeft + a - e.scrollLeft;
}
function t2(e) {
    let { draft: t, onRemove: l } = e;
    return (0, a.jsxs)(tH.p, {
        name: t.name,
        thumbSrc: t.previewUrl,
        subText:
            "error" === t.status
                ? (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-feedback-critical", children: t.errorText })
                : null,
        children: [
            "uploading" === t.status ? (0, a.jsx)(f.y, { type: f.t.SPINNING_CIRCLE_SIMPLE, className: tY.Rk }) : null,
            (0, a.jsx)("button", {
                type: "button",
                className: tY.o1,
                onClick: () => l(t.localId),
                "aria-label": P.intl.string(_.default["3HWvgk"]),
                children: (0, a.jsx)(tP.a, { size: "xs", color: "currentColor" }),
            }),
        ],
    });
}
t1.mirror = null;
var t6 = l(320095),
    t7 = l(963852),
    t3 = l(521981),
    t4 = l(763754),
    t5 = l(491182),
    t8 = l(438729),
    t9 = l(622868),
    le = l(308334),
    lt = l(837528),
    ll = l(432433),
    ln = l(715628),
    la = l(752636),
    li = l(9842),
    lr = l(589022),
    ls = l(95701),
    lo = l(994500),
    lu = l(967198),
    ld = l(803306);
let lc = new Set(),
    lm = new Map();
function lf(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
let lh = new Set(["*", "_", "~", "`", "[", "]", "(", ")"]);
function lg(e) {
    return null != e && e >= 127462 && e <= 127487;
}
function lx(e, t) {
    if (t <= 0) return;
    let l = e.charCodeAt(t - 1);
    if (l >= 56320 && l <= 57343 && t >= 2) {
        let n = e.charCodeAt(t - 2);
        if (n >= 55296 && n <= 56319) return (n - 55296) * 1024 + (l - 56320) + 65536;
    }
    return l;
}
function lp(e, t) {
    if (t <= 0 || t >= e.length) return !1;
    let l = e.charCodeAt(t - 1),
        n = e.charCodeAt(t);
    if (l >= 55296 && l <= 56319 && n >= 56320 && n <= 57343) return !0;
    let a = lx(e, t),
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
    if (lg(a) && lg(i)) {
        let l = 0,
            n = t;
        for (; l < 32 && lg(lx(e, n)); ) l++, (n -= 2);
        return l % 2 == 1;
    }
    return !1;
}
function lv(e, t) {
    let { streaming: l } = t,
        n = (0, k.bG)([tR.Ay], () => tR.Ay.useReducedMotion),
        a = l && !n,
        [r, s] = i.useState(() => ({ target: e, length: e.length })),
        o = r;
    o.target !== e &&
        (o = {
            target: e,
            length: a
                ? (function (e, t, l) {
                      let n = Math.min(Math.max(l, 0), e.length);
                      if (0 === n) return 0;
                      if (t.length >= n && t.startsWith(e.slice(0, n))) return n;
                      let a = Math.min(n, t.length),
                          i = 0;
                      for (; i < a && e.charCodeAt(i) === t.charCodeAt(i); ) i++;
                      for (; i > 0 && lp(t, i); ) i--;
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
                    let l = 0 === m.current ? 32 : t - m.current;
                    if (l >= 32) {
                        m.current = t;
                        let e = d.current,
                            n = (function (e) {
                                let { target: t, revealed: l, elapsedMs: n } = e,
                                    a = Math.min(Math.max(l, 0), t.length),
                                    i = t.length - a;
                                if (i <= 0) return a;
                                if (i > 900) return t.length;
                                let r = Math.min(
                                    120,
                                    Math.max(1, Math.round(Math.max(0.16, i / 280) * Math.max(n, 0))),
                                );
                                var s = (function (e, t, l) {
                                    if (l >= e.length) return l;
                                    let n = l;
                                    for (; n > t + 1 && l - n < 12 && lh.has(e.charAt(n - 1)); ) n--;
                                    return lh.has(e.charAt(n - 1)) ? l : n;
                                })(t, a, Math.min(t.length, a + r));
                                let o = s;
                                for (; o < t.length && o - s < 32 && lp(t, o); ) o++;
                                return o;
                            })({ target: e.target, revealed: e.length, elapsedMs: l });
                        n !== e.length && s({ target: e.target, length: n });
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
    let f = Math.min(o.length, e.length);
    return { text: f >= e.length ? e : e.slice(0, f), revealing: a && f < e.length };
}
var lj = l(441136);
let lb = (0, ls.createChannelRecord)({ id: "vibegrations-builder", type: E.rbe.DM }),
    ly = {
        id: "vibegrations-conjure",
        username: "Conjure",
        global_name: "Conjure",
        discriminator: "0000",
        avatar: null,
        bot: !1,
    };
function lA(e, t) {
    return null == e ? e : (0, a.jsx)("div", { className: s()(lj.Yq, { [lj.x1]: t }), children: e });
}
function lk(e, t) {
    return null != e && e > 0 ? new Date(e).toISOString() : t;
}
function lN(e, t, l) {
    let { content: n } = (0, ll.A)(e, {
            hideSimpleEmbedContent: !0,
            allowList: !0,
            allowHeading: !0,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        r = i.useMemo(() => ({ message: e, channel: lb, compact: !1 }), [e]);
    return "" === t
        ? null
        : null != l
          ? (0, a.jsx)(t8.Ay, { className: l, message: e, content: n, compact: !1 })
          : (0, ln.A)(r, n);
}
function lw(e) {
    let [t, l] = i.useState({ usernameProfile: !1, avatarProfile: !1 }),
        n = i.useCallback((e) => l((t) => ({ ...t, ...e })), []),
        r = i.useCallback(() => l({ usernameProfile: !1, avatarProfile: !1 }), []),
        s = (0, lt.m)(e, lb, t.usernameProfile, n),
        o = (0, lt.Jo)(t.avatarProfile, n),
        u = (0, k.bG)([lu.A], () => lu.A.getGuildId()),
        d = (0, k.bG)([es.default], () => es.default.getCurrentUser()),
        c = i.useCallback(
            (t) => {
                let l = es.default.getUser(e.author.id) ?? e.author;
                return null == d ? null : (0, a.jsx)(lr.A, { ...t, user: l, currentUser: d, guildId: u ?? void 0 });
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
function lS(e) {
    let { baseMessage: t, referenced: l, onJumpToReplied: n } = e,
        r = i.useMemo(
            () => ("" !== l.content ? (0, t3.Ay)(l, { formatInline: !0, allowGameMentions: !0 }).content : null),
            [l],
        ),
        { isReplyAuthorBlocked: s, isReplyAuthorIgnored: o } = (0, k.cf)(
            [lo.A],
            () => ({
                isReplyAuthorBlocked: lo.A.isBlockedForMessage(l),
                isReplyAuthorIgnored: lo.A.isIgnoredForMessage(l),
            }),
            [l],
        ),
        u = (0, t4.X4)(l),
        d = (0, t4.X4)(t),
        c = lw(l);
    return (0, a.jsx)(le.A, {
        repliedAuthor: u,
        baseAuthor: d,
        baseMessage: t,
        channel: lb,
        referencedMessage: { state: li.a.LOADED, message: l },
        content: r,
        compact: !1,
        isReplyAuthorBlocked: s,
        isReplyAuthorIgnored: o,
        isReplySpineClickable: null != n,
        showReplySpine: !0,
        renderPopout: c.renderPopout,
        showAvatarPopout: c.showAvatarPopout,
        showUsernamePopout: c.showUsernamePopout,
        onClickAvatar: c.onClickAvatar,
        onClickUsername: c.onClickUsername,
        onClickReply: n,
        onPopoutRequestClose: c.onPopoutRequestClose,
    });
}
function lC(e) {
    let { message: t, author: l } = e,
        n = lw(t);
    return (0, a.jsx)(t9.Ay, {
        message: t,
        channel: lb,
        author: l,
        guildId: n.guildId,
        subscribeToGroupId: t.id,
        renderPopout: n.renderPopout,
        showAvatarPopout: n.showAvatarPopout,
        showUsernamePopout: n.showUsernamePopout,
        onClickAvatar: n.onClickAvatar,
        onClickUsername: n.onClickUsername,
        onPopoutRequestClose: n.onPopoutRequestClose,
    });
}
function lE(e) {
    let { content: t, createdAt: l, userId: n, accessories: r, groupStart: s } = e;
    i.useEffect(
        () =>
            (function (e) {
                if (null == e || lc.has(e) || null != es.default.getUser(e)) return;
                let t = lm.get(e) ?? 0;
                t >= 3 ||
                    (lm.set(e, t + 1),
                    lc.add(e),
                    ld
                        .getUser(e)
                        .finally(() => lc.delete(e))
                        .catch(() => {}));
            })(n),
        [n],
    );
    let o = (0, k.bG)(
            [es.default],
            () => lf(n, null != n ? es.default.getUser(n) : null, es.default.getCurrentUser()),
            [n],
        ),
        u = i.useMemo(() => (0, t4.FT)(o, null), [o]),
        d = i.useMemo(() => {
            if (null == o) return null;
            let e = (0, t7.Ay)({ channelId: lb.id, content: t, author: o });
            return (0, t6.rh)({ ...e, timestamp: lk(l, e.timestamp), state: E.cmJ.SENT });
        }, [t, o, l]);
    return null == d ? null : (0, a.jsx)(lI, { message: d, author: u, content: t, accessories: r, groupStart: s });
}
function lI(e) {
    let { message: t, author: l, content: n, accessories: i, groupStart: r = !0 } = e,
        s = lN(t, n);
    return (0, a.jsx)(t5.A, {
        className: lj.yE,
        author: l,
        childrenHeader: r ? (0, a.jsx)(lC, { message: t, author: l }) : void 0,
        childrenMessageContent: s,
        childrenAccessories: lA(i, "" !== n),
        disableInteraction: !0,
    });
}
function lT(e) {
    let {
            content: t,
            createdAt: l,
            accessories: n,
            replyTo: r,
            onJumpToReplied: s,
            groupStart: o = !0,
            streaming: u = !1,
        } = e,
        { text: d, revealing: c } = lv(t, { streaming: u }),
        m = i.useMemo(() => (0, t4.FT)(null, null), []),
        f = i.useMemo(() => ({ ...m, nick: "Conjure", colorString: "var(--text-brand)" }), [m]),
        h = r?.userId,
        g = (0, k.bG)(
            [es.default],
            () => lf(h, null != h ? es.default.getUser(h) : null, es.default.getCurrentUser()),
            [h],
        ),
        x = i.useMemo(() => {
            if (null == r || null == g) return null;
            let e = (0, t7.Ay)({ channelId: lb.id, content: r.content, author: g });
            return (0, t6.rh)({ ...e, id: r.id, timestamp: lk(r.createdAt, e.timestamp), state: E.cmJ.SENT });
        }, [r, g]),
        p = i.useMemo(() => (null == r ? void 0 : { channel_id: lb.id, message_id: r.id }), [r]),
        v = i.useMemo(() => {
            let e = (0, t7.Ay)({ channelId: lb.id, content: d, author: ly });
            return (0, t6.rh)({
                ...e,
                timestamp: lk(l, e.timestamp),
                state: E.cmJ.SENT,
                ...(null != p ? { type: E.lAJ.REPLY, message_reference: p } : {}),
            });
        }, [d, l, p]),
        j = lN(v, d, lj.OS);
    return (0, a.jsxs)("div", {
        className: lj.$4,
        "data-replying": null != x ? "true" : void 0,
        "data-vibegrations-revealing": c ? "true" : void 0,
        children: [
            (0, a.jsx)(t5.A, {
                className: lj.yE,
                author: f,
                childrenRepliedMessage:
                    null == x ? null : (0, a.jsx)(lS, { baseMessage: v, referenced: x, onJumpToReplied: s }),
                childrenHeader: (0, la.A)({ message: v, channel: lb, author: f, guildId: void 0, isGroupStart: o }),
                childrenMessageContent: j,
                childrenAccessories: lA(n, "" !== d),
                disableInteraction: !0,
            }),
            o
                ? (0, a.jsx)("span", {
                      className: lj.st,
                      "aria-hidden": "true",
                      children: (0, a.jsx)(G.k, { size: "custom", color: "currentColor", width: 20, height: 20 }),
                  })
                : null,
        ],
    });
}
var lM = l(375068);
function l_(e) {
    let { projectId: t, messages: l, ref: n, onPickIdea: r } = e,
        s = i.useRef(null),
        o = i.useCallback(
            (e) => {
                (s.current = e), "function" == typeof n ? n(e) : null != n && (n.current = e);
            },
            [n],
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
        f = i.useMemo(
            () =>
                (function (e) {
                    let t = [];
                    function l(e, l) {
                        t.push({ row: e, groupable: { key: e.key, ...l } });
                    }
                    for (let t of e) {
                        if ("user" === t.role) {
                            l(
                                { kind: "user", key: t.render_id, message: t, groupStart: !1 },
                                { actor: "user", authorId: t.user_id, boundary: void 0 },
                            );
                            continue;
                        }
                        let e = !(0, eA.BL)(t),
                            n = eS({
                                steps: t.steps,
                                content: t.content,
                                hasProposal: null != t.proposal,
                                hasAttachments: (t.attachments?.length ?? 0) > 0,
                            }),
                            a = n.lastStreamedMessage?.key,
                            i = (0, ey.C6)(t.steps, { turnActive: e }),
                            { lastWork: r, open: s } = (0, ey.CT)(i, { turnActive: e }),
                            o = i.at(-1)?.index;
                        for (let u of i) {
                            if (null != u.prose) {
                                let i = `${t.render_id}:${u.key}`;
                                l(
                                    {
                                        kind: "prose",
                                        key: i,
                                        message: t,
                                        groupStart: !1,
                                        content: u.prose.content,
                                        hostsAttachments:
                                            "streamed" === n.attachmentsHost &&
                                            u.prose.key === a &&
                                            null != t.attachments,
                                        streaming: e && u.index === o && !u.hasWork,
                                    },
                                    { actor: "assistant", boundary: i },
                                );
                            }
                            (u.hasWork || u.hasTodos) &&
                                l(
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
                                ? l(
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
                                  l(
                                      { kind: "legacyTodos", key: `${t.render_id}:todos`, message: t, groupStart: !1 },
                                      { actor: null, boundary: void 0 },
                                  ),
                            n.showsClosingMessage ||
                                null != t.proposal ||
                                null != t.ideas ||
                                null != t.clarification ||
                                null != t.secretRequest ||
                                null != t.settingsRequest ||
                                "standalone" === n.attachmentsHost)
                        ) {
                            let a = `${t.render_id}:closing`;
                            l(
                                {
                                    kind: "closing",
                                    key: a,
                                    message: t,
                                    groupStart: !1,
                                    active: e,
                                    attachmentsHost: n.attachmentsHost,
                                },
                                {
                                    actor: "assistant",
                                    boundary: a,
                                    separate: null != t.proposal || null != t.clarification || "side_reply" === t.kind,
                                },
                            );
                        }
                    }
                    let n = (function (e) {
                        let t,
                            l,
                            n = [],
                            a = null,
                            i = !1,
                            r = !1;
                        for (let s of e) {
                            if (null == s.actor) {
                                n.push(!1), (a = null), (t = void 0), (i = !1), (r = !1), (l = void 0);
                                continue;
                            }
                            let e =
                                !i || a !== s.actor || t !== s.authorId || s.boundary !== l || !0 === s.separate || r;
                            e && ((a = s.actor), (t = s.authorId), (i = !0), (r = !0 === s.separate), (l = s.boundary)),
                                n.push(e);
                        }
                        return n;
                    })(t.map((e) => e.groupable));
                    return t.map((e, t) => ({ ...e.row, groupStart: n[t] ?? !0 }));
                })(l),
            [l],
        );
    return 0 === l.length
        ? (0, a.jsx)("ol", {
              ref: n,
              className: lM.x7,
              children: (0, a.jsx)(lP, {
                  role: "assistant",
                  children: (0, a.jsx)(lT, { content: P.intl.string(_.default.khZEUv) }),
              }),
          })
        : (0, a.jsx)("ol", {
              ref: o,
              className: lM.x7,
              children: f.map((e) => {
                  let n = e.message;
                  switch (e.kind) {
                      case "user": {
                          let l = null != n.attachments && n.attachments.length > 0 ? n.attachments : null;
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "user",
                                  anchorId: n.id,
                                  highlighted: u === n.id,
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lE, {
                                      groupStart: e.groupStart,
                                      content: n.content,
                                      createdAt: n.created_at,
                                      userId: n.user_id,
                                      accessories:
                                          null != l ? (0, a.jsx)(eR.A, { projectId: t, attachments: l }) : void 0,
                                  }),
                              },
                              e.key,
                          );
                      }
                      case "prose":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lT, {
                                      groupStart: e.groupStart,
                                      content: e.content,
                                      streaming: e.streaming,
                                      createdAt: n.created_at,
                                      accessories:
                                          e.hostsAttachments && null != n.attachments
                                              ? (0, a.jsx)(eR.A, { projectId: t, attachments: n.attachments })
                                              : void 0,
                                  }),
                              },
                              e.key,
                          );
                      case "activity":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(ty, {
                                      projectId: t,
                                      steps: n.steps,
                                      segment: e.segment,
                                      active: e.active,
                                      closed: e.closed,
                                      segmentDurationMs: e.segmentDurationMs,
                                      reportsDuration: e.reportsDuration,
                                      hostsChecklist: e.hostsChecklist,
                                      durationMs: null != n.finished_at ? n.finished_at - n.created_at : void 0,
                                      todos: n.todos,
                                      provisionalTodo: n.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "interrupted":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(ty, { projectId: t, interrupted: !0, steps: n.steps }),
                              },
                              e.key,
                          );
                      case "legacyTodos":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  children: (0, a.jsx)(ty, {
                                      projectId: t,
                                      steps: [],
                                      active: !1,
                                      todos: n.todos,
                                      provisionalTodo: n.provisionalTodo,
                                  }),
                              },
                              e.key,
                          );
                      case "closing":
                          return (0, a.jsx)(
                              lP,
                              {
                                  role: "assistant",
                                  continuation: !e.groupStart,
                                  children: (0, a.jsx)(lT, {
                                      groupStart: e.groupStart,
                                      content: n.content,
                                      createdAt: n.created_at,
                                      replyTo: (function (e, t) {
                                          if (null == t) return;
                                          let l = e.find((e) => e.id === t && "user" === e.role);
                                          if (null != l)
                                              return {
                                                  id: l.id,
                                                  content: l.content,
                                                  ...(null != l.user_id ? { userId: l.user_id } : {}),
                                                  createdAt: l.created_at,
                                              };
                                      })(l, n.in_reply_to),
                                      onJumpToReplied: null != n.in_reply_to ? () => m(n.in_reply_to) : void 0,
                                      accessories: (0, a.jsx)(tA, {
                                          projectId: t,
                                          steps: n.steps,
                                          announcement: n.announcement,
                                          content: "",
                                          proposal: n.proposal,
                                          interrupted: !0 === n.interrupted,
                                          hoistedProse: !0,
                                          active: e.active,
                                          ideas: n.ideas,
                                          pickedIdeaIds:
                                              null == n.ideas
                                                  ? void 0
                                                  : (function (e, t, l) {
                                                        let n = new Set();
                                                        for (let a = e.indexOf(t) + 1; a > 0 && a < e.length; a++) {
                                                            let t = e[a];
                                                            if ("user" === t.role)
                                                                for (let e of l)
                                                                    e.implementation_prompt.trim() ===
                                                                        t.content.trim() && n.add(e.id);
                                                        }
                                                        return n;
                                                    })(l, n, n.ideas),
                                          attachments: n.attachments,
                                          secretRequest: n.secretRequest,
                                          settingsRequest: n.settingsRequest,
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
function lP(e) {
    let { role: t, children: l, anchorId: n, highlighted: i = !1, continuation: r = !1 } = e;
    return (0, a.jsx)("li", {
        "data-role": t,
        "data-vibegrations-message": n,
        className: s()(lM.xk, { [lM.Qo]: i, [lM.q3]: r }),
        children: l,
    });
}
var lR = l(625903),
    lL = l(964675);
function lF(e) {
    let { projectId: t } = e,
        l = (0, k.bG)([m.Ay], () => null != m.Ay.getSettings(t), [t]),
        n = i.useCallback(() => {
            (0, eK.A)(t);
        }, [t]);
    return l
        ? (0, a.jsx)(eC.D, {
              className: lL.h,
              "aria-label": P.intl.string(_.default.gTMvzD),
              onClick: n,
              children: (0, a.jsx)(lR.SettingsIcon, { size: "xxs", color: "currentColor", "aria-hidden": !0 }),
          })
        : null;
}
var lD = l(863610),
    lq = l(495557);
function lO(e) {
    let { activity: t, id: l } = e,
        { text: n, revealing: r } = lv(t?.text ?? "", { streaming: null != t && "end" !== t.phase }),
        o = i.useRef(null);
    return (
        i.useLayoutEffect(() => {
            o.current?.scrollToBottom();
        }, [n]),
        (0, a.jsx)("div", {
            id: l,
            role: "tooltip",
            className: lq.jn,
            "data-vibegrations-thinking-panel": !0,
            children: (0, a.jsx)(eb.Ch, {
                ref: o,
                className: lq.Dq,
                "data-vibegrations-thinking-reasoning": !0,
                children: (0, a.jsx)("div", {
                    className: s()(tj.PT, lq.bb),
                    "data-vibegrations-revealing": r ? "true" : void 0,
                    children: ew.A.parse(n, !0, { allowList: !0, allowHeading: !0, allowLinks: !0 }),
                }),
            }),
        })
    );
}
var lG = l(921461);
function l$(e) {
    let { activity: t, compacting: l = !1, restoring: n = !1, controlling: r = !1 } = e,
        o = i.useRef(null),
        u = i.useId(),
        [d, c] = i.useState(null),
        m = null != t && "end" !== t.phase,
        f = r
            ? _.default.ivvYHP
            : n
              ? _.default.aFffp2
              : l
                ? _.default["0vH/5G"]
                : m
                  ? _.default.Ly7F7x
                  : _.default.QDGuNS,
        h = null != t && "" !== t.text,
        g = t?.session ?? null,
        x = h && null != g && d === g,
        p = i.useCallback(() => {
            h && null != g && c((e) => (e === g ? null : g));
        }, [h, g]),
        j = i.useCallback(() => c(null), []);
    return (0, a.jsx)(tN.Y, {
        targetElementRef: o,
        position: "top",
        align: "left",
        shouldShow: x,
        onRequestClose: j,
        renderPopout: () => (0, a.jsx)(lO, { id: u, activity: t }),
        children: () =>
            (0, a.jsxs)(eC.D, {
                innerRef: o,
                className: s()(lG.hF, h && lG.Xd),
                "aria-label": P.intl.string(n ? _.default.pGFXZ0 : _.default.SzdX35),
                "aria-expanded": x,
                "aria-describedby": x ? u : void 0,
                "data-vibegrations-thinking-trigger": !0,
                onClick: p,
                children: [
                    (0, a.jsx)("span", {
                        className: lG.bl,
                        children: (0, a.jsx)(lD.n, { dotRadius: 3.5, themed: !0 }),
                    }),
                    (0, a.jsx)(v.E, {
                        tag: "span",
                        variant: "text-xs/semibold",
                        color: "text-strong",
                        "aria-hidden": !!r || void 0,
                        "data-vibegrations-activity-label": !0,
                        children: P.intl.string(f),
                    }),
                ],
            }),
    });
}
var lz = l(280894);
function lB(e) {
    return e.toLocaleString();
}
function lU(e) {
    let { label: t, usage: l } = e;
    return (0, a.jsxs)("div", {
        className: lz.Q$,
        children: [
            (0, a.jsxs)("div", {
                className: lz.mf,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                    (0, a.jsxs)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-muted",
                        children: [lB((0, tL.aM)(l)), " tokens"],
                    }),
                ],
            }),
            (0, a.jsxs)(v.E, {
                tag: "div",
                variant: "text-xs/normal",
                color: "text-muted",
                children: [
                    lB(l.input_tokens),
                    " in \xb7 ",
                    lB(l.output_tokens),
                    " out \xb7 ",
                    lB(l.cache_creation_input_tokens),
                    " cache write \xb7 ",
                    lB(l.cache_read_input_tokens),
                    " cache read",
                ],
            }),
        ],
    });
}
function lV(e) {
    let { project: t } = e,
        l = (0, tL.wU)(t.compaction),
        n = (0, tL.wV)((0, tL.wV)(t.orchestrator, t.codegen), l);
    return (0, a.jsxs)("div", {
        className: lz.si,
        role: "dialog",
        "aria-label": P.intl.string(_.default["9yoLWZ"]),
        children: [
            (0, a.jsx)("div", {
                className: lz.Q$,
                children: (0, a.jsxs)("div", {
                    className: lz.mf,
                    children: [
                        (0, a.jsxs)(v.E, {
                            variant: "text-md/semibold",
                            color: "text-default",
                            children: [lB((0, tL.a7)(t.cost_usd)), " runes"],
                        }),
                        (0, a.jsxs)(v.E, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: [t.turns, " turn", 1 === t.turns ? "" : "s"],
                        }),
                    ],
                }),
            }),
            (0, a.jsx)(lU, { label: P.intl.string(_.default.hk4jJr), usage: t.orchestrator }),
            (0, a.jsx)(lU, { label: P.intl.string(_.default.R9aduM), usage: t.codegen }),
            (0, a.jsx)(lU, { label: P.intl.string(_.default.Tj6b30), usage: l }),
            (0, a.jsxs)("div", {
                className: lz.mf,
                children: [
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: P.intl.string(_.default["kILb+R"]),
                    }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: 0 === (0, tL.sj)(n) ? "\u2014" : `${Math.round(100 * (0, tL.CA)(n))}%`,
                    }),
                ],
            }),
        ],
    });
}
function lH(e) {
    let { project: t } = e,
        l = i.useRef(null);
    return (0, a.jsx)(tN.Y, {
        targetElementRef: l,
        position: "top",
        align: "right",
        renderPopout: () => (0, a.jsx)(lV, { project: t }),
        children: (e) =>
            (0, a.jsx)(eC.D, {
                innerRef: l,
                className: lz.Y$,
                "aria-label": P.intl.string(_.default.AWQ2ZV),
                ...e,
                children: (0, a.jsx)(eF.CircleInformationIcon, {
                    size: "xxs",
                    color: "currentColor",
                    "aria-hidden": !0,
                }),
            }),
    });
}
var lW = l(985451),
    lY = l(258216);
function lQ(e) {
    switch (e) {
        case "connecting":
            return P.intl.string(_.default.W7oyuf);
        case "failed":
            return P.intl.string(_.default.eE60xI);
        case "closed":
            return P.intl.string(_.default["yBmS+I"]);
    }
}
function lK(e) {
    let {
            projectId: t,
            thinking: l,
            restoring: n = !1,
            thinkingActivity: i,
            compacting: r,
            projectUsage: s,
            connState: o,
        } = e,
        u = (0, lW.o4)(t);
    return (0, a.jsxs)("div", {
        className: lY.jf,
        children: [
            (0, a.jsx)("div", {
                className: lY.Xx,
                role: "status",
                "aria-live": "polite",
                "data-vibegrations-activity": !0,
                children:
                    l || n || u ? (0, a.jsx)(l$, { activity: i, compacting: r, restoring: n, controlling: u }) : null,
            }),
            (0, a.jsx)(lF, { projectId: t }),
            null == s
                ? null
                : (0, a.jsxs)("span", {
                      className: lY.BP,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-xs/medium",
                              color: "text-muted",
                              "aria-label": P.intl.formatToPlainString(_.default["7SZZvj"], {
                                  runes: (0, tL.a7)(s.cost_usd),
                                  turns: s.turns,
                              }),
                              children: P.intl.formatToPlainString(_.default["4PFO2p"], {
                                  runes: (0, tL.a7)(s.cost_usd).toLocaleString(),
                              }),
                          }),
                          (0, a.jsx)(lH, { project: s }),
                      ],
                  }),
            "open" === o
                ? null
                : (0, a.jsx)(v.E, {
                      tag: "span",
                      variant: "text-xs/medium",
                      color: "failed" === o ? "text-feedback-critical" : "text-muted",
                      role: "status",
                      "aria-label": P.intl.formatToPlainString(_.default.eDDdhB, { status: lQ(o) }),
                      "data-vibegrations-conn": !0,
                      "data-state": o,
                      className: lY.XF,
                      children: lQ(o),
                  }),
        ],
    });
}
var lX = l(22231),
    lJ = l(408278),
    lZ = l(900797),
    l0 = l(847374),
    l1 = l(477155),
    l2 = l(935286),
    l6 = l(856795),
    l7 = l(424110);
function l3(e) {
    let { option: t, position: l, disabled: n, onPick: r, reachable: o = !0 } = e,
        u = i.useId(),
        d = !0 === t.recommended,
        c = null != t.detail && "" !== t.detail;
    return (0, a.jsxs)(eC.D, {
        className: s()(l7.uK, { [l7.ue]: n }),
        onClick: n ? void 0 : () => r(t),
        "aria-label": P.intl.formatToPlainString(d ? _.default.aL1BKQ : _.default.k7lEgj, { answer: t.label }),
        "aria-describedby": c ? u : void 0,
        "aria-disabled": n,
        tabIndex: o ? 0 : -1,
        "data-vibegrations-clarification-option": t.id,
        "data-recommended": d ? "true" : void 0,
        children: [
            (0, a.jsx)("span", { className: l7.Gy, "aria-hidden": !0, children: l }),
            (0, a.jsxs)("span", {
                className: l7.qO,
                children: [
                    (0, a.jsx)("span", {
                        className: l7.l8,
                        children: (0, a.jsx)(v.E, {
                            tag: "span",
                            variant: "text-md/medium",
                            color: "none",
                            className: l7.ed,
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
                      className: l7.rM,
                      children: P.intl.string(_.default.OXRWyV),
                  })
                : null,
        ],
    });
}
function l4(e) {
    let { question: t, draft: l, direction: n, disabled: i } = e,
        r = "" === l.trim() ? null : l;
    return (0, a.jsxs)("div", {
        className: s()(l7.Ge, l7.x1),
        "data-direction": n,
        "aria-hidden": !0,
        children: [
            t.options.map((e, t) =>
                (0, a.jsx)(l3, { option: e, position: t + 1, disabled: i, onPick: () => void 0, reachable: !1 }, e.id),
            ),
            (0, a.jsxs)("div", {
                className: l7.Xy,
                children: [
                    (0, a.jsx)("span", {
                        className: l7.Gy,
                        "aria-hidden": !0,
                        children: (0, a.jsx)(lX.PencilIcon, {
                            size: "custom",
                            width: 20,
                            height: 20,
                            color: "currentColor",
                        }),
                    }),
                    null == r ? null : (0, a.jsx)("span", { className: s()(l7.Pu, l7.es), children: r }),
                ],
            }),
        ],
    });
}
function l5(e) {
    let { clarification: t, onSubmit: l, onDismiss: n } = e,
        [r, u] = i.useState({}),
        [d, c] = i.useState({}),
        [m, f] = i.useState(0),
        [h, g] = i.useState(null),
        [x, p] = i.useState(null),
        [j, b] = i.useState(null),
        [y, A] = i.useState(!1),
        k = i.useRef(null),
        [N, w] = i.useState(null),
        S = i.useRef(null),
        C = i.useRef(0),
        E = null == l,
        I = t.questions.length,
        T = Math.min(m, I - 1),
        M = t.questions[T],
        [R, L] = i.useState({ id: M.id, expanded: !1 }),
        F = R.id === M.id && R.expanded,
        [D, q] = i.useState(null),
        O = d[M.id] ?? "",
        { text: G, phase: $ } = (0, l6.Q)(M.question),
        z = G === M.question,
        B = z && D?.id === M.id && D.truncated;
    i.useLayoutEffect(() => {
        if (null == N || F || !z) return;
        function e() {
            if (null == N) return;
            let e = N.scrollHeight > N.clientHeight + 1;
            q((t) => (t?.id === M.id && t.truncated === e ? t : { id: M.id, truncated: e }));
        }
        e();
        let t = new ResizeObserver(e);
        return t.observe(N), () => t.disconnect();
    }, [z, N, M.id, F]);
    let U = P.intl.string(F ? P.t.iTcuma : P.t.dcl9MQ),
        V = i.useCallback(
            (e) => {
                if (null == l) return;
                let n = t.questions
                    .map((t, l) => ({ question: t, index: l, answer: e[t.id] }))
                    .filter((e) => null != e.answer && "" !== e.answer.text.trim())
                    .map((e) => {
                        let { question: t, index: l, answer: n } = e;
                        return `${l + 1}. ${t.question} \u{2192} ${n.text.trim()}`;
                    })
                    .join("\n");
                "" !== n && l(n);
            },
            [t, l],
        ),
        H = i.useCallback(
            (e, t) => {
                C.current += 1;
                let l = C.current;
                g({ direction: t, moves: l }), p({ question: M, draft: O, direction: t, moves: l }), A(!0), f(e);
            },
            [O, M],
        ),
        W = i.useCallback(() => {
            let e = k.current,
                t = S.current;
            null != e && null != t && b({ heading: e.offsetHeight, rows: t.offsetHeight });
        }, []);
    i.useLayoutEffect(() => {
        let e = k.current,
            t = S.current;
        if (null == e || null == t) return;
        W();
        let l = new ResizeObserver(W);
        return l.observe(e), l.observe(t), () => l.disconnect();
    }, [W]);
    let Y = h?.moves;
    i.useEffect(() => {
        if (null == Y) return;
        let e = setTimeout(() => p(null), 400),
            t = setTimeout(() => A(!1), 500);
        return () => {
            clearTimeout(e), clearTimeout(t);
        };
    }, [Y]);
    let Q = i.useCallback(
            (e) => {
                if (E) return;
                let l = { ...r, [M.id]: e };
                u(l);
                let n = (function (e, t, l) {
                    let { questions: n } = e;
                    for (let e = 1; e <= n.length; e++) {
                        let a = (l + e) % n.length,
                            i = t[n[a].id];
                        if (null == i || "" === i.text.trim()) return a;
                    }
                    return null;
                })(t, l, T);
                null == n ? V(l) : H(n, n < T ? "back" : "forward");
            },
            [r, t, E, T, M.id, V, H],
        ),
        K = i.useCallback(() => {
            if (E || 0 === T) return;
            let e = t.questions[T - 1];
            u((t) => {
                let l = { ...t };
                return delete l[e.id], l;
            }),
                c((t) => {
                    let l = { ...t };
                    return delete l[e.id], l;
                }),
                H(T - 1, "back");
        }, [t, E, T, H]),
        X = T > 0 && !E,
        J = i.useCallback(() => {
            let e = O.trim();
            "" !== e && Q({ kind: "custom", text: e });
        }, [O, Q]),
        [Z, ee] = i.useState(!1),
        [et, el] = i.useState(!1);
    i.useEffect(() => {
        let e = 0,
            t = requestAnimationFrame(() => {
                e = requestAnimationFrame(() => ee(!0));
            });
        return () => {
            cancelAnimationFrame(t), cancelAnimationFrame(e);
        };
    }, []);
    let en = i.useCallback(() => {
            null != n && (el(!0), setTimeout(n, 150));
        }, [n]),
        ea = i.useCallback(() => {
            E || T >= I - 1 || H(T + 1, "forward");
        }, [E, T, I, H]),
        ei = T < I - 1 && !E;
    return (0, a.jsxs)("section", {
        className: s()(l7.$O, { [l7.fI]: Z && !et, [l7.Oh]: et }),
        role: "dialog",
        "aria-label": M.question,
        "data-vibegrations-clarification": t.id,
        "data-state": E ? "inert" : "open",
        "data-question-expanded": F ? "true" : void 0,
        "data-step": T,
        children: [
            (0, a.jsxs)("div", {
                className: l7.rf,
                style: null == j ? void 0 : { height: j.heading + j.rows },
                "data-moving": y ? "" : void 0,
                children: [
                    (0, a.jsxs)("div", {
                        ref: k,
                        className: l7.wx,
                        children: [
                            (0, a.jsx)(v.E, {
                                ref: w,
                                tag: "span",
                                id: `${M.id}-label`,
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                selectable: !0,
                                lineClamp: F ? void 0 : 5,
                                className: s()(l7.TK, l7.R_, { [l7.TB]: "exit" === $, [l7.JU]: "enter" === $ }),
                                children: G,
                            }),
                            B || F
                                ? (0, a.jsx)("div", {
                                      className: l7.Q7,
                                      children: (0, a.jsx)(eL.m, {
                                          text: U,
                                          children: (0, a.jsx)(lJ.K, {
                                              icon: F ? lZ.t : l0.a,
                                              size: "sm",
                                              variant: "icon-only",
                                              onClick: () => L({ id: M.id, expanded: !F }),
                                              "aria-label": U,
                                              "aria-controls": `${M.id}-label`,
                                              "aria-expanded": F,
                                          }),
                                      }),
                                  })
                                : null,
                            null == n
                                ? null
                                : (0, a.jsx)(eC.D, {
                                      className: s()(l7.gb, l7.Q7),
                                      onClick: en,
                                      "aria-label": P.intl.string(_.default.fMdUNR),
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
                        className: l7.Cg,
                        style: null == j ? void 0 : { insetBlockStart: j.heading },
                        children: (0, a.jsxs)("div", {
                            className: l7.I,
                            children: [
                                (0, a.jsxs)("div", {
                                    ref: S,
                                    className: l7.Ge,
                                    role: "group",
                                    "aria-labelledby": `${M.id}-label`,
                                    "data-direction": h?.direction,
                                    "data-parity": null == h ? void 0 : h.moves % 2,
                                    children: [
                                        M.options.map((e, t) =>
                                            (0, a.jsx)(
                                                l3,
                                                {
                                                    option: e,
                                                    position: t + 1,
                                                    disabled: E,
                                                    onPick: (e) => Q({ kind: "option", optionId: e.id, text: e.label }),
                                                },
                                                e.id,
                                            ),
                                        ),
                                        (0, a.jsxs)("div", {
                                            className: l7.Xy,
                                            children: [
                                                (0, a.jsx)("span", {
                                                    className: l7.Gy,
                                                    "aria-hidden": !0,
                                                    children: (0, a.jsx)(lX.PencilIcon, {
                                                        size: "custom",
                                                        width: 20,
                                                        height: 20,
                                                        color: "currentColor",
                                                    }),
                                                }),
                                                (0, a.jsx)(tT.y, {
                                                    value: O,
                                                    onChange: (e) => {
                                                        let { value: t } = e.currentTarget;
                                                        c((e) => ({ ...e, [M.id]: t }));
                                                    },
                                                    onKeyDown: (e) => {
                                                        "Enter" !== e.key ||
                                                            e.shiftKey ||
                                                            e.nativeEvent.isComposing ||
                                                            (e.preventDefault(), J());
                                                    },
                                                    placeholder: P.intl.string(_.default.qifsdL),
                                                    "aria-label": P.intl.formatToPlainString(_.default.XHESTL, {
                                                        question: M.question,
                                                    }),
                                                    disabled: E,
                                                    rows: 1,
                                                    className: l7.Pu,
                                                    "data-vibegrations-clarification-other": M.id,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                null == x
                                    ? null
                                    : (0, a.jsx)(
                                          l4,
                                          { question: x.question, draft: x.draft, direction: x.direction, disabled: E },
                                          x.moves,
                                      ),
                            ],
                        }),
                    }),
                ],
            }),
            I > 1
                ? (0, a.jsxs)("div", {
                      className: l7.qr,
                      children: [
                          (0, a.jsx)(v.E, {
                              tag: "span",
                              variant: "text-sm/medium",
                              color: "text-muted",
                              "aria-live": "polite",
                              "data-vibegrations-clarification-progress": !0,
                              children: P.intl.formatToPlainString(_.default["7bypa+"], { index: T + 1, total: I }),
                          }),
                          (0, a.jsxs)("div", {
                              className: l7.Np,
                              children: [
                                  (0, a.jsx)(eC.D, {
                                      className: s()(l7.gb, { [l7.yI]: !X }),
                                      onClick: X ? K : void 0,
                                      tabIndex: X ? 0 : -1,
                                      "aria-hidden": !X,
                                      "aria-disabled": E,
                                      "aria-label": P.intl.string(_.default.KYpgvZ),
                                      "data-vibegrations-clarification-back": !0,
                                      "data-hidden": X ? void 0 : "true",
                                      children: (0, a.jsx)(l1.r, {
                                          size: "custom",
                                          width: 20,
                                          height: 20,
                                          color: "currentColor",
                                      }),
                                  }),
                                  (0, a.jsx)(eC.D, {
                                      className: s()(l7.gb, { [l7.yI]: !ei }),
                                      onClick: ei ? ea : void 0,
                                      tabIndex: ei ? 0 : -1,
                                      "aria-hidden": !ei,
                                      "aria-disabled": E,
                                      "aria-label": P.intl.string(_.default.AlZqEH),
                                      "data-vibegrations-clarification-next": !0,
                                      "data-hidden": ei ? void 0 : "true",
                                      children: (0, a.jsx)(l2.E, {
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
var l8 = l(643278),
    l9 = l(191521),
    ne = l(405189);
function nt(e) {
    let { line: t, placement: l, todos: n, provisionalTodo: r, agents: o, onJumpToActivity: u } = e,
        d = null != l,
        [c, m] = i.useState(l ?? "top"),
        [f, h] = i.useState(d),
        [g, x] = i.useState(!1),
        [p, v] = i.useState(!1),
        [j, b] = i.useState(d);
    j !== d && (b(d), null != l ? (m(l), h(!0)) : (x(!1), v(!1))),
        i.useEffect(() => {
            if (d || !f) return;
            let e = setTimeout(() => h(!1), 150);
            return () => clearTimeout(e);
        }, [d, f]),
        i.useEffect(() => {
            if (!f || !d) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => x(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [f, d]);
    let [y, A] = i.useState(!1),
        [k, N] = i.useState(!1),
        [w, S] = i.useState(p);
    w !== p && (S(p), p ? A(!0) : N(!1)),
        i.useEffect(() => {
            if (p || !y) return;
            let e = setTimeout(() => A(!1), 150);
            return () => clearTimeout(e);
        }, [p, y]),
        i.useEffect(() => {
            if (!y || !p) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => N(!0));
                });
            return () => {
                cancelAnimationFrame(t), cancelAnimationFrame(e);
            };
        }, [y, p]);
    let C = null != n && n.length > 0,
        E = i.useCallback(() => v((e) => !e), []);
    return f
        ? (0, a.jsxs)("div", {
              className: ne.qd,
              "data-placement": c,
              "data-vibegrations-floating-activity": !0,
              children: [
                  (0, a.jsxs)("div", {
                      className: s()(ne.vK, { [ne.ho]: g && d, [ne.ET]: !d }),
                      children: [
                          null == u
                              ? (0, a.jsx)("ol", {
                                    className: s()(ne.Rk, to.pj),
                                    "data-live": "true",
                                    children: (0, a.jsx)(eZ.A, {
                                        glyph: (0, a.jsx)(l9.A, {}),
                                        line: t,
                                        live: !0,
                                        settled: !1,
                                    }),
                                })
                              : (0, a.jsx)(eC.D, {
                                    className: ne.pZ,
                                    onClick: u,
                                    "aria-label": P.intl.string(_.default.tYjQFG),
                                    children: (0, a.jsx)("ol", {
                                        className: s()(ne.Rk, to.pj),
                                        "data-live": "true",
                                        children: (0, a.jsx)(eZ.A, {
                                            glyph: (0, a.jsx)(l9.A, {}),
                                            line: t,
                                            live: !0,
                                            settled: !1,
                                        }),
                                    }),
                                }),
                          C
                              ? (0, a.jsx)(eL.m, {
                                    text: P.intl.string(_.default.qCRC6c),
                                    ariaHidden: !0,
                                    children: (0, a.jsx)(eC.D, {
                                        className: ne.BO,
                                        onClick: E,
                                        "aria-expanded": p,
                                        "aria-label": P.intl.string(_.default.qCRC6c),
                                        children: (0, a.jsx)(l8.ClipboardListIcon, {
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
                  y && C
                      ? (0, a.jsx)("div", {
                            className: s()(ne.vB, { [ne.pg]: p && k, [ne.ui]: !p }),
                            children: (0, a.jsx)(tp, { todos: n, provisional: r, agents: o, announceProgress: !1 }),
                        })
                      : null,
              ],
          })
        : null;
}
var nl = l(366010),
    nn = l(825484),
    na = l(859703),
    ni = l(738822),
    nr = l(291749),
    ns = l(971276),
    no = l(590202),
    nu = l(710969),
    nd = l(792620),
    nc = l(201805),
    nm = l(617986),
    nf = l(363195),
    nh = l(749414);
let ng = !1;
function nx(e) {
    let t,
        l,
        n,
        { open: r } = e,
        s =
            ((t = (0, nc.dN)()),
            (l = (0, k.bG)([na.A], () => na.A.isQuestAccessSuspended || null != na.A.questEnrollmentBlockedUntil, [])),
            (n = (0, k.bG)([na.A], () => null != na.A.getQuestPreviewOverride(ni.uF.QUEST_BAR_V2), [])),
            null != t && (0, nd.vv)(t)
                ? n
                    ? t.userStatus?.claimedAt != null
                        ? null
                        : t
                    : !(0, ns.s)() || l || (0, nu.Ic)(t) || t.userStatus?.completedAt != null
                      ? null
                      : t
                : null),
        [o, u] = i.useState(() => ng),
        { mounted: d, closing: c } = (function (e) {
            let [t, l] = i.useState(e),
                [n, a] = i.useState(!1),
                r = i.useRef(null);
            return (
                e && (!t || n) ? (l(!0), a(!1)) : e || !t || n || a(!0),
                i.useEffect(() => {
                    if (!e && t)
                        return (
                            (r.current = setTimeout(() => {
                                (r.current = null), a(!1), l(!1);
                            }, 150)),
                            () => {
                                null != r.current && (clearTimeout(r.current), (r.current = null));
                            }
                        );
                }, [e, t, 150]),
                { mounted: t, closing: n }
            );
        })(r && !o && null != s),
        [m, f] = i.useState(s);
    null != s && s !== m && f(s);
    let g = s ?? m,
        x = (0, k.bG)([nf.A], () => nf.A.getState().theme),
        p = (0, nl.M)(x) ? E.NJ8.DARK : E.NJ8.LIGHT,
        j = null != g ? (0, nr.tW)(g, nr.fY.GAME_TILE, p).url : null,
        b = null != j && "" !== j ? j : null,
        y = i.useCallback(async () => {
            if (null == s) return;
            let e = {
                questContent: ni.uF.QUEST_BAR_V2,
                sourceQuestContent: ni.uF.QUEST_BAR_V2,
                sourceQuestContentCTA: no.Cy.WATCH_VIDEO,
            };
            s.userStatus?.enrolledAt != null
                ? (0, nm.d5)({ quest: s, ...e })
                : await (0, nm.e0)(s, { ...e, questContentCTA: no.Cy.ACCEPT_QUEST });
        }, [s]),
        A = i.useCallback(() => {
            (ng = !0), u(!0);
        }, []);
    return d && null != g
        ? (0, a.jsxs)("aside", {
              className: nh.f4,
              "data-vibegrations-quest-prompt": !0,
              "data-state": c ? "closing" : "open",
              "aria-hidden": c,
              children: [
                  null != b
                      ? (0, a.jsxs)("div", {
                            className: nh.As,
                            "data-vibegrations-quest-glow": !0,
                            "aria-hidden": !0,
                            children: [
                                (0, a.jsx)("img", { className: nh.Rx, src: b, alt: "" }),
                                (0, a.jsx)("div", { className: nh._e }),
                            ],
                        })
                      : null,
                  (0, a.jsxs)("div", {
                      className: nh.iB,
                      children: [
                          null != b ? (0, a.jsx)("img", { className: nh.w1, src: b, alt: "" }) : null,
                          (0, a.jsxs)("div", {
                              className: nh.Ug,
                              children: [
                                  (0, a.jsx)(v.E, {
                                      variant: "text-md/semibold",
                                      color: "text-strong",
                                      children: P.intl.string(_.default["09LJ+I"]),
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
                  (0, a.jsxs)(nn.e, {
                      direction: "horizontal",
                      fullWidth: !0,
                      wrap: !1,
                      children: [
                          (0, a.jsx)(h.$, {
                              variant: "secondary",
                              size: "sm",
                              fullWidth: !0,
                              onClick: A,
                              text: P.intl.string(_.default.egO5fO),
                          }),
                          (0, a.jsx)(h.$, {
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
var np = l(651649),
    nv = l(670455);
let nj = "shownVibegrationsFeedbackProjectIds";
var nb = l(348800);
let ny = [P.intl.string(_.default["E+Q26x"]), P.intl.string(_.default["06/jqP"]), P.intl.string(_.default["3gSfUa"])];
function nA(e) {
    let { projectId: t, restoreState: n } = e,
        r = (0, k.bG)([eA.Ay], () => eA.Ay.getMessages(t), [t]),
        s = (0, k.bG)([m.Ay], () => m.Ay.getConnState(t), [t]),
        o = (0, k.bG)([m.Ay], () => m.Ay.isChatStopped(t), [t]),
        u = (0, k.bG)([eA.Ay], () => eA.Ay.getProjectUsage(t), [t]),
        d = (0, k.bG)([eA.Ay], () => eA.Ay.getThinkingActivity(t), [t]),
        c = (0, k.bG)([eA.Ay], () => eA.Ay.isCompacting(t), [t]),
        f = (0, k.bG)([m.Ay], () => m.Ay.getModelSettings(t), [t]),
        h = i.useRef(null),
        g = i.useRef(null),
        x = i.useRef(null),
        p = i.useRef(!0),
        [v, j] = i.useState(!0);
    i.useEffect(() => {
        p.current && g.current?.scrollToBottom();
    }, [r]);
    let b = i.useCallback(() => {
            let e = h.current;
            if (null == e) return;
            let t = e.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]'),
                l = e.querySelectorAll('[data-vibegrations-turn-status="true"]'),
                n = t ?? l[l.length - 1];
            if (null == n) return;
            let a = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === !0;
            n.scrollIntoView({ block: "center", behavior: a ? "auto" : "smooth" });
        }, []),
        y = i.useCallback(() => {
            let e = g.current;
            if (null == e) return;
            let t = e.getDistanceFromBottom();
            p.current = t < 32;
            let l = t > 1;
            j((e) => (!l === e ? e : !l));
        }, []);
    i.useLayoutEffect(() => {
        let e = h.current,
            t = x.current;
        if (null == e) return;
        let l = g.current?.getScrollerNode(),
            n = e.getBoundingClientRect().width,
            a = t?.getBoundingClientRect().height,
            i = l?.getBoundingClientRect().height,
            r = null;
        function s() {
            p.current &&
                (null != r && cancelAnimationFrame(r), (r = requestAnimationFrame(() => g.current?.scrollToBottom())));
        }
        let o = new ResizeObserver((t) => {
            for (let r of t)
                if (r.target === e) {
                    let e = r.contentRect.width;
                    if (e === n) continue;
                    (n = e), s();
                } else if (r.target === l) {
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
            null != l && o.observe(l),
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
                        ((tq.w.get(nj) ?? []).includes(e) ||
                            np.A.possiblyShowFeedbackModal(nv.MW.VIBEGRATIONS, () => {
                                let n;
                                (n = tq.w.get(nj) ?? []).includes(e) || tq.w.set(nj, [...n, e]),
                                    (0, eW.openModalLazy)(async () => {
                                        let { default: n } = await Promise.all([
                                            l.e("312513"),
                                            l.e("104143"),
                                            l.e("155925"),
                                            l.e("218413"),
                                            l.e("137381"),
                                            l.e("847004"),
                                            l.e("341676"),
                                        ]).then(l.bind(l, 580711));
                                        return (l) => (0, a.jsx)(n, { ...l, projectId: e, promptCount: t });
                                    });
                            }));
                })(t),
            [t],
        );
    let A = i.useCallback(
            (e, l) => {
                (0, m.dv)(t, e, l);
            },
            [t],
        ),
        N = i.useCallback(() => (0, m.fu)(t), [t]),
        w = i.useCallback((e) => A(e.implementation_prompt), [A]),
        S = i.useCallback((e) => A(e), [A]),
        C = i.useCallback((e) => (0, m.XZ)(t, e), [t]),
        E = i.useCallback((e) => (0, m.vX)(t, e), [t]),
        I = i.useCallback((e) => (0, m.Vm)(t, e), [t]),
        T = i.useCallback(() => A(P.intl.string(_.default.Jj8Ftb)), [A]),
        M = n?.status === "restoring",
        R = "open" === s && !o && !M,
        L = r[r.length - 1],
        F = null != L && "assistant" === L.role && null != L.proposal,
        [D, q] = i.useState(null),
        O = L?.clarification != null && L.clarification.id !== D ? L.clarification : null,
        G = i.useCallback(() => {
            null != O && q(O.id);
        }, [O]),
        $ = (0, k.bG)([eA.Ay], () => eA.Ay.hasLoadedHistory(t), [t]),
        z = i.useMemo(() => {
            let e = 0;
            for (let l = 0; l < t.length; l++) e = (31 * e + t.charCodeAt(l)) % 0x7fffffff;
            return ny[e % ny.length];
        }, [t]),
        B = F
            ? P.intl.string(_.default.Jj8Ftb)
            : L?.kind === "plan_implemented"
              ? P.intl.string(_.default["3sTTBu"])
              : $ && 0 === r.length
                ? z
                : null,
        U = i.useMemo(() => {
            for (let e = r.length - 1; e >= 0; e--) {
                let t = r[e];
                if ("assistant" === t.role && !(0, eA.BL)(t)) return t;
            }
        }, [r]),
        V = null != U,
        H = F && R ? T : void 0,
        [W, Y] = i.useState(null),
        [Q, K] = i.useState(V);
    Q !== V && (K(V), V || Y(null)),
        i.useEffect(() => {
            if (!V) return;
            let e = g.current?.getScrollerNode(),
                t = e?.querySelector('[data-vibegrations-turn-status="true"][data-live="true"]');
            if (null == e || null == t) return;
            let l = new IntersectionObserver(
                (e) => {
                    let [t] = e;
                    null == t || t.isIntersecting || null == t.rootBounds
                        ? Y(null)
                        : Y(t.boundingClientRect.top < t.rootBounds.top ? "top" : "bottom");
                },
                { root: e, threshold: 0 },
            );
            return l.observe(t), () => l.disconnect();
        }, [V, U?.steps]);
    let X = i.useMemo(() => (null != U ? (0, ek.b9)(U.steps) : ""), [U]),
        J = i.useMemo(() => (null != U ? ((0, ey.lt)(U.steps) ?? U.todos) : void 0), [U]),
        Z = U?.provisionalTodo,
        ee = i.useMemo(() => {
            var e;
            return null != U ? ((e = U.steps), tb((0, ey.GO)(e, { turnActive: !0 }).tasks)) : void 0;
        }, [U]);
    return (0, a.jsxs)("section", {
        ref: h,
        "data-vibegrations-chat": !0,
        className: nb.TE,
        children: [
            (0, a.jsx)(nx, { open: null != U }),
            (0, a.jsx)(nt, {
                onJumpToActivity: b,
                line: X,
                placement: V && "top" === W ? "top" : null,
                todos: J,
                provisionalTodo: Z,
                agents: ee,
            }),
            (0, a.jsxs)("div", {
                className: nb.JX,
                children: [
                    (0, a.jsx)(eb.Ch, {
                        ref: g,
                        onScroll: y,
                        className: v ? nb.N$ : `${nb.N$} ${nb.hB}`,
                        children: (0, a.jsx)(l_, { ref: x, projectId: t, messages: r, onPickIdea: R ? w : void 0 }),
                    }),
                    (0, a.jsx)("div", {
                        className: nb.NJ,
                        children: (0, a.jsx)(lK, {
                            projectId: t,
                            thinking: V,
                            restoring: M,
                            thinkingActivity: d,
                            compacting: c,
                            projectUsage: u,
                            connState: s,
                        }),
                    }),
                    null == O
                        ? null
                        : (0, a.jsx)("div", {
                              className: nb.B5,
                              children: (0, a.jsx)(
                                  l5,
                                  { clarification: O, onSubmit: R ? S : void 0, onDismiss: G },
                                  O.id,
                              ),
                          }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: nb.Jx,
                children: [
                    (0, a.jsx)(nt, {
                        onJumpToActivity: b,
                        line: X,
                        placement: V && "bottom" === W ? "bottom" : null,
                        todos: J,
                        provisionalTodo: Z,
                        agents: ee,
                    }),
                    (0, a.jsx)(tJ, {
                        projectId: t,
                        canSend: R,
                        stopped: o,
                        running: V,
                        restoring: M,
                        onSend: A,
                        onInterrupt: R ? N : void 0,
                        onUploadFile: E,
                        onDeleteFile: I,
                        onApprove: H,
                        suggestion: B,
                        questionOpen: null != O,
                        modelSettings: f,
                        onModelSettingsChange: C,
                    }),
                ],
            }),
        ],
    });
}
var nk = l(661531),
    nN = l(602853),
    nw = l(517461),
    nS = l(761929),
    nC = l(927506);
function nE(e) {
    let { open: t, maxWidth: l, onWidthChange: n, children: r } = e,
        s = (0, nN.r)(nk.A.modules.chat.RESIZE_HANDLE_WIDTH),
        o = i.useRef(null),
        [u, d] = (0, nw.V)("VibegrationsChatSidebarWidth", 460),
        [c, m] = i.useState(u ?? 460),
        f = (0, tF.clamp)(c, 360, l);
    i.useLayoutEffect(() => {
        n(t ? f + s : 0);
    }, [f, t, s, n]);
    let h = (0, nS.A)({
            minDimension: 360,
            maxDimension: l,
            resizableDomNodeRef: o,
            onElementResize: m,
            onElementResizeEnd: d,
            orientation: nS.R.HORIZONTAL_LEFT,
            throttleDuration: 16,
            usePointerEvents: !0,
        }),
        g = i.useCallback(
            (e) => {
                0 === e.button && (e.currentTarget.setPointerCapture(e.pointerId), h(e));
            },
            [h],
        );
    return (0, a.jsxs)("div", {
        className: nC.pz,
        hidden: !t,
        children: [
            (0, a.jsx)("div", { className: nC.Di, onPointerDown: g }),
            (0, a.jsx)("div", { ref: o, className: nC.kL, style: { width: f }, children: r }),
        ],
    });
}
var nI = l(691540),
    nT = l(857250),
    nM = l(97483),
    n_ = l(624479),
    nP = l(92446),
    nR = l(761508),
    nL = l(957565);
let nF = new Map(),
    nD = new Map(),
    nq = new Map(),
    nO = new Map(),
    nG = new Map();
class n$ extends k.Ay.Store {
    getStatus(e) {
        return nF.get(e) ?? null;
    }
    getFetchState(e) {
        return nD.get(e) ?? "idle";
    }
    getLastCompaction(e) {
        return nq.get(e) ?? null;
    }
    getLastTurnUsage(e) {
        return nG.get(e) ?? null;
    }
    getLastCompactionDecline(e) {
        return nO.get(e) ?? null;
    }
}
let nz = new n$(tO.h, {
    LOGOUT: function () {
        if (0 === nF.size && 0 === nD.size && 0 === nq.size && 0 === nO.size && 0 === nG.size) return !1;
        nF.clear(), nD.clear(), nq.clear(), nO.clear(), nG.clear();
    },
    VIBEGRATIONS_DEBUG_STATUS_REQUESTED: function (e) {
        let { projectId: t } = e;
        nD.set(t, "loading");
    },
    VIBEGRATIONS_CHAT_CONN_STATE: function (e) {
        let { projectId: t, connState: l } = e;
        if ("open" === l || "loading" !== nD.get(t)) return !1;
        nD.set(t, "failed");
    },
    VIBEGRATIONS_DEBUG_STATUS_SET: function (e) {
        let { projectId: t, status: l, failed: n } = e;
        n || null == l ? nD.set(t, "failed") : (nF.set(t, l), nD.set(t, "loaded"));
    },
    VIBEGRATIONS_DEBUG_COMPACTION_REPORT: function (e) {
        nq.set(e.projectId, {
            tokensBefore: e.tokensBefore,
            tokensAfter: e.tokensAfter,
            retainedMessages: e.retainedMessages,
            promptCeiling: e.promptCeiling,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_DEBUG_COMPACTION_DECLINED: function (e) {
        nO.set(e.projectId, {
            promptCeiling: e.promptCeiling,
            threshold: e.threshold,
            projected: e.projected,
            headroom: e.headroom,
            retainedMessages: e.retainedMessages,
            observedAt: e.observedAt,
        });
    },
    VIBEGRATIONS_CHAT_USAGE_SET: function (e) {
        let { projectId: t, turn: l } = e;
        if (0 === (0, tL.aM)(l.total)) return !1;
        nG.set(t, l);
    },
    VIBEGRATIONS_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        nF.delete(t), nD.delete(t), nq.delete(t), nO.delete(t), nG.delete(t);
    },
});
var nB = l(972786);
function nU(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1024) return `${Math.round(e)} B`;
    let t = e / 1024;
    if (t < 1024) return `${t >= 100 ? Math.round(t) : t.toFixed(1)} KB`;
    let l = t / 1024;
    if (l < 1024) return `${l >= 100 ? Math.round(l) : l.toFixed(1)} MB`;
    let n = l / 1024;
    return `${n >= 100 ? Math.round(n) : n.toFixed(1)} GB`;
}
function nV(e) {
    if (!Number.isFinite(e) || e < 0) return "\u2014";
    if (e < 1) return `${e.toFixed(2)} ms`;
    if (e < 1e3) return `${e >= 100 ? Math.round(e) : e.toFixed(1)} ms`;
    let t = e / 1e3;
    return t < 60 ? `${t >= 10 ? Math.round(t) : t.toFixed(1)} s` : `${Math.floor(t / 60)} m ${Math.round(t % 60)} s`;
}
function nH(e) {
    return Number.isFinite(e) ? e.toLocaleString() : "\u2014";
}
function nW(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return e;
    let l = new Date();
    return t.getFullYear() === l.getFullYear() && t.getMonth() === l.getMonth() && t.getDate() === l.getDate()
        ? t.toLocaleTimeString()
        : t.toLocaleString();
}
function nY(e) {
    let t = e.split("/").filter((e) => "" !== e),
        l = t[t.length - 1] ?? e;
    return l.length > 12 ? l.slice(0, 12) : l;
}
var nQ = l(69985);
function nK(e) {
    let { generatedAt: t, fetchState: l, onRefresh: n } = e;
    return (0, a.jsxs)("div", {
        className: nQ.KE,
        children: [
            (0, a.jsx)("div", {
                className: nQ.IQ,
                children:
                    "loading" === l
                        ? (0, a.jsx)(f.y, { type: f.t.PULSING_ELLIPSIS })
                        : "failed" === l
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-feedback-critical",
                                role: "alert",
                                children: P.intl.string(_.default["K+FvtM"]),
                            })
                          : null != t
                            ? (0, a.jsx)(v.E, {
                                  variant: "text-xs/normal",
                                  color: "text-muted",
                                  children: P.intl.formatToPlainString(_.default["4NpaEk"], { time: nW(t) }),
                              })
                            : null,
            }),
            (0, a.jsx)(h.$, { variant: "secondary", size: "sm", text: P.intl.string(_.default.aw0IJm), onClick: n }),
        ],
    });
}
function nX(e) {
    let { title: t, children: l } = e;
    return (0, a.jsxs)("section", {
        className: nQ.uW,
        "aria-label": t,
        children: [
            (0, a.jsx)(v.E, { variant: "text-xs/semibold", color: "text-muted", className: nQ.Gf, children: t }),
            l,
        ],
    });
}
function nJ(e) {
    let { label: t, value: l, hint: n, critical: i = !1 } = e;
    return (0, a.jsxs)("div", {
        className: nQ.N8,
        children: [
            (0, a.jsxs)("div", {
                className: nQ.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: i ? "text-feedback-critical" : "text-default",
                        children: l,
                    }),
                ],
            }),
            null != n && (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
        ],
    });
}
function nZ(e) {
    let { label: t, used: l, max: n, formatValue: i } = e,
        r = n > 0 ? Math.min(1, Math.max(0, l / n)) : 0,
        s = r >= 0.9;
    return (0, a.jsxs)("div", {
        className: nQ.N8,
        children: [
            (0, a.jsxs)("div", {
                className: nQ.x7,
                children: [
                    (0, a.jsx)(v.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
                    (0, a.jsx)(v.E, {
                        variant: "text-sm/medium",
                        color: s ? "text-feedback-critical" : "text-default",
                        children: `${i(l)} / ${i(n)}`,
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: nQ.xA,
                role: "meter",
                "aria-label": t,
                "aria-valuemin": 0,
                "aria-valuemax": n,
                "aria-valuenow": Math.min(l, n),
                "aria-valuetext": `${i(l)} of ${i(n)}`,
                children: (0, a.jsx)("div", {
                    className: s ? nQ.aV : nQ.jE,
                    "data-testid": "debug-meter-fill",
                    style: { "--custom-vibegrations-debug-meter-fraction": String(r) },
                }),
            }),
        ],
    });
}
var n0 = l(522652);
function n1(e, t) {
    return (0, a.jsx)(nJ, {
        label: e,
        value: P.intl.formatToPlainString(_.default.U98VaN, { count: nH((0, tL.aM)(t)) }),
        hint: `${nH(t.input_tokens)} in \xb7 ${nH(t.output_tokens)} out \xb7 ${nH(t.cache_read_input_tokens)} cache read`,
    });
}
function n2(e) {
    let { projectId: t, status: l, fetchState: n, onRefresh: i } = e,
        r = (0, k.bG)([nz], () => nz.getLastTurnUsage(t), [t]),
        s = (0, k.bG)([nz], () => nz.getLastCompaction(t), [t]),
        o = (0, k.bG)([nz], () => nz.getLastCompactionDecline(t), [t]),
        u = l?.agent?.lifetime ?? null,
        d = l?.agent?.limits ?? null,
        c = s?.promptCeiling ?? d?.context_window_tokens ?? null;
    return (0, a.jsxs)("div", {
        className: n0.M,
        children: [
            (0, a.jsx)(nK, { generatedAt: l?.generated_at ?? null, fetchState: n, onRefresh: i }),
            (0, a.jsx)(nX, {
                title: P.intl.string(_.default.IYpHtT),
                children:
                    null == u
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(_.default.gPabB9),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(nJ, {
                                      label: P.intl.string(_.default["8MSJDH"]),
                                      value: nH((0, tL.a7)(u.cost_usd)),
                                      hint: P.intl.formatToPlainString(_.default["6Z2KhK"], { count: nH(u.turns) }),
                                  }),
                                  n1(P.intl.string(_.default.hk4jJr), u.orchestrator),
                                  n1(P.intl.string(_.default.R9aduM), u.codegen),
                                  n1(P.intl.string(_.default.Tj6b30), (0, tL.wU)(u.compaction)),
                                  l?.agent?.outcomes != null &&
                                      Object.keys(l.agent.outcomes).length > 0 &&
                                      (0, a.jsx)(nJ, {
                                          label: P.intl.string(_.default.Q2OlgI),
                                          value: Object.entries(l.agent.outcomes)
                                              .sort((e, t) => {
                                                  let [, l] = e,
                                                      [, n] = t;
                                                  return n - l;
                                              })
                                              .map((e) => {
                                                  let [t, l] = e;
                                                  return `${nH(l)} ${t}`;
                                              })
                                              .join(" \xb7 "),
                                      }),
                              ],
                          }),
            }),
            (0, a.jsx)(nX, {
                title: P.intl.string(_.default.lo4mY6),
                children:
                    null == r
                        ? (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: P.intl.string(_.default.uyPveL),
                          })
                        : (0, a.jsxs)(a.Fragment, {
                              children: [
                                  n1(P.intl.string(_.default["VwF+oY"]), r.total),
                                  (0, a.jsx)(nJ, {
                                      label: P.intl.string(_.default["kILb+R"]),
                                      value: `${Math.round((r.cache_hit_rate ?? (0, tL.CA)(r.total)) * 100)}%`,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsxs)(nX, {
                title: P.intl.string(_.default.mn8279),
                children: [
                    null != s && null != c
                        ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                  (0, a.jsx)(nZ, {
                                      label: P.intl.string(_.default.dKFhCg),
                                      used: s.tokensAfter,
                                      max: c,
                                      formatValue: nH,
                                  }),
                                  (0, a.jsx)(nJ, {
                                      label: P.intl.string(_.default.ntZb8d),
                                      value: `${nH(s.tokensBefore)} \u{2192} ${nH(s.tokensAfter)}`,
                                      hint: P.intl.formatToPlainString(_.default.jA05ru, {
                                          count: nH(s.retainedMessages),
                                          time: nW(s.observedAt),
                                      }),
                                  }),
                              ],
                          })
                        : (0, a.jsx)(v.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  null != c
                                      ? P.intl.formatToPlainString(_.default.LKGmsP, { ceiling: nH(c) })
                                      : P.intl.string(_.default.gPabB9),
                          }),
                    null != o &&
                        (0, a.jsx)(nJ, {
                            label: P.intl.string(_.default["se+2ls"]),
                            value: `${nH(o.projected)} / ${nH(o.threshold)}`,
                            critical: !0,
                            hint: P.intl.formatToPlainString(_.default.KHK44U, { time: nW(o.observedAt) }),
                        }),
                ],
            }),
            l?.agent?.session != null &&
                (0, a.jsxs)(nX, {
                    title: P.intl.string(_.default.ZRxAPD),
                    children: [
                        (0, a.jsx)(nJ, {
                            label: P.intl.string(_.default["wt5X/o"]),
                            value: nW(l.agent.session.instance_since),
                            hint: P.intl.string(_.default.QX2UQC),
                        }),
                        (0, a.jsx)(nJ, {
                            label: P.intl.string(_.default["4lgurx"]),
                            value: nH(l.agent.session.sockets),
                        }),
                        (0, a.jsx)(nJ, {
                            label: P.intl.string(_.default["a/LXBt"]),
                            value: l.agent.session.turn_inflight
                                ? P.intl.string(_.default["9KlveJ"])
                                : P.intl.string(_.default["4tYZVa"]),
                        }),
                        l.agent.session.queued_messages > 0 &&
                            (0, a.jsx)(nJ, {
                                label: P.intl.string(_.default["/hOBkc"]),
                                value: nH(l.agent.session.queued_messages),
                            }),
                    ],
                }),
            null != d &&
                (0, a.jsxs)(nX, {
                    title: P.intl.string(_.default["EmSF+A"]),
                    children: [
                        (0, a.jsx)(nJ, { label: P.intl.string(_.default["5iHZLk"]), value: nH(d.max_iterations) }),
                        (0, a.jsx)(nJ, {
                            label: P.intl.string(_.default.Rb6m3E),
                            value: nH(d.max_subagent_iterations),
                        }),
                        (0, a.jsx)(nJ, {
                            label: P.intl.string(_.default.WQ9pMe),
                            value: P.intl.formatToPlainString(_.default.U98VaN, { count: nH(d.context_window_tokens) }),
                        }),
                        (0, a.jsx)(nJ, {
                            label: P.intl.string(_.default.iEAvzu),
                            value: P.intl.formatToPlainString(_.default.U98VaN, {
                                count: nH(d.per_turn_max_output_tokens),
                            }),
                        }),
                        (0, a.jsx)(nJ, {
                            label: P.intl.string(_.default["jbhs+f"]),
                            value: nH(d.max_user_message_chars),
                        }),
                        (0, a.jsx)(nJ, { label: P.intl.string(_.default.TOQnq4), value: nH(d.max_build_attempts) }),
                        (0, a.jsx)(nJ, { label: P.intl.string(_.default.RIDc6D), value: nH(d.max_session_attempts) }),
                    ],
                }),
        ],
    });
}
var n6 = l(320448),
    n7 = l(629584),
    n3 = l(683438),
    n4 = l(849363);
function n5(e) {
    let { state: t } = e;
    return "failed" !== t.status
        ? null
        : (0, a.jsx)("div", {
              className: n4.ut,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  children: P.intl.string(_.default.TV42NS),
              }),
          });
}
function n8(e) {
    let { state: t, emptyTitle: l, emptyBody: n } = e;
    return "failed" === t.status
        ? (0, a.jsxs)("div", {
              className: n4.qf,
              children: [
                  (0, a.jsx)(v.E, {
                      variant: "text-sm/medium",
                      color: "text-default",
                      children: P.intl.string(_.default.TV42NS),
                  }),
                  (0, a.jsx)(v.E, {
                      variant: "text-xs/normal",
                      color: "text-muted",
                      children: P.intl.string(_.default["+2AMt1"]),
                  }),
              ],
          })
        : (0, a.jsxs)("div", {
              className: n4.qf,
              children: [
                  (0, a.jsx)(v.E, { variant: "text-sm/medium", color: "text-default", children: l }),
                  (0, a.jsx)(v.E, { variant: "text-xs/normal", color: "text-muted", children: n }),
              ],
          });
}
function n9(e) {
    let { state: t } = e;
    return t.truncated
        ? (0, a.jsx)("div", {
              className: n4.ps,
              children: (0, a.jsx)(v.E, {
                  variant: "text-xs/normal",
                  color: "text-muted",
                  children: P.intl.string(_.default["U/qDX9"]),
              }),
          })
        : null;
}
var ae = l(417397);
let at = ["all", "preview", "stable", "web"],
    al = i.memo(function (e) {
        var t;
        let { entry: l, showSource: n } = e,
            [r, s] = i.useState(!1),
            o = i.useId(),
            u = i.useMemo(
                () =>
                    (function (e) {
                        let t;
                        if (e.length > 16e3) return null;
                        let l = e.indexOf("{"),
                            n = e.indexOf("["),
                            a = -1 === l ? n : -1 === n ? l : Math.min(l, n);
                        if (-1 === a) return null;
                        let i = e.slice(a).trim();
                        if (i.length < 2) return null;
                        try {
                            t = JSON.parse(i);
                        } catch {
                            return null;
                        }
                        if ("object" != typeof t || null == t) return null;
                        let r = e.slice(0, a).trim(),
                            s = JSON.stringify(t, null, 2);
                        return Array.isArray(t)
                            ? { prefix: r, pretty: s, marker: "[\u2026]", size: t.length }
                            : { prefix: r, pretty: s, marker: "{\u2026}", size: Object.keys(t).length };
                    })(l.message),
                [l.message],
            ),
            d = "error" === l.level ? "text-feedback-critical" : "text-default";
        return (0, a.jsxs)("div", {
            className: ae.vK,
            children: [
                (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "text-xs/normal",
                    color: "text-subtle",
                    className: ae.Mt,
                    selectable: !0,
                    children: (function (e) {
                        let t = new Date(e);
                        if (Number.isNaN(t.getTime())) return e;
                        let l = String(t.getHours()).padStart(2, "0"),
                            n = String(t.getMinutes()).padStart(2, "0"),
                            a = String(t.getSeconds()).padStart(2, "0");
                        return `${l}:${n}:${a}`;
                    })(l.ts),
                }),
                (0, a.jsx)(v.E, {
                    tag: "span",
                    variant: "text-xxs/semibold",
                    color:
                        "error" === (t = l.level)
                            ? "text-feedback-critical"
                            : "warn" === t
                              ? "text-feedback-warning"
                              : "text-muted",
                    className: ae.dm,
                    children: l.level,
                }),
                (0, a.jsxs)("span", {
                    className: ae.t4,
                    children: [
                        n &&
                            null != l.source &&
                            (0, a.jsx)(v.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-subtle",
                                className: ae.Cq,
                                children: l.source,
                            }),
                        null != l.kind &&
                            (0, a.jsx)(v.E, {
                                tag: "span",
                                variant: "text-xxs/semibold",
                                color: "text-feedback-critical",
                                className: ae.Cq,
                                title: l.build ?? void 0,
                                children: P.intl.string(_.default.GO6JcR),
                            }),
                        null != u
                            ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                      "" !== u.prefix &&
                                          (0, a.jsxs)(v.E, {
                                              tag: "span",
                                              variant: "text-xs/normal",
                                              color: d,
                                              selectable: !0,
                                              children: [u.prefix, " "],
                                          }),
                                      (0, a.jsxs)(eC.D, {
                                          className: ae.Pq,
                                          "aria-expanded": r,
                                          "aria-controls": o,
                                          "aria-label": P.intl.string(_.default.ehmgbH),
                                          onClick: () => s((e) => !e),
                                          children: [
                                              r
                                                  ? (0, a.jsx)(l0.a, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    })
                                                  : (0, a.jsx)(n6._, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        "aria-hidden": !0,
                                                    }),
                                              (0, a.jsxs)(v.E, {
                                                  tag: "span",
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  children: [
                                                      u.marker,
                                                      " ",
                                                      P.intl.formatToPlainString(
                                                          "[\u2026]" === u.marker ? _.default.lXkB6Z : _.default.wkbYxG,
                                                          { count: u.size },
                                                      ),
                                                  ],
                                              }),
                                          ],
                                      }),
                                      r &&
                                          (0, a.jsx)(v.E, {
                                              tag: "div",
                                              variant: "text-xs/normal",
                                              color: d,
                                              className: ae.dF,
                                              selectable: !0,
                                              id: o,
                                              children: u.pretty,
                                          }),
                                  ],
                              })
                            : (0, a.jsx)(v.E, {
                                  tag: "span",
                                  variant: "text-xs/normal",
                                  color: d,
                                  selectable: !0,
                                  children: l.message,
                              }),
                    ],
                }),
            ],
        });
    });
function an(e) {
    let { projectId: t } = e,
        l = (0, k.bG)([nB.A], () => nB.A.getLogs(t), [t]),
        n = (0, k.bG)([nB.A], () => nB.A.getHistoryState(t, "logs")),
        [r, s] = i.useState("all"),
        [o, u] = i.useState(""),
        d = i.useMemo(() => {
            let e = o.trim().toLowerCase();
            return l.filter((t) => {
                var l, n;
                return (
                    "string" == typeof (l = t.log).message &&
                    "string" == typeof l.level &&
                    "string" == typeof l.ts &&
                    ("all" === r ||
                        ("preview" === (n = t.log.source) || "stable" === n || "web" === n ? n : "other") === r) &&
                    ("" === e ||
                        t.log.message.toLowerCase().includes(e) ||
                        t.log.level.includes(e) ||
                        (t.log.source?.toLowerCase().includes(e) ?? !1))
                );
            });
        }, [l, r, o]),
        c = i.useRef(null),
        m = i.useRef(!0);
    i.useEffect(() => {
        m.current && c.current?.scrollToBottom();
    }, [d]);
    let f = i.useCallback(() => {
            let e = c.current;
            null != e && (m.current = 32 > e.getDistanceFromBottom());
        }, []),
        h = i.useMemo(
            () =>
                at.map((e) => ({
                    value: e,
                    name: (function (e) {
                        switch (e) {
                            case "preview":
                                return P.intl.string(_.default["+m8XM6"]);
                            case "stable":
                                return P.intl.string(_.default.kiOVnt);
                            case "web":
                                return P.intl.string(_.default.J2TPCe);
                            default:
                                return P.intl.string(_.default.humq1B);
                        }
                    })(e),
                })),
            [],
        );
    return (0, a.jsxs)("div", {
        className: ae.$F,
        children: [
            (0, a.jsxs)("div", {
                className: ae.y4,
                children: [
                    (0, a.jsx)(n7.I, {
                        look: "pill",
                        "aria-label": P.intl.string(_.default.fhnXnM),
                        options: h,
                        value: r,
                        onChange: (e) => s(e.value),
                    }),
                    (0, a.jsx)("div", {
                        className: ae.KT,
                        children: (0, a.jsx)(n3.I, {
                            query: o,
                            onChange: u,
                            onClear: () => u(""),
                            size: "sm",
                            placeholder: P.intl.string(_.default["MX4vr/"]),
                            "aria-label": P.intl.string(_.default["MX4vr/"]),
                        }),
                    }),
                ],
            }),
            l.length > 0 && (0, a.jsx)(n5, { state: n }),
            (0, a.jsxs)(eb.Ch, {
                ref: c,
                onScroll: f,
                overflow: "auto",
                className: ae.sx,
                children: [
                    (0, a.jsx)(n9, { state: n }),
                    0 === l.length
                        ? (0, a.jsx)(n8, {
                              state: n,
                              emptyTitle: P.intl.string(_.default.mcFyYc),
                              emptyBody: P.intl.string(_.default.RNN8pX),
                          })
                        : 0 === d.length
                          ? (0, a.jsx)(v.E, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: P.intl.string(_.default.oIJbFa),
                            })
                          : d.map((e) => (0, a.jsx)(al, { entry: e.log, showSource: "all" === r }, e.key)),
                ],
            }),
        ],
    });
}
function aa(e) {
    return P.intl.string("preview" === e ? _.default["+m8XM6"] : _.default.kiOVnt);
}
function ai(e) {
    let { title: t, preview: l, stable: n, renderEnv: r } = e,
        s = [];
    return (
        null != l && s.push((0, a.jsx)(i.Fragment, { children: r("preview", l) }, "preview")),
        null != n && s.push((0, a.jsx)(i.Fragment, { children: r("stable", n) }, "stable")),
        (0, a.jsx)(nX, {
            title: t,
            children:
                s.length > 0
                    ? s
                    : (0, a.jsx)(v.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: P.intl.string(_.default.W4hcKL),
                      }),
        })
    );
}
function ar(e) {
    let { env: t, bot: l } = e;
    return l.ever_started
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  (0, a.jsx)(nJ, {
                      label: P.intl.formatToPlainString(_.default.f8ix3w, { env: aa(t) }),
                      value: l.connected ? P.intl.string(_.default["9KlveJ"]) : P.intl.string(_.default["4tYZVa"]),
                      critical: !l.connected && null != l.fatal_reason,
                      hint: l.fatal_reason ?? (l.connected ? void 0 : (l.last_start_reason ?? void 0)),
                  }),
                  (0, a.jsx)(nJ, {
                      label: P.intl.string(_.default["0AB7l3"]),
                      value: nH(l.events_received),
                      hint:
                          null != l.last_event_type && null != l.last_event_at
                              ? `${l.last_event_type} \xb7 ${nW(l.last_event_at)}`
                              : void 0,
                  }),
                  (0, a.jsx)(nJ, { label: P.intl.string(_.default.ElaQ0A), value: nH(l.guild_count) }),
                  (0, a.jsx)(nJ, {
                      label: P.intl.string(_.default.SJtBTN),
                      value: nH(l.reconnects),
                      hint:
                          null != l.last_close_code && null != l.last_close_at
                              ? P.intl.formatToPlainString(_.default.bSzLue, {
                                    code: l.last_close_code,
                                    time: nW(l.last_close_at),
                                })
                              : void 0,
                  }),
                  l.dispatch_errors > 0 &&
                      (0, a.jsx)(nJ, {
                          label: P.intl.string(_.default.N4l504),
                          value: nH(l.dispatch_errors),
                          critical: !0,
                      }),
              ],
          })
        : (0, a.jsx)(nJ, { label: aa(t), value: P.intl.string(_.default.C6xjtD) });
}
function as(e) {
    let { env: t, metrics: l } = e,
        n = l.status_4xx + l.status_5xx;
    return (0, a.jsx)(nJ, {
        label: aa(t),
        value: P.intl.formatToPlainString(_.default.Yur5Zm, { requests: nH(l.requests), failures: nH(n + l.errors) }),
        critical: l.errors + l.status_5xx > 0,
        hint:
            null != l.last_failure
                ? P.intl.formatToPlainString(_.default["0ayoy+"], {
                      host: l.last_failure.host,
                      status: l.last_failure.status ?? "network",
                      time: nW(l.last_failure.at),
                  })
                : P.intl.formatToPlainString(_.default["1PdrB1"], { time: nW(l.since) }),
    });
}
function ao(e) {
    let { env: t, runtime: l } = e;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(nJ, {
                label: P.intl.formatToPlainString(_.default.BVORfc, { env: aa(t) }),
                value: nH(l.connections),
            }),
            l.schedules.map((e) =>
                (0, a.jsx)(
                    nJ,
                    {
                        label: P.intl.formatToPlainString(_.default.NQxkhU, { id: e.id }),
                        value: e.trigger,
                        hint:
                            null != e.pending_state
                                ? P.intl.formatToPlainString(_.default.P8lBrO, {
                                      state: e.pending_state,
                                      attempt: e.pending_attempt ?? 1,
                                  })
                                : null != e.next_run_at
                                  ? P.intl.formatToPlainString(_.default["7ecbr3"], { time: nW(e.next_run_at) })
                                  : void 0,
                    },
                    `${t}-${e.id}`,
                ),
            ),
        ],
    });
}
function au(e) {
    let { env: t, metrics: l } = e;
    return (0, a.jsx)(nJ, {
        label: aa(t),
        value: P.intl.formatToPlainString(_.default.voXL2a, { calls: nH(l.calls), errors: nH(l.errors) }),
        critical: l.errors > 0,
        hint: l.last_model,
    });
}
function ad(e) {
    let { title: t, metrics: l, limits: n } = e;
    if (null == l || 0 === l.requests)
        return (0, a.jsx)(nX, {
            title: t,
            children: (0, a.jsx)(v.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: P.intl.string(_.default["v/fbnv"]),
            }),
        });
    let i = l.cpu_ms_total / l.requests,
        r = l.cpu_ms_total > 0;
    return (0, a.jsxs)(nX, {
        title: t,
        children: [
            (0, a.jsx)(nJ, {
                label: P.intl.string(_.default.KOnL3g),
                value: nH(l.requests),
                hint: P.intl.formatToPlainString(_.default["1PdrB1"], { time: nW(l.since) }),
            }),
            (0, a.jsx)(nJ, { label: P.intl.string(_.default.CjPhyY), value: nH(l.errors), critical: l.errors > 0 }),
            r
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)(nZ, {
                              label: P.intl.string(_.default["V/nNbs"]),
                              used: l.cpu_ms_max,
                              max: n.cpu_ms_per_request,
                              formatValue: nV,
                          }),
                          (0, a.jsx)(nJ, {
                              label: P.intl.string(_.default["+rYPHD"]),
                              value: nV(i),
                              hint: P.intl.formatToPlainString(_.default["+LxC7W"], {
                                  total: nV(l.cpu_ms_total),
                                  wall: nV(l.wall_ms_total),
                              }),
                          }),
                      ],
                  })
                : (0, a.jsx)(nJ, {
                      label: P.intl.string(_.default["V/nNbs"]),
                      value: P.intl.string(_.default.YKWIxp),
                      hint: P.intl.string(_.default["8GAiDk"]),
                  }),
            !r &&
                l.wall_ms_total > 0 &&
                (0, a.jsx)(nJ, { label: P.intl.string(_.default.ueEMPa), value: nV(l.wall_ms_total) }),
            l.exceeded_cpu > 0 &&
                (0, a.jsx)(nJ, { label: P.intl.string(_.default.vM2krr), value: nH(l.exceeded_cpu), critical: !0 }),
            (0, a.jsx)(nJ, {
                label: P.intl.string(_.default.g1O88C),
                value: nH(l.exceeded_memory),
                critical: l.exceeded_memory > 0,
                hint: P.intl.formatToPlainString(_.default["5iALNP"], { limit: `${n.memory_mb} MB` }),
            }),
            null != l.build && (0, a.jsx)(nJ, { label: P.intl.string(_.default.JUZs7g), value: nY(l.build) }),
        ],
    });
}
function ac(e) {
    let { status: t } = e,
        { stable: l, preview: n, shared_data: r } = t.storage,
        s = t.worker.limits,
        o = r
            ? [{ key: "shared", label: P.intl.string(_.default.Vrh0rD), metrics: l }]
            : [
                  { key: "preview", label: P.intl.string(_.default["+m8XM6"]), metrics: n },
                  { key: "stable", label: P.intl.string(_.default.kiOVnt), metrics: l },
              ];
    return (0, a.jsx)(nX, {
        title: P.intl.string(_.default.i91625),
        children: o.map((e) => {
            let { key: t, label: l, metrics: n } = e;
            return null == n
                ? (0, a.jsx)(nJ, { label: l, value: "\u2014" }, t)
                : (0, a.jsxs)(
                      i.Fragment,
                      {
                          children: [
                              (0, a.jsx)(nJ, {
                                  label: P.intl.formatToPlainString(_.default["9TpIQg"], { env: l }),
                                  value: nU(n.r2_bytes),
                                  hint: P.intl.formatToPlainString(
                                      n.r2_truncated ? _.default.o45MMA : _.default.S7o3vV,
                                      { count: nH(n.r2_objects) },
                                  ),
                              }),
                              null != n.db_bytes &&
                                  (0, a.jsx)(nZ, {
                                      label: P.intl.formatToPlainString(_.default["0OIswI"], { env: l }),
                                      used: n.db_bytes,
                                      max: s.db_bytes,
                                      formatValue: nU,
                                  }),
                          ],
                      },
                      t,
                  );
        }),
    });
}
function am(e) {
    let { status: t, fetchState: l, onRefresh: n } = e;
    return (0, a.jsxs)("div", {
        className: n0.M,
        children: [
            (0, a.jsx)(nK, { generatedAt: t?.generated_at ?? null, fetchState: l, onRefresh: n }),
            null != t &&
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(ad, {
                            title: P.intl.string(_.default["+dpDma"]),
                            metrics: t.worker.preview,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(ad, {
                            title: P.intl.string(_.default.NQHyed),
                            metrics: t.worker.stable,
                            limits: t.worker.limits,
                        }),
                        (0, a.jsx)(ac, { status: t }),
                        null != t.bot &&
                            (0, a.jsx)(ai, {
                                title: P.intl.string(_.default.rx1pBg),
                                preview: t.bot.preview,
                                stable: t.bot.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ar, { env: e, bot: t }),
                            }),
                        null != t.outbound &&
                            (0, a.jsx)(ai, {
                                title: P.intl.string(_.default["t2+yv/"]),
                                preview: t.outbound.preview,
                                stable: t.outbound.stable,
                                renderEnv: (e, t) => (0, a.jsx)(as, { env: e, metrics: t }),
                            }),
                        null != t.runtime &&
                            (0, a.jsx)(ai, {
                                title: P.intl.string(_.default.QifItp),
                                preview: t.runtime.preview,
                                stable: t.runtime.stable,
                                renderEnv: (e, t) => (0, a.jsx)(ao, { env: e, runtime: t }),
                            }),
                        null != t.ai &&
                            (0, a.jsx)(ai, {
                                title: P.intl.string(_.default.SWKshl),
                                preview: t.ai.preview,
                                stable: t.ai.stable,
                                renderEnv: (e, t) => (0, a.jsx)(au, { env: e, metrics: t }),
                            }),
                        (0, a.jsxs)(nX, {
                            title: P.intl.string(_.default["HHe+8E"]),
                            children: [
                                (0, a.jsx)(nJ, {
                                    label: P.intl.string(_.default["+m8XM6"]),
                                    value:
                                        null != t.deployments.preview_build
                                            ? nY(t.deployments.preview_build)
                                            : "\u2014",
                                }),
                                (0, a.jsx)(nJ, {
                                    label: P.intl.string(_.default.kiOVnt),
                                    value:
                                        null != t.deployments.stable_build ? nY(t.deployments.stable_build) : "\u2014",
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
var af = l(497243);
function ah(e) {
    let { projectId: t, onClose: l } = e,
        [n, r] = i.useState("logs"),
        s = (0, k.bG)([nz], () => nz.getStatus(t), [t]),
        u = (0, k.bG)([nz], () => nz.getFetchState(t), [t]);
    i.useEffect(() => {
        (0, m.R7)(t);
    }, [t]);
    let c = i.useCallback(() => (0, m.R7)(t), [t]),
        f = i.useCallback(() => {
            let e = {
                captured_at: new Date().toISOString(),
                project_id: t,
                status: nz.getStatus(t),
                last_turn_usage: nz.getLastTurnUsage(t),
                last_compaction: nz.getLastCompaction(t),
                last_compaction_decline: nz.getLastCompactionDecline(t),
                logs: nB.A.getLogs(t),
            };
            (0, nL.C)(JSON.stringify(e, null, 2), () =>
                (0, nI.P0)((0, nT.o)(P.intl.string(_.default.sDSDiO), nM.Ck.SUCCESS)),
            );
        }, [t]),
        h = P.intl.string(_.default.KampIf);
    return (0, a.jsxs)("section", {
        className: af.nd,
        "aria-label": h,
        children: [
            (0, a.jsxs)(d.Ay, {
                "aria-label": h,
                toolbar: (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(d.Ay.Icon, {
                            icon: n_.CopyIcon,
                            tooltip: P.intl.string(_.default["21ipY1"]),
                            onClick: f,
                        }),
                        (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: l }),
                    ],
                }),
                children: [
                    (0, a.jsx)(d.Ay.ChannelIcon, { icon: nP.BugIcon, "aria-hidden": !0 }),
                    (0, a.jsx)(d.Ay.Title, { children: h }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: af.rf,
                children: [
                    (0, a.jsxs)(nR.V, {
                        selectedItem: n,
                        type: "top",
                        onItemSelect: (e) => r(e),
                        "aria-label": P.intl.string(_.default.uNyR86),
                        className: af.vR,
                        children: [
                            (0, a.jsx)(nR.V.Item, { id: "logs", children: P.intl.string(_.default["1mpzdJ"]) }),
                            (0, a.jsx)(nR.V.Item, { id: "worker", children: P.intl.string(_.default.whGHLD) }),
                            (0, a.jsx)(nR.V.Item, { id: "agent", children: P.intl.string(_.default.cK3AvL) }),
                        ],
                    }),
                    "logs" === n
                        ? (0, a.jsx)(an, { projectId: t })
                        : "worker" === n
                          ? (0, a.jsx)(am, { status: s, fetchState: u, onRefresh: c })
                          : (0, a.jsx)(n2, { projectId: t, status: s, fetchState: u, onRefresh: c }),
                ],
            }),
        ],
    });
}
var ag = l(11055),
    ax = l(333007),
    ap = l(342667);
function av(e) {
    let { projectId: t, resolveIframe: l } = e,
        n = (0, lW.o4)(t),
        r = (0, eW.useHasAnyModalOpen)(),
        [s, o] = i.useState(null);
    i.useEffect(() => {
        if (!n) return;
        function e() {
            let e = (function (e) {
                if (null == e) return null;
                let t = e.getBoundingClientRect();
                return t.width < 1 || t.height < 1
                    ? null
                    : { left: t.left, top: t.top, width: t.width, height: t.height };
            })(l());
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
    }, [n, l]);
    let u = n && null != s && !r;
    return (0, ax.createPortal)(
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("div", {
                    className: ap.y,
                    role: "status",
                    "aria-live": "polite",
                    "data-testid": "vibegrations-control-announcer",
                    children: n ? P.intl.string(_.default.dIE9zO) : "",
                }),
                u
                    ? (0, a.jsx)("div", {
                          className: ap.o,
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
var aj = l(314116),
    ab = l(364522),
    ay = l(406810),
    aA = l(381849),
    ak = l(977628);
function aN(e) {
    let t,
        { projectId: l, onClose: n, onRestore: r } = e,
        [s, u] = i.useState({ status: "loading" });
    return (
        i.useEffect(() => {
            let e = !1;
            return (
                (0, m.ST)(l)
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
        }, [l]),
        (t =
            "loading" === s.status
                ? (0, a.jsx)("div", { className: ak.E8, children: (0, a.jsx)(f.y, {}) })
                : "failed" === s.status
                  ? (0, a.jsx)("div", {
                        className: ak.E8,
                        role: "alert",
                        children: (0, a.jsx)(v.E, {
                            variant: "text-md/normal",
                            color: "text-muted",
                            children: P.intl.string(_.default["mSJn+K"]),
                        }),
                    })
                  : 0 === s.entries.length
                    ? (0, a.jsx)("div", {
                          className: ak.E8,
                          children: (0, a.jsx)(v.E, {
                              variant: "text-md/normal",
                              color: "text-muted",
                              children: P.intl.string(_.default.TOmYPT),
                          }),
                      })
                    : (0, a.jsx)(ab.Ip, {
                          className: ak.p_,
                          children: (0, a.jsx)("div", {
                              className: ak.jO,
                              children: s.entries.map((e) => {
                                  let t,
                                      l = Number.isNaN((t = Date.parse(e.authoredAt)))
                                          ? { relative: null, absolute: null }
                                          : {
                                                relative: (0, aA.WR)({
                                                    seconds: Math.max(0, Math.round((Date.now() - t) / 1e3)),
                                                    getFormatter: aA._e,
                                                }),
                                                absolute: new Date(t).toLocaleString(),
                                            };
                                  return (0, a.jsxs)(
                                      "button",
                                      {
                                          className: ak.f_,
                                          type: "button",
                                          onClick: () =>
                                              (0, aj.A)({
                                                  title: P.intl.string(_.default.qOUOPE),
                                                  subtitle: P.intl.string(_.default.k2JBj5),
                                                  confirmText: P.intl.string(_.default["+sRK16"]),
                                                  variant: "critical",
                                                  onConfirm: () => {
                                                      n(), r(e);
                                                  },
                                              }),
                                          children: [
                                              (0, a.jsx)(v.E, {
                                                  variant: "text-md/medium",
                                                  className: ak.bc,
                                                  children: e.subject.replace(/^Build: /, ""),
                                              }),
                                              null != l.relative &&
                                                  (0, a.jsx)(v.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-muted",
                                                      title: l.absolute ?? void 0,
                                                      children: l.relative,
                                                  }),
                                          ],
                                      },
                                      e.sha,
                                  );
                              }),
                          }),
                      })),
        (0, a.jsxs)("section", {
            className: ak.nd,
            "aria-label": P.intl.string(_.default.jAWwzi),
            children: [
                (0, a.jsxs)(d.Ay, {
                    "aria-label": P.intl.string(_.default.jAWwzi),
                    toolbar: (0, a.jsx)(d.Ay.Icon, { icon: o.P, tooltip: P.intl.string(P.t.cpT0Cq), onClick: n }),
                    children: [
                        (0, a.jsx)(d.Ay.ChannelIcon, { icon: ay.ClockIcon, "aria-hidden": !0 }),
                        (0, a.jsx)(d.Ay.Title, { children: P.intl.string(_.default.jAWwzi) }),
                    ],
                }),
                (0, a.jsx)("div", { className: ak.rf, children: t }),
            ],
        })
    );
}
var aw = l(120426),
    aS = l(873727),
    aC = l(147248),
    aE = l(418842),
    aI = l(885386),
    aT = l(940107),
    aM = l(171936),
    a_ = l(796036);
function aP(e) {
    let { projectId: t, applicationId: l, surface: n, header: r, mainClassName: o, content: d, sidebar: c } = e,
        [m, f] = i.useState(null),
        h = (0, u.A)(l, n),
        g = h?.id ?? null;
    !(function (e, t) {
        let l = (0, k.bG)([nf.A], () => (0, aS.x4)(nf.A.theme)),
            n = (0, k.bG)([aC.A], () => aC.A.gradientPreset),
            {
                reducedMotion: a,
                fontScale: r,
                highContrast: s,
                forcedColors: o,
                underlineLinks: u,
            } = (0, k.cf)([tR.Ay], () => ({
                reducedMotion: tR.Ay.useReducedMotion,
                fontScale: (0, aS.U0)(),
                highContrast: tR.Ay.isHighContrastModeEnabled,
                forcedColors: tR.Ay.useForcedColors,
                underlineLinks: tR.Ay.alwaysShowLinkDecorations,
            })),
            d = aI.hH.useSetting(),
            c = (0, aE.C)(),
            m = i.useRef(!1),
            f = i.useRef(!1),
            h = i.useRef(0),
            g = i.useRef(null),
            x = i.useCallback(() => {
                let n = (0, aw.F)(e, t);
                if (null == n) return;
                g.current = n;
                let i = {
                    revision: ++h.current,
                    baseTheme: l,
                    customTheme: (0, aS.Lq)(),
                    uiDensity: c,
                    messageDisplayCompact: d,
                    fontScale: r,
                    reducedMotion: a,
                    highContrast: s,
                    forcedColors: o,
                    underlineLinks: u,
                };
                (0, aT.W)(n, "set-env", i, {
                    timeoutMs: 6e3,
                    retryMs: 250,
                    sourceMatch: "origin",
                    label: "viewer environment",
                }).catch(() => {});
            }, [l, o, r, t, s, d, e, a, c, u]),
            p = i.useRef(x);
        i.useLayoutEffect(() => {
            p.current = x;
        });
        let v = i.useCallback(() => {
            m.current ||
                ((m.current = !0),
                queueMicrotask(() => {
                    (m.current = !1), f.current || p.current();
                }));
        }, []);
        i.useEffect(
            () => (
                (f.current = !1),
                () => {
                    f.current = !0;
                }
            ),
            [],
        ),
            i.useEffect(() => {
                v();
            }, [n, v]),
            i.useLayoutEffect(() => {
                x(), v();
            }, [v, x]),
            i.useLayoutEffect(() => {
                let l = (0, aw.F)(e, t);
                null != l && l !== g.current && v();
            }),
            i.useEffect(() => {
                function l(l) {
                    l.target === (0, aw.F)(e, t) && ((g.current = null), v());
                }
                return document.addEventListener("load", l, !0), () => document.removeEventListener("load", l, !0);
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
            if (null != t) return (0, aM.mn)(t, () => (0, aw.F)(m, g));
        }, [t, m, g]);
    let x = i.useCallback(() => (0, aw.F)(m, g), [m, g]);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                className: s()(ev.Mh, o),
                children: [r, (0, a.jsx)("div", { ref: f, className: ev.fm, children: d })],
            }),
            c,
            (0, a.jsx)(av, { projectId: t ?? null, resolveIframe: x }),
        ],
    });
}
function aR(e) {
    let {
            projectId: t,
            applicationId: l,
            previewApplicationId: n,
            surface: r,
            header: u,
            chatOpen: f,
            onCloseChat: h,
            versionHistoryOpen: g = !1,
            onCloseVersionHistory: x,
            onRestoreVersion: p,
            debugOpen: v = !1,
            onCloseDebug: j,
            restoreState: b,
            previewReady: y,
            previewGate: A,
            channelMessages: k,
            availability: N,
            activeMode: w,
            widgetApplicationId: S,
        } = e,
        E = i.useRef(null),
        [I, T] = i.useState(0);
    i.useLayoutEffect(() => {
        if (r.type === C.U4.MAIN) return (0, c.HV)(l), () => (0, c.HV)(null);
    }, [l, r.type]),
        i.useEffect(() => {
            null != t && ((0, m.Hc)(t), (0, a_.s)());
        }, [t]),
        i.useLayoutEffect(() => {
            let e = E.current;
            if (null == e) return;
            function t() {
                null != e && T(e.getBoundingClientRect().width);
            }
            t();
            let l = new ResizeObserver(t);
            return l.observe(e), () => l.disconnect();
        }, []),
        i.useEffect(() => () => (0, c.Zq)(0), []);
    let M = Math.max(360, I - 320),
        R = null != k ? k.open : f,
        L = f || r.type === C.U4.MAIN;
    return (0, a.jsx)("div", {
        ref: E,
        className: ev.LB,
        children: (0, a.jsx)(aP, {
            projectId: t,
            applicationId: l,
            surface: r,
            header: u,
            mainClassName: null == u ? void 0 : s()(ev.ez, { [ev.zt]: R }),
            content: (0, a.jsx)(ef, {
                applicationId: l,
                previewApplicationId: n,
                surface: r,
                previewReady: y,
                previewGate: A,
                availability: N,
                activeMode: w,
                widgetApplicationId: S,
            }),
            sidebar:
                null != k
                    ? (0, a.jsx)(nE, {
                          open: k.open,
                          maxWidth: M,
                          onWidthChange: c.Zq,
                          children: k.open
                              ? (0, a.jsx)(ej, { channel: k.channel, guild: k.guild, onClose: k.onClose })
                              : null,
                      })
                    : null != t && L
                      ? (0, a.jsx)(nE, {
                            open: f,
                            maxWidth: M,
                            onWidthChange: c.Zq,
                            children: (0, a.jsx)("div", {
                                className: ev.cO,
                                children: v
                                    ? (0, a.jsx)(ah, { projectId: t, onClose: j ?? (() => {}) }, t)
                                    : g
                                      ? (0, a.jsx)(
                                            aN,
                                            { projectId: t, onClose: x ?? (() => {}), onRestore: p ?? (() => {}) },
                                            t,
                                        )
                                      : (0, a.jsxs)(a.Fragment, {
                                            children: [
                                                (0, a.jsx)(ag.A, { projectId: t }),
                                                (0, a.jsx)(d.Ay, {
                                                    "aria-label": P.intl.string(P.t["/VQax8"]),
                                                    toolbar:
                                                        null == h
                                                            ? null
                                                            : (0, a.jsx)(d.Ay.Icon, {
                                                                  icon: o.P,
                                                                  tooltip: P.intl.string(_.default.YdgE0j),
                                                                  onClick: h,
                                                              }),
                                                    children: (0, a.jsx)(d.Ay.Title, {
                                                        children: P.intl.string(P.t["/VQax8"]),
                                                    }),
                                                }),
                                                (0, a.jsx)("div", {
                                                    className: ev.cb,
                                                    children: (0, a.jsx)(nA, { projectId: t, restoreState: b }, t),
                                                }),
                                            ],
                                        }),
                            }),
                        })
                      : null,
        }),
    });
}
