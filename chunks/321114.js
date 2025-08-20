n.d(t, { c: () => c });
var r = n(544891),
    i = n(570140),
    a = n(594174),
    o = n(981631);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
async function c(e, t) {
    try {
        let n = await r.tn.put({
            url: o.ANM.USER_SET_GUILD_IDENTITY,
            body: {
                identity_guild_id: e,
                identity_enabled: t,
            },
            rejectWithError: !1,
        });
        return (
            n.ok &&
                i.Z.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: l({}, a.default.getCurrentUser(), n.body),
                }),
            n
        );
    } catch (e) {
        return e;
    }
}
