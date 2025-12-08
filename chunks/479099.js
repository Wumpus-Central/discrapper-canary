n.d(t, {
    Z: () => x,
    f: () => w,
}),
    n(388685);
var r,
    l = n(54381),
    i = n(473749),
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
function j(e, t) {
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
var y = (((r = y || {})[(r.SMALL = 0)] = "SMALL"), (r[(r.MEDIUM = 1)] = "MEDIUM"), r);
function x(e) {
    let { tag: t, size: r = 1, disabled: a, className: u, onClick: y, onRemove: x, selected: w, ariaLabel: E } = e,
        { name: N, emojiId: S, emojiName: L } = t,
        _ = null != x,
        [Z, C] = i.useState(!1),
        P = (0, c.e7)([f.ZP], () => (null != S ? f.ZP.getUsableCustomEmojiById(S) : null)),
        I = _ || null != y,
        M = (!_ || !Z) && (null != S || null != L),
        A = 0 === r,
        R = i.useRef(null),
        T = (0, c.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        U = (0, l.jsxs)(l.Fragment, {
            children: [
                M
                    ? (0, l.jsx)(g.Z, {
                          className: s()(O.emoji, { [O.small]: A }),
                          emojiId: S,
                          emojiName: L,
                          animated: !!(null == P ? void 0 : P.animated),
                          size: "reaction",
                      })
                    : null,
                Z &&
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
                    variant: A ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: N,
                }),
            ],
        }),
        k = {
            key: t.id,
            className: s()(
                O.pill,
                {
                    [O.disabled]: a,
                    [O.clickable]: I,
                    [O.small]: A,
                    [O.selected]: w,
                    [O[t.color]]: null != t.color && !I,
                },
                u,
            ),
            onClick: (e) => {
                null == y || y(e), null == x || x(t), T || null == R.current || R.current.blur();
            },
            onContextMenu: (e) =>
                ((e) => {
                    let r = v.Sb.getSetting();
                    m.wS &&
                        r &&
                        (0, h.jW)(e, async () => {
                            let { default: e } = await n.e("29646").then(n.bind(n, 955116));
                            return (n) => (0, l.jsx)(e, j(b({}, n), { tag: t }));
                        });
                })(e),
            onMouseEnter: () => _ && C(!0),
            onMouseLeave: () => _ && C(!1),
        },
        G = (0, o.JA)("forum-tag-".concat(t.id));
    return I
        ? (0, l.jsx)(
              d.P3F,
              j(
                  b(
                      j(b({}, G), {
                          innerRef: R,
                          focusProps: { ringTarget: R },
                          "aria-label": null != E ? E : D.intl.formatToPlainString(D.t.iyRTLm, { tagName: N }),
                          role: "button",
                          "aria-pressed": w,
                      }),
                      k,
                  ),
                  { children: U },
              ),
          )
        : (0, l.jsx)("div", j(b({}, k), { children: U }));
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
x.Sizes = y;
