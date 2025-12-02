n.d(t, { Z: () => G }), n(388685), n(415506), n(997841);
var r = n(54381);
n(473749);
var i = n(243814),
    l = n(95015),
    a = n(45792),
    s = n(481060),
    o = n(278323),
    c = n(24124),
    u = n(224706),
    d = n(45114),
    p = n(479531),
    f = n(636449),
    h = n(566620),
    g = n(531826),
    m = n(596223),
    _ = n(838195),
    b = n(333861),
    E = n(728285),
    O = n(928518),
    v = n(23750),
    y = n(592125),
    I = n(293273),
    C = n(885110),
    S = n(451478),
    T = n(823379),
    N = n(709054),
    j = n(591759),
    P = n(228488),
    x = n(996106),
    A = n(914946),
    Z = n(452426),
    w = n(561205),
    L = n(600027),
    R = n(852926),
    D = n(186901),
    M = n(981631),
    k = n(701488);
async function U(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        l = I.Z.getApplicationActivity(t);
    if (null == l || null == l.secrets || !(0, A.t9)(r, l.party, l.secrets))
        throw new x.Z(
            { errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY },
            "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
        );
    let a = (0, m.Z)(l, C.Z);
    if (a) {
        let { lock: t } = (0, R.jU)(e);
        return (0, c.h7)(l, a).then(() => {
            throw (
                (t(),
                new x.Z(
                    { errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure user does have have privacy enabled.",
                ))
            );
        });
    }
    await o.Z.sendActivityInviteUser({
        userId: n,
        type: r,
        activity: l,
        content: i,
        location: "In-Game Invite",
    });
}
let G = {
    [M.Etm.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH],
        },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: r },
                } = e,
                i = t.application.id;
            if (null == i) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "No application.");
            return U(r, i, n, M.mFx.JOIN);
        },
    },
    [M.Etm.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH],
        },
        handler(e) {
            let {
                    args: { user_id: t },
                } = e,
                n = y.Z.getDMFromUserId(t);
            null != n &&
                (0, d.ack)(
                    n,
                    {
                        section: M.jXE.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                        object: M.qAy.ACK_DECLINE_REQUEST_TO_JOIN,
                        objectType: M.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        },
    },
    [M.Etm.ACTIVITY_INVITE_USER]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH],
        },
        validation: (e) =>
            (0, Z.Z)(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([M.mFx.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: r, content: i, pid: l },
                } = e,
                a = t.application.id;
            if (null == a) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "No application.");
            return U(l, a, r, n, i);
        },
    },
    [M.Etm.ACCEPT_ACTIVITY_INVITE]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH],
        },
        validation: (e) =>
            (0, Z.Z)(e)
                .required()
                .keys({
                    type: e.number().required().valid([M.mFx.JOIN]),
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
                o = t.transport === D.He.IPC && null != s ? s : t.application.id;
            if (null == o) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "No application.");
            let c = Promise.resolve(!1);
            return (
                n === M.mFx.JOIN &&
                    (c = u.Z.join({
                        userId: r,
                        sessionId: i,
                        applicationId: o,
                        channelId: l,
                        messageId: a,
                    })),
                c.then((e) => {
                    if (!e) throw new x.Z({ errorCode: M.lTL.INVALID_INVITE }, "Invite is expired or invalid.");
                })
            );
        },
    },
    [M.Etm.OPEN_INVITE_DIALOG]: {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH, D.wE],
        },
        handler(e) {
            let { socket: t } = e,
                i = t.application;
            if (null == i.id) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "No application.");
            let { channel: l, guild: a, frame: o } = (0, L.T)(),
                u = (0, g.ZP)({
                    application: t.application,
                    channelId: null == l ? void 0 : l.id,
                }),
                d = null != u ? O.Z.getWindow(u) : void 0;
            (null == d ? void 0 : d.closed) && (d = void 0);
            let p = null != d ? M.IlC.POPOUT : M.IlC.APP;
            if (((0, P.Pr)({}, null == d ? void 0 : d.document), null != o)) {
                if (o.applicationId !== i.id)
                    throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "Application is not currently mounted.");
                let e = I.Z.getApplicationActivity(i.id);
                if (null != e) (0, c.h7)(e, !1, p);
                else
                    throw new x.Z(
                        { errorCode: M.lTL.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity was set using setActivity.",
                    );
            } else
                (0, s.ZDy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("7654"), n.e("77653")]).then(n.bind(n, 560114));
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
                                        analyticsLocation: M.Sbl.ACTIVITY_RPC,
                                        source: M.t4x.ACTIVITY_INVITE,
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
                    { contextKey: p === M.IlC.POPOUT ? s.u1M : s.z1l },
                );
        },
    },
    [M.Etm.INITIATE_IMAGE_UPLOAD]: (0, a.S)(M.Etm.INITIATE_IMAGE_UPLOAD, {
        scope: {
            [D.Gp.ANY]: [i.x.RPC, D.lH, D.wE],
        },
        handler(e) {
            var t;
            let { socket: n } = e,
                r = n.application.id;
            if (null == r) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "No application.");
            let i = null == (t = (0, w.Z)()) ? void 0 : t.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, f.R)()) n = O.Z.getWindow(M.KJ3.ACTIVITY_POPOUT);
                    else {
                        var r;
                        let e = S.Z.getLastFocusedWindowId();
                        n = null == e ? null : null == (r = (0, E.g0)(e)) ? void 0 : r.renderWindow;
                    }
                    if (null == n) throw new x.Z({ errorCode: M.lTL.UNKNOWN_ERROR }, "No valid window found");
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
                        (0, T.lm)(i.files) && e(i.files[0]), l();
                    }),
                        i.addEventListener("cancel", () => {
                            l();
                        }),
                        n.document.body.addEventListener("focus", l, !0),
                        n.document.body.appendChild(i),
                        i.click();
                })(
                    async (n) => {
                        let l = await (0, h.kv)(r, i, n);
                        (0, T.lm)(l) && (0, T.lm)(l.url) && !(l instanceof p.Z) ? e({ image_url: l.url }) : t(l);
                    },
                    () => t(Error("Upload canceled")),
                );
            }).catch((e) => {
                var t;
                throw new x.Z(
                    { errorCode: M.lTL.UNKNOWN_ERROR },
                    null != (t = null == e ? void 0 : e.message) ? t : "Failed to upload image",
                );
            });
        },
    }),
    [M.Etm.OPEN_SHARE_MOMENT_DIALOG]: (0, a.S)(M.Etm.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [D.Gp.ANY]: [D.wE] },
        handler(e) {
            var t;
            let {
                socket: n,
                args: { mediaUrl: r },
            } = e;
            (0, A.bu)(n.transport);
            let i = n.application.id;
            if (null == i) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "No application.");
            if (!(0, l.yE)(null != (t = n.application.flags) ? t : 0, M.udG.EMBEDDED))
                throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "This application cannot access this API");
            let a = (0, w.Z)();
            if (!j.Z.isDiscordCdnUrl(r))
                throw new x.Z({ errorCode: M.lTL.INVALID_PAYLOAD }, "mediaUrl must be a Discord CDN url");
            (0, _.Z)({
                applicationId: i,
                channelId: null == a ? void 0 : a.id,
                mediaUrl: r,
            });
        },
    }),
    [M.Etm.SHARE_INTERACTION]: (0, a.S)(M.Etm.SHARE_INTERACTION, {
        scope: {
            [D.Gp.ANY]: [D.wE, D.lH],
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
            if (null == f) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "No application.");
            if (!k.Cr.includes(f)) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "Unsupported application.");
            if (!(0, l.yE)(null != (t = r.application.flags) ? t : 0, M.udG.EMBEDDED))
                throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "This application cannot access this API");
            let h = (0, w.Z)();
            if (null == h && c) throw new x.Z({ errorCode: M.lTL.INVALID_COMMAND }, "No channel found");
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
                    (n = new v.ZP({
                        id: N.default.cast(N.default.fromTimestamp(Date.now())),
                        applicationId: f,
                        content: u,
                        components: o,
                        attachments: e,
                    }));
            }
            return new Promise((e) => {
                let t = !1,
                    r = (0, R.jU)(p),
                    l = s.z1l;
                (O.Z.getWindowOpen(M.KJ3.ACTIVITY_POPOUT) || r.context === M.IlC.POPOUT) && (l = s.u1M),
                    (0, b.M)({
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
