n.d(t, { A: () => V });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
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
    A = n(513609),
    E = n(71393),
    C = n(597184),
    I = n(105330),
    y = n(265431),
    S = n(459016),
    N = n(861382),
    v = n(355622),
    _ = n(820066),
    T = n(696451),
    j = n(576705),
    b = n(351906),
    R = n(287809),
    O = n(31498),
    M = n(887129),
    L = n(741918),
    k = n(267102),
    w = n(652215),
    P = n(307731);
let D = new Map([["thread", new Set(["name"])]]);
var U = n(5867),
    G = n(940169);
let V = i.forwardRef(function (e, t) {
    let { channel: n, type: s, editorHeight: V, onVisibilityChange: F, editorScrollerRef: H, barsHeight: B } = e,
        W = (0, g.GV)(),
        K = (0, o.bG)([E.A], () => E.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        z = i.useRef(null),
        [Z, Y, q] = (function (e, t, n) {
            let { channel: l, type: s } = e,
                [r, a] = i.useState(() => (0, O.Ur)()),
                u = (0, y.A)(),
                c = (0, o.bG)([T.Ay, R.default], () => {
                    let e = R.default.getCurrentUser();
                    return (null != l.guild_id && null != e ? T.Ay.getMember(l.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: d, hidePersonalInformation: h } = (0, o.cf)(
                    [j.A, b.A],
                    () => ({
                        canMentionEveryone:
                            l.isPrivate() || c || s === v.oU.RULES_INPUT || j.A.can(w.xBc.MENTION_EVERYONE, l),
                        hidePersonalInformation: b.A.hidePersonalInformation,
                    }),
                    [l, s, c],
                ),
                { activeCommand: m, activeCommandOption: f } = (0, o.cf)([N.A], () => ({
                    activeCommand: N.A.getActiveCommand(l.id),
                    activeCommandOption: N.A.getActiveOption(l.id),
                })),
                p = i.useMemo(
                    () =>
                        m?.untranslatedName != null &&
                        f?.name != null &&
                        (D.get(m.untranslatedName)?.has(f.name) ?? !1),
                    [m?.untranslatedName, f?.name],
                ),
                g = (function (e) {
                    let { navId: t, scrollerRef: n, state: l, onFocus: s } = e,
                        { renderWindow: r } = i.useContext(k.Ay);
                    function a(e, t, i) {
                        if ((n.current?.scrollToTop(), e && null != l.query)) {
                            let e = l.query.typeInfo.focusMode,
                                n =
                                    e !== C.e.MANUAL &&
                                    (e !== C.e.AUTO_WHEN_FILTERED || 0 !== l.query.queryText.length);
                            l.isVisible && (!0 !== t || !1 !== n) && !0 !== i
                                ? (u.setFocus("0"), s?.(0))
                                : (u.setFocus(null), s?.(null));
                        }
                    }
                    function o(e) {
                        if ((n.current?.scrollToBottom(), e && null != l.query && l.query.resultCount > 0)) {
                            let e = l.query.resultCount - 1;
                            u.setFocus(e.toString()), s?.(e);
                        }
                    }
                    let u = (0, M.Ay)({
                            id: t,
                            isEnabled: l.isVisible,
                            orientation: L.Gl.VERTICAL,
                            useVirtualFocus: !0,
                            setFocus: function (e, t) {
                                let l = r.document.querySelector(e);
                                null != l && n.current?.scrollIntoViewNode({ node: l }), s?.(+t);
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
                })({ navId: "channel-autocomplete", scrollerRef: n, state: r, onFocus: (e) => U.setSelectedIndex(e) }),
                x = e.editorRef.current?.getCurrentWord(),
                A = e.editorRef.current?.getSlateEditor(),
                E = null;
            null != A && (E = _.VW.getSelectedParentOfType(A, O.mk)?.[0] ?? null);
            let I = {
                    ...e,
                    navigator: g,
                    activeCommand: m,
                    activeCommandOption: f,
                    activeInlineAutocompleteInput: E,
                    canMentionUsers: s.users?.allowMentioning ?? !1,
                    canMentionEveryone: d,
                    hidePersonalInformation: h,
                    hideMentionDescription: s === v.oU.RULES_INPUT,
                    emojiIntention:
                        s === v.oU.RULES_INPUT
                            ? P.EmojiIntention.COMMUNITY_CONTENT
                            : p
                              ? P.EmojiIntention.NO_CUSTOM_EMOJI
                              : P.EmojiIntention.CHAT,
                    currentWord: x?.word ?? "",
                    currentWordIsAtStart: x?.isAtStart === !0,
                    optionText:
                        null != f
                            ? (0, S.getString)(
                                  { [f.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                                  f.name,
                              )
                            : "",
                },
                [U] = i.useState(() => new O.Ay(I));
            return (
                i.useEffect(() => {
                    U.updateProps(I);
                }),
                i.useImperativeHandle(t, () => U, [U]),
                i.useEffect(() => {
                    function e(e) {
                        return a(e);
                    }
                    return (
                        U.on("change", e),
                        U.on("update", u),
                        () => {
                            U.off("change", e), U.off("update", u);
                        }
                    );
                }, [u, U]),
                i.useEffect(() => {
                    let e = r.query?.typeInfo.stores;
                    if (null != e) {
                        function t() {
                            return U.queryResults();
                        }
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [U, r.query?.typeInfo]),
                [r, U, g]
            );
        })({ ...e, guild: K }, t, z),
        J = s.autocomplete?.forceChatLayer ? A.Ay : x.Ay,
        $ = (0, f.aI)(Z.selectedIndex);
    (0, p.gf)(W, Z.isVisible, $);
    let X = (0, I.l)({ editorHeight: V, type: s, state: Z }),
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
            onHover: (e) => Y.onResultHover(e),
            onClick: (e) => Y.onResultClick(e),
        }) ?? null;
    if (null == et) return null;
    let en = { [G.pK]: null == X, [G.YB]: null != X, [G.sQ]: null == X && "bottom" === e.position, [G.mO]: Q },
        el = 490;
    null != X && (el = s.autocomplete?.small ? 200 : Z.query?.type === C.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let ei = Math.max(V, H?.current?.clientHeight ?? 0),
        es = Math.min(0.5 * window.innerHeight, ei);
    el = Math.min(window.innerHeight - 120 - es - (B ?? 0), el);
    let er = (0, l.jsx)(f.Ay, {
        id: W,
        className: r()(G.nx, en),
        innerClassName: G.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, l.jsx)(a.hD, {
            navigator: q,
            children: (0, l.jsx)(a.PR, {
                children: (e) => {
                    let { ref: t, ...n } = e;
                    return (0, l.jsx)(u.Ch, {
                        id: W,
                        ref: (e) => {
                            (t.current = e?.getScrollerNode() ?? null), (z.current = e);
                        },
                        orientation: "vertical",
                        overflow: "auto",
                        ...n,
                        className: G.XG,
                        style: { maxHeight: el },
                        role: "listbox",
                        "aria-labelledby": (0, f.Sz)(W),
                        children: et,
                    });
                },
            }),
        }),
    });
    return null != X
        ? (0, l.jsx)(J, {
              children: (0, l.jsx)(c.Q, {
                  targetRef: e.targetRef,
                  overrideTargetRect: X,
                  positionKey: ee,
                  position: e.position ?? "top",
                  align: "left",
                  spacing: 8,
                  autoInvert: !0,
                  nudgeAlignIntoViewport: !0,
                  children: () => er,
              }),
          })
        : er;
});
