n.d(t, { A: () => V });
var i = n(477900),
    s = n(582128),
    l = n(855986),
    r = n(331322),
    a = n(866665),
    o = n(408278),
    c = n(477155),
    u = n(403581),
    d = n(646514),
    m = n(534514),
    f = n(805251),
    E = n(95362),
    I = n(311364),
    h = n(151271),
    g = n(465794),
    A = n(683973),
    p = n(287809),
    _ = n(474090),
    N = n(186280),
    C = n(934499),
    y = n(956396),
    x = n(503698),
    j = n.n(x),
    O = n(118057),
    S = n(834730),
    T = n(847374),
    b = n(320448),
    R = n(834040),
    v = n(499373),
    P = n(559106),
    L = n(442433),
    M = n(565645),
    D = n(915089),
    w = n(60587),
    k = n(236432),
    U = n(792996),
    G = n(126904);
let F = s.memo(function (e) {
    let {
            pack: t,
            isViewSetTarget: l,
            sectionRef: c,
            isPinned: u,
            onAddPack: d,
            onRemovePack: f,
            onSelectEmoji: E,
        } = e,
        I = s.useId(),
        h = s.useId(),
        [g, A] = s.useState(l),
        p = U.intl.string(g ? U.t.iTcuma : U.t.dcl9MQ),
        _ = U.intl.string(u ? k.default["2zxYCx"] : k.default.Tvdb5N),
        N = s.useMemo(() => t.emojis.filter((e) => e.available), [t.emojis]),
        C = s.useMemo(() => [N.length], [N.length]),
        y = (0, D.GV)(),
        {
            getContainerProps: x,
            getItemProps: F,
            getRowProps: J,
        } = (0, O.A)({
            navId: y,
            columnCounts: C,
            onSelect: (e, n, i) => {
                let s = N[e];
                null != s && t.available && E(s, e, { isFinalSelection: !i.shiftKey, toggleFavorite: i.altKey });
            },
        }),
        K = x();
    return (0, i.jsxs)("section", {
        "aria-labelledby": I,
        className: G.nM,
        ref: c,
        children: [
            (0, i.jsxs)(r.B, {
                align: "center",
                direction: "horizontal",
                gap: 4,
                justify: "space-between",
                children: [
                    (0, i.jsxs)(r.B, {
                        align: "center",
                        className: G.DD,
                        direction: "horizontal",
                        gap: 4,
                        children: [
                            (0, i.jsx)(m.D, { className: G.UU, id: I, variant: "body-sm/semibold", children: t.name }),
                            (0, i.jsx)(S.E, {
                                color: "text-subtle",
                                variant: "body-sm/medium",
                                children: U.intl.format(k.default.UA8cNe, { count: N.length }),
                            }),
                            (0, i.jsx)(a.m, {
                                text: p,
                                children: (0, i.jsx)(o.K, {
                                    autoFocus: l,
                                    "aria-controls": h,
                                    "aria-describedby": I,
                                    "aria-expanded": g,
                                    "aria-label": p,
                                    icon: g ? T.ChevronSmallDownIcon : b.ChevronSmallRightIcon,
                                    onClick: () => A((e) => !e),
                                    size: "sm",
                                    variant: "icon-only",
                                }),
                            }),
                        ],
                    }),
                    (0, i.jsx)(a.m, {
                        text: _,
                        children: (0, i.jsx)(o.K, {
                            "aria-label": _,
                            icon: u ? R.MinusIcon : v.PlusMediumIcon,
                            onClick: () => (u ? f(t) : d(t)),
                            size: "sm",
                            variant: "secondary",
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                id: h,
                ...K,
                "aria-label": t.name,
                className: j()(G.gm, { [G.jE]: g }),
                tabIndex: t.available && N.length > 0 ? K.tabIndex : -1,
                children: (0, i.jsx)("div", {
                    className: G.nI,
                    ...J(0),
                    children: N.map((e, s) => {
                        let { ref: l, ...r } = F(s, 0);
                        return (0, i.jsx)(
                            a.m,
                            {
                                text: `:${e.name}:`,
                                ariaHidden: !0,
                                asContainer: !0,
                                children: (0, i.jsx)(P.vN, {
                                    children: (0, i.jsx)("button", {
                                        ...r,
                                        ref: l,
                                        "aria-label": `:${e.name}:`,
                                        className: G.Z8,
                                        "data-type": w.g.EMOJI,
                                        "data-id": e.id,
                                        "data-name": e.name,
                                        "data-animated": e.animated ? "true" : null,
                                        disabled: !t.available,
                                        onClick: (t) => {
                                            (t.stopPropagation(),
                                                E(e, s, { isFinalSelection: !t.shiftKey, toggleFavorite: t.altKey }));
                                        },
                                        onContextMenu: (e) => {
                                            let t = e.currentTarget;
                                            (0, L.L3)(e, async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e(73500),
                                                    n.e(496715),
                                                    n.e(904774),
                                                    n.e(446132),
                                                ]).then(n.bind(n, 233503));
                                                return (n) => (0, i.jsx)(e, { ...n, target: t, showFavoriteOnly: !0 });
                                            });
                                        },
                                        type: "button",
                                        children: (0, i.jsx)(M.A, {
                                            animated: e.animated,
                                            alt: "",
                                            className: G.Zg,
                                            emojiId: e.id,
                                            emojiName: e.name,
                                        }),
                                    }),
                                }),
                            },
                            e.id,
                        );
                    }),
                }),
            }),
        ],
    });
});
var J = n(682901),
    K = n(429800);
function V(e) {
    let { onBack: t, onSelectEmoji: n } = e,
        x = U.intl.string(k.default.Nwj3fK),
        j = s.useRef(null),
        O = (0, h.RQ)((e) => e.showSelectedEmojiPackId),
        S = (0, l.bG)([y.A], () => y.A.getPacks()),
        T = null != O && S.some((e) => e.id === O),
        b = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        R = (0, _.ki)(b, J.PremiumTypes.TIER_2);
    (s.useLayoutEffect(() => {
        T &&
            (j.current?.scrollIntoView({ block: "start" }),
            j.current?.querySelector("button[aria-expanded]")?.focus({ preventScroll: !0 }));
    }, [T, O]),
        (0, N.i3)(R),
        (0, N.$W)("emoji_picker", R));
    let v = (0, A.k)().pinnedEmojiPacks?.packIds,
        P = s.useCallback((e) => {
            (0, C.Ls)(e.id);
        }, []),
        L = s.useCallback((e) => {
            (0, C.M5)(e.id);
        }, []);
    return (0, i.jsxs)("div", {
        className: K.kL,
        children: [
            (0, i.jsx)("div", { "aria-hidden": !0, className: K.Tp }),
            (0, i.jsx)("div", {
                className: K.wx,
                children: (0, i.jsxs)(r.B, {
                    align: "center",
                    direction: "horizontal",
                    gap: 8,
                    justify: "space-between",
                    wrap: !0,
                    children: [
                        (0, i.jsxs)(r.B, {
                            align: "center",
                            direction: "horizontal",
                            gap: 10,
                            fullWidth: !1,
                            children: [
                                (0, i.jsx)(a.m, {
                                    position: "right",
                                    text: x,
                                    children: (0, i.jsx)(o.K, {
                                        autoFocus: !T,
                                        "aria-label": x,
                                        icon: c.ArrowSmallLeftIcon,
                                        onClick: t,
                                        size: "sm",
                                        variant: "icon-only",
                                    }),
                                }),
                                (0, i.jsxs)(r.B, {
                                    align: "center",
                                    direction: "horizontal",
                                    gap: 4,
                                    fullWidth: !1,
                                    children: [
                                        (0, i.jsx)(u.NitroWheelIcon, { color: d.A.colors.TEXT_DEFAULT, size: "xs" }),
                                        (0, i.jsxs)(r.B, {
                                            align: "center",
                                            direction: "horizontal",
                                            gap: 8,
                                            fullWidth: !1,
                                            children: [
                                                (0, i.jsx)(m.D, {
                                                    variant: "heading-sm/semibold",
                                                    children: U.intl.string(k.default["0+5+Oy"]),
                                                }),
                                                (0, i.jsx)(f.E, { type: "beta", variant: "primary" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        R
                            ? null
                            : (0, i.jsx)(I.Y, {
                                  newLocations: [N.Vg.emoji_picker.location],
                                  children: (0, i.jsx)(g.A, {
                                      buttonTextOverride: U.intl.string(U.t.hIVbiP),
                                      size: "sm",
                                      subscriptionTier: J.pe.TIER_2,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, i.jsx)(E.d_, {
                className: K.p_,
                scrollbarGutter: !1,
                children: S.map((e, t) =>
                    (0, i.jsxs)(
                        s.Fragment,
                        {
                            children: [
                                t > 0 ? (0, i.jsx)("hr", { className: K.yF }) : null,
                                (0, i.jsx)(
                                    F,
                                    {
                                        sectionRef: e.id === O ? j : void 0,
                                        isViewSetTarget: e.id === O,
                                        isPinned: v?.includes(e.id) === !0,
                                        pack: e,
                                        onAddPack: P,
                                        onRemovePack: L,
                                        onSelectEmoji: n,
                                    },
                                    `${e.id}:${e.id === O}`,
                                ),
                            ],
                        },
                        e.id,
                    ),
                ),
            }),
        ],
    });
}
