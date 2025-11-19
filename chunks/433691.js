_.d(e, { u: () => r });
var a = _(395848);
let r = (t) => {
    let e = (e) => {
        ("pagehide" === e.type || (a.m.document && "hidden" === a.m.document.visibilityState)) && t(e);
    };
    a.m.document && (addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0));
};
