var n = r(477900),
    s = r(582128),
    a = r(503698),
    i = r.n(a),
    o = r(192308),
    l = r(626584),
    d = r(961895),
    p = r(23658),
    c = r(792996),
    g = r(946027),
    h = r(138267);
let v = new l.A("UploadArea");
function D() {
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)("div", { className: i()(h.sG, g.sparkleOne) }),
            (0, n.jsx)("div", { className: i()(h.sG, g.sparkleTwo) }),
            (0, n.jsx)("div", { className: i()(h.GK, g.lightOne) }),
            (0, n.jsx)("div", { className: i()(h.GK, g.lightTwo) }),
            (0, n.jsx)("div", { className: i()(h.cp, g.crossOne) }),
            (0, n.jsx)("div", { className: i()(h.cp, g.crossTwo) }),
            (0, n.jsx)("div", { className: i()(h.Tp, g.popOne) }),
        ],
    });
}
class u extends s.Component {
    state = { isDragging: !1, isOverZone: !1 };
    dragOverTimeout = null;
    elementDOMRef = s.createRef();
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e &&
            (e.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1),
            e.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1),
            e.ownerDocument.addEventListener("dragend", this.clearDragging, !0),
            e.ownerDocument.addEventListener("keydown", this.handleKeyDown, !0),
            e.addEventListener("dragover", this.handleDragOverZone, !1),
            e.addEventListener("dragleave", this.handleDragLeaveZone, !1),
            e.addEventListener("drop", this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        (null != e &&
            (e.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1),
            e.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1),
            e.ownerDocument.removeEventListener("dragend", this.clearDragging, !0),
            e.ownerDocument.removeEventListener("keydown", this.handleKeyDown, !0),
            e.removeEventListener("dragover", this.handleDragOverZone, !1),
            e.removeEventListener("dragleave", this.handleDragLeaveZone, !1),
            e.removeEventListener("drop", this.handleDrop, !1)),
            clearTimeout(this.dragOverTimeout));
    }
    isAllDropFiles = (e) => {
        for (let t = 0; t < e.length; t++)
            try {
                let r = e[t].webkitGetAsEntry() ?? e[t].getAsEntry();
                if (null == r) return (v.warn("Dropped item is null or undefined"), !1);
                if (!r.isFile) return !1;
            } catch (e) {}
        return !0;
    };
    preventUnwantedDrop = (() => {
        var e = this;
        return function (t) {
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t.dataTransfer;
            if (null == n || e.props.canDropData?.(n)) return !0;
            if (e.props.isDataDrag?.(n))
                return (
                    t.stopPropagation(),
                    t.preventDefault(),
                    null != e.elementDOMRef.current &&
                        t.composedPath().includes(e.elementDOMRef.current) &&
                        (n.dropEffect = "none"),
                    e.clearDragging(),
                    !1
                );
            let s =
                    Array.isArray(n.types) &&
                    -1 !== n.types.indexOf("text/uri-list") &&
                    -1 === n.types.indexOf("application/json"),
                a = null != n.items && !e.isAllDropFiles(n.items);
            return (
                (!s && !a) ||
                (t.stopPropagation(),
                t.preventDefault(),
                (n.effectAllowed = "none"),
                (n.dropEffect = "none"),
                r &&
                    (e.setState({ isDragging: !1 }),
                    (0, p.openUploadError)({ title: c.intl.string(c.t.azO1Pe), help: c.intl.string(c.t["Koklr/"]) })),
                !1)
            );
        };
    })();
    hasFiles = (e) => {
        let t = this.elementDOMRef.current?.ownerDocument.defaultView;
        return (
            (null != t && e.types instanceof t.DOMStringList && e.types.contains("application/x-moz-file")) ||
            -1 !== e.types.indexOf("Files")
        );
    };
    handleDragOver = (e) => {
        if (!this.preventUnwantedDrop(e)) return;
        let t = e.dataTransfer;
        null != t &&
            (this.props.canDropData?.(t) || this.hasFiles(t)) &&
            (this.props.isDataDrag?.(t)
                ? null != this.elementDOMRef.current &&
                  e.composedPath().includes(this.elementDOMRef.current) &&
                  (t.dropEffect = "copy")
                : "move" === t.effectAllowed
                  ? (t.dropEffect = "move")
                  : (t.dropEffect = "copy"),
            (0, o.kB)(p.D) && (0, o.Oo)(p.D),
            e.stopPropagation(),
            e.preventDefault(),
            this.props.onDragOver?.(e),
            this.state.isDragging || this.setState((e) => (e.isDragging ? {} : { isDragging: !0 })),
            clearTimeout(this.dragOverTimeout),
            (this.dragOverTimeout = setTimeout(this.clearDragging, 1e3)));
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
        (clearTimeout(this.dragOverTimeout),
            this.setState({ isDragging: !1, isOverZone: !1 }),
            this.props.onDragClear?.());
    };
    handleKeyDown = (e) => {
        "Escape" === e.key && this.state.isDragging && this.clearDragging();
    };
    handleDrop = (e) => {
        if (!this.preventUnwantedDrop(e, !0)) return !1;
        let t = e.dataTransfer;
        if (null == t) return !0;
        if (this.state.isDragging) {
            (e.preventDefault(), e.stopPropagation());
            let r = this.props.canDropData?.(t);
            (this.clearDragging(), r ? this.props.onDropData?.(t) : this.props.onDrop(t.files));
        }
    };
    render() {
        let { title: e, description: t, icons: r, style: s, className: a } = this.props;
        return (0, n.jsx)("div", {
            ref: this.elementDOMRef,
            className: i()(a, g.uploadArea, {
                [g.droppable]: this.state.isDragging,
                [g.uploadModalIn]: this.state.isOverZone,
            }),
            style: s,
            children: (0, n.jsxs)("div", {
                className: g.uploadDropModal,
                children: [
                    this.state.isDragging && (0, n.jsx)(D, {}),
                    (0, n.jsx)("div", { className: g.bgScale }),
                    (0, n.jsxs)("div", {
                        className: g.inner,
                        children: [
                            (0, n.jsx)(d.A, { icons: r }),
                            (0, n.jsx)("div", { className: g.title, children: e }),
                            (0, n.jsx)("div", {
                                className: g.instructions,
                                children: (0, n.jsx)("pre", { children: t }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}
r.d(t, {}, { A: u });
