t.d(n, { A: () => nt });
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
    h = t(107384),
    p = t(176524);
t(321073);
var v = t(47899);
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
var E = t(174459),
    b = t(324593),
    S = t(652215);
function T(e) {
    return l.useCallback(() => {
        let n = e;
        for (; "parent" in n && null != n.parent;) n = n.parent;
        let t = "analyticsKey" in e ? e.analyticsKey : e.key;
        null != t &&
            E.default.track(S.HAw.UI_SETTING_INTERACTED, {
                key: t,
                setting_type: n.analyticsKey ?? n.key,
                search_session_id: b.A.getSearchSessionId(),
            });
    }, [e]);
}
var N = t(297264),
    k = t(62010),
    C = t(890856),
    A = t(763811);
function I(e) {
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
            className: a()(A.EA, null != d && A.vk),
            ref: n,
            style: x,
            children: [
                null != t && (0, r.jsx)("div", { className: A._y, children: t }),
                (0, r.jsxs)("div", {
                    className: A.jw,
                    children: [
                        (0, r.jsxs)("div", {
                            className: A.eg,
                            children: [
                                (0, r.jsx)(N.D, { variant: "heading-md/medium", color: "text-strong", children: i }),
                                null != o && (0, r.jsx)(k.E, { type: o, variant: "primary" }),
                            ],
                        }),
                        null != s && (0, r.jsx)(f.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                null != l && (0, r.jsx)("div", { className: A.EY, children: l }),
            ],
        });
    return null != d
        ? (0, r.jsx)(C.s, { onClick: d, "aria-label": c, buttonProps: null != u ? { role: u } : void 0, children: j })
        : j;
}
function O(e) {
    let { decoration: n } = e;
    if (n.type === h.hp.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function B(e) {
    let { decoration: n } = e,
        { StronglyDiscouragedCustomComponent: t } = n;
    return (0, r.jsx)(t, {});
}
function R(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(f.E, { variant: "text-md/medium", children: n.text });
}
function L(e) {
    let { decoration: n } = e;
    switch (n.type) {
        case h.fq.TEXT:
            return (0, r.jsx)(R, { decoration: n });
        case h.fq.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(B, { decoration: n });
    }
}
function _(e) {
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
        h = T(n),
        p = u?.() ?? !1,
        [v, E] = l.useState(!1),
        b = i(),
        S = a?.(),
        N = t(),
        k = s?.(),
        C = o?.(),
        A = c?.(),
        B = d?.(),
        R = j?.(),
        _ = y({ persistentBadge: void 0, dismissibleBadges: m?.() });
    return (0, r.jsx)(I, {
        title: b,
        badge: _,
        description: S,
        leadingElement: null != B ? (0, r.jsx)(O, { decoration: B }) : null,
        trailingElement: (0, r.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "end",
            gap: "md",
            children: [
                null != R && (0, r.jsx)(L, { decoration: R }),
                (0, r.jsx)(g.$, {
                    onClick: function () {
                        h();
                        let e = f();
                        e instanceof Promise && (E(!0), e.finally(() => E(!1)));
                    },
                    text: N,
                    "aria-label": k,
                    variant: C,
                    disabled: A,
                    loading: v || p,
                }),
            ],
        }),
    });
}
var D = t(881636),
    w = t(272053),
    Z = t(199966);
function F(e) {
    let { accessibleDirectory: n } = (0, Z._)(),
        t = n.entry(e);
    return {
        parentPanelNode: t?.parentPanelKey != null ? n.get(t.parentPanelKey) : void 0,
        parentSidebarItemNode: t?.parentSidebarItemKey != null ? n.get(t.parentSidebarItemKey) : void 0,
    };
}
var G = t(751075);
function P(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(G.qP, { icons: n.icons });
}
function K(e) {
    let { decoration: n } = e;
    if (n.type === h.wF.STACKED_ICONS) return (0, r.jsx)(P, { decoration: n });
}
var M = t(321557);
function U(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: l, useTitle: i, useSubtitle: s } = n,
        a = l?.(),
        o = s?.(),
        { parentPanelNode: c, parentSidebarItemNode: u } = F(t),
        d = i?.(),
        x = c?.useTitle?.(),
        j = d ?? x,
        m = T(n);
    if (null == c || null == j) return null;
    let f = null != u ? u.icon : void 0;
    return (0, r.jsx)(I, {
        role: "link",
        "aria-label": x,
        title: j,
        description: o,
        leadingElement: null != f && (0, r.jsx)(p.A, { icon: f }),
        trailingElement: (0, r.jsxs)("div", {
            className: M.M,
            children: [null != a && (0, r.jsx)(K, { decoration: a }), (0, r.jsx)(D.u, {})],
        }),
        onClick: function () {
            (w.A.navigate(t, { animateSidebarScroll: !1 }), m());
        },
    });
}
var X = t(144228);
function q(e) {
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
        v = T(n),
        E = d?.();
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(X.z, {
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
var z = t(691885);
function V(e) {
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
        b = c?.(),
        S = y({ persistentBadge: f?.(), dismissibleBadges: g?.() }),
        N = T(n),
        k = l.useMemo(() => {
            var e, n;
            return {
                selectionMode: j,
                value: v,
                onSelectionChange:
                    ((e = a),
                    (n = N),
                    (t) => {
                        (n(), e(t));
                    }),
            };
        }, [j, v, a, N]);
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(z.l, {
            ...k,
            label: h,
            description: p,
            options: E,
            wrapTags: x,
            closeOnSelect: d,
            clearable: u,
            disabled: b,
            layout: "horizontal-responsive",
            fullWidth: !0,
            fitContent: !0,
            badge: S,
        }),
    });
}
var W = t(893007);
function Y(e) {
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
            getDismissibleBadges: b,
            useHelperText: S,
        } = n,
        N = x?.(),
        [k, C] = l.useState(() => N ?? i()),
        [A, I] = l.useState(N);
    N !== A && (I(N), null != N && C(N));
    let O = c(),
        B = u?.(),
        R = d?.(),
        L = o?.(),
        _ = y({ persistentBadge: E?.(), dismissibleBadges: b?.() }),
        D = S?.(),
        w = T(n),
        Z = g?.map((e) => {
            let n = null != h ? h(e) : e;
            return { value: e, label: null != n ? `${n}` : void 0 };
        });
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(W.A, {
            label: O,
            description: B,
            disabled: R,
            value: k,
            minValue: s,
            maxValue: a,
            defaultMark: L,
            formatValue: function (e) {
                return null != j ? j(e) : `${((100 * (e - s)) / (a - s)).toFixed(0)}%`;
            },
            onChange: function (e) {
                (C(e), f?.(e));
            },
            onChangeEnd: function (e) {
                (w(), t?.(e));
            },
            marks: Z,
            snapToMarks: p,
            layout: v,
            badge: _,
            helperText: D,
        }),
    });
}
function $(e) {
    let { decoration: n } = e;
    if (n.type === h.$d.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function H(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(f.E, { variant: "text-md/medium", children: n.text });
}
function J(e) {
    let { decoration: n } = e;
    if (n.type === h.Ln.TEXT) return (0, r.jsx)(H, { decoration: n });
}
function Q(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s, getDismissibleBadges: a } = n,
        o = t(),
        c = l?.(),
        u = i?.(),
        d = s?.(),
        x = y({ persistentBadge: void 0, dismissibleBadges: a?.() });
    return (0, r.jsx)(I, {
        title: o,
        badge: x,
        description: c,
        leadingElement: null != u ? (0, r.jsx)($, { decoration: u }) : null,
        trailingElement: null != d ? (0, r.jsx)(J, { decoration: d }) : null,
    });
}
var ee = t(193249),
    en = t(683071);
function et(e) {
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
        b = T(n);
    return (0, r.jsx)(m, {
        children: (0, r.jsxs)(x.B, {
            gap: 12,
            children: [
                (0, r.jsx)(ee.d, {
                    label: f,
                    description: g,
                    badge: E,
                    checked: h,
                    hasIcon: d,
                    onChange: function (e) {
                        (b(), l(e));
                    },
                    disabled: p,
                }),
                p && null != v ? (0, r.jsx)(en.w, { type: c, message: v, role: "status" }) : null,
            ],
        }),
    });
}
var er = t(435558),
    el = t(770178),
    ei = t(239882),
    es = t(51340),
    ea = t(138017),
    eo = t(661531),
    ec = t(559106),
    eu = t(526943);
function ed(e) {
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
        (0, r.jsxs)(ei.EN, {
            ref: n,
            isExpanded: s,
            onExpandedChange: o,
            children: [
                (0, r.jsx)(I, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: f ? void 0 : i,
                    trailingElement: (0, r.jsx)(ec.vN, {
                        children: (0, r.jsx)(es.$, {
                            slot: "trigger",
                            className: eu.bW,
                            children: (0, r.jsx)(ea.j, {
                                className: a()(eu.Kk, { [eu.kX]: !s }),
                                color: eo.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => o(!s),
                }),
                (0, r.jsx)(ei.kS, {
                    className: a()(eu.nd, { [eu.t5]: !u }),
                    children: (0, r.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: c }),
                }),
            ],
        })
    );
}
function ex(e) {
    return c.A.getField("requestAccordionOpenKey") === e.key;
}
let ej = l.memo(function (e) {
    let { node: n, renderSetting: t } = e,
        { useTitle: i, layout: s, useCollapsedSubtitle: a } = n,
        [o, u] = l.useState(!0),
        [d, x] = l.useState(() => ex(n)),
        j = l.useRef(d),
        m = l.useRef(ex(n) ? "navigation" : null);
    l.useEffect(
        () =>
            c.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (j.current ? w.A.notifyAccordionExpanded(n.key) : ((m.current = "navigation"), u(!1), x(!0)));
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
                            (u(!0), w.A.notifyAccordionExpanded(n.key));
                            break;
                        case "user":
                            w.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [d, n.key],
        ),
        g = l.useMemo(() => (0, er.debounce)(f, 50), [f]),
        h = (0, el.w)(g),
        p = i?.(d),
        v = a?.(),
        y = T(n);
    return (0, r.jsx)(ed, {
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
var em = t(793409);
function ef(e) {
    let { node: n, renderSetting: t } = e,
        l = n.layout.find((e) => e.key === n.headerSettingKey),
        i = n.layout.filter((e) => e.key !== n.headerSettingKey),
        s = i.length > 0;
    return (0, r.jsxs)("div", {
        className: em.Nr,
        children: [
            null != l && (0, r.jsx)("div", { className: a()(em.MY, { [em.Q2]: !s }), children: t(l) }),
            s && (0, r.jsx)("div", { className: em.zI, children: i.map(t) }),
        ],
    });
}
var eg = t(215566),
    eh = t(885574),
    ep = t(43105),
    ev = t(939249);
function ey(e) {
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
            (0, r.jsx)(ev.D, {
                tag: "span",
                innerRef: t,
                "aria-label": u,
                onMouseEnter: s,
                onMouseLeave: a,
                onFocus: s,
                onBlur: a,
                children: (0, r.jsx)(eh.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)(ep.A, {
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
function eE(e) {
    let { decoration: n } = e;
    if (n.type === h.p3.INFO_POPOVER) return (0, r.jsx)(ey, { decoration: n });
}
function eb(e) {
    let { decoration: n } = e,
        { type: t, id: l, ...i } = n;
    return (0, r.jsx)(g.$, { variant: "secondary", ...i });
}
function eS(e) {
    let { decoration: n } = e,
        t = n.button;
    return (0, r.jsx)(t, {});
}
function eT(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(x.B, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: n.buttons.map((e) => {
            switch (e.type) {
                case h.UV.BUTTON:
                    return (0, r.jsx)(eb, { decoration: e }, e.id);
                case h.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, r.jsx)(eS, { decoration: e }, e.id);
            }
        }),
    });
}
function eN(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(G.qP, { icons: n.icons });
}
function ek(e) {
    let { decoration: n } = e;
    if (null == n) return null;
    switch (n.type) {
        case h.WX.BUTTON_GROUP:
            return (0, r.jsx)(eT, { decoration: n });
        case h.WX.STACKED_ICONS:
            return (0, r.jsx)(eN, { decoration: n });
    }
}
function eC(e) {
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
                            (0, r.jsx)(N.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != s && (0, r.jsx)(eg.A, { badge: s }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(f.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                                null != l && (0, r.jsx)(eE, { decoration: l }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(ek, { decoration: i }),
        ],
    });
}
var eA = t(964486),
    eI = t(864043);
function eO(e) {
    let { notice: n } = e,
        { noticeType: t, title: i, text: s, button: a, onDismiss: o, role: c } = n,
        [u, d] = l.useState(!1);
    async function x() {
        d(!0);
        try {
            await a?.onClick();
        } finally {
            d(!1);
        }
    }
    return (
        (0, eA.Ay)(() => {
            n.trackView?.();
        }),
        (0, r.jsx)(en.w, {
            type: t,
            title: i,
            message: s,
            action: null != a ? { text: a.text, onClick: x, loading: u } : void 0,
            onDismiss: o,
            role: c,
        })
    );
}
function eB(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, r.jsx)(t, {});
}
function eR(e) {
    let { notice: n } = e;
    switch (n.type) {
        case h.lT.INLINE_NOTICE:
            return (0, r.jsx)(eO, { notice: n });
        case h.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(eB, { notice: n });
    }
}
function eL(e) {
    let { notice: n } = e;
    return (0, r.jsx)("div", { className: eI.E, children: (0, r.jsx)(eR, { notice: n }) });
}
let e_ = l.memo(function (e) {
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
                (0, r.jsx)(eC, { title: j, subtitle: m, subtitleDecoration: h, decoration: g, persistentBadge: v }),
            (0, r.jsx)("div", {
                "data-settings-category-key": p ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, r.jsxs)(x.B, { gap: "xs", children: [null != f && (0, r.jsx)(eL, { notice: f }), a.map(t)] }),
        ],
    });
});
var eD = t(140735),
    ew = t(517759);
function eZ(e) {
    let { title: n, subtitle: t, isHiddenVisually: l } = e;
    return null == n || "" === n
        ? null
        : l
          ? (0, r.jsx)(eD.A, { tag: "legend", children: n })
          : (0, r.jsx)(f.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(ew.D, { [ew.h]: null != t && "" !== t }),
                children: n,
            });
}
let eF = l.memo(function (e) {
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
            (0, r.jsx)(eZ, { title: u, subtitle: d, isHiddenVisually: c }),
            g ? (0, r.jsx)(f.E, { variant: "text-sm/normal", color: "text-default", id: j, children: d }) : null,
            (0, r.jsx)(x.B, { gap: h, padding: { top: m && !c ? 16 : 0 }, children: a.map(t) }),
        ],
    });
});
var eG = t(404778),
    eP = t(105292),
    eK = t(777919);
function eM(e) {
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
                ? eP.intl.formatToPlainString(eP.t["3SHL+d"], { count: n })
                : eP.intl.formatToPlainString(eP.t["8JRFyZ"], { count: n })),
        g = d?.();
    return (0, r.jsxs)(x.B, {
        gap: 8,
        children: [
            j.map((e, n) =>
                (0, r.jsxs)(l.Fragment, { children: [i(e), n !== j.length - 1 && (0, r.jsx)(eG.c, {})] }, e.key),
            ),
            m.length > 0 &&
                (0, r.jsxs)("div", {
                    className: eK.CT,
                    children: [
                        (0, r.jsx)(eG.c, { className: eK.mn }),
                        (0, r.jsx)(ed, {
                            title: f,
                            collapsedSubtitle: g,
                            isExpanded: s,
                            onExpandedChange: a,
                            children: (0, r.jsx)(x.B, {
                                gap: 8,
                                children: m.map((e, n) =>
                                    (0, r.jsxs)(
                                        l.Fragment,
                                        { children: [i(e), n !== m.length - 1 && (0, r.jsx)(eG.c, {})] },
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
function eU(e) {
    let { decoration: n } = e;
    if (n.type === h.Xy.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
var eX = t(552585);
function eq(e) {
    let { decoration: n } = e;
    return null == n.text ? null : (0, r.jsx)(f.E, { variant: "text-md/medium", className: eX.q, children: n.text });
}
function ez(e) {
    let { decoration: n } = e;
    if (n.type === h.xn.TEXT) return (0, r.jsx)(eq, { decoration: n });
}
function eV(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s } = n,
        a = t?.(),
        o = l?.(),
        c = i?.(),
        u = s?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = F(d),
        m = j?.useTitle?.(),
        f = a ?? m;
    return null == j || null == f
        ? null
        : (0, r.jsx)(I, {
              role: "link",
              "aria-label": m,
              title: f,
              leadingElement: null != c ? (0, r.jsx)(eU, { decoration: c }) : null,
              description: o,
              trailingElement: (0, r.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, r.jsx)(ez, { decoration: u }), (0, r.jsx)(D.u, {})],
              }),
              onClick: () => w.A.navigate(d),
          });
}
var eW = t(17928),
    eY = t(868285),
    e$ = t(871682),
    eH = t(689175),
    eJ = t(707554),
    eQ = t(823092),
    e0 = t(397274),
    e1 = t(525473);
function e6(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, eQ.L_)(),
        a = n?.stores;
    l.useEffect(() => {
        if (null != a) {
            let e = new eW.ru(a, () => {
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
        return (0, r.jsx)(e$.F, { className: e1.lm, children: (0, r.jsx)(e, {}) });
    }, [n, i]);
    return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(eY.F, { component: "div", children: o })] });
}
function e8(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, r.jsx)("div", {
        className: a()(e1.oK, { [e1.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, r.jsx)(t, {}),
    });
}
function e5(e) {
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = l.useRef(null),
        a = i?.();
    return null != a
        ? (0, r.jsx)(a, {})
        : (0, r.jsx)(e6, {
              notice: n,
              children: (0, r.jsxs)(eH.Gt, {
                  className: e1.XG,
                  scrollbarGutter: "both-edges",
                  ref: (e) => {
                      e0.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: e1.nd,
                          ref: s,
                          children: (0, r.jsx)(ec.xp, { containerRef: s, children: t }),
                      }),
                      (0, r.jsx)("div", { className: e1.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function e7(e) {
    let { layout: n, decoration: t, renderSetting: i } = e;
    return (0, r.jsxs)("div", {
        className: e1.LZ,
        children: [
            null != t && (0, r.jsx)(e8, { decoration: t }),
            (0, r.jsx)(eJ.F, {
                forceLevel: 2,
                children: n.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        { children: [i(e), t !== n.length - 1 && (0, r.jsx)(eG.c, { className: e1.yF })] },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function e2(e) {
    let { node: n, renderSetting: t } = e,
        { layout: l } = n;
    if ((0, i.zS)(l))
        return (0, r.jsx)(
            e5,
            {
                notice: n.notice,
                useObscuredNotice: n.useObscuredNotice,
                children: (0, r.jsx)(e7, { layout: l, decoration: n.decoration, renderSetting: t }),
            },
            n.key,
        );
    throw Error("Panels must have a list of categories");
}
var e3 = t(749364);
function e9(e) {
    let { node: n, renderSetting: t } = e;
    return (0, r.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, r.jsx)(N.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: e3.D,
                children: eP.intl.string(eP.t.rPREPG),
            }),
            n.layout.map(t),
        ],
    });
}
var e4 = t(187707);
let ne = l.memo(function (e) {
    let { node: n, renderSetting: t } = e;
    return (0, r.jsx)("div", { className: e4.l, children: n.layout.map(t) });
});
function nn(e) {
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
            return (0, r.jsx)(e2, { node: t, renderSetting: nr });
        case i.Z6.LIST:
            return (0, r.jsx)(eM, { node: t, renderSetting: nr });
        case i.Z6.FIELD_SET:
            return (0, r.jsx)(eF, { node: t, renderSetting: nr });
        case i.Z6.RELATED:
            return (0, r.jsx)(e9, { node: t, renderSetting: nr });
        case i.Z6.CARD:
            return (0, r.jsx)(ef, { node: t, renderSetting: nr });
        case i.Z6.CATEGORY:
            return (0, r.jsx)(e_, { node: t, renderSetting: nr });
        case i.Z6.ACCORDION:
            return (0, r.jsx)(ej, { node: t, renderSetting: nr });
        case i.Z6.SPLIT:
            return (0, r.jsx)(ne, { node: t, renderSetting: nr });
        case i.Z6.TOGGLE:
            return (0, r.jsx)(et, { node: t });
        case i.Z6.STATIC:
            return (0, r.jsx)(Q, { node: t });
        case i.Z6.BUTTON:
            return (0, r.jsx)(_, { node: t });
        case i.Z6.SELECT:
            return (0, r.jsx)(V, { node: t });
        case i.Z6.RADIO:
            return (0, r.jsx)(q, { node: t });
        case i.Z6.SLIDER:
            return (0, r.jsx)(Y, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, r.jsx)(U, { node: t });
        case i.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, r.jsx)(eV, { node: t });
        case i.Z6.CUSTOM:
            return (0, r.jsx)(m, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function nt(e) {
    let { node: n } = e;
    return n.type === i.Z6.PANEL
        ? (0, r.jsx)(nn, { node: n })
        : (0, r.jsx)(d, { node: n, children: (0, r.jsx)(nn, { node: n }) });
}
function nr(e) {
    return (0, r.jsx)(nt, { node: e }, e.key);
}
