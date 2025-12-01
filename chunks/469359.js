let n, a, i;
r.d(t, { O: () => E });
var o = r(578346),
    _ = r(370336),
    s = r(394798),
    c = r(395848);
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
            let r = c.m[t] && c.m[t].prototype;
            r &&
                r.hasOwnProperty &&
                r.hasOwnProperty("addEventListener") &&
                ((0, _.hl)(r, "addEventListener", function (t) {
                    return function (r, n, a) {
                        if ("click" === r || "keypress" == r)
                            try {
                                let n = (this.__sentry_instrumentation_handlers__ =
                                        this.__sentry_instrumentation_handlers__ || {}),
                                    i = (n[r] = n[r] || { refCount: 0 });
                                if (!i.handler) {
                                    let n = u(e);
                                    (i.handler = n), t.call(this, r, n, a);
                                }
                                i.refCount++;
                            } catch (e) {}
                        return t.call(this, r, n, a);
                    };
                }),
                (0, _.hl)(r, "removeEventListener", function (e) {
                    return function (t, r, n) {
                        if ("click" === t || "keypress" == t)
                            try {
                                let r = this.__sentry_instrumentation_handlers__ || {},
                                    a = r[t];
                                a &&
                                    (a.refCount--,
                                    a.refCount <= 0 &&
                                        (e.call(this, t, a.handler, n), (a.handler = void 0), delete r[t]),
                                    0 === Object.keys(r).length && delete this.__sentry_instrumentation_handlers__);
                            } catch (e) {}
                        return e.call(this, t, r, n);
                    };
                }));
        });
}
function u(e, t = !1) {
    return (r) => {
        var o;
        if (!r || r._sentryCaptured) return;
        let E = (function (e) {
            try {
                return e.target;
            } catch (e) {
                return null;
            }
        })(r);
        if (
            ((o = r.type),
            "keypress" === o &&
                (!E || !E.tagName || ("INPUT" !== E.tagName && "TEXTAREA" !== E.tagName && !E.isContentEditable && 1)))
        )
            return;
        (0, _.xp)(r, "_sentryCaptured", !0), E && !E._sentryId && (0, _.xp)(E, "_sentryId", (0, s.DM)());
        let l = "keypress" === r.type ? "input" : r.type;
        !(function (e) {
            if (e.type !== a) return !1;
            try {
                if (!e.target || e.target._sentryId !== i) return !1;
            } catch (e) {}
            return !0;
        })(r) &&
            (e({
                event: r,
                name: l,
                global: t,
            }),
            (a = r.type),
            (i = E ? E._sentryId : void 0)),
            clearTimeout(n),
            (n = c.m.setTimeout(() => {
                (i = void 0), (a = void 0);
            }, 1000));
    };
}
