t.d(e, { A: () => m });
var a = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    i = t(192308),
    s = t(626584),
    o = t(961895),
    d = t(23658),
    c = t(985018),
    u = t(910162),
    g = t(571876);
let h = new s.A("UploadArea");
function p() {
    return (0, a.jsxs)("div", {
        children: [
            (0, a.jsx)("div", { className: l()(g.sG, u.sparkleOne) }),
            (0, a.jsx)("div", { className: l()(g.sG, u.sparkleTwo) }),
            (0, a.jsx)("div", { className: l()(g.GK, u.lightOne) }),
            (0, a.jsx)("div", { className: l()(g.GK, u.lightTwo) }),
            (0, a.jsx)("div", { className: l()(g.cp, u.crossOne) }),
            (0, a.jsx)("div", { className: l()(g.cp, u.crossTwo) }),
            (0, a.jsx)("div", { className: l()(g.Tp, u.popOne) }),
        ],
    });
}
class f extends n.Component {
    state = { isDragging: !1, isOverZone: !1 };
    dragOverTimeout = null;
    elementDOMRef = n.createRef();
    componentDidMount() {
        let A = this.elementDOMRef.current;
        null != A &&
            (A.ownerDocument.body.addEventListener("dragover", this.handleDragOver, !1),
            A.ownerDocument.body.addEventListener("drop", this.handleDragLeave, !1),
            A.addEventListener("dragover", this.handleDragOverZone, !1),
            A.addEventListener("dragleave", this.handleDragLeaveZone, !1),
            A.addEventListener("drop", this.handleDrop, !1));
    }
    componentWillUnmount() {
        let A = this.elementDOMRef.current;
        null != A &&
            (A.ownerDocument.body.removeEventListener("dragover", this.handleDragOver, !1),
            A.ownerDocument.body.removeEventListener("drop", this.handleDragLeave, !1),
            A.removeEventListener("dragover", this.handleDragOverZone, !1),
            A.removeEventListener("dragleave", this.handleDragLeaveZone, !1),
            A.removeEventListener("drop", this.handleDrop, !1)),
            clearTimeout(this.dragOverTimeout);
    }
    isAllDropFiles = (A) => {
        for (let e = 0; e < A.length; e++)
            try {
                let t = A[e].webkitGetAsEntry() ?? A[e].getAsEntry();
                if (null == t) return h.warn("Dropped item is null or undefined"), !1;
                if (!t.isFile) return !1;
            } catch (A) {}
        return !0;
    };
    preventUnwantedDrop = (() => {
        var A = this;
        return function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                a = e.dataTransfer;
            if (null == a) return !0;
            let n =
                    Array.isArray(a.types) &&
                    -1 !== a.types.indexOf("text/uri-list") &&
                    -1 === a.types.indexOf("application/json"),
                r = null != a.items && !A.isAllDropFiles(a.items);
            return (
                (!n && !r) ||
                (e.stopPropagation(),
                e.preventDefault(),
                (a.effectAllowed = "none"),
                (a.dropEffect = "none"),
                t &&
                    (A.setState({ isDragging: !1 }),
                    (0, d.openUploadError)({ title: c.intl.string(c.t.azO1Pe), help: c.intl.string(c.t["Koklr/"]) })),
                !1)
            );
        };
    })();
    handleDragOver = (A) => {
        if (!this.preventUnwantedDrop(A)) return !1;
        let e = A.dataTransfer;
        if (null != e) {
            if (
                ("move" === e.effectAllowed ? (e.dropEffect = "move") : (e.dropEffect = "copy"),
                (0, i.hasModalOpen)(d.D) && (0, i.closeModal)(d.D),
                A.stopPropagation(),
                A.preventDefault(),
                this.props.onDragOver?.(A),
                !this.state.isDragging)
            ) {
                let A = this.elementDOMRef.current?.ownerDocument.defaultView;
                ((null != A && e.types instanceof A.DOMStringList && e.types.contains("application/x-moz-file")) ||
                    -1 !== e.types.indexOf("Files")) &&
                    this.setState((A) => (A.isDragging ? {} : { isDragging: !0 }));
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
    handleDragLeave = (A) => {
        this.state.isDragging && (A.stopPropagation(), A.preventDefault(), this.clearDragging());
    };
    clearDragging = () => {
        this.setState({ isDragging: !1, isOverZone: !1 }), this.props.onDragClear?.();
    };
    handleDrop = (A) => {
        if (!this.preventUnwantedDrop(A, !0)) return !1;
        let e = A.dataTransfer;
        if (null == e) return !0;
        this.state.isDragging &&
            (A.preventDefault(), A.stopPropagation(), this.props.onDrop(e.files), this.clearDragging());
    };
    render() {
        let { title: A, description: e, icons: t, style: n, className: r } = this.props;
        return (0, a.jsx)("div", {
            ref: this.elementDOMRef,
            className: l()(r, u.uploadArea, {
                [u.droppable]: this.state.isDragging,
                [u.uploadModalIn]: this.state.isOverZone,
            }),
            style: n,
            children: (0, a.jsxs)("div", {
                className: u.uploadDropModal,
                children: [
                    this.state.isDragging && (0, a.jsx)(p, {}),
                    (0, a.jsx)("div", { className: u.bgScale }),
                    (0, a.jsxs)("div", {
                        className: u.inner,
                        children: [
                            (0, a.jsx)(o.A, { icons: t }),
                            (0, a.jsx)("div", { className: u.title, children: A }),
                            (0, a.jsx)("div", {
                                className: u.instructions,
                                children: (0, a.jsx)("pre", { children: e }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}
let m = f;
