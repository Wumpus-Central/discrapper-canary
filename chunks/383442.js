"use strict";
n.d(t, { A: () => tZ }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(607399),
    c = n(465532),
    d = n(608299),
    _ = n(494921),
    f = n(155718),
    h = n(565150),
    p = n(861382),
    E = n(626584),
    m = n(522602),
    g = n(234320),
    A = n(453771),
    I = n(741394),
    T = n(355622),
    S = n(408018),
    N = n(579940),
    y = n(734057),
    C = n(222823),
    v = n(531685),
    O = n(365971);
function R(e) {
    let t = C.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (y.A.getChannel(t) ?? null);
}
var b = n(826745),
    D = n(442433),
    L = n(721768),
    w = n(723702),
    M = n(677134),
    P = n(652215),
    x = n(650583);
let U = /(\t|\s)/;
class k extends r.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
        this.props.disableAutoFocus ||
            (Promise.resolve().then(() => {
                let { value: e } = this.props;
                this._ref?.setSelection(e.length, e.length);
            }),
            this.focus()),
            null != p.A.getActiveCommand(this.props.channel.id) &&
                L.Gf({ channelId: this.props.channel.id, command: null, section: null });
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
        for (; n > 0 && !U.test(t[n - 1]); ) n--;
        let r = e.selectionEnd;
        for (; r < t.length && !U.test(t[r]); ) r++;
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
        s?.(null, r, (0, S.x7)(r));
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
            required: r,
            onResize: s,
            className: o,
            id: l,
            submitting: u,
            textAreaPaddingClassName: c,
            spellcheckEnabled: d,
            "aria-controls": _,
            "aria-expanded": f,
            "aria-activedescendant": h,
        } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.EG, { event: P.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(b.y, {
                    ref: this.handleSetRef,
                    className: a()(o, c),
                    id: l,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || u,
                    required: r,
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
            e.key === x.dh.ENTER &&
            !e.shiftKey &&
            !this.hasOpenCodeBlock() &&
            (!this.props.disableEnterToSubmit || e.ctrlKey)
        )
            return e.preventDefault(), this.props.onSubmit(this.props.value);
    };
    handleKeyDown = (e) => {
        switch (e.which) {
            case P.Ks6.ARROW_DOWN:
                this.props.moveSelection(1) && e.preventDefault();
                break;
            case P.Ks6.N:
                e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                break;
            case P.Ks6.ARROW_UP:
                this.props.moveSelection(-1) && e.preventDefault();
                break;
            case P.Ks6.P:
                e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                break;
            case P.Ks6.TAB:
            case P.Ks6.ENTER:
                this.handleTabOrEnterDown(e);
        }
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
    handleTabOrEnterDown(e) {
        (e.key === x.dh.TAB && this.props.onTab()) || (e.key === x.dh.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.key === x.dh.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.key === x.dh.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.key) {
            case x.dh.ARROW_RIGHT:
            case x.dh.ARROW_LEFT:
            case x.dh.HOME:
            case x.dh.END:
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
        w.isPlatformEmbedded &&
            (0, D.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("30803"), n.e("42312")]).then(n.bind(n, 216603));
                    return (t) => (0, i.jsx)(e, { ...t, text: (0, M.u)() });
                },
                { align: "bottom", enableSpellCheck: !0 },
            );
    };
    handleOnChange = (e) => {
        let { onChange: t, allowNewLines: n } = this.props,
            i = e.currentTarget.value,
            r = n ? i : i.replace("\n", "");
        t?.(e, r, (0, S.x7)(r));
    };
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText(`:${t.name}:`, void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
}
var G = n(95561),
    F = n(625494),
    V = n(317681),
    B = n(186306),
    H = n(670482),
    j = n(267102),
    Y = n(38405),
    W = n(654821),
    K = n(35277),
    z = n(820066),
    $ = n(112107),
    q = n(17928),
    Z = n(990078),
    X = n(778712),
    Q = n(939249),
    J = n(545442),
    ee = n(565645),
    et = n(730134),
    en = n(775602),
    ei = n(47167),
    er = n(376943),
    es = n(465365),
    ea = n(78390),
    eo = n(785562),
    el = n(332173),
    eu = n(37632),
    ec = n(967144);
n(209932);
var ed = n(317525),
    e_ = n(994500),
    ef = n(351906),
    eh = n(287809),
    ep = n(871237),
    eE = n(562153),
    em = n(427262),
    eg = n(375708),
    eA = n(178259);
function eI(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(Z.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(ee.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function eT(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(Z.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, i.jsx)(ee.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function eS(e) {
    let { text: t } = e;
    return (0, i.jsx)(el.A, { children: t });
}
function eN(e) {
    let { id: t, guildId: n, channelId: r } = e,
        s = (0, q.bG)([eh.default], () => eh.default.getUser(t)),
        a = (0, q.bG)([ef.A], () => ef.A.hidePersonalInformation),
        o = eE.Ay.useName(n, r, s),
        l = (0, i.jsx)(el.A, { children: null == o ? `<@${t}>` : `@${o}` });
    if (null != s) {
        let e = a || s.hasUniqueUsername() ? null : `#${s.discriminator}`;
        return (0, i.jsx)(Z.m, {
            __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
                className: eA.fX,
                children: [
                    (0, i.jsx)(et.A, { user: s, animate: !0, size: X._3.SIZE_16, className: eA.my }),
                    em.Ay.getUserTag(s, { mode: "username", identifiable: a ? "never" : "always" }),
                    (0, i.jsx)("span", { className: eA.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": em.Ay.getUserTag(s, { decoration: "never" }),
            asContainer: !0,
            children: (0, i.jsx)(Q.D, { tag: "span", children: l }),
        });
    }
    return l;
}
function ey(e) {
    let { id: t, guildId: n } = e,
        r = (0, q.bG)([ed.A], () => (null != n ? ed.A.getRole(n, t) : void 0)),
        s = (0, q.bG)([en.A], () => en.A.roleStyle),
        a = (0, ec.X_)(n, r, r?.colorStrings);
    if (null == r) return (0, i.jsxs)("span", { children: ["@", eg.intl.string(eg.t["YV4F/n"])] });
    let o = null != r.color && 0 !== r.color,
        l = "username" === s && o;
    return (0, i.jsxs)(el.A, {
        color: l ? r.color : null,
        roleColors: l ? a : null,
        children: [
            "dot" === s && (0, i.jsx)(J.W, { color: r.colorString, colors: a, background: !1, tooltip: !1 }),
            "@",
            r.name,
        ],
    });
}
function eC(e) {
    let { id: t } = e,
        n = (0, q.bG)([y.A], () => y.A.getChannel(t)),
        r = eg.intl.string(eg.t.zLZPmk).toLowerCase(),
        s = "text",
        a = !0;
    return (null != n &&
        ((r = (0, er.nc)(n) ? (0, ei.m1)(n, eh.default, e_.A) : eg.intl.string(eg.t["/YzI63"])),
        (s = (0, er.nc)(n) ? ((0, ep.QG)(n) ?? "text") : "locked"),
        (a = (0, es.Y)(n.type))),
    a)
        ? (0, i.jsx)(el.A, { iconType: s, children: r })
        : (0, i.jsx)("span", { children: "#" + r });
}
function ev(e) {
    let { id: t, itemId: n, guildId: r } = e,
        s = (0, ea.Q)(t),
        a = (0, ea.f)(t, n, r);
    return (0, i.jsxs)(el.A, { iconType: t, children: [s, null != a && (0, i.jsx)(eu.A, {}), a] });
}
function eO(e) {
    let { text: t, id: n } = e;
    return (0, i.jsxs)(el.A, { children: [t, "(", n, ")"] });
}
function eR(e) {
    let { timestamp: t } = e;
    return (0, i.jsx)(eo.A, { node: t, className: "R" === t.format ? eA.gS : null });
}
var eb = n(571898),
    eD = n(494715),
    eL = n(766184);
let ew = {
    strong: eb.bold,
    em: eb.italics,
    u: eb.underline,
    s: eb.strikethrough,
    inlineCode: eb.inlineCode,
    link: eb.fakeLink,
    url: eb.fakeLink,
    autolink: eb.fakeLink,
    silentPrefix: eb.fakeLink,
    spoiler: a()(eL.ur, eL.F0, eL.kx, eb.spoiler),
    staticRouteLink: eb.fakeLink,
    syntaxBefore: eb.syntaxBefore,
    syntaxAfter: eb.syntaxAfter,
    codeBlockText: eb.codeBlockText,
    codeBlockSyntax: eb.codeBlockSyntax,
    codeBlockLang: eb.codeBlockLang,
    subtext: eb.subtext,
};
var eM = n(992595);
let eP = (e) => {
    let { className: t, attributes: n, children: r } = e,
        s = a()(eD.S0, eD.Cj, t);
    return (0, i.jsx)("span", { ...n, className: s, contentEditable: !1, children: r });
};
var ex = n(422404);
class eU extends r.PureComponent {
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
            z.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, S.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: z.VW.richValue(e.editor), showPlaceholder: !1 });
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
        Y.A.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] });
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
                            return !0 === n && t in ew ? ew[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (o.type) {
                    case "line":
                        if (o.codeBlockState?.isInCodeBlock)
                            return (0, i.jsx)("div", {
                                className: eb.codeLine,
                                spellCheck: null == o.codeBlockState || null == o.codeBlockState.lang,
                                ...r,
                                children: s,
                            });
                        return (0, i.jsx)("div", { ...r, children: s });
                    case "blockQuote": {
                        let e = a()(eM.h, eM.MN);
                        return (0, i.jsxs)("div", {
                            ...r,
                            className: e,
                            children: [
                                (0, i.jsx)("span", { contentEditable: !1, className: eM.r }),
                                (0, i.jsx)("blockquote", { children: s }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(eI, { emoji: o.emoji }), s],
                        });
                    case "customEmoji":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(eT, { emoji: o.emoji }), s],
                        });
                    case "textMention":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(eS, { text: o.name }), s],
                        });
                    case "userMention":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(eN, { id: o.userId, channelId: n, guildId: t }), s],
                        });
                    case "roleMention":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(ey, { id: o.roleId, guildId: t }), s],
                        });
                    case "channelMention":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(eC, { id: o.channelId }), s],
                        });
                    case "staticRouteLink":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(ev, { id: o.id, itemId: o.itemId, guildId: t }), s],
                        });
                    case "soundboard":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)($.LF, { soundId: o.soundId }), s],
                        });
                    case "commandMention":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(eO, { text: o.commandName, id: o.commandId }), s],
                        });
                    case "timestamp":
                        return (0, i.jsxs)(eP, {
                            attributes: r,
                            className: u,
                            children: [(0, i.jsx)(eR, { timestamp: o.parsed }), s],
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
                        [c] = z.VW.node(e, z.PW.parent(z.VW.findPath(e, l)));
                    switch (z.VW.isEditor(c) ? "editor" : c.type) {
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
                                            return [eb[t]];
                                        if (t in ew) return [ew[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = a()(e, { [eb.syntaxOverride]: "||" === o.text || "\\" === o.text });
                        }
                    }
                    return (
                        (n = a()(n, { [eD.BI]: "" === l.text })),
                        (0, i.jsx)("span", { ...r, className: n, spellCheck: u, children: s })
                    );
                })(t, e);
        return null != o ? o : (0, i.jsx)("span", { ...r, children: s });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = z.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(z.VW.richValue(e)),
            !1 === this.props.canFocus)
        ) {
            let t = H.rL.findDocumentOrShadowRoot(e).getSelection();
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
            n = H.rL.findDocumentOrShadowRoot(t).getSelection(),
            i = null != n && n.rangeCount > 0 ? n.getRangeAt(0) : null,
            r = e.getTargetRanges()[0] ?? null;
        if (null == t.composition) {
            if (
                ("insertText" === e.inputType || "insertReplacementText" === e.inputType) &&
                (null == r && (r = i), null != r)
            ) {
                let n = z.VW.toSlateRange(t, r, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (z.ZF.isExpanded(n)
                        ? B.o.withSingleEntry(t, () => {
                              (t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault();
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != i && !i.collapsed) {
                let n = z.VW.toSlateRange(t, i, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    z.ZF.isExpanded(n) &&
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
        let n = null != e.selection && z.ZF.isCollapsed(e.selection) ? z.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && z.ZF.isCollapsed(e.selection)
                    ? z.VW.above(e, { at: n[1], match: (t) => z.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            z.VW.isEditorEmpty(e))
        ) {
            K.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t);
            return;
        }
        let i = H.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            r = (i?.rangeCount ?? 0) > 0 ? i?.getRangeAt(0) : null;
        if (null == (null != r ? z.VW.toSlateRange(e, r, { exactMatch: !0, suppressThrow: !0 }) : null) && null != r) {
            let t = z.VW.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !0 });
            (e.selection = null), null != t ? K.b.select(e, t) : K.b.select(e, z.VW.end(e, []));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && z.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = z.AS.leaf(t, e);
            z.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                K.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), z.VW.insertText(t, e);
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
            r = H.rL.findDocumentOrShadowRoot(this.props.editor),
            s = r.getElementById("textarea-context"),
            a = r.getElementById("slate-toolbar");
        if (null != i && !(0, W.hasDomParent)(i, s) && !(0, W.hasDomParent)(i, a)) {
            let e = H.rL.findDocumentOrShadowRoot(t).getSelection();
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
                if ((0, W.hasDomParent)(r, t) || (!(0, W.isDOMRangeCollapsed)(r, a, s, o) && (0, W.hasDomParent)(s, t)))
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
                if ((0, W.hasDomParent)(a, t)) {
                    if (i) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    i = !0;
                }
                if (!(0, W.isDOMRangeCollapsed)(a, l, o, u))
                    if ((0, W.hasDomParent)(a, t)) {
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
        if (w.isPlatformEmbedded) {
            let a = (0, j.zd)();
            (0, D.L3)(
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
                    return (n) => (0, i.jsx)(e, { ...n, editor: t, text: z.VW.getSelectedText(t, !0) });
                },
                {
                    align: null != r && null != s && r < s / 2 ? "top" : "bottom",
                    enableSpellCheck: a === P.BRT.APP,
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
            placeholder: o,
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
        return (0, i.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, i.jsx)("div", { className: a()(ex.q, t), "aria-hidden": !0, children: o })
                    : null,
                (0, i.jsx)(H.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, i.jsx)(H.Fo, {
                        ...g,
                        className: a()(eM.PT, ex.E, t),
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
                        autoFocus: s && !1 !== r,
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
var ek = n(323350);
function eG(e, t, n, i) {
    let r = 0;
    for (let s = 0; s < n.length; s++) {
        let a = n[s];
        if (null == a) continue;
        let o = r + a.length;
        if (i <= o) {
            let n = z.PW.child(t, s),
                a = z.VW.node(e, n)[0];
            if (z.l5.isText(a)) return { path: n, offset: Math.min(Math.max(i - r, 0), a.text.length) };
        }
        r = o;
    }
    let s = n.length - 1;
    return { path: z.PW.child(t, s), offset: n[s]?.length ?? 0 };
}
let eF = new Set(["line", "blockQuote"]),
    eV = [];
var eB = n(143236),
    eH = n(154283),
    ej = n(264322),
    eY = n(885386);
n(667532);
var eW = n(485845),
    eK = n(459016),
    ez = n(842209),
    e$ = n(392054),
    eq = n(168186),
    eZ = n(203779),
    eX = n(649671),
    eQ = n(551483);
n(827669);
let eJ = new Set(["applicationCommandOption"]),
    e0 = new Set([f.n4.ATTACHMENT]),
    e1 = new Set(["line", "applicationCommand"]);
function e2(e, t, n, i) {
    let [r] = z.VW.blocks(e)[0],
        s = (i ? (0, ek.IQ)(r, { mode: "plain" }).trimEnd() : "")
            .split("\n")
            .map((e) => ({ type: "line", children: [{ text: e }] })),
        a = [s.length - 1];
    for (let [, t] of (K.b.insertNodes(e, s, { at: eQ.Xg }), z.VW.blocks(e).reverse()))
        z.PW.isAfter(t, a) && K.b.removeNodes(e, { at: t, voids: !0 });
    null != n && L.Gf({ channelId: t, command: null, section: null });
}
function e3(e, t) {
    if (
        null == t.options ||
        1 !== t.options.length ||
        !0 === t.options[0].required ||
        e0.has(t.options[0].type) ||
        V.O7(e).length > 0 ||
        null == V.n$(e)
    )
        return !1;
    let n = z.VW.getFirstText(e);
    if (null == n) return !1;
    let i = t.options[0],
        r = { path: eQ.fP, offset: t.displayName.length + 2 },
        s = { path: eQ.fP, offset: n.text.length };
    return (
        !(!n.text.startsWith(`/${t.displayName} `.toLocaleLowerCase()) || z.Kh.equals(r, s)) &&
        (K.b.textToInline(
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
function e6(e) {
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
    let u = o ? null : p.A.getActiveOptionName(n),
        c = {},
        d = p.A.getOptionStates(n),
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
                    ? (0, eZ.J)({
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
    _ && L.H2(n, c);
}
function e4(e) {
    let t = V.n$(e);
    if (null == t) return { command: null, commandText: null };
    let [n] = t,
        i = n.children[0];
    return z.l5.isText(i) ? { command: n.command, commandText: i.text } : { command: n.command, commandText: null };
}
function e5(e, t) {
    let n = V.O7(e)[0];
    t();
    let i = z.ZF.toPoint(e.selection);
    if (null == i || n === V.O7(e)[0]) return;
    let { command: r, commandText: s } = e4(e);
    !(null == r || null == s || s.endsWith(" ")) &&
        z.Kh.equals(i, { path: eQ.fP, offset: r.displayName.length + 1 }) &&
        K.b.insertText(e, " ");
}
function e7(e, t, n) {
    let i = e.activeCommand?.options?.find((e) => e.name === n),
        r = e.initialValues[n];
    if (null == i || null == r) return null;
    if (null != i.choices) return i.choices.find((e) => e.value === r.value)?.displayName;
    let s = r.value?.toString();
    return i.type === f.n4.CHANNEL || (i.type === f.n4.MENTIONABLE && null != y.A.getChannel(s))
        ? `<#${s}>	`
        : i.type === f.n4.USER || (i.type === f.n4.MENTIONABLE && null != eh.default.getUser(s))
          ? `<@${s}>`
          : i.type === f.n4.ROLE || (i.type === f.n4.MENTIONABLE && null != ed.A.getRole(t.guild_id, s ?? P.dJq))
            ? `<@&${s}>`
            : s;
}
var e8 = n(635377),
    e9 = n.n(e8),
    te = n(927813);
let tt = new Set(["line"]),
    tn = /^[a-z0-9_+\-.#]+$/i,
    ti = null,
    tr = null;
function ts(e) {
    let t = (function (e) {
        let t = [],
            n = null;
        for (let i of z.VW.blocks(e))
            (n = (function (e, t, n, i, r) {
                let s = (function (e) {
                        let t,
                            [n, i] = e;
                        if (!tt.has(n.type)) return [];
                        let r = [],
                            s = /\\|```/g;
                        for (let e = 0; e < n.children.length; e++) {
                            let a = n.children[e];
                            if (z.l5.isText(a))
                                for (s.lastIndex = 0; null != (t = s.exec(a.text)); ) {
                                    if ("\\" === t[0]) {
                                        s.lastIndex += 1;
                                        continue;
                                    }
                                    r.push({ path: z.PW.child(i, e), offset: t.index });
                                }
                        }
                        return r;
                    })(t),
                    a = s[0],
                    o = s[s.length - 1],
                    l = null;
                if (null != o) {
                    let [t] = z.VW.node(e, o.path);
                    l = t.text.substring(o.offset + 3);
                }
                let u = n && null != a,
                    c = n && 0 === s.length,
                    d = i && 0 === s.length,
                    _ = (u ? s.slice(1) : s).length % 2 == 1,
                    f = _ && (null == l || "" === l || null != l.match(tn)),
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
                i,
                null != n && (n.isInCodeBlock || n.opensCodeBlock),
                null != n && (n.isStyledCodeBlockLine || n.opensCodeBlockOnOwnLine),
                null != n && (n.opensCodeBlock || !n.closesCodeBlock) ? n.lang : null,
            )),
                t.push(n);
        return (
            (function (e) {
                let t = [],
                    n = !1;
                for (let i of e) {
                    let r = i === e[e.length - 1];
                    if (
                        (i.closesCodeBlock || r) &&
                        (n && r && !i.closesCodeBlock && t.push(i), (n = !1), t.length > 0)
                    ) {
                        let e = t.map((e) => (0, ek.IQ)(e.blockEntry[0])).join("\n"),
                            n = t[0].lang;
                        if (null == n || null == ti || ti.hasLanguage(n)) {
                            if (null != n && null != ti && ti.hasLanguage(n)) {
                                let i = (function (e, t) {
                                    if (null == ti) return null;
                                    let n = `${e}-${t}`,
                                        i = tl.get(n);
                                    if (null != i) return i;
                                    let r = ti.highlight(t, e, !1);
                                    if (null == r || r.illegal) return null;
                                    let s = r.value.split("\n");
                                    return tl.set(n, s), s;
                                })(e, n);
                                if (null != i && i.length === t.length) {
                                    let e = [];
                                    for (let n = 0; n < t.length; n++) {
                                        let r,
                                            s = i[n]
                                                .replace(/&amp;/g, "&")
                                                .replace(/&lt;/g, "<")
                                                .replace(/&gt;/g, ">")
                                                .replace(/&quot;/g, '"')
                                                .replace(/&#x27;/g, "'"),
                                            a = [],
                                            o = 0,
                                            l = 0;
                                        for (; null != (r = ta.exec(s)); ) {
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
                                        t[n].hljsTypes = a;
                                    }
                                } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = null;
                            }
                        } else for (let e = 0; e < t.length; e++) t[e].hljsTypes = [];
                        t = [];
                    }
                    n && t.push(i), i.opensCodeBlock && (n = !0);
                }
            })(t),
            t
        );
    })(e);
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
                t?.codeBlockState != s && K.b.setNodes(e, { codeBlockState: s }, { at: r });
            }
        })(e, t),
        t.some((e) => null != e.lang)
    );
}
let ta = /(?:<span class="([^"]*)">)|(?:<\/span>)/g,
    to = { max: 1 / 0, maxAge: +te.A.Millis.MINUTE, updateAgeOnGet: !0 },
    tl = new (e9())(to);
function tu(e, t) {
    let n = 0;
    for (let i of z.VW.nodes(e, {
        at: { anchor: { path: eQ.fP, offset: 0 }, focus: t },
        mode: "lowest",
        match: (e) => z.l5.isText(e),
    })) {
        let e = i[0].text;
        z.PW.equals(i[1], t.path) && (e = e.substring(0, t.offset));
        let r = e.match(/```/g);
        n += r?.length ?? 0;
    }
    return n % 2 != 0;
}
function tc(e) {
    if (null == e.selection) return !1;
    let t = z.ZF.start(e.selection);
    return tu(e, t);
}
let td = new Set(["line", "blockQuote"]),
    t_ = ["applicationCommand"],
    tf = ["timestampMentionInput"];
function th(e) {
    let t = z.VW.getCurrentBlock(e),
        n = z.VW.getCurrentInline(e);
    return null != t && !t_.includes(t[0].type) && !tf.includes(n?.[0]?.type);
}
function tp(e) {
    return { type: "other", mergeable: !1, createdAt: Date.now(), value: z.VW.richValue(e), selection: e.selection };
}
var tE = n(877413),
    tm = n.n(tE),
    tg = n(284009),
    tA = n.n(tg),
    tI = n(339871);
function tT(e, t) {
    let { cmd: n = !1, ctrl: i = !1, alt: r = !1, shift: s = !1 } = t;
    return (
        (null == n || e.metaKey === n) &&
        (null == i || e.ctrlKey === i) &&
        (null == r || e.altKey === r) &&
        (null == s || e.shiftKey === s)
    );
}
let tS = (e) => {
        let t = z.VW.getCurrentBlock(e);
        if (null != t) {
            let n = z.VW.start(e, t[1]);
            return K.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    },
    tN = (e) => {
        let t = z.VW.getCurrentBlock(e);
        if (null != t) {
            let n = z.VW.end(e, t[1]);
            return K.b.select(e, { anchor: n, focus: n }), !0;
        }
        return !1;
    };
var ty = n(224868);
let tC =
        /(@[^@#]+(?:#0|#\d{4}))|(@[^\s\t@#:]+)(?=[\s\t@:])|(:[a-zA-Z0-9_~]+:)|(#"(?:\ |\\\\|\\"|(?!")\w)+")|(#[^\s\t@#:]+(?=[\s\t@#:]))/g,
    tv = new Set([
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
    tO = new Set(["timestampMentionInput"]),
    tR = new Set(["line", "blockQuote"]),
    tb = new Set(["applicationCommandOption"]);
function tD(e, t, n) {
    let i = z.VW.areStylesDisabled(e);
    for (let r of z.VW.blocks(e))
        if (tR.has(r[0].type)) i ? tw(e, r, !0, null) : tL(e, r, t, n);
        else {
            let [s, a] = r;
            for (let r = s.children.length - 1; r >= 0; r--) {
                let o = s.children[r];
                if (!z.l5.isText(o) && tb.has(o.type)) {
                    let s = [o, z.PW.child(a, r)];
                    i ? tw(e, s, !0, null) : tL(e, s, t, n);
                }
            }
        }
}
function tL(e, t, n, i) {
    let r = "line" === t[0].type && t[0].codeBlockState?.isInCodeBlock === !0,
        s = z.cv.markdown(t[0], n);
    tw(e, t, r, s) && ((t = z.cv.updateElement(e, t)), (s = z.cv.markdown(t[0], n))),
        r ||
            (tM(e, t, i, s) && ((t = z.cv.updateElement(e, t)), (s = z.cv.markdown(t[0], n))),
            (function (e, t, n, i, r) {
                let [s, a] = t;
                for (let o = s.children.length - 1; o >= 0; o--) {
                    let l,
                        u = s.children[o];
                    if (!z.l5.isText(u)) continue;
                    let c = z.PW.child(a, o),
                        d = [];
                    for (tC.lastIndex = 0; null != (l = tC.exec(u.text)); ) {
                        if (0 !== l.index && null == u.text.charAt(l.index - 1).match(/(\t|\s)/)) {
                            tC.lastIndex = l.index + 1;
                            continue;
                        }
                        if (tP(e, a, { path: c, offset: l.index }, r)) continue;
                        let s = (0, ty.p)(l[0], n, i);
                        null != s && tx(i, t[0], s)
                            ? d.push({ index: l.index, length: l[0].length, node: s })
                            : (tC.lastIndex = l.index + 1);
                    }
                    for (let t of d.reverse())
                        (function (e, t, n, i, r) {
                            let [s, a] = t,
                                o = { path: a, offset: n },
                                l = { path: a, offset: n + i };
                            tA()(
                                o.offset >= 0 && o.offset <= s.text.length,
                                "Failed to find valid start position for raw mention replace",
                            ),
                                tA()(
                                    l.offset >= 0 && l.offset <= s.text.length,
                                    "Failed to find valid end position for raw mention replace",
                                ),
                                K.b.textToVoid(e, r, { anchor: o, focus: l });
                        })(e, [u, z.PW.child(a, o)], t.index, t.length, t.node);
                }
            })(e, t, n, i, s));
}
function tw(e, t, n, i) {
    let [r, s] = t,
        a = !1;
    for (let t = r.children.length - 1; t >= 0; t--) {
        let o = r.children[t];
        if (z.l5.isText(o) && !n) {
            let n = t < r.children.length - 1 ? r.children[t + 1] : null;
            if (null == n || !z.cv.isElement(n) || !e.isVoid(n)) continue;
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
                let i = z.PW.child(s, t + 1);
                K.b.voidToText(e, (0, ek.IQ)(n, { mode: "plain", preventEmojiSurrogates: !0 }), i), (a = !0);
            }
        } else if (z.cv.isElement(o) && e.isVoid(o)) {
            let r = z.PW.child(s, t),
                l = { path: z.PW.child(r, 0), offset: 0 };
            (n || (null != i && tP(e, s, l, i))) &&
                (K.b.voidToText(e, (0, ek.IQ)(o, { mode: "plain", preventEmojiSurrogates: !0 }), r), (a = !0));
        }
    }
    return a;
}
function tM(e, t, n, i) {
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
        if (!tx(n, t[0], l)) continue;
        let d = eG(e, r, i.serializedChildren, u.start),
            _ = eG(e, r, i.serializedChildren, u.start + u.text.length);
        K.b.textToVoid(e, l, { anchor: d, focus: _ }), (s = !0);
    }
    return s;
}
function tP(e, t, n, i) {
    let r = 0;
    for (let [i, s] of z.VW.nodes(e, { at: { anchor: z.VW.start(e, t), focus: n }, mode: "lowest" }))
        z.l5.isText(i) ? (z.PW.equals(s, n.path) ? (r += n.offset) : (r += i.text.length)) : (r += 1);
    for (let e of i.entries) {
        if (!e.attributes.includes("codeBlockText") && !e.attributes.includes("inlineCode")) continue;
        let t = e.start,
            n = e.start + e.text.length;
        if (t <= r && n >= r) return !0;
    }
    return !1;
}
function tx(e, t, n) {
    if ("applicationCommandOption" !== t.type) return !0;
    switch (t.optionType) {
        case f.n4.CHANNEL:
            return "channelMention" === n.type;
        case f.n4.ROLE:
            return "roleMention" === n.type || ("textMention" === n.type && "@everyone" === n.name);
        case f.n4.USER:
            return "userMention" === n.type;
        case f.n4.MENTIONABLE:
            return (
                "roleMention" === n.type ||
                "userMention" === n.type ||
                ("textMention" === n.type && "@everyone" === n.name)
            );
        case f.n4.STRING: {
            let n = null != e ? p.A.getOption(e, t.optionName) : null;
            return n?.choices == null && n?.autocomplete !== !0;
        }
        default:
            return !1;
    }
}
function tU(e, t, n) {
    let i = z.VW.getCurrentInline(e);
    if ("block" === t) return !0;
    let r = z.VW.getCurrentText(e);
    if (null == r) return !0;
    let [s, a] = r,
        [o, l] = z.VW.edges(e, a),
        u = z.ZF.toPoint(e.selection);
    if (null == u) return !0;
    if (null != i) {
        let [t, n] = i;
        if (z.VW.isEmpty(e, t) || z.VW.isVoid(e, t)) return K.b.removeInline(e, n), !0;
    }
    if ("line" === t)
        if (null == i) return !1;
        else {
            let [r, s] = z.VW.edges(e, i[1]);
            return K.b.delete(e, { at: u, unit: t, reverse: n, select: !0, bounds: { anchor: r, focus: s } }), !0;
        }
    let c = z.VW.getParentBlock(e, u);
    if (null == c) return !0;
    let d = c[1],
        _ = i;
    if (z.Kh.equals(u, n ? o : l))
        for (;;) {
            let t = (n ? z.VW.before : z.VW.after)(e, u);
            if (null == t) return !0;
            if (!z.PW.isDescendant(t.path, d)) break;
            if (((u = t), null != (_ = z.VW.getParentInline(e, t)))) {
                let [t, n] = _;
                if (z.VW.isEmpty(e, t) || z.VW.isVoid(e, t)) {
                    let t = z.VW.before(e, n);
                    return null != t && K.b.select(e, t), K.b.removeInline(e, n), !0;
                }
            }
            let i = z.VW.node(e, t.path);
            if (null == i || !z.l5.isText(i[0])) return !0;
            if ((([s, a] = i), 0 !== s.text.length)) {
                [o, l] = z.VW.edges(e, a);
                break;
            }
        }
    return K.b.delete(e, { at: u, unit: t, reverse: n, select: !0 }), !0;
}
var tk = n(527214);
function tG(e, t) {
    let n = p.A.getActiveCommand(e.id),
        i = n?.options?.find((e) => e.name === t.optionName);
    return null != i && (i.type !== f.n4.STRING || i?.choices != null || i?.autocomplete);
}
function tF(e, t, n, i) {
    let r = z.VW.areStylesDisabled(e) || null == n ? t : n;
    B.o.withSingleEntry(e, () => {
        K.b.insertText(e, i ? r + " " : r);
    });
}
var tV = n(770178);
let tB = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function tH(e) {
    try {
        return z.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), Y.A.captureException(e), null;
    }
}
var tj = n(31717);
let tY = (e) => {
        let t,
            { channelId: n, element: s, attributes: o, children: l } = e,
            u = (0, H.f7)(),
            c = (0, H.zL)(),
            d = (0, H.RV)(),
            { optionType: _, errored: h } = (0, q.cf)(
                [p.A],
                () => ({
                    optionType: p.A.getOption(n, s.optionName)?.type,
                    errored: p.A.getOptionState(n, s.optionName)?.lastValidationResult?.success !== !0,
                }),
                [n, s.optionName],
            ),
            E = (0, q.bG)([m.A], () => m.A.getUpload(n, s.optionName, tj.C.SlashCommand), [n, s.optionName]),
            g = s.children[s.children.length - 1],
            A = null != g && z.l5.isText(g) && g.text.endsWith("\n"),
            I = a()(eD.S0, eD.xP, { [eD.t$]: c && u, [eD.$2]: (!c || !u) && h }),
            T = r.useCallback(() => {
                z.VW.isVoid(d, s) || K.b.selectCommandOption(d, s.optionName, !0);
            }, [d, s]);
        return (
            (t =
                _ === f.n4.ATTACHMENT
                    ? E?.filename != null
                        ? (0, i.jsxs)("span", {
                              className: a()(eD._K, eD.dU),
                              contentEditable: !1,
                              children: [E.filename, l],
                          })
                        : (0, i.jsxs)("span", {
                              className: a()(eD._K, eD.ZI),
                              contentEditable: !1,
                              children: [eg.intl.string(eg.t.GRdFni), l],
                          })
                    : (0, i.jsxs)("span", {
                          className: eD._K,
                          children: [l, A ? (0, i.jsx)("span", { className: eD.Nx, contentEditable: !1 }) : null],
                      })),
            (0, i.jsxs)("span", {
                ...o,
                className: I,
                children: [
                    (0, i.jsxs)("span", {
                        className: eD.gA,
                        contentEditable: !1,
                        onClick: T,
                        children: [s.optionDisplayName, "​"],
                    }),
                    t,
                    (0, i.jsx)("span", { contentEditable: !1, children: "​" }),
                ],
            })
        );
    },
    tW = (e) => {
        let { element: t, attributes: n, children: r } = e,
            s = (0, H.f7)(),
            o = (0, H.zL)(),
            l = a()(eD.S0, eD.xP, eD.Bz, { [eD.t$]: o && s, [eD.$2]: t.error }),
            u = t.children[t.children.length - 1],
            c = null != u && z.l5.isText(u) && u.text.endsWith("\n"),
            d = (0, i.jsxs)("span", {
                className: eD._K,
                children: [r, c ? (0, i.jsx)("span", { className: eD.Nx, contentEditable: !1 }) : null],
            });
        return (0, i.jsxs)("span", {
            ...n,
            className: l,
            children: [
                (0, i.jsxs)("span", { className: eD.gA, contentEditable: !1, children: ["@time", "​"] }),
                d,
                (0, i.jsx)("span", { contentEditable: !1, children: "​" }),
            ],
        });
    };
var tK = n(471910);
let tz = r.forwardRef(function (e, t) {
    let s,
        o,
        l,
        u,
        c,
        d,
        {
            value: _,
            type: h,
            channel: E,
            className: A,
            id: I,
            disabled: N,
            submitting: y,
            placeholder: C,
            required: v,
            textAreaPaddingClassName: O,
            onChange: R,
            onPaste: b,
            onResize: D,
            onFocus: w,
            onBlur: M,
            onKeyDown: U,
            onKeyUp: k,
            onTab: Y,
            onEnter: W,
            onSubmit: $,
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
        eh = r.useRef(null),
        ep = r.useRef(null),
        eE = r.useRef(!0),
        em = r.useRef(!0),
        eA = N || y,
        eI = r.useCallback(
            (e, t, n) => {
                let { value: i, selection: r } = n,
                    s = z.VW.richValue(e),
                    a = e.selection,
                    o = !1;
                if (void 0 !== i && i !== s) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === T.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), tD(e, E.guild_id, E.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        tD(e, E.guild_id, E.id), (r = void 0);
                    }
                    "undo" !== t && void 0 !== i && i !== s && B.o.insertEntry(e, "other", !1, s, a), (o = !0);
                }
                if ((null == r || z.Ot.isValid(e, r) || (r = void 0), (o || !z.Ot.isValid(e, a)) && void 0 === r)) {
                    let t = z.VW.end(e, []);
                    r = { anchor: t, focus: t };
                }
                let l = null != r && !z.Ot.equals(r, a);
                if ((o && !en && z.VW.focus(e), null != r && l)) {
                    e.selection = r;
                    let t = B.o.currentEntry(e);
                    null != t && (t.selection = r), (o = !0);
                }
                let u = V.n$(e);
                if (
                    (null != u &&
                        u[0].command.id !== p.A.getActiveCommand(E.id)?.id &&
                        B.o.withMergedEntry(e, () => {
                            e2(e, E.id, null, !0);
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
            [E.id, E.guild_id, en],
        ),
        eT = (function (e) {
            let t = r.useContext(j.Ay),
                i = eY.SI.useSetting(),
                [s] = r.useState(() => {
                    let r = (0, eH.ie)();
                    return (
                        (r.children = (0, S.x7)("")),
                        (r.selection = { anchor: eQ.K, focus: eQ.K }),
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
                                    onChangeEnd: h,
                                    updateState: E,
                                } = e,
                                m = r,
                                { onChange: g } = m;
                            (m.chatInputType = s),
                                (m.windowContext = u),
                                (m.previewMarkdown = c),
                                (m.composition = null),
                                (m.events = new eB.EventEmitter()),
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
                                            ((e = (0, H.o$)(e)).addMark = n),
                                            (e.removeMark = i),
                                            (e.setFragmentData = a),
                                            (e.insertData = o),
                                            (e.insertFragmentData = l),
                                            (e.insertTextData = u),
                                            (e.deleteBackward = (n) => {
                                                if ("line" === n && !t) {
                                                    let t = z.ZF.toPoint(e.selection);
                                                    if (null != t) {
                                                        let i = z.VW.before(e, t, { unit: n });
                                                        if (null != i) {
                                                            let n = z.e0.getLineStart(e, t, !1);
                                                            null != n && z.Kh.isAfter(n, i)
                                                                ? K.b.delete(e, { at: { anchor: n, focus: t } })
                                                                : K.b.delete(e, { at: { anchor: i, focus: t } });
                                                            return;
                                                        }
                                                    }
                                                }
                                                r(n);
                                            }),
                                            (e.deleteForward = (n) => {
                                                if ("line" === n && !t) {
                                                    let t = z.ZF.toPoint(e.selection);
                                                    if (null != t) {
                                                        let i = z.VW.after(e, t, { unit: n });
                                                        if (null != i) {
                                                            let n = z.e0.getLineEnd(e, t, !1);
                                                            null != n && z.Kh.isBefore(n, i)
                                                                ? K.b.delete(e, { at: { anchor: n, focus: t } })
                                                                : K.b.delete(e, { at: { anchor: i, focus: t } });
                                                            return;
                                                        }
                                                    }
                                                }
                                                s(n);
                                            }),
                                            e
                                        );
                                    })(m, !0 === d)).setFragmentData = (e) => {
                                    if (null != t.selection && !z.Kh.equals(t.selection.anchor, t.selection.focus)) {
                                        let n = (0, ek.WO)(z.VW.richValue(t), {
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
                                    if (null != t.selection && z.ZF.isExpanded(t.selection)) {
                                        let e = eH.KE.string(t, t.selection),
                                            i = (0, tk.W1)(n),
                                            r = (0, tk.W1)(e);
                                        if (null != i && null == r) {
                                            let [e, n] = z.ZF.edges(t.selection);
                                            return (
                                                z.VW.withoutNormalizing(t, () => {
                                                    K.b.select(t, e),
                                                        t.insertText("["),
                                                        K.b.select(t, n),
                                                        0 === z.PW.compare(e.path, n.path) &&
                                                            K.b.move(t, { distance: 1 }),
                                                        t.insertText(`](${i.target})`);
                                                }),
                                                !0
                                            );
                                        }
                                        if (null != i && null != r)
                                            return K.b.delete(t, { at: t.selection }), t.insertText(i.target), !0;
                                        K.b.delete(t, { at: t.selection });
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
                                                z.ZF.isRange(n.properties) &&
                                                z.ZF.isRange(n.newProperties) &&
                                                z.ZF.isCollapsed(n.newProperties)
                                            ) {
                                                let t = z.VW.getParentInline(e, n.properties),
                                                    i = z.VW.getParentInline(e, n.newProperties);
                                                if (null != t && (null == i || !z.PW.equals(t[1], i[1]))) return;
                                            }
                                            t(n);
                                        }),
                                        (e.insertText = (t) => {
                                            null != e.selection && null != z.VW.getCurrentInline(e)
                                                ? K.b.insertText(e, t)
                                                : s(t);
                                        }),
                                        (e.deleteBackward = (t) => {
                                            tU(e, t, !0) || n(t);
                                        }),
                                        (e.deleteForward = (t) => {
                                            tU(e, t, !1) || i(t);
                                        }),
                                        (e.deleteFragment = (t) => {
                                            if (null != e.selection && z.ZF.isExpanded(e.selection)) {
                                                let n = e.selection.anchor,
                                                    i = e.selection.focus,
                                                    s = z.VW.getParentInline(e, n),
                                                    a = z.VW.getParentInline(e, i);
                                                if (null != s && null != a && z.PW.equals(s[1], a[1])) return void r(t);
                                                let o = z.ZF.isForward(e.selection);
                                                if (null != s) {
                                                    let [, t] = s,
                                                        [i, r] = z.VW.edges(e, t);
                                                    o && z.Kh.equals(n, i)
                                                        ? (n = z.VW.before(e, i) ?? z.VW.start(e, []))
                                                        : !o &&
                                                          z.Kh.equals(n, r) &&
                                                          (n = z.VW.after(e, r) ?? z.VW.end(e, []));
                                                }
                                                if (null != a) {
                                                    let [, t] = a,
                                                        [n, r] = z.VW.edges(e, t);
                                                    !o && z.Kh.equals(i, n)
                                                        ? (i = z.VW.before(e, n) ?? z.VW.start(e, []))
                                                        : o &&
                                                          z.Kh.equals(i, r) &&
                                                          (i = z.VW.after(e, r) ?? z.VW.end(e, []));
                                                }
                                                return void K.b.delete(e, {
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
                                                z.VW.isEditorEmpty(e) &&
                                                n.types.includes("application/x-discord-interaction-data")
                                            ) {
                                                let e = JSON.parse(n.getData("application/x-discord-interaction-data")),
                                                    { commandKey: i, interactionOptions: r } = (0, eq.Ez)(e),
                                                    { application: s, command: a } = ez.EW(
                                                        { channel: t, type: "channel" },
                                                        i,
                                                    );
                                                if (null != a) {
                                                    let e =
                                                        null != s
                                                            ? {
                                                                  type: e$.Hf.APPLICATION,
                                                                  id: s.id,
                                                                  icon: s.icon,
                                                                  name: s.bot?.username ?? s.name,
                                                                  application: s,
                                                              }
                                                            : null;
                                                    return (
                                                        L.Gf({
                                                            channelId: t.id,
                                                            command: a,
                                                            section: e,
                                                            location: e$.Oh.PASTE,
                                                            initialValues: (0,
                                                            eK.getInitialValuesFromInteractionOptions)(a, r ?? []),
                                                        }),
                                                        null
                                                    );
                                                }
                                            }
                                            return r(n);
                                        }),
                                            (e.isInline = (e) => !!eJ.has(e.type) || s(e)),
                                            (e.isVoid = (e) =>
                                                !!("applicationCommandOption" === e.type && e0.has(e.optionType)) ||
                                                a(e)),
                                            (e.deleteBackward = (t) => {
                                                e5(e, () => l(t));
                                            }),
                                            (e.deleteForward = (t) => {
                                                e5(e, () => u(t));
                                            }),
                                            (e.deleteFragment = (t) => {
                                                e5(e, () => c(t));
                                            });
                                        let d = null,
                                            _ = null,
                                            h = null,
                                            E = null,
                                            m = null;
                                        return (
                                            (e.onChange = () => {
                                                if (null != t) {
                                                    let r = p.A.getState(t.id),
                                                        s = ez.j8({ channel: t, type: "channel" });
                                                    if (
                                                        z.VW.richValue(e) !== d ||
                                                        !z.Ot.equals(e.selection, _) ||
                                                        r.activeCommand !== h ||
                                                        null == m ||
                                                        s.some((e, t) => m[t] !== e)
                                                    ) {
                                                        let a = B.o.withMergedEntry(e, () =>
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
                                                                    { command: l, commandText: u } = e4(t),
                                                                    c = n.activeCommand;
                                                                if (
                                                                    (!r &&
                                                                        c?.integration_types?.includes(
                                                                            eW.b.GUILD_INSTALL,
                                                                        )) ||
                                                                    (s &&
                                                                        c?.inputType !== e$.y$.BUILT_IN_TEXT &&
                                                                        c?.inputType !== e$.y$.BUILT_IN_INTEGRATION)
                                                                )
                                                                    return null != l && e2(t, i.id, c, !0), null;
                                                                if (null != l) {
                                                                    if (z.VW.isEditorEmpty(t) || null == c)
                                                                        return e2(t, i.id, c, !1), null;
                                                                    let e = `/${l.displayName}`;
                                                                    if (
                                                                        null == u ||
                                                                        !u.startsWith(e) ||
                                                                        (0 === V.O7(t).length &&
                                                                            (u.length < e.length + 1 ||
                                                                                " " !== u[e.length]))
                                                                    )
                                                                        return e2(t, i.id, c, !0), null;
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
                                                                                            ? V.pY(e, s)
                                                                                            : null,
                                                                                    o = (0, ek.WO)(z.VW.richValue(e), {
                                                                                        mode: "raw",
                                                                                        range: {
                                                                                            anchor: z.VW.start(e, []),
                                                                                            focus:
                                                                                                a?.[0]?.keyRange
                                                                                                    .anchor ??
                                                                                                z.VW.end(e, []),
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
                                                                                                    e7(n, t, i.name) ??
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
                                                                                            !e0.has(i.type)
                                                                                                ? ((e = l), (l = ""))
                                                                                                : (e =
                                                                                                      (r = e7(
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
                                                                                z.VW.withoutNormalizing(e, () => {
                                                                                    for (let [, t] of (K.b.insertNodes(
                                                                                        e,
                                                                                        [p],
                                                                                        { at: eQ.Xg },
                                                                                    ),
                                                                                    z.VW.blocks(e).reverse()))
                                                                                        z.PW.isAfter(t, eQ.Xg) &&
                                                                                            K.b.removeNodes(e, {
                                                                                                at: t,
                                                                                                voids: !0,
                                                                                            });
                                                                                });
                                                                                let E = null;
                                                                                return (
                                                                                    null != f
                                                                                        ? (K.b.selectCommandOption(
                                                                                              e,
                                                                                              f.optionName,
                                                                                          ),
                                                                                          (E = f.optionName))
                                                                                        : null != h
                                                                                          ? (K.b.selectCommandOption(
                                                                                                e,
                                                                                                h.optionName,
                                                                                                !1,
                                                                                            ),
                                                                                            (E = h.optionName))
                                                                                          : K.b.resetSelectionToEditorEnd(
                                                                                                e,
                                                                                            ),
                                                                                    null == h && e3(e, s),
                                                                                    E
                                                                                );
                                                                            })(t, i, n),
                                                                            r = V.SQ(t, c, i.id);
                                                                        return (
                                                                            e6({
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
                                                                            L.Gf({
                                                                                channelId: i.id,
                                                                                command: null,
                                                                                section: null,
                                                                            }),
                                                                            null
                                                                        );
                                                                    let e = z.VW.richValue(t)[0],
                                                                        r = e.children[0];
                                                                    if (e1.has(e.type) && z.l5.isText(r)) {
                                                                        let e = (function (e, t) {
                                                                            if (!e.startsWith("/")) return null;
                                                                            let n = (0, eX.Yn)(t, e.substring(1));
                                                                            if (!n.hasSpaceTerminator) return null;
                                                                            let { commands: i, sections: r } = ez.v7(
                                                                                { channel: t, type: "channel" },
                                                                                f.kc.CHAT,
                                                                                n.text,
                                                                            );
                                                                            if (0 === i.length) return null;
                                                                            let s = n.text.trim(),
                                                                                a = s + " ",
                                                                                o = i.filter(
                                                                                    (e) =>
                                                                                        e.inputType !==
                                                                                            e$.y$.PLACEHOLDER &&
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
                                                                                L.Gf({
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
                                                                        let n = V.pY(e, t);
                                                                        return (
                                                                            0 !== n.length &&
                                                                            (z.VW.withoutNormalizing(e, () => {
                                                                                for (
                                                                                    let t = n.length - 1;
                                                                                    t >= 0;
                                                                                    t--
                                                                                ) {
                                                                                    let i = n[t];
                                                                                    K.b.textToInline(
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
                                                                                let t = z.VW.getFirstText(e);
                                                                                if (null == t) return !1;
                                                                                let i = t.text.trim();
                                                                                t.text !== i &&
                                                                                    K.b.textToText(e, i, {
                                                                                        anchor: {
                                                                                            path: eQ.fP,
                                                                                            offset: 0,
                                                                                        },
                                                                                        focus: {
                                                                                            path: eQ.fP,
                                                                                            offset: t.text.length,
                                                                                        },
                                                                                    });
                                                                            }),
                                                                            !0)
                                                                        );
                                                                    })(t, c) && e3(t, c);
                                                                    let e = V.SQ(t, c, i.id),
                                                                        n = z.VW.above(t, {
                                                                            match: (e) =>
                                                                                z.VW.isInline(t, e) &&
                                                                                "applicationCommandOption" === e.type,
                                                                            mode: "lowest",
                                                                        }),
                                                                        r = n?.[0].optionName ?? null;
                                                                    return (
                                                                        e6({
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
                                                                commandChanged: r.activeCommand?.id !== h?.id,
                                                                previousOptionValues: E,
                                                            }),
                                                        );
                                                        if (null != a) {
                                                            let t = B.o.currentEntry(e);
                                                            null != t && (t.commandId = a.commandId),
                                                                (E = a.optionValues);
                                                        } else E = null;
                                                        (d = z.VW.richValue(e)),
                                                            (_ = e.selection),
                                                            (h = r.activeCommand),
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
                                    (e.isVoid = (e) => !!tv.has(e.type) || r(e)),
                                        (e.isInline = (e) => !!(tv.has(e.type) || tO.has(e.type)) || i(e));
                                    let a = null,
                                        o = !0;
                                    return (
                                        (e.onChange = () => {
                                            let i = z.VW.richValue(e);
                                            (i !== a || e.previewMarkdown !== o) &&
                                                (B.o.withMergedEntry(e, () => {
                                                    z.VW.withoutNormalizing(e, () => tD(e, t, n));
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
                                            let i = z.VW.getCurrentBlock(e);
                                            if (i?.[0].type === "blockQuote") {
                                                let t = z.ZF.toPoint(e.selection);
                                                if (null != t && z.PW.isFirstChild(i[1], t.path) && 0 === t.offset)
                                                    return void K.b.setNodes(e, { type: "line" }, { at: i[1] });
                                            }
                                            t(n);
                                        }),
                                            (e.deleteFragment = (t) => {
                                                if (null != e.selection) {
                                                    let [i, r] = z.ZF.edges(e.selection),
                                                        s = [i.path[0]],
                                                        a = z.VW.node(e, s),
                                                        o = [r.path[0]],
                                                        l = z.PW.equals(s, o) ? null : z.VW.node(e, o);
                                                    B.o.withSingleEntry(e, () => {
                                                        a?.[0].type === "blockQuote" &&
                                                            z.Kh.isAtStart(i, a) &&
                                                            K.b.setNodes(e, { type: "line" }, { at: s }),
                                                            l?.[0].type === "blockQuote" &&
                                                                z.Kh.isAtEnd(r, l) &&
                                                                K.b.setNodes(e, { type: "line" }, { at: o }),
                                                            n(t);
                                                    });
                                                    return;
                                                }
                                                n(t);
                                            }),
                                            (e.insertBreak = () => {
                                                let t = z.VW.getCurrentBlock(e);
                                                if (t?.[0].type === "blockQuote") {
                                                    let n = z.ZF.toPoint(e.selection);
                                                    if (null == n) return;
                                                    !(function (e, t, n) {
                                                        if (!z.VW.isEmpty(e, t[0])) return !1;
                                                        let i = z.VW.previous(e, { at: t[1] });
                                                        return (
                                                            null != i &&
                                                            !!z.AS.isType(i[0], "blockQuote") &&
                                                            !!z.VW.isEmpty(e, i[0]) &&
                                                            !!z.Kh.isAtStart(n, t) &&
                                                            (K.b.setNodes(e, { type: "line" }, { at: t[1] }),
                                                            K.b.removeNodes(e, { at: i[1] }),
                                                            !0)
                                                        );
                                                    })(e, t, n) && K.b.splitNodes(e, { at: n, always: !0 });
                                                    return;
                                                }
                                                i();
                                            });
                                        let s = null,
                                            a = !0;
                                        return (
                                            (e.onChange = () => {
                                                let t = z.VW.richValue(e);
                                                (t !== s || e.previewMarkdown !== a) &&
                                                    (B.o.withMergedEntry(e, () => {
                                                        z.VW.withoutNormalizing(e, () =>
                                                            (function (e) {
                                                                let t = !1;
                                                                for (let n of z.VW.blocks(e)) {
                                                                    let [i, r] = n;
                                                                    if (!td.has(i.type)) continue;
                                                                    let s = { path: z.PW.child(r, 0), offset: 0 };
                                                                    if (tu(e, s)) {
                                                                        "blockQuote" === i.type &&
                                                                            (K.b.setNodes(
                                                                                e,
                                                                                { type: "line" },
                                                                                { at: r },
                                                                            ),
                                                                            K.b.insertText(e, "> ", { at: s }));
                                                                        continue;
                                                                    }
                                                                    if (
                                                                        "blockQuote" === i.type ||
                                                                        z.VW.areStylesDisabled(e)
                                                                    )
                                                                        continue;
                                                                    let a = i.children[0];
                                                                    if (!z.l5.isText(a)) continue;
                                                                    let o = a.text.match(/^\s*>>> /),
                                                                        l = a.text.match(/^\s*> /);
                                                                    if (
                                                                        (null != l || null != o || t) &&
                                                                        (K.b.setNodes(
                                                                            e,
                                                                            { type: "blockQuote" },
                                                                            { at: r },
                                                                        ),
                                                                        !t)
                                                                    ) {
                                                                        let n = l?.[0].length ?? o?.[0].length ?? 0,
                                                                            i = z.PW.child(r, 0);
                                                                        K.b.delete(e, {
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
                                            r = !1;
                                        return (
                                            (e.onChange = () => {
                                                z.VW.richValue(e) !== i &&
                                                    (B.o.withMergedEntry(e, () => {
                                                        z.VW.withoutNormalizing(e, () => {
                                                            ts(e) &&
                                                                null == ti &&
                                                                !r &&
                                                                ((r = !0),
                                                                (null == tr &&
                                                                    (tr = Promise.all([n.e("57036"), n.e("75134")])
                                                                        .then(n.bind(n, 981776))
                                                                        .then((e) => {
                                                                            ti = e.default;
                                                                        })
                                                                        .catch((e) => {
                                                                            throw ((tr = null), e);
                                                                        })),
                                                                tr)
                                                                    .then(() => {
                                                                        (i = null),
                                                                            B.o.withMergedEntry(e, () => {
                                                                                z.VW.withoutNormalizing(e, () => ts(e));
                                                                            }),
                                                                            (i = z.VW.richValue(e));
                                                                    })
                                                                    .catch(() => {})
                                                                    .finally(() => {
                                                                        r = !1;
                                                                    }));
                                                        });
                                                    }),
                                                    (i = z.VW.richValue(e))),
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
                                        case P.Ks6.B:
                                            if (!z.VW.isEditorEmpty(i) && tT(e, { ctrl: !t, cmd: t }))
                                                return (0, tI.Px)(i, "bold"), !0;
                                            break;
                                        case P.Ks6.I:
                                            if (!z.VW.isEditorEmpty(i) && tT(e, { ctrl: !t, cmd: t }))
                                                return (0, tI.Px)(i, "italics"), !0;
                                            break;
                                        case P.Ks6.U:
                                            if (!z.VW.isEditorEmpty(i) && tT(e, { ctrl: !t, cmd: t }))
                                                return (0, tI.Px)(i, "underline"), !0;
                                            break;
                                        case P.Ks6.S:
                                            if (!z.VW.isEditorEmpty(i) && tT(e, { ctrl: !t, cmd: t, shift: !0 }))
                                                return (0, tI.Px)(i, "strikethrough"), !0;
                                            break;
                                        case P.Ks6.TAB:
                                            if (null != i.selection && tT(e, { shift: null })) {
                                                let [t, n] = z.ZF.edges(i.selection),
                                                    r = z.VW.blocks(i).slice(t.path[0], n.path[0] + 1),
                                                    s = !0;
                                                for (let [e] of r)
                                                    if ("line" !== e.type || !e.codeBlockState?.isInCodeBlock) {
                                                        s = !1;
                                                        break;
                                                    }
                                                if (s) {
                                                    if (!e.shiftKey && z.ZF.isCollapsed(i.selection))
                                                        return K.b.insertText(i, "  "), !0;
                                                    let t = !e.shiftKey;
                                                    return (
                                                        B.o.withSingleEntry(i, () => {
                                                            let e = i.selection?.anchor ?? z.VW.start(i, []),
                                                                n = i.selection?.focus ?? z.VW.end(i, []);
                                                            for (let [s, a] of r) {
                                                                let r = s.children[0];
                                                                if (!z.l5.isText(r)) continue;
                                                                let o = z.PW.child(a, 0),
                                                                    l = { path: o, offset: 0 };
                                                                if (t)
                                                                    K.b.insertText(i, "  ", { at: l }),
                                                                        z.PW.equals(e.path, o) &&
                                                                            0 !== e.offset &&
                                                                            (e = { path: o, offset: e.offset + 2 }),
                                                                        z.PW.equals(n.path, o) &&
                                                                            0 !== n.offset &&
                                                                            (n = { path: o, offset: n.offset + 2 });
                                                                else if (r.text.startsWith("  ")) {
                                                                    let t = { path: z.PW.child(a, 0), offset: 2 };
                                                                    K.b.delete(i, { at: { anchor: l, focus: t } }),
                                                                        z.PW.equals(e.path, o) &&
                                                                            (e = {
                                                                                path: o,
                                                                                offset: Math.max(0, e.offset - 2),
                                                                            }),
                                                                        z.PW.equals(n.path, o) &&
                                                                            (n = {
                                                                                path: o,
                                                                                offset: Math.max(0, n.offset - 2),
                                                                            });
                                                                }
                                                            }
                                                            K.b.select(i, { anchor: e, focus: n });
                                                        }),
                                                        !0
                                                    );
                                                }
                                            }
                                            break;
                                        case P.Ks6.ARROW_LEFT:
                                        case P.Ks6.ARROW_RIGHT: {
                                            let n;
                                            if (tT(e, { shift: null })) n = "character";
                                            else if (tT(e, { ctrl: !t, alt: t, shift: null })) n = "word";
                                            else if (t && tT(e, { cmd: !0, shift: null })) return !1;
                                            else return !1;
                                            let r = i.children[i.selection?.focus?.path[0] ?? 0],
                                                s = "rtl" === tm()(z.AS.string(r)),
                                                a = (e.which === P.Ks6.ARROW_LEFT) == !s;
                                            return (
                                                K.b.keyboardMove(i, {
                                                    reverse: a,
                                                    unit: n,
                                                    edge: e.shiftKey ? "focus" : void 0,
                                                }),
                                                !0
                                            );
                                        }
                                        case P.Ks6.A:
                                            if (t && tT(e, { ctrl: !0 }) && tS(i)) return !0;
                                            break;
                                        case P.Ks6.E:
                                            if (t && tT(e, { ctrl: !0 }) && tN(i)) return !0;
                                            break;
                                        case P.Ks6.HOME:
                                            if (tT(e, { shift: !1, ctrl: !1 }) && tS(i)) return !0;
                                            break;
                                        case P.Ks6.END:
                                            if (tT(e, { shift: !1, ctrl: !1 }) && tN(i)) return !0;
                                            break;
                                        case P.Ks6.BACKSPACE:
                                        case P.Ks6.DELETE:
                                        case P.Ks6.K:
                                            let n = e.which === P.Ks6.BACKSPACE;
                                            if (
                                                ((!t && e.which !== P.Ks6.K && tT(e, { ctrl: !0, shift: !0 })) ||
                                                    (t && e.which !== P.Ks6.K && tT(e, { cmd: !0 })) ||
                                                    (t && e.which === P.Ks6.K && tT(e, { ctrl: !0 }))) &&
                                                null != i.selection
                                            ) {
                                                let [e, t] = z.ZF.edges(i.selection),
                                                    [r, s] = z.VW.node(i, [n ? e.path[0] : t.path[0]]);
                                                if (
                                                    (tA()(
                                                        z.VW.isBlock(i, r),
                                                        "Top-most node of selection is not a block",
                                                    ),
                                                    (n && !z.Kh.isAtStart(e, [r, s])) ||
                                                        (!n && !z.Kh.isAtEnd(t, [r, s])))
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
                                        let i = B.o.currentEntry(e);
                                        if ((null != i && (i.mergeable = !1), n >= e.history.stack.length)) return;
                                        e.history.index = n;
                                        let r = B.o.currentEntry(e);
                                        t({ newValue: r.value, newSelection: r.selection });
                                    }
                                    (e.history = { index: 0, stack: [] }),
                                        (e.onChange = () => {
                                            let { history: t } = e;
                                            0 === t.stack.length && ((t.stack = [tp(e)]), (t.index = 0)),
                                                null != e.selection && (B.o.currentEntry(e).selection = e.selection),
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
                                            let r = z.VW.richValue(e);
                                            r !== _ &&
                                                (0 === i.stack.length && ((i.stack = [tp(e)]), (i.index = 0)),
                                                B.o.isSaving(e) &&
                                                    ((function (e, t, n) {
                                                        var i, r;
                                                        let s,
                                                            { selection: a } = e,
                                                            o = B.o.currentEntry(e),
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
                                                            ? B.o.insertOrMergeEntry(e, s, u)
                                                            : B.o.insertEntry(e, s, u);
                                                    })(e, t, c),
                                                    (c = t)),
                                                (d = t),
                                                (_ = r));
                                        }),
                                        (e.deleteBackward = (t) => {
                                            B.o.withSingleEntry(e, () => i(t));
                                        }),
                                        (e.deleteForward = (t) => {
                                            B.o.withSingleEntry(e, () => r(t));
                                        }),
                                        (e.deleteFragment = (t) => {
                                            B.o.withSingleEntry(e, () => s(t));
                                        }),
                                        (e.insertText = (t) => {
                                            1 === t.length && d?.type === "remove_text"
                                                ? B.o.withMergedEntry(e, () => o(t))
                                                : null != e.selection && z.ZF.isExpanded(e.selection)
                                                  ? B.o.withSingleEntry(e, () => o(t))
                                                  : o(t);
                                        }),
                                        (e.insertData = (t) => {
                                            d?.type === "remove_text"
                                                ? B.o.withMergedEntry(e, () => a(t))
                                                : B.o.withSingleEntry(e, () => a(t));
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
                                                        z.Ot.isValid(e, e.selection) &&
                                                            (e.lastGoodSelection = e.selection);
                                                }),
                                                (e.onChange = () => {
                                                    if (
                                                        (z.Ot.isValid(e, e.selection) ||
                                                            (e.selection = (function (e) {
                                                                let t;
                                                                if (z.Ot.isValid(e, e.lastGoodSelection))
                                                                    t = e.lastGoodSelection;
                                                                else {
                                                                    let n = z.VW.end(e, []);
                                                                    t = { anchor: n, focus: n };
                                                                }
                                                                return t;
                                                            })(e)),
                                                        null != e.selection)
                                                    ) {
                                                        let t,
                                                            n,
                                                            [i, r] = z.ZF.edges(e.selection),
                                                            s = !1;
                                                        for (
                                                            ;
                                                            null != i &&
                                                            null != (t = z.VW.getParentVoid(e, i)) &&
                                                            !eQ.XR.includes(t[0].type);
                                                        )
                                                            (i = z.VW.before(e, i, { unit: "offset" })), (s = !0);
                                                        for (
                                                            ;
                                                            null != r &&
                                                            null != (n = z.VW.getParentVoid(e, r)) &&
                                                            !eQ.XR.includes(n[0].type);
                                                        )
                                                            (r = z.VW.after(e, r, { unit: "offset" })), (s = !0);
                                                        s &&
                                                            null != i &&
                                                            null != r &&
                                                            (z.ZF.isForward(e.selection)
                                                                ? K.b.select(e, { anchor: i, focus: r })
                                                                : K.b.select(e, { anchor: r, focus: i }));
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
                                                        th(e) && t();
                                                    }),
                                                    (e.insertSoftBreak = () => {
                                                        e.insertBreak();
                                                    }),
                                                    (e.insertText = (t) => {
                                                        if (0 > t.indexOf("\r") && 0 > t.indexOf("\n"))
                                                            return void n(t);
                                                        let i = t.split(/\r\n|\r|\n/);
                                                        th(e)
                                                            ? B.o.withSingleEntry(e, () => {
                                                                  let t = !1;
                                                                  for (let r of i)
                                                                      t && K.b.splitNodes(e, { always: !0 }),
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
                                        h,
                                    )),
                                    (e) => {
                                        let { newValue: t, newSelection: n } = e;
                                        return E(m, "undo", { value: t, selection: n });
                                    },
                                ));
                        })({ ...e, editor: r, windowContext: t, previewMarkdown: i }),
                        r
                    );
                });
            return (
                r.useEffect(() => {
                    let e = () => s.onChange();
                    return (
                        p.A.addChangeListener(e),
                        ej.Ay.addChangeListener(e),
                        () => {
                            p.A.removeChangeListener(e), ej.Ay.removeChangeListener(e);
                        }
                    );
                }, [s]),
                r.useEffect(() => {
                    s.previewMarkdown !== i && ((s.previewMarkdown = i), s.onChange());
                }, [s, i]),
                s
            );
        })({
            channel: E,
            chatInputType: h,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            onChangeStart: r.useCallback(() => {
                eE.current = !1;
            }, []),
            onChangeEnd: r.useCallback(() => {
                eE.current = !0;
            }, []),
            updateState: eI,
        }),
        eS = r.useCallback(
            (e, t) => {
                let n = V.SQ(eT, e, E.id),
                    i = V.cd(e, E.guild_id, E.id, n, t);
                return { values: n, results: i };
            },
            [E.guild_id, E.id, eT],
        ),
        eN = r.useCallback(() => {
            let e,
                t = z.VW.getNodesOfType(eT, ["timestampMentionInput"]),
                n = null != t ? [...t] : null,
                i = ee ? p.A.getActiveCommand(E.id) : null,
                r = !1;
            if (null != i && null != i.options) {
                let t = eS(i, !1);
                e = t.values;
                let n = V.O7(eT)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (i.options ?? []).find((t) => t.name === e));
                for (let e of i.options)
                    !e.required || e.name in t.values || (K.b.insertCommandOption(eT, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    K.b.selectCommandOption(eT, e.name),
                        (r = !0),
                        (0, G.zV)(P.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: i?.applicationId,
                            command_id: i?.rootCommand?.id,
                            argument_type: f.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    K.b.setNodes(eT, { error: !0 }, { at: t }), r || K.b.select(eT, z.VW.end(eT, t)), (r = !0);
            if (r) {
                F._.dispatch(P.jej.SHAKE_APP, { duration: 200, intensity: 2 }), q?.();
                return;
            }
            $?.((0, ek.WO)(z.VW.richValue(eT), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), i, e);
        }, [E.id, eT, $, q, eS, ee]);
    r.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eT,
            submit(e) {
                e?.preventDefault(), eN();
            },
            focus() {
                z.VW.focus(eT);
            },
            blur() {
                H.rL.blur(eT);
            },
            getCurrentWord() {
                let e = eT.selection;
                if (null == e || !z.Ot.isValid(eT, e) || z.ZF.isExpanded(e) || tc(eT))
                    return { word: null, isAtStart: !1 };
                let [t, n] = z.VW.node(eT, z.PW.parent(e.anchor.path)),
                    [i, r] = z.VW.node(eT, e.anchor.path),
                    s = e.anchor.offset;
                if (!z.PW.hasPrevious(r) && z.l5.isText(i)) {
                    let e = i.text.substring(0, s);
                    if (z.AS.isType(t, "applicationCommand") && s < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let a = "",
                    o = !1;
                for (;;) {
                    if (--s < 0) {
                        if (!z.PW.hasPrevious(r)) {
                            o = !0;
                            break;
                        }
                        [i, r] = z.VW.node(eT, z.PW.previous(r));
                    }
                    if (!z.l5.isText(i)) break;
                    let e = i.text[s];
                    if (eQ.ug.test(e)) break;
                    a = e + a;
                }
                let l = a,
                    u = e.anchor.offset,
                    [c] = z.VW.node(eT, e.anchor.path);
                for (; z.l5.isText(c) && !(u >= c.text.length); ) {
                    let e = c.text[u];
                    if (eQ.ug.test(e)) break;
                    (l += e), u++;
                }
                return { word: a, fullWord: l, isAtStart: o && z.PW.isFirstEditorBlock(n) };
            },
            getFirstText: () => z.VW.getFirstText(eT)?.text ?? "",
            getCurrentCommandOption() {
                let e = V.M3(eT);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = V.M3(eT);
                if (null == e) return [];
                let t = p.A.getActiveCommand(E.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : V.FV(eT, n, e[0], E.id);
            },
            getCommandOptionValues() {
                let e = p.A.getActiveCommand(E.id);
                return null == e ? {} : V.SQ(eT, e, E.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                B.o.withSingleEntry(eT, () => {
                    let i = V.M3(eT),
                        r = null != i && tG(E, i[0]);
                    if (
                        (null != t && r && (K.b.removeInlineChildren(eT, i), (n = !1)), tF(eT, e, t, n), null != t && r)
                    ) {
                        let e = V.n$(eT);
                        if (((i = z.cv.updateElement(eT, i)), null != e)) {
                            let t = z.cv.markdown(e[0], E.guild_id);
                            tM(eT, i, E.id, t) && (i = z.cv.updateElement(eT, i));
                        }
                        V.ke(eT, E.guild_id, E.id, z.cv.updateElement(eT, i), !1), K.b.selectNextCommandOption(eT);
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: i = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                B.o.withSingleEntry(eT, () => {
                    let r = V.M3(eT),
                        s = null != r && tG(E, r[0]);
                    if (s) K.b.removeInlineChildren(eT, r), (n = !1);
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            K.b.delete(eT, { distance: e.length, unit: "character", reverse: !0 }),
                            i &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                K.b.delete(eT, { distance: t.length - e.length, unit: "character" });
                    }
                    tF(eT, e, t, n), s && K.b.selectNextCommandOption(eT);
                });
            },
            insertInlineAutocompleteInput(e) {
                B.o.withSingleEntry(eT, () => {
                    let { word: t } = this.getCurrentWord();
                    null != t && t.length > 0 && K.b.delete(eT, { distance: t.length, unit: "character", reverse: !0 }),
                        K.b.insertNodes(eT, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                B.o.withSingleEntry(eT, () => {
                    let i = z.VW.getSelectedParentOfType(eT, [e]);
                    tA()(null != i, `Cannot replace inline input of type ${e} when none is selected`),
                        K.b.removeNodes(eT, { at: i[1] }),
                        tF(eT, t, n, !0);
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                B.o.withSingleEntry(eT, () => {
                    let e = t.animated ? "a" : "",
                        i = t.originalName ?? t.name ?? "";
                    tF(eT, `:${t.name}:`, null != t.id ? `<${e}:${i.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eT, E, eN],
    ),
        (s = r.useRef(null)),
        (o = r.useRef(null)),
        (l = r.useRef(null)),
        r.useLayoutEffect(() => {
            (o.current = tH(eT)),
                null == o.current &&
                    null == l.current &&
                    (l.current = setTimeout(() => {
                        o.current = tH(eT);
                    }, 100));
        }, [eT]),
        r.useEffect(() => {
            let e = l.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []),
        (u = r.useCallback(() => {
            let e = o.current;
            if (null == e) return;
            let t = e.offsetHeight;
            s.current !== t && (null != eh.current && (eh.current.style.height = `${t}px`), (s.current = t), D?.(t));
        }, [eh, D])),
        (0, tV.g)(o, u, [u, eT, D], tB),
        r.useLayoutEffect(() => {
            let e = H.rL.findDocumentOrShadowRoot(eT).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = tH(eT);
            null != t && ((s.current = t.offsetHeight), D?.(s.current));
        }, [eh, eT, D]);
    let { handleKeyDown: ey, handleKeyUp: eC } = (function (e) {
            let {
                editor: t,
                channel: n,
                disableEnterToSubmit: i,
                onKeyDown: s,
                onKeyUp: a,
                onTab: o,
                onEnter: l,
                allowNewLines: u,
                submit: c,
                hideAutocomplete: d,
                moveSelection: _,
            } = e;
            return {
                handleKeyDown: r.useCallback(
                    (e) => {
                        switch (e.which) {
                            case P.Ks6.ARROW_UP:
                                if (_(-1)) return void e.preventDefault();
                                break;
                            case P.Ks6.ARROW_DOWN:
                                if (_(1)) return void e.preventDefault();
                                break;
                            case P.Ks6.P:
                                if (tT(e, { ctrl: !0 }) && _(-1)) return void e.preventDefault();
                                break;
                            case P.Ks6.N:
                                if (tT(e, { ctrl: !0 }) && _(1)) return void e.preventDefault();
                                break;
                            case P.Ks6.ESCAPE:
                                d?.();
                                break;
                            case P.Ks6.TAB:
                                if (tT(e, {}) && o?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                if (null != p.A.getActiveCommand(n.id)) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? K.b.selectPreviousCommandOption(t)
                                            : K.b.selectNextCommandOption(t);
                                    return;
                                }
                                break;
                            case P.Ks6.ENTER:
                                if (tT(e, {}) && l?.(e)) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        e.key !== x.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (i && !e.ctrlKey) || tc(t)) && u) ||
                            (e.preventDefault(), e.stopPropagation(), c()),
                            s?.(e);
                    },
                    [u, n.id, i, t, d, _, l, s, o, c],
                ),
                handleKeyUp: r.useCallback(
                    (e) => {
                        a?.(e);
                    },
                    [a],
                ),
            };
        })({
            editor: eT,
            channel: E,
            disableEnterToSubmit: ei,
            onKeyDown: U,
            onKeyUp: k,
            onTab: Y,
            onEnter: W,
            allowNewLines: er,
            submit: eN,
            hideAutocomplete: X,
            moveSelection: Q,
        }),
        { handlePaste: ev, handleGlobalPaste: eO } =
            ((c = r.useCallback(
                (e) => {
                    if (eA) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = b(e);
                    return t && (e.preventDefault(), e.stopPropagation()), t;
                },
                [eA, b],
            )),
            (d = r.useCallback(
                (e) => {
                    let { event: t } = e;
                    c(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eT.insertData(t.clipboardData), z.VW.focus(eT)));
                },
                [eT, c],
            )),
            { handlePaste: c, handleGlobalPaste: d }),
        eR = r.useCallback(
            (e) => {
                Z?.();
            },
            [Z],
        ),
        eb = r.useCallback(
            (e) => {
                e !== ep.current ? em.current && R?.(null, (0, ek.WO)(e, { mode: "raw" }), e) : em.current && Z();
            },
            [Z, R],
        );
    r.useLayoutEffect(() => {
        eE.current && ((ep.current = _), eI(eT, "parent", { value: _ }));
    }, [eT, _, eI]),
        r.useEffect(() => {
            let e = () => {
                let e = p.A.getActiveCommand(E.id) ?? null;
                null !== e && null != e.options && eS(e, !0);
            };
            return m.A.addChangeListener(e), () => m.A.removeChangeListener(e);
        }, [E, eT, eS]);
    let eL = r.useCallback(
            (e) => [
                ...(function (e, t, n) {
                    if (z.VW.areStylesDisabled(e)) return [];
                    let [i, r] = t;
                    if (1 !== r.length || !z.AS.isInTypes(i, eF)) return eV;
                    let { entries: s, serializedChildren: a } = z.cv.markdown(i, n, !0),
                        o = [];
                    for (let t = 0; t < s.length; t++) {
                        let n = s[t];
                        if (n.attributes.length > 0 && n.text.length > 0) {
                            let i = s[t - 1],
                                l = s[t + 1],
                                u = { anchor: eG(e, r, a, n.start), focus: eG(e, r, a, n.start + n.text.length) },
                                c = z.VW.nodes(e, { at: u, mode: "lowest", voids: !1 }),
                                d = {};
                            for (let e of n.attributes)
                                if (((d[e] = !0), "syntaxBefore" === e && null != l))
                                    for (let e of l.attributes) d[`before_${e}`] = !0;
                                else if ("syntaxAfter" === e && null != i)
                                    for (let e of i.attributes) d[`after_${e}`] = !0;
                            for (let [t, n] of c) {
                                let t = { anchor: z.VW.start(e, n), focus: z.VW.end(e, n) };
                                z.Kh.isBefore(t.anchor, u.anchor) && (t.anchor = u.anchor),
                                    z.Kh.isAfter(t.focus, u.focus) && (t.focus = u.focus),
                                    o.push({ ...d, ...t });
                            }
                        }
                    }
                    return o;
                })(eT, e, E.guild_id),
                ...(function (e, t) {
                    if (z.VW.areStylesDisabled(e)) return [];
                    let [n, i] = t,
                        r = [];
                    if (!z.AS.isType(n, "line") || null == n.codeBlockState) return r;
                    let { hljsTypes: s, isStyledCodeBlockLine: a } = n.codeBlockState;
                    if (null == s || 0 === s.length || !a) return [];
                    for (let t of s) {
                        let s = n.children.map((e) => (z.l5.isText(e) ? e.text : null));
                        r.push({ hljsTypes: t.types, anchor: eG(e, i, s, t.start), focus: eG(e, i, s, t.end) });
                    }
                    return r;
                })(eT, e),
                ...(function (e, t) {
                    if (z.VW.areStylesDisabled(e)) return [];
                    let [n, i] = t,
                        r = [];
                    if (!z.l5.isText(n)) return r;
                    let [s] = z.VW.node(e, z.PW.parent(i));
                    return (
                        z.AS.isType(s, "applicationCommand") &&
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
            [eT, E],
        ),
        ew = r.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: r, children: s, element: a } = t;
                    switch (a.type) {
                        case "applicationCommand":
                            let o = p.A.getActiveCommand(n),
                                l = 0,
                                u = 0;
                            if (null != o && o.id === a.command.id) {
                                let t = V.O7(e);
                                for (let e of o.options ?? []) t.includes(e.name) ? u++ : l++;
                            }
                            let c = {};
                            if (l > 0) {
                                let e;
                                (e =
                                    u > 0
                                        ? eg.intl.formatToPlainString(eg.t.BP8N0K, { count: l })
                                        : eg.intl.formatToPlainString(eg.t.lziVC9, { count: l })),
                                    (c["data-trailing-placeholder"] = e);
                            }
                            return (0, i.jsx)("div", { className: eD.uB, ...r, ...c, children: s });
                        case "applicationCommandOption":
                            return (0, i.jsx)(tY, { attributes: r, channelId: n, element: a, children: s });
                        default:
                            return null;
                    }
                })(eT, e, E.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: r } = e;
                            return "timestampMentionInput" === r.type
                                ? (0, i.jsx)(tW, { attributes: t, element: r, children: n })
                                : null;
                        })(e)),
                    t
                );
            },
            [E.id, eT],
        ),
        eM = r.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: r, text: s } = e;
                    if (r.commandName) {
                        let e = a()(eD.p6, { [eD.BI]: "" === s.text });
                        return (0, i.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.EG, { event: P.jej.GLOBAL_CLIPBOARD_PASTE, handler: eO }),
            (0, i.jsx)("div", {
                ref: eh,
                className: a()(A, tK.pC),
                children: (0, i.jsx)(eU, {
                    id: I,
                    editor: eT,
                    channelId: E.id,
                    guildId: E.guild_id,
                    className: a()(tK.gf, O),
                    placeholder: C,
                    readOnly: eA,
                    spellCheck: J,
                    autoFocus: !en,
                    canFocus: !N,
                    onChange: eb,
                    onFocus: w,
                    onBlur: M,
                    onClick: eR,
                    onPaste: ev,
                    onKeyDown: ey,
                    onKeyUp: eC,
                    decorate: eL,
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
var t$ = n(266599);
new E.A("ChannelEditor.tsx");
let tq = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class tZ extends r.Component {
    ref = r.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    constructor(e) {
        super(e),
            (this._unsubscribe = N.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = { focused: !1, submitting: !1, popup: N.Y0.getState() });
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
            (e = this.props.useSlate ? this.props.textValue : (0, ek.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, S.x7)(e));
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
            let i = t.length > 0 ? e.replace(/([_`´*])/g, "\\$1") : e;
            t.length > 0 && !t.endsWith(" ") && n.insertText(" ", void 0, !1), n.insertText(i, void 0, !0);
        }
    }
    handleOuterClick() {
        this.focus();
    }
    clearValue() {
        let { channel: e, type: t } = this.props;
        this.setState({ focused: !0, submitting: !1 }), c.A.saveDraft(e.id, "", t.drafts.type);
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
    saveCurrentTextThrottled = l().throttle(this.saveCurrentText.bind(this, !1), 500);
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: i } = this.props;
        return e && !n ? (i ? "" : eg.intl.string(eg.t.IYKTTc)) : t;
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
                onChange: r,
                onKeyDown: s,
                onResize: o,
                onSubmit: l,
                onSubmitFailure: c,
                channel: d,
                type: _,
                useSlate: f,
                spellcheckEnabled: h,
                useNewSlashCommands: p,
                canOnlyUseTextCommands: E,
                className: m,
                id: A,
                required: I,
                maxCharacterCount: N,
                allowNewLines: y,
                "aria-describedby": C,
                "aria-labelledby": v,
                accessibilityLabel: O,
                showValueWhenDisabled: R,
            } = this.props,
            { submitting: b, popup: D } = this.state,
            L = {
                channel: d,
                className: a()(m, t$.Tg, { [t$.w5]: f, [t$.Rr]: n || b }),
                id: A,
                placeholder: this.getPlaceholder(),
                required: I,
                accessibilityLabel: O,
                disabled: n || !1,
                submitting: b,
                isEdit: _ === T.oU.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: y,
                onChange: r,
                onResize: o,
                onKeyDown: s,
                onSubmit: l,
                textAreaPaddingClassName: a()({
                    [t$.H$]: _ === T.oU.CREATE_FORUM_POST,
                    [t$.g_]: _ === T.oU.CUSTOM_GIFT,
                    [t$.Yg]: _ === T.oU.USER_PROFILE,
                    [t$.$$]: _ === T.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: h,
                useNewSlashCommands: p,
                disableAutoFocus: u.Fr || (_.disableAutoFocus ?? !1),
                disableEnterToSubmit: _.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": D.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== D.id || void 0,
                "aria-activedescendant": D.activeDescendant ?? void 0,
                "aria-invalid": e.length > N,
                "aria-describedby": C,
                "aria-labelledby": v,
                "aria-autocomplete": "list",
            },
            w = f
                ? (0, i.jsx)(tz, {
                      ref: this.ref,
                      ...L,
                      type: _,
                      value: n && !R ? (0, S.x7)("") : t,
                      canUseCommands: _.commands?.enabled,
                      canOnlyUseTextCommands: E,
                      onSubmitFailure: c,
                  })
                : (0, i.jsx)(k, { ref: this.ref, ...L, value: n && !R ? "" : e });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.EG, { event: P.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, i.jsx)(g.EG, { event: P.jej.CLEAR_TEXT, handler: this.handleClearText }),
                w,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        c.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, S.x7)(""));
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
                          let t = (0, O.Q2)(e);
                          return null == t ? null : R(t);
                      })(n)
                    : null,
            c = null == (t = v.A.getFocusedWindowId()) ? null : R(t),
            E = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, O.Q2)(e);
                return n === (0, O.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (u ?? c ?? i)
                : i;
        if (null == a || (!E.isPrivate() && !r) || (E.isPrivate() && E.isManaged())) return !1;
        let { files: g, errors: T } = (function (e, t) {
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
                                        null != n && n.length > 0 && (e = (0, I.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(s.type)) ?? t.name;
                    return { files: [(0, A.VE)(t, n, t.type)], errors: a };
                }
                return { files: i, errors: a };
            }
            if (null != r && null != t) {
                let n = e.getData(r.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, A.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: a };
                }
            }
            return { files: [], errors: a };
        })(e.clipboardData, l.uploadLongMessages ? (s ?? o) : null);
        return (tq(
            "onPaste",
            [...e.clipboardData.items].map((e) => {
                if ("file" !== e.kind) return { kind: e.kind, type: e.type };
                {
                    let t = e.getAsFile();
                    return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
                }
            }),
        ),
        0 === g.length)
            ? (T?.some((e) => {
                  let { error: t } = e;
                  return "is_directory" === t;
              }) &&
                  (0, _.openUploadError)({ title: eg.intl.string(eg.t.azO1Pe), help: eg.intl.string(eg.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              ((e) => {
                  let t = p.A.getActiveCommand(E.id);
                  if (null == t) return a(e, E, l.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = l.drafts.commandType ?? l.drafts.type,
                      i = null,
                      r = p.A.getActiveOption(E.id);
                  null !=
                      (i =
                          r?.type === f.n4.ATTACHMENT
                              ? r
                              : t.options?.find((e) => {
                                    if (e.type === f.n4.ATTACHMENT) return null == m.A.getUpload(E.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: E.id,
                          id: i.name,
                          draftType: n,
                          file: { id: i.name, platform: h.xz.WEB, file: e[0] },
                      });
              })(g),
              this.focus(),
              !0);
    };
}
