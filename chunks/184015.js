n.d(t, {
    Z: () => o,
    j: () => s,
});
var r = n(268218),
    i = n(70142),
    a = n(652215);

function s() {
    return (0, r.sq)({
        createPromise: () => n.e("99193").then(n.t.bind(n, 224273, 23)),
        webpackId: 224273,
    }).then((e) => {
        let { default: t } = e;
        return t;
    });
}

function o() {
    let e = i.A.getClient();
    return null == e
        ? s().then((e) =>
              e.client
                  .create({
                      authorization: a.Gg3.BRAINTREE.KEY,
                  })
                  .then((e) => l(e))
                  .catch(() => null),
          )
        : l(e);
}

function l(e) {
    return s().then((t) =>
        t.dataCollector
            .create({
                client: e,
            })
            .then((e) => e.deviceData)
            .catch(() => null),
    );
}
