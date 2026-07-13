"use strict";
n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(607399),
    s = n(17928),
    l = n(442433),
    o = n(793574),
    d = n(688810),
    c = n(9588),
    u = n(332173),
    _ = n(342296),
    E = n(734057),
    A = n(696451),
    h = n(994500),
    I = n(287809),
    f = n(562153),
    p = n(427262);
function T(e) {
    let { userId: t, className: a, children: s } = e,
        o = r.useCallback(() => {
            (0, c.showInaccessibleLinkModal)({ kind: "user" });
        }, []),
        d = r.useCallback(
            (e) => {
                null != t &&
                    (0, l.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("26132"), n.e("46652"), n.e("60829")]).then(
                            n.bind(n, 446828),
                        );
                        return (n) => (0, i.jsx)(e, { ...n, userId: t });
                    });
            },
            [t],
        );
    return (0, i.jsx)(u.A, { className: a, onClick: o, onContextMenu: d, children: s });
}
function m(e) {
    let {
            className: t,
            userId: c,
            channelId: m,
            parsedUserId: g,
            content: S,
            inlinePreview: N = !1,
            viewingChannelId: C,
        } = e,
        O = r.useRef(null),
        { analyticsLocations: R } = (0, d.Ay)(o.A.USER_MENTION),
        L = (0, s.bG)([I.default], () => I.default.getUser(c)),
        D = (0, s.bG)([E.A], () => E.A.getChannel(m)),
        y = null != D ? D.getGuildId() : null,
        v =
            N || null == L || null == m || null == D
                ? void 0
                : (e) => {
                      null != y
                          ? (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("31463"),
                                    n.e("41831"),
                                    n.e("65264"),
                                    n.e("62323"),
                                    n.e("88429"),
                                    n.e("94881"),
                                    n.e("26692"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93103"),
                                    n.e("93190"),
                                    n.e("34552"),
                                    n.e("21921"),
                                    n.e("8757"),
                                    n.e("76418"),
                                    n.e("66495"),
                                    n.e("71210"),
                                    n.e("85968"),
                                    n.e("89673"),
                                    n.e("68403"),
                                    n.e("88342"),
                                    n.e("29787"),
                                    n.e("89421"),
                                    n.e("35027"),
                                    n.e("98965"),
                                    n.e("82073"),
                                    n.e("97558"),
                                    n.e("91994"),
                                    n.e("54625"),
                                    n.e("76665"),
                                    n.e("28662"),
                                    n.e("35313"),
                                    n.e("71133"),
                                    n.e("28152"),
                                    n.e("39171"),
                                    n.e("36564"),
                                    n.e("24198"),
                                    n.e("52229"),
                                    n.e("45996"),
                                    n.e("792"),
                                    n.e("92822"),
                                    n.e("61268"),
                                    n.e("23427"),
                                    n.e("49145"),
                                    n.e("29422"),
                                    n.e("9291"),
                                    n.e("56753"),
                                    n.e("65826"),
                                    n.e("49520"),
                                    n.e("14461"),
                                    n.e("93014"),
                                    n.e("7059"),
                                    n.e("25486"),
                                    n.e("22261"),
                                    n.e("49644"),
                                    n.e("78195"),
                                    n.e("43116"),
                                    n.e("39103"),
                                    n.e("70314"),
                                    n.e("42204"),
                                    n.e("74021"),
                                    n.e("70515"),
                                    n.e("4524"),
                                    n.e("13708"),
                                    n.e("54148"),
                                    n.e("66939"),
                                    n.e("30221"),
                                    n.e("24240"),
                                    n.e("21879"),
                                    n.e("17334"),
                                    n.e("84841"),
                                ]).then(n.bind(n, 107632));
                                return (t) =>
                                    (0, i.jsx)(e, { ...t, viewingChannelId: C, user: L, channel: D, guildId: y });
                            })
                          : D.isDM() &&
                            (0, l.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("71406"),
                                    n.e("31463"),
                                    n.e("41831"),
                                    n.e("65264"),
                                    n.e("62323"),
                                    n.e("88429"),
                                    n.e("94881"),
                                    n.e("26692"),
                                    n.e("26132"),
                                    n.e("46652"),
                                    n.e("93103"),
                                    n.e("93190"),
                                    n.e("34552"),
                                    n.e("91763"),
                                    n.e("8757"),
                                    n.e("71210"),
                                    n.e("85968"),
                                    n.e("38730"),
                                    n.e("89673"),
                                    n.e("68403"),
                                    n.e("88342"),
                                    n.e("29787"),
                                    n.e("89421"),
                                    n.e("98965"),
                                    n.e("82073"),
                                    n.e("97558"),
                                    n.e("91994"),
                                    n.e("54625"),
                                    n.e("76665"),
                                    n.e("28662"),
                                    n.e("35313"),
                                    n.e("71133"),
                                    n.e("76273"),
                                    n.e("18997"),
                                    n.e("36564"),
                                    n.e("34971"),
                                    n.e("52229"),
                                    n.e("45996"),
                                    n.e("792"),
                                    n.e("92822"),
                                    n.e("61268"),
                                    n.e("23427"),
                                    n.e("29422"),
                                    n.e("38056"),
                                    n.e("9291"),
                                    n.e("56753"),
                                    n.e("14461"),
                                    n.e("93014"),
                                    n.e("7059"),
                                    n.e("8829"),
                                    n.e("72883"),
                                    n.e("22261"),
                                    n.e("49644"),
                                    n.e("78195"),
                                    n.e("42339"),
                                    n.e("21106"),
                                    n.e("40175"),
                                    n.e("43746"),
                                    n.e("36150"),
                                    n.e("42204"),
                                    n.e("99011"),
                                    n.e("42191"),
                                    n.e("74021"),
                                    n.e("90554"),
                                    n.e("13708"),
                                    n.e("10014"),
                                    n.e("17244"),
                                    n.e("98199"),
                                    n.e("3168"),
                                    n.e("41175"),
                                    n.e("24240"),
                                    n.e("60816"),
                                    n.e("21879"),
                                    n.e("39778"),
                                    n.e("63071"),
                                ]).then(n.bind(n, 385913));
                                return (t) => (0, i.jsx)(e, { ...t, user: L, channel: D, targetIsUser: !0 });
                            });
                  },
        b = p.Ay.useName(L),
        M = (0, s.bG)([E.A, A.Ay, h.A], () => f.Ay.getNickname(y, m, L));
    if (null == L) return (0, i.jsx)(T, { userId: g, className: t, children: S });
    function P(e) {
        return (0, i.jsx)(u.A, { ref: O, className: t, onContextMenu: v, ...e, children: `@${M ?? b}` });
    }
    return N
        ? (0, i.jsx)(d.f5, { value: R, children: P() })
        : (0, i.jsx)(d.f5, {
              value: R,
              children: (0, i.jsx)(_.A, {
                  targetElementRef: O,
                  user: L,
                  guildId: y ?? void 0,
                  channelId: m,
                  position: a.Fr ? "top" : "right",
                  clickTrap: !0,
                  children: (e) => P(e),
              }),
          });
}
