n.d(t, { Y: () => u });
var r = n(521548),
    i = n(793981),
    o = n(413815);
function a(e, t) {
    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function s(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
    }
}
function l(e, t, n) {
    return t && s(e.prototype, t), n && s(e, n), e;
}
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
var u = (function () {
    function e(t) {
        var n = this;
        a(this, e),
            c(
                this,
                "hooks",
                (0, i.p)({
                    dropTarget: function (e, t) {
                        n.clearDropTarget(),
                            (n.dropTargetOptions = t),
                            (0, o.d)(e) ? (n.dropTargetRef = e) : (n.dropTargetNode = e),
                            n.reconnect();
                    },
                }),
            ),
            c(this, "handlerId", null),
            c(this, "dropTargetRef", null),
            c(this, "dropTargetNode", void 0),
            c(this, "dropTargetOptionsInternal", null),
            c(this, "unsubscribeDropTarget", void 0),
            c(this, "lastConnectedHandlerId", null),
            c(this, "lastConnectedDropTarget", null),
            c(this, "lastConnectedDropTargetOptions", null),
            c(this, "backend", void 0),
            (this.backend = t);
    }
    return (
        l(e, [
            {
                key: "connectTarget",
                get: function () {
                    return this.dropTarget;
                },
            },
            {
                key: "reconnect",
                value: function () {
                    var e = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
                    e && this.disconnectDropTarget();
                    var t = this.dropTarget;
                    if (this.handlerId) {
                        if (!t) {
                            this.lastConnectedDropTarget = t;
                            return;
                        }
                        e &&
                            ((this.lastConnectedHandlerId = this.handlerId),
                            (this.lastConnectedDropTarget = t),
                            (this.lastConnectedDropTargetOptions = this.dropTargetOptions),
                            (this.unsubscribeDropTarget = this.backend.connectDropTarget(
                                this.handlerId,
                                t,
                                this.dropTargetOptions,
                            )));
                    }
                },
            },
            {
                key: "receiveHandlerId",
                value: function (e) {
                    e !== this.handlerId && ((this.handlerId = e), this.reconnect());
                },
            },
            {
                key: "dropTargetOptions",
                get: function () {
                    return this.dropTargetOptionsInternal;
                },
                set: function (e) {
                    this.dropTargetOptionsInternal = e;
                },
            },
            {
                key: "didHandlerIdChange",
                value: function () {
                    return this.lastConnectedHandlerId !== this.handlerId;
                },
            },
            {
                key: "didDropTargetChange",
                value: function () {
                    return this.lastConnectedDropTarget !== this.dropTarget;
                },
            },
            {
                key: "didOptionsChange",
                value: function () {
                    return !(0, r.w)(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
                },
            },
            {
                key: "disconnectDropTarget",
                value: function () {
                    this.unsubscribeDropTarget && (this.unsubscribeDropTarget(), (this.unsubscribeDropTarget = void 0));
                },
            },
            {
                key: "dropTarget",
                get: function () {
                    return this.dropTargetNode || (this.dropTargetRef && this.dropTargetRef.current);
                },
            },
            {
                key: "clearDropTarget",
                value: function () {
                    (this.dropTargetRef = null), (this.dropTargetNode = null);
                },
            },
        ]),
        e
    );
})();
