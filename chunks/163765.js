t.d(n, { default: () => O });
var i = t(477900),
    a = t(582128),
    l = t(855986),
    s = t(189213),
    r = t(998445),
    c = t(834730),
    o = t(939249),
    u = t(658675),
    d = t(857071),
    h = t(931991),
    A = t(571909),
    v = t(660110),
    y = t(734057),
    g = t(71393),
    E = t(627784),
    f = t(284009),
    p = t.n(f),
    _ = t(597798),
    C = t(849736),
    m = t(129095),
    w = t(495867),
    I = t(988794);
t(321073);
var G = t(755584),
    N = t(602146),
    P = t(95701),
    S = t(496092),
    b = t(652215);
let k = { onSuccess: () => {}, permissionOverwrites: [] };
var x = t(691012),
    T = t(567550),
    L = t(792996),
    j = t(247150);
function O(e) {
    let { transitionState: n, event: t, onSuccess: f, onClose: O } = e,
        { guild_id: U, privacy_level: D } = t,
        V = (0, l.bG)([y.A], () => y.A.getChannel(t.channel_id), [t]),
        X = (0, l.bG)([g.A], () => g.A.getGuild(U), [U]),
        { canManageGuildEvent: B } = (0, h.nr)(V ?? X),
        H = B(t),
        M = (0, l.bG)([d.A], () => d.A.isLurking(U), [U]),
        q = t.entity_type === I.Ps.STAGE_INSTANCE,
        [J, R] = a.useState(q),
        [Y, { loading: z, error: K }] = (function () {
            let [e, n] = a.useState(!1),
                [t, i] = a.useState(null);
            return [
                async function (e, t) {
                    let { onSuccess: a = k.onSuccess, permissionOverwrites: l = k.permissionOverwrites } =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : k;
                    n(!0);
                    try {
                        (await (async function (e, n) {
                            let { entity_type: t } = e;
                            if (t === I.Ps.STAGE_INSTANCE) {
                                let t = await (function (e, n) {
                                    let { guild_id: t, channel_id: i } = e,
                                        a = g.A.getGuild(t);
                                    if (null == a) return Promise.resolve(null);
                                    let l = y.A.getChannel(i);
                                    return null == l
                                        ? (async function (e, n) {
                                              let t =
                                                      arguments.length > 2 && void 0 !== arguments[2]
                                                          ? arguments[2]
                                                          : [],
                                                  i = [];
                                              i.push(...t);
                                              let a = await G.A.createChannel({
                                                  guildId: e.id,
                                                  type: b.rbe.GUILD_STAGE_VOICE,
                                                  name: n.substring(0, 100),
                                                  permissionOverwrites: i,
                                              });
                                              if (null == a || 201 !== a.status)
                                                  throw Error("Can't create channel for event");
                                              return (0, P.UE)(a.body);
                                          })(a, e.name, n)
                                        : Promise.resolve(l);
                                })(e, n);
                                p()(null != t, "could not find or create channel");
                            }
                        })(e, l),
                            await (async function (e) {
                                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    { channel_id: t, entity_type: i, name: a, id: l, guild_id: s } = e;
                                switch (i) {
                                    case I.Ps.STAGE_INSTANCE:
                                        (p()(null != t, "channel_id is required"),
                                            await (0, N.yG)(t, a, I.dD.GUILD_ONLY, n, l));
                                        break;
                                    case I.Ps.VOICE:
                                        (p()(null != t, "channel_id is required"), await S.default.startEvent(l, s));
                                        break;
                                    case I.Ps.EXTERNAL:
                                        await S.default.startEvent(l, s);
                                }
                            })(e, t),
                            await (async function (e) {
                                let { entity_type: n } = e;
                                switch (n) {
                                    case I.Ps.STAGE_INSTANCE: {
                                        let n = w.A.getChannelId(),
                                            t = y.A.getChannel(e.channel_id);
                                        (p()(null != t, "could not find channel"),
                                            n !== t.id && (await m.cy(t, !0), await m.jA(t, null)),
                                            await (0, C.e7)(t, !1, !0));
                                        break;
                                    }
                                    case I.Ps.VOICE: {
                                        let n = w.A.getChannelId(),
                                            t = y.A.getChannel(e.channel_id);
                                        (p()(null != t, "could not find channel"),
                                            n !== t.id && _.default.selectVoiceChannel(t.id));
                                    }
                                }
                            })(e),
                            await (function (e, n) {
                                let { entity_type: t } = e;
                                switch (t) {
                                    case I.Ps.STAGE_INSTANCE:
                                    case I.Ps.VOICE:
                                    case I.Ps.EXTERNAL:
                                        n?.();
                                }
                                return Promise.resolve();
                            })(e, a),
                            n(!1));
                    } catch (e) {
                        (i(new E.LG(e)), n(!1));
                    }
                    n(!1);
                },
                { loading: e, error: t },
            ];
        })();
    if (!H) return null;
    let Q = D === I.dD.PUBLIC ? L.intl.string(L.t.HhlaLP) : L.intl.string(L.t.GI3xXd);
    function F() {
        (f?.(), O(), (0, A.ek)(!1));
    }
    return (0, i.jsxs)(s.a, {
        transitionState: n,
        onClose: O,
        title: t.name,
        subtitle: L.intl.format(L.t.UMajol, {
            privacyLevel: Q,
            privacyLevelHook: function (e, n) {
                return D !== I.dD.PUBLIC
                    ? null
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: j.ro,
                              children: [
                                  (0, i.jsx)(r.GlobeEarthIcon, { size: "xs", color: "currentColor", className: j.HJ }),
                                  (0, i.jsx)(c.E, { variant: "body-md/normal", children: e }),
                              ],
                          },
                          n,
                      );
            },
        }),
        actionBarInput: q
            ? (0, i.jsxs)(o.D, {
                  onClick: () => R(!J),
                  className: j.Qy,
                  children: [
                      (0, i.jsx)(u.P, { checked: J }),
                      (0, i.jsx)(c.E, {
                          color: "text-default",
                          variant: "body-sm/normal",
                          children: L.intl.string(L.t["Pe+Pwp"]),
                      }),
                  ],
              })
            : void 0,
        actions: [
            {
                variant: "active",
                text: L.intl.string(L.t.cK1GGY),
                onClick: async function () {
                    await Y(t, J, { onSuccess: F });
                },
                loading: z,
            },
        ],
        children: [
            (0, i.jsx)(T.A, {
                guild: X,
                channel: V,
                name: t.name,
                description: t.description ?? void 0,
                imageSource: (0, x.A)(t, 1024),
                isActive: !1,
                isUserLurking: M,
                speakers: [],
                speakerCount: 0,
                rsvped: !0,
                guildEvent: t,
                hideAgeVerificationNotice: !0,
            }),
            I.Tn.has(t.entity_type) && (0, i.jsx)(v.A, { className: j.XI, channelId: t.channel_id }),
            null != K && null != K.getAnyErrorMessage()
                ? (0, i.jsx)(c.E, {
                      color: "text-feedback-critical",
                      variant: "body-sm/normal",
                      className: j.gJ,
                      children: K.getAnyErrorMessage(),
                  })
                : null,
        ],
    });
}
