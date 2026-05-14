t.d(n, { A: () => e2 });
var l = t(627968),
    r = t(64700),
    i = t(963935),
    s = t(503698),
    a = t.n(s),
    c = t(942381),
    o = t(894858),
    d = t(396535);
function u(e) {
    let { node: n, children: t } = e,
        [i, s] = r.useState(!1),
        u = r.useRef(null);
    return (
        r.useEffect(() => {
            let e = o.A.subscribe(
                (e) => e.requestFlashKey,
                (e) => {
                    e === n.key &&
                        (clearTimeout(u.current),
                        s(!0),
                        (u.current = setTimeout(() => {
                            s(!1), o.A.setState({ requestFlashKey: void 0 });
                        }, 100)));
                },
                { equalityFn: c.x, fireImmediately: !0 },
            );
            return () => {
                clearTimeout(u.current), e();
            };
        }, [n.key, n.type]),
        (0, l.jsx)("div", { tabIndex: -1, "data-nav-anchor-key": n.key, className: a()(d.k, i && d.j), children: t })
    );
}
var x = t(331322),
    j = t(899159);
function h(e) {
    let { children: n } = e;
    return (0, l.jsx)(x.B, { className: j.n, gap: 0, padding: { top: "xs", bottom: "xs" }, children: n });
}
var m = t(834730),
    p = t(452027),
    g = t(821609),
    f = t(933297),
    y = t(174459),
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
        case f._1.TEXT:
            return (0, l.jsx)(E, { trailingContent: n });
        case f._1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(k, { trailingContent: n });
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
            useLoading: d,
            useTrailingContent: u,
            onClick: j,
        } = n,
        m = N(n),
        f = d?.() ?? !1,
        [y, v] = r.useState(!1),
        b = i(),
        k = a?.(),
        E = t(),
        S = s?.(),
        A = c?.(),
        C = o?.(),
        I = u?.();
    return (0, l.jsx)(h, {
        children: (0, l.jsx)(p.D, {
            label: b,
            description: k,
            disabled: C,
            layout: "horizontal",
            children: (0, l.jsxs)(x.B, {
                direction: "horizontal",
                align: "center",
                justify: "end",
                gap: "md",
                children: [
                    null != I && (0, l.jsx)(T, { trailingContent: I }),
                    (0, l.jsx)(g.$, {
                        onClick: () => {
                            m();
                            let e = j();
                            e instanceof Promise && (v(!0), e.finally(() => v(!1)));
                        },
                        text: E,
                        "aria-label": S,
                        variant: A,
                        disabled: C,
                        loading: y || f,
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
function B(e) {
    let { accessibleDirectory: n } = (0, O._)(),
        t = n.entry(e);
    return {
        parentPanelNode: t?.parentPanelKey != null ? n.get(t.parentPanelKey) : void 0,
        parentSidebarItemNode: t?.parentSidebarItemKey != null ? n.get(t.parentSidebarItemKey) : void 0,
    };
}
var R = t(534514),
    _ = t(890856),
    w = t(349902);
function D(e) {
    let {
            ref: n,
            leadingElement: t,
            trailingElement: r,
            title: i,
            description: s,
            "aria-label": c,
            role: o,
            onClick: d,
            style: u,
        } = e,
        x = (0, l.jsxs)("div", {
            className: a()(w.EA, null != d && w.vk),
            ref: n,
            style: u,
            children: [
                null != t && (0, l.jsx)("div", { className: w._y, children: t }),
                (0, l.jsxs)("div", {
                    className: w.jw,
                    children: [
                        (0, l.jsx)("div", {
                            className: w.eg,
                            children: (0, l.jsx)(R.D, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                children: i,
                            }),
                        }),
                        null != s && (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: s }),
                    ],
                }),
                null != r && (0, l.jsx)("div", { className: w.EY, children: r }),
            ],
        });
    return null != d
        ? (0, l.jsx)(_.s, { onClick: d, "aria-label": c, buttonProps: null != o ? { role: o } : void 0, children: x })
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
    let { icon: n, sizePx: t, positionClassName: i } = e,
        s = r.useMemo(() => ({ width: `${t}px`, height: `${t}px` }), [t]);
    switch (n.shape) {
        case f.NF.SQUIRCLE:
            return (0, l.jsxs)("div", {
                className: a()(P.Gt, i),
                style: s,
                children: [
                    (0, l.jsx)(Z.Ay, {
                        mask: Z.Ay.Masks.SQUIRCLE,
                        width: t,
                        height: t,
                        children: (0, l.jsx)("div", { className: P.pU, style: s, children: n.icon }),
                    }),
                    (0, l.jsx)(L, { sizePx: t }),
                ],
            });
        case f.NF.ROUNDED:
            return (0, l.jsx)("div", { className: a()(P.Gt, i, P.Nb), style: s, children: n.icon });
    }
}
function G(e) {
    let { decoration: n } = e,
        t = n.useIcons();
    if (null == t) return null;
    let { frontIcon: r, backIcon: i } = t;
    return (0, l.jsxs)("div", {
        className: P.VD,
        "aria-hidden": !0,
        children: [
            null != i && (0, l.jsx)(F, { icon: i, sizePx: 40, positionClassName: P.j2 }),
            (0, l.jsx)(F, { icon: r, sizePx: 48, positionClassName: P.hU }),
        ],
    });
}
function U(e) {
    let { decoration: n } = e;
    if (n.type === f.wF.STACKED_ICONS) return (0, l.jsx)(G, { decoration: n });
}
var V = t(869376);
function z(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: r, useTitle: i, useSubtitle: s } = n,
        a = r?.(),
        c = s?.(),
        { parentPanelNode: o, parentSidebarItemNode: d } = B(t),
        u = i?.(),
        x = o?.useTitle?.(),
        j = u ?? x,
        h = N(n);
    if (null == o || null == j) return null;
    let m = null != d ? d.icon : void 0;
    return (0, l.jsx)(D, {
        role: "link",
        "aria-label": x,
        title: j,
        description: c,
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
var K = t(773812);
t(321073);
var M = t(558845);
function $(e) {
    let { persistentBadge: n, dismissibleBadges: t } = e;
    return (function (e) {
        let { persistentBadgeType: n, dismissibleBadgeType: t } = e;
        return "beta" === n ? "beta" : (t ?? n);
    })({
        persistentBadgeType: n?.badgeType === f.Xi.BETA ? "beta" : void 0,
        dismissibleBadgeType: (function (e) {
            let n = r.useMemo(() => {
                let n = [];
                return (
                    e?.forEach((e) => {
                        let { badgeType: t, dismissibleContent: l } = e;
                        t === f.Xi.NEW && n.push(l);
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
            useTitle: i,
            useSubtitle: s,
            useOptions: a,
            usePersistentBadge: c,
            getDismissibleBadges: o,
        } = n,
        d = i(),
        u = s?.(),
        x = t(),
        j = a(),
        m = $({ persistentBadge: c?.(), dismissibleBadges: o?.() }),
        p = N(n);
    return (0, l.jsx)(h, {
        children: (0, l.jsx)(K.z, {
            label: d,
            description: u,
            options: j,
            value: x,
            badge: m,
            onChange: (e) => {
                p(), r(e);
            },
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
            clearable: o,
            closeOnSelect: d,
            wrapTags: u,
            selectionMode: x,
            usePersistentBadge: j,
            getDismissibleBadges: m,
        } = n,
        p = t(),
        g = i?.(),
        f = s(),
        y = c(),
        v = $({ persistentBadge: j?.(), dismissibleBadges: m?.() }),
        b = N(n),
        k = r.useMemo(() => {
            var e, n;
            return {
                selectionMode: x,
                value: f,
                onSelectionChange:
                    ((e = a),
                    (n = b),
                    (t) => {
                        n(), e(t);
                    }),
            };
        }, [x, f, a, b]);
    return (0, l.jsx)(h, {
        children: (0, l.jsx)(X.l, {
            ...k,
            label: p,
            description: g,
            options: y,
            wrapTags: u,
            closeOnSelect: d,
            clearable: o,
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
            getInitialValue: i,
            minValue: s,
            maxValue: a,
            useDefaultValue: c,
            useTitle: o,
            useSubtitle: d,
            useHintText: u,
            useDisabled: x,
            useExternalValue: j,
            onValueRender: p,
            asValueChanges: g,
            markers: f,
            onMarkerRender: y,
            stickToMarkers: v,
            fieldLayout: b,
            usePersistentBadge: k,
            getDismissibleBadges: E,
        } = n,
        [T] = r.useState(() => i()),
        S = j?.(),
        A = o(),
        C = d?.(),
        I = u?.(),
        O = x?.(),
        B = c?.(),
        R = $({ persistentBadge: k?.(), dismissibleBadges: E?.() }),
        _ = N(n);
    return (0, l.jsxs)(h, {
        children: [
            (0, l.jsx)(Y.A, {
                label: A,
                description: C,
                disabled: O,
                initialValue: T,
                value: S,
                minValue: s,
                maxValue: a,
                defaultValue: B,
                onValueRender: p,
                asValueChanges: g,
                onValueChange: (e) => {
                    _(), t?.(e);
                },
                orientation: "horizontal",
                markers: f,
                onMarkerRender: y,
                stickToMarkers: v,
                layout: b,
                badge: R,
            }),
            null != I && (0, l.jsx)(m.E, { variant: "text-xs/normal", color: "text-muted", children: I }),
        ],
    });
}
function Q(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: r } = n,
        i = t(),
        s = r?.();
    return (0, l.jsx)(D, { title: i, description: s });
}
var J = t(243721),
    ee = t(512950);
function en(e) {
    let { node: n } = e,
        {
            useValue: t,
            setValue: r,
            useTitle: i,
            useSubtitle: s,
            useDisabled: a,
            useDisabledMessage: c,
            usePersistentBadge: o,
            hasIcon: d,
            getDismissibleBadges: u,
        } = n,
        x = i(),
        j = s?.(),
        m = t(),
        p = a?.() ?? !1,
        g = c?.(),
        f = $({ persistentBadge: o?.(), dismissibleBadges: u?.() }),
        y = N(n);
    return (0, l.jsxs)(h, {
        children: [
            (0, l.jsx)(J.d, {
                label: x,
                description: j,
                badge: f,
                checked: m,
                hasIcon: d,
                onChange: (e) => {
                    y(), r(e);
                },
                disabled: p,
            }),
            p && null != g ? (0, l.jsx)(ee.p, { messageType: ee.Y.WARNING, children: g }) : null,
        ],
    });
}
var et = t(735438),
    el = t(770178),
    er = t(353068),
    ei = t(650682),
    es = t(138017),
    ea = t(661531),
    ec = t(187322),
    eo = t(523880);
function ed(e) {
    let {
            ref: n,
            title: t,
            collapsedSubtitle: i,
            isExpanded: s,
            onExpandedChange: c,
            children: o,
            animate: d = !0,
        } = e,
        u = r.useRef(null),
        [j, h] = r.useState(null),
        m = s && null != j;
    return (
        r.useLayoutEffect(() => {
            null != u.current && null == j && h(u.current.clientHeight);
        }, [j]),
        (0, l.jsxs)(er.EN, {
            ref: n,
            isExpanded: s,
            onExpandedChange: c,
            children: [
                (0, l.jsx)(D, {
                    ref: u,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: m ? void 0 : i,
                    trailingElement: (0, l.jsx)(ec.vN, {
                        children: (0, l.jsx)(ei.$, {
                            slot: "trigger",
                            className: eo.bW,
                            children: (0, l.jsx)(es.j, {
                                className: a()(eo.Kk, { [eo.kX]: !s }),
                                color: ea.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => c(!s),
                }),
                (0, l.jsx)(er.kS, {
                    className: a()(eo.nd, { [eo.t5]: !d }),
                    children: (0, l.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: o }),
                }),
            ],
        })
    );
}
function eu(e) {
    return o.A.getField("requestAccordionOpenKey") === e.key;
}
let ex = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, layout: i, useCollapsedSubtitle: s } = n,
        [a, c] = r.useState(!0),
        [d, u] = r.useState(() => eu(n)),
        x = r.useRef(d),
        j = r.useRef(eu(n) ? "navigation" : null);
    r.useEffect(
        () =>
            o.A.subscribe(
                (e) => e.requestAccordionOpenKey,
                (e) => {
                    e === n.key &&
                        (x.current ? C.A.notifyAccordionExpanded(n.key) : ((j.current = "navigation"), c(!1), u(!0)));
                },
                { equalityFn: (e, n) => e === n, fireImmediately: !0 },
            ),
        [n.key, d],
    );
    let h = r.useCallback(
            (e) => {
                if (null != e.target && d !== x.current && ((x.current = d), x.current))
                    switch (j.current) {
                        case "navigation":
                            c(!0), C.A.notifyAccordionExpanded(n.key);
                            break;
                        case "user":
                            C.A.navigate(n.key, { animatePanelScroll: !0, panelScrollBlock: "nearest" });
                    }
            },
            [d, n.key],
        ),
        m = r.useMemo(() => (0, et.debounce)(h, 50), [h]),
        p = (0, el.w)(m),
        g = t?.(d),
        f = s?.(),
        y = N(n);
    return (0, l.jsx)(ed, {
        ref: p,
        title: g,
        collapsedSubtitle: f,
        isExpanded: d,
        onExpandedChange: (e) => {
            (j.current = "user"), y(), u(e);
        },
        animate: a,
        children: i.map((e) => (0, l.jsx)(e2, { node: e }, e.key)),
    });
});
function ej(e) {
    let { decoration: n } = e,
        { type: t, id: r, ...i } = n;
    return (0, l.jsx)(g.$, { variant: "secondary", ...i });
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
                case f.UV.BUTTON:
                    return (0, l.jsx)(ej, { decoration: e }, e.id);
                case f.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, l.jsx)(eh, { decoration: e }, e.id);
            }
        }),
    });
}
function ep(e) {
    let { decoration: n } = e;
    return null == n ? null : n.type === f.WX.BUTTON_GROUP ? (0, l.jsx)(em, { decoration: n }) : void 0;
}
function eg(e) {
    let { title: n, icon: t, subtitle: r, subtitleTrailing: i, decoration: s } = e;
    return (0, l.jsxs)(x.B, {
        direction: "horizontal",
        align: "center",
        gap: 16,
        padding: { bottom: "lg" },
        children: [
            (0, l.jsxs)(x.B, {
                direction: "vertical",
                gap: 4,
                children: [
                    (0, l.jsxs)(x.B, {
                        direction: "horizontal",
                        gap: 8,
                        children: [
                            (0, l.jsx)(R.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != t && (0, l.jsx)(t, { color: ea.A.colors.INTERACTIVE_ICON_DEFAULT, size: "md" }),
                        ],
                    }),
                    null != r &&
                        (0, l.jsxs)(x.B, {
                            direction: "horizontal",
                            align: "center",
                            gap: 4,
                            children: [
                                (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-subtle", children: r }),
                                i,
                            ],
                        }),
                ],
            }),
            (0, l.jsx)(ep, { decoration: s }),
        ],
    });
}
var ef = t(683071),
    ey = t(964486),
    ev = t(562248);
function eb(e) {
    let { button: n } = e,
        [t, i] = r.useState(!1),
        s = n.useText(),
        a = async () => {
            i(!0);
            try {
                await n.onClick();
            } finally {
                i(!1);
            }
        };
    return (0, l.jsx)(g.$, { variant: "secondary", text: s, onClick: a, loading: t, disabled: t });
}
function eN(e) {
    let { notice: n } = e,
        { noticeType: t, useTitle: r, useText: i, button: s } = n,
        a = r?.(),
        c = i();
    (0, ey.Ay)(() => {
        n.trackView?.();
    });
    let o = (0, l.jsxs)(x.B, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != a && (0, l.jsx)(R.D, { variant: "heading-md/medium", children: a }),
            (0, l.jsx)("span", { children: c }),
        ],
    });
    return (0, l.jsx)(ef.w, {
        type: t,
        children: (0, l.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [o, null != s && (0, l.jsx)(eb, { button: s })],
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
        case f.lT.INLINE_NOTICE:
            return (0, l.jsx)(eN, { notice: n });
        case f.lT.STRONGLY_DISCOURAGED_CUSTOM:
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
            useSubnavLabel: i,
            useSubtitle: s,
            layout: a,
            useInlineNotice: c,
            useHeaderDecoration: o,
            useSubtitleTrailing: d,
        } = n,
        u = t?.(),
        j = s?.(),
        h = c?.(),
        m = o?.(),
        p = d?.(),
        g = null != t || null != i;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != u && (0, l.jsx)(eg, { title: u, icon: r, subtitle: j, subtitleTrailing: p, decoration: m }),
            (0, l.jsx)("div", {
                "data-settings-category-key": g ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, l.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != h && (0, l.jsx)(eT, { notice: h }),
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
                className: a()(eC.D, { [eC.h]: null != t && "" !== t }),
                children: n,
            });
}
let eO = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: i, layout: s, variant: a = "default", isTitleHiddenVisually: c } = n,
        o = t(),
        d = i?.(),
        u = r.useId(),
        j = null != o && "" !== o,
        h = null != d && "" !== d,
        p = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(a);
    return (0, l.jsxs)("fieldset", {
        "aria-describedby": h ? u : void 0,
        children: [
            (0, l.jsx)(eI, { title: o, subtitle: d, isHiddenVisually: c }),
            h ? (0, l.jsx)(m.E, { variant: "text-sm/normal", color: "text-default", id: u, children: d }) : null,
            (0, l.jsx)(x.B, {
                gap: p,
                padding: { top: j && !c ? 16 : 0 },
                children: s.map((e) => (0, l.jsx)(e2, { node: e }, e.key)),
            }),
        ],
    });
});
var eB = t(404778),
    eR = t(375708),
    e_ = t(339102);
function ew(e) {
    let n,
        { node: t } = e,
        [i, s] = r.useState(!1),
        { layout: a, collapseAfter: c, useCollapsibleTitle: o, useCollapsedSubtitle: d } = t,
        u = null != c ? a.slice(0, c) : a,
        j = null != c ? a.slice(c) : [],
        h =
            o?.(i, j.length) ??
            ((n = j.length),
            i
                ? eR.intl.formatToPlainString(eR.t["3SHL+d"], { count: n })
                : eR.intl.formatToPlainString(eR.t["8JRFyZ"], { count: n })),
        m = d?.();
    return (0, l.jsxs)(x.B, {
        gap: 8,
        children: [
            u.map((e, n) =>
                (0, l.jsxs)(
                    r.Fragment,
                    { children: [(0, l.jsx)(e2, { node: e }), n !== u.length - 1 && (0, l.jsx)(eB.c, {})] },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, l.jsxs)("div", {
                    className: e_.CT,
                    children: [
                        (0, l.jsx)(eB.c, { className: e_.mn }),
                        (0, l.jsx)(ed, {
                            title: h,
                            collapsedSubtitle: m,
                            isExpanded: i,
                            onExpandedChange: s,
                            children: (0, l.jsx)(x.B, {
                                gap: 8,
                                children: j.map((e, n) =>
                                    (0, l.jsxs)(
                                        r.Fragment,
                                        {
                                            children: [
                                                (0, l.jsx)(e2, { node: e }),
                                                n !== j.length - 1 && (0, l.jsx)(eB.c, {}),
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
function eD(e) {
    let { decoration: n } = e;
    if (n.type === f.Xy.ICON)
        return (0, l.jsx)(I.A, { Icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function eZ(e) {
    let { decoration: n } = e,
        t = n.useText();
    return null == t ? null : (0, l.jsx)(m.E, { variant: "text-md/medium", children: t });
}
function eP(e) {
    let { decoration: n } = e;
    if (n.type === f.xn.TEXT) return (0, l.jsx)(eZ, { decoration: n });
}
function eL(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: r, useLeadingDecoration: i, useTrailingDecoration: s } = n,
        a = t?.(),
        c = r?.(),
        o = i?.(),
        d = s?.(),
        u = n.layout[0].key,
        { parentPanelNode: j } = B(u),
        h = j?.useTitle?.(),
        m = a ?? h;
    return null == j || null == m
        ? null
        : (0, l.jsx)(D, {
              role: "link",
              "aria-label": h,
              title: m,
              leadingElement: null != o ? (0, l.jsx)(eD, { decoration: o }) : null,
              description: c,
              trailingElement: (0, l.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != d && (0, l.jsx)(eP, { decoration: d }), (0, l.jsx)(A.u, {})],
              }),
              onClick: () => C.A.navigate(u),
          });
}
var eF = t(17928),
    eG = t(868285),
    eU = t(871682),
    eV = t(689175),
    ez = t(761508),
    eK = t(823092),
    eM = t(397274),
    e$ = t(707182);
function eW(e) {
    let { notice: n, children: t } = e,
        { showNotice: i, handleStoreUpdate: s } = (0, eK.L_)(),
        a = n?.stores;
    r.useEffect(() => {
        if (null != a) {
            let e = new eF.ru(a, () => {
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
    let c = r.useMemo(() => {
        if (null == n || !i) return null;
        let { element: e } = n;
        return (0, l.jsx)(eU.F, { className: e$.lm, children: (0, l.jsx)(e, {}) });
    }, [n, i]);
    return (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(eG.F, { component: "div", children: c })] });
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
    let { notice: n, children: t, useObscuredNotice: i } = e,
        s = r.useRef(null),
        a = i?.();
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
                          ref: s,
                          children: (0, l.jsx)(ec.xp, { containerRef: s, children: t }),
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
                            t !== n.length - 1 && (0, l.jsx)(eB.c, { className: e$.yF }),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function eH(e) {
    let { panelKey: n, layout: t, notice: i, decoration: s, useObscuredNotice: a } = e,
        c =
            o.A.useState((e) => {
                let { currentTabKeys: t } = e;
                return t.get(n);
            }) ?? t[0].key;
    r.useEffect(() => {
        let e = o.A.getField("currentTabKeys");
        if (t.some((t) => t.key === e.get(n))) return;
        let l = new Map(e);
        l.set(n, t[0].key), o.A.setState({ currentTabKeys: l });
    }, [t, n]);
    let d = t.find((e) => e.key === c) ?? t[0];
    return (0, l.jsxs)(
        eq,
        {
            notice: i,
            useObscuredNotice: a,
            children: [
                (0, l.jsx)(ez.V, {
                    className: e$.$H,
                    selectedItem: c,
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
                        return (0, l.jsx)(ez.V.Item, { id: n, children: t() }, n);
                    }),
                }),
                (0, l.jsx)(ez.V.Panel, { id: c, children: (0, l.jsx)(eY, { layout: d.layout, decoration: s }) }),
            ],
        },
        n,
    );
}
function eQ(e) {
    let { panelKey: n, notice: t, decoration: r, layout: i, useObscuredNotice: s } = e;
    return (0, l.jsx)(
        eq,
        { notice: t, useObscuredNotice: s, children: (0, l.jsx)(eY, { layout: i, decoration: r }) },
        n,
    );
}
function eJ(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, i.zY)(t))
        return (0, l.jsx)(eH, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    if ((0, i.Iu)(t))
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
function e6(e) {
    let { node: n } = e;
    return (0, l.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, l.jsx)(R.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: e0.D,
                children: eR.intl.string(eR.t.rPREPG),
            }),
            n.layout.map((e) => (0, l.jsx)(e2, { node: e }, e.key)),
        ],
    });
}
var e1 = t(626396);
let e8 = r.memo(function (e) {
    let { node: n } = e;
    return (0, l.jsx)("div", { className: e1.l, children: n.layout.map((e) => (0, l.jsx)(e2, { node: e }, e.key)) });
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
        case i.Z6.ROOT:
        case i.Z6.SECTION:
        case i.Z6.SIDEBAR_ITEM:
        case i.Z6.TAB_ITEM:
            throw Error(`${t.type} nodes should never be rendered directly`);
        case i.Z6.PANEL:
            return (0, l.jsx)(eJ, { node: t });
        case i.Z6.LIST:
            return (0, l.jsx)(ew, { node: t });
        case i.Z6.FIELD_SET:
            return (0, l.jsx)(eO, { node: t });
        case i.Z6.RELATED:
            return (0, l.jsx)(e6, { node: t });
        case i.Z6.CATEGORY:
            return (0, l.jsx)(eS, { node: t });
        case i.Z6.ACCORDION:
            return (0, l.jsx)(ex, { node: t });
        case i.Z6.SPLIT:
            return (0, l.jsx)(e8, { node: t });
        case i.Z6.TOGGLE:
            return (0, l.jsx)(en, { node: t });
        case i.Z6.STATIC:
            return (0, l.jsx)(Q, { node: t });
        case i.Z6.BUTTON:
            return (0, l.jsx)(S, { node: t });
        case i.Z6.SELECT:
            return (0, l.jsx)(q, { node: t });
        case i.Z6.RADIO:
            return (0, l.jsx)(W, { node: t });
        case i.Z6.SLIDER:
            return (0, l.jsx)(H, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, l.jsx)(z, { node: t });
        case i.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, l.jsx)(eL, { node: t });
        case i.Z6.CUSTOM:
            return (0, l.jsx)(h, { children: (0, l.jsx)(t.Component, {}) });
    }
}
function e2(e) {
    let { node: n } = e;
    return n.type === i.Z6.PANEL
        ? (0, l.jsx)(e3, { node: n })
        : (0, l.jsx)(u, { node: n, children: (0, l.jsx)(e3, { node: n }) });
}
