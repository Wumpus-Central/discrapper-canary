n.d(t, { A: () => eA });
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
    f = n(408018),
    p = n(186306),
    g = n(654821),
    x = n(35277),
    E = n(820066),
    S = n(112107),
    y = n(17928),
    C = n(866665),
    A = n(778712),
    b = n(545442),
    I = n(265872),
    v = n(788026),
    N = n(730134),
    T = n(775602),
    k = n(47167),
    j = n(442247),
    _ = n(454908),
    R = n(545868),
    w = n(376943),
    O = n(465365),
    L = n(78390),
    M = n(785562),
    P = n(266645),
    D = n(332173),
    U = n(37632),
    V = n(593284),
    W = n(967144);
n(209932);
var F = n(342296),
    B = n(734057),
    G = n(317525),
    K = n(994500),
    H = n(351906),
    z = n(287809),
    q = n(147036),
    $ = n(562153),
    Q = n(427262),
    Z = n(650583),
    X = n(105292),
    Y = n(307126);
function J(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(C.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(v.A, { src: t.src, emojiName: t.name, animated: !1, surrogate: t.surrogate }),
    });
}
function ee(e) {
    let { emoji: t } = e;
    return (0, l.jsx)(C.m, {
        text: t.name,
        delay: 750,
        position: "top",
        children: (0, l.jsx)(v.A, { emojiId: t.emojiId, emojiName: t.name, animated: t.animated }),
    });
}
function et(e) {
    let { text: t } = e;
    return (0, l.jsx)(D.A, { children: t });
}
function en(e) {
    (e.key === Z.dh.ENTER || e.key === Z.dh.SPACE) && e.stopPropagation();
}
function el(e) {
    let { id: t, name: n, targetRef: i, popoutProps: r } = e;
    return (0, l.jsx)(D.A, {
        ref: i,
        ...r,
        onKeyDown: (e) => {
            (r?.onKeyDown(e), en(e));
        },
        children: null == n ? `<@${t}>` : `@${n}`,
    });
}
function ei(e) {
    let { id: t, guildId: n, channelId: r } = e,
        s = (0, y.bG)([z.default], () => z.default.getUser(t)),
        a = (0, y.bG)([H.A], () => H.A.hidePersonalInformation),
        o = i.useRef(null),
        u = $.Ay.useName(n, r, s),
        c = i.useCallback((e) => (0, l.jsx)(el, { id: t, name: u, targetRef: o, popoutProps: e }), [t, u]);
    if (null != s) {
        let e = a || s.hasUniqueUsername() ? null : `#${s.discriminator}`;
        return (0, l.jsx)(C.m, {
            __unsupportedReactNodeAsText: (0, l.jsxs)("div", {
                className: Y.fX,
                children: [
                    (0, l.jsx)(N.A, { user: s, animate: !0, size: A._3.SIZE_16, className: Y.my }),
                    Q.Ay.getUserTag(s, { mode: "username", identifiable: a ? "never" : "always" }),
                    (0, l.jsx)("span", { className: Y.D2, children: e }),
                ],
            }),
            delay: 750,
            position: "top",
            "aria-label": Q.Ay.getUserTag(s, { decoration: "never" }),
            asContainer: !0,
            children: (0, l.jsx)(F.A, {
                targetElementRef: o,
                user: s,
                guildId: n,
                channelId: r,
                position: "top",
                clickTrap: !0,
                children: c,
            }),
        });
    }
    return (0, l.jsx)(el, { id: t, name: u, targetRef: o });
}
function er(e) {
    let { id: t, guildId: n, channelId: r } = e,
        s = (0, y.bG)([G.A], () => (null != n ? G.A.getRole(n, t) : void 0)),
        a = (0, y.bG)([T.Ay], () => T.Ay.roleStyle),
        o = (0, W.X_)(n, s, s?.colorStrings),
        u = i.useRef(null);
    if (null == s) return (0, l.jsxs)("span", { children: ["@", X.intl.string(X.t["YV4F/n"])] });
    let c = null != s.color && 0 !== s.color,
        d = "dot" === a,
        h = "username" === a && c;
    function m(e) {
        return null == s
            ? null
            : (0, l.jsxs)(D.A, {
                  ref: u,
                  color: h ? s.color : null,
                  roleColors: h ? o : null,
                  ...e,
                  children: [
                      d && (0, l.jsx)(b.W, { color: s.colorString, colors: o, background: !1, tooltip: !1 }),
                      "@",
                      s.name,
                  ],
              });
    }
    return null == n || null == r
        ? m()
        : (0, l.jsx)(I.Y, {
              targetElementRef: u,
              preload: async () => {
                  await (0, R.a)(n, t);
              },
              renderPopout: (e) => (0, l.jsx)(V.Y, { guildId: n, channelId: r, roleId: t, popoutProps: e }),
              position: "top",
              children: m,
          });
}
function es(e) {
    let { id: t } = e,
        n = (0, y.bG)([B.A], () => B.A.getChannel(t)),
        i = X.intl.string(X.t.zLZPmk).toLowerCase(),
        r = "text",
        s = !0;
    return (null != n &&
        ((i = (0, w.nc)(n) ? (0, k.m1)(n, z.default, K.A) : X.intl.string(X.t["/YzI63"])),
        (r = (0, w.nc)(n) ? ((0, q.QG)(n) ?? "text") : "locked"),
        (s = (0, O.Y)(n.type))),
    s)
        ? (0, l.jsx)(D.A, { iconType: r, children: i })
        : (0, l.jsx)("span", { children: "#" + i });
}
function ea(e) {
    let { id: t, itemId: n, guildId: i } = e,
        r = (0, L.Q)(t),
        s = (0, y.bG)([G.A], () => (0, L.f)(G.A, t, n, i), [t, n, i]);
    return (0, l.jsxs)(D.A, { iconType: t, children: [r, null != s && (0, l.jsx)(U.A, {}), s] });
}
function eo(e) {
    let { text: t, id: n } = e;
    return (0, l.jsxs)(D.A, { children: [t, "(", n, ")"] });
}
function eu(e) {
    let { timestamp: t } = e;
    return (0, l.jsx)(M.A, { node: t, className: "R" === t.format ? Y.gS : null });
}
function ec(e) {
    let { id: t } = e,
        n = (0, j.K)(t);
    return ((0, _.I)(null != n ? void 0 : t), (0, l.jsx)(P.A, { gameId: t, onKeyDown: en }));
}
var ed = n(891031),
    eh = n(106972),
    em = n(881013);
let ef = {
        strong: ed.bold,
        em: ed.italics,
        u: ed.underline,
        s: ed.strikethrough,
        inlineCode: ed.inlineCode,
        link: ed.fakeLink,
        url: ed.fakeLink,
        autolink: ed.fakeLink,
        silentPrefix: ed.silentPrefix,
        spoiler: s()(em.ur, em.F0, em.kx, ed.spoiler),
        staticRouteLink: ed.fakeLink,
        syntaxBefore: ed.syntaxBefore,
        syntaxAfter: ed.syntaxAfter,
        codeBlockText: ed.codeBlockText,
        codeBlockSyntax: ed.codeBlockSyntax,
        codeBlockLang: ed.codeBlockLang,
        subtext: ed.subtext,
    },
    ep = new Set(["link", "url", "autolink"]);
var eg = n(165648);
function ex(e) {
    (e.preventDefault(), e.stopPropagation());
}
function eE(e) {
    let { className: t, attributes: n, children: i, preventSelection: r } = e,
        a = s()(eh.S0, eh.Cj, t);
    return (0, l.jsx)("span", {
        ...n,
        className: a,
        contentEditable: !1,
        onMouseDown: r ? ex : void 0,
        onClick: r ? ex : void 0,
        children: i,
    });
}
var eS = n(652215),
    ey = n(809067);
class eC extends i.PureComponent {
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
            E.VW.isEditorEmpty(e.editor)
                ? (this.state = { initialValue: (0, f.N3)().richValue, showPlaceholder: !0 })
                : (this.state = { initialValue: E.VW.richValue(e.editor), showPlaceholder: !1 }));
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
                            return !0 === n && t in ef ? ef[t] : null;
                        })
                        .filter((e) => null != e)
                        .join(" ");
                switch (o.type) {
                    case "line":
                        if (o.codeBlockState?.isInCodeBlock)
                            return (0, l.jsx)("div", {
                                className: ed.codeLine,
                                spellCheck: !1 !== i && (null == o.codeBlockState || null == o.codeBlockState.lang),
                                ...r,
                                children: a,
                            });
                        return (0, l.jsx)("div", { ...r, children: a });
                    case "blockQuote": {
                        let e = s()(eg.h, eg.MN);
                        return (0, l.jsxs)("div", {
                            ...r,
                            className: e,
                            children: [
                                (0, l.jsx)("span", { contentEditable: !1, className: eg.r }),
                                (0, l.jsx)("blockquote", { children: a }),
                            ],
                        });
                    }
                    case "emoji":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(J, { emoji: o.emoji }), a],
                        });
                    case "customEmoji":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(ee, { emoji: o.emoji }), a],
                        });
                    case "textMention":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(et, { text: o.name }), a],
                        });
                    case "userMention":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            preventSelection: !0,
                            children: [(0, l.jsx)(ei, { id: o.userId, channelId: n, guildId: t }), a],
                        });
                    case "roleMention":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            preventSelection: !0,
                            children: [(0, l.jsx)(er, { id: o.roleId, guildId: t, channelId: n }), a],
                        });
                    case "channelMention":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(es, { id: o.channelId }), a],
                        });
                    case "staticRouteLink":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(ea, { id: o.id, itemId: o.itemId, guildId: t }), a],
                        });
                    case "soundboard":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(S.LF, { soundId: o.soundId }), a],
                        });
                    case "commandMention":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(eo, { text: o.commandName, id: o.commandId }), a],
                        });
                    case "timestamp":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            children: [(0, l.jsx)(eu, { timestamp: o.parsed }), a],
                        });
                    case "gameMention":
                        return (0, l.jsxs)(eE, {
                            attributes: r,
                            className: c,
                            preventSelection: !0,
                            children: [(0, l.jsx)(ec, { id: o.gameId }), a],
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
                        i,
                        { attributes: r, children: a, leaf: o, text: u } = t,
                        c = e.chatInputType.markdown?.disableLinks === !0,
                        d = !1,
                        [h] = E.VW.node(e, E.PW.parent(E.VW.findPath(e, u)));
                    switch (E.VW.isEditor(h) ? "editor" : h.type) {
                        case "line":
                        case "blockQuote": {
                            d = void 0;
                            let e = Object.entries(o)
                                .filter((e) => {
                                    let [t] = e;
                                    return "text" !== t;
                                })
                                .flatMap((e) => {
                                    let [t, n] = e;
                                    if ("hljsTypes" === t) return n;
                                    if ("ansiStyle" === t) return [];
                                    if (!0 === n) {
                                        if (
                                            (("codeBlockLang" === t || "codeBlockSyntax" === t) && (d = !1),
                                            t.startsWith("before_") || t.startsWith("after_"))
                                        )
                                            return [ed[t]];
                                        if (c && ep.has(t)) return [];
                                        if (t in ef) return [ef[t]];
                                        throw Error(`Slate: Unknown decoration attribute: ${t}`);
                                    }
                                })
                                .filter((e) => null != e)
                                .join(" ");
                            ((i = o.ansiStyle),
                                (n = s()(e, { [ed.syntaxOverride]: "||" === o.text || "\\" === o.text })));
                        }
                    }
                    return (
                        (n = s()(n, { [eh.BI]: "" === u.text })),
                        (0, l.jsx)("span", { ...r, className: n, style: i, spellCheck: d, children: a })
                    );
                })(t, e);
        return null != a ? a : (0, l.jsx)("span", { ...i, children: r });
    }
    handleOnChange() {
        let { editor: e } = this.props,
            t = E.VW.isEditorEmpty(e) && null == e.composition;
        if (
            (t !== this.state.showPlaceholder && this.setState({ showPlaceholder: t }),
            this.props.onChange?.(E.VW.richValue(e)),
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
                let n = E.VW.toSlateRange(t, i, { exactMatch: !1, suppressThrow: !0 });
                null != n &&
                    null != e.data &&
                    (E.ZF.isExpanded(n)
                        ? p.o.withSingleEntry(t, () => {
                              ((t.selection = n), t.deleteFragment(), t.insertText(e.data), e.preventDefault());
                          })
                        : (t.insertText(e.data), e.preventDefault()));
            }
            if (e.inputType.startsWith("deleteContent") && null != l && !l.collapsed) {
                let n = E.VW.toSlateRange(t, l, { exactMatch: !0, suppressThrow: !0 });
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
            (x.b.insertNodes(e, { text: "\uFEFF" }, { select: !0 }), (t.insertedPrefix = !0), (e.composition = t));
            return;
        }
        let l = a.rL.findDocumentOrShadowRoot(this.props.editor).getSelection(),
            i = (l?.rangeCount ?? 0) > 0 ? l?.getRangeAt(0) : null;
        if (null == (null != i ? E.VW.toSlateRange(e, i, { exactMatch: !0, suppressThrow: !0 }) : null) && null != i) {
            let t = E.VW.toSlateRange(e, i, { exactMatch: !1, suppressThrow: !0 });
            ((e.selection = null), null != t ? x.b.select(e, t) : x.b.select(e, E.VW.end(e, [])));
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
                (x.b.delete(t, { unit: "offset", distance: n.text.length, reverse: !0 }), E.VW.insertText(t, e));
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
                            n.e("752516"),
                            n.e("230803"),
                            n.e("722401"),
                        ]).then(n.bind(n, 258360)),
                        i = m.Ay.clipboardHasMixedContent();
                    return (n) =>
                        (0, l.jsx)(e, {
                            ...n,
                            editor: t,
                            text: E.VW.getSelectedText(t, !0),
                            clipboardHasMixedContent: i,
                        });
                },
                {
                    align: null != i && null != r && i < r / 2 ? "top" : "bottom",
                    enableSpellCheck: s === eS.BRT.APP,
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
            onFocus: f,
            onBlur: p,
            onKeyDown: g,
            onKeyUp: x,
            renderExtraElement: E,
            renderExtraLeaf: S,
            ...y
        } = this.props;
        return (0, l.jsxs)("div", {
            ref: this.containerRef,
            className: n,
            children: [
                this.state.showPlaceholder
                    ? (0, l.jsx)("div", {
                          className: s()(ey.q, t),
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
                        className: s()(eg.PT, ey.E, t),
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
                        autoComplete: "off",
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
let eA = eC;
