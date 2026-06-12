t.r(e), t.d(e, { default: () => P });
var a,
    o = t(627968);
t(64700);
var i = t(284009),
    l = t.n(i),
    n = t(492462),
    c = (((a = {}).OAUTH_REDIRECT = "oauth_redirect"), a),
    s = t(333748),
    u = t(13202),
    h = t(77468),
    d = t(269815),
    A = t(114716),
    p = t(370480),
    w = t(626584),
    T = t(123677),
    _ = t(887909),
    y = t(321987),
    I = t(998218),
    k = t(652215),
    L = t(231723);
let m = new w.A("LinkAuthorize");
async function E(r, e, t, a) {
    let o = null;
    try {
        let { body: r } = await h.A.authorize(a, { twoWayLinkType: u.I.WEB });
        o = r.url;
    } catch (r) {
        throw Error(`error at authorize with code ${r?.body?.code ?? 0}`);
    }
    let i = null;
    try {
        l()(null != o, "No URL in authorize response");
        let { state: r } = (0, p.vA)(o);
        l()(null != r, "Authorize URL state query parameter must be present"), (i = r);
    } catch (r) {
        throw Error("error at authorize parsing callback params");
    }
    try {
        let o = await h.A.completeTwoWayLink(a, r, e, i, t);
        return o?.body?.redirect;
    } catch (r) {
        throw Error(`error at callback with code ${r?.body?.code ?? 0}`);
    }
}
function f(r) {
    let { platformType: e } = r;
    (0, d.A)();
    let t = (0, T._)(window.location.search),
        { code: a, token_redirect_uri: i } = n.parse(window.location.search),
        l = async (r) => {
            let { location: t } = r;
            if (null == t) return;
            let { error: o } = n.parse(t),
                l = null;
            if (null == o && null != a)
                try {
                    l = await E(t, a, i, e);
                } catch (e) {
                    m.error("Error Creating Discord link", e?.message);
                    let r = I.A.toURLSafe(t);
                    if (null == r) return;
                    r.searchParams.delete("code"),
                        r.searchParams.set("error", "two_way_link_error"),
                        r.searchParams.set("error_description", e?.message ?? "unknown_error"),
                        (t = r.toString());
                }
            window.location = null == l || l === c.OAUTH_REDIRECT ? t : l;
        };
    return (0, o.jsx)(y.$, {
        removeChildWrapper: !0,
        children: (0, o.jsx)(_.OAuth2AuthorizeModal, {
            transitionState: L.ip.ENTERED,
            ...t,
            showLogout: !0,
            callback: l,
        }),
    });
}
let P = (0, A.C)(function (r) {
    let { match: e } = r,
        t = e.params.type,
        { client_id: a = "" } = n.parse(window.location.search),
        i = t === k.fg2.PLAYSTATION && a === s.i.PLAYSTATION_APPLICATION_ID,
        l = t === k.fg2.PLAYSTATION_STAGING && a === s.i.PLAYSTATION_STAGING_APPLICATION_ID;
    return i || l ? (0, o.jsx)(f, { platformType: t }) : null;
});
