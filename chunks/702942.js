n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(411335),
    a = n(985018);

function c(e) {
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

function o(e, t) {
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

function d(e) {
    let t = "",
        n = "";
    switch (e) {
        case s.vY.PROFANITY:
            (t = a.intl.string(a.t["I+BDrH"])), (n = a.intl.string(a.t.hISCms));
            break;
        case s.vY.SEXUAL_CONTENT:
            (t = a.intl.string(a.t.URSMet)), (n = a.intl.string(a.t.oRQDBs));
            break;
        case s.vY.SLURS:
            (t = a.intl.string(a.t["xjK2M/"])), (n = a.intl.string(a.t.oJYXBG));
            break;
        default:
            (t = "Error"), (n = "Unrecognized list");
    }
    return {
        headerText: t,
        subtitleText: n,
    };
}

function u(e) {
    var t;
    let { rule: n, onChangeRule: a } = e,
        [u, f] = i.useState(new Set(null == n || null == (t = n.triggerMetadata) ? void 0 : t.presets)),
        g = i.useMemo(
            () => (e) => {
                a(
                    o(c({}, n), {
                        triggerMetadata: o(c({}, n.triggerMetadata), {
                            presets: e,
                        }),
                    }),
                );
            },
            [a, n],
        ),
        b = i.useCallback(
            (e) => {
                let t = e.map((e) => e);
                f(new Set(t)), g(t);
            },
            [g],
        ),
        m = i.useMemo(
            () => [
                {
                    label: d(s.vY.PROFANITY).headerText,
                    description: d(s.vY.PROFANITY).subtitleText,
                    value: String(s.vY.PROFANITY),
                },
                {
                    label: d(s.vY.SLURS).headerText,
                    description: d(s.vY.SLURS).subtitleText,
                    value: String(s.vY.SLURS),
                },
                {
                    label: d(s.vY.SEXUAL_CONTENT).headerText,
                    description: d(s.vY.SEXUAL_CONTENT).subtitleText,
                    value: String(s.vY.SEXUAL_CONTENT),
                },
            ],
            [],
        );
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(l.$QX, {
            selectedValues: Array.from(u).map(String),
            onChange: b,
            options: m,
        }),
    });
}
