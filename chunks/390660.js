n.d(t, {
    k: () => u,
    u: () => c,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(80556);

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
                o(e, t, n[t]);
            });
    }
    return e;
}
let l = "RESTRICTED_HOURS_MODAL_KEY";
async function c() {
    await (0, i.mMO)(
        async () => {
            let { default: e } = await n.e("55764").then(n.bind(n, 295615));
            return (t) => (0, r.jsx)(e, s({}, t));
        },
        {
            modalKey: l,
            dismissable: !1,
            backdropStyle: i.F2Z.LIGHTBOX,
            Layer: a.Ay,
        },
    );
}

function u() {
    (0, i.OoC)(l);
}
