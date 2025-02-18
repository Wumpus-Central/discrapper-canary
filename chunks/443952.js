n.d(t, { Z: () => G }), n(47120), n(411104), n(789020);
var i = n(200651);
n(192379);
var l = n(243814),
    r = n(45792),
    a = n(481060),
    s = n(278323),
    o = n(24124),
    d = n(224706),
    c = n(45114),
    u = n(479531),
    h = n(40851),
    m = n(636449),
    p = n(566620),
    g = n(531826),
    _ = n(596223),
    f = n(838195),
    E = n(333861),
    I = n(928518),
    C = n(23750),
    N = n(592125),
    v = n(293273),
    T = n(885110),
    S = n(451478),
    A = n(630388),
    Z = n(823379),
    x = n(709054),
    b = n(591759),
    L = n(228488),
    y = n(996106),
    O = n(914946),
    P = n(452426),
    R = n(561205),
    j = n(600027),
    D = n(852926),
    w = n(186901),
    M = n(981631),
    k = n(701488);
async function U(e, t, n, i) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        r = v.Z.getApplicationActivity(t);
    if (null == r || null == r.secrets || !(0, O.t9)(i, r.party, r.secrets)) throw new y.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let a = (0, _.Z)(r, T.Z);
    if (a) {
        let { lock: t } = (0, D.jU)(e);
        return (0, o.h7)(r, a).then(() => {
            throw (t(), new y.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
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
let G = {
    [M.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [w.Gp.ANY]: [l.x.RPC, w.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i }
                } = e,
                l = t.application.id;
            if (null == l) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            return U(i, l, n, M.mFx.JOIN);
        }
    },
    [M.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [w.Gp.ANY]: [l.x.RPC, w.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = N.Z.getDMFromUserId(t);
            null != n && (0, c.In)(n, !0, !0);
        }
    },
    [M.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [w.Gp.ANY]: [l.x.RPC, w.lH]
        },
        validation: (e) =>
            (0, P.Z)(e)
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
                    args: { type: n, user_id: i, content: l, pid: r }
                } = e,
                a = t.application.id;
            if (null == a) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            return U(r, a, i, n, l);
        }
    },
    [M.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [w.Gp.ANY]: [l.x.RPC, w.lH]
        },
        validation: (e) =>
            (0, P.Z)(e)
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
                    args: { type: n, user_id: i, session_id: l, channel_id: r, message_id: a }
                } = e,
                s = t.application.id;
            if (null == s) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let o = Promise.resolve(!1);
            return (
                n === M.mFx.JOIN &&
                    (o = d.Z.join({
                        userId: i,
                        sessionId: l,
                        applicationId: s,
                        channelId: r,
                        messageId: a
                    })),
                o.then((e) => {
                    if (!e) throw new y.Z({ errorCode: M.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
                })
            );
        }
    },
    [M.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [w.Gp.ANY]: [l.x.RPC, w.lH, w.wE]
        },
        handler(e) {
            let { socket: t } = e,
                { channel: l, guild: r } = (0, j.T)(),
                s = (0, g.ZP)({
                    application: t.application,
                    channelId: l.id
                }),
                o = null != s ? I.Z.getWindow(s) : void 0;
            (null == o ? void 0 : o.closed) && (o = void 0);
            let d = null != o ? M.IlC.POPOUT : M.IlC.APP;
            (0, L.Pr)({}, null == o ? void 0 : o.document),
                (0, a.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('25586')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: r,
                                channel: l,
                                applicationId: t.application.id,
                                analyticsLocation: M.Sbl.ACTIVITY_RPC,
                                source: M.t4x.ACTIVITY_INVITE
                            });
                    },
                    { contextKey: d === M.IlC.POPOUT ? a.u1M : a.z1l }
                );
        }
    },
    [M.Etm.INITIATE_IMAGE_UPLOAD]: (0, r.S)(M.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [w.Gp.ANY]: [l.x.RPC, w.lH, w.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                i = n.application.id;
            if (null == i) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let l = null === (t = (0, R.Z)()) || void 0 === t ? void 0 : t.id;
            if (null == l) throw new y.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, m.R)()) n = I.Z.getWindow(M.KJ3.ACTIVITY_POPOUT);
                    else {
                        var i;
                        let e = S.Z.getLastFocusedWindowId();
                        n = null == e ? null : null === (i = (0, h.g0)(e)) || void 0 === i ? void 0 : i.renderWindow;
                    }
                    if (null == n) throw new y.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, 'No valid window found');
                    let l = n.document.createElement('input');
                    (l.style.display = 'none'), (l.type = 'file'), (l.accept = 'image/jpeg, image/jpg, image/png, image/gif');
                    let r = () => {
                        (null == l.files || 0 === l.files.length) && t(),
                            n.document.body.removeEventListener('focus', r, !0),
                            setTimeout(() => {
                                n.document.body.removeChild(l);
                            }, 1000);
                    };
                    l.addEventListener('change', () => {
                        (0, Z.lm)(l.files) && e(l.files[0]), r();
                    }),
                        l.addEventListener('cancel', () => {
                            r();
                        }),
                        n.document.body.addEventListener('focus', r, !0),
                        n.document.body.appendChild(l),
                        l.click();
                })(
                    async (n) => {
                        let r = await (0, p.kv)(i, l, n);
                        (0, Z.lm)(r) && (0, Z.lm)(r.url) && !(r instanceof u.Z) ? e({ image_url: r.url }) : t(r);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new y.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : 'Failed to upload image');
            });
        }
    }),
    [M.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, r.S)(M.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [w.Gp.ANY]: [w.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: i }
            } = e;
            (0, O.bu)(n.transport);
            let l = n.application.id;
            if (null == l) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, A.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, M.udG.EMBEDDED)) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let r = (0, R.Z)();
            if (null == r) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No channel found');
            if (!b.Z.isDiscordCdnUrl(i)) throw new y.Z({ errorCode: M.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, f.Z)({
                applicationId: l,
                channelId: r.id,
                mediaUrl: i
            });
        }
    }),
    [M.Etm.SHARE_INTERACTION]: (0, r.S)(M.Etm.SHARE_INTERACTION, {
        scope: { [w.Gp.ANY]: [w.wE] },
        handler(e) {
            var t;
            let n,
                {
                    socket: i,
                    args: { command: l, preview_image: r, components: a, require_launch_channel: s, content: o }
                } = e;
            (0, O.bu)(i.transport);
            let d = i.application.id;
            if (null == d) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            if (!k.Cr.includes(d)) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'Unsupported application.');
            if (!(0, A.yE)(null !== (t = i.application.flags) && void 0 !== t ? t : 0, M.udG.EMBEDDED)) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let c = (0, R.Z)();
            if (null == c) throw new y.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No channel found');
            if (null !== r || null !== a || null !== o) {
                let e = [];
                void 0 !== r &&
                    (e = [
                        {
                            id: x.default.cast(x.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: r.url,
                            filename: 'preview',
                            url: r.url,
                            height: r.height,
                            width: r.width
                        }
                    ]),
                    (n = new C.ZP({
                        id: x.default.cast(x.default.fromTimestamp(Date.now())),
                        applicationId: d,
                        content: o,
                        components: a,
                        attachments: e
                    }));
            }
            return new Promise((e) => {
                let t = !1;
                (0, E.M)({
                    applicationId: d,
                    channel: c,
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
