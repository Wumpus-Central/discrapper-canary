n.d(t, { k: () => L });
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(780384),
    o = n(481060),
    l = n(607070),
    u = n(339085),
    c = n(906411),
    d = n(438332),
    f = n(664437),
    _ = n(806966),
    p = n(65029),
    h = n(210887),
    m = n(695346),
    g = n(430824),
    E = n(451478),
    v = n(768581),
    y = n(392552),
    I = n(543241),
    T = n(199257),
    b = n(880949),
    S = n(784222),
    A = n(149203),
    N = n(388032),
    C = n(80725);
let R = 250;
function O(e) {
    return null != e && 'animated' in e;
}
let D = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            i = O(t);
        return null != n && i ? N.intl.format(N.t.KFW2aW, { guildName: n.name }) : null;
    },
    L = r.memo(function (e) {
        let t,
            L,
            x,
            { className: P, emojiGrid: w, guildId: M, pickerIntention: k, channel: U } = e,
            { enabled: G } = y.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            B = _.kJ.useStore((e) => e.inspectedExpressionPosition),
            Z = r.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = B;
                return null === (e = w[t]) || void 0 === e ? void 0 : e[n];
            }, [w, B]);
        switch (null == Z ? void 0 : Z.type) {
            case S.ld.EMOJI:
                t = null == Z ? void 0 : Z.emoji;
                break;
            case S.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: 'EXPAND_OR_COLLAPSE_EMOJI',
                    guildId: null == Z ? void 0 : Z.guildId,
                    allNamesString: null == Z ? void 0 : Z.name
                };
                break;
            case S.ld.SOUNDMOJI:
                t = null;
                break;
            case S.ld.CREATE_EMOJI:
            default:
                t = {
                    type: 'CREATE_EMOJI',
                    guildId: null == Z ? void 0 : Z.guildId,
                    allNamesString: null == Z ? void 0 : Z.name
                };
        }
        let F = (0, a.e7)([g.Z], () => (null !== t && t.type === c.B.GUILD ? g.Z.getGuild(t.guildId) : null), [t]),
            V = (0, a.e7)([E.Z], () => E.Z.isFocused()),
            j = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
            H = m.Yk.useSetting(),
            Y = (0, I.C1)(M, O(t) ? t : null),
            W = (0, a.e7)([u.ZP], () => u.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: K } = (0, T.Z)(M, k),
            z = (null == Z ? void 0 : Z.type) === S.ld.EMOJI ? Z.subCategory : A.t0.NONE;
        if (
            (r.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= R &&
                        O(t) &&
                        z !== A.t0.NONE &&
                        (z === A.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === c.B.GUILD && (0, f.Zg)(t.guildId, K[0].id),
                        null != B.source &&
                            (0, I.Gn)({
                                emoji: t,
                                subCategory: z,
                                position: Z.columnIndex + 1,
                                newlyAddedHighlight: z === A.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(M, t.id)
                            }));
                };
            }),
            null == t)
        )
            return null;
        let q = h.Z.theme;
        if (O(t)) {
            var Q;
            let e =
                null != t.id
                    ? v.ZP.getEmojiURL({
                          id: t.id,
                          animated: H && t.animated,
                          size: 28
                      })
                    : t.url;
            L =
                '' === e
                    ? (0, i.jsx)(o.Text, {
                          variant: 'text-md/normal',
                          className: C.glyphEmoji,
                          children: 'surrogates' in t ? t.surrogates : null
                      })
                    : (0, i.jsx)('img', {
                          alt: null !== (Q = t.allNamesString) && void 0 !== Q ? Q : '',
                          src: e,
                          className: C.emoji
                      });
        } else if ('CREATE_EMOJI' === t.type)
            L = (0, i.jsx)(o.oFk, {
                size: 'md',
                color: 'currentColor',
                className: C.icon,
                colorClass: C.icon
            });
        else if ('EXPAND_OR_COLLAPSE_EMOJI' === t.type) {
            let e = n(187119),
                r = n(39874),
                a = n(853871),
                o = n(63149);
            L = W.has(t.guildId)
                ? (0, i.jsx)('img', {
                      className: C.icon,
                      src: (0, s.wj)(q) ? a : o,
                      alt: ''
                  })
                : (0, i.jsx)('img', {
                      className: C.icon,
                      src: (0, s.wj)(q) ? e : r,
                      alt: ''
                  });
        }
        let X =
            null != F
                ? (0, i.jsx)(b.Z, {
                      className: C.__invalid_guildIcon,
                      guild: F,
                      shouldAnimate: !j && V
                  })
                : null;
        x = G && 'CREATE_EMOJI' === t.type ? N.intl.string(N.t.XCmLfH) : 'EXPAND_OR_COLLAPSE_EMOJI' === t.type ? (W.has(t.guildId) ? N.intl.string(N.t['/K2RDA']) : N.intl.string(N.t.NZI2Zm)) : t.allNamesString;
        let J =
            G && 'CREATE_EMOJI' === t.type
                ? N.intl.string(N.t['Z/r7IS'])
                : D({
                      inspectedEmoji: t,
                      channel: U,
                      guildId: M,
                      intention: k,
                      guild: F
                  });
        return (0, i.jsx)(p.Z, {
            className: P,
            graphicPrimary: L,
            graphicSecondary: X,
            titlePrimary: x,
            titleSecondary: J,
            isFavorite: Y,
            emojiSubCategory: z
        });
    });
