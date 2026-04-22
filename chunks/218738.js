n.d(t, { default: () => f });
var i = n(627968),
    a = n(64700),
    _ = n(110259),
    r = n(192308),
    o = n(930932),
    l = n(878234),
    s = n(382935),
    c = n(835806),
    d = n(954571),
    b = n(652215),
    u = n(670455),
    m = n(985018),
    p = n(564082);
function f(e) {
    let { isStreamer: t, stream: f, streamApplication: g, onClose: E, transitionState: S, analyticsData: h } = e;
    a.useEffect(() => {
        d.default.track(b.HAw.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: f.ownerId,
            application_id: null != g ? g.id : null,
            application_name: null != g ? g.name : null,
            game_id: null != g ? g.id : null,
            source: "Stream End",
        });
    }, [f.ownerId, g]);
    let j = m.intl.string(m.t["5smP3R"]),
        x = m.intl.string(m.t["0uxA2V"]),
        A = m.intl.string(m.t.CqjnLN),
        T = {
            impressionName: _.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: h.media_session_id,
                rtc_connection_id: h.rtc_connection_id,
                parent_media_session_id: h.parent_media_session_id,
            },
        },
        R = {
            value: t ? u.Eq.STREAMING : u.Eq.STREAM_WATCHING,
            label: m.intl.string(t ? p.default["0ZBLiZ"] : p.default.TVTIT1),
            problemsHeader: m.intl.string(m.t["6Y1t5P"]),
            problemOptions: (0, o.wq)({ isStreamer: t }),
            freeformConfig: { value: u.j6.FREEFORM, label: m.intl.string(m.t.emlT91) },
        };
    return (0, i.jsx)(s.A, {
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: a, feedback: _, category: s, problem: d } = e;
            if (
                (t && (0, o.n3)({ feedbackType: u.MW.STREAM, location: "StreamFeedback" }), null != a) &&
                ((0, c.A)({
                    problem: d?.value ?? null,
                    category: s,
                    variant: d?.variant ?? null,
                    stream: f,
                    feedback: _,
                    streamApplication: g,
                    analyticsData: h,
                    location: "Stream End",
                    rating: a,
                }),
                null != d)
            ) {
                if ((0, l.r)(a, s, d))
                    return void (0, r.openModalLazy)(async () => {
                        let { default: e } = await n.e("69791").then(n.bind(n, 72514));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                mediaSessionId: h.media_session_id,
                                rtcConnectionId: h.rtc_connection_id,
                            });
                    });
                (0, r.openModalLazy)(async () => {
                    let { default: e } = await n.e("37836").then(n.bind(n, 845671));
                    return (t) => (0, i.jsx)(e, { body: m.intl.string(m.t.mMTVnv), ...t });
                });
            }
        },
        onClose: E,
        ratingHeader: j,
        ratingEmojiKind: "face",
        ratingBody: t ? x : A,
        categoriesHeader: m.intl.string(p.default.tq8598),
        optionsTree: [R],
        impression: T,
        transitionState: S,
    });
}
