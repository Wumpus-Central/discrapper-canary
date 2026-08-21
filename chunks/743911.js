l.r(t), l.d(t, { default: () => eS });
var i,
    n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    d = l(989349),
    o = l.n(d),
    c = l(17928),
    u = l(314116),
    m = l(534890),
    x = l(646270),
    g = l(31300),
    p = l(939249),
    h = l(834730),
    j = l(691540),
    f = l(857250),
    v = l(97483),
    b = l(866665),
    C = l(408278),
    N = l(821609),
    E = l(297264),
    y = l(364522),
    k = l(103557),
    A = l(81369),
    I = l(289873),
    w = l(152367),
    S = l(661531),
    P = l(627363),
    _ = l(976860),
    V = l(71393),
    z = l(576705),
    R = l(673724),
    D = l(948230),
    H = l(148555),
    T = l(683180),
    F = l(208137),
    G = l(805332),
    O = l(783791),
    L = l(998939),
    B = l(972786),
    M = l(20386),
    X = l(20455),
    U = l(311656),
    K = l(922016),
    Y = l(980707),
    q = l(477782),
    W = l(173936),
    Z = l(365199),
    Q = l(871237),
    $ = l(957565),
    J = l(295813),
    ee = l(375708),
    et = l(192308),
    el = l(746080);
function ei(e) {
    let {
            projectId: t,
            projectName: i,
            guildId: s,
            isOwner: r,
            isPublic: d,
            supportsVisibility: o,
            onExport: c,
            onImport: m,
            onFork: x,
            onConnectTool: g,
            onVersionHistory: p,
        } = e,
        h = a.useRef(null),
        b = r && null != x,
        N = r && null != m,
        E = b || null != c || N || null != g || null != p,
        y = $.p5 && null != s;
    return E || y || r
        ? (0, n.jsx)(K.Y, {
              targetElementRef: h,
              position: "bottom",
              align: "right",
              animation: K.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, n.jsxs)(Y.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": ee.intl.string(ee.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          E
                              ? (0, n.jsxs)(q.rX, {
                                    children: [
                                        b
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "fork",
                                                  label: ee.intl.string(J.default.hU9QAE),
                                                  action: x,
                                              })
                                            : null,
                                        null != c
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "export",
                                                  label: ee.intl.string(J.default["7iamDC"]),
                                                  action: c,
                                              })
                                            : null,
                                        N
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "import",
                                                  label: ee.intl.string(J.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "connect-tool",
                                                  label: ee.intl.string(J.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != p
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "version-history",
                                                  label: ee.intl.string(J.default.jAWwzi),
                                                  action: p,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          y
                              ? (0, n.jsx)(q.rX, {
                                    children: (0, n.jsx)(q.Dr, {
                                        id: "copy-link",
                                        label: ee.intl.string(ee.t.WqhZss),
                                        icon: W.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: W.LinkIcon },
                                        action: () =>
                                            (0, $.C)((0, Q.n)(s, el.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, f.o)(ee.intl.string(ee.t["L/PwZf"]), v.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, n.jsxs)(q.rX, {
                                    children: [
                                        o
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "visibility",
                                                  label: ee.intl.string(d ? J.default.XC0HHn : J.default["Hn/5vP"]),
                                                  action: () => (0, D.Ok)(t, !d),
                                              })
                                            : null,
                                        (0, n.jsx)(q.Dr, {
                                            id: "rename",
                                            label: ee.intl.string(J.default.fHTQgk),
                                            action: () => {
                                                (0, et.openModalLazy)(async () => {
                                                    let { default: e } = await l.e("153463").then(l.bind(l, 809898));
                                                    return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(q.Dr, {
                                            id: "delete",
                                            label: ee.intl.string(ee.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: ee.intl.formatToPlainString(J.default.ZokHVz, { name: i }),
                                                    subtitle: ee.intl.string(J.default.NmF939),
                                                    confirmText: ee.intl.string(ee.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, D.xx)(t)).ok)
                                                            throw Error(ee.intl.string(J.default.tqKZCi));
                                                    },
                                                });
                                            },
                                        }),
                                    ],
                                })
                              : null,
                      ],
                  });
              },
              children: (e, t) => {
                  let { isShown: l } = t;
                  return (0, n.jsx)(C.K, {
                      ...e,
                      buttonRef: h,
                      icon: Z.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": ee.intl.string(ee.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var en = l(742589),
    ea = l(769979);
function es(e) {
    let { title: t, actions: l, breadcrumb: i } = e;
    return (0, n.jsx)(en.A, {
        hideSearch: !0,
        toolbar: l,
        className: ea.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: ea.QF,
            children: [
                (0, n.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: ea.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(en.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(en.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(en.A.Title, { className: ea.Qw, wrapperClassName: ea.DD, children: t }),
            ],
        }),
    });
}
var er = l(594483),
    ed = l(189213),
    eo = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function ec(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        a = "permissions" === t;
    return (0, n.jsx)(ed.Modal, {
        transitionState: l,
        onClose: i,
        title: ee.intl.string(a ? J.default.Rtlv25 : J.default["+UouPe"]),
        subtitle: ee.intl.string(a ? J.default["nDQB/b"] : J.default["E0QD++"]),
        size: "sm",
        actions: [{ text: ee.intl.string(a ? ee.t.BddRzS : J.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function eu(e) {
    (0, et.openModal)((t) => (0, n.jsx)(ec, { ...t, reason: e }));
}
var em = l(224640),
    ex = l(815021),
    eg = l(652215),
    ep = l(931587),
    eh = l(264997);
function ej(e) {
    let { applicationId: t, guildId: l, projectName: i, transitionState: s, onClose: r } = e,
        d = ee.intl.string(J.default.yzxKsU),
        o = ee.intl.formatToPlainString(J.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let e = (0, T.SH)(l, t);
            (0, _.pX)(null == e ? eg.BVt.CHANNEL(l) : eg.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, n.jsx)(em.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: ep.zr,
            children: [
                (0, n.jsx)("div", { className: ep.b, children: (0, n.jsx)(ex.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: ep.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: ep.bm,
                            children: (0, n.jsx)("img", { className: ep.yW, src: eh, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: ep.R_,
                            children: [
                                (0, n.jsx)(E.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(h.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: o,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: ep.o1,
                    children: [
                        (0, n.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: ee.intl.string(ee.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: ee.intl.string(ee.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function ef(e, t, l) {
    (0, L.Hc)(e);
    let i = await (0, L.vX)(e, t);
    (0, L.dv)(e, l, [i]);
}
function ev(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, R.x5)(e.size, t)
        ? null
        : ee.intl.formatToPlainString(J.default.AzziHF, { size: (0, R.ZJ)((0, R.yr)(t)) });
}
function eb(e) {
    let t = a.useRef(null),
        l = a.useCallback(
            (t) => {
                let l = t.target.files?.[0] ?? null;
                (t.target.value = ""), null != l && e(l);
            },
            [e],
        );
    return {
        open: () => t.current?.click(),
        input: (0, n.jsx)("input", {
            ref: t,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: l,
        }),
    };
}
var eC = l(165610),
    eN = l(352978);
function eE(e) {
    return (0, n.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ey(e) {
    return (0, n.jsx)(x.u, { ...e, size: "custom", width: 20, height: 20 });
}
function ek(e) {
    return (0, n.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function eA(e) {
    let { project: t, guildId: l, onSelect: i, onFork: a } = e,
        s = (0, c.bG)([O.Ay], () => O.Ay.isThinking(t.id), [t.id]),
        r =
            null == t.updated_at
                ? null
                : ee.intl.formatToPlainString(J.default.oMDaqr, { time: o()(t.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: eN.OY,
        children: [
            (0, n.jsx)(p.D, {
                className: eN.W6,
                onClick: i,
                children: (0, n.jsxs)("div", {
                    className: eN.MM,
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: eN.j1,
                            children: t.name,
                        }),
                        null == r
                            ? null
                            : (0, n.jsx)("div", {
                                  className: eN.h3,
                                  children: (0, n.jsx)(h.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: r,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: eN.M2,
                children: [
                    s ? (0, n.jsx)(M.Ty, { className: eN.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: eN.Pl,
                        children: (0, n.jsx)(ei, {
                            projectId: t.id,
                            projectName: t.name,
                            guildId: l,
                            isOwner: (0, B.P)(t),
                            isPublic: (0, R.XE)(t),
                            supportsVisibility: (0, R.IU)(t),
                            onFork: a,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eI(e) {
    let { project: t, projectsLoaded: i, onBack: s, guildId: r } = e,
        [d, o] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(!1),
        [y, k] = a.useState(null),
        [A, I] = a.useState(null),
        w = t?.id ?? null,
        S = a.useRef(w),
        V = a.useRef(!0),
        z = a.useRef(!1),
        T = a.useRef(null);
    (S.current = w),
        a.useEffect(
            () => (
                (V.current = !0),
                () => {
                    V.current = !1;
                }
            ),
            [],
        );
    let F = (0, c.bG)([B.A], () => (null == w ? null : B.A.getIntegrationStatus(w)), [w]),
        { data: O, isLoading: M } = (0, P.YY)(t?.preview_application_id ?? void 0),
        U = null != w && A !== w,
        K = F?.preview_ready === !0,
        Y = K && null != F && (!F.integration_installed || F.bot_permissions_changed),
        q = d || U || M,
        W = ee.intl.string(m ? J.default.YdgE0j : J.default.aWVf4j),
        Z = a.useCallback(() => x((e) => !e), []),
        Q = a.useCallback(() => x(!1), []),
        $ = a.useCallback(
            (e) => {
                if (null == t || z.current) return;
                let l = t.id;
                function i() {
                    return V.current && S.current === l;
                }
                (z.current = !0),
                    p(!1),
                    x(!0),
                    k({ entry: e, status: "restoring" }),
                    (0, L.oB)(l, e.sha)
                        .then(
                            () => {
                                i() && k({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (k({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, j.P0)((0, f.o)(ee.intl.string(J.default.q6iZ84), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (z.current = !1);
                        });
            },
            [t],
        ),
        en = (0, c.bG)([G.A], () => G.A.isBuilderPreviewMobile()),
        ea = ee.intl.string(en ? J.default["3uCc8U"] : J.default["+nzCxZ"]),
        ed = a.useCallback(() => (0, D.GG)(!en), [en]),
        ec = a.useCallback(() => {
            null != t && (x(!0), (0, L.dv)(t.id, ee.intl.string(J.default["2ejwtJ"])));
        }, [t]),
        em = eb(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        i = ev(e);
                    null != i
                        ? (0, j.P0)((0, f.o)(i, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: ee.intl.formatToPlainString(J.default.XYZqZK, { name: t.name }),
                              subtitle: ee.intl.string(J.default["6syXoH"]),
                              confirmText: ee.intl.string(J.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await ef(l, e, ee.intl.string(J.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, f.o)(ee.intl.string(J.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        ex = a.useCallback(() => {
            null != t && (0, er.A)(t, r);
        }, [t, r]),
        ep = a.useCallback(async () => {
            if (null == w || S.current !== w) return;
            T.current?.abort();
            let e = new AbortController();
            (T.current = e), I(null);
            try {
                await (0, D.U1)(w, e.signal);
            } catch {
            } finally {
                e.signal.aborted || T.current !== e || S.current !== w || I(w);
            }
        }, [w]);
    a.useEffect(
        () => (
            ep(),
            () => {
                T.current?.abort(), (T.current = null);
            }
        ),
        [ep],
    );
    let eh = F?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eA = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eh && t.preview_guild_id === eh) ||
                (await (0, D.M7)(t.id, { guild_id: eh, preview_guild_id: eh }));
        }, [eh, t]),
        eI = a.useCallback(async () => {
            try {
                await eA();
            } catch {}
            await ep();
        }, [ep, eA]),
        ew = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                H.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: O ?? null,
                    guildId: eh,
                    onClose: () => {
                        eI();
                    },
                });
        }, [eI, eh, O, t]),
        eS = Y ? { type: "permissions", onReviewPermissions: ew, loading: M || U } : U ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == t && i && (0, _.pX)(eg.BVt.CHANNEL(r, el.VV.VIBEGRATIONS));
    }, [r, t, i]);
    let eP = a.useCallback(async () => {
            if (null != t) {
                if (!K) return void eu(eo.NO_PREVIEW);
                if (Y) return void eu(eo.PERMISSIONS);
                o(!0);
                try {
                    var e;
                    let l = await (0, L.TV)(t.id);
                    if (!0 !== l.ok) throw Error(ee.intl.string(J.default.fNP6Cd));
                    (0, D.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, et.openModal)((t) => (0, n.jsx)(ej, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)(
                        (0, f.o)(e instanceof Error ? e.message : ee.intl.string(J.default.fNP6Cd), v.Ck.FAILURE),
                    );
                } finally {
                    o(!1);
                }
            }
        }, [r, Y, K, t]),
        e_ = (0, n.jsx)(es, {
            title: t?.name ?? ee.intl.string(J.default.F2dRba),
            breadcrumb: { title: ee.intl.string(J.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, n.jsxs)("div", {
                          className: eN.wO,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: eN.FO,
                                  children: [
                                      (0, n.jsx)(ei, {
                                          projectId: t.id,
                                          projectName: t.name,
                                          guildId: r,
                                          isOwner: (0, B.P)(t),
                                          isPublic: (0, R.XE)(t),
                                          supportsVisibility: (0, R.IU)(t),
                                          onExport: ec,
                                          onImport: em.open,
                                          onFork: ex,
                                          onConnectTool: () => {
                                              var e;
                                              return (
                                                  (e = t.id),
                                                  void (0, et.openModalLazy)(async () => {
                                                      let { default: t } = await Promise.all([
                                                          l.e("964476"),
                                                          l.e("461590"),
                                                      ]).then(l.bind(l, 84469));
                                                      return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                                  })
                                              );
                                          },
                                          onVersionHistory:
                                              y?.status === "restoring"
                                                  ? void 0
                                                  : () => {
                                                        x(!0), p(!0);
                                                    },
                                      }),
                                      (0, n.jsx)(b.m, {
                                          text: ea,
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(C.K, {
                                              icon: en ? ek : ey,
                                              size: "sm",
                                              variant: "icon-only",
                                              "aria-label": ea,
                                              "aria-pressed": en,
                                              onClick: ed,
                                          }),
                                      }),
                                      (0, n.jsx)(b.m, {
                                          text: W,
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(C.K, {
                                              icon: eE,
                                              size: "sm",
                                              variant: "icon-only",
                                              "aria-label": W,
                                              "aria-pressed": m,
                                              onClick: Z,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, B.P)(t)
                                  ? (0, n.jsx)(N.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ee.intl.string(J.default["5gU57O"]),
                                        loading: d,
                                        disabled: q,
                                        onClick: eP,
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: eN.nj,
        children: [
            em.input,
            (0, n.jsx)("main", {
                className: eN.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: eN.j5,
                              children: [
                                  e_,
                                  (0, n.jsxs)("div", {
                                      className: eN.sD,
                                      children: [
                                          (0, n.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: ee.intl.string(J.default.F2dRba),
                                          }),
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ee.intl.string(J.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ee.intl.string(J.default["42EdIV"]),
                                              onClick: () => (0, D.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              X.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eC.sd,
                                  header: e_,
                                  chatOpen: m,
                                  onCloseChat: Q,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => p(!1),
                                  onRestoreVersion: $,
                                  restoreState: y,
                                  previewReady: K,
                                  previewGate: eS,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function ew(e) {
    let {
            projects: t,
            sharedProjects: l,
            fetchState: i,
            idea: s,
            guildId: d,
            submitting: o,
            createError: c,
            createDisabled: u,
            modelSettings: m,
            onModelSettingsChange: x,
            onSelectProject: g,
            onIdeaChange: j,
            onCreate: f,
            onImportNewProject: v,
            importing: P,
        } = e,
        _ = eb(v),
        V = a.useMemo(
            () =>
                l
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [l],
        ),
        z = a.useMemo(
            () =>
                t
                    .filter((e) => (0, T.X0)(e, d))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, d],
        ),
        H = ee.intl.string(J.default.TU9IGR),
        G = [
            ee.intl.string(J.default["E+Q26x"]),
            ee.intl.string(J.default["06/jqP"]),
            ee.intl.string(J.default["7MCiK9"]),
        ],
        O = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || f());
            },
            [u, f],
        ),
        L = ee.intl.string(J.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: r()(eN.nj, eN.a0),
        children: [
            (0, n.jsx)(es, { title: ee.intl.string(J.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: eN.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: eN.ps,
                        children: [
                            (0, n.jsx)(y.Ip, {
                                className: eN.Yy,
                                children: (0, n.jsx)("div", {
                                    className: eN.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(eN.Qs, eN.Ix),
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                children: ee.intl.string(J.default["2tYpRK"]),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: eN.Aw,
                                                children: G.map((e) =>
                                                    (0, n.jsx)(
                                                        p.D,
                                                        {
                                                            "aria-disabled": o,
                                                            className: eN.nx,
                                                            onClick: o ? void 0 : () => f(e),
                                                            children: (0, n.jsx)(h.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-strong",
                                                                className: eN.un,
                                                                children: e,
                                                            }),
                                                        },
                                                        e,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: eN.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(eN.Qs, eN.DA),
                                    children: [
                                        (0, n.jsx)(k.f, {
                                            label: H,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: H,
                                            error: c,
                                            onChange: j,
                                            onKeyDown: O,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: eN.VP,
                                            children: [
                                                (0, n.jsx)(U.A, {
                                                    settings: m ?? R.hk,
                                                    choices: (0, F.e)()
                                                        ? {
                                                              main: [...R.S8.main, ...R.wF.main],
                                                              subagent: [...R.S8.subagent, ...R.wF.subagent],
                                                              thinking: R.S8.thinking,
                                                          }
                                                        : R.S8,
                                                    disabled: o,
                                                    onChange: x,
                                                }),
                                                (0, n.jsx)(N.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: ee.intl.string(ee.t.CumH4u),
                                                    disabled: u,
                                                    loading: o,
                                                    onClick: () => f(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("aside", {
                        className: eN.pA,
                        "aria-label": ee.intl.string(J.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: eN.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: eN.RM,
                                        children: [
                                            (0, n.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: ee.intl.string(J.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: ee.intl.string(J.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(b.m, {
                                        text: L,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(C.K, {
                                            icon: A.H,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": L,
                                            loading: P,
                                            disabled: P,
                                            onClick: _.open,
                                        }),
                                    }),
                                    _.input,
                                ],
                            }),
                            (0, n.jsxs)(y.Ip, {
                                className: eN.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === z.length
                                        ? (0, n.jsx)("div", { className: eN.E8, children: (0, n.jsx)(I.y, {}) })
                                        : i?.type === "error" && 0 === z.length
                                          ? (0, n.jsxs)("div", {
                                                className: eN.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eN.JS,
                                                        children: ee.intl.string(J.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: ee.intl.string(J.default["42EdIV"]),
                                                        onClick: () => (0, D.hF)(d),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, n.jsx)("div", {
                                                  className: eN.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: eN.ST,
                                                      children: [
                                                          (0, n.jsx)(w.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eN.sI,
                                                              children: ee.intl.string(J.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: eN.Dq,
                                                  children: z.map((e) =>
                                                      (0, n.jsx)(
                                                          eA,
                                                          {
                                                              project: e,
                                                              guildId: d,
                                                              onSelect: () => g(e.id),
                                                              onFork: () => (0, er.A)(e, d),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    V.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: eN.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: eN.uc,
                                                      children: [
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: ee.intl.string(J.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: ee.intl.string(J.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: eN.Dq,
                                                      children: V.map((e) =>
                                                          (0, n.jsx)(
                                                              eA,
                                                              {
                                                                  project: e,
                                                                  guildId: d,
                                                                  onSelect: () => g(e.id),
                                                                  onFork: () => (0, er.A)(e, d),
                                                              },
                                                              e.id,
                                                          ),
                                                      ),
                                                  }),
                                              ],
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eS(e) {
    let { guildId: t, projectId: l } = e,
        i = (0, c.yK)([B.A], () => B.A.getOwnedProjects()),
        s = (0, c.bG)([B.A], () => B.A.getProjectsFetchState()),
        r = (0, c.bG)([V.A, z.A], () => {
            let e = V.A.getGuild(t);
            return null != e && z.A.can(eg.xBc.MANAGE_GUILD, e);
        }, [t]),
        d = (0, c.yK)([B.A], () => (r ? B.A.getSharedProjects(t) : []), [t, r]),
        [o, u] = a.useState(""),
        m = l ?? null,
        [x, g] = a.useState(!1),
        [p, h] = a.useState(null),
        [b, C] = a.useState(null),
        N = o.trim();
    a.useEffect(() => {
        (0, D.hF)(t);
    }, [t, r]),
        a.useEffect(() => {
            (0, D.dm)(t, m);
        }, [t, m]);
    let E = a.useCallback(
            async (e) => {
                let l = (e ?? o).trim();
                if ("" !== l) {
                    null != e && u(e), g(!0), h(null);
                    try {
                        let e = await (0, D.gA)({ guild_id: t });
                        (0, L.Hc)(e),
                            null != b && (0, L.r2)(e, b),
                            (0, L.dv)(e, l),
                            (0, _.pX)(eg.BVt.CHANNEL(t, el.VV.VIBEGRATIONS, e)),
                            u(""),
                            C(null);
                    } catch (e) {
                        h(e instanceof Error ? e.message : ee.intl.string(J.default.KKkp5Y));
                    } finally {
                        g(!1);
                    }
                }
            },
            [t, o, b],
        ),
        [y, k] = a.useState(!1),
        A = a.useCallback(
            async (e) => {
                let l = ev(e);
                if (null != l) return void (0, j.P0)((0, f.o)(l, v.Ck.FAILURE));
                k(!0);
                let i = null;
                try {
                    (i = await (0, D.gA)({ guild_id: t })),
                        await ef(i, e, ee.intl.string(J.default.KjEtrZ)),
                        (0, _.pX)(eg.BVt.CHANNEL(t, el.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, D.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, f.o)(ee.intl.string(J.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    k(!1);
                }
            },
            [t],
        ),
        I = a.useCallback(
            (e) => {
                (0, _.pX)(eg.BVt.CHANNEL(t, el.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        w = a.useCallback(() => {
            (0, _.pX)(eg.BVt.CHANNEL(t, el.VV.VIBEGRATIONS));
        }, [t]),
        S = a.useCallback((e) => {
            u(e), h(null);
        }, []),
        P = (0, c.bG)([B.A], () => {
            if (null == m) return null;
            let e = B.A.getProject(m);
            return null == e || (0, B.P)(e) || (r && e.guild_id === t) ? e : null;
        }, [m, r, t]),
        R = (0, c.bG)([B.A], () => B.A.hasFetchedGuildProjects(t), [t]);
    return null != m
        ? (0, n.jsx)(eI, { project: P, projectsLoaded: R, onBack: w, guildId: t }, m)
        : (0, n.jsx)(ew, {
              projects: i,
              sharedProjects: d,
              fetchState: s,
              modelSettings: b,
              onModelSettingsChange: C,
              idea: o,
              guildId: t,
              submitting: x,
              createError: p,
              createDisabled: "" === N || x,
              onSelectProject: I,
              onIdeaChange: S,
              onCreate: E,
              onImportNewProject: A,
              importing: y,
          });
}
