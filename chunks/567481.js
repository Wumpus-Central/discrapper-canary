n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(24124),
    s = n(447543),
    o = n(13245),
    c = n(596223),
    d = n(710845),
    u = n(293273),
    h = n(885110),
    m = n(996106),
    p = n(914946),
    g = n(452426),
    f = n(852926),
    _ = n(186901),
    E = n(981631);
let I = new d.Z('RPCCommandsOverlay');
t.Z = {
    [E.Etm.SET_OVERLAY_LOCKED]: {
        scope: _.lH,
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
                socket: { application: i }
            } = e;
            if (
                (I.verbose('RPCCommands.SET_OVERLAY_LOCKED', {
                    locked: t,
                    pid: n
                }),
                null == i.id)
            )
                throw new m.Z({ errorCode: E.lTL.INVALID_COMMAND }, 'No application.');
            o.Z.setInputLocked(t, n);
        }
    },
    [E.Etm.OPEN_OVERLAY_ACTIVITY_INVITE]: {
        scope: _.lH,
        validation: (e) =>
            (0, g.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([E.mFx.JOIN]),
                    pid: e.number().min(0).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, pid: i }
                } = e,
                r = t.application.id;
            if (null == r) throw new m.Z({ errorCode: E.lTL.INVALID_COMMAND }, 'No application.');
            let l = u.Z.getApplicationActivity(r);
            if (null == l || null == l.secrets || !(0, p.t9)(n, l.party, l.secrets)) throw new m.Z({ errorCode: E.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
            let { lock: s, context: o } = (0, f.jU)(i),
                d = (0, c.Z)(l, h.Z);
            return (0, a.h7)(l, d, o).then(() => {
                if ((s(), d)) throw new m.Z({ errorCode: E.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.');
            });
        }
    },
    [E.Etm.OPEN_OVERLAY_GUILD_INVITE]: {
        scope: _.lH,
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
                socket: i
            } = e;
            if (null == i.application.id) throw new m.Z({ errorCode: E.lTL.INVALID_COMMAND }, 'No application.');
            return s.Z.resolveInvite(t, 'Game SDK').then((e) => {
                let { invite: t, code: i } = e;
                if (null == t) throw new m.Z({ errorCode: E.lTL.INVALID_INVITE }, 'Invalid invite id: '.concat(i));
                let { context: r, lock: a } = (0, f.jU)(n);
                return new Promise((e) => {
                    l.Z.dispatch({
                        type: 'INVITE_MODAL_OPEN',
                        invite: t,
                        code: i,
                        context: r,
                        resolve: e
                    });
                }).then(a);
            });
        }
    },
    [E.Etm.OPEN_OVERLAY_VOICE_SETTINGS]: {
        scope: _.lH,
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
            if (null == a) throw new m.Z({ errorCode: E.lTL.INVALID_COMMAND }, 'No application.');
            let { lock: s } = (0, f.jU)(t);
            return new Promise((e) => {
                (0, r.openModalLazy)(async () => {
                    let { default: t } = await n.e('66063').then(n.bind(n, 344516));
                    return (n) =>
                        (0, i.jsx)(t, {
                            ...n,
                            mediaEngineContext: a,
                            title: l.application.name,
                            onClose: () => {
                                n.onClose(), s(), e();
                            }
                        });
                });
            });
        }
    }
};
