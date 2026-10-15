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
    f = n(659280),
    p = n(579940),
    g = n(915089),
    x = n(750506),
    E = n(513609),
    S = n(71393),
    y = n(597184),
    C = n(105330),
    A = n(265431),
    b = n(459016),
    I = n(861382),
    N = n(355622),
    v = n(820066),
    T = n(696451),
    j = n(576705),
    _ = n(351906),
    k = n(287809),
    R = n(31498),
    O = n(887129),
    L = n(741918),
    w = n(267102),
    M = n(652215),
    P = n(307731);
let D = new Map([["thread", new Set(["name"])]]);
var U = n(5867),
    V = n(940169);
function W(e) {
    let { ref: t, ...n } = e,
        { channel: r, type: W, editorHeight: F, onVisibilityChange: B, editorScrollerRef: K, barsHeight: G } = n,
        H = (0, g.GV)(),
        z = (0, o.bG)([S.A], () => S.A.getGuild(r.guild_id) ?? null, [r.guild_id]),
        q = i.useRef(null),
        [$, Q, Z] = (function (e, t, n) {
            let { channel: l, type: r } = e,
                [s, a] = i.useState(() => (0, R.Ur)()),
                u = (0, A.A)(),
                c = (0, o.bG)([T.Ay, k.default], () => {
                    let e = k.default.getCurrentUser();
                    return (null != l.guild_id && null != e ? T.Ay.getMember(l.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: d, hidePersonalInformation: h } = (0, o.cf)(
                    [j.A, _.A],
                    () => ({
                        canMentionEveryone:
                            l.isPrivate() || c || r === N.oU.RULES_INPUT || j.A.can(M.xBc.MENTION_EVERYONE, l),
                        hidePersonalInformation: _.A.hidePersonalInformation,
                    }),
                    [l, r, c],
                ),
                { activeCommand: m, activeCommandOption: f } = (0, o.cf)([I.A], () => ({
                    activeCommand: I.A.getActiveCommand(l.id),
                    activeCommandOption: I.A.getActiveOption(l.id),
                })),
                p = i.useMemo(
                    () =>
                        m?.untranslatedName != null &&
                        f?.name != null &&
                        (D.get(m.untranslatedName)?.has(f.name) ?? !1),
                    [m?.untranslatedName, f?.name],
                ),
                g = (function (e) {
                    let { navId: t, scrollerRef: n, state: l, onFocus: r } = e,
                        { renderWindow: s } = i.useContext(w.Ay);
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
                    let u = (0, O.Ay)({
                            id: t,
                            isEnabled: l.isVisible,
                            orientation: L.Gl.VERTICAL,
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
                })({ navId: "channel-autocomplete", scrollerRef: n, state: s, onFocus: (e) => U.setSelectedIndex(e) }),
                x = e.editorRef.current?.getCurrentWord(),
                E = e.editorRef.current?.getSlateEditor(),
                S = null;
            null != E && (S = v.VW.getSelectedParentOfType(E, R.mk)?.[0] ?? null);
            let C = {
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
                            ? P.EmojiIntention.COMMUNITY_CONTENT
                            : p
                              ? P.EmojiIntention.NO_CUSTOM_EMOJI
                              : P.EmojiIntention.CHAT,
                    currentWord: x?.word ?? "",
                    currentWordIsAtStart: x?.isAtStart === !0,
                    optionText:
                        null != f
                            ? (0, b.getString)(
                                  { [f.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                                  f.name,
                              )
                            : "",
                },
                [U] = i.useState(() => new R.Ay(C));
            return (
                i.useEffect(() => {
                    U.updateProps(C);
                }),
                i.useImperativeHandle(t, () => U, [U]),
                i.useEffect(() => () => U.unmount(), [U]),
                i.useEffect(() => {
                    function e(e) {
                        return a(e);
                    }
                    return (
                        U.on("change", e),
                        U.on("update", u),
                        () => {
                            (U.off("change", e), U.off("update", u));
                        }
                    );
                }, [u, U]),
                i.useEffect(() => {
                    let e = s.query?.typeInfo.stores;
                    if (null != e) {
                        function t() {
                            return U.queryResults();
                        }
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [U, s.query?.typeInfo]),
                [s, U, g]
            );
        })({ ...n, guild: z }, t, q),
        J = W.autocomplete?.forceChatLayer ? E.Ay : x.Ay,
        X = (0, f.aI)($.selectedIndex);
    (0, p.gf)(H, $.isVisible, X);
    let Y = (0, C.l)({ editorHeight: F, type: W, state: $ }),
        ee = (0, o.bG)(
            [h.Ay],
            () => {
                let e = h.Ay.getSelfEmbeddedActivityForChannel(r.id),
                    t = h.Ay.getActivityPanelMode();
                return (0, d.AX)(r) && null != e && (0, m.H)(e.location) === r.id && t === U.Gd.PANEL;
            },
            [r],
        ),
        et = i.useMemo(
            () =>
                Y?.top == null && Y?.left == null && Y?.bottom == null && Y?.right == null ? "" : String(Date.now()),
            [Y?.top, Y?.left, Y?.bottom, Y?.right],
        );
    if (
        (i.useEffect(() => {
            B($.isVisible);
        }, [B, $.isVisible]),
        !$.isVisible || null == $.query || void 0 === Y)
    )
        return null;
    let en =
        $.query.typeInfo.renderResults({
            results: $.query.results,
            selectedIndex: $.selectedIndex,
            channel: r,
            guild: z,
            query: $.query.queryText,
            options: $.query.options,
            onHover: (e) => Q.onResultHover(e),
            onClick: (e) => Q.onResultClick(e),
        }) ?? null;
    if (null == en) return null;
    let el = { [V.pK]: null == Y, [V.YB]: null != Y, [V.sQ]: null == Y && "bottom" === n.position, [V.mO]: ee },
        ei = 490;
    null != Y && (ei = W.autocomplete?.small ? 200 : $.query?.type === y.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let er = Math.max(F, K?.current?.clientHeight ?? 0),
        es = Math.min(0.5 * window.innerHeight, er);
    ei = Math.min(window.innerHeight - 120 - es - (G ?? 0), ei);
    let ea = (0, l.jsx)(f.Ay, {
        id: H,
        className: s()(V.nx, el),
        innerClassName: V.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, l.jsx)(a.hD, {
            navigator: Z,
            children: (0, l.jsx)(a.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, l.jsx)(u.Ch, {
                        id: H,
                        ref: (e) => {
                            ((t.current = e?.getScrollerNode() ?? null), (q.current = e));
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: V.XG,
                        style: { maxHeight: ei },
                        role: "listbox",
                        "aria-labelledby": (0, f.Sz)(H),
                        children: en,
                    });
                },
            }),
        }),
    });
    return null != Y
        ? (0, l.jsx)(J, {
              children: (0, l.jsx)(c.Q, {
                  targetRef: n.targetRef,
                  overrideTargetRect: Y,
                  positionKey: et,
                  position: n.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => ea,
              }),
          })
        : ea;
}
