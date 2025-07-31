(n.d(t, { Z: () => G }), n(388685), n(415506), n(997841));
var r = n(255367);
n(73800);
var i = n(243814),
    l = n(45792),
    a = n(481060),
    o = n(278323),
    s = n(24124),
    c = n(224706),
    u = n(45114),
    d = n(479531),
    p = n(40851),
    h = n(636449),
    f = n(566620),
    g = n(531826),
    m = n(596223),
    b = n(838195),
    _ = n(333861),
    O = n(928518),
    E = n(23750),
    y = n(592125),
    v = n(293273),
    I = n(885110),
    C = n(451478),
    S = n(630388),
    N = n(823379),
    T = n(709054),
    P = n(591759),
    j = n(228488),
    A = n(996106),
    Z = n(914946),
    x = n(452426),
    w = n(561205),
    L = n(600027),
    R = n(852926),
    D = n(186901),
    k = n(981631),
    M = n(701488);
async function U(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        l = v.Z.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, Z.t9)(r, l.party, l.secrets)) throw new A.Z({ errorCode: k.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let a = (0, m.Z)(l, I.Z);
    if (a) {
        let { lock: t } = (0, R.jU)(e);
        return (0, s.h7)(l, a).then(() => {
            throw (t(), new A.Z({ errorCode: k.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
        });
    }
    await o.Z.sendActivityInviteUser({
        userId: n,
        type: r,
        activity: l,
        content: i,
        location: 'In-Game Invite'
    });
}
let G = {
    [k.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: r }
                } = e,
                i = t.application.id;
            if (null == i) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            return U(r, i, n, k.mFx.JOIN);
        }
    },
    [k.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = y.Z.getDMFromUserId(t);
            null != n &&
                (0, u.In)(
                    n,
                    {
                        section: k.jXE.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                        object: k.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
                        objectType: k.Qqv.ACK_SEMI_AUTOMATIC
                    },
                    !0,
                    !0
                );
        }
    },
    [k.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH]
        },
        validation: (e) =>
            (0, x.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([k.mFx.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: r, content: i, pid: l }
                } = e,
                a = t.application.id;
            if (null == a) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            return U(l, a, r, n, i);
        }
    },
    [k.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH]
        },
        validation: (e) =>
            (0, x.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([k.mFx.JOIN]),
                    user_id: e.string().required(),
                    session_id: e.string().required(),
                    channel_id: e.string().required(),
                    message_id: e.string().required(),
                    application_id: e.string().optional()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: r, session_id: i, channel_id: l, message_id: a, application_id: o }
                } = e,
                s = t.transport === D.He.IPC && null != o ? o : t.application.id;
            if (null == s) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            let u = Promise.resolve(!1);
            return (
                n === k.mFx.JOIN &&
                    (u = c.Z.join({
                        userId: r,
                        sessionId: i,
                        applicationId: s,
                        channelId: l,
                        messageId: a
                    })),
                u.then((e) => {
                    if (!e) throw new A.Z({ errorCode: k.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
                })
            );
        }
    },
    [k.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH, D.wE]
        },
        handler(e) {
            let { socket: t } = e,
                i = t.application;
            if (null == i.id) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            let { channel: l, guild: o, frame: c } = (0, L.T)(),
                u = (0, g.ZP)({
                    application: t.application,
                    channelId: null == l ? void 0 : l.id
                }),
                d = null != u ? O.Z.getWindow(u) : void 0;
            (null == d ? void 0 : d.closed) && (d = void 0);
            let p = null != d ? k.IlC.POPOUT : k.IlC.APP;
            if (((0, j.Pr)({}, null == d ? void 0 : d.document), null != c)) {
                if (c.applicationId !== i.id) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'Application is not currently mounted.');
                let e = v.Z.getApplicationActivity(i.id);
                if (null != e) (0, s.h7)(e, !1, p);
                else throw new A.Z({ errorCode: k.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity was set using setActivity.');
            } else
                (0, a.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('34946')]).then(n.bind(n, 560114));
                        return (t) => {
                            var n, a;
                            return (0, r.jsx)(
                                e,
                                ((n = (function (e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {},
                                            r = Object.keys(n);
                                        ('function' == typeof Object.getOwnPropertySymbols &&
                                            (r = r.concat(
                                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                })
                                            )),
                                            r.forEach(function (t) {
                                                var r;
                                                ((r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0
                                                          })
                                                        : (e[t] = r));
                                            }));
                                    }
                                    return e;
                                })({}, t)),
                                (a = a =
                                    {
                                        guild: o,
                                        channel: l,
                                        applicationId: i.id,
                                        analyticsLocation: k.Sbl.ACTIVITY_RPC,
                                        source: k.t4x.ACTIVITY_INVITE
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                n)
                            );
                        };
                    },
                    { contextKey: p === k.IlC.POPOUT ? a.u1M : a.z1l }
                );
        }
    },
    [k.Etm.INITIATE_IMAGE_UPLOAD]: (0, l.S)(k.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH, D.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                r = n.application.id;
            if (null == r) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            let i = null == (t = (0, w.Z)()) ? void 0 : t.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, h.R)()) n = O.Z.getWindow(k.KJ3.ACTIVITY_POPOUT);
                    else {
                        var r;
                        let e = C.Z.getLastFocusedWindowId();
                        n = null == e ? null : null == (r = (0, p.g0)(e)) ? void 0 : r.renderWindow;
                    }
                    if (null == n) throw new A.Z({ errorCode: k.lTL.UNKNOWN_ERROR }, 'No valid window found');
                    let i = n.document.createElement('input');
                    ((i.style.display = 'none'), (i.type = 'file'), (i.accept = 'image/jpeg, image/jpg, image/png, image/gif'));
                    let l = () => {
                        ((null == i.files || 0 === i.files.length) && t(),
                            n.document.body.removeEventListener('focus', l, !0),
                            setTimeout(() => {
                                n.document.body.removeChild(i);
                            }, 1000));
                    };
                    (i.addEventListener('change', () => {
                        ((0, N.lm)(i.files) && e(i.files[0]), l());
                    }),
                        i.addEventListener('cancel', () => {
                            l();
                        }),
                        n.document.body.addEventListener('focus', l, !0),
                        n.document.body.appendChild(i),
                        i.click());
                })(
                    async (n) => {
                        let l = await (0, f.kv)(r, i, n);
                        (0, N.lm)(l) && (0, N.lm)(l.url) && !(l instanceof d.Z) ? e({ image_url: l.url }) : t(l);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new A.Z({ errorCode: k.lTL.UNKNOWN_ERROR }, null != (t = null == e ? void 0 : e.message) ? t : 'Failed to upload image');
            });
        }
    }),
    [k.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, l.S)(k.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [D.Gp.ANY]: [D.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: r }
            } = e;
            (0, Z.bu)(n.transport);
            let i = n.application.id;
            if (null == i) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, S.yE)(null != (t = n.application.flags) ? t : 0, k.udG.EMBEDDED)) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let l = (0, w.Z)();
            if (!P.Z.isDiscordCdnUrl(r)) throw new A.Z({ errorCode: k.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, b.Z)({
                applicationId: i,
                channelId: null == l ? void 0 : l.id,
                mediaUrl: r
            });
        }
    }),
    [k.Etm.SHARE_INTERACTION]: (0, l.S)(k.Etm.SHARE_INTERACTION, {
        scope: {
            [D.Gp.ANY]: [D.wE, D.lH]
        },
        handler(e) {
            var t;
            let n,
                {
                    socket: r,
                    args: { command: i, preview_image: l, components: o, require_launch_channel: s, content: c, options: u, pid: d }
                } = e,
                p = r.application.id;
            if (null == p) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            if (!M.Cr.includes(p)) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'Unsupported application.');
            if (!(0, S.yE)(null != (t = r.application.flags) ? t : 0, k.udG.EMBEDDED)) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let h = (0, w.Z)();
            if (null == h && s) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No channel found');
            if (null !== l || null !== o || null !== c) {
                let e = [];
                (void 0 !== l &&
                    (e = [
                        {
                            id: T.default.cast(T.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: l.url,
                            filename: 'preview',
                            url: l.url,
                            height: l.height,
                            width: l.width
                        }
                    ]),
                    (n = new E.ZP({
                        id: T.default.cast(T.default.fromTimestamp(Date.now())),
                        applicationId: p,
                        content: c,
                        components: o,
                        attachments: e
                    })));
            }
            return new Promise((e) => {
                let t = !1,
                    r = (0, R.jU)(d),
                    l = a.z1l;
                ((O.Z.getWindowOpen(k.KJ3.ACTIVITY_POPOUT) || r.context === k.IlC.POPOUT) && (l = a.u1M),
                    (0, _.M)({
                        applicationId: p,
                        channel: h,
                        command: {
                            name: i,
                            options: u
                        },
                        requireLaunchChannel: !0 === s,
                        onShareResult: (n) => {
                            (t || (t = n), r.lock(), e({ success: t }));
                        },
                        previewMessage: n,
                        contextKey: l
                    }));
            });
        }
    })
};
