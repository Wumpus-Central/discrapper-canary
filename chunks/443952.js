n.d(t, { Z: () => G }), n(47120), n(411104), n(789020);
var r = n(200651);
n(192379);
var i = n(243814),
    l = n(45792),
    o = n(481060),
    a = n(278323),
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
    E = n(928518),
    O = n(23750),
    N = n(592125),
    v = n(293273),
    y = n(885110),
    I = n(451478),
    C = n(630388),
    S = n(823379),
    T = n(709054),
    P = n(591759),
    j = n(228488),
    A = n(996106),
    Z = n(914946),
    x = n(452426),
    L = n(561205),
    w = n(600027),
    R = n(852926),
    D = n(186901),
    k = n(981631),
    M = n(701488);
async function U(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        l = v.Z.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, Z.t9)(r, l.party, l.secrets)) throw new A.Z({ errorCode: k.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let o = (0, m.Z)(l, y.Z);
    if (o) {
        let { lock: t } = (0, R.jU)(e);
        return (0, s.h7)(l, o).then(() => {
            throw (t(), new A.Z({ errorCode: k.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
        });
    }
    await a.Z.sendActivityInviteUser({
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
                n = N.Z.getDMFromUserId(t);
            null != n && (0, u.In)(n, !0, !0);
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
                o = t.application.id;
            if (null == o) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            return U(l, o, r, n, i);
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
                    message_id: e.string().required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: r, session_id: i, channel_id: l, message_id: o }
                } = e,
                a = t.application.id;
            if (null == a) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            let s = Promise.resolve(!1);
            return (
                n === k.mFx.JOIN &&
                    (s = c.Z.join({
                        userId: r,
                        sessionId: i,
                        applicationId: a,
                        channelId: l,
                        messageId: o
                    })),
                s.then((e) => {
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
                { channel: i, guild: l } = (0, w.T)(),
                a = (0, g.ZP)({
                    application: t.application,
                    channelId: i.id
                }),
                s = null != a ? E.Z.getWindow(a) : void 0;
            (null == s ? void 0 : s.closed) && (s = void 0);
            let c = null != s ? k.IlC.POPOUT : k.IlC.APP;
            (0, j.Pr)({}, null == s ? void 0 : s.document),
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('65699')]).then(n.bind(n, 560114));
                        return (n) => {
                            var o, a;
                            return (0, r.jsx)(
                                e,
                                ((o = (function (e) {
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
                                })({}, n)),
                                (a = a =
                                    {
                                        guild: l,
                                        channel: i,
                                        applicationId: t.application.id,
                                        analyticsLocation: k.Sbl.ACTIVITY_RPC,
                                        source: k.t4x.ACTIVITY_INVITE
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(a)).forEach(function (e) {
                                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                                      }),
                                o)
                            );
                        };
                    },
                    { contextKey: c === k.IlC.POPOUT ? o.u1M : o.z1l }
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
            let i = null === (t = (0, L.Z)()) || void 0 === t ? void 0 : t.id;
            if (null == i) throw new A.Z({ errorCode: k.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, h.R)()) n = E.Z.getWindow(k.KJ3.ACTIVITY_POPOUT);
                    else {
                        var r;
                        let e = I.Z.getLastFocusedWindowId();
                        n = null == e ? null : null === (r = (0, p.g0)(e)) || void 0 === r ? void 0 : r.renderWindow;
                    }
                    if (null == n) throw new A.Z({ errorCode: k.lTL.UNKNOWN_ERROR }, 'No valid window found');
                    let i = n.document.createElement('input');
                    (i.style.display = 'none'), (i.type = 'file'), (i.accept = 'image/jpeg, image/jpg, image/png, image/gif');
                    let l = () => {
                        (null == i.files || 0 === i.files.length) && t(),
                            n.document.body.removeEventListener('focus', l, !0),
                            setTimeout(() => {
                                n.document.body.removeChild(i);
                            }, 1000);
                    };
                    i.addEventListener('change', () => {
                        (0, S.lm)(i.files) && e(i.files[0]), l();
                    }),
                        i.addEventListener('cancel', () => {
                            l();
                        }),
                        n.document.body.addEventListener('focus', l, !0),
                        n.document.body.appendChild(i),
                        i.click();
                })(
                    async (n) => {
                        let l = await (0, f.kv)(r, i, n);
                        (0, S.lm)(l) && (0, S.lm)(l.url) && !(l instanceof d.Z) ? e({ image_url: l.url }) : t(l);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new A.Z({ errorCode: k.lTL.UNKNOWN_ERROR }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : 'Failed to upload image');
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
            if (!(0, C.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, k.udG.EMBEDDED)) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let l = (0, L.Z)();
            if (null == l) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No channel found');
            if (!P.Z.isDiscordCdnUrl(r)) throw new A.Z({ errorCode: k.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, b.Z)({
                applicationId: i,
                channelId: l.id,
                mediaUrl: r
            });
        }
    }),
    [k.Etm.SHARE_INTERACTION]: (0, l.S)(k.Etm.SHARE_INTERACTION, {
        scope: { [D.Gp.ANY]: [D.wE] },
        handler(e) {
            var t;
            let n,
                {
                    socket: r,
                    args: { command: i, preview_image: l, components: o, require_launch_channel: a, content: s }
                } = e;
            (0, Z.bu)(r.transport);
            let c = r.application.id;
            if (null == c) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No application.');
            if (!M.Cr.includes(c)) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'Unsupported application.');
            if (!(0, C.yE)(null !== (t = r.application.flags) && void 0 !== t ? t : 0, k.udG.EMBEDDED)) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let u = (0, L.Z)();
            if (null == u) throw new A.Z({ errorCode: k.lTL.INVALID_COMMAND }, 'No channel found');
            if (null !== l || null !== o || null !== s) {
                let e = [];
                void 0 !== l &&
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
                    (n = new O.ZP({
                        id: T.default.cast(T.default.fromTimestamp(Date.now())),
                        applicationId: c,
                        content: s,
                        components: o,
                        attachments: e
                    }));
            }
            return new Promise((e) => {
                let t = !1;
                (0, _.M)({
                    applicationId: c,
                    channel: u,
                    command: i,
                    requireLaunchChannel: !0 === a,
                    onShareResult: (n) => {
                        t || (t = n), e({ success: t });
                    },
                    previewMessage: n
                });
            });
        }
    })
};
