e.r(t), e.d(t, { default: () => lS });
var i,
    n = e(477900),
    a = e(582128),
    s = e(503698),
    r = e.n(s),
    d = e(989349),
    c = e.n(d),
    o = e(17928),
    u = e(314116),
    m = e(534890),
    x = e(646270),
    g = e(31300),
    p = e(939249),
    h = e(834730),
    j = e(691540),
    f = e(857250),
    v = e(97483),
    b = e(866665),
    N = e(408278),
    C = e(821609),
    E = e(297264),
    k = e(364522),
    A = e(103557),
    y = e(81369),
    I = e(289873),
    w = e(152367),
    S = e(661531),
    P = e(627363),
    _ = e(976860),
    V = e(71393),
    z = e(576705),
    R = e(673724),
    D = e(948230),
    T = e(148555),
    H = e(683180),
    G = e(208137),
    F = e(805332),
    O = e(783791),
    L = e(998939),
    M = e(972786),
    X = e(20386),
    B = e(214122),
    K = e(311656),
    U = e(922016),
    Y = e(980707),
    q = e(477782),
    W = e(173936),
    Z = e(365199),
    Q = e(871237),
    $ = e(957565),
    J = e(459864),
    ll = e(375708),
    lt = e(192308),
    le = e(746080);
function li(l) {
    let {
            projectId: t,
            projectName: i,
            guildId: s,
            isOwner: r,
            isPublic: d,
            supportsVisibility: c,
            onExport: o,
            onImport: m,
            onFork: x,
            onConnectTool: g,
        } = l,
        p = a.useRef(null),
        h = r && null != x,
        b = r && null != m,
        C = h || null != o || b || null != g,
        E = $.p5 && null != s;
    return C || E || r
        ? (0, n.jsx)(U.Y, {
              targetElementRef: p,
              position: "bottom",
              align: "right",
              animation: U.Y.Animation.NONE,
              renderPopout: (l) => {
                  let { closePopout: a } = l;
                  return (0, n.jsxs)(Y.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": ll.intl.string(ll.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          C
                              ? (0, n.jsxs)(q.rX, {
                                    children: [
                                        h
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "fork",
                                                  label: ll.intl.string(J.default.hU9QAE),
                                                  action: x,
                                              })
                                            : null,
                                        null != o
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "export",
                                                  label: ll.intl.string(J.default["7iamDC"]),
                                                  action: o,
                                              })
                                            : null,
                                        b
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "import",
                                                  label: ll.intl.string(J.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "connect-tool",
                                                  label: ll.intl.string(J.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          E
                              ? (0, n.jsx)(q.rX, {
                                    children: (0, n.jsx)(q.Dr, {
                                        id: "copy-link",
                                        label: ll.intl.string(ll.t.WqhZss),
                                        icon: W.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: W.LinkIcon },
                                        action: () =>
                                            (0, $.C)((0, Q.n)(s, le.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, f.o)(ll.intl.string(ll.t["L/PwZf"]), v.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, n.jsxs)(q.rX, {
                                    children: [
                                        c
                                            ? (0, n.jsx)(q.Dr, {
                                                  id: "visibility",
                                                  label: ll.intl.string(d ? J.default.XC0HHn : J.default["Hn/5vP"]),
                                                  action: () => (0, D.Ok)(t, !d),
                                              })
                                            : null,
                                        (0, n.jsx)(q.Dr, {
                                            id: "rename",
                                            label: ll.intl.string(J.default.fHTQgk),
                                            action: () => {
                                                (0, lt.openModalLazy)(async () => {
                                                    let { default: l } = await e.e("153463").then(e.bind(e, 809898));
                                                    return (e) => (0, n.jsx)(l, { ...e, projectId: t });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(q.Dr, {
                                            id: "delete",
                                            label: ll.intl.string(ll.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: ll.intl.formatToPlainString(J.default.ZokHVz, { name: i }),
                                                    subtitle: ll.intl.string(J.default.NmF939),
                                                    confirmText: ll.intl.string(ll.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, D.xx)(t)).ok)
                                                            throw Error(ll.intl.string(J.default.tqKZCi));
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
              children: (l, t) => {
                  let { isShown: e } = t;
                  return (0, n.jsx)(N.K, {
                      ...l,
                      buttonRef: p,
                      icon: Z.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": ll.intl.string(ll.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": e,
                  });
              },
          })
        : null;
}
var ln = e(742589),
    la = e(769979);
function ls(l) {
    let { title: t, actions: e, breadcrumb: i } = l;
    return (0, n.jsx)(ln.A, {
        hideSearch: !0,
        toolbar: e,
        className: la.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: la.QF,
            children: [
                (0, n.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: la.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(ln.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(ln.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(ln.A.Title, { className: la.Qw, wrapperClassName: la.DD, children: t }),
            ],
        }),
    });
}
var lr = e(594483),
    ld = e(189213),
    lc = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function lo(l) {
    let { reason: t, transitionState: e, onClose: i } = l,
        a = "permissions" === t;
    return (0, n.jsx)(ld.Modal, {
        transitionState: e,
        onClose: i,
        title: ll.intl.string(a ? J.default.Rtlv25 : J.default["+UouPe"]),
        subtitle: ll.intl.string(a ? J.default["nDQB/b"] : J.default["E0QD++"]),
        size: "sm",
        actions: [{ text: ll.intl.string(a ? ll.t.BddRzS : J.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function lu(l) {
    (0, lt.openModal)((t) => (0, n.jsx)(lo, { ...t, reason: l }));
}
var lm = e(224640),
    lx = e(815021),
    lg = e(652215),
    lp = e(931587),
    lh = e(264997);
function lj(l) {
    let { applicationId: t, guildId: e, projectName: i, transitionState: s, onClose: r } = l,
        d = ll.intl.string(J.default.yzxKsU),
        c = ll.intl.formatToPlainString(J.default.CC69wK, { projectName: i }),
        o = a.useCallback(() => {
            let l = (0, H.SH)(e, t);
            (0, _.pX)(null == l ? lg.BVt.CHANNEL(e) : lg.BVt.CHANNEL(e, l)), r();
        }, [t, e, r]);
    return (0, n.jsx)(lm.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: lp.zr,
            children: [
                (0, n.jsx)("div", { className: lp.b, children: (0, n.jsx)(lx.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: lp.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: lp.bm,
                            children: (0, n.jsx)("img", { className: lp.yW, src: lh, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: lp.R_,
                            children: [
                                (0, n.jsx)(E.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(h.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: lp.o1,
                    children: [
                        (0, n.jsx)(C.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: ll.intl.string(ll.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(C.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: ll.intl.string(ll.t.jVcuVY),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function lf(l, t, e) {
    (0, L.Hc)(l);
    let i = await (0, L.vX)(l, t);
    (0, L.dv)(l, e, [i]);
}
function lv(l) {
    let t = "" === l.type ? "application/octet-stream" : l.type;
    return (0, R.x5)(l.size, t)
        ? null
        : ll.intl.formatToPlainString(J.default.AzziHF, { size: (0, R.ZJ)((0, R.yr)(t)) });
}
function lb(l) {
    let t = a.useRef(null),
        e = a.useCallback(
            (t) => {
                let e = t.target.files?.[0] ?? null;
                (t.target.value = ""), null != e && l(e);
            },
            [l],
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
            onChange: e,
        }),
    };
}
var lN = e(165610),
    lC = e(352978);
function lE(l) {
    return (0, n.jsx)(m.ChatIcon, { ...l, size: "custom", width: 20, height: 20 });
}
function lk(l) {
    return (0, n.jsx)(x.u, { ...l, size: "custom", width: 20, height: 20 });
}
function lA(l) {
    return (0, n.jsx)(g.k, { ...l, size: "custom", width: 20, height: 20 });
}
function ly(l) {
    let { project: t, guildId: e, onSelect: i, onFork: a } = l,
        s = (0, o.bG)([O.Ay], () => O.Ay.isThinking(t.id), [t.id]),
        r =
            null == t.updated_at
                ? null
                : ll.intl.formatToPlainString(J.default.oMDaqr, { time: c()(t.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: lC.OY,
        children: [
            (0, n.jsx)(p.D, {
                className: lC.W6,
                onClick: i,
                children: (0, n.jsxs)("div", {
                    className: lC.MM,
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: lC.j1,
                            children: t.name,
                        }),
                        null == r
                            ? null
                            : (0, n.jsx)("div", {
                                  className: lC.h3,
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
                className: lC.M2,
                children: [
                    s ? (0, n.jsx)(X.Ty, { className: lC.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: lC.Pl,
                        children: (0, n.jsx)(li, {
                            projectId: t.id,
                            projectName: t.name,
                            guildId: e,
                            isOwner: (0, M.P)(t),
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
function lI(l) {
    let { project: t, projectsLoaded: i, onBack: s, guildId: r } = l,
        [d, c] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(null),
        k = t?.id ?? null,
        A = a.useRef(k),
        y = a.useRef(null);
    A.current = k;
    let I = (0, o.bG)([M.A], () => (null == k ? null : M.A.getIntegrationStatus(k)), [k]),
        { data: w, isLoading: S } = (0, P.YY)(t?.preview_application_id ?? void 0),
        V = null != k && g !== k,
        z = I?.preview_ready === !0,
        H = z && null != I && (!I.integration_installed || I.bot_permissions_changed),
        G = d || V || S,
        O = ll.intl.string(m ? J.default.YdgE0j : J.default.aWVf4j),
        X = a.useCallback(() => x((l) => !l), []),
        K = a.useCallback(() => x(!1), []),
        U = (0, o.bG)([F.A], () => F.A.isBuilderPreviewMobile()),
        Y = ll.intl.string(U ? J.default["3uCc8U"] : J.default["+nzCxZ"]),
        q = a.useCallback(() => (0, D.GG)(!U), [U]),
        W = a.useCallback(() => {
            null != t && (x(!0), (0, L.dv)(t.id, ll.intl.string(J.default["2ejwtJ"])));
        }, [t]),
        Z = lb(
            a.useCallback(
                (l) => {
                    if (null == t) return;
                    let e = t.id,
                        i = lv(l);
                    null != i
                        ? (0, j.P0)((0, f.o)(i, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: ll.intl.formatToPlainString(J.default.XYZqZK, { name: t.name }),
                              subtitle: ll.intl.string(J.default["6syXoH"]),
                              confirmText: ll.intl.string(J.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await lf(e, l, ll.intl.string(J.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, f.o)(ll.intl.string(J.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        Q = a.useCallback(() => {
            null != t && (0, lr.A)(t, r);
        }, [t, r]),
        $ = a.useCallback(async () => {
            if (null == k || A.current !== k) return;
            y.current?.abort();
            let l = new AbortController();
            (y.current = l), p(null);
            try {
                await (0, D.U1)(k, l.signal);
            } catch {
            } finally {
                l.signal.aborted || y.current !== l || A.current !== k || p(k);
            }
        }, [k]);
    a.useEffect(
        () => (
            $(),
            () => {
                y.current?.abort(), (y.current = null);
            }
        ),
        [$],
    );
    let ln = I?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        la = a.useCallback(async () => {
            null == t ||
                (t.guild_id === ln && t.preview_guild_id === ln) ||
                (await (0, D.M7)(t.id, { guild_id: ln, preview_guild_id: ln }));
        }, [ln, t]),
        ld = a.useCallback(async () => {
            try {
                await la();
            } catch {}
            await $();
        }, [$, la]),
        lo = a.useCallback(() => {
            let l = t?.preview_application_id;
            null != t &&
                null != l &&
                T.A.openVibegrationsAppInstallModal({
                    applicationId: l,
                    application: w ?? null,
                    guildId: ln,
                    onClose: () => {
                        ld();
                    },
                });
        }, [ld, ln, w, t]),
        lm = H ? { type: "permissions", onReviewPermissions: lo, loading: S || V } : V ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == t && i && (0, _.pX)(lg.BVt.CHANNEL(r, le.VV.VIBEGRATIONS));
    }, [r, t, i]);
    let lx = a.useCallback(async () => {
            if (null != t) {
                if (!z) return void lu(lc.NO_PREVIEW);
                if (H) return void lu(lc.PERMISSIONS);
                c(!0);
                try {
                    var l;
                    let e = await (0, L.TV)(t.id);
                    if (!0 !== e.ok) throw Error(ll.intl.string(J.default.fNP6Cd));
                    (0, D.tZ)(t.id, { isPreview: !1 }).catch((l) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, l);
                    }),
                        (l = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, lt.openModal)((t) => (0, n.jsx)(lj, { ...t, ...l }));
                } catch (l) {
                    (0, j.P0)(
                        (0, f.o)(l instanceof Error ? l.message : ll.intl.string(J.default.fNP6Cd), v.Ck.FAILURE),
                    );
                } finally {
                    c(!1);
                }
            }
        }, [r, H, z, t]),
        lp = (0, n.jsx)(ls, {
            title: t?.name ?? ll.intl.string(J.default.F2dRba),
            breadcrumb: { title: ll.intl.string(J.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, n.jsxs)("div", {
                          className: lC.wO,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: lC.FO,
                                  children: [
                                      (0, n.jsx)(li, {
                                          projectId: t.id,
                                          projectName: t.name,
                                          guildId: r,
                                          isOwner: (0, M.P)(t),
                                          isPublic: (0, R.XE)(t),
                                          supportsVisibility: (0, R.IU)(t),
                                          onExport: W,
                                          onImport: Z.open,
                                          onFork: Q,
                                          onConnectTool: () => {
                                              var l;
                                              return (
                                                  (l = t.id),
                                                  void (0, lt.openModalLazy)(async () => {
                                                      let { default: t } = await Promise.all([
                                                          e.e("964476"),
                                                          e.e("461590"),
                                                      ]).then(e.bind(e, 84469));
                                                      return (e) => (0, n.jsx)(t, { ...e, projectId: l });
                                                  })
                                              );
                                          },
                                      }),
                                      (0, n.jsx)(b.m, {
                                          text: Y,
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(N.K, {
                                              icon: U ? lA : lk,
                                              size: "sm",
                                              variant: "icon-only",
                                              "aria-label": Y,
                                              "aria-pressed": U,
                                              onClick: q,
                                          }),
                                      }),
                                      (0, n.jsx)(b.m, {
                                          text: O,
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(N.K, {
                                              icon: lE,
                                              size: "sm",
                                              variant: "icon-only",
                                              "aria-label": O,
                                              "aria-pressed": m,
                                              onClick: X,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, M.P)(t)
                                  ? (0, n.jsx)(C.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: ll.intl.string(J.default["5gU57O"]),
                                        loading: d,
                                        disabled: G,
                                        onClick: lx,
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: lC.nj,
        children: [
            Z.input,
            (0, n.jsx)("main", {
                className: lC.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: lC.j5,
                              children: [
                                  lp,
                                  (0, n.jsxs)("div", {
                                      className: lC.sD,
                                      children: [
                                          (0, n.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: ll.intl.string(J.default.F2dRba),
                                          }),
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: ll.intl.string(J.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: ll.intl.string(J.default["42EdIV"]),
                                              onClick: () => (0, D.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              B.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: lN.sd,
                                  header: lp,
                                  chatOpen: m,
                                  onCloseChat: K,
                                  previewReady: z,
                                  previewGate: lm,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function lw(l) {
    let {
            projects: t,
            sharedProjects: e,
            fetchState: i,
            idea: s,
            guildId: d,
            submitting: c,
            createError: o,
            createDisabled: u,
            modelSettings: m,
            onModelSettingsChange: x,
            onSelectProject: g,
            onIdeaChange: j,
            onCreate: f,
            onImportNewProject: v,
            importing: P,
        } = l,
        _ = lb(v),
        V = a.useMemo(
            () =>
                e
                    .slice()
                    .sort((l, t) =>
                        null == l.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(l.updated_at),
                    ),
            [e],
        ),
        z = a.useMemo(
            () =>
                t
                    .filter((l) => (0, H.X0)(l, d))
                    .slice()
                    .sort((l, t) =>
                        null == l.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(l.updated_at),
                    ),
            [t, d],
        ),
        T = ll.intl.string(J.default.TU9IGR),
        F = [
            ll.intl.string(J.default["E+Q26x"]),
            ll.intl.string(J.default["06/jqP"]),
            ll.intl.string(J.default["7MCiK9"]),
        ],
        O = a.useCallback(
            (l) => {
                "Enter" !== l.key || l.shiftKey || l.nativeEvent.isComposing || (l.preventDefault(), u || f());
            },
            [u, f],
        ),
        L = ll.intl.string(J.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: r()(lC.nj, lC.a0),
        children: [
            (0, n.jsx)(ls, { title: ll.intl.string(J.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: lC.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: lC.ps,
                        children: [
                            (0, n.jsx)(k.Ip, {
                                className: lC.Yy,
                                children: (0, n.jsx)("div", {
                                    className: lC.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(lC.Qs, lC.Ix),
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                children: ll.intl.string(J.default["2tYpRK"]),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: lC.Aw,
                                                children: F.map((l) =>
                                                    (0, n.jsx)(
                                                        p.D,
                                                        {
                                                            "aria-disabled": c,
                                                            className: lC.nx,
                                                            onClick: c ? void 0 : () => f(l),
                                                            children: (0, n.jsx)(h.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-strong",
                                                                className: lC.un,
                                                                children: l,
                                                            }),
                                                        },
                                                        l,
                                                    ),
                                                ),
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: lC.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(lC.Qs, lC.DA),
                                    children: [
                                        (0, n.jsx)(A.f, {
                                            label: T,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: T,
                                            error: o,
                                            onChange: j,
                                            onKeyDown: O,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: lC.VP,
                                            children: [
                                                (0, n.jsx)(K.A, {
                                                    settings: m ?? R.hk,
                                                    choices:
                                                        null == (0, G.V)()
                                                            ? R.S8
                                                            : {
                                                                  main: [...R.S8.main, ...R.wF.main],
                                                                  subagent: [...R.S8.subagent, ...R.wF.subagent],
                                                                  thinking: R.S8.thinking,
                                                              },
                                                    disabled: c,
                                                    onChange: x,
                                                }),
                                                (0, n.jsx)(C.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: ll.intl.string(ll.t.CumH4u),
                                                    disabled: u,
                                                    loading: c,
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
                        className: lC.pA,
                        "aria-label": ll.intl.string(J.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: lC.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: lC.RM,
                                        children: [
                                            (0, n.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: ll.intl.string(J.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: ll.intl.string(J.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(b.m, {
                                        text: L,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(N.K, {
                                            icon: y.H,
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
                            (0, n.jsxs)(k.Ip, {
                                className: lC.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === z.length
                                        ? (0, n.jsx)("div", { className: lC.E8, children: (0, n.jsx)(I.y, {}) })
                                        : i?.type === "error" && 0 === z.length
                                          ? (0, n.jsxs)("div", {
                                                className: lC.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: lC.JS,
                                                        children: ll.intl.string(J.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(C.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: ll.intl.string(J.default["42EdIV"]),
                                                        onClick: () => (0, D.hF)(d),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, n.jsx)("div", {
                                                  className: lC.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: lC.ST,
                                                      children: [
                                                          (0, n.jsx)(w.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: lC.sI,
                                                              children: ll.intl.string(J.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: lC.Dq,
                                                  children: z.map((l) =>
                                                      (0, n.jsx)(
                                                          ly,
                                                          {
                                                              project: l,
                                                              guildId: d,
                                                              onSelect: () => g(l.id),
                                                              onFork: () => (0, lr.A)(l, d),
                                                          },
                                                          l.id,
                                                      ),
                                                  ),
                                              }),
                                    V.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: lC.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: lC.uc,
                                                      children: [
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: ll.intl.string(J.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: ll.intl.string(J.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: lC.Dq,
                                                      children: V.map((l) =>
                                                          (0, n.jsx)(
                                                              ly,
                                                              {
                                                                  project: l,
                                                                  guildId: d,
                                                                  onSelect: () => g(l.id),
                                                                  onFork: () => (0, lr.A)(l, d),
                                                              },
                                                              l.id,
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
function lS(l) {
    let { guildId: t, projectId: e } = l,
        i = (0, o.yK)([M.A], () => M.A.getOwnedProjects()),
        s = (0, o.bG)([M.A], () => M.A.getProjectsFetchState()),
        r = (0, o.bG)([V.A, z.A], () => {
            let l = V.A.getGuild(t);
            return null != l && z.A.can(lg.xBc.MANAGE_GUILD, l);
        }, [t]),
        d = (0, o.yK)([M.A], () => (r ? M.A.getSharedProjects(t) : []), [t, r]),
        [c, u] = a.useState(""),
        m = e ?? null,
        [x, g] = a.useState(!1),
        [p, h] = a.useState(null),
        [b, N] = a.useState(null),
        C = c.trim();
    a.useEffect(() => {
        (0, D.hF)(t);
    }, [t, r]),
        a.useEffect(() => {
            (0, D.dm)(t, m);
        }, [t, m]);
    let E = a.useCallback(
            async (l) => {
                let e = (l ?? c).trim();
                if ("" !== e) {
                    null != l && u(l), g(!0), h(null);
                    try {
                        let l = await (0, D.gA)({ guild_id: t });
                        (0, L.Hc)(l),
                            null != b && (0, L.r2)(l, b),
                            (0, L.dv)(l, e),
                            (0, _.pX)(lg.BVt.CHANNEL(t, le.VV.VIBEGRATIONS, l)),
                            u(""),
                            N(null);
                    } catch (l) {
                        h(l instanceof Error ? l.message : ll.intl.string(J.default.KKkp5Y));
                    } finally {
                        g(!1);
                    }
                }
            },
            [t, c, b],
        ),
        [k, A] = a.useState(!1),
        y = a.useCallback(
            async (l) => {
                let e = lv(l);
                if (null != e) return void (0, j.P0)((0, f.o)(e, v.Ck.FAILURE));
                A(!0);
                let i = null;
                try {
                    (i = await (0, D.gA)({ guild_id: t })),
                        await lf(i, l, ll.intl.string(J.default.KjEtrZ)),
                        (0, _.pX)(lg.BVt.CHANNEL(t, le.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, D.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, f.o)(ll.intl.string(J.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    A(!1);
                }
            },
            [t],
        ),
        I = a.useCallback(
            (l) => {
                (0, _.pX)(lg.BVt.CHANNEL(t, le.VV.VIBEGRATIONS, l));
            },
            [t],
        ),
        w = a.useCallback(() => {
            (0, _.pX)(lg.BVt.CHANNEL(t, le.VV.VIBEGRATIONS));
        }, [t]),
        S = a.useCallback((l) => {
            u(l), h(null);
        }, []),
        P = (0, o.bG)([M.A], () => {
            if (null == m) return null;
            let l = M.A.getProject(m);
            return null == l || (0, M.P)(l) || (r && l.guild_id === t) ? l : null;
        }, [m, r, t]),
        R = (0, o.bG)([M.A], () => M.A.hasFetchedGuildProjects(t), [t]);
    return null != m
        ? (0, n.jsx)(lI, { project: P, projectsLoaded: R, onBack: w, guildId: t })
        : (0, n.jsx)(lw, {
              projects: i,
              sharedProjects: d,
              fetchState: s,
              modelSettings: b,
              onModelSettingsChange: N,
              idea: c,
              guildId: t,
              submitting: x,
              createError: p,
              createDisabled: "" === C || x,
              onSelectProject: I,
              onIdeaChange: S,
              onCreate: E,
              onImportNewProject: y,
              importing: k,
          });
}
