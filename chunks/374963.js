l.d(t, { A: () => L });
var n = l(627968),
    i = l(64700),
    a = l(111956),
    s = l.n(a),
    C = l(33851),
    r = l.n(C),
    o = l(136722),
    d = l(417597),
    c = l(192308),
    u = l(534514),
    m = l(892547),
    h = l(265872),
    x = l(821609),
    g = l(112173),
    H = l(576705),
    _ = l(504049),
    p = l(266047),
    f = l(221950),
    j = l(289687),
    b = l(779662),
    A = l(818348),
    v = l(985018),
    V = l(825706);
let L = i.forwardRef(function (e, t) {
    let { guild: l } = e,
        a = i.useRef(null),
        C = (0, d.bG)([p.A], () => p.A.hasDefaultSearchStateByGuildId(l.id), [l.id]),
        L = (0, d.bG)([H.A], () => H.A.can(o.kg(A.xB.MANAGE_GUILD, A.xB.KICK_MEMBERS), l)),
        D = i.useCallback(() => {
            null != l && L && (0, c.openModalLazy)(async () => (e) => (0, n.jsx)(j.A, { ...e, guild: l }));
        }, [l, L]),
        R = (0, d.bG)([p.A], () => p.A.getSearchStateByGuildId(l.id), [l.id], r()),
        M = (0, _.Ks)(l.id),
        [E, N] = i.useState(R.query),
        I = i.useCallback(
            (e) => {
                let t = e.trim();
                t.length > 0 && M(), (0, f.Ld)(l.id, { query: t });
            },
            [l.id, M],
        ),
        S = i.useMemo(() => s()(I, 300), [I]),
        y = i.useCallback(
            (e) => {
                N(e), S(e);
            },
            [S],
        ),
        Z = i.useCallback(() => {
            N(""), I("");
        }, [I]);
    return (
        i.useImperativeHandle(t, () => ({
            resetSearchText() {
                N("");
            },
        })),
        (0, n.jsxs)("div", {
            className: V.db,
            children: [
                (0, n.jsx)("div", {
                    className: V.wL,
                    children: C
                        ? (0, n.jsx)(u.D, { variant: "heading-md/medium", children: v.intl.string(v.t.y12ALM) })
                        : (0, n.jsx)(u.D, { variant: "heading-md/medium", children: v.intl.string(v.t.BUqwK8) }),
                }),
                (0, n.jsx)("div", {
                    className: V.Rt,
                    children: (0, n.jsx)("div", {
                        className: V.wL,
                        children: (0, n.jsx)(m.I, {
                            size: "sm",
                            query: E,
                            placeholder: v.intl.string(v.t["NVoAM+"]),
                            onChange: y,
                            onClear: Z,
                            autoComplete: "off",
                            inputProps: { autoCapitalize: "none", autoCorrect: "off", spellCheck: "false" },
                        }),
                    }),
                }),
                (0, n.jsx)("div", {
                    children: (0, n.jsx)(h.Y, {
                        targetElementRef: a,
                        animation: h.Y.Animation.FADE,
                        position: "bottom",
                        spacing: 4,
                        align: "left",
                        renderPopout: () => (0, n.jsx)(b.default, { guildId: l.id, onClose: void 0 }),
                        children: (e) => {
                            let { onClick: t, ...l } = e;
                            return (0, n.jsx)(x.$, {
                                ...l,
                                buttonRef: a,
                                text: v.intl.string(v.t.XvNMNk),
                                onClick: t,
                                size: "sm",
                                variant: "secondary",
                                icon: g.J,
                            });
                        },
                    }),
                }),
                (0, n.jsx)("div", {
                    className: V.nw,
                    children:
                        L &&
                        (0, n.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: V.__invalid_pruneButton,
                            children: (0, n.jsx)(x.$, {
                                variant: "critical-secondary",
                                size: "sm",
                                text: v.intl.string(v.t["2mIlKQ"]),
                                onClick: D,
                                "aria-label": v.intl.string(v.t.zbyz7p),
                            }),
                        }),
                }),
            ],
        })
    );
});
