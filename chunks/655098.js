"use strict";
n.d(t, { A: () => ex });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(530795),
    o = n(442433),
    u = n(267102),
    c = n(676279),
    d = n(723702),
    h = n(38405),
    m = n(19575),
    f = n(408018),
    p = n(186306),
    g = n(654821),
    x = n(35277),
    A = n(820066),
    C = n(112107),
    E = n(17928),
    I = n(866665),
    y = n(778712),
    S = n(939249),
    v = n(545442),
    N = n(922016),
    _ = n(565645),
    T = n(730134),
    j = n(775602),
    b = n(47167),
    R = n(442247),
    O = n(569926),
    M = n(106191),
    L = n(545868),
    w = n(376943),
    k = n(465365),
    P = n(78390),
    D = n(785562),
    U = n(332173),
    G = n(37632),
    V = n(593284),
    F = n(967144);
n(209932);
var H = n(734057),
    B = n(317525),
    W = n(994500),
    K = n(351906),
    z = n(287809),
    Z = n(871237),
    Y = n(562153),
    q = n(427262),
    J = n(375708),
    $ = n(307126);
function X(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(I.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(_.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function Q(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(I.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(_.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function ee(e) {
    let { text: t } = e;
    return (0, l.jsx)(U.A, { children: t });
}
function et(e) {
    let { id: t, guildId: n, channelId: i } = e,
        s = (0, E.bG)([z.default], () => z.default.getUser(t)),
        r = (0, E.bG)([K.A], () => K.A.hidePersonalInformation),
        a = Y.Ay.useName(n, i, s),
        o = (0, l.jsx)(U.A, { children: null == a ? `<@${t}>` : `@${a}` });
    if (null != s) {
        let e = r || s.hasUniqueUsername() ? null : `#${s.discriminator}`;
        return (0, l.jsx)(I.m, {
            __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
                className: $.fX,
                children: [
                    (0, l.jsx)(T.A, { user: s, animate: !0, size: y._3.SIZE_16, className: $.my }),
                    q.Ay.getUserTag(s, { mode: "username", identifiable: r ? "never" : "always" }),
                    (0, l.jsx)("span", { className: $.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": q.Ay.getUserTag(s, { decoration: "never" }),
            asContainer: !0,
            children: (0, l.jsx)(S.D, { tag: "span", children: o }),
        });
    }
    return o;
}
function en(e) {
    let { id: t, guildId: n, channelId: s } = e,
        r = (0, E.bG)([B.A], () => (null != n ? B.A.getRole(n, t) : void 0)),
        a = (0, E.bG)([j.Ay], () => j.Ay.roleStyle),
        o = (0, F.X_)(n, r, r?.colorStrings),
        u = i.useRef(null);
    if (null == r) return (0, l.jsxs)("span", { children: ["@", J.intl.string(J.t["YV4F/n"])] });
    let c = null != r.color && 0 !== r.color,
        d = "dot" === a,
        h = "username" === a && c;
    function m(e) {
        return null == r
            ? null
            : (0, l.jsxs)(U.A, {
                  ref: u,
                  color: h ? r.color : null,
                  roleColors: h ? o : null,
                  ...e,
                  children: [
                      d && (0, l.jsx)(v.W, { color: r.colorString, colors: o, background: !1, tooltip: !1 }),
                      "@",
                      r.name,
                  ],
              });
    }
    return null == n || null == s
        ? m()
        : (0, l.jsx)(N.Y, {
              targetElementRef: u,
              preload: async () => {
                  await (0, L.a)(n, t);
              },
              renderPopout: (e) => (0, l.jsx)(V.Y, { guildId: n, channelId: s, roleId: t, popoutProps: e }),
              position: "top",
              children: m,
          });
}
function el(e) {
    let { id: t } = e,
        n = (0, E.bG)([H.A], () => H.A.getChannel(t)),
        i = J.intl.string(J.t.zLZPmk).toLowerCase(),
        s = "text",
        r = !0;
    return (null != n &&
        ((i = (0, w.nc)(n) ? (0, b.m1)(n, z.default, W.A) : J.intl.string(J.t["/YzI63"])),
        (s = (0, w.nc)(n) ? ((0, Z.QG)(n) ?? "text") : "locked"),
        (r = (0, k.Y)(n.type))),
    r)
        ? (0, l.jsx)(U.A, { iconType: s, children: i })
        : (0, l.jsx)("span", { children: "#" + i });
}
function ei(e) {
    let { id: t, itemId: n, guildId: i } = e,
        s = (0, P.Q)(t),
        r = (0, P.f)(t, n, i);
    return (0, l.jsxs)(U.A, { iconType: t, children: [s, null != r && (0, l.jsx)(G.A, {}), r] });
}
function es(e) {
    let { text: t, id: n } = e;
    return (0, l.jsxs)(U.A, { children: [t, "(", n, ")"] });
}
function er(e) {
    let { timestamp: t } = e;
    return (0, l.jsx)(D.A, { node: t, className: "R" === t.format ? $.gS : null });
}
function ea(e) {
    let { id: t } = e,
        n = (0, R.K)(t),
        i = null != n;
    return ((0, O.I)(i ? void 0 : t), i)
        ? (0, l.jsxs)(U.A, {
              children: [(0, l.jsx)(M.A, { game: { id: t, icon: n.gameIcon }, iconClassName: $.Kk }), n.gameName],
          })
        : (0, l.jsxs)("span", { children: ["@", J.intl.string(J.t["11pdXZ"])] });
}
var eo = n(891031),
    eu = n(106972),
    ec = n(881013);
let ed = {
    strong: eo.bold,
    em: eo.italics,
    u: eo.underline,
    s: eo.strikethrough,
    inlineCode: eo.inlineCode,
    link: eo.fakeLink,
    url: eo.fakeLink,
    autolink: eo.fakeLink,
    silentPrefix: eo.silentPrefix,
    spoiler: r()(ec.ur, ec.F0, ec.kx, eo.spoiler),
    staticRouteLink: eo.fakeLink,
    syntaxBefore: eo.syntaxBefore,
    syntaxAfter: eo.syntaxAfter,
    codeBlockText: eo.codeBlockText,
    codeBlockSyntax: eo.codeBlockSyntax,
    codeBlockLang: eo.codeBlockLang,
    subtext: eo.subtext,
};
var eh = n(165648);
function em(e) {
    let { className: t, attributes: n, children: i } = e,
        s = r()(eu.S0, eu.Cj, t);
    return (0, l.jsx)("span", { ...n, className: s, contentEditable: !1, children: i });
}
var ef = n(652215),
    ep = n(809067);
class eg extends i.PureComponent {
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
            A.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, f.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: A.VW.richValue(e.editor), showPlaceholder: !1 });
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
        h.A.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] });
    }
    renderElement(e) {
        let { guildId: t, channelId: n, renderExtraElement: i } = this.props,
            { attributes: s, children: a } = e;
        "rtl" === s.dir && (s.style = { ...s.style, textAlign: "right" });
        let o =
            i?.(e) ??
            (function (e, t, n) {
                let { attributes: i, children: s, element: a, decorations: o } = e,
                    u = Object.entries(o?.[0] ?? {})
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
                switch (a.type) {
                    case "line":
                        if (a.codeBlockState?.isInCodeBlock)
                            return (0, l.jsx)("div", {
                                className: eo.codeLine,
                                spellCheck: null == a.codeBlockState || null == a.codeBlockState.lang,
                                ...i,
                                children: s,
                            });
                        return (0, l.jsx)("div", { ...i, children: s });
                    case "blockQuote": {
                        let e = r()(eh.h, eh.MN);
                        return (0, l.jsxs)("div", {
                            ...i,
                            className: e,
                            children: [
                                (0, l.jsx)("span", { contentEditable: !1, className: eh.r }),
                                (0, l.jsx)("blockquote", { children: s }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(X, { emoji: a.emoji }), s],
                        });
                    case "customEmoji":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(Q, { emoji: a.emoji }), s],
                        });
                    case "textMention":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(ee, { text: a.name }), s],
                        });
                    case "userMention":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(et, { id: a.userId, channelId: n, guildId: t }), s],
                        });
                    case "roleMention":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(en, { id: a.roleId, guildId: t, channelId: n }), s],
                        });
                    case "channelMention":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(el, { id: a.channelId }), s],
                        });
                    case "staticRouteLink":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(ei, { id: a.id, itemId: a.itemId, guildId: t }), s],
                        });
                    case "soundboard":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(C.LF, { soundId: a.soundId }), s],
                        });
                    case "commandMention":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(es, { text: a.commandName, id: a.commandId }), s],
                        });
                    case "timestamp":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(er, { timestamp: a.parsed }), s],
                        });
                    case "gameMention":
                        return (0, l.jsxs)(em, {
                            attributes: i,
                            className: u,
                            children: [(0, l.jsx)(ea, { id: a.gameId }), s],
                        });
                    default:
                        return null;
                }
            })(e, t, n);
        return null != o ? o : (0, l.jsx)("div", { ...s, children: a });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: i, children: s } = e,
            a =
                n?.(e) ??
                (function (e, t) {
                    let n,
                        { attributes: i, children: s, leaf: a, text: o } = t,
                        u = !1,
                        [c] = A.VW.node(e, A.PW.parent(A.VW.findPath(e, o)));
                    switch (A.VW.isEditor(c) ? "editor" : c.type) {
                        case "line":
                        case "blockQuote": {
                            u = void 0;
                            let e = Object.entries(a)
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
                                            return [eo[t]];
                                        if (t in ed) return [ed[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = r()(e, { [eo.syntaxOverride]: "||" === a.text || "\\" === a.text });
                        }
                    }
                    return (
                        (n = r()(n, { [eu.BI]: "" === o.text })),
                        (0, l.jsx)("span", { ...i, className: n, spellCheck: u, children: s })
                    );
                })(t, e);
        return null != a ? a : (0, l.jsx)("span", { ...i, children: s });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = A.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(A.VW.richValue(e)),
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
            l = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            i = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                (0, c.gm)() &&
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == i && (i = l), null != i)
            ) {
                let n = A.VW.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (A.ZF.isExpanded(n)
                        ? p.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != l && !l.collapsed) {
                let n = A.VW.toSlateRange(t, l, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    A.ZF.isExpanded(n) &&
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
        let n = null != e.selection && A.ZF.isCollapsed(e.selection) ? A.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && A.ZF.isCollapsed(e.selection)
                    ? A.VW.above(e, { at: n[1], match: (t) => A.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            A.VW.isEditorEmpty(e))
        ) {
            x.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let l = a.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            i = (l?.rangeCount ?? 0) > 0 ? l?.getRangeAt(0) : null;
        if (null == (null != i ? A.VW.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }) : null) && null != i) {
            let t = A.VW.toSlateRange(e, i, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? x.b.select(e, t) : x.b.select(e, A.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && A.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = A.AS.leaf(t, e);
            A.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                x.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), A.VW.insertText(t, e);
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
            l = e.relatedTarget,
            i = a.rL.findDocumentOrShadowRoot(this.props.editor),
            s = i.getElementById("textarea-context"),
            r = i.getElementById("slate-toolbar");
        if (null != l && !(0, g.hasDomParent)(l, s) && !(0, g.hasDomParent)(l, r)) {
            let e = a.rL.findDocumentOrShadowRoot(t).getSelection();
            null != e && this.isSelectionEscaping(e) && e.removeAllRanges();
        }
        n?.(e);
    }
    isSelectionPartiallyInside(e) {
        let t = this.containerRef.current;
        if (null != e && null != t)
            for (let n = e.rangeCount - 1; n >= 0; n--) {
                let l = e.getRangeAt(n),
                    i = l.startContainer,
                    s = l.endContainer,
                    r = l.startOffset,
                    a = l.endOffset;
                if ((0, g.hasDomParent)(i, t) || (!(0, g.isDOMRangeCollapsed)(i, r, s, a) && (0, g.hasDomParent)(s, t)))
                    return !0;
            }
        return !1;
    }
    isSelectionEscaping(e) {
        let t = this.containerRef.current,
            n = !1,
            l = !1;
        if (null != e && null != t)
            for (let i = e.rangeCount - 1; i >= 0; i--) {
                let s = e.getRangeAt(i),
                    r = s.startContainer,
                    a = s.endContainer,
                    o = s.startOffset,
                    u = s.endOffset;
                if ((0, g.hasDomParent)(r, t)) {
                    if (l) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    l = !0;
                }
                if (!(0, g.isDOMRangeCollapsed)(r, o, a, u))
                    if ((0, g.hasDomParent)(r, t)) {
                        if (l) return !0;
                        n = !0;
                    } else {
                        if (n) return !0;
                        l = !0;
                    }
            }
        return !1;
    }
    handleContextMenu(e) {
        let { editor: t } = this.props,
            i = e.pageY,
            s = window.innerHeight;
        if (d.isPlatformEmbedded) {
            let r = (0, u.zd)();
            (0, o.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([
                            n.e("300867"),
                            n.e("458273"),
                            n.e("414591"),
                            n.e("896804"),
                            n.e("230803"),
                            n.e("722401"),
                        ]).then(n.bind(n, 258360)),
                        i = m.Ay.clipboardHasMixedContent();
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            editor: t,
                            text: A.VW.getSelectedText(t, !0),
                            clipboardHasMixedContent: i,
                        });
                },
                {
                    align: null != i && null != s && i < s / 2 ? "top" : "bottom",
                    enableSpellCheck: r === ef.BRT.APP,
                    repositionOnContentChange: !0,
                },
            );
        } else blur();
    }
    handlePasteCapture(e) {
        let { editor: t, onPaste: n, readOnly: l } = this.props;
        n?.(e),
            e.isDefaultPrevented() ||
                e.isPropagationStopped() ||
                l ||
                (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation());
    }
    render() {
        let {
            editor: e,
            className: t,
            containerClassName: n,
            canFocus: i,
            autoFocus: s,
            placeholder: o,
            decorate: u,
            "aria-multiline": c = !0,
            channelId: d,
            guildId: h,
            onChange: m,
            onFocus: f,
            onBlur: p,
            onKeyDown: g,
            onKeyUp: x,
            renderExtraElement: A,
            renderExtraLeaf: C,
            ...E
        } = this.props;
        return (0, l.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, l.jsx)("div", {
                          className: r()(ep.q, t),
                          "aria-hidden": !0,
                          "data-slate-placeholder": "true",
                          children: o,
                      })
                    : null,
                (0, l.jsx)(a.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, l.jsx)(a.Fo, {
                        ...E,
                        className: r()(eh.PT, ep.E, t),
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
                        "aria-label": o,
                        "aria-multiline": c,
                    }),
                }),
            ],
        });
    }
}
let ex = eg;
