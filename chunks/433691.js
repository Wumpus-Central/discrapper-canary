a.d(e, { u: () => n });
var r = a(395848);
let n = (t) => {
    let e = (e) => {
        ('pagehide' === e.type || (r.m.document && 'hidden' === r.m.document.visibilityState)) && t(e);
    };
    r.m.document && (addEventListener('visibilitychange', e, !0), addEventListener('pagehide', e, !0));
};
