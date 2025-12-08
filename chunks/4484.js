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
            onSubmitFailure: et,
            maybeShowAutocomplete: en,
            hideAutocomplete: er,
            moveSelection: ei,
            spellcheckEnabled: ea,
            canUseCommands: eo,
            canOnlyUseTextCommands: es,
            disableAutoFocus: el,
            disableEnterToSubmit: ec,
            allowNewLines: eu,
            isEditorIdle: ed,
            currentAutocompleteType: ef,
            "aria-owns": ep,
            "aria-expanded": e_,
            "aria-haspopup": em,
            "aria-activedescendant": eh,
            "aria-controls": eg,
            "aria-invalid": eE,
            "aria-describedby": eb,
            "aria-labelledby": ey,
            "aria-autocomplete": eO,
        } = e,
        ev = i.useRef(null),
        eS = i.useRef(null),
        eI = i.useRef(!0),
        eT = i.useRef(!0),
        eA = Z || B,
        eC = i.useCallback(
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
                if ((l && !el && b.bN.focus(e), null != a && u)) {
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
                            (eT.current = !1), e.onChange();
                        } finally {
                            eT.current = !0;
                        }
                    else e.onChange();
            },
            [k.id, k.guild_id, el],
        ),
        eN = i.useCallback(() => {
            eI.current = !1;
        }, []),
        eP = i.useCallback(() => {
            eI.current = !0;
        }, []),
        eR = (0, I.Z)({
            channel: k,
            chatInputType: a,
            canUseCommands: eo,
            canOnlyUseTextCommands: es,
            onChangeStart: eN,
            onChangeEnd: eP,
            updateState: eC,
        }),
        ew = i.useCallback(
            (e, t) => {
                let n = _.tM(eR, e, k.id),
                    r = _.lk(e, k.guild_id, k.id, n, t);
                return {
                    values: n,
                    results: r,
                };
            },
            [k.guild_id, k.id, eR],
        ),
        eD = i.useCallback(() => {
            let e,
                t = b.bN.getNodesOfType(eR, ["gameMentionInput", "timestampMentionInput"]),
                n = null != t ? [...t] : null,
                r = eo ? c.Z.getActiveCommand(k.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = ew(r, !1);
                e = t.values;
                let n = _.cu(eR)
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
                        (0, l.yw)(j.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == r ? void 0 : r.applicationId,
                            command_id: null == r || null == (a = r.rootCommand) ? void 0 : a.id,
                            argument_type: s.jw[null != (o = null == e ? void 0 : e.type) ? o : 3],
                            is_required: null == e ? void 0 : e.required,
                        });
                }
            }
            if (null != n)
                for (let [e, t] of n)
                    E.Q.setNodes(eR, { error: !0 }, { at: t }), i || E.Q.select(eR, b.bN.end(eR, t)), (i = !0);
            if (i) {
                f.S.dispatch(j.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2,
                }),
                    null == et || et();
                return;
            }
            null == ee ||
                ee(
                    (0, g.sk)(b.bN.richValue(eR), {
                        mode: "raw",
                        ignoreTrailingEmptyNodes: !0,
                    }),
                    r,
                    e,
                );
        }, [k.id, eR, ee, et, ew, eo]);
    (0, T.Z)(t, eR, k, eD), (0, N.Z)(eR, ev, K);
    let { handleKeyDown: ex, handleKeyUp: eL } = (0, A.Z)({
            editor: eR,
            channel: k,
            disableEnterToSubmit: ec,
            onKeyDown: Q,
            onKeyUp: X,
            onTab: J,
            onEnter: $,
            allowNewLines: eu,
            submit: eD,
            hideAutocomplete: er,
            moveSelection: ei,
        }),
        { handlePaste: ej, handleGlobalPaste: eM } = (0, C.Z)(eR, eA, W),
        ek = i.useCallback(
            (e) => {
                null == en || en();
            },
            [en],
        ),
        eU = i.useCallback(
            (e) => {
                e !== eS.current
                    ? eT.current && (null == Y || Y(null, (0, g.sk)(e, { mode: "raw" }), e))
                    : eT.current && en();
            },
            [en, Y],
        );
    i.useLayoutEffect(() => {
        eI.current && ((eS.current = n), eC(eR, "parent", { value: n }));
    }, [eR, n, eC]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null != (e = c.Z.getActiveCommand(k.id)) ? e : null;
                null !== t && null != t.options && ew(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [k, eR, ew]);
    let eG = i.useCallback(
            (e) => [
                ...(0, v.Z)(eR, e, k.guild_id),
                ...(0, y.Z)(eR, e),
                ...(0, O.Z)(eR, e),
                ...(0, S.Z)(eR, e, k, {
                    isIdle: ed,
                    currentAutocompleteType: ef,
                }),
            ],
            [eR, k, ed, ef],
        ),
        eZ = i.useCallback(
            (e) => {
                let t = (0, w.Z)(eR, e, k.id);
                return null == t && (t = (0, x.Z)(eR, e)), null == t && (t = (0, L.Z)(eR, e)), t;
            },
            [k.id, eR],
        ),
        eB = i.useCallback((e) => (0, D.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: j.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eM,
            }),
            (0, r.jsx)("div", {
                ref: ev,
                className: o()(U, M.slateContainer),
                children: (0, r.jsx)(h.Z, {
                    id: G,
                    editor: eR,
                    channelId: k.id,
                    guildId: k.guild_id,
                    className: o()(M.slateTextArea, H),
                    placeholder: F,
                    readOnly: eA,
                    spellCheck: ea,
                    autoFocus: !el,
                    canFocus: !Z,
                    onChange: eU,
                    onFocus: z,
                    onBlur: q,
                    onClick: ek,
                    onPaste: ej,
                    onKeyDown: ex,
                    onKeyUp: eL,
                    decorate: eG,
                    renderExtraElement: eZ,
                    renderExtraLeaf: eB,
                    "aria-owns": ep,
                    "aria-haspopup": em,
                    "aria-expanded": e_,
                    "aria-activedescendant": eh,
                    "aria-controls": eg,
                    "aria-labelledby": ey,
                    "aria-describedby": eb,
                    "aria-invalid": eE,
                    "aria-autocomplete": eO,
                    "aria-required": V,
                }),
            }),
        ],
    });
});
