l.d(e, { A: () => X });
var s = l(477900),
    i = l(582128),
    t = l(503698),
    a = l.n(t),
    r = l(834730),
    o = l(97808),
    u = l(778712),
    d = l(140735),
    c = l(939249),
    p = l(289873),
    m = l(682163),
    x = l(381849),
    j = l(427262),
    h = l(503275),
    g = l(233470),
    v = l(465006),
    f = l(845079),
    A = l(855986),
    N = l(617617),
    y = l(218461),
    b = l(513425),
    _ = l(404373),
    S = l(260498),
    C = l(189714),
    I = l(722701),
    E = l(811587);
let L = [S.Ay, b.A, y.Ay, N.A, I.A];
var k = l(866665),
    M = l(22231),
    w = l(646514),
    z = l(191850),
    T = l(792996),
    P = l(482062);
let G = P.w5,
    F = { in_progress: z.default["Y8pS+n"], draft: z.default.CSAaT0 };
function R(n) {
    let { status: e } = n;
    return (0, s.jsx)(k.m, {
        text: T.intl.string(F[e]),
        position: "top",
        ariaHidden: !0,
        children: (0, s.jsx)("span", {
            className: P.qS,
            "aria-hidden": !0,
            children:
                "in_progress" === e
                    ? (0, s.jsx)(p.y, { type: p.t.SPINNING_CIRCLE_SIMPLE, className: P.u1, itemClassName: P.pu })
                    : (0, s.jsx)(M.PencilIcon, { size: "xxs", color: w.A.colors.ICON_SUBTLE }),
        }),
    });
}
var D = l(731084),
    H = l(104317),
    U = l(886540),
    B = l(162052),
    W = l(790624);
function Z(n) {
    let { projectId: e } = n,
        l = (0, A.bG)(
            [b.A],
            () => {
                let n = (0, U.Ji)(b.A.getMessages(e));
                return null == n
                    ? null
                    : ((0, H.w)(n.steps) ??
                          (0, D.Dy)({
                              activity: b.A.getThinkingActivity(e),
                              compacting: b.A.isCompacting(e),
                              saving: b.A.isSaving(e),
                          }));
            },
            [e],
        );
    return (0, s.jsx)(r.E, {
        variant: "body-xs/normal",
        color: "none",
        className: a()(W.pG, B.Hz),
        "aria-hidden": !0,
        children: l ?? T.intl.string(z.default["Y8pS+n"]),
    });
}
function O(n) {
    let { guild: e } = n;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(m.Ay, { guild: e, size: m.Ay.Sizes.SMOL, active: !0, className: W.Wy, "aria-hidden": !0 }),
            (0, s.jsx)("span", { className: W.p8, children: e.name }),
        ],
    });
}
function Y(n) {
    let { project: e, time: l, showServer: i } = n,
        t = (0, h.vm)(e.owner_user_id),
        d = (0, j.tx)(t),
        c = (0, v.V)(e),
        p = i && c?.kind === "guild" ? c.guild : null,
        m = (0, s.jsx)("span", { className: W.uk, "aria-hidden": !0 });
    return (0, s.jsxs)(r.E, {
        variant: "body-xs/normal",
        color: "none",
        className: a()(W.pG, W.sL, W.kB),
        children: [
            l,
            null != t
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          null != l ? m : null,
                          (0, s.jsx)(o.eu, {
                              src: t.getAvatarURL(e.guild_id, (0, u.FT)(u._3.SIZE_16)),
                              size: u._3.SIZE_16,
                              className: W.Wy,
                              "aria-hidden": !0,
                          }),
                          (0, s.jsx)("span", { className: W.p8, children: d }),
                      ],
                  })
                : null,
            null != p
                ? (0, s.jsxs)(s.Fragment, {
                      children: [null != l || null != t ? m : null, (0, s.jsx)(O, { guild: p })],
                  })
                : null,
        ],
    });
}
let K = i.memo(function (n) {
    let e,
        l,
        {
            project: i,
            onSelect: t,
            selected: o = !1,
            renderActions: u,
            onContextMenu: m,
            showServer: j = !1,
            hideOwner: h = !1,
        } = n,
        {
            status: v,
            unread: y,
            deleting: k,
        } = ((e = i.id),
        (l = (i.supported_surfaces?.length ?? 0) > 0),
        (0, A.cf)(
            L,
            () => ({
                status: (function (n) {
                    let { thinking: e, publishState: l, everPublished: s } = n;
                    return e
                        ? "in_progress"
                        : null != l && ("nothing_built" === l || "not_live" === l || "live_outdated" === l)
                          ? "draft"
                          : (null != l && (0, E.lE)(l)) || s
                            ? "published"
                            : "draft";
                })({
                    thinking: b.A.isThinking(e),
                    publishState: I.A.getPublishStatus(e)?.publishState ?? null,
                    everPublished: l,
                }),
                unread: (0, _.tz)(e) && !(0, C.j)(N.A.settings, e),
                deleting: S.Ay.isProjectDeleting(e),
            }),
            [e, l],
        )),
        M = !k && "in_progress" === v,
        w = !k && y,
        P = k || "published" === v ? null : v,
        D = [null != P ? T.intl.string(F[P]) : null, w ? T.intl.string(z.default["N+3Pzk"]) : null]
            .filter(Boolean)
            .join(", "),
        H = (function (n) {
            if (null == n.updated_at) return null;
            let e = Date.parse(n.updated_at);
            return Number.isNaN(e) ? null : e;
        })(i),
        U = null != H ? (0, x.Ay)({ since: H, getFormatter: x.i, includeWeeks: !0 }) : null,
        O = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)("span", {
                    className: W.Kk,
                    children: [
                        (0, s.jsx)(f.A, { project: i, size: "sidebar", className: null != P ? G : void 0 }),
                        null != P ? (0, s.jsx)(R, { status: P }) : null,
                    ],
                }),
                (0, s.jsxs)("span", {
                    className: W.rf,
                    children: [
                        (0, s.jsx)(r.E, {
                            variant: "body-md/medium",
                            color: "none",
                            className: a()(W.UU, { [B.Hz]: M }),
                            children: i.name,
                        }),
                        k
                            ? (0, s.jsx)(r.E, {
                                  variant: "body-xs/normal",
                                  color: "none",
                                  className: a()(W.pG, W.sL),
                                  children: T.intl.string(z.default.Yh5pAc),
                              })
                            : M
                              ? (0, s.jsx)(Z, { projectId: i.id })
                              : h
                                ? null != U
                                    ? (0, s.jsx)(r.E, {
                                          variant: "body-xs/normal",
                                          color: "none",
                                          className: a()(W.pG, W.sL),
                                          children: U,
                                      })
                                    : null
                                : (0, s.jsx)(Y, { project: i, time: U, showServer: j }),
                    ],
                }),
                "" !== D ? (0, s.jsx)(d.A, { children: D }) : null,
            ],
        });
    return null == t
        ? (0, s.jsxs)("li", {
              className: a()(W.AS, { [W.Cp]: k }),
              "aria-busy": k,
              children: [
                  w ? (0, s.jsx)("span", { className: W.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsxs)("div", {
                      className: a()(W.nM, W.bl, { [W.gy]: w }),
                      onContextMenu: null == m || k ? void 0 : (n) => m(n, i),
                      children: [O, null == u || k ? null : (0, s.jsx)("div", { className: W.a7, children: u(i) })],
                  }),
              ],
          })
        : (0, s.jsxs)("li", {
              className: a()(W.AS, { [W.Cp]: k, [W.vX]: null != u }),
              "aria-busy": k,
              children: [
                  w ? (0, s.jsx)("span", { className: W.dM, "aria-hidden": !0 }) : null,
                  (0, s.jsx)(c.D, {
                      className: a()(W.nM, { [W.wH]: o, [W.gy]: w }),
                      "aria-current": o ? "page" : void 0,
                      tabIndex: k ? -1 : void 0,
                      onMouseDown: k
                          ? void 0
                          : (n) => {
                                0 === n.button && (0, g.tf)(i.id);
                            },
                      onClick: k ? void 0 : () => t(i),
                      onContextMenu: null == m || k ? void 0 : (n) => m(n, i),
                      children: O,
                  }),
                  null != u
                      ? (0, s.jsx)("div", {
                            className: a()(W.XI, { [W.Rn]: k }),
                            children: k ? (0, s.jsx)(p.y, { type: p.t.SPINNING_CIRCLE_SIMPLE }) : u(i),
                        })
                      : null,
              ],
          });
});
var V = l(831727);
function X(n) {
    let {
        projects: e,
        onSelect: l,
        selectedProjectId: i = null,
        renderProjectActions: t,
        onProjectContextMenu: a,
        listRef: r,
        showServer: o = !1,
        hideOwner: u = !1,
    } = n;
    return (0, s.jsx)("ul", {
        ref: r,
        className: V.p,
        children: e.map((n) =>
            (0, s.jsx)(
                K,
                {
                    project: n,
                    onSelect: l,
                    selected: n.id === i,
                    renderActions: t,
                    onContextMenu: a,
                    showServer: o,
                    hideOwner: u,
                },
                n.id,
            ),
        ),
    });
}
