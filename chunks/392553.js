(n.d(t, { A: () => eA }), n(321073), n(323874), n(14289), n(35956));
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(435558),
    o = n.n(a),
    u = n(607399),
    c = n(465532),
    d = n(608299),
    h = n(494921),
    m = n(155718),
    p = n(861382),
    f = n(94221),
    g = n(626584),
    x = n(274652),
    S = n(522602),
    E = n(234320),
    y = n(453771),
    C = n(741394),
    A = n(355622),
    b = n(408018),
    I = n(579940),
    v = n(734057),
    N = n(573163),
    T = n(531685),
    j = n(365971);
function k(e) {
    let t = N.Ay.getChannelIdsForWindowId(e)[0];
    return null == t ? null : (v.A.getChannel(t) ?? null);
}
var _ = n(826745),
    R = n(442433),
    w = n(721768),
    O = n(555424),
    L = n(723702),
    P = n(677134),
    M = n(652215),
    D = n(650583);
let V = /(\t|\s)/;
class U extends i.PureComponent {
    _ref;
    state = { nextSelection: -1 };
    componentDidMount() {
        (Promise.resolve().then(() => {
            let { value: e } = this.props;
            this._ref?.setSelection(e.length, e.length);
        }),
            null != p.A.getActiveCommand(this.props.channel.id) &&
                w.Gf({ channelId: this.props.channel.id, command: null, section: null }));
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
        for (; n > 0 && !V.test(t[n - 1]);) n--;
        let i = e.selectionEnd;
        for (; i < t.length && !V.test(t[i]);) i++;
        let r = (0, O.h3)(t.slice(n, l), t.slice(n, i));
        return { word: r.word, fullWord: r.fullWord, isAtStart: 0 === n && !r.didTrimPrefix };
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
        return (e?.preventDefault(), this.props.onSubmit(this.props.value));
    }
    insertAutocomplete(e, t) {
        let { addSpace: n = !0, replaceFullWord: l = !1 } =
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            { word: i, fullWord: r } = this.getCurrentWord();
        if (null == i) this.insertText(e, t, n);
        else {
            let t = this._ref;
            if (null == t) return;
            let s = t.value.slice(0, t.selectionStart - i.length),
                a = l && null != r ? r.length - i.length : 0,
                o = t.value.slice(t.selectionEnd + a);
            this._insertText(e, s, o, n);
        }
    }
    insertInlineAutocompleteInput(e) {}
    replaceInlineAutocompleteInput(e, t, n) {}
    insertText(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = this._ref;
        if (null == l) return;
        let i = l.value.slice(0, l.selectionStart),
            r = l.value.slice(l.selectionEnd);
        this._insertText(e, i, r, n);
    }
    _insertText(e, t, n, l) {
        if (null == this._ref) return;
        l && (e += " ");
        let i = t + e + n,
            { onChange: r } = this.props;
        r?.(null, i, (0, b.x7)(i));
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
            required: i,
            onResize: r,
            className: a,
            id: o,
            submitting: u,
            textAreaPaddingClassName: c,
            spellcheckEnabled: d,
            "aria-controls": h,
            "aria-expanded": m,
            "aria-activedescendant": p,
        } = this.props;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: this.handleGlobalPaste }),
                (0, l.jsx)(_.y, {
                    ref: this.handleSetRef,
                    className: s()(a, c),
                    id: o,
                    rows: 1,
                    fontWidthEstimate: 6,
                    placeholder: n,
                    disabled: t || u,
                    required: i,
                    onChange: this.handleOnChange,
                    onResize: r,
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
            e.key === D.dh.ENTER &&
            !e.shiftKey &&
            !this.hasOpenCodeBlock() &&
            (!this.props.disableEnterToSubmit || e.ctrlKey)
        )
            return (e.preventDefault(), this.props.onSubmit(this.props.value));
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
        return (t && e.preventDefault(), t);
    };
    handleClick = () => {
        this.props.maybeShowAutocomplete();
    };
    handleContextMenu = (e) => {
        L.isPlatformEmbedded &&
            (0, R.L3)(
                e,
                async () => {
                    let { default: e } = await Promise.all([n.e("230803"), n.e("342312")]).then(n.bind(n, 216603));
                    return (t) => (0, l.jsx)(e, { ...t, text: (0, P.u)() });
                },
                { align: "bottom", enableSpellCheck: !0 },
            );
    };
    handleOnChange = (e) => {
        let { onChange: t, allowNewLines: n } = this.props,
            l = e.currentTarget.value,
            i = n ? l : l.replace("\n", "");
        t?.(e, i, (0, b.x7)(i));
    };
    insertEmoji(e) {
        let { emoji: t, addSpace: n = !1 } = e;
        this.insertText(`:${t.name}:`, void 0, n);
    }
    getFirstText() {
        return this.props.value;
    }
}
var W = n(95561),
    F = n(625494),
    B = n(317681),
    K = n(186306),
    G = n(655098),
    H = n(323350),
    z = n(35277),
    q = n(820066),
    $ = n(702483),
    Q = n(490682),
    Z = n(683167),
    X = n(284009),
    J = n.n(X),
    Y = n(235599),
    ee = n(407315),
    et = n(2368),
    en = n(551483);
function el(e, t) {
    let n = p.A.getActiveCommand(e.id),
        l = n?.options?.find((e) => e.name === t.optionName);
    return null != l && (l.type !== m.n4.STRING || l?.choices != null || l?.autocomplete);
}
function ei(e, t, n, l) {
    let i = q.VW.areStylesDisabled(e) || null == n ? t : n;
    K.o.withSingleEntry(e, () => {
        z.b.insertText(e, l ? i + " " : i);
    });
}
var er = n(113001),
    es = n(770178),
    ea = n(38405);
let eo = { enabled: !0, fireOnMount: !0, fireOnDepsChange: !0 };
function eu(e) {
    try {
        return q.VW.toDOMNode(e, e);
    } catch (t) {
        let e = Error(`Unable to find Slate EditorDOMNode: ${t.message}`);
        return ((e.stack = t.stack), ea.A.captureException(e), null);
    }
}
var ec = n(870748),
    ed = n(17928),
    eh = n(31717),
    em = n(375708),
    ep = n(106972);
let ef = (e) => {
    let t,
        { channelId: n, element: r, attributes: a, children: o } = e,
        u = (0, Y.f7)(),
        c = (0, Y.zL)(),
        d = (0, Y.RV)(),
        { optionType: h, errored: f } = (0, ed.cf)(
            [p.A],
            () => ({
                optionType: p.A.getOption(n, r.optionName)?.type,
                errored: p.A.getOptionState(n, r.optionName)?.lastValidationResult?.success !== !0,
            }),
            [n, r.optionName],
        ),
        g = (0, ed.bG)([S.A], () => S.A.getUpload(n, r.optionName, eh.C.SlashCommand), [n, r.optionName]),
        x = s()(ep.S0, ep.xP, { [ep.t$]: c && u, [ep.$2]: (!c || !u) && f }),
        E = i.useCallback(() => {
            q.VW.isVoid(d, r) || z.b.selectCommandOption(d, r.optionName, !0);
        }, [d, r]);
    return (
        (t =
            h === m.n4.ATTACHMENT
                ? g?.filename != null
                    ? (0, l.jsxs)("span", {
                          className: s()(ep._K, ep.dU),
                          contentEditable: !1,
                          children: [g.filename, o],
                      })
                    : (0, l.jsxs)("span", {
                          className: s()(ep._K, ep.ZI),
                          contentEditable: !1,
                          children: [em.intl.string(em.t.GRdFni), o],
                      })
                : (0, l.jsx)("span", { className: ep._K, children: o })),
        (0, l.jsxs)("span", {
            ...a,
            className: x,
            children: [
                (0, l.jsxs)("span", {
                    className: ep.gA,
                    contentEditable: !1,
                    onClick: E,
                    children: [r.optionDisplayName, "\u200B"],
                }),
                t,
                (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
            ],
        })
    );
};
function eg(e) {
    let { element: t, attributes: n, children: i } = e,
        r = (0, Y.f7)(),
        a = (0, Y.zL)(),
        o = s()(ep.S0, ep.xP, ep.Bz, { [ep.t$]: a && r, [ep.$2]: t.error }),
        u = (0, l.jsx)("span", { className: ep._K, children: i });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: ep.gA, contentEditable: !1, children: ["@game", "\u200B"] }),
            u,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
function ex(e) {
    let { element: t, attributes: n, children: i } = e,
        r = (0, Y.f7)(),
        a = (0, Y.zL)(),
        o = s()(ep.S0, ep.xP, ep.Bz, { [ep.t$]: a && r, [ep.$2]: t.error }),
        u = t.children[t.children.length - 1],
        c = null != u && q.l5.isText(u) && u.text.endsWith("\n"),
        d = (0, l.jsxs)("span", {
            className: ep._K,
            children: [i, c ? (0, l.jsx)("span", { className: ep.Nx, contentEditable: !1 }) : null],
        });
    return (0, l.jsxs)("span", {
        ...n,
        className: o,
        children: [
            (0, l.jsxs)("span", { className: ep.gA, contentEditable: !1, children: ["@time", "\u200B"] }),
            d,
            (0, l.jsx)("span", { contentEditable: !1, children: "\u200B" }),
        ],
    });
}
var eS = n(183531);
let eE = i.forwardRef(function (e, t) {
    let n,
        r,
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
            disabled: y,
            submitting: C,
            placeholder: b,
            required: I,
            textAreaPaddingClassName: v,
            onChange: N,
            onPaste: T,
            onResize: j,
            onFocus: k,
            onBlur: _,
            onKeyDown: R,
            onKeyUp: w,
            onTab: L,
            onEnter: P,
            onSpace: V,
            onSubmit: U,
            onSubmitFailure: X,
            maybeShowAutocomplete: ea,
            hideAutocomplete: ed,
            moveSelection: eh,
            spellcheckEnabled: eE,
            canUseCommands: ey,
            disableAutoFocus: eC,
            disableEnterToSubmit: eA,
            allowNewLines: eb,
            "aria-owns": eI,
            "aria-expanded": ev,
            "aria-haspopup": eN,
            "aria-activedescendant": eT,
            "aria-controls": ej,
            "aria-invalid": ek,
            "aria-describedby": e_,
            "aria-labelledby": eR,
            "aria-autocomplete": ew,
        } = e,
        eO = i.useRef(null),
        eL = i.useRef(null),
        eP = i.useRef(!0),
        eM = i.useRef(!0),
        eD = y || C,
        eV = i.useCallback(
            (e, t, n) => {
                let { value: l, selection: i } = n,
                    r = q.VW.richValue(e),
                    s = e.selection,
                    a = !1;
                if (void 0 !== l && l !== r) {
                    if (((e.children = l), "parent" === t && !e.previewMarkdown && e.chatInputType === A.oU.EDIT)) {
                        try {
                            ((e.previewMarkdown = !0), (0, et.eF)(e, f.guild_id, f.id));
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        ((0, et.eF)(e, f.guild_id, f.id), (i = void 0));
                    }
                    ("undo" !== t && void 0 !== l && l !== r && K.o.insertEntry(e, "other", !1, r, s), (a = !0));
                }
                if ((null == i || q.Ot.isValid(e, i) || (i = void 0), (a || !q.Ot.isValid(e, s)) && void 0 === i)) {
                    let t = q.VW.end(e, []);
                    i = { anchor: t, focus: t };
                }
                let o = null != i && !q.Ot.equals(i, s);
                if (null != i && o) {
                    e.selection = i;
                    let t = K.o.currentEntry(e);
                    (null != t && (t.selection = i), (a = !0));
                }
                let u = B.n$(e);
                if (
                    (null != u &&
                        u[0].command.id !== p.A.getActiveCommand(f.id)?.id &&
                        K.o.withMergedEntry(e, () => {
                            (0, ec.t)(e, f.id, null, !0);
                        }),
                    a)
                )
                    if ("parent" === t)
                        try {
                            ((eM.current = !1), e.onChange());
                        } finally {
                            eM.current = !0;
                        }
                    else e.onChange();
            },
            [f.id, f.guild_id],
        ),
        eU = i.useCallback(() => {
            eP.current = !1;
        }, []),
        eW = i.useCallback(() => {
            eP.current = !0;
        }, []),
        eF = (0, Z.A)({ channel: f, chatInputType: h, onChangeStart: eU, onChangeEnd: eW, updateState: eV }),
        eB = i.useCallback(
            (e, t) => {
                let n = B.SQ(eF, e, f.id),
                    l = B.cd(e, f.guild_id, f.id, n, t);
                return { values: n, results: l };
            },
            [f.guild_id, f.id, eF],
        ),
        eK = i.useCallback(() => {
            let e,
                t = q.VW.getNodesOfType(eF, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                l = ey ? p.A.getActiveCommand(f.id) : null,
                i = !1;
            if (null != l && null != l.options) {
                let t = eB(l, !1);
                e = t.values;
                let n = B.O7(eF)
                    .filter((e) => !t.results[e].success)
                    .map((e) => (l.options ?? []).find((t) => t.name === e));
                for (let e of l.options)
                    !e.required || e.name in t.values || (z.b.insertCommandOption(eF, e), n.push(e));
                if (n.length > 0) {
                    let e = n[0];
                    (z.b.selectCommandOption(eF, e.name),
                        (i = !0),
                        (0, W.zV)(M.HAw.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: l?.applicationId,
                            command_id: l?.rootCommand?.id,
                            argument_type: m.n4[e?.type ?? 3],
                            is_required: e?.required,
                        }));
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    (z.b.setNodes(eF, { error: !0 }, { at: t }), i || z.b.select(eF, q.VW.end(eF, t)), (i = !0));
            if (i) {
                (F._.dispatch(M.jej.SHAKE_APP, { duration: 200, intensity: 2 }), X?.());
                return;
            }
            U?.((0, H.WO)(q.VW.richValue(eF), { mode: "raw", ignoreTrailingEmptyNodes: !0 }), l, e);
        }, [f.id, eF, U, X, eB, ey]);
    (i.useImperativeHandle(
        t,
        () => ({
            getSlateEditor: () => eF,
            submit(e) {
                (e?.preventDefault(), eK());
            },
            focus() {
                q.VW.focus(eF);
            },
            blur() {
                Y.rL.blur(eF);
            },
            getCurrentWord() {
                let e = eF.selection;
                if (null == e || !q.Ot.isValid(eF, e) || q.ZF.isExpanded(e) || (0, ee.Q9)(eF))
                    return { word: null, isAtStart: !1 };
                let [t, n] = q.VW.node(eF, q.PW.parent(e.anchor.path)),
                    [l, i] = q.VW.node(eF, e.anchor.path),
                    r = e.anchor.offset;
                if (!q.PW.hasPrevious(i) && q.l5.isText(l)) {
                    let e = l.text.substring(0, r);
                    if (q.AS.isType(t, "applicationCommand") && r < t.command.displayName.length + 2)
                        return { word: e, isAtStart: !0 };
                }
                let s = "",
                    a = !1;
                for (;;) {
                    if (--r < 0) {
                        if (!q.PW.hasPrevious(i)) {
                            a = !0;
                            break;
                        }
                        [l, i] = q.VW.node(eF, q.PW.previous(i));
                    }
                    if (!q.l5.isText(l)) break;
                    let e = l.text[r];
                    if (en.ug.test(e)) break;
                    s = e + s;
                }
                let o = s,
                    u = e.anchor.offset,
                    [c] = q.VW.node(eF, e.anchor.path);
                for (; q.l5.isText(c) && !(u >= c.text.length);) {
                    let e = c.text[u];
                    if (en.ug.test(e)) break;
                    ((o += e), u++);
                }
                let d = (0, O.h3)(s, o);
                return {
                    word: d.word,
                    fullWord: d.fullWord,
                    isAtStart: !d.didTrimPrefix && a && q.PW.isFirstEditorBlock(n),
                };
            },
            getFirstText: () => q.VW.getFirstText(eF)?.text ?? "",
            getCurrentCommandOption() {
                let e = B.M3(eF);
                return null == e ? null : e[0].optionName;
            },
            getCurrentCommandOptionValue() {
                let e = B.M3(eF);
                if (null == e) return [];
                let t = p.A.getActiveCommand(f.id),
                    n = t?.options?.find((t) => t.name === e[0].optionName);
                return null == n ? [] : B.FV(eF, n, e[0], f.id);
            },
            getCommandOptionValues() {
                let e = p.A.getActiveCommand(f.id);
                return null == e ? {} : B.SQ(eF, e, f.id);
            },
            insertText(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                K.o.withSingleEntry(eF, () => {
                    let l = B.M3(eF),
                        i = null != l && el(f, l[0]);
                    if (
                        (null != t && i && (z.b.removeInlineChildren(eF, l), (n = !1)), ei(eF, e, t, n), null != t && i)
                    ) {
                        let e = B.n$(eF);
                        if (((l = q.cv.updateElement(eF, l)), null != e)) {
                            let t = q.cv.markdown(e[0], f.guild_id);
                            (0, et.lE)(eF, l, f.id, t) && (l = q.cv.updateElement(eF, l));
                        }
                        (B.ke(eF, f.guild_id, f.id, q.cv.updateElement(eF, l), !1), z.b.selectNextCommandOption(eF));
                    }
                });
            },
            insertAutocomplete(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    { addSpace: n = !0, replaceFullWord: l = !1 } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                K.o.withSingleEntry(eF, () => {
                    let i = B.M3(eF),
                        r = null != i && el(f, i[0]);
                    if (r) (z.b.removeInlineChildren(eF, i), (n = !1));
                    else {
                        let { word: e, fullWord: t } = this.getCurrentWord();
                        (null != e &&
                            e.length > 0 &&
                            z.b.delete(eF, { distance: e.length, unit: "character", reverse: !0 }),
                            l &&
                                null != e &&
                                null != t &&
                                t.length - e.length > 0 &&
                                z.b.delete(eF, { distance: t.length - e.length, unit: "character" }));
                    }
                    (ei(eF, e, t, n), r && z.b.selectNextCommandOption(eF));
                });
            },
            insertInlineAutocompleteInput(e) {
                K.o.withSingleEntry(eF, () => {
                    let { word: t } = this.getCurrentWord();
                    (null != t &&
                        t.length > 0 &&
                        z.b.delete(eF, { distance: t.length, unit: "character", reverse: !0 }),
                        z.b.insertNodes(eF, [{ type: e, children: [{ text: "" }] }]));
                });
            },
            replaceInlineAutocompleteInput(e, t, n) {
                K.o.withSingleEntry(eF, () => {
                    var t, l, i;
                    let r = q.VW.getSelectedParentOfType(eF, [e]);
                    (J()(null != r, `Cannot replace inline input of type ${e} when none is selected`),
                        z.b.removeNodes(eF, { at: r[1] }),
                        (t = eF),
                        (l = n),
                        (i = !0),
                        K.o.withSingleEntry(t, () => {
                            z.b.insertText(t, i ? l + " " : l);
                        }));
                });
            },
            insertEmoji(e) {
                let { emoji: t, addSpace: n = !1 } = e;
                K.o.withSingleEntry(eF, () => {
                    let e = t.animated ? "a" : "",
                        l = t.originalName ?? t.name ?? "";
                    ei(eF, `:${t.name}:`, null != t.id ? `<${e}:${l.replace(/:/g, "")}:${t.id}>` : null, n);
                });
            },
        }),
        [eF, f, eK],
    ),
        (n = i.useRef(null)),
        (r = i.useRef(null)),
        (a = i.useRef(null)),
        i.useLayoutEffect(() => {
            ((r.current = eu(eF)),
                null == r.current &&
                    null == a.current &&
                    (a.current = setTimeout(() => {
                        r.current = eu(eF);
                    }, 100)));
        }, [eF]),
        i.useEffect(() => {
            let e = a.current;
            return () => {
                null != e && clearTimeout(e);
            };
        }, []),
        (o = i.useCallback(() => {
            let e = r.current;
            if (null == e) return;
            let t = e.offsetHeight;
            n.current !== t && (null != eO.current && (eO.current.style.height = `${t}px`), (n.current = t), j?.(t));
        }, [eO, j])),
        (0, es.g)(r, o, [o, eF, j], eo),
        i.useLayoutEffect(() => {
            let e = Y.rL.findDocumentOrShadowRoot(eF).defaultView;
            if (e?.ResizeObserver == null) return;
            let t = eu(eF);
            null != t && ((n.current = t.offsetHeight), j?.(n.current));
        }, [eO, eF, j]));
    let { handleKeyDown: eG, handleKeyUp: eH } = (function (e) {
            let {
                editor: t,
                channel: n,
                disableEnterToSubmit: l,
                onKeyDown: r,
                onKeyUp: s,
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
                            case M.Ks6.ARROW_UP:
                                if (m(-1)) return void e.preventDefault();
                                break;
                            case M.Ks6.ARROW_DOWN:
                                if (m(1)) return void e.preventDefault();
                                break;
                            case M.Ks6.P:
                                if ((0, er.j)(e, { ctrl: !0 }) && m(-1)) return void e.preventDefault();
                                break;
                            case M.Ks6.N:
                                if ((0, er.j)(e, { ctrl: !0 }) && m(1)) return void e.preventDefault();
                                break;
                            case M.Ks6.ESCAPE:
                                h?.();
                                break;
                            case M.Ks6.TAB:
                                if ((0, er.j)(e, {}) && a?.()) {
                                    (e.preventDefault(), e.stopPropagation());
                                    return;
                                }
                                if (null != p.A.getActiveCommand(n.id)) {
                                    (e.preventDefault(),
                                        e.stopPropagation(),
                                        e.shiftKey
                                            ? z.b.selectPreviousCommandOption(t)
                                            : z.b.selectNextCommandOption(t));
                                    return;
                                }
                                break;
                            case M.Ks6.ENTER:
                                if ((0, er.j)(e, {}) && o?.(e)) {
                                    (e.preventDefault(), e.stopPropagation());
                                    return;
                                }
                                break;
                            case M.Ks6.SPACE:
                                if ((0, er.j)(e, {}) && u?.()) {
                                    (e.preventDefault(), e.stopPropagation());
                                    return;
                                }
                        }
                        if (t.onKeyDown?.(e) === !0) {
                            (e.preventDefault(), e.stopPropagation());
                            return;
                        }
                        (e.key !== D.dh.ENTER ||
                            ((e.altKey || e.shiftKey || (l && !e.ctrlKey) || (0, ee.Q9)(t)) && c) ||
                            (e.preventDefault(), e.stopPropagation(), d()),
                            r?.(e));
                    },
                    [c, n.id, l, t, h, m, o, r, u, a, d],
                ),
                handleKeyUp: i.useCallback(
                    (e) => {
                        s?.(e);
                    },
                    [s],
                ),
            };
        })({
            editor: eF,
            channel: f,
            disableEnterToSubmit: eA,
            onKeyDown: R,
            onKeyUp: w,
            onTab: L,
            onEnter: P,
            onSpace: V,
            allowNewLines: eb,
            submit: eK,
            hideAutocomplete: ed,
            moveSelection: eh,
        }),
        { handlePaste: ez, handleGlobalPaste: eq } =
            ((u = i.useCallback(
                (e) => {
                    if (eD) return !0;
                    if (!0 === e.defaultPrevented) return !1;
                    let t = T(e);
                    return (t && (e.preventDefault(), e.stopPropagation()), t);
                },
                [eD, T],
            )),
            (c = i.useCallback(
                (e) => {
                    let { event: t } = e;
                    u(t) ||
                        (t.preventDefault(),
                        t.stopPropagation(),
                        null != t.clipboardData && (eF.insertData(t.clipboardData), q.VW.focus(eF)));
                },
                [eF, u],
            )),
            { handlePaste: u, handleGlobalPaste: c }),
        e$ = i.useCallback(
            (e) => {
                ea?.();
            },
            [ea],
        ),
        eQ = i.useCallback(
            (e) => {
                e !== eL.current ? eM.current && N?.(null, (0, H.WO)(e, { mode: "raw" }), e) : eM.current && ea();
            },
            [ea, N],
        );
    (i.useLayoutEffect(() => {
        eP.current && ((eL.current = d), eV(eF, "parent", { value: d }));
    }, [eF, d, eV]),
        i.useEffect(() => {
            function e() {
                let e = p.A.getActiveCommand(f.id) ?? null;
                null !== e && null != e.options && eB(e, !0);
            }
            return (S.A.addChangeListener(e), () => S.A.removeChangeListener(e));
        }, [f, eF, eB]));
    let eZ = i.useCallback(
            (e) => [
                ...(0, Q.A)(eF, e, f.guild_id),
                ...(0, $.A)(eF, e),
                ...(function (e, t) {
                    if (q.VW.areStylesDisabled(e)) return [];
                    let [n, l] = t,
                        i = [];
                    if (!q.l5.isText(n)) return i;
                    let [r] = q.VW.node(e, q.PW.parent(l));
                    return (
                        q.AS.isType(r, "applicationCommand") &&
                            n === r.children[0] &&
                            i.push({
                                anchor: { path: l, offset: 0 },
                                focus: { path: l, offset: 0 + r.command.displayName.length + 1 },
                                commandName: !0,
                            }),
                        i
                    );
                })(eF, e),
            ],
            [eF, f],
        ),
        eX = i.useCallback(
            (e) => {
                let t = (function (e, t, n) {
                    let { attributes: i, children: r, element: s } = t;
                    switch (s.type) {
                        case "applicationCommand":
                            let a = p.A.getActiveCommand(n),
                                o = 0,
                                u = 0;
                            if (null != a && a.id === s.command.id) {
                                let t = B.O7(e);
                                for (let e of a.options ?? []) t.includes(e.name) ? u++ : o++;
                            }
                            let c = {};
                            if (o > 0) {
                                let e;
                                ((e =
                                    u > 0
                                        ? em.intl.formatToPlainString(em.t.BP8N0K, { count: o })
                                        : em.intl.formatToPlainString(em.t.lziVC9, { count: o })),
                                    (c["data-trailing-placeholder"] = e));
                            }
                            return (0, l.jsx)("div", { className: ep.uB, ...i, ...c, children: r });
                        case "applicationCommandOption":
                            return (0, l.jsx)(ef, { attributes: i, channelId: n, element: s, children: r });
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
        eJ = i.useCallback(
            (e) =>
                (function (e) {
                    let { attributes: t, children: n, leaf: i, text: r } = e;
                    if (i.commandName) {
                        let e = s()(ep.p6, { [ep.BI]: "" === r.text });
                        return (0, l.jsx)("span", { ...t, className: e, spellCheck: !1, children: n });
                    }
                    return null;
                })(e),
            [],
        );
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(E.EG, { event: M.jej.GLOBAL_CLIPBOARD_PASTE, handler: eq }),
            (0, l.jsx)("div", {
                ref: eO,
                className: s()(g, eS.pC),
                children: (0, l.jsx)(G.A, {
                    id: x,
                    editor: eF,
                    channelId: f.id,
                    guildId: f.guild_id,
                    className: s()(eS.gf, v),
                    placeholder: b,
                    readOnly: eD,
                    spellCheck: eE,
                    autoFocus: !eC,
                    canFocus: !y,
                    onChange: eQ,
                    onFocus: k,
                    onBlur: _,
                    onClick: e$,
                    onPaste: ez,
                    onKeyDown: eG,
                    onKeyUp: eH,
                    decorate: eZ,
                    renderExtraElement: eX,
                    renderExtraLeaf: eJ,
                    "aria-owns": eI,
                    "aria-haspopup": eN,
                    "aria-expanded": ev,
                    "aria-activedescendant": eT,
                    "aria-controls": ej,
                    "aria-labelledby": eR,
                    "aria-describedby": e_,
                    "aria-invalid": ek,
                    "aria-autocomplete": ew,
                    "aria-required": I,
                }),
            }),
        ],
    });
});
var ey = n(495088);
new g.A("ChannelEditor.tsx");
let eC = function () {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
};
class eA extends i.Component {
    ref = i.createRef();
    _focusBlurQueue = Promise.resolve();
    _unsubscribe;
    _initTimeoutId = null;
    _cachedEditorWindow = null;
    _emptyRichValue = (0, b.x7)("");
    constructor(e) {
        (super(e),
            (this._unsubscribe = I.Y0.subscribe((e) => {
                requestAnimationFrame(() => {
                    this.setState({ popup: e });
                });
            })),
            (this.state = { focused: !1, submitting: !1, popup: I.Y0.getState() }));
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
        (this.props.focused && requestAnimationFrame(() => this.focus()),
            document.addEventListener("selectionchange", this.handleSelectionChange),
            window.addEventListener("beforeunload", this.handleBeforeUnload),
            (this._initTimeoutId = setTimeout(() => {
                this._getEditorWindow();
            }, 1e3)));
    }
    componentDidUpdate(e) {
        if ((this.fixFocus(e), this.props.useSlate !== e.useSlate)) {
            let e;
            ((e = this.props.useSlate ? this.props.textValue : (0, H.WO)(this.props.richValue, { mode: "plain" })),
                this.props.onChange?.(null, e, (0, b.x7)(e)));
        } else this.props.textValue !== e.textValue && this.saveCurrentTextThrottled();
    }
    componentWillUnmount() {
        (this.saveCurrentText(),
            this._unsubscribe?.(),
            window.removeEventListener("beforeunload", this.handleBeforeUnload),
            document.removeEventListener("selectionchange", this.handleSelectionChange),
            (this._focusBlurQueue = null),
            (this._unsubscribe = null),
            (this._cachedEditorWindow = null),
            null != this._initTimeoutId && clearTimeout(this._initTimeoutId));
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
        null != e && null != n && ("" === t || t.endsWith(" ") || n.insertText(" ", void 0, !1), n.insertText(e.url));
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
        (this.setState({ focused: !0, submitting: !1 }), c.A.saveDraft(e.id, "", t.drafts.type));
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
                onKeyDown: r,
                onResize: a,
                onSubmit: o,
                onSubmitFailure: c,
                channel: d,
                type: h,
                useSlate: m,
                spellcheckEnabled: p,
                useNewSlashCommands: f,
                canOnlyUseTextCommands: g,
                className: x,
                id: S,
                required: y,
                maxCharacterCount: C,
                allowNewLines: b,
                "aria-describedby": I,
                "aria-labelledby": v,
                accessibilityLabel: N,
                showValueWhenDisabled: T,
            } = this.props,
            { submitting: j, popup: k } = this.state,
            _ = {
                channel: d,
                className: s()(x, ey.Tg, { [ey.w5]: m, [ey.Rr]: n || j }),
                id: S,
                placeholder: this.getPlaceholder(),
                required: y,
                accessibilityLabel: N,
                disabled: n || !1,
                submitting: j,
                isEdit: h === A.oU.EDIT,
                onFocus: this.handleFocus,
                onBlur: this.handleBlur,
                onPaste: this.handlePaste,
                onTab: this.handleTab,
                onEnter: this.handleEnter,
                onSpace: this.handleSpace,
                moveSelection: this.handleMoveSelection,
                maybeShowAutocomplete: this.maybeShowAutocomplete,
                hideAutocomplete: this.hideAutocomplete,
                allowNewLines: b,
                onChange: i,
                onResize: a,
                onKeyDown: r,
                onSubmit: o,
                textAreaPaddingClassName: s()({
                    [ey.H$]: h === A.oU.CREATE_FORUM_POST,
                    [ey.g_]: h === A.oU.CUSTOM_GIFT,
                    [ey.Yg]: h === A.oU.USER_PROFILE,
                    [ey.$$]: h === A.oU.OVERLAY_INLINE_REPLY,
                }),
                spellcheckEnabled: p,
                useNewSlashCommands: f,
                disableAutoFocus: u.Fr || (h.disableAutoFocus ?? !1),
                disableEnterToSubmit: h.submit?.disableEnterToSubmit ?? !1,
                "aria-controls": k.id ?? void 0,
                "aria-haspopup": "listbox",
                "aria-expanded": null !== k.id || void 0,
                "aria-activedescendant": k.activeDescendant ?? void 0,
                "aria-invalid": e.length > C,
                "aria-describedby": I,
                "aria-labelledby": v,
                "aria-autocomplete": "list",
            },
            R = m
                ? (0, l.jsx)(eE, {
                      ref: this.ref,
                      ..._,
                      type: h,
                      value: n && !T ? this._emptyRichValue : t,
                      canUseCommands: h.commands?.enabled,
                      canOnlyUseTextCommands: g,
                      onSubmitFailure: c,
                  })
                : (0, l.jsx)(U, { ref: this.ref, ..._, value: n && !T ? "" : e });
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(E.EG, { event: M.jej.INSERT_TEXT, handler: this.handleInsertText }),
                (0, l.jsx)(E.EG, { event: M.jej.CLEAR_TEXT, handler: this.handleClearText }),
                R,
            ],
        });
    }
    handleSaveCurrentText = (e) => {
        let { textValue: t } = this.props,
            n = (0, f.I)(p.A.getActiveCommand(e), t);
        c.A.saveDraft(e, t, this.props.type.drafts.type, n);
    };
    handleClearText = () => {
        this.props.onChange?.(null, "", (0, b.x7)(""));
    };
    handleInsertText = (e) => {
        let { plainText: t, rawText: n, addSpace: l = !1 } = e;
        this.props.disabled || (this.appendText(t, n, l), this.focus());
    };
    handleFocus = (e) => {
        let { onFocus: t } = this.props,
            { focused: n } = this.state;
        (t?.(e), n || this.setState({ focused: !0 }));
    };
    handleBlur = (e) => {
        let { onBlur: t } = this.props,
            { focused: n } = this.state;
        (t?.(e), n && this.setState({ focused: !1 }));
    };
    handlePaste = (e) => {
        let t,
            n = e.target?.ownerDocument?.defaultView,
            {
                channel: l,
                canPasteFiles: i,
                uploadPromptCharacterCount: r,
                promptToUpload: s,
                maxCharacterCount: a,
                type: o,
            } = this.props,
            u =
                null != n
                    ? (function (e) {
                          if (null == e) return null;
                          let t = (0, j.Q2)(e);
                          return null == t ? null : k(t);
                      })(n)
                    : null,
            c = null == (t = T.A.getFocusedWindowId()) ? null : k(t),
            f = !(function (e, t) {
                if (null == e || null == t) return !1;
                let n = (0, j.Q2)(e);
                return n === (0, j.Q2)(t) && null != n;
            })(n, this._getEditorWindow())
                ? (u ?? c ?? l)
                : l;
        if (null == s || (!f.isPrivate() && !i) || (f.isPrivate() && f.isManaged())) return !1;
        let { files: g, errors: E } = (function (e, t) {
            let n = [],
                l = [],
                i = null,
                r = null,
                s = [];
            for (let t of e.items)
                if ("file" === t.kind) {
                    let e = t.webkitGetAsEntry?.() ?? t.getAsEntry?.() ?? null;
                    if (null != e && !1 === e.isFile) {
                        s.push({ item: t, error: "is_directory" });
                        continue;
                    }
                    let i = t.getAsFile();
                    if (null == i) continue;
                    null != i.path && i.path.length > 0 ? n.push(i) : l.push(i);
                } else
                    "string" === t.kind &&
                        ("text/plain" === t.type && null == i
                            ? (i = t)
                            : "text/html" === t.type && null == r && (r = t));
            if (n.length > 0) return { files: n, errors: s };
            if (l.length > 0) {
                if (1 === l.length && "image/png" === l[0].type && null != r) {
                    let t = l[0],
                        n =
                            (function (e) {
                                let t = new DOMParser().parseFromString(e, "text/html").querySelector("img");
                                if (null != t) {
                                    let e;
                                    try {
                                        let { pathname: n } = new URL(t.src);
                                        null != n && n.length > 0 && (e = (0, C.kh)(n));
                                    } catch {}
                                    if (null != e && e.length > 0) return `${e}.png`;
                                }
                            })(e.getData(r.type)) ?? t.name;
                    return { files: [(0, y.VE)(t, n, t.type)], errors: s };
                }
                return { files: l, errors: s };
            }
            if (null != i && null != t) {
                let n = e.getData(i.type);
                if (n.length > t) {
                    let e = new Blob([n], { type: "text/plain" });
                    return { files: [(0, y.VE)(e, "message.txt", "text/plain")], convertedStringToFile: !0, errors: s };
                }
            }
            return { files: [], errors: s };
        })(e.clipboardData, o.uploadLongMessages ? (r ?? a) : null);
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
        0 === g.length)
            ? (null != E &&
                  E.length > 0 &&
                  (0, h.openUploadError)({ title: em.intl.string(em.t.azO1Pe), help: em.intl.string(em.t["Koklr/"]) }),
              !1)
            : (e.preventDefault(),
              e.stopPropagation(),
              this.saveCurrentText(),
              !(function (e) {
                  if (null == s) return;
                  let t = p.A.getActiveCommand(f.id);
                  if (null == t) return s(e, f, o.drafts.type, { requireConfirm: !0, origin: "clipboard" });
                  let n = o.drafts.commandType ?? o.drafts.type,
                      l = null,
                      i = p.A.getActiveOption(f.id);
                  null !=
                      (l =
                          i?.type === m.n4.ATTACHMENT
                              ? i
                              : t.options?.find((e) => {
                                    if (e.type === m.n4.ATTACHMENT) return null == S.A.getUpload(f.id, e.name, n);
                                })) &&
                      d.A.setFile({
                          channelId: f.id,
                          id: l.name,
                          draftType: n,
                          file: { id: l.name, platform: x.x.WEB, file: e[0] },
                      });
              })(g),
              this.focus(),
              !0);
    };
}
