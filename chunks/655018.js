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
    b = n(298905),
    y = n(17030),
    _ = n(223135),
    C = n(295536),
    v = n(748855),
    x = n(505905),
    O = n(981631),
    j = n(388032),
    E = n(787267),
    S = n(334405);
function I(e) {
    var t, n;
    let { channel: l, setIsHangStatusInputFocused: o, setPopoutRef: I } = e,
        P = i.useRef(null),
        Z = (0, u.e7)([m.Z], () => m.Z.getCustomHangStatus()),
        T = (0, u.e7)([m.Z], () => m.Z.getRecentStatuses()),
        { defaultStatusVariant: N } = f.n.useExperiment({
            guildId: l.guild_id,
            location: "HangStatusPicker",
        }),
        A = (0, g.V)(N),
        w = i.useRef(null),
        [R, M] = i.useState(null != (t = null == Z ? void 0 : Z.status) ? t : ""),
        [D, L] = i.useState(null != (n = null == Z ? void 0 : Z.emoji) ? n : null),
        k = (0, u.e7)([m.Z], () => m.Z.getCurrentHangStatus()),
        U = null == R || "" === R.trim(),
        B = (0, b.Z)(l);
    i.useEffect(() => {
        if (null != D) {
            var e;
            null == (e = P.current) || e.focus();
        }
    }, [D]),
        i.useEffect(() => {
            var e;
            R !== (null != (e = null == Z ? void 0 : Z.status) ? e : "") && "" !== R.trim() ? o(!0) : o(!1);
        }, [R, null == Z ? void 0 : Z.status, D, null == Z ? void 0 : Z.emoji, o]),
        i.useEffect(() => {
            var e;
            (null == k || k === x.tN.CUSTOM) && (null == (e = P.current) || e.focus());
        }, [k]),
        i.useEffect(() => {
            null == I || I(null == w ? void 0 : w.current);
        }, [w, I]),
        i.useEffect(() => {
            (null == Z ? void 0 : Z.emoji) != null && null != Z.status ? (M(Z.status), L(Z.emoji)) : (M(""), L(null));
        }, [Z]);
    let G = i.useCallback(
            (e) => {
                e !== k && (0, h.Zx)(e, !0);
            },
            [k],
        ),
        H = i.useCallback(
            (e) => {
                let { emoji: t, status: n } = e;
                (s()(t, null == Z ? void 0 : Z.emoji) && n === (null == Z ? void 0 : Z.status)) ||
                    (0, h._s)(e.status, e.emoji, !0);
            },
            [null == Z ? void 0 : Z.emoji, null == Z ? void 0 : Z.status],
        ),
        F = i.useCallback(
            (e) => {
                var t;
                null == (t = e.preventDefault) || t.call(e),
                    U ||
                        H({
                            status: R,
                            emoji:
                                null != D
                                    ? D
                                    : {
                                          id: null,
                                          name: "\uD83D\uDCAD",
                                          animated: !1,
                                      },
                        });
            },
            [R, D, H, U],
        ),
        V = i.useCallback(() => {
            let e = null,
                t = null;
            do {
                var n;
                if (
                    0 === B.length ||
                    ((t =
                        (null == (e = (0, c.sample)(B)) ? void 0 : e.id) != null
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
                    1 === B.length)
                )
                    break;
            } while (null == e || (null == e ? void 0 : e.name) == null || s()(D, t));
            null != t && (null == e ? void 0 : e.name) != null && (L(t), M(e.name));
        }, [B, D]),
        z = i.useCallback(() => {
            o(!1);
        }, [o]),
        W = i.useCallback(() => {
            var e;
            R !== (null != (e = null == Z ? void 0 : Z.status) ? e : "") && "" !== R.trim() ? o(!0) : o(!1);
        }, [o, R, null == Z ? void 0 : Z.status]);
    return (0, r.jsxs)("div", {
        ref: w,
        role: "menu",
        id: "hang-status-picker",
        tabIndex: -1,
        className: a()(S.menu, E.container),
        children: [
            (0, r.jsxs)("div", {
                role: "group",
                className: a()(S.groupLabel, E.group),
                children: [
                    (0, r.jsxs)("form", {
                        onSubmit: F,
                        className: a()(S.item, E.input),
                        children: [
                            (0, r.jsx)(d.oil, {
                                inputRef: P,
                                value: R,
                                onBlur: z,
                                onFocus: W,
                                onChange: (e) => M(e.substring(0, x.s0)),
                                placeholder: j.intl.string(j.t.KPop4u),
                                leading: {
                                    type: "emoji",
                                    button: (0, r.jsx)(y.A, {
                                        customStatusEmoji: D,
                                        setCustomStatusEmoji: L,
                                    }),
                                },
                                trailing: {
                                    icon: d.$2U,
                                    onClick: V,
                                    "aria-label": j.intl.string(j.t["5UAi5+"]),
                                },
                            }),
                            R.trim().length > 0 &&
                                (0, r.jsx)(d.hU, {
                                    onClick: F,
                                    disabled: U,
                                    icon: d.dz2,
                                    "aria-label": j.intl.string(j.t.UDg0qK),
                                }),
                        ],
                    }),
                    T.map((e, t) => {
                        var n;
                        let i = "string" == typeof e,
                            l = i ? A[e] : null,
                            a = i
                                ? (0, r.jsx)(_.Z, {
                                      size: 20,
                                      hangStatusActivity: {
                                          type: O.IIU.HANG_STATUS,
                                          state: e,
                                      },
                                      fallbackVariant: N,
                                      className: E.icon,
                                  })
                                : null != e.emoji &&
                                  (0, r.jsx)(p.Z, {
                                      emoji: e.emoji,
                                      hideTooltip: !0,
                                      className: E.icon,
                                  });
                        return (0, r.jsx)(
                            v.L,
                            {
                                isSelected: i
                                    ? k === e
                                    : s()(null == Z ? void 0 : Z.emoji, e.emoji) &&
                                      (null == Z ? void 0 : Z.status) === e.status,
                                label: i ? (null != (n = null == l ? void 0 : l.title) ? n : "") : e.status,
                                icon: a,
                                setStatus: () => {
                                    i ? G(e) : H(e);
                                },
                                clearStatus: () => (0, h.Sc)(!1),
                            },
                            t,
                        );
                    }),
                ],
            }),
            (0, r.jsx)(C.d, { guildId: l.guild_id }),
        ],
    });
}
