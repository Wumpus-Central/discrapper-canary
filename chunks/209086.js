t.r(e), t.d(e, { default: () => S });
var a,
    o = t(627968);
t(64700);
var n = t(284009),
    l = t.n(n),
    i = t(492462),
    c = (((a = {}).OAUTH_REDIRECT = "oauth_redirect"), a),
    s = t(333748),
    u = t(13202),
    A = t(77468),
    d = t(269815),
    h = t(114716),
    I = t(370480),
    p = t(626584),
    T = t(123677),
    _ = t(200330),
    w = t(321987),
    L = t(998218),
    P = t(652215),
    N = t(231723);
let O = new p.A("LinkAuthorize");
async function y(r, e, t, a) {
    let o = null;
    try {
        let { body: r } = await A.A.authorize(a, { twoWayLinkType: u.I.WEB });
        o = r.url;
    } catch (r) {
        throw Error(`error at authorize with code ${r?.body?.code ?? 0}`);
    }
    let n = null;
    try {
        l()(null != o, "No URL in authorize response");
        let { state: r } = (0, I.vA)(o);
        l()(null != r, "Authorize URL state query parameter must be present"), (n = r);
    } catch (r) {
        throw Error("error at authorize parsing callback params");
    }
    try {
        let o = await A.A.completeTwoWayLink(a, r, e, n, t);
        return o?.body?.redirect;
    } catch (r) {
        throw Error(`error at callback with code ${r?.body?.code ?? 0}`);
    }
}
function E(r) {
    let { platformType: e } = r;
    (0, d.A)();
    let t = (0, T._)(window.location.search),
        { code: a, token_redirect_uri: n } = i.parse(window.location.search),
        l = async (r) => {
            let { location: t } = r;
            if (null == t) return;
            let { error: o } = i.parse(t),
                l = null;
            if (null == o && null != a)
                try {
                    l = await y(t, a, n, e);
                } catch (e) {
                    O.error("Error Creating Discord link", e?.message);
                    let r = L.A.toURLSafe(t);
                    if (null == r) return;
                    r.searchParams.delete("code"),
                        r.searchParams.set("error", "two_way_link_error"),
                        r.searchParams.set("error_description", e?.message ?? "unknown_error"),
                        (t = r.toString());
                }
            window.location = null == l || l === c.OAUTH_REDIRECT ? t : l;
        };
    return (0, o.jsx)(w.$, {
        removeChildWrapper: !0,
        children: (0, o.jsx)(_.OAuth2AuthorizeModal, {
            transitionState: N.ip.ENTERED,
            ...t,
            showLogout: !0,
            callback: l,
        }),
    });
}
let S = (0, h.C)(function (r) {
    let { match: e } = r,
        t = e.params.type,
        { client_id: a = "" } = i.parse(window.location.search),
        n = t === P.fg2.PLAYSTATION && a === s.i.PLAYSTATION_APPLICATION_ID,
        l = t === P.fg2.PLAYSTATION_STAGING && a === s.i.PLAYSTATION_STAGING_APPLICATION_ID;
    return n || l ? (0, o.jsx)(E, { platformType: t }) : null;
});
