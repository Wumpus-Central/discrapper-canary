r.d(n, {
    Z: function () {
        return T;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(931609),
    o = r(442837),
    l = r(456007),
    u = r(998698),
    c = r(541716),
    d = r(927723),
    f = r(271383),
    _ = r(496675),
    h = r(246946),
    p = r(594174),
    m = r(106824),
    g = r(691841),
    E = r(981631),
    v = r(377668),
    I = r(185923);
function T(e, n, r) {
    var i, T, b, y, S, A, N;
    let { channel: C, type: R } = e,
        [O, D] = a.useState(() => (0, m.P)()),
        L = (0, s.Z)(),
        x = (0, o.e7)([f.ZP], () => {
            if (null != e.guild) {
                var n;
                return null != f.ZP.getMember(null === (n = e.guild) || void 0 === n ? void 0 : n.id, v.fL);
            }
            return !1;
        }),
        w = (0, d.Ib)(e.guild, e.channel) && !x && !(0, d.g0)(e.guild),
        P = (0, o.e7)([f.ZP, p.default], () => {
            var e, n;
            let r = p.default.getCurrentUser();
            return null !== (n = null != C.guild_id && null != r ? (null === (e = f.ZP.getMember(C.guild_id, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        { canMentionEveryone: M, hidePersonalInformation: k } = (0, o.cj)(
            [_.Z, h.Z],
            () => ({
                canMentionEveryone: C.isPrivate() || P || R === c.Ie.RULES_INPUT || _.Z.can(E.Plq.MENTION_EVERYONE, C),
                hidePersonalInformation: h.Z.hidePersonalInformation
            }),
            [C, R, P]
        ),
        { activeCommand: U, activeCommandOption: B } = (0, o.cj)([u.Z], () => ({
            activeCommand: u.Z.getActiveCommand(C.id),
            activeCommandOption: u.Z.getActiveOption(C.id)
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
            canMentionUsers: null !== (S = null === (T = R.users) || void 0 === T ? void 0 : T.allowMentioning) && void 0 !== S && S,
            canMentionEveryone: M,
            canMentionClyde: w,
            hidePersonalInformation: k,
            hideMentionDescription: R === c.Ie.RULES_INPUT,
            emojiIntention: R === c.Ie.RULES_INPUT ? I.Hz.COMMUNITY_CONTENT : I.Hz.CHAT,
            currentWord: null !== (A = null == Z ? void 0 : Z.word) && void 0 !== A ? A : '',
            currentWordIsAtStart: (null == Z ? void 0 : Z.isAtStart) === !0,
            optionText: null != B ? (0, l.KF)({ [B.name]: null !== (N = null === (b = e.editorRef.current) || void 0 === b ? void 0 : b.getCurrentCommandOptionValue()) && void 0 !== N ? N : [] }, B.name) : ''
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
                V.on('update', L),
                () => {
                    V.off('change', e), V.off('update', L);
                }
            );
        }, [L, V]),
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
        }, [V, null === (y = O.query) || void 0 === y ? void 0 : y.typeInfo]),
        [O, V, G]
    );
}
