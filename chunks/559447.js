var i = n(620632),
    r = n(73153),
    a = n(856383);
let s = new Map();
function l(e) {
    return `${e}/.discord/csp.json`;
}
n.d(
    t,
    {},
    {
        Fb: l,
        h2: function (e) {
            return s.has(e);
        },
        yr: function (e) {
            let t = s.get(e);
            return (
                null == t &&
                    ((t = (async function (e) {
                        try {
                            let { body: t } = await i.Bo.get({ url: l(e), rejectWithError: !0 });
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
