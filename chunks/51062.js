n.d(t, { Z: () => v }), n(388685);
var r = n(647438),
    i = n(338379),
    a = n(442837),
    o = n(456007),
    s = n(998698),
    l = n(541716),
    c = n(887490),
    u = n(271383),
    d = n(496675),
    f = n(246946),
    _ = n(594174),
    p = n(106824),
    h = n(691841),
    m = n(981631),
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
    var E, y, v, I, T, S, A, C, N, R;
    let { channel: P, type: w } = e,
        [D, x] = r.useState(() => (0, p.PA)()),
        L = (0, i.Z)(),
        j = (0, a.e7)([u.ZP, _.default], () => {
            var e, t;
            let n = _.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != P.guild_id && null != n
                            ? null == (e = u.ZP.getMember(P.guild_id, n.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        { canMentionEveryone: M, hidePersonalInformation: k } = (0, a.cj)(
            [d.Z, f.Z],
            () => ({
                canMentionEveryone: P.isPrivate() || j || w === l.Ie.RULES_INPUT || d.Z.can(m.Plq.MENTION_EVERYONE, P),
                hidePersonalInformation: f.Z.hidePersonalInformation,
            }),
            [P, w, j],
        ),
        { activeCommand: U, activeCommandOption: G } = (0, a.cj)([s.Z], () => ({
            activeCommand: s.Z.getActiveCommand(P.id),
            activeCommandOption: s.Z.getActiveOption(P.id),
        })),
        B = (0, h.Z)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: D,
            onFocus: (e) => Y.setSelectedIndex(e),
        }),
        Z = null == (E = e.editorRef.current) ? void 0 : E.getCurrentWord(),
        V = null == (y = e.editorRef.current) ? void 0 : y.getSlateEditor(),
        F = null;
    null != V && (F = null != (A = null == (S = c.bN.getSelectedParentOfType(V, p.un)) ? void 0 : S[0]) ? A : null);
    let H = O(b({}, e), {
            navigator: B,
            activeCommand: U,
            activeCommandOption: G,
            activeInlineAutocompleteInput: F,
            canMentionUsers: null != (C = null == (v = w.users) ? void 0 : v.allowMentioning) && C,
            canMentionEveryone: M,
            hidePersonalInformation: k,
            hideMentionDescription: w === l.Ie.RULES_INPUT,
            emojiIntention: w === l.Ie.RULES_INPUT ? g.Hz.COMMUNITY_CONTENT : g.Hz.CHAT,
            currentWord: null != (N = null == Z ? void 0 : Z.word) ? N : "",
            currentWordIsAtStart: (null == Z ? void 0 : Z.isAtStart) === !0,
            optionText:
                null != G
                    ? (0, o.KF)(
                          {
                              [G.name]:
                                  null !=
                                  (R = null == (I = e.editorRef.current) ? void 0 : I.getCurrentCommandOptionValue())
                                      ? R
                                      : [],
                          },
                          G.name,
                      )
                    : "",
        }),
        [Y] = r.useState(() => new p.ZP(H));
    return (
        r.useEffect(() => {
            Y.updateProps(H);
        }),
        r.useImperativeHandle(t, () => Y, [Y]),
        r.useEffect(() => {
            let e = (e) => x(e);
            return (
                Y.on("change", e),
                Y.on("update", L),
                () => {
                    Y.off("change", e), Y.off("update", L);
                }
            );
        }, [L, Y]),
        r.useEffect(() => {
            var e;
            let t = null == (e = D.query) ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => Y.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [Y, null == (T = D.query) ? void 0 : T.typeInfo]),
        [D, Y, B]
    );
}
