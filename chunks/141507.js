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
    p = n(806966),
    _ = n(65029),
    m = n(210887),
    h = n(695346),
    g = n(430824),
    E = n(451478),
    b = n(768581),
    y = n(176354),
    O = n(392552),
    v = n(543241),
    S = n(199257),
    I = n(880949),
    T = n(784222),
    C = n(149203),
    A = n(388032),
    N = n(545424);
let P = 250;
function R(e) {
    return null != e && "animated" in e;
}
let D = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = R(t);
        return null != n && r ? A.intl.format(A.t.KFW2aY, { guildName: n.name }) : null;
    },
    w = i.memo(function (e) {
        let t,
            w,
            x,
            { className: L, emojiGrid: j, guildId: M, pickerIntention: k, channel: U } = e,
            { enabled: G } = O.Z.useExperiment({ location: "EmojiPicker" }, { autoTrackExposure: !1 }),
            Z = p.kJ.useStore((e) => e.inspectedExpressionPosition),
            B = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = Z;
                return null == (e = j[t]) ? void 0 : e[n];
            }, [j, Z]);
        switch (null == B ? void 0 : B.type) {
            case T.ld.EMOJI:
                t = null == B ? void 0 : B.emoji;
                break;
            case T.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: "EXPAND_OR_COLLAPSE_EMOJI",
                    guildId: null == B ? void 0 : B.guildId,
                    allNamesString: null == B ? void 0 : B.name,
                };
                break;
            case T.ld.SOUNDMOJI:
                t = null;
                break;
            case T.ld.CREATE_EMOJI:
            default:
                t = {
                    type: "CREATE_EMOJI",
                    guildId: null == B ? void 0 : B.guildId,
                    allNamesString: null == B ? void 0 : B.name,
                };
        }
        let F = (0, a.e7)([g.Z], () => (null !== t && t.type === u.B.GUILD ? g.Z.getGuild(t.guildId) : null), [t]),
            V = (0, a.e7)([E.Z], () => E.Z.isFocused()),
            H = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
            Y = h.Yk.useSetting(),
            W = (0, v.C1)(M, R(t) ? t : null),
            K = (0, a.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: z } = (0, S.Z)(M, k),
            q = (null == B ? void 0 : B.type) === T.ld.EMOJI ? B.subCategory : C.t0.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= P &&
                        R(t) &&
                        q !== C.t0.NONE &&
                        (q === C.t0.NEWLY_ADDED_EMOJI &&
                            null !== t &&
                            t.type === u.B.GUILD &&
                            (0, f.Zg)(t.guildId, z[0].id),
                        null != Z.source &&
                            (0, v.Gn)({
                                emoji: t,
                                subCategory: q,
                                position: B.columnIndex + 1,
                                newlyAddedHighlight: q === C.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(M, t.id),
                            }));
                };
            }),
            null == t)
        )
            return null;
        let Q = m.Z.theme;
        if (R(t)) {
            var X;
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
                          alt: null != (X = (0, y.nY)(t)) ? X : "",
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
                      src: (0, o.wj)(Q) ? a : s,
                      alt: "",
                  })
                : (0, r.jsx)("img", {
                      className: N.icon,
                      src: (0, o.wj)(Q) ? e : i,
                      alt: "",
                  });
        }
        let J =
            null != F
                ? (0, r.jsx)(I.Z, {
                      className: N.__invalid_guildIcon,
                      guild: F,
                      shouldAnimate: !H && V,
                  })
                : null;
        x =
            G && "CREATE_EMOJI" === t.type
                ? A.intl.string(A.t.XCmLfG)
                : "EXPAND_OR_COLLAPSE_EMOJI" === t.type
                  ? K.has(t.guildId)
                      ? A.intl.string(A.t["/K2RDH"])
                      : A.intl.string(A.t.NZI2Zk)
                  : (0, y.nY)(t);
        let $ =
            G && "CREATE_EMOJI" === t.type
                ? A.intl.string(A.t["Z/r7IS"])
                : D({
                      inspectedEmoji: t,
                      channel: U,
                      guildId: M,
                      intention: k,
                      guild: F,
                  });
        return (0, r.jsx)(_.Z, {
            className: L,
            graphicPrimary: w,
            graphicSecondary: J,
            titlePrimary: x,
            titleSecondary: $,
            isFavorite: W,
            emojiSubCategory: q,
        });
    });
