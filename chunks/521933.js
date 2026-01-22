n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(204925),
    s = n(818348);
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
let c = {
    openNewUserAgeGateModal: (e) => {
        (0, i.mMO)(
            async () => {
                let { default: e } = await n.e("1143").then(n.bind(n, 284778));
                return (t) => (0, r.jsx)(e, l({}, t));
            },
            {
                modalKey: a.jc,
                onCloseRequest: s.tE,
                onCloseCallback: e,
            },
        );
    },
    openClaimAccountModal: function () {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 ? arguments[1] : void 0;
        (0, i.mMO)(
            async () => {
                let { default: t } = await n.e("27672").then(n.bind(n, 888363));
                return (n) => (0, r.jsx)(t, l({ claimRequired: e }, n));
            },
            {
                onCloseRequest: e ? s.tE : null,
                onCloseCallback: t,
            },
        );
    },
};
