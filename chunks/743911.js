l.r(t), l.d(t, { default: () => eP });
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
    p = l(31300),
    g = l(794083),
    h = l(939249),
    j = l(834730),
    f = l(691540),
    v = l(857250),
    b = l(97483),
    C = l(866665),
    N = l(408278),
    E = l(297264),
    k = l(821609),
    y = l(364522),
    A = l(103557),
    I = l(81369),
    w = l(289873),
    S = l(152367),
    _ = l(661531),
    P = l(627363),
    V = l(976860),
    z = l(71393),
    R = l(576705),
    D = l(673724),
    H = l(948230),
    T = l(148555),
    F = l(683180),
    G = l(208137),
    M = l(805332),
    L = l(998939),
    O = l(972786),
    B = l(20386),
    X = l(458156),
    K = l(311656),
    U = l(250872),
    Y = l(922016),
    q = l(980707),
    W = l(477782),
    Z = l(173936),
    Q = l(365199),
    $ = l(871237),
    J = l(957565),
    ee = l(295813),
    et = l(375708),
    el = l(192308),
    ei = l(746080);
function en(e) {
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
            onConnectTool: p,
            onVersionHistory: g,
        } = e,
        h = a.useRef(null),
        j = r && null != x,
        C = r && null != m,
        E = j || null != c || C || null != p || null != g,
        k = J.p5 && null != s;
    return E || k || r
        ? (0, n.jsx)(Y.Y, {
              targetElementRef: h,
              position: "bottom",
              align: "right",
              animation: Y.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, n.jsxs)(q.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": et.intl.string(et.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          E
                              ? (0, n.jsxs)(W.rX, {
                                    children: [
                                        j
                                            ? (0, n.jsx)(W.Dr, {
                                                  id: "fork",
                                                  label: et.intl.string(ee.default.hU9QAE),
                                                  action: x,
                                              })
                                            : null,
                                        null != c
                                            ? (0, n.jsx)(W.Dr, {
                                                  id: "export",
                                                  label: et.intl.string(ee.default["7iamDC"]),
                                                  action: c,
                                              })
                                            : null,
                                        C
                                            ? (0, n.jsx)(W.Dr, {
                                                  id: "import",
                                                  label: et.intl.string(ee.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != p
                                            ? (0, n.jsx)(W.Dr, {
                                                  id: "connect-tool",
                                                  label: et.intl.string(ee.default["3qelzD"]),
                                                  action: p,
                                              })
                                            : null,
                                        null != g
                                            ? (0, n.jsx)(W.Dr, {
                                                  id: "version-history",
                                                  label: et.intl.string(ee.default.jAWwzi),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          k
                              ? (0, n.jsx)(W.rX, {
                                    children: (0, n.jsx)(W.Dr, {
                                        id: "copy-link",
                                        label: et.intl.string(et.t.WqhZss),
                                        icon: Z.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: Z.LinkIcon },
                                        action: () =>
                                            (0, J.C)((0, $.n)(s, ei.VV.VIBEGRATIONS, t), () =>
                                                (0, f.P0)((0, v.o)(et.intl.string(et.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, n.jsxs)(W.rX, {
                                    children: [
                                        o
                                            ? (0, n.jsx)(W.Dr, {
                                                  id: "visibility",
                                                  label: et.intl.string(d ? ee.default.XC0HHn : ee.default["Hn/5vP"]),
                                                  action: () => (0, H.Ok)(t, !d),
                                              })
                                            : null,
                                        (0, n.jsx)(W.Dr, {
                                            id: "rename",
                                            label: et.intl.string(ee.default.fHTQgk),
                                            action: () => {
                                                (0, el.openModalLazy)(async () => {
                                                    let { default: e } = await l.e("153463").then(l.bind(l, 809898));
                                                    return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(W.Dr, {
                                            id: "delete",
                                            label: et.intl.string(et.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: et.intl.formatToPlainString(ee.default.ZokHVz, { name: i }),
                                                    subtitle: et.intl.string(ee.default.NmF939),
                                                    confirmText: et.intl.string(et.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, H.xx)(t)).ok)
                                                            throw Error(et.intl.string(ee.default.tqKZCi));
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
                  return (0, n.jsx)(N.K, {
                      ...e,
                      buttonRef: h,
                      icon: Q.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": et.intl.string(et.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var ea = l(742589),
    es = l(769979);
function er(e) {
    let { title: t, actions: l, breadcrumb: i } = e;
    return (0, n.jsx)(ea.A, {
        hideSearch: !0,
        toolbar: l,
        className: es.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: es.QF,
            children: [
                (0, n.jsx)(S.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: es.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(ea.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(ea.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(ea.A.Title, { className: es.Qw, wrapperClassName: es.DD, children: t }),
            ],
        }),
    });
}
var ed = l(594483),
    eo = l(189213),
    ec = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function eu(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        a = "permissions" === t;
    return (0, n.jsx)(eo.Modal, {
        transitionState: l,
        onClose: i,
        title: et.intl.string(a ? ee.default.Rtlv25 : ee.default["+UouPe"]),
        subtitle: et.intl.string(a ? ee.default["nDQB/b"] : ee.default["E0QD++"]),
        size: "sm",
        actions: [{ text: et.intl.string(a ? et.t.BddRzS : ee.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function em(e) {
    (0, el.openModal)((t) => (0, n.jsx)(eu, { ...t, reason: e }));
}
var ex = l(224640),
    ep = l(815021),
    eg = l(652215),
    eh = l(931587),
    ej = l(264997);
function ef(e) {
    let { applicationId: t, guildId: l, projectName: i, transitionState: s, onClose: r } = e,
        d = et.intl.string(ee.default.yzxKsU),
        o = et.intl.formatToPlainString(ee.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let e = (0, F.SH)(l, t);
            (0, V.pX)(null == e ? eg.BVt.CHANNEL(l) : eg.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, n.jsx)(ex.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: eh.zr,
            children: [
                (0, n.jsx)("div", { className: eh.b, children: (0, n.jsx)(ep.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: eh.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: eh.bm,
                            children: (0, n.jsx)("img", { className: eh.yW, src: ej, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eh.R_,
                            children: [
                                (0, n.jsx)(E.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(j.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: o,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eh.o1,
                    children: [
                        (0, n.jsx)(k.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: et.intl.string(et.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(k.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: et.intl.string(et.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function ev(e, t, l) {
    (0, L.Hc)(e);
    let i = await (0, L.vX)(e, t);
    (0, L.dv)(e, l, [i]);
}
function eb(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, D.x5)(e.size, t)
        ? null
        : et.intl.formatToPlainString(ee.default.AzziHF, { size: (0, D.ZJ)((0, D.yr)(t)) });
}
function eC(e) {
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
var eN = l(165610),
    eE = l(352978);
function ek(e) {
    return (0, n.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function ey(e) {
    return (0, n.jsx)(x.u, { ...e, size: "custom", width: 20, height: 20 });
}
function eA(e) {
    return (0, n.jsx)(p.k, { ...e, size: "custom", width: 20, height: 20 });
}
function eI(e) {
    return (0, n.jsx)(g.b, { ...e, size: "custom", width: 20, height: 20 });
}
function ew(e) {
    let { project: t, guildId: l, onSelect: i, onFork: a } = e,
        s =
            null == t.updated_at
                ? null
                : et.intl.formatToPlainString(ee.default.oMDaqr, { time: o()(t.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: eE.OY,
        children: [
            (0, n.jsx)(h.D, {
                className: eE.W6,
                onClick: i,
                children: (0, n.jsxs)("div", {
                    className: eE.MM,
                    children: [
                        (0, n.jsx)(j.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: eE.j1,
                            children: t.name,
                        }),
                        null == s
                            ? null
                            : (0, n.jsx)("div", {
                                  className: eE.h3,
                                  children: (0, n.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: s,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: eE.M2,
                children: [
                    (0, n.jsx)(B.ID, { projectId: t.id, className: eE.O$ }),
                    (0, n.jsx)("div", {
                        className: eE.Pl,
                        children: (0, n.jsx)(en, {
                            projectId: t.id,
                            projectName: t.name,
                            guildId: l,
                            isOwner: (0, O.P)(t),
                            isPublic: (0, D.XE)(t),
                            supportsVisibility: (0, D.IU)(t),
                            onFork: a,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function eS(e) {
    let { project: t, projectsLoaded: i, onBack: s, guildId: r } = e,
        [d, o] = a.useState(!1),
        [m, x] = a.useState(!0),
        [p, g] = a.useState(!1),
        [h, y] = a.useState(null),
        [A, I] = a.useState(null),
        w = t?.id ?? null,
        S = a.useRef(w),
        _ = a.useRef(!0),
        z = a.useRef(!1),
        R = a.useRef(null);
    (S.current = w),
        a.useEffect(
            () => (
                (_.current = !0),
                () => {
                    _.current = !1;
                }
            ),
            [],
        );
    let F = (0, c.bG)([O.A], () => (null == w ? null : O.A.getIntegrationStatus(w)), [w]),
        { data: G, isLoading: B } = (0, P.YY)(t?.preview_application_id ?? void 0),
        K = null != w && A !== w,
        Y = F?.preview_ready === !0,
        q = Y && null != F && (!F.integration_installed || F.bot_permissions_changed),
        W = d || K || B,
        Z = et.intl.string(ee.default["5gU57O"]),
        Q = et.intl.string(m ? ee.default.YdgE0j : ee.default.aWVf4j),
        $ = a.useCallback(() => x((e) => !e), []),
        J = a.useCallback(() => x(!1), []),
        ea = a.useCallback(
            (e) => {
                if (null == t || z.current) return;
                let l = t.id;
                function i() {
                    return _.current && S.current === l;
                }
                (z.current = !0),
                    g(!1),
                    x(!0),
                    y({ entry: e, status: "restoring" }),
                    (0, L.oB)(l, e.sha)
                        .then(
                            () => {
                                i() && y({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (y({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, f.P0)((0, v.o)(et.intl.string(ee.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (z.current = !1);
                        });
            },
            [t],
        ),
        es = (0, c.bG)([M.A], () => M.A.isBuilderPreviewMobile()),
        eo = et.intl.string(es ? ee.default["3uCc8U"] : ee.default["+nzCxZ"]),
        eu = a.useCallback(() => (0, H.GG)(!es), [es]),
        ex = a.useCallback(() => {
            null != t && (x(!0), (0, L.dv)(t.id, et.intl.string(ee.default["2ejwtJ"])));
        }, [t]),
        ep = eC(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        i = eb(e);
                    null != i
                        ? (0, f.P0)((0, v.o)(i, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: et.intl.formatToPlainString(ee.default.XYZqZK, { name: t.name }),
                              subtitle: et.intl.string(ee.default["6syXoH"]),
                              confirmText: et.intl.string(ee.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await ev(l, e, et.intl.string(ee.default.C7GU2r));
                                  } catch {
                                      (0, f.P0)((0, v.o)(et.intl.string(ee.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eh = a.useCallback(() => {
            null != t && (0, ed.A)(t, r);
        }, [t, r]),
        ej = a.useCallback(async () => {
            if (null == w || S.current !== w) return;
            R.current?.abort();
            let e = new AbortController();
            (R.current = e), I(null);
            try {
                await (0, H.U1)(w, e.signal);
            } catch {
            } finally {
                e.signal.aborted || R.current !== e || S.current !== w || I(w);
            }
        }, [w]);
    a.useEffect(
        () => (
            ej(),
            () => {
                R.current?.abort(), (R.current = null);
            }
        ),
        [ej],
    );
    let ew = F?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eS = a.useCallback(async () => {
            null == t ||
                (t.guild_id === ew && t.preview_guild_id === ew) ||
                (await (0, H.M7)(t.id, { guild_id: ew, preview_guild_id: ew }));
        }, [ew, t]),
        e_ = a.useCallback(async () => {
            try {
                await eS();
            } catch {}
            await ej();
        }, [ej, eS]),
        eP = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                T.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: G ?? null,
                    guildId: ew,
                    onClose: () => {
                        e_();
                    },
                });
        }, [e_, ew, G, t]),
        eV = q ? { type: "permissions", onReviewPermissions: eP, loading: B || K } : K ? { type: "checking" } : void 0,
        {
            mode: ez,
            setMode: eR,
            hasBothModes: eD,
        } = (0, U.fY)(t?.preview_application_id ?? null, t?.preview_application_id ?? null),
        eH = eD && Y && null == eV;
    a.useEffect(() => {
        null == t && i && (0, V.pX)(eg.BVt.CHANNEL(r, ei.VV.VIBEGRATIONS));
    }, [r, t, i]);
    let eT = a.useCallback(async () => {
            if (null != t) {
                if (!Y) return void em(ec.NO_PREVIEW);
                if (q) return void em(ec.PERMISSIONS);
                o(!0);
                try {
                    var e;
                    let l = await (0, L.TV)(t.id);
                    if (!0 !== l.ok) throw Error(et.intl.string(ee.default.fNP6Cd));
                    (0, H.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, el.openModal)((t) => (0, n.jsx)(ef, { ...t, ...e }));
                } catch (e) {
                    (0, f.P0)(
                        (0, v.o)(e instanceof Error ? e.message : et.intl.string(ee.default.fNP6Cd), b.Ck.FAILURE),
                    );
                } finally {
                    o(!1);
                }
            }
        }, [r, q, Y, t]),
        eF = (0, n.jsx)(er, {
            title: t?.name ?? et.intl.string(ee.default.F2dRba),
            breadcrumb: { title: et.intl.string(ee.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, n.jsxs)("div", {
                          className: eE.FO,
                          children: [
                              eH ? (0, n.jsx)(U.Ay, { mode: ez, onChange: eR }) : null,
                              (0, n.jsx)(en, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  isOwner: (0, O.P)(t),
                                  isPublic: (0, D.XE)(t),
                                  supportsVisibility: (0, D.IU)(t),
                                  onExport: ex,
                                  onImport: ep.open,
                                  onFork: eh,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, el.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("964476"),
                                                  l.e("461590"),
                                              ]).then(l.bind(l, 84469));
                                              return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      h?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                x(!0), g(!0);
                                            },
                              }),
                              (0, n.jsx)(C.m, {
                                  text: eo,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(N.K, {
                                      icon: es ? eA : ey,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": eo,
                                      "aria-pressed": es,
                                      onClick: eu,
                                  }),
                              }),
                              (0, n.jsx)(C.m, {
                                  text: Q,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(N.K, {
                                      icon: ek,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": Q,
                                      "aria-pressed": m,
                                      onClick: $,
                                  }),
                              }),
                              (0, O.P)(t)
                                  ? (0, n.jsx)(C.m, {
                                        text: Z,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(N.K, {
                                            icon: eI,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": Z,
                                            loading: d,
                                            disabled: W,
                                            onClick: eT,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: eE.nj,
        children: [
            ep.input,
            (0, n.jsx)("main", {
                className: eE.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: eE.j5,
                              children: [
                                  eF,
                                  (0, n.jsxs)("div", {
                                      className: eE.sD,
                                      children: [
                                          (0, n.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: et.intl.string(ee.default.F2dRba),
                                          }),
                                          (0, n.jsx)(j.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: et.intl.string(ee.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(k.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: et.intl.string(ee.default["42EdIV"]),
                                              onClick: () => (0, H.hF)(r),
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
                                  surface: eN.sd,
                                  header: eF,
                                  chatOpen: m,
                                  onCloseChat: J,
                                  versionHistoryOpen: p,
                                  onCloseVersionHistory: () => g(!1),
                                  onRestoreVersion: ea,
                                  restoreState: h,
                                  previewReady: Y,
                                  previewGate: eV,
                                  previewMode: ez,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function e_(e) {
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
            onSelectProject: p,
            onIdeaChange: g,
            onCreate: f,
            onImportNewProject: v,
            importing: b,
        } = e,
        P = eC(v),
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
                    .filter((e) => (0, F.X0)(e, d))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, d],
        ),
        R = et.intl.string(ee.default.TU9IGR),
        T = [
            et.intl.string(ee.default["E+Q26x"]),
            et.intl.string(ee.default["06/jqP"]),
            et.intl.string(ee.default["7MCiK9"]),
        ],
        M = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || f());
            },
            [u, f],
        ),
        L = et.intl.string(ee.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: r()(eE.nj, eE.a0),
        children: [
            (0, n.jsx)(er, { title: et.intl.string(ee.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: eE.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: eE.ps,
                        children: [
                            (0, n.jsx)(y.Ip, {
                                className: eE.Yy,
                                children: (0, n.jsx)("div", {
                                    className: eE.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(eE.Qs, eE.Ix),
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                children: et.intl.string(ee.default["2tYpRK"]),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: eE.Aw,
                                                children: T.map((e) =>
                                                    (0, n.jsx)(
                                                        h.D,
                                                        {
                                                            "aria-disabled": o,
                                                            className: eE.nx,
                                                            onClick: o ? void 0 : () => f(e),
                                                            children: (0, n.jsx)(j.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-strong",
                                                                className: eE.un,
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
                                className: eE.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(eE.Qs, eE.DA),
                                    children: [
                                        (0, n.jsx)(A.f, {
                                            label: R,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: R,
                                            error: c,
                                            onChange: g,
                                            onKeyDown: M,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: eE.VP,
                                            children: [
                                                (0, n.jsx)(K.A, {
                                                    settings: m ?? D.hk,
                                                    choices: (0, G.e)()
                                                        ? {
                                                              main: [...D.S8.main, ...D.wF.main],
                                                              subagent: [...D.S8.subagent, ...D.wF.subagent],
                                                              thinking: D.S8.thinking,
                                                          }
                                                        : D.S8,
                                                    disabled: o,
                                                    onChange: x,
                                                }),
                                                (0, n.jsx)(k.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: et.intl.string(et.t.CumH4u),
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
                        className: eE.pA,
                        "aria-label": et.intl.string(ee.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: eE.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: eE.RM,
                                        children: [
                                            (0, n.jsx)(j.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: et.intl.string(ee.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(j.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: et.intl.string(ee.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(C.m, {
                                        text: L,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(N.K, {
                                            icon: I.H,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": L,
                                            loading: b,
                                            disabled: b,
                                            onClick: P.open,
                                        }),
                                    }),
                                    P.input,
                                ],
                            }),
                            (0, n.jsxs)(y.Ip, {
                                className: eE.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === z.length
                                        ? (0, n.jsx)("div", { className: eE.E8, children: (0, n.jsx)(w.y, {}) })
                                        : i?.type === "error" && 0 === z.length
                                          ? (0, n.jsxs)("div", {
                                                className: eE.E8,
                                                children: [
                                                    (0, n.jsx)(j.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eE.JS,
                                                        children: et.intl.string(ee.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(k.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: et.intl.string(ee.default["42EdIV"]),
                                                        onClick: () => (0, H.hF)(d),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, n.jsx)("div", {
                                                  className: eE.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: eE.ST,
                                                      children: [
                                                          (0, n.jsx)(S.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(j.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eE.sI,
                                                              children: et.intl.string(ee.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: eE.Dq,
                                                  children: z.map((e) =>
                                                      (0, n.jsx)(
                                                          ew,
                                                          {
                                                              project: e,
                                                              guildId: d,
                                                              onSelect: () => p(e.id),
                                                              onFork: () => (0, ed.A)(e, d),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    V.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: eE.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: eE.uc,
                                                      children: [
                                                          (0, n.jsx)(j.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: et.intl.string(ee.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(j.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: et.intl.string(ee.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: eE.Dq,
                                                      children: V.map((e) =>
                                                          (0, n.jsx)(
                                                              ew,
                                                              {
                                                                  project: e,
                                                                  guildId: d,
                                                                  onSelect: () => p(e.id),
                                                                  onFork: () => (0, ed.A)(e, d),
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
function eP(e) {
    let { guildId: t, projectId: l } = e,
        i = (0, c.yK)([O.A], () => O.A.getOwnedProjects()),
        s = (0, c.bG)([O.A], () => O.A.getProjectsFetchState()),
        r = (0, c.bG)([z.A, R.A], () => {
            let e = z.A.getGuild(t);
            return null != e && R.A.can(eg.xBc.MANAGE_GUILD, e);
        }, [t]),
        d = (0, c.yK)([O.A], () => (r ? O.A.getSharedProjects(t) : []), [t, r]),
        [o, u] = a.useState(""),
        m = l ?? null,
        [x, p] = a.useState(!1),
        [g, h] = a.useState(null),
        [j, C] = a.useState(null),
        N = o.trim();
    a.useEffect(() => {
        (0, H.hF)(t);
    }, [t, r]),
        a.useEffect(() => {
            (0, H.dm)(t, m);
        }, [t, m]);
    let E = a.useCallback(
            async (e) => {
                let l = (e ?? o).trim();
                if ("" !== l) {
                    null != e && u(e), p(!0), h(null);
                    try {
                        let e = await (0, H.gA)({ guild_id: t });
                        (0, L.Hc)(e),
                            null != j && (0, L.r2)(e, j),
                            (0, L.dv)(e, l),
                            (0, V.pX)(eg.BVt.CHANNEL(t, ei.VV.VIBEGRATIONS, e)),
                            u(""),
                            C(null);
                    } catch (e) {
                        h(e instanceof Error ? e.message : et.intl.string(ee.default.KKkp5Y));
                    } finally {
                        p(!1);
                    }
                }
            },
            [t, o, j],
        ),
        [k, y] = a.useState(!1),
        A = a.useCallback(
            async (e) => {
                let l = eb(e);
                if (null != l) return void (0, f.P0)((0, v.o)(l, b.Ck.FAILURE));
                y(!0);
                let i = null;
                try {
                    (i = await (0, H.gA)({ guild_id: t })),
                        await ev(i, e, et.intl.string(ee.default.KjEtrZ)),
                        (0, V.pX)(eg.BVt.CHANNEL(t, ei.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, H.xx)(i).catch(() => void 0)),
                        (0, f.P0)((0, v.o)(et.intl.string(ee.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    y(!1);
                }
            },
            [t],
        ),
        I = a.useCallback(
            (e) => {
                (0, V.pX)(eg.BVt.CHANNEL(t, ei.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        w = a.useCallback(() => {
            (0, V.pX)(eg.BVt.CHANNEL(t, ei.VV.VIBEGRATIONS));
        }, [t]),
        S = a.useCallback((e) => {
            u(e), h(null);
        }, []),
        _ = (0, c.bG)([O.A], () => {
            if (null == m) return null;
            let e = O.A.getProject(m);
            return null == e || (0, O.P)(e) || (r && e.guild_id === t) ? e : null;
        }, [m, r, t]),
        P = (0, c.bG)([O.A], () => O.A.hasFetchedGuildProjects(t), [t]);
    return null != m
        ? (0, n.jsx)(eS, { project: _, projectsLoaded: P, onBack: w, guildId: t }, m)
        : (0, n.jsx)(e_, {
              projects: i,
              sharedProjects: d,
              fetchState: s,
              modelSettings: j,
              onModelSettingsChange: C,
              idea: o,
              guildId: t,
              submitting: x,
              createError: g,
              createDisabled: "" === N || x,
              onSelectProject: I,
              onIdeaChange: S,
              onCreate: E,
              onImportNewProject: A,
              importing: k,
          });
}
