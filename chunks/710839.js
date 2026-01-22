n.d(t, {
    i: () => d,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(851907);

function s(e, t, n) {
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
                s(e, t, n[t]);
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
let u = "activity-age-gate";

function d(e) {
    let { application: t, channelId: s, onAgree: l, onDisagree: d } = e,
        f =
            null !=
            (0, a.Ay)({
                application: t,
                channelId: s,
            })
                ? i.KX8
                : i.SYi;
    return (
        (0, i.mMO)(
            async () => {
                let { ActivityAgeGateModal: e } = await n.e("75710").then(n.bind(n, 89805));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        c(o({}, n), {
                            channelId: s,
                            application: t,
                            onAgree: l,
                            onDisagree: d,
                        }),
                    );
            },
            {
                modalKey: u,
                contextKey: f,
            },
        ),
        Promise.resolve()
    );
}
