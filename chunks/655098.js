"use strict";
n.d(t, { A: () => ef });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(670482),
    l = n(442433),
    u = n(267102),
    c = n(723702),
    d = n(38405),
    _ = n(408018),
    h = n(186306),
    f = n(654821),
    p = n(35277),
    E = n(820066),
    m = n(112107),
    g = n(17928),
    A = n(990078),
    I = n(778712),
    T = n(939249),
    S = n(545442),
    y = n(922016),
    N = n(565645),
    v = n(730134),
    C = n(775602),
    R = n(47167),
    O = n(545868),
    b = n(376943),
    D = n(465365),
    L = n(78390),
    w = n(785562),
    M = n(973664),
    P = n(332173),
    x = n(37632),
    k = n(679621),
    U = n(593284),
    G = n(967144);
n(209932);
var F = n(734057),
    V = n(317525),
    B = n(994500),
    H = n(351906),
    j = n(287809),
    Y = n(871237),
    W = n(562153),
    K = n(427262),
    $ = n(375708),
    z = n(178259);
function q(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(A.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(N.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function X(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(A.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(N.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function Z(e) {
    let { text: t } = e;
    return (0, i.jsx)(P.A, { children: t });
}
function Q(e) {
    let { id: t, guildId: n, channelId: r } = e,
        s = (0, g.bG)([j.default], () => j.default.getUser(t)),
        a = (0, g.bG)([H.A], () => H.A.hidePersonalInformation),
        o = W.Ay.useName(n, r, s),
        l = (0, i.jsx)(P.A, { children: null == o ? `<@${t}>` : `@${o}` });
    if (null != s) {
        let e = a || s.hasUniqueUsername() ? null : `#${s.discriminator}`;
        return (0, i.jsx)(A.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: z.fX,
                children: [
                    (0, i.jsx)(v.A, { user: s, animate: !0, size: I._3.SIZE_16, className: z.my }),
                    K.Ay.getUserTag(s, { mode: "username", identifiable: a ? "never" : "always" }),
                    (0, i.jsx)("span", { className: z.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": K.Ay.getUserTag(s, { decoration: "never" }),
            asContainer: !0,
            children: (0, i.jsx)(T.D, { tag: "span", children: l }),
        });
    }
    return l;
}
function J(e) {
    let { id: t, guildId: n, channelId: s } = e,
        a = (0, g.bG)([V.A], () => (null != n ? V.A.getRole(n, t) : void 0)),
        o = (0, g.bG)([C.Ay], () => C.Ay.roleStyle),
        l = (0, G.X_)(n, a, a?.colorStrings),
        u = r.useRef(null);
    if (null == a) return (0, i.jsxs)("span", { children: ["@", $.intl.string($.t["YV4F/n"])] });
    let c = null != a.color && 0 !== a.color,
        d = "dot" === o,
        _ = "username" === o && c,
        h = (e) =>
            (0, i.jsxs)(P.A, {
                ref: u,
                color: _ ? a.color : null,
                roleColors: _ ? l : null,
                ...e,
                children: [
                    d && (0, i.jsx)(S.W, { color: a.colorString, colors: l, background: !1, tooltip: !1 }),
                    "@",
                    a.name,
                ],
            });
    return null == n || null == s
        ? h()
        : (0, i.jsx)(y.Y, {
              targetElementRef: u,
              preload: async () => {
                  await (0, O.a)(n, t);
              },
              renderPopout: (e) => (0, i.jsx)(U.Y, { guildId: n, channelId: s, roleId: t, popoutProps: e }),
              position: "top",
              children: h,
          });
}
function ee(e) {
    let { id: t } = e,
        n = (0, g.bG)([F.A], () => F.A.getChannel(t)),
        r = $.intl.string($.t.zLZPmk).toLowerCase(),
        s = "text",
        a = !0;
    return (null != n &&
        ((r = (0, b.nc)(n) ? (0, R.m1)(n, j.default, B.A) : $.intl.string($.t["/YzI63"])),
        (s = (0, b.nc)(n) ? ((0, Y.QG)(n) ?? "text") : "locked"),
        (a = (0, D.Y)(n.type))),
    a)
        ? (0, i.jsx)(P.A, { iconType: s, children: r })
        : (0, i.jsx)("span", { children: "#" + r });
}
function et(e) {
    let { id: t, itemId: n, guildId: r } = e,
        s = (0, L.Q)(t),
        a = (0, L.f)(t, n, r);
    return (0, i.jsxs)(P.A, { iconType: t, children: [s, null != a && (0, i.jsx)(x.A, {}), a] });
}
function en(e) {
    let { text: t, id: n } = e;
    return (0, i.jsxs)(P.A, { children: [t, "(", n, ")"] });
}
function ei(e) {
    let { timestamp: t } = e;
    return (0, i.jsx)(w.A, { node: t, className: "R" === t.format ? z.gS : null });
}
function er(e) {
    let { id: t, gameName: n, gameIconHash: r } = e,
        { name: s, hasName: a } = (0, k.V)({ gameName: n, gameId: t });
    return a
        ? (0, i.jsxs)(P.A, { children: [(0, i.jsx)(M.A, { gameId: t, gameIconHash: r, iconClassName: z.Kk }), s] })
        : (0, i.jsxs)("span", { children: ["@", $.intl.string($.t["11pdXZ"])] });
}
var es = n(571898),
    ea = n(494715),
    eo = n(766184);
let el = {
    strong: es.bold,
    em: es.italics,
    u: es.underline,
    s: es.strikethrough,
    inlineCode: es.inlineCode,
    link: es.fakeLink,
    url: es.fakeLink,
    autolink: es.fakeLink,
    silentPrefix: es.fakeLink,
    spoiler: a()(eo.ur, eo.F0, eo.kx, es.spoiler),
    staticRouteLink: es.fakeLink,
    syntaxBefore: es.syntaxBefore,
    syntaxAfter: es.syntaxAfter,
    codeBlockText: es.codeBlockText,
    codeBlockSyntax: es.codeBlockSyntax,
    codeBlockLang: es.codeBlockLang,
    subtext: es.subtext,
};
var eu = n(992595);
let ec = (e) => {
    let { className: t, attributes: n, children: r } = e,
        s = a()(ea.S0, ea.Cj, t);
    return (0, i.jsx)("span", { ...n, className: s, contentEditable: !1, children: r });
};
var ed = n(652215),
    e_ = n(422404);
class eh extends r.PureComponent {
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
            E.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, _.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: E.VW.richValue(e.editor), showPlaceholder: !1 });
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
        let { guildId: t, channelId: n, renderExtraElement: r } = this.props,
            { attributes: s, children: o } = e;
        "rtl" === s.dir && (s.style = { ...s.style, textAlign: "right" });
        let l =
            r?.(e) ??
            (function (e, t, n) {
                let { attributes: r, children: s, element: o, decorations: l } = e,
                    u = Object.entries(l?.[0] ?? {})
                        .filter((e) => {
                            let [t] = e;
                            return "anchor" !== t && "focus" !== t;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return !0 === n && t in el ? el[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (o.type) {
                    case "line":
                        if (o.codeBlockState?.isInCodeBlock)
                            return (0, i.jsx)("div", {
                                className: es.codeLine,
                                spellCheck: null == o.codeBlockState || null == o.codeBlockState.lang,
                                ...r,
                                children: s,
                            });
                        return (0, i.jsx)("div", { ...r, children: s });
                    case "blockQuote": {
                        let e = a()(eu.h, eu.MN);
                        return (0, i.jsxs)("div", {
                            ...r,
                            className: e,
                            children: [
                                (0, i.jsx)("span", { contentEditable: !1, className: eu.r }),
                                (0, i.jsx)("blockquote", { children: s }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(q, { emoji: o.emoji }), s],
                        });
                    case "customEmoji":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(X, { emoji: o.emoji }), s],
                        });
                    case "textMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(Z, { text: o.name }), s],
                        });
                    case "userMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(Q, { id: o.userId, channelId: n, guildId: t }), s],
                        });
                    case "roleMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(J, { id: o.roleId, guildId: t, channelId: n }), s],
                        });
                    case "channelMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(ee, { id: o.channelId }), s],
                        });
                    case "staticRouteLink":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(et, { id: o.id, itemId: o.itemId, guildId: t }), s],
                        });
                    case "soundboard":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(m.LF, { soundId: o.soundId }), s],
                        });
                    case "commandMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(en, { text: o.commandName, id: o.commandId }), s],
                        });
                    case "timestamp":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(ei, { timestamp: o.parsed }), s],
                        });
                    case "gameMention":
                        return (0, i.jsxs)(ec, {
                            attributes: r,
                            className: u,
                            children: [
                                (0, i.jsx)(er, { id: o.gameId, gameName: o.gameName, gameIconHash: o.gameIconHash }),
                                s,
                            ],
                        });
                    default:
                        return null;
                }
            })(e, t, n);
        return null != l ? l : (0, i.jsx)("div", { ...s, children: o });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: r, children: s } = e,
            o =
                n?.(e) ??
                (function (e, t) {
                    let n,
                        { attributes: r, children: s, leaf: o, text: l } = t,
                        u = !1,
                        [c] = E.VW.node(e, E.PW.parent(E.VW.findPath(e, l)));
                    switch (E.VW.isEditor(c) ? "editor" : c.type) {
                        case "line":
                        case "blockQuote": {
                            u = void 0;
                            let e = Object.entries(o)
                                .filter((e) => {
                                    let [t] = e;
                                    return "text" !== t;
                                })
                                .flatMap((e) => {
                                    let [t, n] = e;
                                    if ("hljsTypes" === t) return n;
                                    if (!0 === n) {
                                        if (
                                            (("codeBlockLang" === t || "codeBlockSyntax" === t) && (u = !1),
                                            t.startsWith("before_") || t.startsWith("after_"))
                                        )
                                            return [es[t]];
                                        if (t in el) return [el[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = a()(e, { [es.syntaxOverride]: "||" === o.text || "\\" === o.text });
                        }
                    }
                    return (
                        (n = a()(n, { [ea.BI]: "" === l.text })),
                        (0, i.jsx)("span", { ...r, className: n, spellCheck: u, children: s })
                    );
                })(t, e);
        return null != o ? o : (0, i.jsx)("span", { ...r, children: s });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = E.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(E.VW.richValue(e)),
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
            i = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            r = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == r && (r = i), null != r)
            ) {
                let n = E.VW.toSlateRange(t, r, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (E.ZF.isExpanded(n)
                        ? h.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
                let n = E.VW.toSlateRange(t, i, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    E.ZF.isExpanded(n) &&
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
        let n = null != e.selection && E.ZF.isCollapsed(e.selection) ? E.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && E.ZF.isCollapsed(e.selection)
                    ? E.VW.above(e, { at: n[1], match: (t) => E.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            E.VW.isEditorEmpty(e))
        ) {
            p.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let i = o.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            r = (i?.rangeCount ?? 0) > 0 ? i?.getRangeAt(0) : null;
        if (null == (null != r ? E.VW.toSlateRange(e, r, { exactMatch: !0, suppressThrow: !0 }) : null) && null != r) {
            let t = E.VW.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? p.b.select(e, t) : p.b.select(e, E.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && E.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = E.AS.leaf(t, e);
            E.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                p.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), E.VW.insertText(t, e);
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
            r = o.rL.findDocumentOrShadowRoot(this.props.editor),
            s = r.getElementById("textarea-context"),
            a = r.getElementById("slate-toolbar");
        if (null != i && !(0, f.hasDomParent)(i, s) && !(0, f.hasDomParent)(i, a)) {
            let e = o.rL.findDocumentOrShadowRoot(t).getSelection();
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
                    s = i.endContainer,
                    a = i.startOffset,
                    o = i.endOffset;
                if ((0, f.hasDomParent)(r, t) || (!(0, f.isDOMRangeCollapsed)(r, a, s, o) && (0, f.hasDomParent)(s, t)))
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
                let s = e.getRangeAt(r),
                    a = s.startContainer,
                    o = s.endContainer,
                    l = s.startOffset,
                    u = s.endOffset;
                if ((0, f.hasDomParent)(a, t)) {
                    if (i) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    i = !0;
                }
                if (!(0, f.isDOMRangeCollapsed)(a, l, o, u))
                    if ((0, f.hasDomParent)(a, t)) {
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
            s = window.innerHeight;
        if (c.isPlatformEmbedded) {
            let a = (0, u.zd)();
            (0, l.L3)(
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
                    return (n) => (0, i.jsx)(e, { ...n, editor: t, text: E.VW.getSelectedText(t, !0) });
                },
                {
                    align: null != r && null != s && r < s / 2 ? "top" : "bottom",
                    enableSpellCheck: a === ed.BRT.APP,
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
            autoFocus: s,
            placeholder: l,
            decorate: u,
            channelId: c,
            guildId: d,
            onChange: _,
            onFocus: h,
            onBlur: f,
            onKeyDown: p,
            onKeyUp: E,
            renderExtraElement: m,
            renderExtraLeaf: g,
            ...A
        } = this.props;
        return (0, i.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, i.jsx)("div", {
                          className: a()(e_.q, t),
                          "aria-hidden": !0,
                          "data-slate-placeholder": "true",
                          children: l,
                      })
                    : null,
                (0, i.jsx)(o.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, i.jsx)(o.Fo, {
                        ...A,
                        className: a()(eu.PT, e_.E, t),
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
                        autoFocus: s && !1 !== r,
                        autoCorrect: "off",
                        "data-can-focus": !1 !== r,
                        "aria-label": l,
                        "aria-multiline": !0,
                    }),
                }),
            ],
        });
    }
}
let ef = eh;
