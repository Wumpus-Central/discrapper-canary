n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(570140);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
async function l(e) {
    let t = await (0, i.ZDy)(
        async () => {
            let { default: t } = await Promise.all([n.e('8739'), n.e('60301')]).then(n.bind(n, 677012));
            return (n) => (0, r.jsx)(t, s({}, n, e));
        },
        {
            onCloseCallback: () => {
                o.Z.dispatch({
                    type: 'INTERACTION_IFRAME_MODAL_CLOSE',
                    applicationId: e.application.id
                });
            }
        }
    );
    o.Z.dispatch({
        type: 'INTERACTION_IFRAME_MODAL_KEY_CREATE',
        modalKey: t
    });
}
