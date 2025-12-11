n.d(t, { Z: () => E });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(319498),
    l = n(481060),
    c = n(359135),
    u = n(516817),
    d = n(632180);
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
function p(e) {
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
function m(e, t) {
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
            nameplate: _,
            children: g,
            subText: E,
            decorators: b,
            onClick: y,
            hovered: O,
            selected: v,
            muted: S,
            to: I,
            avatarClassName: T,
            selectedClassName: C,
            innerClassName: A,
            wrapContent: N,
            highlighted: P,
            focusProps: R,
        } = e,
        w = h(e, [
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
    (w.className = o()(w.className, d.container, {
        [d.selected]: v,
        [d.highlighted]: P,
        [null != C ? C : ""]: v,
        [d.clickable]: !v && (null != I || null != y),
    })),
        (w["aria-selected"] = null != (t = w["aria-selected"]) ? t : v);
    let D = i.useRef(null),
        x = (0, r.jsxs)("div", {
            className: o()(d.childContainer, { [d.nameplated]: null != _ }),
            children: [
                (0, r.jsx)(u.Z, {
                    nameplate: _,
                    hovered: O,
                    selected: v,
                    content: D,
                    placement: c.i.MEMBER_LIST,
                }),
                (0, r.jsxs)("div", {
                    ref: D,
                    className: o()(A, d.layout, {
                        [d.muted]: !v && S,
                        [d.wrappedLayout]: N,
                    }),
                    children: [
                        (0, r.jsx)("div", {
                            className: o()(d.avatar, T),
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
    return null != I
        ? (0, r.jsx)(
              l.tEY,
              m(p({}, R), {
                  children: (0, r.jsx)(
                      s.rU,
                      m(
                          p(
                              {
                                  to: I,
                                  onClick: y,
                              },
                              w,
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
                m(
                    p(
                        {
                            onClick: y,
                            focusProps: R,
                        },
                        w,
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
                m(p({}, R), {
                    children: (0, r.jsx)(
                        "div",
                        m(p({}, w), {
                            role: "listitem",
                            ref: n,
                            children: x,
                        }),
                    ),
                }),
            );
};
