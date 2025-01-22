n(47120), n(789020), n(411104);
var i = n(392711),
    r = n.n(i),
    l = n(243814),
    a = n(570140),
    s = n(774226),
    o = n(317381),
    c = n(173439),
    d = n(626135),
    u = n(81063),
    h = n(70956),
    m = n(996106),
    p = n(914946),
    g = n(452426),
    f = n(186901),
    _ = n(981631);
let E = ['349134787773988865'];
t.Z = {
    [_.Etm.SET_ACTIVITY]: {
        scope: {
            [f.Gp.ANY]: [l.x.RPC, l.x.RPC_ACTIVITIES_WRITE, f.lH]
        },
        validation: (e) =>
            (0, g.Z)(e)
                .required()
                .keys({
                    pid: e.number().min(0),
                    activity: (0, g.Z)(e)
                        .keys({
                            state: e.string().min(2).max(128),
                            details: e.string().min(2).max(128),
                            timestamps: (0, g.Z)(e).keys({
                                start: e.number().min(1),
                                end: e.number().min(1)
                            }),
                            assets: (0, g.Z)(e).keys({
                                large_image: e.string().min(1).max(256),
                                large_text: e.string().min(2).max(128),
                                small_image: e.string().min(1).max(256),
                                small_text: e.string().min(2).max(128)
                            }),
                            party: (0, g.Z)(e).keys({
                                id: e.string().min(2).max(128),
                                size: e.array().items(e.number().min(1)).length(2),
                                privacy: e.number().default(_.RYY.PRIVATE).valid([_.RYY.PRIVATE, _.RYY.PUBLIC])
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
                            supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
                            type: e.number().default(_.IIU.PLAYING).valid(_.IIU.PLAYING, _.IIU.LISTENING, _.IIU.WATCHING, _.IIU.COMPETING)
                        })
                        .allow(null)
                }),
        handler(e) {
            var t, n, i, l, g, I, C;
            let N,
                {
                    socket: v,
                    args: { pid: S, activity: T },
                    isSocketConnected: b
                } = e;
            if (![f.He.IPC, f.He.WEBSOCKET, f.He.POST_MESSAGE].includes(v.transport)) throw new m.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'command not available from "'.concat(v.transport, '" transport'));
            if (null == S && f.He.IPC === v.transport) throw new m.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'nonzero pid required');
            if (null == T)
                return (
                    a.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: v.id,
                        pid: S,
                        activity: T
                    }),
                    Promise.resolve(T)
                );
            T.name = v.application.name;
            let A = v.application.id;
            T.application_id = A;
            let Z = v.transport === f.He.POST_MESSAGE,
                x = (0, p.S5)(T, Z);
            if ((x > 0 && (T.flags = x), null != A && (0, s.Kb)(A) && Z)) {
                let e = o.ZP.getCurrentEmbeddedActivity();
                if ((null == e ? void 0 : e.applicationId) === A) {
                    let t = e.compositeInstanceId;
                    null != t &&
                        (T.secrets = {
                            join: null !== (l = null === (i = T.secrets) || void 0 === i ? void 0 : i.join) && void 0 !== l ? l : t,
                            ...(null !== (g = T.secrets) && void 0 !== g ? g : {})
                        }),
                        (T.party = {
                            size: null !== (I = null === (n = T.party) || void 0 === n ? void 0 : n.size) && void 0 !== I ? I : c.M$,
                            ...(null !== (C = T.party) && void 0 !== C ? C : {})
                        }),
                        (T.flags = T.flags | c.RI);
                }
            }
            delete T.instance, null === (t = T.party) || void 0 === t || delete t.privacy;
            let { assets: L, party: y, secrets: P, timestamps: O, buttons: R, type: j } = T;
            if ((null == j && (T.type = _.IIU.PLAYING), null != P)) {
                let e = r()
                    .values(P)
                    .filter((e) => !!e);
                if (null != y && r().intersection(e, [y.id]).length > 0 && !E.includes(v.application.id)) throw new m.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                if (r().uniq(e).length < e.length) throw new m.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                if (null != R) throw new m.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
            }
            if ((null != R && ((T.metadata = { button_urls: R.map((e) => e.url) }), (T.buttons = R.map((e) => e.label))), null != O)) for (let e of Object.keys(O)) Date.now().toString().length - O[e].toString().length > 2 && (O[e] = Math.floor(O[e] * h.Z.Millis.SECOND));
            if (null == L) N = Promise.resolve([]);
            else {
                if (null == v.application || null == v.application.id) throw Error();
                N = (0, u.fetchAssetIds)(v.application.id, [L.large_image, L.small_image]);
            }
            return N.then((e) => {
                var t, n;
                let [i, r] = e;
                if ((null != L && (null != i ? (L.large_image = i) : delete L.large_image, null != r ? (L.small_image = r) : delete L.small_image), !b())) return;
                a.Z.dispatch({
                    type: 'LOCAL_ACTIVITY_UPDATE',
                    socketId: v.id,
                    pid: S,
                    activity: T
                });
                let { secrets: l, party: s } = T,
                    o = {
                        application_id: v.application.id,
                        type: T.type,
                        name: T.name,
                        details: null !== (t = T.details) && void 0 !== t ? t : '',
                        state: null !== (n = T.state) && void 0 !== n ? n : ''
                    };
                return null != l && ((o.has_match_secret = !!l.match), (o.has_join_secret = !!l.join)), null != L && (o.has_images = !!(L.large_image || L.small_image)), null != s && ((o.party_max = null != s.size ? s.size[1] : void 0), (o.party_id = s.id)), d.default.track(_.rMx.ACTIVITY_UPDATED, o), T;
            });
        }
    }
};
