n.d(t, { A: () => Q });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(17928),
    u = n(661531),
    o = n(834730),
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
    F = { in_progress: z.default["Y8pS+n"], draft: z.default.CSAaT0 };
function G(e) {
    let { status: t } = e;
    return (0, l.jsx)(D.m, {
        text: B.intl.string(F[t]),
        position: "top",
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: K.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === t
                    ? (0, l.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE, className: K.u1, itemClassName: K.pu })
                    : (0, l.jsx)(M.PencilIcon, { size: "xxs", color: u.A.colors.ICON_SUBTLE }),
        }),
    });
}
var W = n(731084),
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
                          (0, W.Dy)({
                              activity: N.A.getThinkingActivity(t),
                              compacting: N.A.isCompacting(t),
                              saving: N.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(o.E, {
        variant: "text-xs/normal",
        color: "none",
        className: i()($.pG, O.Hz),
        "aria-hidden": !0,
        children: n ?? B.intl.string(z.default["Y8pS+n"]),
    });
}
function q(e) {
    let { guild: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(g.Ay, { guild: t, size: g.Ay.Sizes.SMOL, active: !0, className: $.Wy, "aria-hidden": !0 }),
            (0, l.jsx)("span", { className: $.p8, children: t.name }),
        ],
    });
}
function U(e) {
    let { project: t, time: n, showServer: a } = e,
        r = (0, b.vm)(t.owner_user_id),
        s = (0, v.tx)(r),
        u = (0, y.V)(t);
    return (0, l.jsxs)(o.E, {
        variant: "text-xs/normal",
        color: "none",
        className: i()($.pG, $.sL, $.kB),
        children: [
            n,
            null != r
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          null != n ? (0, l.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                          (0, l.jsx)(d.eu, {
                              src: r.getAvatarURL(t.guild_id, (0, c.FT)(c._3.SIZE_16)),
                              size: c._3.SIZE_16,
                              className: $.Wy,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsx)("span", { className: $.p8, children: s }),
                      ],
                  })
                : null,
            a && u?.kind === "guild"
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)("span", { "aria-hidden": !0, children: "\xb7" }),
                          (0, l.jsx)(q, { guild: u.guild }),
                      ],
                  })
                : null,
        ],
    });
}
function V(e) {
    let { project: t, time: n } = e,
        a = (0, y.V)(t),
        r = null == a && (0, y.ns)(t);
    return null != n || null != a || r
        ? (0, l.jsxs)(o.E, {
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
                                    ? (0, l.jsx)(q, { guild: a.guild })
                                    : (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)("span", {
                                                  className: $.gk,
                                                  children: (0, l.jsx)(f.UserIcon, {
                                                      size: "xxs",
                                                      color: u.A.colors.TEXT_MUTED,
                                                      "aria-hidden": !0,
                                                  }),
                                              }),
                                              (0, l.jsx)("span", { className: $.p8, children: a.label }),
                                          ],
                                      }),
                            ],
                        })
                      : r
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  null != n ? (0, l.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                                  (0, l.jsx)("span", { className: $.p8, children: B.intl.string(z.default.poYQxw) }),
                              ],
                          })
                        : null,
              ],
          })
        : null;
}
let Z = a.memo(function (e) {
    let t,
        n,
        { project: a, onSelect: r, selected: u = !1, renderActions: d, onContextMenu: c, showServer: f = !1 } = e,
        {
            status: g,
            unread: v,
            deleting: b,
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
        y = !b && "in_progress" === g,
        S = !b && v,
        D = b || "published" === g ? null : g,
        M = [null != D ? B.intl.string(F[D]) : null, S ? B.intl.string(z.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        K = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(a),
        W = (0, s.bG)([j.default], () => j.default.getCurrentUser()?.id),
        H = a.owner_user_id === W,
        R = null != K ? (0, h.Ay)({ since: K, getFormatter: h.i, includeWeeks: !0 }) : null,
        q = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("span", {
                    className: $.Kk,
                    children: [
                        (0, l.jsx)(_.A, { project: a, size: "sidebar", className: null != D ? L : void 0 }),
                        null != D ? (0, l.jsx)(G, { status: D }) : null,
                    ],
                }),
                (0, l.jsxs)("span", {
                    className: $.rf,
                    children: [
                        (0, l.jsx)(o.E, {
                            variant: "text-md/medium",
                            color: "none",
                            className: i()($.UU, { [O.Hz]: y }),
                            children: a.name,
                        }),
                        b
                            ? (0, l.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "none",
                                  className: i()($.pG, $.sL),
                                  children: B.intl.string(z.default.Yh5pAc),
                              })
                            : y
                              ? (0, l.jsx)(X, { projectId: a.id })
                              : H
                                ? (0, l.jsx)(V, { project: a, time: R })
                                : (0, l.jsx)(U, { project: a, time: R, showServer: f }),
                    ],
                }),
                "" !== M ? (0, l.jsx)(m.A, { children: M }) : null,
            ],
        });
    return null == r
        ? (0, l.jsxs)("li", {
              className: i()($.AS, { [$.Cp]: b }),
              "aria-busy": b,
              children: [
                  S ? (0, l.jsx)("span", { className: $.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsxs)("div", {
                      className: i()($.nM, $.bl, { [$.gy]: S }),
                      onContextMenu: null == c || b ? void 0 : (e) => c(e, a),
                      children: [q, null == d || b ? null : (0, l.jsx)("div", { className: $.a7, children: d(a) })],
                  }),
              ],
          })
        : (0, l.jsxs)("li", {
              className: i()($.AS, { [$.Cp]: b, [$.vX]: null != d }),
              "aria-busy": b,
              children: [
                  S ? (0, l.jsx)("span", { className: $.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsx)(p.D, {
                      className: i()($.nM, { [$.wH]: u, [$.gy]: S }),
                      "aria-current": u ? "page" : void 0,
                      tabIndex: b ? -1 : void 0,
                      onMouseDown: b
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, k.tf)(a.id);
                            },
                      onClick: b ? void 0 : () => r(a),
                      onContextMenu: null == c || b ? void 0 : (e) => c(e, a),
                      children: q,
                  }),
                  null != d
                      ? (0, l.jsx)("div", {
                            className: i()($.XI, { [$.Rn]: b }),
                            children: b ? (0, l.jsx)(x.y, { type: x.t.SPINNING_CIRCLE_SIMPLE }) : d(a),
                        })
                      : null,
              ],
          });
});
var J = n(831727);
function Q(e) {
    let {
        projects: t,
        onSelect: n,
        selectedProjectId: a = null,
        renderProjectActions: r,
        onProjectContextMenu: i,
        listRef: s,
        showServer: u = !1,
    } = e;
    return (0, l.jsx)("ul", {
        ref: s,
        className: J.p,
        children: t.map((e) =>
            (0, l.jsx)(
                Z,
                { project: e, onSelect: n, selected: e.id === a, renderActions: r, onContextMenu: i, showServer: u },
                e.id,
            ),
        ),
    });
}
