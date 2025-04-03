n.d(t, { Z: () => D }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
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
    v = n(77188),
    O = n(230554),
    I = n(780748),
    S = n(464581),
    T = n(732659),
    N = n(86724),
    A = n(847302),
    C = n(657198),
    R = n(321127),
    P = n(981631),
    w = n(117335);
let D = i.forwardRef(function (e, t) {
    let { value: n, type: o, channel: D, className: L, id: x, disabled: M, submitting: k, placeholder: j, required: U, textAreaPaddingClassName: G, onChange: B, onPaste: F, onResize: V, onFocus: Z, onBlur: H, onKeyDown: W, onKeyUp: Y, onTab: K, onEnter: z, onSubmit: q, maybeShowAutocomplete: Q, hideAutocomplete: X, moveSelection: J, spellcheckEnabled: $, canUseCommands: ee, canOnlyUseTextCommands: et, disableAutoFocus: en, disableEnterToSubmit: er, allowNewLines: ei, 'aria-owns': eo, 'aria-expanded': ea, 'aria-haspopup': es, 'aria-activedescendant': el, 'aria-controls': ec, 'aria-invalid': eu, 'aria-describedby': ed, 'aria-labelledby': ef, 'aria-autocomplete': e_ } = e,
        ep = i.useRef(null),
        eh = i.useRef(null),
        em = i.useRef(!0),
        eg = i.useRef(!0),
        eE = M || k,
        eb = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: o } = n,
                    a = b.bN.richValue(e),
                    s = e.selection,
                    l = !1;
                if (void 0 !== i && i !== a) {
                    if (((e.children = i), 'parent' === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, A.KH)(e, D.guild_id, D.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, A.KH)(e, D.guild_id, D.id), (o = void 0);
                    }
                    'undo' !== t && void 0 !== i && i !== a && h.T.insertEntry(e, 'other', !1, a, s), (l = !0);
                }
                if ((null == o || b.Ew.isValid(e, o) || (o = void 0), (l || !b.Ew.isValid(e, s)) && void 0 === o)) {
                    let t = b.bN.end(e, []);
                    o = {
                        anchor: t,
                        focus: t
                    };
                }
                let u = null != o && !b.Ew.equals(o, s);
                if ((l && !en && b.bN.focus(e), null != o && u)) {
                    e.selection = o;
                    let t = h.T.currentEntry(e);
                    null != t && (t.selection = o), (l = !0);
                }
                let d = p.cr(e);
                if (
                    (null != d &&
                        d[0].command.id !== (null == (r = c.Z.getActiveCommand(D.id)) ? void 0 : r.id) &&
                        h.T.withMergedEntry(e, () => {
                            (0, N.L)(e, D.id, null, !0);
                        }),
                    l)
                )
                    if ('parent' === t)
                        try {
                            (eg.current = !1), e.onChange();
                        } finally {
                            eg.current = !0;
                        }
                    else e.onChange();
            },
            [D.id, D.guild_id, en]
        ),
        ey = i.useCallback(() => {
            em.current = !1;
        }, []),
        ev = i.useCallback(() => {
            em.current = !0;
        }, []),
        eO = (0, v.Z)({
            channel: D,
            chatInputType: o,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            onChangeStart: ey,
            onChangeEnd: ev,
            updateState: eb
        }),
        eI = i.useCallback(
            (e, t) => {
                let n = p.tM(eO, e, D.id),
                    r = p.lk(e, D.guild_id, D.id, n, t);
                return {
                    values: n,
                    results: r
                };
            },
            [D.guild_id, D.id, eO]
        ),
        eS = i.useCallback(() => {
            let e,
                t = ee ? c.Z.getActiveCommand(D.id) : null;
            if (null != t && null != t.options) {
                let i = eI(t, !1);
                e = i.values;
                let o = p
                    .cu(eO)
                    .filter((e) => !i.results[e].success)
                    .map((e) => {
                        var n;
                        return (null != (n = t.options) ? n : []).find((t) => t.name === e);
                    });
                for (let e of t.options) !e.required || e.name in i.values || (E.Q.insertCommandOption(eO, e), o.push(e));
                if (o.length > 0) {
                    var n, r;
                    let e = o[0];
                    E.Q.selectCommandOption(eO, e.name),
                        f.S.dispatch(P.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }),
                        (0, l.yw)(P.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == t ? void 0 : t.applicationId,
                            command_id: null == t || null == (n = t.rootCommand) ? void 0 : n.id,
                            argument_type: s.jw[null != (r = null == e ? void 0 : e.type) ? r : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                    return;
                }
            }
            null == q ||
                q(
                    (0, g.sk)(b.bN.richValue(eO), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    t,
                    e
                );
        }, [D.id, eO, q, eI, ee]);
    (0, O.Z)(t, eO, D, eS), (0, T.Z)(eO, ep, V);
    let { handleKeyDown: eT, handleKeyUp: eN } = (0, I.Z)({
            editor: eO,
            channel: D,
            disableEnterToSubmit: er,
            onKeyDown: W,
            onKeyUp: Y,
            onTab: K,
            onEnter: z,
            allowNewLines: ei,
            submit: eS,
            hideAutocomplete: X,
            moveSelection: J
        }),
        { handlePaste: eA, handleGlobalPaste: eC } = (0, S.Z)(eO, eE, F),
        eR = i.useCallback(
            (e) => {
                null == Q || Q();
            },
            [Q]
        ),
        eP = i.useCallback(
            (e) => {
                e !== eh.current ? eg.current && (null == B || B(null, (0, g.sk)(e, { mode: 'raw' }), e)) : eg.current && Q();
            },
            [Q, B]
        );
    i.useLayoutEffect(() => {
        em.current && ((eh.current = n), eb(eO, 'parent', { value: n }));
    }, [eO, n, eb]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null != (e = c.Z.getActiveCommand(D.id)) ? e : null;
                null !== t && null != t.options && eI(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [D, eO, eI]);
    let ew = i.useCallback((e, t) => (0, y.Z)(e, t), []),
        eD = i.useCallback((e) => (0, C.Z)(eO, e, D.id), [D.id, eO]),
        eL = i.useCallback((e) => (0, R.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: P.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eC
            }),
            (0, r.jsx)('div', {
                ref: ep,
                className: a()(L, w.slateContainer),
                children: (0, r.jsx)(m.Z, {
                    id: x,
                    editor: eO,
                    channelId: D.id,
                    guildId: D.guild_id,
                    className: a()(w.slateTextArea, G),
                    placeholder: j,
                    readOnly: eE,
                    spellCheck: $,
                    autoFocus: !en,
                    canFocus: !M,
                    onChange: eP,
                    onFocus: Z,
                    onBlur: H,
                    onClick: eR,
                    onPaste: eA,
                    onKeyDown: eT,
                    onKeyUp: eN,
                    decorateExtra: ew,
                    renderExtraElement: eD,
                    renderExtraLeaf: eL,
                    'aria-owns': eo,
                    'aria-haspopup': es,
                    'aria-expanded': ea,
                    'aria-activedescendant': el,
                    'aria-controls': ec,
                    'aria-labelledby': ef,
                    'aria-describedby': ed,
                    'aria-invalid': eu,
                    'aria-autocomplete': e_,
                    'aria-required': U
                })
            })
        ]
    });
});
