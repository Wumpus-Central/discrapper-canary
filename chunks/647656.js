n.d(t, { Z: () => m }), n(388685), n(997841), n(415506), n(35282);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(570140),
    o = n(212517),
    s = n(626135),
    c = n(81063),
    u = n(70956),
    d = n(996106),
    p = n(452426),
    h = n(186901),
    f = n(981631);
let g = ['349134787773988865'],
    m = {
        [f.Etm.SET_ACTIVITY]: {
            scope: {
                [h.Gp.ANY]: [l.x.RPC, l.x.RPC_ACTIVITIES_WRITE, h.lH]
            },
            validation: (e) =>
                (0, p.Z)(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: (0, p.Z)(e)
                            .keys({
                                state: e.string().min(2).max(128),
                                details: e.string().min(2).max(128),
                                timestamps: (0, p.Z)(e).keys({
                                    start: e.number().min(1),
                                    end: e.number().min(1)
                                }),
                                assets: (0, p.Z)(e).keys({
                                    large_image: e.string().min(1).max(256),
                                    large_text: e.string().min(2).max(128),
                                    small_image: e.string().min(1).max(256),
                                    small_text: e.string().min(2).max(128)
                                }),
                                party: (0, p.Z)(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(f.RYY.PRIVATE).valid([f.RYY.PRIVATE, f.RYY.PUBLIC])
                                }),
                                secrets: (0, p.Z)(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128)
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        (0, p.Z)(e).keys({
                                            label: e.string().min(1).max(32).required(),
                                            url: e.string().uri().min(1).max(512).required()
                                        })
                                    )
                                    .min(1)
                                    .max(2),
                                instance: e.boolean(),
                                supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
                                type: e.number().default(f.IIU.PLAYING).valid(f.IIU.PLAYING, f.IIU.LISTENING, f.IIU.WATCHING, f.IIU.COMPETING)
                            })
                            .allow(null)
                    }),
            handler(e) {
                var t;
                let n,
                    {
                        socket: r,
                        args: { pid: l, activity: p },
                        isSocketConnected: m
                    } = e;
                if (![h.He.IPC, h.He.WEBSOCKET, h.He.POST_MESSAGE].includes(r.transport)) throw new d.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'command not available from "'.concat(r.transport, '" transport'));
                if (null == l && h.He.IPC === r.transport) throw new d.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'nonzero pid required');
                if (null == p)
                    return (
                        a.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: r.id,
                            pid: l,
                            activity: p
                        }),
                        Promise.resolve(p)
                    );
                let b = {};
                (p.name = r.application.name), (p.application_id = r.application.id);
                let _ = r.transport === h.He.POST_MESSAGE;
                p.platform = _ ? f.M7m.EMBEDDED : f.M7m.DESKTOP;
                let O = (0, o.S5)(p, _);
                O > 0 && (p.flags = O), delete p.instance, null == (t = p.party) || delete t.privacy;
                let { assets: E, party: y, secrets: I, timestamps: v, buttons: C, type: S } = p;
                if ((null == S && (p.type = f.IIU.PLAYING), null != I)) {
                    let e = i()
                        .values(I)
                        .filter((e) => !!e);
                    if (null != y && i().intersection(e, [y.id]).length > 0 && !g.includes(r.application.id)) throw new d.Z({ errorCode: f.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (i().uniq(e).length < e.length) throw new d.Z({ errorCode: f.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != C) throw new d.Z({ errorCode: f.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != C && ((b.button_urls = C.map((e) => e.url)), (p.buttons = C.map((e) => e.label))), (p.metadata = b), null != v)) for (let e of Object.keys(v)) Date.now().toString().length - v[e].toString().length > 2 && (v[e] = Math.floor(v[e] * u.Z.Millis.SECOND));
                if (null == E) n = Promise.resolve([]);
                else {
                    if (null == r.application || null == r.application.id) throw Error();
                    n = (0, c.hR)(r.application.id, [E.large_image, E.small_image]);
                }
                return n.then((e) => {
                    var t, n;
                    let [i, o] = e;
                    if ((null != E && (null != i ? (E.large_image = i) : delete E.large_image, null != o ? (E.small_image = o) : delete E.small_image), !m())) return;
                    a.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: r.id,
                        pid: l,
                        activity: p
                    });
                    let { secrets: c, party: u } = p,
                        d = {
                            application_id: r.application.id,
                            type: p.type,
                            name: p.name,
                            details: null != (t = p.details) ? t : '',
                            state: null != (n = p.state) ? n : ''
                        };
                    return null != c && ((d.has_match_secret = !!c.match), (d.has_join_secret = !!c.join)), null != E && (d.has_images = !!(E.large_image || E.small_image)), null != u && ((d.party_max = null != u.size && u.size[1] > 0 ? u.size[1] : void 0), (d.party_id = u.id)), s.default.track(f.rMx.ACTIVITY_UPDATED, d), p;
                });
            }
        }
    };
