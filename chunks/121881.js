t.d(n, { A: () => e3 });
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
        (0, l.jsx)("div", { "data-nav-anchor-key": n.key, className: a()(u.k, s && u.j), children: t })
    );
}
var x = t(331322);
function j(e) {
    let { children: n } = e;
    return (0, l.jsx)(x.B, { gap: 0, padding: { left: "sm", right: "sm", top: "xs", bottom: "xs" }, children: n });
}
var h = t(834730),
    m = t(452027),
    f = t(821609),
    p = t(933297),
    g = t(954571),
    y = t(89381),
    v = t(652215);
function b(e) {
    return r.useCallback(() => {
        let n = e;
        for (; "parent" in n && null != n.parent; ) n = n.parent;
        let t = "analyticsKey" in e ? e.analyticsKey : e.key;
        null != t &&
            g.default.track(v.HAw.UI_SETTING_INTERACTED, {
                key: t,
                setting_type: n.analyticsKey ?? n.key,
                search_session_id: y.A.getSearchSessionId(),
            });
    }, [e]);
}
function N(e) {
    let { trailingContent: n } = e;
    return (0, l.jsx)(n.StronglyDiscouragedCustomComponent, {});
}
function k(e) {
    let { trailingContent: n } = e,
        t = n.useText();
    return (0, l.jsx)(h.E, { variant: "text-md/medium", children: t });
}
function E(e) {
    let { trailingContent: n } = e;
    switch (n.type) {
        case p._1.TEXT:
            return (0, l.jsx)(k, { trailingContent: n });
        case p._1.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(N, { trailingContent: n });
    }
}
function T(e) {
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
        [h, p] = r.useState(!1),
        g = b(n),
        y = s(),
        v = a?.(),
        N = t(),
        k = i?.(),
        T = o?.(),
        S = c?.(),
        A = u?.();
    return (0, l.jsx)(j, {
        children: (0, l.jsx)(m.D, {
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
                    null != A && (0, l.jsx)(E, { trailingContent: A }),
                    (0, l.jsx)(f.$, {
                        onClick: () => {
                            g();
                            let e = d();
                            e instanceof Promise && (p(!0), e.finally(() => p(!1)));
                        },
                        text: N,
                        "aria-label": k,
                        variant: T,
                        disabled: S,
                        loading: h,
                    }),
                ],
            }),
        }),
    });
}
var S = t(881636),
    A = t(272053),
    C = t(176524),
    I = t(199966);
function O(e) {
    let { accessibleDirectory: n } = (0, I._)(),
        t = n.entry(e);
    return {
        parentPanelNode: t?.parentPanelKey != null ? n.get(t.parentPanelKey) : void 0,
        parentSidebarItemNode: t?.parentSidebarItemKey != null ? n.get(t.parentSidebarItemKey) : void 0,
    };
}
var R = t(534514),
    B = t(890856),
    _ = t(349902);
function D(e) {
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
            className: a()(_.EA, null != u && _.vk),
            ref: n,
            style: d,
            children: [
                null != t && (0, l.jsx)("div", { className: _._y, children: t }),
                (0, l.jsxs)("div", {
                    className: _.jw,
                    children: [
                        (0, l.jsx)("div", {
                            className: _.eg,
                            children: (0, l.jsx)(R.D, {
                                variant: "heading-md/medium",
                                color: "text-strong",
                                children: s,
                            }),
                        }),
                        null != i && (0, l.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: i }),
                    ],
                }),
                null != r && (0, l.jsx)("div", { className: _.EY, children: r }),
            ],
        });
    return null != u
        ? (0, l.jsx)(B.s, { onClick: u, "aria-label": o, buttonProps: null != c ? { role: c } : void 0, children: x })
        : x;
}
var w = t(573435),
    Z = t(959166);
function P(e) {
    let { sizePx: n } = e,
        t = 0.5 / n,
        r = `translate(${t}, ${t}) scale(${1 - 2 * t})`;
    return (0, l.jsx)("svg", {
        className: Z.v9,
        width: n,
        height: n,
        viewBox: "0 0 1 1",
        "aria-hidden": !0,
        children: (0, l.jsx)("path", {
            d: w.Vf,
            fill: "none",
            stroke: "var(--border-subtle)",
            strokeWidth: 1 / n,
            transform: r,
        }),
    });
}
function L(e) {
    let { icon: n, sizePx: t, positionClassName: s } = e,
        i = r.useMemo(() => ({ width: `${t}px`, height: `${t}px` }), [t]);
    switch (n.shape) {
        case p.NF.SQUIRCLE:
            return (0, l.jsxs)("div", {
                className: a()(Z.Gt, s),
                style: i,
                children: [
                    (0, l.jsx)(w.Ay, {
                        mask: w.Ay.Masks.SQUIRCLE,
                        width: t,
                        height: t,
                        children: (0, l.jsx)("div", { className: Z.pU, style: i, children: n.icon }),
                    }),
                    (0, l.jsx)(P, { sizePx: t }),
                ],
            });
        case p.NF.ROUNDED:
            return (0, l.jsx)("div", { className: a()(Z.Gt, s, Z.Nb), style: i, children: n.icon });
    }
}
function F(e) {
    let { decoration: n } = e,
        t = n.useIcons();
    if (null == t) return null;
    let { frontIcon: r, backIcon: s } = t;
    return (0, l.jsxs)("div", {
        className: Z.VD,
        "aria-hidden": !0,
        children: [
            null != s && (0, l.jsx)(L, { icon: s, sizePx: 40, positionClassName: Z.j2 }),
            (0, l.jsx)(L, { icon: r, sizePx: 48, positionClassName: Z.hU }),
        ],
    });
}
function G(e) {
    let { decoration: n } = e;
    if (n.type === p.wF.STACKED_ICONS) return (0, l.jsx)(F, { decoration: n });
}
var U = t(869376);
function V(e) {
    let { node: n } = e,
        { destinationKey: t, useTrailingDecoration: r, useTitle: s, useSubtitle: i } = n,
        a = r?.(),
        o = i?.(),
        { parentPanelNode: c, parentSidebarItemNode: u } = O(t),
        d = s?.(),
        x = c?.useTitle?.(),
        j = d ?? x,
        h = b(n);
    if (null == c || null == j) return null;
    let m = null != u ? u.icon : void 0;
    return (0, l.jsx)(D, {
        role: "link",
        "aria-label": x,
        title: j,
        description: o,
        leadingElement: null != m && (0, l.jsx)(C.A, { Icon: m }),
        trailingElement: (0, l.jsxs)("div", {
            className: U.M,
            children: [null != a && (0, l.jsx)(G, { decoration: a }), (0, l.jsx)(S.u, {})],
        }),
        onClick: () => {
            A.A.navigate(t, { animateSidebarScroll: !1 }), h();
        },
    });
}
var K = t(144228);
t(321073);
var z = t(771781);
function M(e) {
    let { persistentBadge: n, dismissibleBadges: t } = e;
    return (function (e) {
        let { persistentBadgeType: n, dismissibleBadgeType: t } = e;
        return "beta" === n ? "beta" : (t ?? n);
    })({
        persistentBadgeType: n?.badgeType === p.Xi.BETA ? "beta" : void 0,
        dismissibleBadgeType: (function (e) {
            let n = r.useMemo(() => {
                let n = [];
                return (
                    e?.forEach((e) => {
                        let { badgeType: t, dismissibleContent: l } = e;
                        t === p.Xi.NEW && n.push(l);
                    }),
                    n
                );
            }, [e]);
            if ((0, z.uW)(n)) return "new";
        })(t),
    });
}
function $(e) {
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
        h = a(),
        m = M({ persistentBadge: o?.(), dismissibleBadges: c?.() }),
        f = b(n);
    return (0, l.jsx)(j, {
        children: (0, l.jsx)(K.z, {
            label: u,
            description: d,
            options: h,
            value: x,
            badge: m,
            onChange: (e) => {
                f(), r(e);
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
            usePersistentBadge: h,
            getDismissibleBadges: m,
        } = n,
        f = t(),
        p = s?.(),
        g = i(),
        y = o(),
        v = M({ persistentBadge: h?.(), dismissibleBadges: m?.() }),
        N = b(n),
        k = r.useMemo(() => {
            var e, n;
            return {
                selectionMode: x,
                value: g,
                onSelectionChange:
                    ((e = a),
                    (n = N),
                    (t) => {
                        n(), e(t);
                    }),
            };
        }, [x, g, a, N]);
    return (0, l.jsx)(j, {
        children: (0, l.jsx)(W.l, {
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
var q = t(106236);
function Y(e) {
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
            useExternalValue: m,
            onValueRender: f,
            asValueChanges: p,
            markers: g,
            onMarkerRender: y,
            stickToMarkers: v,
            fieldLayout: N,
            usePersistentBadge: k,
            getDismissibleBadges: E,
        } = n,
        [T] = r.useState(() => s()),
        S = m?.(),
        A = c(),
        C = u?.(),
        I = d?.(),
        O = x?.(),
        R = o?.(),
        B = M({ persistentBadge: k?.(), dismissibleBadges: E?.() }),
        _ = b(n);
    return (0, l.jsxs)(j, {
        children: [
            (0, l.jsx)(q.A, {
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
                layout: N,
                badge: B,
            }),
            null != I && (0, l.jsx)(h.E, { variant: "text-xs/normal", color: "text-muted", children: I }),
        ],
    });
}
function H(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: r } = n,
        s = t(),
        i = r?.();
    return (0, l.jsx)(D, { title: s, description: i });
}
var Q = t(243721),
    J = t(512950);
function ee(e) {
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
        h = i?.(),
        m = t(),
        f = a?.() ?? !1,
        p = o?.(),
        g = M({ persistentBadge: c?.(), dismissibleBadges: d?.() }),
        y = b(n);
    return (0, l.jsxs)(j, {
        children: [
            (0, l.jsx)(Q.d, {
                label: x,
                description: h,
                badge: g,
                checked: m,
                hasIcon: u,
                onChange: (e) => {
                    y(), r(e);
                },
                disabled: f,
            }),
            f && null != p ? (0, l.jsx)(J.p, { messageType: J.Y.WARNING, children: p }) : null,
        ],
    });
}
var en = t(735438),
    et = t(770178),
    el = t(353068),
    er = t(197867),
    es = t(138017),
    ei = t(661531),
    ea = t(187322),
    eo = t(523880);
function ec(e) {
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
        (0, l.jsxs)(el.EN, {
            ref: n,
            isExpanded: i,
            onExpandedChange: o,
            children: [
                (0, l.jsx)(D, {
                    ref: d,
                    style: null != j ? { minHeight: j } : void 0,
                    title: t,
                    "aria-label": t,
                    description: m ? void 0 : s,
                    trailingElement: (0, l.jsx)(ea.vN, {
                        children: (0, l.jsx)(er.$, {
                            slot: "trigger",
                            className: eo.bW,
                            children: (0, l.jsx)(es.j, {
                                className: a()(eo.Kk, { [eo.kX]: !i }),
                                color: ei.A.colors.ICON_STRONG,
                            }),
                        }),
                    }),
                    onClick: () => o(!i),
                }),
                (0, l.jsx)(el.kS, {
                    className: a()(eo.nd, { [eo.t5]: !u }),
                    children: (0, l.jsx)(x.B, { gap: 16, padding: { top: 16 }, children: c }),
                }),
            ],
        })
    );
}
function eu(e) {
    return c.A.getField("requestAccordionOpenKey") === e.key;
}
let ed = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, layout: s, useCollapsedSubtitle: i } = n,
        [a, o] = r.useState(!0),
        [u, d] = r.useState(() => eu(n)),
        x = r.useRef(u),
        j = r.useRef(eu(n) ? "navigation" : null);
    r.useEffect(
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
    let h = r.useCallback(
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
        m = r.useMemo(() => (0, en.debounce)(h, 50), [h]),
        f = (0, et.w)(m),
        p = t?.(u),
        g = i?.(),
        y = b(n);
    return (0, l.jsx)(ec, {
        ref: f,
        title: p,
        collapsedSubtitle: g,
        isExpanded: u,
        onExpandedChange: (e) => {
            (j.current = "user"), y(), d(e);
        },
        animate: a,
        children: s.map((e) => (0, l.jsx)(e3, { node: e }, e.key)),
    });
});
function ex(e) {
    let { decoration: n } = e,
        { type: t, id: r, ...s } = n;
    return (0, l.jsx)(f.$, { variant: "secondary", ...s });
}
function ej(e) {
    let { decoration: n } = e,
        t = n.button;
    return (0, l.jsx)(t, {});
}
function eh(e) {
    let { decoration: n } = e;
    return (0, l.jsx)(x.B, {
        direction: "horizontal",
        gap: "sm",
        fullWidth: !1,
        children: n.buttons.map((e) => {
            switch (e.type) {
                case p.UV.BUTTON:
                    return (0, l.jsx)(ex, { decoration: e }, e.id);
                case p.UV.STRONGLY_DISCOURAGED_CUSTOM:
                    return (0, l.jsx)(ej, { decoration: e }, e.id);
            }
        }),
    });
}
function em(e) {
    let { decoration: n } = e;
    return null == n ? null : n.type === p.WX.BUTTON_GROUP ? (0, l.jsx)(eh, { decoration: n }) : void 0;
}
function ef(e) {
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
                            (0, l.jsx)(R.D, { variant: "heading-xl/normal", color: "text-strong", children: n }),
                            null != t && (0, l.jsx)(t, { color: ei.A.colors.INTERACTIVE_ICON_DEFAULT, size: "md" }),
                        ],
                    }),
                    null != r && (0, l.jsx)(h.E, { variant: "text-sm/normal", color: "text-subtle", children: r }),
                ],
            }),
            (0, l.jsx)(em, { decoration: s }),
        ],
    });
}
var ep = t(683071),
    eg = t(964486),
    ey = t(562248);
function ev(e) {
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
    return (0, l.jsx)(f.$, { variant: "secondary", text: i, onClick: a, loading: t, disabled: t });
}
function eb(e) {
    let { notice: n } = e,
        { noticeType: t, useTitle: r, useText: s, button: i } = n,
        a = r?.(),
        o = s();
    (0, eg.Ay)(() => {
        n.trackView?.();
    });
    let c = (0, l.jsxs)(x.B, {
        direction: "vertical",
        gap: "xs",
        children: [
            null != a && (0, l.jsx)(R.D, { variant: "heading-md/medium", children: a }),
            (0, l.jsx)("span", { children: o }),
        ],
    });
    return (0, l.jsx)(ep.w, {
        type: t,
        children: (0, l.jsxs)(x.B, {
            direction: "horizontal",
            align: "center",
            justify: "space-between",
            gap: "xs",
            children: [c, null != i && (0, l.jsx)(ev, { button: i })],
        }),
    });
}
function eN(e) {
    let { notice: n } = e,
        { notice: t } = n;
    return (0, l.jsx)(t, {});
}
function ek(e) {
    let { notice: n } = e;
    switch (n.type) {
        case p.lT.INLINE_NOTICE:
            return (0, l.jsx)(eb, { notice: n });
        case p.lT.STRONGLY_DISCOURAGED_CUSTOM:
            return (0, l.jsx)(eN, { notice: n });
    }
}
function eE(e) {
    let { notice: n } = e;
    return (0, l.jsx)("div", { className: ey.l, children: (0, l.jsx)(ek, { notice: n }) });
}
let eT = r.memo(function (e) {
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
            null != u && (0, l.jsx)(ef, { title: u, icon: r, subtitle: d, decoration: h }),
            (0, l.jsx)("div", {
                "data-settings-category-key": m ? n.key : void 0,
                "aria-hidden": !0,
                style: { height: 1 },
            }),
            (0, l.jsxs)(x.B, {
                gap: "xs",
                children: [
                    null != j && (0, l.jsx)(eE, { notice: j }),
                    a.map((e) => (0, l.jsx)(e3, { node: e }, e.key)),
                ],
            }),
        ],
    });
});
var eS = t(140735),
    eA = t(681310);
function eC(e) {
    let { title: n, subtitle: t, isHiddenVisually: r } = e;
    return null == n || "" === n
        ? null
        : r
          ? (0, l.jsx)(eS.A, { tag: "legend", children: n })
          : (0, l.jsx)(h.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(eA.DD, { [eA.h0]: null != t && "" !== t }),
                children: n,
            });
}
let eI = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: s, layout: i, variant: a = "default", isTitleHiddenVisually: o } = n,
        c = t(),
        u = s?.(),
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
            (0, l.jsx)(eC, { title: c, subtitle: u, isHiddenVisually: o }),
            m
                ? (0, l.jsx)(h.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      id: d,
                      className: eA.VA,
                      children: u,
                  })
                : null,
            (0, l.jsx)(x.B, {
                gap: f,
                padding: { top: j && !o ? 16 : 0 },
                children: i.map((e) => (0, l.jsx)(e3, { node: e }, e.key)),
            }),
        ],
    });
});
var eO = t(46373),
    eR = t(985018),
    eB = t(339102);
function e_(e) {
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
                ? eR.intl.formatToPlainString(eR.t["3SHL+d"], { count: n })
                : eR.intl.formatToPlainString(eR.t["8JRFyZ"], { count: n })),
        m = u?.();
    return (0, l.jsxs)(x.B, {
        gap: 8,
        children: [
            d.map((e, n) =>
                (0, l.jsxs)(
                    r.Fragment,
                    { children: [(0, l.jsx)(e3, { node: e }), n !== d.length - 1 && (0, l.jsx)(eO.A, {})] },
                    e.key,
                ),
            ),
            j.length > 0 &&
                (0, l.jsxs)("div", {
                    className: eB.CT,
                    children: [
                        (0, l.jsx)(eO.A, { className: eB.mn }),
                        (0, l.jsx)(ec, {
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
                                                (0, l.jsx)(e3, { node: e }),
                                                n !== j.length - 1 && (0, l.jsx)(eO.A, {}),
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
    if (n.type === p.Xy.ICON)
        return (0, l.jsx)(C.A, { Icon: n.icon, color: n.color, backgroundColor: n.backgroundColor });
}
function ew(e) {
    let { decoration: n } = e,
        t = n.useText();
    return null == t ? null : (0, l.jsx)(h.E, { variant: "text-md/medium", children: t });
}
function eZ(e) {
    let { decoration: n } = e;
    if (n.type === p.xn.TEXT) return (0, l.jsx)(ew, { decoration: n });
}
function eP(e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: r, useLeadingDecoration: s, useTrailingDecoration: i } = n,
        a = t?.(),
        o = r?.(),
        c = s?.(),
        u = i?.(),
        d = n.layout[0].key,
        { parentPanelNode: j } = O(d),
        h = j?.useTitle?.(),
        m = a ?? h;
    return null == j || null == m
        ? null
        : (0, l.jsx)(D, {
              role: "link",
              "aria-label": h,
              title: m,
              leadingElement: null != c ? (0, l.jsx)(eD, { decoration: c }) : null,
              description: o,
              trailingElement: (0, l.jsxs)(x.B, {
                  direction: "horizontal",
                  align: "center",
                  justify: "end",
                  gap: "sm",
                  children: [null != u && (0, l.jsx)(eZ, { decoration: u }), (0, l.jsx)(S.u, {})],
              }),
              onClick: () => A.A.navigate(d),
          });
}
var eL = t(17928),
    eF = t(73939),
    eG = t(871682),
    eU = t(689175),
    eV = t(761508),
    eK = t(823092),
    ez = t(397274),
    eM = t(707182);
function e$(e) {
    let { notice: n, children: t } = e,
        { showNotice: s, handleStoreUpdate: i } = (0, eK.L_)(),
        a = n?.stores;
    r.useEffect(() => {
        if (null != a) {
            let e = new eL.ru(a, () => {
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
        return (0, l.jsx)(eG.F, { className: eM.lm, children: (0, l.jsx)(e, {}) });
    }, [n, s]);
    return (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(eF.F, { component: "div", children: o })] });
}
function eW(e) {
    let { decoration: n } = e,
        t = n.component;
    return (0, l.jsx)("div", {
        className: a()(eM.oK, { [eM.qf]: n.sticky }),
        "data-settings-panel-sticky-decoration": n.sticky || void 0,
        children: (0, l.jsx)(t, {}),
    });
}
function eX(e) {
    let { notice: n, children: t, useObscuredNotice: s } = e,
        i = r.useRef(null),
        a = s?.();
    return null != a
        ? (0, l.jsx)(a, {})
        : (0, l.jsx)(e$, {
              notice: n,
              children: (0, l.jsxs)(eU.Gt, {
                  className: eM.XG,
                  ref: (e) => {
                      ez.A.setPanelScrollerRef(e);
                  },
                  children: [
                      (0, l.jsx)("div", {
                          className: eM.nd,
                          ref: i,
                          children: (0, l.jsx)(ea.xp, { containerRef: i, children: t }),
                      }),
                      (0, l.jsx)("div", { className: eM.iS, "data-panel-bottom": !0 }),
                  ],
              }),
          });
}
function eq(e) {
    let { layout: n, decoration: t } = e;
    return (0, l.jsxs)("div", {
        className: eM.LZ,
        children: [
            null != t && (0, l.jsx)(eW, { decoration: t }),
            n.map((e, t) =>
                (0, l.jsxs)(
                    r.Fragment,
                    {
                        children: [
                            (0, l.jsx)(e3, { node: e }),
                            t !== n.length - 1 && (0, l.jsx)(eO.A, { className: eM.yF }),
                        ],
                    },
                    e.key,
                ),
            ),
        ],
    });
}
function eY(e) {
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
        eX,
        {
            notice: s,
            useObscuredNotice: a,
            children: [
                (0, l.jsx)(eV.V, {
                    className: eM.$H,
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
                        return (0, l.jsx)(eV.V.Item, { id: n, children: t() }, n);
                    }),
                }),
                (0, l.jsx)(eV.V.Panel, { id: o, children: (0, l.jsx)(eq, { layout: u.layout, decoration: i }) }),
            ],
        },
        n,
    );
}
function eH(e) {
    let { panelKey: n, notice: t, decoration: r, layout: s, useObscuredNotice: i } = e;
    return (0, l.jsx)(
        eX,
        { notice: t, useObscuredNotice: i, children: (0, l.jsx)(eq, { layout: s, decoration: r }) },
        n,
    );
}
function eQ(e) {
    let { node: n } = e,
        { layout: t } = n;
    if ((0, s.zY)(t))
        return (0, l.jsx)(eY, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    if ((0, s.Iu)(t))
        return (0, l.jsx)(eH, {
            panelKey: n.key,
            notice: n.notice,
            decoration: n.decoration,
            useObscuredNotice: n.useObscuredNotice,
            layout: t,
        });
    throw Error("Panels must have a list of categories or a list of tabs");
}
var eJ = t(722899);
function e0(e) {
    let { node: n } = e;
    return (0, l.jsxs)(x.B, {
        gap: 8,
        padding: { top: 8 },
        children: [
            (0, l.jsx)(R.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                className: eJ.D,
                children: eR.intl.string(eR.t.rPREPG),
            }),
            n.layout.map((e) => (0, l.jsx)(e3, { node: e }, e.key)),
        ],
    });
}
var e1 = t(626396);
let e6 = r.memo(function (e) {
    let { node: n } = e;
    return (0, l.jsx)("div", { className: e1.l, children: n.layout.map((e) => (0, l.jsx)(e3, { node: e }, e.key)) });
});
function e8(e) {
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
            return (0, l.jsx)(eQ, { node: t });
        case s.Z6.LIST:
            return (0, l.jsx)(e_, { node: t });
        case s.Z6.FIELD_SET:
            return (0, l.jsx)(eI, { node: t });
        case s.Z6.RELATED:
            return (0, l.jsx)(e0, { node: t });
        case s.Z6.CATEGORY:
            return (0, l.jsx)(eT, { node: t });
        case s.Z6.ACCORDION:
            return (0, l.jsx)(ed, { node: t });
        case s.Z6.SPLIT:
            return (0, l.jsx)(e6, { node: t });
        case s.Z6.TOGGLE:
            return (0, l.jsx)(ee, { node: t });
        case s.Z6.STATIC:
            return (0, l.jsx)(H, { node: t });
        case s.Z6.BUTTON:
            return (0, l.jsx)(T, { node: t });
        case s.Z6.SELECT:
            return (0, l.jsx)(X, { node: t });
        case s.Z6.RADIO:
            return (0, l.jsx)($, { node: t });
        case s.Z6.SLIDER:
            return (0, l.jsx)(Y, { node: t });
        case s.Z6.NAVIGATOR:
            return (0, l.jsx)(V, { node: t });
        case s.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, l.jsx)(eP, { node: t });
        case s.Z6.CUSTOM:
            return (0, l.jsx)(j, { children: (0, l.jsx)(t.Component, {}) });
    }
}
function e3(e) {
    let { node: n } = e;
    return n.type === s.Z6.PANEL
        ? (0, l.jsx)(e8, { node: n })
        : (0, l.jsx)(d, { node: n, children: (0, l.jsx)(e8, { node: n }) });
}
