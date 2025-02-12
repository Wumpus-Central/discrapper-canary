n.d(t, { Z: () => N }), n(47120), n(757143);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(270445),
    l = n(239091),
    u = n(40851),
    c = n(358085),
    d = n(960048),
    f = n(752305),
    _ = n(53529),
    p = n(789952),
    h = n(436660),
    m = n(887490),
    g = n(77224),
    E = n(135223),
    v = n(704875),
    y = n(653309),
    I = n(981631),
    T = n(27606),
    b = n(663362);
function S(e, t, n) {
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
class A extends r.PureComponent {
    componentDidMount() {
        this.props.editor.events.addListener('onChange', this.handleOnChange);
    }
    componentDidUpdate(e, t, n) {
        e.editor !== this.props.editor && (e.editor.events.removeListener('onChange', this.handleOnChange), this.props.editor.events.addListener('onChange', this.handleOnChange));
    }
    componentWillUnmount() {
        this.props.editor.events.removeListener('onChange', this.handleOnChange);
    }
    componentDidCatch(e, t) {
        d.Z.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] });
    }
    decorate(e) {
        var t;
        let { editor: n, guildId: i, decorateExtra: r } = this.props;
        return [...(0, E.Z)(n, e, i), ...(0, g.Z)(n, e), ...(null !== (t = null == r ? void 0 : r(n, e)) && void 0 !== t ? t : [])];
    }
    renderElement(e) {
        var t;
        let { guildId: n, channelId: r, renderExtraElement: a } = this.props,
            { attributes: s, children: o } = e;
        'rtl' === s.dir &&
            (s.style = {
                ...s.style,
                textAlign: 'right'
            });
        let l = null !== (t = null == a ? void 0 : a(e)) && void 0 !== t ? t : (0, v.Z)(e, n, r);
        return null != l
            ? l
            : (0, i.jsx)('div', {
                  ...s,
                  children: o
              });
    }
    renderLeaf(e) {
        var t;
        let { editor: n, renderExtraLeaf: r } = this.props,
            { attributes: a, children: s } = e,
            o = null !== (t = null == r ? void 0 : r(e)) && void 0 !== t ? t : (0, y.Z)(n, e);
        return null != o
            ? o
            : (0, i.jsx)('span', {
                  ...a,
                  children: s
              });
    }
    handleOnChange() {
        var e, t;
        let { editor: n } = this.props,
            i = m.bN.isEditorEmpty(n) && null == n.composition;
        if ((i !== this.state.showPlaceholder && this.setState({ showPlaceholder: i }), null === (e = (t = this.props).onChange) || void 0 === e || e.call(t, m.bN.richValue(n)), !1 === this.props.canFocus)) {
            let e = o.F3.findDocumentOrShadowRoot(n).getSelection();
            null != e && this.isSelectionPartiallyInside(e) && (null == e || e.removeAllRanges());
        }
    }
    handleKeyDown(e) {
        var t, n;
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        null === (t = (n = this.props).onKeyDown) || void 0 === t || t.call(n, e);
    }
    handleKeyUp(e) {
        var t, n;
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        null === (t = (n = this.props).onKeyUp) || void 0 === t || t.call(n, e);
    }
    handleBeforeInput(e) {
        var t;
        let { editor: n } = this.props,
            i = o.F3.findDocumentOrShadowRoot(n).getSelection(),
            r = null != i && i.rangeCount > 0 ? i.getRangeAt(0) : null,
            a = null !== (t = e.getTargetRanges()[0]) && void 0 !== t ? t : null;
        if (null == n.composition) {
            if (('insertText' === e.inputType || 'insertReplacementText' === e.inputType) && (null == a && (a = r), null != a)) {
                let t = m.bN.toSlateRange(n, a, {
                    exactMatch: !1,
                    suppressThrow: !0
                });
                null != t &&
                    null != e.data &&
                    (m.M8.isExpanded(t)
                        ? _.T.withSingleEntry(n, () => {
                              (n.selection = t), n.deleteFragment(), n.insertText(e.data), e.preventDefault();
                          })
                        : (n.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith('deleteContent') && null != r && !r.collapsed) {
                let t = m.bN.toSlateRange(n, r, {
                    exactMatch: !0,
                    suppressThrow: !0
                });
                null != t && m.M8.isExpanded(t) && ((n.selection = t), n.deleteFragment(e.inputType.endsWith('Backward') ? 'backward' : 'forward'), e.preventDefault());
            }
        }
    }
    handleCompositionStart() {
        var e, t;
        let { editor: n } = this.props,
            i = {
                insertedPrefix: !1,
                startedInsideInline: !1
            };
        this.state.showPlaceholder && this.setState({ showPlaceholder: !1 });
        let r = null != n.selection && m.M8.isCollapsed(n.selection) ? m.bN.leaf(n, n.selection.anchor.path) : null;
        if (null == r) {
            n.composition = i;
            return;
        }
        if (
            (null !=
                (null != n.selection && m.M8.isCollapsed(n.selection)
                    ? m.bN.above(n, {
                          at: r[1],
                          match: (e) => m.bN.isInline(n, e),
                          mode: 'lowest'
                      })
                    : null) && (i.startedInsideInline = !0),
            m.bN.isEditorEmpty(n))
        ) {
            h.Q.insertNodes(n, { text: '\uFEFF' }, { select: !0 }), (i.insertedPrefix = !0), (n.composition = i);
            return;
        }
        let a = o.F3.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            s = (null !== (e = null == a ? void 0 : a.rangeCount) && void 0 !== e ? e : 0) > 0 ? (null == a ? void 0 : a.getRangeAt(0)) : null;
        if (
            null ==
                (null != s
                    ? m.bN.toSlateRange(n, s, {
                          exactMatch: !0,
                          suppressThrow: !0
                      })
                    : null) &&
            null != s
        ) {
            let e = m.bN.toSlateRange(n, s, {
                exactMatch: !1,
                suppressThrow: !0
            });
            (n.selection = null), null != e ? h.Q.select(n, e) : h.Q.select(n, null !== (t = n.selection) && void 0 !== t ? t : m.bN.end(n, []));
        }
        n.composition = i;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && m.M8.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = m.aj.leaf(t, e);
            m.bN.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, '');
                h.Q.delete(t, {
                    unit: 'offset',
                    distance: n.text.length,
                    reverse: !0
                }),
                    m.bN.insertText(t, e);
            });
        }
        t.composition = null;
    }
    handleFocusCapture(e) {
        let { onFocus: t } = this.props;
        null == t || t(e);
    }
    handleBlurCapture(e) {
        let { editor: t, onBlur: n } = this.props,
            i = e.relatedTarget,
            r = o.F3.findDocumentOrShadowRoot(this.props.editor),
            a = r.getElementById('textarea-context'),
            s = r.getElementById('slate-toolbar');
        if (null != i && !(0, p.hasDomParent)(i, a) && !(0, p.hasDomParent)(i, s)) {
            let e = o.F3.findDocumentOrShadowRoot(t).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        null == n || n(e);
    }
    isSelectionPartiallyInside(e) {
        let t = this.containerRef.current;
        if (null != e && null != t)
            for (let n = e.rangeCount - 1; n >= 0; n--) {
                let i = e.getRangeAt(n);
                if ((0, p.hasDomParent)(i.startContainer, t) || (!i.collapsed && (0, p.hasDomParent)(i.endContainer, t))) return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let t = this.containerRef.current,
            n = !1,
            i = !1;
        if (null != e && null != t)
            for (let r = e.rangeCount - 1; r >= 0; r--) {
                let a = e.getRangeAt(r);
                if ((0, p.hasDomParent)(a.startContainer, t)) {
                    if (i) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    i = !0;
                }
                if (!a.collapsed) {
                    if ((0, p.hasDomParent)(a.startContainer, t)) {
                        if (i) return !0;
                        n = !0;
                    } else {
                        if (n) return !0;
                        i = !0;
                    }
                }
            }
        return !1;
    }
    handleContextMenu(e) {
        let { editor: t } = this.props,
            r = e.pageY,
            a = window.innerHeight,
            s = null != r && null != a && r < a / 2 ? 'top' : 'bottom';
        if (c.isPlatformEmbedded) {
            let r = (0, u.GB)();
            (0, l.jW)(
                e,
                async () => {
                    let { default: e } = await n.e('41984').then(n.bind(n, 343602));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            editor: t,
                            text: m.bN.getSelectedText(t, !0)
                        });
                },
                {
                    align: s,
                    enableSpellCheck: r === I.IlC.APP
                }
            );
        } else blur();
    }
    handlePasteCapture(e) {
        let { editor: t, onPaste: n, readOnly: i } = this.props;
        null == n || n(e), e.isDefaultPrevented() || e.isPropagationStopped() || i || (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
    }
    render() {
        let { editor: e, className: t, containerClassName: n, canFocus: r, autoFocus: a, placeholder: l, channelId: u, guildId: c, onChange: d, onFocus: f, onBlur: _, onKeyDown: p, onKeyUp: h, decorateExtra: m, renderExtraElement: g, renderExtraLeaf: E, ...v } = this.props;
        return (0, i.jsxs)('div', {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, i.jsx)('div', {
                          className: s()(T.placeholder, t),
                          'aria-hidden': !0,
                          children: l
                      })
                    : null,
                (0, i.jsx)(o.mH, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, i.jsx)(o.CX, {
                        ...v,
                        className: s()(b.markup, T.editor, t),
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
                        autoFocus: a && !1 !== r,
                        autoCorrect: 'off',
                        'data-can-focus': !1 !== r,
                        'aria-label': l,
                        'aria-multiline': !0
                    })
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            S(this, 'containerRef', r.createRef()),
            S(this, 'state', void 0),
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
            m.bN.isEditorEmpty(e.editor)
                ? (this.state = {
                      initialValue: (0, f.H2)().richValue,
                      showPlaceholder: !0
                  })
                : (this.state = {
                      initialValue: m.bN.richValue(e.editor),
                      showPlaceholder: !1
                  });
    }
}
let N = A;
