n.d(t, { A: () => T });
var l = n(477900),
    a = n(582128),
    r = n(17928),
    i = n(834730),
    s = n(821609),
    u = n(289873),
    d = n(371169),
    o = n(260498),
    c = n(281091),
    m = n(503698),
    f = n.n(m),
    h = n(939249),
    x = n(140735),
    g = n(995273),
    p = n(855793),
    j = n(497183),
    k = n(722701),
    v = n(219956),
    _ = n(731084),
    b = n(104317),
    A = n(245179),
    y = n(886540),
    N = n(248675),
    S = n(105292),
    w = n(162052),
    E = n(790624);
function C() {
    return (0, l.jsx)("span", { className: E.me, "aria-hidden": !0 });
}
function I(e) {
    let { projectId: t } = e,
        n = (0, r.bG)(
            [A.A],
            () => {
                let e = (0, y.Ji)(A.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, b.w)(e.steps) ??
                          (0, _.Dy)({
                              activity: A.A.getThinkingActivity(t),
                              compacting: A.A.isCompacting(t),
                              saving: A.A.isSaving(t),
                          }));
            },
            [t],
        );
    return (0, l.jsx)(i.E, {
        variant: "text-sm/normal",
        color: "none",
        className: f()(E.pG, w.Hz),
        children: n ?? S.intl.string(N.default["Y8pS+n"]),
    });
}
let P = a.memo(function (e) {
    let { project: t, onSelect: n, renderActions: a, onContextMenu: s } = e,
        o = (0, v.ZA)(t.id),
        c = "deleting" === o,
        m = (0, r.bG)([k.A], () => k.A.getPublishStatus(t.id)?.publishState ?? null, [t.id]),
        _ = (0, v.s9)(o, m),
        b = (0, v.yy)(t),
        A = null == s || c ? void 0 : (e) => s(e, t);
    return (0, l.jsxs)("li", {
        className: f()(E.dc, { [E.V7]: !c, [E.BI]: c }),
        "aria-busy": c,
        children: [
            (0, l.jsx)(p.Ay, { projectId: c ? null : t.id }),
            (0, l.jsxs)(h.D, {
                className: E.nM,
                tabIndex: c ? -1 : void 0,
                onMouseDown: c
                    ? void 0
                    : (e) => {
                          0 === e.button && (0, d.tf)(t.id);
                      },
                onClick: c ? void 0 : () => n(t),
                onContextMenu: A,
                children: [
                    (0, l.jsx)(j.A, { project: t, size: "card" }),
                    (0, l.jsxs)("div", {
                        className: E.rf,
                        children: [
                            (0, l.jsx)(i.E, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                className: E.UU,
                                children: t.name,
                            }),
                            c
                                ? (0, l.jsx)(i.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      className: E.pG,
                                      children: S.intl.string(N.default.Yh5pAc),
                                  })
                                : "in_progress" === o
                                  ? (0, l.jsx)(I, { projectId: t.id })
                                  : (0, l.jsxs)("div", {
                                        className: E.VJ,
                                        children: [
                                            null != b
                                                ? (0, l.jsx)(i.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: E.pG,
                                                      children: (0, g.jb)(b, !1),
                                                  })
                                                : null,
                                            _
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          null != b ? (0, l.jsx)(C, {}) : null,
                                                          (0, l.jsx)(i.E, {
                                                              variant: "text-sm/medium",
                                                              color: "text-brand",
                                                              children: S.intl.string(N.default.CSAaT0),
                                                          }),
                                                      ],
                                                  })
                                                : null,
                                        ],
                                    }),
                        ],
                    }),
                    "unread" === o
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("span", { className: E.Zm, "aria-hidden": !0 }),
                                  (0, l.jsx)(x.A, { children: S.intl.string(N.default["N+3Pzk"]) }),
                              ],
                          })
                        : null,
                ],
            }),
            null != a
                ? (0, l.jsx)("div", {
                      className: f()(E.XI, { [E.Rn]: c }),
                      children: c ? (0, l.jsx)(u.y, { type: u.t.SPINNING_CIRCLE_SIMPLE }) : a(t),
                  })
                : null,
        ],
    });
});
var D = n(655074);
function T(e) {
    let { onSelect: t, query: n = "", guildId: m, renderProjectActions: f, onProjectContextMenu: h } = e,
        x = (0, c.A)(m),
        g = (0, r.bG)(
            [o.Ay],
            () => (null != m ? o.Ay.getGuildProjectsFetchState(m) : o.Ay.getOwnedProjectsFetchState()),
            [m],
        ),
        p = n.trim().toLocaleLowerCase(),
        j = a.useMemo(() => ("" === p ? x : x.filter((e) => e.name.toLocaleLowerCase().includes(p))), [x, p]);
    return j.length > 0
        ? (0, l.jsx)("ul", {
              className: D.p_,
              children: j.map((e) =>
                  (0, l.jsx)(P, { project: e, onSelect: t, renderActions: f, onContextMenu: h }, e.id),
              ),
          })
        : x.length > 0
          ? (0, l.jsx)(i.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: D.Ie,
                children: S.intl.string(N.default.X37fkR),
            })
          : "error" === g
            ? (0, l.jsxs)("div", {
                  className: D.E8,
                  children: [
                      (0, l.jsx)(i.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: S.intl.string(N.default.DJAPMO),
                      }),
                      (0, l.jsx)(s.$, {
                          variant: "secondary",
                          size: "sm",
                          text: S.intl.string(N.default["WFJ/vb"]),
                          onClick: () => (0, d.hF)(m),
                      }),
                  ],
              })
            : "success" !== g
              ? (0, l.jsx)("div", { className: D.E8, children: (0, l.jsx)(u.y, {}) })
              : (0, l.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: D.Ie,
                    children: S.intl.string(N.default["9/5sLV"]),
                });
}
