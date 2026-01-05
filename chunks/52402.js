n.d(t, { x: () => o });
var r = n(603901),
    i = n(763073),
    a = n(521548);
function l(e, t, n) {
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
var o = (function () {
    var e;
    function t(e) {
        var n = this;
        if (!(this instanceof t)) throw TypeError("Cannot call a class as a function");
        l(
            this,
            "hooks",
            (0, r.p)({
                dragSource: function (e, t) {
                    n.clearDragSource(),
                        (n.dragSourceOptions = t || null),
                        (0, i.d)(e) ? (n.dragSourceRef = e) : (n.dragSourceNode = e),
                        n.reconnectDragSource();
                },
                dragPreview: function (e, t) {
                    n.clearDragPreview(),
                        (n.dragPreviewOptions = t || null),
                        (0, i.d)(e) ? (n.dragPreviewRef = e) : (n.dragPreviewNode = e),
                        n.reconnectDragPreview();
                },
            }),
        ),
            l(this, "handlerId", null),
            l(this, "dragSourceRef", null),
            l(this, "dragSourceNode", void 0),
            l(this, "dragSourceOptionsInternal", null),
            l(this, "dragSourceUnsubscribe", void 0),
            l(this, "dragPreviewRef", null),
            l(this, "dragPreviewNode", void 0),
            l(this, "dragPreviewOptionsInternal", null),
            l(this, "dragPreviewUnsubscribe", void 0),
            l(this, "lastConnectedHandlerId", null),
            l(this, "lastConnectedDragSource", null),
            l(this, "lastConnectedDragSourceOptions", null),
            l(this, "lastConnectedDragPreview", null),
            l(this, "lastConnectedDragPreviewOptions", null),
            l(this, "backend", void 0),
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
                        t =
                            this.didHandlerIdChange() ||
                            this.didConnectedDragSourceChange() ||
                            this.didDragSourceOptionsChange();
                    if ((t && this.disconnectDragSource(), this.handlerId)) {
                        if (!e) {
                            this.lastConnectedDragSource = e;
                            return;
                        }
                        t &&
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
                        t =
                            this.didHandlerIdChange() ||
                            this.didConnectedDragPreviewChange() ||
                            this.didDragPreviewOptionsChange();
                    if ((t && this.disconnectDragPreview(), this.handlerId)) {
                        if (!e) {
                            this.lastConnectedDragPreview = e;
                            return;
                        }
                        t &&
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
                    return !(0, a.w)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
                },
            },
            {
                key: "didDragPreviewOptionsChange",
                value: function () {
                    return !(0, a.w)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
        (function (e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
            }
        })(t.prototype, e),
        t
    );
})();
