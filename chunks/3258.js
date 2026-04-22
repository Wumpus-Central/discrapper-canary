"use strict";
n.r(t), n.d(t, { Playground: () => w, PlaygroundStore: () => b });
var r = n(627968),
    i = n(64700),
    s = n(625903),
    a = n(624479),
    o = n(573613),
    l = n(349288),
    u = n(862328),
    d = n(861672),
    c = n(477782),
    _ = n(67811),
    f = n(265872),
    E = n(691540),
    h = n(990078),
    p = n(408278),
    m = n(839214),
    g = n(58736),
    A = n(380450),
    I = n(227542),
    T = n(84654),
    S = n(957565),
    y = n(470586),
    N = n(648339),
    O = n(97483),
    R = n(818348),
    v = n(985018),
    C = n(895925);
let b = (0, m.D)(() => ({ selectedCollection: null, selectedStory: null, controlsLayout: "right" }));
function D() {
    let e = (0, I.A)(),
        t = (0, A.A)(),
        n = (0, T.A)(),
        s = b.useField("controlsLayout"),
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
                                action: () => b.setState({ controlsLayout: "right" }),
                                checked: "right" === s,
                            }),
                            (0, r.jsx)(c.iD, {
                                id: "controls-bottom",
                                group: "controls-layout",
                                label: "Bottom",
                                action: () => b.setState({ controlsLayout: "bottom" }),
                                checked: "bottom" === s,
                            }),
                            (0, r.jsx)(c.iD, {
                                id: "controls-hidden",
                                group: "controls-layout",
                                label: "Hidden",
                                action: () => b.setState({ controlsLayout: "hidden" }),
                                checked: "hidden" === s,
                            }),
                        ],
                    },
                    "controls-layout",
                ),
            [s],
        );
    return (0, r.jsxs)(d.W, {
        "data-menu-migrated": !0,
        onSelect: R.tE,
        navId: "playground-settings-menu",
        onClose: R.tE,
        "aria-label": "Playground Settings",
        children: [
            (0, r.jsx)(c.Dr, {
                id: "appearance",
                label: v.intl.string(v.t["iHH+ky"]),
                children: [...e.filter((e) => null != e), a],
            }),
            (0, r.jsx)(c.Dr, {
                id: "accessibility",
                label: v.intl.string(v.t.G0neg7),
                children: t.filter((e) => null != e),
            }),
            (0, r.jsx)(c.Dr, { id: "experiments", label: "Experiments", children: n.filter((e) => null != e) }),
        ],
    });
}
function L() {
    let e = i.useRef(null);
    return (0, r.jsx)(f.Y, {
        targetElementRef: e,
        renderPopout: () => (0, r.jsx)(D, {}),
        position: "bottom",
        align: "center",
        animation: f.Y.Animation.SCALE,
        onRequestClose: () => {},
        children: (t) =>
            (0, r.jsx)(p.K, {
                size: "sm",
                icon: s.Z,
                "aria-label": "Settings",
                variant: "icon-only",
                ...t,
                buttonRef: e,
            }),
    });
}
function w(e) {
    let { configs: t } = e,
        n = b.useField("selectedCollection"),
        s = b.useField("selectedStory"),
        d = b.useField("controlsLayout"),
        c = i.useMemo(() => t.flatMap((e) => e.collections), [t]),
        {
            collection: f,
            group: m,
            story: A,
        } = i.useMemo(() => {
            let e = null != n ? c.find((e) => e.id === n) : c[0];
            if (null == e) return { collection: null, group: null, story: null };
            let t = e.groups.find((e) => e.stories.some((e) => e.id === s)),
                r = t?.stories.find((e) => e.id === s) ?? null;
            return { collection: e, group: t, story: r };
        }, [n, s, c]),
        I = f?.name ?? "Design System",
        T = A?.name;
    return (0, r.jsxs)("div", {
        className: C.zr,
        children: [
            (0, r.jsx)("div", {
                className: C.Os,
                children: c.map((e) =>
                    (0, r.jsx)(
                        u.Q,
                        {
                            children: (0, r.jsx)(h.m, {
                                position: "right",
                                text: `${e.name} Design System`,
                                children: (0, r.jsx)(_.j, {
                                    name: e.name,
                                    selected: (n ?? c[0]?.id) === e.id,
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
            (0, r.jsxs)("div", {
                className: C.Qs,
                children: [
                    (0, r.jsxs)(g.Ay, {
                        className: C.wx,
                        children: [
                            null != I ? (0, r.jsx)(g.Ay.Title, { children: I }) : null,
                            null != T
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          null != I ? (0, r.jsx)(g.Ay.Caret, { className: C.zN }) : null,
                                          (0, r.jsx)(g.Ay.Title, { children: T }),
                                      ],
                                  })
                                : null,
                            A?.docs != null
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)(g.Ay.Divider, { className: C.zN }),
                                          (0, r.jsx)(g.Ay.Title, {
                                              children: (0, r.jsx)(l.Anchor, { href: A.docs, children: "Docs" }),
                                          }),
                                      ],
                                  })
                                : null,
                            null != f
                                ? (0, r.jsx)(p.K, {
                                      size: "sm",
                                      "aria-label": "Copy Link",
                                      variant: "icon-only",
                                      icon: a.T,
                                      onClick: () => {
                                          if (null == f) return;
                                          let e =
                                              null != A
                                                  ? `dev://playground/${f.id}/${A.id}`
                                                  : `dev://playground/${f.id}`;
                                          (0, S.C)(e, () =>
                                              (0, E.P0)({
                                                  id: "playground-link-copied",
                                                  message: "Copied playground link",
                                                  type: O.Ck.SUCCESS,
                                              }),
                                          );
                                      },
                                  })
                                : null,
                            (0, r.jsx)("div", { className: C.IE, children: (0, r.jsx)(L, {}) }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: C.MY,
                        children: [
                            (0, r.jsx)(o.Ip, {
                                fade: !0,
                                className: C.pz,
                                children:
                                    null != f
                                        ? (0, r.jsx)(y._, {
                                              groups: f.groups,
                                              selectedStory: s,
                                              onStorySelect: (e) => {
                                                  b.setState({ selectedStory: e });
                                              },
                                          })
                                        : null,
                            }),
                            (0, r.jsx)("div", {
                                className: C.Qs,
                                children:
                                    null != A && null != m
                                        ? (0, r.jsx)(N.z, { story: A, groupTitle: m.title, controlsLayout: d })
                                        : null,
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
