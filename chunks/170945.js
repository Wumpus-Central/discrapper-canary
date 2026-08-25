l.r(t), l.d(t, { default: () => eL });
var i,
    n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    o = l(536637),
    d = l.n(o),
    c = l(17928),
    u = l(314116),
    m = l(534890),
    x = l(646270),
    g = l(31300),
    p = l(794083),
    f = l(939249),
    h = l(834730),
    j = l(691540),
    v = l(857250),
    b = l(97483),
    N = l(866665),
    C = l(408278),
    E = l(297264),
    y = l(821609),
    A = l(364522),
    I = l(103557),
    k = l(81369),
    w = l(289873),
    S = l(152367),
    P = l(661531),
    R = l(627363),
    _ = l(625180),
    z = l(672929),
    V = l(976860),
    D = l(71393),
    T = l(576705),
    L = l(295813),
    G = l(375708),
    H = l(673724),
    B = l(948230),
    F = l(105810),
    U = l(683180),
    K = l(208137),
    X = l(805332),
    O = l(18739),
    M = l(972786),
    Y = l(20386),
    q = l(950884),
    Z = l(311656),
    W = l(250872),
    Q = l(922016),
    $ = l(980707),
    J = l(477782),
    ee = l(663417),
    et = l(70688),
    el = l(173936),
    ei = l(365199),
    en = l(871237),
    ea = l(957565),
    es = l(192308),
    er = l(746080);
function eo(e) {
    let {
            projectId: t,
            projectName: i,
            guildId: s,
            isOwner: r,
            isPublic: o,
            isShared: d,
            supportsVisibility: c,
            onExport: m,
            onImport: x,
            onRemix: g,
            onConnectTool: p,
            onVersionHistory: f,
            onRefresh: h,
            isRefreshing: N = !1,
            onClose: E,
        } = e,
        y = a.useRef(null),
        A = null != g && (r || d),
        I = r && null != x,
        k = A || null != m || I || null != p || null != f,
        w = ea.p5 && null != s;
    return null != h || null != E || k || w || r
        ? (0, n.jsx)(Q.Y, {
              targetElementRef: y,
              position: "bottom",
              align: "right",
              animation: Q.Y.Animation.NONE,
              renderPopout: (e) => {
                  let { closePopout: a } = e;
                  return (0, n.jsxs)($.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${t}`,
                      "aria-label": G.intl.string(G.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          null != h || null != E
                              ? (0, n.jsxs)(J.rX, {
                                    children: [
                                        null != h
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "refresh",
                                                  icon: ee.RefreshIcon,
                                                  leadingAccessory: { type: "icon", icon: ee.RefreshIcon },
                                                  label: G.intl.string(L.default.xKexN1),
                                                  disabled: N,
                                                  action: h,
                                              })
                                            : null,
                                        null != E
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "close",
                                                  icon: et.DoorExitIcon,
                                                  leadingAccessory: { type: "icon", icon: et.DoorExitIcon },
                                                  label: G.intl.string(L.default.Ea0Wrr),
                                                  action: E,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          k
                              ? (0, n.jsxs)(J.rX, {
                                    children: [
                                        A
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "remix",
                                                  label: G.intl.string(L.default.vPI794),
                                                  action: g,
                                              })
                                            : null,
                                        null != m
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "export",
                                                  label: G.intl.string(L.default["7iamDC"]),
                                                  action: m,
                                              })
                                            : null,
                                        I
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "import",
                                                  label: G.intl.string(L.default.lf8HqE),
                                                  action: x,
                                              })
                                            : null,
                                        null != p
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "connect-tool",
                                                  label: G.intl.string(L.default["3qelzD"]),
                                                  action: p,
                                              })
                                            : null,
                                        null != f
                                            ? (0, n.jsx)(J.Dr, {
                                                  id: "version-history",
                                                  label: G.intl.string(L.default.jAWwzi),
                                                  action: f,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          w
                              ? (0, n.jsx)(J.rX, {
                                    children: (0, n.jsx)(J.Dr, {
                                        id: "copy-link",
                                        label: G.intl.string(G.t.WqhZss),
                                        icon: el.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: el.LinkIcon },
                                        action: () =>
                                            (0, ea.C)((0, en.n)(s, er.VV.VIBEGRATIONS, t), () =>
                                                (0, j.P0)((0, v.o)(G.intl.string(G.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, n.jsxs)(J.rX, {
                                    children: [
                                        c
                                            ? (0, n.jsx)(J.sL, {
                                                  id: "visibility",
                                                  label: G.intl.string(L.default.fvxLKl),
                                                  checked: o,
                                                  action: () => (0, B.Ok)(t, !o),
                                              })
                                            : null,
                                        c
                                            ? (0, n.jsx)(J.sL, {
                                                  id: "sharing",
                                                  label: G.intl.string(L.default.EHMPvA),
                                                  checked: d,
                                                  action: () => (0, B.gv)(t, !d),
                                              })
                                            : null,
                                        (0, n.jsx)(J.Dr, {
                                            id: "rename",
                                            label: G.intl.string(L.default.fHTQgk),
                                            action: () => {
                                                (0, es.openModalLazy)(async () => {
                                                    let { default: e } = await l.e("153463").then(l.bind(l, 809898));
                                                    return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(J.Dr, {
                                            id: "delete",
                                            label: G.intl.string(G.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: G.intl.formatToPlainString(L.default.ZokHVz, { name: i }),
                                                    subtitle: G.intl.string(L.default.NmF939),
                                                    confirmText: G.intl.string(G.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, B.xx)(t)).ok)
                                                            throw Error(G.intl.string(L.default.tqKZCi));
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
                      buttonRef: y,
                      icon: ei.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": G.intl.string(G.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var ed = l(742589),
    ec = l(769979);
function eu(e) {
    let { title: t, actions: l, breadcrumb: i } = e;
    return (0, n.jsx)(ed.A, {
        hideSearch: !0,
        toolbar: l,
        className: ec.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: ec.QF,
            children: [
                (0, n.jsx)(S.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: P.A.colors.TEXT_STRONG,
                    className: ec.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(ed.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(ed.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(ed.A.Title, { className: ec.Qw, wrapperClassName: ec.DD, children: t }),
            ],
        }),
    });
}
var em = l(580954),
    ex = l(189213),
    eg = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function ep(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        a = "permissions" === t;
    return (0, n.jsx)(ex.Modal, {
        transitionState: l,
        onClose: i,
        title: G.intl.string(a ? L.default.Rtlv25 : L.default["+UouPe"]),
        subtitle: G.intl.string(a ? L.default["nDQB/b"] : L.default["E0QD++"]),
        size: "sm",
        actions: [{ text: G.intl.string(a ? G.t.BddRzS : L.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function ef(e) {
    (0, es.openModal)((t) => (0, n.jsx)(ep, { ...t, reason: e }));
}
var eh = l(224640),
    ej = l(815021),
    ev = l(652215),
    eb = l(931587),
    eN = l(264997);
function eC(e) {
    let { applicationId: t, guildId: l, projectName: i, transitionState: s, onClose: r } = e,
        o = G.intl.string(L.default.yzxKsU),
        d = G.intl.formatToPlainString(L.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let e = (0, U.SH)(l, t);
            (0, V.pX)(null == e ? ev.BVt.CHANNEL(l) : ev.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, n.jsx)(eh.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, n.jsxs)("div", {
            className: eb.zr,
            children: [
                (0, n.jsx)("div", { className: eb.b, children: (0, n.jsx)(ej.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: eb.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: eb.bm,
                            children: (0, n.jsx)("img", { className: eb.yW, src: eN, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: eb.R_,
                            children: [
                                (0, n.jsx)(E.D, { variant: "heading-xl/semibold", color: "text-strong", children: o }),
                                (0, n.jsx)(h.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: d,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: eb.o1,
                    children: [
                        (0, n.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: G.intl.string(G.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: G.intl.string(G.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var eE = l(647514);
async function ey(e, t, l) {
    (0, O.Hc)(e);
    let i = await (0, O.vX)(e, t);
    (0, O.dv)(e, l, [i]);
}
function eA(e) {
    let t = "" === e.type ? "application/octet-stream" : e.type;
    return (0, H.x5)(e.size, t)
        ? null
        : G.intl.formatToPlainString(L.default.AzziHF, { size: (0, H.ZJ)((0, H.yr)(t)) });
}
async function eI(e, t) {
    let l,
        i =
            ((l = t
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === l ? "vibegration" : l}.zip`),
        n = await (0, O.cS)(e, i),
        a = URL.createObjectURL(n);
    try {
        let e = document.createElement("a");
        (e.href = a), (e.download = i), (e.rel = "noopener"), e.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function ek(e) {
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
l(323874), l(14289), l(35956);
var ew = l(165610),
    eS = l(352978);
function eP(e) {
    return (0, n.jsx)(m.ChatIcon, { ...e, size: "custom", width: 20, height: 20 });
}
function eR(e) {
    return (0, n.jsx)(x.u, { ...e, size: "custom", width: 20, height: 20 });
}
function e_(e) {
    return (0, n.jsx)(g.k, { ...e, size: "custom", width: 20, height: 20 });
}
function ez(e) {
    return (0, n.jsx)(p.b, { ...e, size: "custom", width: 20, height: 20 });
}
function eV(e) {
    let t,
        l,
        i,
        s,
        r,
        { project: o, guildId: c, onSelect: m, onRemix: x } = e,
        g =
            ((t = o.id),
            (l = o.name),
            (i = a.useRef(!1)),
            (s = a.useCallback(() => {
                i.current ||
                    ((i.current = !0),
                    (0, j.P0)((0, v.o)(G.intl.formatToPlainString(L.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    eI(t, l)
                        .catch((e) => {
                            let l;
                            console.error("[vibegrations] project export failed", t, e),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = e instanceof O._v ? e.status : null)
                                            ? G.intl.string(L.default.uB40Hz)
                                            : 404 === l
                                              ? G.intl.string(L.default.wCq2jC)
                                              : G.intl.string(L.default.G2GqyP),
                                        b.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            i.current = !1;
                        }));
            }, [t, l])),
            {
                onExport: s,
                onImport: (r = ek(
                    a.useCallback(
                        (e) => {
                            let i = eA(e);
                            null != i
                                ? (0, j.P0)((0, v.o)(i, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: G.intl.formatToPlainString(L.default.XYZqZK, { name: l }),
                                      subtitle: G.intl.string(L.default["6syXoH"]),
                                      confirmText: G.intl.string(L.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, V.pX)(ev.BVt.CHANNEL(c, er.VV.VIBEGRATIONS, t));
                                          try {
                                              await ey(t, e, G.intl.string(L.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(G.intl.string(L.default["02GpNr"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [t, l, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        p =
            null == o.updated_at
                ? null
                : G.intl.formatToPlainString(L.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: eS.OY,
        children: [
            (0, n.jsx)(f.D, {
                className: eS.W6,
                onClick: m,
                children: (0, n.jsxs)("div", {
                    className: eS.MM,
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: eS.j1,
                            children: o.name,
                        }),
                        null == p
                            ? null
                            : (0, n.jsx)("div", {
                                  className: eS.h3,
                                  children: (0, n.jsx)(h.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: p,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: eS.M2,
                children: [
                    (0, n.jsx)(Y.ID, { projectId: o.id, className: eS.O$ }),
                    (0, n.jsxs)("div", {
                        className: eS.Pl,
                        children: [
                            (0, n.jsx)(eo, {
                                projectId: o.id,
                                projectName: o.name,
                                guildId: c,
                                isOwner: (0, M.P)(o),
                                isPublic: (0, H.XE)(o),
                                isShared: (0, H.tr)(o),
                                supportsVisibility: (0, H.IU)(o),
                                onRemix: x,
                                onExport: g.onExport,
                                onImport: g.onImport,
                            }),
                            g.importInput,
                        ],
                    }),
                ],
            }),
        ],
    });
}
function eD(e) {
    let { project: t, projectsLoaded: i, onBack: s, guildId: r } = e,
        [o, d] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(!1),
        [f, A] = a.useState(null),
        [I, k] = a.useState(null),
        w = t?.id ?? null,
        S = a.useRef(w),
        P = a.useRef(!0),
        D = a.useRef(!1),
        T = a.useRef(null);
    (S.current = w),
        a.useEffect(
            () => (
                (P.current = !0),
                () => {
                    P.current = !1;
                }
            ),
            [],
        );
    let U = (0, c.bG)([M.A], () => (null == w ? null : M.A.getIntegrationStatus(w)), [w]),
        { data: K, isLoading: Y } = (0, R.YY)(t?.preview_application_id ?? void 0),
        Z = null != w && I !== w,
        Q = U?.preview_ready === !0,
        $ = Q && null != U && (!U.integration_installed || U.bot_permissions_changed),
        J = o || Z || Y,
        ee = G.intl.string(L.default["5gU57O"]),
        et = G.intl.string(m ? L.default.YdgE0j : L.default.aWVf4j),
        el = a.useCallback(() => x((e) => !e), []),
        ei = a.useCallback(() => x(!1), []),
        en = a.useCallback(
            (e) => {
                if (null == t || D.current) return;
                let l = t.id;
                function i() {
                    return P.current && S.current === l;
                }
                (D.current = !0),
                    p(!1),
                    x(!0),
                    A({ entry: e, status: "restoring" }),
                    (0, O.oB)(l, e.sha)
                        .then(
                            () => {
                                i() && A({ entry: e, status: "restored" });
                            },
                            (t) => {
                                i() &&
                                    (A({ entry: e, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, t),
                                    (0, j.P0)((0, v.o)(G.intl.string(L.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (D.current = !1);
                        });
            },
            [t],
        ),
        ea = (0, c.bG)([X.A], () => X.A.isBuilderPreviewMobile()),
        ed = G.intl.string(ea ? L.default["3uCc8U"] : L.default["+nzCxZ"]),
        ec = a.useCallback(() => (0, B.GG)(!ea), [ea]),
        ex = (0, z.A)(t?.preview_application_id ?? null, ew.sd),
        ep = (0, ew.x1)(ex) && ex.data.proxyTicketRefreshing,
        eh = a.useCallback(() => {
            null == ex || ep || _.A.refreshProxyTicket(ex.id);
        }, [ex, ep]),
        ej = a.useCallback(() => {
            var e, l;
            null != t && ((e = t.id), (l = ex?.id), (0, O.Bn)(e), (0, em.A)().leaveFrame(l)), s();
        }, [t, ex?.id, s]),
        eb = a.useCallback(() => {
            null != t && (x(!0), (0, O.dv)(t.id, G.intl.string(L.default["2ejwtJ"])));
        }, [t]),
        eN = ek(
            a.useCallback(
                (e) => {
                    if (null == t) return;
                    let l = t.id,
                        i = eA(e);
                    null != i
                        ? (0, j.P0)((0, v.o)(i, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: G.intl.formatToPlainString(L.default.XYZqZK, { name: t.name }),
                              subtitle: G.intl.string(L.default["6syXoH"]),
                              confirmText: G.intl.string(L.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await ey(l, e, G.intl.string(L.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(G.intl.string(L.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        eI = a.useCallback(() => {
            null != t && (0, eE.A)(t, r);
        }, [t, r]),
        eV = a.useCallback(async () => {
            if (null == w || S.current !== w) return;
            T.current?.abort();
            let e = new AbortController();
            (T.current = e), k(null);
            try {
                await (0, B.U1)(w, e.signal);
            } catch {
            } finally {
                e.signal.aborted || T.current !== e || S.current !== w || k(w);
            }
        }, [w]);
    a.useEffect(
        () => (
            eV(),
            () => {
                T.current?.abort(), (T.current = null);
            }
        ),
        [eV],
    );
    let eD = U?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        eT = a.useCallback(async () => {
            null == t ||
                (t.guild_id === eD && t.preview_guild_id === eD) ||
                (await (0, B.M7)(t.id, { guild_id: eD, preview_guild_id: eD }));
        }, [eD, t]),
        eL = a.useCallback(async () => {
            try {
                await eT();
            } catch {}
            await eV();
        }, [eV, eT]),
        eG = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                F.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: K ?? null,
                    guildId: eD,
                    onClose: () => {
                        eL();
                    },
                });
        }, [eL, eD, K, t]),
        eH = $
            ? { type: "permissions", onReviewPermissions: eG, loading: Y || Z }
            : Z && null == U
              ? { type: "checking" }
              : void 0,
        {
            mode: eB,
            setMode: eF,
            hasBothModes: eU,
        } = (0, W.fY)(t?.preview_application_id ?? null, t?.preview_application_id ?? null),
        eK = eU && Q && null == eH;
    a.useEffect(() => {
        null == t && i && (0, V.pX)(ev.BVt.CHANNEL(r, er.VV.VIBEGRATIONS));
    }, [r, t, i]);
    let eX = a.useCallback(async () => {
            if (null != t) {
                if (!Q) return void ef(eg.NO_PREVIEW);
                if ($) return void ef(eg.PERMISSIONS);
                d(!0);
                try {
                    var e;
                    let l = await (0, O.TV)(t.id);
                    if (!0 !== l.ok) throw Error(G.intl.string(L.default.fNP6Cd));
                    (0, B.tZ)(t.id, { isPreview: !1 }).catch((e) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, e);
                    }),
                        (e = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, es.openModal)((t) => (0, n.jsx)(eC, { ...t, ...e }));
                } catch (e) {
                    (0, j.P0)((0, v.o)(e instanceof Error ? e.message : G.intl.string(L.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, $, Q, t]),
        eO = (0, n.jsx)(eu, {
            title: t?.name ?? G.intl.string(L.default.F2dRba),
            breadcrumb: { title: G.intl.string(L.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, n.jsxs)("div", {
                          className: eS.FO,
                          children: [
                              eK ? (0, n.jsx)(W.Ay, { mode: eB, onChange: eF }) : null,
                              (0, n.jsx)(eo, {
                                  projectId: t.id,
                                  projectName: t.name,
                                  guildId: r,
                                  isOwner: (0, M.P)(t),
                                  isPublic: (0, H.XE)(t),
                                  isShared: (0, H.tr)(t),
                                  supportsVisibility: (0, H.IU)(t),
                                  onRefresh: (0, ew.x1)(ex) ? eh : void 0,
                                  isRefreshing: ep,
                                  onClose: ej,
                                  onExport: eb,
                                  onImport: eN.open,
                                  onRemix: eI,
                                  onConnectTool: () => {
                                      var e;
                                      return (
                                          (e = t.id),
                                          void (0, es.openModalLazy)(async () => {
                                              let { default: t } = await Promise.all([
                                                  l.e("964476"),
                                                  l.e("461590"),
                                              ]).then(l.bind(l, 84469));
                                              return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                          })
                                      );
                                  },
                                  onVersionHistory:
                                      f?.status === "restoring"
                                          ? void 0
                                          : () => {
                                                x(!0), p(!0);
                                            },
                              }),
                              (0, n.jsx)(N.m, {
                                  text: ed,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(C.K, {
                                      icon: ea ? e_ : eR,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": ed,
                                      "aria-pressed": ea,
                                      onClick: ec,
                                  }),
                              }),
                              (0, n.jsx)(N.m, {
                                  text: et,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(C.K, {
                                      icon: eP,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": et,
                                      "aria-pressed": m,
                                      onClick: el,
                                  }),
                              }),
                              (0, M.P)(t)
                                  ? (0, n.jsx)(N.m, {
                                        text: ee,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(C.K, {
                                            icon: ez,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": ee,
                                            loading: o,
                                            disabled: J,
                                            onClick: eX,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: eS.nj,
        children: [
            eN.input,
            (0, n.jsx)("main", {
                className: eS.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: eS.j5,
                              children: [
                                  eO,
                                  (0, n.jsxs)("div", {
                                      className: eS.sD,
                                      children: [
                                          (0, n.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: G.intl.string(L.default.F2dRba),
                                          }),
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: G.intl.string(L.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(y.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: G.intl.string(L.default["42EdIV"]),
                                              onClick: () => (0, B.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              q.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: ew.sd,
                                  header: eO,
                                  chatOpen: m,
                                  onCloseChat: ei,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => p(!1),
                                  onRestoreVersion: en,
                                  restoreState: f,
                                  previewReady: Q,
                                  previewGate: eH,
                                  previewMode: eB,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function eT(e) {
    let {
            projects: t,
            sharedProjects: l,
            fetchState: i,
            idea: s,
            guildId: o,
            submitting: d,
            createError: c,
            createDisabled: u,
            modelSettings: m,
            onModelSettingsChange: x,
            onSelectProject: g,
            onIdeaChange: p,
            onCreate: j,
            onImportNewProject: v,
            importing: b,
        } = e,
        R = ek(v),
        _ = a.useMemo(
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
                    .filter((e) => (0, U.X0)(e, o))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, o],
        ),
        V = G.intl.string(L.default.TU9IGR),
        D = [
            G.intl.string(L.default["E+Q26x"]),
            G.intl.string(L.default["06/jqP"]),
            G.intl.string(L.default["3gSfUa"]),
        ],
        T = [
            {
                id: "feature-showcase",
                name: G.intl.string(L.default.BLDsiz),
                description: G.intl.string(L.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: G.intl.string(L.default["+abXa8"]),
                description: G.intl.string(L.default.OZYPMR),
            },
        ],
        F = G.intl.string(L.default.FYK2xQ),
        X = G.intl.string(L.default["/SUK82"]),
        O = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), u || j());
            },
            [u, j],
        ),
        M = G.intl.string(L.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: r()(eS.nj, eS.a0),
        children: [
            (0, n.jsx)(eu, { title: G.intl.string(L.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: eS.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: eS.ps,
                        children: [
                            (0, n.jsx)(A.Ip, {
                                className: eS.Yy,
                                children: (0, n.jsx)("div", {
                                    className: eS.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(eS.Qs, eS.Ix),
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                children: G.intl.string(L.default["2tYpRK"]),
                                            }),
                                            (0, n.jsxs)("section", {
                                                className: eS.WI,
                                                "aria-label": F,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: eS.G9,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: F,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: G.intl.string(L.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, n.jsx)("ol", {
                                                        className: eS.Aw,
                                                        children: T.map((e) =>
                                                            (0, n.jsx)(
                                                                "li",
                                                                {
                                                                    className: eS.EA,
                                                                    children: (0, n.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": G.intl.formatToPlainString(
                                                                            L.default.ER1uQ4,
                                                                            { name: e.name },
                                                                        ),
                                                                        className: r()(eS.nx, eS.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var t;
                                                                                  return j(
                                                                                      ((t = e.name),
                                                                                      G.intl.formatToPlainString(
                                                                                          L.default["9D9L0S"],
                                                                                          { templateName: t },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, n.jsx)(h.E, {
                                                                                className: eS.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: e.name,
                                                                            }),
                                                                            (0, n.jsx)(h.E, {
                                                                                className: eS.BK,
                                                                                variant: "text-sm/normal",
                                                                                color: "text-subtle",
                                                                                children: e.description,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                e.id,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("section", {
                                                className: eS.WI,
                                                "aria-label": X,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: eS.G9,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: X,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: G.intl.string(L.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, n.jsx)("ol", {
                                                        className: eS.Aw,
                                                        children: D.map((e) =>
                                                            (0, n.jsx)(
                                                                "li",
                                                                {
                                                                    className: eS.EA,
                                                                    children: (0, n.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: eS.nx,
                                                                        onClick: d ? void 0 : () => j(e),
                                                                        children: (0, n.jsx)(h.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: eS.un,
                                                                            children: e,
                                                                        }),
                                                                    }),
                                                                },
                                                                e,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                }),
                            }),
                            (0, n.jsx)("div", {
                                className: eS.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(eS.Qs, eS.DA),
                                    children: [
                                        (0, n.jsx)(I.f, {
                                            label: V,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: V,
                                            error: c,
                                            onChange: p,
                                            onKeyDown: O,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: eS.VP,
                                            children: [
                                                (0, n.jsx)(Z.A, {
                                                    settings: m ?? H.hk,
                                                    choices: (0, K.e)()
                                                        ? {
                                                              main: [...H.S8.main, ...H.wF.main],
                                                              subagent: [...H.S8.subagent, ...H.wF.subagent],
                                                              thinking: H.S8.thinking,
                                                          }
                                                        : H.S8,
                                                    disabled: d,
                                                    onChange: x,
                                                }),
                                                (0, n.jsx)(y.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: G.intl.string(G.t.CumH4u),
                                                    disabled: u,
                                                    loading: d,
                                                    onClick: () => j(),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                    (0, n.jsxs)("aside", {
                        className: eS.pA,
                        "aria-label": G.intl.string(L.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: eS.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: eS.RM,
                                        children: [
                                            (0, n.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: G.intl.string(L.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: G.intl.string(L.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(N.m, {
                                        text: M,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(C.K, {
                                            icon: k.H,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": M,
                                            loading: b,
                                            disabled: b,
                                            onClick: R.open,
                                        }),
                                    }),
                                    R.input,
                                ],
                            }),
                            (0, n.jsxs)(A.Ip, {
                                className: eS.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === z.length
                                        ? (0, n.jsx)("div", { className: eS.E8, children: (0, n.jsx)(w.y, {}) })
                                        : i?.type === "error" && 0 === z.length
                                          ? (0, n.jsxs)("div", {
                                                className: eS.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: eS.JS,
                                                        children: G.intl.string(L.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(y.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: G.intl.string(L.default["42EdIV"]),
                                                        onClick: () => (0, B.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, n.jsx)("div", {
                                                  className: eS.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: eS.ST,
                                                      children: [
                                                          (0, n.jsx)(S.D, {
                                                              size: "lg",
                                                              color: P.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: eS.sI,
                                                              children: G.intl.string(L.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: eS.Dq,
                                                  children: z.map((e) =>
                                                      (0, n.jsx)(
                                                          eV,
                                                          {
                                                              project: e,
                                                              guildId: o,
                                                              onSelect: () => g(e.id),
                                                              onRemix: () => (0, eE.A)(e, o),
                                                          },
                                                          e.id,
                                                      ),
                                                  ),
                                              }),
                                    _.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: eS.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: eS.uc,
                                                      children: [
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: G.intl.string(L.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: G.intl.string(L.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: eS.Dq,
                                                      children: _.map((e) =>
                                                          (0, n.jsx)(
                                                              eV,
                                                              {
                                                                  project: e,
                                                                  guildId: o,
                                                                  onSelect: () => g(e.id),
                                                                  onRemix: () => (0, eE.A)(e, o),
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
function eL(e) {
    let { guildId: t, projectId: l } = e,
        i = (0, c.yK)([M.A], () => M.A.getOwnedProjects()),
        s = (0, c.bG)([M.A], () => M.A.getProjectsFetchState()),
        r = (0, c.bG)([D.A, T.A], () => {
            let e = D.A.getGuild(t);
            return null != e && T.A.can(ev.xBc.MANAGE_GUILD, e);
        }, [t]),
        o = (0, c.yK)([M.A], () => (r ? M.A.getSharedProjects(t) : []), [t, r]),
        [d, u] = a.useState(""),
        m = l ?? null,
        [x, g] = a.useState(!1),
        [p, f] = a.useState(null),
        [h, N] = a.useState(null),
        C = d.trim();
    a.useEffect(() => {
        (0, B.hF)(t);
    }, [t, r]),
        a.useEffect(() => {
            (0, B.dm)(t, m);
        }, [t, m]);
    let E = a.useCallback(
            async (e) => {
                let l = (e ?? d).trim();
                if ("" !== l) {
                    null != e && u(e), g(!0), f(null);
                    try {
                        let e = await (0, B.gA)({ guild_id: t });
                        (0, O.Hc)(e),
                            null != h && (0, O.r2)(e, h),
                            (0, O.dv)(e, l),
                            (0, V.pX)(ev.BVt.CHANNEL(t, er.VV.VIBEGRATIONS, e)),
                            u(""),
                            N(null);
                    } catch (e) {
                        f(e instanceof Error ? e.message : G.intl.string(L.default.KKkp5Y));
                    } finally {
                        g(!1);
                    }
                }
            },
            [t, d, h],
        ),
        [y, A] = a.useState(!1),
        I = a.useCallback(
            async (e) => {
                let l = eA(e);
                if (null != l) return void (0, j.P0)((0, v.o)(l, b.Ck.FAILURE));
                A(!0);
                let i = null;
                try {
                    (i = await (0, B.gA)({ guild_id: t })),
                        await ey(i, e, G.intl.string(L.default.KjEtrZ)),
                        (0, V.pX)(ev.BVt.CHANNEL(t, er.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, B.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(G.intl.string(L.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    A(!1);
                }
            },
            [t],
        ),
        k = a.useCallback(
            (e) => {
                (0, V.pX)(ev.BVt.CHANNEL(t, er.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        w = a.useCallback(() => {
            (0, V.pX)(ev.BVt.CHANNEL(t, er.VV.VIBEGRATIONS));
        }, [t]),
        S = a.useCallback((e) => {
            u(e), f(null);
        }, []),
        P = (0, c.bG)([M.A], () => {
            if (null == m) return null;
            let e = M.A.getProject(m);
            return null == e || (0, M.P)(e) || (r && e.guild_id === t) ? e : null;
        }, [m, r, t]),
        R = (0, c.bG)([M.A], () => M.A.hasFetchedGuildProjects(t), [t]);
    return null != m
        ? (0, n.jsx)(eD, { project: P, projectsLoaded: R, onBack: w, guildId: t }, m)
        : (0, n.jsx)(eT, {
              projects: i,
              sharedProjects: o,
              fetchState: s,
              modelSettings: h,
              onModelSettingsChange: N,
              idea: d,
              guildId: t,
              submitting: x,
              createError: p,
              createDisabled: "" === C || x,
              onSelectProject: k,
              onIdeaChange: S,
              onCreate: E,
              onImportNewProject: I,
              importing: y,
          });
}
