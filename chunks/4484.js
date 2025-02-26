n.d(t, { Z: () => w }), n(47120), n(653041);
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
    g = n(288897),
    m = n(925994),
    E = n(436660),
    v = n(887490),
    b = n(194625),
    y = n(77188),
    O = n(230554),
    S = n(780748),
    I = n(464581),
    T = n(732659),
    N = n(86724),
    A = n(847302),
    C = n(657198),
    R = n(321127),
    P = n(981631),
    D = n(74883);
let w = i.forwardRef(function (e, t) {
    let { value: n, type: o, channel: w, className: L, id: x, disabled: M, submitting: k, placeholder: j, required: U, textAreaPaddingClassName: G, onChange: B, onPaste: V, onResize: F, onFocus: Z, onBlur: H, onKeyDown: W, onKeyUp: Y, onTab: K, onEnter: z, onSubmit: q, maybeShowAutocomplete: Q, hideAutocomplete: X, moveSelection: J, spellcheckEnabled: $, canUseCommands: ee, canOnlyUseTextCommands: et, disableAutoFocus: en, disableEnterToSubmit: er, allowNewLines: ei, 'aria-owns': eo, 'aria-expanded': ea, 'aria-haspopup': es, 'aria-activedescendant': el, 'aria-controls': ec, 'aria-invalid': eu, 'aria-describedby': ed, 'aria-labelledby': ef, 'aria-autocomplete': e_ } = e,
        ep = i.useRef(null),
        eh = i.useRef(null),
        eg = i.useRef(!0),
        em = i.useRef(!0),
        eE = M || k,
        ev = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: o } = n,
                    a = v.bN.richValue(e),
                    s = e.selection,
                    l = !1;
                if (void 0 !== i && i !== a) {
                    if (((e.children = i), 'parent' === t && !e.previewMarkdown && e.chatInputType === _.Ie.EDIT)) {
                        try {
                            (e.previewMarkdown = !0), (0, A.KH)(e, w.guild_id, w.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, A.KH)(e, w.guild_id, w.id), (o = void 0);
                    }
                    'undo' !== t && void 0 !== i && i !== a && h.T.insertEntry(e, 'other', !1, a, s), (l = !0);
                }
                if ((null == o || v.Ew.isValid(e, o) || (o = void 0), (l || !v.Ew.isValid(e, s)) && void 0 === o)) {
                    let t = v.bN.end(e, []);
                    o = {
                        anchor: t,
                        focus: t
                    };
                }
                let u = null != o && !v.Ew.equals(o, s);
                if ((l && !en && v.bN.focus(e), null != o && u)) {
                    e.selection = o;
                    let t = h.T.currentEntry(e);
                    null != t && (t.selection = o), (l = !0);
                }
                let d = p.cr(e);
                if (
                    (null != d &&
                        d[0].command.id !== (null === (r = c.Z.getActiveCommand(w.id)) || void 0 === r ? void 0 : r.id) &&
                        h.T.withMergedEntry(e, () => {
                            (0, N.L)(e, w.id, null, !0);
                        }),
                    l)
                ) {
                    if ('parent' === t)
                        try {
                            (em.current = !1), e.onChange();
                        } finally {
                            em.current = !0;
                        }
                    else e.onChange();
                }
            },
            [w.id, w.guild_id, en]
        ),
        eb = i.useCallback(() => {
            eg.current = !1;
        }, []),
        ey = i.useCallback(() => {
            eg.current = !0;
        }, []),
        eO = (0, y.Z)({
            channel: w,
            chatInputType: o,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            onChangeStart: eb,
            onChangeEnd: ey,
            updateState: ev
        }),
        eS = i.useCallback(
            (e, t) => {
                let n = p.tM(eO, e, w.id),
                    r = p.lk(e, w.guild_id, w.id, n, t);
                return {
                    values: n,
                    results: r
                };
            },
            [w.guild_id, w.id, eO]
        ),
        eI = i.useCallback(() => {
            let e;
            let t = ee ? c.Z.getActiveCommand(w.id) : null;
            if (null != t && null != t.options) {
                let i = eS(t, !1);
                e = i.values;
                let o = p
                    .cu(eO)
                    .filter((e) => !i.results[e].success)
                    .map((e) => {
                        var n;
                        return (null !== (n = t.options) && void 0 !== n ? n : []).find((t) => t.name === e);
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
                            command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                            argument_type: s.jw[null !== (r = null == e ? void 0 : e.type) && void 0 !== r ? r : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                    return;
                }
            }
            null == q ||
                q(
                    (0, m.sk)(v.bN.richValue(eO), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    t,
                    e
                );
        }, [w.id, eO, q, eS, ee]);
    (0, O.Z)(t, eO, w, eI), (0, T.Z)(eO, ep, F);
    let { handleKeyDown: eT, handleKeyUp: eN } = (0, S.Z)({
            editor: eO,
            channel: w,
            disableEnterToSubmit: er,
            onKeyDown: W,
            onKeyUp: Y,
            onTab: K,
            onEnter: z,
            allowNewLines: ei,
            submit: eI,
            hideAutocomplete: X,
            moveSelection: J
        }),
        { handlePaste: eA, handleGlobalPaste: eC } = (0, I.Z)(eO, eE, V),
        eR = i.useCallback(
            (e) => {
                null == Q || Q();
            },
            [Q]
        ),
        eP = i.useCallback(
            (e) => {
                e !== eh.current ? em.current && (null == B || B(null, (0, m.sk)(e, { mode: 'raw' }), e)) : em.current && Q();
            },
            [Q, B]
        );
    i.useLayoutEffect(() => {
        eg.current && ((eh.current = n), ev(eO, 'parent', { value: n }));
    }, [eO, n, ev]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null !== (e = c.Z.getActiveCommand(w.id)) && void 0 !== e ? e : null;
                null !== t && null != t.options && eS(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [w, eO, eS]);
    let eD = i.useCallback((e, t) => (0, b.Z)(e, t), []),
        ew = i.useCallback((e) => (0, C.Z)(eO, e, w.id), [w.id, eO]),
        eL = i.useCallback((e) => (0, R.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: P.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eC
            }),
            (0, r.jsx)('div', {
                ref: ep,
                className: a()(L, D.slateContainer),
                children: (0, r.jsx)(g.Z, {
                    id: x,
                    editor: eO,
                    channelId: w.id,
                    guildId: w.guild_id,
                    className: a()(D.slateTextArea, G),
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
                    decorateExtra: eD,
                    renderExtraElement: ew,
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
