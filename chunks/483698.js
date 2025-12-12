n.d(t, { u: () => i });
var r = n(514962);
let i = (e) => {
    let t = (t) => {
        ("pagehide" === t.type || (r.m.document && "hidden" === r.m.document.visibilityState)) && e(t);
    };
    r.m.document && (addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0));
};
