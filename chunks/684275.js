n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(273504),
    s = n(388032);
function o(e) {
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
function c(e, t) {
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
        case a.Ux.PROFANITY:
            (t = s.intl.string(s.t["I+BDrH"])), (n = s.intl.string(s.t.hISCms));
            break;
        case a.Ux.SEXUAL_CONTENT:
            (t = s.intl.string(s.t.URSMet)), (n = s.intl.string(s.t.oRQDBs));
            break;
        case a.Ux.SLURS:
            (t = s.intl.string(s.t["xjK2M/"])), (n = s.intl.string(s.t.oJYXBG));
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
    let { rule: n, onChangeRule: s } = e,
        [u, g] = i.useState(new Set(null == n || null == (t = n.triggerMetadata) ? void 0 : t.presets)),
        m = i.useMemo(
            () => (e) => {
                s(c(o({}, n), { triggerMetadata: c(o({}, n.triggerMetadata), { presets: e }) }));
            },
            [s, n],
        ),
        p = i.useCallback(
            (e) => {
                let t = e.map((e) => e);
                g(new Set(t)), m(t);
            },
            [m],
        ),
        f = i.useMemo(
            () => [
                {
                    label: d(a.Ux.PROFANITY).headerText,
                    description: d(a.Ux.PROFANITY).subtitleText,
                    value: String(a.Ux.PROFANITY),
                },
                {
                    label: d(a.Ux.SLURS).headerText,
                    description: d(a.Ux.SLURS).subtitleText,
                    value: String(a.Ux.SLURS),
                },
                {
                    label: d(a.Ux.SEXUAL_CONTENT).headerText,
                    description: d(a.Ux.SEXUAL_CONTENT).subtitleText,
                    value: String(a.Ux.SEXUAL_CONTENT),
                },
            ],
            [],
        );
    return (0, r.jsx)("div", {
        children: (0, r.jsx)(l.cOn, {
            selectedValues: Array.from(u).map(String),
            onChange: p,
            options: f,
        }),
    });
}
