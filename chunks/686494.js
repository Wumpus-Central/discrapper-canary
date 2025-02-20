t.d(n, { Z: () => d });
var o = t(200651);
t(192379);
var i = t(212598),
    r = t(728151),
    s = t(981631),
    a = t(388032),
    l = t(344595),
    c = t(322539);
function d(e) {
    let { isWaitingForConnection: n, onWaitingForConnection: t, expectedCallbackState: d, onAuthToken: u, onError: C, onClose: h } = e,
        _ = n
            ? (0, o.jsx)('img', {
                  src: c,
                  width: '168',
                  height: '124',
                  alt: ''
              })
            : (0, o.jsx)('img', {
                  src: l,
                  width: '152',
                  height: '123',
                  alt: ''
              }),
        p = n ? a.NW.string(a.t.tZ6ze3) : a.NW.string(a.t.siPkNj),
        x = n ? a.NW.string(a.t.VgWnwM) : a.NW.string(a.t.oS4NEB);
    return (0, o.jsx)(i.t, {
        platformType: s.ABu.CRUNCHYROLL,
        isWaitingForConnection: n,
        onWaitingForConnection: t,
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
