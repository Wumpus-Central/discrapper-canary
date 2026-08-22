l.r(t), l.d(t, { default: () => eV });
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
    p = l(794083),
    h = l(939249),
    j = l(834730),
    f = l(691540),
    v = l(857250),
    b = l(97483),
    C = l(866665),
    N = l(408278),
    E = l(297264),
    y = l(821609),
    k = l(364522),
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
    L = l(783791),
    O = l(998939),
    B = l(972786),
    X = l(20386),
    K = l(282195),
    U = l(311656),
    Y = l(250872),
    q = l(922016),
    W = l(980707),
    Z = l(477782),
    Q = l(173936),
    $ = l(365199),
    J = l(871237),
    ee = l(957565),
    et = l(295813),
    el = l(375708),
    ei = l(192308),
    en = l(746080);
function ea(e) {
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
        j = r && null != x,
        C = r && null != m,
        E = j || null != c || C || null != g || null != p,
        y = ee.p5 && null != s;
    return E || y || r
        ? (0, n.jsx)(q.Y, {
              targetElementRef: h,
              position: "bottom",
              align: "right",
              animation: q.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, n.jsxs)(W.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": el.intl.string(el.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          E
                              ? (0, n.jsxs)(Z.rX, {
                                    children: [
                                        j
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "fork",
                                                  label: el.intl.string(et.default.hU9QAE),
                                                  action: x,
                                              })
                                            : null,
                                        null != c
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "export",
                                                  label: el.intl.string(et.default["7iamDC"]),
                                                  action: c,
                                              })
                                            : null,
                                        C
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "import",
                                                  label: el.intl.string(et.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "connect-tool",
                                                  label: el.intl.string(et.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != p
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "version-history",
                                                  label: el.intl.string(et.default.jAWwzi),
                                                  action: p,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          y
                              ? (0, n.jsx)(Z.rX, {
                                    children: (0, n.jsx)(Z.Dr, {
                                        id: "copy-link",
                                        label: el.intl.string(el.t.WqhZss),
                                        icon: Q.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: Q.LinkIcon },
                                        action: () =>
                                            (0, ee.C)((0, J.n)(s, en.VV.VIBEGRATIONS, t), () =>
                                                (0, f.P0)((0, v.o)(el.intl.string(el.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, n.jsxs)(Z.rX, {
                                    children: [
                                        o
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "visibility",
                                                  label: el.intl.string(d ? et.default.XC0HHn : et.default["Hn/5vP"]),
                                                  action: () => (0, H.Ok)(t, !d),
                                              })
                                            : null,
                                        (0, n.jsx)(Z.Dr, {
                                            id: "rename",
                                            label: el.intl.string(et.default.fHTQgk),
                                            action: () => {
                                                (0, ei.openModalLazy)(async () => {
                                                    let { default: e } = await l.e("153463").then(l.bind(l, 809898));
                                                    return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(Z.Dr, {
                                            id: "delete",
                                            label: el.intl.string(el.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: el.intl.formatToPlainString(et.default.ZokHVz, { name: i }),
                                                    subtitle: el.intl.string(et.default.NmF939),
                                                    confirmText: el.intl.string(el.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, H.xx)(t)).ok)
                                                            throw Error(el.intl.string(et.default.tqKZCi));
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
                      icon: $.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": el.intl.string(el.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var es = l(742589),
    er = l(769979);
function ed(e) {
    let { title: t, actions: l, breadcrumb: i } = e;
    return (0, n.jsx)(es.A, {
        hideSearch: !0,
        toolbar: l,
        className: er.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: er.QF,
            children: [
                (0, n.jsx)(S.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: _.A.colors.TEXT_STRONG,
                    className: er.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(es.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(es.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(es.A.Title, { className: er.Qw, wrapperClassName: er.DD, children: t }),
            ],
        }),
    });
}
var eo = l(594483),
    ec = l(189213),
    eu = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function em(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        a = "permissions" === t;
    return (0, n.jsx)(ec.Modal, {
        transitionState: l,
        onClose: i,
        title: el.intl.string(a ? et.default.Rtlv25 : et.default["+UouPe"]),
        subtitle: el.intl.string(a ? et.default["nDQB/b"] : et.default["E0QD++"]),
        size: "sm",
        actions: [{ text: el.intl.string(a ? el.t.BddRzS : et.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function ex(e) {
    (0, ei.openModal)((t) => (0, n.jsx)(em, { ...t, reason: e }));
}
var eg = l(224640),
    ep = l(815021),
    eh = l(652215),
    ej = l(931587),
    ef = l(264997);
function ev(e) {
    let { applicationId: t, guildId: l, projectName: i, transitionState: s, onClose: r } = e,
        d = el.intl.string(et.default.yzxKsU),
        o = el.intl.formatToPlainString(et.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let e = (0, F.SH)(l, t);
            (0, V.pX)(null == e ? eh.BVt.CHANNEL(l) : eh.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, n.jsx)(eg.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: ej.zr,
            children: [
                (0, n.jsx)("div", { className: ej.b, children: (0, n.jsx)(ep.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: ej.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: ej.bm,
                            children: (0, n.jsx)("img", { className: ej.yW, src: ef, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: ej.R_,
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
                    className: ej.o1,
                    children: [
                        (0, n.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: el.intl.string(el.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: el.intl.string(el.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function eb(e, t, l) {
    (0, O.Hc)(e);
    let i = await (0, O.vX)(e, t);
    (0, O.dv)(e, l, [i]);
}
function eC(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, D.x5)(e.size, t)
        ? null
        : el.intl.formatToPlainString(et.default.AzziHF, { size: (0, D.ZJ)((0, D.yr)(t)) });
}
function eN(e) {
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
var eE = l(165610),
    ey = l(352978);
function ek(e) {
    return (0, n.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function eA(e) {
    return (0, n.jsx)(x.u, { ...e, size: "custom", width: 20, height: 20 });
}
function eI(e) {
    return (0, n.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function ew(e) {
    return (0, n.jsx)(p.b, { ...e, size: "custom", width: 20, height: 20 });
}
function eS(e) {
    let { project: t, guildId: l, onSelect: i, onFork: a } = e,
        s = (0, c.bG)([L.Ay], () => L.Ay.isThinking(t.id), [t.id]),
        r =
            null == t.updated_at
                ? null
                : el.intl.formatToPlainString(et.default.oMDaqr, { time: o()(t.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: ey.OY,
        children: [
            (0, n.jsx)(h.D, {
                className: ey.W6,
                onClick: i,
                children: (0, n.jsxs)("div", {
                    className: ey.MM,
                    children: [
                        (0, n.jsx)(j.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: ey.j1,
                            children: t.name,
                        }),
                        null == r
                            ? null
                            : (0, n.jsx)("div", {
                                  className: ey.h3,
                                  children: (0, n.jsx)(j.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: r,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: ey.M2,
                children: [
                    s ? (0, n.jsx)(X.Ty, { className: ey.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: ey.Pl,
                        children: (0, n.jsx)(ea, {
                            projectId: t.id,
                            projectName: t.name,
                            guildId: l,
                            isOwner: (0, B.P)(t),
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
function e_(e) {
    let { project: t, projectsLoaded: i, onBack: s, guildId: r } = e,
        [d, o] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(!1),
        [h, k] = a.useState(null),
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
    let F = (0, c.bG)([B.A], () => (null == w ? null : B.A.getIntegrationStatus(w)), [w]),
        { data: G, isLoading: L } = (0, P.YY)(t?.preview_application_id ?? void 0),
        X = null != w && A !== w,
        U = F?.preview_ready === !0,
        q = U && null != F && (!F.integration_installed || F.bot_permissions_changed),
        W = d || X || L,
        Z = el.intl.string(et.default["5gU57O"]),
        Q = el.intl.string(m ? et.default.YdgE0j : et.default.aWVf4j),
        $ = a.useCallback(() => x((e) => !e), []),
        J = a.useCallback(() => x(!1), []),
        ee = a.useCallback(
            (e) => {
                if (null == t || z.current) return;
                let l = t.id;
                function i() {
                    return _.current && S.current === l;
                }
                (z.current = !0),
                    p(!1),
                    x(!0),
                    k({ entry: e, status: "restoring" }),
                    (0, O.oB)(l, e.sha)
                        .then(
                            () => {
                                i() && k({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (k({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, f.P0)((0, v.o)(el.intl.string(et.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (z.current = !1);
                        });
            },
            [t],
        ),
        es = (0, c.bG)([M.A], () => M.A.isBuilderPreviewMobile()),
        er = el.intl.string(es ? et.default["3uCc8U"] : et.default["+nzCxZ"]),
        ec = a.useCallback(() => (0, H.GG)(!es), [es]),
        em = a.useCallback(() => {
            null != t && (x(!0), (0, O.dv)(t.id, el.intl.string(et.default["2ejwtJ"])));
        }, [t]),
        eg = eN(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        i = eC(e);
                    null != i
                        ? (0, f.P0)((0, v.o)(i, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: el.intl.formatToPlainString(et.default.XYZqZK, { name: t.name }),
                              subtitle: el.intl.string(et.default["6syXoH"]),
                              confirmText: el.intl.string(et.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await eb(l, e, el.intl.string(et.default.C7GU2r));
                                  } catch {
                                      (0, f.P0)((0, v.o)(el.intl.string(et.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        ep = a.useCallback(() => {
            null != t && (0, eo.A)(t, r);
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
    let ef = F?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eS = a.useCallback(async () => {
            null == t ||
                (t.guild_id === ef && t.preview_guild_id === ef) ||
                (await (0, H.M7)(t.id, { guild_id: ef, preview_guild_id: ef }));
        }, [ef, t]),
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
                    guildId: ef,
                    onClose: () => {
                        e_();
                    },
                });
        }, [e_, ef, G, t]),
        eV = q ? { type: "permissions", onReviewPermissions: eP, loading: L || X } : X ? { type: "checking" } : void 0,
        {
            mode: ez,
            setMode: eR,
            hasBothModes: eD,
        } = (0, Y.fY)(t?.preview_application_id ?? null, t?.preview_application_id ?? null),
        eH = eD && U && null == eV;
    a.useEffect(() => {
        null == t && i && (0, V.pX)(eh.BVt.CHANNEL(r, en.VV.VIBEGRATIONS));
    }, [r, t, i]);
    let eT = a.useCallback(async () => {
            if (null != t) {
                if (!U) return void ex(eu.NO_PREVIEW);
                if (q) return void ex(eu.PERMISSIONS);
                o(!0);
                try {
                    var e;
                    let l = await (0, O.TV)(t.id);
                    if (!0 !== l.ok) throw Error(el.intl.string(et.default.fNP6Cd));
                    (0, H.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, ei.openModal)((t) => (0, n.jsx)(ev, { ...t, ...e }));
                } catch (e) {
                    (0, f.P0)(
                        (0, v.o)(e instanceof Error ? e.message : el.intl.string(et.default.fNP6Cd), b.Ck.FAILURE),
                    );
                } finally {
                    o(!1);
                }
            }
        }, [r, q, U, t]),
        eF = (0, n.jsx)(ed, {
            title: t?.name ?? el.intl.string(et.default.F2dRba),
            breadcrumb: { title: el.intl.string(et.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, n.jsxs)("div", {
                          className: ey.FO,
                          children: [
                              eH ? (0, n.jsx)(Y.Ay, { mode: ez, onChange: eR }) : null,
                              (0, n.jsx)(ea, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  isOwner: (0, B.P)(t),
                                  isPublic: (0, D.XE)(t),
                                  supportsVisibility: (0, D.IU)(t),
                                  onExport: em,
                                  onImport: eg.open,
                                  onFork: ep,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, ei.openModalLazy)(async () => {
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
                                                x(!0), p(!0);
                                            },
                              }),
                              (0, n.jsx)(C.m, {
                                  text: er,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(N.K, {
                                      icon: es ? eI : eA,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": er,
                                      "aria-pressed": es,
                                      onClick: ec,
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
                              (0, B.P)(t)
                                  ? (0, n.jsx)(C.m, {
                                        text: Z,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(N.K, {
                                            icon: ew,
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
        className: ey.nj,
        children: [
            eg.input,
            (0, n.jsx)("main", {
                className: ey.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: ey.j5,
                              children: [
                                  eF,
                                  (0, n.jsxs)("div", {
                                      className: ey.sD,
                                      children: [
                                          (0, n.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: el.intl.string(et.default.F2dRba),
                                          }),
                                          (0, n.jsx)(j.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: el.intl.string(et.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(y.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: el.intl.string(et.default["42EdIV"]),
                                              onClick: () => (0, H.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              K.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: eE.sd,
                                  header: eF,
                                  chatOpen: m,
                                  onCloseChat: J,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => p(!1),
                                  onRestoreVersion: ee,
                                  restoreState: h,
                                  previewReady: U,
                                  previewGate: eV,
                                  previewMode: ez,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function eP(e) {
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
            onIdeaChange: p,
            onCreate: f,
            onImportNewProject: v,
            importing: b,
        } = e,
        P = eN(v),
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
        R = el.intl.string(et.default.TU9IGR),
        T = [
            el.intl.string(et.default["E+Q26x"]),
            el.intl.string(et.default["06/jqP"]),
            el.intl.string(et.default["7MCiK9"]),
        ],
        M = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || f());
            },
            [u, f],
        ),
        L = el.intl.string(et.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: r()(ey.nj, ey.a0),
        children: [
            (0, n.jsx)(ed, { title: el.intl.string(et.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: ey.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: ey.ps,
                        children: [
                            (0, n.jsx)(k.Ip, {
                                className: ey.Yy,
                                children: (0, n.jsx)("div", {
                                    className: ey.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(ey.Qs, ey.Ix),
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                children: el.intl.string(et.default["2tYpRK"]),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: ey.Aw,
                                                children: T.map((e) =>
                                                    (0, n.jsx)(
                                                        h.D,
                                                        {
                                                            "aria-disabled": o,
                                                            className: ey.nx,
                                                            onClick: o ? void 0 : () => f(e),
                                                            children: (0, n.jsx)(j.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-strong",
                                                                className: ey.un,
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
                                className: ey.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(ey.Qs, ey.DA),
                                    children: [
                                        (0, n.jsx)(A.f, {
                                            label: R,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: R,
                                            error: c,
                                            onChange: p,
                                            onKeyDown: M,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: ey.VP,
                                            children: [
                                                (0, n.jsx)(U.A, {
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
                                                (0, n.jsx)(y.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: el.intl.string(el.t.CumH4u),
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
                        className: ey.pA,
                        "aria-label": el.intl.string(et.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: ey.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ey.RM,
                                        children: [
                                            (0, n.jsx)(j.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: el.intl.string(et.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(j.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: el.intl.string(et.default.YnAFtT),
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
                            (0, n.jsxs)(k.Ip, {
                                className: ey.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === z.length
                                        ? (0, n.jsx)("div", { className: ey.E8, children: (0, n.jsx)(w.y, {}) })
                                        : i?.type === "error" && 0 === z.length
                                          ? (0, n.jsxs)("div", {
                                                className: ey.E8,
                                                children: [
                                                    (0, n.jsx)(j.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: ey.JS,
                                                        children: el.intl.string(et.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(y.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: el.intl.string(et.default["42EdIV"]),
                                                        onClick: () => (0, H.hF)(d),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, n.jsx)("div", {
                                                  className: ey.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: ey.ST,
                                                      children: [
                                                          (0, n.jsx)(S.D, {
                                                              size: "lg",
                                                              color: _.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(j.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: ey.sI,
                                                              children: el.intl.string(et.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: ey.Dq,
                                                  children: z.map((e) =>
                                                      (0, n.jsx)(
                                                          eS,
                                                          {
                                                              project: e,
                                                              guildId: d,
                                                              onSelect: () => g(e.id),
                                                              onFork: () => (0, eo.A)(e, d),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    V.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: ey.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: ey.uc,
                                                      children: [
                                                          (0, n.jsx)(j.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: el.intl.string(et.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(j.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: el.intl.string(et.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ey.Dq,
                                                      children: V.map((e) =>
                                                          (0, n.jsx)(
                                                              eS,
                                                              {
                                                                  project: e,
                                                                  guildId: d,
                                                                  onSelect: () => g(e.id),
                                                                  onFork: () => (0, eo.A)(e, d),
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
function eV(e) {
    let { guildId: t, projectId: l } = e,
        i = (0, c.yK)([B.A], () => B.A.getOwnedProjects()),
        s = (0, c.bG)([B.A], () => B.A.getProjectsFetchState()),
        r = (0, c.bG)([z.A, R.A], () => {
            let e = z.A.getGuild(t);
            return null != e && R.A.can(eh.xBc.MANAGE_GUILD, e);
        }, [t]),
        d = (0, c.yK)([B.A], () => (r ? B.A.getSharedProjects(t) : []), [t, r]),
        [o, u] = a.useState(""),
        m = l ?? null,
        [x, g] = a.useState(!1),
        [p, h] = a.useState(null),
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
                    null != e && u(e), g(!0), h(null);
                    try {
                        let e = await (0, H.gA)({ guild_id: t });
                        (0, O.Hc)(e),
                            null != j && (0, O.r2)(e, j),
                            (0, O.dv)(e, l),
                            (0, V.pX)(eh.BVt.CHANNEL(t, en.VV.VIBEGRATIONS, e)),
                            u(""),
                            C(null);
                    } catch (e) {
                        h(e instanceof Error ? e.message : el.intl.string(et.default.KKkp5Y));
                    } finally {
                        g(!1);
                    }
                }
            },
            [t, o, j],
        ),
        [y, k] = a.useState(!1),
        A = a.useCallback(
            async (e) => {
                let l = eC(e);
                if (null != l) return void (0, f.P0)((0, v.o)(l, b.Ck.FAILURE));
                k(!0);
                let i = null;
                try {
                    (i = await (0, H.gA)({ guild_id: t })),
                        await eb(i, e, el.intl.string(et.default.KjEtrZ)),
                        (0, V.pX)(eh.BVt.CHANNEL(t, en.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, H.xx)(i).catch(() => void 0)),
                        (0, f.P0)((0, v.o)(el.intl.string(et.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    k(!1);
                }
            },
            [t],
        ),
        I = a.useCallback(
            (e) => {
                (0, V.pX)(eh.BVt.CHANNEL(t, en.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        w = a.useCallback(() => {
            (0, V.pX)(eh.BVt.CHANNEL(t, en.VV.VIBEGRATIONS));
        }, [t]),
        S = a.useCallback((e) => {
            u(e), h(null);
        }, []),
        _ = (0, c.bG)([B.A], () => {
            if (null == m) return null;
            let e = B.A.getProject(m);
            return null == e || (0, B.P)(e) || (r && e.guild_id === t) ? e : null;
        }, [m, r, t]),
        P = (0, c.bG)([B.A], () => B.A.hasFetchedGuildProjects(t), [t]);
    return null != m
        ? (0, n.jsx)(e_, { project: _, projectsLoaded: P, onBack: w, guildId: t }, m)
        : (0, n.jsx)(eP, {
              projects: i,
              sharedProjects: d,
              fetchState: s,
              modelSettings: j,
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
