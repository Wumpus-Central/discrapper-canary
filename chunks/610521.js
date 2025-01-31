n.d(t, {
    OU: () => d,
    ZP: () => f,
    fC: () => s
});
var i = n(192379),
    r = function () {
        (this.locks = []), (this.listeners = []);
    };
function a(e, t, n) {
    void 0 === n && (n = !1);
    var i = (function (e) {
            return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: function (e) {
                    return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                }
            });
        })(e),
        r = t.compareDocumentPosition(e),
        a = null;
    r & Node.DOCUMENT_POSITION_PRECEDING || n ? (a = i.firstChild()) : r & Node.DOCUMENT_POSITION_FOLLOWING && (a = i.lastChild()), (null != a ? a : e).focus();
}
(r.prototype.add = function (e, t) {
    var n = {
        uid: e,
        setEnabled: t,
        enabled: !1
    };
    this.toggleLayer(this.current(), !1), this.locks.push(n), this.toggleLayer(n, !0), this.emit();
}),
    (r.prototype.remove = function (e) {
        var t = this.locks.find(function (t) {
            return t.uid === e;
        });
        this.toggleLayer(t, !1);
        var n = this.current(),
            i = null != n && n.uid === e;
        (this.locks = this.locks.filter(function (t) {
            return t.uid !== e;
        })),
            i && this.toggleLayer(this.current(), !0),
            this.emit();
    }),
    (r.prototype.current = function () {
        return this.locks[this.locks.length - 1];
    }),
    (r.prototype.isActive = function () {
        var e = this.current();
        return null != e && e.enabled;
    }),
    (r.prototype.toggleLayer = function (e, t) {
        null != e && (e.setEnabled(t), (e.enabled = t));
    }),
    (r.prototype.subscribe = function (e) {
        var t = this;
        return (
            this.listeners.push(e),
            e(this.isActive(), this.locks),
            function () {
                return (t.listeners = t.listeners.filter(function (t) {
                    return t !== e;
                }));
            }
        );
    }),
    (r.prototype.emit = function () {
        var e = this,
            t = this.isActive();
        this.listeners.forEach(function (n) {
            return n(t, e.locks);
        });
    });
var s = new r(),
    o = 0;
function l(e) {
    (0, i.useEffect)(
        function () {
            return s.subscribe(e);
        },
        [e]
    );
}
function u(e) {
    var t = (0, i.useState)(function () {
        return document.activeElement;
    })[0];
    (0, i.useLayoutEffect)(function () {
        return function () {
            (null != e && e.current) ||
                requestAnimationFrame(function () {
                    null != t && t.focus();
                });
        };
    }, []);
}
function c(e) {
    var t = (0, i.useState)(function () {
            return e || 'lock-' + o++;
        })[0],
        n = (0, i.useRef)(!1);
    return (
        (0, i.useLayoutEffect)(
            function () {
                return (
                    s.add(t, function (e) {
                        return (n.current = e);
                    }),
                    function () {
                        return s.remove(t);
                    }
                );
            },
            [t]
        ),
        n
    );
}
var d = (0, i.memo)(function () {
    var e = (0, i.useState)(!1),
        t = e[0];
    return (
        l(e[1]),
        (0, i.createElement)('div', {
            tabIndex: t ? 0 : void 0,
            style: {
                position: 'fixed',
                opacity: 0,
                pointerEvents: 'none'
            }
        })
    );
});
function f(e, t) {
    void 0 === t && (t = {});
    var n = t.disableReturnRef,
        r = t.attachTo;
    void 0 === r && (r = document);
    var s = t.disable,
        o = c();
    (0, i.useEffect)(
        function () {
            s && (o.current = !1);
        },
        [s]
    ),
        (0, i.useLayoutEffect)(
            function () {
                var t = e.current;
                function n(t) {
                    if (o.current) {
                        var n = e.current;
                        if (null != n) {
                            var i = t.target || document.body;
                            n.contains(i) || (t.preventDefault(), t.stopImmediatePropagation(), a(n, i));
                        }
                    }
                }
                function i(t) {
                    if (o.current) {
                        var n = e.current;
                        if (null != n) {
                            (null != t.relatedTarget && t.relatedTarget !== document.body) || (t.preventDefault(), n.focus());
                            var i = t.target || document.body;
                            n.contains(i) || a(n, i);
                        }
                    }
                }
                return (
                    null == t || null == document.activeElement || t.contains(document.activeElement) || null != t.querySelector('[autofocus]') || a(t, document.activeElement, !0),
                    r.addEventListener('focusin', n, { capture: !0 }),
                    r.addEventListener('focusout', i, { capture: !0 }),
                    function () {
                        r.removeEventListener('focusin', n, { capture: !0 }), r.removeEventListener('focusout', i, { capture: !0 });
                    }
                );
            },
            [e]
        ),
        u(n);
}
