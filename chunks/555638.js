e.d(n, { A: () => c });
var o = e(255367);
e(73800);
var i = e(212598),
    r = e(388032),
    s = e(436200),
    a = e(757685);
function c(t) {
    let { platformType: n, isWaitingForConnection: e, onWaitingForConnection: c, expectedCallbackState: l, onAuthToken: d, onError: u, onClose: p } = t,
        _ = e
            ? (0, o.jsx)('img', {
                  src: a.Z,
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
        b = e ? r.intl.string(r.t.TTIocn) : r.intl.string(r.t['6n+UPT']),
        C = e ? r.intl.string(r.t.MNmoKC) : r.intl.string(r.t.JaaqIS);
    return (0, o.jsx)(i.t, {
        platformType: n,
        isWaitingForConnection: e,
        onWaitingForConnection: c,
        expectedCallbackState: l,
        onAuthToken: d,
        onError: u,
        onClose: p,
        img: _,
        title: b,
        body: C
    });
}
