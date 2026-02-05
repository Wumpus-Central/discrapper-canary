n.d(t, { A: () => f }), n(938796);
var i = n(735438),
    r = n.n(i),
    a = n(179771),
    l = n(599026),
    s = n(73153),
    o = n(182892),
    d = n(587895),
    c = n(207371),
    u = n(954571),
    A = n(139675),
    h = n(927813),
    _ = n(636401),
    m = n(629471),
    p = n(613057),
    g = n(652215);
let E = ["1402418171662569542"],
    f = {
        [g.e$_.SET_ACTIVITY]: {
            scope: { [p.sm.ANY]: [a.F.RPC, a.F.RPC_ACTIVITIES_WRITE, p.hj] },
            validation: (e) =>
                (0, m.A)(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: (0, m.A)(e)
                            .keys({
                                name: e.string().min(1).max(128),
                                state: e.string().min(2).max(128),
                                state_url: e.string().uri().min(1).max(256),
                                details: e.string().min(2).max(128),
                                details_url: e.string().uri().min(1).max(256),
                                timestamps: (0, m.A)(e).keys({ start: e.number().min(1), end: e.number().min(1) }),
                                assets: (0, m.A)(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256),
                                    invite_cover_image: e.string().min(1).max(300),
                                }),
                                party: (0, m.A)(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(g.KIY.PRIVATE).valid([g.KIY.PRIVATE, g.KIY.PUBLIC]),
                                }),
                                secrets: (0, m.A)(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128),
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        (0, m.A)(e).keys({
                                            label: e.string().min(1).max(32).required(),
                                            url: e.string().uri().min(1).max(512).required(),
                                        }),
                                    )
                                    .min(1)
                                    .max(2),
                                instance: e.boolean(),
                                supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
                                type: e
                                    .number()
                                    .default(g.$pd.PLAYING)
                                    .valid(g.$pd.PLAYING, g.$pd.LISTENING, g.$pd.WATCHING, g.$pd.COMPETING),
                                status_display_type: e.number().optional().valid(l.A.NAME, l.A.STATE, l.A.DETAILS),
                            })
                            .allow(null),
                    }),
            handler(e) {
                let t,
                    {
                        socket: n,
                        args: { pid: i, activity: a },
                        isSocketConnected: l,
                    } = e;
                if (![p.z4.IPC, p.z4.WEBSOCKET, p.z4.POST_MESSAGE].includes(n.transport))
                    throw new _.A(
                        { errorCode: g.Lw6.INVALID_COMMAND },
                        `command not available from "${n.transport}" transport`,
                    );
                if (null == i && p.z4.IPC === n.transport)
                    throw new _.A({ errorCode: g.Lw6.INVALID_COMMAND }, "nonzero pid required");
                if (null == a)
                    return (
                        s.h.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", socketId: n.id, pid: i, activity: a }),
                        Promise.resolve(a)
                    );
                let m = {};
                a.name || (a.name = n.application.name);
                let f = n.application.id;
                a.application_id = f;
                let I = n.transport === p.z4.POST_MESSAGE;
                a.platform = I ? g.yTV.EMBEDDED : g.yTV.DESKTOP;
                let C = d.A.getApplication(f ?? void 0),
                    N = a.instance ?? !1,
                    T = a.party?.privacy;
                delete a.instance, delete a.party?.privacy;
                let S = (0, o.E)(a, N, I, null != C && (0, c.x)(C) && I, T);
                S > 0 && (a.flags = S);
                let { assets: x, party: v, secrets: b, timestamps: y, buttons: L, type: O } = a;
                if ((null == O && (a.type = g.$pd.PLAYING), null != b)) {
                    let e = r()
                        .values(b)
                        .filter((e) => !!e);
                    if (null != v && r().intersection(e, [v.id]).length > 0 && !E.includes(n.application.id))
                        throw new _.A(
                            { errorCode: g.Lw6.INVALID_ACTIVITY_SECRET },
                            "secrets cannot match the party id",
                        );
                    if (r().uniq(e).length < e.length)
                        throw new _.A({ errorCode: g.Lw6.INVALID_ACTIVITY_SECRET }, "secrets must be unique");
                    if (null != L)
                        throw new _.A(
                            { errorCode: g.Lw6.INVALID_ACTIVITY_SECRET },
                            "secrets cannot currently be sent with buttons",
                        );
                }
                if (
                    (null != L && ((m.button_urls = L.map((e) => e.url)), (a.buttons = L.map((e) => e.label))),
                    (a.metadata = m),
                    null != y)
                )
                    for (let e of Object.keys(y))
                        Date.now().toString().length - y[e].toString().length > 2 &&
                            (y[e] = Math.floor(y[e] * h.A.Millis.SECOND));
                if (null == x) t = Promise.resolve([]);
                else {
                    if (null == n.application || null == n.application.id) throw Error();
                    t = (0, A.RG)(n.application.id, [x.large_image, x.small_image, x.invite_cover_image]);
                }
                return t.then((e) => {
                    let [t, r, o] = e;
                    if (
                        (null != x &&
                            (null != t ? (x.large_image = t) : delete x.large_image,
                            null != r ? (x.small_image = r) : delete x.small_image,
                            null != o ? (x.invite_cover_image = o) : delete x.invite_cover_image),
                        !l())
                    )
                        return;
                    s.h.dispatch({
                        type: "LOCAL_ACTIVITY_UPDATE",
                        socketId: n.id,
                        pid: i,
                        activity: a,
                        partyPrivacy: T,
                    });
                    let { secrets: d, party: c } = a,
                        A = {
                            application_id: n.application.id,
                            type: a.type,
                            name: a.name,
                            status_display_type: a.status_display_type,
                            details: a.details ?? "",
                            state: a.state ?? "",
                            has_urls:
                                null != a.state_url ||
                                null != a.details_url ||
                                a.assets?.large_url != null ||
                                a.assets?.small_url != null,
                        };
                    return (
                        null != d && ((A.has_match_secret = !!d.match), (A.has_join_secret = !!d.join)),
                        null != x && (A.has_images = !!(x.large_image || x.small_image || x.invite_cover_image)),
                        null != c &&
                            ((A.party_max = null != c.size && c.size[1] > 0 ? c.size[1] : void 0), (A.party_id = c.id)),
                        u.default.track(g.HAw.ACTIVITY_UPDATED, A),
                        a
                    );
                });
            },
        },
    };
