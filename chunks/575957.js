t.d(n, { A: () => c });
var o = t(627968);
t(64700);
var i = t(55187),
    r = t(278086),
    s = t(652215),
    l = t(985018),
    a = t(523659),
    d = t(289595);
function c(e) {
    let {
            isWaitingForConnection: n,
            onWaitingForConnection: t,
            expectedCallbackState: c,
            onAuthToken: C,
            onError: _,
            onClose: u,
        } = e,
        g = n
            ? (0, o.jsx)("img", { src: d, width: "168", height: "124", alt: "" })
            : (0, o.jsx)("img", { src: a, width: "152", height: "123", alt: "" }),
        h = n ? l.intl.string(l.t.tZ6ze7) : l.intl.string(l.t.siPkNp),
        x = n ? l.intl.string(l.t.VgWnwP) : l.intl.string(l.t.oS4NEH);
    return (0, o.jsx)(i.b, {
        platformType: s.fg2.CRUNCHYROLL,
        isWaitingForConnection: n,
        onWaitingForConnection: t,
        expectedCallbackState: c,
        onAuthToken: C,
        onError: _,
        onClose: u,
        img: g,
        title: h,
        body: x,
        redirectDestination: r.v7,
    });
}
