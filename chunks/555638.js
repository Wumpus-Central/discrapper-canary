n.d(t, { A: () => s });
var o = n(54381);
n(473749);
var i = n(212598),
    a = n(388032),
    r = n(60236),
    d = n(254564);
function s(e) {
    let {
            platformType: t,
            isWaitingForConnection: n,
            onWaitingForConnection: s,
            expectedCallbackState: c,
            onAuthToken: l,
            onError: b,
            onClose: u,
        } = e,
        p = n
            ? (0, o.jsx)("img", {
                  src: d.Z,
                  width: "231",
                  height: "172",
                  alt: "",
              })
            : (0, o.jsx)("img", {
                  src: r.Z,
                  width: "231",
                  height: "160",
                  alt: "",
              }),
        C = n ? a.intl.string(a.t.TTIocg) : a.intl.string(a.t["6n+UPR"]),
        h = n ? a.intl.string(a.t.MNmoKH) : a.intl.string(a.t.JaaqIf);
    return (0, o.jsx)(i.t, {
        platformType: t,
        isWaitingForConnection: n,
        onWaitingForConnection: s,
        expectedCallbackState: c,
        onAuthToken: l,
        onError: b,
        onClose: u,
        img: p,
        title: C,
        body: h,
    });
}
