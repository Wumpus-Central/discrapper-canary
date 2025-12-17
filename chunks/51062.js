n.d(t, { Z: () => v }), n(388685);
var r = n(473749),
    i = n(110660),
    a = n(442837),
    o = n(456007),
    s = n(998698),
    l = n(541716),
    c = n(887490),
    u = n(271383),
    d = n(496675),
    f = n(246946),
    p = n(594174),
    _ = n(106824),
    m = n(691841),
    h = n(981631),
    g = n(185923);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t, n) {
    var E, y, v, S, I, T, C, A, N, P, R;
    let { channel: w, type: D } = e,
        [x, L] = r.useState(() => (0, _.PA)()),
        j = (0, i.Z)(),
        M = (0, a.e7)([u.ZP, p.default], () => {
            var e, t;
            let n = p.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != w.guild_id && null != n
                            ? null == (e = u.ZP.getMember(w.guild_id, n.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        { canMentionEveryone: k, hidePersonalInformation: U } = (0, a.cj)(
            [d.Z, f.Z],
            () => ({
                canMentionEveryone: w.isPrivate() || M || D === l.Ie.RULES_INPUT || d.Z.can(h.Plq.MENTION_EVERYONE, w),
                hidePersonalInformation: f.Z.hidePersonalInformation,
            }),
            [w, D, M],
        ),
        { activeCommand: G, activeCommandOption: Z } = (0, a.cj)([s.Z], () => ({
            activeCommand: s.Z.getActiveCommand(w.id),
            activeCommandOption: s.Z.getActiveOption(w.id),
        })),
        F = (0, m.Z)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: x,
            onFocus: (e) => W.setSelectedIndex(e),
        }),
        B = null == (E = e.editorRef.current) ? void 0 : E.getCurrentWord(),
        V = null == (y = e.editorRef.current) ? void 0 : y.getSlateEditor(),
        H = null;
    null != V && (H = null != (C = null == (T = c.bN.getSelectedParentOfType(V, _.un)) ? void 0 : T[0]) ? C : null);
    let Y = O(b({}, e), {
            navigator: F,
            activeCommand: G,
            activeCommandOption: Z,
            activeInlineAutocompleteInput: H,
            canMentionUsers: null != (A = null == (v = D.users) ? void 0 : v.allowMentioning) && A,
            canMentionEveryone: k,
            hidePersonalInformation: U,
            hideMentionDescription: D === l.Ie.RULES_INPUT,
            emojiIntention: D === l.Ie.RULES_INPUT ? g.Hz.COMMUNITY_CONTENT : g.Hz.CHAT,
            currentWord: null != (N = null == B ? void 0 : B.word) ? N : "",
            currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
            currentFullWord: null != (P = null == B ? void 0 : B.fullWord) ? P : "",
            optionText:
                null != Z
                    ? (0, o.KF)(
                          {
                              [Z.name]:
                                  null !=
                                  (R = null == (S = e.editorRef.current) ? void 0 : S.getCurrentCommandOptionValue())
                                      ? R
                                      : [],
                          },
                          Z.name,
                      )
                    : "",
        }),
        [W] = r.useState(() => new _.ZP(Y));
    return (
        r.useEffect(() => {
            W.updateProps(Y);
        }),
        r.useImperativeHandle(t, () => W, [W]),
        r.useEffect(() => {
            let e = (e) => L(e);
            return (
                W.on("change", e),
                W.on("update", j),
                () => {
                    W.off("change", e), W.off("update", j);
                }
            );
        }, [j, W]),
        r.useEffect(() => {
            var e;
            let t = null == (e = x.query) ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => W.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [W, null == (I = x.query) ? void 0 : I.typeInfo]),
        [x, W, F]
    );
}
