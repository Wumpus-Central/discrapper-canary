t.d(n, { A: () => nr });
var r = t(477900),
    l = t(582128),
    i = t(963935),
    s = t(503698),
    a = t.n(s),
    c = t(462180),
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
function h(e) {
    let { children: n } = e;
    return (0, r.jsx)(x.B, { className: j.n, gap: 0, padding: { top: "xs", bottom: "xs" }, children: n });
}
var m = t(834730),
    f = t(452027),
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
            useVariant: c,
            useDisabled: o,
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
        C = c?.(),
        A = o?.(),
        O = d?.();
    return (0, r.jsx)(h, {
        children: (0, r.jsx)(f.D, {
            label: b,
            description: T,
            disabled: A,
            layout: "horizontal",
            children: (0, r.jsxs)(x.B, {
                direction: "horizontal",
                align: "center",
                justify: "end",
                gap: "md",
                children: [
                    null != O && (0, r.jsx)(k, { decoration: O }),
                    (0, r.jsx)(g.$, {
                        onClick: function () {
                            m();
                            let e = j();
                            e instanceof Promise && (v(!0), e.finally(() => v(!1)));
                        },
                        text: N,
                        "aria-label": S,
                        variant: C,
                        disabled: A,
                        loading: y || p,
                    }),
                ],
            }),
        }),
    });
}
var C = t(881636),
    A = t(272053),
    O = t(176524),
    R = t(199966);
function I(e) {
    let { accessibleDirectory: n } = (0, R._)(),
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
            badge: c,
            "aria-label": o,
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
                                null != c && (0, r.jsx)(L.E, { type: c, variant: "brand" }),
                            ],
                        }),
                        null != s && (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                null != l && (0, r.jsx)("div", { className: D.EY, children: l }),
            ],
        });
    return null != d
        ? (0, r.jsx)(_.s, { onClick: d, "aria-label": o, buttonProps: null != u ? { role: u } : void 0, children: j })
        : j;
}
var G = t(751075);
function Z(e) {
    let { decoration: n } = e;
    return null == n.icons ? null : (0, r.jsx)(G.qP, { icons: n.icons });
}
function P(e) {
    let { decoration: n } = e;
    if (n.type === p.wF.STACKED_ICONS) return (0, r.jsx)(Z, { decoration: n });
}
var F = t(390936);
function z(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: l, useTitle: i, useSubtitle: s } = n,
        a = l?.(),
        c = s?.(),
        { parentPanelNode: o, parentSidebarItemNode: u } = I(t),
        d = i?.(),
        x = o?.useTitle?.(),
        j = d ?? x,
        h = E(n);
    if (null == o || null == j) return null;
    let m = null != u ? u.icon : void 0;
    return (0, r.jsx)(w, {
        role: "link",
        "aria-label": x,
        title: j,
        description: c,
        leadingElement: null != m && (0, r.jsx)(O.A, { icon: m }),
        trailingElement: (0, r.jsxs)("div", {
            className: F.M,
            children: [null != a && (0, r.jsx)(P, { decoration: a }), (0, r.jsx)(C.u, {})],
        }),
        onClick: function () {
            A.A.navigate(t, { animateSidebarScroll: !1 }), h();
        },
    });
}
var K = t(144228);
t(321073);
var M = t(558845);
function U(e) {
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
        m = t(),
        f = c(),
        g = U({ persistentBadge: o?.(), dismissibleBadges: u?.() }),
        p = a?.(),
        y = E(n),
        v = d?.();
    return (0, r.jsx)(h, {
        children: (0, r.jsx)(K.z, {
            label: x,
            description: j,
            options: f,
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
            useOptions: c,
            useDisabled: o,
            clearable: u,
            closeOnSelect: d,
            wrapTags: x,
            selectionMode: j,
            usePersistentBadge: m,
            getDismissibleBadges: f,
        } = n,
        g = t(),
        p = i?.(),
        y = s(),
        v = c(),
        b = o?.(),
        T = U({ persistentBadge: m?.(), dismissibleBadges: f?.() }),
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
    return (0, r.jsx)(h, {
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
            useDefaultValue: c,
            useTitle: o,
            useSubtitle: u,
            useDisabled: d,
            useExternalValue: x,
            onValueRender: j,
            asValueChanges: m,
            markers: f,
            onMarkerRender: g,
            stickToMarkers: p,
            fieldLayout: y,
            usePersistentBadge: v,
            getDismissibleBadges: b,
            useHelperText: T,
        } = n,
        [N] = l.useState(() => i()),
        k = x?.(),
        S = o(),
        C = u?.(),
        A = d?.(),
        O = c?.(),
        R = U({ persistentBadge: v?.(), dismissibleBadges: b?.() }),
        I = T?.(),
        B = E(n);
    return (0, r.jsx)(h, {
        children: (0, r.jsx)(W.A, {
            label: S,
            description: C,
            disabled: A,
            initialValue: N,
            value: k,
            minValue: s,
            maxValue: a,
            defaultValue: O,
            onValueRender: j,
            asValueChanges: m,
            onValueChange: function (e) {
                B(), t?.(e);
            },
            orientation: "horizontal",
            markers: f,
            onMarkerRender: g,
            stickToMarkers: p,
            layout: y,
            badge: R,
            helperText: I,
        }),
    });
}
function $(e) {
    let { decoration: n } = e;
    if (n.type === p.$d.ICON)
        return (0, r.jsx)(O.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
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
        c = t(),
        o = l?.(),
        u = i?.(),
        d = s?.(),
        x = U({ persistentBadge: void 0, dismissibleBadges: a?.() });
    return (0, r.jsx)(w, {
        title: c,
        badge: x,
        description: o,
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
            useDisabledMessage: c,
            usePersistentBadge: o,
            hasIcon: u,
            getDismissibleBadges: d,
        } = n,
        x = i(),
        j = s?.(),
        m = t(),
        f = a?.() ?? !1,
        g = c?.(),
        p = U({ persistentBadge: o?.(), dismissibleBadges: d?.() }),
        y = E(n);
    return (0, r.jsxs)(h, {
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
                disabled: f,
            }),
            f && null != g ? (0, r.jsx)(en.p, { messageType: en.Y.WARNING, children: g }) : null,
        ],
    });
}
var er = t(435558),
    el = t(770178),
    ei = t(875031),
    es = t(538790),
    ea = t(138017),
    ec = t(661531),
    eo = t(259678),
    eu = t(98640);
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
        [j, h] = l.useState(null),
        m = s && null != j;
    return (
        l.useLayoutEffect(() => {
            null != d.current && null == j && h(d.current.clientHeight);
        }, [j]),
        (0, r.jsxs)(ei.EN, {
            ref: n,
            isExpanded: s,
            onExpandedChange: c,
            children: [
                (0, r.jsx)(w, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: m ? void 0 : i,
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
    let { node: n } = e,
        { useTitle: t, layout: i, useCollapsedSubtitle: s } = n,
        [a, c] = l.useState(!0),
        [u, d] = l.useState(() => ex(n)),
        x = l.useRef(u),
        j = l.useRef(ex(n) ? "navigation" : null);
    l.useEffect(
        () =>
            o.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (x.current ? A.A.notifyAccordionExpanded(n.key) : ((j.current = "navigation"), c(!1), d(!0)));
                },
                { equalityFn: (e, n) => e === n, fireImmediately: !0 },
            ),
        [n.key, u],
    );
    let h = l.useCallback(
            (e) => {
                if (null != e.target && u !== x.current && ((x.current = u), x.current))
                    switch (j.current) {
                        case "navigation":
                            c(!0), A.A.notifyAccordionExpanded(n.key);
                            break;
                        case "user":
                            A.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [u, n.key],
        ),
        m = l.useMemo(() => (0, er.debounce)(h, 50), [h]),
        f = (0, el.w)(m),
        g = t?.(u),
        p = s?.(),
        y = E(n);
    return (0, r.jsx)(ed, {
        ref: f,
        title: g,
        collapsedSubtitle: p,
        isExpanded: u,
        onExpandedChange: function (e) {
            (j.current = "user"), y(), d(e);
        },
        animate: a,
        children: i.map((e) => (0, r.jsx)(nr, { node: e }, e.key)),
    });
});
var eh = t(575376);
function em(e) {
    let { node: n } = e,
        t = n.layout.find((e) => e.key === n.headerSettingKey),
        l = n.layout.filter((e) => e.key !== n.headerSettingKey),
        i = l.length > 0;
    return (0, r.jsxs)("div", {
        className: eh.Nr,
        children: [
            null != t &&
                (0, r.jsx)("div", { className: a()(eh.MY, { [eh.Q2]: !i }), children: (0, r.jsx)(nr, { node: t }) }),
            i && (0, r.jsx)("div", { className: eh.zI, children: l.map((e) => (0, r.jsx)(nr, { node: e }, e.key)) }),
        ],
    });
}
var ef = t(215566),
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
        h = l.useMemo(() => x(c), [x, c]);
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
                actions: h,
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
    return null == n.icons ? null : (0, r.jsx)(G.qP, { icons: n.icons });
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
                            (0, r.jsx)(B.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != s && (0, r.jsx)(ef.A, { badge: s }),
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
var eA = t(683071),
    eO = t(964486),
    eR = t(35218);
function eI(e) {
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
    (0, eO.Ay)(() => {
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
    return (0, r.jsx)(eA.w, {
        type: t,
        iconAlign: a,
        children: (0, r.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [c, null != s && (0, r.jsx)(eI, { button: s })],
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
    return (0, r.jsx)("div", { className: eR.E, children: (0, r.jsx)(e_, { notice: n }) });
}
let ew = l.memo(function (e) {
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
        h = a?.(),
        m = c?.(),
        f = o?.(),
        g = null != t || null != l,
        p = u?.();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != d &&
                (0, r.jsx)(eC, { title: d, subtitle: j, subtitleDecoration: f, decoration: m, persistentBadge: p }),
            (0, r.jsx)("div", {
                "data-settings-category-key": g ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, r.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != h && (0, r.jsx)(eD, { notice: h }),
                    s.map((e) => (0, r.jsx)(nr, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
var eG = t(140735),
    eZ = t(597894);
function eP(e) {
    let { title: n, subtitle: t, isHiddenVisually: l } = e;
    return null == n || "" === n
        ? null
        : l
          ? (0, r.jsx)(eG.A, { tag: "legend", children: n })
          : (0, r.jsx)(m.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eZ.D, { [eZ.h]: null != t && "" !== t }),
                children: n,
            });
}
let eF = l.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: i, layout: s, variant: a = "default", isTitleHiddenVisually: c } = n,
        o = t(),
        u = i?.(),
        d = l.useId(),
        j = null != o && "" !== o,
        h = null != u && "" !== u,
        f = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(a);
    return (0, r.jsxs)("fieldset", {
        "aria-describedby": h ? d : void 0,
        children: [
            (0, r.jsx)(eP, { title: o, subtitle: u, isHiddenVisually: c }),
            h ? (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", id: d, children: u }) : null,
            (0, r.jsx)(x.B, {
                gap: f,
                padding: { top: j && !c ? 16 : 0 },
                children: s.map((e) => (0, r.jsx)(nr, { node: e }, e.key)),
            }),
        ],
    });
});
var ez = t(404778),
    eK = t(375708),
    eM = t(733062);
function eU(e) {
    var n;
    let { node: t } = e,
        [i, s] = l.useState(!1),
        { layout: a, collapseAfter: c, useCollapsibleTitle: o, useCollapsedSubtitle: u } = t,
        d = null != c ? a.slice(0, c) : a,
        j = null != c ? a.slice(c) : [],
        h =
            o?.(i, j.length) ??
            ((n = j.length),
            i
                ? eK.intl.formatToPlainString(eK.t["3SHL+d"], { count: n })
                : eK.intl.formatToPlainString(eK.t["8JRFyZ"], { count: n })),
        m = u?.();
    return (0, r.jsxs)(x.B, {
        gap: 8,
        children: [
            d.map((e, n) =>
                (0, r.jsxs)(
                    l.Fragment,
                    { children: [(0, r.jsx)(nr, { node: e }), n !== d.length - 1 && (0, r.jsx)(ez.c, {})] },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, r.jsxs)("div", {
                    className: eM.CT,
                    children: [
                        (0, r.jsx)(ez.c, { className: eM.mn }),
                        (0, r.jsx)(ed, {
                            title: h,
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
                                                (0, r.jsx)(nr, { node: e }),
                                                n !== j.length - 1 && (0, r.jsx)(ez.c, {}),
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
function eV(e) {
    let { decoration: n } = e;
    if (n.type === p.Xy.ICON)
        return (0, r.jsx)(O.A, { icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
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
        c = l?.(),
        o = i?.(),
        u = s?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = I(d),
        h = j?.useTitle?.(),
        m = a ?? h;
    return null == j || null == m
        ? null
        : (0, r.jsx)(w, {
              role: "link",
              "aria-label": h,
              title: m,
              leadingElement: null != o ? (0, r.jsx)(eV, { decoration: o }) : null,
              description: c,
              trailingElement: (0, r.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, r.jsx)(eq, { decoration: u }), (0, r.jsx)(C.u, {})],
              }),
              onClick: () => A.A.navigate(d),
          });
}
var eY = t(17928),
    e$ = t(868285),
    eH = t(871682),
    eJ = t(689175),
    eQ = t(707554),
    e0 = t(823092),
    e1 = t(397274),
    e8 = t(439750);
function e6(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, e0.L_)(),
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
    let c = l.useMemo(() => {
        if (null == n || !i) return null;
        let { element: e } = n;
        return (0, r.jsx)(eH.F, { className: e8.lm, children: (0, r.jsx)(e, {}) });
    }, [n, i]);
    return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(e$.F, { component: "div", children: c })] });
}
function e5(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, r.jsx)("div", {
        className: a()(e8.oK, { [e8.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, r.jsx)(t, {}),
    });
}
function e7(e) {
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = l.useRef(null),
        a = i?.();
    return null != a
        ? (0, r.jsx)(a, {})
        : (0, r.jsx)(e6, {
              notice: n,
              children: (0, r.jsxs)(eJ.Gt, {
                  className: e8.XG,
                  scrollbarGutter: "both-edges",
                  ref: (e) => {
                      e1.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: e8.nd,
                          ref: s,
                          children: (0, r.jsx)(eo.xp, { containerRef: s, children: t }),
                      }),
                      (0, r.jsx)("div", { className: e8.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function e3(e) {
    let { layout: n, decoration: t } = e;
    return (0, r.jsxs)("div", {
        className: e8.LZ,
        children: [
            null != t && (0, r.jsx)(e5, { decoration: t }),
            (0, r.jsx)(eQ.F, {
                forceLevel: 2,
                children: n.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(nr, { node: e }),
                                t !== n.length - 1 && (0, r.jsx)(ez.c, { className: e8.yF }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function e2(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, i.zS)(t))
        return (0, r.jsx)(
            e7,
            {
                notice: n.notice,
                useObscuredNotice: n.useObscuredNotice,
                children: (0, r.jsx)(e3, { layout: t, decoration: n.decoration }),
            },
            n.key,
        );
    throw Error("Panels must have a list of categories");
}
var e9 = t(137339);
function e4(e) {
    let { node: n } = e;
    return (0, r.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, r.jsx)(B.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: e9.D,
                children: eK.intl.string(eK.t.rPREPG),
            }),
            n.layout.map((e) => (0, r.jsx)(nr, { node: e }, e.key)),
        ],
    });
}
var ne = t(960020);
let nn = l.memo(function (e) {
    let { node: n } = e;
    return (0, r.jsx)("div", { className: ne.l, children: n.layout.map((e) => (0, r.jsx)(nr, { node: e }, e.key)) });
});
function nt(e) {
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
            return (0, r.jsx)(e2, { node: t });
        case i.Z6.LIST:
            return (0, r.jsx)(eU, { node: t });
        case i.Z6.FIELD_SET:
            return (0, r.jsx)(eF, { node: t });
        case i.Z6.RELATED:
            return (0, r.jsx)(e4, { node: t });
        case i.Z6.CARD:
            return (0, r.jsx)(em, { node: t });
        case i.Z6.CATEGORY:
            return (0, r.jsx)(ew, { node: t });
        case i.Z6.ACCORDION:
            return (0, r.jsx)(ej, { node: t });
        case i.Z6.SPLIT:
            return (0, r.jsx)(nn, { node: t });
        case i.Z6.TOGGLE:
            return (0, r.jsx)(et, { node: t });
        case i.Z6.STATIC:
            return (0, r.jsx)(Q, { node: t });
        case i.Z6.BUTTON:
            return (0, r.jsx)(S, { node: t });
        case i.Z6.SELECT:
            return (0, r.jsx)(q, { node: t });
        case i.Z6.RADIO:
            return (0, r.jsx)(V, { node: t });
        case i.Z6.SLIDER:
            return (0, r.jsx)(Y, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, r.jsx)(z, { node: t });
        case i.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, r.jsx)(eW, { node: t });
        case i.Z6.CUSTOM:
            return (0, r.jsx)(h, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function nr(e) {
    let { node: n } = e;
    return n.type === i.Z6.PANEL
        ? (0, r.jsx)(nt, { node: n })
        : (0, r.jsx)(d, { node: n, children: (0, r.jsx)(nt, { node: n }) });
}
