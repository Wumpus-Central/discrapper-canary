let r, n, _;
a.d(e, { O: () => E });
var o = a(578346),
    i = a(370336),
    c = a(394798),
    s = a(395848);
function E(t) {
    (0, o.Hj)('dom', t), (0, o.D2)('dom', l);
}
function l() {
    if (!s.m.document) return;
    let t = o.rK.bind(null, 'dom'),
        e = u(t, !0);
    s.m.document.addEventListener('click', e, !1),
        s.m.document.addEventListener('keypress', e, !1),
        ['EventTarget', 'Node'].forEach((e) => {
            let a = s.m[e] && s.m[e].prototype;
            a &&
                a.hasOwnProperty &&
                a.hasOwnProperty('addEventListener') &&
                ((0, i.hl)(a, 'addEventListener', function (e) {
                    return function (a, r, n) {
                        if ('click' === a || 'keypress' == a)
                            try {
                                let r = (this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}),
                                    _ = (r[a] = r[a] || { refCount: 0 });
                                if (!_.handler) {
                                    let r = u(t);
                                    (_.handler = r), e.call(this, a, r, n);
                                }
                                _.refCount++;
                            } catch (t) {}
                        return e.call(this, a, r, n);
                    };
                }),
                (0, i.hl)(a, 'removeEventListener', function (t) {
                    return function (e, a, r) {
                        if ('click' === e || 'keypress' == e)
                            try {
                                let a = this.__sentry_instrumentation_handlers__ || {},
                                    n = a[e];
                                n && (n.refCount--, n.refCount <= 0 && (t.call(this, e, n.handler, r), (n.handler = void 0), delete a[e]), 0 === Object.keys(a).length && delete this.__sentry_instrumentation_handlers__);
                            } catch (t) {}
                        return t.call(this, e, a, r);
                    };
                }));
        });
}
function u(t, e = !1) {
    return (a) => {
        if (!a || a._sentryCaptured) return;
        let o = (function (t) {
            try {
                return t.target;
            } catch (t) {
                return null;
            }
        })(a);
        if ('keypress' === a.type && (!o || !o.tagName || ('INPUT' !== o.tagName && 'TEXTAREA' !== o.tagName && !o.isContentEditable))) return;
        (0, i.xp)(a, '_sentryCaptured', !0), o && !o._sentryId && (0, i.xp)(o, '_sentryId', (0, c.DM)());
        let E = 'keypress' === a.type ? 'input' : a.type;
        !(function (t) {
            if (t.type !== n) return !1;
            try {
                if (!t.target || t.target._sentryId !== _) return !1;
            } catch (t) {}
            return !0;
        })(a) &&
            (t({
                event: a,
                name: E,
                global: e
            }),
            (n = a.type),
            (_ = o ? o._sentryId : void 0)),
            clearTimeout(r),
            (r = s.m.setTimeout(() => {
                (_ = void 0), (n = void 0);
            }, 1000));
    };
}
