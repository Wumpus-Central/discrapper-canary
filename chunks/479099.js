i.d(t, {
    Z: () => x,
    f: () => w,
}),
    i(388685);
var n,
    s = i(54381),
    a = i(473749),
    o = i(120356),
    l = i.n(o),
    r = i(91192),
    d = i(442837),
    h = i(28664),
    c = i(481060),
    u = i(239091),
    g = i(596454),
    p = i(607070),
    b = i(339085),
    f = i(695346),
    m = i(572004),
    v = i(388032),
    _ = i(308571);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = i[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var i = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      i.push.apply(i, n);
                  }
                  return i;
              })(Object(t)).forEach(function (i) {
                  Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(t, i));
              }),
        e
    );
}
var S = (((n = S || {})[(n.SMALL = 0)] = "SMALL"), (n[(n.MEDIUM = 1)] = "MEDIUM"), n);
function x(e) {
    let { tag: t, size: n = 1, disabled: o, className: h, onClick: S, onRemove: x, selected: w, ariaLabel: T } = e,
        { name: O, emojiId: F, emojiName: I } = t,
        j = null != x,
        [E, P] = a.useState(!1),
        M = (0, d.e7)([b.ZP], () => (null != F ? b.ZP.getUsableCustomEmojiById(F) : null)),
        Z = j || null != S,
        A = (!j || !E) && (null != F || null != I),
        k = 0 === n,
        H = a.useRef(null),
        L = (0, d.e7)([p.Z], () => p.Z.keyboardModeEnabled),
        D = (0, s.jsxs)(s.Fragment, {
            children: [
                A
                    ? (0, s.jsx)(g.Z, {
                          className: l()(_.emoji, { [_.small]: k }),
                          emojiId: F,
                          emojiName: I,
                          animated: !!(null == M ? void 0 : M.animated),
                          size: "reaction",
                      })
                    : null,
                E &&
                    j &&
                    (0, s.jsx)("div", {
                        className: _.closeCircle,
                        children: (0, s.jsx)(c.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: _.close,
                        }),
                    }),
                (0, s.jsx)(c.Text, {
                    variant: k ? "text-xs/semibold" : "text-sm/semibold",
                    lineClamp: 1,
                    color: "currentColor",
                    children: O,
                }),
            ],
        }),
        N = {
            key: t.id,
            className: l()(
                _.pill,
                {
                    [_.disabled]: o,
                    [_.clickable]: Z,
                    [_.small]: k,
                    [_.selected]: w,
                    [_[t.color]]: null != t.color && !Z,
                },
                h,
            ),
            onClick: (e) => {
                null == S || S(e), null == x || x(t), L || null == H.current || H.current.blur();
            },
            onContextMenu: (e) =>
                ((e) => {
                    let n = f.Sb.getSetting();
                    m.wS &&
                        n &&
                        (0, u.jW)(e, async () => {
                            let { default: e } = await i.e("29646").then(i.bind(i, 955116));
                            return (i) => (0, s.jsx)(e, C(y({}, i), { tag: t }));
                        });
                })(e),
            onMouseEnter: () => j && P(!0),
            onMouseLeave: () => j && P(!1),
        },
        B = (0, r.JA)("forum-tag-".concat(t.id));
    return Z
        ? (0, s.jsx)(
              c.P3F,
              C(
                  y(
                      C(y({}, B), {
                          innerRef: H,
                          focusProps: { ringTarget: H },
                          "aria-label": null != T ? T : v.intl.formatToPlainString(v.t.iyRTLm, { tagName: O }),
                          role: "button",
                          "aria-pressed": w,
                      }),
                      N,
                  ),
                  { children: D },
              ),
          )
        : (0, s.jsx)("div", C(y({}, N), { children: D }));
}
function w(e) {
    let { tags: t, count: i, size: n = 1 } = e,
        a = 0 === n;
    return (0, s.jsx)(h.u, {
        "aria-label": v.intl.string(v.t["P/y+sj"]),
        __unsupportedReactNodeAsText: (0, s.jsx)(s.Fragment, {
            children: t.map((e) =>
                (0, s.jsx)(
                    x,
                    {
                        tag: e,
                        className: _.tooltipPill,
                        size: x.Sizes.SMALL,
                    },
                    e.id,
                ),
            ),
        }),
        children: (0, s.jsx)("div", {
            className: l()(_.pill, { [_.small]: a }),
            children: (0, s.jsxs)(c.Text, {
                variant: a ? "text-xs/semibold" : "text-sm/semibold",
                children: ["+", i],
            }),
        }),
    });
}
x.Sizes = S;
