"use strict";
n.d(t, { A: () => eI }), n(321073), n(323874), n(14289), n(35956);
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
    j = n(531685),
    T = n(365971);
function b(e) {
    let t = _.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (v.A.getChannel(t) ?? null);
}
var R = n(826745),
    O = n(442433),
    M = n(721768),
    L = n(723702),
    k = n(677134),
    w = n(652215),
    P = n(650583);
let D = /(\t|\s)/;
class U extends i.PureComponent {
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
        for (; n > 0 && !D.test(t[n - 1]); ) n--;
        let i = e.selectionEnd;
        for (; i < t.length && !D.test(t[i]); ) i++;
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
                (0, l.jsx)(E.EG, { event: w.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
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
            e.key === P.dh.ENTER &&
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
        (e.key === P.dh.TAB && this.props.onTab()) || (e.key === P.dh.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.key === P.dh.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.key === P.dh.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.key) {
            case P.dh.ARROW_RIGHT:
            case P.dh.ARROW_LEFT:
            case P.dh.HOME:
            case P.dh.END:
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
            (0, O.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(n.bind(n, 216603));
                    return (t) => (0, l.jsx)(e, { ...t, text: (0, k.u)() });
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
var G = n(95561),
    V = n(625494),
    F = n(317681),
    H = n(186306),
    B = n(655098),
    W = n(323350),
    K = n(35277),
    z = n(820066),
    Z = n(702483),
    Y = n(490682),
    q = n(683167),
    J = n(284009),
    $ = n.n(J),
    X = n(530795),
    Q = n(407315),
    ee = n(2368),
    et = n(551483);
function en(e, t) {
    let n = p.A.getActiveCommand(e.id),
        l = n?.options?.find((e) => e.name === t.optionName);
    return null != l && (l.type !== m.n4.STRING || l?.choices != null || l?.autocomplete);
}
function el(e, t, n, l) {
    let i = z.VW.areStylesDisabled(e) || null == n ? t : n;
    H.o.withSingleEntry(e, () => {
        K.b.insertText(e, l ? i + " " : i);
    });
}
var ei = n(113001),
    es = n(770178),
    er = n(38405);
let ea = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function eo(e) {
    try {
        return z.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), er.A.captureException(e), null;
    }
}
var eu = n(870748),
    ec = n(17928),
    ed = n(31717),
    eh = n(375708),
    em = n(106972);
let ef = (e) => {
    let t,
        { channelId: n, element: s, attributes: a, children: o } = e,
        u = (0, X.f7)(),
        c = (0, X.zL)(),
        d = (0, X.RV)(),
        { optionType: h, errored: f } = (0, ec.cf)(
            [p.A],
            () => ({
                optionType: p.A.getOption(n, s.optionName)?.type,
                errored: p.A.getOptionState(n, s.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, s.optionName],
        ),
        g = (0, ec.bG)([A.A], () => A.A.getUpload(n, s.optionName, ed.C.SlashCommand), [n, s.optionName]),
        x = s.children[s.children.length - 1],
        E = null != x && z.l5.isText(x) && x.text.endsWith("\n"),
        C = r()(em.S0, em.xP, { [em.t$]: c && u, [em.$2]: (!c || !u) && f }),
        I = i.useCallback(() => {
            z.VW.isVoid(d, s) || K.b.selectCommandOption(d, s.optionName, !0);
        }, [d, s]);
    return (
        (t =
            h === m.n4.ATTACHMENT
                ? g?.filename != null
                    ? (0, l.jsxs)("span", {
                          className: r()(em._K, em.dU),
                          contentEditable: !1,
                          children: [g.filename, o],
                      })
                    : (0, l.jsxs)("span", {
                          className: r()(em._K, em.ZI),
                          contentEditable: !1,
                          children: [eh.intl.string(eh.t.GRdFni), o],
                      })
                : (0, l.jsxs)("span", {
                      className: em._K,
                      children: [o, E ? (0, l.jsx)("span", { className: em.Nx, contentEditable: !1 }) : null],
                  })),
        (0, l.jsxs)("span", {
            ...a,
            className: C,
            children: [
                (0, l.jsxs)("span", {
                    className: em.gA,
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
function ep(e) {
    let { element: t, attributes: n, children: i } = e,
        s = (0, X.f7)(),
        a = (0, X.zL)(),
        o = r()(em.S0, em.xP, em.Bz, { [em.t$]: a && s, [em.$2]: t.error }),
        u = (0, l.jsx)("span", { className: em._K, children: i });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: em.gA, contentEditable: !1, children: ["@game", "\u200B"] }),
            u,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
function eg(e) {
    let { element: t, attributes: n, children: i } = e,
        s = (0, X.f7)(),
        a = (0, X.zL)(),
        o = r()(em.S0, em.xP, em.Bz, { [em.t$]: a && s, [em.$2]: t.error }),
        u = t.children[t.children.length - 1],
        c = null != u && z.l5.isText(u) && u.text.endsWith("\n"),
        d = (0, l.jsxs)("span", {
            className: em._K,
            children: [i, c ? (0, l.jsx)("span", { className: em.Nx, contentEditable: !1 }) : null],
        });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: em.gA, contentEditable: !1, children: ["@time", "\u200B"] }),
            d,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
var ex = n(183531);
let eA = i.forwardRef(function (e, t) {
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
            onPaste: j,
            onResize: T,
            onFocus: b,
            onBlur: R,
            onKeyDown: O,
            onKeyUp: M,
            onTab: L,
            onEnter: k,
            onSpace: D,
            onSubmit: U,
            onSubmitFailure: J,
            maybeShowAutocomplete: er,
            hideAutocomplete: ec,
            moveSelection: ed,
            spellcheckEnabled: eA,
            canUseCommands: eE,
            disableAutoFocus: eC,
            disableEnterToSubmit: eI,
            allowNewLines: ey,
            "aria-owns": eS,
            "aria-expanded": eN,
            "aria-haspopup": ev,
            "aria-activedescendant": e_,
            "aria-controls": ej,
            "aria-invalid": eT,
            "aria-describedby": eb,
            "aria-labelledby": eR,
            "aria-autocomplete": eO,
        } = e,
        eM = i.useRef(null),
        eL = i.useRef(null),
        ek = i.useRef(!0),
        ew = i.useRef(!0),
        eP = C || I,
        eD = i.useCallback(
            (e, t, n) => {
                let { value: l, selection: i } = n,
                    s = z.VW.richValue(e),
                    r = e.selection,
                    a = !1;
                if (void 0 !== l && l !== s) {
                    if (((e.children = l), "parent" === t && !e.previewMarkdown && e.chatInputType === y.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, ee.eF)(e, f.guild_id, f.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, ee.eF)(e, f.guild_id, f.id), (i = void 0);
                    }
                    "undo" !== t && void 0 !== l && l !== s && H.o.insertEntry(e, "other", !1, s, r), (a = !0);
                }
                if ((null == i || z.Ot.isValid(e, i) || (i = void 0), (a || !z.Ot.isValid(e, r)) && void 0 === i)) {
                    let t = z.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let o = null != i && !z.Ot.equals(i, r);
                if (null != i && o) {
                    e.selection = i;
                    let t = H.o.currentEntry(e);
                    null != t && (t.selection = i), (a = !0);
                }
                let u = F.n$(e);
                if (
                    (null != u &&
                        u[0].command.id !== p.A.getActiveCommand(f.id)?.id &&
                        H.o.withMergedEntry(e, () => {
                            (0, eu.t)(e, f.id, null, !0);
                        }),
                    a)
                )
                    if ("parent" === t)
                        try {
                            (ew.current = !1), e.onChange();
                        } finally {
                            ew.current = !0;
                        }
                    else e.onChange();
            },
            [f.id, f.guild_id],
        ),
        eU = i.useCallback(() => {
            ek.current = !1;
        }, []),
        eG = i.useCallback(() => {
            ek.current = !0;
        }, []),
        eV = (0, q.A)({ channel: f, chatInputType: h, onChangeStart: eU, onChangeEnd: eG, updateState: eD }),
        eF = i.useCallback(
            (e, t) => {
                let n = F.SQ(eV, e, f.id),
                    l = F.cd(e, f.guild_id, f.id, n, t);
                return { values: n, results: l };
            },
            [f.guild_id, f.id, eV],
        ),
        eH = i.useCallback(() => {
            let e,
                t = z.VW.getNodesOfType(eV, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                l = eE ? p.A.getActiveCommand(f.id) : null,
                i = !1;
            if (null != l && null != l.options) {
                let t = eF(l, !1);
                e = t.values;
                let n = F.O7(eV)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (l.options ?? []).find((t) => t.name === e));
                for (let e of l.options)
                    !e.required || e.name in t.values || (K.b.insertCommandOption(eV, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    K.b.selectCommandOption(eV, e.name),
                        (i = !0),
                        (0, G.zV)(w.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: l?.applicationId,
                            command_id: l?.rootCommand?.id,
                            argument_type: m.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    K.b.setNodes(eV, { error: !0 }, { at: t }), i || K.b.select(eV, z.VW.end(eV, t)), (i = !0);
            if (i) {
                V._.dispatch(w.jej.SHAKE_APP, { duration: 200, intensity: 2 }), J?.();
                return;
            }
            U?.((0, W.WO)(z.VW.richValue(eV), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), l, e);
        }, [f.id, eV, U, J, eF, eE]);
    i.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eV,
            submit(e) {
                e?.preventDefault(), eH();
            },
            focus() {
                z.VW.focus(eV);
            },
            blur() {
                X.rL.blur(eV);
            },
            getCurrentWord() {
                let e = eV.selection;
                if (null == e || !z.Ot.isValid(eV, e) || z.ZF.isExpanded(e) || (0, Q.Q9)(eV))
                    return { word: null, isAtStart: !1 };
                let [t, n] = z.VW.node(eV, z.PW.parent(e.anchor.path)),
                    [l, i] = z.VW.node(eV, e.anchor.path),
                    s = e.anchor.offset;
                if (!z.PW.hasPrevious(i) && z.l5.isText(l)) {
                    let e = l.text.substring(0, s);
                    if (z.AS.isType(t, "applicationCommand") && s < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let r = "",
                    a = !1;
                for (;;) {
                    if (--s < 0) {
                        if (!z.PW.hasPrevious(i)) {
                            a = !0;
                            break;
                        }
                        [l, i] = z.VW.node(eV, z.PW.previous(i));
                    }
                    if (!z.l5.isText(l)) break;
                    let e = l.text[s];
                    if (et.ug.test(e)) break;
                    r = e + r;
                }
                let o = r,
                    u = e.anchor.offset,
                    [c] = z.VW.node(eV, e.anchor.path);
                for (; z.l5.isText(c) && !(u >= c.text.length); ) {
                    let e = c.text[u];
                    if (et.ug.test(e)) break;
                    (o += e), u++;
                }
                return { word: r, fullWord: o, isAtStart: a && z.PW.isFirstEditorBlock(n) };
            },
            getFirstText: () => z.VW.getFirstText(eV)?.text ?? "",
            getCurrentCommandOption() {
                let e = F.M3(eV);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = F.M3(eV);
                if (null == e) return [];
                let t = p.A.getActiveCommand(f.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : F.FV(eV, n, e[0], f.id);
            },
            getCommandOptionValues() {
                let e = p.A.getActiveCommand(f.id);
                return null == e ? {} : F.SQ(eV, e, f.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                H.o.withSingleEntry(eV, () => {
                    let l = F.M3(eV),
                        i = null != l && en(f, l[0]);
                    if (
                        (null != t && i && (K.b.removeInlineChildren(eV, l), (n = !1)), el(eV, e, t, n), null != t && i)
                    ) {
                        let e = F.n$(eV);
                        if (((l = z.cv.updateElement(eV, l)), null != e)) {
                            let t = z.cv.markdown(e[0], f.guild_id);
                            (0, ee.lE)(eV, l, f.id, t) && (l = z.cv.updateElement(eV, l));
                        }
                        F.ke(eV, f.guild_id, f.id, z.cv.updateElement(eV, l), !1), K.b.selectNextCommandOption(eV);
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: l = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                H.o.withSingleEntry(eV, () => {
                    let i = F.M3(eV),
                        s = null != i && en(f, i[0]);
                    if (s) K.b.removeInlineChildren(eV, i), (n = !1);
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            K.b.delete(eV, { distance: e.length, unit: "character", reverse: !0 }),
                            l &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                K.b.delete(eV, { distance: t.length - e.length, unit: "character" });
                    }
                    el(eV, e, t, n), s && K.b.selectNextCommandOption(eV);
                });
            },
            insertInlineAutocompleteInput(e) {
                H.o.withSingleEntry(eV, () => {
                    let { word: t } = this.getCurrentWord();
                    null != t && t.length > 0 && K.b.delete(eV, { distance: t.length, unit: "character", reverse: !0 }),
                        K.b.insertNodes(eV, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                H.o.withSingleEntry(eV, () => {
                    var t, l, i;
                    let s = z.VW.getSelectedParentOfType(eV, [e]);
                    $()(null != s, `Cannot replace inline input of type ${e} when none is selected`),
                        K.b.removeNodes(eV, { at: s[1] }),
                        (t = eV),
                        (l = n),
                        (i = !0),
                        H.o.withSingleEntry(t, () => {
                            K.b.insertText(t, i ? l + " " : l);
                        });
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                H.o.withSingleEntry(eV, () => {
                    let e = t.animated ? "a" : "",
                        l = t.originalName ?? t.name ?? "";
                    el(eV, `:${t.name}:`, null != t.id ? `<${e}:${l.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eV, f, eH],
    ),
        (n = i.useRef(null)),
        (s = i.useRef(null)),
        (a = i.useRef(null)),
        i.useLayoutEffect(() => {
            (s.current = eo(eV)),
                null == s.current &&
                    null == a.current &&
                    (a.current = setTimeout(() => {
                        s.current = eo(eV);
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
            n.current !== t && (null != eM.current && (eM.current.style.height = `${t}px`), (n.current = t), T?.(t));
        }, [eM, T])),
        (0, es.g)(s, o, [o, eV, T], ea),
        i.useLayoutEffect(() => {
            let e = X.rL.findDocumentOrShadowRoot(eV).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = eo(eV);
            null != t && ((n.current = t.offsetHeight), T?.(n.current));
        }, [eM, eV, T]);
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
                                if ((0, ei.j)(e, { ctrl: !0 }) && m(-1)) return void e.preventDefault();
                                break;
                            case w.Ks6.N:
                                if ((0, ei.j)(e, { ctrl: !0 }) && m(1)) return void e.preventDefault();
                                break;
                            case w.Ks6.ESCAPE:
                                h?.();
                                break;
                            case w.Ks6.TAB:
                                if ((0, ei.j)(e, {}) && a?.()) {
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
                            case w.Ks6.ENTER:
                                if ((0, ei.j)(e, {}) && o?.(e)) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                break;
                            case w.Ks6.SPACE:
                                if ((0, ei.j)(e, {}) && u?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        e.key !== P.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (l && !e.ctrlKey) || (0, Q.Q9)(t)) && c) ||
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
            onKeyDown: O,
            onKeyUp: M,
            onTab: L,
            onEnter: k,
            onSpace: D,
            allowNewLines: ey,
            submit: eH,
            hideAutocomplete: ec,
            moveSelection: ed,
        }),
        { handlePaste: eK, handleGlobalPaste: ez } =
            ((u = i.useCallback(
                (e) => {
                    if (eP) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = j(e);
                    return t && (e.preventDefault(), e.stopPropagation()), t;
                },
                [eP, j],
            )),
            (c = i.useCallback(
                (e) => {
                    let { event: t } = e;
                    u(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eV.insertData(t.clipboardData), z.VW.focus(eV)));
                },
                [eV, u],
            )),
            { handlePaste: u, handleGlobalPaste: c }),
        eZ = i.useCallback(
            (e) => {
                er?.();
            },
            [er],
        ),
        eY = i.useCallback(
            (e) => {
                e !== eL.current ? ew.current && _?.(null, (0, W.WO)(e, { mode: "raw" }), e) : ew.current && er();
            },
            [er, _],
        );
    i.useLayoutEffect(() => {
        ek.current && ((eL.current = d), eD(eV, "parent", { value: d }));
    }, [eV, d, eD]),
        i.useEffect(() => {
            function e() {
                let e = p.A.getActiveCommand(f.id) ?? null;
                null !== e && null != e.options && eF(e, !0);
            }
            return A.A.addChangeListener(e), () => A.A.removeChangeListener(e);
        }, [f, eV, eF]);
    let eq = i.useCallback(
            (e) => [
                ...(0, Y.A)(eV, e, f.guild_id),
                ...(0, Z.A)(eV, e),
                ...(function (e, t) {
                    if (z.VW.areStylesDisabled(e)) return [];
                    let [n, l] = t,
                        i = [];
                    if (!z.l5.isText(n)) return i;
                    let [s] = z.VW.node(e, z.PW.parent(l));
                    return (
                        z.AS.isType(s, "applicationCommand") &&
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
                                let t = F.O7(e);
                                for (let e of a.options ?? []) t.includes(e.name) ? u++ : o++;
                            }
                            let c = {};
                            if (o > 0) {
                                let e;
                                (e =
                                    u > 0
                                        ? eh.intl.formatToPlainString(eh.t.BP8N0K, { count: o })
                                        : eh.intl.formatToPlainString(eh.t.lziVC9, { count: o })),
                                    (c["data-trailing-placeholder"] = e);
                            }
                            return (0, l.jsx)("div", { className: em.uB, ...i, ...c, children: s });
                        case "applicationCommandOption":
                            return (0, l.jsx)(ef, { attributes: i, channelId: n, element: r, children: s });
                        default:
                            return null;
                    }
                })(eV, e, f.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "gameMentionInput" === i.type
                                ? (0, l.jsx)(ep, { attributes: t, element: i, children: n })
                                : null;
                        })(e)),
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: i } = e;
                            return "timestampMentionInput" === i.type
                                ? (0, l.jsx)(eg, { attributes: t, element: i, children: n })
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
                        let e = r()(em.p6, { [em.BI]: "" === s.text });
                        return (0, l.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.EG, { event: w.jej.GLOBAL_CLIPBOARD_PASTE, handler: ez }),
            (0, l.jsx)("div", {
                ref: eM,
                className: r()(g, ex.pC),
                children: (0, l.jsx)(B.A, {
                    id: x,
                    editor: eV,
                    channelId: f.id,
                    guildId: f.guild_id,
                    className: r()(ex.gf, v),
                    placeholder: S,
                    readOnly: eP,
                    spellCheck: eA,
                    autoFocus: !eC,
                    canFocus: !C,
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
                    "aria-owns": eS,
                    "aria-haspopup": ev,
                    "aria-expanded": eN,
                    "aria-activedescendant": e_,
                    "aria-controls": ej,
                    "aria-labelledby": eR,
                    "aria-describedby": eb,
                    "aria-invalid": eT,
                    "aria-autocomplete": eO,
                    "aria-required": N,
                }),
            }),
        ],
    });
});
var eE = n(495088);
new x.A("ChannelEditor.tsx");
let eC = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class eI extends i.Component {
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
            (e = this.props.useSlate ? this.props.textValue : (0, W.WO)(this.props.richValue, { mode: "plain" })),
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
        return e && !n ? (l ? "" : eh.intl.string(eh.t.IYKTTc)) : t;
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
                showValueWhenDisabled: j,
            } = this.props,
            { submitting: T, popup: b } = this.state,
            R = {
                channel: d,
                className: r()(x, eE.Tg, { [eE.w5]: m, [eE.Rr]: n || T }),
                id: A,
                placeholder: this.getPlaceholder(),
                required: C,
                accessibilityLabel: _,
                disabled: n || !1,
                submitting: T,
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
                    [eE.H$]: h === y.oU.CREATE_FORUM_POST,
                    [eE.g_]: h === y.oU.CUSTOM_GIFT,
                    [eE.Yg]: h === y.oU.USER_PROFILE,
                    [eE.$$]: h === y.oU.OVERLAY_INLINE_REPLY,
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
                ? (0, l.jsx)(eA, {
                      ref: this.ref,
                      ...R,
                      type: h,
                      value: n && !j ? this._emptyRichValue : t,
                      canUseCommands: h.commands?.enabled,
                      canOnlyUseTextCommands: g,
                      onSubmitFailure: c,
                  })
                : (0, l.jsx)(U, { ref: this.ref, ...R, value: n && !j ? "" : e });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E.EG, { event: w.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, l.jsx)(E.EG, { event: w.jej.CLEAR_TEXT, handler: this.handleClearText }),
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
                          let t = (0, T.Q2)(e);
                          return null == t ? null : b(t);
                      })(n)
                    : null,
            c = null == (t = j.A.getFocusedWindowId()) ? null : b(t),
            g = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, T.Q2)(e);
                return n === (0, T.Q2)(t) && null != n;
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
        0 === x.length)
            ? (null != E &&
                  E.length > 0 &&
                  (0, h.openUploadError)({ title: eh.intl.string(eh.t.azO1Pe), help: eh.intl.string(eh.t["Koklr/"]) }),
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
