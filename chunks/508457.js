r.d(t, {
    default: () => b,
});
var a = r(627968),
    n = r(64700),
    o = r(942381),
    i = r(397927),
    c = r(442433),
    l = r(259788),
    u = r(985018);

function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
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
                      var a = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, a);
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
            (0, a.jsx)(i.aK1, {
                id: "opacity",
                "aria-haspopup": !0,
                label: "Time To Live",
                control: (e, r) =>
                    (0, a.jsx)(
                        i.i42,
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
            (0, a.jsx)(i.aK1, {
                id: "opacity",
                "aria-haspopup": !0,
                label: "Time To Reappear",
                control: (e, t) =>
                    (0, a.jsx)(
                        i.i42,
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
        j = n.useRef(f);
    return (
        n.useEffect(() => {
            j.current = f;
        }),
        n.useEffect(
            () => () => {
                var e;
                return null == (e = j.current) ? void 0 : e.call(j);
            },
            [],
        ),
        (0, a.jsxs)(i.W1t, {
            "data-menu-migration-ready": !0,
            navId: "overlay-click-zone-debug-context-menu",
            onClose: c.Z_,
            "aria-label": u.intl.string(u.t.tPfVWi),
            onSelect: b,
            children: [y, O],
        })
    );
}
