n.d(t, { Z: () => y }), n(388685), n(997841), n(415506), n(35282);
var r = n(392711),
    i = n.n(r),
    l = n(243814),
    a = n(570140),
    o = n(774226),
    s = n(317381),
    c = n(898036),
    u = n(212517),
    d = n(812206),
    p = n(626135),
    h = n(81063),
    f = n(70956),
    g = n(996106),
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
    y = {
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
                var t, n, r, l, m, y, I;
                let v,
                    {
                        socket: C,
                        args: { pid: S, activity: N },
                        isSocketConnected: T
                    } = e;
                if (![b.He.IPC, b.He.WEBSOCKET, b.He.POST_MESSAGE].includes(C.transport)) throw new g.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'command not available from "'.concat(C.transport, '" transport'));
                if (null == S && b.He.IPC === C.transport) throw new g.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'nonzero pid required');
                if (null == N)
                    return (
                        a.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: C.id,
                            pid: S,
                            activity: N
                        }),
                        Promise.resolve(N)
                    );
                let P = {};
                N.name = C.application.name;
                let j = C.application.id;
                N.application_id = j;
                let A = C.transport === b.He.POST_MESSAGE,
                    Z = d.Z.getApplication(null != j ? j : void 0),
                    x = 0;
                if (null != Z && (0, o.Kb)(Z) && A) {
                    let e = s.ZP.getCurrentEmbeddedActivity();
                    if ((null == e ? void 0 : e.applicationId) === Z.id) {
                        let t = e.compositeInstanceId;
                        null != t &&
                            ((N.secrets = E({ join: null != (l = null == (r = N.secrets) ? void 0 : r.join) ? l : crypto.randomUUID() }, null != (m = N.secrets) ? m : {})),
                            (P.embedded_activity_instance_id = t),
                            (x |= (0, c.Z)({
                                flags: x,
                                embeddedActivity: e
                            }))),
                            (N.party = E(
                                {
                                    id: crypto.randomUUID(),
                                    size: null != (y = null == (n = N.party) ? void 0 : n.size) ? y : c.M
                                },
                                null != (I = N.party) ? I : {}
                            ));
                    }
                }
                let w = (0, u.S5)(N, A);
                w > 0 && (N.flags = w | x), delete N.instance, null == (t = N.party) || delete t.privacy;
                let { assets: L, party: R, secrets: D, timestamps: k, buttons: M, type: U } = N;
                if ((null == U && (N.type = _.IIU.PLAYING), null != D)) {
                    let e = i()
                        .values(D)
                        .filter((e) => !!e);
                    if (null != R && i().intersection(e, [R.id]).length > 0 && !O.includes(C.application.id)) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (i().uniq(e).length < e.length) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != M) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != M && ((P.button_urls = M.map((e) => e.url)), (N.buttons = M.map((e) => e.label))), (N.metadata = P), null != k)) for (let e of Object.keys(k)) Date.now().toString().length - k[e].toString().length > 2 && (k[e] = Math.floor(k[e] * f.Z.Millis.SECOND));
                if (null == L) v = Promise.resolve([]);
                else {
                    if (null == C.application || null == C.application.id) throw Error();
                    v = (0, h.hR)(C.application.id, [L.large_image, L.small_image]);
                }
                return v.then((e) => {
                    var t, n;
                    let [r, i] = e;
                    if ((null != L && (null != r ? (L.large_image = r) : delete L.large_image, null != i ? (L.small_image = i) : delete L.small_image), !T())) return;
                    a.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: C.id,
                        pid: S,
                        activity: N
                    });
                    let { secrets: l, party: o } = N,
                        s = {
                            application_id: C.application.id,
                            type: N.type,
                            name: N.name,
                            details: null != (t = N.details) ? t : '',
                            state: null != (n = N.state) ? n : ''
                        };
                    return null != l && ((s.has_match_secret = !!l.match), (s.has_join_secret = !!l.join)), null != L && (s.has_images = !!(L.large_image || L.small_image)), null != o && ((s.party_max = null != o.size && o.size[1] > 0 ? o.size[1] : void 0), (s.party_id = o.id)), p.default.track(_.rMx.ACTIVITY_UPDATED, s), N;
                });
            }
        }
    };
