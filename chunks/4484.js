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
    p = n(91313),
    _ = n(53529),
    h = n(288897),
    m = n(925994),
    g = n(436660),
    E = n(887490),
    v = n(194625),
    b = n(77188),
    y = n(230554),
    O = n(780748),
    S = n(464581),
    I = n(732659),
    T = n(86724),
    N = n(847302),
    A = n(657198),
    C = n(321127),
    R = n(981631),
    P = n(74883);
let w = i.forwardRef(function (e, t) {
    let { value: n, type: o, channel: w, className: D, id: x, disabled: L, submitting: M, placeholder: k, required: j, textAreaPaddingClassName: U, onChange: G, onPaste: B, onResize: Z, onFocus: F, onBlur: V, onKeyDown: H, onKeyUp: W, onTab: Y, onEnter: K, onSubmit: z, maybeShowAutocomplete: q, hideAutocomplete: Q, moveSelection: X, spellcheckEnabled: J, canUseCommands: $, canOnlyUseTextCommands: ee, disableAutoFocus: et, disableEnterToSubmit: en, allowNewLines: er, 'aria-owns': ei, 'aria-expanded': eo, 'aria-haspopup': ea, 'aria-activedescendant': es, 'aria-controls': el, 'aria-invalid': ec, 'aria-describedby': eu, 'aria-labelledby': ed, 'aria-autocomplete': ef } = e,
        ep = i.useRef(null),
        e_ = i.useRef(null),
        eh = i.useRef(!0),
        em = i.useRef(!0),
        eg = L || M,
        eE = i.useCallback(
            (e, t, n) => {
                var r;
                let { value: i, selection: o } = n,
                    a = E.bN.richValue(e),
                    s = e.selection,
                    l = !1;
                if (void 0 !== i && i !== a) {
                    if (((e.children = i), 'parent' === t && !e.previewMarkdown)) {
                        try {
                            (e.previewMarkdown = !0), (0, N.KH)(e, w.guild_id, w.id);
                        } finally {
                            e.previewMarkdown = !1;
                        }
                        (0, N.KH)(e, w.guild_id, w.id), (o = void 0);
                    }
                    'undo' !== t && void 0 !== i && i !== a && _.T.insertEntry(e, 'other', !1, a, s), (l = !0);
                }
                if ((null == o || E.Ew.isValid(e, o) || (o = void 0), (l || !E.Ew.isValid(e, s)) && void 0 === o)) {
                    let t = E.bN.end(e, []);
                    o = {
                        anchor: t,
                        focus: t
                    };
                }
                if (null != o && !E.Ew.equals(o, s)) {
                    e.selection = o;
                    let t = _.T.currentEntry(e);
                    null != t && (t.selection = o), (l = !0);
                }
                let u = p.cr(e);
                if (
                    (null != u &&
                        u[0].command.id !== (null === (r = c.Z.getActiveCommand(w.id)) || void 0 === r ? void 0 : r.id) &&
                        _.T.withMergedEntry(e, () => {
                            (0, T.L)(e, w.id, null, !0);
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
            [w.id, w.guild_id, et]
        ),
        ev = i.useCallback(() => {
            eh.current = !1;
        }, []),
        eb = i.useCallback(() => {
            eh.current = !0;
        }, []),
        ey = (0, b.Z)({
            channel: w,
            chatInputType: o,
            canUseCommands: $,
            canOnlyUseTextCommands: ee,
            onChangeStart: ev,
            onChangeEnd: eb,
            updateState: eE
        }),
        eO = i.useCallback(
            (e, t) => {
                let n = p.tM(ey, e, w.id),
                    r = p.lk(e, w.guild_id, w.id, n, t);
                return {
                    values: n,
                    results: r
                };
            },
            [w.guild_id, w.id, ey]
        ),
        eS = i.useCallback(() => {
            let e;
            let t = $ ? c.Z.getActiveCommand(w.id) : null;
            if (null != t && null != t.options) {
                let i = eO(t, !1);
                e = i.values;
                let o = p
                    .cu(ey)
                    .filter((e) => !i.results[e].success)
                    .map((e) => {
                        var n;
                        return (null !== (n = t.options) && void 0 !== n ? n : []).find((t) => t.name === e);
                    });
                for (let e of t.options) !e.required || e.name in i.values || (g.Q.insertCommandOption(ey, e), o.push(e));
                if (o.length > 0) {
                    var n, r;
                    let e = o[0];
                    g.Q.selectCommandOption(ey, e.name),
                        f.S.dispatch(R.CkL.SHAKE_APP, {
                            duration: 200,
                            intensity: 2
                        }),
                        (0, l.yw)(R.rMx.APPLICATION_COMMAND_VALIDATION_FAILED, {
                            application_id: null == t ? void 0 : t.applicationId,
                            command_id: null == t ? void 0 : null === (n = t.rootCommand) || void 0 === n ? void 0 : n.id,
                            argument_type: s.jw[null !== (r = null == e ? void 0 : e.type) && void 0 !== r ? r : 3],
                            is_required: null == e ? void 0 : e.required
                        });
                    return;
                }
            }
            null == z ||
                z(
                    (0, m.sk)(E.bN.richValue(ey), {
                        mode: 'raw',
                        ignoreTrailingEmptyNodes: !0
                    }),
                    t,
                    e
                );
        }, [w.id, ey, z, eO, $]);
    (0, y.Z)(t, ey, w, eS), (0, I.Z)(ey, ep, Z);
    let { handleKeyDown: eI, handleKeyUp: eT } = (0, O.Z)({
            editor: ey,
            channel: w,
            disableEnterToSubmit: en,
            onKeyDown: H,
            onKeyUp: W,
            onTab: Y,
            onEnter: K,
            allowNewLines: er,
            submit: eS,
            hideAutocomplete: Q,
            moveSelection: X
        }),
        { handlePaste: eN, handleGlobalPaste: eA } = (0, S.Z)(ey, eg, B),
        eC = i.useCallback(
            (e) => {
                null == q || q();
            },
            [q]
        ),
        eR = i.useCallback(
            (e) => {
                e !== e_.current ? em.current && (null == G || G(null, (0, m.sk)(e, { mode: 'raw' }), e)) : em.current && q();
            },
            [q, G]
        );
    i.useLayoutEffect(() => {
        eh.current && ((e_.current = n), eE(ey, 'parent', { value: n }));
    }, [ey, n, eE]),
        i.useEffect(() => {
            let e = () => {
                var e;
                let t = null !== (e = c.Z.getActiveCommand(w.id)) && void 0 !== e ? e : null;
                null !== t && null != t.options && eO(t, !0);
            };
            return u.Z.addChangeListener(e), () => u.Z.removeChangeListener(e);
        }, [w, ey, eO]);
    let eP = i.useCallback((e, t) => (0, v.Z)(e, t), []),
        ew = i.useCallback((e) => (0, A.Z)(ey, e, w.id), [w.id, ey]),
        eD = i.useCallback((e) => (0, C.Z)(e), []);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.d9, {
                event: R.CkL.GLOBAL_CLIPBOARD_PASTE,
                handler: eA
            }),
            (0, r.jsx)('div', {
                ref: ep,
                className: a()(D, P.slateContainer),
                children: (0, r.jsx)(h.Z, {
                    id: x,
                    editor: ey,
                    channelId: w.id,
                    guildId: w.guild_id,
                    className: a()(P.slateTextArea, U),
                    placeholder: k,
                    readOnly: eg,
                    spellCheck: J,
                    autoFocus: !et,
                    canFocus: !L,
                    onChange: eR,
                    onFocus: F,
                    onBlur: V,
                    onClick: eC,
                    onPaste: eN,
                    onKeyDown: eI,
                    onKeyUp: eT,
                    decorateExtra: eP,
                    renderExtraElement: ew,
                    renderExtraLeaf: eD,
                    'aria-owns': ei,
                    'aria-haspopup': ea,
                    'aria-expanded': eo,
                    'aria-activedescendant': es,
                    'aria-controls': el,
                    'aria-labelledby': ed,
                    'aria-describedby': eu,
                    'aria-invalid': ec,
                    'aria-autocomplete': ef,
                    'aria-required': j
                })
            })
        ]
    });
});
