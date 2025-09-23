n.d(t, { $: () => Z }), n(388685), n(781311);
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
    h = n(906605),
    f = n(574176),
    m = n(106301),
    g = n(833858),
    b = n(54332),
    y = n(298905),
    C = n(778169),
    _ = n(17030),
    v = n(223135),
    x = n(295536),
    O = n(748855),
    j = n(505905),
    E = n(981631),
    S = n(388032),
    P = n(34101),
    I = n(515527);
function Z(e) {
    var t, n, l;
    let { channel: o, setIsHangStatusInputFocused: Z, setPopoutRef: T } = e,
        N = i.useRef(null),
        A = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()),
        w = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()),
        M = (0, u.e7)([m.Z], () => m.Z.getFavoritedStatuses()),
        { defaultStatusVariant: R } = f.n.useExperiment({
            guildId: o.guild_id,
            location: "HangStatusPicker",
        }),
        k = (0, g.V)(R),
        L = i.useRef(null),
        [D, U] = i.useState(null != (n = null == A ? void 0 : A.status) ? n : ""),
        [B, V] = i.useState(null != (l = null == A ? void 0 : A.emoji) ? l : null),
        F = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()),
        H = M.length > 0,
        G = null == D || "" === D.trim(),
        z = (0, y.Z)(o),
        W =
            (D.trim().length > 0 && D.trim() !== (null == A || null == (t = A.status) ? void 0 : t.trim())) ||
            (null != B && !s()(B, null == A ? void 0 : A.emoji)),
        [q, Y] = i.useState(!1);
    i.useEffect(() => {
        D.trim().length > 0 && q && Y(!1), null == B && q && Y(!1);
    }, [D, B, q]),
        i.useEffect(() => {
            if (null != B) {
                var e;
                null == (e = N.current) || e.focus();
            }
        }, [B]),
        i.useEffect(() => {
            var e;
            D !== (null != (e = null == A ? void 0 : A.status) ? e : "") && "" !== D.trim() ? Z(!0) : Z(!1);
        }, [D, null == A ? void 0 : A.status, B, null == A ? void 0 : A.emoji, Z]),
        i.useEffect(() => {
            var e;
            (null == F || F === j.tN.CUSTOM) && (null == (e = N.current) || e.focus());
        }, [F]),
        i.useEffect(() => {
            null == T || T(null == L ? void 0 : L.current);
        }, [L, T]);
    let K = i.useCallback(
            (e) => {
                e !== F && ((0, h.Zx)(e, !0), null != B && V(null), "" !== D.trim() && U(""));
            },
            [F, B, D],
        ),
        X = i.useCallback(
            (e, t) => {
                let { emoji: n, status: r } = e;
                (s()(n, null == A ? void 0 : A.emoji) && r === (null == A ? void 0 : A.status)) ||
                    ((0, h._s)(e.status, e.emoji, !0), V(t ? null : e.emoji), U(t ? "" : e.status));
            },
            [null == A ? void 0 : A.emoji, null == A ? void 0 : A.status],
        ),
        J = i.useCallback(
            (e) => {
                var t;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != B && 0 === D.trim().length && Y(!0),
                    G ||
                        X(
                            {
                                status: D,
                                emoji:
                                    null != B
                                        ? B
                                        : {
                                              id: null,
                                              name: "\uD83D\uDCAD",
                                              animated: !1,
                                          },
                            },
                            !0,
                        );
            },
            [D, B, X, G],
        ),
        Q = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === z.length ||
                    ((t =
                        (null == (e = (0, c.sample)(z)) ? void 0 : e.id) != null
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
                    1 === z.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(B, t));
            null != t && (null == e ? void 0 : e.name) != null && (V(t), U(e.name));
        }, [z, B]),
        $ = i.useCallback(() => {
            Z(!1);
        }, [Z]),
        ee = i.useCallback(() => {
            var e;
            D !== (null != (e = null == A ? void 0 : A.status) ? e : "") && "" !== D.trim() ? Z(!0) : Z(!1);
        }, [Z, D, null == A ? void 0 : A.status]),
        et = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, b.Z)(e),
                    a = l ? k[e] : null,
                    o = M.some(
                        (t) =>
                            ((0, b.Z)(t) && l && e === t) ||
                            (!(0, b.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
                    ),
                    c = l
                        ? (0, r.jsx)(v.Z, {
                              size: 20,
                              hangStatusActivity: {
                                  type: E.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: R,
                              className: P.icon,
                          })
                        : null != e.emoji &&
                          (0, r.jsx)(p.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: P.icon,
                          });
                return (0, r.jsx)(
                    O.L,
                    {
                        isSelected: l
                            ? F === e
                            : s()(null == A ? void 0 : A.emoji, e.emoji) &&
                              (null == A ? void 0 : A.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? K(e) : X(e);
                        },
                        clearStatus: () => (0, h.Sc)(!0),
                        isFavorited: o,
                        onFavoriteClick: () => (0, h.tg)(l ? e : e.status, l ? null : e.emoji),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [R, X, K, k, null == A ? void 0 : A.emoji, null == A ? void 0 : A.status, F, M],
        );
    return (0, r.jsxs)("div", {
        ref: L,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(I.menu, P.container),
        children: [
            (0, r.jsx)("div", {
                role: "group",
                className: a()(I.groupLabel, P.group),
                children: (0, r.jsxs)("form", {
                    onSubmit: J,
                    className: a()(I.item, P.input),
                    children: [
                        (0, r.jsx)(d.oil, {
                            inputRef: N,
                            value: D,
                            onBlur: $,
                            onFocus: ee,
                            onChange: (e) => U(e.substring(0, j.s0)),
                            placeholder: S.intl.string(S.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(_.A, {
                                    customStatusEmoji: B,
                                    setCustomStatusEmoji: V,
                                }),
                            },
                            trailing: {
                                icon: C.k,
                                onClick: Q,
                                "aria-label": S.intl.string(S.t["5UAi5+"]),
                            },
                        }),
                        q &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: P.inputHint,
                                color: "text-danger",
                                children: S.intl.string(S.t["s/oq0d"]),
                            }),
                        W &&
                            !q &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: P.inputHint,
                                children: S.intl.format(S.t["VjkH/v"], { onSave: () => J() }),
                            }),
                    ],
                }),
            }),
            (0, r.jsxs)(d.Ttm, {
                fade: !0,
                role: "group",
                className: a()(I.groupLabel, P.group, P.scroller),
                children: [
                    (0, r.jsx)(x.d, { guildId: o.guild_id }),
                    H &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: P.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: S.intl.string(S.t.k8fFjo),
                                        }),
                                        (0, r.jsx)(d.r7p, { size: "xxs" }),
                                    ],
                                }),
                                M.map((e, t) => et(e, t, "favorite")),
                            ],
                        }),
                    w.length > 0 &&
                        H &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    className: P.separator,
                                }),
                                (0, r.jsxs)("div", {
                                    className: P.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: S.intl.string(S.t["+9QSnp"]),
                                        }),
                                        (0, r.jsx)(d.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    w.map((e, t) => et(e, t, "recent")),
                ],
            }),
        ],
    });
}
