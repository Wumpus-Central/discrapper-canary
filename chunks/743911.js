e.r(l), e.d(l, { default: () => tI });
var i,
    n = e(477900),
    a = e(582128),
    s = e(503698),
    r = e.n(s),
    d = e(989349),
    o = e.n(d),
    c = e(17928),
    u = e(314116),
    m = e(534890),
    x = e(646270),
    g = e(31300),
    p = e(939249),
    h = e(834730),
    f = e(691540),
    j = e(857250),
    v = e(97483),
    b = e(866665),
    C = e(408278),
    N = e(821609),
    k = e(297264),
    E = e(364522),
    y = e(103557),
    A = e(81369),
    I = e(289873),
    w = e(152367),
    S = e(661531),
    z = e(627363),
    V = e(976860),
    _ = e(673724),
    P = e(948230),
    R = e(148555),
    T = e(683180),
    D = e(208137),
    F = e(805332),
    H = e(783791),
    L = e(998939),
    G = e(972786),
    B = e(20386),
    M = e(429880),
    O = e(311656),
    X = e(922016),
    K = e(980707),
    U = e(477782),
    Y = e(173936),
    W = e(365199),
    Z = e(871237),
    q = e(957565),
    $ = e(459864),
    Q = e(375708),
    J = e(192308),
    tt = e(746080);
function tl(t) {
    let { projectId: l, projectName: i, guildId: s, onExport: r, onImport: d, onFork: o, onConnectTool: c } = t,
        m = a.useRef(null);
    return (0, n.jsx)(X.Y, {
        targetElementRef: m,
        position: "bottom",
        align: "right",
        animation: X.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: a } = t;
            return (0, n.jsxs)(K.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${l}`,
                "aria-label": Q.intl.string(Q.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: [
                    null != o || null != r || null != d || null != c
                        ? (0, n.jsxs)(U.rX, {
                              children: [
                                  null != o
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "fork",
                                            label: Q.intl.string($.default.hU9QAE),
                                            action: o,
                                        })
                                      : null,
                                  null != r
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "export",
                                            label: Q.intl.string($.default["7iamDC"]),
                                            action: r,
                                        })
                                      : null,
                                  null != d
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "import",
                                            label: Q.intl.string($.default.lf8HqE),
                                            action: d,
                                        })
                                      : null,
                                  null != c
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "connect-tool",
                                            label: Q.intl.string($.default["3qelzD"]),
                                            action: c,
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    q.p5 && null != s
                        ? (0, n.jsx)(U.rX, {
                              children: (0, n.jsx)(U.Dr, {
                                  id: "copy-link",
                                  label: Q.intl.string(Q.t.WqhZss),
                                  icon: Y.LinkIcon,
                                  leadingAccessory: { type: "icon", icon: Y.LinkIcon },
                                  action: () =>
                                      (0, q.C)((0, Z.n)(s, tt.VV.VIBEGRATIONS, l), () =>
                                          (0, f.P0)((0, j.o)(Q.intl.string(Q.t["L/PwZf"]), v.Ck.SUCCESS)),
                                      ),
                              }),
                          })
                        : null,
                    (0, n.jsxs)(U.rX, {
                        children: [
                            (0, n.jsx)(U.Dr, {
                                id: "rename",
                                label: Q.intl.string($.default.fHTQgk),
                                action: () => {
                                    (0, J.openModalLazy)(async () => {
                                        let { default: t } = await e.e("153463").then(e.bind(e, 809898));
                                        return (e) => (0, n.jsx)(t, { ...e, projectId: l });
                                    });
                                },
                            }),
                            (0, n.jsx)(U.Dr, {
                                id: "delete",
                                label: Q.intl.string(Q.t.oyYWHE),
                                color: "danger",
                                action: () => {
                                    (0, u.A)({
                                        title: Q.intl.formatToPlainString($.default.ZokHVz, { name: i }),
                                        subtitle: Q.intl.string($.default.NmF939),
                                        confirmText: Q.intl.string(Q.t.oyYWHE),
                                        variant: "critical",
                                        onConfirm: async () => {
                                            if (!(await (0, P.xx)(l)).ok) throw Error(Q.intl.string($.default.tqKZCi));
                                        },
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        children: (t, l) => {
            let { isShown: e } = l;
            return (0, n.jsx)(C.K, {
                ...t,
                buttonRef: m,
                icon: W.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": Q.intl.string(Q.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": e,
            });
        },
    });
}
var te = e(742589),
    ti = e(769979);
function tn(t) {
    let { title: l, actions: e, breadcrumb: i } = t;
    return (0, n.jsx)(te.A, {
        hideSearch: !0,
        toolbar: e,
        className: ti.wx,
        "aria-label": l,
        children: (0, n.jsxs)("div", {
            className: ti.QF,
            children: [
                (0, n.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: ti.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(te.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(te.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(te.A.Title, { className: ti.Qw, wrapperClassName: ti.DD, children: l }),
            ],
        }),
    });
}
var ta = e(594483),
    ts = e(189213),
    tr = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function td(t) {
    let { reason: l, transitionState: e, onClose: i } = t,
        a = "permissions" === l;
    return (0, n.jsx)(ts.Modal, {
        transitionState: e,
        onClose: i,
        title: Q.intl.string(a ? $.default.Rtlv25 : $.default["+UouPe"]),
        subtitle: Q.intl.string(a ? $.default["nDQB/b"] : $.default["E0QD++"]),
        size: "sm",
        actions: [{ text: Q.intl.string(a ? Q.t.BddRzS : $.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function to(t) {
    (0, J.openModal)((l) => (0, n.jsx)(td, { ...l, reason: t }));
}
var tc = e(224640),
    tu = e(815021),
    tm = e(652215),
    tx = e(931587),
    tg = e(264997);
function tp(t) {
    let { applicationId: l, guildId: e, projectName: i, transitionState: s, onClose: r } = t,
        d = Q.intl.string($.default.yzxKsU),
        o = Q.intl.formatToPlainString($.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let t = (0, T.SH)(e, l);
            (0, V.pX)(null == t ? tm.BVt.CHANNEL(e) : tm.BVt.CHANNEL(e, t)), r();
        }, [l, e, r]);
    return (0, n.jsx)(tc.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: tx.zr,
            children: [
                (0, n.jsx)("div", { className: tx.b, children: (0, n.jsx)(tu.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: tx.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: tx.bm,
                            children: (0, n.jsx)("img", { className: tx.yW, src: tg, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: tx.R_,
                            children: [
                                (0, n.jsx)(k.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
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
                    className: tx.o1,
                    children: [
                        (0, n.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: Q.intl.string(Q.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(N.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: Q.intl.string(Q.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function th(t, l, e) {
    (0, L.Hc)(t);
    let i = await (0, L.vX)(t, l);
    (0, L.dv)(t, e, [i]);
}
function tf(t) {
    let l = "" === t.type ? "application/octet-stream" : t.type;
    return (0, _.x5)(t.size, l)
        ? null
        : Q.intl.formatToPlainString($.default.AzziHF, { size: (0, _.ZJ)((0, _.yr)(l)) });
}
function tj(t) {
    let l = a.useRef(null),
        e = a.useCallback(
            (l) => {
                let e = l.target.files?.[0] ?? null;
                (l.target.value = ""), null != e && t(e);
            },
            [t],
        );
    return {
        open: () => l.current?.click(),
        input: (0, n.jsx)("input", {
            ref: l,
            type: "file",
            accept: ".zip,.tar,.tar.gz,.tgz,.rar,application/zip,application/gzip,application/x-tar,application/vnd.rar,application/x-rar-compressed",
            hidden: !0,
            "aria-hidden": !0,
            tabIndex: -1,
            onChange: e,
        }),
    };
}
var tv = e(165610),
    tb = e(352978);
function tC(t) {
    return (0, n.jsx)(m.ChatIcon, { ...t, size: "custom", width: 20, height: 20 });
}
function tN(t) {
    return (0, n.jsx)(x.u, { ...t, size: "custom", width: 20, height: 20 });
}
function tk(t) {
    return (0, n.jsx)(g.k, { ...t, size: "custom", width: 20, height: 20 });
}
function tE(t) {
    let { project: l, guildId: e, onSelect: i, onFork: a } = t,
        s = (0, c.bG)([H.Ay], () => H.Ay.isThinking(l.id), [l.id]),
        r =
            null == l.updated_at
                ? null
                : Q.intl.formatToPlainString($.default.oMDaqr, { time: o()(l.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: tb.OY,
        children: [
            (0, n.jsx)(p.D, {
                className: tb.W6,
                onClick: i,
                children: (0, n.jsxs)("div", {
                    className: tb.MM,
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tb.j1,
                            children: l.name,
                        }),
                        null == r
                            ? null
                            : (0, n.jsx)("div", {
                                  className: tb.h3,
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
                className: tb.M2,
                children: [
                    s ? (0, n.jsx)(B.Ty, { className: tb.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: tb.Pl,
                        children: (0, n.jsx)(tl, { projectId: l.id, projectName: l.name, guildId: e, onFork: a }),
                    }),
                ],
            }),
        ],
    });
}
function ty(t) {
    let { project: l, projectsLoaded: i, onBack: s, guildId: r } = t,
        [d, o] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(null),
        E = l?.id ?? null,
        y = a.useRef(E),
        A = a.useRef(null);
    y.current = E;
    let I = (0, c.bG)([G.A], () => (null == E ? null : G.A.getIntegrationStatus(E)), [E]),
        { data: w, isLoading: S } = (0, z.YY)(l?.preview_application_id ?? void 0),
        _ = null != E && g !== E,
        T = I?.preview_ready === !0,
        D = T && null != I && (!I.integration_installed || I.bot_permissions_changed),
        H = d || _ || S,
        B = Q.intl.string(m ? $.default.YdgE0j : $.default.aWVf4j),
        O = a.useCallback(() => x((t) => !t), []),
        X = (0, c.bG)([F.A], () => F.A.isBuilderPreviewMobile()),
        K = Q.intl.string(X ? $.default["3uCc8U"] : $.default["+nzCxZ"]),
        U = a.useCallback(() => (0, P.GG)(!X), [X]),
        Y = a.useCallback(() => {
            null != l && (x(!0), (0, L.dv)(l.id, Q.intl.string($.default["2ejwtJ"])));
        }, [l]),
        W = tj(
            a.useCallback(
                (t) => {
                    if (null == l) return;
                    let e = l.id,
                        i = tf(t);
                    null != i
                        ? (0, f.P0)((0, j.o)(i, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: Q.intl.formatToPlainString($.default.XYZqZK, { name: l.name }),
                              subtitle: Q.intl.string($.default["6syXoH"]),
                              confirmText: Q.intl.string($.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await th(e, t, Q.intl.string($.default.C7GU2r));
                                  } catch {
                                      (0, f.P0)((0, j.o)(Q.intl.string($.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [l],
            ),
        ),
        Z = a.useCallback(() => {
            null != l && (0, ta.A)(l, r);
        }, [l, r]),
        q = a.useCallback(async () => {
            if (null == E || y.current !== E) return;
            A.current?.abort();
            let t = new AbortController();
            (A.current = t), p(null);
            try {
                await (0, P.U1)(E, t.signal);
            } catch {
            } finally {
                t.signal.aborted || A.current !== t || y.current !== E || p(E);
            }
        }, [E]);
    a.useEffect(
        () => (
            q(),
            () => {
                A.current?.abort(), (A.current = null);
            }
        ),
        [q],
    );
    let te = I?.integration_installed === !0 && l?.guild_id != null ? l.guild_id : r,
        ti = a.useCallback(async () => {
            null == l ||
                (l.guild_id === te && l.preview_guild_id === te) ||
                (await (0, P.M7)(l.id, { guild_id: te, preview_guild_id: te }));
        }, [te, l]),
        ts = a.useCallback(async () => {
            try {
                await ti();
            } catch {}
            await q();
        }, [q, ti]),
        td = a.useCallback(() => {
            let t = l?.preview_application_id;
            null != l &&
                null != t &&
                R.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: w ?? null,
                    guildId: te,
                    onClose: () => {
                        ts();
                    },
                });
        }, [ts, te, w, l]),
        tc = D ? { type: "permissions", onReviewPermissions: td, loading: S || _ } : _ ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == l && i && (0, V.pX)(tm.BVt.CHANNEL(r, tt.VV.VIBEGRATIONS));
    }, [r, l, i]);
    let tu = a.useCallback(async () => {
        if (null != l) {
            if (!T) return void to(tr.NO_PREVIEW);
            if (D) return void to(tr.PERMISSIONS);
            o(!0);
            try {
                var t;
                let e = await (0, L.TV)(l.id);
                if (!0 !== e.ok) throw Error(Q.intl.string($.default.fNP6Cd));
                (0, P.tZ)(l.id, { isPreview: !1 }).catch((t) => {
                    console.error("[vibegrations] post-publish refresh failed", l.id, t);
                }),
                    (t = { applicationId: l.application_id, guildId: r, projectName: l.name }),
                    (0, J.openModal)((l) => (0, n.jsx)(tp, { ...l, ...t }));
            } catch (t) {
                (0, f.P0)((0, j.o)(t instanceof Error ? t.message : Q.intl.string($.default.fNP6Cd), v.Ck.FAILURE));
            } finally {
                o(!1);
            }
        }
    }, [r, D, T, l]);
    return (0, n.jsxs)("div", {
        className: tb.nj,
        children: [
            (0, n.jsx)(tn, {
                title: l?.name ?? Q.intl.string($.default.F2dRba),
                breadcrumb: { title: Q.intl.string($.default.Xmvb23), onClick: s },
                actions:
                    null == l
                        ? null
                        : (0, n.jsxs)("div", {
                              className: tb.wO,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: tb.FO,
                                      children: [
                                          (0, n.jsx)(tl, {
                                              projectId: l.id,
                                              projectName: l.name,
                                              guildId: r,
                                              onExport: Y,
                                              onImport: W.open,
                                              onFork: Z,
                                              onConnectTool: () => {
                                                  var t;
                                                  return (
                                                      (t = l.id),
                                                      void (0, J.openModalLazy)(async () => {
                                                          let { default: l } = await Promise.all([
                                                              e.e("964476"),
                                                              e.e("461590"),
                                                          ]).then(e.bind(e, 84469));
                                                          return (e) => (0, n.jsx)(l, { ...e, projectId: t });
                                                      })
                                                  );
                                              },
                                          }),
                                          (0, n.jsx)(b.m, {
                                              text: K,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(C.K, {
                                                  icon: X ? tk : tN,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": K,
                                                  "aria-pressed": X,
                                                  onClick: U,
                                              }),
                                          }),
                                          (0, n.jsx)(b.m, {
                                              text: B,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(C.K, {
                                                  icon: tC,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": B,
                                                  "aria-pressed": m,
                                                  onClick: O,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(N.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: Q.intl.string($.default["5gU57O"]),
                                      loading: d,
                                      disabled: H,
                                      onClick: tu,
                                  }),
                              ],
                          }),
            }),
            W.input,
            (0, n.jsx)("main", {
                className: tb.JX,
                children:
                    null == l
                        ? (0, n.jsxs)("div", {
                              className: tb.sD,
                              children: [
                                  (0, n.jsx)(k.D, {
                                      variant: "heading-lg/semibold",
                                      children: Q.intl.string($.default.F2dRba),
                                  }),
                                  (0, n.jsx)(h.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: Q.intl.string($.default.GnEJ3o),
                                  }),
                                  (0, n.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: Q.intl.string($.default["42EdIV"]),
                                      onClick: P.hF,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              M.A,
                              {
                                  projectId: l.id,
                                  applicationId: l.preview_application_id,
                                  previewApplicationId: l.preview_application_id,
                                  surface: tv.sd,
                                  chatOpen: m,
                                  previewReady: T,
                                  previewGate: tc,
                              },
                              l.id,
                          ),
            }),
        ],
    });
}
function tA(t) {
    let {
            projects: l,
            fetchState: e,
            idea: i,
            guildId: s,
            submitting: d,
            createError: o,
            createDisabled: c,
            modelSettings: u,
            onModelSettingsChange: m,
            onSelectProject: x,
            onIdeaChange: g,
            onCreate: f,
            onImportNewProject: j,
            importing: v,
        } = t,
        b = tj(j),
        C = a.useMemo(
            () =>
                l
                    .filter((t) => (0, T.X0)(t, s))
                    .slice()
                    .sort((t, l) =>
                        null == t.updated_at ? 1 : null == l.updated_at ? -1 : l.updated_at.localeCompare(t.updated_at),
                    ),
            [l, s],
        ),
        z = Q.intl.string($.default.TU9IGR),
        V = [
            Q.intl.string($.default["E+Q26x"]),
            Q.intl.string($.default["06/jqP"]),
            Q.intl.string($.default["7MCiK9"]),
        ],
        R = a.useCallback(
            (t) => {
                "Enter" !== t.key || t.shiftKey || t.nativeEvent.isComposing || (t.preventDefault(), c || f());
            },
            [c, f],
        );
    return (0, n.jsxs)("div", {
        className: r()(tb.nj, tb.a0),
        children: [
            (0, n.jsx)(tn, { title: Q.intl.string($.default.Xmvb23) }),
            (0, n.jsx)(E.Ip, {
                children: (0, n.jsx)("main", {
                    className: tb.rf,
                    children: (0, n.jsxs)("div", {
                        className: tb.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: tb.Ix,
                                children: [
                                    (0, n.jsx)(k.D, {
                                        variant: "heading-xl/semibold",
                                        children: Q.intl.string($.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: tb.Aw,
                                        children: V.map((t) =>
                                            (0, n.jsx)(
                                                p.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: tb.nx,
                                                    onClick: d ? void 0 : () => f(t),
                                                    children: (0, n.jsx)(h.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: tb.un,
                                                        children: t,
                                                    }),
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: tb.DA,
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
                                                className: tb.VP,
                                                children: [
                                                    (0, n.jsx)(O.A, {
                                                        settings: u ?? _.hk,
                                                        choices:
                                                            null == (0, D.V)()
                                                                ? _.S8
                                                                : {
                                                                      main: [..._.S8.main, ..._.wF.main],
                                                                      subagent: [..._.S8.subagent, ..._.wF.subagent],
                                                                      thinking: _.S8.thinking,
                                                                  },
                                                        disabled: d,
                                                        onChange: m,
                                                    }),
                                                    (0, n.jsx)(N.$, {
                                                        variant: "primary",
                                                        size: "md",
                                                        text: Q.intl.string(Q.t.CumH4u),
                                                        disabled: c,
                                                        loading: d,
                                                        onClick: () => f(),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("section", {
                                className: tb.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: tb.lP,
                                        children: [
                                            (0, n.jsxs)("div", {
                                                className: tb.RM,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-md/medium",
                                                        color: "text-strong",
                                                        children: Q.intl.string($.default.Bo5fE3),
                                                    }),
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-subtle",
                                                        children: Q.intl.string($.default.YnAFtT),
                                                    }),
                                                ],
                                            }),
                                            (0, n.jsx)(N.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                icon: A.H,
                                                text: Q.intl.string($.default["NHP2+t"]),
                                                loading: v,
                                                disabled: v,
                                                onClick: b.open,
                                            }),
                                            b.input,
                                        ],
                                    }),
                                    (null == e || "loading" === e.type) && 0 === C.length
                                        ? (0, n.jsx)("div", { className: tb.E8, children: (0, n.jsx)(I.y, {}) })
                                        : e?.type === "error" && 0 === C.length
                                          ? (0, n.jsxs)("div", {
                                                className: tb.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: Q.intl.string($.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: Q.intl.string($.default["42EdIV"]),
                                                        onClick: P.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === C.length
                                            ? (0, n.jsx)("div", {
                                                  className: tb.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: tb.ST,
                                                      children: [
                                                          (0, n.jsx)(w.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tb.sI,
                                                              children: Q.intl.string($.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : C.map((t) =>
                                                  (0, n.jsx)(
                                                      tE,
                                                      {
                                                          project: t,
                                                          guildId: s,
                                                          onSelect: () => x(t.id),
                                                          onFork: () => (0, ta.A)(t, s),
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
function tI(t) {
    let { guildId: l, projectId: e } = t,
        i = (0, c.yK)([G.A], () => G.A.getAllProjects()),
        s = (0, c.bG)([G.A], () => G.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        o = e ?? null,
        [u, m] = a.useState(!1),
        [x, g] = a.useState(null),
        [p, h] = a.useState(null),
        b = r.trim();
    a.useEffect(() => {
        (0, P.hF)();
    }, []),
        a.useEffect(() => {
            (0, P.dm)(l, o);
        }, [l, o]);
    let C = a.useCallback(
            async (t) => {
                let e = (t ?? r).trim();
                if ("" !== e) {
                    null != t && d(t), m(!0), g(null);
                    try {
                        let t = await (0, P.gA)({ guild_id: l });
                        (0, L.Hc)(t),
                            null != p && (0, L.r2)(t, p),
                            (0, L.dv)(t, e),
                            (0, V.pX)(tm.BVt.CHANNEL(l, tt.VV.VIBEGRATIONS, t)),
                            d(""),
                            h(null);
                    } catch (t) {
                        g(t instanceof Error ? t.message : Q.intl.string($.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [l, r, p],
        ),
        [N, k] = a.useState(!1),
        E = a.useCallback(
            async (t) => {
                let e = tf(t);
                if (null != e) return void (0, f.P0)((0, j.o)(e, v.Ck.FAILURE));
                k(!0);
                let i = null;
                try {
                    (i = await (0, P.gA)({ guild_id: l })),
                        await th(i, t, Q.intl.string($.default.KjEtrZ)),
                        (0, V.pX)(tm.BVt.CHANNEL(l, tt.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, P.xx)(i).catch(() => void 0)),
                        (0, f.P0)((0, j.o)(Q.intl.string($.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    k(!1);
                }
            },
            [l],
        ),
        y = a.useCallback(
            (t) => {
                (0, V.pX)(tm.BVt.CHANNEL(l, tt.VV.VIBEGRATIONS, t));
            },
            [l],
        ),
        A = a.useCallback(() => {
            (0, V.pX)(tm.BVt.CHANNEL(l, tt.VV.VIBEGRATIONS));
        }, [l]),
        I = a.useCallback((t) => {
            d(t), g(null);
        }, []),
        w = null == o ? null : (i.find((t) => t.id === o) ?? null);
    return null != o
        ? (0, n.jsx)(ty, { project: w, projectsLoaded: s?.type === "success", onBack: A, guildId: l })
        : (0, n.jsx)(tA, {
              projects: i,
              fetchState: s,
              modelSettings: p,
              onModelSettingsChange: h,
              idea: r,
              guildId: l,
              submitting: u,
              createError: x,
              createDisabled: "" === b || u,
              onSelectProject: y,
              onIdeaChange: I,
              onCreate: C,
              onImportNewProject: E,
              importing: N,
          });
}
