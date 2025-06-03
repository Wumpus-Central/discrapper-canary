r.d(t, { Z: () => b }), r(953529), r(388685);
var n = r(255367),
    i = r(73800),
    a = r(120356),
    l = r.n(a),
    o = r(481060),
    A = r(710845),
    s = r(310752),
    c = r(531643),
    d = r(388032),
    u = r(948979),
    f = r(565128);
function g(e, t, r) {
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
let h = new A.Z('UploadArea');
function p() {
    return (0, n.jsxs)('div', {
        children: [(0, n.jsx)('div', { className: l()(f.sparkleWhite, u.sparkleOne) }), (0, n.jsx)('div', { className: l()(f.sparkleWhite, u.sparkleTwo) }), (0, n.jsx)('div', { className: l()(f.lightWhite, u.lightOne) }), (0, n.jsx)('div', { className: l()(f.lightWhite, u.lightTwo) }), (0, n.jsx)('div', { className: l()(f.crossWhite, u.crossOne) }), (0, n.jsx)('div', { className: l()(f.crossWhite, u.crossTwo) }), (0, n.jsx)('div', { className: l()(f.popWhite, u.popOne) })]
    });
}
class m extends i.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
    }
    render() {
        let { title: e, description: t, icons: r, style: i, className: a } = this.props;
        return (0, n.jsx)('div', {
            ref: this.elementDOMRef,
            className: l()(a, u.uploadArea, {
                [u.droppable]: this.state.isDragging,
                [u.uploadModalIn]: this.state.isOverZone
            }),
            style: i,
            children: (0, n.jsxs)('div', {
                className: u.uploadDropModal,
                children: [
                    this.state.isDragging && (0, n.jsx)(p, {}),
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
            g(this, 'state', {
                isDragging: !1,
                isOverZone: !1
            }),
            g(this, 'dragOverTimeout', null),
            g(this, 'elementDOMRef', i.createRef()),
            g(this, 'isAllDropFiles', (e) => {
                for (let r = 0; r < e.length; r++)
                    try {
                        var t;
                        let n = null != (t = e[r].webkitGetAsEntry()) ? t : e[r].getAsEntry();
                        if (null == n) return h.warn('Dropped item is null or undefined'), !1;
                        if (!n.isFile) return !1;
                    } catch (e) {}
                return !0;
            }),
            g(this, 'preventUnwantedDrop', function (e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.dataTransfer;
                if (null == n) return !0;
                let i = Array.isArray(n.types) && -1 !== n.types.indexOf('text/uri-list') && -1 === n.types.indexOf('application/json'),
                    a = null != n.items && !t.isAllDropFiles(n.items);
                return (
                    (!i && !a) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (n.effectAllowed = 'none'),
                    (n.dropEffect = 'none'),
                    r &&
                        (t.setState({ isDragging: !1 }),
                        (0, c.openUploadError)({
                            title: d.intl.string(d.t.azO1PT),
                            help: d.intl.string(d.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            g(this, 'handleDragOver', (e) => {
                var t, r, n;
                if (!this.preventUnwantedDrop(e)) return !1;
                let i = e.dataTransfer;
                if (null != i) {
                    if (('move' === i.effectAllowed ? (i.dropEffect = 'move') : (i.dropEffect = 'copy'), (0, o.nfh)(c.A) && (0, o.Mr3)(c.A), e.stopPropagation(), e.preventDefault(), null == (t = (r = this.props).onDragOver) || t.call(r, e), !this.state.isDragging)) {
                        let e = null == (n = this.elementDOMRef.current) ? void 0 : n.ownerDocument.defaultView;
                        ((null != e && i.types instanceof e.DOMStringList && i.types.contains('application/x-moz-file')) || -1 !== i.types.indexOf('Files')) && this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
                    }
                    clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({ isDragging: !1 }), null == (e = (t = this.props).onDragClear) || e.call(t);
                        }, 1000));
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
                this.setState({
                    isDragging: !1,
                    isOverZone: !1
                }),
                    null == (e = (t = this.props).onDragClear) || e.call(t);
            }),
            g(this, 'handleDrop', (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let t = e.dataTransfer;
                if (null == t) return !0;
                this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
            });
    }
}
let b = m;
