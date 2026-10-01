n.d(t, { B: () => d });
var i = n(562708),
    r = n(636537),
    a = n(933681),
    s = n(73153),
    l = n(499785),
    o = n(652215);
function d(e, t) {
    var n = {};
    return (
        null != e && (n.survey_override = e),
        null != t && (n.disable_auto_seen = t),
        l.A.get({
            url: o.Rsh.USER_SURVEY,
            query: n,
            trackedActionData: {
                event: i.NetworkActionNames.USER_SURVEY_FETCH,
                properties: (e) => {
                    let t = e?.body?.survey;
                    return (0, a.e0)({ key: t?.key });
                },
            },
            rejectWithError: (0, r.fT)(),
        }).then(
            (e) => (s.h.dispatch({ type: "SURVEY_FETCHED", survey: e?.body?.survey }), e?.body?.survey),
            () => {
                s.h.dispatch({ type: "SURVEY_FETCHED", survey: null });
            },
        )
    );
}
