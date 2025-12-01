n.d(t, { default: () => h });
var r = n(54381),
    l = n(473749),
    i = n(990547),
    o = n(481060),
    a = n(957115),
    s = n(157283),
    c = n(328171),
    u = n(332664),
    d = n(13137),
    b = n(538211),
    m = n(698066),
    f = n(626135),
    p = n(981631),
    _ = n(531578),
    g = n(70722),
    O = n(388032),
    y = n(949250);
let v = [g.kr.OTHER];
function h(e) {
    let { isStreamer: t, stream: h, streamApplication: j, onClose: E, transitionState: x, analyticsData: S } = e;
    l.useEffect(() => {
        f.default.track(p.rMx.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: h.ownerId,
            application_id: null != j ? j.id : null,
            application_name: null != j ? j.name : null,
            game_id: null != j ? j.id : null,
            source: "Stream End",
        });
    }, [h.ownerId, j]);
    let { showRefreshedStreamTaxonomy: P } = (0, s.u)({ location: "StreamFeedback" }),
        { surveyEmojiKind: C } = (0, c.R)({ location: "StreamFeedback" });
    function k(e) {
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
            if (P) {
                let { category: n, problem: r } = e;
                (0, m.Z)({
                    problem: null != (t = null == r ? void 0 : r.value) ? t : null,
                    category: n,
                    variant: null != (l = null == r ? void 0 : r.variant) ? l : null,
                    stream: h,
                    feedback: u,
                    streamApplication: j,
                    analyticsData: S,
                    location: "Stream End",
                    rating: c,
                });
            } else {
                let { problem: t } = e;
                (0, m.Z)({
                    problem: null != (i = null == t ? void 0 : t.value) ? i : null,
                    stream: h,
                    feedback: u,
                    streamApplication: j,
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
                            })({ body: O.intl.string(O.t.mMTVnv) }, t),
                        );
                });
        }
    }
    let w = O.intl.string(O.t["5smP3R"]),
        R = O.intl.string(O.t["0uxA2V"]),
        T = O.intl.string(O.t.CqjnLN),
        F = {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: S.media_session_id,
                rtc_connection_id: S.rtc_connection_id,
                parent_media_session_id: S.parent_media_session_id,
            },
        };
    if (P) {
        let e = {
                value: _.tX.CONNECTION,
                label: O.intl.string(y.default.FVhMw6),
                problemsHeader: O.intl.string(O.t["6Y1t5P"]),
                problemOptions: (0, a.Z1)(),
                freeformConfig: {
                    value: _.T_.FREEFORM,
                    label: O.intl.string(O.t.emlT91),
                },
            },
            n = {
                value: _.tX.AUDIO,
                label: O.intl.string(y.default.PL2l6A),
                problemsHeader: O.intl.string(O.t["6Y1t5P"]),
                problemOptions: (0, a.w9)({ isMobile: !1 }),
                freeformConfig: {
                    value: _.b9.FREEFORM,
                    label: O.intl.string(O.t.emlT91),
                },
            },
            l = {
                value: _.tX.VIDEO,
                label: O.intl.string(y.default["0WFzPh"]),
                problemsHeader: O.intl.string(O.t["6Y1t5P"]),
                problemOptions: (0, a.NX)(),
                freeformConfig: {
                    value: _.ct.FREEFORM,
                    label: O.intl.string(O.t.emlT91),
                },
            },
            i = {
                value: _.tX.PEOPLE,
                label: O.intl.string(y.default.Moa3W9),
                problemsHeader: O.intl.string(O.t["6Y1t5P"]),
                problemOptions: (0, a.hP)(),
                freeformConfig: {
                    value: _.s_.FREEFORM,
                    label: O.intl.string(O.t.emlT91),
                },
            },
            o = {
                value: t ? _.tX.STREAMING : _.tX.STREAM_WATCHING,
                label: O.intl.string(t ? y.default["0ZBLiZ"] : y.default.TVTIT1),
                problemsHeader: O.intl.string(O.t["6Y1t5P"]),
                problemOptions: (0, a.Ez)({ isStreamer: t }),
                freeformConfig: {
                    value: _.MJ.FREEFORM,
                    label: O.intl.string(O.t.emlT91),
                },
            };
        return (0, r.jsx)(d.Z, {
            onSubmit: k,
            onClose: E,
            ratingHeader: w,
            ratingEmojiKind: C,
            ratingBody: t ? R : T,
            categoriesHeader: O.intl.string(y.default.tq8598),
            optionsTree: [e, n, l, o, i],
            impression: F,
            transitionState: x,
        });
    }
    return (0, r.jsx)(u.Z, {
        modalType: "stream",
        header: w,
        ratingEmojiKind: C,
        impression: F,
        body: t ? R : T,
        problemTitle: O.intl.string(O.t["6Y1t5P"]),
        problems: (0, b.Z)({
            isStreamer: t,
            isEndStream: !0,
        }),
        freeformNeededProblems: v,
        onSubmit: k,
        onClose: E,
        transitionState: x,
        otherKey: g.kr.OTHER,
    });
}
