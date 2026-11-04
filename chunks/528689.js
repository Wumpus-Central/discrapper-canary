t.d(n, { A: () => e2 });
var r = t(477900),
    l = t(582128),
    i = t(963935),
    s = t(503698),
    a = t.n(s),
    o = t(462180),
    c = t(894858),
    u = t(315826);
function d(e) {
    let { node: n, children: t } = e,
        [i, s] = l.useState(!1),
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            let e = c.A.subscribe(
                (e) => e.requestFlashKey,
                (e) => {
                    e === n.key &&
                        (clearTimeout(d.current),
                        s(!0),
                        (d.current = setTimeout(() => {
                            (s(!1), c.A.setState({ requestFlashKey: void 0 }));
                        }, 2250)));
                },
                { equalityFn: o.x, fireImmediately: !0 },
            );
            return () => {
                (clearTimeout(d.current), e());
            };
        }, [n.key, n.type]),
        (0, r.jsx)("div", { tabIndex: -1, "data-nav-anchor-key": n.key, className: a()(u.kL, i && u.jl), children: t })
    );
}
var x = t(331322),
    j = t(979926);
function m(e) {
    let { children: n } = e;
    return (0, r.jsx)(x.B, { className: j.n, gap: 0, padding: { top: "xs", bottom: "xs" }, children: n });
}
var f = t(834730),
    g = t(821609),
    h = t(374193),
    p = t(176524);
t(321073);
var v = t(517057);
function y(e) {
    let { persistentBadge: n, dismissibleBadges: t } = e;
    return (function (e) {
        let { persistentBadgeType: n, dismissibleBadgeType: t } = e;
        return "beta" === n ? "beta" : (t ?? n);
    })({
        persistentBadgeType: n?.badgeType === h.Xi.BETA ? "beta" : void 0,
        dismissibleBadgeType: (function (e) {
            let n = l.useMemo(() => {
                let n = [];
                return (
                    e?.forEach((e) => {
                        let { badgeType: t, dismissibleContent: r } = e;
                        t === h.Xi.NEW && n.push(r);
                    }),
                    n
                );
            }, [e]);
            if ((0, v.uW)(n)) return "new";
        })(t),
    });
}
var b = t(791498),
    E = t(534514),
    S = t(805251),
    N = t(890856),
    T = t(763811);
function C(e) {
    let {
            ref: n,
            leadingElement: t,
            trailingElement: l,
            title: i,
            description: s,
            badge: o,
            "aria-label": c,
            role: u,
            onClick: d,
            style: x,
        } = e,
        j = (0, r.jsxs)("div", {
            className: a()(T.EA, null != d && T.vk),
            ref: n,
            style: x,
            children: [
                null != t && (0, r.jsx)("div", { className: T._y, children: t }),
                (0, r.jsxs)("div", {
                    className: T.jw,
                    children: [
                        (0, r.jsxs)("div", {
                            className: T.eg,
                            children: [
                                (0, r.jsx)(E.D, { variant: "heading-sm/medium", color: "text-strong", children: i }),
                                null != o && (0, r.jsx)(S.E, { type: o, variant: "primary" }),
                            ],
                        }),
                        null != s && (0, r.jsx)(f.E, { variant: "body-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                null != l && (0, r.jsx)("div", { className: T.EY, children: l }),
            ],
        });
    return null != d
        ? (0, r.jsx)(N.s, { onClick: d, "aria-label": c, buttonProps: null != u ? { role: u } : void 0, children: j })
        : j;
}
function k(e) {
    let { decoration: n } = e;
    if (n.type === h.hp.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function A(e) {
    let { decoration: n } = e,
        { StronglyDiscouragedCustomComponent: t } = n;
    return (0, r.jsx)(t, {});
}
function O(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(f.E, { variant: "body-md/medium", children: n.text });
}
function B(e) {
    let { decoration: n } = e;
    switch (n.type) {
        case h.fq.TEXT:
            return (0, r.jsx)(O, { decoration: n });
        case h.fq.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(A, { decoration: n });
    }
}
function I(e) {
    let { node: n } = e,
        {
            useLabel: t,
            useTitle: i,
            useAriaLabel: s,
            useSubtitle: a,
            useVariant: o,
            useDisabled: c,
            useLoading: u,
            useLeadingDecoration: d,
            useTrailingDecoration: j,
            getDismissibleBadges: m,
            onClick: f,
        } = n,
        h = (0, b.q)(n),
        p = u?.() ?? !1,
        [v, E] = l.useState(!1),
        S = i(),
        N = a?.(),
        T = t(),
        A = s?.(),
        O = o?.(),
        I = c?.(),
        R = d?.(),
        L = j?.(),
        D = y({ persistentBadge: void 0, dismissibleBadges: m?.() });
    return (0, r.jsx)(C, {
        title: S,
        badge: D,
        description: N,
        leadingElement: null != R ? (0, r.jsx)(k, { decoration: R }) : null,
        trailingElement: (0, r.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "end",
            gap: "md",
            children: [
                null != L && (0, r.jsx)(B, { decoration: L }),
                (0, r.jsx)(g.$, {
                    onClick: function () {
                        h();
                        let e = f();
                        e instanceof Promise && (E(!0), e.finally(() => E(!1)));
                    },
                    text: T,
                    "aria-label": A,
                    variant: O,
                    disabled: I,
                    loading: v || p,
                }),
            ],
        }),
    });
}
var R = t(881636),
    L = t(272053),
    D = t(199966);
function _(e) {
    let { accessibleDirectory: n } = (0, D._)(),
        t = n.entry(e);
    return {
        parentPanelNode: t?.parentPanelKey != null ? n.get(t.parentPanelKey) : void 0,
        parentSidebarItemNode: t?.parentSidebarItemKey != null ? n.get(t.parentSidebarItemKey) : void 0,
    };
}
var w = t(751075);
function Z(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(w.q, { icons: n.icons });
}
function F(e) {
    let { decoration: n } = e;
    if (n.type === h.wF.STACKED_ICONS) return (0, r.jsx)(Z, { decoration: n });
}
var G = t(321557);
function q(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: l, useTitle: i, useSubtitle: s } = n,
        a = l?.(),
        o = s?.(),
        { parentPanelNode: c, parentSidebarItemNode: u } = _(t),
        d = i?.(),
        x = c?.useTitle?.(),
        j = d ?? x,
        m = (0, b.q)(n);
    if (null == c || null == j) return null;
    let f = null != u ? u.icon : void 0;
    return (0, r.jsx)(C, {
        role: "link",
        "aria-label": x,
        title: j,
        description: o,
        leadingElement: null != f && (0, r.jsx)(p.A, { icon: f }),
        trailingElement: (0, r.jsxs)("div", {
            className: G.M,
            children: [null != a && (0, r.jsx)(F, { decoration: a }), (0, r.jsx)(R.u, {})],
        }),
        onClick: function () {
            (L.A.navigate(t, { animateSidebarScroll: !1 }), m());
        },
    });
}
var P = t(771871);
function M(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: l,
            useTitle: i,
            useSubtitle: s,
            useDisabled: a,
            useOptions: o,
            usePersistentBadge: c,
            getDismissibleBadges: u,
            useHelperText: d,
        } = n,
        x = i(),
        j = s?.(),
        f = t(),
        g = o(),
        h = y({ persistentBadge: c?.(), dismissibleBadges: u?.() }),
        p = a?.(),
        v = (0, b.q)(n),
        E = d?.();
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(P.z, {
            label: x,
            description: j,
            options: g,
            value: f,
            badge: h,
            onChange: (e) => {
                (v(), l(e));
            },
            disabled: p,
            helperText: E,
        }),
    });
}
var U = t(691885);
function K(e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubtitle: i,
            useValue: s,
            setValue: a,
            useOptions: o,
            useDisabled: c,
            clearable: u,
            closeOnSelect: d,
            wrapTags: x,
            selectionMode: j,
            usePersistentBadge: f,
            getDismissibleBadges: g,
        } = n,
        h = t(),
        p = i?.(),
        v = s(),
        E = o(),
        S = c?.(),
        N = y({ persistentBadge: f?.(), dismissibleBadges: g?.() }),
        T = (0, b.q)(n),
        C = l.useMemo(() => {
            var e, n;
            return {
                selectionMode: j,
                value: v,
                onSelectionChange:
                    ((e = a),
                    (n = T),
                    (t) => {
                        (n(), e(t));
                    }),
            };
        }, [j, v, a, T]);
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(U.l, {
            ...C,
            label: h,
            description: p,
            options: E,
            wrapTags: x,
            closeOnSelect: d,
            clearable: u,
            disabled: S,
            layout: "horizontal-responsive",
            fullWidth: !0,
            fitContent: !0,
            badge: N,
        }),
    });
}
var X = t(893007);
function z(e) {
    let { node: n } = e,
        {
            setValue: t,
            getInitialValue: i,
            minValue: s,
            maxValue: a,
            useDefaultValue: o,
            useTitle: c,
            useSubtitle: u,
            useDisabled: d,
            useExternalValue: x,
            onValueRender: j,
            asValueChanges: f,
            markers: g,
            onMarkerRender: h,
            stickToMarkers: p,
            fieldLayout: v,
            usePersistentBadge: E,
            getDismissibleBadges: S,
            useHelperText: N,
        } = n,
        T = x?.(),
        [C, k] = l.useState(() => T ?? i()),
        [A, O] = l.useState(T);
    T !== A && (O(T), null != T && k(T));
    let B = c(),
        I = u?.(),
        R = d?.(),
        L = o?.(),
        D = y({ persistentBadge: E?.(), dismissibleBadges: S?.() }),
        _ = N?.(),
        w = (0, b.q)(n),
        Z = g?.map((e) => {
            let n = null != h ? h(e) : e;
            return { value: e, label: null != n ? `${n}` : void 0 };
        });
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(X.A, {
            label: B,
            description: I,
            disabled: R,
            value: C,
            minValue: s,
            maxValue: a,
            defaultMark: L,
            formatValue: function (e) {
                return null != j ? j(e) : `${((100 * (e - s)) / (a - s)).toFixed(0)}%`;
            },
            onChange: function (e) {
                (k(e), f?.(e));
            },
            onChangeEnd: function (e) {
                (w(), t?.(e));
            },
            marks: Z,
            snapToMarks: p,
            layout: v,
            badge: D,
            helperText: _,
        }),
    });
}
function V(e) {
    let { decoration: n } = e;
    if (n.type === h.$d.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function W(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(f.E, { variant: "body-md/medium", children: n.text });
}
function Y(e) {
    let { decoration: n } = e;
    if (n.type === h.Ln.TEXT) return (0, r.jsx)(W, { decoration: n });
}
function $(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s, getDismissibleBadges: a } = n,
        o = t(),
        c = l?.(),
        u = i?.(),
        d = s?.(),
        x = y({ persistentBadge: void 0, dismissibleBadges: a?.() });
    return (0, r.jsx)(C, {
        title: o,
        badge: x,
        description: c,
        leadingElement: null != u ? (0, r.jsx)(V, { decoration: u }) : null,
        trailingElement: null != d ? (0, r.jsx)(Y, { decoration: d }) : null,
    });
}
var H = t(143129),
    J = t(683071);
function Q(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: l,
            useTitle: i,
            useSubtitle: s,
            useDisabled: a,
            useDisabledMessage: o,
            disabledMessageType: c = "warning",
            usePersistentBadge: u,
            hasIcon: d,
            getDismissibleBadges: j,
        } = n,
        f = i(),
        g = s?.(),
        h = t(),
        p = a?.() ?? !1,
        v = o?.(),
        E = y({ persistentBadge: u?.(), dismissibleBadges: j?.() }),
        S = (0, b.q)(n);
    return (0, r.jsx)(m, {
        children: (0, r.jsxs)(x.B, {
            gap: 12,
            children: [
                (0, r.jsx)(H.d, {
                    label: f,
                    description: g,
                    badge: E,
                    checked: h,
                    hasIcon: d,
                    onChange: function (e) {
                        (S(), l(e));
                    },
                    disabled: p,
                }),
                p && null != v ? (0, r.jsx)(J.w, { type: c, message: v, role: "status" }) : null,
            ],
        }),
    });
}
var ee = t(435558),
    en = t(770178),
    et = t(101396),
    er = t(51340),
    el = t(138017),
    ei = t(646514),
    es = t(559106),
    ea = t(526943);
function eo(e) {
    let {
            ref: n,
            title: t,
            collapsedSubtitle: i,
            isExpanded: s,
            onExpandedChange: o,
            children: c,
            animate: u = !0,
        } = e,
        d = l.useRef(null),
        [j, m] = l.useState(null),
        f = s && null != j;
    return (
        l.useLayoutEffect(() => {
            null != d.current && null == j && m(d.current.clientHeight);
        }, [j]),
        (0, r.jsxs)(et.EN, {
            ref: n,
            isExpanded: s,
            onExpandedChange: o,
            children: [
                (0, r.jsx)(C, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: f ? void 0 : i,
                    trailingElement: (0, r.jsx)(es.vN, {
                        children: (0, r.jsx)(er.$, {
                            slot: "trigger",
                            className: ea.bW,
                            children: (0, r.jsx)(el.j, {
                                className: a()(ea.Kk, { [ea.kX]: !s }),
                                color: ei.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => o(!s),
                }),
                (0, r.jsx)(et.kS, {
                    className: a()(ea.nd, { [ea.t5]: !u }),
                    children: (0, r.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: c }),
                }),
            ],
        })
    );
}
function ec(e) {
    return c.A.getField("requestAccordionOpenKey") === e.key;
}
let eu = l.memo(function (e) {
    let { node: n, renderSetting: t } = e,
        { useTitle: i, layout: s, useCollapsedSubtitle: a } = n,
        [o, u] = l.useState(!0),
        [d, x] = l.useState(() => ec(n)),
        j = l.useRef(d),
        m = l.useRef(ec(n) ? "navigation" : null);
    l.useEffect(
        () =>
            c.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (j.current ? L.A.notifyAccordionExpanded(n.key) : ((m.current = "navigation"), u(!1), x(!0)));
                },
                { equalityFn: (e, n) => e === n, fireImmediately: !0 },
            ),
        [n.key, d],
    );
    let f = l.useCallback(
            (e) => {
                if (null != e.target && d !== j.current && ((j.current = d), j.current))
                    switch (m.current) {
                        case "navigation":
                            (u(!0), L.A.notifyAccordionExpanded(n.key));
                            break;
                        case "user":
                            L.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [d, n.key],
        ),
        g = l.useMemo(() => (0, ee.debounce)(f, 50), [f]),
        h = (0, en.w)(g),
        p = i?.(d),
        v = a?.(),
        y = (0, b.q)(n);
    return (0, r.jsx)(eo, {
        ref: h,
        title: p,
        collapsedSubtitle: v,
        isExpanded: d,
        onExpandedChange: function (e) {
            ((m.current = "user"), y(), x(e));
        },
        animate: o,
        children: s.map(t),
    });
});
var ed = t(793409);
function ex(e) {
    let { node: n, renderSetting: t } = e,
        l = n.layout.find((e) => e.key === n.headerSettingKey),
        i = n.layout.filter((e) => e.key !== n.headerSettingKey),
        s = i.length > 0;
    return (0, r.jsxs)("div", {
        className: ed.Nr,
        children: [
            null != l && (0, r.jsx)("div", { className: a()(ed.MY, { [ed.Q2]: !s }), children: t(l) }),
            s && (0, r.jsx)("div", { className: ed.zI, children: i.map(t) }),
        ],
    });
}
var ej = t(215566),
    em = t(885574),
    ef = t(43105),
    eg = t(939249);
function eh(e) {
    let { decoration: n } = e,
        t = l.useRef(null),
        {
            isOpen: i,
            scheduleOpen: s,
            scheduleClose: a,
            close: o,
            popoverRef: c,
        } = (function () {
            let [e, n] = l.useState(!1),
                [t, r] = l.useState(null),
                i = l.useRef(null),
                s = l.useRef(null),
                a = l.useCallback((e) => {
                    r(e);
                }, []),
                o = l.useCallback(() => {
                    (clearTimeout(s.current),
                        (s.current = null),
                        null == i.current &&
                            (i.current = setTimeout(() => {
                                ((i.current = null), n(!0));
                            }, 250)));
                }, []),
                c = l.useCallback(() => {
                    (clearTimeout(i.current),
                        (i.current = null),
                        null == s.current &&
                            (s.current = setTimeout(() => {
                                ((s.current = null), n(!1));
                            }, 150)));
                }, []),
                u = l.useCallback(() => {
                    (clearTimeout(i.current), (i.current = null), clearTimeout(s.current), (s.current = null), n(!1));
                }, []);
            return (
                l.useEffect(
                    () => () => {
                        (clearTimeout(i.current), clearTimeout(s.current));
                    },
                    [],
                ),
                l.useEffect(() => {
                    if (null != t)
                        return (
                            t.addEventListener("mouseenter", o),
                            t.addEventListener("mouseleave", c),
                            t.addEventListener("focusin", o),
                            t.addEventListener("focusout", c),
                            () => {
                                (t.removeEventListener("mouseenter", o),
                                    t.removeEventListener("mouseleave", c),
                                    t.removeEventListener("focusin", o),
                                    t.removeEventListener("focusout", c));
                            }
                        );
                }, [t, o, c]),
                { isOpen: e, scheduleOpen: o, scheduleClose: c, close: u, popoverRef: a }
            );
        })(),
        { ariaLabel: u, popoverProps: d } = n,
        { getActions: x, ...j } = d,
        m = l.useMemo(() => x(o), [x, o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eg.D, {
                tag: "span",
                innerRef: t,
                "aria-label": u,
                onMouseEnter: s,
                onMouseLeave: a,
                onFocus: s,
                onBlur: a,
                children: (0, r.jsx)(em.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)(ef.A, {
                ...j,
                actions: m,
                targetElementRef: t,
                popoverRef: c,
                shouldShow: i,
                onRequestClose: o,
                scrollBehavior: "close",
            }),
        ],
    });
}
function ep(e) {
    let { decoration: n } = e;
    if (n.type === h.p3.INFO_POPOVER) return (0, r.jsx)(eh, { decoration: n });
}
function ev(e) {
    let { decoration: n } = e,
        { type: t, id: l, ...i } = n;
    return (0, r.jsx)(g.$, { variant: "secondary", ...i });
}
function ey(e) {
    let { decoration: n } = e,
        t = n.button;
    return (0, r.jsx)(t, {});
}
function eb(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(x.B, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: n.buttons.map((e) => {
            switch (e.type) {
                case h.UV.BUTTON:
                    return (0, r.jsx)(ev, { decoration: e }, e.id);
                case h.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, r.jsx)(ey, { decoration: e }, e.id);
            }
        }),
    });
}
function eE(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(w.q, { icons: n.icons });
}
function eS(e) {
    let { decoration: n } = e;
    if (null == n) return null;
    switch (n.type) {
        case h.WX.BUTTON_GROUP:
            return (0, r.jsx)(eb, { decoration: n });
        case h.WX.STACKED_ICONS:
            return (0, r.jsx)(eE, { decoration: n });
    }
}
function eN(e) {
    let { title: n, subtitle: t, subtitleDecoration: l, decoration: i, persistentBadge: s } = e;
    return (0, r.jsxs)(x.B, {
        direction: "horizontal",
        align: "center",
        gap: 24,
        padding: { bottom: "lg" },
        children: [
            (0, r.jsxs)(x.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, r.jsxs)(x.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, r.jsx)(E.D, { variant: "heading-xl/medium", color: "text-strong", children: n }),
                            null != s && (0, r.jsx)(ej.A, { badge: s }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(f.E, { variant: "body-sm/normal", color: "text-subtle", children: t }),
                                null != l && (0, r.jsx)(ep, { decoration: l }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(eS, { decoration: i }),
        ],
    });
}
var eT = t(964486),
    eC = t(864043);
function ek(e) {
    let { notice: n } = e,
        { noticeType: t, title: i, text: s, button: a, onDismiss: o, role: c } = n,
        [u, d] = l.useState(!1);
    return (
        (0, eT.Ay)(() => {
            n.trackView?.();
        }),
        (0, r.jsx)(J.w, {
            type: t,
            title: i,
            message: s,
            action:
                null != a
                    ? {
                          text: a.text,
                          onClick: async function () {
                              d(!0);
                              try {
                                  await a?.onClick();
                              } finally {
                                  d(!1);
                              }
                          },
                          loading: u,
                      }
                    : void 0,
            onDismiss: o,
            role: c,
        })
    );
}
function eA(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, r.jsx)(t, {});
}
function eO(e) {
    let { notice: n } = e;
    switch (n.type) {
        case h.lT.INLINE_NOTICE:
            return (0, r.jsx)(ek, { notice: n });
        case h.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(eA, { notice: n });
    }
}
function eB(e) {
    let { notice: n } = e;
    return (0, r.jsx)("div", { className: eC.E, children: (0, r.jsx)(eO, { notice: n }) });
}
let eI = l.memo(function (e) {
    let { node: n, renderSetting: t } = e,
        {
            useTitle: l,
            useSubnavLabel: i,
            useSubtitle: s,
            layout: a,
            useInlineNotice: o,
            useHeaderDecoration: c,
            useSubtitleDecoration: u,
            usePersistentBadge: d,
        } = n,
        j = l?.(),
        m = s?.(),
        f = o?.(),
        g = c?.(),
        h = u?.(),
        p = null != l || null != i,
        v = d?.();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != j &&
                (0, r.jsx)(eN, { title: j, subtitle: m, subtitleDecoration: h, decoration: g, persistentBadge: v }),
            (0, r.jsx)("div", {
                "data-settings-category-key": p ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, r.jsxs)(x.B, { gap: "xs", children: [null != f && (0, r.jsx)(eB, { notice: f }), a.map(t)] }),
        ],
    });
});
var eR = t(140735),
    eL = t(517759);
function eD(e) {
    let { title: n, subtitle: t, isHiddenVisually: l } = e;
    return null == n || "" === n
        ? null
        : l
          ? (0, r.jsx)(eR.A, { tag: "legend", children: n })
          : (0, r.jsx)(f.E, {
                tag: "legend",
                variant: "body-md/semibold",
                color: "text-strong",
                className: a()(eL.D, { [eL.h]: null != t && "" !== t }),
                children: n,
            });
}
let e_ = l.memo(function (e) {
    let { node: n, renderSetting: t } = e,
        { useTitle: i, useSubtitle: s, layout: a, variant: o = "default", isTitleHiddenVisually: c } = n,
        u = i(),
        d = s?.(),
        j = l.useId(),
        m = null != u && "" !== u,
        g = null != d && "" !== d,
        h = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(o);
    return (0, r.jsxs)("fieldset", {
        "aria-describedby": g ? j : void 0,
        children: [
            (0, r.jsx)(eD, { title: u, subtitle: d, isHiddenVisually: c }),
            g ? (0, r.jsx)(f.E, { variant: "body-sm/normal", color: "text-default", id: j, children: d }) : null,
            (0, r.jsx)(x.B, { gap: h, padding: { top: m && !c ? 16 : 0 }, children: a.map(t) }),
        ],
    });
});
var ew = t(404778),
    eZ = t(792996),
    eF = t(777919);
function eG(e) {
    var n;
    let { node: t, renderSetting: i } = e,
        [s, a] = l.useState(!1),
        { layout: o, collapseAfter: c, useCollapsibleTitle: u, useCollapsedSubtitle: d } = t,
        j = null != c ? o.slice(0, c) : o,
        m = null != c ? o.slice(c) : [],
        f =
            u?.(s, m.length) ??
            ((n = m.length),
            s
                ? eZ.intl.formatToPlainString(eZ.t["3SHL+d"], { count: n })
                : eZ.intl.formatToPlainString(eZ.t["8JRFyZ"], { count: n })),
        g = d?.();
    return (0, r.jsxs)(x.B, {
        gap: 8,
        children: [
            j.map((e, n) =>
                (0, r.jsxs)(l.Fragment, { children: [i(e), n !== j.length - 1 && (0, r.jsx)(ew.c, {})] }, e.key),
            ),
            m.length > 0 &&
                (0, r.jsxs)("div", {
                    className: eF.CT,
                    children: [
                        (0, r.jsx)(ew.c, { className: eF.mn }),
                        (0, r.jsx)(eo, {
                            title: f,
                            collapsedSubtitle: g,
                            isExpanded: s,
                            onExpandedChange: a,
                            children: (0, r.jsx)(x.B, {
                                gap: 8,
                                children: m.map((e, n) =>
                                    (0, r.jsxs)(
                                        l.Fragment,
                                        { children: [i(e), n !== m.length - 1 && (0, r.jsx)(ew.c, {})] },
                                        e.key,
                                    ),
                                ),
                            }),
                        }),
                    ],
                }),
        ],
    });
}
function eq(e) {
    let { decoration: n } = e;
    if (n.type === h.Xy.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
var eP = t(552585);
function eM(e) {
    let { decoration: n } = e;
    return null == n.text ? null : (0, r.jsx)(f.E, { variant: "body-md/medium", className: eP.q, children: n.text });
}
function eU(e) {
    let { decoration: n } = e;
    if (n.type === h.xn.TEXT) return (0, r.jsx)(eM, { decoration: n });
}
function eK(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s } = n,
        a = t?.(),
        o = l?.(),
        c = i?.(),
        u = s?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = _(d),
        m = j?.useTitle?.(),
        f = a ?? m;
    return null == j || null == f
        ? null
        : (0, r.jsx)(C, {
              role: "link",
              "aria-label": m,
              title: f,
              leadingElement: null != c ? (0, r.jsx)(eq, { decoration: c }) : null,
              description: o,
              trailingElement: (0, r.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, r.jsx)(eU, { decoration: u }), (0, r.jsx)(R.u, {})],
              }),
              onClick: () => L.A.navigate(d),
          });
}
var eX = t(855986),
    ez = t(628274),
    eV = t(871682),
    eW = t(516521),
    eY = t(707554),
    e$ = t(823092),
    eH = t(397274),
    eJ = t(525473);
function eQ(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, e$.L_)(),
        a = n?.stores;
    l.useEffect(() => {
        if (null != a) {
            let e = new eX.ru(a, () => {
                s(a);
            });
            return (
                e.attach("SettingPanelNotice"),
                s(a),
                () => {
                    e.detach();
                }
            );
        }
    }, [a, s]);
    let o = l.useMemo(() => {
        if (null == n || !i) return null;
        let { element: e } = n;
        return (0, r.jsx)(eV.F, { className: eJ.lm, children: (0, r.jsx)(e, {}) });
    }, [n, i]);
    return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(ez.F, { component: "div", children: o })] });
}
function e0(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, r.jsx)("div", {
        className: a()(eJ.oK, { [eJ.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, r.jsx)(t, {}),
    });
}
function e1(e) {
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = l.useRef(null),
        a = i?.();
    return null != a
        ? (0, r.jsx)(a, {})
        : (0, r.jsx)(eQ, {
              notice: n,
              children: (0, r.jsxs)(eW.Gt, {
                  className: eJ.XG,
                  scrollbarGutter: "both-edges",
                  ref: (e) => {
                      eH.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: eJ.nd,
                          ref: s,
                          children: (0, r.jsx)(es.xp, { containerRef: s, children: t }),
                      }),
                      (0, r.jsx)("div", { className: eJ.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function e6(e) {
    let { layout: n, decoration: t, renderSetting: i } = e;
    return (0, r.jsxs)("div", {
        className: eJ.LZ,
        children: [
            null != t && (0, r.jsx)(e0, { decoration: t }),
            (0, r.jsx)(eY.F, {
                forceLevel: 2,
                children: n.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        { children: [i(e), t !== n.length - 1 && (0, r.jsx)(ew.c, { className: eJ.yF })] },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function e5(e) {
    let { node: n, renderSetting: t } = e,
        { layout: l } = n;
    if ((0, i.zS)(l))
        return (0, r.jsx)(
            e1,
            {
                notice: n.notice,
                useObscuredNotice: n.useObscuredNotice,
                children: (0, r.jsx)(e6, { layout: l, decoration: n.decoration, renderSetting: t }),
            },
            n.key,
        );
    throw Error("Panels must have a list of categories");
}
var e8 = t(749364);
function e7(e) {
    let { node: n, renderSetting: t } = e;
    return (0, r.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, r.jsx)(E.D, {
                variant: "heading-sm/semibold",
                color: "text-muted",
                className: e8.D,
                children: eZ.intl.string(eZ.t.rPREPG),
            }),
            n.layout.map(t),
        ],
    });
}
var e9 = t(187707);
let e3 = l.memo(function (e) {
    let { node: n, renderSetting: t } = e;
    return (0, r.jsx)("div", { className: e9.l, children: n.layout.map(t) });
});
function e4(e) {
    var n;
    let { node: t } = e;
    switch (
        ((n = t.initialize),
        l.useEffect(() => {
            let e = n?.();
            return () => {
                e?.();
            };
        }, [n]),
        t.type)
    ) {
        case i.Z6.ROOT:
        case i.Z6.SECTION:
        case i.Z6.SIDEBAR_ITEM:
            throw Error(`${t.type} nodes should never be rendered directly`);
        case i.Z6.PANEL:
            return (0, r.jsx)(e5, { node: t, renderSetting: ne });
        case i.Z6.LIST:
            return (0, r.jsx)(eG, { node: t, renderSetting: ne });
        case i.Z6.FIELD_SET:
            return (0, r.jsx)(e_, { node: t, renderSetting: ne });
        case i.Z6.RELATED:
            return (0, r.jsx)(e7, { node: t, renderSetting: ne });
        case i.Z6.CARD:
            return (0, r.jsx)(ex, { node: t, renderSetting: ne });
        case i.Z6.CATEGORY:
            return (0, r.jsx)(eI, { node: t, renderSetting: ne });
        case i.Z6.ACCORDION:
            return (0, r.jsx)(eu, { node: t, renderSetting: ne });
        case i.Z6.SPLIT:
            return (0, r.jsx)(e3, { node: t, renderSetting: ne });
        case i.Z6.TOGGLE:
            return (0, r.jsx)(Q, { node: t });
        case i.Z6.STATIC:
            return (0, r.jsx)($, { node: t });
        case i.Z6.BUTTON:
            return (0, r.jsx)(I, { node: t });
        case i.Z6.SELECT:
            return (0, r.jsx)(K, { node: t });
        case i.Z6.RADIO:
            return (0, r.jsx)(M, { node: t });
        case i.Z6.SLIDER:
            return (0, r.jsx)(z, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, r.jsx)(q, { node: t });
        case i.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, r.jsx)(eK, { node: t });
        case i.Z6.CUSTOM:
            return (0, r.jsx)(m, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function e2(e) {
    let { node: n } = e;
    return n.type === i.Z6.PANEL
        ? (0, r.jsx)(e4, { node: n })
        : (0, r.jsx)(d, { node: n, children: (0, r.jsx)(e4, { node: n }) });
}
function ne(e) {
    return (0, r.jsx)(e2, { node: e }, e.key);
}
