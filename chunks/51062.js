r.d(n, {
    Z: function () {
        return b;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(931609),
    s = r(442837),
    l = r(456007),
    u = r(998698),
    c = r(541716),
    d = r(927723),
    f = r(271383),
    p = r(496675),
    h = r(246946),
    _ = r(594174),
    m = r(106824),
    g = r(691841),
    E = r(981631),
    v = r(377668),
    y = r(185923);
function b(e, n, r) {
    var i, b, I, T, S, A, C;
    let { channel: N, type: R } = e,
        [O, D] = a.useState(() => (0, m.P)()),
        x = (0, o.Z)(),
        L = (0, s.e7)([f.ZP], () => {
            if (null != e.guild) {
                var n;
                return null != f.ZP.getMember(null === (n = e.guild) || void 0 === n ? void 0 : n.id, v.fL);
            }
            return !1;
        }),
        w = (0, d.Ib)(e.guild, e.channel) && !L && !(0, d.g0)(e.guild),
        P = (0, s.e7)([f.ZP, _.default], () => {
            var e, n;
            let r = _.default.getCurrentUser();
            return null !== (n = null != N.guild_id && null != r ? (null === (e = f.ZP.getMember(N.guild_id, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        { canMentionEveryone: M, hidePersonalInformation: k } = (0, s.cj)(
            [p.Z, h.Z],
            () => ({
                canMentionEveryone: N.isPrivate() || P || R === c.Ie.RULES_INPUT || p.Z.can(E.Plq.MENTION_EVERYONE, N),
                hidePersonalInformation: h.Z.hidePersonalInformation
            }),
            [N, R, P]
        ),
        { activeCommand: U, activeCommandOption: B } = (0, s.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(N.id),
            activeCommandOption: u.Z.getActiveOption(N.id)
        })),
        G = (0, g.Z)({
            navId: 'channel-autocomplete',
            scrollerRef: r,
            state: O,
            onFocus: (e) => V.setSelectedIndex(e)
        }),
        Z = null === (i = e.editorRef.current) || void 0 === i ? void 0 : i.getCurrentWord(),
        F = {
            ...e,
            navigator: G,
            activeCommand: U,
            activeCommandOption: B,
            canMentionUsers: null !== (S = null === (b = R.users) || void 0 === b ? void 0 : b.allowMentioning) && void 0 !== S && S,
            canMentionEveryone: M,
            canMentionClyde: w,
            hidePersonalInformation: k,
            hideMentionDescription: R === c.Ie.RULES_INPUT,
            emojiIntention: R === c.Ie.RULES_INPUT ? y.Hz.COMMUNITY_CONTENT : y.Hz.CHAT,
            currentWord: null !== (A = null == Z ? void 0 : Z.word) && void 0 !== A ? A : '',
            currentWordIsAtStart: (null == Z ? void 0 : Z.isAtStart) === !0,
            optionText: null != B ? (0, l.KF)({ [B.name]: null !== (C = null === (I = e.editorRef.current) || void 0 === I ? void 0 : I.getCurrentCommandOptionValue()) && void 0 !== C ? C : [] }, B.name) : ''
        },
        [V] = a.useState(() => new m.Z(F));
    return (
        a.useEffect(() => {
            V.updateProps(F);
        }),
        a.useImperativeHandle(n, () => V, [V]),
        a.useEffect(() => {
            let e = (e) => D(e);
            return (
                V.on('change', e),
                V.on('update', x),
                () => {
                    V.off('change', e), V.off('update', x);
                }
            );
        }, [x, V]),
        a.useEffect(() => {
            var e;
            let n = null === (e = O.query) || void 0 === e ? void 0 : e.typeInfo.stores;
            if (null != n) {
                let e = () => V.queryResults();
                for (let r of n) r.addChangeListener(e);
                return () => {
                    for (let r of n) r.removeChangeListener(e);
                };
            }
        }, [V, null === (T = O.query) || void 0 === T ? void 0 : T.typeInfo]),
        [O, V, G]
    );
}
