n.d(t, { _: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(296489),
    o = n.n(a),
    d = n(131346),
    c = n(744818),
    u = n(311907),
    m = n(939249),
    g = n(408278),
    h = n(285796),
    x = n(772838),
    _ = n(534514),
    p = n(355622),
    A = n(408018),
    E = n(133343),
    f = n(734057),
    j = n(808728),
    N = n(557420),
    I = n(596484),
    C = n(260197),
    b = n(652215),
    v = n(985018),
    S = n(243518);
let T = "RULE";
function y(e) {
    let {
            rule: t,
            rulesChannel: n,
            index: s,
            onChange: a,
            onKeyDown: o,
            onClear: u,
            onRuleReorder: _,
            isDropHovered: f,
            focused: j,
            onFocus: N,
            previewEnabled: I,
            isDragEnabled: b,
            disabled: y,
        } = e,
        R = l.useRef(null),
        L = l.useRef(null),
        [{ textValue: D, richValue: O }, G] = l.useState((0, A.ur)(t.value)),
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
                let r = (i.bottom - i.top) / 2,
                    a = l.y - i.top;
                (n < s && a < r) || (n > s && a > r) || _(e.rule, s, !1);
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
            "" !== t.value && "" === D && G((0, A.ur)(t.value));
        }, [t.value, D]),
        null == n)
    )
        return null;
    let w = "" !== t.value ? t.value : t.id;
    return (0, i.jsx)("div", {
        ref: R,
        className: r()(S.XQ, { [S.cB]: f }),
        "data-dnd-name": w,
        children: (0, i.jsxs)("div", {
            className: S.I6,
            children: [
                (0, i.jsx)(m.D, {
                    onMouseDown: () => N(s),
                    children: (0, i.jsx)(E.Ay, {
                        innerClassName: S.oQ,
                        type: p.oU.RULES_INPUT,
                        textValue: D,
                        richValue: O,
                        channel: n,
                        placeholder: v.intl.string(v.t.BRkD41),
                        focused: j,
                        onChange: (e, n, i) => {
                            let l = y ? t.value : n;
                            l.length > C.pc && (l = l.slice(0, C.pc)),
                                n !== l && ((n = l), (i = (0, A.x7)(l))),
                                a(n),
                                G({ textValue: n, richValue: i });
                        },
                        onKeyDown: o,
                        canMentionChannels: I,
                        canMentionRoles: I,
                        maxCharacterCount: C.pc,
                        onSubmit: () => Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }),
                    }),
                }),
                (0, i.jsx)("div", {
                    className: S.mt,
                    children: (0, i.jsx)(g.K, {
                        size: "sm",
                        variant: "icon-only",
                        icon: h.a,
                        "aria-label": v.intl.string(v.t.VkKicb),
                        onClick: u,
                    }),
                }),
                (0, i.jsx)("div", {
                    ref: L,
                    className: S.cK,
                    "data-dnd-name": w,
                    children: b && (0, i.jsx)(x.W, { size: "xs", color: "currentColor", className: S.co }),
                }),
            ],
        }),
    });
}
function R(e) {
    let { rules: t, setRules: n, guild: s, disabled: r } = e,
        a = s.rulesChannelId,
        d = s.features.has(b.GuildFeatures.PREVIEW_ENABLED),
        c = (0, u.bG)([f.A], () => (null != a ? f.A.getChannel(a) : null)),
        m = (0, u.bG)([j.Ay], () => j.Ay.getDefaultChannel(s.id)),
        [g, h] = l.useState(null),
        [x, p] = l.useState(null),
        A = l.useCallback(
            (e) => {
                if (!r && t.length !== C.yN)
                    if (null != e && "" === t[t.length - 1].value) {
                        let i = [...t];
                        (i[t.length - 1] = { ...i[t.length - 1], value: e }), n(i), p(i.length - 1);
                    } else n([...t, { id: o()(), value: e ?? "" }]), p(t.length);
            },
            [r, t, n],
        ),
        E = l.useCallback(() => {
            r || A(void 0);
        }, [A, r]),
        T = l.useCallback(
            (e, i) => {
                if (r) return;
                let l = [...t];
                (l[i] = { ...l[i], value: e }), n(l);
            },
            [r, t, n],
        ),
        R = l.useCallback(
            (e, i, l) => {
                if (r || null == t) return;
                let s = t.indexOf(e);
                if (null != i && i !== s) {
                    let l = [...t];
                    l.splice(s, 1), l.splice(i, 0, e), n(l);
                }
                l ? null !== g && h(null) : i !== g && h(i);
            },
            [r, g, t, n],
        ),
        L = t.length === C.yN,
        D = l.useMemo(() => {
            let e = L ? v.intl.formatToPlainString(v.t.tU718E, { number: C.yN }) : void 0;
            return [
                {
                    text: v.intl.string(v.t.DXq2od),
                    onClick: () => A(v.intl.string(v.t.XudkSq)),
                    disabled: L || r,
                    tooltipText: e,
                },
                {
                    text: v.intl.string(v.t.nSqTjM),
                    onClick: () => A(v.intl.string(v.t.np91jA)),
                    disabled: L || r,
                    tooltipText: e,
                },
                {
                    text: v.intl.string(v.t.AtRxsO),
                    onClick: () => A(v.intl.string(v.t.PNIDDJ)),
                    disabled: L || r,
                    tooltipText: e,
                },
                {
                    text: v.intl.string(v.t["0K5NJt"]),
                    onClick: () => A(v.intl.string(v.t.HolIDy)),
                    disabled: L || r,
                    tooltipText: e,
                },
            ];
        }, [A, r, L]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", {
                className: S.$W,
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
                                    if (r) return;
                                    let i = [...t.slice(0, e), ...t.slice(e + 1)];
                                    n(0 === i.length ? [{ id: o()(), value: "" }] : i);
                                })(l),
                            onRuleReorder: R,
                            isDropHovered: l === g,
                            focused: l === x,
                            onFocus: p,
                            previewEnabled: d ?? !0,
                            isDragEnabled: !r && t.length > 1,
                            disabled: r,
                        },
                        e.id,
                    ),
                ),
            }),
            !L && (0, i.jsx)(N.d, { text: v.intl.string(v.t.Cq5JuR), onClick: E, disabled: r }),
            (0, i.jsx)(_.D, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: S.V7,
                children: v.intl.string(v.t.XHWj8W),
            }),
            (0, i.jsx)(I.z, { pills: D, pillClassName: S.Io }),
        ],
    });
}
