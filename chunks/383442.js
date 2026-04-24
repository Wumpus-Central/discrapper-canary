"use strict";
n.d(t, { A: () => tY }), n(321073), n(323874), n(14289), n(35956);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(607399),
    u = n(465532),
    d = n(608299),
    h = n(23658),
    m = n(155718),
    p = n(565150),
    f = n(861382),
    g = n(626584),
    _ = n(522602),
    x = n(234320),
    C = n(453771),
    A = n(741394),
    E = n(355622),
    I = n(408018),
    v = n(579940),
    y = n(734057),
    b = n(222823),
    S = n(531685),
    N = n(365971);
function j(e) {
    let t = b.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (y.A.getChannel(t) ?? null);
}
var T = n(826745),
    w = n(442433),
    R = n(721768),
    L = n(723702),
    k = n(677134),
    M = n(652215),
    O = n(650583);
let P = /(\t|\s)/;
class D extends i.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
        this.props.disableAutoFocus ||
            (Promise.resolve().then(() => {
                let { value: e } = this.props;
                this._ref?.setSelection(e.length, e.length);
            }),
            this.focus()),
            null != f.A.getActiveCommand(this.props.channel.id) &&
                R.Gf({ channelId: this.props.channel.id, command: null, section: null });
    }
    componentDidUpdate(e, t) {
        this.state.nextSelection !== t.nextSelection &&
            null != this._ref &&
            this._ref.setSelection(this.state.nextSelection, this.state.nextSelection);
    }
    getCurrentWord() {
        let e = this._ref;
        if (null == e) return { word: null, fullWord: null, isAtStart: !1 };
        let { value: t } = this.props;
        if (0 === t.trim().length) return { word: null, fullWord: null, isAtStart: !1 };
        let n = e.selectionStart,
            l = e.selectionEnd;
        for (; n > 0 && !P.test(t[n - 1]); ) n--;
        let i = e.selectionEnd;
        for (; i < t.length && !P.test(t[i]); ) i++;
        return { word: t.slice(n, l), fullWord: t.slice(n, i), isAtStart: 0 === n };
    }
    focus = () => {
        let { _ref: e } = this;
        null != e && e.focus();
    };
    blur() {
        let { _ref: e } = this;
        null != e && e.blur();
    }
    submit(e) {
        return e?.preventDefault(), this.props.onSubmit(this.props.value);
    }
    insertAutocomplete(e, t) {
        let { addSpace: n = !0, replaceFullWord: l = !1 } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { word: i, fullWord: s } = this.getCurrentWord();
        if (null == i) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let a = t.value.slice(0, t.selectionStart - i.length),
                r = l && null != s ? s.length - i.length : 0,
                o = t.value.slice(t.selectionEnd + r);
            this._insertText(e, a, o, n);
        }
    }
    insertInlineAutocompleteInput(e) {}
    replaceInlineAutocompleteInput(e, t, n) {}
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = this._ref;
        if (null == l) return;
        let i = l.value.slice(0, l.selectionStart),
            s = l.value.slice(l.selectionEnd);
        this._insertText(e, i, s, n);
    }
    _insertText(e, t, n, l) {
        if (null == this._ref) return;
        l && (e += " ");
        let i = t + e + n,
            { onChange: s } = this.props;
        s?.(null, i, (0, I.x7)(i));
        let a = t.length + e.length;
        this.setState({ nextSelection: a }, () => {
            this.props.maybeShowAutocomplete();
        });
    }
    hasOpenCodeBlock() {
        let e = this._ref;
        if (null == e) return !1;
        let t = this.props.value.slice(0, e.selectionStart).match(/```/g);
        return null != t && t.length > 0 && t.length % 2 != 0;
    }
    render() {
        let {
            value: e,
            disabled: t,
            placeholder: n,
            required: i,
            onResize: s,
            className: r,
            id: o,
            submitting: c,
            textAreaPaddingClassName: u,
            spellcheckEnabled: d,
            "aria-controls": h,
            "aria-expanded": m,
            "aria-activedescendant": p,
        } = this.props;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(x.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, l.jsx)(T.y, {
                    ref: this.handleSetRef,
                    className: a()(r, u),
                    id: o,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || c,
                    required: i,
                    onChange: this.handleOnChange,
                    onResize: s,
                    onKeyPress: this.handleKeyPress,
                    onKeyDown: this.handleKeyDown,
                    onKeyUp: this.handleKeyUp,
                    onFocus: this.props.onFocus,
                    onBlur: this.props.onBlur,
                    onPaste: this.handlePaste,
                    onClick: this.handleClick,
                    onContextMenu: this.handleContextMenu,
                    value: t ? "" : e,
                    tabIndex: 0,
                    spellCheck: d,
                    "aria-controls": h,
                    "aria-expanded": m,
                    "aria-activedescendant": p,
                    "aria-haspopup": "listbox",
                    "aria-autocomplete": "list",
                    "aria-multiline": !0,
                }),
            ],
        });
    }
    handleSetRef = (e) => {
        this._ref = e;
    };
    handleKeyPress = (e) => {
        if (
            e.key === O.dh.ENTER &&
            !e.shiftKey &&
            !this.hasOpenCodeBlock() &&
            (!this.props.disableEnterToSubmit || e.ctrlKey)
        )
            return e.preventDefault(), this.props.onSubmit(this.props.value);
    };
    handleKeyDown = (e) => {
        switch (e.which) {
            case M.Ks6.ARROW_DOWN:
                this.props.moveSelection(1) && e.preventDefault();
                break;
            case M.Ks6.N:
                e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                break;
            case M.Ks6.ARROW_UP:
                this.props.moveSelection(-1) && e.preventDefault();
                break;
            case M.Ks6.P:
                e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                break;
            case M.Ks6.TAB:
            case M.Ks6.ENTER:
                this.handleTabOrEnterDown(e);
        }
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
    handleTabOrEnterDown(e) {
        (e.key === O.dh.TAB && this.props.onTab()) || (e.key === O.dh.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.key === O.dh.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.key === O.dh.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.key) {
            case O.dh.ARROW_RIGHT:
            case O.dh.ARROW_LEFT:
            case O.dh.HOME:
            case O.dh.END:
                this.props.maybeShowAutocomplete();
        }
        let { onKeyUp: t } = this.props;
        t?.(e);
    };
    handleGlobalPaste = (e) => {
        let { event: t } = e;
        this.handlePaste(t) || this.focus();
    };
    handlePaste = (e) => {
        let t = this.props.onPaste(e);
        return t && e.preventDefault(), t;
    };
    handleClick = () => {
        this.props.maybeShowAutocomplete();
    };
    handleContextMenu = (e) => {
        L.isPlatformEmbedded &&
            (0, w.L3)(
                e,
                async () => {
                    let { default: e } = await n.e("42312").then(n.bind(n, 216603));
                    return (t) => (0, l.jsx)(e, { ...t, text: (0, k.u)() });
                },
                { align: "bottom", enableSpellCheck: !0 },
            );
    };
    handleOnChange = (e) => {
        let { onChange: t, allowNewLines: n } = this.props,
            l = e.currentTarget.value,
            i = n ? l : l.replace("\n", "");
        t?.(e, i, (0, I.x7)(i));
    };
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText(`:${t.name}:`, void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
}
var U = n(58149),
    V = n(625494),
    G = n(317681),
    F = n(186306),
    B = n(670482),
    H = n(267102),
    W = n(38405),
    K = n(654821),
    z = n(35277),
    Z = n(820066),
    q = n(112107),
    J = n(17928),
    Y = n(990078),
    X = n(778712),
    $ = n(939249),
    Q = n(545442),
    ee = n(565645),
    et = n(730134),
    en = n(775602),
    el = n(47167),
    ei = n(376943),
    es = n(465365),
    ea = n(78390),
    er = n(785562),
    eo = n(332173),
    ec = n(37632),
    eu = n(967144);
n(209932);
var ed = n(317525),
    eh = n(994500),
    em = n(351906),
    ep = n(287809),
    ef = n(147036),
    eg = n(562153),
    e_ = n(427262),
    ex = n(985018),
    eC = n(178259);
function eA(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(Y.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(ee.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function eE(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(Y.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(ee.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function eI(e) {
    let { text: t } = e;
    return (0, l.jsx)(eo.A, { children: t });
}
function ev(e) {
    let { id: t, guildId: n, channelId: i } = e,
        s = (0, J.bG)([ep.default], () => ep.default.getUser(t)),
        a = (0, J.bG)([em.A], () => em.A.hidePersonalInformation),
        r = eg.Ay.useName(n, i, s),
        o = (0, l.jsx)(eo.A, { children: null == r ? `<@${t}>` : `@${r}` });
    if (null != s) {
        let e = a || s.hasUniqueUsername() ? null : `#${s.discriminator}`;
        return (0, l.jsx)(Y.m, {
            __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
                className: eC.fX,
                children: [
                    (0, l.jsx)(et.A, { user: s, animate: !0, size: X._3.SIZE_16, className: eC.my }),
                    e_.Ay.getUserTag(s, { mode: "username", identifiable: a ? "never" : "always" }),
                    (0, l.jsx)("span", { className: eC.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": e_.Ay.getUserTag(s, { decoration: "never" }),
            asContainer: !0,
            children: (0, l.jsx)($.D, { tag: "span", children: o }),
        });
    }
    return o;
}
function ey(e) {
    let { id: t, guildId: n } = e,
        i = (0, J.bG)([ed.A], () => (null != n ? ed.A.getRole(n, t) : void 0)),
        s = (0, J.bG)([en.A], () => en.A.roleStyle),
        a = (0, eu.X_)(n, i, i?.colorStrings);
    if (null == i) return (0, l.jsxs)("span", { children: ["@", ex.intl.string(ex.t["YV4F/n"])] });
    let r = null != i.color && 0 !== i.color,
        o = "username" === s && r;
    return (0, l.jsxs)(eo.A, {
        color: o ? i.color : null,
        roleColors: o ? a : null,
        children: [
            "dot" === s && (0, l.jsx)(Q.W, { color: i.colorString, colors: a, background: !1, tooltip: !1 }),
            "@",
            i.name,
        ],
    });
}
function eb(e) {
    let { id: t } = e,
        n = (0, J.bG)([y.A], () => y.A.getChannel(t)),
        i = ex.intl.string(ex.t.zLZPmk).toLowerCase(),
        s = "text",
        a = !0;
    return (null != n &&
        ((i = (0, ei.nc)(n) ? (0, el.m1)(n, ep.default, eh.A) : ex.intl.string(ex.t["/YzI63"])),
        (s = (0, ei.nc)(n) ? ((0, ef.QG)(n) ?? "text") : "locked"),
        (a = (0, es.Y)(n.type))),
    a)
        ? (0, l.jsx)(eo.A, { iconType: s, children: i })
        : (0, l.jsx)("span", { children: "#" + i });
}
function eS(e) {
    let { id: t, itemId: n, guildId: i } = e,
        s = (0, ea.Q)(t),
        a = (0, ea.f)(t, n, i);
    return (0, l.jsxs)(eo.A, { iconType: t, children: [s, null != a && (0, l.jsx)(ec.A, {}), a] });
}
function eN(e) {
    let { text: t, id: n } = e;
    return (0, l.jsxs)(eo.A, { children: [t, "(", n, ")"] });
}
function ej(e) {
    let { timestamp: t } = e;
    return (0, l.jsx)(er.A, { node: t, className: "R" === t.format ? eC.gS : null });
}
var eT = n(571898),
    ew = n(494715),
    eR = n(766184);
let eL = {
    strong: eT.bold,
    em: eT.italics,
    u: eT.underline,
    s: eT.strikethrough,
    inlineCode: eT.inlineCode,
    link: eT.fakeLink,
    url: eT.fakeLink,
    autolink: eT.fakeLink,
    silentPrefix: eT.fakeLink,
    spoiler: a()(eR.ur, eR.F0, eR.kx, eT.spoiler),
    staticRouteLink: eT.fakeLink,
    syntaxBefore: eT.syntaxBefore,
    syntaxAfter: eT.syntaxAfter,
    codeBlockText: eT.codeBlockText,
    codeBlockSyntax: eT.codeBlockSyntax,
    codeBlockLang: eT.codeBlockLang,
    subtext: eT.subtext,
};
var ek = n(992595);
let eM = (e) => {
    let { className: t, attributes: n, children: i } = e,
        s = a()(ew.S0, ew.Cj, t);
    return (0, l.jsx)("span", { ...n, className: s, contentEditable: !1, children: i });
};
var eO = n(422404);
class eP extends i.PureComponent {
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
            Z.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, I.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: Z.VW.richValue(e.editor), showPlaceholder: !1 });
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
        W.A.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] });
    }
    renderElement(e) {
        let { guildId: t, channelId: n, renderExtraElement: i } = this.props,
            { attributes: s, children: r } = e;
        "rtl" === s.dir && (s.style = { ...s.style, textAlign: "right" });
        let o =
            i?.(e) ??
            (function (e, t, n) {
                let { attributes: i, children: s, element: r, decorations: o } = e,
                    c = Object.entries(o?.[0] ?? {})
                        .filter((e) => {
                            let [t] = e;
                            return "anchor" !== t && "focus" !== t;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return !0 === n && t in eL ? eL[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (r.type) {
                    case "line":
                        if (r.codeBlockState?.isInCodeBlock)
                            return (0, l.jsx)("div", {
                                className: eT.codeLine,
                                spellCheck: null == r.codeBlockState || null == r.codeBlockState.lang,
                                ...i,
                                children: s,
                            });
                        return (0, l.jsx)("div", { ...i, children: s });
                    case "blockQuote": {
                        let e = a()(ek.h, ek.MN);
                        return (0, l.jsxs)("div", {
                            ...i,
                            className: e,
                            children: [
                                (0, l.jsx)("span", { contentEditable: !1, className: ek.r }),
                                (0, l.jsx)("blockquote", { children: s }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(eA, { emoji: r.emoji }), s],
                        });
                    case "customEmoji":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(eE, { emoji: r.emoji }), s],
                        });
                    case "textMention":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(eI, { text: r.name }), s],
                        });
                    case "userMention":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(ev, { id: r.userId, channelId: n, guildId: t }), s],
                        });
                    case "roleMention":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(ey, { id: r.roleId, guildId: t }), s],
                        });
                    case "channelMention":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(eb, { id: r.channelId }), s],
                        });
                    case "staticRouteLink":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(eS, { id: r.id, itemId: r.itemId, guildId: t }), s],
                        });
                    case "soundboard":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(q.LF, { soundId: r.soundId }), s],
                        });
                    case "commandMention":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(eN, { text: r.commandName, id: r.commandId }), s],
                        });
                    case "timestamp":
                        return (0, l.jsxs)(eM, {
                            attributes: i,
                            className: c,
                            children: [(0, l.jsx)(ej, { timestamp: r.parsed }), s],
                        });
                    default:
                        return null;
                }
            })(e, t, n);
        return null != o ? o : (0, l.jsx)("div", { ...s, children: r });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: i, children: s } = e,
            r =
                n?.(e) ??
                (function (e, t) {
                    let n,
                        { attributes: i, children: s, leaf: r, text: o } = t,
                        c = !1,
                        [u] = Z.VW.node(e, Z.PW.parent(Z.VW.findPath(e, o)));
                    switch (Z.VW.isEditor(u) ? "editor" : u.type) {
                        case "line":
                        case "blockQuote": {
                            c = void 0;
                            let e = Object.entries(r)
                                .filter((e) => {
                                    let [t] = e;
                                    return "text" !== t;
                                })
                                .flatMap((e) => {
                                    let [t, n] = e;
                                    if ("hljsTypes" === t) return n;
                                    if (!0 === n) {
                                        if (
                                            (("codeBlockLang" === t || "codeBlockSyntax" === t) && (c = !1),
                                            t.startsWith("before_") || t.startsWith("after_"))
                                        )
                                            return [eT[t]];
                                        if (t in eL) return [eL[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = a()(e, { [eT.syntaxOverride]: "||" === r.text || "\\" === r.text });
                        }
                    }
                    return (
                        (n = a()(n, { [ew.BI]: "" === o.text })),
                        (0, l.jsx)("span", { ...i, className: n, spellCheck: c, children: s })
                    );
                })(t, e);
        return null != r ? r : (0, l.jsx)("span", { ...i, children: s });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = Z.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(Z.VW.richValue(e)),
            !1 === this.props.canFocus)
        ) {
            let t = B.rL.findDocumentOrShadowRoot(e).getSelection();
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
            n = B.rL.findDocumentOrShadowRoot(t).getSelection(),
            l = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            i = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == i && (i = l), null != i)
            ) {
                let n = Z.VW.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (Z.ZF.isExpanded(n)
                        ? F.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != l && !l.collapsed) {
                let n = Z.VW.toSlateRange(t, l, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    Z.ZF.isExpanded(n) &&
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
        let n = null != e.selection && Z.ZF.isCollapsed(e.selection) ? Z.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && Z.ZF.isCollapsed(e.selection)
                    ? Z.VW.above(e, { at: n[1], match: (t) => Z.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            Z.VW.isEditorEmpty(e))
        ) {
            z.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let l = B.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            i = (l?.rangeCount ?? 0) > 0 ? l?.getRangeAt(0) : null;
        if (null == (null != i ? Z.VW.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }) : null) && null != i) {
            let t = Z.VW.toSlateRange(e, i, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? z.b.select(e, t) : z.b.select(e, Z.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && Z.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = Z.AS.leaf(t, e);
            Z.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                z.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), Z.VW.insertText(t, e);
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
            i = B.rL.findDocumentOrShadowRoot(this.props.editor),
            s = i.getElementById("textarea-context"),
            a = i.getElementById("slate-toolbar");
        if (null != l && !(0, K.hasDomParent)(l, s) && !(0, K.hasDomParent)(l, a)) {
            let e = B.rL.findDocumentOrShadowRoot(t).getSelection();
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
                    a = l.startOffset,
                    r = l.endOffset;
                if ((0, K.hasDomParent)(i, t) || (!(0, K.isDOMRangeCollapsed)(i, a, s, r) && (0, K.hasDomParent)(s, t)))
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
                    a = s.startContainer,
                    r = s.endContainer,
                    o = s.startOffset,
                    c = s.endOffset;
                if ((0, K.hasDomParent)(a, t)) {
                    if (l) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    l = !0;
                }
                if (!(0, K.isDOMRangeCollapsed)(a, o, r, c))
                    if ((0, K.hasDomParent)(a, t)) {
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
        if (L.isPlatformEmbedded) {
            let a = (0, H.zd)();
            (0, w.L3)(
                e,
                async () => {
                    let { default: e } = await n.e("22401").then(n.bind(n, 258360));
                    return (n) => (0, l.jsx)(e, { ...n, editor: t, text: Z.VW.getSelectedText(t, !0) });
                },
                {
                    align: null != i && null != s && i < s / 2 ? "top" : "bottom",
                    enableSpellCheck: a === M.BRT.APP,
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
            placeholder: r,
            decorate: o,
            channelId: c,
            guildId: u,
            onChange: d,
            onFocus: h,
            onBlur: m,
            onKeyDown: p,
            onKeyUp: f,
            renderExtraElement: g,
            renderExtraLeaf: _,
            ...x
        } = this.props;
        return (0, l.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, l.jsx)("div", { className: a()(eO.q, t), "aria-hidden": !0, children: r })
                    : null,
                (0, l.jsx)(B.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, l.jsx)(B.Fo, {
                        ...x,
                        className: a()(ek.PT, eO.E, t),
                        decorate: o,
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
                        "aria-label": r,
                        "aria-multiline": !0,
                    }),
                }),
            ],
        });
    }
}
var eD = n(323350);
function eU(e, t, n, l) {
    let i = 0;
    for (let s = 0; s < n.length; s++) {
        let a = n[s];
        if (null == a) continue;
        let r = i + a.length;
        if (l <= r) {
            let n = Z.PW.child(t, s),
                a = Z.VW.node(e, n)[0];
            if (Z.l5.isText(a)) return { path: n, offset: Math.min(Math.max(l - i, 0), a.text.length) };
        }
        i = r;
    }
    let s = n.length - 1;
    return { path: Z.PW.child(t, s), offset: n[s]?.length ?? 0 };
}
let eV = new Set(["line", "blockQuote"]),
    eG = [];
var eF = n(143236),
    eB = n(154283),
    eH = n(264322),
    eW = n(253932);
n(667532);
var eK = n(485845),
    ez = n(258363),
    eZ = n(842209),
    eq = n(392054),
    eJ = n(168186),
    eY = n(978561),
    eX = n(649671),
    e$ = n(551483);
n(827669);
let eQ = new Set(["applicationCommandOption"]),
    e0 = new Set([m.n4.ATTACHMENT]),
    e1 = new Set(["line", "applicationCommand"]);
function e2(e, t, n, l) {
    let [i] = Z.VW.blocks(e)[0],
        s = (l ? (0, eD.IQ)(i, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        a = [s.length - 1];
    for (let [, t] of (z.b.insertNodes(e, s, { at: e$.Xg }), Z.VW.blocks(e).reverse()))
        Z.PW.isAfter(t, a) && z.b.removeNodes(e, { at: t, voids: !0 });
    null != n && R.Gf({ channelId: t, command: null, section: null });
}
function e6(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        e0.has(t.options[0].type) ||
        G.O7(e).length > 0 ||
        null == G.n$(e)
    )
        return !1;
    let n = Z.VW.getFirstText(e);
    if (null == n) return !1;
    let l = t.options[0],
        i = { path: e$.fP, offset: t.displayName.length + 2 },
        s = { path: e$.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || Z.Kh.equals(i, s)) &&
        (z.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: l.name,
                optionDisplayName: l.displayName,
                optionType: l.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            { anchor: i, focus: s },
        ),
        !0)
    );
}
function e3(e) {
    let {
        guildId: t,
        channelId: n,
        command: l,
        activeOption: i,
        currentOptionValues: s,
        previousOptionValues: a,
        validateAll: r,
        allowEmpty: o,
    } = e;
    if (null == l.options) return !1;
    let c = r ? null : f.A.getActiveOptionName(n),
        u = {},
        d = f.A.getOptionStates(n),
        h = !1;
    for (let e of l.options) {
        let l = d[e.name],
            m =
                r ||
                (e.name === c && c !== i) ||
                (l?.lastValidationResult?.success === !1 && s?.[e.name] !== a?.[e.name]),
            p = {
                hasValue: null != s && e.name in s,
                isActive: e.name === i,
                lastValidationResult: m
                    ? (0, eY.J)({
                          option: e,
                          content: s?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: o,
                      })
                    : l?.lastValidationResult,
            };
        (null == l ||
            l.hasValue !== p.hasValue ||
            l.isActive !== p.isActive ||
            (m && l.lastValidationResult?.success === !1)) &&
            ((u[e.name] = p), (h = !0));
    }
    h && R.H2(n, u);
}
function e4(e) {
    let t = G.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        l = n.children[0];
    return Z.l5.isText(l) ? { command: n.command, commandText: l.text } : { command: n.command, commandText: null };
}
function e7(e, t) {
    let n = G.O7(e)[0];
    t();
    let l = Z.ZF.toPoint(e.selection);
    if (null == l || n === G.O7(e)[0]) return;
    let { command: i, commandText: s } = e4(e);
    !(null == i || null == s || s.endsWith(" ")) &&
        Z.Kh.equals(l, { path: e$.fP, offset: i.displayName.length + 1 }) &&
        z.b.insertText(e, " ");
}
function e8(e, t, n) {
    let l = e.activeCommand?.options?.find((e) => e.name === n),
        i = e.initialValues[n];
    if (null == l || null == i) return null;
    if (null != l.choices) return l.choices.find((e) => e.value === i.value)?.displayName;
    let s = i.value?.toString();
    return l.type === m.n4.CHANNEL || (l.type === m.n4.MENTIONABLE && null != y.A.getChannel(s))
        ? `<#${s}>	`
        : l.type === m.n4.USER || (l.type === m.n4.MENTIONABLE && null != ep.default.getUser(s))
          ? `<@${s}>`
          : l.type === m.n4.ROLE || (l.type === m.n4.MENTIONABLE && null != ed.A.getRole(t.guild_id, s ?? M.dJq))
            ? `<@&${s}>`
            : s;
}
var e5 = n(635377),
    e9 = n.n(e5),
    te = n(927813);
let tt = new Set(["line"]),
    tn = /^[a-z0-9_+\-.#]+$/i,
    tl = null,
    ti = null;
function ts(e) {
    let t = (function (e) {
        let t = [],
            n = null;
        for (let l of Z.VW.blocks(e))
            (n = (function (e, t, n, l, i) {
                let s = (function (e) {
                        let t,
                            [n, l] = e;
                        if (!tt.has(n.type)) return [];
                        let i = [],
                            s = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let a = n.children[e];
                            if (Z.l5.isText(a))
                                for (s.lastIndex = 0; null != (t = s.exec(a.text)); ) {
                                    if ("\\" === t[0]) {
                                        s.lastIndex += 1;
                                        continue;
                                    }
                                    i.push({ path: Z.PW.child(l, e), offset: t.index });
                                }
                        }
                        return i;
                    })(t),
                    a = s[0],
                    r = s[s.length - 1],
                    o = null;
                if (null != r) {
                    let [t] = Z.VW.node(e, r.path);
                    o = t.text.substring(r.offset + 3);
                }
                let c = n && null != a,
                    u = n && 0 === s.length,
                    d = l && 0 === s.length,
                    h = (c ? s.slice(1) : s).length % 2 == 1,
                    m = h && (null == o || "" === o || null != o.match(tn)),
                    p = m && null != o && "" !== o ? o.toLowerCase() : null;
                return {
                    blockEntry: t,
                    wasInCodeBlock: n,
                    isInCodeBlock: u,
                    isStyledCodeBlockLine: d,
                    lang: h || c ? p : i,
                    hljsTypes: null,
                    closesCodeBlock: c,
                    opensCodeBlock: h,
                    opensCodeBlockOnOwnLine: m,
                };
            })(
                e,
                l,
                null != n && (n.isInCodeBlock || n.opensCodeBlock),
                null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null,
            )),
                t.push(n);
        return (
            (function (e) {
                let t = [],
                    n = !1;
                for (let l of e) {
                    let i = l === e[e.length - 1];
                    if (
                        (l.closesCodeBlock || i) &&
                        (n && i && !l.closesCodeBlock && t.push(l), (n = !1), t.length > 0)
                    ) {
                        let e = t.map((e) => (0, eD.IQ)(e.blockEntry[0])).join("\n"),
                            n = t[0].lang;
                        if (null == n || null == tl || tl.hasLanguage(n)) {
                            if (null != n && null != tl && tl.hasLanguage(n)) {
                                let l = (function (e, t) {
                                    if (null == tl) return null;
                                    let n = `${e}-${t}`,
                                        l = to.get(n);
                                    if (null != l) return l;
                                    let i = tl.highlight(t, e, !1);
                                    if (null == i || i.illegal) return null;
                                    let s = i.value.split("\n");
                                    return to.set(n, s), s;
                                })(e, n);
                                if (null != l && l.length === t.length) {
                                    let e = [];
                                    for (let n = 0; n < t.length; n++) {
                                        let i,
                                            s = l[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            a = [],
                                            r = 0,
                                            o = 0;
                                        for (; null != (i = ta.exec(s)); ) {
                                            let t = i.index + i[0].length,
                                                n = i.index - o;
                                            i.index > o &&
                                                (e.length > 0 && a.push({ types: [...e], start: r, end: r + n }),
                                                (r += n)),
                                                "</span>" === i[0] ? e.pop() : e.push(i[1]),
                                                (o = t);
                                        }
                                        if (e.length > 0) {
                                            let t = s.length - o;
                                            a.push({ types: [...e], start: r, end: r + t });
                                        }
                                        t[n].hljsTypes = a;
                                    }
                                } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = [];
                        t = [];
                    }
                    n && t.push(l), l.opensCodeBlock && (n = !0);
                }
            })(t),
            t
        );
    })(e);
    return (
        (function (e, t) {
            for (let l of t) {
                var n;
                let [t, i] = l.blockEntry,
                    s =
                        (n = l).isStyledCodeBlockLine || n.wasInCodeBlock
                            ? {
                                  lang: n.lang,
                                  wasInCodeBlock: n.wasInCodeBlock,
                                  isInCodeBlock: n.isInCodeBlock,
                                  isStyledCodeBlockLine: n.isStyledCodeBlockLine,
                                  hljsTypes: n.hljsTypes,
                              }
                            : null;
                t?.codeBlockState != s && z.b.setNodes(e, { codeBlockState: s }, { at: i });
            }
        })(e, t),
        t.some((e) => null != e.lang)
    );
}
let ta = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    tr = { max: 1 / 0, maxAge: +te.A.Millis.MINUTE, updateAgeOnGet: !0 },
    to = new (e9())(tr);
function tc(e, t) {
    let n = 0;
    for (let l of Z.VW.nodes(e, {
        at: { anchor: { path: e$.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => Z.l5.isText(e),
    })) {
        let e = l[0].text;
        Z.PW.equals(l[1], t.path) && (e = e.substring(0, t.offset));
        let i = e.match(/```/g);
        n += i?.length ?? 0;
    }
    return n % 2 != 0;
}
function tu(e) {
    if (null == e.selection) return !1;
    let t = Z.ZF.start(e.selection);
    return tc(e, t);
}
let td = new Set(["line", "blockQuote"]),
    th = ["applicationCommand"],
    tm = ["timestampMentionInput"];
function tp(e) {
    let t = Z.VW.getCurrentBlock(e),
        n = Z.VW.getCurrentInline(e);
    return null != t && !th.includes(t[0].type) && !tm.includes(n?.[0]?.type);
}
function tf(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: Z.VW.richValue(e), selection: e.selection };
}
var tg = n(877413),
    t_ = n.n(tg),
    tx = n(284009),
    tC = n.n(tx),
    tA = n(339871);
function tE(e, t) {
    let { cmd: n = !1, ctrl: l = !1, alt: i = !1, shift: s = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == l || e.ctrlKey === l) &&
        (null == i || e.altKey === i) &&
        (null == s || e.shiftKey === s)
    );
}
let tI = (e) => {
        let t = Z.VW.getCurrentBlock(e);
        if (null != t) {
            let n = Z.VW.start(e, t[1]);
            return z.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    },
    tv = (e) => {
        let t = Z.VW.getCurrentBlock(e);
        if (null != t) {
            let n = Z.VW.end(e, t[1]);
            return z.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    };
var ty = n(224868);
let tb =
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    tS = new Set([
        "emoji",
        "customEmoji",
        "textMention",
        "userMention",
        "roleMention",
        "channelMention",
        "staticRouteLink",
        "soundboard",
        "timestamp",
    ]),
    tN = new Set(["timestampMentionInput"]),
    tj = new Set(["line", "blockQuote"]),
    tT = new Set(["applicationCommandOption"]);
function tw(e, t, n) {
    let l = Z.VW.areStylesDisabled(e);
    for (let i of Z.VW.blocks(e))
        if (tj.has(i[0].type)) l ? tL(e, i, !0, null) : tR(e, i, t, n);
        else {
            let [s, a] = i;
            for (let i = s.children.length - 1; i >= 0; i--) {
                let r = s.children[i];
                if (!Z.l5.isText(r) && tT.has(r.type)) {
                    let s = [r, Z.PW.child(a, i)];
                    l ? tL(e, s, !0, null) : tR(e, s, t, n);
                }
            }
        }
}
function tR(e, t, n, l) {
    let i = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        s = Z.cv.markdown(t[0], n);
    tL(e, t, i, s) && ((t = Z.cv.updateElement(e, t)), (s = Z.cv.markdown(t[0], n))),
        i ||
            (tk(e, t, l, s) && ((t = Z.cv.updateElement(e, t)), (s = Z.cv.markdown(t[0], n))),
            (function (e, t, n, l, i) {
                let [s, a] = t;
                for (let r = s.children.length - 1; r >= 0; r--) {
                    let o,
                        c = s.children[r];
                    if (!Z.l5.isText(c)) continue;
                    let u = Z.PW.child(a, r),
                        d = [];
                    for (tb.lastIndex = 0; null != (o = tb.exec(c.text)); ) {
                        if (0 !== o.index && null == c.text.charAt(o.index - 1).match(/(\t|\s)/)) {
                            tb.lastIndex = o.index + 1;
                            continue;
                        }
                        if (tM(e, a, { path: u, offset: o.index }, i)) continue;
                        let s = (0, ty.p)(o[0], n, l);
                        null != s && tO(l, t[0], s)
                            ? d.push({ index: o.index, length: o[0].length, node: s })
                            : (tb.lastIndex = o.index + 1);
                    }
                    for (let t of d.reverse())
                        (function (e, t, n, l, i) {
                            let [s, a] = t,
                                r = { path: a, offset: n },
                                o = { path: a, offset: n + l };
                            tC()(
                                r.offset >= 0 && r.offset <= s.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                tC()(
                                    o.offset >= 0 && o.offset <= s.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                z.b.textToVoid(e, i, { anchor: r, focus: o });
                        })(e, [c, Z.PW.child(a, r)], t.index, t.length, t.node);
                }
            })(e, t, n, l, s));
}
function tL(e, t, n, l) {
    let [i, s] = t,
        a = !1;
    for (let t = i.children.length - 1; t >= 0; t--) {
        let r = i.children[t];
        if (Z.l5.isText(r) && !n) {
            let n = t < i.children.length - 1 ? i.children[t + 1] : null;
            if (null == n || !Z.cv.isElement(n) || !e.isVoid(n)) continue;
            let l = !1,
                o = 0;
            for (;;) {
                let e = r.text.indexOf("\\", o);
                if (-1 === e) break;
                if (e === r.text.length - 1) {
                    l = !0;
                    break;
                }
                o = e + 2;
            }
            if (l) {
                let l = Z.PW.child(s, t + 1);
                z.b.voidToText(e, (0, eD.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), l), (a = !0);
            }
        } else if (Z.cv.isElement(r) && e.isVoid(r)) {
            let i = Z.PW.child(s, t),
                o = { path: Z.PW.child(i, 0), offset: 0 };
            (n || (null != l && tM(e, s, o, l))) &&
                (z.b.voidToText(e, (0, eD.IQ)(r, { mode: "plain", preventEmojiSurrogates: !0 }), i), (a = !0));
        }
    }
    return a;
}
function tk(e, t, n, l) {
    let i = t[1],
        s = !1,
        a = [...l.entries].reverse();
    for (let r = 0; r < a.length; r++) {
        let o,
            c = a[r],
            u = a[r + 1];
        if (null != u && u.text.endsWith("\\") && c.start === u.start + u.text.length) continue;
        switch (c.attributes[0]) {
            case "emoji":
                o = {
                    type: "emoji",
                    emoji: {
                        name: c.data.name,
                        src: c.data.src,
                        surrogate: c.data.surrogate,
                        jumboable: !0 === c.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "customEmoji":
                o = {
                    type: "customEmoji",
                    emoji: {
                        emojiId: c.data.emojiId,
                        name: c.data.name,
                        animated: c.data.animated,
                        jumboable: !0 === c.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "textMention":
                o = { type: "textMention", name: c.data.text, children: [{ text: "" }] };
                break;
            case "mention":
                o = { type: "userMention", userId: c.data.id, children: [{ text: "" }] };
                break;
            case "roleMention":
                o = { type: "roleMention", roleId: c.data.id, children: [{ text: "" }] };
                break;
            case "channelMention":
                o = { type: "channelMention", channelId: c.data.id, children: [{ text: "" }] };
                break;
            case "staticRouteLink":
                o = { type: "staticRouteLink", id: c.data.id, itemId: c.data.itemId, children: [{ text: "" }] };
                break;
            case "soundboard":
                o = { type: "soundboard", guildId: c.data.guildId, soundId: c.data.soundId, children: [{ text: "" }] };
                break;
            case "timestamp":
                o = { type: "timestamp", parsed: c.data, children: [{ text: "" }] };
                break;
            case "timestampMentionInput":
                o = { type: "timestampMentionInput", children: [{ text: c.data.content }] };
                break;
            default:
                continue;
        }
        if (!tO(n, t[0], o)) continue;
        let d = eU(e, i, l.serializedChildren, c.start),
            h = eU(e, i, l.serializedChildren, c.start + c.text.length);
        z.b.textToVoid(e, o, { anchor: d, focus: h }), (s = !0);
    }
    return s;
}
function tM(e, t, n, l) {
    let i = 0;
    for (let [l, s] of Z.VW.nodes(e, { at: { anchor: Z.VW.start(e, t), focus: n }, mode: "lowest" }))
        Z.l5.isText(l) ? (Z.PW.equals(s, n.path) ? (i += n.offset) : (i += l.text.length)) : (i += 1);
    for (let e of l.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= i && n >= i) return !0;
    }
    return !1;
}
function tO(e, t, n) {
    if ("applicationCommandOption" !== t.type) return !0;
    switch (t.optionType) {
        case m.n4.CHANNEL:
            return "channelMention" === n.type;
        case m.n4.ROLE:
            return "roleMention" === n.type || ("textMention" === n.type && "@everyone" === n.name);
        case m.n4.USER:
            return "userMention" === n.type;
        case m.n4.MENTIONABLE:
            return (
                "roleMention" === n.type ||
                "userMention" === n.type ||
                ("textMention" === n.type && "@everyone" === n.name)
            );
        case m.n4.STRING: {
            let n = null != e ? f.A.getOption(e, t.optionName) : null;
            return n?.choices == null && n?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
function tP(e, t, n) {
    let l = Z.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let i = Z.VW.getCurrentText(e);
    if (null == i) return !0;
    let [s, a] = i,
        [r, o] = Z.VW.edges(e, a),
        c = Z.ZF.toPoint(e.selection);
    if (null == c) return !0;
    if (null != l) {
        let [t, n] = l;
        if (Z.VW.isEmpty(e, t) || Z.VW.isVoid(e, t)) return z.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == l) return !1;
        else {
            let [i, s] = Z.VW.edges(e, l[1]);
            return z.b.delete(e, { at: c, unit: t, reverse: n, select: !0, bounds: { anchor: i, focus: s } }), !0;
        }
    let u = Z.VW.getParentBlock(e, c);
    if (null == u) return !0;
    let d = u[1],
        h = l;
    if (Z.Kh.equals(c, n ? r : o))
        for (;;) {
            let t = (n ? Z.VW.before : Z.VW.after)(e, c);
            if (null == t) return !0;
            if (!Z.PW.isDescendant(t.path, d)) break;
            if (((c = t), null != (h = Z.VW.getParentInline(e, t)))) {
                let [t, n] = h;
                if (Z.VW.isEmpty(e, t) || Z.VW.isVoid(e, t)) {
                    let t = Z.VW.before(e, n);
                    return null != t && z.b.select(e, t), z.b.removeInline(e, n), !0;
                }
            }
            let l = Z.VW.node(e, t.path);
            if (null == l || !Z.l5.isText(l[0])) return !0;
            if ((([s, a] = l), 0 !== s.text.length)) {
                [r, o] = Z.VW.edges(e, a);
                break;
            }
        }
    return z.b.delete(e, { at: c, unit: t, reverse: n, select: !0 }), !0;
}
var tD = n(527214);
function tU(e, t) {
    let n = f.A.getActiveCommand(e.id),
        l = n?.options?.find((e) => e.name === t.optionName);
    return null != l && (l.type !== m.n4.STRING || l?.choices != null || l?.autocomplete);
}
function tV(e, t, n, l) {
    let i = Z.VW.areStylesDisabled(e) || null == n ? t : n;
    F.o.withSingleEntry(e, () => {
        z.b.insertText(e, l ? i + " " : i);
    });
}
var tG = n(770178);
let tF = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function tB(e) {
    try {
        return Z.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), W.A.captureException(e), null;
    }
}
var tH = n(31717);
let tW = (e) => {
        let t,
            { channelId: n, element: s, attributes: r, children: o } = e,
            c = (0, B.f7)(),
            u = (0, B.zL)(),
            d = (0, B.RV)(),
            { optionType: h, errored: p } = (0, J.cf)(
                [f.A],
                () => ({
                    optionType: f.A.getOption(n, s.optionName)?.type,
                    errored: f.A.getOptionState(n, s.optionName)?.lastValidationResult?.success !== !0,
                }),
                [n, s.optionName],
            ),
            g = (0, J.bG)([_.A], () => _.A.getUpload(n, s.optionName, tH.C.SlashCommand), [n, s.optionName]),
            x = s.children[s.children.length - 1],
            C = null != x && Z.l5.isText(x) && x.text.endsWith("\n"),
            A = a()(ew.S0, ew.xP, { [ew.t$]: u && c, [ew.$2]: (!u || !c) && p }),
            E = i.useCallback(() => {
                Z.VW.isVoid(d, s) || z.b.selectCommandOption(d, s.optionName, !0);
            }, [d, s]);
        return (
            (t =
                h === m.n4.ATTACHMENT
                    ? g?.filename != null
                        ? (0, l.jsxs)("span", {
                              className: a()(ew._K, ew.dU),
                              contentEditable: !1,
                              children: [g.filename, o],
                          })
                        : (0, l.jsxs)("span", {
                              className: a()(ew._K, ew.ZI),
                              contentEditable: !1,
                              children: [ex.intl.string(ex.t.GRdFni), o],
                          })
                    : (0, l.jsxs)("span", {
                          className: ew._K,
                          children: [o, C ? (0, l.jsx)("span", { className: ew.Nx, contentEditable: !1 }) : null],
                      })),
            (0, l.jsxs)("span", {
                ...r,
                className: A,
                children: [
                    (0, l.jsxs)("span", {
                        className: ew.gA,
                        contentEditable: !1,
                        onClick: E,
                        children: [s.optionDisplayName, "​"],
                    }),
                    t,
                    (0, l.jsx)("span", { contentEditable: !1, children: "​" }),
                ],
            })
        );
    },
    tK = (e) => {
        let { element: t, attributes: n, children: i } = e,
            s = (0, B.f7)(),
            r = (0, B.zL)(),
            o = a()(ew.S0, ew.xP, ew.FF, { [ew.t$]: r && s, [ew.$2]: t.error }),
            c = (0, l.jsx)("span", { className: ew._K, children: i });
        return (0, l.jsxs)("span", {
            ...n,
            className: o,
            children: [
                (0, l.jsxs)("span", { className: ew.gA, contentEditable: !1, children: ["@time", "​"] }),
                c,
                (0, l.jsx)("span", { contentEditable: !1, children: "​" }),
            ],
        });
    };
var tz = n(471910);
let tZ = i.forwardRef(function (e, t) {
    let s,
        r,
        o,
        c,
        u,
        d,
        {
            value: h,
            type: p,
            channel: g,
            className: C,
            id: A,
            disabled: v,
            submitting: y,
            placeholder: b,
            required: S,
            textAreaPaddingClassName: N,
            onChange: j,
            onPaste: T,
            onResize: w,
            onFocus: L,
            onBlur: k,
            onKeyDown: P,
            onKeyUp: D,
            onTab: W,
            onEnter: K,
            onSubmit: q,
            onSubmitFailure: J,
            maybeShowAutocomplete: Y,
            hideAutocomplete: X,
            moveSelection: $,
            spellcheckEnabled: Q,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            disableAutoFocus: en,
            disableEnterToSubmit: el,
            allowNewLines: ei,
            "aria-owns": es,
            "aria-expanded": ea,
            "aria-haspopup": er,
            "aria-activedescendant": eo,
            "aria-controls": ec,
            "aria-invalid": eu,
            "aria-describedby": ed,
            "aria-labelledby": eh,
            "aria-autocomplete": em,
        } = e,
        ep = i.useRef(null),
        ef = i.useRef(null),
        eg = i.useRef(!0),
        e_ = i.useRef(!0),
        eC = v || y,
        eA = i.useCallback(
            (e, t, n) => {
                let { value: l, selection: i } = n,
                    s = Z.VW.richValue(e),
                    a = e.selection,
                    r = !1;
                if (void 0 !== l && l !== s) {
                    if (((e.children = l), "parent" === t && !e.previewMarkdown && e.chatInputType === E.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), tw(e, g.guild_id, g.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        tw(e, g.guild_id, g.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== l && l !== s && F.o.insertEntry(e, "other", !1, s, a), (r = !0);
                }
                if ((null == i || Z.Ot.isValid(e, i) || (i = void 0), (r || !Z.Ot.isValid(e, a)) && void 0 === i)) {
                    let t = Z.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let o = null != i && !Z.Ot.equals(i, a);
                if ((r && !en && Z.VW.focus(e), null != i && o)) {
                    e.selection = i;
                    let t = F.o.currentEntry(e);
                    null != t && (t.selection = i), (r = !0);
                }
                let c = G.n$(e);
                if (
                    (null != c &&
                        c[0].command.id !== f.A.getActiveCommand(g.id)?.id &&
                        F.o.withMergedEntry(e, () => {
                            e2(e, g.id, null, !0);
                        }),
                    r)
                )
                    if ("parent" === t)
                        try {
                            (e_.current = !1), e.onChange();
                        } finally {
                            e_.current = !0;
                        }
                    else e.onChange();
            },
            [g.id, g.guild_id, en],
        ),
        eE = (function (e) {
            let t = i.useContext(H.Ay),
                l = eW.SI.useSetting(),
                [s] = i.useState(() => {
                    let i = (0, eB.ie)();
                    return (
                        (i.children = (0, I.x7)("")),
                        (i.selection = { anchor: e$.K, focus: e$.K }),
                        (function (e) {
                            var t, l;
                            let {
                                    editor: i,
                                    chatInputType: s,
                                    channel: a,
                                    canUseCommands: r,
                                    canOnlyUseTextCommands: o,
                                    windowContext: c,
                                    previewMarkdown: u,
                                    forTests: d,
                                    onChangeStart: h,
                                    onChangeEnd: p,
                                    updateState: g,
                                } = e,
                                _ = i,
                                { onChange: x } = _;
                            (_.chatInputType = s),
                                (_.windowContext = c),
                                (_.previewMarkdown = u),
                                (_.composition = null),
                                (_.events = new eF.EventEmitter()),
                                (_.isMac = "MacIntel" === navigator.platform),
                                (_.onChange = () => {
                                    _.events.emit("onChange"), x();
                                }),
                                ((t = _ =
                                    ((e, t) => {
                                        let {
                                            addMark: n,
                                            removeMark: l,
                                            deleteBackward: i,
                                            deleteForward: s,
                                            setFragmentData: a,
                                            insertData: r,
                                            insertFragmentData: o,
                                            insertTextData: c,
                                        } = e;
                                        return (
                                            ((e = (0, B.o$)(e)).addMark = n),
                                            (e.removeMark = l),
                                            (e.setFragmentData = a),
                                            (e.insertData = r),
                                            (e.insertFragmentData = o),
                                            (e.insertTextData = c),
                                            (e.deleteBackward = (n) => {
                                                if ("line" === n && !t) {
                                                    let t = Z.ZF.toPoint(e.selection);
                                                    if (null != t) {
                                                        let l = Z.VW.before(e, t, { unit: n });
                                                        if (null != l) {
                                                            let n = Z.e0.getLineStart(e, t, !1);
                                                            null != n && Z.Kh.isAfter(n, l)
                                                                ? z.b.delete(e, { at: { anchor: n, focus: t } })
                                                                : z.b.delete(e, { at: { anchor: l, focus: t } });
                                                            return;
                                                        }
                                                    }
                                                }
                                                i(n);
                                            }),
                                            (e.deleteForward = (n) => {
                                                if ("line" === n && !t) {
                                                    let t = Z.ZF.toPoint(e.selection);
                                                    if (null != t) {
                                                        let l = Z.VW.after(e, t, { unit: n });
                                                        if (null != l) {
                                                            let n = Z.e0.getLineEnd(e, t, !1);
                                                            null != n && Z.Kh.isBefore(n, l)
                                                                ? z.b.delete(e, { at: { anchor: n, focus: t } })
                                                                : z.b.delete(e, { at: { anchor: l, focus: t } });
                                                            return;
                                                        }
                                                    }
                                                }
                                                s(n);
                                            }),
                                            e
                                        );
                                    })(_, !0 === d)).setFragmentData = (e) => {
                                    if (null != t.selection && !Z.Kh.equals(t.selection.anchor, t.selection.focus)) {
                                        let n = (0, eD.WO)(Z.VW.richValue(t), {
                                            mode: "plain",
                                            range: t.selection,
                                            preventEmojiSurrogates: !0,
                                        });
                                        e.setData("text/plain", n);
                                    }
                                }),
                                (t.insertData = (e) => {
                                    t.insertTextData(e);
                                }),
                                (t.insertFragmentData = (e) => !1),
                                (t.insertTextData = (e) => {
                                    let n = e.getData("text/plain");
                                    if (0 === n.length) return !1;
                                    if (null != t.selection && Z.ZF.isExpanded(t.selection)) {
                                        let e = eB.KE.string(t, t.selection),
                                            l = (0, tD.W1)(n),
                                            i = (0, tD.W1)(e);
                                        if (null != l && null == i) {
                                            let [e, n] = Z.ZF.edges(t.selection);
                                            return (
                                                Z.VW.withoutNormalizing(t, () => {
                                                    z.b.select(t, e),
                                                        t.insertText("["),
                                                        z.b.select(t, n),
                                                        0 === Z.PW.compare(e.path, n.path) &&
                                                            z.b.move(t, { distance: 1 }),
                                                        t.insertText(`](${l.target})`);
                                                }),
                                                !0
                                            );
                                        }
                                        if (null != l && null != i)
                                            return z.b.delete(t, { at: t.selection }), t.insertText(l.target), !0;
                                        z.b.delete(t, { at: t.selection });
                                    }
                                    return t.insertText(n), !0;
                                }),
                                (_ = (function (e) {
                                    let {
                                        apply: t,
                                        deleteBackward: n,
                                        deleteForward: l,
                                        deleteFragment: i,
                                        insertText: s,
                                    } = e;
                                    return (
                                        (e.apply = (n) => {
                                            if (
                                                "set_selection" === n.type &&
                                                e.composition?.startedInsideInline &&
                                                Z.ZF.isRange(n.properties) &&
                                                Z.ZF.isRange(n.newProperties) &&
                                                Z.ZF.isCollapsed(n.newProperties)
                                            ) {
                                                let t = Z.VW.getParentInline(e, n.properties),
                                                    l = Z.VW.getParentInline(e, n.newProperties);
                                                if (null != t && (null == l || !Z.PW.equals(t[1], l[1]))) return;
                                            }
                                            t(n);
                                        }),
                                        (e.insertText = (t) => {
                                            null != e.selection && null != Z.VW.getCurrentInline(e)
                                                ? z.b.insertText(e, t)
                                                : s(t);
                                        }),
                                        (e.deleteBackward = (t) => {
                                            tP(e, t, !0) || n(t);
                                        }),
                                        (e.deleteForward = (t) => {
                                            tP(e, t, !1) || l(t);
                                        }),
                                        (e.deleteFragment = (t) => {
                                            if (null != e.selection && Z.ZF.isExpanded(e.selection)) {
                                                let n = e.selection.anchor,
                                                    l = e.selection.focus,
                                                    s = Z.VW.getParentInline(e, n),
                                                    a = Z.VW.getParentInline(e, l);
                                                if (null != s && null != a && Z.PW.equals(s[1], a[1])) return void i(t);
                                                let r = Z.ZF.isForward(e.selection);
                                                if (null != s) {
                                                    let [, t] = s,
                                                        [l, i] = Z.VW.edges(e, t);
                                                    r && Z.Kh.equals(n, l)
                                                        ? (n = Z.VW.before(e, l) ?? Z.VW.start(e, []))
                                                        : !r &&
                                                          Z.Kh.equals(n, i) &&
                                                          (n = Z.VW.after(e, i) ?? Z.VW.end(e, []));
                                                }
                                                if (null != a) {
                                                    let [, t] = a,
                                                        [n, i] = Z.VW.edges(e, t);
                                                    !r && Z.Kh.equals(l, n)
                                                        ? (l = Z.VW.before(e, n) ?? Z.VW.start(e, []))
                                                        : r &&
                                                          Z.Kh.equals(l, i) &&
                                                          (l = Z.VW.after(e, i) ?? Z.VW.end(e, []));
                                                }
                                                return void z.b.delete(e, {
                                                    at: { anchor: n, focus: l },
                                                    reverse: "backward" === t,
                                                    select: !0,
                                                });
                                            }
                                            i(t);
                                        }),
                                        e
                                    );
                                })((_ = t))),
                                s.commands?.enabled &&
                                    (_ = (function (e, t, n, l) {
                                        let {
                                            insertData: i,
                                            isInline: s,
                                            isVoid: a,
                                            onChange: r,
                                            deleteBackward: o,
                                            deleteForward: c,
                                            deleteFragment: u,
                                        } = e;
                                        (e.insertData = (n) => {
                                            if (
                                                null != t &&
                                                Z.VW.isEditorEmpty(e) &&
                                                n.types.includes("application/x-discord-interaction-data")
                                            ) {
                                                let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                                                    { commandKey: l, interactionOptions: i } = (0, eJ.Ez)(e),
                                                    { application: s, command: a } = eZ.EW(
                                                        { channel: t, type: "channel" },
                                                        l,
                                                    );
                                                if (null != a) {
                                                    let e =
                                                        null != s
                                                            ? {
                                                                  type: eq.Hf.APPLICATION,
                                                                  id: s.id,
                                                                  icon: s.icon,
                                                                  name: s.bot?.username ?? s.name,
                                                                  application: s,
                                                              }
                                                            : null;
                                                    return (
                                                        R.Gf({
                                                            channelId: t.id,
                                                            command: a,
                                                            section: e,
                                                            location: eq.Oh.PASTE,
                                                            initialValues: (0,
                                                            ez.getInitialValuesFromInteractionOptions)(a, i ?? []),
                                                        }),
                                                        null
                                                    );
                                                }
                                            }
                                            return i(n);
                                        }),
                                            (e.isInline = (e) => !!eQ.has(e.type) || s(e)),
                                            (e.isVoid = (e) =>
                                                !!("applicationCommandOption" === e.type && e0.has(e.optionType)) ||
                                                a(e)),
                                            (e.deleteBackward = (t) => {
                                                e7(e, () => o(t));
                                            }),
                                            (e.deleteForward = (t) => {
                                                e7(e, () => c(t));
                                            }),
                                            (e.deleteFragment = (t) => {
                                                e7(e, () => u(t));
                                            });
                                        let d = null,
                                            h = null,
                                            p = null,
                                            g = null,
                                            _ = null;
                                        return (
                                            (e.onChange = () => {
                                                if (null != t) {
                                                    let i = f.A.getState(t.id),
                                                        s = eZ.j8({ channel: t, type: "channel" });
                                                    if (
                                                        Z.VW.richValue(e) !== d ||
                                                        !Z.Ot.equals(e.selection, h) ||
                                                        i.activeCommand !== p ||
                                                        null == _ ||
                                                        s.some((e, t) => _[t] !== e)
                                                    ) {
                                                        let a = F.o.withMergedEntry(e, () =>
                                                            (function (e) {
                                                                let {
                                                                        editor: t,
                                                                        storeCommandState: n,
                                                                        channel: l,
                                                                        canUseCommands: i,
                                                                        canOnlyUseTextCommands: s,
                                                                        commandChanged: a,
                                                                        previousOptionValues: r,
                                                                    } = e,
                                                                    { command: o, commandText: c } = e4(t),
                                                                    u = n.activeCommand;
                                                                if (
                                                                    (!i &&
                                                                        u?.integration_types?.includes(
                                                                            eK.b.GUILD_INSTALL,
                                                                        )) ||
                                                                    (s &&
                                                                        u?.inputType !== eq.y$.BUILT_IN_TEXT &&
                                                                        u?.inputType !== eq.y$.BUILT_IN_INTEGRATION)
                                                                )
                                                                    return null != o && e2(t, l.id, u, !0), null;
                                                                if (null != o) {
                                                                    if (Z.VW.isEditorEmpty(t) || null == u)
                                                                        return e2(t, l.id, u, !1), null;
                                                                    let e = `/${o.displayName}`;
                                                                    if (
                                                                        null == c ||
                                                                        !c.startsWith(e) ||
                                                                        (0 === G.O7(t).length &&
                                                                            (c.length < e.length + 1 ||
                                                                                " " !== c[e.length]))
                                                                    )
                                                                        return e2(t, l.id, u, !0), null;
                                                                } else {
                                                                    if (null != u && a) {
                                                                        let e = (function (e, t, n) {
                                                                                let l,
                                                                                    {
                                                                                        initialValues: i,
                                                                                        activeCommand: s,
                                                                                    } = n;
                                                                                if (null == s) return null;
                                                                                let a =
                                                                                        (s.options?.length ?? 0) > 0
                                                                                            ? G.pY(e, s)
                                                                                            : null,
                                                                                    r = (0, eD.WO)(Z.VW.richValue(e), {
                                                                                        mode: "raw",
                                                                                        range: {
                                                                                            anchor: Z.VW.start(e, []),
                                                                                            focus:
                                                                                                a?.[0]?.keyRange
                                                                                                    .anchor ??
                                                                                                Z.VW.end(e, []),
                                                                                        },
                                                                                    }),
                                                                                    o = "",
                                                                                    c = r.toLocaleLowerCase(),
                                                                                    u =
                                                                                        `/${s.displayName} `.toLocaleLowerCase(),
                                                                                    d =
                                                                                        `/${s.untranslatedName} `.toLocaleLowerCase();
                                                                                c.startsWith(u)
                                                                                    ? (o = r.substring(u.length).trim())
                                                                                    : c.startsWith(d) &&
                                                                                      (o = r
                                                                                          .substring(d.length)
                                                                                          .trim());
                                                                                let h = [],
                                                                                    m = null,
                                                                                    p = null;
                                                                                if (null != s.options) {
                                                                                    let e = new Set();
                                                                                    if (null != a)
                                                                                        for (let l of a) {
                                                                                            e.add(l.name);
                                                                                            let i =
                                                                                                    e8(n, t, l.name) ??
                                                                                                    l.text,
                                                                                                s = {
                                                                                                    type: "applicationCommandOption",
                                                                                                    optionName: l.name,
                                                                                                    optionDisplayName:
                                                                                                        l.displayName,
                                                                                                    optionType: l.type,
                                                                                                    children: [
                                                                                                        { text: i },
                                                                                                    ],
                                                                                                };
                                                                                            h.push(s),
                                                                                                0 === l.text.length &&
                                                                                                    null == m &&
                                                                                                    (m = s);
                                                                                        }
                                                                                    for (let l of s.options)
                                                                                        if (
                                                                                            !e.has(l.name) &&
                                                                                            (l.required ||
                                                                                                null != i[l.name])
                                                                                        ) {
                                                                                            let e, i;
                                                                                            o.length > 0 &&
                                                                                            !e0.has(l.type)
                                                                                                ? ((e = o), (o = ""))
                                                                                                : (e =
                                                                                                      (i = e8(
                                                                                                          n,
                                                                                                          t,
                                                                                                          l.name,
                                                                                                      )) ?? "");
                                                                                            let s = {
                                                                                                type: "applicationCommandOption",
                                                                                                optionName: l.name,
                                                                                                optionDisplayName:
                                                                                                    l.displayName,
                                                                                                optionType: l.type,
                                                                                                children: [{ text: e }],
                                                                                            };
                                                                                            h.push(s),
                                                                                                0 === e.length &&
                                                                                                    null == m &&
                                                                                                    (m = s),
                                                                                                null == i && (p = s);
                                                                                        }
                                                                                }
                                                                                (l =
                                                                                    o.length > 0
                                                                                        ? `/${s.displayName} ${o.replace(/\r|\n/g, " ")}`
                                                                                        : 0 === h.length
                                                                                          ? `/${s.displayName} `
                                                                                          : `/${s.displayName}`),
                                                                                    h.unshift({ text: l });
                                                                                let f = {
                                                                                    type: "applicationCommand",
                                                                                    children: h,
                                                                                    command: {
                                                                                        id: s.id,
                                                                                        name: s.untranslatedName,
                                                                                        displayName: s.displayName,
                                                                                    },
                                                                                };
                                                                                Z.VW.withoutNormalizing(e, () => {
                                                                                    for (let [, t] of (z.b.insertNodes(
                                                                                        e,
                                                                                        [f],
                                                                                        { at: e$.Xg },
                                                                                    ),
                                                                                    Z.VW.blocks(e).reverse()))
                                                                                        Z.PW.isAfter(t, e$.Xg) &&
                                                                                            z.b.removeNodes(e, {
                                                                                                at: t,
                                                                                                voids: !0,
                                                                                            });
                                                                                });
                                                                                let g = null;
                                                                                return (
                                                                                    null != m
                                                                                        ? (z.b.selectCommandOption(
                                                                                              e,
                                                                                              m.optionName,
                                                                                          ),
                                                                                          (g = m.optionName))
                                                                                        : null != p
                                                                                          ? (z.b.selectCommandOption(
                                                                                                e,
                                                                                                p.optionName,
                                                                                                !1,
                                                                                            ),
                                                                                            (g = p.optionName))
                                                                                          : z.b.resetSelectionToEditorEnd(
                                                                                                e,
                                                                                            ),
                                                                                    null == p && e6(e, s),
                                                                                    g
                                                                                );
                                                                            })(t, l, n),
                                                                            i = G.SQ(t, u, l.id);
                                                                        return (
                                                                            e3({
                                                                                guildId: l.guild_id,
                                                                                channelId: l.id,
                                                                                command: u,
                                                                                activeOption: e,
                                                                                currentOptionValues: i,
                                                                                previousOptionValues: null,
                                                                                validateAll: !0,
                                                                                allowEmpty: !0,
                                                                            }),
                                                                            { commandId: u.id, optionValues: i }
                                                                        );
                                                                    }
                                                                    if (null != u && !a)
                                                                        return (
                                                                            R.Gf({
                                                                                channelId: l.id,
                                                                                command: null,
                                                                                section: null,
                                                                            }),
                                                                            null
                                                                        );
                                                                    let e = Z.VW.richValue(t)[0],
                                                                        i = e.children[0];
                                                                    if (e1.has(e.type) && Z.l5.isText(i)) {
                                                                        let e = (function (e, t) {
                                                                            if (!e.startsWith("/")) return null;
                                                                            let n = (0, eX.Yn)(t, e.substring(1));
                                                                            if (!n.hasSpaceTerminator) return null;
                                                                            let { commands: l, sections: i } = eZ.v7(
                                                                                { channel: t, type: "channel" },
                                                                                m.kc.CHAT,
                                                                                n.text,
                                                                            );
                                                                            if (0 === l.length) return null;
                                                                            let s = n.text.trim(),
                                                                                a = s + " ",
                                                                                r = l.filter(
                                                                                    (e) =>
                                                                                        e.inputType !==
                                                                                            eq.y$.PLACEHOLDER &&
                                                                                        (e.displayName === s ||
                                                                                            e.displayName.startsWith(
                                                                                                a,
                                                                                            )),
                                                                                );
                                                                            if (
                                                                                1 === r.length &&
                                                                                r[0].displayName === s
                                                                            ) {
                                                                                let e = r[0],
                                                                                    t = i.find(
                                                                                        (t) =>
                                                                                            t.application?.id ===
                                                                                            e.applicationId,
                                                                                    );
                                                                                return { command: e, section: t };
                                                                            }
                                                                            return null;
                                                                        })(i.text, l);
                                                                        if (null != e)
                                                                            return (
                                                                                R.Gf({
                                                                                    channelId: l.id,
                                                                                    command: e.command,
                                                                                    section: e.section,
                                                                                }),
                                                                                null
                                                                            );
                                                                    }
                                                                }
                                                                if (null != u && null != o) {
                                                                    !(function (e, t) {
                                                                        if (null == t.options || 0 === t.options.length)
                                                                            return !1;
                                                                        let n = G.pY(e, t);
                                                                        return (
                                                                            0 !== n.length &&
                                                                            (Z.VW.withoutNormalizing(e, () => {
                                                                                for (
                                                                                    let t = n.length - 1;
                                                                                    t >= 0;
                                                                                    t--
                                                                                ) {
                                                                                    let l = n[t];
                                                                                    z.b.textToInline(
                                                                                        e,
                                                                                        {
                                                                                            type: "applicationCommandOption",
                                                                                            optionName: l.name,
                                                                                            optionDisplayName:
                                                                                                l.displayName,
                                                                                            optionType: l.type,
                                                                                            children: [
                                                                                                { text: l.text },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                            anchor: l.keyRange.anchor,
                                                                                            focus: l.valueRange.focus,
                                                                                        },
                                                                                    );
                                                                                }
                                                                                let t = Z.VW.getFirstText(e);
                                                                                if (null == t) return !1;
                                                                                let l = t.text.trim();
                                                                                t.text !== l &&
                                                                                    z.b.textToText(e, l, {
                                                                                        anchor: {
                                                                                            path: e$.fP,
                                                                                            offset: 0,
                                                                                        },
                                                                                        focus: {
                                                                                            path: e$.fP,
                                                                                            offset: t.text.length,
                                                                                        },
                                                                                    });
                                                                            }),
                                                                            !0)
                                                                        );
                                                                    })(t, u) && e6(t, u);
                                                                    let e = G.SQ(t, u, l.id),
                                                                        n = Z.VW.above(t, {
                                                                            match: (e) =>
                                                                                Z.VW.isInline(t, e) &&
                                                                                "applicationCommandOption" === e.type,
                                                                            mode: "lowest",
                                                                        }),
                                                                        i = n?.[0].optionName ?? null;
                                                                    return (
                                                                        e3({
                                                                            guildId: l.guild_id,
                                                                            channelId: l.id,
                                                                            command: u,
                                                                            activeOption: i,
                                                                            currentOptionValues: e,
                                                                            previousOptionValues: r,
                                                                            validateAll: !1,
                                                                            allowEmpty: !1,
                                                                        }),
                                                                        { commandId: o.id, optionValues: e }
                                                                    );
                                                                }
                                                                return null;
                                                            })({
                                                                editor: e,
                                                                storeCommandState: i,
                                                                channel: t,
                                                                canUseCommands: n,
                                                                canOnlyUseTextCommands: l,
                                                                commandChanged: i.activeCommand?.id !== p?.id,
                                                                previousOptionValues: g,
                                                            }),
                                                        );
                                                        if (null != a) {
                                                            let t = F.o.currentEntry(e);
                                                            null != t && (t.commandId = a.commandId),
                                                                (g = a.optionValues);
                                                        } else g = null;
                                                        (d = Z.VW.richValue(e)),
                                                            (h = e.selection),
                                                            (p = i.activeCommand),
                                                            (_ = s);
                                                    }
                                                }
                                                r();
                                            }),
                                            e
                                        );
                                    })(_, a, !0 === r, !0 === o)),
                                (_ = (function (e, t, n) {
                                    let { isInline: l, isVoid: i, onChange: s } = e;
                                    (e.isVoid = (e) => !!tS.has(e.type) || i(e)),
                                        (e.isInline = (e) => !!(tS.has(e.type) || tN.has(e.type)) || l(e));
                                    let a = null,
                                        r = !0;
                                    return (
                                        (e.onChange = () => {
                                            let l = Z.VW.richValue(e);
                                            (l !== a || e.previewMarkdown !== r) &&
                                                (F.o.withMergedEntry(e, () => {
                                                    Z.VW.withoutNormalizing(e, () => tw(e, t, n));
                                                }),
                                                (a = l),
                                                (r = e.previewMarkdown)),
                                                s();
                                        }),
                                        e
                                    );
                                })(_, a.guild_id, a.id)),
                                s.markdown?.disableBlockQuotes ||
                                    (_ = (function (e) {
                                        let { deleteBackward: t, deleteFragment: n, insertBreak: l, onChange: i } = e;
                                        (e.deleteBackward = (n) => {
                                            let l = Z.VW.getCurrentBlock(e);
                                            if (l?.[0].type === "blockQuote") {
                                                let t = Z.ZF.toPoint(e.selection);
                                                if (null != t && Z.PW.isFirstChild(l[1], t.path) && 0 === t.offset)
                                                    return void z.b.setNodes(e, { type: "line" }, { at: l[1] });
                                            }
                                            t(n);
                                        }),
                                            (e.deleteFragment = (t) => {
                                                if (null != e.selection) {
                                                    let [l, i] = Z.ZF.edges(e.selection),
                                                        s = [l.path[0]],
                                                        a = Z.VW.node(e, s),
                                                        r = [i.path[0]],
                                                        o = Z.PW.equals(s, r) ? null : Z.VW.node(e, r);
                                                    F.o.withSingleEntry(e, () => {
                                                        a?.[0].type === "blockQuote" &&
                                                            Z.Kh.isAtStart(l, a) &&
                                                            z.b.setNodes(e, { type: "line" }, { at: s }),
                                                            o?.[0].type === "blockQuote" &&
                                                                Z.Kh.isAtEnd(i, o) &&
                                                                z.b.setNodes(e, { type: "line" }, { at: r }),
                                                            n(t);
                                                    });
                                                    return;
                                                }
                                                n(t);
                                            }),
                                            (e.insertBreak = () => {
                                                let t = Z.VW.getCurrentBlock(e);
                                                if (t?.[0].type === "blockQuote") {
                                                    let n = Z.ZF.toPoint(e.selection);
                                                    if (null == n) return;
                                                    !(function (e, t, n) {
                                                        if (!Z.VW.isEmpty(e, t[0])) return !1;
                                                        let l = Z.VW.previous(e, { at: t[1] });
                                                        return (
                                                            null != l &&
                                                            !!Z.AS.isType(l[0], "blockQuote") &&
                                                            !!Z.VW.isEmpty(e, l[0]) &&
                                                            !!Z.Kh.isAtStart(n, t) &&
                                                            (z.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                                            z.b.removeNodes(e, { at: l[1] }),
                                                            !0)
                                                        );
                                                    })(e, t, n) && z.b.splitNodes(e, { at: n, always: !0 });
                                                    return;
                                                }
                                                l();
                                            });
                                        let s = null,
                                            a = !0;
                                        return (
                                            (e.onChange = () => {
                                                let t = Z.VW.richValue(e);
                                                (t !== s || e.previewMarkdown !== a) &&
                                                    (F.o.withMergedEntry(e, () => {
                                                        Z.VW.withoutNormalizing(e, () =>
                                                            (function (e) {
                                                                let t = !1;
                                                                for (let n of Z.VW.blocks(e)) {
                                                                    let [l, i] = n;
                                                                    if (!td.has(l.type)) continue;
                                                                    let s = { path: Z.PW.child(i, 0), offset: 0 };
                                                                    if (tc(e, s)) {
                                                                        "blockQuote" === l.type &&
                                                                            (z.b.setNodes(
                                                                                e,
                                                                                { type: "line" },
                                                                                { at: i },
                                                                            ),
                                                                            z.b.insertText(e, "> ", { at: s }));
                                                                        continue;
                                                                    }
                                                                    if (
                                                                        "blockQuote" === l.type ||
                                                                        Z.VW.areStylesDisabled(e)
                                                                    )
                                                                        continue;
                                                                    let a = l.children[0];
                                                                    if (!Z.l5.isText(a)) continue;
                                                                    let r = a.text.match(/^\s*>>> /),
                                                                        o = a.text.match(/^\s*> /);
                                                                    if (
                                                                        (null != o || null != r || t) &&
                                                                        (z.b.setNodes(
                                                                            e,
                                                                            { type: "blockQuote" },
                                                                            { at: i },
                                                                        ),
                                                                        !t)
                                                                    ) {
                                                                        let n = o?.[0].length ?? r?.[0].length ?? 0,
                                                                            l = Z.PW.child(i, 0);
                                                                        z.b.delete(e, {
                                                                            at: {
                                                                                anchor: { path: l, offset: 0 },
                                                                                focus: { path: l, offset: n },
                                                                            },
                                                                        }),
                                                                            (t = null != r);
                                                                    }
                                                                }
                                                            })(e),
                                                        );
                                                    }),
                                                    (s = t),
                                                    (a = e.previewMarkdown)),
                                                    i();
                                            }),
                                            e
                                        );
                                    })(_)),
                                s.markdown?.disableCodeBlocks ||
                                    (_ = (function (e) {
                                        let { onChange: t } = e,
                                            l = null,
                                            i = !1;
                                        return (
                                            (e.onChange = () => {
                                                Z.VW.richValue(e) !== l &&
                                                    (F.o.withMergedEntry(e, () => {
                                                        Z.VW.withoutNormalizing(e, () => {
                                                            ts(e) &&
                                                                null == tl &&
                                                                !i &&
                                                                ((i = !0),
                                                                (null == ti &&
                                                                    (ti = Promise.all([n.e("57036"), n.e("75134")])
                                                                        .then(n.bind(n, 981776))
                                                                        .then((e) => {
                                                                            tl = e.default;
                                                                        })
                                                                        .catch((e) => {
                                                                            throw ((ti = null), e);
                                                                        })),
                                                                ti)
                                                                    .then(() => {
                                                                        (l = null),
                                                                            F.o.withMergedEntry(e, () => {
                                                                                Z.VW.withoutNormalizing(e, () => ts(e));
                                                                            }),
                                                                            (l = Z.VW.richValue(e));
                                                                    })
                                                                    .catch(() => {})
                                                                    .finally(() => {
                                                                        i = !1;
                                                                    }));
                                                        });
                                                    }),
                                                    (l = Z.VW.richValue(e))),
                                                    t();
                                            }),
                                            e
                                        );
                                    })(_)),
                                d &&
                                    (_ = (function (e) {
                                        let { isInline: t, isVoid: n } = e;
                                        return (
                                            (e.isInline = (e) =>
                                                "testInline" === e.type || "testInlineVoid" === e.type || t(e)),
                                            (e.isVoid = (e) => "testInlineVoid" === e.type || n(e)),
                                            e
                                        );
                                    })(_)),
                                ((l = _).onKeyDown = (e) => {
                                    let t = l.isMac;
                                    switch (e.which) {
                                        case M.Ks6.B:
                                            if (!Z.VW.isEditorEmpty(l) && tE(e, { ctrl: !t, cmd: t }))
                                                return (0, tA.Px)(l, "bold"), !0;
                                            break;
                                        case M.Ks6.I:
                                            if (!Z.VW.isEditorEmpty(l) && tE(e, { ctrl: !t, cmd: t }))
                                                return (0, tA.Px)(l, "italics"), !0;
                                            break;
                                        case M.Ks6.U:
                                            if (!Z.VW.isEditorEmpty(l) && tE(e, { ctrl: !t, cmd: t }))
                                                return (0, tA.Px)(l, "underline"), !0;
                                            break;
                                        case M.Ks6.S:
                                            if (!Z.VW.isEditorEmpty(l) && tE(e, { ctrl: !t, cmd: t, shift: !0 }))
                                                return (0, tA.Px)(l, "strikethrough"), !0;
                                            break;
                                        case M.Ks6.TAB:
                                            if (null != l.selection && tE(e, { shift: null })) {
                                                let [t, n] = Z.ZF.edges(l.selection),
                                                    i = Z.VW.blocks(l).slice(t.path[0], n.path[0] + 1),
                                                    s = !0;
                                                for (let [e] of i)
                                                    if ("line" !== e.type || !e.codeBlockState?.isInCodeBlock) {
                                                        s = !1;
                                                        break;
                                                    }
                                                if (s) {
                                                    if (!e.shiftKey && Z.ZF.isCollapsed(l.selection))
                                                        return z.b.insertText(l, "  "), !0;
                                                    let t = !e.shiftKey;
                                                    return (
                                                        F.o.withSingleEntry(l, () => {
                                                            let e = l.selection?.anchor ?? Z.VW.start(l, []),
                                                                n = l.selection?.focus ?? Z.VW.end(l, []);
                                                            for (let [s, a] of i) {
                                                                let i = s.children[0];
                                                                if (!Z.l5.isText(i)) continue;
                                                                let r = Z.PW.child(a, 0),
                                                                    o = { path: r, offset: 0 };
                                                                if (t)
                                                                    z.b.insertText(l, "  ", { at: o }),
                                                                        Z.PW.equals(e.path, r) &&
                                                                            0 !== e.offset &&
                                                                            (e = { path: r, offset: e.offset + 2 }),
                                                                        Z.PW.equals(n.path, r) &&
                                                                            0 !== n.offset &&
                                                                            (n = { path: r, offset: n.offset + 2 });
                                                                else if (i.text.startsWith("  ")) {
                                                                    let t = { path: Z.PW.child(a, 0), offset: 2 };
                                                                    z.b.delete(l, { at: { anchor: o, focus: t } }),
                                                                        Z.PW.equals(e.path, r) &&
                                                                            (e = {
                                                                                path: r,
                                                                                offset: Math.max(0, e.offset - 2),
                                                                            }),
                                                                        Z.PW.equals(n.path, r) &&
                                                                            (n = {
                                                                                path: r,
                                                                                offset: Math.max(0, n.offset - 2),
                                                                            });
                                                                }
                                                            }
                                                            z.b.select(l, { anchor: e, focus: n });
                                                        }),
                                                        !0
                                                    );
                                                }
                                            }
                                            break;
                                        case M.Ks6.ARROW_LEFT:
                                        case M.Ks6.ARROW_RIGHT: {
                                            let n;
                                            if (tE(e, { shift: null })) n = "character";
                                            else if (tE(e, { ctrl: !t, alt: t, shift: null })) n = "word";
                                            else if (t && tE(e, { cmd: !0, shift: null })) return !1;
                                            else return !1;
                                            let i = l.children[l.selection?.focus?.path[0] ?? 0],
                                                s = "rtl" === t_()(Z.AS.string(i)),
                                                a = (e.which === M.Ks6.ARROW_LEFT) == !s;
                                            return (
                                                z.b.keyboardMove(l, {
                                                    reverse: a,
                                                    unit: n,
                                                    edge: e.shiftKey ? "focus" : void 0,
                                                }),
                                                !0
                                            );
                                        }
                                        case M.Ks6.A:
                                            if (t && tE(e, { ctrl: !0 }) && tI(l)) return !0;
                                            break;
                                        case M.Ks6.E:
                                            if (t && tE(e, { ctrl: !0 }) && tv(l)) return !0;
                                            break;
                                        case M.Ks6.HOME:
                                            if (tE(e, { shift: !1, ctrl: !1 }) && tI(l)) return !0;
                                            break;
                                        case M.Ks6.END:
                                            if (tE(e, { shift: !1, ctrl: !1 }) && tv(l)) return !0;
                                            break;
                                        case M.Ks6.BACKSPACE:
                                        case M.Ks6.DELETE:
                                        case M.Ks6.K:
                                            let n = e.which === M.Ks6.BACKSPACE;
                                            if (
                                                ((!t && e.which !== M.Ks6.K && tE(e, { ctrl: !0, shift: !0 })) ||
                                                    (t && e.which !== M.Ks6.K && tE(e, { cmd: !0 })) ||
                                                    (t && e.which === M.Ks6.K && tE(e, { ctrl: !0 }))) &&
                                                null != l.selection
                                            ) {
                                                let [e, t] = Z.ZF.edges(l.selection),
                                                    [i, s] = Z.VW.node(l, [n ? e.path[0] : t.path[0]]);
                                                if (
                                                    (tC()(
                                                        Z.VW.isBlock(l, i),
                                                        "Top-most node of selection is not a block",
                                                    ),
                                                    (n && !Z.Kh.isAtStart(e, [i, s])) ||
                                                        (!n && !Z.Kh.isAtEnd(t, [i, s])))
                                                )
                                                    return n ? l.deleteBackward("line") : l.deleteForward("line"), !0;
                                            }
                                    }
                                    return !1;
                                }),
                                (_ = (function (e, t) {
                                    let {
                                        apply: n,
                                        deleteBackward: l,
                                        deleteForward: i,
                                        deleteFragment: s,
                                        insertData: a,
                                        insertText: r,
                                        onChange: o,
                                    } = e;
                                    function c(n) {
                                        let l = F.o.currentEntry(e);
                                        if ((null != l && (l.mergeable = !1), n >= e.history.stack.length)) return;
                                        e.history.index = n;
                                        let i = F.o.currentEntry(e);
                                        t({ newValue: i.value, newSelection: i.selection });
                                    }
                                    (e.history = { index: 0, stack: [] }),
                                        (e.onChange = () => {
                                            let { history: t } = e;
                                            0 === t.stack.length && ((t.stack = [tf(e)]), (t.index = 0)),
                                                null != e.selection && (F.o.currentEntry(e).selection = e.selection),
                                                (d = null),
                                                o();
                                        }),
                                        (e.undo = () => {
                                            e.history.index > 0 && c(e.history.index - 1);
                                        }),
                                        (e.redo = () => {
                                            e.history.index < e.history.stack.length - 1 && c(e.history.index + 1);
                                        });
                                    let u = null,
                                        d = null,
                                        h = null;
                                    return (
                                        (e.apply = (t) => {
                                            let { history: l } = e;
                                            n(t);
                                            let i = Z.VW.richValue(e);
                                            i !== h &&
                                                (0 === l.stack.length && ((l.stack = [tf(e)]), (l.index = 0)),
                                                F.o.isSaving(e) &&
                                                    ((function (e, t, n) {
                                                        var l, i;
                                                        let s,
                                                            { selection: a } = e,
                                                            r = F.o.currentEntry(e),
                                                            o = !0,
                                                            c = !0;
                                                        if (
                                                            ("insert_text" === t.type && 1 === t.text.length
                                                                ? ((s = "insert"),
                                                                  (c = !(
                                                                      ("" === t.text || t.text.endsWith(" ")) &&
                                                                      n?.type === "insert_text" &&
                                                                      !("" === n.text && n.text.endsWith(" "))
                                                                  )))
                                                                : "split_node" === t.type
                                                                  ? (s = "insert")
                                                                  : "remove_text" === t.type && 1 === t.text.length
                                                                    ? (s = "delete")
                                                                    : ((s = "other"), (o = !1), (c = !1)),
                                                            "set_selection" === t.type && null != r)
                                                        ) {
                                                            r.selection = a;
                                                            return;
                                                        }
                                                        o &&
                                                        ((l = r),
                                                        (i = s),
                                                        !(l?.type !== i || Date.now() - l.createdAt >= 4e3))
                                                            ? F.o.insertOrMergeEntry(e, s, c)
                                                            : F.o.insertEntry(e, s, c);
                                                    })(e, t, u),
                                                    (u = t)),
                                                (d = t),
                                                (h = i));
                                        }),
                                        (e.deleteBackward = (t) => {
                                            F.o.withSingleEntry(e, () => l(t));
                                        }),
                                        (e.deleteForward = (t) => {
                                            F.o.withSingleEntry(e, () => i(t));
                                        }),
                                        (e.deleteFragment = (t) => {
                                            F.o.withSingleEntry(e, () => s(t));
                                        }),
                                        (e.insertText = (t) => {
                                            1 === t.length && d?.type === "remove_text"
                                                ? F.o.withMergedEntry(e, () => r(t))
                                                : null != e.selection && Z.ZF.isExpanded(e.selection)
                                                  ? F.o.withSingleEntry(e, () => r(t))
                                                  : r(t);
                                        }),
                                        (e.insertData = (t) => {
                                            d?.type === "remove_text"
                                                ? F.o.withMergedEntry(e, () => a(t))
                                                : F.o.withSingleEntry(e, () => a(t));
                                        }),
                                        e
                                    );
                                })(
                                    (_ = (function (e, t, n) {
                                        let { onChange: l } = e,
                                            i = !1,
                                            s = !1;
                                        return (
                                            (e.onChange = () => {
                                                if (i) {
                                                    s = !0;
                                                    return;
                                                }
                                                i = !0;
                                                try {
                                                    let e = 0;
                                                    do {
                                                        if (((s = !1), e++ >= 5)) break;
                                                        t?.();
                                                        try {
                                                            l();
                                                        } finally {
                                                            n?.();
                                                        }
                                                    } while (s);
                                                } finally {
                                                    i = !1;
                                                }
                                            }),
                                            e
                                        );
                                    })(
                                        (_ = (function (e) {
                                            let { apply: t, onChange: n } = e;
                                            return (
                                                (e.apply = (n) => {
                                                    t(n),
                                                        Z.Ot.isValid(e, e.selection) &&
                                                            (e.lastGoodSelection = e.selection);
                                                }),
                                                (e.onChange = () => {
                                                    if (
                                                        (Z.Ot.isValid(e, e.selection) ||
                                                            (e.selection = (function (e) {
                                                                let t;
                                                                if (Z.Ot.isValid(e, e.lastGoodSelection))
                                                                    t = e.lastGoodSelection;
                                                                else {
                                                                    let n = Z.VW.end(e, []);
                                                                    t = { anchor: n, focus: n };
                                                                }
                                                                return t;
                                                            })(e)),
                                                        null != e.selection)
                                                    ) {
                                                        let t,
                                                            n,
                                                            [l, i] = Z.ZF.edges(e.selection),
                                                            s = !1;
                                                        for (
                                                            ;
                                                            null != l &&
                                                            null != (t = Z.VW.getParentVoid(e, l)) &&
                                                            !e$.XR.includes(t[0].type);
                                                        )
                                                            (l = Z.VW.before(e, l, { unit: "offset" })), (s = !0);
                                                        for (
                                                            ;
                                                            null != i &&
                                                            null != (n = Z.VW.getParentVoid(e, i)) &&
                                                            !e$.XR.includes(n[0].type);
                                                        )
                                                            (i = Z.VW.after(e, i, { unit: "offset" })), (s = !0);
                                                        s &&
                                                            null != l &&
                                                            null != i &&
                                                            (Z.ZF.isForward(e.selection)
                                                                ? z.b.select(e, { anchor: l, focus: i })
                                                                : z.b.select(e, { anchor: i, focus: l }));
                                                    }
                                                    n();
                                                }),
                                                e
                                            );
                                        })(
                                            (_ = (function (e) {
                                                let { insertBreak: t, insertText: n } = e;
                                                return (
                                                    (e.insertBreak = () => {
                                                        tp(e) && t();
                                                    }),
                                                    (e.insertSoftBreak = () => {
                                                        e.insertBreak();
                                                    }),
                                                    (e.insertText = (t) => {
                                                        if (0 > t.indexOf("\r") && 0 > t.indexOf("\n"))
                                                            return void n(t);
                                                        let l = t.split(/\r\n|\r|\n/);
                                                        tp(e)
                                                            ? F.o.withSingleEntry(e, () => {
                                                                  let t = !1;
                                                                  for (let i of l)
                                                                      t && z.b.splitNodes(e, { always: !0 }),
                                                                          n(i),
                                                                          (t = !0);
                                                              })
                                                            : n(l.join(" "));
                                                    }),
                                                    e
                                                );
                                            })((_ = l))),
                                        )),
                                        h,
                                        p,
                                    )),
                                    (e) => {
                                        let { newValue: t, newSelection: n } = e;
                                        return g(_, "undo", { value: t, selection: n });
                                    },
                                ));
                        })({ ...e, editor: i, windowContext: t, previewMarkdown: l }),
                        i
                    );
                });
            return (
                i.useEffect(() => {
                    let e = () => s.onChange();
                    return (
                        f.A.addChangeListener(e),
                        eH.Ay.addChangeListener(e),
                        () => {
                            f.A.removeChangeListener(e), eH.Ay.removeChangeListener(e);
                        }
                    );
                }, [s]),
                i.useEffect(() => {
                    s.previewMarkdown !== l && ((s.previewMarkdown = l), s.onChange());
                }, [s, l]),
                s
            );
        })({
            channel: g,
            chatInputType: p,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            onChangeStart: i.useCallback(() => {
                eg.current = !1;
            }, []),
            onChangeEnd: i.useCallback(() => {
                eg.current = !0;
            }, []),
            updateState: eA,
        }),
        eI = i.useCallback(
            (e, t) => {
                let n = G.SQ(eE, e, g.id),
                    l = G.cd(e, g.guild_id, g.id, n, t);
                return { values: n, results: l };
            },
            [g.guild_id, g.id, eE],
        ),
        ev = i.useCallback(() => {
            let e,
                t = Z.VW.getNodesOfType(eE, ["timestampMentionInput"]),
                n = null != t ? [...t] : null,
                l = ee ? f.A.getActiveCommand(g.id) : null,
                i = !1;
            if (null != l && null != l.options) {
                let t = eI(l, !1);
                e = t.values;
                let n = G.O7(eE)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (l.options ?? []).find((t) => t.name === e));
                for (let e of l.options)
                    !e.required || e.name in t.values || (z.b.insertCommandOption(eE, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    z.b.selectCommandOption(eE, e.name),
                        (i = !0),
                        (0, U.zV)(M.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: l?.applicationId,
                            command_id: l?.rootCommand?.id,
                            argument_type: m.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    z.b.setNodes(eE, { error: !0 }, { at: t }), i || z.b.select(eE, Z.VW.end(eE, t)), (i = !0);
            if (i) {
                V._.dispatch(M.jej.SHAKE_APP, { duration: 200, intensity: 2 }), J?.();
                return;
            }
            q?.((0, eD.WO)(Z.VW.richValue(eE), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), l, e);
        }, [g.id, eE, q, J, eI, ee]);
    i.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eE,
            submit(e) {
                e?.preventDefault(), ev();
            },
            focus() {
                Z.VW.focus(eE);
            },
            blur() {
                B.rL.blur(eE);
            },
            getCurrentWord() {
                let e = eE.selection;
                if (null == e || !Z.Ot.isValid(eE, e) || Z.ZF.isExpanded(e) || tu(eE))
                    return { word: null, isAtStart: !1 };
                let [t, n] = Z.VW.node(eE, Z.PW.parent(e.anchor.path)),
                    [l, i] = Z.VW.node(eE, e.anchor.path),
                    s = e.anchor.offset;
                if (!Z.PW.hasPrevious(i) && Z.l5.isText(l)) {
                    let e = l.text.substring(0, s);
                    if (Z.AS.isType(t, "applicationCommand") && s < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let a = "",
                    r = !1;
                for (;;) {
                    if (--s < 0) {
                        if (!Z.PW.hasPrevious(i)) {
                            r = !0;
                            break;
                        }
                        [l, i] = Z.VW.node(eE, Z.PW.previous(i));
                    }
                    if (!Z.l5.isText(l)) break;
                    let e = l.text[s];
                    if (e$.ug.test(e)) break;
                    a = e + a;
                }
                let o = a,
                    c = e.anchor.offset,
                    [u] = Z.VW.node(eE, e.anchor.path);
                for (; Z.l5.isText(u) && !(c >= u.text.length); ) {
                    let e = u.text[c];
                    if (e$.ug.test(e)) break;
                    (o += e), c++;
                }
                return { word: a, fullWord: o, isAtStart: r && Z.PW.isFirstEditorBlock(n) };
            },
            getFirstText: () => Z.VW.getFirstText(eE)?.text ?? "",
            getCurrentCommandOption() {
                let e = G.M3(eE);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = G.M3(eE);
                if (null == e) return [];
                let t = f.A.getActiveCommand(g.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : G.FV(eE, n, e[0], g.id);
            },
            getCommandOptionValues() {
                let e = f.A.getActiveCommand(g.id);
                return null == e ? {} : G.SQ(eE, e, g.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                F.o.withSingleEntry(eE, () => {
                    let l = G.M3(eE),
                        i = null != l && tU(g, l[0]);
                    if (
                        (null != t && i && (z.b.removeInlineChildren(eE, l), (n = !1)), tV(eE, e, t, n), null != t && i)
                    ) {
                        let e = G.n$(eE);
                        if (((l = Z.cv.updateElement(eE, l)), null != e)) {
                            let t = Z.cv.markdown(e[0], g.guild_id);
                            tk(eE, l, g.id, t) && (l = Z.cv.updateElement(eE, l));
                        }
                        G.ke(eE, g.guild_id, g.id, Z.cv.updateElement(eE, l), !1), z.b.selectNextCommandOption(eE);
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: l = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                F.o.withSingleEntry(eE, () => {
                    let i = G.M3(eE),
                        s = null != i && tU(g, i[0]);
                    if (s) z.b.removeInlineChildren(eE, i), (n = !1);
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            z.b.delete(eE, { distance: e.length, unit: "character", reverse: !0 }),
                            l &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                z.b.delete(eE, { distance: t.length - e.length, unit: "character" });
                    }
                    tV(eE, e, t, n), s && z.b.selectNextCommandOption(eE);
                });
            },
            insertInlineAutocompleteInput(e) {
                F.o.withSingleEntry(eE, () => {
                    let { word: t } = this.getCurrentWord();
                    null != t && t.length > 0 && z.b.delete(eE, { distance: t.length, unit: "character", reverse: !0 }),
                        z.b.insertNodes(eE, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                F.o.withSingleEntry(eE, () => {
                    let l = Z.VW.getSelectedParentOfType(eE, [e]);
                    tC()(null != l, `Cannot replace inline input of type ${e} when none is selected`),
                        z.b.removeNodes(eE, { at: l[1] }),
                        tV(eE, t, n, !0);
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                F.o.withSingleEntry(eE, () => {
                    let e = t.animated ? "a" : "",
                        l = t.originalName ?? t.name ?? "";
                    tV(eE, `:${t.name}:`, null != t.id ? `<${e}:${l.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eE, g, ev],
    ),
        (s = i.useRef(null)),
        (r = i.useRef(null)),
        (o = i.useRef(null)),
        i.useLayoutEffect(() => {
            (r.current = tB(eE)),
                null == r.current &&
                    null == o.current &&
                    (o.current = setTimeout(() => {
                        r.current = tB(eE);
                    }, 100));
        }, [eE]),
        i.useEffect(() => {
            let e = o.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []),
        (c = i.useCallback(() => {
            let e = r.current;
            if (null == e) return;
            let t = e.offsetHeight;
            s.current !== t && (null != ep.current && (ep.current.style.height = `${t}px`), (s.current = t), w?.(t));
        }, [ep, w])),
        (0, tG.g)(r, c, [c, eE, w], tF),
        i.useLayoutEffect(() => {
            let e = B.rL.findDocumentOrShadowRoot(eE).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = tB(eE);
            null != t && ((s.current = t.offsetHeight), w?.(s.current));
        }, [ep, eE, w]);
    let { handleKeyDown: ey, handleKeyUp: eb } = (function (e) {
            let {
                editor: t,
                channel: n,
                disableEnterToSubmit: l,
                onKeyDown: s,
                onKeyUp: a,
                onTab: r,
                onEnter: o,
                allowNewLines: c,
                submit: u,
                hideAutocomplete: d,
                moveSelection: h,
            } = e;
            return {
                handleKeyDown: i.useCallback(
                    (e) => {
                        switch (e.which) {
                            case M.Ks6.ARROW_UP:
                                if (h(-1)) return void e.preventDefault();
                                break;
                            case M.Ks6.ARROW_DOWN:
                                if (h(1)) return void e.preventDefault();
                                break;
                            case M.Ks6.P:
                                if (tE(e, { ctrl: !0 }) && h(-1)) return void e.preventDefault();
                                break;
                            case M.Ks6.N:
                                if (tE(e, { ctrl: !0 }) && h(1)) return void e.preventDefault();
                                break;
                            case M.Ks6.ESCAPE:
                                d?.();
                                break;
                            case M.Ks6.TAB:
                                if (tE(e, {}) && r?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                if (null != f.A.getActiveCommand(n.id)) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? z.b.selectPreviousCommandOption(t)
                                            : z.b.selectNextCommandOption(t);
                                    return;
                                }
                                break;
                            case M.Ks6.ENTER:
                                if (tE(e, {}) && o?.(e)) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        e.key !== O.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (l && !e.ctrlKey) || tu(t)) && c) ||
                            (e.preventDefault(), e.stopPropagation(), u()),
                            s?.(e);
                    },
                    [c, n.id, l, t, d, h, o, s, r, u],
                ),
                handleKeyUp: i.useCallback(
                    (e) => {
                        a?.(e);
                    },
                    [a],
                ),
            };
        })({
            editor: eE,
            channel: g,
            disableEnterToSubmit: el,
            onKeyDown: P,
            onKeyUp: D,
            onTab: W,
            onEnter: K,
            allowNewLines: ei,
            submit: ev,
            hideAutocomplete: X,
            moveSelection: $,
        }),
        { handlePaste: eS, handleGlobalPaste: eN } =
            ((u = i.useCallback(
                (e) => {
                    if (eC) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = T(e);
                    return t && (e.preventDefault(), e.stopPropagation()), t;
                },
                [eC, T],
            )),
            (d = i.useCallback(
                (e) => {
                    let { event: t } = e;
                    u(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eE.insertData(t.clipboardData), Z.VW.focus(eE)));
                },
                [eE, u],
            )),
            { handlePaste: u, handleGlobalPaste: d }),
        ej = i.useCallback(
            (e) => {
                Y?.();
            },
            [Y],
        ),
        eT = i.useCallback(
            (e) => {
                e !== ef.current ? e_.current && j?.(null, (0, eD.WO)(e, { mode: "raw" }), e) : e_.current && Y();
            },
            [Y, j],
        );
    i.useLayoutEffect(() => {
        eg.current && ((ef.current = h), eA(eE, "parent", { value: h }));
    }, [eE, h, eA]),
        i.useEffect(() => {
            let e = () => {
                let e = f.A.getActiveCommand(g.id) ?? null;
                null !== e && null != e.options && eI(e, !0);
            };
            return _.A.addChangeListener(e), () => _.A.removeChangeListener(e);
        }, [g, eE, eI]);
    let eR = i.useCallback(
            (e) => [
                ...(function (e, t, n) {
                    if (Z.VW.areStylesDisabled(e)) return [];
                    let [l, i] = t;
                    if (1 !== i.length || !Z.AS.isInTypes(l, eV)) return eG;
                    let { entries: s, serializedChildren: a } = Z.cv.markdown(l, n, !0),
                        r = [];
                    for (let t = 0; t < s.length; t++) {
                        let n = s[t];
                        if (n.attributes.length > 0 && n.text.length > 0) {
                            let l = s[t - 1],
                                o = s[t + 1],
                                c = { anchor: eU(e, i, a, n.start), focus: eU(e, i, a, n.start + n.text.length) },
                                u = Z.VW.nodes(e, { at: c, mode: "lowest", voids: !1 }),
                                d = {};
                            for (let e of n.attributes)
                                if (((d[e] = !0), "syntaxBefore" === e && null != o))
                                    for (let e of o.attributes) d[`before_${e}`] = !0;
                                else if ("syntaxAfter" === e && null != l)
                                    for (let e of l.attributes) d[`after_${e}`] = !0;
                            for (let [t, n] of u) {
                                let t = { anchor: Z.VW.start(e, n), focus: Z.VW.end(e, n) };
                                Z.Kh.isBefore(t.anchor, c.anchor) && (t.anchor = c.anchor),
                                    Z.Kh.isAfter(t.focus, c.focus) && (t.focus = c.focus),
                                    r.push({ ...d, ...t });
                            }
                        }
                    }
                    return r;
                })(eE, e, g.guild_id),
                ...(function (e, t) {
                    if (Z.VW.areStylesDisabled(e)) return [];
                    let [n, l] = t,
                        i = [];
                    if (!Z.AS.isType(n, "line") || null == n.codeBlockState) return i;
                    let { hljsTypes: s, isStyledCodeBlockLine: a } = n.codeBlockState;
                    if (null == s || 0 === s.length || !a) return [];
                    for (let t of s) {
                        let s = n.children.map((e) => (Z.l5.isText(e) ? e.text : null));
                        i.push({ hljsTypes: t.types, anchor: eU(e, l, s, t.start), focus: eU(e, l, s, t.end) });
                    }
                    return i;
                })(eE, e),
                ...(function (e, t) {
                    if (Z.VW.areStylesDisabled(e)) return [];
                    let [n, l] = t,
                        i = [];
                    if (!Z.l5.isText(n)) return i;
                    let [s] = Z.VW.node(e, Z.PW.parent(l));
                    return (
                        Z.AS.isType(s, "applicationCommand") &&
                            n === s.children[0] &&
                            i.push({
                                anchor: { path: l, offset: 0 },
                                focus: { path: l, offset: 0 + s.command.displayName.length + 1 },
                                commandName: !0,
                            }),
                        i
                    );
                })(eE, e),
            ],
            [eE, g],
        ),
        eL = i.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: i, children: s, element: a } = t;
                    switch (a.type) {
                        case "applicationCommand":
                            let r = f.A.getActiveCommand(n),
                                o = 0,
                                c = 0;
                            if (null != r && r.id === a.command.id) {
                                let t = G.O7(e);
                                for (let e of r.options ?? []) t.includes(e.name) ? c++ : o++;
                            }
                            let u = {};
                            if (o > 0) {
                                let e;
                                (e =
                                    c > 0
                                        ? ex.intl.formatToPlainString(ex.t.BP8N0K, { count: o })
                                        : ex.intl.formatToPlainString(ex.t.lziVC9, { count: o })),
                                    (u["data-trailing-placeholder"] = e);
                            }
                            return (0, l.jsx)("div", { className: ew.uB, ...i, ...u, children: s });
                        case "applicationCommandOption":
                            return (0, l.jsx)(tW, { attributes: i, channelId: n, element: a, children: s });
                        default:
                            return null;
                    }
                })(eE, e, g.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "timestampMentionInput" === i.type
                                ? (0, l.jsx)(tK, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    t
                );
            },
            [g.id, eE],
        ),
        ek = i.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: i, text: s } = e;
                    if (i.commandName) {
                        let e = a()(ew.p6, { [ew.BI]: "" === s.text });
                        return (0, l.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(x.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: eN }),
            (0, l.jsx)("div", {
                ref: ep,
                className: a()(C, tz.pC),
                children: (0, l.jsx)(eP, {
                    id: A,
                    editor: eE,
                    channelId: g.id,
                    guildId: g.guild_id,
                    className: a()(tz.gf, N),
                    placeholder: b,
                    readOnly: eC,
                    spellCheck: Q,
                    autoFocus: !en,
                    canFocus: !v,
                    onChange: eT,
                    onFocus: L,
                    onBlur: k,
                    onClick: ej,
                    onPaste: eS,
                    onKeyDown: ey,
                    onKeyUp: eb,
                    decorate: eR,
                    renderExtraElement: eL,
                    renderExtraLeaf: ek,
                    "aria-owns": es,
                    "aria-haspopup": er,
                    "aria-expanded": ea,
                    "aria-activedescendant": eo,
                    "aria-controls": ec,
                    "aria-labelledby": eh,
                    "aria-describedby": ed,
                    "aria-invalid": eu,
                    "aria-autocomplete": em,
                    "aria-required": S,
                }),
            }),
        ],
    });
});
var tq = n(266599);
new g.A("ChannelEditor.tsx");
let tJ = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class tY extends i.Component {
    ref = i.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    constructor(e) {
        super(e),
            (this._unsubscribe = v.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = { focused: !1, submitting: !1, popup: v.Y0.getState() });
    }
    _getEditorWindow() {
        let e = this.ref?.current?.getSlateEditor?.()?.windowContext?.renderWindow;
        if (null == this._cachedEditorWindow || this._cachedEditorWindow !== e) {
            if (null != this._cachedEditorWindow && null == e) return null;
            this._cachedEditorWindow = e ?? window;
        }
        return this._cachedEditorWindow;
    }
    componentDidMount() {
        this.props.focused && requestAnimationFrame(() => this.focus()),
            document.addEventListener("selectionchange", this.handleSelectionChange),
            window.addEventListener("beforeunload", this.handleBeforeUnload),
            (this._initTimeoutId = setTimeout(() => void this._getEditorWindow(), 1e3));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, eD.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, I.x7)(e));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        this.saveCurrentText(),
            this._unsubscribe?.(),
            window.removeEventListener("beforeunload", this.handleBeforeUnload),
            document.removeEventListener("selectionchange", this.handleSelectionChange),
            (this._focusBlurQueue = null),
            (this._unsubscribe = null),
            (this._cachedEditorWindow = null),
            null != this._initTimeoutId && clearTimeout(this._initTimeoutId);
    }
    handleSelectionChange = () => {
        this.props.focused && this.props.onSelectionChanged(document.getSelection?.()?.toString());
    };
    focus = () => {
        this._focusBlurQueue?.then(() => {
            this.setState({ focused: !0 }, () => {
                let e = this.ref.current;
                null != e && e.focus();
            });
        });
    };
    blur() {
        let e = this.ref.current;
        null != e && e.blur();
    }
    submit(e) {
        this.ref.current?.submit(e);
    }
    insertEmoji(e) {
        let { emoji: t, willClose: n } = e,
            l = this.ref.current;
        null != t && null != l && (l.insertEmoji({ emoji: t, addSpace: n }), n && this.focus());
    }
    insertGIF(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e && null != n && (t.endsWith(" ") || n.insertText(" ", void 0, !1), n.insertText(e.url));
    }
    insertSound(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        null != e &&
            null != n &&
            (t.endsWith(" ") || n.insertText(" ", void 0, !1),
            n.insertText(`<sound:${e.guildId}:${e.soundId}>`, void 0, !0));
    }
    insertKaomoji(e) {
        let { textValue: t } = this.props,
            n = this.ref.current;
        if (null != e && null != n) {
            let l = t.length > 0 ? e.replace(/([_`´*])/g, "\\$1") : e;
            t.length > 0 && !t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(l, void 0, !0);
        }
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({ focused: !0, submitting: !1 }), u.A.saveDraft(e.id, "", t.drafts.type);
    }
    getCurrentWord() {
        let e = this.ref.current;
        return e?.getCurrentWord() ?? { word: null, isAtStart: !1 };
    }
    insertAutocomplete(e, t, n) {
        let l = this.ref.current;
        return l?.insertAutocomplete(e, t, n);
    }
    insertInlineAutocompleteElement(e) {
        let t = this.ref.current;
        return t?.insertInlineAutocompleteInput(e);
    }
    replaceInlineAutocompleteInput(e, t, n) {
        let l = this.ref.current;
        return l?.replaceInlineAutocompleteInput(e, t, n);
    }
    getCurrentCommandOption() {
        let e = this.ref.current;
        return e?.getCurrentCommandOption?.() ?? null;
    }
    getCurrentCommandOptionValue() {
        let e = this.ref.current;
        return e?.getCurrentCommandOptionValue?.() ?? [];
    }
    getCommandOptionValues() {
        let e = this.ref.current;
        return e?.getCommandOptionValues?.() ?? {};
    }
    getFirstText() {
        let e = this.ref.current;
        return e?.getFirstText() ?? null;
    }
    getSlateEditor() {
        let e = this.ref.current;
        return e?.getSlateEditor?.() ?? null;
    }
    fixFocus(e) {
        e.focused && !this.props.focused ? this.blur() : !e.focused && this.props.focused && this.focus();
    }
    appendText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        this.ref.current?.insertText(e, t, n);
    }
    saveCurrentText = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                { type: n, channel: l } = e.props;
            n.drafts.autoSave && (t && e.saveCurrentTextThrottled.cancel(), e.handleSaveCurrentText(l.id));
        };
    })();
    handleBeforeUnload = () => this.saveCurrentText();
    saveCurrentTextThrottled = o().throttle(this.saveCurrentText.bind(this, !1), 500);
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: l } = this.props;
        return e && !n ? (l ? "" : ex.intl.string(ex.t.IYKTTc)) : t;
    }
    handleEnter = (e) => this.props.onEnter?.(e);
    handleTab = () => this.props.onTab?.();
    handleMoveSelection = (e) => this.props.onMoveSelection?.(e);
    maybeShowAutocomplete = () => this.props.onMaybeShowAutocomplete?.();
    hideAutocomplete = () => this.props.onHideAutocomplete?.();
    render() {
        let {
                textValue: e,
                richValue: t,
                disabled: n,
                onChange: i,
                onKeyDown: s,
                onResize: r,
                onSubmit: o,
                onSubmitFailure: u,
                channel: d,
                type: h,
                useSlate: m,
                spellcheckEnabled: p,
                useNewSlashCommands: f,
                canOnlyUseTextCommands: g,
                className: _,
                id: C,
                required: A,
                maxCharacterCount: v,
                allowNewLines: y,
                "aria-describedby": b,
                "aria-labelledby": S,
                accessibilityLabel: N,
                showValueWhenDisabled: j,
            } = this.props,
            { submitting: T, popup: w } = this.state,
            R = {
                channel: d,
                className: a()(_, tq.Tg, { [tq.w5]: m, [tq.Rr]: n || T }),
                id: C,
                placeholder: this.getPlaceholder(),
                required: A,
                accessibilityLabel: N,
                disabled: n || !1,
                submitting: T,
                isEdit: h === E.oU.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: y,
                onChange: i,
                onResize: r,
                onKeyDown: s,
                onSubmit: o,
                textAreaPaddingClassName: a()({
                    [tq.H$]: h === E.oU.CREATE_FORUM_POST,
                    [tq.g_]: h === E.oU.CUSTOM_GIFT,
                    [tq.Yg]: h === E.oU.USER_PROFILE,
                    [tq.$$]: h === E.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: p,
                useNewSlashCommands: f,
                disableAutoFocus: c.Fr || (h.disableAutoFocus ?? !1),
                disableEnterToSubmit: h.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": w.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== w.id || void 0,
                "aria-activedescendant": w.activeDescendant ?? void 0,
                "aria-invalid": e.length > v,
                "aria-describedby": b,
                "aria-labelledby": S,
                "aria-autocomplete": "list",
            },
            L = m
                ? (0, l.jsx)(tZ, {
                      ref: this.ref,
                      ...R,
                      type: h,
                      value: n && !j ? (0, I.x7)("") : t,
                      canUseCommands: h.commands?.enabled,
                      canOnlyUseTextCommands: g,
                      onSubmitFailure: u,
                  })
                : (0, l.jsx)(D, { ref: this.ref, ...R, value: n && !j ? "" : e });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(x.EG, { event: M.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, l.jsx)(x.EG, { event: M.jej.CLEAR_TEXT, handler: this.handleClearText }),
                L,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        u.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, I.x7)(""));
    };
    handleInsertText = (e) => {
        let { plainText: t, rawText: n, addSpace: l = !1 } = e;
        this.props.disabled || (this.appendText(t, n, l), this.focus());
    };
    handleFocus = (e) => {
        let { onFocus: t } = this.props,
            { focused: n } = this.state;
        t?.(e), n || this.setState({ focused: !0 });
    };
    handleBlur = (e) => {
        let { onBlur: t } = this.props,
            { focused: n } = this.state;
        t?.(e), n && this.setState({ focused: !1 });
    };
    handlePaste = (e) => {
        let t,
            n = e.target?.ownerDocument?.defaultView,
            {
                channel: l,
                canPasteFiles: i,
                uploadPromptCharacterCount: s,
                promptToUpload: a,
                maxCharacterCount: r,
                type: o,
            } = this.props,
            c =
                null != n
                    ? (function (e) {
                          if (null == e) return null;
                          let t = (0, N.Q2)(e);
                          return null == t ? null : j(t);
                      })(n)
                    : null,
            u = null == (t = S.A.getFocusedWindowId()) ? null : j(t),
            g = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, N.Q2)(e);
                return n === (0, N.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (c ?? u ?? l)
                : l;
        if (null == a || (!g.isPrivate() && !i) || (g.isPrivate() && g.isManaged())) return !1;
        let { files: x, errors: E } = (function (e, t) {
            let n = [],
                l = [],
                i = null,
                s = null,
                a = [];
            for (let t of e.items)
                if ("file" === t.kind) {
                    let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
                    if (null != e && !1 === e.isFile) {
                        a.push({ item: t, error: "is_directory" });
                        continue;
                    }
                    let i = t.getAsFile();
                    if (null == i) continue;
                    null != i.path && i.path.length > 0 ? n.push(i) : l.push(i);
                } else
                    "string" === t.kind &&
                        ("text/plain" === t.type && null == i
                            ? (i = t)
                            : "text/html" === t.type && null == s && (s = t));
            if (n.length > 0) return { files: n, errors: a };
            if (l.length > 0) {
                if (1 === l.length && "image/png" === l[0].type && null != s) {
                    let t = l[0],
                        n =
                            (function (e) {
                                let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                                if (null != t) {
                                    let e;
                                    try {
                                        let { pathname: n } = new URL(t.src);
                                        null != n && n.length > 0 && (e = (0, A.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(s.type)) ?? t.name;
                    return { files: [(0, C.VE)(t, n, t.type)], errors: a };
                }
                return { files: l, errors: a };
            }
            if (null != i && null != t) {
                let n = e.getData(i.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, C.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: a };
                }
            }
            return { files: [], errors: a };
        })(e.clipboardData, o.uploadLongMessages ? (s ?? r) : null);
        return (tJ(
            "onPaste",
            [...e.clipboardData.items].map((e) => {
                if ("file" !== e.kind) return { kind: e.kind, type: e.type };
                {
                    let t = e.getAsFile();
                    return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
                }
            }),
        ),
        0 === x.length)
            ? (E?.some((e) => {
                  let { error: t } = e;
                  return "is_directory" === t;
              }) &&
                  (0, h.openUploadError)({ title: ex.intl.string(ex.t.azO1Pe), help: ex.intl.string(ex.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              ((e) => {
                  let t = f.A.getActiveCommand(g.id);
                  if (null == t) return a(e, g, o.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = o.drafts.commandType ?? o.drafts.type,
                      l = null,
                      i = f.A.getActiveOption(g.id);
                  null !=
                      (l =
                          i?.type === m.n4.ATTACHMENT
                              ? i
                              : t.options?.find((e) => {
                                    if (e.type === m.n4.ATTACHMENT) return null == _.A.getUpload(g.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: g.id,
                          id: l.name,
                          draftType: n,
                          file: { id: l.name, platform: p.xz.WEB, file: e[0] },
                      });
              })(x),
              this.focus(),
              !0);
    };
}
