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
    m = t(15274),
    h = t(924301),
    p = t(951539),
    j = t(146768),
    x = t(236373),
    v = t(230900),
    f = t(854698),
    b = t(405613),
    C = t(460838),
    y = t(462179),
    N = t(981631);
function Z(e) {
    var n, t, Z;
    let { guildEvent: O, truncate: k, onActionTaken: P, className: E, isNew: w } = e,
        {
            id: S,
            guild_id: I,
            channel_id: T,
            creator_id: D,
            name: _,
            description: G,
            entity_type: A,
            image: M,
            recurrence_rule: R,
        } = O,
        L = (0, f.DK)(O),
        U = (0, i.e7)([h.ZP], () => h.ZP.isInterestedInEventRecurrence(S, L), [S, L]),
        J = (0, i.e7)([l.Z], () => l.Z.isLurking(I), [I]),
        B = (0, i.e7)([c.Z], () => c.Z.getStageInstanceByChannel(T), [T]),
        z = (0, i.e7)([s.Z], () => s.Z.getGuild(I), [I]),
        q = (0, i.e7)([o.Z], () => o.Z.getChannel(T), [T]),
        W = (0, i.e7)([g.default], () => g.default.getUser(D), [D]),
        { speakers: H } = (0, j.Z)({
            id: T,
            data: {
                guild: null,
                instance: B,
                speakers: [],
                participantCount: 0,
            },
            context: {
                guildId: I,
                instance: B,
            },
        }),
        K = (0, i.e7)([d.Z], () => d.Z.getChannelId()),
        V = (0, h.xt)(O),
        F = K === T && null != K && V,
        Q = H.filter((e) => e.type === a.Ui.VOICE),
        X = Q.length,
        Y = (0, i.e7)([u.Z], () => u.Z.can(N.Plq.CONNECT, q), [q]),
        $ = (0, p.ZP)(O),
        ee = null != z,
        en = (0, y.Z)({
            guild: z,
            channel: q,
            guildScheduledEvent: O,
            isActive: V,
            recurrenceId: L,
            onActionTaken: P,
        }),
        et = J
            ? void 0
            : (e) =>
                  (0, m.bO)({
                      eventId: S,
                      recurrenceId: e,
                  });
    return (0, r.jsx)(
        C.Z,
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
                guild: z,
                channel: q,
                creator: W,
                name: _,
                entityType: A,
                description: null != G ? G : void 0,
                location: null != (n = (0, v.cS)(O)) ? n : void 0,
                imageSource: null != M ? (0, b.Z)(O) : void 0,
                imageLocation: C.Q.THUMBNAIL,
                isActive: V,
                isUserLurking: J,
                isJoined: F,
                isMember: ee,
                speakers: Q,
                canConnect: Y,
                speakerCount: X,
                rsvped: U,
                canInvite: $,
            },
            en,
        )),
        (Z = Z =
            {
                className: E,
                onClick: et,
                truncate: k,
                isNew: w,
                guildEvent: O,
                recurrenceRule: (0, x.KV)(R),
                recurrenceId: L,
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
