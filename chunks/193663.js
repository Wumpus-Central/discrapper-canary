n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(758879),
    l = n(397927),
    c = n(226540),
    u = n(227),
    d = n(820659);
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
function h(e, t) {
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let E = function (e) {
    var t;
    let {
            ref: n,
            avatar: a,
            name: f,
            nameplate: _,
            children: g,
            subText: E,
            decorators: b,
            onClick: y,
            hovered: O,
            selected: A,
            muted: v,
            to: S,
            avatarClassName: I,
            selectedClassName: T,
            innerClassName: C,
            wrapContent: N,
            highlighted: R,
            focusProps: w,
        } = e,
        P = m(e, [
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
    (P.className = s()(P.className, d.kL, {
        [d.wH]: A,
        [d.mr]: R,
        [null != T ? T : ""]: A,
        [d.vk]: !A && (null != S || null != y),
    })),
        (P["aria-selected"] = null != (t = P["aria-selected"]) ? t : A);
    let D = i.useRef(null),
        x = (0, r.jsxs)("div", {
            className: s()(d.sn, { [d.EY]: null != _ }),
            children: [
                (0, r.jsx)(u.A, {
                    nameplate: _,
                    hovered: O,
                    selected: A,
                    content: D,
                    placement: c.u.MEMBER_LIST,
                }),
                (0, r.jsxs)("div", {
                    ref: D,
                    className: s()(C, d.Zp, {
                        [d.SU]: !A && v,
                        [d.Ib]: N,
                    }),
                    children: [
                        (0, r.jsx)("div", {
                            className: s()(d.my, I),
                            children: a,
                        }),
                        (0, r.jsxs)("div", {
                            className: d.Qs,
                            children: [
                                (0, r.jsxs)("div", {
                                    className: d.BG,
                                    children: [
                                        (0, r.jsx)("div", {
                                            className: s()(d.UU, { [d.to]: N }),
                                            children: f,
                                        }),
                                        b,
                                    ],
                                }),
                                null != E
                                    ? (0, r.jsx)("div", {
                                          className: d.Sv,
                                          children: E,
                                      })
                                    : null,
                            ],
                        }),
                        null != g
                            ? (0, r.jsx)("div", {
                                  className: d.Y_,
                                  children: g,
                              })
                            : null,
                    ],
                }),
            ],
        });
    return null != S
        ? (0, r.jsx)(
              l.vN3,
              h(p({}, w), {
                  children: (0, r.jsx)(
                      o.N_,
                      h(
                          p(
                              {
                                  to: S,
                                  onClick: y,
                              },
                              P,
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
                l.DUT,
                h(
                    p(
                        {
                            onClick: y,
                            focusProps: w,
                        },
                        P,
                    ),
                    {
                        role: "listitem",
                        innerRef: n,
                        children: x,
                    },
                ),
            )
          : (0, r.jsx)(
                l.vN3,
                h(p({}, w), {
                    children: (0, r.jsx)(
                        "div",
                        h(p({}, P), {
                            role: "listitem",
                            ref: n,
                            children: x,
                        }),
                    ),
                }),
            );
};
