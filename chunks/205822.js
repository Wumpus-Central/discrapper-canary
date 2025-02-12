n.d(t, { Z: () => C }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(481060),
    o = n(310752),
    d = n(531643),
    u = n(388032),
    c = n(255969),
    h = n(19479);
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
function p() {
    return (0, i.jsxs)('div', {
        children: [(0, i.jsx)('div', { className: s()(h.sparkleWhite, c.sparkleOne) }), (0, i.jsx)('div', { className: s()(h.sparkleWhite, c.sparkleTwo) }), (0, i.jsx)('div', { className: s()(h.lightWhite, c.lightOne) }), (0, i.jsx)('div', { className: s()(h.lightWhite, c.lightTwo) }), (0, i.jsx)('div', { className: s()(h.crossWhite, c.crossOne) }), (0, i.jsx)('div', { className: s()(h.crossWhite, c.crossTwo) }), (0, i.jsx)('div', { className: s()(h.popWhite, c.popOne) })]
    });
}
class f extends l.Component {
    componentDidMount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.addEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.addEventListener('drop', this.handleDragLeave, !1), e.addEventListener('dragover', this.handleDragOverZone, !1), e.addEventListener('dragleave', this.handleDragLeaveZone, !1), e.addEventListener('drop', this.handleDrop, !1));
    }
    componentWillUnmount() {
        let e = this.elementDOMRef.current;
        null != e && (e.ownerDocument.body.removeEventListener('dragover', this.handleDragOver, !1), e.ownerDocument.body.removeEventListener('drop', this.handleDragLeave, !1), e.removeEventListener('dragover', this.handleDragOverZone, !1), e.removeEventListener('dragleave', this.handleDragLeaveZone, !1), e.removeEventListener('drop', this.handleDrop, !1)), clearTimeout(this.dragOverTimeout);
    }
    render() {
        let { title: e, description: t, icons: n, style: l, className: r } = this.props;
        return (0, i.jsx)('div', {
            ref: this.elementDOMRef,
            className: s()(r, c.uploadArea, {
                [c.droppable]: this.state.isDragging,
                [c.uploadModalIn]: this.state.isOverZone
            }),
            style: l,
            children: (0, i.jsxs)('div', {
                className: c.uploadDropModal,
                children: [
                    this.state.isDragging && (0, i.jsx)(p, {}),
                    (0, i.jsx)('div', { className: c.bgScale }),
                    (0, i.jsxs)('div', {
                        className: c.inner,
                        children: [
                            (0, i.jsx)(o.Z, { icons: n }),
                            (0, i.jsx)('div', {
                                className: c.title,
                                children: e
                            }),
                            (0, i.jsx)('div', {
                                className: c.instructions,
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
            g(this, 'state', {
                isDragging: !1,
                isOverZone: !1
            }),
            g(this, 'dragOverTimeout', null),
            g(this, 'elementDOMRef', l.createRef()),
            g(this, 'isAllDropFiles', (e) => {
                for (let n = 0; n < e.length; n++)
                    try {
                        var t;
                        let i = null !== (t = e[n].webkitGetAsEntry()) && void 0 !== t ? t : e[n].getAsEntry();
                        if (i && !i.isFile) return !1;
                    } catch (e) {
                        continue;
                    }
                return !0;
            }),
            g(this, 'preventUnwantedDrop', function (e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = e.dataTransfer;
                if (null == i) return !0;
                let l = Array.isArray(i.types) && -1 !== i.types.indexOf('text/uri-list') && -1 === i.types.indexOf('application/json'),
                    r = null != i.items && !t.isAllDropFiles(i.items);
                return (
                    (!l && !r) ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    (i.effectAllowed = 'none'),
                    (i.dropEffect = 'none'),
                    n &&
                        (t.setState({ isDragging: !1 }),
                        (0, d.openUploadError)({
                            title: u.intl.string(u.t.azO1PT),
                            help: u.intl.string(u.t.Koklr6),
                            icons: t.props.icons
                        })),
                    !1)
                );
            }),
            g(this, 'handleDragOver', (e) => {
                var t, n, i;
                if (!this.preventUnwantedDrop(e)) return !1;
                let l = e.dataTransfer;
                if (null != l) {
                    if (((l.dropEffect = 'copy'), (0, a.nfh)(d.A) && (0, a.Mr3)(d.A), e.stopPropagation(), e.preventDefault(), null === (t = (n = this.props).onDragOver) || void 0 === t || t.call(n, e), !this.state.isDragging)) {
                        let e = null === (i = this.elementDOMRef.current) || void 0 === i ? void 0 : i.ownerDocument.defaultView;
                        ((null != e && l.types instanceof e.DOMStringList && l.types.contains('application/x-moz-file')) || -1 !== l.types.indexOf('Files')) && this.setState((e) => (e.isDragging ? {} : { isDragging: !0 }));
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
let C = f;
