(n.d(t, { Z: () => h }), n(953529), n(388685));
var r = n(255367),
    s = n(73800),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(710845),
    c = n(310752),
    u = n(531643),
    d = n(388032),
    f = n(948979),
    p = n(565128);
function g(e, t, n) {
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
let b = new a.Z('UploadArea');
function v() {
    return (0, r.jsxs)('div', {
        children: [(0, r.jsx)('div', { className: l()(p.sparkleWhite, f.sparkleOne) }), (0, r.jsx)('div', { className: l()(p.sparkleWhite, f.sparkleTwo) }), (0, r.jsx)('div', { className: l()(p.lightWhite, f.lightOne) }), (0, r.jsx)('div', { className: l()(p.lightWhite, f.lightTwo) }), (0, r.jsx)('div', { className: l()(p.crossWhite, f.crossOne) }), (0, r.jsx)('div', { className: l()(p.crossWhite, f.crossTwo) }), (0, r.jsx)('div', { className: l()(p.popWhite, f.popOne) })]
    });
}
class m extends s.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        (null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout));
    }
    render() {
        let { title: e, description: t, icons: n, style: s, className: i } = this.props;
        return (0, r.jsx)('div', {
            ref: this.elementDOMRef,
            className: l()(i, f.uploadArea, {
                [f.droppable]: this.state.isDragging,
                [f.uploadModalIn]: this.state.isOverZone
            }),
            style: s,
            children: (0, r.jsxs)('div', {
                className: f.uploadDropModal,
                children: [
                    this.state.isDragging && (0, r.jsx)(v, {}),
                    (0, r.jsx)('div', { className: f.bgScale }),
                    (0, r.jsxs)('div', {
                        className: f.inner,
                        children: [
                            (0, r.jsx)(c.Z, { icons: n }),
                            (0, r.jsx)('div', {
                                className: f.title,
                                children: e
                            }),
                            (0, r.jsx)('div', {
                                className: f.instructions,
                                children: (0, r.jsx)('pre', { children: t })
                            })
                        ]
                    })
                ]
            })
        });
    }
    constructor(...e) {
        var t;
        (super(...e),
            (t = this),
            g(this, 'state', {
                isDragging: !1,
                isOverZone: !1
            }),
            g(this, 'dragOverTimeout', null),
            g(this, 'elementDOMRef', s.createRef()),
            g(this, 'isAllDropFiles', (e) => {
                for (let n = 0; n < e.length; n++)
                    try {
                        var t;
                        let r = null != (t = e[n].webkitGetAsEntry()) ? t : e[n].getAsEntry();
                        if (null == r) return (b.warn('Dropped item is null or undefined'), !1);
                        if (!r.isFile) return !1;
                    } catch (e) {}
                return !0;
            }),
            g(this, 'preventUnwantedDrop', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = e.dataTransfer;
                if (null == r) return !0;
                let s = Array.isArray(r.types) && -1 !== r.types.indexOf('text/uri-list') && -1 === r.types.indexOf('application/json'),
                    i = null != r.items && !t.isAllDropFiles(r.items);
                return (
                    (!s && !i) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (r.effectAllowed = 'none'),
                    (r.dropEffect = 'none'),
                    n &&
                        (t.setState({ isDragging: !1 }),
                        (0, u.openUploadError)({
                            title: d.intl.string(d.t.azO1PT),
                            help: d.intl.string(d.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            g(this, 'handleDragOver', (e) => {
                var t, n, r;
                if (!this.preventUnwantedDrop(e)) return !1;
                let s = e.dataTransfer;
                if (null != s) {
                    if (('move' === s.effectAllowed ? (s.dropEffect = 'move') : (s.dropEffect = 'copy'), (0, o.nfh)(u.A) && (0, o.Mr3)(u.A), e.stopPropagation(), e.preventDefault(), null == (t = (n = this.props).onDragOver) || t.call(n, e), !this.state.isDragging)) {
                        let e = null == (r = this.elementDOMRef.current) ? void 0 : r.ownerDocument.defaultView;
                        ((null != e && s.types instanceof e.DOMStringList && s.types.contains('application/x-moz-file')) || -1 !== s.types.indexOf('Files')) && this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
                    }
                    (clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            (this.setState({ isDragging: !1 }), null == (e = (t = this.props).onDragClear) || e.call(t));
                        }, 1000)));
                }
            }),
            g(this, 'handleDragOverZone', () => {
                this.setState({ isOverZone: !0 });
            }),
            g(this, 'handleDragLeaveZone', () => {
                this.setState({ isOverZone: !1 });
            }),
            g(this, 'handleDragLeave', (e) => {
                this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
            }),
            g(this, 'clearDragging', () => {
                var e, t;
                (this.setState({
                    isDragging: !1,
                    isOverZone: !1
                }),
                    null == (e = (t = this.props).onDragClear) || e.call(t));
            }),
            g(this, 'handleDrop', (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let t = e.dataTransfer;
                if (null == t) return !0;
                this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
            }));
    }
}
let h = m;
