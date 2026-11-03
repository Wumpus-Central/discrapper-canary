l.d(e, { A: () => Q });
var s = l(477900),
    i = l(582128),
    t = l(503698),
    a = l.n(t),
    r = l(17928),
    d = l(661531),
    u = l(834730),
    c = l(97808),
    o = l(778712),
    x = l(950305),
    p = l(140735),
    m = l(939249),
    j = l(289873),
    h = l(548118),
    g = l(381849),
    v = l(287809),
    f = l(427262),
    N = l(503275),
    A = l(371169),
    _ = l(465006),
    S = l(845079),
    b = l(617617),
    y = l(573163),
    I = l(805942),
    C = l(404373),
    E = l(260498),
    k = l(189714),
    z = l(722701),
    M = l(811587);
let w = [E.Ay, I.A, y.Ay, b.A, z.A];
var L = l(866665),
    T = l(22231),
    F = l(809526),
    G = l(105292),
    P = l(482062);
let D = P.w5,
    U = { in_progress: F.default["Y8pS+n"], draft: F.default.CSAaT0 };
function R(n) {
    let { status: e } = n;
    return (0, s.jsx)(L.m, {
        text: G.intl.string(U[e]),
        position: "top",
        ariaHidden: !0,
        children: (0, s.jsx)("span", {
            className: P.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === e
                    ? (0, s.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: P.u1, itemClassName: P.pu })
                    : (0, s.jsx)(T.PencilIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
        }),
    });
}
var H = l(731084),
    B = l(104317),
    V = l(886540),
    Y = l(162052),
    O = l(790624);
function W(n) {
    let { projectId: e } = n,
        l = (0, r.bG)(
            [I.A],
            () => {
                let n = (0, V.Ji)(I.A.getMessages(e));
                return null == n
                    ? null
                    : ((0, B.w)(n.steps) ??
                          (0, H.Dy)({
                              activity: I.A.getThinkingActivity(e),
                              compacting: I.A.isCompacting(e),
                              saving: I.A.isSaving(e),
                          }));
            },
            [e],
        );
    return (0, s.jsx)(u.E, {
        variant: "text-xs/normal",
        color: "none",
        className: a()(O.pG, Y.Hz),
        "aria-hidden": !0,
        children: l ?? G.intl.string(F.default["Y8pS+n"]),
    });
}
function X(n) {
    let { guild: e } = n;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(h.Ay, { guild: e, size: h.Ay.Sizes.SMOL, active: !0, className: O.Wy, "aria-hidden": !0 }),
            (0, s.jsx)("span", { className: O.p8, children: e.name }),
        ],
    });
}
function Z(n) {
    let { project: e, time: l, showServer: i } = n,
        t = (0, N.vm)(e.owner_user_id),
        r = (0, f.tx)(t),
        d = (0, _.V)(e);
    return (0, s.jsxs)(u.E, {
        variant: "text-xs/normal",
        color: "none",
        className: a()(O.pG, O.sL, O.kB),
        children: [
            l,
            null != t
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                          (0, s.jsx)(c.eu, {
                              src: t.getAvatarURL(e.guild_id, (0, o.FT)(o._3.SIZE_16)),
                              size: o._3.SIZE_16,
                              className: O.Wy,
                              "aria-hidden": !0,
                          }),
                          (0, s.jsx)("span", { className: O.p8, children: r }),
                      ],
                  })
                : null,
            i && d?.kind === "guild"
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }),
                          (0, s.jsx)(X, { guild: d.guild }),
                      ],
                  })
                : null,
        ],
    });
}
function K(n) {
    let { project: e, time: l } = n,
        i = (0, _.V)(e),
        t = null == i && (0, _.ns)(e);
    return null != l || null != i || t
        ? (0, s.jsxs)(u.E, {
              variant: "text-xs/normal",
              color: "none",
              className: a()(O.pG, O.sL, O.kB),
              children: [
                  l,
                  null != i
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                                "guild" === i.kind
                                    ? (0, s.jsx)(X, { guild: i.guild })
                                    : (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("span", {
                                                  className: O.gk,
                                                  children: (0, s.jsx)(x.UserIcon, {
                                                      size: "xxs",
                                                      color: d.A.colors.TEXT_MUTED,
                                                      "aria-hidden": !0,
                                                  }),
                                              }),
                                              (0, s.jsx)("span", { className: O.p8, children: i.label }),
                                          ],
                                      }),
                            ],
                        })
                      : t
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                                  (0, s.jsx)("span", { className: O.p8, children: G.intl.string(F.default.poYQxw) }),
                              ],
                          })
                        : null,
              ],
          })
        : null;
}
let q = i.memo(function (n) {
    let e,
        l,
        { project: i, onSelect: t, selected: d = !1, renderActions: c, onContextMenu: o, showServer: x = !1 } = n,
        {
            status: h,
            unread: f,
            deleting: N,
        } = ((e = i.id),
        (l = (i.supported_surfaces?.length ?? 0) > 0),
        (0, r.cf)(
            w,
            () => ({
                status: (function (n) {
                    let { thinking: e, publishState: l, everPublished: s } = n;
                    return e
                        ? "in_progress"
                        : null != l && ("nothing_built" === l || "not_live" === l || "live_outdated" === l)
                          ? "draft"
                          : (null != l && (0, M.lE)(l)) || s
                            ? "published"
                            : "draft";
                })({
                    thinking: I.A.isThinking(e),
                    publishState: z.A.getPublishStatus(e)?.publishState ?? null,
                    everPublished: l,
                }),
                unread: (0, C.tz)(e) && !(0, k.j)(b.A.settings, e),
                deleting: E.Ay.isProjectDeleting(e),
            }),
            [e, l],
        )),
        _ = !N && "in_progress" === h,
        y = !N && f,
        L = N || "published" === h ? null : h,
        T = [null != L ? G.intl.string(U[L]) : null, y ? G.intl.string(F.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        P = (function (n) {
            if (null == n.updated_at) return null;
            let e = Date.parse(n.updated_at);
            return Number.isNaN(e) ? null : e;
        })(i),
        H = (0, r.bG)([v.default], () => v.default.getCurrentUser()?.id),
        B = i.owner_user_id === H,
        V = null != P ? (0, g.Ay)({ since: P, getFormatter: g.i, includeWeeks: !0 }) : null,
        X = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("span", {
                    className: O.Kk,
                    children: [
                        (0, s.jsx)(S.A, { project: i, size: "sidebar", className: null != L ? D : void 0 }),
                        null != L ? (0, s.jsx)(R, { status: L }) : null,
                    ],
                }),
                (0, s.jsxs)("span", {
                    className: O.rf,
                    children: [
                        (0, s.jsx)(u.E, {
                            variant: "text-md/medium",
                            color: "none",
                            className: a()(O.UU, { [Y.Hz]: _ }),
                            children: i.name,
                        }),
                        N
                            ? (0, s.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "none",
                                  className: a()(O.pG, O.sL),
                                  children: G.intl.string(F.default.Yh5pAc),
                              })
                            : _
                              ? (0, s.jsx)(W, { projectId: i.id })
                              : B
                                ? (0, s.jsx)(K, { project: i, time: V })
                                : (0, s.jsx)(Z, { project: i, time: V, showServer: x }),
                    ],
                }),
                "" !== T ? (0, s.jsx)(p.A, { children: T }) : null,
            ],
        });
    return null == t
        ? (0, s.jsxs)("li", {
              className: a()(O.AS, { [O.Cp]: N }),
              "aria-busy": N,
              children: [
                  y ? (0, s.jsx)("span", { className: O.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsxs)("div", {
                      className: a()(O.nM, O.bl, { [O.gy]: y }),
                      onContextMenu: null == o || N ? void 0 : (n) => o(n, i),
                      children: [X, null == c || N ? null : (0, s.jsx)("div", { className: O.a7, children: c(i) })],
                  }),
              ],
          })
        : (0, s.jsxs)("li", {
              className: a()(O.AS, { [O.Cp]: N, [O.vX]: null != c }),
              "aria-busy": N,
              children: [
                  y ? (0, s.jsx)("span", { className: O.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsx)(m.D, {
                      className: a()(O.nM, { [O.wH]: d, [O.gy]: y }),
                      "aria-current": d ? "page" : void 0,
                      tabIndex: N ? -1 : void 0,
                      onMouseDown: N
                          ? void 0
                          : (n) => {
                                0 === n.button && (0, A.tf)(i.id);
                            },
                      onClick: N ? void 0 : () => t(i),
                      onContextMenu: null == o || N ? void 0 : (n) => o(n, i),
                      children: X,
                  }),
                  null != c
                      ? (0, s.jsx)("div", {
                            className: a()(O.XI, { [O.Rn]: N }),
                            children: N ? (0, s.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE }) : c(i),
                        })
                      : null,
              ],
          });
});
var J = l(831727);
function Q(n) {
    let {
        projects: e,
        onSelect: l,
        selectedProjectId: i = null,
        renderProjectActions: t,
        onProjectContextMenu: a,
        listRef: r,
        showServer: d = !1,
    } = n;
    return (0, s.jsx)("ul", {
        ref: r,
        className: J.p,
        children: e.map((n) =>
            (0, s.jsx)(
                q,
                { project: n, onSelect: l, selected: n.id === i, renderActions: t, onContextMenu: a, showServer: d },
                n.id,
            ),
        ),
    });
}
