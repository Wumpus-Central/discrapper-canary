n.d(t, { k: () => w });
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(780384),
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
    y = n(176354),
    O = n(392552),
    v = n(543241),
    I = n(199257),
    T = n(880949),
    S = n(784222),
    A = n(149203),
    C = n(388032),
    N = n(401705);
let R = 250;
function P(e) {
    return null != e && "animated" in e;
}
let D = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = P(t);
        return null != n && r ? C.intl.format(C.t.KFW2aY, { guildName: n.name }) : null;
    },
    w = i.memo(function (e) {
        let t,
            w,
            L,
            { className: x, emojiGrid: M, guildId: j, pickerIntention: k, channel: U } = e,
            { enabled: G } = O.Z.useExperiment({ location: "EmojiPicker" }, { autoTrackExposure: !1 }),
            B = _.kJ.useStore((e) => e.inspectedExpressionPosition),
            Z = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = B;
                return null == (e = M[t]) ? void 0 : e[n];
            }, [M, B]);
        switch (null == Z ? void 0 : Z.type) {
            case S.ld.EMOJI:
                t = null == Z ? void 0 : Z.emoji;
                break;
            case S.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: "EXPAND_OR_COLLAPSE_EMOJI",
                    guildId: null == Z ? void 0 : Z.guildId,
                    allNamesString: null == Z ? void 0 : Z.name,
                };
                break;
            case S.ld.SOUNDMOJI:
                t = null;
                break;
            case S.ld.CREATE_EMOJI:
            default:
                t = {
                    type: "CREATE_EMOJI",
                    guildId: null == Z ? void 0 : Z.guildId,
                    allNamesString: null == Z ? void 0 : Z.name,
                };
        }
        let F = (0, a.e7)([g.Z], () => (null !== t && t.type === u.B.GUILD ? g.Z.getGuild(t.guildId) : null), [t]),
            V = (0, a.e7)([E.Z], () => E.Z.isFocused()),
            H = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
            Y = m.Yk.useSetting(),
            W = (0, v.C1)(j, P(t) ? t : null),
            K = (0, a.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: z } = (0, I.Z)(j, k),
            q = (null == Z ? void 0 : Z.type) === S.ld.EMOJI ? Z.subCategory : A.t0.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= R &&
                        P(t) &&
                        q !== A.t0.NONE &&
                        (q === A.t0.NEWLY_ADDED_EMOJI &&
                            null !== t &&
                            t.type === u.B.GUILD &&
                            (0, f.Zg)(t.guildId, z[0].id),
                        null != B.source &&
                            (0, v.Gn)({
                                emoji: t,
                                subCategory: q,
                                position: Z.columnIndex + 1,
                                newlyAddedHighlight: q === A.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(j, t.id),
                            }));
                };
            }),
            null == t)
        )
            return null;
        let X = h.Z.theme;
        if (P(t)) {
            var Q;
            let e =
                null != t.id
                    ? b.ZP.getEmojiURL({
                          id: t.id,
                          animated: Y && t.animated,
                          size: 28,
                      })
                    : t.url;
            w =
                "" === e
                    ? (0, r.jsx)(s.Text, {
                          variant: "text-md/normal",
                          className: N.glyphEmoji,
                          children: "surrogates" in t ? t.surrogates : null,
                      })
                    : (0, r.jsx)("img", {
                          alt: null != (Q = (0, y.nY)(t)) ? Q : "",
                          src: e,
                          className: N.emoji,
                      });
        } else if ("CREATE_EMOJI" === t.type)
            w = (0, r.jsx)(s.oFk, {
                size: "md",
                color: "currentColor",
                className: N.icon,
                colorClass: N.icon,
            });
        else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
            let e = n(187119),
                i = n(39874),
                a = n(853871),
                s = n(63149);
            w = K.has(t.guildId)
                ? (0, r.jsx)("img", {
                      className: N.icon,
                      src: (0, o.wj)(X) ? a : s,
                      alt: "",
                  })
                : (0, r.jsx)("img", {
                      className: N.icon,
                      src: (0, o.wj)(X) ? e : i,
                      alt: "",
                  });
        }
        let J =
            null != F
                ? (0, r.jsx)(T.Z, {
                      className: N.__invalid_guildIcon,
                      guild: F,
                      shouldAnimate: !H && V,
                  })
                : null;
        L =
            G && "CREATE_EMOJI" === t.type
                ? C.intl.string(C.t.XCmLfG)
                : "EXPAND_OR_COLLAPSE_EMOJI" === t.type
                  ? K.has(t.guildId)
                      ? C.intl.string(C.t["/K2RDH"])
                      : C.intl.string(C.t.NZI2Zk)
                  : (0, y.nY)(t);
        let $ =
            G && "CREATE_EMOJI" === t.type
                ? C.intl.string(C.t["Z/r7IS"])
                : D({
                      inspectedEmoji: t,
                      channel: U,
                      guildId: j,
                      intention: k,
                      guild: F,
                  });
        return (0, r.jsx)(p.Z, {
            className: x,
            graphicPrimary: w,
            graphicSecondary: J,
            titlePrimary: L,
            titleSecondary: $,
            isFavorite: W,
            emojiSubCategory: q,
        });
    });
