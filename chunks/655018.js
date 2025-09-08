n.d(t, { $: () => S }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(348327),
    s = n.n(o),
    c = n(392711),
    u = n(442837),
    d = n(481060),
    p = n(584973),
    h = n(339085),
    f = n(906605),
    m = n(106301),
    g = n(833858),
    b = n(866071),
    y = n(17030),
    _ = n(295536),
    C = n(748855),
    v = n(505905),
    x = n(231338),
    O = n(388032),
    j = n(787267),
    E = n(334405);
function S(e) {
    var t, n;
    let { channel: l, setPopoutRef: o } = e,
        S = i.useRef(null),
        I = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()),
        P = i.useRef(m.Z.getRecentCustomStatuses()),
        Z = (0, g.V)(),
        T = i.useRef(null),
        [N, A] = i.useState(null != (t = null == I ? void 0 : I.status) ? t : ""),
        [w, R] = i.useState(null != (n = null == I ? void 0 : I.emoji) ? n : null),
        M = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()),
        D = (0, u.e7)([h.ZP], () => h.ZP.emojiFrecencyWithoutFetchingLatest.frequently),
        L = null == N || null == w || "" === N.trim(),
        k = i.useMemo(() => D.filter((e) => (0, b.K)(e, l)), [D, l]);
    i.useEffect(() => {
        if (null != w) {
            var e;
            null == (e = S.current) || e.focus();
        }
    }, [w]),
        i.useEffect(() => {
            var e;
            (null == M || M === x.tN.CUSTOM) && (null == (e = S.current) || e.focus());
        }, [M]),
        i.useEffect(() => {
            null == o || o(null == T ? void 0 : T.current);
        }, [T, o]),
        i.useEffect(() => {
            (null == I ? void 0 : I.emoji) != null && null != I.status ? (A(I.status), R(I.emoji)) : (A(""), R(null));
        }, [I]);
    let U = i.useCallback(
            (e) => {
                e !== M && (0, f.Zx)(e, !0);
            },
            [M],
        ),
        B = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == I ? void 0 : I.emoji) && n === (null == I ? void 0 : I.status)) ||
                    (0, f._s)(e.status, e.emoji, !0);
            },
            [null == I ? void 0 : I.emoji, null == I ? void 0 : I.status],
        ),
        G = i.useCallback(
            (e) => {
                var t;
                null == (t = e.preventDefault) || t.call(e),
                    L ||
                        B({
                            status: N,
                            emoji: w,
                        });
            },
            [N, w, B, L],
        ),
        H = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === k.length ||
                    ((t =
                        (null == (e = (0, c.sample)(k)) ? void 0 : e.id) != null
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
                    1 === k.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(null == I ? void 0 : I.emoji, t));
            null != t && (null == e ? void 0 : e.name) != null && (R(t), A(e.name));
        }, [k, null == I ? void 0 : I.emoji]);
    return (0, r.jsxs)("div", {
        ref: T,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(E.menu, j.container),
        children: [
            (0, r.jsxs)("div", {
                role: "group",
                className: a()(E.groupLabel, j.group),
                children: [
                    (0, r.jsxs)("form", {
                        onSubmit: G,
                        className: a()(E.item, j.input),
                        children: [
                            (0, r.jsx)(d.oil, {
                                inputRef: S,
                                value: N,
                                onChange: (e) => A(e.substring(0, v.s)),
                                placeholder: O.intl.string(O.t.KPop4u),
                                leading: {
                                    type: "emoji",
                                    button: (0, r.jsx)(y.A, {
                                        customStatusEmoji: w,
                                        setCustomStatusEmoji: R,
                                    }),
                                },
                                trailing: {
                                    icon: d.$2U,
                                    onClick: H,
                                    "aria-label": O.intl.string(O.t["5UAi5+"]),
                                },
                            }),
                            N.trim().length > 0 &&
                                (0, r.jsx)(d.hU, {
                                    onClick: G,
                                    disabled: L,
                                    icon: d.dz2,
                                    "aria-label": O.intl.string(O.t.UDg0qK),
                                }),
                        ],
                    }),
                    Object.entries(Z).map((e) => {
                        let [t, n] = e;
                        return (0, r.jsx)(
                            C.L,
                            {
                                isSelected: M === t,
                                label: n.title,
                                icon: (0, r.jsx)("img", {
                                    src: n.icon,
                                    alt: "",
                                }),
                                setStatus: () => U(t),
                                clearStatus: () => (0, f.Sc)(!1),
                            },
                            n.title,
                        );
                    }),
                ],
            }),
            P.current.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            role: "separator",
                            className: j.separator,
                        }),
                        (0, r.jsx)("div", {
                            role: "group",
                            className: a()(E.groupLabel, j.group),
                            children: P.current.map((e, t) =>
                                (0, r.jsx)(
                                    C.L,
                                    {
                                        isSelected:
                                            s()(null == I ? void 0 : I.emoji, e.emoji) &&
                                            (null == I ? void 0 : I.status) === e.status,
                                        label: e.status,
                                        icon:
                                            null != e.emoji &&
                                            (0, r.jsx)(p.Z, {
                                                emoji: e.emoji,
                                                hideTooltip: !0,
                                                className: j.icon,
                                            }),
                                        setStatus: () => B(e),
                                        clearStatus: () => (0, f.Sc)(!1),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, r.jsx)(_.d, { guildId: l.guild_id }),
        ],
    });
}
