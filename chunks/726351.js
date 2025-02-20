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
    p = n(78687);
function _(e) {
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
    var v = g(e, 'batchProcessor', u({ reporter: E })),
        b = {};
    (b.callOnAdd = !!g(e, 'callOnAdd', !0)), (b.debug = !!g(e, 'debug', !1));
    var y = o(t),
        O = i({ stateHandler: d }),
        S = g(e, 'strategy', 'object'),
        I = g(e, 'important', !1),
        T = {
            reporter: E,
            batchProcessor: v,
            stateHandler: d,
            idHandler: t,
            important: I
        };
    if (('scroll' === S && (c.isLegacyOpera() ? (E.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.'), (S = 'object')) : c.isIE(9) && (E.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'), (S = 'object'))), 'scroll' === S)) n = p(T);
    else if ('object' === S) n = f(T);
    else throw Error('Invalid strategy name: ' + S);
    var N = {};
    function A(e) {
        if (!e) return E.error('At least one element is required.');
        if (m(e)) e = [e];
        else {
            if (!_(e)) return E.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
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
                if (!_(i)) return E.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                i = h(i);
            }
            var l = 0,
                c = g(e, 'callOnAdd', b.callOnAdd),
                u = g(e, 'onReady', function () {}),
                f = g(e, 'debug', b.debug);
            r(i, function (e) {
                d.getState(e) || (d.initState(e), t.set(e));
                var p = t.get(e);
                if ((f && E.log('Attaching listener to element', p, e), !O.isDetectable(e))) {
                    if ((f && E.log(p, 'Not detectable.'), O.isBusy(e))) {
                        f && E.log(p, 'System busy making it detectable'),
                            s(c, e, o),
                            (N[p] = N[p] || []),
                            N[p].push(function () {
                                ++l === i.length && u();
                            });
                        return;
                    }
                    return (
                        f && E.log(p, 'Making detectable...'),
                        O.markBusy(e, !0),
                        n.makeDetectable(
                            {
                                debug: f,
                                important: I
                            },
                            e,
                            function (e) {
                                if ((f && E.log(p, 'onElementDetectable'), d.getState(e))) {
                                    O.markAsDetectable(e), O.markBusy(e, !1), n.addListener(e, a), s(c, e, o);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var _ = e.offsetWidth,
                                            h = e.offsetHeight;
                                        (t.startSize.width !== _ || t.startSize.height !== h) && a(e);
                                    }
                                    N[p] &&
                                        r(N[p], function (e) {
                                            e();
                                        });
                                } else f && E.log(p, 'Element uninstalled before being detectable.');
                                delete N[p], ++l === i.length && u();
                            }
                        )
                    );
                }
                f && E.log(p, 'Already detecable, adding listener.'), s(c, e, o), l++;
            }),
                l === i.length && u();
        },
        removeListener: y.removeListener,
        removeAllListeners: y.removeAllListeners,
        uninstall: A,
        initDocument: C
    };
};
