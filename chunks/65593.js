t.d(e, { A: () => m });
var n = t(627968),
    a = t(64700),
    r = t(503698),
    i = t.n(r),
    l = t(397927),
    s = t(626584),
    o = t(961895),
    d = t(23658),
    u = t(985018),
    c = t(893221),
    g = t(162253);
let q = new s.A("UploadArea");
function p() {
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)("div", { className: i()(g.sG, c.sparkleOne) }),
            (0, n.jsx)("div", { className: i()(g.sG, c.sparkleTwo) }),
            (0, n.jsx)("div", { className: i()(g.GK, c.lightOne) }),
            (0, n.jsx)("div", { className: i()(g.GK, c.lightTwo) }),
            (0, n.jsx)("div", { className: i()(g.cp, c.crossOne) }),
            (0, n.jsx)("div", { className: i()(g.cp, c.crossTwo) }),
            (0, n.jsx)("div", { className: i()(g.Tp, c.popOne) }),
        ],
    });
}
class f extends a.Component {
    state = { isDragging: !1, isOverZone: !1 };
    dragOverTimeout = null;
    elementDOMRef = a.createRef();
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
                if (null == t) return q.warn("Dropped item is null or undefined"), !1;
                if (!t.isFile) return !1;
            } catch (A) {}
        return !0;
    };
    preventUnwantedDrop = (() => {
        var A = this;
        return function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = e.dataTransfer;
            if (null == n) return !0;
            let a =
                    Array.isArray(n.types) &&
                    -1 !== n.types.indexOf("text/uri-list") &&
                    -1 === n.types.indexOf("application/json"),
                r = null != n.items && !A.isAllDropFiles(n.items);
            return (
                (!a && !r) ||
                (e.stopPropagation(),
                e.preventDefault(),
                (n.effectAllowed = "none"),
                (n.dropEffect = "none"),
                t &&
                    (A.setState({ isDragging: !1 }),
                    (0, d.openUploadError)({ title: u.intl.string(u.t.azO1Pe), help: u.intl.string(u.t["Koklr/"]) })),
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
                (0, l.kBI)(d.D) && (0, l.OoC)(d.D),
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
        let { title: A, description: e, icons: t, style: a, className: r } = this.props;
        return (0, n.jsx)("div", {
            ref: this.elementDOMRef,
            className: i()(r, c.uploadArea, {
                [c.droppable]: this.state.isDragging,
                [c.uploadModalIn]: this.state.isOverZone,
            }),
            style: a,
            children: (0, n.jsxs)("div", {
                className: c.uploadDropModal,
                children: [
                    this.state.isDragging && (0, n.jsx)(p, {}),
                    (0, n.jsx)("div", { className: c.bgScale }),
                    (0, n.jsxs)("div", {
                        className: c.inner,
                        children: [
                            (0, n.jsx)(o.A, { icons: t }),
                            (0, n.jsx)("div", { className: c.title, children: A }),
                            (0, n.jsx)("div", {
                                className: c.instructions,
                                children: (0, n.jsx)("pre", { children: e }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
}
let m = f;
