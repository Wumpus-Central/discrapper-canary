n.d(t, {
    Z: () => x,
    f: () => w,
}),
    n(388685);
var r,
    l = n(951288),
    i = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(91192),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    h = n(239091),
    g = n(596454),
    p = n(607070),
    f = n(339085),
    v = n(695346),
    m = n(572004),
    D = n(388032),
    O = n(716754);
function b(e) {
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
function y(e, t) {
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
var j = (((r = j || {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), r);
function x(e) {
    let { tag: t, size: r = 1, disabled: a, className: u, onClick: j, onRemove: x, selected: w, ariaLabel: E } = e,
        { name: S, emojiId: L, emojiName: N } = t,
        _ = null != x,
        [P, C] = i.useState(!1),
        M = (0, c.e7)([f.ZP], () => (null != L ? f.ZP.getUsableCustomEmojiById(L) : null)),
        R = _ || null != j,
        T = (!_ || !P) && (null != L || null != N),
        Z = 0 === r,
        A = i.useRef(null),
        I = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        U = (0, l.jsxs)(l.Fragment, {
            children: [
                T
                    ? (0, l.jsx)(g.Z, {
                          className: s()(O.emoji, { [O.small]: Z }),
                          emojiId: L,
                          emojiName: N,
                          animated: !!(null == M ? void 0 : M.animated),
                          size: "reaction",
                      })
                    : null,
                P &&
                    _ &&
                    (0, l.jsx)("div", {
                        className: O.closeCircle,
                        children: (0, l.jsx)(d.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: O.close,
                        }),
                    }),
                (0, l.jsx)(d.Text, {
                    variant: Z ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: S,
                }),
            ],
        }),
        k = {
            key: t.id,
            className: s()(
                O.pill,
                {
                    [O.disabled]: a,
                    [O.clickable]: R,
                    [O.small]: Z,
                    [O.selected]: w,
                    [O[t.color]]: null != t.color && !R,
                },
                u,
            ),
            onClick: (e) => {
                null == j || j(e), null == x || x(t), I || null == A.current || A.current.blur();
            },
            onContextMenu: (e) =>
                ((e) => {
                    let r = v.Sb.getSetting();
                    m.wS &&
                        r &&
                        (0, h.jW)(e, async () => {
                            let { default: e } = await n.e("29646").then(n.bind(n, 955116));
                            return (n) => (0, l.jsx)(e, y(b({}, n), { tag: t }));
                        });
                })(e),
            onMouseEnter: () => _ && C(!0),
            onMouseLeave: () => _ && C(!1),
        },
        z = (0, o.JA)("forum-tag-".concat(t.id));
    return R
        ? (0, l.jsx)(
              d.P3F,
              y(
                  b(
                      y(b({}, z), {
                          innerRef: A,
                          focusProps: { ringTarget: A },
                          "aria-label": null != E ? E : D.intl.formatToPlainString(D.t.iyRTLm, { tagName: S }),
                          role: "button",
                          "aria-pressed": w,
                      }),
                      k,
                  ),
                  { children: U },
              ),
          )
        : (0, l.jsx)("div", y(b({}, k), { children: U }));
}
function w(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        i = 0 === r;
    return (0, l.jsx)(u.u, {
        "aria-label": D.intl.string(D.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, l.jsx)(l.Fragment, {
            children: t.map((e) =>
                (0, l.jsx)(
                    x,
                    {
                        tag: e,
                        className: O.tooltipPill,
                        size: x.Sizes.SMALL,
                    },
                    e.id,
                ),
            ),
        }),
        children: (0, l.jsx)("div", {
            className: s()(O.pill, { [O.small]: i }),
            children: (0, l.jsxs)(d.Text, {
                variant: i ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
            }),
        }),
    });
}
x.Sizes = j;
