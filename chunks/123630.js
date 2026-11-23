n.d(t, { A: () => U });
var l = n(477900),
    i = n(582128),
    r = n(855986),
    a = n(654107),
    s = n(652896),
    o = n(40056),
    u = n(623485),
    c = n(616356),
    d = n(495867),
    m = n(287809),
    p = n(293651),
    g = n(310685),
    f = n(721326),
    h = n(317097),
    A = n(22231),
    x = n(789645),
    v = n(265872),
    E = n(866665),
    C = n(408278),
    j = n(581925),
    S = n(508274),
    I = n(123292),
    b = n(821609),
    y = n(775602),
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
        children: [(0, l.jsx)(A.PencilIcon, { ...e }), (0, l.jsx)("span", { className: M.OE, "aria-hidden": !0 })],
    });
}
function G(e) {
    return (0, l.jsxs)("span", {
        className: M.u7,
        "aria-hidden": !0,
        children: [
            (0, l.jsx)("span", { className: M.kI, children: (0, l.jsx)(A.PencilIcon, { ...e }) }),
            (0, l.jsx)("span", { className: M.N_, children: (0, l.jsx)(x.XSmallIcon, { ...e }) }),
        ],
    });
}
function V(e) {
    let {
        buttonRef: t,
        icon: n,
        label: i,
        selected: r,
        disabled: a,
        expanded: s,
        pickerOpen: o,
        showTooltip: u,
        renderPopout: c,
        onRequestClose: d,
        onOpenPicker: m,
        onClick: p,
    } = e;
    return (0, l.jsx)(v.Y, {
        targetElementRef: t,
        shouldShow: o,
        onRequestClose: d,
        position: "top",
        align: "center",
        renderPopout: c,
        children: () =>
            (0, l.jsx)(E.m, {
                shouldShow: u,
                delay: 150,
                text: i,
                asContainer: !0,
                children: (0, l.jsx)(C.K, {
                    buttonRef: t,
                    icon: n,
                    size: "sm",
                    disabled: a,
                    tabIndex: s ? 0 : -1,
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
    let { streamKey: t, connection: n, avatarColor: a, disabled: o = !1, zoomed: u = !1, disallowed: c = !1 } = e,
        d = (0, r.bG)([k.A], () => k.A.getActiveStreamKey() === t),
        {
            rootRef: p,
            entryRef: g,
            id: A,
            picker: x,
            setPicker: v,
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
                [r, a] = i.useState(t),
                [s, o] = i.useState(t),
                [u, c] = i.useState(null),
                [d, m] = i.useState(!1),
                [p, g] = i.useState(!1),
                [f, h] = i.useReducer((e) => e + 1, 0);
            r !== t && (a(t), o(t), c(null));
            let A = i.useRef(null),
                x = i.useRef(null),
                v = i.useRef(y.Ay.keyboardModeEnabled),
                E = i.useRef(!1),
                C = i.useRef(!1),
                j = i.useId(),
                { onPreventIdle: S, onAllowIdle: I } = i.useContext(R.k3),
                b = t && (s || null != u) && !n,
                _ = d || p || null != u,
                N = i.useCallback(() => c(null), []);
            return (
                i.useEffect(() => {
                    if (!b || _) return;
                    let e = window.setTimeout(() => o(!1), 1500);
                    return () => window.clearTimeout(e);
                }, [b, _, f]),
                i.useEffect(() => {
                    let e = A.current;
                    if (null == e) return;
                    let l = e.ownerDocument,
                        i = l.defaultView;
                    function r(e) {
                        "touch" !== e.pointerType && (m(!0), t && !n && o(!0));
                    }
                    function a() {
                        m(!1);
                    }
                    function s(t) {
                        e.contains(t.target) || m(!1);
                    }
                    function u(e) {
                        ((v.current = !1), g(!1), s(e));
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
                        e.addEventListener("pointerleave", a),
                        l.addEventListener("pointerdown", u, !0),
                        l.addEventListener("keydown", c, !0),
                        l.addEventListener("pointerover", s, !0),
                        l.addEventListener("gotpointercapture", s, !0),
                        i?.addEventListener("blur", d),
                        () => {
                            (e.removeEventListener("pointerenter", r),
                                e.removeEventListener("pointerleave", a),
                                l.removeEventListener("pointerdown", u, !0),
                                l.removeEventListener("keydown", c, !0),
                                l.removeEventListener("pointerover", s, !0),
                                l.removeEventListener("gotpointercapture", s, !0),
                                i?.removeEventListener("blur", d));
                        }
                    );
                }, [t, n]),
                i.useEffect(() => {
                    if (!d) return;
                    let e = `stream-drawing-hover-${j}`;
                    return (S(e), () => I(e));
                }, [d, j, S, I]),
                i.useEffect(() => {
                    if (!b) return;
                    let e = `stream-drawing-${j}`;
                    return (S(e), () => I(e));
                }, [b, j, S, I]),
                {
                    rootRef: A,
                    entryRef: x,
                    id: j,
                    picker: u,
                    setPicker: c,
                    expanded: b,
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
                        null != u ? N() : (b || l(), o(!1), (E.current = !0), x.current?.focus(), (E.current = !1)),
                        !0),
                    onEntryPointerDown() {
                        C.current = t && !b;
                    },
                    onEntryPointerCancel() {
                        C.current = !1;
                    },
                    onEntryClick() {
                        N();
                        let e = C.current;
                        ((C.current = !1), t && (!b || e) ? (o(!0), h()) : (o(!t), l()));
                    },
                }
            );
        })({ pressed: d, disabled: o, onToggleMode: () => (0, f.WX)(t) }),
        Z = i.useRef(null),
        X = i.useRef(null),
        { guildId: Q, channelId: q, ownerId: J } = (0, s.Iy)(t),
        ee = (0, r.bG)([m.default], () => m.default.getUser(J), [J]),
        et = N.Ay.useName(Q, q, ee),
        en = (0, r.bG)([_.A], () => _.A.getChannel(q), [q]),
        el = (0, r.bG)([k.A], () => k.A.getSelectedTool()),
        ei = (0, r.bG)([k.A], () => k.A.getEmoji()),
        er = (0, r.bG)([k.A], () => k.A.getColor()),
        ea = null == er ? a : (0, h.Hl)(er),
        es = T.default.SdXXOA;
    (d && (es = T.default.InWDv7), F && (es = T.default.EqYF6z));
    let eo = D.intl.string(es),
        eu = eo;
    (o && (eu = D.intl.string(u ? T.default["98MNI1"] : T.default.vql1fM)),
        c && (eu = D.intl.formatToPlainString(T.default.MNzZ94, { username: et })));
    let ec = (0, r.bG)([y.Ay], () => y.Ay.useReducedMotion),
        ed = D.intl.string(T.default.maGwHF),
        em = D.intl.string(T.default["7haKYj"]),
        ep = i.useMemo(() => {
            let e = (0, w.W)(ei, !ec);
            return null == e
                ? j.StampIcon
                : function () {
                      return (0, l.jsx)("img", { src: e, className: M.M7, alt: "" });
                  };
        }, [ei, ec]);
    function eg(e, l) {
        d && !o && null != n && (0, f.cW)(t, { tool: e, ...(null == l ? {} : { emoji: l }) });
    }
    return (
        i.useLayoutEffect(() => {
            p.current?.style.setProperty("--custom-stream-drawing-stroke-color", ea);
        }, [p, ea]),
        (0, l.jsxs)("div", {
            ref: p,
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
                let t = [Z.current, X.current, g.current].filter((e) => null != e && !e.disabled && -1 !== e.tabIndex),
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
                    id: `${A}-tools`,
                    className: M.Yl,
                    "data-expanded": F,
                    "aria-hidden": !F,
                    children: [
                        (0, l.jsx)(V, {
                            buttonRef: Z,
                            icon: P,
                            label: ed,
                            selected: d && "pencil" === el,
                            disabled: o || null == n,
                            expanded: F,
                            pickerOpen: "color" === x,
                            showTooltip: F && null == x,
                            onRequestClose: H,
                            onOpenPicker: () => {
                                (eg("pencil"), v("color"));
                            },
                            renderPopout: () =>
                                (0, l.jsx)(S.VN, {
                                    value: (0, h.LX)(ea),
                                    onChange: (e) => {
                                        null != n && (0, f.cW)(t, { color: e });
                                    },
                                    footer: (0, l.jsxs)("div", {
                                        className: M.XR,
                                        children: [
                                            (0, l.jsx)(I.Q, {
                                                text: D.intl.string(T.default.Fr1ZLG),
                                                onClick: (e) => {
                                                    (e.stopPropagation(), null != n && (0, f.cW)(t, { color: void 0 }));
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
                                    "pencil" !== el ? (eg("pencil"), H()) : v("color" === x ? null : "color"));
                            },
                        }),
                        (0, l.jsx)(V, {
                            buttonRef: X,
                            icon: ep,
                            label: em,
                            selected: d && "stamp" === el,
                            disabled: o || null == n,
                            expanded: F,
                            pickerOpen: "emoji" === x,
                            showTooltip: F && null == x,
                            onRequestClose: H,
                            onOpenPicker: () => {
                                (eg("stamp"), v("emoji"));
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
                                        ? v("emoji" === x ? null : "emoji")
                                        : "stamp" !== el
                                          ? (eg("stamp"), H())
                                          : v("emoji" === x ? null : "emoji"));
                            },
                        }),
                    ],
                }),
                (0, l.jsx)(E.m, {
                    text: eu,
                    position: "top",
                    delay: 150,
                    shouldShow: null == x,
                    ariaHidden: !o,
                    asContainer: !0,
                    children: (0, l.jsx)(C.K, {
                        buttonRef: g,
                        icon: G,
                        size: "sm",
                        variant: d ? "overlay-primary" : "overlay-secondary",
                        disabled: o,
                        "aria-pressed": d,
                        "aria-expanded": F,
                        "aria-controls": `${A}-tools`,
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
        { zoomLevel: n, minZoom: h } = i.useContext(o.e9),
        A = n > h,
        x = (0, g.T)((0, s.Iy)(t).channelId, "FocusedStreamTile"),
        v = (0, p.BC)(t),
        E = (0, r.bG)([k.A], () => k.A.isStreamDrawingAllowed(t), [t]),
        C = x && v,
        j = (0, r.bG)(
            [c.A],
            () => {
                let e = c.A.getActiveStreamForStreamKey(t);
                return null != e && e.state !== H.XYD.ENDED && e.state !== H.XYD.FAILED;
            },
            [t],
        ),
        S = (0, r.bG)([u.A], () => null != u.A.getGuestStreamKey()),
        I = (0, r.bG)([d.A], () => d.A.getRTCConnection()),
        b = (0, r.bG)([m.default], () => m.default.getCurrentUser()),
        y = (0, a.Ay)(b?.getAvatarURL(null, 80), "#ffffff", !1);
    return (i.useEffect(() => {
        function e() {
            k.A.getActiveStreamKey() === t && (0, f.w3)(null);
        }
        return ((C && j && !A && E) || e(), e);
    }, [C, j, t, A, E]),
    C && j)
        ? (0, l.jsx)(
              F,
              {
                  streamKey: t,
                  connection: I ?? null,
                  avatarColor: y,
                  disabled: S || A || !E,
                  zoomed: A,
                  disallowed: !E,
              },
              S || A || !E ? "disabled" : "enabled",
          )
        : null;
}
