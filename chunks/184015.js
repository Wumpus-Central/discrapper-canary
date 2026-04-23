n.d(t, { Z: () => s, j: () => a });
var i = n(268218),
    l = n(70142),
    r = n(652215);
function a() {
    return (0, i.sq)({ createPromise: () => n.e("99193").then(n.t.bind(n, 224273, 23)), webpackId: 224273 }).then(
        (e) => {
            let { default: t } = e;
            return t;
        },
    );
}
function s() {
    let e = l.A.getClient();
    return null == e
        ? a().then((e) =>
              e.client
                  .create({ authorization: r.Gg3.BRAINTREE.KEY })
                  .then((e) => u(e))
                  .catch(() => null),
          )
        : u(e);
}
function u(e) {
    return a().then((t) =>
        t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null),
    );
}
