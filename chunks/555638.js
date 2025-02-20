n.d(e, { A: () => a });
var o = n(200651);
n(192379);
var i = n(212598),
    r = n(388032),
    s = n(436200),
    c = n(757685);
function a(t) {
    let { platformType: e, isWaitingForConnection: n, onWaitingForConnection: a, expectedCallbackState: d, onAuthToken: l, onError: u, onClose: p } = t,
        _ = n
            ? (0, o.jsx)('img', {
                  src: c.Z,
                  width: '231',
                  height: '172',
                  alt: ''
              })
            : (0, o.jsx)('img', {
                  src: s.Z,
                  width: '231',
                  height: '160',
                  alt: ''
              }),
        b = n ? r.NW.string(r.t.TTIocn) : r.NW.string(r.t['6n+UPT']),
        N = n ? r.NW.string(r.t.MNmoKC) : r.NW.string(r.t.JaaqIS);
    return (0, o.jsx)(i.t, {
        platformType: e,
        isWaitingForConnection: n,
        onWaitingForConnection: a,
        expectedCallbackState: d,
        onAuthToken: l,
        onError: u,
        onClose: p,
        img: _,
        title: b,
        body: N
    });
}
