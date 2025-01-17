n(47120);
var r = n(200651),
    l = n(192379),
    i = n(120356),
    s = n.n(i),
    a = n(481060),
    o = n(310752),
    E = n(531643),
    u = n(388032),
    c = n(55720),
    d = n(73004);
function _(e, t, n) {
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
function A() {
    return (0, r.jsxs)('div', {
        children: [(0, r.jsx)('div', { className: s()(d.sparkleWhite, c.sparkleOne) }), (0, r.jsx)('div', { className: s()(d.sparkleWhite, c.sparkleTwo) }), (0, r.jsx)('div', { className: s()(d.lightWhite, c.lightOne) }), (0, r.jsx)('div', { className: s()(d.lightWhite, c.lightTwo) }), (0, r.jsx)('div', { className: s()(d.crossWhite, c.crossOne) }), (0, r.jsx)('div', { className: s()(d.crossWhite, c.crossTwo) }), (0, r.jsx)('div', { className: s()(d.popWhite, c.popOne) })]
    });
}
class T extends l.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
    }
    render() {
        let { title: e, description: t, icons: n, style: l, className: i } = this.props;
        return (0, r.jsx)('div', {
            ref: this.elementDOMRef,
            className: s()(i, c.uploadArea, {
                [c.droppable]: this.state.isDragging,
                [c.uploadModalIn]: this.state.isOverZone
            }),
            style: l,
            children: (0, r.jsxs)('div', {
                className: c.uploadDropModal,
                children: [
                    this.state.isDragging && (0, r.jsx)(A, {}),
                    (0, r.jsx)('div', { className: c.bgScale }),
                    (0, r.jsxs)('div', {
                        className: c.inner,
                        children: [
                            (0, r.jsx)(o.Z, { icons: n }),
                            (0, r.jsx)('div', {
                                className: c.title,
                                children: e
                            }),
                            (0, r.jsx)('div', {
                                className: c.instructions,
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
            _(this, 'state', {
                isDragging: !1,
                isOverZone: !1
            }),
            _(this, 'dragOverTimeout', null),
            _(this, 'elementDOMRef', l.createRef()),
            _(this, 'isAllDropFiles', (e) => {
                for (let n = 0; n < e.length; n++)
                    try {
                        var t;
                        let r = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
                        if (r && !r.isFile) return !1;
                    } catch (e) {
                        continue;
                    }
                return !0;
            }),
            _(this, 'preventUnwantedDrop', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = e.dataTransfer;
                if (null == r) return !0;
                let l = Array.isArray(r.types) && -1 !== r.types.indexOf('text/uri-list') && -1 === r.types.indexOf('application/json'),
                    i = null != r.items && !t.isAllDropFiles(r.items);
                return (
                    (!l && !i) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (r.effectAllowed = 'none'),
                    (r.dropEffect = 'none'),
                    n &&
                        (t.setState({ isDragging: !1 }),
                        (0, E.openUploadError)({
                            title: u.intl.string(u.t.azO1PT),
                            help: u.intl.string(u.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            _(this, 'handleDragOver', (e) => {
                var t, n, r;
                if (!this.preventUnwantedDrop(e)) return !1;
                let l = e.dataTransfer;
                if (null != l) {
                    if (((l.dropEffect = 'copy'), (0, a.hasModalOpen)(E.UPLOAD_ERROR_MODAL_KEY) && (0, a.closeModal)(E.UPLOAD_ERROR_MODAL_KEY), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging)) {
                        let e = null === (r = this.elementDOMRef.current) || void 0 === r ? void 0 : r.ownerDocument.defaultView;
                        ((null != e && l.types instanceof e.DOMStringList && l.types.contains('application/x-moz-file')) || -1 !== l.types.indexOf('Files')) && this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
                    }
                    clearTimeout(this.dragOverTimeout),
                        (this.dragOverTimeout = setTimeout(() => {
                            var e, t;
                            this.setState({ isDragging: !1 }), null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t);
                        }, 1000));
                }
            }),
            _(this, 'handleDragOverZone', () => {
                this.setState({ isOverZone: !0 });
            }),
            _(this, 'handleDragLeaveZone', () => {
                this.setState({ isOverZone: !1 });
            }),
            _(this, 'handleDragLeave', (e) => {
                this.state.isDragging && (e.stopPropagation(), e.preventDefault(), this.clearDragging());
            }),
            _(this, 'clearDragging', () => {
                var e, t;
                this.setState({
                    isDragging: !1,
                    isOverZone: !1
                }),
                    null === (e = (t = this.props).onDragClear) || void 0 === e || e.call(t);
            }),
            _(this, 'handleDrop', (e) => {
                if (!this.preventUnwantedDrop(e, !0)) return !1;
                let t = e.dataTransfer;
                if (null == t) return !0;
                this.state.isDragging && (e.preventDefault(), e.stopPropagation(), this.props.onDrop(t.files), this.clearDragging());
            });
    }
}
t.Z = T;
