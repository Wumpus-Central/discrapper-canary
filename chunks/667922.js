n.d(t, { Z: () => y });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(543241),
    s = n(222677),
    c = n(995774),
    u = n(665906),
    d = n(695346),
    f = n(496675),
    g = n(768581),
    m = n(585483),
    p = n(176354),
    b = n(981631),
    h = n(185923),
    O = n(388032);
function y(e, t) {
    let { reducedMotion: n } = r.useContext(a.Sfi),
        g = (0, u.$R)(t),
        y = (0, l.e7)([f.Z], () => (t.isPrivate() || f.Z.can(b.Plq.ADD_REACTIONS, t)) && g, [t, g]),
        v = (0, o.MZ)(t.getGuildId());
    if (!d.nc.getSetting() || !y || e.type === b.uaV.GUILD_INVITE_REMINDER) return null;
    let j = v
        .filter(
            (e) =>
                !p.ZP.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: h.Hz.REACTION
                })
        )
        .slice(0, 12)
        .map((r, l) => {
            var o, u;
            return (0, i.jsx)(
                a.sNh,
                {
                    color: 'default',
                    id: null != (u = null != (o = r.id) ? o : r.optionallyDiverseSequence) ? u : r.name,
                    label: ':'.concat(r.name, ':'),
                    icon: (e) => {
                        var t, l;
                        return (0, i.jsx)(
                            E,
                            ((t = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        i = Object.keys(n);
                                    'function' == typeof Object.getOwnPropertySymbols &&
                                        (i = i.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        i.forEach(function (t) {
                                            var i;
                                            (i = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: i,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = i);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (l = l =
                                {
                                    reducedMotionEnabled: n.enabled,
                                    emoji: r
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var i = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, i);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            t)
                        );
                    },
                    action: () => {
                        (0, s.rU)(t.id, e.id, (0, c.g1)(r), s.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                l
            );
        });
    return (0, i.jsx)(a.sNh, {
        id: 'add-reaction',
        label: O.intl.string(O.t.lfIHs7),
        action: () => {
            m.S.dispatchKeyed(b.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, i.jsxs)(i.Fragment, {
            children: [
                j,
                (0, i.jsx)(a.Clw, {}),
                (0, i.jsx)(a.sNh, {
                    color: 'default',
                    id: 'other-reactions',
                    label: O.intl.string(O.t['OBCR+v']),
                    icon: a.EO4,
                    action: () => {
                        m.S.dispatchKeyed(b.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function E(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: r, className: l = '', isFocused: a = !1 } = e;
    return (0, i.jsx)('img', {
        className: l,
        src:
            null != n.id
                ? g.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!r || a),
                      size: 18
                  })
                : p.ZP.getURL(null != (t = n.optionallyDiverseSequence) ? t : ''),
        alt: ''
    });
}
