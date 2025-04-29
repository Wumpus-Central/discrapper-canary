e.d(t, { Z: () => d });
var o = e(255367);
e(73800);
var i = e(212598),
    r = e(728151),
    s = e(981631),
    l = e(388032),
    a = e(344595),
    c = e(322539);
function d(n) {
    let { isWaitingForConnection: t, onWaitingForConnection: e, expectedCallbackState: d, onAuthToken: u, onError: C, onClose: h } = n,
        _ = t
            ? (0, o.jsx)('img', {
                  src: c,
                  width: '168',
                  height: '124',
                  alt: ''
              })
            : (0, o.jsx)('img', {
                  src: a,
                  width: '152',
                  height: '123',
                  alt: ''
              }),
        p = t ? l.intl.string(l.t.tZ6ze3) : l.intl.string(l.t.siPkNj),
        x = t ? l.intl.string(l.t.VgWnwM) : l.intl.string(l.t.oS4NEB);
    return (0, o.jsx)(i.t, {
        platformType: s.ABu.CRUNCHYROLL,
        isWaitingForConnection: t,
        onWaitingForConnection: e,
        expectedCallbackState: d,
        onAuthToken: u,
        onError: C,
        onClose: h,
        img: _,
        title: p,
        body: x,
        redirectDestination: r.pY
    });
}
