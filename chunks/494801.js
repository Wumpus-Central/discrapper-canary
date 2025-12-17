n.d(t, { Z: () => l });
var o = n(54381);
n(473749);
var r = n(212598),
    i = n(981631),
    s = n(388032),
    a = n(903072),
    c = n(844434);
function l(e) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: n,
            expectedCallbackState: l,
            onAuthToken: d,
            onError: u,
            onClose: p,
        } = e,
        b = t
            ? (0, o.jsx)("img", {
                  src: c.Z,
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, o.jsx)("img", {
                  src: a.Z,
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        f = t ? s.intl.string(s.t.EuwcxO) : s.intl.string(s.t["e/z3na"]),
        x = t ? s.intl.string(s.t["1GjS/W"]) : s.intl.string(s.t["7tXu0i"]);
    return (0, o.jsx)(r.t, {
        platformType: i.ABu.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: l,
        onAuthToken: d,
        onError: u,
        onClose: p,
        img: b,
        title: f,
        body: x,
    });
}
