n.d(t, { A: () => H });
var i = n(627968);
n(64700);
var r = n(179771),
    a = n(420970),
    l = n(192308),
    s = n(231723),
    o = n(308368),
    d = n(298990),
    u = n(544420),
    c = n(334738),
    A = n(181658),
    h = n(646865),
    _ = n(795816),
    E = n(851907),
    p = n(980142),
    m = n(572946),
    g = n(293588),
    I = n(20015),
    C = n(267102),
    f = n(869146),
    T = n(383233),
    S = n(734057),
    N = n(375492),
    O = n(461213),
    L = n(531685),
    y = n(403362),
    v = n(661191),
    b = n(998218),
    D = n(475815),
    R = n(636401),
    P = n(90924),
    w = n(629471),
    M = n(569475),
    U = n(954843),
    x = n(546983),
    G = n(613057),
    k = n(652215),
    j = n(360469);
async function V(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        a = N.A.getApplicationActivity(t);
    if (null == a || null == a.secrets || !(0, P.px)(i, a.party, a.secrets))
        throw new R.A(
            { errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY },
            "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
        );
    let l = (0, p.A)(a, O.A);
    if (l) {
        let { lock: t } = (0, x.d5)(e);
        return (0, d.qf)(a, l).then(() => {
            throw (
                (t(),
                new R.A(
                    { errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure user does have have privacy enabled.",
                ))
            );
        });
    }
    await o.A.sendActivityInviteUser({ userId: n, type: i, activity: a, content: r, location: "In-Game Invite" });
}
let H = {
    [k.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: { [G.sm.ANY]: [r.F.RPC, G.hj] },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i },
                } = e,
                r = t.application.id;
            if (null == r) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            return V(i, r, n, k.xL.JOIN);
        },
    },
    [k.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: { [G.sm.ANY]: [r.F.RPC, G.hj] },
        handler(e) {
            let {
                    args: { user_id: t },
                } = e,
                n = S.A.getDMFromUserId(t);
            null != n &&
                (0, c.ack)(
                    n,
                    {
                        section: k.JJy.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                        object: k.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                        objectType: k.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        },
    },
    [k.e$_.ACTIVITY_INVITE_USER]: {
        scope: { [G.sm.ANY]: [r.F.RPC, G.hj] },
        validation: (e) =>
            (0, w.A)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([k.xL.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: r, pid: a },
                } = e,
                l = t.application.id;
            if (null == l) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            return V(a, l, i, n, r);
        },
    },
    [k.e$_.ACCEPT_ACTIVITY_INVITE]: {
        scope: { [G.sm.ANY]: [r.F.RPC, G.hj] },
        validation: (e) =>
            (0, w.A)(e)
                .required()
                .keys({
                    type: e.number().required().valid([k.xL.JOIN]),
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
                o = t.transport === G.z4.IPC ? (s ?? t.application.id) : t.application.id;
            if (null == o) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            let d = Promise.resolve(!1);
            return (
                n === k.xL.JOIN &&
                    (d = u.Ay.join({ userId: i, sessionId: r, applicationId: o, channelId: a, messageId: l })),
                d.then((e) => {
                    if (!e) throw new R.A({ errorCode: k.Lw6.INVALID_INVITE }, "Invite is expired or invalid.");
                })
            );
        },
    },
    [k.e$_.OPEN_INVITE_DIALOG]: {
        scope: { [G.sm.ANY]: [r.F.RPC, G.hj, G.VH] },
        handler(e) {
            let { socket: t } = e,
                r = t.application;
            if (null == r.id) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            let { channel: a, guild: o, frame: u } = (0, U.W)(),
                c = (0, E.Ay)({ application: t.application, channelId: a?.id }),
                A = null != c ? f.A.getWindow(c) : void 0;
            A?.closed && (A = void 0);
            let h = null != A ? k.BRT.POPOUT : k.BRT.APP;
            if (((0, D.sP)({}, A?.document), null != u)) {
                if (u.applicationId !== r.id)
                    throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "Application is not currently mounted.");
                let e = N.A.getApplicationActivity(r.id);
                if (null != e) (0, d.qf)(e, !1, h);
                else
                    throw new R.A(
                        { errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity was set using setActivity.",
                    );
            } else
                (0, l.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(
                            n.bind(n, 234355),
                        );
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guild: o,
                                channel: a,
                                applicationId: r.id,
                                analyticsLocation: k.ThZ.ACTIVITY_RPC,
                                source: k.PE1.ACTIVITY_INVITE,
                            });
                    },
                    { contextKey: h === k.BRT.POPOUT ? s.KX : s.SY },
                );
        },
    },
    [k.e$_.INITIATE_IMAGE_UPLOAD]: (0, a.T)(k.e$_.INITIATE_IMAGE_UPLOAD, {
        scope: { [G.sm.ANY]: [r.F.RPC, G.hj, G.VH] },
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            let i = (0, M.A)()?.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, h.f)()) n = f.A.getWindow(k.MLl.ACTIVITY_POPOUT);
                    else {
                        let e = L.A.getLastFocusedWindowId();
                        n = null == e ? null : (0, C.Iy)(e)?.renderWindow;
                    }
                    if (null == n) throw new R.A({ errorCode: k.Lw6.UNKNOWN_ERROR }, "No valid window found");
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
                        (0, y.Vq)(i.files) && e(i.files[0]), r();
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
                        (0, y.Vq)(a) && (0, y.Vq)(a.url) && !(a instanceof A.A) ? e({ image_url: a.url }) : t(a);
                    },
                    () => t(Error("Upload canceled")),
                );
            }).catch((e) => {
                throw new R.A({ errorCode: k.Lw6.UNKNOWN_ERROR }, e?.message ?? "Failed to upload image");
            });
        },
    }),
    [k.e$_.OPEN_SHARE_MOMENT_DIALOG]: (0, a.T)(k.e$_.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [G.sm.ANY]: [G.VH] },
        handler(e) {
            let {
                socket: t,
                args: { mediaUrl: n },
            } = e;
            (0, P.lG)(t.transport);
            let i = t.application.id;
            if (null == i) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            if (!(0, I.n)(t.application, k.gfo.EMBEDDED))
                throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let r = (0, M.A)();
            if (!b.A.isDiscordCdnUrl(n))
                throw new R.A({ errorCode: k.Lw6.INVALID_PAYLOAD }, "mediaUrl must be a Discord CDN url");
            (0, m.g)({ applicationId: i, channelId: r?.id, mediaUrl: n });
        },
    }),
    [k.e$_.SHARE_INTERACTION]: (0, a.T)(k.e$_.SHARE_INTERACTION, {
        scope: { [G.sm.ANY]: [G.VH, G.hj] },
        handler(e) {
            let t,
                {
                    socket: n,
                    args: {
                        command: i,
                        preview_image: r,
                        components: a,
                        require_launch_channel: l,
                        content: o,
                        options: d,
                        pid: u,
                    },
                } = e,
                c = n.application.id;
            if (null == c) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            if (!j.mO.includes(c)) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "Unsupported application.");
            if (!(0, I.n)(n.application, k.gfo.EMBEDDED))
                throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let A = (0, M.A)();
            if (null == A && l) throw new R.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No channel found");
            if (null !== r || null !== a || null !== o) {
                let e = [];
                void 0 !== r &&
                    (e = [
                        {
                            id: v.default.cast(v.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: r.url,
                            filename: "preview",
                            url: r.url,
                            height: r.height,
                            width: r.width,
                        },
                    ]),
                    (t = new T.Ay({
                        id: v.default.cast(v.default.fromTimestamp(Date.now())),
                        applicationId: c,
                        content: o,
                        components: a,
                        attachments: e,
                    }));
            }
            return new Promise((e) => {
                let n = !1,
                    r = (0, x.d5)(u),
                    a = s.SY;
                (f.A.getWindowOpen(k.MLl.ACTIVITY_POPOUT) || r.context === k.BRT.POPOUT) && (a = s.KX),
                    (0, g.m)({
                        applicationId: c,
                        channel: A,
                        command: { name: i, options: d },
                        requireLaunchChannel: !0 === l,
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
