"use strict";
let i;
n.d(t, { A: () => nt }), n(321073), n(323874), n(14289), n(35956);
var r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(735438),
    u = n.n(l),
    c = n(607399),
    d = n(465532),
    _ = n(608299),
    f = n(494921),
    h = n(155718),
    p = n(565150),
    E = n(861382),
    m = n(626584),
    g = n(522602),
    A = n(234320),
    I = n(453771),
    T = n(741394),
    S = n(355622),
    N = n(408018),
    y = n(579940),
    C = n(734057),
    v = n(222823),
    O = n(531685),
    R = n(365971);
function b(e) {
    let t = v.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (C.A.getChannel(t) ?? null);
}
var D = n(826745),
    L = n(442433),
    w = n(721768),
    M = n(723702),
    P = n(677134),
    x = n(652215),
    U = n(650583);
let k = /(\t|\s)/;
class G extends s.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
        this.props.disableAutoFocus ||
            (Promise.resolve().then(() => {
                let { value: e } = this.props;
                this._ref?.setSelection(e.length, e.length);
            }),
            this.focus()),
            null != E.A.getActiveCommand(this.props.channel.id) &&
                w.Gf({ channelId: this.props.channel.id, command: null, section: null });
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
            i = e.selectionEnd;
        for (; n > 0 && !k.test(t[n - 1]); ) n--;
        let r = e.selectionEnd;
        for (; r < t.length && !k.test(t[r]); ) r++;
        return { word: t.slice(n, i), fullWord: t.slice(n, r), isAtStart: 0 === n };
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
        let { addSpace: n = !0, replaceFullWord: i = !1 } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { word: r, fullWord: s } = this.getCurrentWord();
        if (null == r) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let a = t.value.slice(0, t.selectionStart - r.length),
                o = i && null != s ? s.length - r.length : 0,
                l = t.value.slice(t.selectionEnd + o);
            this._insertText(e, a, l, n);
        }
    }
    insertInlineAutocompleteInput(e) {}
    replaceInlineAutocompleteInput(e, t, n) {}
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = this._ref;
        if (null == i) return;
        let r = i.value.slice(0, i.selectionStart),
            s = i.value.slice(i.selectionEnd);
        this._insertText(e, r, s, n);
    }
    _insertText(e, t, n, i) {
        if (null == this._ref) return;
        i && (e += " ");
        let r = t + e + n,
            { onChange: s } = this.props;
        s?.(null, r, (0, N.x7)(r));
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
            className: a,
            id: l,
            submitting: u,
            textAreaPaddingClassName: c,
            spellcheckEnabled: d,
            "aria-controls": _,
            "aria-expanded": f,
            "aria-activedescendant": h,
        } = this.props;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(A.EG, { event: x.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, r.jsx)(D.y, {
                    ref: this.handleSetRef,
                    className: o()(a, c),
                    id: l,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || u,
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
                    "aria-controls": _,
                    "aria-expanded": f,
                    "aria-activedescendant": h,
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
            e.key === U.dh.ENTER &&
            !e.shiftKey &&
            !this.hasOpenCodeBlock() &&
            (!this.props.disableEnterToSubmit || e.ctrlKey)
        )
            return e.preventDefault(), this.props.onSubmit(this.props.value);
    };
    handleKeyDown = (e) => {
        switch (e.which) {
            case x.Ks6.ARROW_DOWN:
                this.props.moveSelection(1) && e.preventDefault();
                break;
            case x.Ks6.N:
                e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                break;
            case x.Ks6.ARROW_UP:
                this.props.moveSelection(-1) && e.preventDefault();
                break;
            case x.Ks6.P:
                e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                break;
            case x.Ks6.TAB:
            case x.Ks6.ENTER:
                this.handleTabOrEnterDown(e);
        }
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
    handleTabOrEnterDown(e) {
        (e.key === U.dh.TAB && this.props.onTab()) || (e.key === U.dh.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.key === U.dh.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.key === U.dh.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.key) {
            case U.dh.ARROW_RIGHT:
            case U.dh.ARROW_LEFT:
            case U.dh.HOME:
            case U.dh.END:
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
        M.isPlatformEmbedded &&
            (0, L.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("30803"), n.e("42312")]).then(n.bind(n, 216603));
                    return (t) => (0, r.jsx)(e, { ...t, text: (0, P.u)() });
                },
                { align: "bottom", enableSpellCheck: !0 },
            );
    };
    handleOnChange = (e) => {
        let { onChange: t, allowNewLines: n } = this.props,
            i = e.currentTarget.value,
            r = n ? i : i.replace("\n", "");
        t?.(e, r, (0, N.x7)(r));
    };
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText(`:${t.name}:`, void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
}
var F = n(95561),
    V = n(625494),
    B = n(317681),
    H = n(186306),
    j = n(670482),
    Y = n(267102),
    W = n(38405),
    K = n(654821),
    z = n(35277),
    $ = n(820066),
    q = n(112107),
    Z = n(17928),
    X = n(990078),
    Q = n(778712),
    J = n(939249),
    ee = n(545442),
    et = n(565645),
    en = n(730134),
    ei = n(775602),
    er = n(47167),
    es = n(376943),
    ea = n(465365),
    eo = n(78390),
    el = n(785562),
    eu = n(332173),
    ec = n(37632),
    ed = n(967144);
n(209932);
var e_ = n(317525),
    ef = n(994500),
    eh = n(351906),
    ep = n(287809),
    eE = n(871237),
    em = n(562153),
    eg = n(427262),
    eA = n(375708),
    eI = n(178259);
function eT(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(X.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(et.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function eS(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(X.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, r.jsx)(et.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function eN(e) {
    let { text: t } = e;
    return (0, r.jsx)(eu.A, { children: t });
}
function ey(e) {
    let { id: t, guildId: n, channelId: i } = e,
        s = (0, Z.bG)([ep.default], () => ep.default.getUser(t)),
        a = (0, Z.bG)([eh.A], () => eh.A.hidePersonalInformation),
        o = em.Ay.useName(n, i, s),
        l = (0, r.jsx)(eu.A, { children: null == o ? `<@${t}>` : `@${o}` });
    if (null != s) {
        let e = a || s.hasUniqueUsername() ? null : `#${s.discriminator}`;
        return (0, r.jsx)(X.m, {
            __unsupportedReactNodeAsText: (0, r.jsxs)("div", {
                className: eI.fX,
                children: [
                    (0, r.jsx)(en.A, { user: s, animate: !0, size: Q._3.SIZE_16, className: eI.my }),
                    eg.Ay.getUserTag(s, { mode: "username", identifiable: a ? "never" : "always" }),
                    (0, r.jsx)("span", { className: eI.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": eg.Ay.getUserTag(s, { decoration: "never" }),
            asContainer: !0,
            children: (0, r.jsx)(J.D, { tag: "span", children: l }),
        });
    }
    return l;
}
function eC(e) {
    let { id: t, guildId: n } = e,
        i = (0, Z.bG)([e_.A], () => (null != n ? e_.A.getRole(n, t) : void 0)),
        s = (0, Z.bG)([ei.A], () => ei.A.roleStyle),
        a = (0, ed.X_)(n, i, i?.colorStrings);
    if (null == i) return (0, r.jsxs)("span", { children: ["@", eA.intl.string(eA.t["YV4F/n"])] });
    let o = null != i.color && 0 !== i.color,
        l = "username" === s && o;
    return (0, r.jsxs)(eu.A, {
        color: l ? i.color : null,
        roleColors: l ? a : null,
        children: [
            "dot" === s && (0, r.jsx)(ee.W, { color: i.colorString, colors: a, background: !1, tooltip: !1 }),
            "@",
            i.name,
        ],
    });
}
function ev(e) {
    let { id: t } = e,
        n = (0, Z.bG)([C.A], () => C.A.getChannel(t)),
        i = eA.intl.string(eA.t.zLZPmk).toLowerCase(),
        s = "text",
        a = !0;
    return (null != n &&
        ((i = (0, es.nc)(n) ? (0, er.m1)(n, ep.default, ef.A) : eA.intl.string(eA.t["/YzI63"])),
        (s = (0, es.nc)(n) ? ((0, eE.QG)(n) ?? "text") : "locked"),
        (a = (0, ea.Y)(n.type))),
    a)
        ? (0, r.jsx)(eu.A, { iconType: s, children: i })
        : (0, r.jsx)("span", { children: "#" + i });
}
function eO(e) {
    let { id: t, itemId: n, guildId: i } = e,
        s = (0, eo.Q)(t),
        a = (0, eo.f)(t, n, i);
    return (0, r.jsxs)(eu.A, { iconType: t, children: [s, null != a && (0, r.jsx)(ec.A, {}), a] });
}
function eR(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(eu.A, { children: [t, "(", n, ")"] });
}
function eb(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)(el.A, { node: t, className: "R" === t.format ? eI.gS : null });
}
var eD = n(571898),
    eL = n(494715),
    ew = n(766184);
let eM = {
    strong: eD.bold,
    em: eD.italics,
    u: eD.underline,
    s: eD.strikethrough,
    inlineCode: eD.inlineCode,
    link: eD.fakeLink,
    url: eD.fakeLink,
    autolink: eD.fakeLink,
    silentPrefix: eD.fakeLink,
    spoiler: o()(ew.ur, ew.F0, ew.kx, eD.spoiler),
    staticRouteLink: eD.fakeLink,
    syntaxBefore: eD.syntaxBefore,
    syntaxAfter: eD.syntaxAfter,
    codeBlockText: eD.codeBlockText,
    codeBlockSyntax: eD.codeBlockSyntax,
    codeBlockLang: eD.codeBlockLang,
    subtext: eD.subtext,
};
var eP = n(992595);
let ex = (e) => {
    let { className: t, attributes: n, children: i } = e,
        s = o()(eL.S0, eL.Cj, t);
    return (0, r.jsx)("span", { ...n, className: s, contentEditable: !1, children: i });
};
var eU = n(422404);
class ek extends s.PureComponent {
    containerRef = s.createRef();
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
            $.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, N.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: $.VW.richValue(e.editor), showPlaceholder: !1 });
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
            { attributes: s, children: a } = e;
        "rtl" === s.dir && (s.style = { ...s.style, textAlign: "right" });
        let l =
            i?.(e) ??
            (function (e, t, n) {
                let { attributes: i, children: s, element: a, decorations: l } = e,
                    u = Object.entries(l?.[0] ?? {})
                        .filter((e) => {
                            let [t] = e;
                            return "anchor" !== t && "focus" !== t;
                        })
                        .map((e) => {
                            let [t, n] = e;
                            return !0 === n && t in eM ? eM[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (a.type) {
                    case "line":
                        if (a.codeBlockState?.isInCodeBlock)
                            return (0, r.jsx)("div", {
                                className: eD.codeLine,
                                spellCheck: null == a.codeBlockState || null == a.codeBlockState.lang,
                                ...i,
                                children: s,
                            });
                        return (0, r.jsx)("div", { ...i, children: s });
                    case "blockQuote": {
                        let e = o()(eP.h, eP.MN);
                        return (0, r.jsxs)("div", {
                            ...i,
                            className: e,
                            children: [
                                (0, r.jsx)("span", { contentEditable: !1, className: eP.r }),
                                (0, r.jsx)("blockquote", { children: s }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(eT, { emoji: a.emoji }), s],
                        });
                    case "customEmoji":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(eS, { emoji: a.emoji }), s],
                        });
                    case "textMention":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(eN, { text: a.name }), s],
                        });
                    case "userMention":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(ey, { id: a.userId, channelId: n, guildId: t }), s],
                        });
                    case "roleMention":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(eC, { id: a.roleId, guildId: t }), s],
                        });
                    case "channelMention":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(ev, { id: a.channelId }), s],
                        });
                    case "staticRouteLink":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(eO, { id: a.id, itemId: a.itemId, guildId: t }), s],
                        });
                    case "soundboard":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(q.LF, { soundId: a.soundId }), s],
                        });
                    case "commandMention":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(eR, { text: a.commandName, id: a.commandId }), s],
                        });
                    case "timestamp":
                        return (0, r.jsxs)(ex, {
                            attributes: i,
                            className: u,
                            children: [(0, r.jsx)(eb, { timestamp: a.parsed }), s],
                        });
                    default:
                        return null;
                }
            })(e, t, n);
        return null != l ? l : (0, r.jsx)("div", { ...s, children: a });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: i, children: s } = e,
            a =
                n?.(e) ??
                (function (e, t) {
                    let n,
                        { attributes: i, children: s, leaf: a, text: l } = t,
                        u = !1,
                        [c] = $.VW.node(e, $.PW.parent($.VW.findPath(e, l)));
                    switch ($.VW.isEditor(c) ? "editor" : c.type) {
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
                                            return [eD[t]];
                                        if (t in eM) return [eM[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = o()(e, { [eD.syntaxOverride]: "||" === a.text || "\\" === a.text });
                        }
                    }
                    return (
                        (n = o()(n, { [eL.BI]: "" === l.text })),
                        (0, r.jsx)("span", { ...i, className: n, spellCheck: u, children: s })
                    );
                })(t, e);
        return null != a ? a : (0, r.jsx)("span", { ...i, children: s });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = $.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.($.VW.richValue(e)),
            !1 === this.props.canFocus)
        ) {
            let t = j.rL.findDocumentOrShadowRoot(e).getSelection();
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
            n = j.rL.findDocumentOrShadowRoot(t).getSelection(),
            i = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            r = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == r && (r = i), null != r)
            ) {
                let n = $.VW.toSlateRange(t, r, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    ($.ZF.isExpanded(n)
                        ? H.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
                let n = $.VW.toSlateRange(t, i, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    $.ZF.isExpanded(n) &&
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
        let n = null != e.selection && $.ZF.isCollapsed(e.selection) ? $.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && $.ZF.isCollapsed(e.selection)
                    ? $.VW.above(e, { at: n[1], match: (t) => $.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            $.VW.isEditorEmpty(e))
        ) {
            z.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let i = j.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            r = (i?.rangeCount ?? 0) > 0 ? i?.getRangeAt(0) : null;
        if (null == (null != r ? $.VW.toSlateRange(e, r, { exactMatch: !0, suppressThrow: !0 }) : null) && null != r) {
            let t = $.VW.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? z.b.select(e, t) : z.b.select(e, $.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && $.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = $.AS.leaf(t, e);
            $.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                z.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), $.VW.insertText(t, e);
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
            r = j.rL.findDocumentOrShadowRoot(this.props.editor),
            s = r.getElementById("textarea-context"),
            a = r.getElementById("slate-toolbar");
        if (null != i && !(0, K.hasDomParent)(i, s) && !(0, K.hasDomParent)(i, a)) {
            let e = j.rL.findDocumentOrShadowRoot(t).getSelection();
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
                if ((0, K.hasDomParent)(r, t) || (!(0, K.isDOMRangeCollapsed)(r, a, s, o) && (0, K.hasDomParent)(s, t)))
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
                if ((0, K.hasDomParent)(a, t)) {
                    if (i) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    i = !0;
                }
                if (!(0, K.isDOMRangeCollapsed)(a, l, o, u))
                    if ((0, K.hasDomParent)(a, t)) {
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
            i = e.pageY,
            s = window.innerHeight;
        if (M.isPlatformEmbedded) {
            let a = (0, Y.zd)();
            (0, L.L3)(
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
                    return (n) => (0, r.jsx)(e, { ...n, editor: t, text: $.VW.getSelectedText(t, !0) });
                },
                {
                    align: null != i && null != s && i < s / 2 ? "top" : "bottom",
                    enableSpellCheck: a === x.BRT.APP,
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
            canFocus: i,
            autoFocus: s,
            placeholder: a,
            decorate: l,
            channelId: u,
            guildId: c,
            onChange: d,
            onFocus: _,
            onBlur: f,
            onKeyDown: h,
            onKeyUp: p,
            renderExtraElement: E,
            renderExtraLeaf: m,
            ...g
        } = this.props;
        return (0, r.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, r.jsx)("div", { className: o()(eU.q, t), "aria-hidden": !0, children: a })
                    : null,
                (0, r.jsx)(j.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, r.jsx)(j.Fo, {
                        ...g,
                        className: o()(eP.PT, eU.E, t),
                        decorate: l,
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
                        "aria-label": a,
                        "aria-multiline": !0,
                    }),
                }),
            ],
        });
    }
}
var eG = n(323350);
function eF(e, t, n, i) {
    let r = 0;
    for (let s = 0; s < n.length; s++) {
        let a = n[s];
        if (null == a) continue;
        let o = r + a.length;
        if (i <= o) {
            let n = $.PW.child(t, s),
                a = $.VW.node(e, n)[0];
            if ($.l5.isText(a)) return { path: n, offset: Math.min(Math.max(i - r, 0), a.text.length) };
        }
        r = o;
    }
    let s = n.length - 1;
    return { path: $.PW.child(t, s), offset: n[s]?.length ?? 0 };
}
let eV = new Set(["line", "blockQuote"]),
    eB = [];
var eH = n(143236),
    ej = n(154283),
    eY = n(264322),
    eW = n(885386);
n(667532);
var eK = n(485845),
    ez = n(459016),
    e$ = n(842209),
    eq = n(392054),
    eZ = n(168186),
    eX = n(203779),
    eQ = n(649671),
    eJ = n(551483);
n(827669);
let e0 = new Set(["applicationCommandOption"]),
    e1 = new Set([h.n4.ATTACHMENT]),
    e2 = new Set(["line", "applicationCommand"]);
function e3(e, t, n, i) {
    let [r] = $.VW.blocks(e)[0],
        s = (i ? (0, eG.IQ)(r, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        a = [s.length - 1];
    for (let [, t] of (z.b.insertNodes(e, s, { at: eJ.Xg }), $.VW.blocks(e).reverse()))
        $.PW.isAfter(t, a) && z.b.removeNodes(e, { at: t, voids: !0 });
    null != n && w.Gf({ channelId: t, command: null, section: null });
}
function e6(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        e1.has(t.options[0].type) ||
        B.O7(e).length > 0 ||
        null == B.n$(e)
    )
        return !1;
    let n = $.VW.getFirstText(e);
    if (null == n) return !1;
    let i = t.options[0],
        r = { path: eJ.fP, offset: t.displayName.length + 2 },
        s = { path: eJ.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || $.Kh.equals(r, s)) &&
        (z.b.textToInline(
            e,
            {
                type: "applicationCommandOption",
                optionName: i.name,
                optionDisplayName: i.displayName,
                optionType: i.type,
                children: [{ text: n.text.substring(t.displayName.length + 2) }],
            },
            { anchor: r, focus: s },
        ),
        !0)
    );
}
function e4(e) {
    let {
        guildId: t,
        channelId: n,
        command: i,
        activeOption: r,
        currentOptionValues: s,
        previousOptionValues: a,
        validateAll: o,
        allowEmpty: l,
    } = e;
    if (null == i.options) return !1;
    let u = o ? null : E.A.getActiveOptionName(n),
        c = {},
        d = E.A.getOptionStates(n),
        _ = !1;
    for (let e of i.options) {
        let i = d[e.name],
            f =
                o ||
                (e.name === u && u !== r) ||
                (i?.lastValidationResult?.success === !1 && s?.[e.name] !== a?.[e.name]),
            h = {
                hasValue: null != s && e.name in s,
                isActive: e.name === r,
                lastValidationResult: f
                    ? (0, eX.J)({
                          option: e,
                          content: s?.[e.name] ?? null,
                          guildId: t,
                          channelId: n,
                          allowEmptyValues: l,
                      })
                    : i?.lastValidationResult,
            };
        (null == i ||
            i.hasValue !== h.hasValue ||
            i.isActive !== h.isActive ||
            (f && i.lastValidationResult?.success === !1)) &&
            ((c[e.name] = h), (_ = !0));
    }
    _ && w.H2(n, c);
}
function e5(e) {
    let t = B.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        i = n.children[0];
    return $.l5.isText(i) ? { command: n.command, commandText: i.text } : { command: n.command, commandText: null };
}
function e7(e, t) {
    let n = B.O7(e)[0];
    t();
    let i = $.ZF.toPoint(e.selection);
    if (null == i || n === B.O7(e)[0]) return;
    let { command: r, commandText: s } = e5(e);
    !(null == r || null == s || s.endsWith(" ")) &&
        $.Kh.equals(i, { path: eJ.fP, offset: r.displayName.length + 1 }) &&
        z.b.insertText(e, " ");
}
function e8(e, t, n) {
    let i = e.activeCommand?.options?.find((e) => e.name === n),
        r = e.initialValues[n];
    if (null == i || null == r) return null;
    if (null != i.choices) return i.choices.find((e) => e.value === r.value)?.displayName;
    let s = r.value?.toString();
    return i.type === h.n4.CHANNEL || (i.type === h.n4.MENTIONABLE && null != C.A.getChannel(s))
        ? `<#${s}>	`
        : i.type === h.n4.USER || (i.type === h.n4.MENTIONABLE && null != ep.default.getUser(s))
          ? `<@${s}>`
          : i.type === h.n4.ROLE || (i.type === h.n4.MENTIONABLE && null != e_.A.getRole(t.guild_id, s ?? x.dJq))
            ? `<@&${s}>`
            : s;
}
var e9 = n(635377),
    te = n.n(e9),
    tt = n(941426),
    tn = n(730296);
let ti = new Map(),
    tr = new Map(),
    ts = new Set();
function ta(e) {
    let t = ti.get(e);
    if (null != t) return t;
    if (!(e in tn.pb)) {
        let t = Promise.resolve(null);
        return ti.set(e, t), t;
    }
    return (
        (t = (null == i && (i = (0, tn.A)()), i)
            .then((t) => t.loadGrammar(tn.pb[e]))
            .then((t) => {
                for (let n of (tr.set(e, t), ts)) n(e);
                return t;
            })),
        ti.set(e, t),
        t
    );
}
var to = n(157941),
    tl = n(768947),
    tu = n(927813),
    tc = n(618559);
let td = new tt.Vy("withCodeBlocks"),
    t_ = new Set(["line"]),
    tf = /^[a-z0-9_+\-.#]+$/i,
    th = null,
    tp = null;
function tE(e, t) {
    let n = (function (e, t) {
        let n = [],
            i = null;
        for (let t of $.VW.blocks(e))
            (i = (function (e, t, n, i, r) {
                let s = (function (e) {
                        let t,
                            [n, i] = e;
                        if (!t_.has(n.type)) return [];
                        let r = [],
                            s = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let a = n.children[e];
                            if ($.l5.isText(a))
                                for (s.lastIndex = 0; null != (t = s.exec(a.text)); ) {
                                    if ("\\" === t[0]) {
                                        s.lastIndex += 1;
                                        continue;
                                    }
                                    r.push({ path: $.PW.child(i, e), offset: t.index });
                                }
                        }
                        return r;
                    })(t),
                    a = s[0],
                    o = s[s.length - 1],
                    l = null;
                if (null != o) {
                    let [t] = $.VW.node(e, o.path);
                    l = t.text.substring(o.offset + 3);
                }
                let u = n && null != a,
                    c = n && 0 === s.length,
                    d = i && 0 === s.length,
                    _ = (u ? s.slice(1) : s).length % 2 == 1,
                    f = _ && (null == l || "" === l || null != l.match(tf)),
                    h = f && null != l && "" !== l ? l.toLowerCase() : null;
                return {
                    blockEntry: t,
                    wasInCodeBlock: n,
                    isInCodeBlock: c,
                    isStyledCodeBlockLine: d,
                    lang: _ || u ? h : r,
                    hljsTypes: null,
                    closesCodeBlock: u,
                    opensCodeBlock: _,
                    opensCodeBlockOnOwnLine: f,
                };
            })(
                e,
                t,
                null != i && (i.isInCodeBlock || i.opensCodeBlock),
                null != i && (i.isStyledCodeBlockLine || i.opensCodeBlockOnOwnLine),
                null != i && (i.opensCodeBlock || !i.closesCodeBlock) ? i.lang : null,
            )),
                n.push(i);
        return (
            (function (e, t) {
                let n = to.L.getConfig({ location: "syntaxHighlightCodeBlocks" }).enabled,
                    i = [],
                    r = !1;
                for (let s of e) {
                    let a = s === e[e.length - 1];
                    if (
                        (s.closesCodeBlock || a) &&
                        (r && a && !s.closesCodeBlock && i.push(s), (r = !1), i.length > 0)
                    ) {
                        let e = i.map((e) => (0, eG.IQ)(e.blockEntry[0])).join("\n"),
                            r = i[0].lang;
                        if (null != r && n)
                            !(function (e, t, n, i) {
                                let r = (function (e, t, n, i) {
                                    let r,
                                        s = (0, tl.py)(t);
                                    if (null == s) return null;
                                    let a = `${e}-${s}`,
                                        o = tS.get(a);
                                    if (null != o && o.length === n) return o;
                                    for (let t of e.split("\n")) if (t.length > 1e3) return null;
                                    let l = tr.has(s) ? (tr.get(s) ?? null) : (ta(s), null);
                                    if (null == l) return i?.(s), null;
                                    let u = e.endsWith("\n")
                                            ? e
                                            : `${e}
`,
                                        c = l.createSession();
                                    try {
                                        c.setText(u);
                                        let e = c.highlightToHtml();
                                        if (((r = e.html), null != i)) for (let t of e.missingInjections) i(t);
                                    } finally {
                                        c.free();
                                    }
                                    let d = r.endsWith("\n") ? r.slice(0, -1).split("\n") : r.split("\n");
                                    if (d.length !== n) return null;
                                    let _ = [];
                                    for (let e = 0; e < n; e++)
                                        _.push(
                                            (function (e) {
                                                let t,
                                                    n = [],
                                                    i = [],
                                                    r = 0,
                                                    s = 0;
                                                for (tg.lastIndex = 0; null != (t = tg.exec(e)); ) {
                                                    let a = t.index + t[0].length,
                                                        o = tN(e.substring(s, t.index)).length,
                                                        l = i.filter((e) => null != e);
                                                    if (
                                                        (o > 0 &&
                                                            l.length > 0 &&
                                                            n.push({ types: l, start: r, end: r + o }),
                                                        o > 0 && (r += o),
                                                        null != t[1])
                                                    ) {
                                                        let e = tA.get(t[1]);
                                                        i.push(e ?? null);
                                                    } else i.pop();
                                                    s = a;
                                                }
                                                let a = tN(e.substring(s)).length,
                                                    o = i.filter((e) => null != e);
                                                return (
                                                    a > 0 && o.length > 0 && n.push({ types: o, start: r, end: r + a }),
                                                    n
                                                );
                                            })(d[e]),
                                        );
                                    return tS.set(a, _), _;
                                })(e, t, n.length, i);
                                if (null != r) for (let e = 0; e < n.length; e++) n[e].hljsTypes = r[e];
                                else for (let e = 0; e < n.length; e++) n[e].hljsTypes = [];
                            })(e, r, i, t);
                        else if (null == r || null == th || th.hasLanguage(r)) {
                            if (null != r && null != th && th.hasLanguage(r)) {
                                let t = (function (e, t) {
                                    if (null == th) return null;
                                    let n = `${e}-${t}`,
                                        i = tT.get(n);
                                    if (null != i) return i;
                                    let r = th.highlight(t, e, !1);
                                    if (null == r || r.illegal) return null;
                                    let s = r.value.split("\n");
                                    return tT.set(n, s), s;
                                })(e, r);
                                if (null != t && t.length === i.length) {
                                    let e = [];
                                    for (let n = 0; n < i.length; n++) {
                                        let r,
                                            s = t[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            a = [],
                                            o = 0,
                                            l = 0;
                                        for (; null != (r = tm.exec(s)); ) {
                                            let t = r.index + r[0].length,
                                                n = r.index - l;
                                            r.index > l &&
                                                (e.length > 0 && a.push({ types: [...e], start: o, end: o + n }),
                                                (o += n)),
                                                "</span>" === r[0] ? e.pop() : e.push(r[1]),
                                                (l = t);
                                        }
                                        if (e.length > 0) {
                                            let t = s.length - l;
                                            a.push({ types: [...e], start: o, end: o + t });
                                        }
                                        i[n].hljsTypes = a;
                                    }
                                } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < i.length; e++) i[e].hljsTypes = [];
                        i = [];
                    }
                    r && i.push(s), s.opensCodeBlock && (r = !0);
                }
            })(n, t),
            n
        );
    })(e, t);
    return (
        (function (e, t) {
            for (let i of t) {
                var n;
                let [t, r] = i.blockEntry,
                    s =
                        (n = i).isStyledCodeBlockLine || n.wasInCodeBlock
                            ? {
                                  lang: n.lang,
                                  wasInCodeBlock: n.wasInCodeBlock,
                                  isInCodeBlock: n.isInCodeBlock,
                                  isStyledCodeBlockLine: n.isStyledCodeBlockLine,
                                  hljsTypes: n.hljsTypes,
                              }
                            : null;
                t?.codeBlockState != s && z.b.setNodes(e, { codeBlockState: s }, { at: r });
            }
        })(e, n),
        n.some((e) => null != e.lang)
    );
}
let tm = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    tg = /(?:<(a-[a-z]{1,2})>)|(?:<\/a-[a-z]{1,2}>)/g,
    tA = new Map();
for (let [e, t] of Object.entries(tc)) e.startsWith("a-") && null != t && tA.set(e, t);
let tI = { max: 1 / 0, maxAge: +tu.A.Millis.MINUTE, updateAgeOnGet: !0 },
    tT = new (te())(tI),
    tS = new (te())(tI);
function tN(e) {
    return e
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'");
}
function ty(e, t) {
    let n = 0;
    for (let i of $.VW.nodes(e, {
        at: { anchor: { path: eJ.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => $.l5.isText(e),
    })) {
        let e = i[0].text;
        $.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let r = e.match(/```/g);
        n += r?.length ?? 0;
    }
    return n % 2 != 0;
}
function tC(e) {
    if (null == e.selection) return !1;
    let t = $.ZF.start(e.selection);
    return ty(e, t);
}
ts.add(() => {
    tS.reset();
});
let tv = new Set(["line", "blockQuote"]),
    tO = ["applicationCommand"],
    tR = ["timestampMentionInput"];
function tb(e) {
    let t = $.VW.getCurrentBlock(e),
        n = $.VW.getCurrentInline(e);
    return null != t && !tO.includes(t[0].type) && !tR.includes(n?.[0]?.type);
}
function tD(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: $.VW.richValue(e), selection: e.selection };
}
var tL = n(877413),
    tw = n.n(tL),
    tM = n(284009),
    tP = n.n(tM),
    tx = n(339871);
function tU(e, t) {
    let { cmd: n = !1, ctrl: i = !1, alt: r = !1, shift: s = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == i || e.ctrlKey === i) &&
        (null == r || e.altKey === r) &&
        (null == s || e.shiftKey === s)
    );
}
let tk = (e) => {
        let t = $.VW.getCurrentBlock(e);
        if (null != t) {
            let n = $.VW.start(e, t[1]);
            return z.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    },
    tG = (e) => {
        let t = $.VW.getCurrentBlock(e);
        if (null != t) {
            let n = $.VW.end(e, t[1]);
            return z.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    };
var tF = n(224868);
let tV =
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    tB = new Set([
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
    tH = new Set(["timestampMentionInput"]),
    tj = new Set(["line", "blockQuote"]),
    tY = new Set(["applicationCommandOption"]);
function tW(e, t, n) {
    let i = $.VW.areStylesDisabled(e);
    for (let r of $.VW.blocks(e))
        if (tj.has(r[0].type)) i ? tz(e, r, !0, null) : tK(e, r, t, n);
        else {
            let [s, a] = r;
            for (let r = s.children.length - 1; r >= 0; r--) {
                let o = s.children[r];
                if (!$.l5.isText(o) && tY.has(o.type)) {
                    let s = [o, $.PW.child(a, r)];
                    i ? tz(e, s, !0, null) : tK(e, s, t, n);
                }
            }
        }
}
function tK(e, t, n, i) {
    let r = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        s = $.cv.markdown(t[0], n);
    tz(e, t, r, s) && ((t = $.cv.updateElement(e, t)), (s = $.cv.markdown(t[0], n))),
        r ||
            (t$(e, t, i, s) && ((t = $.cv.updateElement(e, t)), (s = $.cv.markdown(t[0], n))),
            (function (e, t, n, i, r) {
                let [s, a] = t;
                for (let o = s.children.length - 1; o >= 0; o--) {
                    let l,
                        u = s.children[o];
                    if (!$.l5.isText(u)) continue;
                    let c = $.PW.child(a, o),
                        d = [];
                    for (tV.lastIndex = 0; null != (l = tV.exec(u.text)); ) {
                        if (0 !== l.index && null == u.text.charAt(l.index - 1).match(/(\t|\s)/)) {
                            tV.lastIndex = l.index + 1;
                            continue;
                        }
                        if (tq(e, a, { path: c, offset: l.index }, r)) continue;
                        let s = (0, tF.p)(l[0], n, i);
                        null != s && tZ(i, t[0], s)
                            ? d.push({ index: l.index, length: l[0].length, node: s })
                            : (tV.lastIndex = l.index + 1);
                    }
                    for (let t of d.reverse())
                        (function (e, t, n, i, r) {
                            let [s, a] = t,
                                o = { path: a, offset: n },
                                l = { path: a, offset: n + i };
                            tP()(
                                o.offset >= 0 && o.offset <= s.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                tP()(
                                    l.offset >= 0 && l.offset <= s.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                z.b.textToVoid(e, r, { anchor: o, focus: l });
                        })(e, [u, $.PW.child(a, o)], t.index, t.length, t.node);
                }
            })(e, t, n, i, s));
}
function tz(e, t, n, i) {
    let [r, s] = t,
        a = !1;
    for (let t = r.children.length - 1; t >= 0; t--) {
        let o = r.children[t];
        if ($.l5.isText(o) && !n) {
            let n = t < r.children.length - 1 ? r.children[t + 1] : null;
            if (null == n || !$.cv.isElement(n) || !e.isVoid(n)) continue;
            let i = !1,
                l = 0;
            for (;;) {
                let e = o.text.indexOf("\\", l);
                if (-1 === e) break;
                if (e === o.text.length - 1) {
                    i = !0;
                    break;
                }
                l = e + 2;
            }
            if (i) {
                let i = $.PW.child(s, t + 1);
                z.b.voidToText(e, (0, eG.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), i), (a = !0);
            }
        } else if ($.cv.isElement(o) && e.isVoid(o)) {
            let r = $.PW.child(s, t),
                l = { path: $.PW.child(r, 0), offset: 0 };
            (n || (null != i && tq(e, s, l, i))) &&
                (z.b.voidToText(e, (0, eG.IQ)(o, { mode: "plain", preventEmojiSurrogates: !0 }), r), (a = !0));
        }
    }
    return a;
}
function t$(e, t, n, i) {
    let r = t[1],
        s = !1,
        a = [...i.entries].reverse();
    for (let o = 0; o < a.length; o++) {
        let l,
            u = a[o],
            c = a[o + 1];
        if (null != c && c.text.endsWith("\\") && u.start === c.start + c.text.length) continue;
        switch (u.attributes[0]) {
            case "emoji":
                l = {
                    type: "emoji",
                    emoji: {
                        name: u.data.name,
                        src: u.data.src,
                        surrogate: u.data.surrogate,
                        jumboable: !0 === u.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "customEmoji":
                l = {
                    type: "customEmoji",
                    emoji: {
                        emojiId: u.data.emojiId,
                        name: u.data.name,
                        animated: u.data.animated,
                        jumboable: !0 === u.data.jumboable,
                    },
                    children: [{ text: "" }],
                };
                break;
            case "textMention":
                l = { type: "textMention", name: u.data.text, children: [{ text: "" }] };
                break;
            case "mention":
                l = { type: "userMention", userId: u.data.id, children: [{ text: "" }] };
                break;
            case "roleMention":
                l = { type: "roleMention", roleId: u.data.id, children: [{ text: "" }] };
                break;
            case "channelMention":
                l = { type: "channelMention", channelId: u.data.id, children: [{ text: "" }] };
                break;
            case "staticRouteLink":
                l = { type: "staticRouteLink", id: u.data.id, itemId: u.data.itemId, children: [{ text: "" }] };
                break;
            case "soundboard":
                l = { type: "soundboard", guildId: u.data.guildId, soundId: u.data.soundId, children: [{ text: "" }] };
                break;
            case "timestamp":
                l = { type: "timestamp", parsed: u.data, children: [{ text: "" }] };
                break;
            case "timestampMentionInput":
                l = { type: "timestampMentionInput", children: [{ text: u.data.content }] };
                break;
            default:
                continue;
        }
        if (!tZ(n, t[0], l)) continue;
        let d = eF(e, r, i.serializedChildren, u.start),
            _ = eF(e, r, i.serializedChildren, u.start + u.text.length);
        z.b.textToVoid(e, l, { anchor: d, focus: _ }), (s = !0);
    }
    return s;
}
function tq(e, t, n, i) {
    let r = 0;
    for (let [i, s] of $.VW.nodes(e, { at: { anchor: $.VW.start(e, t), focus: n }, mode: "lowest" }))
        $.l5.isText(i) ? ($.PW.equals(s, n.path) ? (r += n.offset) : (r += i.text.length)) : (r += 1);
    for (let e of i.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= r && n >= r) return !0;
    }
    return !1;
}
function tZ(e, t, n) {
    if ("applicationCommandOption" !== t.type) return !0;
    switch (t.optionType) {
        case h.n4.CHANNEL:
            return "channelMention" === n.type;
        case h.n4.ROLE:
            return "roleMention" === n.type || ("textMention" === n.type && "@everyone" === n.name);
        case h.n4.USER:
            return "userMention" === n.type;
        case h.n4.MENTIONABLE:
            return (
                "roleMention" === n.type ||
                "userMention" === n.type ||
                ("textMention" === n.type && "@everyone" === n.name)
            );
        case h.n4.STRING: {
            let n = null != e ? E.A.getOption(e, t.optionName) : null;
            return n?.choices == null && n?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
function tX(e, t, n) {
    let i = $.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let r = $.VW.getCurrentText(e);
    if (null == r) return !0;
    let [s, a] = r,
        [o, l] = $.VW.edges(e, a),
        u = $.ZF.toPoint(e.selection);
    if (null == u) return !0;
    if (null != i) {
        let [t, n] = i;
        if ($.VW.isEmpty(e, t) || $.VW.isVoid(e, t)) return z.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == i) return !1;
        else {
            let [r, s] = $.VW.edges(e, i[1]);
            return z.b.delete(e, { at: u, unit: t, reverse: n, select: !0, bounds: { anchor: r, focus: s } }), !0;
        }
    let c = $.VW.getParentBlock(e, u);
    if (null == c) return !0;
    let d = c[1],
        _ = i;
    if ($.Kh.equals(u, n ? o : l))
        for (;;) {
            let t = (n ? $.VW.before : $.VW.after)(e, u);
            if (null == t) return !0;
            if (!$.PW.isDescendant(t.path, d)) break;
            if (((u = t), null != (_ = $.VW.getParentInline(e, t)))) {
                let [t, n] = _;
                if ($.VW.isEmpty(e, t) || $.VW.isVoid(e, t)) {
                    let t = $.VW.before(e, n);
                    return null != t && z.b.select(e, t), z.b.removeInline(e, n), !0;
                }
            }
            let i = $.VW.node(e, t.path);
            if (null == i || !$.l5.isText(i[0])) return !0;
            if ((([s, a] = i), 0 !== s.text.length)) {
                [o, l] = $.VW.edges(e, a);
                break;
            }
        }
    return z.b.delete(e, { at: u, unit: t, reverse: n, select: !0 }), !0;
}
var tQ = n(527214);
function tJ(e, t) {
    let n = E.A.getActiveCommand(e.id),
        i = n?.options?.find((e) => e.name === t.optionName);
    return null != i && (i.type !== h.n4.STRING || i?.choices != null || i?.autocomplete);
}
function t0(e, t, n, i) {
    let r = $.VW.areStylesDisabled(e) || null == n ? t : n;
    H.o.withSingleEntry(e, () => {
        z.b.insertText(e, i ? r + " " : r);
    });
}
var t1 = n(770178);
let t2 = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function t3(e) {
    try {
        return $.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), W.A.captureException(e), null;
    }
}
var t6 = n(31717);
let t4 = (e) => {
        let t,
            { channelId: n, element: i, attributes: a, children: l } = e,
            u = (0, j.f7)(),
            c = (0, j.zL)(),
            d = (0, j.RV)(),
            { optionType: _, errored: f } = (0, Z.cf)(
                [E.A],
                () => ({
                    optionType: E.A.getOption(n, i.optionName)?.type,
                    errored: E.A.getOptionState(n, i.optionName)?.lastValidationResult?.success !== !0,
                }),
                [n, i.optionName],
            ),
            p = (0, Z.bG)([g.A], () => g.A.getUpload(n, i.optionName, t6.C.SlashCommand), [n, i.optionName]),
            m = i.children[i.children.length - 1],
            A = null != m && $.l5.isText(m) && m.text.endsWith("\n"),
            I = o()(eL.S0, eL.xP, { [eL.t$]: c && u, [eL.$2]: (!c || !u) && f }),
            T = s.useCallback(() => {
                $.VW.isVoid(d, i) || z.b.selectCommandOption(d, i.optionName, !0);
            }, [d, i]);
        return (
            (t =
                _ === h.n4.ATTACHMENT
                    ? p?.filename != null
                        ? (0, r.jsxs)("span", {
                              className: o()(eL._K, eL.dU),
                              contentEditable: !1,
                              children: [p.filename, l],
                          })
                        : (0, r.jsxs)("span", {
                              className: o()(eL._K, eL.ZI),
                              contentEditable: !1,
                              children: [eA.intl.string(eA.t.GRdFni), l],
                          })
                    : (0, r.jsxs)("span", {
                          className: eL._K,
                          children: [l, A ? (0, r.jsx)("span", { className: eL.Nx, contentEditable: !1 }) : null],
                      })),
            (0, r.jsxs)("span", {
                ...a,
                className: I,
                children: [
                    (0, r.jsxs)("span", {
                        className: eL.gA,
                        contentEditable: !1,
                        onClick: T,
                        children: [i.optionDisplayName, "\u200B"],
                    }),
                    t,
                    (0, r.jsx)("span", { contentEditable: !1, children: "\u200B" }),
                ],
            })
        );
    },
    t5 = (e) => {
        let { element: t, attributes: n, children: i } = e,
            s = (0, j.f7)(),
            a = (0, j.zL)(),
            l = o()(eL.S0, eL.xP, eL.Bz, { [eL.t$]: a && s, [eL.$2]: t.error }),
            u = t.children[t.children.length - 1],
            c = null != u && $.l5.isText(u) && u.text.endsWith("\n"),
            d = (0, r.jsxs)("span", {
                className: eL._K,
                children: [i, c ? (0, r.jsx)("span", { className: eL.Nx, contentEditable: !1 }) : null],
            });
        return (0, r.jsxs)("span", {
            ...n,
            className: l,
            children: [
                (0, r.jsxs)("span", { className: eL.gA, contentEditable: !1, children: ["@time", "\u200B"] }),
                d,
                (0, r.jsx)("span", { contentEditable: !1, children: "\u200B" }),
            ],
        });
    };
var t7 = n(471910);
let t8 = s.forwardRef(function (e, t) {
    let i,
        a,
        l,
        u,
        c,
        d,
        {
            value: _,
            type: f,
            channel: p,
            className: m,
            id: I,
            disabled: T,
            submitting: y,
            placeholder: C,
            required: v,
            textAreaPaddingClassName: O,
            onChange: R,
            onPaste: b,
            onResize: D,
            onFocus: L,
            onBlur: M,
            onKeyDown: P,
            onKeyUp: k,
            onTab: G,
            onEnter: W,
            onSubmit: K,
            onSubmitFailure: q,
            maybeShowAutocomplete: Z,
            hideAutocomplete: X,
            moveSelection: Q,
            spellcheckEnabled: J,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            disableAutoFocus: en,
            disableEnterToSubmit: ei,
            allowNewLines: er,
            "aria-owns": es,
            "aria-expanded": ea,
            "aria-haspopup": eo,
            "aria-activedescendant": el,
            "aria-controls": eu,
            "aria-invalid": ec,
            "aria-describedby": ed,
            "aria-labelledby": e_,
            "aria-autocomplete": ef,
        } = e,
        eh = s.useRef(null),
        ep = s.useRef(null),
        eE = s.useRef(!0),
        em = s.useRef(!0),
        eg = T || y,
        eI = s.useCallback(
            (e, t, n) => {
                let { value: i, selection: r } = n,
                    s = $.VW.richValue(e),
                    a = e.selection,
                    o = !1;
                if (void 0 !== i && i !== s) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === S.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), tW(e, p.guild_id, p.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        tW(e, p.guild_id, p.id), (r = void 0);
                    }
                    "undo" !== t && void 0 !== i && i !== s && H.o.insertEntry(e, "other", !1, s, a), (o = !0);
                }
                if ((null == r || $.Ot.isValid(e, r) || (r = void 0), (o || !$.Ot.isValid(e, a)) && void 0 === r)) {
                    let t = $.VW.end(e, []);
                    r = { anchor: t, focus: t };
                }
                let l = null != r && !$.Ot.equals(r, a);
                if ((o && !en && $.VW.focus(e), null != r && l)) {
                    e.selection = r;
                    let t = H.o.currentEntry(e);
                    null != t && (t.selection = r), (o = !0);
                }
                let u = B.n$(e);
                if (
                    (null != u &&
                        u[0].command.id !== E.A.getActiveCommand(p.id)?.id &&
                        H.o.withMergedEntry(e, () => {
                            e3(e, p.id, null, !0);
                        }),
                    o)
                )
                    if ("parent" === t)
                        try {
                            (em.current = !1), e.onChange();
                        } finally {
                            em.current = !0;
                        }
                    else e.onChange();
            },
            [p.id, p.guild_id, en],
        ),
        eT = (function (e) {
            let t = s.useContext(Y.Ay),
                i = eW.SI.useSetting(),
                [r] = s.useState(() => {
                    let r = (0, ej.ie)();
                    return (
                        (r.children = (0, N.x7)("")),
                        (r.selection = { anchor: eJ.K, focus: eJ.K }),
                        (function (e) {
                            var t, i;
                            let {
                                    editor: r,
                                    chatInputType: s,
                                    channel: a,
                                    canUseCommands: o,
                                    canOnlyUseTextCommands: l,
                                    windowContext: u,
                                    previewMarkdown: c,
                                    forTests: d,
                                    onChangeStart: _,
                                    onChangeEnd: f,
                                    updateState: p,
                                } = e,
                                m = r,
                                { onChange: g } = m;
                            (m.chatInputType = s),
                                (m.windowContext = u),
                                (m.previewMarkdown = c),
                                (m.composition = null),
                                (m.events = new eH.EventEmitter()),
                                (m.isMac = "MacIntel" === navigator.platform),
                                (m.onChange = () => {
                                    m.events.emit("onChange"), g();
                                }),
                                ((t = m =
                                    ((e, t) => {
                                        let {
                                            addMark: n,
                                            removeMark: i,
                                            deleteBackward: r,
                                            deleteForward: s,
                                            setFragmentData: a,
                                            insertData: o,
                                            insertFragmentData: l,
                                            insertTextData: u,
                                        } = e;
                                        return (
                                            ((e = (0, j.o$)(e)).addMark = n),
                                            (e.removeMark = i),
                                            (e.setFragmentData = a),
                                            (e.insertData = o),
                                            (e.insertFragmentData = l),
                                            (e.insertTextData = u),
                                            (e.deleteBackward = (n) => {
                                                if ("line" === n && !t) {
                                                    let t = $.ZF.toPoint(e.selection);
                                                    if (null != t) {
                                                        let i = $.VW.before(e, t, { unit: n });
                                                        if (null != i) {
                                                            let n = $.e0.getLineStart(e, t, !1);
                                                            null != n && $.Kh.isAfter(n, i)
                                                                ? z.b.delete(e, { at: { anchor: n, focus: t } })
                                                                : z.b.delete(e, { at: { anchor: i, focus: t } });
                                                            return;
                                                        }
                                                    }
                                                }
                                                r(n);
                                            }),
                                            (e.deleteForward = (n) => {
                                                if ("line" === n && !t) {
                                                    let t = $.ZF.toPoint(e.selection);
                                                    if (null != t) {
                                                        let i = $.VW.after(e, t, { unit: n });
                                                        if (null != i) {
                                                            let n = $.e0.getLineEnd(e, t, !1);
                                                            null != n && $.Kh.isBefore(n, i)
                                                                ? z.b.delete(e, { at: { anchor: n, focus: t } })
                                                                : z.b.delete(e, { at: { anchor: i, focus: t } });
                                                            return;
                                                        }
                                                    }
                                                }
                                                s(n);
                                            }),
                                            e
                                        );
                                    })(m, !0 === d)).setFragmentData = (e) => {
                                    if (null != t.selection && !$.Kh.equals(t.selection.anchor, t.selection.focus)) {
                                        let n = (0, eG.WO)($.VW.richValue(t), {
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
                                    if (null != t.selection && $.ZF.isExpanded(t.selection)) {
                                        let e = ej.KE.string(t, t.selection),
                                            i = (0, tQ.W1)(n),
                                            r = (0, tQ.W1)(e);
                                        if (null != i && null == r) {
                                            let [e, n] = $.ZF.edges(t.selection);
                                            return (
                                                $.VW.withoutNormalizing(t, () => {
                                                    z.b.select(t, e),
                                                        t.insertText("["),
                                                        z.b.select(t, n),
                                                        0 === $.PW.compare(e.path, n.path) &&
                                                            z.b.move(t, { distance: 1 }),
                                                        t.insertText(`](${i.target})`);
                                                }),
                                                !0
                                            );
                                        }
                                        if (null != i && null != r)
                                            return z.b.delete(t, { at: t.selection }), t.insertText(i.target), !0;
                                        z.b.delete(t, { at: t.selection });
                                    }
                                    return t.insertText(n), !0;
                                }),
                                (m = (function (e) {
                                    let {
                                        apply: t,
                                        deleteBackward: n,
                                        deleteForward: i,
                                        deleteFragment: r,
                                        insertText: s,
                                    } = e;
                                    return (
                                        (e.apply = (n) => {
                                            if (
                                                "set_selection" === n.type &&
                                                e.composition?.startedInsideInline &&
                                                $.ZF.isRange(n.properties) &&
                                                $.ZF.isRange(n.newProperties) &&
                                                $.ZF.isCollapsed(n.newProperties)
                                            ) {
                                                let t = $.VW.getParentInline(e, n.properties),
                                                    i = $.VW.getParentInline(e, n.newProperties);
                                                if (null != t && (null == i || !$.PW.equals(t[1], i[1]))) return;
                                            }
                                            t(n);
                                        }),
                                        (e.insertText = (t) => {
                                            null != e.selection && null != $.VW.getCurrentInline(e)
                                                ? z.b.insertText(e, t)
                                                : s(t);
                                        }),
                                        (e.deleteBackward = (t) => {
                                            tX(e, t, !0) || n(t);
                                        }),
                                        (e.deleteForward = (t) => {
                                            tX(e, t, !1) || i(t);
                                        }),
                                        (e.deleteFragment = (t) => {
                                            if (null != e.selection && $.ZF.isExpanded(e.selection)) {
                                                let n = e.selection.anchor,
                                                    i = e.selection.focus,
                                                    s = $.VW.getParentInline(e, n),
                                                    a = $.VW.getParentInline(e, i);
                                                if (null != s && null != a && $.PW.equals(s[1], a[1])) return void r(t);
                                                let o = $.ZF.isForward(e.selection);
                                                if (null != s) {
                                                    let [, t] = s,
                                                        [i, r] = $.VW.edges(e, t);
                                                    o && $.Kh.equals(n, i)
                                                        ? (n = $.VW.before(e, i) ?? $.VW.start(e, []))
                                                        : !o &&
                                                          $.Kh.equals(n, r) &&
                                                          (n = $.VW.after(e, r) ?? $.VW.end(e, []));
                                                }
                                                if (null != a) {
                                                    let [, t] = a,
                                                        [n, r] = $.VW.edges(e, t);
                                                    !o && $.Kh.equals(i, n)
                                                        ? (i = $.VW.before(e, n) ?? $.VW.start(e, []))
                                                        : o &&
                                                          $.Kh.equals(i, r) &&
                                                          (i = $.VW.after(e, r) ?? $.VW.end(e, []));
                                                }
                                                return void z.b.delete(e, {
                                                    at: { anchor: n, focus: i },
                                                    reverse: "backward" === t,
                                                    select: !0,
                                                });
                                            }
                                            r(t);
                                        }),
                                        e
                                    );
                                })((m = t))),
                                s.commands?.enabled &&
                                    (m = (function (e, t, n, i) {
                                        let {
                                            insertData: r,
                                            isInline: s,
                                            isVoid: a,
                                            onChange: o,
                                            deleteBackward: l,
                                            deleteForward: u,
                                            deleteFragment: c,
                                        } = e;
                                        (e.insertData = (n) => {
                                            if (
                                                null != t &&
                                                $.VW.isEditorEmpty(e) &&
                                                n.types.includes("application/x-discord-interaction-data")
                                            ) {
                                                let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                                                    { commandKey: i, interactionOptions: r } = (0, eZ.Ez)(e),
                                                    { application: s, command: a } = e$.EW(
                                                        { channel: t, type: "channel" },
                                                        i,
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
                                                        w.Gf({
                                                            channelId: t.id,
                                                            command: a,
                                                            section: e,
                                                            location: eq.Oh.PASTE,
                                                            initialValues: (0,
                                                            ez.getInitialValuesFromInteractionOptions)(a, r ?? []),
                                                        }),
                                                        null
                                                    );
                                                }
                                            }
                                            return r(n);
                                        }),
                                            (e.isInline = (e) => !!e0.has(e.type) || s(e)),
                                            (e.isVoid = (e) =>
                                                !!("applicationCommandOption" === e.type && e1.has(e.optionType)) ||
                                                a(e)),
                                            (e.deleteBackward = (t) => {
                                                e7(e, () => l(t));
                                            }),
                                            (e.deleteForward = (t) => {
                                                e7(e, () => u(t));
                                            }),
                                            (e.deleteFragment = (t) => {
                                                e7(e, () => c(t));
                                            });
                                        let d = null,
                                            _ = null,
                                            f = null,
                                            p = null,
                                            m = null;
                                        return (
                                            (e.onChange = () => {
                                                if (null != t) {
                                                    let r = E.A.getState(t.id),
                                                        s = e$.j8({ channel: t, type: "channel" });
                                                    if (
                                                        $.VW.richValue(e) !== d ||
                                                        !$.Ot.equals(e.selection, _) ||
                                                        r.activeCommand !== f ||
                                                        null == m ||
                                                        s.some((e, t) => m[t] !== e)
                                                    ) {
                                                        let a = H.o.withMergedEntry(e, () =>
                                                            (function (e) {
                                                                let {
                                                                        editor: t,
                                                                        storeCommandState: n,
                                                                        channel: i,
                                                                        canUseCommands: r,
                                                                        canOnlyUseTextCommands: s,
                                                                        commandChanged: a,
                                                                        previousOptionValues: o,
                                                                    } = e,
                                                                    { command: l, commandText: u } = e5(t),
                                                                    c = n.activeCommand;
                                                                if (
                                                                    (!r &&
                                                                        c?.integration_types?.includes(
                                                                            eK.b.GUILD_INSTALL,
                                                                        )) ||
                                                                    (s &&
                                                                        c?.inputType !== eq.y$.BUILT_IN_TEXT &&
                                                                        c?.inputType !== eq.y$.BUILT_IN_INTEGRATION)
                                                                )
                                                                    return null != l && e3(t, i.id, c, !0), null;
                                                                if (null != l) {
                                                                    if ($.VW.isEditorEmpty(t) || null == c)
                                                                        return e3(t, i.id, c, !1), null;
                                                                    let e = `/${l.displayName}`;
                                                                    if (
                                                                        null == u ||
                                                                        !u.startsWith(e) ||
                                                                        (0 === B.O7(t).length &&
                                                                            (u.length < e.length + 1 ||
                                                                                " " !== u[e.length]))
                                                                    )
                                                                        return e3(t, i.id, c, !0), null;
                                                                } else {
                                                                    if (null != c && a) {
                                                                        let e = (function (e, t, n) {
                                                                                let i,
                                                                                    {
                                                                                        initialValues: r,
                                                                                        activeCommand: s,
                                                                                    } = n;
                                                                                if (null == s) return null;
                                                                                let a =
                                                                                        (s.options?.length ?? 0) > 0
                                                                                            ? B.pY(e, s)
                                                                                            : null,
                                                                                    o = (0, eG.WO)($.VW.richValue(e), {
                                                                                        mode: "raw",
                                                                                        range: {
                                                                                            anchor: $.VW.start(e, []),
                                                                                            focus:
                                                                                                a?.[0]?.keyRange
                                                                                                    .anchor ??
                                                                                                $.VW.end(e, []),
                                                                                        },
                                                                                    }),
                                                                                    l = "",
                                                                                    u = o.toLocaleLowerCase(),
                                                                                    c =
                                                                                        `/${s.displayName} `.toLocaleLowerCase(),
                                                                                    d =
                                                                                        `/${s.untranslatedName} `.toLocaleLowerCase();
                                                                                u.startsWith(c)
                                                                                    ? (l = o.substring(c.length).trim())
                                                                                    : u.startsWith(d) &&
                                                                                      (l = o
                                                                                          .substring(d.length)
                                                                                          .trim());
                                                                                let _ = [],
                                                                                    f = null,
                                                                                    h = null;
                                                                                if (null != s.options) {
                                                                                    let e = new Set();
                                                                                    if (null != a)
                                                                                        for (let i of a) {
                                                                                            e.add(i.name);
                                                                                            let r =
                                                                                                    e8(n, t, i.name) ??
                                                                                                    i.text,
                                                                                                s = {
                                                                                                    type: "applicationCommandOption",
                                                                                                    optionName: i.name,
                                                                                                    optionDisplayName:
                                                                                                        i.displayName,
                                                                                                    optionType: i.type,
                                                                                                    children: [
                                                                                                        { text: r },
                                                                                                    ],
                                                                                                };
                                                                                            _.push(s),
                                                                                                0 === i.text.length &&
                                                                                                    null == f &&
                                                                                                    (f = s);
                                                                                        }
                                                                                    for (let i of s.options)
                                                                                        if (
                                                                                            !e.has(i.name) &&
                                                                                            (i.required ||
                                                                                                null != r[i.name])
                                                                                        ) {
                                                                                            let e, r;
                                                                                            l.length > 0 &&
                                                                                            !e1.has(i.type)
                                                                                                ? ((e = l), (l = ""))
                                                                                                : (e =
                                                                                                      (r = e8(
                                                                                                          n,
                                                                                                          t,
                                                                                                          i.name,
                                                                                                      )) ?? "");
                                                                                            let s = {
                                                                                                type: "applicationCommandOption",
                                                                                                optionName: i.name,
                                                                                                optionDisplayName:
                                                                                                    i.displayName,
                                                                                                optionType: i.type,
                                                                                                children: [{ text: e }],
                                                                                            };
                                                                                            _.push(s),
                                                                                                0 === e.length &&
                                                                                                    null == f &&
                                                                                                    (f = s),
                                                                                                null == r && (h = s);
                                                                                        }
                                                                                }
                                                                                (i =
                                                                                    l.length > 0
                                                                                        ? `/${s.displayName} ${l.replace(/\r|\n/g, " ")}`
                                                                                        : 0 === _.length
                                                                                          ? `/${s.displayName} `
                                                                                          : `/${s.displayName}`),
                                                                                    _.unshift({ text: i });
                                                                                let p = {
                                                                                    type: "applicationCommand",
                                                                                    children: _,
                                                                                    command: {
                                                                                        id: s.id,
                                                                                        name: s.untranslatedName,
                                                                                        displayName: s.displayName,
                                                                                    },
                                                                                };
                                                                                $.VW.withoutNormalizing(e, () => {
                                                                                    for (let [, t] of (z.b.insertNodes(
                                                                                        e,
                                                                                        [p],
                                                                                        { at: eJ.Xg },
                                                                                    ),
                                                                                    $.VW.blocks(e).reverse()))
                                                                                        $.PW.isAfter(t, eJ.Xg) &&
                                                                                            z.b.removeNodes(e, {
                                                                                                at: t,
                                                                                                voids: !0,
                                                                                            });
                                                                                });
                                                                                let E = null;
                                                                                return (
                                                                                    null != f
                                                                                        ? (z.b.selectCommandOption(
                                                                                              e,
                                                                                              f.optionName,
                                                                                          ),
                                                                                          (E = f.optionName))
                                                                                        : null != h
                                                                                          ? (z.b.selectCommandOption(
                                                                                                e,
                                                                                                h.optionName,
                                                                                                !1,
                                                                                            ),
                                                                                            (E = h.optionName))
                                                                                          : z.b.resetSelectionToEditorEnd(
                                                                                                e,
                                                                                            ),
                                                                                    null == h && e6(e, s),
                                                                                    E
                                                                                );
                                                                            })(t, i, n),
                                                                            r = B.SQ(t, c, i.id);
                                                                        return (
                                                                            e4({
                                                                                guildId: i.guild_id,
                                                                                channelId: i.id,
                                                                                command: c,
                                                                                activeOption: e,
                                                                                currentOptionValues: r,
                                                                                previousOptionValues: null,
                                                                                validateAll: !0,
                                                                                allowEmpty: !0,
                                                                            }),
                                                                            { commandId: c.id, optionValues: r }
                                                                        );
                                                                    }
                                                                    if (null != c && !a)
                                                                        return (
                                                                            w.Gf({
                                                                                channelId: i.id,
                                                                                command: null,
                                                                                section: null,
                                                                            }),
                                                                            null
                                                                        );
                                                                    let e = $.VW.richValue(t)[0],
                                                                        r = e.children[0];
                                                                    if (e2.has(e.type) && $.l5.isText(r)) {
                                                                        let e = (function (e, t) {
                                                                            if (!e.startsWith("/")) return null;
                                                                            let n = (0, eQ.Yn)(t, e.substring(1));
                                                                            if (!n.hasSpaceTerminator) return null;
                                                                            let { commands: i, sections: r } = e$.v7(
                                                                                { channel: t, type: "channel" },
                                                                                h.kc.CHAT,
                                                                                n.text,
                                                                            );
                                                                            if (0 === i.length) return null;
                                                                            let s = n.text.trim(),
                                                                                a = s + " ",
                                                                                o = i.filter(
                                                                                    (e) =>
                                                                                        e.inputType !==
                                                                                            eq.y$.PLACEHOLDER &&
                                                                                        (e.displayName === s ||
                                                                                            e.displayName.startsWith(
                                                                                                a,
                                                                                            )),
                                                                                );
                                                                            if (
                                                                                1 === o.length &&
                                                                                o[0].displayName === s
                                                                            ) {
                                                                                let e = o[0],
                                                                                    t = r.find(
                                                                                        (t) =>
                                                                                            t.application?.id ===
                                                                                            e.applicationId,
                                                                                    );
                                                                                return { command: e, section: t };
                                                                            }
                                                                            return null;
                                                                        })(r.text, i);
                                                                        if (null != e)
                                                                            return (
                                                                                w.Gf({
                                                                                    channelId: i.id,
                                                                                    command: e.command,
                                                                                    section: e.section,
                                                                                }),
                                                                                null
                                                                            );
                                                                    }
                                                                }
                                                                if (null != c && null != l) {
                                                                    !(function (e, t) {
                                                                        if (null == t.options || 0 === t.options.length)
                                                                            return !1;
                                                                        let n = B.pY(e, t);
                                                                        return (
                                                                            0 !== n.length &&
                                                                            ($.VW.withoutNormalizing(e, () => {
                                                                                for (
                                                                                    let t = n.length - 1;
                                                                                    t >= 0;
                                                                                    t--
                                                                                ) {
                                                                                    let i = n[t];
                                                                                    z.b.textToInline(
                                                                                        e,
                                                                                        {
                                                                                            type: "applicationCommandOption",
                                                                                            optionName: i.name,
                                                                                            optionDisplayName:
                                                                                                i.displayName,
                                                                                            optionType: i.type,
                                                                                            children: [
                                                                                                { text: i.text },
                                                                                            ],
                                                                                        },
                                                                                        {
                                                                                            anchor: i.keyRange.anchor,
                                                                                            focus: i.valueRange.focus,
                                                                                        },
                                                                                    );
                                                                                }
                                                                                let t = $.VW.getFirstText(e);
                                                                                if (null == t) return !1;
                                                                                let i = t.text.trim();
                                                                                t.text !== i &&
                                                                                    z.b.textToText(e, i, {
                                                                                        anchor: {
                                                                                            path: eJ.fP,
                                                                                            offset: 0,
                                                                                        },
                                                                                        focus: {
                                                                                            path: eJ.fP,
                                                                                            offset: t.text.length,
                                                                                        },
                                                                                    });
                                                                            }),
                                                                            !0)
                                                                        );
                                                                    })(t, c) && e6(t, c);
                                                                    let e = B.SQ(t, c, i.id),
                                                                        n = $.VW.above(t, {
                                                                            match: (e) =>
                                                                                $.VW.isInline(t, e) &&
                                                                                "applicationCommandOption" === e.type,
                                                                            mode: "lowest",
                                                                        }),
                                                                        r = n?.[0].optionName ?? null;
                                                                    return (
                                                                        e4({
                                                                            guildId: i.guild_id,
                                                                            channelId: i.id,
                                                                            command: c,
                                                                            activeOption: r,
                                                                            currentOptionValues: e,
                                                                            previousOptionValues: o,
                                                                            validateAll: !1,
                                                                            allowEmpty: !1,
                                                                        }),
                                                                        { commandId: l.id, optionValues: e }
                                                                    );
                                                                }
                                                                return null;
                                                            })({
                                                                editor: e,
                                                                storeCommandState: r,
                                                                channel: t,
                                                                canUseCommands: n,
                                                                canOnlyUseTextCommands: i,
                                                                commandChanged: r.activeCommand?.id !== f?.id,
                                                                previousOptionValues: p,
                                                            }),
                                                        );
                                                        if (null != a) {
                                                            let t = H.o.currentEntry(e);
                                                            null != t && (t.commandId = a.commandId),
                                                                (p = a.optionValues);
                                                        } else p = null;
                                                        (d = $.VW.richValue(e)),
                                                            (_ = e.selection),
                                                            (f = r.activeCommand),
                                                            (m = s);
                                                    }
                                                }
                                                o();
                                            }),
                                            e
                                        );
                                    })(m, a, !0 === o, !0 === l)),
                                (m = (function (e, t, n) {
                                    let { isInline: i, isVoid: r, onChange: s } = e;
                                    (e.isVoid = (e) => !!tB.has(e.type) || r(e)),
                                        (e.isInline = (e) => !!(tB.has(e.type) || tH.has(e.type)) || i(e));
                                    let a = null,
                                        o = !0;
                                    return (
                                        (e.onChange = () => {
                                            let i = $.VW.richValue(e);
                                            (i !== a || e.previewMarkdown !== o) &&
                                                (H.o.withMergedEntry(e, () => {
                                                    $.VW.withoutNormalizing(e, () => tW(e, t, n));
                                                }),
                                                (a = i),
                                                (o = e.previewMarkdown)),
                                                s();
                                        }),
                                        e
                                    );
                                })(m, a.guild_id, a.id)),
                                s.markdown?.disableBlockQuotes ||
                                    (m = (function (e) {
                                        let { deleteBackward: t, deleteFragment: n, insertBreak: i, onChange: r } = e;
                                        (e.deleteBackward = (n) => {
                                            let i = $.VW.getCurrentBlock(e);
                                            if (i?.[0].type === "blockQuote") {
                                                let t = $.ZF.toPoint(e.selection);
                                                if (null != t && $.PW.isFirstChild(i[1], t.path) && 0 === t.offset)
                                                    return void z.b.setNodes(e, { type: "line" }, { at: i[1] });
                                            }
                                            t(n);
                                        }),
                                            (e.deleteFragment = (t) => {
                                                if (null != e.selection) {
                                                    let [i, r] = $.ZF.edges(e.selection),
                                                        s = [i.path[0]],
                                                        a = $.VW.node(e, s),
                                                        o = [r.path[0]],
                                                        l = $.PW.equals(s, o) ? null : $.VW.node(e, o);
                                                    H.o.withSingleEntry(e, () => {
                                                        a?.[0].type === "blockQuote" &&
                                                            $.Kh.isAtStart(i, a) &&
                                                            z.b.setNodes(e, { type: "line" }, { at: s }),
                                                            l?.[0].type === "blockQuote" &&
                                                                $.Kh.isAtEnd(r, l) &&
                                                                z.b.setNodes(e, { type: "line" }, { at: o }),
                                                            n(t);
                                                    });
                                                    return;
                                                }
                                                n(t);
                                            }),
                                            (e.insertBreak = () => {
                                                let t = $.VW.getCurrentBlock(e);
                                                if (t?.[0].type === "blockQuote") {
                                                    let n = $.ZF.toPoint(e.selection);
                                                    if (null == n) return;
                                                    !(function (e, t, n) {
                                                        if (!$.VW.isEmpty(e, t[0])) return !1;
                                                        let i = $.VW.previous(e, { at: t[1] });
                                                        return (
                                                            null != i &&
                                                            !!$.AS.isType(i[0], "blockQuote") &&
                                                            !!$.VW.isEmpty(e, i[0]) &&
                                                            !!$.Kh.isAtStart(n, t) &&
                                                            (z.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                                            z.b.removeNodes(e, { at: i[1] }),
                                                            !0)
                                                        );
                                                    })(e, t, n) && z.b.splitNodes(e, { at: n, always: !0 });
                                                    return;
                                                }
                                                i();
                                            });
                                        let s = null,
                                            a = !0;
                                        return (
                                            (e.onChange = () => {
                                                let t = $.VW.richValue(e);
                                                (t !== s || e.previewMarkdown !== a) &&
                                                    (H.o.withMergedEntry(e, () => {
                                                        $.VW.withoutNormalizing(e, () =>
                                                            (function (e) {
                                                                let t = !1;
                                                                for (let n of $.VW.blocks(e)) {
                                                                    let [i, r] = n;
                                                                    if (!tv.has(i.type)) continue;
                                                                    let s = { path: $.PW.child(r, 0), offset: 0 };
                                                                    if (ty(e, s)) {
                                                                        "blockQuote" === i.type &&
                                                                            (z.b.setNodes(
                                                                                e,
                                                                                { type: "line" },
                                                                                { at: r },
                                                                            ),
                                                                            z.b.insertText(e, "> ", { at: s }));
                                                                        continue;
                                                                    }
                                                                    if (
                                                                        "blockQuote" === i.type ||
                                                                        $.VW.areStylesDisabled(e)
                                                                    )
                                                                        continue;
                                                                    let a = i.children[0];
                                                                    if (!$.l5.isText(a)) continue;
                                                                    let o = a.text.match(/^\s*>>> /),
                                                                        l = a.text.match(/^\s*> /);
                                                                    if (
                                                                        (null != l || null != o || t) &&
                                                                        (z.b.setNodes(
                                                                            e,
                                                                            { type: "blockQuote" },
                                                                            { at: r },
                                                                        ),
                                                                        !t)
                                                                    ) {
                                                                        let n = l?.[0].length ?? o?.[0].length ?? 0,
                                                                            i = $.PW.child(r, 0);
                                                                        z.b.delete(e, {
                                                                            at: {
                                                                                anchor: { path: i, offset: 0 },
                                                                                focus: { path: i, offset: n },
                                                                            },
                                                                        }),
                                                                            (t = null != o);
                                                                    }
                                                                }
                                                            })(e),
                                                        );
                                                    }),
                                                    (s = t),
                                                    (a = e.previewMarkdown)),
                                                    r();
                                            }),
                                            e
                                        );
                                    })(m)),
                                s.markdown?.disableCodeBlocks ||
                                    (m = (function (e) {
                                        let { onChange: t } = e,
                                            i = null,
                                            r = !1,
                                            s = !1,
                                            a = (e) => {
                                                ta(e)
                                                    .then((e) => {
                                                        null != e && o();
                                                    })
                                                    .catch(() => {});
                                            },
                                            o = () => {
                                                s ||
                                                    ((s = !0),
                                                    queueMicrotask(() => {
                                                        s = !1;
                                                        try {
                                                            H.o.withoutSaving(e, () => {
                                                                $.VW.withoutNormalizing(e, () => tE(e, a));
                                                            }),
                                                                (i = $.VW.richValue(e));
                                                        } catch (e) {
                                                            td.warn(
                                                                "error applying arborium highlighting to editor",
                                                                e,
                                                            );
                                                        }
                                                    }));
                                            };
                                        return (
                                            (e.onChange = () => {
                                                $.VW.richValue(e) !== i &&
                                                    (H.o.withoutSaving(e, () => {
                                                        $.VW.withoutNormalizing(e, () => {
                                                            tE(e, a) &&
                                                                null == th &&
                                                                !r &&
                                                                ((r = !0),
                                                                (null == tp &&
                                                                    (tp = Promise.all([n.e("57036"), n.e("75134")])
                                                                        .then(n.bind(n, 981776))
                                                                        .then((e) => {
                                                                            th = e.default;
                                                                        })
                                                                        .catch((e) => {
                                                                            throw ((tp = null), e);
                                                                        })),
                                                                tp)
                                                                    .then(() => {
                                                                        (i = null),
                                                                            H.o.withoutSaving(e, () => {
                                                                                $.VW.withoutNormalizing(e, () => tE(e));
                                                                            }),
                                                                            (i = $.VW.richValue(e));
                                                                    })
                                                                    .catch(() => {})
                                                                    .finally(() => {
                                                                        r = !1;
                                                                    }));
                                                        });
                                                    }),
                                                    (i = $.VW.richValue(e))),
                                                    t();
                                            }),
                                            e
                                        );
                                    })(m)),
                                d &&
                                    (m = (function (e) {
                                        let { isInline: t, isVoid: n } = e;
                                        return (
                                            (e.isInline = (e) =>
                                                "testInline" === e.type || "testInlineVoid" === e.type || t(e)),
                                            (e.isVoid = (e) => "testInlineVoid" === e.type || n(e)),
                                            e
                                        );
                                    })(m)),
                                ((i = m).onKeyDown = (e) => {
                                    let t = i.isMac;
                                    switch (e.which) {
                                        case x.Ks6.B:
                                            if (!$.VW.isEditorEmpty(i) && tU(e, { ctrl: !t, cmd: t }))
                                                return (0, tx.Px)(i, "bold"), !0;
                                            break;
                                        case x.Ks6.I:
                                            if (!$.VW.isEditorEmpty(i) && tU(e, { ctrl: !t, cmd: t }))
                                                return (0, tx.Px)(i, "italics"), !0;
                                            break;
                                        case x.Ks6.U:
                                            if (!$.VW.isEditorEmpty(i) && tU(e, { ctrl: !t, cmd: t }))
                                                return (0, tx.Px)(i, "underline"), !0;
                                            break;
                                        case x.Ks6.S:
                                            if (!$.VW.isEditorEmpty(i) && tU(e, { ctrl: !t, cmd: t, shift: !0 }))
                                                return (0, tx.Px)(i, "strikethrough"), !0;
                                            break;
                                        case x.Ks6.TAB:
                                            if (null != i.selection && tU(e, { shift: null })) {
                                                let [t, n] = $.ZF.edges(i.selection),
                                                    r = $.VW.blocks(i).slice(t.path[0], n.path[0] + 1),
                                                    s = !0;
                                                for (let [e] of r)
                                                    if ("line" !== e.type || !e.codeBlockState?.isInCodeBlock) {
                                                        s = !1;
                                                        break;
                                                    }
                                                if (s) {
                                                    if (!e.shiftKey && $.ZF.isCollapsed(i.selection))
                                                        return z.b.insertText(i, "  "), !0;
                                                    let t = !e.shiftKey;
                                                    return (
                                                        H.o.withSingleEntry(i, () => {
                                                            let e = i.selection?.anchor ?? $.VW.start(i, []),
                                                                n = i.selection?.focus ?? $.VW.end(i, []);
                                                            for (let [s, a] of r) {
                                                                let r = s.children[0];
                                                                if (!$.l5.isText(r)) continue;
                                                                let o = $.PW.child(a, 0),
                                                                    l = { path: o, offset: 0 };
                                                                if (t)
                                                                    z.b.insertText(i, "  ", { at: l }),
                                                                        $.PW.equals(e.path, o) &&
                                                                            0 !== e.offset &&
                                                                            (e = { path: o, offset: e.offset + 2 }),
                                                                        $.PW.equals(n.path, o) &&
                                                                            0 !== n.offset &&
                                                                            (n = { path: o, offset: n.offset + 2 });
                                                                else if (r.text.startsWith("  ")) {
                                                                    let t = { path: $.PW.child(a, 0), offset: 2 };
                                                                    z.b.delete(i, { at: { anchor: l, focus: t } }),
                                                                        $.PW.equals(e.path, o) &&
                                                                            (e = {
                                                                                path: o,
                                                                                offset: Math.max(0, e.offset - 2),
                                                                            }),
                                                                        $.PW.equals(n.path, o) &&
                                                                            (n = {
                                                                                path: o,
                                                                                offset: Math.max(0, n.offset - 2),
                                                                            });
                                                                }
                                                            }
                                                            z.b.select(i, { anchor: e, focus: n });
                                                        }),
                                                        !0
                                                    );
                                                }
                                            }
                                            break;
                                        case x.Ks6.ARROW_LEFT:
                                        case x.Ks6.ARROW_RIGHT: {
                                            let n;
                                            if (tU(e, { shift: null })) n = "character";
                                            else if (tU(e, { ctrl: !t, alt: t, shift: null })) n = "word";
                                            else if (t && tU(e, { cmd: !0, shift: null })) return !1;
                                            else return !1;
                                            let r = i.children[i.selection?.focus?.path[0] ?? 0],
                                                s = "rtl" === tw()($.AS.string(r)),
                                                a = (e.which === x.Ks6.ARROW_LEFT) == !s;
                                            return (
                                                z.b.keyboardMove(i, {
                                                    reverse: a,
                                                    unit: n,
                                                    edge: e.shiftKey ? "focus" : void 0,
                                                }),
                                                !0
                                            );
                                        }
                                        case x.Ks6.A:
                                            if (t && tU(e, { ctrl: !0 }) && tk(i)) return !0;
                                            break;
                                        case x.Ks6.E:
                                            if (t && tU(e, { ctrl: !0 }) && tG(i)) return !0;
                                            break;
                                        case x.Ks6.HOME:
                                            if (tU(e, { shift: !1, ctrl: !1 }) && tk(i)) return !0;
                                            break;
                                        case x.Ks6.END:
                                            if (tU(e, { shift: !1, ctrl: !1 }) && tG(i)) return !0;
                                            break;
                                        case x.Ks6.BACKSPACE:
                                        case x.Ks6.DELETE:
                                        case x.Ks6.K:
                                            let n = e.which === x.Ks6.BACKSPACE;
                                            if (
                                                ((!t && e.which !== x.Ks6.K && tU(e, { ctrl: !0, shift: !0 })) ||
                                                    (t && e.which !== x.Ks6.K && tU(e, { cmd: !0 })) ||
                                                    (t && e.which === x.Ks6.K && tU(e, { ctrl: !0 }))) &&
                                                null != i.selection
                                            ) {
                                                let [e, t] = $.ZF.edges(i.selection),
                                                    [r, s] = $.VW.node(i, [n ? e.path[0] : t.path[0]]);
                                                if (
                                                    (tP()(
                                                        $.VW.isBlock(i, r),
                                                        "Top-most node of selection is not a block",
                                                    ),
                                                    (n && !$.Kh.isAtStart(e, [r, s])) ||
                                                        (!n && !$.Kh.isAtEnd(t, [r, s])))
                                                )
                                                    return n ? i.deleteBackward("line") : i.deleteForward("line"), !0;
                                            }
                                    }
                                    return !1;
                                }),
                                (m = (function (e, t) {
                                    let {
                                        apply: n,
                                        deleteBackward: i,
                                        deleteForward: r,
                                        deleteFragment: s,
                                        insertData: a,
                                        insertText: o,
                                        onChange: l,
                                    } = e;
                                    function u(n) {
                                        let i = H.o.currentEntry(e);
                                        if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
                                        e.history.index = n;
                                        let r = H.o.currentEntry(e);
                                        t({ newValue: r.value, newSelection: r.selection });
                                    }
                                    (e.history = { index: 0, stack: [] }),
                                        (e.onChange = () => {
                                            let { history: t } = e;
                                            0 === t.stack.length && ((t.stack = [tD(e)]), (t.index = 0)),
                                                null != e.selection && (H.o.currentEntry(e).selection = e.selection),
                                                (d = null),
                                                l();
                                        }),
                                        (e.undo = () => {
                                            e.history.index > 0 && u(e.history.index - 1);
                                        }),
                                        (e.redo = () => {
                                            e.history.index < e.history.stack.length - 1 && u(e.history.index + 1);
                                        });
                                    let c = null,
                                        d = null,
                                        _ = null;
                                    return (
                                        (e.apply = (t) => {
                                            let { history: i } = e;
                                            n(t);
                                            let r = $.VW.richValue(e);
                                            r !== _ &&
                                                (0 === i.stack.length && ((i.stack = [tD(e)]), (i.index = 0)),
                                                H.o.isSaving(e) &&
                                                    ((function (e, t, n) {
                                                        var i, r;
                                                        let s,
                                                            { selection: a } = e,
                                                            o = H.o.currentEntry(e),
                                                            l = !0,
                                                            u = !0;
                                                        if (
                                                            ("insert_text" === t.type && 1 === t.text.length
                                                                ? ((s = "insert"),
                                                                  (u = !(
                                                                      ("" === t.text || t.text.endsWith(" ")) &&
                                                                      n?.type === "insert_text" &&
                                                                      !("" === n.text && n.text.endsWith(" "))
                                                                  )))
                                                                : "split_node" === t.type
                                                                  ? (s = "insert")
                                                                  : "remove_text" === t.type && 1 === t.text.length
                                                                    ? (s = "delete")
                                                                    : ((s = "other"), (l = !1), (u = !1)),
                                                            "set_selection" === t.type && null != o)
                                                        ) {
                                                            o.selection = a;
                                                            return;
                                                        }
                                                        l &&
                                                        ((i = o),
                                                        (r = s),
                                                        !(i?.type !== r || Date.now() - i.createdAt >= 4e3))
                                                            ? H.o.insertOrMergeEntry(e, s, u)
                                                            : H.o.insertEntry(e, s, u);
                                                    })(e, t, c),
                                                    (c = t)),
                                                (d = t),
                                                (_ = r));
                                        }),
                                        (e.deleteBackward = (t) => {
                                            H.o.withSingleEntry(e, () => i(t));
                                        }),
                                        (e.deleteForward = (t) => {
                                            H.o.withSingleEntry(e, () => r(t));
                                        }),
                                        (e.deleteFragment = (t) => {
                                            H.o.withSingleEntry(e, () => s(t));
                                        }),
                                        (e.insertText = (t) => {
                                            1 === t.length && d?.type === "remove_text"
                                                ? H.o.withMergedEntry(e, () => o(t))
                                                : null != e.selection && $.ZF.isExpanded(e.selection)
                                                  ? H.o.withSingleEntry(e, () => o(t))
                                                  : o(t);
                                        }),
                                        (e.insertData = (t) => {
                                            d?.type === "remove_text"
                                                ? H.o.withMergedEntry(e, () => a(t))
                                                : H.o.withSingleEntry(e, () => a(t));
                                        }),
                                        e
                                    );
                                })(
                                    (m = (function (e, t, n) {
                                        let { onChange: i } = e,
                                            r = !1,
                                            s = !1;
                                        return (
                                            (e.onChange = () => {
                                                if (r) {
                                                    s = !0;
                                                    return;
                                                }
                                                r = !0;
                                                try {
                                                    let e = 0;
                                                    do {
                                                        if (((s = !1), e++ >= 5)) break;
                                                        t?.();
                                                        try {
                                                            i();
                                                        } finally {
                                                            n?.();
                                                        }
                                                    } while (s);
                                                } finally {
                                                    r = !1;
                                                }
                                            }),
                                            e
                                        );
                                    })(
                                        (m = (function (e) {
                                            let { apply: t, onChange: n } = e;
                                            return (
                                                (e.apply = (n) => {
                                                    t(n),
                                                        $.Ot.isValid(e, e.selection) &&
                                                            (e.lastGoodSelection = e.selection);
                                                }),
                                                (e.onChange = () => {
                                                    if (
                                                        ($.Ot.isValid(e, e.selection) ||
                                                            (e.selection = (function (e) {
                                                                let t;
                                                                if ($.Ot.isValid(e, e.lastGoodSelection))
                                                                    t = e.lastGoodSelection;
                                                                else {
                                                                    let n = $.VW.end(e, []);
                                                                    t = { anchor: n, focus: n };
                                                                }
                                                                return t;
                                                            })(e)),
                                                        null != e.selection)
                                                    ) {
                                                        let t,
                                                            n,
                                                            [i, r] = $.ZF.edges(e.selection),
                                                            s = !1;
                                                        for (
                                                            ;
                                                            null != i &&
                                                            null != (t = $.VW.getParentVoid(e, i)) &&
                                                            !eJ.XR.includes(t[0].type);
                                                        )
                                                            (i = $.VW.before(e, i, { unit: "offset" })), (s = !0);
                                                        for (
                                                            ;
                                                            null != r &&
                                                            null != (n = $.VW.getParentVoid(e, r)) &&
                                                            !eJ.XR.includes(n[0].type);
                                                        )
                                                            (r = $.VW.after(e, r, { unit: "offset" })), (s = !0);
                                                        s &&
                                                            null != i &&
                                                            null != r &&
                                                            ($.ZF.isForward(e.selection)
                                                                ? z.b.select(e, { anchor: i, focus: r })
                                                                : z.b.select(e, { anchor: r, focus: i }));
                                                    }
                                                    n();
                                                }),
                                                e
                                            );
                                        })(
                                            (m = (function (e) {
                                                let { insertBreak: t, insertText: n } = e;
                                                return (
                                                    (e.insertBreak = () => {
                                                        tb(e) && t();
                                                    }),
                                                    (e.insertSoftBreak = () => {
                                                        e.insertBreak();
                                                    }),
                                                    (e.insertText = (t) => {
                                                        if (0 > t.indexOf("\r") && 0 > t.indexOf("\n"))
                                                            return void n(t);
                                                        let i = t.split(/\r\n|\r|\n/);
                                                        tb(e)
                                                            ? H.o.withSingleEntry(e, () => {
                                                                  let t = !1;
                                                                  for (let r of i)
                                                                      t && z.b.splitNodes(e, { always: !0 }),
                                                                          n(r),
                                                                          (t = !0);
                                                              })
                                                            : n(i.join(" "));
                                                    }),
                                                    e
                                                );
                                            })((m = i))),
                                        )),
                                        _,
                                        f,
                                    )),
                                    (e) => {
                                        let { newValue: t, newSelection: n } = e;
                                        return p(m, "undo", { value: t, selection: n });
                                    },
                                ));
                        })({ ...e, editor: r, windowContext: t, previewMarkdown: i }),
                        r
                    );
                });
            return (
                s.useEffect(() => {
                    let e = () => r.onChange();
                    return (
                        E.A.addChangeListener(e),
                        eY.Ay.addChangeListener(e),
                        () => {
                            E.A.removeChangeListener(e), eY.Ay.removeChangeListener(e);
                        }
                    );
                }, [r]),
                s.useEffect(() => {
                    r.previewMarkdown !== i && ((r.previewMarkdown = i), r.onChange());
                }, [r, i]),
                r
            );
        })({
            channel: p,
            chatInputType: f,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            onChangeStart: s.useCallback(() => {
                eE.current = !1;
            }, []),
            onChangeEnd: s.useCallback(() => {
                eE.current = !0;
            }, []),
            updateState: eI,
        }),
        eS = s.useCallback(
            (e, t) => {
                let n = B.SQ(eT, e, p.id),
                    i = B.cd(e, p.guild_id, p.id, n, t);
                return { values: n, results: i };
            },
            [p.guild_id, p.id, eT],
        ),
        eN = s.useCallback(() => {
            let e,
                t = $.VW.getNodesOfType(eT, ["timestampMentionInput"]),
                n = null != t ? [...t] : null,
                i = ee ? E.A.getActiveCommand(p.id) : null,
                r = !1;
            if (null != i && null != i.options) {
                let t = eS(i, !1);
                e = t.values;
                let n = B.O7(eT)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (i.options ?? []).find((t) => t.name === e));
                for (let e of i.options)
                    !e.required || e.name in t.values || (z.b.insertCommandOption(eT, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    z.b.selectCommandOption(eT, e.name),
                        (r = !0),
                        (0, F.zV)(x.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: i?.applicationId,
                            command_id: i?.rootCommand?.id,
                            argument_type: h.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    z.b.setNodes(eT, { error: !0 }, { at: t }), r || z.b.select(eT, $.VW.end(eT, t)), (r = !0);
            if (r) {
                V._.dispatch(x.jej.SHAKE_APP, { duration: 200, intensity: 2 }), q?.();
                return;
            }
            K?.((0, eG.WO)($.VW.richValue(eT), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), i, e);
        }, [p.id, eT, K, q, eS, ee]);
    s.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eT,
            submit(e) {
                e?.preventDefault(), eN();
            },
            focus() {
                $.VW.focus(eT);
            },
            blur() {
                j.rL.blur(eT);
            },
            getCurrentWord() {
                let e = eT.selection;
                if (null == e || !$.Ot.isValid(eT, e) || $.ZF.isExpanded(e) || tC(eT))
                    return { word: null, isAtStart: !1 };
                let [t, n] = $.VW.node(eT, $.PW.parent(e.anchor.path)),
                    [i, r] = $.VW.node(eT, e.anchor.path),
                    s = e.anchor.offset;
                if (!$.PW.hasPrevious(r) && $.l5.isText(i)) {
                    let e = i.text.substring(0, s);
                    if ($.AS.isType(t, "applicationCommand") && s < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let a = "",
                    o = !1;
                for (;;) {
                    if (--s < 0) {
                        if (!$.PW.hasPrevious(r)) {
                            o = !0;
                            break;
                        }
                        [i, r] = $.VW.node(eT, $.PW.previous(r));
                    }
                    if (!$.l5.isText(i)) break;
                    let e = i.text[s];
                    if (eJ.ug.test(e)) break;
                    a = e + a;
                }
                let l = a,
                    u = e.anchor.offset,
                    [c] = $.VW.node(eT, e.anchor.path);
                for (; $.l5.isText(c) && !(u >= c.text.length); ) {
                    let e = c.text[u];
                    if (eJ.ug.test(e)) break;
                    (l += e), u++;
                }
                return { word: a, fullWord: l, isAtStart: o && $.PW.isFirstEditorBlock(n) };
            },
            getFirstText: () => $.VW.getFirstText(eT)?.text ?? "",
            getCurrentCommandOption() {
                let e = B.M3(eT);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = B.M3(eT);
                if (null == e) return [];
                let t = E.A.getActiveCommand(p.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : B.FV(eT, n, e[0], p.id);
            },
            getCommandOptionValues() {
                let e = E.A.getActiveCommand(p.id);
                return null == e ? {} : B.SQ(eT, e, p.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                H.o.withSingleEntry(eT, () => {
                    let i = B.M3(eT),
                        r = null != i && tJ(p, i[0]);
                    if (
                        (null != t && r && (z.b.removeInlineChildren(eT, i), (n = !1)), t0(eT, e, t, n), null != t && r)
                    ) {
                        let e = B.n$(eT);
                        if (((i = $.cv.updateElement(eT, i)), null != e)) {
                            let t = $.cv.markdown(e[0], p.guild_id);
                            t$(eT, i, p.id, t) && (i = $.cv.updateElement(eT, i));
                        }
                        B.ke(eT, p.guild_id, p.id, $.cv.updateElement(eT, i), !1), z.b.selectNextCommandOption(eT);
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: i = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                H.o.withSingleEntry(eT, () => {
                    let r = B.M3(eT),
                        s = null != r && tJ(p, r[0]);
                    if (s) z.b.removeInlineChildren(eT, r), (n = !1);
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            z.b.delete(eT, { distance: e.length, unit: "character", reverse: !0 }),
                            i &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                z.b.delete(eT, { distance: t.length - e.length, unit: "character" });
                    }
                    t0(eT, e, t, n), s && z.b.selectNextCommandOption(eT);
                });
            },
            insertInlineAutocompleteInput(e) {
                H.o.withSingleEntry(eT, () => {
                    let { word: t } = this.getCurrentWord();
                    null != t && t.length > 0 && z.b.delete(eT, { distance: t.length, unit: "character", reverse: !0 }),
                        z.b.insertNodes(eT, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                H.o.withSingleEntry(eT, () => {
                    let i = $.VW.getSelectedParentOfType(eT, [e]);
                    tP()(null != i, `Cannot replace inline input of type ${e} when none is selected`),
                        z.b.removeNodes(eT, { at: i[1] }),
                        t0(eT, t, n, !0);
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                H.o.withSingleEntry(eT, () => {
                    let e = t.animated ? "a" : "",
                        i = t.originalName ?? t.name ?? "";
                    t0(eT, `:${t.name}:`, null != t.id ? `<${e}:${i.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eT, p, eN],
    ),
        (i = s.useRef(null)),
        (a = s.useRef(null)),
        (l = s.useRef(null)),
        s.useLayoutEffect(() => {
            (a.current = t3(eT)),
                null == a.current &&
                    null == l.current &&
                    (l.current = setTimeout(() => {
                        a.current = t3(eT);
                    }, 100));
        }, [eT]),
        s.useEffect(() => {
            let e = l.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []),
        (u = s.useCallback(() => {
            let e = a.current;
            if (null == e) return;
            let t = e.offsetHeight;
            i.current !== t && (null != eh.current && (eh.current.style.height = `${t}px`), (i.current = t), D?.(t));
        }, [eh, D])),
        (0, t1.g)(a, u, [u, eT, D], t2),
        s.useLayoutEffect(() => {
            let e = j.rL.findDocumentOrShadowRoot(eT).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = t3(eT);
            null != t && ((i.current = t.offsetHeight), D?.(i.current));
        }, [eh, eT, D]);
    let { handleKeyDown: ey, handleKeyUp: eC } = (function (e) {
            let {
                editor: t,
                channel: n,
                disableEnterToSubmit: i,
                onKeyDown: r,
                onKeyUp: a,
                onTab: o,
                onEnter: l,
                allowNewLines: u,
                submit: c,
                hideAutocomplete: d,
                moveSelection: _,
            } = e;
            return {
                handleKeyDown: s.useCallback(
                    (e) => {
                        switch (e.which) {
                            case x.Ks6.ARROW_UP:
                                if (_(-1)) return void e.preventDefault();
                                break;
                            case x.Ks6.ARROW_DOWN:
                                if (_(1)) return void e.preventDefault();
                                break;
                            case x.Ks6.P:
                                if (tU(e, { ctrl: !0 }) && _(-1)) return void e.preventDefault();
                                break;
                            case x.Ks6.N:
                                if (tU(e, { ctrl: !0 }) && _(1)) return void e.preventDefault();
                                break;
                            case x.Ks6.ESCAPE:
                                d?.();
                                break;
                            case x.Ks6.TAB:
                                if (tU(e, {}) && o?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                if (null != E.A.getActiveCommand(n.id)) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? z.b.selectPreviousCommandOption(t)
                                            : z.b.selectNextCommandOption(t);
                                    return;
                                }
                                break;
                            case x.Ks6.ENTER:
                                if (tU(e, {}) && l?.(e)) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        e.key !== U.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (i && !e.ctrlKey) || tC(t)) && u) ||
                            (e.preventDefault(), e.stopPropagation(), c()),
                            r?.(e);
                    },
                    [u, n.id, i, t, d, _, l, r, o, c],
                ),
                handleKeyUp: s.useCallback(
                    (e) => {
                        a?.(e);
                    },
                    [a],
                ),
            };
        })({
            editor: eT,
            channel: p,
            disableEnterToSubmit: ei,
            onKeyDown: P,
            onKeyUp: k,
            onTab: G,
            onEnter: W,
            allowNewLines: er,
            submit: eN,
            hideAutocomplete: X,
            moveSelection: Q,
        }),
        { handlePaste: ev, handleGlobalPaste: eO } =
            ((c = s.useCallback(
                (e) => {
                    if (eg) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = b(e);
                    return t && (e.preventDefault(), e.stopPropagation()), t;
                },
                [eg, b],
            )),
            (d = s.useCallback(
                (e) => {
                    let { event: t } = e;
                    c(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eT.insertData(t.clipboardData), $.VW.focus(eT)));
                },
                [eT, c],
            )),
            { handlePaste: c, handleGlobalPaste: d }),
        eR = s.useCallback(
            (e) => {
                Z?.();
            },
            [Z],
        ),
        eb = s.useCallback(
            (e) => {
                e !== ep.current ? em.current && R?.(null, (0, eG.WO)(e, { mode: "raw" }), e) : em.current && Z();
            },
            [Z, R],
        );
    s.useLayoutEffect(() => {
        eE.current && ((ep.current = _), eI(eT, "parent", { value: _ }));
    }, [eT, _, eI]),
        s.useEffect(() => {
            let e = () => {
                let e = E.A.getActiveCommand(p.id) ?? null;
                null !== e && null != e.options && eS(e, !0);
            };
            return g.A.addChangeListener(e), () => g.A.removeChangeListener(e);
        }, [p, eT, eS]);
    let eD = s.useCallback(
            (e) => [
                ...(function (e, t, n) {
                    if ($.VW.areStylesDisabled(e)) return [];
                    let [i, r] = t;
                    if (1 !== r.length || !$.AS.isInTypes(i, eV)) return eB;
                    let { entries: s, serializedChildren: a } = $.cv.markdown(i, n, !0),
                        o = [];
                    for (let t = 0; t < s.length; t++) {
                        let n = s[t];
                        if (n.attributes.length > 0 && n.text.length > 0) {
                            let i = s[t - 1],
                                l = s[t + 1],
                                u = { anchor: eF(e, r, a, n.start), focus: eF(e, r, a, n.start + n.text.length) },
                                c = $.VW.nodes(e, { at: u, mode: "lowest", voids: !1 }),
                                d = {};
                            for (let e of n.attributes)
                                if (((d[e] = !0), "syntaxBefore" === e && null != l))
                                    for (let e of l.attributes) d[`before_${e}`] = !0;
                                else if ("syntaxAfter" === e && null != i)
                                    for (let e of i.attributes) d[`after_${e}`] = !0;
                            for (let [t, n] of c) {
                                let t = { anchor: $.VW.start(e, n), focus: $.VW.end(e, n) };
                                $.Kh.isBefore(t.anchor, u.anchor) && (t.anchor = u.anchor),
                                    $.Kh.isAfter(t.focus, u.focus) && (t.focus = u.focus),
                                    o.push({ ...d, ...t });
                            }
                        }
                    }
                    return o;
                })(eT, e, p.guild_id),
                ...(function (e, t) {
                    if ($.VW.areStylesDisabled(e)) return [];
                    let [n, i] = t,
                        r = [];
                    if (!$.AS.isType(n, "line") || null == n.codeBlockState) return r;
                    let { hljsTypes: s, isStyledCodeBlockLine: a } = n.codeBlockState;
                    if (null == s || 0 === s.length || !a) return [];
                    for (let t of s) {
                        let s = n.children.map((e) => ($.l5.isText(e) ? e.text : null));
                        r.push({ hljsTypes: t.types, anchor: eF(e, i, s, t.start), focus: eF(e, i, s, t.end) });
                    }
                    return r;
                })(eT, e),
                ...(function (e, t) {
                    if ($.VW.areStylesDisabled(e)) return [];
                    let [n, i] = t,
                        r = [];
                    if (!$.l5.isText(n)) return r;
                    let [s] = $.VW.node(e, $.PW.parent(i));
                    return (
                        $.AS.isType(s, "applicationCommand") &&
                            n === s.children[0] &&
                            r.push({
                                anchor: { path: i, offset: 0 },
                                focus: { path: i, offset: 0 + s.command.displayName.length + 1 },
                                commandName: !0,
                            }),
                        r
                    );
                })(eT, e),
            ],
            [eT, p],
        ),
        ew = s.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: i, children: s, element: a } = t;
                    switch (a.type) {
                        case "applicationCommand":
                            let o = E.A.getActiveCommand(n),
                                l = 0,
                                u = 0;
                            if (null != o && o.id === a.command.id) {
                                let t = B.O7(e);
                                for (let e of o.options ?? []) t.includes(e.name) ? u++ : l++;
                            }
                            let c = {};
                            if (l > 0) {
                                let e;
                                (e =
                                    u > 0
                                        ? eA.intl.formatToPlainString(eA.t.BP8N0K, { count: l })
                                        : eA.intl.formatToPlainString(eA.t.lziVC9, { count: l })),
                                    (c["data-trailing-placeholder"] = e);
                            }
                            return (0, r.jsx)("div", { className: eL.uB, ...i, ...c, children: s });
                        case "applicationCommandOption":
                            return (0, r.jsx)(t4, { attributes: i, channelId: n, element: a, children: s });
                        default:
                            return null;
                    }
                })(eT, e, p.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "timestampMentionInput" === i.type
                                ? (0, r.jsx)(t5, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    t
                );
            },
            [p.id, eT],
        ),
        eM = s.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: i, text: s } = e;
                    if (i.commandName) {
                        let e = o()(eL.p6, { [eL.BI]: "" === s.text });
                        return (0, r.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(A.EG, { event: x.jej.GLOBAL_CLIPBOARD_PASTE, handler: eO }),
            (0, r.jsx)("div", {
                ref: eh,
                className: o()(m, t7.pC),
                children: (0, r.jsx)(ek, {
                    id: I,
                    editor: eT,
                    channelId: p.id,
                    guildId: p.guild_id,
                    className: o()(t7.gf, O),
                    placeholder: C,
                    readOnly: eg,
                    spellCheck: J,
                    autoFocus: !en,
                    canFocus: !T,
                    onChange: eb,
                    onFocus: L,
                    onBlur: M,
                    onClick: eR,
                    onPaste: ev,
                    onKeyDown: ey,
                    onKeyUp: eC,
                    decorate: eD,
                    renderExtraElement: ew,
                    renderExtraLeaf: eM,
                    "aria-owns": es,
                    "aria-haspopup": eo,
                    "aria-expanded": ea,
                    "aria-activedescendant": el,
                    "aria-controls": eu,
                    "aria-labelledby": e_,
                    "aria-describedby": ed,
                    "aria-invalid": ec,
                    "aria-autocomplete": ef,
                    "aria-required": v,
                }),
            }),
        ],
    });
});
var t9 = n(266599);
new m.A("ChannelEditor.tsx");
let ne = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class nt extends s.Component {
    ref = s.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    constructor(e) {
        super(e),
            (this._unsubscribe = y.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = { focused: !1, submitting: !1, popup: y.Y0.getState() });
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
            (e = this.props.useSlate ? this.props.textValue : (0, eG.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, N.x7)(e));
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
            i = this.ref.current;
        null != t && null != i && (i.insertEmoji({ emoji: t, addSpace: n }), n && this.focus());
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
            let i = t.length > 0 ? e.replace(/([_`\xb4*])/g, "\\$1") : e;
            t.length > 0 && !t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(i, void 0, !0);
        }
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({ focused: !0, submitting: !1 }), d.A.saveDraft(e.id, "", t.drafts.type);
    }
    getCurrentWord() {
        let e = this.ref.current;
        return e?.getCurrentWord() ?? { word: null, isAtStart: !1 };
    }
    insertAutocomplete(e, t, n) {
        let i = this.ref.current;
        return i?.insertAutocomplete(e, t, n);
    }
    insertInlineAutocompleteElement(e) {
        let t = this.ref.current;
        return t?.insertInlineAutocompleteInput(e);
    }
    replaceInlineAutocompleteInput(e, t, n) {
        let i = this.ref.current;
        return i?.replaceInlineAutocompleteInput(e, t, n);
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
                { type: n, channel: i } = e.props;
            n.drafts.autoSave && (t && e.saveCurrentTextThrottled.cancel(), e.handleSaveCurrentText(i.id));
        };
    })();
    handleBeforeUnload = () => this.saveCurrentText();
    saveCurrentTextThrottled = u().throttle(this.saveCurrentText.bind(this, !1), 500);
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: i } = this.props;
        return e && !n ? (i ? "" : eA.intl.string(eA.t.IYKTTc)) : t;
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
                onResize: a,
                onSubmit: l,
                onSubmitFailure: u,
                channel: d,
                type: _,
                useSlate: f,
                spellcheckEnabled: h,
                useNewSlashCommands: p,
                canOnlyUseTextCommands: E,
                className: m,
                id: g,
                required: I,
                maxCharacterCount: T,
                allowNewLines: y,
                "aria-describedby": C,
                "aria-labelledby": v,
                accessibilityLabel: O,
                showValueWhenDisabled: R,
            } = this.props,
            { submitting: b, popup: D } = this.state,
            L = {
                channel: d,
                className: o()(m, t9.Tg, { [t9.w5]: f, [t9.Rr]: n || b }),
                id: g,
                placeholder: this.getPlaceholder(),
                required: I,
                accessibilityLabel: O,
                disabled: n || !1,
                submitting: b,
                isEdit: _ === S.oU.EDIT,
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
                onResize: a,
                onKeyDown: s,
                onSubmit: l,
                textAreaPaddingClassName: o()({
                    [t9.H$]: _ === S.oU.CREATE_FORUM_POST,
                    [t9.g_]: _ === S.oU.CUSTOM_GIFT,
                    [t9.Yg]: _ === S.oU.USER_PROFILE,
                    [t9.$$]: _ === S.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: h,
                useNewSlashCommands: p,
                disableAutoFocus: c.Fr || (_.disableAutoFocus ?? !1),
                disableEnterToSubmit: _.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": D.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== D.id || void 0,
                "aria-activedescendant": D.activeDescendant ?? void 0,
                "aria-invalid": e.length > T,
                "aria-describedby": C,
                "aria-labelledby": v,
                "aria-autocomplete": "list",
            },
            w = f
                ? (0, r.jsx)(t8, {
                      ref: this.ref,
                      ...L,
                      type: _,
                      value: n && !R ? (0, N.x7)("") : t,
                      canUseCommands: _.commands?.enabled,
                      canOnlyUseTextCommands: E,
                      onSubmitFailure: u,
                  })
                : (0, r.jsx)(G, { ref: this.ref, ...L, value: n && !R ? "" : e });
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(A.EG, { event: x.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, r.jsx)(A.EG, { event: x.jej.CLEAR_TEXT, handler: this.handleClearText }),
                w,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        d.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, N.x7)(""));
    };
    handleInsertText = (e) => {
        let { plainText: t, rawText: n, addSpace: i = !1 } = e;
        this.props.disabled || (this.appendText(t, n, i), this.focus());
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
                channel: i,
                canPasteFiles: r,
                uploadPromptCharacterCount: s,
                promptToUpload: a,
                maxCharacterCount: o,
                type: l,
            } = this.props,
            u =
                null != n
                    ? (function (e) {
                          if (null == e) return null;
                          let t = (0, R.Q2)(e);
                          return null == t ? null : b(t);
                      })(n)
                    : null,
            c = null == (t = O.A.getFocusedWindowId()) ? null : b(t),
            d = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, R.Q2)(e);
                return n === (0, R.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (u ?? c ?? i)
                : i;
        if (null == a || (!d.isPrivate() && !r) || (d.isPrivate() && d.isManaged())) return !1;
        let { files: m, errors: A } = (function (e, t) {
            let n = [],
                i = [],
                r = null,
                s = null,
                a = [];
            for (let t of e.items)
                if ("file" === t.kind) {
                    let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
                    if (null != e && !1 === e.isFile) {
                        a.push({ item: t, error: "is_directory" });
                        continue;
                    }
                    let r = t.getAsFile();
                    if (null == r) continue;
                    null != r.path && r.path.length > 0 ? n.push(r) : i.push(r);
                } else
                    "string" === t.kind &&
                        ("text/plain" === t.type && null == r
                            ? (r = t)
                            : "text/html" === t.type && null == s && (s = t));
            if (n.length > 0) return { files: n, errors: a };
            if (i.length > 0) {
                if (1 === i.length && "image/png" === i[0].type && null != s) {
                    let t = i[0],
                        n =
                            (function (e) {
                                let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                                if (null != t) {
                                    let e;
                                    try {
                                        let { pathname: n } = new URL(t.src);
                                        null != n && n.length > 0 && (e = (0, T.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(s.type)) ?? t.name;
                    return { files: [(0, I.VE)(t, n, t.type)], errors: a };
                }
                return { files: i, errors: a };
            }
            if (null != r && null != t) {
                let n = e.getData(r.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, I.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: a };
                }
            }
            return { files: [], errors: a };
        })(e.clipboardData, l.uploadLongMessages ? (s ?? o) : null);
        return (ne(
            "onPaste",
            [...e.clipboardData.items].map((e) => {
                if ("file" !== e.kind) return { kind: e.kind, type: e.type };
                {
                    let t = e.getAsFile();
                    return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
                }
            }),
        ),
        0 === m.length)
            ? (A?.some((e) => {
                  let { error: t } = e;
                  return "is_directory" === t;
              }) &&
                  (0, f.openUploadError)({ title: eA.intl.string(eA.t.azO1Pe), help: eA.intl.string(eA.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              ((e) => {
                  let t = E.A.getActiveCommand(d.id);
                  if (null == t) return a(e, d, l.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = l.drafts.commandType ?? l.drafts.type,
                      i = null,
                      r = E.A.getActiveOption(d.id);
                  null !=
                      (i =
                          r?.type === h.n4.ATTACHMENT
                              ? r
                              : t.options?.find((e) => {
                                    if (e.type === h.n4.ATTACHMENT) return null == g.A.getUpload(d.id, e.name, n);
                                })) &&
                      _.A.setFile({
                          channelId: d.id,
                          id: i.name,
                          draftType: n,
                          file: { id: i.name, platform: p.xz.WEB, file: e[0] },
                      });
              })(m),
              this.focus(),
              !0);
    };
}
