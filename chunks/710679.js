t.d(n, { Z: () => Z }), t(953529);
var r = t(951288);
t(647438);
var i = t(442837),
    l = t(41776),
    c = t(501655),
    a = t(427679),
    o = t(592125),
    s = t(430824),
    u = t(496675),
    d = t(19780),
    g = t(594174),
    p = t(15274),
    h = t(924301),
    m = t(951539),
    v = t(146768),
    j = t(236373),
    f = t(230900),
    b = t(954313),
    x = t(405613),
    O = t(460838),
    y = t(462179),
    C = t(981631);
function Z(e) {
    var n, t, Z;
    let { guildEvent: k, truncate: N, onActionTaken: P, className: E, isNew: w } = e,
        {
            id: I,
            guild_id: S,
            channel_id: D,
            creator_id: T,
            name: L,
            description: _,
            entity_type: G,
            image: M,
            recurrence_rule: R,
        } = k,
        z = (0, b.DK)(k),
        A = (0, i.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(I, z), [I, z]),
        U = (0, i.e7)([l.Z], () => l.Z.isLurking(S), [S]),
        J = (0, i.e7)([a.Z], () => a.Z.getStageInstanceByChannel(D), [D]),
        B = (0, i.e7)([s.Z], () => s.Z.getGuild(S), [S]),
        q = (0, i.e7)([o.Z], () => o.Z.getChannel(D), [D]),
        K = (0, i.e7)([g.default], () => g.default.getUser(T), [T]),
        { speakers: W } = (0, v.Z)({
            id: D,
            data: {
                guild: null,
                instance: J,
                speakers: [],
                participantCount: 0,
            },
            context: {
                guildId: S,
                instance: J,
            },
        }),
        X = (0, i.e7)([d.Z], () => d.Z.getChannelId()),
        F = (0, h.xt)(k),
        H = X === D && null != X && F,
        V = W.filter((e) => e.type === c.Ui.VOICE),
        Q = V.length,
        Y = (0, i.e7)([u.Z], () => u.Z.can(C.Plq.CONNECT, q), [q]),
        $ = (0, m.ZP)(k),
        ee = null != B,
        en = (0, y.Z)({
            guild: B,
            channel: q,
            guildScheduledEvent: k,
            isActive: F,
            recurrenceId: z,
            onActionTaken: P,
        }),
        et = U
            ? void 0
            : (e) =>
                  (0, p.bO)({
                      eventId: I,
                      recurrenceId: e,
                  });
    return (0, r.jsx)(
        O.Z,
        ((t = (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = r);
                    });
            }
            return e;
        })(
            {
                guild: B,
                channel: q,
                creator: K,
                name: L,
                entityType: G,
                description: null != _ ? _ : void 0,
                location: null != (n = (0, f.cS)(k)) ? n : void 0,
                imageSource: null != M ? (0, x.Z)(k) : void 0,
                imageLocation: O.Q.THUMBNAIL,
                isActive: F,
                isUserLurking: U,
                isJoined: H,
                isMember: ee,
                speakers: V,
                canConnect: Y,
                speakerCount: Q,
                rsvped: A,
                canInvite: $,
            },
            en,
        )),
        (Z = Z =
            {
                className: E,
                onClick: et,
                truncate: N,
                isNew: w,
                guildEvent: k,
                recurrenceRule: (0, j.KV)(R),
                recurrenceId: z,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(Z))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(Z)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(Z, e));
              }),
        t),
    );
}
