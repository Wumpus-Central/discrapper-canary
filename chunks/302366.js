var i = n(117417);
e.exports = function (e) {
    var t = (e = e || {}).reporter,
        n = e.batchProcessor,
        r = e.stateHandler.getState;
    if (!t) throw Error('Missing required dependency: reporter.');
    function a(t) {
        var n = e.important ? ' !important; ' : '; ';
        return (t.join(n) + n).trim();
    }
    function s(e) {
        return r(e).object;
    }
    return {
        makeDetectable: function (e, s, o) {
            function l(s, o) {
                var l = a(['display: block', 'position: absolute', 'top: 0', 'left: 0', 'width: 100%', 'height: 100%', 'border: none', 'padding: 0', 'margin: 0', 'opacity: 0', 'z-index: -1000', 'pointer-events: none']),
                    u = !1,
                    c = window.getComputedStyle(s),
                    d = s.offsetWidth,
                    f = s.offsetHeight;
                function _() {
                    function n() {
                        if ('static' === c.position) {
                            s.style.setProperty('position', 'relative', e.important ? 'important' : '');
                            var n = function (t, n, i, r) {
                                function a(e) {
                                    return e.replace(/[^-\d\.]/g, '');
                                }
                                var s = i[r];
                                'auto' !== s && '0' !== a(s) && (t.warn('An element that is positioned static has style.' + r + '=' + s + ' which is ignored due to the static positioning. The element will need to be positioned relative, so the style.' + r + ' will be set to 0. Element: ', n), n.style.setProperty(r, '0', e.important ? 'important' : ''));
                            };
                            n(t, s, c, 'top'), n(t, s, c, 'right'), n(t, s, c, 'bottom'), n(t, s, c, 'left');
                        }
                    }
                    function a() {
                        function e(t, n) {
                            if (!t.contentDocument) {
                                var i = r(t);
                                i.checkForObjectDocumentTimeoutId && window.clearTimeout(i.checkForObjectDocumentTimeoutId),
                                    (i.checkForObjectDocumentTimeoutId = setTimeout(function () {
                                        (i.checkForObjectDocumentTimeoutId = 0), e(t, n);
                                    }, 100));
                                return;
                            }
                            n(t.contentDocument);
                        }
                        u || n();
                        var t = this;
                        e(t, function (e) {
                            o(s);
                        });
                    }
                    '' !== c.position && (n(c), (u = !0));
                    var d = document.createElement('object');
                    (d.style.cssText = l), (d.tabIndex = -1), (d.type = 'text/html'), d.setAttribute('aria-hidden', 'true'), (d.onload = a), i.isIE() || (d.data = 'about:blank'), r(s) && (s.appendChild(d), (r(s).object = d), i.isIE() && (d.data = 'about:blank'));
                }
                (r(s).startSize = {
                    width: d,
                    height: f
                }),
                    n ? n.add(_) : _();
            }
            o || ((o = s), (s = e), (e = null)), (e = e || {}).debug, i.isIE(8) ? o(s) : l(s, o);
        },
        addListener: function (e, t) {
            function n() {
                t(e);
            }
            if (i.isIE(8)) (r(e).object = { proxy: n }), e.attachEvent('onresize', n);
            else {
                var a = s(e);
                if (!a) throw Error('Element is not detectable by this strategy.');
                a.contentDocument.defaultView.addEventListener('resize', n);
            }
        },
        uninstall: function (e) {
            if (r(e)) {
                var t = s(e);
                t && (i.isIE(8) ? e.detachEvent('onresize', t.proxy) : e.removeChild(t), r(e).checkForObjectDocumentTimeoutId && window.clearTimeout(r(e).checkForObjectDocumentTimeoutId), delete r(e).object);
            }
        }
    };
};
