n.d(t, {
    A: () => E,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    a = n(298990),
    s = n(846293),
    o = n(684013),
    c = n(980142),
    u = n(626584),
    d = n(375492),
    p = n(461213),
    f = n(636401),
    h = n(90924),
    A = n(629471),
    g = n(546983),
    m = n(613057),
    b = n(652215);
let _ = new u.A("RPCCommandsOverlay"),
    E = {
        [b.e$_.SET_OVERLAY_LOCKED]: {
            scope: m.hj,
            validation: (e) =>
                (0, A.A)(e)
                    .required()
                    .keys({
                        locked: e.boolean().required(),
                        pid: e.number().min(0).required(),
                    }),
            handler(e) {
                let {
                    args: { locked: t, pid: n },
                    socket: { application: r },
                } = e;
                if (
                    (_.verbose("RPCCommands.SET_OVERLAY_LOCKED", {
                        locked: t,
                        pid: n,
                    }),
                    null == r.id)
                )
                    throw new f.A(
                        {
                            errorCode: b.Lw6.INVALID_COMMAND,
                        },
                        "No application.",
                    );
                o.A.setInputLocked(t, n);
            },
        },
        [b.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: m.hj,
            validation: (e) =>
                (0, A.A)(e)
                    .required()
                    .keys({
                        type: e.number().required().valid([b.xL.JOIN]),
                        pid: e.number().min(0).required(),
                    }),
            handler(e) {
                let {
                        socket: t,
                        args: { type: n, pid: r },
                    } = e,
                    i = t.application.id;
                if (null == i)
                    throw new f.A(
                        {
                            errorCode: b.Lw6.INVALID_COMMAND,
                        },
                        "No application.",
                    );
                let l = d.A.getApplicationActivity(i);
                if (null == l || null == l.secrets || !(0, h.px)(n, l.party, l.secrets))
                    throw new f.A(
                        {
                            errorCode: b.Lw6.NO_ELIGIBLE_ACTIVITY,
                        },
                        "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
                    );
                let { lock: s, context: o } = (0, g.d5)(r),
                    u = (0, c.A)(l, p.A);
                return (0, a.qf)(l, u, o).then(() => {
                    if ((s(), u))
                        throw new f.A(
                            {
                                errorCode: b.Lw6.NO_ELIGIBLE_ACTIVITY,
                            },
                            "No eligible activity for application. Ensure user does have have privacy enabled.",
                        );
                });
            },
        },
        [b.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: m.hj,
            validation: (e) =>
                (0, A.A)(e)
                    .required()
                    .keys({
                        code: e.string().required(),
                        pid: e.number().min(0).required(),
                    }),
            handler(e) {
                let {
                    args: { code: t, pid: n },
                    socket: r,
                } = e;
                if (null == r.application.id)
                    throw new f.A(
                        {
                            errorCode: b.Lw6.INVALID_COMMAND,
                        },
                        "No application.",
                    );
                return s.Ay.resolveInvite(t, "Game SDK").then((e) => {
                    let { invite: t, code: r } = e;
                    if (null == t)
                        throw new f.A(
                            {
                                errorCode: b.Lw6.INVALID_INVITE,
                            },
                            "Invalid invite id: ".concat(r),
                        );
                    let { context: i, lock: a } = (0, g.d5)(n);
                    return new Promise((e) => {
                        l.h.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: t,
                            code: r,
                            context: i,
                            resolve: e,
                        });
                    }).then(a);
                });
            },
        },
        [b.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: m.hj,
            validation: (e) =>
                (0, A.A)(e)
                    .required()
                    .keys({
                        pid: e.number().min(0).required(),
                    }),
            handler(e) {
                let {
                        args: { pid: t },
                        socket: l,
                    } = e,
                    a = l.application.id;
                if (null == a)
                    throw new f.A(
                        {
                            errorCode: b.Lw6.INVALID_COMMAND,
                        },
                        "No application.",
                    );
                let { lock: s, context: o } = (0, g.d5)(t);
                return new Promise((e) => {
                    (0, i.mMO)(
                        async () => {
                            let { default: e } = await n.e("96531").then(n.bind(n, 880510));
                            return (t) => {
                                var n, i, s;
                                return (0, r.jsx)(
                                    e,
                                    ((i = (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                r = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (r = r.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                r.forEach(function (t) {
                                                    var r;
                                                    (r = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: r,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = r);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (s = s =
                                        {
                                            mediaEngineContext: a,
                                            subtitle: null != (n = l.application.name) ? n : void 0,
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(s)).forEach(function (e) {
                                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                                          }),
                                    i),
                                );
                            };
                        },
                        {
                            contextKey: o === b.BRT.POPOUT ? i.KX8 : i.SYi,
                            onCloseCallback: () => {
                                s(), e();
                            },
                        },
                    );
                });
            },
        },
    };
