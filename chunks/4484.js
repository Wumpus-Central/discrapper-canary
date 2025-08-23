n.d(t, { Z: () => x }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(911969),
    l = n(367907),
    c = n(998698),
    u = n(117530),
    d = n(459273),
    f = n(585483),
    _ = n(541716),
    p = n(91313),
    h = n(53529),
    m = n(288897),
    g = n(925994),
    E = n(436660),
    b = n(887490),
    y = n(194625),
    O = n(77188),
    v = n(230554),
    I = n(780748),
    T = n(464581),
    S = n(732659),
    A = n(86724),
    C = n(847302),
    N = n(657198),
    R = n(321127),
    P = n(645174),
    w = n(981631),
    D = n(867641);
let x = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: a,
            channel: x,
            className: L,
            id: j,
            disabled: M,
            submitting: k,
            placeholder: U,
            required: G,
            textAreaPaddingClassName: B,
            onChange: Z,
            onPaste: V,
            onResize: F,
            onFocus: H,
            onBlur: Y,
            onKeyDown: W,
            onKeyUp: K,
            onTab: z,
            onEnter: q,
            onSubmit: X,
            maybeShowAutocomplete: Q,
            hideAutocomplete: J,
            moveSelection: $,
            spellcheckEnabled: ee,
            canUseCommands: et,
            canOnlyUseTextCommands: en,
            disableAutoFocus: er,
            disableEnterToSubmit: ei,
            allowNewLines: ea,
            "aria-owns": eo,
            "aria-expanded": es,
            "aria-haspopup": el,
            "aria-activedescendant": ec,
            "aria-controls": eu,
            "aria-invalid": ed,
            "aria-describedby": ef,
            "aria-labelledby": e_,
            "aria-autocomplete": ep,
        } = e,
        eh = i.useRef(null),
        em = i.useRef(null),
        eg = i.useRef(!0),
        eE = i.useRef(!0),
        eb = M || k,
        ey = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: a } = n,
                    o = b.bN.richValue(e),
                    s = e.selection,
                    l = !1;
                if (void 0 !== i && i !== o) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, C.KH)(e, x.guild_id, x.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, C.KH)(e, x.guild_id, x.id), (a = void 0);
                    }
                    "undo" !== t && void 0 !== i && i !== o && h.T.insertEntry(e, "other", !1, o, s), (l = !0);
                }
                if ((null == a || b.Ew.isValid(e, a) || (a = void 0), (l || !b.Ew.isValid(e, s)) && void 0 === a)) {
                    let t = b.bN.end(e, []);
                    a = {
                        anchor: t,
                        focus: t,
                    };
                }
                let u = null != a && !b.Ew.equals(a, s);
                if ((l && !er && b.bN.focus(e), null != a && u)) {
                    e.selection = a;
                    let t = h.T.currentEntry(e);
                    null != t && (t.selection = a), (l = !0);
                }
                let d = p.cr(e);
                if (
                    (null != d &&
                        d[0].command.id !== (null == (r = c.Z.getActiveCommand(x.id)) ? void 0 : r.id) &&
                        h.T.withMergedEntry(e, () => {
                            (0, A.L)(e, x.id, null, !0);
                        }),
                    l)
                )
                    if ("parent" === t)
                        try {
                            (eE.current = !1), e.onChange();
                        } finally {
                            eE.current = !0;
                        }
                    else e.onChange();
            },
            [x.id, x.guild_id, er],
        ),
        eO = i.useCallback(() => {
            eg.current = !1;
        }, []),
        ev = i.useCallback(() => {
            eg.current = !0;
        }, []),
        eI = (0, O.Z)({
            channel: x,
            chatInputType: a,
            canUseCommands: et,
            canOnlyUseTextCommands: en,
            onChangeStart: eO,
            onChangeEnd: ev,
            updateState: ey,
        }),
        eT = i.useCallback(
            (e, t) => {
                let n = p.tM(eI, e, x.id),
                    r = p.lk(e, x.guild_id, x.id, n, t);
                return {
                    values: n,
                    results: r,
                };
            },
            [x.guild_id, x.id, eI],
        ),
        eS = i.useCallback(() => {
            let e,
                t = b.bN.getNodesOfType(eI, ["gameMentionInput"]),
                n = null != t ? [...t] : null,
                r = et ? c.Z.getActiveCommand(x.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eT(r, !1);
                e = t.values;
                let n = p
                    .cu(eI)
                    .filter((e) => !t.results[e].success)
                    .map((e) => {
                        var t;
                        return (null != (t = r.options) ? t : []).find((t) => t.name === e);
                    });
                for (let e of r.options)
                    !e.required || e.name in t.values || (E.Q.insertCommandOption(eI, e), n.push(e));
                if (n.length > 0) {
                    var a, o;
                    let e = n[0];
                    E.Q.selectCommandOption(eI, e.name),
                        (i = !0),
                        (0, l.yw)(w.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == r ? void 0 : r.applicationId,
                            command_id: null == r || null == (a = r.rootCommand) ? void 0 : a.id,
                            argument_type: s.jw[null != (o = null == e ? void 0 : e.type) ? o : 3],
                            is_required: null == e ? void 0 : e.required,
                        });
                }
            }
            if (null != n) for (let [e, t] of n) (i = !0), E.Q.setNodes(eI, { error: !0 }, { at: t });
            if (i)
                return void f.S.dispatch(w.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2,
                });
            null == X ||
                X(
                    (0, g.sk)(b.bN.richValue(eI), {
                        mode: "raw",
                        ignoreTrailingEmptyNodes: !0,
                    }),
                    r,
                    e,
                );
        }, [x.id, eI, X, eT, et]);
    (0, v.Z)(t, eI, x, eS), (0, S.Z)(eI, eh, F);
    let { handleKeyDown: eA, handleKeyUp: eC } = (0, I.Z)({
            editor: eI,
            channel: x,
            disableEnterToSubmit: ei,
            onKeyDown: W,
            onKeyUp: K,
            onTab: z,
            onEnter: q,
            allowNewLines: ea,
            submit: eS,
            hideAutocomplete: J,
            moveSelection: $,
        }),
        { handlePaste: eN, handleGlobalPaste: eR } = (0, T.Z)(eI, eb, V),
        eP = i.useCallback(
            (e) => {
                null == Q || Q();
            },
            [Q],
        ),
        ew = i.useCallback(
            (e) => {
                e !== em.current
                    ? eE.current && (null == Z || Z(null, (0, g.sk)(e, { mode: "raw" }), e))
                    : eE.current && Q();
            },
            [Q, Z],
        );
    i.useLayoutEffect(() => {
        eg.current && ((em.current = n), ey(eI, "parent", { value: n }));
    }, [eI, n, ey]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null != (e = c.Z.getActiveCommand(x.id)) ? e : null;
                null !== t && null != t.options && eT(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [x, eI, eT]);
    let eD = i.useCallback((e, t) => (0, y.Z)(e, t), []),
        ex = i.useCallback(
            (e) => {
                let t = (0, N.Z)(eI, e, x.id);
                return null == t && (t = (0, P.Z)(eI, e)), t;
            },
            [x.id, eI],
        ),
        eL = i.useCallback((e) => (0, R.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: w.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eR,
            }),
            (0, r.jsx)("div", {
                ref: eh,
                className: o()(L, D.slateContainer),
                children: (0, r.jsx)(m.Z, {
                    id: j,
                    editor: eI,
                    channelId: x.id,
                    guildId: x.guild_id,
                    className: o()(D.slateTextArea, B),
                    placeholder: U,
                    readOnly: eb,
                    spellCheck: ee,
                    autoFocus: !er,
                    canFocus: !M,
                    onChange: ew,
                    onFocus: H,
                    onBlur: Y,
                    onClick: eP,
                    onPaste: eN,
                    onKeyDown: eA,
                    onKeyUp: eC,
                    decorateExtra: eD,
                    renderExtraElement: ex,
                    renderExtraLeaf: eL,
                    "aria-owns": eo,
                    "aria-haspopup": el,
                    "aria-expanded": es,
                    "aria-activedescendant": ec,
                    "aria-controls": eu,
                    "aria-labelledby": e_,
                    "aria-describedby": ef,
                    "aria-invalid": ed,
                    "aria-autocomplete": ep,
                    "aria-required": G,
                }),
            }),
        ],
    });
});
