n.d(l, { default: () => R });
var t = n(477900),
    i = n(582128),
    a = n(347704),
    r = n(124077),
    s = n(674008),
    o = n(674725),
    d = n(331322),
    c = n(534514),
    u = n(834730),
    m = n(752222);
let x = [
    { key: "auto-sync", message: m.default.WUVzdk },
    { key: "linked-channel", message: m.default.MEQJ1m },
];
var g = n(682163),
    h = n(792996),
    p = n(393612);
function j(e) {
    let { linkedGuild: l } = e,
        { id: n, name: a, icon: r, presenceCount: s, memberCount: o } = l,
        c = i.useMemo(() => ({ id: n, name: a, icon: r, features: [] }), [n, a, r]);
    return (0, t.jsx)("div", {
        className: p.Nr,
        children: (0, t.jsxs)(d.B, {
            direction: "horizontal",
            align: "center",
            gap: 16,
            children: [
                (0, t.jsx)(g.Ay, { guild: c, size: g.Ay.Sizes.LARGER, className: p.Kk, "aria-hidden": !0 }),
                (0, t.jsxs)(d.B, {
                    gap: 4,
                    className: p.pq,
                    children: [
                        (0, t.jsx)(u.E, {
                            variant: "body-lg/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: a,
                        }),
                        (0, t.jsxs)(d.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 16,
                            wrap: !0,
                            children: [
                                null != s
                                    ? (0, t.jsxs)(d.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, t.jsx)("span", { className: p.RS }),
                                              (0, t.jsx)(u.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: h.intl.formatToPlainString(h.t["LC+S+m"], {
                                                      membersOnline: s,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != o
                                    ? (0, t.jsxs)(d.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, t.jsx)("span", { className: p.Ps }),
                                              (0, t.jsx)(u.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: h.intl.formatToPlainString(h.t.zRl6XR, { count: o }),
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            ],
        }),
    });
}
var b = n(785952);
function f(e) {
    let { invite: l } = e;
    return (0, t.jsxs)(d.B, {
        gap: 32,
        children: [
            (0, t.jsxs)(d.B, {
                gap: 24,
                align: "center",
                children: [
                    (0, t.jsx)(j, { linkedGuild: l.linkedGuild }),
                    (0, t.jsx)(c.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: b.G3,
                        children: h.intl.formatToPlainString(m.default.WmxMAI, {
                            displayNoun: l.displayNoun ?? "other",
                        }),
                    }),
                ],
            }),
            (0, t.jsxs)(d.B, {
                gap: 16,
                children: [
                    (0, t.jsx)(c.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: h.intl.string(m.default.yFqGy8),
                    }),
                    (0, t.jsx)("div", {
                        className: b.PX,
                        children: x.map((e) => {
                            let { key: l, message: n, img: i } = e;
                            return (0, t.jsxs)(
                                d.B,
                                {
                                    gap: 16,
                                    children: [
                                        null != i
                                            ? (0, t.jsx)("img", { src: i, alt: "", className: b.XJ })
                                            : (0, t.jsx)("div", { className: b.XJ }),
                                        (0, t.jsx)(u.E, {
                                            variant: "body-md/normal",
                                            color: "text-subtle",
                                            children: h.intl.string(n),
                                        }),
                                    ],
                                },
                                l,
                            );
                        }),
                    }),
                ],
            }),
        ],
    });
}
var y = n(646514),
    N = n(177953),
    v = n(189367),
    E = n(695366),
    B = n(559106),
    S = n(289873),
    P = n(534573),
    C = n(598414);
function T(e, l) {
    let [n, t] = i.useState(null);
    return null == e || e === n ? { src: C, onError: void 0 } : { src: (0, P.Ec)(e, { size: l }), onError: () => t(e) };
}
var I = n(532049);
function k(e) {
    let { id: l, text: n, eligible: i } = e;
    return i
        ? (0, t.jsx)(u.E, { id: l, tag: "span", variant: "body-sm/medium", color: "text-subtle", children: n })
        : (0, t.jsxs)(d.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, t.jsx)(E.CircleErrorIcon, { size: "xs", color: y.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                  (0, t.jsx)(u.E, { id: l, tag: "span", variant: "body-sm/medium", color: "text-muted", children: n }),
              ],
          });
}
let z = i.memo(function (e) {
    let { character: l, noun: n } = e,
        a = i.useId(),
        r = i.useId(),
        s = i.useRef(null),
        o = !l.eligible,
        c = T(l.iconUrl, 48),
        x = l.eligible ? l.description : (l.description ?? h.intl.formatToPlainString(m.default.VNY3C1, { noun: n }));
    return (0, t.jsx)(v.A1, {
        value: l.id,
        isDisabled: o,
        "aria-labelledby": a,
        "aria-describedby": null != x ? r : void 0,
        children: (0, t.jsx)(B.vN, {
            focusTarget: s,
            ringTarget: s,
            within: !0,
            children: (0, t.jsxs)(v.a, {
                ref: s,
                className: I.Nr,
                children: [
                    (0, t.jsx)("img", { ...c, alt: "", className: I.Vw }),
                    (0, t.jsxs)(d.B, {
                        gap: 4,
                        className: I.WD,
                        children: [
                            (0, t.jsx)(u.E, {
                                id: a,
                                tag: "span",
                                variant: "body-md/semibold",
                                color: o ? "text-muted" : "text-strong",
                                children: l.name,
                            }),
                            null != x ? (0, t.jsx)(k, { id: r, text: x, eligible: l.eligible }) : null,
                        ],
                    }),
                ],
            }),
        }),
    });
});
function A(e) {
    let { characters: l, selectedCharacterId: n, onSelect: a, noun: r } = e,
        s = i.useId(),
        o = i.useMemo(() => (null != l ? [...l].sort((e, l) => Number(l.eligible) - Number(e.eligible)) : null), [l]);
    if (null == o) return (0, t.jsx)(S.y, {});
    let c = o.some((e) => !e.eligible);
    return (0, t.jsxs)(d.B, {
        gap: 12,
        children: [
            (0, t.jsx)(u.E, {
                id: s,
                variant: "body-md/medium",
                color: "text-subtle",
                className: I.DD,
                children: h.intl.formatToPlainString(m.default["Xm+emB"], { noun: r }),
            }),
            (0, t.jsx)(v.z6, {
                "aria-labelledby": s,
                value: n,
                onChange: a,
                className: I.kR,
                children: o.map((e) => (0, t.jsx)(z, { character: e, noun: r }, e.id)),
            }),
            c
                ? (0, t.jsx)(u.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: h.intl.formatToPlainString(m.default.ybJIQJ, { noun: r }),
                  })
                : null,
        ],
    });
}
var M = n(171153);
function W(e) {
    let { invite: l, noun: n, isMultiCharacter: i, characters: a, selectedCharacterId: r, onSelectCharacter: s } = e,
        { organization: o, application: x } = l,
        { memberCount: g, maxMembers: p } = o,
        j = T(o.iconUrl, 64);
    return (0, t.jsxs)(d.B, {
        gap: 32,
        children: [
            (0, t.jsxs)(d.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, t.jsx)("img", { ...j, alt: "", className: M.H }),
                    (0, t.jsx)(c.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: M.G,
                        children: h.intl.formatToPlainString(m.default["bfJ/sO"], {
                            noun: n,
                            orgName: o.name,
                            gameName: x.name,
                        }),
                    }),
                    null != g && null != p
                        ? (0, t.jsxs)(d.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              fullWidth: !1,
                              children: [
                                  (0, t.jsx)(N.GroupIcon, { size: "xs", color: y.A.colors.ICON_MUTED }),
                                  (0, t.jsx)(u.E, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      children: h.intl.formatToPlainString(m.default.VuENGl, { count: g, max: p }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            i ? (0, t.jsx)(A, { characters: a, selectedCharacterId: r, onSelect: s, noun: n }) : null,
        ],
    });
}
var D = n(673383);
let G = ["VIEW", "ACCEPT"];
function R(e) {
    let { code: l, ...n } = e,
        d = (0, o.A)(l),
        [c, u] = i.useState("VIEW"),
        x = d?.characterMode === D.Wy.MULTI,
        { data: g } = (0, s.P)(x ? l : null),
        [p, j] = i.useState(null),
        b = g?.find((e) => e.id === p) ?? null;
    if (null == d) return null;
    let y = (0, r.A)({ displayNoun: d.displayNoun, lowercase: !0 }),
        N = h.intl.formatToPlainString(m.default["jKi+kc"], { noun: (0, r.A)({ displayNoun: d.displayNoun }) }),
        v = [
            {
                stepKey: "VIEW",
                modalProps: { title: N },
                body: (0, t.jsx)(W, {
                    invite: d,
                    noun: y,
                    isMultiCharacter: x,
                    characters: g,
                    selectedCharacterId: p,
                    onSelectCharacter: j,
                }),
                nextEnabled: !x || b?.eligible === !0,
                nextButtonProps: { text: h.intl.string(h.t["3PatSz"]) },
            },
            {
                stepKey: "ACCEPT",
                modalProps: { title: N },
                body: (0, t.jsx)(f, { invite: d }),
                nextButtonProps: { text: h.intl.string(m.default.BaZ6nt) },
            },
            { stepKey: "OUTCOME", modalProps: { title: N }, hideBackButton: !0 },
        ];
    return (0, t.jsx)(a.t, { ...n, steps: v, currentStepKey: c, numberedSteps: G, onStepChange: u });
}
