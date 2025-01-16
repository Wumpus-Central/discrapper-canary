var i = r(47120);
var a = r(757143);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(270445),
    d = r(239091),
    f = r(40851),
    _ = r(358085),
    h = r(960048),
    p = r(752305),
    m = r(53529),
    g = r(789952),
    E = r(436660),
    v = r(887490),
    I = r(77224),
    T = r(135223),
    b = r(704875),
    y = r(653309),
    S = r(981631),
    A = r(846644),
    N = r(665162);
function C(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class R extends o.PureComponent {
    componentDidMount() {
        this.props.editor.events.addListener('onChange', this.handleOnChange);
    }
    componentDidUpdate(e, n, r) {
        e.editor !== this.props.editor && (e.editor.events.removeListener('onChange', this.handleOnChange), this.props.editor.events.addListener('onChange', this.handleOnChange));
    }
    componentWillUnmount() {
        this.props.editor.events.removeListener('onChange', this.handleOnChange);
    }
    componentDidCatch(e, n) {
        h.Z.captureException(e, { extra: n }), this.setState({ initialValue: [...this.props.editor.children] });
    }
    decorate(e) {
        var n;
        let { editor: r, guildId: i, decorateExtra: a } = this.props;
        return [...(0, T.Z)(r, e, i), ...(0, I.Z)(r, e), ...(null !== (n = null == a ? void 0 : a(r, e)) && void 0 !== n ? n : [])];
    }
    renderElement(e) {
        var n;
        let { guildId: r, channelId: i, renderExtraElement: a } = this.props,
            { attributes: o, children: l } = e;
        'rtl' === o.dir &&
            (o.style = {
                ...o.style,
                textAlign: 'right'
            });
        let u = null !== (n = null == a ? void 0 : a(e)) && void 0 !== n ? n : (0, b.Z)(e, r, i);
        return null != u
            ? u
            : (0, s.jsx)('div', {
                  ...o,
                  children: l
              });
    }
    renderLeaf(e) {
        var n;
        let { editor: r, renderExtraLeaf: i } = this.props,
            { attributes: a, children: o } = e,
            l = null !== (n = null == i ? void 0 : i(e)) && void 0 !== n ? n : (0, y.Z)(r, e);
        return null != l
            ? l
            : (0, s.jsx)('span', {
                  ...a,
                  children: o
              });
    }
    handleOnChange() {
        var e, n;
        let { editor: r } = this.props,
            i = v.bN.isEditorEmpty(r) && null == r.composition;
        if ((i !== this.state.showPlaceholder && this.setState({ showPlaceholder: i }), null === (e = (n = this.props).onChange) || void 0 === e || e.call(n, v.bN.richValue(r)), !1 === this.props.canFocus)) {
            let e = c.F3.findDocumentOrShadowRoot(r).getSelection();
            null != e && this.isSelectionPartiallyInside(e) && (null == e || e.removeAllRanges());
        }
    }
    handleKeyDown(e) {
        var n, r;
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        null === (n = (r = this.props).onKeyDown) || void 0 === n || n.call(r, e);
    }
    handleKeyUp(e) {
        var n, r;
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        null === (n = (r = this.props).onKeyUp) || void 0 === n || n.call(r, e);
    }
    handleBeforeInput(e) {
        var n;
        let { editor: r } = this.props,
            i = c.F3.findDocumentOrShadowRoot(r).getSelection(),
            a = null != i && i.rangeCount > 0 ? i.getRangeAt(0) : null,
            s = null !== (n = e.getTargetRanges()[0]) && void 0 !== n ? n : null;
        if (null == r.composition) {
            if (('insertText' === e.inputType || 'insertReplacementText' === e.inputType) && (null == s && (s = a), null != s)) {
                let n = v.bN.toSlateRange(r, s, {
                    exactMatch: !1,
                    suppressThrow: !0
                });
                null != n &&
                    null != e.data &&
                    (v.M8.isExpanded(n)
                        ? m.T.withSingleEntry(r, () => {
                              (r.selection = n), r.deleteFragment(), r.insertText(e.data), e.preventDefault();
                          })
                        : (r.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith('deleteContent') && null != a && !a.collapsed) {
                let n = v.bN.toSlateRange(r, a, {
                    exactMatch: !0,
                    suppressThrow: !0
                });
                null != n && v.M8.isExpanded(n) && ((r.selection = n), r.deleteFragment(e.inputType.endsWith('Backward') ? 'backward' : 'forward'), e.preventDefault());
            }
        }
    }
    handleCompositionStart() {
        var e, n;
        let { editor: r } = this.props,
            i = {
                insertedPrefix: !1,
                startedInsideInline: !1
            };
        this.state.showPlaceholder && this.setState({ showPlaceholder: !1 });
        let a = null != r.selection && v.M8.isCollapsed(r.selection) ? v.bN.leaf(r, r.selection.anchor.path) : null;
        if (null == a) {
            r.composition = i;
            return;
        }
        if (
            (null !=
                (null != r.selection && v.M8.isCollapsed(r.selection)
                    ? v.bN.above(r, {
                          at: a[1],
                          match: (e) => v.bN.isInline(r, e),
                          mode: 'lowest'
                      })
                    : null) && (i.startedInsideInline = !0),
            v.bN.isEditorEmpty(r))
        ) {
            E.Q.insertNodes(r, { text: '\uFEFF' }, { select: !0 }), (i.insertedPrefix = !0), (r.composition = i);
            return;
        }
        let s = c.F3.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            o = (null !== (e = null == s ? void 0 : s.rangeCount) && void 0 !== e ? e : 0) > 0 ? (null == s ? void 0 : s.getRangeAt(0)) : null;
        if (
            null ==
                (null != o
                    ? v.bN.toSlateRange(r, o, {
                          exactMatch: !0,
                          suppressThrow: !0
                      })
                    : null) &&
            null != o
        ) {
            let e = v.bN.toSlateRange(r, o, {
                exactMatch: !1,
                suppressThrow: !0
            });
            (r.selection = null), null != e ? E.Q.select(r, e) : E.Q.select(r, null !== (n = r.selection) && void 0 !== n ? n : v.bN.end(r, []));
        }
        r.composition = i;
    }
    handleCompositionEnd(e) {
        let { editor: n } = this.props;
        if (null == n.composition) return;
        let { insertedPrefix: r } = n.composition;
        if (r && null != n.selection && v.M8.isCollapsed(n.selection)) {
            let e = n.selection.anchor.path,
                r = v.aj.leaf(n, e);
            v.bN.withoutNormalizing(n, () => {
                let e = r.text.replace(/^\uFEFF/, '');
                E.Q.delete(n, {
                    unit: 'offset',
                    distance: r.text.length,
                    reverse: !0
                }),
                    v.bN.insertText(n, e);
            });
        }
        n.composition = null;
    }
    handleFocusCapture(e) {
        let { onFocus: n } = this.props;
        null == n || n(e);
    }
    handleBlurCapture(e) {
        let { editor: n, onBlur: r } = this.props,
            i = e.relatedTarget,
            a = c.F3.findDocumentOrShadowRoot(this.props.editor),
            s = a.getElementById('textarea-context'),
            o = a.getElementById('slate-toolbar');
        if (null != i && !(0, g.hasDomParent)(i, s) && !(0, g.hasDomParent)(i, o)) {
            let e = c.F3.findDocumentOrShadowRoot(n).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        null == r || r(e);
    }
    isSelectionPartiallyInside(e) {
        let n = this.containerRef.current;
        if (null != e && null != n)
            for (let r = e.rangeCount - 1; r >= 0; r--) {
                let i = e.getRangeAt(r);
                if ((0, g.hasDomParent)(i.startContainer, n) || (!i.collapsed && (0, g.hasDomParent)(i.endContainer, n))) return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let n = this.containerRef.current,
            r = !1,
            i = !1;
        if (null != e && null != n)
            for (let a = e.rangeCount - 1; a >= 0; a--) {
                let s = e.getRangeAt(a);
                if ((0, g.hasDomParent)(s.startContainer, n)) {
                    if (i) return !0;
                    r = !0;
                } else {
                    if (r) return !0;
                    i = !0;
                }
                if (!s.collapsed) {
                    if ((0, g.hasDomParent)(s.startContainer, n)) {
                        if (i) return !0;
                        r = !0;
                    } else {
                        if (r) return !0;
                        i = !0;
                    }
                }
            }
        return !1;
    }
    handleContextMenu(e) {
        let { editor: n } = this.props,
            i = e.pageY,
            a = window.innerHeight,
            o = null != i && null != a && i < a / 2 ? 'top' : 'bottom';
        if (_.isPlatformEmbedded) {
            let i = (0, f.GB)();
            (0, d.jW)(
                e,
                async () => {
                    let { default: e } = await r.e('41984').then(r.bind(r, 343602));
                    return (r) =>
                        (0, s.jsx)(e, {
                            ...r,
                            editor: n,
                            text: v.bN.getSelectedText(n, !0)
                        });
                },
                {
                    align: o,
                    enableSpellCheck: i === S.IlC.APP
                }
            );
        } else blur();
    }
    handlePasteCapture(e) {
        let { editor: n, onPaste: r, readOnly: i } = this.props;
        null == r || r(e), !(e.isDefaultPrevented() || e.isPropagationStopped()) && !i && (n.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
    }
    render() {
        let { editor: e, className: n, containerClassName: r, canFocus: i, autoFocus: a, placeholder: o, channelId: l, guildId: d, onChange: f, onFocus: _, onBlur: h, onKeyDown: p, onKeyUp: m, decorateExtra: g, renderExtraElement: E, renderExtraLeaf: v, ...I } = this.props;
        return (0, s.jsxs)('div', {
            ref: this.containerRef,
            className: r,
            children: [
                this.state.showPlaceholder
                    ? (0, s.jsx)('div', {
                          className: u()(A.placeholder, n),
                          'aria-hidden': !0,
                          children: o
                      })
                    : null,
                (0, s.jsx)(c.mH, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, s.jsx)(c.CX, {
                        ...I,
                        className: u()(N.markup, A.editor, n),
                        decorate: this.decorate,
                        renderElement: this.renderElement,
                        renderLeaf: this.renderLeaf,
                        onFocusCapture: this.handleFocusCapture,
                        onBlurCapture: this.handleBlurCapture,
                        onContextMenu: this.handleContextMenu,
                        onKeyDown: this.handleKeyDown,
                        onKeyUp: this.handleKeyUp,
                        onDOMBeforeInput: this.handleBeforeInput,
                        onCompositionStart: this.handleCompositionStart,
                        onCompositionEnd: this.handleCompositionEnd,
                        onPasteCapture: this.handlePasteCapture,
                        autoFocus: a && !1 !== i,
                        autoCorrect: 'off',
                        'data-can-focus': !1 !== i,
                        'aria-label': o,
                        'aria-multiline': !0
                    })
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            C(this, 'containerRef', o.createRef()),
            C(this, 'state', void 0),
            (this.decorate = this.decorate.bind(this)),
            (this.renderElement = this.renderElement.bind(this)),
            (this.renderLeaf = this.renderLeaf.bind(this)),
            (this.handleOnChange = this.handleOnChange.bind(this)),
            (this.handleKeyDown = this.handleKeyDown.bind(this)),
            (this.handleKeyUp = this.handleKeyUp.bind(this)),
            (this.handleBeforeInput = this.handleBeforeInput.bind(this)),
            (this.handleCompositionStart = this.handleCompositionStart.bind(this)),
            (this.handleCompositionEnd = this.handleCompositionEnd.bind(this)),
            (this.handleFocusCapture = this.handleFocusCapture.bind(this)),
            (this.handleBlurCapture = this.handleBlurCapture.bind(this)),
            (this.handleContextMenu = this.handleContextMenu.bind(this)),
            (this.handlePasteCapture = this.handlePasteCapture.bind(this)),
            v.bN.isEditorEmpty(e.editor)
                ? (this.state = {
                      initialValue: (0, p.H2)().richValue,
                      showPlaceholder: !0
                  })
                : (this.state = {
                      initialValue: v.bN.richValue(e.editor),
                      showPlaceholder: !1
                  });
    }
}
n.Z = R;
