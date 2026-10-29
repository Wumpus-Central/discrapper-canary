n.d(t, { A: () => R });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(834730),
    o = n(140735),
    u = n(939249),
    d = n(289873),
    c = n(995273),
    f = n(371169),
    m = n(497183),
    p = n(17928),
    g = n(617617),
    h = n(573163),
    x = n(245179),
    j = n(404373),
    v = n(260498),
    b = n(189714),
    k = n(722701),
    y = n(811587);
let _ = [v.Ay, x.A, h.Ay, g.A, k.A];
var A = n(866665),
    S = n(22231),
    w = n(661531),
    N = n(248675),
    C = n(105292),
    I = n(482062);
let E = I.w5,
    P = { in_progress: N.default["Y8pS+n"], draft: N.default.CSAaT0 };
function T(e) {
    let { status: t } = e;
    return (0, l.jsx)(A.m, {
        text: C.intl.string(P[t]),
        position: "top",
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: I.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === t
                    ? (0, l.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE, className: I.u1, itemClassName: I.pu })
                    : (0, l.jsx)(S.PencilIcon, { size: "xxs", color: w.A.colors.ICON_SUBTLE }),
        }),
    });
}
var D = n(731084),
    M = n(104317),
    z = n(886540),
    B = n(162052),
    K = n(790624);
function L(e) {
    let { projectId: t } = e,
        n = (0, p.bG)(
            [x.A],
            () => {
                let e = (0, z.Ji)(x.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, M.w)(e.steps) ??
                          (0, D.Dy)({
                              activity: x.A.getThinkingActivity(t),
                              compacting: x.A.isCompacting(t),
                              saving: x.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(s.E, {
        variant: "text-xs/normal",
        color: "none",
        className: r()(K.pG, B.Hz),
        "aria-hidden": !0,
        children: n ?? C.intl.string(N.default["Y8pS+n"]),
    });
}
let G = a.memo(function (e) {
    let t,
        n,
        { project: a, onSelect: i, selected: h = !1, renderActions: A, onContextMenu: S } = e,
        {
            status: w,
            unread: I,
            deleting: D,
        } = ((t = a.id),
        (n = (a.supported_surfaces?.length ?? 0) > 0),
        (0, p.cf)(
            _,
            () => ({
                status: (function (e) {
                    let { thinking: t, publishState: n, everPublished: l } = e;
                    return t
                        ? "in_progress"
                        : null != n && ("nothing_built" === n || "not_live" === n || "live_outdated" === n)
                          ? "draft"
                          : (null != n && (0, y.lE)(n)) || l
                            ? "published"
                            : "draft";
                })({
                    thinking: x.A.isThinking(t),
                    publishState: k.A.getPublishStatus(t)?.publishState ?? null,
                    everPublished: n,
                }),
                unread: (0, j.tz)(t) && !(0, b.j)(g.A.settings, t),
                deleting: v.Ay.isProjectDeleting(t),
            }),
            [t, n],
        )),
        M = !D && "in_progress" === w,
        z = !D && I,
        G = D || "published" === w ? null : w,
        H = [null != G ? C.intl.string(P[G]) : null, z ? C.intl.string(N.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        R = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(a),
        W = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("span", {
                    className: K.Kk,
                    children: [
                        (0, l.jsx)(m.A, { project: a, size: "sidebar", className: null != G ? E : void 0 }),
                        null != G ? (0, l.jsx)(T, { status: G }) : null,
                    ],
                }),
                (0, l.jsxs)("span", {
                    className: K.rf,
                    children: [
                        (0, l.jsx)(s.E, {
                            variant: "text-md/medium",
                            color: "none",
                            className: r()(K.UU, { [B.Hz]: M }),
                            children: a.name,
                        }),
                        D
                            ? (0, l.jsx)(s.E, {
                                  variant: "text-xs/normal",
                                  color: "none",
                                  className: r()(K.pG, K.sL),
                                  children: C.intl.string(N.default.Yh5pAc),
                              })
                            : M
                              ? (0, l.jsx)(L, { projectId: a.id })
                              : null != R
                                ? (0, l.jsx)(s.E, {
                                      variant: "text-xs/normal",
                                      color: "none",
                                      className: r()(K.pG, K.sL),
                                      children: (0, c.jb)(R, !1),
                                  })
                                : null,
                    ],
                }),
                "" !== H ? (0, l.jsx)(o.A, { children: H }) : null,
            ],
        });
    return null == i
        ? (0, l.jsxs)("li", {
              className: r()(K.AS, { [K.Cp]: D }),
              "aria-busy": D,
              children: [
                  z ? (0, l.jsx)("span", { className: K.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsxs)("div", {
                      className: r()(K.nM, K.bl, { [K.gy]: z }),
                      onContextMenu: null == S || D ? void 0 : (e) => S(e, a),
                      children: [W, null == A || D ? null : (0, l.jsx)("div", { className: K.a7, children: A(a) })],
                  }),
              ],
          })
        : (0, l.jsxs)("li", {
              className: r()(K.AS, { [K.Cp]: D, [K.vX]: null != A }),
              "aria-busy": D,
              children: [
                  z ? (0, l.jsx)("span", { className: K.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsx)(u.D, {
                      className: r()(K.nM, { [K.wH]: h, [K.gy]: z }),
                      "aria-current": h ? "page" : void 0,
                      tabIndex: D ? -1 : void 0,
                      onMouseDown: D
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, f.tf)(a.id);
                            },
                      onClick: D ? void 0 : () => i(a),
                      onContextMenu: null == S || D ? void 0 : (e) => S(e, a),
                      children: W,
                  }),
                  null != A
                      ? (0, l.jsx)("div", {
                            className: r()(K.XI, { [K.Rn]: D }),
                            children: D ? (0, l.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE }) : A(a),
                        })
                      : null,
              ],
          });
});
var H = n(831727);
function R(e) {
    let { projects: t, onSelect: n, selectedProjectId: a = null, renderProjectActions: i, onProjectContextMenu: r } = e;
    return (0, l.jsx)("ul", {
        className: H.p,
        children: t.map((e) =>
            (0, l.jsx)(G, { project: e, onSelect: n, selected: e.id === a, renderActions: i, onContextMenu: r }, e.id),
        ),
    });
}
