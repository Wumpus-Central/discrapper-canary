n.d(t, {
    Button: () => v,
    Ph: () => b,
    Tt: () => E,
    iL: () => g,
    nY: () => O,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(319498),
    l = n(793030),
    c = n(388032),
    u = n(494102);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let g = {
        FILLED: u.lookFilled,
        OUTLINED: u.lookOutlined,
        LINK: u.lookLink,
        BLANK: u.lookBlank,
    },
    E = {
        BRAND: u.colorBrand,
        BRAND_INVERTED: u.colorBrandInverted,
        RED: u.colorRed,
        GREEN: u.colorGreen,
        PRIMARY: u.colorPrimary,
        LINK: u.colorLink,
        WHITE: u.colorWhite,
        TRANSPARENT: u.colorTransparent,
        CUSTOM: "",
    },
    b = {
        NONE: "",
        TINY: u.sizeTiny,
        SMALL: u.sizeSmall,
        MEDIUM: u.sizeMedium,
        LARGE: u.sizeLarge,
        MIN: u.sizeMin,
        MAX: u.sizeMax,
        ICON: u.sizeIcon,
    };
function y(e, t) {
    var n, r, i, a;
    let o = null == e ? void 0 : e.offset;
    return t === g.LINK || t === g.BLANK
        ? o
        : null == o
          ? -2
          : "number" == typeof o
            ? o + 2
            : {
                  top: (null != (n = o.top) ? n : 0) - 2,
                  right: (null != (r = o.right) ? r : 0) - 2,
                  bottom: (null != (i = o.bottom) ? i : 0) - 2,
                  left: (null != (a = o.left) ? a : 0) - 2,
              };
}
function O() {
    let {
        look: e = g.FILLED,
        color: t = E.BRAND,
        size: n = b.MEDIUM,
        fullWidth: r = !1,
        grow: i = !0,
        submitting: a = !1,
        disabled: s = !1,
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return o()(u.button, e, t, n, {
        [u.fullWidth]: r,
        [u.grow]: i,
        [u.submitting]: a && !s,
    });
}
function v(e) {
    var {
            look: t = g.FILLED,
            color: n = E.BRAND,
            size: a = b.MEDIUM,
            fullWidth: s = !1,
            grow: d = !0,
            disabled: _ = !1,
            submitting: m = !1,
            type: v = "button",
            style: I,
            wrapperClassName: T,
            className: S,
            innerClassName: A,
            onClick: C,
            onDoubleClick: N,
            onMouseDown: R,
            onMouseUp: P,
            onMouseEnter: D,
            onMouseLeave: w,
            onKeyDown: L,
            children: x,
            rel: M,
            buttonRef: k,
            focusProps: j,
            "aria-label": U,
            submittingStartedLabel: G,
            submittingFinishedLabel: B,
        } = e,
        Z = h(e, [
            "look",
            "color",
            "size",
            "fullWidth",
            "grow",
            "disabled",
            "submitting",
            "type",
            "style",
            "wrapperClassName",
            "className",
            "innerClassName",
            "onClick",
            "onDoubleClick",
            "onMouseDown",
            "onMouseUp",
            "onMouseEnter",
            "onMouseLeave",
            "onKeyDown",
            "children",
            "rel",
            "buttonRef",
            "focusProps",
            "aria-label",
            "submittingStartedLabel",
            "submittingFinishedLabel",
        ]);
    let F = _ || m,
        V = F && (null != D || null != w),
        H = V ? null : T,
        Y = y(j, t),
        W = i.useRef(!1);
    i.useEffect(() => {
        !0 === m && ((W.current = !0), l.uvj.announce(null != G ? G : c.intl.string(c.t.pfChQr))),
            !1 === m && !0 === W.current && l.uvj.announce(null != B ? B : c.intl.string(c.t.SVParY));
    }, [m, G, B]);
    let K = (0, r.jsx)(
        l.tEY,
        p(f({}, j), {
            offset: Y,
            children: (0, r.jsxs)(
                "button",
                p(f({}, F ? null : Z), {
                    "aria-label": U,
                    "aria-busy": !!m || void 0,
                    ref: k,
                    onClick: F ? (e) => e.preventDefault() : C,
                    onDoubleClick: F ? (e) => e.preventDefault() : N,
                    onMouseUp: _ ? void 0 : P,
                    onMouseDown: _ ? void 0 : R,
                    onMouseEnter: D,
                    onMouseLeave: w,
                    onKeyDown: _ ? void 0 : L,
                    type: v,
                    disabled: _,
                    style: I,
                    rel: M,
                    className: o()(
                        S,
                        O({
                            look: t,
                            color: n,
                            size: a,
                            fullWidth: s,
                            grow: d,
                            submitting: m,
                            disabled: _,
                        }),
                        H,
                    ),
                    children: [
                        m && !_
                            ? (0, r.jsx)(l.$jN, {
                                  type: l.$jN.Type.PULSING_ELLIPSIS,
                                  className: u.spinner,
                                  itemClassName: u.spinnerItem,
                              })
                            : null,
                        (0, r.jsx)("div", {
                            className: o()(u.contents, A),
                            children: x,
                        }),
                    ],
                }),
            ),
        }),
    );
    return V
        ? (0, r.jsxs)("span", {
              className: o()(u.disabledButtonWrapper, T, a, {
                  [u.grow]: d,
                  [u.fullWidth]: s,
              }),
              children: [
                  K,
                  (0, r.jsx)("span", {
                      onMouseEnter: D,
                      onMouseLeave: w,
                      className: u.disabledButtonOverlay,
                  }),
              ],
          })
        : K;
}
(v.Looks = g),
    (v.Colors = E),
    (v.Sizes = b),
    (v.Link = function (e) {
        var {
                look: t = g.FILLED,
                color: n = E.BRAND,
                size: i = b.MEDIUM,
                fullWidth: a = !1,
                grow: l = !0,
                style: c,
                className: d,
                innerClassName: _,
                to: m,
                onClick: y,
                onMouseDown: O,
                onMouseUp: v,
                children: I,
                rel: T,
            } = e,
            S = h(e, [
                "look",
                "color",
                "size",
                "fullWidth",
                "grow",
                "style",
                "className",
                "innerClassName",
                "to",
                "onClick",
                "onMouseDown",
                "onMouseUp",
                "children",
                "rel",
            ]);
        return (0, r.jsx)(
            s.rU,
            p(f({}, S), {
                to: m,
                onClick: y,
                onMouseUp: v,
                onMouseDown: O,
                style: c,
                rel: T,
                className: o()(d, u.button, t, n, i, {
                    [u.fullWidth]: a,
                    [u.grow]: l,
                }),
                children: (0, r.jsx)("span", {
                    className: o()(u.contents, _),
                    children: I,
                }),
            }),
        );
    });
