t.d(n, { Z: () => C }), t(953529);
var i = t(255367);
t(73800);
var r = t(442837),
    l = t(724912),
    o = t(41776),
    c = t(501655),
    a = t(427679),
    s = t(592125),
    u = t(496675),
    d = t(19780),
    g = t(594174),
    p = t(15274),
    h = t(924301),
    f = t(951539),
    v = t(146768),
    m = t(592126),
    j = t(236373),
    b = t(230900),
    y = t(854698),
    x = t(405613),
    Z = t(460838),
    O = t(462179),
    P = t(981631);
function C(e) {
    var n, t, C;
    let { guildEvent: E, guildId: N, truncate: k, onActionTaken: w, className: I, isNew: S } = e,
        { id: T, guild_id: _, channel_id: D, creator_id: G, name: L, description: R, entity_type: M, image: U, recurrence_rule: H } = E,
        A = (0, y.DK)(E),
        z = (0, r.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(T, A), [T, A]),
        B = (0, r.e7)([o.Z], () => o.Z.isLurking(_), [_]),
        X = (0, r.e7)([a.Z], () => a.Z.getStageInstanceByChannel(D), [D]),
        J = (0, r.e7)([s.Z], () => s.Z.getChannel(D), [D]),
        V = (0, r.e7)([g.default], () => g.default.getUser(G), [G]),
        { speakers: q } = (0, v.Z)({
            id: D,
            data: {
                guild: null,
                instance: X,
                speakers: [],
                participantCount: 0
            },
            context: {
                guildId: _,
                instance: X
            }
        }),
        W = (0, r.e7)([d.Z], () => d.Z.getChannelId()),
        K = (0, h.xt)(E),
        F = W === D && null != W && K,
        Q = q.filter((e) => e.type === c.Ui.VOICE),
        Y = Q.length,
        $ = (0, r.e7)([u.Z], () => u.Z.can(P.Plq.CONNECT, J), [J]),
        ee = (0, f.ZP)(E),
        { isMember: en, guild: et } = (0, m.Z)(_, T),
        ei = (0, O.Z)({
            guild: et,
            channel: J,
            guildScheduledEvent: E,
            isActive: K,
            recurrenceId: A,
            onActionTaken: w
        }),
        er = (0, l.Z)(N),
        el = B
            ? void 0
            : (e) =>
                  (0, p.bO)({
                      eventId: T,
                      parentGuildId: N,
                      recurrenceId: e
                  });
    return (0, i.jsx)(
        Z.Z,
        ((t = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    i = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    i.forEach(function (n) {
                        var i;
                        (i = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = i);
                    });
            }
            return e;
        })(
            {
                guild: et,
                channel: J,
                creator: V,
                name: L,
                entityType: M,
                description: null != R ? R : void 0,
                location: null != (n = (0, b.cS)(E)) ? n : void 0,
                imageSource: null != U ? (0, x.Z)(E) : void 0,
                imageLocation: Z.Q.THUMBNAIL,
                isActive: K,
                isUserLurking: B,
                isJoined: F,
                isMember: en,
                isHub: er,
                speakers: Q,
                canConnect: $,
                speakerCount: Y,
                rsvped: z,
                canInvite: ee
            },
            ei
        )),
        (C = C =
            {
                className: I,
                onClick: el,
                truncate: k,
                isNew: S,
                guildEvent: E,
                recurrenceRule: (0, j.KV)(H),
                recurrenceId: A
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(C))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(C)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(C, e));
              }),
        t)
    );
}
