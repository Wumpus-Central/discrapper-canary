A.d(t, { Z: () => v }), A(953529), A(388685);
var n = A(54381),
    r = A(473749),
    a = A(120356),
    i = A.n(a),
    l = A(481060),
    o = A(710845),
    s = A(310752),
    d = A(531643),
    u = A(388032),
    c = A(374450),
    g = A(162130);
function f(e, t, A) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = A),
        e
    );
}
let p = new o.Z("UploadArea");
function m() {
    return (0, n.jsxs)("div", {
        children: [
            (0, n.jsx)("div", { className: i()(g.sparkleWhite, c.sparkleOne) }),
            (0, n.jsx)("div", { className: i()(g.sparkleWhite, c.sparkleTwo) }),
            (0, n.jsx)("div", { className: i()(g.lightWhite, c.lightOne) }),
            (0, n.jsx)("div", { className: i()(g.lightWhite, c.lightTwo) }),
            (0, n.jsx)("div", { className: i()(g.crossWhite, c.crossOne) }),
            (0, n.jsx)("div", { className: i()(g.crossWhite, c.crossTwo) }),
            (0, n.jsx)("div", { className: i()(g.popWhite, c.popOne) }),
        ],
    });
}
class h extends r.Component {
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
    render() {
        let { title: e, description: t, icons: A, style: r, className: a } = this.props;
        return (0, n.jsx)("div", {
            ref: this.elementDOMRef,
            className: i()(a, c.uploadArea, {
                [c.droppable]: this.state.isDragging,
                [c.uploadModalIn]: this.state.isOverZone,
            }),
            style: r,
            children: (0, n.jsxs)("div", {
                className: c.uploadDropModal,
                children: [
                    this.state.isDragging && (0, n.jsx)(m, {}),
                    (0, n.jsx)("div", { className: c.bgScale }),
                    (0, n.jsxs)("div", {
                        className: c.inner,
                        children: [
                            (0, n.jsx)(s.Z, { icons: A }),
                            (0, n.jsx)("div", {
                                className: c.title,
                                children: e,
                            }),
                            (0, n.jsx)("div", {
                                className: c.instructions,
                                children: (0, n.jsx)("pre", { children: t }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            f(this, "state", {
                isDragging: !1,
                isOverZone: !1,
            }),
            f(this, "dragOverTimeout", null),
            f(this, "elementDOMRef", r.createRef()),
            f(this, "isAllDropFiles", (e) => {
                for (let A = 0; A < e.length; A++)
                    try {
                        var t;
                        let n = null != (t = e[A].webkitGetAsEntry()) ? t : e[A].getAsEntry();
                        if (null == n) return p.warn("Dropped item is null or undefined"), !1;
                        if (!n.isFile) return !1;
                    } catch (e) {}
                return !0;
            }),
            f(this, "preventUnwantedDrop", function (e) {
                let A = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.dataTransfer;
                if (null == n) return !0;
                let r =
                        Array.isArray(n.types) &&
                        -1 !== n.types.indexOf("text/uri-list") &&
                        -1 === n.types.indexOf("application/json"),
                    a = null != n.items && !t.isAllDropFiles(n.items);
                return (
                    (!r && !a) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (n.effectAllowed = "none"),
                    (n.dropEffect = "none"),
                    A &&
                        (t.setState({ isDragging: !1 }),
                        (0, d.openUploadError)({
                            title: u.intl.string(u.t.azO1Pe),
                            help: u.intl.string(u.t["Koklr/"]),
                        })),
                    !1)
                );
            }),
            f(this, "handleDragOver", (e) => {
                var t, A, n;
                if (!this.preventUnwantedDrop(e)) return !1;
                let r = e.dataTransfer;
                if (null != r) {
                    if (
                        ("move" === r.effectAllowed ? (r.dropEffect = "move") : (r.dropEffect = "copy"),
                        (0, l.nfh)(d.A) && (0, l.Mr3)(d.A),
                        e.stopPropagation(),
                        e.preventDefault(),
                        null == (t = (A = this.props).onDragOver) || t.call(A, e),
                        !this.state.isDragging)
                    ) {
                        let e = null == (n = this.elementDOMRef.current) ? void 0 : n.ownerDocument.defaultView;
                        ((null != e &&
                            r.types instanceof e.DOMStringList &&
                            r.types.contains("application/x-moz-file")) ||
                            -1 !== r.types.indexOf("Files")) &&
                            this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
                    }
                    clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({ isDragging: !1 }), null == (e = (t = this.props).onDragClear) || e.call(t);
                        }, 1000));
                }
            }),
            f(this, "handleDragOverZone", () => {
                this.setState({ isOverZone: !0 });
            }),
            f(this, "handleDragLeaveZone", () => {
                this.setState({ isOverZone: !1 });
            }),
            f(this, "handleDragLeave", (e) => {
                this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
            }),
            f(this, "clearDragging", () => {
                var e, t;
                this.setState({
                    isDragging: !1,
                    isOverZone: !1,
                }),
                    null == (e = (t = this.props).onDragClear) || e.call(t);
            }),
            f(this, "handleDrop", (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let t = e.dataTransfer;
                if (null == t) return !0;
                this.state.isDragging &&
                    (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
            });
    }
}
let v = h;
