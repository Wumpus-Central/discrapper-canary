t.d(n, { b: () => s });
var a = t(611886),
    r = t(251874),
    i = t(816885);
function u(e, n, t) {
    return (
        n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t),
        e
    );
}
var s = (function () {
    var e;
    function n(e) {
        var t = this;
        if (!(this instanceof n)) throw TypeError("Cannot call a class as a function");
        u(
            this,
            "hooks",
            (0, a.i)({
                dragSource: function (e, n) {
                    t.clearDragSource(),
                        (t.dragSourceOptions = n || null),
                        (0, r.i)(e) ? (t.dragSourceRef = e) : (t.dragSourceNode = e),
                        t.reconnectDragSource();
                },
                dragPreview: function (e, n) {
                    t.clearDragPreview(),
                        (t.dragPreviewOptions = n || null),
                        (0, r.i)(e) ? (t.dragPreviewRef = e) : (t.dragPreviewNode = e),
                        t.reconnectDragPreview();
                },
            }),
        ),
            u(this, "handlerId", null),
            u(this, "dragSourceRef", null),
            u(this, "dragSourceNode", void 0),
            u(this, "dragSourceOptionsInternal", null),
            u(this, "dragSourceUnsubscribe", void 0),
            u(this, "dragPreviewRef", null),
            u(this, "dragPreviewNode", void 0),
            u(this, "dragPreviewOptionsInternal", null),
            u(this, "dragPreviewUnsubscribe", void 0),
            u(this, "lastConnectedHandlerId", null),
            u(this, "lastConnectedDragSource", null),
            u(this, "lastConnectedDragSourceOptions", null),
            u(this, "lastConnectedDragPreview", null),
            u(this, "lastConnectedDragPreviewOptions", null),
            u(this, "backend", void 0),
            (this.backend = e);
    }
    return (
        (e = [
            {
                key: "receiveHandlerId",
                value: function (e) {
                    this.handlerId !== e && ((this.handlerId = e), this.reconnect());
                },
            },
            {
                key: "connectTarget",
                get: function () {
                    return this.dragSource;
                },
            },
            {
                key: "dragSourceOptions",
                get: function () {
                    return this.dragSourceOptionsInternal;
                },
                set: function (e) {
                    this.dragSourceOptionsInternal = e;
                },
            },
            {
                key: "dragPreviewOptions",
                get: function () {
                    return this.dragPreviewOptionsInternal;
                },
                set: function (e) {
                    this.dragPreviewOptionsInternal = e;
                },
            },
            {
                key: "reconnect",
                value: function () {
                    this.reconnectDragSource(), this.reconnectDragPreview();
                },
            },
            {
                key: "reconnectDragSource",
                value: function () {
                    var e = this.dragSource,
                        n =
                            this.didHandlerIdChange() ||
                            this.didConnectedDragSourceChange() ||
                            this.didDragSourceOptionsChange();
                    if ((n && this.disconnectDragSource(), this.handlerId)) {
                        if (!e) {
                            this.lastConnectedDragSource = e;
                            return;
                        }
                        n &&
                            ((this.lastConnectedHandlerId = this.handlerId),
                            (this.lastConnectedDragSource = e),
                            (this.lastConnectedDragSourceOptions = this.dragSourceOptions),
                            (this.dragSourceUnsubscribe = this.backend.connectDragSource(
                                this.handlerId,
                                e,
                                this.dragSourceOptions,
                            )));
                    }
                },
            },
            {
                key: "reconnectDragPreview",
                value: function () {
                    var e = this.dragPreview,
                        n =
                            this.didHandlerIdChange() ||
                            this.didConnectedDragPreviewChange() ||
                            this.didDragPreviewOptionsChange();
                    if ((n && this.disconnectDragPreview(), this.handlerId)) {
                        if (!e) {
                            this.lastConnectedDragPreview = e;
                            return;
                        }
                        n &&
                            ((this.lastConnectedHandlerId = this.handlerId),
                            (this.lastConnectedDragPreview = e),
                            (this.lastConnectedDragPreviewOptions = this.dragPreviewOptions),
                            (this.dragPreviewUnsubscribe = this.backend.connectDragPreview(
                                this.handlerId,
                                e,
                                this.dragPreviewOptions,
                            )));
                    }
                },
            },
            {
                key: "didHandlerIdChange",
                value: function () {
                    return this.lastConnectedHandlerId !== this.handlerId;
                },
            },
            {
                key: "didConnectedDragSourceChange",
                value: function () {
                    return this.lastConnectedDragSource !== this.dragSource;
                },
            },
            {
                key: "didConnectedDragPreviewChange",
                value: function () {
                    return this.lastConnectedDragPreview !== this.dragPreview;
                },
            },
            {
                key: "didDragSourceOptionsChange",
                value: function () {
                    return !(0, i.b)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
                },
            },
            {
                key: "didDragPreviewOptionsChange",
                value: function () {
                    return !(0, i.b)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
                },
            },
            {
                key: "disconnectDragSource",
                value: function () {
                    this.dragSourceUnsubscribe && (this.dragSourceUnsubscribe(), (this.dragSourceUnsubscribe = void 0));
                },
            },
            {
                key: "disconnectDragPreview",
                value: function () {
                    this.dragPreviewUnsubscribe &&
                        (this.dragPreviewUnsubscribe(),
                        (this.dragPreviewUnsubscribe = void 0),
                        (this.dragPreviewNode = null),
                        (this.dragPreviewRef = null));
                },
            },
            {
                key: "dragSource",
                get: function () {
                    return this.dragSourceNode || (this.dragSourceRef && this.dragSourceRef.current);
                },
            },
            {
                key: "dragPreview",
                get: function () {
                    return this.dragPreviewNode || (this.dragPreviewRef && this.dragPreviewRef.current);
                },
            },
            {
                key: "clearDragSource",
                value: function () {
                    (this.dragSourceNode = null), (this.dragSourceRef = null);
                },
            },
            {
                key: "clearDragPreview",
                value: function () {
                    (this.dragPreviewNode = null), (this.dragPreviewRef = null);
                },
            },
        ]),
        (function (e, n) {
            for (var t = 0; t < n.length; t++) {
                var a = n[t];
                (a.enumerable = a.enumerable || !1),
                    (a.configurable = !0),
                    "value" in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a);
            }
        })(n.prototype, e),
        n
    );
})();
