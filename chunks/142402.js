n.d(t, { default: () => j });
var r = n(951288),
    l = n(647438),
    i = n(990547),
    o = n(481060),
    a = n(957115),
    s = n(157283),
    c = n(328171),
    u = n(332664),
    m = n(13137),
    d = n(538211),
    b = n(698066),
    f = n(626135),
    p = n(981631),
    _ = n(531578),
    g = n(70722),
    O = n(388032),
    y = n(805388);
let v = [g.kr.OTHER];
function j(e) {
    let { isStreamer: t, stream: j, streamApplication: h, onClose: x, transitionState: E, analyticsData: S } = e;
    l.useEffect(() => {
        f.default.track(p.rMx.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: j.ownerId,
            application_id: null != h ? h.id : null,
            application_name: null != h ? h.name : null,
            game_id: null != h ? h.id : null,
            source: "Stream End",
        });
    }, [j.ownerId, h]);
    let { showRefreshedStreamTaxonomy: C } = (0, s.u)({ location: "StreamFeedback" }),
        { surveyEmojiKind: k } = (0, c.R)({ location: "StreamFeedback" });
    function w(e) {
        var t, l, i;
        let { dontShowAgain: s, rating: c, feedback: u } = e;
        if (
            (s &&
                (0, a.Uv)({
                    feedbackType: _.nw.STREAM,
                    location: "StreamFeedback",
                }),
            null != c)
        ) {
            if (C) {
                let { category: n, problem: r } = e;
                (0, b.Z)({
                    problem: null != (t = null == r ? void 0 : r.value) ? t : null,
                    category: n,
                    variant: null != (l = null == r ? void 0 : r.variant) ? l : null,
                    stream: j,
                    feedback: u,
                    streamApplication: h,
                    analyticsData: S,
                    location: "Stream End",
                    rating: c,
                });
            } else {
                let { problem: t } = e;
                (0, b.Z)({
                    problem: null != (i = null == t ? void 0 : t.value) ? i : null,
                    stream: j,
                    feedback: u,
                    streamApplication: h,
                    analyticsData: S,
                    location: "Stream End",
                    rating: c,
                });
            }
            null != e.problem &&
                (0, o.ZDy)(async () => {
                    let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                    return (t) =>
                        (0, r.jsx)(
                            e,
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            }),
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0,
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({ body: O.intl.string(O.t.mMTVnp) }, t),
                        );
                });
        }
    }
    let P = O.intl.string(O.t["5smP3d"]),
        R = O.intl.string(O.t["0uxA2d"]),
        T = O.intl.string(O.t.CqjnLC),
        L = {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: S.media_session_id,
                rtc_connection_id: S.rtc_connection_id,
                parent_media_session_id: S.parent_media_session_id,
            },
        };
    if (C) {
        let e = {
                value: _.tX.CONNECTION,
                label: O.intl.string(y.default.FVhMw8),
                problemsHeader: O.intl.string(O.t["6Y1t5O"]),
                problemOptions: (0, a.Z1)(),
                freeformConfig: {
                    value: _.T_.FREEFORM,
                    label: O.intl.string(O.t["emlT9/"]),
                },
            },
            n = {
                value: _.tX.AUDIO,
                label: O.intl.string(y.default.PL2l6O),
                problemsHeader: O.intl.string(O.t["6Y1t5O"]),
                problemOptions: (0, a.w9)({ isMobile: !1 }),
                freeformConfig: {
                    value: _.b9.FREEFORM,
                    label: O.intl.string(O.t["emlT9/"]),
                },
            },
            l = {
                value: _.tX.VIDEO,
                label: O.intl.string(y.default["0WFzPj"]),
                problemsHeader: O.intl.string(O.t["6Y1t5O"]),
                problemOptions: (0, a.NX)(),
                freeformConfig: {
                    value: _.ct.FREEFORM,
                    label: O.intl.string(O.t["emlT9/"]),
                },
            },
            i = {
                value: _.tX.PEOPLE,
                label: O.intl.string(y.default.Moa3W1),
                problemsHeader: O.intl.string(O.t["6Y1t5O"]),
                problemOptions: (0, a.hP)(),
                freeformConfig: {
                    value: _.s_.FREEFORM,
                    label: O.intl.string(O.t["emlT9/"]),
                },
            },
            o = {
                value: t ? _.tX.STREAMING : _.tX.STREAM_WATCHING,
                label: O.intl.string(t ? y.default["0ZBLiY"] : y.default.TVTIT0),
                problemsHeader: O.intl.string(O.t["6Y1t5O"]),
                problemOptions: (0, a.Ez)({ isStreamer: t }),
                freeformConfig: {
                    value: _.MJ.FREEFORM,
                    label: O.intl.string(O.t["emlT9/"]),
                },
            };
        return (0, r.jsx)(m.Z, {
            onSubmit: w,
            onClose: x,
            ratingHeader: P,
            ratingEmojiKind: k,
            ratingBody: t ? R : T,
            categoriesHeader: O.intl.string(y.default["tq859/"]),
            optionsTree: [e, n, l, o, i],
            impression: L,
            transitionState: E,
        });
    }
    return (0, r.jsx)(u.Z, {
        modalType: "stream",
        header: P,
        ratingEmojiKind: k,
        impression: L,
        body: t ? R : T,
        problemTitle: O.intl.string(O.t["6Y1t5O"]),
        problems: (0, d.Z)({
            isStreamer: t,
            isEndStream: !0,
        }),
        freeformNeededProblems: v,
        onSubmit: w,
        onClose: x,
        transitionState: E,
        otherKey: g.kr.OTHER,
    });
}
