"use strict";
let r, i, o;
n.d(t, { i: () => u });
var a = n(873326),
    s = n(690094),
    l = n(231577),
    c = n(296438);
function u(e) {
    (0, a.s5)("dom", e), (0, a.AS)("dom", d);
}
function d() {
    if (!c.j.document) return;
    let e = a.aj.bind(null, "dom"),
        t = p(e, !0);
    c.j.document.addEventListener("click", t, !1),
        c.j.document.addEventListener("keypress", t, !1),
        ["EventTarget", "Node"].forEach((t) => {
            let n = c.j[t],
                r = n && n.prototype;
            r &&
                r.hasOwnProperty &&
                r.hasOwnProperty("addEventListener") &&
                ((0, s.GS)(r, "addEventListener", function (t) {
                    return function (n, r, i) {
                        if ("click" === n || "keypress" == n)
                            try {
                                let r = (this.__sentry_instrumentation_handlers__ =
                                        this.__sentry_instrumentation_handlers__ || {}),
                                    o = (r[n] = r[n] || { refCount: 0 });
                                if (!o.handler) {
                                    let r = p(e);
                                    (o.handler = r), t.call(this, n, r, i);
                                }
                                o.refCount++;
                            } catch (e) {}
                        return t.call(this, n, r, i);
                    };
                }),
                (0, s.GS)(r, "removeEventListener", function (e) {
                    return function (t, n, r) {
                        if ("click" === t || "keypress" == t)
                            try {
                                let n = this.__sentry_instrumentation_handlers__ || {},
                                    i = n[t];
                                i &&
                                    (i.refCount--,
                                    i.refCount <= 0 &&
                                        (e.call(this, t, i.handler, r), (i.handler = void 0), delete n[t]),
                                    0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__);
                            } catch (e) {}
                        return e.call(this, t, n, r);
                    };
                }));
        });
}
function p(e, t = !1) {
    return (n) => {
        var a;
        if (!n || n._sentryCaptured) return;
        let u = (function (e) {
            try {
                return e.target;
            } catch (e) {
                return null;
            }
        })(n);
        if (
            ((a = n.type),
            "keypress" === a &&
                (!u || !u.tagName || ("INPUT" !== u.tagName && "TEXTAREA" !== u.tagName && !u.isContentEditable && 1)))
        )
            return;
        (0, s.my)(n, "_sentryCaptured", !0), u && !u._sentryId && (0, s.my)(u, "_sentryId", (0, l.eJ)());
        let d = "keypress" === n.type ? "input" : n.type;
        !(function (e) {
            if (e.type !== i) return !1;
            try {
                if (!e.target || e.target._sentryId !== o) return !1;
            } catch (e) {}
            return !0;
        })(n) && (e({ event: n, name: d, global: t }), (i = n.type), (o = u ? u._sentryId : void 0)),
            clearTimeout(r),
            (r = c.j.setTimeout(() => {
                (o = void 0), (i = void 0);
            }, 1e3));
    };
}
