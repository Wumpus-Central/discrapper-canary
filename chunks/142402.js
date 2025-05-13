n.d(t, { default: () => h });
var r = n(255367),
    i = n(73800),
    l = n(990547),
    o = n(481060),
    a = n(957115),
    s = n(891802),
    c = n(332664),
    u = n(538211),
    d = n(698066),
    b = n(626135),
    m = n(981631),
    p = n(531578),
    f = n(70722),
    _ = n(388032);
let O = [f.kr.OTHER];
function h(e) {
    let { isStreamer: t, stream: h, streamApplication: g, onClose: y, transitionState: j, analyticsData: x } = e;
    i.useEffect(() => {
        b.default.track(m.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: h.ownerId,
            application_id: null != g ? g.id : null,
            application_name: null != g ? g.name : null,
            game_id: null != g ? g.id : null,
            source: 'Stream End'
        });
    }, [h.ownerId, g]);
    let { showFormStyleSurvey: v, hideNeutralOption: S, showVibesHoneypot: k } = (0, s.X)({ location: 'StreamFeedback' }),
        w = v ? _.intl.string(_.t.OR6KNz) : _.intl.string(_.t['5smP3d']),
        E = v ? void 0 : _.intl.string(_.t['0uxA2d']),
        P = v ? void 0 : _.intl.string(_.t.CqjnLC),
        N = S ? [p.aZ.BAD, p.aZ.GOOD] : void 0,
        R = v
            ? {
                  [p.aZ.BAD]: _.intl.string(_.t.ISINlJ),
                  [p.aZ.GOOD]: _.intl.string(_.t.IySkjY)
              }
            : void 0;
    return (0, r.jsx)(c.Z, {
        modalType: 'stream',
        header: w,
        impression: {
            impressionName: l.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: x.media_session_id,
                rtc_connection_id: x.rtc_connection_id,
                parent_media_session_id: x.parent_media_session_id
            }
        },
        body: t ? E : P,
        ratingOptions: N,
        ratingTextLabels: R,
        problemTitle: _.intl.string(_.t['6Y1t5O']),
        problems: (0, u.Z)({
            isStreamer: t,
            isEndStream: !0,
            showVibesHoneypot: k
        }),
        freeformNeededProblems: O,
        onSubmit: function (e) {
            var t;
            let { rating: i, problem: l, dontShowAgain: s, feedback: c } = e;
            s &&
                (0, a.U)({
                    feedbackType: p.nw.STREAM,
                    location: 'StreamFeedback'
                }),
                null != i &&
                    ((0, d.Z)({
                        problem: null != (t = null == l ? void 0 : l.value) ? t : null,
                        stream: h,
                        feedback: c,
                        streamApplication: g,
                        analyticsData: x,
                        location: 'Stream End',
                        rating: i
                    }),
                    null != l &&
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e) {
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
                                    })({ body: _.intl.string(_.t.mMTVnp) }, t)
                                );
                        }));
        },
        onClose: y,
        transitionState: j,
        otherKey: f.kr.OTHER
    });
}
