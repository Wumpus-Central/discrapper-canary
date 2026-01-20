n.d(t, { default: () => f });
var a = n(54381),
    r = n(473749),
    i = n(990547),
    o = n(481060),
    c = n(957115),
    l = n(13137),
    d = n(698066),
    u = n(626135),
    b = n(981631),
    s = n(531578),
    _ = n(388032),
    m = n(40207);
function f(e) {
    let { isStreamer: t, stream: f, streamApplication: p, onClose: g, transitionState: j, analyticsData: y } = e;
    r.useEffect(() => {
        u.default.track(b.rMx.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: f.ownerId,
            application_id: null != p ? p.id : null,
            application_name: null != p ? p.name : null,
            game_id: null != p ? p.id : null,
            source: "Stream End",
        });
    }, [f.ownerId, p]);
    let O = _.intl.string(_.t["5smP3R"]),
        h = _.intl.string(_.t["0uxA2V"]),
        v = _.intl.string(_.t.CqjnLN),
        E = {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: y.media_session_id,
                rtc_connection_id: y.rtc_connection_id,
                parent_media_session_id: y.parent_media_session_id,
            },
        },
        S = {
            value: t ? s.tX.STREAMING : s.tX.STREAM_WATCHING,
            label: _.intl.string(t ? m.default["0ZBLiZ"] : m.default.TVTIT1),
            problemsHeader: _.intl.string(_.t["6Y1t5P"]),
            problemOptions: (0, c.Ez)({ isStreamer: t }),
            freeformConfig: {
                value: s.MJ.FREEFORM,
                label: _.intl.string(_.t.emlT91),
            },
        };
    return (0, a.jsx)(l.Z, {
        onSubmit: function (e) {
            var t, r;
            let { dontShowAgain: i, rating: l, feedback: u, category: b, problem: m } = e;
            i &&
                (0, c.Uv)({
                    feedbackType: s.nw.STREAM,
                    location: "StreamFeedback",
                }),
                null != l &&
                    ((0, d.Z)({
                        problem: null != (t = null == m ? void 0 : m.value) ? t : null,
                        category: b,
                        variant: null != (r = null == m ? void 0 : m.variant) ? r : null,
                        stream: f,
                        feedback: u,
                        streamApplication: p,
                        analyticsData: y,
                        location: "Stream End",
                        rating: l,
                    }),
                    null != m &&
                        (0, o.ZDy)(async () => {
                            let { default: e } = await n.e("14466").then(n.bind(n, 729328));
                            return (t) =>
                                (0, a.jsx)(
                                    e,
                                    (function (e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var n = null != arguments[t] ? arguments[t] : {},
                                                a = Object.keys(n);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (a = a.concat(
                                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                    }),
                                                )),
                                                a.forEach(function (t) {
                                                    var a;
                                                    (a = n[t]),
                                                        t in e
                                                            ? Object.defineProperty(e, t, {
                                                                  value: a,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[t] = a);
                                                });
                                        }
                                        return e;
                                    })({ body: _.intl.string(_.t.mMTVnv) }, t),
                                );
                        }));
        },
        onClose: g,
        ratingHeader: O,
        ratingEmojiKind: "face",
        ratingBody: t ? h : v,
        categoriesHeader: _.intl.string(m.default.tq8598),
        optionsTree: [S],
        impression: E,
        transitionState: j,
    });
}
