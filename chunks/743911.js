e.r(t), e.d(t, { default: () => lA });
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
    k = e(297264),
    E = e(364522),
    y = e(103557),
    I = e(81369),
    A = e(289873),
    w = e(152367),
    S = e(661531),
    z = e(627363),
    V = e(976860),
    _ = e(673724),
    R = e(948230),
    P = e(148555),
    T = e(683180),
    D = e(208137),
    H = e(805332),
    F = e(783791),
    L = e(998939),
    B = e(972786),
    G = e(20386),
    M = e(833472),
    O = e(311656),
    X = e(922016),
    K = e(980707),
    U = e(477782),
    Y = e(173936),
    q = e(365199),
    W = e(871237),
    Z = e(957565),
    Q = e(459864),
    $ = e(375708),
    J = e(192308),
    ll = e(746080);
function lt(l) {
    let { projectId: t, projectName: i, guildId: s, onExport: r, onImport: d, onFork: c, onConnectTool: o } = l,
        m = a.useRef(null);
    return (0, n.jsx)(X.Y, {
        targetElementRef: m,
        position: "bottom",
        align: "right",
        animation: X.Y.Animation.NONE,
        renderPopout: (l) => {
            let { closePopout: a } = l;
            return (0, n.jsxs)(K.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${t}`,
                "aria-label": $.intl.string($.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: [
                    null != c || null != r || null != d || null != o
                        ? (0, n.jsxs)(U.rX, {
                              children: [
                                  null != c
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "fork",
                                            label: $.intl.string(Q.default.hU9QAE),
                                            action: c,
                                        })
                                      : null,
                                  null != r
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "export",
                                            label: $.intl.string(Q.default["7iamDC"]),
                                            action: r,
                                        })
                                      : null,
                                  null != d
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "import",
                                            label: $.intl.string(Q.default.lf8HqE),
                                            action: d,
                                        })
                                      : null,
                                  null != o
                                      ? (0, n.jsx)(U.Dr, {
                                            id: "connect-tool",
                                            label: $.intl.string(Q.default["3qelzD"]),
                                            action: o,
                                        })
                                      : null,
                              ],
                          })
                        : null,
                    Z.p5 && null != s
                        ? (0, n.jsx)(U.rX, {
                              children: (0, n.jsx)(U.Dr, {
                                  id: "copy-link",
                                  label: $.intl.string($.t.WqhZss),
                                  icon: Y.LinkIcon,
                                  leadingAccessory: { type: "icon", icon: Y.LinkIcon },
                                  action: () =>
                                      (0, Z.C)((0, W.n)(s, ll.VV.VIBEGRATIONS, t), () =>
                                          (0, j.P0)((0, f.o)($.intl.string($.t["L/PwZf"]), v.Ck.SUCCESS)),
                                      ),
                              }),
                          })
                        : null,
                    (0, n.jsxs)(U.rX, {
                        children: [
                            (0, n.jsx)(U.Dr, {
                                id: "rename",
                                label: $.intl.string(Q.default.fHTQgk),
                                action: () => {
                                    (0, J.openModalLazy)(async () => {
                                        let { default: l } = await e.e("153463").then(e.bind(e, 809898));
                                        return (e) => (0, n.jsx)(l, { ...e, projectId: t });
                                    });
                                },
                            }),
                            (0, n.jsx)(U.Dr, {
                                id: "delete",
                                label: $.intl.string($.t.oyYWHE),
                                color: "danger",
                                action: () => {
                                    (0, u.A)({
                                        title: $.intl.formatToPlainString(Q.default.ZokHVz, { name: i }),
                                        subtitle: $.intl.string(Q.default.NmF939),
                                        confirmText: $.intl.string($.t.oyYWHE),
                                        variant: "critical",
                                        onConfirm: async () => {
                                            if (!(await (0, R.xx)(t)).ok) throw Error($.intl.string(Q.default.tqKZCi));
                                        },
                                    });
                                },
                            }),
                        ],
                    }),
                ],
            });
        },
        children: (l, t) => {
            let { isShown: e } = t;
            return (0, n.jsx)(N.K, {
                ...l,
                buttonRef: m,
                icon: q.MoreHorizontalIcon,
                size: "sm",
                variant: "icon-only",
                "aria-label": $.intl.string($.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": e,
            });
        },
    });
}
var le = e(742589),
    li = e(769979);
function ln(l) {
    let { title: t, actions: e, breadcrumb: i } = l;
    return (0, n.jsx)(le.A, {
        hideSearch: !0,
        toolbar: e,
        className: li.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: li.QF,
            children: [
                (0, n.jsx)(w.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: S.A.colors.TEXT_STRONG,
                    className: li.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(le.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(le.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(le.A.Title, { className: li.Qw, wrapperClassName: li.DD, children: t }),
            ],
        }),
    });
}
var la = e(594483),
    ls = e(189213),
    lr = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function ld(l) {
    let { reason: t, transitionState: e, onClose: i } = l,
        a = "permissions" === t;
    return (0, n.jsx)(ls.Modal, {
        transitionState: e,
        onClose: i,
        title: $.intl.string(a ? Q.default.Rtlv25 : Q.default["+UouPe"]),
        subtitle: $.intl.string(a ? Q.default["nDQB/b"] : Q.default["E0QD++"]),
        size: "sm",
        actions: [{ text: $.intl.string(a ? $.t.BddRzS : Q.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function lc(l) {
    (0, J.openModal)((t) => (0, n.jsx)(ld, { ...t, reason: l }));
}
var lo = e(224640),
    lu = e(815021),
    lm = e(652215),
    lx = e(931587),
    lg = e(264997);
function lp(l) {
    let { applicationId: t, guildId: e, projectName: i, transitionState: s, onClose: r } = l,
        d = $.intl.string(Q.default.yzxKsU),
        c = $.intl.formatToPlainString(Q.default.CC69wK, { projectName: i }),
        o = a.useCallback(() => {
            let l = (0, T.SH)(e, t);
            (0, V.pX)(null == l ? lm.BVt.CHANNEL(e) : lm.BVt.CHANNEL(e, l)), r();
        }, [t, e, r]);
    return (0, n.jsx)(lo.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: lx.zr,
            children: [
                (0, n.jsx)("div", { className: lx.b, children: (0, n.jsx)(lu.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: lx.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: lx.bm,
                            children: (0, n.jsx)("img", { className: lx.yW, src: lg, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: lx.R_,
                            children: [
                                (0, n.jsx)(k.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
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
                    className: lx.o1,
                    children: [
                        (0, n.jsx)(C.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: $.intl.string($.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(C.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: $.intl.string($.t.jVcuVY),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        }),
    });
}
async function lh(l, t, e) {
    (0, L.Hc)(l);
    let i = await (0, L.vX)(l, t);
    (0, L.dv)(l, e, [i]);
}
function lj(l) {
    let t = "" === l.type ? "application/octet-stream" : l.type;
    return (0, _.x5)(l.size, t)
        ? null
        : $.intl.formatToPlainString(Q.default.AzziHF, { size: (0, _.ZJ)((0, _.yr)(t)) });
}
function lf(l) {
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
var lv = e(165610),
    lb = e(352978);
function lN(l) {
    return (0, n.jsx)(m.ChatIcon, { ...l, size: "custom", width: 20, height: 20 });
}
function lC(l) {
    return (0, n.jsx)(x.u, { ...l, size: "custom", width: 20, height: 20 });
}
function lk(l) {
    return (0, n.jsx)(g.k, { ...l, size: "custom", width: 20, height: 20 });
}
function lE(l) {
    let { project: t, guildId: e, onSelect: i, onFork: a } = l,
        s = (0, o.bG)([F.Ay], () => F.Ay.isThinking(t.id), [t.id]),
        r =
            null == t.updated_at
                ? null
                : $.intl.formatToPlainString(Q.default.oMDaqr, { time: c()(t.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: lb.OY,
        children: [
            (0, n.jsx)(p.D, {
                className: lb.W6,
                onClick: i,
                children: (0, n.jsxs)("div", {
                    className: lb.MM,
                    children: [
                        (0, n.jsx)(h.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: lb.j1,
                            children: t.name,
                        }),
                        null == r
                            ? null
                            : (0, n.jsx)("div", {
                                  className: lb.h3,
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
                className: lb.M2,
                children: [
                    s ? (0, n.jsx)(G.Ty, { className: lb.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: lb.Pl,
                        children: (0, n.jsx)(lt, { projectId: t.id, projectName: t.name, guildId: e, onFork: a }),
                    }),
                ],
            }),
        ],
    });
}
function ly(l) {
    let { project: t, projectsLoaded: i, onBack: s, guildId: r } = l,
        [d, c] = a.useState(!1),
        [m, x] = a.useState(!0),
        [g, p] = a.useState(null),
        E = t?.id ?? null,
        y = a.useRef(E),
        I = a.useRef(null);
    y.current = E;
    let A = (0, o.bG)([B.A], () => (null == E ? null : B.A.getIntegrationStatus(E)), [E]),
        { data: w, isLoading: S } = (0, z.YY)(t?.preview_application_id ?? void 0),
        _ = null != E && g !== E,
        T = A?.preview_ready === !0,
        D = T && null != A && (!A.integration_installed || A.bot_permissions_changed),
        F = d || _ || S,
        G = $.intl.string(m ? Q.default.YdgE0j : Q.default.aWVf4j),
        O = a.useCallback(() => x((l) => !l), []),
        X = a.useCallback(() => x(!1), []),
        K = (0, o.bG)([H.A], () => H.A.isBuilderPreviewMobile()),
        U = $.intl.string(K ? Q.default["3uCc8U"] : Q.default["+nzCxZ"]),
        Y = a.useCallback(() => (0, R.GG)(!K), [K]),
        q = a.useCallback(() => {
            null != t && (x(!0), (0, L.dv)(t.id, $.intl.string(Q.default["2ejwtJ"])));
        }, [t]),
        W = lf(
            a.useCallback(
                (l) => {
                    if (null == t) return;
                    let e = t.id,
                        i = lj(l);
                    null != i
                        ? (0, j.P0)((0, f.o)(i, v.Ck.FAILURE))
                        : (0, u.A)({
                              title: $.intl.formatToPlainString(Q.default.XYZqZK, { name: t.name }),
                              subtitle: $.intl.string(Q.default["6syXoH"]),
                              confirmText: $.intl.string(Q.default.pgFuyr),
                              variant: "critical",
                              onConfirm: async () => {
                                  x(!0);
                                  try {
                                      await lh(e, l, $.intl.string(Q.default.C7GU2r));
                                  } catch {
                                      (0, j.P0)((0, f.o)($.intl.string(Q.default["02GpNr"]), v.Ck.FAILURE));
                                  }
                              },
                          });
                },
                [t],
            ),
        ),
        Z = a.useCallback(() => {
            null != t && (0, la.A)(t, r);
        }, [t, r]),
        le = a.useCallback(async () => {
            if (null == E || y.current !== E) return;
            I.current?.abort();
            let l = new AbortController();
            (I.current = l), p(null);
            try {
                await (0, R.U1)(E, l.signal);
            } catch {
            } finally {
                l.signal.aborted || I.current !== l || y.current !== E || p(E);
            }
        }, [E]);
    a.useEffect(
        () => (
            le(),
            () => {
                I.current?.abort(), (I.current = null);
            }
        ),
        [le],
    );
    let li = A?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : r,
        ls = a.useCallback(async () => {
            null == t ||
                (t.guild_id === li && t.preview_guild_id === li) ||
                (await (0, R.M7)(t.id, { guild_id: li, preview_guild_id: li }));
        }, [li, t]),
        ld = a.useCallback(async () => {
            try {
                await ls();
            } catch {}
            await le();
        }, [le, ls]),
        lo = a.useCallback(() => {
            let l = t?.preview_application_id;
            null != t &&
                null != l &&
                P.A.openVibegrationsAppInstallModal({
                    applicationId: l,
                    application: w ?? null,
                    guildId: li,
                    onClose: () => {
                        ld();
                    },
                });
        }, [ld, li, w, t]),
        lu = D ? { type: "permissions", onReviewPermissions: lo, loading: S || _ } : _ ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == t && i && (0, V.pX)(lm.BVt.CHANNEL(r, ll.VV.VIBEGRATIONS));
    }, [r, t, i]);
    let lx = a.useCallback(async () => {
            if (null != t) {
                if (!T) return void lc(lr.NO_PREVIEW);
                if (D) return void lc(lr.PERMISSIONS);
                c(!0);
                try {
                    var l;
                    let e = await (0, L.TV)(t.id);
                    if (!0 !== e.ok) throw Error($.intl.string(Q.default.fNP6Cd));
                    (0, R.tZ)(t.id, { isPreview: !1 }).catch((l) => {
                        console.error("[vibegrations] post-publish refresh failed", t.id, l);
                    }),
                        (l = { applicationId: t.application_id, guildId: r, projectName: t.name }),
                        (0, J.openModal)((t) => (0, n.jsx)(lp, { ...t, ...l }));
                } catch (l) {
                    (0, j.P0)((0, f.o)(l instanceof Error ? l.message : $.intl.string(Q.default.fNP6Cd), v.Ck.FAILURE));
                } finally {
                    c(!1);
                }
            }
        }, [r, D, T, t]),
        lg = (0, n.jsx)(ln, {
            title: t?.name ?? $.intl.string(Q.default.F2dRba),
            breadcrumb: { title: $.intl.string(Q.default.Xmvb23), onClick: s },
            actions:
                null == t
                    ? null
                    : (0, n.jsxs)("div", {
                          className: lb.wO,
                          children: [
                              (0, n.jsxs)("div", {
                                  className: lb.FO,
                                  children: [
                                      (0, n.jsx)(lt, {
                                          projectId: t.id,
                                          projectName: t.name,
                                          guildId: r,
                                          onExport: q,
                                          onImport: W.open,
                                          onFork: Z,
                                          onConnectTool: () => {
                                              var l;
                                              return (
                                                  (l = t.id),
                                                  void (0, J.openModalLazy)(async () => {
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
                                          text: U,
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(N.K, {
                                              icon: K ? lk : lC,
                                              size: "sm",
                                              variant: "icon-only",
                                              "aria-label": U,
                                              "aria-pressed": K,
                                              onClick: Y,
                                          }),
                                      }),
                                      (0, n.jsx)(b.m, {
                                          text: G,
                                          ariaHidden: !0,
                                          children: (0, n.jsx)(N.K, {
                                              icon: lN,
                                              size: "sm",
                                              variant: "icon-only",
                                              "aria-label": G,
                                              "aria-pressed": m,
                                              onClick: O,
                                          }),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(C.$, {
                                  variant: "primary",
                                  size: "sm",
                                  text: $.intl.string(Q.default["5gU57O"]),
                                  loading: d,
                                  disabled: F,
                                  onClick: lx,
                              }),
                          ],
                      }),
        });
    return (0, n.jsxs)("div", {
        className: lb.nj,
        children: [
            W.input,
            (0, n.jsx)("main", {
                className: lb.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: lb.j5,
                              children: [
                                  lg,
                                  (0, n.jsxs)("div", {
                                      className: lb.sD,
                                      children: [
                                          (0, n.jsx)(k.D, {
                                              variant: "heading-lg/semibold",
                                              children: $.intl.string(Q.default.F2dRba),
                                          }),
                                          (0, n.jsx)(h.E, {
                                              variant: "text-md/normal",
                                              color: "text-muted",
                                              children: $.intl.string(Q.default.GnEJ3o),
                                          }),
                                          (0, n.jsx)(C.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: $.intl.string(Q.default["42EdIV"]),
                                              onClick: R.hF,
                                          }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              M.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  previewApplicationId: t.preview_application_id,
                                  surface: lv.sd,
                                  header: lg,
                                  chatOpen: m,
                                  onCloseChat: X,
                                  previewReady: T,
                                  previewGate: lu,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function lI(l) {
    let {
            projects: t,
            fetchState: e,
            idea: i,
            guildId: s,
            submitting: d,
            createError: c,
            createDisabled: o,
            modelSettings: u,
            onModelSettingsChange: m,
            onSelectProject: x,
            onIdeaChange: g,
            onCreate: j,
            onImportNewProject: f,
            importing: v,
        } = l,
        z = lf(f),
        V = a.useMemo(
            () =>
                t
                    .filter((l) => (0, T.X0)(l, s))
                    .slice()
                    .sort((l, t) =>
                        null == l.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(l.updated_at),
                    ),
            [t, s],
        ),
        P = $.intl.string(Q.default.TU9IGR),
        H = [
            $.intl.string(Q.default["E+Q26x"]),
            $.intl.string(Q.default["06/jqP"]),
            $.intl.string(Q.default["7MCiK9"]),
        ],
        F = a.useCallback(
            (l) => {
                "Enter" !== l.key || l.shiftKey || l.nativeEvent.isComposing || (l.preventDefault(), o || j());
            },
            [o, j],
        ),
        L = $.intl.string(Q.default["NHP2+t"]);
    return (0, n.jsxs)("div", {
        className: r()(lb.nj, lb.a0),
        children: [
            (0, n.jsx)(ln, { title: $.intl.string(Q.default.Xmvb23) }),
            (0, n.jsxs)("div", {
                className: lb.Yo,
                children: [
                    (0, n.jsxs)("main", {
                        className: lb.ps,
                        children: [
                            (0, n.jsx)(E.Ip, {
                                className: lb.Yy,
                                children: (0, n.jsx)("div", {
                                    className: lb.Mo,
                                    children: (0, n.jsxs)("section", {
                                        className: r()(lb.Qs, lb.Ix),
                                        children: [
                                            (0, n.jsx)(k.D, {
                                                variant: "heading-xl/semibold",
                                                children: $.intl.string(Q.default["2tYpRK"]),
                                            }),
                                            (0, n.jsx)("div", {
                                                className: lb.Aw,
                                                children: H.map((l) =>
                                                    (0, n.jsx)(
                                                        p.D,
                                                        {
                                                            "aria-disabled": d,
                                                            className: lb.nx,
                                                            onClick: d ? void 0 : () => j(l),
                                                            children: (0, n.jsx)(h.E, {
                                                                variant: "text-md/semibold",
                                                                color: "text-strong",
                                                                className: lb.un,
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
                                className: lb.Yl,
                                children: (0, n.jsxs)("div", {
                                    className: r()(lb.Qs, lb.DA),
                                    children: [
                                        (0, n.jsx)(y.f, {
                                            label: P,
                                            hideLabel: !0,
                                            rows: 3,
                                            value: i,
                                            placeholder: P,
                                            error: c,
                                            onChange: g,
                                            onKeyDown: F,
                                        }),
                                        (0, n.jsxs)("div", {
                                            className: lb.VP,
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
                                                (0, n.jsx)(C.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: $.intl.string($.t.CumH4u),
                                                    disabled: o,
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
                        className: lb.pA,
                        "aria-label": $.intl.string(Q.default.Bo5fE3),
                        children: [
                            (0, n.jsxs)("div", {
                                className: lb.IR,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: lb.RM,
                                        children: [
                                            (0, n.jsx)(h.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: $.intl.string(Q.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(h.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: $.intl.string(Q.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(b.m, {
                                        text: L,
                                        ariaHidden: !0,
                                        children: (0, n.jsx)(N.K, {
                                            icon: I.H,
                                            size: "sm",
                                            variant: "icon-only",
                                            "aria-label": L,
                                            loading: v,
                                            disabled: v,
                                            onClick: z.open,
                                        }),
                                    }),
                                    z.input,
                                ],
                            }),
                            (0, n.jsx)(E.Ip, {
                                className: lb.xe,
                                children:
                                    (null == e || "loading" === e.type) && 0 === V.length
                                        ? (0, n.jsx)("div", { className: lb.E8, children: (0, n.jsx)(A.y, {}) })
                                        : e?.type === "error" && 0 === V.length
                                          ? (0, n.jsxs)("div", {
                                                className: lb.E8,
                                                children: [
                                                    (0, n.jsx)(h.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        className: lb.JS,
                                                        children: $.intl.string(Q.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(C.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: $.intl.string(Q.default["42EdIV"]),
                                                        onClick: R.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === V.length
                                            ? (0, n.jsx)("div", {
                                                  className: lb.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: lb.ST,
                                                      children: [
                                                          (0, n.jsx)(w.D, {
                                                              size: "lg",
                                                              color: S.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(h.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: lb.sI,
                                                              children: $.intl.string(Q.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : (0, n.jsx)("div", {
                                                  className: lb.Dq,
                                                  children: V.map((l) =>
                                                      (0, n.jsx)(
                                                          lE,
                                                          {
                                                              project: l,
                                                              guildId: s,
                                                              onSelect: () => x(l.id),
                                                              onFork: () => (0, la.A)(l, s),
                                                          },
                                                          l.id,
                                                      ),
                                                  ),
                                              }),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function lA(l) {
    let { guildId: t, projectId: e } = l,
        i = (0, o.yK)([B.A], () => B.A.getAllProjects()),
        s = (0, o.bG)([B.A], () => B.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        c = e ?? null,
        [u, m] = a.useState(!1),
        [x, g] = a.useState(null),
        [p, h] = a.useState(null),
        b = r.trim();
    a.useEffect(() => {
        (0, R.hF)();
    }, []),
        a.useEffect(() => {
            (0, R.dm)(t, c);
        }, [t, c]);
    let N = a.useCallback(
            async (l) => {
                let e = (l ?? r).trim();
                if ("" !== e) {
                    null != l && d(l), m(!0), g(null);
                    try {
                        let l = await (0, R.gA)({ guild_id: t });
                        (0, L.Hc)(l),
                            null != p && (0, L.r2)(l, p),
                            (0, L.dv)(l, e),
                            (0, V.pX)(lm.BVt.CHANNEL(t, ll.VV.VIBEGRATIONS, l)),
                            d(""),
                            h(null);
                    } catch (l) {
                        g(l instanceof Error ? l.message : $.intl.string(Q.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [t, r, p],
        ),
        [C, k] = a.useState(!1),
        E = a.useCallback(
            async (l) => {
                let e = lj(l);
                if (null != e) return void (0, j.P0)((0, f.o)(e, v.Ck.FAILURE));
                k(!0);
                let i = null;
                try {
                    (i = await (0, R.gA)({ guild_id: t })),
                        await lh(i, l, $.intl.string(Q.default.KjEtrZ)),
                        (0, V.pX)(lm.BVt.CHANNEL(t, ll.VV.VIBEGRATIONS, i));
                } catch {
                    null != i && (await (0, R.xx)(i).catch(() => void 0)),
                        (0, j.P0)((0, f.o)($.intl.string(Q.default["02GpNr"]), v.Ck.FAILURE));
                } finally {
                    k(!1);
                }
            },
            [t],
        ),
        y = a.useCallback(
            (l) => {
                (0, V.pX)(lm.BVt.CHANNEL(t, ll.VV.VIBEGRATIONS, l));
            },
            [t],
        ),
        I = a.useCallback(() => {
            (0, V.pX)(lm.BVt.CHANNEL(t, ll.VV.VIBEGRATIONS));
        }, [t]),
        A = a.useCallback((l) => {
            d(l), g(null);
        }, []),
        w = null == c ? null : (i.find((l) => l.id === c) ?? null);
    return null != c
        ? (0, n.jsx)(ly, { project: w, projectsLoaded: s?.type === "success", onBack: I, guildId: t })
        : (0, n.jsx)(lI, {
              projects: i,
              fetchState: s,
              modelSettings: p,
              onModelSettingsChange: h,
              idea: r,
              guildId: t,
              submitting: u,
              createError: x,
              createDisabled: "" === b || u,
              onSelectProject: y,
              onIdeaChange: A,
              onCreate: N,
              onImportNewProject: E,
              importing: C,
          });
}
