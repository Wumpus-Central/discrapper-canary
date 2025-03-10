n.d(t, {
    _: () => o,
    e: () => r
}),
    n(47120),
    n(301563);
var r = (function (e) {
    return (e[(e.MANAGED = 0)] = 'MANAGED'), (e[(e.QUICK = 1)] = 'QUICK'), e;
})({});
function i(e) {
    switch (e) {
        case '0':
            return 0;
        case '1':
            return 1;
        default:
            return null;
    }
}
function o(e) {
    if (null == e) return null;
    let [t, n] = e.split('-'),
        r = i(t);
    return null == r
        ? null
        : {
              type: r,
              encodedLinkId: e,
              decodedLinkId: n
          };
}
