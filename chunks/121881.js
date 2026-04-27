t.d(n, { A: () => e2 });
var l = t(627968),
    r = t(64700),
    s = t(963935),
    i = t(503698),
    a = t.n(i),
    o = t(942381),
    c = t(894858),
    u = t(396535);
function d(e) {
    let { node: n, children: t } = e,
        [s, i] = r.useState(!1),
        d = r.useRef(null);
    return (
        r.useEffect(() => {
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
        (0, l.jsx)("div", { tabIndex: -1, "data-nav-anchor-key": n.key, className: a()(u.k, s && u.j), children: t })
    );
}
var x = t(331322),
    j = t(899159);
function h(e) {
    let { children: n } = e;
    return (0, l.jsx)(x.B, {
        gap: 0,
        padding: { left: "sm", right: "sm", top: "xs", bottom: "xs" },
        className: j.n,
        children: n,
    });
}
var m = t(834730),
    f = t(452027),
    p = t(821609),
    g = t(933297),
    y = t(954571),
    v = t(89381),
    b = t(652215);
function N(e) {
    return r.useCallback(() => {
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
    return (0, l.jsx)(n.StronglyDiscouragedCustomComponent, {});
}
function E(e) {
    let { trailingContent: n } = e,
        t = n.useText();
    return (0, l.jsx)(m.E, { variant: "text-md/medium", children: t });
}
function T(e) {
    let { trailingContent: n } = e;
    switch (n.type) {
        case g._1.TEXT:
            return (0, l.jsx)(E, { trailingContent: n });
        case g._1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(k, { trailingContent: n });
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
            useTrailingContent: u,
            onClick: d,
        } = n,
        [j, m] = r.useState(!1),
        g = N(n),
        y = s(),
        v = a?.(),
        b = t(),
        k = i?.(),
        E = o?.(),
        S = c?.(),
        A = u?.();
    return (0, l.jsx)(h, {
        children: (0, l.jsx)(f.D, {
            label: y,
            description: v,
            disabled: S,
            layout: "horizontal",
            children: (0, l.jsxs)(x.B, {
                direction: "horizontal",
                align: "center",
                justify: "end",
                gap: "md",
                children: [
                    null != A && (0, l.jsx)(T, { trailingContent: A }),
                    (0, l.jsx)(p.$, {
                        onClick: () => {
                            g();
                            let e = d();
                            e instanceof Promise && (m(!0), e.finally(() => m(!1)));
                        },
                        text: b,
                        "aria-label": k,
                        variant: E,
                        disabled: S,
                        loading: j,
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
var B = t(534514),
    _ = t(890856),
    D = t(349902);
function w(e) {
    let {
            ref: n,
            leadingElement: t,
            trailingElement: r,
            title: s,
            description: i,
            "aria-label": o,
            role: c,
            onClick: u,
            style: d,
        } = e,
        x = (0, l.jsxs)("div", {
            className: a()(D.EA, null != u && D.vk),
            ref: n,
            style: d,
            children: [
                null != t && (0, l.jsx)("div", { className: D._y, children: t }),
                (0, l.jsxs)("div", {
                    className: D.jw,
                    children: [
                        (0, l.jsx)("div", {
                            className: D.eg,
                            children: (0, l.jsx)(B.D, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                children: s,
                            }),
                        }),
                        null != i && (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                null != r && (0, l.jsx)("div", { className: D.EY, children: r }),
            ],
        });
    return null != u
        ? (0, l.jsx)(_.s, { onClick: u, "aria-label": o, buttonProps: null != c ? { role: c } : void 0, children: x })
        : x;
}
var Z = t(573435),
    P = t(959166);
function L(e) {
    let { sizePx: n } = e,
        t = 0.5 / n,
        r = `translate(${t}, ${t}) scale(${1 - 2 * t})`;
    return (0, l.jsx)("svg", {
        className: P.v9,
        width: n,
        height: n,
        viewBox: "0 0 1 1",
        "aria-hidden": !0,
        children: (0, l.jsx)("path", {
            d: Z.Vf,
            fill: "none",
            stroke: "var(--border-subtle)",
            strokeWidth: 1 / n,
            transform: r,
        }),
    });
}
function F(e) {
    let { icon: n, sizePx: t, positionClassName: s } = e,
        i = r.useMemo(() => ({ width: `${t}px`, height: `${t}px` }), [t]);
    switch (n.shape) {
        case g.NF.SQUIRCLE:
            return (0, l.jsxs)("div", {
                className: a()(P.Gt, s),
                style: i,
                children: [
                    (0, l.jsx)(Z.Ay, {
                        mask: Z.Ay.Masks.SQUIRCLE,
                        width: t,
                        height: t,
                        children: (0, l.jsx)("div", { className: P.pU, style: i, children: n.icon }),
                    }),
                    (0, l.jsx)(L, { sizePx: t }),
                ],
            });
        case g.NF.ROUNDED:
            return (0, l.jsx)("div", { className: a()(P.Gt, s, P.Nb), style: i, children: n.icon });
    }
}
function G(e) {
    let { decoration: n } = e,
        t = n.useIcons();
    if (null == t) return null;
    let { frontIcon: r, backIcon: s } = t;
    return (0, l.jsxs)("div", {
        className: P.VD,
        "aria-hidden": !0,
        children: [
            null != s && (0, l.jsx)(F, { icon: s, sizePx: 40, positionClassName: P.j2 }),
            (0, l.jsx)(F, { icon: r, sizePx: 48, positionClassName: P.hU }),
        ],
    });
}
function U(e) {
    let { decoration: n } = e;
    if (n.type === g.wF.STACKED_ICONS) return (0, l.jsx)(G, { decoration: n });
}
var V = t(869376);
function K(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: r, useTitle: s, useSubtitle: i } = n,
        a = r?.(),
        o = i?.(),
        { parentPanelNode: c, parentSidebarItemNode: u } = R(t),
        d = s?.(),
        x = c?.useTitle?.(),
        j = d ?? x,
        h = N(n);
    if (null == c || null == j) return null;
    let m = null != u ? u.icon : void 0;
    return (0, l.jsx)(w, {
        role: "link",
        "aria-label": x,
        title: j,
        description: o,
        leadingElement: null != m && (0, l.jsx)(I.A, { Icon: m }),
        trailingElement: (0, l.jsxs)("div", {
            className: V.M,
            children: [null != a && (0, l.jsx)(U, { decoration: a }), (0, l.jsx)(A.u, {})],
        }),
        onClick: () => {
            C.A.navigate(t, { animateSidebarScroll: !1 }), h();
        },
    });
}
var z = t(144228);
t(321073);
var M = t(771781);
function $(e) {
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
            if ((0, M.uW)(n)) return "new";
        })(t),
    });
}
function W(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: r,
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
        f = N(n);
    return (0, l.jsx)(h, {
        children: (0, l.jsx)(z.z, {
            label: u,
            description: d,
            options: j,
            value: x,
            badge: m,
            onChange: (e) => {
                f(), r(e);
            },
        }),
    });
}
var X = t(691885);
function q(e) {
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
        b = N(n),
        k = r.useMemo(() => {
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
    return (0, l.jsx)(h, {
        children: (0, l.jsx)(X.l, {
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
            getDismissibleBadges: E,
        } = n,
        [T] = r.useState(() => s()),
        S = j?.(),
        A = c(),
        C = u?.(),
        I = d?.(),
        O = x?.(),
        R = o?.(),
        B = $({ persistentBadge: k?.(), dismissibleBadges: E?.() }),
        _ = N(n);
    return (0, l.jsxs)(h, {
        children: [
            (0, l.jsx)(Y.A, {
                label: A,
                description: C,
                disabled: O,
                initialValue: T,
                value: S,
                minValue: i,
                maxValue: a,
                defaultValue: R,
                onValueRender: f,
                asValueChanges: p,
                onValueChange: (e) => {
                    _(), t?.(e);
                },
                orientation: "horizontal",
                markers: g,
                onMarkerRender: y,
                stickToMarkers: v,
                layout: b,
                badge: B,
            }),
            null != I && (0, l.jsx)(m.E, { variant: "text-xs/normal", color: "text-muted", children: I }),
        ],
    });
}
function Q(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: r } = n,
        s = t(),
        i = r?.();
    return (0, l.jsx)(w, { title: s, description: i });
}
var J = t(243721),
    ee = t(512950);
function en(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: r,
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
        y = N(n);
    return (0, l.jsxs)(h, {
        children: [
            (0, l.jsx)(J.d, {
                label: x,
                description: j,
                badge: g,
                checked: m,
                hasIcon: u,
                onChange: (e) => {
                    y(), r(e);
                },
                disabled: f,
            }),
            f && null != p ? (0, l.jsx)(ee.p, { messageType: ee.Y.WARNING, children: p }) : null,
        ],
    });
}
var et = t(735438),
    el = t(770178),
    er = t(353068),
    es = t(197867),
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
        d = r.useRef(null),
        [j, h] = r.useState(null),
        m = i && null != j;
    return (
        r.useLayoutEffect(() => {
            null != d.current && null == j && h(d.current.clientHeight);
        }, [j]),
        (0, l.jsxs)(er.EN, {
            ref: n,
            isExpanded: i,
            onExpandedChange: o,
            children: [
                (0, l.jsx)(w, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: m ? void 0 : s,
                    trailingElement: (0, l.jsx)(eo.vN, {
                        children: (0, l.jsx)(es.$, {
                            slot: "trigger",
                            className: ec.bW,
                            children: (0, l.jsx)(ei.j, {
                                className: a()(ec.Kk, { [ec.kX]: !i }),
                                color: ea.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => o(!i),
                }),
                (0, l.jsx)(er.kS, {
                    className: a()(ec.nd, { [ec.t5]: !u }),
                    children: (0, l.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: c }),
                }),
            ],
        })
    );
}
function ed(e) {
    return c.A.getField("requestAccordionOpenKey") === e.key;
}
let ex = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, layout: s, useCollapsedSubtitle: i } = n,
        [a, o] = r.useState(!0),
        [u, d] = r.useState(() => ed(n)),
        x = r.useRef(u),
        j = r.useRef(ed(n) ? "navigation" : null);
    r.useEffect(
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
    let h = r.useCallback(
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
        m = r.useMemo(() => (0, et.debounce)(h, 50), [h]),
        f = (0, el.w)(m),
        p = t?.(u),
        g = i?.(),
        y = N(n);
    return (0, l.jsx)(eu, {
        ref: f,
        title: p,
        collapsedSubtitle: g,
        isExpanded: u,
        onExpandedChange: (e) => {
            (j.current = "user"), y(), d(e);
        },
        animate: a,
        children: s.map((e) => (0, l.jsx)(e2, { node: e }, e.key)),
    });
});
function ej(e) {
    let { decoration: n } = e,
        { type: t, id: r, ...s } = n;
    return (0, l.jsx)(p.$, { variant: "secondary", ...s });
}
function eh(e) {
    let { decoration: n } = e,
        t = n.button;
    return (0, l.jsx)(t, {});
}
function em(e) {
    let { decoration: n } = e;
    return (0, l.jsx)(x.B, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: n.buttons.map((e) => {
            switch (e.type) {
                case g.UV.BUTTON:
                    return (0, l.jsx)(ej, { decoration: e }, e.id);
                case g.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, l.jsx)(eh, { decoration: e }, e.id);
            }
        }),
    });
}
function ef(e) {
    let { decoration: n } = e;
    return null == n ? null : n.type === g.WX.BUTTON_GROUP ? (0, l.jsx)(em, { decoration: n }) : void 0;
}
function ep(e) {
    let { title: n, icon: t, subtitle: r, decoration: s } = e;
    return (0, l.jsxs)(x.B, {
        direction: "horizontal",
        align: "center",
        gap: 16,
        padding: { left: "sm", right: "sm", bottom: "lg" },
        children: [
            (0, l.jsxs)(x.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsxs)(x.B, {
                        direction: "horizontal",
                        gap: 8,
                        children: [
                            (0, l.jsx)(B.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != t && (0, l.jsx)(t, { color: ea.A.colors.INTERACTIVE_ICON_DEFAULT, size: "md" }),
                        ],
                    }),
                    null != r && (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: r }),
                ],
            }),
            (0, l.jsx)(ef, { decoration: s }),
        ],
    });
}
var eg = t(683071),
    ey = t(964486),
    ev = t(562248);
function eb(e) {
    let { button: n } = e,
        [t, s] = r.useState(!1),
        i = n.useText(),
        a = async () => {
            s(!0);
            try {
                await n.onClick();
            } finally {
                s(!1);
            }
        };
    return (0, l.jsx)(p.$, { variant: "secondary", text: i, onClick: a, loading: t, disabled: t });
}
function eN(e) {
    let { notice: n } = e,
        { noticeType: t, useTitle: r, useText: s, button: i } = n,
        a = r?.(),
        o = s();
    (0, ey.Ay)(() => {
        n.trackView?.();
    });
    let c = (0, l.jsxs)(x.B, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != a && (0, l.jsx)(B.D, { variant: "heading-md/medium", children: a }),
            (0, l.jsx)("span", { children: o }),
        ],
    });
    return (0, l.jsx)(eg.w, {
        type: t,
        children: (0, l.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [c, null != i && (0, l.jsx)(eb, { button: i })],
        }),
    });
}
function ek(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, l.jsx)(t, {});
}
function eE(e) {
    let { notice: n } = e;
    switch (n.type) {
        case g.lT.INLINE_NOTICE:
            return (0, l.jsx)(eN, { notice: n });
        case g.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(ek, { notice: n });
    }
}
function eT(e) {
    let { notice: n } = e;
    return (0, l.jsx)("div", { className: ev.l, children: (0, l.jsx)(eE, { notice: n }) });
}
let eS = r.memo(function (e) {
    let { node: n } = e,
        {
            useTitle: t,
            icon: r,
            useSubnavLabel: s,
            useSubtitle: i,
            layout: a,
            useInlineNotice: o,
            useHeaderDecoration: c,
        } = n,
        u = t?.(),
        d = i?.(),
        j = o?.(),
        h = c?.(),
        m = null != t || null != s;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != u && (0, l.jsx)(ep, { title: u, icon: r, subtitle: d, decoration: h }),
            (0, l.jsx)("div", {
                "data-settings-category-key": m ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, l.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != j && (0, l.jsx)(eT, { notice: j }),
                    a.map((e) => (0, l.jsx)(e2, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
var eA = t(140735),
    eC = t(681310);
function eI(e) {
    let { title: n, subtitle: t, isHiddenVisually: r } = e;
    return null == n || "" === n
        ? null
        : r
          ? (0, l.jsx)(eA.A, { tag: "legend", children: n })
          : (0, l.jsx)(m.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eC.DD, { [eC.h0]: null != t && "" !== t }),
                children: n,
            });
}
let eO = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: s, layout: i, variant: a = "default", isTitleHiddenVisually: o } = n,
        c = t(),
        u = s?.(),
        d = r.useId(),
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
    return (0, l.jsxs)("fieldset", {
        "aria-describedby": h ? d : void 0,
        children: [
            (0, l.jsx)(eI, { title: c, subtitle: u, isHiddenVisually: o }),
            h
                ? (0, l.jsx)(m.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      id: d,
                      className: eC.VA,
                      children: u,
                  })
                : null,
            (0, l.jsx)(x.B, {
                gap: f,
                padding: { top: j && !o ? 16 : 0 },
                children: i.map((e) => (0, l.jsx)(e2, { node: e }, e.key)),
            }),
        ],
    });
});
var eR = t(46373),
    eB = t(985018),
    e_ = t(339102);
function eD(e) {
    let n,
        { node: t } = e,
        [s, i] = r.useState(!1),
        { layout: a, collapseAfter: o, useCollapsibleTitle: c, useCollapsedSubtitle: u } = t,
        d = null != o ? a.slice(0, o) : a,
        j = null != o ? a.slice(o) : [],
        h =
            c?.(s, j.length) ??
            ((n = j.length),
            s
                ? eB.intl.formatToPlainString(eB.t["3SHL+d"], { count: n })
                : eB.intl.formatToPlainString(eB.t["8JRFyZ"], { count: n })),
        m = u?.();
    return (0, l.jsxs)(x.B, {
        gap: 8,
        children: [
            d.map((e, n) =>
                (0, l.jsxs)(
                    r.Fragment,
                    { children: [(0, l.jsx)(e2, { node: e }), n !== d.length - 1 && (0, l.jsx)(eR.A, {})] },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, l.jsxs)("div", {
                    className: e_.CT,
                    children: [
                        (0, l.jsx)(eR.A, { className: e_.mn }),
                        (0, l.jsx)(eu, {
                            title: h,
                            collapsedSubtitle: m,
                            isExpanded: s,
                            onExpandedChange: i,
                            children: (0, l.jsx)(x.B, {
                                gap: 8,
                                children: j.map((e, n) =>
                                    (0, l.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                (0, l.jsx)(e2, { node: e }),
                                                n !== j.length - 1 && (0, l.jsx)(eR.A, {}),
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
function ew(e) {
    let { decoration: n } = e;
    if (n.type === g.Xy.ICON)
        return (0, l.jsx)(I.A, { Icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function eZ(e) {
    let { decoration: n } = e,
        t = n.useText();
    return null == t ? null : (0, l.jsx)(m.E, { variant: "text-md/medium", children: t });
}
function eP(e) {
    let { decoration: n } = e;
    if (n.type === g.xn.TEXT) return (0, l.jsx)(eZ, { decoration: n });
}
function eL(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: r, useLeadingDecoration: s, useTrailingDecoration: i } = n,
        a = t?.(),
        o = r?.(),
        c = s?.(),
        u = i?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = R(d),
        h = j?.useTitle?.(),
        m = a ?? h;
    return null == j || null == m
        ? null
        : (0, l.jsx)(w, {
              role: "link",
              "aria-label": h,
              title: m,
              leadingElement: null != c ? (0, l.jsx)(ew, { decoration: c }) : null,
              description: o,
              trailingElement: (0, l.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, l.jsx)(eP, { decoration: u }), (0, l.jsx)(A.u, {})],
              }),
              onClick: () => C.A.navigate(d),
          });
}
var eF = t(17928),
    eG = t(73939),
    eU = t(871682),
    eV = t(689175),
    eK = t(761508),
    ez = t(823092),
    eM = t(397274),
    e$ = t(707182);
function eW(e) {
    let { notice: n, children: t } = e,
        { showNotice: s, handleStoreUpdate: i } = (0, ez.L_)(),
        a = n?.stores;
    r.useEffect(() => {
        if (null != a) {
            let e = new eF.ru(a, () => {
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
    let o = r.useMemo(() => {
        if (null == n || !s) return null;
        let { element: e } = n;
        return (0, l.jsx)(eU.F, { className: e$.lm, children: (0, l.jsx)(e, {}) });
    }, [n, s]);
    return (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(eG.F, { component: "div", children: o })] });
}
function eX(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, l.jsx)("div", {
        className: a()(e$.oK, { [e$.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, l.jsx)(t, {}),
    });
}
function eq(e) {
    let { notice: n, children: t, useObscuredNotice: s } = e,
        i = r.useRef(null),
        a = s?.();
    return null != a
        ? (0, l.jsx)(a, {})
        : (0, l.jsx)(eW, {
              notice: n,
              children: (0, l.jsxs)(eV.Gt, {
                  className: e$.XG,
                  ref: (e) => {
                      eM.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, l.jsx)("div", {
                          className: e$.nd,
                          ref: i,
                          children: (0, l.jsx)(eo.xp, { containerRef: i, children: t }),
                      }),
                      (0, l.jsx)("div", { className: e$.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function eY(e) {
    let { layout: n, decoration: t } = e;
    return (0, l.jsxs)("div", {
        className: e$.LZ,
        children: [
            null != t && (0, l.jsx)(eX, { decoration: t }),
            n.map((e, t) =>
                (0, l.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, l.jsx)(e2, { node: e }),
                            t !== n.length - 1 && (0, l.jsx)(eR.A, { className: e$.yF }),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function eH(e) {
    let { panelKey: n, layout: t, notice: s, decoration: i, useObscuredNotice: a } = e,
        o =
            c.A.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(n);
            }) ?? t[0].key;
    r.useEffect(() => {
        let e = c.A.getField("currentTabKeys");
        if (t.some((t) => t.key === e.get(n))) return;
        let l = new Map(e);
        l.set(n, t[0].key), c.A.setState({ currentTabKeys: l });
    }, [t, n]);
    let u = t.find((e) => e.key === o) ?? t[0];
    return (0, l.jsxs)(
        eq,
        {
            notice: s,
            useObscuredNotice: a,
            children: [
                (0, l.jsx)(eK.V, {
                    className: e$.$H,
                    selectedItem: o,
                    onItemSelect: (e) => {
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
                        return (0, l.jsx)(eK.V.Item, { id: n, children: t() }, n);
                    }),
                }),
                (0, l.jsx)(eK.V.Panel, { id: o, children: (0, l.jsx)(eY, { layout: u.layout, decoration: i }) }),
            ],
        },
        n,
    );
}
function eQ(e) {
    let { panelKey: n, notice: t, decoration: r, layout: s, useObscuredNotice: i } = e;
    return (0, l.jsx)(
        eq,
        { notice: t, useObscuredNotice: i, children: (0, l.jsx)(eY, { layout: s, decoration: r }) },
        n,
    );
}
function eJ(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, s.zY)(t))
        return (0, l.jsx)(eH, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    if ((0, s.Iu)(t))
        return (0, l.jsx)(eQ, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
var e0 = t(722899);
function e1(e) {
    let { node: n } = e;
    return (0, l.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, l.jsx)(B.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: e0.D,
                children: eB.intl.string(eB.t.rPREPG),
            }),
            n.layout.map((e) => (0, l.jsx)(e2, { node: e }, e.key)),
        ],
    });
}
var e6 = t(626396);
let e8 = r.memo(function (e) {
    let { node: n } = e;
    return (0, l.jsx)("div", { className: e6.l, children: n.layout.map((e) => (0, l.jsx)(e2, { node: e }, e.key)) });
});
function e3(e) {
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
        case s.Z6.ROOT:
        case s.Z6.SECTION:
        case s.Z6.SIDEBAR_ITEM:
        case s.Z6.TAB_ITEM:
            throw Error(`${t.type} nodes should never be rendered directly`);
        case s.Z6.PANEL:
            return (0, l.jsx)(eJ, { node: t });
        case s.Z6.LIST:
            return (0, l.jsx)(eD, { node: t });
        case s.Z6.FIELD_SET:
            return (0, l.jsx)(eO, { node: t });
        case s.Z6.RELATED:
            return (0, l.jsx)(e1, { node: t });
        case s.Z6.CATEGORY:
            return (0, l.jsx)(eS, { node: t });
        case s.Z6.ACCORDION:
            return (0, l.jsx)(ex, { node: t });
        case s.Z6.SPLIT:
            return (0, l.jsx)(e8, { node: t });
        case s.Z6.TOGGLE:
            return (0, l.jsx)(en, { node: t });
        case s.Z6.STATIC:
            return (0, l.jsx)(Q, { node: t });
        case s.Z6.BUTTON:
            return (0, l.jsx)(S, { node: t });
        case s.Z6.SELECT:
            return (0, l.jsx)(q, { node: t });
        case s.Z6.RADIO:
            return (0, l.jsx)(W, { node: t });
        case s.Z6.SLIDER:
            return (0, l.jsx)(H, { node: t });
        case s.Z6.NAVIGATOR:
            return (0, l.jsx)(K, { node: t });
        case s.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, l.jsx)(eL, { node: t });
        case s.Z6.CUSTOM:
            return (0, l.jsx)(h, { children: (0, l.jsx)(t.Component, {}) });
    }
}
function e2(e) {
    let { node: n } = e;
    return n.type === s.Z6.PANEL
        ? (0, l.jsx)(e3, { node: n })
        : (0, l.jsx)(d, { node: n, children: (0, l.jsx)(e3, { node: n }) });
}
