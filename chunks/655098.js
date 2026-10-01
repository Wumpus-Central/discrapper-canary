n.d(t, { A: () => eS });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(235599),
    o = n(442433),
    u = n(267102),
    c = n(676279),
    d = n(723702),
    h = n(38405),
    m = n(19575),
    p = n(408018),
    f = n(186306),
    g = n(654821),
    x = n(35277),
    S = n(820066),
    E = n(112107),
    y = n(17928),
    C = n(866665),
    A = n(778712),
    b = n(939249),
    I = n(545442),
    v = n(922016),
    N = n(565645),
    T = n(730134),
    j = n(775602),
    k = n(47167),
    _ = n(442247),
    R = n(569926),
    w = n(106191),
    O = n(545868),
    L = n(376943),
    P = n(465365),
    M = n(78390),
    D = n(785562),
    V = n(332173),
    U = n(37632),
    W = n(593284),
    F = n(967144);
n(209932);
var B = n(734057),
    K = n(317525),
    G = n(994500),
    H = n(351906),
    z = n(287809),
    q = n(147036),
    $ = n(562153),
    Q = n(427262),
    Z = n(375708),
    X = n(307126);
function J(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(C.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(N.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function Y(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(C.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(N.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function ee(e) {
    let { text: t } = e;
    return (0, l.jsx)(V.A, { children: t });
}
function et(e) {
    let { id: t, guildId: n, channelId: i } = e,
        r = (0, y.bG)([z.default], () => z.default.getUser(t)),
        s = (0, y.bG)([H.A], () => H.A.hidePersonalInformation),
        a = $.Ay.useName(n, i, r),
        o = (0, l.jsx)(V.A, { children: null == a ? `<@${t}>` : `@${a}` });
    if (null != r) {
        let e = s || r.hasUniqueUsername() ? null : `#${r.discriminator}`;
        return (0, l.jsx)(C.m, {
            __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
                className: X.fX,
                children: [
                    (0, l.jsx)(T.A, { user: r, animate: !0, size: A._3.SIZE_16, className: X.my }),
                    Q.Ay.getUserTag(r, { mode: "username", identifiable: s ? "never" : "always" }),
                    (0, l.jsx)("span", { className: X.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": Q.Ay.getUserTag(r, { decoration: "never" }),
            asContainer: !0,
            children: (0, l.jsx)(b.D, { tag: "span", children: o }),
        });
    }
    return o;
}
function en(e) {
    let { id: t, guildId: n, channelId: r } = e,
        s = (0, y.bG)([K.A], () => (null != n ? K.A.getRole(n, t) : void 0)),
        a = (0, y.bG)([j.Ay], () => j.Ay.roleStyle),
        o = (0, F.X_)(n, s, s?.colorStrings),
        u = i.useRef(null);
    if (null == s) return (0, l.jsxs)("span", { children: ["@", Z.intl.string(Z.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        d = "dot" === a,
        h = "username" === a && c;
    function m(e) {
        return null == s
            ? null
            : (0, l.jsxs)(V.A, {
                  ref: u,
                  color: h ? s.color : null,
                  roleColors: h ? o : null,
                  ...e,
                  children: [
                      d && (0, l.jsx)(I.W, { color: s.colorString, colors: o, background: !1, tooltip: !1 }),
                      "@",
                      s.name,
                  ],
              });
    }
    return null == n || null == r
        ? m()
        : (0, l.jsx)(v.Y, {
              targetElementRef: u,
              preload: async () => {
                  await (0, O.a)(n, t);
              },
              renderPopout: (e) => (0, l.jsx)(W.Y, { guildId: n, channelId: r, roleId: t, popoutProps: e }),
              position: "top",
              children: m,
          });
}
function el(e) {
    let { id: t } = e,
        n = (0, y.bG)([B.A], () => B.A.getChannel(t)),
        i = Z.intl.string(Z.t.zLZPmk).toLowerCase(),
        r = "text",
        s = !0;
    return (null != n &&
        ((i = (0, L.nc)(n) ? (0, k.m1)(n, z.default, G.A) : Z.intl.string(Z.t["/YzI63"])),
        (r = (0, L.nc)(n) ? ((0, q.QG)(n) ?? "text") : "locked"),
        (s = (0, P.Y)(n.type))),
    s)
        ? (0, l.jsx)(V.A, { iconType: r, children: i })
        : (0, l.jsx)("span", { children: "#" + i });
}
function ei(e) {
    let { id: t, itemId: n, guildId: i } = e,
        r = (0, M.Q)(t),
        s = (0, y.bG)([K.A], () => (0, M.f)(K.A, t, n, i), [t, n, i]);
    return (0, l.jsxs)(V.A, { iconType: t, children: [r, null != s && (0, l.jsx)(U.A, {}), s] });
}
function er(e) {
    let { text: t, id: n } = e;
    return (0, l.jsxs)(V.A, { children: [t, "(", n, ")"] });
}
function es(e) {
    let { timestamp: t } = e;
    return (0, l.jsx)(D.A, { node: t, className: "R" === t.format ? X.gS : null });
}
function ea(e) {
    let { id: t } = e,
        n = (0, _.K)(t),
        i = null != n;
    return ((0, R.I)(i ? void 0 : t), i)
        ? (0, l.jsxs)(V.A, {
              children: [(0, l.jsx)(w.A, { game: { id: t, icon: n.gameIcon }, iconClassName: X.Kk }), n.gameName],
          })
        : (0, l.jsxs)("span", { children: ["@", Z.intl.string(Z.t["11pdXZ"])] });
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
        spoiler: s()(ec.ur, ec.F0, ec.kx, eo.spoiler),
        staticRouteLink: eo.fakeLink,
        syntaxBefore: eo.syntaxBefore,
        syntaxAfter: eo.syntaxAfter,
        codeBlockText: eo.codeBlockText,
        codeBlockSyntax: eo.codeBlockSyntax,
        codeBlockLang: eo.codeBlockLang,
        subtext: eo.subtext,
    },
    eh = new Set(["link", "url", "autolink"]);
var em = n(165648);
function ep(e) {
    let { className: t, attributes: n, children: i } = e,
        r = s()(eu.S0, eu.Cj, t);
    return (0, l.jsx)("span", { ...n, className: r, contentEditable: !1, children: i });
}
var ef = n(652215),
    eg = n(809067);
class ex extends i.PureComponent {
    containerRef = i.createRef();
    state;
    constructor(e) {
        (super(e),
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
            S.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, p.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: S.VW.richValue(e.editor), showPlaceholder: !1 }));
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
        (h.A.captureException(e, { extra: t }), this.setState({ initialValue: [...this.props.editor.children] }));
    }
    renderElement(e) {
        let { guildId: t, channelId: n, renderExtraElement: i, spellCheck: r } = this.props,
            { attributes: a, children: o } = e;
        "rtl" === a.dir && (a.style = { ...a.style, textAlign: "right" });
        let u =
            i?.(e) ??
            (function (e, t, n, i) {
                let { attributes: r, children: a, element: o, decorations: u } = e,
                    c = Object.entries(u?.[0] ?? {})
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
                switch (o.type) {
                    case "line":
                        if (o.codeBlockState?.isInCodeBlock)
                            return (0, l.jsx)("div", {
                                className: eo.codeLine,
                                spellCheck: !1 !== i && (null == o.codeBlockState || null == o.codeBlockState.lang),
                                ...r,
                                children: a,
                            });
                        return (0, l.jsx)("div", { ...r, children: a });
                    case "blockQuote": {
                        let e = s()(em.h, em.MN);
                        return (0, l.jsxs)("div", {
                            ...r,
                            className: e,
                            children: [
                                (0, l.jsx)("span", { contentEditable: !1, className: em.r }),
                                (0, l.jsx)("blockquote", { children: a }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(J, { emoji: o.emoji }), a],
                        });
                    case "customEmoji":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(Y, { emoji: o.emoji }), a],
                        });
                    case "textMention":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(ee, { text: o.name }), a],
                        });
                    case "userMention":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(et, { id: o.userId, channelId: n, guildId: t }), a],
                        });
                    case "roleMention":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(en, { id: o.roleId, guildId: t, channelId: n }), a],
                        });
                    case "channelMention":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(el, { id: o.channelId }), a],
                        });
                    case "staticRouteLink":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(ei, { id: o.id, itemId: o.itemId, guildId: t }), a],
                        });
                    case "soundboard":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(E.LF, { soundId: o.soundId }), a],
                        });
                    case "commandMention":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(er, { text: o.commandName, id: o.commandId }), a],
                        });
                    case "timestamp":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(es, { timestamp: o.parsed }), a],
                        });
                    case "gameMention":
                        return (0, l.jsxs)(ep, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(ea, { id: o.gameId }), a],
                        });
                    default:
                        return null;
                }
            })(e, t, n, r);
        return null != u ? u : (0, l.jsx)("div", { ...a, children: o });
    }
    renderLeaf(e) {
        let { editor: t, renderExtraLeaf: n } = this.props,
            { attributes: i, children: r } = e,
            a =
                n?.(e) ??
                (function (e, t) {
                    let n,
                        { attributes: i, children: r, leaf: a, text: o } = t,
                        u = e.chatInputType.markdown?.disableLinks === !0,
                        c = !1,
                        [d] = S.VW.node(e, S.PW.parent(S.VW.findPath(e, o)));
                    switch (S.VW.isEditor(d) ? "editor" : d.type) {
                        case "line":
                        case "blockQuote": {
                            c = void 0;
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
                                            (("codeBlockLang" === t || "codeBlockSyntax" === t) && (c = !1),
                                            t.startsWith("before_") || t.startsWith("after_"))
                                        )
                                            return [eo[t]];
                                        if (u && eh.has(t)) return [];
                                        if (t in ed) return [ed[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            n = s()(e, { [eo.syntaxOverride]: "||" === a.text || "\\" === a.text });
                        }
                    }
                    return (
                        (n = s()(n, { [eu.BI]: "" === o.text })),
                        (0, l.jsx)("span", { ...i, className: n, spellCheck: c, children: r })
                    );
                })(t, e);
        return null != a ? a : (0, l.jsx)("span", { ...i, children: r });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = S.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(S.VW.richValue(e)),
            !1 === this.props.canFocus)
        ) {
            let t = a.rL.findDocumentOrShadowRoot(e).getSelection();
            null != t && this.isSelectionPartiallyInside(t) && t?.removeAllRanges();
        }
    }
    handleKeyDown(e) {
        if (null != this.props.editor.composition) {
            (e.preventDefault(), e.stopPropagation());
            return;
        }
        this.props.onKeyDown?.(e);
    }
    handleKeyUp(e) {
        if (null != this.props.editor.composition) {
            (e.preventDefault(), e.stopPropagation());
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
                let n = S.VW.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (S.ZF.isExpanded(n)
                        ? f.o.withSingleEntry(t, () => {
                              ((t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault());
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != l && !l.collapsed) {
                let n = S.VW.toSlateRange(t, l, { exactMatch: !0, suppressThrow: !0 });
                null != n &&
                    S.ZF.isExpanded(n) &&
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
        let n = null != e.selection && S.ZF.isCollapsed(e.selection) ? S.VW.leaf(e, e.selection.anchor.path) : null;
        if (null == n) {
            e.composition = t;
            return;
        }
        if (
            (null !=
                (null != e.selection && S.ZF.isCollapsed(e.selection)
                    ? S.VW.above(e, { at: n[1], match: (t) => S.VW.isInline(e, t), mode: "lowest" })
                    : null) && (t.startedInsideInline = !0),
            S.VW.isEditorEmpty(e))
        ) {
            (x.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t));
            return;
        }
        let l = a.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            i = (l?.rangeCount ?? 0) > 0 ? l?.getRangeAt(0) : null;
        if (null == (null != i ? S.VW.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }) : null) && null != i) {
            let t = S.VW.toSlateRange(e, i, { exactMatch: !1, suppressThrow: !0 });
            ((e.selection = null), null != t ? x.b.select(e, t) : x.b.select(e, S.VW.end(e, [])));
        }
        e.composition = t;
    }
    handleCompositionEnd(e) {
        let { editor: t } = this.props;
        if (null == t.composition) return;
        let { insertedPrefix: n } = t.composition;
        if (n && null != t.selection && S.ZF.isCollapsed(t.selection)) {
            let e = t.selection.anchor.path,
                n = S.AS.leaf(t, e);
            S.VW.withoutNormalizing(t, () => {
                let e = n.text.replace(/^\uFEFF/, "");
                (x.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), S.VW.insertText(t, e));
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
            r = i.getElementById("textarea-context"),
            s = i.getElementById("slate-toolbar");
        if (null != l && !(0, g.hasDomParent)(l, r) && !(0, g.hasDomParent)(l, s)) {
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
                    r = l.endContainer,
                    s = l.startOffset,
                    a = l.endOffset;
                if ((0, g.hasDomParent)(i, t) || (!(0, g.isDOMRangeCollapsed)(i, s, r, a) && (0, g.hasDomParent)(r, t)))
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
                let r = e.getRangeAt(i),
                    s = r.startContainer,
                    a = r.endContainer,
                    o = r.startOffset,
                    u = r.endOffset;
                if ((0, g.hasDomParent)(s, t)) {
                    if (l) return !0;
                    n = !0;
                } else {
                    if (n) return !0;
                    l = !0;
                }
                if (!(0, g.isDOMRangeCollapsed)(s, o, a, u))
                    if ((0, g.hasDomParent)(s, t)) {
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
            r = window.innerHeight;
        if (d.isPlatformEmbedded) {
            let s = (0, u.zd)();
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
                            text: S.VW.getSelectedText(t, !0),
                            clipboardHasMixedContent: i,
                        });
                },
                {
                    align: null != i && null != r && i < r / 2 ? "top" : "bottom",
                    enableSpellCheck: s === ef.BRT.APP,
                    repositionOnContentChange: !0,
                },
            );
        } else blur();
    }
    handlePasteCapture(e) {
        let { editor: t, onPaste: n, readOnly: l } = this.props;
        (n?.(e),
            e.isDefaultPrevented() ||
                e.isPropagationStopped() ||
                l ||
                (t.insertData(e.clipboardData), e.preventDefault(), e.stopPropagation()));
    }
    render() {
        let {
            editor: e,
            className: t,
            containerClassName: n,
            canFocus: i,
            autoFocus: r,
            placeholder: o,
            decorate: u,
            "aria-multiline": c = !0,
            channelId: d,
            guildId: h,
            onChange: m,
            onFocus: p,
            onBlur: f,
            onKeyDown: g,
            onKeyUp: x,
            renderExtraElement: S,
            renderExtraLeaf: E,
            ...y
        } = this.props;
        return (0, l.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, l.jsx)("div", {
                          className: s()(eg.q, t),
                          "aria-hidden": !0,
                          "data-slate-placeholder": "true",
                          children: o,
                      })
                    : null,
                (0, l.jsx)(a.A, {
                    editor: e,
                    value: [...this.state.initialValue],
                    children: (0, l.jsx)(a.Fo, {
                        ...y,
                        className: s()(em.PT, eg.E, t),
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
                        autoFocus: r && !1 !== i,
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
let eS = ex;
