A(47120);
var n = A(200651),
    r = A(192379),
    a = A(120356),
    i = A.n(a),
    l = A(481060),
    o = A(310752),
    s = A(531643),
    d = A(388032),
    c = A(55720),
    u = A(73004);
function g(e, t, A) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = A),
        e
    );
}
function h() {
    return (0, n.jsxs)('div', {
        children: [(0, n.jsx)('div', { className: i()(u.sparkleWhite, c.sparkleOne) }), (0, n.jsx)('div', { className: i()(u.sparkleWhite, c.sparkleTwo) }), (0, n.jsx)('div', { className: i()(u.lightWhite, c.lightOne) }), (0, n.jsx)('div', { className: i()(u.lightWhite, c.lightTwo) }), (0, n.jsx)('div', { className: i()(u.crossWhite, c.crossOne) }), (0, n.jsx)('div', { className: i()(u.crossWhite, c.crossTwo) }), (0, n.jsx)('div', { className: i()(u.popWhite, c.popOne) })]
    });
}
class p extends r.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
    }
    render() {
        let { title: e, description: t, icons: A, style: r, className: a } = this.props;
        return (0, n.jsx)('div', {
            ref: this.elementDOMRef,
            className: i()(a, c.uploadArea, {
                [c.droppable]: this.state.isDragging,
                [c.uploadModalIn]: this.state.isOverZone
            }),
            style: r,
            children: (0, n.jsxs)('div', {
                className: c.uploadDropModal,
                children: [
                    this.state.isDragging && (0, n.jsx)(h, {}),
                    (0, n.jsx)('div', { className: c.bgScale }),
                    (0, n.jsxs)('div', {
                        className: c.inner,
                        children: [
                            (0, n.jsx)(o.Z, { icons: A }),
                            (0, n.jsx)('div', {
                                className: c.title,
                                children: e
                            }),
                            (0, n.jsx)('div', {
                                className: c.instructions,
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
            g(this, 'elementDOMRef', r.createRef()),
            g(this, 'isAllDropFiles', (e) => {
                for (let A = 0; A < e.length; A++)
                    try {
                        var t;
                        let n = null !== (t = e[A].webkitGetAsEntry()) && void 0 !== t ? t : e[A].getAsEntry();
                        if (n && !n.isFile) return !1;
                    } catch (e) {
                        continue;
                    }
                return !0;
            }),
            g(this, 'preventUnwantedDrop', function (e) {
                let A = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = e.dataTransfer;
                if (null == n) return !0;
                let r = Array.isArray(n.types) && -1 !== n.types.indexOf('text/uri-list') && -1 === n.types.indexOf('application/json'),
                    a = null != n.items && !t.isAllDropFiles(n.items);
                return (
                    (!r && !a) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (n.effectAllowed = 'none'),
                    (n.dropEffect = 'none'),
                    A &&
                        (t.setState({ isDragging: !1 }),
                        (0, s.openUploadError)({
                            title: d.intl.string(d.t.azO1PT),
                            help: d.intl.string(d.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            g(this, 'handleDragOver', (e) => {
                var t, A, n;
                if (!this.preventUnwantedDrop(e)) return !1;
                let r = e.dataTransfer;
                if (null != r) {
                    if (((r.dropEffect = 'copy'), (0, l.hasModalOpen)(s.UPLOAD_ERROR_MODAL_KEY) && (0, l.closeModal)(s.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (A = this.props).onDragOver) || void 0 === t || t.call(A, e), !this.state.isDragging)) {
                        let e = null === (n = this.elementDOMRef.current) || void 0 === n ? void 0 : n.ownerDocument.defaultView;
                        ((null != e && r.types instanceof e.DOMStringList && r.types.contains('application/x-moz-file')) || -1 !== r.types.indexOf('Files')) && this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
                    }
                    clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({ isDragging: !1 }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t);
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
                    null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t);
            }),
            g(this, 'handleDrop', (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let t = e.dataTransfer;
                if (null == t) return !0;
                this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
            });
    }
}
t.Z = p;
