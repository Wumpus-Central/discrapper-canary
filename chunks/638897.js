n.d(t, { A: () => A }), n(896048);
var r = n(64700),
    i = n(27867),
    a = n(311907),
    s = n(258363),
    o = n(861382),
    l = n(355622),
    c = n(711371),
    u = n(696451),
    d = n(576705),
    f = n(351906),
    p = n(287809),
    _ = n(31498),
    h = n(986719),
    m = n(652215),
    g = n(307731);
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
function A(e, t, n) {
    var E, y, A, v, S, I, T, C, N, R, w;
    let { channel: P, type: D } = e,
        [x, L] = r.useState(() => (0, _.Ur)()),
        j = (0, i.A)(),
        M = (0, a.bG)([u.Ay, p.default], () => {
            var e, t;
            let n = p.default.getCurrentUser();
            return (
                null !=
                    (e =
                        null != P.guild_id && null != n
                            ? null == (t = u.Ay.getMember(P.guild_id, n.id))
                                ? void 0
                                : t.isPending
                            : null) && e
            );
        }),
        { canMentionEveryone: k, hidePersonalInformation: U } = (0, a.cf)(
            [d.A, f.A],
            () => ({
                canMentionEveryone: P.isPrivate() || M || D === l.oU.RULES_INPUT || d.A.can(m.xBc.MENTION_EVERYONE, P),
                hidePersonalInformation: f.A.hidePersonalInformation,
            }),
            [P, D, M],
        ),
        { activeCommand: G, activeCommandOption: V } = (0, a.cf)([o.A], () => ({
            activeCommand: o.A.getActiveCommand(P.id),
            activeCommandOption: o.A.getActiveOption(P.id),
        })),
        F = (0, h.A)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: x,
            onFocus: (e) => K.setSelectedIndex(e),
        }),
        B = null == (S = e.editorRef.current) ? void 0 : S.getCurrentWord(),
        H = null == (I = e.editorRef.current) ? void 0 : I.getSlateEditor(),
        Y = null;
    null != H && (Y = null != (R = null == (w = c.VW.getSelectedParentOfType(H, _.mk)) ? void 0 : w[0]) ? R : null);
    let W = O(b({}, e), {
            navigator: F,
            activeCommand: G,
            activeCommandOption: V,
            activeInlineAutocompleteInput: Y,
            canMentionUsers: null != (E = null == (T = D.users) ? void 0 : T.allowMentioning) && E,
            canMentionEveryone: k,
            hidePersonalInformation: U,
            hideMentionDescription: D === l.oU.RULES_INPUT,
            emojiIntention: D === l.oU.RULES_INPUT ? g.b_.COMMUNITY_CONTENT : g.b_.CHAT,
            currentWord: null != (y = null == B ? void 0 : B.word) ? y : "",
            currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
            currentFullWord: null != (A = null == B ? void 0 : B.fullWord) ? A : "",
            optionText:
                null != V
                    ? (0, s.AA)(
                          {
                              [V.name]:
                                  null !=
                                  (v = null == (C = e.editorRef.current) ? void 0 : C.getCurrentCommandOptionValue())
                                      ? v
                                      : [],
                          },
                          V.name,
                      )
                    : "",
        }),
        [K] = r.useState(() => new _.Ay(W));
    return (
        r.useEffect(() => {
            K.updateProps(W);
        }),
        r.useImperativeHandle(t, () => K, [K]),
        r.useEffect(() => {
            let e = (e) => L(e);
            return (
                K.on("change", e),
                K.on("update", j),
                () => {
                    K.off("change", e), K.off("update", j);
                }
            );
        }, [j, K]),
        r.useEffect(() => {
            var e;
            let t = null == (e = x.query) ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => K.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [K, null == (N = x.query) ? void 0 : N.typeInfo]),
        [x, K, F]
    );
}
