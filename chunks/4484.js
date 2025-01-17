var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(911969),
    d = r(367907),
    f = r(998698),
    _ = r(117530),
    h = r(459273),
    p = r(585483),
    m = r(91313),
    g = r(53529),
    E = r(288897),
    v = r(925994),
    I = r(436660),
    T = r(887490),
    b = r(194625),
    y = r(77188),
    S = r(230554),
    A = r(780748),
    N = r(464581),
    C = r(732659),
    R = r(86724),
    O = r(847302),
    D = r(657198),
    L = r(321127),
    x = r(981631),
    w = r(506886);
n.Z = o.forwardRef(function (e, n) {
    let { value: r, type: i, channel: a, className: l, id: P, disabled: M, submitting: k, placeholder: U, required: B, textAreaPaddingClassName: G, onChange: Z, onPaste: F, onResize: V, onFocus: j, onBlur: H, onKeyDown: Y, onKeyUp: W, onTab: K, onEnter: z, onSubmit: q, maybeShowAutocomplete: Q, hideAutocomplete: X, moveSelection: J, spellcheckEnabled: $, canUseCommands: ee, canOnlyUseTextCommands: et, disableAutoFocus: en, disableEnterToSubmit: er, allowNewLines: ei, 'aria-owns': ea, 'aria-expanded': es, 'aria-haspopup': eo, 'aria-activedescendant': el, 'aria-controls': eu, 'aria-invalid': ec, 'aria-describedby': ed, 'aria-labelledby': ef, 'aria-autocomplete': e_ } = e,
        eh = o.useRef(null),
        ep = o.useRef(null),
        em = o.useRef(!0),
        eg = o.useRef(!0),
        eE = M || k,
        ev = o.useCallback(
            (e, n, r) => {
                var i;
                let { value: s, selection: o } = r,
                    l = T.bN.richValue(e),
                    u = e.selection,
                    c = !1;
                if (void 0 !== s && s !== l) {
                    if (((e.children = s), 'parent' === n && !e.previewMarkdown)) {
                        try {
                            (e.previewMarkdown = !0), (0, O.KH)(e, a.guild_id, a.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, O.KH)(e, a.guild_id, a.id), (o = void 0);
                    }
                    'undo' !== n && void 0 !== s && s !== l && g.T.insertEntry(e, 'other', !1, l, u), (c = !0);
                }
                if ((null != o && !T.Ew.isValid(e, o) && (o = void 0), (c || !T.Ew.isValid(e, u)) && void 0 === o)) {
                    let n = T.bN.end(e, []);
                    o = {
                        anchor: n,
                        focus: n
                    };
                }
                if (null != o && !T.Ew.equals(o, u)) {
                    e.selection = o;
                    let n = g.T.currentEntry(e);
                    null != n && (n.selection = o), (c = !0);
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
                    if ((!en && T.bN.focus(e), 'parent' === n))
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
        eI = o.useCallback(() => {
            em.current = !1;
        }, []),
        eT = o.useCallback(() => {
            em.current = !0;
        }, []),
        eb = (0, y.Z)({
            channel: a,
            chatInputType: i,
            canUseCommands: ee,
            canOnlyUseTextCommands: et,
            onChangeStart: eI,
            onChangeEnd: eT,
            updateState: ev
        }),
        ey = o.useCallback(
            (e, n) => {
                let r = m.tM(eb, e, a.id),
                    i = m.lk(e, a.guild_id, a.id, r, n);
                return {
                    values: r,
                    results: i
                };
            },
            [a.guild_id, a.id, eb]
        ),
        eS = o.useCallback(() => {
            let e;
            let n = ee ? f.Z.getActiveCommand(a.id) : null;
            if (null != n && null != n.options) {
                let a = ey(n, !1);
                e = a.values;
                let s = m
                    .cu(eb)
                    .filter((e) => !a.results[e].success)
                    .map((e) => {
                        var r;
                        return (null !== (r = n.options) && void 0 !== r ? r : []).find((n) => n.name === e);
                    });
                for (let e of n.options) e.required && !(e.name in a.values) && (I.Q.insertCommandOption(eb, e), s.push(e));
                if (s.length > 0) {
                    var r, i;
                    let e = s[0];
                    I.Q.selectCommandOption(eb, e.name),
                        p.S.dispatch(x.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }),
                        (0, d.yw)(x.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
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
                    (0, v.sk)(T.bN.richValue(eb), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    n,
                    e
                );
        }, [a.id, eb, q, ey, ee]);
    (0, S.Z)(n, eb, a, eS), (0, C.Z)(eb, eh, V);
    let { handleKeyDown: eA, handleKeyUp: eN } = (0, A.Z)({
            editor: eb,
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
        { handlePaste: eC, handleGlobalPaste: eR } = (0, N.Z)(eb, eE, F),
        eO = o.useCallback(
            (e) => {
                null == Q || Q();
            },
            [Q]
        ),
        eD = o.useCallback(
            (e) => {
                e !== ep.current ? eg.current && (null == Z || Z(null, (0, v.sk)(e, { mode: 'raw' }), e)) : eg.current && Q();
            },
            [Q, Z]
        );
    o.useLayoutEffect(() => {
        em.current && ((ep.current = r), ev(eb, 'parent', { value: r }));
    }, [eb, r, ev]),
        o.useEffect(() => {
            let e = () => {
                var e;
                let n = null !== (e = f.Z.getActiveCommand(a.id)) && void 0 !== e ? e : null;
                null !== n && null != n.options && ey(n, !0);
            };
            return _.Z.addChangeListener(e), () => _.Z.removeChangeListener(e);
        }, [a, eb, ey]);
    let eL = o.useCallback((e, n) => (0, b.Z)(e, n), []),
        ex = o.useCallback((e) => (0, D.Z)(eb, e, a.id), [a.id, eb]),
        ew = o.useCallback((e) => (0, L.Z)(e), []);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(h.d9, {
                event: x.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eR
            }),
            (0, s.jsx)('div', {
                ref: eh,
                className: u()(l, w.slateContainer),
                children: (0, s.jsx)(E.Z, {
                    id: P,
                    editor: eb,
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
                    onPaste: eC,
                    onKeyDown: eA,
                    onKeyUp: eN,
                    decorateExtra: eL,
                    renderExtraElement: ex,
                    renderExtraLeaf: ew,
                    'aria-owns': ea,
                    'aria-haspopup': eo,
                    'aria-expanded': es,
                    'aria-activedescendant': el,
                    'aria-controls': eu,
                    'aria-labelledby': ef,
                    'aria-describedby': ed,
                    'aria-invalid': ec,
                    'aria-autocomplete': e_,
                    'aria-required': B
                })
            })
        ]
    });
});
