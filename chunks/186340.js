n.d(t, { A: () => Z });
var l = n(477900),
    a = n(582128),
    r = n(503698),
    i = n.n(r),
    s = n(17928),
    o = n(834730),
    u = n(97808),
    d = n(778712),
    c = n(140735),
    f = n(939249),
    m = n(289873),
    p = n(381849),
    x = n(287809),
    g = n(427262),
    h = n(503275),
    j = n(371169),
    v = n(465006),
    b = n(845079),
    k = n(617617),
    y = n(573163),
    _ = n(245179),
    A = n(404373),
    S = n(260498),
    w = n(189714),
    N = n(722701),
    C = n(811587);
let I = [S.Ay, _.A, y.Ay, k.A, N.A];
var E = n(866665),
    P = n(22231),
    T = n(661531),
    D = n(809526),
    M = n(105292),
    z = n(482062);
let K = z.w5,
    L = { in_progress: D.default["Y8pS+n"], draft: D.default.CSAaT0 };
function B(e) {
    let { status: t } = e;
    return (0, l.jsx)(E.m, {
        text: M.intl.string(L[t]),
        position: "top",
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: z.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === t
                    ? (0, l.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE, className: z.u1, itemClassName: z.pu })
                    : (0, l.jsx)(P.PencilIcon, { size: "xxs", color: T.A.colors.ICON_SUBTLE }),
        }),
    });
}
var G = n(731084),
    H = n(104317),
    F = n(886540),
    R = n(162052),
    W = n(790624);
function O(e) {
    let { projectId: t } = e,
        n = (0, s.bG)(
            [_.A],
            () => {
                let e = (0, F.Ji)(_.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, H.w)(e.steps) ??
                          (0, G.Dy)({
                              activity: _.A.getThinkingActivity(t),
                              compacting: _.A.isCompacting(t),
                              saving: _.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(o.E, {
        variant: "text-xs/normal",
        color: "none",
        className: i()(W.pG, R.Hz),
        "aria-hidden": !0,
        children: n ?? M.intl.string(D.default["Y8pS+n"]),
    });
}
function $(e) {
    let { project: t, time: n } = e,
        a = (0, h.vm)(t.owner_user_id),
        r = (0, g.tx)(a);
    return (0, l.jsxs)(o.E, {
        variant: "text-xs/normal",
        color: "none",
        className: i()(W.pG, W.sL, W.xL),
        children: [
            n,
            null != a
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          null != n ? (0, l.jsx)("span", { "aria-hidden": !0, children: "\xb7" }) : null,
                          (0, l.jsx)(u.eu, {
                              src: a.getAvatarURL(t.guild_id, (0, d.FT)(d._3.SIZE_16)),
                              size: d._3.SIZE_16,
                              className: W.OZ,
                              "aria-hidden": !0,
                          }),
                          (0, l.jsx)("span", { className: W.Sq, children: r }),
                      ],
                  })
                : null,
        ],
    });
}
let X = a.memo(function (e) {
    let t,
        n,
        { project: a, onSelect: r, selected: u = !1, renderActions: d, onContextMenu: g } = e,
        {
            status: h,
            unread: y,
            deleting: E,
        } = ((t = a.id),
        (n = (a.supported_surfaces?.length ?? 0) > 0),
        (0, s.cf)(
            I,
            () => ({
                status: (function (e) {
                    let { thinking: t, publishState: n, everPublished: l } = e;
                    return t
                        ? "in_progress"
                        : null != n && ("nothing_built" === n || "not_live" === n || "live_outdated" === n)
                          ? "draft"
                          : (null != n && (0, C.lE)(n)) || l
                            ? "published"
                            : "draft";
                })({
                    thinking: _.A.isThinking(t),
                    publishState: N.A.getPublishStatus(t)?.publishState ?? null,
                    everPublished: n,
                }),
                unread: (0, A.tz)(t) && !(0, w.j)(k.A.settings, t),
                deleting: S.Ay.isProjectDeleting(t),
            }),
            [t, n],
        )),
        P = !E && "in_progress" === h,
        T = !E && y,
        z = E || "published" === h ? null : h,
        G = [null != z ? M.intl.string(L[z]) : null, T ? M.intl.string(D.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        H = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(a),
        F = (0, s.bG)([x.default], () => x.default.getCurrentUser()?.id),
        X = a.owner_user_id === F,
        q = (0, v.A)(X ? a : null),
        Z = null != H ? (0, p.Ay)({ since: H, getFormatter: p.i, includeWeeks: !0 }) : null,
        U = [Z, q].filter((e) => null != e).join(" \xb7 "),
        J = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("span", {
                    className: W.Kk,
                    children: [
                        (0, l.jsx)(b.A, { project: a, size: "sidebar", className: null != z ? K : void 0 }),
                        null != z ? (0, l.jsx)(B, { status: z }) : null,
                    ],
                }),
                (0, l.jsxs)("span", {
                    className: W.rf,
                    children: [
                        (0, l.jsx)(o.E, {
                            variant: "text-md/medium",
                            color: "none",
                            className: i()(W.UU, { [R.Hz]: P }),
                            children: a.name,
                        }),
                        E
                            ? (0, l.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "none",
                                  className: i()(W.pG, W.sL),
                                  children: M.intl.string(D.default.Yh5pAc),
                              })
                            : P
                              ? (0, l.jsx)(O, { projectId: a.id })
                              : X
                                ? "" !== U
                                    ? (0, l.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "none",
                                          className: i()(W.pG, W.sL),
                                          children: U,
                                      })
                                    : null
                                : (0, l.jsx)($, { project: a, time: Z }),
                    ],
                }),
                "" !== G ? (0, l.jsx)(c.A, { children: G }) : null,
            ],
        });
    return null == r
        ? (0, l.jsxs)("li", {
              className: i()(W.AS, { [W.Cp]: E }),
              "aria-busy": E,
              children: [
                  T ? (0, l.jsx)("span", { className: W.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsxs)("div", {
                      className: i()(W.nM, W.bl, { [W.gy]: T }),
                      onContextMenu: null == g || E ? void 0 : (e) => g(e, a),
                      children: [J, null == d || E ? null : (0, l.jsx)("div", { className: W.a7, children: d(a) })],
                  }),
              ],
          })
        : (0, l.jsxs)("li", {
              className: i()(W.AS, { [W.Cp]: E, [W.vX]: null != d }),
              "aria-busy": E,
              children: [
                  T ? (0, l.jsx)("span", { className: W.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsx)(f.D, {
                      className: i()(W.nM, { [W.wH]: u, [W.gy]: T }),
                      "aria-current": u ? "page" : void 0,
                      tabIndex: E ? -1 : void 0,
                      onMouseDown: E
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, j.tf)(a.id);
                            },
                      onClick: E ? void 0 : () => r(a),
                      onContextMenu: null == g || E ? void 0 : (e) => g(e, a),
                      children: J,
                  }),
                  null != d
                      ? (0, l.jsx)("div", {
                            className: i()(W.XI, { [W.Rn]: E }),
                            children: E ? (0, l.jsx)(m.y, { type: m.t.SPINNING_CIRCLE_SIMPLE }) : d(a),
                        })
                      : null,
              ],
          });
});
var q = n(831727);
function Z(e) {
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
        className: q.p,
        children: t.map((e) =>
            (0, l.jsx)(X, { project: e, onSelect: n, selected: e.id === a, renderActions: r, onContextMenu: i }, e.id),
        ),
    });
}
