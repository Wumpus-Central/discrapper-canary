let r, i, a;
n.d(t, { O: () => E });
var o = n(958209),
    _ = n(886649),
    s = n(431660),
    c = n(514962);
function E(e) {
    (0, o.Hj)("dom", e), (0, o.D2)("dom", l);
}
function l() {
    if (!c.m.document) return;
    let e = o.rK.bind(null, "dom"),
        t = u(e, !0);
    c.m.document.addEventListener("click", t, !1),
        c.m.document.addEventListener("keypress", t, !1),
        ["EventTarget", "Node"].forEach((t) => {
            let n = c.m[t] && c.m[t].prototype;
            n &&
                n.hasOwnProperty &&
                n.hasOwnProperty("addEventListener") &&
                ((0, _.hl)(n, "addEventListener", function (t) {
                    return function (n, r, i) {
                        if ("click" === n || "keypress" == n)
                            try {
                                let r = (this.__sentry_instrumentation_handlers__ =
                                        this.__sentry_instrumentation_handlers__ || {}),
                                    a = (r[n] = r[n] || { refCount: 0 });
                                if (!a.handler) {
                                    let r = u(e);
                                    (a.handler = r), t.call(this, n, r, i);
                                }
                                a.refCount++;
                            } catch (e) {}
                        return t.call(this, n, r, i);
                    };
                }),
                (0, _.hl)(n, "removeEventListener", function (e) {
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
function u(e, t = !1) {
    return (n) => {
        var o;
        if (!n || n._sentryCaptured) return;
        let E = (function (e) {
            try {
                return e.target;
            } catch (e) {
                return null;
            }
        })(n);
        if (
            ((o = n.type),
            "keypress" === o &&
                (!E || !E.tagName || ("INPUT" !== E.tagName && "TEXTAREA" !== E.tagName && !E.isContentEditable && 1)))
        )
            return;
        (0, _.xp)(n, "_sentryCaptured", !0), E && !E._sentryId && (0, _.xp)(E, "_sentryId", (0, s.DM)());
        let l = "keypress" === n.type ? "input" : n.type;
        !(function (e) {
            if (e.type !== i) return !1;
            try {
                if (!e.target || e.target._sentryId !== a) return !1;
            } catch (e) {}
            return !0;
        })(n) &&
            (e({
                event: n,
                name: l,
                global: t,
            }),
            (i = n.type),
            (a = E ? E._sentryId : void 0)),
            clearTimeout(r),
            (r = c.m.setTimeout(() => {
                (a = void 0), (i = void 0);
            }, 1000));
    };
}
