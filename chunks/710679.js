t.d(n, { Z: () => P }), t(953529);
var r = t(200651);
t(192379);
var i = t(442837),
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
    N = t(981631);
function P(e) {
    var n, t, P;
    let { guildEvent: C, guildId: E, truncate: k, onActionTaken: w, className: I, isNew: S } = e,
        { id: T, guild_id: _, channel_id: D, creator_id: G, name: W, description: L, entity_type: R, image: M, recurrence_rule: U } = C,
        H = (0, y.DK)(C),
        A = (0, i.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(T, H), [T, H]),
        z = (0, i.e7)([o.Z], () => o.Z.isLurking(_), [_]),
        B = (0, i.e7)([a.Z], () => a.Z.getStageInstanceByChannel(D), [D]),
        X = (0, i.e7)([s.Z], () => s.Z.getChannel(D), [D]),
        J = (0, i.e7)([g.default], () => g.default.getUser(G), [G]),
        { speakers: V } = (0, v.Z)({
            id: D,
            data: {
                guild: null,
                instance: B,
                speakers: [],
                participantCount: 0
            },
            context: {
                guildId: _,
                instance: B
            }
        }),
        q = (0, i.e7)([d.Z], () => d.Z.getChannelId()),
        K = (0, h.xt)(C),
        F = q === D && null != q && K,
        Q = V.filter((e) => e.type === c.Ui.VOICE),
        Y = Q.length,
        $ = (0, i.e7)([u.Z], () => u.Z.can(N.Plq.CONNECT, X), [X]),
        ee = (0, f.ZP)(C),
        { isMember: en, guild: et } = (0, m.Z)(_, T),
        er = (0, O.Z)({
            guild: et,
            channel: X,
            guildScheduledEvent: C,
            isActive: K,
            recurrenceId: H,
            onActionTaken: w
        }),
        ei = (0, l.Z)(E),
        el = z
            ? void 0
            : (e) =>
                  (0, p.bO)({
                      eventId: T,
                      parentGuildId: E,
                      recurrenceId: e
                  });
    return (0, r.jsx)(
        Z.Z,
        ((t = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = r);
                    });
            }
            return e;
        })(
            {
                guild: et,
                channel: X,
                creator: J,
                name: W,
                entityType: R,
                description: null != L ? L : void 0,
                location: null != (n = (0, b.cS)(C)) ? n : void 0,
                imageSource: null != M ? (0, x.Z)(C) : void 0,
                imageLocation: Z.Q.THUMBNAIL,
                isActive: K,
                isUserLurking: z,
                isJoined: F,
                isMember: en,
                isHub: ei,
                speakers: Q,
                canConnect: $,
                speakerCount: Y,
                rsvped: A,
                canInvite: ee
            },
            er
        )),
        (P = P =
            {
                className: I,
                onClick: el,
                truncate: k,
                isNew: S,
                guildEvent: C,
                recurrenceRule: (0, j.KV)(U),
                recurrenceId: H
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(P))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(P)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(P, e));
              }),
        t)
    );
}
