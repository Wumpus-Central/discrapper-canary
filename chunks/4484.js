n.d(t, { Z: () => k }), n(388685), n(539854);
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
    p = n(541716),
    _ = n(91313),
    m = n(53529),
    h = n(288897),
    g = n(925994),
    E = n(436660),
    b = n(887490),
    y = n(77224),
    O = n(194625),
    v = n(135223),
    S = n(512729),
    I = n(77188),
    T = n(230554),
    A = n(780748),
    C = n(464581),
    N = n(732659),
    P = n(86724),
    R = n(847302),
    w = n(657198),
    D = n(321127),
    x = n(645174),
    L = n(120481),
    j = n(981631),
    M = n(867641);
let k = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: a,
            channel: k,
            className: U,
            id: G,
            disabled: Z,
            submitting: B,
            placeholder: F,
            required: V,
            textAreaPaddingClassName: H,
            onChange: Y,
            onPaste: W,
            onResize: K,
            onFocus: z,
            onBlur: q,
            onKeyDown: Q,
            onKeyUp: X,
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
            "aria-expanded": ep,
            "aria-haspopup": e_,
            "aria-activedescendant": em,
            "aria-controls": eh,
            "aria-invalid": eg,
            "aria-describedby": eE,
            "aria-labelledby": eb,
            "aria-autocomplete": ey,
        } = e,
        eO = i.useRef(null),
        ev = i.useRef(null),
        eS = i.useRef(!0),
        eI = i.useRef(!0),
        eT = Z || B,
        eA = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: a } = n,
                    o = b.bN.richValue(e),
                    s = e.selection,
                    l = !1;
                if (void 0 !== i && i !== o) {
                    if (((e.children = i), "parent" === t && !e.previewMarkdown && e.chatInputType === p.Ie.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, R.KH)(e, k.guild_id, k.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, R.KH)(e, k.guild_id, k.id), (a = void 0);
                    }
                    "undo" !== t && void 0 !== i && i !== o && m.T.insertEntry(e, "other", !1, o, s), (l = !0);
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
                    let t = m.T.currentEntry(e);
                    null != t && (t.selection = a), (l = !0);
                }
                let d = _.cr(e);
                if (
                    (null != d &&
                        d[0].command.id !== (null == (r = c.Z.getActiveCommand(k.id)) ? void 0 : r.id) &&
                        m.T.withMergedEntry(e, () => {
                            (0, P.L)(e, k.id, null, !0);
                        }),
                    l)
                )
                    if ("parent" === t)
                        try {
                            (eI.current = !1), e.onChange();
                        } finally {
                            eI.current = !0;
                        }
                    else e.onChange();
            },
            [k.id, k.guild_id, es],
        ),
        eC = i.useCallback(() => {
            eS.current = !1;
        }, []),
        eN = i.useCallback(() => {
            eS.current = !0;
        }, []),
        eP = (0, I.Z)({
            channel: k,
            chatInputType: a,
            canUseCommands: ea,
            canOnlyUseTextCommands: eo,
            onChangeStart: eC,
            onChangeEnd: eN,
            updateState: eA,
        }),
        eR = i.useCallback(
            (e, t) => {
                let n = _.tM(eP, e, k.id),
                    r = _.lk(e, k.guild_id, k.id, n, t);
                return {
                    values: n,
                    results: r,
                };
            },
            [k.guild_id, k.id, eP],
        ),
        ew = i.useCallback(() => {
            let e,
                t = b.bN.getNodesOfType(eP, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = ea ? c.Z.getActiveCommand(k.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eR(r, !1);
                e = t.values;
                let n = _.cu(eP)
                    .filter((e) => !t.results[e].success)
                    .map((e) => {
                        var t;
                        return (null != (t = r.options) ? t : []).find((t) => t.name === e);
                    });
                for (let e of r.options)
                    !e.required || e.name in t.values || (E.Q.insertCommandOption(eP, e), n.push(e));
                if (n.length > 0) {
                    var a, o;
                    let e = n[0];
                    E.Q.selectCommandOption(eP, e.name),
                        (i = !0),
                        (0, l.yw)(j.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == r ? void 0 : r.applicationId,
                            command_id: null == r || null == (a = r.rootCommand) ? void 0 : a.id,
                            argument_type: s.jw[null != (o = null == e ? void 0 : e.type) ? o : 3],
                            is_required: null == e ? void 0 : e.required,
                        });
                }
            }
            if (null != n) for (let [e, t] of n) (i = !0), E.Q.setNodes(eP, { error: !0 }, { at: t });
            if (i)
                return void f.S.dispatch(j.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2,
                });
            null == ee ||
                ee(
                    (0, g.sk)(b.bN.richValue(eP), {
                        mode: "raw",
                        ignoreTrailingEmptyNodes: !0,
                    }),
                    r,
                    e,
                );
        }, [k.id, eP, ee, eR, ea]);
    (0, T.Z)(t, eP, k, ew), (0, N.Z)(eP, eO, K);
    let { handleKeyDown: eD, handleKeyUp: ex } = (0, A.Z)({
            editor: eP,
            channel: k,
            disableEnterToSubmit: el,
            onKeyDown: Q,
            onKeyUp: X,
            onTab: J,
            onEnter: $,
            allowNewLines: ec,
            submit: ew,
            hideAutocomplete: en,
            moveSelection: er,
        }),
        { handlePaste: eL, handleGlobalPaste: ej } = (0, C.Z)(eP, eT, W),
        eM = i.useCallback(
            (e) => {
                null == et || et();
            },
            [et],
        ),
        ek = i.useCallback(
            (e) => {
                e !== ev.current
                    ? eI.current && (null == Y || Y(null, (0, g.sk)(e, { mode: "raw" }), e))
                    : eI.current && et();
            },
            [et, Y],
        );
    i.useLayoutEffect(() => {
        eS.current && ((ev.current = n), eA(eP, "parent", { value: n }));
    }, [eP, n, eA]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null != (e = c.Z.getActiveCommand(k.id)) ? e : null;
                null !== t && null != t.options && eR(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [k, eP, eR]);
    let eU = i.useCallback(
            (e) => [
                ...(0, v.Z)(eP, e, k.guild_id),
                ...(0, y.Z)(eP, e),
                ...(0, O.Z)(eP, e),
                ...(0, S.Z)(eP, e, k, {
                    isIdle: eu,
                    currentAutocompleteType: ed,
                }),
            ],
            [eP, k, eu, ed],
        ),
        eG = i.useCallback(
            (e) => {
                let t = (0, w.Z)(eP, e, k.id);
                return null == t && (t = (0, x.Z)(eP, e)), null == t && (t = (0, L.Z)(eP, e)), t;
            },
            [k.id, eP],
        ),
        eZ = i.useCallback((e) => (0, D.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: j.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: ej,
            }),
            (0, r.jsx)("div", {
                ref: eO,
                className: o()(U, M.slateContainer),
                children: (0, r.jsx)(h.Z, {
                    id: G,
                    editor: eP,
                    channelId: k.id,
                    guildId: k.guild_id,
                    className: o()(M.slateTextArea, H),
                    placeholder: F,
                    readOnly: eT,
                    spellCheck: ei,
                    autoFocus: !es,
                    canFocus: !Z,
                    onChange: ek,
                    onFocus: z,
                    onBlur: q,
                    onClick: eM,
                    onPaste: eL,
                    onKeyDown: eD,
                    onKeyUp: ex,
                    decorate: eU,
                    renderExtraElement: eG,
                    renderExtraLeaf: eZ,
                    "aria-owns": ef,
                    "aria-haspopup": e_,
                    "aria-expanded": ep,
                    "aria-activedescendant": em,
                    "aria-controls": eh,
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
