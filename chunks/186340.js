n.d(t, { A: () => J });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(17928),
    o = n(661531),
    u = n(834730),
    d = n(97808),
    c = n(778712),
    f = n(950305),
    m = n(140735),
    p = n(939249),
    x = n(289873),
    g = n(548118),
    h = n(381849),
    j = n(287809),
    v = n(427262),
    b = n(503275),
    k = n(371169),
    y = n(465006),
    _ = n(845079),
    A = n(617617),
    S = n(573163),
    N = n(245179),
    w = n(404373),
    C = n(260498),
    I = n(189714),
    E = n(722701),
    P = n(811587);
let T = [C.Ay, N.A, S.Ay, A.A, E.A];
var D = n(866665),
    M = n(22231),
    z = n(809526),
    B = n(105292),
    K = n(482062);
let L = K.w5,
    G = { in_progress: z.default["Y8pS+n"], draft: z.default.CSAaT0 };
function W(e) {
    let { status: t } = e;
    return (0, l.jsx)(D.m, {
        text: B.intl.string(G[t]),
        position: "top",
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: K.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === t
                    ? (0, l.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE, className: K.u1, itemClassName: K.pu })
                    : (0, l.jsx)(M.PencilIcon, { size: "xxs", color: o.A.colors.ICON_SUBTLE }),
        }),
    });
}
var F = n(731084),
    H = n(104317),
    R = n(886540),
    O = n(162052),
    $ = n(790624);
function X(e) {
    let { projectId: t } = e,
        n = (0, s.bG)(
            [N.A],
            () => {
                let e = (0, R.Ji)(N.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, H.w)(e.steps) ??
                          (0, F.Dy)({
                              activity: N.A.getThinkingActivity(t),
                              compacting: N.A.isCompacting(t),
                              saving: N.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(u.E, {
        variant: "text-xs/normal",
        color: "none",
        className: i()($.pG, O.Hz),
        "aria-hidden": !0,
        children: n ?? B.intl.string(z.default["Y8pS+n"]),
    });
}
function q(e) {
    let { project: t, time: n } = e,
        a = (0, b.vm)(t.owner_user_id),
        r = (0, v.tx)(a);
    return (0, l.jsxs)(u.E, {
        variant: "text-xs/normal",
        color: "none",
        className: i()($.pG, $.sL, $.kB),
        children: [
            n,
            null != a
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          null != n ? (0, l.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                          (0, l.jsx)(d.eu, {
                              src: a.getAvatarURL(t.guild_id, (0, c.FT)(c._3.SIZE_16)),
                              size: c._3.SIZE_16,
                              className: $.Wy,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsx)("span", { className: $.p8, children: r }),
                      ],
                  })
                : null,
        ],
    });
}
function U(e) {
    let { project: t, time: n } = e,
        a = (0, y.V)(t);
    return null == n && null == a
        ? null
        : (0, l.jsxs)(u.E, {
              variant: "text-xs/normal",
              color: "none",
              className: i()($.pG, $.sL, $.kB),
              children: [
                  n,
                  null != a
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                null != n ? (0, l.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                                "guild" === a.kind
                                    ? (0, l.jsx)(g.Ay, {
                                          guild: a.guild,
                                          size: g.Ay.Sizes.SMOL,
                                          active: !0,
                                          className: $.Wy,
                                          "aria-hidden": !0,
                                      })
                                    : (0, l.jsx)("span", {
                                          className: $.gk,
                                          children: (0, l.jsx)(f.UserIcon, {
                                              size: "xxs",
                                              color: o.A.colors.TEXT_MUTED,
                                              "aria-hidden": !0,
                                          }),
                                      }),
                                (0, l.jsx)("span", { className: $.p8, children: a.label }),
                            ],
                        })
                      : null,
              ],
          });
}
let Z = a.memo(function (e) {
    let t,
        n,
        { project: a, onSelect: r, selected: o = !1, renderActions: d, onContextMenu: c } = e,
        {
            status: f,
            unread: g,
            deleting: v,
        } = ((t = a.id),
        (n = (a.supported_surfaces?.length ?? 0) > 0),
        (0, s.cf)(
            T,
            () => ({
                status: (function (e) {
                    let { thinking: t, publishState: n, everPublished: l } = e;
                    return t
                        ? "in_progress"
                        : null != n && ("nothing_built" === n || "not_live" === n || "live_outdated" === n)
                          ? "draft"
                          : (null != n && (0, P.lE)(n)) || l
                            ? "published"
                            : "draft";
                })({
                    thinking: N.A.isThinking(t),
                    publishState: E.A.getPublishStatus(t)?.publishState ?? null,
                    everPublished: n,
                }),
                unread: (0, w.tz)(t) && !(0, I.j)(A.A.settings, t),
                deleting: C.Ay.isProjectDeleting(t),
            }),
            [t, n],
        )),
        b = !v && "in_progress" === f,
        y = !v && g,
        S = v || "published" === f ? null : f,
        D = [null != S ? B.intl.string(G[S]) : null, y ? B.intl.string(z.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        M = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(a),
        K = (0, s.bG)([j.default], () => j.default.getCurrentUser()?.id),
        F = a.owner_user_id === K,
        H = null != M ? (0, h.Ay)({ since: M, getFormatter: h.i, includeWeeks: !0 }) : null,
        R = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("span", {
                    className: $.Kk,
                    children: [
                        (0, l.jsx)(_.A, { project: a, size: "sidebar", className: null != S ? L : void 0 }),
                        null != S ? (0, l.jsx)(W, { status: S }) : null,
                    ],
                }),
                (0, l.jsxs)("span", {
                    className: $.rf,
                    children: [
                        (0, l.jsx)(u.E, {
                            variant: "text-md/medium",
                            color: "none",
                            className: i()($.UU, { [O.Hz]: b }),
                            children: a.name,
                        }),
                        v
                            ? (0, l.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "none",
                                  className: i()($.pG, $.sL),
                                  children: B.intl.string(z.default.Yh5pAc),
                              })
                            : b
                              ? (0, l.jsx)(X, { projectId: a.id })
                              : F
                                ? (0, l.jsx)(U, { project: a, time: H })
                                : (0, l.jsx)(q, { project: a, time: H }),
                    ],
                }),
                "" !== D ? (0, l.jsx)(m.A, { children: D }) : null,
            ],
        });
    return null == r
        ? (0, l.jsxs)("li", {
              className: i()($.AS, { [$.Cp]: v }),
              "aria-busy": v,
              children: [
                  y ? (0, l.jsx)("span", { className: $.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsxs)("div", {
                      className: i()($.nM, $.bl, { [$.gy]: y }),
                      onContextMenu: null == c || v ? void 0 : (e) => c(e, a),
                      children: [R, null == d || v ? null : (0, l.jsx)("div", { className: $.a7, children: d(a) })],
                  }),
              ],
          })
        : (0, l.jsxs)("li", {
              className: i()($.AS, { [$.Cp]: v, [$.vX]: null != d }),
              "aria-busy": v,
              children: [
                  y ? (0, l.jsx)("span", { className: $.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsx)(p.D, {
                      className: i()($.nM, { [$.wH]: o, [$.gy]: y }),
                      "aria-current": o ? "page" : void 0,
                      tabIndex: v ? -1 : void 0,
                      onMouseDown: v
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, k.tf)(a.id);
                            },
                      onClick: v ? void 0 : () => r(a),
                      onContextMenu: null == c || v ? void 0 : (e) => c(e, a),
                      children: R,
                  }),
                  null != d
                      ? (0, l.jsx)("div", {
                            className: i()($.XI, { [$.Rn]: v }),
                            children: v ? (0, l.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE }) : d(a),
                        })
                      : null,
              ],
          });
});
var V = n(831727);
function J(e) {
    let {
        projects: t,
        onSelect: n,
        selectedProjectId: a = null,
        renderProjectActions: r,
        onProjectContextMenu: i,
        listRef: s,
    } = e;
    return (0, l.jsx)("ul", {
        ref: s,
        className: V.p,
        children: t.map((e) =>
            (0, l.jsx)(Z, { project: e, onSelect: n, selected: e.id === a, renderActions: r, onContextMenu: i }, e.id),
        ),
    });
}
