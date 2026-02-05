"use strict";
n.r(t), n.d(t, { Playground: () => L, PlaygroundStore: () => R });
var r = n(627968),
    i = n(64700),
    a = n(934551),
    s = n(158954),
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
    g = n(58736),
    E = n(380450),
    A = n(227542),
    I = n(84654),
    T = n(957565),
    y = n(470586),
    S = n(648339),
    v = n(97483),
    C = n(818348),
    b = n(985018),
    N = n(94576);
let R = (0, m.D)(() => ({ selectedCollection: null, selectedStory: null, controlsLayout: "right" }));
function O() {
    let e = (0, A.A)(),
        t = (0, E.A)(),
        n = (0, I.A)(),
        a = R.useField("controlsLayout"),
        s = i.useMemo(
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
                                checked: "right" === a,
                            }),
                            (0, r.jsx)(c.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => R.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === a,
                            }),
                            (0, r.jsx)(c.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => R.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === a,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [a],
        );
    return (0, r.jsxs)(u.W, {
        "data-menu-migrated": !0,
        onSelect: C.tE,
        navId: "playground-settings-menu",
        onClose: C.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, r.jsx)(c.Dr, {
                id: "appearance",
                label: b.intl.string(b.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), s],
            }),
            (0, r.jsx)(c.Dr, {
                id: "accessibility",
                label: b.intl.string(b.t.G0neg7),
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
                icon: a.SettingsIcon,
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
            group: E,
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
        C = (e) => {
            R.setState({ selectedStory: e });
        },
        b = m?.name ?? "Design System",
        O = A?.name,
        L = () => {
            if (null == m) return;
            let e = null != A ? `dev://playground/${m.id}/${A.id}` : `dev://playground/${m.id}`;
            (0, T.C)(e, () =>
                (0, f.P0)({ id: "playground-link-copied", message: "Copied playground link", type: v.Ck.SUCCESS }),
            );
        };
    return (0, r.jsxs)("div", {
        className: N.zr,
        children: [
            (0, r.jsx)("div", {
                className: N.Os,
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
                className: N.Qs,
                children: [
                    (0, r.jsxs)(g.Ay, {
                        className: N.wx,
                        children: [
                            null != b ? (0, r.jsx)(g.Ay.Title, { children: b }) : null,
                            null != O
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          null != b ? (0, r.jsx)(g.Ay.Caret, { className: N.zN }) : null,
                                          (0, r.jsx)(g.Ay.Title, { children: O }),
                                      ],
                                  })
                                : null,
                            A?.docs != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(g.Ay.Divider, { className: N.zN }),
                                          (0, r.jsx)(g.Ay.Title, {
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
                                      icon: a.CopyIcon,
                                      onClick: L,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: N.IE, children: (0, r.jsx)(D, {}) }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: N.MY,
                        children: [
                            (0, r.jsx)(s.IpV, {
                                fade: !0,
                                className: N.pz,
                                children:
                                    null != m
                                        ? (0, r.jsx)(y._, { groups: m.groups, selectedStory: u, onStorySelect: C })
                                        : null,
                            }),
                            (0, r.jsx)("div", {
                                className: N.Qs,
                                children:
                                    null != A && null != E
                                        ? (0, r.jsx)(S.z, { story: A, groupTitle: E.title, controlsLayout: c })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
