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
    O = n(543241),
    v = n(199257),
    S = n(880949),
    I = n(784222),
    T = n(149203),
    C = n(388032),
    A = n(886162);
let N = 250;
function P(e) {
    return null != e && "animated" in e;
}
let R = (e) => {
        let { inspectedEmoji: t, guild: n } = e,
            r = P(t);
        return null != n && r ? C.intl.format(C.t.KFW2aY, { guildName: n.name }) : null;
    },
    w = i.memo(function (e) {
        let t,
            w,
            D,
            { className: x, emojiGrid: L, guildId: j, pickerIntention: M, channel: k } = e,
            U = p.kJ.useStore((e) => e.inspectedExpressionPosition),
            G = i.useMemo(() => {
                var e;
                let { rowIndex: t, columnIndex: n } = U;
                return null == (e = L[t]) ? void 0 : e[n];
            }, [L, U]);
        switch (null == G ? void 0 : G.type) {
            case I.ld.EMOJI:
                t = null == G ? void 0 : G.emoji;
                break;
            case I.ld.EXPAND_OR_COLLAPSE_EMOJIS:
                t = {
                    type: "EXPAND_OR_COLLAPSE_EMOJI",
                    guildId: null == G ? void 0 : G.guildId,
                    allNamesString: null == G ? void 0 : G.name,
                };
                break;
            case I.ld.SOUNDMOJI:
                t = null;
                break;
            case I.ld.CREATE_EMOJI:
            default:
                t = {
                    type: "CREATE_EMOJI",
                    guildId: null == G ? void 0 : G.guildId,
                    allNamesString: null == G ? void 0 : G.name,
                };
        }
        let Z = (0, a.e7)([g.Z], () => (null !== t && t.type === u.B.GUILD ? g.Z.getGuild(t.guildId) : null), [t]),
            F = (0, a.e7)([E.Z], () => E.Z.isFocused()),
            B = (0, a.e7)([l.Z], () => l.Z.useReducedMotion, []),
            V = h.Yk.useSetting(),
            H = (0, O.C1)(j, P(t) ? t : null),
            Y = (0, a.e7)([c.ZP], () => c.ZP.expandedSectionsByGuildIds),
            { newlyAddedEmojis: W } = (0, v.Z)(j, M),
            K = (null == G ? void 0 : G.type) === I.ld.EMOJI ? G.subCategory : T.t0.NONE;
        if (
            (i.useEffect(() => {
                let e = Date.now();
                return () => {
                    Date.now() - e >= N &&
                        P(t) &&
                        K !== T.t0.NONE &&
                        (K === T.t0.NEWLY_ADDED_EMOJI &&
                            null !== t &&
                            t.type === u.B.GUILD &&
                            (0, f.Zg)(t.guildId, W[0].id),
                        null != U.source &&
                            (0, O.Gn)({
                                emoji: t,
                                subCategory: K,
                                position: G.columnIndex + 1,
                                newlyAddedHighlight: K === T.t0.NEWLY_ADDED_EMOJI && d.Z.isNewerThanLastSeen(j, t.id),
                            }));
                };
            }),
            null == t)
        )
            return null;
        let z = m.Z.theme;
        if (P(t)) {
            var q;
            let e =
                null != t.id
                    ? b.ZP.getEmojiURL({
                          id: t.id,
                          animated: V && t.animated,
                          size: 28,
                      })
                    : t.url;
            w =
                "" === e
                    ? (0, r.jsx)(s.Text, {
                          variant: "text-md/normal",
                          className: A.glyphEmoji,
                          children: "surrogates" in t ? t.surrogates : null,
                      })
                    : (0, r.jsx)("img", {
                          alt: null != (q = (0, y.nY)(t)) ? q : "",
                          src: e,
                          className: A.emoji,
                      });
        } else if ("CREATE_EMOJI" === t.type)
            w = (0, r.jsx)(s.oFk, {
                size: "md",
                color: "currentColor",
                className: A.icon,
                colorClass: A.icon,
            });
        else if ("EXPAND_OR_COLLAPSE_EMOJI" === t.type) {
            let e = n(187119),
                i = n(39874),
                a = n(853871),
                s = n(63149);
            w = Y.has(t.guildId)
                ? (0, r.jsx)("img", {
                      className: A.icon,
                      src: (0, o.wj)(z) ? a : s,
                      alt: "",
                  })
                : (0, r.jsx)("img", {
                      className: A.icon,
                      src: (0, o.wj)(z) ? e : i,
                      alt: "",
                  });
        }
        let Q =
            null != Z
                ? (0, r.jsx)(S.Z, {
                      className: A.__invalid_guildIcon,
                      guild: Z,
                      shouldAnimate: !B && F,
                  })
                : null;
        D =
            "EXPAND_OR_COLLAPSE_EMOJI" === t.type
                ? Y.has(t.guildId)
                    ? C.intl.string(C.t["/K2RDH"])
                    : C.intl.string(C.t.NZI2Zk)
                : (0, y.nY)(t);
        let X = R({
            inspectedEmoji: t,
            channel: k,
            guildId: j,
            intention: M,
            guild: Z,
        });
        return (0, r.jsx)(_.Z, {
            className: x,
            graphicPrimary: w,
            graphicSecondary: Q,
            titlePrimary: D,
            titleSecondary: X,
            isFavorite: H,
            emojiSubCategory: K,
        });
    });
