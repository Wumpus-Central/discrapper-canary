let a, r, n;
_.d(e, { O: () => s });
var o = _(578346),
    E = _(370336),
    i = _(394798),
    c = _(395848);
function s(t) {
    (0, o.Hj)("dom", t), (0, o.D2)("dom", l);
}
function l() {
    if (!c.m.document) return;
    let t = o.rK.bind(null, "dom"),
        e = I(t, !0);
    c.m.document.addEventListener("click", e, !1),
        c.m.document.addEventListener("keypress", e, !1),
        ["EventTarget", "Node"].forEach((e) => {
            let _ = c.m[e] && c.m[e].prototype;
            _ &&
                _.hasOwnProperty &&
                _.hasOwnProperty("addEventListener") &&
                ((0, E.hl)(_, "addEventListener", function (e) {
                    return function (_, a, r) {
                        if ("click" === _ || "keypress" == _)
                            try {
                                let a = (this.__sentry_instrumentation_handlers__ =
                                        this.__sentry_instrumentation_handlers__ || {}),
                                    n = (a[_] = a[_] || { refCount: 0 });
                                if (!n.handler) {
                                    let a = I(t);
                                    (n.handler = a), e.call(this, _, a, r);
                                }
                                n.refCount++;
                            } catch (t) {}
                        return e.call(this, _, a, r);
                    };
                }),
                (0, E.hl)(_, "removeEventListener", function (t) {
                    return function (e, _, a) {
                        if ("click" === e || "keypress" == e)
                            try {
                                let _ = this.__sentry_instrumentation_handlers__ || {},
                                    r = _[e];
                                r &&
                                    (r.refCount--,
                                    r.refCount <= 0 &&
                                        (t.call(this, e, r.handler, a), (r.handler = void 0), delete _[e]),
                                    0 === Object.keys(_).length && delete this.__sentry_instrumentation_handlers__);
                            } catch (t) {}
                        return t.call(this, e, _, a);
                    };
                }));
        });
}
function I(t, e = !1) {
    return (_) => {
        var o;
        if (!_ || _._sentryCaptured) return;
        let s = (function (t) {
            try {
                return t.target;
            } catch (t) {
                return null;
            }
        })(_);
        if (
            ((o = _.type),
            "keypress" === o &&
                (!s || !s.tagName || ("INPUT" !== s.tagName && "TEXTAREA" !== s.tagName && !s.isContentEditable && 1)))
        )
            return;
        (0, E.xp)(_, "_sentryCaptured", !0), s && !s._sentryId && (0, E.xp)(s, "_sentryId", (0, i.DM)());
        let l = "keypress" === _.type ? "input" : _.type;
        !(function (t) {
            if (t.type !== r) return !1;
            try {
                if (!t.target || t.target._sentryId !== n) return !1;
            } catch (t) {}
            return !0;
        })(_) &&
            (t({
                event: _,
                name: l,
                global: e,
            }),
            (r = _.type),
            (n = s ? s._sentryId : void 0)),
            clearTimeout(a),
            (a = c.m.setTimeout(() => {
                (n = void 0), (r = void 0);
            }, 1000));
    };
}
