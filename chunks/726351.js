var i = r(201694).forEach,
    a = r(864483),
    o = r(10968),
    s = r(525185),
    l = r(498031),
    u = r(763160),
    c = r(117417),
    d = r(775548),
    f = r(656082),
    p = r(302366),
    h = r(78687);
function _(e) {
    return Array.isArray(e) || void 0 !== e.length;
}
function m(e) {
    if (Array.isArray(e)) return e;
    var n = [];
    return (
        i(e, function (e) {
            n.push(e);
        }),
        n
    );
}
function g(e) {
    return e && 1 === e.nodeType;
}
function E(e, n, r) {
    var i = e[n];
    return null == i && void 0 !== r ? r : i;
}
e.exports = function (e) {
    if ((e = e || {}).idHandler)
        n = {
            get: function (n) {
                return e.idHandler.get(n, !0);
            },
            set: e.idHandler.set
        };
    else {
        var n, r;
        n = l({
            idGenerator: s(),
            stateHandler: f
        });
    }
    var v = e.reporter;
    !v && (v = u(!1 === v));
    var y = E(e, 'batchProcessor', d({ reporter: v })),
        b = {};
    (b.callOnAdd = !!E(e, 'callOnAdd', !0)), (b.debug = !!E(e, 'debug', !1));
    var I = o(n),
        T = a({ stateHandler: f }),
        S = E(e, 'strategy', 'object'),
        A = E(e, 'important', !1),
        C = {
            reporter: v,
            batchProcessor: y,
            stateHandler: f,
            idHandler: n,
            important: A
        };
    if (('scroll' === S && (c.isLegacyOpera() ? (v.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.'), (S = 'object')) : c.isIE(9) && (v.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'), (S = 'object'))), 'scroll' === S)) r = h(C);
    else if ('object' === S) r = p(C);
    else throw Error('Invalid strategy name: ' + S);
    var N = {};
    function R(e) {
        if (!e) return v.error('At least one element is required.');
        if (g(e)) e = [e];
        else {
            if (!_(e)) return v.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
            e = m(e);
        }
        i(e, function (e) {
            I.removeAllListeners(e), r.uninstall(e), f.cleanState(e);
        });
    }
    function O(e) {
        r.initDocument && r.initDocument(e);
    }
    return {
        listenTo: function e(e, a, o) {
            function s(e) {
                i(I.get(e), function (n) {
                    n(e);
                });
            }
            function l(e, n, r) {
                I.add(n, r), e && r(n);
            }
            if ((!o && ((o = a), (a = e), (e = {})), !a)) throw Error('At least one element required.');
            if (!o) throw Error('Listener required.');
            if (g(a)) a = [a];
            else {
                if (!_(a)) return v.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                a = m(a);
            }
            var u = 0,
                c = E(e, 'callOnAdd', b.callOnAdd),
                d = E(e, 'onReady', function () {}),
                p = E(e, 'debug', b.debug);
            i(a, function (e) {
                !f.getState(e) && (f.initState(e), n.set(e));
                var h = n.get(e);
                if ((p && v.log('Attaching listener to element', h, e), !T.isDetectable(e))) {
                    if ((p && v.log(h, 'Not detectable.'), T.isBusy(e))) {
                        p && v.log(h, 'System busy making it detectable'),
                            l(c, e, o),
                            (N[h] = N[h] || []),
                            N[h].push(function () {
                                ++u === a.length && d();
                            });
                        return;
                    }
                    return (
                        p && v.log(h, 'Making detectable...'),
                        T.markBusy(e, !0),
                        r.makeDetectable(
                            {
                                debug: p,
                                important: A
                            },
                            e,
                            function (e) {
                                if ((p && v.log(h, 'onElementDetectable'), f.getState(e))) {
                                    T.markAsDetectable(e), T.markBusy(e, !1), r.addListener(e, s), l(c, e, o);
                                    var n = f.getState(e);
                                    if (n && n.startSize) {
                                        var _ = e.offsetWidth,
                                            m = e.offsetHeight;
                                        (n.startSize.width !== _ || n.startSize.height !== m) && s(e);
                                    }
                                    N[h] &&
                                        i(N[h], function (e) {
                                            e();
                                        });
                                } else p && v.log(h, 'Element uninstalled before being detectable.');
                                delete N[h], ++u === a.length && d();
                            }
                        )
                    );
                }
                p && v.log(h, 'Already detecable, adding listener.'), l(c, e, o), u++;
            }),
                u === a.length && d();
        },
        removeListener: I.removeListener,
        removeAllListeners: I.removeAllListeners,
        uninstall: R,
        initDocument: O
    };
};
