n.d(t, { A: () => H });
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
    I = n(821609),
    b = n(775602),
    y = n(652896),
    _ = n(734057),
    N = n(382730),
    w = n(210608),
    k = n(461782),
    R = n(307731),
    L = n(791005),
    T = n(792996),
    D = n(269049);
let M = i.lazy(() => Promise.resolve().then(n.bind(n, 863576)));
function O(e) {
    return (0, l.jsxs)("span", {
        className: D.N$,
        children: [(0, l.jsx)(h.PencilIcon, { ...e }), (0, l.jsx)("span", { className: D.OE, "aria-hidden": !0 })],
    });
}
function P(e) {
    return (0, l.jsxs)("span", {
        className: D.u7,
        "aria-hidden": !0,
        children: [
            (0, l.jsx)("span", { className: D.kI, children: (0, l.jsx)(h.PencilIcon, { ...e }) }),
            (0, l.jsx)("span", { className: D.N_, children: (0, l.jsx)(A.XSmallIcon, { ...e }) }),
        ],
    });
}
function G(e) {
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
function V(e) {
    let { streamKey: t, connection: n, avatarColor: s, disabled: a = !1, zoomed: o = !1 } = e,
        u = (0, r.bG)([w.A], () => w.A.getActiveStreamKey() === t),
        {
            rootRef: c,
            entryRef: d,
            id: m,
            picker: p,
            setPicker: h,
            expanded: A,
            close: x,
            resetCollapse: V,
            onFocus: F,
            onBlur: H,
            onEscape: U,
            onEntryPointerDown: z,
            onEntryPointerCancel: W,
            onEntryClick: $,
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
                v = i.useRef(b.Ay.keyboardModeEnabled),
                E = i.useRef(!1),
                C = i.useRef(!1),
                j = i.useId(),
                { onPreventIdle: S, onAllowIdle: I } = i.useContext(k.k3),
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
                    return (S(e), () => I(e));
                }, [d, j, S, I]),
                i.useEffect(() => {
                    if (!y) return;
                    let e = `stream-drawing-${j}`;
                    return (S(e), () => I(e));
                }, [y, j, S, I]),
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
        })({ pressed: u, disabled: a, onToggleMode: () => (0, g.WX)(t) }),
        B = i.useRef(null),
        K = i.useRef(null),
        { guildId: Y, channelId: X } = (0, y.Iy)(t),
        Z = (0, r.bG)([_.A], () => _.A.getChannel(X), [X]),
        Q = (0, r.bG)([w.A], () => w.A.getSelectedTool()),
        q = (0, r.bG)([w.A], () => w.A.getEmoji()),
        J = (0, r.bG)([w.A], () => w.A.getColor()),
        ee = null == J ? s : (0, f.Hl)(J),
        et = L.default.SdXXOA;
    (u && (et = L.default.InWDv7), A && (et = L.default.EqYF6z));
    let en = T.intl.string(et),
        el = en;
    a && (el = T.intl.string(o ? L.default["98MNI1"] : L.default.vql1fM));
    let ei = (0, r.bG)([b.Ay], () => b.Ay.useReducedMotion),
        er = T.intl.string(L.default.maGwHF),
        es = T.intl.string(L.default["7haKYj"]),
        ea = i.useMemo(() => {
            let e = (0, N.W)(q, !ei);
            return null == e
                ? C.StampIcon
                : function () {
                      return (0, l.jsx)("img", { src: e, className: D.M7, alt: "" });
                  };
        }, [q, ei]);
    function eo(e, l) {
        u && !a && null != n && (0, g.cW)(t, { tool: e, ...(null == l ? {} : { emoji: l }) });
    }
    return (
        i.useLayoutEffect(() => {
            c.current?.style.setProperty("--custom-stream-drawing-stroke-color", ee);
        }, [c, ee]),
        (0, l.jsxs)("div", {
            ref: c,
            role: "toolbar",
            "aria-label": T.intl.string(L.default.SdXXOA),
            className: D.ne,
            "data-expanded": A,
            onFocus: F,
            onBlur: H,
            onClickCapture: V,
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
                if (U(e)) return;
                let t = [B.current, K.current, d.current].filter((e) => null != e && !e.disabled && -1 !== e.tabIndex),
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
                    id: `${m}-tools`,
                    className: D.Yl,
                    "data-expanded": A,
                    "aria-hidden": !A,
                    children: [
                        (0, l.jsx)(G, {
                            buttonRef: B,
                            icon: O,
                            label: er,
                            selected: u && "pencil" === Q,
                            disabled: a || null == n,
                            expanded: A,
                            pickerOpen: "color" === p,
                            showTooltip: A && null == p,
                            onRequestClose: x,
                            onOpenPicker: () => {
                                (eo("pencil"), h("color"));
                            },
                            renderPopout: () =>
                                (0, l.jsx)(j.VN, {
                                    value: (0, f.LX)(ee),
                                    onChange: (e) => {
                                        null != n && (0, g.cW)(t, { color: e });
                                    },
                                    footer: (0, l.jsxs)("div", {
                                        className: D.XR,
                                        children: [
                                            (0, l.jsx)(S.Q, {
                                                text: T.intl.string(L.default.Fr1ZLG),
                                                onClick: (e) => {
                                                    (e.stopPropagation(), null != n && (0, g.cW)(t, { color: void 0 }));
                                                },
                                            }),
                                            (0, l.jsx)(I.$, {
                                                text: T.intl.string(L.default["3Kpyww"]),
                                                size: "sm",
                                                variant: "primary",
                                                onClick: (e) => {
                                                    (e.stopPropagation(), x());
                                                },
                                            }),
                                        ],
                                    }),
                                }),
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    "pencil" !== Q ? (eo("pencil"), x()) : h("color" === p ? null : "color"));
                            },
                        }),
                        (0, l.jsx)(G, {
                            buttonRef: K,
                            icon: ea,
                            label: es,
                            selected: u && "stamp" === Q,
                            disabled: a || null == n,
                            expanded: A,
                            pickerOpen: "emoji" === p,
                            showTooltip: A && null == p,
                            onRequestClose: x,
                            onOpenPicker: () => {
                                (eo("stamp"), h("emoji"));
                            },
                            renderPopout: () =>
                                (0, l.jsx)(i.Suspense, {
                                    fallback: null,
                                    children: (0, l.jsx)(M, {
                                        channel: Z,
                                        guildId: Y ?? void 0,
                                        pickerIntention: R.EmojiIntention.CHAT,
                                        closePopout: x,
                                        onSelectEmoji: (e) => {
                                            let { emoji: t } = e;
                                            null != t &&
                                                (eo(
                                                    "stamp",
                                                    null != t.id
                                                        ? { id: t.id, animated: t.animated ?? !1 }
                                                        : { unicode: t.surrogates },
                                                ),
                                                x());
                                        },
                                    }),
                                }),
                            onClick: (e) => {
                                (e.stopPropagation(),
                                    null == q
                                        ? h("emoji" === p ? null : "emoji")
                                        : "stamp" !== Q
                                          ? (eo("stamp"), x())
                                          : h("emoji" === p ? null : "emoji"));
                            },
                        }),
                    ],
                }),
                (0, l.jsx)(v.m, {
                    text: el,
                    position: "top",
                    delay: 150,
                    shouldShow: null == p,
                    ariaHidden: !a,
                    asContainer: !0,
                    children: (0, l.jsx)(E.K, {
                        buttonRef: d,
                        icon: P,
                        size: "sm",
                        variant: u ? "overlay-primary" : "overlay-secondary",
                        disabled: a,
                        "aria-pressed": u,
                        "aria-expanded": A,
                        "aria-controls": `${m}-tools`,
                        "aria-label": en,
                        onPointerDown: z,
                        onPointerCancel: W,
                        onClick: (e) => {
                            (e.stopPropagation(), $());
                        },
                    }),
                }),
            ],
        })
    );
}
var F = n(652215);
function H(e) {
    let { streamKey: t } = e,
        { zoomLevel: n, minZoom: f } = i.useContext(a.e9),
        h = n > f,
        A = (0, p.T)("FocusedStreamTile"),
        x = (0, m.B)(t),
        v = A && x,
        E = (0, r.bG)(
            [u.A],
            () => {
                let e = u.A.getActiveStreamForStreamKey(t);
                return null != e && e.state !== F.XYD.ENDED && e.state !== F.XYD.FAILED;
            },
            [t],
        ),
        C = (0, r.bG)([o.A], () => null != o.A.getGuestStreamKey()),
        j = (0, r.bG)([c.A], () => c.A.getRTCConnection()),
        S = (0, r.bG)([d.default], () => d.default.getCurrentUser()),
        I = (0, s.Ay)(S?.getAvatarURL(null, 80), "#ffffff", !1);
    return (i.useEffect(() => {
        function e() {
            w.A.getActiveStreamKey() === t && (0, g.w3)(null);
        }
        return ((v && E && !h) || e(), e);
    }, [v, E, t, h]),
    v && E)
        ? (0, l.jsx)(
              V,
              { streamKey: t, connection: j ?? null, avatarColor: I, disabled: C || h, zoomed: h },
              C || h ? "disabled" : "enabled",
          )
        : null;
}
