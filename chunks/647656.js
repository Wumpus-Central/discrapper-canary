(n.d(t, { Z: () => O }), n(388685), n(997841), n(415506), n(35282));
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
    h = n(70956),
    f = n(996106),
    g = n(452426),
    m = n(186901),
    b = n(981631);
let _ = ['349134787773988865'],
    O = {
        [b.Etm.SET_ACTIVITY]: {
            scope: {
                [m.Gp.ANY]: [l.x.RPC, l.x.RPC_ACTIVITIES_WRITE, m.lH]
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
                                    end: e.number().min(1)
                                }),
                                assets: (0, g.Z)(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256)
                                }),
                                party: (0, g.Z)(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(b.RYY.PRIVATE).valid([b.RYY.PRIVATE, b.RYY.PUBLIC])
                                }),
                                secrets: (0, g.Z)(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128)
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        (0, g.Z)(e).keys({
                                            label: e.string().min(1).max(32).required(),
                                            url: e.string().uri().min(1).max(512).required()
                                        })
                                    )
                                    .min(1)
                                    .max(2),
                                instance: e.boolean(),
                                supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
                                type: e.number().default(b.IIU.PLAYING).valid(b.IIU.PLAYING, b.IIU.LISTENING, b.IIU.WATCHING, b.IIU.COMPETING),
                                status_display_type: e.number().optional().valid(a.D.NAME, a.D.STATE, a.D.DETAILS)
                            })
                            .allow(null)
                    }),
            handler(e) {
                var t;
                let n,
                    {
                        socket: r,
                        args: { pid: l, activity: a },
                        isSocketConnected: g
                    } = e;
                if (![m.He.IPC, m.He.WEBSOCKET, m.He.POST_MESSAGE].includes(r.transport)) throw new f.Z({ errorCode: b.lTL.INVALID_COMMAND }, 'command not available from "'.concat(r.transport, '" transport'));
                if (null == l && m.He.IPC === r.transport) throw new f.Z({ errorCode: b.lTL.INVALID_COMMAND }, 'nonzero pid required');
                if (null == a)
                    return (
                        o.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: r.id,
                            pid: l,
                            activity: a
                        }),
                        Promise.resolve(a)
                    );
                let O = {};
                a.name = r.application.name;
                let E = r.application.id;
                a.application_id = E;
                let y = r.transport === m.He.POST_MESSAGE;
                a.platform = y ? b.M7m.EMBEDDED : b.M7m.DESKTOP;
                let v = c.Z.getApplication(null != E ? E : void 0),
                    I = 0;
                null != v && (0, u.g)(v) && y && (I |= (0, s.ZW)(I));
                let C = (0, s.S5)(a, y);
                (C > 0 && (a.flags = C | I), delete a.instance, null == (t = a.party) || delete t.privacy);
                let { assets: S, party: N, secrets: T, timestamps: P, buttons: j, type: x } = a;
                if ((null == x && (a.type = b.IIU.PLAYING), null != T)) {
                    let e = i()
                        .values(T)
                        .filter((e) => !!e);
                    if (null != N && i().intersection(e, [N.id]).length > 0 && !_.includes(r.application.id)) throw new f.Z({ errorCode: b.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (i().uniq(e).length < e.length) throw new f.Z({ errorCode: b.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != j) throw new f.Z({ errorCode: b.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != j && ((O.button_urls = j.map((e) => e.url)), (a.buttons = j.map((e) => e.label))), (a.metadata = O), null != P)) for (let e of Object.keys(P)) Date.now().toString().length - P[e].toString().length > 2 && (P[e] = Math.floor(P[e] * h.Z.Millis.SECOND));
                if (null == S) n = Promise.resolve([]);
                else {
                    if (null == r.application || null == r.application.id) throw Error();
                    n = (0, p.hR)(r.application.id, [S.large_image, S.small_image]);
                }
                return n.then((e) => {
                    var t, n, i, s;
                    let [c, u] = e;
                    if ((null != S && (null != c ? (S.large_image = c) : delete S.large_image, null != u ? (S.small_image = u) : delete S.small_image), !g())) return;
                    o.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: r.id,
                        pid: l,
                        activity: a
                    });
                    let { secrets: p, party: h } = a,
                        f = {
                            application_id: r.application.id,
                            type: a.type,
                            name: a.name,
                            status_display_type: a.status_display_type,
                            details: null != (i = a.details) ? i : '',
                            state: null != (s = a.state) ? s : '',
                            has_urls: null != a.state_url || null != a.details_url || (null == (t = a.assets) ? void 0 : t.large_url) != null || (null == (n = a.assets) ? void 0 : n.small_url) != null
                        };
                    return (null != p && ((f.has_match_secret = !!p.match), (f.has_join_secret = !!p.join)), null != S && (f.has_images = !!(S.large_image || S.small_image)), null != h && ((f.party_max = null != h.size && h.size[1] > 0 ? h.size[1] : void 0), (f.party_id = h.id)), d.default.track(b.rMx.ACTIVITY_UPDATED, f), a);
                });
            }
        }
    };
