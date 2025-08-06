t.d(n, { Z: () => P }), t(953529);
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
    f = t(924301),
    h = t(951539),
    v = t(146768),
    m = t(592126),
    j = t(236373),
    b = t(230900),
    y = t(854698),
    x = t(405613),
    O = t(460838),
    Z = t(462179),
    C = t(981631);
function P(e) {
    var n, t, P;
    let { guildEvent: E, guildId: k, truncate: N, onActionTaken: w, className: I, isNew: S } = e,
        {
            id: T,
            guild_id: _,
            channel_id: D,
            creator_id: G,
            name: L,
            description: R,
            entity_type: H,
            image: M,
            recurrence_rule: U,
        } = E,
        z = (0, y.DK)(E),
        A = (0, r.e7)([f.ZP], () => f.ZP.isInterestedInEventRecurrence(T, z), [T, z]),
        J = (0, r.e7)([o.Z], () => o.Z.isLurking(_), [_]),
        B = (0, r.e7)([a.Z], () => a.Z.getStageInstanceByChannel(D), [D]),
        X = (0, r.e7)([s.Z], () => s.Z.getChannel(D), [D]),
        W = (0, r.e7)([g.default], () => g.default.getUser(G), [G]),
        { speakers: V } = (0, v.Z)({
            id: D,
            data: {
                guild: null,
                instance: B,
                speakers: [],
                participantCount: 0,
            },
            context: {
                guildId: _,
                instance: B,
            },
        }),
        q = (0, r.e7)([d.Z], () => d.Z.getChannelId()),
        K = (0, f.xt)(E),
        Q = q === D && null != q && K,
        F = V.filter((e) => e.type === c.Ui.VOICE),
        Y = F.length,
        $ = (0, r.e7)([u.Z], () => u.Z.can(C.Plq.CONNECT, X), [X]),
        ee = (0, h.ZP)(E),
        { isMember: en, guild: et } = (0, m.Z)(_, T),
        ei = (0, Z.Z)({
            guild: et,
            channel: X,
            guildScheduledEvent: E,
            isActive: K,
            recurrenceId: z,
            onActionTaken: w,
        }),
        er = (0, l.Z)(k),
        el = J
            ? void 0
            : (e) =>
                  (0, p.bO)({
                      eventId: T,
                      parentGuildId: k,
                      recurrenceId: e,
                  });
    return (0, i.jsx)(
        O.Z,
        ((t = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    i = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    i.forEach(function (n) {
                        var i;
                        (i = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = i);
                    });
            }
            return e;
        })(
            {
                guild: et,
                channel: X,
                creator: W,
                name: L,
                entityType: H,
                description: null != R ? R : void 0,
                location: null != (n = (0, b.cS)(E)) ? n : void 0,
                imageSource: null != M ? (0, x.Z)(E) : void 0,
                imageLocation: O.Q.THUMBNAIL,
                isActive: K,
                isUserLurking: J,
                isJoined: Q,
                isMember: en,
                isHub: er,
                speakers: F,
                canConnect: $,
                speakerCount: Y,
                rsvped: A,
                canInvite: ee,
            },
            ei,
        )),
        (P = P =
            {
                className: I,
                onClick: el,
                truncate: N,
                isNew: S,
                guildEvent: E,
                recurrenceRule: (0, j.KV)(U),
                recurrenceId: z,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, i);
                  }
                  return t;
              })(Object(P)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(P, e));
              }),
        t),
    );
}
