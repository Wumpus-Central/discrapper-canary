t.d(n, { A: () => ni });
var l = t(477900),
    r = t(582128),
    i = t(963935),
    s = t(503698),
    a = t.n(s),
    o = t(462180),
    c = t(894858),
    u = t(315826);
function d(e) {
    let { node: n, children: t } = e,
        [i, s] = r.useState(!1),
        d = r.useRef(null);
    return (
        r.useEffect(() => {
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
        (0, l.jsx)("div", { tabIndex: -1, "data-nav-anchor-key": n.key, className: a()(u.kL, i && u.jl), children: t })
    );
}
var x = t(331322),
    j = t(979926);
function m(e) {
    let { children: n } = e;
    return (0, l.jsx)(x.B, { className: j.n, gap: 0, padding: { top: "xs", bottom: "xs" }, children: n });
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
            let n = r.useMemo(() => {
                let n = [];
                return (
                    e?.forEach((e) => {
                        let { badgeType: t, dismissibleContent: l } = e;
                        t === g.Xi.NEW && n.push(l);
                    }),
                    n
                );
            }, [e]);
            if ((0, v.uW)(n)) return "new";
        })(t),
    });
}
var b = t(174459),
    E = t(89381),
    N = t(652215);
function T(e) {
    return r.useCallback(() => {
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
var k = t(297264),
    C = t(508770),
    S = t(890856),
    A = t(763811);
function I(e) {
    let {
            ref: n,
            leadingElement: t,
            trailingElement: r,
            title: i,
            description: s,
            badge: o,
            "aria-label": c,
            role: u,
            onClick: d,
            style: x,
        } = e,
        j = (0, l.jsxs)("div", {
            className: a()(A.EA, null != d && A.vk),
            ref: n,
            style: x,
            children: [
                null != t && (0, l.jsx)("div", { className: A._y, children: t }),
                (0, l.jsxs)("div", {
                    className: A.jw,
                    children: [
                        (0, l.jsxs)("div", {
                            className: A.eg,
                            children: [
                                (0, l.jsx)(k.D, { variant: "heading-md/medium", color: "text-strong", children: i }),
                                null != o && (0, l.jsx)(C.E, { type: o, variant: "brand" }),
                            ],
                        }),
                        null != s && (0, l.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                null != r && (0, l.jsx)("div", { className: A.EY, children: r }),
            ],
        });
    return null != d
        ? (0, l.jsx)(S.s, { onClick: d, "aria-label": c, buttonProps: null != u ? { role: u } : void 0, children: j })
        : j;
}
function O(e) {
    let { decoration: n } = e;
    if (n.type === g.hp.ICON)
        return (0, l.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function B(e) {
    let { decoration: n } = e,
        { StronglyDiscouragedCustomComponent: t } = n;
    return (0, l.jsx)(t, {});
}
function R(e) {
    let { decoration: n } = e;
    return (0, l.jsx)(h.E, { variant: "text-md/medium", children: n.text });
}
function L(e) {
    let { decoration: n } = e;
    switch (n.type) {
        case g.fq.TEXT:
            return (0, l.jsx)(R, { decoration: n });
        case g.fq.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(B, { decoration: n });
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
            onClick: h,
        } = n,
        g = T(n),
        p = u?.() ?? !1,
        [v, b] = r.useState(!1),
        E = i(),
        N = a?.(),
        k = t(),
        C = s?.(),
        S = o?.(),
        A = c?.(),
        B = d?.(),
        R = j?.(),
        _ = y({ persistentBadge: void 0, dismissibleBadges: m?.() });
    return (0, l.jsx)(I, {
        title: E,
        badge: _,
        description: N,
        leadingElement: null != B ? (0, l.jsx)(O, { decoration: B }) : null,
        trailingElement: (0, l.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "end",
            gap: "md",
            children: [
                null != R && (0, l.jsx)(L, { decoration: R }),
                (0, l.jsx)(f.$, {
                    onClick: function () {
                        g();
                        let e = h();
                        e instanceof Promise && (b(!0), e.finally(() => b(!1)));
                    },
                    text: k,
                    "aria-label": C,
                    variant: S,
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
    return null == n.icons ? null : (0, l.jsx)(Z.qP, { icons: n.icons });
}
function z(e) {
    let { decoration: n } = e;
    if (n.type === g.wF.STACKED_ICONS) return (0, l.jsx)(F, { decoration: n });
}
var K = t(321557);
function M(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: r, useTitle: i, useSubtitle: s } = n,
        a = r?.(),
        o = s?.(),
        { parentPanelNode: c, parentSidebarItemNode: u } = P(t),
        d = i?.(),
        x = c?.useTitle?.(),
        j = d ?? x,
        m = T(n);
    if (null == c || null == j) return null;
    let h = null != u ? u.icon : void 0;
    return (0, l.jsx)(I, {
        role: "link",
        "aria-label": x,
        title: j,
        description: o,
        leadingElement: null != h && (0, l.jsx)(p.A, { icon: h }),
        trailingElement: (0, l.jsxs)("div", {
            className: K.M,
            children: [null != a && (0, l.jsx)(z, { decoration: a }), (0, l.jsx)(D.u, {})],
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
            setValue: r,
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
        h = t(),
        f = o(),
        g = y({ persistentBadge: c?.(), dismissibleBadges: u?.() }),
        p = a?.(),
        v = T(n),
        b = d?.();
    return (0, l.jsx)(m, {
        children: (0, l.jsx)(U.z, {
            label: x,
            description: j,
            options: f,
            value: h,
            badge: g,
            onChange: (e) => {
                (v(), r(e));
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
            useOptions: o,
            useDisabled: c,
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
        b = o(),
        E = c?.(),
        N = y({ persistentBadge: h?.(), dismissibleBadges: f?.() }),
        k = T(n),
        C = r.useMemo(() => {
            var e, n;
            return {
                selectionMode: j,
                value: v,
                onSelectionChange:
                    ((e = a),
                    (n = k),
                    (t) => {
                        (n(), e(t));
                    }),
            };
        }, [j, v, a, k]);
    return (0, l.jsx)(m, {
        children: (0, l.jsx)(X.l, {
            ...C,
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
            useDefaultValue: o,
            useTitle: c,
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
        [k] = r.useState(() => i()),
        C = x?.(),
        S = c(),
        A = u?.(),
        I = d?.(),
        O = o?.(),
        B = y({ persistentBadge: b?.(), dismissibleBadges: E?.() }),
        R = N?.(),
        L = T(n);
    return (0, l.jsx)(m, {
        children: (0, l.jsx)(W.A, {
            label: S,
            description: A,
            disabled: I,
            initialValue: k,
            value: C,
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
        return (0, l.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function H(e) {
    let { decoration: n } = e;
    return (0, l.jsx)(h.E, { variant: "text-md/medium", children: n.text });
}
function J(e) {
    let { decoration: n } = e;
    if (n.type === g.Ln.TEXT) return (0, l.jsx)(H, { decoration: n });
}
function Q(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: r, useLeadingDecoration: i, useTrailingDecoration: s, getDismissibleBadges: a } = n,
        o = t(),
        c = r?.(),
        u = i?.(),
        d = s?.(),
        x = y({ persistentBadge: void 0, dismissibleBadges: a?.() });
    return (0, l.jsx)(I, {
        title: o,
        badge: x,
        description: c,
        leadingElement: null != u ? (0, l.jsx)($, { decoration: u }) : null,
        trailingElement: null != d ? (0, l.jsx)(J, { decoration: d }) : null,
    });
}
var ee = t(243721),
    en = t(512950);
function et(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: r,
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
        h = t(),
        f = a?.() ?? !1,
        g = o?.(),
        p = y({ persistentBadge: c?.(), dismissibleBadges: d?.() }),
        v = T(n);
    return (0, l.jsxs)(m, {
        children: [
            (0, l.jsx)(ee.d, {
                label: x,
                description: j,
                badge: p,
                checked: h,
                hasIcon: u,
                onChange: function (e) {
                    (v(), r(e));
                },
                disabled: f,
            }),
            f && null != g ? (0, l.jsx)(en.p, { messageType: en.Y.WARNING, children: g }) : null,
        ],
    });
}
var el = t(435558),
    er = t(770178),
    ei = t(99018),
    es = t(160844),
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
        d = r.useRef(null),
        [j, m] = r.useState(null),
        h = s && null != j;
    return (
        r.useLayoutEffect(() => {
            null != d.current && null == j && m(d.current.clientHeight);
        }, [j]),
        (0, l.jsxs)(ei.EN, {
            ref: n,
            isExpanded: s,
            onExpandedChange: o,
            children: [
                (0, l.jsx)(I, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: h ? void 0 : i,
                    trailingElement: (0, l.jsx)(ec.vN, {
                        children: (0, l.jsx)(es.$, {
                            slot: "trigger",
                            className: eu.bW,
                            children: (0, l.jsx)(ea.j, {
                                className: a()(eu.Kk, { [eu.kX]: !s }),
                                color: eo.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => o(!s),
                }),
                (0, l.jsx)(ei.kS, {
                    className: a()(eu.nd, { [eu.t5]: !u }),
                    children: (0, l.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: c }),
                }),
            ],
        })
    );
}
function ex(e) {
    return c.A.getField("requestAccordionOpenKey") === e.key;
}
let ej = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, layout: i, useCollapsedSubtitle: s } = n,
        [a, o] = r.useState(!0),
        [u, d] = r.useState(() => ex(n)),
        x = r.useRef(u),
        j = r.useRef(ex(n) ? "navigation" : null);
    r.useEffect(
        () =>
            c.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (x.current ? w.A.notifyAccordionExpanded(n.key) : ((j.current = "navigation"), o(!1), d(!0)));
                },
                { equalityFn: (e, n) => e === n, fireImmediately: !0 },
            ),
        [n.key, u],
    );
    let m = r.useCallback(
            (e) => {
                if (null != e.target && u !== x.current && ((x.current = u), x.current))
                    switch (j.current) {
                        case "navigation":
                            (o(!0), w.A.notifyAccordionExpanded(n.key));
                            break;
                        case "user":
                            w.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [u, n.key],
        ),
        h = r.useMemo(() => (0, el.debounce)(m, 50), [m]),
        f = (0, er.w)(h),
        g = t?.(u),
        p = s?.(),
        v = T(n);
    return (0, l.jsx)(ed, {
        ref: f,
        title: g,
        collapsedSubtitle: p,
        isExpanded: u,
        onExpandedChange: function (e) {
            ((j.current = "user"), v(), d(e));
        },
        animate: a,
        children: i.map((e) => (0, l.jsx)(ni, { node: e }, e.key)),
    });
});
var em = t(793409);
function eh(e) {
    let { node: n } = e,
        t = n.layout.find((e) => e.key === n.headerSettingKey),
        r = n.layout.filter((e) => e.key !== n.headerSettingKey),
        i = r.length > 0;
    return (0, l.jsxs)("div", {
        className: em.Nr,
        children: [
            null != t &&
                (0, l.jsx)("div", { className: a()(em.MY, { [em.Q2]: !i }), children: (0, l.jsx)(ni, { node: t }) }),
            i && (0, l.jsx)("div", { className: em.zI, children: r.map((e) => (0, l.jsx)(ni, { node: e }, e.key)) }),
        ],
    });
}
var ef = t(215566),
    eg = t(885574),
    ep = t(43105),
    ev = t(939249);
function ey(e) {
    let { decoration: n } = e,
        t = r.useRef(null),
        {
            isOpen: i,
            scheduleOpen: s,
            scheduleClose: a,
            close: o,
            popoverRef: c,
        } = (function () {
            let [e, n] = r.useState(!1),
                [t, l] = r.useState(null),
                i = r.useRef(null),
                s = r.useRef(null),
                a = r.useCallback((e) => {
                    l(e);
                }, []),
                o = r.useCallback(() => {
                    (clearTimeout(s.current),
                        (s.current = null),
                        null == i.current &&
                            (i.current = setTimeout(() => {
                                ((i.current = null), n(!0));
                            }, 250)));
                }, []),
                c = r.useCallback(() => {
                    (clearTimeout(i.current),
                        (i.current = null),
                        null == s.current &&
                            (s.current = setTimeout(() => {
                                ((s.current = null), n(!1));
                            }, 150)));
                }, []),
                u = r.useCallback(() => {
                    (clearTimeout(i.current), (i.current = null), clearTimeout(s.current), (s.current = null), n(!1));
                }, []);
            return (
                r.useEffect(
                    () => () => {
                        (clearTimeout(i.current), clearTimeout(s.current));
                    },
                    [],
                ),
                r.useEffect(() => {
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
        m = r.useMemo(() => x(o), [x, o]);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(ev.D, {
                tag: "span",
                innerRef: t,
                "aria-label": u,
                onMouseEnter: s,
                onMouseLeave: a,
                onFocus: s,
                onBlur: a,
                children: (0, l.jsx)(eg.CircleInformationIcon, { size: "xs", color: "currentColor" }),
            }),
            (0, l.jsx)(ep.A, {
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
function eb(e) {
    let { decoration: n } = e;
    if (n.type === g.p3.INFO_POPOVER) return (0, l.jsx)(ey, { decoration: n });
}
function eE(e) {
    let { decoration: n } = e,
        { type: t, id: r, ...i } = n;
    return (0, l.jsx)(f.$, { variant: "secondary", ...i });
}
function eN(e) {
    let { decoration: n } = e,
        t = n.button;
    return (0, l.jsx)(t, {});
}
function eT(e) {
    let { decoration: n } = e;
    return (0, l.jsx)(x.B, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: n.buttons.map((e) => {
            switch (e.type) {
                case g.UV.BUTTON:
                    return (0, l.jsx)(eE, { decoration: e }, e.id);
                case g.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, l.jsx)(eN, { decoration: e }, e.id);
            }
        }),
    });
}
function ek(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, l.jsx)(Z.qP, { icons: n.icons });
}
function eC(e) {
    let { decoration: n } = e;
    if (null == n) return null;
    switch (n.type) {
        case g.WX.BUTTON_GROUP:
            return (0, l.jsx)(eT, { decoration: n });
        case g.WX.STACKED_ICONS:
            return (0, l.jsx)(ek, { decoration: n });
    }
}
function eS(e) {
    let { title: n, subtitle: t, subtitleDecoration: r, decoration: i, persistentBadge: s } = e;
    return (0, l.jsxs)(x.B, {
        direction: "horizontal",
        align: "center",
        gap: 24,
        padding: { bottom: "lg" },
        children: [
            (0, l.jsxs)(x.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsxs)(x.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: 8,
                        children: [
                            (0, l.jsx)(k.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != s && (0, l.jsx)(ef.A, { badge: s }),
                        ],
                    }),
                    null != t &&
                        (0, l.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, l.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                                null != r && (0, l.jsx)(eb, { decoration: r }),
                            ],
                        }),
                ],
            }),
            (0, l.jsx)(eC, { decoration: i }),
        ],
    });
}
var eA = t(683071),
    eI = t(789645),
    eO = t(964486),
    eB = t(375708),
    eR = t(864043);
function eL(e) {
    let { button: n } = e,
        [t, i] = r.useState(!1);
    async function s() {
        i(!0);
        try {
            await n.onClick();
        } finally {
            i(!1);
        }
    }
    return (0, l.jsx)(f.$, {
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
        { noticeType: t, title: r, text: i, button: s, iconAlign: a, onDismiss: o } = n;
    (0, eO.Ay)(() => {
        n.trackView?.();
    });
    let c = (0, l.jsxs)(x.B, {
            direction: "vertical",
            gap: "xs",
            className: eR.ut,
            children: [
                null != r && (0, l.jsx)(k.D, { variant: "heading-md/medium", children: r }),
                (0, l.jsx)("span", { children: i }),
            ],
        }),
        u = null != o && null == s;
    return (0, l.jsx)(eA.w, {
        type: t,
        iconAlign: a,
        children: (0, l.jsxs)(x.B, {
            direction: "horizontal",
            align: u ? "start" : "center",
            justify: "space-between",
            gap: "xs",
            children: [
                c,
                (null != s || null != o) &&
                    (0, l.jsxs)(x.B, {
                        direction: "horizontal",
                        align: "center",
                        gap: "xs",
                        fullWidth: !1,
                        children: [
                            null != s && (0, l.jsx)(eL, { button: s }),
                            null != o &&
                                (0, l.jsx)(ev.D, {
                                    "aria-label": eB.intl.string(eB.t.WAI6xu),
                                    onClick: o,
                                    className: eR.hL,
                                    children: (0, l.jsx)(eI.P, { size: "sm", color: "currentColor" }),
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
    return (0, l.jsx)(t, {});
}
function ew(e) {
    let { notice: n } = e;
    switch (n.type) {
        case g.lT.INLINE_NOTICE:
            return (0, l.jsx)(e_, { notice: n });
        case g.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(eD, { notice: n });
    }
}
function eG(e) {
    let { notice: n } = e;
    return (0, l.jsx)("div", { className: eR.E$, children: (0, l.jsx)(ew, { notice: n }) });
}
let eP = r.memo(function (e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubnavLabel: r,
            useSubtitle: i,
            layout: s,
            useInlineNotice: a,
            useHeaderDecoration: o,
            useSubtitleDecoration: c,
            usePersistentBadge: u,
        } = n,
        d = t?.(),
        j = i?.(),
        m = a?.(),
        h = o?.(),
        f = c?.(),
        g = null != t || null != r,
        p = u?.();
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != d &&
                (0, l.jsx)(eS, { title: d, subtitle: j, subtitleDecoration: f, decoration: h, persistentBadge: p }),
            (0, l.jsx)("div", {
                "data-settings-category-key": g ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, l.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != m && (0, l.jsx)(eG, { notice: m }),
                    s.map((e) => (0, l.jsx)(ni, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
var eZ = t(140735),
    eF = t(517759);
function ez(e) {
    let { title: n, subtitle: t, isHiddenVisually: r } = e;
    return null == n || "" === n
        ? null
        : r
          ? (0, l.jsx)(eZ.A, { tag: "legend", children: n })
          : (0, l.jsx)(h.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eF.D, { [eF.h]: null != t && "" !== t }),
                children: n,
            });
}
let eK = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: i, layout: s, variant: a = "default", isTitleHiddenVisually: o } = n,
        c = t(),
        u = i?.(),
        d = r.useId(),
        j = null != c && "" !== c,
        m = null != u && "" !== u,
        f = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(a);
    return (0, l.jsxs)("fieldset", {
        "aria-describedby": m ? d : void 0,
        children: [
            (0, l.jsx)(ez, { title: c, subtitle: u, isHiddenVisually: o }),
            m ? (0, l.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", id: d, children: u }) : null,
            (0, l.jsx)(x.B, {
                gap: f,
                padding: { top: j && !o ? 16 : 0 },
                children: s.map((e) => (0, l.jsx)(ni, { node: e }, e.key)),
            }),
        ],
    });
});
var eM = t(404778),
    eU = t(777919);
function eV(e) {
    var n;
    let { node: t } = e,
        [i, s] = r.useState(!1),
        { layout: a, collapseAfter: o, useCollapsibleTitle: c, useCollapsedSubtitle: u } = t,
        d = null != o ? a.slice(0, o) : a,
        j = null != o ? a.slice(o) : [],
        m =
            c?.(i, j.length) ??
            ((n = j.length),
            i
                ? eB.intl.formatToPlainString(eB.t["3SHL+d"], { count: n })
                : eB.intl.formatToPlainString(eB.t["8JRFyZ"], { count: n })),
        h = u?.();
    return (0, l.jsxs)(x.B, {
        gap: 8,
        children: [
            d.map((e, n) =>
                (0, l.jsxs)(
                    r.Fragment,
                    { children: [(0, l.jsx)(ni, { node: e }), n !== d.length - 1 && (0, l.jsx)(eM.c, {})] },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, l.jsxs)("div", {
                    className: eU.CT,
                    children: [
                        (0, l.jsx)(eM.c, { className: eU.mn }),
                        (0, l.jsx)(ed, {
                            title: m,
                            collapsedSubtitle: h,
                            isExpanded: i,
                            onExpandedChange: s,
                            children: (0, l.jsx)(x.B, {
                                gap: 8,
                                children: j.map((e, n) =>
                                    (0, l.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                (0, l.jsx)(ni, { node: e }),
                                                n !== j.length - 1 && (0, l.jsx)(eM.c, {}),
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
function eX(e) {
    let { decoration: n } = e;
    if (n.type === g.Xy.ICON)
        return (0, l.jsx)(p.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
var eq = t(552585);
function eW(e) {
    let { decoration: n } = e;
    return null == n.text ? null : (0, l.jsx)(h.E, { variant: "text-md/medium", className: eq.q, children: n.text });
}
function eY(e) {
    let { decoration: n } = e;
    if (n.type === g.xn.TEXT) return (0, l.jsx)(eW, { decoration: n });
}
function e$(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: r, useLeadingDecoration: i, useTrailingDecoration: s } = n,
        a = t?.(),
        o = r?.(),
        c = i?.(),
        u = s?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = P(d),
        m = j?.useTitle?.(),
        h = a ?? m;
    return null == j || null == h
        ? null
        : (0, l.jsx)(I, {
              role: "link",
              "aria-label": m,
              title: h,
              leadingElement: null != c ? (0, l.jsx)(eX, { decoration: c }) : null,
              description: o,
              trailingElement: (0, l.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, l.jsx)(eY, { decoration: u }), (0, l.jsx)(D.u, {})],
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
    e7 = t(525473);
function e5(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, e6.L_)(),
        a = n?.stores;
    r.useEffect(() => {
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
    let o = r.useMemo(() => {
        if (null == n || !i) return null;
        let { element: e } = n;
        return (0, l.jsx)(eQ.F, { className: e7.lm, children: (0, l.jsx)(e, {}) });
    }, [n, i]);
    return (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(eJ.F, { component: "div", children: o })] });
}
function e9(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, l.jsx)("div", {
        className: a()(e7.oK, { [e7.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, l.jsx)(t, {}),
    });
}
function e2(e) {
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = r.useRef(null),
        a = i?.();
    return null != a
        ? (0, l.jsx)(a, {})
        : (0, l.jsx)(e5, {
              notice: n,
              children: (0, l.jsxs)(e0.Gt, {
                  className: e7.XG,
                  scrollbarGutter: "both-edges",
                  ref: (e) => {
                      e8.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, l.jsx)("div", {
                          className: e7.nd,
                          ref: s,
                          children: (0, l.jsx)(ec.xp, { containerRef: s, children: t }),
                      }),
                      (0, l.jsx)("div", { className: e7.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function e3(e) {
    let { layout: n, decoration: t } = e;
    return (0, l.jsxs)("div", {
        className: e7.LZ,
        children: [
            null != t && (0, l.jsx)(e9, { decoration: t }),
            (0, l.jsx)(e1.F, {
                forceLevel: 2,
                children: n.map((e, t) =>
                    (0, l.jsxs)(
                        r.Fragment,
                        {
                            children: [
                                (0, l.jsx)(ni, { node: e }),
                                t !== n.length - 1 && (0, l.jsx)(eM.c, { className: e7.yF }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function e4(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, i.zS)(t))
        return (0, l.jsx)(
            e2,
            {
                notice: n.notice,
                useObscuredNotice: n.useObscuredNotice,
                children: (0, l.jsx)(e3, { layout: t, decoration: n.decoration }),
            },
            n.key,
        );
    throw Error("Panels must have a list of categories");
}
var ne = t(749364);
function nn(e) {
    let { node: n } = e;
    return (0, l.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, l.jsx)(k.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: ne.D,
                children: eB.intl.string(eB.t.rPREPG),
            }),
            n.layout.map((e) => (0, l.jsx)(ni, { node: e }, e.key)),
        ],
    });
}
var nt = t(187707);
let nl = r.memo(function (e) {
    let { node: n } = e;
    return (0, l.jsx)("div", { className: nt.l, children: n.layout.map((e) => (0, l.jsx)(ni, { node: e }, e.key)) });
});
function nr(e) {
    var n;
    let { node: t } = e;
    switch (
        ((n = t.initialize),
        r.useEffect(() => {
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
            return (0, l.jsx)(e4, { node: t });
        case i.Z6.LIST:
            return (0, l.jsx)(eV, { node: t });
        case i.Z6.FIELD_SET:
            return (0, l.jsx)(eK, { node: t });
        case i.Z6.RELATED:
            return (0, l.jsx)(nn, { node: t });
        case i.Z6.CARD:
            return (0, l.jsx)(eh, { node: t });
        case i.Z6.CATEGORY:
            return (0, l.jsx)(eP, { node: t });
        case i.Z6.ACCORDION:
            return (0, l.jsx)(ej, { node: t });
        case i.Z6.SPLIT:
            return (0, l.jsx)(nl, { node: t });
        case i.Z6.TOGGLE:
            return (0, l.jsx)(et, { node: t });
        case i.Z6.STATIC:
            return (0, l.jsx)(Q, { node: t });
        case i.Z6.BUTTON:
            return (0, l.jsx)(_, { node: t });
        case i.Z6.SELECT:
            return (0, l.jsx)(q, { node: t });
        case i.Z6.RADIO:
            return (0, l.jsx)(V, { node: t });
        case i.Z6.SLIDER:
            return (0, l.jsx)(Y, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, l.jsx)(M, { node: t });
        case i.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, l.jsx)(e$, { node: t });
        case i.Z6.CUSTOM:
            return (0, l.jsx)(m, { children: (0, l.jsx)(t.Component, {}) });
    }
}
function ni(e) {
    let { node: n } = e;
    return n.type === i.Z6.PANEL
        ? (0, l.jsx)(nr, { node: n })
        : (0, l.jsx)(d, { node: n, children: (0, l.jsx)(nr, { node: n }) });
}
