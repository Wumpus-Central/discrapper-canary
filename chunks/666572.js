n.d(t, {
    _: () => a,
    e: () => i
}),
    n(47120),
    n(301563);
var r,
    i = (((r = {})[(r.MANAGED = 0)] = 'MANAGED'), (r[(r.QUICK = 1)] = 'QUICK'), r);
function a(e) {
    if (null == e) return null;
    let [t, n] = e.split('-'),
        r = (function (e) {
            switch (e) {
                case '0':
                    return 0;
                case '1':
                    return 1;
                default:
                    return null;
            }
        })(t);
    return null == r
        ? null
        : {
              type: r,
              encodedLinkId: e,
              decodedLinkId: n
          };
}
