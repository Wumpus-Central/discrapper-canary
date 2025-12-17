t.d(n, { Z: () => c });
var o = t(54381);
t(473749);
var i = t(212598),
    r = t(728151),
    s = t(981631),
    a = t(388032),
    l = t(344595),
    d = t(322539);
function c(e) {
    let {
            isWaitingForConnection: n,
            onWaitingForConnection: t,
            expectedCallbackState: c,
            onAuthToken: u,
            onError: C,
            onClose: b,
        } = e,
        h = n
            ? (0, o.jsx)("img", {
                  src: d,
                  width: "168",
                  height: "124",
                  alt: "",
              })
            : (0, o.jsx)("img", {
                  src: l,
                  width: "152",
                  height: "123",
                  alt: "",
              }),
        p = n ? a.intl.string(a.t.tZ6ze7) : a.intl.string(a.t.siPkNp),
        x = n ? a.intl.string(a.t.VgWnwP) : a.intl.string(a.t.oS4NEH);
    return (0, o.jsx)(i.t, {
        platformType: s.ABu.CRUNCHYROLL,
        isWaitingForConnection: n,
        onWaitingForConnection: t,
        expectedCallbackState: c,
        onAuthToken: u,
        onError: C,
        onClose: b,
        img: h,
        title: p,
        body: x,
        redirectDestination: r.pY,
    });
}
