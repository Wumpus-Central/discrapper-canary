var r = n(201694).forEach,
    i = n(864483),
    o = n(10968),
    a = n(525185),
    s = n(498031),
    l = n(763160),
    c = n(117417),
    u = n(775548),
    d = n(656082),
    f = n(302366),
    _ = n(78687);
function p(e) {
    return Array.isArray(e) || void 0 !== e.length;
}
function h(e) {
    if (Array.isArray(e)) return e;
    var t = [];
    return (
        r(e, function (e) {
            t.push(e);
        }),
        t
    );
}
function m(e) {
    return e && 1 === e.nodeType;
}
function g(e, t, n) {
    var r = e[t];
    return null == r && void 0 !== n ? n : r;
}
e.exports = function (e) {
    if ((e = e || {}).idHandler)
        t = {
            get: function (t) {
                return e.idHandler.get(t, !0);
            },
            set: e.idHandler.set
        };
    else {
        var t, n;
        t = s({
            idGenerator: a(),
            stateHandler: d
        });
    }
    var E = e.reporter;
    E || (E = l(!1 === E));
    var b = g(e, 'batchProcessor', u({ reporter: E })),
        v = {};
    (v.callOnAdd = !!g(e, 'callOnAdd', !0)), (v.debug = !!g(e, 'debug', !1));
    var y = o(t),
        O = i({ stateHandler: d }),
        I = g(e, 'strategy', 'object'),
        S = g(e, 'important', !1),
        T = {
            reporter: E,
            batchProcessor: b,
            stateHandler: d,
            idHandler: t,
            important: S
        };
    if (('scroll' === I && (c.isLegacyOpera() ? (E.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.'), (I = 'object')) : c.isIE(9) && (E.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'), (I = 'object'))), 'scroll' === I)) n = _(T);
    else if ('object' === I) n = f(T);
    else throw Error('Invalid strategy name: ' + I);
    var A = {};
    function N(e) {
        if (!e) return E.error('At least one element is required.');
        if (m(e)) e = [e];
        else {
            if (!p(e)) return E.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
            e = h(e);
        }
        r(e, function (e) {
            y.removeAllListeners(e), n.uninstall(e), d.cleanState(e);
        });
    }
    function C(e) {
        n.initDocument && n.initDocument(e);
    }
    return {
        listenTo: function (e, i, o) {
            function a(e) {
                r(y.get(e), function (t) {
                    t(e);
                });
            }
            function s(e, t, n) {
                y.add(t, n), e && n(t);
            }
            if ((o || ((o = i), (i = e), (e = {})), !i)) throw Error('At least one element required.');
            if (!o) throw Error('Listener required.');
            if (m(i)) i = [i];
            else {
                if (!p(i)) return E.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                i = h(i);
            }
            var l = 0,
                c = g(e, 'callOnAdd', v.callOnAdd),
                u = g(e, 'onReady', function () {}),
                f = g(e, 'debug', v.debug);
            r(i, function (e) {
                d.getState(e) || (d.initState(e), t.set(e));
                var _ = t.get(e);
                if ((f && E.log('Attaching listener to element', _, e), !O.isDetectable(e))) {
                    if ((f && E.log(_, 'Not detectable.'), O.isBusy(e))) {
                        f && E.log(_, 'System busy making it detectable'),
                            s(c, e, o),
                            (A[_] = A[_] || []),
                            A[_].push(function () {
                                ++l === i.length && u();
                            });
                        return;
                    }
                    return (
                        f && E.log(_, 'Making detectable...'),
                        O.markBusy(e, !0),
                        n.makeDetectable(
                            {
                                debug: f,
                                important: S
                            },
                            e,
                            function (e) {
                                if ((f && E.log(_, 'onElementDetectable'), d.getState(e))) {
                                    O.markAsDetectable(e), O.markBusy(e, !1), n.addListener(e, a), s(c, e, o);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var p = e.offsetWidth,
                                            h = e.offsetHeight;
                                        (t.startSize.width !== p || t.startSize.height !== h) && a(e);
                                    }
                                    A[_] &&
                                        r(A[_], function (e) {
                                            e();
                                        });
                                } else f && E.log(_, 'Element uninstalled before being detectable.');
                                delete A[_], ++l === i.length && u();
                            }
                        )
                    );
                }
                f && E.log(_, 'Already detecable, adding listener.'), s(c, e, o), l++;
            }),
                l === i.length && u();
        },
        removeListener: y.removeListener,
        removeAllListeners: y.removeAllListeners,
        uninstall: N,
        initDocument: C
    };
};
