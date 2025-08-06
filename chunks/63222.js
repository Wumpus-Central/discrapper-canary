n.d(t, { x: () => u });
var r = n(793981),
    i = n(413815),
    o = n(521548);
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
            c(this, "handlerId", null),
            c(this, "dragSourceRef", null),
            c(this, "dragSourceNode", void 0),
            c(this, "dragSourceOptionsInternal", null),
            c(this, "dragSourceUnsubscribe", void 0),
            c(this, "dragPreviewRef", null),
            c(this, "dragPreviewNode", void 0),
            c(this, "dragPreviewOptionsInternal", null),
            c(this, "dragPreviewUnsubscribe", void 0),
            c(this, "lastConnectedHandlerId", null),
            c(this, "lastConnectedDragSource", null),
            c(this, "lastConnectedDragSourceOptions", null),
            c(this, "lastConnectedDragPreview", null),
            c(this, "lastConnectedDragPreviewOptions", null),
            c(this, "backend", void 0),
            (this.backend = t);
    }
    return (
        l(e, [
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
                    return !(0, o.w)(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
                },
            },
            {
                key: "didDragPreviewOptionsChange",
                value: function () {
                    return !(0, o.w)(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
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
        e
    );
})();
