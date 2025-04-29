n.d(t, { k: () => w });
var r = n(200651),
    i = n(192379),
    o = n(442837),
    a = n(780384),
    s = n(481060),
    l = n(607070),
    c = n(339085),
    u = n(906411),
    d = n(438332),
    f = n(664437),
    _ = n(806966),
    p = n(65029),
    h = n(210887),
    m = n(695346),
    g = n(430824),
    E = n(451478),
    b = n(768581),
    y = n(392552),
    O = n(543241),
    v = n(199257),
    I = n(880949),
    S = n(784222),
    T = n(149203),
    A = n(388032),
    N = n(466988);
let C = 250;
function R(e) {
    return null != e && 'animated' in e;
}
let P = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = R(t);
        return null != n && r ? A.intl.format(A.t.KFW2aW, { guildName: n.name }) : null;
    },
    w = i.memo(function (e) {
        let t,
            w,
            D,
            { className: L, emojiGrid: x, guildId: M, pickerIntention: k, channel: j } = e,
            { enabled: U } = y.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            G = _.kJ.useStore((e) => e.inspectedExpressionPosition),
            B = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = G;
                return null == (e = x[t]) ? void 0 : e[n];
            }, [x, G]);
        switch (null == B ? void 0 : B.type) {
            case S.ld.EMOJI:
                t = null == B ? void 0 : B.emoji;
                break;
            case S.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: 'EXPAND_OR_COLLAPSE_EMOJI',
                    guildId: null == B ? void 0 : B.guildId,
                    allNamesString: null == B ? void 0 : B.name
                };
                break;
            case S.ld.SOUNDMOJI:
                t = null;
                break;
            case S.ld.CREATE_EMOJI:
            default:
                t = {
                    type: 'CREATE_EMOJI',
                    guildId: null == B ? void 0 : B.guildId,
                    allNamesString: null == B ? void 0 : B.name
                };
        }
        let V = (0, o.e7)([g.Z], () => (null !== t && t.type === u.B.GUILD ? g.Z.getGuild(t.guildId) : null), [t]),
            F = (0, o.e7)([E.Z], () => E.Z.isFocused()),
            Z = (0, o.e7)([l.Z], () => l.Z.useReducedMotion, []),
            H = m.Yk.useSetting(),
            Y = (0, O.C1)(M, R(t) ? t : null),
            W = (0, o.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: K } = (0, v.Z)(M, k),
            z = (null == B ? void 0 : B.type) === S.ld.EMOJI ? B.subCategory : T.t0.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= C &&
                        R(t) &&
                        z !== T.t0.NONE &&
                        (z === T.t0.NEWLY_ADDED_EMOJI && null !== t && t.type === u.B.GUILD && (0, f.Zg)(t.guildId, K[0].id),
                        null != G.source &&
                            (0, O.Gn)({
                                emoji: t,
                                subCategory: z,
                                position: B.columnIndex + 1,
                                newlyAddedHighlight: z === T.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(M, t.id)
                            }));
                };
            }),
            null == t)
        )
            return null;
        let q = h.Z.theme;
        if (R(t)) {
            var Q;
            let e =
                null != t.id
                    ? b.ZP.getEmojiURL({
                          id: t.id,
                          animated: H && t.animated,
                          size: 28
                      })
                    : t.url;
            w =
                '' === e
                    ? (0, r.jsx)(s.Text, {
                          variant: 'text-md/normal',
                          className: N.glyphEmoji,
                          children: 'surrogates' in t ? t.surrogates : null
                      })
                    : (0, r.jsx)('img', {
                          alt: null != (Q = t.allNamesString) ? Q : '',
                          src: e,
                          className: N.emoji
                      });
        } else if ('CREATE_EMOJI' === t.type)
            w = (0, r.jsx)(s.oFk, {
                size: 'md',
                color: 'currentColor',
                className: N.icon,
                colorClass: N.icon
            });
        else if ('EXPAND_OR_COLLAPSE_EMOJI' === t.type) {
            let e = n(187119),
                i = n(39874),
                o = n(853871),
                s = n(63149);
            w = W.has(t.guildId)
                ? (0, r.jsx)('img', {
                      className: N.icon,
                      src: (0, a.wj)(q) ? o : s,
                      alt: ''
                  })
                : (0, r.jsx)('img', {
                      className: N.icon,
                      src: (0, a.wj)(q) ? e : i,
                      alt: ''
                  });
        }
        let X =
            null != V
                ? (0, r.jsx)(I.Z, {
                      className: N.__invalid_guildIcon,
                      guild: V,
                      shouldAnimate: !Z && F
                  })
                : null;
        D = U && 'CREATE_EMOJI' === t.type ? A.intl.string(A.t.XCmLfH) : 'EXPAND_OR_COLLAPSE_EMOJI' === t.type ? (W.has(t.guildId) ? A.intl.string(A.t['/K2RDA']) : A.intl.string(A.t.NZI2Zm)) : t.allNamesString;
        let J =
            U && 'CREATE_EMOJI' === t.type
                ? A.intl.string(A.t['Z/r7IS'])
                : P({
                      inspectedEmoji: t,
                      channel: j,
                      guildId: M,
                      intention: k,
                      guild: V
                  });
        return (0, r.jsx)(p.Z, {
            className: L,
            graphicPrimary: w,
            graphicSecondary: X,
            titlePrimary: D,
            titleSecondary: J,
            isFavorite: Y,
            emojiSubCategory: z
        });
    });
