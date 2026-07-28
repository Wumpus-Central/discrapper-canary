"use strict";
n.d(t, { Ay: () => u, Ut: () => l, rx: () => o });
var r = n(582128),
    i = function () {
        (this.locks = []), (this.listeners = []);
    };
function a(e, t, n) {
    void 0 === n && (n = !1);
    var r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function (e) {
                return e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
            },
        }),
        i = t.compareDocumentPosition(e),
        a = null;
    i & Node.DOCUMENT_POSITION_PRECEDING || n
        ? (a = r.firstChild())
        : i & Node.DOCUMENT_POSITION_FOLLOWING && (a = r.lastChild()),
        (null != a ? a : e).focus();
}
(i.prototype.add = function (e, t) {
    var n = { uid: e, setEnabled: t, enabled: !1 };
    this.toggleLayer(this.current(), !1), this.locks.push(n), this.toggleLayer(n, !0), this.emit();
}),
    (i.prototype.remove = function (e) {
        var t = this.locks.find(function (t) {
            return t.uid === e;
        });
        this.toggleLayer(t, !1);
        var n = this.current(),
            r = null != n && n.uid === e;
        (this.locks = this.locks.filter(function (t) {
            return t.uid !== e;
        })),
            r && this.toggleLayer(this.current(), !0),
            this.emit();
    }),
    (i.prototype.current = function () {
        return this.locks[this.locks.length - 1];
    }),
    (i.prototype.isActive = function () {
        var e = this.current();
        return null != e && e.enabled;
    }),
    (i.prototype.toggleLayer = function (e, t) {
        null != e && (e.setEnabled(t), (e.enabled = t));
    }),
    (i.prototype.subscribe = function (e) {
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
    (i.prototype.emit = function () {
        var e = this,
            t = this.isActive();
        this.listeners.forEach(function (n) {
            return n(t, e.locks);
        });
    });
var o = new i(),
    s = 0,
    l = (0, r.memo)(function () {
        var e,
            t = (0, r.useState)(!1),
            n = t[0];
        return (
            (e = t[1]),
            (0, r.useEffect)(
                function () {
                    return o.subscribe(e);
                },
                [e],
            ),
            (0, r.createElement)("div", {
                tabIndex: n ? 0 : void 0,
                style: { position: "fixed", opacity: 0, pointerEvents: "none" },
            })
        );
    });
function u(e, t) {
    void 0 === t && (t = {});
    var n,
        i,
        l,
        u = t.returnRef,
        c = t.disableReturnRef,
        d = t.attachTo;
    void 0 === d && (d = document);
    var f = t.disable,
        p = d instanceof HTMLElement ? d.ownerDocument : d,
        h =
            ((n = (0, r.useState)(function () {
                return "lock-" + s++;
            })[0]),
            (i = (0, r.useRef)(!1)),
            (0, r.useLayoutEffect)(
                function () {
                    return (
                        o.add(n, function (e) {
                            return (i.current = e);
                        }),
                        function () {
                            return o.remove(n);
                        }
                    );
                },
                [n],
            ),
            i);
    (0, r.useEffect)(
        function () {
            f && (h.current = !1);
        },
        [f, h],
    ),
        (0, r.useLayoutEffect)(
            function () {
                var t = e.current;
                function n(t) {
                    requestAnimationFrame(function () {
                        if (h.current) {
                            var n = e.current;
                            if (null != n) {
                                var r = t.target || p.body;
                                n.contains(r) || (t.preventDefault(), t.stopImmediatePropagation(), a(n, r));
                            }
                        }
                    });
                }
                function r(t) {
                    if (h.current) {
                        var n = e.current;
                        if (null != n) {
                            (null != t.relatedTarget && t.relatedTarget !== p.body) || (t.preventDefault(), n.focus());
                            var r = t.target || p.body;
                            n.contains(r) || a(n, r);
                        }
                    }
                }
                return (
                    null == t ||
                        null == p.activeElement ||
                        t.contains(p.activeElement) ||
                        null != t.querySelector("[autofocus]") ||
                        a(t, p.activeElement, !0),
                    d.addEventListener("focusin", n, { capture: !0 }),
                    d.addEventListener("focusout", r, { capture: !0 }),
                    function () {
                        d.removeEventListener("focusin", n, { capture: !0 }),
                            d.removeEventListener("focusout", r, { capture: !0 });
                    }
                );
            },
            [d, p, e, h],
        ),
        (l = (0, r.useRef)(document.activeElement)),
        (0, r.useLayoutEffect)(function () {
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
