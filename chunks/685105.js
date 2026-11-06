l.d(e, { A: () => Q });
var s = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    t = l(855986),
    d = l(646514),
    u = l(834730),
    o = l(97808),
    c = l(778712),
    x = l(950305),
    m = l(140735),
    p = l(939249),
    h = l(289873),
    j = l(682163),
    g = l(381849),
    v = l(287809),
    f = l(427262),
    A = l(503275),
    N = l(233470),
    b = l(465006),
    y = l(845079),
    _ = l(617617),
    S = l(218461),
    C = l(513425),
    E = l(404373),
    I = l(260498),
    k = l(189714),
    L = l(722701),
    M = l(811587);
let w = [I.Ay, C.A, S.Ay, _.A, L.A];
var z = l(866665),
    T = l(22231),
    F = l(191850),
    G = l(792996),
    P = l(482062);
let U = P.w5,
    D = { in_progress: F.default["Y8pS+n"], draft: F.default.CSAaT0 };
function R(n) {
    let { status: e } = n;
    return (0, s.jsx)(z.m, {
        text: G.intl.string(D[e]),
        position: "top",
        ariaHidden: !0,
        children: (0, s.jsx)("span", {
            className: P.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === e
                    ? (0, s.jsx)(h.y, { type: h.t.SPINNING_CIRCLE_SIMPLE, className: P.u1, itemClassName: P.pu })
                    : (0, s.jsx)(T.PencilIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
        }),
    });
}
var B = l(731084),
    H = l(104317),
    W = l(886540),
    Y = l(162052),
    Z = l(790624);
function V(n) {
    let { projectId: e } = n,
        l = (0, t.bG)(
            [C.A],
            () => {
                let n = (0, W.Ji)(C.A.getMessages(e));
                return null == n
                    ? null
                    : ((0, H.w)(n.steps) ??
                          (0, B.Dy)({
                              activity: C.A.getThinkingActivity(e),
                              compacting: C.A.isCompacting(e),
                              saving: C.A.isSaving(e),
                          }));
            },
            [e],
        );
    return (0, s.jsx)(u.E, {
        variant: "body-xs/normal",
        color: "none",
        className: r()(Z.pG, Y.Hz),
        "aria-hidden": !0,
        children: l ?? G.intl.string(F.default["Y8pS+n"]),
    });
}
function X(n) {
    let { guild: e } = n;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(j.Ay, { guild: e, size: j.Ay.Sizes.SMOL, active: !0, className: Z.Wy, "aria-hidden": !0 }),
            (0, s.jsx)("span", { className: Z.p8, children: e.name }),
        ],
    });
}
function K(n) {
    let { project: e, time: l, showServer: i } = n,
        a = (0, A.vm)(e.owner_user_id),
        t = (0, f.tx)(a),
        d = (0, b.V)(e);
    return (0, s.jsxs)(u.E, {
        variant: "body-xs/normal",
        color: "none",
        className: r()(Z.pG, Z.sL, Z.kB),
        children: [
            l,
            null != a
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                          (0, s.jsx)(o.eu, {
                              src: a.getAvatarURL(e.guild_id, (0, c.FT)(c._3.SIZE_16)),
                              size: c._3.SIZE_16,
                              className: Z.Wy,
                              "aria-hidden": !0,
                          }),
                          (0, s.jsx)("span", { className: Z.p8, children: t }),
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
function O(n) {
    let { project: e, time: l, hideServer: i } = n,
        a = (0, b.V)(e),
        t = i && a?.kind === "guild" ? null : a,
        o = null == t && (0, b.ns)(e);
    return null != l || null != t || o
        ? (0, s.jsxs)(u.E, {
              variant: "body-xs/normal",
              color: "none",
              className: r()(Z.pG, Z.sL, Z.kB),
              children: [
                  l,
                  null != t
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                                "guild" === t.kind
                                    ? (0, s.jsx)(X, { guild: t.guild })
                                    : (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("span", {
                                                  className: Z.gk,
                                                  children: (0, s.jsx)(x.UserIcon, {
                                                      size: "xxs",
                                                      color: d.A.colors.TEXT_MUTED,
                                                      "aria-hidden": !0,
                                                  }),
                                              }),
                                              (0, s.jsx)("span", { className: Z.p8, children: t.label }),
                                          ],
                                      }),
                            ],
                        })
                      : o
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                                  (0, s.jsx)("span", { className: Z.p8, children: G.intl.string(F.default.poYQxw) }),
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
        {
            project: i,
            onSelect: a,
            selected: d = !1,
            renderActions: o,
            onContextMenu: c,
            showServer: x = !1,
            hideServer: j = !1,
        } = n,
        {
            status: f,
            unread: A,
            deleting: b,
        } = ((e = i.id),
        (l = (i.supported_surfaces?.length ?? 0) > 0),
        (0, t.cf)(
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
                    thinking: C.A.isThinking(e),
                    publishState: L.A.getPublishStatus(e)?.publishState ?? null,
                    everPublished: l,
                }),
                unread: (0, E.tz)(e) && !(0, k.j)(_.A.settings, e),
                deleting: I.Ay.isProjectDeleting(e),
            }),
            [e, l],
        )),
        S = !b && "in_progress" === f,
        z = !b && A,
        T = b || "published" === f ? null : f,
        P = [null != T ? G.intl.string(D[T]) : null, z ? G.intl.string(F.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        B = (function (n) {
            if (null == n.updated_at) return null;
            let e = Date.parse(n.updated_at);
            return Number.isNaN(e) ? null : e;
        })(i),
        H = (0, t.bG)([v.default], () => v.default.getCurrentUser()?.id),
        W = i.owner_user_id === H,
        X = null != B ? (0, g.Ay)({ since: B, getFormatter: g.i, includeWeeks: !0 }) : null,
        q = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("span", {
                    className: Z.Kk,
                    children: [
                        (0, s.jsx)(y.A, { project: i, size: "sidebar", className: null != T ? U : void 0 }),
                        null != T ? (0, s.jsx)(R, { status: T }) : null,
                    ],
                }),
                (0, s.jsxs)("span", {
                    className: Z.rf,
                    children: [
                        (0, s.jsx)(u.E, {
                            variant: "body-md/medium",
                            color: "none",
                            className: r()(Z.UU, { [Y.Hz]: S }),
                            children: i.name,
                        }),
                        b
                            ? (0, s.jsx)(u.E, {
                                  variant: "body-xs/normal",
                                  color: "none",
                                  className: r()(Z.pG, Z.sL),
                                  children: G.intl.string(F.default.Yh5pAc),
                              })
                            : S
                              ? (0, s.jsx)(V, { projectId: i.id })
                              : W
                                ? (0, s.jsx)(O, { project: i, time: X, hideServer: j })
                                : (0, s.jsx)(K, { project: i, time: X, showServer: x }),
                    ],
                }),
                "" !== P ? (0, s.jsx)(m.A, { children: P }) : null,
            ],
        });
    return null == a
        ? (0, s.jsxs)("li", {
              className: r()(Z.AS, { [Z.Cp]: b }),
              "aria-busy": b,
              children: [
                  z ? (0, s.jsx)("span", { className: Z.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsxs)("div", {
                      className: r()(Z.nM, Z.bl, { [Z.gy]: z }),
                      onContextMenu: null == c || b ? void 0 : (n) => c(n, i),
                      children: [q, null == o || b ? null : (0, s.jsx)("div", { className: Z.a7, children: o(i) })],
                  }),
              ],
          })
        : (0, s.jsxs)("li", {
              className: r()(Z.AS, { [Z.Cp]: b, [Z.vX]: null != o }),
              "aria-busy": b,
              children: [
                  z ? (0, s.jsx)("span", { className: Z.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsx)(p.D, {
                      className: r()(Z.nM, { [Z.wH]: d, [Z.gy]: z }),
                      "aria-current": d ? "page" : void 0,
                      tabIndex: b ? -1 : void 0,
                      onMouseDown: b
                          ? void 0
                          : (n) => {
                                0 === n.button && (0, N.tf)(i.id);
                            },
                      onClick: b ? void 0 : () => a(i),
                      onContextMenu: null == c || b ? void 0 : (n) => c(n, i),
                      children: q,
                  }),
                  null != o
                      ? (0, s.jsx)("div", {
                            className: r()(Z.XI, { [Z.Rn]: b }),
                            children: b ? (0, s.jsx)(h.y, { type: h.t.SPINNING_CIRCLE_SIMPLE }) : o(i),
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
        renderProjectActions: a,
        onProjectContextMenu: r,
        listRef: t,
        showServer: d = !1,
        hideServer: u = !1,
    } = n;
    return (0, s.jsx)("ul", {
        ref: t,
        className: J.p,
        children: e.map((n) =>
            (0, s.jsx)(
                q,
                {
                    project: n,
                    onSelect: l,
                    selected: n.id === i,
                    renderActions: a,
                    onContextMenu: r,
                    showServer: d,
                    hideServer: u,
                },
                n.id,
            ),
        ),
    });
}
