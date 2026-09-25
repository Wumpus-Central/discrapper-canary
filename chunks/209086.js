(t.r(e), t.d(e, { default: () => P }));
var a,
    o = t(477900);
t(582128);
var n = t(284009),
    i = t.n(n),
    l = t(492462),
    c = (((a = {}).OAUTH_REDIRECT = "oauth_redirect"), a),
    s = t(333748),
    u = t(13202),
    h = t(231723),
    d = t(77468),
    A = t(269815),
    p = t(114716),
    w = t(370480),
    T = t(626584),
    _ = t(123677),
    y = t(887909),
    I = t(321987),
    k = t(998218),
    L = t(652215);
let f = new T.A("LinkAuthorize");
async function m(r, e, t, a) {
    let o = null;
    try {
        let { body: r } = await d.A.authorize(a, { twoWayLinkType: u.I.WEB });
        o = r.url;
    } catch (r) {
        throw Error(`error at authorize with code ${r?.body?.code ?? 0}`);
    }
    let n = null;
    try {
        i()(null != o, "No URL in authorize response");
        let { state: r } = (0, w.vA)(o);
        (i()(null != r, "Authorize URL state query parameter must be present"), (n = r));
    } catch (r) {
        throw Error("error at authorize parsing callback params");
    }
    try {
        let o = await d.A.completeTwoWayLink(a, r, e, n, t);
        return o?.body?.redirect;
    } catch (r) {
        throw Error(`error at callback with code ${r?.body?.code ?? 0}`);
    }
}
function E(r) {
    let { platformType: e } = r;
    (0, A.A)();
    let t = (0, _._)(window.location.search),
        { code: a, token_redirect_uri: n } = l.parse(window.location.search);
    async function i(r) {
        let { location: t } = r;
        if (null == t) return;
        let { error: o } = l.parse(t),
            i = null;
        if (null == o && null != a)
            try {
                i = await m(t, a, n, e);
            } catch (e) {
                f.error("Error Creating Discord link", e?.message);
                let r = k.A.toURLSafe(t);
                if (null == r) return;
                (r.searchParams.delete("code"),
                    r.searchParams.set("error", "two_way_link_error"),
                    r.searchParams.set("error_description", e?.message ?? "unknown_error"),
                    (t = r.toString()));
            }
        window.location = null == i || i === c.OAUTH_REDIRECT ? t : i;
    }
    return (0, o.jsx)(I.$, {
        removeChildWrapper: !0,
        children: (0, o.jsx)(y.OAuth2AuthorizeModal, {
            transitionState: h.ip.ENTERED,
            ...t,
            showLogout: !0,
            callback: i,
        }),
    });
}
let P = (0, p.C)(function (r) {
    let { match: e } = r,
        t = e.params.type,
        { client_id: a = "" } = l.parse(window.location.search),
        n = t === L.fg2.PLAYSTATION && a === s.i.PLAYSTATION_APPLICATION_ID,
        i = t === L.fg2.PLAYSTATION_STAGING && a === s.i.PLAYSTATION_STAGING_APPLICATION_ID;
    return n || i ? (0, o.jsx)(E, { platformType: t }) : null;
});
