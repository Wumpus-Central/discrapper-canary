r.d(n, {
    A: function () {
        return l;
    },
    S: function () {
        return s;
    }
});
var i = r(663993),
    a = r(618541),
    o = r(981631);
function s() {
    return (0, i.wE)({
        createPromise: () => r.e('10444').then(r.t.bind(r, 91438, 23)),
        webpackId: 91438
    }).then((e) => {
        let { default: n } = e;
        return n;
    });
}
function l() {
    let e = a.Z.getClient();
    return null == e
        ? s().then((e) =>
              e.client
                  .create({ authorization: o.Ai1.BRAINTREE.KEY })
                  .then((e) => u(e))
                  .catch(() => null)
          )
        : u(e);
}
function u(e) {
    return s().then((n) =>
        n.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null)
    );
}
