n.r(t), n.d(t, { Playground: () => U, PlaygroundStore: () => b });
var i = n(627968),
    a = n(64700),
    r = n(625903),
    s = n(624479),
    l = n(364522),
    o = n(349288),
    d = n(862328),
    c = n(550079),
    _ = n(477782),
    E = n(67811),
    u = n(922016),
    A = n(691540),
    I = n(990078),
    T = n(408278),
    h = n(839214),
    S = n(58736),
    N = n(180807),
    f = n(227542),
    p = n(84654),
    m = n(957565),
    O = n(470586),
    C = n(898388),
    R = n(97483),
    g = n(818348),
    L = n(985018),
    D = n(895925);
let b = (0, h.D)(() => ({ selectedCollection: null, selectedStory: null, controlsLayout: "right" }));
function M() {
    let e = (0, f.A)(),
        t = (0, N.A)(),
        n = (0, p.A)(),
        r = b.useField("controlsLayout"),
        s = a.useMemo(
            () =>
                (0, i.jsxs)(
                    _.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, i.jsx)(_.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => b.setState({ controlsLayout: "right" }),
                                checked: "right" === r,
                            }),
                            (0, i.jsx)(_.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => b.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === r,
                            }),
                            (0, i.jsx)(_.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => b.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === r,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [r],
        );
    return (0, i.jsxs)(c.W, {
        "data-menu-migrated": !0,
        onSelect: g.tE,
        navId: "playground-settings-menu",
        onClose: g.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(_.Dr, {
                id: "appearance",
                label: L.intl.string(L.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), s],
            }),
            (0, i.jsx)(_.Dr, {
                id: "accessibility",
                label: L.intl.string(L.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(_.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function P() {
    let e = a.useRef(null);
    return (0, i.jsx)(u.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(M, {}),
        position: "bottom",
        align: "center",
        animation: u.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, i.jsx)(T.K, {
                size: "sm",
                icon: r.Z,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function U(e) {
    let { configs: t } = e,
        n = b.useField("selectedCollection"),
        r = b.useField("selectedStory"),
        c = b.useField("controlsLayout"),
        _ = a.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: u,
            group: h,
            story: N,
        } = a.useMemo(() => {
            let e = null != n ? _.find((e) => e.id === n) : _[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === r)),
                i = t?.stories.find((e) => e.id === r) ?? null;
            return { collection: e, group: t, story: i };
        }, [n, r, _]),
        f = u?.name ?? "Design System",
        p = N?.name;
    return (0, i.jsxs)("div", {
        className: D.zr,
        children: [
            (0, i.jsx)("div", {
                className: D.Os,
                children: _.map((e) =>
                    (0, i.jsx)(
                        d.Q,
                        {
                            children: (0, i.jsx)(I.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, i.jsx)(E.j, {
                                    name: e.name,
                                    selected: (n ?? _[0]?.id) === e.id,
                                    onClick: () => {
                                        var t;
                                        return (
                                            (t = e.id), void b.setState({ selectedCollection: t, selectedStory: null })
                                        );
                                    },
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, i.jsxs)("div", {
                className: D.Qs,
                children: [
                    (0, i.jsxs)(S.Ay, {
                        className: D.wx,
                        children: [
                            null != f ? (0, i.jsx)(S.Ay.Title, { children: f }) : null,
                            null != p
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != f ? (0, i.jsx)(S.Ay.Caret, { className: D.zN }) : null,
                                          (0, i.jsx)(S.Ay.Title, { children: p }),
                                      ],
                                  })
                                : null,
                            N?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(S.Ay.Divider, { className: D.zN }),
                                          (0, i.jsx)(S.Ay.Title, {
                                              children: (0, i.jsx)(o.Anchor, { href: N.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != u
                                ? (0, i.jsx)(T.K, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: s.T,
                                      onClick: () => {
                                          if (null == u) return;
                                          let e =
                                              null != N
                                                  ? `dev://playground/${u.id}/${N.id}`
                                                  : `dev://playground/${u.id}`;
                                          (0, m.C)(e, () =>
                                              (0, A.P0)({
                                                  id: "playground-link-copied",
                                                  message: "Copied playground link",
                                                  type: R.Ck.SUCCESS,
                                              }),
                                          );
                                      },
                                  })
                                : null,
                            (0, i.jsx)("div", { className: D.IE, children: (0, i.jsx)(P, {}) }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: D.MY,
                        children: [
                            (0, i.jsx)(l.Ip, {
                                fade: !0,
                                className: D.pz,
                                children:
                                    null != u
                                        ? (0, i.jsx)(O._, {
                                              groups: u.groups,
                                              selectedStory: r,
                                              onStorySelect: (e) => {
                                                  b.setState({ selectedStory: e });
                                              },
                                          })
                                        : null,
                            }),
                            (0, i.jsx)("div", {
                                className: D.Qs,
                                children:
                                    null != N && null != h
                                        ? (0, i.jsx)(C.z, { story: N, groupTitle: h.title, controlsLayout: c })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
