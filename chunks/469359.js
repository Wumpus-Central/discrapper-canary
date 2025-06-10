let r, _, n;
a.d(e, { O: () => s });
var o = a(578346),
    i = a(370336),
    c = a(394798),
    E = a(395848);
function s(t) {
    (0, o.Hj)('dom', t), (0, o.D2)('dom', l);
}
function l() {
    if (!E.m.document) return;
    let t = o.rK.bind(null, 'dom'),
        e = u(t, !0);
    E.m.document.addEventListener('click', e, !1),
        E.m.document.addEventListener('keypress', e, !1),
        ['EventTarget', 'Node'].forEach((e) => {
            let a = E.m[e] && E.m[e].prototype;
            a &&
                a.hasOwnProperty &&
                a.hasOwnProperty('addEventListener') &&
                ((0, i.hl)(a, 'addEventListener', function (e) {
                    return function (a, r, _) {
                        if ('click' === a || 'keypress' == a)
                            try {
                                let r = (this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}),
                                    n = (r[a] = r[a] || { refCount: 0 });
                                if (!n.handler) {
                                    let r = u(t);
                                    (n.handler = r), e.call(this, a, r, _);
                                }
                                n.refCount++;
                            } catch (t) {}
                        return e.call(this, a, r, _);
                    };
                }),
                (0, i.hl)(a, 'removeEventListener', function (t) {
                    return function (e, a, r) {
                        if ('click' === e || 'keypress' == e)
                            try {
                                let a = this.__sentry_instrumentation_handlers__ || {},
                                    _ = a[e];
                                _ && (_.refCount--, _.refCount <= 0 && (t.call(this, e, _.handler, r), (_.handler = void 0), delete a[e]), 0 === Object.keys(a).length && delete this.__sentry_instrumentation_handlers__);
                            } catch (t) {}
                        return t.call(this, e, a, r);
                    };
                }));
        });
}
function u(t, e = !1) {
    return (a) => {
        var o;
        if (!a || a._sentryCaptured) return;
        let s = (function (t) {
            try {
                return t.target;
            } catch (t) {
                return null;
            }
        })(a);
        if (((o = a.type), 'keypress' === o && (!s || !s.tagName || ('INPUT' !== s.tagName && 'TEXTAREA' !== s.tagName && !s.isContentEditable && 1)))) return;
        (0, i.xp)(a, '_sentryCaptured', !0), s && !s._sentryId && (0, i.xp)(s, '_sentryId', (0, c.DM)());
        let l = 'keypress' === a.type ? 'input' : a.type;
        !(function (t) {
            if (t.type !== _) return !1;
            try {
                if (!t.target || t.target._sentryId !== n) return !1;
            } catch (t) {}
            return !0;
        })(a) &&
            (t({
                event: a,
                name: l,
                global: e
            }),
            (_ = a.type),
            (n = s ? s._sentryId : void 0)),
            clearTimeout(r),
            (r = E.m.setTimeout(() => {
                (n = void 0), (_ = void 0);
            }, 1000));
    };
}
