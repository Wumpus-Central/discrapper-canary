n.d(t, { A: () => L });
var l = n(477900),
    a = n(582128),
    i = n(834730),
    r = n(821609),
    s = n(289873),
    o = n(371169),
    u = n(17928),
    d = n(260498),
    c = n(741907),
    f = n(503698),
    m = n.n(f),
    p = n(939249),
    g = n(140735),
    h = n(995273),
    x = n(497183),
    j = n(219956),
    k = n(866665),
    v = n(248675),
    y = n(105292),
    b = n(482062);
let _ = b.w5,
    w = { in_progress: v.default["Y8pS+n"], draft: v.default.CSAaT0, published: v.default.qbUdLZ };
function S(e) {
    let { status: t } = e;
    return (0, l.jsx)(k.m, {
        text: y.intl.string(w[t]),
        position: "top",
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: b.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === t
                    ? (0, l.jsx)(s.y, { type: s.t.SPINNING_CIRCLE_SIMPLE, className: b.u1, itemClassName: b.pu })
                    : (0, l.jsx)("span", { className: "draft" === t ? b.K4 : b.H3 }),
        }),
    });
}
var A = n(731084),
    C = n(104317),
    N = n(245179),
    I = n(886540),
    E = n(162052),
    P = n(790624);
function T(e) {
    let { projectId: t } = e,
        n = (0, u.bG)(
            [N.A],
            () => {
                let e = (0, I.Ji)(N.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, C.w)(e.steps) ??
                          (0, A.Dy)({
                              activity: N.A.getThinkingActivity(t),
                              compacting: N.A.isCompacting(t),
                              saving: N.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(i.E, {
        variant: "text-xs/normal",
        color: "none",
        className: m()(P.pG, E.Hz),
        "aria-hidden": !0,
        children: n ?? y.intl.string(v.default["Y8pS+n"]),
    });
}
let D = a.memo(function (e) {
    let { project: t, onSelect: n, selected: a = !1, renderActions: r, onContextMenu: u } = e,
        { status: d, unread: c, deleting: f } = (0, j.B$)(t),
        k = !f && "in_progress" === d,
        b = !f && c,
        A = (0, j.yy)(t);
    return (0, l.jsxs)("li", {
        className: m()(P.AS, { [P.Cp]: f, [P.vX]: null != r }),
        "aria-busy": f,
        children: [
            b ? (0, l.jsx)("span", { className: P.dM, "aria-hidden": !0 }) : null,
            (0, l.jsxs)(p.D, {
                className: m()(P.nM, { [P.wH]: a, [P.gy]: b }),
                "aria-current": a ? "page" : void 0,
                tabIndex: f ? -1 : void 0,
                onMouseDown: f
                    ? void 0
                    : (e) => {
                          0 === e.button && (0, o.tf)(t.id);
                      },
                onClick: f ? void 0 : () => n(t),
                onContextMenu: null == u || f ? void 0 : (e) => u(e, t),
                children: [
                    (0, l.jsxs)("span", {
                        className: P.Kk,
                        children: [
                            (0, l.jsx)(x.A, { project: t, size: "sidebar", className: _ }),
                            f ? null : (0, l.jsx)(S, { status: d }),
                        ],
                    }),
                    (0, l.jsxs)("span", {
                        className: P.rf,
                        children: [
                            (0, l.jsx)(i.E, {
                                variant: "text-md/medium",
                                color: "none",
                                className: m()(P.UU, { [E.Hz]: k }),
                                children: t.name,
                            }),
                            f
                                ? (0, l.jsx)(i.E, {
                                      variant: "text-xs/normal",
                                      color: "none",
                                      className: m()(P.pG, P.sL),
                                      children: y.intl.string(v.default.Yh5pAc),
                                  })
                                : k
                                  ? (0, l.jsx)(T, { projectId: t.id })
                                  : null != A
                                    ? (0, l.jsx)(i.E, {
                                          variant: "text-xs/normal",
                                          color: "none",
                                          className: m()(P.pG, P.sL),
                                          children: (0, h.jb)(A, !1),
                                      })
                                    : null,
                        ],
                    }),
                    f
                        ? null
                        : (0, l.jsx)(g.A, {
                              children: [y.intl.string(w[d]), b ? y.intl.string(v.default["N+3Pzk"]) : null]
                                  .filter(Boolean)
                                  .join(", "),
                          }),
                ],
            }),
            null != r
                ? (0, l.jsx)("div", {
                      className: m()(P.XI, { [P.Rn]: f }),
                      children: f ? (0, l.jsx)(s.y, { type: s.t.SPINNING_CIRCLE_SIMPLE }) : r(t),
                  })
                : null,
        ],
    });
});
var M = n(655074);
function L(e) {
    let t,
        n,
        f,
        m,
        {
            onSelect: p,
            query: g = "",
            guildId: h,
            selectedProjectId: x = null,
            renderProjectActions: j,
            onProjectContextMenu: k,
        } = e,
        b =
            ((t = (0, c.A)(h)),
            (n = (0, u.bG)(
                [d.Ay],
                () => (null != h ? d.Ay.getGuildProjectsFetchState(h) : d.Ay.getOwnedProjectsFetchState()),
                [h],
            )),
            (f = g.trim().toLocaleLowerCase()),
            (m = a.useMemo(() => ("" === f ? t : t.filter((e) => e.name.toLocaleLowerCase().includes(f))), [t, f]))
                .length > 0
                ? { kind: "projects", projects: m }
                : t.length > 0
                  ? { kind: "no_match" }
                  : "error" === n
                    ? { kind: "error" }
                    : "success" !== n
                      ? { kind: "loading" }
                      : { kind: "empty" });
    return "projects" === b.kind
        ? (0, l.jsx)("ul", {
              className: M.p_,
              children: b.projects.map((e) =>
                  (0, l.jsx)(
                      D,
                      { project: e, onSelect: p, selected: e.id === x, renderActions: j, onContextMenu: k },
                      e.id,
                  ),
              ),
          })
        : "no_match" === b.kind
          ? (0, l.jsx)(i.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: M.Ie,
                children: y.intl.string(v.default.X37fkR),
            })
          : "error" === b.kind
            ? (0, l.jsxs)("div", {
                  className: M.E8,
                  children: [
                      (0, l.jsx)(i.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: y.intl.string(v.default.DJAPMO),
                      }),
                      (0, l.jsx)(r.$, {
                          variant: "secondary",
                          size: "sm",
                          text: y.intl.string(v.default["WFJ/vb"]),
                          onClick: () => (0, o.hF)(h),
                      }),
                  ],
              })
            : "loading" === b.kind
              ? (0, l.jsx)("div", { className: M.E8, children: (0, l.jsx)(s.y, {}) })
              : (0, l.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: M.Ie,
                    children: y.intl.string(v.default["9/5sLV"]),
                });
}
