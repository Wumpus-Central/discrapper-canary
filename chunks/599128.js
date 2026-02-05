t.r(e), t.d(e, { default: () => k });
var a = t(627968);
t(64700);
var o = t(284009),
    n = t.n(o),
    l = t(492462),
    i = t(674432),
    c = t(333748),
    s = t(13202),
    u = t(77468),
    d = t(269815),
    h = t(114716),
    p = t(370480),
    A = t(626584),
    w = t(123677),
    _ = t(200330),
    T = t(321987),
    I = t(998218),
    y = t(652215),
    E = t(231723);
let f = new A.A("LinkAuthorize");
async function m(r, e, t, a) {
    let o = null;
    try {
        let { body: r } = await u.A.authorize(a, { twoWayLinkType: s.I.WEB });
        o = r.url;
    } catch (r) {
        throw Error(`error at authorize with code ${r?.body?.code ?? 0}`);
    }
    let l = null;
    try {
        n()(null != o, "No URL in authorize response");
        let { state: r } = (0, p.vA)(o);
        n()(null != r, "Authorize URL state query parameter must be present"), (l = r);
    } catch (r) {
        throw Error("error at authorize parsing callback params");
    }
    try {
        let o = await u.A.completeTwoWayLink(a, r, e, l, t);
        return o?.body?.redirect;
    } catch (r) {
        throw Error(`error at callback with code ${r?.body?.code ?? 0}`);
    }
}
function L(r) {
    let { platformType: e } = r;
    (0, d.A)();
    let t = (0, w._)(window.location.search),
        { code: o, token_redirect_uri: n } = l.parse(window.location.search),
        c = async (r) => {
            let { location: t } = r;
            if (null == t) return;
            let { error: a } = l.parse(t),
                c = null;
            if (null == a && null != o)
                try {
                    c = await m(t, o, n, e);
                } catch (e) {
                    f.error("Error Creating Discord link", e?.message);
                    let r = I.A.toURLSafe(t);
                    if (null == r) return;
                    r.searchParams.delete("code"),
                        r.searchParams.set("error", "two_way_link_error"),
                        r.searchParams.set("error_description", e?.message ?? "unknown_error"),
                        (t = r.toString());
                }
            window.location = null == c || c === i.U.OAUTH_REDIRECT ? t : c;
        };
    return (0, a.jsx)(T.$, {
        removeChildWrapper: !0,
        children: (0, a.jsx)(_.OAuth2AuthorizeModal, {
            transitionState: E.ip.ENTERED,
            ...t,
            showLogout: !0,
            callback: c,
        }),
    });
}
let k = (0, h.C)(function (r) {
    let { match: e } = r,
        t = e.params.type,
        { client_id: o = "" } = l.parse(window.location.search),
        n = t === y.fg2.PLAYSTATION && o === c.i.PLAYSTATION_APPLICATION_ID,
        i = t === y.fg2.PLAYSTATION_STAGING && o === c.i.PLAYSTATION_STAGING_APPLICATION_ID;
    return n || i ? (0, a.jsx)(L, { platformType: t }) : null;
});
