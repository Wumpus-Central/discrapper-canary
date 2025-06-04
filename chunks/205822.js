n.d(t, { Z: () => b }), n(953529), n(388685);
var r = n(255367),
    A = n(73800),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    i = n(710845),
    s = n(310752),
    c = n(531643),
    d = n(388032),
    u = n(948979),
    g = n(565128);
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
let p = new i.Z('UploadArea');
function m() {
    return (0, r.jsxs)('div', {
        children: [(0, r.jsx)('div', { className: l()(g.sparkleWhite, u.sparkleOne) }), (0, r.jsx)('div', { className: l()(g.sparkleWhite, u.sparkleTwo) }), (0, r.jsx)('div', { className: l()(g.lightWhite, u.lightOne) }), (0, r.jsx)('div', { className: l()(g.lightWhite, u.lightTwo) }), (0, r.jsx)('div', { className: l()(g.crossWhite, u.crossOne) }), (0, r.jsx)('div', { className: l()(g.crossWhite, u.crossTwo) }), (0, r.jsx)('div', { className: l()(g.popWhite, u.popOne) })]
    });
}
class h extends A.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
    }
    render() {
        let { title: e, description: t, icons: n, style: A, className: a } = this.props;
        return (0, r.jsx)('div', {
            ref: this.elementDOMRef,
            className: l()(a, u.uploadArea, {
                [u.droppable]: this.state.isDragging,
                [u.uploadModalIn]: this.state.isOverZone
            }),
            style: A,
            children: (0, r.jsxs)('div', {
                className: u.uploadDropModal,
                children: [
                    this.state.isDragging && (0, r.jsx)(m, {}),
                    (0, r.jsx)('div', { className: u.bgScale }),
                    (0, r.jsxs)('div', {
                        className: u.inner,
                        children: [
                            (0, r.jsx)(s.Z, { icons: n }),
                            (0, r.jsx)('div', {
                                className: u.title,
                                children: e
                            }),
                            (0, r.jsx)('div', {
                                className: u.instructions,
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
        super(...e),
            (t = this),
            f(this, 'state', {
                isDragging: !1,
                isOverZone: !1
            }),
            f(this, 'dragOverTimeout', null),
            f(this, 'elementDOMRef', A.createRef()),
            f(this, 'isAllDropFiles', (e) => {
                for (let n = 0; n < e.length; n++)
                    try {
                        var t;
                        let r = null != (t = e[n].webkitGetAsEntry()) ? t : e[n].getAsEntry();
                        if (null == r) return p.warn('Dropped item is null or undefined'), !1;
                        if (!r.isFile) return !1;
                    } catch (e) {}
                return !0;
            }),
            f(this, 'preventUnwantedDrop', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = e.dataTransfer;
                if (null == r) return !0;
                let A = Array.isArray(r.types) && -1 !== r.types.indexOf('text/uri-list') && -1 === r.types.indexOf('application/json'),
                    a = null != r.items && !t.isAllDropFiles(r.items);
                return (
                    (!A && !a) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (r.effectAllowed = 'none'),
                    (r.dropEffect = 'none'),
                    n &&
                        (t.setState({ isDragging: !1 }),
                        (0, c.openUploadError)({
                            title: d.intl.string(d.t.azO1PT),
                            help: d.intl.string(d.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            f(this, 'handleDragOver', (e) => {
                var t, n, r;
                if (!this.preventUnwantedDrop(e)) return !1;
                let A = e.dataTransfer;
                if (null != A) {
                    if (('move' === A.effectAllowed ? (A.dropEffect = 'move') : (A.dropEffect = 'copy'), (0, o.nfh)(c.A) && (0, o.Mr3)(c.A), e.stopPropagation(), e.preventDefault(), null == (t = (n = this.props).onDragOver) || t.call(n, e), !this.state.isDragging)) {
                        let e = null == (r = this.elementDOMRef.current) ? void 0 : r.ownerDocument.defaultView;
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
let b = h;
