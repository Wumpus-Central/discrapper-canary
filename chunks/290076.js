n.d(t, { A: () => P });
var l = n(477900),
    a = n(582128),
    r = n(17928),
    i = n(834730),
    s = n(821609),
    u = n(289873),
    o = n(371169),
    d = n(260498),
    c = n(281091),
    m = n(503698),
    f = n.n(m),
    h = n(939249),
    g = n(140735),
    p = n(995273),
    x = n(855793),
    j = n(497183),
    k = n(722701),
    v = n(219956),
    b = n(731084),
    y = n(104317),
    A = n(245179),
    _ = n(886540),
    w = n(261425),
    N = n(105292),
    S = n(162052),
    E = n(790624);
function C() {
    return (0, l.jsx)("span", { className: E.me, "aria-hidden": !0 });
}
function T(e) {
    let { projectId: t } = e,
        n = (0, r.bG)(
            [A.A],
            () => {
                let e = (0, _.Ji)(A.A.getMessages(t));
                return null == e
                    ? null
                    : ((0, y.w)(e.steps) ??
                          (0, b.Dy)({
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
        className: f()(E.pG, S.Hz),
        children: n ?? N.intl.string(w.default["Y8pS+n"]),
    });
}
let I = a.memo(function (e) {
    let { project: t, onSelect: n } = e,
        a = (0, v.ZA)(t.id),
        s = (0, r.bG)([k.A], () => k.A.getPublishStatus(t.id)?.state ?? null, [t.id]),
        u = (0, v.s9)(a, s),
        d = (function (e) {
            if (null == e.updated_at) return null;
            let t = Date.parse(e.updated_at);
            return Number.isNaN(t) ? null : t;
        })(t);
    return (0, l.jsxs)("li", {
        className: f()(E.dc, E.V7),
        children: [
            (0, l.jsx)(x.Ay, { projectId: t.id }),
            (0, l.jsxs)(h.D, {
                className: E.nM,
                onMouseDown: (e) => {
                    0 === e.button && (0, o.tf)(t.id);
                },
                onClick: () => n(t),
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
                            "in_progress" === a
                                ? (0, l.jsx)(T, { projectId: t.id })
                                : (0, l.jsxs)("div", {
                                      className: E.VJ,
                                      children: [
                                          null != d
                                              ? (0, l.jsx)(i.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-subtle",
                                                    className: E.pG,
                                                    children: (0, p.jb)(d, !1),
                                                })
                                              : null,
                                          u
                                              ? (0, l.jsxs)(l.Fragment, {
                                                    children: [
                                                        null != d ? (0, l.jsx)(C, {}) : null,
                                                        (0, l.jsx)(i.E, {
                                                            variant: "text-sm/medium",
                                                            color: "text-brand",
                                                            children: N.intl.string(w.default.CSAaT0),
                                                        }),
                                                    ],
                                                })
                                              : null,
                                      ],
                                  }),
                        ],
                    }),
                    "unread" === a
                        ? (0, l.jsxs)(l.Fragment, {
                              children: [
                                  (0, l.jsx)("span", { className: E.Zm, "aria-hidden": !0 }),
                                  (0, l.jsx)(g.A, { children: N.intl.string(w.default["N+3Pzk"]) }),
                              ],
                          })
                        : null,
                ],
            }),
        ],
    });
});
var M = n(655074);
function P(e) {
    let { onSelect: t, query: n = "", guildId: m } = e,
        f = (0, c.A)(m),
        h = (0, r.bG)(
            [d.Ay],
            () => (null != m ? d.Ay.getGuildProjectsFetchState(m) : d.Ay.getOwnedProjectsFetchState()),
            [m],
        ),
        g = n.trim().toLocaleLowerCase(),
        p = a.useMemo(() => ("" === g ? f : f.filter((e) => e.name.toLocaleLowerCase().includes(g))), [f, g]);
    return p.length > 0
        ? (0, l.jsx)("ul", {
              className: M.p_,
              children: p.map((e) => (0, l.jsx)(I, { project: e, onSelect: t }, e.id)),
          })
        : f.length > 0
          ? (0, l.jsx)(i.E, {
                variant: "text-sm/normal",
                color: "text-subtle",
                className: M.Ie,
                children: N.intl.string(w.default.X37fkR),
            })
          : "error" === h
            ? (0, l.jsxs)("div", {
                  className: M.E8,
                  children: [
                      (0, l.jsx)(i.E, {
                          variant: "text-sm/normal",
                          color: "text-muted",
                          children: N.intl.string(w.default.DJAPMO),
                      }),
                      (0, l.jsx)(s.$, {
                          variant: "secondary",
                          size: "sm",
                          text: N.intl.string(w.default["WFJ/vb"]),
                          onClick: () => (0, o.hF)(m),
                      }),
                  ],
              })
            : "success" !== h
              ? (0, l.jsx)("div", { className: M.E8, children: (0, l.jsx)(u.y, {}) })
              : (0, l.jsx)(i.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    className: M.Ie,
                    children: N.intl.string(w.default["9/5sLV"]),
                });
}
