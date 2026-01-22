n.d(t, { _: () => T }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(296489),
    c = n.n(a),
    o = n(131346),
    d = n(744818),
    u = n(311907),
    f = n(397927),
    g = n(355622),
    b = n(408018),
    m = n(133343),
    p = n(734057),
    x = n(808728),
    h = n(557420),
    j = n(596484),
    O = n(260197),
    y = n(652215),
    v = n(985018),
    A = n(828771);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = "RULE";
function S(e) {
    let {
            rule: t,
            rulesChannel: n,
            index: l,
            onChange: a,
            onKeyDown: c,
            onClear: u,
            onRuleReorder: p,
            isDropHovered: x,
            focused: h,
            onFocus: j,
            previewEnabled: y,
            isDragEnabled: E,
            disabled: N,
        } = e,
        S = i.useRef(null),
        T = i.useRef(null),
        [{ textValue: I, richValue: C }, P] = i.useState((0, b.ur)(t.value)),
        [, w, R] = (0, o.i)({
            type: _,
            item: {
                rule: t,
                index: l,
            },
            end: (e, t) => {
                null == e || t.didDrop() || p(e.rule, null, !0);
            },
        }),
        [, D] = (0, d.H)({
            accept: _,
            hover: (e, t) => {
                var n;
                let { index: r } = e,
                    i = null == (n = S.current) ? void 0 : n.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == i || null == s) return;
                let a = (i.bottom - i.top) / 2,
                    c = s.y - i.top;
                (r < l && c < a) || (r > l && c > a) || p(e.rule, l, !1);
            },
            drop: (e) => {
                p(e.rule, l, !0);
            },
        });
    if (
        (i.useLayoutEffect(
            () => (
                w(T),
                R(D(S)),
                () => {
                    w(null), D(null);
                }
            ),
            [w, D, R],
        ),
        i.useEffect(() => {
            "" !== t.value && "" === I && P((0, b.ur)(t.value));
        }, [t.value, I]),
        null == n)
    )
        return null;
    let G = "" !== t.value ? t.value : t.id;
    return (0, r.jsx)("div", {
        ref: S,
        className: s()(A.XQ, { [A.cB]: x }),
        "data-dnd-name": G,
        children: (0, r.jsxs)("div", {
            className: A.I6,
            children: [
                (0, r.jsx)(f.DUT, {
                    onMouseDown: () => j(l),
                    children: (0, r.jsx)(m.Ay, {
                        innerClassName: A.oQ,
                        type: g.oU.RULES_INPUT,
                        textValue: I,
                        richValue: C,
                        channel: n,
                        placeholder: v.intl.string(v.t.BRkD41),
                        focused: h,
                        onChange: (e, n, r) => {
                            let i = N ? t.value : n;
                            i.length > O.pc && (i = i.slice(0, O.pc)),
                                n !== i && ((n = i), (r = (0, b.x7)(i))),
                                a(n),
                                P({
                                    textValue: n,
                                    richValue: r,
                                });
                        },
                        onKeyDown: c,
                        canMentionChannels: y,
                        canMentionRoles: y,
                        maxCharacterCount: O.pc,
                        onSubmit: () =>
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: A.mt,
                    children: (0, r.jsx)(f.K0, {
                        size: "sm",
                        variant: "icon-only",
                        icon: f.aXh,
                        "aria-label": v.intl.string(v.t.VkKicb),
                        onClick: u,
                    }),
                }),
                (0, r.jsx)("div", {
                    ref: T,
                    className: A.cK,
                    "data-dnd-name": G,
                    children:
                        E &&
                        (0, r.jsx)(f.WP0, {
                            size: "xs",
                            color: "currentColor",
                            className: A.co,
                        }),
                }),
            ],
        }),
    });
}
function T(e) {
    let { rules: t, setRules: n, guild: l, disabled: s } = e,
        a = l.rulesChannelId,
        o = l.features.has(y.GuildFeatures.PREVIEW_ENABLED),
        d = (0, u.bG)([p.A], () => (null != a ? p.A.getChannel(a) : null)),
        g = (0, u.bG)([x.Ay], () => x.Ay.getDefaultChannel(l.id)),
        [b, m] = i.useState(null),
        [_, T] = i.useState(null),
        I = i.useCallback(
            (e) => {
                if (!s && t.length !== O.yN)
                    if (null != e && "" === t[t.length - 1].value) {
                        let r = [...t];
                        (r[t.length - 1] = N(E({}, r[t.length - 1]), { value: e })), n(r), T(r.length - 1);
                    } else
                        n([
                            ...t,
                            {
                                id: c()(),
                                value: null != e ? e : "",
                            },
                        ]),
                            T(t.length);
            },
            [s, t, n],
        ),
        C = i.useCallback(() => {
            s || I(void 0);
        }, [I, s]),
        P = i.useCallback(
            (e, r) => {
                if (s) return;
                let i = [...t];
                (i[r] = N(E({}, i[r]), { value: e })), n(i);
            },
            [s, t, n],
        ),
        w = i.useCallback(
            (e, r, i) => {
                if (s || null == t) return;
                let l = t.indexOf(e);
                if (null != r && r !== l) {
                    let i = [...t];
                    i.splice(l, 1), i.splice(r, 0, e), n(i);
                }
                i ? null !== b && m(null) : r !== b && m(r);
            },
            [s, b, t, n],
        ),
        R = t.length === O.yN,
        D = i.useMemo(() => {
            let e = R ? v.intl.formatToPlainString(v.t.tU718E, { number: O.yN }) : void 0;
            return [
                {
                    text: v.intl.string(v.t.DXq2od),
                    onClick: () => I(v.intl.string(v.t.XudkSq)),
                    disabled: R || s,
                    tooltipText: e,
                },
                {
                    text: v.intl.string(v.t.nSqTjM),
                    onClick: () => I(v.intl.string(v.t.np91jA)),
                    disabled: R || s,
                    tooltipText: e,
                },
                {
                    text: v.intl.string(v.t.AtRxsO),
                    onClick: () => I(v.intl.string(v.t.PNIDDJ)),
                    disabled: R || s,
                    tooltipText: e,
                },
                {
                    text: v.intl.string(v.t["0K5NJt"]),
                    onClick: () => I(v.intl.string(v.t.HolIDy)),
                    disabled: R || s,
                    tooltipText: e,
                },
            ];
        }, [I, s, R]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: A.$W,
                children: t.map((e, i) =>
                    (0, r.jsx)(
                        S,
                        {
                            rulesChannel: null != d ? d : g,
                            rule: e,
                            index: i,
                            onChange: (e) => P(e, i),
                            onClear: () =>
                                ((e) => {
                                    if (s) return;
                                    let r = [...t.slice(0, e), ...t.slice(e + 1)];
                                    n(
                                        0 === r.length
                                            ? [
                                                  {
                                                      id: c()(),
                                                      value: "",
                                                  },
                                              ]
                                            : r,
                                    );
                                })(i),
                            onRuleReorder: w,
                            isDropHovered: i === b,
                            focused: i === _,
                            onFocus: T,
                            previewEnabled: null == o || o,
                            isDragEnabled: !s && t.length > 1,
                            disabled: s,
                        },
                        e.id,
                    ),
                ),
            }),
            !R &&
                (0, r.jsx)(h.d, {
                    text: v.intl.string(v.t.Cq5JuR),
                    onClick: C,
                    disabled: s,
                }),
            (0, r.jsx)(f.Heading, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: A.V7,
                children: v.intl.string(v.t.XHWj8W),
            }),
            (0, r.jsx)(j.z, {
                pills: D,
                pillClassName: A.Io,
            }),
        ],
    });
}
