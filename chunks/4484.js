n.d(t, { Z: () => x }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(911969),
    l = n(367907),
    u = n(998698),
    c = n(117530),
    d = n(459273),
    f = n(585483),
    _ = n(91313),
    p = n(53529),
    h = n(288897),
    m = n(925994),
    g = n(436660),
    E = n(887490),
    v = n(194625),
    y = n(77188),
    I = n(230554),
    b = n(780748),
    T = n(464581),
    S = n(732659),
    A = n(86724),
    N = n(847302),
    C = n(657198),
    R = n(321127),
    O = n(981631),
    D = n(506886);
let x = r.forwardRef(function (e, t) {
    let { value: n, type: a, channel: x, className: L, id: P, disabled: w, submitting: M, placeholder: k, required: U, textAreaPaddingClassName: G, onChange: B, onPaste: Z, onResize: F, onFocus: V, onBlur: j, onKeyDown: H, onKeyUp: Y, onTab: W, onEnter: K, onSubmit: z, maybeShowAutocomplete: q, hideAutocomplete: Q, moveSelection: X, spellcheckEnabled: J, canUseCommands: $, canOnlyUseTextCommands: ee, disableAutoFocus: et, disableEnterToSubmit: en, allowNewLines: ei, 'aria-owns': er, 'aria-expanded': ea, 'aria-haspopup': es, 'aria-activedescendant': eo, 'aria-controls': el, 'aria-invalid': eu, 'aria-describedby': ec, 'aria-labelledby': ed, 'aria-autocomplete': ef } = e,
        e_ = r.useRef(null),
        ep = r.useRef(null),
        eh = r.useRef(!0),
        em = r.useRef(!0),
        eg = w || M,
        eE = r.useCallback(
            (e, t, n) => {
                var i;
                let { value: r, selection: a } = n,
                    s = E.bN.richValue(e),
                    o = e.selection,
                    l = !1;
                if (void 0 !== r && r !== s) {
                    if (((e.children = r), 'parent' === t && !e.previewMarkdown)) {
                        try {
                            (e.previewMarkdown = !0), (0, N.KH)(e, x.guild_id, x.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, N.KH)(e, x.guild_id, x.id), (a = void 0);
                    }
                    'undo' !== t && void 0 !== r && r !== s && p.T.insertEntry(e, 'other', !1, s, o), (l = !0);
                }
                if ((null == a || E.Ew.isValid(e, a) || (a = void 0), (l || !E.Ew.isValid(e, o)) && void 0 === a)) {
                    let t = E.bN.end(e, []);
                    a = {
                        anchor: t,
                        focus: t
                    };
                }
                if (null != a && !E.Ew.equals(a, o)) {
                    e.selection = a;
                    let t = p.T.currentEntry(e);
                    null != t && (t.selection = a), (l = !0);
                }
                let c = _.cr(e);
                if (
                    (null != c &&
                        c[0].command.id !== (null === (i = u.Z.getActiveCommand(x.id)) || void 0 === i ? void 0 : i.id) &&
                        p.T.withMergedEntry(e, () => {
                            (0, A.L)(e, x.id, null, !0);
                        }),
                    l)
                ) {
                    if ((et || E.bN.focus(e), 'parent' === t))
                        try {
                            (em.current = !1), e.onChange();
                        } finally {
                            em.current = !0;
                        }
                    else e.onChange();
                }
            },
            [x.id, x.guild_id, et]
        ),
        ev = r.useCallback(() => {
            eh.current = !1;
        }, []),
        ey = r.useCallback(() => {
            eh.current = !0;
        }, []),
        eI = (0, y.Z)({
            channel: x,
            chatInputType: a,
            canUseCommands: $,
            canOnlyUseTextCommands: ee,
            onChangeStart: ev,
            onChangeEnd: ey,
            updateState: eE
        }),
        eb = r.useCallback(
            (e, t) => {
                let n = _.tM(eI, e, x.id),
                    i = _.lk(e, x.guild_id, x.id, n, t);
                return {
                    values: n,
                    results: i
                };
            },
            [x.guild_id, x.id, eI]
        ),
        eT = r.useCallback(() => {
            let e;
            let t = $ ? u.Z.getActiveCommand(x.id) : null;
            if (null != t && null != t.options) {
                let r = eb(t, !1);
                e = r.values;
                let a = _.cu(eI)
                    .filter((e) => !r.results[e].success)
                    .map((e) => {
                        var n;
                        return (null !== (n = t.options) && void 0 !== n ? n : []).find((t) => t.name === e);
                    });
                for (let e of t.options) !e.required || e.name in r.values || (g.Q.insertCommandOption(eI, e), a.push(e));
                if (a.length > 0) {
                    var n, i;
                    let e = a[0];
                    g.Q.selectCommandOption(eI, e.name),
                        f.S.dispatch(O.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }),
                        (0, l.yw)(O.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == t ? void 0 : t.applicationId,
                            command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                            argument_type: o.jw[null !== (i = null == e ? void 0 : e.type) && void 0 !== i ? i : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                    return;
                }
            }
            null == z ||
                z(
                    (0, m.sk)(E.bN.richValue(eI), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    t,
                    e
                );
        }, [x.id, eI, z, eb, $]);
    (0, I.Z)(t, eI, x, eT), (0, S.Z)(eI, e_, F);
    let { handleKeyDown: eS, handleKeyUp: eA } = (0, b.Z)({
            editor: eI,
            channel: x,
            disableEnterToSubmit: en,
            onKeyDown: H,
            onKeyUp: Y,
            onTab: W,
            onEnter: K,
            allowNewLines: ei,
            submit: eT,
            hideAutocomplete: Q,
            moveSelection: X
        }),
        { handlePaste: eN, handleGlobalPaste: eC } = (0, T.Z)(eI, eg, Z),
        eR = r.useCallback(
            (e) => {
                null == q || q();
            },
            [q]
        ),
        eO = r.useCallback(
            (e) => {
                e !== ep.current ? em.current && (null == B || B(null, (0, m.sk)(e, { mode: 'raw' }), e)) : em.current && q();
            },
            [q, B]
        );
    r.useLayoutEffect(() => {
        eh.current && ((ep.current = n), eE(eI, 'parent', { value: n }));
    }, [eI, n, eE]),
        r.useEffect(() => {
            let e = () => {
                var e;
                let t = null !== (e = u.Z.getActiveCommand(x.id)) && void 0 !== e ? e : null;
                null !== t && null != t.options && eb(t, !0);
            };
            return c.Z.addChangeListener(e), () => c.Z.removeChangeListener(e);
        }, [x, eI, eb]);
    let eD = r.useCallback((e, t) => (0, v.Z)(e, t), []),
        ex = r.useCallback((e) => (0, C.Z)(eI, e, x.id), [x.id, eI]),
        eL = r.useCallback((e) => (0, R.Z)(e), []);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.d9, {
                event: O.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eC
            }),
            (0, i.jsx)('div', {
                ref: e_,
                className: s()(L, D.slateContainer),
                children: (0, i.jsx)(h.Z, {
                    id: P,
                    editor: eI,
                    channelId: x.id,
                    guildId: x.guild_id,
                    className: s()(D.slateTextArea, G),
                    placeholder: k,
                    readOnly: eg,
                    spellCheck: J,
                    autoFocus: !et,
                    canFocus: !w,
                    onChange: eO,
                    onFocus: V,
                    onBlur: j,
                    onClick: eR,
                    onPaste: eN,
                    onKeyDown: eS,
                    onKeyUp: eA,
                    decorateExtra: eD,
                    renderExtraElement: ex,
                    renderExtraLeaf: eL,
                    'aria-owns': er,
                    'aria-haspopup': es,
                    'aria-expanded': ea,
                    'aria-activedescendant': eo,
                    'aria-controls': el,
                    'aria-labelledby': ed,
                    'aria-describedby': ec,
                    'aria-invalid': eu,
                    'aria-autocomplete': ef,
                    'aria-required': U
                })
            })
        ]
    });
});
