n.d(t, { Z: () => S });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(543241),
    u = n(222677),
    d = n(995774),
    f = n(665906),
    g = n(695346),
    b = n(496675),
    p = n(768581),
    m = n(585483),
    O = n(176354),
    v = n(981631),
    y = n(185923),
    h = n(388032),
    j = n(576311);
function S(e, t) {
    let { reducedMotion: n } = i.useContext(s.Sfi),
        l = (0, f.$R)(t),
        o = (0, a.e7)([b.Z], () => (t.isPrivate() || b.Z.can(v.Plq.ADD_REACTIONS, t)) && l, [t, l]),
        p = (0, c.MZ)(t.getGuildId());
    if (!g.nc.getSetting() || !o) return null;
    let j = p
        .filter(
            (e) =>
                !O.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: y.Hz.REACTION,
                }),
        )
        .slice(0, 12)
        .map((i, l) => {
            var o, a;
            return (0, r.jsx)(
                s.sNh,
                {
                    color: "default",
                    id: null != (a = null != (o = i.id) ? o : i.optionallyDiverseSequence) ? a : i.name,
                    label: ":".concat(i.name, ":"),
                    icon: (e) => {
                        var t, l;
                        return (0, r.jsx)(
                            E,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (l = l =
                                {
                                    reducedMotionEnabled: n.enabled,
                                    emoji: i,
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            t),
                        );
                    },
                    action: () => {
                        (0, u.rU)(t.id, e.id, (0, d.g1)(i), u.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0,
                },
                l,
            );
        });
    return (0, r.jsx)(s.sNh, {
        id: "add-reaction",
        label: h.intl.string(h.t.lfIHs4),
        action: () => {
            m.S.dispatchKeyed(v.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: "default",
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                j,
                (0, r.jsx)(s.Clw, {}),
                (0, r.jsx)(s.sNh, {
                    color: "default",
                    id: "other-reactions",
                    label: h.intl.string(h.t["OBCR+p"]),
                    icon: s.EO4,
                    action: () => {
                        m.S.dispatchKeyed(v.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    },
                }),
            ],
        }),
    });
}
function E(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: i, className: l = "", isFocused: a = !1 } = e;
    return (0, r.jsx)("img", {
        className: o()(l, j.emoji),
        src:
            null != n.id
                ? p.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!i || a),
                      size: 18,
                  })
                : O.ZP.getURL(null != (t = n.optionallyDiverseSequence) ? t : ""),
        alt: "",
    });
}
