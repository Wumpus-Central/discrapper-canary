n.d(t, { Z: () => O }), n(388685), n(997841), n(415506), n(35282);
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
let E = ['349134787773988865'],
    O = {
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
                var t, n, r, l;
                let m,
                    {
                        socket: O,
                        args: { pid: y, activity: I },
                        isSocketConnected: v
                    } = e;
                if (![b.He.IPC, b.He.WEBSOCKET, b.He.POST_MESSAGE].includes(O.transport)) throw new g.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'command not available from "'.concat(O.transport, '" transport'));
                if (null == y && b.He.IPC === O.transport) throw new g.Z({ errorCode: _.lTL.INVALID_COMMAND }, 'nonzero pid required');
                if (null == I)
                    return (
                        a.Z.dispatch({
                            type: 'LOCAL_ACTIVITY_UPDATE',
                            socketId: O.id,
                            pid: y,
                            activity: I
                        }),
                        Promise.resolve(I)
                    );
                let C = {};
                I.name = O.application.name;
                let S = O.application.id;
                I.application_id = S;
                let N = O.transport === b.He.POST_MESSAGE,
                    T = d.Z.getApplication(null != S ? S : void 0),
                    P = 0;
                if (null != T && (0, o.Kb)(T) && N) {
                    let e = s.ZP.getCurrentEmbeddedActivity();
                    if ((null == e ? void 0 : e.applicationId) === T.id) {
                        let t = e.compositeInstanceId;
                        null != t &&
                            ((C.embedded_activity_instance_id = t),
                            (P |= (0, c.Z)({
                                flags: P,
                                embeddedActivity: e
                            }))),
                            (I.party = (function (e) {
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
                            })({ size: null != (r = null == (n = I.party) ? void 0 : n.size) ? r : c.M }, null != (l = I.party) ? l : {}));
                    }
                }
                let j = (0, u.S5)(I, N);
                j > 0 && (I.flags = j | P), delete I.instance, null == (t = I.party) || delete t.privacy;
                let { assets: A, party: Z, secrets: x, timestamps: w, buttons: L, type: R } = I;
                if ((null == R && (I.type = _.IIU.PLAYING), null != x)) {
                    let e = i()
                        .values(x)
                        .filter((e) => !!e);
                    if (null != Z && i().intersection(e, [Z.id]).length > 0 && !E.includes(O.application.id)) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot match the party id');
                    if (i().uniq(e).length < e.length) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets must be unique');
                    if (null != L) throw new g.Z({ errorCode: _.lTL.INVALID_ACTIVITY_SECRET }, 'secrets cannot currently be sent with buttons');
                }
                if ((null != L && ((C.button_urls = L.map((e) => e.url)), (I.buttons = L.map((e) => e.label))), (I.metadata = C), null != w)) for (let e of Object.keys(w)) Date.now().toString().length - w[e].toString().length > 2 && (w[e] = Math.floor(w[e] * f.Z.Millis.SECOND));
                if (null == A) m = Promise.resolve([]);
                else {
                    if (null == O.application || null == O.application.id) throw Error();
                    m = (0, h.hR)(O.application.id, [A.large_image, A.small_image]);
                }
                return m.then((e) => {
                    var t, n;
                    let [r, i] = e;
                    if ((null != A && (null != r ? (A.large_image = r) : delete A.large_image, null != i ? (A.small_image = i) : delete A.small_image), !v())) return;
                    a.Z.dispatch({
                        type: 'LOCAL_ACTIVITY_UPDATE',
                        socketId: O.id,
                        pid: y,
                        activity: I
                    });
                    let { secrets: l, party: o } = I,
                        s = {
                            application_id: O.application.id,
                            type: I.type,
                            name: I.name,
                            details: null != (t = I.details) ? t : '',
                            state: null != (n = I.state) ? n : ''
                        };
                    return null != l && ((s.has_match_secret = !!l.match), (s.has_join_secret = !!l.join)), null != A && (s.has_images = !!(A.large_image || A.small_image)), null != o && ((s.party_max = null != o.size && o.size[1] > 0 ? o.size[1] : void 0), (s.party_id = o.id)), p.default.track(_.rMx.ACTIVITY_UPDATED, s), I;
                });
            }
        }
    };
