n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(92951),
    l = n(442837),
    a = n(481060),
    s = n(607070),
    o = n(314910),
    c = n(324060),
    u = n(830960),
    d = n(840767),
    p = n(639949),
    f = n(612776),
    g = n(921944),
    h = n(860076),
    m = n(388032),
    _ = n(519236),
    b = n(807808),
    E = n(512903);
function O(e) {
    var t, n;
    let { markAsDismissed: O } = e,
        v = u.E[f.yD.WELCOME],
        y = (0, a.dQu)(v.primaryColor).hex(),
        I = (0, l.e7)([s.Z], () => s.Z.useReducedMotion);
    return (0, r.jsx)(c.Q.Provider, {
        value:
            ((t = (function (e) {
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
            })({}, v)),
            (n = n = { backgroundOverlayColor: v.primaryColor }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        children: (0, r.jsx)(o.ZP, {
            children: (0, r.jsxs)("div", {
                className: _.container,
                style: {
                    backgroundImage: "url(".concat(E.Z, "), linear-gradient(").concat(y, "80, black)"),
                    borderColor: y,
                    boxShadow: "0 0 15px 5px ".concat(y, "50"),
                },
                children: [
                    (0, r.jsx)(i.Z, {
                        autoPlay: !I,
                        muted: !0,
                        playsInline: !0,
                        loop: !0,
                        className: _.logo,
                        children: (0, r.jsx)("source", {
                            src: b.Z,
                            type: "video/webm",
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: _.textContainer,
                        children: [
                            (0, r.jsx)(a.Text, {
                                variant: "display-sm",
                                style: { color: y },
                                className: _.display,
                                children: m.intl.string(h.default["CdU/PF"]),
                            }),
                            (0, r.jsx)(a.Text, {
                                variant: "text-md/medium",
                                style: { color: y },
                                children: m.intl.string(h.default["M/LvW0"]),
                            }),
                            (0, r.jsx)(a.P3F, {
                                className: _.dismissButton,
                                onClick: () => O(g.L.DISMISS),
                                style: { color: y },
                                children: (0, r.jsx)(a.Text, {
                                    variant: "text-xxs/normal",
                                    style: { color: y },
                                    children: m.intl.string(m.t.WAI6xu),
                                }),
                            }),
                        ],
                    }),
                    (0, r.jsx)(p.Z, {
                        className: _.clickable,
                        contentClassName: _.button,
                        onClick: () => {
                            (0, d.Z)("coachmark"), O(g.L.TAKE_ACTION);
                        },
                        children: (0, r.jsx)(a.d4D, {
                            color: y,
                            size: "sm",
                        }),
                    }),
                ],
            }),
        }),
    });
}
