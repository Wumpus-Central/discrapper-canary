n.d(t, {
    Qb: () => d,
    ZT: () => p,
    tI: () => m
}),
    n(781311);
var r = n(367907);
n(592125);
var i = n(621365),
    l = n(654427),
    a = n(495362),
    o = n(981631);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function u(e) {
    let t = l.Z.getSelectedSearchTab(e);
    return {
        search_tab_selected: null != t ? a.Me[t] : t,
        search_location: (function (e) {
            switch (e.type) {
                case o.aib.GUILD:
                    return a.gV.GUILD;
                case o.aib.GUILD_CHANNEL:
                case o.aib.THREAD:
                    return a.gV.GUILD_CHANNEL;
                case o.aib.CHANNEL:
                    return a.gV.DM_CHANNEL;
                case o.aib.DMS:
                    return a.gV.DM_LIST;
                case o.aib.FAVORITES:
                    return a.gV.FAVORITES;
            }
        })(e),
        search_session_id: l.Z.getSessionId(e)
    };
}
function d(e) {
    let { searchContext: t } = e,
        n = u(t),
        l = i.Z.getState(t, (e) => e.getQueryString()),
        a = i.Z.getState(t, (e) => e.getTextInputValue());
    r.ZP.trackWithMetadata(
        o.rMx.SEARCH_V2_RESULT_EMPTY,
        c(s({}, n), {
            search_query_length: l.trim().length,
            search_query_content_length: a.trim().length
        })
    );
}
function p(e) {
    let { searchContext: t } = e,
        n = u(t);
    r.ZP.trackWithMetadata(o.rMx.SEARCH_V2_FILTERS_APPLIED, n);
}
function m(e) {
    let { searchContext: t } = e,
        n = u(t),
        l = i.Z.getState(t, (e) => e.getQueryString()),
        a = i.Z.getState(t, (e) => e.getTextInputValue());
    r.ZP.trackWithMetadata(
        o.rMx.SEARCH_V2_STARTED,
        c(s({}, n), {
            search_query_length: l.trim().length,
            search_query_content_length: a.trim().length
        })
    );
}
