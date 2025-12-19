t.d(n, { Z: () => c });
var o = t(54381);
t(473749);
var i = t(212598),
    r = t(728151),
    a = t(981631),
    s = t(388032),
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
        p = n
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
        h = n ? s.intl.string(s.t.tZ6ze7) : s.intl.string(s.t.siPkNp),
        x = n ? s.intl.string(s.t.VgWnwP) : s.intl.string(s.t.oS4NEH);
    return (0, o.jsx)(i.t, {
        platformType: a.ABu.CRUNCHYROLL,
        isWaitingForConnection: n,
        onWaitingForConnection: t,
        expectedCallbackState: c,
        onAuthToken: u,
        onError: C,
        onClose: b,
        img: p,
        title: h,
        body: x,
        redirectDestination: r.pY,
    });
}
