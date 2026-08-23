l.r(e), l.d(e, { default: () => tR });
var i,
    n = l(477900),
    a = l(582128),
    r = l(503698),
    s = l.n(r),
    o = l(989349),
    d = l.n(o),
    c = l(17928),
    u = l(314116),
    m = l(534890),
    p = l(646270),
    x = l(31300),
    g = l(794083),
    f = l(939249),
    h = l(834730),
    j = l(691540),
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
    P = l(661531),
    _ = l(627363),
    R = l(976860),
    V = l(71393),
    z = l(576705),
    D = l(673724),
    H = l(948230),
    T = l(148555),
    G = l(683180),
    F = l(208137),
    L = l(805332),
    U = l(998939),
    O = l(972786),
    B = l(20386),
    M = l(458156),
    X = l(311656),
    K = l(250872),
    Y = l(922016),
    q = l(980707),
    Z = l(477782),
    W = l(173936),
    $ = l(365199),
    Q = l(871237),
    J = l(957565),
    tt = l(295813),
    te = l(375708),
    tl = l(192308),
    ti = l(746080);
function tn(t) {
    let {
            projectId: e,
            projectName: i,
            guildId: r,
            isOwner: s,
            isPublic: o,
            supportsVisibility: d,
            onExport: c,
            onImport: m,
            onFork: p,
            onConnectTool: x,
            onVersionHistory: g,
        } = t,
        f = a.useRef(null),
        h = s && null != p,
        C = s && null != m,
        E = h || null != c || C || null != x || null != g,
        y = J.p5 && null != r;
    return E || y || s
        ? (0, n.jsx)(Y.Y, {
              targetElementRef: f,
              position: "bottom",
              align: "right",
              animation: Y.Y.Animation.NONE,
              renderPopout: (t) => {
                  let { closePopout: a } = t;
                  return (0, n.jsxs)(q.W, {
                      "data-menu-migrated": !0,
                      navId: `vibegrations-project-actions-${e}`,
                      "aria-label": te.intl.string(te.t.ogxXGq),
                      onClose: a,
                      onSelect: a,
                      children: [
                          E
                              ? (0, n.jsxs)(Z.rX, {
                                    children: [
                                        h
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "fork",
                                                  label: te.intl.string(tt.default.hU9QAE),
                                                  action: p,
                                              })
                                            : null,
                                        null != c
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "export",
                                                  label: te.intl.string(tt.default["7iamDC"]),
                                                  action: c,
                                              })
                                            : null,
                                        C
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "import",
                                                  label: te.intl.string(tt.default.lf8HqE),
                                                  action: m,
                                              })
                                            : null,
                                        null != x
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "connect-tool",
                                                  label: te.intl.string(tt.default["3qelzD"]),
                                                  action: x,
                                              })
                                            : null,
                                        null != g
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "version-history",
                                                  label: te.intl.string(tt.default.jAWwzi),
                                                  action: g,
                                              })
                                            : null,
                                    ],
                                })
                              : null,
                          y
                              ? (0, n.jsx)(Z.rX, {
                                    children: (0, n.jsx)(Z.Dr, {
                                        id: "copy-link",
                                        label: te.intl.string(te.t.WqhZss),
                                        icon: W.LinkIcon,
                                        leadingAccessory: { type: "icon", icon: W.LinkIcon },
                                        action: () =>
                                            (0, J.C)((0, Q.n)(r, ti.VV.VIBEGRATIONS, e), () =>
                                                (0, j.P0)((0, v.o)(te.intl.string(te.t["L/PwZf"]), b.Ck.SUCCESS)),
                                            ),
                                    }),
                                })
                              : null,
                          s
                              ? (0, n.jsxs)(Z.rX, {
                                    children: [
                                        d
                                            ? (0, n.jsx)(Z.Dr, {
                                                  id: "visibility",
                                                  label: te.intl.string(o ? tt.default.XC0HHn : tt.default["Hn/5vP"]),
                                                  action: () => (0, H.Ok)(e, !o),
                                              })
                                            : null,
                                        (0, n.jsx)(Z.Dr, {
                                            id: "rename",
                                            label: te.intl.string(tt.default.fHTQgk),
                                            action: () => {
                                                (0, tl.openModalLazy)(async () => {
                                                    let { default: t } = await l.e("153463").then(l.bind(l, 809898));
                                                    return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                                });
                                            },
                                        }),
                                        (0, n.jsx)(Z.Dr, {
                                            id: "delete",
                                            label: te.intl.string(te.t.oyYWHE),
                                            color: "danger",
                                            action: () => {
                                                (0, u.A)({
                                                    title: te.intl.formatToPlainString(tt.default.ZokHVz, { name: i }),
                                                    subtitle: te.intl.string(tt.default.NmF939),
                                                    confirmText: te.intl.string(te.t.oyYWHE),
                                                    variant: "critical",
                                                    onConfirm: async () => {
                                                        if (!(await (0, H.xx)(e)).ok)
                                                            throw Error(te.intl.string(tt.default.tqKZCi));
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
                  return (0, n.jsx)(N.K, {
                      ...t,
                      buttonRef: f,
                      icon: $.MoreHorizontalIcon,
                      size: "sm",
                      variant: "icon-only",
                      "aria-label": te.intl.string(te.t["UKOtz+"]),
                      "aria-haspopup": "menu",
                      "aria-expanded": l,
                  });
              },
          })
        : null;
}
var ta = l(742589),
    tr = l(769979);
function ts(t) {
    let { title: e, actions: l, breadcrumb: i } = t;
    return (0, n.jsx)(ta.A, {
        hideSearch: !0,
        toolbar: l,
        className: tr.wx,
        "aria-label": e,
        children: (0, n.jsxs)("div", {
            className: tr.QF,
            children: [
                (0, n.jsx)(S.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: P.A.colors.TEXT_STRONG,
                    className: tr.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(ta.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(ta.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(ta.A.Title, { className: tr.Qw, wrapperClassName: tr.DD, children: e }),
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
        title: te.intl.string(a ? tt.default.Rtlv25 : tt.default["+UouPe"]),
        subtitle: te.intl.string(a ? tt.default["nDQB/b"] : tt.default["E0QD++"]),
        size: "sm",
        actions: [{ text: te.intl.string(a ? te.t.BddRzS : tt.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function tm(t) {
    (0, tl.openModal)((e) => (0, n.jsx)(tu, { ...e, reason: t }));
}
var tp = l(224640),
    tx = l(815021),
    tg = l(652215),
    tf = l(931587),
    th = l(264997);
function tj(t) {
    let { applicationId: e, guildId: l, projectName: i, transitionState: r, onClose: s } = t,
        o = te.intl.string(tt.default.yzxKsU),
        d = te.intl.formatToPlainString(tt.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let t = (0, G.SH)(l, e);
            (0, R.pX)(null == t ? tg.BVt.CHANNEL(l) : tg.BVt.CHANNEL(l, t)), s();
        }, [e, l, s]);
    return (0, n.jsx)(tp.d, {
        transitionState: r,
        onClose: s,
        size: "md",
        paddingSize: "lg",
        "aria-label": o,
        children: (0, n.jsxs)("div", {
            className: tf.zr,
            children: [
                (0, n.jsx)("div", { className: tf.b, children: (0, n.jsx)(tx.J, { onClick: s }) }),
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
                            text: te.intl.string(te.t.cpT0Cq),
                            onClick: s,
                        }),
                        (0, n.jsx)(y.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: te.intl.string(te.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function tv(t, e, l) {
    (0, U.Hc)(t);
    let i = await (0, U.vX)(t, e);
    (0, U.dv)(t, l, [i]);
}
function tb(t) {
    let e = "" === t.type ? "application/octet-stream" : t.type;
    return (0, D.x5)(t.size, e)
        ? null
        : te.intl.formatToPlainString(tt.default.AzziHF, { size: (0, D.ZJ)((0, D.yr)(e)) });
}
async function tC(t, e) {
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
        n = await (0, U.cS)(t, i),
        a = URL.createObjectURL(n);
    try {
        let t = document.createElement("a");
        (t.href = a), (t.download = i), (t.rel = "noopener"), t.click();
    } finally {
        window.setTimeout(() => URL.revokeObjectURL(a), 0);
    }
}
function tN(t) {
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
function tk(t) {
    return (0, n.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function tA(t) {
    return (0, n.jsx)(p.u, { ...t, size: "custom", width: 20, height: 20 });
}
function tI(t) {
    return (0, n.jsx)(x.k, { ...t, size: "custom", width: 20, height: 20 });
}
function tw(t) {
    return (0, n.jsx)(g.b, { ...t, size: "custom", width: 20, height: 20 });
}
function tS(t) {
    let e,
        l,
        i,
        r,
        s,
        { project: o, guildId: c, onSelect: m, onFork: p } = t,
        x =
            ((e = o.id),
            (l = o.name),
            (i = a.useRef(!1)),
            (r = a.useCallback(() => {
                i.current ||
                    ((i.current = !0),
                    (0, j.P0)((0, v.o)(te.intl.formatToPlainString(tt.default.u9TapG, { name: l }), b.Ck.MESSAGE)),
                    tC(e, l)
                        .catch((t) => {
                            let l;
                            console.error("[vibegrations] project export failed", e, t),
                                (0, j.P0)(
                                    (0, v.o)(
                                        409 === (l = t instanceof U._v ? t.status : null)
                                            ? te.intl.string(tt.default.uB40Hz)
                                            : 404 === l
                                              ? te.intl.string(tt.default.wCq2jC)
                                              : te.intl.string(tt.default.G2GqyP),
                                        b.Ck.FAILURE,
                                    ),
                                );
                        })
                        .finally(() => {
                            i.current = !1;
                        }));
            }, [e, l])),
            {
                onExport: r,
                onImport: (s = tN(
                    a.useCallback(
                        (t) => {
                            let i = tb(t);
                            null != i
                                ? (0, j.P0)((0, v.o)(i, b.Ck.FAILURE))
                                : (0, u.A)({
                                      title: te.intl.formatToPlainString(tt.default.XYZqZK, { name: l }),
                                      subtitle: te.intl.string(tt.default["6syXoH"]),
                                      confirmText: te.intl.string(tt.default.pgFuyr),
                                      variant: "critical",
                                      onConfirm: async () => {
                                          (0, R.pX)(tg.BVt.CHANNEL(c, ti.VV.VIBEGRATIONS, e));
                                          try {
                                              await tv(e, t, te.intl.string(tt.default.C7GU2r));
                                          } catch {
                                              (0, j.P0)((0, v.o)(te.intl.string(tt.default["02GpNr"]), b.Ck.FAILURE));
                                          }
                                      },
                                  });
                        },
                        [e, l, c],
                    ),
                )).open,
                importInput: s.input,
            }),
        g =
            null == o.updated_at
                ? null
                : te.intl.formatToPlainString(tt.default.oMDaqr, { time: d()(o.updated_at).fromNow() });
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
                        null == g
                            ? null
                            : (0, n.jsx)("div", {
                                  className: ty.h3,
                                  children: (0, n.jsx)(h.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: g,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: ty.M2,
                children: [
                    (0, n.jsx)(B.ID, { projectId: o.id, className: ty.O$ }),
                    (0, n.jsxs)("div", {
                        className: ty.Pl,
                        children: [
                            (0, n.jsx)(tn, {
                                projectId: o.id,
                                projectName: o.name,
                                guildId: c,
                                isOwner: (0, O.P)(o),
                                isPublic: (0, D.XE)(o),
                                supportsVisibility: (0, D.IU)(o),
                                onFork: p,
                                onExport: x.onExport,
                                onImport: x.onImport,
                            }),
                            x.importInput,
                        ],
                    }),
                ],
            }),
        ],
    });
}
function tP(t) {
    let { project: e, projectsLoaded: i, onBack: r, guildId: s } = t,
        [o, d] = a.useState(!1),
        [m, p] = a.useState(!0),
        [x, g] = a.useState(!1),
        [f, k] = a.useState(null),
        [A, I] = a.useState(null),
        w = e?.id ?? null,
        S = a.useRef(w),
        P = a.useRef(!0),
        V = a.useRef(!1),
        z = a.useRef(null);
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
    let G = (0, c.bG)([O.A], () => (null == w ? null : O.A.getIntegrationStatus(w)), [w]),
        { data: F, isLoading: B } = (0, _.YY)(e?.preview_application_id ?? void 0),
        X = null != w && A !== w,
        Y = G?.preview_ready === !0,
        q = Y && null != G && (!G.integration_installed || G.bot_permissions_changed),
        Z = o || X || B,
        W = te.intl.string(tt.default["5gU57O"]),
        $ = te.intl.string(m ? tt.default.YdgE0j : tt.default.aWVf4j),
        Q = a.useCallback(() => p((t) => !t), []),
        J = a.useCallback(() => p(!1), []),
        ta = a.useCallback(
            (t) => {
                if (null == e || V.current) return;
                let l = e.id;
                function i() {
                    return P.current && S.current === l;
                }
                (V.current = !0),
                    g(!1),
                    p(!0),
                    k({ entry: t, status: "restoring" }),
                    (0, U.oB)(l, t.sha)
                        .then(
                            () => {
                                i() && k({ entry: t, status: "restored" });
                            },
                            (e) => {
                                i() &&
                                    (k({ entry: t, status: "failed" }),
                                    console.error("[vibegrations] version restore failed", l, e),
                                    (0, j.P0)((0, v.o)(te.intl.string(tt.default.q6iZ84), b.Ck.FAILURE)));
                            },
                        )
                        .finally(() => {
                            i() && (V.current = !1);
                        });
            },
            [e],
        ),
        tr = (0, c.bG)([L.A], () => L.A.isBuilderPreviewMobile()),
        td = te.intl.string(tr ? tt.default["3uCc8U"] : tt.default["+nzCxZ"]),
        tu = a.useCallback(() => (0, H.GG)(!tr), [tr]),
        tp = a.useCallback(() => {
            null != e && (p(!0), (0, U.dv)(e.id, te.intl.string(tt.default["2ejwtJ"])));
        }, [e]),
        tx = tN(
            a.useCallback(
                (t) => {
                    if (null == e) return;
                    let l = e.id,
                        i = tb(t);
                    null != i
                        ? (0, j.P0)((0, v.o)(i, b.Ck.FAILURE))
                        : (0, u.A)({
                              title: te.intl.formatToPlainString(tt.default.XYZqZK, { name: e.name }),
                              subtitle: te.intl.string(tt.default["6syXoH"]),
                              confirmText: te.intl.string(tt.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  p(!0);
                                  try {
                                      await tv(l, t, te.intl.string(tt.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, v.o)(te.intl.string(tt.default["02GpNr"]), b.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [e],
            ),
        ),
        tf = a.useCallback(() => {
            null != e && (0, to.A)(e, s);
        }, [e, s]),
        th = a.useCallback(async () => {
            if (null == w || S.current !== w) return;
            z.current?.abort();
            let t = new AbortController();
            (z.current = t), I(null);
            try {
                await (0, H.U1)(w, t.signal);
            } catch {
            } finally {
                t.signal.aborted || z.current !== t || S.current !== w || I(w);
            }
        }, [w]);
    a.useEffect(
        () => (
            th(),
            () => {
                z.current?.abort(), (z.current = null);
            }
        ),
        [th],
    );
    let tC = G?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : s,
        tS = a.useCallback(async () => {
            null == e ||
                (e.guild_id === tC && e.preview_guild_id === tC) ||
                (await (0, H.M7)(e.id, { guild_id: tC, preview_guild_id: tC }));
        }, [tC, e]),
        tP = a.useCallback(async () => {
            try {
                await tS();
            } catch {}
            await th();
        }, [th, tS]),
        t_ = a.useCallback(() => {
            let t = e?.preview_application_id;
            null != e &&
                null != t &&
                T.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: F ?? null,
                    guildId: tC,
                    onClose: () => {
                        tP();
                    },
                });
        }, [tP, tC, F, e]),
        tR = q ? { type: "permissions", onReviewPermissions: t_, loading: B || X } : X ? { type: "checking" } : void 0,
        {
            mode: tV,
            setMode: tz,
            hasBothModes: tD,
        } = (0, K.fY)(e?.preview_application_id ?? null, e?.preview_application_id ?? null),
        tH = tD && Y && null == tR;
    a.useEffect(() => {
        null == e && i && (0, R.pX)(tg.BVt.CHANNEL(s, ti.VV.VIBEGRATIONS));
    }, [s, e, i]);
    let tT = a.useCallback(async () => {
            if (null != e) {
                if (!Y) return void tm(tc.NO_PREVIEW);
                if (q) return void tm(tc.PERMISSIONS);
                d(!0);
                try {
                    var t;
                    let l = await (0, U.TV)(e.id);
                    if (!0 !== l.ok) throw Error(te.intl.string(tt.default.fNP6Cd));
                    (0, H.tZ)(e.id, { isPreview: !1 }).catch((t) => {
                        console.error("[vibegrations] post-publish refresh failed", e.id, t);
                    }),
                        (t = { applicationId: e.application_id, guildId: s, projectName: e.name }),
                        (0, tl.openModal)((e) => (0, n.jsx)(tj, { ...e, ...t }));
                } catch (t) {
                    (0, j.P0)(
                        (0, v.o)(t instanceof Error ? t.message : te.intl.string(tt.default.fNP6Cd), b.Ck.FAILURE),
                    );
                } finally {
                    d(!1);
                }
            }
        }, [s, q, Y, e]),
        tG = (0, n.jsx)(ts, {
            title: e?.name ?? te.intl.string(tt.default.F2dRba),
            breadcrumb: { title: te.intl.string(tt.default.Xmvb23), onClick: r },
            actions:
                null == e
                    ? null
                    : (0, n.jsxs)("div", {
                          className: ty.FO,
                          children: [
                              tH ? (0, n.jsx)(K.Ay, { mode: tV, onChange: tz }) : null,
                              (0, n.jsx)(tn, {
                                  projectId: e.id,
                                  projectName: e.name,
                                  guildId: s,
                                  isOwner: (0, O.P)(e),
                                  isPublic: (0, D.XE)(e),
                                  supportsVisibility: (0, D.IU)(e),
                                  onExport: tp,
                                  onImport: tx.open,
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
                                                p(!0), g(!0);
                                            },
                              }),
                              (0, n.jsx)(C.m, {
                                  text: td,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(N.K, {
                                      icon: tr ? tI : tA,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": td,
                                      "aria-pressed": tr,
                                      onClick: tu,
                                  }),
                              }),
                              (0, n.jsx)(C.m, {
                                  text: $,
                                  ariaHidden: !0,
                                  children: (0, n.jsx)(N.K, {
                                      icon: tk,
                                      size: "sm",
                                      variant: "icon-only",
                                      "aria-label": $,
                                      "aria-pressed": m,
                                      onClick: Q,
                                  }),
                              }),
                              (0, O.P)(e)
                                  ? (0, n.jsx)(C.m, {
                                        text: W,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(N.K, {
                                            icon: tw,
                                            size: "sm",
                                            variant: "primary",
                                            "aria-label": W,
                                            loading: o,
                                            disabled: Z,
                                            onClick: tT,
                                        }),
                                    })
                                  : null,
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: ty.nj,
        children: [
            tx.input,
            (0, n.jsx)("main", {
                className: ty.JX,
                children:
                    null == e
                        ? (0, n.jsxs)("div", {
                              className: ty.j5,
                              children: [
                                  tG,
                                  (0, n.jsxs)("div", {
                                      className: ty.sD,
                                      children: [
                                          (0, n.jsx)(E.D, {
                                              variant: "heading-lg/semibold",
                                              children: te.intl.string(tt.default.F2dRba),
                                          }),
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: te.intl.string(tt.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(y.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: te.intl.string(tt.default["42EdIV"]),
                                              onClick: () => (0, H.hF)(s),
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
                                  header: tG,
                                  chatOpen: m,
                                  onCloseChat: J,
                                  versionHistoryOpen: x,
                                  onCloseVersionHistory: () => g(!1),
                                  onRestoreVersion: ta,
                                  restoreState: f,
                                  previewReady: Y,
                                  previewGate: tR,
                                  previewMode: tV,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function t_(t) {
    let {
            projects: e,
            sharedProjects: l,
            fetchState: i,
            idea: r,
            guildId: o,
            submitting: d,
            createError: c,
            createDisabled: u,
            modelSettings: m,
            onModelSettingsChange: p,
            onSelectProject: x,
            onIdeaChange: g,
            onCreate: j,
            onImportNewProject: v,
            importing: b,
        } = t,
        _ = tN(v),
        R = a.useMemo(
            () =>
                l
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [l],
        ),
        V = a.useMemo(
            () =>
                e
                    .filter((t) => (0, G.X0)(t, o))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, o],
        ),
        z = te.intl.string(tt.default.TU9IGR),
        T = [
            te.intl.string(tt.default["E+Q26x"]),
            te.intl.string(tt.default["06/jqP"]),
            te.intl.string(tt.default["7MCiK9"]),
        ],
        L = a.useCallback(
            (t) => {
                "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), u || j());
            },
            [u, j],
        ),
        U = te.intl.string(tt.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: s()(ty.nj, ty.a0),
        children: [
            (0, n.jsx)(ts, { title: te.intl.string(tt.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: ty.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: ty.ps,
                        children: [
                            (0, n.jsx)(k.Ip, {
                                className: ty.Yy,
                                children: (0, n.jsx)("div", {
                                    className: ty.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: s()(ty.Qs, ty.Ix),
                                        children: [
                                            (0, n.jsx)(E.D, {
                                                variant: "heading-xl/semibold",
                                                children: te.intl.string(tt.default["2tYpRK"]),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: ty.Aw,
                                                children: T.map((t) =>
                                                    (0, n.jsx)(
                                                        f.D,
                                                        {
                                                            "aria-disabled": d,
                                                            className: ty.nx,
                                                            onClick: d ? void 0 : () => j(t),
                                                            children: (0, n.jsx)(h.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-strong",
                                                                className: ty.un,
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
                                className: ty.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: s()(ty.Qs, ty.DA),
                                    children: [
                                        (0, n.jsx)(A.f, {
                                            label: z,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: r,
                                            placeholder: z,
                                            error: c,
                                            onChange: g,
                                            onKeyDown: L,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: ty.VP,
                                            children: [
                                                (0, n.jsx)(X.A, {
                                                    settings: m ?? D.hk,
                                                    choices: (0, F.e)()
                                                        ? {
                                                              main: [...D.S8.main, ...D.wF.main],
                                                              subagent: [...D.S8.subagent, ...D.wF.subagent],
                                                              thinking: D.S8.thinking,
                                                          }
                                                        : D.S8,
                                                    disabled: d,
                                                    onChange: p,
                                                }),
                                                (0, n.jsx)(y.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: te.intl.string(te.t.CumH4u),
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
                        "aria-label": te.intl.string(tt.default.Bo5fE3),
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
                                                children: te.intl.string(tt.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: te.intl.string(tt.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(C.m, {
                                        text: U,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(N.K, {
                                            icon: I.H,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": U,
                                            loading: b,
                                            disabled: b,
                                            onClick: _.open,
                                        }),
                                    }),
                                    _.input,
                                ],
                            }),
                            (0, n.jsxs)(k.Ip, {
                                className: ty.xe,
                                children: [
                                    (null == i || "loading" === i.type) && 0 === V.length
                                        ? (0, n.jsx)("div", { className: ty.E8, children: (0, n.jsx)(w.y, {}) })
                                        : i?.type === "error" && 0 === V.length
                                          ? (0, n.jsxs)("div", {
                                                className: ty.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: ty.JS,
                                                        children: te.intl.string(tt.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(y.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: te.intl.string(tt.default["42EdIV"]),
                                                        onClick: () => (0, H.hF)(o),
                                                    }),
                                                ],
                                            })
                                          : 0 === V.length
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
                                                              children: te.intl.string(tt.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: ty.Dq,
                                                  children: V.map((t) =>
                                                      (0, n.jsx)(
                                                          tS,
                                                          {
                                                              project: t,
                                                              guildId: o,
                                                              onSelect: () => x(t.id),
                                                              onFork: () => (0, to.A)(t, o),
                                                          },
                                                          t.id,
                                                      ),
                                                  ),
                                              }),
                                    R.length > 0
                                        ? (0, n.jsxs)("div", {
                                              className: ty.qx,
                                              children: [
                                                  (0, n.jsxs)("div", {
                                                      className: ty.uc,
                                                      children: [
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-md/medium",
                                                              color: "text-strong",
                                                              children: te.intl.string(tt.default.jrCnUc),
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              children: te.intl.string(tt.default["1KEhDu"]),
                                                          }),
                                                      ],
                                                  }),
                                                  (0, n.jsx)("div", {
                                                      className: ty.Dq,
                                                      children: R.map((t) =>
                                                          (0, n.jsx)(
                                                              tS,
                                                              {
                                                                  project: t,
                                                                  guildId: o,
                                                                  onSelect: () => x(t.id),
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
function tR(t) {
    let { guildId: e, projectId: l } = t,
        i = (0, c.yK)([O.A], () => O.A.getOwnedProjects()),
        r = (0, c.bG)([O.A], () => O.A.getProjectsFetchState()),
        s = (0, c.bG)([V.A, z.A], () => {
            let t = V.A.getGuild(e);
            return null != t && z.A.can(tg.xBc.MANAGE_GUILD, t);
        }, [e]),
        o = (0, c.yK)([O.A], () => (s ? O.A.getSharedProjects(e) : []), [e, s]),
        [d, u] = a.useState(""),
        m = l ?? null,
        [p, x] = a.useState(!1),
        [g, f] = a.useState(null),
        [h, C] = a.useState(null),
        N = d.trim();
    a.useEffect(() => {
        (0, H.hF)(e);
    }, [e, s]),
        a.useEffect(() => {
            (0, H.dm)(e, m);
        }, [e, m]);
    let E = a.useCallback(
            async (t) => {
                let l = (t ?? d).trim();
                if ("" !== l) {
                    null != t && u(t), x(!0), f(null);
                    try {
                        let t = await (0, H.gA)({ guild_id: e });
                        (0, U.Hc)(t),
                            null != h && (0, U.r2)(t, h),
                            (0, U.dv)(t, l),
                            (0, R.pX)(tg.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS, t)),
                            u(""),
                            C(null);
                    } catch (t) {
                        f(t instanceof Error ? t.message : te.intl.string(tt.default.KKkp5Y));
                    } finally {
                        x(!1);
                    }
                }
            },
            [e, d, h],
        ),
        [y, k] = a.useState(!1),
        A = a.useCallback(
            async (t) => {
                let l = tb(t);
                if (null != l) return void (0, j.P0)((0, v.o)(l, b.Ck.FAILURE));
                k(!0);
                let i = null;
                try {
                    (i = await (0, H.gA)({ guild_id: e })),
                        await tv(i, t, te.intl.string(tt.default.KjEtrZ)),
                        (0, R.pX)(tg.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, H.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, v.o)(te.intl.string(tt.default["02GpNr"]), b.Ck.FAILURE));
                } finally {
                    k(!1);
                }
            },
            [e],
        ),
        I = a.useCallback(
            (t) => {
                (0, R.pX)(tg.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        w = a.useCallback(() => {
            (0, R.pX)(tg.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS));
        }, [e]),
        S = a.useCallback((t) => {
            u(t), f(null);
        }, []),
        P = (0, c.bG)([O.A], () => {
            if (null == m) return null;
            let t = O.A.getProject(m);
            return null == t || (0, O.P)(t) || (s && t.guild_id === e) ? t : null;
        }, [m, s, e]),
        _ = (0, c.bG)([O.A], () => O.A.hasFetchedGuildProjects(e), [e]);
    return null != m
        ? (0, n.jsx)(tP, { project: P, projectsLoaded: _, onBack: w, guildId: e }, m)
        : (0, n.jsx)(t_, {
              projects: i,
              sharedProjects: o,
              fetchState: r,
              modelSettings: h,
              onModelSettingsChange: C,
              idea: d,
              guildId: e,
              submitting: p,
              createError: g,
              createDisabled: "" === N || p,
              onSelectProject: I,
              onIdeaChange: S,
              onCreate: E,
              onImportNewProject: A,
              importing: y,
          });
}
