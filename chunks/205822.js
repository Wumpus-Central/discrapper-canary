r.d(t, { Z: () => b }), r(953529), r(388685);
var n = r(200651),
    A = r(192379),
    a = r(120356),
    o = r.n(a),
    l = r(481060),
    i = r(710845),
    s = r(310752),
    c = r(531643),
    d = r(388032),
    u = r(948979),
    g = r(565128);
function f(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let p = new i.Z('UploadArea');
function h() {
    return (0, n.jsxs)('div', {
        children: [(0, n.jsx)('div', { className: o()(g.sparkleWhite, u.sparkleOne) }), (0, n.jsx)('div', { className: o()(g.sparkleWhite, u.sparkleTwo) }), (0, n.jsx)('div', { className: o()(g.lightWhite, u.lightOne) }), (0, n.jsx)('div', { className: o()(g.lightWhite, u.lightTwo) }), (0, n.jsx)('div', { className: o()(g.crossWhite, u.crossOne) }), (0, n.jsx)('div', { className: o()(g.crossWhite, u.crossTwo) }), (0, n.jsx)('div', { className: o()(g.popWhite, u.popOne) })]
    });
}
class m extends A.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
    }
    render() {
        let { title: e, description: t, icons: r, style: A, className: a } = this.props;
        return (0, n.jsx)('div', {
            ref: this.elementDOMRef,
            className: o()(a, u.uploadArea, {
                [u.droppable]: this.state.isDragging,
                [u.uploadModalIn]: this.state.isOverZone
            }),
            style: A,
            children: (0, n.jsxs)('div', {
                className: u.uploadDropModal,
                children: [
                    this.state.isDragging && (0, n.jsx)(h, {}),
                    (0, n.jsx)('div', { className: u.bgScale }),
                    (0, n.jsxs)('div', {
                        className: u.inner,
                        children: [
                            (0, n.jsx)(s.Z, { icons: r }),
                            (0, n.jsx)('div', {
                                className: u.title,
                                children: e
                            }),
                            (0, n.jsx)('div', {
                                className: u.instructions,
                                children: (0, n.jsx)('pre', { children: t })
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        var t;
        super(...e),
            (t = this),
            f(this, 'state', {
                isDragging: !1,
                isOverZone: !1
            }),
            f(this, 'dragOverTimeout', null),
            f(this, 'elementDOMRef', A.createRef()),
            f(this, 'isAllDropFiles', (e) => {
                for (let r = 0; r < e.length; r++)
                    try {
                        var t;
                        let n = null != (t = e[r].webkitGetAsEntry()) ? t : e[r].getAsEntry();
                        if (null == n) return p.warn('Dropped item is null or undefined'), !1;
                        if (!n.isFile) return !1;
                    } catch (e) {}
                return !0;
            }),
            f(this, 'preventUnwantedDrop', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.dataTransfer;
                if (null == n) return !0;
                let A = Array.isArray(n.types) && -1 !== n.types.indexOf('text/uri-list') && -1 === n.types.indexOf('application/json'),
                    a = null != n.items && !t.isAllDropFiles(n.items);
                return (
                    (!A && !a) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (n.effectAllowed = 'none'),
                    (n.dropEffect = 'none'),
                    r &&
                        (t.setState({ isDragging: !1 }),
                        (0, c.openUploadError)({
                            title: d.NW.string(d.t.azO1PT),
                            help: d.NW.string(d.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            f(this, 'handleDragOver', (e) => {
                var t, r, n;
                if (!this.preventUnwantedDrop(e)) return !1;
                let A = e.dataTransfer;
                if (null != A) {
                    if (('move' === A.effectAllowed ? (A.dropEffect = 'move') : (A.dropEffect = 'copy'), (0, l.nfh)(c.A) && (0, l.Mr3)(c.A), e.stopPropagation(), e.preventDefault(), null == (t = (r = this.props).onDragOver) || t.call(r, e), !this.state.isDragging)) {
                        let e = null == (n = this.elementDOMRef.current) ? void 0 : n.ownerDocument.defaultView;
                        ((null != e && A.types instanceof e.DOMStringList && A.types.contains('application/x-moz-file')) || -1 !== A.types.indexOf('Files')) && this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
                    }
                    clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({ isDragging: !1 }), null == (e = (t = this.props).onDragClear) || e.call(t);
                        }, 1000));
                }
            }),
            f(this, 'handleDragOverZone', () => {
                this.setState({ isOverZone: !0 });
            }),
            f(this, 'handleDragLeaveZone', () => {
                this.setState({ isOverZone: !1 });
            }),
            f(this, 'handleDragLeave', (e) => {
                this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
            }),
            f(this, 'clearDragging', () => {
                var e, t;
                this.setState({
                    isDragging: !1,
                    isOverZone: !1
                }),
                    null == (e = (t = this.props).onDragClear) || e.call(t);
            }),
            f(this, 'handleDrop', (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let t = e.dataTransfer;
                if (null == t) return !0;
                this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
            });
    }
}
let b = m;
