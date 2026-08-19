"use strict";
r.d(t, { Ay: () => u, Ut: () => l, rx: () => a });
var n = r(582128),
    o = function () {
        (this.locks = []), (this.listeners = []);
    };
function i(e, t, r) {
    void 0 === r && (r = !1);
    var n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function (e) {
                return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            },
        }),
        o = t.compareDocumentPosition(e),
        i = null;
    o & Node.DOCUMENT_POSITION_PRECEDING || r
        ? (i = n.firstChild())
        : o & Node.DOCUMENT_POSITION_FOLLOWING && (i = n.lastChild()),
        (null != i ? i : e).focus();
}
(o.prototype.add = function (e, t) {
    var r = { uid: e, setEnabled: t, enabled: !1 };
    this.toggleLayer(this.current(), !1), this.locks.push(r), this.toggleLayer(r, !0), this.emit();
}),
    (o.prototype.remove = function (e) {
        var t = this.locks.find(function (t) {
            return t.uid === e;
        });
        this.toggleLayer(t, !1);
        var r = this.current(),
            n = null != r && r.uid === e;
        (this.locks = this.locks.filter(function (t) {
            return t.uid !== e;
        })),
            n && this.toggleLayer(this.current(), !0),
            this.emit();
    }),
    (o.prototype.current = function () {
        return this.locks[this.locks.length - 1];
    }),
    (o.prototype.isActive = function () {
        var e = this.current();
        return null != e && e.enabled;
    }),
    (o.prototype.toggleLayer = function (e, t) {
        null != e && (e.setEnabled(t), (e.enabled = t));
    }),
    (o.prototype.subscribe = function (e) {
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
    (o.prototype.emit = function () {
        var e = this,
            t = this.isActive();
        this.listeners.forEach(function (r) {
            return r(t, e.locks);
        });
    });
var a = new o(),
    s = 0,
    l = (0, n.memo)(function () {
        var e,
            t = (0, n.useState)(!1),
            r = t[0];
        return (
            (e = t[1]),
            (0, n.useEffect)(
                function () {
                    return a.subscribe(e);
                },
                [e],
            ),
            (0, n.createElement)("div", {
                tabIndex: r ? 0 : void 0,
                style: { position: "fixed", opacity: 0, pointerEvents: "none" },
            })
        );
    });
function u(e, t) {
    void 0 === t && (t = {});
    var r,
        o,
        l,
        u = t.returnRef,
        c = t.disableReturnRef,
        f = t.attachTo;
    void 0 === f && (f = document);
    var p = t.disable,
        d = f instanceof HTMLElement ? f.ownerDocument : f,
        h =
            ((r = (0, n.useState)(function () {
                return "lock-" + s++;
            })[0]),
            (o = (0, n.useRef)(!1)),
            (0, n.useLayoutEffect)(
                function () {
                    return (
                        a.add(r, function (e) {
                            return (o.current = e);
                        }),
                        function () {
                            return a.remove(r);
                        }
                    );
                },
                [r],
            ),
            o);
    (0, n.useEffect)(
        function () {
            p && (h.current = !1);
        },
        [p, h],
    ),
        (0, n.useLayoutEffect)(
            function () {
                var t = e.current;
                function r(t) {
                    requestAnimationFrame(function () {
                        if (h.current) {
                            var r = e.current;
                            if (null != r) {
                                var n = t.target || d.body;
                                r.contains(n) || (t.preventDefault(), t.stopImmediatePropagation(), i(r, n));
                            }
                        }
                    });
                }
                function n(t) {
                    if (h.current) {
                        var r = e.current;
                        if (null != r) {
                            (null != t.relatedTarget && t.relatedTarget !== d.body) || (t.preventDefault(), r.focus());
                            var n = t.target || d.body;
                            r.contains(n) || i(r, n);
                        }
                    }
                }
                return (
                    null == t ||
                        null == d.activeElement ||
                        t.contains(d.activeElement) ||
                        null != t.querySelector("[autofocus]") ||
                        i(t, d.activeElement, !0),
                    f.addEventListener("focusin", r, { capture: !0 }),
                    f.addEventListener("focusout", n, { capture: !0 }),
                    function () {
                        f.removeEventListener("focusin", r, { capture: !0 }),
                            f.removeEventListener("focusout", n, { capture: !0 });
                    }
                );
            },
            [f, d, e, h],
        ),
        (l = (0, n.useRef)(document.activeElement)),
        (0, n.useLayoutEffect)(function () {
            return function () {
                (null != c && c.current) ||
                    requestAnimationFrame(function () {
                        null == u || null == u.current
                            ? null == l || null == l.current || l.current.focus()
                            : u.current.focus();
                    });
            };
        }, []);
}
