n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var s = n(55187),
    i = n(652215),
    o = n(985018),
    a = n(698395),
    c = n(169764);
function l(e) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: n,
            expectedCallbackState: l,
            onAuthToken: d,
            onError: f,
            onClose: b,
        } = e,
        u = t
            ? (0, r.jsx)("img", {
                  src: c.A,
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, r.jsx)("img", {
                  src: a.A,
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        p = t ? o.intl.string(o.t.EuwcxO) : o.intl.string(o.t["e/z3na"]),
        g = t ? o.intl.string(o.t["1GjS/W"]) : o.intl.string(o.t["7tXu0i"]);
    return (0, r.jsx)(s.b, {
        platformType: i.fg2.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: l,
        onAuthToken: d,
        onError: f,
        onClose: b,
        img: u,
        title: p,
        body: g,
    });
}
