r.d(n, {
    k: function () {
        return x;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(442837),
    o = r(780384),
    l = r(481060),
    u = r(607070),
    c = r(339085),
    d = r(906411),
    f = r(438332),
    _ = r(664437),
    h = r(806966),
    p = r(65029),
    m = r(210887),
    g = r(695346),
    E = r(430824),
    v = r(451478),
    I = r(768581),
    T = r(392552),
    b = r(543241),
    y = r(199257),
    S = r(880949),
    A = r(784222),
    N = r(149203),
    C = r(388032),
    R = r(598263);
let O = 250;
function D(e) {
    return null != e && 'animated' in e;
}
let L = (e) => {
        let { inspectedEmoji: n, guild: r } = e,
            i = D(n);
        return null != r && i ? C.intl.format(C.t.KFW2aW, { guildName: r.name }) : null;
    },
    x = a.memo(function (e) {
        let n,
            x,
            w,
            { className: P, emojiGrid: M, guildId: k, pickerIntention: U, channel: B } = e,
            { enabled: G } = T.Z.useExperiment({ location: 'EmojiPicker' }, { autoTrackExposure: !1 }),
            Z = h.kJ.useStore((e) => e.inspectedExpressionPosition),
            F = a.useMemo(() => {
                var e;
                let { rowIndex: n, columnIndex: r } = Z;
                return null === (e = M[n]) || void 0 === e ? void 0 : e[r];
            }, [M, Z]);
        switch (null == F ? void 0 : F.type) {
            case A.ld.EMOJI:
                n = null == F ? void 0 : F.emoji;
                break;
            case A.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                n = {
                    type: 'EXPAND_OR_COLLAPSE_EMOJI',
                    guildId: null == F ? void 0 : F.guildId,
                    allNamesString: null == F ? void 0 : F.name
                };
                break;
            case A.ld.SOUNDMOJI:
                n = null;
                break;
            case A.ld.CREATE_EMOJI:
            default:
                n = {
                    type: 'CREATE_EMOJI',
                    guildId: null == F ? void 0 : F.guildId,
                    allNamesString: null == F ? void 0 : F.name
                };
        }
        let V = (0, s.e7)([E.Z], () => (null !== n && n.type === d.B.GUILD ? E.Z.getGuild(n.guildId) : null), [n]),
            j = (0, s.e7)([v.Z], () => v.Z.isFocused()),
            H = (0, s.e7)([u.Z], () => u.Z.useReducedMotion, []),
            Y = g.Yk.useSetting(),
            W = (0, b.C1)(k, D(n) ? n : null),
            K = (0, s.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: z } = (0, y.Z)(k, U),
            q = (null == F ? void 0 : F.type) === A.ld.EMOJI ? F.subCategory : N.t0.NONE;
        if (
            (a.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= O &&
                        D(n) &&
                        q !== N.t0.NONE &&
                        (q === N.t0.NEWLY_ADDED_EMOJI && null !== n && n.type === d.B.GUILD && (0, _.Zg)(n.guildId, z[0].id),
                        null != Z.source &&
                            (0, b.Gn)({
                                emoji: n,
                                subCategory: q,
                                position: F.columnIndex + 1,
                                newlyAddedHighlight: q === N.t0.NEWLY_ADDED_EMOJI && f.Z.isNewerThanLastSeen(k, n.id)
                            }));
                };
            }),
            null == n)
        )
            return null;
        let Q = m.Z.theme;
        if (D(n)) {
            var X;
            let e =
                null != n.id
                    ? I.ZP.getEmojiURL({
                          id: n.id,
                          animated: Y && n.animated,
                          size: 28
                      })
                    : n.url;
            x =
                '' === e
                    ? (0, i.jsx)(l.Text, {
                          variant: 'text-md/normal',
                          className: R.glyphEmoji,
                          children: 'surrogates' in n ? n.surrogates : null
                      })
                    : (0, i.jsx)('img', {
                          alt: null !== (X = n.allNamesString) && void 0 !== X ? X : '',
                          src: e,
                          className: R.emoji
                      });
        } else if ('CREATE_EMOJI' === n.type)
            x = (0, i.jsx)(l.CirclePlusIcon, {
                size: 'md',
                color: 'currentColor',
                className: R.icon,
                colorClass: R.icon
            });
        else if ('EXPAND_OR_COLLAPSE_EMOJI' === n.type) {
            let e = r(187119),
                a = r(39874),
                s = r(853871),
                l = r(63149);
            x = K.has(n.guildId)
                ? (0, i.jsx)('img', {
                      className: R.icon,
                      src: (0, o.wj)(Q) ? s : l,
                      alt: ''
                  })
                : (0, i.jsx)('img', {
                      className: R.icon,
                      src: (0, o.wj)(Q) ? e : a,
                      alt: ''
                  });
        }
        let J =
            null != V
                ? (0, i.jsx)(S.Z, {
                      className: R.__invalid_guildIcon,
                      guild: V,
                      shouldAnimate: !H && j
                  })
                : null;
        w = G && 'CREATE_EMOJI' === n.type ? C.intl.string(C.t.XCmLfH) : 'EXPAND_OR_COLLAPSE_EMOJI' === n.type ? (K.has(n.guildId) ? C.intl.string(C.t['/K2RDA']) : C.intl.string(C.t.NZI2Zm)) : n.allNamesString;
        let $ =
            G && 'CREATE_EMOJI' === n.type
                ? C.intl.string(C.t['Z/r7IS'])
                : L({
                      inspectedEmoji: n,
                      channel: B,
                      guildId: k,
                      intention: U,
                      guild: V
                  });
        return (0, i.jsx)(p.Z, {
            className: P,
            graphicPrimary: x,
            graphicSecondary: J,
            titlePrimary: w,
            titleSecondary: $,
            isFavorite: W,
            emojiSubCategory: q
        });
    });
