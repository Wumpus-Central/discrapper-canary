n.d(t, { $: () => O }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(348327),
    s = n.n(o),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    p = n(584973),
    h = n(906605),
    f = n(106301),
    m = n(833858),
    g = n(17030),
    b = n(505905),
    y = n(231338),
    _ = n(388032),
    C = n(787267),
    v = n(334405);
function x(e) {
    let { label: t, icon: n, isSelected: l = !1, setStatus: o, clearStatus: s } = e,
        [c, p] = i.useState(!1),
        h = c && l,
        f = h ? _.intl.string(_.t.S90Fub) : t,
        m = i.useCallback(() => {
            h ? s() : o();
        }, [h, s, o]);
    return (0, r.jsxs)(d.P3F, {
        onClick: m,
        onMouseEnter: () => {
            p(!0);
        },
        onMouseLeave: () => {
            p(!1);
        },
        className: a()(v.item, v.labelContainer, C.item, { [C.isSelected]: l }),
        children: [
            n,
            (0, r.jsx)(d.Text, {
                color: h ? "text-danger" : "text-secondary",
                variant: "text-md/medium",
                className: C.itemText,
                children: f,
            }),
            l &&
                (0, r.jsx)(d.k$p, {
                    className: C.closeIcon,
                    color: h ? u.Z.colors.TEXT_DANGER : void 0,
                }),
        ],
    });
}
function O(e) {
    var t, n;
    let { setPopoutRef: l } = e,
        o = i.useRef(null),
        u = (0, c.e7)([f.Z], () => f.Z.getCustomHangStatus()),
        O = i.useRef(f.Z.getRecentCustomStatuses()),
        j = (0, m.V)(),
        E = i.useRef(null),
        [S, I] = i.useState(null != (t = null == u ? void 0 : u.status) ? t : ""),
        [P, Z] = i.useState(null != (n = null == u ? void 0 : u.emoji) ? n : null),
        T = (0, c.e7)([f.Z], () => f.Z.getCurrentHangStatus());
    i.useEffect(() => {
        var e;
        (null == T || T === y.tN.CUSTOM) && (null == (e = o.current) || e.focus());
    }, [T]),
        i.useEffect(() => {
            null == l || l(null == E ? void 0 : E.current);
        }, [E, l]),
        i.useEffect(() => {
            (null == u ? void 0 : u.emoji) != null && null != u.status ? (I(u.status), Z(u.emoji)) : (I(""), Z(null));
        }, [u]);
    let N = i.useCallback(
            (e) => {
                e !== T && (0, h.Zx)(e, !0);
            },
            [T],
        ),
        A = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == u ? void 0 : u.emoji) && n === (null == u ? void 0 : u.status)) ||
                    (0, h._s)(e.status, e.emoji, !0);
            },
            [null == u ? void 0 : u.emoji, null == u ? void 0 : u.status],
        ),
        w = i.useCallback(
            (e) => {
                e.preventDefault(),
                    null != S &&
                        null != P &&
                        "" !== S.trim() &&
                        A({
                            status: S,
                            emoji: P,
                        });
            },
            [S, P, A],
        );
    return (0, r.jsxs)("div", {
        ref: E,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(v.menu, C.container),
        children: [
            (0, r.jsxs)("div", {
                role: "group",
                className: a()(v.groupLabel, C.group),
                children: [
                    (0, r.jsx)("form", {
                        onSubmit: w,
                        className: a()(v.item, v.labelContainer),
                        children: (0, r.jsx)(d.oil, {
                            inputRef: o,
                            value: S,
                            onChange: (e) => I(e.substring(0, b.s)),
                            placeholder: _.intl.string(_.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(g.A, {
                                    customStatusEmoji: P,
                                    setCustomStatusEmoji: Z,
                                }),
                            },
                        }),
                    }),
                    Object.entries(j).map((e) => {
                        let [t, n] = e;
                        return (0, r.jsx)(
                            x,
                            {
                                isSelected: T === t,
                                label: n.title,
                                icon: (0, r.jsx)("img", {
                                    src: n.icon,
                                    alt: "",
                                }),
                                setStatus: () => N(t),
                                clearStatus: () => (0, h.Sc)(!1),
                            },
                            n.title,
                        );
                    }),
                ],
            }),
            O.current.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            role: "separator",
                            className: C.separator,
                        }),
                        (0, r.jsx)("div", {
                            role: "group",
                            className: a()(v.groupLabel, C.group),
                            children: O.current.map((e, t) =>
                                (0, r.jsx)(
                                    x,
                                    {
                                        isSelected:
                                            s()(null == u ? void 0 : u.emoji, e.emoji) &&
                                            (null == u ? void 0 : u.status) === e.status,
                                        label: e.status,
                                        icon:
                                            null != e.emoji &&
                                            (0, r.jsx)(p.Z, {
                                                emoji: e.emoji,
                                                hideTooltip: !0,
                                                className: C.icon,
                                            }),
                                        setStatus: () => A(e),
                                        clearStatus: () => (0, h.Sc)(!1),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
        ],
    });
}
