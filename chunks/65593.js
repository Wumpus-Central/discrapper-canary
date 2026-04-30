r.d(t, { A: () => m });
var s = r(627968),
    n = r(64700),
    a = r(503698),
    i = r.n(a),
    l = r(192308),
    o = r(626584),
    d = r(961895),
    p = r(494921),
    c = r(375708),
    g = r(910162),
    v = r(571876);
let h = new o.A("UploadArea");
function u() {
    return (0, s.jsxs)("div", {
        children: [
            (0, s.jsx)("div", { className: i()(v.sG, g.sparkleOne) }),
            (0, s.jsx)("div", { className: i()(v.sG, g.sparkleTwo) }),
            (0, s.jsx)("div", { className: i()(v.GK, g.lightOne) }),
            (0, s.jsx)("div", { className: i()(v.GK, g.lightTwo) }),
            (0, s.jsx)("div", { className: i()(v.cp, g.crossOne) }),
            (0, s.jsx)("div", { className: i()(v.cp, g.crossTwo) }),
            (0, s.jsx)("div", { className: i()(v.Tp, g.popOne) }),
        ],
    });
}
class D extends n.Component {
    state = { isDragging: !1, isOverZone: !1 };
    dragOverTimeout = null;
    elementDOMRef = n.createRef();
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e &&
            (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1),
            e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1),
            e.addEventListener("dragover", this.handleDragOverZone, !1),
            e.addEventListener("dragleave", this.handleDragLeaveZone, !1),
            e.addEventListener("drop", this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e &&
            (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1),
            e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1),
            e.removeEventListener("dragover", this.handleDragOverZone, !1),
            e.removeEventListener("dragleave", this.handleDragLeaveZone, !1),
            e.removeEventListener("drop", this.handleDrop, !1)),
            clearTimeout(this.dragOverTimeout);
    }
    isAllDropFiles = (e) => {
        for (let t = 0; t < e.length; t++)
            try {
                let r = e[t].webkitGetAsEntry() ?? e[t].getAsEntry();
                if (null == r) return h.warn("Dropped item is null or undefined"), !1;
                if (!r.isFile) return !1;
            } catch (e) {}
        return !0;
    };
    preventUnwantedDrop = (() => {
        var e = this;
        return function (t) {
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                s = t.dataTransfer;
            if (null == s) return !0;
            let n =
                    Array.isArray(s.types) &&
                    -1 !== s.types.indexOf("text/uri-list") &&
                    -1 === s.types.indexOf("application/json"),
                a = null != s.items && !e.isAllDropFiles(s.items);
            return (
                (!n && !a) ||
                (t.stopPropagation(),
                t.preventDefault(),
                (s.effectAllowed = "none"),
                (s.dropEffect = "none"),
                r &&
                    (e.setState({ isDragging: !1 }),
                    (0, p.openUploadError)({ title: c.intl.string(c.t.azO1Pe), help: c.intl.string(c.t["Koklr/"]) })),
                !1)
            );
        };
    })();
    handleDragOver = (e) => {
        if (!this.preventUnwantedDrop(e)) return !1;
        let t = e.dataTransfer;
        if (null != t) {
            if (
                ("move" === t.effectAllowed ? (t.dropEffect = "move") : (t.dropEffect = "copy"),
                (0, l.hasModalOpen)(p.D) && (0, l.closeModal)(p.D),
                e.stopPropagation(),
                e.preventDefault(),
                this.props.onDragOver?.(e),
                !this.state.isDragging)
            ) {
                let e = this.elementDOMRef.current?.ownerDocument.defaultView;
                ((null != e && t.types instanceof e.DOMStringList && t.types.contains("application/x-moz-file")) ||
                    -1 !== t.types.indexOf("Files")) &&
                    this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
            }
            clearTimeout(this.dragOverTimeout),
                (this.dragOverTimeout = setTimeout(() => {
                    this.setState({ isDragging: !1 }), this.props.onDragClear?.();
                }, 1e3));
        }
    };
    handleDragOverZone = () => {
        this.setState({ isOverZone: !0 });
    };
    handleDragLeaveZone = () => {
        this.setState({ isOverZone: !1 });
    };
    handleDragLeave = (e) => {
        this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
    };
    clearDragging = () => {
        this.setState({ isDragging: !1, isOverZone: !1 }), this.props.onDragClear?.();
    };
    handleDrop = (e) => {
        if (!this.preventUnwantedDrop(e, !0)) return !1;
        let t = e.dataTransfer;
        if (null == t) return !0;
        this.state.isDragging &&
            (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
    };
    render() {
        let { title: e, description: t, icons: r, style: n, className: a } = this.props;
        return (0, s.jsx)("div", {
            ref: this.elementDOMRef,
            className: i()(a, g.uploadArea, {
                [g.droppable]: this.state.isDragging,
                [g.uploadModalIn]: this.state.isOverZone,
            }),
            style: n,
            children: (0, s.jsxs)("div", {
                className: g.uploadDropModal,
                children: [
                    this.state.isDragging && (0, s.jsx)(u, {}),
                    (0, s.jsx)("div", { className: g.bgScale }),
                    (0, s.jsxs)("div", {
                        className: g.inner,
                        children: [
                            (0, s.jsx)(d.A, { icons: r }),
                            (0, s.jsx)("div", { className: g.title, children: e }),
                            (0, s.jsx)("div", {
                                className: g.instructions,
                                children: (0, s.jsx)("pre", { children: t }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}
let m = D;
