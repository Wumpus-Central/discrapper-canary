n.d(t, { Z: () => c });
var o = n(255367);
n(73800);
var r = n(212598),
    i = n(981631),
    s = n(388032),
    a = n(250331),
    l = n(300778);
function c(e) {
    let { isWaitingForConnection: t, onWaitingForConnection: n, expectedCallbackState: c, onAuthToken: d, onError: u, onClose: f } = e,
        p = t
            ? (0, o.jsx)('img', {
                  src: l.Z,
                  width: '231',
                  height: '172',
                  alt: ''
              })
            : (0, o.jsx)('img', {
                  src: a.Z,
                  width: '231',
                  height: '160',
                  alt: ''
              }),
        b = t ? s.intl.string(s.t.EuwcxM) : s.intl.string(s.t['e/z3nZ']),
        x = t ? s.intl.string(s.t['1GjS/f']) : s.intl.string(s.t['7tXu0t']);
    return (0, o.jsx)(r.t, {
        platformType: i.ABu.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: c,
        onAuthToken: d,
        onError: u,
        onClose: f,
        img: p,
        title: b,
        body: x
    });
}
