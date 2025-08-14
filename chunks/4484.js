n.d(t, { Z: () => L }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    N = n(847302),
    C = n(657198),
    R = n(321127),
    P = n(645174),
    w = n(981631),
    D = n(867641);
let L = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: o,
            channel: L,
            className: x,
            id: M,
            disabled: k,
            submitting: j,
            placeholder: U,
            required: G,
            textAreaPaddingClassName: B,
            onChange: Z,
            onPaste: F,
            onResize: V,
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
            allowNewLines: eo,
            "aria-owns": ea,
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
        eb = k || j,
        ey = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: o } = n,
                    a = b.bN.richValue(e),
                    s = e.selection,
                    l = !1;
                if (void 0 !== i && i !== a) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, N.KH)(e, L.guild_id, L.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, N.KH)(e, L.guild_id, L.id), (o = void 0);
                    }
                    "undo" !== t && void 0 !== i && i !== a && h.T.insertEntry(e, "other", !1, a, s), (l = !0);
                }
                if ((null == o || b.Ew.isValid(e, o) || (o = void 0), (l || !b.Ew.isValid(e, s)) && void 0 === o)) {
                    let t = b.bN.end(e, []);
                    o = {
                        anchor: t,
                        focus: t,
                    };
                }
                let u = null != o && !b.Ew.equals(o, s);
                if ((l && !er && b.bN.focus(e), null != o && u)) {
                    e.selection = o;
                    let t = h.T.currentEntry(e);
                    null != t && (t.selection = o), (l = !0);
                }
                let d = p.cr(e);
                if (
                    (null != d &&
                        d[0].command.id !== (null == (r = c.Z.getActiveCommand(L.id)) ? void 0 : r.id) &&
                        h.T.withMergedEntry(e, () => {
                            (0, A.L)(e, L.id, null, !0);
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
            [L.id, L.guild_id, er],
        ),
        eO = i.useCallback(() => {
            eg.current = !1;
        }, []),
        ev = i.useCallback(() => {
            eg.current = !0;
        }, []),
        eI = (0, O.Z)({
            channel: L,
            chatInputType: o,
            canUseCommands: et,
            canOnlyUseTextCommands: en,
            onChangeStart: eO,
            onChangeEnd: ev,
            updateState: ey,
        }),
        eT = i.useCallback(
            (e, t) => {
                let n = p.tM(eI, e, L.id),
                    r = p.lk(e, L.guild_id, L.id, n, t);
                return {
                    values: n,
                    results: r,
                };
            },
            [L.guild_id, L.id, eI],
        ),
        eS = i.useCallback(() => {
            let e,
                t = et ? c.Z.getActiveCommand(L.id) : null;
            if (null != t && null != t.options) {
                let i = eT(t, !1);
                e = i.values;
                let o = p
                    .cu(eI)
                    .filter((e) => !i.results[e].success)
                    .map((e) => {
                        var n;
                        return (null != (n = t.options) ? n : []).find((t) => t.name === e);
                    });
                for (let e of t.options)
                    !e.required || e.name in i.values || (E.Q.insertCommandOption(eI, e), o.push(e));
                if (o.length > 0) {
                    var n, r;
                    let e = o[0];
                    E.Q.selectCommandOption(eI, e.name),
                        f.S.dispatch(w.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2,
                        }),
                        (0, l.yw)(w.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == t ? void 0 : t.applicationId,
                            command_id: null == t || null == (n = t.rootCommand) ? void 0 : n.id,
                            argument_type: s.jw[null != (r = null == e ? void 0 : e.type) ? r : 3],
                            is_required: null == e ? void 0 : e.required,
                        });
                    return;
                }
            }
            null == X ||
                X(
                    (0, g.sk)(b.bN.richValue(eI), {
                        mode: "raw",
                        ignoreTrailingEmptyNodes: !0,
                    }),
                    t,
                    e,
                );
        }, [L.id, eI, X, eT, et]);
    (0, v.Z)(t, eI, L, eS), (0, S.Z)(eI, eh, V);
    let { handleKeyDown: eA, handleKeyUp: eN } = (0, I.Z)({
            editor: eI,
            channel: L,
            disableEnterToSubmit: ei,
            onKeyDown: W,
            onKeyUp: K,
            onTab: z,
            onEnter: q,
            allowNewLines: eo,
            submit: eS,
            hideAutocomplete: J,
            moveSelection: $,
        }),
        { handlePaste: eC, handleGlobalPaste: eR } = (0, T.Z)(eI, eb, F),
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
                let t = null != (e = c.Z.getActiveCommand(L.id)) ? e : null;
                null !== t && null != t.options && eT(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [L, eI, eT]);
    let eD = i.useCallback((e, t) => (0, y.Z)(e, t), []),
        eL = i.useCallback(
            (e) => {
                let t = (0, C.Z)(eI, e, L.id);
                return null == t && (t = (0, P.Z)(eI, e)), t;
            },
            [L.id, eI],
        ),
        ex = i.useCallback((e) => (0, R.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: w.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eR,
            }),
            (0, r.jsx)("div", {
                ref: eh,
                className: a()(x, D.slateContainer),
                children: (0, r.jsx)(m.Z, {
                    id: M,
                    editor: eI,
                    channelId: L.id,
                    guildId: L.guild_id,
                    className: a()(D.slateTextArea, B),
                    placeholder: U,
                    readOnly: eb,
                    spellCheck: ee,
                    autoFocus: !er,
                    canFocus: !k,
                    onChange: ew,
                    onFocus: H,
                    onBlur: Y,
                    onClick: eP,
                    onPaste: eC,
                    onKeyDown: eA,
                    onKeyUp: eN,
                    decorateExtra: eD,
                    renderExtraElement: eL,
                    renderExtraLeaf: ex,
                    "aria-owns": ea,
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
