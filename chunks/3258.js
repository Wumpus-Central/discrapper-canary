"use strict";
n.r(t), n.d(t, { Playground: () => L, PlaygroundStore: () => R });
var r = n(627968),
    i = n(64700),
    s = n(934551),
    a = n(158954),
    o = n(349288),
    l = n(862328),
    u = n(861672),
    c = n(477782),
    d = n(67811),
    _ = n(265872),
    f = n(691540),
    p = n(990078),
    h = n(732955),
    m = n(839214),
    E = n(58736),
    g = n(380450),
    A = n(227542),
    I = n(84654),
    T = n(957565),
    S = n(470586),
    y = n(648339),
    v = n(97483),
    N = n(818348),
    C = n(985018),
    b = n(580002);
let R = (0, m.D)(() => ({ selectedCollection: null, selectedStory: null, controlsLayout: "right" }));
function O() {
    let e = (0, A.A)(),
        t = (0, g.A)(),
        n = (0, I.A)(),
        s = R.useField("controlsLayout"),
        a = i.useMemo(
            () =>
                (0, r.jsxs)(
                    c.rX,
                    {
                        label: "Controls",
                        children: [
                            (0, r.jsx)(c.iD, {
                                id: "controls-right",
                                group: "controls-layout",
                                label: "Right Side",
                                action: () => R.setState({ controlsLayout: "right" }),
                                checked: "right" === s,
                            }),
                            (0, r.jsx)(c.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => R.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === s,
                            }),
                            (0, r.jsx)(c.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => R.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === s,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [s],
        );
    return (0, r.jsxs)(u.W, {
        "data-menu-migrated": !0,
        onSelect: N.tE,
        navId: "playground-settings-menu",
        onClose: N.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, r.jsx)(c.Dr, {
                id: "appearance",
                label: C.intl.string(C.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), a],
            }),
            (0, r.jsx)(c.Dr, {
                id: "accessibility",
                label: C.intl.string(C.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, r.jsx)(c.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function D() {
    let e = i.useRef(null);
    return (0, r.jsx)(_.Y, {
        targetElementRef: e,
        renderPopout: () => (0, r.jsx)(O, {}),
        position: "bottom",
        align: "center",
        animation: _.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, r.jsx)(h.K0, {
                size: "sm",
                icon: s.SettingsIcon,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function L(e) {
    let { configs: t } = e,
        n = R.useField("selectedCollection"),
        u = R.useField("selectedStory"),
        c = R.useField("controlsLayout"),
        _ = i.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: m,
            group: g,
            story: A,
        } = i.useMemo(() => {
            let e = null != n ? _.find((e) => e.id === n) : _[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === u)),
                r = t?.stories.find((e) => e.id === u) ?? null;
            return { collection: e, group: t, story: r };
        }, [n, u, _]),
        I = (e) => {
            R.setState({ selectedCollection: e, selectedStory: null });
        },
        N = (e) => {
            R.setState({ selectedStory: e });
        },
        C = m?.name ?? "Design System",
        O = A?.name,
        L = () => {
            if (null == m) return;
            let e = null != A ? `dev://playground/${m.id}/${A.id}` : `dev://playground/${m.id}`;
            (0, T.C)(e, () =>
                (0, f.P0)({ id: "playground-link-copied", message: "Copied playground link", type: v.Ck.SUCCESS }),
            );
        };
    return (0, r.jsxs)("div", {
        className: b.zr,
        children: [
            (0, r.jsx)("div", {
                className: b.Os,
                children: _.map((e) =>
                    (0, r.jsx)(
                        l.Q,
                        {
                            children: (0, r.jsx)(p.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, r.jsx)(d.j, {
                                    name: e.name,
                                    selected: (n ?? _[0]?.id) === e.id,
                                    onClick: () => I(e.id),
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsxs)("div", {
                className: b.Qs,
                children: [
                    (0, r.jsxs)(E.Ay, {
                        className: b.wx,
                        children: [
                            null != C ? (0, r.jsx)(E.Ay.Title, { children: C }) : null,
                            null != O
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          null != C ? (0, r.jsx)(E.Ay.Caret, { className: b.zN }) : null,
                                          (0, r.jsx)(E.Ay.Title, { children: O }),
                                      ],
                                  })
                                : null,
                            A?.docs != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(E.Ay.Divider, { className: b.zN }),
                                          (0, r.jsx)(E.Ay.Title, {
                                              children: (0, r.jsx)(o.Anchor, { href: A.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != m
                                ? (0, r.jsx)(h.K0, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: s.CopyIcon,
                                      onClick: L,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: b.IE, children: (0, r.jsx)(D, {}) }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: b.MY,
                        children: [
                            (0, r.jsx)(a.IpV, {
                                fade: !0,
                                className: b.pz,
                                children:
                                    null != m
                                        ? (0, r.jsx)(S._, { groups: m.groups, selectedStory: u, onStorySelect: N })
                                        : null,
                            }),
                            (0, r.jsx)("div", {
                                className: b.Qs,
                                children:
                                    null != A && null != g
                                        ? (0, r.jsx)(y.z, { story: A, groupTitle: g.title, controlsLayout: c })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
