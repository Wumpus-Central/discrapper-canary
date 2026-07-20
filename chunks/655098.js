"use strict";
n.d(t, { A: () => eh });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(253018),
    o = n(442433),
    d = n(267102),
    c = n(723702),
    u = n(38405),
    _ = n(19575),
    E = n(408018),
    A = n(186306),
    h = n(654821),
    I = n(35277),
    f = n(820066),
    p = n(112107),
    T = n(17928),
    m = n(866665),
    g = n(778712),
    S = n(939249),
    N = n(545442),
    C = n(922016),
    O = n(565645),
    R = n(730134),
    L = n(775602),
    y = n(47167),
    D = n(106191),
    v = n(545868),
    b = n(376943),
    M = n(465365),
    P = n(78390),
    U = n(785562),
    w = n(332173),
    G = n(37632),
    x = n(679621),
    k = n(593284),
    F = n(967144);
n(209932);
var V = n(734057),
    B = n(317525),
    H = n(994500),
    j = n(351906),
    W = n(287809),
    Y = n(871237),
    K = n(562153),
    $ = n(427262),
    z = n(375708),
    q = n(178259);
function Z(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(m.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(O.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function X(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(m.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(O.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function Q(e) {
    let { text: t } = e;
    return (0, i.jsx)(w.A, { children: t });
}
function J(e) {
    let { id: t, guildId: n, channelId: r } = e,
        a = (0, T.bG)([W.default], () => W.default.getUser(t)),
        s = (0, T.bG)([j.A], () => j.A.hidePersonalInformation),
        l = K.Ay.useName(n, r, a),
        o = (0, i.jsx)(w.A, { children: null == l ? `<@${t}>` : `@${l}` });
    if (null != a) {
        let e = s || a.hasUniqueUsername() ? null : `#${a.discriminator}`;
        return (0, i.jsx)(m.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: q.fX,
                children: [
                    (0, i.jsx)(R.A, { user: a, animate: !0, size: g._3.SIZE_16, className: q.my }),
                    $.Ay.getUserTag(a, { mode: "username", identifiable: s ? "never" : "always" }),
                    (0, i.jsx)("span", { className: q.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": $.Ay.getUserTag(a, { decoration: "never" }),
            asContainer: !0,
            children: (0, i.jsx)(S.D, { tag: "span", children: o }),
        });
    }
    return o;
}
function ee(e) {
    let { id: t, guildId: n, channelId: a } = e,
        s = (0, T.bG)([B.A], () => (null != n ? B.A.getRole(n, t) : void 0)),
        l = (0, T.bG)([L.Ay], () => L.Ay.roleStyle),
        o = (0, F.X_)(n, s, s?.colorStrings),
        d = r.useRef(null);
    if (null == s) return (0, i.jsxs)("span", { children: ["@", z.intl.string(z.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        u = "dot" === l,
        _ = "username" === l && c;
    function E(e) {
        return null == s
            ? null
            : (0, i.jsxs)(w.A, {
                  ref: d,
                  color: _ ? s.color : null,
                  roleColors: _ ? o : null,
                  ...e,
                  children: [
                      u && (0, i.jsx)(N.W, { color: s.colorString, colors: o, background: !1, tooltip: !1 }),
                      "@",
                      s.name,
                  ],
              });
    }
    return null == n || null == a
        ? E()
        : (0, i.jsx)(C.Y, {
              targetElementRef: d,
              preload: async () => {
                  await (0, v.a)(n, t);
              },
              renderPopout: (e) => (0, i.jsx)(k.Y, { guildId: n, channelId: a, roleId: t, popoutProps: e }),
              position: "top",
              children: E,
          });
}
function et(e) {
    let { id: t } = e,
        n = (0, T.bG)([V.A], () => V.A.getChannel(t)),
        r = z.intl.string(z.t.zLZPmk).toLowerCase(),
        a = "text",
        s = !0;
    return (null != n &&
        ((r = (0, b.nc)(n) ? (0, y.m1)(n, W.default, H.A) : z.intl.string(z.t["/YzI63"])),
        (a = (0, b.nc)(n) ? ((0, Y.QG)(n) ?? "text") : "locked"),
        (s = (0, M.Y)(n.type))),
    s)
        ? (0, i.jsx)(w.A, { iconType: a, children: r })
        : (0, i.jsx)("span", { children: "#" + r });
}
function en(e) {
    let { id: t, itemId: n, guildId: r } = e,
        a = (0, P.Q)(t),
        s = (0, P.f)(t, n, r);
    return (0, i.jsxs)(w.A, { iconType: t, children: [a, null != s && (0, i.jsx)(G.A, {}), s] });
}
function ei(e) {
    let { text: t, id: n } = e;
    return (0, i.jsxs)(w.A, { children: [t, "(", n, ")"] });
}
function er(e) {
    let { timestamp: t } = e;
    return (0, i.jsx)(U.A, { node: t, className: "R" === t.format ? q.gS : null });
}
function ea(e) {
    let { id: t, gameName: n, gameIcon: r } = e,
        { name: a, hasName: s } = (0, x.V)({ gameName: n, gameId: t });
    return s
        ? (0, i.jsxs)(w.A, { children: [(0, i.jsx)(D.A, { game: { id: t, icon: r }, iconClassName: q.Kk }), a] })
        : (0, i.jsxs)("span", { children: ["@", z.intl.string(z.t["11pdXZ"])] });
}
var es = n(571898),
    el = n(494715),
    eo = n(766184);
let ed = {
    strong: es.bold,
    em: es.italics,
    u: es.underline,
    s: es.strikethrough,
    inlineCode: es.inlineCode,
    link: es.fakeLink,
    url: es.fakeLink,
    autolink: es.fakeLink,
    silentPrefix: es.fakeLink,
    spoiler: s()(eo.ur, eo.F0, eo.kx, es.spoiler),
    staticRouteLink: es.fakeLink,
    syntaxBefore: es.syntaxBefore,
    syntaxAfter: es.syntaxAfter,
    codeBlockText: es.codeBlockText,
    codeBlockSyntax: es.codeBlockSyntax,
    codeBlockLang: es.codeBlockLang,
    subtext: es.subtext,
};
var ec = n(992595);
function eu(e) {
    let { className: t, attributes: n, children: r } = e,
        a = s()(el.S0, el.Cj, t);
    return (0, i.jsx)("span", { ...n, className: a, contentEditable: !1, children: r });
}
var e_ = n(652215),
    eE = n(422404);
class eA extends r.PureComponent {
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
            f.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, E.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: f.VW.richValue(e.editor), showPlaceholder: !1 });
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
        u.A.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] });
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
                            return !0 === n && t in ed ? ed[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (l.type) {
                    case "line":
                        if (l.codeBlockState?.isInCodeBlock)
                            return (0, i.jsx)("div", {
                                className: es.codeLine,
                                spellCheck: null == l.codeBlockState || null == l.codeBlockState.lang,
                                ...r,
                                children: a,
                            });
                        return (0, i.jsx)("div", { ...r, children: a });
                    case "blockQuote": {
                        let e = s()(ec.h, ec.MN);
                        return (0, i.jsxs)("div", {
                            ...r,
                            className: e,
                            children: [
                                (0, i.jsx)("span", { contentEditable: !1, className: ec.r }),
                                (0, i.jsx)("blockquote", { children: a }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(Z, { emoji: l.emoji }), a],
                        });
                    case "customEmoji":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(X, { emoji: l.emoji }), a],
                        });
                    case "textMention":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(Q, { text: l.name }), a],
                        });
                    case "userMention":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(J, { id: l.userId, channelId: n, guildId: t }), a],
                        });
                    case "roleMention":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(ee, { id: l.roleId, guildId: t, channelId: n }), a],
                        });
                    case "channelMention":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(et, { id: l.channelId }), a],
                        });
                    case "staticRouteLink":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(en, { id: l.id, itemId: l.itemId, guildId: t }), a],
                        });
                    case "soundboard":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(p.LF, { soundId: l.soundId }), a],
                        });
                    case "commandMention":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(ei, { text: l.commandName, id: l.commandId }), a],
                        });
                    case "timestamp":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(er, { timestamp: l.parsed }), a],
                        });
                    case "gameMention":
                        return (0, i.jsxs)(eu, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(ea, { id: l.gameId, gameName: l.gameName, gameIcon: l.gameIcon }), a],
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
                        [c] = f.VW.node(e, f.PW.parent(f.VW.findPath(e, o)));
                    switch (f.VW.isEditor(c) ? "editor" : c.type) {
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
                                            return [es[t]];
                                        if (t in ed) return [ed[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = s()(e, { [es.syntaxOverride]: "||" === l.text || "\\" === l.text });
                        }
                    }
                    return (
                        (n = s()(n, { [el.BI]: "" === o.text })),
                        (0, i.jsx)("span", { ...r, className: n, spellCheck: d, children: a })
                    );
                })(t, e);
        return null != l ? l : (0, i.jsx)("span", { ...r, children: a });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = f.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(f.VW.richValue(e)),
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
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == r && (r = i), null != r)
            ) {
                let n = f.VW.toSlateRange(t, r, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (f.ZF.isExpanded(n)
                        ? A.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
                let n = f.VW.toSlateRange(t, i, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    f.ZF.isExpanded(n) &&
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
        let n = null != e.selection && f.ZF.isCollapsed(e.selection) ? f.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && f.ZF.isCollapsed(e.selection)
                    ? f.VW.above(e, { at: n[1], match: (t) => f.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            f.VW.isEditorEmpty(e))
        ) {
            I.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let i = l.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            r = (i?.rangeCount ?? 0) > 0 ? i?.getRangeAt(0) : null;
        if (null == (null != r ? f.VW.toSlateRange(e, r, { exactMatch: !0, suppressThrow: !0 }) : null) && null != r) {
            let t = f.VW.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? I.b.select(e, t) : I.b.select(e, f.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && f.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = f.AS.leaf(t, e);
            f.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                I.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), f.VW.insertText(t, e);
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
        if (null != i && !(0, h.hasDomParent)(i, a) && !(0, h.hasDomParent)(i, s)) {
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
                if ((0, h.hasDomParent)(r, t) || (!(0, h.isDOMRangeCollapsed)(r, s, a, l) && (0, h.hasDomParent)(a, t)))
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
                if ((0, h.hasDomParent)(s, t)) {
                    if (i) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    i = !0;
                }
                if (!(0, h.isDOMRangeCollapsed)(s, o, l, d))
                    if ((0, h.hasDomParent)(s, t)) {
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
        if (c.isPlatformEmbedded) {
            let s = (0, d.zd)();
            (0, o.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                            n.e("10310"),
                            n.e("58273"),
                            n.e("14591"),
                            n.e("96804"),
                            n.e("30803"),
                            n.e("22401"),
                        ]).then(n.bind(n, 258360)),
                        r = _.Ay.clipboardHasMixedContent();
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            editor: t,
                            text: f.VW.getSelectedText(t, !0),
                            clipboardHasMixedContent: r,
                        });
                },
                {
                    align: null != r && null != a && r < a / 2 ? "top" : "bottom",
                    enableSpellCheck: s === e_.BRT.APP,
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
                          className: s()(eE.q, t),
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
                        className: s()(ec.PT, eE.E, t),
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
let eh = eA;
