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
    let { channel: l, onEditStatus: o, setPopoutRef: P } = e,
        Z = i.useRef(null),
        T = (0, u.e7)([g.Z], () => g.Z.getCustomHangStatus()),
        N = i.useRef(g.Z.getRecentCustomStatuses()),
        { defaultStatusVariant: A } = m.n.useExperiment({
            guildId: l.guild_id,
            location: "HangStatusPicker",
        }),
        w = (0, b.V)(A),
        R = i.useRef(null),
        [M, D] = i.useState(null != (t = null == T ? void 0 : T.status) ? t : ""),
        [L, k] = i.useState(null != (n = null == T ? void 0 : T.emoji) ? n : null),
        U = (0, u.e7)([g.Z], () => g.Z.getCurrentHangStatus()),
        B = (0, u.e7)([h.ZP], () => h.ZP.emojiFrecencyWithoutFetchingLatest.frequently),
        G = null == M || null == L || "" === M.trim(),
        H = i.useMemo(() => B.filter((e) => (0, y.K)(e, l)), [B, l]);
    i.useEffect(() => {
        if (null != L) {
            var e;
            null == (e = Z.current) || e.focus();
        }
    }, [L]),
        i.useEffect(() => {
            var e;
            M === (null != (e = null == T ? void 0 : T.status) ? e : "") && s()(L, null == T ? void 0 : T.emoji)
                ? o(!1)
                : o(!0);
        }, [M, null == T ? void 0 : T.status, L, null == T ? void 0 : T.emoji, o]),
        i.useEffect(() => {
            var e;
            (null == U || U === O.tN.CUSTOM) && (null == (e = Z.current) || e.focus());
        }, [U]),
        i.useEffect(() => {
            null == P || P(null == R ? void 0 : R.current);
        }, [R, P]),
        i.useEffect(() => {
            (null == T ? void 0 : T.emoji) != null && null != T.status ? (D(T.status), k(T.emoji)) : (D(""), k(null));
        }, [T]);
    let F = i.useCallback(
            (e) => {
                e !== U && (0, f.Zx)(e, !0);
            },
            [U],
        ),
        V = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == T ? void 0 : T.emoji) && n === (null == T ? void 0 : T.status)) ||
                    (0, f._s)(e.status, e.emoji, !0);
            },
            [null == T ? void 0 : T.emoji, null == T ? void 0 : T.status],
        ),
        z = i.useCallback(
            (e) => {
                var t;
                null == (t = e.preventDefault) || t.call(e),
                    G ||
                        V({
                            status: M,
                            emoji: L,
                        });
            },
            [M, L, V, G],
        ),
        W = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === H.length ||
                    ((t =
                        (null == (e = (0, c.sample)(H)) ? void 0 : e.id) != null
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
                    1 === H.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(null == T ? void 0 : T.emoji, t));
            null != t && (null == e ? void 0 : e.name) != null && (k(t), D(e.name));
        }, [H, null == T ? void 0 : T.emoji]);
    return (0, r.jsxs)("div", {
        ref: R,
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
                        onSubmit: z,
                        className: a()(I.item, S.input),
                        children: [
                            (0, r.jsx)(d.oil, {
                                inputRef: Z,
                                value: M,
                                onChange: (e) => D(e.substring(0, O.s0)),
                                placeholder: E.intl.string(E.t.KPop4u),
                                leading: {
                                    type: "emoji",
                                    button: (0, r.jsx)(_.A, {
                                        customStatusEmoji: L,
                                        setCustomStatusEmoji: k,
                                    }),
                                },
                                trailing: {
                                    icon: d.$2U,
                                    onClick: W,
                                    "aria-label": E.intl.string(E.t["5UAi5+"]),
                                },
                            }),
                            M.trim().length > 0 &&
                                (0, r.jsx)(d.hU, {
                                    onClick: z,
                                    disabled: G,
                                    icon: d.dz2,
                                    "aria-label": E.intl.string(E.t.UDg0qK),
                                }),
                        ],
                    }),
                    Object.entries(w).map((e) => {
                        let [t, n] = e,
                            i = {
                                type: j.IIU.HANG_STATUS,
                                state: t,
                            };
                        return (0, r.jsx)(
                            x.L,
                            {
                                isSelected: U === t,
                                label: n.title,
                                icon: (0, r.jsx)(C.Z, {
                                    size: 24,
                                    hangStatusActivity: i,
                                    fallbackVariant: A,
                                }),
                                setStatus: () => F(t),
                                clearStatus: () => (0, f.Sc)(!1),
                            },
                            n.title,
                        );
                    }),
                ],
            }),
            N.current.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            role: "separator",
                            className: S.separator,
                        }),
                        (0, r.jsx)("div", {
                            role: "group",
                            className: a()(I.groupLabel, S.group),
                            children: N.current.map((e, t) =>
                                (0, r.jsx)(
                                    x.L,
                                    {
                                        isSelected:
                                            s()(null == T ? void 0 : T.emoji, e.emoji) &&
                                            (null == T ? void 0 : T.status) === e.status,
                                        label: e.status,
                                        icon:
                                            null != e.emoji &&
                                            (0, r.jsx)(p.Z, {
                                                emoji: e.emoji,
                                                hideTooltip: !0,
                                                className: S.icon,
                                            }),
                                        setStatus: () => V(e),
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
