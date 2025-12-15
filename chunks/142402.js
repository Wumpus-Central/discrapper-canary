n.d(t, { default: () => v });
var r = n(54381),
    a = n(473749),
    l = n(990547),
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
    _ = n(40207);
let j = [O.kr.OTHER];
function v(e) {
    let { isStreamer: t, stream: v, streamApplication: h, onClose: x, transitionState: S, analyticsData: E } = e;
    a.useEffect(() => {
        m.default.track(p.rMx.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: v.ownerId,
            application_id: null != h ? h.id : null,
            application_name: null != h ? h.name : null,
            game_id: null != h ? h.id : null,
            source: "Stream End",
        });
    }, [v.ownerId, h]);
    let { showRefreshedStreamTaxonomy: k } = (0, c.u)({ location: "StreamFeedback" }),
        { surveyEmojiKind: P } = (0, s.R)({ location: "StreamFeedback" });
    function w(e) {
        var t, a, l;
        let { dontShowAgain: c, rating: s, feedback: d } = e;
        if (
            (c &&
                (0, o.Uv)({
                    feedbackType: g.nw.STREAM,
                    location: "StreamFeedback",
                }),
            null != s)
        ) {
            if (k) {
                let { category: n, problem: r } = e;
                (0, f.Z)({
                    problem: null != (t = null == r ? void 0 : r.value) ? t : null,
                    category: n,
                    variant: null != (a = null == r ? void 0 : r.variant) ? a : null,
                    stream: v,
                    feedback: d,
                    streamApplication: h,
                    analyticsData: E,
                    location: "Stream End",
                    rating: s,
                });
            } else {
                let { problem: t } = e;
                (0, f.Z)({
                    problem: null != (l = null == t ? void 0 : t.value) ? l : null,
                    stream: v,
                    feedback: d,
                    streamApplication: h,
                    analyticsData: E,
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
    let C = y.intl.string(y.t["5smP3R"]),
        R = y.intl.string(y.t["0uxA2V"]),
        T = y.intl.string(y.t.CqjnLN),
        D = {
            impressionName: l.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: E.media_session_id,
                rtc_connection_id: E.rtc_connection_id,
                parent_media_session_id: E.parent_media_session_id,
            },
        };
    if (k) {
        let e = {
            value: t ? g.tX.STREAMING : g.tX.STREAM_WATCHING,
            label: y.intl.string(t ? _.default["0ZBLiZ"] : _.default.TVTIT1),
            problemsHeader: y.intl.string(y.t["6Y1t5P"]),
            problemOptions: (0, o.Ez)({ isStreamer: t }),
            freeformConfig: {
                value: g.MJ.FREEFORM,
                label: y.intl.string(y.t.emlT91),
            },
        };
        return (0, r.jsx)(u.Z, {
            onSubmit: w,
            onClose: x,
            ratingHeader: C,
            ratingEmojiKind: P,
            ratingBody: t ? R : T,
            categoriesHeader: y.intl.string(_.default.tq8598),
            optionsTree: [e],
            impression: D,
            transitionState: S,
        });
    }
    return (0, r.jsx)(d.Z, {
        modalType: "stream",
        header: C,
        ratingEmojiKind: P,
        impression: D,
        body: t ? R : T,
        problemTitle: y.intl.string(y.t["6Y1t5P"]),
        problems: (0, b.Z)({
            isStreamer: t,
            isEndStream: !0,
        }),
        freeformNeededProblems: j,
        onSubmit: w,
        onClose: x,
        transitionState: S,
        otherKey: O.kr.OTHER,
    });
}
