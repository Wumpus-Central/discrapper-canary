n.d(t, { k: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(97613),
    o = n.n(s),
    c = n(891371),
    d = n(692992),
    u = n(442837),
    g = n(481060),
    m = n(541716),
    f = n(752305),
    p = n(893718),
    b = n(592125),
    h = n(984933),
    x = n(540457),
    j = n(681460),
    v = n(592286),
    O = n(981631),
    C = n(388032),
    y = n(616224);
function N(e) {
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
function E(e, t) {
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
let I = "RULE";
function S(e) {
    let {
            rule: t,
            rulesChannel: n,
            index: l,
            onChange: s,
            onKeyDown: o,
            onClear: u,
            onRuleReorder: b,
            isDropHovered: h,
            focused: x,
            onFocus: j,
            previewEnabled: O,
            isDragEnabled: N,
            disabled: E,
        } = e,
        S = i.useRef(null),
        _ = i.useRef(null),
        [{ textValue: T, richValue: P }, w] = i.useState((0, f.eK)(t.value)),
        [, Z, R] = (0, c.c)({
            type: I,
            item: {
                rule: t,
                index: l,
            },
            end: (e, t) => {
                null == e || t.didDrop() || b(e.rule, null, !0);
            },
        }),
        [, D] = (0, d.L)({
            accept: I,
            hover: (e, t) => {
                var n;
                let { index: r } = e,
                    i = null == (n = S.current) ? void 0 : n.getBoundingClientRect(),
                    a = t.getClientOffset();
                if (null == i || null == a) return;
                let s = (i.bottom - i.top) / 2,
                    o = a.y - i.top;
                (r < l && o < s) || (r > l && o > s) || b(e.rule, l, !1);
            },
            drop: (e) => {
                b(e.rule, l, !0);
            },
        });
    if (
        (i.useLayoutEffect(
            () => (
                Z(_),
                R(D(S)),
                () => {
                    Z(null), D(null);
                }
            ),
            [Z, D, R],
        ),
        i.useEffect(() => {
            "" !== t.value && "" === T && w((0, f.eK)(t.value));
        }, [t.value, T]),
        null == n)
    )
        return null;
    let A = "" !== t.value ? t.value : t.id;
    return (0, r.jsx)("div", {
        ref: S,
        className: a()(y.draggableInputContainer, { [y.dragging]: h }),
        "data-dnd-name": A,
        children: (0, r.jsxs)("div", {
            className: y.inputWrapper,
            children: [
                (0, r.jsx)(g.P3F, {
                    onMouseDown: () => j(l),
                    children: (0, r.jsx)(p.ZP, {
                        innerClassName: y.rulesTextAreaInput,
                        type: m.Ie.RULES_INPUT,
                        textValue: T,
                        richValue: P,
                        channel: n,
                        placeholder: C.intl.string(C.t.BRkD41),
                        focused: x,
                        onChange: (e, n, r) => {
                            let i = E ? t.value : n;
                            i.length > v.fn && (i = i.slice(0, v.fn)),
                                n !== i && ((n = i), (r = (0, f.JM)(i))),
                                s(n),
                                w({
                                    textValue: n,
                                    richValue: r,
                                });
                        },
                        onKeyDown: o,
                        canMentionChannels: O,
                        canMentionRoles: O,
                        maxCharacterCount: v.fn,
                        onSubmit: () =>
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: y.clearButton,
                    children: (0, r.jsx)(g.hU, {
                        size: "sm",
                        variant: "icon-only",
                        icon: g.k$p,
                        "aria-label": C.intl.string(C.t.VkKicb),
                        onClick: u,
                    }),
                }),
                (0, r.jsx)("div", {
                    ref: _,
                    className: y.dragContainer,
                    "data-dnd-name": A,
                    children:
                        N &&
                        (0, r.jsx)(g.Vni, {
                            size: "xs",
                            color: "currentColor",
                            className: y.dragIcon,
                        }),
                }),
            ],
        }),
    });
}
function _(e) {
    let { rules: t, setRules: n, guild: l, disabled: a } = e,
        s = l.rulesChannelId,
        c = l.features.has(O.GuildFeatures.PREVIEW_ENABLED),
        d = (0, u.e7)([b.Z], () => (null != s ? b.Z.getChannel(s) : null)),
        m = (0, u.e7)([h.ZP], () => h.ZP.getDefaultChannel(l.id)),
        [f, p] = i.useState(null),
        [I, _] = i.useState(null),
        T = i.useCallback(
            (e) => {
                if (!a && t.length !== v.X2)
                    if (null != e && "" === t[t.length - 1].value) {
                        let r = [...t];
                        (r[t.length - 1] = E(N({}, r[t.length - 1]), { value: e })), n(r), _(r.length - 1);
                    } else
                        n([
                            ...t,
                            {
                                id: o()(),
                                value: null != e ? e : "",
                            },
                        ]),
                            _(t.length);
            },
            [a, t, n],
        ),
        P = i.useCallback(() => {
            a || T(void 0);
        }, [T, a]),
        w = i.useCallback(
            (e, r) => {
                if (a) return;
                let i = [...t];
                (i[r] = E(N({}, i[r]), { value: e })), n(i);
            },
            [a, t, n],
        ),
        Z = i.useCallback(
            (e, r, i) => {
                if (a || null == t) return;
                let l = t.indexOf(e);
                if (null != r && r !== l) {
                    let i = [...t];
                    i.splice(l, 1), i.splice(r, 0, e), n(i);
                }
                i ? null !== f && p(null) : r !== f && p(r);
            },
            [a, f, t, n],
        ),
        R = t.length === v.X2,
        D = i.useMemo(() => {
            let e = R ? C.intl.formatToPlainString(C.t.tU718E, { number: v.X2 }) : void 0;
            return [
                {
                    text: C.intl.string(C.t.DXq2od),
                    onClick: () => T(C.intl.string(C.t.XudkSq)),
                    disabled: R || a,
                    tooltipText: e,
                },
                {
                    text: C.intl.string(C.t.nSqTjM),
                    onClick: () => T(C.intl.string(C.t.np91jA)),
                    disabled: R || a,
                    tooltipText: e,
                },
                {
                    text: C.intl.string(C.t.AtRxsO),
                    onClick: () => T(C.intl.string(C.t.PNIDDJ)),
                    disabled: R || a,
                    tooltipText: e,
                },
                {
                    text: C.intl.string(C.t["0K5NJt"]),
                    onClick: () => T(C.intl.string(C.t.HolIDy)),
                    disabled: R || a,
                    tooltipText: e,
                },
            ];
        }, [T, a, R]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: y.rulesContainer,
                children: t.map((e, i) =>
                    (0, r.jsx)(
                        S,
                        {
                            rulesChannel: null != d ? d : m,
                            rule: e,
                            index: i,
                            onChange: (e) => w(e, i),
                            onClear: () =>
                                ((e) => {
                                    if (a) return;
                                    let r = [...t.slice(0, e), ...t.slice(e + 1)];
                                    n(
                                        0 === r.length
                                            ? [
                                                  {
                                                      id: o()(),
                                                      value: "",
                                                  },
                                              ]
                                            : r,
                                    );
                                })(i),
                            onRuleReorder: Z,
                            isDropHovered: i === f,
                            focused: i === I,
                            onFocus: _,
                            previewEnabled: null == c || c,
                            isDragEnabled: !a && t.length > 1,
                            disabled: a,
                        },
                        e.id,
                    ),
                ),
            }),
            !R &&
                (0, r.jsx)(x.A, {
                    text: C.intl.string(C.t.Cq5JuR),
                    onClick: P,
                    disabled: a,
                }),
            (0, r.jsx)(g.Heading, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: y.exampleRulesTitle,
                children: C.intl.string(C.t.XHWj8W),
            }),
            (0, r.jsx)(j.j, {
                pills: D,
                pillClassName: y.pill,
            }),
        ],
    });
}
