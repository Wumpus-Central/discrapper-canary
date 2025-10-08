n.d(t, { k: () => S }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    a = n(97613),
    o = n.n(a),
    c = n(100568),
    d = n(417865),
    u = n(442837),
    g = n(481060),
    m = n(541716),
    p = n(752305),
    f = n(893718),
    h = n(592125),
    x = n(984933),
    b = n(540457),
    j = n(681460),
    _ = n(592286),
    v = n(981631),
    C = n(388032),
    O = n(761560);
function y(e) {
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
let E = "RULE";
function I(e) {
    let {
            rule: t,
            rulesChannel: n,
            index: l,
            onChange: a,
            onKeyDown: o,
            onClear: u,
            onRuleReorder: h,
            isDropHovered: x,
            focused: b,
            onFocus: j,
            previewEnabled: v,
            isDragEnabled: y,
            disabled: N,
        } = e,
        I = i.useRef(null),
        S = i.useRef(null),
        [{ textValue: T, richValue: P }, w] = i.useState((0, p.eK)(t.value)),
        [, R, Z] = (0, c.c)({
            type: E,
            item: {
                rule: t,
                index: l,
            },
            end: (e, t) => {
                null == e || t.didDrop() || h(e.rule, null, !0);
            },
        }),
        [, D] = (0, d.L)({
            accept: E,
            hover: (e, t) => {
                var n;
                let { index: r } = e,
                    i = null == (n = I.current) ? void 0 : n.getBoundingClientRect(),
                    s = t.getClientOffset();
                if (null == i || null == s) return;
                let a = (i.bottom - i.top) / 2,
                    o = s.y - i.top;
                (r < l && o < a) || (r > l && o > a) || h(e.rule, l, !1);
            },
            drop: (e) => {
                h(e.rule, l, !0);
            },
        });
    if (
        (i.useLayoutEffect(
            () => (
                R(S),
                Z(D(I)),
                () => {
                    R(null), D(null);
                }
            ),
            [R, D, Z],
        ),
        i.useEffect(() => {
            "" !== t.value && "" === T && w((0, p.eK)(t.value));
        }, [t.value, T]),
        null == n)
    )
        return null;
    let A = "" !== t.value ? t.value : t.id;
    return (0, r.jsx)("div", {
        ref: I,
        className: s()(O.draggableInputContainer, { [O.dragging]: x }),
        "data-dnd-name": A,
        children: (0, r.jsxs)("div", {
            className: O.inputWrapper,
            children: [
                (0, r.jsx)(g.P3F, {
                    onMouseDown: () => j(l),
                    children: (0, r.jsx)(f.ZP, {
                        innerClassName: O.rulesTextAreaInput,
                        type: m.Ie.RULES_INPUT,
                        textValue: T,
                        richValue: P,
                        channel: n,
                        placeholder: C.intl.string(C.t["BRkD4+"]),
                        focused: b,
                        onChange: (e, n, r) => {
                            let i = N ? t.value : n;
                            i.length > _.fn && (i = i.slice(0, _.fn)),
                                n !== i && ((n = i), (r = (0, p.JM)(i))),
                                a(n),
                                w({
                                    textValue: n,
                                    richValue: r,
                                });
                        },
                        onKeyDown: o,
                        canMentionChannels: v,
                        canMentionRoles: v,
                        maxCharacterCount: _.fn,
                        onSubmit: () =>
                            Promise.resolve({
                                shouldClear: !1,
                                shouldRefocus: !0,
                            }),
                    }),
                }),
                (0, r.jsx)("div", {
                    className: O.clearButton,
                    children: (0, r.jsx)(g.hU, {
                        size: "sm",
                        variant: "icon-only",
                        icon: g.k$p,
                        "aria-label": C.intl.string(C.t.VkKicX),
                        onClick: u,
                    }),
                }),
                (0, r.jsx)("div", {
                    ref: S,
                    className: O.dragContainer,
                    "data-dnd-name": A,
                    children:
                        y &&
                        (0, r.jsx)(g.Vni, {
                            size: "xs",
                            color: "currentColor",
                            className: O.dragIcon,
                        }),
                }),
            ],
        }),
    });
}
function S(e) {
    let { rules: t, setRules: n, guild: l, disabled: s } = e,
        a = l.rulesChannelId,
        c = l.features.has(v.oNc.PREVIEW_ENABLED),
        d = (0, u.e7)([h.Z], () => (null != a ? h.Z.getChannel(a) : null)),
        m = (0, u.e7)([x.ZP], () => x.ZP.getDefaultChannel(l.id)),
        [p, f] = i.useState(null),
        [E, S] = i.useState(null),
        T = i.useCallback(
            (e) => {
                if (!s && t.length !== _.X2)
                    if (null != e && "" === t[t.length - 1].value) {
                        let r = [...t];
                        (r[t.length - 1] = N(y({}, r[t.length - 1]), { value: e })), n(r), S(r.length - 1);
                    } else
                        n([
                            ...t,
                            {
                                id: o()(),
                                value: null != e ? e : "",
                            },
                        ]),
                            S(t.length);
            },
            [s, t, n],
        ),
        P = i.useCallback(() => {
            s || T(void 0);
        }, [T, s]),
        w = i.useCallback(
            (e, r) => {
                if (s) return;
                let i = [...t];
                (i[r] = N(y({}, i[r]), { value: e })), n(i);
            },
            [s, t, n],
        ),
        R = i.useCallback(
            (e, r, i) => {
                if (s || null == t) return;
                let l = t.indexOf(e);
                if (null != r && r !== l) {
                    let i = [...t];
                    i.splice(l, 1), i.splice(r, 0, e), n(i);
                }
                i ? null !== p && f(null) : r !== p && f(r);
            },
            [s, p, t, n],
        ),
        Z = t.length === _.X2,
        D = i.useMemo(() => {
            let e = Z ? C.intl.formatToPlainString(C.t.tU718P, { number: _.X2 }) : void 0;
            return [
                {
                    text: C.intl.string(C.t.DXq2oa),
                    onClick: () => T(C.intl.string(C.t.XudkSk)),
                    disabled: Z || s,
                    tooltipText: e,
                },
                {
                    text: C.intl.string(C.t.nSqTjI),
                    onClick: () => T(C.intl.string(C.t.np91jI)),
                    disabled: Z || s,
                    tooltipText: e,
                },
                {
                    text: C.intl.string(C.t.AtRxsL),
                    onClick: () => T(C.intl.string(C.t.PNIDDA)),
                    disabled: Z || s,
                    tooltipText: e,
                },
                {
                    text: C.intl.string(C.t["0K5NJi"]),
                    onClick: () => T(C.intl.string(C.t.HolIDw)),
                    disabled: Z || s,
                    tooltipText: e,
                },
            ];
        }, [T, s, Z]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: O.rulesContainer,
                children: t.map((e, i) =>
                    (0, r.jsx)(
                        I,
                        {
                            rulesChannel: null != d ? d : m,
                            rule: e,
                            index: i,
                            onChange: (e) => w(e, i),
                            onClear: () =>
                                ((e) => {
                                    if (s) return;
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
                            onRuleReorder: R,
                            isDropHovered: i === p,
                            focused: i === E,
                            onFocus: S,
                            previewEnabled: null == c || c,
                            isDragEnabled: !s && t.length > 1,
                            disabled: s,
                        },
                        e.id,
                    ),
                ),
            }),
            !Z &&
                (0, r.jsx)(b.A, {
                    text: C.intl.string(C.t.Cq5Jub),
                    onClick: P,
                    disabled: s,
                }),
            (0, r.jsx)(g.X6q, {
                variant: "text-xs/bold",
                color: "text-muted",
                className: O.exampleRulesTitle,
                children: C.intl.string(C.t.XHWj8f),
            }),
            (0, r.jsx)(j.j, {
                pills: D,
                pillClassName: O.pill,
            }),
        ],
    });
}
