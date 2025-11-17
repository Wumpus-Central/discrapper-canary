t.d(n, { Z: () => Z }), t(953529);
var r = t(54381);
t(473749);
var i = t(442837),
    l = t(41776),
    a = t(501655),
    c = t(427679),
    o = t(592125),
    s = t(430824),
    u = t(496675),
    d = t(19780),
    g = t(594174),
    p = t(15274),
    m = t(924301),
    h = t(951539),
    v = t(146768),
    j = t(236373),
    f = t(230900),
    b = t(854698),
    x = t(405613),
    O = t(460838),
    y = t(462179),
    C = t(981631);
function Z(e) {
    var n, t, Z;
    let { guildEvent: N, truncate: P, onActionTaken: k, className: E, isNew: w } = e,
        {
            id: I,
            guild_id: S,
            channel_id: D,
            creator_id: L,
            name: T,
            description: M,
            entity_type: G,
            image: _,
            recurrence_rule: R,
        } = N,
        A = (0, b.DK)(N),
        B = (0, i.e7)([m.ZP], () => m.ZP.isInterestedInEventRecurrence(I, A), [I, A]),
        U = (0, i.e7)([l.Z], () => l.Z.isLurking(S), [S]),
        z = (0, i.e7)([c.Z], () => c.Z.getStageInstanceByChannel(D), [D]),
        J = (0, i.e7)([s.Z], () => s.Z.getGuild(S), [S]),
        q = (0, i.e7)([o.Z], () => o.Z.getChannel(D), [D]),
        H = (0, i.e7)([g.default], () => g.default.getUser(L), [L]),
        { speakers: K } = (0, v.Z)({
            id: D,
            data: {
                guild: null,
                instance: z,
                speakers: [],
                participantCount: 0,
            },
            context: {
                guildId: S,
                instance: z,
            },
        }),
        W = (0, i.e7)([d.Z], () => d.Z.getChannelId()),
        F = (0, m.xt)(N),
        V = W === D && null != W && F,
        Q = K.filter((e) => e.type === a.Ui.VOICE),
        X = Q.length,
        Y = (0, i.e7)([u.Z], () => u.Z.can(C.Plq.CONNECT, q), [q]),
        $ = (0, h.ZP)(N),
        ee = null != J,
        en = (0, y.Z)({
            guild: J,
            channel: q,
            guildScheduledEvent: N,
            isActive: F,
            recurrenceId: A,
            onActionTaken: k,
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
                guild: J,
                channel: q,
                creator: H,
                name: T,
                entityType: G,
                description: null != M ? M : void 0,
                location: null != (n = (0, f.cS)(N)) ? n : void 0,
                imageSource: null != _ ? (0, x.Z)(N) : void 0,
                imageLocation: O.Q.THUMBNAIL,
                isActive: F,
                isUserLurking: U,
                isJoined: V,
                isMember: ee,
                speakers: Q,
                canConnect: Y,
                speakerCount: X,
                rsvped: B,
                canInvite: $,
            },
            en,
        )),
        (Z = Z =
            {
                className: E,
                onClick: et,
                truncate: P,
                isNew: w,
                guildEvent: N,
                recurrenceRule: (0, j.KV)(R),
                recurrenceId: A,
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
