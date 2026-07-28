t.d(n, { A: () => nt });
var r = t(627968),
    l = t(64700),
    i = t(963935),
    s = t(503698),
    a = t.n(s),
    c = t(942381),
    o = t(894858),
    u = t(785375);
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
                            s(!1), o.A.setState({ requestFlashKey: void 0 });
                        }, 2250)));
                },
                { equalityFn: c.x, fireImmediately: !0 },
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
var h = t(834730),
    m = t(452027),
    p = t(821609),
    g = t(757418),
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
    return (0, r.jsx)(h.E, { variant: "text-md/medium", children: n.text });
}
function k(e) {
    let { decoration: n } = e;
    switch (n.type) {
        case g.fq.TEXT:
            return (0, r.jsx)(N, { decoration: n });
        case g.fq.STRONGLY_DISCOURAGED_CUSTOM:
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
            useVariant: c,
            useDisabled: o,
            useLoading: u,
            useTrailingDecoration: d,
            onClick: j,
        } = n,
        h = E(n),
        g = u?.() ?? !1,
        [y, v] = l.useState(!1),
        b = i(),
        T = a?.(),
        N = t(),
        S = s?.(),
        A = c?.(),
        C = o?.(),
        I = d?.();
    return (0, r.jsx)(f, {
        children: (0, r.jsx)(m.D, {
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
                    (0, r.jsx)(p.$, {
                        onClick: function () {
                            h();
                            let e = j();
                            e instanceof Promise && (v(!0), e.finally(() => v(!1)));
                        },
                        text: N,
                        "aria-label": S,
                        variant: A,
                        disabled: C,
                        loading: y || g,
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
    _ = t(890856),
    L = t(413750);
function D(e) {
    let {
            ref: n,
            leadingElement: t,
            trailingElement: l,
            title: i,
            description: s,
            "aria-label": c,
            role: o,
            onClick: u,
            style: d,
        } = e,
        x = (0, r.jsxs)("div", {
            className: a()(L.EA, null != u && L.vk),
            ref: n,
            style: d,
            children: [
                null != t && (0, r.jsx)("div", { className: L._y, children: t }),
                (0, r.jsxs)("div", {
                    className: L.jw,
                    children: [
                        (0, r.jsx)("div", {
                            className: L.eg,
                            children: (0, r.jsx)(B.D, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                children: i,
                            }),
                        }),
                        null != s && (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                null != l && (0, r.jsx)("div", { className: L.EY, children: l }),
            ],
        });
    return null != u
        ? (0, r.jsx)(_.s, { onClick: u, "aria-label": c, buttonProps: null != o ? { role: o } : void 0, children: x })
        : x;
}
var w = t(751075);
function Z(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(w.qP, { icons: n.icons });
}
function P(e) {
    let { decoration: n } = e;
    if (n.type === g.wF.STACKED_ICONS) return (0, r.jsx)(Z, { decoration: n });
}
var F = t(390936);
function G(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: l, useTitle: i, useSubtitle: s } = n,
        a = l?.(),
        c = s?.(),
        { parentPanelNode: o, parentSidebarItemNode: u } = R(t),
        d = i?.(),
        x = o?.useTitle?.(),
        j = d ?? x,
        f = E(n);
    if (null == o || null == j) return null;
    let h = null != u ? u.icon : void 0;
    return (0, r.jsx)(D, {
        role: "link",
        "aria-label": x,
        title: j,
        description: c,
        leadingElement: null != h && (0, r.jsx)(I.A, { Icon: h }),
        trailingElement: (0, r.jsxs)("div", {
            className: F.M,
            children: [null != a && (0, r.jsx)(P, { decoration: a }), (0, r.jsx)(A.u, {})],
        }),
        onClick: function () {
            C.A.navigate(t, { animateSidebarScroll: !1 }), f();
        },
    });
}
var K = t(144228);
t(321073);
var M = t(558845);
function z(e) {
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
            if ((0, M.uW)(n)) return "new";
        })(t),
    });
}
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
        m = c(),
        p = z({ persistentBadge: o?.(), dismissibleBadges: u?.() }),
        g = a?.(),
        y = E(n),
        v = d?.();
    return (0, r.jsx)(f, {
        children: (0, r.jsx)(K.z, {
            label: x,
            description: j,
            options: m,
            value: h,
            badge: p,
            onChange: (e) => {
                y(), l(e);
            },
            disabled: g,
            helperText: v,
        }),
    });
}
var U = t(691885);
function X(e) {
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
            getDismissibleBadges: m,
        } = n,
        p = t(),
        g = i?.(),
        y = s(),
        v = c(),
        b = o?.(),
        T = z({ persistentBadge: h?.(), dismissibleBadges: m?.() }),
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
        children: (0, r.jsx)(U.l, {
            ...k,
            label: p,
            description: g,
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
var q = t(106236);
function W(e) {
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
            markers: m,
            onMarkerRender: p,
            stickToMarkers: g,
            fieldLayout: y,
            usePersistentBadge: v,
            getDismissibleBadges: b,
            useHelperText: T,
        } = n,
        [N] = l.useState(() => i()),
        k = x?.(),
        S = o(),
        A = u?.(),
        C = d?.(),
        I = c?.(),
        O = z({ persistentBadge: v?.(), dismissibleBadges: b?.() }),
        R = T?.(),
        B = E(n);
    return (0, r.jsx)(f, {
        children: (0, r.jsx)(q.A, {
            label: S,
            description: A,
            disabled: C,
            initialValue: N,
            value: k,
            minValue: s,
            maxValue: a,
            defaultValue: I,
            onValueRender: j,
            asValueChanges: h,
            onValueChange: function (e) {
                B(), t?.(e);
            },
            orientation: "horizontal",
            markers: m,
            onMarkerRender: p,
            stickToMarkers: g,
            layout: y,
            badge: O,
            helperText: R,
        }),
    });
}
function Y(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l } = n,
        i = t(),
        s = l?.();
    return (0, r.jsx)(D, { title: i, description: s });
}
var H = t(243721),
    $ = t(512950);
function J(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: l,
            useTitle: i,
            useSubtitle: s,
            useDisabled: a,
            useDisabledMessage: c,
            usePersistentBadge: o,
            hasIcon: u,
            getDismissibleBadges: d,
        } = n,
        x = i(),
        j = s?.(),
        h = t(),
        m = a?.() ?? !1,
        p = c?.(),
        g = z({ persistentBadge: o?.(), dismissibleBadges: d?.() }),
        y = E(n);
    return (0, r.jsxs)(f, {
        children: [
            (0, r.jsx)(H.d, {
                label: x,
                description: j,
                badge: g,
                checked: h,
                hasIcon: u,
                onChange: function (e) {
                    y(), l(e);
                },
                disabled: m,
            }),
            m && null != p ? (0, r.jsx)($.p, { messageType: $.Y.WARNING, children: p }) : null,
        ],
    });
}
var Q = t(435558),
    ee = t(770178),
    en = t(353068),
    et = t(650682),
    er = t(138017),
    el = t(661531),
    ei = t(187322),
    es = t(98640);
function ea(e) {
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
        [j, f] = l.useState(null),
        h = s && null != j;
    return (
        l.useLayoutEffect(() => {
            null != d.current && null == j && f(d.current.clientHeight);
        }, [j]),
        (0, r.jsxs)(en.EN, {
            ref: n,
            isExpanded: s,
            onExpandedChange: c,
            children: [
                (0, r.jsx)(D, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: h ? void 0 : i,
                    trailingElement: (0, r.jsx)(ei.vN, {
                        children: (0, r.jsx)(et.$, {
                            slot: "trigger",
                            className: es.bW,
                            children: (0, r.jsx)(er.j, {
                                className: a()(es.Kk, { [es.kX]: !s }),
                                color: el.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => c(!s),
                }),
                (0, r.jsx)(en.kS, {
                    className: a()(es.nd, { [es.t5]: !u }),
                    children: (0, r.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: o }),
                }),
            ],
        })
    );
}
function ec(e) {
    return o.A.getField("requestAccordionOpenKey") === e.key;
}
let eo = l.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, layout: i, useCollapsedSubtitle: s } = n,
        [a, c] = l.useState(!0),
        [u, d] = l.useState(() => ec(n)),
        x = l.useRef(u),
        j = l.useRef(ec(n) ? "navigation" : null);
    l.useEffect(
        () =>
            o.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (x.current ? C.A.notifyAccordionExpanded(n.key) : ((j.current = "navigation"), c(!1), d(!0)));
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
                            c(!0), C.A.notifyAccordionExpanded(n.key);
                            break;
                        case "user":
                            C.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [u, n.key],
        ),
        h = l.useMemo(() => (0, Q.debounce)(f, 50), [f]),
        m = (0, ee.w)(h),
        p = t?.(u),
        g = s?.(),
        y = E(n);
    return (0, r.jsx)(ea, {
        ref: m,
        title: p,
        collapsedSubtitle: g,
        isExpanded: u,
        onExpandedChange: function (e) {
            (j.current = "user"), y(), d(e);
        },
        animate: a,
        children: i.map((e) => (0, r.jsx)(nt, { node: e }, e.key)),
    });
});
var eu = t(575376);
function ed(e) {
    let { node: n } = e,
        t = n.layout.find((e) => e.key === n.headerSettingKey),
        l = n.layout.filter((e) => e.key !== n.headerSettingKey),
        i = l.length > 0;
    return (0, r.jsxs)("div", {
        className: eu.Nr,
        children: [
            null != t &&
                (0, r.jsx)("div", { className: a()(eu.MY, { [eu.Q2]: !i }), children: (0, r.jsx)(nt, { node: t }) }),
            i && (0, r.jsx)("div", { className: eu.zI, children: l.map((e) => (0, r.jsx)(nt, { node: e }, e.key)) }),
        ],
    });
}
var ex = t(215566),
    ej = t(885574),
    ef = t(43105),
    eh = t(939249);
function em(e) {
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
                    clearTimeout(s.current),
                        (s.current = null),
                        null == i.current &&
                            (i.current = setTimeout(() => {
                                (i.current = null), n(!0);
                            }, 250));
                }, []),
                o = l.useCallback(() => {
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
                            t.addEventListener("mouseenter", c),
                            t.addEventListener("mouseleave", o),
                            t.addEventListener("focusin", c),
                            t.addEventListener("focusout", o),
                            () => {
                                t.removeEventListener("mouseenter", c),
                                    t.removeEventListener("mouseleave", o),
                                    t.removeEventListener("focusin", c),
                                    t.removeEventListener("focusout", o);
                            }
                        );
                }, [t, c, o]),
                { isOpen: e, scheduleOpen: c, scheduleClose: o, close: u, popoverRef: a }
            );
        })(),
        { ariaLabel: u, popoverProps: d } = n,
        { getActions: x, ...j } = d,
        f = l.useMemo(() => x(c), [x, c]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eh.D, {
                tag: "span",
                innerRef: t,
                "aria-label": u,
                onMouseEnter: s,
                onMouseLeave: a,
                onFocus: s,
                onBlur: a,
                children: (0, r.jsx)(ej.m, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)(ef.A, {
                ...j,
                actions: f,
                targetElementRef: t,
                popoverRef: o,
                shouldShow: i,
                onRequestClose: c,
                scrollBehavior: "close",
            }),
        ],
    });
}
function ep(e) {
    let { decoration: n } = e;
    if (n.type === g.p3.INFO_POPOVER) return (0, r.jsx)(em, { decoration: n });
}
function eg(e) {
    let { decoration: n } = e,
        { type: t, id: l, ...i } = n;
    return (0, r.jsx)(p.$, { variant: "secondary", ...i });
}
function ey(e) {
    let { decoration: n } = e,
        t = n.button;
    return (0, r.jsx)(t, {});
}
function ev(e) {
    let { decoration: n } = e;
    return (0, r.jsx)(x.B, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: n.buttons.map((e) => {
            switch (e.type) {
                case g.UV.BUTTON:
                    return (0, r.jsx)(eg, { decoration: e }, e.id);
                case g.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, r.jsx)(ey, { decoration: e }, e.id);
            }
        }),
    });
}
function eb(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(w.qP, { icons: n.icons });
}
function eE(e) {
    let { decoration: n } = e;
    if (null == n) return null;
    switch (n.type) {
        case g.WX.BUTTON_GROUP:
            return (0, r.jsx)(ev, { decoration: n });
        case g.WX.STACKED_ICONS:
            return (0, r.jsx)(eb, { decoration: n });
    }
}
function eT(e) {
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
                            null != s && (0, r.jsx)(ex.A, { badge: s }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                                null != l && (0, r.jsx)(ep, { decoration: l }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(eE, { decoration: i }),
        ],
    });
}
var eN = t(683071),
    ek = t(964486),
    eS = t(35218);
function eA(e) {
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
    return (0, r.jsx)(p.$, {
        variant: n.variant ?? "secondary",
        size: n.size,
        text: n.text,
        onClick: s,
        loading: t,
        disabled: t,
    });
}
function eC(e) {
    let { notice: n } = e,
        { noticeType: t, title: l, text: i, button: s, iconAlign: a } = n;
    (0, ek.Ay)(() => {
        n.trackView?.();
    });
    let c = (0, r.jsxs)(x.B, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != l && (0, r.jsx)(B.D, { variant: "heading-md/medium", children: l }),
            (0, r.jsx)("span", { children: i }),
        ],
    });
    return (0, r.jsx)(eN.w, {
        type: t,
        iconAlign: a,
        children: (0, r.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [c, null != s && (0, r.jsx)(eA, { button: s })],
        }),
    });
}
function eI(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, r.jsx)(t, {});
}
function eO(e) {
    let { notice: n } = e;
    switch (n.type) {
        case g.lT.INLINE_NOTICE:
            return (0, r.jsx)(eC, { notice: n });
        case g.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(eI, { notice: n });
    }
}
function eR(e) {
    let { notice: n } = e;
    return (0, r.jsx)("div", { className: eS.E, children: (0, r.jsx)(eO, { notice: n }) });
}
let eB = l.memo(function (e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubnavLabel: l,
            useSubtitle: i,
            layout: s,
            useInlineNotice: a,
            useHeaderDecoration: c,
            useSubtitleDecoration: o,
            usePersistentBadge: u,
        } = n,
        d = t?.(),
        j = i?.(),
        f = a?.(),
        h = c?.(),
        m = o?.(),
        p = null != t || null != l,
        g = u?.();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != d &&
                (0, r.jsx)(eT, { title: d, subtitle: j, subtitleDecoration: m, decoration: h, persistentBadge: g }),
            (0, r.jsx)("div", {
                "data-settings-category-key": p ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, r.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != f && (0, r.jsx)(eR, { notice: f }),
                    s.map((e) => (0, r.jsx)(nt, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
var e_ = t(140735),
    eL = t(597894);
function eD(e) {
    let { title: n, subtitle: t, isHiddenVisually: l } = e;
    return null == n || "" === n
        ? null
        : l
          ? (0, r.jsx)(e_.A, { tag: "legend", children: n })
          : (0, r.jsx)(h.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eL.D, { [eL.h]: null != t && "" !== t }),
                children: n,
            });
}
let ew = l.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: i, layout: s, variant: a = "default", isTitleHiddenVisually: c } = n,
        o = t(),
        u = i?.(),
        d = l.useId(),
        j = null != o && "" !== o,
        f = null != u && "" !== u,
        m = (function (e) {
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
            (0, r.jsx)(eD, { title: o, subtitle: u, isHiddenVisually: c }),
            f ? (0, r.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", id: d, children: u }) : null,
            (0, r.jsx)(x.B, {
                gap: m,
                padding: { top: j && !c ? 16 : 0 },
                children: s.map((e) => (0, r.jsx)(nt, { node: e }, e.key)),
            }),
        ],
    });
});
var eZ = t(404778),
    eP = t(375708),
    eF = t(733062);
function eG(e) {
    var n;
    let { node: t } = e,
        [i, s] = l.useState(!1),
        { layout: a, collapseAfter: c, useCollapsibleTitle: o, useCollapsedSubtitle: u } = t,
        d = null != c ? a.slice(0, c) : a,
        j = null != c ? a.slice(c) : [],
        f =
            o?.(i, j.length) ??
            ((n = j.length),
            i
                ? eP.intl.formatToPlainString(eP.t["3SHL+d"], { count: n })
                : eP.intl.formatToPlainString(eP.t["8JRFyZ"], { count: n })),
        h = u?.();
    return (0, r.jsxs)(x.B, {
        gap: 8,
        children: [
            d.map((e, n) =>
                (0, r.jsxs)(
                    l.Fragment,
                    { children: [(0, r.jsx)(nt, { node: e }), n !== d.length - 1 && (0, r.jsx)(eZ.c, {})] },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, r.jsxs)("div", {
                    className: eF.CT,
                    children: [
                        (0, r.jsx)(eZ.c, { className: eF.mn }),
                        (0, r.jsx)(ea, {
                            title: f,
                            collapsedSubtitle: h,
                            isExpanded: i,
                            onExpandedChange: s,
                            children: (0, r.jsx)(x.B, {
                                gap: 8,
                                children: j.map((e, n) =>
                                    (0, r.jsxs)(
                                        l.Fragment,
                                        {
                                            children: [
                                                (0, r.jsx)(nt, { node: e }),
                                                n !== j.length - 1 && (0, r.jsx)(eZ.c, {}),
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
function eK(e) {
    let { decoration: n } = e;
    if (n.type === g.Xy.ICON)
        return (0, r.jsx)(I.A, { Icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function eM(e) {
    let { decoration: n } = e;
    return null == n.text ? null : (0, r.jsx)(h.E, { variant: "text-md/medium", children: n.text });
}
function ez(e) {
    let { decoration: n } = e;
    if (n.type === g.xn.TEXT) return (0, r.jsx)(eM, { decoration: n });
}
function eV(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: i, useTrailingDecoration: s } = n,
        a = t?.(),
        c = l?.(),
        o = i?.(),
        u = s?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = R(d),
        f = j?.useTitle?.(),
        h = a ?? f;
    return null == j || null == h
        ? null
        : (0, r.jsx)(D, {
              role: "link",
              "aria-label": f,
              title: h,
              leadingElement: null != o ? (0, r.jsx)(eK, { decoration: o }) : null,
              description: c,
              trailingElement: (0, r.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, r.jsx)(ez, { decoration: u }), (0, r.jsx)(A.u, {})],
              }),
              onClick: () => C.A.navigate(d),
          });
}
var eU = t(17928),
    eX = t(868285),
    eq = t(871682),
    eW = t(689175),
    eY = t(707554),
    eH = t(761508),
    e$ = t(823092),
    eJ = t(397274),
    eQ = t(439750);
function e0(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, e$.L_)(),
        a = n?.stores;
    l.useEffect(() => {
        if (null != a) {
            let e = new eU.ru(a, () => {
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
        return (0, r.jsx)(eq.F, { className: eQ.lm, children: (0, r.jsx)(e, {}) });
    }, [n, i]);
    return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(eX.F, { component: "div", children: c })] });
}
function e1(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, r.jsx)("div", {
        className: a()(eQ.oK, { [eQ.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, r.jsx)(t, {}),
    });
}
function e6(e) {
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = l.useRef(null),
        a = i?.();
    return null != a
        ? (0, r.jsx)(a, {})
        : (0, r.jsx)(e0, {
              notice: n,
              children: (0, r.jsxs)(eW.Gt, {
                  className: eQ.XG,
                  ref: (e) => {
                      eJ.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: eQ.nd,
                          ref: s,
                          children: (0, r.jsx)(ei.xp, { containerRef: s, children: t }),
                      }),
                      (0, r.jsx)("div", { className: eQ.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function e8(e) {
    let { layout: n, decoration: t } = e;
    return (0, r.jsxs)("div", {
        className: eQ.LZ,
        children: [
            null != t && (0, r.jsx)(e1, { decoration: t }),
            (0, r.jsx)(eY.F, {
                forceLevel: 2,
                children: n.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(nt, { node: e }),
                                t !== n.length - 1 && (0, r.jsx)(eZ.c, { className: eQ.yF }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function e5(e) {
    let { panelKey: n, layout: t, notice: i, decoration: s, useObscuredNotice: a } = e,
        c =
            o.A.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(n);
            }) ?? t[0].key;
    l.useEffect(() => {
        let e = o.A.getField("currentTabKeys");
        if (t.some((t) => t.key === e.get(n))) return;
        let r = new Map(e);
        r.set(n, t[0].key), o.A.setState({ currentTabKeys: r });
    }, [t, n]);
    let u = t.find((e) => e.key === c) ?? t[0];
    return (0, r.jsxs)(
        e6,
        {
            notice: i,
            useObscuredNotice: a,
            children: [
                (0, r.jsx)(eH.V, {
                    className: eQ.$H,
                    selectedItem: c,
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
                        return (0, r.jsx)(eH.V.Item, { id: n, children: t() }, n);
                    }),
                }),
                (0, r.jsx)(eH.V.Panel, { id: c, children: (0, r.jsx)(e8, { layout: u.layout, decoration: s }) }),
            ],
        },
        n,
    );
}
function e7(e) {
    let { panelKey: n, notice: t, decoration: l, layout: i, useObscuredNotice: s } = e;
    return (0, r.jsx)(
        e6,
        { notice: t, useObscuredNotice: s, children: (0, r.jsx)(e8, { layout: i, decoration: l }) },
        n,
    );
}
function e3(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, i.zY)(t))
        return (0, r.jsx)(e5, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    if ((0, i.Iu)(t))
        return (0, r.jsx)(e7, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
var e2 = t(137339);
function e9(e) {
    let { node: n } = e;
    return (0, r.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, r.jsx)(B.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: e2.D,
                children: eP.intl.string(eP.t.rPREPG),
            }),
            n.layout.map((e) => (0, r.jsx)(nt, { node: e }, e.key)),
        ],
    });
}
var e4 = t(960020);
let ne = l.memo(function (e) {
    let { node: n } = e;
    return (0, r.jsx)("div", { className: e4.l, children: n.layout.map((e) => (0, r.jsx)(nt, { node: e }, e.key)) });
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
        case i.Z6.TAB_ITEM:
            throw Error(`${t.type} nodes should never be rendered directly`);
        case i.Z6.PANEL:
            return (0, r.jsx)(e3, { node: t });
        case i.Z6.LIST:
            return (0, r.jsx)(eG, { node: t });
        case i.Z6.FIELD_SET:
            return (0, r.jsx)(ew, { node: t });
        case i.Z6.RELATED:
            return (0, r.jsx)(e9, { node: t });
        case i.Z6.CARD:
            return (0, r.jsx)(ed, { node: t });
        case i.Z6.CATEGORY:
            return (0, r.jsx)(eB, { node: t });
        case i.Z6.ACCORDION:
            return (0, r.jsx)(eo, { node: t });
        case i.Z6.SPLIT:
            return (0, r.jsx)(ne, { node: t });
        case i.Z6.TOGGLE:
            return (0, r.jsx)(J, { node: t });
        case i.Z6.STATIC:
            return (0, r.jsx)(Y, { node: t });
        case i.Z6.BUTTON:
            return (0, r.jsx)(S, { node: t });
        case i.Z6.SELECT:
            return (0, r.jsx)(X, { node: t });
        case i.Z6.RADIO:
            return (0, r.jsx)(V, { node: t });
        case i.Z6.SLIDER:
            return (0, r.jsx)(W, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, r.jsx)(G, { node: t });
        case i.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, r.jsx)(eV, { node: t });
        case i.Z6.CUSTOM:
            return (0, r.jsx)(f, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function nt(e) {
    let { node: n } = e;
    return n.type === i.Z6.PANEL
        ? (0, r.jsx)(nn, { node: n })
        : (0, r.jsx)(d, { node: n, children: (0, r.jsx)(nn, { node: n }) });
}
