t.d(n, { A: () => nn });
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
    p = t(821609),
    g = t(933297),
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
function k(e) {
    let { trailingContent: n } = e;
    return (0, r.jsx)(n.StronglyDiscouragedCustomComponent, {});
}
function N(e) {
    let { trailingContent: n } = e,
        t = n.useText();
    return (0, r.jsx)(m.E, { variant: "text-md/medium", children: t });
}
function T(e) {
    let { trailingContent: n } = e;
    switch (n.type) {
        case g._1.TEXT:
            return (0, r.jsx)(N, { trailingContent: n });
        case g._1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(k, { trailingContent: n });
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
        g = u?.() ?? !1,
        [y, v] = l.useState(!1),
        b = s(),
        k = a?.(),
        N = t(),
        S = i?.(),
        C = o?.(),
        A = c?.(),
        I = d?.();
    return (0, r.jsx)(h, {
        children: (0, r.jsx)(f.D, {
            label: b,
            description: k,
            disabled: A,
            layout: "horizontal",
            children: (0, r.jsxs)(x.B, {
                direction: "horizontal",
                align: "center",
                justify: "end",
                gap: "md",
                children: [
                    null != I && (0, r.jsx)(T, { trailingContent: I }),
                    (0, r.jsx)(p.$, {
                        onClick: () => {
                            m();
                            let e = j();
                            e instanceof Promise && (v(!0), e.finally(() => v(!1)));
                        },
                        text: N,
                        "aria-label": S,
                        variant: C,
                        disabled: A,
                        loading: y || g,
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
    L = t(890856),
    w = t(349902);
function D(e) {
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
            className: a()(w.EA, null != u && w.vk),
            ref: n,
            style: d,
            children: [
                null != t && (0, r.jsx)("div", { className: w._y, children: t }),
                (0, r.jsxs)("div", {
                    className: w.jw,
                    children: [
                        (0, r.jsx)("div", {
                            className: w.eg,
                            children: (0, r.jsx)(B.D, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                children: s,
                            }),
                        }),
                        null != i && (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                null != l && (0, r.jsx)("div", { className: w.EY, children: l }),
            ],
        });
    return null != u
        ? (0, r.jsx)(L.s, { onClick: u, "aria-label": o, buttonProps: null != c ? { role: c } : void 0, children: x })
        : x;
}
var _ = t(573435),
    P = t(959166);
function F(e) {
    let { sizePx: n } = e,
        t = 0.5 / n,
        l = `translate(${t}, ${t}) scale(${1 - 2 * t})`;
    return (0, r.jsx)("svg", {
        className: P.v9,
        width: n,
        height: n,
        viewBox: "0 0 1 1",
        "aria-hidden": !0,
        children: (0, r.jsx)("path", {
            d: _.Vf,
            fill: "none",
            stroke: "var(--border-subtle)",
            strokeWidth: 1 / n,
            transform: l,
        }),
    });
}
function Z(e) {
    let { icon: n, sizePx: t, positionClassName: s } = e,
        i = l.useMemo(() => ({ width: `${t}px`, height: `${t}px` }), [t]);
    switch (n.shape) {
        case g.NF.SQUIRCLE:
            return (0, r.jsxs)("div", {
                className: a()(P.Gt, s),
                style: i,
                children: [
                    (0, r.jsx)(_.Ay, {
                        mask: _.Ay.Masks.SQUIRCLE,
                        width: t,
                        height: t,
                        children: (0, r.jsx)("div", { className: P.pU, style: i, children: n.icon }),
                    }),
                    (0, r.jsx)(F, { sizePx: t }),
                ],
            });
        case g.NF.ROUNDED:
            return (0, r.jsx)("div", { className: a()(P.Gt, s, P.Nb), style: i, children: n.icon });
    }
}
function G(e) {
    let { decoration: n } = e,
        t = n.useIcons();
    if (null == t) return null;
    let { frontIcon: l, backIcon: s } = t;
    return (0, r.jsxs)("div", {
        className: P.VD,
        "aria-hidden": !0,
        children: [
            null != s && (0, r.jsx)(Z, { icon: s, sizePx: 40, positionClassName: P.j2 }),
            (0, r.jsx)(Z, { icon: l, sizePx: 48, positionClassName: P.hU }),
        ],
    });
}
function M(e) {
    let { decoration: n } = e;
    if (n.type === g.wF.STACKED_ICONS) return (0, r.jsx)(G, { decoration: n });
}
var U = t(869376);
function V(e) {
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
    return (0, r.jsx)(D, {
        role: "link",
        "aria-label": x,
        title: j,
        description: o,
        leadingElement: null != m && (0, r.jsx)(I.A, { Icon: m }),
        trailingElement: (0, r.jsxs)("div", {
            className: U.M,
            children: [null != a && (0, r.jsx)(M, { decoration: a }), (0, r.jsx)(C.u, {})],
        }),
        onClick: () => {
            A.A.navigate(t, { animateSidebarScroll: !1 }), h();
        },
    });
}
var K = t(773812);
t(321073);
var z = t(558845);
function $(e) {
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
            if ((0, z.uW)(n)) return "new";
        })(t),
    });
}
function q(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: l,
            useTitle: s,
            useSubtitle: i,
            useOptions: a,
            usePersistentBadge: o,
            getDismissibleBadges: c,
        } = n,
        u = s(),
        d = i?.(),
        x = t(),
        j = a(),
        m = $({ persistentBadge: o?.(), dismissibleBadges: c?.() }),
        f = E(n);
    return (0, r.jsx)(h, {
        children: (0, r.jsx)(K.z, {
            label: u,
            description: d,
            options: j,
            value: x,
            badge: m,
            onChange: (e) => {
                f(), l(e);
            },
        }),
    });
}
var W = t(691885);
function X(e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubtitle: s,
            useValue: i,
            setValue: a,
            useOptions: o,
            clearable: c,
            closeOnSelect: u,
            wrapTags: d,
            selectionMode: x,
            usePersistentBadge: j,
            getDismissibleBadges: m,
        } = n,
        f = t(),
        p = s?.(),
        g = i(),
        y = o(),
        v = $({ persistentBadge: j?.(), dismissibleBadges: m?.() }),
        b = E(n),
        k = l.useMemo(() => {
            var e, n;
            return {
                selectionMode: x,
                value: g,
                onSelectionChange:
                    ((e = a),
                    (n = b),
                    (t) => {
                        n(), e(t);
                    }),
            };
        }, [x, g, a, b]);
    return (0, r.jsx)(h, {
        children: (0, r.jsx)(W.l, {
            ...k,
            label: f,
            description: p,
            options: y,
            wrapTags: d,
            closeOnSelect: u,
            clearable: c,
            layout: "horizontal-responsive",
            fullWidth: !0,
            badge: v,
        }),
    });
}
var Y = t(106236);
function H(e) {
    let { node: n } = e,
        {
            setValue: t,
            getInitialValue: s,
            minValue: i,
            maxValue: a,
            useDefaultValue: o,
            useTitle: c,
            useSubtitle: u,
            useHintText: d,
            useDisabled: x,
            useExternalValue: j,
            onValueRender: f,
            asValueChanges: p,
            markers: g,
            onMarkerRender: y,
            stickToMarkers: v,
            fieldLayout: b,
            usePersistentBadge: k,
            getDismissibleBadges: N,
        } = n,
        [T] = l.useState(() => s()),
        S = j?.(),
        C = c(),
        A = u?.(),
        I = d?.(),
        O = x?.(),
        R = o?.(),
        B = $({ persistentBadge: k?.(), dismissibleBadges: N?.() }),
        L = E(n);
    return (0, r.jsxs)(h, {
        children: [
            (0, r.jsx)(Y.A, {
                label: C,
                description: A,
                disabled: O,
                initialValue: T,
                value: S,
                minValue: i,
                maxValue: a,
                defaultValue: R,
                onValueRender: f,
                asValueChanges: p,
                onValueChange: (e) => {
                    L(), t?.(e);
                },
                orientation: "horizontal",
                markers: g,
                onMarkerRender: y,
                stickToMarkers: v,
                layout: b,
                badge: B,
            }),
            null != I && (0, r.jsx)(m.E, { variant: "text-xs/normal", color: "text-muted", children: I }),
        ],
    });
}
function Q(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: l } = n,
        s = t(),
        i = l?.();
    return (0, r.jsx)(D, { title: s, description: i });
}
var J = t(243721),
    ee = t(512950);
function en(e) {
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
        p = o?.(),
        g = $({ persistentBadge: c?.(), dismissibleBadges: d?.() }),
        y = E(n);
    return (0, r.jsxs)(h, {
        children: [
            (0, r.jsx)(J.d, {
                label: x,
                description: j,
                badge: g,
                checked: m,
                hasIcon: u,
                onChange: (e) => {
                    y(), l(e);
                },
                disabled: f,
            }),
            f && null != p ? (0, r.jsx)(ee.p, { messageType: ee.Y.WARNING, children: p }) : null,
        ],
    });
}
var et = t(735438),
    er = t(770178),
    el = t(353068),
    es = t(650682),
    ei = t(138017),
    ea = t(661531),
    eo = t(187322),
    ec = t(523880);
function eu(e) {
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
        (0, r.jsxs)(el.EN, {
            ref: n,
            isExpanded: i,
            onExpandedChange: o,
            children: [
                (0, r.jsx)(D, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: m ? void 0 : s,
                    trailingElement: (0, r.jsx)(eo.vN, {
                        children: (0, r.jsx)(es.$, {
                            slot: "trigger",
                            className: ec.bW,
                            children: (0, r.jsx)(ei.j, {
                                className: a()(ec.Kk, { [ec.kX]: !i }),
                                color: ea.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => o(!i),
                }),
                (0, r.jsx)(el.kS, {
                    className: a()(ec.nd, { [ec.t5]: !u }),
                    children: (0, r.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: c }),
                }),
            ],
        })
    );
}
function ed(e) {
    return c.A.getField("requestAccordionOpenKey") === e.key;
}
let ex = l.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, layout: s, useCollapsedSubtitle: i } = n,
        [a, o] = l.useState(!0),
        [u, d] = l.useState(() => ed(n)),
        x = l.useRef(u),
        j = l.useRef(ed(n) ? "navigation" : null);
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
        m = l.useMemo(() => (0, et.debounce)(h, 50), [h]),
        f = (0, er.w)(m),
        p = t?.(u),
        g = i?.(),
        y = E(n);
    return (0, r.jsx)(eu, {
        ref: f,
        title: p,
        collapsedSubtitle: g,
        isExpanded: u,
        onExpandedChange: (e) => {
            (j.current = "user"), y(), d(e);
        },
        animate: a,
        children: s.map((e) => (0, r.jsx)(nn, { node: e }, e.key)),
    });
});
var ej = t(885574),
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
function ep(e) {
    let { decoration: n } = e;
    if (n.type === g.p3.INFO_POPOVER) return (0, r.jsx)(ef, { decoration: n });
}
function eg(e) {
    let { decoration: n } = e,
        { type: t, id: l, ...s } = n;
    return (0, r.jsx)(p.$, { variant: "secondary", ...s });
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
    return null == n ? null : n.type === g.WX.BUTTON_GROUP ? (0, r.jsx)(ev, { decoration: n }) : void 0;
}
function eE(e) {
    let { title: n, subtitle: t, subtitleDecoration: l, decoration: s } = e;
    return (0, r.jsxs)(x.B, {
        direction: "horizontal",
        align: "center",
        gap: 16,
        padding: { bottom: "lg" },
        children: [
            (0, r.jsxs)(x.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, r.jsx)(B.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                    null != t &&
                        (0, r.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: t }),
                                null != l && (0, r.jsx)(ep, { decoration: l }),
                            ],
                        }),
                ],
            }),
            (0, r.jsx)(eb, { decoration: s }),
        ],
    });
}
var ek = t(683071),
    eN = t(964486),
    eT = t(562248);
function eS(e) {
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
    return (0, r.jsx)(p.$, { variant: "secondary", text: i, onClick: a, loading: t, disabled: t });
}
function eC(e) {
    let { notice: n } = e,
        { noticeType: t, useTitle: l, useText: s, button: i } = n,
        a = l?.(),
        o = s();
    (0, eN.Ay)(() => {
        n.trackView?.();
    });
    let c = (0, r.jsxs)(x.B, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != a && (0, r.jsx)(B.D, { variant: "heading-md/medium", children: a }),
            (0, r.jsx)("span", { children: o }),
        ],
    });
    return (0, r.jsx)(ek.w, {
        type: t,
        children: (0, r.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [c, null != i && (0, r.jsx)(eS, { button: i })],
        }),
    });
}
function eA(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, r.jsx)(t, {});
}
function eI(e) {
    let { notice: n } = e;
    switch (n.type) {
        case g.lT.INLINE_NOTICE:
            return (0, r.jsx)(eC, { notice: n });
        case g.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, r.jsx)(eA, { notice: n });
    }
}
function eO(e) {
    let { notice: n } = e;
    return (0, r.jsx)("div", { className: eT.l, children: (0, r.jsx)(eI, { notice: n }) });
}
let eR = l.memo(function (e) {
    let { node: n } = e,
        {
            useTitle: t,
            useSubnavLabel: l,
            useSubtitle: s,
            layout: i,
            useInlineNotice: a,
            useHeaderDecoration: o,
            useSubtitleDecoration: c,
        } = n,
        u = t?.(),
        d = s?.(),
        j = a?.(),
        h = o?.(),
        m = c?.(),
        f = null != t || null != l;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != u && (0, r.jsx)(eE, { title: u, subtitle: d, subtitleDecoration: m, decoration: h }),
            (0, r.jsx)("div", {
                "data-settings-category-key": f ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, r.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != j && (0, r.jsx)(eO, { notice: j }),
                    i.map((e) => (0, r.jsx)(nn, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
var eB = t(140735),
    eL = t(681310);
function ew(e) {
    let { title: n, subtitle: t, isHiddenVisually: l } = e;
    return null == n || "" === n
        ? null
        : l
          ? (0, r.jsx)(eB.A, { tag: "legend", children: n })
          : (0, r.jsx)(m.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eL.D, { [eL.h]: null != t && "" !== t }),
                children: n,
            });
}
let eD = l.memo(function (e) {
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
            (0, r.jsx)(ew, { title: c, subtitle: u, isHiddenVisually: o }),
            h ? (0, r.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", id: d, children: u }) : null,
            (0, r.jsx)(x.B, {
                gap: f,
                padding: { top: j && !o ? 16 : 0 },
                children: i.map((e) => (0, r.jsx)(nn, { node: e }, e.key)),
            }),
        ],
    });
});
var e_ = t(404778),
    eP = t(375708),
    eF = t(339102);
function eZ(e) {
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
                    { children: [(0, r.jsx)(nn, { node: e }), n !== d.length - 1 && (0, r.jsx)(e_.c, {})] },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, r.jsxs)("div", {
                    className: eF.CT,
                    children: [
                        (0, r.jsx)(e_.c, { className: eF.mn }),
                        (0, r.jsx)(eu, {
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
                                                (0, r.jsx)(nn, { node: e }),
                                                n !== j.length - 1 && (0, r.jsx)(e_.c, {}),
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
function eG(e) {
    let { decoration: n } = e;
    if (n.type === g.Xy.ICON)
        return (0, r.jsx)(I.A, { Icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function eM(e) {
    let { decoration: n } = e,
        t = n.useText();
    return null == t ? null : (0, r.jsx)(m.E, { variant: "text-md/medium", children: t });
}
function eU(e) {
    let { decoration: n } = e;
    if (n.type === g.xn.TEXT) return (0, r.jsx)(eM, { decoration: n });
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
        : (0, r.jsx)(D, {
              role: "link",
              "aria-label": h,
              title: m,
              leadingElement: null != c ? (0, r.jsx)(eG, { decoration: c }) : null,
              description: o,
              trailingElement: (0, r.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, r.jsx)(eU, { decoration: u }), (0, r.jsx)(C.u, {})],
              }),
              onClick: () => A.A.navigate(d),
          });
}
var eK = t(17928),
    ez = t(868285),
    e$ = t(871682),
    eq = t(689175),
    eW = t(707554),
    eX = t(761508),
    eY = t(823092),
    eH = t(397274),
    eQ = t(707182);
function eJ(e) {
    let { notice: n, children: t } = e,
        { showNotice: s, handleStoreUpdate: i } = (0, eY.L_)(),
        a = n?.stores;
    l.useEffect(() => {
        if (null != a) {
            let e = new eK.ru(a, () => {
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
        return (0, r.jsx)(e$.F, { className: eQ.lm, children: (0, r.jsx)(e, {}) });
    }, [n, s]);
    return (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(ez.F, { component: "div", children: o })] });
}
function e0(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, r.jsx)("div", {
        className: a()(eQ.oK, { [eQ.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, r.jsx)(t, {}),
    });
}
function e1(e) {
    let { notice: n, children: t, useObscuredNotice: s } = e,
        i = l.useRef(null),
        a = s?.();
    return null != a
        ? (0, r.jsx)(a, {})
        : (0, r.jsx)(eJ, {
              notice: n,
              children: (0, r.jsxs)(eq.Gt, {
                  className: eQ.XG,
                  ref: (e) => {
                      eH.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, r.jsx)("div", {
                          className: eQ.nd,
                          ref: i,
                          children: (0, r.jsx)(eo.xp, { containerRef: i, children: t }),
                      }),
                      (0, r.jsx)("div", { className: eQ.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function e6(e) {
    let { layout: n, decoration: t } = e;
    return (0, r.jsxs)("div", {
        className: eQ.LZ,
        children: [
            null != t && (0, r.jsx)(e0, { decoration: t }),
            (0, r.jsx)(eW.F, {
                forceLevel: 2,
                children: n.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(nn, { node: e }),
                                t !== n.length - 1 && (0, r.jsx)(e_.c, { className: eQ.yF }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
}
function e8(e) {
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
        e1,
        {
            notice: s,
            useObscuredNotice: a,
            children: [
                (0, r.jsx)(eX.V, {
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
                        return (0, r.jsx)(eX.V.Item, { id: n, children: t() }, n);
                    }),
                }),
                (0, r.jsx)(eX.V.Panel, { id: o, children: (0, r.jsx)(e6, { layout: u.layout, decoration: i }) }),
            ],
        },
        n,
    );
}
function e3(e) {
    let { panelKey: n, notice: t, decoration: l, layout: s, useObscuredNotice: i } = e;
    return (0, r.jsx)(
        e1,
        { notice: t, useObscuredNotice: i, children: (0, r.jsx)(e6, { layout: s, decoration: l }) },
        n,
    );
}
function e5(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, s.zY)(t))
        return (0, r.jsx)(e8, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    if ((0, s.Iu)(t))
        return (0, r.jsx)(e3, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
var e2 = t(722899);
function e7(e) {
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
            n.layout.map((e) => (0, r.jsx)(nn, { node: e }, e.key)),
        ],
    });
}
var e9 = t(626396);
let e4 = l.memo(function (e) {
    let { node: n } = e;
    return (0, r.jsx)("div", { className: e9.l, children: n.layout.map((e) => (0, r.jsx)(nn, { node: e }, e.key)) });
});
function ne(e) {
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
            return (0, r.jsx)(e5, { node: t });
        case s.Z6.LIST:
            return (0, r.jsx)(eZ, { node: t });
        case s.Z6.FIELD_SET:
            return (0, r.jsx)(eD, { node: t });
        case s.Z6.RELATED:
            return (0, r.jsx)(e7, { node: t });
        case s.Z6.CATEGORY:
            return (0, r.jsx)(eR, { node: t });
        case s.Z6.ACCORDION:
            return (0, r.jsx)(ex, { node: t });
        case s.Z6.SPLIT:
            return (0, r.jsx)(e4, { node: t });
        case s.Z6.TOGGLE:
            return (0, r.jsx)(en, { node: t });
        case s.Z6.STATIC:
            return (0, r.jsx)(Q, { node: t });
        case s.Z6.BUTTON:
            return (0, r.jsx)(S, { node: t });
        case s.Z6.SELECT:
            return (0, r.jsx)(X, { node: t });
        case s.Z6.RADIO:
            return (0, r.jsx)(q, { node: t });
        case s.Z6.SLIDER:
            return (0, r.jsx)(H, { node: t });
        case s.Z6.NAVIGATOR:
            return (0, r.jsx)(V, { node: t });
        case s.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, r.jsx)(eV, { node: t });
        case s.Z6.CUSTOM:
            return (0, r.jsx)(h, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function nn(e) {
    let { node: n } = e;
    return n.type === s.Z6.PANEL
        ? (0, r.jsx)(ne, { node: n })
        : (0, r.jsx)(d, { node: n, children: (0, r.jsx)(ne, { node: n }) });
}
