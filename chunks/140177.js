"use strict";
n.d(t, { A: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(253018),
    o = n(442433),
    c = n(267102),
    u = n(723702),
    d = n(728458),
    h = n(408018),
    m = n(186306),
    p = n(654821),
    f = n(35277),
    g = n(711371),
    _ = n(492375),
    x = n(249431),
    A = n(652215),
    C = n(422404),
    E = n(992595);
class I extends l.PureComponent {
    containerRef = l.createRef();
    state;
    constructor(e) {
        super(e),
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
            g.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, h.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: g.VW.richValue(e.editor), showPlaceholder: !1 });
    }
    componentDidMount() {
        this.props.editor.events.addListener("onChange", this.handleOnChange);
    }
    componentDidUpdate(e, t, n) {
        e.editor !== this.props.editor &&
            (e.editor.events.removeListener("onChange", this.handleOnChange),
            this.props.editor.events.addListener("onChange", this.handleOnChange));
    }
    componentWillUnmount() {
        this.props.editor.events.removeListener("onChange", this.handleOnChange);
    }
    componentDidCatch(e, t) {
        d.A.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] });
    }
    renderElement(e) {
        let { guildId: t, channelId: n, renderExtraElement: l } = this.props,
            { attributes: s, children: r } = e;
        "rtl" === s.dir && (s.style = { ...s.style, textAlign: "right" });
        let a = l?.(e) ?? (0, _.A)(e, t, n);
        return null != a ? a : (0, i.jsx)("div", { ...s, children: r });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: l, children: s } = e,
            r = n?.(e) ?? (0, x.A)(t, e);
        return null != r ? r : (0, i.jsx)("span", { ...l, children: s });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = g.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(g.VW.richValue(e)),
            !1 === this.props.canFocus)
        ) {
            let t = a.rL.findDocumentOrShadowRoot(e).getSelection();
            null != t && this.isSelectionPartiallyInside(t) && t?.removeAllRanges();
        }
    }
    handleKeyDown(e) {
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        this.props.onKeyDown?.(e);
    }
    handleKeyUp(e) {
        if (null != this.props.editor.composition) {
            e.preventDefault(), e.stopPropagation();
            return;
        }
        this.props.onKeyUp?.(e);
    }
    handleBeforeInput(e) {
        let { editor: t } = this.props,
            n = a.rL.findDocumentOrShadowRoot(t).getSelection(),
            i = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            l = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == l && (l = i), null != l)
            ) {
                let n = g.VW.toSlateRange(t, l, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (g.ZF.isExpanded(n)
                        ? m.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
                let n = g.VW.toSlateRange(t, i, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    g.ZF.isExpanded(n) &&
                    ((t.selection = n),
                    t.deleteFragment(e.inputType.endsWith("Backward") ? "backward" : "forward"),
                    e.preventDefault());
            }
        }
    }
    handleCompositionStart() {
        let { editor: e } = this.props,
            t = { insertedPrefix: !1, startedInsideInline: !1 };
        this.state.showPlaceholder && this.setState({ showPlaceholder: !1 });
        let n = null != e.selection && g.ZF.isCollapsed(e.selection) ? g.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && g.ZF.isCollapsed(e.selection)
                    ? g.VW.above(e, { at: n[1], match: (t) => g.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            g.VW.isEditorEmpty(e))
        ) {
            f.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let i = a.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            l = (i?.rangeCount ?? 0) > 0 ? i?.getRangeAt(0) : null;
        if (null == (null != l ? g.VW.toSlateRange(e, l, { exactMatch: !0, suppressThrow: !0 }) : null) && null != l) {
            let t = g.VW.toSlateRange(e, l, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? f.b.select(e, t) : f.b.select(e, g.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && g.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = g.AS.leaf(t, e);
            g.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                f.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), g.VW.insertText(t, e);
            });
        }
        t.composition = null;
    }
    handleFocusCapture(e) {
        let { onFocus: t } = this.props;
        t?.(e);
    }
    handleBlurCapture(e) {
        let { editor: t, onBlur: n } = this.props,
            i = e.relatedTarget,
            l = a.rL.findDocumentOrShadowRoot(this.props.editor),
            s = l.getElementById("textarea-context"),
            r = l.getElementById("slate-toolbar");
        if (null != i && !(0, p.hasDomParent)(i, s) && !(0, p.hasDomParent)(i, r)) {
            let e = a.rL.findDocumentOrShadowRoot(t).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        n?.(e);
    }
    isSelectionPartiallyInside(e) {
        let t = this.containerRef.current;
        if (null != e && null != t)
            for (let n = e.rangeCount - 1; n >= 0; n--) {
                let i = e.getRangeAt(n),
                    l = i.startContainer,
                    s = i.endContainer,
                    r = i.startOffset,
                    a = i.endOffset;
                if ((0, p.hasDomParent)(l, t) || (!(0, p.isDOMRangeCollapsed)(l, r, s, a) && (0, p.hasDomParent)(s, t)))
                    return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let t = this.containerRef.current,
            n = !1,
            i = !1;
        if (null != e && null != t)
            for (let l = e.rangeCount - 1; l >= 0; l--) {
                let s = e.getRangeAt(l),
                    r = s.startContainer,
                    a = s.endContainer,
                    o = s.startOffset,
                    c = s.endOffset;
                if ((0, p.hasDomParent)(r, t)) {
                    if (i) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    i = !0;
                }
                if (!(0, p.isDOMRangeCollapsed)(r, o, a, c))
                    if ((0, p.hasDomParent)(r, t)) {
                        if (i) return !0;
                        n = !0;
                    } else {
                        if (n) return !0;
                        i = !0;
                    }
            }
        return !1;
    }
    handleContextMenu(e) {
        let { editor: t } = this.props,
            l = e.pageY,
            s = window.innerHeight;
        if (u.isPlatformEmbedded) {
            let r = (0, c.zd)();
            (0, o.L3)(
                e,
                async () => {
                    let { default: e } = await n.e("58127").then(n.bind(n, 446514));
                    return (n) => (0, i.jsx)(e, { ...n, editor: t, text: g.VW.getSelectedText(t, !0) });
                },
                {
                    align: null != l && null != s && l < s / 2 ? "top" : "bottom",
                    enableSpellCheck: r === A.BRT.APP,
                    repositionOnContentChange: !0,
                },
            );
        } else blur();
    }
    handlePasteCapture(e) {
        let { editor: t, onPaste: n, readOnly: i } = this.props;
        n?.(e),
            e.isDefaultPrevented() ||
                e.isPropagationStopped() ||
                i ||
                (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
    }
    render() {
        let {
            editor: e,
            className: t,
            containerClassName: n,
            canFocus: l,
            autoFocus: s,
            placeholder: o,
            decorate: c,
            channelId: u,
            guildId: d,
            onChange: h,
            onFocus: m,
            onBlur: p,
            onKeyDown: f,
            onKeyUp: g,
            renderExtraElement: _,
            renderExtraLeaf: x,
            ...A
        } = this.props;
        return (0, i.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, i.jsx)("div", { className: r()(C.q, t), "aria-hidden": !0, children: o })
                    : null,
                (0, i.jsx)(a.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, i.jsx)(a.Fo, {
                        ...A,
                        className: r()(E.PT, C.E, t),
                        decorate: c,
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
                        autoFocus: s && !1 !== l,
                        autoCorrect: "off",
                        "data-can-focus": !1 !== l,
                        "aria-label": o,
                        "aria-multiline": !0,
                    }),
                }),
            ],
        });
    }
}
let v = I;
