n.d(t, { A: () => W });
var l = n(477900),
    a = n(582128),
    i = n(503698),
    r = n.n(i),
    s = n(834730),
    o = n(140735),
    u = n(939249),
    d = n(289873),
    c = n(381849),
    f = n(371169),
    m = n(465006),
    p = n(719564),
    g = n(17928),
    h = n(617617),
    x = n(573163),
    j = n(245179),
    v = n(404373),
    b = n(260498),
    k = n(189714),
    y = n(722701),
    _ = n(811587);
let A = [b.Ay, j.A, x.Ay, h.A, y.A];
var S = n(866665),
    w = n(22231),
    N = n(661531),
    C = n(87501),
    I = n(105292),
    E = n(482062);
let P = E.w5,
    T = { in_progress: C.default["Y8pS+n"], draft: C.default.CSAaT0 };
function D(e) {
    let { status: t } = e;
    return (0, l.jsx)(S.m, {
        text: I.intl.string(T[t]),
        position: "top",
        ariaHidden: !0,
        children: (0, l.jsx)("span", {
            className: E.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === t
                    ? (0, l.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE, className: E.u1, itemClassName: E.pu })
                    : (0, l.jsx)(w.PencilIcon, { size: "xxs", color: N.A.colors.ICON_SUBTLE }),
        }),
    });
}
var M = n(731084),
    K = n(104317),
    z = n(886540),
    B = n(162052),
    L = n(790624);
function G(e) {
    let { projectId: t } = e,
        n = (0, g.bG)(
            [j.A],
            () => {
                let e = (0, z.Ji)(j.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, K.w)(e.steps) ??
                          (0, M.Dy)({
                              activity: j.A.getThinkingActivity(t),
                              compacting: j.A.isCompacting(t),
                              saving: j.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(s.E, {
        variant: "text-xs/normal",
        color: "none",
        className: r()(L.pG, B.Hz),
        "aria-hidden": !0,
        children: n ?? I.intl.string(C.default["Y8pS+n"]),
    });
}
let H = a.memo(function (e) {
    let t,
        n,
        { project: a, onSelect: i, selected: x = !1, renderActions: S, onContextMenu: w } = e,
        {
            status: N,
            unread: E,
            deleting: M,
        } = ((t = a.id),
        (n = (a.supported_surfaces?.length ?? 0) > 0),
        (0, g.cf)(
            A,
            () => ({
                status: (function (e) {
                    let { thinking: t, publishState: n, everPublished: l } = e;
                    return t
                        ? "in_progress"
                        : null != n && ("nothing_built" === n || "not_live" === n || "live_outdated" === n)
                          ? "draft"
                          : (null != n && (0, _.lE)(n)) || l
                            ? "published"
                            : "draft";
                })({
                    thinking: j.A.isThinking(t),
                    publishState: y.A.getPublishStatus(t)?.publishState ?? null,
                    everPublished: n,
                }),
                unread: (0, v.tz)(t) && !(0, k.j)(h.A.settings, t),
                deleting: b.Ay.isProjectDeleting(t),
            }),
            [t, n],
        )),
        K = !M && "in_progress" === N,
        z = !M && E,
        H = M || "published" === N ? null : N,
        R = [null != H ? I.intl.string(T[H]) : null, z ? I.intl.string(C.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        W = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(a),
        F = (0, m.A)(a),
        O = [null != W ? (0, c.Ay)({ since: W, getFormatter: c.i, includeWeeks: !0 }) : null, F]
            .filter((e) => null != e)
            .join(" \xb7 "),
        $ = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("span", {
                    className: L.Kk,
                    children: [
                        (0, l.jsx)(p.A, { project: a, size: "sidebar", className: null != H ? P : void 0 }),
                        null != H ? (0, l.jsx)(D, { status: H }) : null,
                    ],
                }),
                (0, l.jsxs)("span", {
                    className: L.rf,
                    children: [
                        (0, l.jsx)(s.E, {
                            variant: "text-md/medium",
                            color: "none",
                            className: r()(L.UU, { [B.Hz]: K }),
                            children: a.name,
                        }),
                        M
                            ? (0, l.jsx)(s.E, {
                                  variant: "text-xs/normal",
                                  color: "none",
                                  className: r()(L.pG, L.sL),
                                  children: I.intl.string(C.default.Yh5pAc),
                              })
                            : K
                              ? (0, l.jsx)(G, { projectId: a.id })
                              : "" !== O
                                ? (0, l.jsx)(s.E, {
                                      variant: "text-xs/normal",
                                      color: "none",
                                      className: r()(L.pG, L.sL),
                                      children: O,
                                  })
                                : null,
                    ],
                }),
                "" !== R ? (0, l.jsx)(o.A, { children: R }) : null,
            ],
        });
    return null == i
        ? (0, l.jsxs)("li", {
              className: r()(L.AS, { [L.Cp]: M }),
              "aria-busy": M,
              children: [
                  z ? (0, l.jsx)("span", { className: L.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsxs)("div", {
                      className: r()(L.nM, L.bl, { [L.gy]: z }),
                      onContextMenu: null == w || M ? void 0 : (e) => w(e, a),
                      children: [$, null == S || M ? null : (0, l.jsx)("div", { className: L.a7, children: S(a) })],
                  }),
              ],
          })
        : (0, l.jsxs)("li", {
              className: r()(L.AS, { [L.Cp]: M, [L.vX]: null != S }),
              "aria-busy": M,
              children: [
                  z ? (0, l.jsx)("span", { className: L.dM, "aria-hidden": !0 }) : null,
                  (0, l.jsx)(u.D, {
                      className: r()(L.nM, { [L.wH]: x, [L.gy]: z }),
                      "aria-current": x ? "page" : void 0,
                      tabIndex: M ? -1 : void 0,
                      onMouseDown: M
                          ? void 0
                          : (e) => {
                                0 === e.button && (0, f.tf)(a.id);
                            },
                      onClick: M ? void 0 : () => i(a),
                      onContextMenu: null == w || M ? void 0 : (e) => w(e, a),
                      children: $,
                  }),
                  null != S
                      ? (0, l.jsx)("div", {
                            className: r()(L.XI, { [L.Rn]: M }),
                            children: M ? (0, l.jsx)(d.y, { type: d.t.SPINNING_CIRCLE_SIMPLE }) : S(a),
                        })
                      : null,
              ],
          });
});
var R = n(831727);
function W(e) {
    let { projects: t, onSelect: n, selectedProjectId: a = null, renderProjectActions: i, onProjectContextMenu: r } = e;
    return (0, l.jsx)("ul", {
        className: R.p,
        children: t.map((e) =>
            (0, l.jsx)(H, { project: e, onSelect: n, selected: e.id === a, renderActions: i, onContextMenu: r }, e.id),
        ),
    });
}
