n.d(t, { A: () => U });
var l = n(477900),
    i = n(582128),
    r = n(855986),
    s = n(654107),
    a = n(40056),
    o = n(623485),
    u = n(616356),
    c = n(495867),
    d = n(287809),
    m = n(293651),
    p = n(310685),
    g = n(721326),
    f = n(317097),
    h = n(22231),
    A = n(789645),
    x = n(265872),
    v = n(866665),
    E = n(408278),
    C = n(581925),
    j = n(508274),
    S = n(123292),
    b = n(821609),
    I = n(775602),
    y = n(652896),
    _ = n(734057),
    N = n(562153),
    w = n(382730),
    k = n(210608),
    R = n(461782),
    L = n(307731),
    T = n(791005),
    D = n(792996),
    M = n(269049);
let O = i.lazy(() => Promise.resolve().then(n.bind(n, 863576)));
function P(e) {
    return (0, l.jsxs)("span", {
        className: M.N$,
        children: [(0, l.jsx)(h.PencilIcon, { ...e }), (0, l.jsx)("span", { className: M.OE, "aria-hidden": !0 })],
    });
}
function G(e) {
    return (0, l.jsxs)("span", {
        className: M.u7,
        "aria-hidden": !0,
        children: [
            (0, l.jsx)("span", { className: M.kI, children: (0, l.jsx)(h.PencilIcon, { ...e }) }),
            (0, l.jsx)("span", { className: M.N_, children: (0, l.jsx)(A.XSmallIcon, { ...e }) }),
        ],
    });
}
function V(e) {
    let {
        buttonRef: t,
        icon: n,
        label: i,
        selected: r,
        disabled: s,
        expanded: a,
        pickerOpen: o,
        showTooltip: u,
        renderPopout: c,
        onRequestClose: d,
        onOpenPicker: m,
        onClick: p,
    } = e;
    return (0, l.jsx)(x.Y, {
        targetElementRef: t,
        shouldShow: o,
        onRequestClose: d,
        position: "top",
        align: "center",
        renderPopout: c,
        children: () =>
            (0, l.jsx)(v.m, {
                shouldShow: u,
                delay: 150,
                text: i,
                asContainer: !0,
                children: (0, l.jsx)(E.K, {
                    buttonRef: t,
                    icon: n,
                    size: "sm",
                    disabled: s,
                    tabIndex: a ? 0 : -1,
                    variant: r ? "overlay-primary" : "overlay-secondary",
                    "aria-pressed": r,
                    "aria-expanded": o,
                    "aria-haspopup": "dialog",
                    "aria-label": i,
                    onContextMenu: (e) => {
                        (e.preventDefault(), e.stopPropagation(), m());
                    },
                    onClick: p,
                }),
            }),
    });
}
function F(e) {
    let { streamKey: t, connection: n, avatarColor: s, disabled: a = !1, zoomed: o = !1, disallowed: u = !1 } = e,
        c = (0, r.bG)([k.A], () => k.A.getActiveStreamKey() === t),
        {
            rootRef: m,
            entryRef: p,
            id: h,
            picker: A,
            setPicker: x,
            expanded: F,
            close: H,
            resetCollapse: U,
            onFocus: z,
            onBlur: W,
            onEscape: $,
            onEntryPointerDown: B,
            onEntryPointerCancel: K,
            onEntryClick: Y,
        } = (function (e) {
            let { pressed: t, disabled: n, onToggleMode: l } = e,
                [r, s] = i.useState(t),
                [a, o] = i.useState(t),
                [u, c] = i.useState(null),
                [d, m] = i.useState(!1),
                [p, g] = i.useState(!1),
                [f, h] = i.useReducer((e) => e + 1, 0);
            r !== t && (s(t), o(t), c(null));
            let A = i.useRef(null),
                x = i.useRef(null),
                v = i.useRef(I.Ay.keyboardModeEnabled),
                E = i.useRef(!1),
                C = i.useRef(!1),
                j = i.useId(),
                { onPreventIdle: S, onAllowIdle: b } = i.useContext(R.k3),
                y = t && (a || null != u) && !n,
                _ = d || p || null != u,
                N = i.useCallback(() => c(null), []);
            return (
                i.useEffect(() => {
                    if (!y || _) return;
                    let e = window.setTimeout(() => o(!1), 1500);
                    return () => window.clearTimeout(e);
                }, [y, _, f]),
                i.useEffect(() => {
                    let e = A.current;
                    if (null == e) return;
                    let l = e.ownerDocument,
                        i = l.defaultView;
                    function r(e) {
                        "touch" !== e.pointerType && (m(!0), t && !n && o(!0));
                    }
                    function s() {
                        m(!1);
                    }
                    function a(t) {
                        e.contains(t.target) || m(!1);
                    }
                    function u(e) {
                        ((v.current = !1), g(!1), a(e));
                    }
                    function c(t) {
                        !t.altKey &&
                            !t.ctrlKey &&
                            !t.metaKey &&
                            [
                                "Tab",
                                "ArrowLeft",
                                "ArrowRight",
                                "ArrowUp",
                                "ArrowDown",
                                "Home",
                                "End",
                                "Enter",
                                " ",
                                "Escape",
                            ].includes(t.key) &&
                            ((v.current = !0), g(e.contains(l.activeElement)));
                    }
                    function d() {
                        (m(!1), g(!1));
                    }
                    return (
                        e.addEventListener("pointerenter", r),
                        e.addEventListener("pointerleave", s),
                        l.addEventListener("pointerdown", u, !0),
                        l.addEventListener("keydown", c, !0),
                        l.addEventListener("pointerover", a, !0),
                        l.addEventListener("gotpointercapture", a, !0),
                        i?.addEventListener("blur", d),
                        () => {
                            (e.removeEventListener("pointerenter", r),
                                e.removeEventListener("pointerleave", s),
                                l.removeEventListener("pointerdown", u, !0),
                                l.removeEventListener("keydown", c, !0),
                                l.removeEventListener("pointerover", a, !0),
                                l.removeEventListener("gotpointercapture", a, !0),
                                i?.removeEventListener("blur", d));
                        }
                    );
                }, [t, n]),
                i.useEffect(() => {
                    if (!d) return;
                    let e = `stream-drawing-hover-${j}`;
                    return (S(e), () => b(e));
                }, [d, j, S, b]),
                i.useEffect(() => {
                    if (!y) return;
                    let e = `stream-drawing-${j}`;
                    return (S(e), () => b(e));
                }, [y, j, S, b]),
                {
                    rootRef: A,
                    entryRef: x,
                    id: j,
                    picker: u,
                    setPicker: c,
                    expanded: y,
                    close: N,
                    resetCollapse: h,
                    onFocus(e) {
                        let n = v.current && e.currentTarget.contains(e.target);
                        (g(n), n && t && !E.current && o(!0));
                    },
                    onBlur(e) {
                        g(v.current && e.currentTarget.contains(e.relatedTarget));
                    },
                    onEscape: (e) =>
                        "Escape" === e.key &&
                        !!t &&
                        (e.preventDefault(),
                        e.stopPropagation(),
                        null != u ? N() : (y || l(), o(!1), (E.current = !0), x.current?.focus(), (E.current = !1)),
                        !0),
                    onEntryPointerDown() {
                        C.current = t && !y;
                    },
                    onEntryPointerCancel() {
                        C.current = !1;
                    },
                    onEntryClick() {
                        N();
                        let e = C.current;
                        ((C.current = !1), t && (!y || e) ? (o(!0), h()) : (o(!t), l()));
                    },
                }
            );
        })({ pressed: c, disabled: a, onToggleMode: () => (0, g.WX)(t) }),
        Z = i.useRef(null),
        X = i.useRef(null),
        { guildId: Q, channelId: q, ownerId: J } = (0, y.Iy)(t),
        ee = (0, r.bG)([d.default], () => d.default.getUser(J), [J]),
        et = N.Ay.useName(Q, q, ee),
        en = (0, r.bG)([_.A], () => _.A.getChannel(q), [q]),
        el = (0, r.bG)([k.A], () => k.A.getSelectedTool()),
        ei = (0, r.bG)([k.A], () => k.A.getEmoji()),
        er = (0, r.bG)([k.A], () => k.A.getColor()),
        es = null == er ? s : (0, f.Hl)(er),
        ea = T.default.SdXXOA;
    (c && (ea = T.default.InWDv7), F && (ea = T.default.EqYF6z));
    let eo = D.intl.string(ea),
        eu = eo;
    (a && (eu = D.intl.string(o ? T.default["98MNI1"] : T.default.vql1fM)),
        u && (eu = D.intl.formatToPlainString(T.default.MNzZ94, { username: et })));
    let ec = (0, r.bG)([I.Ay], () => I.Ay.useReducedMotion),
        ed = D.intl.string(T.default.maGwHF),
        em = D.intl.string(T.default["7haKYj"]),
        ep = i.useMemo(() => {
            let e = (0, w.W)(ei, !ec);
            return null == e
                ? C.StampIcon
                : function () {
                      return (0, l.jsx)("img", { src: e, className: M.M7, alt: "" });
                  };
        }, [ei, ec]);
    function eg(e, l) {
        c && !a && null != n && (0, g.cW)(t, { tool: e, ...(null == l ? {} : { emoji: l }) });
    }
    return (
        i.useLayoutEffect(() => {
            m.current?.style.setProperty("--custom-stream-drawing-stroke-color", es);
        }, [m, es]),
        (0, l.jsxs)("div", {
            ref: m,
            role: "toolbar",
            "aria-label": D.intl.string(T.default.SdXXOA),
            className: M.ne,
            "data-expanded": F,
            onFocus: z,
            onBlur: W,
            onClickCapture: U,
            onClick: (e) => e.stopPropagation(),
            onPointerDown: (e) => {
                0 === e.button && e.stopPropagation();
            },
            onPointerUp: (e) => e.stopPropagation(),
            onMouseDown: (e) => {
                0 === e.button && e.stopPropagation();
            },
            onMouseUp: (e) => {
                e.currentTarget.contains(e.target) && e.stopPropagation();
            },
            onDoubleClick: (e) => e.stopPropagation(),
            onKeyDown: (e) => {
                if ($(e)) return;
                let t = [Z.current, X.current, p.current].filter((e) => null != e && !e.disabled && -1 !== e.tabIndex),
                    n = t.indexOf(e.target);
                if (n < 0) return;
                let l = 0;
                if (
                    ("ArrowLeft" === e.key && (l = -1),
                    "ArrowRight" === e.key && (l = 1),
                    0 === l && "Home" !== e.key && "End" !== e.key)
                )
                    return;
                (e.preventDefault(), e.stopPropagation());
                let i = (n + l + t.length) % t.length;
                ("Home" === e.key && (i = 0), "End" === e.key && (i = t.length - 1), t[i]?.focus());
            },
            children: [
                (0, l.jsxs)("div", {
                    id: `${h}-tools`,
                    className: M.Yl,
                    "data-expanded": F,
                    "aria-hidden": !F,
                    children: [
                        (0, l.jsx)(V, {
                            buttonRef: Z,
                            icon: P,
                            label: ed,
                            selected: c && "pencil" === el,
                            disabled: a || null == n,
                            expanded: F,
                            pickerOpen: "color" === A,
                            showTooltip: F && null == A,
                            onRequestClose: H,
                            onOpenPicker: () => {
                                (eg("pencil"), x("color"));
                            },
                            renderPopout: () =>
                                (0, l.jsx)(j.VN, {
                                    value: (0, f.LX)(es),
                                    onChange: (e) => {
                                        null != n && (0, g.cW)(t, { color: e });
                                    },
                                    footer: (0, l.jsxs)("div", {
                                        className: M.XR,
                                        children: [
                                            (0, l.jsx)(S.Q, {
                                                text: D.intl.string(T.default.Fr1ZLG),
                                                onClick: (e) => {
                                                    (e.stopPropagation(), null != n && (0, g.cW)(t, { color: void 0 }));
                                                },
                                            }),
                                            (0, l.jsx)(b.$, {
                                                text: D.intl.string(T.default["3Kpyww"]),
                                                size: "sm",
                                                variant: "primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), H());
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    "pencil" !== el ? (eg("pencil"), H()) : x("color" === A ? null : "color"));
                            },
                        }),
                        (0, l.jsx)(V, {
                            buttonRef: X,
                            icon: ep,
                            label: em,
                            selected: c && "stamp" === el,
                            disabled: a || null == n,
                            expanded: F,
                            pickerOpen: "emoji" === A,
                            showTooltip: F && null == A,
                            onRequestClose: H,
                            onOpenPicker: () => {
                                (eg("stamp"), x("emoji"));
                            },
                            renderPopout: () =>
                                (0, l.jsx)(i.Suspense, {
                                    fallback: null,
                                    children: (0, l.jsx)(O, {
                                        channel: en,
                                        guildId: Q ?? void 0,
                                        pickerIntention: L.EmojiIntention.CHAT,
                                        closePopout: H,
                                        onSelectEmoji: (e) => {
                                            let { emoji: t } = e;
                                            null != t &&
                                                (eg(
                                                    "stamp",
                                                    null != t.id
                                                        ? { id: t.id, animated: t.animated ?? !1 }
                                                        : { unicode: t.surrogates },
                                                ),
                                                H());
                                        },
                                    }),
                                }),
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    null == ei
                                        ? x("emoji" === A ? null : "emoji")
                                        : "stamp" !== el
                                          ? (eg("stamp"), H())
                                          : x("emoji" === A ? null : "emoji"));
                            },
                        }),
                    ],
                }),
                (0, l.jsx)(v.m, {
                    text: eu,
                    position: "top",
                    delay: 150,
                    shouldShow: null == A,
                    ariaHidden: !a,
                    asContainer: !0,
                    children: (0, l.jsx)(E.K, {
                        buttonRef: p,
                        icon: G,
                        size: "sm",
                        variant: c ? "overlay-primary" : "overlay-secondary",
                        disabled: a,
                        "aria-pressed": c,
                        "aria-expanded": F,
                        "aria-controls": `${h}-tools`,
                        "aria-label": eo,
                        onPointerDown: B,
                        onPointerCancel: K,
                        onClick: (e) => {
                            (e.stopPropagation(), Y());
                        },
                    }),
                }),
            ],
        })
    );
}
var H = n(652215);
function U(e) {
    let { streamKey: t } = e,
        { zoomLevel: n, minZoom: f } = i.useContext(a.e9),
        h = n > f,
        A = (0, p.T)("FocusedStreamTile"),
        x = (0, m.BC)(t),
        v = (0, r.bG)([k.A], () => k.A.isStreamDrawingAllowed(t), [t]),
        E = A && x,
        C = (0, r.bG)(
            [u.A],
            () => {
                let e = u.A.getActiveStreamForStreamKey(t);
                return null != e && e.state !== H.XYD.ENDED && e.state !== H.XYD.FAILED;
            },
            [t],
        ),
        j = (0, r.bG)([o.A], () => null != o.A.getGuestStreamKey()),
        S = (0, r.bG)([c.A], () => c.A.getRTCConnection()),
        b = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        I = (0, s.Ay)(b?.getAvatarURL(null, 80), "#ffffff", !1);
    return (i.useEffect(() => {
        function e() {
            k.A.getActiveStreamKey() === t && (0, g.w3)(null);
        }
        return ((E && C && !h && v) || e(), e);
    }, [E, C, t, h, v]),
    E && C)
        ? (0, l.jsx)(
              F,
              {
                  streamKey: t,
                  connection: S ?? null,
                  avatarColor: I,
                  disabled: j || h || !v,
                  zoomed: h,
                  disallowed: !v,
              },
              j || h || !v ? "disabled" : "enabled",
          )
        : null;
}
