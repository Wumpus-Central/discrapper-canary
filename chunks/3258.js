n.r(t), n.d(t, { Playground: () => M, PlaygroundStore: () => b });
var i = n(627968),
    r = n(64700),
    a = n(625903),
    s = n(624479),
    _ = n(364522),
    l = n(349288),
    o = n(862328),
    E = n(550079),
    d = n(477782),
    c = n(67811),
    u = n(922016),
    I = n(691540),
    A = n(990078),
    T = n(408278),
    S = n(839214),
    N = n(58736),
    O = n(180807),
    R = n(227542),
    f = n(84654),
    C = n(957565),
    p = n(470586),
    m = n(898388),
    L = n(97483),
    D = n(818348),
    h = n(985018),
    g = n(895925);
let b = (0, S.D)(() => ({ selectedCollection: null, selectedStory: null, controlsLayout: "right" }));
function U() {
    let e = (0, R.A)(),
        t = (0, O.A)(),
        n = (0, f.A)(),
        a = b.useField("controlsLayout"),
        s = r.useMemo(
            () =>
                (0, i.jsxs)(
                    d.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, i.jsx)(d.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => b.setState({ controlsLayout: "right" }),
                                checked: "right" === a,
                            }),
                            (0, i.jsx)(d.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => b.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === a,
                            }),
                            (0, i.jsx)(d.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => b.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === a,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [a],
        );
    return (0, i.jsxs)(E.W, {
        "data-menu-migrated": !0,
        onSelect: D.tE,
        navId: "playground-settings-menu",
        onClose: D.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, i.jsx)(d.Dr, {
                id: "appearance",
                label: h.intl.string(h.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), s],
            }),
            (0, i.jsx)(d.Dr, {
                id: "accessibility",
                label: h.intl.string(h.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, i.jsx)(d.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function P() {
    let e = r.useRef(null);
    return (0, i.jsx)(u.Y, {
        targetElementRef: e,
        renderPopout: () => (0, i.jsx)(U, {}),
        position: "bottom",
        align: "center",
        animation: u.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, i.jsx)(T.K, {
                size: "sm",
                icon: a.Z,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function M(e) {
    let { configs: t } = e,
        n = b.useField("selectedCollection"),
        a = b.useField("selectedStory"),
        E = b.useField("controlsLayout"),
        d = r.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: u,
            group: S,
            story: O,
        } = r.useMemo(() => {
            let e = null != n ? d.find((e) => e.id === n) : d[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === a)),
                i = t?.stories.find((e) => e.id === a) ?? null;
            return { collection: e, group: t, story: i };
        }, [n, a, d]),
        R = u?.name ?? "Design System",
        f = O?.name;
    return (0, i.jsxs)("div", {
        className: g.zr,
        children: [
            (0, i.jsx)("div", {
                className: g.Os,
                children: d.map((e) =>
                    (0, i.jsx)(
                        o.Q,
                        {
                            children: (0, i.jsx)(A.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, i.jsx)(c.j, {
                                    name: e.name,
                                    selected: (n ?? d[0]?.id) === e.id,
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
                className: g.Qs,
                children: [
                    (0, i.jsxs)(N.Ay, {
                        className: g.wx,
                        children: [
                            null != R ? (0, i.jsx)(N.Ay.Title, { children: R }) : null,
                            null != f
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          null != R ? (0, i.jsx)(N.Ay.Caret, { className: g.zN }) : null,
                                          (0, i.jsx)(N.Ay.Title, { children: f }),
                                      ],
                                  })
                                : null,
                            O?.docs != null
                                ? (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(N.Ay.Divider, { className: g.zN }),
                                          (0, i.jsx)(N.Ay.Title, {
                                              children: (0, i.jsx)(l.Anchor, { href: O.docs, children: "Docs" }),
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
                                              null != O
                                                  ? `dev://playground/${u.id}/${O.id}`
                                                  : `dev://playground/${u.id}`;
                                          (0, C.C)(e, () =>
                                              (0, I.P0)({
                                                  id: "playground-link-copied",
                                                  message: "Copied playground link",
                                                  type: L.Ck.SUCCESS,
                                              }),
                                          );
                                      },
                                  })
                                : null,
                            (0, i.jsx)("div", { className: g.IE, children: (0, i.jsx)(P, {}) }),
                        ],
                    }),
                    (0, i.jsxs)("div", {
                        className: g.MY,
                        children: [
                            (0, i.jsx)(_.Ip, {
                                fade: !0,
                                className: g.pz,
                                children:
                                    null != u
                                        ? (0, i.jsx)(p._, {
                                              groups: u.groups,
                                              selectedStory: a,
                                              onStorySelect: (e) => {
                                                  b.setState({ selectedStory: e });
                                              },
                                          })
                                        : null,
                            }),
                            (0, i.jsx)("div", {
                                className: g.Qs,
                                children:
                                    null != O && null != S
                                        ? (0, i.jsx)(m.z, { story: O, groupTitle: S.title, controlsLayout: E })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
