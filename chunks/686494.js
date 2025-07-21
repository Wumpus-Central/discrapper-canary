t.d(e, { Z: () => d });
var o = t(255367);
t(73800);
var i = t(212598),
    r = t(728151),
    s = t(981631),
    l = t(388032),
    a = t(344595),
    c = t(322539);
function d(n) {
    let { isWaitingForConnection: e, onWaitingForConnection: t, expectedCallbackState: d, onAuthToken: u, onError: C, onClose: _ } = n,
        h = e
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
        p = e ? l.intl.string(l.t.tZ6ze3) : l.intl.string(l.t.siPkNj),
        x = e ? l.intl.string(l.t.VgWnwM) : l.intl.string(l.t.oS4NEB);
    return (0, o.jsx)(i.t, {
        platformType: s.ABu.CRUNCHYROLL,
        isWaitingForConnection: e,
        onWaitingForConnection: t,
        expectedCallbackState: d,
        onAuthToken: u,
        onError: C,
        onClose: _,
        img: h,
        title: p,
        body: x,
        redirectDestination: r.pY
    });
}
