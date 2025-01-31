i.d(n, { Z: () => I });
var t = i(200651);
i(192379);
var l = i(442837),
    a = i(724912),
    r = i(41776),
    o = i(501655),
    s = i(427679),
    c = i(592125),
    d = i(496675),
    u = i(19780),
    g = i(594174),
    h = i(15274),
    v = i(924301),
    x = i(951539),
    Z = i(146768),
    m = i(592126),
    C = i(236373),
    f = i(230900),
    p = i(854698),
    N = i(405613),
    j = i(460838),
    E = i(462179),
    k = i(981631);
function I(e) {
    var n;
    let { guildEvent: i, guildId: I, truncate: P, onActionTaken: T, className: _, isNew: y } = e,
        { id: G, guild_id: b, channel_id: S, creator_id: L, name: D, description: R, entity_type: w, image: M, recurrence_rule: U } = i,
        H = (0, p.DK)(i),
        A = (0, l.e7)([v.ZP], () => v.ZP.isInterestedInEventRecurrence(G, H), [G, H]),
        z = (0, l.e7)([r.Z], () => r.Z.isLurking(b), [b]),
        B = (0, l.e7)([s.Z], () => s.Z.getStageInstanceByChannel(S), [S]),
        X = (0, l.e7)([c.Z], () => c.Z.getChannel(S), [S]),
        J = (0, l.e7)([g.default], () => g.default.getUser(L), [L]),
        { speakers: V } = (0, Z.Z)({
            id: S,
            data: {
                guild: null,
                instance: B,
                speakers: [],
                participantCount: 0
            },
            context: {
                guildId: b,
                instance: B
            }
        }),
        q = (0, l.e7)([u.Z], () => u.Z.getChannelId()),
        W = (0, v.xt)(i),
        O = q === S && null != q && W,
        K = V.filter((e) => e.type === o.Ui.VOICE),
        F = K.length,
        Q = (0, l.e7)([d.Z], () => d.Z.can(k.Plq.CONNECT, X), [X]),
        Y = (0, x.ZP)(i),
        { isMember: $, guild: ee } = (0, m.Z)(b, G),
        en = (0, E.Z)({
            guild: ee,
            channel: X,
            guildScheduledEvent: i,
            isActive: W,
            recurrenceId: H,
            onActionTaken: T
        }),
        ei = (0, a.Z)(I),
        et = z
            ? void 0
            : (e) =>
                  (0, h.bO)({
                      eventId: G,
                      parentGuildId: I,
                      recurrenceId: e
                  });
    return (0, t.jsx)(j.Z, {
        guild: ee,
        channel: X,
        creator: J,
        name: D,
        entityType: w,
        description: null != R ? R : void 0,
        location: null !== (n = (0, f.cS)(i)) && void 0 !== n ? n : void 0,
        imageSource: null != M ? (0, N.Z)(i) : void 0,
        imageLocation: j.Q.THUMBNAIL,
        isActive: W,
        isUserLurking: z,
        isJoined: O,
        isMember: $,
        isHub: ei,
        speakers: K,
        canConnect: Q,
        speakerCount: F,
        rsvped: A,
        canInvite: Y,
        ...en,
        className: _,
        onClick: et,
        truncate: P,
        isNew: y,
        guildEvent: i,
        recurrenceRule: (0, C.KV)(U),
        recurrenceId: H
    });
}
