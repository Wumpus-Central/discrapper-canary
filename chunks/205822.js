r.d(t, { Z: () => b }), r(266796), r(47120);
var n = r(200651),
    h = r(192379),
    v = r(120356),
    i = r.n(v),
    l = r(481060),
    o = r(710845),
    a = r(310752),
    s = r(531643),
    c = r(388032),
    f = r(948979),
    p = r(565128);
function Z(e, t, r) {
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
let u = new o.Z('UploadArea');
function M() {
    return (0, n.jsxs)('div', {
        children: [(0, n.jsx)('div', { className: i()(p.sparkleWhite, f.sparkleOne) }), (0, n.jsx)('div', { className: i()(p.sparkleWhite, f.sparkleTwo) }), (0, n.jsx)('div', { className: i()(p.lightWhite, f.lightOne) }), (0, n.jsx)('div', { className: i()(p.lightWhite, f.lightTwo) }), (0, n.jsx)('div', { className: i()(p.crossWhite, f.crossOne) }), (0, n.jsx)('div', { className: i()(p.crossWhite, f.crossTwo) }), (0, n.jsx)('div', { className: i()(p.popWhite, f.popOne) })]
    });
}
class d extends h.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
    }
    render() {
        let { title: e, description: t, icons: r, style: h, className: v } = this.props;
        return (0, n.jsx)('div', {
            ref: this.elementDOMRef,
            className: i()(v, f.uploadArea, {
                [f.droppable]: this.state.isDragging,
                [f.uploadModalIn]: this.state.isOverZone
            }),
            style: h,
            children: (0, n.jsxs)('div', {
                className: f.uploadDropModal,
                children: [
                    this.state.isDragging && (0, n.jsx)(M, {}),
                    (0, n.jsx)('div', { className: f.bgScale }),
                    (0, n.jsxs)('div', {
                        className: f.inner,
                        children: [
                            (0, n.jsx)(a.Z, { icons: r }),
                            (0, n.jsx)('div', {
                                className: f.title,
                                children: e
                            }),
                            (0, n.jsx)('div', {
                                className: f.instructions,
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
            Z(this, 'state', {
                isDragging: !1,
                isOverZone: !1
            }),
            Z(this, 'dragOverTimeout', null),
            Z(this, 'elementDOMRef', h.createRef()),
            Z(this, 'isAllDropFiles', (e) => {
                for (let r = 0; r < e.length; r++)
                    try {
                        var t;
                        let n = null != (t = e[r].webkitGetAsEntry()) ? t : e[r].getAsEntry();
                        if (null == n) return u.warn('Dropped item is null or undefined'), !1;
                        if (!n.isFile) return !1;
                    } catch (e) {}
                return !0;
            }),
            Z(this, 'preventUnwantedDrop', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.dataTransfer;
                if (null == n) return !0;
                let h = Array.isArray(n.types) && -1 !== n.types.indexOf('text/uri-list') && -1 === n.types.indexOf('application/json'),
                    v = null != n.items && !t.isAllDropFiles(n.items);
                return (
                    (!h && !v) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (n.effectAllowed = 'none'),
                    (n.dropEffect = 'none'),
                    r &&
                        (t.setState({ isDragging: !1 }),
                        (0, s.openUploadError)({
                            title: c.NW.string(c.t.azO1PT),
                            help: c.NW.string(c.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            Z(this, 'handleDragOver', (e) => {
                var t, r, n;
                if (!this.preventUnwantedDrop(e)) return !1;
                let h = e.dataTransfer;
                if (null != h) {
                    if (('move' === h.effectAllowed ? (h.dropEffect = 'move') : (h.dropEffect = 'copy'), (0, l.nfh)(s.A) && (0, l.Mr3)(s.A), e.stopPropagation(), e.preventDefault(), null == (t = (r = this.props).onDragOver) || t.call(r, e), !this.state.isDragging)) {
                        let e = null == (n = this.elementDOMRef.current) ? void 0 : n.ownerDocument.defaultView;
                        ((null != e && h.types instanceof e.DOMStringList && h.types.contains('application/x-moz-file')) || -1 !== h.types.indexOf('Files')) && this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
                    }
                    clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({ isDragging: !1 }), null == (e = (t = this.props).onDragClear) || e.call(t);
                        }, 1000));
                }
            }),
            Z(this, 'handleDragOverZone', () => {
                this.setState({ isOverZone: !0 });
            }),
            Z(this, 'handleDragLeaveZone', () => {
                this.setState({ isOverZone: !1 });
            }),
            Z(this, 'handleDragLeave', (e) => {
                this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
            }),
            Z(this, 'clearDragging', () => {
                var e, t;
                this.setState({
                    isDragging: !1,
                    isOverZone: !1
                }),
                    null == (e = (t = this.props).onDragClear) || e.call(t);
            }),
            Z(this, 'handleDrop', (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let t = e.dataTransfer;
                if (null == t) return !0;
                this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
            });
    }
}
let b = d;
