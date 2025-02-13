n.d(t, { Z: () => C }), n(47120), n(789020), n(411104);
var i = n(392711),
    l = n.n(i),
    r = n(243814),
    a = n(570140),
    s = n(774226),
    o = n(317381),
    c = n(173439),
    d = n(812206),
    u = n(626135),
    h = n(81063),
    m = n(70956),
    p = n(996106),
    g = n(914946),
    _ = n(452426),
    f = n(186901),
    E = n(981631);
let I = ['349134787773988865'],
    C = {
        [E.Etm.SET_ACTIVITY]: {
            scope: {
                [f.Gp.ANY]: [r.x.RPC, r.x.RPC_ACTIVITIES_WRITE, f.lH]
            },
            validation: (e) =>
                (0, _.Z)(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: (0, _.Z)(e)
                            .keys({
                                state: e.string().min(2).max(128),
                                details: e.string().min(2).max(128),
                                timestamps: (0, _.Z)(e).keys({
                                    start: e.number().min(1),
                                    end: e.number().min(1)
                                }),
                                assets: (0, _.Z)(e).keys({
                                    large_image: e.string().min(1).max(256),
                                    large_text: e.string().min(2).max(128),
                                    small_image: e.string().min(1).max(256),
                                    small_text: e.string().min(2).max(128)
                                }),
                                party: (0, _.Z)(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(1)).length(2),
                                    privacy: e.number().default(E.RYY.PRIVATE).valid([E.RYY.PRIVATE, E.RYY.PUBLIC])
                                }),
                                secrets: (0, _.Z)(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128)
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        (0, _.Z)(e).keys({
                                            label: e.string().min(1).max(32).required(),
                                            url: e.string().uri().min(1).max(512).required()
                                        })
                                    )
                                    .min(1)
                                    .max(2),
                                instance: e.boolean(),
                                supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(3),
                                type: e.number().default(E.IIU.PLAYING).valid(E.IIU.PLAYING, E.IIU.LISTENING, E.IIU.WATCHING, E.IIU.COMPETING)
                            })
                            .allow(null)
                    }),
            handler(e) {
                var t, n, i, r, _, C, N;
                let v,
                    {
                        socket: T,
                        args: { pid: S, activity: b },
                        isSocketConnected: A
                    } = e;
                if (![f.He.IPC, f.He.WEBSOCKET, f.He.POST_MESSAGE].includes(T.transport)) throw new p.Z({ errorCode: E.lTL.INVALID_COMMAND }, 'command not available from "'.concat(T.transport, '" transport'));
                if (null == S && f.He.IPC === T.transport) throw new p.Z({ errorCode: E.lTL.INVALID_COMMAND }, 'nonzero pid required');
                if (null == b)
                    return (
                        a.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: T.id,
                            pid: S,
                            activity: b
                        }),
                        Promise.resolve(b)
                    );
                b.name = T.application.name;
                let Z = T.application.id;
                b.application_id = Z;
                let x = T.transport === f.He.POST_MESSAGE,
                    L = (0, g.S5)(b, x);
                L > 0 && (b.flags = L);
                let y = d.Z.getApplication(null != Z ? Z : void 0);
                if (null != y && (0, s.Kb)(y) && x) {
                    let e = o.ZP.getCurrentEmbeddedActivity();
                    if ((null == e ? void 0 : e.applicationId) === y.id) {
                        let t = e.compositeInstanceId;
                        null != t &&
                            (b.secrets = {
                                join: null !== (r = null === (i = b.secrets) || void 0 === i ? void 0 : i.join) && void 0 !== r ? r : t,
                                ...(null !== (_ = b.secrets) && void 0 !== _ ? _ : {})
                            }),
                            (b.party = {
                                size: null !== (C = null === (n = b.party) || void 0 === n ? void 0 : n.size) && void 0 !== C ? C : c.M$,
                                ...(null !== (N = b.party) && void 0 !== N ? N : {})
                            }),
                            (b.flags = b.flags | c.Cj);
                    }
                }
                delete b.instance, null === (t = b.party) || void 0 === t || delete t.privacy;
                let { assets: P, party: O, secrets: R, timestamps: j, buttons: D, type: w } = b;
                if ((null == w && (b.type = E.IIU.PLAYING), null != R)) {
                    let e = l()
                        .values(R)
                        .filter((e) => !!e);
                    if (null != O && l().intersection(e, [O.id]).length > 0 && !I.includes(T.application.id)) throw new p.Z({ errorCode: E.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (l().uniq(e).length < e.length) throw new p.Z({ errorCode: E.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != D) throw new p.Z({ errorCode: E.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != D && ((b.metadata = { button_urls: D.map((e) => e.url) }), (b.buttons = D.map((e) => e.label))), null != j)) for (let e of Object.keys(j)) Date.now().toString().length - j[e].toString().length > 2 && (j[e] = Math.floor(j[e] * m.Z.Millis.SECOND));
                if (null == P) v = Promise.resolve([]);
                else {
                    if (null == T.application || null == T.application.id) throw Error();
                    v = (0, h.fetchAssetIds)(T.application.id, [P.large_image, P.small_image]);
                }
                return v.then((e) => {
                    var t, n;
                    let [i, l] = e;
                    if ((null != P && (null != i ? (P.large_image = i) : delete P.large_image, null != l ? (P.small_image = l) : delete P.small_image), !A())) return;
                    a.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: T.id,
                        pid: S,
                        activity: b
                    });
                    let { secrets: r, party: s } = b,
                        o = {
                            application_id: T.application.id,
                            type: b.type,
                            name: b.name,
                            details: null !== (t = b.details) && void 0 !== t ? t : '',
                            state: null !== (n = b.state) && void 0 !== n ? n : ''
                        };
                    return null != r && ((o.has_match_secret = !!r.match), (o.has_join_secret = !!r.join)), null != P && (o.has_images = !!(P.large_image || P.small_image)), null != s && ((o.party_max = null != s.size && s.size[1] > 0 ? s.size[1] : void 0), (o.party_id = s.id)), u.default.track(E.rMx.ACTIVITY_UPDATED, o), b;
                });
            }
        }
    };
