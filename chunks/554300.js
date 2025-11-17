n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(319498),
    l = n(481060),
    c = n(359135),
    u = n(516817),
    d = n(81298);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let E = function (e) {
    var t,
        {
            ref: n,
            avatar: a,
            name: f,
            nameplate: p,
            children: g,
            subText: E,
            decorators: b,
            onClick: y,
            hovered: O,
            selected: v,
            muted: I,
            to: T,
            avatarClassName: S,
            selectedClassName: A,
            innerClassName: C,
            wrapContent: N,
            highlighted: R,
            focusProps: P,
        } = e,
        D = m(e, [
            "ref",
            "avatar",
            "name",
            "nameplate",
            "children",
            "subText",
            "decorators",
            "onClick",
            "hovered",
            "selected",
            "muted",
            "to",
            "avatarClassName",
            "selectedClassName",
            "innerClassName",
            "wrapContent",
            "highlighted",
            "focusProps",
        ]);
    (D.className = o()(D.className, d.container, {
        [d.selected]: v,
        [d.highlighted]: R,
        [null != A ? A : ""]: v,
        [d.clickable]: !v && (null != T || null != y),
    })),
        (D["aria-selected"] = null != (t = D["aria-selected"]) ? t : v);
    let w = i.useRef(null),
        x = (0, r.jsxs)("div", {
            className: o()(d.childContainer, { [d.nameplated]: null != p }),
            children: [
                (0, r.jsx)(u.Z, {
                    nameplate: p,
                    hovered: O,
                    selected: v,
                    content: w,
                    placement: c.i.MEMBER_LIST,
                }),
                (0, r.jsxs)("div", {
                    ref: w,
                    className: o()(C, d.layout, {
                        [d.muted]: !v && I,
                        [d.wrappedLayout]: N,
                    }),
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(d.avatar, S),
                            children: a,
                        }),
                        (0, r.jsxs)("div", {
                            className: d.content,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: d.nameAndDecorators,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: o()(d.name, { [d.wrappedName]: N }),
                                            children: f,
                                        }),
                                        b,
                                    ],
                                }),
                                null != E
                                    ? (0, r.jsx)("div", {
                                          className: d.subText,
                                          children: E,
                                      })
                                    : null,
                            ],
                        }),
                        null != g
                            ? (0, r.jsx)("div", {
                                  className: d.children,
                                  children: g,
                              })
                            : null,
                    ],
                }),
            ],
        });
    return null != T
        ? (0, r.jsx)(
              l.tEY,
              h(_({}, P), {
                  children: (0, r.jsx)(
                      s.rU,
                      h(
                          _(
                              {
                                  to: T,
                                  onClick: y,
                              },
                              D,
                          ),
                          {
                              role: "listitem",
                              ref: n,
                              children: x,
                          },
                      ),
                  ),
              }),
          )
        : null != y
          ? (0, r.jsx)(
                l.P3F,
                h(
                    _(
                        {
                            onClick: y,
                            focusProps: P,
                        },
                        D,
                    ),
                    {
                        role: "listitem",
                        innerRef: n,
                        children: x,
                    },
                ),
            )
          : (0, r.jsx)(
                l.tEY,
                h(_({}, P), {
                    children: (0, r.jsx)(
                        "div",
                        h(_({}, D), {
                            role: "listitem",
                            ref: n,
                            children: x,
                        }),
                    ),
                }),
            );
};
