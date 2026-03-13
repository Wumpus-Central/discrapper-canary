"use strict";
n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(253018),
    l = n(442433),
    u = n(267102),
    c = n(723702),
    d = n(728458),
    _ = n(408018),
    f = n(186306),
    p = n(654821),
    h = n(35277),
    m = n(711371),
    E = n(492375),
    g = n(249431),
    A = n(652215),
    I = n(747359),
    T = n(830412);
class S extends i.PureComponent {
    containerRef = i.createRef();
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
            m.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, _.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: m.VW.richValue(e.editor), showPlaceholder: !1 });
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
        let { guildId: t, channelId: n, renderExtraElement: i } = this.props,
            { attributes: s, children: a } = e;
        "rtl" === s.dir && (s.style = { ...s.style, textAlign: "right" });
        let o = i?.(e) ?? (0, E.A)(e, t, n);
        return null != o ? o : (0, r.jsx)("div", { ...s, children: a });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: i, children: s } = e,
            a = n?.(e) ?? (0, g.A)(t, e);
        return null != a ? a : (0, r.jsx)("span", { ...i, children: s });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = m.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(m.VW.richValue(e)),
            !1 === this.props.canFocus)
        ) {
            let t = o.rL.findDocumentOrShadowRoot(e).getSelection();
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
            n = o.rL.findDocumentOrShadowRoot(t).getSelection(),
            r = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            i = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == i && (i = r), null != i)
            ) {
                let n = m.VW.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (m.ZF.isExpanded(n)
                        ? f.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != r && !r.collapsed) {
                let n = m.VW.toSlateRange(t, r, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    m.ZF.isExpanded(n) &&
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
        let n = null != e.selection && m.ZF.isCollapsed(e.selection) ? m.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && m.ZF.isCollapsed(e.selection)
                    ? m.VW.above(e, { at: n[1], match: (t) => m.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            m.VW.isEditorEmpty(e))
        ) {
            h.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let r = o.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            i = (r?.rangeCount ?? 0) > 0 ? r?.getRangeAt(0) : null;
        if (null == (null != i ? m.VW.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }) : null) && null != i) {
            let t = m.VW.toSlateRange(e, i, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? h.b.select(e, t) : h.b.select(e, m.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && m.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = m.AS.leaf(t, e);
            m.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                h.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), m.VW.insertText(t, e);
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
            r = e.relatedTarget,
            i = o.rL.findDocumentOrShadowRoot(this.props.editor),
            s = i.getElementById("textarea-context"),
            a = i.getElementById("slate-toolbar");
        if (null != r && !(0, p.hasDomParent)(r, s) && !(0, p.hasDomParent)(r, a)) {
            let e = o.rL.findDocumentOrShadowRoot(t).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        n?.(e);
    }
    isSelectionPartiallyInside(e) {
        let t = this.containerRef.current;
        if (null != e && null != t)
            for (let n = e.rangeCount - 1; n >= 0; n--) {
                let r = e.getRangeAt(n),
                    i = r.startContainer,
                    s = r.endContainer,
                    a = r.startOffset,
                    o = r.endOffset;
                if ((0, p.hasDomParent)(i, t) || (!(0, p.isDOMRangeCollapsed)(i, a, s, o) && (0, p.hasDomParent)(s, t)))
                    return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let t = this.containerRef.current,
            n = !1,
            r = !1;
        if (null != e && null != t)
            for (let i = e.rangeCount - 1; i >= 0; i--) {
                let s = e.getRangeAt(i),
                    a = s.startContainer,
                    o = s.endContainer,
                    l = s.startOffset,
                    u = s.endOffset;
                if ((0, p.hasDomParent)(a, t)) {
                    if (r) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    r = !0;
                }
                if (!(0, p.isDOMRangeCollapsed)(a, l, o, u))
                    if ((0, p.hasDomParent)(a, t)) {
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
            s = window.innerHeight,
            a = null != i && null != s && i < s / 2 ? "top" : "bottom";
        if (c.isPlatformEmbedded) {
            let i = (0, u.zd)();
            (0, l.L3)(
                e,
                async () => {
                    let { default: e } = await n.e("58127").then(n.bind(n, 446514));
                    return (n) => (0, r.jsx)(e, { ...n, editor: t, text: m.VW.getSelectedText(t, !0) });
                },
                { align: a, enableSpellCheck: i === A.BRT.APP },
            );
        } else blur();
    }
    handlePasteCapture(e) {
        let { editor: t, onPaste: n, readOnly: r } = this.props;
        n?.(e),
            e.isDefaultPrevented() ||
                e.isPropagationStopped() ||
                r ||
                (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
    }
    render() {
        let {
            editor: e,
            className: t,
            containerClassName: n,
            canFocus: i,
            autoFocus: s,
            placeholder: l,
            decorate: u,
            channelId: c,
            guildId: d,
            onChange: _,
            onFocus: f,
            onBlur: p,
            onKeyDown: h,
            onKeyUp: m,
            renderExtraElement: E,
            renderExtraLeaf: g,
            ...A
        } = this.props;
        return (0, r.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, r.jsx)("div", { className: a()(I.q, t), "aria-hidden": !0, children: l })
                    : null,
                (0, r.jsx)(o.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, r.jsx)(o.Fo, {
                        ...A,
                        className: a()(T.PT, I.E, t),
                        decorate: u,
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
                        autoFocus: s && !1 !== i,
                        autoCorrect: "off",
                        "data-can-focus": !1 !== i,
                        "aria-label": l,
                        "aria-multiline": !0,
                    }),
                }),
            ],
        });
    }
}
let y = S;
