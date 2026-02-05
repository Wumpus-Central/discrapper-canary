n.d(t, { A: () => I });
var i = n(627968);
n(64700);
var r = n(397927),
    a = n(73153),
    l = n(298990),
    s = n(846293),
    o = n(684013),
    d = n(980142),
    c = n(626584),
    u = n(375492),
    A = n(461213),
    h = n(636401),
    _ = n(90924),
    m = n(629471),
    p = n(546983),
    g = n(613057),
    E = n(652215);
let f = new c.A("RPCCommandsOverlay"),
    I = {
        [E.e$_.SET_OVERLAY_LOCKED]: {
            scope: g.hj,
            validation: (e) =>
                (0, m.A)(e)
                    .required()
                    .keys({ locked: e.boolean().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { locked: t, pid: n },
                    socket: { application: i },
                } = e;
                if ((f.verbose("RPCCommands.SET_OVERLAY_LOCKED", { locked: t, pid: n }), null == i.id))
                    throw new h.A({ errorCode: E.Lw6.INVALID_COMMAND }, "No application.");
                o.A.setInputLocked(t, n);
            },
        },
        [E.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: g.hj,
            validation: (e) =>
                (0, m.A)(e)
                    .required()
                    .keys({ type: e.number().required().valid([E.xL.JOIN]), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        socket: t,
                        args: { type: n, pid: i },
                    } = e,
                    r = t.application.id;
                if (null == r) throw new h.A({ errorCode: E.Lw6.INVALID_COMMAND }, "No application.");
                let a = u.A.getApplicationActivity(r);
                if (null == a || null == a.secrets || !(0, _.px)(n, a.party, a.secrets))
                    throw new h.A(
                        { errorCode: E.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
                    );
                let { lock: s, context: o } = (0, p.d5)(i),
                    c = (0, d.A)(a, A.A);
                return (0, l.qf)(a, c, o).then(() => {
                    if ((s(), c))
                        throw new h.A(
                            { errorCode: E.Lw6.NO_ELIGIBLE_ACTIVITY },
                            "No eligible activity for application. Ensure user does have have privacy enabled.",
                        );
                });
            },
        },
        [E.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: g.hj,
            validation: (e) =>
                (0, m.A)(e)
                    .required()
                    .keys({ code: e.string().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { code: t, pid: n },
                    socket: i,
                } = e;
                if (null == i.application.id) throw new h.A({ errorCode: E.Lw6.INVALID_COMMAND }, "No application.");
                return s.Ay.resolveInvite(t, "Game SDK").then((e) => {
                    let { invite: t, code: i } = e;
                    if (null == t) throw new h.A({ errorCode: E.Lw6.INVALID_INVITE }, `Invalid invite id: ${i}`);
                    let { context: r, lock: l } = (0, p.d5)(n);
                    return new Promise((e) => {
                        a.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: i, context: r, resolve: e });
                    }).then(l);
                });
            },
        },
        [E.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: g.hj,
            validation: (e) =>
                (0, m.A)(e)
                    .required()
                    .keys({ pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        args: { pid: t },
                        socket: a,
                    } = e,
                    l = a.application.id;
                if (null == l) throw new h.A({ errorCode: E.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: s, context: o } = (0, p.d5)(t);
                return new Promise((e) => {
                    (0, r.mMO)(
                        async () => {
                            let { default: e } = await n.e("96531").then(n.bind(n, 880510));
                            return (t) =>
                                (0, i.jsx)(e, { ...t, mediaEngineContext: l, subtitle: a.application.name ?? void 0 });
                        },
                        {
                            contextKey: o === E.BRT.POPOUT ? r.KX8 : r.SYi,
                            onCloseCallback: () => {
                                s(), e();
                            },
                        },
                    );
                });
            },
        },
    };
