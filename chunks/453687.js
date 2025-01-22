r.d(n, {
    Dv: function () {
        return c;
    },
    Gq: function () {
        return l;
    },
    Gx: function () {
        return h;
    },
    XX: function () {
        return u;
    },
    bX: function () {
        return f;
    },
    bY: function () {
        return d;
    },
    iG: function () {
        return p;
    },
    ut: function () {
        return s;
    }
});
var i = r(446108),
    a = r(901461),
    o = r(981631);
function s(e) {
    return 'message-content-'.concat(e.id);
}
function l(e) {
    return 'message-reply-context-'.concat(e.id);
}
function u(e, n) {
    let r = null != n ? n : e.id;
    return 'message-username-'.concat(r);
}
function c(e) {
    return 'message-timestamp-'.concat(e.id);
}
function d(e) {
    return 'message-reactions-'.concat(e.id);
}
function f(e) {
    return 'message-accessories-'.concat(e.id);
}
function p(e, n, r) {
    let d = e.type === o.uaV.REPLY && null != e.messageReference,
        p = e.embeds.length > 0,
        h = e.attachments.length > 0,
        _ = e.stickerItems.length > 0,
        m = e.codedLinks.length > 0,
        g = e.hasFlag(o.iLy.HAS_THREAD),
        E = p || h || _ || m || g || e.type === o.uaV.THREAD_CREATED,
        v = p && e.content === e.embeds[0].url && e.embeds[0].type === o.hBH.GIFV,
        y = e.type !== o.uaV.DEFAULT || (!v && '' !== e.content),
        b = (0, a.Z)(e),
        I = !b && (null == r ? void 0 : r.hasTimestamp) !== !1,
        T = !b,
        S = u(e, n),
        A = l(e),
        C = d ? A : S,
        N = T ? ''.concat(C, ' ').concat(i.Z0) : '';
    if (y) {
        let n = s(e);
        N += ' '.concat(n);
    }
    if (E) {
        let n = f(e);
        N += ' '.concat(n);
    }
    if (I) {
        let n = c(e);
        N += ' '.concat(i.fy, ' ').concat(n);
    }
    return N.trim();
}
function h(e) {
    if (0 === e.reactions.length) return;
    let n = d(e);
    return ''.concat(i.Mb, ' ').concat(n);
}
