(n.d(t, { Z: () => b }), n(388685), n(997841), n(415506), n(35282));
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(734959),
    o = n(570140),
    s = n(212517),
    c = n(626135),
    u = n(81063),
    d = n(70956),
    p = n(996106),
    h = n(452426),
    f = n(186901),
    g = n(981631);
let m = ['349134787773988865'],
    b = {
        [g.Etm.SET_ACTIVITY]: {
            scope: {
                [f.Gp.ANY]: [l.x.RPC, l.x.RPC_ACTIVITIES_WRITE, f.lH]
            },
            validation: (e) =>
                (0, h.Z)(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: (0, h.Z)(e)
                            .keys({
                                state: e.string().min(2).max(128),
                                state_url: e.string().uri().min(1).max(256),
                                details: e.string().min(2).max(128),
                                details_url: e.string().uri().min(1).max(256),
                                timestamps: (0, h.Z)(e).keys({
                                    start: e.number().min(1),
                                    end: e.number().min(1)
                                }),
                                assets: (0, h.Z)(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256)
                                }),
                                party: (0, h.Z)(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(g.RYY.PRIVATE).valid([g.RYY.PRIVATE, g.RYY.PUBLIC])
                                }),
                                secrets: (0, h.Z)(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128)
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        (0, h.Z)(e).keys({
                                            label: e.string().min(1).max(32).required(),
                                            url: e.string().uri().min(1).max(512).required()
                                        })
                                    )
                                    .min(1)
                                    .max(2),
                                instance: e.boolean(),
                                supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
                                type: e.number().default(g.IIU.PLAYING).valid(g.IIU.PLAYING, g.IIU.LISTENING, g.IIU.WATCHING, g.IIU.COMPETING),
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
                        isSocketConnected: h
                    } = e;
                if (![f.He.IPC, f.He.WEBSOCKET, f.He.POST_MESSAGE].includes(r.transport)) throw new p.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'command not available from "'.concat(r.transport, '" transport'));
                if (null == l && f.He.IPC === r.transport) throw new p.Z({ errorCode: g.lTL.INVALID_COMMAND }, 'nonzero pid required');
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
                let b = {};
                ((a.name = r.application.name), (a.application_id = r.application.id));
                let _ = r.transport === f.He.POST_MESSAGE;
                a.platform = _ ? g.M7m.EMBEDDED : g.M7m.DESKTOP;
                let E = (0, s.S5)(a, _);
                (E > 0 && (a.flags = E), delete a.instance, null == (t = a.party) || delete t.privacy);
                let { assets: O, party: y, secrets: I, timestamps: v, buttons: C, type: S } = a;
                if ((null == S && (a.type = g.IIU.PLAYING), null != I)) {
                    let e = i()
                        .values(I)
                        .filter((e) => !!e);
                    if (null != y && i().intersection(e, [y.id]).length > 0 && !m.includes(r.application.id)) throw new p.Z({ errorCode: g.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (i().uniq(e).length < e.length) throw new p.Z({ errorCode: g.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != C) throw new p.Z({ errorCode: g.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != C && ((b.button_urls = C.map((e) => e.url)), (a.buttons = C.map((e) => e.label))), (a.metadata = b), null != v)) for (let e of Object.keys(v)) Date.now().toString().length - v[e].toString().length > 2 && (v[e] = Math.floor(v[e] * d.Z.Millis.SECOND));
                if (null == O) n = Promise.resolve([]);
                else {
                    if (null == r.application || null == r.application.id) throw Error();
                    n = (0, u.hR)(r.application.id, [O.large_image, O.small_image]);
                }
                return n.then((e) => {
                    var t, n, i, s;
                    let [u, d] = e;
                    if ((null != O && (null != u ? (O.large_image = u) : delete O.large_image, null != d ? (O.small_image = d) : delete O.small_image), !h())) return;
                    o.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: r.id,
                        pid: l,
                        activity: a
                    });
                    let { secrets: p, party: f } = a,
                        m = {
                            application_id: r.application.id,
                            type: a.type,
                            name: a.name,
                            status_display_type: a.status_display_type,
                            details: null != (i = a.details) ? i : '',
                            state: null != (s = a.state) ? s : '',
                            has_urls: null != a.state_url || null != a.details_url || (null == (t = a.assets) ? void 0 : t.large_url) != null || (null == (n = a.assets) ? void 0 : n.small_url) != null
                        };
                    return (null != p && ((m.has_match_secret = !!p.match), (m.has_join_secret = !!p.join)), null != O && (m.has_images = !!(O.large_image || O.small_image)), null != f && ((m.party_max = null != f.size && f.size[1] > 0 ? f.size[1] : void 0), (m.party_id = f.id)), c.default.track(g.rMx.ACTIVITY_UPDATED, m), a);
                });
            }
        }
    };
