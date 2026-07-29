t.d(n, { A: () => ns });
var r = t(477900),
    l = t(582128),
    i = t(963935),
    s = t(503698),
    a = t.n(s),
    o = t(462180),
    c = t(894858),
    u = t(785375);
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
                            s(!1), c.A.setState({ requestFlashKey: void 0 });
                        }, 2250)));
                },
                { equalityFn: o.x, fireImmediately: !0 },
            );
            return () => {
                clearTimeout(d.current), e();
            };
        }, [n.key, n.type]),
        (0, r.jsx)("div", { tabIndex: -1, "data-nav-anchor-key": n.key, className: a()(u.kL, i && u.jl), children: t })
    );
}
var x = t(331322),
    j = t(948127);
function f(e) {
    let { children: n } = e;
    return (0, r.jsx)(x.B, { className: j.n, gap: 0, padding: { top: "xs", bottom: "xs" }, children: n });
}
var m = t(834730),
    h = t(452027),
    g = t(821609),
    p = t(107384),
    y = t(174459),
    v = t(89381),
    b = t(652215);
function E(e) {
    return l.useCallback(() => {
        let n = e;
        for (; "parent" in n && null != n.parent; ) n = n.parent;
        let t = "analyticsKey" in e ? e.analyticsKey : e.key;
        null != t &&
            y.default.track(b.HAw.UI_SETTING_INTERACTED, {
                key: t,
                setting_type: n.analyticsKey ?? n.key,
                search_session_id: v.A.getSearchSessionId(),
            });
    }, [e]);
}
function T(e) {
    let { decoration: n } = e,
        { StronglyDiscouragedCustomComponent: t } = n;
    return (0, r.jsx)(t, {});
}
function N(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(m.E, { variant: "text-md/medium", children: n.text });
}
function k(e) {
    let { decoration: n } = e;
    switch (n.type) {
        case p.fq.TEXT:
            return (0, r.jsx)(N, { decoration: n });
        case p.fq.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(T, { decoration: n });
    }
}
function S(e) {
    let { node: n } = e,
        {
            useLabel: t,
            useTitle: i,
            useAriaLabel: s,
            useSubtitle: a,
            useVariant: o,
            useDisabled: c,
            useLoading: u,
            useTrailingDecoration: d,
            onClick: j,
        } = n,
        m = E(n),
        p = u?.() ?? !1,
        [y, v] = l.useState(!1),
        b = i(),
        T = a?.(),
        N = t(),
        S = s?.(),
        A = o?.(),
        C = c?.(),
        I = d?.();
    return (0, r.jsx)(f, {
        children: (0, r.jsx)(h.D, {
            label: b,
            description: T,
            disabled: C,
            layout: "horizontal",
            children: (0, r.jsxs)(x.B, {
                direction: "horizontal",
                align: "center",
                justify: "end",
                gap: "md",
                children: [
                    null != I && (0, r.jsx)(k, { decoration: I }),
                    (0, r.jsx)(g.$, {
                        onClick: function () {
                            m();
                            let e = j();
                            e instanceof Promise && (v(!0), e.finally(() => v(!1)));
                        },
                        text: N,
                        "aria-label": S,
                        variant: A,
                        disabled: C,
                        loading: y || p,
                    }),
                ],
            }),
        }),
    });
}
var A = t(881636),
    C = t(272053),
    I = t(176524),
    O = t(199966);
function R(e) {
    let { accessibleDirectory: n } = (0, O._)(),
        t = n.entry(e);
    return {
        parentPanelNode: t?.parentPanelKey != null ? n.get(t.parentPanelKey) : void 0,
        parentSidebarItemNode: t?.parentSidebarItemKey != null ? n.get(t.parentSidebarItemKey) : void 0,
    };
}
var B = t(297264),
    L = t(508770),
    _ = t(890856),
    D = t(413750);
function w(e) {
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
            className: a()(D.EA, null != d && D.vk),
            ref: n,
            style: x,
            children: [
                null != t && (0, r.jsx)("div", { className: D._y, children: t }),
                (0, r.jsxs)("div", {
                    className: D.jw,
                    children: [
                        (0, r.jsxs)("div", {
                            className: D.eg,
                            children: [
                                (0, r.jsx)(B.D, { variant: "heading-md/medium", color: "text-strong", children: i }),
                                null != o && (0, r.jsx)(L.E, { type: o, variant: "brand" }),
                            ],
                        }),
                        null != s && (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                null != l && (0, r.jsx)("div", { className: D.EY, children: l }),
            ],
        });
    return null != d
        ? (0, r.jsx)(_.s, { onClick: d, "aria-label": c, buttonProps: null != u ? { role: u } : void 0, children: j })
        : j;
}
var Z = t(751075);
function P(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(Z.qP, { icons: n.icons });
}
function F(e) {
    let { decoration: n } = e;
    if (n.type === p.wF.STACKED_ICONS) return (0, r.jsx)(P, { decoration: n });
}
var G = t(390936);
function K(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: l, useTitle: i, useSubtitle: s } = n,
        a = l?.(),
        o = s?.(),
        { parentPanelNode: c, parentSidebarItemNode: u } = R(t),
        d = i?.(),
        x = c?.useTitle?.(),
        j = d ?? x,
        f = E(n);
    if (null == c || null == j) return null;
    let m = null != u ? u.icon : void 0;
    return (0, r.jsx)(w, {
        role: "link",
        "aria-label": x,
        title: j,
        description: o,
        leadingElement: null != m && (0, r.jsx)(I.A, { icon: m }),
        trailingElement: (0, r.jsxs)("div", {
            className: G.M,
            children: [null != a && (0, r.jsx)(F, { decoration: a }), (0, r.jsx)(A.u, {})],
        }),
        onClick: function () {
            C.A.navigate(t, { animateSidebarScroll: !1 }), f();
        },
    });
}
var M = t(144228);
t(321073);
var z = t(558845);
function V(e) {
    let { persistentBadge: n, dismissibleBadges: t } = e;
    return (function (e) {
        let { persistentBadgeType: n, dismissibleBadgeType: t } = e;
        return "beta" === n ? "beta" : (t ?? n);
    })({
        persistentBadgeType: n?.badgeType === p.Xi.BETA ? "beta" : void 0,
        dismissibleBadgeType: (function (e) {
            let n = l.useMemo(() => {
                let n = [];
                return (
                    e?.forEach((e) => {
                        let { badgeType: t, dismissibleContent: r } = e;
                        t === p.Xi.NEW && n.push(r);
                    }),
                    n
                );
            }, [e]);
            if ((0, z.uW)(n)) return "new";
        })(t),
    });
}
function U(e) {
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
        m = t(),
        h = o(),
        g = V({ persistentBadge: c?.(), dismissibleBadges: u?.() }),
        p = a?.(),
        y = E(n),
        v = d?.();
    return (0, r.jsx)(f, {
        children: (0, r.jsx)(M.z, {
            label: x,
            description: j,
            options: h,
            value: m,
            badge: g,
            onChange: (e) => {
                y(), l(e);
            },
            disabled: p,
            helperText: v,
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
            useOptions: o,
            useDisabled: c,
            clearable: u,
            closeOnSelect: d,
            wrapTags: x,
            selectionMode: j,
            usePersistentBadge: m,
            getDismissibleBadges: h,
        } = n,
        g = t(),
        p = i?.(),
        y = s(),
        v = o(),
        b = c?.(),
        T = V({ persistentBadge: m?.(), dismissibleBadges: h?.() }),
        N = E(n),
        k = l.useMemo(() => {
            var e, n;
            return {
                selectionMode: j,
                value: y,
                onSelectionChange:
                    ((e = a),
                    (n = N),
                    (t) => {
                        n(), e(t);
                    }),
            };
        }, [j, y, a, N]);
    return (0, r.jsx)(f, {
        children: (0, r.jsx)(X.l, {
            ...k,
            label: g,
            description: p,
            options: v,
            wrapTags: x,
            closeOnSelect: d,
            clearable: u,
            disabled: b,
            layout: "horizontal-responsive",
            fullWidth: !0,
            fitContent: !0,
            badge: T,
        }),
    });
}
var W = t(106236);
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
            asValueChanges: m,
            markers: h,
            onMarkerRender: g,
            stickToMarkers: p,
            fieldLayout: y,
            usePersistentBadge: v,
            getDismissibleBadges: b,
            useHelperText: T,
        } = n,
        [N] = l.useState(() => i()),
        k = x?.(),
        S = c(),
        A = u?.(),
        C = d?.(),
        I = o?.(),
        O = V({ persistentBadge: v?.(), dismissibleBadges: b?.() }),
        R = T?.(),
        B = E(n);
    return (0, r.jsx)(f, {
        children: (0, r.jsx)(W.A, {
            label: S,
            description: A,
            disabled: C,
            initialValue: N,
            value: k,
            minValue: s,
            maxValue: a,
            defaultValue: I,
            onValueRender: j,
            asValueChanges: m,
            onValueChange: function (e) {
                B(), t?.(e);
            },
            orientation: "horizontal",
            markers: h,
            onMarkerRender: g,
            stickToMarkers: p,
            layout: y,
            badge: O,
            helperText: R,
        }),
    });
}
function $(e) {
    let { decoration: n } = e;
    if (n.type === p.$d.ICON)
        return (0, r.jsx)(I.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function H(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(m.E, { variant: "text-md/medium", children: n.text });
}
function J(e) {
    let { decoration: n } = e;
    if (n.type === p.Ln.TEXT) return (0, r.jsx)(H, { decoration: n });
}
function Q(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s, getDismissibleBadges: a } = n,
        o = t(),
        c = l?.(),
        u = i?.(),
        d = s?.(),
        x = V({ persistentBadge: void 0, dismissibleBadges: a?.() });
    return (0, r.jsx)(w, {
        title: o,
        badge: x,
        description: c,
        leadingElement: null != u ? (0, r.jsx)($, { decoration: u }) : null,
        trailingElement: null != d ? (0, r.jsx)(J, { decoration: d }) : null,
    });
}
var ee = t(243721),
    en = t(512950);
function et(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: l,
            useTitle: i,
            useSubtitle: s,
            useDisabled: a,
            useDisabledMessage: o,
            usePersistentBadge: c,
            hasIcon: u,
            getDismissibleBadges: d,
        } = n,
        x = i(),
        j = s?.(),
        m = t(),
        h = a?.() ?? !1,
        g = o?.(),
        p = V({ persistentBadge: c?.(), dismissibleBadges: d?.() }),
        y = E(n);
    return (0, r.jsxs)(f, {
        children: [
            (0, r.jsx)(ee.d, {
                label: x,
                description: j,
                badge: p,
                checked: m,
                hasIcon: u,
                onChange: function (e) {
                    y(), l(e);
                },
                disabled: h,
            }),
            h && null != g ? (0, r.jsx)(en.p, { messageType: en.Y.WARNING, children: g }) : null,
        ],
    });
}
var er = t(435558),
    el = t(770178),
    ei = t(875031),
    es = t(538790),
    ea = t(138017),
    eo = t(661531),
    ec = t(259678),
    eu = t(98640);
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
        [j, f] = l.useState(null),
        m = s && null != j;
    return (
        l.useLayoutEffect(() => {
            null != d.current && null == j && f(d.current.clientHeight);
        }, [j]),
        (0, r.jsxs)(ei.EN, {
            ref: n,
            isExpanded: s,
            onExpandedChange: o,
            children: [
                (0, r.jsx)(w, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: m ? void 0 : i,
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
    let { node: n } = e,
        { useTitle: t, layout: i, useCollapsedSubtitle: s } = n,
        [a, o] = l.useState(!0),
        [u, d] = l.useState(() => ex(n)),
        x = l.useRef(u),
        j = l.useRef(ex(n) ? "navigation" : null);
    l.useEffect(
        () =>
            c.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (x.current ? C.A.notifyAccordionExpanded(n.key) : ((j.current = "navigation"), o(!1), d(!0)));
                },
                { equalityFn: (e, n) => e === n, fireImmediately: !0 },
            ),
        [n.key, u],
    );
    let f = l.useCallback(
            (e) => {
                if (null != e.target && u !== x.current && ((x.current = u), x.current))
                    switch (j.current) {
                        case "navigation":
                            o(!0), C.A.notifyAccordionExpanded(n.key);
                            break;
                        case "user":
                            C.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [u, n.key],
        ),
        m = l.useMemo(() => (0, er.debounce)(f, 50), [f]),
        h = (0, el.w)(m),
        g = t?.(u),
        p = s?.(),
        y = E(n);
    return (0, r.jsx)(ed, {
        ref: h,
        title: g,
        collapsedSubtitle: p,
        isExpanded: u,
        onExpandedChange: function (e) {
            (j.current = "user"), y(), d(e);
        },
        animate: a,
        children: i.map((e) => (0, r.jsx)(ns, { node: e }, e.key)),
    });
});
var ef = t(575376);
function em(e) {
    let { node: n } = e,
        t = n.layout.find((e) => e.key === n.headerSettingKey),
        l = n.layout.filter((e) => e.key !== n.headerSettingKey),
        i = l.length > 0;
    return (0, r.jsxs)("div", {
        className: ef.Nr,
        children: [
            null != t &&
                (0, r.jsx)("div", { className: a()(ef.MY, { [ef.Q2]: !i }), children: (0, r.jsx)(ns, { node: t }) }),
            i && (0, r.jsx)("div", { className: ef.zI, children: l.map((e) => (0, r.jsx)(ns, { node: e }, e.key)) }),
        ],
    });
}
var eh = t(215566),
    eg = t(885574),
    ep = t(43105),
    ey = t(939249);
function ev(e) {
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
                    clearTimeout(s.current),
                        (s.current = null),
                        null == i.current &&
                            (i.current = setTimeout(() => {
                                (i.current = null), n(!0);
                            }, 250));
                }, []),
                c = l.useCallback(() => {
                    clearTimeout(i.current),
                        (i.current = null),
                        null == s.current &&
                            (s.current = setTimeout(() => {
                                (s.current = null), n(!1);
                            }, 150));
                }, []),
                u = l.useCallback(() => {
                    clearTimeout(i.current), (i.current = null), clearTimeout(s.current), (s.current = null), n(!1);
                }, []);
            return (
                l.useEffect(
                    () => () => {
                        clearTimeout(i.current), clearTimeout(s.current);
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
                                t.removeEventListener("mouseenter", o),
                                    t.removeEventListener("mouseleave", c),
                                    t.removeEventListener("focusin", o),
                                    t.removeEventListener("focusout", c);
                            }
                        );
                }, [t, o, c]),
                { isOpen: e, scheduleOpen: o, scheduleClose: c, close: u, popoverRef: a }
            );
        })(),
        { ariaLabel: u, popoverProps: d } = n,
        { getActions: x, ...j } = d,
        f = l.useMemo(() => x(o), [x, o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(ey.D, {
                tag: "span",
                innerRef: t,
                "aria-label": u,
                onMouseEnter: s,
                onMouseLeave: a,
                onFocus: s,
                onBlur: a,
                children: (0, r.jsx)(eg.m, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)(ep.A, {
                ...j,
                actions: f,
                targetElementRef: t,
                popoverRef: c,
                shouldShow: i,
                onRequestClose: o,
                scrollBehavior: "close",
            }),
        ],
    });
}
function eb(e) {
    let { decoration: n } = e;
    if (n.type === p.p3.INFO_POPOVER) return (0, r.jsx)(ev, { decoration: n });
}
function eE(e) {
    let { decoration: n } = e,
        { type: t, id: l, ...i } = n;
    return (0, r.jsx)(g.$, { variant: "secondary", ...i });
}
function eT(e) {
    let { decoration: n } = e,
        t = n.button;
    return (0, r.jsx)(t, {});
}
function eN(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(x.B, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: n.buttons.map((e) => {
            switch (e.type) {
                case p.UV.BUTTON:
                    return (0, r.jsx)(eE, { decoration: e }, e.id);
                case p.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, r.jsx)(eT, { decoration: e }, e.id);
            }
        }),
    });
}
function ek(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(Z.qP, { icons: n.icons });
}
function eS(e) {
    let { decoration: n } = e;
    if (null == n) return null;
    switch (n.type) {
        case p.WX.BUTTON_GROUP:
            return (0, r.jsx)(eN, { decoration: n });
        case p.WX.STACKED_ICONS:
            return (0, r.jsx)(ek, { decoration: n });
    }
}
function eA(e) {
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
                            (0, r.jsx)(B.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != s && (0, r.jsx)(eh.A, { badge: s }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                                null != l && (0, r.jsx)(eb, { decoration: l }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(eS, { decoration: i }),
        ],
    });
}
var eC = t(683071),
    eI = t(964486),
    eO = t(35218);
function eR(e) {
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
    return (0, r.jsx)(g.$, {
        variant: n.variant ?? "secondary",
        size: n.size,
        text: n.text,
        onClick: s,
        loading: t,
        disabled: t,
    });
}
function eB(e) {
    let { notice: n } = e,
        { noticeType: t, title: l, text: i, button: s, iconAlign: a } = n;
    (0, eI.Ay)(() => {
        n.trackView?.();
    });
    let o = (0, r.jsxs)(x.B, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != l && (0, r.jsx)(B.D, { variant: "heading-md/medium", children: l }),
            (0, r.jsx)("span", { children: i }),
        ],
    });
    return (0, r.jsx)(eC.w, {
        type: t,
        iconAlign: a,
        children: (0, r.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [o, null != s && (0, r.jsx)(eR, { button: s })],
        }),
    });
}
function eL(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, r.jsx)(t, {});
}
function e_(e) {
    let { notice: n } = e;
    switch (n.type) {
        case p.lT.INLINE_NOTICE:
            return (0, r.jsx)(eB, { notice: n });
        case p.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(eL, { notice: n });
    }
}
function eD(e) {
    let { notice: n } = e;
    return (0, r.jsx)("div", { className: eO.E, children: (0, r.jsx)(e_, { notice: n }) });
}
let ew = l.memo(function (e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubnavLabel: l,
            useSubtitle: i,
            layout: s,
            useInlineNotice: a,
            useHeaderDecoration: o,
            useSubtitleDecoration: c,
            usePersistentBadge: u,
        } = n,
        d = t?.(),
        j = i?.(),
        f = a?.(),
        m = o?.(),
        h = c?.(),
        g = null != t || null != l,
        p = u?.();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != d &&
                (0, r.jsx)(eA, { title: d, subtitle: j, subtitleDecoration: h, decoration: m, persistentBadge: p }),
            (0, r.jsx)("div", {
                "data-settings-category-key": g ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, r.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != f && (0, r.jsx)(eD, { notice: f }),
                    s.map((e) => (0, r.jsx)(ns, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
var eZ = t(140735),
    eP = t(597894);
function eF(e) {
    let { title: n, subtitle: t, isHiddenVisually: l } = e;
    return null == n || "" === n
        ? null
        : l
          ? (0, r.jsx)(eZ.A, { tag: "legend", children: n })
          : (0, r.jsx)(m.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eP.D, { [eP.h]: null != t && "" !== t }),
                children: n,
            });
}
let eG = l.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: i, layout: s, variant: a = "default", isTitleHiddenVisually: o } = n,
        c = t(),
        u = i?.(),
        d = l.useId(),
        j = null != c && "" !== c,
        f = null != u && "" !== u,
        h = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(a);
    return (0, r.jsxs)("fieldset", {
        "aria-describedby": f ? d : void 0,
        children: [
            (0, r.jsx)(eF, { title: c, subtitle: u, isHiddenVisually: o }),
            f ? (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", id: d, children: u }) : null,
            (0, r.jsx)(x.B, {
                gap: h,
                padding: { top: j && !o ? 16 : 0 },
                children: s.map((e) => (0, r.jsx)(ns, { node: e }, e.key)),
            }),
        ],
    });
});
var eK = t(404778),
    eM = t(375708),
    ez = t(733062);
function eV(e) {
    var n;
    let { node: t } = e,
        [i, s] = l.useState(!1),
        { layout: a, collapseAfter: o, useCollapsibleTitle: c, useCollapsedSubtitle: u } = t,
        d = null != o ? a.slice(0, o) : a,
        j = null != o ? a.slice(o) : [],
        f =
            c?.(i, j.length) ??
            ((n = j.length),
            i
                ? eM.intl.formatToPlainString(eM.t["3SHL+d"], { count: n })
                : eM.intl.formatToPlainString(eM.t["8JRFyZ"], { count: n })),
        m = u?.();
    return (0, r.jsxs)(x.B, {
        gap: 8,
        children: [
            d.map((e, n) =>
                (0, r.jsxs)(
                    l.Fragment,
                    { children: [(0, r.jsx)(ns, { node: e }), n !== d.length - 1 && (0, r.jsx)(eK.c, {})] },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, r.jsxs)("div", {
                    className: ez.CT,
                    children: [
                        (0, r.jsx)(eK.c, { className: ez.mn }),
                        (0, r.jsx)(ed, {
                            title: f,
                            collapsedSubtitle: m,
                            isExpanded: i,
                            onExpandedChange: s,
                            children: (0, r.jsx)(x.B, {
                                gap: 8,
                                children: j.map((e, n) =>
                                    (0, r.jsxs)(
                                        l.Fragment,
                                        {
                                            children: [
                                                (0, r.jsx)(ns, { node: e }),
                                                n !== j.length - 1 && (0, r.jsx)(eK.c, {}),
                                            ],
                                        },
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
    if (n.type === p.Xy.ICON)
        return (0, r.jsx)(I.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function eX(e) {
    let { decoration: n } = e;
    return null == n.text ? null : (0, r.jsx)(m.E, { variant: "text-md/medium", children: n.text });
}
function eq(e) {
    let { decoration: n } = e;
    if (n.type === p.xn.TEXT) return (0, r.jsx)(eX, { decoration: n });
}
function eW(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s } = n,
        a = t?.(),
        o = l?.(),
        c = i?.(),
        u = s?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = R(d),
        f = j?.useTitle?.(),
        m = a ?? f;
    return null == j || null == m
        ? null
        : (0, r.jsx)(w, {
              role: "link",
              "aria-label": f,
              title: m,
              leadingElement: null != c ? (0, r.jsx)(eU, { decoration: c }) : null,
              description: o,
              trailingElement: (0, r.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, r.jsx)(eq, { decoration: u }), (0, r.jsx)(A.u, {})],
              }),
              onClick: () => C.A.navigate(d),
          });
}
var eY = t(17928),
    e$ = t(868285),
    eH = t(871682),
    eJ = t(689175),
    eQ = t(707554),
    e0 = t(761508),
    e1 = t(823092),
    e6 = t(397274),
    e8 = t(439750);
function e5(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, e1.L_)(),
        a = n?.stores;
    l.useEffect(() => {
        if (null != a) {
            let e = new eY.ru(a, () => {
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
        return (0, r.jsx)(eH.F, { className: e8.lm, children: (0, r.jsx)(e, {}) });
    }, [n, i]);
    return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(e$.F, { component: "div", children: o })] });
}
function e7(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, r.jsx)("div", {
        className: a()(e8.oK, { [e8.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, r.jsx)(t, {}),
    });
}
function e3(e) {
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = l.useRef(null),
        a = i?.();
    return null != a
        ? (0, r.jsx)(a, {})
        : (0, r.jsx)(e5, {
              notice: n,
              children: (0, r.jsxs)(eJ.Gt, {
                  className: e8.XG,
                  ref: (e) => {
                      e6.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: e8.nd,
                          ref: s,
                          children: (0, r.jsx)(ec.xp, { containerRef: s, children: t }),
                      }),
                      (0, r.jsx)("div", { className: e8.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function e2(e) {
    let { layout: n, decoration: t } = e;
    return (0, r.jsxs)("div", {
        className: e8.LZ,
        children: [
            null != t && (0, r.jsx)(e7, { decoration: t }),
            (0, r.jsx)(eQ.F, {
                forceLevel: 2,
                children: n.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(ns, { node: e }),
                                t !== n.length - 1 && (0, r.jsx)(eK.c, { className: e8.yF }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function e9(e) {
    let { panelKey: n, layout: t, notice: i, decoration: s, useObscuredNotice: a } = e,
        o =
            c.A.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(n);
            }) ?? t[0].key;
    l.useEffect(() => {
        let e = c.A.getField("currentTabKeys");
        if (t.some((t) => t.key === e.get(n))) return;
        let r = new Map(e);
        r.set(n, t[0].key), c.A.setState({ currentTabKeys: r });
    }, [t, n]);
    let u = t.find((e) => e.key === o) ?? t[0];
    return (0, r.jsxs)(
        e3,
        {
            notice: i,
            useObscuredNotice: a,
            children: [
                (0, r.jsx)(e0.V, {
                    className: e8.$H,
                    selectedItem: o,
                    onItemSelect: function (e) {
                        C.A.navigate(e, {
                            onTransitionStart: () => {
                                let n = t.find((n) => n.key === e);
                                n?.onItemSelect?.();
                            },
                        });
                    },
                    orientation: "horizontal",
                    type: "top",
                    look: "brand",
                    children: t.map((e) => {
                        let { key: n, getTitle: t } = e;
                        return (0, r.jsx)(e0.V.Item, { id: n, children: t() }, n);
                    }),
                }),
                (0, r.jsx)(e0.V.Panel, { id: o, children: (0, r.jsx)(e2, { layout: u.layout, decoration: s }) }),
            ],
        },
        n,
    );
}
function e4(e) {
    let { panelKey: n, notice: t, decoration: l, layout: i, useObscuredNotice: s } = e;
    return (0, r.jsx)(
        e3,
        { notice: t, useObscuredNotice: s, children: (0, r.jsx)(e2, { layout: i, decoration: l }) },
        n,
    );
}
function ne(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, i.zY)(t))
        return (0, r.jsx)(e9, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    if ((0, i.Iu)(t))
        return (0, r.jsx)(e4, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
var nn = t(137339);
function nt(e) {
    let { node: n } = e;
    return (0, r.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, r.jsx)(B.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: nn.D,
                children: eM.intl.string(eM.t.rPREPG),
            }),
            n.layout.map((e) => (0, r.jsx)(ns, { node: e }, e.key)),
        ],
    });
}
var nr = t(960020);
let nl = l.memo(function (e) {
    let { node: n } = e;
    return (0, r.jsx)("div", { className: nr.l, children: n.layout.map((e) => (0, r.jsx)(ns, { node: e }, e.key)) });
});
function ni(e) {
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
        case i.Z6.TAB_ITEM:
            throw Error(`${t.type} nodes should never be rendered directly`);
        case i.Z6.PANEL:
            return (0, r.jsx)(ne, { node: t });
        case i.Z6.LIST:
            return (0, r.jsx)(eV, { node: t });
        case i.Z6.FIELD_SET:
            return (0, r.jsx)(eG, { node: t });
        case i.Z6.RELATED:
            return (0, r.jsx)(nt, { node: t });
        case i.Z6.CARD:
            return (0, r.jsx)(em, { node: t });
        case i.Z6.CATEGORY:
            return (0, r.jsx)(ew, { node: t });
        case i.Z6.ACCORDION:
            return (0, r.jsx)(ej, { node: t });
        case i.Z6.SPLIT:
            return (0, r.jsx)(nl, { node: t });
        case i.Z6.TOGGLE:
            return (0, r.jsx)(et, { node: t });
        case i.Z6.STATIC:
            return (0, r.jsx)(Q, { node: t });
        case i.Z6.BUTTON:
            return (0, r.jsx)(S, { node: t });
        case i.Z6.SELECT:
            return (0, r.jsx)(q, { node: t });
        case i.Z6.RADIO:
            return (0, r.jsx)(U, { node: t });
        case i.Z6.SLIDER:
            return (0, r.jsx)(Y, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, r.jsx)(K, { node: t });
        case i.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, r.jsx)(eW, { node: t });
        case i.Z6.CUSTOM:
            return (0, r.jsx)(f, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function ns(e) {
    let { node: n } = e;
    return n.type === i.Z6.PANEL
        ? (0, r.jsx)(ni, { node: n })
        : (0, r.jsx)(d, { node: n, children: (0, r.jsx)(ni, { node: n }) });
}
