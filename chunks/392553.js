"use strict";
n.d(t, { A: () => eI }), n(321073), n(323874), n(14289), n(35956);
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
    h = n(155718),
    f = n(565150),
    E = n(861382),
    p = n(626584),
    m = n(522602),
    g = n(234320),
    A = n(453771),
    I = n(741394),
    T = n(355622),
    S = n(408018),
    N = n(579940),
    C = n(734057),
    y = n(568548),
    O = n(531685),
    R = n(365971);
function v(e) {
    let t = y.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (C.A.getChannel(t) ?? null);
}
var b = n(826745),
    L = n(442433),
    D = n(721768),
    w = n(723702),
    P = n(677134),
    M = n(652215),
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
            null != E.A.getActiveCommand(this.props.channel.id) &&
                D.Gf({ channelId: this.props.channel.id, command: null, section: null });
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
            "aria-expanded": h,
            "aria-activedescendant": f,
        } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
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
                    "aria-expanded": h,
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
            e.key === x.dh.ENTER &&
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
            (0, L.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("30803"), n.e("42312")]).then(n.bind(n, 216603));
                    return (t) => (0, i.jsx)(e, { ...t, text: (0, P.u)() });
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
    V = n(625494),
    F = n(317681),
    B = n(186306),
    H = n(655098),
    j = n(323350),
    W = n(35277),
    Y = n(820066),
    K = n(702483),
    $ = n(490682),
    z = n(739181),
    q = n(284009),
    Z = n.n(q),
    X = n(253018),
    Q = n(347024),
    J = n(2368),
    ee = n(551483);
function et(e, t) {
    let n = E.A.getActiveCommand(e.id),
        i = n?.options?.find((e) => e.name === t.optionName);
    return null != i && (i.type !== h.n4.STRING || i?.choices != null || i?.autocomplete);
}
function en(e, t, n, i) {
    let r = Y.VW.areStylesDisabled(e) || null == n ? t : n;
    B.o.withSingleEntry(e, () => {
        W.b.insertText(e, i ? r + " " : r);
    });
}
var ei = n(113001),
    er = n(770178),
    es = n(38405);
let ea = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function eo(e) {
    try {
        return Y.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), es.A.captureException(e), null;
    }
}
var el = n(870748),
    eu = n(17928),
    ec = n(31717),
    ed = n(375708),
    e_ = n(494715);
let eh = (e) => {
    let t,
        { channelId: n, element: s, attributes: o, children: l } = e,
        u = (0, X.f7)(),
        c = (0, X.zL)(),
        d = (0, X.RV)(),
        { optionType: _, errored: f } = (0, eu.cf)(
            [E.A],
            () => ({
                optionType: E.A.getOption(n, s.optionName)?.type,
                errored: E.A.getOptionState(n, s.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, s.optionName],
        ),
        p = (0, eu.bG)([m.A], () => m.A.getUpload(n, s.optionName, ec.C.SlashCommand), [n, s.optionName]),
        g = s.children[s.children.length - 1],
        A = null != g && Y.l5.isText(g) && g.text.endsWith("\n"),
        I = a()(e_.S0, e_.xP, { [e_.t$]: c && u, [e_.$2]: (!c || !u) && f }),
        T = r.useCallback(() => {
            Y.VW.isVoid(d, s) || W.b.selectCommandOption(d, s.optionName, !0);
        }, [d, s]);
    return (
        (t =
            _ === h.n4.ATTACHMENT
                ? p?.filename != null
                    ? (0, i.jsxs)("span", {
                          className: a()(e_._K, e_.dU),
                          contentEditable: !1,
                          children: [p.filename, l],
                      })
                    : (0, i.jsxs)("span", {
                          className: a()(e_._K, e_.ZI),
                          contentEditable: !1,
                          children: [ed.intl.string(ed.t.GRdFni), l],
                      })
                : (0, i.jsxs)("span", {
                      className: e_._K,
                      children: [l, A ? (0, i.jsx)("span", { className: e_.Nx, contentEditable: !1 }) : null],
                  })),
        (0, i.jsxs)("span", {
            ...o,
            className: I,
            children: [
                (0, i.jsxs)("span", {
                    className: e_.gA,
                    contentEditable: !1,
                    onClick: T,
                    children: [s.optionDisplayName, "\u200B"],
                }),
                t,
                (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
            ],
        })
    );
};
function ef(e) {
    let { element: t, attributes: n, children: r } = e,
        s = (0, X.f7)(),
        o = (0, X.zL)(),
        l = a()(e_.S0, e_.xP, e_.Bz, { [e_.t$]: o && s, [e_.$2]: t.error }),
        u = (0, i.jsx)("span", { className: e_._K, children: r });
    return (0, i.jsxs)("span", {
        ...n,
        className: l,
        children: [
            (0, i.jsxs)("span", { className: e_.gA, contentEditable: !1, children: ["@game", "\u200B"] }),
            u,
            (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
function eE(e) {
    let { element: t, attributes: n, children: r } = e,
        s = (0, X.f7)(),
        o = (0, X.zL)(),
        l = a()(e_.S0, e_.xP, e_.Bz, { [e_.t$]: o && s, [e_.$2]: t.error }),
        u = t.children[t.children.length - 1],
        c = null != u && Y.l5.isText(u) && u.text.endsWith("\n"),
        d = (0, i.jsxs)("span", {
            className: e_._K,
            children: [r, c ? (0, i.jsx)("span", { className: e_.Nx, contentEditable: !1 }) : null],
        });
    return (0, i.jsxs)("span", {
        ...n,
        className: l,
        children: [
            (0, i.jsxs)("span", { className: e_.gA, contentEditable: !1, children: ["@time", "\u200B"] }),
            d,
            (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
var ep = n(471910);
let em = r.forwardRef(function (e, t) {
    let n,
        s,
        o,
        l,
        u,
        c,
        {
            value: d,
            type: _,
            channel: f,
            className: p,
            id: A,
            disabled: I,
            submitting: S,
            placeholder: N,
            required: C,
            textAreaPaddingClassName: y,
            onChange: O,
            onPaste: R,
            onResize: v,
            onFocus: b,
            onBlur: L,
            onKeyDown: D,
            onKeyUp: w,
            onTab: P,
            onEnter: U,
            onSubmit: k,
            onSubmitFailure: q,
            maybeShowAutocomplete: es,
            hideAutocomplete: eu,
            moveSelection: ec,
            spellcheckEnabled: em,
            canUseCommands: eg,
            disableAutoFocus: eA,
            disableEnterToSubmit: eI,
            allowNewLines: eT,
            "aria-owns": eS,
            "aria-expanded": eN,
            "aria-haspopup": eC,
            "aria-activedescendant": ey,
            "aria-controls": eO,
            "aria-invalid": eR,
            "aria-describedby": ev,
            "aria-labelledby": eb,
            "aria-autocomplete": eL,
        } = e,
        eD = r.useRef(null),
        ew = r.useRef(null),
        eP = r.useRef(!0),
        eM = r.useRef(!0),
        ex = I || S,
        eU = r.useCallback(
            (e, t, n) => {
                let { value: i, selection: r } = n,
                    s = Y.VW.richValue(e),
                    a = e.selection,
                    o = !1;
                if (void 0 !== i && i !== s) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === T.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, J.eF)(e, f.guild_id, f.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, J.eF)(e, f.guild_id, f.id), (r = void 0);
                    }
                    "undo" !== t && void 0 !== i && i !== s && B.o.insertEntry(e, "other", !1, s, a), (o = !0);
                }
                if ((null == r || Y.Ot.isValid(e, r) || (r = void 0), (o || !Y.Ot.isValid(e, a)) && void 0 === r)) {
                    let t = Y.VW.end(e, []);
                    r = { anchor: t, focus: t };
                }
                let l = null != r && !Y.Ot.equals(r, a);
                if ((o && !eA && Y.VW.focus(e), null != r && l)) {
                    e.selection = r;
                    let t = B.o.currentEntry(e);
                    null != t && (t.selection = r), (o = !0);
                }
                let u = F.n$(e);
                if (
                    (null != u &&
                        u[0].command.id !== E.A.getActiveCommand(f.id)?.id &&
                        B.o.withMergedEntry(e, () => {
                            (0, el.t)(e, f.id, null, !0);
                        }),
                    o)
                )
                    if ("parent" === t)
                        try {
                            (eM.current = !1), e.onChange();
                        } finally {
                            eM.current = !0;
                        }
                    else e.onChange();
            },
            [f.id, f.guild_id, eA],
        ),
        ek = r.useCallback(() => {
            eP.current = !1;
        }, []),
        eG = r.useCallback(() => {
            eP.current = !0;
        }, []),
        eV = (0, z.A)({ channel: f, chatInputType: _, onChangeStart: ek, onChangeEnd: eG, updateState: eU }),
        eF = r.useCallback(
            (e, t) => {
                let n = F.SQ(eV, e, f.id),
                    i = F.cd(e, f.guild_id, f.id, n, t);
                return { values: n, results: i };
            },
            [f.guild_id, f.id, eV],
        ),
        eB = r.useCallback(() => {
            let e,
                t = Y.VW.getNodesOfType(eV, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                i = eg ? E.A.getActiveCommand(f.id) : null,
                r = !1;
            if (null != i && null != i.options) {
                let t = eF(i, !1);
                e = t.values;
                let n = F.O7(eV)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (i.options ?? []).find((t) => t.name === e));
                for (let e of i.options)
                    !e.required || e.name in t.values || (W.b.insertCommandOption(eV, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    W.b.selectCommandOption(eV, e.name),
                        (r = !0),
                        (0, G.zV)(M.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: i?.applicationId,
                            command_id: i?.rootCommand?.id,
                            argument_type: h.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    W.b.setNodes(eV, { error: !0 }, { at: t }), r || W.b.select(eV, Y.VW.end(eV, t)), (r = !0);
            if (r) {
                V._.dispatch(M.jej.SHAKE_APP, { duration: 200, intensity: 2 }), q?.();
                return;
            }
            k?.((0, j.WO)(Y.VW.richValue(eV), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), i, e);
        }, [f.id, eV, k, q, eF, eg]);
    r.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eV,
            submit(e) {
                e?.preventDefault(), eB();
            },
            focus() {
                Y.VW.focus(eV);
            },
            blur() {
                X.rL.blur(eV);
            },
            getCurrentWord() {
                let e = eV.selection;
                if (null == e || !Y.Ot.isValid(eV, e) || Y.ZF.isExpanded(e) || (0, Q.Q9)(eV))
                    return { word: null, isAtStart: !1 };
                let [t, n] = Y.VW.node(eV, Y.PW.parent(e.anchor.path)),
                    [i, r] = Y.VW.node(eV, e.anchor.path),
                    s = e.anchor.offset;
                if (!Y.PW.hasPrevious(r) && Y.l5.isText(i)) {
                    let e = i.text.substring(0, s);
                    if (Y.AS.isType(t, "applicationCommand") && s < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let a = "",
                    o = !1;
                for (;;) {
                    if (--s < 0) {
                        if (!Y.PW.hasPrevious(r)) {
                            o = !0;
                            break;
                        }
                        [i, r] = Y.VW.node(eV, Y.PW.previous(r));
                    }
                    if (!Y.l5.isText(i)) break;
                    let e = i.text[s];
                    if (ee.ug.test(e)) break;
                    a = e + a;
                }
                let l = a,
                    u = e.anchor.offset,
                    [c] = Y.VW.node(eV, e.anchor.path);
                for (; Y.l5.isText(c) && !(u >= c.text.length); ) {
                    let e = c.text[u];
                    if (ee.ug.test(e)) break;
                    (l += e), u++;
                }
                return { word: a, fullWord: l, isAtStart: o && Y.PW.isFirstEditorBlock(n) };
            },
            getFirstText: () => Y.VW.getFirstText(eV)?.text ?? "",
            getCurrentCommandOption() {
                let e = F.M3(eV);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = F.M3(eV);
                if (null == e) return [];
                let t = E.A.getActiveCommand(f.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : F.FV(eV, n, e[0], f.id);
            },
            getCommandOptionValues() {
                let e = E.A.getActiveCommand(f.id);
                return null == e ? {} : F.SQ(eV, e, f.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                B.o.withSingleEntry(eV, () => {
                    let i = F.M3(eV),
                        r = null != i && et(f, i[0]);
                    if (
                        (null != t && r && (W.b.removeInlineChildren(eV, i), (n = !1)), en(eV, e, t, n), null != t && r)
                    ) {
                        let e = F.n$(eV);
                        if (((i = Y.cv.updateElement(eV, i)), null != e)) {
                            let t = Y.cv.markdown(e[0], f.guild_id);
                            (0, J.lE)(eV, i, f.id, t) && (i = Y.cv.updateElement(eV, i));
                        }
                        F.ke(eV, f.guild_id, f.id, Y.cv.updateElement(eV, i), !1), W.b.selectNextCommandOption(eV);
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: i = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                B.o.withSingleEntry(eV, () => {
                    let r = F.M3(eV),
                        s = null != r && et(f, r[0]);
                    if (s) W.b.removeInlineChildren(eV, r), (n = !1);
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            W.b.delete(eV, { distance: e.length, unit: "character", reverse: !0 }),
                            i &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                W.b.delete(eV, { distance: t.length - e.length, unit: "character" });
                    }
                    en(eV, e, t, n), s && W.b.selectNextCommandOption(eV);
                });
            },
            insertInlineAutocompleteInput(e) {
                B.o.withSingleEntry(eV, () => {
                    let { word: t } = this.getCurrentWord();
                    null != t && t.length > 0 && W.b.delete(eV, { distance: t.length, unit: "character", reverse: !0 }),
                        W.b.insertNodes(eV, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                B.o.withSingleEntry(eV, () => {
                    let i = Y.VW.getSelectedParentOfType(eV, [e]);
                    Z()(null != i, `Cannot replace inline input of type ${e} when none is selected`),
                        W.b.removeNodes(eV, { at: i[1] }),
                        en(eV, t, n, !0);
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                B.o.withSingleEntry(eV, () => {
                    let e = t.animated ? "a" : "",
                        i = t.originalName ?? t.name ?? "";
                    en(eV, `:${t.name}:`, null != t.id ? `<${e}:${i.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eV, f, eB],
    ),
        (n = r.useRef(null)),
        (s = r.useRef(null)),
        (o = r.useRef(null)),
        r.useLayoutEffect(() => {
            (s.current = eo(eV)),
                null == s.current &&
                    null == o.current &&
                    (o.current = setTimeout(() => {
                        s.current = eo(eV);
                    }, 100));
        }, [eV]),
        r.useEffect(() => {
            let e = o.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []),
        (l = r.useCallback(() => {
            let e = s.current;
            if (null == e) return;
            let t = e.offsetHeight;
            n.current !== t && (null != eD.current && (eD.current.style.height = `${t}px`), (n.current = t), v?.(t));
        }, [eD, v])),
        (0, er.g)(s, l, [l, eV, v], ea),
        r.useLayoutEffect(() => {
            let e = X.rL.findDocumentOrShadowRoot(eV).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = eo(eV);
            null != t && ((n.current = t.offsetHeight), v?.(n.current));
        }, [eD, eV, v]);
    let { handleKeyDown: eH, handleKeyUp: ej } = (function (e) {
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
                            case M.Ks6.ARROW_UP:
                                if (_(-1)) return void e.preventDefault();
                                break;
                            case M.Ks6.ARROW_DOWN:
                                if (_(1)) return void e.preventDefault();
                                break;
                            case M.Ks6.P:
                                if ((0, ei.j)(e, { ctrl: !0 }) && _(-1)) return void e.preventDefault();
                                break;
                            case M.Ks6.N:
                                if ((0, ei.j)(e, { ctrl: !0 }) && _(1)) return void e.preventDefault();
                                break;
                            case M.Ks6.ESCAPE:
                                d?.();
                                break;
                            case M.Ks6.TAB:
                                if ((0, ei.j)(e, {}) && o?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                if (null != E.A.getActiveCommand(n.id)) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? W.b.selectPreviousCommandOption(t)
                                            : W.b.selectNextCommandOption(t);
                                    return;
                                }
                                break;
                            case M.Ks6.ENTER:
                                if ((0, ei.j)(e, {}) && l?.(e)) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        e.key !== x.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (i && !e.ctrlKey) || (0, Q.Q9)(t)) && u) ||
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
            editor: eV,
            channel: f,
            disableEnterToSubmit: eI,
            onKeyDown: D,
            onKeyUp: w,
            onTab: P,
            onEnter: U,
            allowNewLines: eT,
            submit: eB,
            hideAutocomplete: eu,
            moveSelection: ec,
        }),
        { handlePaste: eW, handleGlobalPaste: eY } =
            ((u = r.useCallback(
                (e) => {
                    if (ex) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = R(e);
                    return t && (e.preventDefault(), e.stopPropagation()), t;
                },
                [ex, R],
            )),
            (c = r.useCallback(
                (e) => {
                    let { event: t } = e;
                    u(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eV.insertData(t.clipboardData), Y.VW.focus(eV)));
                },
                [eV, u],
            )),
            { handlePaste: u, handleGlobalPaste: c }),
        eK = r.useCallback(
            (e) => {
                es?.();
            },
            [es],
        ),
        e$ = r.useCallback(
            (e) => {
                e !== ew.current ? eM.current && O?.(null, (0, j.WO)(e, { mode: "raw" }), e) : eM.current && es();
            },
            [es, O],
        );
    r.useLayoutEffect(() => {
        eP.current && ((ew.current = d), eU(eV, "parent", { value: d }));
    }, [eV, d, eU]),
        r.useEffect(() => {
            function e() {
                let e = E.A.getActiveCommand(f.id) ?? null;
                null !== e && null != e.options && eF(e, !0);
            }
            return m.A.addChangeListener(e), () => m.A.removeChangeListener(e);
        }, [f, eV, eF]);
    let ez = r.useCallback(
            (e) => [
                ...(0, $.A)(eV, e, f.guild_id),
                ...(0, K.A)(eV, e),
                ...(function (e, t) {
                    if (Y.VW.areStylesDisabled(e)) return [];
                    let [n, i] = t,
                        r = [];
                    if (!Y.l5.isText(n)) return r;
                    let [s] = Y.VW.node(e, Y.PW.parent(i));
                    return (
                        Y.AS.isType(s, "applicationCommand") &&
                            n === s.children[0] &&
                            r.push({
                                anchor: { path: i, offset: 0 },
                                focus: { path: i, offset: 0 + s.command.displayName.length + 1 },
                                commandName: !0,
                            }),
                        r
                    );
                })(eV, e),
            ],
            [eV, f],
        ),
        eq = r.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: r, children: s, element: a } = t;
                    switch (a.type) {
                        case "applicationCommand":
                            let o = E.A.getActiveCommand(n),
                                l = 0,
                                u = 0;
                            if (null != o && o.id === a.command.id) {
                                let t = F.O7(e);
                                for (let e of o.options ?? []) t.includes(e.name) ? u++ : l++;
                            }
                            let c = {};
                            if (l > 0) {
                                let e;
                                (e =
                                    u > 0
                                        ? ed.intl.formatToPlainString(ed.t.BP8N0K, { count: l })
                                        : ed.intl.formatToPlainString(ed.t.lziVC9, { count: l })),
                                    (c["data-trailing-placeholder"] = e);
                            }
                            return (0, i.jsx)("div", { className: e_.uB, ...r, ...c, children: s });
                        case "applicationCommandOption":
                            return (0, i.jsx)(eh, { attributes: r, channelId: n, element: a, children: s });
                        default:
                            return null;
                    }
                })(eV, e, f.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: r } = e;
                            return "gameMentionInput" === r.type
                                ? (0, i.jsx)(ef, { attributes: t, element: r, children: n })
                                : null;
                        })(e)),
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: r } = e;
                            return "timestampMentionInput" === r.type
                                ? (0, i.jsx)(eE, { attributes: t, element: r, children: n })
                                : null;
                        })(e)),
                    t
                );
            },
            [f.id, eV],
        ),
        eZ = r.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: r, text: s } = e;
                    if (r.commandName) {
                        let e = a()(e_.p6, { [e_.BI]: "" === s.text });
                        return (0, i.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: eY }),
            (0, i.jsx)("div", {
                ref: eD,
                className: a()(p, ep.pC),
                children: (0, i.jsx)(H.A, {
                    id: A,
                    editor: eV,
                    channelId: f.id,
                    guildId: f.guild_id,
                    className: a()(ep.gf, y),
                    placeholder: N,
                    readOnly: ex,
                    spellCheck: em,
                    autoFocus: !eA,
                    canFocus: !I,
                    onChange: e$,
                    onFocus: b,
                    onBlur: L,
                    onClick: eK,
                    onPaste: eW,
                    onKeyDown: eH,
                    onKeyUp: ej,
                    decorate: ez,
                    renderExtraElement: eq,
                    renderExtraLeaf: eZ,
                    "aria-owns": eS,
                    "aria-haspopup": eC,
                    "aria-expanded": eN,
                    "aria-activedescendant": ey,
                    "aria-controls": eO,
                    "aria-labelledby": eb,
                    "aria-describedby": ev,
                    "aria-invalid": eR,
                    "aria-autocomplete": eL,
                    "aria-required": C,
                }),
            }),
        ],
    });
});
var eg = n(266599);
new p.A("ChannelEditor.tsx");
let eA = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class eI extends r.Component {
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
            (e = this.props.useSlate ? this.props.textValue : (0, j.WO)(this.props.richValue, { mode: "plain" })),
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
            let i = t.length > 0 ? e.replace(/([_`\xb4*])/g, "\\$1") : e;
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
        return e && !n ? (i ? "" : ed.intl.string(ed.t.IYKTTc)) : t;
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
                useSlate: h,
                spellcheckEnabled: f,
                useNewSlashCommands: E,
                canOnlyUseTextCommands: p,
                className: m,
                id: A,
                required: I,
                maxCharacterCount: N,
                allowNewLines: C,
                "aria-describedby": y,
                "aria-labelledby": O,
                accessibilityLabel: R,
                showValueWhenDisabled: v,
            } = this.props,
            { submitting: b, popup: L } = this.state,
            D = {
                channel: d,
                className: a()(m, eg.Tg, { [eg.w5]: h, [eg.Rr]: n || b }),
                id: A,
                placeholder: this.getPlaceholder(),
                required: I,
                accessibilityLabel: R,
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
                allowNewLines: C,
                onChange: r,
                onResize: o,
                onKeyDown: s,
                onSubmit: l,
                textAreaPaddingClassName: a()({
                    [eg.H$]: _ === T.oU.CREATE_FORUM_POST,
                    [eg.g_]: _ === T.oU.CUSTOM_GIFT,
                    [eg.Yg]: _ === T.oU.USER_PROFILE,
                    [eg.$$]: _ === T.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: f,
                useNewSlashCommands: E,
                disableAutoFocus: u.Fr || (_.disableAutoFocus ?? !1),
                disableEnterToSubmit: _.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": L.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== L.id || void 0,
                "aria-activedescendant": L.activeDescendant ?? void 0,
                "aria-invalid": e.length > N,
                "aria-describedby": y,
                "aria-labelledby": O,
                "aria-autocomplete": "list",
            },
            w = h
                ? (0, i.jsx)(em, {
                      ref: this.ref,
                      ...D,
                      type: _,
                      value: n && !v ? (0, S.x7)("") : t,
                      canUseCommands: _.commands?.enabled,
                      canOnlyUseTextCommands: p,
                      onSubmitFailure: c,
                  })
                : (0, i.jsx)(k, { ref: this.ref, ...D, value: n && !v ? "" : e });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(g.EG, { event: M.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, i.jsx)(g.EG, { event: M.jej.CLEAR_TEXT, handler: this.handleClearText }),
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
                          let t = (0, R.Q2)(e);
                          return null == t ? null : v(t);
                      })(n)
                    : null,
            c = null == (t = O.A.getFocusedWindowId()) ? null : v(t),
            p = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, R.Q2)(e);
                return n === (0, R.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (u ?? c ?? i)
                : i;
        if (null == a || (!p.isPrivate() && !r) || (p.isPrivate() && p.isManaged())) return !1;
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
        return (eA(
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
                  (0, _.openUploadError)({ title: ed.intl.string(ed.t.azO1Pe), help: ed.intl.string(ed.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              ((e) => {
                  let t = E.A.getActiveCommand(p.id);
                  if (null == t) return a(e, p, l.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = l.drafts.commandType ?? l.drafts.type,
                      i = null,
                      r = E.A.getActiveOption(p.id);
                  null !=
                      (i =
                          r?.type === h.n4.ATTACHMENT
                              ? r
                              : t.options?.find((e) => {
                                    if (e.type === h.n4.ATTACHMENT) return null == m.A.getUpload(p.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: p.id,
                          id: i.name,
                          draftType: n,
                          file: { id: i.name, platform: f.xz.WEB, file: e[0] },
                      });
              })(g),
              this.focus(),
              !0);
    };
}
