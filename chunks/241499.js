t.d(l, { _: () => S });
var n = t(627968),
    i = t(64700),
    s = t(503698),
    a = t.n(s),
    r = t(296489),
    u = t.n(r),
    o = t(312742),
    d = t(295868),
    c = t(17928),
    x = t(939249),
    h = t(408278),
    p = t(285796),
    g = t(772838),
    m = t(534514),
    v = t(355622),
    C = t(408018),
    f = t(138617),
    b = t(734057),
    j = t(808728),
    k = t(557420),
    N = t(596484),
    D = t(260197),
    R = t(652215),
    y = t(375708),
    E = t(243518);
let T = "RULE";
function A(e) {
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
            isDragEnabled: R,
            disabled: A,
        } = e,
        S = i.useRef(null),
        I = i.useRef(null),
        [{ textValue: _, richValue: w }, K] = i.useState((0, C.ur)(l.value)),
        [, L, M] = (0, o.i)({
            type: T,
            item: { rule: l, index: s },
            end: (e, l) => {
                null == e || l.didDrop() || m(e.rule, null, !0);
            },
        }),
        [, P] = (0, d.H)({
            accept: T,
            hover: (e, l) => {
                let { index: t } = e,
                    n = S.current?.getBoundingClientRect(),
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
                L(I),
                M(P(S)),
                () => {
                    L(null), P(null);
                }
            ),
            [L, P, M],
        ),
        i.useEffect(() => {
            "" !== l.value && "" === _ && K((0, C.ur)(l.value));
        }, [l.value, _]),
        null == t)
    )
        return null;
    let U = "" !== l.value ? l.value : l.id;
    return (0, n.jsx)("div", {
        ref: S,
        className: a()(E.XQ, { [E.cB]: b }),
        "data-dnd-name": U,
        children: (0, n.jsxs)("div", {
            className: E.I6,
            children: [
                (0, n.jsx)(x.D, {
                    onMouseDown: () => k(s),
                    children: (0, n.jsx)(f.Ay, {
                        innerClassName: E.oQ,
                        type: v.oU.RULES_INPUT,
                        textValue: _,
                        richValue: w,
                        channel: t,
                        placeholder: y.intl.string(y.t.BRkD41),
                        focused: j,
                        onChange: (e, t, n) => {
                            let i = A ? l.value : t;
                            i.length > D.pc && (i = i.slice(0, D.pc)),
                                t !== i && ((t = i), (n = (0, C.x7)(i))),
                                r(t),
                                K({ textValue: t, richValue: n });
                        },
                        onKeyDown: u,
                        canMentionChannels: N,
                        canMentionRoles: N,
                        maxCharacterCount: D.pc,
                        onSubmit: () => Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                    }),
                }),
                (0, n.jsx)("div", {
                    className: E.mt,
                    children: (0, n.jsx)(h.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: p.a,
                        "aria-label": y.intl.string(y.t.VkKicb),
                        onClick: c,
                    }),
                }),
                (0, n.jsx)("div", {
                    ref: I,
                    className: E.cK,
                    "data-dnd-name": U,
                    children: R && (0, n.jsx)(g.W, { size: "xs", color: "currentColor", className: E.co }),
                }),
            ],
        }),
    });
}
function S(e) {
    let { rules: l, setRules: t, guild: s, disabled: a } = e,
        r = s.rulesChannelId,
        o = s.features.has(R.GuildFeatures.PREVIEW_ENABLED),
        d = (0, c.bG)([b.A], () => (null != r ? b.A.getChannel(r) : null)),
        x = (0, c.bG)([j.Ay], () => j.Ay.getDefaultChannel(s.id)),
        [h, p] = i.useState(null),
        [g, v] = i.useState(null),
        C = i.useCallback(
            (e) => {
                if (!a && l.length !== D.yN)
                    if (null != e && "" === l[l.length - 1].value) {
                        let n = [...l];
                        (n[l.length - 1] = { ...n[l.length - 1], value: e }), t(n), v(n.length - 1);
                    } else t([...l, { id: u()(), value: e ?? "" }]), v(l.length);
            },
            [a, l, t],
        ),
        f = i.useCallback(() => {
            a || C(void 0);
        }, [C, a]),
        T = i.useCallback(
            (e, n) => {
                if (a) return;
                let i = [...l];
                (i[n] = { ...i[n], value: e }), t(i);
            },
            [a, l, t],
        ),
        S = i.useCallback(
            (e, n, i) => {
                if (a || null == l) return;
                let s = l.indexOf(e);
                if (null != n && n !== s) {
                    let i = [...l];
                    i.splice(s, 1), i.splice(n, 0, e), t(i);
                }
                i ? null !== h && p(null) : n !== h && p(n);
            },
            [a, h, l, t],
        ),
        I = l.length === D.yN,
        _ = i.useMemo(() => {
            let e = I ? y.intl.formatToPlainString(y.t.tU718E, { number: D.yN }) : void 0;
            return [
                {
                    text: y.intl.string(y.t.DXq2od),
                    onClick: () => C(y.intl.string(y.t.XudkSq)),
                    disabled: I || a,
                    tooltipText: e,
                },
                {
                    text: y.intl.string(y.t.nSqTjM),
                    onClick: () => C(y.intl.string(y.t.np91jA)),
                    disabled: I || a,
                    tooltipText: e,
                },
                {
                    text: y.intl.string(y.t.AtRxsO),
                    onClick: () => C(y.intl.string(y.t.PNIDDJ)),
                    disabled: I || a,
                    tooltipText: e,
                },
                {
                    text: y.intl.string(y.t["0K5NJt"]),
                    onClick: () => C(y.intl.string(y.t.HolIDy)),
                    disabled: I || a,
                    tooltipText: e,
                },
            ];
        }, [C, a, I]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: E.$W,
                children: l.map((e, i) =>
                    (0, n.jsx)(
                        A,
                        {
                            rulesChannel: d ?? x,
                            rule: e,
                            index: i,
                            onChange: (e) => T(e, i),
                            onClear: () =>
                                ((e) => {
                                    if (a) return;
                                    let n = [...l.slice(0, e), ...l.slice(e + 1)];
                                    t(0 === n.length ? [{ id: u()(), value: "" }] : n);
                                })(i),
                            onRuleReorder: S,
                            isDropHovered: i === h,
                            focused: i === g,
                            onFocus: v,
                            previewEnabled: o ?? !0,
                            isDragEnabled: !a && l.length > 1,
                            disabled: a,
                        },
                        e.id,
                    ),
                ),
            }),
            !I && (0, n.jsx)(k.d, { text: y.intl.string(y.t.Cq5JuR), onClick: f, disabled: a }),
            (0, n.jsx)(m.D, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: E.V7,
                children: y.intl.string(y.t.XHWj8W),
            }),
            (0, n.jsx)(N.z, { pills: _, pillClassName: E.Io }),
        ],
    });
}
