n.d(t, {
    A: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(985018),
    s = n(414614);

function o(e, t, n) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}

function c(e) {
    let { message: t } = e,
        o = () => {
            (0, i.mMO)(async () => {
                let { default: e } = await n.e("35270").then(n.bind(n, 743461));
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
    return (0, r.jsxs)(i.DUT, {
        onClick: o,
        className: s.L,
        children: [
            (0, r.jsx)(i.mir, {
                size: "xs",
                color: "currentColor",
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/normal",
                className: s.m,
                children: a.intl.string(a.t["2aXnfa"]),
            }),
        ],
    });
}
