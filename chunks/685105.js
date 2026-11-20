l.d(e, { A: () => K });
var s = l(477900),
    t = l(582128),
    i = l(503698),
    a = l.n(i),
    r = l(834730),
    o = l(97808),
    u = l(778712),
    d = l(140735),
    c = l(939249),
    p = l(289873),
    m = l(381849),
    x = l(427262),
    j = l(503275),
    h = l(233470),
    v = l(845079),
    g = l(855986),
    f = l(617617),
    A = l(218461),
    N = l(513425),
    b = l(404373),
    _ = l(260498),
    y = l(189714),
    C = l(722701),
    S = l(811587);
let I = [_.Ay, N.A, A.Ay, f.A, C.A];
var E = l(866665),
    L = l(22231),
    k = l(646514),
    M = l(191850),
    w = l(792996),
    z = l(482062);
let T = z.w5,
    P = { in_progress: M.default["Y8pS+n"], draft: M.default.CSAaT0 };
function G(n) {
    let { status: e } = n;
    return (0, s.jsx)(E.m, {
        text: w.intl.string(P[e]),
        position: "top",
        ariaHidden: !0,
        children: (0, s.jsx)("span", {
            className: z.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === e
                    ? (0, s.jsx)(p.y, { type: p.t.SPINNING_CIRCLE_SIMPLE, className: z.u1, itemClassName: z.pu })
                    : (0, s.jsx)(L.PencilIcon, { size: "xxs", color: k.A.colors.ICON_SUBTLE }),
        }),
    });
}
var R = l(731084),
    D = l(104317),
    H = l(886540),
    U = l(162052),
    F = l(790624);
function Z(n) {
    let { projectId: e } = n,
        l = (0, g.bG)(
            [N.A],
            () => {
                let n = (0, H.Ji)(N.A.getMessages(e));
                return null == n
                    ? null
                    : ((0, D.w)(n.steps) ??
                          (0, R.Dy)({
                              activity: N.A.getThinkingActivity(e),
                              compacting: N.A.isCompacting(e),
                              saving: N.A.isSaving(e),
                          }));
            },
            [e],
        );
    return (0, s.jsx)(r.E, {
        variant: "body-xs/normal",
        color: "none",
        className: a()(F.pG, U.Hz),
        "aria-hidden": !0,
        children: l ?? w.intl.string(M.default["Y8pS+n"]),
    });
}
function B(n) {
    let { project: e, time: l } = n,
        t = (0, j.vm)(e.owner_user_id),
        i = (0, x.tx)(t),
        d = (0, s.jsx)("span", { className: F.uk, "aria-hidden": !0 });
    return (0, s.jsxs)(r.E, {
        variant: "body-xs/normal",
        color: "none",
        className: a()(F.pG, F.sL, F.kB),
        children: [
            l,
            null != t
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != l ? d : null,
                          (0, s.jsx)(o.eu, {
                              src: t.getAvatarURL(e.guild_id, (0, u.FT)(u._3.SIZE_16)),
                              size: u._3.SIZE_16,
                              className: F.Wy,
                              "aria-hidden": !0,
                          }),
                          (0, s.jsx)("span", { className: F.p8, children: i }),
                      ],
                  })
                : null,
        ],
    });
}
let W = t.memo(function (n) {
    let e,
        l,
        { project: t, onSelect: i, selected: o = !1, renderActions: u, onContextMenu: x, hideOwner: j = !1 } = n,
        {
            status: A,
            unread: E,
            deleting: L,
        } = ((e = t.id),
        (l = (t.supported_surfaces?.length ?? 0) > 0),
        (0, g.cf)(
            I,
            () => ({
                status: (function (n) {
                    let { thinking: e, publishState: l, everPublished: s } = n;
                    return e
                        ? "in_progress"
                        : null != l && ("nothing_built" === l || "not_live" === l || "live_outdated" === l)
                          ? "draft"
                          : (null != l && (0, S.lE)(l)) || s
                            ? "published"
                            : "draft";
                })({
                    thinking: N.A.isThinking(e),
                    publishState: C.A.getPublishStatus(e)?.publishState ?? null,
                    everPublished: l,
                }),
                unread: (0, b.tz)(e) && !(0, y.j)(f.A.settings, e),
                deleting: _.Ay.isProjectDeleting(e),
            }),
            [e, l],
        )),
        k = !L && "in_progress" === A,
        z = !L && E,
        R = L || "published" === A ? null : A,
        D = [null != R ? w.intl.string(P[R]) : null, z ? w.intl.string(M.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        H = (function (n) {
            if (null == n.updated_at) return null;
            let e = Date.parse(n.updated_at);
            return Number.isNaN(e) ? null : e;
        })(t),
        W = null != H ? (0, m.Ay)({ since: H, getFormatter: m.i, includeWeeks: !0 }) : null,
        Y = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("span", {
                    className: F.Kk,
                    children: [
                        (0, s.jsx)(v.A, { project: t, size: "sidebar", className: null != R ? T : void 0 }),
                        null != R ? (0, s.jsx)(G, { status: R }) : null,
                    ],
                }),
                (0, s.jsxs)("span", {
                    className: F.rf,
                    children: [
                        (0, s.jsx)(r.E, {
                            variant: "body-md/medium",
                            color: "none",
                            className: a()(F.UU, { [U.Hz]: k }),
                            children: t.name,
                        }),
                        L
                            ? (0, s.jsx)(r.E, {
                                  variant: "body-xs/normal",
                                  color: "none",
                                  className: a()(F.pG, F.sL),
                                  children: w.intl.string(M.default.Yh5pAc),
                              })
                            : k
                              ? (0, s.jsx)(Z, { projectId: t.id })
                              : j
                                ? null != W
                                    ? (0, s.jsx)(r.E, {
                                          variant: "body-xs/normal",
                                          color: "none",
                                          className: a()(F.pG, F.sL),
                                          children: W,
                                      })
                                    : null
                                : (0, s.jsx)(B, { project: t, time: W }),
                    ],
                }),
                "" !== D ? (0, s.jsx)(d.A, { children: D }) : null,
            ],
        });
    return null == i
        ? (0, s.jsxs)("li", {
              className: a()(F.AS, { [F.Cp]: L }),
              "aria-busy": L,
              children: [
                  z ? (0, s.jsx)("span", { className: F.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsxs)("div", {
                      className: a()(F.nM, F.bl, { [F.gy]: z }),
                      onContextMenu: null == x || L ? void 0 : (n) => x(n, t),
                      children: [Y, null == u || L ? null : (0, s.jsx)("div", { className: F.a7, children: u(t) })],
                  }),
              ],
          })
        : (0, s.jsxs)("li", {
              className: a()(F.AS, { [F.Cp]: L, [F.vX]: null != u }),
              "aria-busy": L,
              children: [
                  z ? (0, s.jsx)("span", { className: F.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsx)(c.D, {
                      className: a()(F.nM, { [F.wH]: o, [F.gy]: z }),
                      "aria-current": o ? "page" : void 0,
                      tabIndex: L ? -1 : void 0,
                      onMouseDown: L
                          ? void 0
                          : (n) => {
                                0 === n.button && (0, h.tf)(t.id);
                            },
                      onClick: L ? void 0 : () => i(t),
                      onContextMenu: null == x || L ? void 0 : (n) => x(n, t),
                      children: Y,
                  }),
                  null != u
                      ? (0, s.jsx)("div", {
                            className: a()(F.XI, { [F.Rn]: L }),
                            children: L ? (0, s.jsx)(p.y, { type: p.t.SPINNING_CIRCLE_SIMPLE }) : u(t),
                        })
                      : null,
              ],
          });
});
var Y = l(831727);
function K(n) {
    let {
        projects: e,
        onSelect: l,
        selectedProjectId: t = null,
        renderProjectActions: i,
        onProjectContextMenu: a,
        listRef: r,
        hideOwner: o = !1,
    } = n;
    return (0, s.jsx)("ul", {
        ref: r,
        className: Y.p,
        children: e.map((n) =>
            (0, s.jsx)(
                W,
                { project: n, onSelect: l, selected: n.id === t, renderActions: i, onContextMenu: a, hideOwner: o },
                n.id,
            ),
        ),
    });
}
