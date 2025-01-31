n.d(t, {
    A: () => o,
    S: () => s
});
var i = n(663993),
    r = n(618541),
    a = n(981631);
function s() {
    return (0, i.wE)({
        createPromise: () => n.e('85468').then(n.t.bind(n, 91438, 23)),
        webpackId: 91438
    }).then((e) => {
        let { default: t } = e;
        return t;
    });
}
function o() {
    let e = r.Z.getClient();
    return null == e
        ? s().then((e) =>
              e.client
                  .create({ authorization: a.Ai1.BRAINTREE.KEY })
                  .then((e) => l(e))
                  .catch(() => null)
          )
        : l(e);
}
function l(e) {
    return s().then((t) =>
        t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null)
    );
}
