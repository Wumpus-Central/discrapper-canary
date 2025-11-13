n.d(t, { Z: () => E }), n(388685), n(997841), n(415506), n(35282);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(734959),
    s = n(570140),
    o = n(212517),
    c = n(812206),
    u = n(813370),
    d = n(626135),
    p = n(81063),
    f = n(70956),
    h = n(996106),
    g = n(452426),
    m = n(186901),
    _ = n(981631);
let b = ["1402418171662569542"],
    E = {
        [_.Etm.SET_ACTIVITY]: {
            scope: {
                [m.Gp.ANY]: [l.x.RPC, l.x.RPC_ACTIVITIES_WRITE, m.lH],
            },
            validation: (e) =>
                (0, g.Z)(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: (0, g.Z)(e)
                            .keys({
                                name: e.string().min(1).max(128),
                                state: e.string().min(2).max(128),
                                state_url: e.string().uri().min(1).max(256),
                                details: e.string().min(2).max(128),
                                details_url: e.string().uri().min(1).max(256),
                                timestamps: (0, g.Z)(e).keys({
                                    start: e.number().min(1),
                                    end: e.number().min(1),
                                }),
                                assets: (0, g.Z)(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256),
                                    invite_cover_image: e.string().min(1).max(300),
                                }),
                                party: (0, g.Z)(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(_.RYY.PRIVATE).valid([_.RYY.PRIVATE, _.RYY.PUBLIC]),
                                }),
                                secrets: (0, g.Z)(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128),
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        (0, g.Z)(e).keys({
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
                                    .default(_.IIU.PLAYING)
                                    .valid(_.IIU.PLAYING, _.IIU.LISTENING, _.IIU.WATCHING, _.IIU.COMPETING),
                                status_display_type: e.number().optional().valid(a.D.NAME, a.D.STATE, a.D.DETAILS),
                            })
                            .allow(null),
                    }),
            handler(e) {
                var t, n, r;
                let l,
                    {
                        socket: a,
                        args: { pid: g, activity: E },
                        isSocketConnected: O,
                    } = e;
                if (![m.He.IPC, m.He.WEBSOCKET, m.He.POST_MESSAGE].includes(a.transport))
                    throw new h.Z(
                        { errorCode: _.lTL.INVALID_COMMAND },
                        'command not available from "'.concat(a.transport, '" transport'),
                    );
                if (null == g && m.He.IPC === a.transport)
                    throw new h.Z({ errorCode: _.lTL.INVALID_COMMAND }, "nonzero pid required");
                if (null == E)
                    return (
                        s.Z.dispatch({
                            type: "LOCAL_ACTIVITY_UPDATE",
                            socketId: a.id,
                            pid: g,
                            activity: E,
                        }),
                        Promise.resolve(E)
                    );
                let y = {};
                E.name || (E.name = a.application.name);
                let v = a.application.id;
                E.application_id = v;
                let I = a.transport === m.He.POST_MESSAGE;
                E.platform = I ? _.M7m.EMBEDDED : _.M7m.DESKTOP;
                let C = c.Z.getApplication(null != v ? v : void 0),
                    S = null != (r = E.instance) && r,
                    T = null == (t = E.party) ? void 0 : t.privacy;
                delete E.instance, null == (n = E.party) || delete n.privacy;
                let N = (0, o.S)(E, S, I, null != C && (0, u.g)(C) && I, T);
                N > 0 && (E.flags = N);
                let { assets: j, party: P, secrets: x, timestamps: A, buttons: Z, type: w } = E;
                if ((null == w && (E.type = _.IIU.PLAYING), null != x)) {
                    let e = i()
                        .values(x)
                        .filter((e) => !!e);
                    if (null != P && i().intersection(e, [P.id]).length > 0 && !b.includes(a.application.id))
                        throw new h.Z(
                            { errorCode: _.lTL.INVALID_ACTIVITY_SECRET },
                            "secrets cannot match the party id",
                        );
                    if (i().uniq(e).length < e.length)
                        throw new h.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, "secrets must be unique");
                    if (null != Z)
                        throw new h.Z(
                            { errorCode: _.lTL.INVALID_ACTIVITY_SECRET },
                            "secrets cannot currently be sent with buttons",
                        );
                }
                if (
                    (null != Z && ((y.button_urls = Z.map((e) => e.url)), (E.buttons = Z.map((e) => e.label))),
                    (E.metadata = y),
                    null != A)
                )
                    for (let e of Object.keys(A))
                        Date.now().toString().length - A[e].toString().length > 2 &&
                            (A[e] = Math.floor(A[e] * f.Z.Millis.SECOND));
                if (null == j) l = Promise.resolve([]);
                else {
                    if (null == a.application || null == a.application.id) throw Error();
                    l = (0, p.hR)(a.application.id, [j.large_image, j.small_image, j.invite_cover_image]);
                }
                return l.then((e) => {
                    var t, n, r, i;
                    let [l, o, c] = e;
                    if (
                        (null != j &&
                            (null != l ? (j.large_image = l) : delete j.large_image,
                            null != o ? (j.small_image = o) : delete j.small_image,
                            null != c ? (j.invite_cover_image = c) : delete j.invite_cover_image),
                        !O())
                    )
                        return;
                    s.Z.dispatch({
                        type: "LOCAL_ACTIVITY_UPDATE",
                        socketId: a.id,
                        pid: g,
                        activity: E,
                        partyPrivacy: T,
                    });
                    let { secrets: u, party: p } = E,
                        f = {
                            application_id: a.application.id,
                            type: E.type,
                            name: E.name,
                            status_display_type: E.status_display_type,
                            details: null != (r = E.details) ? r : "",
                            state: null != (i = E.state) ? i : "",
                            has_urls:
                                null != E.state_url ||
                                null != E.details_url ||
                                (null == (t = E.assets) ? void 0 : t.large_url) != null ||
                                (null == (n = E.assets) ? void 0 : n.small_url) != null,
                        };
                    return (
                        null != u && ((f.has_match_secret = !!u.match), (f.has_join_secret = !!u.join)),
                        null != j && (f.has_images = !!(j.large_image || j.small_image || j.invite_cover_image)),
                        null != p &&
                            ((f.party_max = null != p.size && p.size[1] > 0 ? p.size[1] : void 0), (f.party_id = p.id)),
                        d.default.track(_.rMx.ACTIVITY_UPDATED, f),
                        E
                    );
                });
            },
        },
    };
