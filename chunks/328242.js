n.d(t, { Z: () => S }), n(388685), n(642613);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(268146),
    a = n(442837),
    c = n(481060),
    d = n(594190),
    u = n(320724),
    f = n(569984),
    m = n(63063),
    h = n(77118),
    p = n(855403),
    x = n(567126),
    g = n(615161),
    _ = n(637824),
    v = n(388032),
    j = n(602804);
function b(e) {
    let { source: t } = e;
    return t.id.startsWith(o.vA.SCREEN)
        ? (0, r.jsx)(c.pzj, { size: "xs" })
        : t.id.startsWith(o.vA.WINDOW)
          ? null != t.icon && "" !== t.icon
              ? (0, r.jsx)("img", {
                    src: t.icon,
                    className: j.sourceIcon,
                    alt: "",
                })
              : (0, r.jsx)(c.GON, { size: "xs" })
          : (0, r.jsx)(c.Odl, { size: "xs" });
}
function C(e) {
    let { source: t, selected: n, onClick: i } = e,
        { url: l, name: o } = t;
    return (0, r.jsxs)(c.P3F, {
        onClick: () => i(t),
        className: s()(j.source, { [j.selectedSource]: n }),
        children: [
            (0, r.jsx)("div", {
                className: j.sourcePreviewContainer,
                children: (0, r.jsxs)("div", {
                    className: j.sourcePreview,
                    children: [
                        (0, r.jsx)("img", {
                            src: l,
                            className: j.sourcePreviewImage,
                            alt: "",
                        }),
                        (0, r.jsx)("div", {
                            className: j.sourceOverlay,
                            children: (0, r.jsx)("div", {
                                className: j.sourceOverlayCTA,
                                children: (0, r.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    color: "button-filled-white-text",
                                    children: v.intl.string(v.t.z7WGho),
                                }),
                            }),
                        }),
                    ],
                }),
            }),
            (0, r.jsxs)("div", {
                className: j.sourceNameContainer,
                children: [
                    (0, r.jsx)(b, { source: t }),
                    (0, r.jsx)(c.Text, {
                        variant: "text-sm/medium",
                        className: j.sourceName,
                        children: o,
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { onClick: t } = e,
        [
            {
                windowSources: n,
                deviceSources: l,
                screenSources: s,
                sourceType: m,
                fetchingSources: _,
                selectedSource: v,
                discordSourceId: b,
            },
        ] = (0, g.E_)(),
        { smarterSourceOrdering: S } = (0, h.Q)({ location: "GoLiveSourceGrid" }),
        O = (0, a.e7)([d.ZP], () => d.ZP.getRunningGames()),
        w = (0, a.cj)([d.ZP], () => {
            let e = d.ZP.getCandidateGames(),
                t = {};
            for (let n of e) null != n.windowHandle && (t[n.windowHandle] = n.exeName);
            return t;
        }),
        Z = (0, a.e7)([f.Z], () => f.Z.quests),
        I = (0, x.jx)(Z, O, n);
    i.useEffect(() => ((0, u.Ky)(), u.P7), []);
    let N = i.useMemo(
        () =>
            S
                ? [...n].sort(
                      (e, t) =>
                          (0, x.ov)(t, null == I ? void 0 : I.source.id, b, w) -
                          (0, x.ov)(e, null == I ? void 0 : I.source.id, b, w),
                  )
                : n,
        [I, S, n, b, w],
    );
    if (_)
        return (0, r.jsx)("div", {
            className: j.loading,
            children: (0, r.jsx)(c.$jN, {}),
        });
    let P = [];
    return ((P = m === o.vA.WINDOW ? N : m === o.vA.SCREEN ? s : l), m === o.vA.CAMERA && 0 === P.length)
        ? (0, r.jsx)(y, {})
        : (0, r.jsx)("div", {
              className: j.root,
              children: P.map((e) =>
                  (0, r.jsx)(
                      C,
                      {
                          onClick: t,
                          source: e,
                          selected:
                              null != v && "windowHandle" in v
                                  ? (0, p.Z)(e.id, v.windowHandle)
                                  : (null == v ? void 0 : v.id) === e.id,
                      },
                      e.id,
                  ),
              ),
          });
}
function y() {
    return (0, r.jsxs)("div", {
        className: j.emptyState,
        children: [
            (0, r.jsx)(c.Odl, {
                size: "md",
                color: c.TVs.colors.ICON_MUTED,
                className: j.emptyIcon,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-lg/medium",
                color: "header-primary",
                className: j.emptyHeader,
                children: v.intl.string(_.default["/z3YaW"]),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/medium",
                color: "text-secondary",
                className: j.emptyBody,
                children: v.intl.string(_.default.agwSGB),
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/semibold",
                children: v.intl.format(_.default.xpVzr6, { helpdeskURL: m.Z.getArticleURL(360040816151) }),
            }),
        ],
    });
}
