n.d(t, { Z: () => j }), n(388685), n(539854);
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
    w = n(657198),
    D = n(321127),
    L = n(645174),
    x = n(981631),
    M = n(867641);
let j = i.forwardRef(function (e, t) {
    let {
            value: n,
            type: a,
            channel: j,
            className: k,
            id: U,
            disabled: G,
            submitting: B,
            placeholder: Z,
            required: F,
            textAreaPaddingClassName: V,
            onChange: H,
            onPaste: Y,
            onResize: W,
            onFocus: K,
            onBlur: z,
            onKeyDown: q,
            onKeyUp: X,
            onTab: Q,
            onEnter: J,
            onSubmit: $,
            maybeShowAutocomplete: ee,
            hideAutocomplete: et,
            moveSelection: en,
            spellcheckEnabled: er,
            canUseCommands: ei,
            canOnlyUseTextCommands: ea,
            disableAutoFocus: eo,
            disableEnterToSubmit: es,
            allowNewLines: el,
            isEditorIdle: ec,
            currentAutocompleteType: eu,
            "aria-owns": ed,
            "aria-expanded": ef,
            "aria-haspopup": e_,
            "aria-activedescendant": ep,
            "aria-controls": eh,
            "aria-invalid": em,
            "aria-describedby": eg,
            "aria-labelledby": eE,
            "aria-autocomplete": eb,
        } = e,
        ey = i.useRef(null),
        eO = i.useRef(null),
        ev = i.useRef(!0),
        eI = i.useRef(!0),
        eT = G || B,
        eS = i.useCallback(
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
                if ((l && !eo && b.bN.focus(e), null != a && u)) {
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
                            (eI.current = !1), e.onChange();
                        } finally {
                            eI.current = !0;
                        }
                    else e.onChange();
            },
            [j.id, j.guild_id, eo],
        ),
        eA = i.useCallback(() => {
            ev.current = !1;
        }, []),
        eC = i.useCallback(() => {
            ev.current = !0;
        }, []),
        eN = (0, T.Z)({
            channel: j,
            chatInputType: a,
            canUseCommands: ei,
            canOnlyUseTextCommands: ea,
            onChangeStart: eA,
            onChangeEnd: eC,
            updateState: eS,
        }),
        eR = i.useCallback(
            (e, t) => {
                let n = p.tM(eN, e, j.id),
                    r = p.lk(e, j.guild_id, j.id, n, t);
                return {
                    values: n,
                    results: r,
                };
            },
            [j.guild_id, j.id, eN],
        ),
        eP = i.useCallback(() => {
            let e,
                t = b.bN.getNodesOfType(eN, ["gameMentionInput"]),
                n = null != t ? [...t] : null,
                r = ei ? c.Z.getActiveCommand(j.id) : null,
                i = !1;
            if (null != r && null != r.options) {
                let t = eR(r, !1);
                e = t.values;
                let n = p
                    .cu(eN)
                    .filter((e) => !t.results[e].success)
                    .map((e) => {
                        var t;
                        return (null != (t = r.options) ? t : []).find((t) => t.name === e);
                    });
                for (let e of r.options)
                    !e.required || e.name in t.values || (E.Q.insertCommandOption(eN, e), n.push(e));
                if (n.length > 0) {
                    var a, o;
                    let e = n[0];
                    E.Q.selectCommandOption(eN, e.name),
                        (i = !0),
                        (0, l.yw)(x.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == r ? void 0 : r.applicationId,
                            command_id: null == r || null == (a = r.rootCommand) ? void 0 : a.id,
                            argument_type: s.jw[null != (o = null == e ? void 0 : e.type) ? o : 3],
                            is_required: null == e ? void 0 : e.required,
                        });
                }
            }
            if (null != n) for (let [e, t] of n) (i = !0), E.Q.setNodes(eN, { error: !0 }, { at: t });
            if (i)
                return void f.S.dispatch(x.CkL.SHAKE_APP, {
                    duration: 200,
                    intensity: 2,
                });
            null == $ ||
                $(
                    (0, g.sk)(b.bN.richValue(eN), {
                        mode: "raw",
                        ignoreTrailingEmptyNodes: !0,
                    }),
                    r,
                    e,
                );
        }, [j.id, eN, $, eR, ei]);
    (0, S.Z)(t, eN, j, eP), (0, N.Z)(eN, ey, W);
    let { handleKeyDown: ew, handleKeyUp: eD } = (0, A.Z)({
            editor: eN,
            channel: j,
            disableEnterToSubmit: es,
            onKeyDown: q,
            onKeyUp: X,
            onTab: Q,
            onEnter: J,
            allowNewLines: el,
            submit: eP,
            hideAutocomplete: et,
            moveSelection: en,
        }),
        { handlePaste: eL, handleGlobalPaste: ex } = (0, C.Z)(eN, eT, Y),
        eM = i.useCallback(
            (e) => {
                null == ee || ee();
            },
            [ee],
        ),
        ej = i.useCallback(
            (e) => {
                e !== eO.current
                    ? eI.current && (null == H || H(null, (0, g.sk)(e, { mode: "raw" }), e))
                    : eI.current && ee();
            },
            [ee, H],
        );
    i.useLayoutEffect(() => {
        ev.current && ((eO.current = n), eS(eN, "parent", { value: n }));
    }, [eN, n, eS]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null != (e = c.Z.getActiveCommand(j.id)) ? e : null;
                null !== t && null != t.options && eR(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [j, eN, eR]);
    let ek = i.useCallback(
            (e) => [
                ...(0, v.Z)(eN, e, j.guild_id),
                ...(0, y.Z)(eN, e),
                ...(0, O.Z)(eN, e),
                ...(0, I.Z)(eN, e, j, {
                    isIdle: ec,
                    currentAutocompleteType: eu,
                }),
            ],
            [eN, j, ec, eu],
        ),
        eU = i.useCallback(
            (e) => {
                let t = (0, w.Z)(eN, e, j.id);
                return null == t && (t = (0, L.Z)(eN, e)), t;
            },
            [j.id, eN],
        ),
        eG = i.useCallback((e) => (0, D.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: x.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: ex,
            }),
            (0, r.jsx)("div", {
                ref: ey,
                className: o()(k, M.slateContainer),
                children: (0, r.jsx)(m.Z, {
                    id: U,
                    editor: eN,
                    channelId: j.id,
                    guildId: j.guild_id,
                    className: o()(M.slateTextArea, V),
                    placeholder: Z,
                    readOnly: eT,
                    spellCheck: er,
                    autoFocus: !eo,
                    canFocus: !G,
                    onChange: ej,
                    onFocus: K,
                    onBlur: z,
                    onClick: eM,
                    onPaste: eL,
                    onKeyDown: ew,
                    onKeyUp: eD,
                    decorate: ek,
                    renderExtraElement: eU,
                    renderExtraLeaf: eG,
                    "aria-owns": ed,
                    "aria-haspopup": e_,
                    "aria-expanded": ef,
                    "aria-activedescendant": ep,
                    "aria-controls": eh,
                    "aria-labelledby": eE,
                    "aria-describedby": eg,
                    "aria-invalid": em,
                    "aria-autocomplete": eb,
                    "aria-required": F,
                }),
            }),
        ],
    });
});
