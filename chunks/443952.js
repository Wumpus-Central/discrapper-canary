n.d(t, { Z: () => V }), n(388685), n(415506), n(997841);
var r = n(200651);
n(192379);
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
    E = n(928518),
    O = n(23750),
    y = n(592125),
    I = n(293273),
    v = n(158776),
    C = n(885110),
    S = n(451478),
    N = n(630388),
    T = n(823379),
    P = n(709054),
    j = n(591759),
    A = n(228488),
    Z = n(996106),
    x = n(914946),
    w = n(452426),
    L = n(561205),
    R = n(600027),
    D = n(852926),
    k = n(186901),
    M = n(981631),
    U = n(701488);
async function G(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        l = I.Z.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, x.t9)(r, l.party, l.secrets)) throw new Z.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let a = (0, m.Z)(l, C.Z);
    if (a) {
        let { lock: t } = (0, D.jU)(e);
        return (0, s.h7)(l, a).then(() => {
            throw (t(), new Z.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
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
let V = {
    [M.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [k.Gp.ANY]: [i.x.RPC, k.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: r }
                } = e,
                i = t.application.id;
            if (null == i) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            return G(r, i, n, M.mFx.JOIN);
        }
    },
    [M.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [k.Gp.ANY]: [i.x.RPC, k.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = y.Z.getDMFromUserId(t);
            null != n && (0, u.In)(n, !0, !0);
        }
    },
    [M.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [k.Gp.ANY]: [i.x.RPC, k.lH]
        },
        validation: (e) =>
            (0, w.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([M.mFx.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: r, content: i, pid: l }
                } = e,
                a = t.application.id;
            if (null == a) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            return G(l, a, r, n, i);
        }
    },
    [M.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [k.Gp.ANY]: [i.x.RPC, k.lH]
        },
        validation: (e) =>
            (0, w.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([M.mFx.JOIN]),
                    user_id: e.string().required(),
                    session_id: e.string().required(),
                    channel_id: e.string().required(),
                    message_id: e.string().required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: r, session_id: i, channel_id: l, message_id: a }
                } = e,
                o = t.application.id;
            if (null == o) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let s = v.Z.findActivity(r, (e) => e.application_id === o && e.session_id === i, null, !0),
                u = Promise.resolve(!1);
            return (
                n === M.mFx.JOIN &&
                    (u = c.Z.join({
                        userId: r,
                        sessionId: i,
                        applicationId: o,
                        channelId: l,
                        messageId: a,
                        activity: null != s ? s : void 0
                    })),
                u.then((e) => {
                    if (!e) throw new Z.Z({ errorCode: M.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
                })
            );
        }
    },
    [M.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [k.Gp.ANY]: [i.x.RPC, k.lH, k.wE]
        },
        handler(e) {
            let { socket: t } = e,
                i = t.application;
            if (null == i.id) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let { channel: l, guild: o, contextless: c } = (0, R.T)(i),
                u = (0, g.ZP)({
                    application: t.application,
                    channelId: null == l ? void 0 : l.id
                }),
                d = null != u ? E.Z.getWindow(u) : void 0;
            (null == d ? void 0 : d.closed) && (d = void 0);
            let p = null != d ? M.IlC.POPOUT : M.IlC.APP;
            if (((0, A.Pr)({}, null == d ? void 0 : d.document), c)) {
                let e = I.Z.getApplicationActivity(i.id);
                if (null != e) (0, s.h7)(e, !1, p);
                else throw new Z.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity was set using setActivity.');
            } else
                (0, a.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                        return (t) => {
                            var n, a;
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
                                (a = a =
                                    {
                                        guild: o,
                                        channel: l,
                                        applicationId: i.id,
                                        analyticsLocation: M.Sbl.ACTIVITY_RPC,
                                        source: M.t4x.ACTIVITY_INVITE
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
                    { contextKey: p === M.IlC.POPOUT ? a.u1M : a.z1l }
                );
        }
    },
    [M.Etm.INITIATE_IMAGE_UPLOAD]: (0, l.S)(M.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [k.Gp.ANY]: [i.x.RPC, k.lH, k.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                r = n.application.id;
            if (null == r) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let i = null == (t = (0, L.Z)()) ? void 0 : t.id;
            if (null == i) throw new Z.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, h.R)()) n = E.Z.getWindow(M.KJ3.ACTIVITY_POPOUT);
                    else {
                        var r;
                        let e = S.Z.getLastFocusedWindowId();
                        n = null == e ? null : null == (r = (0, p.g0)(e)) ? void 0 : r.renderWindow;
                    }
                    if (null == n) throw new Z.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, 'No valid window found');
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
                        (0, T.lm)(i.files) && e(i.files[0]), l();
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
                        (0, T.lm)(l) && (0, T.lm)(l.url) && !(l instanceof d.Z) ? e({ image_url: l.url }) : t(l);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new Z.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, null != (t = null == e ? void 0 : e.message) ? t : 'Failed to upload image');
            });
        }
    }),
    [M.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, l.S)(M.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [k.Gp.ANY]: [k.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: r }
            } = e;
            (0, x.bu)(n.transport);
            let i = n.application.id;
            if (null == i) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, N.yE)(null != (t = n.application.flags) ? t : 0, M.udG.EMBEDDED)) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let l = (0, L.Z)();
            if (null == l) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No channel found');
            if (!j.Z.isDiscordCdnUrl(r)) throw new Z.Z({ errorCode: M.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, b.Z)({
                applicationId: i,
                channelId: l.id,
                mediaUrl: r
            });
        }
    }),
    [M.Etm.SHARE_INTERACTION]: (0, l.S)(M.Etm.SHARE_INTERACTION, {
        scope: {
            [k.Gp.ANY]: [k.wE, k.lH]
        },
        handler(e) {
            var t;
            let n,
                {
                    socket: r,
                    args: { command: i, preview_image: l, components: o, require_launch_channel: s, content: c, pid: u }
                } = e,
                d = r.application.id;
            if (null == d) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            if (!U.Cr.includes(d)) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'Unsupported application.');
            if (!(0, N.yE)(null != (t = r.application.flags) ? t : 0, M.udG.EMBEDDED)) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let p = (0, L.Z)();
            if (null == p && s) throw new Z.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No channel found');
            if (null !== l || null !== o || null !== c) {
                let e = [];
                void 0 !== l &&
                    (e = [
                        {
                            id: P.default.cast(P.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: l.url,
                            filename: 'preview',
                            url: l.url,
                            height: l.height,
                            width: l.width
                        }
                    ]),
                    (n = new O.ZP({
                        id: P.default.cast(P.default.fromTimestamp(Date.now())),
                        applicationId: d,
                        content: c,
                        components: o,
                        attachments: e
                    }));
            }
            return new Promise((e) => {
                let t = !1,
                    r = (0, D.jU)(u),
                    l = a.z1l;
                (E.Z.getWindowOpen(M.KJ3.ACTIVITY_POPOUT) || r.context === M.IlC.POPOUT) && (l = a.u1M),
                    (0, _.M)({
                        applicationId: d,
                        channel: p,
                        command: i,
                        requireLaunchChannel: !0 === s,
                        onShareResult: (n) => {
                            t || (t = n), r.lock(), e({ success: t });
                        },
                        previewMessage: n,
                        contextKey: l
                    });
            });
        }
    })
};
