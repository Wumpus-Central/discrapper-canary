n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(388032),
    o = n(303514);
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
function l(e) {
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
function c(e) {
    let { message: t } = e,
        s = () => {
            (0, i.ZDy)(async () => {
                let { default: e } = await n.e("14021").then(n.bind(n, 910673));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        l(
                            {
                                channelId: t.channel_id,
                                messageId: t.id,
                            },
                            n,
                        ),
                    );
            });
        };
    return (0, r.jsxs)(i.P3F, {
        onClick: s,
        className: o.accessory,
        children: [
            (0, r.jsx)(i.d3s, {
                size: "xs",
                color: "currentColor",
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                className: o.accessoryText,
                children: a.intl.string(a.t["2aXnfa"]),
            }),
        ],
    });
}
