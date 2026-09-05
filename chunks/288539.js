n.d(t, { A: () => E });
var l = n(477900),
    i = n(582128),
    s = n(607399),
    r = n(17928),
    a = n(442433),
    o = n(793574),
    u = n(688810),
    c = n(9588),
    d = n(332173),
    h = n(342296),
    m = n(734057),
    f = n(696451),
    p = n(994500),
    g = n(287809),
    x = n(562153),
    A = n(427262);
function C(e) {
    let { userId: t, className: s, children: r } = e,
        o = i.useCallback(() => {
            (0, c.showInaccessibleLinkModal)({ kind: "user" });
        }, []),
        u = i.useCallback(
            (e) => {
                null != t &&
                    (0, a.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("926132"), n.e("146652"), n.e("660829")]).then(
                            n.bind(n, 446828),
                        );
                        return (n) => (0, l.jsx)(e, { ...n, userId: t });
                    });
            },
            [t],
        );
    return (0, l.jsx)(d.A, { className: s, onClick: o, onContextMenu: u, children: r });
}
function E(e) {
    let {
            className: t,
            userId: c,
            channelId: E,
            parsedUserId: I,
            content: y,
            inlinePreview: S = !1,
            viewingChannelId: v,
        } = e,
        N = i.useRef(null),
        { analyticsLocations: _ } = (0, u.Ay)(o.A.USER_MENTION),
        j = (0, r.bG)([g.default], () => g.default.getUser(c)),
        T = (0, r.bG)([m.A], () => m.A.getChannel(E)),
        b = null != T ? T.getGuildId() : null,
        R =
            S || null == j || null == E || null == T
                ? void 0
                : (e) => {
                      null != b
                          ? (0, a.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("585461"),
                                    n.e("207322"),
                                    n.e("622936"),
                                    n.e("216947"),
                                    n.e("866038"),
                                    n.e("326692"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("834552"),
                                    n.e("708757"),
                                    n.e("993103"),
                                    n.e("585968"),
                                    n.e("893190"),
                                    n.e("21921"),
                                    n.e("571210"),
                                    n.e("676418"),
                                    n.e("166495"),
                                    n.e("88342"),
                                    n.e("189673"),
                                    n.e("311802"),
                                    n.e("229787"),
                                    n.e("698965"),
                                    n.e("869853"),
                                    n.e("882073"),
                                    n.e("797558"),
                                    n.e("691994"),
                                    n.e("682337"),
                                    n.e("235313"),
                                    n.e("371133"),
                                    n.e("576665"),
                                    n.e("454625"),
                                    n.e("538887"),
                                    n.e("436564"),
                                    n.e("939171"),
                                    n.e("624198"),
                                    n.e("252229"),
                                    n.e("856753"),
                                    n.e("245996"),
                                    n.e("700792"),
                                    n.e("592822"),
                                    n.e("823427"),
                                    n.e("449145"),
                                    n.e("214461"),
                                    n.e("529422"),
                                    n.e("309291"),
                                    n.e("349644"),
                                    n.e("365826"),
                                    n.e("649520"),
                                    n.e("493014"),
                                    n.e("825486"),
                                    n.e("307059"),
                                    n.e("242204"),
                                    n.e("678195"),
                                    n.e("522261"),
                                    n.e("343116"),
                                    n.e("713708"),
                                    n.e("139103"),
                                    n.e("470314"),
                                    n.e("774021"),
                                    n.e("70515"),
                                    n.e("404524"),
                                    n.e("654148"),
                                    n.e("666939"),
                                    n.e("830221"),
                                    n.e("324240"),
                                    n.e("221879"),
                                    n.e("717334"),
                                    n.e("184841"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, l.jsx)(e, { ...t, viewingChannelId: v, user: j, channel: T, guildId: b });
                            })
                          : T.isDM() &&
                            (0, a.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("790484"),
                                    n.e("585461"),
                                    n.e("207322"),
                                    n.e("622936"),
                                    n.e("216947"),
                                    n.e("866038"),
                                    n.e("326692"),
                                    n.e("926132"),
                                    n.e("146652"),
                                    n.e("834552"),
                                    n.e("708757"),
                                    n.e("993103"),
                                    n.e("585968"),
                                    n.e("393336"),
                                    n.e("776273"),
                                    n.e("893190"),
                                    n.e("391763"),
                                    n.e("571210"),
                                    n.e("88342"),
                                    n.e("189673"),
                                    n.e("955557"),
                                    n.e("311802"),
                                    n.e("229787"),
                                    n.e("698965"),
                                    n.e("882073"),
                                    n.e("797558"),
                                    n.e("691994"),
                                    n.e("682337"),
                                    n.e("235313"),
                                    n.e("371133"),
                                    n.e("576665"),
                                    n.e("454625"),
                                    n.e("538887"),
                                    n.e("436564"),
                                    n.e("979630"),
                                    n.e("947502"),
                                    n.e("252229"),
                                    n.e("856753"),
                                    n.e("245996"),
                                    n.e("700792"),
                                    n.e("592822"),
                                    n.e("838056"),
                                    n.e("965789"),
                                    n.e("823427"),
                                    n.e("214461"),
                                    n.e("529422"),
                                    n.e("508829"),
                                    n.e("172883"),
                                    n.e("309291"),
                                    n.e("349644"),
                                    n.e("442191"),
                                    n.e("493014"),
                                    n.e("307059"),
                                    n.e("242204"),
                                    n.e("678195"),
                                    n.e("21106"),
                                    n.e("522261"),
                                    n.e("187048"),
                                    n.e("400744"),
                                    n.e("713708"),
                                    n.e("699011"),
                                    n.e("836150"),
                                    n.e("774021"),
                                    n.e("710014"),
                                    n.e("298199"),
                                    n.e("17244"),
                                    n.e("703168"),
                                    n.e("864464"),
                                    n.e("324240"),
                                    n.e("960816"),
                                    n.e("221879"),
                                    n.e("439778"),
                                    n.e("363071"),
                                ]).then(n.bind(n, 385913));
                                return (t) => (0, l.jsx)(e, { ...t, user: j, channel: T, targetIsUser: !0 });
                            });
                  },
        O = A.Ay.useName(j),
        L = (0, r.bG)([m.A, f.Ay, p.A], () => x.Ay.getNickname(b, E, j));
    if (null == j) return (0, l.jsx)(C, { userId: I, className: t, children: y });
    function M(e) {
        return (0, l.jsx)(d.A, { ref: N, className: t, onContextMenu: R, ...e, children: `@${L ?? O}` });
    }
    return S
        ? (0, l.jsx)(u.f5, { value: _, children: M() })
        : (0, l.jsx)(u.f5, {
              value: _,
              children: (0, l.jsx)(h.A, {
                  targetElementRef: N,
                  user: j,
                  guildId: b ?? void 0,
                  channelId: E,
                  position: s.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => M(e),
              }),
          });
}
