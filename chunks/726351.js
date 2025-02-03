var i = n(201694).forEach,
    r = n(864483),
    a = n(10968),
    s = n(525185),
    o = n(498031),
    l = n(763160),
    u = n(117417),
    c = n(775548),
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
        i(e, function (e) {
            t.push(e);
        }),
        t
    );
}
function m(e) {
    return e && 1 === e.nodeType;
}
function g(e, t, n) {
    var i = e[t];
    return null == i && void 0 !== n ? n : i;
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
        t = o({
            idGenerator: s(),
            stateHandler: d
        });
    }
    var E = e.reporter;
    E || (E = l(!1 === E));
    var v = g(e, 'batchProcessor', c({ reporter: E })),
        y = {};
    (y.callOnAdd = !!g(e, 'callOnAdd', !0)), (y.debug = !!g(e, 'debug', !1));
    var I = a(t),
        b = r({ stateHandler: d }),
        T = g(e, 'strategy', 'object'),
        S = g(e, 'important', !1),
        A = {
            reporter: E,
            batchProcessor: v,
            stateHandler: d,
            idHandler: t,
            important: S
        };
    if (('scroll' === T && (u.isLegacyOpera() ? (E.warn('Scroll strategy is not supported on legacy Opera. Changing to object strategy.'), (T = 'object')) : u.isIE(9) && (E.warn('Scroll strategy is not supported on IE9. Changing to object strategy.'), (T = 'object'))), 'scroll' === T)) n = _(A);
    else if ('object' === T) n = f(A);
    else throw Error('Invalid strategy name: ' + T);
    var N = {};
    function C(e) {
        if (!e) return E.error('At least one element is required.');
        if (m(e)) e = [e];
        else {
            if (!p(e)) return E.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
            e = h(e);
        }
        i(e, function (e) {
            I.removeAllListeners(e), n.uninstall(e), d.cleanState(e);
        });
    }
    function R(e) {
        n.initDocument && n.initDocument(e);
    }
    return {
        listenTo: function (e, r, a) {
            function s(e) {
                i(I.get(e), function (t) {
                    t(e);
                });
            }
            function o(e, t, n) {
                I.add(t, n), e && n(t);
            }
            if ((a || ((a = r), (r = e), (e = {})), !r)) throw Error('At least one element required.');
            if (!a) throw Error('Listener required.');
            if (m(r)) r = [r];
            else {
                if (!p(r)) return E.error('Invalid arguments. Must be a DOM element or a collection of DOM elements.');
                r = h(r);
            }
            var l = 0,
                u = g(e, 'callOnAdd', y.callOnAdd),
                c = g(e, 'onReady', function () {}),
                f = g(e, 'debug', y.debug);
            i(r, function (e) {
                d.getState(e) || (d.initState(e), t.set(e));
                var _ = t.get(e);
                if ((f && E.log('Attaching listener to element', _, e), !b.isDetectable(e))) {
                    if ((f && E.log(_, 'Not detectable.'), b.isBusy(e))) {
                        f && E.log(_, 'System busy making it detectable'),
                            o(u, e, a),
                            (N[_] = N[_] || []),
                            N[_].push(function () {
                                ++l === r.length && c();
                            });
                        return;
                    }
                    return (
                        f && E.log(_, 'Making detectable...'),
                        b.markBusy(e, !0),
                        n.makeDetectable(
                            {
                                debug: f,
                                important: S
                            },
                            e,
                            function (e) {
                                if ((f && E.log(_, 'onElementDetectable'), d.getState(e))) {
                                    b.markAsDetectable(e), b.markBusy(e, !1), n.addListener(e, s), o(u, e, a);
                                    var t = d.getState(e);
                                    if (t && t.startSize) {
                                        var p = e.offsetWidth,
                                            h = e.offsetHeight;
                                        (t.startSize.width !== p || t.startSize.height !== h) && s(e);
                                    }
                                    N[_] &&
                                        i(N[_], function (e) {
                                            e();
                                        });
                                } else f && E.log(_, 'Element uninstalled before being detectable.');
                                delete N[_], ++l === r.length && c();
                            }
                        )
                    );
                }
                f && E.log(_, 'Already detecable, adding listener.'), o(u, e, a), l++;
            }),
                l === r.length && c();
        },
        removeListener: I.removeListener,
        removeAllListeners: I.removeAllListeners,
        uninstall: C,
        initDocument: R
    };
};
