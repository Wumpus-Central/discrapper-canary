"use strict";
n.d(t, { A: () => em }), n(321073), n(323874), n(14289), n(35956);
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(735438),
    o = n.n(l),
    d = n(607399),
    c = n(465532),
    u = n(608299),
    _ = n(494921),
    E = n(155718),
    A = n(565150),
    h = n(861382),
    I = n(626584),
    f = n(522602),
    p = n(234320),
    T = n(453771),
    m = n(741394),
    g = n(355622),
    S = n(408018),
    N = n(579940),
    C = n(734057),
    O = n(568548),
    R = n(531685),
    L = n(365971);
function D(e) {
    let t = O.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (C.A.getChannel(t) ?? null);
}
var y = n(826745),
    v = n(442433),
    b = n(721768),
    M = n(723702),
    P = n(677134),
    U = n(652215),
    w = n(650583);
let G = /(\t|\s)/;
class x extends r.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
        this.props.disableAutoFocus ||
            (Promise.resolve().then(() => {
                let { value: e } = this.props;
                this._ref?.setSelection(e.length, e.length);
            }),
            this.focus()),
            null != h.A.getActiveCommand(this.props.channel.id) &&
                b.Gf({ channelId: this.props.channel.id, command: null, section: null });
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
        for (; n > 0 && !G.test(t[n - 1]); ) n--;
        let r = e.selectionEnd;
        for (; r < t.length && !G.test(t[r]); ) r++;
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
            { word: r, fullWord: a } = this.getCurrentWord();
        if (null == r) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let s = t.value.slice(0, t.selectionStart - r.length),
                l = i && null != a ? a.length - r.length : 0,
                o = t.value.slice(t.selectionEnd + l);
            this._insertText(e, s, o, n);
        }
    }
    insertInlineAutocompleteInput(e) {}
    replaceInlineAutocompleteInput(e, t, n) {}
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = this._ref;
        if (null == i) return;
        let r = i.value.slice(0, i.selectionStart),
            a = i.value.slice(i.selectionEnd);
        this._insertText(e, r, a, n);
    }
    _insertText(e, t, n, i) {
        if (null == this._ref) return;
        i && (e += " ");
        let r = t + e + n,
            { onChange: a } = this.props;
        a?.(null, r, (0, S.x7)(r));
        let s = t.length + e.length;
        this.setState({ nextSelection: s }, () => {
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
            onResize: a,
            className: l,
            id: o,
            submitting: d,
            textAreaPaddingClassName: c,
            spellcheckEnabled: u,
            "aria-controls": _,
            "aria-expanded": E,
            "aria-activedescendant": A,
        } = this.props;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(p.EG, { event: U.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, i.jsx)(y.y, {
                    ref: this.handleSetRef,
                    className: s()(l, c),
                    id: o,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || d,
                    required: r,
                    onChange: this.handleOnChange,
                    onResize: a,
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
                    spellCheck: u,
                    "aria-controls": _,
                    "aria-expanded": E,
                    "aria-activedescendant": A,
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
            e.key === w.dh.ENTER &&
            !e.shiftKey &&
            !this.hasOpenCodeBlock() &&
            (!this.props.disableEnterToSubmit || e.ctrlKey)
        )
            return e.preventDefault(), this.props.onSubmit(this.props.value);
    };
    handleKeyDown = (e) => {
        switch (e.which) {
            case U.Ks6.ARROW_DOWN:
                this.props.moveSelection(1) && e.preventDefault();
                break;
            case U.Ks6.N:
                e.ctrlKey && this.props.moveSelection(1) && e.preventDefault();
                break;
            case U.Ks6.ARROW_UP:
                this.props.moveSelection(-1) && e.preventDefault();
                break;
            case U.Ks6.P:
                e.ctrlKey && this.props.moveSelection(-1) && e.preventDefault();
                break;
            case U.Ks6.TAB:
            case U.Ks6.ENTER:
                this.handleTabOrEnterDown(e);
        }
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
    handleTabOrEnterDown(e) {
        (e.key === w.dh.TAB && this.props.onTab()) || (e.key === w.dh.ENTER && this.props.onEnter(e))
            ? (e.preventDefault(), e.stopPropagation())
            : e.key === w.dh.ESCAPE
              ? (e.preventDefault(), e.stopPropagation(), this.props.hideAutocomplete())
              : e.key === w.dh.TAB &&
                this.hasOpenCodeBlock() &&
                (e.preventDefault(), e.stopPropagation(), this.insertText("	", void 0, !1));
    }
    handleKeyUp = (e) => {
        switch (e.key) {
            case w.dh.ARROW_RIGHT:
            case w.dh.ARROW_LEFT:
            case w.dh.HOME:
            case w.dh.END:
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
            (0, v.L3)(
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
var k = n(95561),
    F = n(625494),
    V = n(317681),
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
    Q = n(407315),
    J = n(2368),
    ee = n(551483);
function et(e, t) {
    let n = h.A.getActiveCommand(e.id),
        i = n?.options?.find((e) => e.name === t.optionName);
    return null != i && (i.type !== E.n4.STRING || i?.choices != null || i?.autocomplete);
}
function en(e, t, n, i) {
    let r = Y.VW.areStylesDisabled(e) || null == n ? t : n;
    B.o.withSingleEntry(e, () => {
        W.b.insertText(e, i ? r + " " : r);
    });
}
var ei = n(113001),
    er = n(770178),
    ea = n(38405);
let es = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function el(e) {
    try {
        return Y.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return (e.stack = t.stack), ea.A.captureException(e), null;
    }
}
var eo = n(870748),
    ed = n(17928),
    ec = n(31717),
    eu = n(375708),
    e_ = n(494715);
let eE = (e) => {
    let t,
        { channelId: n, element: a, attributes: l, children: o } = e,
        d = (0, X.f7)(),
        c = (0, X.zL)(),
        u = (0, X.RV)(),
        { optionType: _, errored: A } = (0, ed.cf)(
            [h.A],
            () => ({
                optionType: h.A.getOption(n, a.optionName)?.type,
                errored: h.A.getOptionState(n, a.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, a.optionName],
        ),
        I = (0, ed.bG)([f.A], () => f.A.getUpload(n, a.optionName, ec.C.SlashCommand), [n, a.optionName]),
        p = a.children[a.children.length - 1],
        T = null != p && Y.l5.isText(p) && p.text.endsWith("\n"),
        m = s()(e_.S0, e_.xP, { [e_.t$]: c && d, [e_.$2]: (!c || !d) && A }),
        g = r.useCallback(() => {
            Y.VW.isVoid(u, a) || W.b.selectCommandOption(u, a.optionName, !0);
        }, [u, a]);
    return (
        (t =
            _ === E.n4.ATTACHMENT
                ? I?.filename != null
                    ? (0, i.jsxs)("span", {
                          className: s()(e_._K, e_.dU),
                          contentEditable: !1,
                          children: [I.filename, o],
                      })
                    : (0, i.jsxs)("span", {
                          className: s()(e_._K, e_.ZI),
                          contentEditable: !1,
                          children: [eu.intl.string(eu.t.GRdFni), o],
                      })
                : (0, i.jsxs)("span", {
                      className: e_._K,
                      children: [o, T ? (0, i.jsx)("span", { className: e_.Nx, contentEditable: !1 }) : null],
                  })),
        (0, i.jsxs)("span", {
            ...l,
            className: m,
            children: [
                (0, i.jsxs)("span", {
                    className: e_.gA,
                    contentEditable: !1,
                    onClick: g,
                    children: [a.optionDisplayName, "\u200B"],
                }),
                t,
                (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
            ],
        })
    );
};
function eA(e) {
    let { element: t, attributes: n, children: r } = e,
        a = (0, X.f7)(),
        l = (0, X.zL)(),
        o = s()(e_.S0, e_.xP, e_.Bz, { [e_.t$]: l && a, [e_.$2]: t.error }),
        d = (0, i.jsx)("span", { className: e_._K, children: r });
    return (0, i.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, i.jsxs)("span", { className: e_.gA, contentEditable: !1, children: ["@game", "\u200B"] }),
            d,
            (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
function eh(e) {
    let { element: t, attributes: n, children: r } = e,
        a = (0, X.f7)(),
        l = (0, X.zL)(),
        o = s()(e_.S0, e_.xP, e_.Bz, { [e_.t$]: l && a, [e_.$2]: t.error }),
        d = t.children[t.children.length - 1],
        c = null != d && Y.l5.isText(d) && d.text.endsWith("\n"),
        u = (0, i.jsxs)("span", {
            className: e_._K,
            children: [r, c ? (0, i.jsx)("span", { className: e_.Nx, contentEditable: !1 }) : null],
        });
    return (0, i.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, i.jsxs)("span", { className: e_.gA, contentEditable: !1, children: ["@time", "\u200B"] }),
            u,
            (0, i.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
var eI = n(471910);
let ef = r.forwardRef(function (e, t) {
    let n,
        a,
        l,
        o,
        d,
        c,
        {
            value: u,
            type: _,
            channel: A,
            className: I,
            id: T,
            disabled: m,
            submitting: S,
            placeholder: N,
            required: C,
            textAreaPaddingClassName: O,
            onChange: R,
            onPaste: L,
            onResize: D,
            onFocus: y,
            onBlur: v,
            onKeyDown: b,
            onKeyUp: M,
            onTab: P,
            onEnter: G,
            onSubmit: x,
            onSubmitFailure: q,
            maybeShowAutocomplete: ea,
            hideAutocomplete: ed,
            moveSelection: ec,
            spellcheckEnabled: ef,
            canUseCommands: ep,
            disableAutoFocus: eT,
            disableEnterToSubmit: em,
            allowNewLines: eg,
            "aria-owns": eS,
            "aria-expanded": eN,
            "aria-haspopup": eC,
            "aria-activedescendant": eO,
            "aria-controls": eR,
            "aria-invalid": eL,
            "aria-describedby": eD,
            "aria-labelledby": ey,
            "aria-autocomplete": ev,
        } = e,
        eb = r.useRef(null),
        eM = r.useRef(null),
        eP = r.useRef(!0),
        eU = r.useRef(!0),
        ew = m || S,
        eG = r.useCallback(
            (e, t, n) => {
                let { value: i, selection: r } = n,
                    a = Y.VW.richValue(e),
                    s = e.selection,
                    l = !1;
                if (void 0 !== i && i !== a) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === g.oU.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, J.eF)(e, A.guild_id, A.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, J.eF)(e, A.guild_id, A.id), (r = void 0);
                    }
                    "undo" !== t && void 0 !== i && i !== a && B.o.insertEntry(e, "other", !1, a, s), (l = !0);
                }
                if ((null == r || Y.Ot.isValid(e, r) || (r = void 0), (l || !Y.Ot.isValid(e, s)) && void 0 === r)) {
                    let t = Y.VW.end(e, []);
                    r = { anchor: t, focus: t };
                }
                let o = null != r && !Y.Ot.equals(r, s);
                if ((l && !eT && Y.VW.focus(e), null != r && o)) {
                    e.selection = r;
                    let t = B.o.currentEntry(e);
                    null != t && (t.selection = r), (l = !0);
                }
                let d = V.n$(e);
                if (
                    (null != d &&
                        d[0].command.id !== h.A.getActiveCommand(A.id)?.id &&
                        B.o.withMergedEntry(e, () => {
                            (0, eo.t)(e, A.id, null, !0);
                        }),
                    l)
                )
                    if ("parent" === t)
                        try {
                            (eU.current = !1), e.onChange();
                        } finally {
                            eU.current = !0;
                        }
                    else e.onChange();
            },
            [A.id, A.guild_id, eT],
        ),
        ex = r.useCallback(() => {
            eP.current = !1;
        }, []),
        ek = r.useCallback(() => {
            eP.current = !0;
        }, []),
        eF = (0, z.A)({ channel: A, chatInputType: _, onChangeStart: ex, onChangeEnd: ek, updateState: eG }),
        eV = r.useCallback(
            (e, t) => {
                let n = V.SQ(eF, e, A.id),
                    i = V.cd(e, A.guild_id, A.id, n, t);
                return { values: n, results: i };
            },
            [A.guild_id, A.id, eF],
        ),
        eB = r.useCallback(() => {
            let e,
                t = Y.VW.getNodesOfType(eF, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                i = ep ? h.A.getActiveCommand(A.id) : null,
                r = !1;
            if (null != i && null != i.options) {
                let t = eV(i, !1);
                e = t.values;
                let n = V.O7(eF)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (i.options ?? []).find((t) => t.name === e));
                for (let e of i.options)
                    !e.required || e.name in t.values || (W.b.insertCommandOption(eF, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    W.b.selectCommandOption(eF, e.name),
                        (r = !0),
                        (0, k.zV)(U.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: i?.applicationId,
                            command_id: i?.rootCommand?.id,
                            argument_type: E.n4[e?.type ?? 3],
                            is_required: e?.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    W.b.setNodes(eF, { error: !0 }, { at: t }), r || W.b.select(eF, Y.VW.end(eF, t)), (r = !0);
            if (r) {
                F._.dispatch(U.jej.SHAKE_APP, { duration: 200, intensity: 2 }), q?.();
                return;
            }
            x?.((0, j.WO)(Y.VW.richValue(eF), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), i, e);
        }, [A.id, eF, x, q, eV, ep]);
    r.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eF,
            submit(e) {
                e?.preventDefault(), eB();
            },
            focus() {
                Y.VW.focus(eF);
            },
            blur() {
                X.rL.blur(eF);
            },
            getCurrentWord() {
                let e = eF.selection;
                if (null == e || !Y.Ot.isValid(eF, e) || Y.ZF.isExpanded(e) || (0, Q.Q9)(eF))
                    return { word: null, isAtStart: !1 };
                let [t, n] = Y.VW.node(eF, Y.PW.parent(e.anchor.path)),
                    [i, r] = Y.VW.node(eF, e.anchor.path),
                    a = e.anchor.offset;
                if (!Y.PW.hasPrevious(r) && Y.l5.isText(i)) {
                    let e = i.text.substring(0, a);
                    if (Y.AS.isType(t, "applicationCommand") && a < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let s = "",
                    l = !1;
                for (;;) {
                    if (--a < 0) {
                        if (!Y.PW.hasPrevious(r)) {
                            l = !0;
                            break;
                        }
                        [i, r] = Y.VW.node(eF, Y.PW.previous(r));
                    }
                    if (!Y.l5.isText(i)) break;
                    let e = i.text[a];
                    if (ee.ug.test(e)) break;
                    s = e + s;
                }
                let o = s,
                    d = e.anchor.offset,
                    [c] = Y.VW.node(eF, e.anchor.path);
                for (; Y.l5.isText(c) && !(d >= c.text.length); ) {
                    let e = c.text[d];
                    if (ee.ug.test(e)) break;
                    (o += e), d++;
                }
                return { word: s, fullWord: o, isAtStart: l && Y.PW.isFirstEditorBlock(n) };
            },
            getFirstText: () => Y.VW.getFirstText(eF)?.text ?? "",
            getCurrentCommandOption() {
                let e = V.M3(eF);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = V.M3(eF);
                if (null == e) return [];
                let t = h.A.getActiveCommand(A.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : V.FV(eF, n, e[0], A.id);
            },
            getCommandOptionValues() {
                let e = h.A.getActiveCommand(A.id);
                return null == e ? {} : V.SQ(eF, e, A.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                B.o.withSingleEntry(eF, () => {
                    let i = V.M3(eF),
                        r = null != i && et(A, i[0]);
                    if (
                        (null != t && r && (W.b.removeInlineChildren(eF, i), (n = !1)), en(eF, e, t, n), null != t && r)
                    ) {
                        let e = V.n$(eF);
                        if (((i = Y.cv.updateElement(eF, i)), null != e)) {
                            let t = Y.cv.markdown(e[0], A.guild_id);
                            (0, J.lE)(eF, i, A.id, t) && (i = Y.cv.updateElement(eF, i));
                        }
                        V.ke(eF, A.guild_id, A.id, Y.cv.updateElement(eF, i), !1), W.b.selectNextCommandOption(eF);
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: i = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                B.o.withSingleEntry(eF, () => {
                    let r = V.M3(eF),
                        a = null != r && et(A, r[0]);
                    if (a) W.b.removeInlineChildren(eF, r), (n = !1);
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        null != e &&
                            e.length > 0 &&
                            W.b.delete(eF, { distance: e.length, unit: "character", reverse: !0 }),
                            i &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                W.b.delete(eF, { distance: t.length - e.length, unit: "character" });
                    }
                    en(eF, e, t, n), a && W.b.selectNextCommandOption(eF);
                });
            },
            insertInlineAutocompleteInput(e) {
                B.o.withSingleEntry(eF, () => {
                    let { word: t } = this.getCurrentWord();
                    null != t && t.length > 0 && W.b.delete(eF, { distance: t.length, unit: "character", reverse: !0 }),
                        W.b.insertNodes(eF, [{ type: e, children: [{ text: "" }] }]);
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                B.o.withSingleEntry(eF, () => {
                    let i = Y.VW.getSelectedParentOfType(eF, [e]);
                    Z()(null != i, `Cannot replace inline input of type ${e} when none is selected`),
                        W.b.removeNodes(eF, { at: i[1] }),
                        en(eF, t, n, !0);
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                B.o.withSingleEntry(eF, () => {
                    let e = t.animated ? "a" : "",
                        i = t.originalName ?? t.name ?? "";
                    en(eF, `:${t.name}:`, null != t.id ? `<${e}:${i.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eF, A, eB],
    ),
        (n = r.useRef(null)),
        (a = r.useRef(null)),
        (l = r.useRef(null)),
        r.useLayoutEffect(() => {
            (a.current = el(eF)),
                null == a.current &&
                    null == l.current &&
                    (l.current = setTimeout(() => {
                        a.current = el(eF);
                    }, 100));
        }, [eF]),
        r.useEffect(() => {
            let e = l.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []),
        (o = r.useCallback(() => {
            let e = a.current;
            if (null == e) return;
            let t = e.offsetHeight;
            n.current !== t && (null != eb.current && (eb.current.style.height = `${t}px`), (n.current = t), D?.(t));
        }, [eb, D])),
        (0, er.g)(a, o, [o, eF, D], es),
        r.useLayoutEffect(() => {
            let e = X.rL.findDocumentOrShadowRoot(eF).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = el(eF);
            null != t && ((n.current = t.offsetHeight), D?.(n.current));
        }, [eb, eF, D]);
    let { handleKeyDown: eH, handleKeyUp: ej } = (function (e) {
            let {
                editor: t,
                channel: n,
                disableEnterToSubmit: i,
                onKeyDown: a,
                onKeyUp: s,
                onTab: l,
                onEnter: o,
                allowNewLines: d,
                submit: c,
                hideAutocomplete: u,
                moveSelection: _,
            } = e;
            return {
                handleKeyDown: r.useCallback(
                    (e) => {
                        switch (e.which) {
                            case U.Ks6.ARROW_UP:
                                if (_(-1)) return void e.preventDefault();
                                break;
                            case U.Ks6.ARROW_DOWN:
                                if (_(1)) return void e.preventDefault();
                                break;
                            case U.Ks6.P:
                                if ((0, ei.j)(e, { ctrl: !0 }) && _(-1)) return void e.preventDefault();
                                break;
                            case U.Ks6.N:
                                if ((0, ei.j)(e, { ctrl: !0 }) && _(1)) return void e.preventDefault();
                                break;
                            case U.Ks6.ESCAPE:
                                u?.();
                                break;
                            case U.Ks6.TAB:
                                if ((0, ei.j)(e, {}) && l?.()) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                                if (null != h.A.getActiveCommand(n.id)) {
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? W.b.selectPreviousCommandOption(t)
                                            : W.b.selectNextCommandOption(t);
                                    return;
                                }
                                break;
                            case U.Ks6.ENTER:
                                if ((0, ei.j)(e, {}) && o?.(e)) {
                                    e.preventDefault(), e.stopPropagation();
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        e.key !== w.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (i && !e.ctrlKey) || (0, Q.Q9)(t)) && d) ||
                            (e.preventDefault(), e.stopPropagation(), c()),
                            a?.(e);
                    },
                    [d, n.id, i, t, u, _, o, a, l, c],
                ),
                handleKeyUp: r.useCallback(
                    (e) => {
                        s?.(e);
                    },
                    [s],
                ),
            };
        })({
            editor: eF,
            channel: A,
            disableEnterToSubmit: em,
            onKeyDown: b,
            onKeyUp: M,
            onTab: P,
            onEnter: G,
            allowNewLines: eg,
            submit: eB,
            hideAutocomplete: ed,
            moveSelection: ec,
        }),
        { handlePaste: eW, handleGlobalPaste: eY } =
            ((d = r.useCallback(
                (e) => {
                    if (ew) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = L(e);
                    return t && (e.preventDefault(), e.stopPropagation()), t;
                },
                [ew, L],
            )),
            (c = r.useCallback(
                (e) => {
                    let { event: t } = e;
                    d(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eF.insertData(t.clipboardData), Y.VW.focus(eF)));
                },
                [eF, d],
            )),
            { handlePaste: d, handleGlobalPaste: c }),
        eK = r.useCallback(
            (e) => {
                ea?.();
            },
            [ea],
        ),
        e$ = r.useCallback(
            (e) => {
                e !== eM.current ? eU.current && R?.(null, (0, j.WO)(e, { mode: "raw" }), e) : eU.current && ea();
            },
            [ea, R],
        );
    r.useLayoutEffect(() => {
        eP.current && ((eM.current = u), eG(eF, "parent", { value: u }));
    }, [eF, u, eG]),
        r.useEffect(() => {
            function e() {
                let e = h.A.getActiveCommand(A.id) ?? null;
                null !== e && null != e.options && eV(e, !0);
            }
            return f.A.addChangeListener(e), () => f.A.removeChangeListener(e);
        }, [A, eF, eV]);
    let ez = r.useCallback(
            (e) => [
                ...(0, $.A)(eF, e, A.guild_id),
                ...(0, K.A)(eF, e),
                ...(function (e, t) {
                    if (Y.VW.areStylesDisabled(e)) return [];
                    let [n, i] = t,
                        r = [];
                    if (!Y.l5.isText(n)) return r;
                    let [a] = Y.VW.node(e, Y.PW.parent(i));
                    return (
                        Y.AS.isType(a, "applicationCommand") &&
                            n === a.children[0] &&
                            r.push({
                                anchor: { path: i, offset: 0 },
                                focus: { path: i, offset: 0 + a.command.displayName.length + 1 },
                                commandName: !0,
                            }),
                        r
                    );
                })(eF, e),
            ],
            [eF, A],
        ),
        eq = r.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: r, children: a, element: s } = t;
                    switch (s.type) {
                        case "applicationCommand":
                            let l = h.A.getActiveCommand(n),
                                o = 0,
                                d = 0;
                            if (null != l && l.id === s.command.id) {
                                let t = V.O7(e);
                                for (let e of l.options ?? []) t.includes(e.name) ? d++ : o++;
                            }
                            let c = {};
                            if (o > 0) {
                                let e;
                                (e =
                                    d > 0
                                        ? eu.intl.formatToPlainString(eu.t.BP8N0K, { count: o })
                                        : eu.intl.formatToPlainString(eu.t.lziVC9, { count: o })),
                                    (c["data-trailing-placeholder"] = e);
                            }
                            return (0, i.jsx)("div", { className: e_.uB, ...r, ...c, children: a });
                        case "applicationCommandOption":
                            return (0, i.jsx)(eE, { attributes: r, channelId: n, element: s, children: a });
                        default:
                            return null;
                    }
                })(eF, e, A.id);
                return (
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: r } = e;
                            return "gameMentionInput" === r.type
                                ? (0, i.jsx)(eA, { attributes: t, element: r, children: n })
                                : null;
                        })(e)),
                    null == t &&
                        (t = (function (e) {
                            let { attributes: t, children: n, element: r } = e;
                            return "timestampMentionInput" === r.type
                                ? (0, i.jsx)(eh, { attributes: t, element: r, children: n })
                                : null;
                        })(e)),
                    t
                );
            },
            [A.id, eF],
        ),
        eZ = r.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: r, text: a } = e;
                    if (r.commandName) {
                        let e = s()(e_.p6, { [e_.BI]: "" === a.text });
                        return (0, i.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.EG, { event: U.jej.GLOBAL_CLIPBOARD_PASTE, handler: eY }),
            (0, i.jsx)("div", {
                ref: eb,
                className: s()(I, eI.pC),
                children: (0, i.jsx)(H.A, {
                    id: T,
                    editor: eF,
                    channelId: A.id,
                    guildId: A.guild_id,
                    className: s()(eI.gf, O),
                    placeholder: N,
                    readOnly: ew,
                    spellCheck: ef,
                    autoFocus: !eT,
                    canFocus: !m,
                    onChange: e$,
                    onFocus: y,
                    onBlur: v,
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
                    "aria-activedescendant": eO,
                    "aria-controls": eR,
                    "aria-labelledby": ey,
                    "aria-describedby": eD,
                    "aria-invalid": eL,
                    "aria-autocomplete": ev,
                    "aria-required": C,
                }),
            }),
        ],
    });
});
var ep = n(266599);
new I.A("ChannelEditor.tsx");
let eT = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class em extends r.Component {
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
    saveCurrentTextThrottled = o().throttle(this.saveCurrentText.bind(this, !1), 500);
    getPlaceholder() {
        let { disabled: e, placeholder: t, isPreviewing: n, showValueWhenDisabled: i } = this.props;
        return e && !n ? (i ? "" : eu.intl.string(eu.t.IYKTTc)) : t;
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
                onKeyDown: a,
                onResize: l,
                onSubmit: o,
                onSubmitFailure: c,
                channel: u,
                type: _,
                useSlate: E,
                spellcheckEnabled: A,
                useNewSlashCommands: h,
                canOnlyUseTextCommands: I,
                className: f,
                id: T,
                required: m,
                maxCharacterCount: N,
                allowNewLines: C,
                "aria-describedby": O,
                "aria-labelledby": R,
                accessibilityLabel: L,
                showValueWhenDisabled: D,
            } = this.props,
            { submitting: y, popup: v } = this.state,
            b = {
                channel: u,
                className: s()(f, ep.Tg, { [ep.w5]: E, [ep.Rr]: n || y }),
                id: T,
                placeholder: this.getPlaceholder(),
                required: m,
                accessibilityLabel: L,
                disabled: n || !1,
                submitting: y,
                isEdit: _ === g.oU.EDIT,
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
                onResize: l,
                onKeyDown: a,
                onSubmit: o,
                textAreaPaddingClassName: s()({
                    [ep.H$]: _ === g.oU.CREATE_FORUM_POST,
                    [ep.g_]: _ === g.oU.CUSTOM_GIFT,
                    [ep.Yg]: _ === g.oU.USER_PROFILE,
                    [ep.$$]: _ === g.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: A,
                useNewSlashCommands: h,
                disableAutoFocus: d.Fr || (_.disableAutoFocus ?? !1),
                disableEnterToSubmit: _.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": v.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== v.id || void 0,
                "aria-activedescendant": v.activeDescendant ?? void 0,
                "aria-invalid": e.length > N,
                "aria-describedby": O,
                "aria-labelledby": R,
                "aria-autocomplete": "list",
            },
            M = E
                ? (0, i.jsx)(ef, {
                      ref: this.ref,
                      ...b,
                      type: _,
                      value: n && !D ? (0, S.x7)("") : t,
                      canUseCommands: _.commands?.enabled,
                      canOnlyUseTextCommands: I,
                      onSubmitFailure: c,
                  })
                : (0, i.jsx)(x, { ref: this.ref, ...b, value: n && !D ? "" : e });
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(p.EG, { event: U.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, i.jsx)(p.EG, { event: U.jej.CLEAR_TEXT, handler: this.handleClearText }),
                M,
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
                uploadPromptCharacterCount: a,
                promptToUpload: s,
                maxCharacterCount: l,
                type: o,
            } = this.props,
            d =
                null != n
                    ? (function (e) {
                          if (null == e) return null;
                          let t = (0, L.Q2)(e);
                          return null == t ? null : D(t);
                      })(n)
                    : null,
            c = null == (t = R.A.getFocusedWindowId()) ? null : D(t),
            I = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, L.Q2)(e);
                return n === (0, L.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (d ?? c ?? i)
                : i;
        if (null == s || (!I.isPrivate() && !r) || (I.isPrivate() && I.isManaged())) return !1;
        let { files: p, errors: g } = (function (e, t) {
            let n = [],
                i = [],
                r = null,
                a = null,
                s = [];
            for (let t of e.items)
                if ("file" === t.kind) {
                    let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
                    if (null != e && !1 === e.isFile) {
                        s.push({ item: t, error: "is_directory" });
                        continue;
                    }
                    let r = t.getAsFile();
                    if (null == r) continue;
                    null != r.path && r.path.length > 0 ? n.push(r) : i.push(r);
                } else
                    "string" === t.kind &&
                        ("text/plain" === t.type && null == r
                            ? (r = t)
                            : "text/html" === t.type && null == a && (a = t));
            if (n.length > 0) return { files: n, errors: s };
            if (i.length > 0) {
                if (1 === i.length && "image/png" === i[0].type && null != a) {
                    let t = i[0],
                        n =
                            (function (e) {
                                let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                                if (null != t) {
                                    let e;
                                    try {
                                        let { pathname: n } = new URL(t.src);
                                        null != n && n.length > 0 && (e = (0, m.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(a.type)) ?? t.name;
                    return { files: [(0, T.VE)(t, n, t.type)], errors: s };
                }
                return { files: i, errors: s };
            }
            if (null != r && null != t) {
                let n = e.getData(r.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, T.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: s };
                }
            }
            return { files: [], errors: s };
        })(e.clipboardData, o.uploadLongMessages ? (a ?? l) : null);
        return (eT(
            "onPaste",
            [...e.clipboardData.items].map((e) => {
                if ("file" !== e.kind) return { kind: e.kind, type: e.type };
                {
                    let t = e.getAsFile();
                    return { kind: e.kind, type: e.type, name: t?.name, path: t?.path };
                }
            }),
        ),
        0 === p.length)
            ? (null != g &&
                  g.length > 0 &&
                  (0, _.openUploadError)({ title: eu.intl.string(eu.t.azO1Pe), help: eu.intl.string(eu.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              ((e) => {
                  let t = h.A.getActiveCommand(I.id);
                  if (null == t) return s(e, I, o.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = o.drafts.commandType ?? o.drafts.type,
                      i = null,
                      r = h.A.getActiveOption(I.id);
                  null !=
                      (i =
                          r?.type === E.n4.ATTACHMENT
                              ? r
                              : t.options?.find((e) => {
                                    if (e.type === E.n4.ATTACHMENT) return null == f.A.getUpload(I.id, e.name, n);
                                })) &&
                      u.A.setFile({
                          channelId: I.id,
                          id: i.name,
                          draftType: n,
                          file: { id: i.name, platform: A.xz.WEB, file: e[0] },
                      });
              })(p),
              this.focus(),
              !0);
    };
}
