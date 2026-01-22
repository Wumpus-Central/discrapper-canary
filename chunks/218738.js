a.d(n, {
    default: () => p,
});
var t = a(627968),
    r = a(64700),
    i = a(110259),
    l = a(397927),
    o = a(930932),
    d = a(382935),
    c = a(835806),
    u = a(954571),
    f = a(652215),
    s = a(670455),
    b = a(985018),
    _ = a(716829);

function p(e) {
    let { isStreamer: n, stream: p, streamApplication: m, onClose: g, transitionState: O, analyticsData: y } = e;
    r.useEffect(() => {
        u.default.track(f.HAw.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: p.ownerId,
            application_id: null != m ? m.id : null,
            application_name: null != m ? m.name : null,
            game_id: null != m ? m.id : null,
            source: "Stream End",
        });
    }, [p.ownerId, m]);
    let E = b.intl.string(b.t["5smP3R"]),
        v = b.intl.string(b.t["0uxA2V"]),
        w = b.intl.string(b.t.CqjnLN),
        S = {
            impressionName: i.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: y.media_session_id,
                rtc_connection_id: y.rtc_connection_id,
                parent_media_session_id: y.parent_media_session_id,
            },
        },
        j = {
            value: n ? s.Eq.STREAMING : s.Eq.STREAM_WATCHING,
            label: b.intl.string(n ? _.default["0ZBLiZ"] : _.default.TVTIT1),
            problemsHeader: b.intl.string(b.t["6Y1t5P"]),
            problemOptions: (0, o.wq)({
                isStreamer: n,
            }),
            freeformConfig: {
                value: s.j6.FREEFORM,
                label: b.intl.string(b.t.emlT91),
            },
        };
    return (0, t.jsx)(d.A, {
        onSubmit: function (e) {
            var n, r;
            let { dontShowAgain: i, rating: d, feedback: u, category: f, problem: _ } = e;
            i &&
                (0, o.n3)({
                    feedbackType: s.MW.STREAM,
                    location: "StreamFeedback",
                }),
                null == d ||
                    ((0, c.A)({
                        problem: null != (n = null == _ ? void 0 : _.value) ? n : null,
                        category: f,
                        variant: null != (r = null == _ ? void 0 : _.variant) ? r : null,
                        stream: p,
                        feedback: u,
                        streamApplication: m,
                        analyticsData: y,
                        location: "Stream End",
                        rating: d,
                    }),
                    null != _ &&
                        (0, l.mMO)(async () => {
                            let { default: e } = await a.e("37836").then(a.bind(a, 845671));
                            return (n) =>
                                (0, t.jsx)(
                                    e,
                                    (function (e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var a = null != arguments[n] ? arguments[n] : {},
                                                t = Object.keys(a);
                                            "function" == typeof Object.getOwnPropertySymbols &&
                                                (t = t.concat(
                                                    Object.getOwnPropertySymbols(a).filter(function (e) {
                                                        return Object.getOwnPropertyDescriptor(a, e).enumerable;
                                                    }),
                                                )),
                                                t.forEach(function (n) {
                                                    var t;
                                                    (t = a[n]),
                                                        n in e
                                                            ? Object.defineProperty(e, n, {
                                                                  value: t,
                                                                  enumerable: !0,
                                                                  configurable: !0,
                                                                  writable: !0,
                                                              })
                                                            : (e[n] = t);
                                                });
                                        }
                                        return e;
                                    })(
                                        {
                                            body: b.intl.string(b.t.mMTVnv),
                                        },
                                        n,
                                    ),
                                );
                        }));
        },
        onClose: g,
        ratingHeader: E,
        ratingEmojiKind: "face",
        ratingBody: n ? v : w,
        categoriesHeader: b.intl.string(_.default.tq8598),
        optionsTree: [j],
        impression: S,
        transitionState: O,
    });
}
