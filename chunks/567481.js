n.d(t, { Z: () => O }), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    a = n(24124),
    o = n(447543),
    s = n(13245),
    c = n(596223),
    u = n(710845),
    d = n(293273),
    p = n(885110),
    h = n(996106),
    f = n(914946),
    g = n(452426),
    m = n(852926),
    b = n(186901),
    _ = n(981631);
let E = new u.Z('RPCCommandsOverlay'),
    O = {
        [_.Etm.SET_OVERLAY_LOCKED]: {
            scope: b.lH,
            validation: (e) =>
                (0, g.Z)(e)
                    .required()
                    .keys({
                        locked: e.boolean().required(),
                        pid: e.number().min(0).required()
                    }),
            handler(e) {
                let {
                    args: { locked: t, pid: n },
                    socket: { application: r }
                } = e;
                if (
                    (E.verbose('RPCCommands.SET_OVERLAY_LOCKED', {
                        locked: t,
                        pid: n
                    }),
                    null == r.id)
                )
                    throw new h.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'No application.');
                s.Z.setInputLocked(t, n);
            }
        },
        [_.Etm.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: b.lH,
            validation: (e) =>
                (0, g.Z)(e)
                    .required()
                    .keys({
                        type: e.number().required().valid([_.mFx.JOIN]),
                        pid: e.number().min(0).required()
                    }),
            handler(e) {
                let {
                        socket: t,
                        args: { type: n, pid: r }
                    } = e,
                    i = t.application.id;
                if (null == i) throw new h.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'No application.');
                let l = d.Z.getApplicationActivity(i);
                if (null == l || null == l.secrets || !(0, f.t9)(n, l.party, l.secrets)) throw new h.Z({ errorCode: _.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
                let { lock: o, context: s } = (0, m.jU)(r),
                    u = (0, c.Z)(l, p.Z);
                return (0, a.h7)(l, u, s).then(() => {
                    if ((o(), u)) throw new h.Z({ errorCode: _.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.');
                });
            }
        },
        [_.Etm.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: b.lH,
            validation: (e) =>
                (0, g.Z)(e)
                    .required()
                    .keys({
                        code: e.string().required(),
                        pid: e.number().min(0).required()
                    }),
            handler(e) {
                let {
                    args: { code: t, pid: n },
                    socket: r
                } = e;
                if (null == r.application.id) throw new h.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'No application.');
                return o.ZP.resolveInvite(t, 'Game SDK').then((e) => {
                    let { invite: t, code: r } = e;
                    if (null == t) throw new h.Z({ errorCode: _.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(r));
                    let { context: i, lock: a } = (0, m.jU)(n);
                    return new Promise((e) => {
                        l.Z.dispatch({
                            type: 'INVITE_MODAL_OPEN',
                            invite: t,
                            code: r,
                            context: i,
                            resolve: e
                        });
                    }).then(a);
                });
            }
        },
        [_.Etm.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: b.lH,
            validation: (e) =>
                (0, g.Z)(e)
                    .required()
                    .keys({ pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        args: { pid: t },
                        socket: l
                    } = e,
                    a = l.application.id;
                if (null == a) throw new h.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'No application.');
                let { lock: o, context: s } = (0, m.jU)(t);
                return new Promise((e) => {
                    (0, i.ZDy)(
                        async () => {
                            let { default: e } = await n.e('45406').then(n.bind(n, 344516));
                            return (t) => {
                                var n, i;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            'function' == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    })
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (i = i =
                                        {
                                            mediaEngineContext: a,
                                            title: l.application.name,
                                            onClose: () => {
                                                t.onClose();
                                            }
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n)
                                );
                            };
                        },
                        {
                            contextKey: s === _.IlC.POPOUT ? i.u1M : i.z1l,
                            onCloseCallback: () => {
                                o(), e();
                            }
                        }
                    );
                });
            }
        }
    };
