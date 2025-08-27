n.d(t, { $: () => S }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(348327),
    s = n.n(o),
    c = n(392711),
    u = n(442837),
    d = n(692547),
    p = n(481060),
    h = n(584973),
    f = n(339085),
    m = n(906605),
    g = n(106301),
    b = n(833858),
    y = n(866071),
    _ = n(17030),
    C = n(505905),
    v = n(231338),
    x = n(388032),
    O = n(787267),
    j = n(334405);
function E(e) {
    let { label: t, icon: n, isSelected: l = !1, setStatus: o, clearStatus: s } = e,
        [c, u] = i.useState(!1),
        h = c && l,
        f = h ? x.intl.string(x.t.S90Fub) : t,
        m = i.useCallback(() => {
            h ? s() : o();
        }, [h, s, o]);
    return (0, r.jsxs)(p.P3F, {
        onClick: m,
        onMouseEnter: () => {
            u(!0);
        },
        onMouseLeave: () => {
            u(!1);
        },
        className: a()(j.item, j.labelContainer, O.item, { [O.isSelected]: l }),
        children: [
            n,
            (0, r.jsx)(p.Text, {
                color: h ? "text-danger" : "text-secondary",
                variant: "text-md/medium",
                className: O.itemText,
                children: f,
            }),
            l &&
                (0, r.jsx)(p.k$p, {
                    className: O.closeIcon,
                    color: h ? d.Z.colors.TEXT_DANGER : void 0,
                }),
        ],
    });
}
function S(e) {
    var t, n;
    let { channel: l, setPopoutRef: o } = e,
        d = i.useRef(null),
        S = (0, u.e7)([g.Z], () => g.Z.getCustomHangStatus()),
        I = i.useRef(g.Z.getRecentCustomStatuses()),
        P = (0, b.V)(),
        Z = i.useRef(null),
        [T, N] = i.useState(null != (t = null == S ? void 0 : S.status) ? t : ""),
        [A, w] = i.useState(null != (n = null == S ? void 0 : S.emoji) ? n : null),
        R = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()),
        M = (0, u.e7)([f.ZP], () => f.ZP.emojiFrecencyWithoutFetchingLatest.frequently),
        D = i.useMemo(() => M.filter((e) => (0, y.K)(e, l)), [M, l]);
    i.useEffect(() => {
        var e;
        (null == R || R === v.tN.CUSTOM) && (null == (e = d.current) || e.focus());
    }, [R]),
        i.useEffect(() => {
            null == o || o(null == Z ? void 0 : Z.current);
        }, [Z, o]),
        i.useEffect(() => {
            (null == S ? void 0 : S.emoji) != null && null != S.status ? (N(S.status), w(S.emoji)) : (N(""), w(null));
        }, [S]);
    let L = i.useCallback(
            (e) => {
                e !== R && (0, m.Zx)(e, !0);
            },
            [R],
        ),
        k = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == S ? void 0 : S.emoji) && n === (null == S ? void 0 : S.status)) ||
                    (0, m._s)(e.status, e.emoji, !0);
            },
            [null == S ? void 0 : S.emoji, null == S ? void 0 : S.status],
        ),
        U = i.useCallback(
            (e) => {
                e.preventDefault(),
                    null != T &&
                        null != A &&
                        "" !== T.trim() &&
                        k({
                            status: T,
                            emoji: A,
                        });
            },
            [T, A, k],
        ),
        B = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === D.length ||
                    ((t =
                        (null == (e = (0, c.sample)(D)) ? void 0 : e.id) != null
                            ? {
                                  id: e.id,
                                  name: e.name,
                                  animated: e.animated,
                              }
                            : {
                                  id: null,
                                  name: null != (n = null == e ? void 0 : e.optionallyDiverseSequence) ? n : "",
                                  animated: !1,
                              }),
                    1 === D.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(null == S ? void 0 : S.emoji, t));
            null != t &&
                (null == e ? void 0 : e.name) != null &&
                k({
                    status: e.name,
                    emoji: t,
                });
        }, [D, k, null == S ? void 0 : S.emoji]);
    return (0, r.jsxs)("div", {
        ref: Z,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(j.menu, O.container),
        children: [
            (0, r.jsxs)("div", {
                role: "group",
                className: a()(j.groupLabel, O.group),
                children: [
                    (0, r.jsx)("form", {
                        onSubmit: U,
                        className: a()(j.item, j.labelContainer),
                        children: (0, r.jsx)(p.oil, {
                            inputRef: d,
                            value: T,
                            onChange: (e) => N(e.substring(0, C.s)),
                            placeholder: x.intl.string(x.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(_.A, {
                                    customStatusEmoji: A,
                                    setCustomStatusEmoji: w,
                                }),
                            },
                            trailing: {
                                icon: p.hh5,
                                onClick: B,
                                "aria-label": x.intl.string(x.t["5UAi5+"]),
                            },
                        }),
                    }),
                    Object.entries(P).map((e) => {
                        let [t, n] = e;
                        return (0, r.jsx)(
                            E,
                            {
                                isSelected: R === t,
                                label: n.title,
                                icon: (0, r.jsx)("img", {
                                    src: n.icon,
                                    alt: "",
                                }),
                                setStatus: () => L(t),
                                clearStatus: () => (0, m.Sc)(!1),
                            },
                            n.title,
                        );
                    }),
                ],
            }),
            I.current.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            role: "separator",
                            className: O.separator,
                        }),
                        (0, r.jsx)("div", {
                            role: "group",
                            className: a()(j.groupLabel, O.group),
                            children: I.current.map((e, t) =>
                                (0, r.jsx)(
                                    E,
                                    {
                                        isSelected:
                                            s()(null == S ? void 0 : S.emoji, e.emoji) &&
                                            (null == S ? void 0 : S.status) === e.status,
                                        label: e.status,
                                        icon:
                                            null != e.emoji &&
                                            (0, r.jsx)(h.Z, {
                                                emoji: e.emoji,
                                                hideTooltip: !0,
                                                className: O.icon,
                                            }),
                                        setStatus: () => k(e),
                                        clearStatus: () => (0, m.Sc)(!1),
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
