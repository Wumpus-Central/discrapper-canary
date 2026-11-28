l.d(t, { default: () => J });
var n = l(477900),
    r = l(582128),
    i = l(189213),
    a = l(331322),
    s = l(404778),
    o = l(347704),
    c = l(664947),
    d = l(674008),
    u = l(674725),
    m = l(192308),
    g = l(673383),
    h = l(534514),
    x = l(834730),
    f = l(682163),
    p = l(792996),
    j = l(393612);
function b(e) {
    let { linkedGuild: t } = e,
        { id: l, name: i, icon: s, presenceCount: o, memberCount: c } = t,
        d = r.useMemo(() => ({ id: l, name: i, icon: s, features: [] }), [l, i, s]);
    return (0, n.jsx)("div", {
        className: j.Nr,
        children: (0, n.jsxs)(a.B, {
            direction: "horizontal",
            align: "center",
            gap: 16,
            children: [
                (0, n.jsx)(f.Ay, { guild: d, size: f.Ay.Sizes.LARGER, className: j.Kk, "aria-hidden": !0 }),
                (0, n.jsxs)(a.B, {
                    gap: 4,
                    className: j.pq,
                    children: [
                        (0, n.jsx)(x.E, {
                            variant: "body-lg/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            children: i,
                        }),
                        (0, n.jsxs)(a.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 16,
                            wrap: !0,
                            children: [
                                null != o
                                    ? (0, n.jsxs)(a.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, n.jsx)("span", { className: j.RS }),
                                              (0, n.jsx)(x.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: p.intl.formatToPlainString(p.t["LC+S+m"], {
                                                      membersOnline: o,
                                                  }),
                                              }),
                                          ],
                                      })
                                    : null,
                                null != c
                                    ? (0, n.jsxs)(a.B, {
                                          direction: "horizontal",
                                          align: "center",
                                          gap: 6,
                                          fullWidth: !1,
                                          children: [
                                              (0, n.jsx)("span", { className: j.Ps }),
                                              (0, n.jsx)(x.E, {
                                                  variant: "body-md/medium",
                                                  color: "text-muted",
                                                  children: p.intl.formatToPlainString(p.t.zRl6XR, { count: c }),
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
var N = l(503698),
    y = l.n(N),
    v = l(333007),
    S = l(559106),
    T = l(516521),
    I = l(939249),
    P = l(958583),
    B = l(909639),
    C = l(652180),
    E = l(561193);
let z = { top: -4, right: 4, bottom: -4, left: 20 };
function M(e) {
    let { displayNoun: t } = e,
        l = r.useRef(null),
        i = r.useRef([]),
        s = r.useRef(null),
        o = r.useRef(null),
        c = r.useRef(void 0),
        [d, u] = r.useState(0),
        [m, g] = r.useState("idle");
    function h(e, t) {
        let l = i.current[0],
            n = i.current[t];
        return null == l || null == n ? null : Math.min(n.offsetLeft - l.offsetLeft, e.scrollWidth - e.clientWidth);
    }
    function f(e) {
        let t = 0,
            l = 1 / 0;
        return (
            B.G.forEach((n, r) => {
                let i = h(e, r);
                if (null == i) return;
                let a = Math.abs(i - e.scrollLeft);
                a <= l && ((t = r), (l = a));
            }),
            t
        );
    }
    function j() {
        (window.clearTimeout(c.current), (o.current = null), g("idle"));
    }
    return (
        r.useEffect(() => () => window.clearTimeout(c.current), []),
        (0, n.jsxs)(a.B, {
            gap: 16,
            children: [
                (0, n.jsx)(S.vN, {
                    offset: z,
                    children: (0, n.jsx)(T.zC, {
                        ref: l,
                        orientation: "horizontal",
                        className: y()(E.XG, { [E.cB]: "dragging" === m, [E.Ni]: "settling" === m }),
                        role: "region",
                        "aria-label": p.intl.string(C.default.Tt5YbA),
                        tabIndex: 0,
                        onScroll: function () {
                            let e = l.current?.getScrollerNode();
                            null != e && (u(f(e)), null != o.current && 1 > Math.abs(e.scrollLeft - o.current) && j());
                        },
                        onPointerDown: function (e) {
                            let t = l.current?.getScrollerNode();
                            "mouse" === e.pointerType &&
                                0 === e.button &&
                                null != t &&
                                (e.currentTarget.setPointerCapture(e.pointerId),
                                (s.current = {
                                    pointerId: e.pointerId,
                                    startX: e.clientX,
                                    startScrollLeft: t.scrollLeft,
                                    startIndex: f(t),
                                }),
                                j(),
                                g("dragging"));
                        },
                        onPointerMove: function (e) {
                            let t = s.current,
                                n = l.current?.getScrollerNode();
                            t?.pointerId === e.pointerId &&
                                null != n &&
                                (n.scrollLeft = t.startScrollLeft - (e.clientX - t.startX));
                        },
                        onLostPointerCapture: function (e) {
                            let t = s.current,
                                n = l.current?.getScrollerNode();
                            if (t?.pointerId !== e.pointerId || null == n) return;
                            s.current = null;
                            let r = f(n),
                                i = n.scrollLeft - t.startScrollLeft;
                            r === t.startIndex &&
                                Math.abs(i) > 40 &&
                                (r = Math.min(Math.max(r + Math.sign(i), 0), B.G.length - 1));
                            let a = h(n, r);
                            null == a || 1 > Math.abs(n.scrollLeft - a)
                                ? g("idle")
                                : ((0, v.flushSync)(() => g("settling")),
                                  (o.current = a),
                                  (c.current = window.setTimeout(j, 1e3)),
                                  n.scrollTo({ left: a }));
                        },
                        onDragStart: (e) => e.preventDefault(),
                        children: (0, n.jsx)("ul", {
                            className: E.kR,
                            children: B.G.map((e, l) => {
                                let { key: r, message: a } = e,
                                    s = P.F[r];
                                return (0, n.jsxs)(
                                    "li",
                                    {
                                        ref: (e) => {
                                            i.current[l] = e;
                                        },
                                        className: E.Nr,
                                        children: [
                                            (0, n.jsx)(s, { alt: "", ariaHidden: !0, width: "100%" }),
                                            (0, n.jsx)(x.E, {
                                                variant: "body-sm/medium",
                                                color: "text-subtle",
                                                children: p.intl.formatToPlainString(a, { displayNoun: t ?? "other" }),
                                            }),
                                        ],
                                    },
                                    r,
                                );
                            }),
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: E.r$,
                    children: B.G.map((e, t) => {
                        let { key: r } = e;
                        return (0, n.jsx)(
                            I.D,
                            {
                                className: y()(E.Om, { [E.o]: t === d }),
                                "aria-label": p.intl.formatToPlainString(p.t["2SXOrM"], { pageNumber: t + 1 }),
                                "aria-current": t === d || void 0,
                                onClick: () =>
                                    (function (e) {
                                        let t = l.current?.getScrollerNode();
                                        if (null == t) return;
                                        let n = h(t, e);
                                        null != n && t.scrollTo({ left: n });
                                    })(t),
                            },
                            r,
                        );
                    }),
                }),
            ],
        })
    );
}
var k = l(291848),
    w = l(785952);
function A(e) {
    let { invite: t, hideBenefitsHeading: l = !1 } = e;
    return (0, n.jsxs)(a.B, {
        gap: 32,
        children: [
            (0, n.jsxs)(a.B, {
                gap: 24,
                align: "center",
                children: [
                    (0, n.jsx)(h.D, {
                        variant: "heading-md/semibold",
                        color: "text-subtle",
                        className: w.G,
                        children: p.intl.formatToPlainString(k.default.WmxMAI, {
                            displayNoun: t.displayNoun ?? "other",
                        }),
                    }),
                    (0, n.jsx)(b, { linkedGuild: t.linkedGuild }),
                ],
            }),
            (0, n.jsxs)(a.B, {
                gap: 16,
                children: [
                    !l &&
                        (0, n.jsx)(h.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: p.intl.string(C.default.Tt5YbA),
                        }),
                    (0, n.jsx)(M, { displayNoun: t.displayNoun }),
                ],
            }),
        ],
    });
}
var L = l(646514),
    D = l(177953),
    G = l(189367),
    R = l(695366),
    _ = l(289873),
    W = l(892672),
    X = l(532049);
function U(e) {
    let { id: t, text: l, eligible: r } = e;
    return r
        ? (0, n.jsx)(x.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-subtle", children: l })
        : (0, n.jsxs)(a.B, {
              direction: "horizontal",
              align: "center",
              gap: 4,
              children: [
                  (0, n.jsx)(R.CircleErrorIcon, { size: "xs", color: L.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                  (0, n.jsx)(x.E, { id: t, tag: "span", variant: "body-sm/medium", color: "text-muted", children: l }),
              ],
          });
}
let K = r.memo(function (e) {
    let { character: t, displayNoun: l } = e,
        i = r.useId(),
        s = r.useId(),
        o = r.useRef(null),
        c = !t.eligible,
        d = t.eligible
            ? t.description
            : (t.description ?? p.intl.formatToPlainString(k.default.VNY3C1, { displayNoun: l ?? "other" }));
    return (0, n.jsx)(G.A1, {
        value: t.id,
        isDisabled: c,
        "aria-labelledby": i,
        "aria-describedby": null != d ? s : void 0,
        children: (0, n.jsx)(S.vN, {
            focusTarget: o,
            ringTarget: o,
            within: !0,
            children: (0, n.jsxs)(G.a, {
                ref: o,
                className: X.Nr,
                children: [
                    (0, n.jsx)(W.A, { iconUrl: t.iconUrl, size: 48, fallback: "character" }),
                    (0, n.jsxs)(a.B, {
                        gap: 4,
                        className: X.WD,
                        children: [
                            (0, n.jsx)(x.E, {
                                id: i,
                                tag: "span",
                                variant: "body-md/semibold",
                                color: c ? "text-muted" : "text-strong",
                                children: t.name,
                            }),
                            null != d ? (0, n.jsx)(U, { id: s, text: d, eligible: t.eligible }) : null,
                        ],
                    }),
                ],
            }),
        }),
    });
});
function O(e) {
    let { characters: t, selectedCharacterId: l, onSelect: i, displayNoun: s } = e,
        o = r.useId(),
        c = r.useMemo(() => (null != t ? [...t].sort((e, t) => Number(t.eligible) - Number(e.eligible)) : null), [t]);
    if (null == c) return (0, n.jsx)(_.y, {});
    let d = c.some((e) => !e.eligible);
    return (0, n.jsxs)(a.B, {
        gap: 12,
        children: [
            (0, n.jsx)(x.E, {
                id: o,
                variant: "body-md/medium",
                color: "text-subtle",
                className: X.DD,
                children: p.intl.formatToPlainString(k.default["Xm+emB"], { displayNoun: s ?? "other" }),
            }),
            (0, n.jsx)(G.z6, {
                "aria-labelledby": o,
                value: l,
                onChange: i,
                className: X.kR,
                children: c.map((e) => (0, n.jsx)(K, { character: e, displayNoun: s }, e.id)),
            }),
            d
                ? (0, n.jsx)(x.E, {
                      variant: "body-sm/normal",
                      color: "text-muted",
                      children: p.intl.formatToPlainString(k.default.ybJIQJ, { displayNoun: s ?? "other" }),
                  })
                : null,
        ],
    });
}
var V = l(171153);
function Y(e) {
    let { invite: t, isMultiCharacter: l, characters: r, selectedCharacterId: i, onSelectCharacter: s } = e,
        { displayNoun: o, organization: c, application: d } = t,
        { memberCount: u, maxMembers: m } = c;
    return (0, n.jsxs)(a.B, {
        gap: 32,
        children: [
            (0, n.jsxs)(a.B, {
                gap: 16,
                align: "center",
                children: [
                    (0, n.jsx)(W.A, { iconUrl: c.iconUrl, size: 64, fallback: "guild" }),
                    (0, n.jsxs)(a.B, {
                        gap: 8,
                        align: "center",
                        children: [
                            (0, n.jsx)(h.D, {
                                variant: "heading-xl/semibold",
                                color: "text-subtle",
                                className: V.G,
                                children: p.intl.format(k.default.gptW7Y, {
                                    displayNoun: o ?? "other",
                                    orgName: c.name,
                                    gameName: d.name,
                                    orgNameHook: (e, t) =>
                                        (0, n.jsx)(
                                            x.E,
                                            {
                                                tag: "span",
                                                variant: "heading-xl/semibold",
                                                color: "text-strong",
                                                children: e,
                                            },
                                            t,
                                        ),
                                }),
                            }),
                            null != u && null != m
                                ? (0, n.jsxs)(a.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 4,
                                      fullWidth: !1,
                                      children: [
                                          (0, n.jsx)(D.GroupIcon, { size: "xs", color: L.A.colors.ICON_MUTED }),
                                          (0, n.jsx)(x.E, {
                                              variant: "body-md/medium",
                                              color: "text-subtle",
                                              children: p.intl.formatToPlainString(k.default.VuENGl, {
                                                  count: u,
                                                  max: m,
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
            l ? (0, n.jsx)(O, { characters: r, selectedCharacterId: i, onSelect: s, displayNoun: o }) : null,
        ],
    });
}
let H = ["VIEW", "ACCEPT"];
function J(e) {
    let { code: t, ...h } = e,
        x = (0, u.A)(t),
        [f, j] = r.useState("VIEW"),
        b = x?.characterMode === g.Wy.MULTI,
        { data: N } = (0, d.P)(b ? t : null),
        [y, v] = r.useState(null),
        S = N?.find((e) => e.id === y) ?? null,
        [T, I] = r.useState(!1),
        [P, B] = r.useState(!1);
    if (null == x) return null;
    async function C(e) {
        I(!0);
        try {
            var r;
            let {
                game_organization_join_status: i,
                game_organization_join_failure_reason: a,
                guild_join_status: s,
            } = await c.A.acceptGameOrganizationInvite(t, e?.id);
            ((r = { joinStatus: i, failureReason: a, guildJoinStatus: s, character: e }),
                (0, m.mM)(
                    async () => {
                        let { default: e } = await Promise.all([l.e(525189), l.e(490279)]).then(l.bind(l, 253914));
                        return (l) => (0, n.jsx)(e, { code: t, result: r, ...l });
                    },
                    { modalKey: g.Vi },
                ));
        } catch (e) {
            throw (I(!1), e);
        }
        return !0;
    }
    let E = p.intl.formatToPlainString(k.default["jKi+kc"], { displayNoun: x.displayNoun ?? "other" }),
        z = p.intl.string(k.default.BaZ6nt),
        M = (0, n.jsx)(Y, {
            invite: x,
            isMultiCharacter: b,
            characters: N,
            selectedCharacterId: y,
            onSelectCharacter: v,
        });
    if (!b)
        return (0, n.jsx)(i.a, {
            ...h,
            title: E,
            dismissable: !T,
            notice: P ? { message: p.intl.string(p.t["rTU7/z"]), type: "critical", role: "alert" } : void 0,
            actions: [
                {
                    text: z,
                    variant: "primary",
                    loading: T,
                    onClick: async function () {
                        B(!1);
                        try {
                            (await C(null), h.onClose());
                        } catch {
                            B(!0);
                        }
                    },
                },
            ],
            children: (0, n.jsxs)(a.B, {
                gap: 32,
                children: [M, (0, n.jsx)(s.c, {}), (0, n.jsx)(A, { invite: x, hideBenefitsHeading: !0 })],
            }),
        });
    let w = [
        {
            stepKey: "VIEW",
            modalProps: { title: E },
            body: M,
            nextEnabled: S?.eligible === !0,
            nextButtonProps: { text: p.intl.string(p.t["3PatSz"]) },
        },
        {
            stepKey: "ACCEPT",
            modalProps: { title: E },
            body: (0, n.jsx)(A, { invite: x }),
            nextButtonProps: { text: z },
            onNext: () => C(S),
            backButtonProps: { text: p.intl.string(p.t["13/7kX"]), disabled: T },
        },
    ];
    return (0, n.jsx)(o.t, { ...h, dismissable: !T, steps: w, currentStepKey: f, numberedSteps: H, onStepChange: j });
}
