n.d(t, { A: () => V }), n(938796);
var i = n(627968);
n(64700);
var r = n(179771),
    a = n(665260),
    l = n(420970),
    s = n(397927),
    o = n(308368),
    d = n(298990),
    c = n(544420),
    u = n(334738),
    A = n(181658),
    h = n(646865),
    _ = n(795816),
    m = n(851907),
    p = n(980142),
    g = n(572946),
    E = n(293588),
    f = n(267102),
    I = n(869146),
    C = n(383233),
    N = n(734057),
    T = n(375492),
    S = n(461213),
    x = n(531685),
    v = n(403362),
    b = n(661191),
    y = n(998218),
    L = n(475815),
    O = n(636401),
    R = n(90924),
    P = n(629471),
    j = n(569475),
    D = n(954843),
    w = n(546983),
    M = n(613057),
    U = n(652215),
    G = n(360469);
async function k(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        a = T.A.getApplicationActivity(t);
    if (null == a || null == a.secrets || !(0, R.px)(i, a.party, a.secrets))
        throw new O.A(
            { errorCode: U.Lw6.NO_ELIGIBLE_ACTIVITY },
            "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
        );
    let l = (0, p.A)(a, S.A);
    if (l) {
        let { lock: t } = (0, w.d5)(e);
        return (0, d.qf)(a, l).then(() => {
            throw (
                (t(),
                new O.A(
                    { errorCode: U.Lw6.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure user does have have privacy enabled.",
                ))
            );
        });
    }
    await o.A.sendActivityInviteUser({ userId: n, type: i, activity: a, content: r, location: "In-Game Invite" });
}
let V = {
    [U.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: { [M.sm.ANY]: [r.F.RPC, M.hj] },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i },
                } = e,
                r = t.application.id;
            if (null == r) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "No application.");
            return k(i, r, n, U.xL.JOIN);
        },
    },
    [U.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: { [M.sm.ANY]: [r.F.RPC, M.hj] },
        handler(e) {
            let {
                    args: { user_id: t },
                } = e,
                n = N.A.getDMFromUserId(t);
            null != n &&
                (0, u.ack)(
                    n,
                    {
                        section: U.JJy.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                        object: U.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                        objectType: U.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        },
    },
    [U.e$_.ACTIVITY_INVITE_USER]: {
        scope: { [M.sm.ANY]: [r.F.RPC, M.hj] },
        validation: (e) =>
            (0, P.A)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([U.xL.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: r, pid: a },
                } = e,
                l = t.application.id;
            if (null == l) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "No application.");
            return k(a, l, i, n, r);
        },
    },
    [U.e$_.ACCEPT_ACTIVITY_INVITE]: {
        scope: { [M.sm.ANY]: [r.F.RPC, M.hj] },
        validation: (e) =>
            (0, P.A)(e)
                .required()
                .keys({
                    type: e.number().required().valid([U.xL.JOIN]),
                    user_id: e.string().required(),
                    session_id: e.string().required(),
                    channel_id: e.string().required(),
                    message_id: e.string().required(),
                    application_id: e.string().optional(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, session_id: r, channel_id: a, message_id: l, application_id: s },
                } = e,
                o = t.transport === M.z4.IPC ? (s ?? t.application.id) : t.application.id;
            if (null == o) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "No application.");
            let d = Promise.resolve(!1);
            return (
                n === U.xL.JOIN &&
                    (d = c.A.join({ userId: i, sessionId: r, applicationId: o, channelId: a, messageId: l })),
                d.then((e) => {
                    if (!e) throw new O.A({ errorCode: U.Lw6.INVALID_INVITE }, "Invite is expired or invalid.");
                })
            );
        },
    },
    [U.e$_.OPEN_INVITE_DIALOG]: {
        scope: { [M.sm.ANY]: [r.F.RPC, M.hj, M.VH] },
        handler(e) {
            let { socket: t } = e,
                r = t.application;
            if (null == r.id) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "No application.");
            let { channel: a, guild: l, frame: o } = (0, D.W)(),
                c = (0, m.Ay)({ application: t.application, channelId: a?.id }),
                u = null != c ? I.A.getWindow(c) : void 0;
            u?.closed && (u = void 0);
            let A = null != u ? U.BRT.POPOUT : U.BRT.APP;
            if (((0, L.sP)({}, u?.document), null != o)) {
                if (o.applicationId !== r.id)
                    throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "Application is not currently mounted.");
                let e = T.A.getApplicationActivity(r.id);
                if (null != e) (0, d.qf)(e, !1, A);
                else
                    throw new O.A(
                        { errorCode: U.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity was set using setActivity.",
                    );
            } else
                (0, s.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("43600"), n.e("42821")]).then(n.bind(n, 234355));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guild: l,
                                channel: a,
                                applicationId: r.id,
                                analyticsLocation: U.ThZ.ACTIVITY_RPC,
                                source: U.PE1.ACTIVITY_INVITE,
                            });
                    },
                    { contextKey: A === U.BRT.POPOUT ? s.KX8 : s.SYi },
                );
        },
    },
    [U.e$_.INITIATE_IMAGE_UPLOAD]: (0, l.T)(U.e$_.INITIATE_IMAGE_UPLOAD, {
        scope: { [M.sm.ANY]: [r.F.RPC, M.hj, M.VH] },
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "No application.");
            let i = (0, j.A)()?.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, h.f)()) n = I.A.getWindow(U.MLl.ACTIVITY_POPOUT);
                    else {
                        let e = x.A.getLastFocusedWindowId();
                        n = null == e ? null : (0, f.Iy)(e)?.renderWindow;
                    }
                    if (null == n) throw new O.A({ errorCode: U.Lw6.UNKNOWN_ERROR }, "No valid window found");
                    let i = n.document.createElement("input");
                    (i.style.display = "none"),
                        (i.type = "file"),
                        (i.accept = "image/jpeg, image/jpg, image/png, image/gif");
                    let r = () => {
                        (null == i.files || 0 === i.files.length) && t(),
                            n.document.body.removeEventListener("focus", r, !0),
                            setTimeout(() => {
                                n.document.body.removeChild(i);
                            }, 1e3);
                    };
                    i.addEventListener("change", () => {
                        (0, v.Vq)(i.files) && e(i.files[0]), r();
                    }),
                        i.addEventListener("cancel", () => {
                            r();
                        }),
                        n.document.body.addEventListener("focus", r, !0),
                        n.document.body.appendChild(i),
                        i.click();
                })(
                    async (r) => {
                        let a = await (0, _.CS)(n, i, r);
                        (0, v.Vq)(a) && (0, v.Vq)(a.url) && !(a instanceof A.A) ? e({ image_url: a.url }) : t(a);
                    },
                    () => t(Error("Upload canceled")),
                );
            }).catch((e) => {
                throw new O.A({ errorCode: U.Lw6.UNKNOWN_ERROR }, e?.message ?? "Failed to upload image");
            });
        },
    }),
    [U.e$_.OPEN_SHARE_MOMENT_DIALOG]: (0, l.T)(U.e$_.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [M.sm.ANY]: [M.VH] },
        handler(e) {
            let {
                socket: t,
                args: { mediaUrl: n },
            } = e;
            (0, R.lG)(t.transport);
            let i = t.application.id;
            if (null == i) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "No application.");
            if (!(0, a.Lt)(t.application.flags ?? 0, U.gfo.EMBEDDED))
                throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let r = (0, j.A)();
            if (!y.A.isDiscordCdnUrl(n))
                throw new O.A({ errorCode: U.Lw6.INVALID_PAYLOAD }, "mediaUrl must be a Discord CDN url");
            (0, g.g)({ applicationId: i, channelId: r?.id, mediaUrl: n });
        },
    }),
    [U.e$_.SHARE_INTERACTION]: (0, l.T)(U.e$_.SHARE_INTERACTION, {
        scope: { [M.sm.ANY]: [M.VH, M.hj] },
        handler(e) {
            let t,
                {
                    socket: n,
                    args: {
                        command: i,
                        preview_image: r,
                        components: l,
                        require_launch_channel: o,
                        content: d,
                        options: c,
                        pid: u,
                    },
                } = e,
                A = n.application.id;
            if (null == A) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "No application.");
            if (!G.mO.includes(A)) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "Unsupported application.");
            if (!(0, a.Lt)(n.application.flags ?? 0, U.gfo.EMBEDDED))
                throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let h = (0, j.A)();
            if (null == h && o) throw new O.A({ errorCode: U.Lw6.INVALID_COMMAND }, "No channel found");
            if (null !== r || null !== l || null !== d) {
                let e = [];
                void 0 !== r &&
                    (e = [
                        {
                            id: b.default.cast(b.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: r.url,
                            filename: "preview",
                            url: r.url,
                            height: r.height,
                            width: r.width,
                        },
                    ]),
                    (t = new C.Ay({
                        id: b.default.cast(b.default.fromTimestamp(Date.now())),
                        applicationId: A,
                        content: d,
                        components: l,
                        attachments: e,
                    }));
            }
            return new Promise((e) => {
                let n = !1,
                    r = (0, w.d5)(u),
                    a = s.SYi;
                (I.A.getWindowOpen(U.MLl.ACTIVITY_POPOUT) || r.context === U.BRT.POPOUT) && (a = s.KX8),
                    (0, E.m)({
                        applicationId: A,
                        channel: h,
                        command: { name: i, options: c },
                        requireLaunchChannel: !0 === o,
                        onShareResult: (t) => {
                            n || (n = t), r.lock(), e({ success: n });
                        },
                        previewMessage: t,
                        contextKey: a,
                    });
            });
        },
    }),
};
