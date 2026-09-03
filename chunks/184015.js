n.d(t, { Z: () => l, j: () => s });
var i = n(268218),
    r = n(70142),
    a = n(652215);
function s() {
    return (0, i.sq)({ createPromise: () => n.e("899193").then(n.t.bind(n, 224273, 23)), webpackId: 224273 }).then(
        (e) => {
            let { default: t } = e;
            return t;
        },
    );
}
function l() {
    let e = r.A.getClient();
    return null == e
        ? s().then((e) =>
              e.client
                  .create({ authorization: a.Gg3.BRAINTREE.KEY })
                  .then((e) => o(e))
                  .catch(() => null),
          )
        : o(e);
}
function o(e) {
    return s().then((t) =>
        t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null),
    );
}
