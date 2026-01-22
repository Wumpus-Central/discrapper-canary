n.d(t, { A: () => V }), n(896048), n(65821), n(938796);
var r = n(627968);
n(64700);
var i = n(179771),
    l = n(665260),
    a = n(420970),
    s = n(397927),
    o = n(308368),
    c = n(298990),
    u = n(544420),
    d = n(334738),
    p = n(181658),
    f = n(646865),
    h = n(795816),
    A = n(851907),
    g = n(980142),
    m = n(572946),
    b = n(293588),
    _ = n(267102),
    E = n(869146),
    O = n(383233),
    y = n(734057),
    I = n(375492),
    v = n(461213),
    S = n(531685),
    C = n(403362),
    N = n(661191),
    T = n(998218),
    j = n(475815),
    x = n(636401),
    P = n(90924),
    w = n(629471),
    L = n(569475),
    R = n(954843),
    D = n(546983),
    M = n(613057),
    k = n(652215),
    U = n(360469);
async function G(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        l = I.A.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, P.px)(r, l.party, l.secrets))
        throw new x.A(
            { errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY },
            "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
        );
    let a = (0, g.A)(l, v.A);
    if (a) {
        let { lock: t } = (0, D.d5)(e);
        return (0, c.qf)(l, a).then(() => {
            throw (
                (t(),
                new x.A(
                    { errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure user does have have privacy enabled.",
                ))
            );
        });
    }
    await o.A.sendActivityInviteUser({
        userId: n,
        type: r,
        activity: l,
        content: i,
        location: "In-Game Invite",
    });
}
let V = {
    [k.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [M.sm.ANY]: [i.F.RPC, M.hj],
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: r },
                } = e,
                i = t.application.id;
            if (null == i) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            return G(r, i, n, k.xL.JOIN);
        },
    },
    [k.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [M.sm.ANY]: [i.F.RPC, M.hj],
        },
        handler(e) {
            let {
                    args: { user_id: t },
                } = e,
                n = y.A.getDMFromUserId(t);
            null != n &&
                (0, d.ack)(
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
        scope: {
            [M.sm.ANY]: [i.F.RPC, M.hj],
        },
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
                    args: { type: n, user_id: r, content: i, pid: l },
                } = e,
                a = t.application.id;
            if (null == a) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            return G(l, a, r, n, i);
        },
    },
    [k.e$_.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [M.sm.ANY]: [i.F.RPC, M.hj],
        },
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
                    args: { type: n, user_id: r, session_id: i, channel_id: l, message_id: a, application_id: s },
                } = e,
                o = t.transport === M.z4.IPC && null != s ? s : t.application.id;
            if (null == o) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            let c = Promise.resolve(!1);
            return (
                n === k.xL.JOIN &&
                    (c = u.A.join({
                        userId: r,
                        sessionId: i,
                        applicationId: o,
                        channelId: l,
                        messageId: a,
                    })),
                c.then((e) => {
                    if (!e) throw new x.A({ errorCode: k.Lw6.INVALID_INVITE }, "Invite is expired or invalid.");
                })
            );
        },
    },
    [k.e$_.OPEN_INVITE_DIALOG]: {
        scope: {
            [M.sm.ANY]: [i.F.RPC, M.hj, M.VH],
        },
        handler(e) {
            let { socket: t } = e,
                i = t.application;
            if (null == i.id) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            let { channel: l, guild: a, frame: o } = (0, R.W)(),
                u = (0, A.Ay)({
                    application: t.application,
                    channelId: null == l ? void 0 : l.id,
                }),
                d = null != u ? E.A.getWindow(u) : void 0;
            (null == d ? void 0 : d.closed) && (d = void 0);
            let p = null != d ? k.BRT.POPOUT : k.BRT.APP;
            if (((0, j.sP)({}, null == d ? void 0 : d.document), null != o)) {
                if (o.applicationId !== i.id)
                    throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "Application is not currently mounted.");
                let e = I.A.getApplicationActivity(i.id);
                if (null != e) (0, c.qf)(e, !1, p);
                else
                    throw new x.A(
                        { errorCode: k.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity was set using setActivity.",
                    );
            } else
                (0, s.mMO)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("43600"), n.e("65202")]).then(n.bind(n, 234355));
                        return (t) => {
                            var n, s;
                            return (0, r.jsx)(
                                e,
                                ((n = (function (e) {
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
                                        guild: a,
                                        channel: l,
                                        applicationId: i.id,
                                        analyticsLocation: k.ThZ.ACTIVITY_RPC,
                                        source: k.PE1.ACTIVITY_INVITE,
                                    }),
                                Object.getOwnPropertyDescriptors
                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s))
                                    : (function (e, t) {
                                          var n = Object.keys(e);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              n.push.apply(n, r);
                                          }
                                          return n;
                                      })(Object(s)).forEach(function (e) {
                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                                      }),
                                n),
                            );
                        };
                    },
                    { contextKey: p === k.BRT.POPOUT ? s.KX8 : s.SYi },
                );
        },
    },
    [k.e$_.INITIATE_IMAGE_UPLOAD]: (0, a.T)(k.e$_.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [M.sm.ANY]: [i.F.RPC, M.hj, M.VH],
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                r = n.application.id;
            if (null == r) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            let i = null == (t = (0, L.A)()) ? void 0 : t.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, f.f)()) n = E.A.getWindow(k.MLl.ACTIVITY_POPOUT);
                    else {
                        var r;
                        let e = S.A.getLastFocusedWindowId();
                        n = null == e ? null : null == (r = (0, _.Iy)(e)) ? void 0 : r.renderWindow;
                    }
                    if (null == n) throw new x.A({ errorCode: k.Lw6.UNKNOWN_ERROR }, "No valid window found");
                    let i = n.document.createElement("input");
                    (i.style.display = "none"),
                        (i.type = "file"),
                        (i.accept = "image/jpeg, image/jpg, image/png, image/gif");
                    let l = () => {
                        (null == i.files || 0 === i.files.length) && t(),
                            n.document.body.removeEventListener("focus", l, !0),
                            setTimeout(() => {
                                n.document.body.removeChild(i);
                            }, 1000);
                    };
                    i.addEventListener("change", () => {
                        (0, C.Vq)(i.files) && e(i.files[0]), l();
                    }),
                        i.addEventListener("cancel", () => {
                            l();
                        }),
                        n.document.body.addEventListener("focus", l, !0),
                        n.document.body.appendChild(i),
                        i.click();
                })(
                    async (n) => {
                        let l = await (0, h.CS)(r, i, n);
                        (0, C.Vq)(l) && (0, C.Vq)(l.url) && !(l instanceof p.A) ? e({ image_url: l.url }) : t(l);
                    },
                    () => t(Error("Upload canceled")),
                );
            }).catch((e) => {
                var t;
                throw new x.A(
                    { errorCode: k.Lw6.UNKNOWN_ERROR },
                    null != (t = null == e ? void 0 : e.message) ? t : "Failed to upload image",
                );
            });
        },
    }),
    [k.e$_.OPEN_SHARE_MOMENT_DIALOG]: (0, a.T)(k.e$_.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [M.sm.ANY]: [M.VH] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: r },
            } = e;
            (0, P.lG)(n.transport);
            let i = n.application.id;
            if (null == i) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            if (!(0, l.Lt)(null != (t = n.application.flags) ? t : 0, k.gfo.EMBEDDED))
                throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let a = (0, L.A)();
            if (!T.A.isDiscordCdnUrl(r))
                throw new x.A({ errorCode: k.Lw6.INVALID_PAYLOAD }, "mediaUrl must be a Discord CDN url");
            (0, m.g)({
                applicationId: i,
                channelId: null == a ? void 0 : a.id,
                mediaUrl: r,
            });
        },
    }),
    [k.e$_.SHARE_INTERACTION]: (0, a.T)(k.e$_.SHARE_INTERACTION, {
        scope: {
            [M.sm.ANY]: [M.VH, M.hj],
        },
        handler(e) {
            var t;
            let n,
                {
                    socket: r,
                    args: {
                        command: i,
                        preview_image: a,
                        components: o,
                        require_launch_channel: c,
                        content: u,
                        options: d,
                        pid: p,
                    },
                } = e,
                f = r.application.id;
            if (null == f) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No application.");
            if (!U.mO.includes(f)) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "Unsupported application.");
            if (!(0, l.Lt)(null != (t = r.application.flags) ? t : 0, k.gfo.EMBEDDED))
                throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let h = (0, L.A)();
            if (null == h && c) throw new x.A({ errorCode: k.Lw6.INVALID_COMMAND }, "No channel found");
            if (null !== a || null !== o || null !== u) {
                let e = [];
                void 0 !== a &&
                    (e = [
                        {
                            id: N.default.cast(N.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: a.url,
                            filename: "preview",
                            url: a.url,
                            height: a.height,
                            width: a.width,
                        },
                    ]),
                    (n = new O.Ay({
                        id: N.default.cast(N.default.fromTimestamp(Date.now())),
                        applicationId: f,
                        content: u,
                        components: o,
                        attachments: e,
                    }));
            }
            return new Promise((e) => {
                let t = !1,
                    r = (0, D.d5)(p),
                    l = s.SYi;
                (E.A.getWindowOpen(k.MLl.ACTIVITY_POPOUT) || r.context === k.BRT.POPOUT) && (l = s.KX8),
                    (0, b.m)({
                        applicationId: f,
                        channel: h,
                        command: {
                            name: i,
                            options: d,
                        },
                        requireLaunchChannel: !0 === c,
                        onShareResult: (n) => {
                            t || (t = n), r.lock(), e({ success: t });
                        },
                        previewMessage: n,
                        contextKey: l,
                    });
            });
        },
    }),
};
