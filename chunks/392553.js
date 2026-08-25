"use strict";
n.d(t, { A: () => eE }), n(321073), n(323874), n(14289), n(35956);
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(435558),
    o = n.n(a),
    u = n(607399),
    c = n(465532),
    d = n(608299),
    h = n(494921),
    m = n(155718),
    f = n(565150),
    p = n(861382),
    g = n(626584),
    x = n(522602),
    A = n(234320),
    C = n(453771),
    E = n(741394),
    I = n(355622),
    y = n(408018),
    v = n(579940),
    S = n(734057),
    N = n(573163),
    _ = n(531685),
    T = n(365971);
function j(e) {
    let t = N.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (S.A.getChannel(t) ?? null);
}
var b = n(826745),
    R = n(442433),
    M = n(721768),
    O = n(723702),
    L = n(677134),
    w = n(652215),
    k = n(650583);
let P = /(\t|\s)/;
class D extends i.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
        Promise.resolve().then(() => {
            let { value: e } = this.props;
            this._ref?.setSelection(e.length, e.length);
        }),
            null != p.A.getActiveCommand(this.props.channel.id) &&
                M.Gf({ channelId: this.props.channel.id, command: null, section: null });
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
            let r = t.value.slice(0, t.selectionStart - i.length),
                a = l && null != s ? s.length - i.length : 0,
                o = t.value.slice(t.selectionEnd + a);
            this._insertText(e, r, o, n);
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
        s?.(null, i, (0, y.x7)(i));
        let r = t.length + e.length;
        this.setState({ nextSelection: r }, () => {
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
            id: o,
            submitting: u,
            textAreaPaddingClassName: c,
            spellcheckEnabled: d,
            "aria-controls": h,
            "aria-expanded": m,
            "aria-activedescendant": f,
        } = this.props;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(A.EG, { event: w.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, l.jsx)(b.y, {
                    ref: this.handleSetRef,
                    className: r()(a, c),
                    id: o,
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
                    "aria-controls": h,
                    "aria-expanded": m,
                    "aria-activedescendant": f,
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
            e.key === k.dh.ENTER &&
            !e.shiftKey &&
            !this.hasOpenCodeBlock() &&
            (!this.props.disableEnterToSubmit || e.ctrlKey)
        )
            return e.preventDefault(), this.props.onSubmit(this.props.value);
    };
    handleKeyDown = (e) => {
        switch (e.which) {
            case w.Ks6.ARROW_DOWN:
                this.props.moveSelection(1) && e.preventDefault();
                break;
            case w.Ks6.N:
                e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                break;
            case w.Ks6.ARROW_UP:
                this.props.moveSelection(-1) && e.preventDefault();
                break;
            case w.Ks6.P:
                e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                break;
            case w.Ks6.TAB:
            case w.Ks6.ENTER:
                this.handleTabOrEnterDown(e);
        }
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
    handleTabOrEnterDown(e) {
        (e.key === k.dh.TAB && this.props.onTab()) || (e.key === k.dh.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.key === k.dh.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.key === k.dh.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.key) {
            case k.dh.ARROW_RIGHT:
            case k.dh.ARROW_LEFT:
            case k.dh.HOME:
            case k.dh.END:
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
        O.isPlatformEmbedded &&
            (0, R.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(n.bind(n, 216603));
                    return (t) => (0, l.jsx)(e, { ...t, text: (0, L.u)() });
                },
                { align: "bottom", enableSpellCheck: !0 },
            );
    };
    handleOnChange = (e) => {
        let { onChange: t, allowNewLines: n } = this.props,
            l = e.currentTarget.value,
            i = n ? l : l.replace("\n", "");
        t?.(e, i, (0, y.x7)(i));
    };
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText(`:${t.name}:`, void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
}
var U = n(95561),
    G = n(625494),
    V = n(317681),
    F = n(186306),
    H = n(655098),
    B = n(323350),
    W = n(35277),
    K = n(820066),
    z = n(702483),
    Z = n(490682),
    Y = n(683167),
    q = n(284009),
    J = n.n(q),
    $ = n(530795),
    X = n(407315),
    Q = n(2368),
    ee = n(551483);
function et(e, t) {
    let n = p.A.getActiveCommand(e.id),
        l = n?.options?.find((e) => e.name === t.optionName);
    return null != l && (l.type !== m.n4.STRING || l?.choices != null || l?.autocomplete);
}
function en(e, t, n, l) {
    let i = K.VW.areStylesDisabled(e) || null == n ? t : n;
    F.o.withSingleEntry(e, () => {
        W.b.insertText(e, l ? i + " " : i);
    });
}
var el = n(113001),
    ei = n(770178),
    es = n(38405);
let er = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function ea(e) {
    try {
        return K.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), es.A.captureException(e), null;
    }
}
var eo = n(870748),
    eu = n(17928),
    ec = n(31717),
    ed = n(375708),
    eh = n(106972);
let em = (e) => {
    let t,
        { channelId: n, element: s, attributes: a, children: o } = e,
        u = (0, $.f7)(),
        c = (0, $.zL)(),
        d = (0, $.RV)(),
        { optionType: h, errored: f } = (0, eu.cf)(
            [p.A],
            () => ({
                optionType: p.A.getOption(n, s.optionName)?.type,
                errored: p.A.getOptionState(n, s.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, s.optionName],
        ),
        g = (0, eu.bG)([x.A], () => x.A.getUpload(n, s.optionName, ec.C.SlashCommand), [n, s.optionName]),
        A = s.children[s.children.length - 1],
        C = null != A && K.l5.isText(A) && A.text.endsWith("\n"),
        E = r()(eh.S0, eh.xP, { [eh.t$]: c && u, [eh.$2]: (!c || !u) && f }),
        I = i.useCallback(() => {
            K.VW.isVoid(d, s) || W.b.selectCommandOption(d, s.optionName, !0);
        }, [d, s]);
    return (
        (t =
            h === m.n4.ATTACHMENT
                ? g?.filename != null
                    ? (0, l.jsxs)("span", {
                          className: r()(eh._K, eh.dU),
                          contentEditable: !1,
                          children: [g.filename, o],
                      })
                    : (0, l.jsxs)("span", {
                          className: r()(eh._K, eh.ZI),
                          contentEditable: !1,
                          children: [ed.intl.string(ed.t.GRdFni), o],
                      })
                : (0, l.jsxs)("span", {
                      className: eh._K,
                      children: [o, C ? (0, l.jsx)("span", { className: eh.Nx, contentEditable: !1 }) : null],
                  })),
        (0, l.jsxs)("span", {
            ...a,
            className: E,
            children: [
                (0, l.jsxs)("span", {
                    className: eh.gA,
                    contentEditable: !1,
                    onClick: I,
                    children: [s.optionDisplayName, "\u200B"],
                }),
                t,
                (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
            ],
        })
    );
};
function ef(e) {
    let { element: t, attributes: n, children: i } = e,
        s = (0, $.f7)(),
        a = (0, $.zL)(),
        o = r()(eh.S0, eh.xP, eh.Bz, { [eh.t$]: a && s, [eh.$2]: t.error }),
        u = (0, l.jsx)("span", { className: eh._K, children: i });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: eh.gA, contentEditable: !1, children: ["@game", "\u200B"] }),
            u,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
function ep(e) {
    let { element: t, attributes: n, children: i } = e,
        s = (0, $.f7)(),
        a = (0, $.zL)(),
        o = r()(eh.S0, eh.xP, eh.Bz, { [eh.t$]: a && s, [eh.$2]: t.error }),
        u = t.children[t.children.length - 1],
        c = null != u && K.l5.isText(u) && u.text.endsWith("\n"),
        d = (0, l.jsxs)("span", {
            className: eh._K,
            children: [i, c ? (0, l.jsx)("span", { className: eh.Nx, contentEditable: !1 }) : null],
        });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: eh.gA, contentEditable: !1, children: ["@time", "\u200B"] }),
            d,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
var eg = n(183531);
let ex = i.forwardRef(function (e, t) {
    let n,
        s,
        a,
        o,
        u,
        c,
        {
            value: d,
            type: h,
            channel: f,
            className: g,
            id: C,
            disabled: E,
            submitting: y,
            placeholder: v,
            required: S,
            textAreaPaddingClassName: N,
            onChange: _,
            onPaste: T,
            onResize: j,
            onFocus: b,
            onBlur: R,
            onKeyDown: M,
            onKeyUp: O,
            onTab: L,
            onEnter: P,
            onSpace: D,
            onSubmit: q,
            onSubmitFailure: es,
            maybeShowAutocomplete: eu,
            hideAutocomplete: ec,
            moveSelection: ex,
            spellcheckEnabled: eA,
            canUseCommands: eC,
            disableAutoFocus: eE,
            disableEnterToSubmit: eI,
            allowNewLines: ey,
            "aria-owns": ev,
            "aria-expanded": eS,
            "aria-haspopup": eN,
            "aria-activedescendant": e_,
            "aria-controls": eT,
            "aria-invalid": ej,
            "aria-describedby": eb,
            "aria-labelledby": eR,
            "aria-autocomplete": eM,
        } = e,
        eO = i.useRef(null),
        eL = i.useRef(null),
        ew = i.useRef(!0),
        ek = i.useRef(!0),
        eP = E || y,
        eD = i.useCallback(
            (e, t, n) => {
                let { value: l, selection: i } = n,
                    s = K.VW.richValue(e),
                    r = e.selection,
                    a = !1;
                if (void 0 !== l && l !== s) {
                    if (((e.children = l), "parent" === t && !e.previewMarkdown && e.chatInputType === I.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, Q.eF)(e, f.guild_id, f.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, Q.eF)(e, f.guild_id, f.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== l && l !== s && F.o.insertEntry(e, "other", !1, s, r), (a = !0);
                }
                if ((null == i || K.Ot.isValid(e, i) || (i = void 0), (a || !K.Ot.isValid(e, r)) && void 0 === i)) {
                    let t = K.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let o = null != i && !K.Ot.equals(i, r);
                if (null != i && o) {
                    e.selection = i;
                    let t = F.o.currentEntry(e);
                    null != t && (t.selection = i), (a = !0);
                }
                let u = V.n$(e);
                if (
                    (null != u &&
                        u[0].command.id !== p.A.getActiveCommand(f.id)?.id &&
                        F.o.withMergedEntry(e, () => {
                            (0, eo.t)(e, f.id, null, !0);
                        }),
                    a)
                )
                    if ("parent" === t)
                        try {
                            (ek.current = !1), e.onChange();
                        } finally {
                            ek.current = !0;
                        }
                    else e.onChange();
            },
            [f.id, f.guild_id],
        ),
        eU = i.useCallback(() => {
            ew.current = !1;
        }, []),
        eG = i.useCallback(() => {
            ew.current = !0;
        }, []),
        eV = (0, Y.A)({ channel: f, chatInputType: h, onChangeStart: eU, onChangeEnd: eG, updateState: eD }),
        eF = i.useCallback(
            (e, t) => {
                let n = V.SQ(eV, e, f.id),
                    l = V.cd(e, f.guild_id, f.id, n, t);
                return { values: n, results: l };
            },
            [f.guild_id, f.id, eV],
        ),
        eH = i.useCallback(() => {
            let e,
                t = K.VW.getNodesOfType(eV, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                l = eC ? p.A.getActiveCommand(f.id) : null,
                i = !1;
            if (null != l && null != l.options) {
                let t = eF(l, !1);
                e = t.values;
                let n = V.O7(eV)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (l.options ?? []).find((t) => t.name === e));
                for (let e of l.options)
                    !e.required || e.name in t.values || (W.b.insertCommandOption(eV, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    W.b.selectCommandOption(eV, e.name),
                        (i = !0),
                        (0, U.zV)(w.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: l?.applicationId,
                            command_id: l?.rootCommand?.id,
                            argument_type: m.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    W.b.setNodes(eV, { error: !0 }, { at: t }), i || W.b.select(eV, K.VW.end(eV, t)), (i = !0);
            if (i) {
                G._.dispatch(w.jej.SHAKE_APP, { duration: 200, intensity: 2 }), es?.();
                return;
            }
            q?.((0, B.WO)(K.VW.richValue(eV), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), l, e);
        }, [f.id, eV, q, es, eF, eC]);
    i.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eV,
            submit(e) {
                e?.preventDefault(), eH();
            },
            focus() {
                K.VW.focus(eV);
            },
            blur() {
                $.rL.blur(eV);
            },
            getCurrentWord() {
                let e = eV.selection;
                if (null == e || !K.Ot.isValid(eV, e) || K.ZF.isExpanded(e) || (0, X.Q9)(eV))
                    return { word: null, isAtStart: !1 };
                let [t, n] = K.VW.node(eV, K.PW.parent(e.anchor.path)),
                    [l, i] = K.VW.node(eV, e.anchor.path),
                    s = e.anchor.offset;
                if (!K.PW.hasPrevious(i) && K.l5.isText(l)) {
                    let e = l.text.substring(0, s);
                    if (K.AS.isType(t, "applicationCommand") && s < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let r = "",
                    a = !1;
                for (;;) {
                    if (--s < 0) {
                        if (!K.PW.hasPrevious(i)) {
                            a = !0;
                            break;
                        }
                        [l, i] = K.VW.node(eV, K.PW.previous(i));
                    }
                    if (!K.l5.isText(l)) break;
                    let e = l.text[s];
                    if (ee.ug.test(e)) break;
                    r = e + r;
                }
                let o = r,
                    u = e.anchor.offset,
                    [c] = K.VW.node(eV, e.anchor.path);
                for (; K.l5.isText(c) && !(u >= c.text.length); ) {
                    let e = c.text[u];
                    if (ee.ug.test(e)) break;
                    (o += e), u++;
                }
                return { word: r, fullWord: o, isAtStart: a && K.PW.isFirstEditorBlock(n) };
            },
            getFirstText: () => K.VW.getFirstText(eV)?.text ?? "",
            getCurrentCommandOption() {
                let e = V.M3(eV);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = V.M3(eV);
                if (null == e) return [];
                let t = p.A.getActiveCommand(f.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : V.FV(eV, n, e[0], f.id);
            },
            getCommandOptionValues() {
                let e = p.A.getActiveCommand(f.id);
                return null == e ? {} : V.SQ(eV, e, f.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                F.o.withSingleEntry(eV, () => {
                    let l = V.M3(eV),
                        i = null != l && et(f, l[0]);
                    if (
                        (null != t && i && (W.b.removeInlineChildren(eV, l), (n = !1)), en(eV, e, t, n), null != t && i)
                    ) {
                        let e = V.n$(eV);
                        if (((l = K.cv.updateElement(eV, l)), null != e)) {
                            let t = K.cv.markdown(e[0], f.guild_id);
                            (0, Q.lE)(eV, l, f.id, t) && (l = K.cv.updateElement(eV, l));
                        }
                        V.ke(eV, f.guild_id, f.id, K.cv.updateElement(eV, l), !1), W.b.selectNextCommandOption(eV);
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: l = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                F.o.withSingleEntry(eV, () => {
                    let i = V.M3(eV),
                        s = null != i && et(f, i[0]);
                    if (s) W.b.removeInlineChildren(eV, i), (n = !1);
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            W.b.delete(eV, { distance: e.length, unit: "character", reverse: !0 }),
                            l &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                W.b.delete(eV, { distance: t.length - e.length, unit: "character" });
                    }
                    en(eV, e, t, n), s && W.b.selectNextCommandOption(eV);
                });
            },
            insertInlineAutocompleteInput(e) {
                F.o.withSingleEntry(eV, () => {
                    let { word: t } = this.getCurrentWord();
                    null != t && t.length > 0 && W.b.delete(eV, { distance: t.length, unit: "character", reverse: !0 }),
                        W.b.insertNodes(eV, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                F.o.withSingleEntry(eV, () => {
                    let l = K.VW.getSelectedParentOfType(eV, [e]);
                    J()(null != l, `Cannot replace inline input of type ${e} when none is selected`),
                        W.b.removeNodes(eV, { at: l[1] }),
                        en(eV, t, n, !0);
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                F.o.withSingleEntry(eV, () => {
                    let e = t.animated ? "a" : "",
                        l = t.originalName ?? t.name ?? "";
                    en(eV, `:${t.name}:`, null != t.id ? `<${e}:${l.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eV, f, eH],
    ),
        (n = i.useRef(null)),
        (s = i.useRef(null)),
        (a = i.useRef(null)),
        i.useLayoutEffect(() => {
            (s.current = ea(eV)),
                null == s.current &&
                    null == a.current &&
                    (a.current = setTimeout(() => {
                        s.current = ea(eV);
                    }, 100));
        }, [eV]),
        i.useEffect(() => {
            let e = a.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []),
        (o = i.useCallback(() => {
            let e = s.current;
            if (null == e) return;
            let t = e.offsetHeight;
            n.current !== t && (null != eO.current && (eO.current.style.height = `${t}px`), (n.current = t), j?.(t));
        }, [eO, j])),
        (0, ei.g)(s, o, [o, eV, j], er),
        i.useLayoutEffect(() => {
            let e = $.rL.findDocumentOrShadowRoot(eV).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = ea(eV);
            null != t && ((n.current = t.offsetHeight), j?.(n.current));
        }, [eO, eV, j]);
    let { handleKeyDown: eB, handleKeyUp: eW } = (function (e) {
            let {
                editor: t,
                channel: n,
                disableEnterToSubmit: l,
                onKeyDown: s,
                onKeyUp: r,
                onTab: a,
                onEnter: o,
                onSpace: u,
                allowNewLines: c,
                submit: d,
                hideAutocomplete: h,
                moveSelection: m,
            } = e;
            return {
                handleKeyDown: i.useCallback(
                    (e) => {
                        switch (e.which) {
                            case w.Ks6.ARROW_UP:
                                if (m(-1)) return void e.preventDefault();
                                break;
                            case w.Ks6.ARROW_DOWN:
                                if (m(1)) return void e.preventDefault();
                                break;
                            case w.Ks6.P:
                                if ((0, el.j)(e, { ctrl: !0 }) && m(-1)) return void e.preventDefault();
                                break;
                            case w.Ks6.N:
                                if ((0, el.j)(e, { ctrl: !0 }) && m(1)) return void e.preventDefault();
                                break;
                            case w.Ks6.ESCAPE:
                                h?.();
                                break;
                            case w.Ks6.TAB:
                                if ((0, el.j)(e, {}) && a?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                if (null != p.A.getActiveCommand(n.id)) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? W.b.selectPreviousCommandOption(t)
                                            : W.b.selectNextCommandOption(t);
                                    return;
                                }
                                break;
                            case w.Ks6.ENTER:
                                if ((0, el.j)(e, {}) && o?.(e)) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                break;
                            case w.Ks6.SPACE:
                                if ((0, el.j)(e, {}) && u?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        e.key !== k.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (l && !e.ctrlKey) || (0, X.Q9)(t)) && c) ||
                            (e.preventDefault(), e.stopPropagation(), d()),
                            s?.(e);
                    },
                    [c, n.id, l, t, h, m, o, s, u, a, d],
                ),
                handleKeyUp: i.useCallback(
                    (e) => {
                        r?.(e);
                    },
                    [r],
                ),
            };
        })({
            editor: eV,
            channel: f,
            disableEnterToSubmit: eI,
            onKeyDown: M,
            onKeyUp: O,
            onTab: L,
            onEnter: P,
            onSpace: D,
            allowNewLines: ey,
            submit: eH,
            hideAutocomplete: ec,
            moveSelection: ex,
        }),
        { handlePaste: eK, handleGlobalPaste: ez } =
            ((u = i.useCallback(
                (e) => {
                    if (eP) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = T(e);
                    return t && (e.preventDefault(), e.stopPropagation()), t;
                },
                [eP, T],
            )),
            (c = i.useCallback(
                (e) => {
                    let { event: t } = e;
                    u(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eV.insertData(t.clipboardData), K.VW.focus(eV)));
                },
                [eV, u],
            )),
            { handlePaste: u, handleGlobalPaste: c }),
        eZ = i.useCallback(
            (e) => {
                eu?.();
            },
            [eu],
        ),
        eY = i.useCallback(
            (e) => {
                e !== eL.current ? ek.current && _?.(null, (0, B.WO)(e, { mode: "raw" }), e) : ek.current && eu();
            },
            [eu, _],
        );
    i.useLayoutEffect(() => {
        ew.current && ((eL.current = d), eD(eV, "parent", { value: d }));
    }, [eV, d, eD]),
        i.useEffect(() => {
            function e() {
                let e = p.A.getActiveCommand(f.id) ?? null;
                null !== e && null != e.options && eF(e, !0);
            }
            return x.A.addChangeListener(e), () => x.A.removeChangeListener(e);
        }, [f, eV, eF]);
    let eq = i.useCallback(
            (e) => [
                ...(0, Z.A)(eV, e, f.guild_id),
                ...(0, z.A)(eV, e),
                ...(function (e, t) {
                    if (K.VW.areStylesDisabled(e)) return [];
                    let [n, l] = t,
                        i = [];
                    if (!K.l5.isText(n)) return i;
                    let [s] = K.VW.node(e, K.PW.parent(l));
                    return (
                        K.AS.isType(s, "applicationCommand") &&
                            n === s.children[0] &&
                            i.push({
                                anchor: { path: l, offset: 0 },
                                focus: { path: l, offset: 0 + s.command.displayName.length + 1 },
                                commandName: !0,
                            }),
                        i
                    );
                })(eV, e),
            ],
            [eV, f],
        ),
        eJ = i.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: i, children: s, element: r } = t;
                    switch (r.type) {
                        case "applicationCommand":
                            let a = p.A.getActiveCommand(n),
                                o = 0,
                                u = 0;
                            if (null != a && a.id === r.command.id) {
                                let t = V.O7(e);
                                for (let e of a.options ?? []) t.includes(e.name) ? u++ : o++;
                            }
                            let c = {};
                            if (o > 0) {
                                let e;
                                (e =
                                    u > 0
                                        ? ed.intl.formatToPlainString(ed.t.BP8N0K, { count: o })
                                        : ed.intl.formatToPlainString(ed.t.lziVC9, { count: o })),
                                    (c["data-trailing-placeholder"] = e);
                            }
                            return (0, l.jsx)("div", { className: eh.uB, ...i, ...c, children: s });
                        case "applicationCommandOption":
                            return (0, l.jsx)(em, { attributes: i, channelId: n, element: r, children: s });
                        default:
                            return null;
                    }
                })(eV, e, f.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "gameMentionInput" === i.type
                                ? (0, l.jsx)(ef, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "timestampMentionInput" === i.type
                                ? (0, l.jsx)(ep, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    t
                );
            },
            [f.id, eV],
        ),
        e$ = i.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: i, text: s } = e;
                    if (i.commandName) {
                        let e = r()(eh.p6, { [eh.BI]: "" === s.text });
                        return (0, l.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(A.EG, { event: w.jej.GLOBAL_CLIPBOARD_PASTE, handler: ez }),
            (0, l.jsx)("div", {
                ref: eO,
                className: r()(g, eg.pC),
                children: (0, l.jsx)(H.A, {
                    id: C,
                    editor: eV,
                    channelId: f.id,
                    guildId: f.guild_id,
                    className: r()(eg.gf, N),
                    placeholder: v,
                    readOnly: eP,
                    spellCheck: eA,
                    autoFocus: !eE,
                    canFocus: !E,
                    onChange: eY,
                    onFocus: b,
                    onBlur: R,
                    onClick: eZ,
                    onPaste: eK,
                    onKeyDown: eB,
                    onKeyUp: eW,
                    decorate: eq,
                    renderExtraElement: eJ,
                    renderExtraLeaf: e$,
                    "aria-owns": ev,
                    "aria-haspopup": eN,
                    "aria-expanded": eS,
                    "aria-activedescendant": e_,
                    "aria-controls": eT,
                    "aria-labelledby": eR,
                    "aria-describedby": eb,
                    "aria-invalid": ej,
                    "aria-autocomplete": eM,
                    "aria-required": S,
                }),
            }),
        ],
    });
});
var eA = n(495088);
new g.A("ChannelEditor.tsx");
let eC = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class eE extends i.Component {
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
            (this._initTimeoutId = setTimeout(() => {
                this._getEditorWindow();
            }, 1e3));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, B.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, y.x7)(e));
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
        return e && !n ? (l ? "" : ed.intl.string(ed.t.IYKTTc)) : t;
    }
    handleEnter = (e) => this.props.onEnter?.(e);
    handleTab = () => this.props.onTab?.();
    handleSpace = () => this.props.onSpace?.();
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
                onSubmit: o,
                onSubmitFailure: c,
                channel: d,
                type: h,
                useSlate: m,
                spellcheckEnabled: f,
                useNewSlashCommands: p,
                canOnlyUseTextCommands: g,
                className: x,
                id: C,
                required: E,
                maxCharacterCount: v,
                allowNewLines: S,
                "aria-describedby": N,
                "aria-labelledby": _,
                accessibilityLabel: T,
                showValueWhenDisabled: j,
            } = this.props,
            { submitting: b, popup: R } = this.state,
            M = {
                channel: d,
                className: r()(x, eA.Tg, { [eA.w5]: m, [eA.Rr]: n || b }),
                id: C,
                placeholder: this.getPlaceholder(),
                required: E,
                accessibilityLabel: T,
                disabled: n || !1,
                submitting: b,
                isEdit: h === I.oU.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                onSpace: this.handleSpace,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: S,
                onChange: i,
                onResize: a,
                onKeyDown: s,
                onSubmit: o,
                textAreaPaddingClassName: r()({
                    [eA.H$]: h === I.oU.CREATE_FORUM_POST,
                    [eA.g_]: h === I.oU.CUSTOM_GIFT,
                    [eA.Yg]: h === I.oU.USER_PROFILE,
                    [eA.$$]: h === I.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: f,
                useNewSlashCommands: p,
                disableAutoFocus: u.Fr || (h.disableAutoFocus ?? !1),
                disableEnterToSubmit: h.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": R.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== R.id || void 0,
                "aria-activedescendant": R.activeDescendant ?? void 0,
                "aria-invalid": e.length > v,
                "aria-describedby": N,
                "aria-labelledby": _,
                "aria-autocomplete": "list",
            },
            O = m
                ? (0, l.jsx)(ex, {
                      ref: this.ref,
                      ...M,
                      type: h,
                      value: n && !j ? (0, y.x7)("") : t,
                      canUseCommands: h.commands?.enabled,
                      canOnlyUseTextCommands: g,
                      onSubmitFailure: c,
                  })
                : (0, l.jsx)(D, { ref: this.ref, ...M, value: n && !j ? "" : e });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(A.EG, { event: w.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, l.jsx)(A.EG, { event: w.jej.CLEAR_TEXT, handler: this.handleClearText }),
                O,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        c.A.saveDraft(e, this.props.textValue, this.props.type.drafts.type);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, y.x7)(""));
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
                promptToUpload: r,
                maxCharacterCount: a,
                type: o,
            } = this.props,
            u =
                null != n
                    ? (function (e) {
                          if (null == e) return null;
                          let t = (0, T.Q2)(e);
                          return null == t ? null : j(t);
                      })(n)
                    : null,
            c = null == (t = _.A.getFocusedWindowId()) ? null : j(t),
            g = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, T.Q2)(e);
                return n === (0, T.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (u ?? c ?? l)
                : l;
        if (null == r || (!g.isPrivate() && !i) || (g.isPrivate() && g.isManaged())) return !1;
        let { files: A, errors: I } = (function (e, t) {
            let n = [],
                l = [],
                i = null,
                s = null,
                r = [];
            for (let t of e.items)
                if ("file" === t.kind) {
                    let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
                    if (null != e && !1 === e.isFile) {
                        r.push({ item: t, error: "is_directory" });
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
            if (n.length > 0) return { files: n, errors: r };
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
                                        null != n && n.length > 0 && (e = (0, E.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(s.type)) ?? t.name;
                    return { files: [(0, C.VE)(t, n, t.type)], errors: r };
                }
                return { files: l, errors: r };
            }
            if (null != i && null != t) {
                let n = e.getData(i.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, C.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: r };
                }
            }
            return { files: [], errors: r };
        })(e.clipboardData, o.uploadLongMessages ? (s ?? a) : null);
        return (eC(
            "onPaste",
            [...e.clipboardData.items].map((e) => {
                if ("file" !== e.kind) return { kind: e.kind, type: e.type };
                {
                    let t = e.getAsFile();
                    return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
                }
            }),
        ),
        0 === A.length)
            ? (null != I &&
                  I.length > 0 &&
                  (0, h.openUploadError)({ title: ed.intl.string(ed.t.azO1Pe), help: ed.intl.string(ed.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              !(function (e) {
                  if (null == r) return;
                  let t = p.A.getActiveCommand(g.id);
                  if (null == t) return r(e, g, o.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = o.drafts.commandType ?? o.drafts.type,
                      l = null,
                      i = p.A.getActiveOption(g.id);
                  null !=
                      (l =
                          i?.type === m.n4.ATTACHMENT
                              ? i
                              : t.options?.find((e) => {
                                    if (e.type === m.n4.ATTACHMENT) return null == x.A.getUpload(g.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: g.id,
                          id: l.name,
                          draftType: n,
                          file: { id: l.name, platform: f.xz.WEB, file: e[0] },
                      });
              })(A),
              this.focus(),
              !0);
    };
}
