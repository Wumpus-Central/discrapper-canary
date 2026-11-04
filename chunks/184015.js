var i = n(268218),
    r = n(70142),
    a = n(652215);
function s() {
    return (0, i.sq)({
        createPromise: () => Promise.all([n.e(328010), n.e(899193)]).then(n.t.bind(n, 224273, 23)),
        webpackId: 224273,
    }).then((e) => {
        let { default: t } = e;
        return t;
    });
}
function l(e) {
    return s().then((t) =>
        t.dataCollector
            .create({ client: e })
            .then((e) => e.deviceData)
            .catch(() => null),
    );
}
n.d(
    t,
    {},
    {
        Z: function () {
            let e = r.A.getClient();
            return null == e
                ? s().then((e) =>
                      e.client
                          .create({ authorization: a.Gg3.BRAINTREE.KEY })
                          .then((e) => l(e))
                          .catch(() => null),
                  )
                : l(e);
        },
        j: s,
    },
);
