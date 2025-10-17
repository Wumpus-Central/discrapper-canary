n.d(t, { Z: () => l });
var o = n(951288);
n(647438);
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
        b = t ? s.intl.string(s.t.EuwcxM) : s.intl.string(s.t["e/z3nZ"]),
        g = t ? s.intl.string(s.t["1GjS/f"]) : s.intl.string(s.t["7tXu0t"]);
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
