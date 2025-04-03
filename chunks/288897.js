n.d(t, { Z: () => w }), n(47120), n(757143), n(301563);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(270445),
    l = n(239091),
    c = n(40851),
    u = n(358085),
    d = n(960048),
    f = n(752305),
    _ = n(53529),
    p = n(789952),
    h = n(436660),
    m = n(887490),
    g = n(77224),
    E = n(135223),
    b = n(704875),
    y = n(653309),
    v = n(981631),
    O = n(508928),
    I = n(73433);
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
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class P extends i.PureComponent {
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
        let { editor: n, guildId: r, decorateExtra: i } = this.props;
        return [...(0, E.Z)(n, e, r), ...(0, g.Z)(n, e), ...(null != (t = null == i ? void 0 : i(n, e)) ? t : [])];
    }
    renderElement(e) {
        var t;
        let { guildId: n, channelId: i, renderExtraElement: o } = this.props,
            { attributes: a, children: s } = e;
        'rtl' === a.dir && (a.style = A(T({}, a.style), { textAlign: 'right' }));
        let l = null != (t = null == o ? void 0 : o(e)) ? t : (0, b.Z)(e, n, i);
        return null != l ? l : (0, r.jsx)('div', A(T({}, a), { children: s }));
    }
    renderLeaf(e) {
        var t;
        let { editor: n, renderExtraLeaf: i } = this.props,
            { attributes: o, children: a } = e,
            s = null != (t = null == i ? void 0 : i(e)) ? t : (0, y.Z)(n, e);
        return null != s ? s : (0, r.jsx)('span', A(T({}, o), { children: a }));
    }
    handleOnChange() {
        var e, t;
        let { editor: n } = this.props,
            r = m.bN.isEditorEmpty(n) && null == n.composition;
        if ((r !== this.state.showPlaceholder && this.setState({ showPlaceholder: r }), null == (e = (t = this.props).onChange) || e.call(t, m.bN.richValue(n)), !1 === this.props.canFocus)) {
            let e = s.F3.findDocumentOrShadowRoot(n).getSelection();
            null != e && this.isSelectionPartiallyInside(e) && (null == e || e.removeAllRanges());
        }
    }
    handleKeyDown(e) {
        var t, n;
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        null == (t = (n = this.props).onKeyDown) || t.call(n, e);
    }
    handleKeyUp(e) {
        var t, n;
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        null == (t = (n = this.props).onKeyUp) || t.call(n, e);
    }
    handleBeforeInput(e) {
        var t;
        let { editor: n } = this.props,
            r = s.F3.findDocumentOrShadowRoot(n).getSelection(),
            i = null != r && r.rangeCount > 0 ? r.getRangeAt(0) : null,
            o = null != (t = e.getTargetRanges()[0]) ? t : null;
        if (null == n.composition) {
            if (('insertText' === e.inputType || 'insertReplacementText' === e.inputType) && (null == o && (o = i), null != o)) {
                let t = m.bN.toSlateRange(n, o, {
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
            if (e.inputType.startsWith('deleteContent') && null != i && !i.collapsed) {
                let t = m.bN.toSlateRange(n, i, {
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
            r = {
                insertedPrefix: !1,
                startedInsideInline: !1
            };
        this.state.showPlaceholder && this.setState({ showPlaceholder: !1 });
        let i = null != n.selection && m.M8.isCollapsed(n.selection) ? m.bN.leaf(n, n.selection.anchor.path) : null;
        if (null == i) {
            n.composition = r;
            return;
        }
        if (
            (null !=
                (null != n.selection && m.M8.isCollapsed(n.selection)
                    ? m.bN.above(n, {
                          at: i[1],
                          match: (e) => m.bN.isInline(n, e),
                          mode: 'lowest'
                      })
                    : null) && (r.startedInsideInline = !0),
            m.bN.isEditorEmpty(n))
        ) {
            h.Q.insertNodes(n, { text: '\uFEFF' }, { select: !0 }), (r.insertedPrefix = !0), (n.composition = r);
            return;
        }
        let o = s.F3.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            a = (null != (e = null == o ? void 0 : o.rangeCount) ? e : 0) > 0 ? (null == o ? void 0 : o.getRangeAt(0)) : null;
        if (
            null ==
                (null != a
                    ? m.bN.toSlateRange(n, a, {
                          exactMatch: !0,
                          suppressThrow: !0
                      })
                    : null) &&
            null != a
        ) {
            let e = m.bN.toSlateRange(n, a, {
                exactMatch: !1,
                suppressThrow: !0
            });
            (n.selection = null), null != e ? h.Q.select(n, e) : h.Q.select(n, null != (t = n.selection) ? t : m.bN.end(n, []));
        }
        n.composition = r;
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
            r = e.relatedTarget,
            i = s.F3.findDocumentOrShadowRoot(this.props.editor),
            o = i.getElementById('textarea-context'),
            a = i.getElementById('slate-toolbar');
        if (null != r && !(0, p.hasDomParent)(r, o) && !(0, p.hasDomParent)(r, a)) {
            let e = s.F3.findDocumentOrShadowRoot(t).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        null == n || n(e);
    }
    isSelectionPartiallyInside(e) {
        let t = this.containerRef.current;
        if (null != e && null != t)
            for (let n = e.rangeCount - 1; n >= 0; n--) {
                let r = e.getRangeAt(n);
                if ((0, p.hasDomParent)(r.startContainer, t) || (!r.collapsed && (0, p.hasDomParent)(r.endContainer, t))) return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let t = this.containerRef.current,
            n = !1,
            r = !1;
        if (null != e && null != t)
            for (let i = e.rangeCount - 1; i >= 0; i--) {
                let o = e.getRangeAt(i);
                if ((0, p.hasDomParent)(o.startContainer, t)) {
                    if (r) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    r = !0;
                }
                if (!o.collapsed)
                    if ((0, p.hasDomParent)(o.startContainer, t)) {
                        if (r) return !0;
                        n = !0;
                    } else {
                        if (n) return !0;
                        r = !0;
                    }
            }
        return !1;
    }
    handleContextMenu(e) {
        let { editor: t } = this.props,
            i = e.pageY,
            o = window.innerHeight,
            a = null != i && null != o && i < o / 2 ? 'top' : 'bottom';
        if (u.isPlatformEmbedded) {
            let i = (0, c.GB)();
            (0, l.jW)(
                e,
                async () => {
                    let { default: e } = await n.e('41984').then(n.bind(n, 343602));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            A(T({}, n), {
                                editor: t,
                                text: m.bN.getSelectedText(t, !0)
                            })
                        );
                },
                {
                    align: a,
                    enableSpellCheck: i === v.IlC.APP
                }
            );
        } else blur();
    }
    handlePasteCapture(e) {
        let { editor: t, onPaste: n, readOnly: r } = this.props;
        null == n || n(e), e.isDefaultPrevented() || e.isPropagationStopped() || r || (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
    }
    render() {
        let e = this.props,
            { editor: t, className: n, containerClassName: i, canFocus: o, autoFocus: l, placeholder: c, channelId: u, guildId: d, onChange: f, onFocus: _, onBlur: p, onKeyDown: h, onKeyUp: m, decorateExtra: g, renderExtraElement: E, renderExtraLeaf: b } = e,
            y = C(e, ['editor', 'className', 'containerClassName', 'canFocus', 'autoFocus', 'placeholder', 'channelId', 'guildId', 'onChange', 'onFocus', 'onBlur', 'onKeyDown', 'onKeyUp', 'decorateExtra', 'renderExtraElement', 'renderExtraLeaf']);
        return (0, r.jsxs)('div', {
            ref: this.containerRef,
            className: i,
            children: [
                this.state.showPlaceholder
                    ? (0, r.jsx)('div', {
                          className: a()(O.placeholder, n),
                          'aria-hidden': !0,
                          children: c
                      })
                    : null,
                (0, r.jsx)(s.mH, {
                    editor: t,
                    value: [...this.state.initialValue],
                    children: (0, r.jsx)(
                        s.CX,
                        A(T({}, y), {
                            className: a()(I.markup, O.editor, n),
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
                            autoFocus: l && !1 !== o,
                            autoCorrect: 'off',
                            'data-can-focus': !1 !== o,
                            'aria-label': c,
                            'aria-multiline': !0
                        })
                    )
                })
            ]
        });
    }
    constructor(e) {
        super(e),
            S(this, 'containerRef', i.createRef()),
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
let w = P;
