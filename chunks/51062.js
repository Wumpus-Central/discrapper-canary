n.d(t, { Z: () => I }), n(47120);
var r = n(192379),
    i = n(931609),
    o = n(442837),
    a = n(456007),
    s = n(998698),
    l = n(541716),
    c = n(797610),
    u = n(271383),
    d = n(496675),
    f = n(246946),
    _ = n(594174),
    p = n(106824),
    h = n(691841),
    m = n(981631),
    g = n(377668),
    E = n(185923);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t, n) {
    var b, v, I, S, T, N, A;
    let { channel: C, type: R } = e,
        [P, w] = r.useState(() => (0, p.P)()),
        D = (0, i.Z)(),
        L = (0, o.e7)([u.ZP], () => {
            if (null != e.guild) {
                var t;
                return null != u.ZP.getMember(null == (t = e.guild) ? void 0 : t.id, g.fL);
            }
            return !1;
        }),
        x = (0, c.Ib)(e.guild, e.channel) && !L && !(0, c.g0)(e.guild),
        M = (0, o.e7)([u.ZP, _.default], () => {
            var e, t;
            let n = _.default.getCurrentUser();
            return null != (t = null != C.guild_id && null != n ? (null == (e = u.ZP.getMember(C.guild_id, n.id)) ? void 0 : e.isPending) : null) && t;
        }),
        { canMentionEveryone: k, hidePersonalInformation: j } = (0, o.cj)(
            [d.Z, f.Z],
            () => ({
                canMentionEveryone: C.isPrivate() || M || R === l.Ie.RULES_INPUT || d.Z.can(m.Plq.MENTION_EVERYONE, C),
                hidePersonalInformation: f.Z.hidePersonalInformation
            }),
            [C, R, M]
        ),
        { activeCommand: U, activeCommandOption: G } = (0, o.cj)([s.Z], () => ({
            activeCommand: s.Z.getActiveCommand(C.id),
            activeCommandOption: s.Z.getActiveOption(C.id)
        })),
        B = (0, h.Z)({
            navId: 'channel-autocomplete',
            scrollerRef: n,
            state: P,
            onFocus: (e) => Z.setSelectedIndex(e)
        }),
        F = null == (b = e.editorRef.current) ? void 0 : b.getCurrentWord(),
        V = O(y({}, e), {
            navigator: B,
            activeCommand: U,
            activeCommandOption: G,
            canMentionUsers: null != (T = null == (v = R.users) ? void 0 : v.allowMentioning) && T,
            canMentionEveryone: k,
            canMentionClyde: x,
            hidePersonalInformation: j,
            hideMentionDescription: R === l.Ie.RULES_INPUT,
            emojiIntention: R === l.Ie.RULES_INPUT ? E.Hz.COMMUNITY_CONTENT : E.Hz.CHAT,
            currentWord: null != (N = null == F ? void 0 : F.word) ? N : '',
            currentWordIsAtStart: (null == F ? void 0 : F.isAtStart) === !0,
            optionText: null != G ? (0, a.KF)({ [G.name]: null != (A = null == (I = e.editorRef.current) ? void 0 : I.getCurrentCommandOptionValue()) ? A : [] }, G.name) : ''
        }),
        [Z] = r.useState(() => new p.Z(V));
    return (
        r.useEffect(() => {
            Z.updateProps(V);
        }),
        r.useImperativeHandle(t, () => Z, [Z]),
        r.useEffect(() => {
            let e = (e) => w(e);
            return (
                Z.on('change', e),
                Z.on('update', D),
                () => {
                    Z.off('change', e), Z.off('update', D);
                }
            );
        }, [D, Z]),
        r.useEffect(() => {
            var e;
            let t = null == (e = P.query) ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => Z.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [Z, null == (S = P.query) ? void 0 : S.typeInfo]),
        [P, Z, B]
    );
}
