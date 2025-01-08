n(47120), n(411104), n(789020);
var i = n(200651);
n(192379);
var r = n(243814),
    l = n(45792),
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
    f = n(838195),
    _ = n(333861),
    E = n(928518),
    I = n(23750),
    C = n(592125),
    N = n(293273),
    v = n(885110),
    S = n(451478),
    T = n(630388),
    b = n(823379),
    A = n(709054),
    Z = n(591759),
    x = n(228488),
    L = n(996106),
    P = n(914946),
    O = n(452426),
    y = n(561205),
    R = n(600027),
    j = n(852926),
    D = n(186901),
    M = n(981631),
    w = n(701488);
async function k(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '',
        l = N.Z.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, P.t9)(i, l.party, l.secrets)) throw new L.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure an activity includes a party and appropriate secret.');
    let a = (0, g.Z)(l, v.Z);
    if (a) {
        let { lock: t } = (0, j.jU)(e);
        return (0, o.h7)(l, a).then(() => {
            throw (t(), new L.Z({ errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY }, 'No eligible activity for application. Ensure user does have have privacy enabled.'));
        });
    }
    await s.Z.sendActivityInviteUser({
        userId: n,
        type: i,
        activity: l,
        content: r,
        location: 'In-Game Invite'
    });
}
t.Z = {
    [M.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [D.Gp.ANY]: [r.x.RPC, D.lH]
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i }
                } = e,
                r = t.application.id;
            if (null == r) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            return k(i, r, n, M.mFx.JOIN);
        }
    },
    [M.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [D.Gp.ANY]: [r.x.RPC, D.lH]
        },
        handler(e) {
            let {
                    args: { user_id: t }
                } = e,
                n = C.Z.getDMFromUserId(t);
            null != n && (0, d.In)(n, !0, !0);
        }
    },
    [M.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [D.Gp.ANY]: [r.x.RPC, D.lH]
        },
        validation: (e) =>
            (0, O.Z)(e)
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
                    args: { type: n, user_id: i, content: r, pid: l }
                } = e,
                a = t.application.id;
            if (null == a) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            return k(l, a, i, n, r);
        }
    },
    [M.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [D.Gp.ANY]: [r.x.RPC, D.lH]
        },
        validation: (e) =>
            (0, O.Z)(e)
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
                    args: { type: n, user_id: i, session_id: r, channel_id: l, message_id: a }
                } = e,
                s = t.application.id;
            if (null == s) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let o = Promise.resolve(!1);
            if (n === M.mFx.JOIN)
                o = c.Z.join({
                    userId: i,
                    sessionId: r,
                    applicationId: s,
                    channelId: l,
                    messageId: a
                });
            return o.then((e) => {
                if (!e) throw new L.Z({ errorCode: M.lTL.INVALID_INVITE }, 'Invite is expired or invalid.');
            });
        }
    },
    [M.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [D.Gp.ANY]: [r.x.RPC, D.lH, D.wE]
        },
        handler(e) {
            let { socket: t } = e,
                { channel: r, guild: l } = (0, R.T)(),
                s = (0, p.ZP)({
                    application: t.application,
                    channelId: r.id
                }),
                o = null != s ? E.Z.getWindow(s) : void 0;
            (null == o ? void 0 : o.closed) && (o = void 0);
            let c = null != o ? M.IlC.POPOUT : M.IlC.APP;
            (0, x.Pr)({}, null == o ? void 0 : o.document),
                (0, a.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: l,
                                channel: r,
                                applicationId: t.application.id,
                                analyticsLocation: M.Sbl.ACTIVITY_RPC,
                                source: M.t4x.ACTIVITY_INVITE
                            });
                    },
                    { contextKey: c === M.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT }
                );
        }
    },
    [M.Etm.INITIATE_IMAGE_UPLOAD]: (0, l.S)(M.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [D.Gp.ANY]: [r.x.RPC, D.lH, D.wE]
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                i = n.application.id;
            if (null == i) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            let r = null === (t = (0, y.Z)()) || void 0 === t ? void 0 : t.id;
            if (null == r) throw new L.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, 'Unable to find selected channel');
            return new Promise((e, t) => {
                !(function (e, t) {
                    var n;
                    let i = S.Z.getLastFocusedWindowId(),
                        r = null == i ? null : null === (n = (0, h.g0)(i)) || void 0 === n ? void 0 : n.renderWindow;
                    if (null == r) throw new L.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, 'No valid window found');
                    let l = r.document.createElement('input');
                    (l.style.display = 'none'), (l.type = 'file'), (l.accept = 'image/jpeg, image/jpg, image/png, image/gif');
                    let a = () => {
                        (null == l.files || 0 === l.files.length) && t(),
                            r.document.body.removeEventListener('focus', a, !0),
                            setTimeout(() => {
                                r.document.body.removeChild(l);
                            }, 1000);
                    };
                    l.addEventListener('change', () => {
                        (0, b.lm)(l.files) && e(l.files[0]), a();
                    }),
                        l.addEventListener('cancel', () => {
                            a();
                        }),
                        r.document.body.addEventListener('focus', a, !0),
                        r.document.body.appendChild(l),
                        l.click();
                })(
                    async (n) => {
                        let l = await (0, m.kv)(i, r, n);
                        (0, b.lm)(l) && (0, b.lm)(l.url) && !(l instanceof u.Z) ? e({ image_url: l.url }) : t(l);
                    },
                    () => t(Error('Upload canceled'))
                );
            }).catch((e) => {
                var t;
                throw new L.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : 'Failed to upload image');
            });
        }
    }),
    [M.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, l.S)(M.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [D.Gp.ANY]: [D.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: i }
            } = e;
            (0, P.bu)(n.transport);
            let r = n.application.id;
            if (null == r) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            if (!(0, T.yE)(null !== (t = n.application.flags) && void 0 !== t ? t : 0, M.udG.EMBEDDED)) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let l = (0, y.Z)();
            if (null == l) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No channel found');
            if (!Z.Z.isDiscordCdnUrl(i)) throw new L.Z({ errorCode: M.lTL.INVALID_PAYLOAD }, 'mediaUrl must be a Discord CDN url');
            (0, f.Z)({
                applicationId: r,
                channelId: l.id,
                mediaUrl: i
            });
        }
    }),
    [M.Etm.SHARE_INTERACTION]: (0, l.S)(M.Etm.SHARE_INTERACTION, {
        scope: { [D.Gp.ANY]: [D.wE] },
        handler(e) {
            var t;
            let n,
                {
                    socket: i,
                    args: { command: r, preview_image: l, components: a, require_launch_channel: s, content: o }
                } = e;
            (0, P.bu)(i.transport);
            let c = i.application.id;
            if (null == c) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No application.');
            if (!w.Cr.includes(c)) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'Unsupported application.');
            if (!(0, T.yE)(null !== (t = i.application.flags) && void 0 !== t ? t : 0, M.udG.EMBEDDED)) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'This application cannot access this API');
            let d = (0, y.Z)();
            if (null == d) throw new L.Z({ errorCode: M.lTL.INVALID_COMMAND }, 'No channel found');
            if (null !== l || null !== a || null !== o) {
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
                    (n = new I.ZP({
                        id: A.default.cast(A.default.fromTimestamp(Date.now())),
                        applicationId: c,
                        content: o,
                        components: a,
                        attachments: e
                    }));
            }
            return new Promise((e) => {
                let t = !1;
                (0, _.M)({
                    applicationId: c,
                    channel: d,
                    command: r,
                    requireLaunchChannel: !0 === s,
                    onShareResult: (n) => {
                        !t && (t = n), e({ success: t });
                    },
                    previewMessage: n
                });
            });
        }
    })
};
