t.d(n, { A: () => ni });
var r = t(477900),
    l = t(582128),
    i = t(963935),
    s = t(503698),
    a = t.n(s),
    c = t(462180),
    o = t(894858),
    u = t(315826);
function d(e) {
    let { node: n, children: t } = e,
        [i, s] = l.useState(!1),
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            let e = o.A.subscribe(
                (e) => e.requestFlashKey,
                (e) => {
                    e === n.key &&
                        (clearTimeout(d.current),
                        s(!0),
                        (d.current = setTimeout(() => {
                            (s(!1), o.A.setState({ requestFlashKey: void 0 }));
                        }, 2250)));
                },
                { equalityFn: c.x, fireImmediately: !0 },
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
var h = t(834730),
    f = t(821609),
    g = t(107384),
    p = t(176524);
t(321073);
var v = t(47899);
function y(e) {
    let { persistentBadge: n, dismissibleBadges: t } = e;
    return (function (e) {
        let { persistentBadgeType: n, dismissibleBadgeType: t } = e;
        return "beta" === n ? "beta" : (t ?? n);
    })({
        persistentBadgeType: n?.badgeType === g.Xi.BETA ? "beta" : void 0,
        dismissibleBadgeType: (function (e) {
            let n = l.useMemo(() => {
                let n = [];
                return (
                    e?.forEach((e) => {
                        let { badgeType: t, dismissibleContent: r } = e;
                        t === g.Xi.NEW && n.push(r);
                    }),
                    n
                );
            }, [e]);
            if ((0, v.uW)(n)) return "new";
        })(t),
    });
}
var b = t(174459),
    E = t(324593),
    N = t(652215);
function T(e) {
    return l.useCallback(() => {
        let n = e;
        for (; "parent" in n && null != n.parent;) n = n.parent;
        let t = "analyticsKey" in e ? e.analyticsKey : e.key;
        null != t &&
            b.default.track(N.HAw.UI_SETTING_INTERACTED, {
                key: t,
                setting_type: n.analyticsKey ?? n.key,
                search_session_id: E.A.getSearchSessionId(),
            });
    }, [e]);
}
var S = t(297264),
    k = t(508770),
    C = t(890856),
    A = t(763811);
function I(e) {
    let {
            ref: n,
            leadingElement: t,
            trailingElement: l,
            title: i,
            description: s,
            badge: c,
            "aria-label": o,
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
                                (0, r.jsx)(S.D, { variant: "heading-md/medium", color: "text-strong", children: i }),
                                null != c && (0, r.jsx)(k.E, { type: c, variant: "brand" }),
                            ],
                        }),
                        null != s && (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                null != l && (0, r.jsx)("div", { className: A.EY, children: l }),
            ],
        });
    return null != d
        ? (0, r.jsx)(C.s, { onClick: d, "aria-label": o, buttonProps: null != u ? { role: u } : void 0, children: j })
        : j;
}
function O(e) {
    let { decoration: n } = e;
    if (n.type === g.hp.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function B(e) {
    let { decoration: n } = e,
        { StronglyDiscouragedCustomComponent: t } = n;
    return (0, r.jsx)(t, {});
}
function R(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(h.E, { variant: "text-md/medium", children: n.text });
}
function L(e) {
    let { decoration: n } = e;
    switch (n.type) {
        case g.fq.TEXT:
            return (0, r.jsx)(R, { decoration: n });
        case g.fq.STRONGLY_DISCOURAGED_CUSTOM:
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
            useVariant: c,
            useDisabled: o,
            useLoading: u,
            useLeadingDecoration: d,
            useTrailingDecoration: j,
            getDismissibleBadges: m,
            onClick: h,
        } = n,
        g = T(n),
        p = u?.() ?? !1,
        [v, b] = l.useState(!1),
        E = i(),
        N = a?.(),
        S = t(),
        k = s?.(),
        C = c?.(),
        A = o?.(),
        B = d?.(),
        R = j?.(),
        _ = y({ persistentBadge: void 0, dismissibleBadges: m?.() });
    return (0, r.jsx)(I, {
        title: E,
        badge: _,
        description: N,
        leadingElement: null != B ? (0, r.jsx)(O, { decoration: B }) : null,
        trailingElement: (0, r.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "end",
            gap: "md",
            children: [
                null != R && (0, r.jsx)(L, { decoration: R }),
                (0, r.jsx)(f.$, {
                    onClick: function () {
                        g();
                        let e = h();
                        e instanceof Promise && (b(!0), e.finally(() => b(!1)));
                    },
                    text: S,
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
    G = t(199966);
function P(e) {
    let { accessibleDirectory: n } = (0, G._)(),
        t = n.entry(e);
    return {
        parentPanelNode: t?.parentPanelKey != null ? n.get(t.parentPanelKey) : void 0,
        parentSidebarItemNode: t?.parentSidebarItemKey != null ? n.get(t.parentSidebarItemKey) : void 0,
    };
}
var Z = t(751075);
function F(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(Z.qP, { icons: n.icons });
}
function z(e) {
    let { decoration: n } = e;
    if (n.type === g.wF.STACKED_ICONS) return (0, r.jsx)(F, { decoration: n });
}
var K = t(321557);
function M(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: l, useTitle: i, useSubtitle: s } = n,
        a = l?.(),
        c = s?.(),
        { parentPanelNode: o, parentSidebarItemNode: u } = P(t),
        d = i?.(),
        x = o?.useTitle?.(),
        j = d ?? x,
        m = T(n);
    if (null == o || null == j) return null;
    let h = null != u ? u.icon : void 0;
    return (0, r.jsx)(I, {
        role: "link",
        "aria-label": x,
        title: j,
        description: c,
        leadingElement: null != h && (0, r.jsx)(p.A, { icon: h }),
        trailingElement: (0, r.jsxs)("div", {
            className: K.M,
            children: [null != a && (0, r.jsx)(z, { decoration: a }), (0, r.jsx)(D.u, {})],
        }),
        onClick: function () {
            (w.A.navigate(t, { animateSidebarScroll: !1 }), m());
        },
    });
}
var U = t(144228);
function V(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: l,
            useTitle: i,
            useSubtitle: s,
            useDisabled: a,
            useOptions: c,
            usePersistentBadge: o,
            getDismissibleBadges: u,
            useHelperText: d,
        } = n,
        x = i(),
        j = s?.(),
        h = t(),
        f = c(),
        g = y({ persistentBadge: o?.(), dismissibleBadges: u?.() }),
        p = a?.(),
        v = T(n),
        b = d?.();
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(U.z, {
            label: x,
            description: j,
            options: f,
            value: h,
            badge: g,
            onChange: (e) => {
                (v(), l(e));
            },
            disabled: p,
            helperText: b,
        }),
    });
}
var X = t(691885);
function q(e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubtitle: i,
            useValue: s,
            setValue: a,
            useOptions: c,
            useDisabled: o,
            clearable: u,
            closeOnSelect: d,
            wrapTags: x,
            selectionMode: j,
            usePersistentBadge: h,
            getDismissibleBadges: f,
        } = n,
        g = t(),
        p = i?.(),
        v = s(),
        b = c(),
        E = o?.(),
        N = y({ persistentBadge: h?.(), dismissibleBadges: f?.() }),
        S = T(n),
        k = l.useMemo(() => {
            var e, n;
            return {
                selectionMode: j,
                value: v,
                onSelectionChange:
                    ((e = a),
                    (n = S),
                    (t) => {
                        (n(), e(t));
                    }),
            };
        }, [j, v, a, S]);
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(X.l, {
            ...k,
            label: g,
            description: p,
            options: b,
            wrapTags: x,
            closeOnSelect: d,
            clearable: u,
            disabled: E,
            layout: "horizontal-responsive",
            fullWidth: !0,
            fitContent: !0,
            badge: N,
        }),
    });
}
var W = t(299163);
function Y(e) {
    let { node: n } = e,
        {
            setValue: t,
            getInitialValue: i,
            minValue: s,
            maxValue: a,
            useDefaultValue: c,
            useTitle: o,
            useSubtitle: u,
            useDisabled: d,
            useExternalValue: x,
            onValueRender: j,
            asValueChanges: h,
            markers: f,
            onMarkerRender: g,
            stickToMarkers: p,
            fieldLayout: v,
            usePersistentBadge: b,
            getDismissibleBadges: E,
            useHelperText: N,
        } = n,
        [S] = l.useState(() => i()),
        k = x?.(),
        C = o(),
        A = u?.(),
        I = d?.(),
        O = c?.(),
        B = y({ persistentBadge: b?.(), dismissibleBadges: E?.() }),
        R = N?.(),
        L = T(n);
    return (0, r.jsx)(m, {
        children: (0, r.jsx)(W.A, {
            label: C,
            description: A,
            disabled: I,
            initialValue: S,
            value: k,
            minValue: s,
            maxValue: a,
            defaultValue: O,
            onValueRender: j,
            asValueChanges: h,
            onValueChange: function (e) {
                (L(), t?.(e));
            },
            orientation: "horizontal",
            markers: f,
            onMarkerRender: g,
            stickToMarkers: p,
            layout: v,
            badge: B,
            helperText: R,
        }),
    });
}
function $(e) {
    let { decoration: n } = e;
    if (n.type === g.$d.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function H(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(h.E, { variant: "text-md/medium", children: n.text });
}
function J(e) {
    let { decoration: n } = e;
    if (n.type === g.Ln.TEXT) return (0, r.jsx)(H, { decoration: n });
}
function Q(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s, getDismissibleBadges: a } = n,
        c = t(),
        o = l?.(),
        u = i?.(),
        d = s?.(),
        x = y({ persistentBadge: void 0, dismissibleBadges: a?.() });
    return (0, r.jsx)(I, {
        title: c,
        badge: x,
        description: o,
        leadingElement: null != u ? (0, r.jsx)($, { decoration: u }) : null,
        trailingElement: null != d ? (0, r.jsx)(J, { decoration: d }) : null,
    });
}
var ee = t(512950),
    en = t(193249);
function et(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: l,
            useTitle: i,
            useSubtitle: s,
            useDisabled: a,
            useDisabledMessage: c,
            disabledMessageType: o = ee.Y.WARNING,
            usePersistentBadge: u,
            hasIcon: d,
            getDismissibleBadges: j,
        } = n,
        h = i(),
        f = s?.(),
        g = t(),
        p = a?.() ?? !1,
        v = c?.(),
        b = y({ persistentBadge: u?.(), dismissibleBadges: j?.() }),
        E = T(n);
    return (0, r.jsx)(m, {
        children: (0, r.jsxs)(x.B, {
            gap: 12,
            children: [
                (0, r.jsx)(en.d, {
                    label: h,
                    description: f,
                    badge: b,
                    checked: g,
                    hasIcon: d,
                    onChange: function (e) {
                        (E(), l(e));
                    },
                    disabled: p,
                }),
                p && null != v ? (0, r.jsx)(ee.p, { messageType: o, children: v }) : null,
            ],
        }),
    });
}
var er = t(435558),
    el = t(770178),
    ei = t(99018),
    es = t(160844),
    ea = t(138017),
    ec = t(661531),
    eo = t(559106),
    eu = t(526943);
function ed(e) {
    let {
            ref: n,
            title: t,
            collapsedSubtitle: i,
            isExpanded: s,
            onExpandedChange: c,
            children: o,
            animate: u = !0,
        } = e,
        d = l.useRef(null),
        [j, m] = l.useState(null),
        h = s && null != j;
    return (
        l.useLayoutEffect(() => {
            null != d.current && null == j && m(d.current.clientHeight);
        }, [j]),
        (0, r.jsxs)(ei.EN, {
            ref: n,
            isExpanded: s,
            onExpandedChange: c,
            children: [
                (0, r.jsx)(I, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: h ? void 0 : i,
                    trailingElement: (0, r.jsx)(eo.vN, {
                        children: (0, r.jsx)(es.$, {
                            slot: "trigger",
                            className: eu.bW,
                            children: (0, r.jsx)(ea.j, {
                                className: a()(eu.Kk, { [eu.kX]: !s }),
                                color: ec.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => c(!s),
                }),
                (0, r.jsx)(ei.kS, {
                    className: a()(eu.nd, { [eu.t5]: !u }),
                    children: (0, r.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: o }),
                }),
            ],
        })
    );
}
function ex(e) {
    return o.A.getField("requestAccordionOpenKey") === e.key;
}
let ej = l.memo(function (e) {
    let { node: n, renderSetting: t } = e,
        { useTitle: i, layout: s, useCollapsedSubtitle: a } = n,
        [c, u] = l.useState(!0),
        [d, x] = l.useState(() => ex(n)),
        j = l.useRef(d),
        m = l.useRef(ex(n) ? "navigation" : null);
    l.useEffect(
        () =>
            o.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (j.current ? w.A.notifyAccordionExpanded(n.key) : ((m.current = "navigation"), u(!1), x(!0)));
                },
                { equalityFn: (e, n) => e === n, fireImmediately: !0 },
            ),
        [n.key, d],
    );
    let h = l.useCallback(
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
        f = l.useMemo(() => (0, er.debounce)(h, 50), [h]),
        g = (0, el.w)(f),
        p = i?.(d),
        v = a?.(),
        y = T(n);
    return (0, r.jsx)(ed, {
        ref: g,
        title: p,
        collapsedSubtitle: v,
        isExpanded: d,
        onExpandedChange: function (e) {
            ((m.current = "user"), y(), x(e));
        },
        animate: c,
        children: s.map(t),
    });
});
var em = t(793409);
function eh(e) {
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
var ef = t(215566),
    eg = t(885574),
    ep = t(43105),
    ev = t(939249);
function ey(e) {
    let { decoration: n } = e,
        t = l.useRef(null),
        {
            isOpen: i,
            scheduleOpen: s,
            scheduleClose: a,
            close: c,
            popoverRef: o,
        } = (function () {
            let [e, n] = l.useState(!1),
                [t, r] = l.useState(null),
                i = l.useRef(null),
                s = l.useRef(null),
                a = l.useCallback((e) => {
                    r(e);
                }, []),
                c = l.useCallback(() => {
                    (clearTimeout(s.current),
                        (s.current = null),
                        null == i.current &&
                            (i.current = setTimeout(() => {
                                ((i.current = null), n(!0));
                            }, 250)));
                }, []),
                o = l.useCallback(() => {
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
                            t.addEventListener("mouseenter", c),
                            t.addEventListener("mouseleave", o),
                            t.addEventListener("focusin", c),
                            t.addEventListener("focusout", o),
                            () => {
                                (t.removeEventListener("mouseenter", c),
                                    t.removeEventListener("mouseleave", o),
                                    t.removeEventListener("focusin", c),
                                    t.removeEventListener("focusout", o));
                            }
                        );
                }, [t, c, o]),
                { isOpen: e, scheduleOpen: c, scheduleClose: o, close: u, popoverRef: a }
            );
        })(),
        { ariaLabel: u, popoverProps: d } = n,
        { getActions: x, ...j } = d,
        m = l.useMemo(() => x(c), [x, c]);
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
                children: (0, r.jsx)(eg.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)(ep.A, {
                ...j,
                actions: m,
                targetElementRef: t,
                popoverRef: o,
                shouldShow: i,
                onRequestClose: c,
                scrollBehavior: "close",
            }),
        ],
    });
}
function eb(e) {
    let { decoration: n } = e;
    if (n.type === g.p3.INFO_POPOVER) return (0, r.jsx)(ey, { decoration: n });
}
function eE(e) {
    let { decoration: n } = e,
        { type: t, id: l, ...i } = n;
    return (0, r.jsx)(f.$, { variant: "secondary", ...i });
}
function eN(e) {
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
                case g.UV.BUTTON:
                    return (0, r.jsx)(eE, { decoration: e }, e.id);
                case g.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, r.jsx)(eN, { decoration: e }, e.id);
            }
        }),
    });
}
function eS(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(Z.qP, { icons: n.icons });
}
function ek(e) {
    let { decoration: n } = e;
    if (null == n) return null;
    switch (n.type) {
        case g.WX.BUTTON_GROUP:
            return (0, r.jsx)(eT, { decoration: n });
        case g.WX.STACKED_ICONS:
            return (0, r.jsx)(eS, { decoration: n });
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
                            (0, r.jsx)(S.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != s && (0, r.jsx)(ef.A, { badge: s }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                                null != l && (0, r.jsx)(eb, { decoration: l }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(ek, { decoration: i }),
        ],
    });
}
var eA = t(683071),
    eI = t(789645),
    eO = t(964486),
    eB = t(660183),
    eR = t(864043);
function eL(e) {
    let { button: n } = e,
        [t, i] = l.useState(!1);
    async function s() {
        i(!0);
        try {
            await n.onClick();
        } finally {
            i(!1);
        }
    }
    return (0, r.jsx)(f.$, {
        variant: n.variant ?? "secondary",
        size: n.size,
        text: n.text,
        onClick: s,
        loading: t,
        disabled: t,
    });
}
function e_(e) {
    let { notice: n } = e,
        { noticeType: t, title: l, text: i, button: s, iconAlign: a, onDismiss: c } = n;
    (0, eO.Ay)(() => {
        n.trackView?.();
    });
    let o = (0, r.jsxs)(x.B, {
            direction: "vertical",
            gap: "xs",
            className: eR.ut,
            children: [
                null != l && (0, r.jsx)(S.D, { variant: "heading-md/medium", children: l }),
                (0, r.jsx)("span", { children: i }),
            ],
        }),
        u = null != c && null == s;
    return (0, r.jsx)(eA.w, {
        type: t,
        iconAlign: a,
        children: (0, r.jsxs)(x.B, {
            direction: "horizontal",
            align: u ? "start" : "center",
            justify: "space-between",
            gap: "xs",
            children: [
                o,
                (null != s || null != c) &&
                    (0, r.jsxs)(x.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: "xs",
                        fullWidth: !1,
                        children: [
                            null != s && (0, r.jsx)(eL, { button: s }),
                            null != c &&
                                (0, r.jsx)(ev.D, {
                                    "aria-label": eB.intl.string(eB.t.WAI6xu),
                                    onClick: c,
                                    className: eR.hL,
                                    children: (0, r.jsx)(eI.P, { size: "sm", color: "currentColor" }),
                                }),
                        ],
                    }),
            ],
        }),
    });
}
function eD(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, r.jsx)(t, {});
}
function ew(e) {
    let { notice: n } = e;
    switch (n.type) {
        case g.lT.INLINE_NOTICE:
            return (0, r.jsx)(e_, { notice: n });
        case g.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(eD, { notice: n });
    }
}
function eG(e) {
    let { notice: n } = e;
    return (0, r.jsx)("div", { className: eR.E$, children: (0, r.jsx)(ew, { notice: n }) });
}
let eP = l.memo(function (e) {
    let { node: n, renderSetting: t } = e,
        {
            useTitle: l,
            useSubnavLabel: i,
            useSubtitle: s,
            layout: a,
            useInlineNotice: c,
            useHeaderDecoration: o,
            useSubtitleDecoration: u,
            usePersistentBadge: d,
        } = n,
        j = l?.(),
        m = s?.(),
        h = c?.(),
        f = o?.(),
        g = u?.(),
        p = null != l || null != i,
        v = d?.();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != j &&
                (0, r.jsx)(eC, { title: j, subtitle: m, subtitleDecoration: g, decoration: f, persistentBadge: v }),
            (0, r.jsx)("div", {
                "data-settings-category-key": p ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, r.jsxs)(x.B, { gap: "xs", children: [null != h && (0, r.jsx)(eG, { notice: h }), a.map(t)] }),
        ],
    });
});
var eZ = t(140735),
    eF = t(517759);
function ez(e) {
    let { title: n, subtitle: t, isHiddenVisually: l } = e;
    return null == n || "" === n
        ? null
        : l
          ? (0, r.jsx)(eZ.A, { tag: "legend", children: n })
          : (0, r.jsx)(h.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eF.D, { [eF.h]: null != t && "" !== t }),
                children: n,
            });
}
let eK = l.memo(function (e) {
    let { node: n, renderSetting: t } = e,
        { useTitle: i, useSubtitle: s, layout: a, variant: c = "default", isTitleHiddenVisually: o } = n,
        u = i(),
        d = s?.(),
        j = l.useId(),
        m = null != u && "" !== u,
        f = null != d && "" !== d,
        g = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(c);
    return (0, r.jsxs)("fieldset", {
        "aria-describedby": f ? j : void 0,
        children: [
            (0, r.jsx)(ez, { title: u, subtitle: d, isHiddenVisually: o }),
            f ? (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", id: j, children: d }) : null,
            (0, r.jsx)(x.B, { gap: g, padding: { top: m && !o ? 16 : 0 }, children: a.map(t) }),
        ],
    });
});
var eM = t(404778),
    eU = t(777919);
function eV(e) {
    var n;
    let { node: t, renderSetting: i } = e,
        [s, a] = l.useState(!1),
        { layout: c, collapseAfter: o, useCollapsibleTitle: u, useCollapsedSubtitle: d } = t,
        j = null != o ? c.slice(0, o) : c,
        m = null != o ? c.slice(o) : [],
        h =
            u?.(s, m.length) ??
            ((n = m.length),
            s
                ? eB.intl.formatToPlainString(eB.t["3SHL+d"], { count: n })
                : eB.intl.formatToPlainString(eB.t["8JRFyZ"], { count: n })),
        f = d?.();
    return (0, r.jsxs)(x.B, {
        gap: 8,
        children: [
            j.map((e, n) =>
                (0, r.jsxs)(l.Fragment, { children: [i(e), n !== j.length - 1 && (0, r.jsx)(eM.c, {})] }, e.key),
            ),
            m.length > 0 &&
                (0, r.jsxs)("div", {
                    className: eU.CT,
                    children: [
                        (0, r.jsx)(eM.c, { className: eU.mn }),
                        (0, r.jsx)(ed, {
                            title: h,
                            collapsedSubtitle: f,
                            isExpanded: s,
                            onExpandedChange: a,
                            children: (0, r.jsx)(x.B, {
                                gap: 8,
                                children: m.map((e, n) =>
                                    (0, r.jsxs)(
                                        l.Fragment,
                                        { children: [i(e), n !== m.length - 1 && (0, r.jsx)(eM.c, {})] },
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
function eX(e) {
    let { decoration: n } = e;
    if (n.type === g.Xy.ICON)
        return (0, r.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
var eq = t(552585);
function eW(e) {
    let { decoration: n } = e;
    return null == n.text ? null : (0, r.jsx)(h.E, { variant: "text-md/medium", className: eq.q, children: n.text });
}
function eY(e) {
    let { decoration: n } = e;
    if (n.type === g.xn.TEXT) return (0, r.jsx)(eW, { decoration: n });
}
function e$(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s } = n,
        a = t?.(),
        c = l?.(),
        o = i?.(),
        u = s?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = P(d),
        m = j?.useTitle?.(),
        h = a ?? m;
    return null == j || null == h
        ? null
        : (0, r.jsx)(I, {
              role: "link",
              "aria-label": m,
              title: h,
              leadingElement: null != o ? (0, r.jsx)(eX, { decoration: o }) : null,
              description: c,
              trailingElement: (0, r.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, r.jsx)(eY, { decoration: u }), (0, r.jsx)(D.u, {})],
              }),
              onClick: () => w.A.navigate(d),
          });
}
var eH = t(17928),
    eJ = t(868285),
    eQ = t(871682),
    e0 = t(689175),
    e1 = t(707554),
    e6 = t(823092),
    e8 = t(397274),
    e5 = t(525473);
function e7(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, e6.L_)(),
        a = n?.stores;
    l.useEffect(() => {
        if (null != a) {
            let e = new eH.ru(a, () => {
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
    let c = l.useMemo(() => {
        if (null == n || !i) return null;
        let { element: e } = n;
        return (0, r.jsx)(eQ.F, { className: e5.lm, children: (0, r.jsx)(e, {}) });
    }, [n, i]);
    return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(eJ.F, { component: "div", children: c })] });
}
function e9(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, r.jsx)("div", {
        className: a()(e5.oK, { [e5.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, r.jsx)(t, {}),
    });
}
function e2(e) {
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = l.useRef(null),
        a = i?.();
    return null != a
        ? (0, r.jsx)(a, {})
        : (0, r.jsx)(e7, {
              notice: n,
              children: (0, r.jsxs)(e0.Gt, {
                  className: e5.XG,
                  scrollbarGutter: "both-edges",
                  ref: (e) => {
                      e8.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: e5.nd,
                          ref: s,
                          children: (0, r.jsx)(eo.xp, { containerRef: s, children: t }),
                      }),
                      (0, r.jsx)("div", { className: e5.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function e3(e) {
    let { layout: n, decoration: t, renderSetting: i } = e;
    return (0, r.jsxs)("div", {
        className: e5.LZ,
        children: [
            null != t && (0, r.jsx)(e9, { decoration: t }),
            (0, r.jsx)(e1.F, {
                forceLevel: 2,
                children: n.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        { children: [i(e), t !== n.length - 1 && (0, r.jsx)(eM.c, { className: e5.yF })] },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function e4(e) {
    let { node: n, renderSetting: t } = e,
        { layout: l } = n;
    if ((0, i.zS)(l))
        return (0, r.jsx)(
            e2,
            {
                notice: n.notice,
                useObscuredNotice: n.useObscuredNotice,
                children: (0, r.jsx)(e3, { layout: l, decoration: n.decoration, renderSetting: t }),
            },
            n.key,
        );
    throw Error("Panels must have a list of categories");
}
var ne = t(749364);
function nn(e) {
    let { node: n, renderSetting: t } = e;
    return (0, r.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, r.jsx)(S.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: ne.D,
                children: eB.intl.string(eB.t.rPREPG),
            }),
            n.layout.map(t),
        ],
    });
}
var nt = t(187707);
let nr = l.memo(function (e) {
    let { node: n, renderSetting: t } = e;
    return (0, r.jsx)("div", { className: nt.l, children: n.layout.map(t) });
});
function nl(e) {
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
            return (0, r.jsx)(e4, { node: t, renderSetting: ns });
        case i.Z6.LIST:
            return (0, r.jsx)(eV, { node: t, renderSetting: ns });
        case i.Z6.FIELD_SET:
            return (0, r.jsx)(eK, { node: t, renderSetting: ns });
        case i.Z6.RELATED:
            return (0, r.jsx)(nn, { node: t, renderSetting: ns });
        case i.Z6.CARD:
            return (0, r.jsx)(eh, { node: t, renderSetting: ns });
        case i.Z6.CATEGORY:
            return (0, r.jsx)(eP, { node: t, renderSetting: ns });
        case i.Z6.ACCORDION:
            return (0, r.jsx)(ej, { node: t, renderSetting: ns });
        case i.Z6.SPLIT:
            return (0, r.jsx)(nr, { node: t, renderSetting: ns });
        case i.Z6.TOGGLE:
            return (0, r.jsx)(et, { node: t });
        case i.Z6.STATIC:
            return (0, r.jsx)(Q, { node: t });
        case i.Z6.BUTTON:
            return (0, r.jsx)(_, { node: t });
        case i.Z6.SELECT:
            return (0, r.jsx)(q, { node: t });
        case i.Z6.RADIO:
            return (0, r.jsx)(V, { node: t });
        case i.Z6.SLIDER:
            return (0, r.jsx)(Y, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, r.jsx)(M, { node: t });
        case i.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, r.jsx)(e$, { node: t });
        case i.Z6.CUSTOM:
            return (0, r.jsx)(m, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function ni(e) {
    let { node: n } = e;
    return n.type === i.Z6.PANEL
        ? (0, r.jsx)(nl, { node: n })
        : (0, r.jsx)(d, { node: n, children: (0, r.jsx)(nl, { node: n }) });
}
function ns(e) {
    return (0, r.jsx)(ni, { node: e }, e.key);
}
