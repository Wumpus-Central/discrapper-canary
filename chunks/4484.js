n.d(t, { Z: () => j }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
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
    y = n(77224),
    O = n(194625),
    v = n(135223),
    I = n(512729),
    T = n(77188),
    S = n(230554),
    A = n(780748),
    C = n(464581),
    N = n(732659),
    R = n(86724),
    P = n(847302),
    D = n(657198),
    w = n(321127),
    L = n(645174),
    x = n(120481),
    M = n(981631),
    k = n(867641);
let j = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: a,
            channel: j,
            className: U,
            id: G,
            disabled: B,
            submitting: Z,
            placeholder: F,
            required: V,
            textAreaPaddingClassName: H,
            onChange: Y,
            onPaste: W,
            onResize: K,
            onFocus: z,
            onBlur: q,
            onKeyDown: X,
            onKeyUp: Q,
            onTab: J,
            onEnter: $,
            onSubmit: ee,
            maybeShowAutocomplete: et,
            hideAutocomplete: en,
            moveSelection: er,
            spellcheckEnabled: ei,
            canUseCommands: ea,
            canOnlyUseTextCommands: eo,
            disableAutoFocus: es,
            disableEnterToSubmit: el,
            allowNewLines: ec,
            isEditorIdle: eu,
            currentAutocompleteType: ed,
            "aria-owns": ef,
            "aria-expanded": e_,
            "aria-haspopup": ep,
            "aria-activedescendant": eh,
            "aria-controls": em,
            "aria-invalid": eg,
            "aria-describedby": eE,
            "aria-labelledby": eb,
            "aria-autocomplete": ey,
        } = e,
        eO = i.useRef(null),
        ev = i.useRef(null),
        eI = i.useRef(!0),
        eT = i.useRef(!0),
        eS = B || Z,
        eA = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: a } = n,
                    o = b.bN.richValue(e),
                    s = e.selection,
                    l = !1;
                if (void 0 !== i && i !== o) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, P.KH)(e, j.guild_id, j.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, P.KH)(e, j.guild_id, j.id), (a = void 0);
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
                if ((l && !es && b.bN.focus(e), null != a && u)) {
                    e.selection = a;
                    let t = h.T.currentEntry(e);
                    null != t && (t.selection = a), (l = !0);
                }
                let d = p.cr(e);
                if (
                    (null != d &&
                        d[0].command.id !== (null == (r = c.Z.getActiveCommand(j.id)) ? void 0 : r.id) &&
                        h.T.withMergedEntry(e, () => {
                            (0, R.L)(e, j.id, null, !0);
                        }),
                    l)
                )
                    if ("parent" === t)
                        try {
                            (eT.current = !1), e.onChange();
                        } finally {
                            eT.current = !0;
                        }
                    else e.onChange();
            },
            [j.id, j.guild_id, es],
        ),
        eC = i.useCallback(() => {
            eI.current = !1;
        }, []),
        eN = i.useCallback(() => {
            eI.current = !0;
        }, []),
        eR = (0, T.Z)({
            channel: j,
            chatInputType: a,
            canUseCommands: ea,
            canOnlyUseTextCommands: eo,
            onChangeStart: eC,
            onChangeEnd: eN,
            updateState: eA,
        }),
        eP = i.useCallback(
            (e, t) => {
                let n = p.tM(eR, e, j.id),
                    r = p.lk(e, j.guild_id, j.id, n, t);
                return {
                    values: n,
                    results: r,
                };
            },
            [j.guild_id, j.id, eR],
        ),
        eD = i.useCallback(() => {
            let e,
                t = b.bN.getNodesOfType(eR, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = ea ? c.Z.getActiveCommand(j.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eP(r, !1);
                e = t.values;
                let n = p
                    .cu(eR)
                    .filter((e) => !t.results[e].success)
                    .map((e) => {
                        var t;
                        return (null != (t = r.options) ? t : []).find((t) => t.name === e);
                    });
                for (let e of r.options)
                    !e.required || e.name in t.values || (E.Q.insertCommandOption(eR, e), n.push(e));
                if (n.length > 0) {
                    var a, o;
                    let e = n[0];
                    E.Q.selectCommandOption(eR, e.name),
                        (i = !0),
                        (0, l.yw)(M.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == r ? void 0 : r.applicationId,
                            command_id: null == r || null == (a = r.rootCommand) ? void 0 : a.id,
                            argument_type: s.jw[null != (o = null == e ? void 0 : e.type) ? o : 3],
                            is_required: null == e ? void 0 : e.required,
                        });
                }
            }
            if (null != n) for (let [e, t] of n) (i = !0), E.Q.setNodes(eR, { error: !0 }, { at: t });
            if (i)
                return void f.S.dispatch(M.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2,
                });
            null == ee ||
                ee(
                    (0, g.sk)(b.bN.richValue(eR), {
                        mode: "raw",
                        ignoreTrailingEmptyNodes: !0,
                    }),
                    r,
                    e,
                );
        }, [j.id, eR, ee, eP, ea]);
    (0, S.Z)(t, eR, j, eD), (0, N.Z)(eR, eO, K);
    let { handleKeyDown: ew, handleKeyUp: eL } = (0, A.Z)({
            editor: eR,
            channel: j,
            disableEnterToSubmit: el,
            onKeyDown: X,
            onKeyUp: Q,
            onTab: J,
            onEnter: $,
            allowNewLines: ec,
            submit: eD,
            hideAutocomplete: en,
            moveSelection: er,
        }),
        { handlePaste: ex, handleGlobalPaste: eM } = (0, C.Z)(eR, eS, W),
        ek = i.useCallback(
            (e) => {
                null == et || et();
            },
            [et],
        ),
        ej = i.useCallback(
            (e) => {
                e !== ev.current
                    ? eT.current && (null == Y || Y(null, (0, g.sk)(e, { mode: "raw" }), e))
                    : eT.current && et();
            },
            [et, Y],
        );
    i.useLayoutEffect(() => {
        eI.current && ((ev.current = n), eA(eR, "parent", { value: n }));
    }, [eR, n, eA]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null != (e = c.Z.getActiveCommand(j.id)) ? e : null;
                null !== t && null != t.options && eP(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [j, eR, eP]);
    let eU = i.useCallback(
            (e) => [
                ...(0, v.Z)(eR, e, j.guild_id),
                ...(0, y.Z)(eR, e),
                ...(0, O.Z)(eR, e),
                ...(0, I.Z)(eR, e, j, {
                    isIdle: eu,
                    currentAutocompleteType: ed,
                }),
            ],
            [eR, j, eu, ed],
        ),
        eG = i.useCallback(
            (e) => {
                let t = (0, D.Z)(eR, e, j.id);
                return null == t && (t = (0, L.Z)(eR, e)), null == t && (t = (0, x.Z)(eR, e)), t;
            },
            [j.id, eR],
        ),
        eB = i.useCallback((e) => (0, w.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: M.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eM,
            }),
            (0, r.jsx)("div", {
                ref: eO,
                className: o()(U, k.slateContainer),
                children: (0, r.jsx)(m.Z, {
                    id: G,
                    editor: eR,
                    channelId: j.id,
                    guildId: j.guild_id,
                    className: o()(k.slateTextArea, H),
                    placeholder: F,
                    readOnly: eS,
                    spellCheck: ei,
                    autoFocus: !es,
                    canFocus: !B,
                    onChange: ej,
                    onFocus: z,
                    onBlur: q,
                    onClick: ek,
                    onPaste: ex,
                    onKeyDown: ew,
                    onKeyUp: eL,
                    decorate: eU,
                    renderExtraElement: eG,
                    renderExtraLeaf: eB,
                    "aria-owns": ef,
                    "aria-haspopup": ep,
                    "aria-expanded": e_,
                    "aria-activedescendant": eh,
                    "aria-controls": em,
                    "aria-labelledby": eb,
                    "aria-describedby": eE,
                    "aria-invalid": eg,
                    "aria-autocomplete": ey,
                    "aria-required": V,
                }),
            }),
        ],
    });
});
