"use strict";
n.d(t, { A: () => G });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(17928),
    c = n(689175),
    u = n(623646),
    d = n(811024),
    h = n(933958),
    m = n(969151),
    p = n(659280),
    f = n(579940),
    g = n(915089),
    _ = n(750506),
    x = n(513609),
    C = n(71393),
    A = n(374803),
    E = n(105330),
    I = n(27867),
    v = n(258363),
    y = n(861382),
    b = n(355622),
    S = n(820066),
    N = n(696451),
    j = n(576705),
    T = n(351906),
    w = n(287809),
    R = n(31498),
    L = n(887129),
    k = n(741918),
    O = n(267102),
    M = n(652215),
    P = n(307731);
let D = new Map([["thread", new Set(["name"])]]);
var U = n(5867),
    V = n(122484);
let G = i.forwardRef(function (e, t) {
    let { channel: n, type: s, editorHeight: G, onVisibilityChange: F, editorScrollerRef: B, barsHeight: H } = e,
        W = (0, g.GV)(),
        K = (0, o.bG)([C.A], () => C.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        z = i.useRef(null),
        [Z, q, J] = (function (e, t, n) {
            let { channel: l, type: s } = e,
                [a, r] = i.useState(() => (0, R.Ur)()),
                c = (0, I.A)(),
                u = (0, o.bG)([N.Ay, w.default], () => {
                    let e = w.default.getCurrentUser();
                    return (null != l.guild_id && null != e ? N.Ay.getMember(l.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: d, hidePersonalInformation: h } = (0, o.cf)(
                    [j.A, T.A],
                    () => ({
                        canMentionEveryone:
                            l.isPrivate() || u || s === b.oU.RULES_INPUT || j.A.can(M.xBc.MENTION_EVERYONE, l),
                        hidePersonalInformation: T.A.hidePersonalInformation,
                    }),
                    [l, s, u],
                ),
                { activeCommand: m, activeCommandOption: p } = (0, o.cf)([y.A], () => ({
                    activeCommand: y.A.getActiveCommand(l.id),
                    activeCommandOption: y.A.getActiveOption(l.id),
                })),
                f = i.useMemo(
                    () =>
                        m?.untranslatedName != null &&
                        p?.name != null &&
                        (D.get(m.untranslatedName)?.has(p.name) ?? !1),
                    [m?.untranslatedName, p?.name],
                ),
                g = (function (e) {
                    let { navId: t, scrollerRef: n, state: l, onFocus: s } = e,
                        { renderWindow: a } = i.useContext(O.Ay),
                        r = (e, t, i) => {
                            if ((n.current?.scrollToTop(), e && null != l.query)) {
                                let e = l.query.typeInfo.focusMode,
                                    n =
                                        e !== A.e.MANUAL &&
                                        (e !== A.e.AUTO_WHEN_FILTERED || 0 !== l.query.queryText.length);
                                l.isVisible && (!0 !== t || !1 !== n) && !0 !== i
                                    ? (c.setFocus("0"), s?.(0))
                                    : (c.setFocus(null), s?.(null));
                            }
                        },
                        o = (e) => {
                            if ((n.current?.scrollToBottom(), e && null != l.query && l.query.resultCount > 0)) {
                                let e = l.query.resultCount - 1;
                                c.setFocus(e.toString()), s?.(e);
                            }
                        },
                        c = (0, L.Ay)({
                            id: t,
                            isEnabled: l.isVisible,
                            orientation: k.Gl.VERTICAL,
                            useVirtualFocus: !0,
                            setFocus: (e, t) => {
                                let l = a.document.querySelector(e);
                                null != l && n.current?.scrollIntoViewNode({ node: l }), s?.(+t);
                            },
                            onNavigateNextAtEnd: () => r(!0),
                            onNavigatePreviousAtStart: () => o(!0),
                            scrollToStart: () => (r(!1, !1), Promise.resolve()),
                            scrollToEnd: () => (o(!1), Promise.resolve()),
                        }),
                        u = i.useRef(r);
                    return (
                        i.useEffect(() => {
                            u.current = r;
                        }),
                        i.useEffect(() => {
                            u.current(!0, !0, l.isInitialAfterError);
                        }, [l.query?.type, l.query?.queryText, l.query?.isLoading, l.isVisible, l.isInitialAfterError]),
                        c
                    );
                })({ navId: "channel-autocomplete", scrollerRef: n, state: a, onFocus: (e) => U.setSelectedIndex(e) }),
                _ = e.editorRef.current?.getCurrentWord(),
                x = e.editorRef.current?.getSlateEditor(),
                C = null;
            null != x && (C = S.VW.getSelectedParentOfType(x, R.mk)?.[0] ?? null);
            let E = {
                    ...e,
                    navigator: g,
                    activeCommand: m,
                    activeCommandOption: p,
                    activeInlineAutocompleteInput: C,
                    canMentionUsers: s.users?.allowMentioning ?? !1,
                    canMentionEveryone: d,
                    hidePersonalInformation: h,
                    hideMentionDescription: s === b.oU.RULES_INPUT,
                    emojiIntention:
                        s === b.oU.RULES_INPUT
                            ? P.EmojiIntention.COMMUNITY_CONTENT
                            : f
                              ? P.EmojiIntention.NO_CUSTOM_EMOJI
                              : P.EmojiIntention.CHAT,
                    currentWord: _?.word ?? "",
                    currentWordIsAtStart: _?.isAtStart === !0,
                    optionText:
                        null != p
                            ? (0, v.getString)(
                                  { [p.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                                  p.name,
                              )
                            : "",
                },
                [U] = i.useState(() => new R.Ay(E));
            return (
                i.useEffect(() => {
                    U.updateProps(E);
                }),
                i.useImperativeHandle(t, () => U, [U]),
                i.useEffect(() => {
                    let e = (e) => r(e);
                    return (
                        U.on("change", e),
                        U.on("update", c),
                        () => {
                            U.off("change", e), U.off("update", c);
                        }
                    );
                }, [c, U]),
                i.useEffect(() => {
                    let e = a.query?.typeInfo.stores;
                    if (null != e) {
                        let t = () => U.queryResults();
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [U, a.query?.typeInfo]),
                [a, U, g]
            );
        })({ ...e, guild: K }, t, z),
        Y = s.autocomplete?.forceChatLayer ? x.Ay : _.Ay,
        $ = (0, p.aI)(Z.selectedIndex);
    (0, f.gf)(W, Z.isVisible, $);
    let X = (0, E.l)({ editorHeight: G, type: s, state: Z }),
        Q = (0, o.bG)([h.Ay], () => {
            let e = h.Ay.getSelfEmbeddedActivityForChannel(n.id),
                t = h.Ay.getActivityPanelMode();
            return (0, d.AX)(n) && null != e && (0, m.H)(e.location) === n.id && t === U.Gd.PANEL;
        }, [n]),
        ee = i.useMemo(
            () =>
                X?.top == null && X?.left == null && X?.bottom == null && X?.right == null ? "" : String(Date.now()),
            [X?.top, X?.left, X?.bottom, X?.right],
        );
    if (
        (i.useEffect(() => {
            F(Z.isVisible);
        }, [F, Z.isVisible]),
        !Z.isVisible || null == Z.query || void 0 === X)
    )
        return null;
    let et =
        Z.query.typeInfo.renderResults({
            results: Z.query.results,
            selectedIndex: Z.selectedIndex,
            channel: n,
            guild: K,
            query: Z.query.queryText,
            options: Z.query.options,
            onHover: (e) => q.onResultHover(e),
            onClick: (e) => q.onResultClick(e),
        }) ?? null;
    if (null == et) return null;
    let en = { [V.pK]: null == X, [V.YB]: null != X, [V.sQ]: null == X && "bottom" === e.position, [V.mO]: Q },
        el = 490;
    null != X && (el = s.autocomplete?.small ? 200 : Z.query?.type === A.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let ei = Math.max(G, B?.current?.clientHeight ?? 0),
        es = Math.min(0.5 * window.innerHeight, ei);
    el = Math.min(window.innerHeight - 120 - es - (H ?? 0), el);
    let ea = (0, l.jsx)(p.Ay, {
        id: W,
        className: a()(V.nx, en),
        innerClassName: V.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, l.jsx)(r.hD, {
            navigator: J,
            children: (0, l.jsx)(r.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, l.jsx)(c.Ch, {
                        id: W,
                        ref: (e) => {
                            (t.current = e?.getScrollerNode() ?? null), (z.current = e);
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: V.XG,
                        style: { maxHeight: el },
                        role: "listbox",
                        "aria-labelledby": (0, p.Sz)(W),
                        children: et,
                    });
                },
            }),
        }),
    });
    return null != X
        ? (0, l.jsx)(Y, {
              children: (0, l.jsx)(u.Q, {
                  targetRef: e.targetRef,
                  overrideTargetRect: X,
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
