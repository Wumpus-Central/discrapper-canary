n.d(t, { A: () => W });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(837381),
    o = n(17928),
    u = n(689175),
    c = n(623646),
    d = n(811024),
    h = n(933958),
    m = n(969151),
    p = n(659280),
    f = n(579940),
    g = n(915089),
    x = n(750506),
    S = n(513609),
    E = n(71393),
    y = n(597184),
    C = n(105330),
    A = n(265431),
    b = n(459016),
    I = n(861382),
    v = n(355622),
    N = n(820066),
    T = n(696451),
    j = n(576705),
    k = n(351906),
    _ = n(287809),
    R = n(31498),
    w = n(887129),
    O = n(741918),
    L = n(267102),
    P = n(652215),
    M = n(307731);
let D = new Map([["thread", new Set(["name"])]]);
var V = n(5867),
    U = n(940169);
let W = i.forwardRef(function (e, t) {
    let { channel: n, type: r, editorHeight: W, onVisibilityChange: F, editorScrollerRef: B, barsHeight: K } = e,
        G = (0, g.GV)(),
        H = (0, o.bG)([E.A], () => E.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        z = i.useRef(null),
        [q, $, Q] = (function (e, t, n) {
            let { channel: l, type: r } = e,
                [s, a] = i.useState(() => (0, R.Ur)()),
                u = (0, A.A)(),
                c = (0, o.bG)([T.Ay, _.default], () => {
                    let e = _.default.getCurrentUser();
                    return (null != l.guild_id && null != e ? T.Ay.getMember(l.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: d, hidePersonalInformation: h } = (0, o.cf)(
                    [j.A, k.A],
                    () => ({
                        canMentionEveryone:
                            l.isPrivate() || c || r === v.oU.RULES_INPUT || j.A.can(P.xBc.MENTION_EVERYONE, l),
                        hidePersonalInformation: k.A.hidePersonalInformation,
                    }),
                    [l, r, c],
                ),
                { activeCommand: m, activeCommandOption: p } = (0, o.cf)([I.A], () => ({
                    activeCommand: I.A.getActiveCommand(l.id),
                    activeCommandOption: I.A.getActiveOption(l.id),
                })),
                f = i.useMemo(
                    () =>
                        m?.untranslatedName != null &&
                        p?.name != null &&
                        (D.get(m.untranslatedName)?.has(p.name) ?? !1),
                    [m?.untranslatedName, p?.name],
                ),
                g = (function (e) {
                    let { navId: t, scrollerRef: n, state: l, onFocus: r } = e,
                        { renderWindow: s } = i.useContext(L.Ay);
                    function a(e, t, i) {
                        if ((n.current?.scrollToTop(), e && null != l.query)) {
                            let e = l.query.typeInfo.focusMode,
                                n =
                                    e !== y.e.MANUAL &&
                                    (e !== y.e.AUTO_WHEN_FILTERED || 0 !== l.query.queryText.length);
                            l.isVisible && (!0 !== t || !1 !== n) && !0 !== i
                                ? (u.setFocus("0"), r?.(0))
                                : (u.setFocus(null), r?.(null));
                        }
                    }
                    function o(e) {
                        if ((n.current?.scrollToBottom(), e && null != l.query && l.query.resultCount > 0)) {
                            let e = l.query.resultCount - 1;
                            (u.setFocus(e.toString()), r?.(e));
                        }
                    }
                    let u = (0, w.Ay)({
                            id: t,
                            isEnabled: l.isVisible,
                            orientation: O.Gl.VERTICAL,
                            useVirtualFocus: !0,
                            setFocus: function (e, t) {
                                let l = s.document.querySelector(e);
                                (null != l && n.current?.scrollIntoViewNode({ node: l }), r?.(+t));
                            },
                            onNavigateNextAtEnd: () => a(!0),
                            onNavigatePreviousAtStart: () => o(!0),
                            scrollToStart: () => (a(!1, !1), Promise.resolve()),
                            scrollToEnd: () => (o(!1), Promise.resolve()),
                        }),
                        c = i.useRef(a);
                    return (
                        i.useEffect(() => {
                            c.current = a;
                        }),
                        i.useEffect(() => {
                            c.current(!0, !0, l.isInitialAfterError);
                        }, [l.query?.type, l.query?.queryText, l.query?.isLoading, l.isVisible, l.isInitialAfterError]),
                        u
                    );
                })({ navId: "channel-autocomplete", scrollerRef: n, state: s, onFocus: (e) => V.setSelectedIndex(e) }),
                x = e.editorRef.current?.getCurrentWord(),
                S = e.editorRef.current?.getSlateEditor(),
                E = null;
            null != S && (E = N.VW.getSelectedParentOfType(S, R.mk)?.[0] ?? null);
            let C = {
                    ...e,
                    navigator: g,
                    activeCommand: m,
                    activeCommandOption: p,
                    activeInlineAutocompleteInput: E,
                    canMentionUsers: r.users?.allowMentioning ?? !1,
                    canMentionEveryone: d,
                    hidePersonalInformation: h,
                    hideMentionDescription: r === v.oU.RULES_INPUT,
                    emojiIntention:
                        r === v.oU.RULES_INPUT
                            ? M.EmojiIntention.COMMUNITY_CONTENT
                            : f
                              ? M.EmojiIntention.NO_CUSTOM_EMOJI
                              : M.EmojiIntention.CHAT,
                    currentWord: x?.word ?? "",
                    currentWordIsAtStart: x?.isAtStart === !0,
                    optionText:
                        null != p
                            ? (0, b.getString)(
                                  { [p.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                                  p.name,
                              )
                            : "",
                },
                [V] = i.useState(() => new R.Ay(C));
            return (
                i.useEffect(() => {
                    V.updateProps(C);
                }),
                i.useImperativeHandle(t, () => V, [V]),
                i.useEffect(() => {
                    function e(e) {
                        return a(e);
                    }
                    return (
                        V.on("change", e),
                        V.on("update", u),
                        () => {
                            (V.off("change", e), V.off("update", u));
                        }
                    );
                }, [u, V]),
                i.useEffect(() => {
                    let e = s.query?.typeInfo.stores;
                    if (null != e) {
                        function t() {
                            return V.queryResults();
                        }
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [V, s.query?.typeInfo]),
                [s, V, g]
            );
        })({ ...e, guild: H }, t, z),
        Z = r.autocomplete?.forceChatLayer ? S.Ay : x.Ay,
        X = (0, p.aI)(q.selectedIndex);
    (0, f.gf)(G, q.isVisible, X);
    let Y = (0, C.l)({ editorHeight: W, type: r, state: q }),
        J = (0, o.bG)(
            [h.Ay],
            () => {
                let e = h.Ay.getSelfEmbeddedActivityForChannel(n.id),
                    t = h.Ay.getActivityPanelMode();
                return (0, d.AX)(n) && null != e && (0, m.H)(e.location) === n.id && t === V.Gd.PANEL;
            },
            [n],
        ),
        ee = i.useMemo(
            () =>
                Y?.top == null && Y?.left == null && Y?.bottom == null && Y?.right == null ? "" : String(Date.now()),
            [Y?.top, Y?.left, Y?.bottom, Y?.right],
        );
    if (
        (i.useEffect(() => {
            F(q.isVisible);
        }, [F, q.isVisible]),
        !q.isVisible || null == q.query || void 0 === Y)
    )
        return null;
    let et =
        q.query.typeInfo.renderResults({
            results: q.query.results,
            selectedIndex: q.selectedIndex,
            channel: n,
            guild: H,
            query: q.query.queryText,
            options: q.query.options,
            onHover: (e) => $.onResultHover(e),
            onClick: (e) => $.onResultClick(e),
        }) ?? null;
    if (null == et) return null;
    let en = { [U.pK]: null == Y, [U.YB]: null != Y, [U.sQ]: null == Y && "bottom" === e.position, [U.mO]: J },
        el = 490;
    null != Y && (el = r.autocomplete?.small ? 200 : q.query?.type === y.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let ei = Math.max(W, B?.current?.clientHeight ?? 0),
        er = Math.min(0.5 * window.innerHeight, ei);
    el = Math.min(window.innerHeight - 120 - er - (K ?? 0), el);
    let es = (0, l.jsx)(p.Ay, {
        id: G,
        className: s()(U.nx, en),
        innerClassName: U.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, l.jsx)(a.hD, {
            navigator: Q,
            children: (0, l.jsx)(a.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, l.jsx)(u.Ch, {
                        id: G,
                        ref: (e) => {
                            ((t.current = e?.getScrollerNode() ?? null), (z.current = e));
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: U.XG,
                        style: { maxHeight: el },
                        role: "listbox",
                        "aria-labelledby": (0, p.Sz)(G),
                        children: et,
                    });
                },
            }),
        }),
    });
    return null != Y
        ? (0, l.jsx)(Z, {
              children: (0, l.jsx)(c.Q, {
                  targetRef: e.targetRef,
                  overrideTargetRect: Y,
                  positionKey: ee,
                  position: e.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => es,
              }),
          })
        : es;
});
