var i = n(620632),
    r = n(73153),
    a = n(856383);
let s = new Map();
n.d(
    t,
    {},
    {
        y: function (e) {
            let t = s.get(e);
            return (
                null == t &&
                    ((t = (async function (e) {
                        try {
                            let { body: t } = await i.Bo.get({ url: `${e}/.discord/csp.json`, rejectWithError: !0 });
                            r.h.dispatch({ type: "EMBEDDED_APP_CSP_FETCH_SUCCESS", routerOrigin: e, policy: t });
                        } catch (e) {
                            throw (a.A.captureException(e), e);
                        } finally {
                            s.delete(e);
                        }
                    })(e)),
                    s.set(e, t)),
                t
            );
        },
    },
);
