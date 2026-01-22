t.d(A, {
    A: () => v,
}),
    t(228524),
    t(896048);
var r = t(627968),
    n = t(64700),
    l = t(503698),
    a = t.n(l),
    i = t(397927),
    s = t(626584),
    o = t(961895),
    d = t(23658),
    c = t(985018),
    u = t(893221),
    g = t(162253);

function f(e, A, t) {
    return (
        A in e
            ? Object.defineProperty(e, A, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[A] = t),
        e
    );
}
let p = new s.A("UploadArea");

function m() {
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)("div", {
                className: a()(g.sG, u.sparkleOne),
            }),
            (0, r.jsx)("div", {
                className: a()(g.sG, u.sparkleTwo),
            }),
            (0, r.jsx)("div", {
                className: a()(g.GK, u.lightOne),
            }),
            (0, r.jsx)("div", {
                className: a()(g.GK, u.lightTwo),
            }),
            (0, r.jsx)("div", {
                className: a()(g.cp, u.crossOne),
            }),
            (0, r.jsx)("div", {
                className: a()(g.cp, u.crossTwo),
            }),
            (0, r.jsx)("div", {
                className: a()(g.Tp, u.popOne),
            }),
        ],
    });
}
class b extends n.Component {
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
        let { title: e, description: A, icons: t, style: n, className: l } = this.props;
        return (0, r.jsx)("div", {
            ref: this.elementDOMRef,
            className: a()(l, u.uploadArea, {
                [u.droppable]: this.state.isDragging,
                [u.uploadModalIn]: this.state.isOverZone,
            }),
            style: n,
            children: (0, r.jsxs)("div", {
                className: u.uploadDropModal,
                children: [
                    this.state.isDragging && (0, r.jsx)(m, {}),
                    (0, r.jsx)("div", {
                        className: u.bgScale,
                    }),
                    (0, r.jsxs)("div", {
                        className: u.inner,
                        children: [
                            (0, r.jsx)(o.A, {
                                icons: t,
                            }),
                            (0, r.jsx)("div", {
                                className: u.title,
                                children: e,
                            }),
                            (0, r.jsx)("div", {
                                className: u.instructions,
                                children: (0, r.jsx)("pre", {
                                    children: A,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        });
    }
    constructor(...e) {
        var A;
        super(...e),
            (A = this),
            f(this, "state", {
                isDragging: !1,
                isOverZone: !1,
            }),
            f(this, "dragOverTimeout", null),
            f(this, "elementDOMRef", n.createRef()),
            f(this, "isAllDropFiles", (e) => {
                for (let t = 0; t < e.length; t++)
                    try {
                        var A;
                        let r = null != (A = e[t].webkitGetAsEntry()) ? A : e[t].getAsEntry();
                        if (null == r) return p.warn("Dropped item is null or undefined"), !1;
                        if (!r.isFile) return !1;
                    } catch (e) {}
                return !0;
            }),
            f(this, "preventUnwantedDrop", function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = e.dataTransfer;
                if (null == r) return !0;
                let n =
                        Array.isArray(r.types) &&
                        -1 !== r.types.indexOf("text/uri-list") &&
                        -1 === r.types.indexOf("application/json"),
                    l = null != r.items && !A.isAllDropFiles(r.items);
                return (
                    (!n && !l) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (r.effectAllowed = "none"),
                    (r.dropEffect = "none"),
                    t &&
                        (A.setState({
                            isDragging: !1,
                        }),
                        (0, d.openUploadError)({
                            title: c.intl.string(c.t.azO1Pe),
                            help: c.intl.string(c.t["Koklr/"]),
                        })),
                    !1)
                );
            }),
            f(this, "handleDragOver", (e) => {
                var A, t, r;
                if (!this.preventUnwantedDrop(e)) return !1;
                let n = e.dataTransfer;
                if (null != n) {
                    if (
                        ("move" === n.effectAllowed ? (n.dropEffect = "move") : (n.dropEffect = "copy"),
                        (0, i.kBI)(d.D) && (0, i.OoC)(d.D),
                        e.stopPropagation(),
                        e.preventDefault(),
                        null == (A = (t = this.props).onDragOver) || A.call(t, e),
                        !this.state.isDragging)
                    ) {
                        let e = null == (r = this.elementDOMRef.current) ? void 0 : r.ownerDocument.defaultView;
                        ((null != e &&
                            n.types instanceof e.DOMStringList &&
                            n.types.contains("application/x-moz-file")) ||
                            -1 !== n.types.indexOf("Files")) &&
                            this.setState((e) =>
                                e.isDragging
                                    ? {}
                                    : {
                                          isDragging: !0,
                                      },
                            );
                    }
                    clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, A;
                            this.setState({
                                isDragging: !1,
                            }),
                                null == (e = (A = this.props).onDragClear) || e.call(A);
                        }, 1e3));
                }
            }),
            f(this, "handleDragOverZone", () => {
                this.setState({
                    isOverZone: !0,
                });
            }),
            f(this, "handleDragLeaveZone", () => {
                this.setState({
                    isOverZone: !1,
                });
            }),
            f(this, "handleDragLeave", (e) => {
                this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
            }),
            f(this, "clearDragging", () => {
                var e, A;
                this.setState({
                    isDragging: !1,
                    isOverZone: !1,
                }),
                    null == (e = (A = this.props).onDragClear) || e.call(A);
            }),
            f(this, "handleDrop", (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let A = e.dataTransfer;
                if (null == A) return !0;
                this.state.isDragging &&
                    (e.preventDefault(), e.stopPropagation(), this.props.onDrop(A.files), this.clearDragging());
            });
    }
}
let v = b;
