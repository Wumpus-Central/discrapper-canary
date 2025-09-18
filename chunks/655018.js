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
    h = n(906605),
    f = n(574176),
    m = n(106301),
    g = n(833858),
    b = n(54332),
    y = n(298905),
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
    var t, n, l;
    let { channel: o, setIsHangStatusInputFocused: P, setPopoutRef: Z } = e,
        T = i.useRef(null),
        N = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()),
        A = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()),
        w = (0, u.e7)([m.Z], () => m.Z.getFavoritedStatuses()),
        { defaultStatusVariant: R } = f.n.useExperiment({
            guildId: o.guild_id,
            location: "HangStatusPicker",
        }),
        M = (0, g.V)(R),
        D = i.useRef(null),
        [k, L] = i.useState(null != (n = null == N ? void 0 : N.status) ? n : ""),
        [U, B] = i.useState(null != (l = null == N ? void 0 : N.emoji) ? l : null),
        G = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()),
        H = w.length > 0,
        F = null == k || "" === k.trim(),
        V = (0, y.Z)(o),
        z = k.trim().length > 0 && k.trim() !== (null == N || null == (t = N.status) ? void 0 : t.trim()),
        [W, q] = i.useState(!1);
    i.useEffect(() => {
        k.trim().length > 0 && W && q(!1), null == U && W && q(!1);
    }, [k, U, W]),
        i.useEffect(() => {
            if (null != U) {
                var e;
                null == (e = T.current) || e.focus();
            }
        }, [U]),
        i.useEffect(() => {
            var e;
            k !== (null != (e = null == N ? void 0 : N.status) ? e : "") && "" !== k.trim() ? P(!0) : P(!1);
        }, [k, null == N ? void 0 : N.status, U, null == N ? void 0 : N.emoji, P]),
        i.useEffect(() => {
            var e;
            (null == G || G === O.tN.CUSTOM) && (null == (e = T.current) || e.focus());
        }, [G]),
        i.useEffect(() => {
            null == Z || Z(null == D ? void 0 : D.current);
        }, [D, Z]),
        i.useEffect(() => {
            (null == N ? void 0 : N.emoji) != null && null != N.status ? (L(N.status), B(N.emoji)) : (L(""), B(null));
        }, [N]);
    let Y = i.useCallback(
            (e) => {
                e !== G && (0, h.Zx)(e, !0);
            },
            [G],
        ),
        K = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == N ? void 0 : N.emoji) && n === (null == N ? void 0 : N.status)) ||
                    (0, h._s)(e.status, e.emoji, !0);
            },
            [null == N ? void 0 : N.emoji, null == N ? void 0 : N.status],
        ),
        X = i.useCallback(
            (e) => {
                var t;
                null == e || null == (t = e.preventDefault) || t.call(e),
                    null != U && 0 === k.trim().length && q(!0),
                    F ||
                        K({
                            status: k,
                            emoji:
                                null != U
                                    ? U
                                    : {
                                          id: null,
                                          name: "\uD83D\uDCAD",
                                          animated: !1,
                                      },
                        });
            },
            [k, U, K, F],
        ),
        Q = i.useCallback(() => {
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
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(U, t));
            null != t && (null == e ? void 0 : e.name) != null && (B(t), L(e.name));
        }, [V, U]),
        J = i.useCallback(() => {
            P(!1);
        }, [P]),
        $ = i.useCallback(() => {
            var e;
            k !== (null != (e = null == N ? void 0 : N.status) ? e : "") && "" !== k.trim() ? P(!0) : P(!1);
        }, [P, k, null == N ? void 0 : N.status]),
        ee = i.useCallback(
            (e, t, n) => {
                var i;
                let l = (0, b.Z)(e),
                    a = l ? M[e] : null,
                    o = w.some(
                        (t) =>
                            ((0, b.Z)(t) && l && e === t) ||
                            (!(0, b.Z)(t) && !l && t.status === e.status && s()(t.emoji, e.emoji)),
                    ),
                    c = l
                        ? (0, r.jsx)(C.Z, {
                              size: 20,
                              hangStatusActivity: {
                                  type: j.IIU.HANG_STATUS,
                                  state: e,
                              },
                              fallbackVariant: R,
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
                            ? G === e
                            : s()(null == N ? void 0 : N.emoji, e.emoji) &&
                              (null == N ? void 0 : N.status) === e.status,
                        label: l ? (null != (i = null == a ? void 0 : a.title) ? i : "") : e.status,
                        icon: c,
                        setStatus: () => {
                            l ? Y(e) : K(e);
                        },
                        clearStatus: () => (0, h.Sc)(!1),
                        isFavorited: o,
                        onFavoriteClick: () => (0, h.tg)(l ? e : e.status, l ? null : e.emoji),
                    },
                    "".concat(n, "-").concat(t),
                );
            },
            [R, K, Y, M, null == N ? void 0 : N.emoji, null == N ? void 0 : N.status, G, w],
        );
    return (0, r.jsxs)("div", {
        ref: D,
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
                        onSubmit: X,
                        className: a()(I.item, S.input),
                        children: [
                            (0, r.jsx)(d.oil, {
                                inputRef: T,
                                value: k,
                                onBlur: J,
                                onFocus: $,
                                onChange: (e) => L(e.substring(0, O.s0)),
                                placeholder: E.intl.string(E.t.KPop4u),
                                leading: {
                                    type: "emoji",
                                    button: (0, r.jsx)(_.A, {
                                        customStatusEmoji: U,
                                        setCustomStatusEmoji: B,
                                    }),
                                },
                                trailing: {
                                    icon: d.$2U,
                                    onClick: Q,
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
                    H &&
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
                        H &&
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
            (0, r.jsx)(v.d, { guildId: o.guild_id }),
        ],
    });
}
