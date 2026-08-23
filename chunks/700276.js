l.r(e), l.d(e, { default: () => t_ });
var i,
    n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    o = l(989349),
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
    k = l(103557),
    I = l(81369),
    w = l(289873),
    S = l(152367),
    P = l(661531),
    R = l(627363),
    _ = l(976860),
    z = l(71393),
    V = l(576705),
    D = l(295813),
    T = l(375708),
    G = l(673724),
    H = l(948230),
    L = l(295591),
    F = l(683180),
    U = l(208137),
    B = l(805332),
    X = l(18739),
    O = l(972786),
    K = l(20386),
    M = l(337834),
    Y = l(311656),
    q = l(250872),
    Z = l(922016),
    W = l(980707),
    Q = l(477782),
    $ = l(173936),
    J = l(365199),
    tt = l(871237),
    te = l(957565),
    tl = l(192308),
    ti = l(746080);
function tn(t) {
    let {
            projectId: e,
            projectName: i,
            guildId: s,
            isOwner: r,
            isPublic: o,
            supportsVisibility: d,
            onExport: c,
            onImport: m,
            onFork: x,
            onConnectTool: g,
            onVersionHistory: p,
        } = t,
        f = a.useRef(null),
        h = r && null != x,
        N = r && null != m,
        E = h || null != c || N || null != g || null != p,
        y = te.p5 && null != s;
    return E || y || r
        ? (0, n.jsx)(Z.Y, {
              targetElementRef: f,
              position: "bottom",
              align: "right",
              animation: Z.Y.Animation.NONE,
              renderPopout: (t) => {
                  let { closePopout: a } = t;
                  return (0, n.jsxs)(W.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${e}`,
                      "aria-label": T.intl.string(T.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          E
                              ? (0, n.jsxs)(Q.rX, {
                                    children: [
                                        h
                                            ? (0, n.jsx)(Q.Dr, {
                                                  id: "fork",
                                                  label: T.intl.string(D.default.hU9QAE),
                                                  action: x,
                                              })
                                            : null,
                                        null != c
                                            ? (0, n.jsx)(Q.Dr, {
                                                  id: "export",
                                                  label: T.intl.string(D.default["7iamDC"]),
                                                  action: c,
                                              })
                                            : null,
                                        N
                                            ? (0, n.jsx)(Q.Dr, {
                                                  id: "import",
                                                  label: T.intl.string(D.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != g
                                            ? (0, n.jsx)(Q.Dr, {
                                                  id: "connect-tool",
                                                  label: T.intl.string(D.default["3qelzD"]),
                                                  action: g,
                                              })
                                            : null,
                                        null != p
                                            ? (0, n.jsx)(Q.Dr, {
                                                  id: "version-history",
                                                  label: T.intl.string(D.default.jAWwzi),
                                                  action: p,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          y
                              ? (0, n.jsx)(Q.rX, {
                                    children: (0, n.jsx)(Q.Dr, {
                                        id: "copy-link",
                                        label: T.intl.string(T.t.WqhZss),
                                        icon: $.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: $.LinkIcon },
                                        action: () =>
                                            (0, te.C)((0, tt.n)(s, ti.VV.VIBEGRATIONS, e), () =>
                                                (0, j.P0)((0, v.o)(T.intl.string(T.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          r
                              ? (0, n.jsxs)(Q.rX, {
                                    children: [
                                        d
                                            ? (0, n.jsx)(Q.Dr, {
                                                  id: "visibility",
                                                  label: T.intl.string(o ? D.default.XC0HHn : D.default["Hn/5vP"]),
                                                  action: () => (0, H.Ok)(e, !o),
                                              })
                                            : null,
                                        (0, n.jsx)(Q.Dr, {
                                            id: "rename",
                                            label: T.intl.string(D.default.fHTQgk),
                                            action: () => {
                                                (0, tl.openModalLazy)(async () => {
                                                    let { default: t } = await l.e("153463").then(l.bind(l, 809898));
                                                    return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(Q.Dr, {
                                            id: "delete",
                                            label: T.intl.string(T.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: T.intl.formatToPlainString(D.default.ZokHVz, { name: i }),
                                                    subtitle: T.intl.string(D.default.NmF939),
                                                    confirmText: T.intl.string(T.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, H.xx)(e)).ok)
                                                            throw Error(T.intl.string(D.default.tqKZCi));
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
                      buttonRef: f,
                      icon: J.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": T.intl.string(T.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var ta = l(742589),
    ts = l(769979);
function tr(t) {
    let { title: e, actions: l, breadcrumb: i } = t;
    return (0, n.jsx)(ta.A, {
        hideSearch: !0,
        toolbar: l,
        className: ts.wx,
        "aria-label": e,
        children: (0, n.jsxs)("div", {
            className: ts.QF,
            children: [
                (0, n.jsx)(S.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: P.A.colors.TEXT_STRONG,
                    className: ts.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(ta.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(ta.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(ta.A.Title, { className: ts.Qw, wrapperClassName: ts.DD, children: e }),
            ],
        }),
    });
}
var to = l(594483),
    td = l(189213),
    tc = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function tu(t) {
    let { reason: e, transitionState: l, onClose: i } = t,
        a = "permissions" === e;
    return (0, n.jsx)(td.Modal, {
        transitionState: l,
        onClose: i,
        title: T.intl.string(a ? D.default.Rtlv25 : D.default["+UouPe"]),
        subtitle: T.intl.string(a ? D.default["nDQB/b"] : D.default["E0QD++"]),
        size: "sm",
        actions: [{ text: T.intl.string(a ? T.t.BddRzS : D.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function tm(t) {
    (0, tl.openModal)((e) => (0, n.jsx)(tu, { ...e, reason: t }));
}
var tx = l(224640),
    tg = l(815021),
    tp = l(652215),
    tf = l(931587),
    th = l(264997);
function tj(t) {
    let { applicationId: e, guildId: l, projectName: i, transitionState: s, onClose: r } = t,
        o = T.intl.string(D.default.yzxKsU),
        d = T.intl.formatToPlainString(D.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let t = (0, F.SH)(l, e);
            (0, _.pX)(null == t ? tp.BVt.CHANNEL(l) : tp.BVt.CHANNEL(l, t)), r();
        }, [e, l, r]);
    return (0, n.jsx)(tx.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, n.jsxs)("div", {
            className: tf.zr,
            children: [
                (0, n.jsx)("div", { className: tf.b, children: (0, n.jsx)(tg.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: tf.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: tf.bm,
                            children: (0, n.jsx)("img", { className: tf.yW, src: th, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: tf.R_,
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
                    className: tf.o1,
                    children: [
                        (0, n.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: T.intl.string(T.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: T.intl.string(T.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function tv(t, e, l) {
    (0, X.Hc)(t);
    let i = await (0, X.vX)(t, e);
    (0, X.dv)(t, l, [i]);
}
function tb(t) {
    let e = "" === t.type ? "application/octet-stream" : t.type;
    return (0, G.x5)(t.size, e)
        ? null
        : T.intl.formatToPlainString(D.default.AzziHF, { size: (0, G.ZJ)((0, G.yr)(e)) });
}
async function tN(t, e) {
    let l,
        i =
            ((l = e
                .normalize("NFKD")
                .replace(/[^a-zA-Z0-9]+/g, "-")
                .replace(/^-+|-+$/g, "")
                .slice(0, 64)
                .replace(/-+$/g, "")
                .toLowerCase()),
            `${"" === l ? "vibegration" : l}.zip`),
        n = await (0, X.cS)(t, i),
        a = URL.createObjectURL(n);
    try {
        let t = document.createElement("a");
        (t.href = a), (t.download = i), (t.rel = "noopener"), t.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function tC(t) {
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
l(323874), l(14289), l(35956);
var tE = l(165610),
    ty = l(352978);
function tA(t) {
    return (0, n.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function tk(t) {
    return (0, n.jsx)(x.u, { ...t, size: "custom", width: 20, height: 20 });
}
function tI(t) {
    return (0, n.jsx)(g.k, { ...t, size: "custom", width: 20, height: 20 });
}
function tw(t) {
    return (0, n.jsx)(p.b, { ...t, size: "custom", width: 20, height: 20 });
}
function tS(t) {
    let e,
        l,
        i,
        s,
        r,
        { project: o, guildId: c, onSelect: m, onFork: x } = t,
        g =
            ((e = o.id),
            (l = o.name),
            (i = a.useRef(!1)),
            (s = a.useCallback(() => {
                i.current ||
                    ((i.current = !0),
                    (0, j.P0)((0, v.o)(T.intl.formatToPlainString(D.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    tN(e, l)
                        .catch((t) => {
                            let l;
                            console.error("[vibegrations] project export failed", e, t),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = t instanceof X._v ? t.status : null)
                                            ? T.intl.string(D.default.uB40Hz)
                                            : 404 === l
                                              ? T.intl.string(D.default.wCq2jC)
                                              : T.intl.string(D.default.G2GqyP),
                                        b.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            i.current = !1;
                        }));
            }, [e, l])),
            {
                onExport: s,
                onImport: (r = tC(
                    a.useCallback(
                        (t) => {
                            let i = tb(t);
                            null != i
                                ? (0, j.P0)((0, v.o)(i, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: T.intl.formatToPlainString(D.default.XYZqZK, { name: l }),
                                      subtitle: T.intl.string(D.default["6syXoH"]),
                                      confirmText: T.intl.string(D.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, _.pX)(tp.BVt.CHANNEL(c, ti.VV.VIBEGRATIONS, e));
                                          try {
                                              await tv(e, t, T.intl.string(D.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(T.intl.string(D.default["02GpNr"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [e, l, c],
                    ),
                )).open,
                importInput: r.input,
            }),
        p =
            null == o.updated_at
                ? null
                : T.intl.formatToPlainString(D.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: ty.OY,
        children: [
            (0, n.jsx)(f.D, {
                className: ty.W6,
                onClick: m,
                children: (0, n.jsxs)("div", {
                    className: ty.MM,
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: ty.j1,
                            children: o.name,
                        }),
                        null == p
                            ? null
                            : (0, n.jsx)("div", {
                                  className: ty.h3,
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
                className: ty.M2,
                children: [
                    (0, n.jsx)(K.ID, { projectId: o.id, className: ty.O$ }),
                    (0, n.jsxs)("div", {
                        className: ty.Pl,
                        children: [
                            (0, n.jsx)(tn, {
                                projectId: o.id,
                                projectName: o.name,
                                guildId: c,
                                isOwner: (0, O.P)(o),
                                isPublic: (0, G.XE)(o),
                                supportsVisibility: (0, G.IU)(o),
                                onFork: x,
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
function tP(t) {
    let { project: e, projectsLoaded: i, onBack: s, guildId: r } = t,
        [o, d] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(!1),
        [f, A] = a.useState(null),
        [k, I] = a.useState(null),
        w = e?.id ?? null,
        S = a.useRef(w),
        P = a.useRef(!0),
        z = a.useRef(!1),
        V = a.useRef(null);
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
    let F = (0, c.bG)([O.A], () => (null == w ? null : O.A.getIntegrationStatus(w)), [w]),
        { data: U, isLoading: K } = (0, R.YY)(e?.preview_application_id ?? void 0),
        Y = null != w && k !== w,
        Z = F?.preview_ready === !0,
        W = Z && null != F && (!F.integration_installed || F.bot_permissions_changed),
        Q = o || Y || K,
        $ = T.intl.string(D.default["5gU57O"]),
        J = T.intl.string(m ? D.default.YdgE0j : D.default.aWVf4j),
        tt = a.useCallback(() => x((t) => !t), []),
        te = a.useCallback(() => x(!1), []),
        ta = a.useCallback(
            (t) => {
                if (null == e || z.current) return;
                let l = e.id;
                function i() {
                    return P.current && S.current === l;
                }
                (z.current = !0),
                    p(!1),
                    x(!0),
                    A({ entry: t, status: "restoring" }),
                    (0, X.oB)(l, t.sha)
                        .then(
                            () => {
                                i() && A({ entry: t, status: "restored" });
                            },
                            (e) => {
                                i() &&
                                    (A({ entry: t, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, e),
                                    (0, j.P0)((0, v.o)(T.intl.string(D.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (z.current = !1);
                        });
            },
            [e],
        ),
        ts = (0, c.bG)([B.A], () => B.A.isBuilderPreviewMobile()),
        td = T.intl.string(ts ? D.default["3uCc8U"] : D.default["+nzCxZ"]),
        tu = a.useCallback(() => (0, H.GG)(!ts), [ts]),
        tx = a.useCallback(() => {
            null != e && (x(!0), (0, X.dv)(e.id, T.intl.string(D.default["2ejwtJ"])));
        }, [e]),
        tg = tC(
            a.useCallback(
                (t) => {
                    if (null == e) return;
                    let l = e.id,
                        i = tb(t);
                    null != i
                        ? (0, j.P0)((0, v.o)(i, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: T.intl.formatToPlainString(D.default.XYZqZK, { name: e.name }),
                              subtitle: T.intl.string(D.default["6syXoH"]),
                              confirmText: T.intl.string(D.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await tv(l, t, T.intl.string(D.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(T.intl.string(D.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [e],
            ),
        ),
        tf = a.useCallback(() => {
            null != e && (0, to.A)(e, r);
        }, [e, r]),
        th = a.useCallback(async () => {
            if (null == w || S.current !== w) return;
            V.current?.abort();
            let t = new AbortController();
            (V.current = t), I(null);
            try {
                await (0, H.U1)(w, t.signal);
            } catch {
            } finally {
                t.signal.aborted || V.current !== t || S.current !== w || I(w);
            }
        }, [w]);
    a.useEffect(
        () => (
            th(),
            () => {
                V.current?.abort(), (V.current = null);
            }
        ),
        [th],
    );
    let tN = F?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : r,
        tS = a.useCallback(async () => {
            null == e ||
                (e.guild_id === tN && e.preview_guild_id === tN) ||
                (await (0, H.M7)(e.id, { guild_id: tN, preview_guild_id: tN }));
        }, [tN, e]),
        tP = a.useCallback(async () => {
            try {
                await tS();
            } catch {}
            await th();
        }, [th, tS]),
        tR = a.useCallback(() => {
            let t = e?.preview_application_id;
            null != e &&
                null != t &&
                L.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: U ?? null,
                    guildId: tN,
                    onClose: () => {
                        tP();
                    },
                });
        }, [tP, tN, U, e]),
        t_ = W ? { type: "permissions", onReviewPermissions: tR, loading: K || Y } : Y ? { type: "checking" } : void 0,
        {
            mode: tz,
            setMode: tV,
            hasBothModes: tD,
        } = (0, q.fY)(e?.preview_application_id ?? null, e?.preview_application_id ?? null),
        tT = tD && Z && null == t_;
    a.useEffect(() => {
        null == e && i && (0, _.pX)(tp.BVt.CHANNEL(r, ti.VV.VIBEGRATIONS));
    }, [r, e, i]);
    let tG = a.useCallback(async () => {
            if (null != e) {
                if (!Z) return void tm(tc.NO_PREVIEW);
                if (W) return void tm(tc.PERMISSIONS);
                d(!0);
                try {
                    var t;
                    let l = await (0, X.TV)(e.id);
                    if (!0 !== l.ok) throw Error(T.intl.string(D.default.fNP6Cd));
                    (0, H.tZ)(e.id, { isPreview: !1 }).catch((t) => {
                        console.error("[vibegrations] post-publish refresh failed", e.id, t);
                    }),
                        (t = { applicationId: e.application_id, guildId: r, projectName: e.name }),
                        (0, tl.openModal)((e) => (0, n.jsx)(tj, { ...e, ...t }));
                } catch (t) {
                    (0, j.P0)((0, v.o)(t instanceof Error ? t.message : T.intl.string(D.default.fNP6Cd), b.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [r, W, Z, e]),
        tH = (0, n.jsx)(tr, {
            title: e?.name ?? T.intl.string(D.default.F2dRba),
            breadcrumb: { title: T.intl.string(D.default.Xmvb23), onClick: s },
            actions:
                null == e
                    ? null
                    : (0, n.jsxs)("div", {
                          className: ty.FO,
                          children: [
                              tT ? (0, n.jsx)(q.Ay, { mode: tz, onChange: tV }) : null,
                              (0, n.jsx)(tn, {
                                  projectId: e.id,
                                  projectName: e.name,
                                  guildId: r,
                                  isOwner: (0, O.P)(e),
                                  isPublic: (0, G.XE)(e),
                                  supportsVisibility: (0, G.IU)(e),
                                  onExport: tx,
                                  onImport: tg.open,
                                  onFork: tf,
                                  onConnectTool: () => {
                                      var t;
                                      return (
                                          (t = e.id),
                                          void (0, tl.openModalLazy)(async () => {
                                              let { default: e } = await Promise.all([
                                                  l.e("964476"),
                                                  l.e("461590"),
                                              ]).then(l.bind(l, 84469));
                                              return (l) => (0, n.jsx)(e, { ...l, projectId: t });
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
                                  text: td,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(C.K, {
                                      icon: ts ? tI : tk,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": td,
                                      "aria-pressed": ts,
                                      onClick: tu,
                                  }),
                              }),
                              (0, n.jsx)(N.m, {
                                  text: J,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(C.K, {
                                      icon: tA,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": J,
                                      "aria-pressed": m,
                                      onClick: tt,
                                  }),
                              }),
                              (0, O.P)(e)
                                  ? (0, n.jsx)(N.m, {
                                        text: $,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(C.K, {
                                            icon: tw,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": $,
                                            loading: o,
                                            disabled: Q,
                                            onClick: tG,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: ty.nj,
        children: [
            tg.input,
            (0, n.jsx)("main", {
                className: ty.JX,
                children:
                    null == e
                        ? (0, n.jsxs)("div", {
                              className: ty.j5,
                              children: [
                                  tH,
                                  (0, n.jsxs)("div", {
                                      className: ty.sD,
                                      children: [
                                          (0, n.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: T.intl.string(D.default.F2dRba),
                                          }),
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: T.intl.string(D.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(y.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: T.intl.string(D.default["42EdIV"]),
                                              onClick: () => (0, H.hF)(r),
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              M.A,
                              {
                                  projectId: e.id,
                                  applicationId: e.preview_application_id,
                                  previewApplicationId: e.preview_application_id,
                                  surface: tE.sd,
                                  header: tH,
                                  chatOpen: m,
                                  onCloseChat: te,
                                  versionHistoryOpen: g,
                                  onCloseVersionHistory: () => p(!1),
                                  onRestoreVersion: ta,
                                  restoreState: f,
                                  previewReady: Z,
                                  previewGate: t_,
                                  previewMode: tz,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function tR(t) {
    let {
            projects: e,
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
        } = t,
        R = tC(v),
        _ = a.useMemo(
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
                    .filter((t) => (0, F.X0)(t, o))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, o],
        ),
        V = T.intl.string(D.default.TU9IGR),
        L = [
            T.intl.string(D.default["E+Q26x"]),
            T.intl.string(D.default["06/jqP"]),
            T.intl.string(D.default["3gSfUa"]),
        ],
        B = [
            {
                id: "feature-showcase",
                name: T.intl.string(D.default.BLDsiz),
                description: T.intl.string(D.default.jK1PL5),
            },
            {
                id: "collaborative-whiteboard",
                name: T.intl.string(D.default["+abXa8"]),
                description: T.intl.string(D.default.OZYPMR),
            },
        ],
        X = T.intl.string(D.default.FYK2xQ),
        O = T.intl.string(D.default["/SUK82"]),
        K = a.useCallback(
            (t) => {
                "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), u || j());
            },
            [u, j],
        ),
        M = T.intl.string(D.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: r()(ty.nj, ty.a0),
        children: [
            (0, n.jsx)(tr, { title: T.intl.string(D.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: ty.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: ty.ps,
                        children: [
                            (0, n.jsx)(A.Ip, {
                                className: ty.Yy,
                                children: (0, n.jsx)("div", {
                                    className: ty.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(ty.Qs, ty.Ix),
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                children: T.intl.string(D.default["2tYpRK"]),
                                            }),
                                            (0, n.jsxs)("section", {
                                                className: ty.WI,
                                                "aria-label": X,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: ty.G9,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: X,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: T.intl.string(D.default.BTNdyX),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, n.jsx)("ol", {
                                                        className: ty.Aw,
                                                        children: B.map((t) =>
                                                            (0, n.jsx)(
                                                                "li",
                                                                {
                                                                    className: ty.EA,
                                                                    children: (0, n.jsxs)(f.D, {
                                                                        "aria-disabled": d,
                                                                        "aria-label": T.intl.formatToPlainString(
                                                                            D.default.ER1uQ4,
                                                                            { name: t.name },
                                                                        ),
                                                                        className: r()(ty.nx, ty.rz),
                                                                        onClick: d
                                                                            ? void 0
                                                                            : () => {
                                                                                  var e;
                                                                                  return j(
                                                                                      ((e = t.name),
                                                                                      T.intl.formatToPlainString(
                                                                                          D.default["9D9L0S"],
                                                                                          { templateName: e },
                                                                                      )),
                                                                                  );
                                                                              },
                                                                        children: [
                                                                            (0, n.jsx)(h.E, {
                                                                                className: ty.tG,
                                                                                variant: "text-md/semibold",
                                                                                color: "text-strong",
                                                                                children: t.name,
                                                                            }),
                                                                            (0, n.jsx)(h.E, {
                                                                                className: ty.BK,
                                                                                variant: "text-sm/normal",
                                                                                color: "text-subtle",
                                                                                children: t.description,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                },
                                                                t.id,
                                                            ),
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsxs)("section", {
                                                className: ty.WI,
                                                "aria-label": O,
                                                children: [
                                                    (0, n.jsxs)("div", {
                                                        className: ty.G9,
                                                        children: [
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-md/medium",
                                                                color: "text-strong",
                                                                children: O,
                                                            }),
                                                            (0, n.jsx)(h.E, {
                                                                variant: "text-sm/normal",
                                                                color: "text-subtle",
                                                                children: T.intl.string(D.default["+aBXyx"]),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, n.jsx)("ol", {
                                                        className: ty.Aw,
                                                        children: L.map((t) =>
                                                            (0, n.jsx)(
                                                                "li",
                                                                {
                                                                    className: ty.EA,
                                                                    children: (0, n.jsx)(f.D, {
                                                                        "aria-disabled": d,
                                                                        className: ty.nx,
                                                                        onClick: d ? void 0 : () => j(t),
                                                                        children: (0, n.jsx)(h.E, {
                                                                            variant: "text-md/semibold",
                                                                            color: "text-strong",
                                                                            className: ty.un,
                                                                            children: t,
                                                                        }),
                                                                    }),
                                                                },
                                                                t,
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
                                className: ty.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(ty.Qs, ty.DA),
                                    children: [
                                        (0, n.jsx)(k.f, {
                                            label: V,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: s,
                                            placeholder: V,
                                            error: c,
                                            onChange: p,
                                            onKeyDown: K,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: ty.VP,
                                            children: [
                                                (0, n.jsx)(Y.A, {
                                                    settings: m ?? G.hk,
                                                    choices: (0, U.e)()
                                                        ? {
                                                              main: [...G.S8.main, ...G.wF.main],
                                                              subagent: [...G.S8.subagent, ...G.wF.subagent],
                                                              thinking: G.S8.thinking,
                                                          }
                                                        : G.S8,
                                                    disabled: d,
                                                    onChange: x,
                                                }),
                                                (0, n.jsx)(y.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: T.intl.string(T.t.CumH4u),
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
                        className: ty.pA,
                        "aria-label": T.intl.string(D.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: ty.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ty.RM,
                                        children: [
                                            (0, n.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: T.intl.string(D.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: T.intl.string(D.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(N.m, {
                                        text: M,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(C.K, {
                                            icon: I.H,
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
                                className: ty.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === z.length
                                        ? (0, n.jsx)("div", { className: ty.E8, children: (0, n.jsx)(w.y, {}) })
                                        : i?.type === "error" && 0 === z.length
                                          ? (0, n.jsxs)("div", {
                                                className: ty.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: ty.JS,
                                                        children: T.intl.string(D.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(y.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: T.intl.string(D.default["42EdIV"]),
                                                        onClick: () => (0, H.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === z.length
                                            ? (0, n.jsx)("div", {
                                                  className: ty.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: ty.ST,
                                                      children: [
                                                          (0, n.jsx)(S.D, {
                                                              size: "lg",
                                                              color: P.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: ty.sI,
                                                              children: T.intl.string(D.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: ty.Dq,
                                                  children: z.map((t) =>
                                                      (0, n.jsx)(
                                                          tS,
                                                          {
                                                              project: t,
                                                              guildId: o,
                                                              onSelect: () => g(t.id),
                                                              onFork: () => (0, to.A)(t, o),
                                                          },
                                                          t.id,
                                                      ),
                                                  ),
                                              }),
                                    _.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: ty.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: ty.uc,
                                                      children: [
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: T.intl.string(D.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: T.intl.string(D.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ty.Dq,
                                                      children: _.map((t) =>
                                                          (0, n.jsx)(
                                                              tS,
                                                              {
                                                                  project: t,
                                                                  guildId: o,
                                                                  onSelect: () => g(t.id),
                                                                  onFork: () => (0, to.A)(t, o),
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
function t_(t) {
    let { guildId: e, projectId: l } = t,
        i = (0, c.yK)([O.A], () => O.A.getOwnedProjects()),
        s = (0, c.bG)([O.A], () => O.A.getProjectsFetchState()),
        r = (0, c.bG)([z.A, V.A], () => {
            let t = z.A.getGuild(e);
            return null != t && V.A.can(tp.xBc.MANAGE_GUILD, t);
        }, [e]),
        o = (0, c.yK)([O.A], () => (r ? O.A.getSharedProjects(e) : []), [e, r]),
        [d, u] = a.useState(""),
        m = l ?? null,
        [x, g] = a.useState(!1),
        [p, f] = a.useState(null),
        [h, N] = a.useState(null),
        C = d.trim();
    a.useEffect(() => {
        (0, H.hF)(e);
    }, [e, r]),
        a.useEffect(() => {
            (0, H.dm)(e, m);
        }, [e, m]);
    let E = a.useCallback(
            async (t) => {
                let l = (t ?? d).trim();
                if ("" !== l) {
                    null != t && u(t), g(!0), f(null);
                    try {
                        let t = await (0, H.gA)({ guild_id: e });
                        (0, X.Hc)(t),
                            null != h && (0, X.r2)(t, h),
                            (0, X.dv)(t, l),
                            (0, _.pX)(tp.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS, t)),
                            u(""),
                            N(null);
                    } catch (t) {
                        f(t instanceof Error ? t.message : T.intl.string(D.default.KKkp5Y));
                    } finally {
                        g(!1);
                    }
                }
            },
            [e, d, h],
        ),
        [y, A] = a.useState(!1),
        k = a.useCallback(
            async (t) => {
                let l = tb(t);
                if (null != l) return void (0, j.P0)((0, v.o)(l, b.Ck.FAILURE));
                A(!0);
                let i = null;
                try {
                    (i = await (0, H.gA)({ guild_id: e })),
                        await tv(i, t, T.intl.string(D.default.KjEtrZ)),
                        (0, _.pX)(tp.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, H.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(T.intl.string(D.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    A(!1);
                }
            },
            [e],
        ),
        I = a.useCallback(
            (t) => {
                (0, _.pX)(tp.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        w = a.useCallback(() => {
            (0, _.pX)(tp.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS));
        }, [e]),
        S = a.useCallback((t) => {
            u(t), f(null);
        }, []),
        P = (0, c.bG)([O.A], () => {
            if (null == m) return null;
            let t = O.A.getProject(m);
            return null == t || (0, O.P)(t) || (r && t.guild_id === e) ? t : null;
        }, [m, r, e]),
        R = (0, c.bG)([O.A], () => O.A.hasFetchedGuildProjects(e), [e]);
    return null != m
        ? (0, n.jsx)(tP, { project: P, projectsLoaded: R, onBack: w, guildId: e }, m)
        : (0, n.jsx)(tR, {
              projects: i,
              sharedProjects: o,
              fetchState: s,
              modelSettings: h,
              onModelSettingsChange: N,
              idea: d,
              guildId: e,
              submitting: x,
              createError: p,
              createDisabled: "" === C || x,
              onSelectProject: I,
              onIdeaChange: S,
              onCreate: E,
              onImportNewProject: k,
              importing: y,
          });
}
