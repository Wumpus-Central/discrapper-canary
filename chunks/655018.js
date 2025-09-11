n.d(t, { $: () => Z }), n(388685), n(539854), n(781311), n(472816), n(794429);
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
    f = n(633302),
    m = n(906605),
    g = n(574176),
    b = n(106301),
    y = n(833858),
    _ = n(866071),
    C = n(17030),
    v = n(223135),
    x = n(295536),
    O = n(748855),
    j = n(505905),
    E = n(981631),
    S = n(388032),
    I = n(34101),
    P = n(515527);
function Z(e) {
    var t, n;
    let { channel: l, setIsHangStatusInputFocused: o, setPopoutRef: Z } = e,
        T = i.useRef(null),
        N = (0, u.e7)([b.Z], () => b.Z.getCustomHangStatus()),
        A = i.useRef(b.Z.getRecentCustomStatuses()),
        { defaultStatusVariant: w } = g.n.useExperiment({
            guildId: l.guild_id,
            location: "HangStatusPicker",
        }),
        R = (0, y.V)(w),
        M = i.useRef(null),
        [D, L] = i.useState(null != (t = null == N ? void 0 : N.status) ? t : ""),
        [k, U] = i.useState(null != (n = null == N ? void 0 : N.emoji) ? n : null),
        B = (0, u.e7)([b.Z], () => b.Z.getCurrentHangStatus()),
        G = (0, u.e7)([h.ZP], () => h.ZP.getGuilds()),
        H = i.useRef([]);
    i.useEffect(() => {
        f.ZP.forEach((e) => H.current.push(e));
    }, []);
    let F = null == D || null == k || "" === D.trim(),
        V = i.useMemo(
            () => [
                ...Object.values(G)
                    .map((e) => e.emojis.filter((e) => (0, _.K)(e, l)))
                    .flat(),
                ...H.current,
            ],
            [G, l],
        );
    i.useEffect(() => {
        if (null != k) {
            var e;
            null == (e = T.current) || e.focus();
        }
    }, [k]),
        i.useEffect(() => {
            var e;
            D !== (null != (e = null == N ? void 0 : N.status) ? e : "") && "" !== D.trim() ? o(!0) : o(!1);
        }, [D, null == N ? void 0 : N.status, k, null == N ? void 0 : N.emoji, o]),
        i.useEffect(() => {
            var e;
            (null == B || B === j.tN.CUSTOM) && (null == (e = T.current) || e.focus());
        }, [B]),
        i.useEffect(() => {
            null == Z || Z(null == M ? void 0 : M.current);
        }, [M, Z]),
        i.useEffect(() => {
            (null == N ? void 0 : N.emoji) != null && null != N.status ? (L(N.status), U(N.emoji)) : (L(""), U(null));
        }, [N]);
    let z = i.useCallback(
            (e) => {
                e !== B && (0, m.Zx)(e, !0);
            },
            [B],
        ),
        W = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == N ? void 0 : N.emoji) && n === (null == N ? void 0 : N.status)) ||
                    (0, m._s)(e.status, e.emoji, !0);
            },
            [null == N ? void 0 : N.emoji, null == N ? void 0 : N.status],
        ),
        q = i.useCallback(
            (e) => {
                var t;
                null == (t = e.preventDefault) || t.call(e),
                    F ||
                        W({
                            status: D,
                            emoji: k,
                        });
            },
            [D, k, W, F],
        ),
        Y = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === V.length ||
                    ((t =
                        (null == (e = (0, c.sample)(V)) ? void 0 : e.id) != null
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
                    1 === V.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(null == N ? void 0 : N.emoji, t));
            null != t && (null == e ? void 0 : e.name) != null && (U(t), L(e.name));
        }, [V, null == N ? void 0 : N.emoji]),
        K = i.useCallback(() => {
            o(!1);
        }, [o]),
        X = i.useCallback(() => {
            var e;
            D !== (null != (e = null == N ? void 0 : N.status) ? e : "") && "" !== D.trim() ? o(!0) : o(!1);
        }, [o, D, null == N ? void 0 : N.status]);
    return (0, r.jsxs)("div", {
        ref: M,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(P.menu, I.container),
        children: [
            (0, r.jsxs)("div", {
                role: "group",
                className: a()(P.groupLabel, I.group),
                children: [
                    (0, r.jsxs)("form", {
                        onSubmit: q,
                        className: a()(P.item, I.input),
                        children: [
                            (0, r.jsx)(d.oil, {
                                inputRef: T,
                                value: D,
                                onBlur: K,
                                onFocus: X,
                                onChange: (e) => L(e.substring(0, j.s0)),
                                placeholder: S.intl.string(S.t.KPop4u),
                                leading: {
                                    type: "emoji",
                                    button: (0, r.jsx)(C.A, {
                                        customStatusEmoji: k,
                                        setCustomStatusEmoji: U,
                                    }),
                                },
                                trailing: {
                                    icon: d.$2U,
                                    onClick: Y,
                                    "aria-label": S.intl.string(S.t["5UAi5+"]),
                                },
                            }),
                            D.trim().length > 0 &&
                                (0, r.jsx)(d.hU, {
                                    onClick: q,
                                    disabled: F,
                                    icon: d.dz2,
                                    "aria-label": S.intl.string(S.t.UDg0qK),
                                }),
                        ],
                    }),
                    Object.entries(R).map((e) => {
                        let [t, n] = e,
                            i = {
                                type: E.IIU.HANG_STATUS,
                                state: t,
                            };
                        return (0, r.jsx)(
                            O.L,
                            {
                                isSelected: B === t,
                                label: n.title,
                                icon: (0, r.jsx)(v.Z, {
                                    size: 20,
                                    hangStatusActivity: i,
                                    fallbackVariant: w,
                                    className: I.icon,
                                }),
                                setStatus: () => z(t),
                                clearStatus: () => (0, m.Sc)(!1),
                            },
                            n.title,
                        );
                    }),
                ],
            }),
            A.current.length > 0 &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            role: "separator",
                            className: I.separator,
                        }),
                        (0, r.jsx)("div", {
                            role: "group",
                            className: a()(P.groupLabel, I.group),
                            children: A.current.map((e, t) =>
                                (0, r.jsx)(
                                    O.L,
                                    {
                                        isSelected:
                                            s()(null == N ? void 0 : N.emoji, e.emoji) &&
                                            (null == N ? void 0 : N.status) === e.status,
                                        label: e.status,
                                        icon:
                                            null != e.emoji &&
                                            (0, r.jsx)(p.Z, {
                                                emoji: e.emoji,
                                                hideTooltip: !0,
                                                className: I.icon,
                                            }),
                                        setStatus: () => W(e),
                                        clearStatus: () => (0, m.Sc)(!1),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    ],
                }),
            (0, r.jsx)(x.d, { guildId: l.guild_id }),
        ],
    });
}
