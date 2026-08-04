"use strict";
n.d(t, { A: () => ef });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(530795),
    o = n(442433),
    d = n(267102),
    c = n(676279),
    u = n(723702),
    _ = n(38405),
    E = n(19575),
    A = n(408018),
    h = n(186306),
    I = n(654821),
    f = n(35277),
    p = n(820066),
    T = n(112107),
    m = n(17928),
    g = n(866665),
    S = n(778712),
    N = n(939249),
    C = n(545442),
    O = n(922016),
    R = n(565645),
    L = n(730134),
    D = n(775602),
    y = n(47167),
    v = n(442247),
    b = n(569926),
    M = n(106191),
    P = n(545868),
    U = n(376943),
    w = n(465365),
    G = n(78390),
    x = n(785562),
    k = n(332173),
    F = n(37632),
    V = n(593284),
    B = n(967144);
n(209932);
var H = n(734057),
    j = n(317525),
    W = n(994500),
    Y = n(351906),
    K = n(287809),
    $ = n(871237),
    z = n(562153),
    q = n(427262),
    Z = n(375708),
    X = n(913691);
function Q(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(g.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(R.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function J(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(g.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(R.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function ee(e) {
    let { text: t } = e;
    return (0, i.jsx)(k.A, { children: t });
}
function et(e) {
    let { id: t, guildId: n, channelId: r } = e,
        a = (0, m.bG)([K.default], () => K.default.getUser(t)),
        s = (0, m.bG)([Y.A], () => Y.A.hidePersonalInformation),
        l = z.Ay.useName(n, r, a),
        o = (0, i.jsx)(k.A, { children: null == l ? `<@${t}>` : `@${l}` });
    if (null != a) {
        let e = s || a.hasUniqueUsername() ? null : `#${a.discriminator}`;
        return (0, i.jsx)(g.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: X.fX,
                children: [
                    (0, i.jsx)(L.A, { user: a, animate: !0, size: S._3.SIZE_16, className: X.my }),
                    q.Ay.getUserTag(a, { mode: "username", identifiable: s ? "never" : "always" }),
                    (0, i.jsx)("span", { className: X.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": q.Ay.getUserTag(a, { decoration: "never" }),
            asContainer: !0,
            children: (0, i.jsx)(N.D, { tag: "span", children: o }),
        });
    }
    return o;
}
function en(e) {
    let { id: t, guildId: n, channelId: a } = e,
        s = (0, m.bG)([j.A], () => (null != n ? j.A.getRole(n, t) : void 0)),
        l = (0, m.bG)([D.Ay], () => D.Ay.roleStyle),
        o = (0, B.X_)(n, s, s?.colorStrings),
        d = r.useRef(null);
    if (null == s) return (0, i.jsxs)("span", { children: ["@", Z.intl.string(Z.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        u = "dot" === l,
        _ = "username" === l && c;
    function E(e) {
        return null == s
            ? null
            : (0, i.jsxs)(k.A, {
                  ref: d,
                  color: _ ? s.color : null,
                  roleColors: _ ? o : null,
                  ...e,
                  children: [
                      u && (0, i.jsx)(C.W, { color: s.colorString, colors: o, background: !1, tooltip: !1 }),
                      "@",
                      s.name,
                  ],
              });
    }
    return null == n || null == a
        ? E()
        : (0, i.jsx)(O.Y, {
              targetElementRef: d,
              preload: async () => {
                  await (0, P.a)(n, t);
              },
              renderPopout: (e) => (0, i.jsx)(V.Y, { guildId: n, channelId: a, roleId: t, popoutProps: e }),
              position: "top",
              children: E,
          });
}
function ei(e) {
    let { id: t } = e,
        n = (0, m.bG)([H.A], () => H.A.getChannel(t)),
        r = Z.intl.string(Z.t.zLZPmk).toLowerCase(),
        a = "text",
        s = !0;
    return (null != n &&
        ((r = (0, U.nc)(n) ? (0, y.m1)(n, K.default, W.A) : Z.intl.string(Z.t["/YzI63"])),
        (a = (0, U.nc)(n) ? ((0, $.QG)(n) ?? "text") : "locked"),
        (s = (0, w.Y)(n.type))),
    s)
        ? (0, i.jsx)(k.A, { iconType: a, children: r })
        : (0, i.jsx)("span", { children: "#" + r });
}
function er(e) {
    let { id: t, itemId: n, guildId: r } = e,
        a = (0, G.Q)(t),
        s = (0, G.f)(t, n, r);
    return (0, i.jsxs)(k.A, { iconType: t, children: [a, null != s && (0, i.jsx)(F.A, {}), s] });
}
function ea(e) {
    let { text: t, id: n } = e;
    return (0, i.jsxs)(k.A, { children: [t, "(", n, ")"] });
}
function es(e) {
    let { timestamp: t } = e;
    return (0, i.jsx)(x.A, { node: t, className: "R" === t.format ? X.gS : null });
}
function el(e) {
    let { id: t } = e,
        n = (0, v.K)(t),
        r = null != n;
    return ((0, b.I)(r ? void 0 : t), r)
        ? (0, i.jsxs)(k.A, {
              children: [(0, i.jsx)(M.A, { game: { id: t, icon: n.gameIcon }, iconClassName: X.Kk }), n.gameName],
          })
        : (0, i.jsxs)("span", { children: ["@", Z.intl.string(Z.t["11pdXZ"])] });
}
var eo = n(870322),
    ed = n(487411),
    ec = n(275504);
let eu = {
    strong: eo.bold,
    em: eo.italics,
    u: eo.underline,
    s: eo.strikethrough,
    inlineCode: eo.inlineCode,
    link: eo.fakeLink,
    url: eo.fakeLink,
    autolink: eo.fakeLink,
    silentPrefix: eo.silentPrefix,
    spoiler: s()(ec.ur, ec.F0, ec.kx, eo.spoiler),
    staticRouteLink: eo.fakeLink,
    syntaxBefore: eo.syntaxBefore,
    syntaxAfter: eo.syntaxAfter,
    codeBlockText: eo.codeBlockText,
    codeBlockSyntax: eo.codeBlockSyntax,
    codeBlockLang: eo.codeBlockLang,
    subtext: eo.subtext,
};
var e_ = n(742715);
function eE(e) {
    let { className: t, attributes: n, children: r } = e,
        a = s()(ed.S0, ed.Cj, t);
    return (0, i.jsx)("span", { ...n, className: a, contentEditable: !1, children: r });
}
var eA = n(652215),
    eh = n(831356);
class eI extends r.PureComponent {
    containerRef = r.createRef();
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
            p.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, A.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: p.VW.richValue(e.editor), showPlaceholder: !1 });
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
        _.A.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] });
    }
    renderElement(e) {
        let { guildId: t, channelId: n, renderExtraElement: r } = this.props,
            { attributes: a, children: l } = e;
        "rtl" === a.dir && (a.style = { ...a.style, textAlign: "right" });
        let o =
            r?.(e) ??
            (function (e, t, n) {
                let { attributes: r, children: a, element: l, decorations: o } = e,
                    d = Object.entries(o?.[0] ?? {})
                        .filter((e) => {
                            let [t] = e;
                            return "anchor" !== t && "focus" !== t;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return !0 === n && t in eu ? eu[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (l.type) {
                    case "line":
                        if (l.codeBlockState?.isInCodeBlock)
                            return (0, i.jsx)("div", {
                                className: eo.codeLine,
                                spellCheck: null == l.codeBlockState || null == l.codeBlockState.lang,
                                ...r,
                                children: a,
                            });
                        return (0, i.jsx)("div", { ...r, children: a });
                    case "blockQuote": {
                        let e = s()(e_.h, e_.MN);
                        return (0, i.jsxs)("div", {
                            ...r,
                            className: e,
                            children: [
                                (0, i.jsx)("span", { contentEditable: !1, className: e_.r }),
                                (0, i.jsx)("blockquote", { children: a }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(Q, { emoji: l.emoji }), a],
                        });
                    case "customEmoji":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(J, { emoji: l.emoji }), a],
                        });
                    case "textMention":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(ee, { text: l.name }), a],
                        });
                    case "userMention":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(et, { id: l.userId, channelId: n, guildId: t }), a],
                        });
                    case "roleMention":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(en, { id: l.roleId, guildId: t, channelId: n }), a],
                        });
                    case "channelMention":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(ei, { id: l.channelId }), a],
                        });
                    case "staticRouteLink":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(er, { id: l.id, itemId: l.itemId, guildId: t }), a],
                        });
                    case "soundboard":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(T.LF, { soundId: l.soundId }), a],
                        });
                    case "commandMention":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(ea, { text: l.commandName, id: l.commandId }), a],
                        });
                    case "timestamp":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(es, { timestamp: l.parsed }), a],
                        });
                    case "gameMention":
                        return (0, i.jsxs)(eE, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(el, { id: l.gameId }), a],
                        });
                    default:
                        return null;
                }
            })(e, t, n);
        return null != o ? o : (0, i.jsx)("div", { ...a, children: l });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: r, children: a } = e,
            l =
                n?.(e) ??
                (function (e, t) {
                    let n,
                        { attributes: r, children: a, leaf: l, text: o } = t,
                        d = !1,
                        [c] = p.VW.node(e, p.PW.parent(p.VW.findPath(e, o)));
                    switch (p.VW.isEditor(c) ? "editor" : c.type) {
                        case "line":
                        case "blockQuote": {
                            d = void 0;
                            let e = Object.entries(l)
                                .filter((e) => {
                                    let [t] = e;
                                    return "text" !== t;
                                })
                                .flatMap((e) => {
                                    let [t, n] = e;
                                    if ("hljsTypes" === t) return n;
                                    if (!0 === n) {
                                        if (
                                            (("codeBlockLang" === t || "codeBlockSyntax" === t) && (d = !1),
                                            t.startsWith("before_") || t.startsWith("after_"))
                                        )
                                            return [eo[t]];
                                        if (t in eu) return [eu[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = s()(e, { [eo.syntaxOverride]: "||" === l.text || "\\" === l.text });
                        }
                    }
                    return (
                        (n = s()(n, { [ed.BI]: "" === o.text })),
                        (0, i.jsx)("span", { ...r, className: n, spellCheck: d, children: a })
                    );
                })(t, e);
        return null != l ? l : (0, i.jsx)("span", { ...r, children: a });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = p.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(p.VW.richValue(e)),
            !1 === this.props.canFocus)
        ) {
            let t = l.rL.findDocumentOrShadowRoot(e).getSelection();
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
            n = l.rL.findDocumentOrShadowRoot(t).getSelection(),
            i = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            r = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                (0, c.gm)() &&
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == r && (r = i), null != r)
            ) {
                let n = p.VW.toSlateRange(t, r, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (p.ZF.isExpanded(n)
                        ? h.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
                let n = p.VW.toSlateRange(t, i, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    p.ZF.isExpanded(n) &&
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
        let n = null != e.selection && p.ZF.isCollapsed(e.selection) ? p.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && p.ZF.isCollapsed(e.selection)
                    ? p.VW.above(e, { at: n[1], match: (t) => p.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            p.VW.isEditorEmpty(e))
        ) {
            f.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let i = l.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            r = (i?.rangeCount ?? 0) > 0 ? i?.getRangeAt(0) : null;
        if (null == (null != r ? p.VW.toSlateRange(e, r, { exactMatch: !0, suppressThrow: !0 }) : null) && null != r) {
            let t = p.VW.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? f.b.select(e, t) : f.b.select(e, p.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && p.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = p.AS.leaf(t, e);
            p.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                f.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), p.VW.insertText(t, e);
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
            r = l.rL.findDocumentOrShadowRoot(this.props.editor),
            a = r.getElementById("textarea-context"),
            s = r.getElementById("slate-toolbar");
        if (null != i && !(0, I.hasDomParent)(i, a) && !(0, I.hasDomParent)(i, s)) {
            let e = l.rL.findDocumentOrShadowRoot(t).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        n?.(e);
    }
    isSelectionPartiallyInside(e) {
        let t = this.containerRef.current;
        if (null != e && null != t)
            for (let n = e.rangeCount - 1; n >= 0; n--) {
                let i = e.getRangeAt(n),
                    r = i.startContainer,
                    a = i.endContainer,
                    s = i.startOffset,
                    l = i.endOffset;
                if ((0, I.hasDomParent)(r, t) || (!(0, I.isDOMRangeCollapsed)(r, s, a, l) && (0, I.hasDomParent)(a, t)))
                    return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let t = this.containerRef.current,
            n = !1,
            i = !1;
        if (null != e && null != t)
            for (let r = e.rangeCount - 1; r >= 0; r--) {
                let a = e.getRangeAt(r),
                    s = a.startContainer,
                    l = a.endContainer,
                    o = a.startOffset,
                    d = a.endOffset;
                if ((0, I.hasDomParent)(s, t)) {
                    if (i) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    i = !0;
                }
                if (!(0, I.isDOMRangeCollapsed)(s, o, l, d))
                    if ((0, I.hasDomParent)(s, t)) {
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
            r = e.pageY,
            a = window.innerHeight;
        if (u.isPlatformEmbedded) {
            let s = (0, d.zd)();
            (0, o.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                            n.e("79326"),
                            n.e("58273"),
                            n.e("14591"),
                            n.e("96804"),
                            n.e("30803"),
                            n.e("22401"),
                        ]).then(n.bind(n, 258360)),
                        r = E.Ay.clipboardHasMixedContent();
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            editor: t,
                            text: p.VW.getSelectedText(t, !0),
                            clipboardHasMixedContent: r,
                        });
                },
                {
                    align: null != r && null != a && r < a / 2 ? "top" : "bottom",
                    enableSpellCheck: s === eA.BRT.APP,
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
            canFocus: r,
            autoFocus: a,
            placeholder: o,
            decorate: d,
            channelId: c,
            guildId: u,
            onChange: _,
            onFocus: E,
            onBlur: A,
            onKeyDown: h,
            onKeyUp: I,
            renderExtraElement: f,
            renderExtraLeaf: p,
            ...T
        } = this.props;
        return (0, i.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, i.jsx)("div", {
                          className: s()(eh.q, t),
                          "aria-hidden": !0,
                          "data-slate-placeholder": "true",
                          children: o,
                      })
                    : null,
                (0, i.jsx)(l.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, i.jsx)(l.Fo, {
                        ...T,
                        className: s()(e_.PT, eh.E, t),
                        decorate: d,
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
                        autoCorrect: "off",
                        "data-can-focus": !1 !== r,
                        "aria-label": o,
                        "aria-multiline": !0,
                    }),
                }),
            ],
        });
    }
}
let ef = eI;
