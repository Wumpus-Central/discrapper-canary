n.d(t, { m: () => f });
var r = n(454585),
    i = n(551452),
    o = n(532901);
function a(e, t, n) {
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
function s(e) {
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
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = c(s({}, r.Z.guildEventRules.link), {
        react: (0, o.Z)({
            enableBuildOverrides: !1,
            mustConfirmExternalLink: !0,
        }).react,
    }),
    d = c(s({}, r.Z.guildEventRules.channelMention), {
        react: (0, i.Z)({
            enableBuildOverrides: !1,
            shouldCloseDefaultModals: !0,
            shouldStopPropagation: !0,
        }).react,
    }),
    f = r.Z.reactParserFor(
        c(s({}, r.Z.guildEventRules), {
            link: u,
            channelMention: d,
        }),
    );
