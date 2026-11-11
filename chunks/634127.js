n.d(l, { default: () => G });
var t = n(477900),
    i = n(582128),
    a = n(347704),
    r = n(664947),
    s = n(124077),
    o = n(674008),
    d = n(674725),
    c = n(192308),
    u = n(673383),
    m = n(331322),
    x = n(534514),
    g = n(834730),
    h = n(752222);
let j = [
    { key: "auto-sync", message: h.default.WUVzdk },
    { key: "linked-channel", message: h.default.MEQJ1m },
];
var p = n(682163),
    b = n(792996),
    f = n(393612);
function y(e) {
    let { linkedGuild: l } = e,
        { id: n, name: a, icon: r, presenceCount: s, memberCount: o } = l,
        d = i.useMemo(() => ({ id: n, name: a, icon: r, features: [] }), [n, a, r]);
    return (0, t.jsx)("div", {
        className: f.Nr,
        children: (0, t.jsxs)(m.B, {
            direction: "horizontal",
            align: "center",
            gap: 16,
            children: [
                (0, t.jsx)(p.Ay, { guild: d, size: p.Ay.Sizes.LARGER, className: f.Kk, "aria-hidden": !0 }),
                (0, t.jsxs)(m.B, {
                    gap: 4,
                    className: f.pq,
                    children: [
                        (0, t.jsx)(g.E, {
                            variant: "body-lg/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: a,
                        }),
                        (0, t.jsxs)(m.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 16,
                            wrap: !0,
                            children: [
                                null != s
                                    ? (0, t.jsxs)(m.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, t.jsx)("span", { className: f.RS }),
                                              (0, t.jsx)(g.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: b.intl.formatToPlainString(b.t["LC+S+m"], {
                                                      membersOnline: s,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != o
                                    ? (0, t.jsxs)(m.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, t.jsx)("span", { className: f.Ps }),
                                              (0, t.jsx)(g.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: b.intl.formatToPlainString(b.t.zRl6XR, { count: o }),
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
var N = n(785952);
function v(e) {
    let { invite: l } = e;
    return (0, t.jsxs)(m.B, {
        gap: 32,
        children: [
            (0, t.jsxs)(m.B, {
                gap: 24,
                align: "center",
                children: [
                    (0, t.jsx)(y, { linkedGuild: l.linkedGuild }),
                    (0, t.jsx)(x.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: N.G3,
                        children: b.intl.formatToPlainString(h.default.WmxMAI, {
                            displayNoun: l.displayNoun ?? "other",
                        }),
                    }),
                ],
            }),
            (0, t.jsxs)(m.B, {
                gap: 16,
                children: [
                    (0, t.jsx)(x.D, {
                        variant: "heading-md/semibold",
                        color: "text-strong",
                        children: b.intl.string(h.default.yFqGy8),
                    }),
                    (0, t.jsx)("div", {
                        className: N.PX,
                        children: j.map((e) => {
                            let { key: l, message: n, img: i } = e;
                            return (0, t.jsxs)(
                                m.B,
                                {
                                    gap: 16,
                                    children: [
                                        null != i
                                            ? (0, t.jsx)("img", { src: i, alt: "", className: N.XJ })
                                            : (0, t.jsx)("div", { className: N.XJ }),
                                        (0, t.jsx)(g.E, {
                                            variant: "body-md/normal",
                                            color: "text-subtle",
                                            children: b.intl.string(n),
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
var E = n(646514),
    S = n(177953),
    B = n(189367),
    P = n(695366),
    z = n(559106),
    C = n(289873),
    I = n(378763),
    T = n(532049);
function k(e) {
    let { id: l, text: n, eligible: i } = e;
    return i
        ? (0, t.jsx)(g.E, { id: l, tag: "span", variant: "body-sm/medium", color: "text-subtle", children: n })
        : (0, t.jsxs)(m.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, t.jsx)(P.CircleErrorIcon, { size: "xs", color: E.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                  (0, t.jsx)(g.E, { id: l, tag: "span", variant: "body-sm/medium", color: "text-muted", children: n }),
              ],
          });
}
let A = i.memo(function (e) {
    let { character: l, noun: n } = e,
        a = i.useId(),
        r = i.useId(),
        s = i.useRef(null),
        o = !l.eligible,
        d = l.eligible ? l.description : (l.description ?? b.intl.formatToPlainString(h.default.VNY3C1, { noun: n }));
    return (0, t.jsx)(B.A1, {
        value: l.id,
        isDisabled: o,
        "aria-labelledby": a,
        "aria-describedby": null != d ? r : void 0,
        children: (0, t.jsx)(z.vN, {
            focusTarget: s,
            ringTarget: s,
            within: !0,
            children: (0, t.jsxs)(B.a, {
                ref: s,
                className: T.Nr,
                children: [
                    (0, t.jsx)(I.A, { iconUrl: l.iconUrl, size: 48, className: T.Vw }),
                    (0, t.jsxs)(m.B, {
                        gap: 4,
                        className: T.WD,
                        children: [
                            (0, t.jsx)(g.E, {
                                id: a,
                                tag: "span",
                                variant: "body-md/semibold",
                                color: o ? "text-muted" : "text-strong",
                                children: l.name,
                            }),
                            null != d ? (0, t.jsx)(k, { id: r, text: d, eligible: l.eligible }) : null,
                        ],
                    }),
                ],
            }),
        }),
    });
});
function _(e) {
    let { characters: l, selectedCharacterId: n, onSelect: a, noun: r } = e,
        s = i.useId(),
        o = i.useMemo(() => (null != l ? [...l].sort((e, l) => Number(l.eligible) - Number(e.eligible)) : null), [l]);
    if (null == o) return (0, t.jsx)(C.y, {});
    let d = o.some((e) => !e.eligible);
    return (0, t.jsxs)(m.B, {
        gap: 12,
        children: [
            (0, t.jsx)(g.E, {
                id: s,
                variant: "body-md/medium",
                color: "text-subtle",
                className: T.DD,
                children: b.intl.formatToPlainString(h.default["Xm+emB"], { noun: r }),
            }),
            (0, t.jsx)(B.z6, {
                "aria-labelledby": s,
                value: n,
                onChange: a,
                className: T.kR,
                children: o.map((e) => (0, t.jsx)(A, { character: e, noun: r }, e.id)),
            }),
            d
                ? (0, t.jsx)(g.E, {
                      variant: "body-sm/medium",
                      color: "text-subtle",
                      children: b.intl.formatToPlainString(h.default.ybJIQJ, { noun: r }),
                  })
                : null,
        ],
    });
}
var M = n(171153);
function W(e) {
    let { invite: l, noun: n, isMultiCharacter: i, characters: a, selectedCharacterId: r, onSelectCharacter: s } = e,
        { organization: o, application: d } = l,
        { memberCount: c, maxMembers: u } = o;
    return (0, t.jsxs)(m.B, {
        gap: 32,
        children: [
            (0, t.jsxs)(m.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, t.jsx)(I.A, { iconUrl: o.iconUrl, size: 64, className: M.H }),
                    (0, t.jsx)(x.D, {
                        variant: "heading-xl/semibold",
                        color: "text-strong",
                        className: M.G,
                        children: b.intl.formatToPlainString(h.default["bfJ/sO"], {
                            noun: n,
                            orgName: o.name,
                            gameName: d.name,
                        }),
                    }),
                    null != c && null != u
                        ? (0, t.jsxs)(m.B, {
                              direction: "horizontal",
                              align: "center",
                              gap: 4,
                              fullWidth: !1,
                              children: [
                                  (0, t.jsx)(S.GroupIcon, { size: "xs", color: E.A.colors.ICON_MUTED }),
                                  (0, t.jsx)(g.E, {
                                      variant: "body-md/medium",
                                      color: "text-default",
                                      children: b.intl.formatToPlainString(h.default.VuENGl, { count: c, max: u }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            i ? (0, t.jsx)(_, { characters: a, selectedCharacterId: r, onSelect: s, noun: n }) : null,
        ],
    });
}
let D = ["VIEW", "ACCEPT"];
function G(e) {
    let { code: l, ...m } = e,
        x = (0, d.A)(l),
        [g, j] = i.useState("VIEW"),
        p = x?.characterMode === u.Wy.MULTI,
        { data: f } = (0, o.P)(p ? l : null),
        [y, N] = i.useState(null),
        E = f?.find((e) => e.id === y) ?? null,
        [S, B] = i.useState(!1);
    if (null == x) return null;
    let P = (0, s.A)({ displayNoun: x.displayNoun, lowercase: !0 }),
        z = b.intl.formatToPlainString(h.default["jKi+kc"], { noun: (0, s.A)({ displayNoun: x.displayNoun }) }),
        C = [
            {
                stepKey: "VIEW",
                modalProps: { title: z },
                body: (0, t.jsx)(W, {
                    invite: x,
                    noun: P,
                    isMultiCharacter: p,
                    characters: f,
                    selectedCharacterId: y,
                    onSelectCharacter: N,
                }),
                nextEnabled: !p || E?.eligible === !0,
                nextButtonProps: { text: b.intl.string(b.t["3PatSz"]) },
            },
            {
                stepKey: "ACCEPT",
                modalProps: { title: z },
                body: (0, t.jsx)(v, { invite: x }),
                nextButtonProps: { text: b.intl.string(h.default.BaZ6nt) },
                onNext: async function () {
                    let e = p ? E : null;
                    B(!0);
                    try {
                        var i;
                        let {
                            game_organization_join_status: a,
                            game_organization_join_failure_reason: s,
                            guild_join_status: o,
                        } = await r.A.acceptGameOrganizationInvite(l, e?.id);
                        ((i = { joinStatus: a, failureReason: s, guildJoinStatus: o, character: e }),
                            (0, c.mM)(
                                async () => {
                                    let { default: e } = await n.e(172470).then(n.bind(n, 543637));
                                    return (n) => (0, t.jsx)(e, { code: l, result: i, ...n });
                                },
                                { modalKey: u.Vi },
                            ));
                    } finally {
                        B(!1);
                    }
                    return !0;
                },
                backButtonProps: { text: b.intl.string(b.t["13/7kX"]), disabled: S },
            },
        ];
    return (0, t.jsx)(a.t, { ...m, dismissable: !S, steps: C, currentStepKey: g, numberedSteps: D, onStepChange: j });
}
