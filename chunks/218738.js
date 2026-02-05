n.d(t, { default: () => b });
var i = n(627968),
    a = n(64700),
    _ = n(110259),
    o = n(397927),
    r = n(930932),
    l = n(382935),
    s = n(835806),
    c = n(954571),
    d = n(652215),
    m = n(670455),
    u = n(985018),
    p = n(716829);
function b(e) {
    let { isStreamer: t, stream: b, streamApplication: g, onClose: f, transitionState: E, analyticsData: S } = e;
    a.useEffect(() => {
        c.default.track(d.HAw.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: b.ownerId,
            application_id: null != g ? g.id : null,
            application_name: null != g ? g.name : null,
            game_id: null != g ? g.id : null,
            source: "Stream End",
        });
    }, [b.ownerId, g]);
    let A = u.intl.string(u.t["5smP3R"]),
        j = u.intl.string(u.t["0uxA2V"]),
        R = u.intl.string(u.t.CqjnLN),
        T = {
            impressionName: _.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: S.media_session_id,
                rtc_connection_id: S.rtc_connection_id,
                parent_media_session_id: S.parent_media_session_id,
            },
        },
        h = {
            value: t ? m.Eq.STREAMING : m.Eq.STREAM_WATCHING,
            label: u.intl.string(t ? p.default["0ZBLiZ"] : p.default.TVTIT1),
            problemsHeader: u.intl.string(u.t["6Y1t5P"]),
            problemOptions: (0, r.wq)({ isStreamer: t }),
            freeformConfig: { value: m.j6.FREEFORM, label: u.intl.string(u.t.emlT91) },
        };
    return (0, i.jsx)(l.A, {
        onSubmit: function (e) {
            let { dontShowAgain: t, rating: a, feedback: _, category: l, problem: c } = e;
            t && (0, r.n3)({ feedbackType: m.MW.STREAM, location: "StreamFeedback" }),
                null == a ||
                    ((0, s.A)({
                        problem: c?.value ?? null,
                        category: l,
                        variant: c?.variant ?? null,
                        stream: b,
                        feedback: _,
                        streamApplication: g,
                        analyticsData: S,
                        location: "Stream End",
                        rating: a,
                    }),
                    null != c &&
                        (0, o.mMO)(async () => {
                            let { default: e } = await n.e("37836").then(n.bind(n, 845671));
                            return (t) => (0, i.jsx)(e, { body: u.intl.string(u.t.mMTVnv), ...t });
                        }));
        },
        onClose: f,
        ratingHeader: A,
        ratingEmojiKind: "face",
        ratingBody: t ? j : R,
        categoriesHeader: u.intl.string(p.default.tq8598),
        optionsTree: [h],
        impression: T,
        transitionState: E,
    });
}
