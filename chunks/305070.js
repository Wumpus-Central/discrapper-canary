"use strict";
n.d(t, { A: () => B });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(17928),
    u = n(689175),
    c = n(623646),
    d = n(811024),
    _ = n(933958),
    h = n(969151),
    f = n(659280),
    p = n(579940),
    E = n(915089),
    m = n(352505),
    g = n(750506),
    A = n(513609),
    I = n(71393),
    T = n(597184),
    S = n(105330),
    y = n(27867),
    C = n(459016),
    N = n(861382),
    v = n(355622),
    R = n(820066),
    O = n(696451),
    b = n(576705),
    D = n(351906),
    L = n(287809),
    w = n(31498),
    M = n(887129),
    P = n(741918),
    x = n(267102),
    k = n(652215),
    U = n(307731);
let G = new Map([["thread", new Set(["name"])]]);
var F = n(5867),
    V = n(122484);
let B = r.forwardRef(function (e, t) {
    let { channel: n, type: s, editorHeight: B, onVisibilityChange: j, editorScrollerRef: H, barsHeight: Y } = e,
        W = (0, E.GV)(),
        K = (0, l.bG)([I.A], () => I.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        $ = r.useRef(null),
        [z, q, Z] = (function (e, t, n) {
            let { channel: i, type: s } = e,
                [a, o] = r.useState(() => (0, w.Ur)()),
                u = (0, y.A)(),
                c = (0, l.bG)([O.Ay, L.default], () => {
                    let e = L.default.getCurrentUser();
                    return (null != i.guild_id && null != e ? O.Ay.getMember(i.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: d, hidePersonalInformation: _ } = (0, l.cf)(
                    [b.A, D.A],
                    () => ({
                        canMentionEveryone:
                            i.isPrivate() || c || s === v.oU.RULES_INPUT || b.A.can(k.xBc.MENTION_EVERYONE, i),
                        hidePersonalInformation: D.A.hidePersonalInformation,
                    }),
                    [i, s, c],
                ),
                { activeCommand: h, activeCommandOption: f } = (0, l.cf)([N.A], () => ({
                    activeCommand: N.A.getActiveCommand(i.id),
                    activeCommandOption: N.A.getActiveOption(i.id),
                })),
                p = r.useMemo(
                    () =>
                        h?.untranslatedName != null &&
                        f?.name != null &&
                        (G.get(h.untranslatedName)?.has(f.name) ?? !1),
                    [h?.untranslatedName, f?.name],
                ),
                E = (function (e) {
                    let { navId: t, scrollerRef: n, state: i, onFocus: s } = e,
                        { renderWindow: a } = r.useContext(x.Ay),
                        o = (e, t, r) => {
                            if ((n.current?.scrollToTop(), e && null != i.query)) {
                                let e = i.query.typeInfo.focusMode,
                                    n =
                                        e !== T.e.MANUAL &&
                                        (e !== T.e.AUTO_WHEN_FILTERED || 0 !== i.query.queryText.length);
                                i.isVisible && (!0 !== t || !1 !== n) && !0 !== r
                                    ? (u.setFocus("0"), s?.(0))
                                    : (u.setFocus(null), s?.(null));
                            }
                        },
                        l = (e) => {
                            if ((n.current?.scrollToBottom(), e && null != i.query && i.query.resultCount > 0)) {
                                let e = i.query.resultCount - 1;
                                u.setFocus(e.toString()), s?.(e);
                            }
                        },
                        u = (0, M.Ay)({
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
                        c = r.useRef(o);
                    return (
                        r.useEffect(() => {
                            c.current = o;
                        }),
                        r.useEffect(() => {
                            c.current(!0, !0, i.isInitialAfterError);
                        }, [i.query?.type, i.query?.queryText, i.query?.isLoading, i.isVisible, i.isInitialAfterError]),
                        u
                    );
                })({ navId: "channel-autocomplete", scrollerRef: n, state: a, onFocus: (e) => S.setSelectedIndex(e) }),
                m = e.editorRef.current?.getCurrentWord(),
                g = e.editorRef.current?.getSlateEditor(),
                A = null;
            null != g && (A = R.VW.getSelectedParentOfType(g, w.mk)?.[0] ?? null);
            let I = {
                    ...e,
                    navigator: E,
                    activeCommand: h,
                    activeCommandOption: f,
                    activeInlineAutocompleteInput: A,
                    canMentionUsers: s.users?.allowMentioning ?? !1,
                    canMentionEveryone: d,
                    hidePersonalInformation: _,
                    hideMentionDescription: s === v.oU.RULES_INPUT,
                    emojiIntention:
                        s === v.oU.RULES_INPUT
                            ? U.EmojiIntention.COMMUNITY_CONTENT
                            : p
                              ? U.EmojiIntention.NO_CUSTOM_EMOJI
                              : U.EmojiIntention.CHAT,
                    currentWord: m?.word ?? "",
                    currentWordIsAtStart: m?.isAtStart === !0,
                    optionText:
                        null != f
                            ? (0, C.getString)(
                                  { [f.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                                  f.name,
                              )
                            : "",
                },
                [S] = r.useState(() => new w.Ay(I));
            return (
                r.useEffect(() => {
                    S.updateProps(I);
                }),
                r.useImperativeHandle(t, () => S, [S]),
                r.useEffect(() => {
                    let e = (e) => o(e);
                    return (
                        S.on("change", e),
                        S.on("update", u),
                        () => {
                            S.off("change", e), S.off("update", u);
                        }
                    );
                }, [u, S]),
                r.useEffect(() => {
                    let e = a.query?.typeInfo.stores;
                    if (null != e) {
                        let t = () => S.queryResults();
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [S, a.query?.typeInfo]),
                [a, S, E]
            );
        })({ ...e, guild: K }, t, $),
        X = s.autocomplete?.forceChatLayer ? A.Ay : g.Ay,
        Q = (0, f.aI)(z.selectedIndex);
    (0, p.gf)(W, z.isVisible, Q);
    let J = (0, S.l)({ editorHeight: B, type: s, state: z }),
        ee = (0, l.bG)([_.Ay], () => {
            let e = _.Ay.getSelfEmbeddedActivityForChannel(n.id),
                t = _.Ay.getActivityPanelMode();
            return (0, d.AX)(n) && null != e && (0, h.H)(e.location) === n.id && t === F.Gd.PANEL;
        }, [n]),
        et = r.useMemo(
            () =>
                J?.top == null && J?.left == null && J?.bottom == null && J?.right == null ? "" : String(Date.now()),
            [J?.top, J?.left, J?.bottom, J?.right],
        );
    if (
        (r.useEffect(() => {
            j(z.isVisible);
        }, [j, z.isVisible]),
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
        er = m.r.getConfig({ location: "channel autocomplete" }),
        es = z.query?.type === T.DB.MENTIONS,
        ea = er.combineMentionAutocomplete && es ? 670 : 490;
    null != J && (ea = s.autocomplete?.small ? 200 : z.query?.type === T.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let eo = Math.max(B, H?.current?.clientHeight ?? 0),
        el = Math.min(0.5 * window.innerHeight, eo);
    ea = Math.min(window.innerHeight - 120 - el - (Y ?? 0), ea);
    let eu = (0, i.jsx)(f.Ay, {
        id: W,
        className: a()(V.nx, ei),
        innerClassName: V.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsx)(o.hD, {
            navigator: Z,
            children: (0, i.jsx)(o.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, i.jsx)(u.Ch, {
                        id: W,
                        ref: (e) => {
                            (t.current = e?.getScrollerNode() ?? null), ($.current = e);
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: V.XG,
                        style: { maxHeight: ea },
                        role: "listbox",
                        "aria-labelledby": (0, f.Sz)(W),
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
                  children: () => eu,
              }),
          })
        : eu;
});
