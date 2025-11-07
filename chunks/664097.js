n.d(t, { o: () => d }), n(642613);
var r = n(647438),
    i = n(442837),
    a = n(115130),
    o = n(701488);
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
function c(e, t) {
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
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, i.cj)(
            [a.Z],
            () => ({
                isEnabled: a.Z.getIsEnabled(),
                lastUsedObject: a.Z.getLastUsedObject(),
            }),
            [],
        ),
        n = (0, i.Wu)([a.Z], () => a.Z.getDeveloperShelfItems(), []);
    return r.useMemo(
        () =>
            e
                ? n
                      .map((e) => ({
                          application: e,
                          activity: u(l({}, o.wT, e.embeddedActivityConfig), { application_id: e.id }),
                      }))
                      .sort((e, n) => {
                          let r = t[e.application.id],
                              i = t[n.application.id];
                          return null == r ? 1 : null == i ? -1 : i - r;
                      })
                : [],
        [n, e, t],
    );
};
