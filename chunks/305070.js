"use strict";
n.d(t, { A: () => V });
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
    f = n(750506),
    p = n(513609),
    T = n(71393),
    m = n(597184),
    g = n(105330),
    S = n(265431),
    N = n(459016),
    C = n(861382),
    O = n(355622),
    R = n(820066),
    L = n(696451),
    D = n(576705),
    y = n(351906),
    v = n(287809),
    b = n(31498),
    M = n(887129),
    P = n(741918),
    U = n(267102),
    w = n(652215),
    G = n(307731);
let x = new Map([["thread", new Set(["name"])]]);
var k = n(5867),
    F = n(175916);
let V = r.forwardRef(function (e, t) {
    let { channel: n, type: a, editorHeight: V, onVisibilityChange: B, editorScrollerRef: H, barsHeight: j } = e,
        W = (0, I.GV)(),
        Y = (0, o.bG)([T.A], () => T.A.getGuild(n.guild_id) ?? null, [n.guild_id]),
        K = r.useRef(null),
        [$, z, q] = (function (e, t, n) {
            let { channel: i, type: a } = e,
                [s, l] = r.useState(() => (0, b.Ur)()),
                d = (0, S.A)(),
                c = (0, o.bG)([L.Ay, v.default], () => {
                    let e = v.default.getCurrentUser();
                    return (null != i.guild_id && null != e ? L.Ay.getMember(i.guild_id, e.id)?.isPending : null) ?? !1;
                }),
                { canMentionEveryone: u, hidePersonalInformation: _ } = (0, o.cf)(
                    [D.A, y.A],
                    () => ({
                        canMentionEveryone:
                            i.isPrivate() || c || a === O.oU.RULES_INPUT || D.A.can(w.xBc.MENTION_EVERYONE, i),
                        hidePersonalInformation: y.A.hidePersonalInformation,
                    }),
                    [i, a, c],
                ),
                { activeCommand: E, activeCommandOption: A } = (0, o.cf)([C.A], () => ({
                    activeCommand: C.A.getActiveCommand(i.id),
                    activeCommandOption: C.A.getActiveOption(i.id),
                })),
                h = r.useMemo(
                    () =>
                        E?.untranslatedName != null &&
                        A?.name != null &&
                        (x.get(E.untranslatedName)?.has(A.name) ?? !1),
                    [E?.untranslatedName, A?.name],
                ),
                I = (function (e) {
                    let { navId: t, scrollerRef: n, state: i, onFocus: a } = e,
                        { renderWindow: s } = r.useContext(U.Ay);
                    function l(e, t, r) {
                        if ((n.current?.scrollToTop(), e && null != i.query)) {
                            let e = i.query.typeInfo.focusMode,
                                n =
                                    e !== m.e.MANUAL &&
                                    (e !== m.e.AUTO_WHEN_FILTERED || 0 !== i.query.queryText.length);
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
                    let d = (0, M.Ay)({
                            id: t,
                            isEnabled: i.isVisible,
                            orientation: P.Gl.VERTICAL,
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
                })({ navId: "channel-autocomplete", scrollerRef: n, state: s, onFocus: (e) => k.setSelectedIndex(e) }),
                f = e.editorRef.current?.getCurrentWord(),
                p = e.editorRef.current?.getSlateEditor(),
                T = null;
            null != p && (T = R.VW.getSelectedParentOfType(p, b.mk)?.[0] ?? null);
            let g = {
                    ...e,
                    navigator: I,
                    activeCommand: E,
                    activeCommandOption: A,
                    activeInlineAutocompleteInput: T,
                    canMentionUsers: a.users?.allowMentioning ?? !1,
                    canMentionEveryone: u,
                    hidePersonalInformation: _,
                    hideMentionDescription: a === O.oU.RULES_INPUT,
                    emojiIntention:
                        a === O.oU.RULES_INPUT
                            ? G.EmojiIntention.COMMUNITY_CONTENT
                            : h
                              ? G.EmojiIntention.NO_CUSTOM_EMOJI
                              : G.EmojiIntention.CHAT,
                    currentWord: f?.word ?? "",
                    currentWordIsAtStart: f?.isAtStart === !0,
                    optionText:
                        null != A
                            ? (0, N.getString)(
                                  { [A.name]: e.editorRef.current?.getCurrentCommandOptionValue() ?? [] },
                                  A.name,
                              )
                            : "",
                },
                [k] = r.useState(() => new b.Ay(g));
            return (
                r.useEffect(() => {
                    k.updateProps(g);
                }),
                r.useImperativeHandle(t, () => k, [k]),
                r.useEffect(() => {
                    function e(e) {
                        return l(e);
                    }
                    return (
                        k.on("change", e),
                        k.on("update", d),
                        () => {
                            k.off("change", e), k.off("update", d);
                        }
                    );
                }, [d, k]),
                r.useEffect(() => {
                    let e = s.query?.typeInfo.stores;
                    if (null != e) {
                        function t() {
                            return k.queryResults();
                        }
                        for (let n of e) n.addChangeListener(t);
                        return () => {
                            for (let n of e) n.removeChangeListener(t);
                        };
                    }
                }, [k, s.query?.typeInfo]),
                [s, k, I]
            );
        })({ ...e, guild: Y }, t, K),
        Z = a.autocomplete?.forceChatLayer ? p.Ay : f.Ay,
        X = (0, A.aI)($.selectedIndex);
    (0, h.gf)(W, $.isVisible, X);
    let Q = (0, g.l)({ editorHeight: V, type: a, state: $ }),
        J = (0, o.bG)([_.Ay], () => {
            let e = _.Ay.getSelfEmbeddedActivityForChannel(n.id),
                t = _.Ay.getActivityPanelMode();
            return (0, u.AX)(n) && null != e && (0, E.H)(e.location) === n.id && t === k.Gd.PANEL;
        }, [n]),
        ee = r.useMemo(
            () =>
                Q?.top == null && Q?.left == null && Q?.bottom == null && Q?.right == null ? "" : String(Date.now()),
            [Q?.top, Q?.left, Q?.bottom, Q?.right],
        );
    if (
        (r.useEffect(() => {
            B($.isVisible);
        }, [B, $.isVisible]),
        !$.isVisible || null == $.query || void 0 === Q)
    )
        return null;
    let et =
        $.query.typeInfo.renderResults({
            results: $.query.results,
            selectedIndex: $.selectedIndex,
            channel: n,
            guild: Y,
            query: $.query.queryText,
            options: $.query.options,
            onHover: (e) => z.onResultHover(e),
            onClick: (e) => z.onResultClick(e),
        }) ?? null;
    if (null == et) return null;
    let en = { [F.pK]: null == Q, [F.YB]: null != Q, [F.sQ]: null == Q && "bottom" === e.position, [F.mO]: J },
        ei = 490;
    null != Q && (ei = a.autocomplete?.small ? 200 : $.query?.type === m.DB.EMOJIS_AND_STICKERS ? 490 : 245);
    let er = Math.max(V, H?.current?.clientHeight ?? 0),
        ea = Math.min(0.5 * window.innerHeight, er);
    ei = Math.min(window.innerHeight - 120 - ea - (j ?? 0), ei);
    let es = (0, i.jsx)(A.Ay, {
        id: W,
        className: s()(F.nx, en),
        innerClassName: F.Fv,
        onMouseDown: (e) => e.preventDefault(),
        children: (0, i.jsx)(l.hD, {
            navigator: q,
            children: (0, i.jsx)(l.PR, {
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
                        className: F.XG,
                        style: { maxHeight: ei },
                        role: "listbox",
                        "aria-labelledby": (0, A.Sz)(W),
                        children: et,
                    });
                },
            }),
        }),
    });
    return null != Q
        ? (0, i.jsx)(Z, {
              children: (0, i.jsx)(c.Q, {
                  targetRef: e.targetRef,
                  overrideTargetRect: Q,
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
