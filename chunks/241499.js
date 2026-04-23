n.d(t, { _: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(296489),
    o = n.n(r),
    d = n(312742),
    c = n(295868),
    u = n(17928),
    m = n(939249),
    g = n(408278),
    h = n(285796),
    x = n(772838),
    _ = n(534514),
    p = n(355622),
    E = n(408018),
    f = n(201349),
    j = n(734057),
    N = n(808728),
    A = n(557420),
    C = n(596484),
    I = n(260197),
    b = n(652215),
    S = n(985018),
    v = n(243518);
let T = "RULE";
function y(e) {
    let {
            rule: t,
            rulesChannel: n,
            index: s,
            onChange: r,
            onKeyDown: o,
            onClear: u,
            onRuleReorder: _,
            isDropHovered: j,
            focused: N,
            onFocus: A,
            previewEnabled: C,
            isDragEnabled: b,
            disabled: y,
        } = e,
        R = l.useRef(null),
        L = l.useRef(null),
        [{ textValue: D, richValue: O }, G] = l.useState((0, E.ur)(t.value)),
        [, M, k] = (0, d.i)({
            type: T,
            item: { rule: t, index: s },
            end: (e, t) => {
                null == e || t.didDrop() || _(e.rule, null, !0);
            },
        }),
        [, U] = (0, c.H)({
            accept: T,
            hover: (e, t) => {
                let { index: n } = e,
                    i = R.current?.getBoundingClientRect(),
                    l = t.getClientOffset();
                if (null == i || null == l) return;
                let a = (i.bottom - i.top) / 2,
                    r = l.y - i.top;
                (n < s && r < a) || (n > s && r > a) || _(e.rule, s, !1);
            },
            drop: (e) => {
                _(e.rule, s, !0);
            },
        });
    if (
        (l.useLayoutEffect(
            () => (
                M(L),
                k(U(R)),
                () => {
                    M(null), U(null);
                }
            ),
            [M, U, k],
        ),
        l.useEffect(() => {
            "" !== t.value && "" === D && G((0, E.ur)(t.value));
        }, [t.value, D]),
        null == n)
    )
        return null;
    let w = "" !== t.value ? t.value : t.id;
    return (0, i.jsx)("div", {
        ref: R,
        className: a()(v.XQ, { [v.cB]: j }),
        "data-dnd-name": w,
        children: (0, i.jsxs)("div", {
            className: v.I6,
            children: [
                (0, i.jsx)(m.D, {
                    onMouseDown: () => A(s),
                    children: (0, i.jsx)(f.Ay, {
                        innerClassName: v.oQ,
                        type: p.oU.RULES_INPUT,
                        textValue: D,
                        richValue: O,
                        channel: n,
                        placeholder: S.intl.string(S.t.BRkD41),
                        focused: N,
                        onChange: (e, n, i) => {
                            let l = y ? t.value : n;
                            l.length > I.pc && (l = l.slice(0, I.pc)),
                                n !== l && ((n = l), (i = (0, E.x7)(l))),
                                r(n),
                                G({ textValue: n, richValue: i });
                        },
                        onKeyDown: o,
                        canMentionChannels: C,
                        canMentionRoles: C,
                        maxCharacterCount: I.pc,
                        onSubmit: () => Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: v.mt,
                    children: (0, i.jsx)(g.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: h.a,
                        "aria-label": S.intl.string(S.t.VkKicb),
                        onClick: u,
                    }),
                }),
                (0, i.jsx)("div", {
                    ref: L,
                    className: v.cK,
                    "data-dnd-name": w,
                    children: b && (0, i.jsx)(x.W, { size: "xs", color: "currentColor", className: v.co }),
                }),
            ],
        }),
    });
}
function R(e) {
    let { rules: t, setRules: n, guild: s, disabled: a } = e,
        r = s.rulesChannelId,
        d = s.features.has(b.GuildFeatures.PREVIEW_ENABLED),
        c = (0, u.bG)([j.A], () => (null != r ? j.A.getChannel(r) : null)),
        m = (0, u.bG)([N.Ay], () => N.Ay.getDefaultChannel(s.id)),
        [g, h] = l.useState(null),
        [x, p] = l.useState(null),
        E = l.useCallback(
            (e) => {
                if (!a && t.length !== I.yN)
                    if (null != e && "" === t[t.length - 1].value) {
                        let i = [...t];
                        (i[t.length - 1] = { ...i[t.length - 1], value: e }), n(i), p(i.length - 1);
                    } else n([...t, { id: o()(), value: e ?? "" }]), p(t.length);
            },
            [a, t, n],
        ),
        f = l.useCallback(() => {
            a || E(void 0);
        }, [E, a]),
        T = l.useCallback(
            (e, i) => {
                if (a) return;
                let l = [...t];
                (l[i] = { ...l[i], value: e }), n(l);
            },
            [a, t, n],
        ),
        R = l.useCallback(
            (e, i, l) => {
                if (a || null == t) return;
                let s = t.indexOf(e);
                if (null != i && i !== s) {
                    let l = [...t];
                    l.splice(s, 1), l.splice(i, 0, e), n(l);
                }
                l ? null !== g && h(null) : i !== g && h(i);
            },
            [a, g, t, n],
        ),
        L = t.length === I.yN,
        D = l.useMemo(() => {
            let e = L ? S.intl.formatToPlainString(S.t.tU718E, { number: I.yN }) : void 0;
            return [
                {
                    text: S.intl.string(S.t.DXq2od),
                    onClick: () => E(S.intl.string(S.t.XudkSq)),
                    disabled: L || a,
                    tooltipText: e,
                },
                {
                    text: S.intl.string(S.t.nSqTjM),
                    onClick: () => E(S.intl.string(S.t.np91jA)),
                    disabled: L || a,
                    tooltipText: e,
                },
                {
                    text: S.intl.string(S.t.AtRxsO),
                    onClick: () => E(S.intl.string(S.t.PNIDDJ)),
                    disabled: L || a,
                    tooltipText: e,
                },
                {
                    text: S.intl.string(S.t["0K5NJt"]),
                    onClick: () => E(S.intl.string(S.t.HolIDy)),
                    disabled: L || a,
                    tooltipText: e,
                },
            ];
        }, [E, a, L]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: v.$W,
                children: t.map((e, l) =>
                    (0, i.jsx)(
                        y,
                        {
                            rulesChannel: c ?? m,
                            rule: e,
                            index: l,
                            onChange: (e) => T(e, l),
                            onClear: () =>
                                ((e) => {
                                    if (a) return;
                                    let i = [...t.slice(0, e), ...t.slice(e + 1)];
                                    n(0 === i.length ? [{ id: o()(), value: "" }] : i);
                                })(l),
                            onRuleReorder: R,
                            isDropHovered: l === g,
                            focused: l === x,
                            onFocus: p,
                            previewEnabled: d ?? !0,
                            isDragEnabled: !a && t.length > 1,
                            disabled: a,
                        },
                        e.id,
                    ),
                ),
            }),
            !L && (0, i.jsx)(A.d, { text: S.intl.string(S.t.Cq5JuR), onClick: f, disabled: a }),
            (0, i.jsx)(_.D, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: v.V7,
                children: S.intl.string(S.t.XHWj8W),
            }),
            (0, i.jsx)(C.z, { pills: D, pillClassName: v.Io }),
        ],
    });
}
