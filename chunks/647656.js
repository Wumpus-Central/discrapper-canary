n(47120), n(789020), n(411104);
var i = n(392711),
    r = n.n(i),
    l = n(243814),
    a = n(570140),
    s = n(626135),
    o = n(81063),
    c = n(70956),
    d = n(996106),
    u = n(914946),
    h = n(452426),
    m = n(186901),
    p = n(981631);
let g = ['349134787773988865'];
t.Z = {
    [p.Etm.SET_ACTIVITY]: {
        scope: {
            [m.Gp.ANY]: [l.x.RPC, l.x.RPC_ACTIVITIES_WRITE, m.lH]
        },
        validation: (e) =>
            (0, h.Z)(e)
                .required()
                .keys({
                    pid: e.number().min(0),
                    activity: (0, h.Z)(e)
                        .keys({
                            state: e.string().min(2).max(128),
                            details: e.string().min(2).max(128),
                            timestamps: (0, h.Z)(e).keys({
                                start: e.number().min(1),
                                end: e.number().min(1)
                            }),
                            assets: (0, h.Z)(e).keys({
                                large_image: e.string().min(1).max(256),
                                large_text: e.string().min(2).max(128),
                                small_image: e.string().min(1).max(256),
                                small_text: e.string().min(2).max(128)
                            }),
                            party: (0, h.Z)(e).keys({
                                id: e.string().min(2).max(128),
                                size: e.array().items(e.number().min(1)).length(2),
                                privacy: e.number().default(p.RYY.PRIVATE).valid([p.RYY.PRIVATE, p.RYY.PUBLIC])
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
                            supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
                            type: e.number().default(p.IIU.PLAYING).valid(p.IIU.PLAYING, p.IIU.LISTENING, p.IIU.WATCHING, p.IIU.COMPETING)
                        })
                        .allow(null)
                }),
        handler(e) {
            var t;
            let n,
                {
                    socket: i,
                    args: { pid: l, activity: h },
                    isSocketConnected: f
                } = e;
            if (![m.He.IPC, m.He.WEBSOCKET, m.He.POST_MESSAGE].includes(i.transport)) throw new d.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'command not available from "'.concat(i.transport, '" transport'));
            if (null == l && m.He.IPC === i.transport) throw new d.Z({ errorCode: p.lTL.INVALID_COMMAND }, 'nonzero pid required');
            if (null == h)
                return (
                    a.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: i.id,
                        pid: l,
                        activity: h
                    }),
                    Promise.resolve(h)
                );
            (h.name = i.application.name), (h.application_id = i.application.id);
            let _ = i.transport === m.He.POST_MESSAGE,
                E = (0, u.S5)(h, _);
            E > 0 && (h.flags = E), delete h.instance, null === (t = h.party) || void 0 === t || delete t.privacy;
            let { assets: I, party: C, secrets: N, timestamps: v, buttons: S, type: T } = h;
            if ((null == T && (h.type = p.IIU.PLAYING), null != N)) {
                let e = r()
                    .values(N)
                    .filter((e) => !!e);
                if (null != C && r().intersection(e, [C.id]).length > 0 && !g.includes(i.application.id)) throw new d.Z({ errorCode: p.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                if (r().uniq(e).length < e.length) throw new d.Z({ errorCode: p.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                if (null != S) throw new d.Z({ errorCode: p.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
            }
            if ((null != S && ((h.metadata = { button_urls: S.map((e) => e.url) }), (h.buttons = S.map((e) => e.label))), null != v)) for (let e of Object.keys(v)) Date.now().toString().length - v[e].toString().length > 2 && (v[e] = Math.floor(v[e] * c.Z.Millis.SECOND));
            if (null == I) n = Promise.resolve([]);
            else {
                if (null == i.application || null == i.application.id) throw Error();
                n = (0, o.fetchAssetIds)(i.application.id, [I.large_image, I.small_image]);
            }
            return n.then((e) => {
                var t, n;
                let [r, o] = e;
                if ((null != I && (null != r ? (I.large_image = r) : delete I.large_image, null != o ? (I.small_image = o) : delete I.small_image), !f())) return;
                a.Z.dispatch({
                    type: 'LOCAL_ACTIVITY_UPDATE',
                    socketId: i.id,
                    pid: l,
                    activity: h
                });
                let { secrets: c, party: d } = h,
                    u = {
                        application_id: i.application.id,
                        type: h.type,
                        name: h.name,
                        details: null !== (t = h.details) && void 0 !== t ? t : '',
                        state: null !== (n = h.state) && void 0 !== n ? n : ''
                    };
                return null != c && ((u.has_match_secret = !!c.match), (u.has_join_secret = !!c.join)), null != I && (u.has_images = !!(I.large_image || I.small_image)), null != d && ((u.party_max = null != d.size ? d.size[1] : void 0), (u.party_id = d.id)), s.default.track(p.rMx.ACTIVITY_UPDATED, u), h;
            });
        }
    }
};
