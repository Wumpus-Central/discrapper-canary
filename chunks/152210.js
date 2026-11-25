n.d(t, { A: () => W });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(837381),
    o = n(855986),
    u = n(516521),
    c = n(623646),
    d = n(811024),
    h = n(933958),
    m = n(969151),
    f = n(927659),
    p = n(579940),
    g = n(915089),
    x = n(462446),
    E = n(750506),
    y = n(513609),
    S = n(71393),
    A = n(597184),
    C = n(105330),
    I = n(265431),
    b = n(151596),
    v = n(861382),
    N = n(355622),
    j = n(339200),
    k = n(696451),
    T = n(576705),
    _ = n(351906),
    O = n(287809),
    R = n(31498),
    w = n(116903),
    M = n(741918),
    L = n(267102),
    P = n(652215),
    D = n(307731);
let U = new Map([["thread", new Set(["name"])]]);
var V = n(5867),
    F = n(940169);
function W(e) {
    var t;
    let n,
        { ref: r, ...W } = e,
        { channel: B, type: G, editorHeight: K, onVisibilityChange: H, editorScrollerRef: z, barsHeight: q } = W,
        $ = (0, g.GV)(),
        J = (0, o.bG)([S.A], () => S.A.getGuild(B.guild_id) ?? null, [B.guild_id]),
        Z = i.useRef(null),
        [Q, X, Y] = (function (e, t, n) {
            let { channel: l, type: r } = e,
                [s, a] = i.useState(() => (0, R.Ur)()),
                u = (0, I.A)(),
                c = (0, o.bG)([k.Ay, O.default], () => {
                    let e = O.default.getCurrentUser();
                    return (null != l.guild_id && null != e ? k.Ay.getMember(l.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: d, hidePersonalInformation: h } = (0, o.cf)(
                    [T.A, _.A],
                    () => ({
                        canMentionEveryone:
                            l.isPrivate() || c || r === N.oU.RULES_INPUT || T.A.can(P.xBc.MENTION_EVERYONE, l),
                        hidePersonalInformation: _.A.hidePersonalInformation,
                    }),
                    [l, r, c],
                ),
                { activeCommand: m, activeCommandOption: f } = (0, o.cf)([v.A], () => ({
                    activeCommand: v.A.getActiveCommand(l.id),
                    activeCommandOption: v.A.getActiveOption(l.id),
                })),
                p = i.useMemo(
                    () =>
                        m?.untranslatedName != null &&
                        f?.name != null &&
                        (U.get(m.untranslatedName)?.has(f.name) ?? !1),
                    [m?.untranslatedName, f?.name],
                ),
                g = (function (e) {
                    let { navId: t, scrollerRef: n, state: l, onFocus: r } = e,
                        { renderWindow: s } = i.useContext(L.Ay);
                    function a(e, t, i) {
                        if ((n.current?.scrollToTop(), e && null != l.query)) {
                            let e = l.query.typeInfo.focusMode,
                                n =
                                    e !== A.e.MANUAL &&
                                    (e !== A.e.AUTO_WHEN_FILTERED || 0 !== l.query.queryText.length);
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
                            orientation: M.Gl.VERTICAL,
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
                })({ navId: "channel-autocomplete", scrollerRef: n, state: s, onFocus: (e) => C.setSelectedIndex(e) }),
                x = e.editorRef.current?.getCurrentWord(),
                E = e.editorRef.current?.getSlateEditor(),
                y = null;
            null != E && (y = j.VW.getSelectedParentOfType(E, R.mk)?.[0] ?? null);
            let S = {
                    ...e,
                    navigator: g,
                    activeCommand: m,
                    activeCommandOption: f,
                    activeInlineAutocompleteInput: y,
                    canMentionUsers: r.users?.allowMentioning ?? !1,
                    canMentionEveryone: d,
                    hidePersonalInformation: h,
                    hideMentionDescription: r === N.oU.RULES_INPUT,
                    emojiIntention:
                        r === N.oU.RULES_INPUT
                            ? D.EmojiIntention.COMMUNITY_CONTENT
                            : p
                              ? D.EmojiIntention.NO_CUSTOM_EMOJI
                              : D.EmojiIntention.CHAT,
                    currentWord: x?.word ?? "",
                    currentWordIsAtStart: x?.isAtStart === !0,
                    optionText:
                        null != f
                            ? (0, b.AA)({ [f.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] }, f.name)
                            : "",
                },
                [C] = i.useState(() => new R.Ay(S));
            return (
                i.useEffect(() => {
                    C.updateProps(S);
                }),
                i.useImperativeHandle(t, () => C, [C]),
                i.useEffect(() => () => C.unmount(), [C]),
                i.useEffect(() => {
                    function e(e) {
                        return a(e);
                    }
                    return (
                        C.on("change", e),
                        C.on("update", u),
                        () => {
                            (C.off("change", e), C.off("update", u));
                        }
                    );
                }, [u, C]),
                i.useEffect(() => {
                    let e = s.query?.typeInfo.stores;
                    if (null != e) {
                        function t() {
                            return C.queryResults();
                        }
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [C, s.query?.typeInfo]),
                [s, C, g]
            );
        })({ ...W, guild: J }, r, Z),
        ee = G.autocomplete?.forceChatLayer ? y.Ay : E.Ay,
        et = i.useMemo(() => {
            if (!Q.isVisible || Q.query?.type !== A.DB.MENTIONS) return null;
            let e = Q.query.results.users;
            return (
                e?.map((e) => {
                    let { user: t } = e;
                    return t.id;
                }) ?? []
            );
        }, [Q.isVisible, Q.query]);
    ((t = B.guild_id),
        (n = (0, x.A)(t)),
        i.useEffect(() => {
            null == et ? n.cancel() : n(et);
        }, [et, n]));
    let en = (0, f.aI)(Q.selectedIndex);
    (0, p.gf)($, Q.isVisible, en);
    let el = (0, C.l)({ editorHeight: K, type: G, state: Q }),
        ei = (0, o.bG)(
            [h.Ay],
            () => {
                let e = h.Ay.getSelfEmbeddedActivityForChannel(B.id),
                    t = h.Ay.getActivityPanelMode();
                return (0, d.AX)(B) && null != e && (0, m.H)(e.location) === B.id && t === V.Gd.PANEL;
            },
            [B],
        ),
        er = i.useMemo(
            () =>
                el?.top == null && el?.left == null && el?.bottom == null && el?.right == null
                    ? ""
                    : String(Date.now()),
            [el?.top, el?.left, el?.bottom, el?.right],
        );
    if (
        (i.useEffect(() => {
            H(Q.isVisible);
        }, [H, Q.isVisible]),
        !Q.isVisible || null == Q.query || void 0 === el)
    )
        return null;
    let es =
        Q.query.typeInfo.renderResults({
            results: Q.query.results,
            selectedIndex: Q.selectedIndex,
            channel: B,
            guild: J,
            query: Q.query.queryText,
            options: Q.query.options,
            onHover: (e) => X.onResultHover(e),
            onClick: (e) => X.onResultClick(e),
        }) ?? null;
    if (null == es) return null;
    let ea = { [F.pK]: null == el, [F.YB]: null != el, [F.sQ]: null == el && "bottom" === W.position, [F.mO]: ei },
        eo = 490;
    null != el && (eo = G.autocomplete?.small ? 200 : Q.query?.type === A.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let eu = Math.max(K, z?.current?.clientHeight ?? 0),
        ec = Math.min(0.5 * window.innerHeight, eu);
    eo = Math.min(window.innerHeight - 120 - ec - (q ?? 0), eo);
    let ed = (0, l.jsx)(f.Ay, {
        id: $,
        className: s()(F.nx, ea),
        innerClassName: F.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, l.jsx)(a.hD, {
            navigator: Y,
            children: (0, l.jsx)(a.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, l.jsx)(u.Ch, {
                        id: $,
                        ref: (e) => {
                            ((t.current = e?.getScrollerNode() ?? null), (Z.current = e));
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: F.XG,
                        style: { maxHeight: eo },
                        role: "listbox",
                        "aria-labelledby": (0, f.Sz)($),
                        children: es,
                    });
                },
            }),
        }),
    });
    return null != el
        ? (0, l.jsx)(ee, {
              children: (0, l.jsx)(c.Q, {
                  targetRef: W.targetRef,
                  overrideTargetRect: el,
                  positionKey: er,
                  position: W.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => ed,
              }),
          })
        : ed;
}
