t.d(n, { A: () => O }), t(228524);
var r = t(627968);
t(64700);
var l = t(311907),
    i = t(857071),
    s = t(69407),
    a = t(446600),
    c = t(734057),
    o = t(71393),
    u = t(576705),
    d = t(383501),
    m = t(287809),
    g = t(707592),
    h = t(698441),
    j = t(485394),
    x = t(961022),
    v = t(794782),
    p = t(9448),
    f = t(974930),
    b = t(691012),
    A = t(895202),
    y = t(482857),
    C = t(652215);
function O(e) {
    var n, t, O;
    let { guildEvent: N, truncate: k, onActionTaken: E, className: P, isNew: w } = e,
        {
            id: G,
            guild_id: T,
            channel_id: S,
            creator_id: I,
            name: M,
            description: _,
            entity_type: D,
            image: R,
            recurrence_rule: U,
        } = N,
        B = (0, f.G3)(N),
        L = (0, l.bG)([h.Ay], () => h.Ay.isInterestedInEventRecurrence(G, B), [G, B]),
        z = (0, l.bG)([i.A], () => i.A.isLurking(T), [T]),
        V = (0, l.bG)([a.A], () => a.A.getStageInstanceByChannel(S), [S]),
        q = (0, l.bG)([o.A], () => o.A.getGuild(T), [T]),
        J = (0, l.bG)([c.A], () => c.A.getChannel(S), [S]),
        K = (0, l.bG)([m.default], () => m.default.getUser(I), [I]),
        { speakers: F } = (0, x.A)({
            id: S,
            data: {
                guild: null,
                instance: V,
                speakers: [],
                participantCount: 0,
            },
            context: {
                guildId: T,
                instance: V,
            },
        }),
        H = (0, l.bG)([d.A], () => d.A.getChannelId()),
        W = (0, h.Fd)(N),
        X = H === S && null != H && W,
        Z = F.filter((e) => e.type === s.wY.VOICE),
        Q = Z.length,
        Y = (0, l.bG)([u.A], () => u.A.can(C.xBc.CONNECT, J), [J]),
        $ = (0, j.Ay)(N),
        ee = null != q,
        en = (0, y.A)({
            guild: q,
            channel: J,
            guildScheduledEvent: N,
            isActive: W,
            recurrenceId: B,
            onActionTaken: E,
        }),
        et = z
            ? void 0
            : (e) =>
                  (0, g.uR)({
                      eventId: G,
                      recurrenceId: e,
                  });
    return (0, r.jsx)(
        A.A,
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
                guild: q,
                channel: J,
                creator: K,
                name: M,
                entityType: D,
                description: null != _ ? _ : void 0,
                location: null != (n = (0, p.oF)(N)) ? n : void 0,
                imageSource: null != R ? (0, b.A)(N) : void 0,
                imageLocation: A.c.THUMBNAIL,
                isActive: W,
                isUserLurking: z,
                isJoined: X,
                isMember: ee,
                speakers: Z,
                canConnect: Y,
                speakerCount: Q,
                rsvped: L,
                canInvite: $,
            },
            en,
        )),
        (O = O =
            {
                className: P,
                onClick: et,
                truncate: k,
                isNew: w,
                guildEvent: N,
                recurrenceRule: (0, v.Sn)(U),
                recurrenceId: B,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(O))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, r);
                  }
                  return t;
              })(Object(O)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(O, e));
              }),
        t),
    );
}
