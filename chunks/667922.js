n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    o = n(442837),
    a = n(481060),
    s = n(543241),
    l = n(222677),
    c = n(995774),
    u = n(665906),
    d = n(695346),
    f = n(496675),
    _ = n(768581),
    p = n(585483),
    h = n(176354),
    m = n(981631),
    g = n(185923),
    E = n(388032);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 12;
function T(e, t) {
    let { reducedMotion: n } = i.useContext(a.Sfi),
        _ = (0, u.$R)(t),
        b = (0, o.e7)([f.Z], () => (t.isPrivate() || f.Z.can(m.Plq.ADD_REACTIONS, t)) && _, [t, _]),
        O = (0, s.MZ)(t.getGuildId());
    if (!d.nc.getSetting() || !b) return null;
    let T = O.filter(
        (e) =>
            !h.ZP.isEmojiFilteredOrLocked({
                emoji: e,
                channel: t,
                intention: g.Hz.REACTION
            })
    )
        .slice(0, I)
        .map((i, o) => {
            var s, u;
            return (0, r.jsx)(
                a.sNh,
                {
                    color: 'default',
                    id: null != (u = null != (s = i.id) ? s : i.optionallyDiverseSequence) ? u : i.name,
                    label: ':'.concat(i.name, ':'),
                    icon: (e) =>
                        (0, r.jsx)(
                            S,
                            v(y({}, e), {
                                reducedMotionEnabled: n.enabled,
                                emoji: i
                            })
                        ),
                    action: () => {
                        (0, l.rU)(t.id, e.id, (0, c.g1)(i), l.TW.MESSAGE_CONTEXT_MENU);
                    },
                    dontCloseOnActionIfHoldingShiftKey: !0
                },
                o
            );
        });
    return (0, r.jsx)(a.sNh, {
        id: 'add-reaction',
        label: E.intl.string(E.t.lfIHs7),
        action: () => {
            p.S.dispatchKeyed(m.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
        },
        color: 'default',
        children: (0, r.jsxs)(r.Fragment, {
            children: [
                T,
                (0, r.jsx)(a.Clw, {}),
                (0, r.jsx)(a.sNh, {
                    color: 'default',
                    id: 'other-reactions',
                    label: E.intl.string(E.t['OBCR+v']),
                    icon: a.EO4,
                    action: () => {
                        p.S.dispatchKeyed(m.LPv.TOGGLE_REACTION_POPOUT, e.id, { emojiPicker: !0 });
                    }
                })
            ]
        })
    });
}
function S(e) {
    var t;
    let { emoji: n, reducedMotionEnabled: i, className: o = '', isFocused: a = !1 } = e;
    return (0, r.jsx)('img', {
        className: o,
        src:
            null != n.id
                ? _.ZP.getEmojiURL({
                      id: n.id,
                      animated: n.animated && (!i || a),
                      size: 18
                  })
                : h.ZP.getURL(null != (t = n.optionallyDiverseSequence) ? t : ''),
        alt: ''
    });
}
