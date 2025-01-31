n.d(t, { Z: () => v }), n(47120);
var i = n(192379),
    r = n(931609),
    a = n(442837),
    s = n(456007),
    o = n(998698),
    l = n(541716),
    u = n(927723),
    c = n(271383),
    d = n(496675),
    f = n(246946),
    _ = n(594174),
    p = n(106824),
    h = n(691841),
    m = n(981631),
    g = n(377668),
    E = n(185923);
function v(e, t, n) {
    var v, y, I, b, T, S, A;
    let { channel: N, type: C } = e,
        [R, O] = i.useState(() => (0, p.P)()),
        D = (0, r.Z)(),
        x = (0, a.e7)([c.ZP], () => {
            if (null != e.guild) {
                var t;
                return null != c.ZP.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, g.fL);
            }
            return !1;
        }),
        L = (0, u.Ib)(e.guild, e.channel) && !x && !(0, u.g0)(e.guild),
        P = (0, a.e7)([c.ZP, _.default], () => {
            var e, t;
            let n = _.default.getCurrentUser();
            return null !== (t = null != N.guild_id && null != n ? (null === (e = c.ZP.getMember(N.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { canMentionEveryone: w, hidePersonalInformation: M } = (0, a.cj)(
            [d.Z, f.Z],
            () => ({
                canMentionEveryone: N.isPrivate() || P || C === l.Ie.RULES_INPUT || d.Z.can(m.Plq.MENTION_EVERYONE, N),
                hidePersonalInformation: f.Z.hidePersonalInformation
            }),
            [N, C, P]
        ),
        { activeCommand: k, activeCommandOption: U } = (0, a.cj)([o.Z], () => ({
            activeCommand: o.Z.getActiveCommand(N.id),
            activeCommandOption: o.Z.getActiveOption(N.id)
        })),
        G = (0, h.Z)({
            navId: 'channel-autocomplete',
            scrollerRef: n,
            state: R,
            onFocus: (e) => F.setSelectedIndex(e)
        }),
        B = null === (v = e.editorRef.current) || void 0 === v ? void 0 : v.getCurrentWord(),
        Z = {
            ...e,
            navigator: G,
            activeCommand: k,
            activeCommandOption: U,
            canMentionUsers: null !== (T = null === (y = C.users) || void 0 === y ? void 0 : y.allowMentioning) && void 0 !== T && T,
            canMentionEveryone: w,
            canMentionClyde: L,
            hidePersonalInformation: M,
            hideMentionDescription: C === l.Ie.RULES_INPUT,
            emojiIntention: C === l.Ie.RULES_INPUT ? E.Hz.COMMUNITY_CONTENT : E.Hz.CHAT,
            currentWord: null !== (S = null == B ? void 0 : B.word) && void 0 !== S ? S : '',
            currentWordIsAtStart: (null == B ? void 0 : B.isAtStart) === !0,
            optionText: null != U ? (0, s.KF)({ [U.name]: null !== (A = null === (I = e.editorRef.current) || void 0 === I ? void 0 : I.getCurrentCommandOptionValue()) && void 0 !== A ? A : [] }, U.name) : ''
        },
        [F] = i.useState(() => new p.Z(Z));
    return (
        i.useEffect(() => {
            F.updateProps(Z);
        }),
        i.useImperativeHandle(t, () => F, [F]),
        i.useEffect(() => {
            let e = (e) => O(e);
            return (
                F.on('change', e),
                F.on('update', D),
                () => {
                    F.off('change', e), F.off('update', D);
                }
            );
        }, [D, F]),
        i.useEffect(() => {
            var e;
            let t = null === (e = R.query) || void 0 === e ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => F.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e);
                };
            }
        }, [F, null === (b = R.query) || void 0 === b ? void 0 : b.typeInfo]),
        [R, F, G]
    );
}
