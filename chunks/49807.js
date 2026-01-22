n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(73153);
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
async function l(e) {
    let t = await (0, i.mMO)(
        async () => {
            let { default: t } = await n.e("18687").then(n.bind(n, 144482));
            return (n) => (0, r.jsx)(t, o({}, n, e));
        },
        {
            onCloseCallback: () => {
                a.h.dispatch({
                    type: "INTERACTION_IFRAME_MODAL_CLOSE",
                    applicationId: e.application.id,
                });
            },
        },
    );
    a.h.dispatch({
        type: "INTERACTION_IFRAME_MODAL_KEY_CREATE",
        modalKey: t,
    });
}
