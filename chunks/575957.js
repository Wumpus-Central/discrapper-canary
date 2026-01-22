t.d(e, { A: () => c });
var i = t(627968);
t(64700);
var o = t(55187),
    r = t(278086),
    s = t(652215),
    a = t(985018),
    d = t(523659),
    l = t(289595);
function c(n) {
    let {
            isWaitingForConnection: e,
            onWaitingForConnection: t,
            expectedCallbackState: c,
            onAuthToken: C,
            onError: b,
            onClose: g,
        } = n,
        h = e
            ? (0, i.jsx)("img", {
                  src: l,
                  width: "168",
                  height: "124",
                  alt: "",
              })
            : (0, i.jsx)("img", {
                  src: d,
                  width: "152",
                  height: "123",
                  alt: "",
              }),
        x = e ? a.intl.string(a.t.tZ6ze7) : a.intl.string(a.t.siPkNp),
        f = e ? a.intl.string(a.t.VgWnwP) : a.intl.string(a.t.oS4NEH);
    return (0, i.jsx)(o.b, {
        platformType: s.fg2.CRUNCHYROLL,
        isWaitingForConnection: e,
        onWaitingForConnection: t,
        expectedCallbackState: c,
        onAuthToken: C,
        onError: b,
        onClose: g,
        img: h,
        title: x,
        body: f,
        redirectDestination: r.v7,
    });
}
