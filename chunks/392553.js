n.d(t, { A: () => ey }), n(321073), n(323874), n(14289), n(35956);
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
    g = n(94221),
    x = n(626584),
    A = n(522602),
    E = n(234320),
    C = n(453771),
    I = n(741394),
    y = n(355622),
    S = n(408018),
    N = n(579940),
    v = n(734057),
    _ = n(573163),
    T = n(531685),
    j = n(365971);
function b(e) {
    let t = _.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (v.A.getChannel(t) ?? null);
}
var R = n(826745),
    O = n(442433),
    M = n(721768),
    L = n(555424),
    k = n(723702),
    w = n(677134),
    P = n(652215),
    D = n(650583);
let U = /(\t|\s)/;
class G extends i.PureComponent {
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
        for (; n > 0 && !U.test(t[n - 1]); ) n--;
        let i = e.selectionEnd;
        for (; i < t.length && !U.test(t[i]); ) i++;
        let s = (0, L.h3)(t.slice(n, l), t.slice(n, i));
        return { word: s.word, fullWord: s.fullWord, isAtStart: 0 === n && !s.didTrimPrefix };
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
        s?.(null, i, (0, S.x7)(i));
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
                (0, l.jsx)(E.EG, { event: P.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, l.jsx)(R.y, {
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
            e.key === D.dh.ENTER &&
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
        (e.key === D.dh.TAB && this.props.onTab()) || (e.key === D.dh.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.key === D.dh.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.key === D.dh.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.key) {
            case D.dh.ARROW_RIGHT:
            case D.dh.ARROW_LEFT:
            case D.dh.HOME:
            case D.dh.END:
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
        k.isPlatformEmbedded &&
            (0, O.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(n.bind(n, 216603));
                    return (t) => (0, l.jsx)(e, { ...t, text: (0, w.u)() });
                },
                { align: "bottom", enableSpellCheck: !0 },
            );
    };
    handleOnChange = (e) => {
        let { onChange: t, allowNewLines: n } = this.props,
            l = e.currentTarget.value,
            i = n ? l : l.replace("\n", "");
        t?.(e, i, (0, S.x7)(i));
    };
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText(`:${t.name}:`, void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
}
var V = n(95561),
    F = n(625494),
    H = n(317681),
    B = n(186306),
    W = n(655098),
    K = n(323350),
    z = n(35277),
    Z = n(820066),
    Y = n(702483),
    q = n(490682),
    J = n(683167),
    $ = n(284009),
    X = n.n($),
    Q = n(530795),
    ee = n(407315),
    et = n(2368),
    en = n(551483);
function el(e, t) {
    let n = p.A.getActiveCommand(e.id),
        l = n?.options?.find((e) => e.name === t.optionName);
    return null != l && (l.type !== m.n4.STRING || l?.choices != null || l?.autocomplete);
}
function ei(e, t, n, l) {
    let i = Z.VW.areStylesDisabled(e) || null == n ? t : n;
    B.o.withSingleEntry(e, () => {
        z.b.insertText(e, l ? i + " " : i);
    });
}
var es = n(113001),
    er = n(770178),
    ea = n(38405);
let eo = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function eu(e) {
    try {
        return Z.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), ea.A.captureException(e), null;
    }
}
var ec = n(870748),
    ed = n(17928),
    eh = n(31717),
    em = n(375708),
    ef = n(106972);
let ep = (e) => {
    let t,
        { channelId: n, element: s, attributes: a, children: o } = e,
        u = (0, Q.f7)(),
        c = (0, Q.zL)(),
        d = (0, Q.RV)(),
        { optionType: h, errored: f } = (0, ed.cf)(
            [p.A],
            () => ({
                optionType: p.A.getOption(n, s.optionName)?.type,
                errored: p.A.getOptionState(n, s.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, s.optionName],
        ),
        g = (0, ed.bG)([A.A], () => A.A.getUpload(n, s.optionName, eh.C.SlashCommand), [n, s.optionName]),
        x = s.children[s.children.length - 1],
        E = null != x && Z.l5.isText(x) && x.text.endsWith("\n"),
        C = r()(ef.S0, ef.xP, { [ef.t$]: c && u, [ef.$2]: (!c || !u) && f }),
        I = i.useCallback(() => {
            Z.VW.isVoid(d, s) || z.b.selectCommandOption(d, s.optionName, !0);
        }, [d, s]);
    return (
        (t =
            h === m.n4.ATTACHMENT
                ? g?.filename != null
                    ? (0, l.jsxs)("span", {
                          className: r()(ef._K, ef.dU),
                          contentEditable: !1,
                          children: [g.filename, o],
                      })
                    : (0, l.jsxs)("span", {
                          className: r()(ef._K, ef.ZI),
                          contentEditable: !1,
                          children: [em.intl.string(em.t.GRdFni), o],
                      })
                : (0, l.jsxs)("span", {
                      className: ef._K,
                      children: [o, E ? (0, l.jsx)("span", { className: ef.Nx, contentEditable: !1 }) : null],
                  })),
        (0, l.jsxs)("span", {
            ...a,
            className: C,
            children: [
                (0, l.jsxs)("span", {
                    className: ef.gA,
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
function eg(e) {
    let { element: t, attributes: n, children: i } = e,
        s = (0, Q.f7)(),
        a = (0, Q.zL)(),
        o = r()(ef.S0, ef.xP, ef.Bz, { [ef.t$]: a && s, [ef.$2]: t.error }),
        u = (0, l.jsx)("span", { className: ef._K, children: i });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: ef.gA, contentEditable: !1, children: ["@game", "\u200B"] }),
            u,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
function ex(e) {
    let { element: t, attributes: n, children: i } = e,
        s = (0, Q.f7)(),
        a = (0, Q.zL)(),
        o = r()(ef.S0, ef.xP, ef.Bz, { [ef.t$]: a && s, [ef.$2]: t.error }),
        u = t.children[t.children.length - 1],
        c = null != u && Z.l5.isText(u) && u.text.endsWith("\n"),
        d = (0, l.jsxs)("span", {
            className: ef._K,
            children: [i, c ? (0, l.jsx)("span", { className: ef.Nx, contentEditable: !1 }) : null],
        });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: ef.gA, contentEditable: !1, children: ["@time", "\u200B"] }),
            d,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
var eA = n(183531);
let eE = i.forwardRef(function (e, t) {
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
            id: x,
            disabled: C,
            submitting: I,
            placeholder: S,
            required: N,
            textAreaPaddingClassName: v,
            onChange: _,
            onPaste: T,
            onResize: j,
            onFocus: b,
            onBlur: R,
            onKeyDown: O,
            onKeyUp: M,
            onTab: k,
            onEnter: w,
            onSpace: U,
            onSubmit: G,
            onSubmitFailure: $,
            maybeShowAutocomplete: ea,
            hideAutocomplete: ed,
            moveSelection: eh,
            spellcheckEnabled: eE,
            canUseCommands: eC,
            disableAutoFocus: eI,
            disableEnterToSubmit: ey,
            allowNewLines: eS,
            "aria-owns": eN,
            "aria-expanded": ev,
            "aria-haspopup": e_,
            "aria-activedescendant": eT,
            "aria-controls": ej,
            "aria-invalid": eb,
            "aria-describedby": eR,
            "aria-labelledby": eO,
            "aria-autocomplete": eM,
        } = e,
        eL = i.useRef(null),
        ek = i.useRef(null),
        ew = i.useRef(!0),
        eP = i.useRef(!0),
        eD = C || I,
        eU = i.useCallback(
            (e, t, n) => {
                let { value: l, selection: i } = n,
                    s = Z.VW.richValue(e),
                    r = e.selection,
                    a = !1;
                if (void 0 !== l && l !== s) {
                    if (((e.children = l), "parent" === t && !e.previewMarkdown && e.chatInputType === y.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, et.eF)(e, f.guild_id, f.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, et.eF)(e, f.guild_id, f.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== l && l !== s && B.o.insertEntry(e, "other", !1, s, r), (a = !0);
                }
                if ((null == i || Z.Ot.isValid(e, i) || (i = void 0), (a || !Z.Ot.isValid(e, r)) && void 0 === i)) {
                    let t = Z.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let o = null != i && !Z.Ot.equals(i, r);
                if (null != i && o) {
                    e.selection = i;
                    let t = B.o.currentEntry(e);
                    null != t && (t.selection = i), (a = !0);
                }
                let u = H.n$(e);
                if (
                    (null != u &&
                        u[0].command.id !== p.A.getActiveCommand(f.id)?.id &&
                        B.o.withMergedEntry(e, () => {
                            (0, ec.t)(e, f.id, null, !0);
                        }),
                    a)
                )
                    if ("parent" === t)
                        try {
                            (eP.current = !1), e.onChange();
                        } finally {
                            eP.current = !0;
                        }
                    else e.onChange();
            },
            [f.id, f.guild_id],
        ),
        eG = i.useCallback(() => {
            ew.current = !1;
        }, []),
        eV = i.useCallback(() => {
            ew.current = !0;
        }, []),
        eF = (0, J.A)({ channel: f, chatInputType: h, onChangeStart: eG, onChangeEnd: eV, updateState: eU }),
        eH = i.useCallback(
            (e, t) => {
                let n = H.SQ(eF, e, f.id),
                    l = H.cd(e, f.guild_id, f.id, n, t);
                return { values: n, results: l };
            },
            [f.guild_id, f.id, eF],
        ),
        eB = i.useCallback(() => {
            let e,
                t = Z.VW.getNodesOfType(eF, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                l = eC ? p.A.getActiveCommand(f.id) : null,
                i = !1;
            if (null != l && null != l.options) {
                let t = eH(l, !1);
                e = t.values;
                let n = H.O7(eF)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (l.options ?? []).find((t) => t.name === e));
                for (let e of l.options)
                    !e.required || e.name in t.values || (z.b.insertCommandOption(eF, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    z.b.selectCommandOption(eF, e.name),
                        (i = !0),
                        (0, V.zV)(P.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: l?.applicationId,
                            command_id: l?.rootCommand?.id,
                            argument_type: m.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    z.b.setNodes(eF, { error: !0 }, { at: t }), i || z.b.select(eF, Z.VW.end(eF, t)), (i = !0);
            if (i) {
                F._.dispatch(P.jej.SHAKE_APP, { duration: 200, intensity: 2 }), $?.();
                return;
            }
            G?.((0, K.WO)(Z.VW.richValue(eF), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), l, e);
        }, [f.id, eF, G, $, eH, eC]);
    i.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eF,
            submit(e) {
                e?.preventDefault(), eB();
            },
            focus() {
                Z.VW.focus(eF);
            },
            blur() {
                Q.rL.blur(eF);
            },
            getCurrentWord() {
                let e = eF.selection;
                if (null == e || !Z.Ot.isValid(eF, e) || Z.ZF.isExpanded(e) || (0, ee.Q9)(eF))
                    return { word: null, isAtStart: !1 };
                let [t, n] = Z.VW.node(eF, Z.PW.parent(e.anchor.path)),
                    [l, i] = Z.VW.node(eF, e.anchor.path),
                    s = e.anchor.offset;
                if (!Z.PW.hasPrevious(i) && Z.l5.isText(l)) {
                    let e = l.text.substring(0, s);
                    if (Z.AS.isType(t, "applicationCommand") && s < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let r = "",
                    a = !1;
                for (;;) {
                    if (--s < 0) {
                        if (!Z.PW.hasPrevious(i)) {
                            a = !0;
                            break;
                        }
                        [l, i] = Z.VW.node(eF, Z.PW.previous(i));
                    }
                    if (!Z.l5.isText(l)) break;
                    let e = l.text[s];
                    if (en.ug.test(e)) break;
                    r = e + r;
                }
                let o = r,
                    u = e.anchor.offset,
                    [c] = Z.VW.node(eF, e.anchor.path);
                for (; Z.l5.isText(c) && !(u >= c.text.length); ) {
                    let e = c.text[u];
                    if (en.ug.test(e)) break;
                    (o += e), u++;
                }
                let d = (0, L.h3)(r, o);
                return {
                    word: d.word,
                    fullWord: d.fullWord,
                    isAtStart: !d.didTrimPrefix && a && Z.PW.isFirstEditorBlock(n),
                };
            },
            getFirstText: () => Z.VW.getFirstText(eF)?.text ?? "",
            getCurrentCommandOption() {
                let e = H.M3(eF);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = H.M3(eF);
                if (null == e) return [];
                let t = p.A.getActiveCommand(f.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : H.FV(eF, n, e[0], f.id);
            },
            getCommandOptionValues() {
                let e = p.A.getActiveCommand(f.id);
                return null == e ? {} : H.SQ(eF, e, f.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                B.o.withSingleEntry(eF, () => {
                    let l = H.M3(eF),
                        i = null != l && el(f, l[0]);
                    if (
                        (null != t && i && (z.b.removeInlineChildren(eF, l), (n = !1)), ei(eF, e, t, n), null != t && i)
                    ) {
                        let e = H.n$(eF);
                        if (((l = Z.cv.updateElement(eF, l)), null != e)) {
                            let t = Z.cv.markdown(e[0], f.guild_id);
                            (0, et.lE)(eF, l, f.id, t) && (l = Z.cv.updateElement(eF, l));
                        }
                        H.ke(eF, f.guild_id, f.id, Z.cv.updateElement(eF, l), !1), z.b.selectNextCommandOption(eF);
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: l = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                B.o.withSingleEntry(eF, () => {
                    let i = H.M3(eF),
                        s = null != i && el(f, i[0]);
                    if (s) z.b.removeInlineChildren(eF, i), (n = !1);
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            z.b.delete(eF, { distance: e.length, unit: "character", reverse: !0 }),
                            l &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                z.b.delete(eF, { distance: t.length - e.length, unit: "character" });
                    }
                    ei(eF, e, t, n), s && z.b.selectNextCommandOption(eF);
                });
            },
            insertInlineAutocompleteInput(e) {
                B.o.withSingleEntry(eF, () => {
                    let { word: t } = this.getCurrentWord();
                    null != t && t.length > 0 && z.b.delete(eF, { distance: t.length, unit: "character", reverse: !0 }),
                        z.b.insertNodes(eF, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                B.o.withSingleEntry(eF, () => {
                    var t, l, i;
                    let s = Z.VW.getSelectedParentOfType(eF, [e]);
                    X()(null != s, `Cannot replace inline input of type ${e} when none is selected`),
                        z.b.removeNodes(eF, { at: s[1] }),
                        (t = eF),
                        (l = n),
                        (i = !0),
                        B.o.withSingleEntry(t, () => {
                            z.b.insertText(t, i ? l + " " : l);
                        });
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                B.o.withSingleEntry(eF, () => {
                    let e = t.animated ? "a" : "",
                        l = t.originalName ?? t.name ?? "";
                    ei(eF, `:${t.name}:`, null != t.id ? `<${e}:${l.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eF, f, eB],
    ),
        (n = i.useRef(null)),
        (s = i.useRef(null)),
        (a = i.useRef(null)),
        i.useLayoutEffect(() => {
            (s.current = eu(eF)),
                null == s.current &&
                    null == a.current &&
                    (a.current = setTimeout(() => {
                        s.current = eu(eF);
                    }, 100));
        }, [eF]),
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
            n.current !== t && (null != eL.current && (eL.current.style.height = `${t}px`), (n.current = t), j?.(t));
        }, [eL, j])),
        (0, er.g)(s, o, [o, eF, j], eo),
        i.useLayoutEffect(() => {
            let e = Q.rL.findDocumentOrShadowRoot(eF).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = eu(eF);
            null != t && ((n.current = t.offsetHeight), j?.(n.current));
        }, [eL, eF, j]);
    let { handleKeyDown: eW, handleKeyUp: eK } = (function (e) {
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
                            case P.Ks6.ARROW_UP:
                                if (m(-1)) return void e.preventDefault();
                                break;
                            case P.Ks6.ARROW_DOWN:
                                if (m(1)) return void e.preventDefault();
                                break;
                            case P.Ks6.P:
                                if ((0, es.j)(e, { ctrl: !0 }) && m(-1)) return void e.preventDefault();
                                break;
                            case P.Ks6.N:
                                if ((0, es.j)(e, { ctrl: !0 }) && m(1)) return void e.preventDefault();
                                break;
                            case P.Ks6.ESCAPE:
                                h?.();
                                break;
                            case P.Ks6.TAB:
                                if ((0, es.j)(e, {}) && a?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                if (null != p.A.getActiveCommand(n.id)) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? z.b.selectPreviousCommandOption(t)
                                            : z.b.selectNextCommandOption(t);
                                    return;
                                }
                                break;
                            case P.Ks6.ENTER:
                                if ((0, es.j)(e, {}) && o?.(e)) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                break;
                            case P.Ks6.SPACE:
                                if ((0, es.j)(e, {}) && u?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        e.key !== D.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (l && !e.ctrlKey) || (0, ee.Q9)(t)) && c) ||
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
            editor: eF,
            channel: f,
            disableEnterToSubmit: ey,
            onKeyDown: O,
            onKeyUp: M,
            onTab: k,
            onEnter: w,
            onSpace: U,
            allowNewLines: eS,
            submit: eB,
            hideAutocomplete: ed,
            moveSelection: eh,
        }),
        { handlePaste: ez, handleGlobalPaste: eZ } =
            ((u = i.useCallback(
                (e) => {
                    if (eD) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = T(e);
                    return t && (e.preventDefault(), e.stopPropagation()), t;
                },
                [eD, T],
            )),
            (c = i.useCallback(
                (e) => {
                    let { event: t } = e;
                    u(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eF.insertData(t.clipboardData), Z.VW.focus(eF)));
                },
                [eF, u],
            )),
            { handlePaste: u, handleGlobalPaste: c }),
        eY = i.useCallback(
            (e) => {
                ea?.();
            },
            [ea],
        ),
        eq = i.useCallback(
            (e) => {
                e !== ek.current ? eP.current && _?.(null, (0, K.WO)(e, { mode: "raw" }), e) : eP.current && ea();
            },
            [ea, _],
        );
    i.useLayoutEffect(() => {
        ew.current && ((ek.current = d), eU(eF, "parent", { value: d }));
    }, [eF, d, eU]),
        i.useEffect(() => {
            function e() {
                let e = p.A.getActiveCommand(f.id) ?? null;
                null !== e && null != e.options && eH(e, !0);
            }
            return A.A.addChangeListener(e), () => A.A.removeChangeListener(e);
        }, [f, eF, eH]);
    let eJ = i.useCallback(
            (e) => [
                ...(0, q.A)(eF, e, f.guild_id),
                ...(0, Y.A)(eF, e),
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
                })(eF, e),
            ],
            [eF, f],
        ),
        e$ = i.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: i, children: s, element: r } = t;
                    switch (r.type) {
                        case "applicationCommand":
                            let a = p.A.getActiveCommand(n),
                                o = 0,
                                u = 0;
                            if (null != a && a.id === r.command.id) {
                                let t = H.O7(e);
                                for (let e of a.options ?? []) t.includes(e.name) ? u++ : o++;
                            }
                            let c = {};
                            if (o > 0) {
                                let e;
                                (e =
                                    u > 0
                                        ? em.intl.formatToPlainString(em.t.BP8N0K, { count: o })
                                        : em.intl.formatToPlainString(em.t.lziVC9, { count: o })),
                                    (c["data-trailing-placeholder"] = e);
                            }
                            return (0, l.jsx)("div", { className: ef.uB, ...i, ...c, children: s });
                        case "applicationCommandOption":
                            return (0, l.jsx)(ep, { attributes: i, channelId: n, element: r, children: s });
                        default:
                            return null;
                    }
                })(eF, e, f.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "gameMentionInput" === i.type
                                ? (0, l.jsx)(eg, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "timestampMentionInput" === i.type
                                ? (0, l.jsx)(ex, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    t
                );
            },
            [f.id, eF],
        ),
        eX = i.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: i, text: s } = e;
                    if (i.commandName) {
                        let e = r()(ef.p6, { [ef.BI]: "" === s.text });
                        return (0, l.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.EG, { event: P.jej.GLOBAL_CLIPBOARD_PASTE, handler: eZ }),
            (0, l.jsx)("div", {
                ref: eL,
                className: r()(g, eA.pC),
                children: (0, l.jsx)(W.A, {
                    id: x,
                    editor: eF,
                    channelId: f.id,
                    guildId: f.guild_id,
                    className: r()(eA.gf, v),
                    placeholder: S,
                    readOnly: eD,
                    spellCheck: eE,
                    autoFocus: !eI,
                    canFocus: !C,
                    onChange: eq,
                    onFocus: b,
                    onBlur: R,
                    onClick: eY,
                    onPaste: ez,
                    onKeyDown: eW,
                    onKeyUp: eK,
                    decorate: eJ,
                    renderExtraElement: e$,
                    renderExtraLeaf: eX,
                    "aria-owns": eN,
                    "aria-haspopup": e_,
                    "aria-expanded": ev,
                    "aria-activedescendant": eT,
                    "aria-controls": ej,
                    "aria-labelledby": eO,
                    "aria-describedby": eR,
                    "aria-invalid": eb,
                    "aria-autocomplete": eM,
                    "aria-required": N,
                }),
            }),
        ],
    });
});
var eC = n(495088);
new x.A("ChannelEditor.tsx");
let eI = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class ey extends i.Component {
    ref = i.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    _emptyRichValue = (0, S.x7)("");
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
            (this._initTimeoutId = setTimeout(() => {
                this._getEditorWindow();
            }, 1e3));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            let e;
            (e = this.props.useSlate ? this.props.textValue : (0, K.WO)(this.props.richValue, { mode: "plain" })),
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
        return e && !n ? (l ? "" : em.intl.string(em.t.IYKTTc)) : t;
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
                id: A,
                required: C,
                maxCharacterCount: I,
                allowNewLines: S,
                "aria-describedby": N,
                "aria-labelledby": v,
                accessibilityLabel: _,
                showValueWhenDisabled: T,
            } = this.props,
            { submitting: j, popup: b } = this.state,
            R = {
                channel: d,
                className: r()(x, eC.Tg, { [eC.w5]: m, [eC.Rr]: n || j }),
                id: A,
                placeholder: this.getPlaceholder(),
                required: C,
                accessibilityLabel: _,
                disabled: n || !1,
                submitting: j,
                isEdit: h === y.oU.EDIT,
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
                    [eC.H$]: h === y.oU.CREATE_FORUM_POST,
                    [eC.g_]: h === y.oU.CUSTOM_GIFT,
                    [eC.Yg]: h === y.oU.USER_PROFILE,
                    [eC.$$]: h === y.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: f,
                useNewSlashCommands: p,
                disableAutoFocus: u.Fr || (h.disableAutoFocus ?? !1),
                disableEnterToSubmit: h.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": b.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== b.id || void 0,
                "aria-activedescendant": b.activeDescendant ?? void 0,
                "aria-invalid": e.length > I,
                "aria-describedby": N,
                "aria-labelledby": v,
                "aria-autocomplete": "list",
            },
            O = m
                ? (0, l.jsx)(eE, {
                      ref: this.ref,
                      ...R,
                      type: h,
                      value: n && !T ? this._emptyRichValue : t,
                      canUseCommands: h.commands?.enabled,
                      canOnlyUseTextCommands: g,
                      onSubmitFailure: c,
                  })
                : (0, l.jsx)(G, { ref: this.ref, ...R, value: n && !T ? "" : e });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E.EG, { event: P.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, l.jsx)(E.EG, { event: P.jej.CLEAR_TEXT, handler: this.handleClearText }),
                O,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        let { textValue: t } = this.props,
            n = (0, g.I)(p.A.getActiveCommand(e), t);
        c.A.saveDraft(e, t, this.props.type.drafts.type, n);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, S.x7)(""));
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
                          let t = (0, j.Q2)(e);
                          return null == t ? null : b(t);
                      })(n)
                    : null,
            c = null == (t = T.A.getFocusedWindowId()) ? null : b(t),
            g = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, j.Q2)(e);
                return n === (0, j.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (u ?? c ?? l)
                : l;
        if (null == r || (!g.isPrivate() && !i) || (g.isPrivate() && g.isManaged())) return !1;
        let { files: x, errors: E } = (function (e, t) {
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
                                        null != n && n.length > 0 && (e = (0, I.kh)(n));
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
        return (eI(
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
            ? (null != E &&
                  E.length > 0 &&
                  (0, h.openUploadError)({ title: em.intl.string(em.t.azO1Pe), help: em.intl.string(em.t["Koklr/"]) }),
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
                                    if (e.type === m.n4.ATTACHMENT) return null == A.A.getUpload(g.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: g.id,
                          id: l.name,
                          draftType: n,
                          file: { id: l.name, platform: f.xz.WEB, file: e[0] },
                      });
              })(x),
              this.focus(),
              !0);
    };
}
