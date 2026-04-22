n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(231723),
    l = n(73153),
    s = n(298990),
    o = n(846293),
    d = n(684013),
    u = n(980142),
    c = n(626584),
    A = n(375492),
    h = n(461213),
    _ = n(636401),
    E = n(90924),
    p = n(629471),
    m = n(546983),
    g = n(613057),
    I = n(652215);
let C = new c.A("RPCCommandsOverlay"),
    f = {
        [I.e$_.SET_OVERLAY_LOCKED]: {
            scope: g.hj,
            validation: (e) =>
                (0, p.A)(e)
                    .required()
                    .keys({ locked: e.boolean().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { locked: t, pid: n },
                    socket: { application: i },
                } = e;
                if ((C.verbose("RPCCommands.SET_OVERLAY_LOCKED", { locked: t, pid: n }), null == i.id))
                    throw new _.A({ errorCode: I.Lw6.INVALID_COMMAND }, "No application.");
                d.A.setInputLocked(t, n);
            },
        },
        [I.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: g.hj,
            validation: (e) =>
                (0, p.A)(e)
                    .required()
                    .keys({ type: e.number().required().valid([I.xL.JOIN]), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        socket: t,
                        args: { type: n, pid: i },
                    } = e,
                    r = t.application.id;
                if (null == r) throw new _.A({ errorCode: I.Lw6.INVALID_COMMAND }, "No application.");
                let a = A.A.getApplicationActivity(r);
                if (null == a || null == a.secrets || !(0, E.px)(n, a.party, a.secrets))
                    throw new _.A(
                        { errorCode: I.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
                    );
                let { lock: l, context: o } = (0, m.d5)(i),
                    d = (0, u.A)(a, h.A);
                return (0, s.qf)(a, d, o).then(() => {
                    if ((l(), d))
                        throw new _.A(
                            { errorCode: I.Lw6.NO_ELIGIBLE_ACTIVITY },
                            "No eligible activity for application. Ensure user does have have privacy enabled.",
                        );
                });
            },
        },
        [I.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: g.hj,
            validation: (e) =>
                (0, p.A)(e)
                    .required()
                    .keys({ code: e.string().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { code: t, pid: n },
                    socket: i,
                } = e;
                if (null == i.application.id) throw new _.A({ errorCode: I.Lw6.INVALID_COMMAND }, "No application.");
                return o.Ay.resolveInvite(t, "Game SDK").then((e) => {
                    let { invite: t, code: i } = e;
                    if (null == t) throw new _.A({ errorCode: I.Lw6.INVALID_INVITE }, `Invalid invite id: ${i}`);
                    let { context: r, lock: a } = (0, m.d5)(n);
                    return new Promise((e) => {
                        l.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: i, context: r, resolve: e });
                    }).then(a);
                });
            },
        },
        [I.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: g.hj,
            validation: (e) =>
                (0, p.A)(e)
                    .required()
                    .keys({ pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        args: { pid: t },
                        socket: l,
                    } = e,
                    s = l.application.id;
                if (null == s) throw new _.A({ errorCode: I.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: o, context: d } = (0, m.d5)(t);
                return new Promise((e) => {
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("18912").then(n.bind(n, 880510));
                            return (t) =>
                                (0, i.jsx)(e, { ...t, mediaEngineContext: s, subtitle: l.application.name ?? void 0 });
                        },
                        {
                            contextKey: d === I.BRT.POPOUT ? a.KX : a.SY,
                            onCloseCallback: () => {
                                o(), e();
                            },
                        },
                    );
                });
            },
        },
    };
