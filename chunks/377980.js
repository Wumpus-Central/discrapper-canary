t.d(n, { A: () => nt });
var r = t(627968),
    l = t(64700),
    s = t(963935),
    i = t(503698),
    a = t.n(i),
    o = t(942381),
    c = t(894858),
    u = t(396535);
function d(e) {
    let { node: n, children: t } = e,
        [s, i] = l.useState(!1),
        d = l.useRef(null);
    return (
        l.useEffect(() => {
            let e = c.A.subscribe(
                (e) => e.requestFlashKey,
                (e) => {
                    e === n.key &&
                        (clearTimeout(d.current),
                        i(!0),
                        (d.current = setTimeout(() => {
                            i(!1), c.A.setState({ requestFlashKey: void 0 });
                        }, 100)));
                },
                { equalityFn: o.x, fireImmediately: !0 },
            );
            return () => {
                clearTimeout(d.current), e();
            };
        }, [n.key, n.type]),
        (0, r.jsx)("div", { tabIndex: -1, "data-nav-anchor-key": n.key, className: a()(u.k, s && u.j), children: t })
    );
}
var x = t(331322),
    j = t(899159);
function h(e) {
    let { children: n } = e;
    return (0, r.jsx)(x.B, { className: j.n, gap: 0, padding: { top: "xs", bottom: "xs" }, children: n });
}
var m = t(834730),
    f = t(452027),
    g = t(821609),
    p = t(933297),
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
    let { trailingContent: n } = e;
    return (0, r.jsx)(n.StronglyDiscouragedCustomComponent, {});
}
function N(e) {
    let { trailingContent: n } = e,
        t = n.useText();
    return (0, r.jsx)(m.E, { variant: "text-md/medium", children: t });
}
function k(e) {
    let { trailingContent: n } = e;
    switch (n.type) {
        case p._1.TEXT:
            return (0, r.jsx)(N, { trailingContent: n });
        case p._1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(T, { trailingContent: n });
    }
}
function S(e) {
    let { node: n } = e,
        {
            useLabel: t,
            useTitle: s,
            useAriaLabel: i,
            useSubtitle: a,
            useVariant: o,
            useDisabled: c,
            useLoading: u,
            useTrailingContent: d,
            onClick: j,
        } = n,
        m = E(n),
        p = u?.() ?? !1,
        [y, v] = l.useState(!1),
        b = s(),
        T = a?.(),
        N = t(),
        S = i?.(),
        C = o?.(),
        A = c?.(),
        I = d?.();
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
                    null != I && (0, r.jsx)(k, { trailingContent: I }),
                    (0, r.jsx)(g.$, {
                        onClick: () => {
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
var B = t(534514),
    _ = t(890856),
    D = t(349902);
function L(e) {
    let {
            ref: n,
            leadingElement: t,
            trailingElement: l,
            title: s,
            description: i,
            "aria-label": o,
            role: c,
            onClick: u,
            style: d,
        } = e,
        x = (0, r.jsxs)("div", {
            className: a()(D.EA, null != u && D.vk),
            ref: n,
            style: d,
            children: [
                null != t && (0, r.jsx)("div", { className: D._y, children: t }),
                (0, r.jsxs)("div", {
                    className: D.jw,
                    children: [
                        (0, r.jsx)("div", {
                            className: D.eg,
                            children: (0, r.jsx)(B.D, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                children: s,
                            }),
                        }),
                        null != i && (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                null != l && (0, r.jsx)("div", { className: D.EY, children: l }),
            ],
        });
    return null != u
        ? (0, r.jsx)(_.s, { onClick: u, "aria-label": o, buttonProps: null != c ? { role: c } : void 0, children: x })
        : x;
}
var w = t(751075);
function Z(e) {
    let { decoration: n } = e,
        t = n.useIcons();
    return null == t ? null : (0, r.jsx)(w.qP, { icons: t });
}
function P(e) {
    let { decoration: n } = e;
    if (n.type === p.wF.STACKED_ICONS) return (0, r.jsx)(Z, { decoration: n });
}
var F = t(869376);
function G(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: l, useTitle: s, useSubtitle: i } = n,
        a = l?.(),
        o = i?.(),
        { parentPanelNode: c, parentSidebarItemNode: u } = R(t),
        d = s?.(),
        x = c?.useTitle?.(),
        j = d ?? x,
        h = E(n);
    if (null == c || null == j) return null;
    let m = null != u ? u.icon : void 0;
    return (0, r.jsx)(L, {
        role: "link",
        "aria-label": x,
        title: j,
        description: o,
        leadingElement: null != m && (0, r.jsx)(I.A, { Icon: m }),
        trailingElement: (0, r.jsxs)("div", {
            className: F.M,
            children: [null != a && (0, r.jsx)(P, { decoration: a }), (0, r.jsx)(C.u, {})],
        }),
        onClick: () => {
            A.A.navigate(t, { animateSidebarScroll: !1 }), h();
        },
    });
}
var K = t(773812);
t(321073);
var M = t(558845);
function z(e) {
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
            useTitle: s,
            useSubtitle: i,
            useDisabled: a,
            useOptions: o,
            usePersistentBadge: c,
            getDismissibleBadges: u,
            useHelperText: d,
        } = n,
        x = s(),
        j = i?.(),
        m = t(),
        f = o(),
        g = z({ persistentBadge: c?.(), dismissibleBadges: u?.() }),
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
var U = t(691885);
function X(e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubtitle: s,
            useValue: i,
            setValue: a,
            useOptions: o,
            useDisabled: c,
            clearable: u,
            closeOnSelect: d,
            wrapTags: x,
            selectionMode: j,
            usePersistentBadge: m,
            getDismissibleBadges: f,
        } = n,
        g = t(),
        p = s?.(),
        y = i(),
        v = o(),
        b = c?.(),
        T = z({ persistentBadge: m?.(), dismissibleBadges: f?.() }),
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
        children: (0, r.jsx)(U.l, {
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
var q = t(106236);
function W(e) {
    let { node: n } = e,
        {
            setValue: t,
            getInitialValue: s,
            minValue: i,
            maxValue: a,
            useDefaultValue: o,
            useTitle: c,
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
        [N] = l.useState(() => s()),
        k = x?.(),
        S = c(),
        C = u?.(),
        A = d?.(),
        I = o?.(),
        O = z({ persistentBadge: v?.(), dismissibleBadges: b?.() }),
        R = T?.(),
        B = E(n);
    return (0, r.jsx)(h, {
        children: (0, r.jsx)(q.A, {
            label: S,
            description: C,
            disabled: A,
            initialValue: N,
            value: k,
            minValue: i,
            maxValue: a,
            defaultValue: I,
            onValueRender: j,
            asValueChanges: m,
            onValueChange: (e) => {
                B(), t?.(e);
            },
            orientation: "horizontal",
            markers: f,
            onMarkerRender: g,
            stickToMarkers: p,
            layout: y,
            badge: O,
            helperText: R,
        }),
    });
}
function Y(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l } = n,
        s = t(),
        i = l?.();
    return (0, r.jsx)(L, { title: s, description: i });
}
var H = t(243721),
    $ = t(512950);
function J(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: l,
            useTitle: s,
            useSubtitle: i,
            useDisabled: a,
            useDisabledMessage: o,
            usePersistentBadge: c,
            hasIcon: u,
            getDismissibleBadges: d,
        } = n,
        x = s(),
        j = i?.(),
        m = t(),
        f = a?.() ?? !1,
        g = o?.(),
        p = z({ persistentBadge: c?.(), dismissibleBadges: d?.() }),
        y = E(n);
    return (0, r.jsxs)(h, {
        children: [
            (0, r.jsx)(H.d, {
                label: x,
                description: j,
                badge: p,
                checked: m,
                hasIcon: u,
                onChange: (e) => {
                    y(), l(e);
                },
                disabled: f,
            }),
            f && null != g ? (0, r.jsx)($.p, { messageType: $.Y.WARNING, children: g }) : null,
        ],
    });
}
var Q = t(735438),
    ee = t(770178),
    en = t(353068),
    et = t(650682),
    er = t(138017),
    el = t(661531),
    es = t(187322),
    ei = t(523880);
function ea(e) {
    let {
            ref: n,
            title: t,
            collapsedSubtitle: s,
            isExpanded: i,
            onExpandedChange: o,
            children: c,
            animate: u = !0,
        } = e,
        d = l.useRef(null),
        [j, h] = l.useState(null),
        m = i && null != j;
    return (
        l.useLayoutEffect(() => {
            null != d.current && null == j && h(d.current.clientHeight);
        }, [j]),
        (0, r.jsxs)(en.EN, {
            ref: n,
            isExpanded: i,
            onExpandedChange: o,
            children: [
                (0, r.jsx)(L, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: m ? void 0 : s,
                    trailingElement: (0, r.jsx)(es.vN, {
                        children: (0, r.jsx)(et.$, {
                            slot: "trigger",
                            className: ei.bW,
                            children: (0, r.jsx)(er.j, {
                                className: a()(ei.Kk, { [ei.kX]: !i }),
                                color: el.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => o(!i),
                }),
                (0, r.jsx)(en.kS, {
                    className: a()(ei.nd, { [ei.t5]: !u }),
                    children: (0, r.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: c }),
                }),
            ],
        })
    );
}
function eo(e) {
    return c.A.getField("requestAccordionOpenKey") === e.key;
}
let ec = l.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, layout: s, useCollapsedSubtitle: i } = n,
        [a, o] = l.useState(!0),
        [u, d] = l.useState(() => eo(n)),
        x = l.useRef(u),
        j = l.useRef(eo(n) ? "navigation" : null);
    l.useEffect(
        () =>
            c.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (x.current ? A.A.notifyAccordionExpanded(n.key) : ((j.current = "navigation"), o(!1), d(!0)));
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
                            o(!0), A.A.notifyAccordionExpanded(n.key);
                            break;
                        case "user":
                            A.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [u, n.key],
        ),
        m = l.useMemo(() => (0, Q.debounce)(h, 50), [h]),
        f = (0, ee.w)(m),
        g = t?.(u),
        p = i?.(),
        y = E(n);
    return (0, r.jsx)(ea, {
        ref: f,
        title: g,
        collapsedSubtitle: p,
        isExpanded: u,
        onExpandedChange: (e) => {
            (j.current = "user"), y(), d(e);
        },
        animate: a,
        children: s.map((e) => (0, r.jsx)(nt, { node: e }, e.key)),
    });
});
var eu = t(215400);
function ed(e) {
    let { node: n } = e,
        t = n.layout.find((e) => e.key === n.headerSettingKey),
        l = n.layout.filter((e) => e.key !== n.headerSettingKey),
        s = l.length > 0;
    return (0, r.jsxs)("div", {
        className: eu.Nr,
        children: [
            null != t &&
                (0, r.jsx)("div", { className: a()(eu.MY, { [eu.Q2]: !s }), children: (0, r.jsx)(nt, { node: t }) }),
            s && (0, r.jsx)("div", { className: eu.zI, children: l.map((e) => (0, r.jsx)(nt, { node: e }, e.key)) }),
        ],
    });
}
var ex = t(215566),
    ej = t(885574),
    eh = t(43105),
    em = t(939249);
function ef(e) {
    let { decoration: n } = e,
        t = l.useRef(null),
        {
            isOpen: s,
            scheduleOpen: i,
            scheduleClose: a,
            close: o,
            popoverRef: c,
        } = (function () {
            let [e, n] = l.useState(!1),
                [t, r] = l.useState(null),
                s = l.useRef(null),
                i = l.useRef(null),
                a = l.useCallback((e) => {
                    r(e);
                }, []),
                o = l.useCallback(() => {
                    clearTimeout(i.current),
                        (i.current = null),
                        null == s.current &&
                            (s.current = setTimeout(() => {
                                (s.current = null), n(!0);
                            }, 250));
                }, []),
                c = l.useCallback(() => {
                    clearTimeout(s.current),
                        (s.current = null),
                        null == i.current &&
                            (i.current = setTimeout(() => {
                                (i.current = null), n(!1);
                            }, 150));
                }, []),
                u = l.useCallback(() => {
                    clearTimeout(s.current), (s.current = null), clearTimeout(i.current), (i.current = null), n(!1);
                }, []);
            return (
                l.useEffect(
                    () => () => {
                        clearTimeout(s.current), clearTimeout(i.current);
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
        h = l.useMemo(() => x(o), [x, o]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(em.D, {
                tag: "span",
                innerRef: t,
                "aria-label": u,
                onMouseEnter: i,
                onMouseLeave: a,
                onFocus: i,
                onBlur: a,
                children: (0, r.jsx)(ej.m, { size: "xs", color: "currentColor" }),
            }),
            (0, r.jsx)(eh.A, {
                ...j,
                actions: h,
                targetElementRef: t,
                popoverRef: c,
                shouldShow: s,
                onRequestClose: o,
                scrollBehavior: "close",
            }),
        ],
    });
}
function eg(e) {
    let { decoration: n } = e;
    if (n.type === p.p3.INFO_POPOVER) return (0, r.jsx)(ef, { decoration: n });
}
function ep(e) {
    let { decoration: n } = e,
        { type: t, id: l, ...s } = n;
    return (0, r.jsx)(g.$, { variant: "secondary", ...s });
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
                case p.UV.BUTTON:
                    return (0, r.jsx)(ep, { decoration: e }, e.id);
                case p.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, r.jsx)(ey, { decoration: e }, e.id);
            }
        }),
    });
}
function eb(e) {
    let { decoration: n } = e,
        t = n.useIcons();
    return null == t ? null : (0, r.jsx)(w.qP, { icons: t });
}
function eE(e) {
    let { decoration: n } = e;
    if (null == n) return null;
    switch (n.type) {
        case p.WX.BUTTON_GROUP:
            return (0, r.jsx)(ev, { decoration: n });
        case p.WX.STACKED_ICONS:
            return (0, r.jsx)(eb, { decoration: n });
    }
}
function eT(e) {
    let { title: n, subtitle: t, subtitleDecoration: l, decoration: s, persistentBadge: i } = e;
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
                            null != i && (0, r.jsx)(ex.A, { badge: i }),
                        ],
                    }),
                    null != t &&
                        (0, r.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                                null != l && (0, r.jsx)(eg, { decoration: l }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(eE, { decoration: s }),
        ],
    });
}
var eN = t(683071),
    ek = t(964486),
    eS = t(959562);
function eC(e) {
    let { button: n } = e,
        [t, s] = l.useState(!1),
        i = n.useText(),
        a = async () => {
            s(!0);
            try {
                await n.onClick();
            } finally {
                s(!1);
            }
        };
    return (0, r.jsx)(g.$, {
        variant: n.variant ?? "secondary",
        size: n.size,
        text: i,
        onClick: a,
        loading: t,
        disabled: t,
    });
}
function eA(e) {
    let { notice: n } = e,
        { noticeType: t, useTitle: l, useText: s, button: i, iconAlign: a } = n,
        o = l?.(),
        c = s();
    (0, ek.Ay)(() => {
        n.trackView?.();
    });
    let u = (0, r.jsxs)(x.B, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != o && (0, r.jsx)(B.D, { variant: "heading-md/medium", children: o }),
            (0, r.jsx)("span", { children: c }),
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
            children: [u, null != i && (0, r.jsx)(eC, { button: i })],
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
        case p.lT.INLINE_NOTICE:
            return (0, r.jsx)(eA, { notice: n });
        case p.lT.STRONGLY_DISCOURAGED_CUSTOM:
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
            useSubtitle: s,
            layout: i,
            useInlineNotice: a,
            useHeaderDecoration: o,
            useSubtitleDecoration: c,
            usePersistentBadge: u,
        } = n,
        d = t?.(),
        j = s?.(),
        h = a?.(),
        m = o?.(),
        f = c?.(),
        g = null != t || null != l,
        p = u?.();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != d &&
                (0, r.jsx)(eT, { title: d, subtitle: j, subtitleDecoration: f, decoration: m, persistentBadge: p }),
            (0, r.jsx)("div", {
                "data-settings-category-key": g ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, r.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != h && (0, r.jsx)(eR, { notice: h }),
                    i.map((e) => (0, r.jsx)(nt, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
var e_ = t(140735),
    eD = t(681310);
function eL(e) {
    let { title: n, subtitle: t, isHiddenVisually: l } = e;
    return null == n || "" === n
        ? null
        : l
          ? (0, r.jsx)(e_.A, { tag: "legend", children: n })
          : (0, r.jsx)(m.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eD.D, { [eD.h]: null != t && "" !== t }),
                children: n,
            });
}
let ew = l.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: s, layout: i, variant: a = "default", isTitleHiddenVisually: o } = n,
        c = t(),
        u = s?.(),
        d = l.useId(),
        j = null != c && "" !== c,
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
            (0, r.jsx)(eL, { title: c, subtitle: u, isHiddenVisually: o }),
            h ? (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", id: d, children: u }) : null,
            (0, r.jsx)(x.B, {
                gap: f,
                padding: { top: j && !o ? 16 : 0 },
                children: i.map((e) => (0, r.jsx)(nt, { node: e }, e.key)),
            }),
        ],
    });
});
var eZ = t(404778),
    eP = t(375708),
    eF = t(339102);
function eG(e) {
    let n,
        { node: t } = e,
        [s, i] = l.useState(!1),
        { layout: a, collapseAfter: o, useCollapsibleTitle: c, useCollapsedSubtitle: u } = t,
        d = null != o ? a.slice(0, o) : a,
        j = null != o ? a.slice(o) : [],
        h =
            c?.(s, j.length) ??
            ((n = j.length),
            s
                ? eP.intl.formatToPlainString(eP.t["3SHL+d"], { count: n })
                : eP.intl.formatToPlainString(eP.t["8JRFyZ"], { count: n })),
        m = u?.();
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
                            title: h,
                            collapsedSubtitle: m,
                            isExpanded: s,
                            onExpandedChange: i,
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
    if (n.type === p.Xy.ICON)
        return (0, r.jsx)(I.A, { Icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function eM(e) {
    let { decoration: n } = e,
        t = n.useText();
    return null == t ? null : (0, r.jsx)(m.E, { variant: "text-md/medium", children: t });
}
function ez(e) {
    let { decoration: n } = e;
    if (n.type === p.xn.TEXT) return (0, r.jsx)(eM, { decoration: n });
}
function eV(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l, useLeadingDecoration: s, useTrailingDecoration: i } = n,
        a = t?.(),
        o = l?.(),
        c = s?.(),
        u = i?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = R(d),
        h = j?.useTitle?.(),
        m = a ?? h;
    return null == j || null == m
        ? null
        : (0, r.jsx)(L, {
              role: "link",
              "aria-label": h,
              title: m,
              leadingElement: null != c ? (0, r.jsx)(eK, { decoration: c }) : null,
              description: o,
              trailingElement: (0, r.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, r.jsx)(ez, { decoration: u }), (0, r.jsx)(C.u, {})],
              }),
              onClick: () => A.A.navigate(d),
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
    eQ = t(707182);
function e0(e) {
    let { notice: n, children: t } = e,
        { showNotice: s, handleStoreUpdate: i } = (0, e$.L_)(),
        a = n?.stores;
    l.useEffect(() => {
        if (null != a) {
            let e = new eU.ru(a, () => {
                i(a);
            });
            return (
                e.attach("SettingPanelNotice"),
                i(a),
                () => {
                    e.detach();
                }
            );
        }
    }, [a, i]);
    let o = l.useMemo(() => {
        if (null == n || !s) return null;
        let { element: e } = n;
        return (0, r.jsx)(eq.F, { className: eQ.lm, children: (0, r.jsx)(e, {}) });
    }, [n, s]);
    return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(eX.F, { component: "div", children: o })] });
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
    let { notice: n, children: t, useObscuredNotice: s } = e,
        i = l.useRef(null),
        a = s?.();
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
                          ref: i,
                          children: (0, r.jsx)(es.xp, { containerRef: i, children: t }),
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
function e3(e) {
    let { panelKey: n, layout: t, notice: s, decoration: i, useObscuredNotice: a } = e,
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
        e6,
        {
            notice: s,
            useObscuredNotice: a,
            children: [
                (0, r.jsx)(eH.V, {
                    className: eQ.$H,
                    selectedItem: o,
                    onItemSelect: (e) => {
                        A.A.navigate(e, {
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
                (0, r.jsx)(eH.V.Panel, { id: o, children: (0, r.jsx)(e8, { layout: u.layout, decoration: i }) }),
            ],
        },
        n,
    );
}
function e5(e) {
    let { panelKey: n, notice: t, decoration: l, layout: s, useObscuredNotice: i } = e;
    return (0, r.jsx)(
        e6,
        { notice: t, useObscuredNotice: i, children: (0, r.jsx)(e8, { layout: s, decoration: l }) },
        n,
    );
}
function e2(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, s.zY)(t))
        return (0, r.jsx)(e3, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    if ((0, s.Iu)(t))
        return (0, r.jsx)(e5, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
var e7 = t(722899);
function e9(e) {
    let { node: n } = e;
    return (0, r.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, r.jsx)(B.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: e7.D,
                children: eP.intl.string(eP.t.rPREPG),
            }),
            n.layout.map((e) => (0, r.jsx)(nt, { node: e }, e.key)),
        ],
    });
}
var e4 = t(626396);
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
        case s.Z6.ROOT:
        case s.Z6.SECTION:
        case s.Z6.SIDEBAR_ITEM:
        case s.Z6.TAB_ITEM:
            throw Error(`${t.type} nodes should never be rendered directly`);
        case s.Z6.PANEL:
            return (0, r.jsx)(e2, { node: t });
        case s.Z6.LIST:
            return (0, r.jsx)(eG, { node: t });
        case s.Z6.FIELD_SET:
            return (0, r.jsx)(ew, { node: t });
        case s.Z6.RELATED:
            return (0, r.jsx)(e9, { node: t });
        case s.Z6.CARD:
            return (0, r.jsx)(ed, { node: t });
        case s.Z6.CATEGORY:
            return (0, r.jsx)(eB, { node: t });
        case s.Z6.ACCORDION:
            return (0, r.jsx)(ec, { node: t });
        case s.Z6.SPLIT:
            return (0, r.jsx)(ne, { node: t });
        case s.Z6.TOGGLE:
            return (0, r.jsx)(J, { node: t });
        case s.Z6.STATIC:
            return (0, r.jsx)(Y, { node: t });
        case s.Z6.BUTTON:
            return (0, r.jsx)(S, { node: t });
        case s.Z6.SELECT:
            return (0, r.jsx)(X, { node: t });
        case s.Z6.RADIO:
            return (0, r.jsx)(V, { node: t });
        case s.Z6.SLIDER:
            return (0, r.jsx)(W, { node: t });
        case s.Z6.NAVIGATOR:
            return (0, r.jsx)(G, { node: t });
        case s.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, r.jsx)(eV, { node: t });
        case s.Z6.CUSTOM:
            return (0, r.jsx)(h, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function nt(e) {
    let { node: n } = e;
    return n.type === s.Z6.PANEL
        ? (0, r.jsx)(nn, { node: n })
        : (0, r.jsx)(d, { node: n, children: (0, r.jsx)(nn, { node: n }) });
}
