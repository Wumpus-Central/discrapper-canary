t.d(e, { Z: () => d });
var o = t(54381);
t(473749);
var i = t(212598),
    r = t(728151),
    s = t(981631),
    l = t(388032),
    a = t(344595),
    c = t(322539);
function d(n) {
    let {
            isWaitingForConnection: e,
            onWaitingForConnection: t,
            expectedCallbackState: d,
            onAuthToken: u,
            onError: C,
            onClose: h,
        } = n,
        _ = e
            ? (0, o.jsx)("img", {
                  src: c,
                  width: "168",
                  height: "124",
                  alt: "",
              })
            : (0, o.jsx)("img", {
                  src: a,
                  width: "152",
                  height: "123",
                  alt: "",
              }),
        p = e ? l.intl.string(l.t.tZ6ze7) : l.intl.string(l.t.siPkNp),
        x = e ? l.intl.string(l.t.VgWnwP) : l.intl.string(l.t.oS4NEH);
    return (0, o.jsx)(i.t, {
        platformType: s.ABu.CRUNCHYROLL,
        isWaitingForConnection: e,
        onWaitingForConnection: t,
        expectedCallbackState: d,
        onAuthToken: u,
        onError: C,
        onClose: h,
        img: _,
        title: p,
        body: x,
        redirectDestination: r.pY,
    });
}
