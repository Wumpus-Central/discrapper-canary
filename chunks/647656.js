n.d(t, { Z: () => O }), n(388685), n(997841), n(415506), n(35282);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(734959),
    o = n(570140),
    s = n(212517),
    c = n(812206),
    u = n(813370),
    d = n(626135),
    p = n(81063),
    f = n(70956),
    h = n(996106),
    g = n(452426),
    m = n(186901),
    b = n(981631);
let _ = ["1402418171662569542"],
    O = {
        [b.Etm.SET_ACTIVITY]: {
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
                                    privacy: e.number().default(b.RYY.PRIVATE).valid([b.RYY.PRIVATE, b.RYY.PUBLIC]),
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
                                    .default(b.IIU.PLAYING)
                                    .valid(b.IIU.PLAYING, b.IIU.LISTENING, b.IIU.WATCHING, b.IIU.COMPETING),
                                status_display_type: e.number().optional().valid(a.D.NAME, a.D.STATE, a.D.DETAILS),
                            })
                            .allow(null),
                    }),
            handler(e) {
                var t, n, r;
                let l,
                    {
                        socket: a,
                        args: { pid: g, activity: O },
                        isSocketConnected: E,
                    } = e;
                if (![m.He.IPC, m.He.WEBSOCKET, m.He.POST_MESSAGE].includes(a.transport))
                    throw new h.Z(
                        { errorCode: b.lTL.INVALID_COMMAND },
                        'command not available from "'.concat(a.transport, '" transport'),
                    );
                if (null == g && m.He.IPC === a.transport)
                    throw new h.Z({ errorCode: b.lTL.INVALID_COMMAND }, "nonzero pid required");
                if (null == O)
                    return (
                        o.Z.dispatch({
                            type: "LOCAL_ACTIVITY_UPDATE",
                            socketId: a.id,
                            pid: g,
                            activity: O,
                        }),
                        Promise.resolve(O)
                    );
                let y = {};
                O.name = a.application.name;
                let v = a.application.id;
                O.application_id = v;
                let I = a.transport === m.He.POST_MESSAGE;
                O.platform = I ? b.M7m.EMBEDDED : b.M7m.DESKTOP;
                let S = c.Z.getApplication(null != v ? v : void 0),
                    C = null != (r = O.instance) && r,
                    T = null == (t = O.party) ? void 0 : t.privacy;
                delete O.instance, null == (n = O.party) || delete n.privacy;
                let N = (0, s.S)(O, C, I, null != S && (0, u.g)(S) && I, T);
                N > 0 && (O.flags = N);
                let { assets: j, party: P, secrets: x, timestamps: A, buttons: Z, type: w } = O;
                if ((null == w && (O.type = b.IIU.PLAYING), null != x)) {
                    let e = i()
                        .values(x)
                        .filter((e) => !!e);
                    if (null != P && i().intersection(e, [P.id]).length > 0 && !_.includes(a.application.id))
                        throw new h.Z(
                            { errorCode: b.lTL.INVALID_ACTIVITY_SECRET },
                            "secrets cannot match the party id",
                        );
                    if (i().uniq(e).length < e.length)
                        throw new h.Z({ errorCode: b.lTL.INVALID_ACTIVITY_SECRET }, "secrets must be unique");
                    if (null != Z)
                        throw new h.Z(
                            { errorCode: b.lTL.INVALID_ACTIVITY_SECRET },
                            "secrets cannot currently be sent with buttons",
                        );
                }
                if (
                    (null != Z && ((y.button_urls = Z.map((e) => e.url)), (O.buttons = Z.map((e) => e.label))),
                    (O.metadata = y),
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
                    let [l, s, c] = e;
                    if (
                        (null != j &&
                            (null != l ? (j.large_image = l) : delete j.large_image,
                            null != s ? (j.small_image = s) : delete j.small_image,
                            null != c ? (j.invite_cover_image = c) : delete j.invite_cover_image),
                        !E())
                    )
                        return;
                    o.Z.dispatch({
                        type: "LOCAL_ACTIVITY_UPDATE",
                        socketId: a.id,
                        pid: g,
                        activity: O,
                        partyPrivacy: T,
                    });
                    let { secrets: u, party: p } = O,
                        f = {
                            application_id: a.application.id,
                            type: O.type,
                            name: O.name,
                            status_display_type: O.status_display_type,
                            details: null != (r = O.details) ? r : "",
                            state: null != (i = O.state) ? i : "",
                            has_urls:
                                null != O.state_url ||
                                null != O.details_url ||
                                (null == (t = O.assets) ? void 0 : t.large_url) != null ||
                                (null == (n = O.assets) ? void 0 : n.small_url) != null,
                        };
                    return (
                        null != u && ((f.has_match_secret = !!u.match), (f.has_join_secret = !!u.join)),
                        null != j && (f.has_images = !!(j.large_image || j.small_image || j.invite_cover_image)),
                        null != p &&
                            ((f.party_max = null != p.size && p.size[1] > 0 ? p.size[1] : void 0), (f.party_id = p.id)),
                        d.default.track(b.rMx.ACTIVITY_UPDATED, f),
                        O
                    );
                });
            },
        },
    };
