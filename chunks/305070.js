"use strict";
n.d(t, { A: () => B });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(837381),
    o = n(17928),
    d = n(689175),
    c = n(623646),
    u = n(811024),
    _ = n(933958),
    E = n(969151),
    A = n(659280),
    h = n(579940),
    I = n(915089),
    f = n(892462),
    p = n(750506),
    T = n(513609),
    m = n(71393),
    g = n(597184),
    S = n(105330),
    N = n(265431),
    C = n(459016),
    O = n(861382),
    R = n(355622),
    L = n(820066),
    y = n(696451),
    D = n(576705),
    v = n(351906),
    b = n(287809),
    M = n(31498),
    P = n(887129),
    U = n(741918),
    w = n(267102),
    G = n(652215),
    x = n(307731);
let k = new Map([["thread", new Set(["name"])]]);
var F = n(5867),
    V = n(175916);
let B = r.forwardRef(function (e, t) {
    let { channel: n, type: a, editorHeight: B, onVisibilityChange: H, editorScrollerRef: j, barsHeight: W } = e,
        Y = (0, I.GV)(),
        K = (0, o.bG)([m.A], () => m.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        $ = r.useRef(null),
        [z, q, Z] = (function (e, t, n) {
            let { channel: i, type: a } = e,
                [s, l] = r.useState(() => (0, M.Ur)()),
                d = (0, N.A)(),
                c = (0, o.bG)([y.Ay, b.default], () => {
                    let e = b.default.getCurrentUser();
                    return (null != i.guild_id && null != e ? y.Ay.getMember(i.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: u, hidePersonalInformation: _ } = (0, o.cf)(
                    [D.A, v.A],
                    () => ({
                        canMentionEveryone:
                            i.isPrivate() || c || a === R.oU.RULES_INPUT || D.A.can(G.xBc.MENTION_EVERYONE, i),
                        hidePersonalInformation: v.A.hidePersonalInformation,
                    }),
                    [i, a, c],
                ),
                { activeCommand: E, activeCommandOption: A } = (0, o.cf)([O.A], () => ({
                    activeCommand: O.A.getActiveCommand(i.id),
                    activeCommandOption: O.A.getActiveOption(i.id),
                })),
                h = r.useMemo(
                    () =>
                        E?.untranslatedName != null &&
                        A?.name != null &&
                        (k.get(E.untranslatedName)?.has(A.name) ?? !1),
                    [E?.untranslatedName, A?.name],
                ),
                I = (function (e) {
                    let { navId: t, scrollerRef: n, state: i, onFocus: a } = e,
                        { renderWindow: s } = r.useContext(w.Ay);
                    function l(e, t, r) {
                        if ((n.current?.scrollToTop(), e && null != i.query)) {
                            let e = i.query.typeInfo.focusMode,
                                n =
                                    e !== g.e.MANUAL &&
                                    (e !== g.e.AUTO_WHEN_FILTERED || 0 !== i.query.queryText.length);
                            i.isVisible && (!0 !== t || !1 !== n) && !0 !== r
                                ? (d.setFocus("0"), a?.(0))
                                : (d.setFocus(null), a?.(null));
                        }
                    }
                    function o(e) {
                        if ((n.current?.scrollToBottom(), e && null != i.query && i.query.resultCount > 0)) {
                            let e = i.query.resultCount - 1;
                            d.setFocus(e.toString()), a?.(e);
                        }
                    }
                    let d = (0, P.Ay)({
                            id: t,
                            isEnabled: i.isVisible,
                            orientation: U.Gl.VERTICAL,
                            useVirtualFocus: !0,
                            setFocus: function (e, t) {
                                let i = s.document.querySelector(e);
                                null != i && n.current?.scrollIntoViewNode({ node: i }), a?.(+t);
                            },
                            onNavigateNextAtEnd: () => l(!0),
                            onNavigatePreviousAtStart: () => o(!0),
                            scrollToStart: () => (l(!1, !1), Promise.resolve()),
                            scrollToEnd: () => (o(!1), Promise.resolve()),
                        }),
                        c = r.useRef(l);
                    return (
                        r.useEffect(() => {
                            c.current = l;
                        }),
                        r.useEffect(() => {
                            c.current(!0, !0, i.isInitialAfterError);
                        }, [i.query?.type, i.query?.queryText, i.query?.isLoading, i.isVisible, i.isInitialAfterError]),
                        d
                    );
                })({ navId: "channel-autocomplete", scrollerRef: n, state: s, onFocus: (e) => S.setSelectedIndex(e) }),
                f = e.editorRef.current?.getCurrentWord(),
                p = e.editorRef.current?.getSlateEditor(),
                T = null;
            null != p && (T = L.VW.getSelectedParentOfType(p, M.mk)?.[0] ?? null);
            let m = {
                    ...e,
                    navigator: I,
                    activeCommand: E,
                    activeCommandOption: A,
                    activeInlineAutocompleteInput: T,
                    canMentionUsers: a.users?.allowMentioning ?? !1,
                    canMentionEveryone: u,
                    hidePersonalInformation: _,
                    hideMentionDescription: a === R.oU.RULES_INPUT,
                    emojiIntention:
                        a === R.oU.RULES_INPUT
                            ? x.EmojiIntention.COMMUNITY_CONTENT
                            : h
                              ? x.EmojiIntention.NO_CUSTOM_EMOJI
                              : x.EmojiIntention.CHAT,
                    currentWord: f?.word ?? "",
                    currentWordIsAtStart: f?.isAtStart === !0,
                    optionText:
                        null != A
                            ? (0, C.getString)(
                                  { [A.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                                  A.name,
                              )
                            : "",
                },
                [S] = r.useState(() => new M.Ay(m));
            return (
                r.useEffect(() => {
                    S.updateProps(m);
                }),
                r.useImperativeHandle(t, () => S, [S]),
                r.useEffect(() => {
                    function e(e) {
                        return l(e);
                    }
                    return (
                        S.on("change", e),
                        S.on("update", d),
                        () => {
                            S.off("change", e), S.off("update", d);
                        }
                    );
                }, [d, S]),
                r.useEffect(() => {
                    let e = s.query?.typeInfo.stores;
                    if (null != e) {
                        function t() {
                            return S.queryResults();
                        }
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [S, s.query?.typeInfo]),
                [s, S, I]
            );
        })({ ...e, guild: K }, t, $),
        X = a.autocomplete?.forceChatLayer ? T.Ay : p.Ay,
        Q = (0, A.aI)(z.selectedIndex);
    (0, h.gf)(Y, z.isVisible, Q);
    let J = (0, S.l)({ editorHeight: B, type: a, state: z }),
        ee = (0, o.bG)([_.Ay], () => {
            let e = _.Ay.getSelfEmbeddedActivityForChannel(n.id),
                t = _.Ay.getActivityPanelMode();
            return (0, u.AX)(n) && null != e && (0, E.H)(e.location) === n.id && t === F.Gd.PANEL;
        }, [n]),
        et = r.useMemo(
            () =>
                J?.top == null && J?.left == null && J?.bottom == null && J?.right == null ? "" : String(Date.now()),
            [J?.top, J?.left, J?.bottom, J?.right],
        );
    if (
        (r.useEffect(() => {
            H(z.isVisible);
        }, [H, z.isVisible]),
        !z.isVisible || null == z.query || void 0 === J)
    )
        return null;
    let en =
        z.query.typeInfo.renderResults({
            results: z.query.results,
            selectedIndex: z.selectedIndex,
            channel: n,
            guild: K,
            query: z.query.queryText,
            options: z.query.options,
            onHover: (e) => q.onResultHover(e),
            onClick: (e) => q.onResultClick(e),
        }) ?? null;
    if (null == en) return null;
    let ei = { [V.pK]: null == J, [V.YB]: null != J, [V.sQ]: null == J && "bottom" === e.position, [V.mO]: ee },
        er = (0, f._)("channel autocomplete"),
        ea = z.query?.type === g.DB.MENTIONS,
        es = er.enabled && er.combineMentionAutocomplete && ea ? 670 : 490;
    null != J && (es = a.autocomplete?.small ? 200 : z.query?.type === g.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let el = Math.max(B, j?.current?.clientHeight ?? 0),
        eo = Math.min(0.5 * window.innerHeight, el);
    es = Math.min(window.innerHeight - 120 - eo - (W ?? 0), es);
    let ed = (0, i.jsx)(A.Ay, {
        id: Y,
        className: s()(V.nx, ei),
        innerClassName: V.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsx)(l.hD, {
            navigator: Z,
            children: (0, i.jsx)(l.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, i.jsx)(d.Ch, {
                        id: Y,
                        ref: (e) => {
                            (t.current = e?.getScrollerNode() ?? null), ($.current = e);
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: V.XG,
                        style: { maxHeight: es },
                        role: "listbox",
                        "aria-labelledby": (0, A.Sz)(Y),
                        children: en,
                    });
                },
            }),
        }),
    });
    return null != J
        ? (0, i.jsx)(X, {
              children: (0, i.jsx)(c.Q, {
                  targetRef: e.targetRef,
                  overrideTargetRect: J,
                  positionKey: et,
                  position: e.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => ed,
              }),
          })
        : ed;
});
