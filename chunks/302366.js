var r = n(117417);
e.exports = function (e) {
    var t = (e = e || {}).reporter,
        n = e.batchProcessor,
        i = e.stateHandler.getState;
    if (!t) throw Error('Missing required dependency: reporter.');
    function o(t) {
        var n = e.important ? ' !important; ' : '; ';
        return (t.join(n) + n).trim();
    }
    function a(e) {
        return i(e).object;
    }
    return {
        makeDetectable: function (e, a, s) {
            function l(a, s) {
                var l = o(['display: block', 'position: absolute', 'top: 0', 'left: 0', 'width: 100%', 'height: 100%', 'border: none', 'padding: 0', 'margin: 0', 'opacity: 0', 'z-index: -1000', 'pointer-events: none']),
                    c = !1,
                    u = window.getComputedStyle(a),
                    d = a.offsetWidth,
                    f = a.offsetHeight;
                function _() {
                    function n() {
                        if ('static' === u.position) {
                            a.style.setProperty('position', 'relative', e.important ? 'important' : '');
                            var n = function (t, n, r, i) {
                                function o(e) {
                                    return e.replace(/[^-\d\.]/g, '');
                                }
                                var a = r[i];
                                'auto' !== a && '0' !== o(a) && (t.warn('An element that is positioned static has style.' + i + '=' + a + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + i + ' will be set to 0. Element: ', n), n.style.setProperty(i, '0', e.important ? 'important' : ''));
                            };
                            n(t, a, u, 'top'), n(t, a, u, 'right'), n(t, a, u, 'bottom'), n(t, a, u, 'left');
                        }
                    }
                    function o() {
                        function e(t, n) {
                            if (!t.contentDocument) {
                                var r = i(t);
                                r.checkForObjectDocumentTimeoutId && window.clearTimeout(r.checkForObjectDocumentTimeoutId),
                                    (r.checkForObjectDocumentTimeoutId = setTimeout(function () {
                                        (r.checkForObjectDocumentTimeoutId = 0), e(t, n);
                                    }, 100));
                                return;
                            }
                            n(t.contentDocument);
                        }
                        c || n();
                        var t = this;
                        e(t, function (e) {
                            s(a);
                        });
                    }
                    '' !== u.position && (n(u), (c = !0));
                    var d = document.createElement('object');
                    (d.style.cssText = l), (d.tabIndex = -1), (d.type = 'text/html'), d.setAttribute('aria-hidden', 'true'), (d.onload = o), r.isIE() || (d.data = 'about:blank'), i(a) && (a.appendChild(d), (i(a).object = d), r.isIE() && (d.data = 'about:blank'));
                }
                (i(a).startSize = {
                    width: d,
                    height: f
                }),
                    n ? n.add(_) : _();
            }
            s || ((s = a), (a = e), (e = null)), (e = e || {}).debug, r.isIE(8) ? s(a) : l(a, s);
        },
        addListener: function (e, t) {
            function n() {
                t(e);
            }
            if (r.isIE(8)) (i(e).object = { proxy: n }), e.attachEvent('onresize', n);
            else {
                var o = a(e);
                if (!o) throw Error('Element is not detectable by this strategy.');
                o.contentDocument.defaultView.addEventListener('resize', n);
            }
        },
        uninstall: function (e) {
            if (i(e)) {
                var t = a(e);
                t && (r.isIE(8) ? e.detachEvent('onresize', t.proxy) : e.removeChild(t), i(e).checkForObjectDocumentTimeoutId && window.clearTimeout(i(e).checkForObjectDocumentTimeoutId), delete i(e).object);
            }
        }
    };
};
