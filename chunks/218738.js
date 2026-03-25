t.d(n, { default: () => f });
var i = t(627968),
    a = t(64700),
    _ = t(110259),
    o = t(397927),
    r = t(930932),
    l = t(878234),
    s = t(382935),
    c = t(835806),
    d = t(954571),
    m = t(652215),
    u = t(670455),
    b = t(985018),
    p = t(716829);
function f(e) {
    let { isStreamer: n, stream: f, streamApplication: g, onClose: E, transitionState: S, analyticsData: j } = e;
    a.useEffect(() => {
        d.default.track(m.HAw.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: f.ownerId,
            application_id: null != g ? g.id : null,
            application_name: null != g ? g.name : null,
            game_id: null != g ? g.id : null,
            source: "Stream End",
        });
    }, [f.ownerId, g]);
    let A = b.intl.string(b.t["5smP3R"]),
        h = b.intl.string(b.t["0uxA2V"]),
        R = b.intl.string(b.t.CqjnLN),
        T = {
            impressionName: _.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: j.media_session_id,
                rtc_connection_id: j.rtc_connection_id,
                parent_media_session_id: j.parent_media_session_id,
            },
        },
        M = {
            value: n ? u.Eq.STREAMING : u.Eq.STREAM_WATCHING,
            label: b.intl.string(n ? p.default["0ZBLiZ"] : p.default.TVTIT1),
            problemsHeader: b.intl.string(b.t["6Y1t5P"]),
            problemOptions: (0, r.wq)({ isStreamer: n }),
            freeformConfig: { value: u.j6.FREEFORM, label: b.intl.string(b.t.emlT91) },
        };
    return (0, i.jsx)(s.A, {
        onSubmit: function (e) {
            let { dontShowAgain: n, rating: a, feedback: _, category: s, problem: d } = e;
            if (
                (n && (0, r.n3)({ feedbackType: u.MW.STREAM, location: "StreamFeedback" }), null != a) &&
                ((0, c.A)({
                    problem: d?.value ?? null,
                    category: s,
                    variant: d?.variant ?? null,
                    stream: f,
                    feedback: _,
                    streamApplication: g,
                    analyticsData: j,
                    location: "Stream End",
                    rating: a,
                }),
                null != d)
            ) {
                if ((0, l.r)(a, s, d))
                    return void (0, o.mMO)(async () => {
                        let { default: e } = await t.e("69791").then(t.bind(t, 72514));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                mediaSessionId: j.media_session_id,
                                rtcConnectionId: j.rtc_connection_id,
                            });
                    });
                (0, o.mMO)(async () => {
                    let { default: e } = await t.e("37836").then(t.bind(t, 845671));
                    return (n) => (0, i.jsx)(e, { body: b.intl.string(b.t.mMTVnv), ...n });
                });
            }
        },
        onClose: E,
        ratingHeader: A,
        ratingEmojiKind: "face",
        ratingBody: n ? h : R,
        categoriesHeader: b.intl.string(p.default.tq8598),
        optionsTree: [M],
        impression: T,
        transitionState: S,
    });
}
