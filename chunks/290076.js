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
    g = n(140735),
    x = n(995273),
    p = n(855793),
    j = n(497183),
    k = n(722701),
    v = n(219956),
    b = n(731084),
    A = n(104317),
    _ = n(245179),
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
            [_.A],
            () => {
                let e = (0, y.Ji)(_.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, A.w)(e.steps) ??
                          (0, b.Dy)({
                              activity: _.A.getThinkingActivity(t),
                              compacting: _.A.isCompacting(t),
                              saving: _.A.isSaving(t),
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
let M = a.memo(function (e) {
    let { project: t, onSelect: n, renderActions: a, onContextMenu: s } = e,
        o = (0, v.ZA)(t.id),
        c = "deleting" === o,
        m = (0, r.bG)([k.A], () => k.A.getPublishStatus(t.id)?.state ?? null, [t.id]),
        b = (0, v.s9)(o, m),
        A = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(t),
        _ = null == s || c ? void 0 : (e) => s(e, t);
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
                onContextMenu: _,
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
                                            null != A
                                                ? (0, l.jsx)(i.E, {
                                                      variant: "text-sm/normal",
                                                      color: "text-subtle",
                                                      className: E.pG,
                                                      children: (0, x.jb)(A, !1),
                                                  })
                                                : null,
                                            b
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          null != A ? (0, l.jsx)(C, {}) : null,
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
                                  (0, l.jsx)(g.A, { children: S.intl.string(N.default["N+3Pzk"]) }),
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
var P = n(655074);
function T(e) {
    let { onSelect: t, query: n = "", guildId: m, renderProjectActions: f, onProjectContextMenu: h } = e,
        g = (0, c.A)(m),
        x = (0, r.bG)(
            [o.Ay],
            () => (null != m ? o.Ay.getGuildProjectsFetchState(m) : o.Ay.getOwnedProjectsFetchState()),
            [m],
        ),
        p = n.trim().toLocaleLowerCase(),
        j = a.useMemo(() => ("" === p ? g : g.filter((e) => e.name.toLocaleLowerCase().includes(p))), [g, p]);
    return j.length > 0
        ? (0, l.jsx)("ul", {
              className: P.p_,
              children: j.map((e) =>
                  (0, l.jsx)(M, { project: e, onSelect: t, renderActions: f, onContextMenu: h }, e.id),
              ),
          })
        : g.length > 0
          ? (0, l.jsx)(i.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: P.Ie,
                children: S.intl.string(N.default.X37fkR),
            })
          : "error" === x
            ? (0, l.jsxs)("div", {
                  className: P.E8,
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
            : "success" !== x
              ? (0, l.jsx)("div", { className: P.E8, children: (0, l.jsx)(u.y, {}) })
              : (0, l.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: P.Ie,
                    children: S.intl.string(N.default["9/5sLV"]),
                });
}
