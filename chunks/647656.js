n.d(t, { Z: () => I }), n(47120), n(789020), n(411104);
var i = n(392711),
    l = n.n(i),
    r = n(243814),
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
    _ = n(186901),
    f = n(981631);
let E = ['349134787773988865'],
    I = {
        [f.Etm.SET_ACTIVITY]: {
            scope: {
                [_.Gp.ANY]: [r.x.RPC, r.x.RPC_ACTIVITIES_WRITE, _.lH]
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
                                    privacy: e.number().default(f.RYY.PRIVATE).valid([f.RYY.PRIVATE, f.RYY.PUBLIC])
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
                                type: e.number().default(f.IIU.PLAYING).valid(f.IIU.PLAYING, f.IIU.LISTENING, f.IIU.WATCHING, f.IIU.COMPETING)
                            })
                            .allow(null)
                    }),
            handler(e) {
                var t, n, i, r, g, I, C;
                let N,
                    {
                        socket: v,
                        args: { pid: T, activity: S },
                        isSocketConnected: Z
                    } = e;
                if (![_.He.IPC, _.He.WEBSOCKET, _.He.POST_MESSAGE].includes(v.transport)) throw new m.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'command not available from "'.concat(v.transport, '" transport'));
                if (null == T && _.He.IPC === v.transport) throw new m.Z({ errorCode: f.lTL.INVALID_COMMAND }, 'nonzero pid required');
                if (null == S)
                    return (
                        a.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: v.id,
                            pid: T,
                            activity: S
                        }),
                        Promise.resolve(S)
                    );
                S.name = v.application.name;
                let A = v.application.id;
                S.application_id = A;
                let x = v.transport === _.He.POST_MESSAGE,
                    b = (0, p.S5)(S, x);
                if ((b > 0 && (S.flags = b), null != A && (0, s.Kb)(A) && x)) {
                    let e = o.ZP.getCurrentEmbeddedActivity();
                    if ((null == e ? void 0 : e.applicationId) === A) {
                        let t = e.compositeInstanceId;
                        null != t &&
                            (S.secrets = {
                                join: null !== (r = null === (i = S.secrets) || void 0 === i ? void 0 : i.join) && void 0 !== r ? r : t,
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
                if ((null == j && (S.type = f.IIU.PLAYING), null != P)) {
                    let e = l()
                        .values(P)
                        .filter((e) => !!e);
                    if (null != y && l().intersection(e, [y.id]).length > 0 && !E.includes(v.application.id)) throw new m.Z({ errorCode: f.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (l().uniq(e).length < e.length) throw new m.Z({ errorCode: f.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != R) throw new m.Z({ errorCode: f.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != R && ((S.metadata = { button_urls: R.map((e) => e.url) }), (S.buttons = R.map((e) => e.label))), null != O)) for (let e of Object.keys(O)) Date.now().toString().length - O[e].toString().length > 2 && (O[e] = Math.floor(O[e] * h.Z.Millis.SECOND));
                if (null == L) N = Promise.resolve([]);
                else {
                    if (null == v.application || null == v.application.id) throw Error();
                    N = (0, u.fetchAssetIds)(v.application.id, [L.large_image, L.small_image]);
                }
                return N.then((e) => {
                    var t, n;
                    let [i, l] = e;
                    if ((null != L && (null != i ? (L.large_image = i) : delete L.large_image, null != l ? (L.small_image = l) : delete L.small_image), !Z())) return;
                    a.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: v.id,
                        pid: T,
                        activity: S
                    });
                    let { secrets: r, party: s } = S,
                        o = {
                            application_id: v.application.id,
                            type: S.type,
                            name: S.name,
                            details: null !== (t = S.details) && void 0 !== t ? t : '',
                            state: null !== (n = S.state) && void 0 !== n ? n : ''
                        };
                    return null != r && ((o.has_match_secret = !!r.match), (o.has_join_secret = !!r.join)), null != L && (o.has_images = !!(L.large_image || L.small_image)), null != s && ((o.party_max = null != s.size && s.size[1] > 0 ? s.size[1] : void 0), (o.party_id = s.id)), d.default.track(f.rMx.ACTIVITY_UPDATED, o), S;
                });
            }
        }
    };
