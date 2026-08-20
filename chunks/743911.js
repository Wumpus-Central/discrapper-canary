l.r(e), l.d(e, { default: () => tk });
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
    f = l(834730),
    h = l(691540),
    j = l(857250),
    v = l(97483),
    b = l(866665),
    N = l(408278),
    C = l(821609),
    E = l(297264),
    k = l(364522),
    y = l(260598),
    A = l(81369),
    w = l(289873),
    I = l(152367),
    S = l(661531),
    z = l(627363),
    _ = l(976860),
    V = l(673724),
    P = l(948230),
    R = l(148555),
    T = l(683180),
    D = l(208137),
    F = l(805332),
    H = l(783791),
    G = l(998939),
    M = l(972786),
    B = l(20386),
    K = l(429880),
    L = l(311656),
    O = l(922016),
    X = l(980707),
    U = l(477782),
    Y = l(365199),
    W = l(295813),
    q = l(375708),
    Z = l(192308);
function $(t) {
    let { projectId: e, projectName: i, onExport: s, onImport: r, onFork: d, onConnectTool: o } = t,
        c = a.useRef(null);
    return (0, n.jsx)(O.Y, {
        targetElementRef: c,
        position: "bottom",
        align: "right",
        animation: O.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: a } = t;
            return (0, n.jsxs)(X.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${e}`,
                "aria-label": q.intl.string(q.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: [
                    null != d || null != s || null != r || null != o
                        ? (0, n.jsxs)(U.rX, {
                              children: [
                                  null != d
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "fork",
                                            label: q.intl.string(W.default.hU9QAE),
                                            action: d,
                                        })
                                      : null,
                                  null != s
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "export",
                                            label: q.intl.string(W.default["7iamDC"]),
                                            action: s,
                                        })
                                      : null,
                                  null != r
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "import",
                                            label: q.intl.string(W.default.lf8HqE),
                                            action: r,
                                        })
                                      : null,
                                  null != o
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "connect-tool",
                                            label: q.intl.string(W.default["3qelzD"]),
                                            action: o,
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    (0, n.jsxs)(U.rX, {
                        children: [
                            (0, n.jsx)(U.Dr, {
                                id: "rename",
                                label: q.intl.string(W.default.fHTQgk),
                                action: () => {
                                    (0, Z.openModalLazy)(async () => {
                                        let { default: t } = await l.e("153463").then(l.bind(l, 809898));
                                        return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                    });
                                },
                            }),
                            (0, n.jsx)(U.Dr, {
                                id: "delete",
                                label: q.intl.string(q.t.oyYWHE),
                                color: "danger",
                                action: () => {
                                    (0, u.A)({
                                        title: q.intl.formatToPlainString(W.default.ZokHVz, { name: i }),
                                        subtitle: q.intl.string(W.default.NmF939),
                                        confirmText: q.intl.string(q.t.oyYWHE),
                                        variant: "critical",
                                        onConfirm: async () => {
                                            if (!(await (0, P.xx)(e)).ok) throw Error(q.intl.string(W.default.tqKZCi));
                                        },
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        children: (t, e) => {
            let { isShown: l } = e;
            return (0, n.jsx)(N.K, {
                ...t,
                buttonRef: c,
                icon: Y.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": q.intl.string(q.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var Q = l(742589),
    J = l(769979);
function tt(t) {
    let { title: e, actions: l, breadcrumb: i } = t;
    return (0, n.jsx)(Q.A, {
        hideSearch: !0,
        toolbar: l,
        className: J.wx,
        "aria-label": e,
        children: (0, n.jsxs)("div", {
            className: J.QF,
            children: [
                (0, n.jsx)(I.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: J.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(Q.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(Q.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(Q.A.Title, { className: J.Qw, wrapperClassName: J.DD, children: e }),
            ],
        }),
    });
}
var te = l(594483),
    tl = l(189213),
    ti = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function tn(t) {
    let { reason: e, transitionState: l, onClose: i } = t,
        a = "permissions" === e;
    return (0, n.jsx)(tl.Modal, {
        transitionState: l,
        onClose: i,
        title: q.intl.string(a ? W.default.Rtlv25 : W.default["+UouPe"]),
        subtitle: q.intl.string(a ? W.default["nDQB/b"] : W.default["E0QD++"]),
        size: "sm",
        actions: [{ text: q.intl.string(a ? q.t.BddRzS : W.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function ta(t) {
    (0, Z.openModal)((e) => (0, n.jsx)(tn, { ...e, reason: t }));
}
var ts = l(224640),
    tr = l(815021),
    td = l(652215),
    to = l(931587),
    tc = l(264997);
function tu(t) {
    let { applicationId: e, guildId: l, projectName: i, transitionState: s, onClose: r } = t,
        d = q.intl.string(W.default.yzxKsU),
        o = q.intl.formatToPlainString(W.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let t = (0, T.SH)(l, e);
            (0, _.pX)(null == t ? td.BVt.CHANNEL(l) : td.BVt.CHANNEL(l, t)), r();
        }, [e, l, r]);
    return (0, n.jsx)(ts.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: to.zr,
            children: [
                (0, n.jsx)("div", { className: to.b, children: (0, n.jsx)(tr.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: to.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: to.bm,
                            children: (0, n.jsx)("img", { className: to.yW, src: tc, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: to.R_,
                            children: [
                                (0, n.jsx)(E.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(f.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: o,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: to.o1,
                    children: [
                        (0, n.jsx)(C.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: q.intl.string(q.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(C.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: q.intl.string(q.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function tm(t, e, l) {
    (0, G.Hc)(t);
    let i = await (0, G.vX)(t, e);
    (0, G.dv)(t, l, [i]);
}
function tx(t) {
    let e = "" === t.type ? "application/octet-stream" : t.type;
    return (0, V.x5)(t.size, e)
        ? null
        : q.intl.formatToPlainString(W.default.AzziHF, { size: (0, V.ZJ)((0, V.yr)(e)) });
}
function tg(t) {
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
var tp = l(746080),
    tf = l(165610),
    th = l(352978);
function tj(t) {
    return (0, n.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function tv(t) {
    return (0, n.jsx)(x.u, { ...t, size: "custom", width: 20, height: 20 });
}
function tb(t) {
    return (0, n.jsx)(g.k, { ...t, size: "custom", width: 20, height: 20 });
}
function tN(t) {
    let { project: e, onSelect: l, onFork: i } = t,
        a = (0, c.bG)([H.A], () => H.A.isThinking(e.id), [e.id]),
        s =
            null == e.updated_at
                ? null
                : q.intl.formatToPlainString(W.default.oMDaqr, { time: o()(e.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: th.OY,
        children: [
            (0, n.jsx)(p.D, {
                className: th.W6,
                onClick: l,
                children: (0, n.jsxs)("div", {
                    className: th.MM,
                    children: [
                        (0, n.jsx)(f.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: th.j1,
                            children: e.name,
                        }),
                        null == s
                            ? null
                            : (0, n.jsx)("div", {
                                  className: th.h3,
                                  children: (0, n.jsx)(f.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: s,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: th.M2,
                children: [
                    a ? (0, n.jsx)(B.Ty, { className: th.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: th.Pl,
                        children: (0, n.jsx)($, { projectId: e.id, projectName: e.name, onFork: i }),
                    }),
                ],
            }),
        ],
    });
}
function tC(t) {
    let { project: e, projectsLoaded: i, onBack: s, guildId: r } = t,
        [d, o] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(null),
        k = e?.id ?? null,
        y = a.useRef(k),
        A = a.useRef(null);
    y.current = k;
    let w = (0, c.bG)([M.A], () => (null == k ? null : M.A.getIntegrationStatus(k)), [k]),
        { data: I, isLoading: S } = (0, z.YY)(e?.preview_application_id ?? void 0),
        V = null != k && g !== k,
        T = w?.preview_ready === !0,
        D = T && null != w && (!w.integration_installed || w.bot_permissions_changed),
        H = d || V || S,
        B = q.intl.string(m ? W.default.YdgE0j : W.default.aWVf4j),
        L = a.useCallback(() => x((t) => !t), []),
        O = (0, c.bG)([F.A], () => F.A.isBuilderPreviewMobile()),
        X = q.intl.string(O ? W.default["3uCc8U"] : W.default["+nzCxZ"]),
        U = a.useCallback(() => (0, P.GG)(!O), [O]),
        Y = a.useCallback(() => {
            null != e && (x(!0), (0, G.dv)(e.id, q.intl.string(W.default["2ejwtJ"])));
        }, [e]),
        Q = tg(
            a.useCallback(
                (t) => {
                    if (null == e) return;
                    let l = e.id,
                        i = tx(t);
                    null != i
                        ? (0, h.P0)((0, j.o)(i, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: q.intl.formatToPlainString(W.default.XYZqZK, { name: e.name }),
                              subtitle: q.intl.string(W.default["6syXoH"]),
                              confirmText: q.intl.string(W.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await tm(l, t, q.intl.string(W.default.C7GU2r));
                                  } catch {
                                      (0, h.P0)((0, j.o)(q.intl.string(W.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [e],
            ),
        ),
        J = a.useCallback(() => {
            null != e && (0, te.A)(e, r);
        }, [e, r]),
        tl = a.useCallback(async () => {
            if (null == k || y.current !== k) return;
            A.current?.abort();
            let t = new AbortController();
            (A.current = t), p(null);
            try {
                await (0, P.U1)(k, t.signal);
            } catch {
            } finally {
                t.signal.aborted || A.current !== t || y.current !== k || p(k);
            }
        }, [k]);
    a.useEffect(
        () => (
            tl(),
            () => {
                A.current?.abort(), (A.current = null);
            }
        ),
        [tl],
    );
    let tn = w?.integration_installed === !0 && e?.guild_id != null ? e.guild_id : r,
        ts = a.useCallback(async () => {
            null == e ||
                (e.guild_id === tn && e.preview_guild_id === tn) ||
                (await (0, P.M7)(e.id, { guild_id: tn, preview_guild_id: tn }));
        }, [tn, e]),
        tr = a.useCallback(async () => {
            try {
                await ts();
            } catch {}
            await tl();
        }, [tl, ts]),
        to = a.useCallback(() => {
            let t = e?.preview_application_id;
            null != e &&
                null != t &&
                R.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: I ?? null,
                    guildId: tn,
                    onClose: () => {
                        tr();
                    },
                });
        }, [tr, tn, I, e]),
        tc = D ? { type: "permissions", onReviewPermissions: to, loading: S || V } : V ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == e && i && (0, _.pX)(td.BVt.CHANNEL(r, tp.VV.VIBEGRATIONS));
    }, [r, e, i]);
    let tN = a.useCallback(async () => {
        if (null != e) {
            if (!T) return void ta(ti.NO_PREVIEW);
            if (D) return void ta(ti.PERMISSIONS);
            o(!0);
            try {
                var t;
                let l = await (0, G.TV)(e.id);
                if (!0 !== l.ok) throw Error(q.intl.string(W.default.fNP6Cd));
                (0, P.tZ)(e.id, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", e.id, t);
                }),
                    (t = { applicationId: e.application_id, guildId: r, projectName: e.name }),
                    (0, Z.openModal)((e) => (0, n.jsx)(tu, { ...e, ...t }));
            } catch (t) {
                (0, h.P0)((0, j.o)(t instanceof Error ? t.message : q.intl.string(W.default.fNP6Cd), v.Ck.FAILURE));
            } finally {
                o(!1);
            }
        }
    }, [r, D, T, e]);
    return (0, n.jsxs)("div", {
        className: th.nj,
        children: [
            (0, n.jsx)(tt, {
                title: e?.name ?? q.intl.string(W.default.F2dRba),
                breadcrumb: { title: q.intl.string(W.default.Xmvb23), onClick: s },
                actions:
                    null == e
                        ? null
                        : (0, n.jsxs)("div", {
                              className: th.wO,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: th.FO,
                                      children: [
                                          (0, n.jsx)($, {
                                              projectId: e.id,
                                              projectName: e.name,
                                              onExport: Y,
                                              onImport: Q.open,
                                              onFork: J,
                                              onConnectTool: () => {
                                                  var t;
                                                  return (
                                                      (t = e.id),
                                                      void (0, Z.openModalLazy)(async () => {
                                                          let { default: e } = await Promise.all([
                                                              l.e("964476"),
                                                              l.e("461590"),
                                                          ]).then(l.bind(l, 84469));
                                                          return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                                      })
                                                  );
                                              },
                                          }),
                                          (0, n.jsx)(b.m, {
                                              text: X,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(N.K, {
                                                  icon: O ? tb : tv,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": X,
                                                  "aria-pressed": O,
                                                  onClick: U,
                                              }),
                                          }),
                                          (0, n.jsx)(b.m, {
                                              text: B,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(N.K, {
                                                  icon: tj,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": B,
                                                  "aria-pressed": m,
                                                  onClick: L,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(C.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: q.intl.string(W.default["5gU57O"]),
                                      loading: d,
                                      disabled: H,
                                      onClick: tN,
                                  }),
                              ],
                          }),
            }),
            Q.input,
            (0, n.jsx)("main", {
                className: th.JX,
                children:
                    null == e
                        ? (0, n.jsxs)("div", {
                              className: th.sD,
                              children: [
                                  (0, n.jsx)(E.D, {
                                      variant: "heading-lg/semibold",
                                      children: q.intl.string(W.default.F2dRba),
                                  }),
                                  (0, n.jsx)(f.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: q.intl.string(W.default.GnEJ3o),
                                  }),
                                  (0, n.jsx)(C.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: q.intl.string(W.default["42EdIV"]),
                                      onClick: P.hF,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              K.A,
                              {
                                  projectId: e.id,
                                  applicationId: e.preview_application_id,
                                  previewApplicationId: e.preview_application_id,
                                  surface: tf.sd,
                                  chatOpen: m,
                                  previewReady: T,
                                  previewGate: tc,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function tE(t) {
    let {
            projects: e,
            fetchState: l,
            idea: i,
            guildId: s,
            submitting: d,
            createError: o,
            createDisabled: c,
            modelSettings: u,
            onModelSettingsChange: m,
            onSelectProject: x,
            onIdeaChange: g,
            onCreate: h,
            onImportNewProject: j,
            importing: v,
        } = t,
        b = tg(j),
        N = a.useMemo(
            () =>
                e
                    .filter((t) => (0, T.X0)(t, s))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, s],
        ),
        z = q.intl.string(W.default.TU9IGR),
        _ = [
            q.intl.string(W.default["E+Q26x"]),
            q.intl.string(W.default["06/jqP"]),
            q.intl.string(W.default["7MCiK9"]),
        ],
        R = a.useCallback(
            (t) => {
                "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), c || h());
            },
            [c, h],
        );
    return (0, n.jsxs)("div", {
        className: r()(th.nj, th.a0),
        children: [
            (0, n.jsx)(tt, { title: q.intl.string(W.default.Xmvb23) }),
            (0, n.jsx)(k.Ip, {
                children: (0, n.jsx)("main", {
                    className: th.rf,
                    children: (0, n.jsxs)("div", {
                        className: th.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: th.Ix,
                                children: [
                                    (0, n.jsx)(E.D, {
                                        variant: "heading-xl/semibold",
                                        children: q.intl.string(W.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: th.Aw,
                                        children: _.map((t) =>
                                            (0, n.jsx)(
                                                p.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: th.nx,
                                                    onClick: d ? void 0 : () => h(t),
                                                    children: (0, n.jsx)(f.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: th.un,
                                                        children: t,
                                                    }),
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: th.DA,
                                        children: [
                                            (0, n.jsx)(y.f, {
                                                label: z,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: z,
                                                error: o,
                                                onChange: g,
                                                onKeyDown: R,
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: th.VP,
                                                children: [
                                                    (0, n.jsx)(L.A, {
                                                        settings: u ?? V.hk,
                                                        choices:
                                                            null == (0, D.V)()
                                                                ? V.S8
                                                                : {
                                                                      main: [...V.S8.main, ...V.wF.main],
                                                                      subagent: [...V.S8.subagent, ...V.wF.subagent],
                                                                      thinking: V.S8.thinking,
                                                                  },
                                                        disabled: d,
                                                        onChange: m,
                                                    }),
                                                    (0, n.jsx)(C.$, {
                                                        variant: "primary",
                                                        size: "md",
                                                        text: q.intl.string(q.t.CumH4u),
                                                        disabled: c,
                                                        loading: d,
                                                        onClick: () => h(),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("section", {
                                className: th.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: th.lP,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: th.RM,
                                                children: [
                                                    (0, n.jsx)(f.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: q.intl.string(W.default.Bo5fE3),
                                                    }),
                                                    (0, n.jsx)(f.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-subtle",
                                                        children: q.intl.string(W.default.YnAFtT),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(C.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                icon: A.H,
                                                text: q.intl.string(W.default["NHP2+t"]),
                                                loading: v,
                                                disabled: v,
                                                onClick: b.open,
                                            }),
                                            b.input,
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === N.length
                                        ? (0, n.jsx)("div", { className: th.E8, children: (0, n.jsx)(w.y, {}) })
                                        : l?.type === "error" && 0 === N.length
                                          ? (0, n.jsxs)("div", {
                                                className: th.E8,
                                                children: [
                                                    (0, n.jsx)(f.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: q.intl.string(W.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(C.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: q.intl.string(W.default["42EdIV"]),
                                                        onClick: P.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === N.length
                                            ? (0, n.jsx)("div", {
                                                  className: th.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: th.ST,
                                                      children: [
                                                          (0, n.jsx)(I.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(f.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: th.sI,
                                                              children: q.intl.string(W.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : N.map((t) =>
                                                  (0, n.jsx)(
                                                      tN,
                                                      {
                                                          project: t,
                                                          onSelect: () => x(t.id),
                                                          onFork: () => (0, te.A)(t, s),
                                                      },
                                                      t.id,
                                                  ),
                                              ),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function tk(t) {
    let { guildId: e, projectId: l } = t,
        i = (0, c.yK)([M.A], () => M.A.getAllProjects()),
        s = (0, c.bG)([M.A], () => M.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        o = l ?? null,
        [u, m] = a.useState(!1),
        [x, g] = a.useState(null),
        [p, f] = a.useState(null),
        b = r.trim();
    a.useEffect(() => {
        (0, P.hF)();
    }, []),
        a.useEffect(() => {
            (0, P.dm)(e, o);
        }, [e, o]);
    let N = a.useCallback(
            async (t) => {
                let l = (t ?? r).trim();
                if ("" !== l) {
                    null != t && d(t), m(!0), g(null);
                    try {
                        let t = await (0, P.gA)({ guild_id: e });
                        (0, G.Hc)(t),
                            null != p && (0, G.r2)(t, p),
                            (0, G.dv)(t, l),
                            (0, _.pX)(td.BVt.CHANNEL(e, tp.VV.VIBEGRATIONS, t)),
                            d(""),
                            f(null);
                    } catch (t) {
                        g(t instanceof Error ? t.message : q.intl.string(W.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [e, r, p],
        ),
        [C, E] = a.useState(!1),
        k = a.useCallback(
            async (t) => {
                let l = tx(t);
                if (null != l) return void (0, h.P0)((0, j.o)(l, v.Ck.FAILURE));
                E(!0);
                let i = null;
                try {
                    (i = await (0, P.gA)({ guild_id: e })),
                        await tm(i, t, q.intl.string(W.default.KjEtrZ)),
                        (0, _.pX)(td.BVt.CHANNEL(e, tp.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, P.xx)(i).catch(() => void 0)),
                        (0, h.P0)((0, j.o)(q.intl.string(W.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    E(!1);
                }
            },
            [e],
        ),
        y = a.useCallback(
            (t) => {
                (0, _.pX)(td.BVt.CHANNEL(e, tp.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        A = a.useCallback(() => {
            (0, _.pX)(td.BVt.CHANNEL(e, tp.VV.VIBEGRATIONS));
        }, [e]),
        w = a.useCallback((t) => {
            d(t), g(null);
        }, []),
        I = null == o ? null : (i.find((t) => t.id === o) ?? null);
    return null != o
        ? (0, n.jsx)(tC, { project: I, projectsLoaded: s?.type === "success", onBack: A, guildId: e })
        : (0, n.jsx)(tE, {
              projects: i,
              fetchState: s,
              modelSettings: p,
              onModelSettingsChange: f,
              idea: r,
              guildId: e,
              submitting: u,
              createError: x,
              createDisabled: "" === b || u,
              onSelectProject: y,
              onIdeaChange: w,
              onCreate: N,
              onImportNewProject: k,
              importing: C,
          });
}
