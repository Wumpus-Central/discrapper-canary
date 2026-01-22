r.d(t, {
    default: () => b,
});
var n = r(627968),
    a = r(64700),
    o = r(942381),
    c = r(397927),
    i = r(442433),
    l = r(259788),
    u = r(985018);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
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

function s(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}

function b(e) {
    let t,
        r,
        { onSelect: b, onClose: f } = e,
        y =
            ((t = l.Ay.useState((e) => e.timeToLiveMs, o.x)),
            (0, n.jsx)(c.aK1, {
                id: "opacity",
                "aria-haspopup": !0,
                label: "Time To Live",
                control: (e, r) =>
                    (0, n.jsx)(
                        c.i42,
                        s(p({}, e), {
                            ref: r,
                            value: t,
                            maxValue: l.nl,
                            minValue: l.jc,
                            renderValue: (e) => "".concat(e, "ms"),
                            onChange: (e) => (0, l.nj)(e),
                            "aria-label": "Time To Live",
                        }),
                    ),
            })),
        O =
            ((r = l.Ay.useState((e) => e.reappearTimeMs, o.x)),
            (0, n.jsx)(c.aK1, {
                id: "opacity",
                "aria-haspopup": !0,
                label: "Time To Reappear",
                control: (e, t) =>
                    (0, n.jsx)(
                        c.i42,
                        s(p({}, e), {
                            ref: t,
                            value: r,
                            maxValue: l.J5,
                            minValue: l.GI,
                            renderValue: (e) => "".concat(e, "ms"),
                            onChange: (e) => (0, l.g_)(e),
                            "aria-label": "Time To Reappear",
                        }),
                    ),
            })),
        j = a.useRef(f);
    return (
        a.useEffect(() => {
            j.current = f;
        }),
        a.useEffect(
            () => () => {
                var e;
                return null == (e = j.current) ? void 0 : e.call(j);
            },
            [],
        ),
        (0, n.jsxs)(c.W1t, {
            navId: "overlay-click-zone-debug-context-menu",
            onClose: i.Z_,
            "aria-label": u.intl.string(u.t.tPfVWi),
            onSelect: b,
            children: [y, O],
        })
    );
}
