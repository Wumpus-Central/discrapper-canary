n.d(t, { Z: () => y });
var r = n(200651),
    i = n(192379),
    a = n(442837),
    l = n(481060),
    o = n(543241),
    s = n(222677),
    c = n(995774),
    u = n(665906),
    d = n(695346),
    f = n(496675),
    g = n(768581),
    m = n(585483),
    b = n(176354),
    h = n(981631),
    p = n(185923),
    O = n(388032);
function y(e, t) {
    let { reducedMotion: n } = i.useContext(l.Sfi),
        g = (0, u.$R)(t),
        y = (0, a.e7)([f.Z], () => (t.isPrivate() || f.Z.can(h.Plq.ADD_REACTIONS, t)) && g, [t, g]),
        N = (0, o.MZ)(t.getGuildId());
    if (!d.nc.getSetting() || !y || e.type === h.uaV.GUILD_INVITE_REMINDER) return null;
    let v = N.filter(
        (e) =>
            !b.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: t,
                intention: p.Hz.REACTION
            })
    )
        .slice(0, 12)
        .map((i, a) => {
            var o, u;
            return (0, r.jsx)(
                l.sNh,
                {
                    color: 'default',
                    id: null != (u = null != (o = i.id) ? o : i.optionallyDiverseSequence) ? u : i.name,
                    label: ':'.concat(i.name, ':'),
                    icon: (e) => {
                        var t, a;
                        return (0, r.jsx)(
                            E,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (a = a =
                                {
                                    reducedMotionEnabled: n.enabled,
                                    emoji: i
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(a)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                                  }),
                            t)
                        );
                    },
                    action: () => {
                        (0, s.rU)(t.id, e.id, (0, c.g1)(i), s.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                a
            );
        });
    return (0, r.jsx)(l.sNh, {
        id: 'add-reaction',
        label: O.NW.string(O.t.lfIHs7),
        action: () => {
            m.S.dispatchKeyed(h.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                v,
                (0, r.jsx)(l.Clw, {}),
                (0, r.jsx)(l.sNh, {
                    color: 'default',
                    id: 'other-reactions',
                    label: O.NW.string(O.t['OBCR+v']),
                    icon: l.EO4,
                    action: () => {
                        m.S.dispatchKeyed(h.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function E(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: i, className: a = '', isFocused: l = !1 } = e;
    return (0, r.jsx)('img', {
        className: a,
        src:
            null != n.id
                ? g.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!i || l),
                      size: 18
                  })
                : b.ZP.getURL(null != (t = n.optionallyDiverseSequence) ? t : ''),
        alt: ''
    });
}
