t.r(r), t.d(r, { default: () => m }), t(65821), t(747238);
var n = t(627968);
t(64700);
var o = t(284009),
    a = t.n(o),
    l = t(492462),
    c = t(674432),
    i = t(333748),
    u = t(13202),
    s = t(77468),
    p = t(269815),
    d = t(114716),
    b = t(370480),
    y = t(626584),
    f = t(123677),
    O = t(200330),
    h = t(321987),
    w = t(998218),
    v = t(652215),
    A = t(231723);
let P = new y.A("LinkAuthorize");
async function g(e, r, t, n) {
    var o, l, c, i, p;
    let d = null;
    try {
        let { body: e } = await s.A.authorize(n, { twoWayLinkType: u.I.WEB });
        d = e.url;
    } catch (e) {
        throw Error(
            "error at authorize with code ".concat(
                null != (o = null == e || null == (l = e.body) ? void 0 : l.code) ? o : 0,
            ),
        );
    }
    let y = null;
    try {
        a()(null != d, "No URL in authorize response");
        let { state: e } = (0, b.vA)(d);
        a()(null != e, "Authorize URL state query parameter must be present"), (y = e);
    } catch (e) {
        throw Error("error at authorize parsing callback params");
    }
    try {
        let o = await s.A.completeTwoWayLink(n, e, r, y, t);
        return null == o || null == (c = o.body) ? void 0 : c.redirect;
    } catch (e) {
        throw Error(
            "error at callback with code ".concat(
                null != (i = null == e || null == (p = e.body) ? void 0 : p.code) ? i : 0,
            ),
        );
    }
}
function j(e) {
    var r, t;
    let { platformType: o } = e;
    (0, p.A)();
    let a = (0, f._)(window.location.search),
        { code: i, token_redirect_uri: u } = l.parse(window.location.search),
        s = async (e) => {
            let { location: r } = e;
            if (null == r) return;
            let { error: t } = l.parse(r),
                n = null;
            if (null == t && null != i)
                try {
                    n = await g(r, i, u, o);
                } catch (t) {
                    var a;
                    P.error("Error Creating Discord link", null == t ? void 0 : t.message);
                    let e = w.A.toURLSafe(r);
                    if (null == e) return;
                    e.searchParams.delete("code"),
                        e.searchParams.set("error", "two_way_link_error"),
                        e.searchParams.set(
                            "error_description",
                            null != (a = null == t ? void 0 : t.message) ? a : "unknown_error",
                        ),
                        (r = e.toString());
                }
            window.location = null == n || n === c.U.OAUTH_REDIRECT ? r : n;
        };
    return (0, n.jsx)(h.$, {
        removeChildWrapper: !0,
        children: (0, n.jsx)(
            O.OAuth2AuthorizeModal,
            ((r = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            }),
                        )),
                        n.forEach(function (r) {
                            var n;
                            (n = t[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[r] = n);
                        });
                }
                return e;
            })({ transitionState: A.ip.ENTERED }, a)),
            (t = t =
                {
                    showLogout: !0,
                    callback: s,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                : (function (e, r) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            r),
        ),
    });
}
let m = (0, d.C)(function (e) {
    let { match: r } = e,
        t = r.params.type,
        { client_id: o = "" } = l.parse(window.location.search),
        a = t === v.fg2.PLAYSTATION && o === i.i.PLAYSTATION_APPLICATION_ID,
        c = t === v.fg2.PLAYSTATION_STAGING && o === i.i.PLAYSTATION_STAGING_APPLICATION_ID;
    return a || c ? (0, n.jsx)(j, { platformType: t }) : null;
});
