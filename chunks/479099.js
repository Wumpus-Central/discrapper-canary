n.d(t, {
    Z: () => x,
    f: () => E,
}),
    n(388685);
var r,
    l = n(951288),
    i = n(647438),
    s = n(120356),
    a = n.n(s),
    o = n(91192),
    c = n(442837),
    u = n(28664),
    d = n(481060),
    p = n(239091),
    h = n(596454),
    f = n(607070),
    g = n(339085),
    v = n(695346),
    m = n(572004),
    b = n(388032),
    O = n(716754);
function j(e) {
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
function D(e, t) {
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
    let { tag: t, size: r = 1, disabled: s, className: u, onClick: y, onRemove: x, selected: E, ariaLabel: N } = e,
        { name: w, emojiId: P, emojiName: L } = t,
        S = null != x,
        [M, T] = i.useState(!1),
        A = (0, c.e7)([g.ZP], () => (null != P ? g.ZP.getUsableCustomEmojiById(P) : null)),
        I = S || null != y,
        _ = (!S || !M) && (null != P || null != L),
        Z = 0 === r,
        C = i.useRef(null),
        U = (0, c.e7)([f.Z], () => f.Z.keyboardModeEnabled),
        R = (0, l.jsxs)(l.Fragment, {
            children: [
                _
                    ? (0, l.jsx)(h.Z, {
                          className: a()(O.emoji, { [O.small]: Z }),
                          emojiId: P,
                          emojiName: L,
                          animated: !!(null == A ? void 0 : A.animated),
                          size: "reaction",
                      })
                    : null,
                M &&
                    S &&
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
                    children: w,
                }),
            ],
        }),
        k = {
            key: t.id,
            className: a()(
                O.pill,
                {
                    [O.disabled]: s,
                    [O.clickable]: I,
                    [O.small]: Z,
                    [O.selected]: E,
                    [O[t.color]]: null != t.color && !I,
                },
                u,
            ),
            onClick: (e) => {
                null == y || y(e), null == x || x(t), U || null == C.current || C.current.blur();
            },
            onContextMenu: (e) =>
                ((e) => {
                    let r = v.Sb.getSetting();
                    m.wS &&
                        r &&
                        (0, p.jW)(e, async () => {
                            let { default: e } = await n.e("29646").then(n.bind(n, 955116));
                            return (n) => (0, l.jsx)(e, D(j({}, n), { tag: t }));
                        });
                })(e),
            onMouseEnter: () => S && T(!0),
            onMouseLeave: () => S && T(!1),
        },
        z = (0, o.JA)("forum-tag-".concat(t.id));
    return I
        ? (0, l.jsx)(
              d.P3F,
              D(
                  j(
                      D(j({}, z), {
                          innerRef: C,
                          focusProps: { ringTarget: C },
                          "aria-label": null != N ? N : b.intl.formatToPlainString(b.t.iyRTLm, { tagName: w }),
                          role: "button",
                          "aria-pressed": E,
                      }),
                      k,
                  ),
                  { children: R },
              ),
          )
        : (0, l.jsx)("div", D(j({}, k), { children: R }));
}
function E(e) {
    let { tags: t, count: n, size: r = 1 } = e,
        i = 0 === r;
    return (0, l.jsx)(u.u, {
        "aria-label": b.intl.string(b.t["P/y+sj"]),
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
            className: a()(O.pill, { [O.small]: i }),
            children: (0, l.jsxs)(d.Text, {
                variant: i ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", n],
            }),
        }),
    });
}
x.Sizes = y;
