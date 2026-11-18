n.d(t, { A: () => B });
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
    S = n(513609),
    y = n(71393),
    C = n(597184),
    A = n(105330),
    b = n(265431),
    I = n(151596),
    v = n(861382),
    N = n(355622),
    T = n(339200),
    k = n(696451),
    j = n(576705),
    _ = n(351906),
    R = n(287809),
    w = n(31498),
    O = n(116903),
    M = n(741918),
    L = n(267102),
    P = n(652215),
    D = n(307731);
let U = new Map([["thread", new Set(["name"])]]);
var V = n(5867),
    W = n(940169);
function B(e) {
    var t;
    let n,
        { ref: r, ...B } = e,
        { channel: F, type: G, editorHeight: K, onVisibilityChange: H, editorScrollerRef: z, barsHeight: q } = B,
        $ = (0, g.GV)(),
        Q = (0, o.bG)([y.A], () => y.A.getGuild(F.guild_id) ?? null, [F.guild_id]),
        Z = i.useRef(null),
        [X, Y, J] = (function (e, t, n) {
            let { channel: l, type: r } = e,
                [s, a] = i.useState(() => (0, w.Ur)()),
                u = (0, b.A)(),
                c = (0, o.bG)([k.Ay, R.default], () => {
                    let e = R.default.getCurrentUser();
                    return (null != l.guild_id && null != e ? k.Ay.getMember(l.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: d, hidePersonalInformation: h } = (0, o.cf)(
                    [j.A, _.A],
                    () => ({
                        canMentionEveryone:
                            l.isPrivate() || c || r === N.oU.RULES_INPUT || j.A.can(P.xBc.MENTION_EVERYONE, l),
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
                                    e !== C.e.MANUAL &&
                                    (e !== C.e.AUTO_WHEN_FILTERED || 0 !== l.query.queryText.length);
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
                    let u = (0, O.Ay)({
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
                })({ navId: "channel-autocomplete", scrollerRef: n, state: s, onFocus: (e) => A.setSelectedIndex(e) }),
                x = e.editorRef.current?.getCurrentWord(),
                E = e.editorRef.current?.getSlateEditor(),
                S = null;
            null != E && (S = T.VW.getSelectedParentOfType(E, w.mk)?.[0] ?? null);
            let y = {
                    ...e,
                    navigator: g,
                    activeCommand: m,
                    activeCommandOption: f,
                    activeInlineAutocompleteInput: S,
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
                            ? (0, I.AA)({ [f.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] }, f.name)
                            : "",
                },
                [A] = i.useState(() => new w.Ay(y));
            return (
                i.useEffect(() => {
                    A.updateProps(y);
                }),
                i.useImperativeHandle(t, () => A, [A]),
                i.useEffect(() => () => A.unmount(), [A]),
                i.useEffect(() => {
                    function e(e) {
                        return a(e);
                    }
                    return (
                        A.on("change", e),
                        A.on("update", u),
                        () => {
                            (A.off("change", e), A.off("update", u));
                        }
                    );
                }, [u, A]),
                i.useEffect(() => {
                    let e = s.query?.typeInfo.stores;
                    if (null != e) {
                        function t() {
                            return A.queryResults();
                        }
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [A, s.query?.typeInfo]),
                [s, A, g]
            );
        })({ ...B, guild: Q }, r, Z),
        ee = G.autocomplete?.forceChatLayer ? S.Ay : E.Ay,
        et = i.useMemo(() => {
            if (!X.isVisible || X.query?.type !== C.DB.MENTIONS) return null;
            let e = X.query.results.users;
            return (
                e?.map((e) => {
                    let { user: t } = e;
                    return t.id;
                }) ?? []
            );
        }, [X.isVisible, X.query]);
    ((t = F.guild_id),
        (n = (0, x.A)(t)),
        i.useEffect(() => {
            null == et ? n.cancel() : n(et);
        }, [et, n]));
    let en = (0, f.aI)(X.selectedIndex);
    (0, p.gf)($, X.isVisible, en);
    let el = (0, A.l)({ editorHeight: K, type: G, state: X }),
        ei = (0, o.bG)(
            [h.Ay],
            () => {
                let e = h.Ay.getSelfEmbeddedActivityForChannel(F.id),
                    t = h.Ay.getActivityPanelMode();
                return (0, d.AX)(F) && null != e && (0, m.H)(e.location) === F.id && t === V.Gd.PANEL;
            },
            [F],
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
            H(X.isVisible);
        }, [H, X.isVisible]),
        !X.isVisible || null == X.query || void 0 === el)
    )
        return null;
    let es =
        X.query.typeInfo.renderResults({
            results: X.query.results,
            selectedIndex: X.selectedIndex,
            channel: F,
            guild: Q,
            query: X.query.queryText,
            options: X.query.options,
            onHover: (e) => Y.onResultHover(e),
            onClick: (e) => Y.onResultClick(e),
        }) ?? null;
    if (null == es) return null;
    let ea = { [W.pK]: null == el, [W.YB]: null != el, [W.sQ]: null == el && "bottom" === B.position, [W.mO]: ei },
        eo = 490;
    null != el && (eo = G.autocomplete?.small ? 200 : X.query?.type === C.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let eu = Math.max(K, z?.current?.clientHeight ?? 0),
        ec = Math.min(0.5 * window.innerHeight, eu);
    eo = Math.min(window.innerHeight - 120 - ec - (q ?? 0), eo);
    let ed = (0, l.jsx)(f.Ay, {
        id: $,
        className: s()(W.nx, ea),
        innerClassName: W.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, l.jsx)(a.hD, {
            navigator: J,
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
                        className: W.XG,
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
                  targetRef: B.targetRef,
                  overrideTargetRect: el,
                  positionKey: er,
                  position: B.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => ed,
              }),
          })
        : ed;
}
