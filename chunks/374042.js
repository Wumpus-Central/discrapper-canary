var i = n(613412),
    r = n(620632),
    a = n(933681),
    s = n(73153),
    l = n(499785),
    o = n(652215);
n.d(
    t,
    {},
    {
        B: function (e, t) {
            var n = {};
            return (
                (n.supports_native = !0),
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
        },
    },
);
