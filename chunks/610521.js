r.d(n, {
    OU: function () {
        return f;
    },
    ZP: function () {
        return p;
    },
    fC: function () {
        return s;
    }
});
var i = r(192379),
    a = function () {
        (this.locks = []), (this.listeners = []);
    };
function o(e, n, r) {
    void 0 === r && (r = !1);
    var i = (function (e) {
            return document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: function (e) {
                    return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
                }
            });
        })(e),
        a = n.compareDocumentPosition(e),
        o = null;
    a & Node.DOCUMENT_POSITION_PRECEDING || r ? (o = i.firstChild()) : a & Node.DOCUMENT_POSITION_FOLLOWING && (o = i.lastChild()), (null != o ? o : e).focus();
}
(a.prototype.add = function (e, n) {
    var r = {
        uid: e,
        setEnabled: n,
        enabled: !1
    };
    this.toggleLayer(this.current(), !1), this.locks.push(r), this.toggleLayer(r, !0), this.emit();
}),
    (a.prototype.remove = function (e) {
        var n = this.locks.find(function (n) {
            return n.uid === e;
        });
        this.toggleLayer(n, !1);
        var r = this.current(),
            i = null != r && r.uid === e;
        (this.locks = this.locks.filter(function (n) {
            return n.uid !== e;
        })),
            i && this.toggleLayer(this.current(), !0),
            this.emit();
    }),
    (a.prototype.current = function () {
        return this.locks[this.locks.length - 1];
    }),
    (a.prototype.isActive = function () {
        var e = this.current();
        return null != e && e.enabled;
    }),
    (a.prototype.toggleLayer = function (e, n) {
        null != e && (e.setEnabled(n), (e.enabled = n));
    }),
    (a.prototype.subscribe = function (e) {
        var n = this;
        return (
            this.listeners.push(e),
            e(this.isActive(), this.locks),
            function () {
                return (n.listeners = n.listeners.filter(function (n) {
                    return n !== e;
                }));
            }
        );
    }),
    (a.prototype.emit = function () {
        var e = this,
            n = this.isActive();
        this.listeners.forEach(function (r) {
            return r(n, e.locks);
        });
    });
var s = new a(),
    l = 0;
function u(e) {
    (0, i.useEffect)(
        function () {
            return s.subscribe(e);
        },
        [e]
    );
}
function c(e) {
    var n = (0, i.useState)(function () {
        return document.activeElement;
    })[0];
    (0, i.useLayoutEffect)(function () {
        return function () {
            (null != e && e.current) ||
                requestAnimationFrame(function () {
                    null != n && n.focus();
                });
        };
    }, []);
}
function d(e) {
    var n = (0, i.useState)(function () {
            return e || 'lock-' + l++;
        })[0],
        r = (0, i.useRef)(!1);
    return (
        (0, i.useLayoutEffect)(
            function () {
                return (
                    s.add(n, function (e) {
                        return (r.current = e);
                    }),
                    function () {
                        return s.remove(n);
                    }
                );
            },
            [n]
        ),
        r
    );
}
var f = (0, i.memo)(function () {
    var e = (0, i.useState)(!1),
        n = e[0];
    return (
        u(e[1]),
        (0, i.createElement)('div', {
            tabIndex: n ? 0 : void 0,
            style: {
                position: 'fixed',
                opacity: 0,
                pointerEvents: 'none'
            }
        })
    );
});
function p(e, n) {
    void 0 === n && (n = {});
    var r = n.disableReturnRef,
        a = n.attachTo;
    void 0 === a && (a = document);
    var s = n.disable,
        l = d();
    (0, i.useEffect)(
        function () {
            s && (l.current = !1);
        },
        [s]
    ),
        (0, i.useLayoutEffect)(
            function () {
                var n = e.current;
                function r(n) {
                    if (l.current) {
                        var r = e.current;
                        if (null != r) {
                            var i = n.target || document.body;
                            r.contains(i) || (n.preventDefault(), n.stopImmediatePropagation(), o(r, i));
                        }
                    }
                }
                function i(n) {
                    if (l.current) {
                        var r = e.current;
                        if (null != r) {
                            (null != n.relatedTarget && n.relatedTarget !== document.body) || (n.preventDefault(), r.focus());
                            var i = n.target || document.body;
                            r.contains(i) || o(r, i);
                        }
                    }
                }
                return (
                    null == n || null == document.activeElement || n.contains(document.activeElement) || null != n.querySelector('[autofocus]') || o(n, document.activeElement, !0),
                    a.addEventListener('focusin', r, { capture: !0 }),
                    a.addEventListener('focusout', i, { capture: !0 }),
                    function () {
                        a.removeEventListener('focusin', r, { capture: !0 }), a.removeEventListener('focusout', i, { capture: !0 });
                    }
                );
            },
            [e]
        ),
        c(r);
}
