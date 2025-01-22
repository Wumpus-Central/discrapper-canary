r.d(n, {
    En: function () {
        return F;
    },
    dY: function () {
        return k;
    },
    eC: function () {
        return Z;
    },
    jz: function () {
        return B;
    },
    kC: function () {
        return w;
    },
    l3: function () {
        return U;
    },
    o3: function () {
        return M;
    },
    vP: function () {
        return G;
    }
});
var i = r(789020);
var a = r(315314);
var o = r(610138);
var s = r(216116);
var l = r(78328);
var u = r(815648);
var c = r(47120);
var d = r(653041);
var f = r(392711),
    p = r.n(f),
    h = r(913527),
    _ = r.n(h),
    m = r(866442),
    g = r(849727),
    E = r(948141),
    v = r(630388),
    y = r(709054),
    b = r(981631),
    I = r(817384);
let T = /sketchfab/i,
    S = /^https:\/\/sketchfab\.com/i,
    A = /youtube|steam|imgur|vimeo|sketchfab|soundcloud|streamable|twitch|vid\.me|twitter/i,
    C = 1492472454139,
    N = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop$/,
    R = /^https?:\/\/(?:canary\.|ptb\.|www\.)?discord(?:app)?\.com\/channels\/([0-9]+)\/shop\/([0-9]+)$/,
    O = RegExp('^https://(?:(?:canary\\.|ptb\\.)?discord(?:app)?.com|staging\\.discord\\.co)/shop');
function D(e) {
    let { width: n, height: r } = e;
    return n > 0 && r > 0;
}
function L(e, n, r) {
    if ((null != n && T.test(n.name)) || S.test(r.url)) return !1;
    let i = null != r.proxy_url || /^https:/i.test(r.url);
    return null != e && y.default.extractTimestamp(e) < C && (i = i && null != n && A.test(n.name)), i;
}
function x(e) {
    let { url: n, proxy_url: r, width: i, height: a, placeholder: o, placeholder_version: s, flags: l } = e,
        u = g.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled || E.Z.getCurrentConfig({ location: 'embed_utils_sanitize_media' }).enabled;
    return {
        url: n,
        proxyURL: r,
        width: i,
        height: a,
        placeholder: o,
        placeholderVersion: s,
        srcIsAnimated: u && (0, v.yE)(null != l ? l : 0, b.FoC.IS_ANIMATED),
        flags: u ? (null != l ? l : 0) : (0, v.Ge)(null != l ? l : 0, b.FoC.IS_ANIMATED)
    };
}
function w(e, n, r) {
    let i = {
        id: p().uniqueId('embed_'),
        url: r.url,
        type: r.type,
        rawTitle: r.title,
        rawDescription: r.description,
        referenceId: r.reference_id,
        flags: r.flags,
        contentScanVersion: r.content_scan_version
    };
    if (
        (null != r.footer &&
            (i.footer = {
                text: r.footer.text,
                iconURL: r.footer.icon_url,
                iconProxyURL: r.footer.proxy_icon_url
            }),
        null != r.author &&
            null != r.author.name &&
            (i.author = {
                name: r.author.name,
                url: r.author.url,
                iconURL: r.author.icon_url,
                iconProxyURL: r.author.proxy_icon_url
            }),
        null != r.provider &&
            null != r.provider.name &&
            (i.provider = {
                name: r.provider.name,
                url: r.provider.url
            }),
        null != r.timestamp && (i.timestamp = _()(new Date(r.timestamp))),
        null != r.color && (i.color = (0, m.ho)(r.color, !0)),
        null != r.thumbnail && D(r.thumbnail))
    )
        switch (i.type) {
            case b.hBH.ARTICLE:
            case b.hBH.IMAGE:
                i.image = x(r.thumbnail);
                break;
            default:
                i.thumbnail = x(r.thumbnail);
        }
    if (
        (null != r.image && D(r.image) && (i.image = x(r.image)),
        null != r.video &&
            (null == i.thumbnail &&
                null != r.video.proxy_url &&
                D(r.video) &&
                (i.thumbnail = {
                    width: r.video.width,
                    height: r.video.height,
                    url: P(r.video.proxy_url, { format: 'webp' })
                }),
            null != i.thumbnail && D(r.video) && L(n, r.provider, r.video) && (i.video = x(r.video))),
        I.k.has(i.type))
    ) {
        var a;
        let e = null !== (a = r.fields) && void 0 !== a ? a : [];
        i.fields = e.map((e) => {
            let { name: n, value: r, inline: i } = e;
            return {
                rawName: n,
                rawValue: r,
                inline: i
            };
        });
    } else i.fields = [];
    return i;
}
function P(e, n) {
    let r = new URL(e);
    return (
        Object.keys(n).forEach((e) => {
            r.searchParams.set(e, n[e]);
        }),
        r.toString()
    );
}
function M(e) {
    let n = new Map(),
        r = [];
    return (
        e.forEach((e) => {
            if (null == e.url) {
                r.push(e);
                return;
            }
            let i = n.get(e.url);
            if (null == i) {
                r.push(e), n.set(e.url, e);
                return;
            }
            if (null != e.image) null == i.images && ((i.images = []), null != i.image && i.images.push(i.image)), i.images.push(e.image);
        }),
        r
    );
}
function k(e) {
    let { image: n, video: r, type: i, author: a, rawTitle: o } = e;
    return (null != n || null != r) && (i === b.hBH.GIFV || (i !== b.hBH.RICH && null == a && null == o));
}
function U(e) {
    return e.type === b.hBH.ARTICLE && null != e.url && (R.test(e.url) || N.test(e.url));
}
function B(e) {
    return e.type === b.hBH.ARTICLE && null != e.url && O.test(e.url);
}
function G(e, n, r) {
    var i;
    return null != n && null != r
        ? {
              maxMediaWidth: n,
              maxMediaHeight: r
          }
        : (null === (i = e.provider) || void 0 === i ? void 0 : i.name) === 'TikTok'
          ? {
                maxMediaWidth: 400,
                maxMediaHeight: 450
            }
          : {
                maxMediaWidth: 400,
                maxMediaHeight: 300
            };
}
function Z(e, n) {
    return e.isPrivate() ? !e.isManaged() : n.can(b.Plq.EMBED_LINKS, e);
}
function F(e) {
    return '' !== e.content || e.messageSnapshots.some((e) => '' !== e.message.content || e.message.attachments.length > 0);
}
