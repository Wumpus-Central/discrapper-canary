var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(911969),
    d = r(367907),
    f = r(998698),
    p = r(117530),
    h = r(459273),
    _ = r(585483),
    m = r(91313),
    g = r(53529),
    E = r(288897),
    v = r(925994),
    y = r(436660),
    b = r(887490),
    I = r(194625),
    T = r(77188),
    S = r(230554),
    A = r(780748),
    C = r(464581),
    N = r(732659),
    R = r(86724),
    O = r(847302),
    D = r(657198),
    x = r(321127),
    L = r(981631),
    w = r(506886);
n.Z = s.forwardRef(function (e, n) {
    let { value: r, type: i, channel: a, className: l, id: P, disabled: M, submitting: k, placeholder: U, required: B, textAreaPaddingClassName: G, onChange: Z, onPaste: F, onResize: V, onFocus: j, onBlur: H, onKeyDown: Y, onKeyUp: W, onTab: K, onEnter: z, onSubmit: q, maybeShowAutocomplete: Q, hideAutocomplete: X, moveSelection: J, spellcheckEnabled: $, canUseCommands: ee, canOnlyUseTextCommands: et, disableAutoFocus: en, disableEnterToSubmit: er, allowNewLines: ei, 'aria-owns': ea, 'aria-expanded': eo, 'aria-haspopup': es, 'aria-activedescendant': el, 'aria-controls': eu, 'aria-invalid': ec, 'aria-describedby': ed, 'aria-labelledby': ef, 'aria-autocomplete': ep } = e,
        eh = s.useRef(null),
        e_ = s.useRef(null),
        em = s.useRef(!0),
        eg = s.useRef(!0),
        eE = M || k,
        ev = s.useCallback(
            (e, n, r) => {
                var i;
                let { value: o, selection: s } = r,
                    l = b.bN.richValue(e),
                    u = e.selection,
                    c = !1;
                if (void 0 !== o && o !== l) {
                    if (((e.children = o), 'parent' === n && !e.previewMarkdown)) {
                        try {
                            (e.previewMarkdown = !0), (0, O.KH)(e, a.guild_id, a.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, O.KH)(e, a.guild_id, a.id), (s = void 0);
                    }
                    'undo' !== n && void 0 !== o && o !== l && g.T.insertEntry(e, 'other', !1, l, u), (c = !0);
                }
                if ((null != s && !b.Ew.isValid(e, s) && (s = void 0), (c || !b.Ew.isValid(e, u)) && void 0 === s)) {
                    let n = b.bN.end(e, []);
                    s = {
                        anchor: n,
                        focus: n
                    };
                }
                if (null != s && !b.Ew.equals(s, u)) {
                    e.selection = s;
                    let n = g.T.currentEntry(e);
                    null != n && (n.selection = s), (c = !0);
                }
                let d = m.cr(e);
                if (
                    (null != d &&
                        d[0].command.id !== (null === (i = f.Z.getActiveCommand(a.id)) || void 0 === i ? void 0 : i.id) &&
                        g.T.withMergedEntry(e, () => {
                            (0, R.L)(e, a.id, null, !0);
                        }),
                    c)
                ) {
                    if ((!en && b.bN.focus(e), 'parent' === n))
                        try {
                            (eg.current = !1), e.onChange();
                        } finally {
                            eg.current = !0;
                        }
                    else e.onChange();
                }
            },
            [a.id, a.guild_id, en]
        ),
        ey = s.useCallback(() => {
            em.current = !1;
        }, []),
        eb = s.useCallback(() => {
            em.current = !0;
        }, []),
        eI = (0, T.Z)({
            channel: a,
            chatInputType: i,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            onChangeStart: ey,
            onChangeEnd: eb,
            updateState: ev
        }),
        eT = s.useCallback(
            (e, n) => {
                let r = m.tM(eI, e, a.id),
                    i = m.lk(e, a.guild_id, a.id, r, n);
                return {
                    values: r,
                    results: i
                };
            },
            [a.guild_id, a.id, eI]
        ),
        eS = s.useCallback(() => {
            let e;
            let n = ee ? f.Z.getActiveCommand(a.id) : null;
            if (null != n && null != n.options) {
                let a = eT(n, !1);
                e = a.values;
                let o = m
                    .cu(eI)
                    .filter((e) => !a.results[e].success)
                    .map((e) => {
                        var r;
                        return (null !== (r = n.options) && void 0 !== r ? r : []).find((n) => n.name === e);
                    });
                for (let e of n.options) e.required && !(e.name in a.values) && (y.Q.insertCommandOption(eI, e), o.push(e));
                if (o.length > 0) {
                    var r, i;
                    let e = o[0];
                    y.Q.selectCommandOption(eI, e.name),
                        _.S.dispatch(L.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }),
                        (0, d.yw)(L.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == n ? void 0 : n.applicationId,
                            command_id: null == n ? void 0 : null === (r = n.rootCommand) || void 0 === r ? void 0 : r.id,
                            argument_type: c.jw[null !== (i = null == e ? void 0 : e.type) && void 0 !== i ? i : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                    return;
                }
            }
            null == q ||
                q(
                    (0, v.sk)(b.bN.richValue(eI), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    n,
                    e
                );
        }, [a.id, eI, q, eT, ee]);
    (0, S.Z)(n, eI, a, eS), (0, N.Z)(eI, eh, V);
    let { handleKeyDown: eA, handleKeyUp: eC } = (0, A.Z)({
            editor: eI,
            channel: a,
            disableEnterToSubmit: er,
            onKeyDown: Y,
            onKeyUp: W,
            onTab: K,
            onEnter: z,
            allowNewLines: ei,
            submit: eS,
            hideAutocomplete: X,
            moveSelection: J
        }),
        { handlePaste: eN, handleGlobalPaste: eR } = (0, C.Z)(eI, eE, F),
        eO = s.useCallback(
            (e) => {
                null == Q || Q();
            },
            [Q]
        ),
        eD = s.useCallback(
            (e) => {
                e !== e_.current ? eg.current && (null == Z || Z(null, (0, v.sk)(e, { mode: 'raw' }), e)) : eg.current && Q();
            },
            [Q, Z]
        );
    s.useLayoutEffect(() => {
        em.current && ((e_.current = r), ev(eI, 'parent', { value: r }));
    }, [eI, r, ev]),
        s.useEffect(() => {
            let e = () => {
                var e;
                let n = null !== (e = f.Z.getActiveCommand(a.id)) && void 0 !== e ? e : null;
                null !== n && null != n.options && eT(n, !0);
            };
            return p.Z.addChangeListener(e), () => p.Z.removeChangeListener(e);
        }, [a, eI, eT]);
    let ex = s.useCallback((e, n) => (0, I.Z)(e, n), []),
        eL = s.useCallback((e) => (0, D.Z)(eI, e, a.id), [a.id, eI]),
        ew = s.useCallback((e) => (0, x.Z)(e), []);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            (0, o.jsx)(h.d9, {
                event: L.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eR
            }),
            (0, o.jsx)('div', {
                ref: eh,
                className: u()(l, w.slateContainer),
                children: (0, o.jsx)(E.Z, {
                    id: P,
                    editor: eI,
                    channelId: a.id,
                    guildId: a.guild_id,
                    className: u()(w.slateTextArea, G),
                    placeholder: U,
                    readOnly: eE,
                    spellCheck: $,
                    autoFocus: !en,
                    canFocus: !M,
                    onChange: eD,
                    onFocus: j,
                    onBlur: H,
                    onClick: eO,
                    onPaste: eN,
                    onKeyDown: eA,
                    onKeyUp: eC,
                    decorateExtra: ex,
                    renderExtraElement: eL,
                    renderExtraLeaf: ew,
                    'aria-owns': ea,
                    'aria-haspopup': es,
                    'aria-expanded': eo,
                    'aria-activedescendant': el,
                    'aria-controls': eu,
                    'aria-labelledby': ef,
                    'aria-describedby': ed,
                    'aria-invalid': ec,
                    'aria-autocomplete': ep,
                    'aria-required': B
                })
            })
        ]
    });
});
