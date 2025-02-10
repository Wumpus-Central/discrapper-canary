n.d(t, { Z: () => U }), n(47120), n(411104), n(789020);
var i = n(200651);
n(192379);
var l = n(243814),
    r = n(45792),
    a = n(481060),
    s = n(278323),
    o = n(24124),
    c = n(224706),
    d = n(45114),
    u = n(479531),
    h = n(40851),
    m = n(566620),
    p = n(531826),
    g = n(596223),
    _ = n(838195),
    f = n(333861),
    E = n(928518),
    I = n(23750),
    C = n(592125),
    N = n(293273),
    v = n(885110),
    T = n(451478),
    S = n(630388),
    A = n(823379),
    Z = n(709054),
    b = n(591759),
    x = n(228488),
    L = n(996106),
    y = n(914946),
    P = n(452426),
    O = n(561205),
    R = n(600027),
    j = n(852926),
    D = n(186901),
    w = n(981631),
    k = n(701488);
async function M(e, t, n, i) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        r = N.Z.getApplicationActivity(t);
    if (null == r || null == r.secrets || !(0, y.t9)(i, r.party, r.secrets)) throw new L.Z({ errorCode: w.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let a = (0, g.Z)(r, v.Z);
    if (a) {
        let { lock: t } = (0, j.jU)(e);
        return (0, o.h7)(r, a).then(() => {
            throw (t(), new L.Z({ errorCode: w.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
        });
    }
    await s.Z.sendActivityInviteUser({
        userId: n,
        type: i,
        activity: r,
        content: l,
        location: 'In-Game Invite'
    });
}
let U = {
    [w.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [D.Gp.ANY]: [l.x.RPC, D.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i }
                } = e,
                l = t.application.id;
            if (null == l) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'No application.');
            return M(i, l, n, w.mFx.JOIN);
        }
    },
    [w.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [D.Gp.ANY]: [l.x.RPC, D.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = C.Z.getDMFromUserId(t);
            null != n && (0, d.In)(n, !0, !0);
        }
    },
    [w.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [D.Gp.ANY]: [l.x.RPC, D.lH]
        },
        validation: (e) =>
            (0, P.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([w.mFx.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: l, pid: r }
                } = e,
                a = t.application.id;
            if (null == a) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'No application.');
            return M(r, a, i, n, l);
        }
    },
    [w.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [D.Gp.ANY]: [l.x.RPC, D.lH]
        },
        validation: (e) =>
            (0, P.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([w.mFx.JOIN]),
                    user_id: e.string().required(),
                    session_id: e.string().required(),
                    channel_id: e.string().required(),
                    message_id: e.string().required()
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, session_id: l, channel_id: r, message_id: a }
                } = e,
                s = t.application.id;
            if (null == s) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'No application.');
            let o = Promise.resolve(!1);
            return (
                n === w.mFx.JOIN &&
                    (o = c.Z.join({
                        userId: i,
                        sessionId: l,
                        applicationId: s,
                        channelId: r,
                        messageId: a
                    })),
                o.then((e) => {
                    if (!e) throw new L.Z({ errorCode: w.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
                })
            );
        }
    },
    [w.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [D.Gp.ANY]: [l.x.RPC, D.lH, D.wE]
        },
        handler(e) {
            let { socket: t } = e,
                { channel: l, guild: r } = (0, R.T)(),
                s = (0, p.ZP)({
                    application: t.application,
                    channelId: l.id
                }),
                o = null != s ? E.Z.getWindow(s) : void 0;
            (null == o ? void 0 : o.closed) && (o = void 0);
            let c = null != o ? w.IlC.POPOUT : w.IlC.APP;
            (0, x.Pr)({}, null == o ? void 0 : o.document),
                (0, a.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('76236')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: r,
                                channel: l,
                                applicationId: t.application.id,
                                analyticsLocation: w.Sbl.ACTIVITY_RPC,
                                source: w.t4x.ACTIVITY_INVITE
                            });
                    },
                    { contextKey: c === w.IlC.POPOUT ? a.u1M : a.z1l }
                );
        }
    },
    [w.Etm.INITIATE_IMAGE_UPLOAD]: (0, r.S)(w.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [D.Gp.ANY]: [l.x.RPC, D.lH, D.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                i = n.application.id;
            if (null == i) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'No application.');
            let l = null === (t = (0, O.Z)()) || void 0 === t ? void 0 : t.id;
            if (null == l) throw new L.Z({ errorCode: w.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    var n;
                    let i = T.Z.getLastFocusedWindowId(),
                        l = null == i ? null : null === (n = (0, h.g0)(i)) || void 0 === n ? void 0 : n.renderWindow;
                    if (null == l) throw new L.Z({ errorCode: w.lTL.UNKNOWN_ERROR }, 'No valid window found');
                    let r = l.document.createElement('input');
                    (r.style.display = 'none'), (r.type = 'file'), (r.accept = 'image/jpeg, image/jpg, image/png, image/gif');
                    let a = () => {
                        (null == r.files || 0 === r.files.length) && t(),
                            l.document.body.removeEventListener('focus', a, !0),
                            setTimeout(() => {
                                l.document.body.removeChild(r);
                            }, 1000);
                    };
                    r.addEventListener('change', () => {
                        (0, A.lm)(r.files) && e(r.files[0]), a();
                    }),
                        r.addEventListener('cancel', () => {
                            a();
                        }),
                        l.document.body.addEventListener('focus', a, !0),
                        l.document.body.appendChild(r),
                        r.click();
                })(
                    async (n) => {
                        let r = await (0, m.kv)(i, l, n);
                        (0, A.lm)(r) && (0, A.lm)(r.url) && !(r instanceof u.Z) ? e({ image_url: r.url }) : t(r);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new L.Z({ errorCode: w.lTL.UNKNOWN_ERROR }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : 'Failed to upload image');
            });
        }
    }),
    [w.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, r.S)(w.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [D.Gp.ANY]: [D.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: i }
            } = e;
            (0, y.bu)(n.transport);
            let l = n.application.id;
            if (null == l) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, S.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, w.udG.EMBEDDED)) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let r = (0, O.Z)();
            if (null == r) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'No channel found');
            if (!b.Z.isDiscordCdnUrl(i)) throw new L.Z({ errorCode: w.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, _.Z)({
                applicationId: l,
                channelId: r.id,
                mediaUrl: i
            });
        }
    }),
    [w.Etm.SHARE_INTERACTION]: (0, r.S)(w.Etm.SHARE_INTERACTION, {
        scope: { [D.Gp.ANY]: [D.wE] },
        handler(e) {
            var t;
            let n,
                {
                    socket: i,
                    args: { command: l, preview_image: r, components: a, require_launch_channel: s, content: o }
                } = e;
            (0, y.bu)(i.transport);
            let c = i.application.id;
            if (null == c) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'No application.');
            if (!k.Cr.includes(c)) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'Unsupported application.');
            if (!(0, S.yE)(null !== (t = i.application.flags) && void 0 !== t ? t : 0, w.udG.EMBEDDED)) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let d = (0, O.Z)();
            if (null == d) throw new L.Z({ errorCode: w.lTL.INVALID_COMMAND }, 'No channel found');
            if (null !== r || null !== a || null !== o) {
                let e = [];
                void 0 !== r &&
                    (e = [
                        {
                            id: Z.default.cast(Z.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: r.url,
                            filename: 'preview',
                            url: r.url,
                            height: r.height,
                            width: r.width
                        }
                    ]),
                    (n = new I.ZP({
                        id: Z.default.cast(Z.default.fromTimestamp(Date.now())),
                        applicationId: c,
                        content: o,
                        components: a,
                        attachments: e
                    }));
            }
            return new Promise((e) => {
                let t = !1;
                (0, f.M)({
                    applicationId: c,
                    channel: d,
                    command: l,
                    requireLaunchChannel: !0 === s,
                    onShareResult: (n) => {
                        t || (t = n), e({ success: t });
                    },
                    previewMessage: n
                });
            });
        }
    })
};
