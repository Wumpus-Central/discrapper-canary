n.d(t, { Z: () => l });
var o = n(54381);
n(473749);
var r = n(212598),
    i = n(981631),
    s = n(388032),
    a = n(250331),
    c = n(300778);
function l(e) {
    let {
            isWaitingForConnection: t,
            onWaitingForConnection: n,
            expectedCallbackState: l,
            onAuthToken: d,
            onError: u,
            onClose: p,
        } = e,
        f = t
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
        b = t ? s.intl.string(s.t.EuwcxO) : s.intl.string(s.t["e/z3na"]),
        g = t ? s.intl.string(s.t["1GjS/W"]) : s.intl.string(s.t["7tXu0i"]);
    return (0, o.jsx)(r.t, {
        platformType: i.ABu.XBOX,
        isWaitingForConnection: t,
        onWaitingForConnection: n,
        expectedCallbackState: l,
        onAuthToken: d,
        onError: u,
        onClose: p,
        img: f,
        title: b,
        body: g,
    });
}
