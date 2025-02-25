n.d(t, { Z: () => N }), n(47120), n(789020), n(411104), n(301563);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    o = n(570140),
    a = n(774226),
    s = n(317381),
    c = n(898036),
    u = n(812206),
    d = n(626135),
    p = n(81063),
    h = n(70956),
    f = n(996106),
    g = n(914946),
    m = n(452426),
    b = n(186901),
    _ = n(981631);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let O = ['349134787773988865'],
    N = {
        [_.Etm.SET_ACTIVITY]: {
            scope: {
                [b.Gp.ANY]: [l.x.RPC, l.x.RPC_ACTIVITIES_WRITE, b.lH]
            },
            validation: (e) =>
                (0, m.Z)(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: (0, m.Z)(e)
                            .keys({
                                state: e.string().min(2).max(128),
                                details: e.string().min(2).max(128),
                                timestamps: (0, m.Z)(e).keys({
                                    start: e.number().min(1),
                                    end: e.number().min(1)
                                }),
                                assets: (0, m.Z)(e).keys({
                                    large_image: e.string().min(1).max(256),
                                    large_text: e.string().min(2).max(128),
                                    small_image: e.string().min(1).max(256),
                                    small_text: e.string().min(2).max(128)
                                }),
                                party: (0, m.Z)(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(_.RYY.PRIVATE).valid([_.RYY.PRIVATE, _.RYY.PUBLIC])
                                }),
                                secrets: (0, m.Z)(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128)
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        (0, m.Z)(e).keys({
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
                var t, n, r, l, m, N, v;
                let y,
                    {
                        socket: I,
                        args: { pid: C, activity: S },
                        isSocketConnected: T
                    } = e;
                if (![b.He.IPC, b.He.WEBSOCKET, b.He.POST_MESSAGE].includes(I.transport)) throw new f.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'command not available from "'.concat(I.transport, '" transport'));
                if (null == C && b.He.IPC === I.transport) throw new f.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'nonzero pid required');
                if (null == S)
                    return (
                        o.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: I.id,
                            pid: C,
                            activity: S
                        }),
                        Promise.resolve(S)
                    );
                let P = {};
                S.name = I.application.name;
                let j = I.application.id;
                S.application_id = j;
                let A = I.transport === b.He.POST_MESSAGE,
                    Z = u.Z.getApplication(null != j ? j : void 0),
                    x = 0;
                if (null != Z && (0, a.Kb)(Z) && A) {
                    let e = s.ZP.getCurrentEmbeddedActivity();
                    if ((null == e ? void 0 : e.applicationId) === Z.id) {
                        let t = e.compositeInstanceId;
                        null != t &&
                            ((S.secrets = E({ join: null !== (l = null === (r = S.secrets) || void 0 === r ? void 0 : r.join) && void 0 !== l ? l : crypto.randomUUID() }, null !== (m = S.secrets) && void 0 !== m ? m : {})),
                            (P.embedded_activity_instance_id = t),
                            (x |= (0, c.ZW)({
                                flags: x,
                                embeddedActivity: e
                            }))),
                            (S.party = E(
                                {
                                    id: crypto.randomUUID(),
                                    size: null !== (N = null === (n = S.party) || void 0 === n ? void 0 : n.size) && void 0 !== N ? N : c.M$
                                },
                                null !== (v = S.party) && void 0 !== v ? v : {}
                            ));
                    }
                }
                let L = (0, g.S5)(S, A);
                L > 0 && (S.flags = L | x), delete S.instance, null === (t = S.party) || void 0 === t || delete t.privacy;
                let { assets: w, party: R, secrets: D, timestamps: k, buttons: M, type: U } = S;
                if ((null == U && (S.type = _.IIU.PLAYING), null != D)) {
                    let e = i()
                        .values(D)
                        .filter((e) => !!e);
                    if (null != R && i().intersection(e, [R.id]).length > 0 && !O.includes(I.application.id)) throw new f.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (i().uniq(e).length < e.length) throw new f.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != M) throw new f.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != M && ((P.button_urls = M.map((e) => e.url)), (S.buttons = M.map((e) => e.label))), (S.metadata = P), null != k)) for (let e of Object.keys(k)) Date.now().toString().length - k[e].toString().length > 2 && (k[e] = Math.floor(k[e] * h.Z.Millis.SECOND));
                if (null == w) y = Promise.resolve([]);
                else {
                    if (null == I.application || null == I.application.id) throw Error();
                    y = (0, p.fetchAssetIds)(I.application.id, [w.large_image, w.small_image]);
                }
                return y.then((e) => {
                    var t, n;
                    let [r, i] = e;
                    if ((null != w && (null != r ? (w.large_image = r) : delete w.large_image, null != i ? (w.small_image = i) : delete w.small_image), !T())) return;
                    o.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: I.id,
                        pid: C,
                        activity: S
                    });
                    let { secrets: l, party: a } = S,
                        s = {
                            application_id: I.application.id,
                            type: S.type,
                            name: S.name,
                            details: null !== (t = S.details) && void 0 !== t ? t : '',
                            state: null !== (n = S.state) && void 0 !== n ? n : ''
                        };
                    return null != l && ((s.has_match_secret = !!l.match), (s.has_join_secret = !!l.join)), null != w && (s.has_images = !!(w.large_image || w.small_image)), null != a && ((s.party_max = null != a.size && a.size[1] > 0 ? a.size[1] : void 0), (s.party_id = a.id)), d.default.track(_.rMx.ACTIVITY_UPDATED, s), S;
                });
            }
        }
    };
