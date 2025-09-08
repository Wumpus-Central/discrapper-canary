n.d(t, { $: () => P }), n(388685), n(781311);
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
    m = n(574176),
    g = n(106301),
    b = n(833858),
    y = n(866071),
    _ = n(17030),
    C = n(223135),
    v = n(295536),
    x = n(748855),
    O = n(505905),
    j = n(981631),
    E = n(388032),
    S = n(787267),
    I = n(334405);
function P(e) {
    var t, n;
    let { channel: l, setPopoutRef: o } = e,
        P = i.useRef(null),
        Z = (0, u.e7)([g.Z], () => g.Z.getCustomHangStatus()),
        T = i.useRef(g.Z.getRecentCustomStatuses()),
        { defaultStatusVariant: N } = m.n.useExperiment({
            guildId: l.guild_id,
            location: "HangStatusPicker",
        }),
        A = (0, b.V)(N),
        w = i.useRef(null),
        [R, M] = i.useState(null != (t = null == Z ? void 0 : Z.status) ? t : ""),
        [D, L] = i.useState(null != (n = null == Z ? void 0 : Z.emoji) ? n : null),
        k = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()),
        U = (0, u.e7)([h.ZP], () => h.ZP.emojiFrecencyWithoutFetchingLatest.frequently),
        B = null == R || null == D || "" === R.trim(),
        G = i.useMemo(() => U.filter((e) => (0, y.K)(e, l)), [U, l]);
    i.useEffect(() => {
        if (null != D) {
            var e;
            null == (e = P.current) || e.focus();
        }
    }, [D]),
        i.useEffect(() => {
            var e;
            (null == k || k === O.tN.CUSTOM) && (null == (e = P.current) || e.focus());
        }, [k]),
        i.useEffect(() => {
            null == o || o(null == w ? void 0 : w.current);
        }, [w, o]),
        i.useEffect(() => {
            (null == Z ? void 0 : Z.emoji) != null && null != Z.status ? (M(Z.status), L(Z.emoji)) : (M(""), L(null));
        }, [Z]);
    let H = i.useCallback(
            (e) => {
                e !== k && (0, f.Zx)(e, !0);
            },
            [k],
        ),
        F = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == Z ? void 0 : Z.emoji) && n === (null == Z ? void 0 : Z.status)) ||
                    (0, f._s)(e.status, e.emoji, !0);
            },
            [null == Z ? void 0 : Z.emoji, null == Z ? void 0 : Z.status],
        ),
        V = i.useCallback(
            (e) => {
                var t;
                null == (t = e.preventDefault) || t.call(e),
                    B ||
                        F({
                            status: R,
                            emoji: D,
                        });
            },
            [R, D, F, B],
        ),
        z = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === G.length ||
                    ((t =
                        (null == (e = (0, c.sample)(G)) ? void 0 : e.id) != null
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
                    1 === G.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(null == Z ? void 0 : Z.emoji, t));
            null != t && (null == e ? void 0 : e.name) != null && (L(t), M(e.name));
        }, [G, null == Z ? void 0 : Z.emoji]);
    return (0, r.jsxs)("div", {
        ref: w,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(I.menu, S.container),
        children: [
            (0, r.jsxs)("div", {
                role: "group",
                className: a()(I.groupLabel, S.group),
                children: [
                    (0, r.jsxs)("form", {
                        onSubmit: V,
                        className: a()(I.item, S.input),
                        children: [
                            (0, r.jsx)(d.oil, {
                                inputRef: P,
                                value: R,
                                onChange: (e) => M(e.substring(0, O.s0)),
                                placeholder: E.intl.string(E.t.KPop4u),
                                leading: {
                                    type: "emoji",
                                    button: (0, r.jsx)(_.A, {
                                        customStatusEmoji: D,
                                        setCustomStatusEmoji: L,
                                    }),
                                },
                                trailing: {
                                    icon: d.$2U,
                                    onClick: z,
                                    "aria-label": E.intl.string(E.t["5UAi5+"]),
                                },
                            }),
                            R.trim().length > 0 &&
                                (0, r.jsx)(d.hU, {
                                    onClick: V,
                                    disabled: B,
                                    icon: d.dz2,
                                    "aria-label": E.intl.string(E.t.UDg0qK),
                                }),
                        ],
                    }),
                    Object.entries(A).map((e) => {
                        let [t, n] = e,
                            i = {
                                type: j.IIU.HANG_STATUS,
                                state: t,
                            };
                        return (0, r.jsx)(
                            x.L,
                            {
                                isSelected: k === t,
                                label: n.title,
                                icon: (0, r.jsx)(C.Z, {
                                    size: 24,
                                    hangStatusActivity: i,
                                    fallbackVariant: N,
                                }),
                                setStatus: () => H(t),
                                clearStatus: () => (0, f.Sc)(!1),
                            },
                            n.title,
                        );
                    }),
                ],
            }),
            T.current.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            role: "separator",
                            className: S.separator,
                        }),
                        (0, r.jsx)("div", {
                            role: "group",
                            className: a()(I.groupLabel, S.group),
                            children: T.current.map((e, t) =>
                                (0, r.jsx)(
                                    x.L,
                                    {
                                        isSelected:
                                            s()(null == Z ? void 0 : Z.emoji, e.emoji) &&
                                            (null == Z ? void 0 : Z.status) === e.status,
                                        label: e.status,
                                        icon:
                                            null != e.emoji &&
                                            (0, r.jsx)(p.Z, {
                                                emoji: e.emoji,
                                                hideTooltip: !0,
                                                className: S.icon,
                                            }),
                                        setStatus: () => F(e),
                                        clearStatus: () => (0, f.Sc)(!1),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, r.jsx)(v.d, { guildId: l.guild_id }),
        ],
    });
}
