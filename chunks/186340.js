l.d(e, { A: () => Q });
var s = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    t = l(17928),
    d = l(661531),
    u = l(834730),
    o = l(97808),
    c = l(778712),
    x = l(950305),
    p = l(140735),
    m = l(939249),
    j = l(289873),
    h = l(548118),
    g = l(381849),
    v = l(287809),
    f = l(427262),
    A = l(503275),
    N = l(371169),
    b = l(465006),
    y = l(845079),
    _ = l(617617),
    S = l(573163),
    C = l(805942),
    E = l(404373),
    I = l(260498),
    k = l(189714),
    z = l(722701),
    M = l(811587);
let L = [I.Ay, C.A, S.Ay, _.A, z.A];
var w = l(866665),
    T = l(22231),
    F = l(809526),
    D = l(105292),
    G = l(482062);
let P = G.w5,
    U = { in_progress: F.default["Y8pS+n"], draft: F.default.CSAaT0 };
function R(n) {
    let { status: e } = n;
    return (0, s.jsx)(w.m, {
        text: D.intl.string(U[e]),
        position: "top",
        ariaHidden: !0,
        children: (0, s.jsx)("span", {
            className: G.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === e
                    ? (0, s.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE, className: G.u1, itemClassName: G.pu })
                    : (0, s.jsx)(T.PencilIcon, { size: "xxs", color: d.A.colors.ICON_SUBTLE }),
        }),
    });
}
var B = l(731084),
    H = l(104317),
    Y = l(886540),
    V = l(162052),
    W = l(790624);
function X(n) {
    let { projectId: e } = n,
        l = (0, t.bG)(
            [C.A],
            () => {
                let n = (0, Y.Ji)(C.A.getMessages(e));
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
        className: r()(W.pG, V.Hz),
        "aria-hidden": !0,
        children: l ?? D.intl.string(F.default["Y8pS+n"]),
    });
}
function Z(n) {
    let { guild: e } = n;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(h.Ay, { guild: e, size: h.Ay.Sizes.SMOL, active: !0, className: W.Wy, "aria-hidden": !0 }),
            (0, s.jsx)("span", { className: W.p8, children: e.name }),
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
        className: r()(W.pG, W.sL, W.kB),
        children: [
            l,
            null != a
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                          (0, s.jsx)(o.eu, {
                              src: a.getAvatarURL(e.guild_id, (0, c.FT)(c._3.SIZE_16)),
                              size: c._3.SIZE_16,
                              className: W.Wy,
                              "aria-hidden": !0,
                          }),
                          (0, s.jsx)("span", { className: W.p8, children: t }),
                      ],
                  })
                : null,
            i && d?.kind === "guild"
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }),
                          (0, s.jsx)(Z, { guild: d.guild }),
                      ],
                  })
                : null,
        ],
    });
}
function O(n) {
    let { project: e, time: l } = n,
        i = (0, b.V)(e),
        a = null == i && (0, b.ns)(e);
    return null != l || null != i || a
        ? (0, s.jsxs)(u.E, {
              variant: "body-xs/normal",
              color: "none",
              className: r()(W.pG, W.sL, W.kB),
              children: [
                  l,
                  null != i
                      ? (0, s.jsxs)(s.Fragment, {
                            children: [
                                null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                                "guild" === i.kind
                                    ? (0, s.jsx)(Z, { guild: i.guild })
                                    : (0, s.jsxs)(s.Fragment, {
                                          children: [
                                              (0, s.jsx)("span", {
                                                  className: W.gk,
                                                  children: (0, s.jsx)(x.UserIcon, {
                                                      size: "xxs",
                                                      color: d.A.colors.TEXT_MUTED,
                                                      "aria-hidden": !0,
                                                  }),
                                              }),
                                              (0, s.jsx)("span", { className: W.p8, children: i.label }),
                                          ],
                                      }),
                            ],
                        })
                      : a
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  null != l ? (0, s.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                                  (0, s.jsx)("span", { className: W.p8, children: D.intl.string(F.default.poYQxw) }),
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
        { project: i, onSelect: a, selected: d = !1, renderActions: o, onContextMenu: c, showServer: x = !1 } = n,
        {
            status: h,
            unread: f,
            deleting: A,
        } = ((e = i.id),
        (l = (i.supported_surfaces?.length ?? 0) > 0),
        (0, t.cf)(
            L,
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
                    publishState: z.A.getPublishStatus(e)?.publishState ?? null,
                    everPublished: l,
                }),
                unread: (0, E.tz)(e) && !(0, k.j)(_.A.settings, e),
                deleting: I.Ay.isProjectDeleting(e),
            }),
            [e, l],
        )),
        b = !A && "in_progress" === h,
        S = !A && f,
        w = A || "published" === h ? null : h,
        T = [null != w ? D.intl.string(U[w]) : null, S ? D.intl.string(F.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        G = (function (n) {
            if (null == n.updated_at) return null;
            let e = Date.parse(n.updated_at);
            return Number.isNaN(e) ? null : e;
        })(i),
        B = (0, t.bG)([v.default], () => v.default.getCurrentUser()?.id),
        H = i.owner_user_id === B,
        Y = null != G ? (0, g.Ay)({ since: G, getFormatter: g.i, includeWeeks: !0 }) : null,
        Z = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("span", {
                    className: W.Kk,
                    children: [
                        (0, s.jsx)(y.A, { project: i, size: "sidebar", className: null != w ? P : void 0 }),
                        null != w ? (0, s.jsx)(R, { status: w }) : null,
                    ],
                }),
                (0, s.jsxs)("span", {
                    className: W.rf,
                    children: [
                        (0, s.jsx)(u.E, {
                            variant: "body-md/medium",
                            color: "none",
                            className: r()(W.UU, { [V.Hz]: b }),
                            children: i.name,
                        }),
                        A
                            ? (0, s.jsx)(u.E, {
                                  variant: "body-xs/normal",
                                  color: "none",
                                  className: r()(W.pG, W.sL),
                                  children: D.intl.string(F.default.Yh5pAc),
                              })
                            : b
                              ? (0, s.jsx)(X, { projectId: i.id })
                              : H
                                ? (0, s.jsx)(O, { project: i, time: Y })
                                : (0, s.jsx)(K, { project: i, time: Y, showServer: x }),
                    ],
                }),
                "" !== T ? (0, s.jsx)(p.A, { children: T }) : null,
            ],
        });
    return null == a
        ? (0, s.jsxs)("li", {
              className: r()(W.AS, { [W.Cp]: A }),
              "aria-busy": A,
              children: [
                  S ? (0, s.jsx)("span", { className: W.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsxs)("div", {
                      className: r()(W.nM, W.bl, { [W.gy]: S }),
                      onContextMenu: null == c || A ? void 0 : (n) => c(n, i),
                      children: [Z, null == o || A ? null : (0, s.jsx)("div", { className: W.a7, children: o(i) })],
                  }),
              ],
          })
        : (0, s.jsxs)("li", {
              className: r()(W.AS, { [W.Cp]: A, [W.vX]: null != o }),
              "aria-busy": A,
              children: [
                  S ? (0, s.jsx)("span", { className: W.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsx)(m.D, {
                      className: r()(W.nM, { [W.wH]: d, [W.gy]: S }),
                      "aria-current": d ? "page" : void 0,
                      tabIndex: A ? -1 : void 0,
                      onMouseDown: A
                          ? void 0
                          : (n) => {
                                0 === n.button && (0, N.tf)(i.id);
                            },
                      onClick: A ? void 0 : () => a(i),
                      onContextMenu: null == c || A ? void 0 : (n) => c(n, i),
                      children: Z,
                  }),
                  null != o
                      ? (0, s.jsx)("div", {
                            className: r()(W.XI, { [W.Rn]: A }),
                            children: A ? (0, s.jsx)(j.y, { type: j.t.SPINNING_CIRCLE_SIMPLE }) : o(i),
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
    } = n;
    return (0, s.jsx)("ul", {
        ref: t,
        className: J.p,
        children: e.map((n) =>
            (0, s.jsx)(
                q,
                { project: n, onSelect: l, selected: n.id === i, renderActions: a, onContextMenu: r, showServer: d },
                n.id,
            ),
        ),
    });
}
