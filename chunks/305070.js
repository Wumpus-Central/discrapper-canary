"use strict";
n.d(t, { A: () => F });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(17928),
    d = n(689175),
    _ = n(623646),
    u = n(811024),
    c = n(933958),
    E = n(969151),
    h = n(659280),
    m = n(579940),
    f = n(915089),
    g = n(750506),
    p = n(513609),
    A = n(71393),
    I = n(374803),
    T = n(105330),
    S = n(27867),
    N = n(258363),
    C = n(861382),
    R = n(355622),
    O = n(820066),
    y = n(696451),
    v = n(576705),
    D = n(351906),
    L = n(287809),
    b = n(31498),
    w = n(887129),
    P = n(741918),
    k = n(267102),
    M = n(652215),
    U = n(307731);
let x = new Map([["thread", new Set(["name"])]]);
var G = n(5867),
    V = n(122484);
let F = r.forwardRef(function (e, t) {
    let { channel: n, type: s, editorHeight: F, onVisibilityChange: B, editorScrollerRef: H, barsHeight: j } = e,
        W = (0, f.GV)(),
        Y = (0, l.bG)([A.A], () => A.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        K = r.useRef(null),
        [z, $, q] = (function (e, t, n) {
            let { channel: i, type: s } = e,
                [a, o] = r.useState(() => (0, b.Ur)()),
                d = (0, S.A)(),
                _ = (0, l.bG)([y.Ay, L.default], () => {
                    let e = L.default.getCurrentUser();
                    return (null != i.guild_id && null != e ? y.Ay.getMember(i.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: u, hidePersonalInformation: c } = (0, l.cf)(
                    [v.A, D.A],
                    () => ({
                        canMentionEveryone:
                            i.isPrivate() || _ || s === R.oU.RULES_INPUT || v.A.can(M.xBc.MENTION_EVERYONE, i),
                        hidePersonalInformation: D.A.hidePersonalInformation,
                    }),
                    [i, s, _],
                ),
                { activeCommand: E, activeCommandOption: h } = (0, l.cf)([C.A], () => ({
                    activeCommand: C.A.getActiveCommand(i.id),
                    activeCommandOption: C.A.getActiveOption(i.id),
                })),
                m = r.useMemo(
                    () =>
                        E?.untranslatedName != null &&
                        h?.name != null &&
                        (x.get(E.untranslatedName)?.has(h.name) ?? !1),
                    [E?.untranslatedName, h?.name],
                ),
                f = (function (e) {
                    let { navId: t, scrollerRef: n, state: i, onFocus: s } = e,
                        { renderWindow: a } = r.useContext(k.Ay),
                        o = (e, t, r) => {
                            if ((n.current?.scrollToTop(), e && null != i.query)) {
                                let e = i.query.typeInfo.focusMode,
                                    n =
                                        e !== I.e.MANUAL &&
                                        (e !== I.e.AUTO_WHEN_FILTERED || 0 !== i.query.queryText.length);
                                i.isVisible && (!0 !== t || !1 !== n) && !0 !== r
                                    ? (d.setFocus("0"), s?.(0))
                                    : (d.setFocus(null), s?.(null));
                            }
                        },
                        l = (e) => {
                            if ((n.current?.scrollToBottom(), e && null != i.query && i.query.resultCount > 0)) {
                                let e = i.query.resultCount - 1;
                                d.setFocus(e.toString()), s?.(e);
                            }
                        },
                        d = (0, w.Ay)({
                            id: t,
                            isEnabled: i.isVisible,
                            orientation: P.Gl.VERTICAL,
                            useVirtualFocus: !0,
                            setFocus: (e, t) => {
                                let i = a.document.querySelector(e);
                                null != i && n.current?.scrollIntoViewNode({ node: i }), s?.(+t);
                            },
                            onNavigateNextAtEnd: () => o(!0),
                            onNavigatePreviousAtStart: () => l(!0),
                            scrollToStart: () => (o(!1, !1), Promise.resolve()),
                            scrollToEnd: () => (l(!1), Promise.resolve()),
                        }),
                        _ = r.useRef(o);
                    return (
                        r.useEffect(() => {
                            _.current = o;
                        }),
                        r.useEffect(() => {
                            _.current(!0, !0, i.isInitialAfterError);
                        }, [i.query?.type, i.query?.queryText, i.query?.isLoading, i.isVisible, i.isInitialAfterError]),
                        d
                    );
                })({ navId: "channel-autocomplete", scrollerRef: n, state: a, onFocus: (e) => G.setSelectedIndex(e) }),
                g = e.editorRef.current?.getCurrentWord(),
                p = e.editorRef.current?.getSlateEditor(),
                A = null;
            null != p && (A = O.VW.getSelectedParentOfType(p, b.mk)?.[0] ?? null);
            let T = {
                    ...e,
                    navigator: f,
                    activeCommand: E,
                    activeCommandOption: h,
                    activeInlineAutocompleteInput: A,
                    canMentionUsers: s.users?.allowMentioning ?? !1,
                    canMentionEveryone: u,
                    hidePersonalInformation: c,
                    hideMentionDescription: s === R.oU.RULES_INPUT,
                    emojiIntention:
                        s === R.oU.RULES_INPUT
                            ? U.EmojiIntention.COMMUNITY_CONTENT
                            : m
                              ? U.EmojiIntention.NO_CUSTOM_EMOJI
                              : U.EmojiIntention.CHAT,
                    currentWord: g?.word ?? "",
                    currentWordIsAtStart: g?.isAtStart === !0,
                    optionText:
                        null != h
                            ? (0, N.getString)(
                                  { [h.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                                  h.name,
                              )
                            : "",
                },
                [G] = r.useState(() => new b.Ay(T));
            return (
                r.useEffect(() => {
                    G.updateProps(T);
                }),
                r.useImperativeHandle(t, () => G, [G]),
                r.useEffect(() => {
                    let e = (e) => o(e);
                    return (
                        G.on("change", e),
                        G.on("update", d),
                        () => {
                            G.off("change", e), G.off("update", d);
                        }
                    );
                }, [d, G]),
                r.useEffect(() => {
                    let e = a.query?.typeInfo.stores;
                    if (null != e) {
                        let t = () => G.queryResults();
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [G, a.query?.typeInfo]),
                [a, G, f]
            );
        })({ ...e, guild: Y }, t, K),
        X = s.autocomplete?.forceChatLayer ? p.Ay : g.Ay,
        Z = (0, h.aI)(z.selectedIndex);
    (0, m.gf)(W, z.isVisible, Z);
    let Q = (0, T.l)({ editorHeight: F, type: s, state: z }),
        J = (0, l.bG)([c.Ay], () => {
            let e = c.Ay.getSelfEmbeddedActivityForChannel(n.id),
                t = c.Ay.getActivityPanelMode();
            return (0, u.AX)(n) && null != e && (0, E.H)(e.location) === n.id && t === G.Gd.PANEL;
        }, [n]),
        ee = r.useMemo(
            () =>
                Q?.top == null && Q?.left == null && Q?.bottom == null && Q?.right == null ? "" : String(Date.now()),
            [Q?.top, Q?.left, Q?.bottom, Q?.right],
        );
    if (
        (r.useEffect(() => {
            B(z.isVisible);
        }, [B, z.isVisible]),
        !z.isVisible || null == z.query || void 0 === Q)
    )
        return null;
    let et =
        z.query.typeInfo.renderResults({
            results: z.query.results,
            selectedIndex: z.selectedIndex,
            channel: n,
            guild: Y,
            query: z.query.queryText,
            options: z.query.options,
            onHover: (e) => $.onResultHover(e),
            onClick: (e) => $.onResultClick(e),
        }) ?? null;
    if (null == et) return null;
    let en = { [V.pK]: null == Q, [V.YB]: null != Q, [V.sQ]: null == Q && "bottom" === e.position, [V.mO]: J },
        ei = 490;
    null != Q && (ei = s.autocomplete?.small ? 200 : z.query?.type === I.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let er = Math.max(F, H?.current?.clientHeight ?? 0),
        es = Math.min(0.5 * window.innerHeight, er);
    ei = Math.min(window.innerHeight - 120 - es - (j ?? 0), ei);
    let ea = (0, i.jsx)(h.Ay, {
        id: W,
        className: a()(V.nx, en),
        innerClassName: V.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsx)(o.hD, {
            navigator: q,
            children: (0, i.jsx)(o.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, i.jsx)(d.Ch, {
                        id: W,
                        ref: (e) => {
                            (t.current = e?.getScrollerNode() ?? null), (K.current = e);
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: V.XG,
                        style: { maxHeight: ei },
                        role: "listbox",
                        "aria-labelledby": (0, h.Sz)(W),
                        children: et,
                    });
                },
            }),
        }),
    });
    return null != Q
        ? (0, i.jsx)(X, {
              children: (0, i.jsx)(_.Q, {
                  targetRef: e.targetRef,
                  overrideTargetRect: Q,
                  positionKey: ee,
                  position: e.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => ea,
              }),
          })
        : ea;
});
