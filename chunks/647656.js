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
            let v,
                {
                    socket: N,
                    args: { pid: T, activity: S },
                    isSocketConnected: b
                } = e;
            if (![f.He.IPC, f.He.WEBSOCKET, f.He.POST_MESSAGE].includes(N.transport)) throw new m.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'command not available from "'.concat(N.transport, '" transport'));
            if (null == T && f.He.IPC === N.transport) throw new m.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'nonzero pid required');
            if (null == S)
                return (
                    a.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: N.id,
                        pid: T,
                        activity: S
                    }),
                    Promise.resolve(S)
                );
            S.name = N.application.name;
            let A = N.application.id;
            S.application_id = A;
            let Z = N.transport === f.He.POST_MESSAGE,
                x = (0, p.S5)(S, Z);
            if ((x > 0 && (S.flags = x), null != A && (0, s.Kb)(A) && Z)) {
                let e = o.ZP.getCurrentEmbeddedActivity();
                if ((null == e ? void 0 : e.applicationId) === A) {
                    let t = e.compositeInstanceId;
                    null != t &&
                        (S.secrets = {
                            join: null !== (l = null === (i = S.secrets) || void 0 === i ? void 0 : i.join) && void 0 !== l ? l : t,
                            ...(null !== (g = S.secrets) && void 0 !== g ? g : {})
                        }),
                        (S.party = {
                            size: null !== (I = null === (n = S.party) || void 0 === n ? void 0 : n.size) && void 0 !== I ? I : c.M$,
                            ...(null !== (C = S.party) && void 0 !== C ? C : {})
                        }),
                        (S.flags = S.flags | c.Cj);
                }
            }
            delete S.instance, null === (t = S.party) || void 0 === t || delete t.privacy;
            let { assets: L, party: y, secrets: P, timestamps: O, buttons: R, type: j } = S;
            if ((null == j && (S.type = _.IIU.PLAYING), null != P)) {
                let e = r()
                    .values(P)
                    .filter((e) => !!e);
                if (null != y && r().intersection(e, [y.id]).length > 0 && !E.includes(N.application.id)) throw new m.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                if (r().uniq(e).length < e.length) throw new m.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                if (null != R) throw new m.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
            }
            if ((null != R && ((S.metadata = { button_urls: R.map((e) => e.url) }), (S.buttons = R.map((e) => e.label))), null != O)) for (let e of Object.keys(O)) Date.now().toString().length - O[e].toString().length > 2 && (O[e] = Math.floor(O[e] * h.Z.Millis.SECOND));
            if (null == L) v = Promise.resolve([]);
            else {
                if (null == N.application || null == N.application.id) throw Error();
                v = (0, u.fetchAssetIds)(N.application.id, [L.large_image, L.small_image]);
            }
            return v.then((e) => {
                var t, n;
                let [i, r] = e;
                if ((null != L && (null != i ? (L.large_image = i) : delete L.large_image, null != r ? (L.small_image = r) : delete L.small_image), !b())) return;
                a.Z.dispatch({
                    type: 'LOCAL_ACTIVITY_UPDATE',
                    socketId: N.id,
                    pid: T,
                    activity: S
                });
                let { secrets: l, party: s } = S,
                    o = {
                        application_id: N.application.id,
                        type: S.type,
                        name: S.name,
                        details: null !== (t = S.details) && void 0 !== t ? t : '',
                        state: null !== (n = S.state) && void 0 !== n ? n : ''
                    };
                return null != l && ((o.has_match_secret = !!l.match), (o.has_join_secret = !!l.join)), null != L && (o.has_images = !!(L.large_image || L.small_image)), null != s && ((o.party_max = null != s.size ? s.size[1] : void 0), (o.party_id = s.id)), d.default.track(_.rMx.ACTIVITY_UPDATED, o), S;
            });
        }
    }
};
