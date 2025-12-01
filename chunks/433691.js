r.d(t, { u: () => a });
var n = r(395848);
let a = (e) => {
    let t = (t) => {
        ("pagehide" === t.type || (n.m.document && "hidden" === n.m.document.visibilityState)) && e(t);
    };
    n.m.document && (addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0));
};
