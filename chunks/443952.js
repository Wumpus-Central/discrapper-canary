n.d(t, { Z: () => B }), n(47120), n(411104), n(789020);
var r = n(200651);
n(192379);
var i = n(252258),
    l = n(243814),
    a = n(45792),
    o = n(481060),
    s = n(278323),
    c = n(24124),
    u = n(224706),
    d = n(45114),
    p = n(479531),
    h = n(40851),
    f = n(636449),
    g = n(566620),
    m = n(317381),
    b = n(531826),
    _ = n(596223),
    E = n(838195),
    O = n(333861),
    N = n(928518),
    y = n(23750),
    I = n(592125),
    v = n(293273),
    C = n(158776),
    S = n(885110),
    T = n(451478),
    P = n(630388),
    j = n(823379),
    A = n(709054),
    Z = n(591759),
    x = n(228488),
    L = n(996106),
    w = n(914946),
    R = n(452426),
    D = n(561205),
    k = n(600027),
    M = n(852926),
    U = n(186901),
    G = n(981631),
    W = n(701488);
async function V(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        l = v.Z.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, w.t9)(r, l.party, l.secrets)) throw new L.Z({ errorCode: G.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let a = (0, _.Z)(l, S.Z);
    if (a) {
        let { lock: t } = (0, M.jU)(e);
        return (0, c.h7)(l, a).then(() => {
            throw (t(), new L.Z({ errorCode: G.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
        });
    }
    await s.Z.sendActivityInviteUser({
        userId: n,
        type: r,
        activity: l,
        content: i,
        location: 'In-Game Invite'
    });
}
let B = {
    [G.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [U.Gp.ANY]: [l.x.RPC, U.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: r }
                } = e,
                i = t.application.id;
            if (null == i) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'No application.');
            return V(r, i, n, G.mFx.JOIN);
        }
    },
    [G.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [U.Gp.ANY]: [l.x.RPC, U.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = I.Z.getDMFromUserId(t);
            null != n && (0, d.In)(n, !0, !0);
        }
    },
    [G.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [U.Gp.ANY]: [l.x.RPC, U.lH]
        },
        validation: (e) =>
            (0, R.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([G.mFx.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: r, content: i, pid: l }
                } = e,
                a = t.application.id;
            if (null == a) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'No application.');
            return V(l, a, r, n, i);
        }
    },
    [G.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [U.Gp.ANY]: [l.x.RPC, U.lH]
        },
        validation: (e) =>
            (0, R.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([G.mFx.JOIN]),
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
            if (null == o) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'No application.');
            let s = C.Z.findActivity(r, (e) => e.application_id === o && e.session_id === i, null, !0),
                c = Promise.resolve(!1);
            return (
                n === G.mFx.JOIN &&
                    (c = u.Z.join({
                        userId: r,
                        sessionId: i,
                        applicationId: o,
                        channelId: l,
                        messageId: a,
                        activity: null != s ? s : void 0
                    })),
                c.then((e) => {
                    if (!e) throw new L.Z({ errorCode: G.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
                })
            );
        }
    },
    [G.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [U.Gp.ANY]: [l.x.RPC, U.lH, U.wE]
        },
        handler(e) {
            let { socket: t } = e,
                { channel: i, guild: l } = (0, k.T)(),
                a = (0, b.ZP)({
                    application: t.application,
                    channelId: i.id
                }),
                s = null != a ? N.Z.getWindow(a) : void 0;
            (null == s ? void 0 : s.closed) && (s = void 0);
            let c = null != s ? G.IlC.POPOUT : G.IlC.APP;
            (0, x.Pr)({}, null == s ? void 0 : s.document),
                (0, o.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                        return (n) => {
                            var a, o;
                            return (0, r.jsx)(
                                e,
                                ((a = (function (e) {
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
                                (o = o =
                                    {
                                        guild: l,
                                        channel: i,
                                        applicationId: t.application.id,
                                        analyticsLocation: G.Sbl.ACTIVITY_RPC,
                                        source: G.t4x.ACTIVITY_INVITE
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(o)).forEach(function (e) {
                                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                                      }),
                                a)
                            );
                        };
                    },
                    { contextKey: c === G.IlC.POPOUT ? o.u1M : o.z1l }
                );
        }
    },
    [G.Etm.INITIATE_IMAGE_UPLOAD]: (0, a.S)(G.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [U.Gp.ANY]: [l.x.RPC, U.lH, U.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                r = n.application.id;
            if (null == r) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'No application.');
            let l = null == (t = (0, D.Z)()) ? void 0 : t.id;
            if (null == l) throw new L.Z({ errorCode: G.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n,
                        r = m.ZP.getCurrentEmbeddedActivity();
                    if ((0, f.R)({ isContextless: (null == r ? void 0 : r.location.kind) === i.E.CONTEXTLESS })) n = N.Z.getWindow(G.KJ3.ACTIVITY_POPOUT);
                    else {
                        var l;
                        let e = T.Z.getLastFocusedWindowId();
                        n = null == e ? null : null == (l = (0, h.g0)(e)) ? void 0 : l.renderWindow;
                    }
                    if (null == n) throw new L.Z({ errorCode: G.lTL.UNKNOWN_ERROR }, 'No valid window found');
                    let a = n.document.createElement('input');
                    (a.style.display = 'none'), (a.type = 'file'), (a.accept = 'image/jpeg, image/jpg, image/png, image/gif');
                    let o = () => {
                        (null == a.files || 0 === a.files.length) && t(),
                            n.document.body.removeEventListener('focus', o, !0),
                            setTimeout(() => {
                                n.document.body.removeChild(a);
                            }, 1000);
                    };
                    a.addEventListener('change', () => {
                        (0, j.lm)(a.files) && e(a.files[0]), o();
                    }),
                        a.addEventListener('cancel', () => {
                            o();
                        }),
                        n.document.body.addEventListener('focus', o, !0),
                        n.document.body.appendChild(a),
                        a.click();
                })(
                    async (n) => {
                        let i = await (0, g.kv)(r, l, n);
                        (0, j.lm)(i) && (0, j.lm)(i.url) && !(i instanceof p.Z) ? e({ image_url: i.url }) : t(i);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new L.Z({ errorCode: G.lTL.UNKNOWN_ERROR }, null != (t = null == e ? void 0 : e.message) ? t : 'Failed to upload image');
            });
        }
    }),
    [G.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, a.S)(G.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [U.Gp.ANY]: [U.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: r }
            } = e;
            (0, w.bu)(n.transport);
            let i = n.application.id;
            if (null == i) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, P.yE)(null != (t = n.application.flags) ? t : 0, G.udG.EMBEDDED)) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let l = (0, D.Z)();
            if (null == l) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'No channel found');
            if (!Z.Z.isDiscordCdnUrl(r)) throw new L.Z({ errorCode: G.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, E.Z)({
                applicationId: i,
                channelId: l.id,
                mediaUrl: r
            });
        }
    }),
    [G.Etm.SHARE_INTERACTION]: (0, a.S)(G.Etm.SHARE_INTERACTION, {
        scope: { [U.Gp.ANY]: [U.wE] },
        handler(e) {
            var t;
            let n,
                {
                    socket: r,
                    args: { command: i, preview_image: l, components: a, require_launch_channel: o, content: s }
                } = e;
            (0, w.bu)(r.transport);
            let c = r.application.id;
            if (null == c) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'No application.');
            if (!W.Cr.includes(c)) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'Unsupported application.');
            if (!(0, P.yE)(null != (t = r.application.flags) ? t : 0, G.udG.EMBEDDED)) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let u = (0, D.Z)();
            if (null == u) throw new L.Z({ errorCode: G.lTL.INVALID_COMMAND }, 'No channel found');
            if (null !== l || null !== a || null !== s) {
                let e = [];
                void 0 !== l &&
                    (e = [
                        {
                            id: A.default.cast(A.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: l.url,
                            filename: 'preview',
                            url: l.url,
                            height: l.height,
                            width: l.width
                        }
                    ]),
                    (n = new y.ZP({
                        id: A.default.cast(A.default.fromTimestamp(Date.now())),
                        applicationId: c,
                        content: s,
                        components: a,
                        attachments: e
                    }));
            }
            return new Promise((e) => {
                let t = !1;
                (0, O.M)({
                    applicationId: c,
                    channel: u,
                    command: i,
                    requireLaunchChannel: !0 === o,
                    onShareResult: (n) => {
                        t || (t = n), e({ success: t });
                    },
                    previewMessage: n
                });
            });
        }
    })
};
