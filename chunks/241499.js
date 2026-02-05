"use strict";
n.d(t, { _: () => I });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(296489),
    o = n.n(a),
    d = n(131346),
    c = n(522437),
    u = n(311907),
    m = n(397927),
    g = n(355622),
    x = n(408018),
    h = n(133343),
    _ = n(734057),
    A = n(808728),
    p = n(557420),
    f = n(596484),
    j = n(260197),
    N = n(652215),
    E = n(985018),
    b = n(828771);
let T = "RULE";
function C(e) {
    let {
            rule: t,
            rulesChannel: n,
            index: l,
            onChange: a,
            onKeyDown: o,
            onClear: u,
            onRuleReorder: _,
            isDropHovered: A,
            focused: p,
            onFocus: f,
            previewEnabled: N,
            isDragEnabled: C,
            disabled: I,
        } = e,
        v = s.useRef(null),
        S = s.useRef(null),
        [{ textValue: y, richValue: R }, O] = s.useState((0, x.ur)(t.value)),
        [, G, L] = (0, d.i)({
            type: T,
            item: { rule: t, index: l },
            end: (e, t) => {
                null == e || t.didDrop() || _(e.rule, null, !0);
            },
        }),
        [, D] = (0, c.H)({
            accept: T,
            hover: (e, t) => {
                let { index: n } = e,
                    i = v.current?.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == i || null == s) return;
                let r = (i.bottom - i.top) / 2,
                    a = s.y - i.top;
                (n < l && a < r) || (n > l && a > r) || _(e.rule, l, !1);
            },
            drop: (e) => {
                _(e.rule, l, !0);
            },
        });
    if (
        (s.useLayoutEffect(
            () => (
                G(S),
                L(D(v)),
                () => {
                    G(null), D(null);
                }
            ),
            [G, D, L],
        ),
        s.useEffect(() => {
            "" !== t.value && "" === y && O((0, x.ur)(t.value));
        }, [t.value, y]),
        null == n)
    )
        return null;
    let M = "" !== t.value ? t.value : t.id;
    return (0, i.jsx)("div", {
        ref: v,
        className: r()(b.XQ, { [b.cB]: A }),
        "data-dnd-name": M,
        children: (0, i.jsxs)("div", {
            className: b.I6,
            children: [
                (0, i.jsx)(m.DUT, {
                    onMouseDown: () => f(l),
                    children: (0, i.jsx)(h.Ay, {
                        innerClassName: b.oQ,
                        type: g.oU.RULES_INPUT,
                        textValue: y,
                        richValue: R,
                        channel: n,
                        placeholder: E.intl.string(E.t.BRkD41),
                        focused: p,
                        onChange: (e, n, i) => {
                            let s = I ? t.value : n;
                            s.length > j.pc && (s = s.slice(0, j.pc)),
                                n !== s && ((n = s), (i = (0, x.x7)(s))),
                                a(n),
                                O({ textValue: n, richValue: i });
                        },
                        onKeyDown: o,
                        canMentionChannels: N,
                        canMentionRoles: N,
                        maxCharacterCount: j.pc,
                        onSubmit: () => Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: b.mt,
                    children: (0, i.jsx)(m.K0, {
                        size: "sm",
                        variant: "icon-only",
                        icon: m.aXh,
                        "aria-label": E.intl.string(E.t.VkKicb),
                        onClick: u,
                    }),
                }),
                (0, i.jsx)("div", {
                    ref: S,
                    className: b.cK,
                    "data-dnd-name": M,
                    children: C && (0, i.jsx)(m.WP0, { size: "xs", color: "currentColor", className: b.co }),
                }),
            ],
        }),
    });
}
function I(e) {
    let { rules: t, setRules: n, guild: l, disabled: r } = e,
        a = l.rulesChannelId,
        d = l.features.has(N.GuildFeatures.PREVIEW_ENABLED),
        c = (0, u.bG)([_.A], () => (null != a ? _.A.getChannel(a) : null)),
        g = (0, u.bG)([A.Ay], () => A.Ay.getDefaultChannel(l.id)),
        [x, h] = s.useState(null),
        [T, I] = s.useState(null),
        v = s.useCallback(
            (e) => {
                if (!r && t.length !== j.yN)
                    if (null != e && "" === t[t.length - 1].value) {
                        let i = [...t];
                        (i[t.length - 1] = { ...i[t.length - 1], value: e }), n(i), I(i.length - 1);
                    } else n([...t, { id: o()(), value: e ?? "" }]), I(t.length);
            },
            [r, t, n],
        ),
        S = s.useCallback(() => {
            r || v(void 0);
        }, [v, r]),
        y = s.useCallback(
            (e, i) => {
                if (r) return;
                let s = [...t];
                (s[i] = { ...s[i], value: e }), n(s);
            },
            [r, t, n],
        ),
        R = s.useCallback(
            (e, i, s) => {
                if (r || null == t) return;
                let l = t.indexOf(e);
                if (null != i && i !== l) {
                    let s = [...t];
                    s.splice(l, 1), s.splice(i, 0, e), n(s);
                }
                s ? null !== x && h(null) : i !== x && h(i);
            },
            [r, x, t, n],
        ),
        O = t.length === j.yN,
        G = s.useMemo(() => {
            let e = O ? E.intl.formatToPlainString(E.t.tU718E, { number: j.yN }) : void 0;
            return [
                {
                    text: E.intl.string(E.t.DXq2od),
                    onClick: () => v(E.intl.string(E.t.XudkSq)),
                    disabled: O || r,
                    tooltipText: e,
                },
                {
                    text: E.intl.string(E.t.nSqTjM),
                    onClick: () => v(E.intl.string(E.t.np91jA)),
                    disabled: O || r,
                    tooltipText: e,
                },
                {
                    text: E.intl.string(E.t.AtRxsO),
                    onClick: () => v(E.intl.string(E.t.PNIDDJ)),
                    disabled: O || r,
                    tooltipText: e,
                },
                {
                    text: E.intl.string(E.t["0K5NJt"]),
                    onClick: () => v(E.intl.string(E.t.HolIDy)),
                    disabled: O || r,
                    tooltipText: e,
                },
            ];
        }, [v, r, O]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: b.$W,
                children: t.map((e, s) =>
                    (0, i.jsx)(
                        C,
                        {
                            rulesChannel: c ?? g,
                            rule: e,
                            index: s,
                            onChange: (e) => y(e, s),
                            onClear: () =>
                                ((e) => {
                                    if (r) return;
                                    let i = [...t.slice(0, e), ...t.slice(e + 1)];
                                    n(0 === i.length ? [{ id: o()(), value: "" }] : i);
                                })(s),
                            onRuleReorder: R,
                            isDropHovered: s === x,
                            focused: s === T,
                            onFocus: I,
                            previewEnabled: d ?? !0,
                            isDragEnabled: !r && t.length > 1,
                            disabled: r,
                        },
                        e.id,
                    ),
                ),
            }),
            !O && (0, i.jsx)(p.d, { text: E.intl.string(E.t.Cq5JuR), onClick: S, disabled: r }),
            (0, i.jsx)(m.Heading, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: b.V7,
                children: E.intl.string(E.t.XHWj8W),
            }),
            (0, i.jsx)(f.z, { pills: G, pillClassName: b.Io }),
        ],
    });
}
