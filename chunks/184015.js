i.d(t, { Z: () => a, j: () => s });
var n = i(268218),
    l = i(70142),
    r = i(652215);
function s() {
    return (0, n.sq)({ createPromise: () => i.e("99193").then(i.t.bind(i, 224273, 23)), webpackId: 224273 }).then(
        (e) => {
            let { default: t } = e;
            return t;
        },
    );
}
function a() {
    let e = l.A.getClient();
    return null == e
        ? s().then((e) =>
              e.client
                  .create({ authorization: r.Gg3.BRAINTREE.KEY })
                  .then((e) => u(e))
                  .catch(() => null),
          )
        : u(e);
}
function u(e) {
    return s().then((t) =>
        t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null),
    );
}
