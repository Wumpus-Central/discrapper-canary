var n = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(277057),
    u = t.n(r),
    o = t(126600),
    d = t(840508),
    c = t(855986),
    h = t(939249),
    x = t(408278),
    g = t(285796),
    p = t(772838),
    m = t(534514),
    v = t(355622),
    f = t(408018),
    C = t(989161),
    b = t(734057),
    j = t(808728),
    k = t(557420),
    N = t(596484);
t(260197);
var D = t(652215),
    R = t(792996),
    E = t(545705);
let y = "RULE";
function T(e) {
    let {
            rule: l,
            rulesChannel: t,
            index: s,
            onChange: r,
            onKeyDown: u,
            onClear: c,
            onRuleReorder: m,
            isDropHovered: b,
            focused: j,
            onFocus: k,
            previewEnabled: N,
            isDragEnabled: D,
            disabled: T,
        } = e,
        A = i.useRef(null),
        S = i.useRef(null),
        [{ textValue: I, richValue: _ }, w] = i.useState((0, f.ur)(l.value)),
        [, K, L] = (0, o.i)({
            type: y,
            item: { rule: l, index: s },
            end: (e, l) => {
                null == e || l.didDrop() || m(e.rule, null, !0);
            },
        }),
        [, M] = (0, d.H)({
            accept: y,
            hover: (e, l) => {
                let { index: t } = e,
                    n = A.current?.getBoundingClientRect(),
                    i = l.getClientOffset();
                if (null == n || null == i) return;
                let a = (n.bottom - n.top) / 2,
                    r = i.y - n.top;
                (t < s && r < a) || (t > s && r > a) || m(e.rule, s, !1);
            },
            drop: (e) => {
                m(e.rule, s, !0);
            },
        });
    if (
        (i.useLayoutEffect(
            () => (
                K(S),
                L(M(A)),
                () => {
                    (K(null), M(null));
                }
            ),
            [K, M, L],
        ),
        i.useEffect(() => {
            "" !== l.value && "" === I && w((0, f.ur)(l.value));
        }, [l.value, I]),
        null == t)
    )
        return null;
    let P = "" !== l.value ? l.value : l.id;
    return (0, n.jsx)("div", {
        ref: A,
        className: a()(E.XQ, { [E.cB]: b }),
        "data-dnd-name": P,
        children: (0, n.jsxs)("div", {
            className: E.I6,
            children: [
                (0, n.jsx)(h.D, {
                    onMouseDown: () => k(s),
                    children: (0, n.jsx)(C.Ay, {
                        innerClassName: E.oQ,
                        type: v.oU.RULES_INPUT,
                        textValue: I,
                        richValue: _,
                        channel: t,
                        placeholder: R.intl.string(R.t.BRkD41),
                        focused: j,
                        onChange: function (e, t, n) {
                            let i = T ? l.value : t;
                            (i.length > 300 && (i = i.slice(0, 300)),
                                t !== i && ((t = i), (n = (0, f.x7)(i))),
                                r(t),
                                w({ textValue: t, richValue: n }));
                        },
                        onKeyDown: u,
                        canMentionChannels: N,
                        canMentionRoles: N,
                        maxCharacterCount: 300,
                        onSubmit: () => Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: E.mt,
                    children: (0, n.jsx)(x.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: g.a,
                        "aria-label": R.intl.string(R.t.VkKicb),
                        onClick: c,
                    }),
                }),
                (0, n.jsx)("div", {
                    ref: S,
                    className: E.cK,
                    "data-dnd-name": P,
                    children: D && (0, n.jsx)(p.W, { size: "xs", color: "currentColor", className: E.co }),
                }),
            ],
        }),
    });
}
t.d(
    l,
    {},
    {
        _: function (e) {
            let { rules: l, setRules: t, guild: s, disabled: a } = e,
                r = s.rulesChannelId,
                o = s.features.has(D.GuildFeatures.PREVIEW_ENABLED),
                d = (0, c.bG)([b.A], () => (null != r ? b.A.getChannel(r) : null)),
                h = (0, c.bG)([j.A], () => j.A.getDefaultChannel(s.id)),
                [x, g] = i.useState(null),
                [p, v] = i.useState(null),
                f = i.useCallback(
                    (e) => {
                        if (!a && 16 !== l.length)
                            if (null != e && "" === l[l.length - 1].value) {
                                let n = [...l];
                                ((n[l.length - 1] = { ...n[l.length - 1], value: e }), t(n), v(n.length - 1));
                            } else (t([...l, { id: u()(), value: e ?? "" }]), v(l.length));
                    },
                    [a, l, t],
                ),
                C = i.useCallback(() => {
                    a || f(void 0);
                }, [f, a]),
                y = i.useCallback(
                    (e, n) => {
                        if (a) return;
                        let i = [...l];
                        ((i[n] = { ...i[n], value: e }), t(i));
                    },
                    [a, l, t],
                ),
                A = i.useCallback(
                    (e, n, i) => {
                        if (a || null == l) return;
                        let s = l.indexOf(e);
                        if (null != n && n !== s) {
                            let i = [...l];
                            (i.splice(s, 1), i.splice(n, 0, e), t(i));
                        }
                        i ? null !== x && g(null) : n !== x && g(n);
                    },
                    [a, x, l, t],
                ),
                S = 16 === l.length,
                I = i.useMemo(() => {
                    let e = S ? R.intl.formatToPlainString(R.t.tU718E, { number: 16 }) : void 0;
                    return [
                        {
                            text: R.intl.string(R.t.DXq2od),
                            onClick: () => f(R.intl.string(R.t.XudkSq)),
                            disabled: S || a,
                            tooltipText: e,
                        },
                        {
                            text: R.intl.string(R.t.nSqTjM),
                            onClick: () => f(R.intl.string(R.t.np91jA)),
                            disabled: S || a,
                            tooltipText: e,
                        },
                        {
                            text: R.intl.string(R.t.AtRxsO),
                            onClick: () => f(R.intl.string(R.t.PNIDDJ)),
                            disabled: S || a,
                            tooltipText: e,
                        },
                        {
                            text: R.intl.string(R.t["0K5NJt"]),
                            onClick: () => f(R.intl.string(R.t.HolIDy)),
                            disabled: S || a,
                            tooltipText: e,
                        },
                    ];
                }, [f, a, S]);
            return (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)("div", {
                        className: E.$W,
                        children: l.map((e, i) =>
                            (0, n.jsx)(
                                T,
                                {
                                    rulesChannel: d ?? h,
                                    rule: e,
                                    index: i,
                                    onChange: (e) => y(e, i),
                                    onClear: () =>
                                        (function (e) {
                                            if (a) return;
                                            let n = [...l.slice(0, e), ...l.slice(e + 1)];
                                            t(0 === n.length ? [{ id: u()(), value: "" }] : n);
                                        })(i),
                                    onRuleReorder: A,
                                    isDropHovered: i === x,
                                    focused: i === p,
                                    onFocus: v,
                                    previewEnabled: o ?? !0,
                                    isDragEnabled: !a && l.length > 1,
                                    disabled: a,
                                },
                                e.id,
                            ),
                        ),
                    }),
                    !S && (0, n.jsx)(k.d, { text: R.intl.string(R.t.Cq5JuR), onClick: C, disabled: a }),
                    (0, n.jsx)(m.D, {
                        variant: "body-xs/semibold",
                        color: "text-muted",
                        className: E.V7,
                        children: R.intl.string(R.t.XHWj8W),
                    }),
                    (0, n.jsx)(N.z, { pills: I, pillClassName: E.Io }),
                ],
            });
        },
    },
);
