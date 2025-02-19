n.d(t, { Z: () => N }), n(47120), n(789020), n(411104), n(301563);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    o = n(570140),
    a = n(774226),
    s = n(317381),
    c = n(173439),
    u = n(812206),
    d = n(626135),
    p = n(81063),
    h = n(70956),
    g = n(996106),
    f = n(914946),
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
                                    size: e.array().items(e.number().min(1)).length(2),
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
                if (![b.He.IPC, b.He.WEBSOCKET, b.He.POST_MESSAGE].includes(I.transport)) throw new g.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'command not available from "'.concat(I.transport, '" transport'));
                if (null == C && b.He.IPC === I.transport) throw new g.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'nonzero pid required');
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
                S.name = I.application.name;
                let P = I.application.id;
                S.application_id = P;
                let j = I.transport === b.He.POST_MESSAGE,
                    A = (0, f.S5)(S, j);
                A > 0 && (S.flags = A);
                let Z = u.Z.getApplication(null != P ? P : void 0);
                if (null != Z && (0, a.Kb)(Z) && j) {
                    let e = s.ZP.getCurrentEmbeddedActivity();
                    if ((null == e ? void 0 : e.applicationId) === Z.id) {
                        let t = e.compositeInstanceId;
                        null != t && (S.secrets = E({ join: null !== (l = null === (r = S.secrets) || void 0 === r ? void 0 : r.join) && void 0 !== l ? l : t }, null !== (m = S.secrets) && void 0 !== m ? m : {})), (S.party = E({ size: null !== (N = null === (n = S.party) || void 0 === n ? void 0 : n.size) && void 0 !== N ? N : c.M$ }, null !== (v = S.party) && void 0 !== v ? v : {})), (S.flags = S.flags | c.Cj);
                    }
                }
                delete S.instance, null === (t = S.party) || void 0 === t || delete t.privacy;
                let { assets: x, party: L, secrets: w, timestamps: R, buttons: D, type: k } = S;
                if ((null == k && (S.type = _.IIU.PLAYING), null != w)) {
                    let e = i()
                        .values(w)
                        .filter((e) => !!e);
                    if (null != L && i().intersection(e, [L.id]).length > 0 && !O.includes(I.application.id)) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (i().uniq(e).length < e.length) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != D) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != D && ((S.metadata = { button_urls: D.map((e) => e.url) }), (S.buttons = D.map((e) => e.label))), null != R)) for (let e of Object.keys(R)) Date.now().toString().length - R[e].toString().length > 2 && (R[e] = Math.floor(R[e] * h.Z.Millis.SECOND));
                if (null == x) y = Promise.resolve([]);
                else {
                    if (null == I.application || null == I.application.id) throw Error();
                    y = (0, p.fetchAssetIds)(I.application.id, [x.large_image, x.small_image]);
                }
                return y.then((e) => {
                    var t, n;
                    let [r, i] = e;
                    if ((null != x && (null != r ? (x.large_image = r) : delete x.large_image, null != i ? (x.small_image = i) : delete x.small_image), !T())) return;
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
                    return null != l && ((s.has_match_secret = !!l.match), (s.has_join_secret = !!l.join)), null != x && (s.has_images = !!(x.large_image || x.small_image)), null != a && ((s.party_max = null != a.size && a.size[1] > 0 ? a.size[1] : void 0), (s.party_id = a.id)), d.default.track(_.rMx.ACTIVITY_UPDATED, s), S;
                });
            }
        }
    };
