n(47120);
var A = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(310752),
    s = n(531643),
    d = n(388032),
    c = n(55720),
    u = n(73004);
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
function h() {
    return (0, A.jsxs)('div', {
        children: [(0, A.jsx)('div', { className: l()(u.sparkleWhite, c.sparkleOne) }), (0, A.jsx)('div', { className: l()(u.sparkleWhite, c.sparkleTwo) }), (0, A.jsx)('div', { className: l()(u.lightWhite, c.lightOne) }), (0, A.jsx)('div', { className: l()(u.lightWhite, c.lightTwo) }), (0, A.jsx)('div', { className: l()(u.crossWhite, c.crossOne) }), (0, A.jsx)('div', { className: l()(u.crossWhite, c.crossTwo) }), (0, A.jsx)('div', { className: l()(u.popWhite, c.popOne) })]
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
        let { title: e, description: t, icons: n, style: r, className: a } = this.props;
        return (0, A.jsx)('div', {
            ref: this.elementDOMRef,
            className: l()(a, c.uploadArea, {
                [c.droppable]: this.state.isDragging,
                [c.uploadModalIn]: this.state.isOverZone
            }),
            style: r,
            children: (0, A.jsxs)('div', {
                className: c.uploadDropModal,
                children: [
                    this.state.isDragging && (0, A.jsx)(h, {}),
                    (0, A.jsx)('div', { className: c.bgScale }),
                    (0, A.jsxs)('div', {
                        className: c.inner,
                        children: [
                            (0, A.jsx)(o.Z, { icons: n }),
                            (0, A.jsx)('div', {
                                className: c.title,
                                children: e
                            }),
                            (0, A.jsx)('div', {
                                className: c.instructions,
                                children: (0, A.jsx)('pre', { children: t })
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
                for (let n = 0; n < e.length; n++)
                    try {
                        var t;
                        let A = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
                        if (A && !A.isFile) return !1;
                    } catch (e) {
                        continue;
                    }
                return !0;
            }),
            g(this, 'preventUnwantedDrop', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    A = e.dataTransfer;
                if (null == A) return !0;
                let r = Array.isArray(A.types) && -1 !== A.types.indexOf('text/uri-list') && -1 === A.types.indexOf('application/json'),
                    a = null != A.items && !t.isAllDropFiles(A.items);
                return (
                    (!r && !a) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (A.effectAllowed = 'none'),
                    (A.dropEffect = 'none'),
                    n &&
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
                var t, n, A;
                if (!this.preventUnwantedDrop(e)) return !1;
                let r = e.dataTransfer;
                if (null != r) {
                    if (((r.dropEffect = 'copy'), (0, i.hasModalOpen)(s.UPLOAD_ERROR_MODAL_KEY) && (0, i.closeModal)(s.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging)) {
                        let e = null === (A = this.elementDOMRef.current) || void 0 === A ? void 0 : A.ownerDocument.defaultView;
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
