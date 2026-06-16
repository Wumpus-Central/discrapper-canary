"use strict";
n.d(t, { Z: () => o, j: () => a });
var i = n(268218),
    r = n(70142),
    s = n(652215);
function a() {
    return (0, i.sq)({ createPromise: () => n.e("99193").then(n.t.bind(n, 224273, 23)), webpackId: 224273 }).then(
        (e) => {
            let { default: t } = e;
            return t;
        },
    );
}
function o() {
    let e = r.A.getClient();
    return null == e
        ? a().then((e) =>
              e.client
                  .create({ authorization: s.Gg3.BRAINTREE.KEY })
                  .then((e) => l(e))
                  .catch(() => null),
          )
        : l(e);
}
function l(e) {
    return a().then((t) =>
        t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null),
    );
}
