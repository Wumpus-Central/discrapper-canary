"use strict";
n.r(t), n.d(t, { Playground: () => w, PlaygroundStore: () => O });
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
    h = n(990078),
    p = n(732955),
    g = n(839214),
    E = n(58736),
    A = n(380450),
    I = n(227542),
    T = n(84654),
    y = n(957565),
    S = n(470586),
    v = n(648339),
    C = n(97483),
    b = n(818348),
    N = n(985018),
    R = n(94576);
let O = (0, g.D)(() => ({ selectedCollection: null, selectedStory: null, controlsLayout: "right" }));
function D() {
    let e = (0, I.A)(),
        t = (0, A.A)(),
        n = (0, T.A)(),
        a = O.useField("controlsLayout"),
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
                                action: () => O.setState({ controlsLayout: "right" }),
                                checked: "right" === a,
                            }),
                            (0, r.jsx)(c.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => O.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === a,
                            }),
                            (0, r.jsx)(c.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => O.setState({ controlsLayout: "hidden" }),
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
        onSelect: b.tE,
        navId: "playground-settings-menu",
        onClose: b.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, r.jsx)(c.Dr, {
                id: "appearance",
                label: N.intl.string(N.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), s],
            }),
            (0, r.jsx)(c.Dr, {
                id: "accessibility",
                label: N.intl.string(N.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, r.jsx)(c.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function L() {
    let e = i.useRef(null);
    return (0, r.jsx)(_.Y, {
        targetElementRef: e,
        renderPopout: () => (0, r.jsx)(D, {}),
        position: "bottom",
        align: "center",
        animation: _.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, r.jsx)(p.K0, {
                size: "sm",
                icon: a.SettingsIcon,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function w(e) {
    let { configs: t } = e,
        n = O.useField("selectedCollection"),
        u = O.useField("selectedStory"),
        c = O.useField("controlsLayout"),
        _ = i.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: g,
            group: A,
            story: I,
        } = i.useMemo(() => {
            let e = null != n ? _.find((e) => e.id === n) : _[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === u)),
                r = t?.stories.find((e) => e.id === u) ?? null;
            return { collection: e, group: t, story: r };
        }, [n, u, _]),
        T = (e) => {
            O.setState({ selectedCollection: e, selectedStory: null });
        },
        b = (e) => {
            O.setState({ selectedStory: e });
        },
        N = g?.name ?? "Design System",
        D = I?.name,
        w = () => {
            if (null == g) return;
            let e = null != I ? `dev://playground/${g.id}/${I.id}` : `dev://playground/${g.id}`;
            (0, y.C)(e, () =>
                (0, f.P0)({ id: "playground-link-copied", message: "Copied playground link", type: C.Ck.SUCCESS }),
            );
        };
    return (0, r.jsxs)("div", {
        className: R.zr,
        children: [
            (0, r.jsx)("div", {
                className: R.Os,
                children: _.map((e) =>
                    (0, r.jsx)(
                        l.Q,
                        {
                            children: (0, r.jsx)(h.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, r.jsx)(d.j, {
                                    name: e.name,
                                    selected: (n ?? _[0]?.id) === e.id,
                                    onClick: () => T(e.id),
                                }),
                            }),
                        },
                        e.id,
                    ),
                ),
            }),
            (0, r.jsxs)("div", {
                className: R.Qs,
                children: [
                    (0, r.jsxs)(E.Ay, {
                        className: R.wx,
                        children: [
                            null != N ? (0, r.jsx)(E.Ay.Title, { children: N }) : null,
                            null != D
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          null != N ? (0, r.jsx)(E.Ay.Caret, { className: R.zN }) : null,
                                          (0, r.jsx)(E.Ay.Title, { children: D }),
                                      ],
                                  })
                                : null,
                            I?.docs != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(E.Ay.Divider, { className: R.zN }),
                                          (0, r.jsx)(E.Ay.Title, {
                                              children: (0, r.jsx)(o.Anchor, { href: I.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != g
                                ? (0, r.jsx)(p.K0, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: a.CopyIcon,
                                      onClick: w,
                                  })
                                : null,
                            (0, r.jsx)("div", { className: R.IE, children: (0, r.jsx)(L, {}) }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: R.MY,
                        children: [
                            (0, r.jsx)(s.IpV, {
                                fade: !0,
                                className: R.pz,
                                children:
                                    null != g
                                        ? (0, r.jsx)(S._, { groups: g.groups, selectedStory: u, onStorySelect: b })
                                        : null,
                            }),
                            (0, r.jsx)("div", {
                                className: R.Qs,
                                children:
                                    null != I && null != A
                                        ? (0, r.jsx)(v.z, { story: I, groupTitle: A.title, controlsLayout: c })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
