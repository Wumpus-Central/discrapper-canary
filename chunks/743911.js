l.r(e), l.d(e, { default: () => tS });
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
    X = l(31489),
    U = l(311656),
    K = l(922016),
    Y = l(980707),
    q = l(477782),
    W = l(173936),
    Z = l(365199),
    Q = l(871237),
    $ = l(957565),
    J = l(459864),
    tt = l(375708),
    te = l(192308),
    tl = l(746080);
function ti(t) {
    let {
            projectId: e,
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
        } = t,
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
              renderPopout: (t) => {
                  let { closePopout: a } = t;
                  return (0, n.jsxs)(Y.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${e}`,
                      "aria-label": tt.intl.string(tt.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          E
                              ? (0, n.jsxs)(q.rX, {
                                    children: [
                                        b
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "fork",
                                                  label: tt.intl.string(J.default.hU9QAE),
                                                  action: x,
                                              })
                                            : null,
                                        null != c
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "export",
                                                  label: tt.intl.string(J.default["7iamDC"]),
                                                  action: c,
                                              })
                                            : null,
                                        N
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "import",
                                                  label: tt.intl.string(J.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "connect-tool",
                                                  label: tt.intl.string(J.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != p
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "version-history",
                                                  label: tt.intl.string(J.default.jAWwzi),
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
                                        label: tt.intl.string(tt.t.WqhZss),
                                        icon: W.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: W.LinkIcon },
                                        action: () =>
                                            (0, $.C)((0, Q.n)(s, tl.VV.VIBEGRATIONS, e), () =>
                                                (0, j.P0)((0, f.o)(tt.intl.string(tt.t["L/PwZf"]), v.Ck.SUCCESS)),
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
                                                  label: tt.intl.string(d ? J.default.XC0HHn : J.default["Hn/5vP"]),
                                                  action: () => (0, D.Ok)(e, !d),
                                              })
                                            : null,
                                        (0, n.jsx)(q.Dr, {
                                            id: "rename",
                                            label: tt.intl.string(J.default.fHTQgk),
                                            action: () => {
                                                (0, te.openModalLazy)(async () => {
                                                    let { default: t } = await l.e("153463").then(l.bind(l, 809898));
                                                    return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(q.Dr, {
                                            id: "delete",
                                            label: tt.intl.string(tt.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: tt.intl.formatToPlainString(J.default.ZokHVz, { name: i }),
                                                    subtitle: tt.intl.string(J.default.NmF939),
                                                    confirmText: tt.intl.string(tt.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, D.xx)(e)).ok)
                                                            throw Error(tt.intl.string(J.default.tqKZCi));
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
              children: (t, e) => {
                  let { isShown: l } = e;
                  return (0, n.jsx)(C.K, {
                      ...t,
                      buttonRef: h,
                      icon: Z.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": tt.intl.string(tt.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var tn = l(742589),
    ta = l(769979);
function ts(t) {
    let { title: e, actions: l, breadcrumb: i } = t;
    return (0, n.jsx)(tn.A, {
        hideSearch: !0,
        toolbar: l,
        className: ta.wx,
        "aria-label": e,
        children: (0, n.jsxs)("div", {
            className: ta.QF,
            children: [
                (0, n.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: ta.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(tn.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(tn.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(tn.A.Title, { className: ta.Qw, wrapperClassName: ta.DD, children: e }),
            ],
        }),
    });
}
var tr = l(594483),
    td = l(189213),
    to = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function tc(t) {
    let { reason: e, transitionState: l, onClose: i } = t,
        a = "permissions" === e;
    return (0, n.jsx)(td.Modal, {
        transitionState: l,
        onClose: i,
        title: tt.intl.string(a ? J.default.Rtlv25 : J.default["+UouPe"]),
        subtitle: tt.intl.string(a ? J.default["nDQB/b"] : J.default["E0QD++"]),
        size: "sm",
        actions: [{ text: tt.intl.string(a ? tt.t.BddRzS : J.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function tu(t) {
    (0, te.openModal)((e) => (0, n.jsx)(tc, { ...e, reason: t }));
}
var tm = l(224640),
    tx = l(815021),
    tg = l(652215),
    tp = l(931587),
    th = l(264997);
function tj(t) {
    let { applicationId: e, guildId: l, projectName: i, transitionState: s, onClose: r } = t,
        d = tt.intl.string(J.default.yzxKsU),
        o = tt.intl.formatToPlainString(J.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let t = (0, T.SH)(l, e);
            (0, _.pX)(null == t ? tg.BVt.CHANNEL(l) : tg.BVt.CHANNEL(l, t)), r();
        }, [e, l, r]);
    return (0, n.jsx)(tm.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: tp.zr,
            children: [
                (0, n.jsx)("div", { className: tp.b, children: (0, n.jsx)(tx.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: tp.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: tp.bm,
                            children: (0, n.jsx)("img", { className: tp.yW, src: th, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: tp.R_,
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
                    className: tp.o1,
                    children: [
                        (0, n.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: tt.intl.string(tt.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: tt.intl.string(tt.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function tf(t, e, l) {
    (0, L.Hc)(t);
    let i = await (0, L.vX)(t, e);
    (0, L.dv)(t, l, [i]);
}
function tv(t) {
    let e = "" === t.type ? "application/octet-stream" : t.type;
    return (0, R.x5)(t.size, e)
        ? null
        : tt.intl.formatToPlainString(J.default.AzziHF, { size: (0, R.ZJ)((0, R.yr)(e)) });
}
function tb(t) {
    let e = a.useRef(null),
        l = a.useCallback(
            (e) => {
                let l = e.target.files?.[0] ?? null;
                (e.target.value = ""), null != l && t(l);
            },
            [t],
        );
    return {
        open: () => e.current?.click(),
        input: (0, n.jsx)("input", {
            ref: e,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: l,
        }),
    };
}
var tC = l(165610),
    tN = l(352978);
function tE(t) {
    return (0, n.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function ty(t) {
    return (0, n.jsx)(x.u, { ...t, size: "custom", width: 20, height: 20 });
}
function tk(t) {
    return (0, n.jsx)(g.k, { ...t, size: "custom", width: 20, height: 20 });
}
function tA(t) {
    let { project: e, guildId: l, onSelect: i, onFork: a } = t,
        s = (0, c.bG)([O.Ay], () => O.Ay.isThinking(e.id), [e.id]),
        r =
            null == e.updated_at
                ? null
                : tt.intl.formatToPlainString(J.default.oMDaqr, { time: o()(e.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: tN.OY,
        children: [
            (0, n.jsx)(p.D, {
                className: tN.W6,
                onClick: i,
                children: (0, n.jsxs)("div", {
                    className: tN.MM,
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tN.j1,
                            children: e.name,
                        }),
                        null == r
                            ? null
                            : (0, n.jsx)("div", {
                                  className: tN.h3,
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
                className: tN.M2,
                children: [
                    s ? (0, n.jsx)(M.Ty, { className: tN.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: tN.Pl,
                        children: (0, n.jsx)(ti, {
                            projectId: e.id,
                            projectName: e.name,
                            guildId: l,
                            isOwner: (0, B.P)(e),
                            isPublic: (0, R.XE)(e),
                            supportsVisibility: (0, R.IU)(e),
                            onFork: a,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function tI(t) {
    let { project: e, projectsLoaded: i, onBack: s, guildId: r } = t,
        [d, o] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(!1),
        [y, k] = a.useState(null),
        [A, I] = a.useState(null),
        w = e?.id ?? null,
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
        { data: O, isLoading: M } = (0, P.YY)(e?.preview_application_id ?? void 0),
        U = null != w && A !== w,
        K = F?.preview_ready === !0,
        Y = K && null != F && (!F.integration_installed || F.bot_permissions_changed),
        q = d || U || M,
        W = tt.intl.string(m ? J.default.YdgE0j : J.default.aWVf4j),
        Z = a.useCallback(() => x((t) => !t), []),
        Q = a.useCallback(() => x(!1), []),
        $ = a.useCallback(
            (t) => {
                if (null == e || z.current) return;
                let l = e.id;
                function i() {
                    return V.current && S.current === l;
                }
                (z.current = !0),
                    p(!1),
                    x(!0),
                    k({ entry: t, status: "restoring" }),
                    (0, L.oB)(l, t.sha)
                        .then(
                            () => {
                                i() && k({ entry: t, status: "restored" });
                            },
                            (e) => {
                                i() &&
                                    (k({ entry: t, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, e),
                                    (0, j.P0)((0, f.o)(tt.intl.string(J.default.q6iZ84), v.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (z.current = !1);
                        });
            },
            [e],
        ),
        tn = (0, c.bG)([G.A], () => G.A.isBuilderPreviewMobile()),
        ta = tt.intl.string(tn ? J.default["3uCc8U"] : J.default["+nzCxZ"]),
        td = a.useCallback(() => (0, D.GG)(!tn), [tn]),
        tc = a.useCallback(() => {
            null != e && (x(!0), (0, L.dv)(e.id, tt.intl.string(J.default["2ejwtJ"])));
        }, [e]),
        tm = tb(
            a.useCallback(
                (t) => {
                    if (null == e) return;
                    let l = e.id,
                        i = tv(t);
                    null != i
                        ? (0, j.P0)((0, f.o)(i, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: tt.intl.formatToPlainString(J.default.XYZqZK, { name: e.name }),
                              subtitle: tt.intl.string(J.default["6syXoH"]),
                              confirmText: tt.intl.string(J.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await tf(l, t, tt.intl.string(J.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, f.o)(tt.intl.string(J.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [e],
            ),
        ),
        tx = a.useCallback(() => {
            null != e && (0, tr.A)(e, r);
        }, [e, r]),
        tp = a.useCallback(async () => {
            if (null == w || S.current !== w) return;
            T.current?.abort();
            let t = new AbortController();
            (T.current = t), I(null);
            try {
                await (0, D.U1)(w, t.signal);
            } catch {
            } finally {
                t.signal.aborted || T.current !== t || S.current !== w || I(w);
            }
        }, [w]);
    a.useEffect(
        () => (
            tp(),
            () => {
                T.current?.abort(), (T.current = null);
            }
        ),
        [tp],
    );
    let th = F?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : r,
        tA = a.useCallback(async () => {
            null == e ||
                (e.guild_id === th && e.preview_guild_id === th) ||
                (await (0, D.M7)(e.id, { guild_id: th, preview_guild_id: th }));
        }, [th, e]),
        tI = a.useCallback(async () => {
            try {
                await tA();
            } catch {}
            await tp();
        }, [tp, tA]),
        tw = a.useCallback(() => {
            let t = e?.preview_application_id;
            null != e &&
                null != t &&
                H.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: O ?? null,
                    guildId: th,
                    onClose: () => {
                        tI();
                    },
                });
        }, [tI, th, O, e]),
        tS = Y ? { type: "permissions", onReviewPermissions: tw, loading: M || U } : U ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == e && i && (0, _.pX)(tg.BVt.CHANNEL(r, tl.VV.VIBEGRATIONS));
    }, [r, e, i]);
    let tP = a.useCallback(async () => {
            if (null != e) {
                if (!K) return void tu(to.NO_PREVIEW);
                if (Y) return void tu(to.PERMISSIONS);
                o(!0);
                try {
                    var t;
                    let l = await (0, L.TV)(e.id);
                    if (!0 !== l.ok) throw Error(tt.intl.string(J.default.fNP6Cd));
                    (0, D.tZ)(e.id, { isPreview: !1 }).catch((t) => {
                        console.error("[vibegrations] post-publish refresh failed", e.id, t);
                    }),
                        (t = { applicationId: e.application_id, guildId: r, projectName: e.name }),
                        (0, te.openModal)((e) => (0, n.jsx)(tj, { ...e, ...t }));
                } catch (t) {
                    (0, j.P0)(
                        (0, f.o)(t instanceof Error ? t.message : tt.intl.string(J.default.fNP6Cd), v.Ck.FAILURE),
                    );
                } finally {
                    o(!1);
                }
            }
        }, [r, Y, K, e]),
        t_ = (0, n.jsx)(ts, {
            title: e?.name ?? tt.intl.string(J.default.F2dRba),
            breadcrumb: { title: tt.intl.string(J.default.Xmvb23), onClick: s },
            actions:
                null == e
                    ? null
                    : (0, n.jsxs)("div", {
                          className: tN.wO,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: tN.FO,
                                  children: [
                                      (0, n.jsx)(ti, {
                                          projectId: e.id,
                                          projectName: e.name,
                                          guildId: r,
                                          isOwner: (0, B.P)(e),
                                          isPublic: (0, R.XE)(e),
                                          supportsVisibility: (0, R.IU)(e),
                                          onExport: tc,
                                          onImport: tm.open,
                                          onFork: tx,
                                          onConnectTool: () => {
                                              var t;
                                              return (
                                                  (t = e.id),
                                                  void (0, te.openModalLazy)(async () => {
                                                      let { default: e } = await Promise.all([
                                                          l.e("964476"),
                                                          l.e("461590"),
                                                      ]).then(l.bind(l, 84469));
                                                      return (l) => (0, n.jsx)(e, { ...l, projectId: t });
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
                                          text: ta,
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(C.K, {
                                              icon: tn ? tk : ty,
                                              size: "sm",
                                              variant: "icon-only",
                                              "aria-label": ta,
                                              "aria-pressed": tn,
                                              onClick: td,
                                          }),
                                      }),
                                      (0, n.jsx)(b.m, {
                                          text: W,
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(C.K, {
                                              icon: tE,
                                              size: "sm",
                                              variant: "icon-only",
                                              "aria-label": W,
                                              "aria-pressed": m,
                                              onClick: Z,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, B.P)(e)
                                  ? (0, n.jsx)(N.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: tt.intl.string(J.default["5gU57O"]),
                                        loading: d,
                                        disabled: q,
                                        onClick: tP,
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: tN.nj,
        children: [
            tm.input,
            (0, n.jsx)("main", {
                className: tN.JX,
                children:
                    null == e
                        ? (0, n.jsxs)("div", {
                              className: tN.j5,
                              children: [
                                  t_,
                                  (0, n.jsxs)("div", {
                                      className: tN.sD,
                                      children: [
                                          (0, n.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: tt.intl.string(J.default.F2dRba),
                                          }),
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: tt.intl.string(J.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(N.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: tt.intl.string(J.default["42EdIV"]),
                                              onClick: () => (0, D.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              X.A,
                              {
                                  projectId: e.id,
                                  applicationId: e.preview_application_id,
                                  previewApplicationId: e.preview_application_id,
                                  surface: tC.sd,
                                  header: t_,
                                  chatOpen: m,
                                  onCloseChat: Q,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => p(!1),
                                  onRestoreVersion: $,
                                  restoreState: y,
                                  previewReady: K,
                                  previewGate: tS,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function tw(t) {
    let {
            projects: e,
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
        } = t,
        _ = tb(v),
        V = a.useMemo(
            () =>
                l
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [l],
        ),
        z = a.useMemo(
            () =>
                e
                    .filter((t) => (0, T.X0)(t, d))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, d],
        ),
        H = tt.intl.string(J.default.TU9IGR),
        G = [
            tt.intl.string(J.default["E+Q26x"]),
            tt.intl.string(J.default["06/jqP"]),
            tt.intl.string(J.default["7MCiK9"]),
        ],
        O = a.useCallback(
            (t) => {
                "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), u || f());
            },
            [u, f],
        ),
        L = tt.intl.string(J.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: r()(tN.nj, tN.a0),
        children: [
            (0, n.jsx)(ts, { title: tt.intl.string(J.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: tN.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: tN.ps,
                        children: [
                            (0, n.jsx)(y.Ip, {
                                className: tN.Yy,
                                children: (0, n.jsx)("div", {
                                    className: tN.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(tN.Qs, tN.Ix),
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                children: tt.intl.string(J.default["2tYpRK"]),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: tN.Aw,
                                                children: G.map((t) =>
                                                    (0, n.jsx)(
                                                        p.D,
                                                        {
                                                            "aria-disabled": o,
                                                            className: tN.nx,
                                                            onClick: o ? void 0 : () => f(t),
                                                            children: (0, n.jsx)(h.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-strong",
                                                                className: tN.un,
                                                                children: t,
                                                            }),
                                                        },
                                                        t,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: tN.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(tN.Qs, tN.DA),
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
                                            className: tN.VP,
                                            children: [
                                                (0, n.jsx)(U.A, {
                                                    settings: m ?? R.hk,
                                                    choices:
                                                        null == (0, F.V)()
                                                            ? R.S8
                                                            : {
                                                                  main: [...R.S8.main, ...R.wF.main],
                                                                  subagent: [...R.S8.subagent, ...R.wF.subagent],
                                                                  thinking: R.S8.thinking,
                                                              },
                                                    disabled: o,
                                                    onChange: x,
                                                }),
                                                (0, n.jsx)(N.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: tt.intl.string(tt.t.CumH4u),
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
                        className: tN.pA,
                        "aria-label": tt.intl.string(J.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: tN.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: tN.RM,
                                        children: [
                                            (0, n.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: tt.intl.string(J.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: tt.intl.string(J.default.YnAFtT),
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
                                className: tN.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === z.length
                                        ? (0, n.jsx)("div", { className: tN.E8, children: (0, n.jsx)(I.y, {}) })
                                        : i?.type === "error" && 0 === z.length
                                          ? (0, n.jsxs)("div", {
                                                className: tN.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: tN.JS,
                                                        children: tt.intl.string(J.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: tt.intl.string(J.default["42EdIV"]),
                                                        onClick: () => (0, D.hF)(d),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, n.jsx)("div", {
                                                  className: tN.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: tN.ST,
                                                      children: [
                                                          (0, n.jsx)(w.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tN.sI,
                                                              children: tt.intl.string(J.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: tN.Dq,
                                                  children: z.map((t) =>
                                                      (0, n.jsx)(
                                                          tA,
                                                          {
                                                              project: t,
                                                              guildId: d,
                                                              onSelect: () => g(t.id),
                                                              onFork: () => (0, tr.A)(t, d),
                                                          },
                                                          t.id,
                                                      ),
                                                  ),
                                              }),
                                    V.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: tN.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: tN.uc,
                                                      children: [
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: tt.intl.string(J.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: tt.intl.string(J.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: tN.Dq,
                                                      children: V.map((t) =>
                                                          (0, n.jsx)(
                                                              tA,
                                                              {
                                                                  project: t,
                                                                  guildId: d,
                                                                  onSelect: () => g(t.id),
                                                                  onFork: () => (0, tr.A)(t, d),
                                                              },
                                                              t.id,
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
function tS(t) {
    let { guildId: e, projectId: l } = t,
        i = (0, c.yK)([B.A], () => B.A.getOwnedProjects()),
        s = (0, c.bG)([B.A], () => B.A.getProjectsFetchState()),
        r = (0, c.bG)([V.A, z.A], () => {
            let t = V.A.getGuild(e);
            return null != t && z.A.can(tg.xBc.MANAGE_GUILD, t);
        }, [e]),
        d = (0, c.yK)([B.A], () => (r ? B.A.getSharedProjects(e) : []), [e, r]),
        [o, u] = a.useState(""),
        m = l ?? null,
        [x, g] = a.useState(!1),
        [p, h] = a.useState(null),
        [b, C] = a.useState(null),
        N = o.trim();
    a.useEffect(() => {
        (0, D.hF)(e);
    }, [e, r]),
        a.useEffect(() => {
            (0, D.dm)(e, m);
        }, [e, m]);
    let E = a.useCallback(
            async (t) => {
                let l = (t ?? o).trim();
                if ("" !== l) {
                    null != t && u(t), g(!0), h(null);
                    try {
                        let t = await (0, D.gA)({ guild_id: e });
                        (0, L.Hc)(t),
                            null != b && (0, L.r2)(t, b),
                            (0, L.dv)(t, l),
                            (0, _.pX)(tg.BVt.CHANNEL(e, tl.VV.VIBEGRATIONS, t)),
                            u(""),
                            C(null);
                    } catch (t) {
                        h(t instanceof Error ? t.message : tt.intl.string(J.default.KKkp5Y));
                    } finally {
                        g(!1);
                    }
                }
            },
            [e, o, b],
        ),
        [y, k] = a.useState(!1),
        A = a.useCallback(
            async (t) => {
                let l = tv(t);
                if (null != l) return void (0, j.P0)((0, f.o)(l, v.Ck.FAILURE));
                k(!0);
                let i = null;
                try {
                    (i = await (0, D.gA)({ guild_id: e })),
                        await tf(i, t, tt.intl.string(J.default.KjEtrZ)),
                        (0, _.pX)(tg.BVt.CHANNEL(e, tl.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, D.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, f.o)(tt.intl.string(J.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    k(!1);
                }
            },
            [e],
        ),
        I = a.useCallback(
            (t) => {
                (0, _.pX)(tg.BVt.CHANNEL(e, tl.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        w = a.useCallback(() => {
            (0, _.pX)(tg.BVt.CHANNEL(e, tl.VV.VIBEGRATIONS));
        }, [e]),
        S = a.useCallback((t) => {
            u(t), h(null);
        }, []),
        P = (0, c.bG)([B.A], () => {
            if (null == m) return null;
            let t = B.A.getProject(m);
            return null == t || (0, B.P)(t) || (r && t.guild_id === e) ? t : null;
        }, [m, r, e]),
        R = (0, c.bG)([B.A], () => B.A.hasFetchedGuildProjects(e), [e]);
    return null != m
        ? (0, n.jsx)(tI, { project: P, projectsLoaded: R, onBack: w, guildId: e }, m)
        : (0, n.jsx)(tw, {
              projects: i,
              sharedProjects: d,
              fetchState: s,
              modelSettings: b,
              onModelSettingsChange: C,
              idea: o,
              guildId: e,
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
