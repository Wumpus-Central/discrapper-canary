"use strict";
n.d(t, { A: () => eA });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(253018),
    o = n(442433),
    d = n(267102),
    c = n(723702),
    u = n(38405),
    _ = n(408018),
    E = n(186306),
    A = n(654821),
    h = n(35277),
    I = n(820066),
    f = n(112107),
    p = n(17928),
    T = n(866665),
    m = n(778712),
    g = n(939249),
    S = n(545442),
    N = n(922016),
    C = n(565645),
    O = n(730134),
    R = n(775602),
    L = n(47167),
    y = n(106191),
    D = n(545868),
    v = n(376943),
    b = n(465365),
    M = n(78390),
    P = n(785562),
    U = n(332173),
    w = n(37632),
    G = n(679621),
    x = n(593284),
    k = n(967144);
n(209932);
var F = n(734057),
    V = n(317525),
    B = n(994500),
    H = n(351906),
    j = n(287809),
    W = n(871237),
    Y = n(562153),
    K = n(427262),
    $ = n(375708),
    z = n(178259);
function q(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(T.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(C.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function Z(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(T.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(C.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function X(e) {
    let { text: t } = e;
    return (0, i.jsx)(U.A, { children: t });
}
function Q(e) {
    let { id: t, guildId: n, channelId: r } = e,
        a = (0, p.bG)([j.default], () => j.default.getUser(t)),
        s = (0, p.bG)([H.A], () => H.A.hidePersonalInformation),
        l = Y.Ay.useName(n, r, a),
        o = (0, i.jsx)(U.A, { children: null == l ? `<@${t}>` : `@${l}` });
    if (null != a) {
        let e = s || a.hasUniqueUsername() ? null : `#${a.discriminator}`;
        return (0, i.jsx)(T.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: z.fX,
                children: [
                    (0, i.jsx)(O.A, { user: a, animate: !0, size: m._3.SIZE_16, className: z.my }),
                    K.Ay.getUserTag(a, { mode: "username", identifiable: s ? "never" : "always" }),
                    (0, i.jsx)("span", { className: z.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": K.Ay.getUserTag(a, { decoration: "never" }),
            asContainer: !0,
            children: (0, i.jsx)(g.D, { tag: "span", children: o }),
        });
    }
    return o;
}
function J(e) {
    let { id: t, guildId: n, channelId: a } = e,
        s = (0, p.bG)([V.A], () => (null != n ? V.A.getRole(n, t) : void 0)),
        l = (0, p.bG)([R.Ay], () => R.Ay.roleStyle),
        o = (0, k.X_)(n, s, s?.colorStrings),
        d = r.useRef(null);
    if (null == s) return (0, i.jsxs)("span", { children: ["@", $.intl.string($.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        u = "dot" === l,
        _ = "username" === l && c;
    function E(e) {
        return null == s
            ? null
            : (0, i.jsxs)(U.A, {
                  ref: d,
                  color: _ ? s.color : null,
                  roleColors: _ ? o : null,
                  ...e,
                  children: [
                      u && (0, i.jsx)(S.W, { color: s.colorString, colors: o, background: !1, tooltip: !1 }),
                      "@",
                      s.name,
                  ],
              });
    }
    return null == n || null == a
        ? E()
        : (0, i.jsx)(N.Y, {
              targetElementRef: d,
              preload: async () => {
                  await (0, D.a)(n, t);
              },
              renderPopout: (e) => (0, i.jsx)(x.Y, { guildId: n, channelId: a, roleId: t, popoutProps: e }),
              position: "top",
              children: E,
          });
}
function ee(e) {
    let { id: t } = e,
        n = (0, p.bG)([F.A], () => F.A.getChannel(t)),
        r = $.intl.string($.t.zLZPmk).toLowerCase(),
        a = "text",
        s = !0;
    return (null != n &&
        ((r = (0, v.nc)(n) ? (0, L.m1)(n, j.default, B.A) : $.intl.string($.t["/YzI63"])),
        (a = (0, v.nc)(n) ? ((0, W.QG)(n) ?? "text") : "locked"),
        (s = (0, b.Y)(n.type))),
    s)
        ? (0, i.jsx)(U.A, { iconType: a, children: r })
        : (0, i.jsx)("span", { children: "#" + r });
}
function et(e) {
    let { id: t, itemId: n, guildId: r } = e,
        a = (0, M.Q)(t),
        s = (0, M.f)(t, n, r);
    return (0, i.jsxs)(U.A, { iconType: t, children: [a, null != s && (0, i.jsx)(w.A, {}), s] });
}
function en(e) {
    let { text: t, id: n } = e;
    return (0, i.jsxs)(U.A, { children: [t, "(", n, ")"] });
}
function ei(e) {
    let { timestamp: t } = e;
    return (0, i.jsx)(P.A, { node: t, className: "R" === t.format ? z.gS : null });
}
function er(e) {
    let { id: t, gameName: n, gameIcon: r } = e,
        { name: a, hasName: s } = (0, G.V)({ gameName: n, gameId: t });
    return s
        ? (0, i.jsxs)(U.A, { children: [(0, i.jsx)(y.A, { game: { id: t, icon: r }, iconClassName: z.Kk }), a] })
        : (0, i.jsxs)("span", { children: ["@", $.intl.string($.t["11pdXZ"])] });
}
var ea = n(571898),
    es = n(494715),
    el = n(766184);
let eo = {
    strong: ea.bold,
    em: ea.italics,
    u: ea.underline,
    s: ea.strikethrough,
    inlineCode: ea.inlineCode,
    link: ea.fakeLink,
    url: ea.fakeLink,
    autolink: ea.fakeLink,
    silentPrefix: ea.fakeLink,
    spoiler: s()(el.ur, el.F0, el.kx, ea.spoiler),
    staticRouteLink: ea.fakeLink,
    syntaxBefore: ea.syntaxBefore,
    syntaxAfter: ea.syntaxAfter,
    codeBlockText: ea.codeBlockText,
    codeBlockSyntax: ea.codeBlockSyntax,
    codeBlockLang: ea.codeBlockLang,
    subtext: ea.subtext,
};
var ed = n(992595);
function ec(e) {
    let { className: t, attributes: n, children: r } = e,
        a = s()(es.S0, es.Cj, t);
    return (0, i.jsx)("span", { ...n, className: a, contentEditable: !1, children: r });
}
var eu = n(652215),
    e_ = n(422404);
class eE extends r.PureComponent {
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
            I.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, _.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: I.VW.richValue(e.editor), showPlaceholder: !1 });
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
                            return !0 === n && t in eo ? eo[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (l.type) {
                    case "line":
                        if (l.codeBlockState?.isInCodeBlock)
                            return (0, i.jsx)("div", {
                                className: ea.codeLine,
                                spellCheck: null == l.codeBlockState || null == l.codeBlockState.lang,
                                ...r,
                                children: a,
                            });
                        return (0, i.jsx)("div", { ...r, children: a });
                    case "blockQuote": {
                        let e = s()(ed.h, ed.MN);
                        return (0, i.jsxs)("div", {
                            ...r,
                            className: e,
                            children: [
                                (0, i.jsx)("span", { contentEditable: !1, className: ed.r }),
                                (0, i.jsx)("blockquote", { children: a }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(q, { emoji: l.emoji }), a],
                        });
                    case "customEmoji":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(Z, { emoji: l.emoji }), a],
                        });
                    case "textMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(X, { text: l.name }), a],
                        });
                    case "userMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(Q, { id: l.userId, channelId: n, guildId: t }), a],
                        });
                    case "roleMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(J, { id: l.roleId, guildId: t, channelId: n }), a],
                        });
                    case "channelMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(ee, { id: l.channelId }), a],
                        });
                    case "staticRouteLink":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(et, { id: l.id, itemId: l.itemId, guildId: t }), a],
                        });
                    case "soundboard":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(f.LF, { soundId: l.soundId }), a],
                        });
                    case "commandMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(en, { text: l.commandName, id: l.commandId }), a],
                        });
                    case "timestamp":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(ei, { timestamp: l.parsed }), a],
                        });
                    case "gameMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: d,
                            children: [(0, i.jsx)(er, { id: l.gameId, gameName: l.gameName, gameIcon: l.gameIcon }), a],
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
                        [c] = I.VW.node(e, I.PW.parent(I.VW.findPath(e, o)));
                    switch (I.VW.isEditor(c) ? "editor" : c.type) {
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
                                            return [ea[t]];
                                        if (t in eo) return [eo[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = s()(e, { [ea.syntaxOverride]: "||" === l.text || "\\" === l.text });
                        }
                    }
                    return (
                        (n = s()(n, { [es.BI]: "" === o.text })),
                        (0, i.jsx)("span", { ...r, className: n, spellCheck: d, children: a })
                    );
                })(t, e);
        return null != l ? l : (0, i.jsx)("span", { ...r, children: a });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = I.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(I.VW.richValue(e)),
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
                let n = I.VW.toSlateRange(t, r, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (I.ZF.isExpanded(n)
                        ? E.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
                let n = I.VW.toSlateRange(t, i, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    I.ZF.isExpanded(n) &&
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
        let n = null != e.selection && I.ZF.isCollapsed(e.selection) ? I.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && I.ZF.isCollapsed(e.selection)
                    ? I.VW.above(e, { at: n[1], match: (t) => I.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            I.VW.isEditorEmpty(e))
        ) {
            h.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let i = l.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            r = (i?.rangeCount ?? 0) > 0 ? i?.getRangeAt(0) : null;
        if (null == (null != r ? I.VW.toSlateRange(e, r, { exactMatch: !0, suppressThrow: !0 }) : null) && null != r) {
            let t = I.VW.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? h.b.select(e, t) : h.b.select(e, I.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && I.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = I.AS.leaf(t, e);
            I.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                h.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), I.VW.insertText(t, e);
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
        if (null != i && !(0, A.hasDomParent)(i, a) && !(0, A.hasDomParent)(i, s)) {
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
                if ((0, A.hasDomParent)(r, t) || (!(0, A.isDOMRangeCollapsed)(r, s, a, l) && (0, A.hasDomParent)(a, t)))
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
                if ((0, A.hasDomParent)(s, t)) {
                    if (i) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    i = !0;
                }
                if (!(0, A.isDOMRangeCollapsed)(s, o, l, d))
                    if ((0, A.hasDomParent)(s, t)) {
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
                    ]).then(n.bind(n, 258360));
                    return (n) => (0, i.jsx)(e, { ...n, editor: t, text: I.VW.getSelectedText(t, !0) });
                },
                {
                    align: null != r && null != a && r < a / 2 ? "top" : "bottom",
                    enableSpellCheck: s === eu.BRT.APP,
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
                          className: s()(e_.q, t),
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
                        className: s()(ed.PT, e_.E, t),
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
let eA = eE;
