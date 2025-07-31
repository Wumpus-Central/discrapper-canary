n.d(t, { default: () => j });
var r = n(255367),
    l = n(73800),
    i = n(990547),
    o = n(481060),
    a = n(957115),
    s = n(157283),
    c = n(328171),
    u = n(891802),
    m = n(332664),
    b = n(13137),
    d = n(538211),
    f = n(698066),
    p = n(626135),
    _ = n(981631),
    O = n(531578),
    g = n(70722),
    y = n(388032),
    h = n(760359);
let v = [g.kr.OTHER];
function j(e) {
    let { isStreamer: t, stream: j, streamApplication: x, onClose: S, transitionState: w, analyticsData: E } = e;
    l.useEffect(() => {
        p.default.track(_.rMx.OPEN_MODAL, {
            type: 'Stream Problem Report',
            other_user_id: j.ownerId,
            application_id: null != x ? x.id : null,
            application_name: null != x ? x.name : null,
            game_id: null != x ? x.id : null,
            source: 'Stream End'
        });
    }, [j.ownerId, x]);
    let { showRefreshedStreamTaxonomy: k } = (0, s.u)({ location: 'StreamFeedback' }),
        { surveyEmojiKind: C } = (0, c.R)({ location: 'StreamFeedback' });
    function P(e) {
        var t, l, i;
        let { dontShowAgain: s, rating: c, feedback: u } = e;
        if (
            (s &&
                (0, a.Uv)({
                    feedbackType: O.nw.STREAM,
                    location: 'StreamFeedback'
                }),
            null != c)
        ) {
            if (k) {
                let { category: n, problem: r } = e;
                (0, f.Z)({
                    problem: null != (t = null == r ? void 0 : r.value) ? t : null,
                    category: n,
                    variant: null != (l = null == r ? void 0 : r.variant) ? l : null,
                    stream: j,
                    feedback: u,
                    streamApplication: x,
                    analyticsData: E,
                    location: 'Stream End',
                    rating: c
                });
            } else {
                let { problem: t } = e;
                (0, f.Z)({
                    problem: null != (i = null == t ? void 0 : t.value) ? i : null,
                    stream: j,
                    feedback: u,
                    streamApplication: x,
                    analyticsData: E,
                    location: 'Stream End',
                    rating: c
                });
            }
            null != e.problem &&
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
                                }
                                return e;
                            })({ body: y.intl.string(y.t.mMTVnp) }, t)
                        );
                });
        }
    }
    let { showVibesHoneypot: R } = (0, u.X)({ location: 'StreamFeedback' }),
        T = y.intl.string(y.t['5smP3d']),
        N = y.intl.string(y.t['0uxA2d']),
        L = y.intl.string(y.t.CqjnLC),
        F = {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: E.media_session_id,
                rtc_connection_id: E.rtc_connection_id,
                parent_media_session_id: E.parent_media_session_id
            }
        };
    if (k) {
        let e = {
                value: O.tX.CONNECTION,
                label: y.intl.string(h.default.FVhMw8),
                problemsHeader: y.intl.string(y.t['6Y1t5O']),
                problemOptions: (0, a.Z1)(),
                freeformConfig: {
                    value: O.T_.FREEFORM,
                    label: y.intl.string(y.t['emlT9/'])
                }
            },
            n = {
                value: O.tX.AUDIO,
                label: y.intl.string(h.default.PL2l6O),
                problemsHeader: y.intl.string(y.t['6Y1t5O']),
                problemOptions: (0, a.w9)({ isMobile: !1 }),
                freeformConfig: {
                    value: O.b9.FREEFORM,
                    label: y.intl.string(y.t['emlT9/'])
                }
            },
            l = {
                value: O.tX.VIDEO,
                label: y.intl.string(h.default['0WFzPj']),
                problemsHeader: y.intl.string(y.t['6Y1t5O']),
                problemOptions: (0, a.NX)(),
                freeformConfig: {
                    value: O.ct.FREEFORM,
                    label: y.intl.string(y.t['emlT9/'])
                }
            },
            i = {
                value: O.tX.PEOPLE,
                label: y.intl.string(h.default.Moa3W1),
                problemsHeader: y.intl.string(y.t['6Y1t5O']),
                problemOptions: (0, a.hP)(),
                freeformConfig: {
                    value: O.s_.FREEFORM,
                    label: y.intl.string(y.t['emlT9/'])
                }
            },
            o = {
                value: t ? O.tX.STREAMING : O.tX.STREAM_WATCHING,
                label: y.intl.string(t ? h.default['0ZBLiY'] : h.default.TVTIT0),
                problemsHeader: y.intl.string(y.t['6Y1t5O']),
                problemOptions: (0, a.Ez)({ isStreamer: t }),
                freeformConfig: {
                    value: O.MJ.FREEFORM,
                    label: y.intl.string(y.t['emlT9/'])
                }
            };
        return (0, r.jsx)(b.Z, {
            onSubmit: P,
            onClose: S,
            ratingHeader: T,
            ratingEmojiKind: C,
            ratingBody: t ? N : L,
            categoriesHeader: y.intl.string(h.default['tq859/']),
            optionsTree: [e, n, l, o, i],
            impression: F,
            transitionState: w
        });
    }
    return (0, r.jsx)(m.Z, {
        modalType: 'stream',
        header: T,
        ratingEmojiKind: C,
        impression: F,
        body: t ? N : L,
        problemTitle: y.intl.string(y.t['6Y1t5O']),
        problems: (0, d.Z)({
            isStreamer: t,
            isEndStream: !0,
            showVibesHoneypot: R
        }),
        freeformNeededProblems: v,
        onSubmit: P,
        onClose: S,
        transitionState: w,
        otherKey: g.kr.OTHER
    });
}
