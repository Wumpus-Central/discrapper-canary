n.d(t, { $: () => I }), n(388685), n(781311);
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
    C = n(17030),
    _ = n(223135),
    v = n(295536),
    x = n(748855),
    O = n(505905),
    j = n(981631),
    E = n(388032),
    S = n(34101),
    P = n(515527);
function I(e) {
    var t, n, l;
    let { channel: o, setIsHangStatusInputFocused: I, setPopoutRef: Z } = e,
        T = i.useRef(null),
        N = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()),
        A = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()),
        w = (0, u.e7)([m.Z], () => m.Z.getFavoritedStatuses()),
        { defaultStatusVariant: M } = f.n.useExperiment({
            guildId: o.guild_id,
            location: "HangStatusPicker",
        }),
        R = (0, g.V)(M),
        k = i.useRef(null),
        [L, D] = i.useState(null != (n = null == N ? void 0 : N.status) ? n : ""),
        [U, B] = i.useState(null != (l = null == N ? void 0 : N.emoji) ? l : null),
        F = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()),
        V = w.length > 0,
        H = null == L || "" === L.trim(),
        G = (0, y.Z)(o),
        z =
            (L.trim().length > 0 && L.trim() !== (null == N || null == (t = N.status) ? void 0 : t.trim())) ||
            (null != U && !s()(U, null == N ? void 0 : N.emoji)),
        [W, q] = i.useState(!1);
    i.useEffect(() => {
        L.trim().length > 0 && W && q(!1), null == U && W && q(!1);
    }, [L, U, W]),
        i.useEffect(() => {
            if (null != U) {
                var e;
                null == (e = T.current) || e.focus();
            }
        }, [U]),
        i.useEffect(() => {
            var e;
            L !== (null != (e = null == N ? void 0 : N.status) ? e : "") && "" !== L.trim() ? I(!0) : I(!1);
        }, [L, null == N ? void 0 : N.status, U, null == N ? void 0 : N.emoji, I]),
        i.useEffect(() => {
            var e;
            (null == F || F === O.tN.CUSTOM) && (null == (e = T.current) || e.focus());
        }, [F]),
        i.useEffect(() => {
            null == Z || Z(null == k ? void 0 : k.current);
        }, [k, Z]);
    let Y = i.useCallback(
            (e) => {
                e !== F && ((0, h.Zx)(e, !0), null != U && B(null), "" !== L.trim() && D(""));
            },
            [F, U, L],
        ),
        K = i.useCallback(
            (e, t) => {
                let { emoji: n, status: r } = e;
                (s()(n, null == N ? void 0 : N.emoji) && r === (null == N ? void 0 : N.status)) ||
                    ((0, h._s)(e.status, e.emoji, !0), B(t ? null : e.emoji), D(t ? "" : e.status));
            },
            [null == N ? void 0 : N.emoji, null == N ? void 0 : N.status],
        ),
        X = i.useCallback(
            (e) => {
                var t;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != U && 0 === L.trim().length && q(!0),
                    H ||
                        K(
                            {
                                status: L,
                                emoji:
                                    null != U
                                        ? U
                                        : {
                                              id: null,
                                              name: "\uD83D\uDCAD",
                                              animated: !1,
                                          },
                            },
                            !0,
                        );
            },
            [L, U, K, H],
        ),
        J = i.useCallback(() => {
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
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(U, t));
            null != t && (null == e ? void 0 : e.name) != null && (B(t), D(e.name));
        }, [G, U]),
        Q = i.useCallback(() => {
            I(!1);
        }, [I]),
        $ = i.useCallback(() => {
            var e;
            L !== (null != (e = null == N ? void 0 : N.status) ? e : "") && "" !== L.trim() ? I(!0) : I(!1);
        }, [I, L, null == N ? void 0 : N.status]),
        ee = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, b.Z)(e),
                    a = l ? R[e] : null,
                    o = w.some(
                        (t) =>
                            ((0, b.Z)(t) && l && e === t) ||
                            (!(0, b.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
                    ),
                    c = l
                        ? (0, r.jsx)(_.Z, {
                              size: 20,
                              hangStatusActivity: {
                                  type: j.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: M,
                              className: S.icon,
                          })
                        : null != e.emoji &&
                          (0, r.jsx)(p.Z, {
                              emoji: e.emoji,
                              hideTooltip: !0,
                              className: S.icon,
                          });
                return (0, r.jsx)(
                    x.L,
                    {
                        isSelected: l
                            ? F === e
                            : s()(null == N ? void 0 : N.emoji, e.emoji) &&
                              (null == N ? void 0 : N.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? Y(e) : K(e);
                        },
                        clearStatus: () => (0, h.Sc)(!0),
                        isFavorited: o,
                        onFavoriteClick: () => (0, h.tg)(l ? e : e.status, l ? null : e.emoji),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [M, K, Y, R, null == N ? void 0 : N.emoji, null == N ? void 0 : N.status, F, w],
        );
    return (0, r.jsxs)("div", {
        ref: k,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(P.menu, S.container),
        children: [
            (0, r.jsx)("div", {
                role: "group",
                className: a()(P.groupLabel, S.group),
                children: (0, r.jsxs)("form", {
                    onSubmit: X,
                    className: a()(P.item, S.input),
                    children: [
                        (0, r.jsx)(d.oil, {
                            inputRef: T,
                            value: L,
                            onBlur: Q,
                            onFocus: $,
                            onChange: (e) => D(e.substring(0, O.s0)),
                            placeholder: E.intl.string(E.t.KPop4u),
                            leading: {
                                type: "emoji",
                                button: (0, r.jsx)(C.A, {
                                    customStatusEmoji: U,
                                    setCustomStatusEmoji: B,
                                }),
                            },
                            trailing: {
                                icon: d.$2U,
                                onClick: J,
                                "aria-label": E.intl.string(E.t["5UAi5+"]),
                            },
                        }),
                        W &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: S.inputHint,
                                color: "text-danger",
                                children: E.intl.string(E.t["s/oq0d"]),
                            }),
                        z &&
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                className: S.inputHint,
                                children: E.intl.format(E.t["VjkH/v"], { onSave: () => X() }),
                            }),
                    ],
                }),
            }),
            (0, r.jsxs)(d.Ttm, {
                fade: !0,
                role: "group",
                className: a()(P.groupLabel, S.group, S.scroller),
                children: [
                    (0, r.jsx)(v.d, { guildId: o.guild_id }),
                    V &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsxs)("div", {
                                    className: S.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: E.intl.string(E.t.k8fFjo),
                                        }),
                                        (0, r.jsx)(d.r7p, { size: "xxs" }),
                                    ],
                                }),
                                w.map((e, t) => ee(e, t, "favorite")),
                            ],
                        }),
                    A.length > 0 &&
                        V &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)("div", {
                                    role: "separator",
                                    className: S.separator,
                                }),
                                (0, r.jsxs)("div", {
                                    className: S.subtitle,
                                    children: [
                                        (0, r.jsx)(d.Text, {
                                            variant: "text-sm/normal",
                                            color: "text-tertiary",
                                            children: E.intl.string(E.t["+9QSnp"]),
                                        }),
                                        (0, r.jsx)(d.T39, { size: "xxs" }),
                                    ],
                                }),
                            ],
                        }),
                    A.map((e, t) => ee(e, t, "recent")),
                ],
            }),
        ],
    });
}
