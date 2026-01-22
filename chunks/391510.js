n.d(t, {
    A: () => _,
}),
    n(896048),
    n(938796),
    n(65821),
    n(747238);
var r = n(735438),
    i = n.n(r),
    l = n(179771),
    a = n(599026),
    s = n(73153),
    o = n(182892),
    c = n(587895),
    u = n(207371),
    d = n(954571),
    p = n(139675),
    f = n(927813),
    h = n(636401),
    A = n(629471),
    g = n(613057),
    m = n(652215);
let b = ["1402418171662569542"],
    _ = {
        [m.e$_.SET_ACTIVITY]: {
            scope: {
                [g.sm.ANY]: [l.F.RPC, l.F.RPC_ACTIVITIES_WRITE, g.hj],
            },
            validation: (e) =>
                (0, A.A)(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: (0, A.A)(e)
                            .keys({
                                name: e.string().min(1).max(128),
                                state: e.string().min(2).max(128),
                                state_url: e.string().uri().min(1).max(256),
                                details: e.string().min(2).max(128),
                                details_url: e.string().uri().min(1).max(256),
                                timestamps: (0, A.A)(e).keys({
                                    start: e.number().min(1),
                                    end: e.number().min(1),
                                }),
                                assets: (0, A.A)(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256),
                                    invite_cover_image: e.string().min(1).max(300),
                                }),
                                party: (0, A.A)(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(m.KIY.PRIVATE).valid([m.KIY.PRIVATE, m.KIY.PUBLIC]),
                                }),
                                secrets: (0, A.A)(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128),
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        (0, A.A)(e).keys({
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
                                    .default(m.$pd.PLAYING)
                                    .valid(m.$pd.PLAYING, m.$pd.LISTENING, m.$pd.WATCHING, m.$pd.COMPETING),
                                status_display_type: e.number().optional().valid(a.A.NAME, a.A.STATE, a.A.DETAILS),
                            })
                            .allow(null),
                    }),
            handler(e) {
                var t, n, r;
                let l,
                    {
                        socket: a,
                        args: { pid: A, activity: _ },
                        isSocketConnected: E,
                    } = e;
                if (![g.z4.IPC, g.z4.WEBSOCKET, g.z4.POST_MESSAGE].includes(a.transport))
                    throw new h.A(
                        {
                            errorCode: m.Lw6.INVALID_COMMAND,
                        },
                        'command not available from "'.concat(a.transport, '" transport'),
                    );
                if (null == A && g.z4.IPC === a.transport)
                    throw new h.A(
                        {
                            errorCode: m.Lw6.INVALID_COMMAND,
                        },
                        "nonzero pid required",
                    );
                if (null == _)
                    return (
                        s.h.dispatch({
                            type: "LOCAL_ACTIVITY_UPDATE",
                            socketId: a.id,
                            pid: A,
                            activity: _,
                        }),
                        Promise.resolve(_)
                    );
                let O = {};
                _.name || (_.name = a.application.name);
                let y = a.application.id;
                _.application_id = y;
                let I = a.transport === g.z4.POST_MESSAGE;
                _.platform = I ? m.yTV.EMBEDDED : m.yTV.DESKTOP;
                let v = c.A.getApplication(null != y ? y : void 0),
                    S = null != (t = _.instance) && t,
                    C = null == (n = _.party) ? void 0 : n.privacy;
                delete _.instance, null == (r = _.party) || delete r.privacy;
                let N = (0, o.E)(_, S, I, null != v && (0, u.x)(v) && I, C);
                N > 0 && (_.flags = N);
                let { assets: T, party: j, secrets: x, timestamps: P, buttons: w, type: L } = _;
                if ((null == L && (_.type = m.$pd.PLAYING), null != x)) {
                    let e = i()
                        .values(x)
                        .filter((e) => !!e);
                    if (null != j && i().intersection(e, [j.id]).length > 0 && !b.includes(a.application.id))
                        throw new h.A(
                            {
                                errorCode: m.Lw6.INVALID_ACTIVITY_SECRET,
                            },
                            "secrets cannot match the party id",
                        );
                    if (i().uniq(e).length < e.length)
                        throw new h.A(
                            {
                                errorCode: m.Lw6.INVALID_ACTIVITY_SECRET,
                            },
                            "secrets must be unique",
                        );
                    if (null != w)
                        throw new h.A(
                            {
                                errorCode: m.Lw6.INVALID_ACTIVITY_SECRET,
                            },
                            "secrets cannot currently be sent with buttons",
                        );
                }
                if (
                    (null != w && ((O.button_urls = w.map((e) => e.url)), (_.buttons = w.map((e) => e.label))),
                    (_.metadata = O),
                    null != P)
                )
                    for (let e of Object.keys(P))
                        Date.now().toString().length - P[e].toString().length > 2 &&
                            (P[e] = Math.floor(P[e] * f.A.Millis.SECOND));
                if (null == T) l = Promise.resolve([]);
                else {
                    if (null == a.application || null == a.application.id) throw Error();
                    l = (0, p.RG)(a.application.id, [T.large_image, T.small_image, T.invite_cover_image]);
                }
                return l.then((e) => {
                    var t, n, r, i;
                    let [l, o, c] = e;
                    if (
                        (null != T &&
                            (null != l ? (T.large_image = l) : delete T.large_image,
                            null != o ? (T.small_image = o) : delete T.small_image,
                            null != c ? (T.invite_cover_image = c) : delete T.invite_cover_image),
                        !E())
                    )
                        return;
                    s.h.dispatch({
                        type: "LOCAL_ACTIVITY_UPDATE",
                        socketId: a.id,
                        pid: A,
                        activity: _,
                        partyPrivacy: C,
                    });
                    let { secrets: u, party: p } = _,
                        f = {
                            application_id: a.application.id,
                            type: _.type,
                            name: _.name,
                            status_display_type: _.status_display_type,
                            details: null != (t = _.details) ? t : "",
                            state: null != (n = _.state) ? n : "",
                            has_urls:
                                null != _.state_url ||
                                null != _.details_url ||
                                (null == (r = _.assets) ? void 0 : r.large_url) != null ||
                                (null == (i = _.assets) ? void 0 : i.small_url) != null,
                        };
                    return (
                        null != u && ((f.has_match_secret = !!u.match), (f.has_join_secret = !!u.join)),
                        null != T && (f.has_images = !!(T.large_image || T.small_image || T.invite_cover_image)),
                        null != p &&
                            ((f.party_max = null != p.size && p.size[1] > 0 ? p.size[1] : void 0), (f.party_id = p.id)),
                        d.default.track(m.HAw.ACTIVITY_UPDATED, f),
                        _
                    );
                });
            },
        },
    };
