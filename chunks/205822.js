n.d(t, { Z: () => E }), n(266796), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(710845),
    u = n(310752),
    d = n(531643),
    c = n(388032),
    h = n(371100),
    p = n(198023);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = new a.Z('UploadArea');
function v() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)('div', { className: o()(p.sparkleWhite, h.sparkleOne) }), (0, i.jsx)('div', { className: o()(p.sparkleWhite, h.sparkleTwo) }), (0, i.jsx)('div', { className: o()(p.lightWhite, h.lightOne) }), (0, i.jsx)('div', { className: o()(p.lightWhite, h.lightTwo) }), (0, i.jsx)('div', { className: o()(p.crossWhite, h.crossOne) }), (0, i.jsx)('div', { className: o()(p.crossWhite, h.crossTwo) }), (0, i.jsx)('div', { className: o()(p.popWhite, h.popOne) })]
    });
}
class C extends r.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
    }
    render() {
        let { title: e, description: t, icons: n, style: r, className: l } = this.props;
        return (0, i.jsx)('div', {
            ref: this.elementDOMRef,
            className: o()(l, h.uploadArea, {
                [h.droppable]: this.state.isDragging,
                [h.uploadModalIn]: this.state.isOverZone
            }),
            style: r,
            children: (0, i.jsxs)('div', {
                className: h.uploadDropModal,
                children: [
                    this.state.isDragging && (0, i.jsx)(v, {}),
                    (0, i.jsx)('div', { className: h.bgScale }),
                    (0, i.jsxs)('div', {
                        className: h.inner,
                        children: [
                            (0, i.jsx)(u.Z, { icons: n }),
                            (0, i.jsx)('div', {
                                className: h.title,
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: h.instructions,
                                children: (0, i.jsx)('pre', { children: t })
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
            f(this, 'elementDOMRef', r.createRef()),
            f(this, 'isAllDropFiles', (e) => {
                for (let n = 0; n < e.length; n++)
                    try {
                        var t;
                        let i = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
                        if (null == i) return g.warn('Dropped item is null or undefined'), !1;
                        if (!i.isFile && !(this.props.canUploadDirectory && i.isDirectory)) return !1;
                    } catch (e) {}
                return !0;
            }),
            f(this, 'preventUnwantedDrop', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = e.dataTransfer;
                if (null == i) return !0;
                let r = Array.isArray(i.types) && -1 !== i.types.indexOf('text/uri-list') && -1 === i.types.indexOf('application/json'),
                    l = null != i.items && !t.isAllDropFiles(i.items);
                return (
                    (!r && !l) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (i.effectAllowed = 'none'),
                    (i.dropEffect = 'none'),
                    n &&
                        (t.setState({ isDragging: !1 }),
                        (0, d.openUploadError)({
                            title: c.NW.string(c.t.azO1PT),
                            help: c.NW.string(c.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            f(this, 'handleDragOver', (e) => {
                var t, n, i;
                if (!this.preventUnwantedDrop(e)) return !1;
                let r = e.dataTransfer;
                if (null != r) {
                    if (((r.dropEffect = 'copy'), (0, s.nfh)(d.A) && (0, s.Mr3)(d.A), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging)) {
                        let e = null === (i = this.elementDOMRef.current) || void 0 === i ? void 0 : i.ownerDocument.defaultView;
                        ((null != e && r.types instanceof e.DOMStringList && r.types.contains('application/x-moz-file')) || -1 !== r.types.indexOf('Files')) && this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
                    }
                    clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({ isDragging: !1 }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t);
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
                    null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t);
            }),
            f(this, 'handleDrop', (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let t = e.dataTransfer;
                if (null == t) return !0;
                this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
            });
    }
}
let E = C;
