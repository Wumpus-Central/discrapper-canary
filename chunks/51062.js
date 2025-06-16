n.d(t, { Z: () => O }), n(388685);
var r = n(73800),
    i = n(710251),
    a = n(442837),
    o = n(456007),
    s = n(998698),
    l = n(541716),
    c = n(271383),
    u = n(496675),
    d = n(246946),
    _ = n(594174),
    f = n(106824),
    p = n(691841),
    h = n(981631),
    m = n(185923);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t, n) {
    var g, b, O, v, I, T, S;
    let { channel: A, type: N } = e,
        [C, R] = r.useState(() => (0, f.P)()),
        P = (0, i.Z)(),
        w = (0, a.e7)([c.ZP, _.default], () => {
            var e, t;
            let n = _.default.getCurrentUser();
            return null != (t = null != A.guild_id && null != n ? (null == (e = c.ZP.getMember(A.guild_id, n.id)) ? void 0 : e.isPending) : null) && t;
        }),
        { canMentionEveryone: D, hidePersonalInformation: L } = (0, a.cj)(
            [u.Z, d.Z],
            () => ({
                canMentionEveryone: A.isPrivate() || w || N === l.Ie.RULES_INPUT || u.Z.can(h.Plq.MENTION_EVERYONE, A),
                hidePersonalInformation: d.Z.hidePersonalInformation
            }),
            [A, N, w]
        ),
        { activeCommand: x, activeCommandOption: M } = (0, a.cj)([s.Z], () => ({
            activeCommand: s.Z.getActiveCommand(A.id),
            activeCommandOption: s.Z.getActiveOption(A.id)
        })),
        k = (0, p.Z)({
            navId: 'channel-autocomplete',
            scrollerRef: n,
            state: C,
            onFocus: (e) => G.setSelectedIndex(e)
        }),
        j = null == (g = e.editorRef.current) ? void 0 : g.getCurrentWord(),
        U = y(E({}, e), {
            navigator: k,
            activeCommand: x,
            activeCommandOption: M,
            canMentionUsers: null != (I = null == (b = N.users) ? void 0 : b.allowMentioning) && I,
            canMentionEveryone: D,
            hidePersonalInformation: L,
            hideMentionDescription: N === l.Ie.RULES_INPUT,
            emojiIntention: N === l.Ie.RULES_INPUT ? m.Hz.COMMUNITY_CONTENT : m.Hz.CHAT,
            currentWord: null != (T = null == j ? void 0 : j.word) ? T : '',
            currentWordIsAtStart: (null == j ? void 0 : j.isAtStart) === !0,
            optionText: null != M ? (0, o.KF)({ [M.name]: null != (S = null == (O = e.editorRef.current) ? void 0 : O.getCurrentCommandOptionValue()) ? S : [] }, M.name) : ''
        }),
        [G] = r.useState(() => new f.Z(U));
    return (
        r.useEffect(() => {
            G.updateProps(U);
        }),
        r.useImperativeHandle(t, () => G, [G]),
        r.useEffect(() => {
            let e = (e) => R(e);
            return (
                G.on('change', e),
                G.on('update', P),
                () => {
                    G.off('change', e), G.off('update', P);
                }
            );
        }, [P, G]),
        r.useEffect(() => {
            var e;
            let t = null == (e = C.query) ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => G.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [G, null == (v = C.query) ? void 0 : v.typeInfo]),
        [C, G, k]
    );
}
