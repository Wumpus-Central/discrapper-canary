n.d(t, { default: () => j });
var r = n(54381),
    l = n(473749),
    a = n(990547),
    i = n(481060),
    o = n(957115),
    c = n(157283),
    s = n(328171),
    d = n(332664),
    u = n(13137),
    b = n(538211),
    f = n(698066),
    m = n(626135),
    p = n(981631),
    g = n(531578),
    O = n(70722),
    y = n(388032),
    v = n(801485);
let _ = [O.kr.OTHER];
function j(e) {
    let { isStreamer: t, stream: j, streamApplication: h, onClose: E, transitionState: x, analyticsData: S } = e;
    l.useEffect(() => {
        m.default.track(p.rMx.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: j.ownerId,
            application_id: null != h ? h.id : null,
            application_name: null != h ? h.name : null,
            game_id: null != h ? h.id : null,
            source: "Stream End",
        });
    }, [j.ownerId, h]);
    let { showRefreshedStreamTaxonomy: P } = (0, c.u)({ location: "StreamFeedback" }),
        { surveyEmojiKind: C } = (0, s.R)({ location: "StreamFeedback" });
    function w(e) {
        var t, l, a;
        let { dontShowAgain: c, rating: s, feedback: d } = e;
        if (
            (c &&
                (0, o.Uv)({
                    feedbackType: g.nw.STREAM,
                    location: "StreamFeedback",
                }),
            null != s)
        ) {
            if (P) {
                let { category: n, problem: r } = e;
                (0, f.Z)({
                    problem: null != (t = null == r ? void 0 : r.value) ? t : null,
                    category: n,
                    variant: null != (l = null == r ? void 0 : r.variant) ? l : null,
                    stream: j,
                    feedback: d,
                    streamApplication: h,
                    analyticsData: S,
                    location: "Stream End",
                    rating: s,
                });
            } else {
                let { problem: t } = e;
                (0, f.Z)({
                    problem: null != (a = null == t ? void 0 : t.value) ? a : null,
                    stream: j,
                    feedback: d,
                    streamApplication: h,
                    analyticsData: S,
                    location: "Stream End",
                    rating: s,
                });
            }
            null != e.problem &&
                (0, i.ZDy)(async () => {
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
                            })({ body: y.intl.string(y.t.mMTVnv) }, t),
                        );
                });
        }
    }
    let R = y.intl.string(y.t["5smP3R"]),
        k = y.intl.string(y.t["0uxA2V"]),
        T = y.intl.string(y.t.CqjnLN),
        F = {
            impressionName: a.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: S.media_session_id,
                rtc_connection_id: S.rtc_connection_id,
                parent_media_session_id: S.parent_media_session_id,
            },
        };
    if (P) {
        let e = {
                value: g.tX.CONNECTION,
                label: y.intl.string(v.default.FVhMw6),
                problemsHeader: y.intl.string(y.t["6Y1t5P"]),
                problemOptions: (0, o.Z1)(),
                freeformConfig: {
                    value: g.T_.FREEFORM,
                    label: y.intl.string(y.t.emlT91),
                },
            },
            n = {
                value: g.tX.AUDIO,
                label: y.intl.string(v.default.PL2l6A),
                problemsHeader: y.intl.string(y.t["6Y1t5P"]),
                problemOptions: (0, o.w9)({ isMobile: !1 }),
                freeformConfig: {
                    value: g.b9.FREEFORM,
                    label: y.intl.string(y.t.emlT91),
                },
            },
            l = {
                value: g.tX.VIDEO,
                label: y.intl.string(v.default["0WFzPh"]),
                problemsHeader: y.intl.string(y.t["6Y1t5P"]),
                problemOptions: (0, o.NX)(),
                freeformConfig: {
                    value: g.ct.FREEFORM,
                    label: y.intl.string(y.t.emlT91),
                },
            },
            a = {
                value: g.tX.PEOPLE,
                label: y.intl.string(v.default.Moa3W9),
                problemsHeader: y.intl.string(y.t["6Y1t5P"]),
                problemOptions: (0, o.hP)(),
                freeformConfig: {
                    value: g.s_.FREEFORM,
                    label: y.intl.string(y.t.emlT91),
                },
            },
            i = {
                value: t ? g.tX.STREAMING : g.tX.STREAM_WATCHING,
                label: y.intl.string(t ? v.default["0ZBLiZ"] : v.default.TVTIT1),
                problemsHeader: y.intl.string(y.t["6Y1t5P"]),
                problemOptions: (0, o.Ez)({ isStreamer: t }),
                freeformConfig: {
                    value: g.MJ.FREEFORM,
                    label: y.intl.string(y.t.emlT91),
                },
            };
        return (0, r.jsx)(u.Z, {
            onSubmit: w,
            onClose: E,
            ratingHeader: R,
            ratingEmojiKind: C,
            ratingBody: t ? k : T,
            categoriesHeader: y.intl.string(v.default.tq8598),
            optionsTree: [e, n, l, i, a],
            impression: F,
            transitionState: x,
        });
    }
    return (0, r.jsx)(d.Z, {
        modalType: "stream",
        header: R,
        ratingEmojiKind: C,
        impression: F,
        body: t ? k : T,
        problemTitle: y.intl.string(y.t["6Y1t5P"]),
        problems: (0, b.Z)({
            isStreamer: t,
            isEndStream: !0,
        }),
        freeformNeededProblems: _,
        onSubmit: w,
        onClose: E,
        transitionState: x,
        otherKey: O.kr.OTHER,
    });
}
